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
 * Describes the options of the polyline.
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
declare interface PolylineOptions {
  /**
   * Width, in the range [0, +∞).
   *
   * Default value: **0**
   *
   * Default unit: vp
   *
   * If the given value is less than 0, the default value is used. The abnormal values **undefined**, **null**, **NaN**,
   * and **Infinity** are processed as the default value.
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
   * Height, in the range [0, +∞).
   *
   * Default value: **0**
   *
   * Default unit: vp
   *
   * If the given value is less than 0, the default value is used. The abnormal values **undefined**, **null**, **NaN**,
   * and **Infinity** are processed as the default value.
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
 * The **Polyline** component is used to draw a polyline.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 7. Updates to new APIs in later versions are marked with a
 * > superscript to indicate their earliest API version.
 * >
 * > This component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class since API version 20.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface PolylineInterface {
  /**
   * Creates a polyline.
   *
   * @param { PolylineOptions } [options] - Drawing area of the polyline, used to set the width and height of the
   *     **Polyline** component. Pass this parameter when the drawing area size of the polyline needs to be specified.
   *     If it is not passed, the default width and height (both 0) are used.
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect. [since 18]
   * @returns { PolylineAttribute } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: PolylineOptions): PolylineAttribute;

  /**
   * Creates a polyline.
   *
   * @param { object } value - [since 7 - 17]
   * @param { PolylineOptions } [options] - Drawing area of the **Polyline**, used to set the width and height of the
   *     **Polyline** component. Pass this parameter when the drawing area size of the **Polyline** needs to be specified.
   *     If it is not passed, the default width and height (both 0) are used.
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect. [since 18]
   * @returns { PolylineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: PolylineOptions): PolylineAttribute;
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
declare class PolylineAttribute extends CommonShapeMethod<PolylineAttribute> {
  /**
   * Sets the list of coordinate points that the polyline passes through. This attribute supports
   * [attributeModifier]{@link CommonMethod#attributeModifier} for dynamic setting of the attribute.
   *
   * @param { Array<any> } value - List of coordinate points that the polyline passes through. Pass in a two-dimensional
   *     array, where each sub-array represents the [x, y] coordinates of a vertex.
   *     <br>Default value: [] (empty array)
   *     <br>Default unit: vp
   *     <br>Abnormal values undefined and null are processed as the default value.
   * @returns { PolylineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  points(value: Array<any>): PolylineAttribute;
}

/**
 * The **Polyline** component is used to draw a polyline.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 7. Updates to new APIs in later versions are marked with a
 * > superscript to indicate their earliest API version.
 * >
 * > This component supports updating constructor parameters through the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class since API version 20.
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
declare const Polyline: PolylineInterface;

/**
 * Defines Polyline Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const PolylineInstance: PolylineAttribute;
