/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * The **batteryStatistics** module provides APIs for querying software and hardware power consumption statistics.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.PowerManager.BatteryStatistics
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace batteryStats {
  /**
   * Enumerates power consumption types.
   *
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ConsumptionType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_INVALID = -17,

    /**
     * Power consumption of an application.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_APP = -16,

    /**
     * Power consumption of Bluetooth.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_BLUETOOTH = -15,

    /**
     * Power consumption when the CPU is idle.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_IDLE = -14,

    /**
     * Power consumption of a phone call.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_PHONE = -13,

    /**
     * Power consumption of wireless communication.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_RADIO = -12,

    /**
     * Power consumption of the screen.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_SCREEN = -11,

    /**
     * Power consumption of the user.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_USER = -10,

    /**
     * Power consumption of Wi-Fi.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_WIFI = -9,
  }

  /**
   * Obtains the power consumption information list. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<BatteryStatsInfo>> } Promise used to return the power consumption information list.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getBatteryStats(): Promise<Array<BatteryStatsInfo>>;

  /**
   * Obtains the power consumption information list. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<BatteryStatsInfo>> } callback - Callback used to return the result. If the operation
   *     is successful, **err** is undefined and **data** is the obtained Array<
   *     [BatteryStatsInfo]{@link batteryStats.BatteryStatsInfo}>. Otherwise, **err** is an error object.
   *     **AsyncCallback** has encapsulated an API of the **BatteryStatsInfo** class.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getBatteryStats(callback: AsyncCallback<Array<BatteryStatsInfo>>): void;

  /**
   * Obtains the power consumption of an application, in unit of mAh.
   *
   * @param { int } uid - Application UID.
   * @returns { double } Power consumption of the application with this UID, in unit of mAh.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getAppPowerValue(uid: int): double;

  /**
   * Obtains the proportion of the power consumption of an application.
   *
   * @param { int } uid - Application UID.
   * @returns { double } Proportion of the power consumption of an application with this UID, which ranges
   *     from 0.00 to 1.00.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getAppPowerPercent(uid: int): double;

  /**
   * Obtains the power consumption of a hardware unit according to the consumption type, in unit of mAh
   *
   * @param { ConsumptionType } type - Power consumption type. The value must be an enum.
   * @returns { double } Power consumption of the hardware unit corresponding to the power consumption type, in unit
   *     of mAh.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getHardwareUnitPowerValue(type: ConsumptionType): double;

  /**
   * Obtains the proportion of the power consumption of a hardware unit according to the power consumption type.
   *
   * @param { ConsumptionType } type - Power consumption type. The value must be an enum.
   * @returns { double } Proportion of the power consumption of the hardware unit corresponding to the power consumption
   *     type, which ranges from 0.00 to 1.00.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getHardwareUnitPowerPercent(type: ConsumptionType): double;

  /**
   * Describes the device power consumption information.
   *
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  interface BatteryStatsInfo {
    /**
     * The uid related with the power consumption info.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * The type related with the power consumption info.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    type: ConsumptionType;

    /**
     * The power consumption value(mAh).
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    power: double;
  }
}

export default batteryStats;