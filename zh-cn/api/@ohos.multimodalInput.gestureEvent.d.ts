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
 * 捏合手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface Pinch {

  /**
   * 手势事件类型。如：手势开始、手势更新、手势结束等。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * 捏合度，取值范围大于等于0。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  scale: double;
}

/**
 * 旋转手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface Rotate {

  /**
   * 手势事件类型。如：手势开始、手势更新、手势结束等。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * 旋转角度，单位为度。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  angle: double;
}

/**
 * 三指滑动手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface ThreeFingersSwipe {

  /**
   * 手势事件类型。如：手势开始、手势更新、手势结束等。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * 坐标x，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * 坐标y，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * 四指滑动手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface FourFingersSwipe {

  /**
   * 手势事件类型。如：手势开始、手势更新、手势结束等。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * 坐标x，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * 坐标y，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * 向内滑动事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface SwipeInward {

  /**
   * 表示向内滑动事件的类型，固定为SwipeInward。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  type: ActionType;

  /**
   * 滑动事件触发点的横坐标，单位为像素。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * 滑动事件触发点的纵坐标，单位为像素。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  y: int;
}

/**
 * 三指轻点手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface ThreeFingersTap {

  /**
   * 手势事件类型。如：手势开始、手势更新、手势结束等。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  type: ActionType;
}

/**
 * 触摸屏手势事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 18 dynamic
 * @since 23 static
 */
export declare interface TouchGestureEvent {

  /**
   * 触摸屏手势类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  action: TouchGestureAction;

  /**
   * 触屏点信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi hide for inner use
   * @since 18 dynamic
   * @since 23 static
   */
  touches: Touch[];
}

/**
 * 触摸屏手势类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi hide for inner use
 * @since 18 dynamic
 * @since 23 static
 */
export declare enum TouchGestureAction {

  /**
   * 多指向下滑动。
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
 * 手势事件类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 10 dynamic
 * @since 23 static
 */
export declare enum ActionType {

  /**
   * 手势取消。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * 手势开始。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  BEGIN = 1,

  /**
   * 手势更新。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  UPDATE = 2,

  /**
   * 手势结束。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 10 dynamic
   * @since 23 static
   */
  END = 3
}