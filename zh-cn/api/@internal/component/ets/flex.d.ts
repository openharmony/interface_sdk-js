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
 * 设置Flex子组件的排列对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface FlexOptions {
    /**
     * 子组件在Flex容器上排列的方向，即主轴的方向。
     * 
     * 默认值：FlexDirection.Row 
     * 
     * 异常值按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    direction?: FlexDirection;
  
    /**
     * Flex容器是单行/列还是多行/列排列。
     * 
     * 默认值：FlexWrap.NoWrap 
     * 
     * 异常值按默认值处理。
     * 
     * **说明：** 
     * 
     * 在多行布局时，通过交叉轴方向，确认新行堆叠方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    wrap?: FlexWrap;
  
    /**
     * 所有子组件在Flex容器主轴上的对齐格式。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 异常值按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    justifyContent?: FlexAlign;
  
    /**
     * 所有子组件在Flex容器交叉轴上的对齐格式。 
     * 
     * 默认值：ItemAlign.Start 
     * 
     * 异常值按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    alignItems?: ItemAlign;
  
    /**
     * 当交叉轴存在额外空间时，多行内容之间的对齐方式。仅在wrap为Wrap或WrapReverse下生效。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 异常值按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    alignContent?: FlexAlign;
  
    /**
     * 所有子组件在Flex容器主轴或交叉轴的间距。
     * 
     * 默认值：{main: LengthMetrics.px(0), cross: LengthMetrics.px(0)} 
     * 
     * 非法值：按默认值处理。 
     * 
     * space为负数、百分比或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    space?: FlexSpaceOptions;
  }
  
  /**
   * 设置Flex容器的子组件在主轴或交叉轴的间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  declare interface FlexSpaceOptions {
    /**
     * Flex容器主轴上的space。
     * 
     * 默认值：LengthMetrics.px(0)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    main?: LengthMetrics;
  
    /**
     * Flex容器交叉轴上的space。
     * 
     * 默认值：LengthMetrics.px(0)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    cross?: LengthMetrics;
  }
  
  /**
   * Flex是以弹性方式布局子组件的容器组件，能够高效地排列、对齐子元素并分配剩余空间。
   * 
   * 具体指南请参考[弹性布局](docroot://ui/arkts-layout-development-flex-layout.md)。
   * 
   * > **说明：**
   * 
   * > - Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用[Column]{@link column}、[Row]{@link row}代替。最佳实践请参考
   * > [布局优化指导-合理使用布局组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance#section12745188175420)。
   * >
   * > - Flex组件主轴不设置长度时默认撑满父容器，如果包含设置[position]{@link CommonMethod#position}的子组件，此时Flex组件不会撑满父容器。[Column]{@link column}、
   * > [Row]{@link row}组件主轴不设置长度时默认跟随子节点大小。
   * >
   * > - Flex、Column、Row组件在没有子节点且不设置宽高时，默认宽高为-1。
   * >
   * > - 主轴长度可设置为auto使Flex自适应子组件布局，自适应时，Flex长度受[constraintSize]{@link CommonMethod#constraintSize}属性以及父容器传递的最大最小长度限制，且
   * > constraintSize属性优先级更高。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  interface FlexInterface {
    /**
     * Flex布局容器。
     *
     * @param { FlexOptions } value - 弹性布局子组件参数。
     * @returns { FlexAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (value?: FlexOptions): FlexAttribute;
  }
  
  /**
   * 支持[通用属性]{@link common}。
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
  declare class FlexAttribute extends CommonMethod<FlexAttribute> {
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { FlexAttribute } The attribute of the flex.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    pointLight(value: PointLightStyle): FlexAttribute;
  }
  
  /**
   * Flex是以弹性方式布局子组件的容器组件，能够高效地排列、对齐子元素并分配剩余空间。
   * 
   * 具体指南请参考[弹性布局](docroot://ui/arkts-layout-development-flex-layout.md)。
   * 
   * > **说明：**
   * 
   * > - Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用[Column]{@link column}、[Row]{@link row}代替。最佳实践请参考
   * > [布局优化指导-合理使用布局组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance#section12745188175420)。
   * >
   * > - Flex组件主轴不设置长度时默认撑满父容器，如果包含设置[position]{@link CommonMethod#position}的子组件，此时Flex组件不会撑满父容器。[Column]{@link column}、
   * > [Row]{@link row}组件主轴不设置长度时默认跟随子节点大小。
   * >
   * > - Flex、Column、Row组件在没有子节点且不设置宽高时，默认宽高为-1。
   * >
   * > - 主轴长度可设置为auto使Flex自适应子组件布局，自适应时，Flex长度受[constraintSize]{@link CommonMethod#constraintSize}属性以及父容器传递的最大最小长度限制，且
   * > constraintSize属性优先级更高。
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
  declare const Flex: FlexInterface;
  
  /**
   * Defines Flex Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const FlexInstance: FlexAttribute;