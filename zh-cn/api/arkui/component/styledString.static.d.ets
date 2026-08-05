/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { Callback, ShadowOptions, ClickEvent, TouchEvent, PixelMap, AttributeModifier, CommonMethod, LayoutPolicy } from './common';
import { Callback, ShadowOptions, ClickEvent, PixelMap, AttributeModifier, CommonMethod, LayoutPolicy  } from './common';

import { TextAlign, FontStyle, FontWeight, TextDecorationType, TextDecorationStyle, WordBreak, TextOverflow, ImageFit, ImageSpanAlignment } from './enums';
import { TextAlign, FontStyle, FontWeight, TextDecorationType, TextDecorationStyle, WordBreak, TextOverflow, ImageFit, ImageSpanAlignment } from './enums';

import { ResourceStr, ResourceColor, LengthMetrics, SizeOptions, Margin, Padding, BorderRadiuses, ColorFilter } from './units';
import { ResourceStr, ResourceColor, LengthMetrics, SizeOptions, Margin, Padding, BorderRadiuses, ColorFilter } from './units';

import { TextBackgroundStyle } from './span';
import { TextBackgroundStyle } from './span';

import { GestureEvent } from './gesture';
import { GestureEvent } from './gesture';

import { DrawingColorFilter } from './image';
import { DrawingColorFilter } from './image';

import { LeadingMarginPlaceholder } from './richEditor';
import { LeadingMarginPlaceholder } from './richEditor';
import image from '../../@ohos.multimedia.image';
import drawing from '../../@ohos.graphics.drawing';
import { DrawContext } from '../../arkui/Graphics';

import { TextDirection, SuperscriptStyle, TextVerticalAlign, FontConfigs, FontVariation, LineSpacingOptions, ShaderStyle, StrokeJoinStyle  } from './textCommon';
import { memo, ComponentBuilder } from './../stateManagement/runtime';
import { TextDirection, SuperscriptStyle, TextVerticalAlign, FontConfigs, ShaderStyle, FontVariation, StrokeJoinStyle } from './textCommon';
/**
 * 属性字符串自定义序列化对象类型，需要开发者定义序列化和反序列化的方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type StyledStringMarshallingValue = UserDataSpan;
/**
 * 属性字符串序列化回调类型。
 *
 * @param { StyledStringMarshallingValue } marshallableVal - 属性字符串序列化对象。
 * @returns { ArrayBuffer } [StyledStringMarshallingValue]{@link styledstringmarshallingvalue}序列化后的数据。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type StyledStringMarshallCallback = (marshallableVal: StyledStringMarshallingValue) => ArrayBuffer;
/**
 * 反序列化后得到属性字符串，通过定义回调来反序列化[StyledStringMarshallingValue]{@link styledstringmarshallingvalue}。
 *
 * @param { ArrayBuffer } buf - [StyledStringMarshallingValue]{@link styledstringmarshallingvalue}序列化后的数据。
 * @returns { StyledStringMarshallingValue } 反序列化得到的[StyledStringMarshallingValue]{@link styledstringmarshallingvalue}。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type StyledStringUnmarshallCallback = (buf: ArrayBuffer) => StyledStringMarshallingValue;
/**
 * 文本装饰线样式的额外配置选项对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DecorationOptions {
  /**
   * 是否开启多装饰线显示。
   *
   * 默认值：undefined。设置为true开启，设置为false/undefined关闭。
   *
   * 所有需要显示的装饰线都必须启用此选项，在这些装饰线的交集区域显示多装饰线效果，样式、颜色和粗细将采用最后设置的装饰线的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableMultiType?: boolean;
}
/**
 * 属性字符串
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class StyledString {
  /**
   * 属性字符串的构造函数。
   *
   * @param { string | ImageAttachment | CustomSpan } value - 属性字符串文本内容。<br/>**说明：** <br/>当value的类型为ImageAttachment或
   *     CustomSpan时，styles参数不生效。<br/>需要设置styles时，通过[setStyle]{@link MutableStyledString#setStyle}等方法实现。
   * @param { Array<StyleOptions> } [styles] - 属性字符串初始化选项。<br/>**说明：** <br/>start为异常值时，按默认值0处理；<br/>当length为异常值时，
   *     length等于属性字符串在start后的实际长度；<br/>当StyledStringKey与StyledStringValue不匹配时，styles不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>);
  /**
   * 获取属性字符串内容长度。
   *
   * @returns { int } - 属性字符串内容长度。<br/>**说明：** <br/>当属性字符串中包含图片或[CustomSpan](#customspan)时，长度都计为1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get length(): int;
  /**
   * 获取字符串信息。
   *
   * @returns { string } - 属性字符串文本内容。<br/>**说明：** <br/>当属性字符串中包含图片或[CustomSpan]{@link CustomSpan}时，其返回的结果用空格表示。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getString(): string;
  /**
   * 获取指定范围属性字符串的样式集合。不能超出属性字符串的长度。
   *
   * 该接口仅返回开发者设置的样式。
   *
   * @param { int } start - 指定范围属性字符串的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围属性字符串的长度。<br/>取值范围：大于等于0。
   * @param { StyledStringKey } [styledKey] - 指定范围属性字符串样式的枚举值。<br/>**说明：** <br/>当不传入该参数时默认获取开发者设置的
   *     [StyledStringKey]{@link StyledStringKey}所有枚举值样式。
   * @returns { Array<SpanStyle> | undefined }
   各样式对象的数组。<br/>**说明：** <br/>当指定范围属性字符串未设置任何样式，则返回空数组。<br/>当start和length越
   *     界或者必填传入undefined时，会抛出异常；<br/>当styledKey传入异常值或undefined时，会抛出异常。<br/>当styledKey为CustomSpan时，返回的是创建CustomSpan时传入
   *     的样式对象，即修改该样式对象也会影响实际的显示效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStyles(start: int, length: int, styledKey?: StyledStringKey): Array<SpanStyle> | undefined;
  /**
   * 判断两个属性字符串是否相等。
   *
   * @param { StyledString } other - StyledString类型的比较对象。
   * @returns { boolean }
   两个属性字符串是否相等。<br/>true表示相等，false表示不相等。<br/>**说明：** <br/>当属性字符串的文本及样式均一致，视为相等。<br/>不比较
   *     [GestureStyle]{@link GestureStyle}，当属性字符串配置了不同事件，文本和其他样式相同时，亦视为相等。<br/>当比较[CustomSpan]{@link CustomSpan}或
   *     [LeadingMarginSpan]{@link LeadingMarginSpan}时，比较的是地址，地址相等，视为相等。
   * @stagemodelonly
   * @since 23 static
   */
  equals(other: StyledString): boolean;
  /**
   * 获取属性字符串的子属性字符串。不能超出属性字符串的长度。
   *
   * @param { int } start - 子属性字符串开始位置的下标。<br/>取值范围：大于等于0。
   * @param { int } [length] - 子属性字符串的长度。<br/>取值范围：大于等于0。
   * @returns { StyledString | undefined }
   子属性字符串。<br/>**说明：** <br/>当start为合法入参时，length的默认值是被查询属性字符串对象的长度与start的值的差。<
   *     br/>当start和length越界或者必填传入undefined时，会抛出异常。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  subStyledString(start: int, length?: int): StyledString | undefined;
  /**
   * 将HTML格式字符串转换成属性字符串，使用Promise异步回调。当前支持转换的HTML标签范围：\<p>、\<span>、\<img>、\
   *
   * 、\<strong>、\<b>、\<a>、\<i>、\<em>、\<s>、\<u>、\<del>、\<sup>、\<sub>、\<cite>、\<dfn>、\<small>、\<h1>、\<h2>、\<h3>、\<h4>、\<
   * h5>、\<h6>、\、\、\<li>。支持将标签中的style属性样式转换成对应的属性字符串样式。
   *
   * 使用方法参考
   * [示例12（fromHtml和toHtml互相转换）](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例12fromhtml和tohtml互相转换)
   * 和[示例18（fromHtml转换）](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例18fromhtml转换)。
   *
   * | 标签名称 | 说明                   |
   * | ------------- | ---------------------------- |
   * | \<p\>       | 段落，分隔文本段落。       |
   * | \<span\>    | 行内文本，支持样式设置。API version 17及之前，\<span\>设置的background-color属性转换不生效。     |
   * | \<img\>     | 插入图片。                   |
   * | \<strong\>  | 加粗文本。                   |
   * | &lt;br&gt;<sup>20+</sup>      | 换行。                       |
   * | \<b\><sup>20+</sup>       | 加粗文本。                   |
   * | \<a\><sup>20+</sup>       | 超链接。                     |
   * | \<i\><sup>20+</sup>       | 斜体文本。                   |
   * | \<em\><sup>20+</sup>      | 斜体文本。                   |
   * | \<s\><sup>20+</sup>       | 删除线（中划线）。            |
   * | \<u\><sup>20+</sup>       | 下划线。                     |
   * | \<del\><sup>20+</sup>     | 删除线（中划线）。            |
   * | \<sup\><sup>20+</sup>     | 上标文本。                   |
   * | \<sub\><sup>20+</sup>     | 下标文本。                   |
   * | \<cite\>    | 斜体文本。        |
   * | \<dfn\>     | 斜体文本。        |
   * | \<small\>   | 缩小字号标签。字号缩放为父容器字号属性的0.8倍，支持嵌套叠加。        |
   * | \<h1\>      | 一级标题。        |
   * | \<h2\>      | 二级标题。        |
   * | \<h3\>      | 三级标题。        |
   * | \<h4\>      | 四级标题。        |
   * | \<h5\>      | 五级标题。        |
   * | \<h6\>      | 六级标题。        |
   * | \<ol\>      | 有序列表。        |
   * | \<ul\>      | 无序列表。        |
   * | \<li\>      | 列表项。          |
   *
   * @param { string } html - html格式的字符串。
   * @returns { Promise<StyledString | undefined> }
      *     [Promise](docroot://arkts-utils/async-concurrency-overview.md#promise)对象，属性字符串。
   * @throws { BusinessError } 170001 - Convert Error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static fromHtml(html: string): Promise<StyledString | undefined>;
  /**
   * 将属性字符串转换成HTML格式字符串。支持转换的属性字符串[StyledStringKey]{@link StyledStringKey}包括：StyledStringKey.FONT、
   * StyledStringKey.DECORATION、StyledStringKey.LETTER_SPACING、StyledStringKey.TEXT_SHADOW、StyledStringKey.LINE_HEIGHT
   * 、StyledStringKey.IMAGE。
   *
   * 使用方法参考
   * [示例12（fromHtml和toHtml互相转换）](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例12fromhtml和tohtml互相转换)。
   *
   * @param { StyledString } styledString - 属性字符串。
   * @returns { string } HTML格式字符串。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static toHtml(styledString: StyledString): string;
  /**
   * 序列化属性字符串，通过定义回调来序列化属性字符串的[StyledStringMarshallingValue]{@link styledstringmarshallingvalue}。
   *
   * @param { StyledString } styledString - 属性字符串参数。
   * @param { StyledStringMarshallCallback } callback - 如何序列化[StyledStringMarshallingValue]{@link styledstringmarshallingvalue}的回调。
   * @returns { ArrayBuffer | undefined }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  static marshalling(styledString: StyledString, callback: StyledStringMarshallCallback):
        ArrayBuffer | undefined;
  /**
   * 反序列化后得到属性字符串，通过定义回调来反序列化[StyledStringMarshallingValue]{@link styledstringmarshallingvalue}。
   *
   * @param { ArrayBuffer } buffer - 属性字符串序列化后的数据。
   * @param { StyledStringUnmarshallCallback } callback - 如何反序列化ArrayBuffer的回调。
   * @returns { Promise<StyledString | undefined> }
      * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 170002 - Styled string decode error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  static unmarshalling(buffer: ArrayBuffer, callback: StyledStringUnmarshallCallback):
        Promise<StyledString | undefined>;
  /**
   * 序列化属性字符串。
   *
   * @param { StyledString } styledString - 属性字符串参数。
   * @returns { ArrayBuffer | undefined }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  static marshalling(styledString: StyledString): ArrayBuffer | undefined;
  /**
   * 反序列化后得到属性字符串。
   *
   * @param { ArrayBuffer } buffer - 属性字符串序列化后的数据。
   * @returns { Promise<StyledString | undefined> }
      * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 170002 - Styled string decode error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  static unmarshalling(buffer: ArrayBuffer): Promise<StyledString | undefined>;
}
/**
 * 属性字符串初始化选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StyleOptions {
  /**
   * 设置属性字符串样式的开始位置。
   *
   * 当start的值小于0或超出字符串长度时，按0处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: int;
  /**
   * 设置属性字符串样式的长度。
   *
   * 当length的值小于0或超出字符串长度与start的差值时，按字符串长度与start的差值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  length?: int;
  /**
   * 样式类型的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  styledKey: StyledStringKey;
  /**
   * 样式对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  styledValue: StyledStringValue;
}
/**
 * SpanStyle
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SpanStyle {
  /**
   * 匹配属性字符串样式的开始位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start: int;
  /**
   * 设置属性字符串样式的长度。
   *
   * 当length的值小于0或超出字符串长度与start的差值时，按字符串长度与start的差值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  length: int;
  /**
   * 样式类型的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  styledKey: StyledStringKey;
  /**
   * 样式对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  styledValue: StyledStringValue;
}

/**
 * 自定义绘制信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface LeadingMarginSpanDrawInfo {
  /**
   * 当前行相对于组件的水平偏移。direction为RTL时，返回当前行右侧与组件右边缘的距离。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  x: double;

  /**
   * 行顶与组件上边缘的距离。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  top: double;

  /**
   * 行底与组件上边缘的距离。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  bottom: double;

  /**
   * 当前行的基线与组件上边缘的距离。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  baseline: double;

  /**
   * 文本内容的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  direction: TextDirection;

  /**
   * 当前行的起始索引。
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  start: int;

  /**
   * 当前行的结束索引。
   *
   * 取值范围：大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  end: int;

  /**
   * 当前行是否是段落的首行。
   *
   * true：首行；false：非首行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  first: boolean;
}

/**
 * 文本字体样式对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextStyle {
  /**
   * 文本字体样式的构造函数。
   *
   * @param { TextStyleInterface } [value] - 字体样式设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value?: TextStyleInterface);
  /**
   * 获取属性字符串的文本颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontColor?: ResourceColor;
  /**
   * 获取属性字符串的文本字体。
   *
   * 默认返回undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontFamily?: string;
  /**
   * 获取属性字符串的文本字体大小。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontSize?: double;
  /**
   * 获取属性字符串的文本字体粗细。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontWeight?: int;
  /**
   * 获取属性字符串的文本字体样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontStyle?: FontStyle;
  /**
   * 获取属性字符串的文本上下角标。
   *
   * 默认值：SuperscriptStyle.NORMAL。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly superscript?: SuperscriptStyle;
  /**
   * 获取属性字符串的文本描边宽度。
   *
   * 默认返回0，单位为[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly strokeWidth?: double;
  /**
   * 获取属性字符串的文本描边颜色。
   *
   * 默认返回字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly strokeColor?: ResourceColor;
  /**
   * 获取属性字符串的字体配置。
   *
   * 默认返回undefined，表示未设置fontConfigs。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly fontConfigs?: FontConfigs;

  /**
   * 获取可变字体的属性数组。
   *
   * 默认值：undefined，表示未设置可变字体的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly fontVariations?: Array<FontVariation>;

  /**
   * 获取属性字符串的文本描边拐角样式。
   *
   * 默认值：StrokeJoinStyle.MITER_JOIN。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly strokeJoinStyle?: StrokeJoinStyle;
}
/**
 * TextStyleInterface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextStyleInterface {
  /**
   * 字体颜色。
   *
   * 默认为主题色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;
  /**
   * 文本字体。
   *
   * 默认为主题字体。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFamily?: ResourceStr;
  /**
   * 字体大小。
   *
   * 默认字体大小为16fp。
   *
   * 如果LengthMetrics的unit值是PERCENT，当前设置不生效，处理为16fp。
   *
   * 单位：[fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: LengthMetrics;
  /**
   * 字体粗细。
   *
   * number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"
   * regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight?: int | FontWeight | string;
  /**
   * 字体样式。
   *
   * 默认值：FontStyle.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontStyle?: FontStyle;
  /**
   * 文本上下角标。
   *
   * 默认值：SuperscriptStyle.NORMAL
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  superscript?: SuperscriptStyle;
  /**
   * 文本描边宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，处理为0。
   *
   * 设置值小于0时为实心字，大于0时为空心字。
   *
   * 默认值为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  strokeWidth?: LengthMetrics;
  /**
   * 文本描边颜色。
   *
   * 默认值为字体颜色，设置异常值时取字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  strokeColor?: ResourceColor;
  /**
   * 字体配置。默认值继承[FontConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontconfigs24)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fontConfigs?: FontConfigs;

  /**
   * 可变字体的属性。
   *
   * 默认值：undefined，表示未设置可变字体的属性。
   *
   * fontVariations属性的优先级高于fontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fontVariations?: Array<FontVariation>;

  /**
   * 文本描边拐角样式。
   *
   * 默认值：StrokeJoinStyle.MITER_JOIN。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  strokeJoinStyle?: StrokeJoinStyle;
}
/**
 * 文本装饰线样式对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DecorationStyle {
  /**
   * 文本装饰线样式的构造函数。
   *
   * @param { DecorationStyleInterface } value - 文本装饰线设置项。<br/>默认值：<br/>{<br/> type: TextDecorationType.None,<br/>
   *     color: Color.Black,<br/> style: TextDecorationStyle.SOLID <br/>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: DecorationStyleInterface);
  /**
   * 文本装饰线样式的构造函数，包含额外配置选项。
   *
   * @param { DecorationStyleInterface } value - 文本装饰线设置项。<br/>默认值：<br/>{<br/> type: TextDecorationType.None,<br/>
   *     color: Color.Black,<br/> style: TextDecorationStyle.SOLID, <br/> thicknessScale: 1.0<br/>}
   * @param { DecorationOptions } [options] - 文本装饰线额外配置选项。<br/>默认值：<br/>{<br/> enableMultiType: undefined<br/>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(value: DecorationStyleInterface, options?: DecorationOptions);
  /**
   * 获取属性字符串的文本装饰线类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly type: TextDecorationType;
  /**
   * 获取属性字符串的文本装饰线颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly color?: ResourceColor;
  /**
   * 获取属性字符串的文本装饰线样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly style?: TextDecorationStyle;
  /**
   * 获取属性字符串的文本装饰线粗细缩放值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly thicknessScale?: double;

  /**
   * 获取属性字符串的文本装饰线样式的额外配置选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly options?: DecorationOptions;
}
/**
 * 文本装饰线样式接口对象说明。
 *
 * > **说明：**
 * >
 * > 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。
 * >
 * > 当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DecorationStyleInterface {
  /**
   * 装饰线类型。
   *
   * 默认值：TextDecorationType.None
   *
   * 取值undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: TextDecorationType | undefined;
  /**
   * 装饰线颜色。
   *
   * 默认值：Color.Black
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
  /**
   * 装饰线样式。
   *
   * 默认值：TextDecorationStyle.SOLID
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: TextDecorationStyle;
  /**
   * 装饰线粗细缩放。
   *
   * 默认值：1.0
   *
   * 取值范围：[0, +∞)
   *
   * **说明：** 负值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  thicknessScale?: double;
}
/**
 * 文本基线偏移量对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BaselineOffsetStyle {
  /**
   * 文本基线偏移的构造函数。
   *
   * @param { LengthMetrics } value - 文本基线偏移量设置项。如果LengthMetrics的unit值是PERCENT，该设置不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: LengthMetrics);
  /**
   * 获取属性字符串的文本基线偏移量。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly baselineOffset: double;
}
/**
 * 文本字符间距对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LetterSpacingStyle {
  /**
   * 文本字符间距的构造函数。
   *
   * @param { LengthMetrics } value - 文本字符间距设置项。如果LengthMetrics的unit值是PERCENT，该设置不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: LengthMetrics);
  /**
   * 获取属性字符串的文本字符间距。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly letterSpacing: double;
}
/**
 * 文本阴影对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextShadowStyle {
  /**
   * 文本阴影对象的构造函数。
   *
   * ShadowOptions对象中不支持fill字段。
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - 文本阴影设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: ShadowOptions | Array<ShadowOptions>);
  /**
   * 获取属性字符串的文本阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly textShadow: Array<ShadowOptions>;
}
/**
 * 文本背景颜色对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BackgroundColorStyle {
  /**
   * 文本背景颜色的构造函数。
   *
   * @param { TextBackgroundStyle } textBackgroundStyle - 文本背景色设置项。<br />默认值：<br />{<br />  color: Color.Transparent,<
   *     br />  radius: 0<br />}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(textBackgroundStyle: TextBackgroundStyle);
  /**
   * 获取属性字符串的文本背景颜色。
   *
   * 默认值：
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
   * @since 23 static
   */
  readonly textBackgroundStyle: TextBackgroundStyle;
}
/**
 * 事件手势对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class GestureStyle {
  /**
   * 事件手势的构造函数。
   *
   * @param { GestureStyleInterface } [value] - 事件手势设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value?: GestureStyleInterface);
}
/**
 * Defines the Gesture Events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GestureStyleInterface {
  /**
   * 设置点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClick?: Callback<ClickEvent>;
  /**
   * 设置长按事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onLongPress?: Callback<GestureEvent>;
  /**
   * 设置触摸事件。
   *
   * 取值为undefined时，不使用回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onTouch?: Callback<TouchEvent>;
}
/**
 * 文本段落样式对象说明。
 *
 * 除首个段落外，后续段落按'\n'划分。
 *
 * 每个段落的段落样式按首个占位设置的段落样式生效，未设置时，段落按被绑定组件的段落样式生效。
 *
 * 在API版本26.0.0之前，如果属性字符串段落内首个占位为[CustomSpan]{@link CustomSpan}或[ImageAttachment]{@link ImageAttachment}时，设置在该段落上的段落样式不生
 * 效。从API版本26.0.0开始，设置段落样式生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ParagraphStyle {
  /**
   * 文本段落样式的构造函数。
   *
   * @param { ParagraphStyleInterface } [value] - 段落样式设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value?: ParagraphStyleInterface);
  /**
   * 获取属性字符串文本段落在水平方向的对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly textAlign?: TextAlign;
  /**
   * 获取属性字符串文本段落在垂直方向的对齐方式。
   *
   * 一个段落下使用同一字号必须同时设置行高[lineHeight](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#lineheight)或者
   * 同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的排版效果。属性字符串[TextStyle]{@link TextStyle}中的SuperscriptStyle上下角标样式仅在
   * [TextVerticalAlign](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#textverticalalign20)属性值为
   * TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  readonly textVerticalAlign?: TextVerticalAlign;
  /**
   * 获取属性字符串文本段落的首行文本缩进。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly textIndent?: double;
  /**
   * 获取属性字符串文本段落的最大行数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly maxLines?: int;
  /**
   * 获取属性字符串文本段落超长时的显示方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly overflow?: TextOverflow;
  /**
   * 获取属性字符串文本段落的断行规则。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly wordBreak?: WordBreak;
  /**
   * 获取属性字符串文本段落的缩进。
   *
   * 返回为number或double类型时，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly leadingMargin?: double | LeadingMarginPlaceholder;
  /**
   * 获取属性字符串文本段落的段落间距。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly paragraphSpacing?: double;

  /**
   * 获取属性字符串文本段落的自定义缩进信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  readonly leadingMarginSpan?: LeadingMarginSpan;

  /**
   * 获取文本方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly textDirection?: TextDirection;

  /**
   * 获取文本着色器效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly shaderStyle?: ShaderStyle;

  /**
   * 获取属性字符串文本段落的文本尾部缩进距离。
   *
   * 单位：vp
   *
   * 取值范围：[0, INT32_MAX]
   *
   * 值为0时不做尾部缩进。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly tailIndents?: Array<double>;
}
/**
 * 段落样式
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ParagraphStyleInterface {
  /**
   * 设置文本段落在水平方向的对齐方式。
   *
   * 默认值：TextAlign.Start
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  textVerticalAlign?: TextVerticalAlign;
  /**
   * 设置文本段落的首行文本缩进。不支持百分比。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textIndent?: LengthMetrics;
  /**
   * 设置文本段落的最大行数，默认不限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxLines?: int;
  /**
   * 设置文本段落超长时的显示方式。
   *
   * 默认值：TextOverflow.None
   *
   * 需配合maxLines使用，单独设置不生效。不支持TextOverflow.MARQUEE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflow?: TextOverflow;
  /**
   * 设置文本段落的断行规则。
   *
   * 默认值：WordBreak.NORMAL
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  wordBreak?: WordBreak;
  /**
   * 设置文本段落的缩进。不支持百分比。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  leadingMargin?: LengthMetrics | LeadingMarginPlaceholder;
  /**
   * 设置文本段落的段落间距。
   *
   * 段落间距默认大小为0。不支持百分比。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  paragraphSpacing?: LengthMetrics;
  /**
   * 设置文本段落的自定义缩进。不支持百分比。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  leadingMarginSpan?: LeadingMarginSpan;
  /**
   * 设置文本方向。
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
   * 该接口与[TextStyleInterface]{@link TextStyleInterface}的strokeWidth同时设置时，该接口不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  shaderStyle?: ShaderStyle;

  /**
   * 设置文本段落的文本尾部缩进。当提供一个单独的LengthMetrics值时，所有行共享相同的尾部缩进；当提供一个数组时，第i个元素指定第i行的尾部缩进；如果文本行数超过数组长度，则数组中的最后一个元素将用于剩余的行。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  tailIndents?: LengthMetrics | Array<LengthMetrics>;
}
/**
 * 文本行高对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LineHeightStyle {
  /**
   * 文本行高的构造函数。
   *
   * @param { LengthMetrics } lineHeight - 文本行高设置项。LengthMetrics的value值大于0时，文本行高设置生效，否则文本行高自适应字体大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(lineHeight: LengthMetrics);

  /**
   * 文本行高及倍数的构造函数。
   *
   * > **说明：**
   * >
   * > - lineHeightMultiple与lineHeight或
   * > [LineSpacingStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#linespacingstyle)同时设置
   * > 时，仅lineHeightMultiple生效，行高为该行最高字体高度与倍数的乘积。
   * >
   * > - lineHeightMultiple小于0或undefined时不生效，使用lineHeight和
   * > [LineSpacingStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#linespacingstyle)设置行高和
   * > 行间距。
   * >
   * > - lineHeightMultiple等于0时等效于设置为1。
   *
   * @param { LengthMetrics } lineHeight - 文本行高设置项。LengthMetrics的value值大于0时，文本行高设置生效，否则文本行高自适应字体大小。
   * @param { double } lineHeightMultiple - 文本行高的倍数值。<br/>取值范围：[0, +∞)，支持小数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(lineHeight: LengthMetrics, lineHeightMultiple: double);
  /**
   * 获取属性字符串的文本行高。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly lineHeight: double;

  /**
   * 文本行高的倍数值。实际生效的行高为该行最高的字体高度与倍数的乘积。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly lineHeightMultiple?: double;
}

/**
 * 文本行间距对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class LineSpacingStyle {
  /**
   * 文本行间距的构造函数。
   *
   * @param { LengthMetrics } lineSpacing - 文本的行间距。<br/>默认值：0.0<br/>取值范围：
   *     [0, +∞)<br/>**说明：** LengthMetrics的value值小于0时，取默认值0.0。
   * @param { LineSpacingOptions } [options] - 行间距的配置项。<br/>默认值：{ onlyBetweenLines: false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(lineSpacing: LengthMetrics, options?: LineSpacingOptions);

  /**
   * 文本行间距。
   *
   * 取值范围：[0, +∞)
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly lineSpacing: double;

  /**
   * 行间距配置项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly options?: LineSpacingOptions;
}

/**
 * 超链接对象说明。
 *
 * 默认颜色、字号、字重分别是'#ff0a59f7'、'16fp'、'FontWeight.Regular'，若属性字符串设置TextStyle，则TextStyle优先级更高。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UrlStyle {
  /**
   * 超链接对象的构造函数。
   *
   * @param { string } url - 超链接设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(url: string);
  /**
   * 获取属性字符串的超链接内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly url: string;
}
/**
 * 样式对象类型，用于设置属性字符串的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type StyledStringValue = TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle | TextShadowStyle | GestureStyle | ImageAttachment | ParagraphStyle | LineHeightStyle | UrlStyle | CustomSpan | UserDataSpan | BackgroundColorStyle | LineSpacingStyle;
/**
 * 继承于[StyledString]{@link StyledString}类。
 *
 * > **以下接口异常入参处理统一说明：**
 * >
 * > 当start和length越界或者必填传入undefined时，会抛出异常；
 * >
 * > 当styledKey和styledValue传入异常值或者两者对应关系不匹配时，会抛出异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MutableStyledString extends StyledString {
  /**
   * 可变属性字符串的构造函数。
   *
   * @param { string | ImageAttachment | CustomSpan } value - 属性字符串文本内容。<br/>**说明：** <br/>当value的类型为ImageAttachment或
   *     CustomSpan时，styles参数不生效。<br/>需要设置styles时，通过[setStyle]{@link MutableStyledString#setStyle}等方法实现。
   * @param { Array<StyleOptions> } [styles] - 属性字符串初始化选项。<br/>**说明：** <br/>start为异常值时，按默认值0处理；<br/>当length为异常值时，
   *     length等于属性字符串在start后的实际长度；<br/>当StyledStringKey与StyledStringValue不匹配时，styles不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>);
  /**
   * 替换指定范围的字符串。
   *
   * @param { int } start - 指定范围的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围的长度。<br/>取值范围：大于等于0。
   * @param { string } other - 替换的新文本内容。<br/>**说明：** <br/>替换的字符串使用的是start位置字符的样式。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceString(start: int, length: int, other: string): void;
  /**
   * 插入字符串。
   *
   * @param { int } start - 插入位置的下标。<br/>取值范围：大于等于0。
   * @param { string } other - 插入的新文本内容。<br/>**说明：** <br/>插入的字符串使用的是start-1位置字符的样式。若start-1位置字符未设置样式，则使用start位置字符样式。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertString(start: int, other: string): void;
  /**
   * 移除指定范围的字符串。
   *
   * 当属性字符串中包含图片或[CustomSpan]{@link CustomSpan}时，同样生效。
   *
   * @param { int } start - 指定范围的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围的长度。<br/>取值范围：大于等于0。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeString(start: int, length: int): void;
  /**
   * 替换指定范围内容为指定类型新样式。
   *
   * @param { SpanStyle } spanStyle - 样式对象。<br/>**说明：** <br/>默认清空原有样式，替换为新样式。<br/>当SpanStyle的styledKey为IMAGE或
   *     CUSTOM_SPAN时，只有当start的位置当前是image或CustomSpan且长度为1，才会生效，其余情况无效果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceStyle(spanStyle: SpanStyle): void;
  /**
   * 为指定范围内容设置指定类型新样式。
   *
   * @param { SpanStyle } spanStyle - 样式对象。<br/>默认不清空原有样式，叠加新样式。如果StyledStringValue类型相同，则新样式将覆盖旧样式。<br/>当SpanStyle的
   *     styledKey为IMAGE或CUSTOM_SPAN时，只有当start的位置当前是image或CustomSpan且长度为1，才会生效，其余情况无效果。
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setStyle(spanStyle: SpanStyle): void;
  /**
   * 清除指定范围内容的指定类型样式。
   *
   * 被清空样式类型对象属性使用的是对应[Text](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md)组件属性的设置值，若Text组件未设置值，
   * 则使用对应Text组件属性的默认值。
   *
   * 当属性字符串中包含图片时，同样生效。
   *
   * @param { int } start - 指定范围开始位置的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围的长度。<br/>取值范围：大于等于0。
   * @param { StyledStringKey } styledKey - 样式类型枚举值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeStyle(start: int, length: int, styledKey: StyledStringKey): void;
  /**
   * 清除指定范围内容的所有样式。
   *
   * 被清空样式类型对象属性使用的是对应[Text](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md)组件属性的设置值，若Text组件未设置值，
   * 则使用对应Text组件属性的默认值。
   *
   * 当属性字符串中包含图片时，同样生效。
   *
   * @param { int } start - 指定范围开始位置的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围的长度。<br/>取值范围：大于等于0。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeStyles(start: int, length: int): void;
  /**
   * 清除属性字符串对象的所有样式。
   *
   * 被清空样式类型对象属性使用的是对应[Text](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md)组件属性的设置值，若Text组件未设置值，
   * 则使用对应Text组件属性的默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearStyles(): void;
  /**
   * 替换指定范围为新的属性字符串。
   *
   * @param { int } start - 指定范围开始位置的下标。<br/>取值范围：大于等于0。
   * @param { int } length - 指定范围的长度。<br/>取值范围：大于等于0。
   * @param { StyledString } other - 新的属性字符串对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceStyledString(start: int, length: int, other: StyledString): void;
  /**
   * 在指定位置插入新的属性字符串。
   *
   * @param { int } start - 开始插入位置的下标。<br/>取值范围：大于等于0。
   * @param { StyledString } other - 新的属性字符串对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertStyledString(start: int, other: StyledString): void;
  /**
   * 在末尾位置追加新的属性字符串。
   *
   * @param { StyledString } other - 新的属性字符串对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  appendStyledString(other: StyledString): void;
}
/**
 * 范围属性字符串样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum StyledStringKey {
  /**
   * 字体样式键。[TextStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#textstyle)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FONT = 0,
  /**
   * 文本装饰线样式键。[DecorationStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#decorationstyle)
   * 所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DECORATION = 1,
  /**
   * 文本基线偏移量样式键。
   * [BaselineOffsetStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#baselineoffsetstyle)所
   * 属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BASELINE_OFFSET = 2,
  /**
   * 文本字符间距样式键。
   * [LetterSpacingStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#letterspacingstyle)所属
   * 键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LETTER_SPACING = 3,
  /**
   * 文本阴影样式键。[TextShadowStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#textshadowstyle)所
   * 属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT_SHADOW = 4,
  /**
   * 文本行高样式键。[LineHeightStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#lineheightstyle)所
   * 属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINE_HEIGHT = 5,
  /**
   * 文本背景色样式键。
   * [BackgroundColorStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#backgroundcolorstyle14)
   * 所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BACKGROUND_COLOR = 6,
  /**
   * 超链接样式键。[UrlStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#urlstyle14)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  URL = 7,
  /**
   * 文本行间距样式键。
   * [LineSpacingStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#linespacingstyle)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LINE_SPACING = 8,
  /**
   * 事件手势键。[GestureStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#gesturestyle)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  GESTURE = 100,
  /**
   * 段落样式键。[ParagraphStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#paragraphstyle)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PARAGRAPH_STYLE = 200,
  /**
   * 图片键。[ImageAttachment](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#imageattachment)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IMAGE = 300,
  /**
   * 自定义绘制Span键。[CustomSpan](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#customspan)所属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CUSTOM_SPAN = 400,
  /**
   * UserDataSpan键。[UserDataSpan](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#userdataspan)所
   * 属键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  USER_DATA = 500
}
/**
 * 图片对象说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ImageAttachment {
  /**
   * 图片对象的构造函数。
   *
   * @param { AttachmentType | undefined } value - PixelMap类型或
   *     [ResourceStr](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcestr)类型图片设置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: AttachmentType | undefined);
  /**
   * 获取属性字符串的图片数据源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly value: PixelMap;
  /**
   * 获取属性字符串的图片资源路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly resourceValue?: string;
  /**
   * 获取属性字符串的图片尺寸。
   *
   * 返回number类型值的单位为`px`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly size?: SizeOptions;
  /**
   * 获取属性字符串的图片尺寸。
   *
   * 返回number类型值的单位为`vp`。
   *
   * 当ImageAttachment尺寸设置为负数值或undefined时，返回为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  readonly sizeInVp?: SizeOptions;
  /**
   * 获取属性字符串的图片对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly verticalAlign?: ImageSpanAlignment;
  /**
   * 获取属性字符串的图片缩放类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly objectFit?: ImageFit;
  /**
   * 获取属性字符串的图片布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly layoutStyle?: ImageAttachmentLayoutStyle;
  /**
   * 获取属性字符串的图片颜色滤镜效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly colorFilter?: ColorFilterType;

  /**
   * 获取属性字符串是否开启[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。
   *
   * true：支持SVG解析新能力；false：保持原有SVG解析能力。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  readonly supportSvg2?: boolean;
}
/**
 * ResourceStr类型图片设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ResourceImageAttachmentOptions {
  /**
   * 设置图片数据源。
   *
   * 取值为undefined时，按空处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resourceValue: ResourceStr | undefined;
  /**
   * 设置图片大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size?: SizeOptions;
  /**
   * 设置图片基于文本的对齐方式。
   *
   * 默认值：ImageSpanAlignment.BOTTOM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  verticalAlign?: ImageSpanAlignment;
  /**
   * 设置图片的缩放类型，当前枚举类型不支持ImageFit.MATRIX。
   *
   * 默认值：ImageFit.Cover
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  objectFit?: ImageFit;
  /**
   * 设置图片布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutStyle?: ImageAttachmentLayoutStyle;
  /**
   * 设置属性字符串的图片颜色滤镜效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colorFilter?: ColorFilterType;
  /**
   * 控制是否开启[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。
   *
   * true：支持SVG解析新能力；false：保持原有SVG解析能力。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  supportSvg2?: boolean;
  /**
   * 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。
   *
   * true：同步加载；false：异步加载。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  syncLoad?: boolean;
}
/**
 * Defines the ImageAttachmentInterface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageAttachmentInterface {
  /**
   * 设置图片数据源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: PixelMap;
  /**
   * 设置图片大小，不支持百分比。
   *
   * size的默认值与objectFit的值有关，不同的objectFit的值对应size的默认值不同。比如当objectFit的值为Cover时，图片高度为组件高度减去组件上下的内边距，图片宽度为组件宽度减去组件左右的内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size?: SizeOptions;
  /**
   * 设置图片基于文本的对齐方式。
   *
   * 默认值：ImageSpanAlignment.BOTTOM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  verticalAlign?: ImageSpanAlignment;
  /**
   * 设置图片的缩放类型，当前枚举类型不支持ImageFit.MATRIX。
   *
   * 默认值：ImageFit.Cover
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  objectFit?: ImageFit;
  /**
   * 设置图片布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutStyle?: ImageAttachmentLayoutStyle;
  /**
   * 设置属性字符串的图片颜色滤镜效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colorFilter?: ColorFilterType;
}
/**
 * 图片设置项类型，用于设置属性字符串PixelMap类型或[ResourceStr](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcestr)类型图片。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AttachmentType = ImageAttachmentInterface | ResourceImageAttachmentOptions;
/**
 * 图片颜色滤镜设置项类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ColorFilterType = ColorFilter | DrawingColorFilter;
/**
 * 定义ImageAttachment布局样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageAttachmentLayoutStyle {
  /**
   * 设置图片外边距。
   *
   * 默认值：0
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: LengthMetrics | Margin;
  /**
   * 设置图片内边距。
   *
   * 默认值：0
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  padding?: LengthMetrics | Padding;
  /**
   * 设置圆角。
   *
   * 默认值：0
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: LengthMetrics | BorderRadiuses;
}
/**
 * 定义CustomSpanMetrics接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomSpanMetrics {
  /**
   * 自定义绘制Span的宽。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: double;
  /**
   * 自定义绘制Span的高。
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: double;
}
/**
 * 定义CustomSpanDrawInfo接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomSpanDrawInfo {
  /**
   * 自定义绘制Span相对于挂载组件的偏移。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: double;
  /**
   * 自定义绘制Span相对于Text组件的上边距。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lineTop: double;
  /**
   * 自定义绘制Span相对于Text组件的下边距。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lineBottom: double;
  /**
   * 自定义绘制Span的所在行的基线偏移量。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  baseline: double;
}
/**
 * 定义CustomSpanMeasureInfo接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomSpanMeasureInfo {
  /**
   * 设置文本字体大小。
   *
   * 单位：[fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize: double;
  /**
   * 自定义Span的最大宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maxWidth?: double;
  /**
   * 自定义Span的布局策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  layoutPolicy?: LayoutPolicy;
}
/**
 * 自定义绘制Span，仅提供基类，具体实现由开发者定义。
 *
 * 自定义绘制Span拖拽显示的缩略图为空白。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class CustomSpan {
  /**
   * 获取自定义绘制Span的尺寸大小。
   *
   * @param { CustomSpanMeasureInfo } measureInfo
   * @returns { CustomSpanMetrics } - 自定义绘制Span的尺寸信息。<br/>**说明：** <br/>最终的CustomSpan的高度是由当前Text组件的行高所决定的。当height不传值，则默认取
   *     Text组件的fontSize的值作为CustomSpan的高度；当height大于当前行的其他子组件的高度时，此时height即为Text组件的行高。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics;
  /**
   * 绘制自定义绘制Span。
   *
   * @param { DrawContext } context
   * @param { CustomSpanDrawInfo } drawInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract onDraw(context: DrawContext, drawInfo: CustomSpanDrawInfo): void;
  /**
   * 主动刷新使用CustomSpan的Text组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidate(): void;
}
/**
 * 支持存储自定义扩展信息，用于存储和获取用户数据，仅提供基类，具体实现由开发者定义。
 *
 * 扩展信息不影响实际显示效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class UserDataSpan {}

/**
 * 文本段落的自定义缩进，仅提供基类，具体实现由开发者定义。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare abstract class LeadingMarginSpan {
  /**
   * 绘制自定义图案。段落中的每一行文本都会触发一次onDraw。
   *
   * @param { DrawContext } context
   * @param { LeadingMarginSpanDrawInfo } drawInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  abstract onDraw(context: DrawContext, drawInfo: LeadingMarginSpanDrawInfo): void;
  /**
   * 返回文本段落的缩进距离。
   *
   * @returns { LengthMetrics } - 文本段落的缩进。不支持百分比。<br/>默认值：0<br/>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  abstract getLeadingMargin(): LengthMetrics;
}