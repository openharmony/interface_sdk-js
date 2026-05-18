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
  ComparisonResult,
  ComparisonSenario,
  comparisonFunctions,
  MSF_INTEGER_VERSION,
  RUNTIME_OS_OH,
  AVAILABLE_VERSION_FORMAT_ERROR,
  AVAILABLE_TAG_NAME,
  SINCE_TAG_NAME,
  ValueCheckerFunction,
  FormatCheckerFunction,
  VersionValidationResult
} from './api_check_plugin_define';
import { ParsedVersion, DistributionOSApiAvailableVersionResult } from './api_check_plugin_typedef';
import { globalObject, externalApiCheckPlugin } from '../index';

export function defaultFormatChecker(since: string): boolean {
  const regex = /^(?:[1-9]\d{0,2}|[1-9]\d{0,2}\.\d{1,3}\.\d{1,3}|[1-9]\d{0,2}\.\d{1,3}\.\d{1,3}\([1-9]\d{0,2}\)|[1-9]\d?\.\d{1,2}\.\d{1,2})$/;
  return regex.test(since);
}

export function isOpenHarmonyRuntime(): boolean {
  return globalObject.projectConfig.runtimeOS === RUNTIME_OS_OH;
}

export function defaultValueChecker(
  sinceVersion: string,
  targetVersion: string,
  _triggerScene: number
): VersionValidationResult {
  const triggerResult = comparePointVersion(targetVersion, sinceVersion);
  const isTargetGreaterOrEqual = triggerResult >= 0;

  return {
    result: isTargetGreaterOrEqual,
    message: isTargetGreaterOrEqual
      ? 'Version requirement satisfied'
      : 'API version requirement not met'
  };
}

export function defaultFormatCheckerCompatibileIntegerAndMSF(since: string): VersionValidationResult {
  const compatibileReg = /^(?:[1-9]\d{0,2}|[1-9]\d?\.(?:0|[1-9]\d?)\.(?:0|[1-9]\d?))$/;
  if (compatibileReg.test(since)) {
    if (!checkMSFVersionMajor(since)) {
      return {
        result: false,
        message: AVAILABLE_VERSION_FORMAT_ERROR
      };
    }
    return {
      result: true,
      message: ''
    };
  } else {
    return {
      result: false,
      message: AVAILABLE_VERSION_FORMAT_ERROR
    };
  }
}

export function checkMSFVersionMajor(since: string): boolean {
  const msfVersionReg: RegExp = /^[1-9]\d?\.\d{1,2}\.\d{1,2}$/;
  if (msfVersionReg.test(since)) {
    const majorVersion = parseInt(since.split('.')[0]);
    if (majorVersion < MSF_INTEGER_VERSION) {
      return false;
    }
  }
  return true;
}

export function comparePointVersion(firstVersion: string, secondVersion: string): ComparisonResult {
  const parseVer = (version: string): number[] => {
    const trimmed = version.trim();
    if (!trimmed) {
      return [0, 0, 0];
    }
    if (trimmed.includes('.')) {
      const parts = trimmed.split('.').map(p => parseInt(p, 10));
      return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
    }
    const num = parseInt(trimmed, 10);
    return [isNaN(num) ? 0 : num, 0, 0];
  };
  const p1 = parseVer(firstVersion);
  const p2 = parseVer(secondVersion);

  for (let i = 0; i < 3; i++) {
    if (p1[i] > p2[i]) {
      return ComparisonResult.Greater;
    }
    if (p1[i] < p2[i]) {
      return ComparisonResult.Less;
    }
  }

  return ComparisonResult.Equal;
}

export function parseVersionString(raw: string): ParsedVersion | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }
  const [firstPart, secondPart] = trimmed.split(/\s+/, 2);
  const os = secondPart ? firstPart : RUNTIME_OS_OH;
  const version = secondPart ?? firstPart;

  return {
    os: os,
    version: version,
    raw: raw,
    formatVersion: `${os} ${version}`
  };
}

export function getVersionByValueChecker(
  curAvailableVersion: ParsedVersion,
  checker: ValueCheckerFunction
): string {
  if (checker === defaultValueChecker) {
    return curAvailableVersion.version;
  } else {
    return curAvailableVersion.formatVersion;
  }
}

export function getValueChecker(tag: string): ValueCheckerFunction {
  const runtimeOS = globalObject.projectConfig.runtimeOS;
  const cacheKey = `${runtimeOS}/${tag}`;
  const checker = comparisonFunctions.valueChecker.get(cacheKey);
  return checker || defaultValueChecker;
}

export function getFormatChecker(tag: string = AVAILABLE_TAG_NAME): FormatCheckerFunction {
  const runtimeOS = globalObject.projectConfig.runtimeOS;
  const cacheKey = `${runtimeOS}/${tag}`;
  const checker = comparisonFunctions.formatChecker.get(cacheKey);
  return checker || defaultFormatCheckerCompatibileIntegerAndMSF;
}

export function initComparisonFunctions(): void {
  if (comparisonFunctions.valueChecker.size !== 0) {
    return;
  }
  const tags = ['since', 'available'];
  const osName = globalObject.projectConfig.runtimeOS;
  for (const tag of tags) {
    initValueChecker(osName, tag);
    if (tag === 'available') {
      initFormatChecker(osName, tag);
    }
  }
}

export function initValueChecker(osName: string, tag: string): void {
  const cacheKey = `${osName}/${tag}`;
  if (comparisonFunctions.valueChecker.has(cacheKey)) {
    return;
  }
  
  // Try new format first: {osName}/{tag}/CompatibilityCheck
  let formatKey = `${osName}/${tag}/CompatibilityCheck`;
  if (!externalApiCheckPlugin.has(formatKey)) {
    formatKey = `${osName}/${tag}`;
  }
  let plugins = externalApiCheckPlugin.get(formatKey);

  if (!plugins || plugins.length === 0) {
    comparisonFunctions.valueChecker.set(cacheKey, defaultValueChecker);
    return;
  }

  // Try to load external plugin
  for (const plugin of plugins) {
    try {
      const externalModule = require(plugin.path);
      const externalMethod = externalModule[plugin.functionName];

      if (typeof externalMethod === 'function') {
        comparisonFunctions.valueChecker.set(cacheKey, externalMethod);
        return;
      }
    } catch (error) {
    }
  }

  comparisonFunctions.valueChecker.set(cacheKey, defaultValueChecker);
}

export function initFormatChecker(osName: string, tag: string): void {
  const pluginKey = `${osName}/${tag}/FormatValidation`;
  const cacheKey = `${osName}/${tag}`;
  if (comparisonFunctions.formatChecker.has(cacheKey)) {
    return;
  }
  
  // Try to load external plugin
  const plugins = externalApiCheckPlugin.get(pluginKey);
  if (!plugins || plugins.length === 0) {
    comparisonFunctions.formatChecker.set(cacheKey, defaultFormatCheckerCompatibileIntegerAndMSF);
    return;
  }
  for (const plugin of plugins) {
    try {
      const externalModule = require(plugin.path);
      const externalMethod = externalModule[plugin.functionName];

      if (typeof externalMethod === 'function') {
        comparisonFunctions.formatChecker.set(cacheKey, externalMethod);
        return;
      }
    } catch (error) {
    }
  }
  comparisonFunctions.formatChecker.set(cacheKey, defaultFormatCheckerCompatibileIntegerAndMSF);
}

export function compareVersions(
  parentAvailableVersion: ParsedVersion,
  curAvailableVersion: ParsedVersion
): boolean {
  try {
    if (!parentAvailableVersion || !curAvailableVersion) {
      return false;
    }
    const scenario = curAvailableVersion.os === RUNTIME_OS_OH
      ? ComparisonSenario.SuppressByOHVersion
      : ComparisonSenario.SuppressByOtherOSVersion;

    let valueResult: VersionValidationResult;
    let valueChecker = getValueChecker(AVAILABLE_TAG_NAME);
    if (valueChecker === defaultValueChecker) {
      valueResult = valueChecker(parentAvailableVersion.version, curAvailableVersion.version, scenario);
    } else {
      valueResult = valueChecker(parentAvailableVersion.formatVersion, curAvailableVersion.formatVersion, scenario);
    }

    return valueResult ? valueResult.result : false;
  } catch (error) {
    return false;
  }
}

export function checkIntegerMoreVersion(since: string): boolean {
  const IntVersionReg: RegExp = /^(?:[1-9]\d{0,2})$/;
  if (IntVersionReg.test(since)) {
    if (Number(since) >= MSF_INTEGER_VERSION) {
      return false;
    }
  }
  return true;
}

export function isApiAvailableStatement(expression: arkts.AstNode): boolean {
  if (!arkts.isCallExpression(expression)) {
    return false;
  }
  const expr = expression.expr;
  if (!expr || expr.name !== 'apiAvailable') {
    return false;
  }
  return expression.arguments && expression.arguments.length === 1;
}

export function isCheckDistributionOSVersion(tag: string, version: string): DistributionOSApiAvailableVersionResult {
  const result: DistributionOSApiAvailableVersionResult = {
    valid: true,
    version: version,
    message: ''
  };
  
  const runtimeOS = globalObject.projectConfig.runtimeOS;
  if (runtimeOS === RUNTIME_OS_OH) {
    return result;
  }
  
  const formatChecker = getFormatChecker(tag);
  const formatResult = formatChecker(version);
  if (!formatResult.result) {
    result.valid = false;
    result.message = formatResult.message || AVAILABLE_VERSION_FORMAT_ERROR;
  }
  
  return result;
}