/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file This module provides the capabilities for device perception.
 * @kit DistributedServiceKit
 * @since 26.0.1 dynamic&static
 */

/**
 * **softbusBase**模块提供设备感知的API，包括启动感知和停止感知。
 * 广告、启动和停止感知扫描、广告主切换到高频、获取
 * 发现的设备列表。通过这些API，系统应用程序可以在感知中携带自定义负载
 * 广告以唤醒周围的协作设备，扫描以发现周围的感知设备。
 *
 * @syscap SystemCapability.Communication.SoftBus.Core
 * @systemapi this method can be used only by system applications.
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare namespace softbusBase {

  /**
   * 定义感知业务类型。
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export enum PerceptionType {
    /**
     * 协作唤醒。该类型的感知广告或扫描用于跨设备协同
     * 唤醒。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_TYPE_COLLABORATIVE_WAKE = 0
  }

  /**
   * 定义感知扫描的保活周期级别。级别越高，保活周期越短。
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export enum PerceptionCycle {
    /**
     * 低周期。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_LOW = 0,

    /**
     * 中周期。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_MEDIUM = 1,

    /**
     * 高周期。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_HIGH = 2
  }

  /**
   * 定义感知扫描发现的设备信息，包括设备类型、设备ID、自定义
   * 广告中携带的数据。
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export interface PerceptionDeviceInfo {
    /**
     * 设备类型。整数形式。具体值以系统定义为准。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceType: int;

    /**
     * 设备ID，二进制数据，格式为**ArrayBuffer**。长度为6字节。
     * 字节。字节是以网络字节序(big-endian)。
     * 最大长度为6。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceId: ArrayBuffer;

    /**
     * 广告中携带的自定义数据，为ArrayBuffer格式的二进制数据。长度与
     * 发现设备的广告中携带的自定义数据的长度。
     * 个字节。
     * 最大长度为5。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    customData: ArrayBuffer;
  }

  /**
   * 启动感知广播或更新当前所有者的广告中携带的自定义负载。
   * 广播开始，周围正在扫描的设备可以发现当前设备。
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @param { ArrayBuffer } [customData] - 广播中携带的自定义负载。最多可以是5个字节
   *     一次携带。该数据结构由应用层协议定义。如果长度超过5
   *     字节，则抛出错误。默认为空的ArrayBuffer。
   *     <br>最大长度为5。默认值：默认为空的ArrayBuffer。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function startPerceptionAdv(type: PerceptionType, customData?: ArrayBuffer): Promise<void>;

  /**
   * 将活跃感知广播主切换为高频，持续10s。高频期后
   * 到期后，广播会自动恢复到之前的频率。自定义负载可以在
   * 同样的时间。
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @param { ArrayBuffer } [customData] - 广告中携带的自定义负载。该数据结构定义如下：
   *     应用层协议。如果长度超过5字节，则会抛出错误。
   *     <br>最大长度为5。默认值：一个空的ArrayBuffer。
   *     <br>The maximum length is 5. Default value: An empty ArrayBuffer.
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function setPerceptionAdvHighFreq(type: PerceptionType, customData?: ArrayBuffer): Promise<void>;

  /**
   * 停止当前所有者的感知广播。停止广播后，周边设备无法
   * 通过扫描发现当前设备。
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function stopPerceptionAdv(type: PerceptionType): Promise<void>;

  /**
   * 开始对当前owner进行感知扫描。启动扫描后，周围的设备
   * 广播可以被发现。发现的设备可以通过调用
   * [getPerceptionDeviceList]{@link softbusBase.getPerceptionDeviceList}.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @param { PerceptionCycle } cycle - 保活周期级别。级别越高，保活周期越短。
   *     详细信息请参见{@link PerceptionCycle}。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function startPerceptionScan(type: PerceptionType, cycle: PerceptionCycle): Promise<void>;

  /**
   * 停止感知扫描，清除当前所有者的已发现设备列表。扫描后是
   * 停止，以前发现的设备列表将被清除，并且无法再通过调用
   * [getPerceptionDeviceList]{@link softbusBase.getPerceptionDeviceList}.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function stopPerceptionScan(type: PerceptionType): Promise<void>;

  /**
   * 获取感知扫描发现的设备列表。在调用该接口之前，请先调用
   * [startPerceptionScan]{@link softbusBase.startPerceptionScan}开始扫描。停止扫描后
   * 调用[stopPerceptionScan]{@link softbusBase.stopPerceptionScan}，清除已发现设备列表。
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - 感知业务类型。详细信息请参见{@link PerceptionType}。
   * @returns { Promise<PerceptionDeviceInfo[]> } Promise用于返回感知发现的设备列表
   *     扫描。如果未发现任何设备，或在调用之前，返回空数组
   *     [startPerceptionScan]{@link softbusBase.startPerceptionScan}。
   * @throws { BusinessError } 201 - Permission denied, need to acquire ohos.permission.ACCESS_SOFTBUS_SYS_HAP and
   *     ohos.permission.DISTRIBUTED_DATASYNC.
   * @throws { BusinessError } 202 - Permission denied, A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 2000001 - Internal error. An unexpected system error occurred.
   * @throws { BusinessError } 2000002 - Caller error. The caller did not call the API in the specified order.
   * @throws { BusinessError } 2000003 - Temporary error. The request failed due to a temporary error and can be
   *     retried.
   * @throws { BusinessError } 2006001 - Underlying module error. The request failed due to an error in another
   *     underlying module and can be retried after a period of time.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getPerceptionDeviceList(type: PerceptionType): Promise<PerceptionDeviceInfo[]>;
}
export default softbusBase;