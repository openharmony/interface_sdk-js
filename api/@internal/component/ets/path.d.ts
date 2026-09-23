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
 * Describes the options of the path.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PathOptions {
  /**
   * Width of the rectangle where the path is located. The value range is ≥ 0.
   *
   * If the value is an abnormal value or is not set, the width is automatically calculated based on the path content.
   *
   * Default unit: vp
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * Height of the rectangle where the path is located. The value range is ≥ 0.
   *
   * If the value is an abnormal value or is not set, the height is automatically calculated based on the path content.
   *
   * Default unit: vp
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;

  /**
   * Command string for path drawing, complying with the
   * [SVG Path Syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax), in px.
   *
   * Default value: empty string
   *
   * An abnormal value is processed as the default value.
   *
   * @type { ?string } [since 7 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  commands?: ResourceStr;
}

/**
 * The **Path** component generates a closed custom shape based on the drawing path, and supports defining complex
 * geometric shapes through the SVG path syntax.
 *
 * > **NOTE**
 * >
 * > Since API version 20, this component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface PathInterface {
  /**
   * Creates a **Path** object instance, which is used to generate a closed custom shape based on the drawing path.
   *
   * @param { object } value [since 7 - 17]
   * @param { PathOptions } [options] - Configuration object of the drawing attributes of the **Path** component.
   *     <br>If this parameter is not set, no drawing attribute is set, and the component is displayed at the default
   *     size. The default width and height are automatically calculated based on the path content.
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect.
   *     <br>**Note:** Since API version 18, the PathOptions parameter must be used in the stage model. [since 18]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: PathOptions): PathAttribute;

  /**
   * Creates a **Path** component, which is used to generate a closed custom shape based on the drawing path.
   *
   * @param { object } value - [since 7 - 17]
   * @param { PathOptions } [options] - Configuration object of the **Path** component drawing attributes.
   *     <br>If this parameter is omitted, no drawing attribute is set, and the component is displayed at the default
   *     size. The default width and height are automatically calculated based on the path content.
   *     <br>Abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect.
   *     <br>**Note:** Since API version 18, when the **PathOptions** parameter is used, it can be used only in the
   *     stage model. [since 18]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: PathOptions): PathAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common} and [universal drawing attributes]{@link ./common}, the
 * following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class PathAttribute extends CommonShapeMethod<PathAttribute> {
  /**
   * Sets the command string that complies with the
   * [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax), in px.
   * The command string determines the drawing shape and trajectory of the path. This attribute can be dynamically set
   * using [attributeModifier]{@link CommonMethod#attributeModifier}. For details about the pixel unit conversion
   * method, see [Pixel Units]{@link ./common}.
   *
   * @param { string } value - Command string for path drawing. It must comply with the
   *     [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax), in
   *     px.
   *     <br>Default value: empty string
   *     <br>Abnormal values **undefined** and **null** are processed as the default value. [since 7 - 19]
   * @param { ResourceStr } value - Command string for path drawing. It must comply with the
   *     [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax), in
   *     px.
   *     <br>Default value: empty string
   *     <br>Abnormal values **undefined** and **null** are processed as the default value. [since 20]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  commands(value: ResourceStr): PathAttribute;
}

/**
 * The **Path** component generates a closed custom shape based on the drawing path, and supports defining complex
 * geometric shapes through the SVG path syntax.
 *
 * > **NOTE**
 * >
 * > Since API version 20, this component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class.
 *
 * ## Child Components
 *
 * None
 *
 * ###### SVG Path Syntax
 *
 * The table below lists the supported SVG path commands.
 *
 * | Command  | Name                              | Parameter                                      | Description                                      |
 * | ---- | -------------------------------- | ---------------------------------------- | ---------------------------------------- |
 * | M    | moveto                           | **x**: x-axis coordinate of the start point.
 * <br>
 * **y**: y-axis coordinate of the start point.                                    | Starts a new subpath at the given (
 * x, y) coordinates. For example, `M 0 0` uses the point (0, 0) as the start point of a new subpath. |
 * | L    | lineto                           | **x**: x-axis coordinate of the end point of the line.
 * <br>
 * **y**: y-axis coordinate of the end point of the line.                                    | Draws a line from the
 * current point to the given (x, y) coordinates, which become the new current point. For example, `L 50 50` draws a
 * line from the current point to the point (50, 50) and uses the point (50, 50) as the start point of a new subpath. |
 * | H    | horizontal lineto                | **x**: X-coordinate of the end point of the horizontal line.                                       | Draws a horizontal line to the given X coordinate. Equivalent to an **L** command with the current Y coordinate. For example, **H 50** draws a horizontal line from the current point to (50, current y).|
 * | V    | vertical lineto                  | **y**: Y-coordinate of the end point of the vertical line.                                       | Draws a vertical line to the given Y coordinate. Equivalent to an **L** command with the current X coordinate. For example, given a current point of (100, 100), the command **V 50** draws a vertical line to the point (100, 50) and then sets (100, 50) as the new current point.|
 * | C    | curveto                          | **x1**: x-coordinate value of the first control point parameter.
 * <br>
 * **y1**: y-coordinate value of the first control point parameter.
 * <br>
 * **x2**: x-coordinate value of the second control point parameter.
 * <br>
 * **y2**: y-coordinate value of the second control point parameter.
 * <br>
 * **x**: x-coordinate value of the end point parameter.
 * <br>
 * **y**: y-coordinate value of the end point parameter.                        | Draws a cubic Bézier curve from the
 * current point to (x, y), using (x1, y1) as the control point of the curve start and (x2, y2) as the control point of
 * the curve end. For example, `C100 100 250 100 250 200 ` draws a cubic Bézier curve from the current point to the
 * point (250, 200) and uses the point (250, 200) as the start point of a new subpath. |
 * | S    | smooth curveto                   | **x2**: x-coordinate value of the second control point parameter.
 * <br>
 * **y2**: y-coordinate value of the second control point parameter.
 * <br>
 * **x**: x-coordinate value of the end point parameter.
 * <br>
 * **y**: y-coordinate value of the end point parameter.                              |Draws a cubic Bézier curve from
 * the current point to (x, y), using (x2, y2) as the control point of the curve end. If the previous command is C or S,
 * the start control point is the reflection of the end control point of the previous command relative to the current
 * point. For example, in `C100 100 250 100 250 200 S400 300 400 200`, the start control point of the second Bézier
 * curve is (250, 300). If there is no previous command or the previous command is not C or S, the first control point
 * coincides with the current point. |
 * | Q    | quadratic Bezier curve          | **x1**: x-coordinate value of the first control point parameter.
 * <br>
 * **y1**: y-coordinate value of the first control point parameter.
 * <br>
 * **x**: x-coordinate value of the end point parameter.
 * <br>
 * **y**: y-coordinate value of the end point parameter.                              | Draws a quadratic Bézier curve
 * from the current point to (x, y), using (x1, y1) as the control point. For example, `Q400 50 600 300 ` draws a
 * quadratic Bézier curve from the current point to the point (600, 300) and uses the point (600, 300) as the start
 * point of a new subpath. |
 * | T    | smooth quadratic Bezier curveto | **x**: x-coordinate value of the end point parameter.
 * <br>
 * **y**: y-coordinate value of the end point parameter.                                    | Draws a quadratic Bézier
 * curve from the current point to (x, y). If the previous command is Q or T, the control point is the reflection of the
 * end control point of the previous command relative to the current point. For example, in `Q400 50 600 300 T1000 300`,
 * the control point of the second Bézier curve is (800, 550). If there is no previous command or the previous command
 * is not Q or T, the first control point coincides with the current point. |
 * | A    | elliptical Arc                   | **rx**: x-axis radius of the ellipse.
 * <br>
 * **ry**: y-axis radius of the ellipse.
 * <br>
 * x-axis-rotation: rotation angle of the ellipse relative to the coordinate system.
 * <br>
 * **large-arc-flag**: flag indicating whether to draw the large arc (1) or the small arc (0).
 * <br>
 * **sweep-flag**: flag indicating whether to draw in the clockwise (1) or counterclockwise (0) direction.
 * <br>
 * **x**: x-coordinate value of the end point parameter.
 * <br>
 * **y**: y-coordinate value of the end point parameter. | Draws an elliptical arc from the current point to (x, y). The
 * size and orientation of the ellipse are defined by the two radii (rx, ry) and **x-axis-rotation**, which indicates
 * how the entire ellipse is rotated relative to the current coordinate system (in degrees). **large-arc-flag** and
 * **sweep-flag** determine how the arc is drawn. |
 * | Z    | closepath                        | none                                     | Closes the current subpath by connecting the current path back to the initial point of the current subpath.            |
 *
 * For example, the command string **commands('M0 20 L50 50 L50 100 Z')** defines a triangle: It starts at (0, 20),
 * draws a line to (50, 50), then to (50, 100), and finally closes the path back to (0, 20).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Path: PathInterface;

/**
 * Defines Path Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const PathInstance: PathAttribute;
