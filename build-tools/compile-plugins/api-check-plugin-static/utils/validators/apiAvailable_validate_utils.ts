/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import {
  APIAVAILABLE_CHECK_ERROR,
  APIAVAILABLE_NUMBER_FORMAT_ERROR,
  APIAVAILABLE_OPENHARMONY_CONTENT_ERROR,
  MSF_INTEGER_VERSION,
  APIAVAILABLE_STRING_DISTRIBUTIONOS_FORMAT_ERROR,
  ERROR_CODE_INFO,
  APIAVAILABLE_STRING_OPENHARMONY_FORMAT_ERROR,
  APIAVAILABLE_DISTRIBUTIONOS_CONTENT_ERROR,
  SINCE_TAG_NAME,
  APIAVAILABLE_NULLORUNDEFINED_FORMAT_ERROR
} from '../api_check_plugin_define';
import { ApiAvailableResult, DistributionOSApiAvailableVersionResult } from '../api_check_plugin_typedef';
import { DiagnosticCategory } from '../../api-check-wrapper';

function buildApiAvailableMessage(base: string, suffix?: string): string {
  const code: string = ERROR_CODE_INFO.get(base)?.code ?? '';
  return `${code}#${base}${suffix ?? ''}`;
}

function isDecimalInteger(since: string): boolean {
  return /^[+-]?[0-9]+$/.test(since);
}

function isCanonicalDecimalInteger(since: string): boolean {
  return /^[+-]?(0|[1-9][0-9]*)$/.test(since);
}

function isNumberLiteral(node: arkts.AstNode): boolean {
  if (arkts.isNumberLiteral(node)) {
    return true;
  }

  if (arkts.isPrefixUnaryExpression(node) && arkts.isNumberLiteral(node.operand)) {
    return node.operator === arkts.SyntaxKind.MinusToken ||
      node.operator === arkts.SyntaxKind.PlusToken;
  }

  return false;
}

function isNullOrUndefinedScene(node: arkts.AstNode): boolean {
  const nodeValue: string = node.dumpSrc();
  return nodeValue === 'null' || nodeValue === 'undefined';
}

function parseMSFVersion(since: string): { major: number; hasParentheses: boolean } | null {
  const match: RegExpMatchArray | null = since.match(/^([1-9]\d?)\.(0|[1-9]\d?)\.(0|[1-9]\d?)(?:\((\d+)\))?$/);
  if (!match) {
    return null;
  }
  return { major: parseInt(match[1]), hasParentheses: match[4] !== undefined };
}

function checkStringOpenHarmony(content: string): ApiAvailableResult {
  if (!/^[0-9.]+$/.test(content)) {
    return {
      valid: false,
      message: buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_STRING_OPENHARMONY_FORMAT_ERROR),
      type: DiagnosticCategory.ERROR
    };
  }
  const msf = parseMSFVersion(content);
  if (!msf || msf.major < MSF_INTEGER_VERSION) {
    return {
      valid: false,
      message: buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_OPENHARMONY_CONTENT_ERROR),
      type: DiagnosticCategory.ERROR
    };
  }
  return {
    valid: true,
    message: APIAVAILABLE_CHECK_ERROR,
    type: DiagnosticCategory.ERROR
  };
}

function checkStringDistributionOS(
  content: string,
  isCheckDistributionOSVersion: (tag: string, version: string) => DistributionOSApiAvailableVersionResult
): ApiAvailableResult {
  if (!/^[0-9.()]+$/.test(content)) {
    return {
      valid: false,
      message: buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_STRING_DISTRIBUTIONOS_FORMAT_ERROR),
      type: DiagnosticCategory.ERROR
    };
  }
  const msf = parseMSFVersion(content);
  if (!msf) {
    return {
      valid: false,
      message: buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_OPENHARMONY_CONTENT_ERROR),
      type: DiagnosticCategory.ERROR
    };
  }
  if (msf.major >= MSF_INTEGER_VERSION) {
    if (msf.hasParentheses) {
      return { 
        valid: false,
        message: buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_OPENHARMONY_CONTENT_ERROR),
        type: DiagnosticCategory.ERROR
      };
    }
    return {
      valid: true,
      message: APIAVAILABLE_CHECK_ERROR,
      type: DiagnosticCategory.ERROR
    };
  }
  const distributionOSCheck: DistributionOSApiAvailableVersionResult = isCheckDistributionOSVersion(SINCE_TAG_NAME, content);
  if (!distributionOSCheck.valid) {
    const distCode: string = ERROR_CODE_INFO.get(APIAVAILABLE_DISTRIBUTIONOS_CONTENT_ERROR)?.code ?? '';
    return {
      valid: false,
      message: `${distCode}#${distributionOSCheck.message}`,
      type: DiagnosticCategory.ERROR
    };
  }
  return {
    valid: true,
    message: APIAVAILABLE_CHECK_ERROR,
    type: DiagnosticCategory.ERROR
  };
}

export interface ValidateApiAvailableArgumentOptions {
  node: arkts.CallExpression;
  isOpenHarmonyRuntime: () => boolean;
  isCheckDistributionOSVersion: (tag: string, version: string) => DistributionOSApiAvailableVersionResult;
}

export function validateApiAvailableArgument(options: ValidateApiAvailableArgumentOptions): ApiAvailableResult {
  const { node, isOpenHarmonyRuntime, isCheckDistributionOSVersion } = options;

  const result: ApiAvailableResult = {
    valid: true,
    message: APIAVAILABLE_CHECK_ERROR,
    type: DiagnosticCategory.ERROR
  };

  const arg: arkts.AstNode = node.arguments[0];
  const isNumber: boolean = isNumberLiteral(arg);
  const isStringLiteralNode: boolean = arkts.isStringLiteral(arg) || arkts.isNoSubstitutionTemplateLiteral(arg);
  const isNullish: boolean = isNullOrUndefinedScene(arg);

  if (!(isNumber || isStringLiteralNode || isNullish)) {
    return result;
  }

  if (isNullish) {
    result.valid = false;
    result.message = buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_NULLORUNDEFINED_FORMAT_ERROR);
    return result;
  }

  if (isNumber) {
    const numText: string = arg.getText().trim();
    if (!isDecimalInteger(numText)) {
      result.valid = false;
      result.message = buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_NUMBER_FORMAT_ERROR);
    } else if (!isCanonicalDecimalInteger(numText) || Number(numText) < 1 || Number(numText) >= MSF_INTEGER_VERSION) {
      result.valid = false;
      result.message = buildApiAvailableMessage(APIAVAILABLE_CHECK_ERROR, APIAVAILABLE_OPENHARMONY_CONTENT_ERROR);
    }
    return result;
  }

  const content: string = (arg as arkts.StringLiteral).text;
  return isOpenHarmonyRuntime() ?
    checkStringOpenHarmony(content) :
    checkStringDistributionOS(content, isCheckDistributionOSVersion);
}
