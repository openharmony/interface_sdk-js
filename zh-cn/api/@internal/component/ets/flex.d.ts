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
   * 子组件在Flex容器上排列的方向，即主轴的方向。设置后，子组件将按照指定的方向在主轴上依次排列。
   * 
   * 默认值：FlexDirection.Row 
   * 
   * 异常值按默认值处理。
   * 
   * 取值包括：
   * 
   * - Row：主轴为水平方向，起点在左端。
   * - RowReverse：主轴为水平方向，起点在右端。
   * - Column：主轴为垂直方向，起点在上端。
   * - ColumnReverse：主轴为垂直方向，起点在下端。
   * 
   * Row和RowReverse的起点位置受容器的direction属性影响。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  direction?: FlexDirection;

  /**
   * Flex容器是单行/列还是多行/列排列。设置后，子组件将在容器中按指定的换行方式进行布局。
   * 
   * 默认值：FlexWrap.NoWrap 
   * 
   * 异常值按默认值处理。
   * 
   * 取值包括：
   * 
   * - NoWrap：不换行，子组件总宽度超过容器宽度时被截断。
   * - Wrap：换行，第一行在上方。
   * - WrapReverse：换行，第一行在下方。
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
   * 所有子组件在Flex容器主轴上的对齐格式。设置后，子组件将按照指定的对齐方式在主轴方向上分布和排列。
   * 
   * 默认值：FlexAlign.Start 
   * 
   * 异常值按默认值处理。
   * 
   * 取值包括：
   * 
   * - Start：首端对齐。
   * - Center：居中对齐。
   * - End：尾端对齐。
   * - SpaceBetween：两端对齐，子组件之间间距相等。
   * - SpaceAround：子组件两侧间距相等。
   * - SpaceEvenly：子组件之间及两端间距完全相等。
   * 
   * **说明：** 当justifyContent设置为SpaceBetween、SpaceAround、SpaceEvenly时，space参数不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  justifyContent?: FlexAlign;

  /**
   * 所有子组件在Flex容器交叉轴上的对齐格式。设置后，子组件将按照指定的对齐方式在交叉轴方向上定位。
   * 
   * 默认值：ItemAlign.Start 
   * 
   * 异常值按默认值处理。
   * 
   * 取值包括：
   * 
   * - Auto：使用父容器的对齐方式。
   * - Start：首部对齐。
   * - Center：居中对齐。
   * - End：尾部对齐。
   * - Stretch：拉伸填充。
   * - Baseline：基线对齐。
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
   * 取值包括：
   * 
   * - Start：首端对齐。
   * - Center：居中对齐。
   * - End：尾端对齐。
   * - SpaceBetween：两端对齐，行与行之间间距相等。
   * - SpaceAround：每行两侧间距相等。
   * - SpaceEvenly：行与行之间及两端间距完全相等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent?: FlexAlign;

  /**
   * 设置Flex容器子组件在主轴和交叉轴上的间距，包含main和cross两个属性。当需要调整子组件之间的间距时传入此参数，不传入时子组件之间无间距。
   * 
   * 默认值：{main: LengthMetrics.px(0), cross: LengthMetrics.px(0)} 
   * 
   * 非法值：按默认值处理。 
   * 
   * 当space.main或space.cross的值为负数，或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly
   * 时，space参数不生效。其中main属性在单行或多行布局时均生效，cross属性仅在wrap为Wrap或WrapReverse（多行布局）时生效。
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
   * Flex容器主轴上相邻子组件之间的间距。设置后，主轴方向相邻子组件之间将按指定间距进行分隔，在单行或多行布局时均生效。当space.main为负数，或者justifyContent设置为FlexAlign.SpaceBetween
   * 、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时，该参数不生效。
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
   * Flex容器交叉轴上相邻行之间的间距。设置后，交叉轴方向相邻行之间将按指定间距进行分隔，仅在多行布局（wrap为Wrap或WrapReverse）时生效。当space.cross为负数，或者justifyContent设置为
   * FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时，该参数不生效。
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
 * >
 * > - Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用[Column]{@link ./column}、[Row]{@link ./row}代替。最佳实践请参考布局优化指导-合理使用布局组件。
 * >
 * > - Flex组件主轴不设置长度时默认撑满父容器，如果包含设置[position]{@link CommonMethod#position}的子组件，此时Flex组件不会撑满父容器。[Column]{@link ./column}、
 * > [Row]{@link ./row}组件主轴不设置长度时默认跟随子节点大小。
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
 * @since 7 dynamic
 * @noninterop
 */
interface FlexInterface {
  /**
   * 创建Flex布局容器，用于以弹性方式排列、对齐子组件并分配剩余空间。
   *
   * @param { FlexOptions } value - Flex容器的配置选项，用于设置子组件的排列方向、换行方式、对齐方式和间距。不传入时使用默认配置，各属性默认值详见
   *     [FlexOptions](docroot://reference/apis-arkui/arkui-ts/ts-container-flex.md#flexoptions对象说明)对象说明。
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
 * 支持[通用属性]{@link ./common}。
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class FlexAttribute extends CommonMethod<FlexAttribute> {
  /**
   * 设置点光源样式，用于为Flex组件添加点光源效果，影响周围标记为可被照亮组件的光照渲染。通过PointLightStyle可配置光源的位置、颜色、强度等参数。
   *
   * @param { PointLightStyle } value - 点光源样式，用于设置光源的位置、颜色、强度等属性，影响组件的光照效果。仅Image、Column、Flex、Row、Stack组件支持设置点光源。
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
 * >
 * > - Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用[Column]{@link ./column}、[Row]{@link ./row}代替。最佳实践请参考布局优化指导-合理使用布局组件。
 * >
 * > - Flex组件主轴不设置长度时默认撑满父容器，如果包含设置[position]{@link CommonMethod#position}的子组件，此时Flex组件不会撑满父容器。[Column]{@link ./column}、
 * > [Row]{@link ./row}组件主轴不设置长度时默认跟随子节点大小。
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
 * @since 7 dynamic
 * @noninterop
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