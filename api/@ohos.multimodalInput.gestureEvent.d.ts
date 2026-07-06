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
 * The **gestureEvent** module provides APIs for gesture events reported by devices.
 *
 * @file Gesture Event
 * @kit InputKit
 */

import { Touch } from './@ohos.multimodalInput.touchEvent';

/**
 * Defines a pinch event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface Pinch {

  /**
   * Gesture event type, for example, gesture start, gesture update, or gesture end.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * Pinch scale factor. The value is greater than or equal to 0.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  scale: double;
}

/**
 * Defines a rotation gesture event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface Rotate {

  /**
   * Gesture event type, for example, gesture start, gesture update, or gesture end.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * Rotation angle, in degrees.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  angle: double;
}

/**
 * Defines a three-finger swipe gesture event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface ThreeFingersSwipe {

  /**
   * Gesture event type, for example, gesture start, gesture update, or gesture end.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * X coordinate, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * Y coordinate, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * Defines a four-finger swipe gesture event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface FourFingersSwipe {

  /**
   * Gesture event type, for example, gesture start, gesture update, or gesture end.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * X coordinate, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * Y coordinate, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * Defines an inward swipe event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface SwipeInward {

  /**
   * Type of the inward swipe event. The value is fixed at **SwipeInward**.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * X-coordinate of the swipe event trigger point, in pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * Y-coordinate of the swipe event trigger point, in pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * Defines a three-finger tap gesture event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface ThreeFingersTap {

  /**
   * Gesture event type, for example, gesture start, gesture update, or gesture end.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  type: ActionType;
}

/**
 * Defines a touchscreen gesture event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 18 dynamic
 * @since 23 static
 */
export declare interface TouchGestureEvent {

  /**
   * Enumerates touchscreen gesture types.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  action: TouchGestureAction;

  /**
   * Touch point information.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  touches: Touch[];
}

/**
 * Enumerates touchscreen gesture types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 18 dynamic
 * @since 23 static
 */
export declare enum TouchGestureAction {

  /**
   * Multi-finger downward swipe.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  SWIPE_DOWN = 0,

  /**
   * Multi-finger upward swipe.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  SWIPE_UP = 1,

  /**
   * Multi-finger leftward swipe.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  SWIPE_LEFT = 2,

  /**
   * Multi-finger rightward swipe.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  SWIPE_RIGHT = 3,

  /**
   * Multi-finger pinch closed.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  PINCH_CLOSED = 4,

  /**
   * Multi-finger pinch opened.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  PINCH_OPENED = 5,

  /**
   * Gesture ended.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  GESTURE_END = 6
}

/**
 * Enumerates gesture event types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare enum ActionType {

  /**
   * Canceled.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * Started.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  BEGIN = 1,

  /**
   * Updated.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  UPDATE = 2,

  /**
   * Ended.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  END = 3
}