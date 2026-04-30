/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
/*** if arkts static */
import { ResourceColor } from '@ohos.arkui.component';
/*** endif */

/**
 * During application development, you often need to draw different elements. Typically, you can use ArkUI components to
 * draw the desired elements or effects. However, sometimes these components cannot meet the needs for custom graphics
 * or effects. In such cases, you can turn to the Drawing module for flexible custom drawing. This module provides basic
 * drawing capabilities, such as drawing rectangles, circles, points, straight lines, custom paths, and fonts.
 *
 * > **NOTE**
 * >
 * > - This module uses the physical pixel unit, px.
 * >
 * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
 * > transitions.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform [since 20]
 * @atomicservice [since 22]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace drawing {
  /**
   * Enumerates the blend modes. A blend mode combines two colors (source color and destination color) in a specific way
   * to create a new color. This is commonly used in graphics operations like overlaying, filtering, and masking. The
   * blending process applies the same logic to the red, green, and blue color channels separately. The alpha channel,
   * however, is handled according to the specific definitions of each blend mode.
   * For brevity, the following abbreviations are used:
   * s: source. d: destination. sa: source alpha. da: destination alpha.
   * The following abbreviations are used in the calculation result:
   * r: used when the calculation method is the same for the four channels (alpha, red, green, and blue channels). ra:
   * used when only the alpha channel is manipulated. **rc**: used when the other three color channels are manipulated.
   * The table below shows the effect of each blend mode, where the yellow rectangle is the source and the blue circle
   * is the destination.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  enum BlendMode {
    /**
     * r = 0, sets the destination pixels to fully transparent.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    CLEAR = 0,
    /**
     * r = s (all channels of the result equal those of the source), replaces the destination pixels with the source
     * pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC = 1,
    /**
     * r = d (all channels of the result equal those of the destination), keeps the destination pixels unchanged.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST = 2,
    /**
     * r = s + (1 - sa) * d, draws the source pixels over the destination pixels, considering the source's transparency.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_OVER = 3,
    /**
     * r = d + (1 - da) * s, draws the destination pixels over the source pixels, considering the destination's
     * transparency.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_OVER = 4,
    /**
     * r = s * da, retains only the intersection of the source pixels with the opaque parts of the destination.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_IN = 5,
    /**
     * r = d * sa, retains only the intersection of the destination pixels with the opaque parts of the source.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_IN = 6,
    /**
     * r = s * (1 - da), retains the parts of the source pixels that do not overlap with the destination.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_OUT = 7,
    /**
     * r = d * (1 - sa), retains the parts of the destination pixels that do not overlap with the source.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_OUT = 8,
    /**
     * r = s * da + d * (1 - sa), covers the destination pixels with the source pixels, showing the source only in the
     * opaque parts of the destination.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_ATOP = 9,
    /**
     * r = d * sa + s * (1 - da), covers the source pixels with the destination pixels, showing the destination only in
     * the opaque parts of the source.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_ATOP = 10,
    /**
     * r = s * (1 - da) + d * (1 - sa), shows only the non-overlapping parts of the source and destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    XOR = 11,
    /**
     * r = min(s + d, 1), adds the color values of the source and destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    PLUS = 12,
    /**
     * r = s * d, multiplies the color values of the source and destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    MODULATE = 13,
    /**
     * r = s + d - s * d, inverts the color values of the source and destination pixels, multiplies them, and then
     * inverts the result, typically producing a brighter outcome.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 14,
    /**
     * Selectively applies **MULTIPLY** or **SCREEN** based on the brightness of the destination pixels, enhancing
     * contrast.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    OVERLAY = 15,
    /**
     * rc = s + d - max(s * da, d * sa), ra = s + (1 - sa) * d, takes the darker color values between the source and
     * destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DARKEN = 16,
    /**
     * rc = s + d - min(s * da, d * sa), ra = s + (1 - sa) * d, takes the lighter color values between the source and
     * destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    LIGHTEN = 17,
    /**
     * Brightens the destination pixels by reducing contrast to reflect the source pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_DODGE = 18,
    /**
     * Darkens the destination pixels by increasing contrast to reflect the source pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_BURN = 19,
    /**
     * Selectively applies **MULTIPLY** or **SCREEN** based on the brightness of the source pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    HARD_LIGHT = 20,
    /**
     * Softly brightens or darkens the destination pixels based on the brightness of the source pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SOFT_LIGHT = 21,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = s + (1 - sa) * d, calculates the difference between the color values
     * of the source and destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DIFFERENCE = 22,
    /**
     * rc = s + d - two(s * d), ra = s + (1 - sa) * d, similar to **DIFFERENCE** but with lower contrast.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    EXCLUSION = 23,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d, multiplies the color values of the source and destination pixels,
     * typically resulting in a darker outcome.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    MULTIPLY = 24,
    /**
     * Uses the hue of the source pixels and the saturation and brightness of the destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    HUE = 25,
    /**
     * Uses the saturation of the source pixels and the hue and brightness of the destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SATURATION = 26,
    /**
     * Uses the hue and saturation of the source pixels and the brightness of the destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR = 27,
    /**
     * Uses the brightness of the source pixels and the hue and saturation of the destination pixels.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    LUMINOSITY = 28
  }

  /**
   * Enumerates the connection modes for vertex drawing.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 23 dynamic&static
   */
  enum VertexMode {
    /**
     * Every three vertices come from different triangles.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLES_VERTEXMODE = 0,
    /**
     * Consecutive triangles share one edge. It is efficient for continuous surfaces.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLESSTRIP_VERTEXMODE = 1,
    /**
     * All triangles share one vertex. It is suitable for circles and sectors.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLESFAN_VERTEXMODE = 2
  }

  /**
   * Enumerates the directions of a closed contour.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathDirection {
    /**
     * Adds a closed contour clockwise.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CLOCKWISE = 0,

    /**
     * Adds a closed contour counterclockwise.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    COUNTER_CLOCKWISE = 1
  }

  /**
   * Enumerates the fill types of a path.
   *
   * > **NOTE**
   *
   * > ![WINDING&EVEN_ODD](figures/image_PathFillType_Winding_Even_Odd.png)
   *
   * > As shown in the above figure, the path is a circle, the arrow indicates the path direction, **p** is any point "
   * > inside" the path, the blue line is the ray emitted from **p**, and the black arrow indicates the fill result
   * > using blue under the corresponding fill type. Under the **WINDING** fill rule, the number of intersection points
   * > of the ray and path is 2 (not 0), and therefore **p** is colored. Under the **EVEN_ODD** filling rule, the number
   * > of intersection points of the ray and path is 2 (an even number), and therefore **p** is not colored.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathFillType {
    /**
     * Specifies that "inside" is computed by a non-zero sum of signed edge crossings. Specifically, draws a point and
     * emits a ray in any direction. A count is used to record the number of intersection points of the ray and path,
     * and the initial count is 0. When encountering a clockwise intersection point (the path passes from the left to
     * the right of the ray), the count increases by 1. When encountering a counterclockwise intersection point (the
     * path passes from the right to the left of the ray), the count decreases by 1. If the final count is not 0, the
     * point is inside the path and needs to be colored. If the final count is 0, the point is not colored.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    WINDING = 0,

    /**
     * Specifies that "inside" is computed by an odd number of edge crossings. Specifically, draws a point and emits a
     * ray in any direction. If the number of intersection points of the ray and path is an odd number, the point is
     * considered to be inside the path and needs to be colored. If the number is an even number, the point is not
     * colored.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    EVEN_ODD = 1,

    /**
     * Same as **WINDING**, but draws outside of the path, rather than inside.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INVERSE_WINDING = 2,

    /**
     * Same as **EVEN_ODD**, but draws outside of the path, rather than inside.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INVERSE_EVEN_ODD = 3
  }

  /**
   * Enumerates the dimensions of matrix information in path measurement. It is often used in animation scenarios where
   * objects move along a path.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathMeasureMatrixFlags {
    /**
     * Matrix corresponding to the position information.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_POSITION_MATRIX = 0,
    /**
     * Matrix corresponding to the tangent information.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_TANGENT_MATRIX = 1,
    /**
     * Matrix corresponding to the position and tangent information.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_POSITION_AND_TANGENT_MATRIX = 2
  }

  /**
   * Rounded rectangle.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class RoundRect {
    /**
     * Copies a rounded rectangle.
     *
     * @param { RoundRect } roundRect - Rounded rectangle to be copied.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(roundRect: RoundRect);

    /**
     * A constructor used to create a **RoundRect** object. A rounded rectangle is created when both **xRadii** and
     * **yRadii** are greater than 0. Otherwise, only a rectangle is created.
     *
     * @param { common2D.Rect } rect - Rectangle that encloses the rounded rectangle to create.
     * @param { double } xRadii - Radius of the rounded corner on the X axis. The value is a floating point number. A
     *     negative number is invalid.
     * @param { double } yRadii - Radius of the rounded corner on the Y axis. The value is a floating point number. A
     *     negative number is invalid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(rect: common2D.Rect, xRadii: double, yRadii: double);

    /**
     * Sets the radii of the specified rounded corner in this rounded rectangle.
     *
     * @param { CornerPos } pos - Position of the rounded corner.
     * @param { double } x - Radius of the rounded corner on the X axis. The value is a floating point number. A
     *     negative number is invalid.
     * @param { double } y - Radius of the rounded corner on the Y axis. The value is a floating point number. A
     *     negative number is invalid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setCorner(pos: CornerPos, x: double, y: double): void;

    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     *
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point } Point. The horizontal coordinate indicates the radius of the rounded corner on the X
     *     axis, and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getCorner(pos: CornerPos): common2D.Point;

    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     *
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point | undefined } Point. The horizontal coordinate indicates the radius of
     *     the rounded corner on the X axis, and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getCorner(pos: CornerPos): common2D.Point | undefined;

    /**
     * Translates this rounded rectangle by an offset along the X axis and Y axis.
     *
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards the
     *     positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards the
     *     positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    offset(dx: double, dy: double): void;
  }

  /**
   * Enumerates the path operation types. It is often used in path combination and clipping scenarios.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathOp {
    /**
     * Difference operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,

    /**
     * Intersection operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1,

    /**
     * Union operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    UNION = 2,

    /**
     * XOR operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REVERSE_DIFFERENCE = 4
  }

  /**
   * Enumerates the path operation types contained in an iterator. It is used to read path operation instructions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  enum PathIteratorVerb {
    /**
     * Sets the start point.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    MOVE = 0,

    /**
     * Adds a line segment.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    LINE = 1,

    /**
     * Adds a quadratic Bezier curve for smooth transitions.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    QUAD = 2,

    /**
     * Adds a conic curve.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CONIC = 3,

    /**
     * Adds a cubic Bezier curve for smooth transitions.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CUBIC = 4,

    /**
     * Closes a path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CLOSE = 5,

    /**
     * The path setting is complete.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    DONE = CLOSE + 1
  }

  /**
   * Implements a path operation iterator. You can read path operation instructions by traversing the iterator.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 18.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  class PathIterator {
    /**
     * Creates an iterator and binds it with a path.
     *
     * @param { Path } path - **Path** object bound to the iterator.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(path: Path);

    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     *
     * @param { Array<common2D.Point> } points - Array of coordinate points. The array length must be at least the
     *     offset plus 4 to ensure that the array can hold all types of path data. After the operation is executed, this
     *     array is overwritten. The number of coordinate points to be filled depends on the operation type.
     *     Specifically, for **MOVE**, fill one coordinate; for **LINE**, fill two coordinates; for **QUAD**, fill three
     *     coordinates; for **CONIC**, fill three coordinates and one weight value (a total of 3.5 groups); for
     *     **CUBIC**, fill four coordinates; for **CLOSE** and **DONE**, do not fill any coordinate points.
     * @param { number } [offset] - Offset from the start of the array where writing begins. The default value is **0**.
     *     The value range is [0, size - 4], where **size** is the length of the coordinate point array.
     * @returns { PathIteratorVerb } Path operation type contained in the iterator.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     *
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { int } [offset] - Indicates the offset into the array where entries should be placed.
     *     The default value is 0.
     * @returns { PathIteratorVerb | undefined } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    next(points: Array<common2D.Point>, offset?: int): PathIteratorVerb | undefined;

    /**
     * Retrieves the next operation in this path, without moving the iterator.
     *
     * @returns { PathIteratorVerb } Path operation type contained in the iterator.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    peek(): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path, without moving the iterator.
     *
     * @returns { PathIteratorVerb | undefined } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    peek(): PathIteratorVerb | undefined;

    /**
     * Checks whether there is any next operation in the path operation iterator.
     *
     * @returns { boolean } Check result. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    hasNext(): boolean;
  }

  /**
   * A compound geometric path consisting of line segments, arcs, quadratic Bezier curves, and cubic Bezier curves.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Path {
    /**
     * Constructs a path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Constructs a copy of an existing path.
     *
     * @param { Path } path - Path to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(path: Path);

    /**
     * Updates the existing path with another path.
     *
     * @param { Path } src - Path for the update.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    set(src: Path): void;

    /**
     * Sets the start point of this path.
     *
     * @param { double } x - X coordinate of the start point. The value is a floating point number.
     * @param { double } y - Y coordinate of the start point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    moveTo(x: double, y: double): void;

    /**
     * Draws a line segment from the last point of this path to the target point. If the path is empty, the start point
     * (0, 0) is used.
     *
     * @param { double } x - X coordinate of the target point. The value is a floating point number.
     * @param { double } y - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    lineTo(x: double, y: double): void;

    /**
     * Draws an arc to this path using angle arc mode. This mode first defines a rectangle and takes its inscribed
     * ellipse. Then, it specifies a start angle and a sweep angle. The arc is the portion of the ellipse's
     * circumference defined by the start angle and the sweep angle. By default, a line segment from the last point of
     * the path to the start point of the arc is also added.
     *
     * @param { double } x1 - X coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } y1 - Y coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } x2 - X coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } y2 - Y coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } startDeg - Start angle. The start direction (0��) of the angle is the positive direction of the
     *     X axis.
     * @param { double } sweepDeg - Angle to sweep, in degrees. A positive value indicates a clockwise sweep, and a
     *     negative value indicates a counterclockwise sweep. The actual swipe degree is the modulo operation result of
     *     the input parameter by 360.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    arcTo(x1: double, y1: double, x2: double, y2: double, startDeg: double, sweepDeg: double): void;

    /**
     * Draws a quadratic Bezier curve from the last point of this path to the target point. If the path is empty, the
     * start point (0, 0) is used.
     *
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    quadTo(ctrlX: double, ctrlY: double, endX: double, endY: double): void;

    /**
     * Draws a conic curve from the last point of this path to the target point. If the path is empty, the start point (
     * 0, 0) is used.
     *
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape. The larger the value, the closer of
     *     the curve to the control point. If the value is less than or equal to 0, this API has the same effect as
     *     [lineTo]{@link drawing.Path.lineTo}. If the value is 1, it has the same effect as
     *     [quadTo]{@link drawing.Path.quadTo}. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    conicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * Draws a cubic Bezier curve from the last point of this path to the target point. If the path is empty, the start
     * point (0, 0) is used.
     *
     * @param { double } ctrlX1 - X coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlY1 - Y coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlX2 - X coordinate of the second control point. The value is a floating point number.
     * @param { double } ctrlY2 - Y coordinate of the second control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    cubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * Sets the start position relative to the last point of this path. If the path is empty, the start point (0, 0) is
     * used.
     *
     * @param { double } dx - X offset of the start point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } dy - Y offset of the start point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rMoveTo(dx: double, dy: double): void;

    /**
     * Draws a line segment from the last point of this path to a point relative to the last point. If the path is empty
     * , the start point (0, 0) is used.
     *
     * @param { double } dx - X offset of the target point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } dy - Y offset of the target point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rLineTo(dx: double, dy: double): void;

    /**
     * Draws a quadratic Bezier curve from the last point of this path to a point relative to the last point. If the
     * path is empty, the start point (0, 0) is used.
     *
     * @param { double } dx1 - X offset of the control point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } dy1 - Y offset of the control point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @param { double } dx2 - X offset of the target point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } dy2 - Y offset of the target point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rQuadTo(dx1: double, dy1: double, dx2: double, dy2: double): void;

    /**
     * Draws a conic curve from the last point of this path to a point relative to the last point. If the path is empty,
     * the start point (0, 0) is used.
     *
     * @param { double } ctrlX - X offset of the control point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlY - Y offset of the control point relative to the last point. A positive number indicates
     *     an upward shift from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape. The larger the value, the closer of
     *     the curve to the control point. If the value is less than or equal to 0, this API is equivalent to
     *     [rLineTo]{@link drawing.Path.rLineTo}, that is, adding a line segment from the last point of the path to the
     *     target point. If the value is 1, this API is equivalent to [rQuadTo]{@link drawing.Path.rQuadTo}. The value
     *     is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rConicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * Draws a cubic Bezier curve from the last point of this path to a point relative to the last point. If the path is
     * empty, the start point (0, 0) is used.
     *
     * @param { double } ctrlX1 - X offset of the first control point relative to the last point. A positive number
     *     indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the
     *     last point. The value is a floating point number.
     * @param { double } ctrlY1 - Y offset of the first control point relative to the last point. A positive number
     *     indicates an upward shift from the last point, and a negative number indicates a downward shift from the last
     *     point. The value is a floating point number.
     * @param { double } ctrlX2 - X offset of the second control point relative to the last point. A positive number
     *     indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the
     *     last point. The value is a floating point number.
     * @param { double } ctrlY2 - Y offset of the second control point relative to the last point. A positive number
     *     indicates an upward shift from the last point, and a negative number indicates a downward shift from the last
     *     point. The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point. A positive number indicates a
     *     rightward shift from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point. A positive number indicates an
     *     upward shift from the last point, and a negative number indicates a downward shift from the last point. The
     *     value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rCubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * Adds a polygon to this path.
     *
     * @param { Array<common2D.Point> } points - Array that holds the vertex coordinates of the polygon.
     * @param { boolean } close - Whether to close the path, that is, whether to add a line segment from the start point
     *     to the end point of the path. The value **true** means to close the path, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addPolygon(points: Array<common2D.Point>, close: boolean): void;

    /**
     * Combines this path with the passed-in path based on the specified operation mode.
     *
     * @param { Path } path - Path object, which will be combined with the current path.
     * @param { PathOp } pathOp - Defines an enum for the operation modes available for a path.
     * @returns { boolean } Result of the path combination result. The value **true** means that the path combination is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    op(path: Path, pathOp: PathOp): boolean;

    /**
     * Adds an arc to this path.
     * When **startAngle** and **sweepAngle** meet the following conditions, an oval instead of an arc is added:
     *
     * 1. The result of **startAngle** modulo 90 is close to 0.
     * 2. The value of **sweepAngle** is not in the range of (-360, 360).
     * In other cases, this API adds an arc by applying the result of **sweepAngle** modulo 360 to the path.
     *
     * @param { common2D.Rect } rect - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle of the arc, in degrees. The value 0 indicates the positive direction
     *     of the X axis. The value is a floating point number.
     * @param { double } sweepAngle - Angle to sweep, in degrees. A positive value indicates a clockwise sweep, and a
     *     negative value indicates a counterclockwise sweep. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addArc(rect: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * Adds a circle to this path in the specified direction. The start point of the circle is (x + radius, y).
     *
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number. If the value is less than
     *     or equal to 0, there is no effect.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addCircle(x: double, y: double, radius: double, pathDirection?: PathDirection): void;

    /**
     * Adds the inscribed ellipse of a rectangle to this path in the specified direction.
     *
     * @param { common2D.Rect } rect - Rectangular boundary of the oval.
     * @param { int } start - Start point of the oval, where 0, 1, 2, and 3 correspond to the upper, right, lower, and
     *     left points, respectively. The value is an integer greater than or equal to 0. If the value is greater than
     *     or equal to 4, the remainder of 4 is used.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addOval(rect: common2D.Rect, start: int, pathDirection?: PathDirection): void;

    /**
     * Adds a rectangle to a path in the specified direction. The start point is the upper left corner of the rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addRect(rect: common2D.Rect, pathDirection?: PathDirection): void;

    /**
     * Adds a rounded rectangle to a path in the specified direction. When the path direction is clockwise, the start
     * point is at the intersection of the rounded rectangle's left boundary and its lower left corner. When the path
     * direction is counterclockwise, the start point is at the intersection point between the left boundary and the
     * upper left corner.
     *
     * @param { RoundRect } roundRect - Rounded rectangle.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void;

    /**
     * Transforms the points in a path by a matrix and stores the resulting path in the current **Path** object.
     *
     * @param { Path } path - Source **Path** object.
     * @param { Matrix | null } matrix - **Matrix** object. The default value is an identity matrix.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addPath(path: Path, matrix?: Matrix | null): void;

    /**
     * Transforms the points in a path by matrix.
     *
     * @param { Matrix } matrix - **Matrix** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    transform(matrix: Matrix): void;

    /**
     * Checks whether a coordinate point is included in this path. For details, see
     * [PathFillType]{@link @ohos.graphics.drawing:drawing.PathFillType}.
     *
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { boolean } Check result. The value **true** means that the coordinate point is included in the path,
     *     and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    contains(x: double, y: double): boolean;

    /**
     * Sets the last point of a path.
     *
     * @param { double } x - X coordinate of a point. The value is a floating point number. **0** indicates the
     *     coordinate origin. A positive value places the point to the right of the coordinate origin, while a negative
     *     value places the point to the left.
     * @param { double } y - Y coordinate of a point. The value is a floating point number. **0** indicates the
     *     coordinate origin. A positive value places the point below the coordinate origin, while a negative value
     *     places the point above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setLastPoint(x: double, y: double): void;

    /**
     * Sets the fill type of this path. The fill type determines how "inside" of the path is drawn. For example, when
     * the fill type **Winding** is used, "inside" of the path is determined by a non-zero sum of signed edge crossings.
     * When **EvenOdd** is used, "inside" of the path is determined by an odd number of edge crossings.
     *
     * @param { PathFillType } pathFillType - Fill type of the path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setFillType(pathFillType: PathFillType): void;

    /**
     * Obtains the fill type of a path.
     *
     * @returns { PathFillType } Fill type of a path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getFillType(): PathFillType;

    /**
     * Gets fill type, the rule used to fill path.
     *
     * @returns { PathFillType | undefined } Returns the pathFillType.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getFillType(): PathFillType | undefined;

    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     *
     * @returns { common2D.Rect } Minimum bounding rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getBounds(): common2D.Rect;

    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getBounds(): common2D.Rect | undefined;

    /**
     * Closes this path by adding a line segment from the start point to the last point of the path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Offsets this path by specified distances along the X axis and Y axis and stores the resulting path in the
     * **Path** object returned.
     *
     * @param { number } dx - X offset. A positive number indicates an offset towards the positive direction of the X
     *     axis, and a negative number indicates an offset towards the negative direction of the X axis. The value is a
     *     floating point number.
     * @param { number } dy - Y offset. A positive number indicates an offset towards the positive direction of the Y
     *     axis, and a negative number indicates an offset towards the negative direction of the Y axis. The value is a
     *     floating point number.
     * @returns { Path } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    offset(dx: number, dy: number): Path;

    /**
     * Offsets this path by specified distances along the X axis and Y axis and stores
     * the resulting path in the Path object returned.
     *
     * @param { double } dx - X offset. A positive number indicates an offset towards
     *     the positive direction of the X axis,
     *     and a negative number indicates an offset towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Y offset. A positive number indicates an offset towards
     *     the positive direction of the Y axis,
     *     and a negative number indicates an offset towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @returns { Path | undefined } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    offset(dx: double, dy: double): Path | undefined;

    /**
     * Resets the path data.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    reset(): void;

    /**
     * Rewinds a path by clearing all its points and lines but reserves the memory space.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    rewind(): void;

    /**
     * Checks whether a path is empty.
     *
     * @returns { boolean } Whether a path is empty. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEmpty(): boolean;

    /**
     * Checks whether a path forms a rectangle.
     *
     * @param { common2D.Rect | null } rect - Rectangle object, which is used as an output parameter. If the path forms
     *     a rectangle, the rectangle object is overwritten with the rectangle represented by the path. Otherwise, the
     *     rectangle object remains unchanged. The value can be **null**, indicating that the rectangle represented by
     *     the path does not need to be obtained.
     * @returns { boolean } Whether a path forms a rectangle. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    isRect(rect: common2D.Rect | null): boolean;

    /**
     * Obtains the path length.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path. The value **true** means that the
     *     path is considered closed during measurement, and **false** means that the path is measured based on the
     *     actual closed status.
     * @returns { double } Path length.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getLength(forceClosed: boolean): double;

    /**
     * Obtains the coordinates and tangent at a distance from the start point of this path.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path. The value **true** means that the
     *     path is considered closed during measurement, and **false** means that the path is measured based on the
     *     actual closed status.
     * @param { double } distance - Distance from the start point. If a negative number is passed in, the value **0** is
     *     used. If a value greater than the path length is passed in, the path length is used. The value is a floating
     *     point number.
     * @param { common2D.Point } position - Coordinates obtained.
     * @param { common2D.Point } tangent - Tangent obtained, where **tangent.x** and **tangent.y** represent the cosine
     *     and sine of the tangent of the point, respectively.
     * @returns { boolean } Check result. The value **true** means that they are obtained, and **false** means the
     *     opposite. The values of **position** and **tangent** are not changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getPositionAndTangent(forceClosed: boolean, distance: double, position: common2D.Point, tangent: common2D.Point): boolean;

    /**
     * Extracts a segment of a path and appends it to a destination path.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path. The value **true** means that the
     *     path is considered closed during measurement, and **false** means that the path is measured based on the
     *     actual closed status.
     * @param { double } start - Distance from the start point of the path to the start point of the segment. If it is
     *     less than 0, it defaults to 0. If it is greater than or equal to **stop**, the extraction fails. The value is
     *     a floating point number.
     * @param { double } stop - Distance from the start point of the path to the end point of the segment. If it is less
     *     than or equal to **start**, the extraction fails. If it is greater than the path length, it defaults to the
     *     path length. The value is a floating point number.
     * @param { boolean } startWithMoveTo - Whether to execute [moveTo]{@link drawing.Path.moveTo} in the destination
     *     path to move to its start point. The value **true** means to move to the start point, and **false** means the
     *     opposite.
     * @param { Path } dst - Destination path. If the extraction succeeds, the segment is appended to the path. If the
     *     extraction fails, nothing changes.
     * @returns { boolean } Extraction result. The value **true** means that the extraction is successful, and **false**
     *     means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getSegment(forceClosed: boolean, start: double, stop: double, startWithMoveTo: boolean, dst: Path): boolean;

    /**
     * Checks whether a path is closed.
     *
     * @returns { boolean } Check result. The value **true** means that the path is closed, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isClosed(): boolean;

    /**
     * Obtains a transformation matrix at a specific position along the path, which represents the coordinates and
     * orientation of that point.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path. The value **true** means that the
     *     path is considered closed during measurement, and **false** means that the path is measured based on the
     *     actual closed status.
     * @param { double } distance - Distance from the start point. If a negative number is passed in, the value **0** is
     *     used. If a value greater than the path length is passed in, the path length is used. The value is a floating
     *     point number.
     * @param { Matrix } matrix - **Matrix** object used to store the matrix obtained.
     * @param { PathMeasureMatrixFlags } flags - Type of the matrix information obtained.
     * @returns { boolean } Whether the transformation matrix is obtained. The value **true** indicates that the
     *     operation is successful, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getMatrix(forceClosed: boolean, distance: double, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean;

    /**
     * Parses the path represented by an SVG string.
     *
     * @param { string } str - String in SVG format, which is used to describe the path.
     * @returns { boolean } Result of the parsing operation. The value **true** means that the operation is successful,
     *     and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    buildFromSvgString(str: string): boolean;

    /**
     * Converts path to an SVG string.
     *
     * @returns { string } The SVG string of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    convertToSvgString(): string;

    /**
     * Gets path point data.
     *
     * @returns { Array<common2D.Point> } path points array.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPointData(): Array<common2D.Point>;

    /**
     * Gets path verb data.
     *
     * @returns { Array<PathIteratorVerb> } path verbs array.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getVerbData(): Array<PathIteratorVerb>;

    /**
     * Gets path conic weight data.
     *
     * @returns { Array<double> } path conic weight array.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getConicWeightData(): Array<double>;

    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator } **Iterator** object of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    getPathIterator(): PathIterator;

    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator | undefined } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getPathIterator(): PathIterator | undefined;

    /**
     * Converts the existing path into an approximate path consisting of consecutive line segments.
     *
     * > **NOTE**
     * >
     * > - Avoid setting **acceptableError** to **0** as it heavily divides the curve path, significantly impacting
     * > performance and memory usage.
     * >
     * > - Setting a high **acceptableError** simplifies the path greatly by keeping only essential points, potentially
     * > distorting the original shape.
     * >
     * > - When you set a high **acceptableError** for curves such as ellipses, the fitting process often simplifies
     * > them to polygons by keeping just the start and end points of their Bezier curve segments.
     *
     * @param { number } acceptableError - Acceptable error of each line segment on a path. The value is a floating
     *     point number. If the value is less than 0, an error is reported.
     * @returns { Array<number> } An array of points in the approximate path, which contains at least two points. Each
     *     point consists of three values:
     *     <br>1. Length ratio of the point to the start point of the path. The value range is [0.0, 1.0].
     *     <br>2. X coordinate of a point.
     *     <br>3. Y coordinate of a point.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    approximate(acceptableError: number): Array<number>;

    /**
     * Approximates the path with a series of line segments.
     *
     * @param { double } acceptableError - Indicates the acceptable error for a line on the path. Should be no less than
     *     0.
     * @returns { Array<double> | undefined } - Returns with the array containing point components.
     *     <br>There are three components for each point:
     *     <br>1. Fraction along the length of the path that the point resides [0.0, 1.0].
     *     <br>2. The x coordinate of the point.
     *     <br>3. The y coordinate of the point.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    approximate(acceptableError: double): Array<double> | undefined;

    /**
     * Interpolates between the existing path and another path based on the given weight and stores the result in the
     * target path object. Interpolation is achievable if the two paths have the same number of points. The target path
     * is created based on the structure of the existing path.
     *
     * @param { Path } other - Another path object.
     * @param { double } weight - Interpolation weight, which must be within the range of [0.0, 1.0]. The value is a
     *     floating point number.
     * @param { Path } interpolatedPath - Target path object used to store the interpolation result.
     * @returns { boolean } Whether interpolation is successful. **true** means yes; **false** otherwise.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    interpolate(other: Path, weight: double, interpolatedPath: Path): boolean;

    /**
     * Checks whether the existing path and another path are compatible for interpolation in terms of structure and
     * operation sequence. If the paths contain conic operations, the weight values of the operations must be the same.
     *
     * @param { Path } other - Another path object.
     * @returns { boolean } Whether the existing path and another path are compatible for interpolation. **true** means
     *     yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isInterpolate(other: Path): boolean;

    /**
     * Checks whether the current path fill type is the inverse fill type. For example, the fill types **Winding** and
     * **EvenOdd** are not inverse types, while **InverseWinding** and **InverseEvenOdd** are inverse types.
     *
     * @returns { boolean } Whether the current path fill type is the inverse fill type. **true** means yes; **false**
     *     otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isInverseFillType(): boolean;

    /**
     * Toggles the fill type of the path to the inverse type. For example, if the **Winding** fill type is used, the
     * fill type after inversion is **InverseWinding**. If the **EvenOdd** fill type is used, the fill type after
     * inversion is **InverseEvenOdd**. The same applies to the other two types.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    toggleInverseFillType(): void;

    /**
     * Gets the last point of the path.
     *
     * @returns { common2D.Point } Returns the last point of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getLastPoint(): common2D.Point;

    /**
     * Gets the last point of the path.
     *
     * @returns { common2D.Point | undefined } Returns the last point of the path, or undefined if the path is empty.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getLastPoint(): common2D.Point | undefined;

    /**
     * Checks if two paths are equal.
     * @param { Path } path - Another Path object to compare.
     * @returns { boolean } Returns true if the two paths are equal, otherwise returns false.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isEqual(path: Path): boolean;
  }

  /**
   * Enumerates the modes for drawing multiple points in an array.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PointMode {
    /**
     * Draws each point separately.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    POINTS = 0,

    /**
     * Draws every two points as a line segment.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    LINES = 1,

    /**
     * Draws an array of points as an open polygon.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    POLYGON = 2
  }

  /**
   * Enumerates the filter modes.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FilterMode {
    /**
     * Nearest filter mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILTER_MODE_NEAREST = 0,

    /**
     * Linear filter mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILTER_MODE_LINEAR = 1
  }

  /**
   * Enumerates the shadow drawing behaviors.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShadowFlag {
    /**
     * No shadow effect is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * The occluder is translucent.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPARENT_OCCLUDER = 1,

    /**
     * Only the geometric shadow effect is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOMETRIC_ONLY = 2,

    /**
     * Shadow effects are combined, including the translucent occluder and geometric shadow.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ALL = 3
  }

  /**
   * Implements sampling options.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class SamplingOptions {
    /**
     * Creates a **SamplingOptions** object, where the default value of
     * [FilterMode]{@link @ohos.graphics.drawing:drawing.FilterMode} is **FILTER_MODE_NEAREST**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Creates a **SamplingOptions** object.
     *
     * @param { FilterMode } filterMode - Filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(filterMode: FilterMode);
  }

  /**
   * Defines font features, which are typesetting rules within a font that determine how glyphs look, such as ligatures,
   * alternates, and superscripts/subscripts.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 24 static
   */
  interface FontFeature {
    /**
     * Name of a font feature. Common font feature names include **liga**, **frac**, and **case**. A font feature needs
     * a TTF file to work.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    name: string;
    /**
     * Value of a font feature, which is a floating point number. You are advised to determine the valid value range by
     * using a font viewing tool or referring to the font document.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    value: double;
  }

  /**
   * A carrier that carries the drawn content and drawing status.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   * >
   * >
   * > The canvas comes with a default brush. The brush is black, has anti-aliasing enabled, and has no other style
   * > effects. This default brush is used when no brush or pen is actively set in the canvas.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Canvas {
    /**
     * Creates a **Canvas** object that uses a **PixelMap** as the drawing target.
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** used to create the object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(pixelmap: image.PixelMap);

    /**
     * Draws a rectangle. By default, black is used for filling.
     *
     * @param { common2D.Rect } rect - Rectangle to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawRect(rect: common2D.Rect): void;

    /**
     * Draws a rectangle. By default, black is used for filling. This API provides better performance than
     * [drawRect]{@link drawing.Canvas#drawRect(rect: common2D.Rect)} and is recommended.
     *
     * @param { double } left - X coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } top - Y coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } right - X coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number.
     * @param { double } bottom - Y coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRect(left: double, top: double, right: double, bottom: double): void;

    /**
     * Draws a rounded rectangle.
     *
     * @param { RoundRect } roundRect - Rounded rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRoundRect(roundRect: RoundRect): void;

    /**
     * Draws two nested rounded rectangles. The outer rectangle boundary must contain the inner rectangle boundary.
     * Otherwise, there is no drawing effect.
     *
     * @param { RoundRect } outer - Outer rounded rectangle.
     * @param { RoundRect } inner - Inner rounded rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawNestedRoundRect(outer: RoundRect, inner: RoundRect): void;

    /**
     * Uses a brush to fill the drawable area of the canvas.
     *
     * @param { Brush } brush - **Brush** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawBackground(brush: Brush): void;

    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     *
     * @param { Path } path - **Path** object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector, which is used to determine the z-axis offset of an occluder
     *     relative to the canvas, based on its x and y coordinates.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color } ambientColor - Color of the ambient shadow.
     * @param { common2D.Color } spotColor - Color of the spot shadow.
     * @param { ShadowFlag } flag - Defines an enum for the shadow flags.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color, spotColor: common2D.Color, flag: ShadowFlag) : void;

    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     *
     * @param { Path } path - **Path** object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector, which is used to calculate the offset in the Z axis.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color | int } ambientColor - Ambient shadow color, represented by a 32-bit unsigned integer in
     *     hexadecimal ARGB format.
     * @param { common2D.Color | int } spotColor - Spot shadow color, represented by a 32-bit unsigned integer in
     *     hexadecimal ARGB format.
     * @param { ShadowFlag } flag - Defines an enum for the shadow flags.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color | int, spotColor: common2D.Color | int, flag: ShadowFlag) : void;

    /**
     * Draws a circle. If the radius is less than or equal to zero, nothing is drawn. By default, black is used for
     * filling.
     *
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number greater than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawCircle(x: double, y: double, radius: double): void;

    /**
     * Draws an image. The coordinates of the upper left corner of the image are (left, top).
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** of an image.
     * @param { double } left - X coordinate of the upper left corner of the image. The value is a floating point
     *     number.
     * @param { double } top - Y coordinate of the upper left corner of the image. The value is a floating point number.
     * @param { SamplingOptions } samplingOptions - Sampling options. By default, the **SamplingOptions** object created
     *     using the no-argument constructor is used. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawImage(pixelmap: image.PixelMap, left: double, top: double, samplingOptions?: SamplingOptions): void;

    /**
     * Splits an image into multiple sections based on the lattice object's configuration and draws each section into
     * the specified target rectangle on the canvas. When this API is used, the anti-aliasing enablement setting does
     * not take effect.
     *
     * The intersections of even-numbered rows and columns (starting from 0) are fixed points. If the fixed lattice area
     * fits within the target rectangle, it will be drawn without scaling. Otherwise, it will be scaled proportionally
     * to fit the target rectangle. Any remaining space will be filled by stretching or compressing the remaining
     * sections to cover the entire target rectangle.
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** to draw.
     * @param { Lattice } lattice - Lattice object.
     * @param { common2D.Rect } dstRect - Target rectangle.
     * @param { FilterMode } filterMode - Filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawImageLattice(pixelmap: image.PixelMap, lattice: Lattice, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * Splits an image into nine sections using two horizontal and two vertical lines: four edge sections, four corner
     * sections, and a central section. When this API is used, the anti-aliasing enablement setting does not take
     * effect.
     *
     * If the four corner sections are smaller than the target rectangle, they will be drawn in the target rectangle
     * without scaling. Otherwise, they will be scaled to fit the target rectangle. Any remaining space will be filled
     * by stretching or compressing the other five sections to cover the entire target rectangle.
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** to draw.
     * @param { common2D.Rect } center - Central rectangle that divides the image into nine sections by extending its
     *     four edges.
     * @param { common2D.Rect } dstRect - Target rectangle drawn on the canvas.
     * @param { FilterMode } filterMode - Filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawImageNine(pixelmap: image.PixelMap, center: common2D.Rect, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * Draws an image onto a specified area of the canvas.
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** of an image.
     * @param { common2D.Rect } dstRect - **Rectangle** object, which specifies the area of the canvas onto which the
     *     image will be drawn.
     * @param { SamplingOptions } samplingOptions - Sampling options. By default, the **SamplingOptions** object created
     *     using the no-argument constructor is used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawImageRect(pixelmap: image.PixelMap, dstRect: common2D.Rect, samplingOptions?: SamplingOptions): void;

    /**
     * Draws a portion of an image onto a specified area of the canvas.
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** of an image.
     * @param { common2D.Rect } srcRect - **Rectangle** object, which specifies the portion of the image to draw.
     * @param { common2D.Rect } dstRect - **Rectangle** object, which specifies the area of the canvas onto which the
     *     image will be drawn.
     * @param { SamplingOptions } samplingOptions - Sampling options. By default, the **SamplingOptions** object created
     *     using the no-argument constructor is used.
     * @param { SrcRectConstraint } constraint - Constraint type of the source rectangle. The default value is
     *     **STRICT**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawImageRectWithSrc(pixelmap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      samplingOptions?: SamplingOptions, constraint?: SrcRectConstraint): void;

    /**
     * Fills the drawable area of the canvas with the specified color and
     * [BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}.
     *
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is **SRC_OVER**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawColor(color: common2D.Color, blendMode?: BlendMode): void;

    /**
     * Fills the drawable area of the canvas with the specified color and
     * [BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}. This API provides better performance than
     * [drawColor]{@link drawing.Canvas#drawColor(color: common2D.Color, blendMode?: BlendMode)} and is recommended.
     *
     * @param { int } alpha - Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255
     *     . Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 2
     *     55. Any passed-in floating point number is rounded down.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is **SRC_OVER**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawColor(alpha: int, red: int, green: int, blue: int, blendMode?: BlendMode): void;

    /**
     * Fills the drawable area of the canvas with the specified color and
     * [BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}.
     *
     * @param { int } color - Color in hexadecimal ARGB format.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is **SRC_OVER**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawColor(color: int, blendMode?: BlendMode): void;

    /**
     * Draws an oval on the canvas, where the shape and position of the oval are defined by its bounding rectangle.
     *
     * @param { common2D.Rect } oval - Rectangle. The oval inscribed within the rectangle is the oval to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawOval(oval: common2D.Rect): void;

    /**
     * Draws an arc on the canvas. with the start angle and sweep angle specified. If the absolute value of the sweep
     * angle exceeds 360 degrees, an ellipse is drawn.
     *
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number. When the degree is
     *     **0**, the start point is located at the right end of the oval. A positive number indicates that the start
     *     point is placed clockwise, and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number. A positive
     *     number indicates a clockwise sweep, and a negative value indicates a counterclockwise swipe. The valid range
     *     is from -360 degrees to 360 degrees. If the absolute value of the sweep angle exceeds 360 degrees, an ellipse
     *     is drawn.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawArc(arc: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * Draws an arc on the canvas. It enables you to define the start angle, sweep angle, and whether the arc's
     * endpoints should connect to its center.
     *
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number. When the degree is
     *     **0**, the start point is located at the right end of the oval. A positive number indicates that the start
     *     point is placed clockwise, and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number. A positive
     *     number indicates a clockwise sweep, and a negative value indicates a counterclockwise swipe. The swipe angle
     *     can exceed 360 degrees, and a complete ellipse is drawn.
     * @param { boolean } useCenter - Whether the start point and end point of the arc are connected to its center. The
     *     value **true** means that they are connected to the center; the value **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawArcWithCenter(arc: common2D.Rect, startAngle: double, sweepAngle: double, useCenter: boolean): void;

    /**
     * Draws a point.
     *
     * @param { double } x - X coordinate of the point. The value is a floating point number.
     * @param { double } y - Y coordinate of the point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawPoint(x: double, y: double): void;

    /**
     * Draws a group of points, line segments, or polygons on the canvas, with the specified drawing mode. An array is
     * used to hold these points.
     *
     * @param { Array<common2D.Point> } points - Array that holds the points to draw. The length cannot be **0**.
     * @param { PointMode } mode - Mode in which the points are drawn. The default value is
     *     **drawing.PointMode.POINTS**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawPoints(points: Array<common2D.Point>, mode?: PointMode): void;

    /**
     * Draws a custom path, which contains a set of path outlines. Each path outline can be open or closed.
     *
     * @param { Path } path - **Path** object to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawPath(path: Path): void;

    /**
     * Draws a line segment from the start point to the end point. If the coordinates of the start point are the same as
     * those of the end point, nothing is drawn.
     *
     * @param { double } x0 - X coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } y0 - Y coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } x1 - X coordinate of the end point of the line segment. The value is a floating point number.
     * @param { double } y1 - Y coordinate of the end point of the line segment. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawLine(x0: double, y0: double, x1: double, y1: double): void;

    /**
     * Draws a single character. If the typeface of the current font does not support the character to draw, the system
     * typeface is used to draw the character.
     *
     * @param { string } text - Single character to draw. The length of the string must be **1**.
     * @param { Font } font - **Font** object.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of the character baseline (
     *     blue line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of the character baseline (
     *     blue line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawSingleCharacter(text: string, font: Font, x: double, y: double): void;

    /**
     * Draws a single character with font features. If the typeface of the current font does not support the character
     * to draw, the system typeface is used to draw the character.
     *
     * @param { string } text - Single character to draw. The length of the string must be **1**.
     * @param { Font } font - **Font** object.
     * @param { double } x - X coordinate of the left endpoint of the drawn character baseline. The value is a floating
     *     point number.
     * @param { double } y - Y coordinate of the left endpoint of the drawn character baseline. The value is a floating
     *     point number.
     * @param { Array<FontFeature> } features - Array of the font feature object. For an empty array, the preset font
     *     features in the TrueType Font (TTF) file are used.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    drawSingleCharacterWithFeatures(text: string, font: Font, x: double, y: double, features: Array<FontFeature>): void;

    /**
     * Draws a text blob. If the typeface used to construct **blob** does not support a character, that character will
     * not be drawn.
     *
     * @param { TextBlob } blob - **TextBlob** object.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of the text baseline (blue
     *     line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of the text baseline (blue
     *     line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawTextBlob(blob: TextBlob, x: double, y: double): void;

    /**
     * Draws the array of glyphs with specified font. Nothing is drawn if glyphCount is smaller than or equals to 0.
     *
     * @param { Array<int> } glyphIds - Indicates an array of glyph IDs.
     * @param { int } glyphIdOffset - Indicates the number of elements to skip before drawing in glyphIds array.
     * @param { Array<common2D.Point> } positions - Indicates an array of positions.
     * @param { int } positionOffset - Indicates the number of elements to skip before drawing in positions.
     * @param { int } glyphCount - Indicates the number of glyphs to be drawn.
     * @param { Font } font - Indicates the font used for drawing.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    drawGlyphs(glyphIds: Array<int>, glyphIdOffset: int, positions: Array<common2D.Point>,
      positionOffset: int, glyphCount: int, font: Font): void;

    /**
     * Draws a **PixelMap** based on a mesh, with the mesh vertices evenly distributed across the **PixelMap**. (This
     * API works with brushes but not pens.)
     *
     * @param { image.PixelMap } pixelmap - **PixelMap** to draw.
     * @param { int } meshWidth - Number of columns in the mesh. The value is an integer greater than 0.
     * @param { int } meshHeight - Number of rows in the mesh. The value is an integer greater than 0.
     * @param { Array<double> } vertices - Array of vertices, which specify the position to draw. The value is a
     *     floating-point array and the size must be ((meshWidth+1) * (meshHeight+1) + vertOffset) * 2.
     * @param { int } vertOffset - Number of vert elements to skip before drawing. The value is an integer greater than
     *     or equal to 0.
     * @param { Array<int> | null } colors - Array of colors, which specify the color at each vertex. The value is an
     *     integer array and can be null. The size must be (meshWidth+1) * (meshHeight+1) + colorOffset. [since 20]
     * @param { int } colorOffset - Number of color elements to skip before drawing. The value is an integer greater
     *     than or equal to 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawPixelMapMesh(pixelmap: image.PixelMap, meshWidth: int, meshHeight: int,
      vertices: Array<double>, vertOffset: int, colors: Array<int> | null, colorOffset: int): void;

    /**
     * Draws a triangle mesh described by the vertex array.
     *
     * @param { VertexMode } vertexMode - Connection mode of the vertex to be drawn.
     * @param { int } vertexCount - Number of elements in the vertex array. The value is an integer greater than or
     *     equal to 3.
     * @param { Array<common2D.Point> } positions - Array that holds the position of every vertex. The array cannot be
     *     null and its length must be equal to the value of **vertexCount**.
     * @param { Array<common2D.Point> | null } texs - Array of texture space coordinates corresponding to the vertices.
     *     This array can be null, which indicates that the texture space is invalid. If not null, the length of the
     *     array must be equal to the value of **vertexCount**.
     * @param { Array<int> | null } colors - Array of colors corresponding to the vertices, which is used for
     *     interpolation in triangles. This array can be null, which indicates that the color effect is the default
     *     color set by the user. If not null, the length of the array must be equal to the value of **vertexCount**.
     * @param { int } indexCount - Number of indices. The value can be **0** or a value greater than or equal to 3. If
     *     the value is not **0**, the value must be an integer greater than or equal to 3.
     * @param { Array<int> | null } indices - Array of vertex indices. The value can be null. In this case, the value of
     *     **indexCount** is ignored (an integer greater than or equal to 3 or equal to 0). If not null, the value
     *     length must be the same as that of **indexCount**.
     * @param { BlendMode } mode - Color blend mode.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    drawVertices(vertexMode: VertexMode, vertexCount: int, positions: Array<common2D.Point>,
      texs: Array<common2D.Point> | null, colors: Array<int> | null, indexCount: int,
      indices: Array<int> | null, mode: BlendMode): void;

    /**
     * Draws a region.
     *
     * @param { Region } region - Region to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRegion(region: Region): void;

    /**
     * Attaches a pen to the canvas. When you draw on the canvas, the pen's style is used to outline shapes.
     *
     * > **NOTE**
     * >
     * > If the pen effect changes after this API is called, you must call the API again if you want to use the new
     * > effect in the subsequent drawing.
     *
     * @param { Pen } pen - **Pen** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    attachPen(pen: Pen): void;

    /**
     * Attaches a brush to the canvas. When you draw on the canvas, the brush's style is used to fill the interior of
     * shapes.
     *
     * > **NOTE**
     * >
     * > If the brush effect changes after this API is called, you must call the API again if you want to use the new
     * > effect in the subsequent drawing.
     *
     * @param { Brush } brush - **Brush** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    attachBrush(brush: Brush): void;

    /**
     * Detaches the pen from the canvas. When you draw on the canvas, the pen is no longer used to outline shapes.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    detachPen(): void;

    /**
     * Detaches the brush from the canvas. When you draw on the canvas, the brush is no longer used to fill the interior
     * of shapes.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    detachBrush(): void;

    /**
     * Saves the canvas states (canvas matrix and drawable area) to the top of the stack. This API must be used in pair
     * with [restore]{@link drawing.Canvas.restore}.
     *
     * @returns { int } Number of canvas statuses. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    save(): int;

    /**
     * Saves the matrix and cropping region of the canvas, and allocates a **PixelMap** for subsequent drawing. If you
     * call [restore]{@link drawing.Canvas.restore}, changes made to the matrix and clipping region are discarded, and
     * the PixelMap is drawn.
     *
     * @param { common2D.Rect | null } rect - **Rect** object, which is used to limit the size of the graphics layer.
     *     The default value is the current canvas size.
     * @param { Brush | null } brush - **Brush** object. The alpha value, filter effect, and blend mode of the brush are
     *     applied when the **PixelMap** is drawn. If null is passed in, no effect is applied.
     * @returns { long } Number of canvas statuses that have been saved. The value is a positive integer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    saveLayer(rect?: common2D.Rect | null, brush?: Brush | null): long;

    /**
     * Clears the canvas with a given color. This API has the same effect as
     * [drawColor]{@link drawing.Canvas#drawColor(color: common2D.Color, blendMode?: BlendMode)}.
     *
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clear(color: common2D.Color): void;

    /**
     * Clears the canvas with a given color.
     *
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    clear(color: common2D.Color | int): void;

    /**
     * Restores the canvas state (canvas matrix and clipping area) saved on the top of the stack.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    restore(): void;

    /**
     * Restores the canvas state (canvas matrix and clipping area) to a specified number.
     *
     * @param { int } count - Depth of the canvas statuses to restore. The value is an integer. If the value is less
     *     than or equal to 1, the canvas is restored to the initial state. If the value is greater than the number of
     *     canvas statuses that have been saved, no operation is performed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    restoreToCount(count: int): void;

    /**
     * Obtains the number of canvas states (canvas matrix and clipping area) saved in the stack.
     *
     * @returns { int } Number of canvas statuses that have been saved. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getSaveCount(): int;

    /**
     * Obtains the canvas width.
     *
     * @returns { int } Canvas width. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWidth(): int;

    /**
     * Obtains the canvas height.
     *
     * @returns { int } Canvas height. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getHeight(): int;

    /**
     * Obtains the bounds of the cropping region of the canvas.
     *
     * @returns { common2D.Rect } Bounds of the cropping region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getLocalClipBounds(): common2D.Rect;

    /**
     * Obtains the bounds of the cropping region of the canvas.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getLocalClipBounds(): common2D.Rect | undefined;

    /**
     * Obtains the canvas matrix.
     *
     * @returns { Matrix } Canvas matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getTotalMatrix(): Matrix;

    /**
     * Obtains the canvas matrix.
     *
     * @returns { Matrix | undefined } Canvas matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTotalMatrix(): Matrix | undefined;

    /**
     * Applies a scaling matrix on top of the current canvas matrix (identity matrix by default). Subsequent drawing and
     * clipping operations will automatically have a scaling effect applied to the shapes and positions.
     *
     * @param { double } sx - Scale ratio on the X axis. The value is a floating point number.
     * @param { double } sy - Scale ratio on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    scale(sx: double, sy: double): void;

    /**
     * Applies a skewing matrix on top of the current canvas matrix (identity matrix by default). Subsequent drawing and
     * clipping operations will automatically have a skewing effect applied to the shapes and positions.
     *
     * @param { double } sx - Amount of tilt on the X axis. The value is a floating point number. A positive number
     *     tilts the drawing rightwards along the positive direction of the Y axis, and a negative number tilts the
     *     drawing leftwards along the positive direction of the Y axis.
     * @param { double } sy - Amount of tilt on the Y axis. The value is a floating point number. A positive number
     *     tilts the drawing downwards along the positive direction of the X axis, and a negative number tilts the
     *     drawing upwards along the positive direction of the X axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    skew(sx: double, sy: double) : void;

    /**
     * Applies a rotation matrix on top of the current canvas matrix (identity matrix by default). Subsequent drawing
     * and clipping operations will automatically have a rotation effect applied to their shapes and positions.
     *
     * @param { double } degrees - Angle to rotate, in degrees. The value is a floating point number. A positive value
     *     indicates a clockwise rotation, and a negative value indicates a counterclockwise rotation.
     * @param { double } sx - X coordinate of the rotation center. The value is a floating point number.
     * @param { double } sy - Y coordinate of the rotation center. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    rotate(degrees: double, sx: double, sy: double) : void;

    /**
     * Applies a translation matrix on top of the current canvas matrix (identity matrix by default). Subsequent drawing
     * and clipping operations will automatically have a translation effect applied to the shapes and positions.
     *
     * @param { double } dx - Distance to translate on the X axis. The value is a floating point number.
     * @param { double } dy - Distance to translate on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    translate(dx: double, dy: double): void;

    /**
     * Clips the drawable area of the canvas using a custom path.
     *
     * @param { Path } path - **Path** object.
     * @param { ClipOp } clipOp - Clip mode. The default value is **INTERSECT**.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value **true** means to enable anti-
     *     aliasing, and **false** means the opposite. Default value: **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipPath(path: Path, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Clips the drawable area of the canvas using a rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle.
     * @param { ClipOp } clipOp - Clip mode. The default value is **INTERSECT**.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value **true** means to enable anti-
     *     aliasing, and **false** means the opposite. Default value: **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRect(rect: common2D.Rect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Multiplies the current canvas matrix by the incoming matrix on the left. This API does not affect previous
     * drawing operations, but subsequent drawing and clipping operations will be influenced by this matrix in terms of
     * shape and position.
     *
     * @param { Matrix } matrix - Matrix object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    concatMatrix(matrix: Matrix): void;

    /**
     * Clips a region on the canvas.
     *
     * @param { Region } region - **Region** object, which indicates the range to clip.
     * @param { ClipOp } clipOp - Clipping mode. The default value is **INTERSECT**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRegion(region: Region, clipOp?: ClipOp): void;

    /**
     * Clips a rounded rectangle on the canvas.
     *
     * @param { RoundRect } roundRect - **RoundRect** object, which indicates the range to clip.
     * @param { ClipOp } clipOp - Clipping mode. The default value is **INTERSECT**.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value **true** means to enable anti-
     *     aliasing, and **false** means the opposite. Default value: **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRoundRect(roundRect: RoundRect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Checks whether the region that can be drawn is empty after clipping.
     *
     * @returns { boolean } Check result. The value **true** means that the region is empty, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isClipEmpty(): boolean;

    /**
     * Checks whether the current layer that drawn into the device is opaque.
     *
     * @returns { boolean } Returns true if the current layer that drawn into the device is opaque.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isOpaque(): boolean;

    /**
     * Sets a matrix for the canvas. Subsequent drawing and clipping operations will be affected by this matrix in terms
     * of shape and position.
     *
     * @param { Matrix } matrix - Matrix object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMatrix(matrix: Matrix): void;

    /**
     * Resets the matrix of this canvas to an identity matrix.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    resetMatrix(): void;

    /**
     * Resets the clip status.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resetClip(): void;

    /**
     * Checks whether the path is not intersecting with the canvas area. The canvas area includes its boundaries.
     *
     * @param { Path } path - **Path** object.
     * @returns { boolean } Check result. The value **true** means that the path is not intersecting with the canvas
     *     area, and **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    quickRejectPath(path: Path): boolean;

    /**
     * Checks whether the rectangle is not intersecting with the canvas area. The canvas area includes its boundaries.
     *
     * @param { common2D.Rect } rect - Describes a rectangle.
     * @returns { boolean } Check result. The value **true** means that the rectangle is not intersecting with the
     *     canvas area, and **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    quickRejectRect(rect: common2D.Rect): boolean;
  }

  /**
   * Enumerates the canvas clipping modes.
   *
   * > **NOTE**
   * >
   * > The diagrams show the result of cropping a circle based on different enumerated values after a rectangle is
   * > cropped in INTERSECT mode. The green area is the final area obtained.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ClipOp {
    /**
     * Clips a specified area. That is, the difference set is obtained.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,
    /**
     * Retains a specified area. That is, the intersection is obtained.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1
  }

  /**
   * Describes a series of consecutive glyphs with the same attributes in a text blob.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TextBlobRunBuffer {
    /**
     * Index of the glyph. The value is an integer. If a floating point number is passed in, the value is rounded down.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    glyph: int;
    /**
     * X coordinate of the start point of the text blob. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    positionX: double;
    /**
     * Y coordinate of the start point of the text blob. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    positionY: double;
  }

  /**
   * Enumerates the text encoding types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  enum TextEncoding {
    /**
     * One byte is used to indicate UTF-8 or ASCII characters.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF8 = 0,
    /**
     * Two bytes are used to indicate most Unicode characters.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF16 = 1,
    /**
     * Four bytes are used to indicate all Unicode characters.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF32 = 2,
    /**
     * Two bytes are used to indicate the glyph index.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_GLYPH_ID = 3
  }

  /**
   * Defines a block consisting of one or more characters with the same font.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class TextBlob {
    /**
     * Converts a value of the string type into a **TextBlob** object.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - **Font** object.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is **TEXT_ENCODING_UTF8**. Currently, only
     *     **TEXT_ENCODING_UTF8** takes effect, and other encoding types are treated as **TEXT_ENCODING_UTF8**.
     * @returns { TextBlob } **TextBlob** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob;

    /**
     * Converts a value of the string type into a TextBlob object.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is TEXT_ENCODING_UTF8.
     *     Currently, only TEXT_ENCODING_UTF8 takes effect, and other encoding types are treated as TEXT_ENCODING_UTF8.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob | undefined;

    /**
     * Creates a **TextBlob** object from the text. The coordinates of each font in the **TextBlob** object are
     * determined by the coordinate information in the **points** array.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { number } len - Number of glyphs, which is an integer obtained from
     *     [countText]{@link @ohos.graphics.drawing:drawing.Font.countText}.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font. The
     *     array length must be the same as the value of **len**.
     * @param { Font } font - **Font** object.
     * @returns { TextBlob } **TextBlob** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob;

    /**
     * Creates a TextBlob object from the text.
     * The coordinates of each font in the TextBlob object are determined by
     * the coordinate information in the points array.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { int } len - Number of fonts. The value is an integer and is obtained from countText.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font.
     *     The array length must be the same as the value of len.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromPosText(text: string, len: int, points: common2D.Point[], font: Font): TextBlob | undefined;

    /**
     * Creates a **TextBlob** object based on the **RunBuffer** information.
     *
     * @param { Array<TextBlobRunBuffer> } pos - **TextBlobRunBuffer** array.
     * @param { Font } font - **Font** object.
     * @param { common2D.Rect } [bounds] - Bounding box. If this parameter is not set, there is no bounding box.
     * @returns { TextBlob } **TextBlob** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob;

    /**
     * Creates a Textblob object based on the RunBuffer information.
     *
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } [bounds] - Optional run bounding box. The default value is null;
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob | undefined;

    /**
     * Obtains the rectangular bounding box of the text blob.
     *
     * @returns { common2D.Rect } Rectangular bounding box.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    bounds(): common2D.Rect;

    /**
     * Obtains the rectangular bounding box of the text blob.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    bounds(): common2D.Rect | undefined;

    /**
     * Obtains the unique, non-zero identifier of this **TextBlob** object.
     *
     * @returns { long } Unique, non-zero identifier of this **TextBlob** object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueID(): long;
  }

  /**
   * This module defines a struct for setting typeface arguments.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 20.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  class TypefaceArguments {
    /**
     * Constructor for typeface arguments.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Defines the typeface weight.
     *
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { number } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    addVariation(axis: string, value: number);

    /**
     * Adds variation axis for the TypefaceArguments.
     *
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { double } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    addVariation(axis: string, value: double) : void;
  }

  /**
   * Describes the style of a typeface, such as SimSun or KaiTi.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Typeface {
    /**
     * Obtains the name of the typeface family, which is the name given to a collection of related typeface designs.
     *
     * @returns { string } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    getFamilyName(): string;

    /**
     * Get the family name for this typeface.
     *
     * @returns { string | undefined } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getFamilyName(): string | undefined;

    /**
     * Constructs a typeface object from the current typeface and its arguments.
     *
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface } Typeface object. In abnormal cases, a null pointer is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from current typeface and TypefaceArguments.
     *
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * Constructs a typeface from a file.
     *
     * @param { string } filePath - Path of the file. For details, see
     *     [Mappings Between Application Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
     *     .
     * @returns { Typeface } Typeface object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    static makeFromFile(filePath: string): Typeface;

    /**
     * Constructs a typeface from a file.
     *
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromFile(filePath: string): Typeface | undefined;

    /**
     * Constructs a typeface from a file, which must be stored in the **resources/rawfile** directory of the application
     * project.
     *
     * @param { Resource } rawfile - Resource object corresponding to the file. Currently, only resource objects
     *     referenced in **$rawfile** format are supported. The corresponding format is **$rawfile('filePath')**, where
     *     **filePath** is the relative path of the file to the **resources/rawfile** directory in the project. If the
     *     file is stored in **resources/rawfile**, the reference format is **$rawfile('HarmonyOS_Sans_Bold.ttf')**. If
     *     the file is stored in a subdirectory, for example, in **resources/rawfile/ttf**, the reference format is
     *     **$rawfile('ttf/HarmonyOS_Sans_Bold.ttf')**.
     * @returns { Typeface } Typeface object. In abnormal cases, a null pointer is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    static makeFromRawFile(rawfile: Resource): Typeface;

    /**
     * Constructs a typeface from a file, which must be stored in the
     * resources/rawfile directory of the application project.
     *
     * @param { Resource } rawfile - Resource object corresponding to the file.
     *     Currently, only resource objects referenced in rawfile format are supported.
     *     The corresponding format is rawfile('filePath'),
     *     where filePath is the relative path of the file to the resources/rawfile directory in the project.
     *     If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').
     *     If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,
     *     the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf').
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromRawFile(rawfile: Resource): Typeface | undefined;

    /**
     * Constructs a typeface from the typeface file path and arguments.
     *
     * @param { string } filePath - Path of the file. For details, see
     *     [Mappings Between Application Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
     *     .
     * @param { TypefaceArguments } typefaceArguments - Typeface arguments.
     * @returns { Typeface } Typeface object. In abnormal cases, a null pointer is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from file and TypefaceArguments.
     *
     * @param { string } filePath - file path for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * Constructs a typeface from a file with typeface arguments, which must be stored in the **resources/rawfile**
     * directory of the application project.
     *
     * @param { Resource } rawfile - Resource object corresponding to the file. Currently, only resource objects
     *     referenced in **$rawfile** format are supported. The corresponding format is **$rawfile('filePath')**, where
     *     **filePath** is the relative path of the file to the **resources/rawfile** directory in the project.
     * @param { TypefaceArguments } typefaceArguments - Typeface arguments.
     * @returns { Typeface } Typeface object. In abnormal cases, a null pointer is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from Rawfile and TypefaceArguments.
     *
     * @param { Resource } rawfile - RawFile for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * Checks whether the font is bold.
     *
     * @returns { boolean } Check result. **true** if the font is bold; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isBold(): boolean;

    /**
     * Checks whether the font is italic.
     *
     * @returns { boolean } Check result. **true** if the font is italic; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isItalic(): boolean;
  }

  /**
   * Enumerates the font edging types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontEdging {
    /**
     * No anti-aliasing processing is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALIAS = 0,

    /**
     * Uses anti-aliasing to smooth the jagged edges.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ANTI_ALIAS = 1,

    /**
     * Uses sub-pixel anti-aliasing to provide a smoother effect for jagged edges.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SUBPIXEL_ANTI_ALIAS = 2
  }

  /**
   * Enumerates the font hinting types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontHinting {
    /**
     * No font hinting is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Slight font hinting is used to improve contrast.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SLIGHT = 1,

    /**
     * Normal font hinting is used to improve contrast.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 2,

    /**
     * Full font hinting is used to improve contrast.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    FULL = 3
  }

  /**
   * Describes the attributes used for text rendering, such as size and typeface.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Font {
    /**
     * Enables subpixel font rendering.
     *
     * @param { boolean } isSubpixel - Whether to enable subpixel font rendering. **true** to enable, **false**
     *     otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableSubpixel(isSubpixel: boolean): void;

    /**
     * Enables emboldened fonts.
     *
     * @param { boolean } isEmbolden - Whether to enable emboldened fonts. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableEmbolden(isEmbolden: boolean): void;

    /**
     * Enables linear font scaling.
     *
     * @param { boolean } isLinearMetrics - Whether to enable linear font scaling. **true** to enable, **false**
     *     otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableLinearMetrics(isLinearMetrics: boolean): void;

    /**
     * Sets the font size.
     *
     * @param { double } textSize - Font size. The value is a floating point number. If a negative number is passed in,
     *     the size is set to **0**. If the size is **0**, the text drawn will not be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    setSize(textSize: double): void;

    /**
     * Obtains the font size.
     *
     * @returns { double } Font size. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    getSize(): double;

    /**
     * Sets the typeface style (including attributes such as font name, weight, and italic) for the font.
     *
     * @param { Typeface } typeface - Typeface style (including attributes such as font name, weight, and italic).
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    setTypeface(typeface: Typeface): void;

    /**
     * Obtains the typeface.
     *
     * @returns { Typeface } Font.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     */
    getTypeface(): Typeface;

    /**
     * Obtains the typeface.
     *
     * @returns { Typeface | undefined } Typeface object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTypeface(): Typeface | undefined;

    /**
     * Obtains the font metrics of the typeface.
     *
     * @returns { FontMetrics } Font metrics.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     */
    getMetrics(): FontMetrics;

    /**
     * Obtains the font metrics of the typeface.
     *
     * @returns { FontMetrics | undefined } The fontMetrics value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getMetrics(): FontMetrics | undefined;

    /**
     * Measures the width of a single character. If the typeface of the current font does not support the character to
     * measure, the system typeface is used to measure the character width.
     *
     * @param { string } text - Single character to measure. The length of the string must be **1**.
     * @returns { double } Width of the character. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    measureSingleCharacter(text: string): double;

    /**
     * Measures the width of a single character with font features. If the typeface of the current font does not support
     * the character to measure, the system typeface is used to measure the character width.
     *
     * @param { string } text - Pointer to the single character to measure. The length of the string must be **1**.
     * @param { Array<FontFeature> } features - Array of the font feature object. For an empty array, the preset font
     *     features in the TrueType Font (TTF) file are used.
     * @returns { double } Width of the character. The value is a floating point number in px.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    measureSingleCharacterWithFeatures(text: string, features: Array<FontFeature>): double;

    /**
     * Measures the text width.
     *
     * > **NOTE**
     * >
     * > This API is used to measure the text width of the original string. To measure the text width after typesetting,
     * > call [measure.measureText](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md#measuretext12).
     *
     * @param { string } text - Content of the item in the operation area.
     * @param { TextEncoding } encoding - Pointer to the encoding format.
     * @returns { double } Width of the text. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    measureText(text: string, encoding: TextEncoding): double;

    /**
     * Sets a horizontal scale factor for this font.
     *
     * @param { double } scaleX - Horizontal scale factor. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setScaleX(scaleX: double): void;

    /**
     * Sets a horizontal skew factor for this font.
     *
     * @param { double } skewX - Horizontal skew factor. A positive number means a skew to the left, and a negative
     *     number means a skew to the right. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setSkewX(skewX: double): void;

    /**
     * Sets a font edging effect.
     *
     * @param { FontEdging } edging - Font edging effect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setEdging(edging: FontEdging): void;

    /**
     * Sets a font hinting effect.
     *
     * @param { FontHinting } hinting - Font hinting effect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setHinting(hinting: FontHinting): void;

    /**
     * Obtains the number of glyphs represented by text.
     *
     * @param { string } text - Content of the item in the operation area.
     * @returns { int } Number of glyphs represented by the text. The value is an integer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    countText(text: string): int;

    /**
     * Sets whether to request that baselines be snapped to pixels when the current canvas matrix is axis aligned.
     *
     * @param { boolean } isBaselineSnap - Check result. The value **true** means to request that baselines be snapped
     *     to pixels, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setBaselineSnap(isBaselineSnap: boolean): void;

    /**
     * Checks whether baselines are requested to be snapped to pixels when the current canvas matrix is axis aligned.
     *
     * @returns { boolean } Check result. The value **true** means that the baselines are requested to be snapped to
     *     pixels, and **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isBaselineSnap(): boolean;

    /**
     * Sets whether to use bitmaps in this font.
     *
     * @param { boolean } isEmbeddedBitmaps - Whether to use bitmaps in the font. The value **true** means to use
     *     bitmaps in the font, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setEmbeddedBitmaps(isEmbeddedBitmaps: boolean): void;

    /**
     * Checks whether bitmaps are used in this font.
     *
     * @returns { boolean } Check result. The value **true** means that the bitmaps are used, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isEmbeddedBitmaps(): boolean;

    /**
     * Sets whether to forcibly use auto hinting, that is, whether to always hint glyphs.
     *
     * @param { boolean } isForceAutoHinting - Check result. The value **true** means to forcibly use auto hinting, and
     *     **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setForceAutoHinting(isForceAutoHinting: boolean): void;

    /**
     * Checks whether auto hinting is forcibly used.
     *
     * @returns { boolean } Check result. The value **true** means that auto hinting is forcibly used, and **false**
     *     means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isForceAutoHinting(): boolean;

    /**
     * Obtains the width of each glyph in an array.
     *
     * @param { Array<number> } glyphs - Glyph array, which can be generated by
     *     [textToGlyphs]{@link drawing.Font#textToGlyphs(text: string, glyphCount?: number)}.
     * @returns { Array<number> } Glyph width array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getWidths(glyphs: Array<number>): Array<number>;

    /**
     * Obtains the width of each glyph in an array.
     *
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<double> | undefined } Glyph array, which can be generated by textToGlyphs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getWidths(glyphs: Array<int>): Array<double> | undefined;

    /**
     * Converts text into glyph indexes.
     *
     * @param { string } text - Text string.
     * @param { number } [glyphCount] - Number of glyphs represented by the text. The value must be the same as the
     *     value obtained from [countText]{@link drawing.Font.countText}. The default value is the number of characters
     *     in the text string. The value is an integer.
     * @returns { Array<number> } Array that holds the glyph indexes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    textToGlyphs(text: string, glyphCount?: number): Array<number>;

    /**
     * Converts text into glyph indexes.
     *
     * @param { string } text - Text string.
     * @param { int } [glyphCount] - Number of glyphs represented by the text.
     *     The value must be the same as the value obtained from countText.
     *     The default value is the number of characters in the text string. The value is an integer.
     * @returns { Array<int> | undefined } Returns the storage for glyph indices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    textToGlyphs(text: string, glyphCount?: int): Array<int> | undefined;

    /**
     * Checks whether sub-pixel rendering is used for a font.
     *
     * @returns { boolean } Check result. The value **true** means that sub-pixel rendering is used, and **false** means
     *     the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isSubpixel(): boolean;

    /**
     * Checks whether linear scaling is used for this font.
     *
     * @returns { boolean } Check result. The value **true** means that linear scaling is used, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isLinearMetrics(): boolean;

    /**
     * Obtains the horizontal skew factor of this font.
     *
     * @returns { double } Horizontal skew factor.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getSkewX(): double;

    /**
     * Checks whether the bold effect is set for this font.
     *
     * @returns { boolean } Check result. The value **true** means that the bold effect is set, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isEmbolden(): boolean;

    /**
     * Obtains the horizontal scale ratio of this font.
     *
     * @returns { double } Horizontal scale ratio.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getScaleX(): double;

    /**
     * Obtains the font hinting effect.
     *
     * @returns { FontHinting } Font hinting effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getHinting(): FontHinting;

    /**
     * Obtains the font hinting effect.
     *
     * @returns { FontHinting | undefined } Font hinting effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getHinting(): FontHinting | undefined;

    /**
     * Obtains the font edging effect.
     *
     * @returns { FontEdging } Font edging effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getEdging(): FontEdging;

    /**
     * Obtains the font edging effect.
     *
     * @returns { FontEdging | undefined } Font edging effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getEdging(): FontEdging | undefined;

    /**
     * Obtains the outline path of a glyph.
     *
     * @param { number } index - Index of the glyph.
     * @returns { Path } Outline path of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    createPathForGlyph(index: number): Path;

    /**
     * Obtains the outline path of a glyph.
     *
     * @param { int } index - Index of the glyph.
     * @returns { Path | undefined } Outline path of the glyph.
     *     Note: Path use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    createPathForGlyph(index: int): Path | undefined;

    /**
     * Obtains the rectangular bounding box of each glyph in an array.
     *
     * @param { Array<number> } glyphs - Glyph array, which can be generated by
     *     [textToGlyphs]{@link drawing.Font#textToGlyphs(text: string, glyphCount?: number)}.
     * @returns { Array<common2D.Rect> } Array that holds the rectangular bounding boxes.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getBounds(glyphs: Array<number>): Array<common2D.Rect>;

    /**
     * Obtains the rectangular bounding box of each glyph in an array.
     *
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<common2D.Rect> | undefined } Array that holds the rectangular bounding boxes.
     *     Note: 1. Rect use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     *     <br>2. Rect use two points(left-bottom & right-top) to describe the bound.
     *     <br>3. The bound rect will be snap to integral boundaries.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getBounds(glyphs: Array<int>): Array<common2D.Rect> | undefined;

    /**
     * Obtains the outline path of a text.
     *
     * @param { string } text - UTF-8 text-encoded characters.
     * @param { number } byteLength - Length of the outline path, which is obtained based on the minimum value between
     *     the passed value of **byteLength** and the actual text byte size.
     * @param { number } x - X coordinate of the text in the drawing area, with the origin as the start point.
     * @param { number } y - Y coordinate of the text in the drawing area, with the origin as the start point.
     * @returns { Path } Outline path of the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getTextPath(text: string, byteLength: number, x: number, y: number): Path;

    /**
     * Obtains the outline path of a text.
     *
     * @param { string } text - UTF-8 text-encoded characters.
     * @param { int } byteLength - Length of the outline path,
     *     which is obtained based on the minimum value between the passed value of byteLength and
     *     the actual text byte size.
     * @param { double } x - X coordinate of the text in the drawing area, with the origin as the start point.
     * @param { double } y - Y coordinate of the text in the drawing area, with the origin as the start point.
     * @returns { Path | undefined } Outline path of the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTextPath(text: string, byteLength: int, x: double, y: double): Path | undefined;

    /**
     * Sets whether to follow the theme font. When **followed** is set to **true**, the theme font is used if it is
     * enabled by the system and no typeface is set.
     *
     * @param { boolean } followed - Whether to follow the theme font. The value **true** means to follow the theme font
     *     , and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 15 dynamic
     * @since 23 static
     */
    setThemeFontFollowed(followed: boolean): void;

    /**
     * Checks whether the font follows the theme font. By default, the font follows the theme font.
     *
     * @returns { boolean } Check result. The value **true** means that the theme font is followed, and **false** means
     *     the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 15 dynamic
     * @since 23 static
     */
    isThemeFontFollowed(): boolean;
  }

  /**
   * Enumerates the font measurement flags, which is used to specify whether a field in the
   * [FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics} struct is valid.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontMetricsFlags {
    /**
     * The **underlineThickness** field is valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE_THICKNESS_VALID = 1 << 0,

    /**
     * The **underlinePosition** field is valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE_POSITION_VALID = 1 << 1,

    /**
     * The **strikethroughThickness** field is valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    STRIKETHROUGH_THICKNESS_VALID = 1 << 2,

    /**
     * The **strikethroughPosition** field is valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    STRIKETHROUGH_POSITION_VALID = 1 << 3,

    /**
     * The boundary measurement values (such as **top**, **bottom**, **xMin**, and **xMax**) are invalid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BOUNDS_INVALID = 1 << 4
  }

  /**
   * Describes the attributes that describe the font size and layout. A typeface has similar font metrics.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface FontMetrics {
    /**
     * Font measurement flags that are valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    flags?: FontMetricsFlags;

    /**
     * Font measurement flags that are valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 static
     */
    flags?: int;

    /**
     * Maximum distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * Distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    ascent: double;
    /**
     * Distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    descent: double;
    /**
     * Maximum distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    bottom: double;
    /**
     * Interline spacing, that is, the distance from the descent of one line of text to the ascent of the next line. The
     * value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    leading: double;
    /**
     * Average character width.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    avgCharWidth?: double;

    /**
     * Maximum character width.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    maxCharWidth?: double;

    /**
     * Horizontal distance from the leftmost edge of any glyph bounding box to the origin. This value is usually less
     * than 0, indicating the minimum horizontal coordinate across all glyph bounding boxes.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xMin?: double;

    /**
     * Horizontal distance from the rightmost edge of any glyph bounding box to the origin. The value is a positive
     * number, indicating the maximum horizontal coordinate across all glyph bounding boxes.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xMax?: double;

    /**
     * Height of the lowercase letter x. The value is usually a negative value.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xHeight?: double;

    /**
     * Height of a capital letter. The value is usually a negative value.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    capHeight?: double;

    /**
     * Thickness of the underline.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    underlineThickness?: double;

    /**
     * Vertical distance from the baseline to the top of the underline. The value is usually a positive number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    underlinePosition?: double;

    /**
     * Thickness of the strikethrough.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strikethroughThickness?: double;

    /**
     * Vertical distance from the baseline to the bottom of the strikethrough. The value is usually a negative value.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strikethroughPosition?: double;
  }

  /**
   * Lattice object. which is used to divide an image by lattice.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Lattice {
    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at
     * their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the
     * fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are
     * scaled to accommodate the remaining space.
     *
     * @param { Array<number> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<number> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { number } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { number } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the
     *     decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } [fColors] - Array that holds the colors used to fill the lattices. The
     *     default value is null. If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } **Lattice** object obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     *
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice | undefined } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createImageLattice(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice | undefined;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at
     * their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the
     * fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are
     * scaled to accommodate the remaining space.
     *
     * @param { Array<number> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<number> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { number } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { number } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the
     *     decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<number> | null } [fColors] - Array that holds the colors used to fill the lattices. Each color is
     *     represented by a 32-bit unsigned integer in hexadecimal ARGB format. The default value is null. If this
     *     parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } **Lattice** object obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     *
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<int> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice | undefined } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 static
     */
    static createImageLatticeWithArrayInt(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<int> | null): Lattice | undefined;
  }

  /**
   * Enumerates the types of rectangles used to fill the lattices. Used only in
   * [Lattice]{@link @ohos.graphics.drawing:drawing}.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * Draws an image into the lattice.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Sets the lattice to transparent.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPARENT = 1,

    /**
     * Draws the colors in the **fColors** array in [Lattice]{@link @ohos.graphics.drawing:drawing} into a lattice.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FIXEDCOLOR = 2
  }

  /**
   * Implements a mask filter.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class MaskFilter {
    /**
     * Creates a mask filter with a blur effect.
     *
     * @param { BlurType } blurType - Blur type.
     * @param { number } sigma - Standard deviation of the Gaussian blur to apply. The value must be a floating point
     *     number greater than 0.
     * @returns { MaskFilter } **Maskfilter** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter;

    /**
     * Creates a mask filter with a blur effect.
     *
     * @param { BlurType } blurType - Blur type.
     * @param { double } sigma - Standard deviation of the Gaussian blur to apply.
     *     The value must be a floating point number greater than 0.
     * @returns { MaskFilter | undefined } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: double): MaskFilter | undefined;
  }

  /**
   * Enumerates the drawing styles for path effects.
   * | Name  | Value| Description              |
   * | ------ | - | ------------------ |
   * | TRANSLATE | 0 | Translates only, not rotating with the path.|
   * | ROTATE  | 1 | Rotates with the path.|
   * | MORPH  | 2 | Rotates with the path and stretches or compresses at turns to enhance smoothness.|
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  enum PathDashStyle {
    /**
     * Translates only, not rotating with the path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSLATE = 0,
    /**
     * Rotates with the path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    ROTATE = 1,
    /**
     * Rotates with the path and stretches or compresses at turns to enhance smoothness.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    MORPH = 2
  }

  /**
   * Implements a path effect.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class PathEffect {
    /**
     * Creates a **PathEffect** object that converts a path into a dotted line.
     *
     * @param { Array<number> } intervals - Array of the lengths of the ON (solid line) and OFF (blank) parts of the
     *     dashed path. The number of elements in the array must be an even number and greater than or equal to 2. The
     *     value of this parameter is a positive integer.
     * @param { number } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect } **PathEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect;

    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     *
     * @param { Array<double> } intervals - Array of ON and OFF lengths of dotted lines.
     *     The number of arrays must be an even number and be greater than or equal to 2.
     * @param { double } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createDashPathEffect(intervals: Array<double>, phase: double): PathEffect | undefined;

    /**
     * Creates a path effect that transforms the sharp angle between line segments into a rounded corner with the
     * specified radius.
     *
     * @param { number } radius - Radius of the rounded corner. The value must be greater than 0. The value is a
     *     floating point number.
     * @returns { PathEffect } **PathEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createCornerPathEffect(radius: number): PathEffect;

    /**
     * Creates a path effect that transforms the sharp angle between line segments
     * into a rounded corner with the specified radius.
     *
     * @param { double } radius - Radius of the rounded corner.
     *     The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createCornerPathEffect(radius: double): PathEffect | undefined;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     *
     * @param { number } segLength - Distance along the path at which each segment is fragmented. The value is a
     *     floating point number. If a negative number or the value **0** is passed in, no effect is created.
     * @param { number } dev - Maximum amount by which the end points of the segments can be randomly displaced during
     *     rendering. The value is a floating-point number.
     * @param { number } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is **0**, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect } **PathEffect** object created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     *
     * @param { double } segLength - Distance along the path at which each segment is fragmented.
     *     The value is a floating point number.
     *     If a negative number or the value 0 is passed in, no effect is created.
     * @param { double } dev - Maximum amount by which the end points of the segments can be
     *     randomly displaced during rendering. The value is a floating-point number.
     * @param { int } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createDiscretePathEffect(segLength: double, dev: double, seedAssist?: int): PathEffect | undefined;

    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     *
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect } **PathEffect** object created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect;

    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     *
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect | undefined;

    /**
     * Creates a dashed path effect based on the shape described by a path.
     *
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { number } advance - Distance between two consecutive dashes. The value is a floating point number greater
     *     than 0. Otherwise, an error code is thrown.
     * @param { number } phase - Starting offset of the dash pattern. The value is a floating point number. The actual
     *     offset used is the absolute value of this value modulo the value of **advance**.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect } **PathEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect;

    /**
     * Creates a dashed path effect based on the shape described by a path.
     *
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { double } advance - Distance between two consecutive dashes.
     *     The value is a floating point number greater than 0.
     *     Otherwise, an error code is thrown.
     * @param { double } phase - Starting offset of the dash pattern. The value is a floating point number.
     *     The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createPathDashEffect(path: Path, advance: double, phase: double, style: PathDashStyle): PathEffect | undefined;

    /**
     * Creates an overlay path effect based on two distinct path effects. Different from **createComposePathEffect**,
     * this API applies each effect separately and then displays them as a simple overlay.
     *
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect } **PathEffect** object created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect;

    /**
     * Creates an overlay path effect based on two distinct path effects.
     * Different from createComposePathEffect,
     * this API applies each effect separately and then displays them as a simple overlay.
     *
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect | undefined;
  }

  /**
   * Implements the shader effect. After a shader effect is set for a pen or brush, the shader effect instead of the
   * color attribute is used for drawing. In this case, the alpha value set for the pen or brush still takes effect.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ShaderEffect {
    /**
     * Creates a **ShaderEffect** object with a single color.
     *
     * @param { number } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect } **ShaderEffect** object with a single color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createColorShader(color: number): ShaderEffect;

    /**
     * Creates a ShaderEffect object with a single color.
     *
     * @param { int } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect | undefined } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createColorShader(color: int): ShaderEffect | undefined;

    /**
     * Creates a **ShaderEffect** object that generates a linear gradient between two points.
     *
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points. The values in the array are
     *     32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array. The array length must
     *     be the same as that of **colors**. The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index. The default value is null,
     *     indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - **Matrix** object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     *
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a **ShaderEffect** object that generates a radial gradient based on the center and radius of a circle. A
     * radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid. The value is a floating point
     *     number.
     * @param { Array<int> } colors - Array of colors to distribute between the center and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array. The array length must
     *     be the same as that of **colors**. The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index. The default value is null,
     *     indicating that colors are evenly distributed between the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - **Matrix** object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the center
     *     and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between
     *     the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a **ShaderEffect** object that generates a color sweep gradient around a given center point, either in a
     * clockwise or counterclockwise direction.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<number> } colors - Array of colors to distribute between the start angle and end angle. The values
     *     in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { number } startAngle - Start angle of the sweep gradient, in degrees. The value 0 indicates the positive
     *     direction of the X axis. A positive number indicates an offset towards the positive direction, and a negative
     *     number indicates an offset towards the negative direction. The value is a floating point number.
     * @param { number } endAngle - End angle of the sweep gradient, in degrees. The value 0 indicates the positive
     *     direction of the X axis. A positive number indicates an offset towards the positive direction, and a negative
     *     number indicates an offset towards the negative direction. A value less than the start angle is invalid. The
     *     value is a floating point number.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array. The array length must
     *     be the same as that of **colors**. The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index. The default value is null,
     *     indicating that the colors are evenly distributed between the start angle and end angle.
     * @param { Matrix | null } [matrix] - **Matrix** object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<number>,
        mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null,
        matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<int> } colors - Array of colors to distribute between the start angle and end angle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { double } startAngle - Start angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     The value is a floating point number.
     * @param { double } endAngle - End angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     A value less than the start angle is invalid.
     *     The value is a floating point number.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that the colors are evenly distributed between
     *     the start angle and end angle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<int>,
      mode: TileMode, startAngle: double, endAngle: double, pos?: Array<double> | null,
      matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a **ShaderEffect** object that generates a conical gradient between two given circles.
     *
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { number } startRadius - Radius of the start circle of the gradient. A negative number is invalid. The
     *     value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { number } endRadius - Radius of the end circle of the gradient. A negative value is invalid. The value is
     *     a floating point number.
     * @param { Array<number> } colors - Array of colors to distribute between the start circle and end circle. The
     *     values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array. The array length must
     *     be the same as that of **colors**. The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index. The default value is null,
     *     indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - **Matrix** object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point,
        endRadius: number, colors: Array<number>, mode: TileMode,
        pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     *
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { double } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { double } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the start circle and end circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: double, endPt: common2D.Point,
        endRadius: double, colors: Array<int>, mode: TileMode,
        pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a shader based on an image. You are advised not to use the function for the canvas of the capture type
     * because it affects the performance.
     *
     * @param { image.PixelMap } pixelmap - Image object to be sampled.
     * @param { TileMode } tileX - Tile mode in the horizontal direction.
     * @param { TileMode } tileY - Tile mode in the vertical direction.
     * @param { SamplingOptions } samplingOptions - Image sampling options.
     * @param { Matrix | null } [matrix] - (Optional) Matrix transformation applied to an image. If this parameter is
     *     left empty, no transformation is applied.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates an ShaderEffect object that generates a shader with single image.
     *
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { TileMode } tileX - Indicates the type of tile mode for horizontal shader effect.
     * @param { TileMode } tileY - Indicates the type of tile mode for vertical shader effect.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @param { Matrix | null } [matrix] - Indicates the Matrix object. The default value is null.
     * @returns { ShaderEffect | undefined } Returns the shader with single image ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a shader by blending two existing shaders in a certain way.
     *
     * @param { ShaderEffect } dstShaderEffect - Shader that serves as the destination color in blend mode.
     * @param { ShaderEffect } srcShaderEffect - Shader that serves as the source color in blend mode.
     * @param { BlendMode } blendMode - Blend mode.
     * @returns { ShaderEffect } **ShaderEffect** object created.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect;

    /**
     * Creates an ShaderEffect object that generates a blend ShaderEffect object by two shaders.
     *
     * @param { ShaderEffect } dstShaderEffect - Indicates a destination ShaderEffect pointer.
     * @param { ShaderEffect } srcShaderEffect - Indicates a source ShaderEffect pointer.
     * @param { BlendMode } blendMode - BlendMode.
     * @returns { ShaderEffect | undefined } Returns a blend ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect | undefined;
  }

  /**
   * Enumerates the tile modes of the shader effect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3
  }

  /**
   * Implements a shadow layer.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ShadowLayer {
    /**
     * Creates a **ShadowLayer** object.
     *
     * @param { number } blurRadius - Radius of the shadow layer. The value must be a floating point number greater than
     *     0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @returns { ShadowLayer } **ShadowLayer** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color): ShadowLayer | undefined;

    /**
     * Creates a **ShadowLayer** object.
     *
     * @param { number } blurRadius - Radius of the shadow layer. The value must be a floating point number greater than
     *     0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer } **ShadowLayer** object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color | int): ShadowLayer | undefined;
  }

  /**
   * Defines a color filter.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class ColorFilter {
    /**
     * Creates a **ColorFilter** object with a given color and blend mode.
     *
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Color filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     *
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter | undefined;

    /**
     * Creates a **ColorFilter** object with a given color and blend mode.
     *
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Color filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     *
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlendModeColorFilter(color: common2D.Color | int, mode: BlendMode): ColorFilter | undefined;

    /**
     * Creates a **ColorFilter** object by combining another two color filters.
     *
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter } Color filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter;

    /**
     * Creates a ColorFilter object by combining another two color filters.
     *
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter | undefined;

    /**
     * Creates a **ColorFilter** object that applies the sRGB gamma curve to the RGB channels.
     *
     * @returns { ColorFilter } Color filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createLinearToSRGBGamma(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     *
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLinearToSRGBGamma(): ColorFilter | undefined;

    /**
     * Creates a **ColorFilter** object that applies the RGB channels to the sRGB gamma curve.
     *
     * @returns { ColorFilter } Color filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createSRGBGammaToLinear(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     *
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSRGBGammaToLinear(): ColorFilter | undefined;

    /**
     * Creates a **ColorFilter** object that multiplies the luma into the alpha channel and sets the RGB channels to
     * zero.
     *
     * @returns { ColorFilter } Color filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createLumaColorFilter(): ColorFilter;

    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     *
     * @returns { ColorFilter | undefined } Colorfilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLumaColorFilter(): ColorFilter | undefined;

    /**
     * Creates a color filter object with a 4*5 color matrix.
     *
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter } Color filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter;

    /**
     * Creates a color filter object with a 4*5 color matrix.
     *
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter | undefined;

    /**
     * Creates a lighting color filter. It multiplies the RGB channel values by one color and then adds another color
     * value. The final output stays between 0 and 255.
     *
     * @param { common2D.Color | number } mutColor - Color used for multiplication. The value is in the ARGB format, and
     *     each color channel is an integer ranging from 0 to 255. If the value is of the number type, it must be an
     *     unsigned integer in the hexadecimal ARGB format.
     * @param { common2D.Color | number } addColor - Color used for addition. The value is in the ARGB format, and each
     *     color channel is an integer ranging from 0 to 255. If the value is of the number type, it must be an unsigned
     *     integer in the hexadecimal ARGB format.
     * @returns { ColorFilter } **ColorFilter** object created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter;

    /**
     * Makes a color filter with the given mutColor and addColor.
     *
     * @param { common2D.Color | int } mutColor - The range of color channels must be [0, 255],
     *     used to multiply source color.
     * @param { common2D.Color | int } addColor - The range of color channels must be [0, 255],
     *     used to add to source color.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createLightingColorFilter(mutColor: common2D.Color | int, addColor: common2D.Color | int): ColorFilter | undefined;

  }

  /**
   * Implements an image filter.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ImageFilter {
    /**
     * Creates an image filter with a given blur effect.
     *
     * @param { number } sigmaX - Standard deviation of the Gaussian blur along the X axis. The value must be a floating
     *     point number greater than 0.
     * @param { number } sigmaY - Standard deviation of the Gaussian blur along the Y axis. The value must be a floating
     *     point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied. The default value
     *     is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } Image filter created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createBlurImageFilter(sigmaX: number, sigmaY: number,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter;

    /**
     * Creates an image filter with a given blur effect.
     *
     * @param { double } sigmaX - Standard deviation of the Gaussian blur along the X axis.
     *     The value must be a floating point number greater than 0.
     * @param { double } sigmaY - Standard deviation of the Gaussian blur along the Y axis.
     *     The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlurImageFilter(sigmaX: double, sigmaY: double,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * Creates an image filter object with a given color filter effect.
     *
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } imageFilter - Filter to which the image filter will be applied. The default value
     *     is null, indicating that the image filter is directly applied to the original image. [since 12 - 19]
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied. The default value
     *     is null, indicating that the image filter is directly applied to the original image. [since 20]
     * @returns { ImageFilter } Image filter created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter;

    /**
     * Creates an image filter object with a given color filter effect.
     *
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * Creates an offset filter to translate the input filter based on the specified vector.
     *
     * @param { number } dx - Horizontal translation distance. The value is a floating point number.
     * @param { number } dy - Vertical translation distance. The value is a floating point number.
     * @param { ImageFilter | null } [input] - Filter to be translated. This parameter is left empty by default, which
     *     means that the drawing result without the filtering effect is translated.
     * @returns { ImageFilter } Image filter created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createOffsetImageFilter(dx: number, dy: number, input?: ImageFilter | null): ImageFilter;

    /**
     * Makes an ImageFilter object that instance with the provided x and y offset.
     *
     * @param { double } dx - Indicates the offset in the X direction.
     * @param { double } dy - Indicates the offset in the Y direction.
     * @param { ImageFilter | null } [input] - Indicates the input image filter used to generate offset effects, or uses
     *     the source bitmap if this is null.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createOffsetImageFilter(dx: double, dy: double, input?: ImageFilter | null): ImageFilter | undefined;

    /**
     * Creates an image filter from a given image. You are advised not to use the function for the canvas of the capture
     * type because it affects the performance.
     *
     * @param { image.PixelMap } pixelmap - Image object.
     * @param { common2D.Rect | null } [srcRect] - (Optional) Pixel area of the image to be applied to the filter. This
     *     parameter is left empty by default, which means that the entire **PixelMap** area is applied.
     * @param { common2D.Rect | null } [dstRect] - (Optional) Area to be rendered. This parameter is left empty by
     *     default, which means that the value is the same as that of **srcRect**.
     * @returns { ImageFilter } Image filter created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter;

    /**
     * Makes an ImageFilter object that applies the bitmap to the input.
     *
     * @param { image.PixelMap } pixelmap - The source input image.
     * @param { common2D.Rect | null } [srcRect] - Indicates the input srcRect, or uses the source bitmap if this is
     *     null.
     * @param { common2D.Rect | null } [dstRect] - Indicates the input dstRect, or uses the source bitmap if this is
     *     null.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter | undefined;

    /**
     * Creates a filter by blending two existing filters in a certain way.
     *
     * @param { BlendMode } mode - Blend mode.
     * @param { ImageFilter } background - Filter that serves as the destination color in blend mode.
     * @param { ImageFilter } foreground - Filter that serves as the source color in blend mode.
     * @returns { ImageFilter } Image filter created.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that applies the blend to the input.
     *
     * @param { BlendMode } mode - Blendmode.
     * @param { ImageFilter } background - Indicates the input background filter.
     * @param { ImageFilter } foreground - Indicates the input foreground filter.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter | undefined;

    /**
     * Cascades two image filters to create a new image filter. The first filter's output becomes the second filter's
     * input. The second filter then processes this input to produce the final result.
     *
     * @param { ImageFilter } cOuter - The second filter in the cascade, which processes the first filter's output. If
     *     the second filter is empty and the first filter is not empty, the final result is the first filter's output.
     *     The two filters cannot be empty at the same time.
     * @param { ImageFilter } cInner - The first filter in the cascade, which directly processes the original image
     *     content. If the first filter is empty and the second filter is not empty, the final result is the second
     *     filter's output. The two filters cannot be empty at the same time.
     * @returns { ImageFilter } Image filter created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that combines the "inner" and "outer" filters, allowing the output of the "inner"
     * filter to serve as the input source bitmap for the "outer" filter.
     *
     * @param { ImageFilter } cOuter - Indicates the instance to apply its effects to the output of the 'inner'
     *     filter.
     * @param { ImageFilter } cInner - Indicates the output as input for "outer" filters.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter | undefined;

    /**
     * Creates an **ImageFilter** object based on a shader.
     *
     * @param { ShaderEffect } shader - Shader effect to be applied to the image.
     * @returns { ImageFilter } Image filter created.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromShaderEffect(shader: ShaderEffect): ImageFilter;

    /**
     * Makes an ImageFilter object that renders the contents of the input Shader.
     *
     * @param { ShaderEffect } shader - Indicates the shader effect to be applied to the image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createFromShaderEffect(shader: ShaderEffect): ImageFilter | undefined;
  }
  /**
   * Enumerates the join styles of a pen. The join style defines the shape of the joints of a polyline segment drawn by
   * the pen.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum JoinStyle {
    /**
     * Mitered corner. If the angle of a polyline is small, its miter length may be inappropriate. In this case, you
     * need to use the miter limit to limit the miter length.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    MITER_JOIN = 0,

    /**
     * Round corner.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ROUND_JOIN = 1,

    /**
     * Beveled corner.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BEVEL_JOIN = 2
  }

  /**
   * Enumerates the cap styles of a pen. The cap style defines the style of both ends of a line segment drawn by the
   * pen.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum CapStyle {
    /**
     * There is no cap style. Both ends of the line segment are cut off square.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FLAT_CAP = 0,

    /**
     * Square cap style. Both ends have a square, the height of which is half of the width of the line segment, with the
     * same width.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    SQUARE_CAP = 1,

    /**
     * Round cap style. Both ends have a semicircle centered, the diameter of which is the same as the width of the line
     * segment.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ROUND_CAP = 2
  }

  /**
   * Enumerates the blur types of a mask filter.
   * | Name  | Value| Description              | Diagram  |
   * | ------ | - | ------------------ | -------- |
   * | NORMAL | 0 | Both the outer edges and the inner solid parts are blurred.| !
   * [NORMAL](figures/image_BlueType_Normal.png)|
   * | SOLID  | 1 | The inner solid part remains unchanged, while only the outer edges are blurred.| !
   * [SOLID](figures/image_BlueType_Solid.png)|
   * | OUTER  | 2 | Only the outer edges are blurred, with the inner solid part being fully transparent.| !
   * [OUTER](figures/image_BlueType_Outer.png)|
   * | INNER  | 3 | Only the inner solid part is blurred, while the outer edges remain sharp.| !
   * [INNER](figures/image_BlueType_Inner.png)|
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum BlurType {
    /**
     * Both the outer edges and the inner solid parts are blurred.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * The inner solid part remains unchanged, while only the outer edges are blurred.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    SOLID = 1,

    /**
     * Only the outer edges are blurred, with the inner solid part being fully transparent.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    OUTER = 2,

    /**
     * Only the inner solid part is blurred, while the outer edges remain sharp.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INNER = 3
  }

  /**
   * Defines a pen, which is used to describe the style and color to outline a shape.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class Pen {
    /**
     * A constructor used to create a **Pen** object.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Copies a **Pen** object to create a new one.
     *
     * @param { Pen } pen - **Pen** object to copy.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(pen: Pen);

    /**
     * Sets the maximum ratio allowed between the sharp corner length of a polyline and its line width. When drawing a
     * polyline with the pen, if [JoinStyle]{@link @ohos.graphics.drawing:drawing.JoinStyle} is set to **MITER_JOIN**
     * and this maximum ratio is exceeded, the corner will be displayed as beveled instead of mitered.
     *
     * @param { double } miter - Maximum ratio of the sharp corner length of the polyline to the line width. A negative
     *     number is processed as **4.0** during drawing. Non-negative numbers take effect normally. The value is a
     *     floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMiterLimit(miter: double): void;

    /**
     * Obtains the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     *
     * @returns { double } Maximum ratio obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getMiterLimit(): double;

    /**
     * Sets the shader effect for this pen.
     *
     * @param { ShaderEffect } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader effect will
     *     be cleared. [since 12 - 19]
     * @param { ShaderEffect | null } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader
     *     effect will be cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * Sets a color for this pen.
     *
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColor(color: common2D.Color): void;

    /**
     * Sets a color for this pen. This API provides better performance than
     * [setColor]{@link drawing.Pen#setColor(color: common2D.Color)} and is recommended.
     *
     * @param { int } alpha - Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255
     *     . Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 2
     *     55. Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * Sets a color for this pen.
     *
     * @param { int } color - Color in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    setColor(color: int): void;

    /**
     * Sets the color and standard color gamut for this pen. The difference between this method and
     * [setColor]{@link drawing.Pen#setColor(color: common2D.Color)} is that the color gamut can be set separately.
     *
     * @param { common2D.Color4f } color4f - Color in the ARGB format. The value of each color channel is a floating
     *     point number ranging from 0.0 to 1.0. Values above 1.0 default to **1.0**, and values below 0.0 default to
     *     **0.0**.
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - Standard color gamut object. **null**
     *     indicates SRGB.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * Obtains the color of this pen.
     *
     * @returns { common2D.Color } Color of the pen.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this pen.
     *
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * Obtains the pen color. The difference between this method and [getColor]{@link drawing.Pen#getColor()} is that
     * this method returns a floating point number.
     *
     * @returns { common2D.Color4f } Color of the pen.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of a pen. The color is used by the pen to outline a shape.
     *
     * @returns { common2D.Color4f | undefined} Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getColor4f(): common2D.Color4f | undefined;

    /**
     * Obtains the color of this pen.
     *
     * @returns { int } Color, represented as a 32-bit unsigned integer in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getHexColor(): int;

    /**
     * Sets the stroke width for this pen. The value **0** is treated as an unusually thin width. During drawing, the
     * width of 0 is always drawn as 1 pixel wide, regardless of any scaling applied to the canvas. Negative values are
     * also regarded as the value **0** during the drawing process.
     *
     * @param { double } width - Stroke width. The value is a floating point number. If a value less than 1 is passed in
     *     , the value **1** is used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setStrokeWidth(width: double): void;

    /**
     * Obtains the stroke width of this pen. The width describes the thickness of the outline of a shape.
     *
     * @returns { double } Stroke width for the pen, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWidth(): double;

    /**
     * Enables anti-aliasing for this pen. Anti-aliasing makes the edges of the content smoother. If this API is not
     * called, anti-aliasing is disabled by default.
     *
     * @param { boolean } aa - Whether to enable anti-aliasing. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this pen.
     *
     * @returns { boolean } Check result. The value **true** means that anti-aliasing is enabled, and **false** means
     *     the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isAntiAlias(): boolean;

    /**
     * Sets an alpha value for this pen.
     *
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255]. If a floating point number is
     *     passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAlpha(alpha: int): void;

    /**
     * Obtains the alpha value of this pen.
     *
     * @returns { int } Alpha value of the pen. The return value is an integer ranging from 0 to 255.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlpha(): int;

    /**
     * Sets a color filter for this pen.
     *
     * @param { ColorFilter } filter - Defines a color filter. If **null** is passed in, the color filter is cleared.
     *     [since 11 - 19]
     * @param { ColorFilter | null } filter - Defines a color filter. If **null** is passed in, the color filter is
     *     cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColorFilter(filter: ColorFilter | null): void;

    /**
     * Obtains the color filter of this pen.
     *
     * @returns { ColorFilter } Color filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this pen.
     *
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColorFilter(): ColorFilter | undefined;

    /**
     * Sets an image filter for this pen.
     *
     * @param { ImageFilter | null } filter - Image filter. If **null** is passed in, the image filter effect of the pen
     *     will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this pen.
     *
     * @param { MaskFilter } filter - Mask filter. If **null** is passed in, the mask filter is cleared. [since 12 - 19]
     * @param { MaskFilter | null } filter - Mask filter. If **null** is passed in, the mask filter is cleared.
     *     [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * Sets the path effect for this pen.
     *
     * @param { PathEffect } effect - Implements a path effect. If **null** is passed in, the path filter is cleared.
     *     [since 12 - 19]
     * @param { PathEffect | null } effect - Implements a path effect. If **null** is passed in, the path filter is
     *     cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPathEffect(effect: PathEffect | null): void;

    /**
     * Sets a shadow layer for this pen. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer is
     *     cleared. [since 12 - 19]
     * @param { ShadowLayer | null } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer
     *     is cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * Sets a blend mode for this pen.
     *
     * @param { BlendMode } mode - Blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Enables dithering for this pen. Dithering make the drawn color more realistic.
     *
     * @param { boolean } dither - Whether to enable dithering. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setDither(dither: boolean): void;

    /**
     * Sets the join style for this pen. If this API is not called, the default join style is **MITER_JOIN**.
     *
     * @param { JoinStyle } style - Join style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setJoinStyle(style: JoinStyle): void;

    /**
     * Obtains the join style of this pen.
     *
     * @returns { JoinStyle } Join style.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getJoinStyle(): JoinStyle;

    /**
     * Sets the cap style for this pen. If this API is not called, the default cap style is **FLAT_CAP**.
     *
     * @param { CapStyle } style - Cap style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setCapStyle(style: CapStyle): void;

    /**
     * Obtains the cap style of this pen.
     *
     * @returns { CapStyle } Cap style.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getCapStyle(): CapStyle;

    /**
     * Resets this pen to the initial state.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;
    /**
     * Obtains the source path outline drawn using this pen and represents it using a destination path.
     *
     * @param { Path } src - Source path.
     * @param { Path } dst - Destination path.
     * @returns { boolean } Check result. The value **true** means that the source path outline is obtained, and
     *     **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getFillPath(src: Path, dst: Path): boolean;
  }

  /**
   * Defines a brush, which is used to describe the style and color to fill in a shape.
   *
   * > **NOTE**
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class Brush {
    /**
     * A constructor used to create a **Brush** object.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Copies a **Brush** object to create a new one.
     *
     * @param { Brush } brush - **Brush** object to copy.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(brush: Brush);

    /**
     * Sets a color for this brush.
     *
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging
     *     from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColor(color: common2D.Color): void;

    /**
     * Sets a color for this brush. This API provides better performance than
     * [setColor]{@link drawing.Brush#setColor(color: common2D.Color)} and is recommended.
     *
     * @param { int } alpha - Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255
     *     . Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format. The value is an integer ranging from 0 to
     *     255. Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 2
     *     55. Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * Sets a color for this brush.
     *
     * @param { int } color - Color in hexadecimal ARGB format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    setColor(color: int): void;

    /**
     * Sets the color and standard color gamut for this brush. The difference between this method and
     * [setColor]{@link drawing.Brush#setColor(color: common2D.Color)} is that the color gamut can be set separately.
     *
     * @param { common2D.Color4f } color4f - Color in the ARGB format. The value of each color channel is a floating
     *     point number ranging from 0.0 to 1.0. Values above 1.0 default to **1.0**, and values below 0.0 default to
     *     **0.0**.
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - Standard color gamut object. **null**
     *     indicates SRGB.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * Obtains the color of this brush.
     *
     * @returns { common2D.Color } Color of the brush.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this brush.
     *
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * Obtains the brush color. The difference between this method and [getColor]{@link drawing.Brush#getColor()} is
     * that this method returns a floating point number.
     *
     * @returns { common2D.Color4f } Color of the brush.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of a brush. The color is used by the brush to outline a shape.
     *
     * @returns { common2D.Color4f | undefined} Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getColor4f(): common2D.Color4f | undefined;

    /**
     * Obtains the color of this brush.
     *
     * @returns { int } Color, represented as a 32-bit unsigned integer in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getHexColor(): int;

    /**
     * Enables anti-aliasing for this brush. Anti-aliasing makes the edges of the content smoother. If this API is not
     * called, anti-aliasing is disabled by default.
     *
     * @param { boolean } aa - Whether to enable anti-aliasing. The value **true** means to enable anti-aliasing, and
     *     **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this brush.
     *
     * @returns { boolean } Check result. The value **true** means that anti-aliasing is enabled, and **false** means
     *     the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isAntiAlias(): boolean;

    /**
     * Sets an alpha value for this brush.
     *
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255]. If a floating point number is
     *     passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAlpha(alpha: int): void;

    /**
     * Obtains the alpha value of this brush.
     *
     * @returns { int } Alpha value of the brush. The return value is an integer ranging from 0 to 255.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlpha(): int;

    /**
     * Sets a color filter for this brush.
     *
     * @param { ColorFilter } filter - Defines a color filter. If **null** is passed in, the color filter is cleared.
     *     [since 11 - 19]
     * @param { ColorFilter | null } filter - Defines a color filter. If **null** is passed in, the color filter is
     *     cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColorFilter(filter: ColorFilter | null): void;

    /**
     * Obtains the color filter of this brush.
     *
     * @returns { ColorFilter } Color filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this brush.
     *
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColorFilter(): ColorFilter | undefined;

    /**
     * Sets an image filter for this brush.
     *
     * @param { ImageFilter | null } filter - Image filter. If **null** is passed in, the image filter effect of the
     *     brush will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this brush.
     *
     * @param { MaskFilter } filter - Mask filter. If **null** is passed in, the mask filter is cleared. [since 12 - 19]
     * @param { MaskFilter | null } filter - Mask filter. If **null** is passed in, the mask filter is cleared.
     *     [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * Sets a shadow layer for this brush. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer is
     *     cleared. [since 12 - 19]
     * @param { ShadowLayer | null } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer
     *     is cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * Sets the shader effect for this brush.
     *
     * @param { ShaderEffect } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader effect will
     *     be cleared. [since 12 - 19]
     * @param { ShaderEffect | null } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader
     *     effect will be cleared. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * Sets a blend mode for this brush. If this API is not called, the default blend mode is **SRC_OVER**.
     *
     * @param { BlendMode } mode - Blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Resets this brush to the initial state.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;
  }

  /**
   * Implements a matrix.
   * A 3 x 3 matrix is shown as below.
   * ![matrix_3x3](figures/matrix3X3.PNG)
   * Elements in the matrix from left to right and from top to bottom respectively represent a horizontal scale
   * coefficient, a horizontal skew coefficient, a horizontal translation coefficient, a vertical skew coefficient, a
   * vertical scale coefficient, a vertical translation coefficient, an X-axis perspective coefficient, a Y-axis
   * perspective coefficient, and a perspective scale coefficient.
   * If (x<sub>1</sub>, y<sub>1</sub>) is the source coordinate point, (x<sub>2</sub>, y<sub>2</sub>) is the coordinate
   * point obtained by transforming the source coordinate point using the matrix, then the relationship between the two
   * coordinate points is as follows:
   * ![matrix_xy](figures/matrix_xy.PNG)
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Matrix {
    /**
     * Creates a **Matrix** object.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Copies a matrix.
     *
     * @param { Matrix } matrix - Matrix to be copied.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(matrix: Matrix);

    /**
     * Checks whether the existing matrix is an affine matrix, which includes transformations such as translation,
     * rotation, and scaling.
     *
     * @returns { boolean } Whether the existing matrix is an affine matrix. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isAffine(): boolean;

    /**
     * Checks whether a rectangle stays a rectangle after being mapped by a matrix.
     *
     * @returns { boolean } Whether a rectangle stays a rectangle after being mapped by a matrix. **true** means yes;
     *     false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    rectStaysRect(): boolean;

    /**
     * Sets this matrix as an identity matrix and rotates it by a given degree around the rotation point (px, py).
     *
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation, and a
     *     negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRotation(degree: double, px: double, py: double): void;

    /**
     * Sets this matrix as an identity matrix and scales it with the coefficients (sx, sy) at the scale point (px, py).
     *
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in, the matrix is
     *     mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in, the matrix is
     *     mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setScale(sx: double, sy: double, px: double, py: double): void;

    /**
     * Sets this matrix as an identity matrix and translates it by a given distance (dx, dy).
     *
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards the
     *     positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards the
     *     positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setTranslation(dx: double, dy: double): void;

    /**
     * Sets the skew coefficients of a matrix.
     *
     * @param { double } kx - Amount of tilt on the X axis. The value is a floating point number. A positive number
     *     tilts the drawing rightwards along the positive direction of the Y axis, and a negative number tilts the
     *     drawing leftwards along the positive direction of the Y axis.
     * @param { double } ky - Amount of tilt on the Y axis. The value is a floating point number. A positive number
     *     tilts the drawing downwards along the positive direction of the X axis, and a negative number tilts the
     *     drawing upwards along the positive direction of the X axis.
     * @param { double } px - X coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center to the right of the coordinate origin, while a
     *     negative value places the center to the left.
     * @param { double } py - Y coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center below the coordinate origin, while a negative value
     *     places the center above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * Sets the matrix to rotate around the rotation center (px, py) with the specified sine and cosine values.
     *
     * @param { double } sinValue - Sine value of the rotation angle. Only if the sum of the squares of the sine and
     *     cosine values is **1**, the rotation transformation is performed. Otherwise, the matrix may contain other
     *     transformations such as translation and scaling.
     * @param { double } cosValue - Cosine value of the rotation angle. Only if the sum of the squares of the sine and
     *     cosine values is **1**, the rotation transformation is performed. Otherwise, the matrix may contain other
     *     transformations such as translation and scaling.
     * @param { double } px - X coordinate of the rotation center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center to the right of the coordinate origin, while a
     *     negative value places the center to the left.
     * @param { double } py - Y coordinate of the rotation center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center below the coordinate origin, while a negative value
     *     places the center above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setSinCos(sinValue: double, cosValue: double, px: double, py: double): void;

    /**
     * Sets parameters for this matrix.
     *
     * @param { Array<double> } values - Floating-point array that holds the parameter values, with the array length set
     *     to 9. The values in the array respectively represent a horizontal scale coefficient, a horizontal skew
     *     coefficient, a horizontal translation coefficient, a vertical skew coefficient, a vertical scale coefficient,
     *     a vertical translation coefficient, an X-axis perspective coefficient, a Y-axis perspective coefficient, and
     *     a perspective scale coefficient, in ascending order of indexes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMatrix(values: Array<double>): void;

    /**
     * Updates the existing matrix with another matrix.
     *
     * @param { Array<double> | Matrix } matrix - Array or matrix for the update.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setMatrix(matrix: Array<double> | Matrix): void;

    /**
     * Updates the existing matrix with the product of two matrices.
     *
     * @param { Matrix } matrixA - Matrix A used for calculation.
     * @param { Matrix } matrixB - Matrix B used for calculation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setConcat(matrixA: Matrix, matrixB: Matrix): void;

    /**
     * Right-multiply the existing matrix by another matrix.
     *
     * @param { Matrix } matrix - Matrix used for calculation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    postConcat(matrix: Matrix): void;

    /**
     * Preconcats the existing matrix with the passed-in matrix.
     *
     * @param { Matrix } matrix - **Matrix** object, which is on the right of a multiplication expression.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preConcat(matrix: Matrix): void;

    /**
     * Checks whether two **OH_Drawing_Matrix** objects are equal.
     *
     * @param { Matrix } matrix - Matrix to compare.
     * @returns { boolean } Comparison result of the two matrices. The value **true** means that the two matrices are
     *     equal, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isEqual(matrix: Matrix): boolean;

    /**
     * Inverts this matrix and returns the result.
     *
     * @param { Matrix } matrix - **Matrix** object used to store the inverted matrix.
     * @returns { boolean } Check result. The value **true** means that the matrix is revertible and the **matrix**
     *     object is set to its inverse, and **false** means that the matrix is not revertible and the **matrix** object
     *     remains unchanged.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    invert(matrix: Matrix): boolean;

    /**
     * Checks whether an **OH_Drawing_Matrix** object is an identity matrix:
     *
     * @returns { boolean } Check result. The value **true** means that the matrix is an identity matrix, and **false**
     *     means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isIdentity(): boolean;

    /**
     * Obtains a matrix value of a given index, which ranges from 0 to 8.
     *
     * @param { int } index - Index. The value is an integer ranging from 0 to 8.
     * @returns { double } Value obtained, which is an integer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(index: int): double;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     *
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation, and a
     *     negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postRotate(degree: double, px: double, py: double): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the
     * coefficient (sx, sy) at the scale point (px, py).
     *
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in, the matrix is
     *     mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in, the matrix is
     *     mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been translated by a
     * given distance (dx, dy).
     *
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards the
     *     positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards the
     *     positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postTranslate(dx: double, dy: double): void;

    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     *
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation, and a
     *     negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preRotate(degree: double, px: double, py: double): void;

    /**
     * Right-multiply the existing matrix by a skew transformation matrix.
     *
     * @param { double } kx - Amount of tilt on the X axis. The value is a floating point number. A positive number
     *     tilts the drawing rightwards along the positive direction of the Y axis, and a negative number tilts the
     *     drawing leftwards along the positive direction of the Y axis.
     * @param { double } ky - Amount of tilt on the Y axis. The value is a floating point number. A positive number
     *     tilts the drawing downwards along the positive direction of the X axis, and a negative number tilts the
     *     drawing upwards along the positive direction of the X axis.
     * @param { double } px - X coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center to the right of the coordinate origin, while a
     *     negative value places the center to the left.
     * @param { double } py - Y coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center below the coordinate origin, while a negative value
     *     places the center above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    postSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the
     * coefficient (sx, sy) at the scale point (px, py).
     *
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in, the matrix is
     *     mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in, the matrix is
     *     mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been translated by a
     * given distance (dx, dy).
     *
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards the
     *     positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards the
     *     positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preTranslate(dx: double, dy: double): void;

    /**
     * Left-multiply the existing matrix by a skew transformation matrix.
     *
     * @param { double } kx - Amount of tilt on the X axis. The value is a floating point number. A positive number
     *     tilts the drawing rightwards along the positive direction of the Y axis, and a negative number tilts the
     *     drawing leftwards along the positive direction of the Y axis.
     * @param { double } ky - Amount of tilt on the Y axis. The value is a floating point number. A positive number
     *     tilts the drawing downwards along the positive direction of the X axis, and a negative number tilts the
     *     drawing upwards along the positive direction of the X axis.
     * @param { double } px - X coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center to the right of the coordinate origin, while a
     *     negative value places the center to the left.
     * @param { double } py - Y coordinate of the shear center. The value is a floating point number. **0** indicates
     *     the coordinate origin. A positive value places the center below the coordinate origin, while a negative value
     *     places the center above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    preSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * Resets this matrix to an identity matrix.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;

    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     *
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> } Array of points obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point>;

    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     *
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> | undefined } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point> | undefined;

    /**
     * Returns the average radius of the ellipse formed after a circle with the specified **radius** is mapped by the
     * existing matrix. The square of the average radius is the product of the major axis length and minor axis length
     * of the ellipse. If the matrix contains perspective transformation, the result is meaningless.
     *
     * @param { double } radius - Radius of the circle used for calculation. The value is a floating point number. The
     *     absolute value is used if the number is negative.
     * @returns { double } Average radius after transformation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    mapRadius(radius: double): double;

    /**
     * Obtains all element values of this matrix.
     *
     * @returns { Array<number> } Array of matrix values obtained. The length is 9. Each value is a floating point
     *     number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getAll(): Array<number>;

    /**
     * Obtains all element values of this matrix.
     *
     * @returns { Array<double> | undefined } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getAll(): Array<double> | undefined;

    /**
     * Sets the destination rectangle to the bounding rectangle of the shape obtained after transforming the source
     * rectangle with a matrix transformation. As shown in the figure below, the blue rectangle represents the source
     * rectangle, and the yellow rectangle is the shape obtained after a matrix transformation is applied to the source
     * rectangle. Since the edges of the yellow rectangle are not aligned with the coordinate axes, it cannot be
     * represented by a rectangle object. To address this issue, a destination rectangle (black rectangle) is defined as
     * the bounding rectangle.
     * ![mapRect](figures/matrix_mapRect.png)
     *
     * @param { common2D.Rect } dst - **Rectangle** object, which is used to store the bounding rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @returns { boolean } Check result. The value **true** means that the shape retains a rectangular form, and
     *     **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    mapRect(dst: common2D.Rect, src: common2D.Rect): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps a source rectangle to a destination rectangle.
     *
     * @param { common2D.Rect } src - Source rectangle.
     * @param { common2D.Rect } dst - Destination rectangle.
     * @param { ScaleToFit } scaleToFit - Mapping mode from the source rectangle to the target rectangle.
     * @returns { boolean } Check result. The value **true** means that the matrix can represent the mapping, and
     *     **false** means the opposite. If either the width or the height of the source rectangle is less than or equal
     *     to 0, the API returns **false** and sets the matrix to an identity matrix. If either the width or height of
     *     the destination rectangle is less than or equal to 0, the API returns **true** and sets the matrix to a
     *     matrix with all values **0**, except for a perspective scaling coefficient of **1**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps the source point array to the destination point array. Both
     * the number of source points and that of destination points must be in the range [0, 4].
     *
     * @param { Array<common2D.Point> } src - Array of source points. The array length must be the same as the value of
     *     **count**.
     * @param { Array<common2D.Point> } dst - Array of destination points. The array length must be the same as the
     *     value of **count**.
     * @param { int } count - Number of points in each array. The value is an integer.
     * @returns { boolean } Check result. The value **true** means that the setting is successful, and **false** means
     *     the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: int): boolean;
  }

  /**
   * Enumerates the modes of scaling a source rectangle into a destination rectangle.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ScaleToFit {
    /**
     * Scales the source rectangle to completely fill the destination rectangle, potentially changing the aspect ratio
     * of the source rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILL_SCALE_TO_FIT = 0,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the upper left corner of the destination
     * rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    START_SCALE_TO_FIT = 1,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the center of the destination rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER_SCALE_TO_FIT = 2,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the lower right corner of the
     * destination rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    END_SCALE_TO_FIT = 3
  }

  /**
   * Describes a region, which is used to describe the region where the shape can be drawn.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 12.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Region {
    /**
     * Constructs a **Region** object.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Copies a **Region** object.
     *
     * @param { Region } region - Region to be copied.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(region: Region);

    /**
     * Constructs a rectangular region.
     *
     * @param { int } left - Left position of the rectangle (X coordinate of the upper left corner). The value must be
     *     an integer. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { int } top - Top position of the rectangle (Y coordinate of the upper left corner). The value must be an
     *     integer. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin
     *     , while a negative value places the point above the coordinate origin.
     * @param { int } right - Right position of the rectangle (X coordinate of the lower right corner). The value must
     *     be an integer. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { int } bottom - Bottom position of the rectangle (Y coordinate of the lower right corner). The value must
     *     be an integer. **0** indicates the coordinate origin. A positive value places the point below the coordinate
     *     origin, while a negative value places the point above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(left: int, top: int, right: int, bottom: int);

    /**
     * Checks whether another region is equal to this region.
     *
     * @param { Region } other - **Region** object.
     * @returns { boolean } Check result. **true** if the source rectangle is equal to the destination rectangle;
     *     **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEqual(other: Region): boolean;

    /**
     * Checks whether this region contains multiple rectangles.
     *
     * @returns { boolean } Check result. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isComplex(): boolean;

    /**
     * Checks whether the existing region is empty.
     *
     * @returns { boolean } Check result. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEmpty(): boolean;

    /**
     * Obtains the boundaries of the existing region.
     *
     * @returns { common2D.Rect } Bounding rectangle of this region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBounds(): common2D.Rect;

    /**
     * Gets the bounds of the region.
     *
     * @returns { common2D.Rect | undefined } Returns Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getBounds(): common2D.Rect | undefined;

    /**
     * Obtains a new path that is the boundary of the existing region.
     *
     * @returns { Path } Path of the boundary of the existing region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBoundaryPath(): Path;

    /**
     * Gets the boundary of the region, which represents by a path.
     * Gets the bounds of the region.
     *
     * @returns { Path | undefined } Returns Path object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getBoundaryPath(): Path | undefined;

    /**
     * Checks whether a point is contained in this region.
     *
     * @param { int } x - X coordinate of the point. The value must be an integer. If a decimal is passed in, the
     *     decimal part is rounded off.
     * @param { int } y - Y coordinate of the point. The value must be an integer. If a decimal is passed in, the
     *     decimal part is rounded off.
     * @returns { boolean } Check result. **true** means yes; **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isPointContained(x: int, y:int): boolean;

    /**
     * Checks whether another region is contained in this region.
     *
     * @param { Region } other - **Region** object.
     * @returns { boolean } Check result. **true** means yes; **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isRegionContained(other: Region): boolean;

    /**
     * Performs an operation on this region and another region, and stores the resulting region in this **Region**
     * object.
     *
     * @param { Region } region - **Region** object.
     * @param { RegionOp } regionOp - Operation mode of the region.
     * @returns { boolean } Check result. The value **true** means that the resulting region is stored in the current
     *     **Region** object, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    op(region: Region, regionOp: RegionOp): boolean;

    /**
     * Translates a region.
     *
     * @param { int } dx - X offset. A positive number indicates an offset towards the positive direction of the X axis,
     *     and a negative number indicates an offset towards the negative direction of the X axis. The value is an
     *     integer.
     * @param { int } dy - Y offset. A positive number indicates an offset towards the positive direction of the Y axis,
     *     and a negative number indicates an offset towards the negative direction of the Y axis. The value is an
     *     integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    offset(dx: int, dy: int): void;

    /**
     * Checks whether a rectangle do not intersect with this region. Actually, this API determines whether the rectangle
     * does not intersect with the bounding rectangle of the region, and therefore the result may not be accurate.
     *
     * @param { int } left - Left position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer. If a decimal is passed in, the
     *     decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer. If a decimal is passed in
     *     , the decimal part is rounded off.
     * @returns { boolean } Check result. **true** means that the two do not intersect; **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    quickReject(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * Checks whether the existing region does not intersect with another region. Actually, the outer rectangles of the
     * two regions are compared to determine whether they do not intersect. Therefore, there may be an error.
     *
     * @param { Region } region - **Region** object.
     * @returns { boolean } Check result. **true** if the regions do not intersect; **false** otherwise. The value
     *     **true** is returned only if the regions intersect with each other by point or edge.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    quickRejectRegion(region: Region): boolean;

    /**
     * Sets a region that matches the outline of a path within the cropping area.
     *
     * @param { Path } path - **Path** object.
     * @param { Region } clip - **Region** object.
     * @returns { boolean } Result of the setting operation. The value **true** is returned if the corked status is
     *     successfully set; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPath(path: Path, clip: Region): boolean;

    /**
     * Sets a rectangle.
     *
     * @param { int } left - Left position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer. If a decimal is passed in, the
     *     decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer. If a decimal is passed in
     *     , the decimal part is rounded off.
     * @returns { boolean } Result of the setting operation. The value **true** means that the setting is successful,
     *     and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRect(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * Sets the existing region to another region.
     *
     * @param { Region } region - Region to be set.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setRegion(region: Region): void;

    /**
     * Set the existing region to empty.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    setEmpty(): void;

    /**
     * Checks whether this region is the same as a single rectangle.
     *
     * @returns { boolean } Check result. **true** if this region is the same as a single rectangle; **false**
     *     otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isRect(): boolean;

    /**
     * Checks whether this region is the same as a single rectangle and contains the specified rectangle.
     *
     * @param { int } left - Left position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer. If a decimal is passed in, the
     *     decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer. If a decimal is passed in,
     *     the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer. If a decimal is passed in
     *     , the decimal part is rounded off.
     * @returns { boolean } Check result. **true** if the current region is the same as a single rectangle and contains
     *     the specified rectangle; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    quickContains(left: int, top: int, right: int, bottom: int): boolean;
  }

  /**
   * Enumerates the operations for combining two regions.
   *
   * > **NOTE**
   * >
   * > The schematic diagram shows the result obtained by combining a red region with a blue region at different
   * > operation mode. The green region is the region obtained.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RegionOp {
    /**
     * Difference operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,

    /**
     * Intersect operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1,

    /**
     * Union operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    UNION = 2,

    /**
     * XOR operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REVERSE_DIFFERENCE = 4,

    /**
     * Replace operation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REPLACE = 5
  }

  /**
   * Enumerates the corner positions of a rounded rectangle.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum CornerPos {
    /**
     * Top left corner of the rounded rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_LEFT_POS = 0,

    /**
     * Top right corner of the rounded rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_RIGHT_POS = 1,

    /**
     * Bottom right corner of the rounded rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_RIGHT_POS = 2,

    /**
     * Bottom left corner of the rounded rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_LEFT_POS = 3
  }

  /**
   * Enumerates the constraints on the source rectangle. It is used to specify whether to limit the sampling range
   * within the source rectangle when drawing an image on a canvas.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum SrcRectConstraint {

    /**
     * The sampling range is strictly confined to the source rectangle, resulting in a slow sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    STRICT = 0,

    /**
     * The sampling range is not limited to the source rectangle and can extend beyond it, allowing for a high sampling
     * speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FAST = 1
  }

  /**
   * A utility class that provides only static methods to convert data structs defined in other modules and
   * [common2D]{@link @ohos.graphics.common2D:common2D}.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 15.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 15 dynamic
   * @since 23 static
   */
  class Tool {
    /**
     * Converts a color value of the **ResourceColor** type to a **common2D.Color** object.
     *
     * @param { ResourceColor } resourceColor - Color value of the **ResourceColor** type. (All four types of inputs are
     *     supported. The following provides 13 example inputs.) The fourth type of
     *     [Resource]{@link ./@internal/component/ets/units:Resource} supports only the construction method
     *     **$r('belonging.type.name')**. Ensure that the resource has been defined in the
     *     **main/resources/base/element** directory. (The types **color**, **string**, and **integer** are available
     *     for the belonging **app**, whereas only the type **color** is available for the belonging **sys**.)
     * @returns { common2D.Color } **Common2D.Color** object. If the conversion fails, a null pointer is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 15 dynamic
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color;

    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     *
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type.
     *     (All four types of inputs are supported. The following provides 13 example inputs.)
     *     The fourth type of Resource supports only the construction method $r('belonging.type.name').
     *     Ensure that the resource has been defined in the main/resources/base/element directory.
     *     (The types color, string, and integer are available for the belonging app,
     *     whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color | undefined;
  }

  /**
   * This module provides tools for processing rectangles.
   * Use scenarios:
   *
   * 1. Quickly create rectangles and get their basic features, like making a new rectangle, copying one, and obtaining its width, height, and center point.
   * 2. Calculate and adjust boundaries, such as obtaining the inclusion relationship, calculating and updating intersections and unions between rectangles, and updating boundary values.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this class are supported since API version 20.
   * >
   * > - This module uses the physical pixel unit, px.
   * >
   * > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state
   * > transitions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  class RectUtils {
    /**
     * Creates a rectangle with the top, bottom, left, and right boundary coordinates all being **0**.
     *
     * @returns { common2D.Rect } Created rectangle object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeEmpty(): common2D.Rect;

    /**
     * Makes an uninitialized 2D rectangular object with zero dimensions and origin at (0, 0).
     *
     * @returns { common2D.Rect | undefined} - Returns an empty Rect object with all
     *     coordinates (left, top, right, bottom) set to 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeEmpty(): common2D.Rect | undefined;

    /**
     * Creates a rectangle with specified top, bottom, left, and right boundaries.
     *
     * @param { number } left - X coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { number } top - Y coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @param { number } right - X coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { number } bottom - Y coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @returns { common2D.Rect } Created rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeLtrb(left: number, top: number, right: number, bottom: number): common2D.Rect;

    /**
     * Makes a 2D rectangular object from boundary coordinates.
     *
     * @param { double } left - Indicates the X-coordinate of the left edge.
     * @param { double } top - Indicates the Y-coordinate of the top edge.
     * @param { double } right - Indicates the X-coordinate of the right edge.
     * @param { double } bottom - Indicates the Y-coordinate of the bottom edge.
     * @returns { common2D.Rect | undefined } - Returns an Rect object with the specific coordinates
     *     (left, top, right, bottom).
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeLtrb(left: double, top: double, right: double, bottom: double): common2D.Rect | undefined;

    /**
     * Copies a rectangle.
     *
     * @param { common2D.Rect } src - Rectangle to be copied.
     * @returns { common2D.Rect } Created rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeCopy(src: common2D.Rect): common2D.Rect;

    /**
     * Makes a deep copy of a 2D rectangular object.
     *
     * @param { common2D.Rect } src - Indicates the source rectangle to copy.
     * @returns { common2D.Rect | undefined } - Returns an Rect object has the same boundary coordinates with the
     *     source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeCopy(src: common2D.Rect): common2D.Rect | undefined;

    /**
     * Obtains the width of a rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @returns { double } Width of a rectangle. If the left boundary is greater than the right, the width is negative.
     *     If the left boundary is less than the right, the width is positive.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static getWidth(rect: common2D.Rect): double;

    /**
     * Obtains the height of a rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @returns { double } Height of the rectangle. If the top boundary is greater than the bottom, the height is
     *     negative. If the top boundary is less than the bottom, the height is positive.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static getHeight(rect: common2D.Rect): double;

    /**
     * Obtains the X coordinate of the rectangle center.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @returns { double } X coordinate of the rectangle center.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static centerX(rect: common2D.Rect): double;

    /**
     * Obtains the Y coordinate of the rectangle center.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @returns { double } Y coordinate of the rectangle center.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static centerY(rect: common2D.Rect): double;

    /**
     * Checks whether a rectangle completely contains another rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @param { common2D.Rect } other - Another rectangle object.
     * @returns { boolean } Whether a rectangle completely contains another rectangle. **true** means yes; **false**
     *     otherwise. An empty rectangle does not contain any other rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static contains(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Checks whether a rectangle completely contains another rectangle (which is marked by the coordinates of the upper
     * left and lower right corners).
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @param { double } left - X coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { double } top - Y coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @param { double } right - X coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { double } bottom - Y coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @returns { boolean } Whether a rectangle completely contains another rectangle defined by the coordinates of its
     *     upper left and lower right corners. **true** means yes; **false** otherwise. An empty rectangle does not
     *     contain any other rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static contains(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): boolean;

    /**
     * Checks whether a rectangle completely contains a specified point.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @param { double } x - X coordinate of a point. The value is a floating point number. **0** indicates the
     *     coordinate origin. A positive value places the point to the right of the coordinate origin, while a negative
     *     value places the point to the left.
     * @param { double } y - Y coordinate of a point. The value is a floating point number. **0** indicates the
     *     coordinate origin. A positive value places the point below the coordinate origin, while a negative value
     *     places the point above the coordinate origin.
     * @returns { boolean } Whether the rectangle completely contains the point **(x, y)**. **true** means yes;
     *     **false** otherwise.  An empty rectangle does not contain any point.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static contains(rect: common2D.Rect, x: double, y: double): boolean;

    /**
     * Adds the input left, top, right, and bottom values to the left, top, right, and bottom boundaries of a specified
     * rectangle, respectively.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @param { double } left - Value to be added to the left boundary of the rectangle (X coordinate of the upper left
     *     corner of the rectangle). The value is a floating point number. **0** indicates that no operation is
     *     performed. A positive number indicates addition, and a negative number indicates subtraction.
     * @param { double } top - Value to be added to the top boundary of the rectangle (Y coordinate of the upper left
     *     corner of the rectangle). The value is a floating point number. **0** indicates that no operation is
     *     performed. A positive number indicates addition, and a negative number indicates subtraction.
     * @param { double } right - Value to be added to the right boundary of the rectangle (X coordinate of the lower
     *     right corner of the rectangle). The value is a floating point number. **0** indicates that no operation is
     *     performed. A positive number indicates addition, and a negative number indicates subtraction.
     * @param { double } bottom - Value to be added to the bottom boundary of the rectangle (Y coordinate of the lower
     *     right corner of the rectangle). The value is a floating point number. **0** indicates that no operation is
     *     performed. A positive number indicates addition, and a negative number indicates subtraction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static inset(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * Calculates the intersection of two rectangles and updates the intersection result to the rectangle represented by
     * the first input parameter.
     *
     * @param { common2D.Rect } rect - Original rectangle used to calculate the intersection.
     * @param { common2D.Rect } other - Another rectangle used to calculate the intersection.
     * @returns { boolean } Whether two rectangles have an intersection. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static intersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Checks whether two rectangles intersect.
     *
     * @param { common2D.Rect } rect - Original rectangle used to calculate the intersection.
     * @param { common2D.Rect } other - Another rectangle used to calculate the intersection.
     * @returns { boolean } Whether two rectangles have an intersection. **true** means yes; **false** otherwise. If the
     *     two rectangles only overlap on the edge or intersect at a point, **false** is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static isIntersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Calculates the union of two rectangles and updates the union result to the rectangle represented by the first
     * input parameter. If the first input parameter is empty, the union result is updated to the rectangle represented
     * by the second input parameter. If the second input parameter is empty, no operation is performed.
     *
     * @param { common2D.Rect } rect - Original rectangle used to calculate the union.
     * @param { common2D.Rect } other - Another rectangle used to calculate the union.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static union(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * Checks whether a rectangle is empty (the left boundary is greater than or equal to the right boundary or the top
     * boundary is greater than or equal to the bottom boundary).
     *
     * @param { common2D.Rect } rect - Rectangle object to be checked.
     * @returns { boolean } Whether the rectangle is empty. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static isEmpty(rect: common2D.Rect): boolean;

    /**
     * Translates a rectangle.
     *
     * @param { common2D.Rect } rect - Rectangle to be translated.
     * @param { double } dx - Horizontal translation distance. The value is a floating point number. **0** indicates no
     *     translation. A negative value indicates translation to the left, and a positive value indicates translation
     *     to the right.
     * @param { double } dy - Vertical translation distance. The value is a floating point number. **0** indicates no
     *     translation. A negative value indicates translation upwards, and a positive value indicates translation
     *     downwards.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static offset(rect: common2D.Rect, dx: double, dy: double): void;

    /**
     * Translates a rectangle to a specified position.
     *
     * @param { common2D.Rect } rect - Rectangle to be translated.
     * @param { double } newLeft - X coordinate of the position to which the rectangle is translated. The value is a
     *     floating point number. **0** indicates the coordinate origin. A positive value places the point to the right
     *     of the coordinate origin, while a negative value places the point to the left.
     * @param { double } newTop - Y coordinate of the position to which the rectangle is translated. The value is a
     *     floating point number. **0** indicates the coordinate origin. A positive value places the point below the
     *     coordinate origin, while a negative value places the point above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static offsetTo(rect: common2D.Rect, newLeft: double, newTop: double): void;

    /**
     * Assigns the existing rectangle with another rectangle.
     *
     * @param { common2D.Rect } rect - Original rectangle.
     * @param { common2D.Rect } other - Another rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setRect(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * Updates the top, bottom, left, and right boundary values of the existing rectangle using the input top, bottom,
     * left, and right values, respectively.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @param { double } left - X coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { double } top - Y coordinate of the upper left corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @param { double } right - X coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point to the right of the
     *     coordinate origin, while a negative value places the point to the left.
     * @param { double } bottom - Y coordinate of the lower right corner of the rectangle. The value is a floating point
     *     number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin,
     *     while a negative value places the point above the coordinate origin.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setLtrb(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * Sets the left, right, top, and bottom boundaries of the rectangle to **0**.
     *
     * @param { common2D.Rect } rect - Empty rectangle object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setEmpty(rect: common2D.Rect): void;

    /**
     * If the rectangle is reversed (that is, the left boundary is greater than the right boundary or the top boundary
     * is greater than the bottom boundary), the top and bottom (left and right) boundary values of the rectangle are
     * exchanged, so that the top boundary is less than the bottom boundary (the left boundary is less than the right
     * boundary).
     * If the rectangle is not reversed (that is, the left boundary is less than or equal to the right boundary or the
     * top boundary is less than or equal to the bottom boundary), no operation is performed.
     *
     * @param { common2D.Rect } rect - Rectangle object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static sort(rect: common2D.Rect): void;

    /**
     * Checks whether two rectangles are equal.
     *
     * @param { common2D.Rect } rect - Original rectangle.
     * @param { common2D.Rect } other - Another rectangle.
     * @returns { boolean } Whether two rectangles are equal. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static isEqual(rect: common2D.Rect, other: common2D.Rect): boolean;
  }

  /**
   * This class offers a comprehensive set of operations for handling common2D Point objects.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class PointUtils {
    /**
     * Negates the point's coordinates.
     *
     * @param { common2D.Point } point - Specifies the point to be negated.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static negate(point: common2D.Point): void;

    /**
     * Offsets the point's coordinates by dx, dy.
     *
     * @param { common2D.Point } point - Specifies the point to be offset.
     * @param { double } dx - Indicates the distance to offset on the x-axis in pixels.
     * @param { double } dy - Indicates the distance to offset on the y-axis in pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static offset(point: common2D.Point, dx: double, dy: double): void;
  }
}

export default drawing;