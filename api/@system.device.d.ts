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
 * This module provides information about the current device.
 * It reads system configurations to obtain basic information such as the device brand,
 * model, manufacturer, and screen parameters,
 * which can be used for device adaptation and function determination.
 *
 * > **NOTE**
 * >
 * > - Module maintenance strategy:
 * >
 * >    \- For lite wearables, this module is constantly maintained and available.
 * >
 * >    \- For other device types, this module is no longer maintained since API version 6, 
 * >       and you are advised to use [@ohos.deviceInfo](js-apis-device-info.md) (supported since API version 6)
 * >       to query device information.
 * >
 * > - The initial APIs of this module are supported since API version 3.
 * >   Newly added APIs will be marked with a superscript to indicate their earliest API version.
 *
 * @file
 * @kit BasicServicesKit
 */

/**
 * Defines the device profile information.
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface DeviceResponse {
  /**
   * Brand.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  brand: string;

  /**
   * Manufacturer.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  manufacturer: string;

  /**
   * Model.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  model: string;

  /**
   * Product code.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  product: string;

  /**
   * System language.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  language: string;

  /**
   * System region.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  region: string;

  /**
   * Available window width, in px. The available window size varies on different devices.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowWidth: number;

  /**
   * Available window height, in px. The available window size varies on different devices.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowHeight: number;

  /**
   * Screen pixel density, which indicates the number of pixels per inch on the screen,
   * in dots per inch (DPI). The screen pixel density varies depending on the device.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  screenDensity: number;

  /**
   * Screen shape. The options are as follows:
   * - **rect**: rectangular screen
   * - **circle**: round screen
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  screenShape: 'rect' | 'circle';

  /**
   * API version.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  apiVersion: number;

  /**
   * Device type. The options are as follows: **phone**, **tablet**, **tv**, and **wearable**.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  deviceType: string;

  /**
   * SDK minor API version. Since API version 26.0.0,
   * the API version is in the format of **apiVersion.sdkMinorApiVersion.sdkPatchApiVersion**.
   * If the value fails to be obtained,
   * **-1** is returned, which does not affect the overall return status of the **getInfo** API.
   *
   * **Model constraint:** This API can be used only in the FA model.
   * **Since version**: 26.0.0
   * Example: 0
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @famodelonly
   * @since 26.0.0 dynamiconly
   * @deprecated since 26.0.0
   * @reserved ["liteWearable"]
   */
  sdkMinorApiVersion?: number;

  /**
   * SDK patch API version. Since API version 26.0.0, 
   * the API version is in the format of **apiVersion.sdkMinorApiVersion.sdkPatchApiVersion**.
   * If the value fails to be obtained, **-1** is returned,
   * which does not affect the overall return status of the **getInfo** API.
   *
   * **Model constraint:** This API can be used only in the FA model.
   * **Since version**: 26.0.0
   * Example: 0
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @famodelonly
   * @since 26.0.0 dynamiconly
   * @deprecated since 26.0.0
   * @reserved ["liteWearable"]
   */
  sdkPatchApiVersion?: number;
}

/**
 * Defines the parameters for obtaining the device information.
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface GetDeviceOptions {
  /**
   * Callback invoked when the API call is successful. **data** is the device information returned. 
   * If this parameter is not passed, the device information cannot be obtained. 
   * You are advised to set this callback.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  success?: (data: DeviceResponse) => void;

  /**
   * Callback invoked when the API call fails. **data** is the error object or error description string,
   *  and **code** is the error code.
   *  **code:200**: Certain information cannot be obtained. You are advised to set this callback to handle errors.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  fail?: (data: any, code: number) => void;

  /**
   * Callback invoked when the API call is complete (regardless of whether the call is successful or fails). 
   * This callback can be used in the cleanup or finalization work. If this parameter is not passed, 
   * the callback will not be executed when the API call is complete.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * getInfo interface
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export default class Device {
  /**
   * Obtains the device information. 
   * This API asynchronously reads the system device information and uses a callback to return the device brand, model, screen parameters, and other data.
   *
   * > **NOTE**
   * >
   * > Do not call **Device.getInfo** before the **onShow** event of the home page.
   *
   * @param { GetDeviceOptions } options - Parameters for obtaining the device information. If the parameters are not specified, 
   * the default configuration is used to obtain basic device information.
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  static getInfo(options?: GetDeviceOptions): void;
}