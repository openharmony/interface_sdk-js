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
 * @file
 * @kit ArkUI
 */

/**
 * Defines a custom marshalling object for styled strings, which you need to define marshalling and unmarshalling
 * methods.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 19 dynamic
 */
declare type StyledStringMarshallingValue = UserDataSpan;

/**
 * Defines a callback for marshalling [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
 *
 * @param { StyledStringMarshallingValue } marshallableVal - Object to be marshaled.
 * @returns { ArrayBuffer } Marshaled data of [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 19 dynamic
 */
declare type StyledStringMarshallCallback = (marshallableVal: StyledStringMarshallingValue) => ArrayBuffer;

/**
 * Defines a callback for unmarshalling an ArrayBuffer to obtain
 * [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
 *
 * @param { ArrayBuffer } buf - Marshaled data of [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
 * @returns { StyledStringMarshallingValue } [StyledStringMarshallingValue]{@link StyledStringMarshallingValue} obtained
 *     after unmarshalling.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 19 dynamic
 */
declare type StyledStringUnmarshallCallback = (buf: ArrayBuffer) => StyledStringMarshallingValue;

/**
 * StyledString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class StyledString {
  /**
   * A constructor used to create a styled string.
   *
   * It is not supported to create it before
   * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}.
   *
   * @param { string | ImageAttachment | CustomSpan } value - Text content of the styled string.
   *     <br>**NOTE**
   *     <br>When the type of value is **ImageAttachment** or **CustomSpan**, the **styles** parameter does not take
   *     effect.
   *     <br>To set styles, use methods such as [setStyle]{@link MutableStyledString#setStyle}.
   * @param { Array<StyleOptions> } [styles] - Initialization options of the styled string.
   *     <br>**NOTE**
   *     <br>If **start** is an invalid value, the default value **0** is used.
   *     <br>If **length** is an invalid value, **length** equals the actual length of the styled string after start.
   *     <br>If **StyledStringKey** does not match **StyledStringValue**, **styles** does not take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>);

  /**
   * Length of the styled string.
   *
   * **NOTE**
   *
   * The length of **ImageAttachment** and **CustomSpan** in the styled string is counted as 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly length: number;

  /**
   * Obtains the text of this styled string.
   *
   * @returns { string } Text content of the styled string.
   *     <br>**NOTE**
   *     <br>When the styled string contains an image or [CustomSpan]{@link CustomSpan}, the returned result is
   *     represented by a space.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getString(): string;

  /**
   * Obtains the styles in the specified range of a styled string. The specified range must not exceed the string's
   * length.
   *
   * This API returns only styles explicitly set by the developer.
   *
   * @param { number } start - Subscript that corresponds to the target range in the styled string.
   * @param { number } length - Length of the target range in the styled string.
   * @param { StyledStringKey } [styledKey] - Enumeration value of the string style of the attribute character in the
   *     specified range.
   *     <br>**Note:**
   *     <br>If this parameter is not passed, the styles of all enumeration values of
   *     [StyledStringKey]{@link StyledStringKey} set by the developer are obtained by default.
   * @returns { Array<SpanStyle> } Array of style objects.
   *     <br>**Note:**
   *     <br>If no style is set for the styled string in the specified range, an empty array is returned.
   *     <br>An exception is thrown if **start** and **length** are out of bounds or a mandatory parameter is
   *     **undefined**.
   *     <br>An exception is thrown if an invalid value or **undefined** is passed to **styledKey**.
   *     <br>If **styledKey** is **CustomSpan**, the style object passed when creating **CustomSpan** is returned, and
   *     modifying this style object also affects the actual display effect.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>;

  /**
   * Checks whether this styled string is the same as another styled string.
   *
   * @param { StyledString } other - **StyledString** object to compare.
   * @returns { boolean } Whether two styled strings are equal.
   *     <br>The value **true** indicates that they are equal, and **false** indicates that they are not equal.
   *     <br>**NOTE**
   *     <br>Two styled strings are considered equal when their text and styles are identical.
   *     <br>[GestureStyle]{@link GestureStyle} is not compared. Two styled strings are also considered equal when they
   *     have different events configured but the same text and other styles.
   *     <br>When [CustomSpan]{@link CustomSpan} or [LeadingMarginSpan]{@link LeadingMarginSpan} is compared, the
   *     addresses are compared. If the addresses are equal, they are considered equal.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  equals(other: StyledString): boolean;

  /**
   * Obtains a substring of this styled string. The specified range must not exceed the string's length.
   *
   * @param { number } start - Subscript that corresponds to the start position of the sub-styled string.
   * @param { number } [length] - Length of the sub-styled string.
   *     <br>If not passed, the default value is the difference between the length of the queried styled string object
   *     and the value of **start**.
   * @returns { StyledString } Sub-styled string.
   *     <br>**NOTE**
   *     <br>When **start** is a valid input parameter, the default value of **length** is the difference between the
   *     length of the queried styled string object and the value of **start**.
   *     <br>An exception is thrown when **start** and **length** are out of bounds or when a mandatory parameter is set
   *     to **undefined**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  subStyledString(start: number, length?: number): StyledString;

  /**
   * Converts an HTML-formatted string into a styled string. HTML tags are mapped to the corresponding styled string
   * styles (for example, bold tags are mapped to **TextStyle**, and decoration tags are mapped to **DecorationStyle**).
   * The HTML tags currently supported for conversion are: \<p>, \<span>, \<img>, \
   *
   * , \<strong>, \<b>, \<a>, \<i>, \<em>, \<s>, \<u>, \<del>, \<sup>, \<sub>, \<cite>, \<dfn>, \<small>, \<h1>, \<h2>,
   * \<h3>, \<h4>, \<h5>, \<h6>, \, \, \<li>. The style attribute in tags can be converted into the corresponding styled
   * string styles.
   *
   * For details about how to use this API, see
   * [Example 12: Implementing Conversion Using fromHtml and toHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml)
   * and
   * [Example 18: Conversion Using fromHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-18-conversion-using-fromhtml).
   *
   *
   * | Tag Name| Description                  |
   * | ------------- | ---------------------------- |
   * | \<p\>       | Paragraph, separates text paragraphs.       |
   * | \<span\>    | Inline text supporting style configuration. In API version 17 and earlier, the **background-color** attribute set 
   * using **\<span\>** does not take effect.    |
   * | \<img\>     | Image.                   |
   * | \<strong\>  | Bolds text.                   |
   * | &lt;br&gt;<sup>20+</sup>      | Line break.                       |
   * | \<b\><sup>20+</sup>       | Bolds text.                   |
   * | \<a\><sup>20+</sup>       | Hyperlink.                     |
   * | \<i\><sup>20+</sup>       | Italic text.                   |
   * | \<em\><sup>20+</sup>      | Italic text.                   |
   * | \<s\><sup>20+</sup>       | Strikethrough.            |
   * | \<u\><sup>20+</sup>       | Underline.                     |
   * | \<del\><sup>20+</sup>     | Strikethrough.            |
   * | \<sup\><sup>20+</sup>     | Superscript text.                   |
   * | \<sub\><sup>20+</sup>     | Subscript text.                   |
   * | \<cite\>    | Italic text.        |
   * | \<dfn\>     | Italic text.        |
   * | \<small\>   | Font‑size reduction tag. The font size is scaled to 0.8 times the parent container font size, and nesting is supported.        |
   * | \<h1\>      | Level-1 heading.        |
   * | \<h2\>      | Level-2 heading.        |
   * | \<h3\>      | Level-3 heading.        |
   * | \<h4\>      | Level-4 heading.        |
   * | \<h5\>      | Level-5 heading.        |
   * | \<h6\>      | Level-6 heading.        |
   * | \<ol\>      | Ordered list.        |
   * | \<ul\>      | Unordered list.        |
   * | \<li\>      | List item.          |
   *
   * @param { string } html - HTML-formatted string.
   * @returns { Promise<StyledString> } Styled string. **resolve** returns the converted styled string; **reject**
   *     throws an exception.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 170001 - Convert Error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  static fromHtml(html: string): Promise<StyledString>;

  /**
   * Converts a styled string into an HTML-formatted string. Styled string styles are mapped to the corresponding HTML
   * tags (for example, **TextStyle** is mapped to a span tag with the style attribute, and **ImageAttachment** is
   * mapped to an img tag). The supported styled string keys for conversion, as detailed in
   * [StyledStringKey]{@link StyledStringKey}, include **StyledStringKey.FONT**, **StyledStringKey.DECORATION**,
   * **StyledStringKey.LETTER_SPACING**, **StyledStringKey.TEXT_SHADOW**, **StyledStringKey.LINE_HEIGHT**, and
   * **StyledStringKey.IMAGE**.
   *
   * For details about how to use this API, see
   * [Example 12: Implementing Conversion Using fromHtml and toHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml).
   *
   * @param { StyledString } styledString - Styled string object to be converted into an HTML format string.
   * @returns { string } HTML string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  static toHtml(styledString: StyledString): string;

  /**
   * Marshals a styled string by defining a callback to marshal
   * [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
   *
   * @param { StyledString } styledString - Styled string to marshal.
   * @param { function } callback - Callback defining how to marshal
   *     [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
   * @returns { ArrayBuffer } Buffer information after marshalling.
   *     <br>**NOTE**
   *     <br>Currently, text and images are supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   */
  static marshalling(styledString: StyledString, callback: StyledStringMarshallCallback): ArrayBuffer;

  /**
   * Unmarshals a styled string by defining a callback to
   * [StyledStringMarshallingValue]{@link StyledStringMarshallingValue}.
   *
   * @param { ArrayBuffer } buffer - Data marshaled from a styled string.
   * @param { function } callback - Callback defining how to marshal **ArrayBuffer**.
   * @returns { Promise<StyledString> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 170002 - Styled string decode error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   */
  static unmarshalling(buffer: ArrayBuffer, callback: StyledStringUnmarshallCallback): Promise<StyledString>;

  /**
   * Marshals a styled string.
   *
   * @param { StyledString } styledString - Styled string to marshal.
   * @returns { ArrayBuffer } Buffer information after marshalling.
   *     <br>**NOTE**
   *     <br>Currently, text and images are supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  static marshalling(styledString: StyledString): ArrayBuffer;

  /**
   * Unmarshals a buffer to obtain a styled string.
   *
   * @param { ArrayBuffer } buffer - Data marshaled from a styled string.
   * @returns { Promise<StyledString> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 170002 - Styled string decode error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  static unmarshalling(buffer: ArrayBuffer): Promise<StyledString>;
}

/**
 * Describes the style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface StyleOptions {
  /**
   * Start position for setting the style of the styled string.
   *
   * If the value of **start** is less than 0 or exceeds the string length, it is processed as 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: number;

  /**
   * Length for setting the style of the styled string.
   *
   * If the value of **length** is less than 0 or exceeds the difference between the string length and **start**, it is
   * processed as the difference between the string length and **start**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length?: number;

  /**
   * Style key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  styledKey: StyledStringKey;

  /**
   * Style object used to set the style of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  styledValue: StyledStringValue;
}

/**
 * Describes the span style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SpanStyle {
  /**
   * Start position of the styled string style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: number;

  /**
   * Length of the styled string style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;

  /**
   * Style key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  styledKey: StyledStringKey;

  /**
   * Style object used to match the style of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  styledValue: StyledStringValue;
}

/**
 * Describes the text style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TextStyle {

  /**
   * A constructor used to create a text style.
   *
   * @param { TextStyleInterface } [value] - Font style setting item.
   *     <br>Default value: when not passed, inherits the default values of the **TextStyleInterface** properties.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value?: TextStyleInterface);

  /**
   * Text color of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontColor?: ResourceColor;

  /**
   * Text font of the styled string.
   *
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontFamily?: string;

  /**
   * Text font size of the styled string.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontSize?: number;

  /**
   * Text font weight of the styled string.
   *
   * Default value: **400**
   *
   * **NOTE**
   *
   * The return value is of the string type. For details about the relationship between the return value and the set
   * value, see the table below.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontWeight?: number;

  /**
   * Text font style of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontStyle?: FontStyle;

  /**
   * Superscript and subscript of the styled string.
   *
   * Default value: **SuperscriptStyle.NORMAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly superscript?: SuperscriptStyle;

  /**
   * Text stroke width of the styled string.
   *
   * Default value: **0**, in [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly strokeWidth?: number;

  /**
   * Text stroke color of the styled string.
   *
   * Default value: the font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly strokeColor?: ResourceColor;

  /**
   * Font configuration of the styled string.
   * indicating that **fontConfigs** is not set.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  readonly fontConfigs?: FontConfigs;

  /**
   * Attribute array of the variable font.
   * indicating that the variable font attributes are not set.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly fontVariations?: Array<FontVariation>;

  /**
   * Text stroke join style of the styled string. For details about the enum values, see **StrokeJoinStyle**.
   *
   * Default value: **StrokeJoinStyle.MITER_JOIN**, indicating a miter join with a sharp corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly strokeJoinStyle?: StrokeJoinStyle;
}

/**
 * TextStyleInterface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextStyleInterface {
  /**
   * Font color.
   *
   * The default value is the theme color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text font.
   *
   * The default value is the theme font.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFamily?: ResourceStr;

  /**
   * Font size.
   *
   * The default font size is 16fp.
   *
   * If the unit value of LengthMetrics is PERCENT, the current setting does not take effect and is processed as
   * **16fp**.
   *
   * Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: LengthMetrics;

  /**
   * Font weight.
   *
   * For the number type, the value ranges from 100 to 900 at an interval of 100. The default value is 400. A larger
   * value indicates a heavier font. For the string type, only the string form of the number type value is supported,
   * for example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the
   * respective enum values in **FontWeight**. An excessively large value may be truncated in different fonts. If the
   * value passed in is out of the value range or does not meet the interval requirement, the default value is used.
   *
   * Default value: **FontWeight.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * Font style.
   *
   * Default value: **FontStyle.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * Text superscript and subscript.
   *
   * Default value: **SuperscriptStyle.NORMAL**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  superscript?: SuperscriptStyle;

  /**
   * Text stroke width. If the unit value of **LengthMetrics** is **PERCENT**, the current setting does not take effect
   * and is processed as 0.
   *
   * If the value is less than 0, the text is solid; if the value is greater than 0, the text is hollow.
   *
   * The default value is **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * Text stroke color.
   *
   * The default value is the font color. If an abnormal value is set, the font color is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * Font configuration. The default value inherits [FontConfigs]{@link FontConfigs}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  fontConfigs?: FontConfigs;

  /**
   * Attribute of the variable font.
   * indicating that the attribute of the variable font is not set.
   * The **fontVariations** attribute has a higher priority than **fontWeight**.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations?: Array<FontVariation>;

  /**
   * Text stroke join style. For details about the enum values and their descriptions, see **StrokeJoinStyle**.
   *
   * Default value: **StrokeJoinStyle.MITER_JOIN**, indicating a miter join with a sharp corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle?: StrokeJoinStyle;
}

/**
 * Provides additional configuration options for the text decoration line style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface DecorationOptions {
  /**
   * Whether to enable the display of multiple decoration lines.
   *
   * Default value: **undefined**. The value **true** enables it, and **false** or **undefined** disables it.
   *
   * All decoration lines to be displayed must have this option enabled. In the intersection area of these decoration
   * lines, the multi-decoration-line effect is displayed, and the style, color, and thickness of the last set
   * decoration line are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableMultiType?: boolean;
}

/**
 * Describes the text decorative line style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DecorationStyle {

  /**
   * A constructor used to create a text decoration line style. If this API is not used to set the style, the default
   * decoration line type is **TextDecorationType.None**, the color is **Color.Black**, and the style is
   * **TextDecorationStyle.SOLID**.
   *
   * @param { DecorationStyleInterface } value - Text decoration settings.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: DecorationStyleInterface);

  /**
   * A constructor used to create a text decoration line style, with additional configuration options. If this API is
   * not used to set the style, the default decoration line type is **TextDecorationType.None**, the color is
   * **Color.Black**, the style is **TextDecorationStyle.SOLID**, and the thickness scale is 1.0.
   *
   * @param { DecorationStyleInterface } value - Text decoration line settings.
   * @param { DecorationOptions } [options] - Additional configuration options for the text decoration line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(value: DecorationStyleInterface, options?: DecorationOptions);

  /**
   * Type of the text decoration line of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly type: TextDecorationType;

  /**
   * Color of the text decoration line of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly color?: ResourceColor;

  /**
   * Style of the text decoration line of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly style?: TextDecorationStyle;

  /**
   * Scale value of the text decoration line thickness of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly thicknessScale?: number;

  /**
   * Additional configuration options of the text decoration line style of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly options?: DecorationOptions;
}

/**
 * Describes the API object for text decoration line styles.
 *
 * > **NOTE**
 * >
 * > When the bottom contour of a character intersects with the decoration, underline avoidance is triggered, commonly
 * > affecting characters like "g", "j", "y", "q", and "p."
 * >
 * > If the decoration color is set to **Color.Transparent**, it inherits the text color of the first character in each
 * > line. If the decoration color is set to **"#00FFFFFF"**, the line becomes fully transparent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DecorationStyleInterface {
  /**
   * Type of the decoration line. For details about the enums and their descriptions, see **TextDecorationType**.
   *
   * Default value: **TextDecorationType.None**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Color of the decoration line.
   *
   * Default value: **Color.Black**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Style of the decoration line. For details about the enums and their descriptions, see **TextDecorationStyle**.
   *
   * Default value: **TextDecorationStyle.SOLID**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * Scale ratio of the decoration line thickness.
   *
   * Default value: 1.0
   *
   * Value range: [0, +∞)
   *
   * **Note:** A negative value is processed as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  thicknessScale?: number;
}

/**
 * Describes the text baseline offset object. It is suitable for scenarios that require fine-tuning the vertical
 * position of text, such as aligning superscript and subscript text with normal text in chemical formulas and
 * mathematical expressions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class BaselineOffsetStyle {

  /**
   * A constructor used to create a text baseline offset style.
   *
   * @param { LengthMetrics } value - Setting item for the text baseline offset. If the unit value of **LengthMetrics**
   *     is **PERCENT**, this setting does not take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: LengthMetrics);

  /**
   * Text baseline offset of the styled string.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly baselineOffset: number;
}

/**
 * Describes the text character spacing object. It is suitable for scenarios that require adjusting character spacing,
 * such as widening the spacing of title text to enhance the visual effect and narrowing the spacing of dense text to
 * save space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LetterSpacingStyle {

  /**
   * A constructor used to create a text letter spacing style.
   *
   * @param { LengthMetrics } value - Text character spacing setting. If the unit value of **LengthMetrics** is
   *     **PERCENT**, this setting does not take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: LengthMetrics);

  /**
   * Text character spacing of the styled string.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly letterSpacing: number;
}

/**
 * Describes the text shadow style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TextShadowStyle {

  /**
   * A constructor used to create a text shadow style.
   *
   * The **ShadowOptions** object does not support the **fill** field.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Text shadow options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: ShadowOptions | Array<ShadowOptions>);

  /**
   * Text shadow of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly textShadow: Array<ShadowOptions>;
}

/**
 * Describes the text background color style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare class BackgroundColorStyle {

  /**
   * A constructor used to create the text background color. If this API is not used to set the value, the default
   * background color is **Color.Transparent** and the corner radius is **0**.
   *
   * @param { TextBackgroundStyle } textBackgroundStyle - Text background color setting item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  constructor(textBackgroundStyle: TextBackgroundStyle);

  /**
   * Text background color of the styled string.
   *
   * Default value:
   *
   * **{
   *
   * color: Color.Transparent,
   *
   * radius: 0
   *
   * }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  readonly textBackgroundStyle: TextBackgroundStyle;
}

/**
 * Describes the event gesture style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class GestureStyle {

  /**
   * A constructor used to create a gesture style.
   *
   * @param { GestureStyleInterface } [value] - Event gesture settings.
   *     <br>Default value: no gesture event is bound when this parameter is not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value?: GestureStyleInterface);
}

/**
 * Defines the Gesture Events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GestureStyleInterface {
  /**
   * Click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClick?: Callback<ClickEvent>;

  /**
   * Long press event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onLongPress?: Callback<GestureEvent>;

  /**
   * Touch event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onTouch?: Callback<TouchEvent>;
}

/**
 * Describes the text paragraph style.
 *
 * Except the first paragraph, all paragraphs are formed using the escape character '\n'.
 *
 * The style of a paragraph is the one (if any) set for the first element or the paragraph style of the bound component.
 *
 *
 * Before API version 26.0.0, if the first placeholder in a styled string paragraph is [CustomSpan]{@link CustomSpan} or
 * [ImageAttachment]{@link ImageAttachment}, the paragraph style set on that paragraph does not take effect. Since API
 * version 26.0.0, the paragraph style takes effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ParagraphStyle {

  /**
   * A constructor used to create a text paragraph style.
   *
   * @param { ParagraphStyleInterface } [value] - Paragraph style setting item.
   *     <br>Default value: If not passed, the default values of the properties of **ParagraphStyleInterface** are
   *     inherited.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value?: ParagraphStyleInterface);

  /**
   * Horizontal alignment of the styled string text paragraph.
   *
   * **Note:** **textAlign** can only adjust the overall layout of the text and does not affect the display order of
   * characters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly textAlign?: TextAlign;

  /**
   * Vertical alignment of the styled string text paragraph.
   *
   * The effect differs only when the same font size is used in a paragraph and the line height
   * [lineHeight]{@link TextAttribute#lineHeight} is set at the same time, or when text of different font sizes is mixed
   * in the same paragraph. Otherwise, setting any enum value of this attribute produces the same layout effect as not
   * setting it. The **SuperscriptStyle** superscript and subscript style in [TextStyle]{@link TextStyle} of the styled
   * string takes effect only when the value of [TextVerticalAlign]{@link TextVerticalAlign} is
   * **TextVerticalAlign.BASELINE**. With other vertical alignment modes, superscript and subscript text behaves the
   * same as normal text, with no superscript or subscript effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly textVerticalAlign?: TextVerticalAlign;

  /**
   * First-line text indent of the styled string text paragraph. Unit:
   * [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly textIndent?: number;

  /**
   * Maximum number of lines of the styled string text paragraph.
   *
   * Value range: [0, INT32_MAX]. A negative value means no limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly maxLines?: number;

  /**
   * Display mode of the styled string text paragraph when it is too long.
   *
   * Default value: **TextOverflow.None**.
   *
   * It must be used together with **maxLines**; setting it alone does not take effect. **TextOverflow.MARQUEE** is not
   * supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly overflow?: TextOverflow;

  /**
   * Line break rule of the styled string text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly wordBreak?: WordBreak;

  /**
   * Indent of the styled string text paragraph.
   *
   * When the return value is of the number type, the unit is vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly leadingMargin?: number | LeadingMarginPlaceholder;

  /**
   * Paragraph spacing of the styled string text paragraph.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  readonly paragraphSpacing?: number;

  /**
   * Custom indent information of the styled string text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  readonly leadingMarginSpan?: LeadingMarginSpan;

  /**
   * Text direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  readonly textDirection?: TextDirection;

  /**
   * Text shader effect.
   *
   * **Note:** When this API is set together with **strokeWidth** of [TextStyleInterface]{@link TextStyleInterface},
   * this API does not take effect. **shaderStyle** has a higher priority than **fontColor** in
   * [TextStyleInterface]{@link TextStyleInterface}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly shaderStyle?: ShaderStyle;

  /**
   * Tail indent distance of the styled string text paragraph.
   * INT32_MAX]
   * The value **0** means no tail indent.
   * **Note:** In the same paragraph, the **tailIndents** array takes values by array index in sequence for each line to
   * perform indentation. For the first line of a new paragraph, the value is taken again from index 0 of the
   * **tailIndents** array.
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly tailIndents?: Array<number>;
}

/**
 * ParagraphStyleInterface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ParagraphStyleInterface {
  /**
   * Horizontal alignment of the text paragraph.
   *
   * Default value: **TextAlign.Start**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textAlign?: TextAlign;

  /**
   * Vertical alignment of the text paragraph.
   *
   * Default value: **TextVerticalAlign.BASELINE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textVerticalAlign?: TextVerticalAlign;

  /**
   * First-line text indentation of the text paragraph. Percentage is not supported.
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent?: LengthMetrics;

  /**
   * Maximum number of lines of the text paragraph.
   *
   * **Note:** This takes effect only in **Text**. It is recommended to set it on the component side.
   *
   * No limit by default.
   *
   * Value range: [0, INT32_MAX]. When a negative number is passed in, no limit is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxLines?: number;

  /**
   * Display mode when the text paragraph is too long.
   *
   * **Note:** This takes effect only in **Text**. It is recommended to set it on the component side.
   *
   * Default value: **TextOverflow.None**
   *
   * It must be used together with **maxLines**; setting it alone does not take effect. **TextOverflow.MARQUEE** is not
   * supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  overflow?: TextOverflow;

  /**
   * Line breaking rule of the text paragraph.
   *
   * Default value: **WordBreak.NORMAL**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak?: WordBreak;

  /**
   * Indentation of the text paragraph. Percentage is not supported.
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  leadingMargin?: LengthMetrics | LeadingMarginPlaceholder;

  /**
   * Paragraph spacing of the text paragraph.
   *
   * The default paragraph spacing is 0. Percentage is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  paragraphSpacing?: LengthMetrics;

  /**
   * Custom indentation of the text paragraph. Percentage is not supported.
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  leadingMarginSpan?: LeadingMarginSpan;

  /**
   * Text direction.
   *
   * Default value: **TextDirection.DEFAULT**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection?: TextDirection;

  /**
   * Text shader effect.
   *
   * **Default effect:** When not passed in, no shader effect is applied, and the color set by **fontColor** is used.
   *
   * When this API is set together with **strokeWidth** of [TextStyleInterface]{@link TextStyleInterface}, this API does
   * not take effect, and **shaderStyle** has a higher priority than **fontColor** in
   * [TextStyleInterface]{@link TextStyleInterface}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle?: ShaderStyle;

  /**
   * Tail indentation of the text paragraph. Percentage is not supported. When a single **LengthMetrics** value is
   * provided, all lines share the same tail indentation; when an array is provided, the i-th element specifies the tail
   * indentation of the i-th line; if the number of text lines exceeds the array length, the last element in the array
   * is used for the remaining lines.
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  tailIndents?: LengthMetrics | Array<LengthMetrics>;
}

/**
 * Describes the text line height style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LineHeightStyle {

  /**
   * A constructor used to create a text line height style.
   *
   * @param { LengthMetrics } lineHeight - Text line height setting. If the unit value of **LengthMetrics** is
   *     **PERCENT**, the current setting does not take effect. When the **value** of **LengthMetrics** is greater than
   *     0, the text line height setting takes effect; otherwise, the text line height adapts to the font size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(lineHeight: LengthMetrics);

  /**
   * A constructor used to create the text line height and multiple.
   *
   * > **NOTE**
   * >
   * > - When **lineHeightMultiple** is set together with **lineHeight** or [LineSpacingStyle]{@link LineSpacingStyle},
   * > only **lineHeightMultiple** takes effect, and the line height is the product of the maximum font height of the
   * > line and the multiple.
   * >
   * > - When **lineHeightMultiple** is less than 0 or **undefined**, it does not take effect, and **lineHeight** and
   * > [LineSpacingStyle]{@link LineSpacingStyle} are used to set the line height and line spacing.
   * >
   * > - When **lineHeightMultiple** is equal to 0, it is equivalent to setting it to 1.
   *
   * @param { LengthMetrics } lineHeight - Text line height setting. When the value of **LengthMetrics** is greater than
   *     0, the text line height setting takes effect; otherwise, the text line height adapts to the font size.
   * @param { number } [lineHeightMultiple] - Multiple of the text line height.
   *     <br> decimals supported.
   *     <br>The value must be greater than or equal to 0.
   *     <br>**NOTE**
   *     <br>When set together with **lineHeight** or [LineSpacingStyle]{@link LineSpacingStyle}, only
   *     **lineHeightMultiple** takes effect, and the line height is the product of the maximum font height of the line
   *     and the multiple.
   *     <br>It does not take effect when the value is less than 0 or **undefined**.
   *     <br>When the value is 0, it is equivalent to setting it to 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(lineHeight: LengthMetrics, lineHeightMultiple?: number);

  /**
   * Text line height of the styled string.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly lineHeight: number;

  /**
   * Multiple of the text line height. The actual line height is the product of the maximum font height of the line and
   * the multiple.
   *
   * **Note:** When **lineHeightMultiple** is set together with **lineHeight** or
   * [LineSpacingStyle]{@link LineSpacingStyle}, only **lineHeightMultiple** takes effect. **lineHeightMultiple** does
   * not take effect when it is less than 0 or **undefined**. When **lineHeightMultiple** is 0, it is equivalent to
   * setting it to 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly lineHeightMultiple?: number;
}

/**
 * Describes the text line spacing object. It is suitable for scenarios that require adjusting the spacing between lines
 * within a paragraph, such as improving text reading comfort and adjusting document layout density.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class LineSpacingStyle {

  /**
   * A constructor used to create the text line spacing. If this API is not used to set the value, the default line
   * spacing is **0.0**. When the value of **LengthMetrics** is less than 0, the default value **0.0** is used. When it
   * is set together with **lineHeightMultiple** of [LineHeightStyle]{@link LineHeightStyle} and **lineHeightMultiple**
   * takes effect, this parameter does not take effect.
   *
   * @param { LengthMetrics } lineSpacing - Text line spacing.
   *     <br>Value range: [0, +∞).
   * @param { LineSpacingOptions } [options] - Line spacing configuration options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(lineSpacing: LengthMetrics, options?: LineSpacingOptions);

  /**
   * Text line spacing.
   *
   * Value range: [0, +∞)
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly lineSpacing: number;

  /**
   * Line spacing configuration options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly options?: LineSpacingOptions;
}

/**
 * Describes the hyperlink style.
 *
 * The default color, font size, and font weight are **'#ff0a59f7'**, **'16fp'**, and **'FontWeight.Regular'**,
 * respectively. If the styled string has **TextStyle** set, the **TextStyle** settings take precedence.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare class UrlStyle {

  /**
   * A constructor used to create a URL object.
   *
   * @param { string } url - Hyperlink URL setting. Must be a valid URL address.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  constructor(url: string);

  /**
   * Hyperlink content of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  readonly url: string;
}

/**
 * Defines the style for a styled string.
 *
 * @unionmember { TextStyle } Text style.
 * @unionmember { DecorationStyle } Text decorative line style.
 * @unionmember { BaselineOffsetStyle } Text baseline offset style.
 * @unionmember { LetterSpacingStyle } Text letter spacing style.
 * @unionmember { TextShadowStyle } Text shadow style.
 * @unionmember { GestureStyle } Gesture style.
 * @unionmember { ImageAttachment } Image style.
 * @unionmember { ParagraphStyle } Text paragraph style.
 * @unionmember { LineHeightStyle } Text line height style.
 * @unionmember { UrlStyle } URL style. [since 14]
 * @unionmember { CustomSpan } Custom span style.
 * @unionmember { UserDataSpan } User data span style.
 * @unionmember { BackgroundColorStyle } Text background color style. [since 14]
 * @unionmember { LineSpacingStyle } Text line spacing style.  [since 26.0.0]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type StyledStringValue = TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle |
TextShadowStyle | GestureStyle | ImageAttachment | ParagraphStyle | LineHeightStyle | UrlStyle | CustomSpan |
UserDataSpan | BackgroundColorStyle | LineSpacingStyle;

/**
 * Inherits from the [StyledString]{@link StyledString} class.
 *
 * > **An exception is thrown in the following cases:**
 * >
 * > If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is passed
 * > as **undefined**, an exception is thrown.
 * >
 * > **styledKey** or **styledValue** is set to an invalid value or they do not match.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class MutableStyledString extends StyledString {
  /**
   * Replaces the string in the specified range of this styled string.
   *
   * @param { number } start - Subscript of the target range.
   * @param { number } length - Length of the target range.
   * @param { string } other - New text content to replace.
   *     <br>**NOTE**
   *     <br>The replacement string uses the style of the character at the **start** position.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replaceString(start: number, length: number, other: string): void;

  /**
   * Inserts a string.
   *
   * @param { number } start - Subscript of the position where the string will be inserted.
   * @param { string } other - New text content to insert.
   *     <br>**Note:**
   *     <br>The inserted string uses the style of the character at position **start-1**. If no style is set for the
   *     character at position **start-1**, the style of the character at position **start** is used.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertString(start: number, other: string): void;

  /**
   * Removes the string in the specified range of this styled string.
   *
   * This API equally works when the styled string contains an image or [CustomSpan]{@link CustomSpan}.
   *
   * @param { number } start - Subscript of the target range.
   * @param { number } length - Length of the target range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeString(start: number, length: number): void;

  /**
   * Replaces the style in the specified range of this styled string.
   *
   * @param { SpanStyle } spanStyle - Style object.
   *     <br>**NOTE**
   *     <br>By default, the original style is cleared and replaced with the new style.
   *     <br>When the **styledKey** of **SpanStyle** is **IMAGE** or **CUSTOM_SPAN**, the style takes effect only when
   *     the content at the start position is currently an image or **CustomSpan** with a length of 1; otherwise, it has
   *     no effect.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replaceStyle(spanStyle: SpanStyle): void;

  /**
   * Sets a new style for the specified range of this styled string.
   *
   * @param { SpanStyle } spanStyle - Style object.
   *     <br>By default, the original style is not cleared, and the new style is overlaid.
   *     <br>If the **StyledStringValue** types are the same, the new style overrides the old style.
   *     <br>When the **styledKey** of **SpanStyle** is **IMAGE** or **CUSTOM_SPAN**, the style takes effect only when
   *     the position of start is currently an image or **CustomSpan** and the length is 1; otherwise, it has no effect.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyle(spanStyle: SpanStyle): void;

  /**
   * Removes the style for the specified range of this styled string.
   *
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link ./text} component
   * is used. If the value is not set, the default value is used.
   *
   * This API equally works when the styled string contains an image.
   *
   * @param { number } start - Subscript that corresponds to the start position of the target range.
   * @param { number } length - Length of the target range.
   * @param { StyledStringKey } styledKey - Styled key.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeStyle(start: number, length: number, styledKey: StyledStringKey): void;

  /**
   * Removes all styles for the specified range of this styled string.
   *
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link ./text} component
   * is used. If the value is not set, the default value is used.
   *
   * This API equally works when the styled string contains an image.
   *
   * @param { number } start - Subscript that corresponds to the start position of the target range.
   * @param { number } length - Length of the target range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeStyles(start: number, length: number): void;

  /**
   * Removes all styles of this styled string.
   *
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link ./text} component
   * is used. If the value is not set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  clearStyles(): void;

  /**
   * Replaces the styled string in the specified range.
   *
   * @param { number } start - Subscript that corresponds to the start position of the target range.
   * @param { number } length - Length of the target range.
   * @param { StyledString } other - New styled string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replaceStyledString(start: number, length: number, other: StyledString): void;

  /**
   * Inserts a new styled string at the specified position.
   *
   * @param { number } start - Subscript of the position to insert the styled string.
   * @param { StyledString } other - New styled string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertStyledString(start: number, other: StyledString): void;

  /**
   * Appends a styled string.
   *
   * @param { StyledString } other - New styled string.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  appendStyledString(other: StyledString): void;
}

/**
 * Sets the style for a range styled string.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum StyledStringKey {
  /**
   * Font style key. Key of [TextStyle]{@link TextStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FONT = 0,

  /**
   * Text decoration line style key. Key of [DecorationStyle]{@link DecorationStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DECORATION = 1,

  /**
   * Text baseline offset style key. Key of [BaselineOffsetStyle]{@link BaselineOffsetStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BASELINE_OFFSET = 2,

  /**
   * Text letter spacing style key. Key of [LetterSpacingStyle]{@link LetterSpacingStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LETTER_SPACING = 3,

  /**
   * Text shadow style key. Key of [TextShadowStyle]{@link TextShadowStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TEXT_SHADOW = 4,

  /**
   * Text line height style key. Key of [LineHeightStyle]{@link LineHeightStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LINE_HEIGHT = 5,

  /**
   * Text background color style key. Key of [BackgroundColorStyle]{@link BackgroundColorStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BACKGROUND_COLOR = 6,

  /**
   * Hyperlink style key. Key of [UrlStyle]{@link UrlStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  URL = 7,

  /**
   * Text line spacing style key. Key of [LineSpacingStyle]{@link LineSpacingStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LINE_SPACING = 8,

  /**
   * Event gesture key. Key of [GestureStyle]{@link GestureStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  GESTURE = 100,

  /**
   * Paragraph style key. Key of [ParagraphStyle]{@link ParagraphStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PARAGRAPH_STYLE = 200,

  /**
   * Image key. Key of [ImageAttachment]{@link ImageAttachment}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IMAGE = 300,

  /**
   * Custom drawing span key. Key of [CustomSpan]{@link CustomSpan}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CUSTOM_SPAN = 400,

  /**
   * UserDataSpan key. Key of [UserDataSpan]{@link UserDataSpan}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  USER_DATA = 500
}

/**
 * Describes the image attachment.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ImageAttachment {

  /**
   * A constructor used to create an image object.
   *
   * @param { ImageAttachmentInterface } value - Image attachment options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: ImageAttachmentInterface);

  /**
   * A constructor used to create an image object. Compared to the constructor with a **value** type parameter, this
   * constructor with an **attachment** type parameter supports images of **undefined** and
   * [ResourceStr]{@link ResourceStr} types.
   *
   * @param { Optional<AttachmentType> } attachment - Image attachment, which can be of type PixelMap or
   *     [ResourceStr]{@link ResourceStr}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  constructor(attachment: Optional<AttachmentType>);

  /**
   * Image data source of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly value: PixelMap;

  /**
   * Image size of the styled string.
   *
   * The unit of the returned number value is `px`.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly size?: SizeOptions;

  /**
   * Image size of the styled string.
   * The unit of the returned number value is `vp`.
   * If the ImageAttachment size is set to a negative value or undefined, undefined is returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  readonly sizeInVp?: SizeOptions;

  /**
   * Image alignment mode of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly verticalAlign?: ImageSpanAlignment;

  /**
   * Image scale type of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly objectFit?: ImageFit;

  /**
   * Image layout of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly layoutStyle?: ImageAttachmentLayoutStyle;

  /**
   * Image color filter of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  readonly colorFilter?: ColorFilterType;

  /**
   * Whether to enable
   * [enhanced SVG tag parsing capabilities](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).
   *
   * **true**: Enable enhanced SVG tag parsing. **false**: Use original SVG tag parsing.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  readonly supportSvg2?: boolean;

  /**
   * Resizable image options of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamiconly
   */
  readonly resizable?: ResizableOptions;
}

/**
 * Defines the settings for images of the ResourceStr type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface ResourceImageAttachmentOptions {
  /**
   * Image data source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  resourceValue: Optional<ResourceStr>;

  /**
   * Image size. Percentage values are not supported.
   *
   * The default value of **size** depends on the value of **objectFit**. Different **objectFit** values correspond to
   * different default size values.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  size?: SizeOptions;

  /**
   * Alignment of the image relative to the text. For details about the enums and their descriptions, see
   * **ImageSpanAlignment**.
   *
   * Default value: **ImageSpanAlignment.BOTTOM**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * Scaling type of the image. The current enum type does not support **ImageFit.MATRIX**. For details about the enums
   * and their descriptions, see **ImageFit**.
   *
   * Default value: **ImageFit.Cover**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  objectFit?: ImageFit;

  /**
   * Image layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  layoutStyle?: ImageAttachmentLayoutStyle;

  /**
   * Color filter effect of the image in the styled string. If this parameter is not passed, no color filter is applied
   * and the image is displayed in its original color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  colorFilter?: ColorFilterType;

  /**
   * Whether to load the image synchronously. By default, the image is loaded asynchronously. During synchronous
   * loading, the UI thread is blocked and no placeholder image is displayed.
   *
   * **true**: synchronous loading; **false**: asynchronous loading.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  syncLoad?: boolean;

  /**
   * Whether to enable
   * [enhanced SVG tag parsing capabilities](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).
   *
   * **true**: Enable enhanced SVG tag parsing. **false**: Use original SVG tag parsing.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  supportSvg2?: boolean;

  /**
   * Resizable image options of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamiconly
   */
  resizable?: ResizableOptions;
}

/**
 * Defines the ImageAttachmentInterface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAttachmentInterface {
  /**
   * Image data source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: PixelMap;

  /**
   * Image size. Percentage values are not supported.
   *
   * The default value of size is related to the value of **objectFit**. Different **objectFit** values correspond to
   * different default values of size. For example, when **objectFit** is **Cover**, the image height is the component
   * height minus the top and bottom padding of the component, and the image width is the component width minus the left
   * and right padding of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeOptions;

  /**
   * Alignment of the image relative to the text.
   *
   * Default value: **ImageSpanAlignment.BOTTOM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * Sets the scaling type of the image. The current enum type does not support **ImageFit.MATRIX**. For details about
   * the enums, see **ImageFit**.
   *
   * Default value: **ImageFit.Cover**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  objectFit?: ImageFit;

  /**
   * Image layout. If this parameter is not passed, the default layout is used (the margin, padding, and corner radius
   * are all 0).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutStyle?: ImageAttachmentLayoutStyle;

  /**
   * Color filter effect of the image in the styled string. If this parameter is not passed, no color filter is applied
   * and the image is displayed in its original color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  colorFilter?: ColorFilterType;

  /**
   * Resizable image options of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamiconly
   */
  resizable?: ResizableOptions;
}

/**
 * Defines the image attachment type, which is used to set images of PixelMap or [ResourceStr]{@link ResourceStr} type
 * for styled strings.
 *
 * @unionmember { ImageAttachmentInterface } Settings for images of the PixelMap type.
 * @unionmember { ResourceImageAttachmentOptions } Settings for images of the ResourceStr type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type AttachmentType = ImageAttachmentInterface | ResourceImageAttachmentOptions;

/**
 * Defines the type for image color filter settings.
 *
 * @unionmember { ColorFilter } Color filter settings of the ColorFilter type.
 * @unionmember { DrawingColorFilter } Color filter settings of the DrawingColorFilter type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type ColorFilterType = ColorFilter | DrawingColorFilter;

/**
 * Defines the ImageAttachment Layout Style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAttachmentLayoutStyle {
  /**
   * Image margin.
   *
   * Default value: **0**
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  margin?: LengthMetrics | Margin;

  /**
   * Image padding.
   *
   * Default value: **0**
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  padding?: LengthMetrics | Padding;

  /**
   * Rounded corner.
   *
   * Default value: **0**
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses;
}

/**
 * Defines the CustomSpanMetrics interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CustomSpanMetrics {
  /**
   * Width of the custom drawing span.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;

  /**
   * Height of the custom drawing span.
   *
   * Default value: if not passed, the **fontSize** value of the **Text** component is used as the height of
   * **CustomSpan**.
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number;
}

/**
 * Defines the CustomSpanDrawInfo interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CustomSpanDrawInfo {
  /**
   * Offset of the custom drawing span relative to the mounted component.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Top margin of the custom drawing span relative to the **Text** component.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineTop: number;

  /**
   * Bottom margin of the custom drawing span relative to the **Text** component.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBottom: number;

  /**
   * Baseline offset of the line where the custom drawing span is located.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  baseline: number;
}

/**
 * Defines the CustomSpanMeasureInfo interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CustomSpanMeasureInfo {
  /**
   * Font size of the text.
   *
   * Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize: number;
  /**
   * Maximum width constraint of the content area of the parent component where the custom drawing span is located.
   *
   * Default value: uses its own width.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxWidth?: number;

  /**
   * Width layout policy of the parent component where the custom drawing span is located.
   *
   * **NOTE**
   *
   * When the value is **null** or **undefined**, it indicates that the parent component has no width layout policy set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  layoutPolicy?: LayoutPolicy;
}

/**
 * Provides the custom drawing information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface LeadingMarginSpanDrawInfo {
  /**
   * Horizontal offset of the current line relative to the component. When **direction** is RTL, the distance between
   * the right side of the current line and the right edge of the component is returned.
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  x: number;

  /**
   * Distance between the top of the line and the top edge of the component.
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  top: number;

  /**
   * Distance between the bottom of the line and the top edge of the component.
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  bottom: number;

  /**
   * Distance between the baseline of the current line and the top edge of the component.
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  baseline: number;

  /**
   * Direction of the text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  direction: TextDirection;

  /**
   * Start index of the current line.
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  start: number;

  /**
   * End index of the current line.
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  end: number;

  /**
   * Whether the current line is the first line of the paragraph.
   *
   * **true**: first line; **false**: not the first line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  first: boolean;
}

/**
 * Defines a custom drawing span that provides only a base class, with the specific implementation defined by
 * developers. It is suitable for scenarios that require embedding custom drawing content in the text flow, such as
 * drawing custom icons, progress bars, and special decoration effects in text.
 *
 * The drag preview of a custom span is blank.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare abstract class CustomSpan {
  /**
   * Called to obtain the size of a custom span.
   *
   * @param { CustomSpanMeasureInfo } measureInfo - Measurement information of the custom-drawn span.
   * @returns { CustomSpanMetrics } Size information of the custom drawing span.
   *     <br>**Note:**
   *     <br>The final height of **CustomSpan** is determined by the line height of the current **Text** component. If
   *     **height** is not set, the **fontSize** value of the **Text** component is used as the height of **CustomSpan**
   *     by default. If **height** is greater than the height of other child components in the current line, **height**
   *     is used as the line height of the **Text** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  abstract onMeasure(measureInfo: CustomSpanMeasureInfo) : CustomSpanMetrics;

  /**
   * Called to draw a custom span.
   *
   * @param { DrawContext } context - Graphics drawing context.
   *     <br>**NOTE**
   *     <br>The canvas obtained through the canvas method of **DrawContext** is the canvas of the **Text** component,
   *     and the drawing will not exceed the range of the **Text** component.
   * @param { CustomSpanDrawInfo } drawInfo - Drawing information of the custom span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  abstract onDraw(context: DrawContext,  drawInfo: CustomSpanDrawInfo): void;

  /**
   * Manually triggers a refresh of the **Text** component that uses this **CustomSpan**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  invalidate(): void;
}

/**
 * Implements a **UserDataSpan** object for storing and obtaining user data. Only the base class is provided. You need
 * to define the specific implementation.
 *
 * The extended user data does not affect the display effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare abstract class UserDataSpan {
}

/**
 * Defines the custom indentation of a text paragraph, which provides only a base class, with the specific
 * implementation defined by developers. It is suitable for scenarios that require drawing custom markers, icons, and
 * other content at the beginning of the first line or each line of a paragraph, such as custom symbols before list
 * items and decoration patterns at the beginning of a paragraph.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare abstract class LeadingMarginSpan {
  /**
   * Draws a custom pattern. This API is triggered once for each line of text in a paragraph.
   *
   * @param { DrawContext } context - Graphics drawing context.
   *     <br>The canvas method of **DrawContext** obtains the canvas of the component, and drawing does not exceed the
   *     component bounds.
   * @param { LeadingMarginSpanDrawInfo } drawInfo - Custom drawing information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  abstract onDraw(context: DrawContext, drawInfo: LeadingMarginSpanDrawInfo): void;

  /**
   * Returns the indentation distance for a text paragraph.
   *
   * @returns { LengthMetrics } Indentation of the text paragraph. Percentage is not supported.
   *     <br>Default value: **0**
   *     <br>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  abstract getLeadingMargin(): LengthMetrics;
}