/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from '@ohos.base';
import type Want from '@ohos.app.ability.Want';

/**
 * 本模块提供设置通用限制类策略能力。可以全局禁用和解除禁用蓝牙、HDC、USB、Wi-Fi等特性。
 *
 * > **说明**：
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace restrictions {
  /**
   * 设备特性枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum FeatureForDevice {
    /**
     * Wi-Fi P2P（点对点连接），允许设备在没有接入点的情况下直接相互连接。禁用后，设备无法通过Wi-Fi P2P进行点对点连接，影响文件传输、游戏联机、屏幕共享等需要直接Wi-Fi连接的应用功能。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_P2P = 0,

    /**
     * 本地输入（包含键盘、鼠标、触控板、触摸屏等）被禁用后，无法通过本地输入进行操作。重启设备可解除禁用。在息屏状态下禁用会导致屏幕无法唤醒，若禁用后屏幕自动息屏，同样会导致无法唤醒屏幕。
     *
     * 26.0.0
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    LOCAL_INPUT = 2,

    /**
     * 超级用户执行
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUDO = 4,

    /**
     * 流量重定向
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TRAFFIC_REDIRECTION = 5,

    /**
     * 创建文件转储。禁用后，无法通过任务管理器创建文件转储。
     *
     * 26.0.0
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CORE_DUMP = 6,

    /**
     * RS232串口
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RS232 = 7,

    /**
     * 安全擦除
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_ERASURE = 8,

    /**
     * 安全擦除
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MODIFY_DATE_TIME = 10
  }

  /**
   * 可为指定用户设置禁用/启用的特性的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum FeatureForAccount {
    /**
     * 系统多窗口。当前仅支持手机、平板设备使用，禁用后无法使用系统多窗口功能（分屏、一键分屏、智慧多窗、悬浮窗口）。若系统多窗口功能已开启，本次使用不受影响，但关闭后将无法再次使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MULTI_WINDOW = 0,

    /**
     * [分布式管理服务](docroot://distributedservice/distributedservice-kit-intro.md#运作机制)。禁用后无法使用设备分布式管理服务中的发现、认证、查询、监听等功能。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISTRIBUTED_TRANSMISSION = 1,

    /**
     * 中转站。当前仅支持手机、平板设备使用，禁用后无法使用中转站功能。若中转站已开启，本次使用不受影响，但关闭后将无法再次使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUPER_HUB = 2
  }

  /**
   * 使设备禁用或启用打印能力。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用打印能力，false表示允许使用打印能力。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setPrinterDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 使设备禁用或启用打印能力。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用打印能力，false表示允许使用打印能力。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁止或允许使用打印能力失败时抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setPrinterDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * 查询设备打印能力是否被禁用。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，callback方式返回设备打印能力是否被禁用，true表示设备打印能力被禁用，false表示设备打印能力未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isPrinterDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询设备打印能力是否被禁用。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象。Promise方式返回设备打印能力是否被禁用，true表示设备打印能力被禁用，false表示设备打印能力未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isPrinterDisabled(admin: Want): Promise<boolean>;

  /**
   * 使设备禁用或启用[HDC](docroot://../device-dev/subsystems/subsys-toolchain-hdc-guide.md)。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用HDC，false表示允许使用HDC。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setHdcDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 使设备禁用或启用HDC。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用HDC，false表示允许使用HDC。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁止或允许使用HDC失败时，抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setHdcDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * 查询HDC是否被禁用。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，callback方式返回HDC是否被禁用，true表示HDC被禁用，false表示HDC未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isHdcDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询HDC是否被禁用。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象。Promise方式返回HDC是否被禁用，true表示HDC被禁用，false表示HDC未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isHdcDisabled(admin: Want): Promise<boolean>;

  /**
   * 使设备禁用或启用麦克风。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disable - true表示禁止使用麦克风，false表示允许使用麦克风。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function disableMicrophone(admin: Want, disable: boolean): void;

  /**
   * 查询麦克风是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } boolean方式返回麦克风是否被禁用，true表示麦克风被禁用，false表示麦克风未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isMicrophoneDisabled(admin: Want): boolean;

  /**
   * 禁用或启用指纹认证。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止指纹认证，false表示允许指纹认证。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void;

  /**
   * 查询指纹认证是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回指纹认证是否被禁用，true表示指纹认证被禁用，false表示指纹认证未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isFingerprintAuthDisabled(admin: Want): boolean;

  /**
   * 设置禁用/启用某特性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - 支持设置的特性清单参考表1。<br/> **说明：** 从API version 15开始，应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口设置以下特性：bluetooth、hdc、microphone、usb、wifi、tethering、camera<!--RP
   *     3--><!--RP3End-->，从API版本26.0.0开始，新增支持使用此接口设置mtpServer特性。
   * @param { boolean } disallow - true表示禁止使用，false表示允许使用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   */
  function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

  /**
   * 查询某特性是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 19]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 12 - 19]
   * @param { string } feature - 支持查询的特性清单参考下表2。 <br/> **说明：** 从API version 15开始，应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口获取以下特性状态：bluetooth、hdc、microphone、usb、wifi、tethering、camera<!--
   *     RP4--><!--RP4End-->，从API版本26.0.0开始，新增支持使用此接口获取mtpServer特性状态。
   * @returns { boolean } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 20]
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   */
  function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

  /**
   * 设置禁用/启用指定用户的某特性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- fingerprint：设备指纹认证能力，当前仅支持PC/2in1设备使用。使用此参数时有以下规则：<br/>1. 通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口禁用了设备指纹认证能力，再使用本接口传入此参数，会报策略冲突。<br/>2. 通过本接口设置禁用/启用指定用户的设备指纹认证能力后，再通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口禁用设备指纹认证能力时，后者会覆盖前者的策略。此后再通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口启用设备指纹认证能力，则所有用户都允许使用设备指纹认证能力。<br/>- print<sup>20+</sup>：设备打印能力，在API version 23之前仅支持PC/2in1设备使用，从API version 2
   *     3开始支持PC/2in1、Phone、Tablet设备。如果使用本接口禁用了指定用户的设备打印能力，再通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口启用设备打印能力，该用户下的设备打印能力仍然被禁用。<br/>- mtpClient<sup>20+</sup>：MTP客户端能力（仅包含写入），当前仅支持PC/2in1设备使用。MTP（
   *     MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文件。当已经通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口禁用了设备MTP客户端能力时，再通过本接口禁用某用户MTP客户端写入能力，会报策略冲突。<br/>- usbStorageDeviceWrite<sup>20+</sup>：USB存储设备写入能力，当前仅支持PC/2in
   *     1企业设备使用。<!--RP5--><!--RP5End--><br/>  以下三种情况再通过本接口禁用某用户USB存储设备写入能力，会报策略冲突。<br/>  1）通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口设置了设备USB能力禁用。<br/>  2）通过
   *     [setUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.setUsbStorageDeviceAccessPolicy}
   *     接口设置了USB存储设备访问策略为只读/禁用。<br/>  3）通过
   *     [addDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addDisallowedUsbDevices}接口添加了存储类型的USB设备禁
   *     用。 <br/>- diskRecoveryKey<sup>20+</sup>：恢复
   *     [密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。<br/>- sudo<sup>20+
   *     </sup>：superuser do，表示以超级用户执行，当前仅支持PC/2in1设备使用。禁用后企业空间或个人空间不能以超级用户执行。<br/>- distributedTransmissionOutgoing<sup
   *     >20+</sup>：设备间单向传输数据的能力（仅包含向其他设备传输数据）。<br/>- openFileBoost<sup>23+</sup>：<!--RP6-->文件打开加速能力<!--RP6End-->，为应用提供文
   *     件打开加速状态感知能力。应用可以通过接入对应API，感知文件的加速状态，进而应用可以实现对已加速文件给出独特的UI（user interface）标识等功能，优化用户文件打开体验，当前仅支持PC/2in1设备使用。
   * @param { boolean } disallow - true表示禁用，false表示启用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number): void;

  /**
   * 获取指定用户的某特性状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 14 - 19]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 14 - 19]
   * @param { string } feature - feature名称。<br/>- fingerprint：设备指纹认证能力，当前仅支持PC/2in1设备使用。使用此参数时有以下规则：当已经通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   *     接口设置禁用/启用指定用户的设备指纹认证能力后，再通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口禁用设备指纹认证能力时，后者会覆盖前者的策略。即此时调用本接口结果为false。<br/>- mtpClient<sup>20+</sup>：MTP客户端能力（仅包含写入），当前仅支持PC/2in1设备使用。MTP（
   *     MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文件。<br/>- usbStorageDeviceWrite<sup>20+</sup>：USB存储设备写入能力，当前仅支
   *     持PC/2in1企业设备使用。<br/>- diskRecoveryKey<sup>20+</sup>：恢复
   *     [密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。<br/>- sudo<sup>20+
   *     </sup>：superuser do，表示以超级用户执行，当前仅支持PC/2in1设备使用。禁用后企业空间或个人空间不能以超级用户执行。<br/>- distributedTransmissionOutgoing<sup
   *     >20+</sup>：设备间单向传输数据的能力（仅包含向其他设备传输数据）。<br/>- print<sup>20+</sup>：设备打印能力，在API version 23之前仅支持PC/2in1设备使用，从API
   *     version 23开始支持PC/2in1、Phone、Tablet设备。如果使用
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接
   *     口禁用了设备打印能力，再通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   *     接口启用某用户下的设备打印能力，通过本接口查询结果是该用户已启用打印能力，但实际打印能力已被禁用。<br/>- openFileBoost<sup>23+</sup>：<!--RP6-->文件打开加速能力<!--RP6
   *     End-->，为应用提供文件打开加速状态感知能力。应用可以通过接入对应API，感知文件的加速状态，进而应用可以实现对已加速文件给出独特的UI（user interface）标识等功能，优化用户文件打开体验，当前仅支持PC/
   *     2in1设备使用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @returns { boolean } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 20]
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: string, accountId: number): boolean;

  /**
   * 为指定用户添加禁止使用某特性的应用名单。指定用户下，添加到名单中的应用不允许使用指定的特性能力。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { Array<string> } list - 应用包名列表。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * 为指定用户移除禁止使用某特性的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { Array<string> } list - 包名等内容的名单集合。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * 获取指定用户禁止使用某特性的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @returns { Array<string> } 用户已添加的禁用某特征的应用名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDisallowedListForAccount(admin: Want, feature: string, accountId: number): Array<string>;

  /**
   * 设置用户行为的限制规则。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 行为名称。<br/>- setApn：APN设置，当前仅支持手机、平板使用。<br/>- powerLongPress：长按电源键打开电源菜单，当前仅支持手机、平板
   *     使用。<br/>- setEthernetIp：修改以太网IP地址，当前仅支持PC/2in1设备使用。<br/>- setDeviceName：修改设备名称，当前仅支持PC/2in1设备、手机、平板使用。禁用后，PC/2
   *     in1设备的设置中以下设备名称无法修改，包括关于本机、蓝牙、多设备协同->星闪。手机、平板设备设置中的关于本机、蓝牙、个人热点的设备名称无法修改。<br/>- setBiometricsAndScreenLock：修改锁屏
   *     密码，当前仅支持PC/2in1设备、手机、平板使用。
   * @param { boolean } restricted - 是否禁用行为。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   */
  function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void;

  /**
   * 获取设置项的禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 指定设置项。<br/>- setEthernetIp：修改以太网IP地址，当前仅支持PC/2in1设备使用。<br/>- setDeviceName：修改设备名称，
   *     当前仅支持PC/2in1设备、手机、平板使用。PC/2in1设备设置中关于本机、蓝牙、多设备协同->星闪中的设备名称。手机、平板设备设置中关于本机、蓝牙、个人热点的设备名称。<br/>-
   *     setBiometricsAndScreenLock：修改锁屏密码，当前仅支持PC/2in1设备、手机、平板使用。
   * @returns { boolean } 返回指定设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   */
  function getUserRestricted(admin: Want, settingsItem: string): boolean;

  /**
   * 设置指定用户行为的限制规则。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 行为名称。<br/>- modifyWallpaper：修改壁纸，包含锁屏壁纸和桌面壁纸。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值应为≥0的整数。
   * @param { boolean } restricted - 是否禁用行为。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void;

  /**
   * 获取指定用户设置项的禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 指定设置项。<br/>- modifyWallpaper：修改壁纸，包含锁屏壁纸和桌面壁纸。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值应为≥0的整数。
   * @returns { boolean } 返回指定设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   */
  function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: int): boolean;

  /**
   * 设置禁用/启用指定设备特性，禁用后相关设备特性无法被使用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForDevice } feature - 指定要禁用或允许的设备特性。<br/> **说明：** 应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口设置以下特性：
   *     [FeatureForDevice.WIFI_P2P]{@link restrictions.FeatureForDevice}。
   * @param { boolean } disallow - true表示禁止使用，false表示允许使用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean): void;

  /**
   * 查询指定设备特性是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForDevice } feature - 指定要查询的设备特性。
   * @returns { boolean } 返回true表示feature对应的设备特性被禁用，false表示feature对应的设备特性未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice): boolean;

  /**
   * 设置禁用/启用指定用户的某特性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForAccount } feature - feature名称。
   *     - - 要禁用或允许的用户特性。<br>当feature值为SUPER_HUB时，如果已经通过
   *     [addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps}接口将中转站添加到当
   *     前用户下不可关停的应用列表中，再调用本接口禁用中转站，会发生策略冲突，抛出9200010错误码。可以通过
   *     [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps}接口将中
   *     转站从当前用户下不可关停的应用列表中移除来解决冲突。
   * @param { boolean } disallow - true表示禁用，false表示启用。
   * @param { number } accountId - 用户ID
   *     <br>取值应为≥0的整数。
   *     - 用户ID，取值范围：大于等于0。<br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取。<br>当feature值为SUPER_HUB时，accountId仅支持传入当前用户的用户ID，不支持跨用户设置。否则会抛出9200012错误码。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number): void;

  /**
   * 获取指定用户的某特性状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForAccount } feature - 指定要查询的用户特性。
   * @param { number } accountId - 账号ID
   *     <br>取值应为≥0的整数。
   *     - 用户ID，取值范围：大于等于0。<br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取。
   * @returns { boolean } The value **true** means the feature is disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: FeatureForAccount, accountId: number): boolean;
}

export default restrictions;