/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { InputEvent } from "./@ohos.multimodalInput.inputEvent"
import { KeyCode } from "./@ohos.multimodalInput.keyCode"

/**
* MouseEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
*/

export declare enum Action {
  /**
   * cancel
   */
  CANCEL = 0,

  /**
   * mouse move
   */
  MOVE = 1,

  /**
   * the mouse button is down
   */
  BUTTON_DOWN = 2,

  /**
   * Mouse button up
   */
  BUTTON_UP = 3,

  /**
   * mouse associated axis event begins
   */
  AXIS_BEGIN = 4,

  /**
   * mouse associated axis events updated
   */
  AXIS_UPDATE = 5,

  /**
   * mouse associated axis event ends
   */
  AXIS_END = 6,
}

export declare enum Button {
  /**
   * the left mouse button
   */
  LEFT = 0,

  /**
   * the middle mouse button
   */
  MIDDLE = 1,

  /**
   * the right mouse button
   */
  RIGHT = 2,

  /**
   * side mouse button
   */
  SIDE = 3,

  /**
   * mouse extension button
   */
  EXTRA = 4,

  /**
   * mouse forward button
   */
  FORWARD = 5,

  /**
   * mouse back button
   */
  BACK = 6,

  /**
   * mouse task button
   */
  TASK = 7
}

export declare enum Axis {
  /**
   * scroll vertical
   */
  SCROLL_VERTICAL = 0,

  /**
   * scroll horizontal
   */
  SCROLL_HORIZONTAL = 1,

  /**
   * pinch
   */
  PINCH = 2,
}

export declare interface AxisValue {
  /**
   * axis type
   */
  axis: Axis;

  /**
   * The value of the axis
   */
  value: number
}

export declare interface MouseEvent extends InputEvent {
  /**
   * mouse event action
   */
  action: Action;

  /**
   * the x coordinate of the mouse cursor in the screen
   */
  screenX: number;

  /**
   * the y coordinate of the mouse cursor in the screen
   */
  screenY: number;

  /**
   * the x coordinate of the mouse window
   */
  windowX: number;

  /**
   * the y coordinate of the mouse window
   */
  windowY: number;

  /**
   * the relative X offset from the last mouse position reported. At the edge of the screen,
   * this value may be less than the coordinate difference reported by the two mice
   */
  rawDeltaX: number;

  /**
   * the relative Y offset from the last mouse position reported. At the edge of the screen,
   * this value may be less than the coordinate difference reported by the two mice
   */
  rawDeltaY: number;

  /**
   * a button to press or up
   */
  button: Button;

  /**
   * the button that is currently in the pressed state
   */
  pressedButtons: Button[];

  /**
   * The current action for AxisBegin/AxisUpdate/AxisEnd, the axis of the relevant data
   */
  axes: AxisValue[];

  /**
   * list of keys that are currently in the pressed state
   */
  pressedKeys: KeyCode[];

  /**
   * whether ctrlKey is in down state
   */
  ctrlKey: boolean;

  /**
   * whether altKey is in down state
   */
  altKey: boolean;

  /**
   * whether shiftKey is in down state
   */
  shiftKey: boolean;

  /**
   * whether logoKey is in down state
   */
  logoKey: boolean;

  /**
   * whether fnKey is in down state
   */
  fnKey:boolean
  
  /**
   * whether capsLock is in the active state.
   */
  capsLock:boolean
  
  /**
   * whether numLock is in the active state.
   */
  numLock:boolean
  
  /**
   * whether scrollLock is in the active state.
   */
  scrollLock:boolean
}