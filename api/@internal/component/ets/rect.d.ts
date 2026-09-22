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
 * Describes the drawing attributes of the **Rect** component.
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
declare interface RectOptions {
  /**
   * Width, with the value range greater than or equal to 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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
   * Height, with the value range greater than or equal to 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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

  /**
   * Rounded corner radius. The radius of each of the four corners can be set separately, with the value range greater 
   * than or equal to 0.
   * 
   * This attribute has an effect similar to that of **radiusWidth**\/**radiusHeight**. When used together, it takes 
   * precedence over **radiusWidth**\/**radiusHeight**.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   *
   * @type { ?(number | string | Array<any>) } [since 7 - 19]
   * @type { ?(Length | Array<any>) } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius?: Length | Array<any>;
}

/**
 * Describes the drawing attributes of the rounded rectangle component.
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
declare interface RoundedRectOptions {
  /**
   * Width, value range: ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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
   * Height, value range: ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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

  /**
   * Width of the rounded corner, value range: ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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
  radiusWidth?: Length;

  /**
   * Height of the rounded corner, value range: ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp.
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
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
  radiusHeight?: Length;
}

/**
 * The **Rect** component is used to draw a rectangle. It supports setting attributes such as fill color, stroke style, 
 * and rounded corners.
 * 
 * > **NOTE**
 * >
 * > Since API version 20, this component supports using the 
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the 
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class to update constructor parameters.
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
   * Draws a rectangle. After being called, it creates a **Rect** object, for which attributes such as width, height,
   * and rounded corners can be set.
   *
   * @param { object } value [since 7 - 17]
   * @param { RectOptions | RoundedRectOptions } [options] - Drawing attributes of the rectangle, including the width,
   *     height, and rounded corners. If this parameter is not set, the rectangle is drawn with the default values of
   *     the attributes (the width, height, and rounded corners are all 0).
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and the setting does not
   *     take effect. [since 18]
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
   * Draws a rectangle. After being called, it creates a **Rect** object, for which attributes such as width, height, 
   * and rounded corners can be set.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
   *     {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;
   *     } } value - [since 7 - 17]
   * @param { RectOptions | RoundedRectOptions } [options] - Rect drawing attributes, including the width, height,
   *     and rounded corner configurations. If this parameter is not passed, the rectangle is drawn with the default
   *     values of the attributes (the width, height, and rounded corners are all 0).
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and this setting does not
   *     take effect. [since 18]
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
declare class RectAttribute extends CommonShapeMethod<RectAttribute> {
  /**
   * Sets the width of the rounded corner. When only **radiusWidth** is set, the width and height of the rounded corner 
   * are the same. This attribute has an effect similar to that of [radius]{@link RectAttribute#radius}. When used 
   * together with **radius**, **radius** takes precedence over this attribute. This attribute supports dynamic setting 
   * of the attribute method through [attributeModifier]{@link CommonMethod#attributeModifier}. The abnormal values 
   * **undefined**, **null**, **NaN**, and **Infinity** are handled based on the default value.
   *
   * @param { number | string } value - Width of the rounded corner. Value range: ≥ 0.
   *     <br>Default value: **0**
   *     <br>Default unit: vp
   *     <br>The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as the default
   *     value. [since 7 - 19]
   * @param { Length } value - Width of the rounded corner. Value range: ≥ 0.
   *     <br>Default value: **0**
   *     <br>Default unit: vp
   *     <br>The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as the default
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
   * Sets the height of the rounded corner. When only **radiusHeight** is set, the height and width of the rounded 
   * corner are the same. This attribute has an effect similar to that of [radius]{@link RectAttribute#radius}. When 
   * used together with **radius**, **radius** takes precedence over this attribute. This attribute supports dynamic 
   * setting of the attribute method through [attributeModifier]{@link CommonMethod#attributeModifier}. The abnormal 
   * values **undefined**, **null**, **NaN**, and **Infinity** are handled based on the default value.
   *
   * @param { number | string } value - Height of the rounded corner. Value range: ≥ 0.
   *     <br>Default value: **0**
   *     <br>Default unit: vp.
   *     <br>The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as the default
   *     value. [since 7 - 19]
   * @param { Length } value - Height of the rounded corner. Value range: ≥ 0.
   *     <br>Default value: **0**
   *     <br>Default unit: vp.
   *     <br>The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as the default
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
   * Sets the radius of the rounded corner. The value range is greater than or equal to 0. This attribute supports 
   * dynamic setting of the attribute method through [attributeModifier]{@link CommonMethod#attributeModifier}. This 
   * attribute has an effect similar to that of [radiusWidth]{@link RectAttribute#radiusWidth} and 
   * [radiusHeight]{@link RectAttribute#radiusHeight}. When used together, it takes precedence over **radiusWidth** and 
   * **radiusHeight**. The abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled based on the 
   * default value.
   *
   * @param { number | string | Array<any> } value - Rounded corner radius.
   *     <br>Default value: **0**
   *     <br>Default unit: vp 
   *     <br>Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as
   *     [[0, 0], [0, 0], [0, 0], [0, 0]]. [since 7 - 19]
   * @param { Length | Array<any> } value - Rounded corner radius.
   *     <br>Default value: **0**
   *     <br>Default unit: vp 
   *     <br>Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as
   *     [[0, 0], [0, 0], [0, 0], [0, 0]]. [since 20]
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
 * The **Rect** component is used to draw a rectangle. It supports setting attributes such as fill color, stroke style, 
 * and rounded corners.
 * 
 * > **NOTE**
 * >
 * > Since API version 20, this component supports using the 
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the 
 * > [AttributeUpdater]{@link ../../../arkui/AttributeUpdater} class to update constructor parameters.
 * 
 * ###### Child Components
 * 
 * None
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
