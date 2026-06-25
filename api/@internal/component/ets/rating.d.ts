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
 * Provides configuration options for the **Rating** component.
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
declare interface RatingOptions {
  /**
   * Value to rate.
   * 
   * Default value: **0**
   * 
   * Value range: [0, stars]
   * 
   * Values less than 0 are treated as **0**, and values greater than the value of 
   * [stars]{@link RatingAttribute#stars(value: number)} are treated as the value of **stars**.
   * 
   * This parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rating: number;

  /**
   * Whether the component is used as an indicator. If this parameter is set to **true**, the rating value cannot be 
   * changed.
   * 
   * Default value: **false**
   * 
   * **NOTE**
   * 
   * When **indicator** is set to **true**, the default component height is 12.0 vp, and the component width is 
   * calculated as follows: Height x Value of **stars**.
   * 
   * When **indicator** is set to **false**, the default component height is 28.0 vp, and the component width is 
   * calculated as follows: Height x Value of **stars**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  indicator?: boolean
}

/**
 * Provides style settings for the selected, unselected, and partially selected stars in the **Rating** component.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 * 
 * > **NOTE**
 * >
 * > The string type can be used to load network images and local images. When a relative path is used to reference a 
 * > local image, for example, **Image("common/test.jpg")**, the **common** directory must be placed at the same level 
 * > as the **pages** directory. Base64-encoded strings are also supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface StarStyleOptions {
  /**
   * Image path for the unselected star. You can use the default system image or a custom image.
   * 
   * Resource configuration is supported since API version 20. For details, see 
   * [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backgroundUri: ResourceStr;

  /**
   * Image path for the selected star. You can use the default system image or a custom image.
   * 
   * Resource configuration is supported since API version 20. For details, see 
   * [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  foregroundUri: ResourceStr;

  /**
   * Image path for the partially selected star. You can use the default system image or a custom image.
   * 
   * Resource configuration is supported since API version 20. For details, see 
   * [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).
   *
   * @type { ?string } [since 7 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  secondaryUri?: ResourceStr
}

/**
 * The **Rating** component provides a rating bar.
 * 
 * > **NOTE**
 * 
 * > - If the parent node of the **Rating** component has fixed dimensions, you must also specify the width and height 
 * > for the **Rating** component, or set its parent node's [clip]{@link CommonMethod#clip(clip: Optional<boolean>)} 
 * > attribute to **true**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface RatingInterface {
  /**
   *
   * @param { object } options - Rating bar options.<br> The default values of the parameters in **RatingOptions** apply
   *     if this parameter is not set. [since 7 - 17]
   * @param { RatingOptions } [options] - Rating bar options.<br> The default values of the parameters in
   *     **RatingOptions** apply if this parameter is not set. [since 18]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: RatingOptions): RatingAttribute;
}

/**
 * You need a custom class to implement the **ContentModifier** API. Inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RatingConfiguration extends CommonConfiguration<RatingConfiguration> {
  /**
   * Value to rate.
   * 
   * Default value: **0**
   * 
   * Value range: [0, stars]
   * 
   * Values less than 0 are treated as **0**, and values greater than the value of 
   * [stars]{@link RatingAttribute#stars(value: number)} are treated as the value of **stars**.
   * 
   * This parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * This parameter supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rating: number;

  /**
   * Whether the rating bar is used as an indicator. **true**: used as an indicator. **false**: not used as an 
   * indicator.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  indicator: boolean;

  /**
   * Total number of ratings.
   * 
   * Default value: **5**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stars: number;

  /**
   * Step of an operation.
   * 
   * Default value: **0.5**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stepSize: number;

  /**
   * Callback triggered when the rating value changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerChange: Callback<number>;
}

/**
   * Defines the callback triggered when the rating value changes.
   *
   * @param {number} rating - Rating value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  declare type OnRatingChangeCallback = (rating: number) => void;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class RatingAttribute extends CommonMethod<RatingAttribute> {
  /**
   * Sets the total number of stars. Values less than 0 are treated as the default value.
   *
   * @param { number } value - Total number of stars.<br>Default value: **5**
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stars(value: number): RatingAttribute;

  /**
   * Sets the total number of stars. Values less than 0 are treated as the default value. Compared with 
   * [stars]{@link RatingAttribute#stars(value: number)}, this API supports the **undefined** type for the **starCount**
   * parameter.
   *
   * @param { Optional<number> } starCount - Total number of stars.<br>If **starCount** is set to **undefined**, the
   *     default value **5** is used.
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  stars(starCount: Optional<number>): RatingAttribute;

  /**
   * Sets the step for rating. Values less than 0.1 are treated as the default value.
   *
   * @param { number } value - Step for rating.<br>Default value: **0.5**<br>Value range: [0.1, stars]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stepSize(value: number): RatingAttribute;

  /**
   * Sets the step for rating. Values less than 0.1 are treated as the default value. Compared with 
   * [stepSize]{@link RatingAttribute#stepSize(value: number)}, this API supports the **undefined** type for the 
   * **size** parameter.
   *
   * @param { Optional<number> } size - Step for rating.<br>If **size** is set to **undefined**, the default value
   *     **0.5** is used.<br>Value range: [0.1, stars]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  stepSize(size: Optional<number>): RatingAttribute;

  /**
   * Sets the star style. For details about the supported image types, see [Image]{@link image}.
   * 
   * Local and network images are supported. The PixelMap type is not supported.
   * 
   * By default, the image is loaded in asynchronous mode. Synchronous loading is not supported.
   *
   * @param { object } value [since 7 - 17]
   * @param { StarStyleOptions } options - Star style.<br>**NOTE**<br>If an incorrect image path is provided for
   *     **backgroundUri**, **foregroundUri**, or **secondaryUri**, the previously displayed image will be retained. If
   *     the first provided path is incorrect, no image will be displayed.<br>When **backgroundUri** or
   *     **foregroundUri** is set to **undefined** or an empty string, the **Rating** component falls back to the
   *     default star image.<br>If **secondaryUri** is not set, or is set to **undefined** or an empty string,
   *     **backgroundUri** will be used as a fallback. The behavior in this case is the same as when only
   *     **foregroundUri** and **backgroundUri** are configured. [since 18]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  starStyle(options: StarStyleOptions): RatingAttribute;

  /**
   * Sets the star style. For details about the supported image types, see [Image]{@link image}.
   * 
   * Local and network images are supported. The PixelMap type is not supported.
   * 
   * By default, the image is loaded in asynchronous mode. Synchronous loading is not supported.
   * 
   * Compared with [starStyle]{@link RatingAttribute#starStyle(options: StarStyleOptions)}, this API supports the 
   * **undefined** type for the **options** parameter.
   *
   * @param { Optional<StarStyleOptions> } options - Star style.<br>**NOTE**<br>If an incorrect image path is provided
   *     for **backgroundUri**, **foregroundUri**, or **secondaryUri**, the previously displayed image will be retained.
   *     If the first provided path is incorrect, no image will be displayed.<br>When **backgroundUri** or
   *     **foregroundUri** is set to **undefined** or an empty string, the **Rating** component falls back to the
   *     default star image.<br>If **secondaryUri** is not set, or is set to **undefined** or an empty string,
   *     **backgroundUri** will be used as a fallback. The behavior in this case is the same as when only
   *     **foregroundUri** and **backgroundUri** are configured.
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  starStyle(options: Optional<StarStyleOptions>): RatingAttribute;

  /**
   * Triggered when the rating value changes.
   *
   * @param { function } callback
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: (value: number) => void): RatingAttribute;

  /**
   * Triggered when the rating value changes. Compared with 
   * [onChange]{@link RatingAttribute#onChange(callback: (value: number) => void)}, this API supports the **undefined** 
   * type for the **callback** parameter.
   *
   * @param { Optional<OnRatingChangeCallback> } callback - Defines the callback triggered when the rating value
   *     changes.<br>If **callback** is set to **undefined**, the callback function is not used.
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  onChange(callback: Optional<OnRatingChangeCallback>): RatingAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<RatingConfiguration> } modifier - Content modifier to apply to the current component.<br>
   *     **modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<RatingConfiguration>): RatingAttribute;

  /**
   * Creates a content modifier. Compared with 
   * [contentModifier]{@link RatingAttribute#contentModifier(modifier: ContentModifier<RatingConfiguration>)}, this API 
   * supports the **undefined** type for the **modifier** parameter.
   *
   * @param { Optional<ContentModifier<RatingConfiguration>> } modifier - Content modifier to apply to the current
   *     component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   *     <br>If **modifier** is set to **undefined**, no content modifier is used.
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  contentModifier(modifier: Optional<ContentModifier<RatingConfiguration>>): RatingAttribute;
}

/**
 * The **Rating** component provides a rating bar.
 * 
 * > **NOTE**
 * 
 * > - If the parent node of the **Rating** component has fixed dimensions, you must also specify the width and height 
 * > for the **Rating** component, or set its parent node's [clip]{@link CommonMethod#clip(clip: Optional<boolean>)} 
 * > attribute to **true**.
 * 
 * ###### Child Components
 * 
 * Not supported
 * 
 * ###### Sequential Keyboard Navigation Specifications
 * 
 * | Key        | Description                       |
 * |------------|-----------------------------|
 * | Tab        | Switch the focus between components.                   |
 * | Left and right arrow keys  | Increase or decrease the rating on preview at the specified step, without changing the actual rating.|
 * | Home       | Move the focus to the first star, without changing the actual rating.         |
 * | End        | Move the focus to the last star, without changing the actual rating.        |
 * | Space/Enter | Submit the rating result based on the current rating.              |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Rating: RatingInterface;

/**
 * Defines Rating Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const RatingInstance: RatingAttribute;