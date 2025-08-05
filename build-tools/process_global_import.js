/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const fs = require('fs');
const ts = require('typescript');
const commander = require('commander');

class HandleUIImports {
  constructor(program, context, outPath) {
    this.context = context;
    this.typeChecker = program.getTypeChecker();
    this.printer = ts.createPrinter();

    this.outPath = outPath;
    this.insertPosition = 0;

    this.importedInterfaces = new Set();
    this.interfacesNeedToImport = new Set();
    this.trueSymbolAtLocationCache = new Map();

    this.dynamicImportCollection = new Map();
    this.dynamicImportType = new Map();
  }

  createCustomTransformer(sourceFile) {
    if (sourceFile?.fileName) {
      const name = path.basename(sourceFile.fileName, path.extname(sourceFile.fileName));
      if (name.includes(OHOS_ARKUI_GLOBAL_ESVALUE)) {
        if (exportFlag) {
          return ts.visitNode(sourceFile, this.visitGlobalESValueNode.bind(this));
        }
        return sourceFile;
      }
    }

    this.extractImportedNames(sourceFile);

    const statements = sourceFile.statements;
    for (let i = 0; i < statements.length; ++i) {
      const statement = statements[i];
      if (!ts.isJSDoc(statement) && !(ts.isExpressionStatement(statement) &&
        ts.isStringLiteral(statement.expression))) {
        this.insertPosition = i;
        break;
      }
    }

    return ts.visitNode(sourceFile, this.visitNode.bind(this));
  }

  visitGlobalESValueNode(node) {
    if (ts.isTypeAliasDeclaration(node) && ts.isImportTypeNode(node.type)) {
      return this.processDynamicImportInType(node);
    }

    if (ts.isImportTypeNode(node)) {
      return this.processDynamicImportInImportTypeNode(node);
    }

    const result = ts.visitEachChild(node, this.visitGlobalESValueNode.bind(this), this.context);

    if (ts.isSourceFile(result)) {
      this.processSourceFileForDynamicImport(node, result);
    }

    return result;
  }

  visitNode(node) {
    if (node.parent && ts.isStructDeclaration(node.parent) && ts.isConstructorDeclaration(node)) {
      return undefined;
    }

    if (ts.isImportDeclaration(node)) {
      const moduleSpecifier = node.moduleSpecifier;
      if (ts.isStringLiteral(moduleSpecifier)) {
        const modulePath = moduleSpecifier.text;
        if ([OHOS_ARKUI_STATEMANAGEMENT, OHOS_ARKUI_COMPONENT].includes(modulePath)) {
          return node;
        }
      }
    }

    this.handleImportBuilder(node);
    const result = ts.visitEachChild(node, this.visitNode.bind(this), this.context);

    if (ts.isIdentifier(result) && !this.shouldSkipIdentifier(result)) {
      this.interfacesNeedToImport.add(result.text);
    } else if (ts.isSourceFile(result)) {
      this.addUIImports(result);
    }

    return result;
  }

  processTypeWithLongMemberChain(node, moduleName, memberChain) {
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createQualifiedName(
          ts.factory.createIdentifier(moduleName),
          ts.factory.createIdentifier(memberChain[1])
        ),
        undefined
      )
    );
  }

  processDynamicImportInType(node) {
    const typeName = node.name.text;
    const importType = node.type;
    const modulePath = importType.argument.literal.text;
    const moduleName = this.extractLastSegment(modulePath);
    const memberChain = this.extractFromImportTypeNode(importType);
    const hasGeneric = !!node.typeParameters?.length;

    if (!this.hasDefaultInMemberChain(memberChain) &&
      (!hasGeneric || !node.typeParameters[0].default)) {

      if (memberChain.length > 1) {
        return this.processTypeWithLongMemberChain(node, moduleName, memberChain);
      }
      this.collectDynamicImport(modulePath, typeName);
      return this.processTypeWithoutDefaultOnly(typeName, modulePath);
    }

    if (this.hasDefaultInMemberChain(memberChain) && memberChain.length > 1) {
      this.collectDynamicImport(modulePath, moduleName);
      return this.processTypeWithDefaultAndLongMemberChain(node, modulePath, moduleName, memberChain);
    }

    if (this.hasDefaultInMemberChain(memberChain) && memberChain.length === 1) {
      this.collectDynamicImport(modulePath, typeName);
      return this.processTypeWithDefaultAndOneMember(typeName, modulePath);
    }

    if (hasGeneric && node.typeParameters[0].default) {
      this.collectDynamicImport(modulePath, typeName);
      return this.processHasGeneric(node, typeName, modulePath);
    }

    return node;
  }

  processDynamicImportInImportTypeNode(node) {
    const modulePath = node.argument.literal.text;
    const moduleName = this.extractLastSegment(modulePath);
    const memberChain = this.extractFromImportTypeNode(node);

    if (memberChain.includes(DEFAULT)) {
      this.setImportType(modulePath, ImportType.DEFAULT);
      this.collectDynamicImport(modulePath, moduleName);
      return ts.factory.createIdentifier(moduleName);
    } else if (memberChain.length) {
      this.setImportType(modulePath, ImportType.NAMED);
      this.collectDynamicImport(modulePath, memberChain[0]);
      return ts.factory.createTypeReferenceNode(
        node.qualifier,
        node.typeArguments
      );
    }
    return node;
  }

  processSourceFileForDynamicImport(node, result) {
    const newStatements = [...result.statements];
    if (this.dynamicImportCollection.size) {
      this.addImportForDynamicImport(newStatements);
    }

    const updatedStatements = ts.factory.createNodeArray(newStatements);
    const updatedSourceFile = ts.factory.updateSourceFile(node,
      updatedStatements,
      node.isDeclarationFile,
      node.referencedFiles,
      node.typeReferenceDirectives,
      node.hasNoDefaultLib,
      node.libReferenceDirectives
    );

    const updatedCode = this.printer.printFile(updatedSourceFile);
    if (this.outPath) {
      fs.writeFileSync(this.outPath, updatedCode);
    } else {
      fs.writeFileSync(updatedSourceFile.fileName, updatedCode);
    }
  }

  addUIImports(node) {
    if (!this.isNeedAddImports(node)) {
      return;
    }

    const compImportSpecifiers = [];
    const stateImportSpecifiers = [];

    this.interfacesNeedToImport.forEach((interfaceName) => {
      if (this.importedInterfaces.has(interfaceName)) {
        return;
      }
      const identifier = ts.factory.createIdentifier(interfaceName);
      if (decoratorsWhiteList.includes(interfaceName)) {
        stateImportSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, identifier));
      } else {
        compImportSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, identifier));
      }
    });

    if (compImportSpecifiers.length + stateImportSpecifiers.length > 0) {
      this.processAddUIImport(node, compImportSpecifiers, stateImportSpecifiers);
    }
  }

  processTypeWithoutDefaultOnly(typeName, modulePath) {
    this.setImportType(modulePath, ImportType.NAMED);
    return ts.factory.createExportDeclaration(
      undefined,
      false,
      ts.factory.createNamedExports([ts.factory.createExportSpecifier(
        false,
        undefined,
        ts.factory.createIdentifier(typeName)
      )]),
      undefined,
      undefined
    );
  }

  processTypeWithDefaultAndLongMemberChain(node, modulePath, moduleName, memberChain) {
    this.setImportType(modulePath, ImportType.DEFAULT);
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createQualifiedName(
          ts.factory.createIdentifier(moduleName),
          ts.factory.createIdentifier(memberChain[1])
        ),
        undefined
      )
    );
  }

  processTypeWithDefaultAndOneMember(typeName, modulePath) {
    this.setImportType(modulePath, ImportType.DEFAULT);
    return ts.factory.createExportDeclaration(
      undefined,
      false,
      ts.factory.createNamedExports([ts.factory.createExportSpecifier(
        false,
        undefined,
        ts.factory.createIdentifier(typeName)
      )]),
      undefined,
      undefined
    );
  }

  processHasGeneric(node, typeName, modulePath) {
    this.setImportType(modulePath, ImportType.ALIAS);
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier(typeName + GENERIC_T),
        [ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier(GENERIC_T),
          undefined
        )]
      )
    );
  }

  addImportForDynamicImport(newStatements) {
    this.dynamicImportCollection.forEach((value, key) => {
      if (this.dynamicImportType.get(key) === ImportType.DEFAULT) {
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined,
            ts.factory.createIdentifier(Array.from(value)[0]), undefined),
          ts.factory.createStringLiteral(key),
          undefined
        ));
      } else if (this.dynamicImportType.get(key) === ImportType.NAMED) {
        const namedImports = ts.factory.createNamedImports(Array.from(value).map(v => {
          return ts.factory.createImportSpecifier(false, undefined,
            ts.factory.createIdentifier(v));
        }));
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined, undefined, namedImports),
          ts.factory.createStringLiteral(key), undefined
        ));
      } else {
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined, undefined,
            ts.factory.createNamedImports([ts.factory.createImportSpecifier(false,
              ts.factory.createIdentifier(Array.from(value)[0]),
              ts.factory.createIdentifier(Array.from(value)[0] + 'T')
            )])
          ),
          ts.factory.createStringLiteral(key), undefined
        ));
      }
    });

    this.createPromptActionDefaultImport(newStatements);
  }

  createPromptActionDefaultImport(newStatements) {
    newStatements.splice(1, 0, ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        undefined,
        ts.factory.createIdentifier('promptAction'),
        undefined
      ),
      ts.factory.createStringLiteral('./@ohos.promptAction'),
      undefined
    ));
  }

 extractFromImportTypeNode(importTypeNode) {
    if (!importTypeNode.qualifier) {
      return [];
    }

    return importTypeNode.qualifier.getText().split('.');
  }

  collectDynamicImport(k, v) {
    if (this.dynamicImportCollection.has(k)) {
      this.dynamicImportCollection.get(k).add(v);
    } else {
      this.dynamicImportCollection.set(k, new Set([v]));
    }
  }

  extractLastSegment(path) {
    const slashIndex = path.lastIndexOf('/');
    const dotIndex = path.lastIndexOf('.');

    const lastSeparatorIndex = Math.max(slashIndex, dotIndex);
    if (lastSeparatorIndex !== -1 && lastSeparatorIndex < path.length - 1) {
        return path.slice(lastSeparatorIndex + 1);
    }

    return null;
  }

  hasDefaultInMemberChain(memberChain) {
    return memberChain.includes(DEFAULT);
  }

  setImportType(modulePath, type) {
    this.dynamicImportType.set(modulePath, type);
  }

  handleImportBuilder(node) {
    ts.getAllDecorators(node)?.forEach(element => {
      if (element?.getText() === '@' + ARKUI_BUILDER) {
        this.interfacesNeedToImport.add(ARKUI_BUILDER);
        return;
      }
    });
  }

  hasKitArkUI(node) {
    return node.text?.includes(OHOS_KIT_ARKUI);
  }

  getCoreFilename(fileName) {
    if (fileName.endsWith(EXTNAME_D_ETS)) {
      return fileName.slice(0, -EXTNAME_D_ETS.length);
    }
    return fileName;
  }

  isNeedAddImports(node) {
    if (!ts.isSourceFile(node)) {
      return false;
    }

    if (node.fileName.includes(OHOS_ARKUI) ||
      whiteFileList.includes(this.getCoreFilename(path.basename(node.fileName))) ||
      this.hasKitArkUI(node)) {
      return true;
    }

    return false;
  }

  processSourceFileForUIImport(node, newStatements) {
    const updatedStatements = ts.factory.createNodeArray(newStatements);
    const updatedSourceFile = ts.factory.updateSourceFile(node,
      updatedStatements,
      node.isDeclarationFile,
      node.referencedFiles,
      node.typeReferenceDirectives,
      node.hasNoDefaultLib,
      node.libReferenceDirectives
    );

    const updatedCode = this.printer.printFile(updatedSourceFile);
    if (this.outPath) {
      fs.writeFileSync(this.outPath, updatedCode);
    } else {
      fs.writeFileSync(updatedSourceFile.fileName, updatedCode);
    }
  }

  addArkUIPath(node, moduleName) {
    if (ts.isSourceFile(node)) {
      const fileName = node.fileName;
      const paths = ['ability', 'advertising', 'app', 'application', 'arkui', 'bundle',
        'bundleManager', 'commonEvent', 'continuation', 'data', 'global', 'graphics3d',
        'multimedia', 'notification', 'security', 'tag', 'wantAgent'];
      if (paths.some(path => fileName.includes('/api/' + path + '/'))) {
        return '.' + moduleName;
      }
    }
    return moduleName;
  }

  processAddUIImport(node, compImportSpecifiers, stateImportSpecifiers) {
    const newStatements = [...node.statements];
    if (compImportSpecifiers.length) {
      const moduleName = this.addArkUIPath(node, OHOS_ARKUI_COMPONENT);
      const compImportDeclaration = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(false,
          undefined,
          ts.factory.createNamedImports(
            compImportSpecifiers
          )
        ),
        ts.factory.createStringLiteral(moduleName, true),
        undefined
      );
      newStatements.splice(this.insertPosition, 0, compImportDeclaration);
    }

    if (stateImportSpecifiers.length) {
      const moduleName = this.addArkUIPath(node, OHOS_ARKUI_STATEMANAGEMENT);
      const stateImportDeclaration = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(false,
          undefined,
          ts.factory.createNamedImports(
            stateImportSpecifiers
          )
        ),
        ts.factory.createStringLiteral(moduleName, true),
        undefined
      );
      newStatements.splice(this.insertPosition, 0, stateImportDeclaration);
    }

    this.processSourceFileForUIImport(node, newStatements);
  }

  getDeclarationNode(node) {
    const symbol = this.trueSymbolAtLocation(node);
    return HandleUIImports.getDeclaration(symbol);
  }

  static getDeclaration(tsSymbol) {
    if (tsSymbol?.declarations && tsSymbol.declarations.length > 0) {
      return tsSymbol.declarations[0];
    }

    return undefined;
  }

  followIfAliased(symbol) {
    if ((symbol.getFlags() & ts.SymbolFlags.Alias) !== 0) {
      return this.typeChecker.getAliasedSymbol(symbol);
    }

    return symbol;
  }

  trueSymbolAtLocation(node) {
    const cache = this.trueSymbolAtLocationCache;
    const val = cache.get(node);

    if (val !== undefined) {
      return val !== null ? val : undefined;
    }

    let symbol = this.typeChecker.getSymbolAtLocation(node);

    if (symbol === undefined) {
      cache.set(node, null);
      return undefined;
    }

    symbol = this.followIfAliased(symbol);
    cache.set(node, symbol);

    return symbol;
  }

  shouldSkipIdentifier(identifier) {
    const name = identifier.text;
    const skippedList = new Set([ARKUI_EXTEND, ARKUI_STYLES]);
    if (skippedList.has(name)) {
      return true;
    }

    if (!whiteList.has(name)) {
      return true;
    }

    const symbol = this.typeChecker.getSymbolAtLocation(identifier);
    if (symbol) {
      const decl = this.getDeclarationNode(identifier);
      if (decl?.getSourceFile() === identifier.getSourceFile()) {
        return true;
      }
    }

    return this.interfacesNeedToImport.has(name);
  }

  extractImportedNames(sourceFile) {
    for (const statement of sourceFile.statements) {
      if (!ts.isImportDeclaration(statement)) {
        continue;
      }

      const importClause = statement.importClause;
      if (!importClause) {
        continue;
      }

      const namedBindings = importClause.namedBindings;
      if (!namedBindings || !ts.isNamedImports(namedBindings)) {
        continue;
      }

      for (const specifier of namedBindings.elements) {
        const importedName = specifier.name.getText(sourceFile);
        this.importedInterfaces.add(importedName);
      }
    }
  }
}

function processInteropUI(path, outPath = '') {
  const filePaths = getDeclgenFiles(path);
  const program = ts.createProgram(filePaths, defaultCompilerOptions());
  const sourceFiles = getSourceFiles(program, filePaths);

  const createTransformer = (ctx) => {
    return (sourceFile) => {
      const handleUIImports = new HandleUIImports(program, ctx, outPath);
      return handleUIImports.createCustomTransformer(sourceFile);
    };
  };
  ts.transform(sourceFiles, [createTransformer]);
}

function getDeclgenFiles(dir, filePaths = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getDeclgenFiles(filePath, filePaths);
    } else if (stat.isFile() && file.endsWith(EXTNAME_D_ETS)) {
      filePaths.push(filePath);
    }
  });

  return filePaths;
}

function defaultCompilerOptions() {
  return {
    target: ts.ScriptTarget.Latest,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    checkJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmit: false
  };
}

function getSourceFiles(program, filePaths) {
  const sourceFiles = [];

  filePaths.forEach(filePath => {
    sourceFiles.push(program.getSourceFile(filePath));
  });

  return sourceFiles;
}

class ImportType {
  static DEFAULT = 0;
  static NAMED = 1;
  static ALIAS = 2;
  static DEFAULT_AND_NAMED = 3;
}

let outputPath = '';
let inputDir = '';
let exportFlag = false;

const whiteList = new Set([
  'ASTCResource', 'AbilityComponent', 'AbilityComponentAttribute', 'AbstractProperty',
  'AccelerationOptions', 'AccessibilityAction', 'AccessibilityActionInterceptResult',
  'AccessibilityCallback', 'AccessibilityHoverEvent', 'AccessibilityHoverType',
  'AccessibilityOptions', 'AccessibilityRoleType', 'AccessibilitySamePageMode', 'ActionSheet',
  'ActionSheetButtonOptions', 'ActionSheetOffset', 'ActionSheetOptions', 'AdaptiveColor',
  'AdsBlockedDetails', 'Affinity', 'AlertDialog', 'AlertDialogButtonBaseOptions',
  'AlertDialogButtonOptions', 'AlertDialogParam', 'AlertDialogParamWithButtons',
  'AlertDialogParamWithConfirm', 'AlertDialogParamWithOptions', 'AlignRuleOption', 'Alignment',
  'AlphabetIndexer', 'AlphabetIndexerAttribute', 'AlphabetIndexerOptions', 'AnchoredColorMode',
  'AnimatableArithmetic', 'AnimatableExtend', 'AnimateParam', 'AnimationExtender',
  'AnimationMode', 'AnimationPropertyType', 'AnimationRange', 'AnimationStatus', 'Animator',
  'AnimatorAttribute', 'AnimatorInterface', 'AppRotation', 'AppStorage', 'AppearSymbolEffect',
  'Area', 'ArrowPointPosition', 'ArrowPosition', 'ArrowStyle', 'AttributeModifier',
  'AutoCapitalizationMode', 'AutoPlayOptions', 'AvailableLayoutArea', 'AvoidanceMode', 'Axis',
  'AxisAction', 'AxisEvent', 'AxisModel', 'BackgroundBlurStyleOptions',
  'BackgroundBrightnessOptions', 'BackgroundColorStyle', 'BackgroundEffectOptions',
  'BackgroundImageOptions', 'Badge', 'BadgeAttribute', 'BadgeParam', 'BadgeParamWithNumber',
  'BadgeParamWithString', 'BadgePosition', 'BadgeStyle', 'BarGridColumnOptions', 'BarMode',
  'BarPosition', 'BarState', 'BarStyle', 'BarrierDirection', 'BarrierStyle', 'BaseCustomComponent',
  'BaseEvent', 'BaseGestureEvent', 'BaseHandlerOptions', 'BaseShape', 'BaseSpan',
  'BaselineOffsetStyle', 'Bias', 'BindOptions', 'Blank', 'BlankAttribute', 'BlendApplyType',
  'BlendMode', 'Blender', 'BlurOptions', 'BlurStyle', 'BlurStyleActivePolicy',
  'BlurStyleOptions', 'BoardStyle', 'BorderImageOption', 'BorderOptions', 'BorderRadiuses',
  'BorderStyle', 'BottomTabBarStyle', 'BounceSymbolEffect', 'BreakPoints', 'BreakpointsReference',
  'Builder', 'BuilderAttachment', 'BuilderAttachmentInterface', 'BuilderParam', 'BusinessError',
  'Button', 'ButtonAttribute', 'ButtonConfiguration', 'ButtonIconOptions', 'ButtonOptions',
  'ButtonRole', 'ButtonStyle', 'ButtonStyleMode', 'ButtonTriggerClickCallback', 'ButtonType',
  'CacheMode', 'Calendar', 'CalendarAlign', 'CalendarAttribute', 'CalendarController',
  'CalendarDay', 'CalendarDialogOptions', 'CalendarOptions', 'CalendarPicker',
  'CalendarPickerAttribute', 'CalendarPickerDialog', 'CalendarRequestedData',
  'CalendarSelectedDate', 'Callback', 'CallbackBuffer', 'CallbackKind', 'CallbackResource',
  'CallbackResourceHolder', 'CancelButtonOptions', 'CancelButtonStyle',
  'CancelButtonSymbolOptions', 'Canvas', 'CanvasAttribute', 'CanvasDirection', 'CanvasFillRule',
  'CanvasGradient', 'CanvasLineCap', 'CanvasLineJoin', 'CanvasOptions', 'CanvasPath',
  'CanvasPattern', 'CanvasRenderer', 'CanvasRenderingContext2D', 'CanvasTextAlign',
  'CanvasTextBaseline', 'CapsuleStyleOptions', 'CaretOffset', 'CaretStyle', 'ChainAnimationOptions',
  'ChainEdgeEffect', 'ChainStyle', 'ChainWeightOptions', 'CheckBoxConfiguration',
  'CheckBoxShape', 'Checkbox', 'CheckboxAttribute', 'CheckboxGroup', 'CheckboxGroupAttribute',
  'CheckboxGroupOptions', 'CheckboxGroupResult', 'CheckboxOptions', 'ChildHitFilterOption',
  'ChildrenMainSize', 'Circle', 'CircleAttribute', 'CircleOptions', 'CircleShape',
  'CircleStyleOptions', 'ClickEffect', 'ClickEffectLevel', 'ClickEvent',
  'ClientAuthenticationHandler', 'CloseSwipeActionOptions', 'Color', 'ColorContent',
  'ColorFilter', 'ColorMetrics', 'ColorMode', 'ColorStop', 'ColoringStrategy', 'Column',
  'ColumnAttribute', 'ColumnOptions', 'ColumnOptionsV2', 'ColumnSplit', 'ColumnSplitAttribute',
  'ColumnSplitDividerStyle', 'CommonAttribute', 'CommonConfiguration', 'CommonMethod',
  'CommonProgressStyleOptions', 'CommonShape', 'CommonShapeMethod', 'CommonTransition',
  'Component', 'Component3D', 'Component3DAttribute', 'ComponentContent', 'ComponentOptions',
  'ComponentRoot', 'ComponentV2', 'Computed', 'ComputedBarAttribute', 'Concurrent',
  'Configuration', 'ConsoleMessage', 'ConstraintSizeOptions', 'Consume', 'Consumer',
  'ContainerSpan', 'ContainerSpanAttribute', 'Content', 'ContentClipMode', 'ContentCoverOptions',
  'ContentDidScrollCallback', 'ContentModifier', 'ContentSlot', 'ContentSlotAttribute',
  'ContentType', 'Context', 'ContextMenu', 'ContextMenuAnimationOptions',
  'ContextMenuEditStateFlags', 'ContextMenuInputFieldType', 'ContextMenuMediaType',
  'ContextMenuOptions', 'ContextMenuSourceType', 'ControlSize', 'ControllerHandler',
  'CopyEvent', 'CopyOptions', 'Counter', 'CounterAttribute', 'CrownAction', 'CrownEvent',
  'CrownSensitivity', 'CurrentDayStyle', 'Curve', 'CustomBuilder', 'CustomComponent',
  'CustomComponentV2', 'CustomDialog', 'CustomDialogController', 'CustomDialogControllerOptions',
  'CustomNodeBuilder', 'CustomPopupOptions', 'CustomSpan', 'CustomSpanDrawInfo',
  'CustomSpanMeasureInfo', 'CustomSpanMetrics', 'CustomTheme', 'CutEvent', 'DataAddOperation',
  'DataChangeListener', 'DataChangeOperation', 'DataDeleteOperation', 'DataExchangeOperation',
  'DataMoveOperation', 'DataOperation', 'DataOperationType', 'DataPanel', 'DataPanelAttribute',
  'DataPanelConfiguration', 'DataPanelOptions', 'DataPanelShadowOptions', 'DataPanelType',
  'DataReloadOperation', 'DataResubmissionHandler', 'DatePicker', 'DatePickerAttribute',
  'DatePickerDialog', 'DatePickerDialogOptions', 'DatePickerMode', 'DatePickerOptions',
  'DatePickerResult', 'DateRange', 'DateTimeOptions', 'DecorationStyle',
  'DecorationStyleInterface', 'DecorationStyleResult', 'Degree', 'DeleteValue', 'Deserializer',
  'DialogAlignment', 'DialogButtonDirection', 'DialogButtonStyle', 'DialogDisplayMode',
  'DigitIndicator', 'Dimension', 'Direction', 'DirectionalEdgesT', 'DisableSymbolEffect',
  'DisappearSymbolEffect', 'DismissContentCoverAction', 'DismissContinueReason',
  'DismissDialogAction', 'DismissFollowUpAction', 'DismissMenuAction', 'DismissPopupAction',
  'DismissReason', 'DismissSheetAction', 'DistributionType', 'DisturbanceFieldOptions',
  'DisturbanceFieldShape', 'Divider', 'DividerAttribute', 'DividerMode', 'DividerOptions',
  'DividerStyle', 'DividerStyleOptions', 'DotIndicator', 'DoubleAnimationParam',
  'DpiFollowStrategy', 'DragBehavior', 'DragEvent', 'DragInteractionOptions', 'DragItemInfo',
  'DragPointCoordinate', 'DragPreviewLiftingScale', 'DragPreviewMode', 'DragPreviewOptions',
  'DragResult', 'DraggingSizeChangeEffect', 'DrawContext', 'DrawModifier', 'DrawableDescriptor',
  'DrawingCanvas', 'DrawingColorFilter', 'DrawingLattice', 'DrawingRenderingContext',
  'DropOptions', 'DynamicNode', 'DynamicRangeMode', 'EclipseStyleOptions', 'Edge', 'EdgeColors',
  'EdgeEffect', 'EdgeEffectOptions', 'EdgeOutlineStyles', 'EdgeOutlineWidths', 'EdgeStyles',
  'EdgeWidth', 'EdgeWidths', 'Edges', 'EditMenuOptions', 'EditMode', 'EditableTextChangeValue',
  'EditableTextOnChangeCallback', 'EffectComponent', 'EffectComponentAttribute',
  'EffectDirection', 'EffectEdge', 'EffectFillStyle', 'EffectScope', 'EffectType', 'Ellipse',
  'EllipseAttribute', 'EllipseOptions', 'EllipseShape', 'EllipsisMode', 'EmbeddedComponent',
  'EmbeddedComponentAttribute', 'EmbeddedDpiFollowStrategy', 'EmbeddedOptions', 'EmbeddedType',
  'EmbeddedWindowModeFollowStrategy', 'EmitterOptions', 'EmitterParticleOptions',
  'EmitterProperty', 'EnterKeyType', 'Entry', 'EntryOptions', 'EnvPropsOptions', 'Environment',
  'ErrorCallback', 'Event', 'EventEmulator', 'EventLocationInfo', 'EventQueryType', 'EventResult',
  'EventTarget', 'EventTargetInfo', 'ExchangeIndex', 'ExchangeKey', 'ExpandedMenuItemOptions',
  'ExpectedFrameRateRange', 'Extend', 'FP', 'FadingEdgeOptions', 'FileSelectorMode',
  'FileSelectorParam', 'FileSelectorResult', 'FillMode', 'Filter', 'FingerInfo',
  'FinishCallbackType', 'FirstMeaningfulPaint', 'Flex', 'FlexAlign', 'FlexAttribute',
  'FlexDirection', 'FlexOptions', 'FlexSpaceOptions', 'FlexWrap', 'FlowItem', 'FlowItemAttribute',
  'FocusAxisEvent', 'FocusBoxStyle', 'FocusController', 'FocusDrawLevel', 'FocusMovement',
  'FocusPriority', 'FocusWrapMode', 'FoldStatus', 'FolderStack', 'FolderStackAttribute',
  'FolderStackOptions', 'Font', 'FontInfo', 'FontOptions', 'FontSettingOptions', 'FontStyle',
  'FontWeight', 'ForEach', 'ForEachAttribute', 'ForegroundBlurStyleOptions',
  'ForegroundEffectOptions', 'FormCallbackInfo', 'FormComponent', 'FormComponentAttribute',
  'FormDimension', 'FormInfo', 'FormLink', 'FormLinkAttribute', 'FormLinkOptions',
  'FormRenderingMode', 'FormShape', 'FractionStop', 'FrameNode', 'FrictionMotion',
  'FullScreenEnterEvent', 'FullScreenExitHandler', 'FullscreenInfo', 'FunctionKey', 'Gauge',
  'GaugeAttribute', 'GaugeConfiguration', 'GaugeIndicatorOptions', 'GaugeOptions',
  'GaugeShadowOptions', 'GeometryInfo', 'GeometryTransitionOptions', 'Gesture', 'GestureControl',
  'GestureEvent', 'GestureGroup', 'GestureGroupGestureHandlerOptions', 'GestureGroupHandler',
  'GestureHandler', 'GestureInfo', 'GestureJudgeResult', 'GestureMask', 'GestureMode',
  'GestureModifier', 'GesturePriority', 'GestureRecognizer',
  'GestureRecognizerJudgeBeginCallback', 'GestureRecognizerState', 'GestureStyle', 'GestureType',
  'GetItemMainSizeByIndex', 'GradientDirection', 'Grid', 'GridAttribute', 'GridCol',
  'GridColAttribute', 'GridColColumnOption', 'GridColOptions', 'GridContainer',
  'GridContainerAttribute', 'GridContainerOptions', 'GridDirection', 'GridItem',
  'GridItemAlignment', 'GridItemAttribute', 'GridItemOptions', 'GridItemStyle',
  'GridLayoutOptions', 'GridRow', 'GridRowAttribute', 'GridRowColumnOption', 'GridRowDirection',
  'GridRowOptions', 'GridRowSizeOption', 'GuideLinePosition', 'GuideLineStyle', 'GutterOption',
  'HapticFeedbackMode', 'Header', 'HeightBreakpoint', 'HierarchicalSymbolEffect',
  'HistoricalPoint', 'HitTestMode', 'HitTestType', 'HorizontalAlign', 'HoverCallback',
  'HoverEffect', 'HoverEvent', 'HoverEventParam', 'HoverModeAreaType', 'HttpAuthHandler',
  'Hyperlink', 'HyperlinkAttribute', 'ICurve', 'IDataSource', 'IMonitor', 'IMonitorValue',
  'IPropertySubscriber', 'ISinglePropertyChangeSubscriber', 'IconOptions', 'IlluminatedType',
  'Image', 'ImageAIOptions', 'ImageAnalyzerConfig', 'ImageAnalyzerController',
  'ImageAnalyzerType', 'ImageAnimator', 'ImageAnimatorAttribute', 'ImageAttachment',
  'ImageAttachmentInterface', 'ImageAttachmentLayoutStyle', 'ImageAttribute', 'ImageBitmap',
  'ImageCompleteCallback', 'ImageContent', 'ImageData', 'ImageError', 'ImageErrorCallback',
  'ImageFit', 'ImageFrameInfo', 'ImageInterpolation', 'ImageLoadResult', 'ImageModifier',
  'ImageParticleParameters', 'ImageRenderMode', 'ImageRepeat', 'ImageRotateOrientation',
  'ImageSize', 'ImageSmoothingQuality', 'ImageSourceSize', 'ImageSpan', 'ImageSpanAlignment',
  'ImageSpanAttribute', 'IndexerAlign', 'Indicator', 'IndicatorComponent',
  'IndicatorComponentAttribute', 'IndicatorComponentController', 'IndicatorStyle',
  'InputCounterOptions', 'InputType', 'InsertValue', 'IntelligentTrackingPreventionDetails',
  'IntentionCode', 'InteractionHand', 'InterceptionModeCallback', 'InterceptionShowCallback',
  'Interop', 'InvertOptions', 'IsolatedComponent', 'IsolatedComponentAttribute',
  'IsolatedOptions', 'ItemAlign', 'ItemDragEventHandler', 'ItemDragInfo', 'ItemState',
  'JavaScriptProxy', 'JsGeolocation', 'JsResult', 'KVMContext', 'KeyEvent', 'KeyProcessingMode',
  'KeySource', 'KeyType', 'KeyboardAppearance', 'KeyboardAvoidMode', 'KeyboardOptions',
  'KeyframeAnimateParam', 'KeyframeState', 'LPX', 'LabelStyle', 'LargestContentfulPaint',
  'LaunchMode', 'LayoutBorderInfo', 'LayoutChild', 'LayoutDirection', 'LayoutInfo',
  'LayoutManager', 'LayoutMode', 'LayoutPolicy', 'LayoutSafeAreaEdge', 'LayoutSafeAreaType',
  'LayoutStyle', 'Layoutable', 'LazyForEach', 'LazyForEachAttribute', 'LazyForEachOps',
  'LazyGridLayoutAttribute', 'LazyVGridLayout', 'LazyVGridLayoutAttribute',
  'LeadingMarginPlaceholder', 'Length', 'LengthConstrain', 'LengthMetrics',
  'LengthMetricsUnit', 'LengthUnit', 'LetterSpacingStyle', 'LightSource', 'Line', 'LineAttribute',
  'LineBreakStrategy', 'LineCapStyle', 'LineHeightStyle', 'LineJoinStyle', 'LineMetrics',
  'LineOptions', 'LineSpacingOptions', 'LinearGradient', 'LinearGradientBlurOptions',
  'LinearGradientOptions', 'LinearIndicator', 'LinearIndicatorAttribute',
  'LinearIndicatorController', 'LinearIndicatorStartOptions', 'LinearIndicatorStyle',
  'LinearStyleOptions', 'Link', 'List', 'ListAttribute', 'ListDividerOptions', 'ListItem',
  'ListItemAlign', 'ListItemAttribute', 'ListItemGroup', 'ListItemGroupArea',
  'ListItemGroupAttribute', 'ListItemGroupOptions', 'ListItemGroupStyle', 'ListItemOptions',
  'ListItemStyle', 'ListOptions', 'ListScroller', 'LoadCommittedDetails', 'Loader',
  'LoadingProgress', 'LoadingProgressAttribute', 'LoadingProgressConfiguration',
  'LoadingProgressStyle', 'Local', 'LocalBuilder', 'LocalStorage', 'LocalStorageLink',
  'LocalStorageProp', 'LocalizedAlignRuleOptions', 'LocalizedAlignment',
  'LocalizedBarrierDirection', 'LocalizedBarrierStyle', 'LocalizedBorderRadiuses',
  'LocalizedDragPointCoordinate', 'LocalizedEdgeColors', 'LocalizedEdgeWidths',
  'LocalizedEdges', 'LocalizedHorizontalAlignParam', 'LocalizedMargin', 'LocalizedPadding',
  'LocalizedPosition', 'LocalizedVerticalAlignParam', 'LocationButton', 'LocationButtonAttribute',
  'LocationButtonOnClickResult', 'LocationButtonOptions', 'LocationDescription',
  'LocationIconStyle', 'LongPressGesture', 'LongPressGestureEvent', 'LongPressGestureHandler',
  'LongPressGestureHandlerOptions', 'LongPressGestureParams', 'LongPressRecognizer',
  'LunarSwitchStyle', 'Margin', 'MarkStyle', 'Marquee', 'MarqueeAttribute', 'MarqueeOptions',
  'MarqueeStartPolicy', 'MarqueeState', 'MarqueeUpdateStrategy', 'Materialized', 'Matrix2D',
  'MaxLinesMode', 'MaxLinesOptions', 'Measurable', 'MeasureOptions', 'MeasureResult',
  'MediaCachedImage', 'MediaCachedImageAttribute', 'Memo', 'Menu', 'MenuAlignType',
  'MenuAttribute', 'MenuElement', 'MenuItem', 'MenuItemAttribute', 'MenuItemConfiguration',
  'MenuItemGroup', 'MenuItemGroupAttribute', 'MenuItemGroupOptions', 'MenuItemOptions',
  'MenuItemOptionsV2', 'MenuMaskType', 'MenuOnAppearCallback', 'MenuOptions',
  'MenuOutlineOptions', 'MenuPolicy', 'MenuPreviewMode', 'MenuType', 'MessageLevel',
  'MixedMode', 'ModalMode', 'ModalTransition', 'ModelType', 'ModifierKey', 'Monitor',
  'MonthData', 'MoreButtonOptions', 'MotionBlurAnchor', 'MotionBlurOptions',
  'MotionPathOptions', 'MouseAction', 'MouseButton', 'MouseEvent', 'MoveIndex',
  'MultiShadowOptions', 'MutableStyledString', 'NativeEmbedDataInfo', 'NativeEmbedInfo',
  'NativeEmbedStatus', 'NativeEmbedTouchInfo', 'NativeEmbedVisibilityInfo',
  'NativeMediaPlayerConfig', 'NativeXComponentParameters', 'NavBar', 'NavBarPosition',
  'NavContentInfo', 'NavDestination', 'NavDestinationActiveReason', 'NavDestinationAttribute',
  'NavDestinationCommonTitle', 'NavDestinationContext', 'NavDestinationCustomTitle',
  'NavDestinationInfo', 'NavDestinationMode', 'NavDestinationTransition', 'NavExtender',
  'NavPathInfo', 'NavPathStack', 'NavRouteMode', 'NavRouter', 'NavRouterAttribute',
  'Navigation', 'NavigationAnimatedTransition', 'NavigationAttribute', 'NavigationCommonTitle',
  'NavigationCustomTitle', 'NavigationDividerStyle', 'NavigationInfo', 'NavigationInterception',
  'NavigationMenuItem', 'NavigationMenuOptions', 'NavigationMode', 'NavigationOperation',
  'NavigationOptions', 'NavigationSystemTransitionType', 'NavigationTitleMode',
  'NavigationTitleOptions', 'NavigationToolbarOptions', 'NavigationTransitionProxy',
  'NavigationType', 'Navigator', 'NavigatorAttribute', 'NestedScrollInfo', 'NestedScrollMode',
  'NestedScrollOptions', 'NestedScrollOptionsExt', 'Node', 'NodeContainer',
  'NodeContainerAttribute', 'NodeController', 'NonCurrentDayStyle', 'Nullable', 'ObjectLink',
  'ObscuredReasons', 'Observed', 'ObservedV2', 'OffscreenCanvas',
  'OffscreenCanvasRenderingContext2D', 'Offset', 'OffsetOptions', 'OffsetResult',
  'OnAdsBlockedCallback', 'OnAlertEvent', 'OnAlphabetIndexerPopupSelectCallback',
  'OnAlphabetIndexerRequestPopupDataCallback', 'OnAlphabetIndexerSelectCallback',
  'OnAudioStateChangedEvent', 'OnBeforeUnloadEvent', 'OnCheckboxChangeCallback',
  'OnCheckboxGroupChangeCallback', 'OnClientAuthenticationEvent', 'OnConfirmEvent',
  'OnConsoleEvent', 'OnContentScrollCallback', 'OnContextMenuHideCallback',
  'OnContextMenuShowEvent', 'OnDataResubmittedEvent', 'OnDidChangeCallback',
  'OnDownloadStartEvent', 'OnErrorReceiveEvent', 'OnFaviconReceivedEvent',
  'OnFirstContentfulPaintEvent', 'OnFirstMeaningfulPaintCallback', 'OnFoldStatusChangeCallback',
  'OnFoldStatusChangeInfo', 'OnFullScreenEnterCallback', 'OnGeolocationShowEvent',
  'OnHoverStatusChangeCallback', 'OnHttpAuthRequestEvent', 'OnHttpErrorReceiveEvent',
  'OnIntelligentTrackingPreventionCallback', 'OnInterceptRequestEvent',
  'OnLargestContentfulPaintCallback', 'OnLinearIndicatorChangeCallback', 'OnLoadInterceptEvent',
  'OnMoveHandler', 'OnNativeEmbedVisibilityChangeCallback', 'OnNativeLoadCallback',
  'OnNavigationEntryCommittedCallback', 'OnOverScrollEvent', 'OnOverrideUrlLoadingCallback',
  'OnPageBeginEvent', 'OnPageEndEvent', 'OnPageVisibleEvent', 'OnPasteCallback',
  'OnPermissionRequestEvent', 'OnProgressChangeEvent', 'OnPromptEvent',
  'OnRefreshAccessedHistoryEvent', 'OnRenderExitedEvent',
  'OnRenderProcessNotRespondingCallback', 'OnRenderProcessRespondingCallback',
  'OnResourceLoadEvent', 'OnSafeBrowsingCheckResultCallback', 'OnScaleChangeEvent',
  'OnScreenCaptureRequestEvent', 'OnScrollCallback', 'OnScrollEdgeCallback', 'OnScrollEvent',
  'OnScrollFrameBeginCallback', 'OnScrollFrameBeginHandlerResult',
  'OnScrollVisibleContentChangeCallback', 'OnSearchResultReceiveEvent',
  'OnShowFileSelectorEvent', 'OnSslErrorEventCallback', 'OnSslErrorEventReceiveEvent',
  'OnSubmitCallback', 'OnSwiperAnimationEndCallback', 'OnSwiperAnimationStartCallback',
  'OnSwiperGestureSwipeCallback', 'OnTabsAnimationEndCallback', 'OnTabsAnimationStartCallback',
  'OnTabsContentWillChangeCallback', 'OnTabsGestureSwipeCallback',
  'OnTextSelectionChangeCallback', 'OnTitleReceiveEvent', 'OnTouchIconUrlReceivedEvent',
  'OnViewportFitChangedCallback', 'OnWillScrollCallback', 'OnWindowNewEvent', 'Once',
  'OptionWidthMode', 'Optional', 'OutlineOptions', 'OutlineRadiuses', 'OutlineStyle',
  'OverScrollMode', 'OverlayOffset', 'OverlayOptions', 'PX', 'Padding', 'PageFlipMode',
  'PageTransitionCallback', 'PageTransitionEnter', 'PageTransitionExit', 'PageTransitionOptions',
  'PanDirection', 'PanGesture', 'PanGestureEvent', 'PanGestureHandler',
  'PanGestureHandlerOptions', 'PanGestureOptions', 'PanGestureParams', 'PanRecognizer',
  'Panel', 'PanelAttribute', 'PanelHeight', 'PanelMode', 'PanelType', 'ParagraphStyle',
  'ParagraphStyleInterface', 'Param', 'Particle', 'ParticleAnnulusRegion', 'ParticleAttribute',
  'ParticleColorOptions', 'ParticleColorPropertyOptions',
  'ParticleColorPropertyUpdaterConfigs', 'ParticleColorUpdaterOptions', 'ParticleConfigs',
  'ParticleEmitterShape', 'ParticleOptions', 'ParticlePropertyAnimation',
  'ParticlePropertyOptions', 'ParticlePropertyUpdaterConfigs', 'ParticleTuple', 'ParticleType',
  'ParticleUpdater', 'ParticleUpdaterOptions', 'Particles', 'PasswordIcon', 'PasteButton',
  'PasteButtonAttribute', 'PasteButtonOnClickResult', 'PasteButtonOptions', 'PasteDescription',
  'PasteEvent', 'PasteEventCallback', 'PasteIconStyle', 'Path', 'Path2D', 'PathAttribute',
  'PathOptions', 'PathShape', 'PathShapeOptions', 'PatternLock', 'PatternLockAttribute',
  'PatternLockChallengeResult', 'PatternLockController', 'Percentage', 'PerfMonitorActionType',
  'PerfMonitorSourceType', 'PermissionRequest', 'PersistPropsOptions', 'PersistentStorage',
  'PickerBackgroundStyle', 'PickerDialogButtonStyle', 'PickerTextStyle', 'PinchGesture',
  'PinchGestureEvent', 'PinchGestureHandler', 'PinchGestureHandlerOptions', 'PinchGestureParams',
  'PinchRecognizer', 'PixelMap', 'PixelMapMock', 'PixelRoundCalcPolicy', 'PixelRoundMode',
  'PixelRoundPolicy', 'PixelStretchEffectOptions', 'PlaceholderStyle', 'Placement', 'PlayMode',
  'PlaybackInfo', 'PlaybackSpeed', 'PluginComponent', 'PluginComponentAttribute',
  'PluginComponentOptions', 'PluginComponentTemplate', 'PluginErrorCallback', 'PluginErrorData',
  'Point', 'PointLightStyle', 'PointParticleParameters', 'PointerStyle', 'Polygon',
  'PolygonAttribute', 'PolygonOptions', 'Polyline', 'PolylineAttribute', 'PolylineOptions',
  'PopInfo', 'PopupBorderLinearGradient', 'PopupCommonOptions', 'PopupMaskType',
  'PopupMessageOptions', 'PopupOptions', 'PopupStateChangeParam', 'Position', 'PositionT',
  'PositionWithAffinity', 'PosterOptions', 'PreDragStatus', 'PreparedInfo', 'Preview',
  'PreviewConfiguration', 'PreviewMenuOptions', 'PreviewParams', 'PreviewText', 'Profiler',
  'Progress', 'ProgressAttribute', 'ProgressConfiguration', 'ProgressMask', 'ProgressOptions',
  'ProgressStatus', 'ProgressStyle', 'ProgressStyleMap', 'ProgressStyleOptions', 'ProgressType',
  'Prop', 'ProtectedResourceType', 'Provide', 'ProvideOptions', 'Provider', 'PulseSymbolEffect',
  'QRCode', 'QRCodeAttribute', 'QuickReplaceSymbolEffect', 'RRect', 'RadialGradientOptions',
  'Radio', 'RadioAttribute', 'RadioConfiguration', 'RadioIndicatorType', 'RadioOptions',
  'RadioStyle', 'Rating', 'RatingAttribute', 'RatingConfiguration', 'RatingOptions',
  'RawFileDescriptor', 'ReceiveCallback', 'Rect', 'RectAttribute', 'RectHeightStyle',
  'RectOptions', 'RectResult', 'RectShape', 'RectShapeOptions', 'RectWidthStyle', 'Rectangle',
  'Refresh', 'RefreshAttribute', 'RefreshOptions', 'RefreshStatus', 'RelateType',
  'RelativeContainer', 'RelativeContainerAttribute', 'RemoteWindow', 'RemoteWindowAttribute',
  'RenderExitReason', 'RenderFit', 'RenderMode', 'RenderProcessNotRespondingData',
  'RenderProcessNotRespondingReason', 'RenderingContextSettings', 'RepeatAttribute',
  'RepeatItem', 'RepeatMode', 'ReplaceSymbolEffect', 'Require', 'ResizableOptions',
  'ResolutionQuality', 'Resource', 'ResourceColor', 'ResourceImageAttachmentOptions',
  'ResourceStr', 'ResponseType', 'RestrictedWorker', 'Reusable', 'ReusableV2', 'ReuseOptions',
  'RichEditor', 'RichEditorAttribute', 'RichEditorBaseController',
  'RichEditorBuilderSpanOptions', 'RichEditorChangeValue', 'RichEditorController',
  'RichEditorDeleteDirection', 'RichEditorDeleteValue', 'RichEditorGesture',
  'RichEditorImageSpan', 'RichEditorImageSpanOptions', 'RichEditorImageSpanResult',
  'RichEditorImageSpanStyle', 'RichEditorImageSpanStyleResult', 'RichEditorInsertValue',
  'RichEditorLayoutStyle', 'RichEditorOptions', 'RichEditorParagraphResult',
  'RichEditorParagraphStyle', 'RichEditorParagraphStyleOptions', 'RichEditorRange',
  'RichEditorResponseType', 'RichEditorSelection', 'RichEditorSpan', 'RichEditorSpanPosition',
  'RichEditorSpanStyleOptions', 'RichEditorSpanType', 'RichEditorStyledStringController',
  'RichEditorStyledStringOptions', 'RichEditorSymbolSpanOptions', 'RichEditorSymbolSpanStyle',
  'RichEditorSymbolSpanStyleResult', 'RichEditorTextSpan', 'RichEditorTextSpanOptions',
  'RichEditorTextSpanResult', 'RichEditorTextStyle', 'RichEditorTextStyleResult',
  'RichEditorUpdateImageSpanStyleOptions', 'RichEditorUpdateSymbolSpanStyleOptions',
  'RichEditorUpdateTextSpanStyleOptions', 'RichEditorUrlStyle', 'RichText', 'RichTextAttribute',
  'RingStyleOptions', 'Root', 'RootScene', 'RootSceneAttribute', 'RootSceneSession',
  'RotateOptions', 'RotationGesture', 'RotationGestureEvent', 'RotationGestureHandler',
  'RotationGestureHandlerOptions', 'RotationGestureParams', 'RotationRecognizer',
  'RoundRectShapeOptions', 'RoundedRectOptions', 'RouteInfo', 'RouteMapConfig', 'RouteType',
  'RouterPageInfo', 'Row', 'RowAttribute', 'RowOptions', 'RowOptionsV2', 'RowSplit',
  'RowSplitAttribute', 'RuntimeType', 'SafeAreaEdge', 'SafeAreaType', 'SaveButton',
  'SaveButtonAttribute', 'SaveButtonOnClickResult', 'SaveButtonOptions', 'SaveDescription',
  'SaveIconStyle', 'ScaleOptions', 'ScaleRingStyleOptions', 'ScaleSymbolEffect',
  'ScanEffectOptions', 'Scene', 'SceneOptions', 'Screen', 'ScreenAttribute',
  'ScreenCaptureConfig', 'ScreenCaptureHandler', 'ScriptItem', 'Scroll', 'ScrollAlign',
  'ScrollAnimationOptions', 'ScrollAttribute', 'ScrollBar', 'ScrollBarAttribute',
  'ScrollBarDirection', 'ScrollBarMargin', 'ScrollBarOptions', 'ScrollDirection',
  'ScrollEdgeOptions', 'ScrollMotion', 'ScrollOnScrollCallback', 'ScrollOnWillScrollCallback',
  'ScrollOptions', 'ScrollPageOptions', 'ScrollResult', 'ScrollSizeMode', 'ScrollSnapAlign',
  'ScrollSnapOptions', 'ScrollSource', 'ScrollState', 'ScrollToIndexOptions',
  'ScrollableBarModeOptions', 'ScrollableCommonMethod', 'ScrollableTargetInfo', 'Scroller',
  'Search', 'SearchAttribute', 'SearchButtonOptions', 'SearchController', 'SearchOptions',
  'SearchSubmitCallback', 'SearchType', 'SectionOptions', 'SecurityComponentLayoutDirection',
  'SecurityComponentMethod', 'SeekMode', 'Select', 'SelectAttribute', 'SelectOption',
  'SelectStatus', 'SelectedMode', 'SelectionMenuOptions', 'SelectionMenuOptionsExt',
  'SelectionOptions', 'Sendable', 'Serializer', 'ShadowOptions', 'ShadowStyle', 'ShadowType',
  'Shape', 'ShapeAttribute', 'ShapeSize', 'SharedTransitionEffectType', 'SheetDismiss',
  'SheetInfo', 'SheetKeyboardAvoidMode', 'SheetMode', 'SheetOptions', 'SheetSize',
  'SheetTitleOptions', 'SheetType', 'ShouldBuiltInRecognizerParallelWithCallback',
  'SideBarContainer', 'SideBarContainerAttribute', 'SideBarContainerType', 'SideBarPosition',
  'Size', 'SizeChangeCallback', 'SizeOptions', 'SizeResult', 'SizeT', 'SizeType', 'SlideEffect',
  'SlideRange', 'Slider', 'SliderAttribute', 'SliderBlockStyle', 'SliderBlockType',
  'SliderChangeMode', 'SliderConfiguration', 'SliderCustomContentOptions', 'SliderInteraction',
  'SliderOptions', 'SliderPrefixOptions', 'SliderShowStepOptions',
  'SliderStepItemAccessibility', 'SliderStyle', 'SliderSuffixOptions',
  'SliderTriggerChangeCallback', 'SnapshotOptions', 'SourceTool', 'SourceType', 'Span',
  'SpanAttribute', 'SpanStyle', 'SpringBackAction', 'SpringMotion', 'SpringProp', 'SslError',
  'SslErrorEvent', 'SslErrorHandler', 'Stack', 'StackAttribute', 'StackOptions',
  'StarStyleOptions', 'State', 'StateStyles', 'Stepper', 'StepperAttribute', 'StepperItem',
  'StepperItemAttribute', 'Sticky', 'StickyStyle', 'Storage', 'StorageLink', 'StorageProp',
  'StyleOptions', 'StyledString', 'StyledStringChangeValue', 'StyledStringChangedListener',
  'StyledStringController', 'StyledStringKey', 'StyledStringValue', 'Styles',
  'SubMenuExpandingMode', 'SubTabBarStyle', 'SubmitCallback', 'SubmitEvent',
  'SubscribaleAbstract', 'SubscribedAbstractProperty', 'Summary', 'SuperscriptStyle',
  'SurfaceRect', 'SurfaceRotationOptions', 'SweepGradientOptions', 'SwipeActionItem',
  'SwipeActionOptions', 'SwipeActionState', 'SwipeDirection', 'SwipeEdgeEffect', 'SwipeGesture',
  'SwipeGestureEvent', 'SwipeGestureHandler', 'SwipeGestureHandlerOptions', 'SwipeGestureParams',
  'SwipeRecognizer', 'Swiper', 'SwiperAnimationEvent', 'SwiperAnimationMode',
  'SwiperAttribute', 'SwiperAutoFill', 'SwiperContentAnimatedTransition',
  'SwiperContentTransitionProxy', 'SwiperContentWillScrollResult', 'SwiperController',
  'SwiperDisplayMode', 'SwiperNestedScrollMode', 'SwitchStyle', 'SymbolEffect',
  'SymbolEffectStrategy', 'SymbolGlyph', 'SymbolGlyphAttribute', 'SymbolGlyphModifier',
  'SymbolRenderingStrategy', 'SymbolSpan', 'SymbolSpanAttribute', 'SyncedPropertyOneWay',
  'SyncedPropertyTwoWay', 'SystemAdaptiveOptions', 'SystemBarStyle', 'SystemOps',
  'TabBarIconStyle', 'TabBarOptions', 'TabBarSymbol', 'TabContent',
  'TabContentAnimatedTransition', 'TabContentAttribute', 'TabContentTransitionProxy', 'Tabs',
  'TabsAnimationEvent', 'TabsAttribute', 'TabsCacheMode', 'TabsController',
  'TabsCustomContentTransitionCallback', 'TabsOptions', 'Tag', 'TapGesture', 'TapGestureEvent',
  'TapGestureHandler', 'TapGestureHandlerOptions', 'TapGestureParameters', 'TapGestureParams',
  'TapRecognizer', 'TemplateOptions', 'TerminationInfo', 'Test', 'Text', 'TextAlign', 'TextArea',
  'TextAreaAttribute', 'TextAreaController', 'TextAreaOptions', 'TextAreaSubmitCallback',
  'TextAreaType', 'TextAttribute', 'TextBackgroundStyle', 'TextBaseController', 'TextBox',
  'TextCascadePickerRangeContent', 'TextCase', 'TextChangeOptions', 'TextChangeReason',
  'TextClock', 'TextClockAttribute', 'TextClockConfiguration', 'TextClockController',
  'TextClockOptions', 'TextContentControllerBase', 'TextContentControllerOptions',
  'TextContentStyle', 'TextController', 'TextDataDetectorConfig', 'TextDataDetectorType',
  'TextDecorationOptions', 'TextDecorationStyle', 'TextDecorationType', 'TextDeleteDirection',
  'TextEditControllerEx', 'TextHeightAdaptivePolicy', 'TextLayoutOptions', 'TextInput',
  'TextInputAttribute', 'TextInputController', 'TextInputOptions', 'TextInputStyle',
  'TextMarqueeOptions', 'TextMenuItem', 'TextMenuItemId', 'TextMenuOptions', 'TextMenuShowMode',
  'TextMetrics', 'TextModifier', 'TextOptions', 'TextOverflow', 'TextOverflowOptions',
  'TextPicker', 'TextPickerAttribute', 'TextPickerDialog', 'TextPickerDialogOptions',
  'TextPickerOptions', 'TextPickerRangeContent', 'TextPickerResult', 'TextPickerTextStyle',
  'TextRange', 'TextResponseType', 'TextSelectableMode', 'TextShadowStyle', 'TextSpanType',
  'TextStyle', 'TextTimer', 'TextTimerAttribute', 'TextTimerConfiguration', 'TextTimerController',
  'TextTimerOptions', 'Theme', 'ThemeColorMode', 'ThreatType', 'TimePicker', 'TimePickerAttribute',
  'TimePickerDialog', 'TimePickerDialogOptions', 'TimePickerFormat', 'TimePickerOptions',
  'TimePickerResult', 'TipsOptions', 'TitleHeight', 'TodayStyle', 'Toggle', 'ToggleAttribute',
  'ToggleConfiguration', 'ToggleOptions', 'ToggleType', 'ToolBarItemAttribute',
  'ToolBarItemInterface', 'ToolBarItemOptions', 'ToolBarItemPlacement', 'ToolbarItem',
  'ToolbarItemStatus', 'TouchEvent', 'TouchObject', 'TouchPoint', 'TouchResult', 'TouchTestInfo',
  'TouchTestStrategy', 'TouchType', 'Trace', 'Track', 'TransitionEdge', 'TransitionEffect',
  'TransitionEffects', 'TransitionFinishCallback', 'TransitionHierarchyStrategy',
  'TransitionOptions', 'TransitionType', 'TranslateOptions', 'UICommonEvent', 'UIContext',
  'UIExtensionComponent', 'UIExtensionComponentAttribute', 'UIExtensionOptions',
  'UIExtensionProxy', 'UIGestureEvent', 'UnderlineColor', 'UnifiedData', 'UniformDataType',
  'UrlStyle', 'UserDataSpan', 'VMContext', 'VP', 'VelocityOptions', 'VerticalAlign', 'Video',
  'VideoAttribute', 'VideoController', 'VideoOptions', 'View', 'ViewportFit', 'ViewportRect',
  'VirtualScrollOptions', 'Visibility', 'VisibleAreaChangeCallback', 'VisibleAreaEventOptions',
  'VisibleListContentInfo', 'VisualEffect', 'VoiceButtonOptions', 'VoidCallback', 'Want', 'Watch',
  'WaterFlow', 'WaterFlowAttribute', 'WaterFlowLayoutMode', 'WaterFlowOptions',
  'WaterFlowSections', 'Web', 'WebAttribute', 'WebCaptureMode', 'WebContextMenuParam',
  'WebContextMenuResult', 'WebController', 'WebCookie', 'WebDarkMode', 'WebElementType',
  'WebHeader', 'WebKeyboardAvoidMode', 'WebKeyboardCallback', 'WebKeyboardCallbackInfo',
  'WebKeyboardController', 'WebKeyboardOptions', 'WebLayoutMode', 'WebMediaOptions',
  'WebNavigationType', 'WebOptions', 'WebResourceError', 'WebResourceRequest',
  'WebResourceResponse', 'WebResponseType', 'WebviewController', 'Week', 'WeekStyle',
  'WidthBreakpoint', 'WindowAnimationTarget', 'WindowModeFollowStrategy', 'WindowScene',
  'WindowSceneAttribute', 'WindowStatusType', 'WithTheme', 'WithThemeAttribute',
  'WithThemeOptions', 'WordBreak', 'WorkStateStyle', 'WrappedBuilder', 'XComponent',
  'XComponentAttribute', 'XComponentController', 'XComponentOptions', 'XComponentType',
  'animateTo', 'animateToImmediately', 'cursorControl', 'focusControl', 'fp2px', 'getContext',
  'getInspectorNodeById', 'getInspectorNodes', 'lpx2px', 'postCardAction', 'px2fp', 'px2lpx',
  'px2vp', 'setAppBgColor', 'sharedTransitionOptions', 'vp2px'
]);

const decoratorsWhiteList = [
  'State', 'Prop', 'Link', 'Observed', 'Track', 'ObjectLink', 'StorageProp',
  'StorageLink', 'LocalStorageProp', 'LocalStorageLink', 'Provide', 'Consume', 'Watch', 'Require'
];

const whiteFileList = [
  '@ohos.graphics.drawing', '@ohos.web.webview'
];

const EXTNAME_D_ETS = '.d.ets';
const OHOS_ARKUI = '@ohos.arkui.';
const OHOS_KIT_ARKUI = '@kit ArkUI';
const OHOS_ARKUI_STATEMANAGEMENT = './@ohos.arkui.GlobalESValue';
const OHOS_ARKUI_COMPONENT = './@ohos.arkui.GlobalESValue';
const OHOS_ARKUI_GLOBAL_ESVALUE = '@ohos.arkui.GlobalESValue';
const ARKUI_EXTEND = 'Extend';
const ARKUI_STYLES = 'Styles';
const ARKUI_BUILDER = 'Builder';
const DEFAULT = 'default';
const GENERIC_T = 'T';

function start() {
  const program = new commander.Command();
  program
    .name('noninterop_global_import')
    .version('0.0.1');
  program
    .option('--input <string>', 'input path')
    .option('--output <string>', 'output path')
    .option('--export <string>', 'export flag', false)
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      exportFlag = opts.export === 'true';
      processInteropUI(opts.input);
    });
  program.parse(process.argv);
}

start();
