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
 * 用于描述Ellipse组件绘制属性。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface EllipseOptions {
  /**
   * 宽度，取值范围≥0。
   * 
   * 默认值：0
   * 
   * 默认单位：vp
   * 
   * 异常值undefined、null、NaN和Infinity按照默认值处理。
   * 
   * 从API version 20开始，支持Resource类型。
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
   * 高度，取值范围≥0。
   * 
   * 默认值：0
   * 
   * 默认单位：vp
   * 
   * 异常值undefined、null、NaN和Infinity按照默认值处理。
   * 
   * 从API version 20开始，支持Resource类型。
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
 * 椭圆绘制组件。该组件通过设置宽度和高度属性绘制椭圆形状，在给定的矩形区域内渲染椭圆轮廓和填充区域。
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
interface EllipseInterface {
  /**
   * use new function to set the value.
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { EllipseOptions } [options] - ellipse options [since 18]
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: EllipseOptions): EllipseAttribute;

  /**
   * 用于绘制椭圆的构造函数。调用后创建一个Ellipse对象，可设置宽高属性。
   *
   * @param { object } value [since 7 - 17]
   * @param { EllipseOptions } [options] - 椭圆绘制配置选项，包含宽度和高度设置。不传入时使用默认尺寸（宽度和高度均为0）。
   *     <br>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: EllipseOptions): EllipseAttribute;
}

/**
 * 支持[通用属性]{@link ./common}以及[图形绘制通用属性](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-common.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class EllipseAttribute extends CommonShapeMethod<EllipseAttribute> {}

/**
 * 椭圆绘制组件。该组件通过设置宽度和高度属性绘制椭圆形状，在给定的矩形区域内渲染椭圆轮廓和填充区域。
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
declare const Ellipse: EllipseInterface;

/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const EllipseInstance: EllipseAttribute;