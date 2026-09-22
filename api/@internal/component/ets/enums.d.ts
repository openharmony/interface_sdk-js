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
 * @file Enums
 * @kit ArkUI
 */

/**
 * Sets the shape of check boxes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum CheckBoxShape {
  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CIRCLE = 0,

  /**
   * Rounded square.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ROUNDED_SQUARE = 1
}

/**
 * Sets the color type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Color {
  /**
   * ![white](docroot://reference/apis-arkui/arkui-ts/figures/white.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  White,

  /**
   * ![black](docroot://reference/apis-arkui/arkui-ts/figures/black.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Black,

  /**
   * ![blue](docroot://reference/apis-arkui/arkui-ts/figures/blue.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Blue,

  /**
   * ![brown](docroot://reference/apis-arkui/arkui-ts/figures/brown.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Brown,

  /**
   * ![gray](docroot://reference/apis-arkui/arkui-ts/figures/gray.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Gray,

  /**
   * ![green](docroot://reference/apis-arkui/arkui-ts/figures/green.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Green,

  /**
   * ![gray](docroot://reference/apis-arkui/arkui-ts/figures/gray.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Grey,

  /**
   * ![orange](docroot://reference/apis-arkui/arkui-ts/figures/orange.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Orange,

  /**
   * ![pink](docroot://reference/apis-arkui/arkui-ts/figures/pink.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Pink,

  /**
   * ![red](docroot://reference/apis-arkui/arkui-ts/figures/red.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Red,

  /**
   * ![yellow](docroot://reference/apis-arkui/arkui-ts/figures/yellow.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Yellow,

  /**
   * Transparent
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Transparent
}

/**
 * Enumerates the coloring strategies.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ColoringStrategy {
  /**
   * The foreground colors are the inverse of the component background colors. This strategy is only applicable when set
   * within the [foregroundColor]{@link CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)}
   * attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INVERT = 'invert',

  /**
   * The shadow colors of the component are the average color obtained from the component background shadow area. This
   * strategy is only applicable when set within the
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} attribute whose input parameter type is
   * ShadowOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  AVERAGE = 'average',

  /**
   * The shadow colors of the component are the primary color obtained from the component background shadow area. This
   * strategy is only applicable when set within the
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} attribute whose input parameter type is
   * ShadowOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PRIMARY = 'primary',

  /**
   * Extract the average color from the component background and convert to a contrasting black or white color.
   * Child components can use this color through Color('foreground').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  CONTRAST = 'contrast'
}

/**
 * Sets the image filling effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageFit {
  /**
   * The image or video is scaled with its aspect ratio retained to fit entirely within the display boundaries, with
   * horizontal center alignment.
   *
   * ![ImageFit-Examples01](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_contain.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Contain,

  /**
   * The image or video is scaled while maintaining the aspect ratio so that both sides are greater than or equal to the
   * display boundaries, aligned horizontally in the center.
   *
   * ![ImageFit-Examples02](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_cover.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cover,

  /**
   * The image or video is scaled appropriately based on its own dimensions and the component's size to fill the view
   * while maintaining the aspect ratio, aligned horizontally in the center.
   *
   * ![ImageFit-Examples03](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_auto.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * The image or video is scaled without maintaining the aspect ratio to fill the display boundaries, with horizontal
   * center alignment.
   *
   * ![ImageFit-Examples04](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_fill.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fill,

  /**
   * The image or video is displayed while maintaining the aspect ratio, only scaling down or keeping the original size,
   * aligned horizontally in the center.
   *
   * ![ImageFit-Examples05](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_scaleDown.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ScaleDown,

  /**
   * The image is displayed at its original size, aligned horizontally in the center.
   *
   * ![ImageFit-Examples06](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_none.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * The image or video is displayed at the top start position of the component in the original size.
   *
   * ![ImageFit-Examples07](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP_START = 7,

  /**
   * The image or video is displayed at the top center position of the component in the original size.
   *
   * ![ImageFit-Examples08](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 8,

  /**
   * The image or video is displayed at the top end position of the component in the original size.
   *
   * ![ImageFit-Examples09](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP_END = 9,

  /**
   * The image or video is displayed at the start position (vertically centered) of the component in the original size.
   *
   * ![ImageFit-Examples10](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  START = 10,

  /**
   * The image or video is displayed at the center position of the component in the original size.
   *
   * ![ImageFit-Examples11](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_center.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CENTER = 11,

  /**
   * The image or video is displayed at the end position (vertically centered) of the component in the original size.
   *
   * ![ImageFit-Examples12](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  END = 12,

  /**
   * The image or video is displayed at the bottom start position of the component in the original size.
   *
   * ![ImageFit-Examples13](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM_START = 13,

  /**
   * The image or video is displayed at the bottom center position of the component in the original size.
   *
   * ![ImageFit-Examples14](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 14,

  /**
   * The image or video is displayed at the bottom end position of the component in the original size.
   *
   * ![ImageFit-Examples15](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM_END = 15,

  /**
   * The image, with the use of [imageMatrix]{@link ImageAttribute#imageMatrix}, is displayed in the specified position
   * of the **Image component**, keeping its original size. SVG images are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  MATRIX = 16
}

/**
 * Sets the border style of an element.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BorderStyle {
  /**
   * Dotted border. The radius of a dot is half of **borderWidth**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Dotted,

  /**
   * Dashed border.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Dashed,

  /**
   * Solid border.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Solid
}

/**
 * Enumerates rendering strategies for drawing rounded corners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 22 dynamic
 */
declare enum RenderStrategy {
  /**
   * Online rendering mode. The content to be rendered is clipped with rounded corners and directly rendered to the main
   * canvas.
   *
   * Note: Online rendering may cause display anomalies in certain scenarios. For example, when blur effects are applied
   * within rounded corner components, background colors may interact and create gradient overlay effects. For detailed
   * behavior, see
   * [Example 3: Configuring Offscreen Rounded Corners](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#example-3-configuring-offscreen-rounded-corners).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  FAST = 0,

  /**
   * Offscreen rendering mode. The content to be rendered is first rendered to the offscreen canvas without rounded
   * corners, and then clipped with rounded corners and rendered to the main canvas.
   *
   * **NOTE**
   *
   * 1. Compared with online rendering, offscreen rendering requires additional performance overhead.
   * 2. In offscreen rendering, the content is first rendered on an additional canvas, and then rendered on the main
   *    canvas.
   * 3. Use offscreen rendering primarily for multi-layer components requiring rounded corners. For single components,
   *     it has effect only when the [clip]{@link CommonMethod#clip(value: boolean)} attribute,
   *     [background]{@link ./common}, or [foreground color]{@link ./common} is configured.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  OFFSCREEN = 1
}

/**
 * Sets the line connection style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LineJoinStyle {
  /**
   * Miter is used to connect paths.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Miter,

  /**
   * Round is used to connect paths.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Round,

  /**
   * Bevel is used to connect paths.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bevel
}

/**
 * Sets the trigger status type of a touch operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TouchType {
  /**
   * A finger is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Down,

  /**
   * A finger is lifted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Up,

  /**
   * A finger moves on the screen in pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Move,

  /**
   * A touch event is canceled. For example: 1. When a finger is held on the screen and the Home key is tapped to return
   * to the home screen, **Cancel** is triggered; 2. <!--RP2--><!--RP2End-->When a stylus operation occurs during a
   * finger touch, the finger touch operation receives a Cancel event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cancel,

  /**
   * A finger is pressed in accessibility mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_ENTER = 9,

  /**
   * The touch moves in accessibility mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_MOVE = 10,

  /**
   * A finger is lifted in accessibility mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_EXIT = 11,

  /**
   * The current event is canceled in accessibility mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_CANCEL = 12
}

/**
 * Enumerates how an input event is triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare enum InteractionHand {
  /**
   * Unspecified.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  NONE = 0,

  /**
   * Left-hand interaction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  LEFT = 1,

  /**
   * Right-hand interaction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  RIGHT = 2
}

/**
 * Enumerates the mouse button types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MouseButton {
  /**
   * Left button on the mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Left,

  /**
   * Right button on the mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Right,

  /**
   * Middle button on the mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Middle,

  /**
   * Back button on the left of the mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Back,

  /**
   * Forward button on the left of the mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Forward,

  /**
   * No button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None
}

/**
 * Sets the action type of a mouse operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MouseAction {
  /**
   * The mouse button is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Press,

  /**
   * The mouse button is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Release,

  /**
   * The mouse cursor moves.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Move,

  /**
   * The mouse pointer is hovered on an element.
   *
   * Note: This value has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Hover,

  /**
   * The mouse pointer moves into the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  ENTER_WINDOW = 4,

  /**
   * The mouse pointer moves out of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  LEAVE_WINDOW = 5,

  /**
   * The mouse button action is canceled. It is triggered in the following scenarios:
   *
   * 1. Component focus loss: This action is triggered when a currently focused component loses focus due to a system
   *     event (such as pop-up interruption or app switching).
   * 2. Event interruption: During a mouse operation, if a higher-priority event occurs (such as a system-level gesture
   *     or forced event stream recycling), causing the current mouse operation to be forcibly terminated.
   * 3. Abnormal state exit: In scenarios such as component destruction or abnormal rendering environment, unfinished
   *     mouse events are marked as canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  CANCEL = 13
}

/**
 * Sets the animation playback status.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum AnimationStatus {
  /**
   * The animation is in the initial state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Initial = 0,

  /**
   * The animation is being played.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Running = 1,

  /**
   * The animation is paused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Paused = 2,

  /**
   * The animation is stopped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Stopped = 3
}

/**
 * Enumerates the interpolation curves. For details about the animation, see <!--RP1-->
 * [Bezier Curve](docroot://../design/ux-design/animation-attributes.md)<!--RP1End-->.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Curve {
  /**
   * The animation maintains a constant speed throughout the process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Linear,

  /**
   * The animation starts slowly, accelerates, and then decelerates before ending. The curve is CubicBezier(0.25, 0.1, 0
   * .25, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ease,

  /**
   * The animation starts at a low speed and then picks up speed until the end. The cubic-bezier curve (0.42, 0.0, 1.0,
   * 1.0) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseIn,

  /**
   * The animation ends at a low speed. The cubic-bezier curve (0.0, 0.0, 0.58, 1.0) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseOut,

  /**
   * The animation starts and ends at a low speed. The cubic-bezier curve(0.42, 0.0, 0.58, 1.0) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseInOut,

  /**
   * The animation uses the standard cubic-bezier curve(0.4, 0.0, 0.2, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FastOutSlowIn,

  /**
   * The animation uses the deceleration cubic-bezier curve(0.0, 0.0, 0.2, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LinearOutSlowIn,

  /**
   * The animation uses the acceleration cubic-bezier curve(0.4, 0.0, 1.0, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FastOutLinearIn,

  /**
   * The animation uses the extreme deceleration cubic-bezier curve(0.0, 0.0, 0.0, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ExtremeDeceleration,

  /**
   * The animation uses the sharp cubic-bezier curve(0.33, 0.0, 0.67, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sharp,

  /**
   * The animation uses the rhythm cubic-bezier curve(0.7, 0.0, 0.2, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Rhythm,

  /**
   * The animation uses the smooth cubic-bezier curve(0.4, 0.0, 0.4, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Smooth,

  /**
   * The animation uses the friction cubic-bezier curve(0.2, 0.0, 0.2, 1.0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Friction
}

/**
 * Sets the status before and after execution of the animation in the current playback direction. The status after
 * execution of the animation is jointly determined by the **fillMode** and **reverse** attributes. For example, if
 * **fillMode** is set to **Forwards**, the target will retain the state defined by the last keyframe encountered during
 * execution. In this case, if **reverse** is set to **false**, the target will retain the state defined by the last
 * keyframe encountered in the forward direction, that is, the last image; if **reverse** is set to **true**, the target
 * will retain the state defined by the last keyframe encountered in the backward direction, that is, the first image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FillMode {
  /**
   * If the animation is not executed, no style is applied to the target. After the animation is played, the initial
   * default state is restored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * The target component retains the state set by the last keyframe encountered during execution of the animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Forwards = 1,

  /**
   * The animation applies the values defined in the first relevant keyframe once it is applied to the target component,
   * and retains the values during the period set by **delay**. The first relevant keyframe depends on the value of
   * **playMode**. If **playMode** is **Normal** or **Alternate**, the first relevant keyframe is in the **from** state.
   * If **playMode** is **Reverse** or **AlternateReverse**, the first relevant keyframe is in the **to** state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Backwards = 2,

  /**
   * The animation follows the rules for both **Forwards** and **Backwards**, extending the animation attributes in both
   * directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Both = 3
}

/**
 * Sets the animation playback mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum PlayMode {
  /**
   * The animation is played forwards.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * The animation is played backwards.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Reverse,

  /**
   * The animation is played forwards for an odd number of times (1, 3, 5...) and backwards for an even number of times
   * (2, 4, 6...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Alternate,

  /**
   * The animation is played backwards for an odd number of times (1, 3, 5...) and forwards for an even number of times
   * (2, 4, 6...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  AlternateReverse
}

/**
 * Sets the status type of a button operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum KeyType {
  /**
   * The key is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Down,

  /**
   * The key is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Up,

  /**
   * The key event is canceled. In the
   * [global monitoring of basic input events](docroot://reference/apis-arkui/arkui-ts/ts-inputeventmonitor.md),
   * blocking the **Up** event propagation automatically dispatches a **CANCEL** event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CANCEL = 3
}

/**
 * Sets the device type that triggers the button event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum KeySource {
  /**
   * Unknown input device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Unknown,

  /**
   * The input device is a keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Keyboard,

  /**
   * The input device is a joystick.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  JOYSTICK
}

/**
 * Controls the alignment position of the scrollable component in the layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Edge {
  /**
   * Top edge in the vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * Center position in the vertical direction.
   *
   * This API is deprecated since API version 9.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Center,

  /**
   * Bottom edge in the vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * Text baseline position in the cross axis direction.
   *
   * This API is deprecated since API version 9.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Baseline,

  /**
   * Start position in the horizontal direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * Center position in the horizontal direction.
   *
   * This API is deprecated since API version 9.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Middle,

  /**
   * End position in the horizontal direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End
}

/**
 * Enumerates the days of the week.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Week {
  /**
   * Monday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Mon,

  /**
   * Tuesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Tue,

  /**
   * Wednesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Wed,

  /**
   * Thursday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Thur,

  /**
   * Friday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fri,

  /**
   * Saturday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sat,

  /**
   * Sunday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sun
}

/**
 * Defines the horizontal layout direction of elements.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Direction {
  /**
   * Components are arranged from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ltr,

  /**
   * Components are arranged from right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Rtl,

  /**
   * The default layout direction is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto
}

/**
 * Sets the scroll bar status.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarState {

  /**
   * Not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Off,

  /**
   * Displayed when the screen is touched and hidden after 2s.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * Always displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  On
}

/**
 * Defines the sliding effect of the scrollable container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum EdgeEffect {
  /**
   * Spring effect. When at one of the edges, the component can move beyond the bounds based on initial velocity or
   * through touches, and produces a bounce effect when the user releases their finger.
   *
   * In API version 22 and earlier versions, the spring effect of the scrollable component does not take effect when the
   * scrollbar is dragged.
   *
   * In API version 23 and later versions, the spring effect of the scrollable component takes effect when the scrollbar
   * is dragged by fingers, but does not take effect when the scrollbar is dragged by a mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Spring,

  /**
   * Fade effect. When at one of the edges, the component produces a fade effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fade,

  /**
   * No effect when the component is at one of the edges.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None
}

/**
 * Defines the alignment mode for child elements in the container drawing area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Alignment {
  /**
   * Top start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  TopStart,

  /**
   * Horizontally centered on the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * Top end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  TopEnd,

  /**
   * Vertically centered start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * Horizontally and vertically centered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * Vertically centered end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * Bottom start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  BottomStart,

  /**
   * Horizontally centered on the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  BottomEnd
}

/**
 * Enumerated type that supports the align and [layoutGravity]{@link CommonMethod#layoutGravity} attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum LocalizedAlignment {
  /**
   * Top start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP_START = "top_start",
  /**
   * Horizontally centered on the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP = "top",
  /**
   * Top end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP_END = "top_end",
  /**
   * Vertically centered start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  START = "start",
  /**
   * Horizontally and vertically centered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  CENTER = "center",
  /**
   * Vertically centered end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  END = "end",
  /**
   * Bottom start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM_START = "bottom_start",
  /**
   * Horizontally centered on the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM = "bottom",
  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM_END = "bottom_end"
}

/**
 * Sets the transition type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TransitionType {
  /**
   * The transition takes effect in all scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  All,

  /**
   * The transition takes effect when a component is inserted or displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Insert,

  /**
   * The transition takes effect when a component is deleted or hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Delete
}

/**
 * Sets the padding mode of a child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum RelateType {
  /**
   * The current child component is scaled to fill the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FILL,

  /**
   * The current child component is scaled to adapt to the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FIT
}

/**
 * Defines the visibility and layout placeholder status of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Visibility {
  /**
   * The component is visible.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Visible,

  /**
   * The component is hidden, and a placeholder is used for it in the layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Hidden,

  /**
   * The component is hidden. It is not involved in the layout, and no placeholder is used for it.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None
}

/**
 * Sets the line endpoint style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LineCapStyle {
  /**
   * The ends of the line are squared off, and the line does not extend beyond its two endpoints.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Butt,

  /**
   * The line is extended at the endpoints by a half circle whose diameter is equal to the line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Round,

  /**
   * The line is extended at the endpoints by a rectangle whose width is equal to half the line width and height equal
   * to the line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Square
}

/**
 * Defines the axis direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Axis {
  /**
   * Vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Vertical,

  /**
   * Horizontal direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Horizontal
}

/**
 * Sets the horizontal alignment mode of child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum HorizontalAlign {
  /**
   * Aligned with the start edge in the same direction as the language in use.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * Aligned with the center. This is the default alignment mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * Aligned with the end edge in the same direction as the language in use.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End
}

/**
 * Sets the alignment mode of an element on the main axis of the container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexAlign {
  /**
   * The child components are aligned with the start edge of the main axis. The first component is aligned with the main
   * -start, and subsequent components are aligned with the previous one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * The child components are aligned in the center of the main axis. The space between the first component and the main
   * -start is the same as that between the last component and the main-end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * The child components are aligned with the end edge of the main axis. The last component is aligned with the main-
   * end, and other components are aligned with the next one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * The child components are evenly distributed along the main axis. The space between any two adjacent components is
   * the same. The first component is aligned with the main-start, the last component is aligned with the main-end, and
   * the remaining components are distributed so that the space between any two adjacent components is the same.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceBetween,

  /**
   * The child components are evenly distributed along the main axis. The space between any two adjacent components is
   * the same. The space between the first component and main-start, and that between the last component and main-end
   * are both half the size of the space between two adjacent components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceAround,

  /**
   * The child components are evenly distributed along the main axis. The space between the first component and main-
   * start, the space between the last component and main-end, and the space between any two adjacent components are the
   * same.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceEvenly
}

/**
 * Sets the alignment mode of an element on the cross axis of the container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ItemAlign {
  /**
   * The default configuration of the flex container is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * The element in the flex container is aligned with the cross-start edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * The element in the flex container is centered along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * The element in the flex container is aligned with the cross-end edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * The element aligns with the text baseline along the cross axis direction in a Flex container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Baseline,

  /**
   * The element stretches to fill along the cross axis direction in a Flex container. When the container is Flex and
   * **Wrap** is set to **FlexWrap.Wrap** or **FlexWrap.WrapReverse**, the element stretches to the size of the element
   * with the longest cross axis length in the current row/column. In other cases, the element stretches to the
   * container size regardless of whether the element size is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Stretch
}

/**
 * Sets the direction in which child components are arranged in the **Flex** component, that is, the direction of the
 * main axis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexDirection {
  /**
   * The child components are arranged in the same direction as the main axis runs along the rows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Row,

  /**
   * The child components are arranged in the same direction as the main axis runs down the columns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Column,

  /**
   * The child components are arranged opposite to the **Row** direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RowReverse,

  /**
   * The child components are arranged opposite to the **Column** direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ColumnReverse
}

/**
 * Enumerates the pixel rounding policies for component boundaries.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum PixelRoundCalcPolicy {
  /**
   * The value is not rounded off.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  NO_FORCE_ROUND = 0,
  /**
   * Rounded-up calculation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  FORCE_CEIL = 1,
  /**
   * Rounded-down calculation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  FORCE_FLOOR = 2
}

/**
 * Enumerates pixel rounding modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum PixelRoundMode {
  /**
   * Performs pixel rounding after the component finishes measuring its size and position. Default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PIXEL_ROUND_ON_LAYOUT_FINISH = 0,
  /**
   * Performs pixel rounding after the component finishes measuring its size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PIXEL_ROUND_AFTER_MEASURE = 1
}

/**
 * Sets whether elements are arranged in a single row/column or multiple rows/columns in the **Flex** container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexWrap {
  /**
   * The child components in the flex container are arranged in a single line. If any of them have minimum size
   * constraints applied, the flex container does not forcibly shrink them when overflow occurs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  NoWrap,

  /**
   * The child components in the flex container are arranged in multiple lines, and they may overflow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Wrap,

  /**
   * The child components in the flex container are reversely arranged in multiple lines, and they may overflow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  WrapReverse
}

/**
 * Sets the vertical alignment mode of child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum VerticalAlign {
  /**
   * Top aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * Center aligned. This is the default alignment mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * Bottom aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom
}

/**
 * Sets the image repeat pattern.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageRepeat {
  /**
   * The image is not repeatedly drawn.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  NoRepeat,

  /**
   * The image is repeatedly drawn only along the horizontal axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  X,

  /**
   * Images are repeatedly drawn only on the vertical axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Y,

  /**
   * The image is repeatedly drawn along both axes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  XY
}

/**
 * Sets the width and height effect of an image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageSize {
  /**
   * The original image aspect ratio is retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * The image is scaled with its aspect ratio retained for both sides to be greater than or equal to the display
   * boundaries.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cover,

  /**
   * The image is scaled with its aspect ratio retained for the content to be completely displayed within the display
   * boundaries.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Contain,

  /**
   * The image is scaled to fill the display area, and its aspect ratio is not retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FILL = 3
}

/**
 * Sets the direction of the linear gradient.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum GradientDirection {
  /**
   * From right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left = 0,

  /**
   * From bottom to top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top = 1,

  /**
   * From left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right = 2,

  /**
   * From top to bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom = 3,

  /**
   * From top left to bottom right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LeftTop = 4,

  /**
   * From bottom left to top right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LeftBottom = 5,

  /**
   * From top right to bottom left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightTop = 6,

  /**
   * From bottom right to top left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightBottom = 7,

  /**
   * None.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 8
}

/**
 * Sets the animation type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SharedTransitionEffectType {
  /**
   * The target page element remains in a fixed position, with configurable opacity animation.
   *
   * Currently, this effect only takes effect when configured for redirection to the target page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Static,

  /**
   * The source page element moves to the position of the target page element and scales accordingly.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Exchange
}

/**
 * Sets the font style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FontStyle {
  /**
   * Standard font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * Italic font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Italic
}

/**
 * Sets the font weight.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FontWeight {
  /**
   * 100 font weight (thin).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Lighter,

  /**
   * 400 font weight (normal).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * 400 font weight (normal), which is the same as the Normal effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Regular,

  /**
   * 500 font weight (medium).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Medium,

  /**
   * 700 font weight (bold).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bold,

  /**
   * 900 font weight (extra bold).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bolder
}

/**
 * Sets the horizontal alignment of the text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextAlign {
  /**
   * Horizontally centered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * Aligned with the start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * Aligned with the end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * Aligned with both margins.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  JUSTIFY,

  /**
   * Left aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  LEFT = 4,

  /**
   * Right aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  RIGHT = 5
}

/**
 * Sets the display mode when the text is too long.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextOverflow {
  /**
   * Overflowing content is clipped at the limit of the maximum line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * Overflowing content is clipped at the limit of the maximum line width. Same effect as **None**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Clip,

  /**
   * An ellipsis (...) is used to represent text overflow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ellipsis,

  /**
   * Text continuously scrolls when text overflow occurs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MARQUEE
}

/**
 * Sets the text decoration type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextDecorationType {
  /**
   * No text decorations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * Line below the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Underline,

  /**
   * Line above the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Overline,

  /**
   * Line through the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LineThrough
}

/**
 * Sets the text case.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextCase {
  /**
   * The original case of the text is retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * All letters in the text are in lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LowerCase,

  /**
   * All letters in the text are in uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  UpperCase
}

/**
 * Sets the mode of adjusting the text font size to adapt to the layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum TextHeightAdaptivePolicy {
  /**
   * Sets the text height adaptation mode to [maxLines]{@link TextAreaAttribute#maxLines(value: number)} first.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MAX_LINES_FIRST,

  /**
   * Prioritize the **minFontSize** settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIN_FONT_SIZE_FIRST,

  /**
   * Prioritize the layout constraint settings in terms of height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LAYOUT_CONSTRAINT_FIRST
}

/**
 * Sets how menu display is triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ResponseType {
  /**
   * The menu is displayed when the component is right-clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  RightClick,

  /**
   * The menu is displayed when the component is long-pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  LongPress
}

/**
 * Sets the hover effect of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum HoverEffect {
  /**
   * Default hover effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Auto,

  /**
   * Zoom-in and zoom-out effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Scale,

  /**
   * Background fade-in and fade-out effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Highlight,

  /**
   * No effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None
}

/**
 * Sets the position of the bubble.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum Placement {
  /**
   * The bubble is on the left of the component, aligned with the left center of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Left,

  /**
   * The bubble is on the right of the component, aligned with the right center of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Right,

  /**
   * The bubble is on the top of the component, aligned with the top center of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Top,

  /**
   * The bubble is on the bottom of the component, aligned with the bottom center of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Bottom,

  /**
   * The bubble is on the top of the component. Since API version 9, it is aligned with the left edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopLeft,

  /**
   * The bubble is on the top of the component. Since API version 9, it is aligned with the right edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopRight,

  /**
   * The bubble is on the bottom of the component. Since API version 9, it is aligned with the left edge of the
   * component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomLeft,

  /**
   * The bubble is on the bottom of the component. Since API version 9, it is aligned with the right edge of the
   * component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomRight,

  /**
   * The bubble is on the left of the component, aligned with the top edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LeftTop,

  /**
   * The bubble is on the left of the component, aligned with the bottom edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LeftBottom,

  /**
   * The bubble is on the right of the component, aligned with the top edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  RightTop,

  /**
   * The bubble is on the right of the component, aligned with the bottom edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  RightBottom
}

/**
 * Sets the position of the bubble arrow.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum ArrowPointPosition {
  /**
   * On the leftmost side of the parent component in the horizontal layout; on the top of the parent component in the
   * vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  START = 'Start',

  /**
   * In the center of the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 'Center',

  /**
   * On the rightmost side of the parent component in the horizontal layout; at the bottom of the parent component in
   * the vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  END = 'End'
}

/**
 * Sets the copy options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum CopyOptions {
  /**
   * Copy disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Copy and paste within the current application only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  InApp = 1,

  /**
   * Copy and paste across all applications on the device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LocalDevice = 2,

  /**
   * Cross-device copy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11 dynamiconly
   * @deprecated since 12
   */
  CROSS_DEVICE = 3
}

/**
 * Sets the response logic and node blocking rules for the hit test.
 *
 * > **NOTE**
 * >
 * > When multiple nodes in a **Stack** component have overlapping touch areas, if the touch point hits a child
 * > component of the topmost node, only the topmost node will undergo hit testing by default. In this case, touch
 * > testing for lower-layer nodes can only be triggered by setting the
 * > [hitTestBehavior]{@link CommonMethod#hitTestBehavior} of the topmost node to **HitTestMode.Transparent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 26.0.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum HitTestMode {
  /**
   * Default hit test mode. The node itself and its child nodes respond to the hit test, but block the hit test of
   * sibling nodes. It does not affect the hit test of ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default,

  /**
   * The node itself responds to the hit test and blocks the hit test of child nodes, sibling nodes, and ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Block,

  /**
   * Both the node itself and its child nodes respond to the hit test and do not block the hit test of sibling nodes and
   * ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Transparent,

  /**
   * The node itself does not respond to the hit test and does not block the hit test of child nodes, sibling nodes, and
   * ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None,
  /**
   * The node itself and its child nodes respond to the hit test, preventing all sibling nodes and parent nodes with
   * lower priority from participating in the hit test.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  BLOCK_HIERARCHY,
  /**
   * The node itself does not respond to the hit test, and all descendants (children, grandchildren, etc.) also do not
   * respond to the hit test. It does not affect the hit test of ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  BLOCK_DESCENDANTS
}

/**
 * Sets the recommended height of the title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum TitleHeight {
  /**
   * Recommended height (56 vp) of the title bar when only the main title is available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MainOnly,

  /**
   * Recommended height (82 vp) of the title bar when both the main title and subtitle exist.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MainWithSub
}

/**
 * Enumerates the input method modifier keys.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ModifierKey {
  /**
   * Ctrl key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CTRL,

  /**
   * Shift key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SHIFT,

  /**
   * Alt key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALT
}

/**
 * Enumerates the input method function keys.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum FunctionKey {
  /**
   * Esc key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ESC,

  /**
   * F1 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F1,

  /**
   * F2 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F2,

  /**
   * F3 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F3,

  /**
   * F4 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F4,

  /**
   * F5 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F5,

  /**
   * F6 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F6,

  /**
   * F7 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F7,

  /**
   * F8 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F8,

  /**
   * F9 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F9,

  /**
   * F10 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F10,

  /**
   * F11 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F11,

  /**
   * F12 key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F12,

  /**
   * Tab key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TAB,

  /**
   * Up arrow key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_UP,

  /**
   * Down arrow key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_DOWN,

  /**
   * Left arrow key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_LEFT,

  /**
   * Right arrow key on the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_RIGHT,
}

/**
 * Sets the alignment mode of the image relative to the line height.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ImageSpanAlignment {
  /**
   * The image is bottom aligned with the text baseline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BASELINE,

  /**
   * The image is bottom aligned with the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM,

  /**
   * The image is center aligned with the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,

  /**
   * The image is top aligned with the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP,

  /**
   * The alignment mode follows the parent component of the **Text** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FOLLOW_PARAGRAPH
}

/**
 * Sets how the component content is obscured.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ObscuredReasons {
  /**
   * The content is replaced by a placeholder.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PLACEHOLDER = 0
}

/**
 * Sets the polymorphic style of the text box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum TextContentStyle {
  /**
   * Default style. The caret width is 1.5 vp, and the caret height is subject to the background height and font size of
   * the selected text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT,

  /**
   * Inline input style, also known as inline mode. The text selection background height is the same as the input box
   * height.
   *
   * Inline input is used in scenarios where there is a clear distinction between editing and non-editing states, for
   * example, renaming in a file list view.
   *
   * The **showError** attribute is not supported.
   *
   * In inline mode, dragging text is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INLINE
}

/**
 * Sets the click effect level and animation parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ClickEffectLevel {
  /**
   * Small area (light), spring animation, stiffness: 410, damping: 38, initial velocity: 1, default scale 90%.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LIGHT = 0,

  /**
   * Medium area (stable), spring animation, stiffness: 350, damping: 35, initial velocity: 0.5, default scale 95%.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIDDLE = 1,

  /**
   * Large area (heavy), spring animation, stiffness: 240, damping: 28, initial velocity: 0, default scale 95%.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HEAVY = 2
}

/**
 * The type of XComponent
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum XComponentType {
  /**
   * Used for EGL/OpenGLES and media data writing, displaying developer-customized rendering content on the screen
   * independently. When the background color is set to black, the display subsystem (DSS) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SURFACE,

  /**
   * Uses [XComponent]{@link ./xcomponent} as a container component, supporting non-UI logic execution within it to
   * dynamically load display content.
   *
   * **NOTE**
   *
   * This API is supported since API version 10 and deprecated since API version 12. You are advised to use other
   * container components instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead Column
   */
  COMPONENT,

  /**
   * Used for EGL/OpenGLES and media data writing. The developer-customized rendering content is composited with the
   * XComponent component's content and then displayed on the screen. 1. Frame synchronization is maintained, and the
   * GPU texture and other ArkUI drawing instructions are sent to the render service (RenderService) in the same frame.
   * 2. Animations and system components are unified. 3. GPU compositing is used, which may consume more power compared
   * to the display subsystem (DSS) path used by surface.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXTURE,

  /**
   * Placeholder container for Native UI nodes. Page components developed by developers through native APIs can be
   * displayed within this container area.
   *
   * **NOTE**
   *
   * This API is supported since API version 12 and deprecated since API version 20. You are advised to use the
   * [ContentSlot](docroot://ui/rendering-control/arkts-rendering-control-contentslot.md) component instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead ContentSlot
   */
  NODE
}

/**
 * Sets the nested mode of a nested scrollable component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum NestedScrollMode {

  /**
   * The scrolling is contained within the component, and no scroll chaining occurs, that is, the parent component does
   * not scroll when the component scrolling reaches the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SELF_ONLY,

  /**
   * The component scrolls first, and when it hits the boundary, the parent component scrolls. When the parent component
   * hits the boundary, its edge effect is displayed. If no edge effect is specified for the parent component, the edge
   * effect of the child component is displayed instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SELF_FIRST,

  /**
   * The parent component scrolls first, and when it hits the boundary, the component scrolls. When the component hits
   * the boundary, its edge effect is displayed. If no edge effect is specified for the component, the edge effect of
   * the parent component is displayed instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PARENT_FIRST,

  /**
   * The component and its parent component scroll at the same time. When both the component and its parent component
   * hit the boundary, the edge effect of the component is displayed. If no edge effect is specified for the component,
   * the edge effect of the parent component is displayed instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PARALLEL
}

/**
 * Enumerates the sources of scroll operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ScrollSource {
  /**
   * Drag event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DRAG = 0,

  /**
   * Inertia scrolling after the drag ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FLING,

  /**
   * Edge scrolling effect with **EdgeEffect.Spring**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EDGE_EFFECT,

  /**
   * Other user inputs aside from dragging, such as those from the mouse wheel and keyboard events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  OTHER_USER_INPUT,

  /**
   * Drag event from the scrollbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLL_BAR,

  /**
   * Inertia scrolling with velocity after the scrollbar is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLL_BAR_FLING,

  /**
   * Non-animated methods of the **Scroller** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLLER,

  /**
   * Animated methods of the **Scroller** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLLER_ANIMATION
}

/**
 * Enumerates the modes in which the final state of the component's content is rendered during its width and height
 * animation process.
 *
 * > **NOTE**
 * >
 * > - In the illustrative diagrams, the blue area indicates the content, and the orange area indicates the component
 * > content box.
 * >
 * > - Different render fit modes create different effects during the width and height animation process. Choose the one
 * > that best fits your need.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RenderFit {
  /**
   * The component's content stays at the final size and is always aligned with the center of the component.
   *   ![renderfit_center](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_center.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 0,
  /**
   * The component's content stays at the final size and is always aligned with the top center of the component.
   *     ![renderfit_top](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 1,
  /**
   * The component's content stays at the final size and is always aligned with the bottom center of the component.
   *        ![renderfit_bottom](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 2,
  /**
   * The component's content stays at the final size and is always aligned with the left of the component.
   * ![renderfit_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LEFT = 3,
  /**
   * The component's content stays at the final size and is always aligned with the right of the component.
   * ![renderfit_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RIGHT = 4,
  /**
   * The component's content stays at the final size and is always aligned with the upper left corner of the component.
   *             ![renderfit_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP_LEFT = 5,
  /**
   * The component's content stays at the final size and is always aligned with the upper right corner of the component.
   *             ![renderfit_top_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP_RIGHT = 6,
  /**
   * The component's content stays at the final size and is always aligned with the lower left corner of the component.
   *             ![renderfit_bottom_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM_LEFT = 7,
  /**
   * The component's content stays at the final size and is always aligned with the lower right corner of the component.
   *              ![renderfit_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM_RIGHT = 8,
  /**
   * The component's content is always resized to fill the component's content box, without considering its aspect ratio
   * in the final state.
   * ![renderfit_resize_fill](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_fill.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_FILL = 9,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to fit within the
   * component's content box. It is always aligned with the center of the component.
   * ![renderfit_resize_contain](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN = 10,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to fit within the
   * component's content box. When there is remaining space in the width direction of the component, the content is left
   * -aligned with the component. When there is remaining space in the height direction of the component, the content is
   * top-aligned with the component.
   * ![renderfit_resize_contain_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN_TOP_LEFT = 11,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to fit within the
   * component's content box. When there is remaining space in the width direction of the component, the content is
   * right-aligned with the component. When there is remaining space in the height direction of the component, the
   * content is bottom-aligned with the component.
   * ![renderfit_resize_contain_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN_BOTTOM_RIGHT = 12,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to cover the component's
   * entire content box. It is always aligned with the center of the component, so that its middle part is displayed.
   * ![renderfit_resize_cover](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER = 13,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to cover the component's
   * entire content box. When there is remaining space in the width direction, the content is left-aligned with the
   * component, so that its left part is displayed. When there is remaining space in the height direction, the content
   * is top-aligned with the component, so that its top part is displayed.
   * ![renderfit_resize_cover_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER_TOP_LEFT = 14,
  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to cover the component's
   * entire content box. When there is remaining space in the width direction, the content is right-aligned with the
   * component, so that its right part is displayed. When there is remaining space in the height direction, the content
   * is bottom-aligned with the component, so that its bottom part is displayed.
   * ![renderfit_resize_cover_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER_BOTTOM_RIGHT = 15
}

/**
 * Sets the button style for dialog boxes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DialogButtonStyle {
  /**
   * Blue text on white background (blue text on black background in dark theme).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * White text on blue background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HIGHLIGHT = 1
}

/**
 * Sets the word break rule.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WordBreak {
  /**
   * Word breaks can occur between any two characters for Chinese, Japanese, and Korean (CJK) text, but can occur only
   * at a space character for non-CJK text (such as English).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  NORMAL = 0,

  /**
   * Line breaks can occur between any two characters for non-CJK text. For CJK text, the effect is the same as that of
   * **NORMAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BREAK_ALL = 1,

  /**
   * This option has the same effect as **BREAK_ALL** for non-CJK text, except that it preferentially wraps lines at
   * appropriate characters (for example, spaces). If no breakpoints are found, it breaks between any two characters.
   * For CJK text, the effect is the same as that of **NORMAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BREAK_WORD = 2,

  /**
   * Attempts are made to hyphenate words at the end of each line using a hyphen. If a hyphen cannot be added, this
   * option behaves like **BREAK_WORD**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  HYPHENATION = 3
}

/**
 * Sets the line break rule.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LineBreakStrategy {
  /**
   * Places as many words on a line as possible and moves to the next line only if no more words can fit into the same
   * line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  GREEDY = 0,

  /**
   * Fills in lines as much as possible on the basis of **BALANCED**, which may result in a large blank area on the last
   * line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HIGH_QUALITY = 1,

  /**
   * Without splitting words, the width of each line in a paragraph is the same as much as possible.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BALANCED = 2
}

/**
 * Defines the illumination types, which specify whether a component can be illuminated by a light source and the type
 *     of illumination.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare enum IlluminatedType {
  /**
   * The component is not illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  NONE = 0,
  /**
   * The borders of the component can be illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BORDER = 1,
  /**
   * The content of the component can be illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  CONTENT = 2,
  /**
   * The borders and content of the component can be illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BORDER_CONTENT = 3,
  /**
   * The borders of the component can be illuminated, with a luminous effect applied to the borders.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BLOOM_BORDER = 4,
  /**
   * The borders and content of the component can be illuminated, with a luminous effect applied to the borders.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BLOOM_BORDER_CONTENT = 5
}

/**
 * Sets the position of ellipsis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum EllipsisMode {
  /**
   * An ellipsis is used at the start of the line of text. This applies to single-line text scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  START = 0,

  /**
   * An ellipsis is used at the center of the line of text. This applies to single-line text scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 1,

  /**
   * An ellipsis is used at the end of the line of text. This applies to single-line and multi-line text scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  END = 2,

  /**
   * An ellipsis is used at the start of the line of text. This applies to single-line and multi-line text scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  MULTILINE_START = 3,

  /**
   * An ellipsis is used at the center of the line of text. This applies to single-line and multi-line text scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  MULTILINE_CENTER = 4
}

/**
 * The value of this type can be the type specified by the generic parameter **T**, or **undefined**.
 *
 * @unionmember { T } Type specified by the generic parameter T.
 * @unionmember { undefined } The object is **undefined**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type Nullable<T> = T | undefined;


/**
 * Sets the width mode of the drop-down menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum OptionWidthMode {
  /**
   * If this value is set, the width of the drop-down menu is 2 columns by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_CONTENT = 'fit_content',

  /**
   * Inherits the width of the drop-down list button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_TRIGGER = 'fit_trigger'
}

/**
 * Sets the folding status of the device.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum FoldStatus {
  /**
   * The folding status of the device is unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_UNKNOWN = 0,
  /**
   * The device is fully open.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_EXPANDED = 1,
  /**
   * The device is folded (completely closed).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_FOLDED = 2,
  /**
   * The device is half-folded, somewhere between fully open and completely folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_HALF_FOLDED = 3
}

/**
 * Defines the rotation angle of the application's orientation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AppRotation {

  /**
   * 0 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_0 = 0,

  /**
   * 90 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_90 = 1,

  /**
   * 180 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_180 = 2,

  /**
   * 270 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_270 = 3
}

/**
 * Enumerates the types of the providers that can be started by the **EmbeddedComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum EmbeddedType {
  /**
   * EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EMBEDDED_UI_EXTENSION = 0
}

/**
 * Sets the scrolling strategy for the marquee after its attributes are updated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MarqueeUpdateStrategy {
  /**
   * After the marquee attributes are updated, the marquee scrolls from the start position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * After the marquee attributes are updated, the marquee scrolls from the current position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRESERVE_POSITION = 1
}

/**
 * Sets the style of the text decoration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TextDecorationStyle {
  /**
   * Single solid line (default value).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SOLID = 0,

  /**
   * Double solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DOUBLE = 1,

  /**
   * Dotted line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DOTTED = 2,

  /**
   * Dashed line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DASHED = 3,

  /**
   * Wavy line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  WAVY = 4
}

/**
 * Sets whether text can be selected and focused on.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TextSelectableMode {
  /**
   * The text is selectable, but not focusable. Setting the **selection**, **bindSelectionMenu**, or **copyOption**
   * attribute does not affect the behavior.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTABLE_UNFOCUSABLE = 0,

  /**
   * The text is selectable and focusable. It obtains focus when touched.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTABLE_FOCUSABLE = 1,

  /**
   * The text is not selectable nor focusable. The **selection**, **bindSelectionMenu**, and **copyOption** attributes
   * do not work in this case.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  UNSELECTABLE = 2
}

/**
 * Type of accessibility hover event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AccessibilityHoverType {
  /**
   * A finger is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_ENTER = 0,

  /**
   * The touch moves.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_MOVE = 1,

  /**
   * A finger is lifted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_EXIT = 2,

  /**
   * The current event is interrupted and canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_CANCEL = 3
}

/**
 * Enumerates the width breakpoint values corresponding to different window width thresholds. The values are returned
 * through [getWindowWidthBreakpoint]{@link @ohos.arkui.UIContext:UIContext.getWindowWidthBreakpoint}.
 *
 * The following table lists default width breakpoint thresholds for typical devices, serving as a reference for
 * responsive layout design based on window width breakpoints. Device manufacturers may customize these thresholds
 * through product-specific configurations when needed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 13 dynamic
 */
declare enum WidthBreakpoint {
  /**
   * The window width is less than 320 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_XS = 0,

  /**
   * The window width is greater than or equal to 320 vp and less than 600 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_SM = 1,

  /**
   * The window width is greater than or equal to 600 vp and less than 840 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_MD = 2,

  /**
   * The window width is greater than or equal to 840 vp and less than 1440 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_LG = 3,

  /**
   * The window width is greater than or equal to 1440 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_XL = 4
}

/**
 * Enumerates the height breakpoint values corresponding to different window aspect ratio thresholds. The values are
 * returned through [getWindowHeightBreakpoint]{@link @ohos.arkui.UIContext:UIContext.getWindowHeightBreakpoint}.
 *
 * The following table lists default aspect ratio breakpoint thresholds for typical devices, serving as a reference for
 * responsive layout design based on window aspect ratios. Device manufacturers may customize these thresholds through
 * product-specific configurations when needed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 13 dynamic
 */
declare enum HeightBreakpoint {
  /**
   * The window aspect ratio is less than 0.8.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_SM = 0,

  /**
   * The window aspect ratio is greater than or equal to 0.8 and less than 1.2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_MD = 1,

  /**
   * The window aspect ratio is greater than or equal to 1.2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_LG = 2
}

/**
 * Enumerates the axis types for focus axis events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 15 dynamic
 */
declare enum AxisModel {
  /**
   * Game controller x-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_X = 0,

  /**
   * Game controller y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_Y = 1,

  /**
   * Game controller z-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_Z = 2,

  /**
   * Game controller rz-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_RZ = 3,

  /**
   * Game controller GAS-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_GAS = 4,

  /**
   * Game controller BRAKE-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_BRAKE = 5,

  /**
   * Game controller HAT0X-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_HAT0X = 6,

  /**
   * Game controller HAT0Y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_HAT0Y = 7,

  /**
   * Game controller RX-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RX = 8,

  /**
   * Game controller RY-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RY = 9,

  /**
   * Game controller THROTTLE-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_THROTTLE = 10,

  /**
   * Game controller RUDDER-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RUDDER = 11,

  /**
   * Game controller WHEEL-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_WHEEL = 12,

  /**
   * Game controller HAT1X-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT1X = 13,

  /**
   * Game controller HAT1Y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT1Y = 14,

  /**
   * Game controller HAT2X-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT2X = 15,

  /**
   * Game controller HAT2Y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT2Y = 16,

  /**
   * Game controller HAT3X-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT3X = 17,

  /**
   * Game controller HAT3Y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT3Y = 18
}

/**
 * Enumerates focus wrapping modes for cross-axis directional navigation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum FocusWrapMode {
  /**
   * Cross-axis directional navigation does not wrap focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * Cross-axis directional navigation wraps focus.
   *
   * In irregular grid layouts, when moving focus along the cross axis, the system prioritizes focusable items within
   * the same row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WRAP_WITH_ARROW = 1
}

/**
 * Enumerates column count policies for different
 * [breakpoints](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum PresetFillType {
  /**
   * For **List** and **Swiper** components: displays 1 column when the component width falls within the sm and
   * smaller breakpoint range, 2 columns within the md breakpoint range, and 3 columns within the lg and larger
   * breakpoint range.
   *
   * For **Grid**, **WaterFlow**, and **LazyVWaterFlowLayout** components: displays 2 columns when the component width
   * falls within the sm and smaller breakpoint range, 3 columns within the md breakpoint range, and 5 columns within
   * the lg and larger breakpoint range. **LazyVWaterFlowLayout** is supported since API version 26.0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_DEFAULT = 0,
  /**
   * Displays 1 column when the component width falls within the sm and smaller breakpoint range, 2 columns within the
   * md breakpoint range, and 3 columns within the lg and larger breakpoint range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_SM1MD2LG3 = 1,
  /**
   * Displays 2 columns when the component width falls within the sm and smaller breakpoint range, 3 columns within
   * the md breakpoint range, and 5 columns within the lg and larger breakpoint range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_SM2MD3LG5 = 2
}

/**
 * Enumerates the crown actions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare enum CrownAction {
  /**
   * The crown starts rotating.
   *
   * **Note:** Supported from API version 18 and deprecated from API version 24.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 24
   */
  BEGIN = 0,

  /**
   * The crown is rotating.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  UPDATE = 1,

  /**
   * The crown stops rotating.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  END = 2
}

/**
 * Enumerates the sensitivity levels for crown rotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare enum CrownSensitivity {
  /**
   * Low sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LOW = 0,

  /**
   * Medium sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  MEDIUM = 1,

  /**
   * High sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  HIGH = 2
}

/**
 * Enumerates the modes for flipping pages using the mouse wheel.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare enum PageFlipMode {
  /**
   * Continuous page flipping mode where multiple pages are turned continuously when the user scrolls the mouse wheel
   * without interruption.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  CONTINUOUS = 0,

  /**
   * Single-page flipping mode where the mouse wheel event is ignored until the current page flipping animation is
   * complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  SINGLE = 1
}

/**
 * Enumerates the types of axis actions for axis events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 17 dynamic
 */
declare enum AxisAction {
  /**
   * No axis event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  NONE = 0,

  /**
   * The axis event begins.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  BEGIN = 1,

  /**
   * The axis event is in progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  UPDATE = 2,

  /**
   * The axis event ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  END = 3,

  /**
   * The axis event is canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  CANCEL = 4
}

/**
 * Enumerates the drawing levels of the focus box for a node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare enum FocusDrawLevel {
  /**
   * The focus box is drawn on the node's own layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  SELF = 0,

  /**
   * The focus box is drawn on the topmost layer of the current instance's z-order.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  TOP = 1
}

/**
 * Enumerates divider modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum DividerMode {
  /**
   * The divider floats above the menu without affecting the layout height. This is the default mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  FLOATING_ABOVE_MENU = 0,

  /**
   * The divider is embedded in the menu and affects the layout height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  EMBEDDED_IN_MENU = 1
}

/**
 * Enumerates interaction event types that can be queried.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum EventQueryType {
  /**
   * Click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  ON_CLICK = 0
}

/**
 * Enumerates anchor types of the tooltip.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum TipsAnchorType {
  /**
   * The tooltip follows the target component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TARGET,

  /**
   * The tooltip follows the cursor position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CURSOR
}

/**
 * Enumerates the display modes of the dialog box in the subwindow.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DialogDisplayMode {
  /**
   * The dialog box is displayed in the center of the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SCREEN_BASED = 0,
  /**
   * The dialog box is displayed in the center of the application window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_BASED = 1
}

/**
 * Enumerates color space types for specifying color rendering modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ColorSpace {
  /**
   * Standard RGB color space, suitable for most display devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SRGB = 0,

  /**
   * Display P3 color space with wider gamut, designed for high-end display devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DISPLAY_P3 = 1,

  /**
   * BT2020 color space, which has a wider color gamut and is suitable for high-end display devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BT2020 = 2
}

/**
 * Enumerates animatable property types for component animations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AnimationPropertyType {
  /**
   * Rotation angles for the x, y, and z axes. Parameters: 3. Unit: degrees (°).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ROTATION = 0,

  /**
   * Translation offsets for the x and y axes. Parameters: 2. Unit: px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TRANSLATION = 1,

  /**
   * Scale factors for the x and y axes. Parameters: 2. Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SCALE = 2,

  /**
   * Opacity value. Parameters: 1. Value range: [0, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  OPACITY = 3
}

/**
 * Sets the type of the input tool applicable to the touch target.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum ResponseRegionSupportedTool {
  /**
   * All input tool types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  ALL = 0,

  /**
   * Finger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  FINGER = 1,

  /**
   * Stylus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  PEN = 2,

  /**
   * Mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  MOUSE = 3
}

/**
 * Enumerates the axis types for axis events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare enum AxisType {
  /**
   * Vertical scroll axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  VERTICAL_AXIS = 0,

  /**
   * Horizontal scroll axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  HORIZONTAL_AXIS = 1,

  /**
   * Pinch axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  PINCH_AXIS = 2
}

/**
 * Enumerates input event subtype masks, used to identify different input event subtypes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum InputEventSubTypeMask {
  /**
   * Left mouse button pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_DOWN = 1 << 0,

  /**
   * Left mouse button released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_UP = 1 << 1,

  /**
   * Right mouse button pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_DOWN = 1 << 2,

  /**
   * Right mouse button released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_UP = 1 << 3,

  /**
   * Middle mouse button pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_DOWN = 1 << 4,

  /**
   * Middle mouse button released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_UP = 1 << 5,

  /**
   * Left mouse button pressed and dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_DRAGGING = 1 << 6,

  /**
   * Right mouse button pressed and dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_DRAGGING = 1 << 7,

  /**
   * Middle mouse button pressed and dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_DRAGGING = 1 << 8,

  /**
   * Touch press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH_DOWN = 1 << 9,

  /**
   * Touch release.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH_UP = 1 << 10,

  /**
   * Physical key pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEY_DOWN = 1 << 11,

  /**
   * Physical key released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEY_UP = 1 << 12
}

/**
 * Enumerates the input event interception actions, used to control whether input events continue to be delivered to the
 * UI framework, applicable to scenarios where input events need to be allowed or blocked based on business rules.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum InputEventInterceptAction {
  /**
   * The event is permitted to propagate to the UI framework.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CONTINUE = 0,

  /**
   * The event is blocked from propagating to the UI framework.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BLOCK = 1
}

/**
 * Defines whether the dispatched event is a competitive gesture. In the competitive scenario, only one of the original
 * node and target node of the gesture responds. In the non-competitive scenario, both the original node and target node
 * of the gesture can respond.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare enum CompetitionStrategy {
  /**
   * Indicates that the dispatched event is a non‑competitive gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  DEFAULT = 0,

  /**
   * Indicates that the dispatched event is a competitive gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  COMPETITION = 1
}

/**
 * Enumerates the intervention types for gesture and event collection, applicable to scenarios where gestures need to be
 * retained or discarded by priority during gesture and event collection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum GestureCollectIntervention {
  /**
   * Continues the normal gesture and event collection flow. No intervention is performed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CONTINUE = 0,

  /**
   * Discards all low-priority gestures and events to be collected. The gestures of the left sibling node and ancestor
   * nodes (parent nodes and above) are discarded. Only the gestures already collected on the current node and higher-
   * priority nodes are retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_LOWER = 1,

  /**
   * Discards all collected high-priority gestures and events. The gestures of the right sibling node and the current
   * node are discarded. Continues processing the collection flow for lower-priority gestures (left sibling and ancestor
   * nodes).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_HIGHER = 2,

  /**
   * Discards the gestures and events of the current node. The gestures and events of the current node are excluded from
   * the gesture tree. The gestures of the sibling nodes (left and right) and the ancestor nodes are still collected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_SELF = 3,

  /**
   * Discards the gestures and events to be collected from the left sibling node. The gestures and events of the current
   * node and the collected gestures and events of the right sibling node are retained. Continues processing the
   * collection flow for the parent and ancestor nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_LOWER_PRIORITY_SIBLINGS = 4
}

/**
 * Enumerates the raw input event types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum RawInputEventType {
  /**
   * Touch event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH = 0,

  /**
   * Mouse event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MOUSE = 1
}

/**
 * Enumerates the component animation modes under the UI material effect.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum UIMaterialAnimationMode {
  /**
   * When the material is enabled for the component, the animation effect is automatically enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  IMMERSIVE = 0,

  /**
   * Disable the animation effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 1
}

/**
 * Defines the edge light position.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum EdgeLightPosition {
  /**
   * Edge light effect in the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP_LEFT = 0,
  /**
   * Edge light effect is in the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP_RIGHT = 1,
  /**
   * Edge light effect is in the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM_LEFT = 2,
  /**
   * Edge light effect is in the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM_RIGHT = 3,
  /**
   * Edge light effect is on the top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP = 4,
  /**
   * Edge light effect is on the bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM = 5,
  /**
   * Edge light effect is on the left edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LEFT = 6,
  /**
   * Edge light effect is on the right edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  RIGHT = 7
}

/**
 * Enumerates the smart gesture response priorities of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum GestureShortcut {
  /**
   * Smart gesture response priority. This is the only value supported by the current smart gesture response
   * configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PRIMARY = 0
}

/**
 * Enumerates smart gesture action types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum SmartGestureAction {
  /**
   * No action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * Page forward, including downward and rightward swipes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PAGE_FORWARD = 1,

  /**
   * Scroll forward, including downward and rightward swipes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SCROLL_FORWARD = 2,

  /**
   * Select the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SELECT = 3,

  /**
   * Click the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLICK = 4,

  /**
   * Go back.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACK_PRESS = 5
}

/**
 * Enumerates the original operation intentions of smart gestures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum OperateIntention {
  /**
   * Tap gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TAP = 0,

  /**
   * Slide gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SLIDE_FORWARD = 1,

  /**
   * Wrist flip gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACK_PRESS = 2
}

/**
 * Enumerates the immersive strategies for the safe area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare enum ImmersiveStrategy {

  /**
   * Avoid the cutout area.
   *
   * > **NOTE**
   * >
   * > The priority of this strategy is lower than that of the avoid_cutout configuration item in module.json5.
   * > If avoid_cutout is configured in the metadata of module.json5, the effect of the avoid_cutout
   * > configuration item prevails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  AVOID_CUTOUT = 0,

  /**
   * Avoid the three-button navigation bar area on the phone.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  AVOID_FLOAT_NAV = 1
}
