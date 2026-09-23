/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * Defines the configuration object for text overflow behavior.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect API usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextOverflowOptions {
  /**
   * Display mode of overflowing text.
   *
   * Default value: **TextOverflow.Clip**
   *
   * @default TextOverflow.Clip [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  overflow: TextOverflow;
}

/**
 * The **Text** component is used to display text content. It supports the configuration of font styles, text alignment,
 * line height, and decorative lines. It also supports mixed arrangement of images and text, text selection, and text
 * recognition. This component is applicable to various application scenarios where text information needs to be
 * displayed.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - To set whether to clear the text selection and handle when the user touches outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 * >
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface TextInterface {
  /**
   * Defines the constructor of Text.
   *
   * @param { string | Resource } content - Plain text. This parameter is required when the text content needs to be
   *     directly displayed. This parameter does not take effect when the subcomponent [Span]{@link ./span} is contained
   *     or the [styled string]{@link ./styled_string} is set.
   *     <br>Default value: **' '**
   *     <br>**NOTE**
   *     <br>Priority of displayed content: Styled string > Content of the **Span** component > Text content of the
   *     **Text** component.
   * @param { TextOptions } value - Text component initialization option, which is used to configure the text
   *     controller. This parameter is required when the **TextController** feature needs to be used to control the text
   *     content and selection.
   *     <br>Default value: If this parameter is not set, the text controller is not used.
   *     <br> [since 11]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (content?: string | Resource, value?: TextOptions): TextAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {
  /**
   * Sets the text style, If this API is not called, the default font style is used.
   *
   * covering the font size, font width, font family, and font style.
   *
   * It is only effective for the **Text** component, not for its child components.
   *
   * @param { Font } value - Text style.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font(value: Font): TextAttribute;

  /**
   * Sets the font style, with support for font settings.
   *
   * It is only effective for the **Text** component, not for its child components.
   *
   * @param { Font } fontValue - Sets the text style.
   * @param { FontSettingOptions } options - Font settings.
   *     <br>Default value: If this parameter is not set, the default font configuration is used. For details, see
   *     **FontSettingOptions**.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  font(fontValue: Font, options?: FontSettingOptions): TextAttribute;

  /**
   * Sets the font color. If this API is not called, the default text color is **'#e6182431'** (dark gray, with 90%
   * opacity). On wearables, the default text color is **'#c5ffffff'** (white, with 77% opacity).
   *
   * @param { ResourceColor } value - Font color.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextAttribute;

  /**
   * Sets the text size. If this API is not called, the default font size is 16 fp. The default font size on wearables
   * is 15 fp.
   *
   * > **NOTE**
   * >
   * > When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * @param { number | string | Resource } value - Font size. If **fontSize** is of the number type, the unit fp is
   *     used. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are
   *     supported. This parameter cannot be set in percentage.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): TextAttribute;

  /**
   * Sets the minimum font size.
   *
   * For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [maxFontSize]{@link TextAttribute#maxFontSize} and [maxLines]{@link TextAttribute#maxLines}, or layout constraint
   * settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such
   * cases, the [fontSize]{@link TextAttribute#fontSize} attribute is used instead. If **fontSize** is not set, the
   * default value will apply.
   *
   * Since API version 18, adaptive font sizing is supported on child components and styled strings, and text segments
   * without an explicitly defined font size will automatically adjust based on the available space.
   *
   * @param { number | string | Resource } value - Minimum font size.
   *     <br>The value must be greater than **0**.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>**NOTE**
   *     <br>If the value is less than or equal to 0, the adaptive font size does not take effect. In this case, the
   *     value of **fontSize** takes effect.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Sets the maximum font size.
   *
   * For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [minFontSize]{@link TextAttribute#minFontSize} and [maxLines]{@link TextAttribute#maxLines}, or layout constraint
   * settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the
   * adaptive font sizing feature is disabled. In such cases, the [fontSize]{@link TextAttribute#fontSize} attribute is
   * used instead. If **fontSize** is not set, the default value will apply.
   *
   * Since API version 18, adaptive font sizing is supported on child components and styled strings, and text segments
   * without an explicitly defined font size will automatically adjust based on the available space.
   *
   * @param { number | string | Resource } value - Maximum font size.
   *     <br>The value must be greater than 0 and greater than or equal to the value of **minFontSize**.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>**NOTE**
   *     <br>If the value is less than or equal to 0 or less than the value of **minFontSize**, the adaptive font size
   *     does not take effect. In this case, the value of **fontSize** takes effect.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { number | Resource } scale - Minimum font scale factor for text.
   *     <br>Value range: [0, 1]
   *     <br>**NOTE**
   *     <br>Values less than 0 are treated as 0, and values greater than 1 are treated as 1. Other invalid values do
   *     not take effect by default.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  minFontScale(scale: number | Resource): TextAttribute;

  /**
   * Sets the maximum font scale factor for text.
   *
   * @param { number | Resource  } scale - Maximum font scale factor for text.
   *     <br>Value range: [1, +∞)
   *     <br>**NOTE**
   *     <br>Values less than 1 are treated as **1**. Other invalid values are ineffective by default.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontScale(scale: number | Resource): TextAttribute;

  /**
   * Sets the font style. If this API is not called, the default font style is **FontStyle.Normal**. The default font
   * style on wearables is also **FontStyle.Normal**.
   *
   * @param { FontStyle } value - Font style.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextAttribute;

  /**
   * Sets the font weight. If the value is too large, the text may be clipped depending on the font. If this API is not
   * called, the default font weight is **FontWeight.Normal**. The default font weight on wearables is
   * **FontWeight.Regular**.
   *
   * It is only effective for the **Text** component, not for its child components.
   *
   * @param { number | FontWeight | string } value - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a
   *     heavier font weight. The default value is **400**. For the string type, only strings of the number type are
   *     supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**,
   *     which correspond to the enumerated values in **FontWeight**. If the value is too large, truncation may occur in
   *     different fonts. If the input value exceeds the value range or does not meet the interval requirements, the
   *     default value is used.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a
   *     heavier font weight. The default value is **400**. For the string type, only strings of the number type are
   *     supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**,
   *     which correspond to the enumerated values in **FontWeight**. If the value is too large, truncation may occur in
   *     different fonts. If the input value exceeds the value range or does not meet the interval requirements, the
   *     default value is used.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 20]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextAttribute;

  /**
   * Sets the text font weight, with support for font settings. If the value is too large, truncation may occur in
   * different fonts. The [fontVariations]{@link TextAttribute#fontVariations} attribute has a higher priority than this
   * attribute. If both are set, the value of **fontVariations** takes effect. If this API is not called, the default
   * text font weight is **FontWeight.Normal**. The default text font weight on wearables is **FontWeight.Regular**.
   *
   * It is only effective for the **Text** component, not for its child components.<!--RP4--><!--RP4End-->
   *
   * @param { number | FontWeight | string } weight - Font weight.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a
   *     heavier font weight. The default value is **400**. For the string type, only strings of the number type are
   *     supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**,
   *     which correspond to the enumerated values in **FontWeight**. If the value is too large, truncation may occur in
   *     different fonts.
   *     <br>If the input value exceeds the value range, the default value is used. If the input value does not meet the
   *     interval requirements, and **enableVariableFontWeight** of **fontWeightConfigs** is set to **true**, the input
   *     value is used. If **enableVariableFontWeight** is set to **false**, the default value is used.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 12 - 19]
   * @param { number | FontWeight | ResourceStr } weight - Font weight.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a
   *     heavier font weight. The default value is **400**. For the string type, only strings of the number type are
   *     supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**,
   *     which correspond to the enumerated values in **FontWeight**. If the value is too large, truncation may occur in
   *     different fonts.
   *     <br>If the input value exceeds the value range, the default value is used. If the input value does not meet the
   *     interval requirements, and **enableVariableFontWeight** of **fontWeightConfigs** is set to **true**, the input
   *     value is used. If **enableVariableFontWeight** is set to **false**, the default value is used.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 20]
   * @param { FontSettingOptions } options - Font configuration options, which are used to enable the variable font
   *     weight adjustment feature. This parameter is required (set **enableVariableFontWeight** to **true**) when the
   *     font weight attribute of a variable font needs to be fine-tuned. If this parameter is not passed, the default
   *     font configuration is used (variable font weight adjustment is disabled, and only font weights that are
   *     multiples of 100 are supported).
   *     <br>If **enableVariableFontWeight** is set to **false**, variable font weight adjustment is disabled: If the
   *     value of **weight** is a multiple of 100, the font weight is the value of **weight**. If the value of
   *     **weight** is not a multiple of 100, the font weight is 400. If **enableVariableFontWeight** is set to
   *     **true**, variable font weight adjustment is enabled: The font weight is the value of **weight** when
   *     **weight** is set to any integer.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions): TextAttribute;

  /**
   * Sets the line spacing for the text. If the value specified is less than 0, the default value **0** is used. If this
   * API is not called, the default line spacing is 0.
   *
   * If this parameter and [lineHeightMultiple]{@link TextAttribute#lineHeightMultiple} are set at the same time and
   * **lineHeightMultiple** is set to a valid value, the setting of **lineSpacing** does not take effect and
   * **lineHeightMultiple** is used.
   *
   * @param { LengthMetrics } value - Line spacing.
   *     <br>The value range is [0, +∞). If the value is less than 0, the default value **0** is used.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineSpacing(value: LengthMetrics): TextAttribute;

  /**
   * Sets the line spacing for the text. When **LineSpacingOptions** is not specified, line spacing is applied above the
   * first line and below the last line by default.
   *
   * If this parameter and [lineHeightMultiple]{@link TextAttribute#lineHeightMultiple} are set at the same time and
   * **lineHeightMultiple** is set to a valid value, the setting of **lineSpacing** does not take effect and
   * **lineHeightMultiple** is used.
   *
   * @param { LengthMetrics } value - Line spacing. Values less than or equal to 0 are treated as the default value
   *     **0**.
   * @param { LineSpacingOptions } options - Line spacing configuration options.
   *     <br>Default value: **{ onlyBetweenLines: false }**
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAttribute;

  /**
   * Sets the horizontal alignment of the text. If this API is not called, the default horizontal alignment mode of text
   * paragraphs is **TextAlign.Start**. The default value is **TextAlign.Center** on wearables.
   *
   * When [textOverflow]{@link TextAttribute#textOverflow} is set to **TextOverflow.MARQUEE** and the text is
   * scrollable, the **textAlign** attribute does not take effect.
   *
   * The text takes up the full width of the **Text** component.
   *
   * The vertical position of the text paragraph can be controlled by the
   * [align]{@link CommonMethod#align(value: Alignment)} attribute, but the horizontal position cannot be controlled by
   * **align** in this component. The specific effects are as follows:
   *
   * - **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.
   * - **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.
   * - **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.
   *
   * When **textAlign** is set to **TextAlign.JUSTIFY**, the [wordBreak]{@link TextAttribute#wordBreak} property must be
   * configured according to the text content. The last line of text aligns to the start horizontally and does not
   * participate in justification.
   *
   * > **NOTE**
   * >
   * > **textAlign** only adjusts the overall text layout and does not affect character display order. For character
   * > display order adjustment, see
   * > [Bidirectional Text Layout and Alignment](docroot://ui/arkts-internationalization.md#bidirectional-text-layout-and-alignment).
   *
   * @param { TextAlign } value - Horizontal alignment of the text.
   *     <br>**NOTE**
   *     <br>When **TextAlign** is set to **TextAlign.JUSTIFY**, the [wordBreak]{@link TextAttribute#wordBreak}
   *     attribute must be configured according to the text content. The last line of text aligns to the start
   *     horizontally and does not participate in justification.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textAlign(value: TextAlign): TextAttribute;

  /**
   * Sets the vertical alignment of the text. If this API is not called, the default vertical alignment of the text is
   * **TextVerticalAlign.BASELINE**.
   *
   * > **NOTE**
   * >
   * > - When this API and [halfLeading]{@link TextAttribute#halfLeading} are both set, **halfLeading** does not take
   * > effect.
   * >
   * > - The effect of this attribute is noticeable only when the same font size is used in a paragraph and
   * > [lineHeight]{@link TextAttribute#lineHeight} is set, or when different font sizes are mixed in a paragraph.
   * > Otherwise, the effect is the same regardless of whether this attribute is set or which enum value is used. The
   * > **SuperscriptStyle** in [TextStyle]{@link TextStyle} takes effect only when the value of
   * > [TextVerticalAlign]{@link TextVerticalAlign} is set to **TextVerticalAlign.BASELINE**. In other vertical
   * > alignment modes, the superscript and subscript texts are displayed in the same way as the normal text.
   *
   * @param { Optional<TextVerticalAlign> } textVerticalAlign - Vertical alignment of the text.
   *     <br>Default value: **TextVerticalAlign.BASELINE**
   *     <br>If this parameter is set to **undefined**, the text is aligned with the baseline, which is equivalent to
   *     **TextVerticalAlign.BASELINE**.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>): TextAttribute;

  /**
   * Sets the vertical alignment of the text content area within the component.
   *
   * This API takes effect only when the height of the text content exceeds the component's height.
   *
   * @param { Optional<TextContentAlign> } textContentAlign - Vertical alignment of the text content area within the
   *     component.
   *     <br>If the value is **undefined** or invalid, alignment defaults to **Center**.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  textContentAlign(textContentAlign: Optional<TextContentAlign>): TextAttribute;

  /**
   * Set the line height.
   *
   * If this parameter and [lineHeightMultiple]{@link TextAttribute#lineHeightMultiple} are set at the same time and
   * **lineHeightMultiple** is set to a valid value, the setting of **lineHeight** does not take effect and
   * **lineHeightMultiple** is used.
   *
   * If the value is less than or equal to **0**, the line height is unrestricted and adapts to the font size. When the
   * value is a number, the unit is fp. For the string type, numeric string values with optional units, for example,
   * **"10"** or **"10fp"**, are supported.
   *
   * > **NOTE**
   * >
   * > If certain characters have significantly taller glyphs than others in the same line, layout anomalies such as
   * > clipping, overlapping, or misalignment may occur. In this case, adjust component attributes such as height and
   * > line height to ensure proper layout rendering.
   *
   * @param { number | string | Resource } value - Line height of the text. If the value is of the number type, the unit
   *     is fp.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  lineHeight(value: number | string | Resource): TextAttribute;

  /**
   * Sets the minimum line height of text. If the value is less than or equal to 0, the default value **0** is used. If
   * the value of [maxLineHeight]{@link TextAttribute#maxLineHeight} is less than that of **minLineHeight**, the value
   * of **minLineHeight** takes effect.
   *
   * @param { LengthMetrics | undefined } value - Minimum line height of text. Percentage values are not supported.
   *     <br>Values less than or equal to 0 are treated as **0**.
   *     <br>If the value is **undefined**, this parameter does not take effect.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  minLineHeight(value: LengthMetrics | undefined): TextAttribute;

  /**
   * Sets the maximum line height of text. If the value is less than or equal to 0, the maximum line height is
   * unrestricted. If this API is not called, the maximum line height is unrestricted (the value is **undefined**).
   *
   * If **maxLineHeight** is less than **minLineHeight**, **maxLineHeight** takes effect using the value of
   * **minLineHeight**.
   *
   * @param { LengthMetrics | undefined } value - Maximum line height of text. Percentage values are not supported.
   *     <br>Values less than or equal to 0 are treated as **0**. When the value is set to **0**, the maximum line
   *     height is unrestricted.
   *     <br>If the value is **undefined**, this parameter does not take effect.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  maxLineHeight(value: LengthMetrics | undefined): TextAttribute;

  /**
   * Sets the line height of text in multiple mode.
   *
   * The line height equals the input parameter **value** multiplied by **fontHeight**.
   *
   * > **NOTE**
   * >
   * > When **lineHeightMultiple** is set to a valid value and [lineHeight]{@link TextAttribute#lineHeight} or
   * > [lineSpacing]{@link TextAttribute#lineSpacing(value: LengthMetrics)} is set at the same time, only
   * > **lineHeightMultiple** takes effect. If the value of **lineHeightMultiple** is less than 0, it does not take
   * > effect. In this case, use [lineHeight]{@link TextAttribute#lineHeight} and
   * > [lineSpacing]{@link TextAttribute#lineSpacing(value: LengthMetrics)} to set the line height and line spacing.
   *
   * @param { number | undefined } value - Line height multiple.
   *     <br>Value range: [0, +∞)
   *     <br>**NOTE**
   *     <br>- Values less than 0 does not take effect.
   *     <br>- Value **0** functions the same as **1**, leaving line height unchanged.
   *     <br>- Decimal values are supported.
   *     <br>- If the value is **undefined**, the default line height is used.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  lineHeightMultiple(value: number | undefined): TextAttribute;

  /**
   * Sets the display mode for overflowing text.
   *
   * When [TextOverflowOptions]{@link TextOverflowOptions} is set to **TextOverflow.None**, **TextOverflow.Clip**, or
   * **TextOverflow.Ellipsis**:
   *
   * - **TextOverflow.None** or **TextOverflow.Clip**: Text is truncated when it exceeds the maximum number of lines.
   * - **TextOverflow.Ellipsis**: An ellipsis (...) is used to represent text overflow.
   * - This must be used with [maxLines]{@link TextAttribute#maxLines} for the settings to take effect.
   * - Line breaking behavior is controlled by [wordBreak]{@link TextAttribute#wordBreak}. By default, it uses
   * **WordBreak.BREAK_WORD**, which breaks text by word (for example, English text is broken at word boundaries). To
   * break text by character, set **wordBreak** to **WordBreak.BREAK_ALL**.
   * - Line wrapping behavior is governed by [lineBreakStrategy]{@link TextAttribute#lineBreakStrategy} which takes
   * effect only when [wordBreak]{@link TextAttribute#wordBreak} is not **WordBreak.BREAK_ALL**. Hyphens are not
   * supported.
   * - Since API version 11, it is recommended that you configure both [textOverflow]{@link TextAttribute#textOverflow}
   * and [wordBreak]{@link TextAttribute#wordBreak} to control truncation behavior. For details, see
   * [Example 4: Setting Text Wrapping and Line Breaking](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#example-4-setting-text-wrapping-and-line-breaking)
   * <!--RP1--><!--RP1End-->.
   *
   * When **TextOverflowOptions** is set to **TextOverflow.MARQUEE**:
   *
   * - Text scrolls horizontally within a single line.
   * - The [maxLines]{@link TextAttribute#maxLines}, [copyOption]{@link TextAttribute#copyOption}, and
   * [selection]{@link TextAttribute#selection} attributes do not take effect, and special text entities cannot be
   * recognized (that is, the attributes do not take effect when **enable** in
   * [enableDataDetector]{@link TextAttribute#enableDataDetector} is set to **true**).
   * - The [clip]{@link CommonMethod#clip(value: boolean)} attribute of the **Text** component defaults to **true**.
   * - [CustomSpan]{@link CustomSpan} is not supported in marquee mode.
   * - Behavior of [textAlign]{@link TextAttribute#textAlign}: If the text does not scroll, **textAlign** applies; if
   * the text scrolls, **textAlign** is ignored.
   * - Since API version 12, **TextOverflow.MARQUEE** is available for the **ImageSpan** component, where the text and
   * images are allowed to scroll within a single line.
   *
   * @param { object } value [since 7 - 17]
   * @param { TextOverflowOptions } options - Configuration object for the display mode of extra-long text. It contains
   *     the overflow attribute, which specifies the display behavior such as truncation, ellipsis, or
   *     marquee. [since 18]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textOverflow(options: TextOverflowOptions): TextAttribute;

  /**
   * Sets the font family. If this API is not called, the default font is **'HarmonyOS Sans'**. The default font on
   * wearables is also **'HarmonyOS Sans'**.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register custom fonts.
   *
   * @param { string | Resource } value - Font family. To specify multiple fonts, separate them with commas (,), and
   *     fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): TextAttribute;

  /**
   * Sets the maximum number of lines for text. If this parameter and [minLines]{@link TextAttribute#minLines} are set
   * at the same time, the display range of the minimum number of lines does not exceed the value of **maxLines**.
   *
   * By default, text is automatically folded. If this attribute is specified, the text will not exceed the specified
   * number of lines. If there is extra text, you can use [textOverflow]{@link TextAttribute#textOverflow} to specify
   * how it is displayed.
   *
   * @param { number } value - Maximum number of lines of the text.
   *     <br>**NOTE**
   *     <br>Value range: [0, *INT32_MAX*]
   *     <br>If this parameter is set to **0**, no text content is displayed.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxLines(value: number): TextAttribute;

  /**
   * Sets the minimum number of lines for text.
   *
   * If the actual text height is less than the height for the minimum number of lines, the component uses the height
   * corresponding to the minimum number of lines.
   *
   * If this parameter and [maxLines]{@link TextAttribute#maxLines} are set at the same time, the display height
   * corresponding to the minimum number of lines does not exceed the height limit corresponding to the maximum number
   * of lines.
   *
   * If [constraintSize]{@link CommonMethod#constraintSize} is set for the text, the component height is confined within
   * the [constraintSize]{@link CommonMethod#constraintSize} bounds.
   *
   * @param { Optional<number> } minLines - Minimum number of lines of the text.
   *     <br>Value range: [0, *INT32_MAX*].
   *     <br>Values less than 0 are clamped to **0**.
   *     <br>If the value is **undefined**, the minimum number of lines is not limited.
   *     <br>**NOTE**
   *     <br>If this parameter and [maxLines]{@link TextAttribute#maxLines} are set at the same time, the display height
   *     corresponding to the minimum number of lines does not exceed the height limit corresponding to the maximum
   *     number of lines.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  minLines(minLines: Optional<number>): TextAttribute;

  /**
   * Style and color of the text decorative line. If this API is not used, the default text decorative line style is as
   * follows:
   *
   * {
   *
   * &nbsp;type:&nbsp;TextDecorationType.None,
   *
   * &nbsp;color:&nbsp;Color.Black,
   *
   * &nbsp;style:&nbsp;TextDecorationStyle.SOLID&nbsp;
   *
   * }
   *
   * > **NOTE**
   * >
   * > When the bottom contour of a character intersects with the decoration, underline avoidance is triggered, commonly
   * > affecting characters like "g", "j", "y", "q", and "p."
   * >
   * > When the decorative line color is set to **Color.Transparent**, the decorative line is displayed as the text
   * > color of the first character in each line. When the color is set to the transparent hexadecimal value
   * > **"#00FFFFFF"**, the decorative line is displayed in transparent color.
   *
   * @param { object } value - Style of the text decorative line.
   *     <br>**NOTE**
   *     <br>The **style** parameter cannot be used in widgets. [since 7 - 11]
   * @param { DecorationStyleInterface } value - Style of the text decorative line.
   *     <br>**NOTE**
   *     <br>The **style** parameter cannot be used in widgets. [since 12]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): TextAttribute;

  /**
   * Sets the letter spacing for a text style. If this API is not called, the default letter spacing is 0.
   *
   * If the value specified is a percentage or **0**, the default value is used. For the string type, numeric string
   * values with optional units, for example, **"10"** or **"10fp"**, are supported.
   *
   * Negative values compress text. Excessive compression may reduce content area to zero, hiding content.
   *
   * This setting applies to every character, including those at line endings.
   *
   * @param { number | string } value - Letter spacing.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - Letter spacing.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 20]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): TextAttribute;

  /**
   * Sets the text case. If this API is not called, the default text case is **TextCase.Normal**.
   *
   * @param { TextCase } value - Text case.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): TextAttribute;

  /**
   * Sets the offset of the text baseline. It can be used to adjust the baseline alignment between the text and other
   * elements (such as images and icons), or used in special typesetting scenarios that require precise vertical
   * alignment, such as mixed text and images, mathematical formulas, and chemical formulas. If this API is not used,
   * the default offset is 0.
   *
   * A positive value moves the content upwards, while a negative value moves it downwards.
   *
   * @param { number | string } value - Offset of the text baseline. If the value is set to a percentage, the value is
   *     displayed as 0.
   *     <br>Unit: fp.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - Offset of the text baseline. If the value is set to a percentage, the value
   *     is displayed as 0.
   *     <br>Unit: fp.
   *     <br>The [Resource]{@link Resource} type is supported since API version 20. [since 20]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  baselineOffset(value: number | ResourceStr): TextAttribute;

  /**
   * Sets whether copy and paste operations are allowed. If this API is not used, the default value is
   * **CopyOptions.None**, indicating that the text cannot be copied or pasted.
   *
   * The features of multiple attributes depend on the settings of **copyOption**, including
   * [selection]{@link TextAttribute#selection}, [setTextSelection]{@link TextController#setTextSelection},
   * [draggable]{@link TextAttribute#draggable},
   * [enableSelectedDataDetector]{@link TextAttribute#enableSelectedDataDetector}, and
   * [textSelectable]{@link TextAttribute#textSelectable}. For details about the dependency conditions, see the
   * description of each attribute.
   *
   * Since API version 20, copied text from the **Text** component includes HTML-formatted content in the pasteboard.
   *
   * - When the **Text** component contains child elements, only [Span]{@link ./span} and
   * [ImageSpan]{@link ./image_span} support HTML-formatted pasteboard content.
   * - For styled strings, refer to [toHtml]{@link StyledString#toHtml} for supported HTML conversion scope.
   *
   * When **copyOption** is set to **CopyOptions.InApp** or **CopyOptions.LocalDevice**:
   *
   * - A long press on the text will display a menu that offers the copy and select-all options.
   * - By default, selected text is draggable. To disable dragging, set **draggable** to **false**.
   * - To support **Ctrl+C** copying, also set [textSelectable]{@link TextAttribute#textSelectable} to
   * **TextSelectableMode.SELECTABLE_FOCUSABLE**.
   *
   * The **Text** component listens for **onClick**, which is a non-bubbling event. To allow parent components to
   * respond to clicks within the **Text** area, use [parallelGesture]{@link CommonMethod#parallelGesture} on the
   * parent. For implementation guidance, see
   * [Example 7: Setting Text Recognition](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#example-7-setting-text-recognition).
   *
   * Because widgets do not have the long press event, the menu will not be displayed when users long press text.
   *
   * @param { CopyOptions } value - Whether copy and paste operations are allowed.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextAttribute;

  /**
   * Sets the drag effect of the selected text. If this API is not used, the selected text cannot be dragged by default.
   *
   *
   * This attribute cannot be used together with the [onDragStart]{@link CommonMethod#onDragStart} event.
   *
   * If set to **true**, **draggable** must be used in conjunction with [CopyOptions]{@link CopyOptions}. When
   * **copyOptions** is set to **CopyOptions.InApp** or **CopyOptions.LocalDevice**, the selected text becomes draggable
   * and can be copied into a text box.
   *
   * @param { boolean } value - Drag effect of the selected text.
   *     <br>**true**: The selected text is draggable. **false**: The selected text is not draggable.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  draggable(value: boolean): TextAttribute;

  /**
   * Sets the text shadow.
   *
   * Intelligent color extraction is not supported for the **type**, **fill**, and **color** fields of the
   * **ShadowOptions** object.
   *
   * Since API version 11, this API supports input parameters in an array to implement multiple text shadows.
   *
   * @param { ShadowOptions } value - Text shadow effect, which is used to configure the visual effect of the text
   *     shadow. **ShadowOptions** contains configuration items such as **radius** (shadow radius), **color** (shadow
   *     color), **offsetX** (horizontal offset), and **offsetY** (vertical offset). Intelligent color extraction is not
   *     supported for the **type**, **fill**, and **color** fields. Since API version 11, input parameters can be
   *     passed in an array to implement multiple text shadows. [since 10 - 10]
   * @param { ShadowOptions | Array<ShadowOptions> } value - Text shadow effect, which is used to configure the visual
   *     effect of the text shadow. **ShadowOptions** contains configuration items such as **radius** (shadow radius),
   *     **color** (shadow color), **offsetX** (horizontal offset), and **offsetY** (vertical offset). Intelligent color
   *     extraction is not supported for the **type**, **fill**, and **color** fields. Since API version 11, input
   *     parameters can be passed in an array to implement multiple text shadows. [since 11]
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): TextAttribute;

  /**
   * Sets the font size adjustment strategy for adaptive text layout. If this API is not called, the default text height
   * adaptation mode is **TextHeightAdaptivePolicy.MAX_LINES_FIRST**.
   *
   * The available modes are as follows:
   *
   * - **MAX_LINES_FIRST**: prioritizes using the [maxLines]{@link TextAttribute#maxLines} attribute to control text
   * height. If the **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a
   * font size between [minFontSize]{@link TextAttribute#minFontSize} and [maxFontSize]{@link TextAttribute#maxFontSize}
   * to allow for more content to be shown.
   * - **MIN_FONT_SIZE_FIRST**: prioritizes using the **minFontSize** attribute to control text height. If the text fits
   * on one line at **minFontSize**, the system attempts to increase the font size between **minFontSize** and
   * **maxFontSize** to fill the line with the largest available font size. If the text cannot fit on a single line even
   * at **minFontSize**, it sticks with **minFontSize**.
   * - **LAYOUT_CONSTRAINT_FIRST**: prioritizes using layout constraints to control text height. If the resultant layout
   * is beyond the layout constraints, the text will shrink to a font size between **minFontSize** and **maxFontSize**
   * to respect the layout constraints. If the text still extends beyond the layout constraints after shrinking to
   * **minFontSize**, the lines that exceed the constraints are deleted.
   *
   * @param { TextHeightAdaptivePolicy } value - How the adaptive height is determined for the text.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute;

  /**
   * Sets the indent of the first line text. If this API is not called, the default indent of the first line text is 0.
   *
   * @param { Length } value - Indent of the first line text.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>The value must be greater than or equal to 0. If the value is a negative number, the default value is used.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textIndent(value: Length): TextAttribute;

  /**
   * Sets the indent of the text tail. If this API is not called, the default indent of the text tail is 0 fp.
   *
   * @param { Optional<LengthMetrics | Array<LengthMetrics>> } value - Tail indentation of each line of text. If a
   *     single **LengthMetrics** value is provided, all lines share the same tail indentation. If an array is provided,
   *     the *i*th element specifies the tail indentation for the *i*th line. If the number of text lines exceeds the
   *     array length, the last element in the array is used for the remaining lines. The value cannot be in percentage.
   *     <br>The value must be greater than or equal to 0. If the value is a negative number, the default value is used.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>): TextAttribute;

  /**
   * Sets the word break rule. If this API is not called, the default word break rule is **WordBreak.BREAK_WORD**.
   * 
   * By default, when **wordBreak** is not called or is set to **WordBreak.BREAK_WORD**, text is broken by word. (for 
   * example, English text is broken at word boundaries).
   * 
   * To break text by character, with the excess part displayed as an ellipsis (...), use **WordBreak.BREAK_ALL** in 
   * combination with **{overflow: TextOverflow.Ellipsis}** and **maxLines**.
   *
   * @param { WordBreak } value - Word break rule.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  wordBreak(value: WordBreak): TextAttribute;

  /**
   * Sets the line break rule. This attribute takes effect only when [wordBreak]{@link TextAttribute#wordBreak} is not
   * **WordBreak.BREAK_ALL**. Hyphens are not supported. If this API is not called, the default line break rule is
   * **LineBreakStrategy.GREEDY**.
   *
   * @param { LineBreakStrategy } strategy - Line break rule. For details, see **LineBreakStrategy**.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextAttribute;

  /**
   * Called when data is copied to the pasteboard, which is displayed when the text box is long pressed. Currently, only
   * text can be copied.
   *
   * @param { function } callback - Callback of the listened event.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onCopy(callback: (value: string) => void): TextAttribute;

  /**
   * Called before the copy operation is performed.
   *
   * > **NOTE**
   * >
   * > **onWillCopy** and **onCopy** form the **will/did** time sequence mode:
   * >
   * > - **onWillCopy** is triggered before the copy operation is performed. You can return **false** to intercept the
   * > copy operation. If **true** is returned, the copy operation is allowed and **onCopy** is triggered.
   * >
   * > - **onCopy** is triggered after the copy operation is complete and cannot be intercepted.
   * >
   * > - The two APIs can be used together. **onWillCopy** is used for interception and control, and **onCopy** is used
   * > to obtain the copy result.
   *
   * @param { Callback<string, boolean> } callback - The string type indicates the text to be copied.
   *     <br>The boolean type indicates whether the text can be copied. The value **true** means yes and **false** means
   *     no.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextAttribute;

  /**
   * Sets text selection. If this API is not called, no text selection is set by default (both **selectionStart** and
   * **selectionEnd** are set to **-1**).
   *
   * The selected text is highlighted, with selection handles and the text selection menu displayed.
   *
   * If [copyOption]{@link TextAttribute#copyOption} is set to **CopyOptions.None**, the setting of the **selection**
   * attribute does not take effect.
   *
   * If [textOverflow]{@link TextAttribute#textOverflow} is set to **TextOverflow.MARQUEE**, the setting of the
   * **selection** attribute does not take effect.
   *
   * If the value of **selectionStart** is greater than or equal to that of **selectionEnd**, no text will be selected.
   * The value range is [0, textSize], where **textSize** indicates the maximum number of characters in the text
   * content. If the value is less than 0, the value **0** will be used. If the value is greater than **textSize**,
   * **textSize** will be used.
   *
   * If the selection range falls within a truncated or invisible area, selection is ignored. When
   * [clip]{@link CommonMethod#clip(value: boolean)} is set to **false**, the text outside the parent component can be
   * selected.
   *
   * You can obtain the selection range change result through the
   * [onTextSelectionChange]{@link TextAttribute#onTextSelectionChange} API.
   *
   * @param { number } selectionStart - Start position of the selected text.
   *     <br>Value range: [0, textSize], where **textSize** indicates the maximum number of characters in the text
   *     content. If the value of the input parameter is less than 0, the value **0** is used. If the value of the input
   *     parameter is greater than that of **textSize**, the value of **textSize** is used.
   * @param { number } selectionEnd - End position of the selected text.
   *     <br>Value range: [0, textSize], where **textSize** indicates the maximum number of characters in the text
   *     content. If the value of the input parameter is less than 0, the value **0** is used. If the value of the input
   *     parameter is greater than that of **textSize**, the value of **textSize** is used.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  selection(selectionStart: number, selectionEnd: number): TextAttribute;

  /**
   * Sets the color of the handle for the selected area in the text component. If this API is not used, the default
   * color of the handle for the selected area is **'#007DFF'** (blue).
   *
   * @param { ResourceColor } color - Color of the text selection handle.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  caretColor(color: ResourceColor): TextAttribute;

  /**
   * Sets the highlight color of the selected text. If opacity is not set or is set to fully opaque, the default opacity
   * is 20%. If this API is not called, the default highlight color of the selected text is '#007DFF' (blue).
   *
   * @param { ResourceColor } color - Highlight color of the selected text.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  selectedBackgroundColor(color: ResourceColor): TextAttribute;

  /**
   * Sets the text stroke width.
   *
   * @param { Optional<LengthMetrics> } width - Text stroke width.
   *     When the unit of **LengthMetrics** is **px**:<br>Values < 0: solid text.<br>Values > 0: outlined text.
   *     <br>Default value: **0** (no stroke).
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextAttribute;

  /**
   * Sets the text stroke color.
   *
   * @param { Optional<ResourceColor> } color - Stroke color.
   *     <br>Default value: font color. Invalid values are treated as
   *     the default value.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextAttribute;

  /**
   * Sets the join style of the text stroke.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - Join style of the text stroke.<br>If the value is
   *     **undefined**, the join style is set to the default value **StrokeJoinStyle.MITER_JOIN**. For details, see
   *     [StrokeJoinStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#strokejoinstyle).
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextAttribute;

  /**
   * The text can be displayed in the [RadialGradientStyle]{@link RadialGradientStyle},
   * [LinearGradientStyle]{@link LinearGradientStyle}, or [ColorShaderStyle]{@link ColorShaderStyle} effect. The
   * priority of **shaderStyle** is higher than that of [fontColor]{@link TextAttribute#fontColor} and AI recognition.
   * You are advised to use [fontColor]{@link TextAttribute#fontColor} for solid colors.
   *
   * @param { ShaderStyle } shader - Shader effect.
   *     <br>[RadialGradientStyle]{@link RadialGradientStyle}, [LinearGradientStyle]{@link LinearGradientStyle}, or
   *     [ColorShaderStyle]{@link ColorShaderStyle} is processed based on the input parameters, and the gradient color
   *     effect is displayed on the text.
   *     <br>**NOTE**
   *     <br>If [RadialGradientStyle]{@link RadialGradientStyle} is used and the **center** parameter (from
   *     [RadialGradientOptions]{@link RadialGradientOptions}) is outside the component bounds, setting **repeating** to
   *     **true** enhances the gradient effect.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  shaderStyle(shader: ShaderStyle): TextAttribute;

  /**
   * Sets the ellipsis position. If this API is not used, the default ellipsis position is at the end of the line (
   * **EllipsisMode.END**).
   *
   * The **ellipsisMode** attribute must be used together with the **TextOverflow.Ellipsis** value of **overflow** and
   * the **maxLines** attribute. Setting the **ellipsisMode** attribute alone does not take effect.
   *
   * The **EllipsisMode.START** and **EllipsisMode.CENTER** attributes take effect only when the text in a single line
   * is too long.
   *
   * @param { EllipsisMode } value - Ellipsis position.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ellipsisMode(value: EllipsisMode): TextAttribute;

  /**
   * Sets whether to recognize special text entities, such as phone numbers, websites, email addresses, addresses, and
   * dates. This API is applicable to scenarios that require intelligent recognition and interaction, such as chat
   * messages, comments, and articles. If this API is not called, special text entities are not recognized by default.
   * Special entities are detected when **enableDataDetector** is set to **true**.
   *
   * The style of detected entities is as follows: the font color is changed to blue, and a blue underline is added.
   *
   * > **NOTE**
   * >
   * > - This API takes effect only when the device has an underlying text detection capability.
   * >
   * > - When [textOverflow]{@link TextAttribute#textOverflow} is set to **TextOverflow.MARQUEE**, text special entity
   * > detection is not performed.
   *
   * <!--RP2--><!--RP2End-->
   *
   * @param { boolean } enable - Whether special text entities can be recognized.
   *     <br>The value **true** indicates yes, and **false** indicates no.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableDataDetector(enable: boolean): TextAttribute;

  /**
   * Configures text recognition settings, including entity types to detect, display styles for detected entities, and
   * long-press preview options.
   *
   * This API must be used together with [enableDataDetector]{@link TextAttribute#enableDataDetector}. It takes effect
   * only when **enableDataDetector** is set to **true**.
   *
   * @param { TextDataDetectorConfig } config - Text recognition configuration object, which is used to configure the
   *     specific behavior of text recognition. You can configure the types of entities to recognize (such as phone
   *     numbers, websites, email addresses, addresses, and dates), display styles for the entities, and whether to
   *     enable long-press for preview. This parameter must be used together with
   *     [enableDataDetector]{@link TextAttribute#enableDataDetector}.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): TextAttribute;

  /**
   * Sets whether to enable entity recognition for selected text. This API only works on devices that provide text
   * recognition. If this API is not called, entity recognition is enabled for selected text by default.
   *
   * After this feature is enabled, the entities such as email address, phone number, website URL, date, and address in
   * the selection area can be recognized, and the corresponding AI menu items can be displayed in the text selection
   * menu. By default, the AI menu feature is enabled.
   *
   * When the AI menu feature is enabled, selecting text in the component allows the text selection menu to display
   * corresponding AI menu items, including **url** (opening a link), **email** (creating an email), **phoneNumber** (
   * making a call), **address** (navigating), and **dateTime** (creating a new event) in
   * [TextMenuItemId]{@link TextMenuItemId}.
   *
   * When the AI menu is active, the corresponding menu item is displayed only if the selected range contains exactly
   * one complete AI entity. This menu item does not appear at the same time as the **askAI** menu item in
   * [TextMenuItemId]{@link TextMenuItemId}.
   *
   * This feature is only effective when [CopyOptions]{@link CopyOptions} is set to **CopyOptions.LocalDevice** or
   * **CopyOptions.CrossDevice**.
   *
   * This attribute is invalid in the cross-node selection scenario of
   * [SelectionContainer]{@link @ohos.arkui.components.SelectionContainer}. The corresponding AI menu item is not
   * displayed in the text selection menu.
   *
   * @param { boolean | undefined } enable - Whether to enable entity recognition for selected text.
   *     <br>**true**: Entity recognition is enabled. **false**: Entity recognition is disabled. Default value: **true**
   *     <br>A value of **undefined** is treated as the default value.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextAttribute;

  /**
   * Sets the custom selection menu. If this API is not used, the default menu type is **TextSpanType.TEXT** and the
   * response type is **TextResponseType.LONG_PRESS**.
   *
   * The long-press response duration of **bindSelectionMenu** is 600 ms while that of
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   * is 800 ms. When both are bound and their triggering methods are set to long press, **bindSelectionMenu** takes
   * precedence.
   *
   * When the custom menu is too long, it is recommended that nest a [Scroll]{@link ./scroll} component inside to
   * prevent the keyboard from being obscured.
   *
   * Since API version 26.0.0, when the text component calls this API, the image preview menu takes effect if the
   * **menuType** attribute in **options** is set to **MenuType.PREVIEW_MENU**.
   *
   * To use the image preview menu, set **spanType** to **TextSpanType.IMAGE**, **responseType** to
   * **TextResponseType.LONG_PRESS**, and **menuType** in **options** to **MenuType.PREVIEW_MENU**.
   *
   * When [copyOption]{@link TextAttribute#copyOption} is set to **CopyOptions.None**, the setting of the image preview
   * menu does not take effect.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > When [editMenuOptions]{@link TextAttribute#editMenuOptions} is used for configuring the text selection menu, the
   * > system's default style and trigger conditions are preserved.
   * >
   * > In contrast, when [bindSelectionMenu]{@link TextAttribute#bindSelectionMenu} is used, both the menu style and the
   * > trigger conditions are fully customizable.
   *
   * @param { TextSpanType } spanType - Span type of the menu.
   * @param { CustomBuilder } content - Content of the menu.
   * @param { TextResponseType } responseType - Response type of the menu.
   * @param { SelectionMenuOptions } [options] - Options of the selection menu, which are used to customize the menu
   *     behavior. The options include callback configuration items such as menu appearance, disappearance, display, and
   *     hiding.
   *     <br>Default value: If this parameter is not set, the default selection menu configuration is used.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions): TextAttribute;

  /**
   * Called when the text selection position changes.
   *
   * @param { function } callback - Callback of the listened event.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAttribute;

  /**
   * Sets the font feature, for example, monospaced digits.
   *
   * Format: normal \| \<feature-tag-value\>
   *
   * Format of **\<feature-tag-value\>**: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple **\<feature-tag-value\>** values, which are separated by commas (,).
   *
   * For example, the input format for monospaced clock fonts is "ss01" on.
   *
   * > **NOTE**
   * >
   * > The **Text** component cannot contain both text and the child component **Span** or **ImageSpan**. If both of
   * > them exist, only the content in **Span** or **ImageSpan** is displayed.
   * >
   * > The typesetting engine rounds down the value of [width]{@link CommonMethod#width(value: Length)} to ensure that
   * > the value is an integer. If the typesetting engine rounds up the value instead, the right side of the text may be
   * > clipped.
   * >
   * > When multiple **Text** components are placed in the [Row]{@link ./row} container with no specific layout or space
   * > allocation settings configured, the components are laid out based on the maximum size of the container. To make
   * > sure the sum of the components' main axis sizes does not exceed the main axis size of the container, you can set
   * > [layoutWeight]{@link CommonMethod#layoutWeight} or use the [flex layout]{@link ./common}.
   * >
   * > The system's default font supports the following ligatures: Th, fb, ff, fb, ffb, ffh, ffi, ffk, ffl, fh, fi, fk,
   * > fl, rf, rt, rv, rx, ry. These ligatures may cause unexpected effects of spans and styled strings. Disabling the
   * > ligature feature can avoid this issue.
   * >
   * > Text rendering behavior is closely tied to the font file in use. For example, the 8-punctuation compression
   * > feature requires that the characters in the font file support the ss08 feature. Otherwise, the characters cannot
   * > be compressed. In the current default system font, the punctuation marks on the right, exclamation marks, commas,
   * > and question marks do not take effect.
   *
   * @param { string } value - Text feature effect. The format is normal | <feature-tag-value>. The format of <feature-
   *     tag-value> is <string> [<integer> | on | off]. Multiple values are separated by commas (,). For example, "ss01"
   *     on.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextAttribute;

  /**
   * Sets the marquee effect for text.
   *
   * The **marqueeOptions** settings take effect only when **textOverflow** is set to **TextOverflow.MARQUEE**.
   *
   * @param { Optional<TextMarqueeOptions> } options - Marquee animation properties such as enable/disable, step size,
   *     loop count, and direction.
   *     <br>If the value is **undefined**, the default value in [TextMarqueeOptions]{@link TextMarqueeOptions} is used.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  marqueeOptions(options: Optional<TextMarqueeOptions>): TextAttribute;

  /**
   * Called when the marquee animation reaches the specified state.
   *
   * @param { Callback<MarqueeState> } callback - The callback parameter specifies the state that triggers the callback.
   *     The state is defined by the **MarqueeState** enumeration, for example, starting scrolling, completing a
   *     scrolling, completing scrolling, or stopping scrolling.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onMarqueeStateChange(callback: Callback<MarqueeState>): TextAttribute;

  /**
   * Sets whether to enable privacy mode on widgets. If this API is not called, privacy mode is not enabled on widgets
   * by default.
   *
   * @param { boolean } supported - Whether to enable privacy mode on widgets.
   *     <br>The value **true** indicates to enable privacy mode on widgets. In privacy mode, the text will be masked
   *     with hyphens (-). The value **false** indicates to disable privacy mode on widgets. In privacy mode, the text
   *     is displayed properly.
   *     <br>**NOTE**
   *     <br>The value **null** means not to enable privacy mode on widgets.
   *     <br>Enabling privacy mode requires support from the widget framework. You can use
   *     [obscured]{@link CommonMethod#obscured} to set how the component content is obscured.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(supported: boolean): TextAttribute;

  /**
   * Sets whether the text is selectable and focusable. If this API is not called, the default text can be selected but
   * cannot be focused (**TextSelectableMode.SELECTABLE_UNFOCUSABLE**).
   *
   * This attribute must be used in conjunction with [copyOption]{@link TextAttribute#copyOption}. If **copyOption** is
   * set to **CopyOptions.None**, the **textSelectable** attribute does not take effect.
   *
   * @param { TextSelectableMode } mode - Whether the text is selectable and focusable.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textSelectable(mode: TextSelectableMode): TextAttribute;

  /**
   * Sets the extended options for the custom menu, including the text content, icon, and callback.
   *
   * When [disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems} or
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems} is
   * used to disable system service menu items in the text selection menu, the disabled menu options will be excluded
   * from the parameter list in the [onCreateMenu]{@link EditMenuOptions.onCreateMenu} callback of **editMenuOptions**.
   *
   * > **NOTE**
   * >
   * > When [editMenuOptions]{@link TextAttribute#editMenuOptions} is used for configuring the text selection menu, the
   * > system's default style and trigger conditions are preserved.
   * >
   * > In contrast, when [bindSelectionMenu]{@link TextAttribute#bindSelectionMenu} is used, both the menu style and the
   * > trigger conditions are fully customizable.
   *
   * @param { EditMenuOptions } editMenu - Extended menu options, which are used to customize the extended items of the
   *     text selection menu. You can set the text content, icon, and callback method of the extended items, and add
   *     custom menu items.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextAttribute;

  /**
   * Sets whether half leading is enabled. Half leading refers to splitting the leading in half and applying it equally
   * to the top and bottom of the line. If this API is not called, half leading is disabled by default.
   *
   * > **NOTE**
   * >
   * > If this parameter and [textVerticalAlign]{@link TextAttribute#textVerticalAlign} are set at the same time,
   * > **halfLeading** does not take effect.
   *
   * @param { boolean } halfLeading - Whether half leading is enabled. Half leading refers to splitting the leading in
   *     half and applying it equally to the top and bottom of the line. If this parameter and
   *     [textVerticalAlign]{@link TextAttribute#textVerticalAlign} are set at the same time, **halfLeading** does not
   *     take effect.
   *     <br>**true**: Half leading is enabled. **false**: Half leading is not enabled.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  halfLeading(halfLeading: boolean): TextAttribute;

  /**
   * Sets whether to enable haptic feedback. If this API is not called, haptic feedback is enabled by default.
   *
   * To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions**
   * in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.
   *     <br>**true** to enable, **false** otherwise.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters. If this API is not called,
   * automatic spacing between Chinese and Western characters is disabled by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.
   *     <br>**true** to enable, **false** otherwise.
   *     <br>If the value is **undefined**, automatic spacing between Chinese and Western characters is disabled.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextAttribute;

  /**
   * Sets whether to optimize trailing spaces at line endings during text layout, resolving alignment display issues
   * caused by trailing spaces. If this API is not called, trailing spaces at the end of each line are not optimized by
   * default.
   *
   * When **Text.optimizeTrailingSpace** is set to **true**:
   *
   * * Trailing space optimization applies to multi-line text, single-line text, and text and image layouts (
   * particularly noticeable with **TextAlign.Center** or **TextAlign.End**).
   * * For text containing only spaces, decoration lines, shadows, and background colors follow the space text display.
   * * Leading spaces are not optimized. When text with trailing spaces wraps, trailing spaces on each line are
   * optimized based on component width.
   *
   * When optimizing pure space text by setting [optimizeTrailingSpace]{@link TextAttribute#optimizeTrailingSpace} to
   * **true**, you cannot simultaneously set
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [decoration]{@link TextAttribute#decoration}, and [textAlign]{@link TextAttribute#textAlign} attributes.
   *
   * @param { Optional<boolean> } optimize - Whether to optimize trailing spaces.
   *     <br>**true** to optimize, **false** otherwise.
   *     <br>If the value is **undefined**, trailing spaces are not optimized.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  optimizeTrailingSpace(optimize: Optional<boolean>): TextAttribute;

  /**
   * Applies a transition animation to text content. The numeric flip animation is supported via
   * [NumericTextTransition]{@link NumericTextTransition}.
   *
   * @param { Optional<ContentTransition> } transition - Text animation, which is used to set the transition animation
   *     effect when the text content changes. You can set this parameter to
   *     [NumericTextTransition]{@link NumericTextTransition} to implement the flip animation effect when the number
   *     changes.
   *     <br>If the value is **undefined**, there is no flipping effect.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  contentTransition(transition: Optional<ContentTransition>): TextAttribute;

  /**
   * Sets the drag preview style for selected text.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag preview style for selected text.
   *     <br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and
   *     black in dark mode.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAttribute;

  /**
   * Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.
   *     <br>If this parameter is set to **undefined**, the text layout direction follows the component layout direction
   *     as defined by **TextDirection.DEFAULT**.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and
   *     last lines.
   *     <br>**undefined**: Spacing is not added to the first and last lines.
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextAttribute;

  /**
   * Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when
   * the line height is less than the actual text height. If this API is not set, the line height does not adapt to the
   * actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height adapts to the actual text height.
   *     <br>**true**: Line height adapts to the actual text height. **false**: Line height does not adapt to the actual
   *     text height.
   *     <br>**undefined**: Line height does not adapt to the actual text height.
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextAttribute;

  /**
   * Sets whether to enable leading punctuation compression.
   *
   * > **NOTE**
   * >
   * > - Leading punctuation is not compressed by default.
   * >
   * > - For the range of punctuation marks that support leading compression, see
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable leading punctuation compression.
   *     <br>The value **true** indicates to enable leading punctuation compression, and **false** indicates the
   *     opposite. The value **undefined** indicates that leading punctuation compression is disabled.
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextAttribute;
  /**
   * Sets whether to enable orphan character optimization during text typesetting. If this attribute is not set, orphan
   * character optimization is disabled by default.
   *
   * Orphan character optimization improves the text layout by handling the orphan character (the first Chinese
   * character of the last line of a paragraph) more efficiently. When enabled, it adjusts line breaks to avoid orphan
   * characters as much as possible. This feature takes effect only when [wordBreak]{@link TextAttribute#wordBreak} is
   * not **BREAK_ALL** and [locale]{@link @ohos.graphics.text:text.TextStyle} of the first
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} of the text to be typeset is either **"zh-Hans"** or
   * **"zh-Hant"**.
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan character optimization for the last line of the
   *     paragraph.
   *     <br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is disabled.
   *     <br>When the value is **undefined** or **null**, orphan character optimization is disabled.
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextAttribute;

  /**
   * Sets font variations.
   *
   * @param { Array<FontVariation> } fontVariations - Array of font variations, where each member represents a distinct
   *     font variation. The **fontVariations** attribute takes precedence over
   *     [fontWeight]{@link TextAttribute#fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)}.
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.1]
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations(fontVariations: Array<FontVariation>): TextAttribute;

  /**
   * Sets the incremental update policy for text rendering. If this API is not called, the default value is
   * **IncrementalUpdatePolicy.NONE**.
   *
   * This API takes effect only when the text content contains a styled string (**StyledString**).
   *
   * @param { IncrementalUpdatePolicy | undefined } policy - Incremental update policy for text rendering.
   *     <br>If this parameter is set to **undefined**, the value **IncrementalUpdatePolicy.NONE** is used.
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined): TextAttribute;

  /**
   * Sets whether to enable hanging punctuation at line ends. Hanging punctuation is disabled by default if this API is
   * not specified.
   *
   * @param { Optional<boolean> } enabled - Whether to enable punctuation hanging at the end of a line.
   *     <br>**true**: enable punctuation hanging. **false**: disable punctuation hanging. When the value is
   *     **undefined** or **null**, hanging punctuation is disabled.
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextAttribute;
}

/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const TextInstance: TextAttribute;

/**
 * The **Text** component is used to display text content. It supports the configuration of font styles, text alignment,
 * line height, and decorative lines. It also supports mixed arrangement of images and text, text selection, and text
 * recognition. This component is applicable to various application scenarios where text information needs to be
 * displayed.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - To set whether to clear the text selection and handle when the user touches outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 * >
 *
 * ###### Child Components
 *
 * This component can contain the [Span]{@link ./span}, [ImageSpan]{@link ./image_span},
 * [SymbolSpan]{@link ./symbol_span}, and [ContainerSpan]{@link ./container_span} child components.
 *
 * > **NOTE**
 * >
 * > Use [child components](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#child-components) to
 * > implement [text and image layout](docroot://ui/arkts-text-image-layout.md) scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Text: TextInterface;

/**
 * Provides the [span]{@link ./span} type information.
 *
 * > **NOTE**
 * >
 * > The system follows the priority order below when determining the menu type to display during text interactions:
 * >
 * > 1. Check whether a menu is registered for **TextSpanType.TEXT** and **TextResponseType.LONG_PRESS**.
 * >
 * > 2. Check whether a menu is registered for **TextSpanType.TEXT** and **TextResponseType.DEFAULT**.
 * >
 * > 3. Check whether a menu is registered for **TextSpanType.DEFAULT** and **TextResponseType.LONG_PRESS**.
 * >
 * > 4. Check whether a menu is registered for **TextSpanType.DEFAULT** and **TextResponseType.DEFAULT**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextSpanType {
  /**
   * Text span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  TEXT = 0,

  /**
   * Image span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  IMAGE = 1,

  /**
   * Mixed span, which contains both text and imagery.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MIXED = 2,

  /**
   * When this type is registered but **TEXT**, **IMAGE**, or **MIXED** types are not registered, this type will be
   * triggered and displayed for those registered types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 3
}

/**
 * Response type of the menu.
 *
 * > **NOTE**
 * >
 * > The system follows the priority order below when determining the menu type to display during text interactions:
 * >
 * > 1. Check whether a menu is registered for **TextSpanType.TEXT** and **TextResponseType.LONG_PRESS**.
 * >
 * > 2. Check whether a menu is registered for **TextSpanType.TEXT** and **TextResponseType.DEFAULT**.
 * >
 * > 3. Check whether a menu is registered for **TextSpanType.DEFAULT** and **TextResponseType.LONG_PRESS**.
 * >
 * > 4. Check whether a menu is registered for **TextSpanType.DEFAULT** and **TextResponseType.DEFAULT**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextResponseType {
  /**
   * The menu is displayed when the component is right-clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RIGHT_CLICK = 0,

  /**
   * The menu is displayed when the component is long-pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LONG_PRESS = 1,

  /**
   * The menu is displayed when the component is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SELECT = 2,

  /**
   * When this type is registered but **RIGHT_CLICK**, **LONG_PRESS**, or **SELECT** types are not registered, this type
   * will be triggered and displayed for right-click, long press, mouse selection, and
   * [selection]{@link TextAttribute#selection} API calls.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 3
}

/**
 * Enumerates the return values of the marquee state callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum MarqueeState {
  /**
   * The marquee starts scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  START = 0,

  /**
   * The marquee completes one scroll movement. If the number of **loops** is not 1, this value will be returned
   * multiple times.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  BOUNCE = 1,

  /**
   * The marquee completes all specified loops or stops scrolling (for example, when **start** in
   * [TextMarqueeOptions]{@link TextMarqueeOptions} is set to **false**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  FINISH = 2
}

/**
 * Enumerates the marquee scrolling modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum MarqueeStartPolicy {
  /**
   * The marquee scrolls continuously. Default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DEFAULT = 0,

  /**
   * The marquee starts scrolling when it has focus or when the mouse hovers over it.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ON_FOCUS = 1
}

/**
 * Sets the scrolling policy of the marquee after its attributes are updated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum MarqueeUpdatePolicy {
  /**
   * Restarts the marquee from the start position after the attributes of the marquee component are updated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DEFAULT = 0,

  /**
   * Resumes the marquee from the current position after the attributes of the marquee component are updated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  PRESERVE_POSITION = 1
}

/**
 * Describes the initialization options of the **Text** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextOptions {
  /**
   * Text controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  controller: TextController;
}

/**
 * Describes the initialization options of the **Marquee** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextMarqueeOptions {
  /**
   * Whether to start the marquee.
   *
   * **true**: Start the marquee. **false**: Do not start the marquee.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start: boolean;

  /**
   * Step length of the scrolling animation text.
   *
   * Unit: vp
   *
   * Value range: (0, Text width]. If this parameter is set to a value less than or equal to 0, the default value is
   * used.
   *
   * Default value: **4.0** (in vp)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  step?: number;

  /**
   * Spacing between two rounds of the marquee. Unit: vp. When the unit attribute of the LengthMetrics object is
   * LengthUnit.PERCENT, the current setting does not take effect and the default value is used.
   *
   * Default value: 48.0vp
   *
   * **Atomic service API:** Since API version 23, this API can be used in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  spacing?: LengthMetrics;

  /**
   * Number of times the marquee will scroll. If the value is less than or equal to **0**, the marquee will scroll
   * continuously.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  loop?: number;

  /**
   * Whether the text scrolls from the start.
   *
   * **true** to scroll from the start, **false** to scroll in reverse.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fromStart?: boolean;

  /**
   * Time interval between scroll movements.
   *
   * The value range is [0, +∞). If the value is a negative number, the default value is used.
   *
   * Default value: **0**
   *
   * Unit: millisecond
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  delay?: number;

  /**
   * Whether to apply a fade-out effect when the text is too long.
   *
   * **true** to apply a fade-out effect when the text is too long, **false** otherwise.
   *
   * When this parameter is set to **true**: if the text content exceeds the display range, a fade-out effect is applied
   * to the edges of the partially visible text; if text is partially visible at both ends, the fade-out effect is
   * applied to both ends. The **clip** attribute is automatically locked to **true** and cannot be set to **false**.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fadeout?: boolean;

  /**
   * Policy for starting the marquee. This attribute takes effect only when **start** is set to **true**.
   *
   * Default value: **MarqueeStartPolicy.ON_FOCUS** for TVs and **MarqueeStartPolicy.DEFAULT** for other devices
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  marqueeStartPolicy?: MarqueeStartPolicy;

  /**
   * Scrolling policy of the marquee after its attributes are updated.
   *
   * This attribute takes effect when the marquee is in the playing state and the text width exceeds the width of the
   * marquee component.
   *
   * Default value: **MarqueeUpdatePolicy.DEFAULT**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  marqueeUpdatePolicy?: MarqueeUpdatePolicy;
}

/**
 * Defines the controller of the **Text** component.
 *
 * ###### Objects to Import
 *
 * ```ts
 * controller: TextController = new TextController()
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TextController {
  /**
   * Closes the custom or default text selection menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  closeSelectionMenu(): void;

  /**
   * Binds to or updates the specified styled string.
   *
   * @param { StyledString } value - Styled string.
   *     <br>**NOTE**
   *     <br>The child class [MutableStyledString]{@link MutableStyledString} of **StyledString** can also serve as the
   *     argument.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyledString(value: StyledString): void;

  /**
   * Obtains the **LayoutManager** object.
   *
   * @returns { LayoutManager } Layout manager object, which is used to obtain text layout information, including the
   *     number of lines, glyph position, line information, and character viewport rectangle.
   *     <br>**NOTE**
   *     <br>If the **TextController** component has not been bound to the **Text** component or the bound **Text**
   *     component has been destroyed or uninstalled, **undefined** will be returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutManager(): LayoutManager;

  /**
   * Sets the text selection area, which will be highlighted.
   *
   * > **NOTE**
   * >
   * > If [copyOption]{@link TextAttribute#copyOption} is set to **CopyOptions.None**, the setting of
   * > **setTextSelection** does not take effect.
   * >
   * > If [textOverflow]{@link TextAttribute#textOverflow} is set to **TextOverflow.MARQUEE**, the setting of
   * > **setTextSelection** does not take effect.
   * >
   * > If the value of **selectionStart** is greater than or equal to that of **selectionEnd**, no text will be
   * > selected. The value range is [0, textSize], where **textSize** indicates the maximum number of characters in the
   * > text content. If the value is less than 0, the value **0** will be used. If the value is greater than
   * > **textSize**, **textSize** will be used.
   * >
   * > If the selection range falls within a truncated or invisible area, selection is ignored. When **clip** is set to
   * > **false**, the text selection area beyond the parent component takes effect.
   * >
   * > On PC or 2-in-1 devices, calling **setTextSelection** does not show the menu even if **options** is set to
   * > **MenuPolicy.SHOW**.
   * >
   * > When an emoji is truncated by the selection range, the emoji is selected if its start position is within the
   * > specified text selection range.
   *
   * @param { number | undefined } selectionStart - Start position of the text selection range.
   *     <br>Value range: [0, +∞). Negative values and **undefined** are treated as **0**.
   * @param { number | undefined } selectionEnd - End position of the text selection range.
   *     <br>Value range: [0, +∞). Negative values and **undefined** are treated as **0**.
   * @param { SelectionOptions } [options] - Configuration options for text selection.
   *     <br>Default value: **MenuPolicy.DEFAULT** in **SelectionOptions**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setTextSelection(selectionStart: number | undefined, selectionEnd: number | undefined,
                   options?: SelectionOptions): void;
}