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
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface CircleOptions {
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the width property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  width?: Length;

  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the height property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  height?: Length;
}

/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
interface CircleInterface {
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  new (value?: CircleOptions): CircleAttribute;

  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  (value?: CircleOptions): CircleAttribute;
}

/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod<CircleAttribute> 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod<CircleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod<CircleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod<CircleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare class CircleAttribute extends CommonShapeMethod<CircleAttribute> {
  /**
  * Sets the stroke color.
  * If this attribute is not set, the component does not have any stroke.
  * If the value is invalid, no stroke will be drawn.
  *
  * @param { ResourceColor | ColorMetrics } value - Stroke color.
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @FaAndStageModel
  * @form
  * @atomicservice
  * @since 26.0.0 dynamic
  */
  stroke(value: ResourceColor | ColorMetrics): T;
  
  /**
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor | ColorMetrics } value - Color of the fill area
   *     <br>Default value : Color.Black.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fill(value: ResourceColor | ColorMetrics): T;
}

/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Circle: CircleInterface;

/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const CircleInstance: CircleAttribute;
