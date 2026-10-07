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
 * 插件信息，通过接口
 * [pluginBundleManager.getAllLocalPluginInfoForSelf]{@link @ohos.bundle.pluginBundleManager:pluginBundleManager.getAllLocalPluginInfoForSelf}
 * 获取当前应用已通过自分发方式安装的所有插件信息。该信息包含插件的名称、图标、版本号及模块信息，用于管理已安装的插件，并基于版本号和模块信息进行兼容性检查与更新。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginBundleInfo {
  /**
   * 插件的名称。对应[app.json5](docroot://quick-start/app-configuration-file.md#配置文件标签)中配置的label字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * 插件名称的资源ID值。是编译构建时根据插件配置的label自动生成的资源ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * 插件的图标。对应[app.json5](docroot://quick-start/app-configuration-file.md#配置文件标签)中配置的icon字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * 插件图标的资源ID值。是编译构建时根据插件配置的icon自动生成的资源ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * 安装插件的应用包名。对应[app.json5](docroot://quick-start/app-configuration-file.md#配置文件标签)中配置的bundleName字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly pluginBundleName: string;

  /**
   * 插件的版本号。对应[app.json5](docroot://quick-start/app-configuration-file.md#配置文件标签)中配置的versionCode字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * 插件的版本名称。对应[app.json5](docroot://quick-start/app-configuration-file.md#配置文件标签)中配置的versionName字段。
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
 * 插件的模块信息。用于描述插件模块的名称和功能说明。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi [since 19 - 24]
 * @publicapi [since 26.0.0]
 * @since 19 dynamic
 * @since 23 static
 */
export interface PluginModuleInfo {
  /**
   * 插件模块的名称。对应[module.json5配置文件](docroot://quick-start/module-configuration-file.md#配置文件标签)中配置的name字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 插件模块描述的资源ID值。是编译构建时根据插件配置的description自动生成的资源ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * 插件模块的描述信息。对应[module.json5配置文件](docroot://quick-start/module-configuration-file.md#配置文件标签)中配置的description字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 19 - 24]
   * @publicapi [since 26.0.0]
   * @since 19 dynamic
   * @since 23 static
   */
  readonly description: string;
}