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
 * Define the background style of span.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextBackgroundStyle {
  /**
   * Text background color. Transparent by default, meaning no background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * Corner radius of the text background. No rounded corners by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: Dimension | BorderRadiuses;
}

/**
 * Defines the base class **BaseSpan**, including the universal attributes of the **Span** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class BaseSpan<T> extends CommonMethod<T> {
  /**
   * Sets the text background style. When used as a child component of [ContainerSpan]{@link ./container_span}, this
   * attribute value can be inherited, and the component's own setting takes precedence. If this API is not used, the
   * default background color is Color.Transparent and the corner radius is 0.
   *
   * @param { TextBackgroundStyle } style - Text background style.
   * @returns { T } Attribute object of the current Span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textBackgroundStyle(style: TextBackgroundStyle): T;

  /**
   * Sets the baseline offset of the Span. This is applicable to scenarios such as superscript and subscript layout and
   * fine-tuning alignment of mixed-font-size text. This attribute coexists with the baselineOffset of the parent
   * component. If this API is not used, the default offset is 0.
   *
   * @param { LengthMetrics } value - Sets the baseline offset of the Span. If this value is set to a percentage, the
   *     default value is used.
   *     <br>A positive value shifts the content upward, and a negative value shifts it downward.
   *     <br>In ImageSpan, when this value is set to a non-zero value,
   *     [verticalAlign]{@link ImageSpanAttribute#verticalAlign} is fixed to ImageSpanAlignment.BASELINE. When this
   *     value is set to 0, to make the baseline alignment policy take effect, you must also set
   *     [verticalAlign]{@link ImageSpanAttribute#verticalAlign} to ImageSpanAlignment.BASELINE.
   * @returns { T } Attribute object of the current Span, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  baselineOffset(value: LengthMetrics): T;
}

/**
 * As a child component of [Text]{@link ./text} and [ContainerSpan]{@link ./container_span}, it is used to display
 * inline text and supports fine-grained settings of the font, color, size, and other styles of the text. It is suitable
 * for scenarios where different styles are mixed in the same line of text, such as text in different font colors, and
 * adding decorative lines or shadow effects.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - Since API version 10, this component supports inheriting the attributes of the parent **Text** component. That
 * > is, if a child component does not set an attribute but the parent component does, the child component inherits the
 * > attribute set by the parent component. The attributes that can be inherited include only: fontColor, fontSize,
 * > fontStyle, fontWeight, decoration, letterSpacing, textCase, fontFamily, and textShadow.
 * >
 * > - It supports the [accessibility attribute]{@link ./common} (
 * > [accessibilityText]{@link CommonMethod#accessibilityText(value: string)}), [component identifier]{@link ./common} (
 * > [id]{@link CommonMethod#id} and [key]{@link CommonMethod#key}), and [color inversion disabling]{@link ./common} (
 * > [allowForceDark]{@link CommonMethod#allowForceDark}) among the [universal attributes]{@link ./common}, but does not
 * > support other universal attributes. To set other universal attributes, use [Text]{@link ./text}, or use
 * > [CustomSpan]{@link CustomSpan} in [styled strings]{@link ./styled_string} to draw them by yourself.
 * >
 * > - [accessibilityText]{@link CommonMethod#accessibilityText(value: string)} takes effect only when the
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)} event is set for **Span**. The configured
 * > text is reflected only in the inline link pop-up recognized by the accessibility service. During direct
 * > announcement, the content of **Span** is still announced, and it is not replaced by the text configured in
 * > accessibilityText.
 * >
 * > - Among the [universal events]{@link ./common}, only the click event
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)} and the hover event
 * > [onHover]{@link CommonMethod#onHover} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SpanInterface {
  /**
   *
   * Defines the constructor of Span.
   *
   * @param { string | Resource } value - Plain text.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: string | Resource): SpanAttribute;
}

/**
 * Inherited from [BaseSpan]{@link BaseSpan}.
 *
 * @extends CommonMethod<SpanAttribute> [since 7 - 10]
 * @extends BaseSpan<SpanAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SpanAttribute extends BaseSpan<SpanAttribute> {
  /**
   * Sets the text style, covering the font size, font width, Font family, and font style.
   *
   * > **NOTE**
   * >
   * > If fontWeight is set too large, the text may be truncated under different fonts.
   *
   * @param { Font } value - Text style, including the font size, font weight, font family, and font style.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font(value: Font): SpanAttribute;

  /**
   * Sets the text style.
   *
   * @param { Font } value - Text style, including the font size, font weight, font family, and font style.
   * @param { FontConfigs } [fontConfigs] - Font configuration, used to customize the font rendering behavior (for
   *     example, configuring variable font attributes). Pass this parameter when advanced font configuration is
   *     required. If it is not passed, the default configuration of [FontConfigs]{@link FontConfigs} is inherited.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  font(value: Font, fontConfigs?: FontConfigs): SpanAttribute;

  /**
   * Sets the font color. If this API is not used, the default font color is '#FF182431' (dark gray), and on Wearable
   * devices, the default is '#C5FFFFFF' (white with an opacity of about 77%).
   *
   * @param { ResourceColor } value - Font color.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): SpanAttribute;

  /**
   * Sets the font size. If this API is not used, the default font size is 16fp, and on Wearable devices, the default is
   * 15fp.
   *
   * @param { number | string | Resource } value - Font size. When fontSize is of the number type, the unit fp is used.
   *     The string type supports the string form of a number type value, which can carry a unit, for example, "10" or "
   *     10fp". Percentage strings are not supported.
   *     <br>Since API version 20, the [Resource]{@link Resource} type is supported.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): SpanAttribute;

  /**
   * Sets the font style. If this API is not used, the default font style is FontStyle.Normal.
   *
   * @param { FontStyle } value - Font style.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): SpanAttribute;

  /**
   * Sets the font weight of the text. If the value is too large, the text may be clipped depending on the font. If this
   * API is not used, the default font weight is FontWeight.Normal (normal weight, corresponding to the value 400).
   *
   * > **NOTE**
   * >
   * > When the [fontVariations attribute]{@link SpanAttribute#fontVariations} is set at the same time, the
   * > fontVariations attribute takes precedence.
   *
   * @param { number | FontWeight | string } value - Font weight of the text.
   *     <br>For the number type, the value ranges from [100, 900], at an interval of 100. A larger value indicates a
   *     heavier font. For the string type, only the string form of the number type value is supported, for example, "40
   *     0", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the respective enum
   *     values in FontWeight. If the value is set too large, the font may be truncated under different fonts. If a
   *     value outside the value range or not meeting the interval requirement is passed in, the default value is used.
   *     <br>Since API version 20, the [Resource]{@link Resource} type is supported. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text.
   *     <br>For the number type, the value ranges from [100, 900], at an interval of 100. A larger value indicates a
   *     heavier font. For the string type, only the string form of the number type value is supported, for example, "40
   *     0", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the respective enum
   *     values in FontWeight. If the value is set too large, the font may be truncated under different fonts. If a
   *     value outside the value range or not meeting the interval requirement is passed in, the default value is used.
   *     <br>Since API version 20, the [Resource]{@link Resource} type is supported. [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): SpanAttribute;

  /**
   * Sets the font weight of the text. If this API is not used, the default font weight is FontWeight.Normal (normal
   * weight, corresponding to the value 400).
   *
   * > **NOTE**
   * >
   * > When the fontVariations attribute is set at the same time, the fontVariations attribute takes precedence.
   *
   * @param { number | FontWeight | ResourceStr } weight - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900, with an interval of 100. A larger value indicates a
   *     heavier font. For the string type, only the string form of the number type value is supported, for example, "40
   *     0", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the respective enum
   *     values in FontWeight. If the value is set too large, the text may be truncated under different fonts.
   *     <br>If the value passed in is out of the value range, the default value is used. If the value passed in does
   *     not meet the interval requirement, the passed-in value is used when enableVariableFontWeight of
   *     fontWeightConfigs is set to true; otherwise, the default value is used.
   * @param { FontWeightConfigs } [fontWeightConfigs] - Font weight configuration object, used to configure options such
   *     as the variable font weight. The default value inherits [FontWeightConfigs]{@link FontWeightConfigs}.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs): SpanAttribute;

  /**
   * Sets the font list. If this API is not used, the default font is 'HarmonyOS Sans'.
   *
   * @param { string | Resource } value - Font list.
   *     <br>When multiple fonts are used, separate them with commas ','. The priority of the fonts takes effect in
   *     order. For example: 'Arial,HarmonyOS Sans'.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): SpanAttribute;

  /**
   * Sets the text decoration line style and its color. If this API is not used, the default decoration line type is
   * TextDecorationType.None (no decoration line), the color is Color.Black, and the style is TextDecorationStyle.SOLID
   * (solid line).
   *
   * @param { object } value - Text decoration line style object.
   *     <br>**Note:**
   *     <br>The style parameter does not support the card capability. [since 7 - 11]
   * @param { DecorationStyleInterface } value - Text decoration line style object.
   *     <br>**Note:**
   *     <br>The style parameter does not support the card capability. [since 12]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): SpanAttribute;

  /**
   * Sets the text character spacing. If the value is less than 0, the characters gather and overlap. If the value is
   * greater than 0, the character spacing increases as the value increases, resulting in a sparse distribution. It is
   * suitable for scenarios such as title layout and label text where the compactness or sparseness of characters needs
   * to be adjusted. The string type supports the string form of a number value and can carry a unit, for example, "10"
   * and "10fp".
   *
   * @param { number | string } value - Text character spacing.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Since API version 20, the [Resource]{@link Resource} type is supported. [since 7 - 19]
   * @param { number | ResourceStr } value - Text character spacing.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Since API version 20, the [Resource]{@link Resource} type is supported. [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): SpanAttribute;

  /**
   * Sets the text case. If this API is not used, the default text case is TextCase.Normal.
   *
   * @param { TextCase } value - Text case.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): SpanAttribute;

  /**
   * Sets the line height for the text. If this API is not used, the line height is automatically calculated by the
   * system based on the font size.
   *
   * @param { Length } value - Text line height.
   *     <br> The unit is fp when the value is of the number type. When the value is of the string type, the string form
   *     of a number type value is supported, and a unit can be attached, for example, "10" and "10fp". Percentage
   *     strings are not supported.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lineHeight(value: Length): SpanAttribute;

  /**
   * Sets the text shadow effect. This API supports an array as the input parameter to implement multiple text shadows.
   * The **fill** field and the smart color picking mode are not supported.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Text shadow effect. You can set parameters such as the blur
   *     radius, color, and offset (offsetX/offsetY) of the shadow, and multiple shadows are supported in array form.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): SpanAttribute;

  /**
   * Sets the attributes of a variable font. This is applicable to scenarios where variable dimension parameters such as
   * font weight and width need to be dynamically adjusted.
   *
   * @param { Array<FontVariation> } fontVariations - Array of variable font attributes. Each array element contains two
   *     fields: axis (attribute axis name) and value (attribute value). The fontVariations attribute has a higher
   *     priority than
   *     [fontWeight]{@link SpanAttribute#fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)}.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.1]
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations(fontVariations: Array<FontVariation>): SpanAttribute;
}

/**
 * As a child component of [Text]{@link ./text} and [ContainerSpan]{@link ./container_span}, it is used to display
 * inline text and supports fine-grained settings of the font, color, size, and other styles of the text. It is suitable
 * for scenarios where different styles are mixed in the same line of text, such as text in different font colors, and
 * adding decorative lines or shadow effects.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - Since API version 10, this component supports inheriting the attributes of the parent **Text** component. That
 * > is, if a child component does not set an attribute but the parent component does, the child component inherits the
 * > attribute set by the parent component. The attributes that can be inherited include only: fontColor, fontSize,
 * > fontStyle, fontWeight, decoration, letterSpacing, textCase, fontFamily, and textShadow.
 * >
 * > - It supports the [accessibility attribute]{@link ./common} (
 * > [accessibilityText]{@link CommonMethod#accessibilityText(value: string)}), [component identifier]{@link ./common} (
 * > [id]{@link CommonMethod#id} and [key]{@link CommonMethod#key}), and [color inversion disabling]{@link ./common} (
 * > [allowForceDark]{@link CommonMethod#allowForceDark}) among the [universal attributes]{@link ./common}, but does not
 * > support other universal attributes. To set other universal attributes, use [Text]{@link ./text}, or use
 * > [CustomSpan]{@link CustomSpan} in [styled strings]{@link ./styled_string} to draw them by yourself.
 * >
 * > - [accessibilityText]{@link CommonMethod#accessibilityText(value: string)} takes effect only when the
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)} event is set for **Span**. The configured
 * > text is reflected only in the inline link pop-up recognized by the accessibility service. During direct
 * > announcement, the content of **Span** is still announced, and it is not replaced by the text configured in
 * > accessibilityText.
 * >
 * > - Among the [universal events]{@link ./common}, only the click event
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)} and the hover event
 * > [onHover]{@link CommonMethod#onHover} are supported.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Span: SpanInterface;

/**
 * Defines Span Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const SpanInstance: SpanAttribute;