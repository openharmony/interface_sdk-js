/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { Touch } from './@ohos.multimodalInput.touchEvent';

/**
 * Pinch event on touchPad
 *
 * @interface Pinch
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface Pinch {
  /**
   * Action type
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;

  /**
   * scale
   * @type { double }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  scale: double;
}

/**
 * Rotate event on touchPad
 *
 * @interface Rotate
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface Rotate {
  /**
   * Action type
   *
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;

  /**
   * Rotate angle
   *
   * @type { double }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle: double;
}

/**
 * Three fingers swipe event on touchPad
 *
 * @interface ThreeFingersSwipe
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface ThreeFingersSwipe {
  /**
   * Action type
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;

  /**
   * Coordinate x
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  x: int;

  /**
   * Coordinate y
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  y: int;
}

/**
 * Four fingers swipe event on touchPad
 *
 * @interface FourFingersSwipe
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface FourFingersSwipe {
  /**
   * Action type
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;

  /**
   * Coordinate x
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  x: int;

  /**
   * Coordinate y
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  y: int;
}

/**
 * Swipe Inward event on touchPad
 *
 * @interface SwipeInward
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface SwipeInward {
  /**
   * Action type
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;

  /**
   * Coordinate x
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  x: int;

  /**
   * Coordinate y
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  y: int;
}

/**
 * Three fingers tap event on touchPad
 *
 * @interface ThreeFingersTap
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface ThreeFingersTap {
  /**
   * Action type
   *
   * @type { ActionType }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: ActionType;
}

/**
 * Defines a touchscreen gesture event.
 *
 * @interface TouchGestureEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface TouchGestureEvent {
  /**
   * Gesture action type.
   *
   * @type { TouchGestureAction }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  action: TouchGestureAction;
  /**
   * Collection of all touch points upon completion of the gesture.
   *
   * @type { Touch[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  touches: Touch[];
}

/**
 * Enumerates touchscreen gesture action types.
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum TouchGestureAction {
  /**
   * Swiping down with multiple fingers.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  SWIPE_DOWN = 0,
  /**
   * Swiping up with multiple fingers.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  SWIPE_UP,
  /**
   * Swiping left with multiple fingers.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  SWIPE_LEFT,
  /**
   * Swiping right with multiple fingers.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  SWIPE_RIGHT,
  /**
   * Multi-finger pinching closed.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PINCH_CLOSED,
  /**
   * Multi-finger pinching opened.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PINCH_OPENED,
  /**
   * The gesture ends.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  GESTURE_END
}
  
/**
 * Gesture action type
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum ActionType {
  /**
   * Cancel of the gesture
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  CANCEL = 0,

  /**
   * Begin of the gesture
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  BEGIN = 1,

  /**
   * Update of the gesture
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  UPDATE = 2,

  /**
   * End of the gesture
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  END = 3
}