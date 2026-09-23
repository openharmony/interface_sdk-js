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
 * The **@system.vibrator** module provides the capability of controlling the vibration of a device. You can use this 
 * module to trigger the device to perform long or short vibration effects, providing tactile feedback for users. It is 
 * mainly used in interaction scenarios that require tactile feedback, such as alarm clock, power-off vibration, and 
 * incoming call vibration. It helps apps attract users' attention through vibration when key events occur.
 * This module is applicable to lite wearables. For other device types, this module is not maintained since API version 
 * 8.
 * Compared with the [@ohos.vibrator]{@link @ohos.vibrator:vibrator} module, this module provides simpler functions and 
 * does not support advanced functions such as querying vibration effects, querying the vibrator list, and customizing 
 * vibration files. For lite wearable devices, this module is continuously maintained. For other device types, this 
 * module is no longer maintained since API version 8. You are advised to use the 
 * [vibrator.startVibration()]{@link @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
 *  API of the [@ohos.vibrator]{@link @ohos.vibrator:vibrator} module. This API supports more vibration effects (
 * including [VibrateTime]{@link @ohos.vibrator:vibrator.VibrateTime}, 
 * [VibratePreset]{@link @ohos.vibrator:vibrator.VibratePreset}, and 
 * [VibrateFromFile]{@link @ohos.vibrator:vibrator.VibrateFromFile}) and is applicable to more device types.
 * 
 * > **NOTE**
 *
 * > - Module maintenance policy:
 * >  >   - For lite wearables, this module is constantly maintained and available.
 * >  >   - For other device types, this module is no longer maintained since API version 8, and you are advised to use 
 * > the new [@ohos.vibrator (Vibrator)]{@link @ohos.vibrator:vibrator} module.
 * > - The initial APIs of this module are supported since API version 3. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * > - This module requires hardware support and can only be debugged on real devices. You can check whether the device 
 * > supports the vibration function by querying the system device information or using related APIs.
 *
 * @file Vibration control module
 * @kit SensorServiceKit
 */

/**
 * Defines the configuration parameters for triggering device vibration, including the vibration mode and callback 
 * function. When calling 
 * [Vibrator.vibrate()]{@link vibrator.vibrate(options?: VibrateOptions)}, you can 
 * use **VibrateOptions** to specify the vibration mode (short or long vibration) and the callback function for 
 * listening for the vibration triggering success, failure, and completion events. After **VibrateOptions** is passed, 
 * the device vibrates in the specified mode. When the vibration is successfully triggered, the **success** function is 
 * called back. If the vibration fails to be triggered, the **fail** function is called back. When the API call is 
 * complete, the **complete** function is called back.
 *
 * > **NOTE**
 * >
 * > This API is supported since API version 3 and deprecated since API version 8. You are advised to use 
 * > [VibrateTime]{@link @ohos.vibrator:vibrator.VibrateTime} instead.
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator.VibrateTime
 */
export interface VibrateOptions {
  /**
   * Vibration mode, which specifies the duration type of device vibration. The options include **'long'** (long 
   * vibration) and **'short'** (short vibration). The default value is **'long'**. Use scenarios: You can select the 
   * vibration mode based on your requirements. For example, use **'long'** for incoming call notifications to 
   * continuously remind users, and use **'short'** for button touch feedback to provide instant feedback. If this 
   * parameter is not specified, long vibration is performed by default. Restrictions: This parameter applies only to 
   * lite wearables.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator.VibrateTime
   */
  mode?: 'long' | 'short';

  /**
   * Callback invoked when the vibration is successfully triggered. Use scenarios: This callback is used to send notices
   *  upon successful vibration triggering. Effect: After the vibration is successfully triggered, the system calls this
   *  callback function. No parameter is returned.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  success: () => void;

  /**
   * Callback invoked when the vibration fails to be triggered. Use scenarios: This callback is used to obtain error 
   * information upon failure to trigger vibration. For example, the permission is not granted or the device does not 
   * support vibration. If this parameter is not specified, no callback notification will be sent when the vibration 
   * fails to be triggered. Effect: When the vibration fails to be triggered, the system calls this callback function 
   * and passes the error information data and error code. The callback function signature is **(data: string, code: 
   * number) => void**, where **data** is the error information string and **code** is the error code number, indicating
   *  the specific error type.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  fail?: (data: string, code: number) => void;

  /**
   * Callback function invoked when the vibration API call is complete. Usage scenarios: Use this callback when you need
   *  to perform clearance or status update operations after the vibration API call is complete (regardless of whether 
   * the call is successful or fails). If this parameter is not specified, no callback notification will be sent when 
   * the API call is complete. Effect: The system calls this callback function regardless of whether the vibration is 
   * successfully triggered. No parameter is returned.
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  complete?: () => void;
}

/**
 * Provides static methods for triggering device vibration.
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator
 */
export default class Vibrator {
  /**
   * Triggers the device to vibrate in short or long mode based on the specified vibration mode. This API uses an
   * asynchronous callback to return the result.
   *
   * Use this API to trigger device vibration such as alarm clock vibration, incoming call vibration, power-off
   * vibration, and button touch feedback on lite wearable devices. After this API is called, the device vibrates
   * in the specified mode (short or long vibration). If the **mode** parameter is not specified, the device will
   * perform long vibration (the default value of **mode** is **'long'**).
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [vibrator.startVibration()]{@link @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute,
   *  callback: AsyncCallback<void>)}
   * > since API version 8.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateOptions } options - Vibration configuration parameters, which are used to specify the vibration
   *     mode and callback function. If this parameter is not specified, the default configuration is used. The default
   *     value of **mode** is **'long'**. In this case, only the **success** and **complete** callbacks are triggered,
   *     while the **fail** callback will not be triggered.
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)
   */
  static vibrate(options?: VibrateOptions): void;
}