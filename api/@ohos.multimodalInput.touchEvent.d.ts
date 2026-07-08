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
 * The **touchEvent** module provides touch events reported by a device. It is inherited from 
 * [InputEvent]{@link @ohos.multimodalInput.inputEvent:InputEvent}.
 *
 * @file Touch Event
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

/**
 * Enumerates the touch event types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * Touch canceled. The **DOWN** event of the touchscreen is interrupted unexpectedly and does not close normally. For
   * example, the **CANCEL** event is triggered when the finger is pressed but not lifted, the screen is rotated or
   * folded, or a new hover occurs.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * Touch down.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  DOWN = 1,

  /**
   * Touch moved.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOVE = 2,

  /**
   * Touch up.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  UP = 3,

  /**
   * Drag started.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_DOWN = 4,

  /**
   * Dragging.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_MOVE = 5,

  /**
   * Drag ended.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_UP = 6
}

/**
 * Enumerates touch tool types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum ToolType {

  /**
   * Finger.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  FINGER = 0,

  /**
   * Stylus.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PEN = 1,

  /**
   * Eraser.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  RUBBER = 2,

  /**
   * Brush.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BRUSH = 3,

  /**
   * Pencil.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PENCIL = 4,

  /**
   * Air brush.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AIRBRUSH = 5,

  /**
   * Mouse.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOUSE = 6,

  /**
   * Lens.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  LENS = 7
}

/**
 * Enumerates touch sources. Currently, only the touchscreen and touchpad are supported.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum SourceType {

  /**
   * Touchscreen.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TOUCH_SCREEN = 0,

  /**
   * Stylus.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PEN = 1,

  /**
   * Touchpad.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TOUCH_PAD = 2
}

/**
 * Enumerates coordinate correction modes.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 19 dynamic
 * @since 23 static
 */
export declare enum FixedMode {

  /**
   * Normal mode.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * One-handed mode.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  AUTO = 1
}

/**
 * Defines the touch point information.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface Touch {

  /**
   * Touch event ID.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  id: int;

  /**
   * Press timestamp, in microseconds (μs) since the system starts.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedTime: long;

  /**
   * X coordinate of the touch event in the relative coordinate system with the upper-left corner of the specified
   * screen as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenX: int;

  /**
   * Y coordinate of the touch event in the relative coordinate system with the upper-left corner of the specified
   * screen as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenY: int;

  /**
   * X coordinate in the relative coordinate system with the upper-left corner of the window where the touch is located
   * as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowX: int;

  /**
   * Y coordinate in the relative coordinate system with the upper-left corner of the window where the touch is located
   * as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowY: int;

  /**
   * Pressure value. The value range is [0.0, 1.0]. The value **0.0** indicates that the pressure is not supported.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressure: double;

  /**
   * Width of the touch area, in pixels. The value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  width: int;

  /**
   * Height of the touch area, in pixels. The value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  height: int;

  /**
   * Angle relative to the YZ plane, in degrees. The value range is [-90, 90]. A positive value indicates a rightward
   * tilt.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  tiltX: int;

  /**
   * Angle relative to the XZ plane, in degrees. The value range is [-90, 90]. A positive value indicates a downward
   * tilt.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  tiltY: int;

  /**
   * X coordinate of the tool area center in the relative coordinate system with the upper-left corner of the specified
   * screen as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolX: int;

  /**
   * Y coordinate of the tool area center in the relative coordinate system with the upper-left corner of the specified
   * screen as the origin. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolY: int;

  /**
   * Width of the tool area, in pixels. The value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolWidth: int;

  /**
   * Height of the tool area, in pixels. The value can only be an integer.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolHeight: int;

  /**
   * X coordinate of the input device. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawX: int;

  /**
   * Y coordinate of the input device. Currently, only integers are supported. The unit is pixels.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawY: int;

  /**
   * Tool type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolType: ToolType;

  /**
   * Corrected value of the screenX coordinate in one-hand mode, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedDisplayX?: int;

  /**
   * Corrected value of the screenY coordinate in one-hand mode, in px.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedDisplayY?: int;

  /**
   * X coordinate of the touch event in the global coordinate system with the upper-left corner of the primary screen as
   * the origin, in px. <!--Del--> When being used as an input parameter, this parameter is mandatory if the value of
   * [TouchEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.TouchEventData}
   * is **true**, and its value can only be an integer. Otherwise, you do not need to set this parameter. In this case,
   * the X coordinate of the relative coordinate system with the upper left corner of the specified screen as the origin
   * is used to calculate the injected event. <!--DelEnd-->When being used as an output parameter, its value is reported
   * by the system.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalX?: int;

  /**
   * Y coordinate of the touch event in the global coordinate system with the upper-left corner of the primary screen as
   * the origin, in px. <!--Del--> When being used as an input parameter, this parameter is mandatory if the value of
   * [TouchEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.TouchEventData}
   * is **true**, and its value can only be an integer. Otherwise, you do not need to set this parameter. In this case,
   * the Y coordinate of the relative coordinate system with the upper left corner of the specified screen as the origin
   * is used to calculate the injected event. <!--DelEnd-->When being used as an output parameter, its value is reported
   * by the system.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalY?: int;

  /**
   * Touch point attribute ID. Currently, only single-finger touch is supported. The value **1** indicates left-hand
   * touch, and the value **2** indicates right-hand touch.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  blobId?: int;
}

/**
 * Defines a touch event.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface TouchEvent extends InputEvent {

  /**
   * Event type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * Current touch point.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  touch: Touch;

  /**
   * All touch points.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  touches: Touch[];

  /**
   * Device type of the touch source.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  sourceType: SourceType;

  /**
   * Coordinate correction mode.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedMode?: FixedMode;

  /**
   * Whether the touch event is an injection event. For details about injection events, see
   * [@ohos.multimodalInput.inputEventClient]{@link @ohos.multimodalInput.inputEventClient:inputEventClient}.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  isInject?: boolean;
}