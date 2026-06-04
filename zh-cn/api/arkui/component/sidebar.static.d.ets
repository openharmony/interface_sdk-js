
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { Resource } from '../../global/resource';

import { Length, ResourceColor, Dimension } from './units';

import { CommonMethod, PixelMap, Bindable, AttributeModifier, DividerStyle } from './common';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * 容器内侧边栏样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SideBarContainerType {

  /**
   * 侧边栏嵌入到组件内，和内容区并列显示。
   * 
   * 整体容器大小不变时，显示侧边栏会导致内容区缩小，隐藏侧边栏会扩大内容区。
   * 
   * 组件尺寸小于[minContentWidth]{@link SideBarContainerAttribute.minContentWidth} + 
   * [minSideBarWidth]{@link SideBarContainerAttribute.minSideBarWidth}，并且未设置showSideBar时，侧边栏自动隐藏。
   * 
   * 未设置minSideBarWidth或者minContentWidth采用未设置接口的默认值进行计算。
   * 
   * 组件在自动隐藏后，如果通过点击控制按钮唤出侧边栏，则侧边栏悬浮在内容区上显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Embed = 0,

  /**
   * 侧边栏浮在内容区上面，不会影响内容区的大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Overlay = 1,

  /**
   * 组件尺寸大于等于minSideBarWidth + minContentWidth时，采用Embed模式显示。
   * 
   * 组件尺寸小于minSideBarWidth + minContentWidth时，采用Overlay模式显示。
   * 
   * 未设置minSideBarWidth或minContentWidth时，会使用未设置接口的默认值进行计算，若计算的值小于600vp，则使用600vp做为模式切换的断点值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO = 2,

  /**
   * 侧边栏位移。侧边栏是可见的，内容将离开屏幕，为侧边栏腾出空间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISPLACE =3
}

/**
 * 侧边栏显示位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SideBarPosition {

  /**
   * The sidebar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * The sidebar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 1
}

/**
 * 设置侧边栏控制按钮的图标。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonIconOptions {

  /**
   * 设置侧边栏显示时控制按钮的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  shown: string | PixelMap | Resource;

  /**
   * 设置侧边栏隐藏时控制按钮的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hidden: string | PixelMap | Resource;

  /**
   * 设置侧边栏显示和隐藏状态切换时控制按钮的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  switching?: string | PixelMap | Resource;
}

/**
 * 设置侧边栏控制按钮的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonStyle {

  /**
   * 设置侧边栏控制按钮距离容器左界限的间距。
   * 
   * 默认值：16vp
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 异常值时取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: double;

  /**
   * 设置侧边栏控制按钮距离容器上界限的间距。
   * 
   * 默认值：48vp
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 异常值时取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: double;

  /**
   * 设置侧边栏控制按钮的宽度。
   * 
   * 默认值：
   * 
   * API version 9及之前版本：32vp
   * 
   * 从API version 10开始：24vp
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 异常值时取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: double;

  /**
   * 设置侧边栏控制按钮的高度。
   * 
   * 默认值：
   * 
   * API version 9及之前版本：32vp
   * 
   * 从API version 10开始：24vp
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 异常值时取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: double;

  /**
   * 设置侧边栏控制按钮的图标。
   * 
   * 资源获取错误以及未设置该属性时，使用默认图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icons?: ButtonIconOptions;
}

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SideBarContainerAttribute extends CommonMethod {

  /**
   * 设置是否显示侧边栏。
   * 
   * 该属性支持双向绑定变量。
   *
   * @param { boolean | Bindable<boolean> | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showSideBar(value: boolean | Bindable<boolean> | undefined): this;

  /**
   * 设置侧边栏控制按钮的属性。
   *
   * @param { ButtonStyle | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default controlButton(value: ButtonStyle | undefined): this;

  /**
   * 设置是否显示控制按钮。
   *
   * @param { boolean | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showControlButton(value: boolean | undefined): this;

  /**
   * 当侧边栏的状态在显示和隐藏之间切换时触发回调。取值为undefined时，不使用回调函数。
   * 
   * 触发该事件的条件：
   * 
   * 1. showSideBar属性值变换时。
   * 2. showSideBar属性自适应行为变化时。
   * 3. 分割线拖拽触发[autoHide]{@link SideBarContainerAttribute.autoHide}时。
   *
   * @param { function | undefined } callback
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: ((value: boolean) => void) | undefined): this;

  /**
   * 设置侧边栏的宽度。设置为小于0的值时按默认值显示。受最小宽度和最大宽度限制，不在限制区域内取最近的点。
   * 
   * 该属性支持双向绑定变量。
   *
   * @param { Length | Bindable<Length> | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default sideBarWidth(value: Length | Bindable<Length> | undefined): this;

  /**
   * 设置侧边栏最小宽度。设置为小于0的值时按默认值显示。值不能超过侧边栏容器本身宽度，超过使用侧边栏容器本身宽度。
   * 
   * minSideBarWidth优先于侧边栏子组件minWidth，minSideBarWidth未设置时默认值优先级高于侧边栏子组件minWidth。
   *
   * @param { Length | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minSideBarWidth(value: Length | undefined): this;

  /**
   * 设置侧边栏最大宽度。设置为小于0的值时按默认值显示。值不能超过侧边栏容器本身宽度，超过使用侧边栏容器本身宽度。
   * 
   * maxSideBarWidth优先于侧边栏子组件maxWidth，maxSideBarWidth未设置时默认值优先级高于侧边栏子组件maxWidth。
   *
   * @param { Length | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxSideBarWidth(value: Length | undefined): this;

  /**
   * 设置当侧边栏拖拽到小于最小宽度后，是否自动隐藏。受minSideBarWidth属性方法影响，minSideBarWidth属性方法未设置值使用默认值。
   * 
   * 拖拽过程中判断是否要自动隐藏。小于最小宽度时需要阻尼效果触发隐藏（越界一段距离）。
   *
   * @param { boolean | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoHide(value: boolean | undefined): this;

  /**
   * 设置侧边栏显示位置。
   *
   * @param { SideBarPosition | undefined } value
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default sideBarPosition(value: SideBarPosition | undefined): this;

  /**
   * 设置分割线的样式。
   *
   * @param { DividerStyle | null | undefined } value - 分割线的样式。<br/>默认为DividerStyle：显示分割线。<br/>- null或undefined：行为不做处理，分
   *     割线样式与默认值保持一致。<br/>**说明：** <br/>API version 11及以下版本，null效果为不显示分割线。
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: DividerStyle | null | undefined): this;

  /**
   * 设置SideBarContainer组件内容区可显示的最小宽度。
   * 
   * 设置为小于0，内容区显示的最小宽度为360vp，未设置该属性时，组件内容区的可缩小到0。
   * 
   * Embed场景下，增大组件尺寸时仅增大内容区的尺寸。
   * 
   * 缩小组件尺寸时，先缩小内容区的尺寸至minContentWidth。继续缩小组件尺寸时，保持内容区宽度minContentWidth不变，优先缩小侧边栏的尺寸。
   * 
   * 当缩小侧边栏的尺寸至minSideBarWidth后，继续缩小组件尺寸时，
   * 
   * - 如果[autoHide]{@link SideBarContainerAttribute.autoHide}属性为false，则会保持侧边栏宽度
   * [minSideBarWidth]{@link SideBarContainerAttribute.minSideBarWidth}和内容区宽度minContentWidth不变，但内容区会被截断显示；
   * - 如果autoHide属性为true，则会优先隐藏侧边栏，然后继续缩小至内容区宽度minContentWidth后，内容区宽度保持不变，但内容区会被截断显示。
   * 
   * minContentWidth优先于侧边栏的[maxSideBarWidth]{@link SideBarContainerAttribute.maxSideBarWidth}与sideBarWidth属性，
   * minContentWidth未设置时默认值优先级低于设置的minSideBarWidth与maxSideBarWidth属性。
   *
   * @param { Dimension | undefined } value - SideBarContainer组件内容区可显示的最小宽度。<br/>默认值：360vp<br/>单位：vp<br/>取值为undefined时，按
   *     默认值处理。
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minContentWidth(value: Dimension | undefined): this;

  /**
   * 设置sideBar侧边栏是否可以通过手势显示或者隐藏。
   *
   * @param { boolean | undefined } value - 指示侧边栏是否可以通过手势显示或隐藏。
   *     <br>默认值：**false**。
   *     **true**：侧边栏可以通过手势来显示或隐藏。
   *     **false**：侧边栏不能通过手势显示或隐藏。
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default showSideBarWithGesture(value: boolean | undefined): this;

  /**
   * 动态设置SideBarContainer组件的属性方法。
   *
   * @param { AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   在当
   *     前组件上，动态设置属性方法，支持使用if/else语法。<br/>CommonMethod：通用属性和事件。<br/>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { SideBarContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置SideBarContainer选项。
   *
   * @param { SideBarContainerType } [type] - 设置侧边栏的显示类型。
   *     <br>默认值:SideBarContainerType.Embed
   * @returns { SideBarContainerAttribute } 返回SideBarContainerAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setSideBarContainerOptions(type?: SideBarContainerType): this;
}

/**
 * 创建侧边栏容器。
 *
 * @param { SideBarContainerType } [type] - 设置侧边栏的显示类型。<br/>默认值：SideBarContainerType.Embed
 * @param { CustomBuilder } [content_] - 可以包含子组件。<br/>**说明：** <br/>1. 子组件类型：系统组件和自定义组件，不支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。<br/>2. 子组件个数：必须且仅包含2个子组件。<
 *     br/>3. 子组件个数异常时：3个或以上子组件，显示第一个和第二个。1个子组件，显示侧边栏，内容区为空白。<br/>4. SideBarContainer走焦时，先在内容区走焦，再在侧边栏走焦。
 * @returns { SideBarContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SideBarContainer(
  type?: SideBarContainerType,
  content_?: CustomBuilder
): SideBarContainerAttribute;

/**
 * 定义侧边栏组件
 *
 * @param { CustomBuilderT<SideBarContainerAttribute> } style_ - 侧边栏属性实例
 * @param { CustomBuilder } [content_] - 内容区
 * @returns { SideBarContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function SideBarContainer(
 	style_: CustomBuilderT<SideBarContainerAttribute>,
 	content_?: CustomBuilder,
): SideBarContainerAttribute;