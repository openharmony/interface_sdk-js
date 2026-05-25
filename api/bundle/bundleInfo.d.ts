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
 * The module defines the bundle information, which can be obtained through 
 * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
 * .
 * 
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use 
 * > [bundleManager-BundleInfo]{@link bundleInfo} instead.
 *
 * @file
 * @kit AbilityKit
 */

import { AbilityInfo } from './abilityInfo';
import { ApplicationInfo } from './applicationInfo';
import { HapModuleInfo } from './hapModuleInfo';

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [UsedScene]{@link bundleInfo:UsedScene} instead.
 *
 * Describes the application scenario and timing for using the permission.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo:UsedScene
 */
export interface UsedScene {
  /**
   * Abilities that use the permission.
   *
   * @default Indicates the abilities that need the permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.UsedScene#abilities
   */
  abilities: Array<string>;

  /**
   * Time when the permission is used.
   *
   * @default Indicates the time when the permission is used
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.UsedScene#when
   */
  when: string;
}

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [ReqPermissionDetail]{@link bundleInfo} instead.
 *
 * Provides the detailed information of the permissions to request from the system.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo
 */
export interface ReqPermissionDetail {
  /**
   * Name of the permission to request.
   *
   * @default Indicates the name of this required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ReqPermissionDetail#name
   */
  name: string;

  /**
   * Reason for requesting the permission.
   *
   * @default Indicates the reason of this required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ReqPermissionDetail#reason
   */
  reason: string;

  /**
   * Application scenario and timing for using the permission.
   *
   * @default Indicates the used scene of this required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ReqPermissionDetail#usedScene
   */
  usedScene: UsedScene;
}

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [bundleManager-BundleInfo]{@link bundleInfo:BundleInfo} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo:BundleInfo
 */
export interface BundleInfo {
  /**
   * Bundle name.
   *
   * @default Indicates the name of this bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#name
   */
  readonly name: string;

  /**
   * Bundle type.
   *
   * @default Indicates the name of this original bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#bundleType
   */
  readonly type: string;

  /**
   * ID of the application to which the bundle belongs.
   *
   * @default Indicates the ID of the application to which this bundle belongs
   *     The application ID uniquely identifies an application. It is determined by the bundle name and signature
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.SignatureInfo#appId
   */
  readonly appId: string;

  /**
   * UID of the application to which the bundle belongs.
   *
   * @default Indicates the UID of the application to which this bundle belongs
   *     The UID uniquely identifies an application. It is determined by the process and user IDs of the application
   *     After an application is installed, its UID remains unchanged unless it is uninstalled and then reinstalled
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#uid
   */
  readonly uid: number;

  /**
   * Time when the HAP file was installed.
   *
   * @default Indicates the hap install time
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#installTime
   */
  readonly installTime: number;

  /**
   * Time when the HAP file was updated.
   *
   * @default Indicates the hap update time
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#updateTime
   */
  readonly updateTime: number;

  /**
   * Application configuration information.
   *
   * @default Obtains configuration information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#appInfo
   */
  readonly appInfo: ApplicationInfo;

  /**
   * Ability configuration information.
   *
   * The value is obtained by passing in GET_BUNDLE_WITH_ABILITIES to
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * .
   *
   * @default Obtains configuration information about an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo
   */
  readonly abilityInfos: Array<AbilityInfo>;

  /**
   * Permissions to request from the system for running the application.
   *
   * The value is obtained by passing in GET_BUNDLE_WITH_REQUESTED_PERMISSION to
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * .
   *
   * @default Indicates the required permissions name defined in file config.json
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions
   */
  readonly reqPermissions: Array<string>;

  /**
   * Detailed information of the permissions to request from the system.
   *
   * The value is obtained by passing in GET_BUNDLE_WITH_REQUESTED_PERMISSION to
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * .
   *
   * @default Indicates the required permissions details defined in file config.json
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#reqPermissionDetails
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * Vendor of the bundle.
   *
   * @default Describes the bundle vendor
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#vendor
   */
  readonly vendor: string;

  /**
   * Version number of the bundle.
   *
   * @default Indicates the version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#versionCode
   */
  readonly versionCode: number;

  /**
   * Version description of the bundle.
   *
   * @default Indicates the text description of the bundle version
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#versionName
   */
  readonly versionName: string;

  /**
   * Earliest SDK version required for running the bundle.
   *
   * @default Indicates the compatible version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly compatibleVersion: number;

  /**
   * Latest SDK version required for running the bundle.
   *
   * @default Indicates the target version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#targetVersion
   */
  readonly targetVersion: number;

  /**
   * Whether the native libraries in the bundle are compressed. **true** if compressed, **false** otherwise.
   *
   * @default Indicates is compress native libs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly isCompressNativeLibs: boolean;

  /**
   * Module configuration information.
   *
   * @default Obtains configuration information about a module
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo
   */
  readonly hapModuleInfos: Array<HapModuleInfo>;

  /**
   * Name of the entry module.
   *
   * @default Indicates entry module name
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryModuleName: string;

  /**
   * CPU and ABI information of the bundle.
   *
   * @default Indicates the cpuAbi information of this bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly cpuAbi: string;

  /**
   * Whether the application can be installed in silent mode.
   *
   * @default Indicates is silent installation
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly isSilentInstallation: string;

  /**
   * Earliest version compatible with the bundle in the distributed scenario.
   *
   * @default Indicates the earliest historical version compatible with the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#minCompatibleVersionCode
   */
  readonly minCompatibleVersionCode: number;

  /**
   * Whether installation-free is supported for the entry module. **true** if supported, **false** otherwise.
   *
   * @default Indicates whether free installation of the entry is supported
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryInstallationFree: boolean;

  /**
   * Permission grant state. The value **0** means that the request is successful, and **-1** means the opposite.
   *
   * @default Indicates the grant status of required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#permissionGrantStates
   */
  readonly reqPermissionStates: Array<number>;
}