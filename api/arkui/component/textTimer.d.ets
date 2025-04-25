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


import { CommonConfiguration, CommonMethod, ShadowOptions, ContentModifier, UICommonMethod, AttributeModifier } from "./common";
import { ResourceColor, Length, ResourceStr } from "./units";
import { FontStyle, FontWeight } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Provides a way to control the process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare class TextTimerController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Provides a start event for timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    start(): void;
    /**
     * Provides a pause event for timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pause(): void;
    /**
     * Provides an event to reset timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    reset(): void;
}
/**
 * TextTimerConfiguration used by content modifier.
 *
 * @extends CommonConfiguration<TextTimerConfiguration>
 * @interface TextTimerConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
    /**
     * Specifies the timer range.
     * In the non-countDown scenario, a negative value indicates that the timer is not limited.
     * The unit is millisecond.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    count: number;
    /**
     * Texttimer is isCountDown or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isCountDown: boolean;
    /**
     * Texttimer is started or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    started: boolean;
    /**
     * Elapsed time of the timer, readonly.
     * The unit is millisecond.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    elapsedTime: number;
}
/**
 * Defines the options of TextTimer.
 *
 * @interface TextTimerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface TextTimerOptions {
    /**
     * Sets whether to countdown.The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    isCountDown?: boolean;
    /**
     * Specifies the timer range.
     * In the non-countDown scenario, a negative value indicates that the timer is not limited.
     * The unit is millisecond.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    count?: number;
    /**
     * Controller of Texttimer.
     *
     * @type { ?TextTimerController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    controller?: TextTimerController;
}
export declare interface TextTimerAttribute extends CommonMethod {
    /**
     * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
     * The time format string can be hh, mm, ss, or ms.
     *
     * @param { string } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    format(value: string | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { Length } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: Length | undefined): this;
    /**
     * Called when the fontStyle is set
     *
     * @param { FontStyle } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the fontWeight is set
     *
     * @param { number | FontWeight | string } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the fontFamily is set
     *
     * @param { ResourceStr } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the timer value is returned.
     *
     * @param { function } event
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onTimer(event: ((utc: number, elapsedTime: number) => void) | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Set the content modifier of texttimer.
     *
     * @param { ContentModifier<TextTimerConfiguration> } modifier - The content modifier of texttimer.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<TextTimerConfiguration> | undefined): this;
    attributeModifier(modifier: AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UITextTimerAttribute extends UICommonMethod {
    /**
     * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
     * The time format string can be hh, mm, ss, or ms.
     *
     * @param { string } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    format(value: string | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { Length } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: Length | undefined): this;
    /**
     * Called when the fontStyle is set
     *
     * @param { FontStyle } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the fontWeight is set
     *
     * @param { number | FontWeight | string } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the fontFamily is set
     *
     * @param { ResourceStr } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the timer value is returned.
     *
     * @param { function } event
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onTimer(event: ((utc: number, elapsedTime: number) => void) | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Set the content modifier of texttimer.
     *
     * @param { ContentModifier<TextTimerConfiguration> } modifier - The content modifier of texttimer.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<TextTimerConfiguration> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function TextTimer(
    options?: TextTimerOptions, 
    @memo
    content_?: () => void,
): UITextTimerAttribute