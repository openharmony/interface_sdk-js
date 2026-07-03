/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * The module defines the bundle information. An application can obtain its own bundle information through 
 * [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with [bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag} set to the information to be 
 * contained in the returned [BundleInfo]{@link BundleInfo}.
 *
 * @file
 * @kit AbilityKit
 */

import { ApplicationInfo } from './ApplicationInfo';
import { HapModuleInfo, RouterItem } from './HapModuleInfo';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the bundle information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleInfo {
  /**
   * Name of the application package. It corresponds to the **bundleName** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Vendor of the application package. It corresponds to the **vendor** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly vendor: string;

  /**
   * Version code of the application package. It corresponds to the **versionCode** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Version description of the application package. It corresponds to the **versionName** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * Minimum compatible version of the application package in the distributed scenario. It corresponds to the
   * **minCompatibleVersionCode** field in the [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minCompatibleVersionCode: int;

  /**
   * Target version of the application. It corresponds to the **targetAPIVersion** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly targetVersion: int;

  /**
   * Application information. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_APPLICATION** to the
   * **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly appInfo: ApplicationInfo;

  /**
   * Obtains configuration information about an application
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly appInfo: ApplicationInfo | null;

  /**
   * Module configuration information. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_HAP_MODULE**
   * to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly hapModulesInfo: Array<HapModuleInfo>;

  /**
   * Detailed information of the permissions to request from the system. The information can be obtained by passing in
   * **GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   * The indices of the **reqPermissionDetails** array and the **permissionGrantStates** array are in one-to-one
   * correspondence, meaning that the authorization status of **reqPermissionDetails[2]** is
   * **permissionGrantStates[2]**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * Permission grant state. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION**
   * to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   * The indices of the **reqPermissionDetails** array and the **permissionGrantStates** array are in one-to-one
   * correspondence, meaning that the authorization status of **reqPermissionDetails[2]** is
   * **permissionGrantStates[2]**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissionGrantStates: Array<bundleManager.PermissionGrantState>;

  /**
   * Signature information of the bundle. The information can be obtained by passing in
   * **GET_BUNDLE_INFO_WITH_SIGNATURE_INFO** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly signatureInfo: SignatureInfo;

  /**
   * Indicates the SignatureInfo of the bundle
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly signatureInfo: SignatureInfo | null;

  /**
   * Timestamp for the installation of the application package. It measures the milliseconds that have passed since the
   * Unix epoch (January 1, 1970, 08:00:00 UTC+8), in milliseconds.
   *
   * **NOTE**
   *
   * If the current time is not obtained when the device is powered on for the first time from the factory, the Unix
   * epoch (1970-01-01 08:00:00 UTC+8) is used as the start time of the current system. For example, if the time is not
   * obtained after startup and the installation succeeds after a 32-second wait, the application package installation
   * timestamp is 32000.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly installTime: long;

  /**
   * Timestamp for the last update of the application package. It measures the milliseconds that have passed since the
   * Unix epoch (January 1, 1970, 08:00:00 UTC+8), in milliseconds.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly updateTime: long;

  /**
   * Router table of the application. The table is obtained by deduplicating and combining the **routerMap** information
   * under **hapModulesInfo** based on the **name** field in **RouterItem**. The information can be obtained by passing
   * in **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ROUTER_MAP** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * Index of an application clone. It takes effect only for application clones.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Timestamp for the initial installation of the application package. It measures the milliseconds that have passed
   * since the Unix epoch (January 1, 1970, 08:00:00 UTC+8), in milliseconds. For preinstalled applications, the initial
   * installation timestamp is 1533657660000.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  readonly firstInstallTime?: long;

  /**
   * Build version number of the application package, which identifies different build version packages under the same
   * release version. It corresponds to the buildVersion field in the app.json5 file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  readonly buildVersion?: string;

  /**
   * Bundle name of the sandbox application creator.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly sandboxCreatorBundleName?: string;
}

/**
 * Provides the detailed information of the permissions to request from the system.
 *
 * > **NOTE**
 * >
 * > - If multiple packages of an application have requested the same permission but with different reasons, the system
 * > returns only one reason based on a descending priority order: entry HAP > feature HAP > in-app HSP.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ReqPermissionDetail {
  /**
   * [Name of the permission](docroot://security/AccessToken/app-permissions.md) to request.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Name of the module that requests the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * Reason for requesting the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  reason: string;

  /**
   * ID of the reason for requesting the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  reasonId: long;

  /**
   * Use scenario and timing for using the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  usedScene: UsedScene;
}

/**
 * Describes the use scenario and timing of the permission,
 * helping developers request and use permissions properly.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface UsedScene {
  /**
   * Abilities that use the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilities: Array<string>;

  /**
   * Time when the permission is used. The value can be **inuse** or **always**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  when: string;
}

/**
 * Describes the signature information of the app package,which can identifythe app source, ensure app integrity,
 * and be used for app security verification and identification.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface SignatureInfo {
  /**
   * App ID, which uniquely identifies an app. For details, see
   * [What Is appId?](docroot://quick-start/common-problem-of-application.md#what-is-appid).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appId: string;

  /**
   * Fingerprint information of the application package. It is generated by calculating the hash value of the signing
   * certificate using the SHA-256 algorithm. This field changes when the used signing certificate changes.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly fingerprint: string;

  /**
   * Unique ID of the application. For details, see
   * [What is appIdentifier?](docroot://quick-start/common-problem-of-application.md#what-is-appidentifier).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly appIdentifier: string;

  /**
   * Public key of the application certificate.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  readonly certificate?: string;
}

/**
 * Describes the identity information of an application clone.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 14 dynamic
 * @since 23 static
 */
export interface AppCloneIdentity {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  readonly bundleName: string;
  /**
   * Clone index information of the app package. The value is an integer ranging from [0-5],
   * where 0 indicates the main app and 1-5 indicate clone apps.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}

/**
 * Obtains dynamic icon information about a bundle
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export interface DynamicIconInfo {
  /**
   * Indicates the name of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Indicates the name of the dynamic icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Indicates the user id of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly userId: int;

  /**
   * Indicates the index of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}

/**
 * Describes the app backup icon information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface AlternateIconInfo {
  /**
   * Name of the backup icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly iconName: string;

  /**
   * Resource ID of the backup icon, which is automatically generated
   * during compilation and build based on the icon configured in the app.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly iconId: long;

  /**
   * Whether the backup icon is enabled.
   * true: The current backup icon is enabled.
   * false: The current backup icon is not enabled.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly enabled: boolean;
}

/**
 * The bundle options of bundle manager
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export interface BundleOptions {
  /**
   * Indicates the user id.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * Indicates the app index.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  appIndex?: int;

  /**
   * Indicates bundle name
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  bundleName?: string;

  /**
   * Indicates module name
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  moduleName?: string;

  /**
   * Indicates ability name
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  abilityName?: string;
}