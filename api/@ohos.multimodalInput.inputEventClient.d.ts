/*
 * Copyright (C) 2021-2026 Huawei Device Co., Ltd.
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
 * @file Input Event Injection
 * @kit InputKit
 */

import { MouseEvent, Button, Axis } from './@ohos.multimodalInput.mouseEvent';

import { KeyCode} from './@ohos.multimodalInput.keyCode';

import { TouchEvent } from './@ohos.multimodalInput.touchEvent';

/**
 * The **inputEventClient** module provides the capability of injecting key, mouse/touchpad, and touchscreen events.
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
 * @systemapi hide for inner use [since 8 - 24]
 * @publicapi [since 26.0.0]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputEventClient {

  /**
   * Defines the key event to inject.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyEvent {

    /**
     * Whether the key is pressed.
     *
     * The value **true** indicates that the key is pressed, and the value **false** indicates that the key is released.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isPressed: boolean;

    /**
     * Key code. Currently, only the **KEYCODE_BACK** key is supported.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    keyCode: int;

    /**
     * Duration of key press, in microseconds (μs).
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    keyDownDuration: int;

    /**
     * Whether the key event can be intercepted.
     *
     * The value **true** indicates that the key event can be intercepted, and the value **false** indicates the
     * opposite.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isIntercepted: boolean;
  }

  /**
   * Defines the mouse event data.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface MouseEventData {

    /**
     * Mouse event.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    mouseEvent: MouseEvent;

    /**
     * Whether to use global coordinates to calculate the injected mouse event. The default value is **false**. If this
     * parameter is set to **false**, the coordinates of the relative coordinate system with the upper left corner of
     * the specified screen as the origin are used to calculate the injected mouse event. If this parameter is set to
     * **true**, the coordinates of the global coordinate system with the upper left corner of the primary screen as the
     * origin are used to calculate the injected mouse event.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 20 dynamic
     * @since 23 static
     */
    useGlobalCoordinate? : boolean;
  }

  /**
   * Defines the touch event data.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface TouchEventData {

    /**
     * Touch event.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    touchEvent: TouchEvent;

    /**
     * Whether to use global coordinates to calculate the injected touch event. The default value is **false**. If this
     * parameter is set to **false**, the coordinates of the relative coordinate system with the upper left corner of
     * the specified screen as the origin are used to calculate the injected touch event. If this parameter is set to
     * **true**, the coordinates of the global coordinate system with the upper left corner of the primary screen as the
     * origin are used to calculate the injected touch event.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 20 dynamic
     * @since 23 static
     */
    useGlobalCoordinate?: boolean;
  }

  /**
   * Defines the key event to inject.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface KeyEventData {

    /**
     * Key event to inject.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    keyEvent: KeyEvent;
  }

  /**
   * Defines the key event information injected by the user.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 23 dynamic&static
   */
  interface KeyEventInfo {

    /**
     * Key injection description.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 23 dynamic&static
     */
    KeyEvent: KeyEvent;
  }

  /**
   * Injects key events (for both single keys and combination keys).
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { KeyEventData } keyEvent - Key event to inject.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 201 - Permission denied. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  function injectKeyEvent(keyEvent: KeyEventData): void;

  /**
   * Injects keys (including single keys and combination keys).
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { { KeyEvent } } KeyEvent - Key event to inject.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 201 - Permission denied. [since 12]
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8 dynamic
   */
  function injectEvent({ KeyEvent: KeyEvent }): void;

  /**
   * Inject system keys.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { KeyEventInfo } keyEvent - the key event to be injected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 23 static
   */
  function injectEvent(keyEvent: KeyEventInfo): void;

  /**
   * Injects a mouse/touchpad event.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { MouseEventData } mouseEvent - Mouse/touchpad event to inject.
   *     [Action]{@link @ohos.multimodalInput.mouseEvent:Action} in this parameter cannot be set to **CANCEL**.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 201 - Permission denied. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  function injectMouseEvent(mouseEvent: MouseEventData): void;

  /**
   * Injects a touch event.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { TouchEventData } touchEvent - Touch event data. [Action]{@link @ohos.multimodalInput.touchEvent:Action} in
   *     this parameter cannot be set to **CANCEL**.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 201 - Permission denied. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  function injectTouchEvent(touchEvent: TouchEventData): void;

  /**
   * Specifies whether to authorize event injection.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { boolean } result - Authorization result. The value **true** indicates that event injection is allowed,
   *     and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  function permitInjection(result: boolean): void;

  /**
   * Provides the capability of simulating key operations. The simulated key operation sequence must meet the following
   * requirements:
   *
   * 1. A key can only be pressed when it is in the released state, or when it is the most recently pressed key and
   * has not been released.
   * 2. A key can only be released after it has been pressed.
   * 3. A maximum of five keys can be pressed and held simultaneously.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface KeyboardController {

    /**
     * Presses a key. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { KeyCode } keyCode - Key code of the key to be pressed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The key is already pressed and is not the most recently
     *     pressed key.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pressKey(keyCode: KeyCode): Promise<void>;

    /**
     * Releases a key. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { KeyCode } keyCode - Key code of the key to be released.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The key is not pressed.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    releaseKey(keyCode: KeyCode): Promise<void>;
  }

  /**
   * Creates a keyboard controller for simulating key operations. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<KeyboardController> } Promise used to return the keyboard controller instance.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createKeyboardController(): Promise<KeyboardController>;

  /**
   * Provides the capability of simulating mouse operations. The simulated mouse operation sequence must meet the
   * following requirements:
   *
   * 1. A mouse button can be pressed only when it is in the released state.
   * 2. A mouse button can only be released after it has been pressed.
   * 3. A valid axis event sequence must begin with a **beginAxis** call, followed by zero or more **updateAxis** calls,
   * and end with an **endAxis** call.
   * 4. Only one axis event sequence can be in progress at a time.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MouseController {

    /**
     * Moves the mouse cursor to the specified display coordinates. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { int } displayId - ID of the target display.
     * @param { int } displayX - X coordinate relative to the left edge of the display, in px. If the value exceeds the
     *     valid range of the display, the actual coordinate will be clamped to the valid range [0, display width - 1].
     * @param { int } displayY - Y coordinate relative to the top edge of the display, in px. If the value exceeds the
     *     valid range of the display, the actual coordinate will be clamped to the valid range [0, display height - 1].
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300002 - The display does not exist.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    moveTo(displayId: int, displayX: int, displayY: int): Promise<void>;

    /**
     * Presses a mouse button. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Button } button - Mouse button to be pressed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The mouse button is already pressed.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pressButton(button: Button): Promise<void>;

    /**
     * Release a mouse button. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Button } button - Mouse button to be released.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The mouse button is not pressed.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    releaseButton(button: Button): Promise<void>;

    /**
     * Starts an axis event. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - Axis type.
     * @param { int } value - Axis value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The axis event in progress.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    beginAxis(axis: Axis, value: int): Promise<void>;

    /**
     * Updates an axis event. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - Axis type.
     * @param { int } value - Axis value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The axis event is not in progress.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updateAxis(axis: Axis, value: int): Promise<void>;

    /**
     * Ends an axis event. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - Axis type.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - The axis event is not in progress.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    endAxis(axis: Axis): Promise<void>;
  }

  /**
   * Creates a mouse controller for simulating mouse operations. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<MouseController> } Promise used to return the mouse controller instance.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createMouseController(): Promise<MouseController>;

  /**
   * Represents information about a single touch point on the display.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TouchPoint {

    /**
     * Unique ID of a touch point. The value must be an integer in the range of [0, 9].
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    id: int;

    /**
     * Unique ID of the display where the touch point is located. The value must be an integer.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId: int;

    /**
     * X coordinate of the touch point relative to the left edge of the display, in pixels. The value must be an
     * integer.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayX: int;

    /**
     * Y coordinate of the touch point relative to the top edge of the display, in pixels. The value must be an integer.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayY: int;
  }

  /**
   * Provides the capability of simulating touch operations. The simulated touch operation sequence must meet the
   * following requirements:
   *
   * 1. All touch points must share the same **displayId**.
   * 2. Each touch point must begin with a **touchDown()** call, followed by zero or more **touchMove()** calls, and end
   * with an **touchUp()** call.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TouchController {

    /**
     * Presses down a touch point. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - Information about the touch point that is in contact with the display.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - Invalid input event sequence. Possible causes:
     *     <br>
     *     1. The touch point is touching the display; 2. The touch point ID is not within the valid range [0,9].
     * @throws { BusinessError } 4300002 - The display does not exist.
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    touchDown(touch: TouchPoint): Promise<void>;

    /**
     * Moves a touch point. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - Information about the touch point to be moved.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - Invalid input event sequence. Possible causes:
     *     <br>
     *     1. The touch point is not touching the display; 2. The touch point ID is not within the valid range [0,9].
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    touchMove(touch: TouchPoint): Promise<void>;

    /**
     * Releases a touch point. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - Information about the touch point to be released.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 4300001 - Invalid input event sequence. Possible causes:
     *     <br>
     *     1. The touch point is not touching the display; 2. The touch point ID is not within the valid range [0,9].
     * @throws { BusinessError } 3800001 - Input service exception.
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    touchUp(touch: TouchPoint): Promise<void>;
  }

  /**
   * Creates a touch controller for simulating touch operations. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<TouchController> } Promise used to return the touch controller instance.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createTouchController(): Promise<TouchController>;
}

export default inputEventClient;