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
 * Column组件构造函数中space支持的数据类型，取值类型为下表类型中的并集。
 *
 * @unionmember { string } 表示值类型为字符串，取值为可以转换为非负数字的字符串。取负数或不可转换的字符串时，按默认值0处理。
 * @unionmember { number } 表示类型为数字，取值为大于等于0的数字。取负数或非法值时，按默认值0处理。
 * @unionmember { Resource } 表示值为资源引用类型，取值为从系统资源或者应用资源中引入的数据值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type SpaceType = string | number | Resource;

/**
 * 设置Column组件的子组件间距属性。
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
interface ColumnOptions {
  /**
   * 纵向布局元素垂直方向间距。
   * 
   * space为负数或者[justifyContent]{@link ColumnAttribute#justifyContent}设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、
   * FlexAlign.SpaceEvenly时，space不生效。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0
   * 
   * 非法值：按默认值处理。
   * 
   * 单位：vp
   * 
   * **说明：**
   * 
   * space取值是大于等于0的数字，或者可以转换为非负数字的字符串。
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
 * 设置Column组件的子组件间距属性。间距类型SpaceType支持number、string或Resource类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ColumnOptionsV2 {
  /**
   * 设置纵向布局元素垂直方向间距。
   * 
   * space为负数或者[justifyContent]{@link ColumnAttribute#justifyContent}设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、
   * FlexAlign.SpaceEvenly时，space不生效。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0
   * 
   * 单位：vp
   * 
   * 非法值：按默认值处理。
   * 
   * **说明：**
   * 
   * space取值是大于等于0的数字，或者可以转换为非负数字的字符串，或者可以转换为数字的Resource类型数据。
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

/**
 * 沿垂直方向布局的容器。适用于需要将多个子组件按垂直方向依次排列的场景，如列表项、表单项、卡片内容等。支持设置子组件间距、对齐方式等属性，能够快速实现垂直方向的线性布局。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > Column未设置高度或宽度时，在主轴（垂直方向）或交叉轴（水平方向）方向上自适应子组件大小。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ColumnInterface {
  /**
   * 创建垂直方向线性布局容器，可以设置子组件的间距。
   * 
   * > **说明：**
   * >
   * > 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考<!--RP1-->
   * > [布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)<!--RP1End--
   * > >。
   *
   * @param { object } value [since 7 - 17]
   * @param { ColumnOptions } [options] - Column组件的间距配置选项。通过space属性设置纵向布局元素垂直方向间距。当需要为子组件设置固定垂直间距时传入此参数；省略时不设置子组件间距。
   *     <br> [since 18]
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: ColumnOptions): ColumnAttribute;
  /**
   * 创建垂直方向线性布局容器，可以设置子组件的间距。
   * 
   * > **说明：**
   * >
   * > 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考<!--RP1-->
   * > [布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)<!--RP1End--
   * > >。
   *
   * @param { ColumnOptions | ColumnOptionsV2 } [options] - Column组件的间距配置选项。通过space属性设置纵向布局元素垂直方向间距，space支持设置number、
   *     string或Resource类型。当需要为子组件设置固定垂直间距时传入此参数；省略时不设置子组件间距。
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: ColumnOptions | ColumnOptionsV2): ColumnAttribute;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
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
declare class ColumnAttribute extends CommonMethod<ColumnAttribute> {
  /**
   * 设置子组件在水平方向上的对齐格式。
   *
   * @param { HorizontalAlign } value - 子组件在水平方向上的对齐格式。
   *     <br>默认值：HorizontalAlign.Center
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignItems(value: HorizontalAlign): ColumnAttribute;

  /**
   * 设置子组件在垂直方向上的对齐格式。
   *
   * @param { FlexAlign } value - 子组件在垂直方向上的对齐格式。
   *     <br>默认值：FlexAlign.Start
   *     <br>**说明：** 若子组件不设置[flexShrink]{@link CommonMethod#flexShrink}，FlexAlign.Center和FlexAlign.End可能失效，详见下方说明。设置为
   *     FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时，[space]{@link ColumnOptions}属性不生效。
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  justifyContent(value: FlexAlign): ColumnAttribute;
  /**
   * 为Column组件添加点光源效果，影响周围标记为可被照亮组件的光照渲染。点光源是从特定位置向四周发射光线的光源类型，可用于增强UI界面的立体感和视觉层次。通过PointLightStyle可配置光源的位置、颜色、强度等参数。详细信
   * 息请参见[PointLightStyle]{@link PointLightStyle}对象说明。
   *
   * @param { PointLightStyle } value - 点光源样式，用于设置点光源照亮周围组件的UI效果。仅Image、Column、Flex、Row、Stack组件支持设置点光源。
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): ColumnAttribute;
  /**
   * 设置子组件在垂直方向上的排列是否反转。
   *
   * @param { Optional<boolean> } isReversed - 子组件在垂直方向上的排列是否反转。
   *     <br>默认值：true。设置true表示子组件在垂直方向上反转排列，设置false表示子组件在垂直方向上正序排列。
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  reverse(isReversed: Optional<boolean>): ColumnAttribute;
}

/**
 * 沿垂直方向布局的容器。适用于需要将多个子组件按垂直方向依次排列的场景，如列表项、表单项、卡片内容等。支持设置子组件间距、对齐方式等属性，能够快速实现垂直方向的线性布局。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > Column未设置高度或宽度时，在主轴（垂直方向）或交叉轴（水平方向）方向上自适应子组件大小。
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
declare const Column: ColumnInterface;

/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ColumnInstance: ColumnAttribute;