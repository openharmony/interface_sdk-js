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

import { JSDoc, JsDocNodeCheckConfigItem } from "../api-check-wrapper";
import { PermissionValidTokenState } from "./api_check_plugin_enums";

/**
 * 定义与显示窗口相关的配置
 */
export interface WindowConfig {
  designWidth: number;
  autoDesignWidth: boolean;
}

/**
 * 卡片form_config.json配置
 */
export interface FormConfig {
  name: string;
  displayName: string;
  description: string;
  src: string; // 目标字段
  uiSyntax: string;
  window: WindowConfig;
  colorMode: string;
  isDynamic: boolean;
  isDefault: boolean;
  updateEnabled: boolean;
  scheduledUpdateTime: string;
  updateDuration: number;
  defaultDimension: string;
  supportDimensions: string[];
}


export interface ConfigSchema {
  forms: FormConfig[];
}

/**
 * 工程编译配置
 */
export interface ProjectConfig {
  bundleName: string;
  moduleName: string;
  cachePath: string;
  aceModuleJsonPath: string;
  compileMode: string;
  permissions: ConfigPermission;
  requestPermissions: string[];
  definePermissions: string[];
  projectRootPath: string;
  isCrossplatform: boolean;
  ignoreCrossplatformCheck: boolean;
  bundleType: string;
  compileSdkVersion: number;
  compatibleSdkVersion: number;
  projectPath: string;
  aceProfilePath: string;
  cardPageSet: string[];
  compileSdkPath: string;
  systemModules: string[];
  allModulesPaths: string[];
  sdkConfigs: SdkConfig[];
  externalApiPaths: string;
  externalSdkPaths: string[];
  sdkConfigPrefix: string;
  deviceTypes: string[];
  deviceTypesMessage: string;
  runtimeOS: string;
  syscapIntersectionSet: Set<string>;
  syscapUnionSet: Set<string>;
  permissionsArray: string[];
  buildSdkPath: string;
  nativeDependencies: string[];
  aceSoPath: string;
}

export interface CheckValidCallbackInterface {
  (jsDocTag: JSDoc[], config: JsDocNodeCheckConfigItem): boolean;
}

export interface SyscapConfig {
  SysCaps: string[]
}

export interface SdkConfig {
  prefix: string;
  apiPath: string[];
}

export interface GlobalObject {
  projectConfig: ProjectConfig
}

export interface PermissionVaildCalcInfo {
  valid: boolean;
  currentToken: PermissionValidTokenState;
  finish: boolean;
  currentPermissionMatch: boolean;
}

export interface PermissionValidCalcGroup {
  subQueue: string[];
  includeParenthesis: boolean;
}

export interface PermissionModule {
  modulePath: string;
  testPermissions: string[];
  permissions: string[];
}

export interface ConfigPermission {
  requestPermissions: Array<{ name: string }>;
  definePermissions: Array<{ name: string }>;
}