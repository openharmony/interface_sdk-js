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
 * @kit ArkGraphics 2D
 */
import type drawing from './@ohos.graphics.drawing';
import type common2D from './@ohos.graphics.common2D';

declare namespace text {

  /**
   * Text Alignment refers to how to align the horizontal position of text when displaying text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TextAlign {
    /**
     * Align the left edge of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    LEFT = 0,

    /**
     * Align the right edge of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    RIGHT = 1,

    /**
     * Align left and right edges of the text so that the left and right edges of the text are symmetrical.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    CENTER = 2,

    /**
     * Align left and right edges of the text so that the left and right edges of the text are aligned.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    JUSTIFY = 3,

    /**
     * Text start points are aligned.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    START = 4,

    /**
     * The end points of the text are aligned.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    END = 5,
  }

  /**
   * Enumerate text runs direction.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TextDirection {
    /**
     * The text is oriented from right to left.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    RTL,

    /**
     * The text is oriented from left to right.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    LTR,
  }

  /**
   * Enumerate text segmentation strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum BreakStrategy {
    /**
     * The segmentation strategy is greedy.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    GREEDY,

    /**
     * The segmentation strategy is high quality.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    HIGH_QUALITY,

    /**
     * The segmentation strategy is balanced.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BALANCED,
  }

  /**
   * Enumerate word break strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum WordBreakType {
    /**
     * Normal word break strategy.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NORMAL,

    /**
     * Breaks word by character.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BREAK_ALL,

    /**
     * Breaks word by phrase.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BREAK_WORD,
  }

  /**
   * Decoration for text.
   * @typedef Decoration
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface Decoration {
    /**
     * Setting text decoration by line.
     * @type { ?TextDecoration } It has four choice.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    textDecoration?: TextDecoration;

    /**
     * Setting text color.
     * @type { ?common2D.Color } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    color?: common2D.Color;

    /**
     * Setting decorationStyle Style.
     * @type { ?TextDecorationStyle } DecorationStyle style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    decorationStyle?: TextDecorationStyle;

    /**
     * Setting decoration line of thicknessScale.
     * @type { ?number } It is double type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    decorationThicknessScale?: number;
  }

  /**
   * Enumerates decoration for text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TextDecoration {
    /**
     * There are no text decoration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NONE,

    /**
     * There is a decoration line below the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    UNDERLINE,

    /**
     * There is a decoration line above the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    OVERLINE,

    /**
     * There is a decorative line running through the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    LINE_THROUGH,
  }

  /**
   * Enumerates decoration style.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TextDecorationStyle {
    /**
     * Solid style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    SOLID,

    /**
     * Double style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DOUBLE,

    /**
     * Dotted style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DOTTED,

    /**
     * Dashed style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DASHED,

    /**
     * Wavy style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    WAVY,
  }

  /**
   * Enumeration of font weight of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FontWeight {
    /**
     * Thin
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W100,

    /**
     * Extra-light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W200,

    /**
     * Light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W300,

    /**
     * Normal/Regular
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W400,

    /**
     * Medium
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W500,

    /**
     * Semi-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W600,

    /**
     * Bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W700,

    /**
     * Extra-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W800,

    /**
     * Black
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    W900,
  }

  /**
   * Enumeration of font style of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum FontStyle {
    /**
     * Upright font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    NORMAL,

    /**
     * Slant font.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ITALIC,

    /**
     * Oblique font.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    OBLIQUE,
  }

  /**
   * Enumeration of text base line.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum TextBaseline {
    /**
     * The vertical direction of the text is dominated by alphabetical order.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ALPHABETIC,

    /**
     * The vertical direction of the text is dominated by the meaning of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    IDEOGRAPHIC,
  }

  /**
   * Enumerates of ellipsis modal.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum EllipsisModal {
    /**
     * The ellipsis is shown in the head.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    HEAD,

    /**
     * The ellipsis is shown in the middle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    MIDDLE,

    /**
     * The ellipsis is shown in the tail.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TAIL,
  }

  /**
   * Describes a textstyle object.
   * @typedef TextStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface TextStyle {

    /**
     * Setting text decoration of textstyle.
     * @type { ?Decoration } decoration for text
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    decoration?: Decoration;

    /**
     * Setting color of textstyle.
     * @type { ?common2D.Color } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    color?: common2D.Color;

    /**
     * Setting font Weight of textstyle.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    fontWeight?: FontWeight;

    /**
     * Setting base line of textstyle.
     * @type { ?TextBaseline } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    baseline?: TextBaseline;

    /**
     * Setting font Families of textstyle.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    fontFamilies?: Array<string>;

    /**
     * Setting font size of textstyle.
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    fontSize?: number;

    /**
     * Setting letter spacing of textstyle.
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    letterSpacing?: number;

    /**
     * Setting word spacing of textstyle.
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    wordSpacing?: number;

    /**
     * Setting height scale of textstyle.
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    heightScale?: number;

    /**
     * Setting half leading of textstyle.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    halfLeading?: boolean;

    /**
     * Setting height of textstyle only.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    heightOnly?: boolean;

    /**
     * Setting text ellipsis.
     * @type { ?string } it is u16string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ellipsis?: string;

    /**
     * Setting text ellipsis mode.
     * @type { ?EllipsisModal } Ellipsis mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ellipsisModal?: EllipsisModal;

    /**
     * Setting the text locale.
     * @type { ?string } it is string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    locale?: string;
  }

  /**
   * The structure of font collection that provides the basis for graphics.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class FontCollection {
    /**
     * Load font.
     * @param { string } name - the font name.
     * @param { string | Resource } path - the path of the font file.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    loadFont(name: string, path: string | Resource): void;
  }

  /**
   * Determines the configuration used by ParagraphBuilder to position lines within a Paragraph of text.
   * @typedef ParagraphStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface ParagraphStyle {
    /**
     * The text style of paragraph.
     * @type { ?TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    textStyle?: TextStyle;

    /**
     * The text runs direction.
     * @type { ?TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    textDirection?: TextDirection;

    /**
     * Text alignment refers to how to align the horizontal position of text when displaying text.
     * @type { ?TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    align?: TextAlign;

    /**
     * The word break strategy.
     * @type { ?number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    wordBreak?: WordBreakType;

    /**
     * Maximum number of lines.
     * @type { ?number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    maxLines?: number;

    /**
     * The text segmentation strategy.
     * @type { ?BreakStrategy }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    breakStrategy?: BreakStrategy;
  }

  /**
   * Enumeration of positional placeholders aligned vertically relative to surrounding text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum PlaceholderAlignment {
    /**
     * Match the baseline of the placeholder with the base line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    OFFSET_AT_BASELINE,

    /**
     * Align the bottom edge of the placeholder with the base line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    ABOVE_BASELINE,

    /**
     * Align the top edge of the placeholder with the base line specified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BELOW_BASELINE,

    /**
     * Align the top edge of the place holder with the top edge of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TOP_OF_ROW_BOX,

    /**
     * Align the bottom edge of the place holder with the bottom edge of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    BOTTOM_OF_ROW_BOX,

    /**
     * Align the middle of the place holder with the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    CENTER_OF_ROW_BOX,
  }

  /**
   * Provide a description of place holder scope in creating typography.
   * @typedef PlaceholderSpan
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface PlaceholderSpan {
    /**
     * Setting the width of the place holder.
     * @type { number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    width: number;

    /**
     * Setting the height of the place holder.
     * @type { number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    height: number;

    /**
     * Setting alignment mode of place holder.
     * @type { PlaceholderAlignment } Custom PlaceholderAlignment
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    align: PlaceholderAlignment;

    /**
     * Setting base line of place holder.
     * @type { TextBaseline } Custom TextBaseline
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    baseline: TextBaseline;

    /**
     * Setting base line offset of place holder.
     * @type { number } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    baselineOffset: number;
  }

  /**
   * Provides the definition of the range.
   * @typedef Range
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface Range {
    /**
     * Left index.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    start: number;

    /**
     * Right index.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    end: number;
  }

  /**
   * A paragraph retains the size and position of each glyph in the text and can be efficiently resized and painted.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Paragraph {
    /**
     * Layout calculates the positioning of all the glyphs.
     * @param { number } width - Control how wide the text is allowed to be.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    layout(width: number): void;

    /**
     * Paint the laid out text onto the supplied canvas at (x, y).
     * @param { drawing.Canvas } canvas - Object
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;

    /**
     * Get max width of horizontal space this paragraph occupies.
     * @returns { number } Max width of horizontal space.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getMaxWidth(): number;

    /**
     * Get height of horizontal space this paragraph occupies.
     * @returns { number } Height of horizontal space this paragraph occupies.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getHeight(): number;

    /**
     * Get the longest line of horizontal space this paragraph occupies.
     * @returns { number } The longest line of horizontal space this paragraph occupies.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLongestLine(): number;

    /**
     * Get the min intrinsic width of horizontal space this paragraph occupies.
     * @returns { number } The min intrinsic width of horizontal space this paragraph occupies.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getMinIntrinsicWidth(): number;

    /**
     * Gets the max intrinsic width.
     * @returns { number } Intrinsic Width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getMaxIntrinsicWidth(): number;

    /**
     * Gets the alphabetic baseline.
     * @returns { number } Alphabetic Baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getAlphabeticBaseline(): number;

    /**
     * Gets the ideographic baseline.
     * @returns { number } Ideographic Baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getIdeographicBaseline(): number;

    /**
     * Gets the rects for range.
     * @param { Range } range - The range to set.
     * @param { RectWidthStyle } widthStyle - Width style to set.
     * @param { RectHeightStyle } heightStyle - Height style to set.
     * @returns { Array<TextBox> } The rects for range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

    /**
     * Gets the rects for placeholders.
     * @returns { Array<TextBox> } The rects for placeholders.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * Gets the glyph position at coordinate.
     * @param { number } x - the positionX of typography to set.
     * @param { number } y - the positionY of typography to set.
     * @returns { PositionWithAffinity } TextBlob object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;

    /**
     * Finds the start and end position of the word containing the glyphs of the given offset.
     * @param { number } offset - offset value
     * @returns { Range } The range value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getWordBoundary(offset: number): Range;

    /**
     * Get line count.
     * @returns { number } The line count value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLineCount(): number;

    /**
     * Gets the line height of the specified line.
     * @param { number } line - line number
     * @returns { number } The line height value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLineHeight(line: number): number;

    /**
     * Gets the line width of the specified line.
     * @param { number } line - line number
     * @returns { number } The line width value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getLineWidth(line: number): number;

    /**
     * Whether it exceed the maximum lines of typography.
     * @returns { boolean } The true indicates exceeding, the false indicates not exceeding.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    didExceedMaxLines(): boolean;

    /**
     * Get the text lines of paragraph.
     * @returns { Array<TextLine> } the tuple of TextLine.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getTextLines(): Array<TextLine>;
  }

  /**
   * Box that contain text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface TextBox{
    /**
     * Rect of text box.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    rect: common2D.Rect;

    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    direction: TextDirection;
  }

  /**
   * Position and affinity.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface PositionWithAffinity {
    /**
     * Position of text.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    pos: number;

    /**
     * Affinity of text.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    affinity: Affinity;
  }

  /**
   * Enumerates rect width style.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum RectWidthStyle {
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TIGHT,

    /**
     * Max style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    MAX,
  }

  /**
   * Enumerates rect height style.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum RectHeightStyle {
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    TIGHT,

    /**
     * Max style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    MAX,

    /**
     * Style including middle line space.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INCLUDELINESPACEMIDDLE,

    /**
     * Style including top line space.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INCLUDELINESPACETOP,

    /**
     * Style including bottom line space.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    INCLUDELINESPACEBOTTOM,

    /**
     * Struct style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    STRUCT,
  }

  /**
   * Enumerates text affinity.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  enum Affinity {
    /**
     * The position has affinity for the upstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */

    UPSTREAM,
    /**
     * The position has affinity for the downstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    DOWNSTREAM,
  }

  /**
   * Builds a Paragraph containing text with the given styling information.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class ParagraphBuilder {
    /**
     * Constructor ParagraphBuilder.
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font collection {@link FontCollection}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * Push a style to the stack.
     * @param { TextStyle } textStyle - Text style {@link TextStyle}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * Remove a style from the stack.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    popStyle(): void;

    /**
     * Adds text to the builder.
     * @param { string } text - Text string
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addText(text: string): void;

    /**
     * Add placeholder.
     * @param { PlaceholderSpan } placeholderSpan - Placeholder Span {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * Create paragraph object.
     * @returns { Paragraph } The paragraph value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    build(): Paragraph;
  }

  /**
   * The structure of text line that provides the basis of paragraph for graphics.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class TextLine {
    /**
     * Getting the count of glyphs.
     * @returns { number } The counts of glyphs.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getGlyphCount(): number;

    /**
     * Getting the range of text line.
     * @returns { Range } The range of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getTextRange(): Range;

    /**
     * Getting the glyph runs of text line.
     * @returns { Array<Run> } The tuple of glyph runs of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getGlyphRuns(): Array<Run>;

    /**
     * Painting the range of text line.
     * @param { drawing.Canvas } canvas - Canvas.
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;
  }

  /**
   * Independent rendering of text layout.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Run {
    /**
     * Gets the number of glyph.
     * @returns { number } The number of glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getGlyphCount(): number;

    /**
     * Gets the glyph identifier for each character.
     * @returns { Array<number> } Glyph identifier.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getGlyphs(): Array<number>;

    /**
     * Gets the font position offset.
     * @returns { Array<common2D.Point> } The position of the font in the layout.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getPositions(): Array<common2D.Point>;

	  /**
     * Gets the font position offset array.
     * @returns { Array<common2D.Point> } The position offset of the font in the layout.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getOffsets(): Array<common2D.Point>;

    /**
     * Gets the font object instance.
     * @returns { drawing.Font } The font object instance.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    getFont(): drawing.Font;

    /**
     * Paint the laid out text onto the supplied canvas at (x, y).
     * @param { drawing.Canvas } canvas - Object.
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;
  }
}