/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @since 23 static
 */
declare namespace batteryInfo {
  /**
   * Sets the battery configuration based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @param { string } sceneValue - Scenario value. The value must be a string.
   * @returns { int } Operation result. The value **0** indicates that the operation is successful, and a non-zero
   *     value indicates the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): int;

  /**
   * Obtains the battery configuration based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @returns { string } Operation result. The battery configuration is returned if the operation is successful.
   *     Otherwise, **""** is returned.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * Checks whether the battery configuration is enabled based on the specified scenario.
   *
   * @param { string } sceneName - Scenario name. The value must be a string.
   * @returns { boolean } Operation result. The value **true** indicates that the charging scenario is supported, and
   *     the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function isBatteryConfigSupported(sceneName: string): boolean;

  /**
   * Battery state of charge (SoC) of the device, in unit of percentage, which ranges from 0 to 100.
   *
   * @returns { int } Returns the battery state of charge (SoC) of the device in unit of percentage, which ranges
   *     from 0 to 100.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batterySOC(): int;

  /**
   * Battery charging state of the current device.
   *
   * @returns { BatteryChargeState } Returns the battery charging state of the current device.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function chargingStatus(): BatteryChargeState;

  /**
   * Battery health status of the device.
   *
   * @returns { BatteryHealthState } Returns the battery health status of the device.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function healthStatus(): BatteryHealthState;

  /**
   * Charger type of the device.
   *
   * @returns { BatteryPluggedType } Returns the charger type of the device.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function pluggedType(): BatteryPluggedType;

  /**
   * Battery voltage of the device, in unit of microvolt.
   *
   * @returns { int } Returns the battery voltage of the device, in unit of microvolt.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function voltage(): int;

  /**
   * Battery technology of the device.
   *
   * @returns { string } Returns the battery technology of the device.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function technology(): string;

  /**
   * Battery temperature of the device, in unit of 0.1°C.
   *
   * @returns { int } Returns the battery temperature of the device, in unit of 0.1°C.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batteryTemperature(): int;

  /**
   * Whether the battery is supported or present. The value **true** means that the battery is supported or present;
   * **false** means the opposite.
   *
   * Default value: **false**.
   *
   * @returns { boolean } Returns true if the battery is supported or present; returns false if the battery is not
   *     supported or absent.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function isBatteryPresent(): boolean;

  /**
   * Battery level of the device.
   *
   * @returns { BatteryCapacityLevel } Returns the battery capacity level of the device.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batteryCapacityLevel(): BatteryCapacityLevel;

  /**
   * Estimated time for fully charging the current device, in unit of milliseconds. This is a system API.
   *
   * @returns { long } Returns the estimated remaining time for the current device to be fully charged, in ms.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function estimatedRemainingChargeTime(): long;

  /**
   * Total battery capacity of the device, in unit of mAh. This is a system API.
   *
   * @returns { int } Returns the total battery capacity of the device, in mAh.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function totalEnergy(): int;

  /**
   * Battery current of the device, in unit of mA.
   *
   * @returns { int } Returns the battery current of the device, in mA.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function nowCurrent(): int;

  /**
   * Remaining battery capacity of the device, in unit of mAh. This is a system API.
   *
   * @returns { int } Returns the remaining battery capacity of the device, in mAh.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function remainingEnergy(): int;

  /**
   * Enumerates charger types.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryPluggedType {
    /**
     * Unknown charger type.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    NONE,
    /**
     * AC charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    AC,
    /**
     * USB charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    USB,
    /**
     * Wireless charger.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    WIRELESS
  }

  /**
   * Enumerates charging states.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryChargeState {
    /**
     * Unknown state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    NONE,
    /**
     * The battery is being charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    ENABLE,
    /**
     * The battery is not being charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    DISABLE,
    /**
     * The battery is fully charged.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    FULL
  }

  /**
   * Enumerates battery health states.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryHealthState {
    /**
     * Unknown state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    UNKNOWN,
    /**
     * The battery is in the healthy state.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    GOOD,
    /**
     * The battery is overheated.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    OVERHEAT,
    /**
     * The battery voltage is over high.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    OVERVOLTAGE,
    /**
     * The battery temperature is low.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    COLD,
    /**
     * The battery is dead.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    DEAD
  }

  /**
   * Enumerates battery levels.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryCapacityLevel {
    /**
     * Unknown battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_NONE,
    /**
     * Full battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_FULL,
    /**
     * High battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_HIGH,
    /**
     * Normal battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_NORMAL,
    /**
     * Low battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_LOW,
    /**
     * Alarm battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_WARNING,
    /**
     * Ultra-low battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_CRITICAL,
    /**
     * Power-down battery level.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_SHUTDOWN
  }

  /**
   * Enumerates keys for querying the additional information about the **COMMON_EVENT_BATTERY_CHANGED** event.
   *
   * @enum { string }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum CommonEventBatteryChangedKey {
    /**
     * Remaining battery level in percentage.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_SOC = 'soc',
    /**
     * Battery charging status of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_CHARGE_STATE = 'chargeState',
    /**
     * Battery health status of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_HEALTH_STATE = 'healthState',
    /**
     * Type of the charger connected to the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_PLUGGED_TYPE = 'pluggedType',
    /**
     * Battery voltage of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_VOLTAGE = 'voltage',
    /**
     * Battery technology of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_TECHNOLOGY = 'technology',
    /**
     * Battery temperature of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_TEMPERATURE = 'temperature',
    /**
     * Whether the battery is supported by the device or installed.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_PRESENT = 'present',
    /**
     * Battery level of the device.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_CAPACITY_LEVEL = 'capacityLevel'
  }
}
export default batteryInfo;
