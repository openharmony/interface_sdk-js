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
 * 该模块主要提供电池状态和充放电状态的查询接口。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @atomicservice [since 12]
 * @since 6 dynamic
 */
declare namespace batteryInfo {
  /**
   * 按场景名称设置电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @param { string } sceneValue - 设置场景的值；该参数必须为字符串类型。
   * @returns { number } 返回设置充电结果。返回0表示设置成功，返回非0表示设置失败。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function setBatteryConfig(sceneName: string, sceneValue: string): number;

  /**
   * 按场景名称查询电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @returns { string } 返回电池充电配置，否则返回""。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function getBatteryConfig(sceneName: string): string;

  /**
   * 检查是否按场景名称启用电池配置。
   *
   * @param { string } sceneName - 设置场景名称；该参数必须为字符串类型。
   * @returns { boolean } 如果设备支持充电场景，则返回true，否则返回false。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 5100101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 11 dynamic
   */
  function isBatteryConfigSupported(sceneName: string): boolean;

  /**
   * 表示当前设备剩余电池电量百分比，取值范围是[0，100]。
   *
   * @constant [since 6 - 11]
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice [since 12]
   * @since 6 dynamic
   */
  const batterySOC: number;

  /**
   * 表示当前设备电池的充电状态。
   *
   * @constant [since 6 - 11]
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
   * 表示当前设备是否支持电池或者电池是否在位。true表示支持电池或电池在位，false表示不支持电池或电池不在位，默认为false。
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
     * 表示未获取到连接充电器类型。
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
     * 表示电池充电状态为使能状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    ENABLE,
    /**
     * 表示电池充电状态为停止状态。
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
     * 表示电池健康状态为僵死状态。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 6 dynamic
     */
    DEAD
  }

  /**
   * 表示电池电量等级的枚举。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @since 9 dynamic
   */
  export enum BatteryCapacityLevel {
    /**
     * 表示电池电量等级为未知电量。
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