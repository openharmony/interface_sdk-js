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
 * 设置Row组件的子组件间距属性。
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
declare interface RowOptions {
    /**
     * 横向布局元素间距。
     * 
     * 从API version 9开始，space为负数或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。
     * 
     * 默认值：0
     * 
     * 单位：vp 
     * 
     * 非法值：按默认值处理。
     * 
     * **说明：** 
     * 
     * space取值是大于等于0的数字，或者可以转换为数字的字符串。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    space?: string | number;
  }
  
  /**
   * 沿水平方向布局的容器。
   * 
   * > **说明：**
   * 
   * > Row未设置宽度或高度时，在主轴或交叉轴方向上自适应子组件大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  interface RowInterface {
    /**
     * 创建水平方向线性布局容器，可以设置子组件的间距。
     * 
     * > **说明：**
     * >
     * > 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考
     * > [布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)。
     *
     * @param { object } value [since 7 - 17]
     * @param { ?RowOptions } options - 横向布局元素间距，支持设置number或string类型。 [since 18]
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options?: RowOptions): RowAttribute;
  
    /**
     * 创建水平方向线性布局容器，可以设置子组件的间距。
     *
     * @param { ?(RowOptions | RowOptionsV2) } options - 横向布局元素间距，支持设置number、string或Resource类型。
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18 dynamic
     */
    (options?: RowOptions | RowOptionsV2): RowAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   * 
   * 支持[通用事件]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare class RowAttribute extends CommonMethod<RowAttribute> {
    /**
     * 设置子组件在垂直方向上的对齐格式。
     *
     * @param { VerticalAlign } value - 子组件在垂直方向上的对齐格式。<br/>默认值：VerticalAlign.Center
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    alignItems(value: VerticalAlign): RowAttribute;
  
    /**
     * 设置子组件在水平方向上的对齐格式。
     *
     * @param { FlexAlign } value - 子组件在水平方向上的对齐格式。<br/>默认值：FlexAlign.Start
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    justifyContent(value: FlexAlign): RowAttribute;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    pointLight(value: PointLightStyle): RowAttribute;
    /**
     * 设置子组件在水平方向上的排列是否反转。
     *
     * @param { Optional<boolean> } isReversed - 子组件在水平方向上的排列是否反转。<br/>默认值：true，设置true表示子组件在水平方向上反转排列，设置false表示子组件在水平方向上正序
     *     排列。
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    reverse(isReversed: Optional<boolean>): RowAttribute;
  }
  
  /**
   * 沿水平方向布局的容器。
   * 
   * > **说明：**
   * 
   * > Row未设置宽度或高度时，在主轴或交叉轴方向上自适应子组件大小。
   * 
   * ###### 子组件
   * 
   * 可以包含子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare const Row: RowInterface;
  
  /**
   * Defines Row Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const RowInstance: RowAttribute;
  
  /**
   * 设置Row组件的子组件间距属性。
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
  interface RowOptionsV2 {
    /**
     * 横向布局元素间距。
     * 
     * space为负数或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。
     * 
     * 默认值：0 
     * 
     * 单位：vp 
     * 
     * 非法值：按默认值处理。
     * 
     * **说明：** 
     * 
     * space取值是大于等于0的数字，或者可以转换为数字的字符串，或者可以转换为数字的Resource类型数据。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18 dynamic
     */
    space?: SpaceType;
  }