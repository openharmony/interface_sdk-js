/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * The **Shape** module provides multiple shape definitions such as **CircleShape**, **EllipseShape**, **PathShape**, 
 * and **RectShape**, which can be passed to the 
 * [clipShape]{@link CommonMethod#clipShape(value: CircleShape | EllipseShape | PathShape | RectShape)} and 
 * [maskShape]{@link CommonMethod#maskShape(value: CircleShape | EllipseShape | PathShape | RectShape)} APIs to clip and
 * mask components. It is suitable for scenarios where components need to be clipped into specific shapes such as 
 * circles, ellipses, and rectangles, or where visual effects are achieved through shape masking, such as avatar 
 * clipping and icon masking.
 *
 * @file Shape
 * @kit ArkUI
 */

/**
 * Provides the size parameters of a shape.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface ShapeSize {
  /**
   * Width of the shape.
   * 
   * If the type is number, the value range is 
   * [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   * 
   * Unit: vp
   * 
   * Default value: **0vp**
   * 
   * If an abnormal value is set, **0vp** is used.
   * 
   * If not set, the default value **0vp** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  width?: number | string;

  /**
   * Height of the shape. 
   * 
   * If the type is number, the value range is 
   * [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   * 
   * Unit: vp
   * 
   * Default value: **0vp**
   * 
   * If an abnormal value is set, **0vp** is used.
   * 
   * If not set, the default value **0vp** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number | string;
}

/**
 * Represents the parameter of the constructor used to create a **RectShape** object.
 * 
 * This API inherits from [ShapeSize]{@link ShapeSize}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface RectShapeOptions extends ShapeSize {
  /**
   * Radius of the rectangle border corners.
   * 
   * If the type is number, the value range is 
   * [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   * 
   * Unit: vp
   * 
   * If the value is invalid, 0 vp is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: number | string | Array<number | string>;
}

/**
 * Represents the parameters of the constructor used to create a **RectShape** object with rounded corners.
 * 
 * This API inherits from [ShapeSize]{@link ShapeSize}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface RoundRectShapeOptions extends ShapeSize {
  /**
   * Radius width of the rectangle border corners.
   * 
   * If the type is number, the value range is 
   * [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   * 
   * Unit: vp
   * 
   * Default value: **0vp**
   * 
   * If an abnormal value is set, **0vp** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusWidth?: number | string;

  /**
   * Radius height of the rectangle border corners.
   * 
   * If the type is number, the value range is 
   * [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   * 
   * Unit: vp
   * 
   * Default value: **0vp**
   * 
   * If an abnormal value is set, **0vp** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusHeight?: number | string;
}

/**
 * Represents the parameter of the constructor used to create a **PathShape** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface PathShapeOptions {
  /**
   * Commands for drawing the path. The default value is an empty string, and no path is drawn when this parameter is 
   * not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  commands?: string;
}

/**
 * A base class that provides common methods such as offset, fill, and position settings for shapes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class CommonShapeMethod<T> {
  /**
   * Sets the coordinate offset relative to the component's layout position.
   * 
   * > **NOTE**
   * >
   * > - **offset()** sets a relative offset, while **position()** sets an absolute position. The two positioning 
   * > mechanisms are different.
   * >
   * > - You are advised to select one of the two positioning methods based on the scenario, and avoid using both at the
   * > same time, which may make the positioning result unpredictable.
   *
   * @param { Position } offset - Coordinate offset relative to the component's layout position.
   * @returns { T } Current object, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  offset(offset: Position): T;

  /**
   * Sets the fill color of a shape.
   *
   * @param { ResourceColor } color - Opacity of the fill area of the shape. Black indicates fully transparent, and
   *     white indicates fully opaque. In the maskShape scenario, the fill color determines the opacity effect of the
   *     mask.
   * @returns { T } The current object, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fill(color: ResourceColor): T;

  /**
   * Sets the absolute position of a shape. Unlike **offset** (setting the relative offset), **position** sets absolute 
   * coordinates. Use **position** when the shape needs to be precisely positioned, and use **offset** when fine-tuning 
   * is needed based on the existing layout position.
   *
   * @param { Position } position - Position of the shape.
   * @returns { T } The current object for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  position(position: Position): T;
}

/**
 * This API inherits from [CommonShapeMethod]{@link CommonShapeMethod}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class BaseShape<T> extends CommonShapeMethod<T> {
  /**
   * Sets the width of a shape.
   *
   * @param { Length } width - Width of the shape.
   *     <br>Unit: vp
   *     <br>If the value is invalid, 0 vp is used.
   * @returns { T } Current object, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  width(width: Length): T;

  /**
   * Sets the height of a shape.
   *
   * @param { Length } height - Height of the shape.
   *     <br>Unit: vp
   *     <br>If the value is invalid, 0 vp is used.
   * @returns { T } Current object, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  height(height: Length): T;

  /**
   * Sets the size of a shape, including both the width and height.
   * 
   * > **NOTE**
   * >
   * > - **size()** is equivalent to calling **width()** and **height()** simultaneously to set the width and height.
   * >
   * > - A method called later overrides the corresponding property set by a method called earlier. For example, if 
   * > **size({width:100, height:200})** is called first and then **width(50)** is called, the final width is 50 and the
   * > height remains 200.
   *
   * @param { SizeOptions } size - Size of the shape.
   *     <br>When the type of **width** and **height** is number, the value range is
   *     [0, +∞). When the type is string, the value is specified by [Length]{@link Length}.
   *     <br>Unit: vp
   *     <br>If the value is invalid, 0 vp is used.
   * @returns { T } Current object, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  size(size: SizeOptions): T;
}

/**
 * Represents a rectangle shape used in the **clipShape** and **maskShape** APIs.
 * 
 * This API inherits from [BaseShape]{@link BaseShape}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class RectShape extends BaseShape<RectShape> {
  /**
   * A constructor used to create a **RectShape** object.
   * 
   * > **NOTE**
   * >
   * > - **radius**, **radiusWidth**, and **radiusHeight** in the constructor parameters set the same properties as  
   * > **radius()**, **radiusWidth()**, and **radiusHeight()**.
   * >
   * > - A method call overrides the corresponding property value set in the constructor.
   * >
   * > - You are advised to set the initial parameters through the constructor first, and then perform additional 
   * > configuration or overriding through the methods.
   *
   * @param { RectShapeOptions | RoundRectShapeOptions } options - Rectangle parameters. If not passed in, the default
   *     size is used, with a default width of 0 vp, a default height of 0 vp, and a default corner radius of 0 vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: RectShapeOptions | RoundRectShapeOptions);

  /**
   * Sets the radius width of the rectangle border corners.
   *
   * @param { number | string } rWidth - Width of the corner radius of the rectangle shape.
   *     <br>If the type is number, the value range is
   *     [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   *     <br>Unit: vp
   *     <br>If the value is abnormal, 0 vp is used.
   * @returns { RectShape } **RectShape** object with the corner radius set, which can be used for chained calls to
   *     further configure the rectangle shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusWidth(rWidth: number | string): RectShape;

  /**
   * Sets the radius height of the rectangle border corners.
   *
   * @param { number | string } rHeight - Height of the corner radius of the rectangle shape. If the type is number, the
   *     value range is
   *     [0, +∞); if the type is string, the value is specified by [Length]{@link Length}. Unit: vp. If the value is abnormal, 0 vp is used.
   * @returns { RectShape } **RectShape** object with the height of the corner radius set, which can be used for chained
   *     calls to further configure the rectangle shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusHeight(rHeight: number | string): RectShape;

  /**
   * Sets the radius of the rectangle border corners. After setting, the arc width and height of each corner are equal (
   * circular arc). Unlike **radiusWidth** or **radiusHeight**, which sets the arc width or height separately (allowing 
   * the elliptical arc), **radius** can specify the radius values of the four corners separately through an array. Use 
   * **radius** when circular corners are required, and use **radiusWidth** and **radiusHeight** when elliptical corners
   * are required.
   *
   * @param { number | string | Array<number | string> } radius - Corner radius of the rectangle shape. Only the first
   *     four elements of the array are accepted, which represent the corner radii of the top-left, top-right, bottom-
   *     left, and bottom-right corners of the rectangle, respectively.
   *     <br>If the type is number, the value range is
   *     [0, +∞); if the type is string, the value is specified by [Length]{@link Length}.
   *     <br>Unit: vp
   *     <br>If the value is abnormal, 0 vp is used.
   * @returns { RectShape } **RectShape** object with the width of the corner radius set, which can be used for chained
   *     calls to further configure the rectangle shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radius(radius: number | string | Array<number | string>): RectShape;
}

/**
 * Represents a circle shape used in the **clipShape** and **maskShape** APIs.
 * 
 * This API inherits from [BaseShape]{@link BaseShape}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class CircleShape extends BaseShape<CircleShape> {
  /**
   * A constructor used to create a **CircleShape** object.
   *
   * @param { ShapeSize } options - Size of the shape, including the **width** and **height** attributes, which is used
   *     to set the dimensions of the shape. If not specified, the default size is used, with the default width of 0 vp
   *     and default height of 0 vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: ShapeSize);
}

/**
 * Represents an ellipse shape used in the **clipShape** and **maskShape** APIs.
 * 
 * This API inherits from [BaseShape]{@link BaseShape}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class EllipseShape extends BaseShape<EllipseShape> {
  /**
   * A constructor used to create an **EllipseShape** object.
   *
   * @param { ShapeSize } options - Size of the shape, which is used to customize the width and height of the ellipse.
   *     If not specified, the default value of **width** and **height** is 0 vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: ShapeSize);
}

/**
 * Represents a path shape used for the **clipShape** and **maskShape** APIs. It inherits from 
 * [CommonShapeMethod]{@link CommonShapeMethod}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PathShape extends CommonShapeMethod<PathShape> {
  /**
   * A constructor used to create a **PathShape** object.
   *
   * @param { PathShapeOptions } options - Path parameters. If not passed in, the path drawing commands default to an
   *     empty string, and no path is drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: PathShapeOptions);

  /**
   * Sets the path drawing commands, used to define the drawing path of **PathShape**. The commands follow the SVG path 
   * data format. For details about the supported drawing commands, see [commands]{@link PathAttribute#commands}.
   * 
   * > **NOTE**
   * >
   * > - The commands must be set (either through the **PathShapeOptions.commands** constructor parameter or through 
   * > this API) for **PathShape** to produce a visible clipping or mask effect in the **clipShape** or **maskShape** 
   * > API.
   * >
   * > - The **PathShape** without commands set is an empty path and produces no clipping or mask effect.
   * >
   * > - This API sets the same attribute as the **PathShapeOptions.commands** constructor. The setting called later 
   * > overrides the earlier one.
   *
   * @param { string } commands - Path drawing commands. For the format requirements, see the drawing commands supported
   *     by [commands]{@link PathAttribute#commands}. If invalid commands are passed in, no visible path is generated.
   * @returns { PathShape } **PathShape** object with path drawing commands configured, which can be used for chained
   *     calls to further configure the path shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  commands(commands: string): PathShape;
}