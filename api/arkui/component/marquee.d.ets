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


import { ResourceColor, Length } from "./units";
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { FontWeight, MarqueeUpdateStrategy } from "./enums";
import { Resource } from './../../../api/global/resource';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines Marquee constructor options.
 *
 * @interface MarqueeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface MarqueeOptions {
    /**
     * Control whether the running lamp enters the playing state.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    start: boolean;
    /**
     * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    step?: number;
    /**
     * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    loop?: number;
    /**
     * Set text to scroll from the beginning or backward.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fromStart?: boolean;
    /**
     * Text that needs scrolling.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    src: string;
}
export declare interface MarqueeAttribute extends CommonMethod {
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: Length | undefined): this;
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    allowScale(value: boolean | undefined): this;
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Marquee scrolling strategy after text update.
     *
     * @param { MarqueeUpdateStrategy } value - The scrolling strategy after text update.
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    marqueeUpdateStrategy(value: MarqueeUpdateStrategy | undefined): this;
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onStart(event: (() => void) | undefined): this;
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onBounce(event: (() => void) | undefined): this;
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onFinish(event: (() => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<MarqueeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIMarqueeAttribute extends UICommonMethod {
    /**
     * Set marquee font Color.
     *
     * @param { ResourceColor } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Set marquee font size.
     *
     * @param { Length } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: Length | undefined): this;
    /**
     * Set marquee allow scale.
     *
     * @param { boolean } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    allowScale(value: boolean | undefined): this;
    /**
     * Set marquee font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Set marquee font family.
     *
     * @param { string | Resource } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Marquee scrolling strategy after text update.
     *
     * @param { MarqueeUpdateStrategy } value - The scrolling strategy after text update.
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    marqueeUpdateStrategy(value: MarqueeUpdateStrategy | undefined): this;
    /**
     * Called when scrolling starts.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onStart(event: (() => void) | undefined): this;
    /**
     * Called when scrolling to the bottom.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onBounce(event: (() => void) | undefined): this;
    /**
     * Called when scrolling is complete.
     *
     * @param { function } event
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onFinish(event: (() => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<MarqueeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Marquee(
    options: MarqueeOptions, 
    @memo
    content_?: () => void,
): UIMarqueeAttribute