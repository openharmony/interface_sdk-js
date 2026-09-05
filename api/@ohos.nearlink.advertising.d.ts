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
 * @file NearLink Advertising Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * This module provides Nearlink advertising functions, including starting and stopping advertising as well as
 * subscribing to the advertising status.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 * @since 26.1.0 static
 */
declare namespace advertising {
  /**
   * Starts NearLink advertising. This API uses a promise to return the result. This API is applicable to scenarios
   * where the local device capabilities or data needs to be advertised, such as device discovery and device information
   * advertising. You can use [advertising.onAdvertisingStateChange]{@link advertising.on} to monitor the advertising
   * status.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { AdvertisingParams } advertisingParams - Advertising parameters.
   * @returns { Promise<int> } Promise used to return the advertising ID. The advertising ID is a unique ID randomly
   *     allocated. The value range is [0, 255]. Similar to
   *     [advertising.stopAdvertising]{@link advertising.stopAdvertising} and
   *     [AdvertisingStateChangeInfo]{@link advertising.AdvertisingStateChangeInfo}.advertisingId, this ID can be used
   *     to distinguish the current advertising instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>;

  /**
   * Stops NearLink advertising. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { int } advertisingId - Advertising ID, which is obtained when advertising is started. The value range is
   *     [0, 255].
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Invalid advertising ID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function stopAdvertising(advertisingId: int): Promise<void>;

  /**
   * Subscribes to the NearLink advertising state change event. This API uses an asynchronous callback to return the
   * result. When [advertising.startAdvertising]{@link advertising.startAdvertising} is called to start advertising or
   * [advertising.stopAdvertising]{@link advertising.stopAdvertising} is called to stop advertising, the callback is
   * triggered to return the corresponding advertising ID and advertising status. This API must be used in pairs with
   * [advertising.offAdvertisingStateChange]{@link advertising.off}.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to return the advertising state change
   *     information.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Unsubscribes from the NearLink advertising state change event. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Callback<AdvertisingStateChangeInfo> } [callback] - Callback used to return the advertising state change
   *     information.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Enumerates the advertising parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface AdvertisingParams {
    /**
     * Advertising settings.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    advertisingSettings: AdvertisingSettings;
    /**
     * Advertising data packet.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    advertisingData: AdvertisingData;
  }

  /**
   * Represents the advertising settings.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface AdvertisingSettings {
    /**
     * Advertising interval, in slots. The value ranges from 160 to 16777215, and the default value is **5000**. One
     * slot equals to 0.125 ms. For example, 5000 slots equal to 625 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    interval?: int;
    /**
     * Advertising transmission power. If this parameter is not specified, the default value **ADV_TX_POWER_LOW** is
     * used.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    power?: TxPowerMode;
    /**
     * Whether advertising is connectable. **true**: Advertising is connectable. **false**: Advertising is not
     * connectable. The default value is **true**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    isConnectable?: boolean;
  }

  /**
   * Represents an advertising data packet.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface AdvertisingData {
    /**
     * Service UUIDs. A UUID must contain 36 characters, including 32 hexadecimal digits and four hyphens (-). By
     * default, this field is not used if not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    serviceUuids?: string[];
    /**
     * Manufacturer data. By default, this field is not carried if it is not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    manufacturerData?: ManufacturerData[];
    /**
     * Service data. By default, this field is not carried if it is not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    serviceData?: ServiceData[];
    /**
     * Whether the advertising data contains the local device name. **true**: **yes**. **false**: **no**.
     * The default value is **false**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    includeDeviceName?: boolean;
  }

  /**
   * Represents the manufacturer data.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface ManufacturerData {
    /**
     * Manufacturer ID. The value range is [1, 65535].
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    manufacturerId: int;
    /**
     * Manufacturer data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    manufacturerData: ArrayBuffer;
  }

  /**
   * Represents the service data.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface ServiceData {
    /**
     * Service UUID. A UUID must contain 36 characters, including 32 hexadecimal digits and four hyphens (-).
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    serviceUuid: string;
    /**
     * Service data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    serviceData: ArrayBuffer;
  }

  /**
   * Enumerates the advertising transmission power modes.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  enum TxPowerMode {
    /**
     * Low power consumption mode.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    ADV_TX_POWER_LOW = 1,
    /**
     * Medium power consumption mode.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    ADV_TX_POWER_MEDIUM = 2,
    /**
     * High power consumption mode.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    ADV_TX_POWER_HIGH = 3
  }

  /**
   * Represents the advertising state change information.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface AdvertisingStateChangeInfo {
    /**
     * Advertising ID. The value range is [0, 255].
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    advertisingId: int;
    /**
     * Advertising state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    state: AdvertisingState;
  }

  /**
   * Enumerates the advertising states.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  enum AdvertisingState {
    /**
     * Advertising started.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    STARTED = 1,
    /**
     * Advertising stopped.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    STOPPED = 2
  }
}
export default advertising;