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
 * 数据面板的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum DataPanelType {
  /**
   * 线型数据面板。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Line,

  /**
   * Line Rainbow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Circle,
}

/**
 * 颜色断点类型，用于描述渐变色颜色断点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ColorStop {
  /**
   * 渐变色断点处的颜色值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color: ResourceColor;

  /**
   * 渐变色断点（0~1之间的比例值，若该值小于0则置为0，若该值大于1则置为1）。
   * 
   * **说明：** 
   * 
   * 若传入字符串类型且内容为数字，则转换为对应的数值。
   * 
   * 例如'10vp'转换为10，'10%'转换为0.1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset: Length;
}

/**
 * 线性渐变颜色类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class LinearGradient {
  /**
   * 线性渐变颜色描述。
   *
   * @param { ColorStop[] } colorStops - 存储渐变颜色和渐变点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(colorStops: ColorStop[]);
}

/**
 * DataPanelShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface DataPanelShadowOptions extends MultiShadowOptions {
  /**
   * 各数据段投影的颜色。
   *
   * 默认值：与valueColors值相同
   *
   * **说明：**
   *
   * 若设置的投影颜色的个数少于数据段个数时，则显示的投影颜色的个数和设置的投影颜色个数一致。
   *
   * 若设置的投影颜色的个数多于数据段个数时，则显示的投影颜色的个数和数据段个数一致。
   *
   * @default Consistent with valueColors
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  colors?: Array<ResourceColor | LinearGradient>;
}

/**
 * 数据面板选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DataPanelOptions {
  /**
   * 数据值列表，数组长度范围[0, 9]，大于9个数据则取前9个数据。若数据值小于0则置为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  values: number[];

  /**
   * - max大于0时，表示数据的最大值。
   * 
   * - max小于等于0时，max等于values数据值列表各项的和，按比例显示。
   * 
   * 不传入时默认值：100。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  max?: number;

  /**
   * 数据面板的类型（不支持动态修改）。
   * 
   * 可选值：DataPanelType.Line（线性数据面板，适合在有限空间内展示多段数据对比）、DataPanelType.Circle（环形数据面板，适合直观展示数据占比关系）。
   * 
   * 不传入时默认值为DataPanelType.Circle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type?: DataPanelType;
}

/**
 * 数据面板组件，用于将多个数据占比情况使用占比图进行展示，支持环形和线性两种展示类型，可自定义颜色、阴影、底板等视觉效果，适用于存储容量、任务进度、资源占比等数据可视化场景，帮助用户直观了解数据分布情况。
 * 
 * > **说明：**
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface DataPanelInterface {
  /**
   * 创建数据面板组件。
   *
   * @param { DataPanelOptions } options - 数据面板配置选项，用于设置数据面板的数据值列表、最大值和数据面板类型。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options: DataPanelOptions): DataPanelAttribute;
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
declare interface DataPanelConfiguration extends CommonConfiguration<DataPanelConfiguration> {
  /**
   * 当前DataPanel的数据值。
   *
   * 数组长度范围是[0, 9]。
   *
   * **说明：**
   *
   * 如果数组长度大于9，则取前9项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  values: number[];

  /**
   * DataPanel显示的最大值。
   *
   * 默认值：100。
   *
   * **说明：**
   *
   * 如果小于或等于0，maxValue将被设为values数组中所有项的总和，并按比例显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxValue: number;
}

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 * 
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 *
 * @extends CommonMethod [since 7 - 10]
 * @extends CommonMethod<DataPanelAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class DataPanelAttribute extends CommonMethod<DataPanelAttribute> {
  /**
   * 设置是否关闭数据占比图表旋转动效和投影效果。若未设置[trackShadow]{@link DataPanelAttribute#trackShadow}属性，则由该属性控制投影效果，当closeEffect为false（投影开启
   * ）时，投影为默认效果。若已设置trackShadow属性，则由trackShadow属性值控制投影效果。
   *
   * @param { boolean } value - 关闭数据占比图表旋转动效和投影效果。
   *     <br>默认值：false，表示开启动效和投影；true表示关闭动效和投影。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  closeEffect(value: boolean): DataPanelAttribute;

  /**
   * 设置各数据段颜色。
   *
   * @param { Array<ResourceColor | LinearGradient> } value - 各数据段颜色，ResourceColor为纯色，LinearGradient为渐变色。默认值为渐变色，九段数据的默认
   *     颜色为：[{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }]、
   *     [{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }]、
   *     [{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }]、
   *     [{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }]、
   *     [{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }]、
   *     [{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }]、
   *     [{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }]、
   *     [{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }]、
   *     [{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }]。
   *     <br>**说明：**
   *     <br>若设置的颜色个数少于数据段个数，剩余数据段会自动匹配默认颜色列表里对应顺序的颜色；若设置的颜色个数多于数据段个数，则显示的颜色个数与数据段个数一致，多余颜色将被忽略。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valueColors(value: Array<ResourceColor | LinearGradient>): DataPanelAttribute;

  /**
   * 设置底板颜色。
   *
   * @param { ResourceColor } value - 底板颜色。
   *     <br>默认值：'#08182431'，格式为十六进制ARGB值，前两位代表透明度。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackBackgroundColor(value: ResourceColor): DataPanelAttribute;

  /**
   * 设置圆环粗细。数据面板的类型为DataPanelType.Line时该属性不生效。
   *
   * @param { Length } value - 圆环粗细。
   *     <br>默认值：24
   *     <br>单位：vp
   *     <br>设置字符串类型参数时，如果不指定单位，默认单位为px，例如'10'，等同于'10px'。
   *     <br>**说明：**
   *     <br>数据面板的类型为DataPanelType.Line时该属性不生效。
   *     <br>设置小于0的值时，按默认值显示。
   *     <br>当value大于圆环半径时，圆环粗细会自动设置为圆环半径的12%。如果value过大，圆环可能会消失。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth(value: Length): DataPanelAttribute;

  /**
   * 设置投影样式。若设置了本属性，则投影效果由本属性控制，closeEffect对投影效果的控制不再生效（closeEffect对旋转动效的控制不受影响）。
   *
   * @param { DataPanelShadowOptions } value - 投影样式。
   *     <br>**说明：** 
   *     <br>设置为null时，不开启投影。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackShadow(value: DataPanelShadowOptions): DataPanelAttribute;

  /**
   * 定制DataPanel内容区的方法。
   *
   * @param { ContentModifier<DataPanelConfiguration> } modifier - 在DataPanel组件上，定制内容区的方法，设置后将使用开发者自定义的内容替换DataPanel原有显示
   *     内容。
   *     <br>modifier：内容修改器，开发者需要自定义class实现ContentModifier接口。
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<DataPanelConfiguration>): DataPanelAttribute;
}

/**
 * 数据面板组件，用于将多个数据占比情况使用占比图进行展示，支持环形和线性两种展示类型，可自定义颜色、阴影、底板等视觉效果，适用于存储容量、任务进度、资源占比等数据可视化场景，帮助用户直观了解数据分布情况。
 * 
 * > **说明：**
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
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
declare const DataPanel: DataPanelInterface;

/**
 * 定义DataPanel组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const DataPanelInstance: DataPanelAttribute;