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
 * @file
 * @kit ArkUI
 */
 
/**
 * # 子组件
 * 
 * 不包含子组件。
 */

/**
 * 删除方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorDeleteDirection {
  /**
   * 向后删除。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKWARD,

  /**
   * 向前删除。
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
 * Span类型信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RichEditorSpanType {
  /**
   * Span类型为文字。 
   * 
   *  
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXT = 0,

  /**
   * Span类型为图像。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  IMAGE = 1,

  /**
   * Span类型为图文混合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIXED = 2,

  /**
   * Span类型为BuilderSpan。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BUILDER = 3,

  /**
   * 注册此类型的菜单，但未注册TEXT、IMAGE、MIXED、BUILDER菜单时，文字类型、图像类型、图文混合类型、BuilderSpan类型都会触发并显示此类型对应的菜单。
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
 * 撤销还原是否保留原样式选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum UndoStyle {
  /**
   * 撤销还原内容不保留原样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CLEAR_STYLE = 0,

  /**
   * 撤销还原内容保留原样式。
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
 * 菜单的响应类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum RichEditorResponseType {
  /**
   * 通过鼠标右键触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RIGHT_CLICK = 0,

  /**
   * 通过长按触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LONG_PRESS = 1,

  /**
   * 通过鼠标选中触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SELECT = 2,

  /**
   * 注册此响应类型的菜单，但未注册RIGHT_CLICK、LONG_PRESS、SELECT响应类型的菜单时，通过鼠标右键、长按、鼠标选中都会触发菜单弹出。
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
 * Span位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSpanPosition {
  /**
   * Span索引值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanIndex: number;

  /**
   * Span内容在RichEditor内的起始和结束位置。
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
 * 文本样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextStyle {
  /**
   * 文本颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * 字体大小，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize?: Length | number;

  /**
   * 字体样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * 字体粗细。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * 字体列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily?: ResourceStr;

  /**
   * 设置文本装饰线的样式、颜色和粗细。
   * 
   * type默认值：TextDecorationType.None 
   * 
   * color默认值：跟随字体颜色。
   * 
   * style默认值：TextDecorationStyle.SOLID 
   * 
   * thicknessScale默认值：1.0
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
   * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。
   * 
   * **说明：**
   * 
   * 仅支持设置阴影模糊半径、颜色和偏移量，不支持智能取色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow?: ShadowOptions | Array<ShadowOptions>;

  /**
   * 文本字符间距，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing?: number | string;

  /**
   * 文本行高，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight?: number | string | Resource;

  /**
   * 文本是否将行间距平分至行的顶部与底部。
   * 
   * true表示将行间距平分至行的顶部与底部，false则不平分。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading?: boolean;

  /**
   * 文字特性效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature?: string;

  /**
   * 文本背景样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textBackgroundStyle?: TextBackgroundStyle;

  /**
   * 文本描边宽度。如果LengthMetrics的unit值是[PERCENT]{@link ./../../../arkui/Graphics:LengthUnit}，当前设置不生效，作为0处理。
   * 
   * 值小于0时为实体字，大于0时为轮廓字，等于0时无描边效果。
   * 
   * 默认值：0vp。
   * 
   * 单位：LengthMetrics类型时跟随LengthMetrics，number类型时是vp。
   * 
   * 取值范围：(-∞, +∞)
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeWidth?: LengthMetrics | number;

  /**
   * 文本描边颜色。
   * 
   * 默认值：跟随字体颜色。
   * 
   * 设置异常值时跟随字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle?: StrokeJoinStyle;
}

/**
 * 前导边距占位符，用于表示文本段落左侧与组件边缘之间的距离。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface LeadingMarginPlaceholder {
  /**
   * 图片内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pixelMap: PixelMap;

  /**
   * 图片大小，不支持设置百分比。
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
 * 段落样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphStyle {
  /**
   * 设置文本段落在水平方向的对齐方式。默认值：TextAlign.START
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textAlign?: TextAlign;

  /**
   * 设置文本段落在垂直方向的对齐方式。
   * 
   * 默认值：TextVerticalAlign.BASELINE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textVerticalAlign?: TextVerticalAlign;

  /**
   * 设置文本段落缩进，当段落仅存在ImageSpan或BuilderSpan时，此属性值不生效。参数为Dimension类型时，不支持以Percentage形式设置。默认值：{"size":["0.00px","0.00px"]}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  leadingMargin?: Dimension | LeadingMarginPlaceholder;

  /**
   * 设置断行规则。 
   * 
   * 默认值：WordBreak.BREAK_WORD
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  paragraphSpacing?: number;

  /**
   * 设置文本方向。
   * 
   * 默认值：TextDirection.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle?: ShaderStyle;
}

/**
 * 定义用户粘贴事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PasteEvent {
  /**
   * 阻止系统默认粘贴事件。
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
 * 文本Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpan {
  /**
   * Span位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * 文本Span内容或Symbol的id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: string;

  /**
   * 文本Span样式信息。
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
 * 图片布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface RichEditorLayoutStyle {
  /**
   * 外边距类型，用于描述组件不同方向的外边距。
   * 
   * 参数为Dimension类型时，四个方向外边距同时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  margin?: Dimension | Margin;

  /**
   * 圆角类型，用于描述组件边框圆角半径。
   * 
   * 参数为Dimension类型时，不支持以Percentage形式设置。
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
 * 图片样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanStyle {
  /**
   * 图片的宽度和高度，单位为px。默认值：size的默认值与objectFit的值有关，不同的objectFit值对应的size默认值也不同。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，图片宽度为组件宽
   * 度减去组件左右内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: [Dimension, Dimension];

  /**
   * 图片垂直对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * 图片缩放类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit?: ImageFit;

  /**
   * 图片布局风格。默认值：{"borderRadius":"","margin":""}
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
 * 组件SymbolSpan样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanStyle {
  /**
   * SymbolSpan组件大小，默认单位为fp。
   * 
   * 默认值：跟随主题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * SymbolSpan组件颜色。
   * 
   * 默认值：不同渲染策略下默认值不同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * SymbolSpan组件动效策略。
   * 
   * 默认值：SymbolEffectStrategy.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * SymbolSpan组件渲染策略。
   * 
   * 默认值：SymbolRenderingStrategy.SINGLE。
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
 * 后端返回的文本样式信息。
 * 
 * 在RichEditorTextStyle中，fontWeight是设置字体粗细的输入参数。
 * 
 * RichEditorSymbolSpanStyle和RichEditorSymbolSpanStyleResult中fontWeight的转换关系，与RichEditorTextStyle和
 * RichEditorTextStyleResult中fontWeight的转换关系一致。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextStyleResult {
  /**
   * 文本颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor: ResourceColor;

  /**
   * 字体大小，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize: number;

  /**
   * 字体样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontStyle: FontStyle;

  /**
   * 字体粗细。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight: number;

  /**
   * 字体列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily: string;

  /**
   * 文本装饰线样式信息。
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
   * 文字阴影效果。
   * 
   * **说明：**
   * 
   * 仅支持查询阴影模糊半径、颜色和偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textShadow?: Array<ShadowOptions>;

  /**
   * 文本字符间距，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing?: number;

  /**
   * 文本行高，默认单位为fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight?: number;

  /**
   * 文本是否将行间距平分至行的顶部与底部。
   * 
   * true表示将行间距平分至行的顶部与底部，false则不平分。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading?: boolean;

  /**
   * 文字特性效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature?: string;

  /**
   * 文本背景样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textBackgroundStyle?: TextBackgroundStyle;

  /**
   * 文本描边宽度。
   * 
   * 单位为[vp]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeWidth?: number;

  /**
   * 文本描边颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * 获取文本描边拐角样式。
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
 * 后端返回的段落信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphResult {
  /**
   * 段落样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style: RichEditorParagraphStyle;

  /**
   * 段落起始和结束位置。
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
 * 后端返回的SymbolSpan样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanStyleResult {
  /**
   * SymbolSpan组件大小，默认单位为fp。
   * 
   * 默认值：跟随主题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize: number | string | Resource;

  /**
   * SymbolSpan组件颜色。
   * 
   * 默认值：不同渲染策略下默认值不同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight: number | FontWeight | string;

  /**
   * SymbolSpan组件动效策略。
   * 
   * 默认值：SymbolEffectStrategy.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy: SymbolEffectStrategy;

  /**
   * SymbolSpan组件渲染策略。
   * 
   * 默认值：SymbolRenderingStrategy.SINGLE。
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
 * 文本Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpanResult {
  /**
   * Span位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * 文本Span内容或Symbol的id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: string;

  /**
   * 文本Span样式信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle: RichEditorTextStyleResult;

  /**
   * 文本Span内容里有效内容的起始和结束位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offsetInSpan: [number, number];

  /**
   * 组件SymbolSpan样式信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  symbolSpanStyle?: RichEditorSymbolSpanStyle;

  /**
   * 组件SymbolSpan内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  valueResource?: Resource;

  /**
   * 段落样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * 插入的预上屏文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  previewText?: string;

  /**
   * url信息。
   * 
   * 默认值：undefined
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
 * 后端返回的图片样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanStyleResult {
  /**
   * 图片的宽度和高度，单位为px。默认值：size的默认值与objectFit的值有关，不同的objectFit值对应的size默认值也不同。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，图片宽度为组件宽
   * 度减去组件左右内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size: [number, number];

  /**
   * 图片垂直对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign: ImageSpanAlignment;

  /**
   * 图片缩放类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit: ImageFit;

  /**
   * 图片布局风格。
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
 * 后端返回的图片信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanResult {
  /**
   * Span位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * 图片内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valuePixelMap?: PixelMap;

  /**
   * 图片资源id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valueResourceStr?: ResourceStr;

  /**
   * 图片样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle: RichEditorImageSpanStyleResult;

  /**
   * 文本Span内容里有效内容的起始和结束位置。
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
 * 图片Span信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpan {
  /**
   * Span位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * 图片内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: PixelMap | ResourceStr;

  /**
   * 图片样式。
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
 * 定义RichEditor的范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorRange {
  /**
   * 需要更新样式的文本起始位置，省略或者设置负值时表示从0开始。
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
   * 需要更新样式的文本结束位置，省略或者超出文本范围时表示无穷大。
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
 * 用户手势事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorGesture {
  /**
   * [ClickEvent]{@link common:ClickEvent}为用户点击事件。
   * 
   * 点击完成时回调事件。
   * 
   * 双击时，第一次点击触发回调事件。
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
   * [GestureEvent](docroot://reference/apis-arkui/arkui-ts/ts-gesture-common.md#gestureevent对象说明)为用户长按事件。
   * 
   * 长按完成时回调事件。
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
   * [GestureEvent](docroot://reference/apis-arkui/arkui-ts/ts-gesture-common.md#gestureevent对象说明)为用户双击事件。
   * 
   * 双击完成时回调事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onDoubleClick?: Callback<GestureEvent>;
}

/**
 * 添加文本的偏移位置和文本样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorTextSpanOptions {
  /**
   * 添加文本的位置。省略时，添加到所有内容的最后。
   * 
   * 当值小于0时，放在所有内容最前面；当值大于所有内容长度时，放在所有内容最后面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: number;

  /**
   * 文本Span样式信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: RichEditorTextStyle;

  /**
   * 段落样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * 行为触发回调。省略时，仅使用系统默认行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  gesture?: RichEditorGesture;

  /**
   * url信息。
   * 
   * 默认值：undefined
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
 * 设置自定义键盘是否支持避让功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface KeyboardOptions {
  /**
   * 设置自定义键盘是否支持避让功能。默认值为 `false`，表示不支持避让；`true` 表示支持避让。
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
 * 设置图片的偏移位置和图片样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorImageSpanOptions {
  /**
   * 添加图片的位置。省略时，添加到所有内容的末尾。
   * 
   * 当值小于0时，设置在所有内容最前面；当值大于所有内容长度时，设置在所有内容最后面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: number;

  /**
   * 图片样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageStyle?: RichEditorImageSpanStyle;

  /**
   * 行为触发回调。省略时，仅使用系统默认行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  gesture?: RichEditorGesture;

  /**
   * 鼠标悬停触发回调。省略时，不执行相关行为。
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
 * 设置builder的偏移位置和样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorBuilderSpanOptions {
  /**
   * 添加builder的位置。省略或者为异常值时，添加到所有内容的最后。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * 添加builder单独拖拽时的背板背景颜色。不配置或者异常值时，颜色按系统默认配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  dragBackgroundColor? : ColorMetrics;

  /**
   * 添加builder单独拖拽时是否需要投影。不配置或者异常值时，默认需要投影。true表示需要投影，false表示不需要投影。
   * 
   * 默认值： true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  isDragShadowNeeded?: boolean;

  /**
   * 无障碍朗读功能属性。缺省时，取[AccessibilitySpanOptions]{@link text_common:AccessibilitySpanOptions}的默认值。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
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
 * 设置提示文本的字体样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PlaceholderStyle {
  /**
   * 设置placeholder文本样式。
   * 
   * 默认值遵循主题设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  font?: Font;

  /**
   * 设置placeholder文本颜色。
   * 
   * 默认值遵循主题设置。
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
 * 文本样式选项。
 * 
 * 继承自[RichEditorRange]{@link RichEditorRange}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSpanStyleOptions extends RichEditorRange { }

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
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
  /**
   * 段落样式。
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
 * 文本样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * 文本Span样式信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle: RichEditorTextStyle;

  /**
   * url信息。
   * 
   * 默认值：undefined
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
 * 图片的样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * 图片样式。
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
 * SymbolSpan样式选项。
 * 
 * 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * 组件样式。
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
 * 设置SymbolSpan组件的偏移位置和样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface RichEditorSymbolSpanOptions {
  /**
   * 添加组件的位置。省略时，添加到所有内容的最后。
   * 
   * 如果值小于0，添加到所有内容的最前面；如果值大于所有内容的长度，添加到所有内容的最后面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offset?: number;

  /**
   * 组件样式信息。省略时，使用系统默认样式信息。
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
 * 选中内容信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorSelection {
  /**
   * 选中范围。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selection: [number, number];

  /**
   * span信息。
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
 * 插入文本的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorInsertValue {
  /**
   * 插入的文本偏移位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  insertOffset: number;

  /**
   * 插入的文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  insertValue: string;

  /**
   * 插入的预上屏文本内容。
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
 * 删除操作和被删除内容的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorDeleteValue {
  /**
   * 删除内容的偏移位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset: number;

  /**
   * 删除操作的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  direction: RichEditorDeleteDirection;

  /**
   * 删除内容长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  length: number;

  /**
   * 删除的文本或图片Span的信息。
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
 * 图文变化信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RichEditorChangeValue {
  /**
   * 即将被替换内容的开始和结束索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rangeBefore: TextRange;

  /**
   * 替换后文本Span的具体信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedSpans: Array<RichEditorTextSpanResult>;

  /**
   * 替换后ImageSpan的具体信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedImageSpans: Array<RichEditorImageSpanResult>;

  /**
   * 替换后SymbolSpan的具体信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacedSymbolSpans: Array<RichEditorTextSpanResult>;

  /**
   * 组件内容变化的原因。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  changeReason?: TextChangeReason;
}

/**
 * RichEditor初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RichEditorOptions {
  /**
   * 富文本控制器。
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
 * RichEditor初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RichEditorStyledStringOptions {
  /**
   * 富文本控制器。
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
 * 菜单的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SelectionMenuOptions {
  /**
   * 自定义选择菜单弹出时回调。
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
   * 自定义选择菜单关闭时回调。
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
   * 自定义选择菜单类型。
   * 
   * 默认值：MenuType.SELECTION_MENU。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  menuType?: MenuType;

  /**
   * 自定义选择菜单显示时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuShow?: MenuCallback;

  /**
   * 自定义选择菜单隐藏时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onMenuHide?: MenuCallback;

  /**
   * 预览菜单的选项。该参数只在RichEditor中生效。
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
 * 预览菜单的选项。
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
   * 菜单弹出时振动效果，当ImageSpan或BuilderSpan绑定预览菜单时生效。
   * 
   * 默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。
   * 
   * **说明：** 仅当应用具备ohos.permission.VIBRATE权限，且用户启用了触感反馈时才会生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  hapticFeedbackMode? : HapticFeedbackMode;
}

/**
 * RichEditor组件控制器基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class RichEditorBaseController implements TextEditControllerEx {
  /**
   * 返回当前光标所在位置。
   * 
   * 当无法获取光标位置时（例如controller未与组件绑定时），该接口返回-1。
   *
   * @returns { number } 当前光标所在位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getCaretOffset(): number;

  /**
   * 设置光标位置。
   *
   * @param { number } offset - 光标偏移位置。超出所有内容范围时，设置失败。
   * @returns { boolean } 光标是否设置成功。<br/>true表示光标位置设置成功，false表示未成功。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setCaretOffset(offset: number): boolean;

  /**
   * 关闭自定义选择菜单或系统默认选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  closeSelectionMenu(): void;

  /**
   * 获取用户预设的文本样式。
   *
   * @returns { RichEditorTextStyle } 用户预设样式。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getTypingStyle(): RichEditorTextStyle;

  /**
   * 设置用户预设的文本样式。
   *
   * @param { RichEditorTextStyle } value - 预设样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setTypingStyle(value: RichEditorTextStyle): void;

  /**
   * 设置用户预设的段落样式。仅在组件内容为空或组件末尾换行后，输入文本生效。
   *
   * @param { RichEditorParagraphStyle } style - 预设段落样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  setTypingParagraphStyle(style: RichEditorParagraphStyle): void;

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
   * 2. 组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。
   * 3. 组件内无菜单时，接口调用后也无菜单显示。
   *
   * @param { number } selectionStart - 选中开始位置。
   * @param { number } selectionEnd - 选中结束位置。
   * @param { SelectionOptions } [options] - 选择项配置。 [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * 获取当前富文本的编辑状态。
   *
   * @returns { boolean } true为编辑态，false为非编辑态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEditing(): boolean;

  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stopEditing(): void;

  /**
   * 获取布局管理器对象。
   *
   * @returns { LayoutManager } 布局管理器对象。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutManager(): LayoutManager;

  /**
   * 获取预上屏信息。
   *
   * @returns { PreviewText } 预上屏信息。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviewText(): PreviewText;

  /**
   * 将指定范围的文本滚动到可视区内。
   *
   * @param { TextRange } [range] - 可视范围。
   *     如果参数无效，该方法将不产生效果

   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollToVisible(range?: TextRange): void;

  /**
   * 返回当前光标与RichEditor组件的相对位置。如果光标不闪烁，返回undefined。
   *
   * @returns { RectResult | undefined } 当前光标与RichEditor的相对位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getCaretRect(): RectResult | undefined;

  /**
   * 提供删除字符能力。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。
   * 
   * 该接口不支持预上屏场景使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  deleteBackward(): void;

  /**
   * 设置无输入时的属性字符串样式的提示文本。
   *
   * @param { StyledString } styledString - 设置属性字符串样式的提示文本，其优先级高于[placeholder]{@link RichEditorAttribute.placeholder}属性设
   *     置的提示文本。<br>提示文本不支持触发属性字符串[GestureStyle]{@link styled_string:GestureStyle}样式绑定的手势事件，以及
   *     [UrlStyle]{@link styled_string:UrlStyle}样式的超链接跳转能力。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
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
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class RichEditorController extends RichEditorBaseController {
  /**
   * 添加文本内容，如果组件光标闪烁，插入后光标位置更新为新插入文本的后面。
   *
   * @param { ResourceStr } content - 文本内容。 <br>从API version 20开始，支持Resource类型。 [since 20]
   * @param { RichEditorTextSpanOptions } [options] - 文本选项。
   * @returns { number } 添加完成的TextSpan在所有Span中的索引位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number;

  /**
   * 添加图片内容，如果组件光标闪烁，插入后光标位置更新为新插入图片的后面。
   * 
   * 该接口为同步接口，在弱网环境下，直接添加网络图片可能会阻塞UI线程造成冻屏问题。不建议直接添加网络图片。
   *
   * @param { PixelMap | ResourceStr } value - 图片内容。
   * @param { RichEditorImageSpanOptions } [options] - 图片选项。
   * @returns { number } 添加完成的ImageSpan在所有Span中的索引位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * 在RichEditor中添加用户自定义布局（BuilderSpan）。
   * 
   * > **说明：**
   * >
   * > - RichEditor组件添加占位Span，占位Span调用系统的measure方法计算真实的长宽和位置。
   * >
   * > - 可通过[RichEditorBuilderSpanOptions]{@link RichEditorBuilderSpanOptions}设置此builder在RichEditor中的index（一个文字为一个单位）。
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
   * 、[opacity]{@link common}、
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
   * 、[lightUpEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lightupeffect12)、
   * [pixelStretchEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#pixelstretcheffect12)
   * 。
   *
   * @param { CustomBuilder } value - 自定义组件。
   * @param { RichEditorBuilderSpanOptions } [options] - builder选项。
   * @returns { number } 添加完成的builderSpan在所有Span中的索引位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number;

  /**
   * 在RichEditor中添加图标小符号（SymbolSpan），如果组件光标闪烁，插入后光标位置更新为新插入SymbolSpan的后面。
   * 
   * 暂不支持手势、复制、拖拽处理。
   *
   * @param { Resource } value - symbol资源信息。
   * @param { RichEditorSymbolSpanOptions } [options] - symbol选项。
   * @returns { number } 添加完成的SymbolSpan在所有Span中的索引位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number;

  /**
   * 更新文本、图片或SymbolSpan样式。
   * 
   * 若只更新了一个Span的部分内容，则会根据更新部分、未更新部分将该Span拆分为多个Span。
   * 
   * 使用该接口更新文本、图片或SymbolSpan样式时默认不会关闭自定义文本选择菜单。
   *
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions } value - 文本、图片或SymbolSpan的样式
   *     选项信息。 [since 10 - 10]
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
   *     RichEditorUpdateSymbolSpanStyleOptions } value - 文本、图片或SymbolSpan的样式选项信息。 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void;

  /**
   * 更新段落的样式。
   *
   * @param { RichEditorParagraphStyleOptions } value - 段落的样式选项信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;

  /**
   * 删除指定范围内的文本和图片。
   *
   * @param { RichEditorRange } [value] - 删除范围。省略时，删除所有文本和图片。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  deleteSpans(value?: RichEditorRange): void;

  /**
   * 获取span信息。
   *
   * @param { RichEditorRange } [value] - 需要获取span范围。
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> } 文本和图片Span信息。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;

  /**
   * 获取指定范围的段落信息。
   *
   * @param { RichEditorRange } [value] - 需要获取段落的范围。
   * @returns { Array<RichEditorParagraphResult> } 选中段落的信息。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>;

  /**
   * 获取选中内容的范围和span信息。未选中时，返回光标所在span信息。
   *
   * @returns { RichEditorSelection } 选中内容信息。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getSelection(): RichEditorSelection;

  /**
   * 将属性字符串转换为span信息。
   *
   * @param { StyledString } value - 转换前的属性字符串。
   * @returns { Array<RichEditorSpan> } 文本和图片Span信息。
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fromStyledString(value: StyledString): Array<RichEditorSpan>;

  /**
   * 将给定范围的组件内容转换成属性字符串，SymbolSpan和BuilderSpan不支持转换。
   *
   * @param { RichEditorRange } value - 需要获取的范围。
   * @returns { StyledString } 转换后的属性字符串
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
 * RichEditor span信息。
 *
 * @unionmember { RichEditorImageSpanResult } 后端返回的图片信息。
 * @unionmember { RichEditorTextSpanResult } 后端返回的文本信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;

/**
 * # 导入对象
 * 
 * ```ts
 * controller: RichEditorStyledStringController = new RichEditorStyledStringController();
 * ```
 */
/**
 * 使用属性字符串构建的RichEditor组件的控制器，继承自[RichEditorBaseController]{@link RichEditorBaseController}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class RichEditorStyledStringController extends RichEditorBaseController implements StyledStringController {
  /**
   * 设置富文本组件显示的属性字符串。
   * 
   * > **说明：**
   * >
   * > - 调用该接口时，会全量替换富文本组件的StyledString，并重新渲染。
   * >
   * > - 当内容超过组件本身区域时，组件会自动向上滚动内容直到末尾处可见。
   *
   * @param { StyledString } styledString - 属性字符串。<br/>**说明：** <br/>StyledString的子类
   *     [MutableStyledString]{@link styled_string:MutableStyledString}也可以作为入参值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyledString(styledString: StyledString): void;

  /**
   * 获取富文本组件显示的属性字符串。
   *
   * @returns { MutableStyledString } 富文本组件显示的属性字符串。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getStyledString(): MutableStyledString;

  /**
   * 获取富文本当前的选中区域范围。
   *
   * @returns { RichEditorRange } 选中区域范围。
   *     <br>当controller未绑定组件或绑定controller的组件被释放时，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getSelection(): RichEditorRange;

  /**
   * 注册文本内容变化回调，该回调仅在后端程序导致文本内容变更时触发，调用[setStyledString]{@link RichEditorStyledStringController.setStyledString}时不会触发。
   *
   * @param { StyledStringChangedListener } listener - 文本内容变化回调监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentChanged(listener: StyledStringChangedListener): void;
}

/**
  * 除支持[通用属性]{@link common}外，还支持以下属性：
  * 
  * 除支持[通用事件]{@link common}外，还支持[OnDidChangeCallback]{@link text_common:OnDidChangeCallback}、
  * [StyledStringChangedListener]{@link text_common:StyledStringChangedListener}、
  * [StyledStringChangeValue]{@link text_common:StyledStringChangeValue}和以下事件：
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
   * 富文本组件初始化完成后触发回调。
   *
   * @param { function } callback - 订阅富文本组件初始化完成的回调。 [since 10 - 11]
   * @param { Callback<void> } callback - 订阅富文本组件初始化完成的回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReady(callback: Callback<void>): RichEditorAttribute;

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
   * @param { function } callback - [RichEditorSelection]{@link RichEditorSelection}为选中的所有span信息。<br/>选择时触发的回调
   *     。 [since 10 - 11]
   * @param { Callback<RichEditorSelection> } callback - [RichEditorSelection]{@link RichEditorSelection}为选中的所有span信息。<
   *     br/>选择时触发的回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelect(callback: Callback<RichEditorSelection>): RichEditorAttribute;

  /**
   * 内容选择区域或编辑状态下的光标位置发生变化时，将触发该回调。光标位置变化时，回调中选择区域的起始和终止位置相等。
   *
   * @param { Callback<RichEditorRange> } callback - [RichEditorRange]{@link RichEditorRange}为所有内容的选择区域起始和终止位置。<br/>订阅文本
   *     选择区域发生变化或编辑状态下光标位置发生变化时触发的回调。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSelectionChange(callback: Callback<RichEditorRange>): RichEditorAttribute;

  /**
   * 输入法输入内容前触发回调。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
   *
   * @param { function } callback - [RichEditorInsertValue]{@link RichEditorInsertValue}为输入法将要输入内容信息。<br/>true:组件执行添加内容操
   *     作。<br/>false:组件不执行添加内容操作。<br/>输入法输入内容前的回调。 [since 10 - 11]
   * @param { Callback<RichEditorInsertValue, boolean> } callback - [RichEditorInsertValue]{@link RichEditorInsertValue}
   *     为输入法将要输入内容信息。<br/>true:组件执行添加内容操作。<br/>false:组件不执行添加内容操作。<br/>输入法输入内容前的回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean>): RichEditorAttribute;

  /**
   * 输入法输入完成后，触发回调。
   * 
   * 该接口仅支持返回一个文本span的信息，当编辑操作涉及返回多个文本span信息时，建议使用[onDidIMEInput]{@link RichEditorAttribute.onDidIMEInput}接口。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
   *
   * @param { function } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult}为输入法完成输入后的文本Span信息。<br/>输入
   *     法完成输入后的回调。 [since 10 - 11]
   * @param { Callback<RichEditorTextSpanResult> } callback - [RichEditorTextSpanResult]{@link RichEditorTextSpanResult}
   *     为输入法完成输入后的文本Span信息。<br/>输入法完成输入后的回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIMEInputComplete(callback: Callback<RichEditorTextSpanResult>): RichEditorAttribute;

  /**
   * 输入法输入完成后，触发回调。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<TextRange> } callback - TextRange为输入法本次输入内容的范围。<br/>输入法完成输入时的回调。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidIMEInput(callback: Callback<TextRange>): RichEditorAttribute;

  /**
   * 输入法删除内容前，触发回调。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
   *
   * @param { function } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue}为准备删除的内容所在的文本或者图片Span信息。<br/>
   *     true:组件执行删除操作。<br/>false:组件不执行删除操作。<br/>输入法删除内容前的回调，英文预上屏点击候选词时会执行该回调。 [since 10 - 11]
   * @param { Callback<RichEditorDeleteValue, boolean> } callback - [RichEditorDeleteValue]{@link RichEditorDeleteValue}
   *     为准备删除的内容所在的文本或者图片Span信息。<br/>true:组件执行删除操作。<br/>false:组件不执行删除操作。<br/>输入法删除内容前的回调，英文预上屏点击候选词时会执行该回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean>): RichEditorAttribute;

  /**
   * 输入法删除内容后，触发回调。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件不支持该回调。
   *
   * @param { function } callback - 订阅输入法完成删除内容的回调。 [since 10 - 11]
   * @param { Callback<void> } callback - 订阅输入法完成删除内容的回调。 [since 12]
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDeleteComplete(callback: Callback<void>): RichEditorAttribute;

  /**
   * 设置组件是否支持文本内容可复制粘贴。
   * 
   * 从API version 20开始，RichEditor组件在执行复制或剪切操作时，会将HTML格式的内容添加到剪贴板中。
   * 
   * - 仅支持TextSpan和ImageSpan向剪贴板中添加HTML内容，其他Span类型（如BuilderSpan、SymbolSpan、CustomSpan）则不能添加。
   * - 设置RichEditor组件的属性字符串时，请参考属性字符串[toHtml]{@link styled_string:StyledString.toHtml}接口文档，以了解支持转换为HTML的范围。
   * 
   * copyOptions不为CopyOptions.None时，长按组件内容，会弹出文本选择菜单。如果通过bindSelectionMenu等方式自定义文本选择菜单，则会弹出自定义的菜单。
   * 
   * 设置copyOptions为CopyOptions.None时，禁用复制、剪切、翻译、分享、搜索、帮写功能，且不支持拖拽操作。
   *
   * @param { CopyOptions } value - 组件支持文本内容是否可复制粘贴。<br/>默认值：CopyOptions.LocalDevice
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  copyOptions(value: CopyOptions): RichEditorAttribute;

  /**
   * 设置自定义选择菜单。自定义菜单超长时，建议内部嵌套[Scroll]{@link scroll}组件使用，避免键盘被遮挡。
   *
   * @param { RichEditorSpanType } spanType - 菜单的类型。<br/>默认值：<br/>RichEditorSpanType.TEXT
   * @param { CustomBuilder } content - 菜单的内容。
   * @param { ResponseType | RichEditorResponseType } responseType - 菜单的响应类型。<br/> 默认值：<br/>
   *     ResponseType.LongPress [since 11]
   * @param { SelectionMenuOptions } [options] - 菜单的选项。
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
   * @param { CustomBuilder } value - 自定义键盘。                     <br/>传入undefined时默认使用系统键盘。 [since 10 - 22]
   * @param { KeyboardOptions } [options] - 设置自定义键盘是否支持避让功能。 <br>传入undefined时默认不支持避让。 [since 12 - 22]
   * @param { CustomBuilder | ComponentContent | undefined } value - 自定义键盘。                     <br/>传入undefined时默认使用系统键
   *     盘。 [since 23]
   * @param { KeyboardOptions | undefined } [options] - 设置自定义键盘是否支持避让功能。 <br>传入undefined时默认不支持避让。 [since 23]
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined,
                 options?: KeyboardOptions | undefined): RichEditorAttribute;

  /**
   * 粘贴时，触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的粘贴。
   *
   * @param { function } callback - 订阅粘贴时的回调。 [since 11 - 11]
   * @param { PasteEventCallback } callback - 订阅粘贴时的回调。 [since 12]
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste(callback: PasteEventCallback): RichEditorAttribute;

  /**
   * 设置是否进行文本特殊实体识别。
   * 
   * 该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
   * 
   * 当enableDataDetector设置为true且未指定[dataDetectorConfig]{@link RichEditorAttribute.dataDetectorConfig}属性时，系统将默认识别所有类型的实体，
   * 并将这些实体的color和decoration更改为预设样式：
   * 
   * 触摸点击或鼠标右键点击实体时，会根据实体类型弹出对应的实体操作菜单，鼠标左键点击实体会直接响应菜单的第一个选项。
   * 
   * 对addBuilderSpan的节点文本，该功能不会生效。
   * 
   * 当copyOptions设置为CopyOptions.None时，点击实体弹出的菜单没有选择文本和复制功能。
   * 
   * <!--RP1--><!--RP1End-->
   *
   * @param { boolean } enable - 使能文本识别。<br/>true表示使能文本特殊实体识别，false表示不使能文本特殊实体识别。<br/>默认值： false
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableDataDetector(enable: boolean): RichEditorAttribute;

  /**
   * 设置是否开启预上屏功能。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { boolean } enable - 使能预上屏功能。<br/>true表示开启，false表示不开启。<br/>默认值： true
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): RichEditorAttribute;

  /**
   * 设置文本特殊实体识别配置，可配置识别类型、实体显示样式，并可选择是否开启长按预览功能。
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
   * @param { TextDataDetectorConfig } config - 文本识别配置。
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): RichEditorAttribute;

  /**
   * 设置是否启用文本选择的AI菜单功能。启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。
   * 
   * AI菜单功能启用时，在组件中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId]{@link text_common:TextMenuItemId}中的url（打开连接）、email（新建邮件）、
   * phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。
   * 
   * AI菜单生效时，选中范围内需包括且仅包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId]{@link text_common:TextMenuItemId}中的askAI菜单项不同时出现。
   * 
   * 本功能仅在[copyOptions]{@link RichEditorAttribute.copyOptions}为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时生效。
   * 
   * 该接口依赖设备底层具有文本识别能力，否则设置不会生效。
   *
   * @param { boolean | undefined } enable - 是否启用选择文本识别，true表示启用，false表示不启用。<br>传入undefined或null时属性重置为默认值。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): RichEditorAttribute;

  /**
   * 设置无输入时的提示文本。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { ResourceStr } value - 无输入时的提示文本。
   * @param { PlaceholderStyle } [style] - 提示文本的字体样式。<br/>缺省时默认跟随主题。
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  placeholder(value: ResourceStr, style?: PlaceholderStyle): RichEditorAttribute;

  /**
   * 设置输入框光标、手柄颜色。
   *
   * @param { ResourceColor } value - 输入框光标、手柄颜色。<br/>默认值：'#007DFF'
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  caretColor(value: ResourceColor): RichEditorAttribute;

  /**
   * 设置文本选中的底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor } value - 文本选中的底板颜色。<br/>默认为20%不透明度。
   * @returns { RichEditorAttribute } 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): RichEditorAttribute;

  /**
   * 组件内容的编辑状态发生变化时触发该回调函数。
   *
   * @param { Callback<boolean> } callback - true表示编辑态，false表示非编辑态。
   * @returns { RichEditorAttribute } returns 富文本编辑器的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onEditingChange(callback: Callback<boolean>): RichEditorAttribute;

  /**
   * 设置软键盘输入法回车键类型。
   *
   * @param { EnterKeyType } value - 软键盘输入法回车键类型。<br/>默认为EnterKeyType.NEW_LINE。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType(value: EnterKeyType): RichEditorAttribute;

  /**
   * 按下软键盘输入法回车键时触发该回调。
   *
   * @param { SubmitCallback } callback - 订阅事件的回调。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSubmit(callback: SubmitCallback): RichEditorAttribute;

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
   * @param { Callback<RichEditorChangeValue, boolean> } callback - 在组件执行增删操作前，触发的回调
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillChange(callback: Callback<RichEditorChangeValue, boolean>) : RichEditorAttribute;

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
   * @param { OnDidChangeCallback } callback - 在组件执行增删操作后，触发的回调.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidChange(callback: OnDidChangeCallback) : RichEditorAttribute;

  /**
   * 剪切时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的剪切。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件，默认支持图文的剪切。
   *
   * @param { Callback<CutEvent> } callback - 定义用户剪切事件。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCut(callback: Callback<CutEvent>): RichEditorAttribute;

  /**
   * 复制时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的复制。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建的RichEditor组件，默认支持图文的复制。
   *
   * @param { Callback<CopyEvent> } callback - 定义用户复制事件。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCopy(callback: Callback<CopyEvent>): RichEditorAttribute;

  /**
   * 在组件绑定输入法前，触发回调。
   * 
   * 调用[IMEClient]{@link text_common:IMEClient}的[setExtraConfig]{@link text_common:IMEClient.setExtraConfig}方法设置输入法扩展信息。
   * 在绑定输入法成功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。
   *
   * @param { Callback<IMEClient> | undefined } callback - 在组件绑定输入法前触发的回调。<br>值为undefined时清除已绑定的回调事件。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient> | undefined): RichEditorAttribute;

  /**
   * 设置系统默认菜单的扩展项，允许配置扩展项的文本内容、图标和回调方法。
   * 
   * 调用[disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]{@link text_common:EditMenuOptions.onCreateMenu}的入参列表中不包含被
   * 屏蔽的菜单选项。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { EditMenuOptions } editMenu - 扩展菜单选项。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): RichEditorAttribute;

  /**
   * 设置RichEditor通过点击以外的方式获焦时，是否主动拉起软键盘。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { boolean } isEnabled - 通过点击以外的方式获焦时，是否主动拉起软键盘。<br/>true表示主动拉起软键盘，false表示不主动拉起软键盘。<br/>默认值： true
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableKeyboardOnFocus(isEnabled: boolean): RichEditorAttribute;

  /**
   * 设置RichEditor是否支持触感反馈。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { boolean } isEnabled - 控制触感反馈的开关。<br/>默认值：true。true表示开启触感反馈，false表示关闭触感反馈。<br/>**说明：**<br/>触感反馈需应用具备
   *     ohos.permission.VIBRATE权限，用户已启用触感反馈，且系统硬件支持时才会生效。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): RichEditorAttribute;

  /**
   * 设置RichEditor滚动条的显示模式。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { BarState } state - 输入框滚动条的显示模式。<br/>默认值：BarState.Auto
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  barState(state: BarState): RichEditorAttribute;

  /**
   * 设置组件内容的最大长度。当内容（包含文本、图片、Symbol和Builder）的总长度达到此值时，将无法继续添加内容。
   *
   * @param { Optional<number> } maxLength - 文本的最大输入字符数。<br/>默认值：Infinity，可以无限输入，支持undefined类型。<br/>**说明：** <br/>当不设置该属性
   *     或设置异常值时，取默认值，设置小数时，取整数部分。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLength(maxLength: Optional<number>): RichEditorAttribute;

  /**
   * 设置富文本可显示的最大行数。maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。同时设置组件高度和最大行数，组件高度优先生效。
   *
   * @param { Optional<number> } maxLines - 设置富文本可显示的最大行数。maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。同时设置组件高度和最大行数，组件高度优先生效。<
   *     br/>默认值：UINT32_MAX，可以无限输入，支持undefined类型。 <br/>取值范围：(0, UINT32_MAX]
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxLines(maxLines: Optional<number>): RichEditorAttribute;

  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { Optional<boolean> } enable - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enable: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置键盘外观。
   *
   * @param { Optional<KeyboardAppearance> } appearance - 键盘外观。<br/>默认值：KeyboardAppearance.NONE_IMMERSIVE
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): RichEditorAttribute;

  /**
   * 设置是否阻止返回键传递。
   *
   * @param { Optional<boolean> } isStopped - 是否阻止返回键。<br/>true表示阻止，false表示不阻止。<br/>默认值：true。异常值取默认值。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置撤销还原时是否保留原内容的样式。
   * 
   * 使用[RichEditorStyledStringOptions]{@link RichEditorStyledStringOptions}构建RichEditor组件时，撤销还原时默认保留原内容样式，不受该接口设置的属性影响。
   *
   * @param { Optional<UndoStyle> } style - 撤销还原是否保留原样式选项。默认值：UndoStyle.CLEAR_STYLE
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  undoStyle(style: Optional<UndoStyle>): RichEditorAttribute;

  /**
   * 设置组件滚动条颜色。
   *
   * @param { Optional<ColorMetrics> } color - 设置组件滚动条颜色。<br />默认值：'#66182431'，显示为灰色。<br />**说明：** 设置异常值时按默认值处理。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): RichEditorAttribute;

  /**
   * 设置是否启用单行模式。未通过该接口设置时，默认不启用单行模式。
   * 
   * > **说明：**
   * >
   * > 单行模式不显示滚动条。
   * >
   * > 单行模式下换行符会显示为空格。
   *
   * @param { boolean | undefined } isEnable - 是否启用单行模式。<br/>true表示启用单行模式；false表示不启用单行模式。<br/>设置为undefined或null时，按照false
   *     处理，不启用单行模式。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  singleLine(isEnable: boolean | undefined): RichEditorAttribute;

  /**
   * 设置拖动预览样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 拖动预览样式。如果设置为undefined，样式将被重置。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): RichEditorAttribute;

  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { Optional<boolean> } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): RichEditorAttribute;

  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。不通过该接口设置，默认行高不基于文字实际高度自适应。
   * 
   * 该接口依赖[RichEditorTextStyle]{@link RichEditorTextStyleResult}的lineHeight属性。当lineHeight设置值小于当前字号下文本渲染出的实际高度时，
   * fallbackLineSpacing属性将生效。
   *
   * @param { Optional<boolean> } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置是否开启行首标点符号压缩。
   * 
   * > **说明：**
   * >
   * > 行首标点符号默认不压缩。
   * >
   * > 支持压缩的标点符号，请参考[ParagraphStyle]{@link ./../../../@ohos.graphics.text:text.ParagraphStyle}的行首压缩的标点范围。
   *
   * @param { Optional<boolean> } enabled - 是否开启行首标点符号压缩。<br/>true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。
   * 
   * 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在
   * [RichEditorParagraphStyle]{@link RichEditorParagraphStyle}的wordBreak属性为非BREAK_ALL并且待排版文本首个
   * [TextStyle]{@link ./../../../@ohos.graphics.text:text.TextStyle}的
   * [locale]{@link ./../../../@ohos.graphics.text:text.TextStyle}为“zh-Hans”或“zh-Hant”时生效。
   *
   * @param { Optional<boolean> } enabled - 段落最后一行是否使能孤字优化。<br/>true表示使能孤字优化，false表示不使能孤字优化。设置为undefined或null时，不使能孤字优化。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置当文本宽度超过内容区宽度时是否启用水平滚动。不通过该接口设置，默认禁用水平滚动。
   *
   * @param { Optional<boolean> } enabled - 是否启用水平滚动。<br/>true表示启用水平滚动，false表示禁用水平滚动，文本将自动换行。设置为undefined或null时，不启用水平滚动。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  horizontalScrolling(enabled: Optional<boolean>): RichEditorAttribute;

  /**
   * 设置是否启用行尾标点符号悬挂。不通过该接口设置，默认标点符号不悬挂。
   *
   * @param { Optional<boolean> } enabled - 是否启用行尾标点符号悬挂。true表示启用行尾标点符号悬挂，false表示不启用行尾标点符号悬挂。
   *     设置为undefined或null时，不启用标点符号悬挂。
   * @returns { RichEditorAttribute } - 返回RichEditorAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): RichEditorAttribute;
}

/**
 * 定义用户剪切事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CutEvent {
  /**
   * 阻止系统默认剪切事件。
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
 * 定义用户复制事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CopyEvent {
  /**
   * 阻止系统默认剪切事件。
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
 * Url信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface RichEditorUrlStyle {
  /**
   * url地址。
   * 
   * 默认值：undefined
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
 * 软键盘按下回车键时的回调事件。
 *
 * @param { EnterKeyType } enterKey - 软键盘输入法回车键类型。具体类型见EnterKeyType枚举说明。
 * @param { SubmitEvent } event - 当提交的时候，提供保持组件编辑状态的方法。EnterKeyType指定为NEW_LINE时，默认保持编辑态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * 自定义选择菜单弹出时触发的回调事件。
 *
 * @param { number } start - 选中内容的起始位置。
 * @param { number } end - 选中内容的终止位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type MenuOnAppearCallback = (start: number, end: number) => void;

/**
 * 自定义选择菜单显示或隐藏时触发的回调事件。
 *
 * @param { number } start - 选中内容的起始位置。
 * @param { number } end - 选中内容的终止位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type MenuCallback = (start: number, end: number) => void;

/**
 * 粘贴完成前，触发回调。
 *
 * @param { PasteEvent } [event] - 定义用户粘贴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PasteEventCallback = (event?: PasteEvent) => void;


/**
 * 鼠标悬浮触发回调。
 *
 * @param { boolean } status - 表示鼠标是否悬浮在组件上，鼠标进入组件时为true，离开组件时为false。
 * @param { HoverEvent } event - 设置悬浮事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * 提供编写文本的接口。
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
   * 创建富文本组件时调用。
   *
   * @param { RichEditorOptions } value - 富文本组件初始化选项。
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value: RichEditorOptions): RichEditorAttribute;

  /**
   * 创建富文本组件时调用。
   *
   * @param { RichEditorStyledStringOptions} options - 富文本组件初始化选项。
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
 * 定义富文本组件实例。
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
 * 支持图文混排和文本交互式编辑的组件。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 10开始支持。后续版本新增内容，采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare const RichEditor: RichEditorInterface;