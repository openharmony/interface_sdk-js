/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creating an Object
 * @since 7
 */
export declare enum GestureDirection {
  /**
   * Sliding in all directions.
   * @since 7
   */
  All,

  /**
   * Sliding horizontally.
   * @since 7
   */
  Horizontal,

  /**
   * Sliding Vertical
   * @since 7
   */
  Vertical,
}

/**
 * Creating an Object
 * @since 7
 */
export declare enum PanDirection {
  /**
   * Default.
   * @since 7
   */
  None,

  /**
   * Sliding horizontally.
   * @since 7
   */
  Horizontal,

  /**
   * Sliding left.
   * @since 7
   */
  Left,

  /**
   * Sliding right.
   * @since 7
   */
  Right,

  /**
   * Sliding Vertical
   * @since 7
   */
  Vertical,

  /**
   * Sliding up.
   * @since 7
   */
  Up,

  /**
   * Sliding Down.
   * @since 7
   */
  Down,

  /**
   * Sliding in all directions.
   * @since 7
   */
  All,
}

/**
 * Creating an Object
 * @since 7
 */
export declare enum GestureMode {
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   * @since 7
   */
  Sequence,

  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   * @since 7
   */
  Parallel,

  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   * @since 7
   */
  Exclusive,
}

/**
 * Creating an Object
 * @since 7
 */
export declare enum GestureMask {
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   * @since 7
   */
  Normal,

  /**
   * Ignore internal gestures and recognize the current gesture first.
   * @since 7
   */
  IgnoreInternal,
}

/**
 * Creating an Object
 * @since 7
 */
export declare type GestureType =
  /**
   * Set a type value.
   * @since 7
   */
  TapGesture | LongPressGesture | PanGesture | PinchGesture | RotationGesture | GestureGroup;

/**
 * long press gesture event used in the longpress scenario.
 * @since 7
 */
export interface LongPressGestureEvent extends GestureEvent {
  /**
   * Indicates whether an event is triggered repeatedly.
   * @since 7
   */
  repeat: boolean;
}

/**
 * pan gesture event used in the pan gesture triggering scenario.
 */
export interface PanGestureEvent extends GestureEvent {
  /**
   * Gesture event offset X.
   * @since 7
   */
  offsetX: number;

  /**
   * Gesture event offset Y.
   * @since 7
   */
  offsetY: number;
}

/**
 * pinch gesture event used for triggering the pinch gesture.
 * @since 7
 */
export interface PinchGestureEvent extends GestureEvent {
  /**
   * Scaling ratio.
   * @since 7
   */
  scale: number;

  /**
   * X-axis coordinate of the kneading center point, in pixels.
   * @since 7
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point, in pixels.
   * @since 7
   */
  pinchCenterY: number;
}

/**
 * rotation gesture event used for triggering the pinch gesture.
 * @since 7
 */
export interface RotationGestureEvent extends GestureEvent {
  /**
   * Rotation angle.
   * @since 7
   */
  angle: number;
}

/**
 * base event for gesture.
 * @since 7
 */
export interface GestureEvent {
  /**
   * Event timestamp.
   * @since 7
   */
  timestamp: number;
}

/**
 * Creating an interface
 * @since 7
 */
interface TapGesture {
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   * @since 7
   */
  (value?: { count?: number; fingers?: number }): TapGesture;

  /**
   * Tap gesture recognition success callback.
   * @since 7
   */
  onAction(event: (event?: GestureEvent) => void): TapGesture;
}

/**
 * Creating an interface
 * @since 7
 */
interface LongPressGesture {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   * @since 7
   */
  (value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGesture;

  /**
   * LongPress gesture recognition success callback.
   * @since 7
   */
  onAction(event: (event?: LongPressGestureEvent) => void): LongPressGesture;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  onActionEnd(event: (event?: LongPressGestureEvent) => void): LongPressGesture;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  onActionCancel(event: () => void): LongPressGesture;
}

/**
 * @since 7
 */
export declare class PanGestureOption {
  /**
   * Constructor parameters.
   * @since 7
   */
  constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number });

  /**
   * Sets the direction attribute.
   * @since 7
   */
  setDirection(value: PanDirection);

  /**
   * Sets the setDistance attribute.
   * @since 7
   */
  setDistance(value: number);

  /**
   * Sets the setFingers attribute.
   * @since 7
   */
  setFingers(value: number);
}

/**
 * @since 7
 */
interface PanGesture {
  /**
   * Set the value.
   * @since 7
   */
  (value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOption): PanGesture;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  onActionStart(event: (event?: PanGestureEvent) => void): PanGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  onActionUpdate(event: (event?: PanGestureEvent) => void): PanGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  onActionEnd(event: (event?: PanGestureEvent) => void): PanGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  onActionCancel(event: () => void): PanGesture;
}

/**
 * @since 7
 */
interface PinchGesture {
  /**
   * Set the value.
   * @since 7
   */
  (value?: { fingers?: number; distance?: number }): PinchGesture;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  onActionStart(event: (event?: PinchGestureEvent) => void): PinchGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  onActionUpdate(event: (event?: PinchGestureEvent) => void): PinchGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  onActionEnd(event: (event?: PinchGestureEvent) => void): PinchGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  onActionCancel(event: () => void): PinchGesture;
}

/**
 * @since 7
 */
interface RotationGesture {
  /**
   * Set the value.
   * @since 7
   */
  (value?: { fingers?: number; angle?: number }): RotationGesture;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  onActionStart(event: (event?: RotationGestureEvent) => void): RotationGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  onActionUpdate(event: (event?: RotationGestureEvent) => void): RotationGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  onActionEnd(event: (event?: RotationGestureEvent) => void): RotationGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  onActionCancel(event: () => void): RotationGesture;
}

/**
 * @since 7
 */
interface GestureGroup {
  /**
   * Return to Obtain GestureGroup.
   * @since 7
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroup;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  onCancel(event: () => void): GestureGroup;
}

export declare const TapGestureInterface: TapGesture;
export declare const LongPressGestureInterface: LongPressGesture;
export declare const PanGestureInterface: PanGesture;
export declare const PinchGestureInterface: PinchGesture;
export declare const RotationGestureInterface: RotationGesture;
export declare const GestureGroupInterface: GestureGroup;
