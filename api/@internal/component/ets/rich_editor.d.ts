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
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum RichEditorDeleteDirection {
  /**
   * Delete backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BACKWARD,

  /**
   * Delete forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  FORWARD,
}

/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum RichEditorSpanType {
  /**
   * text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT = 0,

  /**
   * image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  IMAGE = 1,

  /**
   * mixed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  MIXED = 2,
}

/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare enum RichEditorResponseType {
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  RIGHT_CLICK = 0,

  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  LONG_PRESS = 1,

  /**
   * Selected by mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  SELECT = 2,
}

/**
 * Defines the span position.
 *
 * @interface RichEditorSpanPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSpanPosition {
  /**
   * Define the index of span.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanIndex: number;

  /**
   * The range of span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanRange: [number, number];
}

/**
 * Defines the span text style.
 *
 * @interface RichEditorTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextStyle {
  /**
   * font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;

  /**
   * font size.
   *
   * @type { ?(Length | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize?: Length | number;

  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle?: FontStyle;

  /**
   * font weight.
   *
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight?: number | FontWeight | string;

  /**
   * font family.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily?: ResourceStr;

  /**
   * font decoration.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  decoration?: { type: TextDecorationType; color?: ResourceColor; };
}


/**
 * Defines the leading margin placeholder of a paragraph.
 *
 * @interface LeadingMarginPlaceholder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface LeadingMarginPlaceholder {
  /**
   * Placeholder pixelMap.
   *
   * @type { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  pixelMap: PixelMap;

  /**
   * Placeholder size.
   *
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  size: [Dimension, Dimension];
}

/**
 * Defines the paragraph style.
 *
 * @interface RichEditorParagraphStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface RichEditorParagraphStyle {
  /**
   * Text alignment.
   *
   * @type { ?TextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  textAlign?: TextAlign;

  /**
   * Leading margin.
   *
   * @type { ?(Dimension | LeadingMarginPlaceholder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  leadingMargin?: Dimension | LeadingMarginPlaceholder;
}

/**
 * Defines the paste event.
 *
 * @interface PasteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface PasteEvent {
  /**
   * Override system paste event.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  preventDefault?: () => void;
}

/**
 * Defines the text span.
 *
 * @interface RichEditorTextSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpan {
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle?: RichEditorTextStyle;
}

/**
 * Defines the richEditor Image Layout Style.
 *
 * @interface RichEditorLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface RichEditorLayoutStyle {
  /**
   * Outer Margin.
   *
   * @type { ?(Dimension | Margin) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  margin?: Dimension | Margin;

  /**
   * Border radius.
   *
   * @type { ?(Dimension | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  borderRadius?: Dimension | BorderRadiuses;
}

/**
 * Defines the span image style.
 *
 * @interface RichEditorImageSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanStyle {
  /**
   * image size.
   *
   * @type { ?[Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size?: [Dimension, Dimension];

  /**
   * image vertical align.
   *
   * @type { ?ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * image fit.
   *
   * @type { ?ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  objectFit?: ImageFit;

  /**
   * RichEditor ImageSpan Layout Style.
   *
   * @type { ?RichEditorLayoutStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  layoutStyle?: RichEditorLayoutStyle;
}

/**
 * Defines the text style result.
 *
 * @interface RichEditorTextStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextStyleResult {
  /**
   * font color.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor: ResourceColor;

  /**
   * font size.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize: number;

  /**
   * font style.
   *
   * @type { FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle: FontStyle;

  /**
   * font weight.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight: number;

  /**
   * font family.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily: string;

  /**
   * font decoration.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  decoration: { type: TextDecorationType; color: ResourceColor; };
}

/**
 * Defines the paragraph result.
 *
 * @interface RichEditorParagraphResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface RichEditorParagraphResult {
  /**
   * The paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  style: RichEditorParagraphStyle;

  /**
   * The range of paragraph based on character indices.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  range: [number, number];
}

/**
 * Defines the text span result.
 *
 * @interface RichEditorTextSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpanResult {
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * text style.
   *
   * @type { RichEditorTextStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle: RichEditorTextStyleResult;

  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offsetInSpan: [number, number];
}

/**
 * Defines the span image style result.
 *
 * @interface RichEditorImageSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanStyleResult {
  /**
   * image size.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size: [number, number];

  /**
   * image vertical align.
   *
   * @type { ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  verticalAlign: ImageSpanAlignment;

  /**
   * image fit.
   *
   * @type { ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  objectFit: ImageFit;
}

/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanResult {
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The pixel map of the image span.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  valuePixelMap?: PixelMap;

  /**
   * The resource string of the image span.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  valueResourceStr?: ResourceStr;

  /**
   * image attribute.
   *
   * @type { RichEditorImageSpanStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle: RichEditorImageSpanStyleResult;

  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offsetInSpan: [number, number];
}

/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpan {
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the image span.
   *
   * @type { PixelMap | ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: PixelMap | ResourceStr;

  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle?: RichEditorImageSpanStyle;
}

/**
 * Defines range of RichEditor.
 *
 * @interface RichEditorRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorRange {
  /**
   * start offset.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  start?: number;

  /**
   * end offset.
   *
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  end?: number;
}

/**
 * Defines the richEditor Gestures.
 *
 * @interface RichEditorGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare interface RichEditorGesture {
  /**
   * Trigger a click event when a click is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onClick?: (event: ClickEvent) => void;

  /**
   * Trigger a gesture event when long press event is complete.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLongPress?: (event: GestureEvent) => void;
}

/**
 * Defines the span options of RichEditor.
 *
 * @interface RichEditorTextSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpanOptions {
  /**
   * the offset that add a text span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset?: number;

  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style?: RichEditorTextStyle;

  /**
   * Paragraph style.
   *
   * @type { ?RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  gesture?: RichEditorGesture;
}

/**
 * Defines the image span options of RichEditor.
 *
 * @interface RichEditorImageSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanOptions {
  /**
   * the offset that add image span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset?: number;

  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle?: RichEditorImageSpanStyle;

  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  gesture?: RichEditorGesture;
}

/**
 * Defines span style option of RichEditor.
 *
 * @interface RichEditorSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSpanStyleOptions extends RichEditorRange { }

/**
 * Defines paragraph style option of RichEditor.
 *
 * @interface RichEditorParagraphStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
  /**
   * Paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  style: RichEditorParagraphStyle;
}

/**
 * Defines text span style option of RichEditor.
 *
 * @interface RichEditorUpdateTextSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * text style.
   *
   * @type { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle: RichEditorTextStyle;
}

/**
 * Defines image span style option of RichEditor.
 *
 * @interface RichEditorUpdateImageSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * image style.
   *
   * @type { RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle: RichEditorImageSpanStyle;
}

/**
 * Defines the text information for editing.
 *
 * @interface RichEditorSelection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSelection {
  /**
   * The location info.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selection: [number, number];

  /**
   * The selected text content.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Defines the inserted text value info.
 *
 * @interface RichEditorInsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorInsertValue {
  /**
   * The location info where the value will be inserted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  insertOffset: number;

  /**
   * The inserted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  insertValue: string;
}

/**
 * Provides an interface for deleting value from text.
 *
 * @interface RichEditorDeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorDeleteValue {
  /**
   * The offset of deleting.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset: number;

  /**
   * The deleted direction.
   *
   * @type { RichEditorDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  direction: RichEditorDeleteDirection;

  /**
   * The deleted text length.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  length: number;

  /**
   * The deleted span object.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * Defines the options of RichEditor.
 *
 * @interface RichEditorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorOptions {
  /**
   * RichEditor controller.
   *
   * @type { RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: RichEditorController;
}

/**
 * Defines the selection menu options.
 * 
 * @interface SelectionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SelectionMenuOptions {
  /**
   * Callback function when the selection menu appears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onAppear?: () => void;

  /**
   * Callback function when the selection menu disappears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onDisappear?: () => void;
}

declare class RichEditorController {
  /**
   * Get caret offset from controller.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getCaretOffset(): number;

  /**
   * Set caret offset.
   *
   * @param { number } offset - caret offset.
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  setCaretOffset(offset: number): boolean;

  /**
   * Add a text span.
   *
   * @param { string } value - text value.
   * @param { RichEditorTextSpanOptions } [options] - span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  addTextSpan(value: string, options?: RichEditorTextSpanOptions): number;

  /**
   * Add a image span.
   *
   * @param { PixelMap | ResourceStr } value - image value.
   * @param { RichEditorImageSpanOptions } [options] - image span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * Modify span style.
   *
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions): void;

  /**
   * Modify span style.
   *
   * @param { RichEditorParagraphStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;

  /**
   * Delete span.
   *
   * @param { RichEditorRange } [value] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  deleteSpans(value?: RichEditorRange): void;

  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;

  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorParagraphResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>;

  /**
   * close the select menu when menu is on.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  closeSelectionMenu(): void;

  /**
   * Get the typing text style.
   *
   * @returns { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getTypingStyle(): RichEditorTextStyle;

  /**
   * Set the typing text style.
   *
   * @param { RichEditorTextStyle } value - set the typing text style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  setTypingStyle(value: RichEditorTextStyle): void;

  /**
   * Text selection is achieved by specifying the start and end positions of the rich editor.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  setSelection(selectionStart: number, selectionEnd: number): void;

  /**
   * Called when the content is selected.
   *
   * @returns { RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getSelection(): RichEditorSelection;
}

/**
 * Provides attribute for RichEditor.
 *
 * @extends CommonMethod<RichEditorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class RichEditorAttribute extends CommonMethod<RichEditorAttribute> {
  /**
   * Called when on ready.
   *
   * @param { function } callback - The triggered function when rich editor is ready.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onReady(callback: () => void): RichEditorAttribute;

  /**
   * Called when the content is selected.
   *
   * @param { function } callback - The triggered function when select text.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onSelect(callback: (value: RichEditorSelection) => void): RichEditorAttribute;

  /**
   * Get text value information when about to input.
   *
   * @param { function } callback - The triggered function when text content is about to insert.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  aboutToIMEInput(callback: (value: RichEditorInsertValue) => boolean): RichEditorAttribute;

  /**
   * Get text value information when completed input.
   *
   * @param { function } callback - The triggered function when text content has been inserted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onIMEInputComplete(callback: (value: RichEditorTextSpanResult) => void): RichEditorAttribute;

  /**
   * Get text value information when about to delete.
   *
   * @param { function } callback - The triggered function when text content is about to delete.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  aboutToDelete(callback: (value: RichEditorDeleteValue) => boolean): RichEditorAttribute;

  /**
   * Notify that the deletion has been completed
   *
   * @param { function } callback - The triggered function when text content has been deleted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onDeleteComplete(callback: () => void): RichEditorAttribute;

  /**
   * Allow replication.
   *
   * @param { CopyOptions } value - Indicates the type of copy option.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  copyOptions(value: CopyOptions): RichEditorAttribute;

  /**
   * Bind to the selection menu.
   *
   * @param { RichEditorSpanType } spanType - Indicates the type of selection menu.
   * @param { CustomBuilder } content - Indicates the content of selection menu.
   * @param { ResponseType } responseType - Indicates response type of selection menu.
   * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind to the selection menu.
   *
   * @param { RichEditorSpanType } spanType - Indicates the type of selection menu.
   * @param { CustomBuilder } content - Indicates the content of selection menu.
   * @param { ResponseType | RichEditorResponseType } responseType - Indicates response type of selection menu.
   * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  bindSelectionMenu(spanType: RichEditorSpanType, content: CustomBuilder, responseType: ResponseType | RichEditorResponseType,
    options?: SelectionMenuOptions): RichEditorAttribute;

  /**
   * Define custom keyboard.
   *
   * @param { CustomBuilder } value
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  customKeyboard(value: CustomBuilder): RichEditorAttribute;

  /**
    * Defines onPaste callback.
    *
    * @param { function } callback Executed when a paste operation is performed.
    * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
  onPaste(callback: (event?: PasteEvent) => void): RichEditorAttribute;

  /**
   * Enable data detector.
   *
   * @param { boolean } enable - Enable data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  enableDataDetector(enable: boolean): RichEditorAttribute;

  /**
   * Data detector with config.
   *
   * @param { TextDataDetectorConfig } config - The config of text data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  dataDetectorConfig(config: TextDataDetectorConfig): RichEditorAttribute;
}

/**
 * Provides an interface for writing texts.
 *
 * @interface RichEditorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface RichEditorInterface {
  /**
   * Called when create RichEditor.
   *
   * @param { RichEditorOptions } value
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (value: RichEditorOptions): RichEditorAttribute;
}

/**
 * Defines RichEditor Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const RichEditorInstance: RichEditorAttribute;

/**
 * Defines RichEditor Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const RichEditor: RichEditorInterface;
