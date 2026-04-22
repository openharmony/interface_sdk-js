/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * The **Vibrator** module provides APIs for controlling LED lights and vibrators. You can use the APIs to query the LED
 * light list, vibrator list, and vibration effect, and turn on or off the LED light and the vibrator.
 * The **Vibrator** module provides APIs for controlling LED lights and vibrators. You can use the APIs to query the LED
 * light list, vibrator list, and vibration effect, and turn on or off the LED light and the vibrator.
 * 
 * Misc devices refer to LED lights and vibrators on devices. LED lights are mainly used for indication (for example, 
 * indicating the charging state) and blinking (such as tri-colored lights). Vibrators are mainly used in scenarios such
 * as the alarm clock, power-on/off, and incoming call vibration.
 * 
 * > **NOTE**
 * >
 * > - Module maintenance policy:
 * > >   - For lite wearables, this module is constantly maintained and available.
 * > >   - For other device types, this module is no longer maintained since API version 8, and You are advised to use 
 * > the new [@ohos.vibrator]{@link @ohos.vibrator:vibrator} module.
 * >
 * > - This module requires hardware support and can only be debugged on real devices.
 *
 * @file
 * @kit SensorServiceKit
 */

/**
 * Defines the vibration options.
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator.VibrateTime
 */
export interface VibrateOptions {
  /**
   * Vibration mode. The value **long** indicates long vibration, and **short** indicates short vibration. The default
   * value is **long**.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator.VibrateTime
   */
  mode?: 'long' | 'short';

  /**
   * Called when the vibrator data changes.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  success: () => void;

  /**
   * Called when the API call fails.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the API call is complete.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  complete?: () => void;
}

/**
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator
 */
export default class Vibrator {
  /**
   * Triggers device vibration.
   *
   * > **NOTE**
   * >
   * > Except for lite wearables. You are advised to use
   * > [vibrator.startVibration()]{@link @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * > instead.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateOptions } options - Vibration options.
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)
   */
  static vibrate(options?: VibrateOptions): void;
}