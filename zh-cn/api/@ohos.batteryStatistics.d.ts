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
 * @arkts 1.1&1.2
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * 该模块提供软硬件耗电统计信息的查询接口。
 *
 * > **说明：**
 * >
 * > - 本模块接口为系统接口。
 *
 * @syscap SystemCapability.PowerManager.BatteryStatistics
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace batteryStats {
  /**
   * 表示电量消耗类型的枚举值。
   *
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ConsumptionType {
    /**
     * 表示电量消耗类型未知。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_INVALID = -17,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_APP = -16,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_BLUETOOTH = -15,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_IDLE = -14,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_PHONE = -13,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_RADIO = -12,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_SCREEN = -11,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_USER = -10,

    /**
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_WIFI = -9,
  }

  /**
   * 获取耗电信息列表。使用Promise异步回调。
   *
   * @returns { Promise<Array<BatteryStatsInfo>> } Promise对象，返回耗电信息列表。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getBatteryStats(): Promise<Array<BatteryStatsInfo>>;

  /**
   * 获取耗电信息列表。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<BatteryStatsInfo>> } callback - 回调函数。当获取耗电信息列表成功，err为undefined，data为获取到的Array<
   *     [BatteryStatsInfo]{@link batteryStats.BatteryStatsInfo}>>；否则为错误对象；AsyncCallback封装了一个BatteryStatsInfo类型的接口。
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
   * 获取应用的耗电量，单位毫安时。
   *
   * @param { int } uid - 应用的UID。
   * @returns { double } UID对应应用的耗电量，单位毫安时。
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
   * 获取应用的耗电百分比。
   *
   * @param { int } uid - 应用的UID。
   * @returns { double } UID对应应用的耗电百分比，取值范围：0.00到1.00。
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
   * 根据耗电类型获取硬件单元的耗电量。
   *
   * @param { ConsumptionType } type - 电量消耗类型；该参数类型是枚举类。
   * @returns { double } 电量消耗类型对应硬件的耗电量，单位毫安时。
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
   * 根据耗电类型获取硬件单元的耗电百分比。
   *
   * @param { ConsumptionType } type - 电量消耗类型；该参数类型是枚举类。
   * @returns { double } 电量消耗类型对应硬件的耗电百分比，取值范围：0.00到1.00。
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
   * 设备的耗电信息。
   *
   */
  /**
   *
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  interface BatteryStatsInfo {
    /**
     * 耗电信息相关的UID。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * 耗电信息相关的类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    type: ConsumptionType;

    /**
     * 耗电的值，单位毫安时。
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