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
   * @param { string | ImageAttachment | CustomSpan } value - Text of the styled string.<br>**NOTE**<br>If this
   *     parameter is of the ImageAttachment or CustomSpan type, the **styles** parameter has no effect.<br>To set
   *     **styles**, use methods such as [setStyle]{@link MutableStyledString#setStyle}.
   * @param { Array<StyleOptions> } [styles] - Initialization options of the styled string.<br>**NOTE**<br>If **start**
   *     is set to an invalid value, it uses the default value **0**.<br>If the **length** value is invalid, **length**
   *     will default to the actual length of the styled string starting from the start position.<br>If
   *     **StyledStringKey** does not match **StyledStringValue**, **styles** has no effect.
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
   * Both **ImageAttachment** and **CustomSpan** in the styled string are counted as length 1.
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
   * @returns { string } Text of the styled string.
   *     <br>**NOTE**
   *     <br>If the styled string contains an image or [CustomSpan]{@link CustomSpan} elements, they are represented as space
   *     characters in the returned result.
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
   * @param { StyledStringKey } [styledKey] - Style key of the styled string.
   * @returns { Array<SpanStyle> } Array of styles.
   *     <br>**NOTE**
   *     <br>If no style is set for the specified range in the styled string, an empty array is returned.
   *     <br>If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is
   *     passed as **undefined**, an exception is thrown.
   *     <br>If **styledKey** is set to an invalid value or **undefined**, an exception is thrown.
   *     <br>If **styledKey** is a **CustomSpan** object, the style returned is the one passed to create the object.
   *     That is, modifying the style object also affects the actual display effect.
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
   * Checks whether this styled string the same as another styled string.
   *
   * @param { StyledString } other - **StyledString** object to compare.
   * @returns { boolean } Whether two styled strings are equal.
   *     <br>**true** if the two styled strings are equal; **false** otherwise.
   *     <br>**NOTE**
   *     <br>The two styled strings are the same if they have the same text and style.
   *     <br>[GestureStyle]{@link GestureStyle} in styled strings is not compared. This means that, if two styled strings are
   *     the same except for the event configured, they are treated as the same.
   *     <br>In comparing [CustomSpan]{@link CustomSpan} or [LeadingMarginSpan]{@link LeadingMarginSpan} objects, addresses
   *     are compared. The objects that have the same address are the same.
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
   * @param { number } start - Subscript that corresponds to the start position of the styled substring.
   * @param { number } [length] - Length of the styled substring.
   * @returns { StyledString } Styled substring.
   *     <br>**NOTE**
   *     <br>If the value of **start** is valid, the difference between the length of the styled string and the value of
   *     **start** is used as the default value of **length**.
   *     <br>If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is
   *     passed as **undefined**, an exception is thrown.
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
   * Converts an HTML string into a styled string. Currently, the following HTML tags are supported for conversion: \<p>
   * , \<span>, \<img>, \
   *
   * , \<strong>, \<b>, \<a>, \<i>, \<em>, \<s>, \<u>, \<del>, \<sup>, \<sub>. The **style** attribute within tags can
   * be converted to the corresponding style in the styled string.
   *
   * For details about how to use this API, see
   * [Example 12: Implementing Conversion Using fromHtml and toHtml]
   * (docroot://reference/apis-arkui/arkui-ts/
   * ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml).
   *
   * | Tag Name| Description                  |
   * | ------------- | ---------------------------- |
   * | \<p\>       | Paragraph tag, which separates text into paragraphs.        |
   * | \<span\>    | Inline text supporting style configuration.    |
   * | \<img\>     | Image tag, used to insert an image.                  |
   * | \<strong\>  | Bold text tag.                  |
   * | &lt;br&gt;<sup>20+</sup>      | Line break tag.                      |
   * | \<b\><sup>20+</sup>       | Bold text tag.                  |
   * | \<a\><sup>20+</sup>       | Hyperlink tag.                    |
   * | \<i\><sup>20+</sup>       | Italic text tag.                  |
   * | \<em\><sup>20+</sup>      | Italic text tag.                  |
   * | \<s\><sup>20+</sup>       | Strikethrough tag, which adds a line through the text.          |
   * | \<u\><sup>20+</sup>       | Underline tag, which adds a decorative underline to the text.                    |
   * | \<del\><sup>20+</sup>     | Strikethrough tag, which adds a line through the text.          |
   * | \<sup\><sup>20+</sup>     | Superscript tag.                  |
   * | \<sub\><sup>20+</sup>     | Subscript tag.                  |
   *
   * @param { string } html - HTML-formatted string.
   * @returns { Promise<StyledString> } Styled string.
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
   * Converts a styled string into an HTML-formatted string. The supported styled string keys for conversion, as
   * detailed in [StyledStringKey]{@link StyledStringKey}, include: **StyledStringKey.FONT**,
   * **StyledStringKey.DECORATION**, **StyledStringKey.LETTER_SPACING**, **StyledStringKey.TEXT_SHADOW**,
   * **StyledStringKey.LINE_HEIGHT**, and **StyledStringKey.IMAGE**.
   *
   * For details about how to use this API, see
   * [Example 12: Implementing Conversion Using fromHtml and toHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml).
   *
   * @param { StyledString } styledString - Styled string.
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
   * Start position of the styled string style.
   *
   * If the value is less than 0 or exceeds the string length, it is treated as **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: number;

  /**
   * Length of the styled string style.
   *
   * If the value is less than 0 or exceeds the difference between the string length and the value of **start**, it is
   * treated as the difference between the string length and the value of **start**.
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
   * Style object.
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
   * If the value is less than 0 or exceeds the difference between the string length and the value of **start**, it is
   * treated as the difference between the string length and the value of **start**.
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
   * Style object.
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
   * @param { TextStyleInterface } [value] - Font style options.
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
   * Font family of the styled string.
   *
   * Returns **undefined** by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontFamily?: string;

  /**
   * Font size of the styled string.
   *
   * Unit: [vp]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontSize?: number;

  /**
   * Font weight of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontWeight?: number;
  

  /**
   * Font style of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly fontStyle?: FontStyle;

  /**
   * Superscript or subscript for the styled string.
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
   * Default value: **0**, in [vp]{@link common}.
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
   * Default value: same as the text color.
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
   *
   * Default value: **undefined**, indicating that fontConfigs is not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  readonly fontConfigs?: FontConfigs;

  /**
   * Array of variable font attributes.
   *
   * Default value: **undefined**, indicating that variable font attributes are not set.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly fontVariations?: Array<FontVariation>;

  /**
   * Text stroke join style of the styled string.
   *
   * Default value: **StrokeJoinStyle.MITER_JOIN**.
   *
   * **Since**: 26.0.0.
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
   * Default value: theme color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Font family.
   *
   * Default value: theme font.
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
   * Default value: 16 fp.
   *
   * If **unit** of **LengthMetrics** is percent, the setting does not take effect, and 16 fp is used instead.
   *
   * Unit: [fp]{@link common}
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
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier
   * font weight. The default value is **400**. For the string type, only strings that represent a number, for example,
   * **400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**,
   * **regular**, and **medium**.
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
   * Default value: **FontStyle.Normal**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * Text stroke width. If **unit** of **LengthMetrics** is percent, the setting does not take effect, and 0 is used
   * instead.
   *
   * If the value is less than 0, the text is solid. If the value is greater than 0, the text is hollow.
   *
   * Default value: **0**.
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
   * Default value: text color. If invalid values are provided, the text color is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * Superscript or subscript for the text.
   *
   * Default value: **SuperscriptStyle.NORMAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  superscript?: SuperscriptStyle;

  /**
   * Font configuration. The default value is inherited from [FontConfigs]{@link FontConfigs}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  fontConfigs?: FontConfigs;

  /**
   * Variable font attributes.
   *
   * Default value: **undefined**, indicating that variable font attributes are not set.
   *
   * The priority of **fontVariations** is higher than that of **fontWeight**.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations?: Array<FontVariation>;

  /**
   * Text stroke join style.
   *
   * Default value: **StrokeJoinStyle.MITER_JOIN**.
   *
   * **Since**: 26.0.0.
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
   * Default value: **undefined**. **true**: Enable the display of multiple decoration lines. **false** or
   * **undefined**: Disable the display of multiple decoration lines.
   *
   * To display all decoration lines, this option must be enabled. The overlapping area of multiple decoration lines
   * will show a combined effect, with the style, color, and thickness consistent with the last decoration line.
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
   * A constructor used to create a text decorative line style.
   *
   * @param { DecorationStyleInterface } value - Text decorative line options.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: DecorationStyleInterface);

  /**
   * Constructor of a text decoration line style, including additional configuration options.
   *
   * @param { DecorationStyleInterface } value - Text decorative line options.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID, <br> thicknessScale: 1.0
   *     <br>}
   * @param { DecorationOptions } [options] - Additional configuration options for the text decoration line.<br>Default
   *     value:<br>{<br> enableMultiType: undefined<br>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(value: DecorationStyleInterface, options?: DecorationOptions);

  /**
   * Type of the text decorative line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly type: TextDecorationType;

  /**
   * Color of the text decorative line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly color?: ResourceColor;

  /**
   * Style of the text decorative line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly style?: TextDecorationStyle;

  /**
   * Scale factor for the thickness of the text decoration line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly thicknessScale?: number;

  /**
   * Additional configuration options for the text decoration line style.
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
   * Type of the text decorative line.
   *
   * Default value: **TextDecorationType.None**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Color of the text decorative line.
   *
   * Default value: **Color.Black**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Style of the text decorative line.
   *
   * Default value: **TextDecorationStyle.SOLID**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * Scale factor for the decoration line thickness.
   *
   * Default value: **1.0**.
   *
   * Value range: [0, +∞).
   *
   * Note: Negative values are treated as the default value.
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
 * Describes the text baseline offset style.
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
   * @param { LengthMetrics } value - Text baseline offset options. This API does not work if **unit** of
   *     **LengthMetrics** is percent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: LengthMetrics);

  /**
   * Text baseline offset.
   *
   * Unit: [vp]{@link common}
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
 * Describes the letter spacing style.
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
   * @param { LengthMetrics } value - Letter spacing options. This API does not work if **unit** of **LengthMetrics** is
   *     percent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: LengthMetrics);

  /**
   * Letter spacing.
   *
   * Unit: [vp]{@link common}
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
   * A constructor used to create a text background style.
   *
   * @param { TextBackgroundStyle } textBackgroundStyle - Options of the text background color.<br>Default value:<br>{<
   *     br>  color: Color.Transparent,<br>  radius: 0<br>}
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
   * {
   *
   * color: Color.Transparent,
   *
   * radius: 0
   *
   * }
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
   * @param { GestureStyleInterface } [value] - Event options.
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
   * Callback for click events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClick?: Callback<ClickEvent>;

  /**
   * Callback for long press events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onLongPress?: Callback<GestureEvent>;

  /**
   * Callback for touch events.
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
 * Before API version 26.0.0, if the first placeholder in a paragraph of the styled string is a
 * [CustomSpan]{@link CustomSpan} or [ImageAttachment]{@link ImageAttachment}, the paragraph style set for that
 * paragraph does not take effect. From API version 26.0.0, the paragraph style takes effect.
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
   * @param { ParagraphStyleInterface } [value] - Paragraph style options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value?: ParagraphStyleInterface);

  /**
   * Horizontal alignment mode of the text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly textAlign?: TextAlign;

  /**
   * Vertical alignment mode of the text paragraph.
   *
   * The effect of this attribute is noticeable only when the same font size is used in a paragraph and
   * [lineHeight]{@link TextAttribute#lineHeight} is set, or when different font sizes are used in a paragraph and the
   * font sizes are mixed. The **SuperscriptStyle** in [TextStyle]{@link TextStyle} takes effect only when the value of
   * [TextVerticalAlign]{@link TextVerticalAlign} is set to **TextVerticalAlign.BASELINE**. In other vertical alignment
   * modes, the superscript and subscript texts are displayed in the same way as the normal text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  readonly textVerticalAlign?: TextVerticalAlign;

  /**
   * First line indent of the text paragraph.
   *
   * Unit: VP.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly textIndent?: number;

  /**
   * Maximum number of lines in the text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly maxLines?: number;

  /**
   * Display mode when the text is too long in the text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly overflow?: TextOverflow;

  /**
   * Word break rule of the text paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly wordBreak?: WordBreak;

  /**
   * Indent of the text paragraph.
   *
   * If the return value is of the number type, the unit is vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly leadingMargin?: number | LeadingMarginPlaceholder;

  /**
   * Paragraph spacing of the styled string text.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  readonly paragraphSpacing?: number;

  /**
   * Custom indentation information for text paragraphs in the styled string.
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
   * **Since**: 26.0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly shaderStyle?: ShaderStyle;

  /**
   * Get the tail indentation of the StyledString.
   * The unit is vp.
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
   * Default value: **TextAlign.Start**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textAlign?: TextAlign;

  /**
   * Vertical alignment mode of text paragraphs.
   *
   * Default value: **TextVerticalAlign.BASELINE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textVerticalAlign?: TextVerticalAlign;

  /**
   * First line indent of the text paragraph. The value cannot be in percentage.
   *
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent?: LengthMetrics;

  /**
   * Maximum number of lines in the text paragraph. By default, the number of lines is not limited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxLines?: number;

  /**
   * Display mode when the text is too long in the text paragraph.
   *
   * Default value: **TextOverflow.None**.
   *
   * This parameter must be used with **maxLines** for the settings to take effect. **TextOverflow.MARQUEE** is not
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
   * Word break rule of the text paragraph.
   *
   * Default value: **WordBreak.NORMAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak?: WordBreak;

  /**
   * Indent of the text paragraph. The value cannot be in percentage.
   *
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  leadingMargin?: LengthMetrics | LeadingMarginPlaceholder;

  /**
   * Paragraph spacing of the styled string text.
   *
   * Default value: **0**. The value cannot be in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  paragraphSpacing?: LengthMetrics;

  /**
   * Custom indentation information for text paragraphs. The value cannot be in percentage.
   *
   * Default value: **0**.
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
   * This API does not take effect when used together with [TextStyleInterface]{@link TextStyleInterface}
   * **strokeWidth**. **shaderStyle** has a higher priority than [TextStyleInterface]{@link TextStyleInterface}
   * **fontColor**.
   *
   * **Since**: 26.0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle?: ShaderStyle;

  /**
   * Specify the tail indentation for each line in a paragraph.
   *
   * <p><strong>NOTE</strong>:
   * <br>When a single LengthMetrics value is provided, all lines share the same tail indent.
   * <br>When an array is provided, the i-th element specifies the tail indent for the i-th line.
   * If the number of text lines exceeds the array length, the last element in the array is used
   * for the remaining lines.
   * <br>Negative values are treated as 0.
   * </p>
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
   * @param { LengthMetrics } lineHeight - Text line height options. If **value** of **LengthMetrics** is less than or
   *     equal to 0, the text line height is unlimited and automatically adapts to the font size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(lineHeight: LengthMetrics);

  /**
   * A constructor used to create a text line height and multiple.
   *
   * > **NOTE**
   * >
   * > - When **lineHeightMultiple** is set together with **lineHeight** or [LineSpacingStyle]{@link LineSpacingStyle},
   * > only **lineHeightMultiple** takes effect. The line height is the product of the highest font height in the line
   * > and the multiplier.
   * >
   * > - When **lineHeightMultiple** is less than 0 or **undefined**, it does not take effect. Use **lineHeight** and
   * > [LineSpacingStyle]{@link LineSpacingStyle} to set the line height and line spacing.
   * >
   * > - When **lineHeightMultiple** is set to 0, it is equivalent to setting it to 1.
   *
   * **Since**: 26.0.0
   *
   * @param { LengthMetrics } lineHeight - Text line height options. If **value** of **LengthMetrics** is less than or
   *     equal to 0, the text line height is unlimited and automatically adapts to the font size.
   * @param { number } [lineHeightMultiple] - Multiplier for the text line height.<br>Value range:
   *     [0, +∞). Decimals are supported.
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
   * Unit: [vp]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly lineHeight: number;

  /**
   * Multiplier for the text line height. The effective line height is the product of the highest font height in the
   * line and the multiplier.
   *
   * **Since**: 26.0.0
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
 * Describes the text line spacing style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class LineSpacingStyle {

  /**
   * A constructor used to create a text line spacing style.
   *
   * **Since**: 26.0.0
   *
   * @param { LengthMetrics } lineSpacing - Text line spacing.<br>Default value: **0.0**<br>Value range:
   *     [0, +∞) <br>**NOTE** If **value** of **LengthMetrics** is less than 0, the default value **0.0** is used.
   * @param { LineSpacingOptions } [options] - Line spacing options.<br>Default value: **{ onlyBetweenLines: false }**
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
   * Unit: [vp]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly lineSpacing: number;

  /**
   * Line spacing options.
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
   * @param { string } url - Options of the hyperlink.
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
 * @unionmember { LineSpacingStyle } Text line spacing style. **Since**: 26.0.0 [since 26.0.0]
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
   * @param { string } other - String to replace the content in the target range.<br>**NOTE**<br>The string specified
   *     here uses the style of the character at the **start** position.
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
   * @param { string } other - String to insert.<br>**NOTE**<br>The string specified here uses the style of the
   *     character at the **start** - 1 position or, if that character does not have style set, the style of the
   *     character at the **start** position.
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
   * @param { SpanStyle } spanStyle - Style object.<br>**NOTE**<br>By default, the original style is removed and
   *     replaced with the new style.<br>If **styledKey** of **SpanStyle** is **IMAGE** or **CUSTOM_SPAN**, this API
   *     takes effect only when an image or custom span with the length of 1 is at the **start** position.
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
   * @param { SpanStyle } spanStyle - Style object.<br>By default, the new style is applied without removing the
   *     original style. If the **StyledStringValue** types are the same, the new style overwrites the old one.<br>If
   *     **styledKey** of **SpanStyle** is **IMAGE** or **CUSTOM_SPAN**, this API takes effect only when an image or
   *     custom span with the length of 1 is at the **start** position.
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
  setStyle(spanStyle: SpanStyle): void;

  /**
   * Removes the style for the specified range of this styled string.
   *
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link text} component
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
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link text} component
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
   * After a style is removed, the value set for the corresponding style attribute in the [Text]{@link text} component
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
   * Font style key, applicable to [TextStyle]{@link TextStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FONT = 0,

  /**
   * Text decorative line style key, applicable to [DecorationStyle]{@link DecorationStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DECORATION = 1,

  /**
   * Text baseline offset style key, applicable to [BaselineOffsetStyle]{@link BaselineOffsetStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BASELINE_OFFSET = 2,

  /**
   * Text letter spacing style key, applicable to [LetterSpacingStyle]{@link LetterSpacingStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LETTER_SPACING = 3,

  /**
   * Text shadow style key, applicable to [TextShadowStyle]{@link TextShadowStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TEXT_SHADOW = 4,

  /**
   * Text line height style key, applicable to [LineHeightStyle]{@link LineHeightStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LINE_HEIGHT = 5,

  /**
   * Text background color style key, applicable to [BackgroundColorStyle]{@link BackgroundColorStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BACKGROUND_COLOR = 6,

  /**
   * Hyperlink style key, applicable to [UrlStyle]{@link UrlStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  URL = 7,

  /**
   * Text line spacing style key, applicable to [LineSpacingStyle]{@link LineSpacingStyle}.
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LINE_SPACING = 8,

  /**
   * Gesture key, applicable to [GestureStyle]{@link GestureStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  GESTURE = 100,

  /**
   * Paragraph style key, applicable to [ParagraphStyle]{@link ParagraphStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PARAGRAPH_STYLE = 200,

  /**
   * Image key, applicable to [ImageAttachment]{@link ImageAttachment}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IMAGE = 300,

  /**
   * Custom span key, applicable to [CustomSpan]{@link CustomSpan}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CUSTOM_SPAN = 400,

  /**
   * User data span key, applicable to [UserDataSpan]{@link UserDataSpan}.
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
   * Number-type values use px as the unit.
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
   *
   * Number-type values use vp as the unit.
   *
   * If **ImageAttachment** is set to a negative value or **undefined**, **undefined** is returned.
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
   * Image size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  size?: SizeOptions;

  /**
   * Alignment mode of the image with the text.
   *
   * Default value: **ImageSpanAlignment.BOTTOM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * Image scaling type. The **ImageFit.MATRIX** enum value is not supported.
   *
   * Default value: **ImageFit.Cover**
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
   * Image color filter of the styled string.
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
   * loading, the UI thread is blocked and the placeholder image is not displayed.
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
   * Image size, which does not support percentage values.
   *
   * The default value of **size** depends on the value of **objectFit**. For example, if the value of **objectFit** is
   * **Cover**, the image height is the component height minus the top and bottom paddings, and the image width is the
   * component width minus the left and right paddings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeOptions;

  /**
   * Alignment mode of the image with the text.
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
   * Image scaling type. The **ImageFit.MATRIX** enum value is not supported.
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
   * Image layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutStyle?: ImageAttachmentLayoutStyle;

  /**
   * Image color filter of the styled string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  colorFilter?: ColorFilterType;
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
   * Default value: **0**.
   *
   * Unit: [vp]{@link common}
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
   * Default value: **0**.
   *
   * Unit: [vp]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  padding?: LengthMetrics | Padding;

  /**
   * Radius of the image border corners.
   *
   * Default value: **0**.
   *
   * Unit: [vp]{@link common}
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
   * Width of the custom span.
   *
   * Unit: [vp]{@link common}
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
   * Height of the custom span.
   *
   * Unit: [vp]{@link common}
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
   * Offset of the custom span relative to the mounted component.
   *
   * Unit: [px]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Top margin of the custom span relative to the **Text** component.
   *
   * Unit: [px]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineTop: number;

  /**
   * Bottom margin of the custom span relative to the **Text** component.
   *
   * Unit: [px]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBottom: number;

  /**
   * Baseline offset of the line where the custom span is located.
   *
   * Unit: [px]{@link common}
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
   * Text font size.
   *
   * Unit: [fp]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize: number;

  /**
   * Maximum width constraint of the custom span within the parent component's content area.
   *
   * Unit: [px]{@link common}
   *
   * **Since**: 26.0.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxWidth?: number;

  /**
   * Width layout policy of the parent component of the custom span.
   *
   * **NOTE**
   *
   * When the value is **null** or **undefined**, the parent component does not have a width layout policy set.
   *
   * **Since**: 26.0.0
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
   * Horizontal offset of the current line relative to the component. For right-to-left (RTL) scripts (direction set to
   * **RTL**), this value represents the distance between the right side of the current line and the component's right
   * edge.
   *
   * Unit: [px]{@link common}
   *
   * The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  x: number;

  /**
   * Distance from the top of the current line to the component's upper edge.
   *
   * Unit: [px]{@link common}
   *
   * The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  top: number;

  /**
   * Distance from the bottom of the current line to the component's upper edge.
   *
   * Unit: [px]{@link common}
   *
   * The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  bottom: number;

  /**
   * Distance from the baseline of the current line to the component's upper edge.
   *
   * Unit: [px]{@link common}
   *
   * The value must be greater than or equal to 0.
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
   *
   * The value must be greater than or equal to 0.
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
   *
   * The value must be greater than or equal to 0.
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
   * **true**: first line; **false**: non-first line.
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
 * Describes the custom span. Only the base class is provided. You need to define the specific implementation.
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
   * @param { CustomSpanMeasureInfo } measureInfo - Font size of the text.
   * @returns { CustomSpanMetrics } Size of the custom span.
   *     <br>**NOTE**
   *     <br>The final height of the custom span is subject to the line height of the **Text** component. If no value is
   *     specified for **height**, the custom span takes the **fontSize** value of the **Text** component as its height.
   *     If the value specified is greater than the height of other child components on the same line, the custom span
   *     takes the line height of the **Text** component as its height.
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
   * @param { DrawContext } context - Drawing context.<br>**NOTE**<br>The **canvas** method of **DrawContext** obtains
   *     the canvas of the **Text** component. As such, the custom span does not extend beyond the area of the **Text**
   *     component.
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
declare abstract class UserDataSpan {}

/**
 * Defines custom indentation for text paragraphs. Only a base class is provided; the specific implementation is left to
 * developers.
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
   * @param { DrawContext } context - Drawing context.<br>The **canvas** method of **DrawContext** obtains the canvas
   *     of the component. As such, the custom span does not extend beyond the area of the component.
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
   * @returns { LengthMetrics } Paragraph indentation distance. The value cannot be in percentage.
   *     <br>Default value: **0**.
   *     <br>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  abstract getLeadingMargin(): LengthMetrics;
}