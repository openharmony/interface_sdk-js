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
* Action
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/
export declare enum Action {
  /**
   * cancel
   */
  CANCEL = 0,

  /**
   * axis begin
   */
  AXIS_BEGIN = 4,

  /**
   * axis update
   */
  AXIS_UPDATE = 5,

  /**
   * axis end
   */
  AXIS_END = 6,
}

/**
* Axis
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/
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

/**
* AxisValue
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/
export declare interface AxisValue {
  /**
   * axis
   */
  axis: Axis;

  /**
   * value
   */
  value: number
}

/**
* MouseEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/
export declare interface MouseEvent extends InputEvent {
  /**
   * mouse action
   */
  action: Action;

  /**
   * axes data
   */
  axes: AxisValue[];

  /**
   * List of keys that are currently in the pressed state.
   */
  pressedKeys: KeyCode[];

  /**
   * whether ctrlKey is in pressed state.
   */
  readonly ctrlKey: boolean;

  /**
   * whether altKey is in pressed state.
   */
  readonly altKey: boolean;

  /**
   * whether shiftKey is in pressed state.
   */
  readonly shiftKey: boolean;

  /**
   * whether logoKey is in pressed state.
   */
  readonly logoKey: boolean;

  /**
   * whether fnKey is in pressed state.
   */
  readonly fnKey: boolean;

  /**
   * whether capsLock is in the active state.
   */
  capsLock: boolean;

  /**
   * whether numLock is in the active state.
   */
  numLock: boolean;

  /**
   * whether scrollLock is in the active state.
   */
  scrollLock: boolean;
}