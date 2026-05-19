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
import { BaseWarningSuppressor } from './base_warning_suppressor';
import { NodeValidator, AvailableComparisonValidator } from './api_validate_node';
import { SdkComparisonHelper, SDK_CONSTANTS } from './sdk_comparison_helper';

class SdkComparisonValidator implements NodeValidator {
  private projectCompatibleSdkVersion: string;
  private minRequiredVersion: string;
  private minAvailableVersion: ParsedVersion | undefined;
  private declaration: arkts.AstNode | undefined;
  private sdkComparisonHelper: SdkComparisonHelper;
  private readonly deviceInfoChecker: Map<string, string[]>;

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
    const program = arkts.getProgramFromAstNode(nodeDecl);
    const sourceText = program?.astNode.dumpSrc() || '';

    if (!sourceText) {
      return false;
    }

    // const hasApiAvailableCheck = /apiAvailable/.test(sourceText);
    // const hasDeviceInfoCheck = /deviceInfo/.test(sourceText) || /sdkApiVersion/.test(sourceText);

    // if (!hasApiAvailableCheck && !hasDeviceInfoCheck) {
    //   return false;
    // }

    let currentNode: arkts.AstNode | null = node.parent;

    while (currentNode) {
      if (arkts.isIfStatement(currentNode)) {
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

    try {

      return this.sdkComparisonHelper.isSdkComparisonHelper(ifNode.test);
      // return this.sdkComparisonHelper.isSdkComparisonHelper(ifNode.test) ||
      //        this.sdkComparisonHelper.isApiAvailableHelper(ifNode.test);
    } catch {
      return false;
    }
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