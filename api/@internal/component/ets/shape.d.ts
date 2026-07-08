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
   * Horizontal coordinate of the start point of the viewport.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Invalid values are treated as the default value.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  x?: Length;

  /**
   * Vertical coordinate of the start point of the viewport.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Invalid values are treated as the default value.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  y?: Length;

  /**
   * Width of the viewport. The value must be greater than or equal to 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Invalid values are treated as the default value.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  width?: Length;

  /**
   * Height of the viewport. The value must be greater than or equal to 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Invalid values are treated as the default value.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
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
   * Use the new function to create Shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (value?: PixelMap): ShapeAttribute;
  /**
   * Since API version 9, this API is supported in ArkTS widgets, except that **PixelMap** objects are not supported.
   *
   * @param { PixelMap } value - Drawing target. You can draw a shape in a specified **PixelMap** object. If this
   *     parameter is not set, the shape is drawn in the current drawing target by default.<br>The **undefined** and
   *     **null** values are treated as invalid and will not take effect.
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: PixelMap): ShapeAttribute;
  /**
   * Called when a component is drawn.
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
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
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
   * @param { object } value - Options of the viewport.<br>Default value: **{}**<br>The **undefined** and **null**
   *     values are invalid and treated as the default value. [since 7 - 17]
   * @param { ViewportRect } value - Options of the viewport.<br>Default value: **{}**<br>The **undefined** and **null**
   *     values are invalid and treated as the default value. [since 18]
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
   * @param { ResourceColor } value - Stroke color.<br>Default value: [Color]{@link enums:Color}.Transparent<br>Invalid
   *     values **undefined** and **null** values are treated as the default value, and invalid values **NaN** and
   *     **Infinity** are treated as [Color]{@link enums:Color}.Black.
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
   * @param { ResourceColor } value - Color of the fill area.<br>Default value: [Color]{@link enums:Color}.Black<br>The
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
   * Sets the mesh effect. An image is divided into (row + 1) × (column + 1) meshes. The coordinates of each mesh 
   * intersection point are stored in the array. (Every two elements indicate the x and y coordinates of an intersection
   * point.) The mesh vertex position is relocated based on the coordinates in the array value to implement partial 
   * image distortion. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * .
   * 
   * > **NOTE**
   * >
   * > **mesh** takes effect only when a **pixelMap** object is passed to the shape, and the effect applies to the 
   * > passed **pixelMap** object. It produces the same result as 
   * > [drawPixelMapMesh<sup>12+</sup>]{@link @ohos.graphics.drawing:drawing.Canvas.drawPixelMapMesh} in the 
   * > [drawing module]{@link @ohos.graphics.drawing:drawing}. It is recommended that you use 
   * > **drawPixelMapMesh**.
   *
   * @param { Array<any> } value - Array with a length of (row + 1) × (column + 1) × 2, which records the position of
   *     each vertex of the distorted bitmap.<br>Invalid values **undefined** and **null** are treated as an empty
   *     array. If the value is set to an empty array, the values of **column** and **row** are handled as **0**, and
   *     the value is handled as an empty array.
   * @param { number } column - Number of mesh matrix columns.<br>If the value is **undefined**, **null**, **NaN**, or
   *     **Infinity**, the values of **column** and **row** are treated as **0**, and the value of **value** is treated
   *     as an empty array.
   * @param { number } row - Number of mesh matrix rows.<br>If the value is **undefined**, **null**, **NaN**, or
   *     **Infinity**, the values of **column** and **row** are treated as **0**, and the value of **value** is treated
   *     as an empty array.
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
 * > The following child components are supported: [Rect]{@link Rect}, [Path]{@link Path}, [Circle]{@link Circle},
 * [Ellipse]{@link Ellipse}, [Polyline]{@link Polyline}, [Polygon]{@link Polygon}, [Image]{@link Image},
 * [Text]{@link Text}, [Column]{@link Column}, [Row]{@link Row}, and **Shape**.
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
