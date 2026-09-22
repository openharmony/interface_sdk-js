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
 * The **softbusBase** module provides APIs for device perception, including starting and stopping perception
 * advertising, starting and stopping perception scanning, switching an advertiser to high frequency, and obtaining
 * the list of discovered devices. With these APIs, a system application can carry a custom payload in perception
 * advertising to wake up surrounding collaborative devices, and scan to discover surrounding perception devices.
 *
 * @syscap SystemCapability.Communication.SoftBus.Core
 * @systemapi this method can be used only by system applications.
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare namespace softbusBase {

  /**
   * Defines the perception service type.
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export enum PerceptionType {
    /**
     * Collaborative wake. The perception advertising or scanning of this type is used for cross-device collaborative
     * wakeup.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_TYPE_COLLABORATIVE_WAKE = 0
  }

  /**
   * Defines the keepalive cycle level for perception scanning. A higher level indicates a shorter keepalive cycle.
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export enum PerceptionCycle {
    /**
     * Low cycle.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_LOW = 0,

    /**
     * Medium cycle.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_MEDIUM = 1,

    /**
     * High cycle.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PERCEPTION_CYCLE_HIGH = 2
  }

  /**
   * Defines the device information discovered by perception scanning, including the device type, device ID, and custom
   * data carried in the advertising.
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi this method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export interface PerceptionDeviceInfo {
    /**
     * Device type. The specific value is subject to the system definition.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceType: int;

    /**
     * Device ID, which is binary data in **ArrayBuffer** format. The bytes are in network byte order (big-endian).
     * The maximum length is 6 bytes.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceId: ArrayBuffer;

    /**
     * Custom data carried in the advertising, which is binary data in ArrayBuffer format. The length is the same as
     * the length of the custom data carried in the advertising of the discovered device.
     * bytes.
     * The maximum length is 5 bytes.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi this method can be used only by system applications.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    customData: ArrayBuffer;
  }

  /**
   * Starts perception advertising or updates the custom payload carried in the advertising of the current owner. After
   * the advertising is started, surrounding devices that are scanning can discover the current device.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @param { ArrayBuffer } [customData] - Custom payload carried in the advertising. The data structure is defined by
   *     the application layer protocol. If the length exceeds 5 bytes, an error is thrown.
   *     <br>The maximum length is 5 bytes. Default value: An empty ArrayBuffer.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Switches an active perception advertiser to high frequency for 10 seconds. After the high-frequency period
   * expires, the advertising automatically restores to the previous frequency. The custom payload can be updated at the
   * same time.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @param { ArrayBuffer } [customData] - Custom payload carried in the advertising. The data structure is defined by
   *     the application layer protocol. If the length exceeds 5 bytes, an error is thrown.
   *     <br>The maximum length is 5 bytes. Default value: An empty ArrayBuffer.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Stops perception advertising of the current owner. After the advertising is stopped, surrounding devices can no
   * longer discover the current device through scanning.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Starts perception scanning for the current owner. After the scanning is started, surrounding devices that are
   * advertising can be discovered. The discovered devices can be obtained by calling
   * [getPerceptionDeviceList]{@link softbusBase.getPerceptionDeviceList}.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @param { PerceptionCycle } cycle - Keepalive cycle level. A higher level indicates a shorter keepalive cycle.
   *     For details, see {@link PerceptionCycle}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Stops perception scanning and clears the discovered device list of the current owner. After the scanning is
   * stopped, the previously discovered device list is cleared and can no longer be obtained by calling
   * [getPerceptionDeviceList]{@link softbusBase.getPerceptionDeviceList}.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the list of devices discovered by perception scanning. Before calling this API, call
   * [startPerceptionScan]{@link softbusBase.startPerceptionScan} to start scanning. After the scanning is stopped by
   * calling [stopPerceptionScan]{@link softbusBase.stopPerceptionScan}, the discovered device list is cleared.
   *
   * @permission ohos.permission.ACCESS_SOFTBUS_SYS_HAP and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { PerceptionType } type - Perception service type. For details, see {@link PerceptionType}.
   * @returns { Promise<PerceptionDeviceInfo[]> } Promise used to return the list of devices discovered by perception
   *     scanning. Returns an empty array if no devices are discovered or before calling
   *     [startPerceptionScan]{@link softbusBase.startPerceptionScan}.
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