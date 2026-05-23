/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * 支持图文混排和文本交互式编辑的组件。
 *
 * @file
 * @kit ArkUI
 */
import { ShadowOptions, ClickEvent, SelectionOptions, CommonMethod, Callback, HapticFeedbackMode, RectResult, HoverEvent, PixelMap } from './common';
import { Builder, CustomBuilder, CustomBuilderT, ComponentBuilder } from './builder';
import { ResourceColor, Length, ResourceStr, Dimension, Margin, BorderRadiuses, Font, VoidCallback } from './units';
import { FontStyle, FontWeight, TextAlign, WordBreak, LineBreakStrategy, ImageSpanAlignment, ImageFit, ResponseType, CopyOptions, BarState } from './enums';
import { DecorationStyleInterface, StyledString, MutableStyledString } from './styledString';
import { Resource } from './../../../api/global/resource';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
import { DecorationStyleResult, TextRange, MenuType, TextEditControllerEx, LayoutManager, PreviewText, StyledStringController, StyledStringChangedListener, TextDataDetectorConfig, OnDidChangeCallback, EditMenuOptions, KeyboardAppearance, AccessibilitySpanOptions, TextDirection, SelectedDragPreviewStyle, TextVerticalAlign, TextChangeReason, IMEClient, ShaderStyle, StrokeJoinStyle } from './textCommon';
import { GestureEvent } from './gesture';
import { EnterKeyType, SubmitEvent } from './textInput';
import { LengthMetrics, ColorMetrics } from '../Graphics';
import { TextBackgroundStyle } from './span';
import { AttributeModifier, CommonMethod } from './common';
import { ComponentContentBase } from '../ComponentContent';
/**
 * 删除方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RichEditorDeleteDirection {
    /**
     * 向后删除。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKWARD,
    /**
     * 向前删除。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD
}
/**
 * Span类型信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RichEditorSpanType {
    /**
     * Span类型为文字。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT = 0,
    /**
     * Span类型为图像。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 1,
    /**
     * Span类型为图文混合。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MIXED = 2,
    /**
     * Span类型为BuilderSpan。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BUILDER = 3,
    /**
     * 默认类型，不指定Span类型时生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 4
}
/**
 * 撤销还原是否保留原样式选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum UndoStyle {
    /**
     * 撤销还原内容不保留原样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    CLEAR_STYLE = 0,
    /**
     * 撤销还原内容保留原样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    KEEP_STYLE = 1
}
/**
 * 菜单的响应类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RichEditorResponseType {
    /**
     * 通过鼠标右键触发菜单弹出。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RIGHT_CLICK = 0,
    /**
     * 通过长按触发菜单弹出。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LONG_PRESS = 1,
    /**
     * 通过鼠标选中触发菜单弹出。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SELECT = 2,
    /**
     * 默认类型，不指定Span类型时生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 3
}
/**
 * Span位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSpanPosition {
    /**
     * Span索引值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanIndex: int;
    /**
     * Span内容在RichEditor内的起始和结束位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanRange: [
        int,
        int
    ];
}
/**
 * 文本样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorTextStyle {
    /**
     * 文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * 字体大小，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: Length | double;
    /**
     * 字体样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * 字体粗细。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: int | FontWeight | string;
    /**
     * 字体列表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFamily?: ResourceStr;
    /**
     * 文本装饰线样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    decoration?: DecorationStyleInterface;
    /**
     * 文字阴影效果。
     * 
     * **说明：**
     * 
     * 仅支持查询阴影模糊半径、颜色和偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textShadow?: ShadowOptions | Array<ShadowOptions>;
    /**
     * 文本字符间距，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    letterSpacing?: double | string;
    /**
     * 文本行高，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lineHeight?: double | string | Resource;
    /**
     * 文本是否将行间距平分至行的顶部与底部。
     * 
     * true表示将行间距平分至行的顶部与底部，false则不平分。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    halfLeading?: boolean;
    /**
     * 文字特性效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFeature?: string;
    /**
     * 文本背景样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textBackgroundStyle?: TextBackgroundStyle;
    /**
     * 文本描边宽度。如果LengthMetrics的unit值是[PERCENT]{@link ./../Graphics:LengthUnit}，当前设置不生效，作为0处理。
     * 
     * 值小于0时为实体字，大于0时为轮廓字，等于0时无描边效果。
     * 
     * 默认值：0vp。
     * 
     * 单位：LengthMetrics类型时跟随LengthMetrics，number或double类型时是vp。
     * 
     * 取值范围：(-∞, +∞)
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: LengthMetrics | double;
    /**
     * 文本描边颜色。
     * 
     * 默认值：跟随字体颜色。
     * 
     * 设置异常值时跟随字体颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeColor?: ResourceColor;
    /**
     * 文本描边拐角样式。
     * 
     * 默认值：StrokeJoinStyle.MITER_JOIN。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    strokeJoinStyle?: StrokeJoinStyle;
}
/**
 * 前导边距占位符，用于表示文本段落左侧与组件边缘之间的距离。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LeadingMarginPlaceholder {
    /**
     * 图片内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pixelMap: PixelMap;
    /**
     * 图片大小，不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: [
        Dimension,
        Dimension
    ];
}
/**
 * 段落样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorParagraphStyle {
    /**
     * 设置文本段落在水平方向的对齐方式。默认值：TextAlign.START
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textAlign?: TextAlign;
    /**
     * 设置文本段落在垂直方向的对齐方式。
     * 
     * 默认值：TextVerticalAlign.BASELINE 
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    textVerticalAlign?: TextVerticalAlign;
    /**
     * 设置文本段落缩进，当段落仅存在ImageSpan或BuilderSpan时，此属性值不生效。参数为Dimension类型时，不支持以Percentage形式设置。默认值：{"size":["0.00px","0.00px"]}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    leadingMargin?: Dimension | LeadingMarginPlaceholder;
    /**
     * 设置断行规则。 
     * 
     * 默认值：WordBreak.BREAK_WORD
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    wordBreak?: WordBreak;
    /**
     * 设置折行规则。 
     * 
     * 默认值：LineBreakStrategy.GREEDY
     * 
     * 在wordBreak不等于breakAll的时候生效，不支持连字符。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lineBreakStrategy?: LineBreakStrategy;
    /**
     * 设置段落间距大小。
     * 
     * 单位：fp
     * 
     * 段落间距默认大小为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    paragraphSpacing?: double;
    /**
     * 设置文本书写方向。
     * 
     * 默认值：TextDirection.DEFAULT
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textDirection?: TextDirection;
    /**
     * 设置文本着色器效果。
     * 
     * 该接口与[RichEditorTextStyle]{@link RichEditorTextStyleResult}中的strokeWidth同时设置时，该接口不生效，shaderStyle的优先级高于
     * [RichEditorTextStyle]{@link RichEditorTextStyleResult}的fontColor。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    shaderStyle?: ShaderStyle;
}
/**
 * 定义用户粘贴事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PasteEvent {
    /**
     * 阻止系统默认粘贴事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * 文本Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorTextSpan {
    /**
     * Span位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * 文本Span内容或Symbol的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * 文本Span样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textStyle?: RichEditorTextStyle;
}
/**
 * 图片布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RichEditorLayoutStyle {
    /**
     * 外边距类型，用于描述组件不同方向的外边距。
     * 
     * 参数为Dimension类型时，四个方向外边距同时生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    margin?: Dimension | Margin;
    /**
     * 圆角类型，用于描述组件边框圆角半径。
     * 
     * 参数为Dimension类型时，不支持以Percentage形式设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Dimension | BorderRadiuses;
}
/**
 * 图片样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorImageSpanStyle {
    /**
     * 图片的宽度和高度，单位为px。默认值：size的默认值与objectFit的值有关，不同的objectFit值对应的size默认值也不同。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，图片宽度为组
     * 件宽度减去组件左右内边距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: [
        Dimension,
        Dimension
    ];
    /**
     * 图片垂直对齐方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    verticalAlign?: ImageSpanAlignment;
    /**
     * 图片缩放类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    objectFit?: ImageFit;
    /**
     * 图片布局风格。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layoutStyle?: RichEditorLayoutStyle;
}
/**
 * 组件SymbolSpan样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanStyle {
    /**
     * SymbolSpan组件大小，默认单位为fp。
     * 
     * 默认值：跟随主题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: double | string | Resource;
    /**
     * SymbolSpan组件颜色。
     * 
     * 默认值：不同渲染策略下默认值不同。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: Array<ResourceColor>;
    /**
     * SymbolSpan组件粗细。
     * 
     * number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。
     * 
     * string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
     * 
     * 默认值：FontWeight.Normal。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: int | FontWeight | string;
    /**
     * SymbolSpan组件动效策略。
     * 
     * 默认值：SymbolEffectStrategy.NONE。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectStrategy?: SymbolEffectStrategy;
    /**
     * SymbolSpan组件渲染策略。
     * 
     * 默认值：SymbolRenderingStrategy.SINGLE。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    renderingStrategy?: SymbolRenderingStrategy;
}
/**
 * 后端返回的文本样式信息。
 * 
 * 在RichEditorTextStyle中，fontWeight是设置字体粗细的输入参数。
 * 
 * 而在RichEditorTextStyleResult中，会将之前设置的字体粗细转换为数字后返回。
 * 
 * 转换关系如下：
 * | RichEditorTextStyle中的fontWeight | RichEditorTextStyleResult中的fontWeight |
 * | ---- | ----------------------------------- |
 * | 100   | 0 |
 * | 200   | 1 |
 * | 300   | 2 |
 * | 400   | 3 |
 * | 500   | 4 |
 * | 600   | 5 |
 * | 700   | 6 |
 * | 800   | 7 |
 * | 900   | 8 |
 * | Lighter   | 12 |
 * | Normal   | 10 |
 * | Regular   | 14 |
 * | Medium   | 13 |
 * | Bold   | 9 |
 * | Bolder   | 11 |
 * 
 * RichEditorSymbolSpanStyle和RichEditorSymbolSpanStyleResult中fontWeight的转换关系，与RichEditorTextStyle和
 * RichEditorTextStyleResult中fontWeight的转换关系一致。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorTextStyleResult {
    /**
     * 文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor: ResourceColor;
    /**
     * 字体大小，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize: double;
    /**
     * 字体样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontStyle: FontStyle;
    /**
     * 字体粗细。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight: int;
    /**
     * 字体列表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFamily: string;
    /**
     * 文本装饰线样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    decoration: DecorationStyleResult;
    /**
     * 文字阴影效果。
     * 
     * **说明：**
     * 
     * 仅支持查询阴影模糊半径、颜色和偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textShadow?: Array<ShadowOptions>;
    /**
     * 文本字符间距，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    letterSpacing?: double;
    /**
     * 文本行高，默认单位为fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lineHeight?: double;
    /**
     * 文本是否将行间距平分至行的顶部与底部。
     * 
     * true表示将行间距平分至行的顶部与底部，false则不平分。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    halfLeading?: boolean;
    /**
     * 文字特性效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFeature?: string;
    /**
     * 文本背景样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textBackgroundStyle?: TextBackgroundStyle;
    /**
     * 文本描边宽度。
     * 
     * 单位为[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: double;
    /**
     * 文本描边颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeColor?: ResourceColor;
    /**
     * 文本描边拐角样式。
     * 
     * 默认值：StrokeJoinStyle.MITER_JOIN。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    strokeJoinStyle?: StrokeJoinStyle;
}
/**
 * 后端返回的段落信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorParagraphResult {
    /**
     * 段落样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style: RichEditorParagraphStyle;
    /**
     * 段落起始和结束位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    range: [
        int,
        int
    ];
}
/**
 * 后端返回的SymbolSpan样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanStyleResult {
    /**
     * SymbolSpan组件大小，默认单位为fp。
     * 
     * 默认值：跟随主题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize: double | string | Resource;
    /**
     * SymbolSpan组件颜色。
     * 
     * 默认值：不同渲染策略下默认值不同。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor: Array<ResourceColor>;
    /**
     * SymbolSpan组件粗细。
     * 
     * number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。
     * 
     * string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
     * 
     * 默认值：FontWeight.Normal。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight: int | FontWeight | string;
    /**
     * SymbolSpan组件动效策略。
     * 
     * 默认值：SymbolEffectStrategy.NONE。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectStrategy: SymbolEffectStrategy;
    /**
     * SymbolSpan组件渲染策略。
     * 
     * 默认值：SymbolRenderingStrategy.SINGLE。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    renderingStrategy: SymbolRenderingStrategy;
}
/**
 * 文本Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorTextSpanResult {
    /**
     * Span位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * 文本Span内容或Symbol的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * 文本Span样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textStyle: RichEditorTextStyleResult;
    /**
     * 文本Span内容里有效内容的起始和结束位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetInSpan: [
        int,
        int
    ];
    /**
     * 组件SymbolSpan样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolSpanStyle?: RichEditorSymbolSpanStyle;
    /**
     * 组件SymbolSpan内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    valueResource?: Resource;
    /**
     * 段落样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    paragraphStyle?: RichEditorParagraphStyle;
    /**
     * 插入的预上屏文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewText?: string;
    /**
     * url信息。
     * 
     * 默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * 后端返回的图片样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorImageSpanStyleResult {
    /**
     * 图片的宽度和高度，单位为px。默认值：size的默认值与objectFit的值有关，不同的objectFit值对应的size默认值也不同。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，图片宽度为组
     * 件宽度减去组件左右内边距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: [
        int,
        int
    ];
    /**
     * 图片垂直对齐方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    verticalAlign: ImageSpanAlignment;
    /**
     * 图片缩放类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    objectFit: ImageFit;
    /**
     * 图片布局风格。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layoutStyle?: RichEditorLayoutStyle;
}
/**
 * 后端返回的图片信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorImageSpanResult {
    /**
     * Span位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * 图片内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    valuePixelMap?: PixelMap;
    /**
     * 图片资源id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    valueResourceStr?: ResourceStr;
    /**
     * 图片样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageStyle: RichEditorImageSpanStyleResult;
    /**
     * 文本Span内容里有效内容的起始和结束位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetInSpan: [
        int,
        int
    ];
}
/**
 * 图片Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorImageSpan {
    /**
     * Span位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * 图片内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: PixelMap | ResourceStr;
    /**
     * 图片样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageStyle?: RichEditorImageSpanStyle;
}
/**
 * 定义RichEditor的范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorRange {
    /**
     * 需要更新样式的文本起始位置，省略或者设置负值时表示从0开始。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: int;
    /**
     * 需要更新样式的文本结束位置，省略或者超出文本范围时表示无穷大。
     *
     * @default text length
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: int;
}
/**
 * 用户手势事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorGesture {
    /**
     * [ClickEvent]{@link ./../../@internal/component/ets/common:ClickEvent}为用户点击事件。
     * 
     * 点击完成时回调事件。
     * 
     * 双击时，第一次点击触发回调事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onClick?: Callback<ClickEvent>;
    /**
     * [GestureEvent](docroot://reference/apis-arkui/arkui-ts/ts-gesture-common.md#gestureevent对象说明)为用户长按事件。
     * 
     * 长按完成时回调事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLongPress?: Callback<GestureEvent>;
    /**
     * 双击完成时触发手势事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDoubleClick?: Callback<GestureEvent>;
}
/**
 * 添加文本的偏移位置和文本样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorTextSpanOptions {
    /**
     * 添加文本的位置。省略时，添加到所有内容的最后。
     * 
     * 当值小于0时，放在所有内容最前面；当值大于所有内容长度时，放在所有内容最后面。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
    /**
     * 文本Span样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: RichEditorTextStyle;
    /**
     * 段落样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    paragraphStyle?: RichEditorParagraphStyle;
    /**
     * 行为触发回调。省略时，仅使用系统默认行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    gesture?: RichEditorGesture;
    /**
     * url信息。
     * 
     * 默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * 设置自定义键盘是否支持避让功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyboardOptions {
    /**
     * 设置自定义键盘是否支持避让功能。默认值为 `false`，表示不支持避让；`true` 表示支持避让。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    supportAvoidance?: boolean;
}
/**
 * 设置图片的偏移位置和图片样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorImageSpanOptions {
    /**
     * 添加图片的位置。省略时，添加到所有内容的末尾。
     * 
     * 当值小于0时，设置在所有内容最前面；当值大于所有内容长度时，设置在所有内容最后面。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
    /**
     * 图片样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageStyle?: RichEditorImageSpanStyle;
    /**
     * 行为触发回调。省略时，仅使用系统默认行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    gesture?: RichEditorGesture;
    /**
     * 鼠标悬停触发回调。省略时，不执行相关行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onHover?: OnHoverCallback;
}
/**
 * 设置builder的偏移位置和样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorBuilderSpanOptions {
    /**
     * 添加builder的位置。省略或者为异常值时，添加到所有内容的最后。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
    /**
     * 添加builder单独拖拽时的背板背景颜色。不配置或者异常值时，颜色按系统默认配置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    dragBackgroundColor?: ColorMetrics;
    /**
     * 添加builder单独拖拽时是否需要投影。不配置或者异常值时，默认需要投影。true表示需要投影，false表示不需要投影。<br/>
     * 默认值： true
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    isDragShadowNeeded?: boolean;

    /**
     * 无障碍朗读功能属性。缺省时，取
     * [AccessibilitySpanOptions]{@link ./../../@internal/component/ets/text_common:AccessibilitySpanOptions}的默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    accessibilitySpanOptions?: AccessibilitySpanOptions;
}
/**
 * 设置提示文本的字体样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PlaceholderStyle {
    /**
     * 设置placeholder文本样式。
     * 
     * 默认值遵循主题设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
    /**
     * 设置placeholder文本颜色。
     * 
     * 默认值遵循主题设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
}
/**
 * 文本样式选项。
 * 
 * 继承自[RichEditorRange]{@link RichEditorRange}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSpanStyleOptions extends RichEditorRange {
}
/**
 * 段落样式选项。
 * 
 * 继承自[RichEditorRange]{@link RichEditorRange}。
 * 
 * > **说明：**
 * >
 * > 接口作用的范围：设定的区间所涉及的段落。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
    /**
     * 段落样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style: RichEditorParagraphStyle;
}
/**
 * 文本样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * 文本Span样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textStyle: RichEditorTextStyle;
    /**
     * url信息。
     * 
     * 默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * 图片的样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * 图片样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageStyle: RichEditorImageSpanStyle;
}
/**
 * SymbolSpan样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * 组件样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolStyle: RichEditorSymbolSpanStyle;
}
/**
 * 设置SymbolSpan组件的偏移位置和样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanOptions {
    /**
     * 添加组件的位置。省略时，添加到所有内容的最后。
     * 
     * 如果值小于0，添加到所有内容的最前面；如果值大于所有内容的长度，添加到所有内容的最后面。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
    /**
     * 组件样式信息。省略时，使用系统默认样式信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: RichEditorSymbolSpanStyle;
}
/**
 * 选中内容信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorSelection {
    /**
     * 选中范围。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selection: [
        int,
        int
    ];
    /**
     * span信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * 插入文本的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorInsertValue {
    /**
     * 插入的文本偏移位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    insertOffset: int;
    /**
     * 插入的文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    insertValue: string;
    /**
     * 插入的预上屏文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewText?: string;
}
/**
 * 删除操作和被删除内容的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorDeleteValue {
    /**
     * 删除内容的偏移位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset: int;
    /**
     * 删除操作的方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: RichEditorDeleteDirection;
    /**
     * 删除内容长度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    length: int;
    /**
     * 删除的文本或图片Span的信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * 图文变化信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorChangeValue {
    /**
     * 即将被替换内容的开始和结束索引。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rangeBefore: TextRange;
    /**
     * 替换后文本Span的具体信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    replacedSpans: Array<RichEditorTextSpanResult>;
    /**
     * 替换后ImageSpan的具体信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    replacedImageSpans: Array<RichEditorImageSpanResult>;
    /**
     * 替换后SymbolSpan的具体信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    replacedSymbolSpans: Array<RichEditorTextSpanResult>;
    /**
     * 组件内容变化的原因。<br/>**系统接口：** 此接口为系统接口。<br>
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    changeReason?: TextChangeReason;
}
/**
 * RichEditor初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorOptions {
    /**
     * 富文本控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller: RichEditorController;
}
/**
 * RichEditor初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorStyledStringOptions {
    /**
     * 富文本控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller: RichEditorStyledStringController;
}
/**
 * 菜单的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectionMenuOptions {
    /**
     * 自定义选择菜单弹出时回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: MenuOnAppearCallback;
    /**
     * 自定义选择菜单关闭时回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: VoidCallback;
    /**
     * 自定义选择菜单类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    menuType?: MenuType;
    /**
     * 自定义选择菜单显示时回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMenuShow?: MenuCallback;
    /**
     * 自定义选择菜单隐藏时回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMenuHide?: MenuCallback;
    /**
     * 预览菜单的选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewMenuOptions?: PreviewMenuOptions;
}
/**
 * 预览菜单的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PreviewMenuOptions {
    /**
     * 菜单弹出时振动效果，当ImageSpan或BuilderSpan绑定预览菜单时生效。
     * 
     * 默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。
     * 
     * **说明：** 仅当应用具备ohos.permission.VIBRATE权限，且用户启用了触感反馈时才会生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hapticFeedbackMode?: HapticFeedbackMode;
}
/**
 * RichEditor组件控制器基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RichEditorBaseController implements TextEditControllerEx {
    /**
     * 返回当前光标所在位置。
     * 
     * 当无法获取光标位置时（例如controller未与组件绑定时），该接口返回-1。
     *
     * @returns { int | undefined } 当前光标所在位置。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getCaretOffset(): int | undefined;
    /**
     * 设置光标位置。
     *
     * @param { int } offset - 光标偏移位置。超出所有内容范围时，设置失败。
     * @returns { boolean | undefined } 光标是否设置成功。<br/>true表示光标位置设置成功，false表示未成功。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setCaretOffset(offset: int): boolean | undefined;
    /**
     * 关闭自定义选择菜单或系统默认选择菜单。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    closeSelectionMenu(): void;
    /**
     * 获取用户预设的文本样式。
     *
     * @returns { RichEditorTextStyle | undefined } 用户预设样式。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTypingStyle(): RichEditorTextStyle | undefined;
    /**
     * 设置用户预设的文本样式。
     *
     * @param { RichEditorTextStyle } value - 预设样式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setTypingStyle(value: RichEditorTextStyle): void;
    /**
     * 设置用户预设的段落样式。仅在组件内容为空或组件末尾换行后，输入文本生效。
     *
     * @param { RichEditorParagraphStyle | undefined } style - 预设段落样式。<br/>取值为undefined时，与上一段落的段落样式一致。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    setTypingParagraphStyle(style: RichEditorParagraphStyle | undefined): void;
    /**
     * 支持设置组件内的内容选中，选中部分背板高亮。
     * 
     * selectionStart和selectionEnd均为-1时表示全选，均为0时可以清空选中区。
     * 
     * 未获焦时调用该接口不产生选中效果。
     * 
     * 从API version 12开始，在2in1设备中，无论options取何值，调用setSelection接口都不会弹出菜单，此外，如果组件中已经存在菜单，调用setSelection接口会关闭菜单。
     * 
     * 在非2in1设备中，options取值为MenuPolicy.DEFAULT时，遵循以下规则：
     * 
     * 1. 组件内有手柄菜单时，接口调用后不关闭菜单，并且调整菜单位置。
     * 
     * 2. 组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。
     * 
     * 3. 组件内无菜单时，接口调用后也无菜单显示。
     *
     * @param { int } selectionStart - 选中开始位置。
     * @param { int } selectionEnd - 选中结束位置。
     * @param { SelectionOptions } [options] - 选择项配置。<br/>缺省时，按照
     *     [SelectionOptions]{@link ./../../@internal/component/ets/common:SelectionOptions}中的默认值处理。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
    /**
     * 获取当前富文本的编辑状态。
     *
     * @returns { boolean | undefined } true为编辑态，false为非编辑态。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isEditing(): boolean | undefined;
    /**
     * 退出编辑态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopEditing(): void;
    /**
     * 获取布局管理器对象。
     *
     * @returns { LayoutManager | undefined } 布局管理器对象。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getLayoutManager(): LayoutManager | undefined;
    /**
     * 获取预上屏信息。
     *
     * @returns { PreviewText | undefined } 预上屏信息。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPreviewText(): PreviewText | undefined;
    /**
     * 返回当前光标与RichEditor组件的相对位置。如果光标不闪烁，返回undefined。
     *
     * @returns { RectResult | undefined } 当前光标与RichEditor的相对位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getCaretRect(): RectResult | undefined;

    /**
     * 将可视区外的文本滚动到可视区内。
     *
     * @param { TextRange } [range] - 可视范围。
     *     如果参数无效，该方法将不产生效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 26.0.0 static
     */
    scrollToVisible(range?: TextRange): void;

    /**
     * 提供删除字符能力。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。
     * 
     * 该接口不支持预上屏场景使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteBackward(): void;

    /**
     * 设置无输入时的属性字符串样式的提示文本。
     *
     * @param { StyledString } styledString - 设置属性字符串样式的提示文本，其优先级高于[placeholder]{@link RichEditorAttribute.placeholder}属
     *     性设置的提示文本。<br>提示文本不支持触发属性字符串[GestureStyle]{@link ./../../@internal/component/ets/styled_string:GestureStyle}样式
     *     绑定的手势事件，以及[UrlStyle]{@link ./../../@internal/component/ets/styled_string:UrlStyle}样式的超链接跳转能力。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    setStyledPlaceholder(styledString: StyledString): void;
}
/**
 * RichEditor组件的控制器，继承自[RichEditorBaseController]{@link RichEditorBaseController}。
 * 
 * > **说明：**
 * >
 * > 当内容的长度超过组件显示区域的高度时，调用插入接口（例如[addTextSpan]{@link RichEditorController.addTextSpan}、
 * > [addImageSpan]{@link RichEditorController.addImageSpan}、[addBuilderSpan]{@link RichEditorController.addBuilderSpan}
 * > 、[addSymbolSpan]{@link RichEditorController.addSymbolSpan}），组件会自动滚动内容使得插入内容末尾可见。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RichEditorController extends RichEditorBaseController {
    /**
     * 添加文本内容，如果组件光标闪烁，插入后光标位置更新为新插入文本的后面。
     *
     * @param { ResourceStr } content - 文本内容。 <br>从API version 20开始，支持Resource类型。
     * @param { RichEditorTextSpanOptions } [options] - 文本选项。<br/>缺省时，按照
     *     [RichEditorTextSpanOptions]{@link RichEditorTextSpanOptions}中的默认值生效。
     * @returns { int | undefined } 添加完成的TextSpan所在的位置。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): int | undefined;
    /**
     * 添加图片内容，如果组件光标闪烁，插入后光标位置更新为新插入图片的后面。
     * 
     * 该接口为同步接口，在弱网环境下，直接添加网络图片可能会阻塞UI线程造成冻屏问题。不建议直接添加网络图片。
     *
     * @param { PixelMap | ResourceStr } value - 图片内容。
     * @param { RichEditorImageSpanOptions } [options] - 图片选项。<br/>缺省时，按照
     *     [RichEditorImageSpanOptions]{@link RichEditorImageSpanOptions}中的默认值生效。
     * @returns { int | undefined } 添加完成的ImageSpan所在的位置。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): int | undefined;
    /**
     * 添加用户自定义布局Span。
     * 
     * > **说明：**
     * >
     * > - RichEditor组件添加占位Span，占位Span调用系统的measure方法计算真实的长宽和位置。
     * >
     * > - 可通过[RichEditorBuilderSpanOptions]{@link RichEditorBuilderSpanOptions}设置此builder在RichEditor中的index（一个文字为一个单位）。
     * > 
     * >
     * > - 此占位Span不可获焦，支持拖拽，支持部分通用属性，占位、删除等能力等同于ImageSpan，长度视为一个文字。
     * >
     * > - 支持通过[bindSelectionMenu]{@link RichEditorAttribute.bindSelectionMenu}设置自定义菜单。
     * >
     * > - 不支持通过[getSpans]{@link RichEditorController.getSpans}，[getSelection]{@link RichEditorController.getSelection}，
     * > [onSelect]{@link RichEditorAttribute.onSelect}，[aboutToDelete]{@link RichEditorAttribute.aboutToDelete}获取
     * > builderSpan信息。
     * >
     * > - 不支持通过[updateSpanStyle]{@link RichEditorController.updateSpanStyle}，
     * > [updateParagraphStyle]{@link RichEditorController.updateParagraphStyle}等方式更新builder。
     * >
     * > - 对此builder节点进行复制或粘贴不生效。
     * >
     * > - builder的布局约束由RichEditor传入，如果builder里最外层组件不设置大小，则会用RichEditor的大小作为maxSize。
     * >
     * > - builder的手势相关事件机制与通用手势事件相同，如果builder中未设置透传，则仅有builder中的子组件响应。
     * >
     * > - 如果组件光标闪烁，插入后光标位置更新为新插入builder的后面。
     * 
     * 通用属性仅支持[size](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#size)、
     * [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)、
     * [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin)、
     * [aspectRatio](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-layout-constraints.md#aspectratio)、
     * [borderStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderstyle)、
     * [borderWidth](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderwidth)、
     * [borderColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#bordercolor)、
     * [borderRadius](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderradius)、
     * [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、
     * [backgroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)
     * 、[opacity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-opacity.md#opacity)、
     * [blur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#blur)、
     * [backdropBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backdropblur)、
     * [shadow](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#shadow)、
     * [grayscale](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#grayscale)、
     * [brightness](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#brightness)、
     * [saturate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#saturate)、
     * [contrast](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#contrast)、
     * [invert](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#invert)、
     * [sepia](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sepia)、
     * [hueRotate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#huerotate)、
     * [colorBlend](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#colorblend)、
     * [linearGradientBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lineargradientblur12)
     * 、[clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)、
     * [mask](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#mask12)、
     * [foregroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyle)
     * 、
     * [accessibilityGroup](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitygroup)
     * 、
     * [accessibilityText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext)
     * 、
     * [accessibilityDescription](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription)
     * 、
     * [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
     * 、
     * [sphericalEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sphericaleffect12)
     * 、[lightUpEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lightupeffect12)
     * 、
     * [pixelStretchEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#pixelstretcheffect12)
     * 。
     *
     * @param { CustomBuilder } value - 自定义组件。
     * @param { RichEditorBuilderSpanOptions } [options] - builder选项。<br/>缺省时，按照
     *     [RichEditorBuilderSpanOptions]{@link RichEditorBuilderSpanOptions}中的默认值生效。
     * @returns { int | undefined } 添加完成的builderSpan所在的位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): int | undefined;
    /**
     * 在Richeditor中添加SymbolSpan，如果组件光标闪烁，插入后光标位置更新为新插入Symbol的后面。
     * 
     * 暂不支持手势、复制、拖拽处理。
     *
     * @param { Resource } value - 组件内容。
     * @param { RichEditorSymbolSpanOptions } [options] - 组件选项。<br/>缺省时，按照
     *     [RichEditorSymbolSpanOptions]{@link RichEditorSymbolSpanOptions}中的默认值生效。
     * @returns { int | undefined } 添加完成的SymbolSpan所在的位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions): int | undefined;
    /**
     * 更新文本、图片或SymbolSpan样式。
     * 
     * 若只更新了一个Span的部分内容，则会根据更新部分、未更新部分将该Span拆分为多个Span。
     * 
     * 使用该接口更新文本、图片或SymbolSpan样式时默认不会关闭自定义文本选择菜单。
     *
     * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
     *     RichEditorUpdateSymbolSpanStyleOptions } value - 文本、图片或SymbolSpan的样式选项信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
        RichEditorUpdateSymbolSpanStyleOptions): void;
    /**
     * 更新段落的样式。
     *
     * @param { RichEditorParagraphStyleOptions } value - 段落的样式选项信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;
    /**
     * 删除指定范围内的文本和图片。
     *
     * @param { RichEditorRange } [value] - 删除范围。省略时，删除所有文本和图片。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteSpans(value?: RichEditorRange): void;
    /**
     * 获取span信息。
     *
     * @param { RichEditorRange } [value] - 需要获取span范围。<br/>缺省时，获取所有span信息。
     * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> | undefined } 文本和图片Span信息。<br/>返回undefined
     *     时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult> | undefined;
    /**
     * 获取指定范围的段落。
     *
     * @param { RichEditorRange } [value] - 需要获取段落的范围。<br/>缺省时，获取所有段落信息。
     * @returns { Array<RichEditorParagraphResult> | undefined } 选中段落的信息。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult> | undefined;
    /**
     * 获取选中内容。未选中时，返回光标所在span信息。
     *
     * @returns { RichEditorSelection | undefined } 选中内容信息。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSelection(): RichEditorSelection | undefined;
    /**
     * 将属性字符串转换为span信息。
     *
     * @param { StyledString } value - 转换前的属性字符串。
     * @returns { Array<RichEditorSpan> | undefined } 文本和图片Span信息。<br/>返回undefined时表示controller未与组件绑定。
     * @throws { BusinessError } 401 - 参数检查失败。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fromStyledString(value: StyledString): Array<RichEditorSpan> | undefined;
    /**
     * 将给定范围的组件内容转换成属性字符串。
     *
     * @param { RichEditorRange } value - 需要获取的范围。
     * @returns { StyledString | undefined } 转换后的属性字符串。<br/>返回undefined时表示controller未与组件绑定。
     * @throws { BusinessError } 401 - 参数检查失败。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    toStyledString(value: RichEditorRange): StyledString | undefined;
}
/**
 * RichEditor span信息。
 *
 * @unionmember { RichEditorImageSpanResult } 后端返回的图片信息。
 * @unionmember { RichEditorTextSpanResult } 后端返回的文本信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */

export type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;
/**
 * # 导入对象
 * 
 * ```ts
 * controller: RichEditorStyledStringController = new RichEditorStyledStringController()；
 * ```
 */
/**
 * 使用属性字符串构建的RichEditor组件的控制器，继承自[RichEditorBaseController]{@link RichEditorBaseController}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RichEditorStyledStringController extends RichEditorBaseController
    implements StyledStringController {
    /**
     * 设置富文本组件显示的属性字符串。
     *
     * @param { StyledString } styledString - 属性字符串。<br/>**说明：** <br/>StyledString的子类
     *     [MutableStyledString]{@link ./../../@internal/component/ets/styled_string:MutableStyledString}也可以作为入参值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setStyledString(styledString: StyledString): void;
    /**
     * 获取富文本组件显示的属性字符串。
     *
     * @returns { MutableStyledString | undefined } 富文本组件显示的属性字符串。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getStyledString(): MutableStyledString | undefined;
    /**
     * 获取富文本当前的选中区域范围。
     *
     * @returns { RichEditorRange | undefined } 选中区域范围。<br/>返回undefined时表示controller未与组件绑定。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSelection(): RichEditorRange | undefined;
    /**
     * 注册文本内容变化回调，该回调会在后端程序导致文本内容变更时触发。
     *
     * @param { StyledStringChangedListener } listener - 文本内容变化回调监听器。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onContentChanged(listener: StyledStringChangedListener): void;
}
/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 * 
 * > **说明：**
 * >
 * > - align属性只支持上方、中间和下方位置的对齐方式。
 * >
 * > - 不支持[borderImage](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border-image.md#borderimage)属性。
 * >
 * > - 组件水平方向默认padding为16vp，竖直方向默认padding为8vp。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RichEditorAttribute extends CommonMethod {
    /**
     * 富文本组件初始化完成后触发回调。
     *
     * @param { VoidCallback | undefined } callback - 订阅富文本组件初始化完成的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onReady(callback: VoidCallback | undefined): this;
    /**
     * 鼠标左键双击选中内容触发回调；松开鼠标左键再次触发回调。
     * 
     * 手指长按选中内容触发回调；松开手指再次触发回调。
     * 
     * 通过手指或鼠标连续修改选中区、三击选段场景，不回调onSelect。
     * 
     * 需要实时感知选中区变化的场景和使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件，请使用
     * onSelectionChange接口。
     *
     * @param { Callback<RichEditorSelection> | undefined } callback - [RichEditorSelection]{@link RichEditorSelection}为
     *     选中的所有span信息。<br/>选择时触发的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSelect(callback: Callback<RichEditorSelection> | undefined): this;
    /**
     * 内容选择区域或编辑状态下的光标位置发生变化时，将触发该回调。光标位置变化时，回调中选择区域的起始和终止位置相等。
     *
     * @param { Callback<RichEditorRange> | undefined } callback - [RichEditorRange]{@link RichEditorRange}为所有内容的选择区域起始和
     *     终止位置。<br/>订阅文本选择区域发生变化或编辑状态下光标位置发生变化时触发的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSelectionChange(callback: Callback<RichEditorRange> | undefined): this;
    /**
     * 输入法输入内容前触发回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     *
     * @param { Callback<RichEditorInsertValue, boolean> | undefined } callback -
     *     [RichEditorInsertValue]{@link RichEditorInsertValue}为输入法将要输入内容信息。<br/>true:组件执行添加内容操作。<br/>false:组件不执行添加内容操作。
     *     <br/>输入法输入内容前的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean> | undefined): this;
    /**
     * 输入法输入完成后，触发回调。
     * 
     * 该接口仅支持返回一个文本span的信息，当编辑操作涉及返回多个文本span信息时，建议使用[onDidIMEInput]{@link RichEditorAttribute.onDidIMEInput}接口。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     *
     * @param { Callback<RichEditorTextSpanResult> | undefined } callback -
     *     [RichEditorTextSpanResult]{@link RichEditorTextSpanResult}为输入法完成输入后的文本Span信息。<br/>输入法完成输入后的回调。<br/>取值为
     *     undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onIMEInputComplete(callback: Callback<RichEditorTextSpanResult> | undefined): this;
    /**
     * 输入法输入完成后，触发回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     *
     * @param { Callback<TextRange> | undefined } callback - TextRange为输入法本次输入内容的范围。<br/>输入法完成输入时的回调。<br/>取值为undefined时，
     *     无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDidIMEInput(callback: Callback<TextRange> | undefined): this;
    /**
     * 输入法删除内容前，触发回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     *
     * @param { Callback<RichEditorDeleteValue, boolean> | undefined } callback -
     *     [RichEditorDeleteValue]{@link RichEditorDeleteValue}为准备删除的内容所在的文本或者图片Span信息。<br/>true:组件执行删除操作。<br/>false:组件不
     *     执行删除操作。<br/>输入法删除内容前的回调，英文预上屏点击候选词时会执行该回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean> | undefined): this;
    /**
     * 输入法删除内容后，触发回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     *
     * @param { VoidCallback | undefined } callback - 订阅输入法完成删除内容的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDeleteComplete(callback: VoidCallback | undefined): this;
    /**
     * 设置组件是否支持文本内容可复制粘贴。
     * 
     * 从API version 20开始，RichEditor组件在执行复制或剪切操作时，会将HTML格式的内容添加到剪贴板中。
     * 
     * - 仅支持TextSpan和ImageSpan向剪贴板中添加HTML内容，其他Span类型（如BuilderSpan、SymbolSpan、CustomSpan）则不能添加。
     * - 设置RichEditor组件的属性字符串时，请参考属性字符串[toHtml]{@link ./../../@internal/component/ets/styled_string:StyledString.toHtml}
     * 接口文档，以了解支持转换为HTML的范围。
     * 
     * copyOptions不为CopyOptions.None时，长按组件内容，会弹出文本选择菜单。如果通过bindSelectionMenu等方式自定义文本选择菜单，则会弹出自定义的菜单。
     * 
     * 设置copyOptions为CopyOptions.None时，禁用复制、剪切、翻译、分享、搜索、帮写功能，且不支持拖拽操作。
     *
     * @param { CopyOptions | undefined } value - 组件支持文本内容是否可复制粘贴。<br/>取值为undefined时，按照默认值处理。<br/>默认值：
     *     CopyOptions.LocalDevice
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default copyOptions(value: CopyOptions | undefined): this;
    /**
     * 设置自定义选择菜单。自定义菜单超长时，建议内部嵌套[Scroll]{@link ./../../@internal/component/ets/scroll}组件使用，避免键盘被遮挡。
     *
     * @param { RichEditorSpanType | undefined } spanType - 菜单的类型。<br/>取值为undefined时，按照默认值处理。<br/>默认值：<br/>
     *     RichEditorSpanType.TEXT
     * @param { CustomBuilder | undefined } content - 菜单的内容。<br/>取值为undefined时，取消绑定该种类型的选择菜单。
     * @param { ResponseType | RichEditorResponseType | undefined } responseType - 菜单的响应类型。<br/>取值为undefined时，按照默认值处理。<
     *     br/> 默认值：<br/>ResponseType.LongPress
     * @param { SelectionMenuOptions | undefined } [options] - 菜单的选项。<br/>取值为undefined或缺省时，按照
     *     [SelectionMenuOptions]{@link SelectionMenuOptions}中的默认值处理。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindSelectionMenu(spanType: RichEditorSpanType | undefined, content: CustomBuilder | undefined,
        responseType: ResponseType | RichEditorResponseType | undefined,
        options?: SelectionMenuOptions | undefined): this;
    /**
     * 设置自定义键盘。
     * 
     * 当设置自定义键盘时，输入框激活后不会打开系统输入法，而是加载指定的自定义组件。
     * 
     * 自定义键盘的高度可以通过自定义组件根节点的height属性设置，宽度不可设置，使用系统默认值。
     * 
     * 自定义键盘无法获取焦点，但是会拦截手势事件。
     * 
     * 默认在输入控件失去焦点时，关闭自定义键盘。
     * 
     * 自定义键盘支持接续功能，使用
     * [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)
     * 接口，可以设置自定义键盘之间切换时是否接续。
     * 
     * > **说明：**
     * >
     * > 从API version 23开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { CustomBuilder | ComponentContentBase | undefined } value - 自定义键盘。<br>传入undefined时默认使用系统键盘。
     * @param { KeyboardOptions | undefined } [options] - 设置自定义键盘是否支持避让功能。 <br>传入undefined或缺省时默认不支持避让。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined,
                           options?: KeyboardOptions | undefined): this;
    /**
     * 粘贴时，触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的粘贴。
     *
     * @param { PasteEventCallback | undefined } callback - 订阅粘贴时的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPaste(callback: PasteEventCallback | undefined): this;
    /**
     * 设置是否进行文本特殊实体识别。
     * 
     * 该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
     * 
     * 当enableDataDetector设置为true且未指定[dataDetectorConfig]{@link RichEditorAttribute.dataDetectorConfig}属性时，系统将默认识别所有类型的实
     * 体，并将这些实体的color和decoration更改为预设样式：
     * 
     * 触摸点击或鼠标右键点击实体时，会根据实体类型弹出对应的实体操作菜单，鼠标左键点击实体会直接响应菜单的第一个选项。
     * 
     * 对addBuilderSpan的节点文本，该功能不会生效。
     * 
     * 当copyOptions设置为CopyOptions.None时，点击实体弹出的菜单没有选择文本和复制功能。
     * 
     * <!--RP1--><!--RP1End-->
     *
     * @param { boolean | undefined } enable - 使能文本识别。<br/>true表示使能文本特殊实体识别，false表示不使能文本特殊实体识别。<br/>取值为undefined时，按照默认值处
     *     理。<br/>默认值： false
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableDataDetector(enable: boolean | undefined): this;
    /**
     * 设置是否开启预上屏功能。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { boolean | undefined } enable - 使能预上屏功能。<br/>true表示开启，false表示不开启。<br/>取值为undefined时，按照默认值处理。<br/>默认值：
     *     true
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enablePreviewText(enable: boolean | undefined): this;
    /**
     * 设置文本识别配置。
     * 
     * 需配合[enableDataDetector]{@link RichEditorAttribute.enableDataDetector}一起使用，设置enableDataDetector为true时，
     * dataDetectorConfig的配置才能生效。
     * 
     * 当有两个实体A、B重叠时，按以下规则保留实体：
     * 
     * 1.&nbsp;若A&nbsp;⊂&nbsp;B，则保留B，反之则保留A。
     * 
     * 2.&nbsp;当A&nbsp;⊄&nbsp;B且B&nbsp;⊄&nbsp;A时，若A.start&nbsp;<&nbsp;B.start，则保留A，反之则保留B。
     *
     * @param { TextDataDetectorConfig | undefined } config - 文本识别配置。<br/>取值为undefined时，按照
     *     [TextDataDetectorConfig]{@link ./../../@internal/component/ets/text_common:TextDataDetectorConfig}中的默认值处理。
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dataDetectorConfig(config: TextDataDetectorConfig | undefined): this;
    /**
     * 设置是否启用文本选择的AI菜单功能。启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。
     * 
     * AI菜单功能启用时，在组件中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括
     * [TextMenuItemId]{@link ./../../@internal/component/ets/text_common:TextMenuItemId}中的url（打开连接）、email（新建邮件）、
     * phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。
     * 
     * AI菜单生效时，选中范围内需包括且仅包括一个完整的AI实体，才能展示对应的选项。该菜单项与
     * [TextMenuItemId]{@link ./../../@internal/component/ets/text_common:TextMenuItemId}中的askAI菜单项不同时出现。
     * 
     * 本功能仅在[copyOptions]{@link RichEditorAttribute.copyOptions}为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时生效。
     * 
     * 该接口依赖设备底层具有文本识别能力，否则设置不会生效。
     *
     * @param { boolean | undefined } enable - 是否启用选择文本识别。<br/>true表示启用选择文本识别；false表示不启用选择文本识别。<br/>传入undefined或null时属性重
     *     置为启用选择文本识别。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default enableSelectedDataDetector(enable: boolean | undefined): this;
    /**
     * 设置无输入时的提示文本。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { ResourceStr | undefined } value - 无输入时的提示文本。<br/>取值为undefined时，无提示文本。
     * @param { PlaceholderStyle | undefined } [style] - 提示文本的字体样式。<br/>取值为undefined或缺省时默认跟随主题。
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default placeholder(value: ResourceStr | undefined, style?: PlaceholderStyle | undefined): this;
    /**
     * 设置输入框光标、手柄颜色。
     *
     * @param { ResourceColor | undefined } value - 输入框光标、手柄颜色。<br/>取值为undefined时，按照默认值处理。<br/>默认值：'#007DFF'
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default caretColor(value: ResourceColor | undefined): this;
    /**
     * 设置文本选中的底板颜色。如果未设置不透明度，默认为20%不透明度。
     *
     * @param { ResourceColor | undefined } value - 文本选中的底板颜色。<br/>取值为undefined时，按照默认值处理。<br/>默认值：'#33FFFFFF'
     * @returns { RichEditorAttribute } 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * 组件内容的编辑状态发生变化时触发该回调函数。
     *
     * @param { Callback<boolean> | undefined } callback - true表示编辑态，false表示非编辑态。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute } returns 富文本编辑器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onEditingChange(callback: Callback<boolean> | undefined): this;
    /**
     * 设置软键盘输入法回车键类型。
     *
     * @param { EnterKeyType | undefined } value - 软键盘输入法回车键类型。<br/>取值为undefined时，按照默认值处理。<br/>默认为EnterKeyType.NEW_LINE。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * 按下软键盘输入法回车键时触发该回调。
     *
     * @param { SubmitCallback | undefined } callback - 订阅事件的回调。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSubmit(callback: SubmitCallback | undefined): this;
    /**
     * 在组件执行增删操作前，触发回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { Callback<RichEditorChangeValue, boolean> | undefined } callback - 文本内容即将变化时触发的函数。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onWillChange(callback: Callback<RichEditorChangeValue, boolean> | undefined): this;
    /**
     * 在组件执行增删操作后，触发回调。如果文本实际未发生增删，则不触发该回调。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { OnDidChangeCallback | undefined } callback - 内容变化后触发的函数。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDidChange(callback: OnDidChangeCallback | undefined): this;
    /**
     * 剪切时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的剪切。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件，默认支持图文的剪切。
     *
     * @param { Callback<CutEvent> | undefined } callback - 剪切事件前调用。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onCut(callback: Callback<CutEvent> | undefined): this;
    /**
     * 复制时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的复制。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件，默认支持图文的复制。
     *
     * @param { Callback<CopyEvent> | undefined } callback - 定义用户复制事件。<br/>取值为undefined时，无回调。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onCopy(callback: Callback<CopyEvent> | undefined): this;
    /**
     * 在组件绑定输入法前，触发回调。使用callback异步回调。
     * 
     * 调用[IMEClient]{@link ./../../@internal/component/ets/text_common:IMEClient}的
     * [setExtraConfig]{@link ./../../@internal/component/ets/text_common:IMEClient.setExtraConfig}方法设置输入法扩展信息。在绑定输入法成功后
     * ，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。
     *
     * @param { Callback<IMEClient> | undefined } callback - 在组件绑定输入法前触发的回调。<br>值为undefined时清除已绑定的回调事件。<br/>取值为undefined
     *     时，无回调。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;
    /**
     * 设置系统默认菜单的扩展项，允许配置扩展项的文本内容、图标和回调方法。
     * 
     * 调用
     * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
     * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
     * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法
     * [onCreateMenu]{@link ./../../@internal/component/ets/text_common:EditMenuOptions.onCreateMenu}的入参列表中不包含被屏蔽的菜单选项。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { EditMenuOptions | undefined } editMenu - 扩展菜单选项。<br/>取值为undefined时，按照
     *     [EditMenuOptions]{@link ./../../@internal/component/ets/text_common:EditMenuOptions}中的默认值处理。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * 设置RichEditor通过点击以外的方式获焦时，是否主动拉起软键盘。
     *
     * @param { boolean | undefined } isEnabled - 通过点击以外的方式获焦时，是否主动拉起软键盘。<br/>true表示主动拉起软键盘，false表示不主动拉起软键盘。<br/>取值为
     *     undefined时，按照默认值处理。<br/>默认值： true
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableKeyboardOnFocus(isEnabled: boolean | undefined): this;
    /**
     * 设置RichEditor是否支持触感反馈。
     * 
     * > **说明：**
     * >
     * > 从API version 20开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { boolean | undefined } isEnabled - 是否支持触控反馈。<br/>true表示开启触控反馈，false表示不开启触控反馈。<br/>取值为undefined时，按照默认值处理。<
     *     br/>默认值：true。<br/>设置为true后是否生效，还取决于系统的硬件是否支持。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableHapticFeedback(isEnabled: boolean | undefined): this;
    /**
     * 设置RichEditor滚动条的显示模式。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
     * @param { BarState | undefined } state - 输入框滚动条的显示模式。<br/>取值为undefined时，按照默认值处理。<br/>默认值：BarState.Auto
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default barState(state: BarState | undefined): this;
    /**
     * 设置组件内容的最大长度。当内容（包含文本、图片、Symbol和Builder）的总长度达到此值时，将无法继续添加内容。
     *
     * @param { int | undefined } maxLength - 文本的最大输入字符数。<br/>默认值：Infinity，可以无限输入，支持undefined类型。<br/>**说明：** <br/>当不设置该属
     *     性或设置为undefined或设置异常值时，取默认值，设置小数时，取整数部分。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default maxLength(maxLength: int | undefined): this;
    /**
     * 设置富文本可显示的最大行数。maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。同时设置组件高度和最大行数，组件高度优先生效。
     *
     * @param { int | undefined } maxLines - 设置富文本可显示的最大行数。<br/>maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。<br/>同时设置组件高度和最大行数
     *     ，组件高度优先生效。<br/>取值为undefined时，按照默认值处理。<br/>默认值：Infinity，可以无限输入。 <br/>取值范围：(0, +∞)
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default maxLines(maxLines: int | undefined): this;
    /**
     * 设置是否开启中文与西文的自动间距。
     *
     * @param { boolean | undefined } enable - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br/>取值为undefined时，按照默认值处理。<br
     *     />默认值：false
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default enableAutoSpacing(enable: boolean | undefined): this;
    /**
     * 设置键盘外观。
     *
     * @param { KeyboardAppearance | undefined } appearance - 键盘外观。<br/>取值为undefined时，按照默认值处理。<br/>默认值：
     *     KeyboardAppearance.NONE_IMMERSIVE
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    /**
     * 设置撤销还原时是否保留原内容的样式。
     * 
     * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建RichEditor组件时，撤销还原时默认保留原内容样式，不受该接口设置的属性影响
     * 。
     *
     * @param { UndoStyle | undefined } style - 撤销还原是否保留原样式选项。取值为undefined时，按照UndoStyle.CLEAR_STYLE处理，撤销还原内容不保留原样式。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default undoStyle(style: UndoStyle | undefined): this;
    /**
     * 设置组件滚动条颜色。
     *
     * @param { ColorMetrics | undefined } color - 设置组件滚动条颜色。<br />默认值：'#66182431'，显示为灰色。<br />**说明：** 设置为undefined或设置异常
     *     值时，按默认值处理。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default scrollBarColor(color: ColorMetrics | undefined): this;
    /**
     * 设置是否阻止返回键传递。
     *
     * @param { boolean | undefined } isStopped - 是否阻止返回键。<br/>默认值：true，true表示阻止返回键，false表示不阻止返回键。<br/>**说明：** <br/>当不设置
     *     该属性或设置为undefined或设置异常值时，取默认值。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stopBackPress(isStopped: boolean | undefined): this;

    /**
     * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
     *
     * @param { boolean | undefined } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。<br/>设置为
     *     undefined时，首行和尾行不增加间距。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default includeFontPadding(include: boolean | undefined): this;

    /**
     * 针对多行文字叠加，支持行高基于文字实际高度自适应。不通过该接口设置，默认行高不基于文字实际高度自适应。
     * 
     * 该接口依赖[RichEditorTextStyle]{@link RichEditorTextStyleResult}的lineHeight属性。当lineHeight设置值小于当前字号下文本渲染出的实际高度时，
     * fallbackLineSpacing属性将生效。
     *
     * @param { boolean | undefined } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。<br/>设置为
     *     undefined时，行高不基于文字实际高度自适应。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fallbackLineSpacing(enabled: boolean | undefined): this;
    /**
     * 设置是否启用单行模式。未通过该接口设置时，默认不启用单行模式。
     * 
     * > **说明：**
     * >
     * > 单行模式不显示滚动条。
     * >
     * > 单行模式下换行符会显示为空格。
     *
     * @param { boolean | undefined } isEnable - 是否启用单行模式。<br/>true表示启用单行模式；false表示不启用单行模式。<br/>设置为undefined或null时，按照
     *     false处理，不启用单行模式。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default singleLine(isEnable: boolean | undefined): this;
    /**
     * 设置是否开启行首标点符号压缩。
     * 
     * > **说明：**
     * >
     * > 行首标点符号默认不压缩。
     * >
     * > 支持压缩的标点符号，请参考[ParagraphStyle]{@link ./../../@ohos.graphics.text:text.ParagraphStyle}的行首压缩的标点范围。
     *
     * @param { boolean | undefined } enabled - 是否开启行首标点符号压缩。<br/>true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。<br/>设置为undefined时
     *     ，不开启行首标点符号压缩。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default compressLeadingPunctuation(enabled: boolean | undefined): this;
    /**
     * 设置属性修改器。
     *
     * @param { AttributeModifier<RichEditorAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */    
    default attributeModifier(modifier: AttributeModifier<RichEditorAttribute> | AttributeModifier<CommonMethod> |
        undefined): this;

    /**
     * 设置 RichEditor 选项。
     *
     * @param { RichEditorOptions | RichEditorStyledStringOptions } options - RichEditor 构造函数选项。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setRichEditorOptions(options: RichEditorOptions | RichEditorStyledStringOptions): this;

    /**
     * 设置拖动预览样式。
     *
     * @param { SelectedDragPreviewStyle | undefined } value - 拖动预览样式。如果设置为undefined，样式将被重置。
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;
    /**
     * 设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。
     * 
     * 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在
     * [RichEditorParagraphStyle]{@link RichEditorParagraphStyle}的wordBreak属性为非BREAK_ALL并且待排版文本首个
     * [TextStyle]{@link ./../../@ohos.graphics.text:text.TextStyle}的
     * [locale]{@link ./../../@ohos.graphics.text:text.TextStyle}为“zh-Hans”或“zh-Hant”时生效。
     *
     * @param { boolean | undefined } enabled - 段落最后一行是否使能孤字优化。<br/>true表示使能孤字优化，false表示不使能孤字优化。设置为undefined或null时，不使能孤字
     *     优化。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 26.0.0 static
     */
    default orphanCharOptimization(enabled: boolean | undefined): this;
    /**
     * 设置当文本宽度超过内容区宽度时是否启用水平滚动。不通过该接口设置，默认禁用水平滚动。
     *
     * @param { boolean | undefined } enabled - 是否启用水平滚动。<br/>true表示启用水平滚动，false表示禁用水平滚动，文本将自动换行。设置为undefined或null时，不启用水
     *     平滚动。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default horizontalScrolling(enabled: boolean | undefined): this;
    /**
     * 设置是否启用行尾标点符号悬挂。不通过该接口设置，默认标点符号不悬挂。
     *
     * @param { boolean | undefined } enabled - 是否启用行尾标点符号悬挂。<br/>true表示启用行尾标点符号悬挂，false表示不启用行尾标点符号悬挂。设置为undefined或null时
     *     ，不启用标点符号悬挂。
     * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default punctuationOverflow(enabled: boolean | undefined): this;
}
/**
 * 定义用户剪切事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CutEvent {
    /**
     * 阻止系统默认剪切事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * 定义用户复制事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CopyEvent {
    /**
     * 阻止组件的默认复制操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * Url信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RichEditorUrlStyle {
    /**
     * url地址。
     * 
     * 默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    url?: ResourceStr;
}
/**
 * 软键盘按下回车键时的回调事件。
 *
 * @param { EnterKeyType } enterKey - 软键盘输入法回车键类型。具体类型见EnterKeyType枚举说明。
 * @param { SubmitEvent } event - 当提交的时候，提供保持组件编辑状态的方法。EnterKeyType指定为NEW_LINE时，默认保持编辑态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
/**
 * 自定义选择菜单弹出时触发的回调事件。
 *
 * @param { int } start - 选中内容的起始位置。
 * @param { int } end - 选中内容的终止位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type MenuOnAppearCallback = (start: int, end: int) => void;
/**
 * 自定义选择菜单显示或隐藏时触发的回调事件。
 *
 * @param { int } start - 选中内容的起始位置。
 * @param { int } end - 选中内容的终止位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type MenuCallback = (start: int, end: int) => void;
/**
 * 粘贴完成前，触发回调。
 *
 * @param { PasteEvent } [event] - 定义用户粘贴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PasteEventCallback = (event?: PasteEvent) => void;
/**
 * 鼠标悬浮触发回调。
 *
 * @param { boolean } status - 表示鼠标是否悬浮在组件上，鼠标进入组件时为true，离开组件时为false。
 * @param { HoverEvent } event - 设置悬浮事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * 创建富文本组件。
 *
 * @param { RichEditorOptions | RichEditorStyledStringOptions } options
 * @returns { RichEditorAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RichEditor(
    options: RichEditorOptions | RichEditorStyledStringOptions, 
): RichEditorAttribute

/**
 * 创建富文本组件。
 *
 * @param { CustomBuilderT<RichEditorAttribute> } style - RichEditor attribute instance
 * @returns { RichEditorAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function RichEditor(
    style: CustomBuilderT<RichEditorAttribute>,
): RichEditorAttribute;