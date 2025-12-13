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
 * @file
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';
import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 22 static
 */
export declare enum Action {
  /**
   * Cancel
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  CANCEL = 0,

  /**
   * Moving of the mouse pointer
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  MOVE = 1,

  /**
   * Pressing down of the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  BUTTON_DOWN = 2,

  /**
   * Lifting of the mouse button
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  BUTTON_UP = 3,

  /**
   * Beginning of the axis event associated with the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  AXIS_BEGIN = 4,

  /**
   * Updating of the axis event associated with the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  AXIS_UPDATE = 5,

  /**
   * Ending of the axis event associated with the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  AXIS_END = 6,

  /**
   * Indicates a pointer action representing that a finger is pressed on touchpad.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  ACTION_DOWN = 7,

  /**
   * Indicates a pointer action representing that a finger leaves touchpad.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  ACTION_UP = 8,
}

/**
 * Mouse button
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 22 static
 */
export declare enum Button {
  /**
   * Left button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  LEFT = 0,

  /**
   * Middle button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  MIDDLE = 1,

  /**
   * Right button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  RIGHT = 2,

  /**
   * Side button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  SIDE = 3,

  /**
   * Extended button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  EXTRA = 4,

  /**
   * Forward button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  FORWARD = 5,

  /**
   * Back button on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  BACK = 6,

  /**
   * Task key on the mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  TASK = 7
}

/**
 * Axis
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 22 static
 */
export declare enum Axis {
  /**
   * Vertical scroll axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  SCROLL_VERTICAL = 0,

  /**
   * Horizontal scroll axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  SCROLL_HORIZONTAL = 1,

  /**
   * Pinch axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  PINCH = 2
}

/**
 * AxisValue
 *
 * @interface AxisValue
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 22 static
 */
export declare interface AxisValue {
  /**
   * Axis type
   * @type { Axis }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  axis: Axis;

  /**
   * Axis value
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  value: int;
}

/**
 * ToolType
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 22 static
 */
export declare enum ToolType {
  /**
   * Unknown type
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  UNKNOWN = 0,

  /**
   * Mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  MOUSE = 1,

  /**
   * Joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  JOYSTICK = 2,

  /**
   * Touch pad
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  TOUCHPAD = 3,
}

/**
 * MouseEvent
 *
 * @extends InputEvent
 * @interface MouseEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 22 static
 */
export declare interface MouseEvent extends InputEvent {
  /**
   * Mouse event action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  action: Action;

  /**
   * X coordinate of the mouse pointer on the screen
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  screenX: int;

  /**
   * Y coordinate of the mouse pointer on the screen
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  screenY: int;

  /**
   * X coordinate of the mouse pointer in the window
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  windowX: int;

  /**
   * Y coordinate of the mouse pointer in the window
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  windowY: int;

  /**
   * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
   * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  rawDeltaX: int;

  /**
   * Y axis offset relative to the previous reported mouse pointer position
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  rawDeltaY: int;

  /**
   * Button that is currently pressed or released
   * @type { Button }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  button: Button;

  /**
   * Button that is being pressed
   * @type { Button[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  pressedButtons: Button[];

  /**
   * All axis data contained in the event
   * @type { AxisValue[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  axes: AxisValue[];

  /**
   * List of pressed keys
   * @type { KeyCode[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  pressedKeys: KeyCode[];

  /**
   * Whether ctrlKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  ctrlKey: boolean;

  /**
   * Whether altKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  altKey: boolean;

  /**
   * Whether shiftKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  shiftKey: boolean;

  /**
   * Whether logoKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  logoKey: boolean;

  /**
   * Whether fnKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  fnKey: boolean;

  /**
   * Whether capsLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  capsLock: boolean;

  /**
   * Whether numLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  numLock: boolean;

  /**
   * Whether scrollLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 22 static
   */
  scrollLock: boolean;

  /**
   * Tool type
   *
   * @type { ToolType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 22 static
   */
  toolType: ToolType;

  /**
   * globalX - Global X coordinate.
   * @type { ?int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 22 static
   */
  globalX?: int;

  /**
   * globalY - Global Y coordinate.
   * @type { ?int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 22 static
   */
  globalY?: int;
}