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

import * as arkts from '@koalaui/libarkts';
import fs from 'fs';
import path from 'path';
import {
  ComparisonResult,
  FormatCheckerFunction,
  ValueCheckerFunction,
  ComparisonSenario,
  AVAILABLE_TAG_NAME,
  RUNTIME_OS_OH,
  SUPPRESSWARNINGS_RULE_INFO,
  API_INTERFACE_WHITE_LIST
} from '../api_check_plugin_define';
import { globalObject, suppressWarningsCheckPlugin } from '../../index';
import { ParsedVersion, NodeParentModel } from '../api_check_plugin_typedef';
import {
  comparePointVersion,
  defaultFormatCheckerCompatibileIntegerAndMSF,
  defaultValueChecker,
  getFormatChecker,
  getValueChecker,
  getVersionByValueChecker,
  isAnnotationAllowed
} from '../api_check_base_utils';
import {
  isAvailableDecorator,
  extractMinApiFromDecorator,
  getValidAnnotationFromNode,
  checkFileHasAvailableByFileName
} from './available_decorator_utils';
import { SdkComparisonHelper, SDK_CONSTANTS } from './sdk_comparison_helper';

export interface NodeValidator {
  validate(node: arkts.AstNode): boolean;
  addValidator?(validator: NodeValidator[]): void;
}

export class CompositeValidator implements NodeValidator {
  constructor(private validators: NodeValidator[]) { }

  validate(node: arkts.AstNode): boolean {
    return this.validators.some(validator => validator.validate(node));
  }

  addValidator(validator: NodeValidator[]): void {
    this.validators.push(...validator);
  }
}

export abstract class BaseValidator {
  /**
   * Traverses upward in the AST to find the first parent matching the predicate.
   * 
   * @param node - Starting node
   * @param predicate - Condition to match
   * @returns Matching parent node or null
   */
  protected findParentNode(
    node: arkts.AstNode,
    predicate: (parent: arkts.AstNode) => boolean
  ): arkts.AstNode | null {
    let currentNode = node.parent;

    while (currentNode) {
      if (predicate(currentNode)) {
        return currentNode;
      }
      currentNode = currentNode.parent;
    }
    return null;
  }

  /**
   * Extracts the primary identifier name from a node.
   * 
   * @param node - Node to extract name from
   * @returns Primary name or undefined
   */
  protected getPrimaryNameFromNode(node: arkts.AstNode | undefined): string | undefined {
    if (!node) {
      return undefined;
    }
    if (arkts.isIdentifier(node)) {
      return node.name;
    }
    if (arkts.isCallExpression(node)) {
      return this.getPrimaryNameFromNode(node.callee);
    }
    if (arkts.isMemberExpression(node)) {
      return this.getPrimaryNameFromNode(node.property);
    }
    return undefined;
  }

  /**
   * Checks if a node is the literal "undefined" keyword.
   * 
   * @param node - Node to check
   * @returns True if undefined literal
   */
  protected isUndefinedNode(node: arkts.AstNode): boolean {
    return arkts.isUndefinedLiteral(node) && node.dumpSrc() === 'undefined';
  }

  /**
   * Checks if a node matches a target name and is a property access.
   * 
   * @param node - Node to check
   * @param name - Target name
   * @returns True if matches
   */
  protected isTargetNode(node: arkts.AstNode, name: string): boolean {
    const nodePrimaryName = this.getPrimaryNameFromNode(node);
    return nodePrimaryName === name && (arkts.isMemberExpression(node) || arkts.isIdentifier(node));
  }

  /**
   * Checks if a node is within the then block of an if statement.
   * 
   * @param node - Node to check
   * @param ifStatement - The if statement
   * @returns True if in then block
   */
  protected isNodeInIfThenBlock(node: arkts.AstNode, ifNode: arkts.IfStatement): boolean {
    if (!ifNode.consequent) {
      return false;
    }

    const nodeStartPos = node.startPosition?.getIndex() || 0;
    const thenStartPos = ifNode.consequent.startPosition?.getIndex() || 0;
    const thenEndPos = ifNode.consequent.endPosition?.getIndex() || 0;

    return nodeStartPos >= thenStartPos && nodeStartPos <= thenEndPos;
  }

  /**
   * Normalizes file paths for consistent comparison.
   * 
   * @param path - Path to normalize
   * @returns Normalized path
   */
  protected normalizePath(path: string): string {
    return path.replace(/\\/g, '/').toLowerCase();
  }

  /**
   * Check the suppressWarnings scenario in the cache.
   * @param node - Obtain the content of the currently compiled file.
   * @param sceneName - comment or annotation scene.
   * @returns - Do not check when there is no data in the cache, and perform verification when there is data.
   */
  protected checkSuppressWarningsCache(warnName: string, node: arkts.AstNode, sceneName: string): boolean {
    const commentRegex = /\/\/\s*@SuppressWarnings\s/g;
    const annotationRegex = /\s*@SuppressWarnings\s*(\()/g;
    const contentRegex = sceneName === 'comment_suppressWarnings' ? commentRegex : annotationRegex;
    const program = !node ? undefined : arkts.getProgramFromAstNode(node);
    if (!program) {
      return true;
    }
    const nodeSourceText = program.sourceCode || '';
    const nodeSourceFile = program.fileName;
    const mapKey = `${warnName}_${sceneName}_${nodeSourceFile}`;
    if (suppressWarningsCheckPlugin.has(mapKey)) {
      const hasSuppressWarnings = suppressWarningsCheckPlugin.get(mapKey)!;
      if (!hasSuppressWarnings.get(sceneName)) {
        return false;
      }
    } else {
      try {
        const contentChecker = contentRegex.test(nodeSourceText);
        const commentMap = new Map([
          [sceneName, contentChecker]
        ]);
        suppressWarningsCheckPlugin.set(mapKey, commentMap);
        if (!contentChecker) {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    return true;
  }
}

export class TryCatchValidator extends BaseValidator implements NodeValidator {
  validate(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.isNodeWrappedInTryCatch(node);
  }

  private isNodeWrappedInTryCatch(node: arkts.AstNode): boolean {
    return this.findParentNode(node, (parent) => {
      if (arkts.isTryStatement(parent)) {
        return true;
      }
      return false;
    }) !== null;
  }
}

export class UndefinedCheckValidator extends BaseValidator implements NodeValidator {
  validate(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.isNodeWrappedInUndefinedCheck(node);
  }

  private isNodeWrappedInUndefinedCheck(node: arkts.AstNode): boolean {
    const targetName = this.getPrimaryNameFromNode(node);
    if (!targetName) {
      return false;
    }
    return this.findParentNode(node, (parent) => {
      if (arkts.isIfStatement(parent)) {
        return this.checkIfStatementHasUndefinedCheck(parent, targetName);
      }
      return false;
    }) !== null;
  }

  private checkIfStatementHasUndefinedCheck(ifNode: arkts.AstNode, targetName: string): boolean {
    if (!arkts.isIfStatement(ifNode) || !ifNode.test) {
      return false;
    }

    const testNode = ifNode.test;
    const testKind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, testNode.peer);

    if (testKind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION) {
      return false;
    }

    return this.checkBinaryExpressionForUndefined(testNode as arkts.BinaryExpression, targetName);
  }

  private checkBinaryExpressionForUndefined(binaryNode: arkts.BinaryExpression, targetName: string): boolean {
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, binaryNode.peer);
    if (kind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION || !binaryNode.left || !binaryNode.right || !binaryNode.operatorType) {
      return false;
    }

    const operatorKind = binaryNode.operatorType;
    const isNotEqualOperator = operatorKind === arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_STRICT_EQUAL ||
      operatorKind === arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_EQUAL;

    if (!isNotEqualOperator) {
      return false;
    }

    const leftName = this.getPrimaryNameFromNode(binaryNode.left);
    const rightName = this.getPrimaryNameFromNode(binaryNode.right);

    const isLeftUndefined = this.isUndefinedNode(binaryNode.left);
    const isRightUndefined = this.isUndefinedNode(binaryNode.right);
    const isLeftTarget = leftName === targetName;
    const isRightTarget = rightName === targetName;

    return (isLeftTarget && isRightUndefined) || (isLeftUndefined && isRightTarget);
  }
}

export class SdkComparisonValidator extends BaseValidator implements NodeValidator {
  private projectCompatibleSdkVersion: string;
  private minRequiredVersion: string;
  private declaration: arkts.AstNode | undefined;
  private minAvailableVersion: ParsedVersion | undefined;
  private sdkComparisonHelper: SdkComparisonHelper;
  private readonly deviceInfoChecker: Map<string, string[]>;

  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    minAvailableVersion?: ParsedVersion,
    declaration?: arkts.AstNode
  ) {
    super();
    this.projectCompatibleSdkVersion = projectCompatibleSdkVersion;
    this.minRequiredVersion = minRequiredVersion;
    this.minAvailableVersion = minAvailableVersion;
    this.declaration = declaration;

    this.deviceInfoChecker = new Map([
      [SDK_CONSTANTS.OTHER_SOURCE_DEVICE_INFO, [SDK_CONSTANTS.DEVICE_INFO_PACKAGE]],
      [SDK_CONSTANTS.OPEN_SOURCE_DEVICE_INFO, [SDK_CONSTANTS.DEVICE_INFO_PACKAGE]],
      [SDK_CONSTANTS.OPEN_SOURCE_APIAVAILABLE_INFO, [SDK_CONSTANTS.DEVICE_INFO_PACKAGE]]
    ]);

    this.sdkComparisonHelper = new SdkComparisonHelper(
      projectCompatibleSdkVersion,
      minRequiredVersion,
      minAvailableVersion,
      this.deviceInfoChecker,
      SDK_CONSTANTS.OTHER_SOURCE_DEVICE_INFO,
      SDK_CONSTANTS.OPEN_SOURCE_DEVICE_INFO,
      SDK_CONSTANTS.OPEN_SOURCE_RUNTIME,
      declaration
    );
  }

  validate(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.isNodeWrappedInSdkComparison(node);
  }

  private isNodeWrappedInSdkComparison(node: arkts.AstNode): boolean {
    const nodeDecl = arkts.getDecl(node);
    const program = !nodeDecl ? undefined : arkts.getProgramFromAstNode(nodeDecl);
    const sourceText = program?.ast.dumpSrc() || '';

    if (!sourceText) {
      return false;
    }

    return (this.findParentNode(node, (parent) => {
      return this.checkIfStatementForSdkComparison(parent, node) ||
        this.checkApiAvailableVersionParts(parent, node);
    }) !== null);
  }

  private checkIfStatementForSdkComparison(ifNode: arkts.AstNode, originalNode: arkts.AstNode): boolean {
    if (!arkts.isIfStatement(ifNode) || !ifNode.test) {
      return false;
    }

    const isInThenBlock = this.isNodeInIfThenBlock(originalNode, ifNode);
    if (!isInThenBlock) {
      return false;
    }

    try {

      return this.sdkComparisonHelper.isSdkComparisonHelper(ifNode.test);
    } catch {
      return false;
    }
  }

  private checkApiAvailableVersionParts(ifNode: arkts.AstNode, originalNode: arkts.AstNode): boolean {
    if (!arkts.isIfStatement(ifNode) || !ifNode.test) {
      return false;
    }

    const isInThenBlock = this.isNodeInIfThenBlock(originalNode, ifNode);
    if (!isInThenBlock) {
      return false;
    }

    try {
      return this.sdkComparisonHelper.isApiAvailableHelper(ifNode.test);
    } catch {
      return false;
    }
  }
}

export class AvailableComparisonValidator extends BaseValidator implements NodeValidator {
  private formatChecker: FormatCheckerFunction = defaultFormatCheckerCompatibileIntegerAndMSF;
  private valueChecker: ValueCheckerFunction = defaultValueChecker;

  constructor(
    private readonly compatibleSdkVersion: string,
    private readonly minRequiredVersion: string,
    private readonly minAvailableVersion?: ParsedVersion
  ) {
    super();
    this.init();
  }

  private init(): void {
    const formatChecker = getFormatChecker(AVAILABLE_TAG_NAME);
    this.formatChecker = formatChecker || defaultFormatCheckerCompatibileIntegerAndMSF;

    const valueChecker = getValueChecker(AVAILABLE_TAG_NAME);
    this.valueChecker = valueChecker || defaultValueChecker;
  }

  validate(node: arkts.AstNode): boolean {
    if (!node || (!this.minAvailableVersion && !this.minRequiredVersion)) {
      return false;
    }

    const nodeSourceFileName = this.getSourceFileName(node);
    if (!checkFileHasAvailableByFileName(nodeSourceFileName)) {
      return false;
    }

    try {
      const curAvailableVersion = this.getParentVersion(node);
      if (!curAvailableVersion) {
        return false;
      }

      if (this.compareVersions(curAvailableVersion, this.minAvailableVersion || this.minRequiredVersion)) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  private getParentVersion(node: arkts.AstNode): ParsedVersion | null {
    if (!node) {
      return null;
    }

    const annotation: arkts.AnnotationUsage | null = getValidAnnotationFromNode(node, isAvailableDecorator);
    if (annotation === null) {
      return null;
    }

    return extractMinApiFromDecorator(annotation);
  }

  private getSourceFileName(node: arkts.AstNode): string {
    const program = arkts.getProgramFromAstNode(node);
    return program?.sourceFilePath || '';
  }

  private compareVersions(
    curAvailableVersion: ParsedVersion,
    minRequiredVersion: ParsedVersion | string
  ): boolean {
    try {
      if (!curAvailableVersion) {
        return false;
      }

      const scenario = curAvailableVersion.os === RUNTIME_OS_OH
        ? ComparisonSenario.SuppressByOHVersion
        : ComparisonSenario.SuppressByOtherOSVersion;

      let result;
      if (typeof minRequiredVersion === 'string') {
        result = this.valueChecker(
          minRequiredVersion,
          getVersionByValueChecker(curAvailableVersion, this.valueChecker),
          scenario
        );
      } else {
        result = this.valueChecker(
          getVersionByValueChecker(minRequiredVersion, this.valueChecker),
          getVersionByValueChecker(curAvailableVersion, this.valueChecker),
          scenario
        );
      }

      return result ? result.result : false;
    } catch (error) {
      return false;
    }
  }
}

export class AnnotateSuppressWarningsValidator extends BaseValidator implements NodeValidator {
  private warningTypeName: string = '';

  constructor(warnName: string) {
    super();
    this.warningTypeName = warnName;
  }

  validate(node: arkts.AstNode): boolean {
    return this.checkSuppressWarningsCache(this.warningTypeName, node, 'annotation_suppressWarnings') &&
      this.checkAnnotationWarning(node);
  }

  private checkAnnotationWarning(node: arkts.AstNode): boolean {
    const decoratorNodes: arkts.AnnotationUsage[] = this.getTagDecoratorFromNode(node);
    return decoratorNodes.some(item => this.extractRulesFromDecorator(item));
  }

  private findTagDecorator(decorator: arkts.AnnotationUsage): boolean {
    if (!decorator || !decorator.expr) {
      return false;
    }

    const expr = decorator.expr;
    if (arkts.isIdentifier(expr) && expr.name) {
      return expr.name === 'SuppressWarnings';
    }

    return false;
  }

  private getTagDecoratorFromNode(node: arkts.AstNode): arkts.AnnotationUsage[] {
    const decoratorArray: arkts.AnnotationUsage[] = [];

    if (isAnnotationAllowed(node)) {
      decoratorArray.push(...node.annotations);
    }

    const currentSuppressWarningDecorators = decoratorArray.filter(item => this.findTagDecorator(item));
    if (currentSuppressWarningDecorators.length > 0) {
      return currentSuppressWarningDecorators;
    }

    const parentNode = node.parent;
    const parentSuppressWarning = parentNode ? this.getTagDecoratorFromNode(parentNode) : [];
    return [...currentSuppressWarningDecorators, ...parentSuppressWarning];
  }

  private extractRulesFromDecorator(decorator: arkts.AnnotationUsage): boolean {
    if (!decorator || !decorator.expr) {
      return false;
    }

    if (!decorator || !decorator.properties || decorator.properties.length === 0) {
      return false;
    }

    const prop = decorator.properties[0];
    if (!arkts.isClassProperty(prop)) {
      return false;
    }
    if (!prop.key || !arkts.isIdentifier(prop.key) || prop.key.name !== 'rules') {
      return false;
    }

    if (!prop.value || !arkts.isArrayExpression(prop.value) || prop.value.elements.length === 0) {
      return false;
    }

    const ruleValues = SUPPRESSWARNINGS_RULE_INFO.get(this.warningTypeName) || '';
    if (!ruleValues) {
      return false;
    }

    return prop.value.elements.some((item: arkts.AstNode) => {
      const elementName: string = item.dumpSrc() || '';
      return elementName.includes(ruleValues);
    });
  }
}

export class CommentSuppressWarningsValidator extends BaseValidator implements NodeValidator {
  private warningTypeName: string = '';

  constructor(warnName: string) {
    super();
    this.warningTypeName = warnName;
  }

  validate(node: arkts.AstNode): boolean {
    return this.checkSuppressWarningsCache(this.warningTypeName, node, 'comment_suppressWarnings') &&
      this.checkCommentsWarning(node);
  }

  private checkCommentsWarning(node: arkts.AstNode): boolean {
    if (arkts.isIdentifier(node)) {
      const nodeDecl = arkts.getDecl(node);
      const program = nodeDecl ? arkts.getProgramFromAstNode(nodeDecl) : undefined;
      if (!program || !program.sourceCode) {
        return false;
      }
      const commentsMessage: string[] | null = this.getAllClosestComments(node);
      if (!commentsMessage) {
        return false;
      }
      return this.checkCommentsMessage(commentsMessage);
    }
    return false;
  }

  private getAllClosestComments(node: arkts.AstNode): string[] | null {
    let comments: string[] = [];
    const nodeStatement: NodeParentModel | null = this.getChainCallNode(this.findNodeParentStatement(node));
    if (!nodeStatement) {
      return null;
    }

    let commentNode: arkts.AstNode = nodeStatement.node;
    if (nodeStatement.isChainedCall.isChain && nodeStatement.isChainedCall.chainNode) {
      commentNode = nodeStatement.isChainedCall.chainNode;
    }

    const leadingComments = arkts.getCommentsStringFromDeclaration(commentNode);
    comments = leadingComments ? leadingComments.split('\n').map((item: string): string => {
      return item.trim();
    }) : [];
    return comments;
  }

  /**
   * Find the parent node.
   * 
   * three scenarios:
   * 
   * 1.chain invocation scene
   * Example:
   * ```typescript
   * Button('test')
   *  .id('test')
   *  // '@SuppressWarnings' compatibility
   *  .fontSize('xxx') // will not trigger compatible warning
   * 
   * // '@SuppressWarnings' compatibility
   * Button('test')
   *  // '@SuppressWarnings' compatibility
   *  .id('test')
   *  .fontSize('xxx') // will not trigger compatible warning
   * ```
   * 
   * 2.normal invocation scene
   * Example:
   * ```typescript
   * // '@SuppressWarnings' compatibility
   * const test = a.b // will not trigger compatible warning
   * ```
   * @param node - The node that has generated an alarm.
   * @returns 
   * 1.The chained invocation scenarios directly returns the alarm node.
   * 2.In normal invocation scenarios, the parent node of the alarm node is returned.
   */
  private findNodeParentStatement(node: arkts.Identifier): NodeParentModel | null {
    if (!arkts.isIdentifier(node)) {
      return null;
    }

    let nodeStatement: NodeParentModel = {
      node: node,
      isChainedCall: { isChain: false, chainNode: node }
    }

    let current: arkts.AstNode = nodeStatement.node.parent;
    if (!arkts.isMemberExpression(current) || !current.object) {
      return nodeStatement;
    }

    while (nodeStatement.node &&
      !arkts.isBlockStatement(nodeStatement.node) &&
      !arkts.isImportDeclaration(nodeStatement.node) &&
      !arkts.isAnnotationDeclaration(nodeStatement.node) &&
      nodeStatement.node.parent
    ) {
      const memberExpr = nodeStatement.node;
      if (arkts.isMemberExpression(memberExpr) && memberExpr.object && arkts.isCallExpression(memberExpr.object)) {
        const findcallExpreNode: arkts.AstNode | null = this.findChainCallRoot(memberExpr.object);
        if (this.hasChainCallNodeComment(findcallExpreNode)) {
          nodeStatement.isChainedCall.chainNode = findcallExpreNode;
          nodeStatement.isChainedCall.isChain = true;
          break;
        }
      }
      if ((arkts.isIdentifier(nodeStatement.node) || arkts.isVariableDeclarator(nodeStatement.node)) && this.hasChainCallNodeComment(nodeStatement.node)) {
        nodeStatement.isChainedCall.chainNode = nodeStatement.node;
        nodeStatement.isChainedCall.isChain = true;
        break;
      }
      nodeStatement.node = nodeStatement.node.parent;
    }
    return nodeStatement;
  }

  /**
   * Obtain the chain call scenario node.
   * Example:
   * ```typescript
   * Button()
   * .id('text')
   * // '@SuppressWarnings' compatibility
   * .onClick(() => {
   *  a.b  // will not trigger compatible warning
   * })
   * 
   * Button()
   * .id('text')
   * .onClick(() => {
   * // '@SuppressWarnings' compatibility
   *  a.b  // will not trigger compatible warning
   * })
   * 
   * Button()
   * // '@SuppressWarnings' compatibility
   * .id('text')
   * .onClick(() => {
   *  a.b  // will trigger compatible warning
   * })
   * 
   * // '@SuppressWarnings' compatibility
   * Button().id('test').fontSize('10').onClick(() => {}) // will not trigger compatible warning
   * ```
   * @param node - The node that has generated an alarm.
   * @returns - Return the processed node after the chained call scenario.
   */
  private getChainCallNode(node: NodeParentModel | null): NodeParentModel | null {
    if (!node) {
      return null;
    }
    const chainBakNode: arkts.AstNode = node.node;
    let chainCallNode: NodeParentModel = node;

    const isInArrowFunction = this.checkIsInArrowFunction(chainCallNode.node);

    if (chainCallNode.isChainedCall.isChain || !isInArrowFunction) {
      return chainCallNode;
    }

    let arrowFuncNode: arkts.AstNode | null = chainCallNode.node;
    while (arrowFuncNode && !arkts.isArrowFunctionExpression(arrowFuncNode)) {
      arrowFuncNode = arrowFuncNode.parent;
    }

    if (!arrowFuncNode || !arrowFuncNode.parent) {
      return chainCallNode;
    }

    let callExpr: arkts.AstNode | null = arrowFuncNode.parent;
    if (this.hasChainCallNodeComment(callExpr.callee)) {
      chainCallNode.isChainedCall.chainNode = callExpr.callee;
      chainCallNode.isChainedCall.isChain = true;
      return chainCallNode;
    }
    while (callExpr && !arkts.isCallExpression(callExpr)) {
      callExpr = callExpr.parent;
    }

    if (callExpr && arkts.isCallExpression(callExpr) &&
      callExpr.callee && arkts.isMemberExpression(callExpr.callee)) {

      if (this.hasChainCallNodeComment(chainBakNode)) {
        chainCallNode.isChainedCall.chainNode = chainBakNode;
        chainCallNode.isChainedCall.isChain = true;
        return chainCallNode;
      }

      const chainNode = this.findChainCallRoot(callExpr);

      if (this.hasChainCallNodeComment(chainNode)) {
        chainCallNode.isChainedCall.chainNode = chainNode;
        chainCallNode.isChainedCall.isChain = true;
        return chainCallNode;
      }
      return chainCallNode;
    }

    return chainCallNode;
  }

  private checkIsInArrowFunction(node: arkts.AstNode): boolean {
    let current: arkts.AstNode | null = node;
    while (current) {
      if (arkts.isArrowFunctionExpression(current)) {
        return true;
      }
      if (arkts.isBlockStatement(current)) {
        if (current.parent && arkts.isArrowFunctionExpression(current.parent)) {
          return true;
        }
      }
      current = current.parent;
    }
    return false;
  }

  private findChainCallRoot(node: arkts.AstNode): arkts.AstNode | null {
    if (!node) {
      return null;
    }
    let current: arkts.AstNode = node;
    while (arkts.isCallExpression(current) && current.callee && arkts.isMemberExpression(current.callee) && current.callee.object) {
      current = current.callee.object;
    }
    return current;
  }

  /**
   * Determine whether the annotation information for the alarm node exists.
   * 
   * @param node - The node that has generated an alarm.
   * @returns - Return the annotation information of the alarm node.
   */
  private hasChainCallNodeComment(node: arkts.AstNode): boolean {
    const program = node ? arkts.getProgramFromAstNode(node) : undefined;
    if (!program || !program.sourceCode) {
      return false;
    }
    const sourceFileText = program.sourceCode;
    if (!sourceFileText) {
      return false;
    }
    let comments: string[] = [];
    const leadingComments = arkts.getCommentsStringFromDeclaration(node);
    comments = leadingComments ? leadingComments.split('\n').map((item: string): string => {
      return item.trim();
    }) : [];
    return this.checkCommentsMessage(comments);
  }

  private checkCommentsMessage(comments: string[]): boolean {
    if (this.hasNotSupportScene(comments)) {
      return false;
    }
    const hasSuppressWarnings = (comment: string): boolean => /\/\/\s*@SuppressWarnings\s/g.test(comment);
    const hasCompatibility = (comment: string): boolean => /(^|[\s,])compatibility($|[\s,])/.test(comment);
    const hasSyscap = (comment: string): boolean => /(^|[\s,])syscap($|[\s,])/.test(comment);
    const hasPermission = (comment: string): boolean => /(^|[\s,])permission($|[\s,])/.test(comment);
    return comments.some(comment => hasSuppressWarnings(comment) &&
      (
        (hasCompatibility(comment) && (this.warningTypeName === 'since' || this.warningTypeName === 'available')) ||
        (hasSyscap(comment) && this.warningTypeName === 'syscap') ||
        (hasPermission(comment) && this.warningTypeName === 'permission')
      )
    );
  }

  /**
   * check is not support scene.
   * 
   * 1.mulitiLineCommentScene: muliti-line comment scene.
   * Example:
   * ```typescript
   * // '@SuppressWarnings' compatibility
   * /*
   * * '@SuppressWarnings' compatibility
   * /
   * // test
   * ```
   * 
   * 2./^\/\/\s*@SuppressWarnings\s*(\/+)/: Therer are two or more double slashes.
   * Example:
   * ```typescript
   * // '@SuppressWarnings' // compatibility
   * ```
   * @param comments - scene comments
   * @returns - Return the corresponding result based on the annotation information of the input parameter.
   */
  private hasNotSupportScene(comments: string[]): boolean {
    const mulitiLineCommentScene = /\/\*+/g;
    for (const item of comments) {
      if (/^\/\/\s*@SuppressWarnings\s*(\/+)/.test(item)) {
        return true;
      }

      if (mulitiLineCommentScene.test(item)) {
        return true;
      }
    }
    return false;
  }
}

export class WhiteListValidator extends BaseValidator implements NodeValidator {
  private declaration: arkts.AstNode | undefined;

  constructor(declaration?: arkts.AstNode) {
    super();
    this.declaration = declaration;
  }

  validate(node: arkts.AstNode): boolean {
    if (!this.declaration || !node) {
      return false;
    }

    const declProgram = arkts.getProgramFromAstNode(this.declaration);
    const declFilePath = declProgram?.sourceFilePath || '';

    if (!declFilePath) {
      return false;
    }

    let apiName: string = '';
    if (arkts.isClassDefinition(this.declaration)) {
      apiName = this.declaration.ident?.name || '';
    } else if (arkts.isETSModule(this.declaration) && this.declaration.isNamespace) {
      apiName = this.declaration.ident?.name || '';
    } else if (arkts.isTSInterfaceDeclaration(this.declaration)) {
      apiName = this.declaration.id?.name || '';
    } else if (arkts.isMethodDefinition(this.declaration)) {
      apiName = this.declaration.id?.name || '';
    } else if (arkts.isTSTypeAliasDeclaration(this.declaration)) {
      apiName = this.declaration.id?.name || '';
    } else if (arkts.isVariableDeclarator(this.declaration)) {
      apiName = !!this.declaration.id && arkts.isIdentifier(this.declaration.id) ? this.declaration.id.name : '';
    } else if (arkts.isClassProperty(this.declaration)) {
      apiName = !!this.declaration.key && arkts.isIdentifier(this.declaration.key) ? this.declaration.key.name : '';
    } else if (arkts.isTSEnumMember(this.declaration)) {
      apiName = !!this.declaration.key && arkts.isIdentifier(this.declaration.key) ? this.declaration.key.name : '';
    }

    return globalObject.projectConfig.externalApiPaths.some((externalApiPath: string) => {
      const fileName: string = path.relative(externalApiPath, declFilePath).replace(/\\/g, '/');
      return API_INTERFACE_WHITE_LIST.get(fileName)?.includes(apiName);
    });
  }
}