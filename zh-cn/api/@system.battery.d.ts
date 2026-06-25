/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * 该模块提供充电状态及剩余电量的查询功能。
 * 
 * > **说明：**
 * >
 * > - 模块维护策略：
 * > >
 * > >    \- 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * > >
 * > >    \- 对于支持该模块的其他设备类型，该模块从API Version 6开始不再维护，建议使用
 * > [@ohos.batteryInfo]{@link @ohos.batteryInfo:batteryInfo}替代。
 *
 * @file
 * @kit BasicServicesKit
 */


/**
 * 包含充电状态及剩余电量的对象。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface BatteryResponse {
  /**
   * 当前电池是否在充电中。true表示在充电，false表示没有充电，默认为false。
   *
   * **说明：** 除Lite Wearable外，从API Version 6开始不再维护，建议使用
   * [`batteryInfo.chargingStatus`](docroot://reference/apis-basic-services-kit/js-apis-battery-info.md#常量)替代。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   * @useinstead @ohos.batteryInfo:batteryInfo.chargingStatus
   */
  charging: boolean;

  /**
   * 当前电池的电量百分比，取值范围：0.00~1.00。
   *
   * **说明：** 除Lite Wearable外，从API Version 6开始不再维护，建议使用
   * [`batteryInfo.batterySOC`](docroot://reference/apis-basic-services-kit/js-apis-battery-info.md#常量)替代。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   * @useinstead @ohos.batteryInfo:batteryInfo.batterySOC
   */
  level: number;
}

/**
 * 包含接口调用结果的对象。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface GetStatusOptions {
  /**
   * 接口调用成功的回调函数，data为[BatteryResponse](#batteryresponsedeprecated)类型的返回值。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  success?: (data: BatteryResponse) => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 该模块提供充电状态及剩余电量的查询功能。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export default class Battery {
  /**
   * 获取设备当前的充电状态及剩余电量。
   *
   * @param { GetStatusOptions } options 包含接口调用结果的对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  static getStatus(options?: GetStatusOptions): void;
}