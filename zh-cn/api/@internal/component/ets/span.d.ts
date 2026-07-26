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
   * 文本背景色。默认为透明，无背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * 文本背景圆角。默认无圆角。
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
   * 设置文本背景样式。作为[ContainerSpan]{@link ./container_span}的子组件时可继承该属性值，优先使用自身的设置。未通过该接口设置时，默认背景颜色为Color.Transparent（透明），圆角弧
   * 度为0。
   *
   * @param { TextBackgroundStyle } style - 文本背景样式。
   * @returns { T } 返回当前Span的属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textBackgroundStyle(style: TextBackgroundStyle): T;

  /**
   * 设置Span基线的偏移量，适用于上下标排版、混合字号文本对齐微调等场景。此属性与父组件的baselineOffset是共存的。未通过该接口设置时，默认偏移量为0。
   *
   * @param { LengthMetrics } value - 设置Span基线的偏移量，设置该值为百分比时，按默认值显示。
   *     <br>正数内容向上偏移，负数向下偏移。
   *     <br>在ImageSpan中，设置为非0时，[verticalAlign]{@link ImageSpanAttribute#verticalAlign}将固定为ImageSpanAlignment.BASELINE对
   *     齐；设置为0时，要使基线对齐策略生效，需同时设置[verticalAlign]{@link ImageSpanAttribute#verticalAlign}为ImageSpanAlignment.BASELINE。
   * @returns { T } 返回当前Span的属性对象，用于链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  baselineOffset(value: LengthMetrics): T;
}

/**
 * 作为[Text]{@link ./text}、[ContainerSpan]{@link ./container_span}组件的子组件，用于显示行内文本，支持对文本的字体、颜色、大小等样式进行细粒度设置。适用于在同一行文本中混合显示
 * 不同样式的场景，如不同字体颜色的文本、添加装饰线或阴影效果等。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、
 * > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。
 * >
 * > 不支持[通用属性]](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。若需设置通用属性，
 * > 应使用[Text]{@link ./text}进行设置，或改用[属性字符串]{@link ./styled_string}中的[CustomSpan]{@link CustomSpan}自行绘制。
 * >
 * > [通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)只支持点击事件
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}和悬浮事件
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
 * 通用事件支持[点击事件onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}、
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
   * > **说明：**
   * >
   * > fontWeight设置过大可能会在不同字体下有截断。
   *
   * @param { Font } value - 文本样式，包括字体大小、字体粗细、字体族和字体风格。
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
   * @param { FontConfigs } [fontConfigs] - 字体配置，用于自定义字体渲染行为（如配置可变字体属性）。当需要对字体进行高级配置时传入此参数，不传入时继承
   *     [FontConfigs]{@link FontConfigs}的默认配置。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  font(value: Font, fontConfigs?: FontConfigs): SpanAttribute;

  /**
   * 设置字体颜色。未通过该接口设置时，默认字体颜色为'#FF182431'（深灰色），Wearable设备上默认为'#C5FFFFFF'（白色，不透明度约为77%）。
   *
   * @param { ResourceColor } value - 字体颜色。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): SpanAttribute;

  /**
   * 设置字体大小。未通过该接口设置时，默认字体大小为16fp，Wearable设备上默认为15fp。
   *
   * @param { number | string | Resource } value - 字体大小。fontSize为number类型时，使用fp单位。string类型支持number类型取值的字符串形式，可以附带单位，例如"1
   *     0"、"10fp"，不支持设置百分比字符串。
   *     <br>从API version 20开始，支持[Resource]{@link Resource}类型。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): SpanAttribute;

  /**
   * 设置字体样式。未通过该接口设置时，默认字体样式为FontStyle.Normal（正常样式）。
   *
   * @param { FontStyle } value - 字体样式。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): SpanAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。未通过该接口设置时，默认字体粗细为FontWeight.Normal（正常粗细，对应数值400）。
   * 
   * > **说明：**
   * >
   * > 当同时设置[fontVariations属性]{@link SpanAttribute#fontVariations}时，fontVariations属性的优先级更高。
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings of the number type are supported, for example, **400**, **"bold"**, **"bolder"**,
   *     **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**.<br
   *     >Default value: **FontWeight.Normal**<br>The [Resource]{@link Resource} type is supported since API version 2
   *     0. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - 文本的字体粗细。
   *     <br>number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“
   *     regular”、“medium”，分别对应FontWeight中相应的枚举值。设置过大可能会在不同字体下有截断。传入超出取值范围或不符合间隔要求的值时取默认值。
   *     <br>从API version 20开始，支持[Resource]{@link Resource}类型。 [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): SpanAttribute;

  /**
   * 设置文本的字体粗细。未通过该接口设置时，默认字体粗细为FontWeight.Normal（正常粗细，对应数值400）。
   * 
   * > **说明：**
   * >
   * > 当同时设置fontVariations属性时，fontVariations属性的优先级更高。
   *
   * @param { number | FontWeight | ResourceStr } weight - 文本的字体粗细。
   *     <br>number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“
   *     regular”、“medium”，分别对应FontWeight中相应的枚举值。设置过大可能会在不同字体下有截断。
   *     <br>传入超出取值范围的值时取默认值。传入不符合间隔要求的值时，若设置fontWeightConfigs的enableVariableFontWeight为true，使用传入值；若设置为false，使用默认值。
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置对象，用于配置可变字体字重等选项。默认值继承
   *     [FontWeightConfigs]{@link FontWeightConfigs}。
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
   * 设置字体列表。未通过该接口设置时，默认字体为'HarmonyOS Sans'。
   *
   * @param { string | Resource } value - 字体列表。
   *     <br>使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS Sans'。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): SpanAttribute;

  /**
   * 设置文本装饰线样式及其颜色。未通过该接口设置时，默认装饰线类型为TextDecorationType.None（无装饰线），颜色为Color.Black（黑色），样式为TextDecorationStyle.SOLID（实线）。
   *
   * @param { object } value - Style of the text decorative line.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The
   *     **style** parameter cannot be used in widgets. [since 7 - 11]
   * @param { DecorationStyleInterface } value - 文本装饰线样式对象。
   *     <br>**说明：** 
   *     <br>style参数不支持卡片能力。 [since 12]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): SpanAttribute;

  /**
   * 设置文本字符间距。取值小于0，字符聚集重叠，取值大于0且随着数值变大，字符间距越来越大，稀疏分布。适用于标题排版、标签文字等需要调整字符紧凑度或稀疏度的场景。string类型支持number类型取值的字符串形式，可以附带单位，例如
   * "10"、"10fp"。
   *
   * @param { number | string } value - Letter spacing.<br>Unit: [fp]{@link common}<br>The [Resource]{@link Resource}
   *     type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - 文本字符间距。
   *     <br>单位：[fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 
   *     <br>从API version 20开始，支持[Resource]{@link Resource}类型。 [since 20]
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): SpanAttribute;

  /**
   * 设置文本大小写。未通过该接口设置时，默认文本大小写为TextCase.Normal（正常大小写）。
   *
   * @param { TextCase } value - 文本大小写。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): SpanAttribute;

  /**
   * 设置文本行高。未通过该接口设置时，默认由系统根据字体大小自动计算行高。
   *
   * @param { Length } value - 文本行高。 
   *     <br> number类型时单位为fp。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"，不支持设置百分比字符串。
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lineHeight(value: Length): SpanAttribute;

  /**
   * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段，不支持智能取色模式。
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - 文字阴影效果。可设置阴影的模糊半径(radius)、颜色(color)、偏移距离(offsetX/offsetY)等参
   *     数，支持数组形式实现多重阴影。
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): SpanAttribute;

  /**
   * 设置可变字体的属性，适用于需要动态调整字体粗细、宽度等可变维度参数的场景。
   *
   * @param { Array<FontVariation> } fontVariations - 可变字体的属性数组，每个数组元素包含axis（属性轴名称）和value（属性值）两个字段。fontVariations属性的优先级高
   *     于[fontWeight]{@link SpanAttribute#fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)}。
   *
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
 * 作为[Text]{@link ./text}、[ContainerSpan]{@link ./container_span}组件的子组件，用于显示行内文本，支持对文本的字体、颜色、大小等样式进行细粒度设置。适用于在同一行文本中混合显示
 * 不同样式的场景，如不同字体颜色的文本、添加装饰线或阴影效果等。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、
 * > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。
 * >
 * > 不支持[通用属性]](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。若需设置通用属性，
 * > 应使用[Text]{@link ./text}进行设置，或改用[属性字符串]{@link ./styled_string}中的[CustomSpan]{@link CustomSpan}自行绘制。
 * >
 * > [通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)只支持点击事件
 * > [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}和悬浮事件
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