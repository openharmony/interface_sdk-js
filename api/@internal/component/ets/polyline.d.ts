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
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect interface usability.
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
   * Width.
   * Unit: vp, The value must be greater than or equal to 0, The **undefined**, **null**, **NaN**, and **Infinity**
   * values are invalid and treated as the default value. Default value: **0**.
   *
   * @type { ?(string | number) } [since 18 - 19]
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
   * Height.
   * Unit: vp, The value must be greater than or equal to 0, The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
   *
   * @type { ?(string | number) } [since 18 - 19]
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
 * Provides an interface for drawing polylines.
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
   * Uses new to create Polyline.
   * Anonymous Object Rectification.
   *
   * @param { PolylineOptions } [options] - Poly line options [since 18]
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
   * Defines the constructor of Polyline component.
   *
   * @param { object } value - [since 7 - 17]
   * @param { PolylineOptions } [options] - Options of the polyline.<br>The **undefined** and **null** values are
   *     treated as invalid and will not take effect. [since 18]
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
declare class PolylineAttribute extends CommonShapeMethod<PolylineAttribute> {
  /**
   * Sets the list of coordinates through which the polyline passes. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Array<any> } value - List of coordinates that the polyline passes through. A two-dimensional array is
   *     passed, and each subarray indicates the `[x, y]` coordinates of a vertex.<br>Default value: **[]** (empty array)
   *     <br>Default unit: vp<br>The **undefined** and **null** values are invalid and treated as the default value.
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
 * > **NOTE**
 * >
 * > This component supports dynamic constructor parameter updates using the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md) class since API version 20.
 * >
 * > **Child Components**
 * >
 * > None
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
