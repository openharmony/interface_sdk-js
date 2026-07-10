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
 * Describes the options of the circle.
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
   * Width.
   * Unit: vp, The value must be greater than or equal to 0, Default  The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
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
   * Unit: vp, The value must be greater than or equal to 0, Default  The **undefined**, **null**, **NaN**, and
   * **Infinity** values are invalid and treated as the default value. Default value: **0**.
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
 * Defines circle component.
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
   * use new function to set the value.
   *
   * @param { CircleOptions } value
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
   * set the value.
   *
   * @param { CircleOptions } value - - Options of the circle.<br>The **undefined** and **null** values are treated as
   *     invalid and will not take effect.
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
declare class CircleAttribute extends CommonShapeMethod<CircleAttribute> {
  /**
   * Sets the stroke color. This attribute can be dynamically set using attributeModifier. If this attribute is not set,
   * the default stroke opacity is 0, meaning no stroke is displayed.
   *
   * @param { ResourceColor | ColorMetrics } value - Stroke color.<br>Default value: Color.Transparent.<br>Invalid
   *     values **undefined** and **null** values are treated as the default value, and invalid values **NaN** and
   *     **Infinity** are treated as Color.Black.
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
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor | ColorMetrics } value - Color of the fill area
   *     <br>Default value : Color.Black.
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
 * > **Child Components**
 * >
 * > None.
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
