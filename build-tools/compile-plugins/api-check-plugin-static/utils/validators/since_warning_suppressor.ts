/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as arkts from '@koalaui/libarkts';
import { SINCE_TAG_NAME, ComparisonResult } from '../api_check_plugin_define';
import {
  BaseWarningSuppressor,
  NodeValidator
} from './base_warning_suppressor';
import { AvailableComparisonValidator } from './available_comparison_validator';
import {
  comparePointVersion
} from '../api_check_base_utils';
import { ParsedVersion } from '../api_check_plugin_typedef';
import { globalObject } from '../../index';

class TryCatchValidator implements NodeValidator {
  validate(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.isNodeWrappedInTryCatch(node);
  }

  private isNodeWrappedInTryCatch(node: arkts.AstNode): boolean {
    let currentNode: arkts.AstNode | null = node;
    
    while (currentNode) {
      const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, currentNode.peer);
      if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT) {
        return true;
      }
      currentNode = currentNode.parent;
    }
    
    return false;
  }
}

class UndefinedCheckValidator implements NodeValidator {
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

    let currentNode: arkts.AstNode | null = node.parent;
    
    while (currentNode) {
      const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, currentNode.peer);
      if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT) {
        return this.checkIfStatementHasUndefinedCheck(currentNode, targetName);
      }
      currentNode = currentNode.parent;
    }
    
    return false;
  }

  private getPrimaryNameFromNode(node: arkts.AstNode): string | undefined {
    if (node.name) {
      return node.name;
    }
    return undefined;
  }

  private checkIfStatementHasUndefinedCheck(ifNode: arkts.AstNode, targetName: string): boolean {
    if (!ifNode.test) {
      return false;
    }
    
    const testNode = ifNode.test;
    const testKind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, testNode.peer);
    
    if (testKind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION) {
      return false;
    }
    
    return this.checkBinaryExpressionForUndefined(testNode, targetName);
  }

  private checkBinaryExpressionForUndefined(binaryNode: arkts.AstNode, targetName: string): boolean {
    if (!binaryNode.left || !binaryNode.right || !binaryNode.operatorType) {
      return false;
    }
    
    const operatorKind = binaryNode.operatorType
    const isNotEqualOperator = operatorKind === arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_STRICT_EQUAL ||
                                operatorKind === arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_EQUAL;
    
    if (!isNotEqualOperator) {
      return false;
    }
    
    const leftName = this.getPrimaryNameFromNode(binaryNode.left);
    const rightName = this.getPrimaryNameFromNode(binaryNode.right);
    
    const isLeftUndefined = leftName === 'undefined';
    const isRightUndefined = rightName === 'undefined';
    const isLeftTarget = leftName === targetName;
    const isRightTarget = rightName === targetName;
    
    return (isLeftTarget && isRightUndefined) || (isLeftUndefined && isRightTarget);
  }
}

class WhiteListValidator implements NodeValidator {
  private declaration: arkts.AstNode | undefined;
  
  constructor(declaration?: arkts.AstNode) {
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
    
    const isSdkApi = declFilePath.includes('@ohos') || 
                     declFilePath.includes('@system') ||
                     declFilePath.includes('api/');
    
    return !isSdkApi;
  }
}

class SdkComparisonValidator implements NodeValidator {
  private projectCompatibleSdkVersion: string;
  private minRequiredVersion: string;
  private declaration: arkts.AstNode | undefined;
  private minAvailableVersion: ParsedVersion | undefined;
  
  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    declaration?: arkts.AstNode,
    minAvailableVersion?: ParsedVersion
  ) {
    this.projectCompatibleSdkVersion = projectCompatibleSdkVersion;
    this.minRequiredVersion = minRequiredVersion;
    this.declaration = declaration;
    this.minAvailableVersion = minAvailableVersion;
  }
  
  validate(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.isNodeWrappedInSdkComparison(node);
  }

  private isNodeWrappedInSdkComparison(node: arkts.AstNode): boolean {
    const program = arkts.getProgramFromAstNode(node);
    const sourceText = program?.astNode.dumpSrc() || '';
    
    if (!sourceText) {
      return false;
    }
    
    const hasDeviceInfo = /deviceInfo/.test(sourceText) || /sdkApiVersion/.test(sourceText);
    if (!hasDeviceInfo) {
      return false;
    }

    let currentNode: arkts.AstNode | null = node.parent;
    
    while (currentNode) {
      const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, currentNode.peer);
      if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT) {
        return this.checkIfStatementForSdkComparison(currentNode, node);
      }
      currentNode = currentNode.parent;
    }
    
    return false;
  }

  private checkIfStatementForSdkComparison(ifNode: arkts.AstNode, originalNode: arkts.AstNode): boolean {
    if (!ifNode.test) {
      return false;
    }
    
    const isInThenBlock = this.isNodeInIfThenBlock(originalNode, ifNode);
    if (!isInThenBlock) {
      return false;
    }
    
    return this.checkSdkVersionComparison(ifNode.test);
  }

  private isNodeInIfThenBlock(node: arkts.AstNode, ifNode: arkts.AstNode): boolean {
    if (!ifNode.consequent) {
      return false;
    }
    
    const nodeStartPos = node.startPosition?.offset || 0;
    const thenStartPos = ifNode.consequent.startPosition?.offset || 0;
    const thenEndPos = ifNode.consequent.endPosition?.offset || 0;
    
    return nodeStartPos >= thenStartPos && nodeStartPos <= thenEndPos;
  }

  private checkSdkVersionComparison(testNode: arkts.AstNode): boolean {
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, testNode.peer);
    if (kind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION) {
      return false;
    }
    
    const leftText = this.getNodeText(testNode.left);
    const rightText = this.getNodeText(testNode.right);
    
    const matchedApi = this.findDeviceInfoApi(leftText, rightText);
    if (!matchedApi) {
      return false;
    }
    
    const parts = this.extractComparisonParts(testNode, matchedApi);
    if (!parts) {
      return false;
    }
    
    return this.validateSdkVersionCompatibility(parts.operator, parts.value);
  }

  private getNodeText(node: arkts.AstNode | null): string {
    if (!node) {
      return '';
    }
    if (node.name) {
      return node.name;
    }
    if (node.text) {
      return node.text.toString();
    }
    if (node.dumpSrc()) {
      return node.dumpSrc();
    }
    return '';
  }

  private findDeviceInfoApi(leftText: string, rightText: string): string | null {
    const apis = ['sdkApiVersion', 'distributionOSApiVersion'];
    for (const api of apis) {
      if (leftText.includes(api) || rightText.includes(api)) {
        return api;
      }
    }
    return null;
  }

  private extractComparisonParts(
    binaryNode: arkts.AstNode,
    matchedApi: string
  ): { operator: string; value: string; apiPosition: 'left' | 'right' } | null {
    if (!binaryNode.operatorType) {
      return null;
    }
    
    const operatorKind = binaryNode.operatorType
    const operator = this.getOperatorText(operatorKind);
    
    const leftText = this.getNodeText(binaryNode.left);
    const rightText = this.getNodeText(binaryNode.right);
    
    let targetValue: string;
    let apiPosition: 'left' | 'right';
    
    if (leftText.includes(matchedApi)) {
      targetValue = this.extractVersionValue(binaryNode.right);
      apiPosition = 'left';
    } else if (rightText.includes(matchedApi)) {
      targetValue = this.extractVersionValue(binaryNode.left);
      apiPosition = 'right';
    } else {
      return null;
    }
    
    return { operator, value: targetValue, apiPosition };
  }

  private getOperatorText(kind: arkts.Es2pandaTokenType): string {
    switch (kind) {
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN_EQUAL:
        return '>=';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN:
        return '>';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_LESS_THAN_EQUAL:
        return '<=';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_LESS_THAN:
        return '<';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_EQUAL:
        return '==';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_STRICT_EQUAL:
        return '===';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_EQUAL:
        return '!=';
      case arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_NOT_STRICT_EQUAL:
        return '!==';
      default:
        return '';
    }
  }

  private extractVersionValue(node: arkts.AstNode | null): string {
    if (!node) {
      return '';
    }
    
    if (node.kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL ||
        arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer) === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL) {
      return node.text?.toString() || '';
    }
    
    return this.getNodeText(node);
  }

  private validateSdkVersionCompatibility(operator: string, value: string): boolean {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return false;
    }
    
    const assignedSdkVersion = this.calculateAssignedSdkVersion(operator, numValue, 'left');
    if (assignedSdkVersion === null) {
      return false;
    }
    
    const minVersion = this.minAvailableVersion?.version || this.minRequiredVersion;
    const compareResult = comparePointVersion(String(assignedSdkVersion), minVersion);
    
    return compareResult !== ComparisonResult.Less;
  }

  private calculateAssignedSdkVersion(
    operator: string,
    comparisonValue: number,
    apiPosition: 'left' | 'right'
  ): number | null {
    const effectiveOperator = apiPosition === 'right' ? this.flipOperator(operator) : operator;

    switch (effectiveOperator) {
      case '>':
        return comparisonValue + 1;
      case '>=':
        return comparisonValue;
      case '<':
      case '<=':
        return null;
      case '==':
      case '===':
        return comparisonValue;
      case '!=':
      case '!==':
        return null;
      default:
        return null;
    }
  }

  private flipOperator(operator: string): string {
    switch (operator) {
      case '>': return '<';
      case '<': return '>';
      case '>=': return '<=';
      case '<=': return '>=';
      case '==':
      case '===':
      case '!=':
      case '!==':
        return operator;
      default:
        return operator;
    }
  }
}

export class SinceWarningSuppressor extends BaseWarningSuppressor {
  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    declaration?: arkts.AstNode,
    minAvailableVersion?: ParsedVersion
  ) {
    super(SINCE_TAG_NAME);
    this.validators.addValidator([
      new TryCatchValidator(),
      new UndefinedCheckValidator(),
      new WhiteListValidator(declaration),
      new AvailableComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        minAvailableVersion
      ),
      new SdkComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        declaration,
        minAvailableVersion
      )
    ]);
  }

  public isApiVersionHandled(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.validators.validate(node);
  }
}