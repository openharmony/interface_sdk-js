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
 * Defines the plugin information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginBundleInfo {
  /**
   * Plugin name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Resource ID of the plugin name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Plugin icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Resource ID of the plugin icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Bundle name of the application for which the plugin is installed.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly pluginBundleName: string;

  /**
   * Version number of the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Version name of the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * Module information of the plugin.
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
 * Defines the module information of a plugin.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginModuleInfo {
  /**
   * Module name of the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Resource ID of the module description.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Description of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly description: string;
}