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
 * Describes the options of the line.
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
interface LineOptions {
  /**
   * Width.
   *
   * If the value is an abnormal value or is not set, the width of the drawing area is automatically calculated based on
   * **startPoint** and **endPoint**.
   *
   * Default unit: vp
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
   * Height.
   *
   * If the value is an abnormal value or is not set, the height of the drawing area is automatically calculated based
   * on **startPoint** and **endPoint**.
   *
   * Default unit: vp
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
 * The **Line** component is used to draw a straight line in the app UI. It supports customizing the start point, end
 * point, color, width, opacity, dash style, and cap style of the line. It is suitable for drawing separators,
 * decorative lines, coordinate axes or connecting lines in charts, and custom graphic borders.
 *
 * > **NOTE**
 * >
 * > Since API version 20, this component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class.
 * >
 * > - The **Line** component cannot form a closed area, so the **fill** and **fillOpacity** attributes do not take
 * > effect.
 * >
 * > - The **Line** component does not support corners, so the **strokeLineJoin** and **strokeMiterLimit** attributes do
 * > not take effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface LineInterface {
  /**
   * Draws a straight line. The **Line** component draws the line within the rectangular area defined by **width** and
   * **height**. The upper left corner of the drawing area is the coordinate origin (0,0), with the x-axis extending to
   * the right and the y-axis extending downward.
   *
   * @param { object } value [since 7 - 17]
   * @param { LineOptions } [options] - Drawing area of the **Line** component, which contains the **width** and
   *     **height** attributes used to set the width and height of the **Line** component. If this parameter is not
   *     passed, the **width** and **height** attributes of the **Line** component are processed according to the
   *     default logic of their respective attributes (see the **LineOptions** object description).
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect. [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: LineOptions): LineAttribute;

  /**
   * Draws a straight line. The **Line** component draws the line within the rectangular area defined by **width** and
   * **height**. The upper left corner of the drawing area is the coordinate origin (0,0), with the x-axis extending to
   * the right and the y-axis extending downward.
   *
   * @param { object } value - [since 7 - 17]
   * @param { LineOptions } [options] - Drawing area of the **Line** component, which contains the **width** and
   *     **height** attributes used to set the width and height of the **Line** component. If this parameter is not
   *     passed, the **width** and **height** attributes of the Line component are processed based on their
   *     respective default logic (see **LineOptions** object description).
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect. [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: LineOptions): LineAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod} and
 * [common attributes for drawing components]{@link CommonMethod}, the following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class LineAttribute extends CommonShapeMethod<LineAttribute> {
  /**
   * Sets the coordinates of the line start point (relative to the origin at the upper left corner of the **Line**
   * component drawing area). This attribute supports [attributeModifier]{@link CommonMethod#attributeModifier} for
   * dynamic setting of the attribute method. Abnormal values are processed as the default value.
   *
   * @param { Array<any> } value - Coordinates of the start point of the line (relative to the upper left corner of the
   *     Line component's drawing area), in vp. The array format is [x-coordinate, y-coordinate]. The array length must
   *     be 2, and the elements must be of the Length type.
   *     <br>Default value: **[0, 0]**
   *     <br>The abnormal values **undefined** and **null** are processed as the default value.
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  startPoint(value: Array<any>): LineAttribute;

  /**
   * Sets the coordinates of the line end point (relative to the origin at the upper left corner of the **Line**
   * component drawing area). This attribute supports [attributeModifier]{@link CommonMethod#attributeModifier} for
   * dynamic setting of the attribute method. Abnormal values are processed as the default value.
   *
   * @param { Array<any> } value - End point coordinate of the line (relative to the upper left corner of the **Line**
   *     component drawing area), in vp. The array format is [x coordinate, y coordinate]. The array length must be 2,
   *     and the elements must be of the Length type.
   *     <br>Default value: **[0, 0]**
   *     <br>Abnormal values **undefined** and **null** are processed as the default value.
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  endPoint(value: Array<any>): LineAttribute;
}

/**
 * The **Line** component is used to draw a straight line in the app UI. It supports customizing the start point, end
 * point, color, width, opacity, dash style, and cap style of the line. It is suitable for drawing separators,
 * decorative lines, coordinate axes or connecting lines in charts, and custom graphic borders.
 *
 * > **NOTE**
 * >
 * > Since API version 20, this component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class.
 * >
 * > - The **Line** component cannot form a closed area, so the **fill** and **fillOpacity** attributes do not take
 * > effect.
 * >
 * > - The **Line** component does not support corners, so the **strokeLineJoin** and **strokeMiterLimit** attributes do
 * > not take effect.
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
declare const Line: LineInterface;

/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const LineInstance: LineAttribute;
