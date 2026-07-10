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
   * Text background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * Rounded corner radius of the text background.
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
   * Background style. This attribute prioritizes the value separately set for the component. If it is not set, the
   * component can inherit the settings from its parent [ContainerSpan]{@link container_span}.
   *
   * @param { TextBackgroundStyle } style - Sets the background style.<br>Default value:<br>{<br>  color:
   *     Color.Transparent,<br>  radius: 0<br>}
   * @returns { T } Attributes of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textBackgroundStyle(style: TextBackgroundStyle): T;

  /**
   * Sets the offset of the baseline. This attribute coexists with the **baselineOffset** attribute of the parent
   * component.
   *
   * @param { LengthMetrics } value - Offset of the baseline. If the value specified is a percentage, the default value
   *     is used.<br>A positive value moves the content upwards, while a negative value moves it downwards.<br>Default
   *     value: **0**<br>In the **ImageSpan**, when this parameter is set to a non-zero value, the
   *     [verticalAlign]{@link ImageSpanAttribute#verticalAlign} is fixed to **ImageSpanAlignment.BASELINE**; when this
   *     parameter is set to **0**, [verticalAlign]{@link ImageSpanAttribute#verticalAlign} must be set to
   *     **ImageSpanAlignment.BASELINE** for the baseline alignment strategy to take effect.
   * @returns { T } Attributes of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  baselineOffset(value: LengthMetrics): T;
}

/**
 * As a child of the [Text]{@link text} and [ContainerSpan]{@link container_span} components, the **Span** component is
 * used to display inline text.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 10. It can inherit attribute settings from its parent component
 * > **Text**. This means that, if an attribute is not set in this component, it takes the value (if any) of the
 * > attribute from its parent component. Only the following attributes can be inherited: **fontColor**, **fontSize**,
 * > **fontStyle**, **fontWeight**, **decoration**, **letterSpacing**, **textCase**, **fontFamily**, and **textShadow**.
 * >
 * > The [universal attributes]{@link common} are not supported. To set universal attributes, use [Text]{@link text} for
 * > configuration or use [CustomSpan]{@link CustomSpan} in the [Styled String]{@link styled_string} for custom drawing.
 * >
 * > Among [universal events]{@link common}, only
 * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)} click events and
 * > [onHover]{@link CommonMethod#onHover} hover events are supported.
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
 * Among universal events, only
 * [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)} click events and
 * [onHover]{@link CommonMethod#onHover} hover events are supported.
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
   * @param { Font } value - Text style.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font(value: Font): SpanAttribute;

  /**
   * Used to set the font of span.
   *
   * @param { Font } value - the span font size, font weight, font family and font style.
   * @param { FontConfigs } [fontConfigs] - the configuration of font.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  font(value: Font, fontConfigs?: FontConfigs): SpanAttribute;

  /**
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font color.<br>Default value: **'e6182431'**.<br>Default value for wearables:
   *     **'#c5ffffff'**
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): SpanAttribute;

  /**
   * Sets the font size.
   *
   * @param { number | string | Resource } value - Font size. If **fontSize** is of the number type, the unit fp is
   *     used. The default font size is 16 fp. For the string type, numeric string values with optional units, for
   *     example, **"10"** or **"10fp"**, are supported. Percentage values are not supported.<br>Default value on
   *     wearable devices: **15fp**.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): SpanAttribute;

  /**
   * Sets the font style.
   *
   * @param { FontStyle } value - Font style.<br>Default value: **FontStyle.Normal**
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): SpanAttribute;

  /**
   * Sets the font weight. If the value is too large, the text may be clipped depending on the font.
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings of the number type are supported, for example, **400**, **"bold"**, **"bolder"**,
   *     **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**.<br
   *     >Default value: **FontWeight.Normal**<br>The [Resource]{@link Resource} type is supported since API version 2
   *     0. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight. For the number type, the value range is
   *     [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font
   *     weight. For the string type, only strings of the number type are supported, for example, **400**, **"bold"**,
   *     **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in
   *     **FontWeight**.<br>Default value: **FontWeight.Normal**<br>The [Resource]{@link Resource} type is supported
   *     since API version 20. [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): SpanAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | ResourceStr } weight - the span font weight.
   * @param { FontWeightConfigs } [fontWeightConfigs] - the configuration of font weight.
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
   * Sets the font family.
   *
   * @param { string | Resource } value - Font family.<br>Default font: **'HarmonyOS Sans'**<br>To specify multiple
   *     fonts, separate them with commas (,), and fonts are applied in priority order. Example:
   *     **'Arial, HarmonyOS Sans'**.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): SpanAttribute;

  /**
   * Style and color of the text decorative line.
   *
   * @param { object } value - Style of the text decorative line.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The
   *     **style** parameter cannot be used in widgets. [since 7 - 11]
   * @param { DecorationStyleInterface } value - Style of the text decorative line.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The
   *     **style** parameter cannot be used in widgets. [since 12]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): SpanAttribute;

  /**
   * Sets the letter spacing. A negative value tightens the spacing; a positive value loosens the spacing, and the
   * letters are spread farther apart with the value. For the string type, numeric string values with optional units,
   * for example, **"10"** or **"10fp"**, are supported.
   *
   * @param { number | string } value - Letter spacing.<br>Unit: [fp]{@link common}<br>The [Resource]{@link Resource}
   *     type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - Letter spacing.<br>Unit: [fp]{@link common}<br>The
   *     [Resource]{@link Resource} type is supported since API version 20. [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): SpanAttribute;

  /**
   * Sets the text case.
   *
   * @param { TextCase } value - Text case.<br>Default value: **TextCase.Normal**
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): SpanAttribute;

  /**
   * Sets the line height for the text.
   *
   * @param { Length } value - Line height of the text.<br> If the value is of the number type, the unit is fp. When
   *     using the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are
   *     supported.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lineHeight(value: Length): SpanAttribute;

  /**
   * Text shadow. It supports input parameters in an array to implement multiple text shadows. This API does not work
   * with the **fill** attribute or coloring strategy.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Text shadow.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): SpanAttribute;

  /**
   * Set the font variation.
   *
   * @param { Array<FontVariation> } fontVariations - Indicates the span font variation.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations(fontVariations: Array<FontVariation>): SpanAttribute;
}

/**
 * As a child of the [Text]{@link text} and [ContainerSpan]{@link container_span} components, the **Span** component is
 * used to display inline text.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 10. It can inherit attribute settings from its parent component
 * > **Text**. This means that, if an attribute is not set in this component, it takes the value (if any) of the
 * > attribute from its parent component. Only the following attributes can be inherited: **fontColor**, **fontSize**,
 * > **fontStyle**, **fontWeight**, **decoration**, **letterSpacing**, **textCase**, **fontFamily**, and **textShadow**.
 * >
 * > The [universal attributes]{@link common} are not supported. To set universal attributes, use [Text]{@link text} for
 * > configuration or use [CustomSpan]{@link CustomSpan} in the [Styled String]{@link styled_string} for custom drawing.
 * >
 * > Among [universal events]{@link common}, only
 * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)} click events and
 * > [onHover]{@link CommonMethod#onHover} hover events are supported.
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