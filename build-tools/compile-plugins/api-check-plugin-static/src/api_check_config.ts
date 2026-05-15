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

import path from 'path';
import * as arkts from '@koalaui/libarkts';
import {
  PERMISSION_TAG_CHECK_NAME,
  PERMISSION_TAG_CHECK_ERROR,
  SYSTEM_API_TAG_CHECK_NAME,
  SYSTEM_API_TAG_CHECK_WARNING,
  TEST_TAG_CHECK_NAME,
  TEST_TAG_CHECK_ERROR,
  SYSCAP_TAG_CHECK_NAME,
  SYSCAP_TAG_CHECK_WARNING,
  FORM_TAG_CHECK_NAME,
  FORM_TAG_CHECK_ERROR,
  FIND_MODULE_WARNING,
  CROSSPLATFORM_TAG_CHECK_NAME,
  CROSSPLATFORM_TAG_CHECK_ERROR,
  DEPRECATED_TAG_CHECK_NAME,
  DEPRECATED_TAG_CHECK_WARNING,
  ATOMICSERVICE_BUNDLE_TYPE,
  ATOMICSERVICE_TAG_CHECK_NAME,
  ATOMICSERVICE_TAG_CHECK_ERROR,
  ATOMICSERVICE_TAG_CHECK_VERSION,
  SINCE_TAG_NAME,
  SINCE_TAG_CHECK_ERROR,
  STAGE_TAG_CHECK_NAME,
  STAGE_TAG_HUMP_CHECK_NAME,
  STAGE_TAG_CHECK_ERROR,
  AVAILABLE_TAG_NAME,
  AVAILABLE_DECORATOR_WARNING,
  AVAILABLE_FILE_NAME
} from '../utils/api_check_plugin_define';
import { globalObject } from '../index';
import {
  checkPermissionValue,
  checkSinceValue,
  checkSyscapAbility,
  checkAvailableDecorator,
  checkSystemApiTag,
  getJsDocNodeCheckConfigItem,
  isCardFile,
  pushLog,
  collectInfo
} from '../utils/api_check_plugin_utils';
import {
  ApiCheckWrapperServiceHost,
  FileCheckModuleInfo,
  CurrentAddress,
  DiagnosticCategory,
  JsDocNodeCheckConfig,
  JsDocNodeCheckConfigItem,
  ConditionCheckResult,
  JsDocNodeCheckConfigItemInterface
} from '../api-check-wrapper';
import {
  checkFileHasAvailableByFileName,
  isSourceRetentionDeclarationValid,
  isSourceRetentionAnnotationContentValid
} from '../api-check-wrapper/utils/available_decorator_utils';
import { initComparisonFunctions } from '../utils/api_check_base_utils';

const jsDocNodeCheckConfigCache: Map<string, Map<string, JsDocNodeCheckConfig>> =
  new Map<string, Map<string, JsDocNodeCheckConfig>>();

function getAvailableCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const availableConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [SINCE_TAG_NAME],
    message: SINCE_TAG_CHECK_ERROR,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: true,
    checkJsDocSuppressorValidCallback: checkAvailableDecorator
  };
  checkConfigArray.push(getJsDocNodeCheckConfigItem(availableConfig));
}

function getFindModuleCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const cannotFindNameConfig: JsDocNodeCheckConfigItem = {
    tagName: [],
    message: FIND_MODULE_WARNING,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: true
  };
  checkConfigArray.push(cannotFindNameConfig);
}

function getDeprecatedCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const deprecatedConfig: JsDocNodeCheckConfigItem = {
    tagName: [DEPRECATED_TAG_CHECK_NAME],
    message: DEPRECATED_TAG_CHECK_WARNING,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false
  };
  checkConfigArray.push(deprecatedConfig);
}

function getSystemApiCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const systemApiConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [SYSTEM_API_TAG_CHECK_NAME],
    message: SYSTEM_API_TAG_CHECK_WARNING,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false,
    checkJsDocSuppressorValidCallback: checkSystemApiTag
  };
  checkConfigArray.push(systemApiConfig);
}

function getSinceCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const sinceConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [SINCE_TAG_NAME],
    message: SINCE_TAG_CHECK_ERROR,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false,
    checkJsDocSuppressorValidCallback: checkSinceValue
  };
  checkConfigArray.push(getJsDocNodeCheckConfigItem(sinceConfig));
}

function getSyscapCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const syscapConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [SYSCAP_TAG_CHECK_NAME],
    message: SYSCAP_TAG_CHECK_WARNING,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false,
    checkJsDocSuppressorValidCallback: checkSyscapAbility
  };
  checkConfigArray.push(syscapConfig);
}

function getTestCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const testConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [TEST_TAG_CHECK_NAME],
    message: TEST_TAG_CHECK_ERROR,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false
  };
  checkConfigArray.push(testConfig);
}

function getPermissionCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const permissionConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [PERMISSION_TAG_CHECK_NAME],
    message: PERMISSION_TAG_CHECK_ERROR,
    type: DiagnosticCategory.WARNING,
    tagNameShouldExisted: false,
    checkJsDocSuppressorValidCallback: checkPermissionValue
  };
  checkConfigArray.push(getJsDocNodeCheckConfigItem(permissionConfig));
}

function getFormCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const formConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [FORM_TAG_CHECK_NAME],
    message: FORM_TAG_CHECK_ERROR,
    type: DiagnosticCategory.ERROR,
    tagNameShouldExisted: true
  };
  checkConfigArray.push(formConfig);
}

function getCrossplatformCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[], logType: DiagnosticCategory): void {
  const crossplatformConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [CROSSPLATFORM_TAG_CHECK_NAME],
    message: CROSSPLATFORM_TAG_CHECK_ERROR,
    type: logType,
    tagNameShouldExisted: true
  };
  checkConfigArray.push(crossplatformConfig);
}

function getStageModuleCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const stageModelOnlyConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [STAGE_TAG_CHECK_NAME, STAGE_TAG_HUMP_CHECK_NAME],
    message: STAGE_TAG_CHECK_ERROR,
    type: DiagnosticCategory.ERROR,
    tagNameShouldExisted: false
  };
  checkConfigArray.push(stageModelOnlyConfig);
}

function getAtomicserviceCheckConfig(checkConfigArray: JsDocNodeCheckConfigItem[]): void {
  const atomicserviceConfig: JsDocNodeCheckConfigItemInterface = {
    tagName: [ATOMICSERVICE_TAG_CHECK_NAME],
    message: ATOMICSERVICE_TAG_CHECK_ERROR,
    type: DiagnosticCategory.ERROR,
    tagNameShouldExisted: true
  };
  checkConfigArray.push(atomicserviceConfig);
}

/**
 * 根据ProjectConfig对象存入JsDoc校验规则
 *
 * @param { string } fileName - 原始node文件路径
 * @param { string } sourceFileName - 目标api文件路径
 * @returns { JsDocNodeCheckConfig } - 返回校验规则对象
 */
function getJsDocNodeCheckConfig(fileName: string, sourceFileName: string): JsDocNodeCheckConfig {
  let byFileName: Map<string, JsDocNodeCheckConfig> | undefined = jsDocNodeCheckConfigCache.get(fileName);
  if (byFileName === undefined) {
    byFileName = new Map<string, JsDocNodeCheckConfig>();
    jsDocNodeCheckConfigCache.set(fileName, byFileName);
  }
  let result: JsDocNodeCheckConfig | undefined = byFileName.get(sourceFileName);
  if (result !== undefined) {
    return result;
  }
  let needCheckResult: boolean = false;
  const checkConfigArray: JsDocNodeCheckConfigItem[] = [];
  const apiName: string = path.basename(fileName);
  const sourceBaseName: string = path.basename(sourceFileName);
  result = {
    nodeNeedCheck: needCheckResult,
    checkConfig: checkConfigArray
  };
  initComparisonFunctions();
  if (/(?<!\.d)\.ts$/g.test(fileName)) {
    getFindModuleCheckConfig(checkConfigArray);
  }
  // if (globalObject.projectConfig.systemModules.includes(apiName)) {
  //   byFileName.set(sourceFileName, result);
  //   return result;
  // }
  if (checkFileHasAvailableByFileName(sourceFileName)) {
    needCheckResult = true;
    getAvailableCheckConfig(checkConfigArray);
  } else if (!globalObject.projectConfig.systemModules.includes(apiName) && globalObject.projectConfig.allModulesPaths.includes(path.normalize(sourceFileName))) {
    needCheckResult = true;
    getDeprecatedCheckConfig(checkConfigArray);
    getSystemApiCheckConfig(checkConfigArray);
    if (sourceBaseName !== AVAILABLE_FILE_NAME) {
      getSinceCheckConfig(checkConfigArray);
    }
    if (globalObject.projectConfig.deviceTypes && globalObject.projectConfig.deviceTypes.length > 0) {
      getSyscapCheckConfig(checkConfigArray);
    }
    if (globalObject.projectConfig.projectRootPath) {
      const ohosTestDir = path.resolve(globalObject.projectConfig.projectRootPath, 'entry', 'src', 'ohosTest');
      if (!path.resolve(fileName).startsWith(ohosTestDir)) {
        getTestCheckConfig(checkConfigArray);
      }
    }
    getPermissionCheckConfig(checkConfigArray);
    if (isCardFile(fileName)) {
      getFormCheckConfig(checkConfigArray);
    }
    if (globalObject.projectConfig.isCrossplatform) {
      const logType: DiagnosticCategory =
        globalObject.projectConfig.ignoreCrossplatformCheck !== true ? DiagnosticCategory.ERROR :
          DiagnosticCategory.WARNING;
      getCrossplatformCheckConfig(checkConfigArray, logType);
    }
    getStageModuleCheckConfig(checkConfigArray);
    if (globalObject.projectConfig.bundleType === ATOMICSERVICE_BUNDLE_TYPE &&
      globalObject.projectConfig.compileSdkVersion >= ATOMICSERVICE_TAG_CHECK_VERSION) {
      getAtomicserviceCheckConfig(checkConfigArray);
    }
  }
  result = {
    nodeNeedCheck: needCheckResult,
    checkConfig: checkConfigArray
  };
  byFileName.set(sourceFileName, result);
  return result;
}


/**
 * 返回apiHost
 * 
 * @returns { ApiCheckWrapperServiceHost } - apiHost
 */
export function getApiCheckWrapperServiceHost(): ApiCheckWrapperServiceHost {
  return {
    getJsDocNodeCheckedConfig: (currentFileName: string, symbolSourceFilePath: string): JsDocNodeCheckConfig => {
      return getJsDocNodeCheckConfig(currentFileName, symbolSourceFilePath);
    },
    getFileCheckedModuleInfo: (containFilePath: string): FileCheckModuleInfo => {
      return {
        fileNeedCheck: true,
        currentFileName: containFilePath
      };
    },
    pushLogInfo: (apiName: string, currentFilePath: string, currentAddress: CurrentAddress,
      logLevel: DiagnosticCategory, logMessage: string): void => {
      pushLog(apiName, currentFilePath, currentAddress, logLevel, logMessage);
    },
    collectImportInfo: (moduleName: string[], modulePath: string, currentFilePath: string): void => {
      collectInfo(moduleName, modulePath, currentFilePath);
    },
    isSourceRetentionDeclarationValid: (annoDecl: arkts.AstNode): boolean => {
      return isSourceRetentionDeclarationValid(annoDecl);
    },
    isSourceRetentionAnnotationContentValid: (annotation: arkts.AstNode): ConditionCheckResult => {
      return isSourceRetentionAnnotationContentValid(annotation);
    }
  };
}