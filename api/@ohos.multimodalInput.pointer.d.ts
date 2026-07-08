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
 * The **pointer** module provides APIs related to pointer attribute management, such as querying and setting pointer
 * attributes.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace pointer {

  /**
   * Mouse pointer style types.
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
     * Running in the background (extension 1)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    RUNNING_LEFT = 45,

    /**
     * Running in the background (extension 2)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    RUNNING_RIGHT = 46,

    /**
     * Custom circular pointer
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    AECH_DEVELOPER_DEFINED_ICON = 47,

    /**
     * Screen recording
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    SCREENRECORDER_CURSOR = 48,

    /**
     * Floating This pointer can be used only when the stylus enters the air mouse mode and cannot be directly set.
     *
     * In air mouse mode, you can rotate the stylus in the air to control the movement of the virtual pointer on the
     * screen and press the button on the stylus to turn pages up or down. This mode is used for PPT presentation and
     * air gesture control.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR = 49,

    /**
     * Click This pointer can be used only when the stylus enters the air mouse mode and cannot be directly set.
     *
     * In air mouse mode, you can rotate the stylus in the air to control the movement of the virtual pointer on the
     * screen and press the button on the stylus to turn pages up or down. This mode is used for PPT presentation and
     * air gesture control.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR_DOT = 50,

    /**
     * Laser pointer This pointer can be used only when the stylus enters the air mouse mode and cannot be directly set.
     *
     * In air mouse mode, you can rotate the stylus in the air to control the movement of the virtual pointer on the
     * screen and press the button on the stylus to turn pages up or down. This mode is used for PPT presentation and
     * air gesture control.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    LASER_CURSOR_DOT_RED = 51,

    /**
     * Custom pointer. You can use [setCustomCursor]{@link pointer.setCustomCursor} to set a custom pointer. The custom
     * pointer cannot be directly set using [setPointerStyle]{@link pointer.setPointerStyle}.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 22 dynamic
     * @since 23 static
     */
    DEVELOPER_DEFINED_ICON = -100
  }

  /**
   * Type of the primary mouse button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum PrimaryButton {

    /**
     * Left button.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    LEFT = 0,

    /**
     * Right button.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    RIGHT = 1
  }

  /**
   * Enumerates shortcut menu triggering modes.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum RightClickType {

    /**
     * Tapping the right-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_RIGHT_BUTTON = 1,

    /**
     * Tapping the left-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_LEFT_BUTTON = 2,

    /**
     * Tapping or pressing the touchpad with two fingers.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP = 3,

    /**
     * Tapping or pressing the touchpad with two fingers, or tapping the right-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON = 4,

    /**
     * Tapping or pressing the touchpad with two fingers, or tapping the left-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON = 5
  }

  /**
   * Defines custom cursor resources.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CustomCursor {

    /**
     * Pixel map. The minimum size is subject to the minimum limit of the image. The maximum size is 256 x 256 px.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;

    /**
     * Horizontal coordinate of the custom pointer focus, in px. This coordinate is limited by the custom pointer size.
     * The minimum value is 0, and the maximum value is the maximum width of the resource image. The default value is
     * **0** when this parameter is omitted.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusX?: int;

    /**
     * Vertical coordinate of the custom pointer focus, in px. This coordinate is limited by the custom pointer size.
     * The minimum value is 0, and the maximum value is the maximum width of the resource image. The default value is
     * **0** when this parameter is omitted.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusY?: int;
  }

  /**
   * Defines custom cursor configuration.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CursorConfig {

    /**
     * Whether to adjust the cursor size based on system settings. The value **true** means to adjust the cursor size
     * based on system settings, and the value **false** means to use the custom cursor size. The adjustment range is
     * [size of the cursor image, 256 x 256].
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    followSystem : boolean;
  }

  /**
   * Sets the mouse pointer speed. This API uses an asynchronous callback to return the result.
   *
   * @param { int } speed - Mouse pointer speed. The value ranges from **1** to **20**. The default value is **10**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the mouse pointer speed. This API uses a promise to return the result.
   *
   * @param { int } speed - Mouse pointer speed. The value ranges from **1** to **20**. The default value is **10**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the mouse pointer speed. This API returns the result synchronously.
   *
   * @param { int } speed - Mouse pointer speed. The value ranges from **1** to **20**. The default value is **10**.
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
   * Obtains the mouse pointer speed. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **number** is the mouse pointer speed. Otherwise, **err** is an error object.
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
   * Obtains the mouse pointer speed. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the mouse pointer speed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerSpeed(): Promise<int>;

  /**
   * Obtains the mouse pointer speed. This API returns the result synchronously.
   *
   * @returns { int } Mouse pointer speed. The value ranges from 1 to 20.
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
   * Sets the mouse pointer style type for a specified window. This API can set only the mouse pointer style type of
   * windows within the current application process. For details about how to set the mouse pointer style type of the
   * host window through the **UIExtensionAbility** process, see
   * [setCursor]{@link @ohos.arkui.UIContext:CursorController.setCursor}. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to 0.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window can be
   *     set properly.
   *     <br>If the window ID is valid but the window does not exist, the mouse pointer style can also be set properly.
   *     <br>The result can be obtained through [getPointerStyle]{@link pointer.getPointerStyle}.
   * @param { PointerStyle } pointerStyle - Pointer style. Do not pass **DEVELOPER_DEFINED_ICON**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the mouse pointer style type for a specified window. This API can set only the mouse pointer style type of
   * windows within the current application process. For details about how to set the mouse pointer style type of the
   * host window through the **UIExtensionAbility** process, see
   * [setCursor]{@link @ohos.arkui.UIContext:CursorController.setCursor}. This uses a promise to return the result.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to 0.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window can be
   *     set properly.
   *     <br>If the window ID is valid but the window does not exist, the mouse pointer style can also be set properly.
   *     <br>The result can be obtained through [getPointerStyle]{@link pointer.getPointerStyle}.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the mouse pointer style type for a specified window and returns the result synchronously. This API can set
   * only the mouse pointer style type of windows within the current application process. For details about how to set
   * the mouse pointer style type of the host window through the **UIExtensionAbility** process, see
   * [setCursor]{@link @ohos.arkui.UIContext:CursorController.setCursor}.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to 0.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window can be
   *     set properly.
   *     <br>If the window ID is valid but the window does not exist, the mouse pointer style can also be set properly.
   *     <br>The result can be obtained through [getPointerStyleSync]{@link pointer.getPointerStyleSync}.
   * @param { PointerStyle } pointerStyle - Pointer style.
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
   * Obtains the mouse pointer style type of a specified window. This API can obtain only the mouse pointer style type
   * of windows within the current application process. This API uses an asynchronous callback to return the result.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to **-1**. The value **-1**
   *     indicates the global window.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window is
   *     returned.
   *     <br>If the window ID is valid but the window does not exist, the global mouse pointer style is returned by
   *     default.
   *     <br>If the mouse pointer style is set for a non-existent window through
   *     [setPointerStyle]{@link pointer.setPointerStyle}, this API can obtain the mouse pointer style properly.
   * @param { AsyncCallback<PointerStyle> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and **data** is the mouse pointer style type. Otherwise, **err** is an
   *     error object. In specific scenarios (obtaining the style on a window with a custom pointer style),
   *     **DEVELOPER_DEFINED_ICON** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int, callback: AsyncCallback<PointerStyle>): void;

  /**
   * Obtains the mouse pointer style type. This API can obtain only the mouse pointer style type of windows within the
   * current application process. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to **-1**. The value **-1**
   *     indicates the global window.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window is
   *     returned.
   *     <br>If the window ID is valid but the window does not exist, the global mouse pointer style is returned by
   *     default.
   *     <br>If the mouse pointer style is set for a non-existent window through
   *     [setPointerStyle]{@link pointer.setPointerStyle}, this API can obtain the mouse pointer style properly.
   * @returns { Promise<PointerStyle> } Promise object, which is used to return the mouse pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int): Promise<PointerStyle>;

  /**
   * Queries the mouse pointer style type of a specified window, such as east arrow, west arrow, south arrow, and north
   * arrow. This API can obtain only the mouse pointer style type of windows within the current application process.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to **-1**. The value **-1**
   *     indicates the global window.
   *     <br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window is
   *     returned.
   *     <br>If the window ID is valid but the window does not exist, the global mouse pointer style is returned by
   *     default.
   *     <br>If the mouse pointer style is set for a non-existent window through
   *     [setPointerStyleSync]{@link pointer.setPointerStyleSync}, this API can obtain the mouse pointer style properly.
   * @returns { PointerStyle } Mouse pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerStyleSync(windowId: int): PointerStyle;

  /**
   * Sets whether the mouse pointer is visible in the current window. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { boolean } visible - Whether the mouse pointer is visible in the current window. The value **true**
   *     indicates that the mouse pointer is visible, and the value **false** indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported; [since 18]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the mouse pointer is visible in the current window. This API uses a promise to return the result.
   *
   * @param { boolean } visible - Whether the mouse pointer is visible in the current window. The value **true**
   *     indicates that the mouse pointer is visible, and the value **false** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported; [since 18]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean): Promise<void>;

  /**
   * Sets whether the mouse pointer is visible in the current window. This API returns the result synchronously.
   *
   * @param { boolean } visible - Whether the mouse pointer is visible in the current window. The value **true**
   *     indicates that the mouse pointer is visible, and the value **false** indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerVisibleSync(visible: boolean): void;

  /**
   * Obtains the visible status of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **data** is the visible status of the mouse pointer (**true** if visible and
   *     **false** if invisible). Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the visible status of the mouse pointer. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. **true** is returned if the mouse pointer is
   *     visible; **false** is returned if the mouse pointer is hidden.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(): Promise<boolean>;

  /**
   * Checks whether the mouse pointer is visible in the current window. This API returns the result synchronously.
   *
   * @returns { boolean } Visible status of the mouse pointer. The value **true** indicates that the mouse pointer is
   *     visible, and the value **false** indicates the opposite.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function isPointerVisibleSync(): boolean;

  /**
   * Sets the mouse pointer color. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device.
   *
   * @param { int } color - Pointer color. The default value is **black** (0x000000).
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the mouse pointer color. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device.
   *
   * @param { int } color - Pointer color. The default value is **black** (0x000000).
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the pointer color. This API returns the result synchronously.
   *
   * > **NOTE**
   * >
   * > When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device.
   *
   * @param { int } color - Pointer color. The default value is **black** (0x000000).
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
   * Obtains the mouse pointer color. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **number** is the obtained mouse pointer color. Otherwise, **err** is an error
   *     object.
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
   * Obtains the current mouse pointer color. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the mouse pointer color.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColor(): Promise<int>;

  /**
   * Obtains the pointer color. This API returns the result synchronously.
   *
   * @returns { int } Pointer color.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColorSync(): int;

  /**
   * Sets the mouse pointer size. This API uses an asynchronous callback to return the result.
   *
   * @param { int } size - Pointer size. The value ranges from **1** to **7**. The default value is **1**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the mouse pointer size. This API uses a promise to return the result.
   *
   * @param { int } size - Pointer size. The value ranges from **1** to **7**. The default value is **1**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the pointer size. This API returns the result synchronously.
   *
   * @param { int } size - Pointer size. The value ranges from **1** to **7**. The default value is **1**.
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
   * Obtains the current mouse pointer size. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **number** is the obtained mouse pointer size (value range: [1-7]). Otherwise,
   *     **err** is an error object.
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
   * Obtains the current mouse pointer size. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the mouse pointer size. The value ranges from 1 to 7.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSize(): Promise<int>;

  /**
   * Obtains the pointer size. This API returns the result synchronously.
   *
   * @returns { int } Mouse pointer size. The value ranges from **1** to **7**.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSizeSync(): int;

  /**
   * Sets the primary mouse button. This API uses an asynchronous callback to return the result.
   *
   * @param { PrimaryButton } primary - Type of the primary mouse button.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the primary mouse button. This API uses a promise to return the result.
   *
   * @param { PrimaryButton } primary - Type of the primary mouse button.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the current primary mouse button. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<PrimaryButton> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and **PrimaryButton** is the obtained key value. Otherwise, **err** is an
   *     error object.
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
   * Obtains the current primary mouse button. This API uses a promise to return the result.
   *
   * @returns { Promise<PrimaryButton> } Promise used to return the primary mouse button.
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
   * Sets the mouse hover scrolling switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Status of the mouse hover scroll switch. The value **true** indicates that the switch is
   *     enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the status of the mouse hover scroll switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - Status of the mouse hover scroll switch. The value **true** indicates that the switch is
   *     enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the mouse hover scrolling switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **true** (default) will be returned if the switch is enabled while false will be
   *     returned if the switch is disabled. If the operation fails, **err** is an error object.
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
   * Obtains the status of the mouse hover scroll switch. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the mouse hover
   *     scrolling switch is enabled, and the value **false** indicates that the switch is disabled. The default value
   *     is **true**.
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
   * Sets the number of mouse scroll lines. This API uses an asynchronous callback to return the result.
   *
   * @param { int } rows - Number of mouse scroll lines. The value ranges from 1 to 100. The default value is **3**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the number of mouse scroll lines. This API uses a promise to return the result.
   *
   * @param { int } rows - Number of mouse scroll lines. The value ranges from 1 to 100. The default value is **3**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the number of mouse scroll lines. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **number** is the number of mouse scroll lines. Otherwise, **err** is an error
   *     object.
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
   * Obtains the number of mouse scroll lines. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the number of mouse scroll lines.
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
   * Sets the touchpad scroll switch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Scroll switch status. The value **true** indicates that the switch is enabled, and the
   *     value **false** indicates the opposite. The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad scroll switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - Scroll switch status. The value **true** indicates that the switch is enabled, and the
   *     value **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad scroll switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **state** indicates whether the scroll switch state (**true** indicates yes and
   *     **false** indicates no; default value: **true**). Otherwise, **err** is an error object.
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
   * Obtains the touchpad scroll switch state. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad
   *     scroll switch is enabled, and the value **false** indicates that the touchpad scroll is disabled. The default
   *     value is **true**.
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
   * Sets the touchpad scroll direction. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Touchpad scroll direction.
   *     <br>The value **true** indicates that the scroll direction is the same as the finger moving direction, and the
   *     value **false** indicates the opposite.
   *     <br>The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad scroll direction. This API uses a promise to return the result.
   *
   * @param { boolean } state - Touchpad scroll direction.
   *     <br>The value **true** indicates that the scroll direction is the same as the finger moving direction, and the
   *     value **false** indicates the opposite.
   *     <br>The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad scroll direction. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **state** indicates whether the touchpad scroll direction matches the direction
   *     of finger movement (**true** indicates yes). Otherwise, **err** is an error object.
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
   * Obtains the scroll direction of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad
   *     scroll direction matches the direction of finger movement, and the value **false** indicates the opposite. The
   *     default value is **true**.
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
   * Sets the touchpad tap switch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Tap switch status of the touchpad The value **true** indicates that the switch is
   *     enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad tap switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - State of the touchpad tap switch. The value **true** indicates that the switch is
   *     enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad tap switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **state** indicates whether the touchpad tap switch is enabled (**true**
   *     indicates yes and **false** indicates no; default value: **true**). Otherwise, **err** is an error object.
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
   * Obtains the touchpad tap switch state. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad tap
   *     switch is enabled, and the value **false** indicates that the touchpad tap switch is disabled. The default
   *     value is **true**.
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
   * Sets the touchpad pointer speed. This API uses an asynchronous callback to return the result.
   *
   * @param { int } speed - Touchpad pointer speed The value range is [1,11]. The default value is **6**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad pointer speed. This API uses a promise to return the result.
   *
   * @param { int } speed - Touchpad pointer speed The value range is [1,11]. The default value is **6**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad pointer speed. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **number** is the obtained touchpad pointer speed. Otherwise, **err** is an error
   *     object.
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
   * Obtains the touchpad pointer speed. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the touchpad pointer speed. The value range is [1,11].
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
   * Sets the touchpad pinch switch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Touchpad pinch switch state. The value **true** indicates that the switch is enabled,
   *     and the value **false** indicates the opposite. The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad pinch switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - Touchpad pinch switch state. The value **true** indicates that the switch is enabled,
   *     and the value **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad pinch switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **state** indicates whether the touchpad pinch switch is enabled (**true**
   *     indicates yes and **false** indicates no; default value: **true**). Otherwise, **err** is an error object.
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
   * Obtains the touchpad pinch switch state. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad
   *     pinch switch is enabled, and the value **false** indicates that the touchpad pinch switch is disabled. The
   *     default value is **true**.
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
   * Sets the touchpad multi-finger swipe switch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Touchpad multi-finger swipe switch state. The value **true** indicates that the switch
   *     is enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad multi-finger swipe switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - Touchpad multi-finger swipe switch state. The value **true** indicates that the switch
   *     is enabled, and the value **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad multi-finger swipe switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **state** indicates whether the touchpad multi-finger swipe switch is enabled (
   *     **true** indicates yes and **false** indicates no; default value: **true**). Otherwise, **err** is an error
   *     object
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
   * Obtains the touchpad multi-finger swipe switch state. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad
   *     multi-finger swipe switch is enabled, and **false** indicates that the touchpad multi-finger swipe switch is
   *     disabled. The default value is **true**.
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
   * Sets the touchpad right-click menu type. This API uses an asynchronous callback to return the result.
   *
   * @param { RightClickType } type - Touchpad right-click menu type.
   *     <br>- TOUCHPAD_RIGHT_BUTTON: Tapping the right-button area of the touchpad.
   *     <br>- TOUCHPAD_LEFT_BUTTON: Tapping the left-button area of the touchpad.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP: Tapping or pressing the touchpad with two fingers.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON<sup>20+</sup>: Tapping or pressing the touchpad with two fingers,
   *     or tapping the right-button area of the touchpad.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON<sup>20+</sup>: Tapping or pressing the touchpad with two fingers,
   *     or tapping the left-button area of the touchpad.
   *     <br>The default value is **TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad right-click menu type. This API uses a promise to return the result.
   *
   * @param { RightClickType } type - Touchpad right-click menu type.
   *     <br>- TOUCHPAD_RIGHT_BUTTON: Tapping the right-button area of the touchpad.
   *     <br>- TOUCHPAD_LEFT_BUTTON: Tapping the left-button area of the touchpad.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP: Tapping or pressing the touchpad with two fingers.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON<sup>20+</sup>: Tapping or pressing the touchpad with two fingers,
   *     or tapping the right-button area of the touchpad.
   *     <br>- TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON<sup>20+</sup>: Tapping or pressing the touchpad with two fingers,
   *     or tapping the left-button area of the touchpad.
   *     <br>The default value is **TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad right-click menu type. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<RightClickType> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and the object is the touchpad right-click menu type. Otherwise, **err**
   *     is an error object.
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
   * Obtains the touchpad right-click menu type. This API uses a promise to return the result.
   *
   * @returns { Promise<RightClickType> } Promise used to return the touchpad right-click menu type.
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
   * Sets a custom pointer style for a specified window. This API can set only the custom pointer style of windows
   * within the current application process. For details about how to set the custom pointer style of the host window
   * through the **UIExtensionAbility** process, see
   * [setCustomCursor]{@link @ohos.arkui.UIContext:CursorController.setCustomCursor}. This API uses a promise to return
   * the result.
   *
   * @param { int } windowId - Window ID.
   * @param { image.PixelMap } pixelMap - Custom cursor resource.
   * @param { int } focusX - Custom cursor focus X, in px. The value must be greater than or equal to 0. The default
   *     value is **0**.
   * @param { int } focusY - Custom cursor focus Y, in px. The value must be greater than or equal to 0. The default
   *     value is **0**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursor(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): Promise<void>;

  /**
   * Sets a custom pointer style for a specified window synchronously. This API can set only the custom pointer style of
   * windows within the current application process. For details about how to set the custom pointer style of the host
   * window through the **UIExtensionAbility** process, see
   * [setCustomCursor]{@link @ohos.arkui.UIContext:CursorController.setCustomCursor}.
   *
   * @param { int } windowId - Window ID. The value must be an integer greater than 0.
   * @param { image.PixelMap } pixelMap - Custom cursor resource.
   * @param { int } focusX - Custom pointer focus X, in px. The value must be greater than or equal to 0. The default
   *     value is **0**.
   * @param { int } focusY - Custom pointer focus Y, in px. The value must be greater than or equal to 0. The default
   *     value is **0**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursorSync(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): void;

  /**
   * Sets a custom pointer style for a specified window. This API can set only the custom pointer style of windows
   * within the current application process. For details about how to set the custom pointer style of the host window
   * through the **UIExtensionAbility** process, see
   * [setCustomCursor]{@link @ohos.arkui.UIContext:CursorController.setCustomCursor}. This API uses a promise to return
   * the result.
   *
   * The cursor may be switched back to the system style in the following cases: application window layout change, hot
   * zone switching, page redirection, moving of the cursor out of the window and then back to the window, or moving of
   * the cursor in different areas of the window. In this case, you need to reset the cursor style.
   *
   * @param { int } windowId - Window ID.
   * @param { CustomCursor } cursor - Custom cursor resource.
   * @param { CursorConfig } config - Custom cursor configuration, which specifies whether to adjust the cursor size
   *     based on system settings. If **followSystem** in **CursorConfig** is set to **true**, the supported adjustment
   *     range is [size of the cursor image, 256 x 256].
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the touchpad double-tap and drag switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isOpen - State of the double-tap and drag switch. The value **true** indicates that the switch
   *     is enabled, and the value **false** indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Sets the touchpad double-tap and drag switch state. This API uses a promise to return the result.
   *
   * @param { boolean } isOpen - State of the double-tap and drag switch. The value **true** indicates that the switch
   *     is enabled, and the value **false** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the touchpad double-tap and drag switch state. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **true** is returned if the switch is enabled while **false** is returned if the
   *     switch is disabled. Otherwise, **err** is an error object.
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
   * Obtains the touchpad double-tap and drag switch state. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touchpad
   *     double-tap and drag switch is enabled, and the value **false** indicates that the touchpad double-tap and drag
   *     switch is disabled.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getTouchpadDoubleTapAndDragState(): Promise<boolean>;

  /**
   * Sets the scroll direction of the mouse wheel. This API uses a promise to return the result asynchronously.
   *
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @param { boolean } inverted - Scroll direction of the mouse wheel.
   *     <br>The value **true** indicates that scroll direction matches the finger movement on the wheel, and the value
   *     **false** indicates that the scroll direction is opposite to the finger movement.
   *     <br>The default value is **true**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 24 dynamic&static
   */
  function setMouseScrollDirection(inverted: boolean): Promise<void>;

  /**
   * Obtains the scroll direction of the mouse wheel. This API uses a promise to return the result asynchronously.
   *
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the mouse wheel
   *     scroll direction is the same as the finger direction, and the value **false** indicates that the mouse wheel
   *     scroll direction is opposite to the finger direction. The default value is **true**.
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