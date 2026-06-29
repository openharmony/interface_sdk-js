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
 * 该模块提供屏幕亮度和模式的查询、调节接口。
 * 
 * > **说明：**
 * >
 * > - 模块维护策略：
 * >
 * >    - 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * >
 * >    - 对于支持该模块的其他设备类型，该模块从API Version 7开始不再维护。<!--Del-->建议使用
 * > [@ohos.brightness]{@link @ohos.brightness:brightness}替代。<!--DelEnd-->替代接口能力仅对系统应用开放。
 *
 */

/**
 * 包含屏幕亮度的对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface BrightnessResponse {
  /**
   * 屏幕亮度，范围：1到255。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  value: number;
}

/**
 * 获取屏幕亮度的参数对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface GetBrightnessOptions {
  /**
   * 接口调用成功的回调函数。data为[BrightnessResponse]{@link BrightnessResponse}类型的返回值。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  success?: (data: BrightnessResponse) => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 设置屏幕亮度的参数对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface SetBrightnessOptions {
  /**
   * 屏幕亮度，值为1-255之间的整数。
   *
   * - 如果值小于等于0，系统按1处理。
   *
   * - 如果值大于255，系统按255处理。
   *
   * - 如果值为小数，系统将处理为整数。例如设置为8.1，系统按8处理。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  value: number;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 包含屏幕亮度模式的对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface BrightnessModeResponse {
  /**
   * 0表示手动调节屏幕亮度模式，1表示自动调节屏幕亮度模式。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  mode: number;
}

/**
 * 获取屏幕亮度模式的参数对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface GetBrightnessModeOptions {
  /**
   * 接口调用成功的回调函数。data为[BrightnessModeResponse]{@link BrightnessModeResponse}类型的返回值。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  success?: (data: BrightnessModeResponse) => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 设置屏幕亮度模式的参数对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface SetBrightnessModeOptions {
  /**
   * 0表示手动调节屏幕亮度模式，1表示自动调节屏幕亮度模式。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  mode: number;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 设置屏幕常亮的参数对象。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export interface SetKeepScreenOnOptions {
  /**
   * true表示保持屏幕常亮，false表示取消屏幕常亮。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  keepScreenOn: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。data为错误信息，code为错误码。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 该模块提供屏幕亮度和模式的查询、调节接口。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
 * @since 3 dynamiconly
 * @deprecated since 7
 * @reserved ["liteWearable"]
 */
export default class Brightness {
  /**
   * 获得设备当前的屏幕亮度值。
   *
   * @param { GetBrightnessOptions } options 获取屏幕亮度的参数对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  static getValue(options?: GetBrightnessOptions): void;

  /**
   * 设置设备当前的屏幕亮度值。
   *
   * @param { SetBrightnessOptions } options 设置屏幕亮度的参数对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   * @useinstead @ohos.brightness:brightness.setValue
   */
  static setValue(options?: SetBrightnessOptions): void;

  /**
   * 获得当前屏幕亮度模式。
   *
   * @param { GetBrightnessModeOptions } options 获取屏幕亮度模式的参数对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  static getMode(options?: GetBrightnessModeOptions): void;

  /**
   * 设置设备当前的屏幕亮度模式。
   *
   * @param { SetBrightnessModeOptions } options 设置屏幕亮度模式的参数对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   */
  static setMode(options?: SetBrightnessModeOptions): void;

  /**
   * 设置屏幕是否保持常亮状态，开启常亮模式推荐在onShow()阶段调用。
   *
   * 注意：
   *
   * - 除Lite Wearable外，从API version 7开始不再维护，建议使用[window.setWindowKeepScreenOn()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowkeepscreenon9)替代。
   *
   * - 在Lite Wearable上，该接口仅能阻止系统无活动超时灭屏（自动），无法阻止用户主动操作（如盖屏）、常亮时刻结束等导致的灭屏。
   *
   * @param { SetKeepScreenOnOptions } options 设置屏幕常亮的参数对象。可选，默认为空。
   * @syscap SystemCapability.PowerManager.DisplayPowerManager.Lite
   * @since 3 dynamiconly
   * @deprecated since 7
   * @reserved ["liteWearable"]
   * @useinstead @ohos.window:Window.setWindowKeepScreenOn
   */
  static setKeepScreenOn(options?: SetKeepScreenOnOptions): void;
}