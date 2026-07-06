/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * The module defines plugin information, which is obtained through the 
 * [bundleManager.getAllPluginInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAllPluginInfo} API.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * 插件信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginBundleInfo {
  /**
   * 插件的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * 插件名称的资源id值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * 插件的图标。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * 插件图标的资源id值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * 安装插件的应用包名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly pluginBundleName: string;

  /**
   * 插件的版本号。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * 插件的版本名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * 插件的模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly pluginModuleInfos: Array<PluginModuleInfo>;
}

/**
 * 插件的模块信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginModuleInfo {
  /**
   * 插件模块的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 插件模块描述的资源id值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * 插件模块的描述信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly description: string;
}