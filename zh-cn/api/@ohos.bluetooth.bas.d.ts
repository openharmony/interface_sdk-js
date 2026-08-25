/*
 * Copyright (C) 2026 Huawei Device Co., Ltd.
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
 * @file 蓝牙bas模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type common from './@ohos.bluetooth.common';

/**
 * 提供了访问BAS（Battery Service，电量服务）相关能力的方法，包括读取远端设备电量信息、监听远端设备电量信息变化等。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 * @since 26.1.0 static
 */

declare namespace bas {
  /**
   * 描述蓝牙设备地址信息的参数结构，包括地址与地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * 判断本机设备是否可以获取远端设备的电量。
   *
   * @returns { boolean } 返回true表示本机支持获取远端设备的电量；返回false表示本机不支持获取远端设备的电量。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function isBasSupported(): boolean;

  /**
   * 查询远端设备的电量信息。
   * 
   * 使用此接口前建议使用[isBasSupported]{@link bas.isBasSupported}查询本机是否支持获取远端设备的电量。
   * 只有支持蓝牙标准协议定义的电量服务（UUID：0000180F-0000-1000-8000-00805F9B34FB）的BLE远端设备才支持获取电量信息。
   * 对端蓝牙设备的电量信息变更通过[onBatteryChange]{@link bas.on}的回调结果获取。
   * 此接口支持使用对端设备的实际MAC地址和随机MAC地址获取电量信息。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BluetoothAddress } deviceId - 表示远端设备的地址信息。
   *     BluetoothAddress中的address、addressType、rawAddressType均为必选参数。
   * @returns { Promise<BatteryInfo> } Promise对象，返回远端设备的电量信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Remote Device profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2901003 - Connection not established.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getRemoteDeviceBatteryInfo(deviceId: BluetoothAddress): Promise<BatteryInfo>;

  /**
   * 订阅远端设备电量状态变化事件。
   * 
   * 只有支持蓝牙标准协议定义的电量服务（UUID：0000180F-0000-1000-8000-00805F9B34FB）的BLE远端设备才支持上报电量信息，不可与
   * [connection.on('batteryChange')]{@link @ohos.bluetooth.connection:connection.on(type: 'batteryChange', callback: Callback<BatteryInfo>)}
   * 混用。
   * 调用此接口会立即上报已连接电量服务设备的最新有效电量信息，后续仅当远端设备电量信息发生变化时上报电量信息。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } callback - 回调函数，返回电量信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function onBatteryChange(callback: Callback<BatteryInfo>): void;

  /**
   * 取消订阅远端设备电量状态变化事件。
   * 
   * 不可与
   * [connection.off('batteryChange')]{@link @ohos.bluetooth.connection:connection.off(type: 'batteryChange', callback?: Callback<BatteryInfo>)}
   * 混用。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } [callback] - 回调函数。
   *     若传参，则需与[bas.onBatteryChange]{@link bas.on}中的回调函数一致；若无传参，则取消订阅电量变化所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function offBatteryChange(callback?: Callback<BatteryInfo>): void;

  /**
   * 描述设备的电量信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface BatteryInfo {
    /**
     * 表示远端设备的地址信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    deviceId: BluetoothAddress;
    /**
     * 表示设备的电量值。取值范围为[-1, 100]，-1表示没有电量信息，单位: %。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    batteryLevel: int;
  }
}

export default bas;