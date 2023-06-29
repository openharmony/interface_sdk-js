/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import ts, { type CommentRange } from 'typescript';

import { LogUtil } from '../utils/logUtil';
import {
  PropertyInfo,
  type ApiInfo,
  type comment,
  type JsDocProcessorInterface,
  MethodInfo,
  type ModifierProcessorInterface,
  type NodeProcessorInterface,
  JsDocTag,
  ApiType,
  EnumValueInfo,
  NamespaceEnumInfo,
  type PropertyNode,
  UnionTypeInfo,
  TypeAliasInfo,
  ClassInterfaceInfo,
  ExportDefaultInfo,
  ImportInfo,
  type MethodType,
  ParamInfo,
  DeclareConstInfo,
  ConstantInfo,
  type BasicApiInfo,
  Options,
  JsDocInfo
} from './typedef';
import { StringUtils } from '../utils/StringUtils';

export class CommentHelper {
  static licenseKeyword: string = 'Copyright';
  static referenceRegexp: RegExp = /\/\/\/\s*<reference\s*path/g;
  static referenceCommentRegexp: RegExp = /\/\s*<reference\s*path/g;
  static mutiCommentDelimiter: string = '/**';

  /**
   * 获取指定AST节点上的注释，若无注释返回空数组。
   * 
   * @param node 
   * @param sourceFile 
   * @returns 
   */
  static getNodeLeadingComments(node: ts.Node, sourceFile: ts.SourceFile): comment.CommentInfo[] {
    try {
      const leadingCommentRange: CommentRange[] | undefined = ts.getLeadingCommentRanges(sourceFile.getFullText(), node.getFullStart());
      if (leadingCommentRange?.length) {
        const parsedCommentInfos: Array<comment.CommentInfo> = [];
        leadingCommentRange.forEach((range) => {
          const comment = sourceFile.getFullText().slice(range.pos, range.end);
          const commentInfo = CommentHelper.parseComment(comment, range.kind, true);
          commentInfo.pos = range.pos;
          commentInfo.end = range.end;
          parsedCommentInfos.push(commentInfo);
        });
        return parsedCommentInfos;
      }
      return [];
    } catch (error) {
      LogUtil.d('CommentHelper', `node(kind=${node.kind}) is created in memory.`);
      return [];
    }
  }

  /**
   * 将多段注释文本解析成注释对象。
   * 
   * @param comment
   * @returns 
   */
  static parseComment(comment: string, commentKind: ts.CommentKind, isLeading: boolean): comment.CommentInfo {
    const { parse } = require('comment-parser');
    const commentInfo: comment.CommentInfo = {
      text: comment,
      isMultiLine: commentKind === ts.SyntaxKind.MultiLineCommentTrivia,
      isLeading: isLeading,
      description: '',
      commentTags: [],
      parsedComment: undefined,
      pos: -1,
      end: -1,
      ignore: false,
      isApiComment: false,
      isInstruct: false
    };
    let commentString: string = comment;
    let parsedComments = parse(commentString);
    // 无法被解析的注释,可能以 /* 开头或是单行注释
    if (parsedComments.length === 0) {
      // 注释是 /// <reference path="" /> 或 单行注释
      if (StringUtils.hasSubstring(commentString, this.referenceRegexp) ||
        commentKind === ts.SyntaxKind.SingleLineCommentTrivia) {
        commentInfo.isMultiLine = false;
        // 注释内容需丢弃 "//"
        const startIndex: number = 2;
        commentInfo.text = commentString.substring(startIndex, commentString.length);
      }
      return commentInfo;
    }
    commentInfo.parsedComment = parsedComments[0];
    commentInfo.description = parsedComments[0].description;
    for (let i = 0; i < parsedComments[0].tags.length; i++) {
      commentInfo.commentTags.push({
        tag: parsedComments[0].tags[i].tag,
        name: parsedComments[0].tags[i].name,
        type: parsedComments[0].tags[i].type,
        optional: parsedComments[0].tags[i].optional,
        description: parsedComments[0].tags[i].description,
        source: parsedComments[0].tags[i].source[0].source,
        lineNumber: parsedComments[0].tags[i].source[0].number,
        tokenSource: parsedComments[0].tags[i].source,
        defaultValue: parsedComments[0].tags[i].default ? parsedComments[0].tags[i].default : undefined
      });
    }
    commentInfo.isApiComment = true;
    return commentInfo;
  }
}

export class JsDocProcessorHelper {
  static setSyscap(jsDocInfo: JsDocInfo, syscap?: string): void {
    if (!syscap) {
      return;
    }
    jsDocInfo.setSyscap(syscap);
  }

  static setSince(jsDocInfo: JsDocInfo, since?: string): void {
    if (!since || isNaN(Number(since))) {
      return;
    }
    jsDocInfo.setSince(Number(since));
  }

  static setIsForm(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsForm();
  }

  static setIsCrossPlatForm(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsCrossPlatForm();
  }

  static setIsSystemApi(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsSystemApi();
  }

  static setIsStageModelOnly(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsStageModelOnly();
  }

  static setIsFaModelOnly(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsFaModelOnly();
  }

  static setDeprecatedVersion(jsDocInfo: JsDocInfo, deprecatedVersion?: string): void {
    if (!deprecatedVersion || isNaN(Number(deprecatedVersion))) {
      return;
    }
    jsDocInfo.setDeprecatedVersion(Number(deprecatedVersion));
  }

  static setUseinstead(jsDocInfo: JsDocInfo, useinstead?: string): void {
    if (!useinstead) {
      return;
    }
    jsDocInfo.setUseinstead(useinstead);
  }

  static setPermission(jsDocInfo: JsDocInfo, permission?: string): void {
    if (!permission) {
      return;
    }
    jsDocInfo.setPermission(permission);
  }

  static addErrorCode(jsDocInfo: JsDocInfo, errorCode?: string): void {
    if (!errorCode || isNaN(Number(errorCode))) {
      return;
    }
    jsDocInfo.addErrorCode(Number(errorCode));
  }

  static setIsRequired(jsDocInfo: JsDocInfo, typeContent?: string): void {
    if (!typeContent) {
      return;
    }
    jsDocInfo.setTypeInfo(typeContent);
  }

  static setIsConstant(jsDocInfo: JsDocInfo): void {
    jsDocInfo.setIsConstant();
  }

  static processJsDoc(comment: comment.CommentInfo): JsDocInfo {
    const jsDocInfo: JsDocInfo = new JsDocInfo();
    for (let i = 0; i < comment.commentTags.length; i++) {
      const commentTag: comment.CommentTag = comment.commentTags[i];
      const jsDocProcessor = jsDocProcessorMap.get(commentTag.tag.toLowerCase());
      if (!jsDocProcessor) {
        continue;
      }
      let option: string = commentTag.name;
      if (commentTag.tag.toLowerCase() === JsDocTag.DEPRECATED) {
        option = commentTag.description;
      }
      if (commentTag.tag.toLowerCase() === JsDocTag.TYPE) {
        option = commentTag.type;
      }
      if (commentTag.tag.toLowerCase() === JsDocTag.PERMISSION) {
        const description: string = commentTag.description;
        const name: string = commentTag.name;
        option = description ? `${name} ${description}` : `${name}`;
      }
      jsDocProcessor(jsDocInfo, option);
    }
    return jsDocInfo;
  }

}

export class NodeProcessorHelper {
  // 如果是字符串的话，会出现单双引号重复的情况
  static regQuotation: RegExp = /^[\'|\"](.*)[\'|\"]$/;

  static getNodeInfo(node: ts.Node, jsDocInfo: JsDocInfo, options: Options): BasicApiInfo | undefined {
    let apiInfo: BasicApiInfo;
    const nodeProcessor: NodeProcessorInterface | undefined = nodeProcessorMap.get(node.kind);
    if (!nodeProcessor) {
      return undefined;
    }
    apiInfo = nodeProcessor(node, jsDocInfo, options);
    return apiInfo;
  }

  static processNode(node: ts.Node, sourceFile: ts.SourceFile, parentVersion: number = -1,
    value: string = '-1'): BasicApiInfo[] {
    const allCommentInfos: comment.CommentInfo[] = CommentHelper.getNodeLeadingComments(node, sourceFile);
    const commentInfos: comment.CommentInfo[] = allCommentInfos.filter((commentInfo: comment.CommentInfo) => {
      return commentInfo.isApiComment;
    });
    const apiInfos: BasicApiInfo[] = [];
    let options: Options = new Options();
    options.setValue(value);
    let indexOfComment: number = 0;
    do {
      let jsDocInfo: JsDocInfo = new JsDocInfo();
      if (commentInfos.length !== 0) {
        jsDocInfo = JsDocProcessorHelper.processJsDoc(commentInfos[indexOfComment]);
      }
      indexOfComment++;
      let version: number = jsDocInfo.getSince();
      options.setIsConstant(jsDocInfo.getIsConstant());
      if (version !== -1 && parentVersion > version) {
        continue;
      }
      const apiInfo: BasicApiInfo | undefined = NodeProcessorHelper.getNodeInfo(node, jsDocInfo, options);
      if (!apiInfo) {
        return apiInfos;
      }
      const containerNodes: ts.NodeArray<ts.Node> | undefined = NodeProcessorHelper.getContainerNode(node);
      if (containerNodes) {
        value = '-1';
        const containerApiInfo: NamespaceEnumInfo = apiInfo as NamespaceEnumInfo;
        containerNodes.forEach((cNode: ts.Node) => {
          const childApis: BasicApiInfo[] = NodeProcessorHelper.processNode(cNode, sourceFile, version, value);
          value = NodeProcessorHelper.getEnumValue(cNode, value, childApis);
          containerApiInfo.addChildApi(childApis);
        });
      }
      apiInfos.push(apiInfo);
    } while (indexOfComment < commentInfos.length);
    return apiInfos;
  }

  static getEnumValue(cNode: ts.Node, value: string, childApis: BasicApiInfo[]): string {
    if (ts.isEnumMember(cNode)) {
      if (cNode.initializer) {
        value = cNode.initializer.getText();
      } else if (childApis.length !== 0) {
        value = (childApis[0] as EnumValueInfo).value;
      } else {
        value = !isNaN(Number(value)) ? `${Number(value) + 1}` : value;
      }
    }
    return value;
  }

  static getContainerNode(node: ts.Node): ts.NodeArray<ts.Node> | undefined {
    if (ts.isInterfaceDeclaration(node) || ts.isClassDeclaration(node) || ts.isEnumDeclaration(node)) {
      return node.members;
    }
    if (ts.isTypeAliasDeclaration(node) && ts.isTypeLiteralNode(node.type)) {
      return node.type.members;
    }
    if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
      return node.body.statements;
    }
    return undefined;
  }

  static processExportDefault(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const exportDefaultInfo: ExportDefaultInfo = new ExportDefaultInfo(ApiType.EXPORT_DEFAULT);
    const exportDefaultNode: ts.ExportAssignment = node as ts.ExportAssignment;
    exportDefaultInfo.setName(exportDefaultNode.expression.getText());
    return exportDefaultInfo;
  }

  static processImportInfo(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const importInfo: ImportInfo = new ImportInfo(ApiType.IMPORT);
    const importNode: ts.ImportDeclaration = node as ts.ImportDeclaration;
    if (importNode.importClause === undefined) {
      return importInfo;
    }
    const importClause: ts.ImportClause = importNode.importClause;
    if (importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
      importClause.namedBindings.elements.forEach((element: ts.ImportSpecifier) => {
        importInfo.addImportValue(element.name.getText());
      });
    } else {
      const value: string | undefined = importClause.name ? importClause.name.escapedText.toString() : undefined;
      importInfo.addImportValue(value);
    }
    return importInfo;
  }

  static processVariableStat(node: ts.Node, jsDocInfo: JsDocInfo, options?: Options): BasicApiInfo {
    // declareConst、常量、属性
    const variableNode: ts.VariableStatement = node as ts.VariableStatement;
    const REG_DECLARE_CONSTANT: RegExp = /declare\s+const/;
    const REG_COMPONENT: RegExp = /[a-zA-Z]+(Attribute|Interface)/;
    const declarationNode: ts.VariableDeclaration = variableNode.declarationList.declarations[0];
    const apiName: string = declarationNode.name.getText();
    let variableType: string = '';
    let value: string = '';
    if (declarationNode.type) {
      if (ts.isLiteralTypeNode(declarationNode.type)) {
        const typeOfLiteral: string | undefined = typeMap.get(declarationNode.type.literal.kind);
        variableType = typeOfLiteral ? typeOfLiteral : '';
        value = declarationNode.type.literal.getText().replace(NodeProcessorHelper.regQuotation, '$1');
      } else {
        variableType = declarationNode.type.getText();
      }
    }
    if (REG_DECLARE_CONSTANT.test(variableNode.getText()) && REG_COMPONENT.test(variableType)) {
      const declareConstInfo: DeclareConstInfo = new DeclareConstInfo(ApiType.DECLARE_CONST, jsDocInfo);
      declareConstInfo.setName(apiName);
      declareConstInfo.setType(variableType);
      return declareConstInfo;
    } else if ((options && options.isConstant) || declarationNode.initializer) {
      const constantInfo: ConstantInfo = new ConstantInfo(ApiType.CONSTANT, jsDocInfo);
      constantInfo.setName(apiName);
      if (declarationNode.initializer) {
        value = declarationNode.initializer.getText().replace(NodeProcessorHelper.regQuotation, '$1');
        const typeOfLiteral: string | undefined = typeMap.get(declarationNode.initializer.kind);
        variableType = typeOfLiteral ? typeOfLiteral : '';
      }
      constantInfo.setValue(value);
      constantInfo.setType(variableType);
      return constantInfo;
    } else {
      return NodeProcessorHelper.processVaribleProperty(jsDocInfo, apiName, variableType, variableNode);
    }
  }

  static processVaribleProperty(jsDocInfo: JsDocInfo, apiName: string, variableType: string,
    variableNode: ts.VariableStatement): PropertyInfo {
    const propertyInfo: PropertyInfo = new PropertyInfo(ApiType.PROPERTY, jsDocInfo);
    propertyInfo.setName(apiName);
    propertyInfo.setType(variableType);
    propertyInfo.setIsRequired(true);
    if (StringUtils.hasSubstring(variableNode.getText(), 'const')) {
      propertyInfo.setIsReadOnly();
    }
    if (jsDocInfo.getTypeInfo() !== '') {
      const typeContent: string = jsDocInfo.getTypeInfo();
      const isRequired: boolean = !/\?/.test(typeContent);
      propertyInfo.setIsRequired(isRequired);
      propertyInfo.setType(typeContent.replace(/^[\?*\(](.*)[\)]$/, '$1'));
    }
    return propertyInfo;
  }

  static isEventSubscription(methodName: string, index: number): boolean {
    if (methodName && eventSubscriptionSet.has(methodName) && index === 0) {
      return true;
    }
    return false;
  }

  static processParam(jsDocInfo: JsDocInfo, param: ts.ParameterDeclaration,
    index: number, methodInfo: MethodInfo): ParamInfo {
    const paramInfo: ParamInfo = new ParamInfo(ApiType.PARAM, jsDocInfo);
    paramInfo.setName(param.name.getText());
    paramInfo.setIsRequired(!param.questionToken ? true : false);
    let paramType: string | undefined = undefined;
    if (param.type === undefined) {
      paramInfo.setType(paramType);
      return paramInfo;
    }
    paramType = param.type.getText();
    let typeMapValue: string | undefined = undefined;
    if (ts.isLiteralTypeNode(param.type)) {
      typeMapValue = typeMap.get(param.type.literal.kind);
    }
    if (typeMapValue || ts.isUnionTypeNode(param.type)) {
      let methodName: string = methodInfo.name;
      if (NodeProcessorHelper.isEventSubscription(methodName, index)) {
        methodName = `${methodName}(${paramType})`;
        methodInfo.setName(methodName);
      }
      paramType = 'string';
    }
    paramInfo.setType(paramType);
    return paramInfo;
  }

  static processMethod(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const methodNode: MethodType = node as MethodType;
    const methodInfo: MethodInfo = new MethodInfo(ApiType.METHOD, jsDocInfo);
    let methodName: string | undefined = methodNode.name ? methodNode.name.getText() : undefined;
    methodInfo.setName(methodName);
    const callForm: string = methodNode.getText().replace(/export\s+|declare\s+|function\s+|\r\n|\;/g, '');
    methodInfo.setCallForm(callForm);
    if (methodNode.type && ts.SyntaxKind.VoidKeyword !== methodNode.type.kind) {
      methodInfo.setReturnValue(methodNode.type.getText());
    }
    for (let i = 0; i < methodNode.parameters.length; i++) {
      const param: ts.ParameterDeclaration = methodNode.parameters[i];
      const paramInfo: ParamInfo = NodeProcessorHelper.processParam(jsDocInfo, param, i, methodInfo);
      methodInfo.addParam(paramInfo);
    }
    if (!ts.isCallSignatureDeclaration(methodNode) && methodNode.modifiers) {
      methodNode.modifiers.forEach((modifier: ts.ModifierLike) => {
        const setModifier: ModifierProcessorInterface | undefined = modifierProcessorMap.get(modifier.kind);
        setModifier ? setModifier(methodInfo) : undefined;
      });
    }
    return methodInfo;
  }

  static processPropertySigAndDec(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const propertyNode: PropertyNode = node as PropertyNode;
    const propertyInfo: PropertyInfo = new PropertyInfo(ApiType.PROPERTY, jsDocInfo);
    propertyInfo.setName(propertyNode.name.getText());
    propertyInfo.setIsRequired(!propertyNode.questionToken ? true : false);
    propertyNode.type ? propertyInfo.setType(propertyNode.type.getText()) : undefined;
    if (jsDocInfo.getTypeInfo() !== '') {
      const typeContent: string = jsDocInfo.getTypeInfo();
      const isRequired: boolean = !/\?/.test(typeContent);
      propertyInfo.setIsRequired(isRequired);
      propertyInfo.setType(typeContent.replace(/\?/, '').replace(/^[\(](.*)[\)]$/, '$1'));
    }
    if (!propertyNode.modifiers) {
      return propertyInfo;
    }
    propertyNode.modifiers.forEach((modifier: ts.ModifierLike) => {
      const setModifier: ModifierProcessorInterface | undefined = modifierProcessorMap.get(modifier.kind);
      setModifier ? setModifier(propertyInfo) : undefined;
    });
    return propertyInfo;
  }

  static processEnumValue(node: ts.Node, jsDocInfo: JsDocInfo, options?: Options): BasicApiInfo {
    const enumValueNode: ts.EnumMember = node as ts.EnumMember;
    const enumValueInfo: EnumValueInfo = new EnumValueInfo(ApiType.ENUM_VALUE, jsDocInfo);
    enumValueInfo.setName(enumValueNode.name.getText());
    let value: string = '';
    if (options && options.value && !isNaN(Number(options.value))) {
      value = `${Number(options.value) + 1}`;
    }
    if (enumValueNode.initializer) {
      value = enumValueNode.initializer.getText().replace(NodeProcessorHelper.regQuotation, '$1');
    }
    enumValueInfo.setValue(value);
    return enumValueInfo;
  }

  static processEnum(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const enumNode: ts.EnumDeclaration = node as ts.EnumDeclaration;
    const enumInfo: NamespaceEnumInfo = new NamespaceEnumInfo(ApiType.ENUM, jsDocInfo);
    enumInfo.setName(enumNode.name.getText());
    return enumInfo;
  }

  static processTypeAlias(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const typeAliasNode: ts.TypeAliasDeclaration = node as ts.TypeAliasDeclaration;
    const apiName: string = typeAliasNode.name.getText();
    let apiInfo: ApiInfo;
    if (typeAliasNode.type.kind === ts.SyntaxKind.UnionType) {
      apiInfo = NodeProcessorHelper.processUnionType((typeAliasNode.type as ts.UnionTypeNode), apiName, jsDocInfo);
    } else if (typeAliasNode.type.kind === ts.SyntaxKind.TypeReference) {
      apiInfo = NodeProcessorHelper.processSecondModule(typeAliasNode, apiName, jsDocInfo);
    } else {
      apiInfo = NodeProcessorHelper.processTypeInterface(node, jsDocInfo);
    }
    return apiInfo;
  }

  static processTypeInterface(node: ts.Node, jsDocInfo: JsDocInfo): ApiInfo {
    const typeAliasNode: ts.TypeAliasDeclaration = node as ts.TypeAliasDeclaration;
    const interfaceInfo: ClassInterfaceInfo = new ClassInterfaceInfo(ApiType.INTERFACE, jsDocInfo);
    interfaceInfo.setName(typeAliasNode.name.getText());
    return interfaceInfo;
  }

  static processSecondModule(node: ts.TypeAliasDeclaration, name: string, jsDocInfo: JsDocInfo): TypeAliasInfo {
    const typeAliasInfo: TypeAliasInfo = new TypeAliasInfo(ApiType.TYPE_ALIAS, jsDocInfo);
    typeAliasInfo.setName(name);
    typeAliasInfo.setType(node.type.getText());
    return typeAliasInfo;
  }

  static processUnionType(node: ts.UnionTypeNode, name: string, jsDocInfo: JsDocInfo): UnionTypeInfo {
    const unionTypeInfo: UnionTypeInfo = new UnionTypeInfo(ApiType.UNIONTYPE, jsDocInfo);
    const unionTypeNode: ts.UnionTypeNode = node as ts.UnionTypeNode;
    unionTypeInfo.setName(name);
    unionTypeNode.types.forEach((type: ts.TypeNode) => {
      unionTypeInfo.addValueRange(type.getText().replace(NodeProcessorHelper.regQuotation, '$1'));
    });
    return unionTypeInfo;
  }

  static processClass(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const classDeclaration: ts.ClassDeclaration = node as ts.ClassDeclaration;
    const classInfo: ClassInterfaceInfo = new ClassInterfaceInfo(ApiType.CLASS, jsDocInfo);
    classInfo.setName(classDeclaration.name?.getText());
    if (classDeclaration.heritageClauses === undefined) {
      return classInfo;
    }
    const parentClasses: string[] = [];
    classDeclaration.heritageClauses.forEach((value: ts.HeritageClause) => {
      value.types.forEach((value: ts.ExpressionWithTypeArguments) => {
        parentClasses.push(value.expression.getText());
      });
    });
    classInfo.setParentClasses(parentClasses);
    return classInfo;
  }

  static processInterface(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const interfaceDeclaration: ts.InterfaceDeclaration = node as ts.InterfaceDeclaration;
    const interfaceInfo: ClassInterfaceInfo = new ClassInterfaceInfo(ApiType.INTERFACE, jsDocInfo);
    interfaceInfo.setName(interfaceDeclaration.name.getText());
    if (interfaceDeclaration.heritageClauses === undefined) {
      return interfaceInfo;
    }
    const parentClasses: string[] = [];
    interfaceDeclaration.heritageClauses.forEach((value: ts.HeritageClause) => {
      value.types.forEach((value: ts.ExpressionWithTypeArguments) => {
        parentClasses.push(value.expression.getText());
      });
    });
    interfaceInfo.setParentClasses(parentClasses);
    return interfaceInfo;
  }

  static processNamespace(node: ts.Node, jsDocInfo: JsDocInfo): BasicApiInfo {
    const moduleDeclaration: ts.ModuleDeclaration = node as ts.ModuleDeclaration;
    const namespaceEnumInfo: NamespaceEnumInfo = new NamespaceEnumInfo(ApiType.NAMESPACE, jsDocInfo);
    namespaceEnumInfo.setName(moduleDeclaration.name.getText());
    return namespaceEnumInfo;
  }
}

export class ModifierHelper {
  static setIsStatic(apiInfo: PropertyInfo | MethodInfo): void {
    apiInfo.setIsStatic();
  }

  static setIsReadonly(apiInfo: PropertyInfo): void {
    apiInfo.setIsReadOnly();
  }
}

const jsDocProcessorMap: Map<string, JsDocProcessorInterface> = new Map([
  [JsDocTag.SYSCAP, JsDocProcessorHelper.setSyscap],
  [JsDocTag.SINCE, JsDocProcessorHelper.setSince],
  [JsDocTag.FORM, JsDocProcessorHelper.setIsForm],
  [JsDocTag.CROSS_PLAT_FORM, JsDocProcessorHelper.setIsCrossPlatForm],
  [JsDocTag.SYSTEM_API, JsDocProcessorHelper.setIsSystemApi],
  [JsDocTag.STAGE_MODEL_ONLY, JsDocProcessorHelper.setIsStageModelOnly],
  [JsDocTag.FA_MODEL_ONLY, JsDocProcessorHelper.setIsFaModelOnly],
  [JsDocTag.DEPRECATED, JsDocProcessorHelper.setDeprecatedVersion],
  [JsDocTag.USEINSTEAD, JsDocProcessorHelper.setUseinstead],
  [JsDocTag.TYPE, JsDocProcessorHelper.setIsRequired],
  [JsDocTag.PERMISSION, JsDocProcessorHelper.setPermission],
  [JsDocTag.THROWS, JsDocProcessorHelper.addErrorCode],
  [JsDocTag.CONSTANT, JsDocProcessorHelper.setIsConstant],
]);

const modifierProcessorMap: Map<ts.SyntaxKind, ModifierProcessorInterface> = new Map([
  [ts.SyntaxKind.ConstKeyword, ModifierHelper.setIsReadonly],
  [ts.SyntaxKind.ReadonlyKeyword, ModifierHelper.setIsReadonly],
  [ts.SyntaxKind.StaticKeyword, ModifierHelper.setIsStatic]
]);

const nodeProcessorMap: Map<ts.SyntaxKind, NodeProcessorInterface> = new Map([
  [ts.SyntaxKind.ExportAssignment, NodeProcessorHelper.processExportDefault],
  [ts.SyntaxKind.ImportDeclaration, NodeProcessorHelper.processImportInfo],
  [ts.SyntaxKind.VariableStatement, NodeProcessorHelper.processVariableStat],
  [ts.SyntaxKind.MethodDeclaration, NodeProcessorHelper.processMethod],
  [ts.SyntaxKind.MethodSignature, NodeProcessorHelper.processMethod],
  [ts.SyntaxKind.FunctionDeclaration, NodeProcessorHelper.processMethod],
  [ts.SyntaxKind.CallSignature, NodeProcessorHelper.processMethod],
  [ts.SyntaxKind.PropertyDeclaration, NodeProcessorHelper.processPropertySigAndDec],
  [ts.SyntaxKind.PropertySignature, NodeProcessorHelper.processPropertySigAndDec],
  [ts.SyntaxKind.EnumMember, NodeProcessorHelper.processEnumValue],
  [ts.SyntaxKind.EnumDeclaration, NodeProcessorHelper.processEnum],
  [ts.SyntaxKind.TypeAliasDeclaration, NodeProcessorHelper.processTypeAlias],
  [ts.SyntaxKind.ClassDeclaration, NodeProcessorHelper.processClass],
  [ts.SyntaxKind.InterfaceDeclaration, NodeProcessorHelper.processInterface],
  [ts.SyntaxKind.ModuleDeclaration, NodeProcessorHelper.processNamespace]
]);

const typeMap: Map<ts.SyntaxKind, string> = new Map([
  [ts.SyntaxKind.StringLiteral, 'string'],
  [ts.SyntaxKind.NumericLiteral, 'number']
]);

const eventSubscriptionSet: Set<string> = new Set([
  'on',
  'off',
  'once',
  'emit'
]);