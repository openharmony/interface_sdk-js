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
 * 该模块提供按场景设置和查询电池配置的能力，还提供电池预估充电时间、总容量、剩余容量等关键属性的查询，适用于需要实时获取电池信息或管理充电场景的系统应用开发。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @since 23 static
 */
declare namespace batteryInfo {
  /**
   * 按场景名称设置电池配置。调用该接口后，系统将根据传入的场景名称和场景值修改对应的电池充电配置，影响设备充电行为。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于标识特定的充电配置场景。支持的场景名称由系统定义。
   * @param { string } sceneValue - 电池充电配置场景的值，用于指定场景的具体配置参数。取值由系统定义，例如'0'表示关闭该场景的充电配置。
   * @returns { int } 返回设置电池配置的结果。返回0表示设置成功，返回非0表示设置失败。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): int;

  /**
   * 按场景名称查询电池配置。调用该接口后，系统将根据传入的场景名称查找并返回对应的电池充电配置值。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于查询特定的充电配置场景。支持的场景名称由系统定义。
   * @returns { string } 返回指定场景的电池充电配置值；如果该场景不存在或未配置，则返回空字符串。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * 检查是否按场景名称启用电池配置。调用该接口后，系统将判断当前设备是否支持指定的充电场景配置，并返回检查结果。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于检查是否支持该充电配置场景。支持的场景名称由系统定义。
   * @returns { boolean } 如果设备支持该场景的电池配置，则返回true，否则返回false。
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
   * 表示当前设备是否支持电池以及电池是否在位。true表示设备支持电池且电池在位，false表示设备不支持电池或电池不在位，默认为false。
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
   * 获取当前设备充满电的预估时间，单位毫秒。
   *
   * @returns { long } 返回当前设备充满电的预估时间，单位毫秒。
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 23 static
   */
  function estimatedRemainingChargeTime(): long;

  /**
   * 获取当前设备电池的总容量，单位毫安时。
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
   * 获取当前设备电池的剩余容量，单位毫安时。
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
     * 表示未连接充电器。
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
     * 表示电池充电状态为正在充电。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    ENABLE,
    /**
     * 表示电池充电状态为充电禁用。
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
     * 表示电池健康状态为失效，即电池已无法正常使用。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 static
     */
    DEAD
  }

  /**
   * 表示电池电量等级的枚举。可用于根据电量等级执行差异化策略，例如在低电量（LEVEL_LOW）或极低电量（LEVEL_CRITICAL）时限制后台任务和高功耗功能，在满电量（LEVEL_FULL）时解除限制。
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 23 static
   */
  export enum BatteryCapacityLevel {
    /**
     * 表示电池电量等级为未知电量。说明系统无法获得当前的电池电量等级。
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
   * 开发者需先订阅[COMMON_EVENT_BATTERY_CHANGED公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_battery_changed)，
   * 在事件回调中通过这些查询键从事件附加数据中提取对应的电池状态信息。
   * 详细使用方法请参见[@ohos.commonEventManager (公共事件模块)](docroot://reference/api-basic-services/js-apis-commonEventManager.md)。
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
