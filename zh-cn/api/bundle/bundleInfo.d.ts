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
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃，建议使用[UsedScene]{@link bundleInfo:UsedScene}替代。
 * 
 * 描述权限使用的场景和时机。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo:UsedScene
 */
export interface UsedScene {
  /**
   * 使用到该权限的Ability集合。
   *
   * @default Indicates the abilities that need the permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.UsedScene#abilities
   */
  abilities: Array<string>;

  /**
   * 使用该权限的时机。
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
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃，建议使用[ReqPermissionDetail]{@link bundleInfo:ReqPermissionDetail}替代。
 * 
 * 应用运行时需向系统申请的权限集合的详细信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo
 */
export interface ReqPermissionDetail {
  /**
   * 需要使用的权限名称。
   *
   * @default Indicates the name of this required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ReqPermissionDetail#name
   */
  name: string;

  /**
   * 描述申请权限的原因。
   *
   * @default Indicates the reason of this required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ReqPermissionDetail#reason
   */
  reason: string;

  /**
   * 权限使用的场景和时机。
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
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager-BundleInfo]{@link bundleInfo:BundleInfo}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead bundleInfo:BundleInfo
 */
export interface BundleInfo {
  /**
   * 应用包的名称。
   *
   * @default Indicates the name of this bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#name
   */
  readonly name: string;

  /**
   * 应用包类型。
   *
   * @default Indicates the name of this original bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#bundleType
   */
  readonly type: string;

  /**
   * 应用包里应用程序的id。
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
   * 应用包里应用程序的uid。
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
   * HAP安装时间，单位：毫秒。
   *
   * @default Indicates the hap install time
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#installTime
   */
  readonly installTime: number;

  /**
   * HAP更新时间，单位：毫秒。
   *
   * @default Indicates the hap update time
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#updateTime
   */
  readonly updateTime: number;

  /**
   * 应用程序的配置信息。
   *
   * @default Obtains configuration information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#appInfo
   */
  readonly appInfo: ApplicationInfo;

  /**
   * Ability的配置信息
   * 
   * 通过调用
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * 接口时，传入GET_BUNDLE_WITH_ABILITIES获取。
   *
   * @default Obtains configuration information about an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo
   */
  readonly abilityInfos: Array<AbilityInfo>;

  /**
   * 应用运行时需向系统申请的权限集合
   * 
   * 通过调用
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * 接口时，传入GET_BUNDLE_WITH_REQUESTED_PERMISSION获取。
   *
   * @default Indicates the required permissions name defined in file config.json
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions
   */
  readonly reqPermissions: Array<string>;

  /**
   * 应用运行时需向系统申请的权限集合的详细信息
   * 
   * 通过调用
   * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
   * 接口时，传入GET_BUNDLE_WITH_REQUESTED_PERMISSION获取。
   *
   * @default Indicates the required permissions details defined in file config.json
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#reqPermissionDetails
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * 应用包的供应商。
   *
   * @default Describes the bundle vendor
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#vendor
   */
  readonly vendor: string;

  /**
   * 应用包的版本号。
   *
   * @default Indicates the version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#versionCode
   */
  readonly versionCode: number;

  /**
   * 应用包的版本文本描述信息。
   *
   * @default Indicates the text description of the bundle version
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#versionName
   */
  readonly versionName: string;

  /**
   * 运行应用包所需要最低的SDK版本号。
   *
   * @default Indicates the compatible version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly compatibleVersion: number;

  /**
   * 运行应用包所需要最高SDK版本号。
   *
   * @default Indicates the target version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#targetVersion
   */
  readonly targetVersion: number;

  /**
   * 是否压缩应用包的本地库，取值为true表示压缩应用包的本地库，取值为false表示不压缩应用包的本地库。
   *
   * @default Indicates is compress native libs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly isCompressNativeLibs: boolean;

  /**
   * 模块的配置信息。
   *
   * @default Obtains configuration information about a module
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo
   */
  readonly hapModuleInfos: Array<HapModuleInfo>;

  /**
   * Entry的模块名称。
   *
   * @default Indicates entry module name
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryModuleName: string;

  /**
   * 应用包的cpuAbi信息。
   *
   * @default Indicates the cpuAbi information of this bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly cpuAbi: string;

  /**
   * 是否通过静默安装。
   *
   * @default Indicates is silent installation
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly isSilentInstallation: string;

  /**
   * 分布式场景下的应用包兼容的最低版本。
   *
   * @default Indicates the earliest historical version compatible with the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#minCompatibleVersionCode
   */
  readonly minCompatibleVersionCode: number;

  /**
   * Entry是否支持免安装，取值为true表示支持免安装，取值为false表示不支持免安装。
   *
   * @default Indicates whether free installation of the entry is supported
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryInstallationFree: boolean;

  /**
   * 申请权限的授予状态。0表示申请成功，-1表示申请失败。
   *
   * @default Indicates the grant status of required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#permissionGrantStates
   */
  readonly reqPermissionStates: Array<number>;
}