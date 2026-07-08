/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * The **batteryInfo** module provides APIs for querying the charger type, battery health status, and battery charging
 * status.
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @atomicservice [since 12]
 * @since 6 dynamic
 */
declare namespace batteryInfo {
  /**
   * Sets the battery configuration based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @param { string } sceneValue - Scenario value. The value must be a string.
   * @returns { number } Operation result. The value **0** indicates that the operation is successful, and a non-zero
   *     value indicates the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): number;

  /**
   * Obtains the battery configuration based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @returns { string } Operation result. The battery configuration is returned if the operation is successful.
   *     Otherwise, **""** is returned.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * Checks whether the battery configuration is enabled based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @returns { boolean } Operation result. The value **true** indicates that the charging scenario is supported, and
   *     the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function isBatteryConfigSupported(sceneName: string): boolean;

  /**
   * Battery state of charge (SoC) of the device, in unit of percentage, which ranges from 0 to 100.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  const batterySOC: number;

  /**
   * Battery charging state of the current device.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  const chargingStatus: BatteryChargeState;

  /**
   * Battery health status of the device.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const healthStatus: BatteryHealthState;

  /**
   * Charger type of the device.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const pluggedType: BatteryPluggedType;

  /**
   * Battery voltage of the device, in unit of microvolt.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const voltage: number;

  /**
   * Battery technology of the device.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const technology: string;

  /**
   * Battery temperature of the device, in unit of 0.1°C.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const batteryTemperature: number;

  /**
   * Whether the battery is supported or present. The value **true** means that the battery is supported or present;
   * **false** means the opposite.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 7 dynamic
   */
  const isBatteryPresent: boolean;

  /**
   * Battery level of the device.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  const batteryCapacityLevel: BatteryCapacityLevel;

  /**
   * Estimated time for fully charging the current device, in unit of milliseconds. This is a system API.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const estimatedRemainingChargeTime: number;

  /**
   * Total battery capacity of the device, in unit of mAh. This is a system API.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const totalEnergy: number;

  /**
   * Battery current of the device, in unit of mA.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 12 dynamic
   */
  const nowCurrent: number;

  /**
   * Remaining battery capacity of the device, in unit of mAh. This is a system API.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const remainingEnergy: number;

  /**
   * Enumerates charger types.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  export enum BatteryPluggedType {
    /**
     * Unknown charger type.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    NONE,
    /**
     * AC charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    AC,
    /**
     * USB charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    USB,
    /**
     * Wireless charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    WIRELESS
  }

  /**
   * Enumerates charging states.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  export enum BatteryChargeState {
    /**
     * Unknown state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    NONE,
    /**
     * The battery is being charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    ENABLE,
    /**
     * The battery is not being charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    DISABLE,
    /**
     * The battery is fully charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    FULL
  }

  /**
   * Enumerates battery health states.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  export enum BatteryHealthState {
    /**
     * Unknown state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    UNKNOWN,
    /**
     * The battery is in the healthy state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    GOOD,
    /**
     * The battery is overheated.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    OVERHEAT,
    /**
     * The battery voltage is over high.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    OVERVOLTAGE,
    /**
     * The battery temperature is low.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    COLD,
    /**
     * The battery is dead.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    DEAD
  }

  /**
   * Enumerates battery levels.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  export enum BatteryCapacityLevel {
    /**
     * Unknown battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 dynamic
     */
    LEVEL_NONE,
    /**
     * Full battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_FULL,
    /**
     * High battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_HIGH,
    /**
     * Normal battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_NORMAL,
    /**
     * Low battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_LOW,
    /**
     * Alarm battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_WARNING,
    /**
     * Ultra-low battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_CRITICAL,
    /**
     * Power-down battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_SHUTDOWN
  }

  /**
   * Enumerates keys for querying the additional information about the **COMMON_EVENT_BATTERY_CHANGED** event.
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  export enum CommonEventBatteryChangedKey {
    /**
     * Remaining battery level in percentage.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_SOC = 'soc',
    /**
     * Battery charging status of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_CHARGE_STATE = 'chargeState',
    /**
     * Battery health status of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_HEALTH_STATE = 'healthState',
    /**
     * Type of the charger connected to the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_PLUGGED_TYPE = 'pluggedType',
    /**
     * Battery voltage of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_VOLTAGE = 'voltage',
    /**
     * Battery technology of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_TECHNOLOGY = 'technology',
    /**
     * Battery temperature of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_TEMPERATURE = 'temperature',
    /**
     * Whether the battery is supported by the device or installed.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_PRESENT = 'present',
    /**
     * Battery level of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_CAPACITY_LEVEL = 'capacityLevel'
  }
}

export default batteryInfo;