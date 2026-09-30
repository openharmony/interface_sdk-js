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
 * @file PluginBundleInfo
 * @kit AbilityKit
 */

/**
 * Provides the plugin information, which is obtained by calling
 * [pluginBundleManager.getAllLocalPluginInfoForSelf]{@link @ohos.bundle.pluginBundleManager:pluginBundleManager.getAllLocalPluginInfoForSelf}
 * to obtain all plugin information installed by the current app through self-distribution. The information includes the
 * plugin name, icon, version number, and module information, and is used to manage installed plugins and perform
 * compatibility checks and updates based on the version number and module information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginBundleInfo {
  /**
   * Name of the plugin. Corresponds to the **label** field configured in
   * [app.json5](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Resource ID of the plugin name. It is automatically generated during compilation and building based on the label
   * configured for the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Icon of the plugin. Corresponds to the **icon** field configured in
   * [app.json5](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Resource ID of the plugin icon. It is automatically generated during compilation and building based on the icon
   * configured for the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Bundle name of the application that installs the plugin. Corresponds to the **bundleName** field configured in
   * [app.json5](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly pluginBundleName: string;

  /**
   * Version code of the plugin. Corresponds to the **versionCode** field configured in
   * [app.json5](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Version name of the plugin. Corresponds to the **versionName** field configured in
   * [app.json5](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file).
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
 * Provides the module information of a plugin, which describes the name and function description of the plugin module.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginModuleInfo {
  /**
   * Name of the plugin module. It corresponds to the **name** field configured in the
   * [module.json5 configuration file](docroot://quick-start/module-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Resource ID of the plugin module description. It is a resource ID automatically generated during compilation and
   * building based on the **description** configured in the plugin configuration.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Description of the plugin module. It corresponds to the **description** field configured in the
   * [module.json5 configuration file](docroot://quick-start/module-configuration-file.md#tags-in-the-configuration-file).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly description: string;
}