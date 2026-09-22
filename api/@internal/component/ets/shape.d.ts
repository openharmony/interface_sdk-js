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
 * Describes the options of the viewport.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ViewportRect {
  /**
   * Horizontal coordinate of the start point of the shape viewport.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: Length;

  /**
   * Vertical coordinate of the start point of the shape viewport.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: Length;

  /**
   * Width of the shape viewport. The value range is ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * Height of the shape viewport. The value range is ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;
}

/**
 * Provides interfaces for drawing components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface ShapeInterface {
  /**
   * Draws the **Shape** component. After being called, it creates a **Shape** object, on which attributes such as the
   * viewport, fill, and stroke can be set.
   *
   * @param { PixelMap } value - Drawing target. You can draw a shape in the specified **PixelMap** object. If this
   *     parameter is not set, the shape is drawn in the current drawing target by default.
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and this setting does not
   *     take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (value?: PixelMap): ShapeAttribute;
  /**
   * Draws the **Shape** component. After being called, it creates a **Shape** object, on which attributes such as the
   * viewport, fill, and stroke can be set.
   *
   * @param { PixelMap } value - Drawing target. The shape can be drawn into the specified **PixelMap** object.
   *     <br>Note: This parameter is mandatory. A valid **PixelMap** object must be passed in. The parameter does not
   *     take effect when **undefined** or **null** is passed in.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: PixelMap): ShapeAttribute;
  /**
   * Draws the **Shape** component. This function has no parameter. After being called, it creates a **Shape** object
   * with the default viewport and attributes.
   *
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): ShapeAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod} and [universal drawing attributes]{@link CommonMethod}, the
 * following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class ShapeAttribute extends CommonMethod<ShapeAttribute> {
  /**
   * Sets the viewport of the shape.
   *
   * The viewport defines the coordinate system and display area of the drawing content. The start point coordinates
   * (x, y) and the width and height (width, height) of the viewport determine the display position and range of the
   * drawing content in the component. When the viewport range differs from the component size, the drawing content is
   * automatically scaled to fit. The viewport is commonly used to adjust the display scale and position of the drawing
   * content.
   *
   * @param { object } value - Viewport drawing attribute.<br>Default value: **{x: 0, y: 0, width: 0, height: 0}**
   *     <br>The abnormal values **undefined** and **null** are processed as the default value. [since 7 - 17]
   * @param { ViewportRect } value - Viewport drawing attribute.<br>Default value: **{x: 0, y: 0, width: 0, height: 0}**
   *     <br>The abnormal values **undefined** and **null** are processed as the default value. [since 18]
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  viewPort(value: ViewportRect): ShapeAttribute;

  /**
   * Sets the stroke color. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . If this attribute is not set, the default stroke opacity is **0**, meaning no stroke is displayed.
   *
   * @param { ResourceColor } value - Stroke color.<br>Default value: [Color]{@link Color}.Transparent<br>Invalid
   *     values **undefined** and **null** values are treated as the default value, and invalid values **NaN** and
   *     **Infinity** are treated as [Color]{@link Color}.Black.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stroke(value: ResourceColor): ShapeAttribute;

  /**
   * Sets the color of the fill area. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . Invalid values are treated as the default value. If this attribute and the universal attribute 
   * **foregroundColor** are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor } value - Color of the fill area.<br>Default value: [Color]{@link Color}.Black<br>The
   *     **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fill(value: ResourceColor): ShapeAttribute;

  /**
   * Sets the offset of the start point for drawing the stroke. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . Invalid values are treated as the default value.
   *
   * @param { number | string } value - Offset of the start point for drawing the stroke.<br>Default value: **0**<br>
   *     Default unit: vp<br>Invalid values **undefined** and **null** are treated as the default value. If set to
   *     **NaN** or **Infinity**, **strokeDashArray** has no effect. [since 7 - 19]
   * @param { Length } value - Offset of the start point for drawing the stroke.<br>Default value: **0**<br>Default unit
   *     : vp<br>Invalid values **undefined** and **null** are treated as the default value. If set to **NaN** or
   *     **Infinity**, **strokeDashArray** has no effect. [since 20]
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeDashOffset(value: Length): ShapeAttribute;

  /**
   * Sets the stroke dashes. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . The value must be greater than or equal to 0. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Array defining the dash pattern for the shape outline. Elements alternate between
   *     dash length and gap length.<br>Default value: **[]** (empty array)<br>Default unit: vp<br>The **undefined** and
   *     **null** values are invalid and treated as the default value.<br>**NOTE**<br>Empty array: solid line<br>Even-
   *     numbered array: Elements cycle sequentially, for example, [a, b, c, d] represents: dash a -> gap b -> dash c ->
   *     gap d -> dash a -> ...<br>Odd-numbered array: Elements are duplicated to create an even-numbered array, for
   *     example, [a, b, c] becomes [a, b, c, a, b, c], representing: dash a -> gap b -> dash c -> gap a -> dash b ->
   *     gap c -> dash a -> ...
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeDashArray(value: Array<any>): ShapeAttribute;

  /**
   * Sets the cap style of the stroke. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * .
   *
   * @param { LineCapStyle } value - Cap style of the stroke.<br>Default value: **LineCapStyle.Butt**<br>The
   *     **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeLineCap(value: LineCapStyle): ShapeAttribute;

  /**
   * Sets the join style of the stroke. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * .
   *
   * @param { LineJoinStyle } value - Join style of the stroke.<br>Default value: **LineJoinStyle.Miter**<br>The
   *     **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeLineJoin(value: LineJoinStyle): ShapeAttribute;

  /**
   * Sets the limit on the ratio of the miter length to the value of stroke width used to draw a miter join. This 
   * attribute can be dynamically set using [attributeModifier]{@link CommonMethod#attributeModifier}. The miter length
   * indicates the distance from the outer tip to the inner corner of the miter. The border width is 
   * the value of **strokeWidth**. This attribute works only when **strokeLineJoin** is set to **LineJoinStyle.Miter**.
   * 
   * The value must be greater than or equal to 1.0. If the value is in the 
   * [0, 1) range, the value **1.0** will be used. In other cases, the default value will be used.
   *
   * @param { number | string } value - Limit on the ratio of the miter length to the value of **strokeWidth** used to
   *     draw a miter join.<br>Default value: **4**<br>The **undefined**, **null**, and **NaN** values are invalid and
   *     treated as the default value. If set to **Infinity**, **stroke** has no effect. [since 7 - 19]
   * @param { Length } value - Limit on the ratio of the miter length to the value of **strokeWidth** used to draw a
   *     miter join.<br>Default value: **4**<br>The **undefined**, **null**, and **NaN** values are invalid and treated
   *     as the default value. If set to **Infinity**, **stroke** has no effect. [since 20]
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeMiterLimit(value: Length): ShapeAttribute;

  /**
   * Sets the stroke opacity. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . The value range is [0.0, 1.0]. If the set value is less than 0.0, **0.0** will be used. If the set value is 
   * greater than 1.0, **1.0** will be used.
   *
   * @param { number | string | Resource } value - Stroke opacity.<br>Default value: opacity set by the
   *     [stroke](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-shape.md#stroke) API<br>Invalid value
   *     **NaN** is treated as **0.0**, while invalid values **undefined**, **null**, and **Infinity** are treated as
   *     **1.0**.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeOpacity(value: number | string | Resource): ShapeAttribute;

  /**
   * Sets the opacity of the fill area. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * .
   *
   * @param { number | string | Resource } value - Opacity of the fill area.<br>**NOTE**<br>For the number type, the
   *     value range is [0.0, 1.0]. A value less than 0.0 is treated as **0.0**. A value greater than 1.0 is treated as
   *     **1.0**. Any other invalid value is treated as **1.0**.<br>For the string type, the value is a character string
   *     of the number type. The value range is the same as that of the number type.<br>For the Resource type, the value
   *     is a character string from the system resource or application resource. The value range is the same as that of
   *     the number type.<br>Default value: **1.0**
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fillOpacity(value: number | string | Resource): ShapeAttribute;

  /**
   * Sets the stroke width. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
   *
   * @param { number | string } value - Stroke width. The value must be greater than or equal to 0.<br>Default value:
   *     **1**<br>Default unit: vp<br>Invalid values **undefined**, **null**, and **NaN** are treated as the default
   *     value, and invalid value **Infinity** is treated as **0**. [since 7 - 19]
   * @param { Length } value - Stroke width. The value must be greater than or equal to 0.<br>Default value: **1**<br>
   *     Default unit: vp<br>Invalid values **undefined**, **null**, and **NaN** are treated as the default value, and
   *     invalid value **Infinity** is treated as **0**. [since 20]
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeWidth(value: Length): ShapeAttribute;

  /**
   * Sets whether to enable anti-aliasing. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * .
   *
   * @param { boolean } value - Whether to enable anti-aliasing.<br>**true**: enable anti-aliasing; **false**: disable
   *     anti-aliasing.<br>Default value: **true**<br>Invalid values **undefined** and **null** are treated as
   *     **false**.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  antiAlias(value: boolean): ShapeAttribute;

  /**
   * Sets the mesh effect. Divides the image into a grid of (row + 1) × (column + 1), with the coordinates of each
   * grid intersection stored in an array (every two elements represent the x and y coordinates of an intersection).
   * The coordinates in the **value** array are used to reposition the grid vertices, implementing local distortion of
   * the image. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}. It is applicable to scenarios that require image
   * deformation effects, such as image distortion and wave effects.
   *
   * The coordinate array is stored in row-major order. After the original image is evenly divided, each grid area is
   * transformed based on the new coordinates of its vertices, ultimately producing a distortion effect.
   *
   * > **NOTE**
   * >
   * > **mesh** takes effect only when a **pixelMap** object is passed to the shape, and the effect applies to the
   * > passed **pixelMap** object. It produces the same result as
   * > [drawPixelMapMesh<sup>12+</sup>]{@link @ohos.graphics.drawing:drawing.Canvas#drawPixelMapMesh} in the
   * > [drawing module]{@link @ohos.graphics.drawing:drawing}. It is recommended that you use
   * > **drawPixelMapMesh**.
   *
   * @param { Array<any> } value - Array of length (row + 1) × (column + 1) × 2, which records the position of each
   *     vertex of the distorted bitmap. The coordinate system is based on the display area of the **Shape**
   *     component, with the origin (0,0) at the upper left corner, the x-axis extending to the right, and the
   *     y-axis extending downward.
   *     <br>Default unit: vp
   *     <br>When the abnormal values **undefined** and **null** are set, the parameter is processed as an empty
   *     array.
   * @param { number } column - Number of columns in the mesh matrix.
   *     <br>The value range is ≥ 0.
   *     <br>Default value: **0**
   *     <br>When the abnormal values **undefined**, **null**, **NaN**, and **Infinity** are set, the column and row
   *     parameters are processed as the default value **0**, and the value parameter is processed as an empty array.
   * @param { number } row - Number of rows in the mesh matrix.
   *     <br>The value range is ≥ 0.
   *     <br>Default value: **0**
   *     <br>When the abnormal values **undefined**, **null**, **NaN**, and **Infinity** are set, the column and row
   *     parameters are processed as the default value **0**, and the **value** parameter is processed as an empty
   *     array.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  mesh(value: Array<any>, column: number, row: number): ShapeAttribute;
}

/**
 * The **Shape** component is the parent component of the drawing components. The attributes described in this topic are
 * universal attributes supported by all the drawing components.
 * 1. Drawing components use **Shape** as their parent to implement the effect similar to SVG.
 * 2. Drawing components can be used independently to draw specified shapes.
 * > **NOTE**
 * >
 * > This component supports dynamic constructor parameter updates using the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md) class since API version 20.
 * >
 * > **Child Components**
 * >
 * > The following child components are supported: [Rect]{@link rect}, [Path]{@link path}, [Circle]{@link circle},
 * [Ellipse]{@link ellipse}, [Polyline]{@link polyline}, [Polygon]{@link polygon}, [Image]{@link image},
 * [Text]{@link text}, [Column]{@link column}, [Row]{@link row}, and **Shape**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Shape: ShapeInterface;

/**
 * Defines Shape Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ShapeInstance: ShapeAttribute;
