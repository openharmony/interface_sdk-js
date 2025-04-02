/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { ResourceColor, ResourceStr, PixelMap, SizeOptions, Margin, Padding, BorderRadiuses } from './units'
import { FontStyle, FontWeight, TextDecorationType, TextDecorationStyle, TextAlign, TextOverflow, WordBreak, ImageSpanAlignment, ImageFit } from './enums'
import { LengthMetrics, DrawContext } from './../Graphics'
import { ShadowOptions, Callback_ClickEvent_Void, ClickEvent } from './common'
import { TextBackgroundStyle } from './span'
import { Callback_GestureEvent_Void, GestureEvent } from './gesture'
import { LeadingMarginPlaceholder } from './richEditor'
export interface StyledString {
    readonly length: number;
    getString(): string
    getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>
    equals(other: StyledString): boolean
    subStyledString(start: number, length?: number): StyledString
    fromHtml(html: string): Promise<StyledString>
    toHtml(styledString: StyledString): string
    marshalling(styledString: StyledString): ArrayBuffer
    unmarshalling(buffer: ArrayBuffer): Promise<StyledString>
}
export interface StyleOptions {
    start?: number;
    length?: number;
    styledKey: StyledStringKey;
    styledValue: StyledStringValue;
}
export interface SpanStyle {
    start: number;
    length: number;
    styledKey: StyledStringKey;
    styledValue: StyledStringValue;
}
export interface TextStyle_styled_string {
    readonly fontColor?: ResourceColor;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly fontStyle?: FontStyle;
}
export interface TextStyleInterface {
    fontColor?: ResourceColor;
    fontFamily?: ResourceStr;
    fontSize?: LengthMetrics;
    fontWeight?: number | FontWeight | string;
    fontStyle?: FontStyle;
}
export interface DecorationStyle {
    readonly type: TextDecorationType;
    readonly color?: ResourceColor;
    readonly style?: TextDecorationStyle;
}
export interface DecorationStyleInterface {
    type: TextDecorationType;
    color?: ResourceColor;
    style?: TextDecorationStyle;
}
export interface BaselineOffsetStyle {
    readonly baselineOffset: number;
}
export interface LetterSpacingStyle {
    readonly letterSpacing: number;
}
export interface TextShadowStyle {
    readonly textShadow: Array<ShadowOptions>;
}
export interface BackgroundColorStyle {
    readonly textBackgroundStyle: TextBackgroundStyle;
}
export interface GestureStyle {
}
export interface GestureStyleInterface {
    onClick?: ((event: ClickEvent) => void);
    onLongPress?: ((event: GestureEvent) => void);
}
export interface ParagraphStyle {
    readonly textAlign?: TextAlign;
    readonly textIndent?: number;
    readonly maxLines?: number;
    readonly overflow?: TextOverflow;
    readonly wordBreak?: WordBreak;
    readonly leadingMargin?: number | LeadingMarginPlaceholder;
}
export interface ParagraphStyleInterface {
    textAlign?: TextAlign;
    textIndent?: LengthMetrics;
    maxLines?: number;
    overflow?: TextOverflow;
    wordBreak?: WordBreak;
    leadingMargin?: LengthMetrics | LeadingMarginPlaceholder;
}
export interface LineHeightStyle {
    readonly lineHeight: number;
}
export interface UrlStyle {
    readonly url: string;
}
export type StyledStringValue = TextStyle_styled_string | DecorationStyle | BaselineOffsetStyle |
    LetterSpacingStyle | TextShadowStyle | GestureStyle | ImageAttachment | ParagraphStyle |
    LineHeightStyle | UrlStyle | CustomSpan | UserDataSpan | BackgroundColorStyle;
export interface MutableStyledString extends StyledString {
    replaceString(start: number, length: number, other: string): void
    insertString(start: number, other: string): void
    removeString(start: number, length: number): void
    replaceStyle(spanStyle: SpanStyle): void
    setStyle(spanStyle: SpanStyle): void
    removeStyle(start: number, length: number, styledKey: StyledStringKey): void
    removeStyles(start: number, length: number): void
    clearStyles(): void
    replaceStyledString(start: number, length: number, other: StyledString): void
    insertStyledString(start: number, other: StyledString): void
    appendStyledString(other: StyledString): void
}
export enum StyledStringKey {
    FONT = 0,
    DECORATION = 1,
    BASELINE_OFFSET = 2,
    LETTER_SPACING = 3,
    TEXT_SHADOW = 4,
    LINE_HEIGHT = 5,
    BACKGROUND_COLOR = 6,
    URL = 7,
    GESTURE = 100,
    PARAGRAPH_STYLE = 200,
    IMAGE = 300,
    CUSTOM_SPAN = 400,
    USER_DATA = 500
}
export interface ImageAttachment {
    readonly value: PixelMap;
    readonly size?: SizeOptions;
    readonly verticalAlign?: ImageSpanAlignment;
    readonly objectFit?: ImageFit;
    readonly layoutStyle?: ImageAttachmentLayoutStyle;
}
export interface ImageAttachmentInterface {
    value: PixelMap;
    size?: SizeOptions;
    verticalAlign?: ImageSpanAlignment;
    objectFit?: ImageFit;
    layoutStyle?: ImageAttachmentLayoutStyle;
}
export interface ImageAttachmentLayoutStyle {
    margin?: LengthMetrics | Margin;
    padding?: LengthMetrics | Padding;
    borderRadius?: LengthMetrics | BorderRadiuses;
}
export interface CustomSpanMetrics {
    width: number;
    height?: number;
}
export interface CustomSpanDrawInfo {
    x: number;
    lineTop: number;
    lineBottom: number;
    baseline: number;
}
export interface CustomSpanMeasureInfo {
    fontSize: number;
}
export interface CustomSpan {
    onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics
    onDraw(context: DrawContext, drawInfo: CustomSpanDrawInfo): void
    invalidate(): void
}
export interface UserDataSpan {
}

/**
 * Defines TextStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class TextStyle {

    /**
     * constructor.
     *
     * @param { TextStyleInterface } [value] - font property object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(value?: TextStyleInterface);

    /**
     * Get the fontColor of the StyledString.
     *
     * @type { ?ResourceColor } - the set fontColor of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly fontColor?: ResourceColor;

    /**
     * Get the fontFamily of the StyledString.
     *
     * @type { ?string } - the fontFamily of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly fontFamily?: string;

    /**
     * Get the fontSize of the StyledString.
     * If not undefined, the unit is vp.
     *
     * @type { ?number } - the fontSize of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly fontSize?: number;

    /**
     * Get the fontWeight of the StyledString.
     *
     * @type { ?number } - the fontWeight of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly fontWeight?: number;

    /**
     * Get the fontStyle of the StyledString.
     *
     * @type { ?FontStyle  } - the fontStyle of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly fontStyle?: FontStyle;
}