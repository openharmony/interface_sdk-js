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
 * Declares the screenshot APIs.
 *
 * @namespace screenshot
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @atomicservice
 * @since 12
 */
declare namespace screenshot {
  /**
   * Takes a screenshot and saves it as a PixelMap object.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { ScreenshotOptions } options Screenshot options, which consist of screenRect, imageSize, and rotation. You need to set these parameters
   * @param { AsyncCallback<image.PixelMap> } callback Callback used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  /**
   * Takes a screenshot and saves it as a PixelMap object.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { ScreenshotOptions } options - Screenshot options, which consist of screenRect, imageSize, and rotation. You need to set these parameters
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Screen capture, supporting HDR screenshots when there is HDR content.
   * If HdrScreenshotOptions is null, save primary display Hdr picture.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { HdrScreenshotOptions } [options] - Screenshot parameters. Default value is null.
   * @returns { Promise<Array<image.PixelMap>> } Promise used to return a PixelMap array. When HDR content is available,
   *     return two PixelMap objects: the first one as SDR and the second one as HDR. When no HDR content is available,
   *     only return one SDR PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1.Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  function saveHdrPicture(options?: HdrScreenshotOptions): Promise<Array<image.PixelMap>>;

  /**
   * Takes a screenshot and saves it as a PixelMap object.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { AsyncCallback<image.PixelMap> } callback Callback used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function save(callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Takes a screenshot and saves it as a PixelMap object.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { ScreenshotOptions } options Screenshot options, which consist of screenRect, imageSize, and rotation. You need to set these parameters
   * @returns { Promise<image.PixelMap> } Promise used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function save(options?: ScreenshotOptions): Promise<image.PixelMap>;

  /**
   * Takes a capture and return as a PixelMap object.
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @param { CaptureOption } options which consist of CaptureOption.
   * @returns { Promise<image.PixelMap> } Promise used to return a PixelMap object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *                                                                   2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 14
   */
  function capture(options?: CaptureOption): Promise<image.PixelMap>;

  /**
   * Takes a screenshot and picks it as a PickInfo object.
   *
   * @returns { Promise<PickInfo> } Promise used to return a PickInfo object.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  function pick(): Promise<PickInfo>;

  /**
   * Describes the region of the screen to pick info.
   *
   * @interface PickInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  interface PickInfo {
    /**
     * the region of the screen to capture.
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    pickRect: Rect;

    /**
     * the region of the screen to capture pixelMap.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    pixelMap: image.PixelMap;
  }

  /**
   * Describes the region of the screen to capture.
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Rect {
    /**
     * The X-axis coordinate of the upper left vertex of the rectangle.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    left: long;

    /**
     * The Y-axis coordinate of the upper left vertex of the rectangle.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    top: long;

    /**
     * Width of the rectangle.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    width: long;

    /**
     * Height of the rectangle.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    height: long;
  }

  /**
   * Describes the size of the screen region to capture.
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  interface Size {
    /**
     * Defines the width property.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    width: long;

    /**
     * Defines the height property.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    height: long;
  }

  /**
   * Describes capture options.
   *
   * @interface CaptureOption
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 14
   */
  interface CaptureOption {
    /**
     * ID of the screen to be captured.
     *
     * @type { ?long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 14
     */
    displayId?: long;
  }

  /**
   * Describes screenshot options.
   *
   * @interface ScreenshotOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ScreenshotOptions {
    /**
     * Region of the screen to capture. If this parameter is null, the full screen will be captured.
     *
     * @type { ?Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    screenRect?: Rect;
    /**
     * Region of the screen to capture. If this parameter is null, the full screen will be captured.
     *
     * @type { ?Size }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    imageSize?: Size;
    /**
     * Rotation angle of the screenshot. The value can be 0, 90, 180, or 270. The default value is 0.
     *
     * @type { ?int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    rotation?: int;
    /**
     * ID of the screen to be captured.
     *
     * @type { ?long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    displayId?: long;
    /**
     * The capture action is need notification.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    isNotificationNeeded?: boolean;
    /**
     * The capture action is need take screenshots of all displays on this screen.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.1&1.2
     */
    isCaptureFullOfScreen?: boolean;
  }

  /**
   * Describes hdr screenshot options.
   *
   * @interface HdrScreenshotOptions
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  interface HdrScreenshotOptions {
    /**
     * ID of the screen to be captured.
     *
     * @type { ?long }
     * @default The ID of current display. The value is a positive integer greater than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    displayId?: long;
    /**
     * The capture action is need notification.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    isNotificationNeeded?: boolean;
    /**
     * The capture action is need take screenshots of all displays on this screen.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    isCaptureFullOfScreen?: boolean;
  }
}

export default screenshot;
