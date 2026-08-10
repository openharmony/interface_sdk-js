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
 * 用于描述Circle组件绘制属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface CircleOptions {
  /**
   * 宽度，取值范围≥0。当需要自定义圆形大小时设置此属性，不传入时默认为0。
   * 
   * 默认单位：vp
   * 
   * 异常值undefined、null、NaN和Infinity按照默认值处理。
   *
   * @type { ?(string | number) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * 高度，取值范围≥0。当需要自定义圆形大小时设置此属性，不传入时默认为0。
   * 
   * 默认单位：vp
   * 
   * 异常值undefined、null、NaN和Infinity按照默认值处理。
   *
   * @type { ?(string | number) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;
}

/**
 * 用于绘制圆形的组件。 
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface CircleInterface {
  /**
   * use new function to set the value.
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (value?: CircleOptions): CircleAttribute;

  /**
   * 用于绘制圆形的构造函数。调用后创建一个Circle对象，可设置宽高属性。
   *
   * @param { CircleOptions } value - 设置圆形尺寸。当需要自定义圆形大小时传入此参数，不传入时width和height默认为0。
   *     <br>异常值undefined和null按照无效值处理，本次设置不生效。
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: CircleOptions): CircleAttribute;
}

/**
 * 除支持[通用属性]{@link ./common}以及[图形绘制通用属性](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-common.md)外，还支持以下
 * 属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class CircleAttribute extends CommonShapeMethod<CircleAttribute> {
  /**
   * 设置边框颜色，支持使用[ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics}描述颜色，可进行HDR提亮。支持
   * [attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性。不设置时，默认边框颜色为[Color]{@link Color}.Transparent，即没有边框。
   * 异常值undefined和null按照默认值处理，NaN和Infinity按照[Color]{@link Color}.Black处理。
   *
   * @param { ResourceColor | ColorMetrics } value - 边框颜色。
   *     <br>默认值：[Color]{@link Color}.Transparent
   *     <br>异常值undefined和null按照默认值处理，NaN和Infinity按照[Color]{@link Color}.Black处理。
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stroke(value: ResourceColor | ColorMetrics): CircleAttribute;
  
  /**
   * 设置填充区域的颜色，支持使用[ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics}描述颜色，可进行HDR提亮。支持
   * [attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性。不设置时，默认填充颜色为[Color]{@link Color}.Black。异常值undefined
   * 、null、NaN和Infinity按照默认值处理。与通用属性foregroundColor同时设置时，后设置的属性生效。
   *
   * @param { ResourceColor | ColorMetrics } value - 填充区域颜色。
   *     <br>默认值：[Color]{@link Color}.Black 
   *     <br>异常值undefined、null、NaN和Infinity按照默认值处理。
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fill(value: ResourceColor | ColorMetrics): CircleAttribute;
}

/**
 * 用于绘制圆形的组件。 
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Circle: CircleInterface;

/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const CircleInstance: CircleAttribute;