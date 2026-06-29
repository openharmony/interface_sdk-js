/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Mouse Pointer
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';

import type image from './@ohos.multimedia.image';

/**
 * 本模块提供鼠标光标管理能力，包括查询、设置鼠标光标属性。
 * 
 * > **说明**：
 *
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace pointer {

  /**
   * 鼠标光标样式类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum PointerStyle {

    /**
     * Default
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * East arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    EAST = 1,

    /**
     * West arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    WEST = 2,

    /**
     * South arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH = 3,

    /**
     * North arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH = 4,

    /**
     * West-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    WEST_EAST = 5,

    /**
     * North-south arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_SOUTH = 6,

    /**
     * North-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_EAST = 7,

    /**
     * North-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_WEST = 8,

    /**
     * South-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH_EAST = 9,

    /**
     * South-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH_WEST = 10,

    /**
     * North-east and south-west adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_EAST_SOUTH_WEST = 11,

    /**
     * North-west and south-east adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_WEST_SOUTH_EAST = 12,

    /**
     * Cross (accurate selection)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CROSS = 13,

    /**
     * Copy
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CURSOR_COPY = 14,

    /**
     * Forbid
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CURSOR_FORBID = 15,

    /**
     * Color picker
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    COLOR_SUCKER = 16,

    /**
     * Grabbing hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_GRABBING = 17,

    /**
     * Opening hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_OPEN = 18,

    /**
     * Hand-shaped pointer
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_POINTING = 19,

    /**
     * Help
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HELP = 20,

    /**
     * Move
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MOVE = 21,

    /**
     * Left and right resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    RESIZE_LEFT_RIGHT = 22,

    /**
     * Up and down resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    RESIZE_UP_DOWN = 23,

    /**
     * Screenshot crosshair
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SCREENSHOT_CHOOSE = 24,

    /**
     * Screenshot
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SCREENSHOT_CURSOR = 25,

    /**
     * Text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    TEXT_CURSOR = 26,

    /**
     * Zoom in
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    ZOOM_IN = 27,

    /**
     * Zoom out
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    ZOOM_OUT = 28,

    /**
     * Scrolling east
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_EAST = 29,

    /**
     * Scrolling west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_WEST = 30,

    /**
     * Scrolling south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH = 31,

    /**
     * Scrolling north
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH = 32,

    /**
     * Scrolling north-south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_SOUTH = 33,

    /**
     * Scrolling north-east
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_EAST = 34,

    /**
     * Scrolling north-west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_WEST = 35,

    /**
     * Scrolling south-east
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH_EAST = 36,

    /**
     * Scrolling south-west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH_WEST = 37,

    /**
     * Moving as a cone in four directions
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_SOUTH_WEST_EAST = 38,

    /**
     * Horizontal text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    HORIZONTAL_TEXT_CURSOR = 39,

    /**
     * Cross
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_CROSS = 40,

    /**
     * Circle
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_CIRCLE = 41,

    /**
     * Animation loading
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOADING = 42,

    /**
     * Animation running in the background
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING = 43,

    /**
     * Scrolling east-west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 18 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_EAST_WEST = 44,

    /**
     * 后台运行中动画光标(拓展1)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    RUNNING_LEFT = 45,

    /**
     * 后台运行中动画光标(拓展2)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    RUNNING_RIGHT = 46,

    /**
     * 圆形自定义光标
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    AECH_DEVELOPER_DEFINED_ICON = 47,

    /**
     * 录屏光标
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    SCREENRECORDER_CURSOR = 48,

    /**
     * 悬浮光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。
     * 
     * 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR = 49,

    /**
     * 点击光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。
     * 
     * 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR_DOT = 50,

    /**
     * 激光笔光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。
     * 
     * 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR_DOT_RED = 51,

    /**
     * 自定义光标，开发者可使用
     * [setCustomCursor]{@link pointer.setCustomCursor(windowId: int, cursor: CustomCursor, config: CursorConfig)}设置自定义光
     * 标，不支持使用[setPointerStyle]{@link pointer.setPointerStyle(windowId: int, pointerStyle: PointerStyle)}直接设置。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    DEVELOPER_DEFINED_ICON = -100
  }

  /**
   * 鼠标主键类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum PrimaryButton {

    /**
     * 鼠标左键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    LEFT = 0,

    /**
     * 鼠标右键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    RIGHT = 1
  }

  /**
   * 右键菜单的触发方式。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum RightClickType {

    /**
     * 按压触控板右键区域。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_RIGHT_BUTTON = 1,

    /**
     * 按压触控板左键区域。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_LEFT_BUTTON = 2,

    /**
     * 双指轻击或双指按压触控板。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP = 3,

    /**
     * 双指轻击或双指按压触控板、或按压触控板右键区域。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON = 4,

    /**
     * 双指轻击或双指按压触控板、或按压触控板左键区域。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON = 5
  }

  /**
   * 自定义光标资源。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CustomCursor {

    /**
     * 自定义光标。最小限制为资源图本身的最小限制。最大限制为256 x 256px。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;

    /**
     * 自定义光标焦点的水平坐标。该坐标受自定义光标大小的限制。最小值为0，最大值为资源图的宽度最大值
     * 该参数缺省时默认为0，单位为像素（px）。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusX?: int;

    /**
     * 自定义光标焦点的垂直坐标。该坐标受自定义光标大小的限制。最小值为0，最大值为资源图的高度最大值
     * 该参数缺省时默认为0，单位为像素（px）。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusY?: int;
  }

  /**
   * 自定义光标配置。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CursorConfig {

    /**
     * 是否根据系统设置调整光标大小。false表示使用自定义光标样式大小，true表示根据系统设置调整光标大小，可调整范围为：[光标资源图大小，256×256]。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    followSystem : boolean;
  }

  /**
   * 设置鼠标移动速度，使用callback异步回调。
   *
   * @param { int } speed - 鼠标移动速度，范围1-20，默认为10。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标移动速度成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerSpeed(speed: int, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标移动速度，使用Promise异步回调。
   *
   * @param { int } speed - 鼠标移动速度，范围1-20，默认为10。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerSpeed(speed: int): Promise<void>;

  /**
   * 使用同步方式设置鼠标移动速度。
   *
   * @param { int } speed - 鼠标移动速度，范围1-20，默认为10。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSpeedSync(speed: int): void;

  /**
   * 获取鼠标移动速度，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取鼠标移动速度成功，err为undefined，number为鼠标移动速度；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerSpeed(callback: AsyncCallback<int>): void;

  /**
   * 获取当前鼠标移动速度，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回鼠标移动速度。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerSpeed(): Promise<int>;

  /**
   * 使用同步方式获取当前鼠标移动速度。
   *
   * @returns { int } 返回鼠标移动速度，范围1-20。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSpeedSync(): int;

  /**
   * 设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅
   * [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用callback异步回调。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于0的整数。<br>窗口ID合法并且对应窗口存在时，可以设置窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，也可以设置鼠标光标样式。<br>设置
   *     结果可通过[getPointerStyle]{@link pointer.getPointerStyle(windowId: int, callback: AsyncCallback<PointerStyle>)}获取。
   * @param { PointerStyle } pointerStyle - 鼠标样式。 不能传入DEVELOPER_DEFINED_ICON作为参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标样式类型成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   *     <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerStyle(windowId: int, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;

  /**
   * 设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅
   * [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用Promise异步回调。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于0的整数。<br>窗口ID合法并且对应窗口存在时，可以设置窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，也可以设置鼠标光标样式。<br>设置
   *     结果可通过[getPointerStyle]{@link pointer.getPointerStyle(windowId: int)}获取。
   * @param { PointerStyle } pointerStyle - 鼠标样式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   *     <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerStyle(windowId: int, pointerStyle: PointerStyle): Promise<void>;

  /**
   * 设置指定窗口的鼠标样式类型，使用同步方式返回结果。此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅
   * [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于0的整数。<br>窗口ID合法并且对应窗口存在时，可以设置窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，也可以设置鼠标光标样式。<br>设置
   *     结果可通过[getPointerStyleSync]{@link pointer.getPointerStyleSync}获取。
   * @param { PointerStyle } pointerStyle - 鼠标样式。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   *     <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerStyleSync(windowId: int, pointerStyle: PointerStyle): void;

  /**
   * 获取指定窗口的鼠标样式类型，此接口仅支持获取本应用进程内窗口的鼠标样式类型，使用callback异步回调。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于-1的整数，取值为-1时表示全局窗口。<br>窗口ID合法并且对应窗口存在时，返回窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，默认返回全局
   *     鼠标光标样式。<br>如果通过
   *     [setPointerStyle]{@link pointer.setPointerStyle(windowId: int, pointerStyle: PointerStyle, callback: AsyncCallback<void>)}
   *     接口为不存在的窗口设置了鼠标光标样式，使用本接口可以正常获取到该光标样式。
   * @param { AsyncCallback<PointerStyle> } callback - 回调函数。当获取鼠标样式类型成功时，err为undefined，data为鼠标样式类型；否则为错误对象。在特定场景（在设置自定义光
   *     标样式的窗口上获取样式）下返回DEVELOPER_DEFINED_ICON。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int, callback: AsyncCallback<PointerStyle>): void;

  /**
   * 获取鼠标样式类型，此接口仅支持获取本应用进程内窗口的鼠标样式类型，使用Promise异步回调。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于-1的整数，取值为-1时表示全局窗口。<br>窗口ID合法并且对应窗口存在时，返回窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，默认返回全局
   *     鼠标光标样式。<br>如果通过[setPointerStyle]{@link pointer.setPointerStyle(windowId: int, pointerStyle: PointerStyle)}接口为不存
   *     在的窗口设置了鼠标光标样式，使用本接口可以正常获取到该光标样式。
   * @returns { Promise<PointerStyle> } Promise对象，返回鼠标样式类型。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int): Promise<PointerStyle>;

  /**
   * 查询指定窗口的鼠标样式类型，如向东箭头、向西箭头、向南箭头、向北箭头等。此接口仅支持获取本应用进程内窗口的鼠标样式类型。
   *
   * @param { int } windowId - 窗口ID。取值范围为大于等于-1的整数，取值为-1时表示全局窗口。<br>窗口ID合法并且对应窗口存在时，返回窗口的鼠标光标样式。<br>窗口ID合法但窗口不存在时，默认返回全局
   *     鼠标光标样式。<br>如果通过[setPointerStyleSync]{@link pointer.setPointerStyleSync}接口为不存在的窗口设置了鼠标光标样式，使用本接口可以正常获取到该光标样式。
   * @returns { PointerStyle } 返回鼠标样式类型。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerStyleSync(windowId: int): PointerStyle;

  /**
   * 设置当前窗口的鼠标光标是否显示，使用callback异步回调。
   *
   * @param { boolean } visible - 当前窗口鼠标光标是否显示。true表示显示，false表示不显示。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标光标显示状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported; [since 18]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置当前窗口的鼠标光标是否显示，使用Promise异步回调。
   *
   * @param { boolean } visible - 当前窗口鼠标光标是否显示。true表示显示，false表示不显示。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported; [since 18]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean): Promise<void>;

  /**
   * 设置当前窗口鼠标光标的显示状态，使用同步方式。
   *
   * @param { boolean } visible - 当前窗口鼠标光标是否显示。true表示显示，false表示不显示。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerVisibleSync(visible: boolean): void;

  /**
   * 获取鼠标光标显示状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取鼠标光标显示状态成功，err为undefined，data为鼠标光标状态（true为显示，false为隐藏）；否则为错误对
   *     象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(callback: AsyncCallback<boolean>): void;

  /**
   * 获取鼠标光标显示状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示鼠标光标为显示状态；返回false表示鼠标光标为隐藏状态。
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(): Promise<boolean>;

  /**
   * 获取当前窗口鼠标光标的显示状态，使用同步方式。
   *
   * @returns { boolean } 返回鼠标光标显示或隐藏状态。true代表显示状态，false代表隐藏状态。
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function isPointerVisibleSync(): boolean;

  /**
   * 设置鼠标光标颜色，使用callback异步回调。
   * 
   * > **说明**：
   * >
   * > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。
   *
   * @param { int } color - 鼠标光标颜色，默认为黑色：0x000000。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColor(color: int, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标光标颜色，使用Promise异步回调。
   * 
   * > **说明**：
   * >
   * > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。
   *
   * @param { int } color - 鼠标光标颜色，默认为黑色：0x000000。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColor(color: int): Promise<void>;

  /**
   * 设置鼠标光标颜色，使用同步方式进行设置。
   * 
   * > **说明**：
   * >
   * > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。
   *
   * @param { int } color - 鼠标光标颜色，默认为黑色：0x000000。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColorSync(color: int): void;

  /**
   * 获取鼠标光标颜色，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取鼠标光标颜色成功，err为undefined，number是获取的鼠标光标颜色；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColor(callback: AsyncCallback<int>): void;

  /**
   * 获取当前鼠标光标颜色，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回鼠标光标颜色。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColor(): Promise<int>;

  /**
   * 获取鼠标光标颜色，使用同步方式返回结果。
   *
   * @returns { int } 鼠标光标颜色。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColorSync(): int;

  /**
   * 设置鼠标光标大小，使用callback异步回调。
   *
   * @param { int } size - 鼠标光标大小，范围为[1-7]，默认为1。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSize(size: int, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标光标大小，使用Promise异步回调。
   *
   * @param { int } size - 鼠标光标大小，范围为[1-7]，默认为1。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSize(size: int): Promise<void>;

  /**
   * 设置鼠标光标大小，使用同步方式进行设置。
   *
   * @param { int } size - 鼠标光标大小，范围为[1-7]，默认为1。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSizeSync(size: int): void;

  /**
   * 获取鼠标光标大小，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取鼠标光标大小成功，err为undefined，number是获取的鼠标光标大小，范围为[1-7]；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSize(callback: AsyncCallback<int>): void;

  /**
   * 获取当前鼠标光标大小，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回鼠标光标大小，范围为[1-7]。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSize(): Promise<int>;

  /**
   * 获取鼠标光标大小，使用同步方式返回结果。
   *
   * @returns { int } 鼠标光标大小，范围为[1-7]。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSizeSync(): int;

  /**
   * 设置鼠标主键，使用callback异步回调。
   *
   * @param { PrimaryButton } primary - 鼠标主键类型。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标主键成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMousePrimaryButton(primary: PrimaryButton, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标主键，使用Promise异步回调。
   *
   * @param { PrimaryButton } primary - 鼠标主键类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMousePrimaryButton(primary: PrimaryButton): Promise<void>;

  /**
   * 获取当前鼠标主键，使用callback异步回调。
   *
   * @param { AsyncCallback<PrimaryButton> } callback - 回调函数。当获取当前鼠标主键成功，err为undefined，PrimaryButton为获取到的键值；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMousePrimaryButton(callback: AsyncCallback<PrimaryButton>): void;

  /**
   * 获取当前鼠标主键，使用Promise异步回调。
   *
   * @returns { Promise<PrimaryButton> } Promise对象，返回鼠标主键。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMousePrimaryButton(): Promise<PrimaryButton>;

  /**
   * 设置鼠标悬停滚动开关状态，使用callback异步回调。
   *
   * @param { boolean } state - 鼠标悬停滚动开关状态。true代表开关开启，false代表开关关闭，默认开启。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标悬停滚动开关状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setHoverScrollState(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标悬停滚动开关状态，使用Promise异步回调。
   *
   * @param { boolean } state - 鼠标悬停滚动开关状态。true代表开关开启，false代表开关关闭，默认开启。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setHoverScrollState(state: boolean): Promise<void>;

  /**
   * 获取鼠标悬停滚动开关状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取鼠标悬停滚动开关状态成功，err为undefined，true代表开关开启，false代表开关关闭，默认开启；否则为错误对
   *     象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getHoverScrollState(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前鼠标悬停滚动开关状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示鼠标悬停滚动开关开启；返回false表示鼠标悬停滚动开关关闭。默认开启。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getHoverScrollState(): Promise<boolean>;

  /**
   * 设置鼠标滚动行数，使用callback异步回调。
   *
   * @param { int } rows - 鼠标滚动行数，范围1-100，默认为3。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置鼠标滚动行数成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMouseScrollRows(rows: int, callback: AsyncCallback<void>): void;

  /**
   * 设置鼠标滚动行数，使用Promise异步回调。
   *
   * @param { int } rows - 鼠标滚动行数，范围1-100，默认为3。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMouseScrollRows(rows: int): Promise<void>;

  /**
   * 获取鼠标滚动行数，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取鼠标滚动行数成功，err为undefined，number为获取到的滚动行数；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMouseScrollRows(callback: AsyncCallback<int>): void;

  /**
   * 获取当前鼠标滚动行数，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回鼠标滚动行数。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMouseScrollRows(): Promise<int>;

  /**
   * 设置触控板滚轴开关，使用callback异步回调。
   *
   * @param { boolean } state - 滚轴开关开启的状态，true代表开启，false代表关闭，默认为开启。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板滚轴开关成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板滚轴开关，使用Promise异步回调。
   *
   * @param { boolean } state - 滚轴开关开启的状态，true代表开启，false代表关闭，默认为开启。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollSwitch(state: boolean): Promise<void>;

  /**
   * 获取触控板滚轴能力开启状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板滚轴能力开启状态成功，err为undefined，state是true代表开启，false代表关闭，默认开启；否则为错
   *     误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板滚轴能力开启状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板滚轴能力开启；返回false表示触控板滚轴能力关闭。默认为开启。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollSwitch(): Promise<boolean>;

  /**
   * 设置触控板滚轴的方向，使用callback异步回调。
   *
   * @param { boolean } state - state为触控板滚轴的方向。<br>true与手指滑动的方向一致，false与手指滑动的方向相反。<br>默认为true。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板滚轴方向成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollDirection(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板滚轴的方向，使用Promise异步回调。
   *
   * @param { boolean } state - state为触控板滚轴的方向。<br>true与手指滑动的方向一致，false与手指滑动的方向相反。<br>默认为true。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollDirection(state: boolean): Promise<void>;

  /**
   * 获取触控板滚轴方向，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板滚轴方向成功，err为undefined，state是true与手指滑动的方向一致；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollDirection(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板滚轴方向，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板滚轴方向与手指滑动的方向一致；返回false表示触控板滚轴方向与手指滑动的方向相反。默认为true。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollDirection(): Promise<boolean>;

  /**
   * 设置触控板轻触功能开关，使用callback异步回调。
   *
   * @param { boolean } state - 触控板轻触功能开关开启状态。 true代表轻触开启，false代表轻触关闭，默认开启。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板轻触功能开关成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadTapSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板轻触功能开关，使用Promise异步回调。
   *
   * @param { boolean } state - 触控板轻触功能开关开启状态， true代表轻触开启，false代表轻触关闭，默认开启。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadTapSwitch(state: boolean): Promise<void>;

  /**
   * 获取触控板轻触能力开启状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板轻触功能开启状态成功，err为undefined，state是true代表开启，false代表关闭，默认开启；否则为错
   *     误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadTapSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板轻触功能开启状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板轻触功能开启；返回false表示触控板轻触功能关闭。默认开启。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadTapSwitch(): Promise<boolean>;

  /**
   * 设置触控板光标移动速度，使用callback异步回调。
   *
   * @param { int } speed - speed代表光标移动速度。speed取值范围[1,11]，默认6。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板光标移动速度成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPointerSpeed(speed: int, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板光标移动速度，使用Promise异步回调。
   *
   * @param { int } speed - speed代表光标移动速度。speed取值范围[1,11]，默认6。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPointerSpeed(speed: int): Promise<void>;

  /**
   * 获取触控板光标移动速度，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取触控板光标移动速度成功，err为undefined，number是获取的触控板光标移动速度；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPointerSpeed(callback: AsyncCallback<int>): void;

  /**
   * 获取触控板光标移动速度，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回触控板光标移动速度，speed取值范围[1,11]。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPointerSpeed(): Promise<int>;

  /**
   * 设置触控板双指捏合功能开关，使用callback异步回调。
   *
   * @param { boolean } state - 触控板双指捏合功能开关开启状态。 true代表开启，false代表关闭，默认开启。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板双指捏合功能开关成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPinchSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板双指捏合功能开关，使用Promise异步回调。
   *
   * @param { boolean } state - 触控板双指捏合功能开关开启状态。 true代表开启，false代表关闭，默认开启。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPinchSwitch(state: boolean): Promise<void>;

  /**
   * 获取触控板双指捏合功能开启状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板双指捏合功能开启状态成功，err为undefined，state是true代表功能开启，false代表功能关闭，默认开
   *     启；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPinchSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板双指捏合功能开启状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板双指捏合功能开启；返回false表示触控板双指捏合功能关闭。默认开启。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPinchSwitch(): Promise<boolean>;

  /**
   * 设置触控板多指滑动功能开关，使用callback异步回调。
   *
   * @param { boolean } state - 触控板多指滑动开关开启状态。 true代表多指滑动开启，false代表多指滑动关闭，默认开启。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板多指滑动功能开关成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadSwipeSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板多指滑动功能开关，使用Promise异步回调。
   *
   * @param { boolean } state - 触控板多指滑动功能开关开启状态。 true代表多指滑动开启，false代表多指滑动关闭，默认开启。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadSwipeSwitch(state: boolean): Promise<void>;

  /**
   * 获取触控板多指滑动功能开启状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板多指滑动功能开启状态成功，err为undefined，state是true代表多指滑动开启，false代表多指滑动关
   *     闭，默认开启；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadSwipeSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板多指滑动功能开启状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板多指滑动功能开启；返回false表示触控板多指滑动功能关闭。默认开启。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadSwipeSwitch(): Promise<boolean>;

  /**
   * 设置触控板右键菜单类型，使用callback异步回调。
   *
   * @param { RightClickType } type - type代表触控板右键菜单类型。<br>- TOUCHPAD_RIGHT_BUTTON：按压触控板右键区域。<br>- TOUCHPAD_LEFT_BUTTON：按
   *     压触控板左键区域。<br>- TOUCHPAD_TWO_FINGER_TAP：双指轻击或双指按压触控板。<br>- TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON<sup>20+</sup>
   *     ：双指轻击或双指按压触控板、或按压触控板右键区域。<br>- TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON<sup>20+</sup>：双指轻击或双指按压触控板、或按压触控板左键区域。
   *     <br>默认值为TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板右键菜单类型成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadRightClickType(type: RightClickType, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板右键菜单类型，使用Promise异步回调。
   *
   * @param { RightClickType } type - type代表触控板右键菜单类型。<br>- TOUCHPAD_RIGHT_BUTTON：按压触控板右键区域。<br>- TOUCHPAD_LEFT_BUTTON：按
   *     压触控板左键区域。<br>- TOUCHPAD_TWO_FINGER_TAP：双指轻击或双指按压触控板。<br>- TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON<sup>20+</sup>
   *     ：双指轻击或双指按压触控板、或按压触控板右键区域。<br>- TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON<sup>20+</sup>：双指轻击或双指按压触控板、或按压触控板左键区域。
   *     <br>默认值为TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadRightClickType(type: RightClickType): Promise<void>;

  /**
   * 获取触控板右键菜单类型，使用callback异步回调。
   *
   * @param { AsyncCallback<RightClickType> } callback - 回调函数。当获取触控板右键菜单类型成功，err为undefined，对象是触控板右键菜单类型；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadRightClickType(callback: AsyncCallback<RightClickType>): void;

  /**
   * 获取触控板右键菜单类型，使用Promise异步回调。
   *
   * @returns { Promise<RightClickType> } Promise对象，返回触控板右键菜单类型。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadRightClickType(): Promise<RightClickType>;

  /**
   * 设置指定窗口的自定义光标样式，此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅
   * [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)，使用
   * Promise异步回调。
   *
   * @param { int } windowId - 窗口ID。
   * @param { image.PixelMap } pixelMap - 自定义光标资源。
   * @param { int } focusX - 自定义光标焦点x，取值范围：大于等于0，默认为0，单位为像素（px）。
   * @param { int } focusY - 自定义光标焦点y，取值范围：大于等于0，默认为0，单位为像素（px）。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursor(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): Promise<void>;

  /**
   * 设置指定窗口的自定义光标样式，使用同步方式进行设置。此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅
   * [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)。
   *
   * @param { int } windowId - 窗口ID。取值为大于0的整数。
   * @param { image.PixelMap } pixelMap - 自定义光标资源。
   * @param { int } focusX - 自定义光标焦点x，取值范围：大于等于0，默认为0，单位为像素（px）。
   * @param { int } focusY - 自定义光标焦点y，取值范围：大于等于0，默认为0，单位为像素（px）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursorSync(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): void;

  /**
   * 设置指定窗口的自定义光标样式，此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅
   * [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)，使用
   * Promise异步回调。
   * 
   * 应用窗口布局改变、热区切换、页面跳转、光标移出再回到窗口、光标在窗口不同区域移动，以上场景可能导致光标切换回系统样式，需要开发者重新设置光标样式。
   *
   * @param { int } windowId - 窗口ID。
   * @param { CustomCursor } cursor - 自定义光标资源。
   * @param { CursorConfig } config - 自定义光标配置，用于配置是否根据系统设置调整光标大小。如果CursorConfig中followSystem设置为true，则光标大小的可调整范围为：
   *     [光标资源图大小，256×256]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Abnormal windowId parameter passed in;
   *     <br>2. Abnormal pixelMap parameter passed in; 3. Abnormal focusX parameter passed in;
   *     <br>4. Abnormal focusY parameter passed in.
   * @throws { BusinessError } 26500001 - Invalid windowId. Possible causes: The window id does not belong to the
   *     current process.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  function setCustomCursor(windowId: int, cursor: CustomCursor, config: CursorConfig): Promise<void>;

  /**
   * 设置触控板双击拖拽开关状态，使用callback异步回调。
   *
   * @param { boolean } isOpen - 双击拖拽开关的状态，true代表开启，false代表关闭。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置触控板双击拖拽开关状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置触控板双击拖拽开关状态，使用Promise异步回调。
   *
   * @param { boolean } isOpen - 双击拖拽开关的状态，true代表开启，false代表关闭。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean): Promise<void>;

  /**
   * 获取触控板双击拖拽开关的开启状态，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当获取触控板双击拖拽开关的开启状态成功，err为undefined，返回true代表开启，返回false代表关闭；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getTouchpadDoubleTapAndDragState(callback: AsyncCallback<boolean>): void;

  /**
   * 获取触控板双击拖拽开关的开启状态，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示触控板双击拖拽功能开启；返回false表示触控板双击拖拽功能关闭。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getTouchpadDoubleTapAndDragState(): Promise<boolean>;

  /**
   * 设置鼠标滚轮滚动的方向，使用Promise异步回调。
   *
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @param { boolean } inverted - inverted为鼠标滚轮滚动的方向。<br>true与鼠标滚轮滚动的手指方向一致，false与鼠标滚轮滚动的手指方向相反。<br>默认为true。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 24 dynamic&static
   */
  function setMouseScrollDirection(inverted: boolean): Promise<void>;

  /**
   * 获取鼠标滚轮滚动方向，使用Promise异步回调。
   *
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @returns { Promise<boolean> } Promise对象。返回true表示鼠标滚轮滚动方向与手指方向一致；返回false表示鼠标滚轮滚动方向与手指方向相反。默认为true。
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 24 dynamic&static
   */
  function getMouseScrollDirection(): Promise<boolean>;
}

export default pointer;