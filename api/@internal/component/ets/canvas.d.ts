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
 * @file
 * @kit ArkUI
 */

/**
 * Defines a canvas object for drawing content on the **XComponent** component.
 *
 * @typedef { import('../api/@ohos.graphics.drawing').default.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawingCanvas = import('../api/@ohos.graphics.drawing').default.Canvas;

/**
 * Defines the fill pattern algorithm used to determine whether a point is inside or outside a path. The value type is a
 * union of the types listed in the table below.
 *
 * @unionmember { "evenodd" } The inside part of a shape is determined based on whether the counting result is an odd
 *     number or not. This rule determines whether a point is inside a shape by casting a ray from the point on the
 *     canvas in any direction and counting the number of intersections between the ray and the shape path. If the
 *     number of intersections is odd, the point is inside the shape.
 *     Otherwise, the point is outside the shape.
 * @unionmember { "nonzero" } The inside part of a shape is determined based on whether the counting result
 *     is zero or not. This rule determines whether a point is inside a shape by casting a ray from the
 *     point on the canvas in any direction and checking the intersections between the ray and the shape
 *     path. The initial count is **0**: assign a direction value to each segment of the path, add 1 each
 *     time the path crosses the ray from left to right, and subtract 1 each time it crosses the ray from
 *     right to left. If the final result is **0**, the point is outside the shape. Otherwise, the point
 *     is inside the shape.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasFillRule = "evenodd" | "nonzero";

/**
 * Specifies the attribute of drawing the end of each line segment.
 *
 * @unionmember { "butt" } The ends of the line are squared off, and the line does not extend beyond
 *     its two endpoints.
 * @unionmember { "round" } The line is extended at the endpoints by a half circle whose diameter is
 *     equal to the line width.
 * @unionmember { "square" } The line is extended at the endpoints by a rectangle whose width is equal
 *     to half the line width and height equal to the line width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasLineCap = "butt" | "round" | "square";

/**
 * Defines the type of join between two non-zero-length segments (lines, arcs, and curves). The value type is a union of
 * the types listed in the table below.
 *
 * @unionmember { "bevel" } The intersection is a triangle. The rectangular corner of each line
 *     is independent.
 * @unionmember { "miter" } The intersection has a miter corner by extending the outside edges
 *     of the lines until they meet. You can view the effect of this attribute in **miterLimit**.
 * @unionmember { "round" } The intersection is a sector, whose radius at the rounded corner is
 *     equal to the line width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasLineJoin = "bevel" | "miter" | "round";

/**
 * Defines the current text direction. The value type is a union of the types listed in the table below.
 *
 * @unionmember { "inherit" } Inherits the text direction set in the general attributes of the canvas
 *     component. If the **direction** attribute is not set on the canvas component, the system text
 *     direction is used.
 * @unionmember { "ltr" } The text direction is from left to right.
 * @unionmember { "rtl" } The text direction is from right to left.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasDirection = "inherit" | "ltr" | "rtl";

/**
 * Defines the type of text alignment. The value type is a union of the types listed in the table below.
 *
 * @unionmember { "center" } The text is center-aligned.
 * @unionmember { "end" } The text is aligned with the end bound (left alignment refers to the local
 *     from left to right, and right alignment refers to the local from right to left).
 * @unionmember { "left" } The text is left-aligned.
 * @unionmember { "right" } The text is right-aligned.
 * @unionmember { "start" } The text is aligned with the start bound (left alignment refers to the
 *     local from left to right, and right alignment refers to the local from right to left).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";

/**
 * Defines the text baseline type. The value type is a union of the types listed in the table below.
 *
 * @unionmember { "alphabetic" } The text baseline is the normal alphabetic baseline.
 * @unionmember { "bottom" } The text baseline is at the bottom of the text bounding box. Its difference
 *     from the ideographic baseline is that the ideographic baseline does not consider letters in the
 *     next line.
 * @unionmember { "hanging" } The text baseline is a hanging baseline over the text.
 * @unionmember { "ideographic" } The text baseline is the ideographic baseline. If a character exceeds
 *     the alphabetic baseline, the ideographic baseline is located at the bottom of the excessive
 *     character.
 * @unionmember { "middle" } The text baseline is in the middle of the text bounding box.
 * @unionmember { "top" } The text baseline is on the top of the text bounding box.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";

/**
 * Sets the image smoothness attribute.
 *
 * @unionmember { "high" } High quality.
 * @unionmember { "low" } Low quality.
 * @unionmember { "medium" } Medium quality.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type ImageSmoothingQuality = "high" | "low" | "medium";

/**
 * Import the frame node type object for Canvas.
 *
 * @typedef { import('../api/arkui/FrameNode').FrameNode } FrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare type FrameNode = import('../api/arkui/FrameNode').FrameNode;

/**
 * A gradient object that allows multiple color breakpoints to be set through the
 * **addColorStop** method, achieving smooth color transitions. It is suitable for canvas
 * filling and stroking scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasGradient {
  /**
   * Sets the gradient breakpoint value, including the offset and color. You can call
   * **addColorStop** multiple times to set multiple breakpoints. The breakpoints are
   * sorted by **offset** value in ascending order, and color interpolation is performed
   * between adjacent breakpoints during rendering.
   *
   * @param { number } offset - Proportion of the distance from the gradient breakpoint to
   *    the start point to the total length. The value range is [0, 1].<br>
   *    Setting **offset** < 0 or **offset** > 1 produces no gradient effect.<br>
   *    Abnormal values **undefined** and **null** are treated as invalid, and the gradient
   *    breakpoint is not added. NaN causes the **CanvasGradient** object to be abnormal and
   *    unable to generate gradient effects properly. Infinity causes the entire
   *    **CanvasGradient** to not take effect.
   * @param { string } color - Gradient color. The string type supports the following formats:
   *    **'rgb(255, 255, 255)'**, **'rgba(255, 255, 255, 1.0)'**, **'#RGB'**, **'#ARGB'**,
   *    **'#RRGGBB'**, and **'#AARRGGBB'**. For details, see the **string** type description
   *    in [ResourceColor]{@link ResourceColor}.<br>
   *    If the color is not set in the specified format, no gradient effect is produced. When
   *    **null** or **undefined** is set, it is treated as invalid and the breakpoint is not
   *    added.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  addColorStop(offset: number, color: string): void;

  /**
   * Sets the gradient breakpoint value, including the offset and color. Colors in RGB or
   * ARGB format are supported. P3 wide color gamut color values can be set by passing in
   * the [ColorMetrics]{@link ColorMetrics} type. Since API version 26.0.0, BT2020 wide
   * color gamut and HDR brightening are also supported.
   *
   * > **NOTE**
   * >
   * > Only the [fillStyle]{@link CanvasRenderingContext2D#fillStyle} and
   * > [strokeStyle]{@link CanvasRenderingContext2D#strokeStyle} attributes of the
   * > [CanvasRenderingContext2D]{@link CanvasRenderingContext2D} object support setting a
   * > wide color gamut **CanvasGradient** object. When using HDR colors, you must set the
   * > color gamut mode of the window where the **Canvas** component is located to the wide
   * > gamut mode **WIDE_GAMUT** through the
   * > [setWindowColorSpace]{@link Window#setWindowColorSpace} method. If the preceding
   * > conditions are not met, the wide color gamut color settings will not take effect.
   *
   * @param { number } offset - Proportion of the distance from the gradient breakpoint to
   *     the start point to the total length. The value range is [0, 1].<br>
   *     Setting **offset** < 0 or **offset** > 1 produces no gradient effect.<br>
   *     Abnormal values **undefined** and **null** are treated as invalid, and the gradient
   *     breakpoint is not added. NaN causes the **CanvasGradient** object to be abnormal and
   *     unable to generate gradient effects properly. Infinity causes the entire
   *     **CanvasGradient** to not take effect.
   * @param { string | ColorMetrics } color - Color of the gradient. The string type supports
   *     the following formats: **'rgb(255, 255, 255)'**, **'rgba(255, 255, 255, 1.0)'**,
   *     **'#RGB'**, **'#ARGB'**, **'#RRGGBB'**, and **'#AARRGGBB'**.<br>
   *     You can use the [colorWithSpace]{@link ColorMetrics#colorWithSpace} method to
   *     construct a color with a specified color space attribute. The **ColorMetrics** type
   *     can construct a color with the specified color space attribute
   *     [ColorSpace]{@link ColorSpace} set to **sRGB** or **DISPLAY_P3**. Since API version
   *     26.0.0, constructing a color in the BT2020 color space is supported, along with HDR
   *     brightening. All gradient breakpoints in the same **CanvasGradient** object must use
   *     the same color space attribute. If different color spaces are set, an exception is
   *     thrown with error code 103701, the breakpoint is not added, and the
   *     **CanvasGradient** object retains its previous state.<br>
   *     No gradient effect is produced when the color is not set in the required format.
   *     **null** and **undefined** are treated as invalid, and the breakpoint is not added.
   * @throws { BusinessError } 103701 - The color's ColorSpace is not the same as the last color's.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  addColorStop(offset: number, color: string | ColorMetrics): void;
}

/**
 * Path object, which provides basic methods for drawing paths. For details about the path-related APIs,
 * see the description in **CanvasRenderingContext2D**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasPath {
  /**
   * Draws an arc on the canvas.
   *
   * @param { number } x - X coordinate of the center point of the arc.<br>In versions earlier than API
   *    version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *    **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *    **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *    APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y coordinate of the center point of the arc.<br>In versions earlier than API
   *    version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *    **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *    **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *    APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } radius - Radius of the arc circle. Value range: [0, +∞).<br>Before API
   *    version 18, when **NaN** or **Infinity** is set, the entire path is not displayed; when
   *    **null** or **undefined** is set, the current API does not take effect. Since API version 18,
   *    when **NaN**, **Infinity**, **null**, or **undefined** is set, the current API does not take
   *    effect, and other path methods with valid parameters are drawn normally.<br>Default unit: vp
   * @param { number } startAngle - Start radian of the arc.<br>In versions earlier than API version 18,
   *    **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *    value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *    **null**, or **undefined** values cause the current API to have no effect, and other path APIs with valid
   *    arguments continue to render correctly.<br>Default unit: radian
   * @param { number } endAngle - End radian of the arc.<br>In versions earlier than API version 18, **NaN**
   *    or **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *    causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *    **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *    continue to render correctly.<br>Default unit: radian
   * @param { boolean } [counterclockwise] - Whether to draw the arc counterclockwise.<br>**true**: Draw the
   *    arc counterclockwise.<br>**false**: Draw the arc clockwise.<br>The default value is **false**. If
   *    this parameter is set to **null** or **undefined**, the default value is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;

  /**
   * Creates an arc path based on the control points and arc radius. The control
   * points (x1, y1) and (x2, y2) are used to determine the tangent direction of the arc.
   *
   * @param { number } x1 - X coordinate of the first point on the arc.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y1 - Y coordinate of the first point on the arc.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } x2 - X coordinate of the second point on the arc.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y2 - Y coordinate of the second point on the arc.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } radius - Radius of the arc. Value range: [0, +∞).<br>Before API version
   *     18, when **NaN** or **Infinity** is set, the entire path is not displayed; when **null** or
   *     **undefined** is set, the current API does not take effect. Since API version 18, when **NaN**,
   *     **Infinity**, **null**, or **undefined** is set, the current API does not take effect, and
   *     other path methods with valid parameters are drawn normally.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Draws a cubic Bezier curve on the canvas.
   *
   * @param { number } cp1x - X-coordinate of the first Bezier control point.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** values prevent the entire path from rendering,
   *     and **null** or **undefined** values cause the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     path APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } cp1y - Y-coordinate of the first Bezier control point.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** values prevent the entire path from rendering,
   *     and **null** or **undefined** values cause the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     path APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } cp2x - X-coordinate of the second Bezier control point.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** values prevent the entire path from rendering,
   *     and **null** or **undefined** values cause the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     path APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } cp2y - Y-coordinate of the second Bezier control point.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** values prevent the entire path from rendering,
   *     and **null** or **undefined** values cause the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     path APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } x - X coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

  /**
   * Moves the current point of the path back to the start point of the path, and draws a
   * straight line between the current point and the start point. If the shape has already been
   * closed or has only one point, this method does nothing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  closePath(): void;

  /**
   * Draws an ellipse path at the specified center point with the given x-axis radius,
   * y-axis radius, and rotation angle.
   *
   * @param { number } x - X coordinate of the ellipse center.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y coordinate of the ellipse center.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Default unit: vp
   * @param { number } radiusX - Radius length of the ellipse on the x-axis. Value
   *     range: [0, +∞).<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } radiusY - Radius length of the ellipse on the y-axis. Value
   *     range: [0, +∞).<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } rotation - Rotation angle of the ellipse.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Default unit: radian
   * @param { number } startAngle - Starting angle for drawing the ellipse.<br>In versions earlier
   *     than API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and
   *     **null** or **undefined** values cause the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     path APIs with valid parameters continue to render correctly.<br>Default unit: radian
   * @param { number } endAngle - Ending angle for drawing the ellipse.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path APIs
   *     with valid arguments continue to render correctly.<br>Default unit: radian
   * @param { boolean } [counterclockwise] - Whether to draw the ellipse counterclockwise.<br>**true**: Draw
   *     the ellipse counterclockwise.<br>**false**: Draw the ellipse clockwise.<br>The default value is
   *     **false**. If this parameter is set to **null** or **undefined**, the default value is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;

  /**
   * Draws a straight line from the current point to the target point.
   *
   * @param { number } x - X-axis coordinate of the target point.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-axis coordinate of the target point.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineTo(x: number, y: number): void;

  /**
   * Moves the current coordinate point of the path to the target point, without
   * drawing a line during the movement.
   * > **NOTE**
   * >
   * > In versions earlier than API version 18, if the **moveTo** API is not executed or the **moveTo**
   * > API passes invalid parameters, the path starts with (0,0).
   * >
   * > In API version 18 and later, if the **moveTo** API is not executed or the **moveTo** API passes
   * > invalid parameters, the path starts from the start point of the **lineTo**, **arcTo**,
   * > **bezierCurveTo**, or **quadraticCurveTo** API that is called for the first time.
   *
   * @param { number } x - X-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  moveTo(x: number, y: number): void;

  /**
   * Creates a quadratic Bezier curve path.
   *
   * @param { number } cpx - X coordinate of the Bezier control point.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } cpy - Y coordinate of the Bezier control point.<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } x - X coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Creates a rectangle on the canvas.
   *
   * > **NOTE**
   * >
   * > To create a rounded rectangle path, use the [roundRect]{@link roundRect} method.
   *
   * @param { number } x - X coordinate of the upper left corner of the rectangle.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y coordinate of the upper left corner of the rectangle.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** values prevent the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other path
   *     APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } w - Width of the rectangle.<br>In versions earlier than API version 18, **NaN** or
   *     **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *     causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *     **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>In versions earlier than API version 18, **NaN** or
   *     **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *     causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *     **undefined** values cause the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * Creates a rounded rectangle path. This method does not directly render the
   * content. To draw a rounded rectangle on the canvas, use the fill or stroke method.
   *
   * @param { number } x - X coordinate of the top-left corner of the rectangle.<br>**null**
   *     is treated as **0**. **undefined** is treated as an invalid value, and no drawing is
   *     performed.<br>When **NaN** or **Infinity** is set, the current API does not take effect,
   *     and other path methods with valid parameters are drawn normally.<br>To draw a complete
   *     rectangle, the value range is [0, Canvas width).<br>Default unit: vp
   * @param { number } y - Y coordinate of the top-left corner of the rectangle.<br>**null**
   *     is treated as **0**. **undefined** is treated as an invalid value, and no drawing is
   *     performed.<br>When **NaN** or **Infinity** is set, the current API does not take effect,
   *     and other path methods with valid parameters are drawn normally.<br>To draw a complete
   *     rectangle, the value range is [0, Canvas height).<br>Default unit: vp
   * @param { number } w - Width of the rectangle. A negative value draws to the left.<br>**null**
   *     is treated as **0**. **undefined** is treated as an invalid value, and no drawing is
   *     performed.<br>When **NaN** or **Infinity** is set, the current API does not take effect,
   *     and other path methods with valid parameters are drawn normally.<br>To draw a complete
   *     rectangle, the value range is [-x, Canvas width - x].<br>Default unit: vp
   * @param { number } h - Height of the rectangle. A negative value draws upward.<br>**null**
   *     is treated as **0**. **undefined** is treated as an invalid value, and no drawing is
   *     performed.<br>When **NaN** or **Infinity** is set, the current API does not take effect,
   *     and other path methods with valid parameters are drawn normally.<br>To draw a complete
   *     rectangle, the value range is [-y, Canvas height - y].<br>Default unit: vp
   * @param { number | Array<number> } [radii] - Number or list of arc radii used for the rectangle corners.
   *     <br>If the parameter type is number, it applies to the arc radius of all rectangle corners.
   *     <br>If the parameter type is Array<number>, the array contains 1 to 4 numbers, interpreted as
   *     follows:<br>[Arc radius of all rectangle corners]<br>[Arc radius of the top-left and bottom-right
   *     rectangle corners, and arc radius of the top-right and bottom-left rectangle corners]<br>[Arc radius
   *     of the top-left rectangle corner, arc radius of the top-right and bottom-left rectangle corners, and
   *     arc radius of the bottom-right rectangle corner]<br>[Arc radius of the top-left rectangle corner, arc
   *     radius of the top-right rectangle corner, arc radius of the bottom-right rectangle corner, and arc
   *     radius of the bottom-left rectangle corner]<br>If **radii** contains a negative number or the number
   *     of items in the list is not within [1,4], error code 103701 is reported.<br>Default value: **0**.
   *     **null** and **undefined** are treated as the default value.<br>If the arc radius exceeds the width
   *     and height of the rectangle, it will be proportionally scaled down to match the corresponding
   *     dimensions.<br>Default unit: vp
   * @throws { BusinessError } 103701 - Parameter error. Possible causes:
   * <br> 1. The param radii is a list that has zero or more than four elements.
   * <br> 2. The param radii contains negative value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  roundRect(x: number, y: number, w: number, h: number, radii?: number | Array<number>): void;
}

/**
 * A path object that supports path description and combination through its APIs, and can
 * be drawn through the **stroke** or **fill** API of **Canvas**. **Path2D** supports
 * path reuse, combination of multiple paths, and creation of paths based on SVG path
 * strings. It is suitable for scenarios where the same path needs to be drawn multiple
 * times, complex graphics need to be dynamically combined, or graphics need to be drawn
 * based on SVG path data.
 *
 * > **NOTE**
 * >
 * > The **Path2D** object does not support resetting an already set path. To create a
 * > new path, create an empty **Path2D** object.
 * >
 * > The methods of the **Path2D** object cannot take effect on paths set in the
 * > [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}
 * > and
 * > [OffscreenCanvasRenderingContext2D]{@link OffscreenCanvasRenderingContext2D}
 * > objects.
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class Path2D extends CanvasPath {
  /**
   * Adds a path to this path.
   *
   * @param { Path2D } path - Path object to be added to the current path.<br>
   *     The abnormal values **undefined** and **null** are treated as invalid values.
   * @param { Matrix2D } transform - Transformation matrix object for the added path,
   *     used to perform transformations such as translation, rotation, and scaling on
   *     the added path. Pass this parameter when graphic transformation is needed for
   *     the added path; it can be omitted when no transformation is required. If not
   *     passed, the default value is **null**, indicating that no transformation is
   *     applied to the path.<br>
   *     The abnormal values **undefined** and **null** are treated as invalid values.<br>
   *     Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  addPath(path: Path2D, transform?: Matrix2D): void;

  /**
   * Constructs an empty **Path2D** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Constructs an empty Path2D object. The unit mode of the Path2D object can be configured.
   *
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **Path2D** object. Once
   *     configured, it cannot be dynamically changed. The configuration method is the
   *     same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Abnormal values **NaN** and **Infinity** are processed as the default value.<br>
   *     Default value: **DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit: LengthMetricsUnit);

  /**
   * Constructs a Path2D object using a path object.
   *
   * @param { Path2D } path - Path object to be copied. The newly created **Path2D**
   *     object will contain the same path data as the original path. An empty path
   *     object is created when the value is **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(path: Path2D);

  /**
   * When a path object is used to construct a Path2D object, the unit mode of the Path2D
   * object can be configured.
   *
   * @param { Path2D } path - **Path2D** path object to be copied. Used to create a
   *     new **Path2D** object based on an existing path. The incoming path object is
   *     not modified, and the newly created object contains a complete copy of the
   *     path.
   * @param { LengthMetricsUnit } [unit] - Unit mode for configuring the **Path2D**
   *     object. It cannot be dynamically changed after configuration. The
   *     configuration method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Abnormal values **NaN** and **Infinity** are treated as the default value.<br>
   *     Default value: **DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(path: Path2D, unit: LengthMetricsUnit);

  /**
   * Constructs a Path2D object using a path string that complies with the SVG path
   * description specifications.
   *
   * @param { string } d - Path string that complies with the SVG path description
   *     specification. For the format, see [SVG Path Syntax]{@link path}.
   *     Abnormal values are treated as invalid values.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(d: string);

  /**
   * Constructs a Path2D object using a path string that complies with the SVG path
   * specifications. The unit mode of the Path2D object can be configured.
   *
   * @param { string } description - Path string that conforms to the SVG path
   *     description specification. For details about the format, see
   *     [SVG Path Syntax]{@link path}.
   *     Abnormal values are handled as invalid values.
   * @param { LengthMetricsUnit } [unit] - Unit mode for configuring the **Path2D**
   *     object. After configuration, it cannot be dynamically changed. The
   *     configuration method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Invalid values **NaN** and **Infinity** are handled as the default value.<br>
   *     Default value: **DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(description: string, unit: LengthMetricsUnit);
}

/**
 * **CanvasPattern** represents an object, created by the
 * [createPattern]{@link CanvasRenderingContext2D#createPattern}
 * API, describing an image filling pattern based on the image and repetition mode. It is suitable
 * for scenarios where pattern filling or background textures are needed on a canvas, simplifying
 * pattern filling implementation and improving drawing efficiency.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CanvasPattern {
  /**
   * Applies a matrix transformation to the current **CanvasPattern** using a **Matrix2D**
   * object as the parameter. This is suitable for scenarios where geometric transformations
   * such as translation, scaling, and rotation need to be applied to the pattern fill. If no
   * parameter is passed, no matrix transformation is applied to the **CanvasPattern**.
   *
   * @param { Matrix2D } transform - Transformation matrix used to perform geometric
   *     transformations such as translation, scaling, and rotation on the
   *     **CanvasPattern**.<br>Note: No matrix transformation is performed when the parameter
   *     is **undefined** or **null**.<br>Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * Size information of the text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextMetrics {
  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the top
   * of the bounding rectangle used to render the text. Read-only.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxAscent: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the bottom
   * of the bounding rectangle used to render the text. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxDescent: number;

  /**
   * Distance parallel to the baseline from the alignment point determined by the
   * [CanvasRenderingContext2D.textAlign](#canvastextalign) attribute to the left side
   * of the bounding rectangle of the text. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxLeft: number;

  /**
   * Distance parallel to the baseline from the alignment point determined by the
   * [CanvasRenderingContext2D.textAlign](#canvastextalign) attribute to the right side
   * of the bounding rectangle of the text. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxRight: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the alphabetic
   * baseline of the line box. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly alphabeticBaseline: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the top of the
   * em square in the line box. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly emHeightAscent: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the bottom of the
   * em square in the line box. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly emHeightDescent: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the top of the
   * bounding rectangle of all the fonts used to render the text. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly fontBoundingBoxAscent: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the bottom of the
   * bounding rectangle of all the fonts used to render the text. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly fontBoundingBoxDescent: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the hanging
   * baseline of the line box. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly hangingBaseline: number;

  /**
   * Distance from the horizontal line specified by the
   * [CanvasRenderingContext2D.textBaseline](#canvastextbaseline) attribute to the ideographic
   * baseline of the line box. Read-only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly ideographicBaseline: number;

  /**
   * Width of the text. Read-only.
   *
   * Default unit: vp.
   *
   * If the unit mode of the **CanvasRenderingContext2D** object is set to px, the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * Height of the text. Read-only.
   *
   * Default unit: vp.
   *
   * If the unit mode of the **CanvasRenderingContext2D** object is set to px, the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;
}

/**
 * An **ImageBitmap** object stores pixel data rendered on a canvas. Since API version 11,
 * when an application creates a
 * [worker thread](docroot://arkts-utils/worker-introduction.md), it can use **postMessage**
 * to transfer the **ImageBitmap** instance to the worker thread for drawing, and use
 * **onmessage** to receive the drawing results sent by the worker thread for display.
 *
 * > **NOTE**
 * >
 * > The **ImageBitmap** object only supports loading static images. To play animated
 * > images, use the [Image]{@link Image} component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ImageBitmap {
  /**
   * Height of the **ImageBitmap**.<br>Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * Width of the **ImageBitmap**.<br>Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * Releases all image resources associated with the **ImageBitmap** object and sets
   * its width and height to **0**.
   *
   * > **NOTE**
   * >
   * > - This method must be used together with the [constructor()]{@link ImageBitmap#constructor}
   * > method. After creating an **ImageBitmap** object, call **close()** to release
   * > resources when they are no longer needed. Failure to call **close()** may cause
   * > image resource leaks and affect app performance.
   * > - It is recommended to call this method after **Canvas** drawing is complete, for
   * > example, at the end of the
   * > [onReady]{@link CanvasAttribute#onReady(event: VoidCallback)}
   * > callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  close(): void;

  /**
   * Creates an **ImageBitmap** object using an image data source.
   *
   * > **NOTE**
   * >
   * > Call the **close()** method to release resources after use to avoid image
   * > resource leaks.
   *
   * @param { string } src - Image data source. Supports local images.<br>
   *     1. The string format is used to load local images, for example,
   *     **ImageBitmap("common/images/example.jpg")**. For modules of the "entry" and
   *     "feature" types, the starting point of the image loading path is the **ets**
   *     folder of the current module. For modules of the "har" and "shared" types, the
   *     starting point of the image loading path is the **ets** folder of the currently
   *     built "entry" or "feature" type module.<br>
   *     For modules of the "har" and "shared" types, it is recommended to use
   *     [ImageSource](docroot://media/image/image-decoding.md) to decode resource images
   *     into a unified **PixelMap** for loading.<br>
   *     2. Supported local image types: bmp, jpg, png, svg, and webp.<br>
   *     **NOTE**<br>
   *     - In ArkTS widgets, strings with network-related path prefixes such as
   *     **http://**, the **datashare://** path prefix, and the
   *     **file://data/storage** path prefix are not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(src: string);

  /**
   * Creates an **ImageBitmap** object using an image data source. This API supports
   * configuring the unit mode of the **ImageBitmap** object with **unit**.
   *
   * > **NOTE**
   * >
   * > Call the **close()** method to release resources after use to avoid image
   * > resource leaks.
   *
   * @param { string } src - Image data source, which supports local images.<br>
   *     1. The string format is used to load local images, for example,
   *     **ImageBitmap("common/images/example.jpg")**. For modules of the "entry" and
   *     "feature" types, the image loading path starts from the **ets** folder of the
   *     current module. For modules of the "har" and "shared" types, the image loading
   *     path starts from the **ets** folder of the currently built "entry" or "feature"
   *     type module.<br>
   *     For modules of the "har" and "shared" types, you are advised to use
   *     [ImageSource](docroot://media/image/image-decoding.md) to decode resource images
   *     into a unified **PixelMap** for loading.<br>
   *     2. Supported local image types: bmp, jpg, png, svg, and webp.<br>
   *     **NOTE**<br>
   *     - ArkTS widgets do not support strings with network-related path prefixes such
   *     as **http://**, the **datashare://** path prefix, or the
   *     **file://data/storage** path prefix.
   * @param { LengthMetricsUnit } [unit] - Unit mode for configuring the **ImageBitmap**
   *     object. The mode cannot be dynamically changed after configuration. The
   *     configuration method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Default value: **LengthMetricsUnit.DEFAULT**.<br>
   *     Abnormal values such as **undefined**, **NaN**, and **Infinity** are processed
   *     as the default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(src: string, unit: LengthMetricsUnit);

  /**
   * Creates an **ImageBitmap** object using a **PixelMap** object.
   *
   * > **NOTE**
   * >
   * > Call the **close()** method to release resources after use to avoid image
   * > resource leaks.
   *
   * @param { PixelMap } data - Image data source, set through a **PixelMap** object.
   *     Applicable to scenarios where images need to be decoded and processed before
   *     drawing, which can improve image loading performance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(data: PixelMap);

  /**
   * Creates an **ImageBitmap** object using a **PixelMap** object. This API supports
   * configuring the unit mode of the **ImageBitmap** object with **unit**.
   *
   * > **NOTE**
   * >
   * > Call the **close()** method to release resources after use to avoid image
   * > resource leaks.
   *
   * @param { PixelMap } data - Image data source, set through a **PixelMap** object.
   *     This is suitable for scenarios where images need to be decoded and processed
   *     before drawing, which can improve image loading performance.
   * @param { LengthMetricsUnit } [unit] - Unit mode for configuring the **ImageBitmap**
   *     object. Once configured, it cannot be changed dynamically. The configuration
   *     method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Default value: **LengthMetricsUnit.DEFAULT**.<br>
   *     Abnormal values such as **undefined**, **NaN**, and **Infinity** are processed
   *     as the default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(data: PixelMap, unit: LengthMetricsUnit);

  /**
   * Creates an **ImageBitmap** object using a **Resource** object. This API supports
   * configuring the unit mode of the **ImageBitmap** object with **unit**.
   *
   * > **NOTE**
   * >
   * > Call the **close()** method to release resources after use to avoid image
   * > resource leaks.
   *
   * @param { Resource } data - Image data source, set by referencing a **Resource**
   *     object. This is used to reference image resources in the app resource directory,
   *     for example, **$r('app.media.example')**, which avoids hardcoding paths.<br>
   *     Supported image types: bmp, jpg, png, svg, and webp.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **ImageBitmap** object.
   *     Once configured, it cannot be changed dynamically. The configuration method is
   *     the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     Default value: **LengthMetricsUnit.DEFAULT**.<br>
   *     Abnormal values **undefined**, **NaN**, and **Infinity** are processed as the
   *     default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(data: Resource, unit?: LengthMetricsUnit);
}

/**
 * The **ImageData** object stores pixel data rendered on a canvas, supporting reading,
 * modifying, and manipulating pixels. It is suitable for scenarios such as image
 * processing, pixel-level editing, and special effect filters. With **ImageData**, you
 * can precisely control each pixel of an image, implement custom image processing
 * algorithms, and provide flexible pixel-level data access for canvas drawing.
 *
 * > **NOTE**
 * >
 * > When creating an **ImageData** object, the width and height must not exceed
 * > 16384 px, and the area must not exceed 16000 px × 16000 px. If the area exceeds
 * > this limit, the object cannot be rendered properly. If the created area exceeds
 * > 536870911 square pixels, the width and height of the return value are both 0 px,
 * > and **data** is **undefined**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ImageData {
  /**
   * One-dimensional array that stores pixel data in RGBA format. Each pixel occupies
   * 4 bytes, in the order of R, G, B, and A, with data values ranging from 0 to 255.
   *
   * > **NOTE**
   * >
   * > The [px2vp]{@link UIContext#px2vp}
   * > API can be used for unit conversion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly data: Uint8ClampedArray;

  /**
   * Actual height of the rectangle.<br>The unit is px.
   *
   * > **NOTE**
   * >
   * > The [px2vp]{@link UIContext#px2vp}
   * > API can be used for unit conversion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * Actual width of the rectangle.<br>The unit is px.
   *
   * > **NOTE**
   * >
   * > The [px2vp]{@link UIContext#px2vp}
   * > API can be used for unit conversion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * Creates an **ImageData** object with the specified width, height, and pixel data.
   * If **data** is not defined, a one-dimensional array filled with zeros is used.
   * When creating the object, the width and height must not exceed 16384 px, and the
   * maximum area must not exceed 16000 px × 16000 px. If the area exceeds the maximum
   * limit, the object cannot be rendered properly. If the created area exceeds
   * 536870911 square pixels, the width and height of the return value are both 0 px,
   * and **data** is **undefined**.
   *
   * @param { number } width - Width of the rectangular area, in vp. The width and
   *     height must not exceed 16384 px, and the maximum area must not exceed
   *     16000 px × 16000 px. If the maximum area is exceeded, rendering will be
   *     abnormal. When the created area exceeds 536870911 square pixels, the width
   *     and height of the returned object are 0, and **data** is **undefined**.<br>
   *     Invalid values such as **NaN**, **Infinity**, negative numbers, and **0** are
   *     treated as **0**.
   * @param { number } height - Height of the rectangular area, in vp. The width and
   *     height must not exceed 16384 px, and the maximum area must not exceed
   *     16000 px × 16000 px. If the maximum area is exceeded, rendering will be
   *     abnormal. When the created area exceeds 536870911 square pixels, the width
   *     and height of the returned object are 0, and **data** is **undefined**.<br>
   *     Invalid values such as **NaN**, **Infinity**, negative numbers, and **0** are
   *     treated as **0**.
   * @param { Uint8ClampedArray } data - One-dimensional array that stores pixel data
   *     in RGBA format. Each pixel occupies 4 bytes, in the order of R, G, B, and A.
   *     Data values range from 0 to 255. The array length must be width × height × 4.
   *     Pass this parameter when custom pixel data for **ImageData** is needed, for
   *     example, when pixel-level processing or modification of an image is required.
   *     When the invalid value **undefined** is passed, **data** is **undefined**.<br>
   *     Default value: a one-dimensional array with all values set to 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number, data?: Uint8ClampedArray);

  /**
   * Creates an **ImageData** object with the specified width, height, and pixel data.
   * If **data** is not defined, a one-dimensional array filled with zeros is used. The
   * unit parameter can be used to configure the unit mode of the **ImageData** object.
   * When creating the object, the width and height must not exceed 16384 px, and the
   * maximum area must not exceed 16000 px × 16000 px. If the area exceeds the maximum
   * limit, the object cannot be rendered properly. If the created area exceeds
   * 536870911 square pixels, the width and height of the return value are both 0 px,
   * and **data** is **undefined**. Invalid values such as **NaN**, **Infinity**,
   * negative numbers, and **0** are treated as 0. When you need to use the vp unit
   * for responsive layout or to adapt to different screen densities, you can specify
   * the unit mode through the **unit** parameter.
   *
   * @param { number } width - Width of the rectangular area. The unit is determined by
   *     the unit parameter, and the default unit is vp. The width and height cannot
   *     exceed 16384 px, and the maximum area cannot exceed 16000 px × 16000 px. If
   *     the maximum area is exceeded, the content cannot be rendered properly. If
   *     the created area exceeds 536870911 square pixels, the width and height of
   *     the returned object are 0, and **data** is **undefined**.<br>
   *     Invalid values such as **NaN**, **Infinity**, negative numbers, and **0** are
   *     treated as 0.
   * @param { number } height - Height of the rectangular area. The unit is determined
   *     by the **unit** parameter, and the default unit is vp. The width and height
   *     cannot exceed 16384 px, and the maximum area cannot exceed
   *     16000 px × 16000 px. If the maximum area is exceeded, the content cannot be
   *     rendered properly. If the created area exceeds 536870911 square pixels, the
   *     width and height of the returned object are 0, and **data** is **undefined**.<br>
   *     Invalid values such as **NaN**, **Infinity**, negative numbers, and **0** are
   *     treated as **0**.
   * @param { Uint8ClampedArray } data - One-dimensional array that stores pixel data
   *     in RGBA format. Each pixel occupies 4 bytes, in the order of R, G, B, and A,
   *     with data values ranging from 0 to 255. Pass this parameter when custom pixel
   *     data of **ImageData** is required, for example, when pixel-level processing or
   *     modification of an image is needed.<br>
   *     If the invalid value **undefined** is passed, **data** is **undefined**.<br>
   *     Default value: a one-dimensional array with all values set to 0.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **ImageData** object.
   *     Once configured, it cannot be dynamically changed. The configuration method
   *     is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     Pass this parameter when the vp unit is needed for responsive layout or
   *     adaptation to different screen densities.<br>
   *     Invalid values such as **undefined**, **NaN**, and **Infinity** are processed
   *     as the default value.<br>
   *     Default value: **DEFAULT**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, data?: Uint8ClampedArray, unit?: LengthMetricsUnit);
}

/**
 * Configures the settings of a **CanvasRenderingContext2D** object, including whether to enable
 * anti-aliasing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class RenderingContextSettings {
  /**
   * Whether to enable anti-aliasing for the canvas.
   * <br>Abnormal values **undefined** or **null** are processed as the default value.
   * <br>**true**: anti-aliasing is enabled; **false**: anti-aliasing is disabled.
   * <br>Default value: **false**
   * <br>**NOTE**<br>
   * Anti-aliasing is enabled by default for text drawing. The **antialias** attribute of
   * **RenderingContextSettings** does not affect the anti-aliasing effect of text drawing. To
   * modify the text anti-aliasing effect, use the
   * [antialias<sup>24+</sup>]{@link RenderingContextSettings#antialias} API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  antialias?: boolean;

  /**
   * Creates a **RenderingContextSettings** object, with support for configuring anti-aliasing.
   *
   * @param { boolean } [antialias] - Whether to enable anti-aliasing for the canvas.
   *     <br>Abnormal values **undefined** or **null** are processed as the default value.
   *     <br>**true**: anti-aliasing is enabled; **false**: anti-aliasing is disabled.
   *     <br>Default value: **false**
   *     <br>**NOTE**<br>
   *     Anti-aliasing is enabled by default for text drawing. The **antialias** attribute of
   *     **RenderingContextSettings** does not affect the anti-aliasing effect of text drawing. To
   *     modify the text anti-aliasing effect, use the
   *     [antialias<sup>24+</sup>]{@link RenderingContextSettings#antialias} API.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(antialias?: boolean);
}

/**
 * Defines the specific configuration parameters for the rendering context.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface RenderingContextOptions {
  /**
   * Whether to enable anti-aliasing for the **RenderingContext**.
   * <br>The abnormal value **undefined** or **null** is processed as the default value.
   * <br>The value **true** indicates anti-aliasing enabled, and **false** indicates the opposite.
   * <br>Default value: **false**
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  antialias?: boolean;
}

/**
 * After the **CanvasRenderingContext2D** object is bound to the **Canvas** component, you can draw shapes,
 * texts, and images on the **Canvas** component.
 *
 * > **NOTE**
 * >
 * > * It is recommended that the **CanvasRenderingContext2D** object and the **Canvas** component be
 * > encapsulated into the same custom component, ensuring a one-to-one correspondence and consistent
 * > lifecycle between them.
 * >
 * > * When you call drawing APIs in this module, the commands are stored in the associated **Canvas**
 * > component's command queue. These commands are only executed when the current frame enters the rendering
 * > phase and the associated **Canvas** component is visible. Therefore, when the **Canvas** component is
 * > invisible (for example, off-screen or hidden), avoid frequent drawing calls to prevent command queue
 * > buildup and excessive memory usage.
 * >
 * > * When the width or height of the **Canvas** component exceeds 8000 px, rendering via the CPU causes
 * > significant performance degradation.
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasRenderer extends CanvasPath {
  /**
   * Specifies the spacing between letters when drawing text. This is a write-only
   * property. You can set its value through an assignment statement, but you cannot obtain
   * its current value through a read operation. If you attempt to read it, **undefined** is
   * returned.
   *
   * Spacing between letters when drawing text.
   *
   * When **LengthMetrics** is used:
   *
   * The letter spacing is set in the specified unit.
   *
   * **FP**, **PERCENT**, and **LPX** are not supported (treated as invalid values).
   *
   * Negative numbers and decimals are supported. When set to a decimal, the letter
   * spacing is not rounded.
   *
   * When string is used:
   *
   * Percentage values are not supported (treated as invalid values).
   *
   * Negative numbers and decimals are supported. When set to a decimal, the letter
   * spacing is not rounded.
   *
   * If the value assigned to **letterSpacing** does not specify a unit (for example,
   * letterSpacing='10') and **LengthMetricsUnit** is not specified, the default unit is
   * vp.
   *
   * If **LengthMetricsUnit** is specified as px, the default unit is px.
   *
   * When the value assigned to **letterSpacing** specifies a unit (for example,
   * letterSpacing='10vp'), the letter spacing is set in the specified unit.
   *
   * Default value: **0** (when an invalid value is input, the letter spacing is set to
   *   the default value)
   *
   * > **NOTE**
   * >
   * > **LengthMetrics** is recommended for better performance.
   *
   * @type { LengthMetrics | string }
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  letterSpacing: LengthMetrics | string;

  /**
   * Sets the transparency. This is a write-only property. You can set its value through an
   * assignment statement, but you cannot obtain its current value through a read operation.
   * If you attempt to read it, **undefined** is returned.
   *
   * The value range is [0.0, 1.0], where 0.0 means fully transparent and 1.0 means fully
   * opaque. If the given value is less than 0.0, the value 0.0 is used; if the given value
   * is greater than 1.0, the value 1.0 is used.
   *
   * Before API version 18, when **NaN** or **Infinity** is set, drawing methods executed
   * after this method cannot draw. Since API version 18, when **NaN** or **Infinity** is
   * set, the current API does not take effect, and other drawing methods with valid
   * parameters draw normally.
   *
   * Default value: 1.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalAlpha: number;

  /**
   * Sets the composite operation mode. This is a write-only property, which can be set
   * through an assignment statement but cannot be read; attempting to read it returns
   * **undefined**.
   *
   * Available values are as follows:
   *
   * | Name | Description |
   * | ------ | ------ |
   * | source-over | Displays the new drawing content over the existing drawing content. This is the default value. |
   * | source-atop | Displays the new drawing content on top of the existing drawing content. |
   * | source-in | Displays the new drawing content inside the existing drawing content. |
   * | source-out | Displays the new drawing content outside the existing drawing content. |
   * | destination-over | Displays the existing drawing content over the new drawing content. |
   * | destination-atop | Displays the existing drawing content on top of the new drawing content. |
   * | destination-in | Displays the existing drawing content inside the new drawing content. |
   * | destination-out | Displays the existing drawing content outside the new drawing content. |
   * | lighter | Displays both the new and existing drawing content. |
   * | copy | Displays the new drawing content and ignores the existing drawing content. |
   * | xor | Blends the new drawing content with the existing drawing content using an XOR operation. |
   *
   * Default value: 'source-over'
   *
   * @default source-over
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalCompositeOperation: string;

  /**
   * Draws an image.
   *
   * @param { ImageBitmap | PixelMap } image - Image resource. For details, see **ImageBitmap** or
   *     **PixelMap**.<br>**undefined** and **null** are treated as invalid values and no rendering will
   *     be performed.
   * @param { number } dx - X-coordinate of the upper left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-coordinate of the upper left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void;

  /**
   * Draws the image by stretching or compressing it.
   *
   * @param { ImageBitmap | PixelMap } image - Image resource. For details, see **ImageBitmap** or
   *     **PixelMap**.<br>**undefined** and **null** are treated as invalid values and no rendering will
   *     be performed.
   * @param { number } dx - X-axis position of the upper left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-axis position of the upper left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dw - Width of the drawing area. If the width of the drawing area is different from
   *     that of the cropped image, the latter will be stretched or compressed to the former.<br>Negative
   *     values, **undefined**, and **null** are treated as **0**. **NaN** and **Infinity** are treated as
   *     invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dh - Height of the drawing area. If the height of the drawing area is different from
   *     that of the cropped image, the latter will be stretched or compressed to the former.<br>Negative
   *     values, **undefined**, and **null** are treated as **0**. **NaN** and **Infinity** are treated as
   *     invalid and no rendering will be performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number, dw: number, dh: number): void;

  /**
   * Draws the image after cropping, stretching, or compressing it.
   *
   * @param { ImageBitmap | PixelMap } image - Image resource. For details, see **ImageBitmap** or
   *     **PixelMap**.<br>**undefined** and **null** are treated as invalid values and no rendering will
   *     be performed.
   * @param { number } sx - X-coordinate of the top-left corner of the rectangle used to crop the source
   *     image.<br>Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity**
   *     are treated as invalid and no rendering will be performed.<br>If the type of **image** is
   *     **ImageBitmap**, the default unit is vp.<br>If the type of **image** is **PixelMap**, the default
   *     unit is px in versions earlier than API version 18 and vp in API version 18 and later.
   * @param { number } sy - Y-coordinate of the top-left corner of the rectangle used to crop the source
   *     image.<br>Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity**
   *     are treated as invalid and no rendering will be performed.<br>If the type of **image** is
   *     **ImageBitmap**, the default unit is vp.<br>If the type of **image** is **PixelMap**, the default
   *     unit is px in versions earlier than API version 18 and vp in API version 18 and later.
   * @param { number } sw - Target width to crop the source image.<br>Negative values, **undefined**, and
   *     **null** are treated as **0**. **NaN** and **Infinity** are treated as invalid and no rendering
   *     will be performed.<br>If the type of **image** is **ImageBitmap**, the default unit is vp.<br>If
   *     the type of **image** is **PixelMap**, the default unit is px in versions earlier than API version
   *     18 and vp in API version 18 and later.
   * @param { number } sh - Target height to crop the source image.<br>Negative values, **undefined**, and
   *     **null** are treated as **0**. **NaN** and **Infinity** are treated as invalid and no rendering
   *     will be performed.<br>If the type of **image** is **ImageBitmap**, the default unit is vp.<br>If
   *     the type of **image** is **PixelMap**, the default unit is px in versions earlier than API version
   *     18 and vp in API version 18 and later.
   * @param { number } dx - X-coordinate of the upper-left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-coordinate of the upper-left corner of the drawing area.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dw - Width of the drawing area.<br>Negative values, **undefined**, and **null**
   *     are treated as **0**. **NaN** and **Infinity** are treated as invalid and no rendering will be
   *     performed. If the width of the drawing area is different from that of the cropped image, the
   *     latter will be stretched or compressed to the former.<br>Default unit: vp
   * @param { number } dh - Height of the drawing area.<br>Negative values, **undefined**, and **null**
   *     are treated as **0**. **NaN** and **Infinity** are treated as invalid and no rendering will be
   *     performed. If the height of the drawing area is different from that of the cropped image, the
   *     latter will be stretched or compressed to the former.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(
    image: ImageBitmap | PixelMap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;

  /**
   * Creates a new drawing path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  beginPath(): void;

  /**
   * Sets the current path as the clipping path.
   *
   * @param { CanvasFillRule } fillRule - Rule by which to determine whether a point is inside or outside
   *     the area to clip.<br>The options are **"nonzero"** and **"evenodd"**.<br>Invalid values
   *     **undefined** and **null** are treated as the default value.<br>Default value: **"nonzero"**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clip(fillRule?: CanvasFillRule): void;

  /**
   * Sets the specified path as the clipping path.
   *
   * @param { Path2D } path - **Path2D** path to clip.<br>**undefined** and **null** are treated as
   *     invalid values.
   * @param { CanvasFillRule } fillRule - Rule by which to determine whether a point is inside or outside
   *     the area to clip.<br>The options are **"nonzero"** and **"evenodd"**.<br>Invalid values
   *     **undefined** and **null** are treated as the default value.<br>Default value: **"nonzero"**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clip(path: Path2D, fillRule?: CanvasFillRule): void;

  /**
   * Fills the current path.
   *
   * @param { CanvasFillRule } fillRule - Rule by which to determine whether a point is inside or outside
   *     the area to fill.<br>The options are **"nonzero"** and **"evenodd"**.<br>Invalid values
   *     **undefined** and **null** are treated as the default value.<br>Default value: **"nonzero"**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fill(fillRule?: CanvasFillRule): void;

  /**
   * Fills the specified path.
   *
   * @param { Path2D } path - **Path2D** path to fill.<br>**undefined** and **null** are treated as
   *     invalid values.
   * @param { CanvasFillRule } fillRule - Rule by which to determine whether a point is inside or outside
   *     the area to fill.<br>The options are **"nonzero"** and **"evenodd"**.<br>Invalid values
   *     **undefined** and **null** are treated as the default value.<br>Default value: **"nonzero"**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fill(path: Path2D, fillRule?: CanvasFillRule): void;

  /**
   * Performs a stroke operation based on the current path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stroke(): void;

  /**
   * Performs stroke drawing based on the specified path.
   *
   * @param { Path2D } path - Path2D to draw.<br>If an invalid value (**undefined** or **null**) is
   *     passed, no drawing will be performed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stroke(path: Path2D): void;

  /**
   * Specifies the fill color for drawing. This is a write-only property. You can set its value
   * through an assignment statement, but you cannot obtain its current value through a read
   * operation. If you attempt to read it, **undefined** is returned.
   *
   * - When the type is string, this property sets the color of the fill area. For details about
   *   the color format, see the string type description in
   *   [ResourceColor]{@link ResourceColor}.
   *
   * - When the type is number, this property sets the color of the fill area. Fully transparent
   *   colors are not supported. For details about the color format, see the number type
   *   description in [ResourceColor]{@link ResourceColor}.
   *
   * - When the type is CanvasGradient, this property specifies a gradient object created using
   *   the [createLinearGradient](#createlineargradient) method.
   *
   * - When the type is CanvasPattern, this property specifies a pattern object created using
   *   the [createPattern](#createpattern) method.
   *
   *   Default value: '#000000' (black)
   *
   *   Invalid values are ignored.
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * @default #000000 (black)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillStyle: string | number | CanvasGradient | CanvasPattern;

  /**
   * Sets the color of the stroke. This is a write-only property. Its value can be set through
   * an assignment statement, but the current value cannot be obtained through a read operation.
   * If a read is attempted, **undefined** is returned.
   *
   * - When the type is string, it indicates the color used for the stroke. For details about
   *   the color format, see the string type description in
   *   [ResourceColor]{@link ResourceColor}.
   *
   * - When the type is number, it indicates the color used for the stroke. Fully transparent
   *   colors are not supported. For details about the color format, see the number type
   *   description in [ResourceColor]{@link ResourceColor}.
   *
   * - When the type is CanvasGradient, it indicates a gradient object created using the
   *   [createLinearGradient](#createlineargradient) method.
   *
   * - When the type is CanvasPattern, it indicates a pattern object created using the
   *   [createPattern](#createpattern) method.
   *
   *   Default value: '#000000' (black)
   *
   *   Invalid values are ignored.
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * @default #000000 (black)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeStyle: string | number | CanvasGradient | CanvasPattern;

  /**
   * Creates a linear gradient.
   *
   * @param { number } x0 - X-coordinate of the start point.<br>If the value is **undefined** or **null**,
   *     this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.<br>
   *     Default unit: vp
   * @param { number } y0 - Y-coordinate of the start point.<br>If the value is **undefined** or **null**,
   *     this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.<br>
   *     Default unit: vp
   * @param { number } x1 - X-coordinate of the end point.<br>If the value is **undefined** or **null**,
   *     this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.<br>
   *     Default unit: vp
   * @param { number } y1 - Y-coordinate of the end point.<br>If the value is **undefined** or **null**,
   *     this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.<br>
   *     Default unit: vp
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient effect on the
   *     offscreen canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

  /**
   * Creates a pattern for image filling based on a specified image and repetition mode.
   *
   * @param { ImageBitmap } image - Image source object. For details, see **ImageBitmap**.<br>An
   *     invalid value, such as **undefined** or **null**, is processed as an invalid value.
   * @param { string | null } repetition - Image repetition mode:<br>**'repeat'**: repeats the image
   *     along both the x-axis and y-axis;<br>**'repeat-x'**: repeats the image along the x-axis;<br>
   *     **'repeat-y'**: repeats the image along the y-axis;<br>**'no-repeat'**: does not repeat the
   *     image;<br>**'clamp'**: uses the edge color for the part that exceeds the original boundary
   *     when drawing outside it;<br>**'mirror'**: repeats and flips the image along both the x-axis
   *     and y-axis.<br>An invalid value, such as **undefined** or **null**, is processed as an invalid
   *     value.
   * @returns { CanvasPattern | null } Pattern object created by specifying an image and repetition
   *     mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;

  /**
   * Creates a radial gradient color.
   *
   * @param { number } x0 - X-coordinate of the center of the start circle.<br>If the value is **undefined**
   *     or **null**, this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.
   *     <br>Default unit: vp
   * @param { number } y0 - Y-coordinate of the center of the start circle.<br>If the value is **undefined**
   *     or **null**, this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.
   *     <br>Default unit: vp
   * @param { number } r0 - Radius of the start circle, which must be a non-negative finite number.<br>
   *     If the value is **undefined** or **null**, this API returns **undefined**. **NaN** and **Infinity**
   *     are treated as invalid values.<br>Default unit: vp
   * @param { number } x1 - X-coordinate of the center of the end circle.<br>If the value is **undefined**
   *     or **null**, this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.
   *     <br>Default unit: vp
   * @param { number } y1 - Y-coordinate of the center of the end circle.<br>If the value is **undefined**
   *     or **null**, this API returns **undefined**. **NaN** and **Infinity** are treated as invalid values.
   *     <br>Default unit: vp
   * @param { number } r1 - Radius of the end circle, which must be a non-negative finite number.<br>
   *     If the value is **undefined** or **null**, this API returns **undefined**. **NaN** and **Infinity**
   *     are treated as invalid values.<br>Default unit: vp
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient effect on the
   *     offscreen canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

  /**
   * Creates a conic gradient.
   *
   * @param { number } startAngle - Start angle of the gradient. The angle measurement starts from
   *     the right side of the center horizontally and moves clockwise.<br>Abnormal values **undefined**
   *     and **null** are processed as **0**, and **NaN** and **Infinity** are processed as invalid values.
   *     <br>Unit: radian
   * @param { number } x - X-coordinate of the center of the conic gradient.<br>Abnormal values
   *     **undefined** and **null** are processed as **0**, and **NaN** and **Infinity** are processed as
   *     invalid values.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the center of the conic gradient.<br>Abnormal values
   *     **undefined** and **null** are processed as **0**, and **NaN** and **Infinity** are processed as
   *     invalid values.<br>Default unit: vp
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient effect on the
   *     offscreen canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  createConicGradient(
    startAngle: number,
    x: number,
    y: number
  ): CanvasGradient;

  /**
   * Sets image filters. Any number of filters can be combined. This is a write-only
   * property. You can set its value through an assignment statement, but you cannot obtain
   * its current value through a read operation. If you attempt to read it, **undefined**
   * will be returned.
   *
   * Available values are as follows:
   *
   * - **'none'**: No filter effect.
   * - **'blur(`<length>`)'**: Applies Gaussian blur to the image. The value range is
   *   >= 0. Supported units: px, vp, rem. Default value: **blur(0px)**.
   * - **'brightness([`<number>`\|`<percentage>`])'**: Applies a linear multiplier to the
   *   image, making it appear brighter or darker. Supports numeric and percentage
   *   parameters. The value range is >= 0. Default value: **brightness(1)**.
   * - **'contrast([`<number>`\|`<percentage>`])'**: Adjusts the contrast of the image. Supports
   *   numeric and percentage parameters. The value range is >= 0. Default value:
   *   **contrast(1)**.
   * - **'grayscale([`<number>`\|`<percentage>`])'**: Converts the image to grayscale. Supports
   *   numeric and percentage parameters. The value range is [0, 1]. Default value:
   *   **grayscale(0)**.
   * - **'hue-rotate(`<angle>`)'**: Applies hue rotation to the image. The value range is
   *   0deg-360deg. Default value: **hue-rotate(0deg)**.
   * - **'invert([`<number>`\|`<percentage>`])'**: Inverts the input image. Supports numeric and
   *   percentage parameters. The value range is [0, 1]. Default value: **invert(0)**.
   * - **'opacity([`<number>`\|`<percentage>`])'**: Adjusts the transparency of the image. Supports
   *   numeric and percentage parameters. The value range is [0, 1]. Default value:
   *   **opacity(1)**.
   * - **'saturate([`<number>`\|`<percentage>`])'**: Adjusts the saturation of the image. Supports
   *   numeric and percentage parameters. The value range is >= 0. Default value:
   *   **saturate(1)**.
   * - **'sepia([`<number>`\|`<percentage>`])'**: Converts the image to sepia. Supports numeric and
   *   percentage parameters. The value range is [0, 1]. Default value: **sepia(0)**.
   *
   * @type { string }
   * @default none
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  filter: string;

  /**
   * Creates a new **ImageData** object with the specified width and height based on the current
   * **ImageData** object. For details, see **ImageData**. This API involves memory copy and is
   * time-consuming. Avoid frequent use. The example for **createImageData** is the same as that for
   * **putImageData**.
   *
   * @param { number } sw - Width of the **ImageData**.<br>The abnormal values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the **ImageData**.<br>The abnormal values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @returns { ImageData } New **ImageData** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createImageData(sw: number, sh: number): ImageData;

  /**
   * Creates a new **ImageData** object based on an existing **ImageData** object (without copying
   * the image data). See **ImageData**. This API involves memory copy and is time-consuming. Avoid
   * frequent use. For the **createImageData** example, see **putImageData**.
   *
   * @param { ImageData } imageData - **ImageData** object to be copied.<br>The abnormal values
   *     **undefined** and **null** are processed as an **ImageData** object with width and height
   *     being **0**.
   * @returns { ImageData } New **ImageData** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createImageData(imageData: ImageData): ImageData;

  /**
   * Creates an **ImageData** object from the pixels in the specified area of the current canvas. This
   * API involves memory copy and is time-consuming. Avoid frequent use.
   *
   * @param { number } sx - X coordinate of the upper left corner of the output area.<br>Abnormal values
   *     **undefined**, **null**, **NaN**, and **Infinity** are processed as **0**.<br>Default unit: vp
   * @param { number } sy - Y coordinate of the upper left corner of the output area.<br>Abnormal values
   *     **undefined**, **null**, **NaN**, and **Infinity** are processed as **0**.<br>Default unit: vp
   * @param { number } sw - Width of the area to output.<br>Abnormal values **undefined**, **null**, **NaN**,
   *     and **Infinity** are processed as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the area to output.<br>Abnormal values **undefined**, **null**, **NaN**,
   *     and **Infinity** are processed as **0**.<br>Default unit: vp
   * @returns { ImageData } New **ImageData** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

  /**
   * Creates a **PixelMap** object from the pixels in the specified area of the current canvas. This
   * API involves memory copy and is time-consuming. Avoid frequent use.
   *
   * @param { number } sx - X coordinate of the upper left corner of the area to output.<br>
   *     The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sy - Y coordinate of the upper left corner of the area to output.<br>
   *     The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sw - Width of the area to output.<br>The abnormal values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the area to output.<br>Invalid values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @returns { PixelMap } New **PixelMap** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap;

  /**
   * Fills a new rectangular area with **ImageData** data.
   *
   * @param { ImageData } imageData - **ImageData** object that contains pixel values.<br>
   *     **undefined** and **null** are treated as invalid values and no drawing is performed.
   * @param { number | string } dx - Offset of the fill area on the x-axis.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dy - Offset of the fill area on the y-axis.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  putImageData(imageData: ImageData, dx: number | string, dy: number | string): void;

  /**
   * Uses **ImageData** data to clip and fill a new rectangular area.
   *
   * @param { ImageData } imageData - **ImageData** object that contains pixel values.<br>
   *     **undefined** and **null** are treated as invalid values and no drawing is performed.
   * @param { number | string } dx - Offset of the fill area on the x-axis.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dy - Offset of the fill area on the y-axis.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dirtyX - X-axis offset from the upper-left corner of the source
   *     image to the upper-left corner of the rectangular clipping region of the source image
   *     data.<br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as
   *     **0**.<br>Default unit: vp
   * @param { number | string } dirtyY - Y-axis offset from the upper-left corner of the source
   *     image to the upper-left corner of the rectangular clipping region of the source image
   *     data.<br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as
   *     **0**.<br>Default unit: vp
   * @param { number | string } dirtyWidth - Width of the rectangular clipping region of the source image data.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dirtyHeight - Height of the rectangular clipping region of the source image data.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  putImageData(
    imageData: ImageData,
    dx: number | string,
    dy: number | string,
    dirtyX: number | string,
    dirtyY: number | string,
    dirtyWidth: number | string,
    dirtyHeight: number | string
  ): void;

  /**
   * Sets whether to perform image smoothing adjustment when drawing images. The value
   * **true** enables it, and **false** disables it. This is a write-only property. Its
   * value can be set through an assignment statement, but cannot be obtained through a
   * read operation. If a read is attempted, **undefined** is returned.
   *
   * Whether to perform image smoothing adjustment when drawing images.
   *
   * Default value: **true**
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageSmoothingEnabled: boolean;

  /**
   * When **imageSmoothingEnabled** is set to true, this property is used to set the image
   * smoothness. This is a write-only property. You can set its value through an assignment
   * statement, but you cannot obtain its current value through a read operation. If you
   * attempt to read it, **undefined** will be returned.
   *
   * Image smoothness.
   *
   * Default value: "low"
   *
   * @default low
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageSmoothingQuality: ImageSmoothingQuality;

  /**
   * Specifies the style of the line endpoint. This is a write-only property. You can set
   * its value through an assignment statement, but you cannot obtain its current value
   * through a read operation. If you attempt to read it, **undefined** is returned.
   *
   * Style of the line endpoint.
   *
   * Default value: 'butt'
   *
   * @default butt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineCap: CanvasLineCap;

  /**
   * Sets the dash offset of the canvas, with float precision. This property takes effect
   * only when **setLineDash** is set. This is a write-only property. You can set its value
   * through an assignment statement, but you cannot obtain its current value through a read
   * operation. If you attempt to read it, **undefined** is returned.
   *
   * Default value: 0.0
   *
   * Unit: vp
   *
   * Abnormal values **NaN** and **Infinity** are handled as the default value.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineDashOffset: number;

  /**
   * Specifies the style of the intersection point where line segments meet. This attribute
   * is a write-only property, which can be set through an assignment statement but cannot be
   * read. Attempting to read it returns **undefined**. For details, see
   * {@link CanvasLineJoin}.
   * <br>Available values are as follows:
   * <br>- **'round'**: The shape used to join line segments is a sector, whose radius at the rounded
   * corner is equal to the line width.
   * <br>- **'bevel'**: The shape used to join line segments is a triangle. The rectangular corner
   * of each line is independent.
   * <br>- **'miter'**: The shape used to join line segments has a mitered corner by extending the
   * outside edges of the lines until they meet. You can view the effect of this attribute in
   * **miterLimit**.
   * <br>Default value: 'miter'
   *
   * @default miter
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineJoin: CanvasLineJoin;

  /**
   * Sets the width of drawn lines. This is a write-only property. You can set its value
   * through an assignment statement, but cannot obtain its current value through a read
   * operation. Attempting to read it will return **undefined**.
   *
   * Default value: 1 (px)
   *
   * Default unit: vp
   *
   * The value of **lineWidth** does not support 0 or negative numbers. **0**, negative
   * numbers, and **NaN** are processed as the default value. Infinity causes APIs related
   * to the **lineWidth** property to be unable to draw.
   *
   * @default 1(px)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineWidth: number;

  /**
   * Sets the miter limit, which specifies the distance between the inner corner and outer
   * corner at the intersection of lines. This property takes effect only when **lineJoin**
   * is set to **miter**. It is a write-only property. You can set its value through an
   * assignment statement, but you cannot obtain its current value through a read
   * operation. If you attempt to read it, **undefined** is returned.
   *
   * Default value: 10px
   *
   * Unit: px
   *
   * The value of **miterLimit** does not support 0 or negative numbers. **0**, negative
   * numbers, and **NaN** are processed as the default value. **Infinity** causes APIs
   * related to the **miterLimit** property to fail to draw.
   *
   * @default 10(px)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  miterLimit: number;

  /**
   * Obtains the dash line style of the current canvas.
   *
   * @returns { number[] } Array that describes how line segments alternate and the spacing length.<br>
   *     The abnormal values **undefined** and **null** are treated as invalid values.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getLineDash(): number[];

  /**
   * Sets the dash line style of the canvas.
   *
   * @param { number[] } segments - Array describing how line segments alternate and the length of
   *     the spacing between segments.<br>Anomalous values **undefined** or **null** are treated as
   *     invalid values.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setLineDash(segments: number[]): void;

  /**
   * Clears the drawn content in the specified area.
   *
   * @param { number } x - X coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } y - Y coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clearRect(x: number, y: number, w: number, h: number): void;

  /**
   * Fills a rectangle.
   *
   * @param { number } x - X coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } y - Y coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillRect(x: number, y: number, w: number, h: number): void;

  /**
   * Draws a rectangle with a border, without filling the interior.
   *
   * @param { number } x - X coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } y - Y coordinate of the upper left corner of the rectangle.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no drawing is performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeRect(x: number, y: number, w: number, h: number): void;

  /**
   * Sets the blur level for drawing shadows. This property is a write-only property. Its
   * value can be set through an assignment statement, but its current value cannot be
   * obtained through a read operation. If a read is attempted, **undefined** is returned.
   *
   * Blur level for drawing shadows. A larger value indicates a higher blur level. The
   * precision is float, and the value range is >= 0.
   *
   * Default value: 0.0
   *
   * Unit: px
   *
   * Negative values are not supported for **shadowBlur**. Negative values, **NaN**, and
   * **Infinity** are treated as the default value.
   *
   * @type { number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowBlur: number;

  /**
   * Sets the shadow color for drawing shadows. This is a write-only property. You can set
   * its value through an assignment statement, but you cannot obtain its current value
   * through a read operation. If you attempt to read it, **undefined** is returned.
   *
   * For details about the color format, see the description of the string type in
   * [ResourceColor]{@link ResourceColor}.
   *
   * Default value: transparent black
   *
   * @default transparent black
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowColor: string;

  /**
   * Sets the horizontal offset between the shadow and the original object when drawing a
   * shadow. This is a write-only property. You can set its value through an assignment
   * statement, but you cannot obtain its current value through a read operation. If you
   * attempt to read it, **undefined** is returned.
   *
   * Default value: 0.0
   *
   * Default unit: vp
   *
   * Abnormal values **NaN** and **Infinity** are processed as the default value.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowOffsetX: number;

  /**
   * Sets the vertical offset of the shadow from the original object during shadow drawing.
   * This is a write-only property. Its value can be set through an assignment statement,
   * but cannot be obtained through a read operation. If a read is attempted, **undefined**
   * is returned.
   *
   * Default value: 0.0
   *
   * Default unit: vp
   *
   * The abnormal values **NaN** and **Infinity** are handled as the default value.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowOffsetY: number;

  /**
   * Restores the saved drawing context.
   *
   * > **NOTE**
   * >
   * > When the number of calls to **restore()** does not exceed the number of calls to **save()**,
   * > this API pops the saved drawing state from the stack and restores the attributes, clipping
   * > path, and transformation matrix of the **CanvasRenderingContext2D** object.<br>
   * > If the number of calls to **restore()** exceeds the number of calls to **save()**, this API
   * > does nothing.<br>
   * > If there is no saved state, this API does nothing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  restore(): void;

  /**
   * Saves the current drawing context.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  save(): void;

  /**
   * Draws filled text.
   *
   * @param { string } text - Text to draw.<br>**undefined** and **null** are treated as invalid values
   *     and no rendering will be performed.
   * @param { number } x - X-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } [maxWidth] - Maximum width allowed for the text.<br>**null** is treated as an
   *     invalid value and no rendering will be performed. **undefined**, **NaN**, or **Infinity** is treated
   *     as the default value.<br>Default value: no width restriction<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * Returns a text measurement object, through which the width of the specified text can be obtained.
   *
   * @param { string } text - Text to measure.
   * @returns { TextMetrics } Text metrics.<br>If an invalid value (**undefined** or **null**) is
   *     passed in, the text is processed as "undefined" or "null".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  measureText(text: string): TextMetrics;

  /**
   * Draws stroked text.
   *
   * @param { string } text - Text to draw.<br>**undefined** and **null** are treated as invalid values
   *     and no rendering will be performed.
   * @param { number } x - X-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no drawing is performed.<br>
   *     Default unit: vp
   * @param { number } [maxWidth] - Maximum width of the text.<br>**null** is treated as an invalid value
   *     and no rendering will be performed. **undefined**, **NaN**, or **Infinity** is treated as the
   *     default value.<br>Default unit: vp<br>Default value: no width restriction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * Sets the text direction used for text drawing. This is a write-only property. You
   * can set its value through an assignment statement, but you cannot obtain its current
   * value through a read operation. If you attempt to read it, **undefined** is returned.
   *
   * For details, see {@link CanvasDirection}.
   *
   * Default value: "inherit"
   *
   * @default inherit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  direction: CanvasDirection;

  /**
   * Sets the font style for text drawing. This property is a write-only property. Its
   * value can be set through an assignment statement, but its current value cannot be
   * obtained through a read operation. Attempting to read it will return **undefined**.
   *
   * Syntax: ctx.font = 'font-style font-weight font-size font-family'
   *
   * - (Optional) **font-style**: specifies the font style. The following styles are
   *   supported: 'normal' and 'italic'.
   *
   * - (Optional) **font-weight**: specifies the font weight. The following types are
   *   supported: 'normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700,
   *   800, 900.
   *
   * - (Optional) **font-size**: specifies the font size and line height. The unit can be
   *   px or vp. A unit must be appended when used.
   *
   * - (Optional) **font-family**: specifies the font family. The following types are
   *   supported: 'sans-serif', 'serif', 'monospace'.
   *
   * Since API version 20, this API can be used to set a registered custom font (only
   * available in the main thread, not supported in worker threads; the DevEco Studio
   * previewer does not support displaying custom fonts). There are two ways to register a
   * custom font. One is through the ArkUI asynchronous API
   *
   * this.uiContext.getFont().[registerFont]{@link Font#registerFont}.
   * Drawing immediately after calling this API may cause the custom font to not take effect.
   *
   * The other is to directly call the font engine's
   * fontCollection.[loadFontSync](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#loadfontsync)
   * API to register the custom font with the font engine. When directly calling the font
   * engine API to register a custom font, the **fontCollection** instance must be
   * **text.FontCollection.getGlobalInstance()**, because the component loads fonts from this
   * instance by default. Using other instances may cause the custom font to not take effect.
   *
   * @default normal normal 14px sans-serif
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  font: string;

  /**
   * Sets the text alignment mode in text drawing. This is a write-only property. Its value
   * can be set through an assignment statement, but cannot be obtained through a read
   * operation. If a read is attempted, **undefined** is returned.
   *
   * In LTR layout mode, 'start' is the same as 'left'; in RTL layout mode, 'start' is the
   * same as 'right'.
   *
   * Default value: 'left'
   *
   * @default left
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textAlign: CanvasTextAlign;

  /**
   * Sets the baseline alignment mode in text drawing. This is a write-only property. You
   * can set its value through an assignment statement, but you cannot obtain its current
   * value through a read operation. If you attempt to read it, **undefined** will be
   * returned.
   *
   * Default value: 'alphabetic'
   *
   * @default alphabetic
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textBaseline: CanvasTextBaseline;

  /**
   * Obtains the transform matrix currently applied to the context.
   *
   * @returns { Matrix2D } The transformation matrix currently applied to the context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getTransform(): Matrix2D;

  /**
   * Resets the current matrix to the identity matrix.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  resetTransform(): void;

  /**
   * Rotates the current coordinate axes clockwise.
   *
   * @param { number } angle - Clockwise rotation angle. You can convert degrees to radians using the
   *    following formula: degree * Math.PI/180.<br>In versions earlier than API version 18, values
   *    **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *    rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *    version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *    effect, and other drawing APIs with valid parameters continue to render correctly.<br>Default unit: radian
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotate(angle: number): void;

  /**
   * Sets the scaling transformation property of the canvas. Subsequent drawing operations are scaled
   * according to the scaling ratio.
   *
   * @param { number } x - Horizontal scale factor.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API
   *     for rendering. Values **0**, **null**, **undefined**, and negative numbers cause the current
   *     API to have no effect. Since API version 18, **NaN**, **Infinity**, **0**, **null**,
   *     **undefined**, and negative numbers cause the current API to have no effect, and other drawing
   *     APIs with valid parameters continue to render correctly.
   * @param { number } y - Vertical scaling factor. Negative numbers are not supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure to
   *     call the drawing APIs following this API for rendering. Values **0**, **null**, **undefined**,
   *     and negative numbers cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **0**, **null**, **undefined**, and negative numbers cause the current API to
   *     have no effect, and other drawing APIs with valid parameters continue to render correctly.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(x: number, y: number): void;

  /**
   * The **setTransform** method uses the same parameters as the **transform()** method, but the
   * **setTransform()** method resets the existing transformation matrix and creates a new one.
   *
   * > **NOTE**
   * >
   * > The coordinates of each point in the graph after transformation can be calculated
   * > using the following formula:
   * >
   * > **x** and **y** represent coordinates before transformation, and **x'** and **y'**
   * > represent coordinates after transformation.
   * >
   * > - x' = `a * x + c * y + e`
   * >
   * > - y' = `b * x + d * y + f`
   *
   * @param { number } a - **scaleX**: horizontal scaling value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } b - **skewY**: vertical skewing value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } c - **skewX**: horizontal skewing value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } d - **scaleY**: vertical scaling value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** values cause the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } e - **translateX**: horizontal translation distance. A negative value is
   *     supported.<br>In versions earlier than API version 18, values **NaN** and **Infinity** cause
   *     the failure to call the drawing APIs following this API for rendering. Values **null** and
   *     **undefined** cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     drawing APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } f - **translateY**: vertical translation distance. A negative value is
   *     supported.<br>In versions earlier than API version 18, values **NaN** and **Infinity** cause
   *     the failure to call the drawing APIs following this API for rendering. Values **null** and
   *     **undefined** cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** values cause the current API to have no effect, and other
   *     drawing APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Resets the existing transform matrix and creates a new one with the **Matrix2D** object as a
   * template.
   *
   * @param { Matrix2D } [transform] - Transformation matrix.<br>Exception values **undefined** and
   *     **null** are treated as invalid values.<br>Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(transform?: Matrix2D): void;

  /**
   * Corresponds to a transformation matrix. When you want to transform a shape, simply set the
   * corresponding parameters of this transformation matrix, multiply the coordinates of each vertex of
   * the shape by this matrix, and you can obtain the new vertex coordinates. Matrix transformation
   * effects can be superimposed.
   *
   * > **NOTE**
   * >
   * > The coordinates of each point in the graph after transformation can be calculated
   * > using the following formula:
   * >
   * > **x** and **y** represent coordinates before transformation, and **x'** and **y'**
   * > represent coordinates after transformation.
   * >
   * > - x' = `a * x + c * y + e`
   * >
   * > - y' = `b * x + d * y + f`
   *
   * @param { number } a - Cell at row 1, column 1 of the transformation matrix. **scaleX**:
   *     horizontal scaling value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.
   * @param { number } b - Cell at row 2, column 1 of the transformation matrix. **skewY**:
   *     vertical skewing value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.
   * @param { number } c - Cell at row 1, column 2 of the transformation matrix. **skewX**:
   *     horizontal skewing value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.
   * @param { number } d - Cell at row 2, column 2 of the transformation matrix. **scaleY**:
   *     vertical scaling value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.
   * @param { number } e - Cell at row 1, column 3 of the transformation matrix. **translateX**:
   *     horizontal translation distance. A negative value is supported.<br>In versions earlier than API
   *     version 18, values **NaN** and **Infinity** cause the failure to call the drawing APIs following
   *     this API for rendering. Values **null** and **undefined** cause the current API to have no effect.
   *     Since API version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to
   *     have no effect, and other drawing APIs with valid parameters continue to render correctly.<br>
   *     Default unit: vp
   * @param { number } f - Cell at row 2, column 3 of the transformation matrix. **translateY**:
   *     vertical translation distance. A negative value is supported.<br>In versions earlier than API
   *     version 18, values **NaN** and **Infinity** cause the failure to call the drawing APIs following
   *     this API for rendering. Values **null** and **undefined** cause the current API to have no effect.
   *     Since API version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to
   *     have no effect, and other drawing APIs with valid parameters continue to render correctly.<br>
   *     Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Moves the origin of the current coordinate system.
   *
   * @param { number } x - Distance to translate on the x-axis.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @param { number } y - Distance to translate on the y-axis.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid parameters continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(x: number, y: number): void;

  /**
   * Draws the currently passed-in **PixelMap** object on the canvas. For the **setPixelMap** example,
   * see **getPixelMap**.
   *
   * @param { PixelMap } [value] - **PixelMap** object that contains pixel values.<br>Abnormal values
   *     **undefined** and **null** are treated as invalid values and will not be drawn.<br>
   *     Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setPixelMap(value?: PixelMap): void;

  /**
   * Displays the given **ImageBitmap** object.
   *
   * @param { ImageBitmap } bitmap - **ImageBitmap** object to be displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;

  /**
   * Creates a layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  saveLayer(): void;

  /**
   * Restores the image transform and clipping state to the state before **saveLayer**, and draws the
   * layer on the canvas. The example for **restoreLayer** is the same as that for **saveLayer**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreLayer(): void;

  /**
   * Resets the **CanvasRenderingContext2D** to its default state, clearing the back buffer, drawing
   * state stack, drawing path, and styles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reset(): void;

  /**
   * Sets whether to enable anti-aliasing when drawing graphics and text. Setting this API
   * overrides the anti-aliasing effect in
   * [RenderingContextSettings](#renderingcontextsettings). When not set through this API,
   * the default value is **undefined**, and the anti-aliasing effect is consistent with
   * that in [RenderingContextSettings](#renderingcontextsettings).
   *
   * Whether to enable anti-aliasing when drawing graphics and text.
   *
   * **true** indicates that anti-aliasing is enabled; **false** indicates that
   * anti-aliasing is not enabled.
   *
   * When the value is **undefined**, the anti-aliasing effect is consistent with that
   * in [RenderingContextSettings](#renderingcontextsettings).
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  antialias: boolean | undefined;
}

/**
 * **CanvasRenderingContext2D** is the 2D drawing context object of the **Canvas** component, used
 * for custom drawing on the **Canvas** component. It supports drawing shapes (rectangles, circles,
 * ellipses, paths, etc.), text, images, gradients, shadows, and many other drawing types, and is
 * suitable for scenarios such as data visualization, game development, image editing, and custom UI
 * drawing. With this object, developers can flexibly control the drawing process to achieve complex
 * 2D graphic effects.
 *
 * > **NOTE**
 * >
 * > * It is recommended that the **CanvasRenderingContext2D** object and the **Canvas** component be
 * > encapsulated into the same custom component, ensuring a one-to-one correspondence and consistent
 * > lifecycle between them.
 * >
 * > * When you call drawing APIs in this module, the commands are stored in the associated **Canvas**
 * > component's command queue. These commands are only executed when the current frame enters the
 * > rendering phase and the associated **Canvas** component is visible. Therefore, when the **Canvas**
 * > component is invisible (for example, off-screen or hidden), avoid frequent drawing calls to prevent
 * > command queue buildup and excessive memory usage. For best practices, see
 * > [Controlling Canvas Rendering Based on Component Visibility](docroot://ui/arkts-drawing-customization-on-canvas.md#controlling-canvas-rendering-based-on-component-visibility).
 * >
 * > * The following path-related APIs apply only to paths created within **CanvasRenderingContext2D**
 * > and do not affect paths defined in
 * > [OffscreenCanvasRenderingContext2D]{@link OffscreenCanvasRenderingContext2D}
 * > or [Path2D]{@link Path2D}:
 * > [beginPath](#beginpath), [moveTo](#moveto), [lineTo](#lineto), [closePath](#closepath),
 * > [bezierCurveTo](#beziercurveto), [quadraticCurveTo](#quadraticcurveto), [arc](#arc),
 * > [arcTo](#arcto), [ellipse](#ellipse), [rect](#rect), and [roundRect](#roundrect20).
 * >
 * > * When the width or height of the **Canvas** component exceeds 8000 px and CPU rendering is
 * > used, significant performance degradation may occur. In this case, it is recommended to use
 * > custom render nodes (RenderNode).
 * >
 * > * When the graphics transformation APIs (**rotate**, **scale**, **transform**, **setTransform**,
 * > **translate**) and the **getPixelMap** **toDataURL** APIs are executed in
 * > different frames, the content created by the latter does not have the graphics transformation
 * > effect.
 * >
 * > * The common canvas drawing methods and common canvas drawing attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasRenderingContext2D extends CanvasRenderer {
  /**
   * Component height.
   *
   * Default unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * Component width.
   *
   * Default unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * FrameNode instance of the **Canvas** component associated with **CanvasRenderingContext2D**.
   * It can be used to listen for the visibility status of the associated **Canvas** component.
   *
   * Default value: **null**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  readonly canvas: FrameNode;

  /**
   * Creates a data URL that contains a representation of an image. This API involves
   * time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { string } [type] - Used to specify the image format.
   *     <br>Available options: **"image/png"** (lossless compression, suitable for scenarios requiring
   *     precise pixels), **"image/jpeg"** (lossy compression, suitable for photo-like images),
   *     **"image/webp"** (efficient compression, suitable for network transmission scenarios).
   *     <br>If abnormal values **undefined** and **null** are passed in, the default value is used.
   *     <br>Default value: **image/png**
   * @param { any } [quality] - When the image format is set to **image/jpeg** or **image/webp**,
   *     specifies the image quality in the range from 0 to 1. 0-0.5 is suitable for fast transmission or
   *     low-bandwidth scenarios, 0.6-0.8 is suitable for common scenarios, and 0.9-1.0 is suitable for
   *     high-quality requirements. If the value is out of range, the default value 0.92 is used.
   *     <br>If abnormal values **undefined**, **null**, **NaN**, and **Infinity** are passed in, the
   *     default value is used.
   *     <br>Default value: **0.92**
   * @returns { string } Image URL.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  toDataURL(type?: string, quality?: any): string;

  /**
   * Configures and starts the AI analyzer. This API uses a promise to return the result.
   * Before use, set [enableAnalyzer]{@link enableAnalyzer}
   * to **true** to enable the image AI analyzer.<br>Because the image frame used for analysis is
   * the one captured when this API is called, pay attention to the invoking time of this API.<br>
   * Repeated calls to this method before completion trigger an error callback. For the sample code,
   * see the code for **stopImageAnalyzer**.
   *
   * > **NOTE**
   * >
   * > The image analysis type cannot be dynamically modified.
   * > When image changes are detected, the analysis result is automatically destroyed. You can
   * > call this API again to start analysis.
   * > This API depends on device capabilities. If it is called on an incompatible device, an
   * > error code is returned.
   *
   * @param { ImageAnalyzerConfig } config - Input parameter required for performing AI analysis,
   *     used to configure the type of AI analysis (such as subject recognition, text recognition, etc.).
   *     For details, see **ImageAnalyzerConfig**.<br>Abnormal values **undefined** or **null** are
   *     treated as invalid values.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 110001 - Image analysis feature is unsupported.
   * @throws { BusinessError } 110002 - Image analysis is currently being executed.
   * @throws { BusinessError } 110003 - Image analysis is stopped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;

  /**
   * Stops AI image analysis. The content displayed by the AI image analyzer will be destroyed.
   *
   * > **NOTE**
   * >
   * > If this API is called when the **startImageAnalyzer** API has not yet returned any result,
   * > an error is reported.
   * > This feature depends on device capabilities.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  stopImageAnalyzer(): void;

  /**
   * Constructs a canvas object, which supports configuration of parameters for the
   * **CanvasRenderingContext2D** object.
   *
   * @param { RenderingContextSettings } [settings] - Settings of the **CanvasRenderingContext2D**
   *      object. This parameter is passed when advanced configurations such as anti-aliasing need to be
   *      enabled. If not passed, the default configuration (anti-aliasing disabled) is used. For details,
   *      see [RenderingContextSettings](#renderingcontextsettings).
   *      <br>If abnormal values **undefined** and **null** are passed in, the default value of
   *      [RenderingContextSettings](#renderingcontextsettings) is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(settings?: RenderingContextSettings);

  /**
   * Creates a **CanvasRenderingContext2D** object, allowing for initial configuration of rendering
   * parameters and unit mode.
   *
   * @param { RenderingContextSettings } [settings] - Settings of the **CanvasRenderingContext2D**
   *      object. Pass this parameter when advanced configurations such as anti-aliasing need to be
   *      enabled. If not passed, the default configuration (anti-aliasing disabled) is used. For details,
   *      see [RenderingContextSettings](#renderingcontextsettings).
   *      <br>If abnormal values **undefined** and **null** are passed in, the default value of
   *      [RenderingContextSettings](#renderingcontextsettings) is used.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **CanvasRenderingContext2D** object.
   *      The configuration cannot be changed after being set. **DEFAULT**: default vp unit, suitable
   *      for most scenarios. **PX**: pixel unit, suitable for scenarios requiring precise pixel control.
   *      <br>If abnormal values **undefined**, **NaN**, and **Infinity** are passed in, the default
   *      value is used.
   *      <br>Default value: **DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit);

  /**
   * Subscribes to the event when a **CanvasRenderingContext2D** object is bound to
   * a **Canvas** component.
   *
   * > **NOTE**
   * >
   * > A **CanvasRenderingContext2D** object can only be bound to one **Canvas** component
   * > at a time.<br>
   * > When a **CanvasRenderingContext2D** object is bound to a **Canvas** component, the
   * > **onAttach** callback is triggered, indicating that the
   * > [canvas]{@link CanvasRenderingContext2D#canvas}
   * > object is accessible.<br>
   * > Avoid performing drawing operations in the **onAttach** callback. Make sure the
   * > **Canvas** component has completed its
   * > [onReady]{@link onReady}
   * > event before performing any drawing.<br>
   * > The **onAttach** callback is triggered when:<br>
   * > 1. A **Canvas** component is created and bound to a **CanvasRenderingContext2D**
   * > object.<br>
   * > 2. A **CanvasRenderingContext2D** object is bound to a new **Canvas** component.
   *
   * @param { 'onAttach' } type - Event type for subscribing to the binding event between
   *     **CanvasRenderingContext2D** and the **Canvas** component. Fixed as **'onAttach'**.<br>
   *     Abnormal values such as **undefined** or **null** are treated as invalid values.
   * @param { Callback<void> } callback - Callback invoked when **CanvasRenderingContext2D** is bound
   *     to the **Canvas** component.<br>Abnormal values such as **undefined** or **null** are treated
   *     as invalid values.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  on(type: 'onAttach', callback: Callback<void>): void;

  /**
   * Unsubscribes from the event when a **CanvasRenderingContext2D** object is bound to
   * a **Canvas** component.
   *
   * @param { 'onAttach' } type - Event type for unsubscribing from the binding event between
   *     **CanvasRenderingContext2D** and the **Canvas** component. The value is fixed as
   *     **'onAttach'**.<br>Abnormal values such as **undefined** or **null** are treated as invalid.
   * @param { Callback<void> } [callback] - If empty, cancels all callbacks subscribed for the
   *     binding event between **CanvasRenderingContext2D** and the **Canvas** component.<br>If not
   *     empty, cancels the callback subscribed for the binding event.<br>Abnormal values such as
   *     **undefined** or **null** are treated as invalid.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  off(type: 'onAttach', callback?: Callback<void>): void;

  /**
   * Subscribes to the event when a **CanvasRenderingContext2D** object is unbound from
   * a **Canvas** component.
   *
   * > **NOTE**
   * >
   * > When a **CanvasRenderingContext2D** object is unbound from a **Canvas** component,
   * > the **onDetach** callback is triggered. In this case, cease any drawing operations.<br>
   * > The **onDetach** callback is triggered when:<br>
   * > 1. A **Canvas** component is destroyed and unbound from a **CanvasRenderingContext2D**
   * > object.<br>
   * > 2. A **CanvasRenderingContext2D** object is bound to a different **Canvas** component,
   * > causing the existing binding to be released.
   *
   * @param { 'onDetach' } type - Event type for subscribing to the event of the
   *     **CanvasRenderingContext2D** being detached from the **Canvas** component. The value is
   *     fixed as **'onDetach'**.<br>Abnormal values **undefined** and **null** are treated as
   *     invalid values.
   * @param { Callback<void> } callback - Callback invoked when the **CanvasRenderingContext2D** is
   *     detached from the **Canvas** component.<br>Abnormal values **undefined** and **null** are
   *     treated as invalid values.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  on(type: 'onDetach', callback: Callback<void>): void;

  /**
   * Unsubscribes from the event when a **CanvasRenderingContext2D** object is unbound from
   * a **Canvas** component.
   *
   * @param { 'onDetach' } type - Event type for unsubscribing from the **CanvasRenderingContext2D**
   *     detach event. It is fixed as **'onDetach'**.<br>Abnormal values such as **undefined** or
   *     **null** are treated as invalid values.
   * @param { Callback<void> } [callback] - If this parameter is empty, all callbacks subscribed for
   *     the **CanvasRenderingContext2D** detach event are unsubscribed.<br>If this parameter is not
   *     empty, the specific callback for the detach event is unsubscribed.<br>Abnormal values such
   *     as **undefined** or **null** are treated as invalid values.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  off(type: 'onDetach', callback?: Callback<void>): void;

  /**
   * Obtains a **CanvasRenderingContext2D** object from a **DrawingRenderingContext** object.
   * This **CanvasRenderingContext2D** object is bound to the same **Canvas** component as the
   * input **DrawingRenderingContext** object.
   *
   * > **NOTE**
   * >
   * > - The **CanvasRenderingContext2D** object obtained via this API cannot be used as a
   * > parameter to create a [Canvas]{@link Canvas}
   * > component. Otherwise, the application crashes.
   * >
   * > - If the input **DrawingRenderingContext** object is not bound to a **Canvas** component,
   * > an error code is returned.
   *
   * @param { DrawingRenderingContext } drawingContext - A **DrawingRenderingContext** object.
   *     <br>The abnormal value **undefined** or **null** is treated as an invalid value.
   * @param { RenderingContextOptions } [options] - Configuration options of the rendering context.
   *     <br>The abnormal value **undefined** or **null** is treated as the default value.
   *     <br>Default value: { antialias: false }
   * @returns { CanvasRenderingContext2D } - Returns a **CanvasRenderingContext2D** object that is
   *     bound to the same **Canvas** component as the input **DrawingRenderingContext**.
   * @throws { BusinessError } 103702 - The drawingContext is not bound to a canvas component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static getContext2DFromDrawingContext(drawingContext: DrawingRenderingContext, options?: RenderingContextOptions): CanvasRenderingContext2D;
}

/**
 * Use **OffscreenCanvasRenderingContext2D** to draw shapes, images, and text offscreen onto
 * a canvas. Offscreen drawing is a process where content to draw is first drawn into a buffer,
 * then converted into an image, and finally drawn onto the canvas at once. Offscreen drawing
 * uses the CPU for rendering, which is relatively slow. Therefore, avoid using offscreen drawing
 * in scenarios that require high rendering speed.
 *
 * > **NOTE**
 * >
 * > **OffscreenCanvasRenderingContext2D** cannot be used in **ServiceExtensionAbility**. In
 * > **ServiceExtensionAbility**, you are advised to use the
 * > [drawing module]{@link @ohos.graphics.drawing} for offscreen drawing.
 * >
 * > The [beginPath]{@link CanvasPath#beginPath()}, [moveTo]{@link CanvasPath#moveTo},
 * > [lineTo]{@link CanvasPath#lineTo}, [closePath]{@link CanvasPath#closePath},
 * > [bezierCurveTo]{@link CanvasPath#bezierCurveTo}, [quadraticCurveTo]{@link CanvasPath#quadraticCurveTo},
 * > [arc]{@link CanvasPath#arc},
 * > [arcTo]{@link CanvasPath#arcTo},
 * > [ellipse]{@link CanvasPath#ellipse},
 * > [rect]{@link CanvasPath#rect}, and
 * > [roundRect]{@link CanvasPath#roundRect}
 * > APIs take effect only on the path in **OffscreenCanvasRenderingContext2D**, and cannot take
 * > effect on the path set in [CanvasRenderingContext2D]{@link CanvasRenderingContext2D} and
 * > [Path2D]{@link Path2D} objects.
 * >
 * > The [common canvas drawing methods]{@link CanvasPath} and [common canvas drawing properties]{@link CanvasRenderer} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
  /**
   * Creates a data URL that contains a representation of an image. This API involves
   * time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { string } type - Used to specify the image format.
   *     <br>Optional values: **image/png**, **image/jpeg**, and **image/webp**.
   *     <br>The exception values **undefined** and **null** are handled as the default value.
   *     <br>Default value: **image/png**
   * @param { any } quality - When the image format is image/jpeg or image/webp, selects the
   *     image quality in the range [0, 1]. If the value is out of range, the default value
   *     **0.92** is used.
   *     <br>The exception values **undefined**, **null**, **NaN**, and **Infinity** are
   *     handled as the default value.
   *     <br>Default value: **0.92**
   * @returns { string } Image URL.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  toDataURL(type?: string, quality?: any): string;

  /**
   * Creates an **ImageBitmap** object from the most recently rendered image of the offscreen canvas.
   *
   * @returns { ImageBitmap } Pixel data rendered on the offscreen canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferToImageBitmap(): ImageBitmap;

  /**
   * Creates an offscreen canvas object. You can configure the canvas width, canvas height, and
   * parameters of the **OffscreenCanvasRenderingContext2D** object.
   *
   * @param { number } width - Width of the offscreen canvas. The default unit is vp.<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { number } height - Height of the offscreen canvas. The default unit is vp.<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { RenderingContextSettings } settings - Used to configure the parameters of the
   *     **OffscreenCanvasRenderingContext2D** object. Pass this parameter when advanced
   *     configurations such as antialiasing need to be enabled. See the description of the
   *     **RenderingContextSettings** API.<br>The exception value **undefined** is handled as
   *     the default value of [RenderingContextSettings]{@link RenderingContextSettings}.<br>
   *     Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number, settings?: RenderingContextSettings);

  /**
   * Creates an offscreen canvas object. You can configure the canvas width, canvas height, and
   * parameters and their unit of the **OffscreenCanvasRenderingContext2D** object.
   *
   * @param { number } width - Width of the offscreen canvas. The default unit is vp.<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { number } height - Height of the offscreen canvas. The default unit is vp.<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { RenderingContextSettings } settings - Used to configure the parameters of the
   *     **OffscreenCanvasRenderingContext2D** object. Pass this parameter when advanced
   *     configurations such as antialiasing need to be enabled. See the description of the
   *     **RenderingContextSettings** API.<br>The exception value **undefined** is handled as
   *     the default value of [RenderingContextSettings]{@link RenderingContextSettings}.<br>
   *     Default value: **null**
   * @param { LengthMetricsUnit } [unit] - Used to configure the unit mode of the
   *     **OffscreenCanvasRenderingContext2D** object. **DEFAULT** (default vp unit, suitable
   *     for most scenarios) and PX (px pixel unit, suitable for scenarios that require precise
   *     pixel control). Once configured, it cannot be changed dynamically. The configuration
   *     method is the same as that of [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.<br>
   *     The exception values **undefined**, **NaN**, and **Infinity** are handled as default
   *     values.<br>
   *     Default value: **DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
}

/**
 * The **OffscreenCanvas** component is used to draw custom graphics.
 *
 * When the
 * [Canvas]{@link Canvas}
 * component or **CanvasRenderingContext2D** object is used, rendering, animation,
 * and user interaction usually occur on the main thread of the application.
 * Calculations related to canvas animation and rendering may affect application
 * performance. **OffscreenCanvas** allows for rendering off the screen. This means
 * that some tasks can be run in a separate thread to reduce the load on the main thread.
 *
 * > **NOTE**
 * >
 * > **OffscreenCanvas** cannot be used in **ServiceExtensionAbility**. For offscreen
 * > drawing in **ServiceExtensionAbility**, use the
 * > [drawing module]{@link @ohos.graphics.drawing} instead.
 *
 * ## Child Components
 *
 * Not supported.
 *
 * @extends CanvasRenderer [since 8 - 10]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class OffscreenCanvas {
  /**
   * Height of the **OffscreenCanvas** component.
   * <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and negative
   * numbers are treated as 0.
   * <br>Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height: number;

  /**
   * Width of the **OffscreenCanvas** component.
   * <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and negative
   * numbers are treated as 0.
   * <br>Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width: number;

  /**
   * Creates an **ImageBitmap** object from the current content of the
   * **OffscreenCanvas** component.
   *
   * > **NOTE**
   * >
   * > After the **OffscreenCanvas** object has been passed to a Worker thread through
   * > **postMessage**, the original thread (sender) is not allowed to call the
   * > **transferToImageBitmap** method of the object. Otherwise, an exception is thrown.
   *
   * @returns { ImageBitmap } **ImageBitmap** object created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferToImageBitmap(): ImageBitmap;

  /**
   * Obtains the drawing context of the offscreen canvas.
   *
   * > **NOTE**
   * >
   * > - After the **OffscreenCanvas** object uses **getContext** to obtain the drawing
   * > context, the object cannot be passed to any other thread through **postMessage**.
   * > Otherwise, an exception is thrown.
   * >
   * > - After the **OffscreenCanvas** object has been passed to a Worker thread through
   * > **postMessage**, the original thread (sender) is not allowed to call the
   * > **getContext** method of the object. Otherwise, an exception is thrown.
   *
   * @param { "2d" } contextType - Type of the drawing context of the
   *     **OffscreenCanvas** component. Currently, only the "2d" type is supported.
   *     <br>"2d": Creates an **OffscreenCanvasRenderingContext2D** object that
   *     represents a 2D rendering context.
   *     <br>The abnormal values **undefined** and **null** are treated as invalid
   *     values, and the API returns **undefined**.
   * @param { RenderingContextSettings } options - Parameters used to configure the
   *     **OffscreenCanvasRenderingContext2D** object. See
   *     [RenderingContextSettings](#renderingcontextsettings). This parameter is passed
   *     when custom rendering context settings (such as enabling antialiasing) are
   *     required. If not passed, the default settings are used (**antialias** defaults
   *     to **false**).
   *     <br>The abnormal values **undefined** and **null** are treated as the default
   *     values of [RenderingContextSettings](#renderingcontextsettings).
   *     <br>Default value: **null**.
   * @returns { OffscreenCanvasRenderingContext2D } Drawing context of the offscreen canvas.
   *     If the input parameter contextType of the **getContext** method is not **"2d"**
   *     (including null or undefined), **undefined** will be returned. Before using the method,
   *     check whether the return value is **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getContext(contextType: "2d", options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D;

  /**
   * Constructs an **OffscreenCanvas** object.
   *
   * @param { number } width - Width of the **OffscreenCanvas** component.
   *     <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and
   *     negative numbers are treated as 0.
   *     <br>Unit: vp.
   * @param { number } height - Height of the **OffscreenCanvas** component.
   *     <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and
   *     negative numbers are treated as 0.
   *     <br>Unit: vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number);

  /**
   * Creates an **OffscreenCanvas** object, with support for configuring the unit mode.
   *
   * @param { number } width - Width of the **OffscreenCanvas** component.
   *     <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and
   *     negative numbers are treated as 0.
   *     <br>The unit is determined by the unit parameter. Default unit: vp.
   * @param { number } height - Height of the **OffscreenCanvas** component.
   *     <br>Abnormal values **NaN** and **Infinity** are treated as invalid values, and
   *     negative numbers are treated as 0.
   *     <br>The unit is determined by the unit parameter. Default unit: vp.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **OffscreenCanvas** object.
   *     Once configured, it cannot be changed dynamically. The configuration method is
   *     the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     Optional values: **DEFAULT** (default unit mode, which uses vp as the unit and
   *     automatically adapts based on the screen density) and PX (px pixel unit, which is
   *     suitable for scenarios requiring precise pixel control, where the width and height
   *     values are calculated based on physical pixels).
   *     <br>Abnormal values **NaN** and **Infinity** are treated as the default value.
   *     <br>Default value: **DEFAULT**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, unit: LengthMetricsUnit);
}

/**
 * Provides size information of the **DrawingRenderingContext** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Size {
  /**
   * Width of the **DrawingRenderingContext** object, which corresponds to the width of the
   * associated **Canvas** component.
   *
   * Default unit: vp.
   *
   * If the unit mode of the **DrawingRenderingContext** object is set to px, the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;

  /**
   * Height of the **DrawingRenderingContext** object, which corresponds to the height of the
   * associated **Canvas** component.
   *    
   * Default unit: vp.
   *
   * If the unit mode of the **DrawingRenderingContext** object is set to px, the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
}

/**
 * **DrawingRenderingContext** provides a rendering context for drawing rectangles, text, images, and
 * other objects on a canvas.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DrawingRenderingContext {

  /**
   * Obtains the size of the **DrawingRenderingContext** object.
   *
   * @returns { Size } The size of the DrawingRenderingContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get size(): Size;

  /**
   * Obtains the canvas object for drawing content.
   *
   * @returns { DrawingCanvas } The canvas of the DrawingRenderingContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get canvas(): DrawingCanvas;

  /**
   * Invalidates the component and triggers re-rendering of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;

  /**
   * Creates a **Canvas** object for drawing operations using the drawing API. Configuration of the
   * unit mode for the **DrawingRenderingContext** object is supported.
   *
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **DrawingRenderingContext** object.
   *     The value cannot be changed once set. The configuration method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     <br>Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.
   *     <br>Default value: **DEFAULT**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit?: LengthMetricsUnit);
}

/**
 * Defines the parameters of the **Canvas** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface CanvasParams {
  /**
   * Unit mode used for **Canvas** drawing. Different unit modes affect the coordinate and
   * size calculation methods during drawing. For details, see
   * [LengthMetricsUnit]{@link LengthMetricsUnit}.<br>
   * This attribute can only be set when creating the **Canvas** and cannot be modified
   * afterwards.<br>
   * Default value: **LengthMetricsUnit.DEFAULT**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  unit?: LengthMetricsUnit;

  /**
   * AI analysis option for the component. Through this option, you can configure the
   * analysis type or bind an analysis controller.<br>
   * Abnormal values **null** and **undefined** are treated as not enabling the AI analysis
   * function.<br>
   * Default value: AI analysis function not enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * The **Canvas** component can be used to customize drawings.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
interface CanvasInterface {
  /**
   * Creates a **Canvas** component. The maximum allowed size cannot exceed 10000 px × 10000 px.
   * If the size exceeds this limit, the **Canvas** component will fail to be created.
   *
   * The **Canvas** component created using this API does not respond to drawing
   * instructions when the component is invisible. Invisible scenarios mainly include the
   * page where the component is located entering the background, the component sliding
   * out of the window, and setting the
   * [visibility]{@link CommonMethod#visibility} attribute to hidden. Scenarios where the
   * component is obscured by other components or other windows are not included.
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - 2D rendering
   *     context for a canvas.
   *     <br>**CanvasRenderingContext2D**: Canvases cannot share one
   *     **CanvasRenderingContext2D** object. For details, see
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     **DrawingRenderingContext**: Canvases cannot share one
   *     **DrawingRenderingContext** object. For details, see
   *     [DrawingRenderingContext]{@link DrawingRenderingContext}.
   *     <br>If the value is **null** or **undefined**, **context** is considered unset.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute;

  /**
   * When creating a **Canvas** component, the maximum area cannot exceed 10000 px × 10000
   * px. If the size exceeds this limit, the **Canvas** component will fail to be created.
   * You can specify a **CanvasRenderingContext2D** or **DrawingRenderingContext** object,
   * along with AI analysis options.
   *
   * The **Canvas** component created using this API does not respond to drawing
   * instructions when the component is invisible. Invisible scenarios mainly include the
   * page where the component is located entering the background, the component sliding
   * out of the window, and setting the
   * [visibility]{@link CommonMethod#visibility} attribute to hidden. Scenarios where the
   * component is obscured by other components or other windows are not included.
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - 2D rendering
   *     context for a canvas.
   *     <br>**CanvasRenderingContext2D**: Canvases cannot share one
   *     **CanvasRenderingContext2D** object. For details, see
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     **DrawingRenderingContext**: Canvases cannot share one
   *     **DrawingRenderingContext** object. For details, see
   *     [DrawingRenderingContext]{@link DrawingRenderingContext}.
   *     <br>If the value is **null** or **undefined**, **context** is considered unset.
   * @param { ImageAIOptions } imageAIOptions - AI image analysis options. You can
   *     configure the analysis type or bind an analyzer controller through this parameter.
   *     <br>If the value is **null** or **undefined**, the default value of
   *     **ImageAIOptions** is used. The default value is
   *     **{ type: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT], aiController:
   *     new ImageAnalyzerController() }**, indicating that subject recognition and text
   *     recognition are enabled.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute;

  /**
   * Creates a **Canvas** component that does not cache commands using **CanvasParams**.
   * When creating a **Canvas** component, the maximum area cannot exceed 10000 px × 10000
   * px. If the area exceeds this limit, the **Canvas** component cannot be created
   * properly. When the **Canvas** component does not have a fixed size set, it expands to
   * its maximum available size by default.
   *
   * > **NOTE**
   * >
   * > * The **Canvas** component created using this API returns a
   * > [DrawingRenderingContext]{@link DrawingRenderingContext} object in the input
   * > parameter of the [onReady]{@link CanvasAttribute#onReady} callback, which can be
   * > used for drawing on the **Canvas** component.
   * >
   * > * The **Canvas** component created using this API does not respond to drawing
   * > instructions when the component is invisible.
   * >
   * > * Invisible scenarios mainly include the page where the component is located
   * > entering the background, the component sliding out of the window, and setting the
   * > [visibility]{@link CommonMethod#visibility} attribute to hidden. Scenarios where
   * > the component is obscured by other components or other windows are not included.
   *
   * @param { CanvasParams } params - Construction parameters of the **Canvas** component,
   * used to create a **Canvas** component that does not cache drawing instructions. For
   * details about the configuration parameters, see
   * [CanvasParams]{@link CanvasParams}.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  (params: CanvasParams): CanvasAttribute;
}

/**
 * In addition to the
 * [universal attributes]{@link common},
 * the following attributes are supported.
 *
 * The [universal events]{@link common} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare class CanvasAttribute extends CommonMethod<CanvasAttribute> {
  /**
   * Triggered when the **Canvas** component is initialized or when its size changes. Dynamic
   * attribute setting using [attributeModifier]{@link CommonMethod#attributeModifier} is
   * supported.
   *
   * When this event is triggered, the canvas is cleared. The width and height of the **Canvas**
   * component are then determined and can be obtained, allowing you to use APIs related to the
   * **Canvas** component for drawing. If only the position of the canvas changes, only the
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered, not the **onReady** event. The
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered after the **onReady** event.
   *
   * @param { VoidCallback } event - Callback event triggered when the **Canvas** component
   *     initialization is complete or when its size changes.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onReady(event: VoidCallback): CanvasAttribute;

  /**
   * Triggered when the **Canvas** component is initialized or when its size changes. Dynamic
   * attribute setting using [attributeModifier]{@link CommonMethod#attributeModifier} is
   * supported.
   *
   * When this event is triggered, the canvas is cleared. The width and height of the **Canvas**
   * component are then determined and can be obtained, allowing you to use APIs related to the
   * **Canvas** component for drawing. If only the position of the canvas changes, only the
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered, not the **onReady** event. The
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered after the **onReady** event.
   *
   * @param { Callback<DrawingRenderingContext | undefined> | undefined } event - Callback
   *     invoked when the **Canvas** component initialization is complete or when its size
   *     changes.
   *     <br>Regarding the input parameter of the **Callback<DrawingRenderingContext | undefined>** type:
   *     <br>1. Only the **Canvas** component created using [CanvasParams]{@link CanvasParams} returns
   *     a **DrawingRenderingContext** object in this callback; otherwise, **undefined** is returned.
   *     <br>2. The **DrawingRenderingContext** object returned by this callback must not be used
   *     as a parameter to create a **Canvas** component; otherwise, the app will crash.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  onReady(event: Callback<DrawingRenderingContext | undefined> | undefined): CanvasAttribute;

  /**
   * Sets whether to enable the AI image analyzer, which supports subject recognition, text
   * recognition, and object lookup. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * This API must be used together with
   * [startImageAnalyzer]{@link startImageAnalyzer} and
   * [stopImageAnalyzer]{@link stopImageAnalyzer} in
   * [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *
   * This attribute cannot be used together with the
   * [overlay]{@link CommonMethod#overlay} attribute.
   * If they are set at the same time, the **CustomBuilder** attribute in **overlay** will
   * become invalid. This feature depends on the device capability. You can use the
   * [ImageAnalyzerController.getImageAnalyzerSupportTypes]{@link ImageAnalyzerController#getImageAnalyzerSupportTypes}
   * API to query the analysis types supported by the device.
   *
   * > **NOTE**
   * >
   * > This API can be called within
   * > [attributeModifier]{@link CommonMethod#attributeModifier}
   * > since API version 20.
   *
   * @param { boolean } enable - Whether to enable the AI analysis function for the
   *     component. When enabled, the component content must support subject recognition,
   *     text recognition, or object search.
   *     <br>When set to **true**, the component can perform AI analysis; when set to **false**,
   *     the component cannot perform AI analysis.
   *     <br>Abnormal values **null** and **undefined** are processed as **false**.
   *     <br>Default value: **false**
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): CanvasAttribute;
}

/**
 * The **Canvas** component can be used to customize drawings.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const Canvas: CanvasInterface;

/**
 * The **Canvas** component can be used to customize drawings.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const CanvasInstance: CanvasAttribute;
