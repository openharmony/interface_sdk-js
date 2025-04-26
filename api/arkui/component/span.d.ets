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


import { ResourceColor, Dimension, BorderRadiuses, Length, Font } from "./units";
import { CommonMethod, ShadowOptions, UICommonMethod, AttributeModifier } from "./common";
import { LengthMetrics } from './../Graphics';
import { Resource } from './../../../api/global/resource';
import { FontStyle, FontWeight, TextCase } from "./enums";
import { DecorationStyleInterface } from "./styledString";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define the background style of span.
 *
 * @interface TextBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextBackgroundStyle {
    /**
     * Background color of span.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Background radius of span.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: Dimension | BorderRadiuses;
}
export declare interface BaseSpan extends CommonMethod {
    /**
     * Span background style.
     *
     * @param { TextBackgroundStyle } style - The background style of span.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
    /**
     * Base line offset of the Span.
     *
     * @param { LengthMetrics } value - The base line offset of the Span.
     * @returns { T } The attribute of the Span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    baselineOffset(value: LengthMetrics | undefined): this;
}
export declare interface SpanAttribute extends BaseSpan {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the span font size and weight and family and style.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font(value: Font | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { SpanAttribute }
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
     * @param { number | string | Resource } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    decoration(value: DecorationStyleInterface | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    letterSpacing(value: number | string | undefined): this;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    textCase(value: TextCase | undefined): this;
    /**
     * Called when the line height of the span is set.
     *
     * @param { Length } value - The line height of the span.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineHeight(value: Length | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    attributeModifier(modifier: AttributeModifier<SpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIBaseSpan extends UICommonMethod {
    /**
     * Span background style.
     *
     * @param { TextBackgroundStyle } style - The background style of span.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
    /**
     * Base line offset of the Span.
     *
     * @param { LengthMetrics } value - The base line offset of the Span.
     * @returns { T } The attribute of the Span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    baselineOffset(value: LengthMetrics | undefined): this;
}
export declare interface UISpanAttribute extends UIBaseSpan {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the span font size and weight and family and style.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    font(value: Font | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { SpanAttribute }
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
     * @param { number | string | Resource } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    decoration(value: DecorationStyleInterface | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    letterSpacing(value: number | string | undefined): this;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    textCase(value: TextCase | undefined): this;
    /**
     * Called when the line height of the span is set.
     *
     * @param { Length } value - The line height of the span.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineHeight(value: Length | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<SpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Span(
    value: string | Resource, 
    @memo
    content_?: () => void,
): UISpanAttribute