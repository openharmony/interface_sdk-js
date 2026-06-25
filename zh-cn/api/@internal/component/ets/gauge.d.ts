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
* 数据量规图表选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface GaugeOptions {

  /**
   * 量规图的当前数据值，即图中指针指向位置。用于组件创建时量规图初始值的预置。
   *
   * 默认值：0
   *
   * **说明：**
   *
   * value不在min和max范围内时使用min作为默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: number;

  /**
   * 当前数据段最小值。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  min?: number;

  /**
   * 当前数据段最大值。
   *
   * 默认值：100
   *
   * **说明：**
   *
   * max小于min时使用默认值0和100。
   *
   * max和min支持负数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  max?: number;
}

/**
* 数据量规图表组件，用于将数据展示为环形图表。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface GaugeInterface {

  /**
   * 创建数据量规图表组件。
   *
   * @param { object } options - Settings of the gauge. [since 8 - 17]
   * @param { GaugeOptions } options - 数据量规图表组件参数。 [since 18]
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: GaugeOptions): GaugeAttribute;
}

/**
* GaugeShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GaugeShadowOptions extends MultiShadowOptions {}

/**
* 数据量规图表指针选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GaugeIndicatorOptions {

  /**
   * 图标资源路径。
   *
   * **说明：**
   *
   * 不配置则使用系统默认样式，系统默认样式为三角形指针。
   *
   * 仅支持使用svg格式的图标，若使用其他格式，则使用默认的三角形样式指针。
   *
   * @default system style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * 指针距离圆环外边的间距。(不支持百分比)
   *
   * 默认值：8
   *
   * 单位：vp
   *
   * **说明：**
   *
   * 对于默认的三角形样式指针，间距为黑色三角形到圆环外边的间距。
   *
   * 若设置值小于0，则使用默认值。
   *
   * 若设置值大于圆环半径，则使用默认值。
   *
   * @default 8vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  space?: Dimension;
}

/**
* 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GaugeConfiguration extends CommonConfiguration<GaugeConfiguration> {

  /**
   * 当前数据值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: number;

  /**
   * 当前数据段最小值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  min: number;

  /**
   * 当前数据段最大值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  max: number;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class GaugeAttribute extends CommonMethod<GaugeAttribute> {

  /**
   * 设置量规图的数据值。
   *
   * @param { number } value - 量规图的数据值，可用于动态修改量规图的数据值。<br/>默认值：0
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value(value: number): GaugeAttribute;

  /**
   * 设置起始角度位置。
   *
   * @param { number } angle - 起始角度位置，时钟0点为0度，顺时针方向为正角度，逆时针方向为负角度，超过360度等价于对360度取余后的角度。<br/>默认值：0<br/>从起始位置到终止位置的绘制只有顺时针
   *     方向。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  startAngle(angle: number): GaugeAttribute;

  /**
   * 设置终止角度位置。起始角度和终止角度的差值过小时，会绘制出异常图像，请取合理的起始角度和终止角度。建议使用单色环改变Gauge的value参数实现数据值的调节，可通过定时器setTimeout进行数值的延迟加载。
   *
   * @param { number } angle - 终止角度位置，时钟0点为0度，顺时针方向为正角度，逆时针方向为负角度，超过360度等价于对360度取余后的角度。<br/>默认值：360<br/>从起始位置到终止位置的绘制只有顺
   *     时针方向。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  endAngle(angle: number): GaugeAttribute;

  /**
   * 设置量规图的颜色。
   *
   * 从API version 11开始，该接口使用以下规则：
   *
   * 参数类型为[ResourceColor]{@link ResourceColor}，则圆环类型为单色环。
   *
   * 参数类型为[LinearGradient]{@link LinearGradient}，则圆环类型为渐变环。
   *
   * 参数类型为数组，则圆环类型为分段渐变环，第一个参数为颜色值，若设置为非颜色类型，则置为"0xFFE84026"。第二个参数为颜色所占比重，若设置为负数或是非数值类型，则将比重置为0。
   *
   * 分段渐变环最大显示段数为9段，若多于9段，则多于部分不显示。
   *
   * @param { Array<any> } colors - Colors of the gauge. You can set colors for individual segments.<br>Default value in
   *     API version 9: **Color.Black**<br>Default value in API version 11:<br>If no color is provided or the array is
   *     empty, the ring color will be a gradient consisting of the following colors: 0xFF64BB5C, 0xFFF7CE00, and 0xFFE8
   *     4026.<br>If a color value is provided but invalid, the ring will be in the color of 0xFFE84026.<br>Colors with
   *     a weight of 0 are not displayed in the ring. If all weights are 0, the ring is not displayed. [since 8 - 9]
   * @param { Array<[ResourceColor, number]> } colors - Colors of the gauge. You can set colors for individual segments.
   *     <br>Default value in API version 9: **Color.Black**<br>Default value in API version 11:<br>If no color is
   *     provided or the array is empty, the ring color will be a gradient consisting of the following colors: 0xFF64BB5
   *     C, 0xFFF7CE00, and 0xFFE84026.<br>If a color value is provided but invalid, the ring will be in the color of 0
   *     xFFE84026.<br>Colors with a weight of 0 are not displayed in the ring. If all weights are 0, the ring is not
   *     displayed. [since 10 - 10]
   * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]> } colors - 量规图的颜色，支持分段颜色设
   *     置。<br/>API version 9 默认值：Color.Black<br/>API version 11默认值：<br/>若不传颜色，或者数组为空，无法确定圆环类型及颜色，则圆环颜色为"0xFF64BB5C"、"0
   *     xFFF7CE00"、"0xFFE84026"的渐变环。<br/>若传入颜色，但颜色值有误，则该颜色为"0xFFE84026"。<br/>若对应颜色的比重为0，则该颜色在圆环中不显示。若所有颜色比重均为0，圆环不显示。<
   *     br/>从API version 10开始，支持Array<ResourceColor, number>类型。<br/>从API version 11开始，支持LinearGradient、ResourceColor和
   *     Array<LinearGradient, number>类型。 [since 11]
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  colors(colors: ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]>): GaugeAttribute;

  /**
   * 设置环形量规图的环形厚度。
   *
   * @param { Length } length - 环形量规图的环形厚度。<br/>默认值：4<br/>单位：vp<br/>**说明：** <br/>设置小于等于0的值时，按默认值显示。<br/>环形厚度的最大值为圆环的半径，超
   *     过最大值按最大值处理。<br/>不支持百分比。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeWidth(length: Length): GaugeAttribute;

  /**
   * 设置说明内容。
   *
   * @param { CustomBuilder } value - 说明内容。<br/>**说明：** <br/>@Builder中的内容由开发者自定义，建议使用文本或者图片。<br/>若自定义部分的宽高为百分比形式，则基准范围为圆
   *     环直径的44.4%*25.4%的矩形（图片为28.6%*28.6%），距离圆环底部0vp，左右居中。<br/>设置null则不显示内容。<br/>不设置则依赖是否设置数据最大最小值。<br/>若设置最大最小值或者只设置其中
   *     一个，则显示最大最小值。<br/>若未设置最大最小值，则不显示内容。<br/>最大最小值显示在圆环底部，位置不可移动，若圆环开口角度设置不恰当，存在圆环遮挡文字的情况。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  description(value: CustomBuilder): GaugeAttribute;

  /**
   * 设置阴影样式。
   *
   * @param { GaugeShadowOptions } value - 添加阴影效果，可以指定模糊半径、X轴和Y轴的偏移量。<br/>**说明：** <br/>阴影颜色与圆环颜色一致。<br/>设置null为不开启投影。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  trackShadow(value: GaugeShadowOptions): GaugeAttribute;

  /**
   * 设置指针样式。
   *
   * @param { GaugeIndicatorOptions } value - 指针样式。<br/>**说明：** <br/>设置null则不显示指针。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  indicator(value: GaugeIndicatorOptions): GaugeAttribute;

  /**
   * 设置隐私敏感。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<boolean> } isPrivacySensitiveMode - 设置隐私敏感。在隐私模式下，Gauge指针指向0位置，最大值最小值文本将被遮罩，量程显示灰色或底色。true表示打开隐私敏
   *     感，false表示关闭隐私敏感。<br/>默认值：false。<!--Del--><br/>需要在卡片中使用Gauge，并用[FormComponent]{@link form_component}组件设置
   *     [隐私遮罩]{@link common}属性，显示卡片时才有隐私遮罩效果。<!--DelEnd-->
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(isPrivacySensitiveMode: Optional<boolean>): GaugeAttribute;

  /**
   * 定制Gauge内容区的方法。
   *
   * @param { ContentModifier<GaugeConfiguration> } modifier - 在Gauge组件上定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义class实现
   *     ContentModifier接口。
   * @returns { GaugeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<GaugeConfiguration>): GaugeAttribute;
}

/**
* 数据量规图表组件，用于将数据展示为环形图表。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
*
* ###### 子组件
*
* 可以包含单个子组件。
*
* > **说明：**
* >
* > - 支持的子组件类型：系统组件和自定义组件，支持条件渲染控制[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)，不支持循环渲染控制
* > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}。
* >
* > - 建议使用文本组件构建当前数值文本和辅助文本。
* >
* > - 若子组件宽高为百分比形式，则基准范围为以外圆环做为内切圆的矩形。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Gauge: GaugeInterface;

/**
* 定义Gauge组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const GaugeInstance: GaugeAttribute;