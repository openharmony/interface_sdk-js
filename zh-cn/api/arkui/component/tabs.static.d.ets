
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { BackgroundBlurStyleOptions, BackgroundEffectOptions, BlurStyle, Callback, CommonMethod, TranslateOptions, DividerStyle, Bindable } from './common';

import { EdgeEffect, PageFlipMode, Curve } from "./enums";

import { Dimension, Length, ResourceColor } from "./units";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

import { AttributeModifier, CommonMethod, ICurve } from "./common";

import { CommonModifier } from '@ohos.arkui.modifier';

/**
 * TabBar布局模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarMode {

  /**
   * 每一个TabBar均使用实际布局宽度，超过总长度（横向Tabs的[barWidth]{@link TabsAttribute.barWidth}，纵向Tabs的
   * [barHeight]{@link TabsAttribute.default barHeight(value: Length | undefined)}）后可滑动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Scrollable = 0,

  /**
   * 所有TabBar平均分配barWidth宽度（纵向时平均分配barHeight高度）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fixed = 1
}

/**
 * Tabs组件和父组件的嵌套滚动模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TabsNestedScrollMode {

  /**
   * 滚动效果只会在Tabs组件内发生，不会发生其他的嵌套滚动行为，也就是说，当内层组件滚动达到边界时，父容器不会随之滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SELF_ONLY = 0,

  /**
   * Tabs组件首先滚动，当它到达边界时，父容器开始滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SELF_FIRST = 1
}

/**
 * 点击[TabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#tabbar)页签时切换TabContent的动画形式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AnimationMode {

  /**
   * 先加载目标页内容，再开始切换动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_FIRST = 0,

  /**
   * 先开始切换动画，再加载目标页内容；生效需要同时需要满足：Tabs的height、width没有设置成auto。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_FIRST = 1,

  /**
   * 关闭默认动画。调用TabsController的[changeIndex]{@link TabsController.changeIndex}接口切换TabContent时该枚举值不生效。
   *
   * 可以通过设置[animationDuration]{@link TabsAttribute.animationDuration}为0实现调用TabsController的changeIndex接口时不带动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NO_ANIMATION = 2,

  /**
   * 先加载目标页内容，再无动画跳转到目标页附近，最后有动画跳转到目标页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_FIRST_WITH_JUMP = 3,

  /**
   * 先无动画跳转到目标页附近，再有动画跳转到目标页，最后加载目标页内容。此项生效需要同时需要满足：Tabs的height、width没有设置成auto。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_FIRST_WITH_JUMP = 4
}

/**
 * Tabs页签位置枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarPosition {

  /**
   * vertical属性方法设置为true时，页签位于容器左侧；vertical属性方法设置为false时，页签位于容器顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * vertical属性方法设置为true时，页签位于容器右侧；vertical属性方法设置为false时，页签位于容器底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 1
}

/**
 * [Scrollable]{@link TabsAttribute.barMode}模式下不滚动时的页签排布方式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutStyle {

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   * 当页签内容不超过TabBar宽度时，TabBar不可滚动，页签紧凑居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALWAYS_CENTER = 0,

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   * 当页签内容不超过TabBar宽度时，TabBar不可滚动，且所有页签平均分配TabBar宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALWAYS_AVERAGE_SPLIT = 1,

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   * 当页签内容不超过TabBar宽度但超过TabBar宽度一半时，TabBar不可滚动，页签紧凑居中。
   * 当页签内容不超过TabBar宽度一半时，TabBar不可滚动，保证页签居中排列在TabBar宽度一半，且间距相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SPACE_BETWEEN_OR_CENTER = 2
}

/**
 * 子组件的缓存模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TabsCacheMode {

  /**
   * 缓存当前显示的子组件和其两侧的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存2n+1个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CACHE_BOTH_SIDE = 0,

  /**
   * 缓存当前显示的子组件和最近切换过的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存n+1个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CACHE_LATEST_SWITCHED = 1
}

/**
 * Tabs组件的控制器，用于控制Tabs组件进行页签切换。不支持一个TabsController控制多个Tabs组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TabsController {

  /**
   * TabsController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 控制Tabs切换到指定页签。
   *
   * @param { int } value - 页签在Tabs里的索引值，索引值从0开始。<br/>**说明：** <br/>设置小于0或大于最大数量的值时，取默认值0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  changeIndex(value: int): void;

  /**
   * 控制Tabs预加载指定子节点。调用该接口后会一次性加载所有指定的子节点，因此为了性能考虑，建议分批加载子节点。
   *
   * > **说明：**
   * >
   * > - Tabs的preloadItems需要在Tabs创建之后去调用，首次预加载推荐在Tabs的
   * > [onAppear](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-show-hide.md#onappear)生命周期中去控制。
   * >
   * > - 如果TabsController对象未绑定任何Tabs组件，直接调用该接口，会抛出JS异常。因此使用该接口时，建议通过try-catch捕获异常。
   * >
   * > - 使用preloadItems预加载标签页时，若需自定义TabBar上的显示内容，推荐使用ComponentContent实现，使用示例请参考
   * > [示例9](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#示例9通过componentcontent设置tabbar)。
   *
   * @param { Array<int> | undefined } indices - 需预加载的子节点的下标数组。<br/>默认值：空数组。<br/>取值为undefined时，按默认值处理。
   * @returns { Promise<void> } - 预加载完成后触发的回调。
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<int>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  preloadItems(indices: Array<int> | undefined): Promise<void>;

  /**
   * 设置TabBar的平移距离。
   *
   * > **说明：**
   * >
   * > 当使用
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)
   * > 或
   * > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13)
   * > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarTranslate接口设置的TabBar平移距离会失效。因此不建议同
   * > 时使用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarTranslate接口。
   *
   * @param { TranslateOptions } translate - 设置TabBar的平移距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTabBarTranslate(translate: TranslateOptions): void;

  /**
   * 设置TabBar的不透明度。
   *
   * > **说明：**
   * >
   * > 当使用
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)
   * > 或
   * > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13)
   * > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarOpacity接口设置的TabBar不透明度会失效。因此不建议同时使
   * > 用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarOpacity接口。
   *
   * @param { double } 设置TabBar的不透明度，取值范围为[0.0, 1.0]，设置的值小于0.0时，按0.0处理，设置的值大于1.0时，按1.0处理。<br> 默认值：1.0。 - 设置TabBar的不透明度，取值范围为[0.0, 1.0]，设置的值小于0.0时，按0.0处理，设置的值大于1.0时，按1.0处理。<br> 默认值：1.0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTabBarOpacity(opacity: double): void;
}

/**
 * Tabs组件参数，设置Tabs的页签位置，当前显示页签的索引，Tabs控制器和TabBar的[通用属性]{@link ./../../@internal/component/ets/common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TabsOptions {

  /**
   * 设置Tabs的页签位置。
   * 默认值： BarPosition.Start。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barPosition?: BarPosition;

  /**
   * 设置当前显示页签的索引。
   * **说明：**
   * 设置为小于0的值时按默认值显示.
   * 可选值为[0, TabContent子节点数量-1].
   * 直接修改index跳页时，切换动效不生效.
   * 使用TabController的[changeIndex]{@link TabsController.
   * changeIndex}时，默认生效切换动效，可以设置
   * [animationDuration]{@link TabsAttribute.
   * animationDuration}为0关闭动画.
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.
   * md)双向绑定变量.
   * Tabs重建、系统资源切换（如系统字体切换、系统深浅色切换）或者组件属性变化时，会跳转到index对应的页面.
   * 若需要在上述情况下不跳转，建议使用双向绑定。 默认值： 0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index?: int | Bindable<int>;

  /**
   * 设置Tabs控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: TabsController;

  /**
   * 设置TabBar的[通用属性]{@link ./../../@internal/component/ets/common}。
   * **说明：**
   * 动态置为undefined时会保持当前状态不变，不会重置各通用属性。
   * 由一个CommonModifier切换为另一个CommonModifier时，重复属性会进行覆盖，非重复属性会同时生效，不会重置前一个CommonModifier的通用属性。
   * Tabs的[barWidth]{@link TabsAttribute.barWidth}、
   * [barHeight]{@link TabsAttribute.default barHeight(value: Length | undefined)}、
   * [barBackgroundColor]{@link TabsAttribute.barBackgroundColor}、
   * [barBackgroundBlurStyle]{@link TabsAttribute.default barBackgroundBlurStyle(style: BlurStyle | undefined, options: BackgroundBlurStyleOptions | undefined)}
   * 、[barBackgroundEffect]{@link TabsAttribute.barBackgroundEffect}属性会覆盖CommonModifier的
   * [width](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#width)、
   * [height](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#height)、
   * [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor18)
   * 、
   * [backgroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle18)
   * 、
   * [backgroundEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundeffect18)
   * 属性。
   * [align](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#align)属性仅在
   * [BarMode.Scrollable](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs copy.md#barmode10-1)模式下生效，且Tabs为横向
   * 时还需[nonScrollableLayoutStyle]{@link ScrollableBarModeOptions}未设置或设置为异常值时才能生效。
   * [TabContent]{@link ./../../@internal/component/ets/tab_content}组件的
   * [tabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#tabbar18)属性为底部页签样式时不支持拖拽功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barModifier?: CommonModifier;
}

/**
 * Tabs组件动画相关信息集合。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabsAnimationEvent {

  /**
   * Tabs当前显示元素在主轴方向上，相对于Tabs起始位置的位移。
   * 单位为： vp。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentOffset: double;

  /**
   * Tabs动画目标元素在主轴方向上，相对于Tabs起始位置的位移。
   * 单位为： vp。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  targetOffset: double;

  /**
   * Tabs离手动画开始时的离手速度。，默认值为0。
   * 单位为： vp/s。
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  velocity: double;
}

/**
 * TabBar栅格化方式设置的对象，包括栅格模式下的column边距和间隔，以及小、中、大屏下，页签占用的columns数量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BarGridColumnOptions {

  /**
   * 小屏下，页签占用的columns数量，必须是非负偶数。小屏为大于等于320vp但小于600vp。
   * 取值范围为全体整数，默认值为-1，代表页签占用TabBar全部宽度。 默认值： -1。
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sm?: int;

  /**
   * 中屏下，页签占用的columns数量，必须是非负偶数。中屏为大于等于600vp但小于800vp。
   * 取值范围为全体整数，默认值为-1，代表页签占用TabBar全部宽度。 默认值： -1。
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  md?: int;

  /**
   * 大屏下，页签占用的columns数量，必须是非负偶数。大屏为大于等于840vp但小于1024vp。
   * 取值范围为全体整数，默认值为-1，代表页签占用TabBar全部宽度。 默认值： -1。
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lg?: int;

  /**
   * 栅格模式下的column边距（不支持百分比设置）。
   * 单位: vp。 默认值： 24。
   *
   * @default 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: Dimension;

  /**
   * 栅格模式下的column间隔（不支持百分比设置）。
   * 单位：vp。 默认值： 24。
   *
   * @default 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  gutter?: Dimension;
}

/**
 * Scrollable模式下的TabBar的布局样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ScrollableBarModeOptions {

  /**
   * Scrollable模式下的TabBar的左右边距（不支持百分比设置）。
   * 单位：vp。 默认值： 0。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: Dimension;

  /**
   * Scrollable模式下不滚动时的页签排布方式。
   * 默认值： LayoutStyle.ALWAYS_CENTER。
   *
   * @default LayoutStyle.ALWAYS_CENTER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  nonScrollableLayoutStyle?: LayoutStyle;
}

/**
 * 切换动画开始时触发的回调。
 *
 * @param { int } index - 当前显示元素的索引，索引从0开始。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { int } targetIndex - 当前显示元素的索引，索引从0开始。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对Tabs起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsAnimationStartCallback = (index: int, targetIndex: int, extraInfo: TabsAnimationEvent) => void;

/**
 * 切换动画结束时触发的回调。
 *
 * @param { int } index - 当前显示元素的索引，索引从0开始。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsAnimationEndCallback = (index: int, extraInfo: TabsAnimationEvent) => void;

/**
 * 在页面跟手滑动过程中，逐帧触发的回调。
 *
 * @param { int } index - 当前显示元素的索引，索引从0开始。 <br/>
 *     取值范围为全体整数
 *     取值限定为整数。
 *     取值范围：[0, 索引值-1]
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsGestureSwipeCallback = (index: int, extraInfo: TabsAnimationEvent) => void;

/**
 * 自定义Tabs页面切换动画开始时触发的回调。
 *
 * @param { int } from - 动画开始时，当前页面的index值，索引从0开始。<br/>
 *     取值范围为全体整数
 *     取值限定为整数。取值约束:取值范围：[0, index-1]
 *     当设置的值超过索引值或小于0时无转场动画。
 * @param { int } to - 动画开始时，目标页面的index值，索引从0开始。<br/>
 *     取值范围为全体整数
 *     取值限定为整数。取值约束:取值范围：[0,索引值]
 *     当设置的值超过索引值或小于0时无转场动画。
 * @returns { TabContentAnimatedTransition | undefined } Returns animated transition options of tab or undefined.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TabsCustomContentTransitionCallback = (from: int, to: int) => (TabContentAnimatedTransition | undefined);

/**
 * 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。
 *
 * @param { int } currentIndex - 当前显示页面的index索引，索引从0开始计算。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { int } comingIndex - 将要显示的新页面的index索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsContentWillChangeCallback = (currentIndex: int, comingIndex: int) => boolean;

/**
 * Tabs滑动时触发的回调。
 * > **说明：**
 * >
 * > - 例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的selectedIndex为0、index为0、
 * > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度。第二次回调的selectedIndex仍为0、index为1、position为当前帧第1页相对于动画开始前第0
 * > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。
 * >
 * > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。
 *
 * @param { int } selectedIndex - 当前选中页面的索引。例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每一次回调的selectedIndex都为0。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { int } index - 视窗内页面的索引。例如，页面滑动过程中，视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的index为0，第二次回调的index为1。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { double } position - index页面相对于Tabs主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。例如，一个横向Tabs中，当前选中的页签索引为0，从第0页往左切换到第1页的
 *     动画过程中，若刚好有一帧第0页和第1页分别占用视窗的30%和70%时，当前帧会触发两次回调。其中，第一次回调的position为-0.7，表示当前帧第0页在Tabs主轴起始位置的左侧，且第0页左侧位置距离Tabs主轴起始位置为
 *     视窗的70%，即第0页往左移动了视窗70%的距离。第二次回调的position为0.3，表示当前帧第1页在Tabs主轴起始位置的右侧，且第1页左侧位置距离Tabs主轴起始位置为视窗的30%，实际上第1页也是往左移动了视窗70%
 *     的距离。
 * @param { double } mainAxisLength - index页面相对于Tabs主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。例如，一个横向Tabs中，当前选中的页签索引为0，从第0页往左切换到第1页的
 *     动画过程中，若刚好有一帧第0页和第1页分别占用视窗的30%和70%时，当前帧会触发两次回调。其中，第一次回调的position为-0.7，表示当前帧第0页在Tabs主轴起始位置的左侧，且第0页左侧位置距离Tabs主轴起始位置为
 *     视窗的70%，即第0页往左移动了视窗70%的距离。第二次回调的position为0.3，表示当前帧第1页在Tabs主轴起始位置的右侧，且第1页左侧位置距离Tabs主轴起始位置为视窗的30%，实际上第1页也是往左移动了视窗70%
 *     的距离。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsContentDidScrollCallback = (selectedIndex: int, index: int, position: double, mainAxisLength: double) => void;

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TabsAttribute extends CommonMethod {

  /**
   * 设置是否为纵向Tabs。
   *
   * @param { boolean | undefined } value - 是否为纵向Tabs。<br/>默认值：false，横向Tabs，为true时纵向Tabs。<br/>当横向Tabs设置height为auto时，
   *     Tabs组件高度自适应子组件高度，即为[tabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#tabbar)高度+
   *     divider线宽+TabContent高度+上下padding值+上下border宽度。<br/>当纵向Tabs设置width为auto时，Tabs组件宽度自适应子组件宽度，即为tabBar宽度+divider线宽+
   *     TabContent宽度+左右padding值+左右border宽度。<br/>尽量保持每一个页面中的子组件尺寸大小一致，避免滑动页面时出现页面切换动画跳动现象。<br/>true：纵向Tabs；false：横向
   *     Tabs。<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default vertical(value: boolean | undefined): this;

  /**
   * 设置Tabs的页签位置。
   *
   * @param { BarPosition | undefined } value - 设置Tabs的页签位置。<br/>默认值：BarPosition.Start<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barPosition(value: BarPosition | undefined): this;

  /**
   * 设置是否可以通过滑动页面进行页面切换。
   *
   * @param { boolean | undefined } value - 是否可以通过滑动页面进行页面切换。<br/>默认值：true，可以通过滑动页面进行页面切换。为false时不可滑动切换页面。<br/>true：可以
   *     滑动切换页面；false：不可滑动切换页面。<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollable(value: boolean | undefined): this;

  /**
   * 设置TabBar布局模式。
   *
   * @param { BarMode | undefined } value - 布局模式。<br/>默认值：BarMode.Fixed<br/>取值为undefined时，按默认值处理。
   * @param { ScrollableBarModeOptions | undefined } [options] - Scrollable模式下的TabBar的布局样式。<br/>**说明：** <br/>仅
   *     Scrollable且水平模式下有效。<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barMode(value: BarMode | undefined, options?: ScrollableBarModeOptions | undefined): this;

  /**
   * 设置TabBar的宽度值。设置为小于0或大于Tabs宽度值时，按默认值显示。
   *
   * @param { Length | undefined } value - TabBar的宽度值。<br/>默认值：<br/>未设置
   *     [SubTabBarStyle]{@link ./../../@internal/component/ets/tab_content:SubTabBarStyle}和
   *     [BottomTabBarStyle]{@link ./../../@internal/component/ets/tab_content:BottomTabBarStyle}的TabBar且vertical属性为
   *     false时，默认值为Tabs的宽度。<br/>未设置SubTabBarStyle和BottomTabBarStyle的TabBar且vertical属性为true时，默认值为56vp。<br/>设置
   *     SubTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。<br/>设置SubTabBarStyle样式且vertical属性为true时，默认值为56vp。<br/>设置
   *     BottomTabBarStyle样式且vertical属性为true时，默认值为96vp。<br/>设置BottomTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。<br/>取
   *     值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barWidth(value: Length | undefined): this;

  /**
   * 设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度。height设置为小于0或大于Tabs高度值时，按默认值显示。
   *
   * API version 14之前的版本，若设置barHeight为固定值后，TabBar无法扩展底部安全区。从API version 14开始支持配合
   * [safeAreaPadding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#safeareapadding14)属性，当
   * safeAreaPadding不设置bottom或者bottom设置为0时，可以实现扩展安全区。
   *
   * @param { Length | undefined } value - TabBar的高度值。<br/>默认值：<br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为
   *     false时，默认值为56vp。<br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [SubTabBarStyle]{@link ./../../@internal/component/ets/tab_content:SubTabBarStyle}样式且vertical属性为false时，默认值为56
   *     vp。<br/>设置SubTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [BottomTabBarStyle]{@link ./../../@internal/component/ets/tab_content:BottomTabBarStyle}样式且vertical属性为true时，默
   *     认值为Tabs的高度。<br/>设置BottomTabBarStyle样式且vertical属性为false时，默认值为56vp，从API version 12开始，默认值变更为48vp。<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barHeight(value: Length | undefined): this;

  /**
   * 设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度，并通过设置noMinHeightLimit为true让自适应高度可以小于TabBar默认高度。height设置为小于0或
   * 大于Tabs高度值时，按默认值显示。
   *
   * @param { Length | undefined } value - TabBar的高度值。<br/>默认值：<br/>未设置带样式的TabBar且vertical属性为false时，默认值为56vp。<br/>未设置带
   *     样式的TabBar且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [SubTabBarStyle]{@link ./../../@internal/component/ets/tab_content:SubTabBarStyle}样式且vertical属性为false时，默认值为56
   *     vp。<br/>设置SubTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [BottomTabBarStyle]{@link ./../../@internal/component/ets/tab_content:BottomTabBarStyle}样式且vertical属性为true时，默
   *     认值为Tabs的高度。<br/>设置BottomTabBarStyle样式且vertical属性为false时，默认值为48vp。<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } noMinHeightLimit - height设置为'auto'时，设置是否取消TabBar的最小高度限制。<br/>默认值：false<br/>取值为
   *     undefined时，按默认值处理。<br/>**说明：** <br/>值为true表示取消TabBar的最小高度限制，即TabBar的高度值可以小于默认值。<br/>值为false表示限制TabBar的最小高度，即
   *     TabBar最小高度值等于默认值。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barHeight(value: Length | undefined, noMinHeightLimit: boolean| undefined): this;

  /**
   * 设置Tabs翻页动画曲线。常用曲线参考[Curve]{@link ./../../@internal/component/ets/enums:Curve}，也可以通过
   * [插值计算]{@link ./../../@ohos.curves:curves}模块提供的接口创建自定义的插值曲线对象。
   *
   * @param { Curve | ICurve| undefined } curve - Tabs翻页的动画曲线。<br/>默认值：<br/>滑动
   *     [TabContent]{@link ./../../@internal/component/ets/tab_content}翻页时，默认值为interpolatingSpring(-1, 1, 228, 30)。<
   *     br/>点击TabBar页签和调用[TabsController]{@link TabsController}的[changeIndex]{@link TabsController.changeIndex}接口翻页时，
   *     默认值为cubicBezierCurve(0.2, 0.0, 0.1, 1.0)。<br/>设置自定义动画曲线时，滑动翻页和点击页签、调用changeIndex翻页都使用设置的动画曲线。<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationCurve(curve: Curve | ICurve| undefined): this;

  /**
   * 设置Tabs翻页动画时长。
   *
   * animationCurve不设置时，由于滑动TabContent翻页动画曲线interpolatingSpring(-1, 1, 228, 30)时长只受曲线自身参数影响，animationDuration只能控制点击
   * TabBar页签和调用TabsController的changeIndex接口切换TabContent的动画时长。
   *
   * 不受animationDuration控制的曲线可以查阅[插值计算]{@link ./../../@ohos.curves:curves}模块，比如
   * [springMotion]{@link ./../../@ohos.curves:curves.springMotion}、
   * [responsiveSpringMotion]{@link ./../../@ohos.curves:curves.responsiveSpringMotion}和
   * [interpolatingSpring]{@link ./../../@ohos.curves:curves.interpolatingSpring}类型的曲线。
   *
   * @param { int | undefined } value
   Tabs翻页的动画时长。<br/>
   *     <br>version 10及以前，不设置该属性或设置为null时，默认值为0，即Tabs翻页无动画.
   *     设
   *     置为小于0或undefined时，默认值为300.
   *     <br/>API version 11及以后，不设置该属性或设置为异常值，且设置
   *     [TabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.
   *     md#tabbar)为
   *     [BottomTabBarStyle]{@link.
   *     /.
   *     /.
   *     /@internal/component/ets/tab_content:BottomTabBarStyle}样式时，默认值为0.
   *     设置TabBar为其他
   *     样式时，默认值为300.
   *     <br/>单位：ms<br/>取值范围：[0, +∞)<br/>取值为undefined或非法值时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationDuration(value: int | undefined): this;

  /**
   * 设置点击[TabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#tabbar)页签或调用TabsController的
   * [changeIndex]{@link TabsController.changeIndex}接口时切换TabContent的动画形式。
   *
   * > **说明：**
   * >
   * > 此属性不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { AnimationMode | undefined } mode - 点击
   *     [TabBar](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#tabbar)页签或调用
   *     [TabsController]{@link TabsController}的[changeIndex]{@link TabsController.changeIndex}接口时切换TabContent的动画形式。<
   *     br/>默认值：AnimationMode.CONTENT_FIRST，表示在点击TabBar页签或调用TabsController的changeIndex接口切换TabContent时，先加载目标页内容，再开始切换动
   *     画。<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationMode(mode: AnimationMode | undefined): this;

  /**
   * 设置边缘滑动效果。
   *
   * > **说明：**
   * >
   * > 从API version 17开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { EdgeEffect | undefined } edgeEffect - 边缘滑动效果。<br/>默认值：EdgeEffect.Spring<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default edgeEffect(edgeEffect: EdgeEffect | undefined): this;

  /**
   * Tab页签切换后触发的事件。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1、滑动页面进行页面切换时，组件滑动动画结束后触发。
   *
   * 2、通过[控制器]{@link TabsController}调用[changeIndex]{@link TabsController.changeIndex}接口，Tab页签切换后触发。
   *
   * 3、动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值，Tab页签切换后触发。
   *
   * 4、点击TabBar页签，Tab页签切换后触发。
   *
   * > **说明：**
   * >
   * > 使用自定义页签时，在onChange事件中联动可能会导致滑动页面切换后才执行页签联动，引起自定义页签切换效果延迟。建议在
   * > [onAnimationStart]{@link TabsAttribute.onAnimationStart}中监听并刷新当前索引，以确保动效能够及时触发。具体实现可参考
   * > [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs copy.md#示例3自定义页签切换联动)。
   *
   * @param { Callback<int> | undefined } event
   当前显示的index索引，索引从0开始计算。取值为undefined时，不使用回调函数。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(event: Callback<int> | undefined): this;

  /**
   * 当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1. 滑动离手时满足翻页阈值，开始切换动画时触发。
   *
   * 2. 通过[TabsController控制器]{@link TabsController}调用[changeIndex]{@link TabsController.changeIndex}接口，开始切换动画时触发。
   *
   * 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。
   *
   * 4. 通过页签处点击触发。
   *
   * > **说明：**
   * >
   * > onSelected回调中不可通过[TabsOptions]{@link TabsOptions}的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。
   *
   * @param { Callback<int> | undefined } event - 当前选中元素的索引。<br/>取值为undefined时，不使用回调函数。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelected(event: Callback<int> | undefined): this;

  /**
   * Tab页签点击后触发的事件。
   *
   * @param { Callback<int> | undefined } event
   被点击的index索引，索引从0开始计算。<br/>取值为undefined时，不使用回调函数。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTabBarClick(event: Callback<int> | undefined): this;

  /**
   * 当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1. 滑动离手时满足翻页阈值，开始切换动画时触发。
   *
   * 2. 通过[TabsController控制器]{@link TabsController}调用[changeIndex]{@link TabsController.changeIndex}接口，开始切换动画时触发。
   *
   * 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。
   *
   * 4. 通过页签处点击触发。
   *
   * > **说明：**
   * >
   * > onUnselected回调中不可通过[TabsOptions]{@link TabsOptions}的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。
   *
   * @param { Callback<int> | undefined } event - 将要隐藏元素的索引。<br/>取值为undefined时，不使用回调函数。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onUnselected(event: Callback<int> | undefined): this;

  /**
   * 切换动画开始时触发该回调。当[animationDuration]{@link TabsAttribute.animationDuration}为0时动画关闭且
   * [scrollable]{@link TabsAttribute.scrollable}为false时，不触发该回调。
   *
   * @param { OnTabsAnimationStartCallback | undefined } handler
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationStart(handler: OnTabsAnimationStartCallback | undefined): this;

  /**
   * 切换动画结束时触发该回调，包括动画过程中手势中断。当animationDuration为0时动画关闭，不触发该回调。
   *
   * @param { OnTabsAnimationEndCallback | undefined } handler
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationEnd(handler: OnTabsAnimationEndCallback | undefined): this;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { OnTabsGestureSwipeCallback | undefined } handler
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onGestureSwipe(handler: OnTabsGestureSwipeCallback | undefined): this;

  /**
   * 设置页签超过容器宽度时是否渐隐消失。建议配合[barBackgroundColor]{@link TabsAttribute.barBackgroundColor}属性一起使用，如果barBackgroundColor属性没有
   * 定义，会默认显示页签末端为白色的渐隐效果。
   *
   * @param { boolean | undefined } value - 页签超过容器宽度时是否渐隐消失。<br/>默认值：true，页签超过容器宽度时会渐隐消失。设置为false时，页签超过容器宽度直接截断显示，不产生任
   *     何渐变效果?。<br/>true：渐隐消失；false：直接截断显示。<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fadingEdge(value: boolean | undefined): this;

  /**
   * 设置区分TabBar和TabContent的分割线样式。
   *
   * @param { DividerStyle | null | undefined } value - 分割线样式，默认不显示分割线。<br/>DividerStyle：分割线的样式；<br/>null：不显示分割线。<br/>
   *     取值为undefined时，按默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: DividerStyle | null | undefined): this;

  /**
   * 设置Tabs组件与其父组件的嵌套滚动模式。未通过该接口设置时，默认嵌套滚动模式为[SELF_ONLY]{@link TabsNestedScrollMode}。
   *
   * @param { TabsNestedScrollMode | undefined } value - Tabs组件和父组件的嵌套滚动模式。取值为undefined时，Tabs自身滚动，不与父组件联动。
   * @returns { TabsAttribute } -the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default nestedScroll(value: TabsNestedScrollMode | undefined): this;

  /**
   * 设置TabBar是否背后变模糊并叠加在TabContent之上。
   *
   * @param { boolean | undefined } value - TabBar是否背后变模糊并叠加在TabContent之上。当barOverlap设置为true时，TabBar背后变模糊并叠加在
   *     TabContent之上，并且TabBar默认模糊材质的[BlurStyle]{@link ./../../@internal/component/ets/common:BlurStyle}值修改为'
   *     BlurStyle.COMPONENT_THICK'。当barOverlap设置为false时，无模糊和叠加效果。<br/>默认值：false<br/>true：背后变模糊并叠加；false：无模糊和叠加效果。<br/
   *     >取值为undefined时，按默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barOverlap(value: boolean | undefined): this;

  /**
   * 设置TabBar的背景颜色。
   *
   * @param { ResourceColor | undefined } value - TabBar的背景颜色。<br />默认值：Color.Transparent，透明<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundColor(value: ResourceColor | undefined): this;

  /**
   * 以栅格化方式设置TabBar的可见区域。具体参见BarGridColumnOptions对象。仅水平模式下有效，
   * [不适用于XS、XL和XXL设备](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。
   *
   * @param { BarGridColumnOptions | undefined } value - 以栅格化方式设置TabBar的可见区域。<br/>取值为undefined时，按BarGridColumnOptions中
   *     的默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barGridAlign(value: BarGridColumnOptions | undefined): this;

  /**
   * 自定义Tabs页面切换动画。
   *
   * 使用说明：
   *
   * 1. 当使用自定义切换动画时，Tabs组件自带的默认切换动画会被禁用，同时，页面也无法跟手滑动。
   * 2. 当设置为undefined时，表示不使用自定义切换动画，仍然使用组件自带的默认切换动画。
   * 3. 当前自定义切换动画不支持打断。
   * 4. 目前自定义切换动画只支持两种场景触发：点击页签和调用TabsController.changeIndex()接口。
   * 5. 当使用自定义切换动画时，Tabs组件支持的事件中，除了[onGestureSwipe]{@link TabsAttribute.onGestureSwipe}，其他事件均支持。
   * 6. [onChange]{@link TabsAttribute.onChange}和[onAnimationEnd]{@link TabsAttribute.onAnimationEnd}事件的触发时机需要特殊说明：如果在第一次自定义动画执行过程中，触发了第二次自定义动画，那么在开始第二次自定义动画时，就会触发第一次自定义动画的onChange和onAnimationEnd事件。
   * 7. 当使用自定义动画时，参与动画的页面布局方式会改为[Stack]{@link ./../../@internal/component/ets/stack}布局。如果开发者未主动设置相关页面的[zIndex](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-z-order.md#zindex)属性，那么所有页面的zIndex值是一样的，页面的渲染层级会按照在组件树上的顺序（即页面的index值顺序）确定。因此，开发者需要主动修改页面的zIndex属性，来控制页面的渲染层级。
   * 8. 此属性不支持在[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)中调用。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { TabsCustomContentTransitionCallback | undefined } delegate - 自定义Tabs页面切换动画开始时触发的回调。取值为undefined时，不使用回调函数
   *     。
   * @returns { TabsAttribute } The attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customContentTransition(delegate: TabsCustomContentTransitionCallback | undefined): this;

  /**
   * 设置TabBar的背景模糊材质。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { BlurStyle | undefined } value - TabBar的背景模糊材质。<br />默认值：BlurStyle.NONE<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundBlurStyle(value: BlurStyle | undefined): this;

  /**
   * 设置鼠标滚轮翻页模式。
   *
   * @param { PageFlipMode | undefined } mode - 鼠标滚轮翻页模式。<br/>默认值：PageFlipMode.CONTINUOUS<br/>取值为undefined时，按默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pageFlipMode(mode: PageFlipMode | undefined): this;

  /**
   * 为TabBar提供一种在背景和内容之间的模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。
   *
   * @param { BlurStyle | undefined } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。<br/>取值为undefined时，按BlurStyle中
   *     的默认值处理。
   * @param { BackgroundBlurStyleOptions | undefined } options - 背景模糊选项。<br/>取值为undefined时，按BackgroundBlurStyleOptions
   *     中的默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundBlurStyle(style: BlurStyle | undefined, options: BackgroundBlurStyleOptions | undefined): this;

  /**
   * 设置TabBar背景属性，包含背景模糊半径，亮度，饱和度，颜色等参数。
   *
   * @param { BackgroundEffectOptions | undefined } options - 设置TabBar背景属性包括：模糊半径，亮度，饱和度，颜色等。<br/>取值为undefined时，按
   *     BackgroundEffectOptions中的默认值处理。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundEffect(options: BackgroundEffectOptions | undefined): this;

  /**
   * 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发该回调。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1、滑动TabContent切换新页面时触发。
   *
   * 2、通过TabsController.[changeIndex]{@link TabsController.changeIndex}接口切换新页面时触发。
   *
   * 3、通过动态修改index属性值切换新页面时触发。
   *
   * 4、通过点击TabBar页签切换新页面时触发。
   *
   * 5、TabBar页签获焦后，通过键盘左右方向键等切换新页面时触发。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { OnTabsContentWillChangeCallback | undefined } handler
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentWillChange(handler: OnTabsContentWillChangeCallback | undefined): this;

  /**
   * 设置子组件的最大缓存个数及缓存模式。未设置该属性时默认缓存所有子组件且缓存后不会释放。
   *
   * @param { int | undefined } count - 子组件的最大缓存个数。超出范围时自动释放不再需要的子组件。<br/>单位：个<br/>取值范围：
   *     [0, +∞)<br/>取值为undefined时，按默认值处理。
   * @param { TabsCacheMode | undefined } mode - 子组件的缓存模式。<br/>默认值：TabsCacheMode.CACHE_BOTH_SIDE<br/>取值为undefined时，按默认
   *     值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedMaxCount(count: int | undefined, mode: TabsCacheMode | undefined): this;

  /**
   * 动态设置Tabs组件的属性方法。
   *
   * @param { AttributeModifier<TabsAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
   在当前组件上，动态设置属
   *     性方法，支持使用if/else语法。<br/>CommonMethod：通用属性和事件。<br/>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TabsAttribute> |
        AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 监听Tabs页面滑动事件。
   *
   * 在页面滑动过程中，会对视窗内所有页面逐帧触发[OnTabsContentDidScrollCallback]{@link OnTabsContentDidScrollCallback}回调。例如，当视窗内有下标为0、1的两个页
   * 面时，会每帧触发两次index值分别为0和1的回调。
   *
   * @param { OnTabsContentDidScrollCallback | undefined } handler - Tabs滑动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this } - the attribute of the Tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined): this;

  /**
   * 设置Tbas选项。
   *
   * @param { TabsOptions } [options] - Tabs选项
   * @returns { TabsAttribute } Returns the instance of the TabsAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setTabsOptions(options?: TabsOptions): this;
}

/**
 * Tabs自定义切换动画相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabContentAnimatedTransition {

  /**
   * Tabs自定义切换动画超时时间。从自定义动画开始切换计时，如果到达该时间后，开发者仍未调用[TabContentTransitionProxy]{@link TabContentTransitionProxy}的
   * finishTransition接口通知Tabs组件自定义动画结束，那么组件就会认为此次自定义动画已结束，直接执行后续操作。
   * 单位为： ms，取值应为≥0的整数。 默认值： 1000。
   *
   * @default 1000 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  timeout?: int;

  /**
   * 自定义切换动画具体内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transition: Callback<TabContentTransitionProxy>;
}

/**
 * Tabs自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画的起始和目标页面信息，同时，也可以通过调用该对象的finishTransition接口通知Tabs组件自定义动画已结束。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabContentTransitionProxy {

  /**
   * 自定义动画起始页面对应的index值，索引从0开始。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  from: int;

  /**
   * 自定义动画目标页面对应的index值，索引从0开始。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  to: int;

  /**
   * 通知Tabs组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  finishTransition(): void;
}

/**
 * 创建Tabs容器。
 *
 * @param { TabsOptions } [options] - Tabs组件参数。
 * @param { CustomBuilder } [content_] - 仅支持子组件[TabContent]{@link ./../../@internal/component/ets/tab_content}，以及渲染控制类型
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)和
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)，不建议自定义组件作为子组件。并且if/else和ForEach下也仅支持
 *     TabContent作为子组件，不建议自定义组件作为子组件。<br/>**说明：** <br/>1. Tabs子组件设置了通用属性
 *     [visibility](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-visibility.md#visibility)的值为None，或者设
 *     置值为Hidden时，对应子组件不显示，但依然会在视窗内占位。<br/>2. 已经显示的Tabs子组件TabContent后续隐藏时不会被销毁，若需要页面懒加载和释放，可以参考
 *     [示例13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs copy.md#示例13页面懒加载和释放)。<br/>3. Tabs设置
 *     [height](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#height)为auto时，可根据子组件高度自适应高度大小。设置
 *     [width](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#width)为auto时，可根据子组件宽度自适应宽度大小。
 * @returns { TabsAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Tabs(
    options?: TabsOptions, 
    content_?: CustomBuilder,
): TabsAttribute;

/**
 * 定义Tabs组件
 *
 * @param { CustomBuilderT<TabsAttribute> } style_ - tabs属性实例
 * @param { CustomBuilder } [content_] - 内容区
 * @returns { TabsAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Tabs(
 style_: CustomBuilderT<TabsAttribute>,
 content_?: CustomBuilder,
): TabsAttribute;