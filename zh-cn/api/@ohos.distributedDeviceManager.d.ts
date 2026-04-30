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
 * 本模块提供分布式设备管理能力。
 * 应用可调用接口实现如下功能：
 * 
 * - 注册和解除注册设备上下线变化监听。
 * - 发现周边不可信设备。
 * - 认证和取消认证设备。
 * - 查询可信设备列表。
 * - 查询本地设备信息，包括设备名称，设备类型和设备标识等。
 *
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace distributedDeviceManager {

  /**
   * 分布式设备基本信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceBasicInfo {
    /**
     * 设备标识符。实际值为udid-hash与appid和盐值基于sha256方式进行混淆后的值。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * [设备类型]{@link distributedDeviceManager.DeviceManager.getDeviceType}。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * 设备网络标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    networkId?: string;
  }

  /**
   * 表示设备状态。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceStateChange {
    /**
     * 设备物理上线，此时状态未知，在状态更改为可用之前，分布式业务无法使用。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * 设备可用状态，表示设备间信息已在分布式数据中同步完成，可以运行分布式业务。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    AVAILABLE = 1,

    /**
     * 设备物理下线，此时状态未知。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 2,
  }

  /**
   * 设备状态改变结果信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceStateChangeResult {
    /**
     * 设备状态信息。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    action: DeviceStateChange;
    /**
     * 分布式设备基本信息。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * 设备名字改变结果信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceNameChangeResult {
    /**
     * 设备名字。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceName: string;
  }

  /**
   * 设备发现失败原因。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoveryFailureResult {
    /**
     * 失败错误号。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    reason: int;
  }

  /**
   * 设备发现成功，发现的设备信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoverySuccessResult {
    /**
     * 分布式设备基本信息。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * 分布式设备基本信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 23 static
   */
  interface ReplyResult {
    /**
     * 认证用户界面状态改变信息。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 23 static
     */
    param: string;
  }

  /**
   * DeviceManager 服务进程退出信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface ServiceDieData {}

  /**
   * 认证设备结果信息。
   *
   * @interface BindTargetResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface BindTargetResult {
    /**
     * 设备Id。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * 设备信息过滤器选项。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfoFilterOptions {
    /**
     * 表示是否需要实时从云端获取设备列表。
     * 
     * - false：表示从设备获取。
     * - true：表示从云端获取。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isCloud : boolean,
    /**
     * 表示获取指定deviceId的设备信息，deviceId一般为设备的UDID，如设备无UDID，则取其MAC或SN作为deviceId。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceIdList?: Array<string>;
  }

  /**
   * 服务配置信息。根据云端返回的数据填充。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface ServiceProfileInfo {
    /**
     * 设备ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 服务ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceId: string;

    /**
     * 服务类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceType: string;

    /**
     * 服务数据。字符长度不超过1000个字符。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    data?: string;
  }

  /**
   * 设备信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfo {
    /**
     * 设备ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 设备序列号。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceSn: string;

    /**
     * MAC地址。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    mac: string;

    /**
     * 设备型号。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    model: string;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * 制造商。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 设备所属产品ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * 设备所属产品子ID。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * SDK版本。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sdkVersion: string;

    /**
     * 蓝牙BLE的MAC地址。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    bleMac: string;

    /**
     * 蓝牙BR的MAC地址。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    brMac: string;

    /**
     * Starflash的MAC地址。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sleMac: string;

    /**
     * 固件版本。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    firmwareVersion: string;

    /**
     * 硬件版本。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    hardwareVersion: string;

    /**
     * 软件版本。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    softwareVersion: string;

    /**
     * 协议类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    protocolType: int;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setupType: int;

    /**
     * 已注册设备标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseDeviceId: string;

    /**
     * 已注册用户标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseUserId: string;

    /**
     * 注册时间。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    registerTime: string;

    /**
     * 修改时间。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * 分享时间。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    shareTime: string;

    /**
     * 是否为本地设备。
     * 
     * - false：表示非本地设备，即被查询的其他设备。
     * - true：表示本地设备，即当前正在使用该接口的设备。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isLocalDevice: boolean;

    /**
     * 服务配置信息列表。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    services?: Array<ServiceProfileInfo>;

    /**
     * 设备所属的产品名称。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productName?: string;

    /**
     * 设备所属产品的内部型号。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * 设备图标信息过滤选项。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfoFilterOptions {
    /**
     * 设备所属产品ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * 设备所属产品子ID。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * 图片类型。固定值为"ID"，表示产品实物图。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * 图片规格名称。取值范围：
     * 
     * - lg：大图，尺寸为1016064px。
     * - sm：小图，尺寸为65536px。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * 设备所属产品的内部型号。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * 设备图标信息。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfo {
    /**
     * 设备所属产品ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * 设备所属产品子ID。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * 图片类型。固定值为"ID"，表示产品实物图。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * 图片规格名称。取值范围：
     * 
     * - lg：大图，尺寸为1016064px。
     * - sm：小图，尺寸为65536px。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * URL。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * 图标。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    icon: ArrayBuffer;

    /**
     * 设备所属产品的内部型号。默认为空。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * 表示心跳广播策略。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum StrategyForHeartbeat {
    /**
     * 临时停止心跳广播，超时后自动恢复。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    TEMP_STOP_HEARTBEAT = 100,
    /**
     * 开始心跳广播。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    START_HEARTBEAT = 101,
  }

  /**
   * 设备网络ID过滤器选项。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface NetworkIdQueryFilter {
    /**
     * 已注册设备标识。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    wiseDeviceId : string;

    /**
     * 设备在线状态，包括
     * 
     * - 0：表示设备处于离线状态。
     * - 1：表示设备处于在线状态。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    onlineStatus : int,
  }

  /**
   * 用于分布式设备识别的结构体。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface DeviceIdentification {
    /**
     * 应用获取的匿名化设备ID。
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    deviceId: string;

    /**
     * 设备唯一标识。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udid: string;
  }

  /**
   * 创建一个设备管理实例。设备管理实例是分布式设备管理方法的调用入口。用于获取可信设备和本地设备的相关信息。
   *
   * @param { string } bundleName - 指示应用程序的Bundle名称。长度范围1~255字符。
   * @returns { DeviceManager } 返回设备管理器对象实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter type;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function createDeviceManager(bundleName: string): DeviceManager;

  /**
   * 设备管理实例不再使用后，通过该方法释放DeviceManager实例。
   *
   * @param { DeviceManager } deviceManager - 设备管理器对象实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 11600101 - Failed to execute the function.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function releaseDeviceManager(deviceManager: DeviceManager): void;

  /**
   * 设备管理实例，用于获取可信设备和本地设备的相关信息。在调用DeviceManager的方法前，需要先通过createDeviceManager构建一个DeviceManager实例dmInstance。
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceManager {

    /**
     * 同步获取所有可信设备列表。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Array<DeviceBasicInfo> } 返回可信设备列表。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceListSync(): Array<DeviceBasicInfo>;

    /**
     * 获取所有可信设备列表。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<Array<DeviceBasicInfo>> } callback - 获取所有可信设备列表的回调，返回设备信息。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void;

    /**
     * 获取所有可信设备列表。使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<Array<DeviceBasicInfo>> } Promise实例，用于获取异步返回结果。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>;

    /**
     * 获取本地设备网络标识。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } 返回本地设备网络标识。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceNetworkId(): string;

    /**
     * 获取本地设备名称。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } 返回本地设备名称。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceName(): string;

    /**
     * 获取本地设备类型。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { int } <!--RP1-->返回本地设备类型。<!--RP1End-->
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceType(): int;

    /**
     * 获取本地设备id，实际值为udid-hash与appid和盐值基于sha256方式进行混淆后的值。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } 返回本地设备id。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceId(): string;

    /**
     * 通过指定设备的网络标识获取该设备名称。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - 设备的网络标识。长度范围1~255字符。
     * @returns { string } 返回指定设备名称。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceName(networkId: string): string;

    /**
     * 通过指定设备的网络标识获取该设备类型。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - 设备的网络标识。长度范围1~255字符。
     * @returns { int } <!--RP2-->返回指定设备类型。<!--RP2End-->
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceType(networkId: string): int;

    /**
     * 发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。wifi场景要求同局域网。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { object } discoverParam - 发现标识。 标识发现的目标类型。
     *     <br>discoverTargetType: 发现目标默认为设备，值为1。
     * @param { object } filterOptions - 发现设备过滤信息。可选，默认为undefined，发现未上线设备。会携带以下key值：
     *     <br>availableStatus(0-1)：仅发现设备可信，值为0表示设备不可信。
     *     <br />-0：设备离线，客户端需要通过调用bindTarget绑定设备。
     *     <br />-1：设备已在线，客户端可以进行连接。
     *     <br>discoverDistance(0-100)：发现距离本地一定距离内的设备，单位为cm。wifi场景不传该参数。
     *     <br>authenticationStatus(0-1)：根据不同的认证状态发现设备：
     *     <br />-0：设备未认证。
     *     <br />-1：设备已认证。
     *     <br>authorizationType(0-2)：根据不同的授权类型发现设备：
     *     <br />-0：根据临时协商的会话密钥认证的设备。
     *     <br />-1：基于同账号密钥进行身份验证的设备。
     *     <br />-2：基于不同账号凭据密钥认证的设备。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; }): void;

    /**
     * 发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。wifi场景要求同局域网。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Record<string, int | string> } discoverParam - 发现标识。 标识发现的目标类型。
     *     <br>discoverTargetType: 发现目标默认为设备，值为1。
     * @param { Record<string, int | string> } [filterOptions] - 发现设备过滤信息。可选，默认为undefined，发现未上线设备。
     *     会携带以下key值：
     *     <br>availableStatus(0-1)：仅发现设备可信，值为0表示设备不可信。
     *     <br />-0：设备离线，客户端需要通过调用bindTarget绑定设备。
     *     <br />-1：设备已在线，客户端可以进行连接。
     *     <br>discoverDistance(0-100)：发现距离本地一定距离内的设备，单位为cm。wifi场景不传该参数。
     *     <br>authenticationStatus(0-1)：根据不同的认证状态发现设备：
     *     <br />-0：设备未认证。
     *     <br />-1：设备已认证。
     *     <br>authorizationType(0-2)：根据不同的授权类型发现设备：
     *     <br />-0：根据临时协商的会话密钥认证的设备。
     *     <br />-1：基于同账号密钥进行身份验证的设备。
     *     <br />-2：基于不同账号凭据密钥认证的设备。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    startDiscovering(discoverParam: Record<string, int | string>, filterOptions?: Record<string, int | string>): void;

    /**
     * 停止发现周边设备。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
     *     call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    stopDiscovering(): void;

    /**
     * 认证设备。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - 设备标识。长度范围1~255字符。
     * @param { object } bindParam - 认证参数。由开发者自行决定传入的键值对。默认会携带以下key值：
     *     <br>bindType 此值是绑定的类型，必填。
     *     <br />-1：PIN码。
     *     <br>targetPkgName 绑定目标的包名。
     *     <br>appName 尝试绑定目标的应用程序名称。
     *     <br>appOperation 应用程序要绑定目标的原因。
     *     <br>customDescription 操作的详细说明。
     * @param { AsyncCallback<{deviceId: string;}> } callback - 认证结果回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>): void;

    /**
     * 认证设备。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - 设备标识。长度范围1~255字符。
     * @param { Record<string, int | string> } bindParam - 认证参数。由开发者自行决定传入的键值对。
     *     默认会携带以下key值：
     *     <br>bindType 此值是绑定的类型，必填。
     *     <br />-1：PIN码。
     *     <br>targetPkgName 绑定目标的包名。
     *     <br>appName 尝试绑定目标的应用程序名称。
     *     <br>appOperation 应用程序要绑定目标的原因。
     *     <br>customDescription 操作的详细说明。
     * @param { AsyncCallback<BindTargetResult> } callback - 认证结果回调。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    bindTarget(deviceId: string, bindParam: Record<string, int | string>, callback: AsyncCallback<BindTargetResult>): void;

    /**
     * 解除认证设备。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - 设备标识。长度范围1~255字符。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    unbindTarget(deviceId: string): void;

    /**
     * 回复用户UI操作行为。此接口只能被devicemanager的PIN码hap使用。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } action - 用户操作动作。
     *     <br />- 0：允许授权。
     *     <br />- 1：取消授权。
     *     <br />- 2：授权框用户操作超时。
     *     <br />- 3：取消pin码框展示。
     *     <br />- 4：取消pin码输入框展示。
     *     <br />- 5：pin码输入框确定操作。
     * @param { string } actionResult - 表示用户操作结果，长度范围1~255字符。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified actionResult is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     * @since 23 static
     */
    replyUiAction(action: int, actionResult: string): void;

    /**
     * 注册设备状态回调，以便在设备状态发生变化时根据应用捆绑包名通知应用。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - 注册设备状态回调，固定为deviceStateChange。
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback - 指示要注册的设备状态回调，返回设备状态和设备信息。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * 注册设备状态回调，以便在设备状态发生变化时根据应用捆绑包名通知应用。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } callback
     *     指示要注册的设备状态回调，返回设备状态和设备信息。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceStateChange(callback: Callback<DeviceStateChangeResult>): void;

    /**
     * 取消注册设备状态回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - 根据应用程序的包名取消注册设备状态回调，固定为deviceStateChange。
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback - 指示要取消注册的设备状态回调，返回设备状态和设备信
     *     息。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * 取消注册设备状态回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } [callback]
     *     指示要取消注册的设备状态回调，返回设备状态和设备信息。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceStateChange(callback?: Callback<DeviceStateChangeResult>): void;

    /**
     * 注册发现设备成功回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - 注册设备发现回调，以便在发现周边设备时通知应用程序，固定为discoverSuccess。
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - 注册设备发现的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * 注册发现设备成功回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } callback - 注册设备发现的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverSuccess(callback: Callback<DiscoverySuccessResult>): void;

    /**
     * 取消注册设备发现成功回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - 取消注册设备发现回调，固定为discoverSuccess。
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - 指示要取消注册的设备发现回调，返回设备状态和设备信息。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverSuccess', callback?: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * 取消注册设备发现成功回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } [callback] - 指示要取消注册的设备发现回调，返回设备状态和设备信息。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverSuccess(callback?: Callback<DiscoverySuccessResult>): void;

    /**
     * 注册设备名称变更回调，以便在设备名称改变时通知应用程序。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - 注册设备名称改变回调，以便在设备名称改变时通知应用程序，固定为deviceNameChange。
     * @param { Callback<{ deviceName: string; }> } callback - 注册设备名称改变的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceNameChange', callback: Callback<{ deviceName: string; }>): void;

    /**
     * 注册设备名称变更回调，以便在设备名称改变时通知应用程序。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } callback - 注册设备名称改变的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceNameChange(callback: Callback<DeviceNameChangeResult>): void;

    /**
     * 取消注册设备名称变更回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - 取消注册设备名称改变回调，固定为deviceNameChange。
     * @param { Callback<{ deviceName: string; }> } callback - 指示要取消注册设备名称改变的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceNameChange', callback?: Callback<{ deviceName: string; }>): void;

    /**
     * 取消注册设备名称变更回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } [callback] - 指示要取消注册设备名称改变的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceNameChange(callback?: Callback<DeviceNameChangeResult>): void;

    /**
     * 注册设备发现失败回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - 注册设备发现失败回调，以便在发现周边设备失败时通知应用程序，固定为discoverFailure。
     * @param { Callback<{ reason: int; }> } callback - 注册设备发现失败的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverFailure', callback: Callback<{ reason: number; }>): void;

    /**
     * 注册设备发现失败回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } callback
     *     注册设备发现失败的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverFailure(callback: Callback<DiscoveryFailureResult>): void;

    /**
     * 取消注册设备发现失败回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - 取消注册设备发现失败回调，固定为discoverFailure。
     * @param { Callback<{ reason: int; }> } callback - 指示要取消注册的设备发现失败回调。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverFailure', callback?: Callback<{ reason: int; }>): void;

    /**
     * 取消注册设备发现失败回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } [callback]
     *     指示要取消注册的设备发现失败回调。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverFailure(callback?: Callback<DiscoveryFailureResult>): void;

    /**
     * 注册设备管理服务死亡回调，以便在服务死亡时通知应用程序。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - 注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。
     * @param { Callback<{}> } callback - 注册serviceDie的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * 注册设备管理服务死亡回调，以便在服务死亡时通知应用程序。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } callback - 注册serviceDie的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onServiceDie(callback: Callback<ServiceDieData>): void;

    /**
     * 取消注册设备管理服务死亡回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - 取消注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。
     * @param { Callback<{}> } callback - 取消注册serviceDie的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * 取消注册设备管理服务死亡回调。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } [callback] - 取消注册serviceDie的回调方法。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offServiceDie(callback?: Callback<ServiceDieData>): void;

    /**
     * 回复UI操作结果回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'replyResult' } type - 注册的设备管理器 UI 状态回调，以便在状态改变时通知应用，固定为replyResult。
     * @param { Callback<{ param: string; }> } callback - 指示要注册的设备管理器 UI 状态回调，返回UI状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     */
    on(type: 'replyResult', callback: Callback<{ param: string; }>): void;

    /**
     * 回复UI操作结果回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } callback - 指示要注册的设备管理器 UI 状态回调，返回UI状态。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    onReplyResult(callback: Callback<ReplyResult>): void;

    /**
     * 取消回复UI操作结果回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'replyResult' } type - 取消注册的设备管理器 UI 状态回调，固定为replyResult。
     * @param { Callback<{ param: string; }> } callback - 指示要取消注册的设备管理器 UI 状态，返回UI状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     */
    off(type: 'replyResult', callback?: Callback<{ param: string; }>): void;

    /**
     * 取消回复UI操作结果回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } [callback] - 指示要取消注册的设备管理器 UI 状态，返回UI状态。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    offReplyResult(callback?: Callback<ReplyResult>): void;

    /**
     * 获取同账号下全部的设备列表，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceProfileInfoFilterOptions } filterOptions - 查询过程中使用的过滤条件。
     * @returns { Promise<Array<DeviceProfileInfo>> } Promise实例，返回设备列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getDeviceProfileInfoList(filterOptions: DeviceProfileInfoFilterOptions): Promise<Array<DeviceProfileInfo>>;

    /**
     * 业务调用更新设备列表，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Array<DeviceProfileInfo> } deviceProfileInfoList - 需要更新的设备列表。
     * @returns { Promise<int> } 操作结果，0表示本次调用成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    putDeviceProfileInfoList(deviceProfileInfoList: Array<DeviceProfileInfo>): Promise<int>;

    /**
     * 获取设备图标，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceIconInfoFilterOptions } filterOptions - 查询过程中使用的过滤条件。
     * @returns { Promise<DeviceIconInfo> } Promise实例，返回设备图标信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceIconInfo(filterOptions: DeviceIconInfoFilterOptions): Promise<DeviceIconInfo>;

    /**
     * 获取本机指定长度（字节数）的显示名，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } maxNameLength - 可显示的设备名称长度（字节数），取值范围为[18，100]，为0时表示不限制。
     * @returns { string } 指定名称长度最大字节数的本机设备显示名。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalDisplayDeviceName(maxNameLength: int): Promise<string>;

    /**
     * 修改本机设备名称，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceName - 自定义设备名称。字符串长度范围1~255。
     * @returns { Promise<int> } 操作结果，0表示本次调用成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setLocalDeviceName(deviceName: string): Promise<int>;

    /**
     * 设置配件设备名称，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceId - 配件设备的UDID，没有UDID的设备取MAC或SN，优先取SN。
     * @param { string } deviceName - 自定义设备名称。字符串长度范围1~255。
     * @returns { Promise<int> } 操作结果，0表示本次调用成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setRemoteDeviceName(deviceId: string, deviceName: string): Promise<int>;

    /**
     * 设置心跳广播策略。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { StrategyForHeartbeat } policy - 心跳广播策略。
     * @param { int } delayTime - 临时关闭心跳广播的时长，单位为：ms，取值范围1000ms到15000ms。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setHeartbeatPolicy(policy: StrategyForHeartbeat, delayTime: int): void;

    /**
     * 系统重置还原网络设置时，还原本机设备名。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     * @deprecated since 24
     * @useinstead distributedDeviceManager.DeviceManager.restoreLocalDeviceName
     */
    restoreLocalDeivceName(): void;

    /**
     * 获取符合条件的网络设备ID列表。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { NetworkIdQueryFilter } filterOptions - 查询过程中使用的过滤条件。
     * @returns { Promise<Array<string>> } Promise实例，返回设备网络ID的列表。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Parameter verification failed;
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceNetworkIdList(filterOptions: NetworkIdQueryFilter): Promise<Array<string>>;

    /**
     * 根据设备ID查询设备标识。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @param { Array<string> } deviceIds - 应用程序可以获取的设备ID列表。
     * @returns { Array<DeviceIdentification> } DeviceIdentification列表。
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getIdentificationByDeviceIds(deviceIds: Array<string>): Array<DeviceIdentification>;

    /**
     * 系统重置还原网络设置时，还原本机设备名。
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    restoreLocalDeviceName(): void;

    /**
     * 通过设备网络ID查询设备操作系统类型。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM
     * @param { string } networkId - The device's network ID
     * @returns { int } - Returns the device operating system type.
     *     Possible return:
     *     1. 10: Operating system based on OpenHarmony
     *     2. 11: Operating system not based on OpenHarmony
     *     3. -1: Unknown
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600110 - Invalid network ID.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsTypeByNetworkId(networkId: string): int;
  }
}

export default distributedDeviceManager;