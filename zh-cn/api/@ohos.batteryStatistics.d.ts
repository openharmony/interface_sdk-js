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
 * 该模块提供软硬件耗电统计信息的查询接口，支持查询应用和硬件单元的耗电量与耗电百分比，适用于开发者需要监控和分析设备耗电情况的场景，便于定位高耗电应用或硬件组件，从而优化应用的能耗表现。
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
     * 表示应用消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_APP,

    /**
     * 表示蓝牙消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_BLUETOOTH,

    /**
     * 表示CPU空闲时消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_IDLE,

    /**
     * 表示通话消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_PHONE,

    /**
     * 表示蜂窝通讯消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_RADIO,

    /**
     * 表示屏幕消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_SCREEN,

    /**
     * 表示用户消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_USER,

    /**
     * 表示无线网消耗的电量类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    CONSUMPTION_TYPE_WIFI
  }

  /**
   * 获取耗电信息列表，用于电池监控应用查看各应用及硬件的耗电情况。使用Promise异步回调。
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
   * 获取耗电信息列表，用于电池监控应用查看各应用及硬件的耗电情况。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<BatteryStatsInfo>> } callback - 回调函数。当获取耗电信息列表成功，err为undefined，data为获取到的Array<
   *     [BatteryStatsInfo]{@link batteryStats.BatteryStatsInfo}>>；否则为错误对象；AsyncCallback封装了一个BatteryStatsInfo类型的接口。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getBatteryStats(callback: AsyncCallback<Array<BatteryStatsInfo>>): void;

  /**
   * 获取应用的耗电量，单位毫安时。适用于需要精确耗电数值的场景。如需比较不同应用耗电占比，请使用[getAppPowerPercent]{@link getAppPowerPercent}获取相对百分比。
   *
   * @param { int } uid - 应用的UID，用于指定查询耗电量的目标应用。
   * 可通过[bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}等接口获取应用UID。
   * @returns { double } UID对应应用的耗电量，单位毫安时。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getAppPowerValue(uid: int): double;

  /**
   * 获取应用的耗电百分比，该百分比表示应用耗电量占总耗电量的比例。
   *
   * @param { int } uid - 应用的UID，用于指定查询耗电百分比的目标应用。
   * 可通过[bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}等接口获取应用UID。
   * @returns { double } UID对应应用的耗电百分比，取值范围是[0.00，1.00]。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getAppPowerPercent(uid: int): double;

  /**
   * 根据耗电类型获取硬件单元的耗电量，单位毫安时。适用于需要精确耗电数值的场景。如需比较不同硬件单元耗电占比，请使用[getHardwareUnitPowerPercent]{@link getHardwareUnitPowerPercent}获取相对百分比。
   *
   * @param { ConsumptionType } type - 电量消耗类型，用于指定要查询的硬件单元耗电类型。可选值参见[ConsumptionType]{@link ConsumptionType}，
   * 如CONSUMPTION_TYPE_SCREEN用于查询屏幕耗电、CONSUMPTION_TYPE_BLUETOOTH用于查询蓝牙耗电、
   * CONSUMPTION_TYPE_WIFI用于查询无线网耗电等。
   * @returns { double } 电量消耗类型对应硬件的耗电量，单位毫安时。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getHardwareUnitPowerValue(type: ConsumptionType): double;

  /**
   * 根据耗电类型获取硬件单元的耗电百分比，该百分比表示指定硬件单元耗电量占总耗电量的比例。
   *
   * @param { ConsumptionType } type - 电量消耗类型，用于指定要查询的硬件单元耗电百分比类型。可选值参见[ConsumptionType]{@link ConsumptionType}，
   * 如CONSUMPTION_TYPE_SCREEN用于查询屏幕耗电百分比、CONSUMPTION_TYPE_BLUETOOTH用于查询蓝牙耗电百分比、
   * CONSUMPTION_TYPE_WIFI用于查询无线网耗电百分比等。
   * @returns { double } 电量消耗类型对应硬件的耗电百分比，取值范围是[0.00，1.00]。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getHardwareUnitPowerPercent(type: ConsumptionType): double;

  /**
   * 设备软硬件的耗电信息。
   *
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  interface BatteryStatsInfo {
    /**
     * 耗电信息对应的应用UID。
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * 耗电信息的消耗类型。
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