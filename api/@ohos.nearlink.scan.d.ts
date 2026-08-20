/*
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
 * @file NearLink Scanning Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * This module provides the definition of the NearLink scanning mode.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace scan {
  /**
   * Starts NearLink scanning. This API uses a promise to return the result. You need to call
   * [scan.onDeviceFound]{@link scan.on} to subscribe to the scanning results. After this API initiates scanning, the
   * scanned device information is reported through the [scan.onDeviceFound]{@link scan.on} callback. After the scanning
   * is complete, you can call [scan.stopScan]{@link scan.stopScan} to stop scanning.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ScanFilters[] | null } filters - Filter criteria for NearLink advertising. Devices that meet the filter
   *     criteria will be reported. If the filter is not enabled, **null** is passed.
   *     <br>If this parameter is set to **null**, all discoverable NearLink devices nearby will be scanned. However,
   *     this method is not recommended as it may pick up unexpected devices and increase power consumption.
   * @param { ScanOptions } [options] - Scan options. The low power consumption mode is used by default.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100042 - Empty array.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function startScan(filters: ScanFilters[] | null, options?: ScanOptions): Promise<void>;

  /**
   * Stops NearLink scanning. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function stopScan(): Promise<void>;

  /**
   * Subscribes to NearLink scanning results. This API uses an asynchronous callback to return the result.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<ScanResults[]> } callback - Callback used to return a **ScanResults** object. By default, a
   *     random address is returned for the scanning result. If the app has the system permission
   *     **ohos.permission.GET_NEARLINK_PEER_MAC**, the actual device address is returned.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onDeviceFound(callback: Callback<ScanResults[]>): void;

  /**
   * Unsubscribes from NearLink scanning results. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<ScanResults[]> } [callback] - Callback used to return a **ScanResults** object. If this parameter
   *     is specified, the current callback is unregistered. If this parameter is not specified, all callbacks
   *     corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offDeviceFound(callback?: Callback<ScanResults[]>): void;

  /**
   * Represents the scanning results.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanResults {
    /**
     * Address of the device discovered. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * RSSI of the device discovered. The value range is [–128, +127], in dBm. The value **127** is invalid.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rssi: int;
    /**
     * Advertising packet data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    data: ArrayBuffer;
    /**
     * Name of the device discovered. The value contains 0 to 30 characters.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceName: string;
    /**
     * Whether the discovered device is connectable. The value **true** indicates that the discovered device is
     * connectable, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isConnectable: boolean;
    /**
     * Type of the device discovered. This field is not returned if the device advertising information does not carry
     * the device type.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceClass?: nearlinkConstant.DeviceClass;
  }

  /**
   * Defines the scan filters
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanFilters {
    /**
     * Device address. By default, this field is not used if it is not set. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address?: string;

    /**
     * Device name. The value contains 0 to 30 characters. By default, this field is not used if it is not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceName?: string;

    /**
     * Manufacturer ID. The value range is [1, 65535]. By default, this field is not used if it is not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerId?: int;

    /**
     * Manufacturer data. By default, this field is not used if it is not set. **manufacturerId** must be set along with
     * the field.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData?: ArrayBuffer;

    /**
     * Manufacturer data mask. By default, this field is not used if it is not set. This field must be set along with
     * **manufacturerData**, and the lengths of the two fields must be the same. A bitwise AND operation is performed on
     * the mask and manufacturer data to accurately match the specified bits in the manufacturer data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerDataMask?: ArrayBuffer;

    /**
     * RSSI threshold, in dBm. The value range is
     * this threshold will be filtered out. You are advised to set the threshold within the range of
     * default, the signal strength is not filtered if this parameter is not set.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rssi?: int;
  }

  /**
   * Represents the scan options.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanOptions {
    /**
     * Scan mode. The default value is **'SCAN_MODE_LOW_POWER'**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    scanMode?: ScanMode;

    /**
     * Scan duration, in seconds. The value range is
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    duration?: int;
  }

  /**
   * Enumerates the scan modes.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ScanMode {
    /**
     * Low-power scan mode. The scan frequency and power consumption are low. This is the default value.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * Balanced scan mode. The scan frequency and power consumption are medium.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * High-power scan mode. The scan frequency is high, and the power consumption is high.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_LOW_LATENCY = 2
  }
}
export default scan;