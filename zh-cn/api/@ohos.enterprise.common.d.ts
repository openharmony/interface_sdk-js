/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit MDMKit
 */

import * as _EnterpriseAdminExtensionContext from './application/EnterpriseAdminExtensionContext';

/**
 * 本模块提供MDM Kit中常用公共能力的纯类型定义，包含枚举类型和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 22
 */
declare namespace common {
  /**
   * 应用的实例数据。
   *
   * 该接口目前在[addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps}、
   * [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps}、
   * [addFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.addFreezeExemptedApps}、
   * [removeFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeFreezeExemptedApps}接口
   * 中作为入参使用。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export interface ApplicationInstance {
    /**
     * 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}，可以通过接口
     * [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
     * 获取bundleInfo.signatureInfo.appIdentifier。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    appIdentifier: string;

    /**
     * 用户ID。取值范围：大于等于0的整数。
     * accountId可以通过[getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}接
     * 口获取。
     * 取值应为≥0的整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    accountId: number;

    /**
     * 应用分身索引。取值范围：大于等于0的整数。
     * appIndex可以通过[getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity}接口获取。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    appIndex: number;
  }

  /**
   * 企业设备管控策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export enum ManagedPolicy {
    /**
     * 默认，无管控策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    DEFAULT = 0,

    /**
     * 禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    DISALLOW = 1,

    /**
     * 强制开启。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    FORCE_OPEN = 2
  }

  /**
   * 应用安装结果码。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export enum Result {
    /**
     * 应用安装成功。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    SUCCESS = 0,

    /**
     * 应用安装失败。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    FAIL = -1
  }

  /**
   * 应用安装结果。
   *
   * 该对象目前在
   * [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onMarketAppInstallResult}
   * 作为回调入参使用。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export interface InstallationResult {
    /**
     * 应用安装结果码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    result: Result;

    /**
     * 应用安装结果消息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    message: string;
  }

  /**
   * 开机向导完成场景。端侧系统在首次切换子用户完成（仅限PC）、OTA升级完成、首次开机完成开机向导时会通过
   * [onStartupGuideCompleted]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onStartupGuideCompleted}
   * 回调接口通知设备管理应用。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  export enum StartupScene {
    /**
     * 子用户被首次切换并完成其开机向导场景（仅限PC）。后续再次切换该子用户不会触发回调。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    USER_SETUP = 0,

    /**
     * OTA升级完成场景。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    OTA = 1,

    /**
     * 首次开机完成开机向导场景。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DEVICE_PROVISION = 2
  }

  /**
   * 策略变更事件
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface PolicyChangedEvent {
    /**
     * 配置策略的应用包名
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName : string;

    /**
     * 配置策略的方法名称
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    functionName : string;

    /**
     * 配置策略的参数值
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    parameters: string;

    /**
     * 配置策略的时间
     * 单位为： 毫秒，取值应为≥0的整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    time: number;
  }

  /**
   * EnterpriseAdminExtensionContext是
   * [EnterpriseAdminExtensionAbility]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
   * 的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  export type EnterpriseAdminExtensionContext = _EnterpriseAdminExtensionContext.default;
}

export default common;