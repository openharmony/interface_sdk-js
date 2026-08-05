/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @file 设备控制管理
 * @kit MDMKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供设备控制能力，用于企业设备管理场景。管理员可以通过本模块远程控制设备，包括设备重启、关机、锁屏、恢复出厂设置等操作，帮助企业实现设备统一管理和安全管控。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 10 - 11]
 * @publicapi [since 12]
 * @since 10
 */
declare namespace deviceControl {
  /**
   * 设备操作。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum Operation {
    /**
     * 磁盘擦除。接口调用后，设备将立即执行磁盘擦除操作。磁盘擦除完成后，整机设备数据将全部被擦除且无法恢复。企业需要做好应用的安全设计，防止应用被攻击导致企业数据丢失。仅支持PC/2in1设备。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_ERASURE = 0,

    /**
     * 设备恢复出厂设置。接口调用后，设备将立即恢复出厂设置。恢复完成后，整机设备数据将全部被擦除且无法恢复。企业需要做好应用的安全设计，防止应用被攻击导致企业数据丢失。
   	 * 已经通过restrictions.setDisallowedPolicy接口禁用了恢复出厂，需要先解除禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    RESET_FACTORY = 1,

    /**
     * 设备重启。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    REBOOT = 2,

    /**
     * 设备关机。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SHUT_DOWN = 3,

    /**
     * 设备锁屏。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    LOCK_SCREEN = 4,

    /**
     * 设备锁定。该能力使用后设备屏幕无法使用，按键无响应，仅支持锁屏文案定制，不支持在锁屏界面定制交互功能。在开发过程中，下发设备锁定策略前一定要预留逃生通道，并且确保逃生通道正常。
   	 * 建议开发时保留hdc能力与远程通信能力，通过hdc命令或者远程push能力能触发设备解锁定功能。<br>如果需要实现在屏幕锁定的情况下支持自定义行为的能力，
   	 * 使用[applicationManager.enterKioskMode](@link @ohos.app.ability.kioskManager:kioskManager.enterKioskMode(context: UIAbilityContext))接口进入Kiosk模式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    LOCK_DEVICE = 5,

    /**
     * 设备解锁定。接口调用后，设备将被解锁，用户可正常操作设备。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    UNLOCK_DEVICE = 6
  }

  /**
   * 使设备恢复出厂设置。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESET_DEVICE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceControl.operateDevice(admin: Want, operation: Operation, addition?: string)
   */
  function resetFactory(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * 使设备恢复出厂设置。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESET_DEVICE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当恢复出厂设置失败时抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceControl.operateDevice(admin: Want, operation: Operation, addition?: string)
   */
  function resetFactory(admin: Want): Promise<void>;

  /**
   * 使设备关机。
   *
   * @permission ohos.permission.ENTERPRISE_REBOOT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * @deprecated since 26.0.0
   * @useinstead deviceControl.operateDevice(admin: Want, operation: Operation, addition?: string)
   */
  function shutdown(admin: Want): void;

  /**
   * 使设备重启。
   *
   * @permission ohos.permission.ENTERPRISE_REBOOT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * @deprecated since 26.0.0
   * @useinstead deviceControl.operateDevice(admin: Want, operation: Operation, addition?: string)
   */
  function reboot(admin: Want): void;

  /**
   * 使设备屏幕锁定。设置之后设备立即锁屏。
   *
   * @permission ohos.permission.ENTERPRISE_LOCK_DEVICE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * @deprecated since 26.0.0
   * @useinstead deviceControl.operateDevice(admin: Want, operation: Operation, addition?: string)
   */
  function lockScreen(admin: Want): void;

  /**
   * 允许管理员对设备执行恢复出厂设置、重启、关机、锁屏等操作，例如在企业设备管理场景下，管理员可远程控制员工设备执行恢复出厂设置、重启、关机或锁屏等操作。
   *
   * @permission ohos.permission.ENTERPRISE_OPERATE_DEVICE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } operate - 要执行的操作。仅支持以下操作类型：<br/>- resetFactory：设备恢复出厂设置。接口调用后，设备将立即恢复出厂设置。恢复完成后，整机设备数据将全部被擦除且无法恢
   *     复。企业需要做好应用的安全设计，防止应用被攻击导致企业数据丢失。已经通过
   *     [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了恢复出厂，需要先解除禁用。<
   *     br/>- reboot：设备重启。<br/>- shutDown：设备关机。<br/>- lockScreen：设备锁屏。
   * @param { string } [addition] - 执行时附加参数。当前为预留参数，无需传入。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function operateDevice(admin: Want, operate: string, addition?: string): void;

  /**
   * 允许管理员操作设备，例如在企业设备管理场景下，管理员可远程控制员工设备执行磁盘擦除、恢复出厂设置、重启、关机、锁屏、锁定设备或解锁设备等操作。
   *
   * @permission ohos.permission.ENTERPRISE_OPERATE_DEVICE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Operation } operation - 要执行的操作。
   * @param { string } [addition] - 执行时附加参数。当operation类型为磁盘擦除时，附加参数为图片的沙箱路径。
   *     若磁盘擦除成功后需给用户展示信息，可设置该参数传递信息，该图片大小需小于5KB（建议使用二维码图片）。
   *     长度限制为1024字节。若operation类型为锁定设备时，表示屏幕锁定后展示的描述信息。若operation为其他类型时，目前无需传入。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201048 - Failed to operate the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function operateDevice(admin: Want, operation: Operation, addition?: string): void;
}

export default deviceControl;