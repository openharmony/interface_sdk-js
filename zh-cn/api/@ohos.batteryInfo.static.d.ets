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
 * 该模块主要提供电池状态和充放电状态的查询接口。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @since 23 static
 */
declare namespace batteryInfo {
  /**
   * 按场景名称设置电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @param { string } sceneValue - 设置场景的值；该参数必须为字符串类型。
   * @returns { int } 返回设置充电结果。返回0表示设置成功，返回非0表示设置失败。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): int;

  /**
   * 按场景名称查询电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @returns { string } 返回电池充电配置，否则返回""。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * 检查是否按场景名称启用电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @returns { boolean } 如果设备支持充电场景，则返回true，否则返回false。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function isBatteryConfigSupported(sceneName: string): boolean;

  /**
   * 表示当前设备剩余电池电量百分比，取值范围是[0，100]。
   *
   * @returns { int } 返回当前设备剩余电池电量百分比，取值范围是[0，100]。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batterySOC(): int;

  /**
   * 表示当前设备电池的充电状态。
   *
   * @returns { BatteryChargeState } 返回当前设备电池的充电状态。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function chargingStatus(): BatteryChargeState;

  /**
   * 表示当前设备电池的健康状态。
   *
   * @returns { BatteryHealthState } 返回当前设备电池的健康状态。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function healthStatus(): BatteryHealthState;

  /**
   * 表示当前设备连接的充电器类型。
   *
   * @returns { BatteryPluggedType } 返回当前设备连接的充电器类型。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function pluggedType(): BatteryPluggedType;

  /**
   * 表示当前设备电池的电压，单位微伏。
   *
   * @returns { int } 返回当前设备电池的电压，单位微伏。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function voltage(): int;

  /**
   * 表示当前设备电池的技术型号。
   *
   * @returns { string } 返回当前设备电池的技术型号。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function technology(): string;

  /**
   * 表示当前设备电池的温度，单位0.1摄氏度。
   *
   * @returns { int } 返回当前设备电池的温度，单位0.1摄氏度。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batteryTemperature(): int;

  /**
   * 表示当前设备是否支持电池或者电池是否在位。true表示支持电池或电池在位，false表示不支持电池或电池不在位，
   * 默认为false。
   *
   * @returns { boolean } 返回true表示支持电池或电池在位，返回false表示不支持电池或电池不在位。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function isBatteryPresent(): boolean;

  /**
   * 表示当前设备电池电量的等级。
   *
   * @returns { BatteryCapacityLevel } 返回当前设备电池电量的等级。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function batteryCapacityLevel(): BatteryCapacityLevel;

  /**
   * 表示当前设备充满电的预估时间，单位毫秒。此接口为系统接口。
   *
   * @returns { long } 返回当前设备充满电的预估时间，单位毫秒。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function estimatedRemainingChargeTime(): long;

  /**
   * 表示当前设备电池的总容量，单位毫安时。此接口为系统接口。
   *
   * @returns { int } 返回当前设备电池的总容量，单位毫安时。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function totalEnergy(): int;

  /**
   * 表示当前设备电池的电流，单位毫安。
   *
   * @returns { int } 返回当前设备电池的电流，单位毫安。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  function nowCurrent(): int;

  /**
   * 表示当前设备电池的剩余容量，单位毫安时。此接口为系统接口。
   *
   * @returns { int } 返回当前设备电池的剩余容量，单位毫安时。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function remainingEnergy(): int;

  /**
   * 表示连接的充电器类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryPluggedType {
    /**
     * 表示未获取到连接充电器类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    NONE,
    /**
     * 表示连接的充电器类型为交流充电器。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    AC,
    /**
     * 表示连接的充电器类型为USB。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    USB,
    /**
     * 表示连接的充电器类型为无线充电器。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    WIRELESS
  }

  /**
   * 表示电池充电状态的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryChargeState {
    /**
     * 表示电池充电状态为未充电。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    NONE,
    /**
     * 表示电池充电状态为使能状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    ENABLE,
    /**
     * 表示电池充电状态为停止状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    DISABLE,
    /**
     * 表示电池充电状态为已充满状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    FULL
  }

  /**
   * 表示电池健康状态的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryHealthState {
    /**
     * 表示电池健康状态未知。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    UNKNOWN,
    /**
     * 表示电池健康状态为正常。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    GOOD,
    /**
     * 表示电池健康状态为过热。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    OVERHEAT,
    /**
     * 表示电池健康状态为过压。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    OVERVOLTAGE,
    /**
     * 表示电池健康状态为低温。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    COLD,
    /**
     * 表示电池健康状态为僵死状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    DEAD
  }

  /**
   * 表示电池电量等级的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryCapacityLevel {
    /**
     * 表示电池电量等级为未知电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_NONE,
    /**
     * 表示电池电量等级为满电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_FULL,
    /**
     * 表示电池电量等级为高电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_HIGH,
    /**
     * 表示电池电量等级为正常电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_NORMAL,
    /**
     * 表示电池电量等级为低电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_LOW,
    /**
     * 表示电池电量等级为告警电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_WARNING,
    /**
     * 表示电池电量等级为极低电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_CRITICAL,
    /**
     * 表示电池电量等级为关机电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    LEVEL_SHUTDOWN
  }

  /**
   * 表示COMMON_EVENT_BATTERY_CHANGED通用事件附加信息的查询键。
   *
   * @enum { string }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum CommonEventBatteryChangedKey {
    /**
     * 表示剩余电池电量百分比的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_SOC = 'soc',
    /**
     * 表示当前设备电池充电状态的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_CHARGE_STATE = 'chargeState',
    /**
     * 表示当前设备电池健康状态的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_HEALTH_STATE = 'healthState',
    /**
     * 表示当前设备连接的充电器类型的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_PLUGGED_TYPE = 'pluggedType',
    /**
     * 表示当前设备电池电压的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_VOLTAGE = 'voltage',
    /**
     * 表示当前设备电池技术型号的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_TECHNOLOGY = 'technology',
    /**
     * 表示当前设备电池温度的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_TEMPERATURE = 'temperature',
    /**
     * 表示当前设备是否支持电池或者电池是否在位的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_PRESENT = 'present',
    /**
     * 表示当前设备电池电量等级的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    EXTRA_CAPACITY_LEVEL = 'capacityLevel'
  }
}
export default batteryInfo;
