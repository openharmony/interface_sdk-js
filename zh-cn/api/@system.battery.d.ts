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
 * @file
 * @kit BasicServicesKit
 */

/**
 * 该模块提供充电状态及剩余电量的查询功能，适用于需要根据设备电池状态调整应用行为的场景，例如在低电量时降低后台活动频率或提醒用户充电，帮助开发者优化应用的能耗表现和用户体验。
 * 
 * > **说明：**
 * >
 * > - 模块维护策略：
 * >
 * >    - 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * >
 * >    - 对于支持该模块的其他设备类型，该模块从API Version 6开始不再维护，建议使用
 * > [@ohos.batteryInfo]{@link @ohos.batteryInfo:batteryInfo}替代。
 *
 */


/**
 * 包含充电状态及剩余电量的对象。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Lite
 * @FaAndStageModel
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
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   * @useinstead @ohos.batteryInfo:batteryInfo.batterySOC
   */
  level: number;
}

/**
 * 包含接口调用选项的对象，包括成功、失败和完成回调函数。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Lite
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface GetStatusOptions {
  /**
   * 接口调用成功的回调函数，data为{@link BatteryResponse}类型的返回值。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  success?: (data: BatteryResponse) => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数，无论接口调用成功或失败都会执行。当需要在接口调用完成后执行清理或通知操作时传入此回调。不传入时无结束通知。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @FaAndStageModel
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
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export default class Battery {
  /**
   * 获取设备当前的充电状态及剩余电量。
   *
   * @param { GetStatusOptions } options 包含接口调用结果的对象，用于通过回调获取设备充电状态及剩余电量。不传入时无法获取电量信息，不执行任何回调。
   * @syscap SystemCapability.PowerManager.BatteryManager.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  static getStatus(options?: GetStatusOptions): void;
}