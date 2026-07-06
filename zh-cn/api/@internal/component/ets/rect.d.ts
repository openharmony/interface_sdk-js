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
 * 用于描述Rect组件绘制属性。
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
declare interface RectOptions {
    /**
     * 宽度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
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
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    height?: Length;
  
    /**
     * 圆角半径，支持分别设置四个角的圆角度数，取值范围≥0。
     * 
     * 该属性和radiusWidth/radiusHeight属性效果类似，在组合使用时优先于radiusWidth/radiusHeight生效。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * @type { ?(number | string | Array<any>) } [since 7 - 19]
     * @type { ?(Length | Array<any>) } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radius?: Length | Array<any>;
  }
  
  /**
   * 用于描述Rect绘制属性。
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
  declare interface RoundedRectOptions {
    /**
     * 宽度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
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
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    height?: Length;
  
    /**
     * 圆角宽度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radiusWidth?: Length;
  
    /**
     * 圆角高度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radiusHeight?: Length;
  }
  
  /**
   * 矩形绘制组件。
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
  interface RectInterface {
    /**
     * Use new function to create Rect.
     * Anonymous Object Rectification.
     *
     * @param { object } value [since 7 - 17]
     * @param { RectOptions | RoundedRectOptions } [options] - Rect options [since 18]
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    new (
      options?: RectOptions | RoundedRectOptions,
    ): RectAttribute;
  
    /**
     * 用于绘制矩形的构造函数。
     *
     * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
     *     {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;
     *     } } value [since 7 - 17]
     * @param { RectOptions | RoundedRectOptions } [options] - Rect绘制属性。<br/>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (
      options?: RectOptions | RoundedRectOptions,
    ): RectAttribute;
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
  declare class RectAttribute extends CommonShapeMethod<RectAttribute> {
    /**
     * 设置圆角的宽度，仅设置宽时宽高一致，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。 异常值按照默认值处理。
     *
     * @param { number | string } value - 圆角的宽度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined按照默认值处理。 [since 7 - 19]
     * @param { Length } value - 圆角的宽度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined按照默认值处理。 [since 20]
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radiusWidth(value: Length): RectAttribute;
  
    /**
     * 设置圆角的高度，仅设置高时宽高一致，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。  异常值按照默认值处理。
     *
     * @param { number | string } value - 圆角的高度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined按照默认值处理。 [since 7 - 19]
     * @param { Length } value - 圆角的高度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined按照默认值处理。 [since 20]
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radiusHeight(value: Length): RectAttribute;
  
    /**
     * 设置圆角半径大小，取值范围≥0，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。异常值按照默认值处理。
     *
     * @param { number | string | Array<any> } value - 圆角半径大小。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined和null按照
     *     [[0, 0], [0, 0], [0, 0], [0, 0]]处理。 [since 7 - 19]
     * @param { Length | Array<any> } value - 圆角半径大小。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined和null按照
     *     [[0, 0], [0, 0], [0, 0], [0, 0]]处理。 [since 20]
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    radius(value: Length | Array<any>): RectAttribute;
  }
  
  /**
   * 矩形绘制组件。
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
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
   */
  declare const Rect: RectInterface;
  
  /**
   * Rect attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead RectInstance
   * @noninterop
   */
  declare const RectInStance: RectAttribute;
  
  /**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @noninterop [since 11]
   */
  declare const RectInstance: RectAttribute;