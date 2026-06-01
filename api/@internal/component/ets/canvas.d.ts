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
 * Filling style algorithm, which determines whether a point is within or outside the path.
 *
 * @unionmember { "evenodd" } The inside part of a shape is determined based on whether the counting
 *     result is an odd number or not. This rule determines whether a point is inside a shape by casting
 *     a ray from the point on the canvas in any direction and counting the number of intersections between
 *     the ray and the shape path. If the number of intersections is odd, the point is inside the shape.
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
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length
 * is not 0 are connected together.
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
 * Indicates the attribute of the current text direction.
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
 * Describes the alignment mode for drawing text.
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
 * Text baseline, which supports the following configurations.
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
 * **CanvasGradient** provides a canvas gradient object.
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
   * Adds a color stop for the **CanvasGradient** object based on the specified offset
   * and gradient color.
   *
   * @param { number } offset - Relative position of the gradient stop along the gradient vector,
   *    represented by the ratio of the distance between the gradient stop and the start point
   *    to the total length. The value ranges from 0 to 1.<br>
   *    If the value of **offset** is less than 0 or greater than 1, there is no gradient effect.<br>
   *    **undefined** and **null** are treated as invalid values, and the current stop is ignored.
   *    **NaN** causes a **CanvasGradient** exception, and **Infinity** causes **CanvasGradient**
   *    to be invalid.
   * @param { string } color - Gradient color to set. For details about the color notation,
   *    see the description of the string type in
   *    [ResourceColor](@ResourceColor).<br>
   *    Invalid values result in no gradient effect being displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  addColorStop(offset: number, color: string): void;

  /**
   * Adds a color stop for the **CanvasGradient** object based on the specified offset
   * and gradient color. Colors in RGB or ARGB format can be set. You can set P3 color
   * gamut values by passing in the
   * [ColorMetrics](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colormetrics12)
   * type, which can achieve richer color reproduction on devices that support high color gamut.
   *
   * > **NOTE**
   * >
   * > Only the
   * > [fillStyle](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#fillstyle)
   * > and
   * > [strokeStyle](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#strokestyle)
   * > attributes of the
   * > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
   * > object support the **CanvasGradient** object with the P3 wide color gamut. In addition,
   * > the color gamut mode of the window where the **Canvas** component is located must be set
   * > to wide color gamut mode **WIDE_GAMUT** via the
   * > [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9)
   * > method.
   *
   * @param { number } offset - Relative position of the gradient stop along the gradient vector,
   *     represented by the ratio of the distance between the gradient stop and the start point
   *     to the total length. The value ranges from 0 to 1.<br>
   *     If the value of **offset** is less than 0 or greater than 1, there is no gradient effect.<br>
   *     **undefined** and **null** are treated as invalid values and are not applied.
   *     **NaN** causes a **CanvasGradient** exception, and **Infinity** causes **CanvasGradient**
   *     to be invalid.
   * @param { string | ColorMetrics } color - Color of the gradient fill.<br>
   *     You can use the
   *     [colorWithSpace](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colorwithspace20)
   *     method to construct a color with the color gamut attribute
   *     [ColorSpace](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#colorspace20)
   *     set to **SRGB** or **DISPLAY_P3**. The color gamut attributes of each gradient ColorMetrics
   *     must be the same. If different color gamut attributes are set, an exception is thrown,
   *     and the error code is 103701.<br>
   *     **undefined** and **null** are treated as invalid values, and the current stop is ignored.
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
   * @param { number } x - X-coordinate of the center point of the arc.<br>In versions earlier than API
   *    version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *    **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *    **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *    APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the center point of the arc.<br>In versions earlier than API
   *    version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *    **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *    **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *    APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } radius - Radius of the arc.<br>In versions earlier than API version 18, **NaN** or
   *    **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *    causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *    **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *    continue to render correctly.<br>Default unit: vp
   * @param { number } startAngle - Start radian of the arc.<br>In versions earlier than API version 18,
   *    **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *    value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *    **null**, or **undefined** causes the current API to have no effect, and other path APIs with valid
   *    arguments continue to render correctly.<br>Unit: radian
   * @param { number } endAngle - End radian of the arc.<br>In versions earlier than API version 18, **NaN**
   *    or **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *    causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *    **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *    continue to render correctly.<br>Unit: radian
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
   * Creates a circular arc using the given control points and radius.
   *
   * @param { number } x1 - X-coordinate of the first control point.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y1 - Y-coordinate of the first control point.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } x2 - X-coordinate of the second control point.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y2 - Y-coordinate of the second control point.<br>In versions earlier than API version
   *     18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } radius - Radius of the arc.<br>In versions earlier than API version 18, **NaN** or
   *     **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *     causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *     **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Creates a path for a cubic Bezier curve.
   *
   * @param { number } cp1x - X-coordinate of the first parameter of the Bezier curve.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** value prevents the entire path from rendering,
   *     and **null** or **undefined** value causes the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     path APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } cp1y - Y-coordinate of the first parameter of the Bezier curve.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** value prevents the entire path from rendering,
   *     and **null** or **undefined** value causes the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     path APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } cp2x - X-coordinate of the second parameter of the Bezier curve.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** value prevents the entire path from rendering,
   *     and **null** or **undefined** value causes the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     path APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } cp2y - Y-coordinate of the second parameter of the Bezier curve.<br>In versions
   *     earlier than API version 18, **NaN** or **Infinity** value prevents the entire path from rendering,
   *     and **null** or **undefined** value causes the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     path APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } x - X-coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

  /**
   * Draws a closed path.
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
   * Draws an ellipse in the specified rectangular region on the canvas.
   *
   * @param { number } x - X-coordinate of the ellipse center.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the ellipse center.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Default unit: vp
   * @param { number } radiusX - Radius of the ellipse on the x-axis.<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } radiusY - Radius of the ellipse on the y-axis.<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } rotation - Rotation angle of the ellipse.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other path APIs with valid
   *     arguments continue to render correctly.<br>Unit: radian
   * @param { number } startAngle - Angle of the start point for drawing the ellipse.<br>In versions earlier
   *     than API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and
   *     **null** or **undefined** value causes the current API to have no effect. Since API version 18,
   *     **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     path APIs with valid arguments continue to render correctly.<br>Unit: radian
   * @param { number } endAngle - Angle of the end point for drawing the ellipse.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path APIs
   *     with valid arguments continue to render correctly.<br>Unit: radian
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
   * Connects the current point to a target position using a line.
   *
   * @param { number } x - X-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
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
   * Moves a drawing path from the current position to a target position on the canvas.
   *
   * @param { number } x - X-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the target position.<br>In versions earlier than API version 18,
   *     **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or **undefined**
   *     value causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**,
   *     or **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   *     > **NOTE**
   *     >
   *     > In versions earlier than API version 18, if the **moveTo** API is not called or invalid arguments
   *     > are passed to it, the path starts from (0,0).
   *     >
   *     > Starting from API version 18, if the **moveTo** API is not executed or invalid arguments are passed
   *     > to it, the path will begin at the start point of the first valid call to **lineTo**, **arcTo**,
   *     > **bezierCurveTo**, or **quadraticCurveTo**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  moveTo(x: number, y: number): void;

  /**
   * Creates a path for a quadratic Bezier curve.
   *
   * @param { number } cpx - X-coordinate of the Bezier curve parameter.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } cpy - Y-coordinate of the Bezier curve parameter.<br>In versions earlier than API
   *     version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null** or
   *     **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } x - X-coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the end point on the Bezier curve.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
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
   * @param { number } x - X-coordinate of the rectangle's top-left corner.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Y-coordinate of the rectangle's top-left corner.<br>In versions earlier than
   *     API version 18, **NaN** or **Infinity** value prevents the entire path from rendering, and **null**
   *     or **undefined** value causes the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other path
   *     APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } w - Width of the rectangle.<br>In versions earlier than API version 18, **NaN** or
   *     **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *     causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *     **undefined** causes the current API to have no effect, and other path APIs with valid arguments
   *     continue to render correctly.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>In versions earlier than API version 18, **NaN** or
   *     **Infinity** value prevents the entire path from rendering, and **null** or **undefined** value
   *     causes the current API to have no effect. Since API version 18, **NaN**, **Infinity**, **null**, or
   *     **undefined** causes the current API to have no effect, and other path APIs with valid arguments
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
   * Creates a rounded rectangle path. This API does not directly render content. To draw the rounded
   * rectangle on the canvas, use **fill** or **stroke**.
   *
   * @param { number } x - X-coordinate of the rectangle's top-left corner.<br>The value **null** is
   *     treated as **0**, and **undefined** is treated as an invalid value, indicating no rendering.<br>
   *     To draw a complete rectangle, the value range is [0, Canvas width).<br>Default unit: vp
   * @param { number } y - Y-coordinate of the rectangle's top-left corner.<br>The value **null** is treated
   *     as **0**, and **undefined** is treated as an invalid value, indicating no rendering.<br>To draw a
   *     complete rectangle, the value range is [0, Canvas height).<br>Default unit: vp
   * @param { number } w - Width of the rectangle. A negative value indicates that the rectangle is drawn
   *     from right to left.<br>The value **null** is treated as **0**, and **undefined** is treated as an
   *     invalid value, indicating no rendering.<br>To draw a complete rectangle, the value range is
   *     [-x, Canvas width - x].<br>Default unit: vp
   * @param { number } h - Height of the rectangle. A negative value indicates upward drawing.<br>The value
   *     **null** is treated as **0**, and **undefined** is treated as an invalid value, indicating no
   *     rendering.<br>To draw a complete rectangle, the value range is [-y, Canvas height - y].<br>
   *     Default unit: vp
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
 * **Path2D** allows you to describe a path through an existing path. This path can be drawn
 * through the **stroke** or **fill** API of **Canvas**.
 *
 * > **NOTE**
 * >
 * > The Path2D object does not support the resetting of an existing path. If a new path
 * > is required, you can create an empty Path2D object.
 * >
 * > The methods of the Path2D object do not take effect for the paths set in the
 * > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
 * > and
 * > [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md)
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
   * @param { Path2D } path - Path to be added to this path. Unit: px.<br>
   *     The **undefined** and **null** values are treated as invalid.
   * @param { Matrix2D } transform - Transformation matrix of the new path.<br>
   *     The **undefined** and **null** values are treated as invalid.<br>
   *     Default value: **null**.
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
   * @param { LengthMetricsUnit } [unit] - Unit mode of the Path2D object.
   *     The value cannot be dynamically changed once set. The configuration method is the same
   *     as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     Invalid values **NaN** and **Infinity** are treated as the default value.<br>
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
   * @param { Path2D } path - **Path** object.
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
   * @param { Path2D } path - **Path** object.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the Path2D object.
   *     The value cannot be dynamically changed once set. The configuration method is the same
   *     as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     Invalid values **NaN** and **Infinity** are treated as the default value.<br>
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
   * @param { string } d - Path that complies with the
   *     [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax).
   *     Invalid values are treated as invalid inputs.
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
   * @param { string } description - Path that complies with the
   *     [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax).
   *     Invalid values are treated as invalid inputs.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the Path2D object.
   *     The value cannot be dynamically changed once set. The configuration method is the same
   *     as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     Invalid values **NaN** and **Infinity** are treated as the default value.<br>
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
 * [createPattern](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#createpattern)
 * API, describing an image filling pattern based on the image and repetition mode.
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
   * Uses a **Matrix2D** object as a parameter to perform matrix transformation on the current
   * **CanvasPattern** object.
   *
   * @param { Matrix2D } transform - Transformation matrix.<br>The **undefined** and **null**
   *     values are treated as invalid.<br>Default value: **null**.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ImageBitmap {
  /**
   * Pixel height of the **ImageBitmap** object.
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
   * Pixel width of the **ImageBitmap** object.
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
   * Releases all graphics resources associated with this **ImageBitmap** object and sets
   * its width and height to **0**.
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
   * Creates an **ImageBitmap** object using an **ImageSrc** object.
   *
   * @param { string } src - Image source. Local images are supported.<br>
   *     1. The string format is used to load local images, for example,
   *     **ImageBitmap("common/images/example.jpg")**. For entry and feature modules,
   *     the start point of the image path for loading is the **ets** folder of the module.
   *     For HAR and shared modules, the start point is the **ets** folder of the entry or
   *     feature module into which they are built.<br>
   *     For modules whose **type** is **"har"** or **"shared**", you are advised to use
   *     [ImageSource](docroot://media/image/image-decoding.md) to decode resource images
   *     into a unified **PixelMap** object for loading and use.<br>
   *     2. Supported image formats: BMP, JPG, PNG, SVG, and WEBP.<br>
   *     **NOTE**<br>
   *     - ArkTS widgets do not support the strings with the **http://**, **datashare://**,
   *     or **file://data/storage**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(src: string);

  /**
   * Creates an **ImageBitmap** object using an **ImageSrc** object. The unit mode of the
   * Path2D object can be configured using **unit**.
   *
   * @param { string } src - Image source. Local images are supported.<br>
   *     1. The string format is used to load local images, for example,
   *     **ImageBitmap("common/images/example.jpg")**. For entry and feature modules,
   *     the start point of the image path for loading is the **ets** folder of the module.
   *     For HAR and shared modules, the start point is the **ets** folder of the entry or
   *     feature module into which they are built.<br>
   *     For modules whose **type** is **"har"** or **"shared**", you are advised to use
   *     [ImageSource](docroot://media/image/image-decoding.md) to decode resource images
   *     into a unified **PixelMap** object for loading and use.<br>
   *     2. Supported image formats: BMP, JPG, PNG, SVG, and WEBP.<br>
   *     **NOTE**<br>
   *     - ArkTS widgets do not support the strings with the **http://**, **datashare://**,
   *     or **file://data/storage**.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **ImageBitmap** object.
   *     The value cannot be dynamically changed once set. The configuration method is the
   *     same as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     If the value is **undefined**, **NaN**, or **Infinity**, the default value will be used.
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
   * @param { PixelMap } data - Image data source, which supports **PixelMap** objects.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(data: PixelMap);

  /**
   * Creates an **ImageBitmap** object using a **PixelMap** object. The unit mode of the
   * Path2D object can be configured using **unit**.
   *
   * @param { PixelMap } data - Image data source, which supports **PixelMap** objects.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **ImageBitmap** object.
   *     The value cannot be dynamically changed once set. The configuration method is the
   *     same as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(data: PixelMap, unit: LengthMetricsUnit);

  /**
   * Transfer a Resource object to construct an ImageBitmap object.
   *
   * @param { Resource } data - Resource object
   * @param { LengthMetricsUnit } [unit] - the unit mode
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
 * An **ImageData** object stores pixel data rendered on a canvas.
 *
 * > **NOTE**
 * >
 * > A constructor used to create an **ImageData** object. To ensure successful drawing,
 * > make sure the object's area does not exceed 16000 x 16000, with its width and height
 * > not greater than 16384 px. If the created area exceeds 536870911 px, the returned
 * > width and height are both 0 px, and **data** is **undefined**.
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
   * A one-dimensional array of color values. The values range from 0 to 255.
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
   * Actual height of the rectangle on the canvas.
   *
   * The unit is px.
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
   * Actual width of the rectangle on the canvas.
   *
   * The unit is px.
   *
   * > **NOTE**
   * >
   * > The [px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12)
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
   * Creates an **ImageData** object with the specified width, height, and color.
   * If data is not defined, it is populated with a one-dimensional array of 0s.
   *
   * @param { number } width - Width of the rectangle.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as **0**.
   * @param { number } height - Height of the rectangle.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as **0**.
   * @param { Uint8ClampedArray } data - A one-dimensional array of color values.
   *     The values range from 0 to 255.<br>
   *     If the value specified is **undefined**, **data** is **undefined**.<br>
   *     Default value: a one-dimensional array of all 0s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number, data?: Uint8ClampedArray);

  /**
   * Creates an **ImageData** object with the specified width, height, and color.
   * If data is not defined, it is populated with a one-dimensional array of 0s.
   * The unit of the **ImageData** object can be configured using **unit**.
   *
   * @param { number } width - Width of the rectangle.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as **0**.
   * @param { number } height - Height of the rectangle.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as **0**.
   * @param { Uint8ClampedArray } data - A one-dimensional array of color values.
   *     The values range from 0 to 255.<br>
   *     If the value specified is **undefined**, **data** is **undefined**.<br>
   *     Default value: a one-dimensional array of all 0s
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **ImageData** object.
   *     The value cannot be dynamically changed once set. The configuration method is
   *     the same as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.<br>
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
   * Indicates whether anti-aliasing is enabled for canvas.
   * <br>A value of **undefined** is treated as the default value.
   * <br>**false**: Disable anti-aliasing. **true**: Enable anti-aliasing.
   * <br>Default value: **false**
   * <br>**NOTE**<br>
   * Anti-aliasing is enabled by default for text drawing. The **antialias** attribute of
   * **RenderingContextSettings** does not affect the anti-aliasing effect of the drawn text.
   * To adjust the anti-aliasing effect for text, use the
   * [antialias](#antialias24) API.
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
   * Constructs a **CanvasRenderingContext2D** object. Anti-aliasing can be enabled.
   *
   * @param { boolean } antialias - Whether to enable anti-aliasing.
   *     <br>A value of **undefined** is treated as the default value.
   *     <br>**false**: Disable anti-aliasing. **true**: Enable anti-aliasing.
   *     <br>Default value: **false**
   *     <br>**NOTE**<br>
   *     Anti-aliasing is enabled by default for text drawing. The **antialias** attribute of
   *     **RenderingContextSettings** does not affect the anti-aliasing effect of the drawn text.
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
 * Defines the options for rendering context.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface RenderingContextOptions {
  /**
   * Indicates whether to enable anti-aliasing for the **RenderingContext**.
   * <br>A value of **undefined** is treated as the default value.
   * <br>**true**: Enable anti-aliasing. **false**: Disable anti-aliasing.
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
   * Sets the letter spacing. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation. If you
   * attempt to read its current value, **undefined** will be returned.
   *
   * Spacing between characters.
   *
   * When the LengthMetrics type is used:
   *
   * The spacing is set according to the specified unit.
   *
   * The FP, PERCENT, and LPX units are not supported and will be treated as invalid values.
   *
   * Negative and fractional values are supported. When set to a fraction, the spacing is not
   * rounded.
   *
   * When the string type is used:
   *
   * Percentage values are not supported and will be treated as invalid.
   *
   * Negative and decimal values are supported. When set to a decimal value, the spacing is not
   * rounded.
   *
   * If no unit is specified (for example, **letterSpacing = '10'**) and **LengthMetricsUnit**
   * is not set, the default unit is vp.
   *
   * If **LengthMetricsUnit** is set to px, the default unit is px.
   *
   * If the value of **letterSpacing** is specified with a unit (for example,
   * **letterSpacing='10vp'**), the letter spacing is set based on the specified unit.
   *
   * Default value: **0** (Invalid values are treated as the default value.)
   *
   * > **NOTE**
   * >
   * > The LengthMetrics type is recommended for better performance.
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
   * Sets the opacity. This attribute is write-only. You can set its value through an assignment
   * statement, but cannot obtain its current value through a read operation. If you attempt to read
   * its current value, **undefined** will be returned.
   *
   * The value range is [0.0, 1.0]. **0.0** indicates completely transparent, and **1.0** indicates
   * completely opaque. If the set value is less than 0.0, **0.0** will be used. If the set value is
   * greater than 1.0, **1.0** will be used.
   *
   * In versions earlier than API version 18, if **NaN** or **Infinity** is set, rendering APIs cannot
   * be called for rendering after this API. In API version 18 and later versions, if **NaN** or
   * **Infinity** is set, the current API does not take effect, and other rendering APIs with valid
   * arguments can be called normally.
   *
   * Default value: **1.0**
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
   * Sets the composite operation. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation. If you
   * attempt to read its current value, **undefined** will be returned.
   *
   * Available values are as follows:
   *
   * | Name | Description |
   * | ------ | ------ |
   * | source-over | Displays the new drawing above the existing drawing. Default value. |
   * | source-atop | Displays the new drawing on the top of the existing drawing. |
   * | source-in | Displays the new drawing inside the existing drawing. |
   * | source-out | Displays part of the new drawing that is outside of the existing drawing. |
   * | destination-over | Displays the existing drawing above the new drawing. |
   * | destination-atop | Displays the existing drawing on the top of the new drawing. |
   * | destination-in | Displays the existing drawing inside the new drawing. |
   * | destination-out | Displays the existing drawing outside the new drawing. |
   * | lighter | Displays both the new and existing drawing. |
   * | copy | Displays the new drawing and neglects the existing drawing. |
   * | xor | Combines the new drawing and existing drawing using the XOR operation. |
   *
   * Default value: **'source-over'**
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
   * Draws an image on the canvas.
   *
   * @param { ImageBitmap | PixelMap } image - Image resource. For details, see **ImageBitmap** or
   *     **PixelMap**.<br>**undefined** and **null** are treated as invalid values and no rendering will
   *     be performed.
   * @param { number } dx - X-coordinate of the top-left corner of the drawing area on the canvas.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-coordinate of the top-left corner of the drawing area on the canvas.<br>
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
   * Draws an image by stretching or compressing it to the specified dimensions.
   *
   * @param { ImageBitmap | PixelMap } image - Image resource. For details, see **ImageBitmap** or
   *     **PixelMap**.<br>**undefined** and **null** are treated as invalid values and no rendering will
   *     be performed.
   * @param { number } dx - X-coordinate of the top-left corner of the drawing area on the canvas.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-coordinate of the top-left corner of the drawing area on the canvas.<br>
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
   * Draws a cropped portion of an image by stretching or compressing it to the specified dimensions.
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
   * @param { number } dx - X-coordinate of the top-left corner of the drawing area on the canvas.<br>
   *     Invalid values **undefined** and **null** are treated as **0**. **NaN** and **Infinity** are
   *     treated as invalid and no rendering will be performed.<br>Default unit: vp
   * @param { number } dy - Y-coordinate of the top-left corner of the drawing area on the canvas.<br>
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
   * Creates a drawing path.
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
   * Sets the current path to a clipping path.
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
   * Sets a specified path as the clipping path.
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
   * Fills a specified path.
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
   * Strokes (outlines) this path.
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
   * Strokes (outlines) a specified path.
   *
   * @param { Path2D } path - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stroke(path: Path2D): void;

  /**
   * Sets the fill color for rendering. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation. If you attempt
   * to read its current value, **undefined** will be returned.
   *
   * - When the type is string, this attribute indicates the color of the fill area. For details about
   *   the color format, see the description for the string type in
   *   [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor).
   *
   * - When the type is number, this attribute indicates the color of the fill area. Fully transparent
   *   colors are not supported. For details about the color format, see the description for the number
   *   type in [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor).
   *
   * - When the type is **CanvasGradient**, this attribute indicates a gradient object, which is created
   *   via the [createLinearGradient](#createlineargradient) API.
   *
   * - When the type is **CanvasPattern**, this attribute indicates a pattern, which is created via the
   *   [createPattern](#createpattern) API.
   *
   *   Default value: **'#000000'** (black)
   *
   *   Invalid values do not take effect. The effect before the setting is retained.
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
   * Sets the stroke color. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation.
   * If you attempt to read its current value, **undefined** will be returned.
   *
   * - When the type is string, this attribute indicates the stroke color. For details about
   *   the color format, see the description for the string type in
   *   [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor).
   *
   * - When the type is number, this attribute indicates the stroke color. Fully transparent
   *   colors are not supported. For details about the color format, see the description for
   *   the number type in
   *   [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor).
   *
   * - When the type is **CanvasGradient**, this attribute indicates a gradient object, which is
   *   created via the [createLinearGradient](#createlineargradient) API.
   *
   * - When the type is **CanvasPattern**, this attribute indicates a pattern, which is created
   *   via the [createPattern](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#createpattern) API.
   *
   *   Default value: **'#000000'** (black)
   *
   *   Invalid values do not take effect. The effect before the setting is retained.
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
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient on the canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

  /**
   * Creates a pattern for image filling based on a specified source image and repetition mode.
   *
   * @param { ImageBitmap } image - Source image. For details, see **ImageBitmap**.<br>**undefined** and
   *     **null** are treated as invalid values.
   * @param { string | null } repetition - Repetition mode.<br>**'repeat'**: The image is repeated along
   *     both the x-axis and y-axis.<br>**'repeat-x'**: The image is repeated along the x-axis.<br>
   *     **'repeat-y'**: The image is repeated along the y-axis.<br>**'no-repeat'**: The image is not
   *     repeated.<br>**'clamp'**: Coordinates outside the original bounds are clamped to the edge of the
   *     image.<br>**'mirror'**: The image is mirrored with each repetition along the x-axis and y-axis.<br>
   *     **undefined** and **null** are treated as invalid values.
   * @returns { CanvasPattern | null } Pattern for image filling based on a specified source image and
   *     repetition mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;

  /**
   * Creates a radial gradient.
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
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient on the canvas.
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
   * @param { number } startAngle - Angle at which the gradient starts. The angle measurement starts
   *     horizontally from the right side of the center and moves clockwise.<br>Invalid values **undefined**
   *     and **null** are treated as **0**. **NaN** and **Infinity** are treated as invalid.<br>Unit: radian
   * @param { number } x - X-coordinate of the center of the conic gradient.<br>Invalid values **undefined**
   *     and **null** are treated as **0**. **NaN** and **Infinity** are treated as invalid.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the center of the conic gradient.<br>Invalid values **undefined**
   *     and **null** are treated as **0**. **NaN** and **Infinity** are treated as invalid.<br>
   *     Default unit: vp
   * @returns { CanvasGradient } New **CanvasGradient** object used to create a gradient on the canvas.
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
   * Sets the filter for an image. Any number of filters can be combined. This attribute is
   * write-only. You can set its value through an assignment statement, but cannot obtain its
   * current value through a read operation. If you attempt to read its current value,
   * **undefined** will be returned.
   *
   * Available values are as follows:
   *
   * - **'none'**: no filter effect.
   * - **'blur(\<length>)'**: applies the Gaussian blur to the image. The value must be greater
   *   than or equal to 0. The unit can be px, vp, or rem. The default value is **blur(0px)**.
   * - **'brightness([\<number>\|\<percentage>])'**: applies a linear multiplier to the image to
   *   adjust its brightness. The value can be a number or a percentage, and must be greater than
   *   or equal to 0. The default value is **brightness(1)**.
   * - **'contrast([\<number>\|\<percentage>])'**: adjusts the contrast of the image. The value
   *   can be a number or a percentage, and must be greater than or equal to 0. The default value
   *   is **contrast(1)**.
   * - **'grayscale([\<number>\|\<percentage>])'**: converts the image to grayscale. The value can
   *   be a number or a percentage, and must be within the range of [0, 1]. The default value is
   *   **grayscale(0)**.
   * - **'hue-rotate(\<angle>)'**: applies hue rotation to the image. The value ranges from
   *   **0deg** to **360deg**. The default value is **hue-rotate(0deg)**.
   * - **'invert([\<number>\|\<percentage>])'**: inverts the input image. The value can be a number
   *   or a percentage, and must be within the range of [0, 1]. The default value is
   *   **invert(0)**.
   * - **'opacity([\<number>\|\<percentage>])'**: adjusts the opacity of the image. The value can be
   *   a number or a percentage, and must be within the range of [0, 1]. The default value is
   *   **opacity(1)**.
   * - **'saturate([\<number>\|\<percentage>])'**: adjusts the saturation of the image. The value
   *   can be a number or a percentage, and must be greater than or equal to 0. The default value
   *   is **saturate(1)**.
   * - **'sepia([\<number>\|\<percentage>])'**: converts the image to sepia. The value can be a
   *   number or a percentage, and must be within the range of [0, 1]. The default value is
   *   **sepia(0)**.
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
   * Creates a blank **ImageData** object of a specified size. This API involves
   * time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { number } sw - Width of the **ImageData** object.<br>Invalid values **undefined**,
   *     **null**, **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the **ImageData** object.<br>Invalid values **undefined**,
   *     **null**, **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
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
   * Creates an **ImageData** object with the same width and height of an existing **ImageData**
   * object. This API involves time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { ImageData } imageData - Existing **ImageData** object.<br>Values **undefined** and
   *     **null** are treated as **ImageData** with its width and height set to **0**.
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
   * Obtains the **ImageData** object created with the pixels within the specified area on the
   * canvas. This API involves time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { number } sx - X-coordinate of the top-left corner of the output area.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sy - Y-coordinate of the top-left corner of the output area.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sw - Width of the output area.<br>Invalid values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the output area.<br>Invalid values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
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
   * Obtains the **PixelMap** object created with the pixels within the specified area on the
   * canvas. This API involves time-consuming memory copy. Therefore, avoid frequent calls to it.
   *
   * @param { number } sx - X-coordinate of the top-left corner of the output area.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sy - Y-coordinate of the top-left corner of the output area.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number } sw - Width of the output area.<br>Invalid values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number } sh - Height of the output area.<br>Invalid values **undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as **0**.<br>Default unit: vp
   * @returns { PixelMap } **PixelMap** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap;

  /**
   * Puts an **ImageData** object onto a rectangular area on the canvas.
   *
   * @param { ImageData } imageData - **ImageData** object with pixels to put onto the canvas.<br>
   *     **undefined** and **null** are treated as invalid values and no rendering will be performed.
   * @param { number | string } dx - X-axis offset of the rectangular area on the canvas.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dy - Y-axis offset of the rectangular area on the canvas.<br>
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
   * Fills the new rectangular area with the **ImageData** data after cropping.
   *
   * @param { ImageData } imageData - **ImageData** object with pixels to put onto the canvas.<br>
   *     **undefined** and **null** are treated as invalid values and no rendering will be performed.
   * @param { number | string } dx - X-axis offset of the rectangular area on the canvas.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dy - Y-axis offset of the rectangular area on the canvas.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dirtyX - X-axis offset of the upper left corner of the rectangular
   *     area relative to that of the source image.<br>Invalid values **undefined**, **null**, **NaN**,
   *     and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number | string } dirtyY - Y-axis offset of the upper left corner of the rectangular
   *     area relative to that of the source image.<br>Invalid values **undefined**, **null**, **NaN**,
   *     and **Infinity** are treated as **0**.<br>Default unit: vp
   * @param { number | string } dirtyWidth - Width of the rectangular area to crop the source image.<br>
   *     Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as **0**.<br>
   *     Default unit: vp
   * @param { number | string } dirtyHeight - Height of the rectangular area to crop the source image.<br>
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
   * Indicates whether to apply image smoothing adjustments when drawing images. The value
   * **true** means to enable smoothing, and **false** means to disable it. This attribute is
   * write-only. You can set its value through an assignment statement, but cannot obtain its
   * current value through a read operation. If you attempt to read its current value,
   * **undefined** will be returned.
   *
   * Default value: **true**
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
   * Sets the image smoothing quality when **imageSmoothingEnabled** is set to **true**.
   * This attribute is write-only. You can set its value through an assignment statement, but
   * cannot obtain its current value through a read operation. If you attempt to read its
   * current value, **undefined** will be returned. For details, see
   * {@link ImageSmoothingQuality}.
   *
   * Default value: **"low"**
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
   * Sets the line caps. For details, see {@link CanvasLineCap}.
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
   * Sets the dashed line offset of the canvas. The value is of the float type. This attribute
   * takes effect only when **setLineDash** is set. This attribute is write-only. You can set
   * its value through an assignment statement, but cannot obtain its current value through a
   * read operation. If you attempt to read its current value, **undefined** will be returned.
   *
   * In versions earlier than API version 18, if **NaN** or **Infinity** is set, dashed lines
   * are rendered as solid lines. In API version 18 and later versions, if **NaN** or
   * **Infinity** is set, the current API does not take effect, and dashed lines are rendered
   * normally.
   *
   * Default value: **0.0**
   *
   * Default unit: vp
   *
   * Invalid values **NaN** and **Infinity** are treated as the default value.
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
   * Sets the line join. This attribute is write-only. You can set its value through an assignment
   * statement, but cannot obtain its current value through a read operation. If you attempt to read
   * its current value, **undefined** will be returned. For details, see {@link CanvasLineJoin}.
   * <br>Available values are as follows:
   * <br>- **'round'**: The shape used to join line segments is a sector, whose radius at the rounded
   * corner is equal to the line width.
   * <br>- **'bevel'**: The shape used to join line segments is a triangle. The rectangular corner
   * of each line is independent.
   * <br>- **'miter'**: The shape used to join line segments has a mitered corner by extending the
   * outside edges of the lines until they meet. You can view the effect of this attribute in
   * **miterLimit**.
   * <br>Default value: **'miter'**
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
   * Sets the line width. This attribute is write-only. You can set its value through an assignment
   * statement, but cannot obtain its current value through a read operation. If you attempt to read
   * its current value, **undefined** will be returned.
   *
   * Default value: **1** (px)
   *
   * Default unit: vp
   *
   * The value does not support **0** or negative numbers. **0**, negative numbers,
   * and **NaN** are handled as the default value. The value **Infinity** is invalid and
   * no drawing is performed.
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
   * Sets the miter limit, which specifies the distance between the inner and outer angles
   * at line joins. This attribute takes effect only when **lineJoin** is set to **miter**.
   * This attribute is write-only. You can set its value through an assignment statement,
   * but cannot obtain its current value through a read operation. If you attempt to read
   * its current value, **undefined** will be returned.
   *
   * Default value: **10px**
   *
   * Unit: px
   *
   * The value of **miterLimit** cannot be **0** or a negative number. Values of **0**,
   * negative numbers, and **NaN** are handled with the default value. **Infinity** will
   * cause an exception on the **miterLimit** attribute.
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
   * Obtains the dash line style.
   *
   * @returns { number[] } Interval of alternate line segments and the length of spacing.<br>
   *     Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getLineDash(): number[];

  /**
   * Sets the dash line style.
   *
   * @param { number[] } segments - An array of numbers that specify distances to alternately draw
   *     a line and a gap.<br>**undefined** and **null** are treated as invalid values.<br>
   *     Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setLineDash(segments: number[]): void;

  /**
   * Clears the content in a rectangle on the canvas.
   *
   * @param { number } x - X-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clearRect(x: number, y: number, w: number, h: number): void;

  /**
   * Fills a rectangle on the canvas.
   *
   * @param { number } x - X-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillRect(x: number, y: number, w: number, h: number): void;

  /**
   * Draws an outlined rectangle on the canvas without filling its interior.
   *
   * @param { number } x - X-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the rectangle's top-left corner.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } w - Width of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @param { number } h - Height of the rectangle.<br>**undefined**, **null**, **NaN**, and **Infinity**
   *     are treated as invalid values and no rendering will be performed.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeRect(x: number, y: number, w: number, h: number): void;

  /**
   * Sets the blur level for drawing shadows. This attribute is write-only. You can set its
   * value through an assignment statement, but cannot obtain its current value through a read
   * operation. If you attempt to read its current value, **undefined** will be returned.
   *
   * Blur level. A larger value produces a greater blur effect. The value is of float type and
   * must be greater than or equal to 0.
   *
   * Default value: **0.0**
   *
   * Unit: px
   *
   * The value of **shadowBlur** cannot be a negative number. A negative number, **NaN**, and
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
   * Sets the shadow color. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation. If you
   * attempt to read its current value, **undefined** will be returned.
   *
   * For details about the color format, see the description for the string type in
   * [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor).
   *
   * Default value: **'#00000000'** (transparent black)
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
   * Sets the horizontal offset between the drawn shadow and the original object. This
   * attribute is write-only. You can set its value through an assignment statement, but cannot
   * obtain its current value through a read operation. If you attempt to read its current
   * value, **undefined** will be returned.
   *
   * Default value: **0.0**
   *
   * Default unit: vp
   *
   * Invalid values **NaN** and **Infinity** are treated as the default value.
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
   * Sets the vertical offset between the drawn shadow and the original object. This attribute
   * is write-only. You can set its value through an assignment statement, but cannot obtain its
   * current value through a read operation. If you attempt to read its current value,
   * **undefined** will be returned.
   *
   * Default value: **0.0**
   *
   * Default unit: vp
   *
   * Invalid values **NaN** and **Infinity** are treated as the default value.
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
   * Saves all states of the canvas in the stack. This API is usually called when the drawing
   * state needs to be saved.
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
   * Draws filled text on the canvas.
   *
   * @param { string } text - Text to draw.<br>**undefined** and **null** are treated as invalid values
   *     and no rendering will be performed.
   * @param { number } x - X-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
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
   * Returns a **TextMetrics** object used to obtain the width of specified text. Note that the width
   * obtained may vary by device.
   *
   * @param { string } text - Text to measure.<br>If the input value is **undefined** or **null**, the
   *     value is calculated based on "undefined" or "null".
   * @returns { TextMetrics } **TextMetrics** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  measureText(text: string): TextMetrics;

  /**
   * Draws stroked text on the canvas.
   *
   * @param { string } text - Text to draw.<br>**undefined** and **null** are treated as invalid values
   *     and no rendering will be performed.
   * @param { number } x - X-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
   *     Default unit: vp
   * @param { number } y - Y-coordinate of the start point for text rendering.<br>**undefined**, **null**,
   *     **NaN**, and **Infinity** are treated as invalid values and no rendering will be performed.<br>
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
   * Sets the text direction. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation. If you
   * attempt to read its current value, **undefined** will be returned.
   *
   * For details, see {@link CanvasDirection}.
   *
   * Default value: **"inherit"**
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
   * Sets the text font. This attribute is write-only. You can set its value through an
   * assignment statement, but cannot obtain its current value through a read operation.
   * If you attempt to read its current value, **undefined** will be returned.
   *
   * Syntax: ctx.font = 'font-style font-weight font-size font-family'
   *
   * - (Optional) **font-style**: font style. Available values are **normal** and **italic**.
   *
   * - (Optional) **font-weight**: font weight. Available values are as follows: **normal**,
   *   **bold**, **bolder**, **lighter**, **100**, **200**, **300**, **400**, **500**, **600**,
   *   **700**, **800**, **900**.
   *
   * - (Optional) **font-size**: font size and line height. The unit can be px or vp and must
   *   be specified.
   *
   * - (Optional) **font-family**: font family. Available values are **sans-serif**,
   *   **serif**, and **monospace**.
   *
   * Starting from API version 20, this API is used to set registered custom fonts (the DevEco
   * Studio Previewer does not support custom fonts). You can register a custom font in either
   * of the following ways:
   *
   * Register a custom font by calling the asynchronous API
   * this.uiContext.getFont().[registerFont](docroot://reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont)
   * of ArkUI. Immediate rendering after calling this API may result in the custom font not
   * taking effect.
   *
   * Directly call the fontCollection.[loadFontSync](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#loadfontsync)
   * API of the font engine to register the custom font. In this case, the **fontCollection**
   * instance must be **text.FontCollection.getGlobalInstance()** because the component loads
   * fonts from this instance by default. If you use another instance, the custom font may not
   * take effect.
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
   * Sets the text alignment type. This attribute is write-only. You can set its value through
   * an assignment statement, but cannot obtain its current value through a read operation.
   * If you attempt to read its current value, **undefined** will be returned.
   *
   * In the **ltr** layout mode, the value **'start'** equals **'left'**. In the **rtl** layout
   * mode, the value **'start'** equals **'right'**.
   *
   * Default value: **'left'**
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
   * Sets the horizontal alignment baseline for text rendering. This attribute is write-only.
   * You can set its value through an assignment statement, but cannot obtain its current value
   * through a read operation. If you attempt to read its current value, **undefined** will be
   * returned.
   *
   * Default value: **'alphabetic'**
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
   * Obtains the current transformation matrix being applied to the context.
   *
   * @returns { Matrix2D } Current transformation matrix applied to the context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getTransform(): Matrix2D;

  /**
   * Resets the current transform to the identity matrix.
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
   * Rotates a canvas clockwise around its coordinate axes.
   *
   * @param { number } angle - Clockwise rotation angle. You can convert degrees to radians using the
   *    following formula: degree * Math.PI/180.<br>In versions earlier than API version 18, values
   *    **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *    rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *    version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *    effect, and other drawing APIs with valid arguments continue to render correctly.<br>Unit: radian
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotate(angle: number): void;

  /**
   * Scales the canvas based on the given scale factors.
   *
   * @param { number } x - Horizontal scale factor.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API
   *     for rendering. Values **0**, **null**, **undefined**, and negative numbers cause the current
   *     API to have no effect. Since API version 18, **NaN**, **Infinity**, **0**, **null**,
   *     **undefined**, and negative numbers cause the current API to have no effect, and other drawing
   *     APIs with valid arguments continue to render correctly.
   * @param { number } y - Vertical scaling factor. Negative numbers are not supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure to
   *     call the drawing APIs following this API for rendering. Values **0**, **null**, **undefined**,
   *     and negative numbers cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **0**, **null**, **undefined**, and negative numbers cause the current API to
   *     have no effect, and other drawing APIs with valid arguments continue to render correctly.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(x: number, y: number): void;

  /**
   * Resets the existing transformation matrix and creates a new transformation matrix by
   * using the same parameters as the **transform()** API.
   *
   * > **NOTE**
   * >
   * > The coordinates of each point in the graph after transformation can be calculated
   * > using the following formula:
   * >
   * > **x** and **y** represent coordinates before transformation, and **x'** and **y'**
   * > represent coordinates after transformation.
   * >
   * > - x' = a * x + c * y + e
   * >
   * > - y' = b * x + d * y + f
   *
   * @param { number } a - **scaleX**: horizontal scaling value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } b - **skewY**: vertical skewing value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } c - **skewX**: horizontal skewing value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } d - **scaleY**: vertical scaling value. A negative value is supported.<br>
   *     In versions earlier than API version 18, values **NaN** and **Infinity** cause the failure
   *     to call the drawing APIs following this API for rendering. Values **null** and **undefined**
   *     cause the current API to have no effect. Since API version 18, **NaN**, **Infinity**,
   *     **null**, or **undefined** causes the current API to have no effect, and other drawing APIs
   *     with valid arguments continue to render correctly.
   * @param { number } e - **translateX**: horizontal translation distance. A negative value is
   *     supported.<br>In versions earlier than API version 18, values **NaN** and **Infinity** cause
   *     the failure to call the drawing APIs following this API for rendering. Values **null** and
   *     **undefined** cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     drawing APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } f - **translateY**: vertical translation distance. A negative value is
   *     supported.<br>In versions earlier than API version 18, values **NaN** and **Infinity** cause
   *     the failure to call the drawing APIs following this API for rendering. Values **null** and
   *     **undefined** cause the current API to have no effect. Since API version 18, **NaN**,
   *     **Infinity**, **null**, or **undefined** causes the current API to have no effect, and other
   *     drawing APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Resets the current transformation to the identity matrix, and then creates a new
   * transformation matrix based on the specified **Matrix2D** object.
   *
   * @param { Matrix2D } [transform] - Transformation matrix.<br>**undefined** and **null**
   *     are treated as invalid values.<br>Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(transform?: Matrix2D): void;

  /**
   * Defines a transformation matrix. To transform a graph, you only need to set parameters of
   * the matrix. The coordinates of the graph are multiplied by the matrix values to obtain new
   * coordinates of the transformed graph. You can use the matrix to implement multiple transform
   * effects.
   *
   * > **NOTE**
   * >
   * > The coordinates of each point in the graph after transformation can be calculated
   * > using the following formula:
   * >
   * > **x** and **y** represent coordinates before transformation, and **x'** and **y'**
   * > represent coordinates after transformation.
   * >
   * > - x' = a * x + c * y + e
   * >
   * > - y' = b * x + d * y + f
   *
   * @param { number } a - Cell at row 1, column 1 of the transformation matrix. **scaleX**:
   *     horizontal scaling value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.
   * @param { number } b - Cell at row 2, column 1 of the transformation matrix. **skewY**:
   *     vertical skewing value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.
   * @param { number } c - Cell at row 1, column 2 of the transformation matrix. **skewX**:
   *     horizontal skewing value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.
   * @param { number } d - Cell at row 2, column 2 of the transformation matrix. **scaleY**:
   *     vertical scaling value. A negative value is supported.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.
   * @param { number } e - Cell at row 1, column 3 of the transformation matrix. **translateX**:
   *     horizontal translation distance. A negative value is supported.<br>In versions earlier than API
   *     version 18, values **NaN** and **Infinity** cause the failure to call the drawing APIs following
   *     this API for rendering. Values **null** and **undefined** cause the current API to have no effect.
   *     Since API version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to
   *     have no effect, and other drawing APIs with valid arguments continue to render correctly.<br>
   *     Default unit: vp
   * @param { number } f - Cell at row 2, column 3 of the transformation matrix. **translateY**:
   *     vertical translation distance. A negative value is supported.<br>In versions earlier than API
   *     version 18, values **NaN** and **Infinity** cause the failure to call the drawing APIs following
   *     this API for rendering. Values **null** and **undefined** cause the current API to have no effect.
   *     Since API version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to
   *     have no effect, and other drawing APIs with valid arguments continue to render correctly.<br>
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
   * Moves the origin of the coordinate system.
   *
   * @param { number } x - Distance to translate on the x-axis.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @param { number } y - Distance to translate on the y-axis.<br>In versions earlier than API version 18,
   *     values **NaN** and **Infinity** cause the failure to call the drawing APIs following this API for
   *     rendering. Values **null** and **undefined** cause the current API to have no effect. Since API
   *     version 18, **NaN**, **Infinity**, **null**, or **undefined** causes the current API to have no
   *     effect, and other drawing APIs with valid arguments continue to render correctly.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(x: number, y: number): void;

  /**
   * Draws the input **PixelMap** object on the canvas.
   * The example is the same as that of **getPixelMap**.
   *
   * @param { PixelMap } [value] - **PixelMap** object that contains pixel values.<br>
   *     **undefined** and **null** are treated as invalid values and no rendering will be
   *     performed.<br>Default value: **null**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setPixelMap(value?: PixelMap): void;

  /**
   * Displays the specified **ImageBitmap** object.
   *
   * @param { ImageBitmap } bitmap - **ImageBitmap** object to display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;

  /**
   * Saves this layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  saveLayer(): void;

  /**
   * Restores the image transformation and cropping state to the state before **saveLayer**,
   * and then draws the layer onto the canvas. For the sample code, see the code for **saveLayer**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreLayer(): void;

  /**
   * Resets this **CanvasRenderingContext2D** object to its default state and clears the background buffer,
   * drawing state stack, defined paths, and styles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reset(): void;

  /**
   * Sets whether to enable anti-aliasing for drawing graphics and text. Setting this API
   * overrides the anti-aliasing effect in [RenderingContextSettings](#renderingcontextsettings).
   * If this API is not specified, the default value is **undefined** and the anti-aliasing effect
   * in [RenderingContextSettings](#renderingcontextsettings) is used.
   *
   * Whether to enable anti-aliasing for drawing graphics and text.
   *
   * **true**: Anti-aliasing is enabled. **false**: Anti-aliasing is disabled.
   *
   * When the value is **undefined**, the anti-aliasing effect in
   * [RenderingContextSettings](#renderingcontextsettings) is used.
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
 * After the **CanvasRenderingContext2D** object is bound to the **Canvas** component, you can draw
 * shapes, texts, and images on the **Canvas** component.
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
 * > [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md)
 * > or [Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md):
 * > [beginPath](#beginpath), [moveTo](#moveto), [lineTo](#lineto), [closePath](#closepath),
 * > [bezierCurveTo](#beziercurveto), [quadraticCurveTo](#quadraticcurveto), [arc](#arc),
 * > [arcTo](#arcto), [ellipse](#ellipse), [rect](#rect), and [roundRect](#roundrect20).
 * >
 * > * When the width or height of the **Canvas** component exceeds 8000 px, rendering via the CPU
 * > causes significant performance degradation.
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
   * @param { string } type - Image format.
   *     <br>The options are **image/png**, **image/jpeg**, and **image/webp**.
   *     <br>Invalid values **undefined** and **null** are treated as the default value.
   *     <br>Default value: **image/png**
   * @param { any } quality - Image quality, which ranges from 0 to 1, when the image format
   *     is **image/jpeg** or **image/webp**. If the set value is beyond the value range,
   *     the default value **0.92** is used.
   *     <br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated
   *     as the default value.
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
   * Before use, set [enableAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md#enableanalyzer12)
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
   * @param { ImageAnalyzerConfig } config - Settings of the AI analyzer.<br>**undefined** and
   *     **null** are treated as invalid values.
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
   * @param { RenderingContextSettings } settings - Settings of the **CanvasRenderingContext2D**
   *      object. For details, see [RenderingContextSettings](#renderingcontextsettings).
   *      <br>If the value is **undefined** or **null**, the default value of
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
   * @param { RenderingContextSettings } settings - Settings of the **CanvasRenderingContext2D**
   *      object. For details, see [RenderingContextSettings](#renderingcontextsettings).
   *      <br>If the value is **undefined** or **null**, the default value of
   *      [RenderingContextSettings](#renderingcontextsettings) is used.
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **CanvasRenderingContext2D** object.
   *      The value cannot be dynamically changed once set.
   *      <br>Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.
   *      <br>Default value: **DEFAULT**.
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
   * > [canvas](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#canvas13)
   * > object is accessible.<br>
   * > Avoid performing drawing operations in the **onAttach** callback. Make sure the
   * > **Canvas** component has completed its
   * > [onReady](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md#events)
   * > event before performing any drawing.<br>
   * > The **onAttach** callback is triggered when:<br>
   * > 1. A **Canvas** component is created and bound to a **CanvasRenderingContext2D**
   * > object.<br>
   * > 2. A **CanvasRenderingContext2D** object is bound to a new **Canvas** component.
   *
   * @param { 'onAttach' } type - Event type, which is **'onAttach'** in this case.<br>
   *     **undefined** and **null** are treated as invalid values.
   * @param { Callback<void> } callback - Callback triggered when the **CanvasRenderingContext2D**
   *     object is bound to the **Canvas** component.<br>**undefined** and **null** are treated as
   *     invalid values.
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
   * @param { 'onAttach' } type - Event type, which is **'onAttach'** in this case.<br>
   *     **undefined** and **null** are treated as invalid values.
   * @param { Callback<void> } [callback] - If this parameter is left empty, all callbacks
   *     triggered after the **CanvasRenderingContext2D** object is bound to the **Canvas**
   *     component are unsubscribed.<br>If this parameter is not left empty, the callback
   *     corresponding to the bind event is unsubscribed.<br>**undefined** and **null** are
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
   * @param { 'onDetach' } type - Event type, which is **'onDetach'** in this case.<br>
   *     **undefined** and **null** are treated as invalid values.
   * @param { Callback<void> } callback - Callback triggered when the **CanvasRenderingContext2D**
   *     object is unbound from the **Canvas** component.<br>**undefined** and **null** are treated
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
  on(type: 'onDetach', callback: Callback<void>): void;

  /**
   * Unsubscribes from the event when a **CanvasRenderingContext2D** object is unbound from
   * a **Canvas** component.
   *
   * @param { 'onDetach' } type - Event type, which is **'onDetach'** in this case.<br>
   *     **undefined** and **null** are treated as invalid values.
   * @param { Callback<void> } [callback] - If this parameter is left empty, all callbacks
   *     triggered after the **CanvasRenderingContext2D** object is unbound from the **Canvas**
   *     component are unsubscribed.<br>If this parameter is not left empty, the callback
   *     corresponding to the unbind event is unsubscribed.<br>**undefined** and **null** are
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
  off(type: 'onDetach', callback?: Callback<void>): void;

  /**
   * Obtains a **CanvasRenderingContext2D** object from a **DrawingRenderingContext** object.
   * This **CanvasRenderingContext2D** object is bound to the same **Canvas** component as the
   * input **DrawingRenderingContext** object.
   *
   * > **NOTE**
   * >
   * > - The **CanvasRenderingContext2D** object obtained via this API cannot be used as a
   * > parameter to create a [Canvas](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)
   * > component. Otherwise, the application crashes.
   * >
   * > - If the input **DrawingRenderingContext** object is not bound to a **Canvas** component,
   * > an error code is returned.
   *
   * @param { DrawingRenderingContext } drawingContext - An object of the **DrawingRenderingContext**
   *     type.<br>**undefined** and **null** are treated as invalid values.
   * @param { RenderingContextOptions } [options] - Configuration options of the rendering context.
   *     <br>Default value: **{ antialias: false }**
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
 * a canvas. Rendering offscreen onto a canvas is a process where content to draw onto the canvas
 * is first drawn in the buffer, and then converted into a picture, and finally the picture is drawn
 * on the canvas. Since off-screen rendering utilizes the CPU, its performance is relatively slow.
 * Therefore, it should be avoided in scenarios where drawing speed is a critical requirement.
 *
 * > **NOTE**
 * >
 * > **OffscreenCanvasRenderingContext2D** cannot be used in **ServiceExtensionAbility**. It is
 * > recommended that you use the
 * > [drawing module](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)
 * > for offscreen rendering in **ServiceExtensionAbility**.
 * >
 * > The following path-related APIs apply only to paths created within
 * > **OffscreenCanvasRenderingContext2D** and do not affect paths defined in
 * > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
 * > or [Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md):
 * > [beginPath](#beginpath), [moveTo](#moveto), [lineTo](#lineto), [closePath](#closepath),
 * > [bezierCurveTo](#beziercurveto), [quadraticCurveTo](#quadraticcurveto), [arc](#arc),
 * > [arcTo](#arcto), [ellipse](#ellipse), [rect](#rect), and [roundRect](#roundrect20).
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
   * @param { string } type - Image format.
   *     <br>The options are **image/png**, **image/jpeg**, and **image/webp**.
   *     <br>Invalid values **undefined** and **null** are treated as the default value.
   *     <br>Default value: **image/png**
   * @param { any } quality - Image quality, which ranges from 0 to 1, when the image format
   *     is **image/jpeg** or **image/webp**. If the set value is beyond the value range,
   *     the default value **0.92** is used.
   *     <br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated
   *     as the default value.
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
   * @param { number } width - Width of the offscreen canvas.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { number } height - Height of the offscreen canvas.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { RenderingContextSettings } settings - Settings of the
   *     **OffscreenCanvasRenderingContext2D** object.<br>The value **undefined** is treated as
   *     the default value of [RenderingContextSettings](#renderingcontextsettings).<br>
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
   * @param { number } width - Width of the offscreen canvas.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { number } height - Height of the offscreen canvas.<br>Default unit: vp<br>
   *     Invalid values **NaN** and **Infinity** are treated as invalid.
   * @param { RenderingContextSettings } settings - Settings of the
   *     **OffscreenCanvasRenderingContext2D** object.<br>The value **undefined** is treated as
   *     the default value of [RenderingContextSettings](#renderingcontextsettings).<br>
   *     Default value: **null**
   * @param { LengthMetricsUnit } [unit] - Unit of the **OffscreenCanvasRenderingContext2D** object.
   *     The value cannot be dynamically changed once set.<br>
   *     Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.<br>
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
 * [Canvas](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)
 * component or **CanvasRenderingContext2D** object is used, rendering, animation,
 * and user interaction usually occur on the main thread of the application.
 * Calculations related to canvas animation and rendering may affect application
 * performance. **OffscreenCanvas** allows for rendering off the screen. This means
 * that some tasks can be run in a separate thread to reduce the load on the main thread.
 *
 * > **NOTE**
 * >
 * > **OffscreenCanvas** cannot be used in ServiceExtensionAbility. It is recommended
 * > that you use the
 * > [drawing module](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)
 * > for offscreen drawing in ServiceExtensionAbility.
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
   * Height of the offscreen canvas.
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
  height: number;

  /**
   * Width of the offscreen canvas.
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
  width: number;

  /**
   * Creates an **ImageBitmap** object from the most recently rendered image of the
   * offscreen canvas.
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
   * @param { "2d" } contextType - Type of the drawing context of the offscreen canvas.
   *     The value can only be **"2d"**.<br>
   *     **"2d"**: creates an **OffscreenCanvasRenderingContext2D** object that represents
   *     a two-dimensional rendering context.<br>
   *     The values **undefined** and **null** are considered as invalid values,
   *     and **undefined** is returned.
   * @param { RenderingContextSettings } options - Parameters of the
   *     **OffscreenCanvasRenderingContext2D** object. For details, see
   *     [RenderingContextSettings](#renderingcontextsettings).<br>
   *     **undefined** and **null** values are processed based on the default value of
   *     [RenderingContextSettings](#renderingcontextsettings).<br>
   *     Default value: **null**.
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
   * Constructs an OffscreenCanvas for creating an offscreen canvas object.
   *
   * @param { number } width - Width of the offscreen canvas.<br>
   *     **NaN** and **Infinity** are treated as invalid values.<br>Default unit: vp
   * @param { number } height - Height of the offscreen canvas.<br>
   *     **NaN** and **Infinity** are treated as invalid values.<br>Default unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number);

  /**
   * Constructs an **OffscreenCanvas** object for creating an offscreen canvas object.
   * The unit mode is configurable for the **OffscreenCanvas** object.
   *
   * @param { number } width - Width of the offscreen canvas.<br>
   *     **NaN** and **Infinity** are treated as invalid values.<br>Default unit: vp
   * @param { number } height - Height of the offscreen canvas.<br>
   *     **NaN** and **Infinity** are treated as invalid values.<br>Default unit: vp
   * @param { LengthMetricsUnit } [unit] - Unit mode of the OffscreenCanvas object.
   *     The value cannot be dynamically changed once set. The configuration method is the same
   *     as that of
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).<br>
   *     Invalid values **NaN** and **Infinity** are treated as the default value.<br>
   *     Default value: **DEFAULT**.
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
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md).
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
   * Indicates the unit mode employed by Canvas during drawing.
   * <br>It can only be set when creating the **Canvas** component and cannot be modified afterwards.
   * <br>Default value: **LengthMetricsUnit.DEFAULT**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  unit?: LengthMetricsUnit;

  /**
   * AI image analysis options. You can configure the analysis type or bind an analyzer controller
   * through this parameter.
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
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - 2D rendering context
   *     for a canvas.
   *     <br>**CanvasRenderingContext2D**: Canvases cannot share one **CanvasRenderingContext2D** object.
   *     **DrawingRenderingContext**: Canvases cannot share one **DrawingRenderingContext** object.
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
   * Creates a **Canvas** component. You can specify a **CanvasRenderingContext2D** or
   * **DrawingRenderingContext** object, along with AI image analysis options.
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - 2D rendering context
   *     for a canvas.
   *     <br>**CanvasRenderingContext2D**: Canvases cannot share one **CanvasRenderingContext2D** object.
   *     **DrawingRenderingContext**: Canvases cannot share one **DrawingRenderingContext** object.
   *     <br>If the value is **null** or **undefined**, **context** is considered unset.
   * @param { ImageAIOptions } imageAIOptions - AI image analysis options. You can configure the
   *     analysis type or bind an analyzer controller through this parameter.
   *     <br>If the value is **null** or **undefined**, the default value of **ImageAIOptions** is used.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute;

  /**
   * Creates a **Canvas** component that does not cache commands using **CanvasParams**.
   * The maximum allowed size cannot exceed 10000 px × 10000 px. If the size exceeds this limit,
   * the **Canvas** component will fail to be created.
   *
   * > **NOTE**
   * >
   * > * The **Canvas** component created using this API will return a DrawingRenderingContext
   * > object in the input parameter of the onReady callback, which can be used for drawing on the
   * > **Canvas** component.
   * >
   * > * The **Canvas** component created using this API will not respond to drawing commands
   * > when it is not visible.
   * >
   * > * Scenarios where the component is not visible mainly include: the page containing the
   * > component moves to the background, the component slides outside the window, or the
   * > [visibility](@link CommonMethod#visibility)
   * > attribute is set to hidden. This does not include scenarios where the component is obscured
   * > by other components or windows.
   *
   * @param { CanvasParams } params - Construction parameters of the **Canvas** component.
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
 * [universal attributes](@link common),
 * the following attributes are supported.
 *
 * The [universal events](@link common) are supported.
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
   * Triggered when the **Canvas** component is initialized or when its size changes.
   *
   * When this event is triggered, the canvas is cleared. The width and height of the **Canvas**
   * component are then determined and can be obtained, allowing you to use APIs related to the
   * **Canvas** component for drawing. If only the position of the canvas changes, only the
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered, not the **onReady** event. The
   * [onAreaChange]{@link CommonMethod#onAreaChange}
   * event is triggered after the **onReady** event.
   *
   * @param { VoidCallback } event - Triggered when the **Canvas** component is initialized or
   *     when its size changes.
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
   * Triggered when the **Canvas** component is initialized or when its size changes.
   *
   * When this event is triggered, the canvas is cleared. The width and height of the **Canvas**
   * component are then determined and can be obtained, allowing you to use APIs related to the
   * **Canvas** component for drawing. If only the position of the canvas changes, only the
   * [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)
   * event is triggered, not the **onReady** event. The
   * [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)
   * event is triggered after the **onReady** event.
   *
   * @param { Callback<DrawingRenderingContext | undefined> | undefined } event - Triggered when
   *     the **Canvas** component is initialized or when its size changes.
   *     <br>Constraints on input parameters of the Callback<DrawingRenderingContext | undefined> type:
   *     <br>1. Only **Canvas** components created using [CanvasParams]{@link CanvasParams} will return
   *     a **DrawingRenderingContext** object in this callback; otherwise, **undefined** is returned.
   *     <br>2. The **DrawingRenderingContext** object returned by this callback must not be used as
   *     a parameter to create **Canvas** components, as doing so will cause the application to crash.
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
   * Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition,
   * and object lookup.
   *
   * For the settings to take effect, this attribute must be used together with
   * [startImageAnalyzer]{@link startImageAnalyzer} and
   * [stopImageAnalyzer]{@link stopImageAnalyzer} of CanvasRenderingContext2D.
   *
   * This attribute cannot be used together with the
   * [overlay]{@link CommonMethod#overlay} attribute.
   * If they are set at the same time, the **CustomBuilder** attribute in **overlay** has no effect.
   * This feature depends on device capabilities.
   *
   * > **NOTE**
   * >
   * > This API can be called within
   * > [attributeModifier]{@link CommonMethod#attributeModifier}
   * > since API version 20.
   *
   * @param { boolean } enable - Whether to enable the AI image analyzer for subject recognition,
   *     text recognition, and object lookup within the component content.
   *     <br>**true**: Enable the AI image analyzer. **false**: Disable the AI analyzer.
   *     <br>The **null** and **undefined** values are handled as the default value.
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

