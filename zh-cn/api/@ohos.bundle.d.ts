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
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ApplicationInfo } from './bundle/applicationInfo';
import { AbilityInfo } from './bundle/abilityInfo';
import { PermissionDef } from './bundle/PermissionDef';
import Want from './@ohos.app.ability.Want';
import image from './@ohos.multimedia.image';
import { BundleInfo } from './bundle/bundleInfo';
import { BundleInstaller } from './bundle/bundleInstaller';


/**
 * 本模块提供应用信息查询能力，支持[包信息]{@link ./bundle/bundleInfo}、[应用信息]{@link ./bundle/applicationInfo:ApplicationInfo}、
 * [Ability组件信息]{@link ./bundle/abilityInfo:AbilityInfo}等信息的查询，以及应用禁用状态的查询、设置等。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[@ohos.bundle.bundleManager]{@link @ohos.bundle.bundleManager:bundleManager}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.bundleManager:bundleManager
 */
declare namespace bundle {
  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用
   * > [bundleManager.BundleFlag]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}替代。
   * 
   * 包信息标志，指示需要获取的包信息的内容。
   * 
   * 当接口与标志不匹配时，该标志会被忽略，例如获取application时使用GET_ABILITY_INFO_WITH_PERMISSION对结果不会产生影响。
   * 
   * 标志可以叠加使用，例如使用GET_APPLICATION_INFO_WITH_PERMISSION + GET_APPLICATION_INFO_WITH_DISABLE可以使结果同时包含应用权限信息和被禁用的应用信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.bundleManager:bundleManager.BundleFlag
   */
  enum BundleFlag {
    /**
     * 获取默认的应用信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_DEFAULT
     */
    GET_BUNDLE_DEFAULT = 0x00000000,
    /**
     * 获取包括Ability信息的包信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_WITH_ABILITY
     */
    GET_BUNDLE_WITH_ABILITIES = 0x00000001,
    /**
     * 获取包括权限的Ability信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_PERMISSION
     */
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000002,
    /**
     * 获取包括Application的ability信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_APPLICATION
     */
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000004,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000008,
    /**
     * 获取包括所需权限的包信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION
     */
    GET_BUNDLE_WITH_REQUESTED_PERMISSION = 0x00000010,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    GET_ALL_APPLICATION_INFO = 0xFFFF0000,
    /**
     * 获取ability的元数据信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_METADATA
     */
    GET_ABILITY_INFO_WITH_METADATA = 0x00000020,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    GET_APPLICATION_INFO_WITH_METADATA = 0x00000040,
    /**
     * 获取仅包括系统应用的ability信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_ONLY_SYSTEM_APP
     */
    GET_ABILITY_INFO_SYSTEMAPP_ONLY = 0x00000080,
    /**
     * 获取包括被禁用的ability信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_DISABLE
     */
    GET_ABILITY_INFO_WITH_DISABLE = 0x00000100,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    GET_APPLICATION_INFO_WITH_DISABLE = 0x00000200
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。
   * 
   * 应用、卡片等的颜色模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  export enum ColorMode {
    /**
     * 自动模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.app.ability.ConfigurationConstant/ConfigurationConstant.ColorMode#COLOR_MODE_NOT_SET
     */
    AUTO_MODE = -1,
    /**
     * 黑色模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.app.ability.ConfigurationConstant/ConfigurationConstant.ColorMode#COLOR_MODE_DARK
     */
    DARK_MODE = 0,
    /**
     * 亮度模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.app.ability.ConfigurationConstant/ConfigurationConstant.ColorMode#COLOR_MODE_LIGHT
     */
    LIGHT_MODE = 1
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用
   * > [bundleManager.PermissionGrantState]{@link @ohos.bundle.bundleManager:bundleManager.PermissionGrantState}替代。
   * 
   * 权限授予状态。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.bundleManager:bundleManager.PermissionGrantState
   */
  export enum GrantStatus {
    /**
     * 拒绝授予权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionGrantState#PERMISSION_DENIED
     */
    PERMISSION_DENIED = -1,
    /**
     * 授予权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionGrantState#PERMISSION_GRANTED
     */
    PERMISSION_GRANTED = 0
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用
   * > [bundleManager.AbilityType]{@link @ohos.bundle.bundleManager:bundleManager.AbilityType}替代。
   * 
   * Ability组件类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.bundleManager:bundleManager.AbilityType
   */
  export enum AbilityType {
    /**
     * 未知Ability类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    UNKNOWN = 0,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityType#PAGE
     */
    PAGE = 1,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityType#SERVICE
     */
    SERVICE = 2,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityType#DATA
     */
    DATA = 3
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。
   * 
   * Ability组件的子类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export enum AbilitySubType {
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    UNSPECIFIED = 0,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    CA = 1
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用
   * > [bundleManager.DisplayOrientation]{@link @ohos.bundle.bundleManager:bundleManager.DisplayOrientation}替代。
   * 
   * 屏幕显示方向。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.bundleManager:bundleManager.DisplayOrientation
   */
  export enum DisplayOrientation {
    /**
     * 屏幕方向--不指定。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.DisplayOrientation#UNSPECIFIED
     */
    UNSPECIFIED = 0,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.DisplayOrientation#LANDSCAPE
     */
    LANDSCAPE = 1,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.DisplayOrientation#PORTRAIT
     */
    PORTRAIT = 2,

    /**
     *
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.DisplayOrientation#FOLLOW_RECENT
     */
    FOLLOW_RECENT = 3
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用
   * > [bundleManager.LaunchType]{@link @ohos.bundle.bundleManager:bundleManager.LaunchType}替代。
   * 
   * Ability组件的启动模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.bundleManager:bundleManager.LaunchType
   */
  export enum LaunchMode {
    /**
     * Ability只有一个实例。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.LaunchType#SINGLETON
     */
    SINGLETON = 0,

    /**
     * Ability有多个实例。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.bundleManager/bundleManager.LaunchType#MULTITON
     */
    STANDARD = 1
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。
   * 
   * 查询选项，包含userId。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export interface BundleOptions {
    /**
     * 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    userId?: number;
  }

  /**
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[包管理子系统通用错误码](docroot://reference/apis-ability-kit/errorcode-bundle.md)
   * > 替代。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export enum InstallErrorCode {
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    SUCCESS = 0,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE = 1,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_ABORTED = 2,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_INVALID = 3,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_CONFLICT = 4,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_STORAGE = 5,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_INCOMPATIBLE = 6,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_UNINSTALL_FAILURE = 7,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_UNINSTALL_FAILURE_BLOCKED = 8,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_UNINSTALL_FAILURE_ABORTED = 9,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_UNINSTALL_FAILURE_CONFLICT = 10,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT = 0x0B,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED = 0x0C,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    STATUS_RECOVER_FAILURE_INVALID = 0x0D,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_ABILITY_NOT_FOUND = 0x40,
    /**
     * 安装冲突 （常见于升级和已有应用基本信息不一致）。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    STATUS_BMS_SERVICE_ERROR = 0x41,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    STATUS_FAILED_NO_SPACE_LEFT = 0x42,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    STATUS_GRANT_REQUEST_PERMISSIONS_FAILED = 0x43,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    STATUS_INSTALL_PERMISSION_DENIED = 0x44,
    /**
     * 缺少卸载权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    STATUS_UNINSTALL_PERMISSION_DENIED = 0x45
  }

  /**
   * 根据给定的Bundle名称获取BundleInfo，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { BundleOptions } options - 包含userid。
   * @param { AsyncCallback<BundleInfo> } callback - 程序启动作为入参的回调函数，返回包信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getBundleInfo(bundleName: string,
    bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 根据给定的Bundle名称获取BundleInfo，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 需要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { AsyncCallback<BundleInfo> } callback - 程序启动作为入参的回调函数，返回包信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 根据给定的Bundle名称获取BundleInfo，使用Promise异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { BundleOptions } options - 包含userid的查询选项。
   * @returns { Promise<BundleInfo> } Promise对象，获取成功时返回包信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>;

  /**
   * 获取用于安装包的接口，使用callback异步回调。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { AsyncCallback<BundleInstaller> } callback - 回调函数，返回安装接口对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void;

  /**
   * 获取用于安装包的接口，使用Promise异步回调，返回安装接口对象。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @returns { Promise<BundleInstaller> } Promise对象，返回安装接口对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getBundleInstaller(): Promise<BundleInstaller>;

  /**
   * 通过Bundle名称和组件名获取Ability组件信息，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } abilityName - Ability名称。
   * @param { AsyncCallback<AbilityInfo> } callback - 程序启动作为入参的回调函数，返回Ability信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAbilityInfo(bundleName: string, abilityName: string, callback: AsyncCallback<AbilityInfo>): void;

  /**
   * 通过Bundle名称和组件名获取Ability组件信息，使用Promise形式异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } abilityName - Ability组件名称。
   * @returns { Promise<AbilityInfo> } Promise形式返回Ability信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAbilityInfo(bundleName: string, abilityName: string): Promise<AbilityInfo>;

  /**
   * 根据给定的Bundle名称获取指定用户下的ApplicationInfo，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @param { AsyncCallback<ApplicationInfo> } callback - 程序启动作为入参的回调函数，返回应用程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getApplicationInfo(bundleName: string,
    bundleFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * 根据给定的Bundle名称获取ApplicationInfo，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { AsyncCallback<ApplicationInfo> } callback - 程序启动作为入参的回调函数，返回应用程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getApplicationInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * 根据给定的Bundle名称获取ApplicationInfo。使用Promise异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围请参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<ApplicationInfo> } Promise形式返回应用程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number): Promise<ApplicationInfo>;

  /**
   * 根据给定的意图获取指定用户下Ability信息，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 指示包含要查询的应用Bundle名称的意图。
   * @param { number } bundleFlags - 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中Ability信息相关flag。
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - 程序启动作为入参的回调函数，返回Ability信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function queryAbilityByWant(want: Want,
    bundleFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * 根据给定的意图获取Ability信息，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 指示包含要查询的应用Bundle名称的意图。
   * @param { number } bundleFlags - 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中Ability信息相关flag。
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - 程序启动作为入参的回调函数，返回Ability信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * 根据给定的意图获取Ability组件信息，使用Promise异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 包含要查询的应用Bundle名称的意图。
   * @param { number } bundleFlags - 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中Ability信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<AbilityInfo>> } Promise形式返回Ability信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function queryAbilityByWant(want: Want, bundleFlags: number, userId?: number): Promise<Array<AbilityInfo>>;

  /**
   * 获取系统中指定用户下所有的BundleInfo，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BundleFlag } bundleFlag - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @param { AsyncCallback<Array<BundleInfo>> } callback - 程序启动作为入参的回调函数，返回指定用户下所有包的BundleInfo。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllBundleInfo(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void;

  /**
   * 获取当前用户所有的BundleInfo，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BundleFlag } bundleFlag - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { AsyncCallback<Array<BundleInfo>> } callback - 程序启动作为入参的回调函数，返回所有可用的BundleInfo。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllBundleInfo(bundleFlag: BundleFlag, callback: AsyncCallback<Array<BundleInfo>>): void;

  /**
   * 获取指定用户所有的BundleInfo，使用Promise形式异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BundleFlag } bundleFlag - 用于指定返回的包信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<BundleInfo>> } Promise形式返回所有可用的BundleInfo
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllBundleInfo(bundleFlag: BundleFlag, userId?: number): Promise<Array<BundleInfo>>;

  /**
   * 获取指定用户下所有已安装的应用信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - 程序启动作为入参的回调函数，返回应用信息列表。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllApplicationInfo(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * 获取调用方所在用户下已安装的应用信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - 程序启动作为入参的回调函数，返回应用信息列表。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * 获取指定用户下所有已安装的应用信息，使用promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } bundleFlags - 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中应用信息相关flag。
   * @param { number } userId - 用户ID。默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<ApplicationInfo>> } Promise对象，获取成功时返回应用信息列表。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>;

  /**
   *
   *
   * @param { number } uid - 
   * @param { AsyncCallback<string> } callback
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager#getBundleNameByUid
   */
  function getNameForUid(uid: number, callback: AsyncCallback<string>): void;

  /**
   * 通过uid获取对应的Bundle名称，使用Promise异步回调。
   *
   * @param { number } uid - 要查询的uid。
   * @returns { Promise<string> } Returns the bundle name.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getNameForUid(uid: number): Promise<string>;

  /**
   * 获取有关HAP中包含的应用程序包的信息，使用callback异步回调。
   *
   * @param { string } hapFilePath - HAP存放路径，支持当前应用程序的绝对路径和数据目录沙箱路径。
   * @param { number } bundleFlags - 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关
   *     flag。
   * @param { AsyncCallback<BundleInfo> } callback - 程序启动作为入参的回调函数，返回HAP中包含的应用程序包的信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 获取有关HAP中包含的应用程序包的信息，使用Promise异步回调。
   *
   * @param { string } hapFilePath - HAP存放路径。支持当前应用程序的绝对路径和数据目录沙箱路径。
   * @param { number } bundleFlags - 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明]{@link bundle.BundleFlag}中包信息相关
   *     flag。
   * @returns { Promise<BundleInfo> } - Returns the BundleInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>;

  /**
   * 查询拉起指定应用的want对象，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { AsyncCallback<Want> } callback - 程序启动作为入参的回调函数，返回拉起指定应用的want对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;

  /**
   * 查询拉起指定应用的want对象，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @returns { Promise<Want> } Returns the Want for starting the application's main ability if any.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getLaunchWantForBundle(bundleName: string): Promise<Want>;

  /**
   * 清除指定应用程序的缓存数据，使用callback异步回调。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - 指示要清除其缓存数据的应用Bundle名称。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 清除指定应用程序的缓存数据，使用Promise异步回调。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - 指示要清除其缓存数据的应用Bundle名称。
   * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function cleanBundleCacheFiles(bundleName: string): Promise<void>;

  /**
   * 设置是否启用指定的应用程序，使用callback异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 指示需要启用或禁用的应用Bundle名称。
   * @param { boolean } isEnable - 指定是否启用应用程序。true表示启用，false表示禁用。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置是否启用指定的应用程序，使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 指示需要启用或禁用的应用Bundle名称。
   * @param { boolean } isEnable - 指定是否启用应用程序。true表示启用，false禁用。
   * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>;

  /**
   * 设置是否启用指定的Ability组件，使用callback异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Ability信息，指示需要设置启用状态的Ability。
   * @param { boolean } isEnable - 指定是否启用应用程序。true表示启用，false禁用。
   * @param { AsyncCallback<void> } callback - 为返回操作结果而调用的回调。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置是否启用指定的Ability组件，使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Ability信息，指示需要设置启用状态的Ability。
   * @param { boolean } isEnable - 指定是否启用应用程序。true表示启用，false禁用。
   * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean): Promise<void>;

  /**
   * 按权限名称获取权限的详细信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - 需要查询的权限的名称。
   * @param { AsyncCallback<PermissionDef> } callback - 程序启动作为入参的回调函数，返回定义的权限信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void;

  /**
   * 按权限名称获取权限的详细信息，使用promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - 需要查询的权限的名称。
   * @returns { Promise<PermissionDef> } Promise对象，获取成功时返回权限详细信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getPermissionDef(permissionName: string): Promise<PermissionDef>;

  /**
   * 通过Bundle名称和Ability组件名获取应用名称，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } abilityName - Ability名称。
   * @param { AsyncCallback<string> } callback - 程序启动作为入参的回调函数，返回应用名称信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function getAbilityLabel(bundleName: string, abilityName: string, callback: AsyncCallback<string>): void;

  /**
   * 通过Bundle名称和ability名称获取应用名称，使用Promise异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } abilityName - Ability名称。
   * @returns { Promise<string> } Promise形式返回应用名称信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function getAbilityLabel(bundleName: string, abilityName: string): Promise<string>;

  /**
   * 通过bundleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用callback异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } abilityName - 要查询的Ability组件名。
   * @param { AsyncCallback<image.PixelMap> } callback - 程序启动作为入参的回调函数，返回指定
   *     [PixelMap]{@link @ohos.multimedia.image:image}。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * 通过bundleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用Promise异步回调。
   * 
   * 获取调用方自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } abilityName - 要查询的Ability组件名。
   * @returns { Promise<image.PixelMap> } Returns the PixelMap object representing the icon of the specified ability.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>;

  /**
   * 根据给定的AbilityInfo查询ability是否已经启用，使用callback异步回调。
   *
   * @param { AbilityInfo } info - Ability的配置信息。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回boolean代表是否启用。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void;

  /**
   * 根据给定的AbilityInfo查询ability是否已经启用，使用Promise异步回调。
   *
   * @param { AbilityInfo } info - Ability的配置信息。
   * @returns { Promise<boolean> } Promise形式返回boolean代表是否启用。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function isAbilityEnabled(info: AbilityInfo): Promise<boolean>;

  /**
   * 根据给定的bundleName查询指定应用程序是否已经启用，使用callback异步回调。
   *
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回boolean代表是否启用。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 根据给定的bundleName查询指定应用程序是否已经启用，使用Promise异步回调。
   *
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @returns { Promise<boolean> } Promise形式返回boolean代表是否启用。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function isApplicationEnabled(bundleName: string): Promise<boolean>;
}

export default bundle;