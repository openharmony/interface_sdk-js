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
 * Describes the options of the polygon.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner element's. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PolygonOptions {
  /**
   * Width, with the value range ≥ 0.
   *
   * Default value: **0**
   *
   * Default unit: vp
   *
   * If the given value is less than 0, the default value is used. The abnormal values **undefined**, **null**, **NaN**,
   * and **Infinity** are handled as the default value.
   *
   * @type { ?(string | number) } [since 7 - 19]
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
   * Height, with the value range ≥ 0.
   *
   * Default value: **0**
   *
   * Default unit: vp
   *
   * If the given value is less than 0, the default value is used. The abnormal values **undefined**, **null**, **NaN**,
   * and **Infinity** are handled as the default value.
   *
   * @type { ?(string | number) } [since 7 - 19]
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
 * The **Polygon** component is used to draw a polygon. This component defines the shape of a polygon by setting a list
 * of vertex coordinates, and supports attribute configuration such as fill color and border style. The component uses a
 * two-dimensional coordinate system and connects the vertices in sequence to form a closed polygon area. It is suitable
 * for drawing custom polygon shapes such as triangles, quadrilaterals, and pentagons, as well as for implementing
 * visualization scenarios such as charts and icons that require polygon elements.
 *
 * > **NOTE**
 * >
 * > Since API version 20, this component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface PolygonInterface {
  /**
   * Draws a polygon.
   *
   * @param { PolygonOptions } [options] - Configuration options of the **Polygon** component, used to define the width
   *     and height of the drawing area. Pass this parameter when the polygon size needs to be specified. If it is not
   *     passed, the default width and height (both 0) are used. If **undefined** or **null** is passed, the parameter
   *     setting does not take effect and the component attributes remain unchanged. [since 18]
   * @returns { PolygonAttribute } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 9]
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: PolygonOptions): PolygonAttribute;

  /**
   * Draws a polygon.
   *
   * @param { object } value - [since 7 - 17]
   * @param { PolygonOptions } [options] - Configuration options of the **Polygon** component, used to define the width
   *     and height of the drawing area. Pass this parameter when the polygon size needs to be specified. If it is not
   *     passed, the default width and height (both 0) are used. If **undefined** or **null** is passed, the parameter
   *     setting does not take effect and the component attribute remains unchanged. [since 18]
   * @returns { PolygonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: PolygonOptions): PolygonAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod} and
 * [common attributes of drawing components]{@link CommonMethod}, the following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class PolygonAttribute extends CommonShapeMethod<PolygonAttribute> {
  /**
   * Sets the vertex coordinates of the polygon. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - List of vertex coordinates of the polygon. A two-dimensional array is passed in,
   *     where each sub-array represents the [x, y] coordinates of a vertex.
   *     <br>Default value: [] (empty array)
   *     <br>Default unit: vp
   *     <br>The abnormal values **undefined** and **null** are handled as the default value.
   * @returns { PolygonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  points(value: Array<any>): PolygonAttribute;
}

/**
 * The **Polygon** component is used to draw a polygon. This component defines the shape of a polygon by setting a list
 * of vertex coordinates, and supports attribute configuration such as fill color and border style. The component uses a
 * two-dimensional coordinate system and connects the vertices in sequence to form a closed polygon area. It is suitable
 * for drawing custom polygon shapes such as triangles, quadrilaterals, and pentagons, as well as for implementing
 * visualization scenarios such as charts and icons that require polygon elements.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Polygon: PolygonInterface;

/**
 * Defines Polygon Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const PolygonInstance: PolygonAttribute;
