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
 * @file
 * @kit AbilityKit
 */

import { ApplicationInfo } from './ApplicationInfo';
import { HapModuleInfo, RouterItem } from './HapModuleInfo';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * Obtains configuration information about a bundle
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Obtains configuration information about a bundle
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * Obtains configuration information about a bundle
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
export interface BundleInfo {
  /**
   * Indicates the name of this bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the name of this bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the name of this bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly name: string;

  /**
   * Indicates the bundle vendor
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the bundle vendor
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the bundle vendor
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly vendor: string;

  /**
   * Indicates the version code of the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the version code of the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the version code of the bundle
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly versionCode: long;

  /**
   * Indicates the version name of the bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the version name of the bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the version name of the bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly versionName: string;

  /**
   * Indicates the **minimum ** version compatible with the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the **minimum ** version compatible with the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the **minimum ** version compatible with the bundle
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly minCompatibleVersionCode: int;

  /**
   * Indicates the target version number of the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the target version number of the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the target version number of the bundle
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly targetVersion: int;

  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly appInfo: ApplicationInfo;

  /**
   * Obtains configuration information about a module
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Obtains configuration information about a module
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Obtains configuration information about a module
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly hapModulesInfo: Array<HapModuleInfo>;

  /**
   * Indicates the required permissions details defined in the bundle
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the required permissions details defined in the bundle
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the required permissions details defined in the bundle
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * Indicates the grant state of required permissions
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the grant state of required permissions
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the grant state of required permissions
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly permissionGrantStates: Array<bundleManager.PermissionGrantState>;

  /**
   * Indicates the SignatureInfo of the bundle
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the SignatureInfo of the bundle
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the SignatureInfo of the bundle
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly signatureInfo: SignatureInfo;

  /**
   * Indicates the hap install time
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the hap install time
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly installTime: long;

  /**
   * Indicates the hap update time
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the hap update time
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly updateTime: long;

  /**
   * Indicates the router information of the application
   *
   * @type { Array<RouterItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * Indicates the appIndex of application, only work in appClone mode
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly appIndex: int;

  /**
   * Indicates the hap first install time
   *
   * @type { ?long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly firstInstallTime?: long;
}

/**
 * Indicates the required permissions details defined in configuration file
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates the required permissions details defined in configuration file
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * Indicates the required permissions details defined in configuration file
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
export interface ReqPermissionDetail {
  /**
   * Indicates the name of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the name of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the name of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  name: string;

  /**
   * Indicates the module name which the request permission belongs
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  /**
   * Indicates the module name which the request permission belongs
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  moduleName: string;

  /**
   * Indicates the reason of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the reason of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the reason of this required permissions
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  reason: string;

  /**
   * Indicates the reason id of this required permissions
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the reason id of this required permissions
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the reason id of this required permissions
   *
   * @type { long }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  reasonId: long;

  /**
   * Indicates the used scene of this required permissions
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the used scene of this required permissions
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the used scene of this required permissions
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  usedScene: UsedScene;
}

/**
 * The scene which is used
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * The scene which is used
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * The scene which is used
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
export interface UsedScene {
  /**
   * Indicates the abilities that need the permission
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the abilities that need the permission
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the abilities that need the permission
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  abilities: Array<string>;

  /**
   * Indicates the time when the permission is used
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the time when the permission is used
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the time when the permission is used
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  when: string;
}

/**
 * Indicates SignatureInfo
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates SignatureInfo
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * Indicates SignatureInfo
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
export interface SignatureInfo {
  /**
   * Indicates the ID of the application to which this bundle belongs
   * The application ID uniquely identifies an application. It is determined by the bundle name and signature
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the ID of the application to which this bundle belongs
   * The application ID uniquely identifies an application. It is determined by the bundle name and signature
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the ID of the application to which this bundle belongs
   * The application ID uniquely identifies an application. It is determined by the bundle name and signature
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly appId: string;

  /**
   * Indicates the fingerprint of the certificate
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the fingerprint of the certificate
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the fingerprint of the certificate
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly fingerprint: string;

  /**
   * Globally unique identifier of an application, which is allocated by the cloud.
   * AppIdentifier does not change along the application lifecycle, including version updates, certificate changes,
   * public and private key changes, and application transfer.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly appIdentifier: string;

  /**
   * Indicates the certificate
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly certificate?: string;
}

/**
 * AppCloneIdentity contains BundleName and appIndex
 *
 * @typedef AppCloneIdentity
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since arkts {'1.1':'14', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface AppCloneIdentity {
  /**
   * Indicates the application bundle name to be queried.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly bundleName: string;
  /**
   * Indicates the index of clone app.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly appIndex: int;
}

/**
 * Obtains dynamic icon information about a bundle
 *
 * @typedef DynamicIconInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 20
 * @arkts 1.1&1.2
 */
export interface DynamicIconInfo {
  /**
   * Indicates the name of the bundle.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly bundleName: string;

  /**
   * Indicates the name of the dynamic icon.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly moduleName: string;

  /**
   * Indicates the user id of the bundle.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly userId: int;

  /**
   * Indicates the index of the bundle.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly appIndex: int;
}

/**
  * The bundle options of bundle manager
  * 
  * @typedef BundleOptions
  * @syscap SystemCapability.BundleManager.BundleFramework.Core
  * @systemapi
  * @since 20
  * @arkts 1.1&1.2
  */
export interface BundleOptions {
    /**
   * Indicates the user id.
   *
   * @type { ?int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  userId?: int;

  /**
   * Indicates the app index.
   *
   * @type { ?int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  appIndex?: int;
}
