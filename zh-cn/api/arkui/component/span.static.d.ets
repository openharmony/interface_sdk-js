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
import { ResourceColor, Dimension, BorderRadiuses, Length, Font, ResourceStr } from "./units";
import { CommonMethod, ShadowOptions, AttributeModifier, ClickEvent, Callback, HoverCallback } from "./common";
import { LengthMetrics } from './../Graphics';
import { Resource } from './../../../api/global/resource';
import { FontStyle, FontWeight, TextCase } from "./enums";
import { DecorationStyleInterface } from "./styledString";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { FontConfigs, FontWeightConfigs, FontVariation } from "./textCommon";

/**
 * 定义span的背景样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextBackgroundStyle {
  /**
   * 文本背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
  /**
   * 文本背景圆角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radius?: Dimension | BorderRadiuses;
}

/**
 * 定义BaseSpan基础类，包含Span的通用属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface BaseSpan extends CommonMethod {
  /**
   * 设置文本背景样式。作为[ContainerSpan](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-containerspan.md)的子组件时可以继承
   * 它的此属性值，优先使用其自身的此属性。
   *
   * @param { TextBackgroundStyle | undefined } style - 文本背景样式。<br />默认值：<br />{<br />  color: Color.Transparent,<br /
   *     >  radius: 0<br />} <br/>取值undefined时，按默认值处理。
   * @returns { T }
   返回当前Span的属性。
   * @stagemodelonly
   * @since 23 static
   */
  default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
  /**
   * 设置Span基线的偏移量。此属性与父组件的baselineOffset是共存的。
   *
   * @param { LengthMetrics | undefined } value - 设置Span基线的偏移量，设置该值为百分比时，按默认值显示。<br/>正数内容向上偏移，负数向下偏移。<br/>默认值：0<br/>在
   *     ImageSpan中，设置为非0时，
   *     [verticalAlign](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-imagespan.md#verticalalign)将固定为
   *     ImageSpanAlignment.BASELINE对齐；设置为0时，要使基线对齐策略生效，需同时设置
   *     [verticalAlign](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-imagespan.md#verticalalign)为
   *     ImageSpanAlignment.BASELINE。<br/>取值undefined时，按默认值处理。
   * @returns { T } 返回当前Span的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default baselineOffset(value: LengthMetrics | undefined): this;
}

/**
 * 属性继承自[BaseSpan]{@link BaseSpan}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface SpanAttribute {
  /**
   * 设置文本样式。
   *
   * @param { Font | undefined } value - 文本样式，包括字体大小、字体粗细、字体族和字体风格。<br/>默认值：
   *     [Font](docroot://reference/apis-arkui/arkui-ts/ts-types.md#font) <br/>取值undefined时，按默认值处理。
   * @param { FontConfigs } [fontConfigs] - 字体配置。默认值继承
   *     [FontConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontconfigs24)。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default font(value: Font | undefined, fontConfigs?: FontConfigs): this;
  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * 设置字体大小。
   *
   * @param { double | string | Resource | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置字体样式。
   *
   * @param { FontStyle | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontStyle(value: FontStyle | undefined): this;

  /**
   * 设置文本的字体粗细。
   *
   * @param { int | FontWeight | ResourceStr | undefined } weight - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，
   *     字体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举
   *     值。设置过大可能会在不同字体下有截断。<br/>默认值：FontWeight.Normal <br/>取值undefined时，按默认值处理。
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置。默认值继承
   *     [FontWeightConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontweightconfigs24)。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fontWeight(weight: int | FontWeight | ResourceStr | undefined, fontWeightConfigs?: FontWeightConfigs): this;

  /**
   * 设置字体列表。
   *
   * @param { string | Resource | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFamily(value: string | Resource | undefined): this;
  /**
   * 设置文本装饰线样式及其颜色。
   *
   * @param { DecorationStyleInterface | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default decoration(value: DecorationStyleInterface | undefined): this;
  /**
   * 设置文本字符间距。取值小于0，字符聚集重叠，取值大于0且随着数值变大，字符间距越来越大，稀疏分布。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * @param { double | string | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default letterSpacing(value: double | string | undefined): this;
  /**
   * 设置文本大小写。
   *
   * @param { TextCase | undefined } value
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textCase(value: TextCase | undefined): this;
  /**
   * 设置文本行高。
   *
   * 设置值不大于0时，不限制文本行高，自适应字体大小。
   *
   * @param { Length | undefined } value - 文本行高。 <br/> number类型时单位为
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。设置string类型时，支持number类型取值的字符串形式，可以附带单位，
   *     例如"10"、"10fp"。<br/>取值为undefined时，使用默认行高高度。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineHeight(value: Length | undefined): this;
  /**
   * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。
   *
   * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - 文字阴影效果。<br/>默认值继承
   *     [ShadowOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#shadowoptions)
   *     <br/>取值为undefined时，按默认值处理。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
  /**
   * 设置文本背景样式。作为[ContainerSpan](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-containerspan.md)的子组件时可以继承
   * 它的此属性值，优先使用其自身的此属性。
   *
   * @param { TextBackgroundStyle | undefined } style - 文本背景样式。<br />默认值：<br />{<br />  color: Color.Transparent,<br /
   *     >  radius: 0<br />} <br/>取值undefined时，按默认值处理。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
  /**
   * 设置Span基线的偏移量。此属性与父组件的baselineOffset是共存的。
   *
   * @param { LengthMetrics | undefined } value - 设置Span基线的偏移量，设置该值为百分比时，按默认值显示。<br/>正数内容向上偏移，负数向下偏移。<br/>默认值：0<br/>在
   *     ImageSpan中，设置为非0时，
   *     [verticalAlign](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-imagespan.md#verticalalign)将固定为
   *     ImageSpanAlignment.BASELINE对齐；设置为0时，要使基线对齐策略生效，需同时设置
   *     [verticalAlign](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-imagespan.md#verticalalign)为
   *     ImageSpanAlignment.BASELINE。<br/>取值undefined时，按默认值处理。
   * @returns { SpanAttribute } 返回当前Span的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default baselineOffset(value: LengthMetrics | undefined): this;

  /**
   * 设置组件的键值。
   *
   * @param { string | undefined } value
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @test
   */
  default key(value: string | undefined): this;
  /**
   * 设置组件的唯一标识。
   *
   * @param { string | undefined } value
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default id(value: string | undefined): this;
  /**
   * 设置点击事件回调。
   *
   * > **说明：**
   * >
   * > 点击事件不能在手指按下超过800ms后触发。手指按下后移动超过20px时，点击事件不能触发。
   *
   * @param { Callback<ClickEvent> | undefined } event - 点击事件回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onClick(event: Callback<ClickEvent> | undefined): this;
  /**
   * 设置点击事件回调及移动阈值。
   *
   * > **说明：**
   * >
   * > 点击事件不能在手指按下超过800ms后触发。
   *
   * @param { Callback<ClickEvent> | undefined } event - 点击事件回调。<br/>取值为undefined时，不使用回调函数。
   * @param { double | undefined } distanceThreshold
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: double | undefined): this;
  /**
   * 设置悬浮事件回调。
   *
   * @param { HoverCallback | undefined } event - 悬浮事件回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onHover(event: HoverCallback | undefined): this;
  /**
   * 设置可变字体的属性。
   *
   * @param { Array<FontVariation> | undefined } fontVariations - 可变字体的属性数组，数组成员为可变字体的各种属性。<br/>设置为undefined时的效果等同于未设置
   *     fontVariations属性时的效果。<br/>fontVariations属性的优先级高于
   *     [fontWeight](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-span.md#fontweight24)。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fontVariations(fontVariations: Array<FontVariation> | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SpanAttribute> | undefined } modifier - 动态设置Span组件的属性。<br/>取值为undefined时，按当前组件的属性方法默认值
   *     处理。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SpanAttribute> | undefined): this;
  /**
   * 设置组件源码重定向信息。
   *
   * @param { string } sourceLine - 源码行号。
   * @param { string } [moduleName] - 组件所属模块名。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * 定义Span组件。
 *
 * @param { string | Resource } value
 * @returns { SpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Span(
    value: string | Resource
): SpanAttribute;
