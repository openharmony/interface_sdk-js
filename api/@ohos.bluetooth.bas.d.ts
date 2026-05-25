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
 * @file
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type common from './@ohos.bluetooth.common';

/**
 * Provide methods to access BAS(Battery Service)-related capabilities.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */

declare namespace bas {
  /**
   * Bluetooth device address.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * Determine whether the local device can obtain the battery level of the remote device.
   *
   * @returns { boolean } Returns true if the battery service is enabled; returns false otherwise.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isBasSupported(): boolean;

  /**
   * Get remote device battery information.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BluetoothAddress } deviceId - Indicates address of peer device.
   * @returns { Promise<BatteryInfo> } Returns the battery info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Remote device profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2901003 - Connection not established.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getRemoteDeviceBatteryInfo(deviceId: BluetoothAddress): Promise<BatteryInfo>;

  /**
   * Subscribe the event of battery state changed from a remote device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } callback - Callback used to listen.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onBatteryChange(callback: Callback<BatteryInfo>): void;

  /**
   * Unsubscribe the event of battery state changes from a remote device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } [callback] - Callback used to listen.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Only can be called on phone, tablet, and 2in1 devices.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offBatteryChange(callback?: Callback<BatteryInfo>): void;

  /**
   * Describe the contents of the battery information.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BatteryInfo {
    /**
     * Identify of the discovery device.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId: BluetoothAddress;
    /**
     * battery value of the device. {@code -1} means no power information.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    batteryLevel: int;
  }
}

export default bas;