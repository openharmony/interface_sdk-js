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
 * @kit ArkGraphics2D
 */
import type drawing from './@ohos.graphics.drawing';
import type common2D from './@ohos.graphics.common2D';
/*** if arkts static */
import { Resource } from './global/resource';
/*** endif */

/**
 * The Text module provides a set of APIs for text layout and font management. It aims to deliver high-quality
 * typesetting through features like character-to-glyph conversion, kerning, line breaking, alignment, and text
 * measurement. Additionally, it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 *
 * This module provides the following classes for creating complex text paragraphs:
 *
 * - [TextStyle]{@link text.TextStyle}: defines the font type, size, spacing, and other text properties.
 * - [FontCollection]{@link text.FontCollection}: manages a collection of different fonts.
 * - [FontDescriptor]{@link text.FontDescriptor}: provides information about font descriptors.
 * - [ParagraphStyle]{@link text.ParagraphStyle}: controls line break and word break strategies for the entire
 * paragraph.
 * - [ParagraphBuilder]{@link text.ParagraphBuilder}: used to create different paragraph objects.
 * - [Paragraph]{@link text.ParagraphStyle}: created by calling [build()]{@link text.ParagraphBuilder.build} of the
 * **ParagraphBuilder** class.
 * - [LineTypeset]{@link text.LineTypeset}: created by calling
 * [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset} of the **ParagraphBuilder** class.
 * - [TextLine]{@link text.TextLine}: paragraph text on a line-by-line basis, obtained by calling
 * [getTextLines()]{@link text.Paragraph.getTextLines} of the **Paragraph** class.
 * - [Run]{@link text.RunMetrics}: text typesetting unit, obtained by calling
 * [getGlyphRuns()]{@link text.TextLine.getGlyphRuns} of the **TextLine** class.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform [since 24]
 * @form [since 22]
 * @atomicservice [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace text {

  /**
   * Enumerates the text alignment modes.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextAlign {
    /**
     * Left-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    LEFT = 0,

    /**
     * Right-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    RIGHT = 1,

    /**
     * Center-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER = 2,

    /**
     * Justified, which means that each line (except the last line) is stretched so that every line has equal width, and
     * the left and right margins are straight.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    JUSTIFY = 3,

    /**
     * Aligned with the start position, which depends on [TextDirection]{@link text.TextDirection}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    START = 4,

    /**
     * Aligned with the end position, which depends on [TextDirection]{@link text.TextDirection}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    END = 5
  }

  /**
   * Enumerates the vertical alignment modes of text.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextVerticalAlign {
    /**
     * Aligned to the baseline.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    BASELINE = 0,
    /**
     * Bottom-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * Center-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 2,
    /**
     * Top-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TOP = 3
  }

  /**
   * Enumerates the text directions.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDirection {
    /**
     * Right to left (RTL).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    RTL = 0,

    /**
     * Left to right (LTR).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    LTR = 1
  }

  /**
   * Enumerates the text break strategies.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum BreakStrategy {
    /**
     * Fills the current line as much as possible without adding hyphens.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GREEDY = 0,

    /**
     * Optimizes layout and may add hyphens when necessary.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH_QUALITY = 1,

    /**
     * Ensures consistent line width in a paragraph, adding hyphens if needed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BALANCED = 2
  }

  /**
   * Enumerates the word break types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum WordBreak {
    /**
     * Default mode that break words based on language-specific conventions.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.) This value is
     * suitable for Asian text that contains some non-Asian text. For example, it can be used to break consecutive
     * English characters.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BREAK_ALL = 1,

    /**
     * Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace or other natural
     * breakpoints to keep words intact. If no breakpoints are found, it breaks between any two characters. For CJK text
     * , this behaves like **NORMAL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BREAK_WORD = 2,

    /**
     * Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added, it behaves like
     * **BREAK_WORD**.
     *
     * When using this word break strategy, you need to use the `locale` attribute in [TextStyle]{@link text.TextStyle}
     * to define the language environment, which affects the word break effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    BREAK_HYPHEN = 3
  }

  /**
   * Describes a text decoration.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Decoration {
    /**
     * Type of the decoration. The default value is **NONE**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textDecoration?: TextDecorationType;

    /**
     * Color of the decoration. The default value is the text color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;

    /**
     * Style of the decoration. The default value is **SOLID**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    decorationStyle?: TextDecorationStyle;

    /**
     * Scale factor for the thickness of the decoration line. The value is a floating point number. The default value is
     * **1.0**. If the value is less than or equal to 0, no decoration line is drawn.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    decorationThicknessScale?: double;
  }

  /**
   * Enumerates the text decoration types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDecorationType {
    /**
     * No decoration is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * An underline is used for decoration.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE = 1,

    /**
     * An overline is used for decoration.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    OVERLINE = 2,

    /**
     * A strikethrough is used for decoration.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    LINE_THROUGH = 3
  }

  /**
   * Enumerates the text decoration styles.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDecorationStyle {
    /**
     * Solid style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SOLID = 0,

    /**
     * Double style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DOUBLE = 1,

    /**
     * Dotted style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DOTTED = 2,

    /**
     * Dashed style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DASHED = 3,

    /**
     * Wavy style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    WAVY = 4
  }

  /**
   * Enumerates the font weights.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontWeight {
    /**
     * Font weight W100.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W100 = 0,

    /**
     * Font weight W200.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W200 = 1,

    /**
     * Font weight W300.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W300 = 2,

    /**
     * Font weight W400.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W400 = 3,

    /**
     * Font weight W500.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W500 = 4,

    /**
     * Font weight W600.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W600 = 5,

    /**
     * Font weight W700.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W700 = 6,

    /**
     * Font weight W800.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W800 = 7,

    /**
     * Font weight W900.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W900 = 8
  }

  /**
   * Enumerates the font styles.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontStyle {
    /**
     * Normal.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * Italic. If no italic version is available for the current font, the oblique version will be used instead.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ITALIC = 1,

    /**
     * Oblique. If no oblique version is available for the current font, the italic version will be used instead.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    OBLIQUE = 2
  }

  /**
   * Enumerates the font widths.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontWidth {
    /**
     * Ultra condensed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ULTRA_CONDENSED = 1,

    /**
     * Extra condensed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXTRA_CONDENSED = 2,

    /**
     * Condensed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONDENSED = 3,

    /**
     * Semi condensed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_CONDENSED = 4,

    /**
     * Normal.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 5,

    /**
     * Semi expanded.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_EXPANDED = 6,

    /**
     * Expanded.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXPANDED = 7,

    /**
     * Extra expanded.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXTRA_EXPANDED = 8,

    /**
     * Ultra expanded.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ULTRA_EXPANDED = 9
  }

  /**
   * Enumerates the text height modifier patterns.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextHeightBehavior {
    /**
     * Allows the first line of the paragraph to rise and the last line to drop.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALL = 0x0,

    /**
     * Prevents the first line of a paragraph from rising.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLE_FIRST_ASCENT = 0x1,

    /**
     * Prevents the last line of a paragraph from dropping.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLE_LAST_ASCENT = 0x2,

    /**
     * Prevents the first line of the paragraph to rise and the last line to drop.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLE_ALL = 0x1 | 0x2
  }

  /**
   * Enumerates the text baseline types.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextBaseline {
    /**
     * Alphabetic baseline, where the letters in Latin alphabets sit on.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALPHABETIC = 0,

    /**
     * Ideographic baseline, where the baseline is at the bottom of the text area. It is usually used for CJK text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    IDEOGRAPHIC = 1
  }

  /**
   * Enumerates the ellipsis styles.
   *
   * EllipsisMode.START and EllipsisMode.MIDDLE take effect only when text overflows in a single line.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum EllipsisMode {
    /**
     * Ellipsis at the beginning. This enumerated value is valid only when **maxLines** is set to **1** in
     * [ParagraphStyle]{@link text.ParagraphStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    START = 0,

    /**
     * Ellipsis in the middle. This enumerated value is valid only when **maxLines** is set to **1** in
     * [ParagraphStyle]{@link text.ParagraphStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    MIDDLE = 1,

    /**
     * Ellipsis at the end. This enumerated value is valid when **maxLines** is set to any value in
     * [ParagraphStyle]{@link text.ParagraphStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    END = 2,

    /**
     * Ellipsis at the beginning. This enumerated value is valid when **maxLines** is set to any value in
     * [ParagraphStyle]{@link text.ParagraphStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_START = 3,

    /**
     * Ellipsis in the middle. This enumerated value is valid when **maxLines** is set to any value in
     * [ParagraphStyle]{@link text.ParagraphStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_MIDDLE = 4
  }

  /**
   * Describes the text shadow.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextShadow {
    /**
     * Color of the text shadow. The default value is black (255, 0, 0, 0).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;
    /**
     * Shadow offset position of the font based on the current text, in which the horizontal and vertical coordinates
     * are greater than or equal to 0, with the unit being physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    point?: common2D.Point;
    /**
     * Blur radius, a floating-point value in physical pixels (px), with a default value of **0.0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    blurRadius?: double;
  }

  /**
   * Describes the style of a rectangle.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface RectStyle {
    /**
     * Color of the rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color: common2D.Color;

    /**
     * Upper left radius of the rectangle, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    leftTopRadius: double;

    /**
     * Upper right radius of the rectangle, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rightTopRadius: double;

    /**
     * Lower right radius of the rectangle, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rightBottomRadius: double;

    /**
     * Lower left radius of the rectangle, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    leftBottomRadius: double;
  }

  /**
   * Enumerates the line height scaling base.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice [since 22]
   * @since 21 dynamic
   * @since 23 static
   */
  enum LineHeightStyle {
    /**
     * Uses the font size as the scaling base. The line height is calculated as follows:
     * [TextStyle]{@link text.TextStyle}.fontSize * [TextStyle]{@link text.TextStyle}.heightScale.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    FONT_SIZE = 0,

    /**
     * Uses the font height as the scaling base. The line height is calculated as follows: the height of the shaped
     * glyph * [TextStyle]{@link text.TextStyle}.heightScale.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    FONT_HEIGHT = 1
  }

  /**
   * Describes a font feature.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FontFeature {
    /**
     * String identified by the keyword in the font feature key-value pair.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * Value in the font feature key-value pair.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    value: int;
  }

  /**
   * Describes a font variation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FontVariation {
    /**
     * String identified by the keyword in the font variation key-value pair.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    axis: string;
    /**
     * Value in the font variation key-value pair.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    value: double;
    /**
     * Whether to normalize. If the value is **true**, the value range of the value field is -1 to 1, which maps the
     * minimum value to the maximum value configured in the font file. The value **0** indicates the default value
     * configured in the font file. If the value is **false**, the value range of the value field is the adjustable
     * range supported by the font file itself. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    isNormalized?: boolean;
  }

  /**
   * Enumerates the text badges.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextBadgeType {
    /**
     * Disables the superscript and subscript.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_BADGE_NONE = 0,

    /**
     * Enables the superscript.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_SUPERSCRIPT = 1,

    /**
     * Enables the subscript.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_SUBSCRIPT = 2
  }

  /**
   * Describes a text style.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextStyle {

    /**
     * Text decoration. By default, no decoration is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    decoration?: Decoration;

    /**
     * Text color. The default color is white.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;

    /**
     * Font weight. The default value is **W400**. Currently, only the default system font supports font weight
     * adjustment. For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke
     * thickness. If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWeight?: FontWeight;

    /**
     * Font style. The default value is **NORMAL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontStyle?: FontStyle;

    /**
     * Text baseline type. The default value is **ALPHABETIC**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline?: TextBaseline;

    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFamilies?: Array<string>;

    /**
     * Font size, a floating-point value with a default value of **14.0**, measured in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontSize?: double;

    /**
     * Character spacing, a floating-point value in physical pixels (px) with a default value of **0.0**. A positive
     * value widens the character gap, while a negative value narrows it.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    letterSpacing?: double;

    /**
     * Word spacing, a floating-point value in physical pixels (px) with a default value of **0.0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    wordSpacing?: double;

    /**
     * Maximum line height, in physical pixels (px). If the line height is scaled, the maximum line height takes effect
     * when [TextStyle]{@link text.TextStyle}.heightScale is greater than 0. The value is a positive floating point
     * number. The default value is **Number.MAX_VALUE**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightMaximum?: double;

    /**
     * Minimum line height, in physical pixels (px). If the line height is scaled, the minimum line height takes effect
     * when [TextStyle]{@link text.TextStyle}.heightScale is greater than 0. The value is a non-negative floating point
     * number. The default value is **0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightMinimum?: double;

    /**
     * Scaling base style of the line height. The default value is **FONT_SIZE**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightStyle?: LineHeightStyle;

    /**
     * Scale factor of the line height. The value is a floating point number. The default value is **1.0**. This
     * parameter is valid only when **heightOnly** is set to** true**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightScale?: double;

    /**
     * Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and
     * bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite. The
     * default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    halfLeading?: boolean;

    /**
     * How the height of the text box is set. The value **true** means that the height of the text box is set based on
     * the font size and the value of **heightScale**, and **false** means that the height is set based on the line
     * height and line spacing. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightOnly?: boolean;

    /**
     * Ellipsis content, which will be used to replace the extra content.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ellipsis?: string;

    /**
     * Ellipsis type. The default value is **END**, indicating that the ellipsis is at the end of a line.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ellipsisMode?: EllipsisMode;

    /**
     * Language type. For example, **'en-Latn'** indicates English (Latin script), **'zh-Hans'** indicates Simplified
     * Chinese, and **'zh-Hant'** indicates Traditional Chinese. Supports two-segment language tags in the language-
     * script format, where language complies with the ISO 639-1 standard and script complies with the ISO 15924
     * standard. If the locale is not specified, set to an empty string, or set to **undefined**, the default locale is
     * **'zh-Hans'**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * Underline offset of text, a floating-point value in physical pixels (px), with a default value of **0.0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baselineShift?: double;

    /**
     * Array of font features.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFeatures?: Array<FontFeature>;

    /**
     * Array of shadows.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textShadows?: Array<TextShadow>;

    /**
     * Rectangle style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    backgroundRect?: RectStyle;

    /**
     * Array of font variations.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontVariations?: Array<FontVariation>;

    /**
     * Sets whether to use superscript or subscript in text layout. **TEXT_SUPERSCRIPT** indicates that superscript is
     * enabled, and **TEXT_SUBSCRIPT** indicates that subscript is enabled. The default value is **TEXT_BADGE_NONE**,
     * indicating that neither superscript nor subscript is enabled.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    badgeType?: TextBadgeType;

    /**
     * Font width. The default value is **NORMAL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    fontWidth?: FontWidth;

    /**
     * Edge processing mode for drawing texts. The default value is **ANTI_ALIAS**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontEdging?: drawing.FontEdging;

    /**
     * Array of font typefaces
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    fontTypefaces?: Array<drawing.Typeface>;
  }

  /**
   * Implements a collection of fonts.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @form [since 22]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class FontCollection {
    /**
     * Obtains a global **FontCollection** instance.
     *
     * @returns { FontCollection } **FontCollection** instance.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    static getGlobalInstance(): FontCollection;

    /**
     * Obtains the local **FontCollection** instance. This API is recommended for widgets.
     *
     * @returns { FontCollection } **FontCollection** instance.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    static getLocalInstance(): FontCollection;

    /**
     * Loads a custom font. This API returns the result synchronously. In this API, **name** specifies the alias of the
     * font, and the custom font effect can be displayed only when the value of **name** is set in **fontFamilies** in
     * **[TextStyle]{@link text.TextStyle}**. The supported font file formats are TTF and OTF.
     *
     * @param { string } name - Name of the font to be called after the font is loaded.
     * @param { string | Resource } path - Path of the font file to be imported. The path must be in the format of "
     *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
     *     **resources/rawfile** directory in the project, which includes the font file name).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    loadFontSync(name: string, path: string | Resource): void;

    /**
     * Loads the custom font. This API uses a promise to return the result. In this API, **name** specifies the alias of
     * the font, and the custom font effect can be displayed only when the value of **name** is set in **fontFamilies**
     * in **[TextStyle]{@link text.TextStyle}**. The supported font file formats are TTF and OTF.
     *
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to be loaded. The path must be in the format of "
     *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
     *     **resources/rawfile** directory in the project, which includes the font file name).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed. [since 24]
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    loadFont(name: string, path: string | Resource): Promise<void>;

    /**
     * Loads a custom font. This API returns the result synchronously. In this API, **name** specifies the alias of the
     * font, and the custom font effect can be displayed only when the value of **name** is set in **fontFamilies** in
     * **[TextStyle]{@link text.TextStyle}**. The supported font file formats are TTF, OTF, and TTC.
     *
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to be loaded. The path must be in the format of "
     *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
     *     **resources/rawfile** directory in the project, which includes the font file name).
     * @param { int } [index] - Font index to be loaded when the font file format is TTC. The default value is **0**,
     *     indicating that the first font of the TTC file is loaded.<br>The index value of a non-TTC file is
     *     meaningless. If an index is specified, the value can only be **0**.
     * @throws { BusinessError } 25900001 - Parameter error.
     * @throws { BusinessError } 25900002 - File not found.
     * @throws { BusinessError } 25900003 - Failed to open the file.
     * @throws { BusinessError } 25900004 - File seek failed.
     * @throws { BusinessError } 25900005 - Failed to get the file size.
     * @throws { BusinessError } 25900006 - Failed to read the file.
     * @throws { BusinessError } 25900007 - Empty file.
     * @throws { BusinessError } 25900008 - Corrupted file.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    loadFontSyncWithCheck(name: string, path: string | Resource, index?: int): void;

    /**
     * Loads a custom font. This API uses a promise to return the result. In this API, **name** specifies the alias of
     * the font, and the custom font effect can be displayed only when the value of **name** is set in **fontFamilies**
     * in **[TextStyle]{@link text.TextStyle}**. The supported font file formats are TTF, OTF, and TTC.
     *
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to be loaded. The path must be in the format of "
     *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
     *     **resources/rawfile** directory in the project, which includes the font file name).
     * @param { int } [index] - Font index to be loaded when the font file format is TTC. The default value is **0**,
     *     indicating that the first font of the TTC file is loaded.<br>The index value of a non-TTC file is
     *     meaningless. If an index is specified, the value can only be **0**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 25900001 - Parameter error.
     * @throws { BusinessError } 25900002 - File not found.
     * @throws { BusinessError } 25900003 - Failed to open the file.
     * @throws { BusinessError } 25900004 - File seek failed.
     * @throws { BusinessError } 25900005 - Failed to get the file size.
     * @throws { BusinessError } 25900006 - Failed to read the file.
     * @throws { BusinessError } 25900007 - Empty file.
     * @throws { BusinessError } 25900008 - Corrupted file.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    loadFontWithCheck(name: string, path: string | Resource, index?: int): Promise<void>;

    /**
     * Uninstalls a specified custom font. This API is synchronous.
     *
     * After this API is called to unload a custom font corresponding to a font alias, the custom font is no longer
     * available.
     *
     * All layout objects that use the font alias must be destroyed and recreated.
     *
     * - Unloading a non-existent font alias does not produce any effect and does not throw an error.
     * - This operation only affects future font usage.
     * - Unloading a font that is currently in use may lead to text rendering exceptions (such as garbled characters or
     * missing glyphs).
     *
     * @param { string } name - Font alias to be unregistered, which is the same as the alias used for loading the font.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    unloadFontSync(name: string): void;

    /**
     * Uninstalls a specified custom font. This API uses a promise to return the result.
     *
     * After this API is called to unload a custom font corresponding to a font alias, the custom font is no longer
     * available.
     *
     * All layout objects that use the font alias must be destroyed and recreated.
     *
     * - Unloading a non-existent font alias does not produce any effect and does not throw an error.
     * - This operation only affects future font usage.
     * - Unloading a font that is currently in use may lead to text rendering exceptions (such as garbled characters or
     * missing glyphs).
     *
     * @param { string } name - Alias of the font to be uninstalled, which is the same as the alias used when the font
     *     is loaded.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    unloadFont(name: string): Promise<void>;

    /**
     * Clears the font cache. (The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.)
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    clearCaches(): void;

    /**
     * Sets whether paragraph caches are enabled.
     *
     * @param { boolean } enable - Indicates whether to enable paragraph caches, where true enables and false disables.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setParagraphCachesEnabled(enable: boolean): void;
  }

  /**
   * Describes the strut style, which determines the line spacing, baseline alignment mode, and other properties related
   * to the line height when drawing texts. The strut style is disabled by default.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface StrutStyle {
    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFamilies?: Array<string>;

    /**
     * Font style. The default value is **NORMAL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontStyle?: FontStyle;

    /**
     * Font width. The default value is **NORMAL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWidth?: FontWidth;

    /**
     * Font weight. The default value is **W400**. The default system font supports font weight adjustment. For other
     * fonts, if the weight is less than W600, there is no variation in stroke thickness. If the weight is greater than
     * or equal to W600, it might result in a fake bold effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWeight?: FontWeight;

    /**
     * Font size, a floating-point value with a default value of **14.0**, measured in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontSize?: double;

    /**
     * Scale factor of the line height. The value is a floating point number. The default value is **1.0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height?: double;

    /**
     * Custom line spacing applied to the strut, a floating-point value in physical pixels (px), with a default value of
     * **-1.0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    leading?: double;

    /**
     * Whether to forcibly use the strut height for all lines. The value **true** means to forcibly use the strut height
     * for all lines, and **false** means the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    forceHeight?: boolean;

    /**
     * Whether to enable the strut style. The value **true** means to enable the strut style, and **false** means the
     * opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    enabled?: boolean;

    /**
     * Whether to override the height. The value **true** means to override the height, and **false** means the
     * opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightOverride?: boolean;

    /**
     * Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and
     * bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite. The
     * default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    halfLeading?: boolean;
  }

  /**
   * Describes a paragraph style.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ParagraphStyle {
    /**
     * Text style applied to the paragraph. The default value is the initial text style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textStyle?: TextStyle;

    /**
     * Text direction. The default value is **LTR**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textDirection?: TextDirection;

    /**
     * Text alignment mode. The default value is **START**. This parameter is invalid when the **tab** parameter is
     * configured.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    align?: TextAlign;

    /**
     * Word break type. The default value is **BREAK_WORD**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    wordBreak?: WordBreak;

    /**
     * Maximum number of lines. The value is an integer. The default value is **1e9**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    maxLines?: int;

    /**
     * Text break strategy. The default value is **GREEDY**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    breakStrategy?: BreakStrategy;

    /**
     * Strut style. The default value is the initial **StrutStyle** object.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strutStyle?: StrutStyle;

    /**
     * Text height modifier pattern. The default value is **ALL**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textHeightBehavior?: TextHeightBehavior;

    /**
     * Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character is
     * replaced with a space. This parameter is invalid when it is used together with the **align** parameter or the
     * **ellipsis** parameter in [TextStyle]{@link text.TextStyle}.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    tab?: TextTab;

    /**
     * Whether to consider the alignment impact of trailing spaces during text layout. The value **true** indicates that
     * the alignment impact of trailing spaces is ignored, and the value **false** indicates that the alignment impact
     * of trailing spaces is considered. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    trailingSpaceOptimized?: boolean;

    /**
     * Sets whether to enable automatic spacing during text typography. **true** indicates that the automatic spacing
     * feature is enabled. In this case, automatic spacing applies between CJK (Chinese, Japanese, and Korean) and
     * Western characters (Latin, Cyrillic, and Greek), between CJK and digits, between CJK and copyright symbols,
     * between copyright symbols and digits, and between copyright symbols and Western characters. **false** (default)
     * indicates that the automatic spacing feature is disabled.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    autoSpace?: boolean;

    /**
     * Vertical alignment of text. This parameter takes effect when line height scaling (that is, **heightScale** of
     * [TextStyle]{@link text.TextStyle}) is enabled or different font sizes (that is, **fontSize** of
     * [TextStyle]{@link text.TextStyle}) are set for text in a line. If superscript and subscript text (that is,
     * **badgeType** of [TextStyle]{@link text.TextStyle}) is set in a line, the superscript and subscript text will
     * participate in vertical alignment as common text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    verticalAlign?: TextVerticalAlign;

    /**
     * Line spacing, in physical pixels (px). The default value is **0**. **lineSpacing** is not restricted by
     * **lineHeightMaximum** and **lineHeightMinimum** in [TextStyle]{@link text.TextStyle}. By default, the line
     * spacing is reserved for the last line. You can set [TextStyle]{@link text.TextStyle}.textHeightBehavior to
     * **DISABLE_ALL** or **DISABLE_LAST_ASCENT** to disable the line spacing for the last line.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineSpacing?: double;

    /**
     * Sets whether to use punctuation compression at the beginning of a line in text layout. **true** means yes;
     * **false** otherwise. The default value is **false**.
     *
     * **NOTE**
     *
     * 1. The font file must support the ss08 feature in [FontFeature]{@link text.FontFeature}.
     * Otherwise, compression cannot be performed.
     * 2. Only the punctuations within the punctuation compression range at the beginning of a line
     * are in the scope of this feature.
     *
     * Punctuation range at the beginning of a line.
     * | Punctuation| Unicode Code Point| Unicode Name|
     * |---------|---------|-------------|
     * | ¡¸| U+300C | LEFT CORNER BRACKET |
     * | ¡º| U+300E | LEFT WHITE CORNER BRACKET |
     * | " | U+201C | LEFT DOUBLE QUOTATION MARK |
     * | ' | U+2018 | LEFT SINGLE QUOTATION MARK |
     * | £¨| U+FF08 | FULLWIDTH LEFT PARENTHESIS |
     * | ¡¶| U+300A | LEFT DOUBLE ANGLE BRACKET |
     * | ¡´| U+3008 | LEFT ANGLE BRACKET |
     * | ¡¾| U+3010 | LEFT BLACK LENTICULAR BRACKET |
     * | ¡¼| U+3016 | LEFT WHITE LENTICULAR BRACKET |
     * | ¡²| U+3014 | LEFT TORTOISE SHELL BRACKET |
     * | £Û| U+FF3B | FULLWIDTH LEFT SQUARE BRACKET |
     * | £û| U+FF5B | FULLWIDTH LEFT CURLY BRACKET |
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    compressHeadPunctuation?: boolean;

    /**
     * Sets whether to use padding at the beginning and end of a line in text layout. **true** means yes; **false**
     * otherwise. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    includeFontPadding?: boolean;

    /**
     * Sets whether to enable line height rollback during text layout. If the set line height is less than the actual
     * line height, the line height is rolled back to the actual line height. **true** means yes; **false** otherwise.
     * The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    fallbackLineSpacing?: boolean;

    /**
     * Indentation before the first line of text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    firstLineHeadIndent?: double;

    /**
     * Indentation after each line of text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    tailIndents?: Array<double>;

    /**
     * Indentation before each line of text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    headIndents?: Array<double>;

    /**
     * Whether to enable orphan char optimization.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    orphanCharOptimization?: boolean;
  }

  /**
   * Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.
   *
   * ![image_PlaceholderAlignment.png](docroot://reference/apis-arkgraphics2d/figures/image_PlaceholderAlignment.png)
   *
   * > **NOTE**
   * >
   * > The figure shows the last three alignment modes. The first three alignment modes are similar in text baseline
   * > alignment, with the comparison reference being the text baseline, indicated by the green line.
   * >
   * > ![image_Baseline.png](docroot://reference/apis-arkgraphics2d/figures/image_Baseline.png)
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PlaceholderAlignment {
    /**
     * Aligns the baseline of the placeholder to the baseline of the text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_AT_BASELINE = 0,

    /**
     * Aligns the bottom edge of the placeholder to the baseline of the text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ABOVE_BASELINE = 1,

    /**
     * Aligns the top edge of the placeholder to the baseline of the text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BELOW_BASELINE = 2,

    /**
     * Aligns the top edge of the placeholder to the top edge of the text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_OF_ROW_BOX = 3,

    /**
     * Aligns the bottom edge of the placeholder to the bottom edge of the text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_OF_ROW_BOX = 4,

    /**
     * Center-aligned.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER_OF_ROW_BOX = 5,

    /**
     * Aligns with the text baseline.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    FOLLOW_PARAGRAPH = 6
  }

  /**
   * Describes the placeholder style.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlaceholderSpan {
    /**
     * Width of the placeholder, in units of px. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * Height of the placeholder, in units of px. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * Vertical alignment of the placeholder relative to the surrounding text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    align: PlaceholderAlignment;

    /**
     * Type of the text baseline.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline: TextBaseline;

    /**
     * Offset to the text baseline, in units of px. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baselineOffset: double;
  }

  /**
   * Describes a left-closed and right-open interval.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Range {
    /**
     * Index of the leftmost point of the interval. The value is an integer.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * Index of the rightmost point of the interval. The value is an integer.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Enumerates the font types, which can be combined through bitwise OR operations.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  enum SystemFontType {
    /**
     * All font types, including the system font type, style font type, and user-installed font type.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    ALL = 1 << 0,

    /**
     * System font type.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    GENERIC = 1 << 1,

    /**
     * Style font type. The style font type is designed for 2-in-1 devices.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    STYLISH = 1 << 2,

    /**
     * Font type that has been installed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    INSTALLED = 1 << 3,

    /**
     * Custom font type.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    CUSTOMIZED = 1 << 4
  }

  /**
   * Represents the font variable axis information.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationAxis {
    /**
     * Keyword identifier of the font variable axis.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    key: string;

    /**
     * Minimum value of the font variable axis.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    minValue: double;

    /**
     * Maximum value of the font variable axis.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    maxValue: double;

    /**
     * Default value of the font variable axis.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    defaultValue: double;

    /**
     * Flag of the font variable axis, which is used to indicate whether a variable axis should be hidden from users.
     * The value can be **0** or **1**. The value **0** indicates that the axis is visible to users, and the value **1**
     * indicates that the axis should be hidden.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    flags: int;

    /**
     * English name of the font variable axis.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * Localized name of the font variable axis, which can be empty.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;
  }

  /**
   * Font variable instance information, which stores preset variable font style information.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationInstance {
    /**
     * English name of the font variable instance.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * Localized name of the font variable instance, which can be empty.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;

    /**
     * Array of font variations.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    coordinates: Array<FontVariation>;
  }

  /**
   * Describes the font descriptor information.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  interface FontDescriptor {
    /**
     * Absolute path of the font. Any string that complies with the system restrictions is acceptable. The default value
     * is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    path?: string;

    /**
     * Unique name of the font. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    postScriptName?: string;

    /**
     * Font name. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fullName?: string;

    /**
     * Family name of the font. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fontFamily?: string;

    /**
     * Subfamily name of the font. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fontSubfamily?: string;

    /**
     * Font weight. The default value is **0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    weight?: FontWeight;

    /**
     * Font width. The value is an integer ranging from 1 to 9. The default value is **0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    width?: int;

    /**
     * Whether the font is italic. The value **0** means that the font is not italic, and **1** means the opposite. The
     * default value is **0**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    italic?: int;

    /**
     * Whether the font is monospaced. The value **true** means that the font is monospaced, and **false** means the
     * opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    monoSpace?: boolean;

    /**
     * Whether the font is symbolic. The value **true** means that the font is symbolic, and **false** means the
     * opposite.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    symbolic?: boolean;

    /**
     * Extracts the unique font ID based on the system language configuration. If the font file does not contain the
     * configuration corresponding to the current language, the information corresponding to **en** is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localPostscriptName?: string;

    /**
     * Extracts the full font name based on the system language configuration. If the font file does not contain the
     * configuration corresponding to the current language, the information corresponding to **en** is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFullName?: string;

    /**
     * Extracts the font family name based on the system language configuration. If the font file does not contain the
     * configuration corresponding to the current language, the information corresponding to **en** is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFamilyName?: string;

    /**
     * Extracts the font subfamily name based on the system language configuration. If the font file does not contain
     * the configuration corresponding to the current language, the information corresponding to **en** is used.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localSubFamilyName?: string;

    /**
     * Font version. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    version?: string;

    /**
     * Font manufacturer information. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    manufacture?: string;

    /**
     * Font copyright information. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    copyright?: string;

    /**
     * Font trademark information. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    trademark?: string;

    /**
     * Font license information. Any string is acceptable. The default value is an empty string.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    license?: string;

    /**
     * Font variable axis record array, which is used to describe the variable axis information supported by the font.
     * For non-variable fonts, this field is **undefined**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationAxisRecords?: Array<FontVariationAxis>;

    /**
     * Font variable instance record array, which is used to describe the variable instance information supported by the
     * font. For non-variable fonts, this field is **undefined**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationInstanceRecords?: Array<FontVariationInstance>;

    /**
     * Font index. This parameter is valid only when the font file is in TTC format. The value is **0** for the TTF
     * format.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    index?: int;
  }

  /**
   * Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.
   *
   * Before calling any of the following APIs, you must use [build()]{@link text.ParagraphBuilder.build} of the
   * [ParagraphBuilder]{@link text.ParagraphBuilder} class to create a **Paragraph** object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class Paragraph {
    /**
     * Performs layout with the given height and width and calculates the positions of all glyphs.
     *
     * @param { TextRectSize } size - Constrained height and width, in physical pixels (px).
     * @returns { TextLayoutResult } Actual size after layout and character range after typesetting.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    layoutWithConstraints(size: TextRectSize): TextLayoutResult;

    /**
     * Performs layout and calculates the positions of all glyphs.
     *
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    layoutSync(width: double): void;

    /**
     * Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.
     *
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    layout(width: double): Promise<void>;

    /**
     * Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.
     *
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - Horizontal coordinate of the upper left corner, which is a floating-point value, in
     *     physical pixels (px).
     * @param { double } y - Vertical coordinate of the upper left corner, which is a floating-point value, in physical
     *     pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Draws text along a path on the canvas.
     *
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { drawing.Path } path - Path along which the text is drawn.
     * @param { double } hOffset - Offset along the path direction. Positive values extend forward from the path start
     *     point, and negative values extend backward. Unit: physical pixels (px).
     * @param { double } vOffset - Offset along the vertical direction of the path. Positive values extend to the right
     *     along the path, and negative values extend to the left. Unit: physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: double, vOffset: double): void;

    /**
     * Obtains the maximum width of the line in the text.
     *
     * @returns { double } Maximum line width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxWidth(): double;

    /**
     * Obtains the total height of the text.
     *
     * @returns { double } Total height, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getHeight(): double;

    /**
     * Obtains the longest line in the text.
     *
     * @returns { double } Longest line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLongestLine(): double;

    /**
     * Obtains the width of the longest line, including its indentation, in the text. You are advised to round up the
     * return value. If the text content is empty, **0** is returned.
     *
     * @returns { double } Width of the longest line, including its indentation. The value is a floating point number,
     *     in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 13 dynamic
     * @since 23 static
     */
    getLongestLineWithIndent(): double;

    /**
     * Obtains the minimum intrinsic width of the paragraph.
     *
     * @returns { double } Minimum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMinIntrinsicWidth(): double;

    /**
     * Obtains the maximum intrinsic width of the paragraph.
     *
     * @returns { double } Maximum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxIntrinsicWidth(): double;

    /**
     * Obtains the alphabetic baseline.
     *
     * @returns { double } Alphabetic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlphabeticBaseline(): double;

    /**
     * Obtains the ideographic baseline.
     *
     * @returns { double } Ideographic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getIdeographicBaseline(): double;

    /**
     * Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and
     * height.
     *
     * @param { Range } range - Range of the text.
     * @param { RectWidthStyle } widthStyle - Width of the rectangle.
     * @param { RectHeightStyle } heightStyle - Height of the rectangle.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

    /**
     * Obtains the rectangles occupied by all placeholders in the text.
     *
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * Obtains the position of a glyph closest to the given coordinates.
     *
     * @param { double } x - Horizontal coordinate, which is a floating-point value in physical pixels (px).
     * @param { double } y - Vertical coordinate, which is a floating-point value in physical pixels (px).
     * @returns { PositionWithAffinity } Position of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity;

    /**
     * Obtains the range of the word where the glyph with a given offset is located.
     *
     * @param { int } offset - Offset of the glyph. The value is an integer.
     * @returns { Range } Range of the word.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getWordBoundary(offset: int): Range;

    /**
     * Obtains the number of text lines.
     *
     * @returns { int } Number of text lines. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineCount(): int;

    /**
     * Obtains the height of a given line.
     *
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() ¨C 1.
     * @returns { double } Line height, in physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineHeight(line: int): double;

    /**
     * Obtains the width of a given line.
     *
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() ¨C 1.
     * @returns { double } Line width, in physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineWidth(line: int): double;

    /**
     * Checks whether the number of lines in the paragraph exceeds the maximum.
     *
     * @returns { boolean } Check result. The value **true** means that the number of lines exceeds the maximum, and
     *     **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    didExceedMaxLines(): boolean;

    /**
     * Obtains all the text lines.
     *
     * @returns { Array<TextLine> } Array of text lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getTextLines(): Array<TextLine>;

    /**
     * Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.
     *
     * @param { int } lineNumber - Line number of the text range, starting from 0. This API can only be used to obtain
     *     the bounds of existing lines. That is, the line number must start from 0, and the maximum line index is the
     *     number of text lines ¨C 1. The number of text lines can be obtained via the
     *     [getLineCount]{@link text.Paragraph.getLineCount} API.
     * @param { boolean } includeSpaces - Whether spaces are included. The value **true** means that spaces are
     *     contained, and **false** means the opposite.
     * @returns { Range } Text range obtained. If the line index is invalid, **start** and **end** are both **0**.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getActualTextRange(lineNumber: int, includeSpaces: boolean): Range;

    /**
     * Obtains an array of line measurement information.
     *
     * @returns { Array<LineMetrics> } Array of line measurement information.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineMetrics(): Array<LineMetrics>;

    /**
     * Obtains the line measurement information of a line.
     *
     * @param { int } lineNumber - Line number, starting from 0.
     * @returns { LineMetrics | undefined } **LineMetrics** object containing the measurement information if the
     *     specified line number is valid and the measurement information exists. If the line number is invalid or the
     *     measurement information cannot be obtained, **undefined** is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineMetrics(lineNumber: int): LineMetrics | undefined;

    /**
     * Updates the color of the entire text span. This API call also updates the decoration color if it hasn't been set
     * yet.
     *
     * @param { common2D.Color } color - Updated font color.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    updateColor(color: common2D.Color): void;

    /**
     * Updates the decoration line of the entire text span.
     *
     * @param { Decoration } decoration - Updated decoration line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    updateDecoration(decoration: Decoration): void;

    /**
     * Obtains the character range corresponding to the specified glyph range.
     *
     * @param { Range } glyphRange - Glyph range.
     * @param { drawing.TextEncoding } encoding - Text encoding type. Currently, only UTF-8 and UTF-16 encoding types
     *     are supported. For UTF-8 encoding, the returned character range indicates the byte range. For UTF-16 encoding
     *     , the returned character range indicates the UTF-16 encoding unit range.
     * @returns { Array<Range> } Character range. If the array contains one element, it indicates the character range.
     *     If the array contains two elements, the first element indicates the character range, and the second element
     *     indicates the actual glyph range.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterRangeForGlyphRange(glyphRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * Obtains the glyph range corresponding to the specified character range.
     *
     * @param { Range } characterRange - Character range.
     * @param { drawing.TextEncoding } encoding - Text encoding type. Currently, only UTF-8 and UTF-16 encoding types
     *     are supported. For UTF-8 encoding, the returned actual character range indicates the byte range. For UTF-16
     *     encoding, the returned actual character range indicates the UTF-16 encoding unit range.
     * @returns { Array<Range> } Glyph range. The array contains two elements. The first element indicates the glyph
     *     range, and the second element indicates the actual character range.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphRangeForCharacterRange(characterRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * Obtains the character position information closest to the given coordinates.
     *
     * @param { double } x - Horizontal coordinate in the text layout area, in physical pixels (px). X offset relative
     *     to the top-left corner of the text layout area, with the right direction as positive. Supports floating-point
     *     values and accepts negative values, which indicate positions to the left of the text layout area. If the
     *     coordinates are beyond the text layout area, the nearest character position is returned. It can be obtained
     *     through a touch event or click event.
     * @param { double } y - Vertical coordinate in the text layout area, in physical pixels (px). Y offset relative to
     *     the top-left corner of the text layout area, with the downward direction as positive. Supports floating-point
     *     values and accepts negative values, which indicate positions above the text layout area. If the coordinates
     *     are beyond the text layout area, the nearest character position is returned. It can be obtained through a
     *     touch event or click event.
     * @param { drawing.TextEncoding } encoding - Text encoding type. Currently, only UTF-8 and UTF-16 encoding types
     *     are supported. For UTF-8 encoding, the returned character position indicates the byte offset. For UTF-16
     *     encoding, the returned character position indicates the UTF-16 encoding unit offset.
     * @returns { PositionWithAffinity } Character position.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterPositionAtCoordinate(x: double, y: double, encoding: drawing.TextEncoding): PositionWithAffinity;

    /**
     * Obtains the text processing state of the paragraph.
     *
     * @returns { TextProcessState } Text processing state of the paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getProcessState(): TextProcessState;

    /**
     * Obtains the text display state of the paragraph.
     *
     * @returns { TextDisplayState } Text display state of the paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getTextDisplayState(): TextDisplayState;

    /**
     * Obtains the style configuration of the paragraph.
     *
     * @returns { ParagraphStyle } Style configuration of the paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getParagraphStyle(): ParagraphStyle;

    /**
     * Obtains the visible text ranges of the paragraph.
     *
     * @returns { Array<Range> } The visible text ranges of the paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getVisibleTextRanges(): Array<Range>;
  }

  /**
   * Implements a carrier that stores the text content and style. It can be used to compute layout details for
   * individual lines of text.
   *
   * Before calling any of the following APIs, you must use
   * [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset} in the
   * [ParagraphBuilder]{@link text.ParagraphBuilder} class to create a **LineTypeset** object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  class LineTypeset {
    /**
     * Obtains the number of characters that can fit in the layout from the specified position within a limited width.
     *
     * @param { int } startIndex - Start position (inclusive) for calculation. The value is an integer in the range
     *     [0, total number of text characters). If the parameter is out of range, an exception is thrown.
     * @param { double } width - Layout width. The value is a floating point number greater than 0, in px.
     * @returns { int } Number of characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getLineBreak(startIndex: int, width: double): int;

    /**
     * Generates a text line object based on the specified layout range.
     *
     * @param { int } startIndex - Start position for layout calculation. The value is an integer in the range
     *     [0, total number of text characters).
     * @param { int } count - Number of characters from the specified start position. The value is an integer in the
     *     range
     *     [0, total number of text characters). The sum of **startIndex** and **count** cannot be greater than the total number of text characters. If **count** is **0**, the layout range is [startIndex, position of the last character in the text]. You can use [getLineBreak]{@link text.LineTypeset.getLineBreak} to obtain the number of characters that can fit in the layout.
     * @returns { TextLine } **TextLine** object generated based on the characters in the text range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    createLine(startIndex: int, count: int): TextLine;
  }

  /**
   * Rectangular area of the text, indicating the rectangular space occupied by the text during layout.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextBox {
    /**
     * Rectangular area information, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rect: common2D.Rect;

    /**
     * Text direction.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    direction: TextDirection;
  }

  /**
   * Describes the position and affinity of a glyph.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface PositionWithAffinity {
    /**
     * Index of the glyph relative to the paragraph. The value is an integer.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    position: int;

    /**
     * Affinity of the position.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    affinity: Affinity;
  }

  /**
   * Enumerates the rectangle width styles.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectWidthStyle {
    /**
     * If **letterSpacing** is not set, the rectangle conforms tightly to the text it contains. However, if
     * **letterSpacing** is set, a gap is introduced between the rectangle and text.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TIGHT = 0,

    /**
     * The rectangle's width is extended to align with the widest rectangle across all lines.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    MAX = 1
  }

  /**
   * Enumerates the rectangle height styles.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectHeightStyle {
    /**
     * Tight style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TIGHT = 0,

    /**
     * Extends the height to match the highest rectangle in all lines.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    MAX = 1,

    /**
     * Includes half of the line spacing to both the top and bottom of the rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_MIDDLE = 2,

    /**
     * Includes the line spacing to the top of the rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_TOP = 3,

    /**
     * Includes the line spacing to the bottom of the rectangle.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_BOTTOM = 4,

    /**
     * Sets the height according to the strut style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    STRUT = 5
  }

  /**
   * Enumerates the affinity modes.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum Affinity {
    /**
     * The position has affinity for the upstream side of the text position.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UPSTREAM = 0,
    /**
     * The position has affinity for the downstream side of the text position.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNSTREAM = 1
  }

  /**
   * Implements a paragraph builder.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class ParagraphBuilder {
    /**
     * A constructor used to create a **ParagraphBuilder** object.
     *
     * @param { ParagraphStyle } paragraphStyle - Paragraph style.
     * @param { FontCollection } fontCollection - Font collection.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * Applies a new style to the current text blob.
     *
     * > **NOTE**
     * >
     * > When you update the style of the current text blob, all text added afterward will use this new style.
     *
     * @param { TextStyle } textStyle - Text style, which describes various visual attributes of text, such as font,
     *     font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),
     *     and text shadow.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * Restores the previous text style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    popStyle(): void;

    /**
     * Inserts a text string into the paragraph being built.
     *
     * @param { string } text - Exact text string inserted into the paragraph. If an invalid Unicode character is
     *     provided, it is displayed as ?.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addText(text: string): void;

    /**
     * Inserts a placeholder into the paragraph being built.
     *
     * @param { PlaceholderSpan } placeholderSpan - Placeholder span, which describes the size, alignment, baseline type
     *     , and baseline offset of the placeholder.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * Creates a paragraph object that can be used for subsequent layout and rendering.
     *
     * @returns { Paragraph } **Paragraph** object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    build(): Paragraph;

    /**
     * Builds a line typesetter.
     *
     * @returns { LineTypeset } **LineTypeset** object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    buildLineTypeset(): LineTypeset;

    /**
     * Inserts a symbol into the paragraph being built.
     *
     * @param { int } symbolId - Symbol code to insert. The value is a hexadecimal number in the range 0xF0000-0xF0C97.
     *     For details about the configurable symbol codes (unicode values in the list view), see
     *     [HarmonyOS Symbol](https://developer.huawei.com/consumer/en/design/harmonyos-symbol/).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addSymbol(symbolId: int): void;
  }

  /**
   * Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,
   * but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space
   * after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly, the
   * strings "j" and "E" have identical typographic boundaries, independent of the characters themselves.
   *
   * > **NOTE**
   * >
   * > The following figure shows the layout parameters of a text line: width (width of the text line including the left
   * > and right spaces), ascent (highest point of the rising height), descent (lowest point of the falling height),
   * > leading (line spacing), top (highest point of the current line), baseline (character baseline), bottom (lowest
   * > point of the current line), and next line top (highest point of the next line).
   * >
   * > ![image_Typographic.png](docroot://reference/apis-arkgraphics2d/figures/image_Typographic.png)
   * >
   * > The following figure shows the typographic boundaries of the string " a b ".
   * >
   * > ![image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)
   * >
   * > The following figure shows the typographic boundaries of the strings "j" and "E".
   * >
   * > !
   * > [image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png)
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface TypographicBounds {
    /**
     * Ascent height of a text line, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    ascent: double;

    /**
     * Descent height of a text line, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    descent: double;

    /**
     * Leading of a text line, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    leading: double;

    /**
     * Total width of the layout boundary, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    width: double;
  }

  /**
   * Defines the callback used to receive the offset and index of each character in a text line object as its
   * parameters.
   *
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   *     that the cursor is located at the front of the character, that is, the offset does not contain the character
   *     width. The value false means that the cursor is located at the rear of the character, that is, the offset
   *     contains the character width.
   * @returns { boolean } Whether to stop calling the callback. The value **true** means to stop calling the callback,
   *     and **false** means to continue calling the callback.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean;

  /**
   * Implements a carrier that describes the basic text line structure of a paragraph.
   *
   * Before calling any of the following APIs, you must use [getTextLines()]{@link text.Paragraph.getTextLines} of the
   * [Paragraph]{@link text.ParagraphStyle} class or [createLine()]{@link text.LineTypeset.createLine} of the
   * [LineTypeset]{@link text.LineTypeset} class to create a **TextLine** object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class TextLine {
    /**
     * Obtains the number of glyphs in this text line.
     *
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphCount(): int;

    /**
     * Obtains the range of the text in this text line in the entire paragraph.
     *
     * @returns { Range } Range of the text in this text line in the entire paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getTextRange(): Range;

    /**
     * Obtains the array of glyph runs in the text line.
     *
     * @returns { Array<Run> } Array of the runs obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphRuns(): Array<Run>;

    /**
     * Paints this text line on the canvas with the coordinate point (x, y) as the upper left corner.
     *
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - Horizontal coordinate of the upper left corner, which is a floating-point value, in
     *     physical pixels (px).
     * @param { double } y - Vertical coordinate of the upper left corner, which is a floating-point value, in physical
     *     pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Creates a truncated text line object.
     *
     * @param { double } width - Line width after truncation, which is a floating-point value in physical pixels (px).
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only **START** and **END** are supported.
     * @param { string } ellipsis - String used to mark truncation.
     * @returns { TextLine } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine;

    /**
     * Creates a truncated text line object.
     *
     * @param { double } width - The width of the truncated line.
     * @param { EllipsisMode } ellipsisMode - Text ellipsis mode, EllipsisMode:MIDDLE is not supported.
     * @param { string } ellipsis - Text ellipsis.
     * @returns { TextLine | undefined } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine | undefined;

    /**
     * Obtains the typographic boundaries of the text line. These boundaries depend on the typographic font and font
     * size, but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly
     * , the strings "j" and "E" have identical typographic boundaries, independent of the characters themselves.
     *
     * > **NOTE**
     * >
     * > The following figure shows the typographic boundaries of the string " a b ".
     * >
     * > ![image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)
     * >
     * > The following figure shows the typographic boundaries of the strings "j" and "E".
     * >
     * > !
     * > [image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png)
     *
     * @returns { TypographicBounds } Describes the typographic boundaries of a text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundaries of this text line. The image boundaries, equivalent to visual boundaries, depend on
     * the font, font size, and characters. For example, for the string " a b " (which has a space before "a" and a
     * space after "b"), only "a b" is visible to users, and therefore the image boundaries do not include these spaces
     * at the beginning and end of the line. For the strings "j" and "E", their image boundaries are different.
     * Specifically, the width of the boundary for "j" is narrower than that for "E", and the height of the boundary for
     * "j" is taller than that for "E".
     *
     * > **NOTE**
     * >
     * > The following figure shows the image boundaries of the string " a b ".
     * >
     * > ![image_ImageBounds.png](docroot://reference/apis-arkgraphics2d/figures/image_ImageBounds.png)
     * >
     * > The following figure shows the image boundaries of the strings "j" and "E".
     * >
     * > !
     * > [image_ImageBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/image_ImageBounds_Character.png)
     *
     * @returns { common2D.Rect } Image boundary of a text line, in physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the width of the spaces at the end of this text line.
     *
     * @returns { double } Width of trailing whitespace characters in the text line, which is a floating-point value, in
     *     physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTrailingSpaceWidth(): double;

    /**
     * Obtains the index of a character at the specified position in the original string.
     *
     * @param { common2D.Point } point - Position of the character.
     * @returns { int } Index of the character in the text line. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getStringIndexForPosition(point: common2D.Point): int;

    /**
     * Obtains the offset of a character with the specified index in this text line.
     *
     * @param { int } index - Index of the character. The value is an integer.
     * @returns { double } Offset at the given string index, which is a floating-point value, in physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getOffsetForStringIndex(index: int): double;

    /**
     * Enumerates the offset and index of each character in a text line.
     *
     * @param { CaretOffsetsCallback } callback - Custom function, which contains the offset and index of each character
     *     in the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    enumerateCaretOffsets(callback: CaretOffsetsCallback): void;

    /**
     * Obtains the offset of this text line after alignment based on the alignment factor and alignment width.
     *
     * @param { double } alignmentFactor - Alignment factor, which determines how text is aligned. The value is a
     *     floating point number. A value less than or equal to 0.0 means that the text is left-aligned; a value between
     *     0.0 and 0.5 means that the text is slightly left-aligned; the value 0.5 means that the text is centered; a
     *     value between 0.5 and 1 means that the text is slightly right-aligned; a value greater than or equal to 1.0
     *     means that the text is right-aligned.
     * @param { double } alignmentWidth - Alignment width, namely the width of the text line, which is a floating-point
     *     value, in physical pixels (px). If the width is less than the actual width of the text line, **0** is
     *     returned.
     * @returns { double } Calculated offset required for alignment, which is a floating-point value, in physical pixels
     *     (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getAlignmentOffset(alignmentFactor: double, alignmentWidth: double): double;
  }

  /**
   * Implements a unit for text layout.
   *
   * Before calling any of the following APIs, you must use [getGlyphRuns()]{@link text.TextLine.getGlyphRuns} of the
   * [TextLine]{@link text.TextLine} class to create a **Run** object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class Run {
    /**
     * Obtains the number of glyphs in this run.
     *
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphCount(): int;

    /**
     * Obtains the index of each glyph in this run.
     *
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphs(): Array<int>;

    /**
     * Obtains the index of each glyph in the specified range of this run.
     *
     * @param { Range } range - Range of glyph indices to obtain. **range.start** indicates the starting position of the
     *     range, and **range.end** indicates the length of the range. When **range.end** is **0**, glyphs are fetched
     *     from **range.start** to the end of the rendered block. If **range.end** or **range.start** is set to a
     *     negative value, **null**, or **undefined**, **undefined** is returned.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getGlyphs(range: Range): Array<int>;

    /**
     * Gets the range glyph identifier for each character.
     *
     * @param { Range } range of run, range.start is the starting index of the run block, starting from 0.
     *     range.end is run length, if range.start and range.end are set to 0, then get all of the current run.
     * @returns { Array<int> | undefined } Glyph identifier or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getGlyphs(range: Range): Array<int> | undefined;

    /**
     * Obtains the position of each glyph relative to the respective line in this run.
     *
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     *     the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getPositions(): Array<common2D.Point>;

    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     *
     * @param { Range } range - Range of the glyphs, where **range.start** indicates the start position of the range,
     *     and **range.end** indicates the length of the range. If the length is **0**, the range is from
     *     **range.start** to the end of the run. If **range.end** or **range.start** is set to a negative value,
     *     **null**, or **undefined**, **undefined** is returned.
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     *     the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getPositions(range: Range): Array<common2D.Point>;

    /**
     * Gets the range font position offset.
     *
     * @param { Range } range of run, range.start is the starting index of the run block, starting from 0.
     *     range.end is run length, if range.start and range.end are set to 0, then get all of the current run.
     * @returns { Array<common2D.Point> | undefined } The position of the font in the layout or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getPositions(range: Range): Array<common2D.Point> | undefined;

    /**
     * Obtains the offset of each glyph in this run relative to its index.
     *
     * @returns { Array<common2D.Point> } Array holding the offset of each glyph in the run relative to its index.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getOffsets(): Array<common2D.Point>;

    /**
     * Obtains the **Font** object of this run.
     *
     * @returns { drawing.Font } **Font** object of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getFont(): drawing.Font;

    /**
     * Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.
     *
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - Horizontal coordinate of the upper left corner, which is a floating-point value, in
     *     physical pixels (px).
     * @param { double } y - Vertical coordinate of the upper left corner, which is a floating-point value, in physical
     *     pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     *
     * @param { Range } [range] - Range of character indices to be obtained. **range.start** indicates the starting
     *     position of the range, and **range.end** indicates the range length. If the length is 0, characters are
     *     retrieved from **range.start** to the end of the rendered block. If **range.end** or **range.start** is set
     *     to a negative value, **null**, or **undefined**, **undefined** is returned. If this parameter is not passed,
     *     the entire run is obtained.
     * @returns { Array<int> } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getStringIndices(range?: Range): Array<int>;

    /**
     * Gets the range of run glyph indices, the offset of the indices relative to the entire paragraph.
     *
     * @param { Range } [range] range of run, range.start is the starting index of the run block, starting from 0.
     *     range.end is run length, if range.start range.and end are set to 0, then get all of the current run.
     * @returns { Array<int> | undefined } The glyph indices or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getStringIndices(range?: Range): Array<int> | undefined;

    /**
     * Obtains the range of glyphs generated by this run.
     *
     * @returns { Range } Range of the glyphs, where **start** indicates the start position of the range, which is the
     *     index relative to the entire paragraph, and **end** indicates the length of the range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getStringRange(): Range;

    /**
     * Obtains the typographic boundaries of the typographic unit. These boundaries are associated with the typographic
     * font and font size, but not with the characters. For example, for the string " a b " (which has a space before "a
     * " and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.
     *
     * > **NOTE**
     * >
     * > The following figure shows the typographic boundaries of the string " a b ".
     * >
     * > ![image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)
     * >
     * > The following figure shows the typographic boundaries of the strings "j" and "E".
     * >
     * > !
     * > [image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png)
     *
     * @returns { TypographicBounds } Typographic boundaries of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundaries of the typographic unit. Equivalent to visual boundaries, these boundaries are
     * associated with the typographic font, font size, and characters. For example, for the string " a b " (which has a
     * space before "a" and a space after "b"), only "a b" is visible to users, and therefore the image boundaries do
     * not include these spaces at the beginning and end of the line.
     *
     * > **NOTE**
     * >
     * > The following figure shows the image boundaries of the string " a b ".
     * >
     * > ![image_ImageBounds.png](docroot://reference/apis-arkgraphics2d/figures/image_ImageBounds.png)
     * >
     * > The following figure shows the image boundaries of the strings "j" and "E".
     * >
     * > !
     * > [image_ImageBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/image_ImageBounds_Character.png)
     *
     * @returns { common2D.Rect } Image boundary of the layout unit, in physical pixels (px).
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the text direction of the run.
     *
     * @returns { TextDirection } Obtains the text direction of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    getTextDirection(): TextDirection;

    /**
     * Obtains the glyph width array of each glyph within the specified range of the run.
     *
     * @param { Range } range - Range of the glyph position to be obtained. **range.start** indicates the start position
     *     of the range, and **range.end** indicates the range length. If the length is **0**, the range starts from
     *     **range.start** and ends at the end of the run. If **range.end** or **range.start** is set to a negative
     *     value, **null**, or **undefined**, **undefined** is returned.
     * @returns { Array<common2D.Point> } Returns the glyph width array of each glyph in the run unit relative to the
     *     horizontal direction. In [common2D.Point]{@link @ohos.graphics.common2D:common2D.Point}, the x value
     *     represents the glyph width of each glyph relative to the horizontal direction, in physical pixels (px). The y
     *     value is a reserved field and returns **0** by default.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    getAdvances(range: Range): Array<common2D.Point>;

    /**
     * Gets the glyph width array within the range.
     *
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     *     range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     *     the run.
     * @returns { Array<common2D.Point> | undefined } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getAdvances(range: Range): Array<common2D.Point> | undefined;

    /**
     * Obtains the text style of this run.
     *
     * @returns { TextStyle } Text style of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getTextStyle(): TextStyle;
  }

  /**
   * Describes the layout information and measurement information of a run of text in a text line.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface RunMetrics {
    /**
     * Text style.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textStyle: TextStyle;

    /**
     * Font measurement information.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontMetrics: drawing.FontMetrics;
  }

  /**
   * Describes the measurement information of a single line of text in the text layout.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface LineMetrics {
    /**
     * Start index of the line in the text buffer.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    startIndex: int;

    /**
     * End index of the line in the text buffer.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    endIndex: int;

    /**
     * Text ascent height, which refers to the distance from the baseline to the top of characters, in physical pixels (
     * px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ascent: double;

    /**
     * Text descent height, which refers to the distance from the baseline to the bottom of characters, in physical
     * pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    descent: double;

    /**
     * Height of the current line, in physical pixels (px). The calculation method is `Math.round(ascent + descent)`.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * Width of a line, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * Left edge position of a line, in physical pixels (px). The right edge is the value of **left** plus the value of
     * **width**.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * Y coordinate of the baseline in the line relative to the top of the paragraph, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline: double;

    /**
     * Line number, starting from 0.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    lineNumber: int;

    /**
     * Height from the top to the current line, in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    topHeight: double;

    /**
     * Mapping between the text index range and the associated font measurement information.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    runMetrics: Map<int, RunMetrics>;
  }

  /**
   * Obtains the full names of all fonts of the specified type. This API uses a promise to return the result.
   *
   * @param { SystemFontType } fontType - Font type.
   * @returns { Promise<Array<string>> } Promise used to return the full names of all fonts of the specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  function getSystemFontFullNamesByType(fontType: SystemFontType): Promise<Array<string>>;

  /**
   * Obtains the paths of all font files of a specified font type.
   *
   * @param { SystemFontType } fontType - Font type.
   * @returns { Array<string> } List of font file paths.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontPathsByType(fontType: SystemFontType): Array<string>;

  /**
   * Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.
   *
   * A font descriptor is a data structure that describes font features. It contains details of the font appearance and
   * properties.
   *
   * @param { string } fullName - Font name. It is obtained with
   *     [getSystemFontFullNamesByType]{@link text.getSystemFontFullNamesByType} called.
   * @param { SystemFontType } fontType - Font type.
   * @returns { Promise<FontDescriptor> } Promise used to return the font descriptor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  function getFontDescriptorByFullName(fullName: string, fontType: SystemFontType): Promise<FontDescriptor>;

  /**
   * Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return the
   * result.
   *
   * @param { FontDescriptor } desc - Font descriptor to match against. If this parameter is left unspecified, all
   *     system font descriptors are returned. If a specific value is provided, the matching is performed based on the
   *     value provided. If the matching fails, an empty array is returned.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all matched system font descriptors.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  function matchFontDescriptors(desc: FontDescriptor): Promise<Array<FontDescriptor>>;

  /**
   * Implements a paragraph-style text tab, which stores the alignment mode and position.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface TextTab {
    /**
     * Text alignment method after the tab character in a paragraph. It supports the LEFT (left alignment), RIGHT (right
     * alignment), and CENTER (center alignment) alignment methods of [TextAlign]{@link text.TextAlign}. Unlisted enum
     * values are treated as left alignment, with left alignment as the default.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    alignment: TextAlign;

    /**
     * Alignment position of the text following the tab character. The value is a floating point number, in px. The
     * minimum value is 1.0. When the value is less than 1.0, the tab character is replaced with a space.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    location: double;
  }

  /**
   * Enumerates the high contrast types for text rendering.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextHighContrast {
    /**
     * Follows the high contrast mode for text rendering in the system settings.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_FOLLOW_SYSTEM_HIGH_CONTRAST = 0,

    /**
     * Disables the high contrast mode for text rendering in the application. This mode takes precedence over the one
     * based on system settings.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_APP_DISABLE_HIGH_CONTRAST = 1,

    /**
     * Enables the high contrast mode for text rendering in the application. The priority of this mode is higher than
     * the mode following the system settings.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_APP_ENABLE_HIGH_CONTRAST = 2
  }

  /**
   * Sets the high contrast mode for text rendering.
   *
   * The setting of this API takes effect for the entire process, and all pages in the process share the same mode.
   *
   * You can call this API to set the high contrast mode, or enable or disable the high contrast mode by toggling the
   * switch on the system settings screen. This API is used to set the high contrast mode for text rendering. The
   * setting of this API takes precedence over the one based on system settings.
   *
   * This API does not take effect for the text drawing scenario.
   *
   * @param { TextHighContrast } action - High contrast mode for text rendering.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  function setTextHighContrast(action : TextHighContrast): void;

  /**
   * Enumerates the modes for displaying undefined text glyphs.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextUndefinedGlyphDisplay {
    /**
     * Follows the internal .notdef glyph design of the font, which can be an empty box, space, or custom symbol.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    USE_DEFAULT = 0,
    /**
     * Always uses explicit tofu blocks to replace undefined glyphs, overriding the default behavior of fonts. It is
     * suitable for debugging missing characters or forcing a uniform display of missing symbols.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    USE_TOFU = 1
  }

  /**
   * Enumerates the text processing states.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum TextProcessState {
    /**
     * Initial state, text processing has not started.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    INIT = 0,
    /**
     * Indexed state, text has been indexed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    INDEXED = 1,
    /**
     * Shaped state, text has been shaped.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHAPED = 2,
    /**
     * Line-broken state, text has been split into lines.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    LINE_BROKEN = 3,
    /**
     * Formatted state, text has been formatted.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    FORMATTED = 4,
    /**
     * Paint state, text has been painted.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PAINT = 5,
    /**
     * Update attribute state, text attributes have been updated.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UPDATE_ATTRIBUTE = 6
  }

  /**
   * Enumerates the text display states.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum TextDisplayState {
    /**
     * Unknown display state, the default state.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN = 0,
    /**
     * Full display state, all text is displayed normally.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ALL = 1,
    /**
     * Clipped display state, part of the text is clipped.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CLIP = 2,
    /**
     * Omitted display state, part of the text is omitted (e.g., replaced with '...').
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    OMITTED = 3
  }

  /**
   * Represents the text rectangle size, which is used to describe the width and height of the text rectangle. It is a
   * floating-point value in physical pixels (px).
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextRectSize {
    /**
     * Width of the text rectangle, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    width: double;

    /**
     * Height of the text rectangle, which is a floating-point value in physical pixels (px).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    height: double;
  }

  /**
   * Represents the text layout result.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextLayoutResult {
    /**
     * Array of character ranges that can be completely displayed after text layout calculation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fitStrRange: Array<Range>;

    /**
     * Rectangle size of the paragraph after layout.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    correctRect: TextRectSize;
  }

  /**
   * Sets the glyph type to be used when characters are mapped to the .notdef (undefined) glyph.
   *
   * This setting affects all text rendered subsequently.
   *
   * This setting affects how to display undefined characters in the font:
   *
   * - The default behavior follows the .notdef glyph design of the font.
   * - After this feature is enabled, characters without glyphs are displayed as a tofu block of text.
   *
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - Display mode of characters that cannot be shaped.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void;

  /**
   * Obtains an array of font descriptors by font file path. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - An empty array is returned if the font file is not found, the font file path is invalid, the font file does not
   * > have the required permission, or the file is not in the font format.
   * >
   * > - The **weight** field in [FontDescriptor]{@link text.FontDescriptor} does not exactly correspond to the weight
   * > value in the font file. Instead, the actual weight value in the font file is rounded off and mapped to the
   * > [FontWeight]{@link text.FontWeight} enum value. For example, the weight value 350 in the font file is mapped to 4
   * > 00, and the corresponding enum value is W400.
   *
   * @param { string | Resource } path - Path of the font file to be queried. The path must be in the format of "
   *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
   *     **resources/rawfile** directory in the project, which includes the font file name).
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all font descriptors. If the font file cannot be
   *     found, the path is invalid, the font file does not have the required permission, or the file is not a font file
   *     , an empty array is returned.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getFontDescriptorsFromPath(path: string | Resource): Promise<Array<FontDescriptor>>;

  /**
   * Checks whether the system supports the specified font file.
   *
   * @param { string | Resource } fontURL - Path of the font file to be checked. The path must be in the format of "
   *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
   *     **resources/rawfile** directory in the project, which includes the font file name).
   * @returns { boolean } Whether the system supports the specified font file. **true** means yes; **false** otherwise.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isFontSupported(fontURL: string | Resource): boolean;

  /**
   * Obtains an array of font Unicode by font file path. This API uses a promise to return the result.
   *
   * An empty array is returned if the font file is not found, the font file path is invalid, the font file does not
   * have the required permission, or the file is not in the font format.
   *
   * @param { string | Resource } path - Path of the font file to be queried. The path must be in the format of "
   *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
   *     **resources/rawfile** directory in the project, which includes the font file name).
   * @param { int } index - Font index to be loaded when the font file format is TTC or OTC. The index value of a non-
   *     TTC/OTC file can only be **0**. If this parameter is set to a negative value or exceeds the actual index range
   *     of the font file, an empty array is returned.
   * @returns { Promise<Array<int>> } Promise used to return the Unicode array corresponding to the font file.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontUnicodeSet(path: string | Resource, index: int) : Promise<Array<int>>;

  /**
   * Obtains the number of font files contained in a font file based on the font file path.
   *
   * Returns **0** if the font file is not found, the font file path is invalid, the font file does not have the
   * required permission, or the file is not in the font format.
   *
   * @param { string | Resource } path - Path of the font file to be queried. The path must be in the format of "
   *     **file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the
   *     **resources/rawfile** directory in the project, which includes the font file name).
   * @returns { int } Number of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontCount(path: string | Resource) : int;
}

export default text;