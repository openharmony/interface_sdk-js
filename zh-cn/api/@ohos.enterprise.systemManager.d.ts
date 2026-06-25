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

import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供系统管理能力。
 *
 * > **说明**：
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 12
 */
declare namespace systemManager {
  /**
   * 待更新的系统版本信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface SystemUpdateInfo {
    /**
     * 待更新的系统版本名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    versionName: string;

    /**
     * 第一次收到系统更新包的时间（单位：秒）。
     * 单位为： 秒，取值应为≥0的整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    firstReceivedTime: number;

    /**
     * 待更新的系统更新包类型，类型分为normal和patch类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packageType: string;
  }

  /**
   * 升级策略类型枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PolicyType {
    /**
     * 默认升级策略。周期提示用户，用户确认后升级。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * 禁止升级策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PROHIBIT = 1,

    /**
     * 强制升级策略。需指定最晚升级时间（latestUpdateTime）参数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_TO_SPECIFIC_VERSION = 2,

    /**
     * 指定时间窗口升级策略。需指定时间窗口参数（installStartTime、installEndTime）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WINDOWS = 3,

    /**
     * 延迟升级策略。延迟指定时间（delayUpdateTime）后进入DEFAULT模式，周期提示用户升级。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    POSTPONE = 4
  }

  /**
   * 升级策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface OtaUpdatePolicy {
    /**
     * 表示升级策略类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    policyType: PolicyType;

    /**
     * 表示待升级软件版本号。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * 表示最晚升级时间（时间戳）。
     * 单位为： 秒，取值应为≥0的整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    latestUpdateTime?: number;

    /**
     * 表示延迟升级时间（单位：小时）。
     * 单位为： 小时，取值应为≥0的整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    delayUpdateTime?: number;

    /**
     * 表示指定安装窗口起始时间（时间戳）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installStartTime?: number;

    /**
     * 表示指定安装窗口结束时间（时间戳）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installEndTime?: number;

    /**
     * 表示是否禁用在公网环境下升级。true表示禁用公网升级，false表示不禁用公网升级。如果作为
     * [systemManager.setOtaUpdatePolicy]{@link systemManager.setOtaUpdatePolicy}的入参，该字段可缺省，缺省时保持当前配置不变。当前配置可通过
     * [systemManager.getOtaUpdatePolicy]{@link systemManager.getOtaUpdatePolicy}接口获取。禁用公网升级后，可以采用内网升级。<!--RP4--><!--RP4
     * End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    disableSystemOtaUpdate?: boolean;
  }

  /**
   * 系统更新包信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UpdatePackageInfo {
    /**
     * 系统更新包版本号。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * 系统更新包详情。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packages: Array<Package>;

    /**
     * 系统更新包描述信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    description?: PackageDescription;

    /**
     * 系统更新包的鉴权信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    authInfo?: string;
  }

  /**
   * 系统更新包详情。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface Package {
    /**
     * 系统更新包类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    type: PackageType;

    /**
     * 系统更新包文件路径。若传入fd参数，该参数传入更新包文件名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    path: string;

    /**
     * 系统更新包文件句柄。当前不支持只传入path参数，需要传入fd。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    fd?: number;
  }

  /**
   * 系统更新包类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PackageType {
    /**
     * 固件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FIRMWARE = 1
  }

  /**
   * 系统更新包描述信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface PackageDescription {
    /**
     * 企业自定义更新通知说明。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    notify?: NotifyDescription;
  }

  /**
   * 企业自定义更新通知说明。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface NotifyDescription {
    /**
     * 企业自定义更新提示。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTips?: string;

    /**
     * 企业自定义更新提示详情。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTipsDetail?: string;
  }

  /**
   * 系统更新结果信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface UpdateResult {
    /**
     * 系统当前版本号。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * 系统更新状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    status: UpdateStatus;

    /**
     * 系统更新错误信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    errorInfo: ErrorInfo;
  }

  /**
   * 系统更新状态。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum UpdateStatus {
    /**
     * 指定版本系统更新包不存在。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    NO_UPDATE_PACKAGE = -4,

    /**
     * 系统更新包等待安装中。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_WAITING = -3,

    /**
     * 正在更新。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATING = -2,

    /**
     * 更新失败。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_FAILURE = -1,

    /**
     * 更新成功。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_SUCCESS = 0
  }

  /**
   * 系统更新错误信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface ErrorInfo {
    /**
     * 错误码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    code: number;

    /**
     * 系统更新错误信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    message: string;
  }

  /**
   * 星闪协议枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum NearLinkProtocol {
    /**
     * SSAP（SparkLink Service Access Protocol）协议。<!--RP1--><!--RP1End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    SSAP = 0,

    /**
     * 数据传输协议。<!--RP2--><!--RP2End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DATA_TRANSFER = 1
  }

  /**
   * 按键事件处理策略。按键事件发生时，仅拦截响应已下发按键事件处理策略的按键。对于未下发按键事件处理策略的按键事件，系统执行原先的响应逻辑。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyEventPolicy {
    /**
     * 按键编码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * 按键策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyPolicy: KeyPolicy;
  }

  /**
   * 按键编码。[添加按键事件策略]{@link systemManager.addKeyEventPolicies}、[删除按键事件策略]{@link systemManager.removeKeyEventPolicies}、
   * [获取按键事件策略]{@link systemManager.getKeyEventPolicies}和
   * [按键事件回调]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}接口通过按键编码
   * 映射到设备对应实际按键。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyCode {
    /**
     * 电源键。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    POWER = 0,

    /**
     * 音量加。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    VOLUME_UP = 1,

    /**
     * 音量减。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    VOLUME_DOWN = 2,

    /**
     * 导航键-回退。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    BACK = 3,

    /**
     * 导航键-主页。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    HOME = 4,

    /**
     * 导航键-最近打开。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    RECENT = 5
  }

  /**
   * 按键策略。MDM应用下发按键策略的按键编码与系统按键事件匹配后的系统行为。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyPolicy {
    /**
     * 拦截消息。设置后仅会拦截当前按键事件，系统不会再处理该事件，按键回调接口也不会响应按键事件。例如：下发电源键拦截策略后，按电源键无任何响应，无法关机，无法锁屏，仅影响开机状态下电源键事件，关机时可通过电源键正常开机。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    INTERCEPTION = 0,

    /**
     * 拦截并转发消息。 设置后会拦截当前按键事件，系统不会再处理该事件，同时通过
     * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
     * 回调接口将发生的按键事件通知给MDM应用，通知MDM应用处理该事件的过程不会阻塞系统后续的其他事件处理。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    CUSTOM = 1
  }

  /**
   * 按键事件。
   * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   * 按键事件回调触发时，传递当前按键事件信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyEvent {
    /**
     * 按键编码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * 按键动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyAction: KeyAction;

    /**
     * 按键动作发生时间，系统开机后微秒级时间戳。当按键长按时后续按键事件该参数不发生改变，应用可以通过该时间来判断该事件是否属于长按事件，以执行长按事件逻辑处理。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    actionTime: number;

    /**
     * 其他按键信息，当前按键事件发生时，其他正在被按下的按键信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyItems: Array<KeyItem>;
  }

  /**
   * 按键动作。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyAction {
    /**
     * 除按下和抬起动作以外，其他按键动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    UNKNOWN = -1,

    /**
     * 按键按下动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DOWN = 0,

    /**
     * 按键抬起动作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    UP = 1
  }

  /**
   * 其他按键信息。当前[KeyCode]{@link systemManager.KeyCode}事件发生时，其他已被按下的按键信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyItem {
    /**
     * 按键编码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * 按键动作。按键是否被按下。true：按下；false：抬起
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    pressed: boolean;

    /**
     * 按键动作发生时间，系统开机后微秒级时间戳。导航按键不支持组合扩展，发生时间显示为0。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    downTime: number;
  }

  /**
   * 设置NTP(Network Time Protocol)时间服务器。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } server - NTP服务器地址（以","分隔，如"ntpserver1.com,ntpserver2.com"。最大长度96字节，包括结束符）。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setNTPServer(admin: Want, server: string): void;

  /**
   * 获取NTP时间服务器信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { string } string对象，返回NTP时间服务器信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getNTPServer(admin: Want): string;

  /**
   * 设置升级策略。内网升级场景下，需要先调用[systemManager.notifyUpdatePackages]{@link systemManager.notifyUpdatePackages}接口通知系统更新包，再调用该接口设
   * 置升级策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { OtaUpdatePolicy } policy - 升级策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setOtaUpdatePolicy(admin: Want, policy: OtaUpdatePolicy): void;

  /**
   * 查询升级策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { OtaUpdatePolicy } OtaUpdatePolicy对象，返回升级策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getOtaUpdatePolicy(admin: Want): OtaUpdatePolicy;

  /**
   * 通知系统更新包信息。内网升级场景下，需要先调用该接口通知系统更新包，再调用[systemManager.setOtaUpdatePolicy]{@link systemManager.setOtaUpdatePolicy}设置升级
   * 策略。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { UpdatePackageInfo } packageInfo - 系统更新包信息。<br/>**说明：** 传入的UpdatePackageInfo.packages.path必须是“update”开头的zip
   *     压缩包，传入其他形式的文件会报9201004错误码。
   * @returns { Promise<void> } 无返回结果的Promise对象。当通知系统更新包失败时会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201004 - The update packages do not exist or analyzing failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function notifyUpdatePackages(admin: Want, packageInfo: UpdatePackageInfo): Promise<void>;

  /**
   * 获取系统更新结果。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } version - 更新包版本号。
   * @returns { Promise<UpdateResult> } Promise对象，返回系统更新结果。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getUpdateResult(admin: Want, version: string): Promise<UpdateResult>;

  /**
   * 获取系统更新的鉴权数据，用于校验系统更新信息。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<string> } Promise对象，返回系统更新的鉴权数据。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getUpdateAuthData(admin: Want): Promise<string>;

  /**
   * 设置设备重启自动解锁，仅针对无锁屏密码设备生效。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isAllowed - true表示设备重启后自动解锁，false表示设备重启后不自动解锁。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setAutoUnlockAfterReboot(admin: Want, isAllowed: boolean): void;

  /**
   * 获取设备是否重启自动解锁。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回true表示设备重启后自动解锁，返回false表示设备重启后不自动解锁。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAutoUnlockAfterReboot(admin: Want): boolean;

  /**
   * 为指定用户添加禁用的星闪协议名单。NearLink Kit（星闪服务）提供一种低功耗、高速率的短距离通信服务，支持星闪设备之间的连接、数据交互。<!--RP3--><!--RP3End-->本接口对键盘、手写笔等系统服务和系统应用
   * 不生效。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<NearLinkProtocol> } protocols - 星闪协议列表。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addDisallowedNearLinkProtocols(admin: Want, protocols: Array<NearLinkProtocol>, accountId: number): void;

  /**
   * 为指定用户移除禁用的星闪协议名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<NearLinkProtocol> } protocols - 星闪协议列表。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeDisallowedNearLinkProtocols(admin: Want, protocols: Array<NearLinkProtocol>, accountId: number): void;

  /**
   * 获取指定用户下禁用的星闪协议名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @returns { Array<NearLinkProtocol> } 指定用户下禁用的星闪协议名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getDisallowedNearLinkProtocols(admin: Want, accountId: number): Array<NearLinkProtocol>;

  /**
   * 设置是否支持本地安装企业应用。设置为支持安装后，具备本地安装能力的PC/2in1企业设备可本地双击应用安装包，安装签名证书分发类型为enterprise_normal的企业应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isEnable - 是否支持本地安装企业应用。true表示支持，false表示不支持。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setInstallLocalEnterpriseAppEnabled(admin: Want, isEnable: boolean): void;

  /**
   * 查询是否支持本地安装企业应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>Before API version 24, this API can
   *     be called to check whether local installation of enterprise applications is supported. If the device has
   *     multiple MDM applications, you can pass **admin** to query the corresponding policies. Since API version 24,
   *     **admin** can be set to **null**. In this case, the policies that actually take effect on the device are
   *     returned. [since 20 - 23]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。<br/>API version 24之前，调用本接口查询系统当
   *     前是否支持本地安装企业应用。当设备有多个MDM应用时，传入admin查询对应admin设置的策略。从API version 24开始，admin新增支持传入null，传入null时查询整机实际生效的策略
   *     。 [since 20 - 23]
   * @returns { boolean } 是否支持本地安装企业应用，true为支持，false为不支持。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstallLocalEnterpriseAppEnabled(admin: Want | null): boolean;

  /**
   * 添加按键事件处理策略。系统触发按键事件时，若匹配下发的按键事件策略，将通过
   * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   * 回调通知MDM应用，并携带匹配策略的按键事件信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<KeyEventPolicy> } keyPolicies - 按键策略。支持物理按键（电源键、音量加、音量减），导航键（回退、主页、最近打开）。物理键支持任意组合为组合键，导航键不支持组合。组合键事
   *     件响应详见
   *     [按键事件回调]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}接口。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function addKeyEventPolicies(admin: Want, keyPolicies: Array<KeyEventPolicy>): void;

  /**
   * 删除按键事件处理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<KeyCode> } keyCodes - 按键编码。支持一次删除多条按键策略，删除不支持按键时返回9200012错误码。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function removeKeyEventPolicies(admin: Want, keyCodes: Array<KeyCode>): void;

  /**
   * 获取按键事件处理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<KeyEventPolicy> } 返回当前配置的按键事件策略列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function getKeyEventPolicies(admin: Want): Array<KeyEventPolicy>;

  /**
   * 禁用/启用设备激活锁。设备激活锁被禁用后，将无法使用查找设备功能。该功能只适用于特定设备<!--RP5--><!--RP5End-->。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isDisabled - 是否禁用激活锁。true表示禁用，false表示启用。
   * @param { string } [credential] - 禁用凭据。当设置禁用时该参数必须填写有效凭据<!--RP6--><!--RP6End-->，设置启用时为空。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置禁用/启用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201011 - The credential of the activation lock is invalid.
   * @throws { BusinessError } 9201012 - Failed to enable or disable the activation lock.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setActivationLockDisabled(admin: Want, isDisabled: boolean, credential?: string): Promise<void>;

  /**
   * 获取设备激活锁禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象，返回当前设备激活锁的禁用状态。返回true表示设备激活锁处于禁用状态，查找设备功能无法使用；返回false表示设备激活锁处于启用状态，可以正常使用设备
   *     查找功能。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function isActivationLockDisabled(admin: Want): Promise<boolean>;

  /**
   * 开始收集设备上已生成并存储至硬盘的[faultlog]{@link @ohos.faultLogger:FaultLogger.FaultType}日志，不支持收集未存储至硬盘的faultlog日志、应用业务日志和系统运行日志。
   *
   * - 调用接口后，系统会启动一个日志收集任务，任务启动后接口立即返回。任务可能会因为系统性能等原因导致收集失败。
   * - 允许多个MDM应用调用，不同MDM应用在不同用户下收集的日志分开保存，互不影响。同一时间只允许一个MDM应用启动日志收集任务，在任务执行完成前调用本接口会返回错误码9201009，任务执行完成后，允许其他MDM应用调用。
   * - 任务执行完成后，通过
   * [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * 回调函数通知给MDM应用，系统将已收集的日志文件挂载到MDM应用沙箱路径，MDM应用可以在回调函数中读取已收集的日志。
   * - 如果日志收集任务执行超过5分钟，
   * [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * 回调函数会返回日志收集任务失败。
   * - 应用取走日志后，建议调用[systemManager.finishLogCollected]{@link systemManager.finishLogCollected}删除已收集到的日志。
   *
   * @permission ohos.permission.ENTERPRISE_READ_LOG
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当收集日志任务创建失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201009 - Collecting logs, please try again later.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function startCollectLog(admin: Want): Promise<void>;

  /**
   * 删除本MDM应用在当前用户下收集到的设备日志。
   *
   * > **说明：**
   * >
   * > 在应用调用[startCollectLog]{@link systemManager.startCollectLog}开始收集日志后，收到
   * > [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * > 回调时，建议立即拷贝或者处理日志，并调用此接口删除收集到的日志。
   * >
   * > 若不调本接口，设备日志会占用系统存储空间，不影响下一次调用[startCollectLog]{@link systemManager.startCollectLog}启动日志收集任务。
   *
   * @permission ohos.permission.ENTERPRISE_READ_LOG
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function finishLogCollected(admin: Want): void;

  /**
   * 设置指定用户下是否支持本地安装企业应用。在具备本地安装能力的PC/2in1企业设备上下发支持本地企业应用策略后，用户可以在桌面或者文件管理器直接双击企业应用安装包，即可直接安装企业应用。
   *
   * 仅支持enterprise_normal或enterprise_mdm签名类型的企业应用。
   *
   * > **说明：**
   * >
   * > 满足以下任意条件，PC/2in1企业设备在当前用户下即支持本地安装企业应用：
   * >
   *
   * <!--RP7--><!--RP7End-->
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isEnable - 是否支持本地安装企业应用。true表示支持，false表示不支持。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值应为≥0的整数。
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
  function setInstallLocalEnterpriseAppEnabledForAccount(admin: Want, isEnable: boolean, accountId: number): void;

  /**
   * 查询指定用户是否支持本地安装企业应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。<br/>当设备有多个MDM应用时，传入admin
   *     查询对应admin设置的策略。传入null时查询整机实际生效的策略。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     等接口来获取
   *     <br>取值应为≥0的整数。
   * @returns { boolean } 是否支持本地安装企业应用，true为支持，false为不支持。当admin为null时，查询系统当前是否支持本地安装企业应用。
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
  function getInstallLocalEnterpriseAppEnabledForAccount(admin: Want | null, accountId: number): boolean;

  /**
   * 使能服务器端生成随机Nonce标记
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { boolean } isEnable - 随机标记
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setOtaUpdateNonceEnable(admin: Want, isEnable: boolean): void;

  /**
   * 查询是否使能服务器端生成随机Nonce标记
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - 企业设备管理扩展组件
   * @returns { boolean } 返回是否是能ota升级随机值
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function isOtaUpdateNonceEnable(admin: Want): boolean;
}

export default systemManager;