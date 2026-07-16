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
 * The **mouseEvent** module provides mouse events reported by a device. It is inherited from 
 * [InputEvent]{@link @ohos.multimodalInput.inputEvent:InputEvent}.
 *
 * @file Mouse Event
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * Enumerates mouse event types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * Canceled. The down event of the mouse is interrupted unexpectedly and does not close normally. For example, the
   * **CANCEL** event is triggered when the mouse button is pressed but not released, the window transitions to the
   * background, or an abnormal destruction occurs.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * Moving of the mouse pointer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOVE = 1,

  /**
   * Mouse button press.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BUTTON_DOWN = 2,

  /**
   * Mouse button release.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BUTTON_UP = 3,

  /**
   * Beginning of the mouse axis event.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_BEGIN = 4,

  /**
   * Updating of the mouse axis event.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_UPDATE = 5,

  /**
   * Mouse axis event ended.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_END = 6,

  /**
   * Touchpad press.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  ACTION_DOWN = 7,

  /**
   * Touchpad release.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  ACTION_UP = 8
}

/**
 * Enumerates mouse buttons.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Button {

  /**
   * Left button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  LEFT = 0,

  /**
   * Middle button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MIDDLE = 1,

  /**
   * Right button
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  RIGHT = 2,

  /**
   * Side button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SIDE = 3,

  /**
   * Extended button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  EXTRA = 4,

  /**
   * Forward button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  FORWARD = 5,

  /**
   * Back button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BACK = 6,

  /**
   * Task button.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TASK = 7
}

/**
 * Enumerates mouse axis types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Axis {

  /**
   * Vertical scroll axis of the mouse.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SCROLL_VERTICAL = 0,

  /**
   * Horizontal scroll axis of the mouse.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SCROLL_HORIZONTAL = 1,

  /**
   * Pinch axis of the mouse.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PINCH = 2
}

/**
 * Defines the mouse axis type and axis value.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface AxisValue {

  /**
   * Mouse axis type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  axis: Axis;

  /**
   * Mouse axis value.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  value: int;
}

/**
 * Enumerates tool types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare enum ToolType {

  /**
   * Unknown type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * Mouse.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  MOUSE = 1,

  /**
   * Joystick.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  JOYSTICK = 2,

  /**
   * Touchpad.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  TOUCHPAD = 3
}

/**
 * Defines the mouse event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface MouseEvent extends InputEvent {

  /**
   * Enumerates mouse event types.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * X coordinate of the mouse event in the relative coordinate system with the upper left corner of the specified
   * screen as the origin, in px. Currently, the value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenX: int;

  /**
   * Y coordinate of the mouse event in the relative coordinate system with the upper left corner of the specified
   * screen as the origin, in px. Currently, the value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenY: int;

  /**
   * X coordinate in the relative coordinate system with the upper left corner of the window where the mouse is located
   * as the origin, in px. Currently, the value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowX: int;

  /**
   * Y coordinate in the relative coordinate system with the upper left corner of the window where the mouse is located
   * as the origin, in px. Currently, the value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowY: int;

  /**
   * X coordinate offset of the current mouse event relative to the previous event, in px. Currently, the value can only
   * be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawDeltaX: int;

  /**
   * Y coordinate offset of the current mouse event relative to the previous event, in px. Currently, the value can only
   * be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawDeltaY: int;

  /**
   * Enumerates mouse buttons.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  button: Button;

  /**
   * Button being pressed.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedButtons: Button[];

  /**
   * Defines the mouse axis type and axis value.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  axes: AxisValue[];

  /**
   * List of pressed keys.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedKeys: KeyCode[];

  /**
   * Whether ctrlKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  ctrlKey: boolean;

  /**
   * Whether altKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  altKey: boolean;

  /**
   * Whether shiftKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  shiftKey: boolean;

  /**
   * Whether logoKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  logoKey: boolean;

  /**
   * Whether fnKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  fnKey: boolean;

  /**
   * Whether capsLock is enabled.
   *
   * The value **true** indicates that capsLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  capsLock: boolean;

  /**
   * Whether numLock is enabled.
   *
   * The value **true** indicates that numLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  numLock: boolean;

  /**
   * Whether scrollLock is enabled.
   *
   * The value **true** indicates that scrollLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  scrollLock: boolean;

  /**
   * Tool type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  toolType: ToolType;

  /**
   * X coordinate of the mouse event in the global coordinate system with the upper left corner of the primary screen as
   * the origin, in px. When this parameter is used as an input parameter, it is mandatory and supports only integers if
   * [MouseEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.MouseEventData}
   * is set to **true**. If **MouseEventData.useGlobalCoordinate** is set to **false**, this parameter is optional, and
   * the X coordinate in the relative coordinate system with the upper left corner of the specified screen as the origin
   * is used to calculate the injected event. When this parameter is used as an output parameter, it is reported by the
   * system.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalX?: int;

  /**
   * Y coordinate of the mouse event in the global coordinate system with the upper left corner of the primary screen as
   * the origin, in px. When this parameter is used as an input parameter, it is mandatory and supports only integers if
   * [MouseEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.MouseEventData}
   * is set to **true**. If **MouseEventData.useGlobalCoordinate** is set to **false**, this parameter is optional, and
   * the Y coordinate in the relative coordinate system with the upper left corner of the specified screen as the origin
   * is used to calculate the injected event. When this parameter is used as an output parameter, it is reported by the
   * system.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalY?: int;
}