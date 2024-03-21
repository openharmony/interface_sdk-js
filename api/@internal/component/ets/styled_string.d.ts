/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * StyledString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class StyledString {
    /**
     * constructor.
     *
     * @param { string } value - indicates the current object value of the StyledString.
     * @param { Array<StyleOptions> } [styles] - indicates the SpanStyle objects.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: string, styles?: Array<StyleOptions>);

    /**
     * Get the length of the StyledString's characters.
     *
     * @type { number } - the length of the StyledString's characters.
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    readonly length: number;

    /**
    * Get the literal content of the StyledString.
    *
    * @returns { string } - the literal content of the StyledString
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    getString(): string;

    /**
     * Get the attribute objects of the subStyledString.
     *
     * @param { number } start - the start position of the subStyledString.
     * @param { number } length - the length of the subStyledString's characters.
     * @param { StyledStringKey } [styledKey] - the specified type.
     * @returns { Array<SpanStyle> }
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>;

    /**
     * Judge if two attribute strings are equal.
     *
     * @param { StyledString } other - another StyledString.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    equals(other: StyledString): boolean;

    /**
     * Get the substring of the StyledString.
     *
     * @param { number } start - the start position of the subStyledString.
     * @param { number } [length] - the length of the subStyledString's characters.
     * @returns { StyledString }
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    subStyledString(start: number, length?: number): StyledString;
}

/**
 * StyleOptions
 *
 * @interface StyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface StyleOptions {
    /**
     * The start position of the StyleOptions.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    start?: number;

    /**
     * The length of the modifiedStyledString's characters.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    length?: number;

    /**
     * The attribute key of the StyleOptions.
     *
     * @type { StyledStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styledKey: StyledStringKey;

    /**
     * The attribute value of the StyleOptions.
     *
     * @type { StyledStringValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styledValue: StyledStringValue;
}

/**
 * SpanStyle
 *
 * @interface SpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface SpanStyle {
    /**
     * The start position of the SpanStyle.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    start: number;

    /**
     * The length of the modifiedStyledString's characters.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    length: number;

    /**
     * The attribute key of the SpanStyle.
     *
     * @type { StyledStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styledKey: StyledStringKey;

    /**
     * The attribute value of the SpanStyle.
     *
     * @type { StyledStringValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styledValue: StyledStringValue;
}

/**
 * Defines TextStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class TextStyle {

    /**
     * constructor.
     *
     * @param { TextStyleInterface } [value] - font property object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
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
     * @since 12
     */
    readonly fontColor?: ResourceColor;
}

/**
 * TextStyleInterface
 *
 * @interface TextStyleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface TextStyleInterface {
    /**
     * The fontColor value of the font property object.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontColor?: ResourceColor;
}

/**
 * Defines the Span Type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare type StyledStringValue = TextStyle ;

/**
 * MutableStyledString
 *
 * @extends StyledString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class MutableStyledString extends StyledString {
    /**
     * Replace the string of the specified range.
     *
     * @param { number } start - the start position of the replacedString.
     * @param { number } length - the length of the replacedString's characters.
     * @param { string } other - must be unicode string.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceString(start: number, length: number, other: string): void;

    /**
    * Insert the string at the specified location.
    *
    * @param { number } start - the start position of the insertedString.
    * @param { string } other - must be unicode string.
    * @throws { BusinessError } 401 - The parameter check failed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    insertString(start: number, other: string): void;

    /**
    * Remove the string of the specified range.
    *
    * @param { number } start - the start position of the removedString.
    * @param { number } length - the length of the removedString's characters.
    * @throws { BusinessError } 401 - The parameter check failed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    removeString(start: number, length: number): void;

    /**
     * Replace the specified range string attribute.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceStyle(spanStyle: SpanStyle): void;

    /**
     * Add attributes to the specified range string.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    setStyle(spanStyle: SpanStyle): void;

    /**
     * Delete the specified type attributes for the specified range string.
     *
     * @param { number } start - the start position of the removedAttributeStyledString.
     * @param { number } length - the length of the removedAttributeStyledString's characters.
     * @param { StyledStringKey } styledKey - the specified attribute type's key.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeStyle(start: number, length: number, styledKey: StyledStringKey): void;

    /**
     * Delete all attributes for the specified range styledString.
     *
     * @param { number } start - the start position of the attributeRemovedStyledString's characters.
     * @param { number } length - the length of the attributeRemovedStyledString's characters.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeStyles(start: number, length: number): void;

    /**
     * Delete all attributes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    clearStyles(): void;

    /**
     * Replace the StyledString of the specified range.
     *
     * @param { number } start - the start position of the replacedStyledString.
     * @param { number } length - the length of the replacedStyledString's characters.
     * @param { StyledString } other - new StyledString.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceStyledString(start: number, length: number, other: StyledString): void;

    /**
     * Insert new StyledString at the specified location.
     *
     * @param { number } start - the start position of the insertedStyledString.
     * @param { StyledString } other - new StyledString.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    insertStyledString(start: number, other: StyledString): void;

    /**
     * Append new StyledString at the end.
     *
     * @param { StyledString } other - new StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    appendStyledString(other: StyledString): void;
}


/**
 * the attribute type of the StyledString
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum StyledStringKey {
    /**
     * Font property settings-fontColor/fontSize/fontWeight/fontFamily/fontStyle included.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    FONT = 0,

}