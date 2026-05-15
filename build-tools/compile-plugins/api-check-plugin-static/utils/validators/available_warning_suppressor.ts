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
import { AVAILABLE_TAG_NAME } from '../api_check_plugin_define';
import { ParsedVersion } from '../api_check_plugin_typedef';
import { BaseWarningSuppressor, NodeValidator } from './base_warning_suppressor';
import { AvailableComparisonValidator } from './available_comparison_validator';
import { comparePointVersion, ComparisonResult } from '../api_check_base_utils';

class SdkComparisonValidator implements NodeValidator {
  private projectCompatibleSdkVersion: string;
  private minRequiredVersion: string;
  private minAvailableVersion: ParsedVersion | undefined;
  private declaration: arkts.AstNode | undefined;
  
  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    minAvailableVersion?: ParsedVersion,
    declaration?: arkts.AstNode
  ) {
    this.projectCompatibleSdkVersion = projectCompatibleSdkVersion;
    this.minRequiredVersion = minRequiredVersion;
    this.minAvailableVersion = minAvailableVersion;
    this.declaration = declaration;
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
    
    const hasApiAvailableCheck = /apiAvailable/.test(sourceText);
    if (!hasApiAvailableCheck) {
      return false;
    }

    let currentNode: arkts.AstNode | null = node.parent;
    
    while (currentNode) {
      if (arkts.isIfStatement(currentNode)) {
        return this.checkIfStatementForApiAvailable(currentNode, node);
      }
      currentNode = currentNode.parent;
    }
    
    return false;
  }

  private checkIfStatementForApiAvailable(ifNode: arkts.AstNode, originalNode: arkts.AstNode): boolean {
    if (!ifNode.test) {
      return false;
    }
    
    const isInThenBlock = this.isNodeInIfThenBlock(originalNode, ifNode);
    if (!isInThenBlock) {
      return false;
    }
    
    return this.checkApiAvailableComparison(ifNode.test);
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

  private checkApiAvailableComparison(testNode: arkts.AstNode): boolean {
    if (!arkts.isCallExpression(testNode)) {
      return false;
    }
    
    const expr = testNode.expr;
    if (!expr || expr.name !== 'apiAvailable') {
      return false;
    }
    
    if (!testNode.arguments || testNode.arguments.length !== 1) {
      return false;
    }
    
    const arg = testNode.arguments[0];
    const argValue = this.getNodeText(arg);
    const cleanedArgValue = argValue.replace(/['"`]/g, '');
    
    const minVersion = this.minAvailableVersion?.version || this.minRequiredVersion;
    const compareResult = comparePointVersion(cleanedArgValue, minVersion);
    
    return compareResult !== ComparisonResult.Less;
  }

  private getNodeText(node: arkts.AstNode): string {
    if (!node) {
      return '';
    }
    if (node.name) {
      return node.name;
    }
    if (node.text) {
      return node.text.toString();
    }
    return '';
  }
}

export class AvailableWarningSuppressor extends BaseWarningSuppressor {
  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    minAvailableVersion?: ParsedVersion,
    declaration?: arkts.AstNode
  ) {
    super(AVAILABLE_TAG_NAME);
    this.validators.addValidator([
      new AvailableComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        minAvailableVersion
      ),
      new SdkComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        minAvailableVersion,
        declaration
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