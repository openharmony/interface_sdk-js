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
import { InputEvent } from './@ohos.multimodalInput.inputEvent'

/**
* TouchEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {PointerEvent, Pointer, PointerAction} from '@ohos.multimodalInput.ToucEvent';
*/

export declare enum Action {
  /**
   * touch to cancel
   */
  CANCEL = 0,

  /**
   * touch press
   */
  DOWN = 1,

  /**
   * touch move
   */
  MOVE = 2,

  /**
   * touch up
   */
  UP = 3,
}

export declare enum ToolType {
  /**
   * finger
   */
  FINGER = 0,

  /**
   * pen
   */
  PEN = 1,

  /**
   * rubber
   */
  RUBBER = 2,

  /**
   * brush
   */
  BRUSH = 3,

  /**
   * pencil
   */
  PENCIL = 4,

  /**
   * airbrush
   */
  AIRBRUSH = 5,

  /**
   * mouse
   */
  MOUSE = 6,

  LENS = 7,
}

export declare enum SourceType {
  /**
   * touch screen
   */
  TOUCH_SCREEN = 0,

  /**
   * pen
   */
  PEN = 1,

  /**
   * touch pad
   */
  TOUCH_PAD = 2,
}

export declare interface Touch {
  /**
   * pointer identifier, integer data, data greater than or equal to 0.
   */
  id: number;

  /**
   * press the timestamp of the moment
   */
  pressedTime: number;

  /**
   * the x coordinate of the screen to which the touch position belongs
   */
  screenX: number;

  /**
   * the y coordinate of the screen to which the touch position belongs
   */
  screenY: number;

  /**
   * touch the x coordinate of the position in the window
   */
  windowX: number;

  /**
   * touch the y coordinate of the position in the window
   */
  windowY: number;

  /**
   * the pressure value. The range is 0.0 to 1.0, with 0.0 indicating unsupported.
   */
  pressure: number;

  /**
   * press the width of the contact area
   */
  width: number;

  /**
   * press the height of the contact area
   */
  height: number;

  /**
   * relative to the YZ plane, values range from -90 to 90 inclusive, where positive values are skewed to the right
   */
  tiltX: number;

  /**
   * the Angle relative to the XZ plane ranges from -90 to 90 inclusive, where positive values are downward sloping.
   */
  tiltY: number;

  /**
   * the center point x of the tool area
   */
  toolX: number;

  /**
   * the center point y of the tool area
   */
  // 工具区域的中心点Y
  toolY: number;

  /**
   * tool area width
   */
  // 工具区域宽度
  toolWidth: number;

  /**
   * tool area height
   */
  toolHeight: number;

  /**
   * the x coordinate on the input device
   */
  rawX: number;

  /**
   * the y coordinate on the input device
   */
  rawY: number;

  /**
   * tool type
   */
  toolType: ToolType;
}


export declare interface TouchEvent extends InputEvent {
  /**
   * touch action
   */
  action: Action;

  /**
   * the current touch
   */
  touch: Touch;

  /**
   * all touch
   */
  touches: Touch[];

  /**
   * the device type of the touch source
   */
  sourceType: SourceType;
}