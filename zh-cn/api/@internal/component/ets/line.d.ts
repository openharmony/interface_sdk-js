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
 * 用于描述Line组件绘制属性。
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
interface LineOptions {
  /**
   * 宽度。
   * 
   * 值为异常值或缺省时，根据startPoint和endPoint自动计算所需的绘制区域宽度。
   * 
   * 默认单位：vp
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
   * 高度。
   * 
   * 值为异常值或缺省时，根据startPoint和endPoint自动计算所需的绘制区域高度。
   * 
   * 默认单位：vp
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
 * Line组件用于在应用界面中绘制直线，支持自定义直线的起点、终点、颜色、宽度、透明度、虚线样式、端点样式等属性。适用于绘制分隔线、装饰性线条、图表中的坐标轴或连接线、自定义图形边框等场景。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link ../../../arkui/AttributeUpdater}类的
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
 * >
 * > - Line组件无法形成闭合区域，fill和fillOpacity属性设置无效。
 * >
 * > - Line组件不支持拐角，strokeLineJoin和strokeMiterLimit属性设置无效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface LineInterface {
  /**
   * Uses new to create the line.
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { LineOptions } [options] - Line options [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: LineOptions): LineAttribute;

  /**
   * 用于绘制直线的构造函数。Line组件在width和height定义的矩形区域内绘制直线，绘制区域的左上角为坐标原点(0,0)，x轴向右延伸，y轴向下延伸。
   *
   * @param { object } value - [since 7 - 17]
   * @param { LineOptions } [options] - Line组件绘制区域，包含width和height属性，用于设置Line组件的宽高。不传递此参数时，Line组件的width和height属性将按照各自属性的缺
   *     省逻辑处理（参见LineOptions对象说明）。
   *     <br>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: LineOptions): LineAttribute;
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
declare class LineAttribute extends CommonShapeMethod<LineAttribute> {
  /**
   * 设置直线起点坐标点（相对于Line组件绘制区域的左上角原点），支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，异常值按照默认值处理。
   *
   * @param { Array<any> } value - 直线起点坐标点（相对于Line组件绘制区域的左上角原点），单位vp。数组格式为[x坐标, y坐标]，数组长度必须为2，元素应为Length类型。
   *     <br>默认值：[0, 0] 
   *     <br>异常值undefined和null按照默认值处理。
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  startPoint(value: Array<any>): LineAttribute;

  /**
   * 设置直线终点坐标点（相对于Line组件绘制区域的左上角原点），支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，异常值按照默认值处理。
   *
   * @param { Array<any> } value - 直线终点坐标点（相对于Line组件绘制区域的左上角原点），单位vp。数组格式为[x坐标, y坐标]，数组长度必须为2，元素应为Length类型。
   *     <br>默认值：[0, 0] 
   *     <br>异常值undefined和null按照默认值处理。
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  endPoint(value: Array<any>): LineAttribute;
}

/**
 * Line组件用于在应用界面中绘制直线，支持自定义直线的起点、终点、颜色、宽度、透明度、虚线样式、端点样式等属性。适用于绘制分隔线、装饰性线条、图表中的坐标轴或连接线、自定义图形边框等场景。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link ../../../arkui/AttributeUpdater}类的
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
 * >
 * > - Line组件无法形成闭合区域，fill和fillOpacity属性设置无效。
 * >
 * > - Line组件不支持拐角，strokeLineJoin和strokeMiterLimit属性设置无效。
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
declare const Line: LineInterface;

/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const LineInstance: LineAttribute;