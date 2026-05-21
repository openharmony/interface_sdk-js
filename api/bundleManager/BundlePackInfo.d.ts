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
 * The bundle pack info class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundlePackInfo {
  /**
   * Package configuration information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly packages: Array<PackageConfig>;

  /**
   * Package summary information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly summary: PackageSummary;
}

/**
 * PackageConfig: the package info class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PackageConfig {
  /**
   * Device types supported by the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Module type of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleType: string;

  /**
   * Whether it should be installed together with the application. **true** if it should be installed together with the
   * application, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deliveryWithInstall: boolean;
}

/**
 * PackageSummary: the package summary class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PackageSummary {
  /**
   * Bundle configuration information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly app: BundleConfigInfo;

  /**
   * Module configuration information of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly modules: Array<ModuleConfigInfo>;
}

/**
 * BundleConfigInfo: the bundle summary class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleConfigInfo {
  /**
   * Bundle name. It uniquely identifies an application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Bundle version.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly version: Version;
}

/**
 * ExtensionAbility: the extension ability forms class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionAbility {
  /**
   * Name of the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Widget information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * ModuleConfigInfo: the module summary of a bundle.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleConfigInfo {
  /**
   * Name of the main ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly mainAbility: string;

  /**
   * API version of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly apiVersion: ApiVersion;

  /**
   * Device types supported by the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Distribution information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly distro: ModuleDistroInfo;

  /**
   * Ability information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly abilities: Array<ModuleAbilityInfo>;

  /**
   * ExtensionAbility information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly extensionAbilities: Array<ExtensionAbility>;
}

/**
 * ModuleDistroInfo: the bundle info summary class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleDistroInfo {
  /**
   * Whether it should be installed together with the application. **true** if it should be installed together with the
   * application, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deliveryWithInstall: boolean;

  /**
   * Whether the HAP file supports the installation-free feature. **true** if the HAP file supports the installation-
   * free feature and meets installation-free constraints, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly installationFree: boolean;

  /**
   * Module name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Module type.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleType: string;
}

/**
 * ModuleAbilityInfo: the ability info of a module.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ModuleAbilityInfo {
  /**
   * Name of the ability. The name must be unique in the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Name of the ability displayed to users. The value is a resource index to names in multiple languages.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;
  /**
   * Whether the ability can be invoked by other applications. **true** if it can be invoked by other applications,
   * **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * Widget information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * AbilityFormInfo: the form info of an ability.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityFormInfo {
  /**
   * Widget name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Widget type.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * Whether the widget supports periodic update. **true** if the widget supports periodic update, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly updateEnabled: boolean;

  /**
   * Scheduled time to update the widget. The value is in 24-hour format and accurate to the minute.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly scheduledUpdateTime: string;

  /**
   * Interval to update the widget. The unit is 30 minutes. The value is a multiple of 30. A widget can be updated at a
   * specified interval (**updateDuration**) or at the scheduled time (**scheduledUpdateTime**). If both are configured,
   * **updateDuration** takes precedence.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly updateDuration: int;

  /**
   * Dimensions of the widget. The value can be **1*2**, **2*2**, **2*4**, **4*4**, or a combination of these options.
   * At least one option must be specified when defining the widget.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly supportDimensions: Array<string>;

  /**
   * Default dimensions of the widget. The value must be available in the **supportDimensions** array of the widget.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly defaultDimension: string;
}

/**
 * Version: the bundle version class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface Version {
  /**
   * Minimum compatible version of the bundle. It is used to check whether the bundle is compatible with a version on
   * other devices in the cross-device scenario. The value is a 32-bit non-negative integer.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minCompatibleVersionCode: int;

  /**
   * Version number of the bundle visible to users.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Version number of the bundle used only for bundle management. The value is a 32-bit non-negative integer. It is
   * used only to determine whether a version is later than another version. A larger value indicates a later version.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly code: int;
}

/**
 * ApiVersion: the bundle Api version class.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ApiVersion {
  /**
   * Name of the API version.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly releaseType: string;

  /**
   * Minimum API version.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly compatible: int;

  /**
   * Target API version.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly target: int;
}