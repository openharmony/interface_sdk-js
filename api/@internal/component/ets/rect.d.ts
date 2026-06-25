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
 * Describes the options of the rectangle.
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
declare interface RectOptions {
  /**
   * Width.
   * Unit: vp, The value must be greater than or equal to 0, The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
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
   * Height.
   * Unit: vp, The value must be greater than or equal to 0, The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  height?: Length;

  /**
   * Radius of the rounded corner. You can set separate radii for the four rounded corners. The value must be greater
   * than or equal to 0.
   * This attribute takes precedence over **radiusWidth** and **radiusHeight** when used together.
   * Unit: vp, The **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the
   * default value. Default value: **0**.
   *
   * @type { ?(number | string | Array<any>) } [since 18 - 19]
   * @type { ?(Length | Array<any>) } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radius?: Length | Array<any>;
}

/**
 * Describes the options of the rounded rectangle.
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
declare interface RoundedRectOptions {
  /**
   * Width. The value must be greater than or equal to 0
   * Unit: vp, The **undefined**, **null**, **NaN**, and **Infinity**
   * values are invalid and treated as the default value. Default value: **0**.
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
   * Height. The value must be greater than or equal to 0.
   * Unit: vp, The value must be greater than or equal to 0, The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
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

  /**
   * Width of the rounded corner. The value must be greater than or equal to 0.
   * Unit: vp, Invalid values are treated as the default value.
   * Default value: **0**.
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
  radiusWidth?: Length;

  /**
   * Height of the rounded corner. The value must be greater than or equal to 0.
   * Unit: vp, Invalid values are treated as the default value. Default value: **0**.
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
  radiusHeight?: Length;
}

/**
 * Provides an interface for drawing rectangles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface RectInterface {
  /**
   * Use new function to create Rect.
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { RectOptions | RoundedRectOptions } [options] - Rect options [since 18]
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (
    options?: RectOptions | RoundedRectOptions,
  ): RectAttribute;

  /**
   * Defines the constructor of Rect component.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
   *     {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;
   *     } } value - [since 7 - 17]
   * @param { RectOptions | RoundedRectOptions } [options] - Options of the rectangle.
   *     <br>The **undefined** and **null** values are treated as invalid and will not take effect. [since 18]
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (
    options?: RectOptions | RoundedRectOptions,
  ): RectAttribute;
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
declare class RectAttribute extends CommonShapeMethod<RectAttribute> {
  /**
   * Sets the width of the rounded corner. The width and height are the same when only the width is set. This attribute 
   * can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * . Invalid values are treated as the default value.
   *
   * @param { number | string } value - Width of the rounded corner. The value must be greater than or equal to 0.<br>
   *     Default value: **0**<br>Default unit: vp<br>The **undefined** value is invalid and treated as the default
   *     value. [since 7 - 19]
   * @param { Length } value - Width of the rounded corner. The value must be greater than or equal to 0.<br>Default
   *     value: **0**<br>Default unit: vp<br>The **undefined** value is invalid and treated as the default
   *     value. [since 20]
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radiusWidth(value: Length): RectAttribute;

  /**
   * Sets the height of the rounded corner. The width and height are the same when only the height is set. This 
   * attribute can be dynamically set using [attributeModifier]{@link CommonMethod#attributeModifier}. Invalid values
   * are treated as the default value.
   *
   * @param { number | string } value - Height of the rounded corner. The value must be greater than or equal to 0.<br>
   *     Default value: **0**<br>Default unit: vp<br>The **undefined** value is invalid and treated as the default
   *     value. [since 7 - 19]
   * @param { Length } value - Height of the rounded corner. The value must be greater than or equal to 0.<br>Default
   *     value: **0**<br>Default unit: vp<br>The **undefined** value is invalid and treated as the default
   *     value. [since 20]
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radiusHeight(value: Length): RectAttribute;

  /**
   * Sets the radius of the rounded corner. The value must be greater than or equal to 0. This attribute can be 
   * dynamically set using [attributeModifier]{@link CommonMethod#attributeModifier}. Invalid values are treated as the
   * default value.
   *
   * @param { number | string | Array<any> } value - Radius of the rounded corner. You can set separate radii for the
   *     four rounded corners.<br>Default value: **0**<br>Default unit: vp<br>Invalid values **undefined** and **null**
   *     are treated as **[[0, 0], [0, 0], [0, 0], [0, 0]]**. [since 7 - 19]
   * @param { Length | Array<any> } value - Radius of the rounded corner. You can set separate radii for the four
   *     rounded corners.<br>Default value: **0**<br>Default unit: vp<br>Invalid values **undefined** and **null** are
   *     treated as **[[0, 0], [0, 0], [0, 0], [0, 0]]**. [since 20]
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius(value: Length | Array<any>): RectAttribute;
}

/**
 * The **Rect** component is used to draw a rectangle.
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
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const Rect: RectInterface;

/**
 * Rect attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead RectInstance
 * @noninterop
 */
declare const RectInStance: RectAttribute;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const RectInstance: RectAttribute;
