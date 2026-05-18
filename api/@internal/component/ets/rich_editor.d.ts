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
 * Deletion direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorDeleteDirection {
  /**
   * Backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKWARD,

  /**
   * Forward.
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
 * Provides the span type information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorSpanType {
  /**
   * The span type is text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXT = 0,

  /**
   * The span type is image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  IMAGE = 1,

  /**
   * The span type is image and text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIXED = 2,

  /**
   * The span type is BuilderSpan.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BUILDER = 3,

  /**
   * When this type is registered but **TEXT**, **IMAGE**, **MIXED**, or **BUILDER** types are not registered, this type
   * will be triggered and displayed for those registered types.
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
 * Enumerates the options for whether to retain the original style during undo/redo operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum UndoStyle {
  /**
   * Undo/Redo operations do not retain the original style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CLEAR_STYLE = 0,

  /**
   * Undo/Redo operations retain the original style.
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
 * Response type of the menu.
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
   * If this menu is registered, but **RIGHT_CLICK**, **LONG_PRESS**, and **SELECT** menus are not registered, the menu 
   * will be displayed when the right mouse button is clicked, the menu is long-pressed, or the menu is selected using 
   * the mouse.
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
 * Provides the span position information.
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
 * Provides the text style information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextStyle {
  /**
   * Font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Font size. The default unit is fp.
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * Font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily?: ResourceStr;

  /**
   * Style, color, and thickness of the text decoration.
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
   * Text shadow. It supports input parameters in an array to implement multiple text shadows.
   * 
   * **NOTE**
   * 
   * Only the shadow blur radius, color, and offset can be set. Smart color picking is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow?: ShadowOptions | Array<ShadowOptions>;
  
  /**
   * Letter spacing. The default unit is fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing?: number | string;

  /**
   * Line height. The default unit is fp.
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
   * Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and 
   * bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite.
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
   * Text stroke width. If the unit value of LengthMetrics is [PERCENT]{@link ./../../../arkui/Graphics:LengthUnit}, the
   * current setting does not take effect and is processed as 0.
   * 
   * If the value is less than 0, the value is an entity word. If the value is greater than 0, the value is an outline 
   * word. If the value is equal to 0, there is no stroke effect.
   * 
   * The default value is 0vp.
   * 
   * Unit: LengthMetrics is followed by LengthMetrics when the type is LengthMetrics, and vp when the type is number.
   * 
   * Value range: (-∞, +∞)
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
   * Default value: Follow the font color.
   * 
   * Sets the font color for abnormal values.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * The stroke join style of the text.
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
   * Image size. This parameter cannot be set in percentage.
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
 * Describes the paragraph style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphStyle {
  /**
   * Horizontal alignment mode of the text. 
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
   * Vertical alignment of text paragraphs.
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
   * Indent of the paragraph. It has no effect if the paragraph starts with an image or builder span. If of the 
   * **Dimension** type, this parameter cannot be set in percentage. Default value: **{"size":["0.00px","0.00px"]}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  leadingMargin?: Dimension | LeadingMarginPlaceholder;

  /**
   * Word break rule.
   * 
   * Default value: **WordBreak.BREAK_WORD**
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
   * Spacing between paragraphs.
   * 
   * Unit: fp
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  paragraphSpacing?: number;

  /**
   * Sets the text direction.
   * 
   * Default value: TextDirection.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection?: TextDirection;

  /**
   * Set shader style.
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
 * Defines a custom paste event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PasteEvent {
  /**
   * Prevents the default paste event.
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
 * Provides the text span information.
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
   * Text style.
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
 * Image layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface RichEditorLayoutStyle {
  /**
   * Margins in different directions of the component.
   * 
   * When the parameter is of the **Dimension** type, the four margins take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  margin?: Dimension | Margin;

  /**
   * Radius of the rounded corners of the component.
   * 
   * If of the **Dimension** type, this parameter cannot be set in percentage.
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
 * Sets the image span style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanStyle {
  /**
   * Width and height of the image, in px. Default value: varies by the value of **objectFit**. If the value of 
   * **objectFit** is **Cover**, the image height is the component height minus the top and bottom paddings, and the 
   * image width is the component width minus the left and right paddings.
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * Scale mode of the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit?: ImageFit;

  /**
   * Image layout style. Default value: **{"borderRadius":"","margin":""}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  layoutStyle?: RichEditorLayoutStyle;
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
 * While **fontWeight** in **RichEditorTextStyle** sets the font weight, **fontWeight** in **RichEditorTextStyleResult**
 * returns the set font weight after conversion to digits.
 * 
 * Conversion relationship between fontWeight in RichEditorSymbolSpanStyle and RichEditorSymbolSpanStyleResult, the 
 * conversion relationship is the same as that of fontWeight in RichEditorTextStyle and RichEditorTextStyleResult.
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
   * Text decorative line.
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
   * Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and 
   * bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite.
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
   * Get the stroke join style of the text.
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
 * Provides the text span information.
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
   * Text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle: RichEditorTextStyleResult;

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
   * Content of the **SymbolSpan** component.
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
   * Width and height of the image, in px. Default value: varies by the value of **objectFit**. If the value of 
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutStyle?: RichEditorLayoutStyle;
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
   * Start position of the span whose style needs to be updated. If this parameter is left empty or set to a negative 
   * value, the value **0** will be used.
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
   * End position of the span whose style needs to be updated. If this parameter is left empty or set to a value beyond 
   * the range, it indicates infinity.
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
 * User gesture event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorGesture {
  /**
   * Triggered when [ClickEvent]{@link common:ClickEvent} occurs.
   * 
   * It is executed on completion of a single click.
   * 
   * On a double-click, the first click triggers the callback event.
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
   * Triggered when the user performs a long press.
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
   * [GestureEvent]{@link gesture:GestureEvent} indicates the double-tap event.
   * 
   * Callback event when the double-tap is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onDoubleClick?: Callback<GestureEvent>;
}

/**
 * Describes the options for adding a text span.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpanOptions {
  /**
   * Position of the text span to be added. If this parameter is omitted, the paragraph is added to the end of all 
   * content.
   * 
   * If the value specified is less than 0, the paragraph is placed at the beginning of all content. If the value is 
   * greater than the length of all content, the paragraph is placed at the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: number;

  /**
   * Text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: RichEditorTextStyle;

  /**
   * Paragraph style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * Behavior-triggered callback. If this parameter is left empty, only the default system behavior is supported.
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
 * Sets whether to support keyboard avoidance.
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
   * Image style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle?: RichEditorImageSpanStyle;

  /**
   * Behavior-triggered callback. If this parameter is left empty, only the default system behavior is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  gesture?: RichEditorGesture;

  /**
   * Callback triggered on mouse hover. If this parameter is omitted, no corresponding action is taken.
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
 * Sets the offset and style of the builder.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorBuilderSpanOptions {
  /**
   * Position of the builder span to be added. If this parameter is omitted or set to an invalid value, the span is 
   * added to the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * Background color of the builder when it is dragged independently. If no valid value is specified, the default color
   * is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  dragBackgroundColor? : ColorMetrics;

  /**
   * Whether to apply a shadow when the builder is dragged independently. If no valid value is specified, a shadow is 
   * applied. The value **true** means to apply a shadow, and **false** means the opposite.
   * 
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  isDragShadowNeeded?: boolean;

  /**
   * Accessibility settings. By default, the default value of 
   * [AccessibilitySpanOptions]{@link text_common:AccessibilitySpanOptions} is used.
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
 * Style of the placeholder text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PlaceholderStyle {
  /**
   * Style of the placeholder text.
   * 
   * The default value follows the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  font?: Font;

  /**
   * Color of the placeholder text.
   * 
   * The default value follows the theme.
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
 * > Applicable scope of the API: spans involved in the specified range.
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
 * Image style options.
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
   * Style of the symbol span.
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
   * Position of the symbol span to be added. If this parameter is omitted, the span is added to the end of all content.
   * 
   * If the value is less than 0, the span is added to the beginning of all content. If the value is greater than the 
   * length of all content, the span is added to the end of all content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * Style of the symbol span. If this parameter is left empty, the default style will be used.
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
 * Provides information about the selected content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSelection {
  /**
   * Range of the selected.
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
 * Information about the text to be inserted.
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
   * Content of the preview text.
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
 * Provides information about the delete operation and the deleted content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorDeleteValue {
  /**
   * Offset of the deleted content.
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
   * Length of the deleted content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  length: number;

  /**
   * Information about the deleted text or image span.
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
 * Image and text change information.
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
   * Reason why the component content changes.
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
   * Callback invoked when the custom context menu on selection appears.
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
   * Callback invoked when the custom context menu on selection disappears.
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
   * Callback invoked when the custom context menu on selection is shown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuShow?: MenuCallback;

  /**
   * Callback invoked when the custom context menu on selection is hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuHide?: MenuCallback;

  /**
   * Options of the preview menu. This parameter is valid only in **RichEditor**.
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
 */
declare interface PreviewMenuOptions {
  /**
   * Vibration effect when the menu is displayed. This parameter takes effect when ImageSpan or BuilderSpan is bound to 
   * the preview menu.
   * 
   * Default value: **HapticFeedbackMode.DISABLED** (no vibration when the menu is displayed)
   * 
   * Note: The settings take effect only when the application has the ohos.permission.VIBRATE permission and the user 
   * has enabled haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * If the caret position cannot be obtained (for example, the controller is not bound to a component), -1 is returned.
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
   * Sets the cursor offset.
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
   * Closes the custom or default context menu on selection.
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
   * @returns { RichEditorTextStyle } Preset typing style.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
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
   * @param { RichEditorTextStyle } value - Preset typing style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setTypingStyle(value: RichEditorTextStyle): void;

  /**
   * Sets the preset paragraph style. The input text takes effect only when the component content is empty or a line 
   * break is added at the end of the component.
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
   * Sets the range of content selection. The selected content is highlighted.
   * 
   * If both selectionStart and selectionEnd are set to -1, all the content is selected. If both selectionStart and 
   * selectionEnd are set to 0, the selected content can be cleared.
   * 
   * If this API is called when the text box is not focused, the selected effect is not displayed.
   * 
   * Since API version 12, on 2-in-1 devices, regardless of the value of **options**, calling the **setSelection** API 
   * will not display the menu. In addition, if there is already a menu present within the component, calling the 
   * **setSelection** API will close the menu.
   * 
   * On non-2-in-1 devices, when **options** is set to **MenuPolicy.DEFAULT**, the following rules apply:
   * 
   * 1. If the component has a selection handle menu, calling the API will not close the menu, and the menu position will be adjusted.
   * 2. If the component has a menu without a selection handle, calling the API will not close the menu, and the menu position will remain unchanged.
   * 3. If there is no menu within the component, calling the API will not display the menu.
   *
   * @param { number } selectionStart - Start position of the selection.
   * @param { number } selectionEnd - End position of the selection.
   * @param { SelectionOptions } [options] - Configuration of options. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Obtains the editing state of this **RichEditor** component.
   *
   * @returns { boolean } Editing state. The value **true** indicates the editing state, and **false** indicates the non
   *     -editing state.
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stopEditing(): void;

  /**
   * Obtains a **LayoutManager** object.
   *
   * @returns { LayoutManager } **LayoutManager** object.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
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
   * @returns { PreviewText } Preview text.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviewText(): PreviewText;

  /**
   * Scroll the input field component to make the specified content visible.
   *
   * @param { TextRange } [range] - The visible range.
   *     If the parameter is invalid, this method will have no effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollToVisible(range?: TextRange): void;

  /**
   * Obtains the relative position of the caret in the **RichEditor** component. If the caret is not blinking, the API 
   * returns **undefined**.
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
   * The capability of deleting characters is provided. If no content is selected, the character before the caret is 
   * deleted. If some content is selected, the selected content is deleted.
   * 
   * This API cannot be used in the pre-screen display scenario.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  deleteBackward(): void;

  /**
   * Set the styledString placeholder.
   *
   * @param { StyledString } styledString - The styledString for placeholder.
   *     If the parameter is invalid, this method will have no effect.
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
 * > When the length of the content exceeds the height of the display area of the component, the insertion interface (
 * > such as [addTextSpan]{@link RichEditorController.addTextSpan}, 
 * > [addImageSpan]{@link RichEditorController.addImageSpan}, 
 * > [addBuilderSpan]{@link RichEditorController.addBuilderSpan} and 
 * > [addSymbolSpan]{@link RichEditorController.addSymbolSpan}) is called. The component automatically scrolls the 
 * > content to make the end of the inserted content visible.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class RichEditorController extends RichEditorBaseController {
  /**
   * Adds a text span. If the caret in the component is blinking, the caret position is updated to be after the inserted
   * text span.
   *
   * @param { string } value - text value. [since 10 - 19]
   * @param { RichEditorTextSpanOptions } [options] - Text options.
   * @param { ResourceStr } content - Text content.<br>The Resource type is supported since API version 20. [since 20]
   * @returns { number } Index of the added text span in all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number;

  /**
   * Adds an image span. If the caret in the component is blinking, the caret position is updated to be after the 
   * inserted image span.
   * 
   * This API is a synchronous API. In a weak network environment, directly adding network images may block the UI 
   * thread and cause screen freezing. To avoid potential loading issues, do not directly add a network image.
   *
   * @param { PixelMap | ResourceStr } value - Image content.
   * @param { RichEditorImageSpanOptions } [options] - Image options.
   * @returns { number } Index of the added image span in all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * Adds a custom layout (BuilderSpan) to **RichEditor**.
   * 
   * > **NOTE**
   * >
   * > - This API adds a builder span to take up space in the layout. It calls the system **measure** method to 
   * > calculate the actual length, width, and position.
   * >
   * > - You can use [RichEditorBuilderSpanOptions]{@link RichEditorBuilderSpanOptions} to set the index of the builder 
   * > in the **RichEditor** component (with one character as the unit).
   * >
   * > - This builder span is unfocusable, draggable, and equipped with certain universal attributes. It behaves 
   * > similarly to an image span in terms of placeholder and deletion functionality, and it is treated as a single 
   * > character in length.
   * >
   * > - Custom menus can be set using [bindSelectionMenu]{@link RichEditorAttribute.bindSelectionMenu}.
   * >
   * > - The information about the builder span cannot be obtained through 
   * > [getSpans]{@link RichEditorController.getSpans}, [getSelection]{@link RichEditorController.getSelection}, 
   * > [onSelect]{@link RichEditorAttribute.onSelect}, or [aboutToDelete]{@link RichEditorAttribute.aboutToDelete}.
   * >
   * > - The builder span cannot be updated using [updateSpanStyle]{@link RichEditorController.updateSpanStyle} or 
   * > [updateParagraphStyle]{@link RichEditorController.updateParagraphStyle}.
   * >
   * > - Copying or pasting the builder span does not take effect.
   * >
   * > - The layout constraints of the builder span are passed in from the **RichEditor** component. If the size of the 
   * > outermost component in the builder span is not set, the size of the **RichEditor** is used as the value of 
   * > **maxSize**.
   * >
   * > - The gesture event mechanism of the builder span is the same as the universal gesture event mechanism. If 
   * > transparent transmission is not set in the builder, only the child components in the builder respond.
   * >
   * > - If the caret in the component is blinking, the caret position is updated to be after the inserted image span.
   * 
   * Only the following universal attributes are supported: 
   * [size](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#size), 
   * [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding), 
   * [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin), 
   * [aspectRatio](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-layout-constraints.md#aspectratio), 
   * [borderStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderstyle), 
   * [borderWidth](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderwidth), 
   * [borderColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#bordercolor), 
   * [borderRadius](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderradius), 
   * [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor), 
   * [backgroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)
   * , [opacity]{@link common}, 
   * [blur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#blur), 
   * [backdropBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backdropblur), 
   * [shadow](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#shadow), 
   * [grayscale](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#grayscale), 
   * [brightness](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#brightness), 
   * [saturate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#saturate), 
   * [contrast](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#contrast), 
   * [invert](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#invert), 
   * [sepia](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sepia), 
   * [hueRotate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#huerotate), 
   * [colorBlend](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#colorblend), 
   * [linearGradientBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lineargradientblur12)
   * , [clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12), 
   * [mask](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#mask12), 
   * [foregroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyle)
   * , 
   * [accessibilityGroup](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitygroup)
   * , 
   * [accessibilityText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext)
   * , 
   * [accessibilityDescription](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription)
   * , 
   * [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
   * , 
   * [sphericalEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sphericaleffect12)
   * , [lightUpEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lightupeffect12),
   * 
   * [pixelStretchEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#pixelstretcheffect12)
   * .
   *
   * @param { CustomBuilder } value - Custom component.
   * @param { RichEditorBuilderSpanOptions } [options] - Builder options.
   * @returns { number } Index of the added builder span in all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number;

  /**
   * Adds a symbol span. If the caret in the component is blinking, the caret position is updated to be after the 
   * inserted symbol span.
   * 
   * Currently, gestures, copying, and dragging are not supported.
   *
   * @param { Resource } value - Symbol resource object.
   * @param { RichEditorSymbolSpanOptions } [options] - Symbol options.
   * @returns { number } Index of the added symbol span in all spans.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number;
  
  /**
   * Updates the text, image, or symbol span style.
   * 
   * If only part of a span is updated, the span is split into multiple spans based on the updated part and the non-
   * updated part.
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
   * @param { RichEditorParagraphStyleOptions } value - Information about the paragraph style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;

  /**
   * Deletes the text and image spans in a specified range.
   *
   * @param { RichEditorRange } [value] - Range of the target spans. If this parameter is left empty, all text and image
   *     spans will be deleted.
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
   * @param { RichEditorRange } [value] - Range of the target span.
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> } Text and image span information.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;

  /**
   * Obtains the paragraph information within a specified range.
   *
   * @param { RichEditorRange } [value] - Range of the paragraphs to obtain.
   * @returns { Array<RichEditorParagraphResult> } Information about the selected paragraphs.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>;

  /**
   * Obtains the range and span information of the selected content. If no text is selected, this API returns the 
   * information about the span where the caret is located.
   *
   * @returns { RichEditorSelection } Provides information about the selected content.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getSelection(): RichEditorSelection;

  /**
   * Converts a styled string into a span.
   *
   * @param { StyledString } value - Styled string before conversion.
   * @returns { Array<RichEditorSpan> } Text and image span information.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fromStyledString(value: StyledString): Array<RichEditorSpan>;

  /**
     * Convert the component content within the given range into a styled string. SymbolSpan and BuilderSpan cannot be 
     * converted.
     *
     * @param { RichEditorRange } value - Source range.
     * @returns { StyledString } Styled string after conversion.
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
 * # Objects to Import
 * 
 * ```ts
 * controller: RichEditorStyledStringController = new RichEditorStyledStringController();
 * ```
 */
/**
 * Represents the controller of the **RichEditor** component constructed using the styled string. Inherits from 
 * [RichEditorBaseController]{@link RichEditorBaseController}.
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
   * > - When this interface is called, the StyledString of the rich text component is fully replaced and rendered 
   * > again.
   * >
   * > - When the content exceeds the component area, the component automatically scrolls up until the content is 
   * > visible at the end.
   *
   * @param { StyledString } styledString - Styled string.<br>**NOTE**<br>The child class
   *     [MutableStyledString]{@link styled_string:MutableStyledString} of **StyledString** can also serve as the
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
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
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
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getSelection(): RichEditorRange;

  /**
   * Registers the callback for the text content change. This callback is triggered only when the text content is 
   * changed by backend programs, and is not triggered when 
   * [setStyledString]{@link RichEditorStyledStringController.setStyledString} is called.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 * 
 * In addition to the [universal events]{@link common}, [OnDidChangeCallback]{@link text_common:OnDidChangeCallback}, 
 * [StyledStringChangedListener]{@link text_common:StyledStringChangedListener}, 
 * [StyledStringChangeValue]{@link text_common:StyledStringChangeValue}, and the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class RichEditorAttribute extends CommonMethod<RichEditorAttribute> {
  /**
   * Triggered after the **RichEditor** component is initialized.
   *
   * @param { function } callback - Triggered when initialization of the **RichEditor** component is
   *     complete. [since 10 - 11]
   * @param { Callback<void> } callback - Triggered when initialization of the **RichEditor** component is
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
   * Invoked when content is selected.
   * 
   * If a mouse device is used for selection, this callback is invoked when the left mouse button is double-clicked to 
   * select content and invoked again when the button is released.
   * 
   * If a finger is used for selection, this callback is invoked by a long press and invoked again when the finger is 
   * released.
   * 
   * If the selected area is continuously modified by using a finger or mouse or if the selected area is triple-clicked,
   * the onSelect callback is not invoked.
   * 
   * If the selection area needs to be detected in real time or the RichEditor component constructed using 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used, use the onSelectionChange API.
   *
   * @param { function } callback - [RichEditorSelection]{@link RichEditorSelection} indicates information about all the
   *     selected spans.<br>Callback invoked when content is selected. [since 10 - 11]
   * @param { Callback<RichEditorSelection> } callback - [RichEditorSelection]{@link RichEditorSelection} indicates
   *     information about all the selected spans.<br>Callback invoked when content is selected. [since 12]
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
   *     end positions of the content selection area.<br>Callback invoked when the content selection area changes or the
   *     caret position changes in the editing state.
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
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorInsertValue]{@link RichEditorInsertValue} indicates whether content will
   *     be entered in the input method.<br>**true**: The component adds the content.<br>**false**: The component does
   *     not add the content.<br>Callback invoked when content is about to be entered in the input
   *     method. [since 10 - 11]
   * @param { Callback<RichEditorInsertValue, boolean> } callback - [RichEditorInsertValue]{@link RichEditorInsertValue}
   *     indicates whether content will be entered in the input method.<br>**true**: The component adds the content.<br>
   *     **false**: The component does not add the content.<br>Callback invoked when content is about to be entered in
   *     the input method. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean>): RichEditorAttribute;

  /**
   * Triggered when text input in the input method is complete.
   * 
   * This callback can return information about only one text span. If the editing operation involves returning 
   * information about multiple text spans, you are advised to use the 
   * [onDidIMEInput]{@link RichEditorAttribute.onDidIMEInput} API.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult} indicates the text span
   *     information after text input is complete.<br>Callback invoked when text input in the input method is
   *     complete. [since 10 - 11]
   * @param { Callback<RichEditorTextSpanResult> } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult}
   *     indicates the text span information after text input is complete.<br>Callback invoked when text input in the
   *     input method is complete. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIMEInputComplete(callback: Callback<RichEditorTextSpanResult>): RichEditorAttribute;

  /**
   * Triggered when text input in the input method is complete.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called in 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 20.
   *
   * @param { Callback<TextRange> } callback - **TextRange** indicates the text range for the current input.<br>Callback
   *     invoked when text input in the input method is complete.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidIMEInput(callback: Callback<TextRange>): RichEditorAttribute;

  /**
   * Triggered when content is about to be deleted in the input method.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   *
   * @param { function } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue} indicates the text or image
   *     span where the content to be deleted is located.<br>**true**: Content is deleted.<br>**false**: Content is not
   *     deleted.<br>Callback invoked when content is about to be deleted in the input method. It is executed when a
   *     candidate word is touched in preview text. [since 10 - 11]
   * @param { Callback<RichEditorDeleteValue, boolean> } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue}
   *     indicates the text or image span where the content to be deleted is located.<br>**true**: Content is deleted.<
   *     br>**false**: Content is not deleted.<br>Callback invoked when content is about to be deleted in the input
   *     method. It is executed when a candidate word is touched in preview text. [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean>): RichEditorAttribute;

  /**
   * Triggered when content is deleted in the input method.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
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
   * Specifies whether copy and paste is allowed for text content.
   * 
   * Since API version 20, copied or cut text from the **RichEditor** component includes HTML-formatted content in the 
   * pasteboard.
   * 
   * - Only TextSpan and ImageSpan can add HTML content to the pasteboard. Other span types (such as BuilderSpan, 
   * SymbolSpan, and CustomSpan) cannot add HTML content to the pasteboard.
   * - For styled strings, refer to [toHtml]{@link styled_string:StyledString.toHtml} for supported HTML conversion 
   * scope.
   * 
   * If copyOptions is not set to CopyOptions.None, a text selection menu will be displayed when you long-press the 
   * component content. If a custom context menu is defined through **bindSelectionMenu** or other approaches, it will 
   * be displayed.
   * 
   * If copyOptions is set to CopyOptions.None, the copy, cut, translate, share, search, and write-aid functions are 
   * disabled, and drag-and-drop operations are not supported.
   *
   * @param { CopyOptions } value - Whether copy and paste is allowed for text content.<br>Default value:
   *     **CopyOptions.LocalDevice**
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  copyOptions(value: CopyOptions): RichEditorAttribute;

  /**
   * Sets the custom context menu on text selection. If the custom menu is too long, embed a [Scroll]{@link scroll} 
   * component to prevent the keyboard from being blocked.
   *
   * @param { RichEditorSpanType } spanType - Menu type.<br>Default value:<br>RichEditorSpanType.TEXT
   * @param { CustomBuilder } content - Menu content.
   * @param { ResponseType } responseType - Response type of the menu.<br> Default value:<br>
   *     ResponseType.LongPress [since 10 - 10]
   * @param { SelectionMenuOptions } [options] - Menu options.
   * @param { ResponseType | RichEditorResponseType } responseType - Response type of the menu.<br> Default value:<br>
   *     ResponseType.LongPress [since 11]
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
   * The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and 
   * its width is fixed at the default value.
   * 
   * The custom keyboard cannot obtain focus, but it blocks gesture events.
   * 
   * By default, the custom keyboard is closed when the input component loses the focus.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 23.
   *
   * @param { CustomBuilder } value - Custom keyboard.<br>When undefined is passed, the system keyboard is used by
   *     default. [since 10 - 22]
   * @param { KeyboardOptions } [options] - Whether to support keyboard avoidance.<br>When undefined is passed,
   *     avoidance is not supported by default. [since 12]
   * @param { CustomBuilder | ComponentContent } value - Custom keyboard.<br>When undefined is passed, the system
   *     keyboard is used by default. [since 23]
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions | undefined): RichEditorAttribute;

  /**
   * Triggered when a paste operation is performed. You can use this API to override the default system behavior so that
   * both images and text can be pasted.
   *
   * @param { function } callback - Callback used to subscribe to the pasted text content. [since 11 - 11]
   * @param { PasteEventCallback } callback - Callback used to subscribe to the pasted text content. [since 12]
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste(callback: PasteEventCallback): RichEditorAttribute;

  /**
   * Enables recognition for special entities within the text.
   * 
   * For this API to work, the target device must provide the text recognition capability.
   * 
   * If enableDataDetector is set to true and the [dataDetectorConfig]{@link RichEditorAttribute.dataDetectorConfig} 
   * attribute is not specified, the system identifies all types of entities by default, and changes the color and 
   * decoration of these entities to the preset style.
   * 
   * Touching and right-clicking an entity opens a context menu with actions based on entity type, while left-clicking 
   * triggers the first menu option directly.
   * 
   * This API does not work for the node text of **addBuilderSpan**.
   * 
   * When **copyOptions** is set to **CopyOptions.None**, the menu displayed after an entity is clicked does not provide
   * the text selection or copy functionality.
   * 
   * <!--RP1--><!--RP1End-->
   *
   * @param { boolean } enable - Whether to enable text recognition.<br>**true** to enable, **false** otherwise.<br>
   *     Default value: **false**.
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
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
   *
   * @param { boolean } enable - Whether to enable preview text.<br>**true** to enable, **false** otherwise.<br>Default
   *     value: **true**
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): RichEditorAttribute;

  /**
   * Configures special entity recognition settings, including entity types to detect, display styles for detected 
   * entities, and long-press preview options.
   * 
   * This API must be used together with [enableDataDetector]{@link RichEditorAttribute.enableDataDetector}. It takes 
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
   * Sets whether to enable the AI menu function for text selection. After this function is enabled, the email address, 
   * phone number, website address, date, and address in the selection area can be identified, and the corresponding AI 
   * menu items can be displayed in the text selection menu. By default, the AI menu feature is enabled.
   * 
   * When the AI menu function is enabled, after a text is selected in the component, the corresponding AI menu item is 
   * displayed in the text selection menu, including the URL (opening a connection) and email (creating an email) in 
   * [TextMenuItemId]{@link text_common:TextMenuItemId}., phoneNumber (call), address (navigation), and dateTime (new 
   * event).
   * 
   * When the AI menu takes effect, the corresponding options can be displayed only when the selected scope contains 
   * only one complete AI entity. This menu item does not appear at the same time as the askAI menu item in 
   * [TextMenuItemId]{@link text_common:TextMenuItemId}.
   * 
   * This function takes effect only when [copyOptions]{@link RichEditorAttribute.copyOptions} is set to 
   * CopyOptions.LocalDevice or CopyOptions.CROSS_DEVICE.
   * 
   * This API depends on the text recognition capability at the bottom layer of the device. Otherwise, the setting does 
   * not take effect.
   *
   * @param { boolean | undefined } enable - Whether to enable text recognition. The value **true** means to enable text
   *     recognition, and **false** means the opposite.<br>If **undefined** or **null** is passed, the attribute is
   *     reset to the default value.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): RichEditorAttribute;

  /**
   * Sets the placeholder text, which is displayed when there is no input.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
   *
   * @param { ResourceStr } value - Placeholder text.
   * @param { PlaceholderStyle } [style] - Style of the placeholder text.<br>By default, the style follows the theme.
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
   * @param { ResourceColor } value - Color of the caret and selection handle in the text box.<br>Default value:
   *     **'#007DFF'**
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  caretColor(value: ResourceColor): RichEditorAttribute;

  /**
   * Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.
   *
   * @param { ResourceColor } value - Background color of the selected text.<br>By default, a 20% opacity is applied.
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
   * @param { Callback<boolean> } callback - Callback invoked when the editing state of all content in the component
   *     changes. The value **true** indicates the editing state, and **false** indicates the non-editing state.
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
   * @param { EnterKeyType } value - Type of the Enter key.<br>Default value: **EnterKeyType.NEW_LINE**
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
   * @param { SubmitCallback } callback - Callback used to return the subscription event.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSubmit(callback: SubmitCallback): RichEditorAttribute;

  /**
   * Invoked when any addition or deletion operation is about to be performed in the component.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
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
   * Triggered after an addition or deletion operation is performed in the component. This callback is not executed if 
   * there is no actual addition or deletion of text.
   * 
   * This callback is not supported when the **RichEditor** component constructed with 
   * [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
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
   * Triggered during cutting. You can use this method to override the system's default behavior and implement the 
   * cutting of text and images.
   * 
   * The **RichEditor** component constructed using [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}
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
   * Triggered during copy. You can use this method to override the system's default behavior and implement the copying 
   * of text and images.
   * 
   * The **RichEditor** component constructed using [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}
   * supports copying of text and images by default.
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
   * Triggers a callback before a component is bound to an input method.
   * 
   * Call the [setExtraConfig]{@link text_common:IMEClient.setExtraConfig} method of 
   * [IMEClient]{@link text_common:IMEClient} to set input method extension information. After the input method is bound
   * , it receives this extension information, which can be used to implement custom functionality.
   *
   * @param { Callback<IMEClient> | undefined } callback - Callback triggered before the component is bound to an input
   *     method.<br>If the value is undefined, the bound callback event is cleared.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient> | undefined): RichEditorAttribute;

  /**
   * Sets the extended options of the default system menu, including the text content, icon, and callback.
   * 
   * When 
   * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or
   * 
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * is used to disable system service menu items in the context menu on selection, the disabled menu options will be 
   * excluded from the parameter list in the [onCreateMenu]{@link text_common:EditMenuOptions.onCreateMenu} callback of 
   * **editMenuOptions**.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
   *
   * @param { EditMenuOptions } editMenu - Extended options of the custom context menu on selection.
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
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
   *
   * @param { boolean } isEnabled - Whether to bring up the keyboard when a component obtains focus in a way other than
   *     clicking.<br>**true**: yes; **false**: no<br>Default value: **true**
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
   * > This API can be called in 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 20.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.<br>Default value: **true**. **true** to enable;
   *     **false** otherwise.<br>**NOTE**<br>Haptic feedback takes effect only when the application has the
   *     ohos.permission.VIBRATE permission, the user has enabled haptic feedback, and the system hardware supports it.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): RichEditorAttribute;

  /**
   * Sets the display mode of the **RichEditor** scrollbar.
   * 
   * > **NOTE**
   * >
   * > This API can be called within 
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > since API version 18.
   *
   * @param { BarState } state - Scrollbar display mode.<br>Default value: **BarState.Auto**
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  barState(state: BarState): RichEditorAttribute;

  /**
   * Sets the maximum length of the component content. When the total length of the content (including text, images, 
   * symbols, and builders) reaches this value, no more content can be added.
   *
   * @param { Optional<number> } maxLength - Maximum number of characters for text input.<br>Default value: **Infinity**
   *     , which means unlimited input. The **undefined** type is supported.<br>**NOTE**<br>If this attribute is not set
   *     or is set to an invalid value, the default value is used. If a decimal number is specified, the integer part is
   *     used.
   * @returns { RichEditorAttribute }  returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLength(maxLength: Optional<number>): RichEditorAttribute;

  /**
   * Sets the maximum number of lines that the rich text can display. When **maxLines** is set, content that exceeds the
   * specified number of lines can be scrolled to display. If both the component height and **maxLines** are set, the 
   * component height takes precedence.
   *
   * @param { Optional<number> } maxLines - Maximum number of lines that the rich text can display. When **maxLines** is
   *     set, content that exceeds the specified number of lines can be scrolled to display. If both the component
   *     height and **maxLines** are set, the component height takes precedence.<br>Default value: **UINT32_MAX**, which
   *     means unlimited input. The **undefined** type is supported.<br>Value range: (0, UINT32_MAX]
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLines(maxLines: Optional<number>): RichEditorAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters.
   *
   * @param { Optional<boolean> } enable - Whether to enable automatic spacing between Chinese and Western characters.<
   *     br>**true** to enable, **false** otherwise.<br>Default value: **false**.
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
   * @param { Optional<KeyboardAppearance> } appearance - Keyboard appearance.<br>Default value:
   *     **KeyboardAppearance.NONE_IMMERSIVE**
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): RichEditorAttribute;

  /**
   * Sets whether to prevent the back button press from being propagated to other components or applications.
   *
   * @param { Optional<boolean> } isStopped - Whether to prevent the back button press from being propagated to other
   *     components or applications.<br>**true** to prevent, **false** otherwise.<br>Default value: **true**. If an
   *     invalid value is provided, the default value is used.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to retain the original content style when undoing or redoing an action.
   * 
   * When the [RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions} is used to build the RichEditor 
   * component, the original content style is retained by default during undo and redo, and is not affected by the 
   * attributes set by this API.
   *
   * @param { Optional<UndoStyle> } style - Whether to retain the original style when undoing an operation. Default
   *     value: **UndoStyle.CLEAR_STYLE**.
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
   * @param { Optional<ColorMetrics> } color - Color of the scrollbar.<br>Default value: **'#66182431'**, displayed as
   *     gray.<br>Note: If an abnormal value is set, the default value is used.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): RichEditorAttribute;

  /**
   * Sets whether to enable the single-line mode. If this interface is not used, the single-line mode is disabled by 
   * default.
   * 
   * > **NOTE**
   * >
   * > The scroll bar is not displayed in single-line mode.
   * >
   * > In single-line mode, the newline character is displayed as a space.
   *
   * @param { boolean | undefined } isEnable - Whether to enable the single-line mode.<br>The value true indicates that
   *     the single-line mode is enabled, and the value false indicates that the single-line mode is disabled.<br>If
   *     this attribute is set to undefined or null, the value false is used and the single-line mode is not enabled.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  singleLine(isEnable: boolean | undefined): RichEditorAttribute;

  /**
   * Sets the drag and view style.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag and preview style. If this attribute is set to
   *     undefined, the style will be reset.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): RichEditorAttribute;

  /**
   * Sets whether to add a spacing between the first and last lines to avoid text truncation. If this interface is not 
   * used, the spacing is not increased by default.
   *
   * @param { Optional<boolean> } include - Whether to add a spacing between the first and last lines to avoid text
   *     truncation.<br>The value true indicates that the space between the first line and the last line is added. The
   *     value false indicates that the space between the first line and the last line is not added.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): RichEditorAttribute;

  /**
   * For multi-line text overlay, the line height can be automatically adjusted based on the actual text height. This 
   * API is not used to set the line height. By default, the line height is not automatically adjusted based on the 
   * actual text height.
   * 
   * This API depends on the lineHeight attribute of [RichEditorTextStyle]{@link RichEditorTextStyleResult}. When the 
   * value of lineHeight is less than the actual height of the text rendered under the current font size, the 
   * fallbackLineSpacing property takes effect.
   *
   * @param { Optional<boolean> } enabled - Whether the line height is adaptive based on the actual text height.<br>The
   *     value true indicates that the line height is automatically adjusted based on the actual text height. The value
   *     false indicates that the line height is not automatically adjusted based on the actual text height.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Sets whether to enable punctuation compression at the beginning of a line.
   * 
   * > **NOTE**
   * >
   * > By default, the punctuation at the beginning of a line is not compressed.
   * >
   * > For details about the punctuation that supports compression, see the punctuation range of the line header 
   * > compression of [ParagraphStyle]{@link ./../../../@ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable punctuation compression at the beginning of a line.<br>
   *     true indicates that punctuation compression is enabled at the beginning of a line. false indicates that
   *     punctuation compression is disabled at the beginning of a line.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Whether to avoid an orphan word on the last line of the paragraph.
   *
   * @param { Optional<boolean> } enabled - The default value is false,
   *     indicates the flag whether to enable this feature.
   * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * Whether to enable horizontal scrolling when text is wider than the view.
   * The default value is false, and text will be wrapped by the view.
   *
   * @param { Optional<boolean> } enabled - whether to enable horizontal scrolling.
   *     True means enable this feature, false means disable this feature.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  horizontalScrolling(enabled: Optional<boolean>): RichEditorAttribute;
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
   * Prevents the default cut event.
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
   * Prevents the default cut event.
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
 * Represents the callback invoked when the paste is about to be completed.
 *
 * @param { PasteEvent } [event] - User paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PasteEventCallback = (event?: PasteEvent) => void;

/**
 * Represents the callback invoked on mouse hover.
 *
 * @param { boolean } status - Whether the mouse pointer is hovering over the component. The value **true** means that
 *     the mouse pointer enters the component, and **false** means that the mouse pointer leaves the component.
 * @param { HoverEvent } event - Hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * Provides an interface for writing texts.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
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
 */
declare const RichEditorInstance: RichEditorAttribute;

/**
 * **RichEditor** is a component that supports interactive text editing and mixture of text and imagery.
 * 
 * > **NOTE**
 * >
 * > This component is supported since API version 10. Updates will be marked with a superscript to indicate their 
 * > earliest API version.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const RichEditor: RichEditorInterface;