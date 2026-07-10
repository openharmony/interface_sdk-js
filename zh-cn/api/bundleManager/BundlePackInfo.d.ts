/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The module provides information in the **pack.info** file. The information can be obtained using 
 * [freeInstall.getBundlePackInfo]{@link ./../@ohos.bundle.freeInstall:freeInstall.getBundlePackInfo(bundleName: string,  bundlePackFlag : BundlePackFlag, callback: AsyncCallback<BundlePackInfo>)}
 * .
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * 应用包信息
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundlePackInfo {
  /**
   * pack.info的包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly packages: Array<PackageConfig>;

  /**
   * pack.info中的包摘要信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly summary: PackageSummary;
}

/**
 * pack.info的包信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PackageConfig {
  /**
   * 包支持的设备类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * 包的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 包的module类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleType: string;

  /**
   * 是否跟随应用一起安装。true表示跟随应用一起安装，false表示不跟随应用一起安装。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deliveryWithInstall: boolean;
}

/**
 * pack.info中的包摘要信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PackageSummary {
  /**
   * 包的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly app: BundleConfigInfo;

  /**
   * 包的module配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly modules: Array<ModuleConfigInfo>;
}

/**
 * 包的配置信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleConfigInfo {
  /**
   * 应用Bundle名称，用于标识应用的唯一性。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 包的版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly version: Version;
}

/**
 * 描述extensionAbilities的配置信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionAbility {
  /**
   * 表示该ExtensionAbility的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 卡片信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * 包的module配置信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleConfigInfo {
  /**
   * 应用主ability的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly mainAbility: string;

  /**
   * module的api版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly apiVersion: ApiVersion;

  /**
   * module的设备类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * module发行版信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly distro: ModuleDistroInfo;

  /**
   * module包含的ability组件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly abilities: Array<ModuleAbilityInfo>;

  /**
   * 描述extensionAbilities的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly extensionAbilities: Array<ExtensionAbility>;
}

/**
 * module发行版信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleDistroInfo {
  /**
   * 是否跟随应用一起安装。true表示跟随应用一起安装，false表示不跟随应用一起安装。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deliveryWithInstall: boolean;

  /**
   * 表示当前HAP是否支持免安装特性。true表示支持免安装特性，且符合免安装约束，false表示不支持免安装特性。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly installationFree: boolean;

  /**
   * module名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * module类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleType: string;
}

/**
 * module包含的ability组件信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleAbilityInfo {
  /**
   * 表示当前ability的名称，该名称在整个应用要唯一。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 表示ability对用户显示的名称，标签值配置为该名称的资源索引以支持多语言。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;
  /**
   * 表示ability是否可以被其它应用调用。true表示可以被其它应用调用，false表示不可以被其它应用调用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * 卡片信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * 卡片信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityFormInfo {
  /**
   * 表示forms的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 表示forms的类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * 表示该卡片是否支持定时刷新，true表示卡片支持定时刷新，false表示不支持。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly updateEnabled: boolean;

  /**
   * 表示卡片定点刷新的时间，采用24小时计数，精确到分钟。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly scheduledUpdateTime: string;

  /**
   * 表示卡片定时刷新的更新频率，单位：分钟，取值为30的倍数值。卡片的最高频率为每30分钟刷新一次，和定点刷新二选一，二者都配置的情况下，定时优先。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly updateDuration: int;

  /**
   * 表示卡片外观规格，取值为“1*2”，“2*2”，“2*4”，“4*4”，定义卡片时至少要指定一个卡片规格。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly supportDimensions: Array<string>;

  /**
   * 表示卡片默认外观规格，取值必须在supportDimensions配置的列表中。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly defaultDimension: string;
}

/**
 * 包的版本。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface Version {
  /**
   * 能够兼容的最低历史版本号，用于跨设备兼容性判断。该值为32位整型数值，非负整数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minCompatibleVersionCode: int;

  /**
   * 标识版本号的文字描述，用于向用户展示。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 标识应用的版本号，值为32位非负整数。此数字仅用于确定某个版本是否比另一个版本更新，数值越大表示版本越高。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly code: int;
}

/**
 * module的api版本。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ApiVersion {
  /**
   * 版本的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly releaseType: string;

  /**
   * 最小兼容版本号。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly compatible: int;

  /**
   * 目标版本号。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly target: int;
}