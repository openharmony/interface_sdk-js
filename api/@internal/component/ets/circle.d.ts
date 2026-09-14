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
 * Describes the drawing attributes of the **Circle** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface CircleOptions {
  /**
   * Width. The value must be greater than or equal to 0. Set this attribute when you need to customize the circle size.
   * If it is not set, the default value **0** is used.
   * 
   * Default unit: vp
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are treated as the default value.
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
   * Height. The value must be greater than or equal to 0. Set this attribute when you need to customize the circle 
   * size. If it is not set, the default value **0** is used.
   * 
   * Default unit: vp
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are treated as the default value.
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
 * The **Circle** component is used to draw a circle.
 * 
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface CircleInterface {
  /**
   * Creates a circle. After the call, a **Circle** object is created, and its width and height can be set.
   *
   * @param { CircleOptions } value - Circle size. Pass this parameter when you need to customize the circle size. If it
   *     is not passed, width and height default to **0**.
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and this setting does not
   *     take effect.
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (value?: CircleOptions): CircleAttribute;

  /**
   * Creates a circle. After the call, a **Circle** object is created, and its width and height can be set.
   *
   * @param { CircleOptions } value - Circle size. Pass this parameter when you need to customize the circle size. If it
   *     is not passed, width and height default to **0**.
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and this setting does not
   *     take effect.
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: CircleOptions): CircleAttribute;
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
declare class CircleAttribute extends CommonShapeMethod<CircleAttribute> {
  /**
   * Sets the stroke color. [ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics} can be used to describe the color
   * for HDR brightening. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}. If this attribute is not set, the default stroke color 
   * is [Color]{@link Color}.Transparent, that is, no stroke is drawn. Abnormal values undefined and null are treated as
   * the default value, and NaN and Infinity are treated as [Color]{@link Color}.Black.
   *
   * @param { ResourceColor | ColorMetrics } value - Stroke color.
   *     <br>Default value: [Color]{@link Color}.Transparent
   *     <br>The abnormal values **undefined** and **null** are handled as the default value, and **NaN** and
   *     **Infinity** are handled as [Color]{@link Color}.Black.
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stroke(value: ResourceColor | ColorMetrics): CircleAttribute;
  
  /**
   * Sets the color of the fill area. [ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics} can be used to describe
   * the color for HDR brightening. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}. If this attribute is not set, the default fill color is 
   * [Color]{@link Color}.Black. Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are treated as the 
   * default value. When this attribute is set together with the universal attribute **foregroundColor**, the one set 
   * later takes effect.
   *
   * @param { ResourceColor | ColorMetrics } value - Color of the area to fill.
   *     <br>Default value: [Color]{@link Color}.Black 
   *     <br>Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fill(value: ResourceColor | ColorMetrics): CircleAttribute;
}

/**
 * The **Circle** component is used to draw a circle.
 * 
 * ###### Child Components
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
declare const Circle: CircleInterface;

/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const CircleInstance: CircleAttribute;
