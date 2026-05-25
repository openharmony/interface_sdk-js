/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 本模块能力已更新至新模块。建议使用新模块的接口进行开发，参见
 * [@ohos.distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}。
 * 本模块提供分布式设备管理能力。
 * 系统应用可调用接口实现如下功能：
 * 
 * - 注册和解除注册设备上下线变化监听。
 * - 发现周边不可信设备。
 * - 认证和取消认证设备。
 * - 查询可信设备列表。
 * - 查询本地设备信息，包括设备名称，设备类型和设备标识。
 * - 发布设备发现。
 *
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 7 dynamiconly
 * @deprecated since 11
 * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager
 */
declare namespace deviceManager {
  /**
   * 设备信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo
   */
  interface DeviceInfo {
    /**
     * 设备的唯一标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceId
     */
    deviceId: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceName
     */
    deviceName: string;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceType
     */
    deviceType: DeviceType;

    /**
     * 设备网络标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.networkId
     */
    networkId: string;

    /**
     * 发现设备的距离。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    range: number;

    /**
     * 设备认证类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    authForm: AuthForm;
  }

  /**
   * 表示设备认证类型的枚举类。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 10 dynamiconly
   * @deprecated since 11
   */
  enum AuthForm {
    /**
     * 设备没有认证。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    INVALID_TYPE = -1,

    /**
     * 无账号设备点对点认证。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    PEER_TO_PEER = 0,

    /**
     * 设备同账号认证。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    IDENTICAL_ACCOUNT = 1,

    /**
     * 设备跨账号认证。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    ACROSS_ACCOUNT = 2
  }

  /**
   * 表示设备类型的枚举类。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum DeviceType {
    /**
     * 未知设备。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    UNKNOWN_TYPE = 0,

    /**
     * 智能音箱。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SPEAKER = 0x0A,

    /**
     * 手机。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    PHONE = 0x0E,

    /**
     * 平板。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TABLET = 0x11,

    /**
     * 智能穿戴。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    WEARABLE = 0x6D,

    /**
     * 车。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    CAR = 0x83,

    /**
     * 智慧屏。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TV = 0x9C
  }

  /**
   * 表示设备状态变化的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange
   */
  enum DeviceStateChangeAction {
    /**
     * 设备物理上线状态。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.UNKNOWN
     */
    ONLINE = 0,

    /**
     * 设备可用状态，表示设备间信息已在分布式数据中同步完成, 可以运行分布式业务。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.AVAILABLE
     */
    READY = 1,

    /**
     * 设备物理下线状态。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.UNAVAILABLE
     */
    OFFLINE = 2,

    /**
     * 设备信息更改。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    CHANGE = 3
  }

  /**
   * 发现信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface SubscribeInfo {
    /**
     * 发现标识，用于标识不同的发现周期。 取值范围1~65535。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    subscribeId: number;

    /**
     * 发现模式。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    mode: DiscoverMode;

    /**
     * 发现类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    medium: ExchangeMedium;

    /**
     * 发现频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    freq: ExchangeFreq;

    /**
     * 是否同账号，true表示同账号，false表示异账号。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    isSameAccount: boolean;

    /**
     * 是否唤醒设备，true表示唤醒，false表示不用唤醒。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    isWakeRemote: boolean;

    /**
     * 发现能力。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    capability: SubscribeCap;
  }

  /**
   * 发布设备参数
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 9 dynamiconly
   * @deprecated since 11
   */
  interface PublishInfo {
    /**
     * 发布设备标识，用于标识不同的发布周期。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    publishId: number;

    /**
     * 发现模式。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    mode: DiscoverMode;

    /**
     * 发现频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    freq: ExchangeFreq;

    /**
     * 发布的设备是否支持测距能力，true表示支持测距能力，false表示不支持测距能力。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    ranging: boolean;
  }

  /**
   * 表示发现模式的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum DiscoverMode {
    /**
     * 被动模式。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    DISCOVER_MODE_PASSIVE = 0x55,

    /**
     * 主动模式。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    DISCOVER_MODE_ACTIVE = 0xAA
  }

  /**
   * 表示发现类型的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum ExchangeMedium {
    /**
     * 自动发现类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    AUTO = 0,

    /**
     * 蓝牙发现类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    BLE = 1,

    /**
     * WiFi发现类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    COAP = 2,

    /**
     * USB发现类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    USB = 3
  }

  /**
   * 表示发现频率的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum ExchangeFreq {
    /**
     * 低频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    LOW = 0,

    /**
     * 中频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    MID = 1,

    /**
     * 高频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    HIGH = 2,

    /**
     * 超高频率。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUPER_HIGH = 3
  }

  /**
   * 表示发现能力的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum SubscribeCap {
    /**
     * DDMP能力，后续会被废弃。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUBSCRIBE_CAPABILITY_DDMP = 0,

    /**
     * OSD能力。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUBSCRIBE_CAPABILITY_OSD = 1
  }

  /**
   * 认证参数。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface AuthParam {
    /**
     * 认证类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    authType: number;

    /**
     * 认证参数可扩展字段。可选，默认为undefined。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * 认证信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface AuthInfo {
    /**
     * 认证类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    authType: number;

    /**
     * 认证Token。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    token: number;

    /**
     * 认证参数可扩展字段。可选，默认为undefined。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * 创建一个设备管理器实例。
   *
   * @param { string } bundleName - 指示应用程序的Bundle名称。长度范围1~255字符。
   * @param { AsyncCallback<DeviceManager> } callback - DeviceManager实例创建时调用的回调，返回设备管理器对象实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.createDeviceManager
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * 设备管理实例，用于获取可信设备和本地设备的相关信息。在调用DeviceManager的方法前，需要先通过createDeviceManager构建一个DeviceManager实例dmInstance。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager
   */
  interface DeviceManager {
    /**
     * 设备管理实例不再使用后，通过该方法释放DeviceManager实例。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.releaseDeviceManager
     */
    release(): void;

    /**
     * 同步获取所有可信设备列表。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Array<DeviceInfo> } 返回可信设备列表。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync
     */
    getTrustedDeviceListSync(): Array<DeviceInfo>;

    /**
     * 打开软总线系统端的心跳模式，让周围处于下线状态的可信设备快速上线，同时刷新已上线的可信设备列表。
     * 
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { boolean } isRefresh - 是否打开心跳模式，刷新可信列表，true表示打开心跳模式，false表示关闭心跳模式。
     * @returns { Array<DeviceInfo> } 返回可信设备列表。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    getTrustedDeviceListSync(isRefresh: boolean): Array<DeviceInfo>;

    /**
     * 获取所有可信设备列表。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AsyncCallback<Array<DeviceInfo>> } callback - 获取所有可信设备列表的回调，返回设备信息。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>)
     */
    getTrustedDeviceList(callback: AsyncCallback<Array<DeviceInfo>>): void;

    /**
     * 获取所有可信设备列表。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Promise<Array<DeviceInfo>> } Promise实例，用于获取异步返回结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList()
     */
    getTrustedDeviceList(): Promise<Array<DeviceInfo>>;

    /**
     * 同步获取本地设备信息。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { DeviceInfo } 返回本地设备列表。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfoSync(): DeviceInfo;

    /**
     * 获取本地设备信息。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AsyncCallback<DeviceInfo> } callback - 获取本地设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfo(callback: AsyncCallback<DeviceInfo>): void;

    /**
     * 获取本地设备信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Promise<DeviceInfo> } Promise实例，用于获取异步返回结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfo(): Promise<DeviceInfo>;

    /**
     * 通过指定设备的网络标识获取该设备的信息。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } networkId - 设备的网络标识。长度范围1~255字符。
     * @param { AsyncCallback<DeviceInfo> } callback - 获取指定设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName
     */
    getDeviceInfo(networkId: string, callback: AsyncCallback<DeviceInfo>): void;

    /**
     * 通过指定设备的网络标识获取该设备的信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } networkId - 设备的网络标识。长度范围1~255字符。
     * @returns { Promise<DeviceInfo> } Promise实例，用于获取异步返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName
     */
    getDeviceInfo(networkId: string): Promise<DeviceInfo>;

    /**
     * 发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { SubscribeInfo } subscribeInfo - 发现信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo): void;

    /**
     * 发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { SubscribeInfo } subscribeInfo - 发现信息。
     * @param { string } filterOptions - 发现设备过滤信息。可选，默认为undefined，发现未上线设备。长度范围1~255字符。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo, filterOptions?: string): void;

    /**
     * 停止发现周边设备。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } subscribeId - 发现标识。取值范围为1~65535。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.stopDiscovering
     */
    stopDeviceDiscovery(subscribeId: number): void;

    /**
     * 发布设备发现。发布状态持续两分钟，超过两分钟会停止发布。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { PublishInfo } publishInfo - 发布设备发现信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600105 - Publish unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    publishDeviceDiscovery(publishInfo: PublishInfo): void;

    /**
     * 停止发布设备发现。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } publishId - 发布标识。 取值范围为1~2147483647。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    unPublishDeviceDiscovery(publishId: number): void;

    /**
     * 认证设备。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceInfo } deviceInfo - 设备信息。
     * @param { AuthParam } authParam - 认证参数。
     * @param { AsyncCallback<{ deviceId: string, pinToken?: number }> } callback - 认证结果回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>)
     */
    authenticateDevice(
      deviceInfo: DeviceInfo,
      authParam: AuthParam,
      callback: AsyncCallback<{ deviceId: string, pinToken?: number }>
    ): void;

    /**
     * 解除认证设备。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceInfo } deviceInfo - 设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.unbindTarget
     */
    unAuthenticateDevice(deviceInfo: DeviceInfo): void;

    /**
     * 验证认证信息。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AuthInfo } authInfo - 认证信息。
     * @param { AsyncCallback<{ deviceId: string, level: number }> } callback - 验证结果回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void;

    /**
     * 设置用户ui操作行为。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } operateAction - 用户操作动作。取值范围为0~5。
     * @param { string } params - 表示用户的输入参数。长度范围1~255字符。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified params is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.replyUiAction
     */
    setUserOperation(operateAction: number, params: string): void;

    /**
     * 获取凭据的注册信息。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } requestInfo - 请求凭据信息。最大长度255字符。
     * @param { AsyncCallback<{ registerInfo: string }> } callback - 凭据的注册信息回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified requestInfo is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void;

    /**
     * 导入凭据信息。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } credentialInfo - 导入凭据信息。长度范围1~64000字符。
     * @param { AsyncCallback<{ resultInfo: string }> } callback - 导入凭据结果回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified credentialInfo is greater than 5999.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * 删除凭据信息。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } queryInfo - 删除凭据信息。长度范围1~64000字符。
     * @param { AsyncCallback<{ resultInfo: string }> } callback - 删除凭据结果回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified queryInfo is greater than 5999.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * ui状态变更回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'uiStateChange' } type - 注册的设备管理器 ui 状态回调，以便在状态改变时通知应用，固定为uiStateChange。
     * @param { Callback<{ param: string }> } callback - 指示要注册的设备管理器 ui 状态回调，返回ui状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'replyResult', callback: Callback<{ param: string; }>)
     */
    on(type: 'uiStateChange', callback: Callback<{ param: string }>): void;

    /**
     * 取消ui状态变更回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'uiStateChange' } type - 取消注册的设备管理器 ui 状态回调，固定为uiStateChange。
     * @param { Callback<{ param: string }> } callback - 指示要取消注册的设备管理器 ui 状态，返回UI状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'replyResult', callback: Callback<{ param: string; }>)
     */
    off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void;

    /**
     * 注册设备状态回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceStateChange' } type - 注册设备状态回调，固定为deviceStateChange。
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback - 指示要注册的设备状态回调，返回设备状态和设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * 取消注册设备状态回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceStateChange' } type - 根据应用程序的包名取消注册设备状态回调，固定为deviceStateChange。
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback - 指示要取消注册的设备状态回调，返回设备状态和设备信
     *     息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * 注册发现设备回调监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceFound' } type - 注册设备发现回调，以便在发现周边设备时通知应用程序，固定为deviceFound。
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback - 注册设备发现的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>)
     */
    on(type: 'deviceFound', callback: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * 取消注册设备发现回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceFound' } type - 取消注册设备发现回调，固定为deviceFound。
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback - 指示要取消注册的设备发现回调，返回设备状态和设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>)
     */
    off(type: 'deviceFound', callback?: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * 注册设备发现失败回调监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'discoverFail' } type - 注册设备发现失败回调，以便在发现周边设备失败时通知应用程序，固定为discoverFail。
     * @param { Callback<{ subscribeId: number, reason: number }> } callback - 注册设备发现失败的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'discoverFailure', callback: Callback<{ reason: int; }>)
     */
    on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * 取消注册设备发现失败回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'discoverFail' } type - 取消注册设备发现失败回调，固定为discoverFail。
     * @param { Callback<{ subscribeId: number, reason: number }> } callback - 指示要取消注册的设备发现失败回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'discoverFailure', callback: Callback<{ reason: int; }>)
     */
    off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * 注册发布设备发现回调监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishSuccess' } type - 注册发布设备成功回调，以便将发布成功时通知应用程序，固定为publishSuccess。
     * @param { Callback<{ publishId: number }> } callback - 注册设备发布成功的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void;

    /**
     * 取消注册设备发布成功回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishSuccess' } type - 取消注册设备发布成功回调，固定为publishSuccess。
     * @param { Callback<{ publishId: number }> } callback - 指示要取消注册的设备发布成功回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void;

    /**
     * 注册设备发布失败回调监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishFail' } type - 注册设备发布失败回调，以便在发布设备失败时通知应用程序，固定为publishFail。
     * @param { Callback<{ publishId: number, reason: number }> } callback - 注册设备发布失败的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    on(type: 'publishFail', callback: Callback<{ publishId: number, reason: number }>): void;

    /**
     * 取消注册设备发布失败回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishFail' } type - 取消注册设备发布失败回调，固定为publishFail。
     * @param { Callback<{ publishId: number, reason: number }> } callback - 指示要取消注册设备发布失败回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    off(type: 'publishFail', callback?: Callback<{ publishId: number, reason: number }>): void;

    /**
     * 注册设备管理服务死亡监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'serviceDie' } type - 注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。
     * @param { function } callback - 注册serviceDie的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'serviceDie', callback?: Callback<{}>)
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * 取消注册设备管理服务死亡监听。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'serviceDie' } type - 取消注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。
     * @param { function } callback - 取消注册serviceDie的回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'serviceDie', callback?: Callback<{}>)
     */
    off(type: 'serviceDie', callback?: () => void): void;
  }
}

export default deviceManager;
