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
     * 值为异常值或缺省时按照自身内容需要的宽度处理。
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
     * 值为异常值或缺省时按照自身内容需要的高度处理。
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
   * 直线绘制组件。
   * 
   * > **说明：**
   * >
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
     * 用于绘制直线的构造函数。
     *
     * @param { object } value [since 7 - 17]
     * @param { LineOptions } [options] - Line绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
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
  declare class LineAttribute extends CommonShapeMethod<LineAttribute> {
    /**
     * 设置直线起点坐标点（相对坐标），支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，异常值按照默认值处理。
     *
     * @param { Array<any> } value - 直线起点坐标点（相对坐标），单位vp。<br/>默认值：[0, 0] <br/>异常值undefined和null按照默认值处理。
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
     * 设置直线终点坐标点（相对坐标），支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，异常值按照默认值处理。
     *
     * @param { Array<any> } value - 直线终点坐标点（相对坐标），单位vp。<br/>默认值：[0, 0] <br/>异常值undefined和null按照默认值处理。
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
   * 直线绘制组件。
   * 
   * > **说明：**
   * >
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