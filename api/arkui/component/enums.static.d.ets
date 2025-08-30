"use static"
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import curves from '../../@ohos.curves';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";

/**
 * common enum of the checkbox shape
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum CheckBoxShape {
  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CIRCLE = 0,

  /**
   * Rounded Square.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROUNDED_SQUARE = 1
}

/**
 * common enum of color
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Color {
  /**
   * White.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  White = '#FFFFFFFF',

  /**
   * Black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Black = '#FF000000',

  /**
   * Blue.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Blue = '#FF0000FF',

  /**
   * Brown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Brown = '#FFA52A2A',

  /**
   * Gray.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Gray = '#FF808080',

  /**
   * Green.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Green = '#FF008000',

  /**
   * Grey.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Grey = '#FF808080',

  /**
   * Orange.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Orange = '#FFFFA500',

  /**
   * color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Pink = '#FFFFC0CB',

  /**
   * Red.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Red = '#FFFF0000',

  /**
   * Yellow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Yellow = '#FFFFFF00',

  /**
   * Transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Transparent = '#00000000',
}

/**
 * Common enum of color strategy
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ColoringStrategy {
  /**
   * Use the inverse color strategy. Gets the inverse of the background color. Only applies to foregroundColor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  INVERT = 'invert',

  /**
   * Use the average color strategy. Get the average color of the background. Only applies to shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  AVERAGE = 'average',

  /**
   * Use the primary color strategy. Get the color that dominate the background color. Only applies to shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PRIMARY = 'primary'
}

/**
 * Image display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ImageFit {
  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Contain = 0,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Cover = 1,

  /**
   * Adaptive display
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 2,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Fill = 3,

  /**
   * Keep the aspect ratio displayed, and the image zooms out or remains unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ScaleDown = 4,

  /**
   * Keep the original size and display it in the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 5,

  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_START = 7,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP = 8,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_END = 9,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  START = 10,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = 11,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = 12,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_START = 13,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM = 14,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_END = 15,

  /**
   * Matrix of Image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MATRIX = 16
}

/**
 * Border Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum BorderStyle {
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Dotted = 0,

  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Dashed = 1,

  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Solid = 2
}

/**
 * Line Join Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum LineJoinStyle {
  /**
   * Connect path segments using bevels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Miter = 0,

  /**
   * Connect path segments using sharp corners.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Round = 1,

  /**
   * Connect path segments using fillets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bevel = 2
}

/**
 * Function Called by Touch
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TouchType {
  /**
   * Triggered when the finger is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Down = 0,

  /**
   * Triggered when the finger is raised.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Up = 1,

  /**
   * Triggered when the finger presses on the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Move = 2,

  /**
   * Triggers when the touch event cancels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Cancel = 3,

  /**
   * Triggers when the touch event turns to hover enter in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_ENTER = 9,

  /**
   * Triggers when the touch event turns to hover move in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_MOVE = 10,

  /**
   * Triggers when the touch event turns to hover exit in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_EXIT = 11,

  /**
   * Triggers when the touch event turns to hover cancel in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_CANCEL = 12,
}

/**
 * Function Called by Touch or Gesture.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum InteractionHand {
  /**
   * Unknown hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NONE = 0,

  /**
   * Left hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LEFT = 1,

  /**
   * Right hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RIGHT = 2
}

/**
 * Function Called by Mouse
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum MouseButton {
  /**
   * Mouse Left Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Left = 0,

  /**
   * Mouse Right Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Right = 1,

  /**
   * Mouse Middle Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Middle = 2,

  /**
   * Mouse Back Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Back = 3,

  /**
   * Mouse Forward Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Forward = 4,

  /**
   * Mouse None Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 5
}

/**
 * Function Called by Mouse
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum MouseAction {
  /**
   * Triggered when the mouse is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Press = 0,

  /**
   * Triggered when the mouse is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Release = 1,

  /**
   * Triggered when the mouse is Moved.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Move = 2,

  /**
   * Triggered when the mouse is Hovered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Hover = 3,

  /**
   * Triggered when mouse enters the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ENTER_WINDOW = 4,

  /**
   * Triggered when mouse leaves the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LEAVE_WINDOW = 5,

  /**
   * Triggered when the mouse event is canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CANCEL = 13
}

/**
 * Animation status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum AnimationStatus {
  /**
   * Initial state of the animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Initial = 0,

  /**
   * The animation is playing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Running = 1,

  /**
   * The animation is paused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Paused = 2,

  /**
   * The animation is stopped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Stopped = 3
}

/**
 * enum Curve.
 *
 * @typedef { curves.Curve } Curve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type Curve = curves.Curve;

/**
 * Sets the state before and after the animation starts.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FillMode {
  /**
   * Restores to the initial state after the playback is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 0,

  /**
   * Retains the state at the end of the animation when the playback is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Forwards = 1,

  /**
   * Applies the start attribute value for the period specified by animation-delay before the animation is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Backwards = 2,

  /**
   * Both forward and backward fill modes are applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Both = 3
}

/**
 * Play Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum PlayMode {
  /**
   * The animation plays normally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Normal = 0,

  /**
   * The animation plays backwards.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Reverse = 1,

  /**
   * The animation plays forward on odd numbers (1, 3, 7...) and backward on even numbers (2, 4, 6...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Alternate = 2,

  /**
   * The animation plays backwards on odd numbers (1, 3, 7...) and forwards on even numbers (2, 4, 6...)..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  AlternateReverse = 3
}

/**
 * Type of a key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum KeyType {
  /**
   * Press the key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Down = 0,

  /**
   * The key is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Up = 1
}

/**
 * Type of the input device that triggers the current key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum KeySource {
  /**
   * The input device type is unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Unknown = 0,

  /**
   * Set Device Type to Keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Keyboard = 1,

  /**
   * Set Device Type to Joystic.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  JOYSTICK = 2
}

/**
 * Edge.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Edge {
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Top = 0,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bottom = 2,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 4,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 6
}

/**
 * Set Weekend
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Week {
  /**
   * Monday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Mon = 0,

  /**
   * Tuesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Tue = 1,

  /**
   * Wednesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Wed = 2,

  /**
   * Thursday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Thur = 3,

  /**
   * Friday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Fri = 4,

  /**
   * Saturday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Sat = 5,

  /**
   * Sunday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Sun = 6
}

/**
 * Sets the horizontal layout of elements.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Direction {
  /**
   * Elements are laid out from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Ltr = 0,

  /**
   * Elements are laid out from right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Rtl = 1,

  /**
   * Use the default layout direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 2
}

/**
 * Used to set the status of the scroll bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum BarState {
  /**
   * Not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Off = 0,

  /**
   * On-demand display (displayed when you touch it and disappears after 2 seconds).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 1,

  /**
   * Resident display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  On = 2
}

/**
 * Sliding effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum EdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or
   * touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Spring = 0,

  /**
   * Fade.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Fade = 1,

  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 2
}

/**
 * Alignment enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Alignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TopStart = 0,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Top = 1,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TopEnd = 2,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 3,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 4,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 5,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BottomStart = 6,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bottom = 7,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BottomEnd = 8
}

/**
 * Alignment enumeration description.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum LocalizedAlignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_START = "top_start",
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP = "top",
  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_END = "top_end",
  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  START = "start",
  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = "center",
  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = "end",
  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_START = "bottom_start",
  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM = "bottom",
  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_END = "bottom_end"
}

/**
 * TransitionType enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TransitionType {
  /**
   * Specifies that the current transition action takes effect in all change scenarios of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  All = 0,

  /**
   * Specifies the insertion scenario in which the current transition action takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Insert = 1,

  /**
   * Specifies the deletion scenario in which the current transition action takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Delete = 2
}

/**
 * RelateType enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum RelateType {
  /**
   * Scales the current component to fill the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FILL = 0,

  /**
   * Scales the current component to fit the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FIT = 1
}

/**
 * Controls the display or hide of the current component
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Visibility {
  /**
   * Show
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Visible = 0,

  /**
   * Hide, but participate in layout for placeholder.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Hidden = 1,

  /**
   * Hides but does not participate in layout and does not take place.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 2
}

/**
 * LineCapStyle enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum LineCapStyle {
  /**
   * The two ends of the dividing line are parallel lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Butt = 0,

  /**
   * The two ends of the dividing line are semicircles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Round = 1,

  /**
   * Extends half a circle at the end of the path with a width equal to half the line width and a height equal to the
   * line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Square = 2
}

/**
 * Axis enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Axis {
  /**
   * Longitudinal arrangement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Vertical = 0,

  /**
   * Horizontal arrangement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Horizontal = 1
}



/**
 * HorizontalAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum HorizontalAlign {
  /**
   * Aligns the start end in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 1,

  /**
   * Aligns the ends in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 2
}

/**
 * FlexAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FlexAlign {
  /**
   * The element is aligned at the head of the principal axis,
   * the first element is aligned with the head of the row, and subsequent elements are aligned with the previous one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 0,

  /**
   * The elements are centered in the direction of the principal axis,
   * and the first element is the same distance from the beginning of the row as the last element is from the end of
   * the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 1,

  /**
   * The element is aligned at the tail of the principal axis,
   * the last element is aligned at the end of the row, and the other elements are aligned with the next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 2,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   * with the same distance between adjacent elements.
   * The first element aligns with the beginning of the line, and the last element aligns with the end of the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SpaceBetween = 3,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   *  with the same distance between adjacent elements. Half the distance between adjacent elements as the distance
   * between
   * the first element and the distance between the last element and the end of the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SpaceAround = 4,

  /**
   * Elements in the Flex axis direction are evenly spaced.
   * The spacing between adjacent elements, the spacing between the first element and the beginning of the row,
   * and the spacing between the last element and the end of the row are the same.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SpaceEvenly = 5
}

/**
 * ItemAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ItemAlign {
  /**
   * Use the default configuration in the Flex container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 0,

  /**
   * The element is in the Flex container with the cross-axis direction head aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 1,

  /**
   * The element is centered in the Flex container with the cross axis direction aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 2,

  /**
   * The element is bottom aligned in the Flex container with the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 3,

  /**
   * Element In the Flex container, the cross-axis direction text baseline is aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Baseline = 4,

  /**
   * Element In a Flex container, the fill is stretched across the axis and, when no dimension is set, to the container
   * size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Stretch = 5
}

/**
 * FlexDirection enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FlexDirection {
  /**
   * The main axis is consistent with the row direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Row = 0,

  /**
   * The main axis is consistent with the column direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Column = 1,

  /**
   * The layout is in the opposite direction to the Row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RowReverse = 2,

  /**
   * Layout in the opposite direction to the column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ColumnReverse = 3
}

/**
 * Pixel Round Direction
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum PixelRoundCalcPolicy {
  /**
   * No Force round the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NO_FORCE_ROUND = 0,
  /**
   * Force ceil the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FORCE_CEIL = 1,
  /**
   * Force floor the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FORCE_FLOOR = 2
}

/**
 * Pixel Round Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum PixelRoundMode {
  /**
   * Do pixel round on layout finish.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PIXEL_ROUND_ON_LAYOUT_FINISH = 0,
  /**
   * Do pixel round after measure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PIXEL_ROUND_AFTER_MEASURE = 1
}

/**
 * FlexWrap enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FlexWrap {
  /**
   * The Flex container has a single row/column layout of elements, and children are allowed to go beyond the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NoWrap = 0,

  /**
   * The elements of the Flex container are arranged in multiple rows or columns, and the sub-items are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Wrap = 1,

  /**
   * The elements of the Flex container are arranged in reverse multiple rows/columns, and children are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WrapReverse = 2
}

/**
 * VerticalAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum VerticalAlign {
  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Top = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 1,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bottom = 2
}

/**
 * ImageRepeat enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ImageRepeat {
  /**
   * Do not draw the picture again.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NoRepeat = 0,

  /**
   * Repeat the drawing only on the horizontal axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  X = 1,

  /**
   * Repeat the drawing only on the vertical axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Y = 2,

  /**
   * Draw the picture repeatedly on both axes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  XY = 3
}

/**
 * ImageSize enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ImageSize {
  /**
   * Keep the scale of the original image unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 0,

  /**
   * Keep the aspect ratio to zoom in or out the image so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Cover = 1,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Contain = 2,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FILL = 3
}

/**
 * GradientDirection enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum GradientDirection {
  /**
   * Right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Left = 0,

  /**
   * From the bottom up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Top = 1,

  /**
   * From left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Right = 2,

  /**
   * From the top down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bottom = 3,

  /**
   * Top Left
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LeftTop = 4,

  /**
   * Left Bottom
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LeftBottom = 5,

  /**
   * Right Top
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RightTop = 6,

  /**
   * Right Bottom
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RightBottom = 7,

  /**
   * None
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 8
}

/**
 * SharedTransitionEffectType enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum SharedTransitionEffectType {
  /**
   * The location of the destination page element remains unchanged, and you can configure the transparency animation.
   * Currently,
   * only the static effect configured for redirecting to the target page takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Static = 0,

  /**
   * Move the source page element to the destination page element location and scale it appropriately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Exchange = 1
}

/**
 * Text style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FontStyle {
  /**
   * Default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Normal = 0,

  /**
   * Italic style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Italic = 1
}

/**
 * The font weight of the text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FontWeight {
  /**
   * Defines a lighter value than [Inherited Value]..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Lighter = 0,

  /**
   * Normal font. Equivalent to a digital value of 400.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Normal = 1,

  /**
   * Defines a more general value than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Regular = 2,

  /**
   * Defines a value that is more centered than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Medium = 3,

  /**
   * Bold. Equivalent to a numeric value of 700.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bold = 4,

  /**
   * Defines a value that is heavier than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bolder = 5
}

/**
 * Alignment of text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextAlign {
  /**
   * Center the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Center = 0,

  /**
   * The text is aligned in the same direction as the writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Start = 1,

  /**
   * The text is aligned in the opposite direction of writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  End = 2,

  /**
   * Justify the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  JUSTIFY = 3
}

/**
 * Declare how text overflows.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextOverflow {
  /**
   * When the text overflows its dimensions, the text will not be cropped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 0,

  /**
   * When the text overflows its dimensions, the text will be cropped and displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Clip = 1,

  /**
   * If the text overflows its dimensions, the text that cannot be displayed shall be replaced by ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Ellipsis = 2,

  /**
   * When the text overflows its dimensions, the text will scroll for displaying.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MARQUEE = 3
}

/**
 * Type of text modifier.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextDecorationType {
  /**
   * Do not use text decorative lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 0,

  /**
   * Underline the words.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Underline = 1,

  /**
   * Text is in all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Overline = 2,

  /**
   * A modifier line that passes through the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LineThrough = 3
}

/**
 * Letter type in text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextCase {
  /**
   * The default is normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Normal = 0,

  /**
   * The text is all lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LowerCase = 1,

  /**
   * The text is all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  UpperCase = 2
}

/**
 * Enum of text height adaptation
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextHeightAdaptivePolicy {
  /**
   * Priority is given to using the maxLines attribute to adapt the text height.
   * If the layout size using the maxLines attribute exceeds the layout constraint, try reducing the font size to
   * display more text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MAX_LINES_FIRST = 0,

  /**
   * Priority is given to using the minFontSize attribute to adapt the text height.
   * If the text can be layout in a single line using the minFontSize property, try increasing the font size and using
   * the maximum possible font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MIN_FONT_SIZE_FIRST = 1,

  /**
   * Priority is given to using the layout constraint to adapt the text height.
   * If the layout size exceeds the layout constraint, try reducing the font size. If the layout size still exceeds
   * the layout constraint after reducing the font size to minFontSize, remove the lines that exceed the layout
   * constraint.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LAYOUT_CONSTRAINT_FIRST = 2
}

/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ResponseType {
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RightClick = 0,

  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LongPress = 1
}

/**
 * HoverEffect enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum HoverEffect {
  /**
   * Default effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Auto = 0,

  /**
   * Zoom in and out effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Scale = 1,

  /**
   * Highlight effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Highlight = 2,

  /**
   * None effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 3
}

/**
 * Placement enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum Placement {
  /**
   * Left placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Left = 0,

  /**
   * Right placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Right = 1,

  /**
   * Top placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Top = 2,

  /**
   * Bottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Bottom = 3,

  /**
   * TopLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TopLeft = 4,

  /**
   * TopRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TopRight = 5,

  /**
   * BottomLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BottomLeft = 6,

  /**
   * BottomRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BottomRight = 7,

  /**
   * LeftTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LeftTop = 8,

  /**
   * LeftBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LeftBottom = 9,

  /**
   * RightTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RightTop = 10,

  /**
   * RightBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RightBottom = 11
}

/**
 * ArrowPointPosition enumeration description
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ArrowPointPosition {
  /**
   * Target start position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  START = 'Start',

  /**
   * Target center position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = 'Center',

  /**
   * Target end position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = 'End'
}

/**
 * Indicates the share option.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum CopyOptions {
  /**
   * Not allow share.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 0,

  /**
   * Share in app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  InApp = 1,

  /**
   * Share in local device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LocalDevice = 2,
}

/**
 * Defines the hit test mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum HitTestMode {
  /**
   * Both self and children nodes respond to the hit test for touch events,
   * but block hit test of the other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Default = 0,

  /**
   * Self respond to the hit test for touch events,
   * but block hit test of children and other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Block = 1,

  /**
   * Self and children respond to the hit test for touch events,
   * and allow hit test of other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  Transparent = 2,

  /**
   * Self not respond to the hit test for touch events,
   * but children respond to the hit test for touch events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  None = 3,
  /**
   * Blocks all lower-priority siblings and parent nodes from receiving the event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BLOCK_HIERARCHY = 4,
  /**
   * Self not respond to the hit test for touch events,
   * and all descendants (children, grandchildren, etc.) not respond to the hit test for touch events too.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BLOCK_DESCENDANTS = 5
}

/**
 * Title height.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TitleHeight {
  /**
   * Title height when only main title is available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MainOnly = 0,

  /**
   * Title height when main title and subtitle are both available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MainWithSub = 1
}

/**
 * Modifier key for hot key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ModifierKey {
  /**
   * ctrl.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CTRL = 0,

  /**
   * shift.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SHIFT = 1,

  /**
   * alt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ALT = 2
}

/**
 * Function key for hot key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FunctionKey {
  /**
   * Escape key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ESC = 0,

  /**
   * F1 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F1 = 1,

  /**
   * F2 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F2 = 2,

  /**
   * F3 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F3 = 3,

  /**
   * F4 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F4 = 4,

  /**
   * F5 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F5 = 5,

  /**
   * F6 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F6 = 6,

  /**
   * F7 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F7 = 7,

  /**
   * F8 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F8 = 8,

  /**
   * F9 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F9 = 9,

  /**
   * F10 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F10 = 10,

  /**
   * F11 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F11 = 11,

  /**
   * F12 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  F12 = 12,

  /**
   * Tab key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TAB = 13,

  /**
   * Up arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DPAD_UP = 14,

  /**
   * Down arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DPAD_DOWN = 15,

  /**
   * Left arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DPAD_LEFT = 16,

  /**
   * Right arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DPAD_RIGHT = 17
}

/**
 * The alignment of ImageSpan
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ImageSpanAlignment {
  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the baseline of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BASELINE = 0,

  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the bottom of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM = 1,

  /**
   * Indicating that the center of the ImageSpan should be aligned with the center of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = 2,

  /**
   * Indicating that the top of the ImageSpan should be aligned with the top of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP = 3,

  /**
   * Indicating that the ImageSpan should be aligned by the paragraph's textVerticalAlign.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FOLLOW_PARAGRAPH = 4
}

/**
 * ObscuredReasons.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ObscuredReasons {
  /**
   * Displayed data should appear as generic placeholders.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PLACEHOLDER = 0
}

/**
 * Text content style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextContentStyle {
  /**
   * Text content default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DEFAULT = 0,

  /**
   * Text content inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  INLINE = 1
}

/**
 * Enum of click effect level.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ClickEffectLevel {
  /**
   * Click effect level1.
   * The default scale number of this click effect level1 is 0.90.
   * The animation type is interpolatingSpring, velocity:10, mass:1, stiffness:410, damping:38.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LIGHT = 0,

  /**
   * Click effect level2.
   * The default scale number of this click effect level2 is 0.95.
   * The animation type is interpolatingSpring, velocity:10, mass:1, stiffness:350, damping:35.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MIDDLE = 1,

  /**
   * Click effect level3.
   * The default scale number of this click effect level3 is 0.95.
   * The animation type is interpolatingSpring, velocity:0, mass:1, stiffness:240, damping:28.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HEAVY = 2
}

/**
 * The type of XComponent
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum XComponentType {
  /**
   * Surface type. The default type is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SURFACE = 0,

  /**
   * Texture type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TEXTURE = 2,
  /**
   * Node type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NODE = 3,
}

/**
 * Nested scroll nested mode

 * @enum { number } NestedScrollMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum NestedScrollMode {
  /**
   * Only Self response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SELF_ONLY = 0,

  /**
   * Self priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SELF_FIRST = 1,

  /**
   * Parent scrollable component priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PARENT_FIRST = 2,

  /**
   * Both self and parent scrollable component response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PARALLEL = 3
}

/**
 * The possible source of scroll event
 * @enum { number } ScrollSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ScrollSource {
  /**
   * Drag events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DRAG = 0,

  /**
   * Fling after the drag has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FLING = 1,

  /**
   * Over scroll with EdgeEffect.Spring.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  EDGE_EFFECT = 2,

  /**
   * Other user input except drag, such as mouse wheel, key event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  OTHER_USER_INPUT = 3,

  /**
   * Drag events of scroll bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SCROLL_BAR = 4,

  /**
   * Fling after the drag on scroll bar has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SCROLL_BAR_FLING = 5,

  /**
   * Member methods of Scroller without animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SCROLLER = 6,

  /**
   * Member methods of Scroller with animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SCROLLER_ANIMATION = 7
}

/**
 * Enum of RenderFit
 *
 * @enum { number } RenderFit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum RenderFit {
  /**
   * Without scaling the content area, the content area is drawn in the center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = 0,
  /**
   * Without scaling the content area, the content area is drawn in the top center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP = 1,
  /**
   * Without scaling the content area, the content area is drawn in the bottom center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM = 2,
  /**
   * Without scaling the content area, the content area is drawn in the left center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LEFT = 3,
  /**
   * Without scaling the content area, the content area is drawn in the right center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RIGHT = 4,
  /**
   * Without scaling the content area, the content area is drawn in the top left of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_LEFT = 5,
  /**
   * Without scaling the content area, the content area is drawn in the top right of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP_RIGHT = 6,
  /**
   * Without scaling the content area, the content area is drawn in the bottom left of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_LEFT = 7,
  /**
   * Without scaling the content area, the content area is drawn in the bottom right of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BOTTOM_RIGHT = 8,
  /**
   * Scale the length and width of the content area to the node size to fill the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_FILL = 9,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node, and the content after scaling
   * is centered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_CONTAIN = 10,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node. If the height of the scaled content
   * is less than or equal to the height of the node, the scaled content area is displayed at the top; otherwise,
   * the width of the scaled content is less than or equal to the width of the node, the scaled content area is
   * displayed at the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_CONTAIN_TOP_LEFT = 11,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node. If the height of the scaled content
   * is less than or equal to the height of the node, the scaled content area is displayed at the bottom; otherwise,
   * the width of the scaled content is less than or equal to the width of the node, the scaled content area is
   * displayed at the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_CONTAIN_BOTTOM_RIGHT = 12,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node, and the content after scaling
   * displays the center area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_COVER = 13,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node. If the height of the scaled content
   * is greater than or equal to the height of the node, the scaled content area displays the top area; otherwise,
   * the width of the scaled content is greater than or equal to the width of the node, the scaled content area
   * displays the left area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_COVER_TOP_LEFT = 14,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node. If the height of the scaled content
   * is greater than or equal to the height of the node, the scaled content area displays the bottom area; otherwise,
   * the width of the scaled content is greater than or equal to the width of the node, the scaled content area
   * displays the right area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  RESIZE_COVER_BOTTOM_RIGHT = 15
}

/**
 * The Button Style of dialog,
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum DialogButtonStyle {
  /**
   * Default Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DEFAULT = 0,

  /**
   * Highlight Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HIGHLIGHT = 1
}

/**
 * Enum of word break
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum WordBreak {
  /**
   * By default, CJK text can be wrapped between any 2 characters, and non-CJK text can only be wrapped in spaces.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NORMAL = 0,

  /**
   * Non-CJK text be wrapped at any character
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BREAK_ALL = 1,

  /**
   * Non-CJK text can be wrapped at any character
   * and if a complete word can be preserved in space breaks, the word must be kept on the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BREAK_WORD = 2,

  /**
   * For supported languages, line breaks can be performed by syllables.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HYPHENATION = 3
}

/**
 * Enum of line break strategy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum LineBreakStrategy {
  /**
   * By default. Display as many characters as possible on each line until no more characters
   * can be displayed on that line, and do not automatically add hyphens under this strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  GREEDY = 0,

  /**
   * High quality folding. Optimize the layout of the entire text's line breaks and automatically
   * add hyphens if necessary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HIGH_QUALITY = 1,

  /**
   * Balanced folding. We will try our best to ensure that the width of each line in a paragraph
   * is the same, and if necessary, we will add conjunction
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BALANCED = 2
}

/**
 * Enum of Illuminated type
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 20
 */
export declare enum IlluminatedType {
  /**
   * Component is not illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  NONE = 0,
  /**
   * Border is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  BORDER = 1,
  /**
   * Content is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  CONTENT = 2,
  /**
   * Border and Content is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  BORDER_CONTENT = 3,
  /**
   * Border is illuminated, and the border have a bloom effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  BLOOM_BORDER = 4,
  /**
   * Border and Content is illuminated, and the border have a bloom effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  BLOOM_BORDER_CONTENT = 5,
}

/**
 * Enum of ellipsisMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum EllipsisMode {
  /**
   * The ellipsis is in the head.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  START = 0,

  /**
   * The ellipsis is in the middle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER = 1,

  /**
   * The ellipsis is at the end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = 2
}

/**
 * A type which can be undefined
 *
 * @typedef { T | undefined } Nullable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type Nullable<T> = T | undefined;

/**
 * Decide whether the width of select menu fit the trigger or content
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum OptionWidthMode {
  /**
   * The menu width fit the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FIT_CONTENT = 'fit_content',

  /**
   * The menu width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FIT_TRIGGER = 'fit_trigger'
}

/**
 * Enumerates the fold status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FoldStatus {
  /**
   * Fold Status Unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FOLD_STATUS_UNKNOWN = 0,
  /**
   * Fold Status Expanded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FOLD_STATUS_EXPANDED = 1,
  /**
   * Fold Status Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FOLD_STATUS_FOLDED = 2,
  /**
   * Fold Status Half Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FOLD_STATUS_HALF_FOLDED = 3
}

/**
 * Enumerates the app rotation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum AppRotation {

  /**
   * App does not rotate to display vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROTATION_0 = 0,

  /**
   * App rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROTATION_90 = 1,

  /**
   * App rotates 180 degrees clockwise to display vertically in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROTATION_180 = 2,

  /**
   * App rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROTATION_270 = 3
}

/**
 * Enum of EmbeddedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum EmbeddedType {
  /**
   * The EmbeddedComponent show the UI in EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  EMBEDDED_UI_EXTENSION = 0
}

/**
 * Marquee scrolling strategy after text update
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum MarqueeUpdateStrategy {
  /**
   * Reset scroll position and restart scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DEFAULT = 0,

  /**
   * Preserve scroll position, just change to new text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PRESERVE_POSITION = 1
}

/**
 * Type of text decoration line style.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextDecorationStyle {
  /**
   * Solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SOLID = 0,

  /**
   * Double lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DOUBLE = 1,

  /**
   * Dotted line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DOTTED = 2,

  /**
   * Dashed line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DASHED = 3,

  /**
   * Wavy line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WAVY = 4
}

/**
 * Type of text selectable.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TextSelectableMode {
  /**
   * set text selectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SELECTABLE_UNFOCUSABLE = 0,

  /**
   * set text selectable and focusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SELECTABLE_FOCUSABLE = 1,

  /**
   * set text unselectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  UNSELECTABLE = 2
}

/**
 * Type of accessibility hover event.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum AccessibilityHoverType {
  /**
   * Hover enter type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_ENTER = 0,

  /**
   * Hover move type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_MOVE = 1,

  /**
   * Hover exit type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_EXIT = 2,

  /**
   * Hover cancel type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HOVER_CANCEL = 3
}

/**
 * Type of window width breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum WidthBreakpoint {
  /**
   * Window width < 320vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WIDTH_XS = 0,

  /**
   * Window width >= 320vp and < 600vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WIDTH_SM = 1,

  /**
   * Window width >= 600vp and < 840vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WIDTH_MD = 2,

  /**
   * Window width >= 840vp and < 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WIDTH_LG = 3,

  /**
   * Window width >= 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WIDTH_XL = 4
}

/**
 * Type of window height breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum HeightBreakpoint {
  /**
   * Window aspectRatio < 0.8 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HEIGHT_SM = 0,

  /**
   * Window aspectRatio >= 0.8 and < 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HEIGHT_MD = 1,

  /**
   * Window aspectRatio >= 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HEIGHT_LG = 2
}

/**
 * Type of axis.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum AxisModel {
  /**
   * ABS_X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_X = 0,

  /**
   * ABS_Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_Y = 1,

  /**
   * ABS_Z axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_Z = 2,

  /**
   * ABS_RZ axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_RZ = 3,

  /**
   * ABS_GAS axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_GAS = 4,

  /**
   * ABS_BRAKE axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_BRAKE = 5,

  /**
   * ABS_HAT0X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_HAT0X = 6,

  /**
   * ABS_HAT0Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ABS_HAT0Y = 7
}

/**
 * Page flip mode of Swiper and Tabs on mouse wheel event.

 * @enum { number } PageFlipMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum PageFlipMode {
  /**
   * Turn pages continuously according to the number of mouse wheel events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CONTINUOUS = 0,

  /**
   * The page-turning animation remains unresponsive to other mouse wheel events until it completes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SINGLE = 1
}

/**
 * Rotating crown event behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum CrownAction {
  /**
   * Rotation crown behavior begins.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BEGIN = 0,

  /**
   * Rotation crown behavior update.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  UPDATE = 1,

  /**
   * The rotation crown behavior ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = 2
}

/**
 * Sensitivity of rotating crown.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum CrownSensitivity {
  /**
   * Low sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LOW = 0,

  /**
   * Medium sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  MEDIUM = 1,

  /**
   * High sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HIGH = 2
}

/**
 * Type of axis action.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum AxisAction {
  /**
   * None action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NONE = 0,

  /**
   * Triggered when an axis event starts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BEGIN = 1,

  /**
   * Triggered when the axis event is updated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  UPDATE = 2,

  /**
   * Triggered when the axis event ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  END = 3,

  /**
   * Triggered when the axis event is cancelled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CANCEL = 4
}

/**
 * Type of focus draw level.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FocusDrawLevel {
  /**
   * Draw focus on node self level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SELF = 0,

  /**
   * Draw focus on top level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TOP = 1
}

/**
 * Menu divider mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum DividerMode {
  /**
   * Menu divider mode floating above menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FLOATING_ABOVE_MENU = 0,

  /**
   * Menu divider mode embedded in menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  EMBEDDED_IN_MENU = 1
}

/**
 * Event query type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum EventQueryType {
  /**
   * Type of onClick event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ON_CLICK = 0
}

/**
 * Tips show position type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum TipsAnchorType {
  /**
   * Tips display position based on bound component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TARGET = 0,

  /**
   * Tips display position based on cursor position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CURSOR = 1,
}

/**
 * Dialog display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum DialogDisplayMode {
  /**
   * dialog display in center of app window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER_IN_WINDOW = 1,

  /**
   * dialog display in center of screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  CENTER_IN_SCREEN = 0
}

/**
 * Focus wrap mode of a list or grid when moving focus using the arrow keys.

 * @enum { number } FocusWrapMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum FocusWrapMode {
  /**
   * No wrap when moving focus using the arrow keys.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DEFAULT = 0,

  /**
   * Auto wrap when moving focus using the arrow keys.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  WRAP_WITH_ARROW = 1
}

/**
 * Define the property type enumeration used in animation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum AnimationPropertyType {
  /**
   * Rotation angle in the x, y, z direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ROTATION = 0,

  /**
   * Tranlation in the x and y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  TRANSLATION = 1,

  /**
   * Scale in the x and y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SCALE = 2,

  /**
   * Opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  OPACITY = 3
}

/**
 * Define ColorSpace enumeration.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare enum ColorSpace {
  /**
   * SRGB ColorSpace.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SRGB = 0,
  /**
   * Display-P3 ColorSpace.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DISPLAY_P3 = 1,
}
