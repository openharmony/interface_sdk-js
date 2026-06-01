/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit AbilityKit
 */

/**
 * 应用程序的模块信息。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo]{@link hapModuleInfo:HapModuleInfo}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead hapModuleInfo:HapModuleInfo
 */
export interface ModuleInfo {
  /**
   * 模块名称。
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name
   */
  readonly moduleName: string;

  /**
   * 安装目录。不能拼接路径访问资源文件，请使用[资源管理接口]{@link ./../@ohos.resourceManager:resourceManager}访问资源。
   *
   * @default Indicates the module source dir of this module
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly moduleSourceDir: string;
}