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
 * 应用包信息。
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * 应用包信息。
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * 应用包信息。
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface BundleInfo {
  /**
   * 应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 应用包的供应商，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的vendor字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的供应商，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的vendor字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的供应商，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的vendor字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly vendor: string;

  /**
   * 应用包的版本号，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionCode字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的版本号，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionCode字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的版本号，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionCode字段。
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * 应用包的版本文本描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的版本文本描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的版本文本描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionName字段。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * 分布式场景下的应用包兼容的最低版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的minCompatibleVersionCode字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 分布式场景下的应用包兼容的最低版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的minCompatibleVersionCode字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 分布式场景下的应用包兼容的最低版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的minCompatibleVersionCode字段。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly minCompatibleVersionCode: int;

  /**
   * 应用运行目标版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的targetAPIVersion字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用运行目标版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的targetAPIVersion字段。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用运行目标版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的targetAPIVersion字段。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly targetVersion: int;

  /**
   * 应用程序的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION获取。
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用程序的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION获取。
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用程序的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION获取。
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly appInfo: ApplicationInfo;

  /**
   * 应用程序的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION获取。
   *
   * @type { ApplicationInfo | null }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly appInfo: ApplicationInfo | null;


  /**
   * 模块的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE获取。
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 模块的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE获取。
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 模块的配置信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE获取。
   *
   * @type { Array<HapModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly hapModulesInfo: Array<HapModuleInfo>;

  /**
   * 应用运行时需向系统申请的权限集合的详细信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用运行时需向系统申请的权限集合的详细信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用运行时需向系统申请的权限集合的详细信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<ReqPermissionDetail> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * 申请权限的授予状态，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 申请权限的授予状态，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 申请权限的授予状态，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION获取。reqPermissionDetails数组和permissionGrantStates数组的索引顺序一一对
   * 应，即reqPermissionDetails[2]的授权状态为permissionGrantStates[2]。
   *
   * @type { Array<bundleManager.PermissionGrantState> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly permissionGrantStates: Array<bundleManager.PermissionGrantState>;

  /**
   * 应用包的签名信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_SIGNATURE_INFO获取。
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的签名信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_SIGNATURE_INFO获取。
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的签名信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_SIGNATURE_INFO获取。
   *
   * @type { SignatureInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly signatureInfo: SignatureInfo;

  /**
   * 应用包的签名信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_SIGNATURE_INFO获取。
   *
   * @type { SignatureInfo | null }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly signatureInfo: SignatureInfo | null;

  /**
   * 应用包安装时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
   * 
   * **说明：** 
   * 
   * 设备出厂首次开机时，如果未获取到当前时间，会以Unix时间戳基准（1970-01-01 08:00:00 UTC+8）作为当前系统的起始时间。例如，开机后未获取到时间，等待32s之后安装成功，则应用包安装时间戳为32000。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包安装时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
   * 
   * **说明：** 
   * 
   * 设备出厂首次开机时，如果未获取到当前时间，会以Unix时间戳基准（1970-01-01 08:00:00 UTC+8）作为当前系统的起始时间。例如，开机后未获取到时间，等待32s之后安装成功，则应用包安装时间戳为32000。
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly installTime: long;

  /**
   * 应用包更新时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包更新时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly updateTime: long;

  /**
   * 应用的路由表配置，由hapModulesInfo下的routerMap信息，根据RouterItem中的name字段进行去重后合并得到。通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE和GET_BUNDLE_INFO_WITH_ROUTER_MAP获取。
   *
   * @type { Array<RouterItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * 应用包的分身索引标识，仅在分身应用中生效。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * 应用在当前设备的首次安装时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒，预置应用的首次安装时间戳为1533657660000。
   *
   * @type { ?long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  readonly firstInstallTime?: long;

  /**
   * 应用包的构建版本号，用于标识相同发布版本下的不同构建版本包，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的buildVersion字段。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  readonly buildVersion?: string;
}

/**
 * 应用运行时需向系统申请的权限集合的详细信息。
 * 
 * > **说明：**
 * >
 * > - 如果应用内多包申请的权限名称一样，但是权限申请理由不一致，系统只会返回一个权限申请理由，优先级从高到低顺序为entry类型HAP、feature类型HAP、应用内HSP。
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * 应用运行时需向系统申请的权限集合的详细信息。
 * 
 * > **说明：**
 * >
 * > - 如果应用内多包申请的权限名称一样，但是权限申请理由不一致，系统只会返回一个权限申请理由，优先级从高到低顺序为entry类型HAP、feature类型HAP、应用内HSP。
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * 应用运行时需向系统申请的权限集合的详细信息。
 * 
 * > **说明：**
 * >
 * > - 如果应用内多包申请的权限名称一样，但是权限申请理由不一致，系统只会返回一个权限申请理由，优先级从高到低顺序为entry类型HAP、feature类型HAP、应用内HSP。
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface ReqPermissionDetail {
  /**
   * 需要使用的[权限名称](docroot://security/AccessToken/app-permissions.md)。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 需要使用的[权限名称](docroot://security/AccessToken/app-permissions.md)。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 需要使用的[权限名称](docroot://security/AccessToken/app-permissions.md)。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 申请该权限的module名称。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  /**
   * 申请该权限的module名称。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * 描述申请权限的原因。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 描述申请权限的原因。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 描述申请权限的原因。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  reason: string;

  /**
   * 描述申请权限的原因ID。
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 描述申请权限的原因ID。
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 描述申请权限的原因ID。
   *
   * @type { long }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  reasonId: long;

  /**
   * 权限使用的场景和时机。
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 权限使用的场景和时机。
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 权限使用的场景和时机。
   *
   * @type { UsedScene }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  usedScene: UsedScene;
}

/**
 * 描述权限使用的场景和时机。
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * 描述权限使用的场景和时机。
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * 描述权限使用的场景和时机。
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface UsedScene {
  /**
   * 使用到该权限的Ability集合。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 使用到该权限的Ability集合。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 使用到该权限的Ability集合。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  abilities: Array<string>;

  /**
   * 使用该权限的时机。支持的取值有inuse（使用时）、always（始终）。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 使用该权限的时机。支持的取值有inuse（使用时）、always（始终）。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 使用该权限的时机。支持的取值有inuse（使用时）、always（始终）。
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  when: string;
}

/**
 * 描述应用包的签名信息。
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * 描述应用包的签名信息。
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * 描述应用包的签名信息。
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface SignatureInfo {
  /**
   * 应用的appId，表示应用的唯一标识，详情信息可参考[什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用的appId，表示应用的唯一标识，详情信息可参考[什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用的appId，表示应用的唯一标识，详情信息可参考[什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly appId: string;

  /**
   * 应用包的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * 应用包的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * 应用包的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly fingerprint: string;

  /**
   * 应用的唯一标识。详情信息可参考[什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly appIdentifier: string;

  /**
   * 应用的证书公钥。
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  readonly certificate?: string;
}

/**
 * 描述应用包的身份信息。
 *
 * @typedef AppCloneIdentity
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 14 dynamic
 * @since 23 static
 */
export interface AppCloneIdentity {
  /**
   * 应用的bundleName。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  readonly bundleName: string;
  /**
   * 应用包的分身索引信息。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}

/**
 * 应用的动态图标信息。
 *
 * @typedef DynamicIconInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export interface DynamicIconInfo {
  /**
   * 标识当前动态图标所属的应用包名信息。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 标识当前动态图标所属的应用模块名称信息。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 标识当前动态图标所属的用户信息。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly userId: int;

  /**
   * 标识当前动态图标所属的应用分身索引信息。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}

/**
 * 应用配置的备用图标信息
 *
 * @typedef AlternateIconInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface AlternateIconInfo {
  /**
   * 备用图标的名称
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly iconName: string;

  /**
   * 备用图标的id
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly iconId: long;

  /**
   * 备用图标是否正在使用中。true表示当前正在使用中，false表示当前未使用。
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly enabled: boolean;
}

/**
 * 应用包选项，用于设置或查询应用相关信息。
 *
 * @typedef BundleOptions
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export interface BundleOptions {
  /**
   * 用户ID。默认为当前调用方所在的用户。
   *
   * @type { ?int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * 应用分身ID。默认为0，表示主应用。
   *
   * @type { ?int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  appIndex?: int;

  /**
   * 应用包名。默认值为空字符串。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  bundleName?: string;

  /**
   * Ability所属的模块名称。默认值为空字符串。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  moduleName?: string;

  /**
   * Ability名称。默认值为空字符串。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  abilityName?: string;
}