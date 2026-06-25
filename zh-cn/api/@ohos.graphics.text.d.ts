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
 * 本模块提供一系列用于文本布局和字体管理的编程接口。文本布局相关的接口旨在提供高质量的排版，包括字符到字形的转换、字距调整、换行、对齐、文本测量等。字体管理接口提供字体注册、字体描述符、字体集管理等功能。
 * 
 * 该模块提供以下创建复杂样式的文本段落的常用类：
 * 
 * - [TextStyle]{@link text.TextStyle}：文本样式，控制文本的字体类型、大小、间距等属性。
 * - [FontCollection]{@link text.FontCollection}：字体集，控制各种不同的字体。
 * - [FontDescriptor]{@link text.FontDescriptor}：字体描述符信息。
 * - [ParagraphStyle]{@link text.ParagraphStyle}：段落样式，控制整个段落的断行策略、断词策略等属性。
 * - [ParagraphBuilder]{@link text.ParagraphBuilder}：段落生成器，控制生成不同的段落对象。
 * - [Paragraph]{@link text.Paragraph}：段落，由ParagraphBuilder类调用[build()]{@link text.ParagraphBuilder.build}接口构建而成。
 * - [LineTypeset]{@link text.LineTypeset}：行排版器，由ParagraphBuilder类调用
 * [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset}接口构建而成。
 * - [TextLine]{@link text.TextLine}：以行为单位的段落文本的载体，由Paragraph类调用[getTextLines()]{@link text.Paragraph.getTextLines}接口获取。
 * - [Run]{@link text.RunMetrics}：文本排版单元，由TextLine类调用[getGlyphRuns()]{@link text.TextLine.getGlyphRuns}接口获取。
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
   * 文本对齐方式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextAlign {
    /**
     * 文本靠左对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    LEFT = 0,

    /**
     * 文本靠右对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    RIGHT = 1,

    /**
     * 文本居中对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER = 2,

    /**
     * 文本两侧对齐，对最后一行无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    JUSTIFY = 3,

    /**
     * 基于文本的方向[TextDirection]{@link text.TextDirection}，文本靠开头方向对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    START = 4,

    /**
     * 基于文本的方向[TextDirection]{@link text.TextDirection}，文本以结束方向对齐。
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
   * 文本垂直对齐方式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextVerticalAlign {
    /**
     * 文本基线对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    BASELINE = 0,
    /**
     * 文本底部对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * 文本居中对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 2,
    /**
     * 文本顶部对齐。
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
   * 文本排版方向枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDirection {
    /**
     * 文本从右到左排版。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    RTL = 0,

    /**
     * 文本从左到右排版。
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
   * 断行策略枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum BreakStrategy {
    /**
     * 尽可能将当前行填满，不会自动添加连词符。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GREEDY = 0,

    /**
     * 布局优化，必要时会自动添加连词符。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH_QUALITY = 1,

    /**
     * 保证一个段落的每一行的宽度相同，必要时会添加连词符。
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
   * 断词策略枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum WordBreak {
    /**
     * 默认的换行规则。依据各自语言的规则，允许在字间发生换行。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * 对于Non-CJK（非中文，日文，韩文）文本允许在任意字符内发生换行。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字符断行。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BREAK_ALL = 1,

    /**
     * 对于Non-CJK的文本可在任意2个字符间断行，一行文本中有断行破发点（如空白符）时，优先按破发点换行，保障单词优先完整显示。若整一行文本均无断行破发点时，则在任意2个字符间断行。对于CJK与NORMAL效果一致。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BREAK_WORD = 2,

    /**
     * 每行末尾单词尝试通过连字符“-”进行断行，若无法添加连字符“-”，则跟`BREAK_WORD`保持一致。
     * 
     * 使用此断词策略时，需与[TextStyle]{@link text.TextStyle}中`locale`属性配合使用，通过locale定义语言环境共同作用影响断词效果。
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
   * 文本装饰线。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Decoration {
    /**
     * 装饰线类型，默认为NONE。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textDecoration?: TextDecorationType;

    /**
     * 装饰线颜色，默认为跟随文本颜色。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;

    /**
     * 装饰线样式，默认为SOLID。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    decorationStyle?: TextDecorationStyle;

    /**
     * 装饰线粗细系数，浮点数，默认为1.0。如果设置的值小于等于0，则不会绘制装饰线。
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
   * 装饰线类型枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDecorationType {
    /**
     * 无装饰线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 下划线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE = 1,

    /**
     * 上划线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    OVERLINE = 2,

    /**
     * 删除线。
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
   * 装饰线样式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextDecorationStyle {
    /**
     * 实线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SOLID = 0,

    /**
     * 双层线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DOUBLE = 1,

    /**
     * 点状线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DOTTED = 2,

    /**
     * 虚线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DASHED = 3,

    /**
     * 波浪线。
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
   * 字重枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontWeight {
    /**
     * 100字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W100 = 0,

    /**
     * 200字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W200 = 1,

    /**
     * 300字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W300 = 2,

    /**
     * 400字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W400 = 3,

    /**
     * 500字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W500 = 4,

    /**
     * 600字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W600 = 5,

    /**
     * 700字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W700 = 6,

    /**
     * 800字重。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    W800 = 7,

    /**
     * 900字重。
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
   * 字体样式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontStyle {
    /**
     * 常规样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * 斜体。如果当前字体没有可用的斜体版本，会选用倾斜体替代。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ITALIC = 1,

    /**
     * 倾斜体。如果当前字体没有可用的倾斜体版本，会选用斜体替代。
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
   * 字体宽度的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontWidth {
    /**
     * 超窄字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ULTRA_CONDENSED = 1,

    /**
     * 特窄字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXTRA_CONDENSED = 2,

    /**
     * 窄的字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONDENSED = 3,

    /**
     * 半窄字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_CONDENSED = 4,

    /**
     * 常规样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 5,

    /**
     * 半宽字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_EXPANDED = 6,

    /**
     * 宽的字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXPANDED = 7,

    /**
     * 特宽字宽。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EXTRA_EXPANDED = 8,

    /**
     * 超宽的字宽。
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
   * 文本高度修饰符模式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextHeightBehavior {
    /**
     * 高度修饰符设置为段落中第一行上升、最后一行下降。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALL = 0x0,

    /**
     * 高度修饰符设置为禁止段落中第一行上升。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLE_FIRST_ASCENT = 0x1,

    /**
     * 高度修饰符设置为禁止段落中最后一行下降。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLE_LAST_ASCENT = 0x2,

    /**
     * 高度修饰符设置为禁止段落中第一行上升、最后一行下降。
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
   * 文本基线类型枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TextBaseline {
    /**
     * 用于拉丁字母的文本基线对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALPHABETIC = 0,

    /**
     * 用于CJK（中文，日文，韩文）的文本基线对齐。
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
   * 省略号类型枚举。
   * 
   * EllipsisMode.START和EllipsisMode.MIDDLE仅在单行超长文本生效。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum EllipsisMode {
    /**
     * 开头省略号，该枚举值只在[ParagraphStyle]{@link text.ParagraphStyle}中设置maxLines为1时生效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    START = 0,

    /**
     * 中间省略号，该枚举值只在[ParagraphStyle]{@link text.ParagraphStyle}中设置maxLines为1时生效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    MIDDLE = 1,

    /**
     * 末尾省略号，该枚举值在[ParagraphStyle]{@link text.ParagraphStyle}中maxLines设置为任何值时均有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    END = 2,

    /**
     * 开头省略号，该枚举值在[ParagraphStyle]{@link text.ParagraphStyle}中maxLines设置为任何值时均有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_START = 3,

    /**
     * 中间省略号，该枚举值在[ParagraphStyle]{@link text.ParagraphStyle}中maxLines设置为任何值时均有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_MIDDLE = 4
  }

  /**
   * 字体阴影。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextShadow {
    /**
     * 字体阴影的颜色，默认为黑色Color(255, 0, 0, 0)。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;
    /**
     * 字体阴影基于当前文本的偏移位置，横、纵坐标要大于等于零，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    point?: common2D.Point;
    /**
     * 模糊半径，浮点数，单位为物理像素px，默认为0.0。
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
   * 矩形框样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface RectStyle {
    /**
     * 矩形框的颜色。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color: common2D.Color;

    /**
     * 矩形框的左上半径，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    leftTopRadius: double;

    /**
     * 矩形框的右上半径，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rightTopRadius: double;

    /**
     * 矩形框的右下半径，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rightBottomRadius: double;

    /**
     * 矩形框的左下半径，单位为物理像素px。
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
   * 行高缩放基数枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice [since 22]
   * @since 21 dynamic
   * @since 23 static
   */
  enum LineHeightStyle {
    /**
     * 以字号大小作为缩放基数。最终行高为[TextStyle]{@link text.TextStyle}.fontSize * [TextStyle]{@link text.TextStyle}.heightScale。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    FONT_SIZE = 0,

    /**
     * 以字形高度作为缩放基数。最终行高为塑形后字形高度 * [TextStyle]{@link text.TextStyle}.heightScale。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    FONT_HEIGHT = 1
  }

  /**
   * 文本字体特征。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FontFeature {
    /**
     * 字体特征键值对中的关键字标识的字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * 字体特征键值对的值。
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
   * 可变字体属性。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FontVariation {
    /**
     * 可变字体属性键值对中的关键字标识的字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    axis: string;
    /**
     * 可变字体属性键值对的值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    value: double;
    /**
     * 是否归一化。值为true时，value字段取值范围为-1~1，映射字体文件中配置的最小值到最大值范围，0表示字体文件中配置的默认值；值为false时，value字段取值范围为字体文件本身支持调节的范围；默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    isNormalized?: boolean;
  }

  /**
   * 文本上下标枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextBadgeType {
    /**
     * 不使能上下标。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_BADGE_NONE = 0,

    /**
     * 使能上标。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_SUPERSCRIPT = 1,

    /**
     * 使能下标。
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
   * 文本样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextStyle {

    /**
     * 装饰线设置，默认不使用装饰线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    decoration?: Decoration;

    /**
     * 文字颜色，默认为白色。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    color?: common2D.Color;

    /**
     * 字重，默认为W400。 目前只有系统默认字体支持字重的调节，其他字体设置字重值小于semi-bold（即W600）时字体粗细无变化，当设置字重值大于等于semi-bold（即W600）时可能会触发伪加粗效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWeight?: FontWeight;

    /**
     * 字体样式，默认为常规样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontStyle?: FontStyle;

    /**
     * 文本基线类型，默认为ALPHABETIC。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline?: TextBaseline;

    /**
     * 字体家族名称列表，默认为空，匹配系统字体。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFamilies?: Array<string>;

    /**
     * 字体大小，浮点数，默认为14.0，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontSize?: double;

    /**
     * 字符间距，正数拉开字符距离，如果为负数则拉近字符距离，浮点数，单位为物理像素px，默认为0.0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    letterSpacing?: double;

    /**
     * 单词间距，浮点数，单位为物理像素px，默认为0.0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    wordSpacing?: double;

    /**
     * 行高上限，单位为物理像素px。若同时应用行高缩放，行高上限在[TextStyle]{@link text.TextStyle}.heightScale大于0时生效。取值为正数浮点数，默认值为Number.MAX_VALUE。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightMaximum?: double;

    /**
     * 行高下限，单位为物理像素px。若同时应用行高缩放，行高下限在[TextStyle]{@link text.TextStyle}.heightScale大于0时生效。取值范围为非负浮点数，默认值为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightMinimum?: double;

    /**
     * 行高缩放基数样式。默认为FONT_SIZE。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineHeightStyle?: LineHeightStyle;

    /**
     * 行高缩放倍数，浮点数，默认为1.0，heightOnly为true时生效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightScale?: double;

    /**
     * true表示将行间距平分至行的顶部与底部，false则不平分，默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    halfLeading?: boolean;

    /**
     * true表示根据字体大小和heightScale设置文本框的高度，false表示根据行高和行距，默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightOnly?: boolean;

    /**
     * 省略号文本，表示省略号生效后使用该字段值替换省略号部分。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ellipsis?: string;

    /**
     * 省略号类型，默认为END，行尾省略号。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ellipsisMode?: EllipsisMode;

    /**
     * 语言类型，例如'en-Latn'代表英文(拉丁文字)，'zh-Hans'代表简体中文，'zh-Hant'代表繁体中文。支持language-script格式的两段式语言标签，language遵循ISO 639-1规范，
     * script遵循ISO 15924规范。未指定locale或者设置为空字符串或为undefined时，默认locale为'zh-Hans'。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * 文本下划线的偏移距离，浮点数，单位为物理像素px，默认为0.0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baselineShift?: double;

    /**
     * 文本字体特征数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFeatures?: Array<FontFeature>;

    /**
     * 文本阴影数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textShadows?: Array<TextShadow>;

    /**
     * 文本矩形框样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    backgroundRect?: RectStyle;

    /**
     * 可变字体属性数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontVariations?: Array<FontVariation>;

    /**
     * 设置文本排版时是否使能上标或下标。TEXT_SUPERSCRIPT表示使能上标，TEXT_SUBSCRIPT表示使能下标，默认值为TEXT_BADGE_NONE表示不使能。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    badgeType?: TextBadgeType;

    /**
     * 字体宽度，默认为NORMAL。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    fontWidth?: FontWidth;

    /**
     * 绘制文本的边缘处理方式，默认值为ANTI_ALIAS。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontEdging?: drawing.FontEdging;

    /**
     * 字体对象数组
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    fontTypefaces?: Array<drawing.Typeface>;
  }

  /**
   * 字体集。
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
     * 获取应用全局FontCollection实例。
     *
     * @returns { FontCollection } FontCollection对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    static getGlobalInstance(): FontCollection;

    /**
     * 获取本地FontCollection实例，推荐卡片场景使用。
     *
     * @returns { FontCollection } FontCollection对象。
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    static getLocalInstance(): FontCollection;

    /**
     * 同步接口，加载自定义字体。其中参数name对应的值需要在[TextStyle]{@link text.TextStyle}中的fontFamilies属性配置，才能显示自定义字体效果。支持的字体文件格式包含：ttf、otf。
     *
     * @param { string } name - 加载字体后，调用该字体所使用的名称。
     * @param { string | Resource } path - 需要导入的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 "rawfile/目录or文件名"。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    loadFontSync(name: string, path: string | Resource): void;

    /**
     * 加载自定义字体。使用Promise异步回调。其中参数name对应的值需要在[TextStyle]{@link text.TextStyle}中的fontFamilies属性配置，才能显示自定义字体效果，支持的字体文件格式包含：
     * ttf、otf。
     *
     * @param { string } name - 加载字体后，调用该字体所使用的别名，可填写任意字符串，可使用该别名指定并使用该字体。
     * @param { string | Resource } path - 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 "rawfile/目录or文件名"。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    loadFont(name: string, path: string | Resource): Promise<void>;

    /**
     * 同步接口，加载自定义字体。其中参数name对应的值需要在[TextStyle]{@link text.TextStyle}中的fontFamilies属性配置，才能显示自定义字体效果。支持的字体文件格式包含：ttf、otf、
     * ttc。
     *
     * @param { string } name - 加载字体成功后，该字体对应的名称，可填写任意字符串，可使用该名称指定并使用该字体。
     * @param { string | Resource } path - 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 $rawfile("字体文件路径")。
     * @param { int } [index] - 字体文件格式为ttc时，指定加载的字体索引。默认为0：表示加载ttc的第一个字体。<br>非ttc格式文件索引值无意义，若指定索引，只能为0。
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
     * 加载自定义字体，使用Promise异步回调。其中参数name对应的值需要在[TextStyle]{@link text.TextStyle}中的fontFamilies属性配置，才能显示自定义字体效果，支持的字体文件格式包含：
     * ttf、otf、ttc。
     *
     * @param { string } name - 加载字体成功后，该字体对应的名称，可填写任意字符串，可使用该名称指定并使用该字体。
     * @param { string | Resource } path - 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 $rawfile("字体文件路径")。
     * @param { int } [index] - 字体文件格式为ttc时，指定加载的字体索引。默认为0：表示加载ttc的第一个字体。<br>非ttc格式文件索引值无意义，若指定索引，只能为0。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 卸载指定的自定义字体，此接口为同步接口。
     * 
     * 使用此接口卸载字体别名所对应的自定义字体后，对应的自定义字体将不再可用。
     * 
     * 所有使用该字体别名的排版对象都应该被销毁重建。
     * 
     * - 卸载不存在的字体别名不会产生任何效果且不会抛出错误。
     * - 此操作仅影响后续字体使用。
     * - 卸载正在使用的字体可能导致文本渲染异常（如乱码或字形缺失）。
     *
     * @param { string } name - 需要取消注册的字体别名，与加载字体时使用的别名相同。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    unloadFontSync(name: string): void;

    /**
     * 卸载指定的自定义字体。使用Promise异步回调。
     * 
     * 使用此接口卸载字体别名所对应的自定义字体后，对应的自定义字体将不再可用。
     * 
     * 所有使用该字体别名的排版对象都应该被销毁重建。
     * 
     * - 卸载不存在的字体别名不会产生任何效果且不会抛出错误。
     * - 此操作仅影响后续字体使用。
     * - 卸载正在使用的字体可能导致文本渲染异常（如乱码或字形缺失）。
     *
     * @param { string } name - 需要卸载的字体的别名，与加载字体时使用的别名相同。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @form [since 22]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    unloadFont(name: string): Promise<void>;

    /**
     * 清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。
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
     * 设置是否启用排版段落缓存。排版段落缓存可以加速重复文本的排版速度，但会占用额外的内存。未调用此接口前，系统默认开启排版段落缓存。
     *
     * @param { boolean } enable - 是否启用排版段落缓存。true表示启用，false表示禁用。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setParagraphCachesEnabled(enable: boolean): void;
  }

  /**
   * 支柱样式，用于控制绘制文本的行间距、基线对齐方式以及其他与行高相关的属性，默认不开启。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface StrutStyle {
    /**
     * 字体家族名称列表，默认为空，匹配系统字体。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontFamilies?: Array<string>;

    /**
     * 字体样式，默认为常规样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontStyle?: FontStyle;

    /**
     * 字体宽度，默认为NORMAL。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWidth?: FontWidth;

    /**
     * 字重，默认为W400。系统默认字体支持字重调节，其他字体设置字重值小于W600时无变化，大于等于W600时可能触发伪加粗效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontWeight?: FontWeight;

    /**
     * 字体大小，浮点数，默认为14.0，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fontSize?: double;

    /**
     * 行高缩放倍数，浮点数，默认为1.0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height?: double;

    /**
     * 自定义应用于支柱的行距，浮点数，单位为物理像素px，默认为-1.0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    leading?: double;

    /**
     * 是否所有行都将使用支柱的高度，true表示使用，false表示不使用，默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    forceHeight?: boolean;

    /**
     * 是否启用支柱样式，true表示使用，false表示不使用，默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    enabled?: boolean;

    /**
     * 是否覆盖高度，true表示覆盖，false表示不覆盖，默认为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    heightOverride?: boolean;

    /**
     * true表示将行间距平分至行的顶部与底部，false则不平分，默认为false。
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
   * 段落样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ParagraphStyle {
    /**
     * 作用于整个段落的文本样式，默认为初始的文本样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textStyle?: TextStyle;

    /**
     * 文本方向，默认为LTR。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textDirection?: TextDirection;

    /**
     * 文本对齐方式，默认为START。若同时配置tab属性，制表符对齐方式将失效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    align?: TextAlign;

    /**
     * 断词类型，默认为BREAK_WORD。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    wordBreak?: WordBreak;

    /**
     * 最大行数限制，整数，默认为1e9。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    maxLines?: int;

    /**
     * 断行策略，默认为GREEDY。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    breakStrategy?: BreakStrategy;

    /**
     * 支柱样式，默认为初始的StrutStyle。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strutStyle?: StrutStyle;

    /**
     * 文本高度修饰符模式，默认为ALL。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textHeightBehavior?: TextHeightBehavior;

    /**
     * 表示段落中文本制表符后的文本对齐方式及位置，默认将制表符替换为一个空格。此参数与文本对齐方式（align属性）或省略号样式（[TextStyle]{@link text.TextStyle}中的ellipsis属性）共同配置时
     * 无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    tab?: TextTab;

    /**
     * 表示文本排版时是否考虑行尾空格的对齐影响。true表示忽略行尾空格的对齐影响，false表示考虑行尾空格的对齐影响，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    trailingSpaceOptimized?: boolean;

    /**
     * 设置文本排版时是否使能自动间距。true表示使能自动间距，则会在文本排版时自动调整CJK（中文字符、日文字符、韩文字符）与西文（拉丁字母、西里尔字母、希腊字母）、CJK与数字、CJK与版权符号、版权符号与数字、版权符号与西文之
     * 间的间距。false表示不使能自动间距，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    autoSpace?: boolean;

    /**
     * 文本垂直对齐方式，开启行高缩放（即设置[TextStyle]{@link text.TextStyle}的heightScale）或行内不同字号（即设置[TextStyle]{@link text.TextStyle}的
     * fontSize）文本混排时生效。若行内有上下标文本（即设置[TextStyle]{@link text.TextStyle}的badgeType属性文本），上下标文本将与普通文本一样参与垂直对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    verticalAlign?: TextVerticalAlign;

    /**
     * 行间距，单位为物理像素px，默认值为0。lineSpacing不受[TextStyle]{@link text.TextStyle}中lineHeightMaximum和lineHeightMinimum限制。尾行默认保留行间
     * 距，可通过设置[TextStyle]{@link text.TextStyle}.textHeightBehavior为DISABLE_ALL或DISABLE_LAST_ASCENT禁用尾行行间距。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 21 dynamic
     * @since 23 static
     */
    lineSpacing?: double;

    /**
     * 设置文本排版时是否使能行首标点压缩。true表示使能行首标点压缩，false表示不使能行首标点压缩，默认值为false。
     * 
     * **说明：**
     * 
     * 1. 需要字体文件支持[FontFeature]{@link text.FontFeature}中的"ss08"特性，否则无法压缩。
     * 2. 在行首标点压缩范围内的标点才在本特性作用范围内。
     * 行首压缩的标点范围:
     * | 标点 | Unicode码位 | Unicode名称 |
     * |---------|---------|-------------|
     * | 「 | U+300C | LEFT CORNER BRACKET |
     * | 『 | U+300E | LEFT WHITE CORNER BRACKET |
     * | " | U+201C | LEFT DOUBLE QUOTATION MARK |
     * | ' | U+2018 | LEFT SINGLE QUOTATION MARK |
     * | （ | U+FF08 | FULLWIDTH LEFT PARENTHESIS |
     * | 《 | U+300A | LEFT DOUBLE ANGLE BRACKET |
     * | 〈 | U+3008 | LEFT ANGLE BRACKET |
     * | 【 | U+3010 | LEFT BLACK LENTICULAR BRACKET |
     * | 〖 | U+3016 | LEFT WHITE LENTICULAR BRACKET |
     * | 〔 | U+3014 | LEFT TORTOISE SHELL BRACKET |
     * | ［ | U+FF3B | FULLWIDTH LEFT SQUARE BRACKET |
     * | ｛ | U+FF5B | FULLWIDTH LEFT CURLY BRACKET |
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    compressHeadPunctuation?: boolean;

    /**
     * 设置文本排版时是否使能首尾行padding。true表示使能首尾行padding，false表示不使能首尾行padding，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    includeFontPadding?: boolean;

    /**
     * 设置文本排版时是否使能行高回退，当设置的行高小于实际行高时，将行高回退为实际行高。true表示使能行高回退，false表示不使能行高回退，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    fallbackLineSpacing?: boolean;

    /**
     * 设置段落首行缩进，缩进值需大于等于0，默认值为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    firstLineHeadIndent?: double;

    /**
     * 设置行尾缩进数组，数组中每个元素代表一行缩进值，当实际文本行数超过缩进数组个数时，超过行的缩进为数组最后一个值，缩进值需全大于等于0，默认为空数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    tailIndents?: Array<double>;

    /**
     * 设置行首缩进数组，数组中每个元素代表一行缩进值，当实际文本行数超过缩进数组个数时，超过行的缩进为数组最后一个值，缩进值需全大于等于0，默认为空数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    headIndents?: Array<double>;

    /**
     * 设置文本排版时是否使能孤字优化。孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak]{@link text.WordBreak}为
     * 非BREAK_ALL并且待排版文本首个[TextStyle]{@link text.TextStyle}的[locale]{@link text.TextStyle}为“zh-Hans”或“zh-Hant”时生效。true表示
     * 使能孤字优化，false表示不使能孤字优化，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    orphanCharOptimization?: boolean;

    /**
     * 尾行标点悬挂
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    punctuationOverflow?: boolean;
  }

  /**
   * 占位符相对于周围文本的纵向对齐方式。
   * 
   * !
   * [zh-ch_image_PlaceholderAlignment.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_PlaceholderAlignment.png)
   * 
   * > **说明：**
   * >
   * > 示意图展示了后三种对齐方式，前三种对齐方式在文本基线对齐方式上类似，比较位置是文本基线，即绿色线条部分。
   * >
   * > ![zh-ch_image_Baseline.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_Baseline.png)
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PlaceholderAlignment {
    /**
     * 基线与文本基线对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_AT_BASELINE = 0,

    /**
     * 底部与文本基线对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ABOVE_BASELINE = 1,

    /**
     * 顶部与文本基线对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BELOW_BASELINE = 2,

    /**
     * 顶部与文本顶部对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_OF_ROW_BOX = 3,

    /**
     * 底部与文本底部对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_OF_ROW_BOX = 4,

    /**
     * 文本居中对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER_OF_ROW_BOX = 5,

    /**
     * Follow Paragraph setting,
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    FOLLOW_PARAGRAPH = 6
  }

  /**
   * 描述占位符样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlaceholderSpan {
    /**
     * 占位符的宽度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * 占位符的高度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * 相对于周围文本的纵向对齐方式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    align: PlaceholderAlignment;

    /**
     * 基线类型。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline: TextBaseline;

    /**
     * 基线偏移量，浮点数，单位为物理像素px。
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
   * 描述左闭右开区间。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Range {
    /**
     * 区间左侧端点索引，整数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * 区间右侧端点索引，整数。
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
   * 字体类型枚举，通过位或运算可实现组合类型。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  enum SystemFontType {
    /**
     * 所有字体类型，包括系统字体类型、风格字体类型和用户已安装字体类型。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    ALL = 1 << 0,

    /**
     * 系统字体类型。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    GENERIC = 1 << 1,

    /**
     * 风格字体类型。风格字体类型是专为2in1设备设计的字体类型。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    STYLISH = 1 << 2,

    /**
     * 用户已安装的字体类型。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    INSTALLED = 1 << 3,

    /**
     * 自定义字体类型。
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
   * 字体可变轴信息。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationAxis {
    /**
     * 字体可变轴的关键字标识。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    key: string;

    /**
     * 字体可变轴的最小值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    minValue: double;

    /**
     * 字体可变轴的最大值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    maxValue: double;

    /**
     * 字体可变轴的默认值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    defaultValue: double;

    /**
     * 字体可变轴的标志位，用于标记某个可变轴是否应该对用户隐藏，值为0或1。值为0时表示该轴对用户可见，值为1时表示该轴应隐藏。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    flags: int;

    /**
     * 字体可变轴的英文名称。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * 字体可变轴的本地化名称，可以为空。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;
  }

  /**
   * 字体可变实例信息，存放预设的可变字体样式信息。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationInstance {
    /**
     * 字体可变实例的英文名称。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * 字体可变实例的本地化名称，可以为空。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;

    /**
     * 可变字体属性数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    coordinates: Array<FontVariation>;
  }

  /**
   * 字体描述符信息。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 14 dynamic
   * @since 23 static
   */
  interface FontDescriptor {
    /**
     * 字体绝对路径，可取遵循系统限制的任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    path?: string;

    /**
     * 字体唯一标识名称，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    postScriptName?: string;

    /**
     * 字体名称，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fullName?: string;

    /**
     * 字体家族，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fontFamily?: string;

    /**
     * 子字体家族，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    fontSubfamily?: string;

    /**
     * 字体字重，默认值为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    weight?: FontWeight;

    /**
     * 字体宽度，取值范围1-9整数，默认值为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    width?: int;

    /**
     * 是否是斜体字体，0表示非斜体，1表示斜体，默认值为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    italic?: int;

    /**
     * 是否是等宽字体，true表示等宽，false表示非等宽，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    monoSpace?: boolean;

    /**
     * 是否支持符号，true表示支持，false表示不支持，默认值为false。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 14 dynamic
     * @since 23 static
     */
    symbolic?: boolean;

    /**
     * 根据系统语言配置提取字体唯一标识，字体文件中若无当前语言对应配置则取“en”对应信息。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localPostscriptName?: string;

    /**
     * 根据系统语言配置提取字体全名，字体文件中若无当前语言对应配置则取“en”对应信息。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFullName?: string;

    /**
     * 根据系统语言配置提取字体家族名称，字体文件中若无当前语言对应配置则取“en”对应信息。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFamilyName?: string;

    /**
     * 根据系统语言配置提取子字体家族名称，字体文件中若无当前语言对应配置则取“en”对应信息。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localSubFamilyName?: string;

    /**
     * 字体版本，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    version?: string;

    /**
     * 字体制造商信息，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    manufacture?: string;

    /**
     * 字体版权信息，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    copyright?: string;

    /**
     * 字体商标信息，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    trademark?: string;

    /**
     * 字体许可证信息，可取任意字符串，默认为空字符串。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    license?: string;

    /**
     * 字体可变轴记录数组，用于描述字体支持的可变轴信息。非可变字体此字段为undefined。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationAxisRecords?: Array<FontVariationAxis>;

    /**
     * 字体可变实例记录数组，用于描述字体支持的可变实例信息。非可变字体此字段为undefined。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationInstanceRecords?: Array<FontVariationInstance>;

    /**
     * 字体索引，字体文件为ttc类型时有效，ttf类型统一为0。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    index?: int;

    /**
     * 字体支持的language列表
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    languages?: Array<string>;

    /**
     * 字体支持的font feature列表
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    fontFeatures?: Array<string>;
  }

  /**
   * 保存文本内容及样式的载体，支持排版与绘制操作。
   * 
   * 下列API示例中都需先使用[ParagraphBuilder]{@link text.ParagraphBuilder}类的[build()]{@link text.ParagraphBuilder.build}接口获取到
   * Paragraph对象实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class Paragraph {
    /**
     * 使用给定的高度和宽度进行排版并计算所有字形的位置。
     *
     * @param { TextRectSize } size - 约束的高度和宽度，单位为物理像素px。
     * @returns { TextLayoutResult } 布局后的实际尺寸和排版后容下的字符范围。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    layoutWithConstraints(size: TextRectSize): TextLayoutResult;

    /**
     * 进行排版并计算所有字形位置。
     *
     * @param { double } width - 单行的最大宽度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    layoutSync(width: double): void;

    /**
     * 进行排版并计算所有字形位置，使用Promise异步回调。
     *
     * @param { double } width - 单行的最大宽度，浮点数，单位为物理像素px。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 在画布上以 (x, y) 为左上角绘制文本。
     *
     * @param { drawing.Canvas } canvas - 绘制的目标画布。
     * @param { double } x - 绘制的左上角位置的横坐标，浮点数，单位为物理像素px。
     * @param { double } y - 绘制的左上角位置的纵坐标，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * 在画布上沿路径绘制文本。
     *
     * @param { drawing.Canvas } canvas - 绘制的目标画布。
     * @param { drawing.Path } path - 确认文字位置的路径。
     * @param { double } hOffset - 沿路径方向偏置，从路径起点向前为正，向后为负，单位为物理像素px。
     * @param { double } vOffset - 沿路径垂直方向偏置，沿路径方向左侧为负，右侧为正，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: double, vOffset: double): void;

    /**
     * 获取文本最大行宽。
     *
     * @returns { double } 最大的行宽，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxWidth(): double;

    /**
     * 获取文本总高度。
     *
     * @returns { double } 总高度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getHeight(): double;

    /**
     * 获取文本最长行宽。
     *
     * @returns { double } 最长一行的宽度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLongestLine(): double;

    /**
     * 获取文本最长一行的宽度（包含缩进），建议向上取整。文本内容为空时返回0。
     *
     * @returns { double } 最长一行的宽度（该宽度包含当前行缩进的宽度），浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 13 dynamic
     * @since 23 static
     */
    getLongestLineWithIndent(): double;

    /**
     * 获取段落最小固有宽度。
     *
     * @returns { double } 该段落所占水平空间的最小固有宽度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMinIntrinsicWidth(): double;

    /**
     * 获取段落最大固有宽度。
     *
     * @returns { double } 该段落所占水平空间的最大固有宽度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxIntrinsicWidth(): double;

    /**
     * 获取拉丁字母基线位置。
     *
     * @returns { double } 拉丁字母下的基线位置，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlphabeticBaseline(): double;

    /**
     * 获取表意字（如CJK（中文，日文，韩文））下的基线位置。
     *
     * @returns { double } 获取表意字下的基线位置，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getIdeographicBaseline(): double;

    /**
     * 获取给定的矩形区域宽度以及矩形区域高度的规格下，文本中该区间范围内的字符所占的矩形区域。
     *
     * @param { Range } range - 需要获取的区域的文本区间。
     * @param { RectWidthStyle } widthStyle - 返回的矩形区域的宽度的规格。
     * @param { RectHeightStyle } heightStyle - 返回的矩形区域的高度的规格。
     * @returns { Array<TextBox> } 矩形区域数组。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

    /**
     * 获取文本中所有占位符所占的矩形区域。
     *
     * @returns { Array<TextBox> } 矩形区域数组。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * 获取与给定坐标最接近的字形位置信息。
     *
     * @param { double } x - 横坐标，浮点数，单位为物理像素px。
     * @param { double } y - 纵坐标，浮点数，单位为物理像素px。
     * @returns { PositionWithAffinity } 字形位置信息。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity;

    /**
     * 返回给定offset的字形所在单词的索引区间。
     *
     * @param { int } offset - 字形的偏移量，整数。
     * @returns { Range } 单词的索引区间。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getWordBoundary(offset: int): Range;

    /**
     * 返回文本行数。
     *
     * @returns { int } 文本行数量，整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineCount(): int;

    /**
     * 返回指定行的行高。
     *
     * @param { int } line - 文本行索引，整数，范围为0~getLineCount()-1。
     * @returns { double } 行高，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineHeight(line: int): double;

    /**
     * 返回指定行的行宽。
     *
     * @param { int } line - 文本行索引，整数，范围为0~getLineCount()-1。
     * @returns { double } 行宽，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineWidth(line: int): double;

    /**
     * 返回段落是否超过最大行数。
     *
     * @returns { boolean } true表示段落超出了最大行限制，false则表示没有超出最大行限制。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    didExceedMaxLines(): boolean;

    /**
     * 返回所有的文本行。
     *
     * @returns { Array<TextLine> } 文本行载体数组。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getTextLines(): Array<TextLine>;

    /**
     * 获取指定行的实际可见文本范围，不包括溢出的省略号。
     *
     * @param { int } lineNumber - 要获取文本范围的行索引，行索引从0开始。该接口只能获取已有行的边界，即输入行索引从0开始。最大行索引为文本行数量-1，文本行数量可通过
     *     [getLineCount]{@link text.Paragraph.getLineCount}接口获取。
     * @param { boolean } includeSpaces - 表示是否应包含空白字符。true表示包含空白字符，false表示不包含空白字符。
     * @returns { Range } 返回对应行数的实际文本范围。如果行索引非法，返回的start和end均为0。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getActualTextRange(lineNumber: int, includeSpaces: boolean): Range;

    /**
     * 获取文本行的行度量数组。
     *
     * @returns { Array<LineMetrics> } 文本行的行度量数组。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getLineMetrics(): Array<LineMetrics>;

    /**
     * 获取特定行号的行度量信息。
     *
     * @param { int } lineNumber - 要查询度量信息的行的编号，行号从0开始。
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
     * 更新整个文本段落的颜色。如果当前装饰线未设置颜色，使用该接口也会同时更新装饰线的颜色。
     *
     * @param { common2D.Color } color - 更新后的字体色。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    updateColor(color: common2D.Color): void;

    /**
     * 更新整个文本段落的装饰线。
     *
     * @param { Decoration } decoration - 更新后的装饰线。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    updateDecoration(decoration: Decoration): void;

    /**
     * 获取指定字形范围对应的字符范围。
     *
     * @param { Range } glyphRange - 字形范围。
     * @param { drawing.TextEncoding } encoding - 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的字符范围表示字节范围。对于UTF-16编码，返回的字符范
     *     围表示UTF-16编码单元范围。
     * @returns { Array<Range> } 字符范围。如果数组包含一个元素，它表示字符范围。如果包含两个元素，第一个是字符范围，第二个是实际的字形范围。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterRangeForGlyphRange(glyphRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * 获取指定字符范围对应的字形范围。
     *
     * @param { Range } characterRange - 字符范围。
     * @param { drawing.TextEncoding } encoding - 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的实际字符范围表示字节范围。对于UTF-16编码，返回的实
     *     际字符范围表示UTF-16编码单元范围。
     * @returns { Array<Range> } 字形范围。数组包含两个元素，第一个是字形范围，第二个是实际的字符范围。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphRangeForCharacterRange(characterRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * 获取与给定坐标最接近的字符位置信息。
     *
     * @param { double } x - 文本排版区域内的水平坐标，单位为物理像素（px）。相对于文本排版区域左上角的x偏移量，向右为正方向。支持浮点数，可取负值（表示在文本区域左侧）。坐标超出文本区域范围时，将返回最近的字
     *     符位置。可通过触摸事件或点击事件获取。
     * @param { double } y - 文本排版区域内的垂直坐标，单位为物理像素（px）。相对于文本排版区域左上角的y偏移量，向下为正方向。支持浮点数，可取负值（表示在文本区域上方）。坐标超出文本区域范围时，将返回最近的字
     *     符位置。可通过触摸事件或点击事件获取。
     * @param { drawing.TextEncoding } encoding - 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的字符位置表示字节偏移量。对于UTF-16编码，返回的字符
     *     位置表示UTF-16编码单元偏移量。
     * @returns { PositionWithAffinity } 字符位置信息。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterPositionAtCoordinate(x: double, y: double, encoding: drawing.TextEncoding): PositionWithAffinity;

    /**
     * 获取段落的文本处理状态。
     *
     * @returns { TextProcessState } 段落的文本处理状态。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getProcessState(): TextProcessState;

    /**
     * 获取段落的文本显示状态。
     *
     * @returns { TextDisplayState } 段落的文本显示状态。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getTextDisplayState(): TextDisplayState;

    /**
     * 获取段落的样式配置。
     *
     * @returns { ParagraphStyle } 段落的样式配置。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getParagraphStyle(): ParagraphStyle;

    /**
     * 获取段落中在屏幕上可见的文本范围。不包含因最大行数（[ParagraphStyle]{@link text.ParagraphStyle}的maxLines属性）截断或省略号模式（
     * [EllipsisMode]{@link text.EllipsisMode}）替换而未显示的文本。
     *
     * @returns { Array<Range> } 段落可见文本范围数组，范围为UTF-16编码单元索引。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getVisibleTextRanges(): Array<Range>;

    /**
     * 是否强制复用栅格化结果。
     *
     * @param { boolean } isForce - 是否强制复用栅格化结果。
     *     True表示强制复用光栅化结果。False表示允许更新光栅化结果。
     *     默认值为false。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    forceReuseRasterResult(isForce: boolean): void;
  }

  /**
   * 保存着文本内容以及样式的载体，可以用于计算单行排版信息。
   * 
   * 下列API示例中都需先使用[ParagraphBuilder]{@link text.ParagraphBuilder}类的
   * [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset}接口获取到LineTypeset对象实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  class LineTypeset {
    /**
     * 计算在限定宽度下，从指定位置开始可以排版的字符数。
     *
     * @param { int } startIndex - 开始计算排版的起始位置（包括起始位置）。取值范围需要为[0,文本字符总数）的整数，当参数超出范围时抛出异常。
     * @param { double } width - 可用于排版的宽度，大于0的浮点数，单位为物理像素px。
     * @returns { int } 返回在限定排版宽度下，从指定位置开始可排版的字符总数，取值为整数。
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
     * 根据指定的排版区间生成文本行对象。
     *
     * @param { int } startIndex - 开始计算排版的起始位置，整数，取值范围为[0, 文本字符总数)。
     * @param { int } count - 从指定起始位置开始进行排版的字符个数，取值为
     *     [0,文本字符总数)的整数，startIndex和count之和不能大于文本字符总数。当count为0时，表示排版区间为[startIndex, 文本的最后一个字符位置]。
     *     可以先使用[getLineBreak]{@link text.LineTypeset.getLineBreak}获取合理的排版字符总数。
     * @returns { TextLine } 根据文本区间字符生成的TextLine对象。
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
   * 文本矩形区域，表示文本在布局时所占用的矩形空间。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface TextBox {
    /**
     * 矩形区域信息，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rect: common2D.Rect;

    /**
     * 文本方向。
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
   * 位置和亲和度。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface PositionWithAffinity {
    /**
     * 字形相对于段落的索引，整数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    position: int;

    /**
     * 位置亲和度。
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
   * 矩形区域宽度规格枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectWidthStyle {
    /**
     * 不设置letterSpacing时，与字形紧贴，否则包含letterSpacing的宽度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TIGHT = 0,

    /**
     * 扩展宽度，以匹配所有行上最宽矩形的位置。
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
   * 矩形区域高度规格枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectHeightStyle {
    /**
     * 与字形紧贴。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    TIGHT = 0,

    /**
     * 扩展高度，以匹配所有行上最高矩形的位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    MAX = 1,

    /**
     * 每个矩形的顶部和底部将覆盖行上方和行下方的一半空间。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_MIDDLE = 2,

    /**
     * 行间距将被添加到矩形的顶部。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_TOP = 3,

    /**
     * 行间距将被添加到矩形的底部。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    INCLUDE_LINE_SPACE_BOTTOM = 4,

    /**
     * 高度按照文本的样式设置。
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
   * 位置亲和度枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum Affinity {
    /**
     * 该位置与文本位置的前一位有关联。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UPSTREAM = 0,
    /**
     * 该位置与文本位置的后一位有关联。
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
   * 段落生成器。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class ParagraphBuilder {
    /**
     * ParagraphBuilder对象的构造函数。
     *
     * @param { ParagraphStyle } paragraphStyle - 段落样式。
     * @param { FontCollection } fontCollection - 字体集。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * 更新当前文本块的样式。
     * 
     * > **说明：**
     * >
     * > 更新当前文本块的样式，之后添加文字均采用该样式。
     *
     * @param { TextStyle } textStyle - 包含了对文本的各种视觉属性的定义，如字体、字号、颜色、字重、字间距、行距、装饰（如下划线、删除线）、文本阴影等。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * 弹出当前文本样式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    popStyle(): void;

    /**
     * 向正在构建的文本段落中插入具体的文本字符串。
     *
     * @param { string } text - 段落中插入的具体文本字符串，传入非法Unicode时会显示?。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addText(text: string): void;

    /**
     * 用于构建文本段落时插入占位符。
     *
     * @param { PlaceholderSpan } placeholderSpan - 定义了占位符的尺寸、对齐方式、基线类型以及基线偏移量。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * 用于构建段落，生成可用于后续排版渲染的段落对象。
     *
     * @returns { Paragraph } 可用于后续渲染的 Paragraph 对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    build(): Paragraph;

    /**
     * 构建行排版器。
     *
     * @returns { LineTypeset } 可用于后续渲染的LineTypeset对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    buildLineTypeset(): LineTypeset;

    /**
     * 向正在构建的文本段落中插入具体符号。
     *
     * @param { int } symbolId - 要设置的symbol码位，十六进制，当前支持的取值范围为：0xF0000-0xF0C97。可设置的symbol码位（即列表视图下的unicode值）请见
     *     [主题图标库](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/)。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    addSymbol(symbolId: int): void;
  }

  /**
   * 文本行的排版边界。文本行排版边界与排版字体、排版字号有关，与字符本身无关，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，排版边界就包括行首和末尾空格的边界。例如字符串为"j"或"E"，排版边界相同
   * ，即与字符本身无关。
   * 
   * > **说明：**
   * >
   * > 示意图展示文本行排版参数：width（包含左右空格的文本行宽度）、ascent（上升高度最高点）、descent（下降高度最低点）、leading（行间距）、top（当前行最高点）、baseline（字符基线）、bottom（
   * > 当前行最低点）、next line top（下一行最高点）。
   * >
   * > ![zh-ch_image_Typographic.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_Typographic.png)
   * >
   * > 示意图展示了字符串为" a b "的排版边界。
   * >
   * > !
   * > [zh-ch_image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds.png)
   * >
   * > 示意图展示了字符串为"j"或"E"的排版边界。
   * >
   * > !
   * > [zh-ch_image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds_Character.png)
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface TypographicBounds {
    /**
     * 文本行的上升高度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    ascent: double;

    /**
     * 文本行的下降高度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    descent: double;

    /**
     * 文本行的行间距，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    leading: double;

    /**
     * 排版边界的总宽度，浮点数，单位为物理像素px。
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
   * 将文本行中每个字符的偏移量和索引值作为参数的回调方法。
   *
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   *     that the cursor is located at the front of the character, that is, the offset does not contain the character
   *     width. The value false means that the cursor is located at the rear of the character, that is, the offset
   *     contains the character width.
   * @returns { boolean } 表示是否停止调用该回调函数，true表示停止调用该回调函数，false表示继续调用该回调函数。
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean;

  /**
   * 描述段落基础文本行结构的载体。
   * 
   * 下列API示例中都需先使用[Paragraph]{@link text.ParagraphStyle}类的[getTextLines()]{@link text.Paragraph.getTextLines}接口或者
   * [LineTypeset]{@link text.LineTypeset}类的[createLine()]{@link text.LineTypeset.createLine}接口获取到TextLine对象实例，再通过此实例调用对
   * 应方法。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class TextLine {
    /**
     * 获取文本行中字形的数量。
     *
     * @returns { int } 该文本行中字形数量，整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphCount(): int;

    /**
     * 获取该行文本在整个段落文本中的索引区间。
     *
     * @returns { Range } 该行文本在整个段落文本中的索引区间。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getTextRange(): Range;

    /**
     * 获取文本行的排版单元数组。
     *
     * @returns { Array<Run> } 该文本行中的文本排版单元数组。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphRuns(): Array<Run>;

    /**
     * 在画布上以坐标点(x, y)为左上角位置绘制该文本行。
     *
     * @param { drawing.Canvas } canvas - 绘制的目标canvas。
     * @param { double } x - 绘制的左上角位置的横坐标，浮点数，单位为物理像素px。
     * @param { double } y - 绘制的左上角位置的纵坐标，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * 创建一个截断的文本行对象。
     *
     * @param { double } width - 截断后的行宽度，浮点数，单位为物理像素px。
     * @param { EllipsisMode } ellipsisMode - 截断的类型，当前仅支持头部截断START和尾部截断END。
     * @param { string } ellipsis - 截断的标记字符串。
     * @returns { TextLine } 截断的文本行对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine;

    /**
     * 创建一个截断的文本行对象
     * @param { double } width - 截断后的行宽度
     * @param { EllipsisMode } ellipsisMode - 省略的类型，当前不支持中部省略
     * @param { string } ellipsis - 用于省略的文字
     * @returns { TextLine | undefined } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine | undefined;

    /**
     * 获取文本行的排版边界。文本行排版边界与排版字体、排版字号有关，与字符本身无关。例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，排版边界就包括行首和末尾空格的边界。例如字符串为"j"或"E"，排版
     * 边界相同，即与字符本身无关。
     * 
     * > **说明：**
     * >
     * > 示意图展示了字符串为" a b "的排版边界。
     * >
     * > !
     * > [zh-ch_image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds.png)
     * >
     * > 示意图展示了字符串为"j"或"E"的排版边界。
     * >
     * > !
     * > [zh-ch_image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds_Character.png)
     *
     * @returns { TypographicBounds } 文本行的排版边界。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * 获取文本行的图像边界。文本行图像边界与排版字体、排版字号、字符本身都有关，相当于视觉边界。例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，用户在界面上只能看到"a b"，图像边界即为不包括带行首
     * 和末尾空格的边界。例如字符串为"j"或"E"，视觉边界不同，即与字符本身有关，"j"字符串的视觉边界宽度小于"E"字符串的视觉边界宽度，"j"字符串的视觉边界高度大于"E"字符串的视觉边界高度。
     * 
     * > **说明：**
     * >
     * > 示意图展示了字符串为" a b "的图像边界。
     * >
     * > ![zh-ch_image_ImageBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds.png)
     * >
     * > 示意图展示了字符串为"j"或"E"的图像边界。
     * >
     * > !
     * > [zh-ch_image_ImageBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds_Character.png)
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
     * 获取文本行尾部空白字符的宽度。
     *
     * @returns { double } 文本行尾部空白字符的宽度，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTrailingSpaceWidth(): double;

    /**
     * 获取给定位置在原始字符串中的字符索引。
     *
     * @param { common2D.Point } point - 要查找索引的位置。
     * @returns { int } 给定位置在文本行中对应的字符串索引，整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getStringIndexForPosition(point: common2D.Point): int;

    /**
     * 获取文本行中给定字符串索引处的偏移量。
     *
     * @param { int } index - 要获取偏移量的字符串索引，整数。
     * @returns { double } 给定字符串索引处的偏移量，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getOffsetForStringIndex(index: int): double;

    /**
     * 枚举文本行中每个字符的偏移量和索引值。
     *
     * @param { CaretOffsetsCallback } callback - 用户自定义函数。回调方法参数包括文本行中每个字符的偏移量和索引值。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    enumerateCaretOffsets(callback: CaretOffsetsCallback): void;

    /**
     * 获取文本行根据对齐因子和对齐宽度计算的对齐所需偏移量。
     *
     * @param { double } alignmentFactor - 对齐因子，即对齐的程度，浮点数。小于等于0.0表示左对齐，大于0.0小于0.5表示偏左对齐，0.5表示居中对齐，大于0.5小于1.0表示偏右对齐，大于等于
     *     1.0表示右对齐。
     * @param { double } alignmentWidth - 对齐宽度，即文本行的宽度，浮点数，单位为物理像素px。小于文本行的实际宽度时，返回0。
     * @returns { double } 计算得到的对齐所需偏移量，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getAlignmentOffset(alignmentFactor: double, alignmentWidth: double): double;
  }

  /**
   * 文本排版单元。
   * 
   * 下列API示例中都需先使用[TextLine]{@link text.TextLine}类的[getGlyphRuns()]{@link text.TextLine.getGlyphRuns}接口获取Run对象实例，再通过此实例调
   * 用对应方法。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  class Run {
    /**
     * 获取该排版单元中字形的数量。
     *
     * @returns { int } 该排版单元中字形数量，整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphCount(): int;

    /**
     * 获取该排版单元中每个字符的字形序号。
     *
     * @returns { Array<int> } 该排版单元中每个字符对应的字形序号。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getGlyphs(): Array<int>;

    /**
     * 获取该排版单元指定范围内每个字符的字形序号。
     *
     * @param { Range } range - 要获取的字形序号范围，range.start表示范围开始的位置，range.end表示范围的长度，当range.end为0时表示从range.start开始获取到渲染块结束。当
     *     range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。
     * @returns { Array<int> } 该排版单元中每个字符对应的字形序号。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getGlyphs(range: Range): Array<int>;

    /**
     * 获取范围内每个字符的字形标识符
     * @param { Range } range range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形
     * @returns { Array<int> | undefined } Glyph identifier or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getGlyphs(range: Range): Array<int> | undefined;

    /**
     * 获取该排版单元中每个字形相对于每行的字形位置。
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
     * 获取该排版单元指定范围内每个字形相对于每行的字形位置数组。
     *
     * @param { Range } range - 要获取的字形位置范围，range.start表示范围开始的位置，range.end表示范围的长度，如果长度是0表示从范围range.start开始获取到渲染块结束。当
     *     range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     *     the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getPositions(range: Range): Array<common2D.Point>;

    /**
     * 获取指定范围内字体位置信息
     * @param { Range } range range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形
     * @returns { Array<common2D.Point> | undefined } The position of the font in the layout or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getPositions(range: Range): Array<common2D.Point> | undefined;

    /**
     * 获取该排版单元中每个字形的索引偏移量。
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
     * 获取排版单元的字体属性对象。
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
     * 在画布上以(x, y)为左上角位置绘制排版单元。
     *
     * @param { drawing.Canvas } canvas - 绘制的目标 canvas。
     * @param { double } x - 绘制的左上角位置的横坐标，浮点数，单位为物理像素px。
     * @param { double } y - 绘制的左上角位置的纵坐标，浮点数，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * 获取排版单元指定范围内字形的字符索引，该索引是相对于整个段落的偏移。
     *
     * @param { Range } [range] - 要获取的字符索引范围，range.start表示范围开始的位置，range.end表示范围的长度，如果长度是0表示从范围range.start开始获取到渲染块结束。当
     *     range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。不传该参数时，默认获取整个渲染块。
     * @returns { Array<int> } 返回每个字符的索引。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getStringIndices(range?: Range): Array<int>;

    /**
     * 获取run对象中字形索引的范围，索引为相对于段落起始的偏移
     * @param { Range } [range] range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形
     * @returns { Array<int> | undefined } The glyph indices or undefined.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getStringIndices(range?: Range): Array<int> | undefined;

    /**
     * 获取排版单元生成字形的字符范围。
     *
     * @returns { Range } 排版单元生成字形的字符范围，Range类型中的start表示字符范围的开始位置，该位置是相对于整个段落的索引，Range类型中的end表示字符范围的长度。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getStringRange(): Range;

    /**
     * 获取该排版单元的排版边界，排版边界与排版字体、排版字号有关，与字符本身无关，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，排版边界就包括行首和末尾空格的边界。
     * 
     * > **说明：**
     * >
     * > 示意图展示了字符串为" a b "的排版边界。
     * >
     * > !
     * > [zh-ch_image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds.png)
     * >
     * > 示意图展示了字符串为"j"或"E"的排版边界。
     * >
     * > !
     * > [zh-ch_image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds_Character.png)
     *
     * @returns { TypographicBounds } 该排版单元的排版边界。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * 获取该排版单元的图像边界，图像边界与排版字体、排版字号、字符本身都有关，相当于视觉边界，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，用户在界面上只能看到"a b"，图像边界即为不包括带行首和
     * 末尾空格的边界。
     * 
     * > **说明：**
     * >
     * > 示意图展示了字符串为" a b "的图像边界。
     * >
     * > ![zh-ch_image_ImageBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds.png)
     * >
     * > 示意图展示了字符串为"j"或"E"的图像边界。
     * >
     * > !
     * > [zh-ch_image_ImageBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds_Character.png)
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
     * 获取该排版单元的文本方向。
     *
     * @returns { TextDirection } 返回该排版单元的文本方向。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    getTextDirection(): TextDirection;

    /**
     * 获取该排版单元指定范围内每个字形的字形宽度数组。
     *
     * @param { Range } range - 要获取的字形位置范围。range.start表示范围开始的位置，range.end表示范围的长度。如果长度是0表示从range.start开始获取到渲染块结束。当
     *     range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。
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
     * 获取指定范围内的字形宽度数组
     * @param { Range } range - range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形
     * @returns { Array<common2D.Point> | undefined } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getAdvances(range: Range): Array<common2D.Point> | undefined;

    /**
     * 获取当前绘制单元的样式属性信息
     *
     * @returns { TextStyle } 当前绘制单元的样式属性对象
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getTextStyle(): TextStyle;
  }

  /**
   * 描述文本行中连续文本块的布局信息和度量数据。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface RunMetrics {
    /**
     * 字体的样式信息。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    textStyle: TextStyle;

    /**
     * 字体度量信息。
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
   * 描述文本布局中单行文字的度量信息。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface LineMetrics {
    /**
     * 文本缓冲区中该行开始的索引位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    startIndex: int;

    /**
     * 文本缓冲区中该行结束的索引位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    endIndex: int;

    /**
     * 文字上升高度，即从基线到字符顶部的距离，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ascent: double;

    /**
     * 文字下降高度，即从基线到字符底部的距离，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    descent: double;

    /**
     * 当前行的高度，单位为物理像素px，计算方式为 `Math.round(ascent + descent)`
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * 行的宽度，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * 行的左边缘位置，单位为物理像素px。右边缘可通过 `left+width` 计算得出。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * 该行基线相对于段落顶部的 Y 坐标位置，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    baseline: double;

    /**
     * 行号，从0开始计数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    lineNumber: int;

    /**
     * 从顶部到当前行的高度，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    topHeight: double;

    /**
     * 文本索引范围与关联的字体度量信息之间的映射。
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
   * 根据字体类型返回该类型对应的所有字体的字体名称，使用Promise异步回调。
   *
   * @param { SystemFontType } fontType - 指定的字体类型。
   * @returns { Promise<Array<string>> } Promise对象，返回相应字体类型的所有字体的fullName。
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
   * 获取指定字体类型的所有字体文件路径。
   *
   * @param { SystemFontType } fontType - 指定的字体类型。
   * @returns { Array<string> } 字体文件路径列表。
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontPathsByType(fontType: SystemFontType): Array<string>;

  /**
   * 根据字体名称和类型获取字体描述符，使用Promise异步回调。
   * 
   * 字体描述符是描述字体特征的数据结构，包含字体外观和属性的详细信息。
   *
   * @param { string } fullName - 指定的字体名称。可以使用[getSystemFontFullNamesByType]{@link text.getSystemFontFullNamesByType}获取。
   * @param { SystemFontType } fontType - 指定的字体类型。
   * @returns { Promise<FontDescriptor> } Promise对象，返回指定的字体描述符。
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
   * 根据指定的字体描述符返回所有符合要求的系统字体描述符，使用Promise异步回调。
   *
   * @param { FontDescriptor } desc - 指定需要用来做匹配的字体描述符。如果不指定任何字段，则返回系统的所有字体描述符。如果填写了指定字段，则按照指定字段进行匹配。如果匹配失败，返回空数组。
   * @returns { Promise<Array<FontDescriptor>> } Promise对象，返回所有匹配到的系统字体描述符。
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
   * 段落风格的文本制表符，储存了对齐方式和位置。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface TextTab {
    /**
     * 段落中制表符之后的文本对齐方式，支持设置[TextAlign]{@link text.TextAlign}的LEFT左对齐、RIGHT右对齐和CENTER居中对齐方式，未列出的枚举值将视为左对齐，默认为左对齐。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    alignment: TextAlign;

    /**
     * 制表符之后的文本对齐位置，浮点数，单位为物理像素px，最小值为1.0，当该值小于1.0时，该制表符会被替换为一个空格。
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
   * 文字渲染高对比度配置类型枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextHighContrast {
    /**
     * 跟随系统设置中的高对比度文字配置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_FOLLOW_SYSTEM_HIGH_CONTRAST = 0,

    /**
     * 关闭APP的文字渲染高对比度配置，该模式的优先级要高于系统设置中的高对比度文字配置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    TEXT_APP_DISABLE_HIGH_CONTRAST = 1,

    /**
     * 开启APP的文字渲染高对比度配置，该模式的优先级要高于系统设置中的高对比度文字配置。
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
   * 用于设置文字渲染高对比度模式。
   * 
   * 该接口设置后整个进程都会生效，进程内所有页面共用相同模式。
   * 
   * 可调用此接口设置，也可通过系统设置界面中**高对比度文字配置开关**进行开启/关闭。使用此接口设置开启/关闭文字渲染高对比度配置的优先级高于系统开关设置。
   * 
   * 该接口针对应用的文字自绘制场景不生效。
   *
   * @param { TextHighContrast } action - 文字渲染高对比度模式。
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  function setTextHighContrast(action : TextHighContrast): void;

  /**
   * 文本未定义字形时的显示方式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  enum TextUndefinedGlyphDisplay {
    /**
     * 使用字体的内部.notdef字形。遵循字体的内部.notdef字形设计，可以是空框、空格或自定义符号。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 24]
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    USE_DEFAULT = 0,
    /**
     * 总是用显式的豆腐块替换未定义的字形，覆盖字体的默认行为。用于调试缺失字符或强制一致的缺失符号显示。
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
   * 文本处理状态的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum TextProcessState {
    /**
     * 初始状态，文本处理尚未开始。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    INIT = 0,
    /**
     * 已生成索引状态，文本索引已生成。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    INDEXED = 1,
    /**
     * 已塑形状态，文本已完成塑形。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHAPED = 2,
    /**
     * 已换行状态，文本已换行。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    LINE_BROKEN = 3,
    /**
     * 已格式化状态，文本已完成格式化。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    FORMATTED = 4,
    /**
     * 已绘制状态，文本已完成绘制。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PAINT = 5,
    /**
     * 已更新属性状态，文本属性已更新。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UPDATE_ATTRIBUTE = 6
  }

  /**
   * 文本显示状态的枚举。表示文本排版后的原生结果，与外部画布裁切、溢出屏幕等外部显示因素无关。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum TextDisplayState {
    /**
     * 未知显示状态，默认状态。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN = 0,
    /**
     * 完整显示状态，文本无截断、无省略，全部内容正常显示。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ALL = 1,
    /**
     * 裁剪显示状态，文本超出排版区域的部分被直接裁剪隐藏。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CLIP = 2,
    /**
     * 省略显示状态，文本超出排版区域后，部分内容以指定字符（如省略号 '...'）替代展示。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    OMITTED = 3
  }

  /**
   * 文本矩形尺寸，用于描述文本的矩形宽高属性。值为浮点数，单位为物理像素px。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextRectSize {
    /**
     * 文本矩形的宽度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    width: double;

    /**
     * 文本矩形的高度，浮点数，单位为物理像素px。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    height: double;
  }

  /**
   * 文本布局结果。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextLayoutResult {
    /**
     * 文本布局计算完成后能够完整显示的字符范围数组。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fitStrRange: Array<Range>;

    /**
     * 布局后段落的矩形尺寸。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    correctRect: TextRectSize;
  }

  /**
   * 设置字符映射到.notdef（未定义）字形时要使用的字形类型。
   * 
   * 影响此调用后呈现的所有文本。
   * 
   * 此配置会影响显示字体中未定义字符的方式：
   * 
   * - 默认行为遵循字体的内部.notdef字形设计。
   * - 开启后将强制使缺失字形的字符以豆腐块形式显示。
   *
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - 无法塑形字符的显示方式。
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 24]
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void;

  /**
   * 根据字体文件路径获取字体描述符数组。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。
   * >
   * > - [FontDescriptor]{@link text.FontDescriptor}中的weight字段并不精准对应字体文件内部的字重数值，而是将字体文件中的实际字重四舍五入映射到
   * > [FontWeight]{@link text.FontWeight}枚举值后的结果。例如，字体文件字重350会映射为400，对应枚举为W400。
   *
   * @param { string | Resource } path - 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")
   *     。
   * @returns { Promise<Array<FontDescriptor>> } Promise对象，返回所有的字体描述符。如果找不到字体文件、路径无效、无权限或非字体文件，则返回空数组。
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getFontDescriptorsFromPath(path: string | Resource): Promise<Array<FontDescriptor>>;

  /**
   * 检查系统是否支持指定的字体文件。
   *
   * @param { string | Resource } fontURL - 需要检查的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 "rawfile/目录or文件名"。
   * @returns { boolean } 系统是否支持指定的字体文件。返回true表示支持，返回false表示不支持。
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isFontSupported(fontURL: string | Resource): boolean;

  /**
   * 根据字体文件路径获取字体unicode数组。使用Promise异步回调。
   * 
   * 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。
   *
   * @param { string | Resource } path - 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")
   *     。
   * @param { int } index - 字体文件格式为ttc/otc时，指定加载的字体索引。非ttc/otc格式文件索引值只能指定为0。如果该参数为负数或超出字体文件实际索引范围，将返回空数组。
   * @returns { Promise<Array<int>> } Promise对象，返回字体文件对应的unicode码数组。
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontUnicodeSet(path: string | Resource, index: int) : Promise<Array<int>>;

  /**
   * 根据字体文件路径获取包含的字体文件数。
   * 
   * 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回0。
   *
   * @param { string | Resource } path - 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")
   *     。
   * @returns { int } 包含字体数量。
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontCount(path: string | Resource) : int;
}

export default text;