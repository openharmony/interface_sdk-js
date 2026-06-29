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
 * 本模块提供屏幕截图的能力。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace screenshot {
  /**
   * 获取屏幕截图，使用callback异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { ScreenshotOptions } options - 要截取的图像信息。当指定截取屏幕为虚拟屏时，截取图像为白屏。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。返回一个PixelMap对象，其大小为指定的imageSize大小，若未指定默认为displayId所在逻辑屏的大小。
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
   * 获取屏幕截图，使用callback异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。返回一个PixelMap对象。
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
   * 获取屏幕截图，使用Promise异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 7 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { ScreenshotOptions } options - 要截取的图像信息。当指定截取屏幕为虚拟屏时，截取图像为白屏。 [since 7 - 21]
   * @param { ScreenshotOptions } [options] - 要截取的图像信息。当指定截取屏幕为虚拟屏时，截取图像为白屏。 [since 22]
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
   * 获取屏幕截图，使用Promise异步回调。SDR为标准动态范围图，HDR为高动态范围图。
   * 
   * - 当物理屏存在HDR资源（包括HDR资源被遮挡）时，无论HDR是否开启，该接口返回一个包含SDR和HDR的PixelMap数组。
   * - 当物理屏不存在HDR资源时，与[save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)}
   * 接口返回一个SDR的PixelMap不同，该接口返回包含一个SDR的PixelMap数组。同时该接口不具备
   * [save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)}接口的裁剪、拉伸、旋转功能。
   *
   * @permission ohos.permission.CAPTURE_SCREEN [since 20 - 21]
   * @permission ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { HdrScreenshotOptions } [options] - 要截取的HDR图像信息。默认为空。
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
   * 获取屏幕全屏截图，使用Promise异步回调。
   * 
   * 此接口可以通过设置不同的displayId截取不同屏幕的截图，且只能截取全屏；[pick]{@link screenshot.pick}接口可实现区域截屏。
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE [since 14 - 21]
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE or ohos.permission.CUSTOM_SCREEN_RECORDING [since 22]
   * @param { CaptureOption } options - 截取图像的相关信息。此参数不填时，默认截取displayId为0的屏幕截图。 [since 14 - 21]
   * @param { CaptureOption } [options] - 截取图像的相关信息。此参数不填时，默认截取displayId为0的屏幕截图。 [since 22]
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
   * 获取屏幕截图，当前仅支持获取displayId为0的屏幕截图（如果需要对扩展屏截图，可以通过[capture]{@link screenshot.capture}接口实现），使用Promise异步回调。
   *
   * @returns { Promise<PickInfo> } Promise对象。返回一个PickInfo对象。
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function pick(): Promise<PickInfo>;

  /**
   * 截取图像的信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PickInfo {
    /**
     * 表示截取图像的区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pickRect: Rect;

    /**
     * 表示截取的图像PixelMap对象。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
  }

  /**
   * 表示截取图像的区域。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 表示截取图像区域的左边界，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * 表示截取图像区域的上边界，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * 表示截取图像区域的宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 表示截取图像区域的高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * 表示截取图像的大小。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * 表示截取图像的宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 表示截取图像的高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * 设置截取图像的信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface CaptureOption {
    /**
     * 表示截取图像的显示设备[Display]{@link @ohos.display:display.DisplayState}的ID号，默认为0，该参数应为大于或等于0的整数，非整数会报参数错误。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * 表示截取图像时不显示的窗口ID列表，默认为空。窗口ID应为大于0的整数，目前仅[闪控球窗口]{@link @ohos.window.floatingBall:floatingBall}生效，窗口ID为非闪控球窗口、非整数、小于
     * 等于0、或者不存在的窗口ID时报参数错误，错误码为401。推荐使用
     * [getFloatingBallWindowInfo()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.getFloatingBallWindowInfo}
     * 方法获取闪控球窗口ID属性。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    blackWindowIds?: Array<int>;
  }

  /**
   * 设置截取图像的信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface ScreenshotOptions {
    /**
     * 表示截取图像的区域，不传值默认返回displayId所在逻辑屏的区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    screenRect?: Rect;
    /**
     * 表示截取图像的区域，不传值默认返回displayId所在逻辑屏的区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    imageSize?: Size;
    /**
     * 表示截取图像后要旋转的角度，当前仅支持输入值为0，默认值为0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    rotation?: int;
    /**
     * 表示截取图像的显示设备[Display]{@link @ohos.display:display.DisplayState}的ID号，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId?: long;
    /**
     * 表示截取图像之后是否发送截屏通知，true表示发送截屏通知，false表示不发送截屏通知，默认值为true。截屏通知可以通过
     * [captureStatusChange]{@link @ohos.display:display.on(type: 'captureStatusChange', callback: Callback<boolean>)}接口
     * 监听。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    isNotificationNeeded?: boolean;
    /**
     * 表示是否截取当前Screen上的所有display。对于一个Screen上有多个display的场景，为true表示截取整个Screen，false则只截取displayId所在逻辑屏的区域，默认值为false。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isCaptureFullOfScreen?: boolean;
  }

  /**
   * 设置截取HDR图像的信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrScreenshotOptions {
    /**
     * 表示截取图像的显示设备[Display]{@link @ohos.display:display.DisplayState}的ID号，该参数应为整数。默认为0。
     *
     * @default The ID of the current display. The value is a positive integer greater than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayId?: long;
    /**
     * 表示截取图像之后是否发送截屏通知，true表示发送截屏通知，false表示不发送截屏通知，默认值为true。截屏通知可以通过
     * [captureStatusChange]{@link @ohos.display:display.on(type: 'captureStatusChange', callback: Callback<boolean>)}接口
     * 监听。
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isNotificationNeeded?: boolean;
    /**
     * 表示是否截取当前物理屏上所有DisplayId对应的逻辑屏。对于一个物理屏上有多个DisplayId的场景，true表示截取整个物理屏，false表示只截取DisplayId所在区域的逻辑屏。默认值为false。
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isCaptureFullOfScreen?: boolean;
    /**
     * 截取图像的显示类型。
     *
     * @type { ?DisplayIntentType }
     * @default DisplayIntentType.CANONICAL
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    displayIntent?: DisplayIntentType;
  }

  /**
   * 枚举截图显示意图类型。
   *
   * @enum { int }
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum DisplayIntentType {
    /**
     * 指定使用规范显示属性渲染屏幕截图，以优化HDR显示器上的演示输出。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CANONICAL = 0,

    /**
     * 指定使用本地显示属性渲染屏幕截图，以优化在捕获显示上的显示输出。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LOCAL = 1
  }
}

export default screenshot;