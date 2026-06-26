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
 * 输入事件注入模块，提供输入按键、鼠标/触控板、触屏输入事件注入能力。
 * 
 * > **说明：**
 * >
 * > - 本模块接口为系统接口。
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
 * @systemapi hide for inner use [since 8 - 24]
 * @publicapi [since 26.0.0]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputEventClient {

  /**
   * 按键注入描述信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyEvent {

    /**
     * 按键是否按下。
     * 
     * true表示按键按下，false表示按键抬起。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isPressed: boolean;

    /**
     * 按键键值。当前仅支持返回键/KEYCODE_BACK键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    keyCode: int;

    /**
     * 按键按下持续时间，单位为微秒（μs）。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    keyDownDuration: int;

    /**
     * 按键是否可以被拦截。
     * 
     * true表示可以被拦截，false表示不可被拦截。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isIntercepted: boolean;
  }

  /**
   * 鼠标注入描述信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface MouseEventData {

    /**
     * 鼠标事件。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    mouseEvent: MouseEvent;

    /**
     * 是否使用全局坐标来计算注入的鼠标事件。默认值为false，取值为false表示使用以指定屏幕左上角为原点的相对坐标系的坐标来计算注入的鼠标事件。取值为true表示使用以主屏左上角为原点的全局坐标系的坐标来计算注入的鼠标事件。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 20 dynamic
     * @since 23 static
     */
    useGlobalCoordinate? : boolean;
  }

  /**
   * 触屏注入描述信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface TouchEventData {

    /**
     * 触屏输入事件。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    touchEvent: TouchEvent;

    /**
     * 是否使用全局坐标来计算注入的触屏输入事件。默认值为false，取值为false表示使用以指定屏幕左上角为原点的相对坐标系的坐标来计算注入的触屏输入事件。取值为true表示使用以主屏左上角为原点的全局坐标系的坐标来计算注入的触屏
     * 输入事件。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 20 dynamic
     * @since 23 static
     */
    useGlobalCoordinate?: boolean;
  }

  /**
   * 按键注入描述信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  interface KeyEventData {

    /**
     * 按键注入描述信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    keyEvent: KeyEvent;
  }

  /**
   * 定义用户注入的按键事件信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 23 dynamic&static
   */
  interface KeyEventInfo {

    /**
     * 按键注入描述信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 23 dynamic&static
     */
    KeyEvent: KeyEvent;
  }

  /**
   * 按键(包括单个按键和组合键)事件注入。
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { KeyEventData } keyEvent - 按键事件注入描述信息。
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
   * 按键(包括单个按键和组合键)注入。
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { { KeyEvent } } KeyEvent - 按键注入描述信息。
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
   * 按键(包括单个按键和组合键)注入。
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { KeyEventInfo } keyEvent - 按键注入描述信息。.
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
   * 鼠标/触控板事件注入。
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { MouseEventData } mouseEvent - 鼠标/触控板事件注入描述信息。此参数中[Action]{@link @ohos.multimodalInput.mouseEvent:Action}属性
   *     不支持设置为CANCEL。
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
   * 触屏输入事件注入。
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT [since 12]
   * @param { TouchEventData } touchEvent - 触屏注入描述信息。此参数中[Action]{@link @ohos.multimodalInput.touchEvent:Action}属性不支持设置为
   *     CANCEL。
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
    * 允许事件注入权限。
    *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { boolean } result - 授权结果（true表示：允许事件注入，false表示：不允许事件注入）。
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
   * 提供模拟按键操作的功能。模拟按键操作序列必须满足以下要求：
   * 
   * 1. 按键只能在抬起状态下被按下，或者在该按键是最近按下的按键且未抬起的情况下被按下。
   * 2. 按键只能在被按下后才能抬起。
   * 3. 最多可以同时按下并保持五个按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface KeyboardController {

    /**
     * 按下按键。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { KeyCode } keyCode - 要按下的按键键码。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 抬起按键。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { KeyCode } keyCode - 要抬起的按键键码。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 创建键盘控制器，用于模拟按键操作。使用Promise异步回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<KeyboardController> } Promise对象，返回键盘控制器实例。
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
   * 提供模拟鼠标操作的功能。模拟鼠标操作序列必须满足以下要求：
   * 
   * 1. 鼠标按键只能在抬起状态下被按下。
   * 2. 鼠标按键只能在被按下后才能抬起。
   * 3. 有效的轴事件序列必须先调用beginAxis开始事件，然后调用零次或多次updateAxis更新事件，最后调用endAxis结束事件。
   * 4. 同一时间只能有一个进行中的轴事件序列。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MouseController {

    /**
     * 将鼠标光标移动到指定的显示器坐标。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { int } displayId - 目标显示器ID。
     * @param { int } displayX - 目标位置相对于显示器左边缘的X坐标，单位为像素（px）。若超出显示器有效范围，则实际坐标值会规约到有效范围[0, 显示器宽度-1]。
     * @param { int } displayY - 目标位置相对于显示器上边缘的Y坐标，单位为像素（px）。若超出显示器有效范围，则实际坐标值会规约到有效范围[0, 显示器高度-1]。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 按下鼠标按键。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Button } button - 要按下的鼠标按键。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 抬起鼠标按键。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Button } button - 要抬起的鼠标按键。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 开始轴事件。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - 轴类型。
     * @param { int } value - 轴值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 更新轴事件。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - 轴类型。
     * @param { int } value - 轴值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 结束轴事件。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { Axis } axis - 轴类型。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 创建鼠标控制器，用于模拟鼠标操作。使用Promise异步回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<MouseController> } Promise对象，返回鼠标控制器实例。
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
   * 表示屏幕上的单个触点信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TouchPoint {

    /**
     * 触点唯一标识。取值范围为[0, 9]，且必须为整数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    id: int;

    /**
     * 触点所在屏幕的唯一标识，必须为整数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId: int;

    /**
     * 触点相对于屏幕左边缘的X坐标，单位为像素（px），必须为整数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayX: int;

    /**
     * 触点相对于屏幕上边缘的Y坐标，单位为像素（px），必须为整数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayY: int;
  }

  /**
   * 提供模拟触控操作的功能。模拟触控操作序列必须满足以下要求：
   * 
   * 1. 所有触点的displayId必须相同。
   * 2. 每个触点都必须以`touchDown()`开始，以`touchUp()`结束，中间可包含多个`touchMove()`。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TouchController {

    /**
     * 触点按下。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - 与屏幕接触的触点信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 触点移动。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - 需要移动的触点信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 触点抬起。使用Promise异步回调。
     *
     * @permission ohos.permission.CONTROL_DEVICE
     * @param { TouchPoint } touch - 即将离开屏幕的触点信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 创建触控控制器，用于模拟触控操作。使用Promise异步回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @returns { Promise<TouchController> } Promise对象，返回触控控制器实例。
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