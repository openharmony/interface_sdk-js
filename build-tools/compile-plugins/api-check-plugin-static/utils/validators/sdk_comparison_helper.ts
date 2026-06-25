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
import {
  SINCE_TAG_NAME,
  ComparisonSenario,
  ComparisonResult,
  ValueCheckerFunction,
  VersionValidationResult,
  MSF_INTEGER_VERSION,
  RUNTIME_OS_OH
} from '../api_check_plugin_define';
import { ParsedVersion, DistributionOSApiAvailableVersionResult } from '../api_check_plugin_typedef';
import {
  getValueChecker,
  defaultValueChecker,
  comparePointVersion,
  checkMSFVersionMajor,
  checkIntegerMoreVersion,
  isApiAvailableStatement,
  isCheckDistributionOSVersion
} from '../api_check_base_utils';
import { globalObject } from '../../index';

export const SDK_CONSTANTS = {
  OTHER_SOURCE_DEVICE_INFO: 'distributionOSApiVersion',
  OPEN_SOURCE_DEVICE_INFO: 'sdkApiVersion',
  OPEN_SOURCE_APIAVAILABLE_INFO: 'apiAvailable',
  OPEN_SOURCE_RUNTIME: 'OpenHarmony',
  DEVICE_INFO_PACKAGE: '@ohos.deviceInfo.d.ets'
} as const;

export class SdkComparisonHelper {
  private readonly otherSourceDeviceInfo: string;
  private readonly openSourceDeviceInfo: string;
  private readonly openSourceRuntime: string;
  private readonly deviceInfoChecker: Map<string, string[]>;
  private valueChecker: ValueCheckerFunction = defaultValueChecker;
  private declaration: arkts.AstNode | undefined;

  constructor(
    private readonly compatibleSdkVersion: string,
    private readonly minRequiredVersion: string,
    private readonly minAvailableVersion: ParsedVersion | undefined,
    deviceInfoMap: Map<string, string[]>,
    otherSourceDeviceInfo: string,
    openSourceDeviceInfo: string,
    openSourceRuntime: string,
    declaration?: arkts.AstNode
  ) {
    this.deviceInfoChecker = deviceInfoMap;
    this.otherSourceDeviceInfo = otherSourceDeviceInfo;
    this.openSourceDeviceInfo = openSourceDeviceInfo;
    this.openSourceRuntime = openSourceRuntime;
    this.declaration = declaration;
    this.init();
  }

  private init(): void {
    const valueChecker = getValueChecker(SINCE_TAG_NAME);
    this.valueChecker = valueChecker || defaultValueChecker;
  }

  public isSdkComparisonHelper(expression: arkts.AstNode): boolean {
    let isSinceMSFVersion: boolean = true;
    const expressionText = this.getNodeText(expression);
    const runtimeType = globalObject.projectConfig.runtimeOS;
    const matchedEntry = Array.from(this.deviceInfoChecker.entries())
      .find(([api]) => expressionText.includes(api));
    if (!matchedEntry) {
      return false;
    }

    if (this.minAvailableVersion) {
      isSinceMSFVersion = this.checkSinceMSFVersionMajor(this.minAvailableVersion.version);
    } else {
      isSinceMSFVersion = this.checkSinceMSFVersionMajor(this.minRequiredVersion);
    }

    if (!isSinceMSFVersion) {
      return false;
    }

    const [matchedApi, validPackagePath] = matchedEntry;
    if (runtimeType === this.openSourceRuntime && matchedApi === this.otherSourceDeviceInfo) {
      return false;
    }

    const parts = this.extractComparisonParts(expression, matchedApi);
    if (!parts) {
      return false;
    }

    if (!this.validateSdkVersionCompatibility(parts.operator, parts.value, matchedApi, runtimeType, parts.apiPosition)) {
      return false;
    }

    const apiIdentifier = this.findValidImportApiIdentifier(expression, matchedApi);

    return apiIdentifier
      ? this.isValidSdkDeclaration(apiIdentifier, validPackagePath)
      : false;
  }

  public isApiAvailableHelper(expression: arkts.AstNode): boolean {
    const expressionText = this.getNodeText(expression);
    const runtimeType = globalObject.projectConfig.runtimeOS;
    const matchedEntry = Array.from(this.deviceInfoChecker.entries())
      .find(([api]) => expressionText.includes(api));
    if (!matchedEntry) {
      return false;
    }

    if (!arkts.isCallExpression(expression)) {
      return false;
    }

    if (!isApiAvailableStatement(expression)) {
      return false;
    }

    const [matchedApi] = matchedEntry;
    if (runtimeType === this.openSourceRuntime && matchedApi === this.otherSourceDeviceInfo) {
      return false;
    }

    const distributeResult: DistributionOSApiAvailableVersionResult = this.distributionVersionFormat();
    if (!expression.arguments || expression.arguments.length !== 1) {
      return false;
    }
    const arg = expression.arguments[0];
    const sinceValue: string = this.getNodeText(arg);
    const sinceFormat: string = sinceValue.replace(/[\'|\"|\`]/g, '');
    const sincePointVersion: string[] = sinceFormat.split('.');
    
    if (sincePointVersion.length === 1 || runtimeType === this.openSourceRuntime) {
      return this.checkMajorNumberVersion(sinceFormat, sincePointVersion, distributeResult);
    }
    
    if (!checkMSFVersionMajor(sinceFormat)) {
      const distributionOSCheck: DistributionOSApiAvailableVersionResult = isCheckDistributionOSVersion(SINCE_TAG_NAME, sinceFormat);
      if (!distributionOSCheck.valid) {
        return false;
      } else {
        const scenario = matchedApi === SDK_CONSTANTS.OPEN_SOURCE_APIAVAILABLE_INFO
          ? ComparisonSenario.SuppressByOHVersion
          : ComparisonSenario.SuppressByOtherOSVersion;
        const distributionOSResult: VersionValidationResult = this.valueChecker(this.minRequiredVersion, sinceFormat, scenario);
        return distributionOSResult.result;
      }
    }

    if (!checkIntegerMoreVersion(sinceFormat)) {
      return false;
    }
    return comparePointVersion(sinceFormat, distributeResult.version) !== ComparisonResult.Less;
  }

  private checkMajorNumberVersion(sinceFormat: string, sincePointVersion: string[], distributeResult: DistributionOSApiAvailableVersionResult): boolean {
    const compatibileReg: RegExp = /^(?:[1-9]\d{0,2}|[1-9]\d?\.\d{1,2}\.\d{1,2})$/;
    if (!compatibileReg.test(sinceFormat)) {
      return false;
    }
    switch (sincePointVersion.length) {
      case 1:
        return comparePointVersion(sinceFormat, distributeResult.version) !== ComparisonResult.Less;
      case 3:
        if (!checkMSFVersionMajor(sinceFormat)) {
          return false;
        } else if (comparePointVersion(sinceFormat, distributeResult.version) !== ComparisonResult.Less) {
          return true;
        }
        return false;
      default:
        return false;
    }
  }

  private distributionVersionFormat(): DistributionOSApiAvailableVersionResult {
    let distributeResult: DistributionOSApiAvailableVersionResult = {
      valid: true,
      version: '',
      message: ''
    };
    const isMSFBracketsVersion: boolean = /^(?:[1-9]\d?\.\d{1,2}\.\d{1,2}|[1-9]\d?\.\d{1,2}\.\d{1,2}\(\d+\))$/.test(this.minRequiredVersion);
    if (isMSFBracketsVersion) {
      const resultOS: DistributionOSApiAvailableVersionResult = isCheckDistributionOSVersion(SINCE_TAG_NAME, this.minRequiredVersion);
      if (resultOS.valid) {
        distributeResult = resultOS;
      } else {
        distributeResult.version = this.minRequiredVersion;
      }
    } else {
      distributeResult.version = this.minRequiredVersion;
    }
    return distributeResult;
  }

  private checkSinceMSFVersionMajor(since: string): boolean {
    const msfVersionReg: RegExp = /^[1-9]\d?\.\d{1,2}\.\d{1,2}|[1-9]\d?\.\d{1,2}\.\d{1,2}\(\d+\)$/;
    if (msfVersionReg.test(since)) {
      const majorVersion = parseInt(since.split('.')[0]);
      if (majorVersion > MSF_INTEGER_VERSION) {
        return false;
      }
    }
    return true;
  }

  private extractComparisonParts(
    expression: arkts.AstNode,
    matchedApi: string
  ): { operator: string; value: string; apiPosition: 'left' | 'right' } | undefined {
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, expression.peer);
    if (kind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION) {
      return undefined;
    }
    const _expression: arkts.BinaryExpression = expression as arkts.BinaryExpression;
    if (!_expression.operationType) {
      return undefined;
    }

    const operator = this.getOperatorText(_expression.operatorType);
    const leftText = this.getNodeText(_expression.left);
    const rightText = this.getNodeText(_expression.right);

    let targetValue: string;
    let apiPosition: 'left' | 'right';

    if (leftText.includes(matchedApi)) {
      targetValue = this.extractVersionValue(_expression.right);
      apiPosition = 'left';
    } else if (rightText.includes(matchedApi)) {
      targetValue = this.extractVersionValue(_expression.left);
      apiPosition = 'right';
    } else {
      return undefined;
    }

    return { operator, value: targetValue, apiPosition };
  }

  private extractVersionValue(node: arkts.AstNode | null | undefined): string {
    if (!node) {
      return '';
    }
    if (arkts.isIdentifier(node) && arkts.getDecl(node) && arkts.getDecl(node)?.parent) {
      const variableDecl = arkts.getDecl(node)?.parent;
      return arkts.isVariableDeclarator(variableDecl) && variableDecl.init ? variableDecl.init.dumpSrc() : '';
    }
    if (arkts.isNumberLiteral(node)) {
      return node.dumpSrc();
    }
    return this.getNodeText(node);
  }

  private getNodeText(node: arkts.AstNode | null | undefined): string {
    if (!node) {
      return '';
    }
    if (arkts.isIdentifier(node) && node.name) {
      return node.name;
    }
    if (node.dumpSrc()) {
      return node.dumpSrc();
    }
    return '';
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

  private validateSdkVersionCompatibility(
    operator: string,
    value: string,
    matchedApi: string,
    runtimeType: string,
    apiPosition: 'left' | 'right'
  ): boolean {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return false;
    }
    const comparisonValue = numValue % 1 === 0 ? numValue : Math.ceil(numValue);
    const assignedSdkVersion = this.calculateAssignedSdkVersion(operator, comparisonValue, apiPosition);

    if (assignedSdkVersion === null) {
      return false;
    }

    if (runtimeType === this.openSourceRuntime) {
      return comparePointVersion(String(assignedSdkVersion), this.minRequiredVersion) !== ComparisonResult.Less;
    }

    const scenario = matchedApi === this.openSourceDeviceInfo
      ? ComparisonSenario.SuppressByOHVersion
      : ComparisonSenario.SuppressByOtherOSVersion;

    let validationResult: VersionValidationResult;
    if (this.minAvailableVersion) {
      validationResult = this.valueChecker(
        this.minAvailableVersion.formatVersion,
        assignedSdkVersion.toString(),
        scenario
      );
    } else {
      validationResult = this.valueChecker(
        this.minRequiredVersion,
        assignedSdkVersion.toString(),
        scenario
      );
    }

    return validationResult.result;
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

  private findValidImportApiIdentifier(expression: arkts.AstNode, api: string): arkts.AstNode | undefined {
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, expression.peer);
    if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION) {
      const _expression: arkts.BinaryExpression = expression as arkts.BinaryExpression;
      return this.extractApiIdentifierFromExpression(_expression.left, api) ||
        this.extractApiIdentifierFromExpression(_expression.right, api);
    }
    return this.extractApiIdentifierFromExpression(expression, api);
  }

  private extractApiIdentifierFromExpression(
    expression: arkts.AstNode | null | undefined,
    targetProperty: string
  ): arkts.AstNode | undefined {
    if (!expression) {
      return undefined;
    }
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, expression.peer);
    if (kind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION) {
      return undefined;
    }
    const _expression: arkts.MemberExpression = expression as arkts.MemberExpression;
    const name = this.getNodeText(_expression.property);
    if (name !== targetProperty) {
      return undefined;
    }
    return this.getRootIdentifier(_expression.object);
  }

  private getRootIdentifier(expression: arkts.AstNode | null | undefined): arkts.AstNode | undefined {
    if (!expression) {
      return undefined;
    }
    let current: arkts.AstNode | null | undefined = expression;
    while (current) {
      const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, current.peer);
      if (kind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION) {
        break;
      }
      const _current: arkts.MemberExpression = current as arkts.MemberExpression;
      current = _current.object;
    }
    if (current) {
      const currentKind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, current.peer);
      if (currentKind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER) {
        return current;
      }
    }
    return undefined;
  }

  private isValidSdkDeclaration(identifier: arkts.AstNode, validPackagePaths: string[]): boolean {
    if (!identifier) {
      return false;
    }
    const nodeDecl = arkts.getDecl(identifier);
    const program = nodeDecl ? arkts.getProgramFromAstNode(nodeDecl) : undefined;
    const declarationFile = program?.sourceFilePath || '';
    if (!declarationFile) {
      return false;
    }
    return this.isValidSdkDeclarationPath(declarationFile, validPackagePaths);
  }

  private isValidSdkDeclarationPath(filePath: string, validPackagePaths: string[]): boolean {
    const normalizedPath = filePath.replace(/\\/g, '/').toLowerCase();
    return validPackagePaths.some(validPath =>
      normalizedPath.includes(validPath.replace(/\\/g, '/').toLowerCase())
    );
  }
}