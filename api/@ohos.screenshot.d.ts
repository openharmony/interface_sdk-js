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
 * @kit ArkUI
 */

import { AsyncCallback, ErrorCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';

/**
 * Provides the screen capture capability.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace screenshot {
  /**
   * Obtains a screenshot. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { ScreenshotOptions } options - Information about the snapshot. If the screen to capture is a virtual screen
   *     , the snapshot is a white screen.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return a PixelMap object. The size of the
   *     PixelMap object is **imageSize**. If **imageSize** is not specified, the size of the logical screen associated
   *     with the specified display ID is used.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 11]
   * @throws { BusinessError } 1400001 - Invalid display or screen. [since 11]
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains a screenshot. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function save(callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains a screenshot. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { ScreenshotOptions } options - Information about the snapshot. If the screen to capture is a virtual screen
   *     , the snapshot is a white screen. [since 7 - 21]
   * @param { ScreenshotOptions } [options] - Information about the snapshot. If the screen to capture is a virtual
   *     screen, the snapshot is a white screen. [since 22]
   * @returns { Promise<image.PixelMap> } Promise used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function save(options?: ScreenshotOptions): Promise<image.PixelMap>;

  /**
   * Obtains a screenshot. This API uses a promise to return the result. SDR stands for Standard Dynamic Range, and HDR
   * stands for High Dynamic Range.
   *
   * - If the screen contains HDR resources (even if they are partially obscured), this API returns an array with both
   * SDR and HDR PixelMaps, regardless of whether HDR is enabled.
   * - If there are no HDR resources, it returns an array with a single SDR PixelMap. Unlike the
   * [save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)} API, which
   * returns a single SDR PixelMap, this API always returns an array. Additionally, this API does not support cropping,
   * stretching, or rotating features available in the
   * [save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)} API.
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 20 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { HdrScreenshotOptions } [options] - Information about the HDR snapshot. This parameter is left unspecified
   *     by default.
   * @returns { Promise<Array<image.PixelMap>> } Promise used to return an array of PixelMap objects. If the screen
   *     contains HDR resources (even if they are partially obscured), the array contains two PixelMaps: the first is an
   *     SDR PixelMap, and the second is an HDR PixelMap. If there are no HDR resources, the array contains a single SDR
   *     PixelMap.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1.Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function saveHdrPicture(options?: HdrScreenshotOptions): Promise<Array<image.PixelMap>>;

  /**
   * Takes a screenshot of the entire screen. This API uses a promise to return the result.
   *
   * This API allows you to take screenshots of different screens by setting various **displayId** values, but only full
   * -screen captures are supported. The [pick]{@link screenshot.pick} API allows you to take screenshots of a specified
   * region.
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE [since 14 - 21]
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { CaptureOption } options - Capture options. If this parameter is left blank, the display with ID 0 is
   *     captured by default. [since 14 - 21]
   * @param { CaptureOption } [options] - Capture options. If this parameter is left blank, the display with ID 0 is
   *     captured by default. [since 22]
   * @returns { Promise<image.PixelMap> } Promise used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function capture(options?: CaptureOption): Promise<image.PixelMap>;

  /**
   * Obtains this screenshot. Currently, only the screenshot of the display whose ID is **0** can be obtained. (If a
   * screenshot of the extended screen is needed, you can use the [capture]{@link screenshot.capture} API.) This API
   * uses a promise to return the result.
   *
   * @returns { Promise<PickInfo> } Promise used to return the PickInfo object.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function pick(): Promise<PickInfo>;

  /**
   * Describes the screenshot options.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PickInfo {
    /**
     * Region of the screen to capture.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pickRect: Rect;

    /**
     * PixelMap object of the captured image.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
  }

  /**
   * Describes the region of the screen to capture.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * Left boundary of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * Top boundary of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * Width of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * Describes the size of the screen region to capture.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * Width of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the screen region to capture, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * Describes the capture options.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface CaptureOption {
    /**
     * ID of the [display]{@link @ohos.display:display.DisplayState} to capture. The default value is **0**. The value
     * must be an integer greater than or equal to 0. If a non-integer is passed, a parameter error is reported.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * List of window IDs that are not displayed during screen capture. By default, this list is empty. Valid window IDs
     * must be positive integers. Currently, this parameter applies only to
     * [floating ball windows]{@link @ohos.window.floatingBall:floatingBall}. If a window ID does not correspond to a
     * floating ball window, is not a positive integer, or does not exist, error code 401 is reported. You are advised
     * to call
     * [getFloatingBallWindowInfo()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.getFloatingBallWindowInfo}
     * to obtain the window ID of a floating ball window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    blackWindowIds?: Array<int>;
  }

  /**
   * Describes the screenshot options.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface ScreenshotOptions {
    /**
     * Region of the screen to capture. If no value is passed, the region of the logical screen associated with the
     * specified display ID is returned.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    screenRect?: Rect;
    /**
     * Region of the screen to capture. If no value is passed, the region of the logical screen associated with the
     * specified display ID is returned.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    imageSize?: Size;
    /**
     * Angle by which the captured image should be rotated. Currently, the value can be **0** only. The default value is
     * **0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    rotation?: int;
    /**
     * ID of the [display]{@link @ohos.display:display.DisplayState} device on which the screen region is to be
     * captured. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId?: long;
    /**
     * Whether to send a notification after a snapshot is captured. **true** to send, **false** otherwise. The default
     * value is **true**. Such a notification can be listened for through
     * [captureStatusChange]{@link @ohos.display:display.on(type: 'captureStatusChange', callback: Callback<boolean>)}.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    isNotificationNeeded?: boolean;
    /**
     * Whether to capture all displays on the current screen. If the screen contains multiple displays, the value
     * **true** means that the entire screen is captured, and **false** means that only the region of the logical screen
     * associated with the specified display ID is captured.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isCaptureFullOfScreen?: boolean;
  }

  /**
   * Describes the HDR screenshot options.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrScreenshotOptions {
    /**
     * ID of the [display]{@link @ohos.display:display.DisplayState} device on which the screen region is to be
     * captured. The value must be an integer. The default value is **0**.
     *
     * @default The ID of the current display. The value is a positive integer greater than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayId?: long;
    /**
     * Whether to send a notification after a snapshot is captured. **true** to send, **false** otherwise. The default
     * value is **true**. Such a notification can be listened for through
     * [captureStatusChange]{@link @ohos.display:display.on(type: 'captureStatusChange', callback: Callback<boolean>)}.
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isNotificationNeeded?: boolean;
    /**
     * Whether to capture all displays on the current screen. If the screen contains multiple displays, the value
     * **true** means that the entire screen is captured, and **false** means that only the region of the logical screen
     * associated with the specified display ID is captured. The default value is **false**.
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isCaptureFullOfScreen?: boolean;
    /**
     * screenshot display intent type.
     *
     * @type { ?DisplayIntentType }
     * @default DisplayIntentType.CANONICAL
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayIntent?: DisplayIntentType;
  }

  /**
   * Enumerates the screenshot display intent type.
   *
   * @enum { int }
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DisplayIntentType {
    /**
     * Specifies that the screenshot renders with canonical display attributes optimizing output for
     * presentation on the HDR display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CANONICAL = 0,

    /**
     * Specifies that the screenshot renders with local display attributes optimizing output for
     * presentation on the capture display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LOCAL = 1
  }
}

export default screenshot;