/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
/**
 * Creating an Object
 * @crossplatform
 * @since 10
 */
declare enum PanDirection {
  /**
   * Default.
   * @since 7
   */
  /**
   * Default.
   * @crossplatform
   * @since 10
   */
  None,

  /**
   * Sliding horizontally.
   * @since 7
   */
  /**
   * Sliding horizontally.
   * @crossplatform
   * @since 10
   */
  Horizontal,

  /**
   * Sliding left.
   * @since 7
   */
  /**
   * Sliding left.
   * @crossplatform
   * @since 10
   */
  Left,

  /**
   * Sliding right.
   * @since 7
   */
  /**
   * Sliding right.
   * @crossplatform
   * @since 10
   */
  Right,

  /**
   * Sliding Vertical
   * @since 7
   */
  /**
   * Sliding Vertical
   * @crossplatform
   * @since 10
   */
  Vertical,

  /**
   * Sliding up.
   * @since 7
   */
  /**
   * Sliding up.
   * @crossplatform
   * @since 10
   */
  Up,

  /**
   * Sliding Down.
   * @since 7
   */
  /**
   * Sliding Down.
   * @crossplatform
   * @since 10
   */
  Down,

  /**
   * Sliding in all directions.
   * @since 7
   */
  /**
   * Sliding in all directions.
   * @crossplatform
   * @since 10
   */
  All,
}

/**
 * Creating an Object
 * @since 8
 */
/**
 * Creating an Object
 * @crossplatform
 * @since 10
 */
declare enum SwipeDirection {
  /**
   * Default.
   * @since 8
   */
  /**
   * Default.
   * @crossplatform
   * @since 10
   */
  None,

  /**
   * Sliding horizontally.
   * @since 8
   */
  /**
   * Sliding horizontally.
   * @crossplatform
   * @since 10
   */
  Horizontal,

  /**
   * Sliding Vertical
   * @since 8
   */
  /**
   * Sliding Vertical
   * @crossplatform
   * @since 10
   */
  Vertical,

  /**
   * Sliding in all directions.
   * @since 8
   */
  /**
   * Sliding in all directions.
   * @crossplatform
   * @since 10
   */
  All,
}

/**
 * Creating an Object
 * @since 7
 */
/**
 * Creating an Object
 * @crossplatform
 * @since 10
 */
declare enum GestureMode {
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   * @since 7
   */
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   * @crossplatform
   * @since 10
   */
  Sequence,

  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   * @since 7
   */
  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   * @crossplatform
   * @since 10
   */
  Parallel,

  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   * @since 7
   */
  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   * @crossplatform
   * @since 10
   */
  Exclusive,
}

/**
 * Creating an Object
 * @since 7
 */
/**
 * Creating an Object
 * @crossplatform
 * @since 10
 */
declare enum GestureMask {
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   * @since 7
   */
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   * @crossplatform
   * @since 10
   */
  Normal,

  /**
   * Ignore internal gestures and recognize the current gesture first.
   * @since 7
   */
  /**
   * Ignore internal gestures and recognize the current gesture first.
   * @crossplatform
   * @since 10
   */
  IgnoreInternal,
}

/**
 * Type of the finger information.
 * @since 8
 */
/**
 * Type of the finger information.
 * @crossplatform
 * @since 10
 */
interface FingerInfo {
  /**
   * Finger unique identifier.
   * @since 8
   */
  /**
   * Finger unique identifier.
   * @crossplatform
   * @since 10
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @since 8
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @crossplatform
   * @since 10
   */
  globalX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 8
   */
  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @crossplatform
   * @since 10
   */
  globalY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @since 8
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @crossplatform
   * @since 10
   */
  localX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @since 8
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @crossplatform
   * @since 10
   */
  localY: number;
}

/**
 * Defines the Gesture Type.
 * @since 7
 */
/**
 * Defines the Gesture Type.
 * @crossplatform
 * @since 10
 */
declare type GestureType =
  TapGestureInterface
  | LongPressGestureInterface
  | PanGestureInterface
  | PinchGestureInterface
  | SwipeGestureInterface
  | RotationGestureInterface
  | GestureGroupInterface;

/**
 * Defines event info for gesture.
 * @since 7
 */
/**
 * Defines event info for gesture.
 * @crossplatform
 * @since 10
 */
interface GestureEvent extends BaseEvent {
  /**
   * Indicates whether an event is triggered repeatedly.
   * Used in LongPressGesture.
   * @since 7
   */
  /**
   * Indicates whether an event is triggered repeatedly.
   * Used in LongPressGesture.
   * @crossplatform
   * @since 10
   */
  repeat: boolean;

  /**
   * All finger information.
   * Used in LongPressGesture and TapGesture.
   * @since 8
   */
  /**
   * All finger information.
   * Used in LongPressGesture and TapGesture.
   * @crossplatform
   * @since 10
   */
  fingerList: FingerInfo[];

  /**
   * Gesture event offset X.
   * The unit is vp.
   * Used in PanGesture.
   * @since 7
   */
  /**
   * Gesture event offset X.
   * The unit is vp.
   * Used in PanGesture.
   * @crossplatform
   * @since 10
   */
  offsetX: number;

  /**
   * Gesture event offset Y.
   * The unit is vp.
   * Used in PanGesture.
   * @since 7
   */
  /**
   * Gesture event offset Y.
   * The unit is vp.
   * Used in PanGesture.
   * @crossplatform
   * @since 10
   */
  offsetY: number;

  /**
   * Gesture event direction angle.
   * The unit is deg.
   * Used in RotationGesture and SwipeGesture.
   * @since 7
   */
  /**
   * Gesture event direction angle.
   * The unit is deg.
   * Used in RotationGesture and SwipeGesture.
   * @crossplatform
   * @since 10
   */
  angle: number;

  /**
   * Gesture event slide speed.
   * The unit is vp.
   * Used in SwipeGesture.
   * @since 8
   */
  /**
   * Gesture event slide speed.
   * The unit is vp.
   * Used in SwipeGesture.
   * @crossplatform
   * @since 10
   */
  speed: number;

  /**
   * Scaling ratio.
   * Used in PinchGesture.
   * @since 7
   */
  /**
   * Scaling ratio.
   * Used in PinchGesture.
   * @crossplatform
   * @since 10
   */
  scale: number;

  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   * @since 7
   */
  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   * @crossplatform
   * @since 10
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   * @since 7
   */
  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   * @crossplatform
   * @since 10
   */
  pinchCenterY: number;
}

/**
 * Defines TapGesture interface.
 * @since 7
 */
/**
 * Defines TapGesture interface.
 * @crossplatform
 * @since 10
 */
interface TapGestureInterface {
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   * @since 7
   */
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   * @crossplatform
   * @since 10
   */
  (value?: { count?: number; fingers?: number }): TapGestureInterface;

  /**
   * Tap gesture recognition success callback.
   * @since 7
   */
  /**
   * Tap gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onAction(event: (event?: GestureEvent) => void): TapGestureInterface;
}

/**
 * Defines LongPressGesture interface.
 * @since 7
 */
/**
 * Defines LongPressGesture interface.
 * @crossplatform
 * @since 10
 */
interface LongPressGestureInterface {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   * @since 7
   */
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   * @crossplatform
   * @since 10
   */
  (value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface;

  /**
   * LongPress gesture recognition success callback.
   * @since 7
   */
  /**
   * LongPress gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onAction(event: (event?: GestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @crossplatform
   * @since 10
   */
  onActionEnd(event: (event?: GestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @crossplatform
   * @since 10
   */
  onActionCancel(event: () => void): LongPressGestureInterface;
}

/**
 * Defines the PanGesture options.
 * @since 7
 */
/**
 * Defines the PanGesture options.
 * @crossplatform
 * @since 10
 */
declare class PanGestureOptions {
  /**
   * Constructor parameters.
   * @since 7
   */
  /**
   * Constructor parameters.
   * @crossplatform
   * @since 10
   */
  constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number });

  /**
   * Sets the direction attribute.
   * @since 7
   */
  /**
   * Sets the direction attribute.
   * @crossplatform
   * @since 10
   */
  setDirection(value: PanDirection);

  /**
   * Sets the setDistance attribute.
   * @since 7
   */
  /**
   * Sets the setDistance attribute.
   * @crossplatform
   * @since 10
   */
  setDistance(value: number);

  /**
   * Sets the setFingers attribute.
   * @since 7
   */
  /**
   * Sets the setFingers attribute.
   * @crossplatform
   * @since 10
   */
  setFingers(value: number);
}

/**
 * Defines the PanGesture interface.
 * @since 7
 */
/**
 * Defines the PanGesture interface.
 * @crossplatform
 * @since 10
 */
interface PanGestureInterface {
  /**
   * Set the value.
   * @since 7
   */
  /**
   * Set the value.
   * @crossplatform
   * @since 10
   */
  (value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onActionStart(event: (event?: GestureEvent) => void): PanGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   * @crossplatform
   * @since 10
   */
  onActionUpdate(event: (event?: GestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @crossplatform
   * @since 10
   */
  onActionEnd(event: (event?: GestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @crossplatform
   * @since 10
   */
  onActionCancel(event: () => void): PanGestureInterface;
}

/**
 * Defines the SwipeGesture interface.
 * @since 8
 */
/**
 * Defines the SwipeGesture interface.
 * @crossplatform
 * @since 10
 */
interface SwipeGestureInterface {
  /**
   * Set the value.
   * @since 8
   */
  /**
   * Set the value.
   * @crossplatform
   * @since 10
   */
  (value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface;

  /**
   * Slide gesture recognition success callback.
   * @since 8
   */
  /**
   * Slide gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onAction(event: (event?: GestureEvent) => void): SwipeGestureInterface;
}

/**
 * Defines the PinchGesture interface.
 * @since 7
 */
/**
 * Defines the PinchGesture interface.
 * @crossplatform
 * @since 10
 */
interface PinchGestureInterface {
  /**
   * Set the value.
   * @since 7
   */
  /**
   * Set the value.
   * @crossplatform
   * @since 10
   */
  (value?: { fingers?: number; distance?: number }): PinchGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onActionStart(event: (event?: GestureEvent) => void): PinchGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   * @crossplatform
   * @since 10
   */
  onActionUpdate(event: (event?: GestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @crossplatform
   * @since 10
   */
  onActionEnd(event: (event?: GestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @crossplatform
   * @since 10
   */
  onActionCancel(event: () => void): PinchGestureInterface;
}

/**
 * Defines the RotationGesture interface.
 * @since 7
 */
/**
 * Defines the RotationGesture interface.
 * @crossplatform
 * @since 10
 */
interface RotationGestureInterface {
  /**
   * Set the value.
   * @since 7
   */
  /**
   * Set the value.
   * @crossplatform
   * @since 10
   */
  (value?: { fingers?: number; angle?: number }): RotationGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   * @crossplatform
   * @since 10
   */
  onActionStart(event: (event?: GestureEvent) => void): RotationGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   * @crossplatform
   * @since 10
   */
  onActionUpdate(event: (event?: GestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @crossplatform
   * @since 10
   */
  onActionEnd(event: (event?: GestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @crossplatform
   * @since 10
   */
  onActionCancel(event: () => void): RotationGestureInterface;
}

/**
 * Defines the GestureGroup interface.
 * @since 7
 */
/**
 * Defines the GestureGroup interface.
 * @crossplatform
 * @since 10
 */
interface GestureGroupInterface {
  /**
   * Return to Obtain GestureGroup.
   * @since 7
   */
  /**
   * Return to Obtain GestureGroup.
   * @crossplatform
   * @since 10
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @crossplatform
   * @since 10
   */
  onCancel(event: () => void): GestureGroupInterface;
}

/**
 * Defines TapGesture Component.
 * @since 7
 */
/**
 * Defines TapGesture Component.
 * @crossplatform
 * @since 10
 */
declare const TapGesture: TapGestureInterface;

/**
 * Defines LongPressGesture Component.
 * @since 7
 */
/**
 * Defines LongPressGesture Component.
 * @crossplatform
 * @since 10
 */
declare const LongPressGesture: LongPressGestureInterface;

/**
 * Defines PanGesture Component.
 * @since 7
 */
/**
 * Defines PanGesture Component.
 * @crossplatform
 * @since 10
 */
declare const PanGesture: PanGestureInterface;

/**
 * Defines SwipeGesture Component.
 * @since 7
 */
/**
 * Defines SwipeGesture Component.
 * @crossplatform
 * @since 10
 */
declare const SwipeGesture: SwipeGestureInterface;

/**
 * Defines PinchGesture Component.
 * @since 7
 */
/**
 * Defines PinchGesture Component.
 * @crossplatform
 * @since 10
 */
declare const PinchGesture: PinchGestureInterface;

/**
 * Defines RotationGesture Component.
 * @since 7
 */
/**
 * Defines RotationGesture Component.
 * @crossplatform
 * @since 10
 */
declare const RotationGesture: RotationGestureInterface;

/**
 * Defines GestureGroup Component.
 * @since 7
 */
/**
 * Defines GestureGroup Component.
 * @crossplatform
 * @since 10
 */
declare const GestureGroup: GestureGroupInterface;
