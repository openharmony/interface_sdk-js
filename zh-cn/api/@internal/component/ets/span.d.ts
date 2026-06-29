/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 定义Span的背景样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextBackgroundStyle {

  /**
   * 文本背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * 文本背景圆角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: Dimension | BorderRadiuses;
}

/**
 * 定义BaseSpan基础类，包含Span的通用属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class BaseSpan<T> extends CommonMethod<T> {

  /**
   * 设置背景样式。作为[ContainerSpan]{@link container_span}的子组件时可以继承它的此属性值，优先使用其自身的此属性。
   *
   * @param { TextBackgroundStyle } style - 背景样式。<br />默认值:<br />{<br />  color: Color.Transparent,<br />  radius: 0<br
   *     />}
   * @returns { T } 返回当前Span的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textBackgroundStyle(style: TextBackgroundStyle): T;

  /**
   * 设置Span基线的偏移量。此属性与父组件的baselineOffset是共存的。
   *
   * @param { LengthMetrics } value - 设置Span基线的偏移量，设置该值为百分比时，按默认值显示。<br/>正数内容向上偏移，负数向下偏移。<br/>默认值：0<br/>在ImageSpan中，设置为非
   *     0时，[verticalAlign]{@link ImageSpanAttribute#verticalAlign}将固定为ImageSpanAlignment.BASELINE对齐；设置为0时，要使基线对齐策略生效，需同
   *     时设置[verticalAlign]{@link ImageSpanAttribute#verticalAlign}为ImageSpanAlignment.BASELINE。
   * @returns { T } 返回当前Span的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  baselineOffset(value: LengthMetrics): T;
}

/**
 * 作为[Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内文本的组件。
 * 
 * > **说明：**
 * 
 * > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、
 * > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。
 * >
 * > 不支持[通用属性]{@link common}。若需设置通用属性，应使用[Text]{@link text}进行设置，或改用[属性字符串]{@link styled_string}中的
 * > [CustomSpan]{@link CustomSpan}自行绘制。
 * >
 * > [通用事件]{@link common}只支持点击事件
 * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}和悬浮事件
 * > [onHover]{@link CommonMethod#onHover}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SpanInterface {

  /**
   *
   * 定义Span组件构造函数。
   *
   * @param { string | Resource } value - 文本内容。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: string | Resource): SpanAttribute;
}

/**
 * 属性继承自[BaseSpan]{@link BaseSpan}。
 * 
 * 通用事件支持[点击事件onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}、
 * [悬浮事件onHover]{@link CommonMethod#onHover}。
 *
 * @extends CommonMethod<SpanAttribute> [since 7 - 10]
 * @extends BaseSpan<SpanAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SpanAttribute extends BaseSpan<SpanAttribute> {

  /**
   * 设置文本样式。包括字体大小、字体粗细、字体族和字体风格。
   *
   * @param { Font } value - 文本样式。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font(value: Font): SpanAttribute;

  /**
   * 设置文本样式。
   *
   * @param { Font } value - 文本样式，包括字体大小、字体粗细、字体族和字体风格。
   * @param { FontConfigs } [fontConfigs] - 字体配置。默认值继承
   *     [FontConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontconfigs24对象说明)。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  font(value: Font, fontConfigs?: FontConfigs): SpanAttribute;

  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor } value - 字体颜色。<br/>默认值：'#e6182431'<br/>Wearable设备上默认值为：'#c5ffffff'
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): SpanAttribute;

  /**
   * 设置字体大小。
   *
   * @param { number | string | Resource } value - 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。string类型支持number类型取值的字符串形式，
   *     可以附带单位，例如"10"、"10fp"，不支持设置百分比字符串。<br/>Wearable设备上默认值为：15fp
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): SpanAttribute;

  /**
   * 设置字体样式。
   *
   * @param { FontStyle } value - 字体样式。<br/>默认值：FontStyle.Normal
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): SpanAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings of the number type are supported, for example, **400**, **"bold"**, **"bolder"**,
   *     **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**.<br
   *     >Default value: **FontWeight.Normal**<br>The [Resource]{@link Resource} type is supported since API version 2
   *     0. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类
   *     型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。<br/>默认值：
   *     FontWeight.Normal <br>从API version 20开始，支持[Resource]{@link Resource}类型。 [since 20]
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): SpanAttribute;

  /**
   * 设置文本的字体粗细。
   *
   * @param { number | FontWeight | ResourceStr } weight - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string
   *     类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。设置过大可能会在不同字体
   *     下有截断。<br/>默认值：FontWeight.Normal
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置。默认值继承
   *     [FontWeightConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontweightconfigs24对象说明)。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs): SpanAttribute;

  /**
   * 设置字体列表。
   *
   * @param { string | Resource } value - 字体列表。<br>默认字体'HarmonyOS Sans'。<br>使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,
   *     HarmonyOS Sans'。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): SpanAttribute;

  /**
   * 设置文本装饰线样式及其颜色。
   *
   * @param { object } value - Style of the text decorative line.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The
   *     **style** parameter cannot be used in widgets. [since 7 - 11]
   * @param { DecorationStyleInterface } value - 文本装饰线样式对象。<br/>默认值：<br/>{<br/> type: TextDecorationType.None,<br/> 
   *     color: Color.Black,<br/> style: TextDecorationStyle.SOLID <br/>}<br/>**说明：** <br/>style参数不支持卡片能力。 [since 12]
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): SpanAttribute;

  /**
   * 设置文本字符间距。取值小于0，字符聚集重叠，取值大于0且随着数值变大，字符间距越来越大，稀疏分布。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * @param { number | string } value - Letter spacing.<br>Unit: [fp]{@link common}<br>The [Resource]{@link Resource}
   *     type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - 文本字符间距。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br>从API version 20开始，支持
   *     [Resource]{@link Resource}类型。 [since 20]
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): SpanAttribute;

  /**
   * 设置文本大小写。
   *
   * @param { TextCase } value - 文本大小写。<br/>默认值：TextCase.Normal
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): SpanAttribute;

  /**
   * 设置文本行高。
   *
   * @param { Length } value - 文本行高。 <br/> number类型时单位为fp。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lineHeight(value: Length): SpanAttribute;

  /**
   * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - 文字阴影效果。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): SpanAttribute;

  /**
   * 设置可变字体的属性。
   *
   * @param { Array<FontVariation> } fontVariations - 可变字体的属性数组，数组成员为可变字体的各种属性。fontVariations属性的优先级高于
   *     [fontWeight]{@link SpanAttribute#fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)}
   *     。
   * @returns { SpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations(fontVariations: Array<FontVariation>): SpanAttribute;
}

/**
 * 作为[Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内文本的组件。
 * 
 * > **说明：**
 * 
 * > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、
 * > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。
 * >
 * > 不支持[通用属性]{@link common}。若需设置通用属性，应使用[Text]{@link text}进行设置，或改用[属性字符串]{@link styled_string}中的
 * > [CustomSpan]{@link CustomSpan}自行绘制。
 * >
 * > [通用事件]{@link common}只支持点击事件
 * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}和悬浮事件
 * > [onHover]{@link CommonMethod#onHover}。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Span: SpanInterface;

/**
 * 定义Span组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const SpanInstance: SpanAttribute;