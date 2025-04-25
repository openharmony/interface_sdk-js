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
 * @arkts 1.2
 */


import { CommonConfiguration, Callback, CommonMethod, Optional, ContentModifier, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define options used to construct a rating.
 *
 * @interface RatingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface RatingOptions {
    /**
     * Rating option.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rating: number;
    /**
     * Indicator option.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    indicator?: boolean;
}
/**
 * Define star style options.
 *
 * @interface StarStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface StarStyleOptions {
    /**
     * Background URI option.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundUri: string;
    /**
     * Foreground URI option.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    foregroundUri: string;
    /**
     * Secondary URI option.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    secondaryUri?: string;
}
/**
 * RatingConfiguration used by rating content modifier.
 *
 * @extends CommonConfiguration<RatingConfiguration>
 * @interface RatingConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface RatingConfiguration extends CommonConfiguration<RatingConfiguration> {
    /**
     * Current number of Rating.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rating: number;
    /**
     * Indicates whether Rating is used as an indicator.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    indicator: boolean;
    /**
     * Total stars of Rating.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stars: number;
    /**
     * The step size of the Rating.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stepSize: number;
    /**
     * Trigger Rating select change.
     *
     * @type { Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    triggerChange: Callback<number>;
}
/**
 * Callback of the star rating of the operation scoring bar changes event.
 *
 * @typedef {function} OnRatingChangeCallback
 * @param {number} rating - The rating of the rating bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnRatingChangeCallback = (rating: number) => void;
export declare interface RatingAttribute extends CommonMethod {
    /**
     * Called when the total number of stars is set.
     *
     * @param { number } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stars(value: number | undefined): this;
    /**
     * Called when the step size of the operation rating.
     *
     * @param { number } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stepSize(value: number | undefined): this;
    /**
     * Called when a picture is set.
     *
     * @param { StarStyleOptions } options - star style options
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    starStyle(options: StarStyleOptions | undefined): this;
    /**
     * Called when the star rating of the operation scoring bar changes.
     *
     * @param { Optional<OnRatingChangeCallback> } callback
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onChange(callback: OnRatingChangeCallback | undefined): this;
    /**
     * Set the content modifier of rating.
     *
     * @param { ContentModifier<RatingConfiguration> } modifier - The content modifier of rating.
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<RatingConfiguration> | undefined): this;
    attributeModifier(modifier: AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIRatingAttribute extends UICommonMethod {
    /**
     * Called when the total number of stars is set.
     *
     * @param { number } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    stars(value: number | undefined): this;
    /**
     * Called when the step size of the operation rating.
     *
     * @param { number } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    stepSize(value: number | undefined): this;
    /**
     * Called when a picture is set.
     *
     * @param { StarStyleOptions } options - star style options
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    starStyle(options: StarStyleOptions | undefined): this;
    /**
     * Called when the star rating of the operation scoring bar changes.
     *
     * @param { Optional<OnRatingChangeCallback> } callback
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: OnRatingChangeCallback | undefined): this;
    /**
     * Set the content modifier of rating.
     *
     * @param { ContentModifier<RatingConfiguration> } modifier - The content modifier of rating.
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<RatingConfiguration> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Rating(
    options?: RatingOptions, 
    @memo
    content_?: () => void,
): UIRatingAttribute