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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供企业设备设置能力，包括设置、获取设备息屏时间等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace deviceSettings {
  /**
   * 电源策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface PowerPolicy {
    /**
     * 执行电源策略的动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    powerPolicyAction: PowerPolicyAction;

    /**
     * 延迟时间（单位：毫秒）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    delayTime: number;
  }

  /**
   * 执行电源策略的动作。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerPolicyAction {
    /**
     * 不执行动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    NONE = 0,

    /**
     * 自动进入睡眠。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    AUTO_SUSPEND = 1,

    /**
     * 强制进入睡眠。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    FORCE_SUSPEND = 2,

    /**
     * 进入休眠，该策略暂不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    HIBERNATE = 3,

    /**
     * 关机。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    SHUTDOWN = 4
  }

  /**
   * 执行电源策略的场景。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerScene {
    /**
     * 超时场景。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    TIME_OUT = 0
  }

  /**
   * 证书信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  export interface CertBlob {
    /**
     * 证书的二进制内容。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    inData: Uint8Array;

    /**
     * 证书别名，别名长度小于40个字符。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    alias: string;
  }

  /**
   * 设置的策略类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsItem {
    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DEVICE_NAME = 0,

    /**
     * 三键导航。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    FLOATING_NAVIGATION = 1
  }

  /**
   * 设置项列表。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsMenu {
    /**
     * 账号。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCOUNT_ID = 0,

    /**
     * WLAN菜单
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI = 1,

    /**
     * WLAN 代理。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_PROXY_SETTINGS = 2,

    /**
     * WALN IP设置
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_IP_SETTINGS = 3,

    /**
     * 星闪和蓝牙/蓝牙。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BLUETOOTH = 4,

    /**
     * 网络。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NETWORK = 5,

    /**
     * 移动网络。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_NETWORK = 6,

    /**
     * 多设备协同-超级终端。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPER_DEVICE = 7,

    /**
     * 多设备协同。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MORE_CONNECTIVITY_OPTIONS = 8,

    /**
     * 桌面和个性化。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    HOME_SCREEN_STYLE = 9,

    /**
     * 显示和亮度。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DISPLAY_BRIGHTNESS = 10,

    /**
     * 声音和振动。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SOUND_VIBRATION = 11,

    /**
     * 通知和状态栏。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NOTIFICATIONS = 12,

    /**
     * 生物识别和密码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BIOMETRICS_PASSWORD = 13,

    /**
     * 应用和元服务。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APPS_AND_SERVICES = 14,

    /**
     * 电池。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BATTERY = 15,

    /**
     * 存储。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    STORAGE = 16,

    /**
     * 隐私和安全。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRIVACY_AND_SECURITY = 17,

    /**
     * 健康使用设备。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DIGITAL_BALANCE = 18,

    /**
     * 智能助手。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SMART_ASSISTANT = 19,

    /**
     * 关怀和无障碍。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCESSIBILITY = 20,

    /**
     * 系统。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM = 21,

    /**
     * 关于本机。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ABOUT_DEVICE = 22,

    /**
     * 系统-系统导航。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM_NAVIGATION = 23,

    /**
     * 系统-语言和地区。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    LANGUAGE_REGION = 24,

    /**
     * 系统-输入法。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    INPUT_METHODS = 25,

    /**
     * 系统-日期和时间。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATE_TIME = 26,

    /**
     * 系统-数据克隆。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATA_CLONE = 27,

    /**
     * 系统-备份和恢复。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BACKUP_SETTINGS = 28,

    /**
     * 系统-重置。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    RESET = 29,

    /**
     * 系统-中转站。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPERHUB = 30,

    /**
     * 系统-用户体验改进计划。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    USER_EXPERIENCE = 31,

    /**
     * 多设备协同-无线投屏。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SCREEN_CAST = 32,

    /**
     * 打印机和扫描仪。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRINTERS_SCANNERS = 33,

    /**
     * 移动网络-移动数据。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_DATA = 34,

    /**
     * 移动网络-个人热点。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PERSONAL_HOTSPOT = 35,

    /**
     * 移动网络-SIM卡管理。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SIM_MANAGEMENT = 36,

    /**
     * 移动网络-飞行模式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    AIRPLANE_MODE = 37,

    /**
     * 移动网络-流量管理。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGE_DATA_USAGE = 38,

    /**
     * 移动网络-VPN。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    VPN_SETTINGS = 39,

    /**
     * 显示和亮度-字体大小和界面缩放。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    TEXT_DISPLAY_SIZE = 40,

    /**
     * 系统-应用分身。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APP_DUPLICATOR = 41,

    /**
     * 搜索。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SEARCH = 42
  }

  /**
   * 开关名称的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchKey {
    /**
     * 星闪开关。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NEARLINK = 0,

    /**
     * 蓝牙开关。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BLUETOOTH = 1,

    /**
     * Wi-Fi开关。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    WIFI = 2,

    /**
     * 近场通信
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NFC = 3
  }

  /**
   * 开关状态的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchStatus {
    /**
     * 开启状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    ON = 0,

    /**
     * 关闭状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OFF = 1,

    /**
     * 强制开启状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FORCE_ON = 2
  }

  /**
   * 设置设备息屏时间。
   *
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } time - 设备息屏时间（单位：毫秒，建议参数与设备可选息屏时间保持一致）。
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
  function setScreenOffTime(admin: Want, time: number): void;

  /**
   * 获取设备息屏时间，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<number> } callback - 回调函数。当接口调用成功，err为null，data为设备息屏时间（单位：毫秒），否则err为错误对象。
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
   */
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;

  /**
   * 获取设备息屏时间，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<number> } Promise对象，返回设备息屏时间（单位：毫秒）。
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
   */
  function getScreenOffTime(admin: Want): Promise<number>;

  /**
   * 安装用户证书，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { CertBlob } certificate - 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。
   * @param { AsyncCallback<string> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
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
  function installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>): void;

  /**
   * 安装用户证书，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { CertBlob } certificate - 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。
   * @returns { Promise<string> } Promise对象，返回当前证书安装后的uri，用于卸载证书。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
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
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * 卸载用户证书，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certUri - 证书uri，由安装用户证书接口
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>)}
   *     设置返回。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
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
  function uninstallUserCertificate(admin: Want, certUri: string, callback: AsyncCallback<void>): void;

  /**
   * 卸载用户证书，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certUri - 证书uri，由安装用户证书接口
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate(admin: Want, certificate: CertBlob)}设置返回。
   * @returns { Promise<void> } 无返回结果的Promise对象。当卸载用户证书失败时会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
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
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * 设置电源策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { PowerScene } powerScene - 电源策略场景，当前只支持超时场景。
   * @param { PowerPolicy } powerPolicy - 电源策略。
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
  function setPowerPolicy(admin: Want, powerScene: PowerScene, powerPolicy: PowerPolicy): void;

  /**
   * 获取电源策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { PowerScene } powerScene - 电源策略场景，当前只支持超时场景。
   * @returns { PowerPolicy } 电源策略。
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
  function getPowerPolicy(admin: Want, powerScene: PowerScene): PowerPolicy;

  /**
   * 设置设备策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } item - 设备设置策略类型。<br/>- screenOff：设备息屏策略。对于PC/2in1设备，支持设置电池和电源供电下的设备息屏策略。<br/>- dateTime：设置系统时间。<
   *     br/>- powerPolicy：设备电源策略。该能力仅支持PC/2in1设备，策略设置之后不刷新设置—电源和电池页面，在手机平板设备设置后不生效。<br/>对于PC/2in1设备，仅支持设置电池供电下的设备电源策略。设
   *     置设备超时灭屏时睡眠延迟策略，睡眠动作需要在设置—电源和电池页面显示的睡眠时间之后等待设置的delayTime才会生效。<br/>- eyeComfort：从API version 23开始支持，设置护眼模式开关状态，仅支
   *     持全天开启和关闭护眼模式。<br/>- defaultInputMethod：从API version 23开始支持，设置默认输入法。
   * @param { string } value - 设备设置策略类型。<br/>- screenOff：设备息屏策略。对于PC/2in1设备，支持设置电池和电源供电下的设备息屏策略。<br/>- dateTime：设置系统时间。<
   *     br/>- powerPolicy：设备电源策略。该能力仅支持PC/2in1设备，策略设置之后不刷新设置—电源和电池页面，在手机平板设备设置后不生效。<br/>对于PC/2in1设备，仅支持设置电池供电下的设备电源策略。设
   *     置设备超时灭屏时睡眠延迟策略，睡眠动作需要在设置—电源和电池页面显示的睡眠时间之后等待设置的delayTime才会生效。<br/>- eyeComfort：从API version 23开始支持，设置护眼模式开关状态，仅支
   *     持全天开启和关闭护眼模式。<br/>- defaultInputMethod：从API version 23开始支持，设置默认输入法。
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
  function setValue(admin: Want, item: string, value: string): void;

  /**
   * 获取设备设置策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } item - 设备设置策略类型。<br/>- screenOff：设备息屏策略，对于PC/2in1设备，支持查询电池供电下的设备息屏策略。<br/>- powerPolicy：设备电源策略，仅对
   *     PC/2in1设备生效，仅支持查询电池供电下的设备电源策略。<br/>- eyeComfort：从API version 23开始支持，护眼模式开关状态。
   * @returns { string } Policy type value.
   *     <br>If **item** is **screenOff**, the device screen-off time (in ms) is returned. For PCs/2-in-1 devices,
   *     the device screen-off time (in ms) in battery mode is returned.
   *     <br>If **item** is **powerPolicy**, the power policy is returned. For PCs/2-in-1 devices, the power policy in
   *     battery mode is returned. The power policy a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction"
   *     :xx,"delayTime":xx}} format. **powerScene** indicates the power policy scenario, **delayTime** indicates the
   *     delay time (in milliseconds), and **powerPolicyAction** indicates the sleep policy.
   *     <br>The value of **powerScene** can be:
   *     <br>- **0**: timeout.
   *     <br>The value of **powerPolicyAction** can be:
   *     <br>- **0**: No action is performed.
   *     <br>- **1**: enter sleep mode automatically.
   *     <br>- **2**: forcibly enter sleep mode.
   *     <br>- **3**: enter sleep mode. This policy does not take effect currently.
   *     <br>- **4**: power off.
   *     <br>If **item** is **eyeComfort**, **value** is a string indicating the status of the eye comfort mode.
   *     <br>- **on**: The eye comfort mode is enabled all day.
   *     <br>- **off**: The eye comfort mode is disabled.
   *     <br>- **unknown**: other modes.
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
  function getValue(admin: Want, item: string): string;

  /**
   * 设置桌面壁纸，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } fd - 需要设置为桌面壁纸图片的文件描述符，可以通过file.fs的
   *     [openSync](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopensync)接口获取应用沙箱目录下的图片文件描述符。壁纸图片大小不
   *     能超过100MB。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置桌面壁纸失败后会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setHomeWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * 设置锁屏壁纸，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } fd - 需要设置为锁屏壁纸图片的文件描述符，可以通过file.fs的
   *     [openSync](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopensync)接口获取应用沙箱目录下的图片文件描述符。壁纸图片大小不
   *     能超过100MB。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置锁屏壁纸失败后会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setUnlockWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * 添加设置项至当前用户下的隐藏设置项列表。添加至隐藏设置项列表的设置项在当前用户的设置菜单中会被隐藏，隐藏后不可以在设置的搜索中搜索到。如果通过某种方式搜索到该设置项，点击后也无法打开。调用接口后即刻生效，无需重启设置应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<SettingsMenu> } menusToHidden - 隐藏的设置项列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * 将设置项从当前用户下的隐藏设置项列表中移除。隐藏设置项列表中的设置项在当前用户的设置菜单中会被隐藏，隐藏后不可以在设置的搜索中搜索到，如果通过某种方式搜索到该设置项，点击后也无法打开。若移除后剩余的隐藏设置项列表为空，则设置项会全
   * 部显示。调用接口后即刻生效，无需重启设置应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<SettingsMenu> } menusToHidden - 隐藏的设置项列表
   *     <br>最大长度为43且不能为空。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * 获取配置在当前用户下被隐藏的设置项列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<SettingsMenu> } 隐藏的设置项列表。
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
  function getHiddenSettingsMenu(admin: Want): Array<SettingsMenu>;

  /**
   * 设置指定用户的设备设置策略。该接口可以设置指定用户在设置应用中的某个参数，比如设置用户100的设备名称等。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { SettingsItem } item - 设备设置策略类型。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值范围为全体整数。
   *     <br>
   *     -用户ID，必须大于等于0。<br>您可以调用
   *     [getOsAccountLocalId]{@link @Ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(回调：
   *     AsyncCallback<int>获取用户ID。
   * @param { string } value - 策略类型值。<br/>当item为[SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}时，value为设备名
   *     称的字符串。 字符串长度范围：大于等于1，小于等于100。只允许设置当前用户的设备名称，设置其他用户的设备名称返回9200012错误码。<br/>当item为
   *     [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}时，value为三键导航的开关状态。<br/>- '0'：表示开启三键导航（通过接口
   *     [enterKioskMode]{@link @ohos.app.ability.kioskManager:kioskManager.enterKioskMode}进入Kiosk模式下，三键导航显示依赖底部手势开启；即三键
   *     导航开关和底部手势开关同时开启时，三键导航才会显示。底部手势可通过接口
   *     [applicationManager.setKioskFeatures]{@link
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setValueForAccount(admin: Want, item: SettingsItem, accountId: number, value: string): void;

  /**
   * 获取指定用户的设备设置策略。该接口可以获取指定用户在设置应用中的某个参数，比如获取用户100的设备名称等。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { SettingsItem } item - 设备设置策略类型。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值范围为全体整数。
   * @returns { string } Policy type value.
   *     <br>When **item** is set to [SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}, this API returns the
   *     device name of the current user. If the device name of another user is queried, error code 9200012 is returned.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem},
   *     this API returns the three-key navigation switch state for the specified user.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem},
   *     this API can be called properly on phones and tablets but returns error code 801 on other devices.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getValueForAccount(admin: Want, item: SettingsItem, accountId: number): string;

  /**
   * 设置开关的状态。支持设置星闪、蓝牙、Wi-Fi的状态为开启或关闭，设置完毕后，用户可以手动开关。支持设置蓝牙的状态为强制开启，设置完毕后，用户不可以手动开关。若已经通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口禁用了某个开关，则通过本接口设置这个开关的状态会抛出错误码203，需通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口解除该开关禁用策略。当设备有多个MDM应用时，各MDM应用设置开关状态不存在冲突，最后设置的策略生效。开启(用户可手动开启、关闭)、关闭(用户可手动开启、关闭)、强制开启(用户不可手动关闭)三个状态可以随意切换，也不存在冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { SwitchKey } key - 开关的名称，应用申请权限 ohos.permission.PERSONAL_MANAGE_RESTRICTIONS 并通过接口
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为自带设备管理应用，可以使用此接口设
   *     置以下开关：星闪、蓝牙、Wi-Fi。
   * @param { SwitchStatus } status - 开关的状态，应用申请权限 ohos.permission.PERSONAL_MANAGE_RESTRICTIONS 并通过接口
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为自带设备管理应用，可以使用此接口设
   *     置以下状态：ON、OFF。设置为FORCE_ON状态时会报错误码9200002。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201042 - Failed to toggle the switch state.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setSwitchStatus(admin: Want, key: SwitchKey, status: SwitchStatus): void;

  /**
   * 查询开关的状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { SwitchKey } key - 开关名称
   * @returns { SwitchStatus } 9200001 - 应用没有激活成设备管理器
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getSwitchStatus(admin: Want, key: SwitchKey): SwitchStatus;
}

export default deviceSettings;