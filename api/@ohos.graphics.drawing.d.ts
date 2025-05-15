/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';
import { Resource } from './global/resource';

/**
 * Provides functions such as 2D graphics rendering, text drawing, and image display.
 *
 * @namespace drawing
 * @syscap SystemCapability.Graphics.Drawing
 * @since 11
 */
declare namespace drawing {
  /**
   * Enumerate blending modes for colors.
   * Blend is a operation that use 4 components(red, green, blue, alpha) to generate
   * a new color from two colors(source, destination).
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  enum BlendMode {
    /**
     * Disable 4 regions(red, green, blue, alpha)
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    CLEAR = 0,
    /**
     * Use components of the source
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SRC = 1,
    /**
     * Use components of the destination
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DST = 2,
    /**
     * The source is placed above the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SRC_OVER = 3,
    /**
     * The Destination is placed above the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DST_OVER = 4,
    /**
     * Use source replaces the destination, and will not exceed the boundaries of the destination
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SRC_IN = 5,
    /**
     * Use destination, and will not exceed the boundaries of the source
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DST_IN = 6,
    /**
     * Source is use in outside of the boundaries of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SRC_OUT = 7,
    /**
     * Destination is use in outside of the boundaries of the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DST_OUT = 8,
    /**
     * Source which overlaps the destination will replaces the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SRC_ATOP = 9,
    /**
     * Destination which overlaps the source will replaces the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DST_ATOP = 10,
    /**
     * Combine regions where source and destination do not overlap.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    XOR = 11,
    /**
     * The sum of the source and destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    PLUS = 12,
    /**
     * All components are multiplied.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    MODULATE = 13,
    /**
     * Multiply the complement values of the background and source color values,
     * and then complement the result.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SCREEN = 14,
    /**
     * Multiplies or screens the colors, depending on destination
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    OVERLAY = 15,
    /**
     * Choose a darker background and source color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DARKEN = 16,
    /**
     * Choose a lighter background and source color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    LIGHTEN = 17,
    /**
     * Brightens destination color to reflect the source color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    COLOR_DODGE = 18,
    /**
     * Darkens destination color to reflect the source color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    COLOR_BURN = 19,
    /**
     * Multiplies or screens the colors, depending on source
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    HARD_LIGHT = 20,
    /**
     * Lightens or Darkens the colors, depending on the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SOFT_LIGHT = 21,
    /**
     * Subtract the darker of the two colors from the brighter color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    DIFFERENCE = 22,
    /**
     * Produces an effect similar to difference mode, but with lower contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    EXCLUSION = 23,
    /**
     * Multiply the source color by the destination color and replace the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    MULTIPLY = 24,
    /**
     * Use the hue of the source and the saturation and brightness of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    HUE = 25,
    /**
     * Use the saturation of the source and the hue and brightness of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    SATURATION = 26,
    /**
     * Use the hue and saturation of the source and the brightness of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    COLOR = 27,
    /**
     * Use the brightness of the source and the hue and saturation of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    LUMINOSITY = 28,
  }

  /**
   * Enumerates direction for adding closed contours.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum PathDirection {
    /**
     * Clockwise direction for adding closed contours.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    CLOCKWISE = 0,

    /**
     * Counter-clockwise direction for adding closed contours.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    COUNTER_CLOCKWISE = 1,
  }

  /**
   * Enumerates fill type of path.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum PathFillType {
    /**
     * Specifies that "inside" is computed by a non-zero sum of signed edge crossings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    WINDING = 0,

    /**
     * Specifies that "inside" is computed by an odd number of edge crossings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    EVEN_ODD = 1,

    /**
     * Same as winding, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INVERSE_WINDING = 2,

    /**
     * Same as evenOdd, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INVERSE_EVEN_ODD = 3,
  }

  /**
  * Enumerate path measure flags for matrix.
  * @enum { number }
  * @syscap SystemCapability.Graphics.Drawing
  * @since 12
  */
  enum PathMeasureMatrixFlags {
    /**
     * Gets position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    GET_POSITION_MATRIX = 0,
    /**
     * Gets tangent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    GET_TANGENT_MATRIX = 1,
    /**
     * Gets both position and tangent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    GET_POSITION_AND_TANGENT_MATRIX = 2,
  }

  /**
   * Provides the definition of the roundRect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class RoundRect {
    /**
     * Creates a simple round rect with the same four corner radii.
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { number } xRadii - Indicates the corner radii on x-axis.
     * @param { number } yRadii - Indicates the corner radii on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(rect: common2D.Rect, xRadii: number, yRadii: number);

    /**
     * Sets the radiusX and radiusY for a specific corner position.
     * @param { CornerPos } pos - Indicates the corner radius position.
     * @param { number } x - Indicates the corner radius on x-axis.
     * @param { number } y - Indicates the corner radius on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setCorner(pos: CornerPos, x: number, y: number): void;

    /**
     * Gets a point with the values of x-axis and y-axis of the selected corner radius.
     * @param { CornerPos } pos - Indicates the corner radius position.
     * @returns { common2D.Point } Returns a point with the values of x-axis and y-axis of the corner radius.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getCorner(pos: CornerPos): common2D.Point;

    /**
     * Translates round rect by (dx, dy).
     * @param { number } dx - Indicates the offsets added to rect left and rect right.
     * @param { number } dy - Indicates the offsets added to rect top and rect bottom.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    offset(dx: number, dy: number): void;
  }

  /**
   * Enumerates of operations when two paths are combined.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum PathOp {
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DIFFERENCE = 0,

    /**
     * Intersect operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INTERSECT = 1,

    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    UNION = 2,

    /**
     * Xor operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    REVERSE_DIFFERENCE = 4,
  }

  /**
   * Enumerates of types of operation for the path.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
  enum PathIteratorVerb {
    /**
     * Move operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    MOVE = 0,

    /**
     * Line operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    LINE = 1,

    /**
     * Quad operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    QUAD = 2,

    /**
     * Conic operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    CONIC = 3,

    /**
     * Cubic operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    CUBIC = 4,

    /**
     * Close operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    CLOSE = 5,

    /**
     * There are no more operations in the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    DONE = CLOSE + 1,
  }

  /**
   * Describes a pathIterator object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
  class PathIterator {
    /**
     * Creates a pathIterator with path.
     * @param { Path } path - the path is used to create PathIterator.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    constructor(path: Path);

    /**
     * Get the next verb in this iterator's path, and fill entries in the point2D array
     * with point data (if any) for that operation, the point2D array size must be 4 or more.
     * The number of pairs of point data supplied in the resulting array depends on the PathIteratorVerb:
     * <ul>
     * <li>MOVE: 1 pair</li>
     * <li>LINE: 2 pairs</li>
     * <li>QUAD: 3 pairs</li>
     * <li>CONIC: 3.5 pairs</li>
     * <li>CUBIC: 4 pairs</li>
     * <li>CLOSE: 0 pairs</li>
     * <li>DONE: 0 pairs</li>
     * </ul>
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { number } offset - Indicates the offset into the array where entries should be placed. The default value is 0.
     * @returns { PathIteratorVerb } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb;

    /**
     * Get the next verb in the iteration, or DONE if there are no more elements.
     * @returns { PathIteratorVerb } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    peek(): PathIteratorVerb;

    /**
     * Query whether there are more elements in the iterator.
     * @returns { boolean } Returns true if there are more elements to be iterated through, false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    hasNext(): boolean;
  }

  /**
   * Describes a path object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Path {
    /**
     * Creates a Path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor();

    /**
     * Creates a Path from other path.
     * @param { Path } path - the path to copy content from.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(path: Path);

    /**
     * Sets the start point of a path
     * @param { number } x - Indicates the x coordinate of the start point.
     * @param { number } y - Indicates the y coordinate of the start point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    moveTo(x: number, y: number): void;

    /**
     * Draws a line segment from the last point of a path to the target point.
     * @param { number } x - Indicates the x coordinate of the target point.
     * @param { number } y - Indicates the y coordinate of the target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    lineTo(x: number, y: number): void;

    /**
     * This is done by using angle arc mode. In this mode, a rectangle that encloses an ellipse is specified first,
     * and then a start angle and a sweep angle are specified.
     * The arc is a portion of the ellipse defined by the start angle and the sweep angle.
     * By default, a line segment from the last point of the path to the start point of the arc is also added.
     * @param { number } x1 - Indicates the x coordinate of the upper left corner of the rectangle.
     * @param { number } y1 - Indicates the y coordinate of the upper left corner of the rectangle.
     * @param { number } x2 - Indicates the x coordinate of the lower right corner of the rectangle.
     * @param { number } y2 - Indicates the y coordinate of the lower right corner of the rectangle.
     * @param { number } startDeg - Indicates the start angle, in degrees.
     * @param { number } sweepDeg - Indicates the angle to sweep, in degrees.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, startDeg: number, sweepDeg: number): void;

    /**
     * Draws a quadratic Bezier curve from the last point of a path to the target point.
     * @param { number } ctrlX - Indicates the x coordinate of the control point.
     * @param { number } ctrlY - Indicates the y coordinate of the control point.
     * @param { number } endX - Indicates the x coordinate of the target point.
     * @param { number } endY - Indicates the y coordinate of the target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    quadTo(ctrlX: number, ctrlY: number, endX: number, endY: number): void;

    /**
     * Draws a conic from the last point of a path to the target point.
     * @param { number } ctrlX - Indicates the x coordinate of the control point.
     * @param { number } ctrlY - Indicates the y coordinate of the control point.
     * @param { number } endX - Indicates the x coordinate of the target point.
     * @param { number } endY - Indicates the y coordinate of the target point.
     * @param { number } weight - Indicates the weight of added conic.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    conicTo(ctrlX: number, ctrlY: number, endX: number, endY: number, weight: number): void;

    /**
     * Draws a cubic Bezier curve from the last point of a path to the target point.
     * @param { number } ctrlX1 - Indicates the x coordinate of the first control point.
     * @param { number } ctrlY1 - Indicates the y coordinate of the first control point.
     * @param { number } ctrlX2 - Indicates the x coordinate of the second control point.
     * @param { number } ctrlY2 - Indicates the y coordinate of the second control point.
     * @param { number } endX - Indicates the x coordinate of the target point.
     * @param { number } endY - Indicates the y coordinate of the target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    cubicTo(ctrlX1: number, ctrlY1: number, ctrlX2: number, ctrlY2: number, endX: number, endY: number): void;

    /**
     * Sets the relative starting point of a path.
     * @param { number } dx - Indicates the x coordinate of the relative starting point.
     * @param { number } dy - Indicates the y coordinate of the relative starting point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rMoveTo(dx: number, dy: number): void;

    /**
     * Draws a line segment from the last point of a path to the relative target point.
     * @param { number } dx - Indicates the x coordinate of the relative target point.
     * @param { number } dy - Indicates the y coordinate of the relative target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rLineTo(dx: number, dy: number): void;

    /**
     * Draws a quadratic bezier curve from the last point of a path to the relative target point.
     * @param { number } dx1 - Indicates the x coordinate of the relative control point.
     * @param { number } dy1 - Indicates the y coordinate of the relative control point.
     * @param { number } dx2 - Indicates the x coordinate of the relative target point.
     * @param { number } dy2 - Indicates the y coordinate of the relative target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rQuadTo(dx1: number, dy1: number, dx2: number, dy2: number): void;

    /**
     * Draws a conic from the last point of a path to the relative target point.
     * @param { number } ctrlX - Indicates the x coordinate of the relative control point.
     * @param { number } ctrlY - Indicates the y coordinate of the relative control point.
     * @param { number } endX - Indicates the x coordinate of the relative target point.
     * @param { number } endY - Indicates the y coordinate of the relative target point.
     * @param { number } weight - Indicates the weight of added conic.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rConicTo(ctrlX: number, ctrlY: number, endX: number, endY: number, weight: number): void;

    /**
     * Draws a cubic bezier curve from the last point of a path to the relative target point.
     * @param { number } ctrlX1 - Indicates the x coordinate of the first relative control point.
     * @param { number } ctrlY1 - Indicates the y coordinate of the first relative control point.
     * @param { number } ctrlX2 - Indicates the x coordinate of the second relative control point.
     * @param { number } ctrlY2 - Indicates the y coordinate of the second relative control point.
     * @param { number } endX - Indicates the x coordinate of the relative target point.
     * @param { number } endY - Indicates the y coordinate of the relative target point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rCubicTo(ctrlX1: number, ctrlY1: number, ctrlX2: number, ctrlY2: number, endX: number, endY: number): void;

    /**
     * Adds contour created from point array, adding (count - 1) line segments.
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { boolean } close - Indicates Whether to add lines that connect the end and start.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addPolygon(points: Array<common2D.Point>, close: boolean): void;

    /**
     * Combines two paths.
     * @param { Path } path - Indicates the Path object.
     * @param { PathOp } pathOp - Indicates the operator to apply path.
     * @returns { boolean } boolean - Returns true if constructed path is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    op(path: Path, pathOp: PathOp): boolean;

    /**
     * Appends arc to path, as the start of new contour.
     * Arc added is part of ellipse bounded by oval, from startAngle through sweepAngle.
     * @param { common2D.Rect } rect - The bounds of the arc is described by a rect.
     * @param { number } startAngle - Indicates the starting angle of arc in degrees.
     * @param { number } sweepAngle - Indicates the sweep, in degrees. Positive is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addArc(rect: common2D.Rect, startAngle: number, sweepAngle: number): void;

    /**
     * Adds a circle to the path, and wound in the specified direction.
     * @param { number } x - Indicates the x coordinate of the center of the circle.
     * @param { number } y - Indicates the y coordinate of the center of the circle.
     * @param { number } radius - Indicates the radius of the circle.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addCircle(x: number, y: number, radius: number, pathDirection?: PathDirection): void;

    /**
     * Adds a oval to the path, defined by the rect, and wound in the specified direction.
     * @param { common2D.Rect } rect - The bounds of the oval is described by a rect.
     * @param { number } start - Indicates the index of initial point of ellipse.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addOval(rect: common2D.Rect, start: number, pathDirection?: PathDirection): void;

    /**
     * Adds a new contour to the path, defined by the rect, and wound in the specified direction.
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addRect(rect: common2D.Rect, pathDirection?: PathDirection): void;

    /**
     * Adds a new contour to the path, defined by the round rect, and wound in the specified direction.
     * @param { RoundRect } roundRect - Indicates the RoundRect object.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void;

    /**
     * Appends src path to path, transformed by matrix.
     * @param { Path } path - Indicates the Path object.
     * @param { Matrix | null } matrix - Indicates transform applied to path. The default value is null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addPath(path: Path, matrix?: Matrix | null): void;

    /**
     * Path is replaced by transformed data.
     * @param { Matrix } matrix - Indicates transform applied to path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    transform(matrix: Matrix): void;

    /**
     * Returns the status that point (x, y) is contained by path.
     * @param { number } x - Indicates the x-axis value of containment test.
     * @param { number } y - Indicates the y-axis value of containment test.
     * @returns { boolean } Returns true if the point (x, y) is contained by path; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    contains(x: number, y: number): boolean;

    /**
     * Sets fill type, the rule used to fill path.
     * @param { PathFillType } pathFillType - Indicates the enum path fill type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setFillType(pathFillType: PathFillType): void;

    /**
     * Gets the smallest bounding box that contains the path.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getBounds(): common2D.Rect;

    /**
     * Closes a path. A line segment from the start point to the last point of the path is added.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    close(): void;

    /**
     * Offsets point array by (dx, dy). Path is replaced by offset data.
     * @param { number } dx - Indicates offset added to dst path x-axis coordinates.
     * @param { number } dy - Indicates offset added to dst path y-axis coordinates.
     * @returns { Path } Returns a new Path object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    offset(dx: number, dy: number): Path;

    /**
     * Resets path data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    reset(): void;

    /**
     * Get path length.
     * @param { boolean } forceClosed - Whether to close the Path.
     * @returns { number } Return path length.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLength(forceClosed: boolean): number;

    /**
     * Gets the position and tangent of the distance from the starting position of the path.
     * 
     * @param { boolean } forceClosed - Whether to close the path.
     * @param { number } distance - The distance from the start of the path, should be greater than 0 and less than 'GetLength()'
     * @param { common2D.Point } position - Sets to the position of distance from the starting position of the path.
     * @param { common2D.Point } tangent - Sets to the tangent of distance from the starting position of the path.
     * @returns { boolean } - Returns true if succeeded, otherwise false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getPositionAndTangent(forceClosed: boolean, distance: number, position: common2D.Point, tangent: common2D.Point): boolean;

    /**
     * Gets the path between the start and end points.
     *
     * @param { boolean } forceClosed - Whether to close the path.
     * @param { number } start - The distance from the starting point of the segment to the starting point of the path.
     * @param { number } stop - The distance from the end point of the segment to the starting point of the path.
     * @param { boolean } startWithMoveTo - Whether the path obtained moveTo to the starting segment.
     * @param { Path } dst - The path obtained.
     * @returns { boolean } - Returns false if the segment is zero-length or start >= stop, else return true.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getSegment(forceClosed: boolean, start: number, stop: number, startWithMoveTo: boolean, dst: Path): boolean;

    /**
     * Determines whether the current contour is closed.
     * 
     * @returns { boolean } - Returns true if the current contour is closed, otherwise false.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isClosed(): boolean;

    /**
     * Computes the corresponding matrix at the specified distance.
     * 
     * @param { boolean } forceClosed - Whether to close the path.
     * @param { number } distance - The distance from the start of the path.
     * @param { Matrix } matrix - Indicates the pointer to an Matrix object.
     * @param { PathMeasureMatrixFlags } flags - Indicates what should be returned in the matrix.
     * @returns { boolean } - Returns false if there is no path, or a zero-length path was specified, in which case matrix is unchanged.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
    */
    getMatrix(forceClosed: boolean, distance: number, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean;

    /**
     * Parses the SVG format string that describes the drawing path, and sets the path.
     *
     * @param { string } str - A string in SVG format that describes the drawing path.
     * @returns { boolean } true if build succeeded, otherwise false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    buildFromSvgString(str: string): boolean;

    /**
     * Get pathIterator from path.
     *
     * @returns { PathIterator } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getPathIterator(): PathIterator;
  }

  /**
   * Enumerates of scale to fit flags, selects if an array of points are drawn as discrete points,
   * as lines, or as an open polygon.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum PointMode {
    /**
     * Draws each point separately.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    POINTS = 0,

    /**
     * Draws each pair of points as a line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    LINES = 1,

    /**
     * Draws the array of points as a open polygon.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    POLYGON = 2,
  }

  /**
   * Enumerates storage filter mode.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FilterMode {
    /**
     * Single sample point (nearest neighbor).
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FILTER_MODE_NEAREST = 0,

    /**
     * Interpolate between 2x2 sample points (bilinear interpolation).
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FILTER_MODE_LINEAR = 1,
  }

  /**
   * Enumerates of shadow flags.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum ShadowFlag {
    /**
     * Use no shadow flags.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NONE = 0,

    /**
     * The occluding object is transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TRANSPARENT_OCCLUDER = 1,

    /**
     * No need to analyze shadows.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    GEOMETRIC_ONLY = 2,

    /**
     * Use all shadow flags.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ALL = 3,
  }

  /**
   * Provides an interface to the drawing, and samplingOptions used when sampling from the image.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class SamplingOptions {
    /**
     * Constructor for the samplingOptions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor();
    /**
     * Constructor for the samplingOptions with filter mode.
     * @param { FilterMode } filterMode - Storage filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(filterMode: FilterMode);
  }

  /**
   * Provides an interface to the drawing, and how to clip and transform the drawing.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Canvas {
    /**
     * Constructor for the Canvas.
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    constructor(pixelmap: image.PixelMap);

    /**
     * If rectangle is stroked, use pen to stroke width describes the line thickness,
     * else use brush to fill the rectangle.
     * @param { common2D.Rect } rect - Rectangle to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawRect(rect: common2D.Rect): void;

    /**
     * If rectangle is stroked, use pen to stroke width describes the line thickness,
     * else use brush to fill the rectangle.
     * @param { number } left - Indicates the left position of the rectangle.
     * @param { number } top - Indicates the top position of the rectangle.
     * @param { number } right - Indicates the right position of the rectangle.
     * @param { number } bottom - Indicates the bottom position of the rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawRect(left: number, top: number, right: number, bottom: number): void;

    /**
     * Draws a RoundRect.
     * @param { RoundRect } roundRect - Indicates the RectRound object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawRoundRect(roundRect: RoundRect): void;

    /**
     * Draws a nested RoundRect.
     * @param { RoundRect } outer - Indicates the outer RectRound object.
     * @param { RoundRect } inner - Indicates the inner RectRound object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawNestedRoundRect(outer: RoundRect, inner: RoundRect): void;

    /**
     * Fills clipped canvas area with brush.
     * @param { Brush } brush - Indicates the Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawBackground(brush: Brush): void;

    /**
     * Draws an offset spot shadow and outlining ambient shadow for the given path with circular light.
     * @param { Path } path - Indicates the Path object.
     * @param { common2D.Point3d } planeParams - Represents z offset of the occluder from the canvas based on x and y.
     * @param { common2D.Point3d } devLightPos - Represents the position of the light relative to the canvas.
     * @param { number } lightRadius - The radius of the circular light.
     * @param { common2D.Color } ambientColor - Ambient shadow's color.
     * @param { common2D.Color } spotColor - Spot shadow's color.
     * @param { ShadowFlag } flag - Indicates the flag to control opaque occluder, shadow, and light position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: number,
      ambientColor: common2D.Color, spotColor: common2D.Color, flag: ShadowFlag) : void;

    /**
     * Draws an offset spot shadow and outlining ambient shadow for the given path with circular light.
     * In this function, the input of the parameter 'ambientColor' and 'spotColor' should be number
     * @param { Path } path - Indicates the Path object.
     * @param { common2D.Point3d } planeParams - Represents z offset of the occluder from the canvas based on x and y.
     * @param { common2D.Point3d } devLightPos - Represents the position of the light relative to the canvas.
     * @param { number } lightRadius - The radius of the circular light.
     * @param { common2D.Color | number } ambientColor - Ambient shadow's color represented by ARGB color of hexadecimal format.
     * @param { common2D.Color | number } spotColor - Spot shadow's color represented by ARGB color of hexadecimal format.
     * @param { ShadowFlag } flag - Indicates the flag to control opaque occluder, shadow, and light position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: number,
      ambientColor: common2D.Color | number, spotColor: common2D.Color | number, flag: ShadowFlag) : void;

    /**
     * If radius is zero or less, nothing is drawn. If circle is stroked, use pen to
     * stroke width describes the line thickness, else use brush to fill the circle.
     * @param { number } x - X coordinate of the circle center.
     * @param { number } y - Y coordinate of the circle center.
     * @param { number } radius - The radius of the circle must be greater than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawCircle(x: number, y: number, radius: number): void;

    /**
     * Draw a pixelmap, with the upper left corner at (left, top).
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { number } left - Left side of image.
     * @param { number } top - Top side of image.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draw a pixelmap, with the upper left corner at (left, top).
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { number } left - Left side of image.
     * @param { number } top - Top side of image.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawImage(pixelmap: image.PixelMap, left: number, top: number, samplingOptions?: SamplingOptions): void;
    
    /**
     * Divides the image into a grid by lattice.
     * Draws each seciont of the image onto the area of destination rectangle on canvas.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { Lattice } lattice - The area of source image.
     * @param { common2D.Rect } dstRect - The area of destination canvas.
     * @param { FilterMode } filterMode - Storage filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    drawImageLattice(pixelmap: image.PixelMap, lattice: Lattice, dstRect: common2D.Rect,
      filterMode: FilterMode): void;
    
    /**
     * Divides the image into a grid with nine sections: four sides, four corners, and the center.
     * Draws the specified section of the image onto the canvas, corners are unmodified or scaled down if they exceed
     * the destination rectangle, center and four sides are scaled to fit remaining space.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { common2D.Rect } center - The rect used to divide the source image.
     * @param { common2D.Rect } dstRect - The area of destination rectangle on canvas.
     * @param { FilterMode } filterMode - Storage filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    drawImageNine(pixelmap: image.PixelMap, center: common2D.Rect, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * Draws the specified source image onto the canvas,
     * scaled and translated to the destination rectangle.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { common2D.Rect } dstRect - The area of destination canvas.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawImageRect(pixelmap: image.PixelMap, dstRect: common2D.Rect, samplingOptions?: SamplingOptions): void;

    /**
     * Draws the specified source rectangle of the image onto the canvas,
     * scaled and translated to the destination rectangle.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { common2D.Rect } srcRect - The area of source image.
     * @param { common2D.Rect } dstRect - The area of destination canvas.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @param { SrcRectConstraint } constraint - Constraint type. The default value is STRICT.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawImageRectWithSrc(pixelmap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      samplingOptions?: SamplingOptions, constraint?: SrcRectConstraint): void;

    /**
     * Fills clip with color color. Mode determines how ARGB is combined with destination.
     * @param { common2D.Color } color - The range of color channels must be [0, 255].
     * @param { BlendMode } blendMode - Used to combine source color and destination. The default value is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawColor(color: common2D.Color, blendMode?: BlendMode): void;

    /**
     * Fills the clipped rectangle with the specified ARGB color.
     * @param { number } alpha - Alpha channel of color. The range of alpha must be [0, 255].
     * @param { number } red - Red channel of color. The range of red must be [0, 255].
     * @param { number } green - Green channel of color. The range of green must be [0, 255].
     * @param { number } blue - Blue channel of color. The range of blue must be [0, 255].
     * @param { BlendMode } blendMode - Used to combine source color and destination. The default value is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawColor(alpha: number, red: number, green: number, blue: number, blendMode?: BlendMode): void;

    /**
     * Fills clip with the specified ARGB color of hexadecimal format.
     * @param { number } color - Number must be ARGB color of hexadecimal format.
     * @param { BlendMode } blendMode - Used to combine source color and destination. The default value is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    drawColor(color: number, blendMode?: BlendMode): void;

    /**
     * Draws an oval.
     * @param { common2D.Rect } oval - The bounds of the oval is described by a rect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawOval(oval: common2D.Rect): void;

    /**
     * Draws an arc.
     * @param { common2D.Rect } arc - The bounds of the arc is described by a rect.
     * @param { number } startAngle - Indicates the startAngle of the arc.
     * @param { number } sweepAngle - Indicates the sweepAngle of the arc.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawArc(arc: common2D.Rect, startAngle: number, sweepAngle: number): void;

    /**
     * Draws an arc with use center.
     * @param { common2D.Rect } arc - The bounds of the arc is described by a rect.
     * @param { number } startAngle - Indicates the startAngle of the arc.
     * @param { number } sweepAngle - Indicates the sweepAngle of the arc.
     * @param { boolean } useCenter - If true, include the center of the oval in the arc, and close it if it is being stroked.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    drawArcWithCenter(arc: common2D.Rect, startAngle: number, sweepAngle: number, useCenter: boolean): void;

    /**
     * Draw a point.
     * @param { number } x - X coordinate position of the point.
     * @param { number } y - Y coordinate position of the point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawPoint(x: number, y: number): void;

    /**
     * Draws point array as separate point, line segment or open polygon according to given point mode.
     * @param { Array<common2D.Point> } points - Points array.
     * @param { PointMode } mode - Draws points enum method. The default value is POINTS.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawPoints(points: Array<common2D.Point>, mode?: PointMode): void;

    /**
     * Draws a path.
     * @param { Path } path - Path to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawPath(path: Path): void;

    /**
     * Draws line segment from startPt to endPt.
     * @param { number } x0 - X coordinate of the start point of the line segment.
     * @param { number } y0 - Y coordinate of the start point of the line segment.
     * @param { number } x1 - X coordinate of the end point of the line segment.
     * @param { number } y1 - Y coordinate of the end point of the line segment.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawLine(x0: number, y0: number, x1: number, y1: number): void;

    /**
     * Draws a single character.
     * @param { string } text - A string containing only a single character.
     * @param { Font } font - Font object.
     * @param { number } x - X coordinate of the single character start point.
     * @param { number } y - Y coordinate of the single character start point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawSingleCharacter(text: string, font: Font, x: number, y: number): void;

    /**
     * Draws a textBlob
     * @param { TextBlob } blob - TextBlob to draw.
     * @param { number } x - X coordinate of the text start point.
     * @param { number } y - Y coordinate of the text start point.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    drawTextBlob(blob: TextBlob, x: number, y: number): void;

    /**
     * Draws the pixelmap base on the mesh which is evenly distributed across the pixelmap.
     * @param { image.PixelMap } pixelmap - The pixelmap to draw using the mesh.
     * @param { number } meshWidth - The number of columns in the mesh.
     * @param { number } meshHeight - The number of rows in the mesh.
     * @param { Array<number> } vertices - Array of vertices, specifying where the mesh should be drawn.
     * @param { number } vertOffset - Number of vert elements to skip before drawing.
     * @param { Array<number> } colors - Array of colors, specifying a color at each vertex.
     * @param { number } colorOffset - Number of color elements to skip before drawing.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawPixelMapMesh(pixelmap: image.PixelMap, meshWidth: number, meshHeight: number,
      vertices: Array<number>, vertOffset: number, colors: Array<number>, colorOffset: number): void;

    /**
     * Draws a region.
     * @param { Region } region - Region object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    drawRegion(region: Region): void;

    /**
     * Set pen to a canvas.
     * @param { Pen } pen - object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    attachPen(pen: Pen): void;

    /**
     * Set brush to a canvas.
     * @param { Brush } brush - Object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    attachBrush(brush: Brush): void;

    /**
     * Unset pen to a canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    detachPen(): void;

    /**
     * Unset brush to a canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    detachBrush(): void;

    /**
     * Saves the current canvas status (canvas matrix) to the top of the stack.
     * @returns { number } Return the number of saved states.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    save(): number;

    /**
     * Saves matrix and clip, and allocates a bitmap for subsequent drawing.
     * Calling restore discards changes to matrix and clip, and draws the bitmap.
     * @param { common2D.Rect | null} rect - Optional layer size. The default value is null.
     * @param { Brush | null} brush - Optional brush effect used to draw the layer. The default value is null.
     * @returns { number } Return the number of saved states before this call.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    saveLayer(rect?: common2D.Rect | null, brush?: Brush | null): number;

    /**
     * Clears a canvas by using a specified color.
     * @param { common2D.Color } color - Indicates the color, which is a 32-bit (ARGB) variable.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    clear(color: common2D.Color): void;

    /**
     * Clears a canvas by using a specified color represented by ARGB color of hexadecimal format.
     * @param { common2D.Color | number } color - Number must be ARGB color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    clear(color: common2D.Color | number): void;

    /**
     * Restores the canvas status (canvas matrix) saved on the top of the stack.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    restore(): void;

    /**
     * Restores the specific number of the canvas status (canvas matrix) saved in the stack.
     * @param { number } count - Depth of state stack to restore.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    restoreToCount(count: number): void;

    /**
     * Gets the number of the canvas status (canvas matrix) saved in the stack.
     * @returns { number } Return represent depth of save state stack.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getSaveCount(): number;

    /**
     * Gets the width of a canvas.
     * @returns { number } Return the width of a canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getWidth(): number;

    /**
     * Gets the height of a canvas.
     * @returns { number } Return the height of a canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getHeight(): number;

    /**
     * Gets the bounds of clip of a canvas.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLocalClipBounds(): common2D.Rect;

    /**
     * Gets a 3x3 matrix of the transform from local coordinates to 'device'.
     * @returns { Matrix } Matrix object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getTotalMatrix(): Matrix;

    /**
     * Scales by sx on the x-axis and sy on the y-axis.
     * @param { number } sx - Indicates the amount to scale on x-axis.
     * @param { number } sy - Indicates the amount to scale on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    scale(sx: number, sy: number): void;

    /**
     * Skews by sx on the x-axis and sy on the y-axis.
     * @param { number } sx - Indicates the value skew transformation on x-axis.
     * @param { number } sy - Indicates the value skew transformation on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    skew(sx: number, sy: number) : void;

    /**
     * Rotates by degrees, positive degrees rotates clockwise.
     * @param { number } degrees - Indicates the amount to rotate, in degrees.
     * @param { number } sx - Indicates the x-axis value of the point to rotate about.
     * @param { number } sy - Indicates the y-axis value of the point to rotate about.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    rotate(degrees: number, sx: number, sy: number) : void;

    /**
     * Translates by dx along the x-axis and dy along the y-axis.
     * @param { number } dx - Indicates the distance to translate on x-axis.
     * @param { number } dy - Indicates the distance to translate on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    translate(dx: number, dy: number): void;

    /**
     * Replaces the clipping area with the intersection or difference of the current clipping area and path,
     * and use a clipping edge that is aliased or anti-aliased.
     * @param { Path } path - To combine with clip.
     * @param { ClipOp } clipOp - Indicates the operation to apply to clip. The default value is intersect.
     * @param { boolean } doAntiAlias - True if clip is to be anti-aliased. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    clipPath(path: Path, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Replaces the clipping area with the intersection or difference between the
     * current clipping area and Rect, and use a clipping edge that is aliased or anti-aliased.
     * @param { common2D.Rect } rect - To combine with clipping area.
     * @param { ClipOp } clipOp - Indicates the operation to apply to clip. The default value is intersect.
     * @param { boolean } doAntiAlias - True if clip is to be anti-aliased. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    clipRect(rect: common2D.Rect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Uses the passed matrix to transforming the geometry, then use existing matrix.
     * @param { Matrix } matrix - Declares functions related to the matrix object in the drawing module.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    concatMatrix(matrix: Matrix): void;

    /**
     * Replace the clipping area with the intersection or difference of the
     * current clipping area and Region, and use a clipping edge that is aliased or anti-aliased.
     * @param { Region } region - Region object.
     * @param { ClipOp } clipOp - Indicates the operation to apply to clip. The default value is intersect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    clipRegion(region: Region, clipOp?: ClipOp): void;

    /**
     * Replaces the clipping area with the intersection or difference between the
     * current clipping area and RoundRect, and use a clipping edge that is aliased or anti-aliased.
     * @param { RoundRect } roundRect - To combine with clipping area.
     * @param { ClipOp } clipOp - Indicates the operation to apply to clip. The default value is intersect.
     * @param { boolean } doAntiAlias - True if clip is to be anti-aliased. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    clipRoundRect(roundRect: RoundRect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Checks whether the drawable area is empty.
     * @returns { boolean } Returns true if drawable area is empty.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isClipEmpty(): boolean;

    /**
     * Sets matrix of canvas.
     * @param { Matrix } matrix - Declares functions related to the matrix object in the drawing module.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setMatrix(matrix: Matrix): void;

    /**
     * Sets matrix of canvas to the identity matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    resetMatrix(): void;

    /**
     * Determines whether path is intersect with current clip area.
     * @param { Path } path - Path to draw.
     * @returns { boolean } Returns true if path is not intersect; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    quickRejectPath(path: Path): boolean;

    /**
     * Determines whether rect is intersect with current clip area.
     * @param { common2D.Rect } rect - Rectangle to determines.
     * @returns { boolean } Returns true if rect and region is not intersect; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    quickRejectRect(rect: common2D.Rect): boolean;
  }

  /**
   * Enumerates clip operations.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum ClipOp {
    /**
     * Clips with difference.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DIFFERENCE = 0,
    /**
     * Clips with intersection.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INTERSECT = 1,
  }

  /**
   * Provide a description of the type and position of the text.
   * @typedef TextBlobRunBuffer
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  interface TextBlobRunBuffer {
    /**
     * Text model.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    glyph: number;
    /**
     * X-coordinate of the text start point.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    positionX: number;
    /**
     * Y-coordinate of the text start point.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    positionY: number;
  }

  /**
   * Encoding type of the description text.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  enum TextEncoding {
    /**
     * Use 1 byte to represent UTF-8 or ASCII
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    TEXT_ENCODING_UTF8 = 0,
    /**
     * Use 2 bytes to represent most of unicode
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    TEXT_ENCODING_UTF16 = 1,
    /**
     * Use 4 bytes to represent all unicode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    TEXT_ENCODING_UTF32 = 2,
    /**
     * Use 2 bytes to represent the glyph index.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    TEXT_ENCODING_GLYPH_ID = 3,
  }

  /**
   * Provide a description of the text
   *
   * class TextBlob
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class TextBlob {
    /**
     * Create a textblob from a string
     * @param { string } text - Drawn glyph content.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } encoding - The default value is TEXT_ENCODING_UTF8.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob;

    /**
     * Create a textblob from a string, each element of which is located at the given positions.
     * @param { string } text - Drawn glyph content.
     * @param { number } len - string length, value must equal to points length.
     * @param { common2D.Point[] } points - Position coordinates of a textblob elements.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob;

    /**
     * Creating a textblob object based on RunBuffer information
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } bounds - Optional run bounding box. The default value is null;
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob;

    /**
     * Returns the bounding rectangle shape
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    bounds(): common2D.Rect;

    /**
     * Returns an unique identifier for a textblob.
     * @returns { number } Unique ID.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    uniqueID(): number;
  }

  /**
   * The Typeface class specifies the typeface and intrinsic style of a font.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Typeface {
    /**
     * Get the family name for this typeface.
     * @returns { string } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    getFamilyName(): string;

    /**
     * Generate typeface from file.
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
     static makeFromFile(filePath: string): Typeface;

    /**
     * Generate typeface from Rawfile.
     * @param { Resource } rawfile - RawFile for typeface.
     * @returns { Typeface } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static makeFromRawFile(rawfile: Resource): Typeface;
  }

  /**
   * Enumerates text edging types.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FontEdging {
    /**
     * Uses anti aliasing, default value.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ALIAS = 0,

    /**
     * Uses sub-pixel anti aliasing.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ANTI_ALIAS = 1,

    /**
     * Uses sub-pixel anti aliasing and enable sub-pixel localization.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    SUBPIXEL_ANTI_ALIAS = 2,
  }

  /**
   * Enumerates text hinting types.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FontHinting {
    /**
     * Not use text hinting.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NONE = 0,

    /**
     * Uses slight text hinting.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    SLIGHT = 1,

    /**
     * Uses normal text hinting.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NORMAL = 2,

    /**
     * Uses full text hinting.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FULL = 3,
  }

  /**
   * Font controls options applied when drawing and measuring text.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Font {
    /**
     * Requests, but does not require, that glyphs respect sub-pixel positioning.
     * @param { boolean } isSubpixel - Setting for sub-pixel positioning.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    enableSubpixel(isSubpixel: boolean): void;

    /**
     * Increases stroke width when creating glyph bitmaps to approximate a bold typeface.
     * @param { boolean } isEmbolden - Setting for bold approximation.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    enableEmbolden(isEmbolden: boolean): void;

    /**
     * Requests linearly scalable font and glyph metrics.
     * @param { boolean } isLinearMetrics - Setting for linearly scalable font and glyph metrics.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    enableLinearMetrics(isLinearMetrics: boolean): void;

    /**
     * Sets text size in points. Has no effect if textSize is not greater than or equal to zero.
     * @param { number } textSize - Typographic height of text. The height of the text must be greater than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setSize(textSize: number): void;

    /**
     * Obtains the text size.
     * @returns { number } Text size.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    getSize(): number;

    /**
     * Sets Typeface to font.
     * @param { Typeface } typeface - Font and style used to draw text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setTypeface(typeface: Typeface): void;

    /**
     * Get Typeface to font.
     * @returns { Typeface } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    getTypeface(): Typeface;

    /**
     * Get fontMetrics associated with typeface.
     * @returns { FontMetrics } The fontMetrics value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    getMetrics(): FontMetrics;

    /**
     * Measure a single character.
     * @param { string } text - A string containing only a single character.
     * @returns { number } The width of the single character.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    measureSingleCharacter(text: string): number;
    /**
     * Measure the width of text.
     * @param { string } text - Text Symbol Content.
     * @param { TextEncoding } encoding - Encoding format.
     * @returns { number } The width of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    measureText(text: string, encoding: TextEncoding): number;

    /**
     * Sets text scale on x-axis to font.
     * @param { number } scaleX - Text scaleX.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setScaleX(scaleX: number): void;

    /**
     * Sets text skew on x-axis to font.
     * @param { number } skewX - Text skewX.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setSkewX(skewX: number): void;

    /**
     * Sets the edging effect to font.
     * @param { FontEdging } edging - Text edging.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setEdging(edging: FontEdging): void;

    /**
     * Sets the hinting pattern to font.
     * @param { FontHinting } hinting - Text hinting.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setHinting(hinting: FontHinting): void;

    /**
     * Calculates number of glyphs represented by text.
     * @param { string } text - Indicates the character storage encoded with text encoding.
     * @returns { number } Returns the count of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    countText(text: string): number;

    /**
     * Sets whether the font baselines and pixels alignment when the transformation matrix is ​​axis aligned.
     * @param { boolean } isBaselineSnap - Indicates whether the font baselines and pixels alignment.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setBaselineSnap(isBaselineSnap: boolean): void;

    /**
     * Gets whether the font baselines and pixels alignment when the transformation matrix is ​​axis aligned.
     * @returns { boolean } Returns true if the font baselines and pixels alignment; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isBaselineSnap(): boolean;

    /**
     * Sets whether to use bitmaps instead of outlines in the object.
     * @param { boolean } isEmbeddedBitmaps - Indicates whether to use bitmaps instead of outlines.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setEmbeddedBitmaps(isEmbeddedBitmaps: boolean): void;

    /**
     * Gets whether to use bitmaps instead of outlines in the object.
     * @returns { boolean } if using bitmaps instead of outlines; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isEmbeddedBitmaps(): boolean;

    /**
     * Sets whether the font outline is automatically adjusted.
     * @param { boolean } isForceAutoHinting - Indicates whether the font outline is automatically adjusted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setForceAutoHinting(isForceAutoHinting: boolean): void;

    /**
     * Gets whether the font outline is automatically adjusted.
     * @returns { boolean } Returns true if the font outline is automatically adjusted; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isForceAutoHinting(): boolean;

    /**
     * Retrieves the advance for each glyph in glyphs.
     * @param { Array<number> } glyphs - Array of glyph indices to be measured.
     * @returns { Array<number> } Returns the width of each character in a string.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getWidths(glyphs: Array<number>): Array<number>;

    /**
     * Gets storage for glyph indexes.
     * @param { string } text - Indicates the character storage encoded with text encoding.
     * @param { number } glyphCount - The number of glyph. The default value is the result of calling countText.
     * @returns { Array<number> } Returns the storage for glyph indices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    textToGlyphs(text: string, glyphCount?: number): Array<number>;

    /**
     * Returns true if glyphs may be drawn at sub-pixel offsets.
     * @returns { boolean } True if glyphs may be drawn at sub-pixel offsets.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isSubpixel(): boolean;
    /**
     * Returns true if font and glyph metrics are requested to be linearly scalable.
     * @returns { boolean } True if font and glyph metrics are requested to be linearly scalable.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isLinearMetrics(): boolean;
    /**
     * Returns text skew on x-axis.
     * @returns { number } Additional shear on x-axis relative to y-axis.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getSkewX(): number;
    /**
     * Gets whether to increase the stroke width to approximate bold fonts.
     * @returns { boolean } Returns true to increase the stroke width to approximate bold fonts; 
     * returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isEmbolden(): boolean;
    /**
     * Returns text scale on x-axis.
     * @returns { number } Text horizontal scale.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getScaleX(): number;
    /**
     * Gets font hinting pattern.
     * @returns { FontHinting } Font hinting level.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getHinting(): FontHinting;
    /**
     * Gets font edge pixels pattern.
     * @returns { FontEdging } Edge pixels pattern.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getEdging(): FontEdging;
    /**
     * Create path object of specified Glyph.
     * @param { number } index - the index of Glyphs.
     * @returns { Path } The path object for specified glyph, undefined if not found.
     * Note: Path use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    createPathForGlyph(index: number): Path;
    /**
     * Retrieves the bounding rect for each glyph in glyphs.
     * @param { Array<number> } glyphs - Indicates the array of glyph indices to be measured.
     * @returns { Array<common2D.Rect> } Returns bounds for each glyph relative to (0, 0).
     * Note: 1. Rect use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * <br>2. Rect use two points(left-bottom & right-top) to describe the bound.
     * <br>3. The bound rect will be snap to integral boundaries.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getBounds(glyphs: Array<number>): Array<common2D.Rect>;
    /**
     * Get path of text.
     * @param { string } text - Indicates the character storage encoded with text encoding.
     * @param { number } byteLength - Indicates the byte length of the text.
     * @param { number } x - Indicates X coordinate for the starting position of the text within the drawing area.
     * @param { number } y - Indicates Y coordinate for the starting position of the text within the drawing area.
     * @returns { Path } The path object for Glyph.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getTextPath(text: string, byteLength: number, x: number, y: number): Path;

    /**
     * Sets whether to follow the theme font. If the value is true, the theme font is used when typeface is not set.
     * @param { boolean } followed - Indicates whether to follow the theme font.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15
     */
    setThemeFontFollowed(followed: boolean): void;

    /**
     * Gets whether to follow the theme font.
     * @returns { boolean } Returns true if font follows theme font; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15
     */
    isThemeFontFollowed(): boolean;
  }

  /**
   * Enumerates the font measurement flags, which is used to specify whether a field in the font measurement information is valid.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FontMetricsFlags {
    /**
     * The underlineThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    UNDERLINE_THICKNESS_VALID = 1 << 0,

    /**
     * The underlinePosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    UNDERLINE_POSITION_VALID = 1 << 1,

    /**
     * The strikethroughThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    STRIKETHROUGH_THICKNESS_VALID = 1 << 2,

    /**
     * The strikethroughPosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    STRIKETHROUGH_POSITION_VALID = 1 << 3,

    /**
     * The boundary metrics (such as top, bottom, xMin, and xMax) in the FontMetrics struct are invalid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BOUNDS_INVALID = 1 << 4,
  }

  /**
   * Describes the attributes that describe the font size and layout. A typeface has similar font metrics.
   * @typedef FontMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  interface FontMetrics {
    /**
     * Font measurement flags that are valid.
     * @type { ?FontMetricsFlags }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    flags?: FontMetricsFlags;

    /**
     * Maximum distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    top: number;
    /**
     * Distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    ascent: number;
    /**
     * Distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    descent: number;
    /**
     * Maximum distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    bottom: number;
    /**
     * Interline spacing, that is, the distance from the descent of one line of text to the ascent of the next line.
     * The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    leading: number;
    /**
     * Average character width.
     * @type { ?number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
     avgCharWidth?: number;

     /**
      * Maximum character width.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     maxCharWidth?: number;
 
     /**
      * Horizontal distance from the leftmost edge of any glyph bounding box to the origin.
      * This value is usually less than 0, indicating the minimum horizontal coordinate across all glyph bounding boxes.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     xMin?: number;
 
     /**
      * Horizontal distance from the rightmost edge of any glyph bounding box to the origin.
      * The value is a positive number, indicating the maximum horizontal coordinate across all glyph bounding boxes.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     xMax?: number;
 
     /**
      * Height of the lowercase letter x. The value is usually a negative value.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     xHeight?: number;
 
     /**
      * Height of a capital letter. The value is usually a negative value.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     capHeight?: number;
 
     /**
      * Thickness of the underline.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     underlineThickness?: number;
 
     /**
      * Vertical distance from the baseline to the top of the underline. The value is usually a positive number.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     underlinePosition?: number;
 
     /**
      * Thickness of the strikethrough.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     strikethroughThickness?: number;
 
     /**
      * Vertical distance from the baseline to the bottom of the strikethrough. The value is usually a negative value.
      * @type { ?number }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     strikethroughPosition?: number;
  }

  /**
   * Implements a lattice object, which is used to divide an image by lattice.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Lattice {
    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<number> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<number> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { number } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { number } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } fBounds - Source bounds to draw. The rectangle parameter must be an integer.
     * The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } fRectTypes - Array that holds the rectangle types. The default value is null.
     * If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } fColors - Array that holds the colors used to fill the lattices. The default value is null.
     * If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
      fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<number> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<number> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { number } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { number } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } fBounds - Source bounds to draw. The rectangle parameter must be an integer.
     * The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } fRectTypes - Array that holds the rectangle types. The default value is null.
     * If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<number> | null } fColors - Array that holds the colors used to fill the lattices. Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     * The default value is null. If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
      fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice;
  }

  /**
   * Enumerates the types of rectangles used to fill the lattices. This enum is used only in Lattice.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum RectType {
    /**
     * Draws an image into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DEFAULT = 0,

    /**
     * Sets the lattice to transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TRANSPARENT = 1,

    /**
     * Draws the colors in the fColors array in Lattice into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FIXEDCOLOR = 2
  }

  /**
   * Implements a mask filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class MaskFilter {
    /**
     * Creates a mask filter with a blur effect.
     * @param { BlurType } blurType - Blur type.
     * @param { number } sigma - Standard deviation of the Gaussian blur to apply. The value must be a floating point number greater than 0.
     * @returns { MaskFilter } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter;
  }

  /**
   * Enumerates the styles of the dashed path effect.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
   enum PathDashStyle {
    /**
     * Translates only, not rotating with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    TRANSLATE = 0,
    /**
     * Rotates with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    ROTATE = 1,
    /**
     * Rotates with the path and stretches or compresses at turns to enhance smoothness.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    MORPH = 2,
  }

  /**
   * Implements a path effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class PathEffect {
    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     * @param { Array<number> } intervals - Array of ON and OFF lengths of dotted lines.
     * The number of arrays must be an even number and be greater than or equal to 2.
     * @param { number } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect;

    /**
     * Creates a path effect that transforms the sharp angle between line segments into a rounded corner with the specified radius.
     * @param { number } radius - Radius of the rounded corner. The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createCornerPathEffect(radius: number): PathEffect;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     * @param { number } segLength - Distance along the path at which each segment is fragmented. The value is a floating point number.
     * If a negative number or the value 0 is passed in, no effect is created.
     * @param { number } dev - Maximum amount by which the end points of the segments can be randomly displaced during rendering.
     * The value is a floating-point number.
     * @param { number } seedAssist - Optional parameter to assist in generating a pseudo-random seed for the effect.
     * The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect;

     /**
      * Creates a path effect by sequentially applying the inner effect and then the outer effect.
      * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
      * @param { PathEffect } inner - Inner path effect that is applied first.
      * @returns { PathEffect } PathEffect object.
      * @static
      * @syscap SystemCapability.Graphics.Drawing
      * @since 18
      */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect;

     /**
     * Creates a dashed path effect based on the shape described by a path.
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { number } advance - Distance between two consecutive dashes. The value is a floating point number greater than 0.
     * Otherwise, an error code is thrown.
     * @param { number } phase - Starting offset of the dash pattern. The value is a floating point number.
     * The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect;

     /**
      * Creates an overlay path effect based on two distinct path effects.
      * Different from createComposePathEffect, this API applies each effect separately and then displays them as a simple overlay.
      * @param { PathEffect } firstPathEffect - First path effect.
      * @param { PathEffect } secondPathEffect - Second path effect.
      * @returns { PathEffect } PathEffect object.
      * @static
      * @syscap SystemCapability.Graphics.Drawing
      * @since 18
      */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect;
  }

  /**
   * Implements the shader effect. After a shader effect is set for a pen or brush,
   * the shader effect instead of the color attribute is used for drawing. In this case,
   * the alpha value set for the pen or brush still takes effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class ShaderEffect {
    /**
     * Creates a ShaderEffect object with a single color.
     * @param { number } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createColorShader(color: number): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<number> } colors - Array of colors to distribute between the two points.
     * The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } pos - Relative position of each color in the color array.
     * The array length must be the same as that of colors. The first element in the array must be 0.0,
     * the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     * The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } matrix - Matrix object used to perform matrix transformation on the shader effect.
     * The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<number>,
      mode: TileMode, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { number } radius - Radius of the gradient. A negative number is invalid. The value is a floating point number.
     * @param { Array<number> } colors - Array of colors to distribute between the center and ending shape of the circle.
     * The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } pos - Relative position of each color in the color array.
     * The array length must be the same as that of colors. The first element in the array must be 0.0, the last element must be 1.0,
     * and the middle elements must be between 0.0 and 1.0 and increase by index.
     * The default value is null, indicating that colors are evenly distributed between the center and ending shape of the circle.
     * @param { Matrix | null } matrix - Matrix object used to perform matrix transformation on the shader effect.
     * The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createRadialGradient(centerPt: common2D.Point, radius: number, colors: Array<number>,
      mode: TileMode, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<number> } colors - Array of colors to distribute between the start angle and end angle.
     * The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { number } startAngle - Start angle of the sweep gradient, in degrees.
     * The value 0 indicates the positive direction of the X axis. A positive number indicates an offset towards the positive direction,
     * and a negative number indicates an offset towards the negative direction. The value is a floating point number.
     * @param { number } endAngle - End angle of the sweep gradient, in degrees.
     * The value 0 indicates the positive direction of the X axis. A positive number indicates an offset towards the positive direction,
     * and a negative number indicates an offset towards the negative direction. A value less than the start angle is invalid.
     * The value is a floating point number.
     * @param { Array<number> | null } pos - Relative position of each color in the color array. The array length must be the same as that of colors.
     * The first element in the array must be 0.0, the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     * The default value is null, indicating that the colors are evenly distributed between the start angle and end angle.
     * @param { Matrix | null } matrix - Matrix object used to perform matrix transformation on the shader effect.
     * The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<number>,
      mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null,
      matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { number } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     * The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { number } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     * The value is a floating point number.
     * @param { Array<number> } colors - Array of colors to distribute between the start circle and end circle.
     * The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } pos - Relative position of each color in the color array. The array length must be the same as that of colors.
     * The first element in the array must be 0.0, the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     * The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } matrix - Matrix object used to perform matrix transformation on the shader effect.
     * The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point,
      endRadius: number, colors: Array<number>, mode: TileMode,
      pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;
  }

  /**
   * Enumerates the tile modes of the shader effect.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TileMode {
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DECAL = 3,
  }

  /**
   * Implements a shadow layer.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class ShadowLayer {
    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer. The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer;
    
    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer. The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer;
  }

  /**
   * Defines a color filter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class ColorFilter {
    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object by combining another two color filters.
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static createLinearToSRGBGamma(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static createSRGBGammaToLinear(): ColorFilter;

    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     * @returns { ColorFilter } Colorfilter.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    static createLumaColorFilter(): ColorFilter;
    /**
     * Creates a color filter object with a 4*5 color matrix.
     * @param { Array<number> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createMatrixColorFilter(matrix: Array<number>): ColorFilter;
  }

  /**
   * Implements an image filter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class ImageFilter {
    /**
     * Creates an image filter with a given blur effect.
     * @param { number } sigmaX - Standard deviation of the Gaussian blur along the X axis. The value must be a floating point number greater than 0.
     * @param { number } sigmaY - Standard deviation of the Gaussian blur along the Y axis. The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } imageFilter - Filter to which the image filter will be applied.
     * The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createBlurImageFilter(sigmaX: number, sigmaY: number,
      tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter;
    /**
     * Creates an image filter object with a given color filter effect.
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } imageFilter - Filter to which the image filter will be applied. The default value is null,
     * indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter;
  }
  /**
   * Enumerates the join styles of a pen. The join style defines the shape of the joints of a polyline segment drawn by the pen.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum JoinStyle {
    /**
     * Mitered corner. If the angle of a polyline is small, its miter length may be inappropriate.
     * In this case, you need to use the miter limit to limit the miter length.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    MITER_JOIN = 0,

    /**
     * Round corner.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ROUND_JOIN = 1,

    /**
     * Bevel corner.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BEVEL_JOIN = 2
  }

  /**
   * Enumerates the cap styles of a pen. The cap style defines the style of both ends of a line segment drawn by the pen.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum CapStyle {
    /**
     * There is no cap style. Both ends of the line segment are cut off square.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FLAT_CAP = 0,

    /**
     * Square cap style. Both ends have a square, the height of which is half of the width of the line segment, with the same width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    SQUARE_CAP = 1,

    /**
     * Round cap style. Both ends have a semicircle centered, the diameter of which is the same as the width of the line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ROUND_CAP = 2
  }

  /**
   * Enumerates the blur types of a mask filter.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum BlurType {
    /**
     * Both the outer edges and the inner solid parts are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NORMAL = 0,

    /**
     * The inner solid part remains unchanged, while only the outer edges are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    SOLID = 1,

    /**
     * Only the outer edges are blurred, with the inner solid part being fully transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    OUTER = 2,

    /**
     * Only the inner solid part is blurred, while the outer edges remain sharp.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INNER = 3
  }

  /**
   * Defines a pen, which is used to describe the style and color to outline a shape.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Pen {
    /**
     * A constructor used to create a Pen object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor();

    /**
     * Copies a Pen object to create a new one.
     * @param { Pen } pen - Pen object to copy.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(pen: Pen);

    /**
     * Sets the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * When drawing a polyline with the pen, if JoinStyle is set to MITER_JOIN and this maximum ratio is exceeded,
     * the corner will be displayed as beveled instead of mitered.
     * @param { number } miter - Maximum ratio of the sharp corner length of the polyline to the line width.
     * A negative number is processed as 4.0 during drawing. Non-negative numbers take effect normally. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setMiterLimit(miter: number): void;

    /**
     * Obtains the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * @returns { number } Returns the miter limit.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getMiterLimit(): number;

    /**
     * Sets the shader effect for this pen.
     * @param { ShaderEffect } shaderEffect -  ShaderEffect object. If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setShaderEffect(shaderEffect: ShaderEffect): void;

    /**
    * Sets a color for this pen.
    * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types; 3. Parameter verification failed.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setColor(color: common2D.Color): void;

    /**
    * Sets a color for this pen. This API provides better performance than setColor and is recommended.
     * @param { number } alpha - Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to 255
     *  Any passed-in floating point number is rounded down.
     * @param { number } red - Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @param { number } green - Green channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @param { number } blue - Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 12
    */
    setColor(alpha: number, red: number, green: number, blue: number): void;

    /**
    * Sets a color for this pen.
    * @param { number } color - Color in hexadecimal ARGB format.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 18
    */
    setColor(color: number): void;

    /**
     * Obtains the color of this pen.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this pen.
     * @returns { number } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getHexColor(): number;

    /**
    * Sets the stroke width for this pen. The value 0 is treated as an unusually thin width. During drawing,
    * the width of 0 is always drawn as 1 pixel wide, regardless of any scaling applied to the canvas.
    * Negative values are also regarded as the value 0 during the drawing process.
    *
    * @param { number } width - Stroke width. The value is a floating point number.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setStrokeWidth(width: number): void;

    /**
     * Obtains the stroke width of this pen. The width describes the thickness of the outline of a shape.
     * @returns { number } Returns the thickness.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getWidth(): number;

    /**
    * Enables anti-aliasing for this pen. Anti-aliasing makes the edges of the content smoother. If this API is not called, anti-aliasing is disabled by default.
    *
    * @param { boolean } aa - Whether to enable anti-aliasing. The value true means to enable anti-aliasing, and false means the opposite.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this pen.
     * @returns { boolean } Returns true if the anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isAntiAlias(): boolean;

    /**
    * Sets an alpha value for this pen.
    *
    * @param { number } alpha - Alpha value. The value is an integer in the range [0, 255]. If a floating point number is passed in, the value is rounded down.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types; 3. Parameter verification failed.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setAlpha(alpha: number): void;

    /**
     * Obtains the alpha value of this pen.
     * @returns { number } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getAlpha(): number;

    /**
    * Sets a color filter for this pen.
    *
    * @param { ColorFilter } filter - Color filter. If null is passed in, the color filter is cleared.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setColorFilter(filter: ColorFilter): void;
    /**
     * Obtains the color filter of this pen.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getColorFilter(): ColorFilter;
    /**
     * Sets an image filter for this pen.
     * @param { ImageFilter | null } filter - Image filter. If null is passed in, the image filter effect of the pen will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this pen.
     *
     * @param { MaskFilter } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setMaskFilter(filter: MaskFilter): void;

    /**
     * Sets the path effect for this pen.
     *
     * @param { PathEffect } effect - Path effect. If null is passed in, the path filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setPathEffect(effect: PathEffect): void;

    /**
     * Sets a shadow layer for this pen. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setShadowLayer(shadowLayer: ShadowLayer): void;

    /**
    * Sets a blend mode for this pen.
    *
    * @param { BlendMode } mode - Blend mode.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types; 3. Parameter verification failed.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setBlendMode(mode: BlendMode): void;

    /**
    * Enables dithering for this pen. Dithering make the drawn color more realistic.
    *
    * @param { boolean } dither - Whether to enable dithering. The value true means to enable dithering, and false means the opposite.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * <br>2. Incorrect parameter types.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 11
    */
    setDither(dither: boolean): void;

    /**
     * Sets the join style for this pen. If this API is not called, the default join style is MITER_JOIN.
     *
     * @param { JoinStyle } style - Join style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setJoinStyle(style: JoinStyle): void;

    /**
     * Obtains the join style of this pen.
     *
     * @returns { JoinStyle } The JoinStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getJoinStyle(): JoinStyle;

    /**
     * Sets the cap style for this pen. If this API is not called, the default cap style is FLAT_CAP.
     *
     * @param { CapStyle } style - Cap style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setCapStyle(style: CapStyle): void;

    /**
     * Obtains the cap style of this pen.
     *
     * @returns { CapStyle } The CapStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getCapStyle(): CapStyle;

    /**
     * Resets this pen to the initial state.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    reset(): void;
    /**
     * Obtains the source path outline drawn using this pen and represents it using a destination path.
     *
     * @param { Path } src - Source path.
     * @param { Path } dst - Destination path.
     * @returns { boolean } true if the path should be filled, or false if it should be drawn with a hairline (width == 0)
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getFillPath(src: Path, dst: Path): boolean;
  }

  /**
   * Defines a brush, which is used to describe the style and color to fill in a shape.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  class Brush {
    /**
     * A constructor used to create a Brush object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor();

    /**
     * Copies a Brush object to create a new one.
     * @param { Brush } brush - Indicates the Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(brush: Brush);

    /**
     * Sets a color for this brush.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setColor(color: common2D.Color): void;

    /**
     * Sets a color for this brush. This API provides better performance than setColor and is recommended.
     * @param { number } alpha - Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @param { number } red - Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @param { number } green - Green channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @param { number } blue - Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 255.
     * Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setColor(alpha: number, red: number, green: number, blue: number): void;

    /**
     * Sets a color for this brush.
     * @param { number } color - Color in hexadecimal ARGB format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    setColor(color: number): void;

    /**
     * Obtains the color of this brush.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this brush.
     * @returns { number } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    getHexColor(): number;

    /**
     * Enables anti-aliasing for this brush. Anti-aliasing makes the edges of the content smoother.
     * If this API is not called, anti-aliasing is disabled by default.
     * @param { boolean } aa - Whether to enable anti-aliasing. The value true means to enable anti-aliasing, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this brush.
     * @returns { boolean } Returns true if anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isAntiAlias(): boolean;

    /**
     * Sets an alpha value for this brush.
     * @param { number } alpha - Alpha value. The value is an integer in the range [0, 255]. If a floating point number is passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setAlpha(alpha: number): void;

    /**
     * Obtains the alpha value of this brush.
     * @returns { number } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getAlpha(): number;

    /**
     * Sets a color filter for this brush.
     * @param { ColorFilter } filter - Color filter. If null is passed in, the color filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setColorFilter(filter: ColorFilter): void;

    /**
     * Obtains the color filter of this brush.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getColorFilter(): ColorFilter;
    /**
     * Sets an image filter for this brush.
     * @param { ImageFilter | null } filter - Image filter. If null is passed in, the image filter effect of the brush will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this brush.
     * @param { MaskFilter } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setMaskFilter(filter: MaskFilter): void;

    /**
     * Sets a shadow layer for this brush. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setShadowLayer(shadowLayer: ShadowLayer): void;

    /**
     * Sets the shader effect for this brush.
     * @param { ShaderEffect } shaderEffect - ShaderEffect object. If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setShaderEffect(shaderEffect: ShaderEffect): void;

    /**
     * Sets a blend mode for this brush. If this API is not called, the default blend mode is SRC_OVER.
     * @param { BlendMode } mode - Blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Resets this brush to the initial state.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    reset(): void;
  }

  /**
   * Implements a matrix.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Matrix {
    /**
     * Creates a Matrix object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor();

    /**
     * Sets this matrix as an identity matrix and rotates it by a given degree around the rotation point (px, py).
     * @param { number } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     * and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { number } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { number } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setRotation(degree: number, px: number, py: number): void;

    /**
     * Sets this matrix as an identity matrix and scales it with the coefficients (sx, sy) at the scale point (px, py).
     * @param { number } sx - Scale coefficient along the X axis. If a negative number is passed in,
     * the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { number } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     * the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { number } px - X coordinate of the scale point. The value is a floating point number.
     * @param { number } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setScale(sx: number, sy: number, px: number, py: number): void;

    /**
     * Sets this matrix as an identity matrix and translates it by a given distance (dx, dy).
     * @param { number } dx - Horizontal distance to translate. A positive number indicates a translation towards the positive direction of the X axis,
     * and a negative number indicates a translation towards the negative direction of the X axis. The value is a floating point number.
     * @param { number } dy - Vertical distance to translate. A positive number indicates a translation towards the positive direction of the Y axis,
     * and a negative number indicates a translation towards the negative direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setTranslation(dx: number, dy: number): void;

    /**
     * Sets parameters for this matrix.
     * @param { Array<number> } values - Each value in the array represents the following parameters:
     * values[0] - horizontal scale factor to store.
     * values[1] - horizontal skew factor to store.
     * values[2] - horizontal translation to store.
     * values[3] - vertical skew factor to store.
     * values[4] - vertical scale factor to store.
     * values[5] - vertical translation to store.
     * values[6] - input x-axis values perspective factor to store.
     * values[7] - input y-axis values perspective factor to store.
     * values[8] - perspective scale factor to store.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setMatrix(values: Array<number>): void;

    /**
     * Preconcats the existing matrix with the passed-in matrix.
     * @param { Matrix } matrix - Matrix object, which is on the right of a multiplication expression.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    preConcat(matrix: Matrix): void;

    /**
     * Checks whether this matrix is equal to another matrix.
     * @param { Matrix } matrix - Matrix to compare.
     * @returns { Boolean } Returns true if the two matrices are equal; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isEqual(matrix: Matrix): Boolean;

    /**
     * Inverts this matrix and returns the result.
     * @param { Matrix } matrix - Matrix object used to store the inverted matrix.
     * @returns { Boolean } Returns true if matrix can be inverted; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    invert(matrix: Matrix): Boolean;

    /**
     * Checks whether this matrix is an identity matrix.
     * @returns { Boolean } Returns true if matrix is identity; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isIdentity(): Boolean;

    /**
     * Obtains the value of a given index in this matrix. The index ranges from 0 to 8.
     * @param { number } index - Index. The value is an integer ranging from 0 to 8.
     * @returns { number } Returns value corresponding to index.Returns 0 if out of range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getValue(index: number): number;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a given degree around the rotation point (px, py).
     * @param { number } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     * and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { number } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { number } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    postRotate(degree: number, px: number, py: number): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the coefficient (sx, sy) at the scale point (px, py).
     * @param { number } sx - Scale coefficient along the X axis. If a negative number is passed in,
     * the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { number } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     * the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { number } px - X coordinate of the scale point. The value is a floating point number.
     * @param { number } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    postScale(sx: number, sy: number, px: number, py: number): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been translated by a given distance (dx, dy).
     * @param { number } dx - Horizontal distance to translate. A positive number indicates a translation towards the positive direction of the X axis,
     * and a negative number indicates a translation towards the negative direction of the X axis. The value is a floating point number.
     * @param { number } dy - Vertical distance to translate. A positive number indicates a translation towards the positive direction of the Y axis,
     * and a negative number indicates a translation towards the negative direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    postTranslate(dx: number, dy: number): void;
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a given degree around the rotation point (px, py).
     * @param { number } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     * and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { number } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { number } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    preRotate(degree: number, px: number, py: number): void;
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the coefficient (sx, sy) at the scale point (px, py).
     * @param { number } sx - Scale coefficient along the X axis. If a negative number is passed in,
     * the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { number } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     * the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { number } px - X coordinate of the scale point. The value is a floating point number.
     * @param { number } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    preScale(sx: number, sy: number, px: number, py: number): void;
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been translated by a given distance (dx, dy).
     * @param { number } dx - Horizontal distance to translate. A positive number indicates a translation towards the positive direction of the X axis,
     * and a negative number indicates a translation towards the negative direction of the X axis. The value is a floating point number.
     * @param { number } dy - Vertical distance to translate. A positive number indicates a translation towards the positive direction of the Y axis,
     * and a negative number indicates a translation towards the negative direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    preTranslate(dx: number, dy: number): void;
    /**
     * Resets this matrix to an identity matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    reset(): void;
    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point>;
    /**
     * Obtains all element values of this matrix.
     * @returns { Array<number> } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getAll(): Array<number>;
    /**
     * Sets the destination rectangle to the bounding rectangle of the shape obtained after transforming the source rectangle with a matrix transformation.
     * @param { common2D.Rect } dst - Rectangle object, which is used to store the bounding rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @returns { boolean } Returns true if the mapped src is equal to the dst; returns false is not equal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    mapRect(dst: common2D.Rect, src: common2D.Rect): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps a source rectangle to a destination rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @param { common2D.Rect } dst - Destination rectangle.
     * @param { ScaleToFit } scaleToFit - Mapping mode from the source rectangle to the target rectangle.
     * @returns { boolean } Returns true if dst is empty, and sets matrix to:
               | 0 0 0 |
               | 0 0 0 |
               | 0 0 1 |.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps the source point array to the destination point array.
     * Both the number of source points and that of destination points must be in the range [0, 4].
     * @param { Array<common2D.Point> } src - Array of source points. The array length must be the same as the value of count.
     * @param { Array<common2D.Point> } dst - Array of destination points. The array length must be the same as the value of count.
     * @param { number } count - Number of points in each array. The value is an integer.
     * @returns { boolean } Returns true if Matrix was constructed successfully
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: number): boolean;
  }

  /**
   * Enumerates the modes of scaling a source rectangle into a destination rectangle.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum ScaleToFit {
    /**
     * Scales the source rectangle to completely fill the destination rectangle, potentially changing the aspect ratio of the source rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FILL_SCALE_TO_FIT = 0,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the upper left corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    START_SCALE_TO_FIT = 1,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the center of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    CENTER_SCALE_TO_FIT = 2,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the lower right corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    END_SCALE_TO_FIT = 3
  }

  /**
   * Describes a region, which is used to describe the region where the shape can be drawn.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Region {
    /**
     * Checks whether a point is contained in this region.
     * @param { number } x - X coordinate of the point. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } y - Y coordinate of the point. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if (x, y) is inside region; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isPointContained(x: number, y:number): boolean;

    /**
     * Checks whether another region is contained in this region.
     * @param { Region } other - Region object.
     * @returns { boolean } Returns true if other region is completely inside the region object;
     * <br>returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    isRegionContained(other: Region): boolean;

    /**
     * Performs an operation on this region and another region, and stores the resulting region in this Region object.
     * @param { Region } region - Region object.
     * @param { RegionOp } regionOp - Operation mode of the region.
     * @returns { boolean } Returns true if replaced region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    op(region: Region, regionOp: RegionOp): boolean;

    /**
     * Checks whether a rectangle do not intersect with this region. Actually,
     * this API determines whether the rectangle does not intersect with the bounding rectangle of the region, and therefore the result may not be accurate.
     * @param { number } left - Left position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } top - Top position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } right - Right position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } bottom - Bottom position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if rect and region is not intersect; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    quickReject(left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Sets a region that matches the outline of a path within the cropping area.
     * @param { Path } path - Path object.
     * @param { Region } clip - Region object.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setPath(path: Path, clip: Region): boolean;

    /**
     * Sets a rectangle.
     * @param { number } left - Left position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } top - Top position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } right - Right position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @param { number } bottom - Bottom position of the rectangle. The value must be an integer. If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    setRect(left: number, top: number, right: number, bottom: number): boolean;
  }

  /**
   * Enumerates the operations for combining two regions.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum RegionOp {
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DIFFERENCE = 0,

    /**
     * Intersect operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INTERSECT = 1,

    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    UNION = 2,

    /**
     * Xor operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    REVERSE_DIFFERENCE = 4,

    /**
     * Replace operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    REPLACE = 5
  }

  /**
   * Enumerates the corner positions of a rounded rectangle.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum CornerPos {
    /**
     * Top left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TOP_LEFT_POS = 0,

    /**
     * Top right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TOP_RIGHT_POS = 1,

    /**
     * Bottom right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BOTTOM_RIGHT_POS = 2,

    /**
     * Bottom left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BOTTOM_LEFT_POS = 3
  }

  /**
   * Enumerates the constraints on the source rectangle.
   * It is used to specify whether to limit the sampling range within the source rectangle when drawing an image on a canvas.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum SrcRectConstraint {

    /**
     * The sampling range is strictly confined to the source rectangle, resulting in a slow sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    STRICT = 0,

    /**
     * The sampling range is not limited to the source rectangle and can extend beyond it, allowing for a high sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    FAST = 1
  }

  /**
   * A utility class that provides only static methods to convert data structs defined in other modules and common2D.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 15
   */
  class Tool {
    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type. (All four types of inputs are supported.
     * The following provides 13 example inputs.) The fourth type of Resource supports only the construction method $r('belonging.type.name').
     * Ensure that the resource has been defined in the main/resources/base/element directory. (The types color, string,
     * and integer are available for the belonging app, whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color;
  }
}

export default drawing;
