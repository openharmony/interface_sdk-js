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
 * 用于描述Polygon组件绘制属性。
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
declare interface PolygonOptions {
    /**
     * 宽度，取值范围≥0。
     * 
     * 默认值：0
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
     * 高度，取值范围≥0。
     * 
     * 默认值：0
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
   * 多边形绘制组件。
   * 
   * > **说明：**
   * 
   * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的
   * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  interface PolygonInterface {
    /**
     * Uses new to create Polygon.
     * Anonymous Object Rectification.
     *
     * @param { PolygonOptions } [options] - Polygon options [since 18]
     * @returns { PolygonAttribute } [since 18]
     * @syscap SystemCapability.ArkUI.ArkUI.Full [since 9]
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    new (options?: PolygonOptions): PolygonAttribute;
  
    /**
     * 用于绘制多边形的构造函数。
     *
     * @param { object } value [since 7 - 17]
     * @param { PolygonOptions } [options] - Polygon绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options?: PolygonOptions): PolygonAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare class PolygonAttribute extends CommonShapeMethod<PolygonAttribute> {
    /**
     * 设置多边形的顶点坐标列表，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。异常值按照默认值处理。
     *
     * @param { Array<any> } value - 多边形的顶点坐标列表。使用时传入一个二维数组，每个子数组表示一个顶点的[x, y]坐标。<br/>默认值：[]（空数组）<br/>默认单位：vp <br/>异常值
     *     undefined和null按照默认值处理。
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    points(value: Array<any>): PolygonAttribute;
  }
  
  /**
   * 多边形绘制组件。
   * 
   * > **说明：**
   * 
   * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的
   * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
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
   * @noninterop
   * @since 7 dynamic
   */
  declare const Polygon: PolygonInterface;
  
  /**
   * Defines Polygon Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const PolygonInstance: PolygonAttribute;