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

/**
 * @file
 * @kit InputKit
 */

/*** if arkts 1.1 */
import type { InputEvent } from './@ohos.multimodalInput.inputEvent';
/*** endif */
/*** if arkts 1.2 */
import { InputEvent } from './@ohos.multimodalInput.inputEvent';
/*** endif */

/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum Action {
  /**
   * Touch cancelled
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  CANCEL = 0,

  /**
   * Touch pressed
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  DOWN = 1,

  /**
   * Touch moved
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  MOVE = 2,

  /**
   * Touch lifted
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  UP = 3
}

/**
 * ToolType
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum ToolType {
  /**
   * Finger
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  FINGER = 0,

  /**
   * Stylus
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PEN = 1,

  /**
   * Rubber
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  RUBBER = 2,

  /**
   * Brush
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  BRUSH = 3,

  /**
   * Pencil
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PENCIL = 4,

  /**
   * Air brush
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  AIRBRUSH = 5,

  /**
   * Mouse
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  MOUSE = 6,

  /**
   * lens
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LENS = 7
}

/**
 * SourceType
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum SourceType {
  /**
   * Touchscreen
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  TOUCH_SCREEN = 0,

  /**
   * Stylus
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PEN = 1,

  /**
   * Touchpad
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  TOUCH_PAD = 2
}

/**
 * Fixed mode of screenX and screenY.
 * 
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum FixedMode {
  /**
   * Not fix.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  NONE = 0,

  /**
   * One hand mode.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  ONE_HAND = 1
}

/**
 * Touch
 *
 * @interface Touch
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface Touch {
  /**
   * Pointer identifier
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  id: number;

  /**
   * Time stamp when touch is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  pressedTime: number;

  /**
   * X coordinate of the touch position on the screen
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  screenX: number;

  /**
   * Y coordinate of the touch position on the screen
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  screenY: number;

  /**
   * X coordinate of the touch position in the window
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  windowX: number;

  /**
   * Y coordinate of the touch position in the window
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  windowY: number;

  /**
   * Pressure value. The value range is [0.0, 1.0]. The value 0.0 indicates that the pressure is not supported.
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  pressure: number;

  /**
   * Width of the contact area when touch is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  width: number;

  /**
   * Height of the contact area when touch is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  height: number;

  /**
   * Angle relative to the YZ plane. The value range is [-90, 90]. A positive value indicates a rightward tilt.
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  tiltX: number;

  /**
   * Angle relative to the XZ plane. The value range is [-90, 90]. A positive value indicates a downward tilt.
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  tiltY: number;

  /**
   * Center point X of the tool area
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  toolX: number;

  /**
   * Center point Y of the tool area
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  toolY: number;

  /**
   * Width of the tool area
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  toolWidth: number;

  /**
   * Height of the tool area
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  toolHeight: number;

  /**
   * X coordinate of the input device
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  rawX: number;

  /**
   * Y coordinate of the input device
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  rawY: number;

  /**
   * Tool type
   * @type { ToolType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  toolType: ToolType;

  /**
   * fixedDisplayX - Corrected value of the screen x coordinate.
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  fixedDisplayX?: number;

  /**
   * fixedDisplayY - Corrected value of the screen y coordinate.
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  fixedDisplayY?: number;
}

/**
 * TouchEvent
 *
 * @extends InputEvent
 * @interface TouchEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface TouchEvent extends InputEvent {
  /**
   * Touch action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  action: Action;

  /**
   * Current touch point
   * @type { Touch }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  touch: Touch;

  /**
   * All touch points
   * @type { Touch[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  touches: Touch[];

  /**
   * Device type of the touch source
   * @type { SourceType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  sourceType: SourceType;

  /**
   * fixedMode - Fixed mode of Touch.
   * 
   * @type { FixedMode }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  fixedMode?: FixedMode;
}