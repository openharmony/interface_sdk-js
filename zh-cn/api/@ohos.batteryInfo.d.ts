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
 * 该模块主要提供电池状态和充放电状态的查询接口，
 * 支持查询剩余电量、充电状态、健康状态、充电器类型、电压、电流、温度等电池信息，
 * 适用于需要根据电池状态调整应用行为（如低电量时降低功耗、充电时启动高耗能任务）的场景，
 * 可帮助开发者实时感知设备电池状况，优化应用功耗策略并提升用户体验。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @atomicservice [since 12]
 * @since 6 dynamic
 */
declare namespace batteryInfo {
  /**
   * 按场景名称设置电池配置。调用该接口后，系统将根据传入的场景名称和场景值修改对应的电池充电配置，影响设备充电行为。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于标识特定的充电配置场景。支持的场景名称由系统定义。
   * @param { string } sceneValue - 电池充电配置场景的值，用于指定场景的具体配置参数。取值由系统定义，例如'0'表示关闭该场景的充电配置。
   * @returns { number } 返回设置电池配置的结果。返回0表示设置成功，返回非0表示设置失败。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): number;

  /**
   * 按场景名称查询电池配置。调用该接口后，系统将根据传入的场景名称查找并返回对应的电池充电配置值。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于查询特定的充电配置场景。支持的场景名称由系统定义。
   * @returns { string } 返回指定场景的电池充电配置值；如果该场景不存在或未配置，则返回空字符串。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * 检查是否按场景名称启用电池配置。调用该接口后，系统将判断当前设备是否支持指定的充电场景配置，并返回检查结果。
   *
   * @param { string } sceneName - 电池充电配置的场景名称，用于检查是否支持该充电配置场景。支持的场景名称由系统定义。
   * @returns { boolean } 如果设备支持该场景的电池配置，则返回true，否则返回false。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function isBatteryConfigSupported(sceneName: string): boolean;

  /**
   * 表示当前设备剩余电池电量百分比，取值范围是[0，100]。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  const batterySOC: number;

  /**
   * 表示当前设备电池的充电状态。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  const chargingStatus: BatteryChargeState;

  /**
   * 表示当前设备电池的健康状态。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const healthStatus: BatteryHealthState;

  /**
   * 表示当前设备连接的充电器类型。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const pluggedType: BatteryPluggedType;

  /**
   * 表示当前设备电池的电压，单位微伏。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const voltage: number;

  /**
   * 表示当前设备电池的技术型号。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const technology: string;

  /**
   * 表示当前设备电池的温度，单位0.1摄氏度。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  const batteryTemperature: number;

  /**
   * 表示当前设备是否支持电池以及电池是否在位。true表示设备支持电池且电池在位，false表示设备不支持电池或电池不在位，默认为false。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 7 dynamic
   */
  const isBatteryPresent: boolean;

  /**
   * 表示当前设备电池电量的等级。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  const batteryCapacityLevel: BatteryCapacityLevel;

  /**
   * 表示当前设备充满电的预估时间，单位毫秒。此接口为系统接口。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const estimatedRemainingChargeTime: number;

  /**
   * 表示当前设备电池的总容量，单位毫安时。此接口为系统接口。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const totalEnergy: number;

  /**
   * 表示当前设备电池的电流，单位毫安。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 12 dynamic
   */
  const nowCurrent: number;

  /**
   * 表示当前设备电池的剩余容量，单位毫安时。此接口为系统接口。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  const remainingEnergy: number;

  /**
   * 表示连接的充电器类型的枚举。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  export enum BatteryPluggedType {
    /**
     * 表示未连接充电器。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    NONE,
    /**
     * 表示连接的充电器类型为交流充电器。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    AC,
    /**
     * 表示连接的充电器类型为USB。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    USB,
    /**
     * 表示连接的充电器类型为无线充电器。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    WIRELESS
  }

  /**
   * 表示电池充电状态的枚举。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  export enum BatteryChargeState {
    /**
     * 表示电池充电状态为未充电。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    NONE,
    /**
     * 表示电池充电状态为正在充电。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    ENABLE,
    /**
     * 表示电池充电状态为充电禁用。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    DISABLE,
    /**
     * 表示电池充电状态为已充满状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    FULL
  }

  /**
   * 表示电池健康状态的枚举。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 6 dynamic
   */
  export enum BatteryHealthState {
    /**
     * 表示电池健康状态未知。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    UNKNOWN,
    /**
     * 表示电池健康状态为正常。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    GOOD,
    /**
     * 表示电池健康状态为过热。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    OVERHEAT,
    /**
     * 表示电池健康状态为过压。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    OVERVOLTAGE,
    /**
     * 表示电池健康状态为低温。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    COLD,
    /**
     * 表示电池健康状态为失效，即电池已无法正常使用。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    DEAD
  }

  /**
   * 表示电池电量等级的枚举。可用于根据电量等级执行差异化策略，例如在低电量（LEVEL_LOW）或极低电量（LEVEL_CRITICAL）时限制后台任务和高功耗功能，在满电量（LEVEL_FULL）时解除限制。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  export enum BatteryCapacityLevel {
    /**
     * 表示电池电量等级为未知电量。说明系统无法获得当前的电池电量等级。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 23 dynamic
     */
    LEVEL_NONE,
    /**
     * 表示电池电量等级为满电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_FULL,
    /**
     * 表示电池电量等级为高电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_HIGH,
    /**
     * 表示电池电量等级为正常电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_NORMAL,
    /**
     * 表示电池电量等级为低电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_LOW,
    /**
     * 表示电池电量等级为告警电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_WARNING,
    /**
     * 表示电池电量等级为极低电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_CRITICAL,
    /**
     * 表示电池电量等级为关机电量。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    LEVEL_SHUTDOWN
  }

  /**
   * 表示COMMON_EVENT_BATTERY_CHANGED通用事件附加信息的查询键。
   * 开发者需先订阅[COMMON_EVENT_BATTERY_CHANGED公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_battery_changed)，
   * 在事件回调中通过这些查询键从事件附加数据中提取对应的电池状态信息。
   * 详细使用方法请参见[@ohos.commonEventManager (公共事件模块)](docroot://reference/api-basic-services/js-apis-commonEventManager.md)。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  export enum CommonEventBatteryChangedKey {
    /**
     * 表示剩余电池电量百分比的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_SOC = 'soc',
    /**
     * 表示当前设备电池充电状态的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_CHARGE_STATE = 'chargeState',
    /**
     * 表示当前设备电池健康状态的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_HEALTH_STATE = 'healthState',
    /**
     * 表示当前设备连接的充电器类型的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_PLUGGED_TYPE = 'pluggedType',
    /**
     * 表示当前设备电池电压的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_VOLTAGE = 'voltage',
    /**
     * 表示当前设备电池技术型号的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_TECHNOLOGY = 'technology',
    /**
     * 表示当前设备电池温度的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_TEMPERATURE = 'temperature',
    /**
     * 表示当前设备是否支持电池或者电池是否在位的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_PRESENT = 'present',
    /**
     * 表示当前设备电池电量等级的查询键。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 9 dynamic
     */
    EXTRA_CAPACITY_LEVEL = 'capacityLevel'
  }
}

export default batteryInfo;