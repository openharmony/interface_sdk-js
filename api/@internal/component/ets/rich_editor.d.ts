/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * # Child Components
 * 
 * Not supported
 */

/**
 * Defines the deletion direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorDeleteDirection {
  /**
   * Deletes backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKWARD,

  /**
   * Deletes forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  FORWARD,
}

/**
 * Enumerates span types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorSpanType {
  /**
   * Text span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXT = 0,

  /**
   * Image span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  IMAGE = 1,

  /**
   * Mixed text and image span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIXED = 2,

  /**
   * Span of the custom layout type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BUILDER = 3,

  /**
   * When a menu of this type is registered but no TEXT, IMAGE, MIXED, or BUILDER menu is registered, the text type, 
   * image type, mixed text-image type, and custom layout type all trigger and display the menu corresponding to this 
   * type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 4,
}

/**
 * Enumerates the options for whether to retain the original style upon undo operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum UndoStyle {
  /**
   * The original style is not retained upon undo operations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CLEAR_STYLE = 0,

  /**
   * The original style is retained upon undo operations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  KEEP_STYLE = 1,
}

/**
 * Enumerates the response types of the menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum RichEditorResponseType {
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
   * When a menu of this type is registered while **RIGHT_CLICK**, **LONG_PRESS**, and **SELECT** menus are not 
   * registered, the menu will be displayed for those unregistered types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 3,
}

/**
 * Defines span position information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSpanPosition {
  /**
   * Span index.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanIndex: number;

  /**
   * Start and end positions of the span content in the **RichEditor** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanRange: [number, number];
}

/**
 * Provides text style information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextStyle {
  /**
   * Text color.
   * 
   * Default value: $r('sys.color.font_primary'). When [shaderStyle]{@link RichEditorParagraphStyle} is also set, 
   * shaderStyle takes precedence over fontColor.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Sets the font size. When Length is of the number type, the unit fp is used. Value range of the number type: (0, +∞
   * ). If the value is set to 0 or a negative value, the default value is used. The default font size is 16fp. 
   * Percentage strings are not supported.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize?: Length | number;

  /**
   * Font style.
   * 
   * Default value: **FontStyle.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * Font weight.
   * 
   * For the number type, the value ranges from 100 to 900, at an interval of 100. The default value is 400. A larger 
   * value indicates a heavier font. If the value is out of range, the default value 400 is used.
   * 
   * For the string type, only the string form of the number type value is supported, for example, "400". In addition, "
   * bold", "bolder", "lighter", "regular", and "medium" correspond to the respective enum values in FontWeight.
   * 
   * Default value: FontWeight.Normal.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * Sets the font list. Currently, the 'HarmonyOS Sans' font and [registered custom fonts]{@link @ohos.font:font} are 
   * supported. Default font: 'HarmonyOS Sans'. 
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily?: ResourceStr;

  /**
   * Style, color, and thickness of text decoration.
   * 
   * Default value of **type**: **TextDecorationType.None**
   * 
   * Default value of **color**: same as the font color
   * 
   * Default value of **style**: **TextDecorationStyle.SOLID**
   * 
   * Default value of **thicknessScale**: **1.0**
   *
   * @type { ?object } [since 10 - 11]
   * @type { ?DecorationStyleInterface } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  decoration?: DecorationStyleInterface;

  /**
   * Sets the text shadow effect.
   * 
   * Default value: undefined, which means no text shadow effect is set.
   * 
   * This API supports an array as the input parameter to implement multiple text shadows.
   * 
   * **Note:**
   * 
   * Only the shadow blur radius, color, and offset can be set. Smart color picking is not supported. 
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow?: ShadowOptions | Array<ShadowOptions>;

  /**
   * Sets the character spacing of the text. The default unit is fp. Default value: 0. When the value is negative, the 
   * text is compressed. 
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing?: number | string;

  /**
   * Sets the line height of the text.
   * 
   * Default value: if not set, the line height adapts to the font size.
   * 
   * Value range of the number type: (0, +∞). If the value is not greater than 0, the line height is not limited and 
   * adapts to the font size. For the number type, the unit is fp. Percentage strings are not supported. When the 
   * lineHeight value is smaller than the actual rendered height of the text at the current font size, the 
   * [fallbackLineSpacing]{@link RichEditorAttribute#fallbackLineSpacing} attribute takes effect. 
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight?: number | string | Resource;

  /**
   * Whether half leading is enabled.
   * 
   * **true**: Half leading is enabled. **false**: Half leading is not enabled.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading?: boolean;

  /**
   * Sets the font feature, for example, monospaced digits. If this parameter is not specified, proportional digits are 
   * used by default. Invalid characters are disregarded, and the default is preserved.
   * 
   * Format: normal | <feature-tag-value>
   * 
   * Format of **<feature-tag-value>**: <string> [ <integer> | on | off ]
   * 
   * There can be multiple **<feature-tag-value>** values, which are separated by commas (,).
   * 
   * For example, the input format for monospaced clock fonts is "ss01" on.
   * 
   * For details about the supported font features, see [Font Feature List]{@link TextAttribute#fontFeature}.
   * 
   * Font features are advanced typographic features, such as ligatures and monospace, for OpenType fonts. They are 
   * typically used in custom fonts and require the support of the font itself.
   * 
   * For more information about the font features, visit
   * [font-feature-settings property](https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop) and
   * [OpenType Features](https://sparanoid.com/lab/opentype-features/). 
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature?: string;

  /**
   * Text background style.
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
   * @since 18 dynamic
   */
  textBackgroundStyle?: TextBackgroundStyle;

  /**
   * Text stroke width. If the unit value of LengthMetrics is [PERCENT]{@link ../../../arkui/Graphics:LengthUnit}, the 
   * current setting does not take effect and is treated as 0.
   * 
   * If the value is less than 0, the text is rendered as solid; if greater than 0, the text is rendered as outline; if 
   * equal to 0, no stroke effect is applied.
   * 
   * Default value: 0.
   * 
   * Unit: follows LengthMetrics when the type is LengthMetrics, and is vp when the type is number.
   * 
   * Value range: (-∞, +∞)
   * 
   * When set together with [shaderStyle]{@link RichEditorParagraphStyle}, shaderStyle does not take effect.
   * 
   * **Atomic service API:** Since API version 23, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeWidth?: LengthMetrics | number;

  /**
   * Text stroke color.
   * 
   * Default value: follows the font color.
   * 
   * When the value is invalid, it follows the font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * Text stroke join style.
   * 
   * Default value: StrokeJoinStyle.MITER_JOIN.
   * 
   * **Atomic service API:** Since API version 26.0.0, this API is supported in atomic services.
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
 * Describes the leading margin placeholder, which dictates the distance between the left edges of the paragraph and the
 * component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface LeadingMarginPlaceholder {
  /**
   * Image content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pixelMap: PixelMap;

  /**
   * Image size, in vp by default. Percentage is not supported.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size: [Dimension, Dimension];
}

/**
 * Defines the paragraph style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphStyle {
  /**
   * Horizontal alignment of the text paragraph. 
   * 
   * Default value: **TextAlign.START**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * Paragraph indentation. When a paragraph contains only ImageSpan or BuilderSpan, this attribute does not take 
   * effect. When the parameter is of the Dimension type, setting it in percentage form is not supported, and the 
   * default unit is vp. Default value: {"size":["0.00px","0.00px"]} 
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  leadingMargin?: Dimension | LeadingMarginPlaceholder;

  /**
   * Line break rule.
   * 
   * Default value: WordBreak.BREAK_WORD.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak?: WordBreak;

  /**
   * Line break rule.
   * 
   * Default value: **LineBreakStrategy.GREEDY**
   * 
   * This parameter takes effect when **wordBreak** is not set to **breakAll**. Hyphens are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy?: LineBreakStrategy;

  /**
   * Paragraph spacing.
   * 
   * Unit: fp
   * 
   * Value range: [0, +∞). If a negative value is passed in, the default value is used.
   * 
   * The default paragraph spacing is 0.
   * 
   * **Atomic service API:** Since API version 19, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  paragraphSpacing?: number;

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
   * Default value: undefined, which means no shader effect is set.
   * 
   * When this API is set together with strokeWidth in [RichEditorTextStyle]{@link RichEditorTextStyle}, this API does 
   * not take effect, and shaderStyle has a higher priority than fontColor in 
   * [RichEditorTextStyle]{@link RichEditorTextStyle}.
   * 
   * **Atomic service API:** Since API version 26.0.0, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle?: ShaderStyle;
}

/**
 * Defines a user paste event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PasteEvent {
  /**
   * Prevents the system default paste event.
   * 
   * When omitted, the system default paste behavior is executed.
   *
   * @type { ?function } [since 11 - 11]
   * @type { ?Callback<void> } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  preventDefault?: Callback<void>;
}

/**
 * Defines text span information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpan {
  /**
   * Span position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * Text span content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: string;

  /**
   * Text span style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: RichEditorTextStyle;
}

/**
 * Defines image layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface RichEditorLayoutStyle {
  /**
   * Margin type, used to describe the margins of a component in different directions.
   * 
   * Default value: the margins in all four directions are 0.
   * 
   * When the parameter is of the Dimension type, the margins in all four directions take effect simultaneously.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  margin?: Dimension | Margin;

  /**
   * Border radius type, used to describe the border radius of a component.
   * 
   * Default value: the border radius is 0.
   * 
   * When the parameter is of the Dimension type, setting it in Percentage form is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  borderRadius?: Dimension | BorderRadiuses;
}

/**
 * Image style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanStyle {
  /**
   * Width and height of the image, in vp by default. Default value: related to the value of objectFit. Different 
   * objectFit values have different default sizes. When objectFit is set to Cover, the image height is the component 
   * height minus the top and bottom padding of the component, and the image width is the component width minus the left
   * and right padding of the component. Setting the size in percentage is not supported.  
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: [Dimension, Dimension];

  /**
   * Vertical alignment mode of the image.
   * 
   * Default value: ImageSpanAlignment.BOTTOM 
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * Image scaling type.
   * 
   * Default value: ImageFit.Cover.  
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit?: ImageFit;

  /**
   * Image layout style. Default value: {"borderRadius":"","margin":""}
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  layoutStyle?: RichEditorLayoutStyle;

  /**
   * Image resizing options.
   * 
   * **Atomic service API:** Since API version 26.1.0, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamiconly
   */
  resizable?: ResizableOptions;
}

/**
 * Sets the symbol span style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanStyle {
  /**
   * Sets the size of the SymbolSpan component. The default unit is fp.
   * 
   * Value range of the number type: (0, +∞). When set to 0, the default font size is used.
   * 
   * Default value: follows the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * Color of the symbol span.
   * 
   * Default value: depending on the rendering strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: Array<ResourceColor>;

  /**
   * Font weight of the symbol span.
   * 
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier 
   * font weight. The default value is **400**.
   * 
   * For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**, 
   * **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in 
   * **FontWeight**.
   * 
   * Default value: **FontWeight.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * Effect strategy of the symbol span.
   * 
   * Default value: **SymbolEffectStrategy.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * Rendering strategy of the symbol span.
   * 
   * Default value: **SymbolRenderingStrategy.SINGLE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  renderingStrategy?: SymbolRenderingStrategy;
}

/**
 * Provides the text span style information returned by the backend.
 * 
 * While **fontWeight** in **RichEditorTextStyle** sets the font weight,
 * 
 * **fontWeight** in **RichEditorTextStyleResult** returns the set font weight after conversion to digits.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextStyleResult {
  /**
   * Font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor: ResourceColor;

  /**
   * Font size. The default unit is fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize: number;

  /**
   * Font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontStyle: FontStyle;

  /**
   * Font weight.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight: number;

  /**
   * Font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily: string;

  /**
   * Text decoration.
   *
   * @type { object } [since 10 - 11]
   * @type { DecorationStyleResult } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  decoration: DecorationStyleResult;

  /**
   * Text shadow.
   * 
   * **NOTE**
   * 
   * Only the shadow blur radius, shadow color, and shadow offset can be queried.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textShadow?: Array<ShadowOptions>;

  /**
   * Letter spacing. The default unit is fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing?: number;

  /**
   * Line height. The default unit is fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight?: number;

  /**
   * Whether half leading is enabled.
   * 
   * **true**: Half leading is enabled. **false**: Half leading is not enabled.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading?: boolean;

  /**
   * Font feature.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature?: string;

  /**
   * Text background style.
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
   * @since 18 dynamic
   */
  textBackgroundStyle?: TextBackgroundStyle;

  /**
   * Text stroke width.
   * 
   * The unit is [vp]{@link common}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeWidth?: number;

  /**
   * Text stroke color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * Corner style of the text stroke.
   * 
   * Default value: StrokeJoinStyle.MITER_JOIN.
   * 
   * **Atomic service API:** Since API version 26.0.0, this API is supported in atomic services.
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
 * Describes the returned paragraph information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphResult {
  /**
   * Paragraph style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style: RichEditorParagraphStyle;

  /**
   * Start and end positions of the paragraph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  range: [number, number];
}

/**
 * Provides the symbol span style information returned by the backend.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanStyleResult {
  /**
   * Size of the symbol span. The default unit is fp.
   * 
   * The default value follows the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize: number | string | Resource;

  /**
   * Color of the symbol span.
   * 
   * Default value: depending on the rendering strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor: Array<ResourceColor>;

  /**
   * Weight of the symbol span.
   * 
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier 
   * font weight. The default value is **400**.
   * 
   * For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**, 
   * **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in 
   * **FontWeight**.
   * 
   * Default value: **FontWeight.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight: number | FontWeight | string;

  /**
   * Effect strategy of the symbol span.
   * 
   * Default value: **SymbolEffectStrategy.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy: SymbolEffectStrategy;

  /**
   * Rendering strategy of the symbol span.
   * 
   * Default value: **SymbolRenderingStrategy.SINGLE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  renderingStrategy: SymbolRenderingStrategy;
}

/**
 * Defines text span information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpanResult {
  /**
   * Span position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * Content of the text span or symbol ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: string;

  /**
   * Text span style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle: RichEditorTextStyleResult;

  /**
   * Start and end positions of the valid content in the text span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offsetInSpan: [number, number];

  /**
   * Style of the **SymbolSpan** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  symbolSpanStyle?: RichEditorSymbolSpanStyle;

  /**
   * SymbolSpan resource content.
   * 
   * Default value: undefined.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  valueResource?: Resource;

  /**
   * Paragraph style.
   * 
   * If omitted, the system default paragraph style is used.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * Content of the preview text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  previewText?: string;

  /**
   * URL information.
   * 
   * Default value: undefined.
   * 
   * Pass this parameter when a hyperlink style needs to be set for the text.
   * 
   * **Atomic service API:** Since API version 19, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  urlStyle?: RichEditorUrlStyle;
}

/**
 * Provides the image span style information returned by the backend.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanStyleResult {
  /**
   * Width and height of the image, in px. Default value depends on the **objectFit** setting. If the value of 
   * **objectFit** is **Cover**, the image height is the component height minus the top and bottom paddings, and the 
   * image width is the component width minus the left and right paddings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size: [number, number];

  /**
   * Vertical alignment mode of the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign: ImageSpanAlignment;

  /**
   * Scale mode of the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit: ImageFit;

  /**
   * Image layout style.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutStyle?: RichEditorLayoutStyle;

  /**
   * Image resizing options.
   * 
   * **Atomic service API:** Since API version 26.1.0, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamiconly
   */
  resizable?: ResizableOptions;
}

/**
 * Provides the image information returned by the backend.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanResult {
  /**
   * Span position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * Image content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valuePixelMap?: PixelMap;

  /**
   * Image resource ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valueResourceStr?: ResourceStr;

  /**
   * Image style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle: RichEditorImageSpanStyleResult;

  /**
   * Start and end positions of the image in the span.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offsetInSpan: [number, number];
}

/**
 * Image span information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpan {
  /**
   * Span position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * Image content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: PixelMap | ResourceStr;

  /**
   * Image style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle?: RichEditorImageSpanStyle;
}

/**
 * Defines the range of the **RichEditor**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorRange {
  /**
   * Start position of the text. If this parameter is omitted or set to a negative value, the start position is 0.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  start?: number;

  /**
   * End position of the text. If this parameter is omitted or exceeds the text range, the end position is infinite.
   *
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  end?: number;
}

/**
 * Defines a user gesture event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorGesture {
  /**
   * Triggered when a click event occurs.
   * 
   * It is executed on completion of a single click.
   * 
   * For a double-click scenario, the first click triggers this callback.
   *
   * @type { ?function } [since 11 - 11]
   * @type { ?Callback<ClickEvent> } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClick?: Callback<ClickEvent>;

  /**
   * Triggered when a long press event occurs.
   * 
   * It is executed on completion of a long press.
   *
   * @type { ?function } [since 11 - 11]
   * @type { ?Callback<GestureEvent> } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onLongPress?: Callback<GestureEvent>;

  /**
   * Callback for the double-click event, triggered when the user completes a double-click operation. The callback 
   * parameter is a [GestureEvent]{@link GestureEvent} object that contains gesture event information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onDoubleClick?: Callback<GestureEvent>;
}

/**
 * Defines the options for adding a text span.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpanOptions {
  /**
   * Position of the text span to be added. If this parameter is omitted, the span is added to the end of all content.
   * 
   * If the value specified is less than 0, the span is placed at the beginning of all content. If the value is greater 
   * than the length of all content, the span is placed at the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: number;

  /**
   * Text style information. Pass this parameter when custom styles such as text color, font size, and font weight need 
   * to be set. If omitted, the system default text information is used.     
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: RichEditorTextStyle;

  /**
   * Paragraph style. Pass this parameter when paragraph-level layout properties such as text alignment, indentation, 
   * and line breaking rules need to be set. If not passed, the system default paragraph style (left-aligned, no 
   * indentation, word-based line breaking) is used.                     
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * Behavior trigger callback. Pass this parameter when the tap or long-press interaction behavior of a text span needs
   * to be customized. If omitted, only the system default behavior is used.      
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  gesture?: RichEditorGesture;

  /**
   * URL information.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  urlStyle?: RichEditorUrlStyle;
}

/**
 * Whether to support keyboard avoidance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface KeyboardOptions {
  /**
   * Whether to support keyboard avoidance. **true** to support, **false** otherwise. Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  supportAvoidance?: boolean;
}

/**
 * Sets the offset and style of an image span.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanOptions {
  /**
   * Position of the image span to be added. If this parameter is omitted, the span is added to the end of all content.
   * 
   * If the value specified is less than 0, the span is placed at the beginning of all content. If the value is greater 
   * than the length of all content, the span is placed at the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: number;

  /**
   * Image style information. Pass this parameter when you need to customize the image size, vertical alignment mode, 
   * scaling type, and other styles. If this parameter is omitted, the default image style of the system is used.     
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle?: RichEditorImageSpanStyle;

  /**
   * Gesture event that triggers a callback. If this parameter is omitted, only the default system behavior is 
   * supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  gesture?: RichEditorGesture;

  /**
   * Callback triggered when the mouse hovers over the component. If this parameter is omitted, the mouse hover callback
   * behavior is not executed.     
   * 
   * **Atomic service API:** Since API version 14, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onHover?: OnHoverCallback;
}

/**
 * Sets the offset position and style of the inserted builder.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorBuilderSpanOptions {
  /**
   * Position to add the builder. Value range: [0, total content length]. If omitted or if the value is less than 0 or 
   * greater than the total content length, it is added to the end of all content.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * Sets the background color of the backboard when a BuilderSpan is dragged individually. If this parameter is not 
   * configured or an invalid color value is passed, the default value is used.
   * 
   * Default value: the drag backboard color that follows the system theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  dragBackgroundColor? : ColorMetrics;

  /**
   * Sets whether a shadow is needed when a BuilderSpan is dragged individually. The value **true** means that a shadow 
   * is needed, and **false** means that a shadow is not needed. If this parameter is not configured or an invalid value
   * is passed, the default value is used.
   * 
   * Default value: **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  isDragShadowNeeded?: boolean;

  /**
   * Accessibility settings. By default, the default value of [AccessibilitySpanOptions]{@link AccessibilitySpanOptions}
   * is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilitySpanOptions?: AccessibilitySpanOptions;
}

/**
 * Defines the identity and position information of a BuilderSpan in **RichEditor**.
 *
 * > **NOTE**
 * >
 * > This interface is not supported when the **RichEditor** component is constructed with
 * > [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare interface BuilderSpanInfo {
  /**
   * Developer-defined tracking identifier for tracking BuilderSpan. The framework does not enforce uniqueness constraints;
   * developers are responsible for ensuring uniqueness.
   * When not provided, the value is **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  id?: string;

  /**
   * Current offset position of the BuilderSpan in the text content.
   * This value is maintained by the framework and dynamically updated as text content changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  offset?: number;
}

/**
 * Defines the BuilderSpan object of **RichEditor**, providing identity recognition and lifecycle awareness capabilities.
 *
 * > **NOTE**
 * >
 * > This interface is not supported when the **RichEditor** component is constructed with
 * > [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare interface RichEditorBuilderSpan {
  /**
   * Custom component builder.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  builder: CustomBuilder;

  /**
   * Callback triggered when the BuilderSpan is attached to **RichEditor**.
   * The callback receives a [BuilderSpanInfo]{@link BuilderSpanInfo} object containing the id and offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  onAttach?: Callback<BuilderSpanInfo>;

  /**
   * Callback triggered when the BuilderSpan is removed from **RichEditor**.
   * This includes deletion scenarios such as deletion via deleteSpans API, IME keyboard deletion, cut operations,
   * and normal Undo degradation.
   * The callback receives a [BuilderSpanInfo]{@link BuilderSpanInfo} object containing the id and offset.
   *
   * > **NOTE**
   * >
   * > In drag undo (undoStyle=KEEP_STYLE) scenarios, the onDetach callback is not triggered
   * > because the BuilderSpan is being restored rather than deleted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  onDetach?: Callback<BuilderSpanInfo>;

  /**
   * Accessibility reading feature. When omitted, the default value of
   * [AccessibilitySpanOptions]{@link AccessibilitySpanOptions} is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  accessibilitySpanOptions?: AccessibilitySpanOptions;
}

/**
 * Sets the style of the placeholder text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PlaceholderStyle {
  /**
   * Sets the prompt text style.
   * 
   * The default value follows the theme settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  font?: Font;

  /**
   * Sets the prompt text color.
   * 
   * The default value follows the theme settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;
}

/**
 * Defines the text span style options.
 * 
 * Inherits [RichEditorRange]{@link RichEditorRange}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSpanStyleOptions extends RichEditorRange { }

/**
 * Defines the paragraph style options.
 * 
 * Inherits [RichEditorRange]{@link RichEditorRange}.
 * 
 * > **NOTE**
 * >
 * > Scope of the API: the paragraphs covered by the specified range, that is, the paragraph where the range starts, the
 * > paragraph where the range ends, and all paragraphs in between.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
  /**
   * Paragraph style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style: RichEditorParagraphStyle;
}

/**
 * Defines the text span style options.
 * 
 * Inherits [RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * Text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle: RichEditorTextStyle;

  /**
   * URL information.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  urlStyle?: RichEditorUrlStyle;
}

/**
 * Defines the image span style options.
 * 
 * Inherits [RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * Image style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle: RichEditorImageSpanStyle;
}

/**
 * Defines the symbol span style options.
 * 
 * Inherits [RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * Style information of the SymbolSpan.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  symbolStyle: RichEditorSymbolSpanStyle;
}

/**
 * Sets the offset and style of the **SymbolSpan** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanOptions {
  /**
   * Position at which the SymbolSpan is added. If omitted, it is added to the end of all content.
   * 
   * If the value is less than 0, it is added to the beginning of all content; if the value is greater than the length 
   * of all content, it is added to the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * Style information of the SymbolSpan. Pass this parameter when you need to customize the color, size, weight, 
   * rendering policy, and other styles of the SymbolSpan; if omitted, the system default style information is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: RichEditorSymbolSpanStyle;
}

/**
 * Defines information about the selected content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSelection {
  /**
   * Range of the selection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selection: [number, number];

  /**
   * Span information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Defines information about the text to be inserted.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorInsertValue {
  /**
   * Offset of the text to be inserted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  insertOffset: number;

  /**
   * Content of the text to be inserted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  insertValue: string;

  /**
   * Preview text content to be inserted.
   * 
   * Default value: empty string.
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  previewText?: string;
}

/**
 * Defines information about the deletion operation and the content to be deleted.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorDeleteValue {
  /**
   * Offset of the content to be deleted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset: number;

  /**
   * Direction of the delete operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  direction: RichEditorDeleteDirection;

  /**
   * Length of the content to be deleted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  length: number;

  /**
   * Information about the text or image spans to be deleted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Defines image and text change information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RichEditorChangeValue {
  /**
   * Start and end indexes of the content to be replaced.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rangeBefore: TextRange;

  /**
   * Information about the text span after the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedSpans: Array<RichEditorTextSpanResult>;

  /**
   * Information about the image span after the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedImageSpans: Array<RichEditorImageSpanResult>;

  /**
   * Information about the symbol span after the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedSymbolSpans: Array<RichEditorTextSpanResult>;

  /**
   * Reason for the component content change, used to identify the operation type that triggers the content change (such
   * as user input, paste, cut, and so on). It must be obtained by registering the onWillChange callback. Developers can
   * make corresponding processing decisions for different change reasons in the onWillChange callback based on the 
   * value of changeReason. The default value of this field is undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  changeReason?: TextChangeReason;
}

/**
 * Defines the options for initializing the **RichEditor** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorOptions {
  /**
   * Controller for the **RichEditor** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: RichEditorController;
}

/**
 * Defines the options for initializing the **RichEditor** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RichEditorStyledStringOptions {
  /**
   * Controller for the **RichEditor** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  controller: RichEditorStyledStringController;
}

/**
 * Sets menu options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SelectionMenuOptions {
  /**
   * Callback invoked when the custom selection menu is displayed. If custom logic needs to be executed when the menu is
   * displayed (for example, recording user operations or dynamically adjusting menu content), this parameter can be 
   * passed; if it is not passed, no additional callback is triggered.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @type { ?function } [since 10 - 11]
   * @type { ?MenuOnAppearCallback } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAppear?: MenuOnAppearCallback;

  /**
   * Callback invoked when the custom selection menu is closed. If custom logic needs to be executed when the menu is 
   * closed (for example, restoring the UI state or clearing temporary data), this parameter can be passed; if it is not
   * passed, no additional callback is triggered.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @type { ?function } [since 10 - 11]
   * @type { ?Callback<void> } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * Type of the custom context menu on selection.
   * 
   * Default value: **MenuType.SELECTION_MENU**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  menuType?: MenuType;

  /**
   * Callback invoked when the custom selection menu is shown. If custom logic needs to be executed when the menu is 
   * shown, this parameter can be passed; if it is not passed, no callback is triggered.
   * 
   * **Atomic service API:** Since API version 15, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuShow?: MenuCallback;

  /**
   * Callback invoked when the custom selection menu is hidden. If custom logic needs to be executed when the menu is 
   * hidden, this parameter can be passed; if it is not passed, no callback is triggered.
   * 
   * **Atomic service API:** Since API version 15, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuHide?: MenuCallback;

  /**
   * Options of the preview menu. This parameter takes effect only in RichEditor.
   * 
   * Since API version 26.0.0, this parameter also takes effect in the Text component.
   * 
   * If this parameter is not passed, the preview menu uses the default configuration.
   * 
   * **Atomic service API:** Since API version 18, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  previewMenuOptions?: PreviewMenuOptions;
}

/**
 * Defines the options of the preview menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare interface PreviewMenuOptions {
  /**
   * Vibration effect when the menu pops up. It takes effect when an ImageSpan or BuilderSpan is bound to a preview 
   * menu.
   * 
   * Default value: HapticFeedbackMode.DISABLED, which means no vibration when the menu pops up.
   * 
   * **Note:** It takes effect only when the application has the ohos.permission.VIBRATE permission, the user has 
   * enabled haptic feedback, and the system hardware supports it.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  hapticFeedbackMode? : HapticFeedbackMode;
}

/**
 * Represents the base class of the **RichEditor** component controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class RichEditorBaseController implements TextEditControllerEx {
  /**
   * Obtains the current caret position.
   * 
   * If the caret position cannot be obtained (for example, when the controller is not bound to the component), the 
   * return value is **-1**.
   *
   * @returns { number } Position of the caret.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getCaretOffset(): number;

  /**
   * Sets the caret position.
   * 
   * When the controller is not bound to a component or the component bound to the controller is released, this API 
   * returns false and the setting fails.
   *
   * @param { number } offset - Offset of the caret. If it exceeds the range of all content, the setting will fail.
   * @returns { boolean } Whether the caret offset is set successfully.
   *     <br>**true** if the caret offset is set successfully; **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setCaretOffset(offset: number): boolean;

  /**
   * Closes the custom selection menu or the system default selection menu.
   * 
   * When the controller is not bound to a component or the component bound to the controller is released, this API call
   * does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  closeSelectionMenu(): void;

  /**
   * Obtains the preset text style of a user.
   *
   * @returns { RichEditorTextStyle } A user-preset text input style object that contains style attributes such as font
   *     color, size, and weight. It can be used to query the input text style configuration of the current component.
   *     <br>When the controller is not bound to a component, or the component bound to the controller is released,
   *     undefined is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getTypingStyle(): RichEditorTextStyle;

  /**
   * Sets the preset typing style.
   * 
   * When the controller is not bound to a component or the component bound to the controller is released, this API call
   * does not take effect.
   *
   * @param { RichEditorTextStyle } value - Preset text input style, including font color, size, weight, and other
   *     attributes, used to set the default style for subsequently input text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setTypingStyle(value: RichEditorTextStyle): void;

  /**
   * Sets the user-preset paragraph style. It takes effect only when the component content is empty or text is entered 
   * after a line break at the end of the component. When the controller is not bound to a component or the component 
   * bound to the controller is released, this API call does not take effect.
   *
   * @param { RichEditorParagraphStyle } style - Preset paragraph style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  setTypingParagraphStyle(style: RichEditorParagraphStyle): void;

  /**
   * Selects the content in the component, and the backplate of the selected part is highlighted.
   * 
   * If both **selectionStart** and **selectionEnd** are set to **-1**, all content is selected. If both 
   * **selectionStart** and **selectionEnd** are set to **0**, the current selection is cleared.
   * 
   * If this API is called when the text box is not focused, the selected effect is not displayed.
   * 
   * Since API version 12, on PC/2-in-1 devices (which can be determined by obtaining the device type through 
   * deviceInfo.deviceType), calling setSelection does not pop up a menu regardless of the value of options. If a menu 
   * already exists in the component, calling setSelection closes the menu. On non-PC/2-in-1 devices, when options is 
   * set to MenuPolicy.DEFAULT, the following rules apply:
   * 
   * 1. If the component has a selection handle menu, calling the API will not close the menu,
   * and the menu position will be adjusted.
   * 2. If the component has a menu without a selection handle, calling the API will not
   * close the menu, and the menu position will remain unchanged.
   * 3. If there is no menu within the component, calling the API will not display the menu.
   *
   * @param { number } selectionStart - Start position of the selection.
   * @param { number } selectionEnd - End position of the selection.
   * @param { SelectionOptions } [options] - Selection option configuration, used to control the menu popup policy
   *     during selection operations.
   *     <br>Pass this parameter when you need to customize the menu popup behavior (such as forcing the menu to show or
   *     hide);
   *     <br>when omitted, MenuPolicy.DEFAULT is used by default, following the system default menu popup policy.
   *     <br>For the applicable scenarios of each MenuPolicy value, see the SelectionOptions object
   *     description. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Obtains the current editing state of the rich text. If the controller is not bound to a component or the component 
   * bound to the controller is released, false is returned.
   *
   * @returns { boolean } true indicates the editing state, and false indicates the non-editing state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEditing(): boolean;

  /**
   * Exits the editing state.
   * 
   * If the controller is not bound to a component or the component bound to the controller is released, this API call 
   * does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stopEditing(): void;

  /**
   * Obtains the **LayoutManager** object.
   *
   * @returns { LayoutManager } Layout manager object, which can be used to obtain information such as the layout
   *     position of the component content.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutManager(): LayoutManager;

  /**
   * Obtains the preview text.
   *
   * @returns { PreviewText } Preview text information, including the candidate text content pre-displayed by the input
   *     method and its start position.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviewText(): PreviewText;

  /**
   * Scrolls the content in the specified range into the visible area.
   *
   * @param { TextRange } [range] - Content range to scroll into the visible area, including the start position and end
   *     position of the content.
   *     <br>The start position must be less than or equal to the end position; otherwise, the API call does not take
   *     effect. A start position less than 0 is treated as 0, and an end position greater than the total text length is
   *     treated as the total text length.
   *     <br>If no range is specified, all content is used by default. If no start position is specified, the start
   *     position defaults to 0; if no end position is specified, the end position defaults to the total text length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollToVisible(range?: TextRange): void;

  /**
   * Returns the position of the current caret relative to the RichEditor component. If the caret does not blink or the 
   * controller is not bound to a component, undefined is returned.
   *
   * @returns { RectResult | undefined } Relative position of the caret in the **RichEditor** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getCaretRect(): RectResult | undefined;

  /**
   * Deletes the character before the caret or the selected content. If no content is selected, one character before the
   * current caret position is deleted. If content is selected, the selected content is deleted.
   * 
   * This API is not supported in preview display scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  deleteBackward(): void;

  /**
   * Sets the placeholder text of the styled string when there is no input.
   *
   * @param { StyledString } styledString - Sets the placeholder text of the styled string. It takes higher priority
   *     than the placeholder text set by the [placeholder]{@link RichEditorAttribute#placeholder} attribute.
   *     <br>The placeholder text does not support gesture events bound to the [GestureStyle]{@link GestureStyle} of the
   *     styled string, or hyperlink navigation provided by [UrlStyle]{@link UrlStyle}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  setStyledPlaceholder(styledString: StyledString): void;
}

/**
 * Implements the **RichEditor** component controller. Inherits from 
 * [RichEditorBaseController]{@link RichEditorBaseController}.
 * 
 * > **NOTE**
 * >
 * > When the content length exceeds the height of the component's display area, the insertion APIs (such as 
 * > [addTextSpan]{@link RichEditorController#addTextSpan}, [addImageSpan]{@link RichEditorController#addImageSpan}, 
 * > [addBuilderSpan]{@link RichEditorController#addBuilderSpan}, and 
 * > [addSymbolSpan]{@link RichEditorController#addSymbolSpan}) are called. The component automatically scrolls to keep 
 * > the end of the inserted content visible.
 * 
 * ###### Objects to Import
 * 
 * ```ts
 * controller: RichEditorController = new RichEditorController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class RichEditorController extends RichEditorBaseController {
  /**
   * Adds text content. If the component cursor is blinking, the cursor position is updated to after the newly inserted 
   * text after insertion. When the controller is not bound to a component or the component bound to the controller is 
   * released, this API call does not take effect.
   *
   * @param { ResourceStr } content - Text content.
   *     <br>The Resource type is supported since API version 20. [since 20]
   * @param { RichEditorTextSpanOptions } [options] - Text options.
   *     <br>Pass this parameter when you need to set information such as the offset position, text style, and paragraph
   *     style. If this parameter is not passed, the text is inserted at the end of the content using the default style.
   * @returns { number } Index of the added **TextSpan** among all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number;

  /**
   * Adds image content. If the component cursor is blinking, the cursor position is updated to after the newly inserted
   * image after insertion. When the controller is not bound to a component or the component bound to the controller is 
   * released, this API call does not take effect.
   * 
   * This API is a synchronous API. Adding network images directly under poor network conditions may block the UI thread
   * and result in screen freezing. To avoid potential loading issues, do not directly add a network image.
   *
   * @param { PixelMap | ResourceStr } value - Image content.
   * @param { RichEditorImageSpanOptions } [options] - Image options.
   *     <br>Pass this parameter when you need to set the image style, offset position, or paragraph style; if it is not
   *     passed, the image is inserted at the end of the content using the default style.
   * @returns { number } Index of the added **ImageSpan** among all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * Adds a custom layout (**BuilderSpan**) to **RichEditor**.
   * 
   * > **NOTE**
   * >
   * > - When a placeholder span is added to the **RichEditor** component, the placeholder span calls the system 
   * > **measure** method to calculate its actual width, height, and position.
   * >
   * > - You can use [RichEditorBuilderSpanOptions]{@link RichEditorBuilderSpanOptions} to set the index of this builder
   * > in **RichEditor** (one character counts as one unit).
   * >
   * > - This placeholder span cannot be focused, supports dragging, and supports some universal attributes. Its 
   * > placeholder and deletion capabilities are equivalent to those of **ImageSpan**, and its length is regarded as one
   * > character.
   * >
   * > - You can set a custom menu through [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu}.
   * >
   * > - The **builderSpan** information cannot be obtained through [getSpans]{@link RichEditorController#getSpans}, 
   * > [getSelection]{@link RichEditorController#getSelection}, [onSelect]{@link RichEditorAttribute#onSelect}, or 
   * > [aboutToDelete]{@link RichEditorAttribute#aboutToDelete}.
   * >
   * > - The builder cannot be updated through [updateSpanStyle]{@link RichEditorController#updateSpanStyle} or 
   * > [updateParagraphStyle]{@link RichEditorController#updateParagraphStyle}.
   * >
   * > - Copying or pasting this builder node does not take effect.
   * >
   * > - The layout constraints of the builder are passed in by **RichEditor**. If the outermost component in the 
   * > builder does not have its size set, the size of **RichEditor** is used as the maxSize.
   * >
   * > - The gesture-related event mechanism of the builder is the same as that of universal gesture events. If pass-
   * > through is not set in the builder, only the child components in the builder respond.
   * >
   * > - If the component cursor is blinking, the cursor position is updated to after the newly inserted builder after 
   * > insertion.
   * >
   * > - For the node text of [addBuilderSpan]{@link RichEditorController#addBuilderSpan}, the 
   * > [enableDataDetector]{@link RichEditorAttribute#enableDataDetector}, 
   * > [dataDetectorConfig]{@link RichEditorAttribute#dataDetectorConfig}, and 
   * > [enableSelectedDataDetector]{@link RichEditorAttribute#enableSelectedDataDetector} functions do not take effect.
   * > Only the following universal attributes are supported: [size]{@link CommonMethod#size}, 
   * > [padding]{@link CommonMethod#padding}, [margin]{@link CommonMethod#margin}, 
   * > [aspectRatio]{@link CommonMethod#aspectRatio}, [borderStyle]{@link CommonMethod#borderStyle}, 
   * > [borderWidth]{@link CommonMethod#borderWidth}, [borderColor]{@link CommonMethod#borderColor}, 
   * > [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}, 
   * > [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * > options?: BackgroundBlurStyleOptions)},
   * > [opacity]{@link ./common}, [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}, 
   * > [backdropBlur]{@link CommonMethod#backdropBlur(value: number, options?: BlurOptions)}, 
   * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}, 
   * > [grayscale]{@link CommonMethod#grayscale(value: number)}, 
   * > [brightness]{@link CommonMethod#brightness(value: number)}, 
   * > [saturate]{@link CommonMethod#saturate(value: number)}, [contrast]{@link CommonMethod#contrast(value: number)}, 
   * > [invert]{@link CommonMethod#invert(value: number | InvertOptions)}, 
   * > [sepia]{@link CommonMethod#sepia(value: number)}, 
   * > [hueRotate]{@link CommonMethod#hueRotate(value: number | string)}, 
   * > [colorBlend]{@link CommonMethod#colorBlend(value: Color | string | Resource)}, 
   * > [linearGradientBlur]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)}, 
   * > [clip]{@link CommonMethod#clip(value: boolean)}, [mask]{@link CommonMethod#mask(value: ProgressMask)}, 
   * > [foregroundBlurStyle]{@link CommonMethod#foregroundBlurStyle(value: BlurStyle,
   * > options?: ForegroundBlurStyleOptions)},
   * > [accessibilityGroup]{@link CommonMethod#accessibilityGroup(value: boolean)}, 
   * > [accessibilityText]{@link CommonMethod#accessibilityText(value: string)}, 
   * > [accessibilityDescription]{@link CommonMethod#accessibilityDescription(value: string)}, 
   * > [accessibilityLevel]{@link CommonMethod#accessibilityLevel}, 
   * > [sphericalEffect]{@link CommonMethod#sphericalEffect(value: number)}, 
   * > [lightUpEffect]{@link CommonMethod#lightUpEffect(value: number)}, 
   * > [pixelStretchEffect]{@link CommonMethod#pixelStretchEffect(options: PixelStretchEffectOptions)}.
   *
   * @param { CustomBuilder } value - Custom layout content, used to create a BuilderSpan placeholder component in
   *     RichEditor.
   * @param { RichEditorBuilderSpanOptions } [options] - Builder options. Pass this parameter when you need to set the
   *     offset position or accessibility attributes of the builder; when omitted, the builder is added to the end of
   *     all content.
   * @returns { number } Index of the added **builderSpan** among all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number;

  /**
   * Adds a custom layout (BuilderSpan) in **RichEditor**, providing identity recognition
   * and lifecycle awareness capabilities.
   *
   * > **NOTE**
   * >
   * > - The [onAttach]{@link RichEditorBuilderSpan#onAttach} and
   * > [onDetach]{@link RichEditorBuilderSpan#onDetach} callbacks in the BuilderSpan object receive a
   * > [BuilderSpanInfo]{@link BuilderSpanInfo} object containing the span's id and offset.
   * >
   * > - This interface is not supported when the **RichEditor** component is constructed with
   * > [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}.
   * >
   * > - Undo/redo does not restore BuilderSpan objects. When restored via undo, removed BuilderSpans
   * > degrade to whitespace text Spans.
   *
   * @param { RichEditorBuilderSpan } value - BuilderSpan object, containing the builder, lifecycle callbacks,
   *     and accessibility configuration.
   * @param { BuilderSpanInfo } [info] - Identity and position information of the BuilderSpan. **info.id** is used
   *     to identify the BuilderSpan, **info.offset** specifies the insertion position. When omitted, the
   *     BuilderSpan is appended to the end with id as **undefined**.
   * @returns { number } Index position of the added BuilderSpan among all Spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  addRichEditorBuilderSpan(value: RichEditorBuilderSpan, info?: BuilderSpanInfo): number;

  /**
   * Adds an icon symbol (**SymbolSpan**) to **RichEditor**. If the component cursor is blinking, the cursor position is
   * updated to after the newly inserted **SymbolSpan** after insertion.
   * 
   * **SymbolSpan** does not support gestures, copy operations, or drag processing.
   *
   * @param { Resource } value - Reference to the SymbolSpan icon resource, used to specify a system preset or custom
   *     Symbol icon.
   * @param { RichEditorSymbolSpanOptions } [options] - Symbol options.
   *     <br>Pass this parameter when you need to set the offset position or style of the SymbolSpan; if it is not
   *     passed, the SymbolSpan is inserted at the end of the content with the default style.
   * @returns { number } Index of the added **SymbolSpan** among all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number;

  /**
   * Updates the style of text, images, or **SymbolSpan**.
   * 
   * If only part of a span is updated, the span is split into multiple spans based on the updated part and the 
   * unupdated part. When the controller is not bound to a component or the component bound to the controller is 
   * released, this API call does not take effect.
   * 
   * Calling this API will not close the custom context menu on selection by default.
   *
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions } value - Style options of
   *     the text, image, or symbol span. [since 10 - 10]
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
   *     RichEditorUpdateSymbolSpanStyleOptions } value - Style options of the text, image, or symbol span. [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void;

  /**
   * Updates the paragraph style.
   *
   * @param { RichEditorParagraphStyleOptions } value - Paragraph style options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;

  /**
   * Deletes the text and images within the specified range. This API does not take effect when the controller is not 
   * bound to a component or the component bound to the controller is released.
   *
   * @param { RichEditorRange } [value] - Range of the target spans. If this parameter is omitted, all text and image
   *     spans are deleted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  deleteSpans(value?: RichEditorRange): void;

  /**
   * Obtains span information.
   *
   * @param { RichEditorRange } [value] - Range of the span to obtain.
   *     <br>If omitted, information about all spans is obtained.
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> } Detailed information about the text and
   *     image spans within the specified range, including the position, content, style, and other attributes of each
   *     span. It can be used to query and manipulate the text and image content in the component.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;

  /**
   * Obtains the identity and position information of BuilderSpans within the specified range.
   *
   * > **NOTE**
   * >
   * > - This interface is not supported when the **RichEditor** component is constructed with
   * > [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}.
   * >
   * > - BuilderSpans created via the legacy [addBuilderSpan]{@link RichEditorController#addBuilderSpan}
   * > interface have **undefined** as their id (anonymous) in the returned
   * > [BuilderSpanInfo]{@link BuilderSpanInfo}.
   * >
   * > - The **offset** field in the returned [BuilderSpanInfo]{@link BuilderSpanInfo} reflects the current
   * > actual offset position and is dynamically updated as text content changes.
   *
   * @param { RichEditorRange } [value] - Range of target BuilderSpans.
   *     <br>When omitted, returns all BuilderSpan information.
   * @returns { Array<BuilderSpanInfo> } Array of BuilderSpan identity and position information.
   *     <br>Returns **undefined** when the controller is not bound to a component or the component bound
   *     to the controller is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  getRichEditorBuilderSpans(value?: RichEditorRange): Array<BuilderSpanInfo>;

  /**
   * Obtains the paragraph information within a specified range.
   *
   * @param { RichEditorRange } [value] - Range of the paragraph to obtain.
   *     <br>If omitted, information about all paragraphs is obtained.
   * @returns { Array<RichEditorParagraphResult> } Paragraph information within the selection range, including the style
   *     and start/end positions of each paragraph. It can be used to query paragraph layout attributes or update
   *     paragraph styles.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>;

  /**
   * Obtains the range and span information of the selection. If no text is selected, this API returns the information 
   * about the span where the caret is located.
   *
   * @returns { RichEditorSelection } Detailed information about the start and end positions of the selection range and
   *     the selected text and images.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getSelection(): RichEditorSelection;

  /**
   * Converts a styled string to a span.
   *
   * @param { StyledString } value - Styled string before conversion.
   * @returns { Array<RichEditorSpan> } Text and image span information obtained after parsing the styled string. It can
   *     be used to query the content, style, and position of each span in the styled string.
   *     <br>Returns undefined when the controller is not bound to a component or the component bound to the controller
   *     is released.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fromStyledString(value: StyledString): Array<RichEditorSpan>;

  /**
   * Converts the component content within the given range to a styled string. **SymbolSpan** and **BuilderSpan** cannot
   * be converted.
   *
   * @param { RichEditorRange } value - Source range.
   * @returns { StyledString } Styled string obtained after converting the content in the specified range of the
   *     component. It can be used to transfer rich text content across components or perform style editing operations.
   *     <br>If the controller is not bound to a component or the component bound to the controller is released,
   *     **undefined** is returned.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  toStyledString(value: RichEditorRange): StyledString;
}

/**
 * Provides the span information of the **RichEditor** component.
 *
 * @unionmember { RichEditorImageSpanResult } Returned image information.
 * @unionmember { RichEditorTextSpanResult } Describes the returned text information.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;

/**
 * # Objects to Import
 * 
 * ```ts
 * controller: RichEditorStyledStringController = new RichEditorStyledStringController();
 * ```
 */
/**
 * Represents the controller of the **RichEditor** component built with the styled string. Inherits from 
 * [RichEditorBaseController]{@link RichEditorBaseController}.
 * 
 * ###### Objects to Import
 * 
 * ```ts
 * controller: RichEditorStyledStringController = new RichEditorStyledStringController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class RichEditorStyledStringController extends RichEditorBaseController implements StyledStringController {
  /**
   * Sets the styled string displayed in the **RichEditor** component.
   * 
   * > **NOTE**
   * >
   * > - When this API is called, the **StyledString** of the **RichEditor** component is fully replaced and re-
   * > rendered.
   * >
   * > - When the content exceeds the component area, the component automatically scrolls up until the end of the 
   * > content is visible.
   *
   * @param { StyledString } styledString - Styled string.
   *     <br>**NOTE**
   *     <br>The child class [MutableStyledString]{@link MutableStyledString} of **StyledString** can also serve as the
   *     argument.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyledString(styledString: StyledString): void;

  /**
   * Obtains the styled string displayed in the **RichEditor** component.
   *
   * @returns { MutableStyledString } Styled string displayed in the rich text component.
   *     <br>If no component is bound to the controller or the component bound to the controller is released,
   *     **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getStyledString(): MutableStyledString;

  /**
   * Obtains the current selection range of the **RichEditor** component.
   *
   * @returns { RichEditorRange } Selection range.
   *     <br>If no component is bound to the controller or the component bound to the controller is released,
   *     **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getSelection(): RichEditorRange;

  /**
   * Registers a callback for the text content change. This callback is triggered only when the text content is changed 
   * by backend programs, and is not triggered when 
   * [setStyledString]{@link RichEditorStyledStringController#setStyledString} is called.
   *
   * @param { StyledStringChangedListener } listener - Callback listener for text content changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentChanged(listener: StyledStringChangedListener): void;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 * 
 * In addition to the [universal events]{@link ./common}, [OnDidChangeCallback]{@link OnDidChangeCallback}, 
 * [StyledStringChangedListener]{@link StyledStringChangedListener}, 
 * [StyledStringChangeValue]{@link StyledStringChangeValue}, and the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare class RichEditorAttribute extends CommonMethod<RichEditorAttribute> {
  /**
   * Triggered after the rich text component is initialized. After initialization, the component can respond to input 
   * and interaction normally.
   *
   * @param { function } callback - Callback invoked when the initialization of the **RichEditor** component is
   *     complete. [since 10 - 11]
   * @param { Callback<void> } callback - Callback invoked when the initialization of the **RichEditor** component is
   *     complete. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReady(callback: Callback<void>): RichEditorAttribute;

  /**
   * Triggered when content is selected via left mouse button double-click and triggered again upon left mouse button 
   * release.
   * 
   * Triggered when content is selected via long press, and triggered again upon finger release.
   * 
   * The **onSelect** callback is not invoked during continuous selection adjustment with mouse or touch gestures, or 
   * during triple-click paragraph selection.
   * 
   * If the selection area needs to be detected in real time or the **RichEditor** component is built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}, use the **onSelectionChange** API.
   *
   * @param { function } callback - [RichEditorSelection]{@link RichEditorSelection} indicates information about all the
   *     selected spans.
   *     <br>Callback invoked when content is selected. [since 10 - 11]
   * @param { Callback<RichEditorSelection> } callback - [RichEditorSelection]{@link RichEditorSelection} indicates
   *     information about all the selected spans.
   *     <br>Callback invoked when content is selected. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelect(callback: Callback<RichEditorSelection>): RichEditorAttribute;

  /**
   * Triggered when the selection area or caret position changes in the editing state. When the caret position changes, 
   * the start and end positions of the selection area are the same.
   *
   * @param { Callback<RichEditorRange> } callback - [RichEditorRange]{@link RichEditorRange} indicates the start and
   *     end positions of the content selection area.
   *     <br>Callback invoked when the content selection area changes or the caret position changes in the editing
   *     state.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSelectionChange(callback: Callback<RichEditorRange>): RichEditorAttribute;

  /**
   * Triggered when content is about to be entered in the input method.
   * 
   * It can be used in scenarios where input content needs to be intercepted, such as filtering sensitive words, 
   * restricting the input format, and validating the input in real time.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorInsertValue]{@link RichEditorInsertValue} is the content information to
   *     be input by the input method.
   *     <br>The value true means that the component performs the content addition operation, and false means that the
   *     component does not perform the content addition operation.
   *     <br>Callback invoked before the input method inputs content. [since 10 - 11]
   * @param { Callback<RichEditorInsertValue, boolean> } callback - [RichEditorInsertValue]{@link RichEditorInsertValue}
   *     is the content information to be input by the input method.
   *     <br>The value true means that the component performs the content addition operation, and false means that the
   *     component does not perform the content addition operation.
   *     <br>Callback invoked before the input method inputs content. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean>): RichEditorAttribute;

  /**
   * Triggered when text input is completed via the input method editor.
   * 
   * This API can return information about only one text span. You are advised to use the 
   * [onDidIMEInput]{@link RichEditorAttribute#onDidIMEInput} API if the edit operation involves returning information 
   * about multiple text spans.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult} indicates the text span
   *     information after text input is complete.
   *     <br>Callback invoked after IME input is completed. [since 10 - 11]
   * @param { Callback<RichEditorTextSpanResult> } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult}
   *     indicates the text span information after text input is complete.
   *     <br>Callback invoked after IME input is completed. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIMEInputComplete(callback: Callback<RichEditorTextSpanResult>): RichEditorAttribute;

  /**
   * Triggered when text input is completed via the input method editor.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<TextRange> } callback - **TextRange** indicates the text range for the current input.
   *     <br>Callback invoked when IME input is completed.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidIMEInput(callback: Callback<TextRange>): RichEditorAttribute;

  /**
   * Triggered when content is about to be deleted via the IME.
   * 
   * It is suitable for scenarios where deletion operations need to be intercepted, such as preventing the deletion of 
   * key content and saving the history before deletion to support undo. Together with 
   * [onDeleteComplete]{@link RichEditorAttribute#onDeleteComplete}, it forms a will/did timing pattern: 
   * **aboutToDelete** is triggered before deletion, and **onDeleteComplete** is triggered after deletion is complete. 
   * When **aboutToDelete** returns **false**, the component does not perform the deletion operation, and 
   * **onDeleteComplete** is not triggered. The two can be used at the same time.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue} is the text or image Span
   *     information where the content to be deleted is located.
   *     <br>**true** indicates that the component performs the deletion operation, and **false** indicates that the
   *     component does not perform the deletion operation.
   *     <br>Callback before the input method deletes content. This callback is executed when the English preview text
   *     is tapped to select a candidate word. [since 10 - 11]
   * @param { Callback<RichEditorDeleteValue, boolean> } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue}
   *     is the text or image Span information where the content to be deleted is located.
   *     <br>**true** indicates that the component performs the deletion operation, and **false** indicates that the
   *     component does not perform the deletion operation.
   *     <br>Callback before the input method deletes content. This callback is executed when the English preview text
   *     is tapped to select a candidate word. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean>): RichEditorAttribute;

  /**
   * Triggered when content is deleted via the IME.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - Triggered when deletion in the input method is completed. [since 10 - 11]
   * @param { Callback<void> } callback - Triggered when deletion in the input method is completed. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDeleteComplete(callback: Callback<void>): RichEditorAttribute;

  /**
   * Sets whether the component supports copying and pasting text content.
   * 
   * Since API version 20, copied or cut text from the **RichEditor** component includes HTML-formatted content in the 
   * pasteboard.
   * 
   * - Only [TextSpan]{@link RichEditorTextSpanOptions} and [ImageSpan]{@link RichEditorImageSpanOptions} support adding
   * HTML content to the pasteboard. Other span types, such as [BuilderSpan]{@link RichEditorBuilderSpanOptions}, 
   * [SymbolSpan]{@link RichEditorSymbolSpanOptions}, and [CustomSpan]{@link CustomSpan}, cannot add HTML content.
   * - For styled strings, refer to [toHtml]{@link StyledString#toHtml} for supported HTML conversion scope.
   * 
   * When **copyOptions** is not set to **CopyOptions.None**, long-pressing the component content brings up the text 
   * selection menu. If a custom text selection menu is defined through 
   * [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu} or other means, the custom menu is displayed 
   * instead.
   * 
   * When **copyOptions** is set to **CopyOptions.None**, the copy, cut, translate, share, search, and Celia Writer 
   * features are disabled, and drag-and-drop operations are not supported. In addition, the entity recognition menu of 
   * [enableDataDetector]{@link RichEditorAttribute#enableDataDetector} and the AI menu of 
   * [enableSelectedDataDetector]{@link RichEditorAttribute#enableSelectedDataDetector} are restricted.
   *
   * @param { CopyOptions } value - Whether the text content supports copy and paste.
   *     <br>Default value: CopyOptions.LocalDevice
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  copyOptions(value: CopyOptions): RichEditorAttribute;

  /**
   * Sets a custom selection menu. It supports custom menu styles and trigger conditions, and is suitable for scenarios 
   * that require deep menu customization. When the custom menu is too long, it is recommended to nest a 
   * [Scroll]{@link ./scroll} component inside to prevent the keyboard from being obscured.
   *
   * @param { RichEditorSpanType } spanType - Type of the menu.
   *     <br>Default value: RichEditorSpanType.TEXT
   * @param { CustomBuilder } content - Menu content.
   * @param { ResponseType | RichEditorResponseType } responseType - Response type of the menu.
   *     <br> Default value:
   *     <br>ResponseType.LongPress [since 11]
   * @param { SelectionMenuOptions } [options] - Options of the menu.
   *     <br>Pass this parameter when you need to customize the menu pop-up/close callback, specify the menu type, and
   *     other information. If this parameter is not passed, the default selection menu options are used.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindSelectionMenu(spanType: RichEditorSpanType, content: CustomBuilder, responseType: ResponseType | RichEditorResponseType,
    options?: SelectionMenuOptions): RichEditorAttribute;

  /**
   * Sets a custom keyboard.
   * 
   * When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system 
   * input method.
   * 
   * The height of the custom keyboard can be set through the **height** attribute of the root node of the custom 
   * component. The width cannot be set, and the default system keyboard width is used.
   * 
   * The custom keyboard cannot obtain the focus, but it blocks gesture events.
   * 
   * By default, the custom keyboard is closed when the input component loses the focus.
   * 
   * The custom keyboard supports the continue function. You can call the 
   * [setCustomKeyboardContinueFeature]{@link @ohos.arkui.UIContext:UIContext.setCustomKeyboardContinueFeature} API to 
   * set whether the custom keyboard remains persistent during input field switches.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 23.
   *
   * @param { CustomBuilder } value - Custom keyboard.
   *     <br>When **undefined** is passed, the system keyboard is used by default. [since 10 - 22]
   * @param { KeyboardOptions } [options] - Sets whether the custom keyboard supports the avoidance feature. 
   *     <br>When undefined is passed in or the parameter is omitted, avoidance is not supported by
   *     default. [since 12 - 22]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard.
   *     <br>When **undefined** is passed, the system keyboard is used by default. [since 23]
   * @param { KeyboardOptions | undefined } [options] - Sets whether the custom keyboard supports the avoidance feature.
   *     
   *     <br>When undefined is passed in or the parameter is omitted, avoidance is not supported by default. [since 23]
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined,
                 options?: KeyboardOptions | undefined): RichEditorAttribute;

  /**
   * Triggered before pasting is complete.
   * 
   * Developers can use this method to override the default system behavior and implement pasting of images and text.
   *
   * @param { function } callback - Callback used to subscribe to the pasted content. [since 11 - 11]
   * @param { PasteEventCallback } callback - Callback used to subscribe to the pasted content. [since 12]
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste(callback: PasteEventCallback): RichEditorAttribute;

  /**
   * Sets whether to recognize special entities in the text, including phone numbers, email addresses, URL links, dates,
   * and addresses. The specific recognition types can be configured through the 
   * [dataDetectorConfig]{@link RichEditorAttribute#dataDetectorConfig} attribute.
   * 
   * This API depends on the device system's text entity recognition capability. Otherwise, the setting does not take 
   * effect.
   * 
   * When **enableDataDetector** is set to **true** and the 
   * [dataDetectorConfig]{@link RichEditorAttribute#dataDetectorConfig} attribute is not specified, the system 
   * recognizes all types of entities by default, and changes the color and decoration of these entities to the preset 
   * style.
   * 
   * Touching or right-clicking an entity opens a context menu with actions based on entity type, while left-clicking 
   * triggers the first menu option directly.
   * 
   * This feature does not take effect on the node text of [addBuilderSpan]{@link RichEditorController#addBuilderSpan}.
   * 
   * When **copyOptions** is set to **CopyOptions.None**, the menu displayed after an entity is clicked does not provide
   * the text selection or copy functionality.
   * 
   * <!--RP1--><!--RP1End-->
   *
   * @param { boolean } enable - Whether to enable text recognition.
   *     <br>true indicates that special entity recognition is enabled, and false indicates that special entity
   *     recognition is disabled.
   *     <br>Default value: false
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableDataDetector(enable: boolean): RichEditorAttribute;

  /**
   * Sets whether to enable preview text.
   * 
   * After this feature is enabled, the pinyin and stroke characters entered during input method input are displayed in 
   * the component.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { boolean } enable - Whether to enable the preview feature.
   *     <br>The value true means to enable it, and false means to disable it.
   *     <br>Default value: true
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): RichEditorAttribute;

  /**
   * Configures text special entity recognition settings, including detectable entity types, entity display styles, and 
   * long-press preview availability.
   * 
   * This API must be used together with [enableDataDetector]{@link RichEditorAttribute#enableDataDetector}. It takes 
   * effect only when **enableDataDetector** is set to **true**.
   * 
   * When entities A and B overlap, the following rules are followed:
   * 
   * 1. If A ⊂ B, retain B. Otherwise, retain A.
   * 2. When A ⊄ B and B ⊄ A: If A.start < B.start, retain A; otherwise, retain B.
   *
   * @param { TextDataDetectorConfig } config - Text recognition configuration.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): RichEditorAttribute;

  /**
   * Sets whether to enable the AI menu feature for text selection. After this feature is enabled, the entities such as 
   * email address, phone number, website URL, date, and address in the selection area can be recognized, and the 
   * corresponding AI menu items can be displayed in the text selection menu. By default, the AI menu feature is 
   * enabled.
   * 
   * When the AI menu feature is enabled, after text is selected in the component, the text selection menu can display 
   * the corresponding AI menu items, including url (open link), email (create email), phoneNumber (call), address (
   * navigate to), and dateTime (create schedule) in [TextMenuItemId]{@link TextMenuItemId}.
   * 
   * When the AI menu is active, the corresponding menu item is displayed only if the selected range contains exactly 
   * one complete AI entity. This menu item does not appear at the same time as the **askAI** menu item in 
   * [TextMenuItemId]{@link TextMenuItemId}.
   * 
   * This feature takes effect only when [copyOptions]{@link RichEditorAttribute#copyOptions} is set to 
   * **CopyOptions.LocalDevice** or **CopyOptions.CROSS_DEVICE**.
   * 
   * This API depends on the text recognition capability of the device; otherwise, the setting does not take effect.
   *
   * @param { boolean | undefined } enable - Whether to enable the text selection AI menu function. The value **true**
   *     indicates enabled, and **false** indicates disabled.
   *     <br>Default value: **true**.
   *     <br>When set to **undefined** or **null**, the default value is used.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): RichEditorAttribute;

  /**
   * Sets the prompt text displayed when there is no input.
   * 
   * After this attribute is set, the prompt text is displayed when the component has no content, and it automatically 
   * disappears after the user starts entering content.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { ResourceStr } value - Placeholder text.
   * @param { PlaceholderStyle } [style] - Font style of the prompt text.
   *     <br>Pass this parameter when you need to customize the color, font size, and other styles of the placeholder;
   *     if omitted, the theme style is used by default.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  placeholder(value: ResourceStr, style?: PlaceholderStyle): RichEditorAttribute;

  /**
   * Sets the color of the caret and selection handle in the text box.
   *
   * @param { ResourceColor } value - Color of the caret and selection handle in the text box.
   *     <br>Default value: **'#007DFF'**
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  caretColor(value: ResourceColor): RichEditorAttribute;

  /**
   * Sets the highlight color of the selected text. If the opacity is not set or is set to fully opaque, a 20% opacity 
   * is used by default.
   *
   * @param { ResourceColor } value - Highlight color of the selected text.<br/>The default value is 20% opacity.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): RichEditorAttribute;

  /**
   * Triggered when the content editing state in the component changes.
   *
   * @param { Callback<boolean> } callback - Callback invoked when the editing state changes.
   *     <br>true indicates the editing state, and false indicates the non-editing state.
   * @returns { RichEditorAttribute } returns The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onEditingChange(callback: Callback<boolean>): RichEditorAttribute;

  /**
   * Sets the Enter key type of the soft keyboard.
   * 
   * After this attribute is set, the icon and trigger behavior of the Enter key on the soft keyboard change according 
   * to the specified type, and different EnterKeyType values correspond to different Enter key styles.
   *
   * @param { EnterKeyType } value - Type of the Enter key on the soft keyboard.
   *     <br>The default value is EnterKeyType.NEW_LINE.
   *     <br>For the applicable scenarios of each enum value, see the EnterKeyType enum description.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType(value: EnterKeyType): RichEditorAttribute;

  /**
   * Triggered when the Enter key on the soft keyboard is pressed.
   *
   * @param { SubmitCallback } callback - Callback invoked when the Enter key on the soft keyboard is pressed, used to
   *     receive the Enter key type and submit event information.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSubmit(callback: SubmitCallback): RichEditorAttribute;

  /**
   * Triggers the callback before the component performs an add or delete operation. Together with 
   * [onDidChange]{@link RichEditorAttribute#onDidChange}, it forms a will/did timing pattern: onWillChange is triggered
   * before the add or delete operation, and onDidChange is triggered after the add or delete operation. When 
   * onWillChange returns false, the component does not perform the add or delete operation, and onDidChange is not 
   * triggered. The two can be used at the same time.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { Callback<RichEditorChangeValue, boolean> } callback - The triggered function before text content is about
   *     to change.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillChange(callback: Callback<RichEditorChangeValue, boolean>) : RichEditorAttribute;

  /**
   * Triggered after an addition or deletion operation is performed on the component. This callback is not executed if 
   * there is no actual addition or deletion of text.
   * 
   * This callback is not supported when the **RichEditor** component built with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { OnDidChangeCallback } callback - The triggered function after content changed.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidChange(callback: OnDidChangeCallback) : RichEditorAttribute;

  /**
   * Triggered on cut operations. You can use this method to override the system's default behavior and implement the 
   * cutting of text and images.
   * 
   * The **RichEditor** component built with [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} 
   * supports text and image cutting by default.
   *
   * @param { Callback<CutEvent> } callback - Defines a custom cut event.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCut(callback: Callback<CutEvent>): RichEditorAttribute;

  /**
   * Triggered on copy operations. You can use this method to override the system's default behavior and implement the 
   * copying of text and images.
   * 
   * The **RichEditor** component built with [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} 
   * supports text and image copying by default.
   *
   * @param { Callback<CopyEvent> } callback - User copy event.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCopy(callback: Callback<CopyEvent>): RichEditorAttribute;

  /**
   * Triggered before the component is bound to the IME.
   * 
   * Applies to scenarios that require customizing the input method behavior, such as setting input method extension 
   * configurations to implement specific input modes and custom input method functions.
   * 
   * Call the [setExtraConfig]{@link IMEClient.setExtraConfig} method of [IMEClient]{@link IMEClient} to set input 
   * method extension information. After the input method is bound, it receives this extension information which can be 
   * used to implement custom functionality.
   * 
   * <!--Del-->
   * 
   * Since API version 26.0.0, before the input box is about to bind the input method, you can set the keyboard style 
   * through the system API 
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} of `UIContext`. <!
   * --DelEnd-->
   *
   * @param { Callback<IMEClient> | undefined } callback - Callback invoked before the component is bound to the input
   *     method.
   *     <br>When the value is undefined, the bound callback event is cleared.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient> | undefined): RichEditorAttribute;

  /**
   * Sets the extended options for the default system menu, including text content, icons, and callback methods.
   * 
   * Difference from [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu}: editMenuOptions adds extension 
   * items on top of the system default menu style, with the trigger conditions unchanged, and is suitable for scenarios
   * where only menu item extension is needed; bindSelectionMenu fully customizes the menu style and trigger conditions,
   * and is suitable for scenarios where deep menu customization is needed.
   * 
   * When [disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems} or 
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems} is 
   * used to disable system service menu items in the text selection menu, the disabled menu options will be excluded 
   * from the parameter list in the [onCreateMenu]{@link EditMenuOptions.onCreateMenu} callback of **editMenuOptions**.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { EditMenuOptions } editMenu - Extended options of the custom menu.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): RichEditorAttribute;

  /**
   * Sets whether to enable the input method when the **RichEditor** component obtains focus in a way other than 
   * clicking.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { boolean } isEnabled - Whether to pop up the soft keyboard when the **TextInput** component obtains focus
   *     in a way other than clicking.
   *     <br>**true**: yes; **false**: no
   *     <br>Default value: **true**
   * @returns { RichEditorAttribute } Returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableKeyboardOnFocus(isEnabled: boolean): RichEditorAttribute;

  /**
   * Sets whether to enable haptic feedback.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.
   *     <br>Default value: true. The value true means to enable haptic feedback, and false means to disable it.
   *     <br>**Note:**
   *     <br>Haptic feedback takes effect only when the application has the ohos.permission.VIBRATE permission, the user
   *     has enabled haptic feedback, and the system hardware supports it.
   *     <br>Different device types vary in their support for vibration hardware. Haptic feedback is unavailable on
   *     device types without vibration hardware.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): RichEditorAttribute;

  /**
   * Display mode of the RichEditor scroll bar.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { BarState } state - Display mode of the RichEditor scroll bar.
   *     <br>Default value: BarState.Auto
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  barState(state: BarState): RichEditorAttribute;

  /**
   * Sets the maximum length of the component content.
   *
   * @param { Optional<number> } maxLength - Maximum input length of the content. When the total length of the content (
   *     including text, images, symbols, and builders) reaches this value, no more content can be added.
   *     <br>Default value: Infinity, which means unlimited input.
   *     <br>**NOTE**
   *     <br>Value range:
   *     [0, +∞). If this attribute is not set or is set to undefined or a negative number,
   *     the default value Infinity is used. If it is set to 0, no content can be entered.
   *     If it is set to a decimal, the integer part is used.
   * @returns { RichEditorAttribute }  returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLength(maxLength: Optional<number>): RichEditorAttribute;

  /**
   * Sets the maximum number of lines that the component can display.
   *
   * @param { Optional<number> } maxLines - Sets the maximum number of lines that the rich text can display. maxLines is
   *     the number of displayable lines. When maxLines is set, the content beyond the limit can be scrolled for
   *     display. If both the component height and the maximum number of lines are set, the component height takes
   *     effect first.
   *     <br>Value range: (0, UINT32_MAX].
   *     <br>Default value: UINT32_MAX, which means unlimited input.
   *     <br>When set to 0, a negative number, undefined, or null, the default value is used.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLines(maxLines: Optional<number>): RichEditorAttribute;

  /**
   * Whether to enable automatic spacing between Chinese and Western characters. This is applicable to scenarios such as
   * mixed Chinese and English content (for example, news articles and technical documents) that require an improved 
   * reading experience between Chinese and Western characters. When enabled, spacing is automatically inserted between 
   * Chinese and Western characters; when disabled, no spacing is inserted.
   *
   * @param { Optional<boolean> } enable - Whether to enable automatic spacing between Chinese and Western text.
   *     <br>true indicates that automatic spacing is enabled, and false indicates that it is disabled.
   *     <br>Default value: false
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enable: Optional<boolean>): RichEditorAttribute;
  
  /**
   * Sets the keyboard appearance.
   * 
   * Applicable to scenarios where the keyboard visual style needs to be adjusted based on the application theme or 
   * immersive scenarios, such as using the DARK appearance in dark mode.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Keyboard appearance.
   *     <br>Default value: KeyboardAppearance.NONE_IMMERSIVE.
   *     <br>For the applicable scenarios of each enum value, see the KeyboardAppearance enum description.
   *     <br>When set to undefined or null, the default value is used.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): RichEditorAttribute;

  /**
   * Sets whether to prevent the back key from being passed through. This is applicable to scenarios such as preventing 
   * the back action to avoid data loss when edited content is not saved, and preventing users from accidentally exiting
   * editing in dialog box editing.
   *
   * @param { Optional<boolean> } isStopped - Whether to prevent the back key event from being propagated.
   *     <br>**true**: Propagation is prevented. **false**: Propagation is allowed.
   *     <br>Default value: **true** Invalid values are treated as the default value.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to retain the original content style upon undo operations.
   * 
   * When the [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used to build the **RichEditor** 
   * component, the original content style is retained by default upon undo operations, and is not affected by the 
   * attribute set by this API.
   *
   * @param { Optional<UndoStyle> } style - Option for whether to retain the original style when undoing or restoring.
   *     <br>Default value: UndoStyle.CLEAR_STYLE.
   *     <br>If this parameter is set to undefined or null, the default value is used.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  undoStyle(style: Optional<UndoStyle>): RichEditorAttribute;

  /**
   * Sets the color of the scrollbar.
   *
   * @param { Optional<ColorMetrics> } color - Color of the scrollbar.
   *     <br>Default value: **'#66182431'**, displayed as gray.
   *     <br>Note: Invalid values are treated as the default value.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): RichEditorAttribute;

  /**
   * Sets whether to enable single-line mode. The single-line mode is disabled by default when this API is not 
   * specified.
   * 
   * > **NOTE**
   * >
   * > In single-line mode, line breaks are displayed as spaces.
   *
   * @param { boolean | undefined } isEnable - Whether to enable single-line mode.
   *     <br>The value true means to enable single-line mode, and false means the opposite.
   *     <br>If this parameter is set to undefined or null, it is processed as false, and single-line mode is not
   *     enabled.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  singleLine(isEnable: boolean | undefined): RichEditorAttribute;

  /**
   * Sets the drag preview style. This is applicable to scenarios where the appearance of dragged content needs to be 
   * customized, such as a drag preview effect that matches the application theme style.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag preview style. If it is set to **undefined**, the
   *     style will be reset.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): RichEditorAttribute;

  /**
   * Whether to add spacing to the first and last lines to avoid text truncation. This is applicable to scenarios such 
   * as text being clipped due to a small custom font line height and compact typesetting. If this API is not used, no 
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>The value true means to add spacing to the first and last lines, and false means not to add spacing to the
   *     first and last lines.
   *     <br>Default value: false
   *     <br>If this parameter is set to undefined or null, the default value is used.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): RichEditorAttribute;

  /**
   * Whether the line height is adaptively based on the actual text height in multi-line text overlay scenarios.
   * 
   * This is applicable to scenarios such as mixed text with different font sizes and chat message bubbles that need to 
   * avoid text overlap. If this API is not used, the line height is not adapted based on the actual text height by 
   * default.
   * 
   * This API depends on the **lineHeight** property of [RichEditorTextStyle]{@link RichEditorTextStyle}. When the value
   * of **lineHeight** is less than the actual height of the text rendered under the current font size, the 
   * **fallbackLineSpacing** attribute takes effect.
   *
   * @param { Optional<boolean> } enabled - Whether the line height adapts based on the actual text height.
   *     <br>true indicates that the line height adapts based on the actual text height, and false indicates the
   *     opposite.
   *     <br>Default value: false.
   *     <br>When set to undefined or null, the default value is used.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to enable leading punctuation compression.
   * 
   * This is applicable to scenarios where leading punctuation needs to be aligned with the body text.
   * 
   * > **NOTE**
   * >
   * > Leading punctuation is not compressed by default.
   * >
   * > For the range of punctuation marks that support leading compression, see 
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable leading punctuation compression.
   *     <br>true indicates that leading punctuation compression is enabled, and false indicates that it is disabled.
   *     <br>Default value: false.
   *     <br>When set to undefined or null, the default value is used.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Whether to enable orphan character optimization during text typesetting.
   * 
   * This is applicable to scenarios such as long-text typesetting and e-book reading where a paragraph's last line 
   * containing only one character affects the reading experience. If this API is not used, orphan character 
   * optimization is disabled by default.
   * 
   * Orphan character optimization improves text layout by processing orphan characters (the first character of the last
   * line of a paragraph) more efficiently. When enabled, it adjusts line break points to avoid orphan characters as 
   * much as possible. The orphan character optimization feature takes effect only when the wordBreak attribute of 
   * [RichEditorParagraphStyle]{@link RichEditorParagraphStyle} is not BREAK_ALL and the 
   * [locale]{@link @ohos.graphics.text:text.TextStyle} of the first 
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} of the text to be laid out is "zh-Hans" or "zh-Hant".
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan word optimization for the last line of a paragraph.
   *     <br>The value true means to enable orphan word optimization, and false means the opposite.
   *     <br>Default value: false. When set to undefined or null, orphan word optimization is not enabled.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to enable horizontal scrolling when the text width exceeds the content area width. This is applicable 
   * to scenarios where long text content (such as code snippets and long URLs) needs to be displayed without automatic 
   * line wrapping. If this API is not used for configuration, horizontal scrolling is disabled by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable horizontal scrolling.
   *     <br>The value true means to enable horizontal scrolling, and the value false means to disable horizontal
   *     scrolling, in which case the text wraps automatically.
   *     <br>Default value: false. When this parameter is set to undefined or null, horizontal scrolling is not enabled.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  horizontalScrolling(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to enable hanging punctuation at the end of a line.
   * 
   * When enabled, a single punctuation mark at the end of a line is allowed to exceed the typesetting width without 
   * wrapping. This is suitable for scenarios where you need to prevent a punctuation mark at the end of a line from 
   * wrapping to the beginning of the next line, so as to improve the typesetting aesthetics. If this API is not called,
   * punctuation marks are not hung by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable hanging punctuation at the end of a line.
   *     <br>The value **true** means to enable hanging punctuation at the end of a line, and **false** means the
   *     opposite.
   *     <br>Default value: **false**. When this parameter is set to **undefined** or **null**, hanging punctuation is
   *     not enabled.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): RichEditorAttribute;
}

/**
 * Defines a custom cut event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CutEvent {
  /**
   * Whether to prevent the system default cut event.
   * 
   * If omitted, the system default cut behavior is performed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault?: Callback<void>;
}

/**
 * User copy event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CopyEvent {
  /**
   * Whether to prevent the system default copy event.
   * 
   * If omitted, the system default copy behavior is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault?: Callback<void>;
}

/**
 * URL information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface RichEditorUrlStyle {
  /**
   * URL.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  url?: ResourceStr;
}

/**
 * Represents the callback invoked when the Enter key on the soft keyboard is pressed.
 *
 * @param { EnterKeyType } enterKey - Type of the Enter key. For details, see **EnterKeyType**.
 * @param { SubmitEvent } event - Submit event, which provides a method to keep the component in editing state. When
 *     **EnterKeyType** is set to **NEW_LINE**, the editing state is retained by default.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * Represents the callback invoked when the custom context menu on selection appears.
 *
 * @param { number } start - Start position of the selected content.
 * @param { number } end - End position of the selected content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type MenuOnAppearCallback = (start: number, end: number) => void;

/**
 * Represents the callback invoked when the custom context menu on selection is shown or hidden.
 *
 * @param { number } start - Start position of the selected content.
 * @param { number } end - End position of the selected content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type MenuCallback = (start: number, end: number) => void;

/**
 * Represents the callback invoked when a paste operation is about to complete.
 *
 * @param { PasteEvent } [event] - Defines the user paste event. When omitted, paste event information is not received.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PasteEventCallback = (event?: PasteEvent) => void;

/**
 * Defines the callback triggered on hover.
 *
 * @param { boolean } status - Whether the mouse hovers over the component. The value **true** indicates that the mouse
 *     hovers over the component, and **false** indicates that the mouse leaves the component.
 * @param { HoverEvent } event - Mouse hover event object, which contains the detailed information about the hover event
 *     (such as the mouse position).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * **RichEditor** is a component that supports interactive text editing and mixture of text and imagery.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added content in later versions is marked with a 
 * > superscript to indicate the version in which it was introduced.
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
interface RichEditorInterface {
  /**
   *
   * @param { RichEditorOptions } value - Options for initializing the component.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value: RichEditorOptions): RichEditorAttribute;

  /**
   * Called when create RichEditor.
   *
   * @param { RichEditorStyledStringOptions} options - Options for initializing the component.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (options: RichEditorStyledStringOptions): RichEditorAttribute;
}

/**
 * Defines RichEditor Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare const RichEditorInstance: RichEditorAttribute;

/**
 * **RichEditor** is a component that supports interactive text editing and mixture of text and imagery.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added content in later versions is marked with a 
 * > superscript to indicate the version in which it was introduced.
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 * 
 * ###### Child Components
 * 
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare const RichEditor: RichEditorInterface;