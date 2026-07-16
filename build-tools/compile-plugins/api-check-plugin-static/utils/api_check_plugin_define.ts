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

export const PERMISSION_TAG_CHECK_NAME: string = 'permission';
export const PERMISSION_TAG_CHECK_ERROR: string = 'To use this API, you need to apply for the permissions: $DT';
export const SYSTEM_API_TAG_CHECK_NAME: string = 'systemapi';
export const SYSTEM_API_TAG_CHECK_WARNING: string = "'{0}' is system api";
export const TEST_TAG_CHECK_NAME: string = 'test';
export const TEST_TAG_CHECK_ERROR: string = "'{0}' can only be used for testing directories ";
export const SYSCAP_TAG_CHECK_NAME: string = 'syscap';
export const SYSCAP_TAG_CHECK_WARNING: string = "The system capacity of this api '{0}' is not supported on all devices";
export const SYSCAP_TAG_CONDITION_CHECK_WARNING: string =
  'The API is not supported on all devices. Use the canIUse condition to determine whether the API is supported.';
export const CANIUSE_FUNCTION_NAME: string = 'canIUse';
export const VERSION_CHECK_FUNCTION_NAME: string = 'isApiVersionGreaterOrEqual';
export const RUNTIME_OS_OH: string = 'OpenHarmony';
export const FORM_TAG_CHECK_NAME: string = 'form';
export const FORM_TAG_CHECK_ERROR: string = "'{0}' can't support form application.";
export const CROSSPLATFORM_TAG_CHECK_NAME: string = 'crossplatform';
export const CROSSPLATFORM_TAG_CHECK_ERROR: string = "'{0}' can't support crossplatform application.";
export const DEPRECATED_TAG_CHECK_NAME: string = 'deprecated';
export const DEPRECATED_TAG_CHECK_WARNING: string = "'{0}' has been deprecated.";
export const STAGE_TAG_CHECK_NAME: string = 'stagemodelonly';
export const STAGE_TAG_HUMP_CHECK_NAME: string = 'StageModelOnly';
export const STAGE_TAG_CHECK_ERROR: string = 'This API is used only in Stage Mode, but the current Mode is FA.';
export const ATOMICSERVICE_BUNDLE_TYPE: string = 'atomicService';
export const ATOMICSERVICE_TAG_CHECK_NAME: string = 'atomicservice';
export const ATOMICSERVICE_TAG_CHECK_ERROR: string = "'{0}' can't support atomicservice application.";
export const SINCE_TAG_NAME: string = 'since';
export const SINCE_TAG_CHECK_ERROR: string =
  "The '{0}' API is supported since SDK version $SINCE1. However, the current compatible SDK version is $SINCE2.";
export const ATOMICSERVICE_TAG_CHECK_VERSION: number = 11;
export const FIND_MODULE_WARNING: string = "Cannot find name '{0}'.";

export const AVAILABLE_TAG_NAME: string = 'available';
export const AVAILABLE_DECORATOR_WARNING: string = `The '{0}' API is available since SDK version $SINCE1. However, the current compatible SDK version is $SINCE2.`;
export const AVAILABLE_FILE_NAME: string = '@ohos.annotation.d.ets';
export const AVAILABLE_VERSION_FORMAT_ERROR_PREFIX: string =
  'The runtime OS for the current project is $RUNTIMEOS. The OS version number $VERSION is invalid.';
export const AVAILABLE_OSNAME_ERROR: string =
  'The runtime OS for the current project is $RUNTIMEOS. @Available is not supported on the OS: $OSNAME.';
export const AVAILABLE_SCOPE_ERROR: string =
  'Unnecessary. The outer annotation already indicates that the version is greater than or equal to $VERSION.';
export const AVAILABLE_VERSION_FORMAT_ERROR: string =
  'The OpenHarmony version must be an integer between 1 and 999, and when the OpenHarmony version is greater than or equal to 26, the version number format also supports the M.S.F format.';
export const API_INTERFACE_WHITE_LIST: Map<string, string[]> = new Map([]);
export const MSF_INTEGER_VERSION: number = 26;
export const MSF_SANDF_VERSION: number = 99;
export const DISTINGUISH_FUNCTION_NAME: string = 'ETSGLOBAL';

/**
 * Permission validation token state enum
 */
export enum PermissionValidTokenState {
  Init,
  LeftParenthesis,
  RightParenthesis,
  PermissionChar,
  And,
  Or,
}

export enum ComparisonResult {
  Less = -1,
  Equal = 0,
  Greater = 1
}

export enum ComparisonSenario {
  Trigger = 0,
  SuppressByOHVersion = 1,
  SuppressByOtherOSVersion = 2,
}

export const comparisonFunctions = {
  valueChecker: new Map<string, ValueCheckerFunction>(),
  formatChecker: new Map<string, FormatCheckerFunction>()
};

export interface SdkHvigorLogInfo {
  code: string;
  description: string;
  cause: string;
  position: string;
  solutions: string[];
}

export const CONSTANT_STEP_0: number = 0;
export const CONSTANT_STEP_1: number = 1;
export const CONSTANT_STEP_2: number = 2;
export const CONSTANT_STEP_3: number = 3;
export const GLOBAL_DECLARE_WHITE_LIST: Set<string> = new Set(['Context', 'PointerStyle', 'PixelMap', 'UnifiedData',
  'Summary', 'UniformDataType', 'IntentionCode', 'NavDestinationInfo', 'UIContext', 'Resource', 'WebviewController']);
export const MESSAGE_CONFIG_COLOR_RED: string = '\u001b[31m';
export const MESSAGE_CONFIG_COLOR_RESET: string = '\u001b[39m';
export const MESSAGE_CONFIG_COLOR_ERROR: string = 'color:#f5a623';
export const MESSAGE_CONFIG_COLOR_WARNING: string = 'color:#d0021b';
export const MESSAGE_CONFIG_HEADER_ERROR: string = 'ArkTS:ERROR File: ';
export const MESSAGE_CONFIG_HEADER_WARNING: string = 'ArkTS:WARN File: ';

export interface VersionValidationResult {
  result: boolean;
  message?: string;
}

export type ValueCheckerFunction = (
  sinceVersion: string,
  targetVersion: string,
  triggerScene: number
) => VersionValidationResult;

export type FormatCheckerFunction = (version: string) => VersionValidationResult;

export const SUPPRESSWARNINGS_RULE_INFO: Map<string, string> = new Map([
  [SINCE_TAG_NAME, 'SuppressWarnings'],
  [AVAILABLE_TAG_NAME, 'SuppressWarnings'],
  [SYSCAP_TAG_CHECK_NAME, 'SuppressWarnings'],
  [PERMISSION_TAG_CHECK_NAME, 'SuppressWarnings']
]);

export const ERROR_CODE_INFO: Map<string, Omit<SdkHvigorLogInfo, 'cause' | 'position'>> = new Map([
  [AVAILABLE_VERSION_FORMAT_ERROR_PREFIX, { code: '11706016', description: 'Invalid version format in @Available decorator.', solutions: ['Change the version number to an integer between 1 and 999, or use the standardized M.S.F format.'] }],
  [AVAILABLE_OSNAME_ERROR, { code: '11706017', description: 'Invalid OS name in @Available decorator.', solutions: ['Use the correct OS name matching the project runtime OS.'] }]
])

export enum NodeTraverseMode {
  TS_TRAVERSE,
  CPP_TRAVERSE_FILTER,
}
