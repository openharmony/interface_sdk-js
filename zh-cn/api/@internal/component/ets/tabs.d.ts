/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
* 材质
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type UIMaterial = import('../api/@ohos.arkui.uiMaterial').uiMaterial;

/**
* 作为Tabs组件的参数对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 * @noninterop
 */
declare type CommonModifier = import('../api/arkui/CommonModifier').CommonModifier;

/**
* TabBar布局模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarMode {

  /**
   * 每一个TabBar均使用实际布局宽度，超过总长度（横向Tabs的[barWidth]{@link TabsAttribute#barWidth}，纵向Tabs的
   * [barHeight]{@link TabsAttribute#barHeight(value: Length)}）后可滑动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Scrollable = 0,

  /**
   * 所有TabBar平均分配barWidth宽度（纵向时平均分配barHeight高度）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fixed = 1
}

/**
* 点击[TabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)}页签时切换
* TabContent的动画形式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AnimationMode {

  /**
   * 先加载目标页内容，再开始切换动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CONTENT_FIRST = 0,

  /**
   * 先开始切换动画，再加载目标页内容；生效需要同时需要满足：Tabs的height、width没有设置成auto。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_FIRST = 1,

  /**
   * 关闭默认动画。调用TabsController的[changeIndex]{@link TabsController#changeIndex}接口切换TabContent时该枚举值不生效。
   *
   * 可以通过设置[animationDuration]{@link TabsAttribute#animationDuration}为0实现调用TabsController的changeIndex接口时不带动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NO_ANIMATION = 2,

  /**
   * 先加载目标页内容，再无动画跳转到目标页附近，最后有动画跳转到目标页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  CONTENT_FIRST_WITH_JUMP = 3,

  /**
   * 先无动画跳转到目标页附近，再有动画跳转到目标页，最后加载目标页内容。此项生效需要同时需要满足：Tabs的height、width没有设置成auto。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  ACTION_FIRST_WITH_JUMP = 4
}

/**
* Tabs页签位置枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarPosition {

  /**
   * vertical属性方法设置为true时，页签位于容器左侧；vertical属性方法设置为false时，页签位于容器顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start = 0,

  /**
   * vertical属性方法设置为true时，页签位于容器右侧；vertical属性方法设置为false时，页签位于容器底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End = 1
}

/**
* [Scrollable]{@link TabsAttribute#barMode(value: BarMode, options?: ScrollableBarModeOptions)}模式下不滚动时的页签排布方式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum LayoutStyle {

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   *
   * 当页签内容不超过TabBar宽度时，TabBar不可滚动，页签紧凑居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_CENTER = 0,

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   *
   * 当页签内容不超过TabBar宽度时，TabBar不可滚动，且所有页签平均分配TabBar宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_AVERAGE_SPLIT = 1,

  /**
   * 当页签内容超过TabBar宽度时，TabBar可滚动。
   *
   * 当页签内容不超过TabBar宽度但超过TabBar宽度一半时，TabBar不可滚动，页签紧凑居中。
   *
   * 当页签内容不超过TabBar宽度一半时，TabBar不可滚动，保证页签居中排列在TabBar宽度一半，且间距相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SPACE_BETWEEN_OR_CENTER = 2
}

/**
* 子组件的缓存模式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum TabsCacheMode {

  /**
   * 缓存当前显示的子组件和其两侧的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存2n+1个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  CACHE_BOTH_SIDE = 0,

  /**
   * 缓存当前显示的子组件和最近切换过的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存n+1个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  CACHE_LATEST_SWITCHED = 1
}

/**
* Tabs组件和父组件的嵌套滚动模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare enum TabsNestedScrollMode {

  /**
   * Tabs自身滚动，不与父组件联动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  SELF_ONLY = 0,

  /**
   * Tabs自身先滚动，自身滚动到边缘以后父组件滚动。父组件滚动到边缘以后，如果父组件有边缘效果，则父组件触发边缘效果，否则Tabs触发边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  SELF_FIRST = 1
}

/**
* Tabs组件的控制器，用于控制Tabs组件进行页签切换。不支持一个TabsController控制多个Tabs组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class TabsController {

  /**
   * TabsController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * 控制Tabs切换到指定页签。
   *
   * @param { number } value - 页签在Tabs里的索引值，索引值从0开始。<br/>**说明：** <br/>设置小于0或大于最大数量的值时，取默认值0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  changeIndex(value: number): void;

  /**
   * 控制Tabs预加载指定子节点。调用该接口后会一次性加载所有指定的子节点，因此为了性能考虑，建议分批加载子节点。
   *
   * > **说明：**
   *
   * > - Tabs的preloadItems需要在Tabs创建之后去调用，首次预加载推荐在Tabs的[onAppear]{@link CommonMethod#onAppear}生命周期中去控制。
   * >
   * > - 如果TabsController对象未绑定任何Tabs组件，直接调用该接口，会抛出JS异常。因此使用该接口时，建议通过try-catch捕获异常。
   * >
   * > - 使用preloadItems预加载标签页时，若需自定义TabBar上的显示内容，推荐使用ComponentContent实现，使用示例请参考
   * > [示例9](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#示例9通过componentcontent设置tabbar)。
   *
   * @param { Optional<Array<number>> } indices - 需预加载的子节点的下标数组。<br/>默认值：空数组。
   * @returns { Promise<void> } 预加载完成后触发的回调。
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<number>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preloadItems(indices: Optional<Array<number>>): Promise<void>;

  /**
   * 设置TabBar的平移距离。
   *
   * > **说明：**
   *
   * > 当使用
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)或
   * > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13)
   * > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarTranslate接口设置的TabBar平移距离会失效。因此不建议同时使
   * > 用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarTranslate接口。
   *
   * @param { TranslateOptions } translate - 设置TabBar的平移距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarTranslate(translate: TranslateOptions): void;

  /**
   * 设置TabBar的不透明度。
   *
   * > **说明：**
   *
   * > 当使用
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)或
   * > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13)
   * > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarOpacity接口设置的TabBar不透明度会失效。因此不建议同时使用
   * > bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarOpacity接口。
   *
   * @param { number } opacity - 设置TabBar的不透明度，取值范围为[0.0, 1.0]，设置的值小于0.0时，按0.0处理，设置的值大于1.0时，按1.0处理。<br> 默认值：1.0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarOpacity(opacity: number): void;
}

/**
* Tabs组件参数，设置Tabs的页签位置，当前显示页签的索引，Tabs控制器和TabBar的[通用属性]{@link common}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 * @noninterop
 */
declare interface TabsOptions {

  /**
   * 设置Tabs的页签位置。
   *
   * 默认值：BarPosition.Start。
   *
   * @default BarPosition.Start [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barPosition?: BarPosition;

  /**
   * 设置当前显示页签的索引。
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置为小于0的值时按默认值显示。
   *
   * 可选值为[0, TabContent子节点数量-1]。
   *
   * 直接修改index跳页时，切换动效不生效。 使用TabController的[changeIndex]{@link TabsController#changeIndex}时，默认生效切换动效，可以设置
   * [animationDuration]{@link TabsAttribute#animationDuration}为0关闭动画。
   *
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * Tabs重建、系统资源切换（如系统字体切换、系统深浅色切换）或者组件属性变化时，会跳转到index对应的页面。若需要在上述情况下不跳转，建议使用双向绑定。
   *
   * @default 0 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  index?: number;

  /**
   * 设置Tabs控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: TabsController;

  /**
   * 设置TabBar的[通用属性]{@link common}。
   *
   * **说明：**
   *
   * 动态置为undefined时会保持当前状态不变，不会重置各通用属性。
   *
   * 由一个CommonModifier切换为另一个CommonModifier时，重复属性会进行覆盖，非重复属性会同时生效，不会重置前一个CommonModifier的通用属性。
   *
   * Tabs的[barWidth]{@link TabsAttribute#barWidth}、[barHeight]{@link TabsAttribute#barHeight(value: Length)}、
   * [barBackgroundColor]{@link TabsAttribute#barBackgroundColor}、
   * [barBackgroundBlurStyle]{@link TabsAttribute#barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)}
   * 、[barBackgroundEffect]{@link TabsAttribute#barBackgroundEffect}属性会覆盖CommonModifier的
   * [width]{@link CommonMethod#width(value: Length)}、[height]{@link CommonMethod#height(value: Length)}、
   * [backgroundColor]{@link CommonMethod#backgroundColor(color: Optional<ResourceColor>)}、
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions)}
   * 、[backgroundEffect]{@link CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)}属性。
   *
   * [align]{@link CommonMethod#align(value: Alignment)}属性仅在
   * [BarMode.Scrollable]{@link TabsAttribute#barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)}模式下生
   * 效，且Tabs为横向时还需[nonScrollableLayoutStyle]{@link ScrollableBarModeOptions}未设置或设置为异常值时才能生效。
   *
   * [TabContent]{@link tab_content}组件的
   * [tabBar]{@link TabContentAttribute#tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder |  TabBarOptions)}
   * 属性为底部页签样式时不支持拖拽功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  barModifier?: CommonModifier;
}

/**
* 通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。
*
* > **说明：**
*
* > - 该组件从API version 11开始，支持安全区域避让特性，其[expandSafeArea]{@link CommonMethod#expandSafeArea}属性的默认值为expandSafeArea(
* > [SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])。开发者可通过重写该属性覆盖默认行为。对于API version 11之前的版本，则需配合expandSafeArea属性手动实现安全区域避
* > 让。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TabsInterface {

  /**
   * 创建Tabs容器。
   *
   * @param { object } value [since 7 - 14]
   * @param { TabsOptions } [options] - Tabs组件参数。 [since 15]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: TabsOptions): TabsAttribute;
}

/**
* 分割线样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface DividerStyle {

  /**
   * 分割线的线宽（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth: Length;

  /**
   * 分割线的颜色。
   *
   * 默认值：#33182431
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * 分割线与侧边栏顶端的距离（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Length;

  /**
   * 分割线与侧边栏底端的距离（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Length;
}

/**
* Tabs组件动画相关信息集合。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabsAnimationEvent {

  /**
   * Tabs当前显示元素在主轴方向上，相对于Tabs起始位置的位移。单位vp，默认值为0。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  currentOffset: number;

  /**
   * Tabs动画目标元素在主轴方向上，相对于Tabs起始位置的位移。单位vp，默认值为0。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  targetOffset: number;

  /**
   * Tabs离手动画开始时的离手速度。单位vp/s，默认值为0。
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  velocity: number;
}

/**
* TabBar栅格化方式设置的对象，包括栅格模式下的column边距和间隔，以及小、中、大屏下，页签占用的columns数量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface BarGridColumnOptions {

  /**
   * 小屏下，页签占用的columns数量，必须是非负偶数。小屏为大于等于320vp但小于600vp。
   *
   * 默认值为-1，代表页签占用TabBar全部宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  sm?: number;

  /**
   * 中屏下，页签占用的columns数量，必须是非负偶数。中屏为大于等于600vp但小于800vp。
   *
   * 默认值为-1，代表页签占用TabBar全部宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  md?: number;

  /**
   * 大屏下，页签占用的columns数量，必须是非负偶数。大屏为大于等于840vp但小于1024vp。
   *
   * 默认值为-1，代表页签占用TabBar全部宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lg?: number;

  /**
   * 栅格模式下的column边距（不支持百分比设置）。
   *
   * 默认值：24.0
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * 栅格模式下的column间隔（不支持百分比设置）。
   *
   * 默认值：24.0
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  gutter?: Dimension;
}

/**
* Scrollable模式下的TabBar的布局样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ScrollableBarModeOptions {

  /**
   * Scrollable模式下的TabBar的左右边距（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * Scrollable模式下不滚动时的页签排布方式。
   *
   * 默认值：LayoutStyle.ALWAYS_CENTER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nonScrollableLayoutStyle?: LayoutStyle;
}

/**
* 提供了一个接口，用于设置不同断点处的tab宽度的浮动栏宽度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarWidth {

  /**
   * 小设备的条形宽度。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  smallBarWidth?: Length;

  /**
   * 介质设备的条形宽度。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mediumBarWidth?: Length;

  /**
   * 大型设备的条形宽度。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  largeBarWidth?: Length;
}

/**
* 提供浮动条模式选项的接口。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarStyle {

  /**
   * 不同断点处的tab宽度的条形宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barWidth?: FloatingTabBarWidth;

  /**
   * 条形的左右边距的宽度。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barSideMargin?: Length;

  /**
   * 栏与选项卡底部之间的距离。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barBottomMargin?: Length;

  /**
   * 蒙版的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * 遮罩的高度。不能以百分比形式设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskHeight?: Length;

  /**
   * 是否适应手感。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  adaptToHandedness?: boolean;

  /**
   * 材质的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: UIMaterial.ImmersiveMaterial;
}

/**
* 切换动画开始时触发的回调。
*
 * @param { number } index - 当前显示元素的索引，索引从0开始。
 * @param { number } targetIndex - 当前显示元素的索引，索引从0开始。
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对Tabs起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationStartCallback = (index: number, targetIndex: number, extraInfo: TabsAnimationEvent) => void;

/**
* 切换动画结束时触发的回调。
*
 * @param { number } index - 当前显示元素的索引，索引从0开始。
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationEndCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
* 在页面跟手滑动过程中，逐帧触发的回调。
*
 * @param { number } index - 当前显示元素的索引，索引从0开始。 <br/>取值范围：[0, 索引值-1]
 * @param { TabsAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsGestureSwipeCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
* 自定义Tabs页面切换动画开始时触发的回调。
*
 * @param { number } from - 动画开始时，当前页面的index值，索引从0开始。<br/>取值范围：[0, 索引值-1]，当设置的值超过索引值或小于0时无转场动画。
 * @param { number } to - 动画开始时，目标页面的index值，索引从0开始。<br/>取值范围：[0, 索引值-1]，当设置的值超过索引值或小于0时无转场动画。
 * @returns { TabContentAnimatedTransition | undefined } Information about the custom tab switching animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type TabsCustomContentTransitionCallback = (from: number, to: number) => TabContentAnimatedTransition | undefined;

/**
* 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。
*
 * @param { number } currentIndex - 当前显示页面的index索引，索引从0开始计算。
 * @param { number } comingIndex - 将要显示的新页面的index索引。
 * @returns { boolean } 当回调函数handler的返回值为true时，Tabs可以切换到新页面。<br/>当回调函数handler的返回值为false时，Tabs无法切换到新页面，仍然显示原来页面内容。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;

/**
* Tabs滑动时触发的回调。
* > **说明：**
* > - 例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的selectedIndex为0、index为0、
* > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度。第二次回调的selectedIndex仍为0、index为1、position为当前帧第1页相对于动画开始前第0
* > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。
* >
* > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。
*
 * @param { number } selectedIndex - 当前选中页面的索引。例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每一次回调的selectedIndex都为0。
 * @param { number } index - 视窗内页面的索引。例如，页面滑动过程中，视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的index为0，第二次回调的index为1。
 * @param { number } position - 视窗内页面的索引。例如，页面滑动过程中，视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的index为0，第二次回调的index为1。
 * @param { number } mainAxisLength - 视窗内页面的索引。例如，页面滑动过程中，视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的index为0，第二次回调的index为1。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnTabsContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;

/**
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
* 除支持[通用事件]{@link common}外，还支持以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TabsAttribute extends CommonMethod<TabsAttribute> {

  /**
   * 设置是否为纵向Tabs。
   *
   * @param { boolean } value - 是否为纵向Tabs。<br/>默认值：false，横向Tabs，为true时纵向Tabs。<br/>当横向Tabs设置height为auto时，Tabs组件高度自适应子组件高
   *     度，即为[tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)}高度+
   *     divider线宽+TabContent高度+上下padding值+上下border宽度。<br/>当纵向Tabs设置width为auto时，Tabs组件宽度自适应子组件宽度，即为tabBar宽度+divider线宽+
   *     TabContent宽度+左右padding值+左右border宽度。<br/>尽量保持每一个页面中的子组件尺寸大小一致，避免滑动页面时出现页面切换动画跳动现象。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): TabsAttribute;

  /**
   * 设置Tabs的页签位置。
   *
   * @param { BarPosition } value - 设置Tabs的页签位置。<br/>默认值：BarPosition.Start
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  barPosition(value: BarPosition): TabsAttribute;

  /**
   * 设置是否可以通过滑动页面进行页面切换。
   *
   * @param { boolean } value - 是否可以通过滑动页面进行页面切换。<br/>默认值：true，可以通过滑动页面进行页面切换。为false时不可滑动切换页面。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollable(value: boolean): TabsAttribute;

  /**
   * 设置TabBar布局模式为BarMode.Fixed。
   *
   * @param { BarMode.Fixed } value - 所有TabBar会平均分配barWidth宽度（纵向时平均分配barHeight高度）。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Fixed): TabsAttribute;

  /**
   * 设置TabBar布局模式为BarMode.Scrollable。
   *
   * @param { BarMode.Scrollable } value - 所有TabBar都使用实际布局宽度，超过总宽度（横向Tabs的barWidth，纵向Tabs的barHeight）后可滑动。
   * @param { ScrollableBarModeOptions } [options] - Scrollable模式下的TabBar的布局样式。<br/>**说明：** <br/>仅水平模式下有效。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions): TabsAttribute;

  /**
   * 设置TabBar布局模式。
   *
   * @param { BarMode } value - 布局模式。<br/>默认值：BarMode.Fixed
   * @param { ScrollableBarModeOptions } [options] - Scrollable模式下的TabBar的布局样式。<br/>**说明：** <br/>仅Scrollable且水平模式下有
   *     效。 [since 10]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barMode(value: BarMode, options?: ScrollableBarModeOptions): TabsAttribute;

  /**
   * 设置TabBar的宽度值。设置为小于0或大于Tabs宽度值时，按默认值显示。
   *
   * @param { number } value - Width of the tab bar.<br>Default value:<br>If the tab bar has the **vertical** attribute
   *     set to **false** and does not have [SubTabBarStyle]{@link SubTabBarStyle} or
   *     [BottomTabBarStyle]{@link BottomTabBarStyle} specified, the default value is the width of the **Tabs**
   *     component.<br>If neither **SubTabBarStyle** nor **BottomTabBarStyle** is set, and the **vertical** attribute is
   *     **true**, the default value is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is
   *     **false**, the default value is the width of the **Tabs** component.<br>If **SubTabBarStyle** is set, and the
   *     **vertical** attribute is **true**, the default value is 56 vp.<br>If **BottomTabBarStyle** is set, and the
   *     **vertical** attribute is **true**, the default value is 96 vp.<br>If **BottomTabBarStyle** is set, and the
   *     **vertical** attribute is **false**, the default value is the width of the **Tabs** component. [since 7 - 7]
   * @param { Length } value - TabBar的宽度值。<br/>默认值：<br/>未设置[SubTabBarStyle]{@link SubTabBarStyle}和
   *     [BottomTabBarStyle]{@link BottomTabBarStyle}的TabBar且vertical属性为false时，默认值为Tabs的宽度。<br/>未设置SubTabBarStyle和
   *     BottomTabBarStyle的TabBar且vertical属性为true时，默认值为56vp。<br/>设置SubTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。<br/>设
   *     置SubTabBarStyle样式且vertical属性为true时，默认值为56vp。<br/>设置BottomTabBarStyle样式且vertical属性为true时，默认值为96vp。<br/>设置
   *     BottomTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。 [since 8]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barWidth(value: Length): TabsAttribute;

  /**
   * 设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度。height设置为小于0或大于Tabs高度值时，按默认值显示。
   *
   * API version 14之前的版本，若设置barHeight为固定值后，TabBar无法扩展底部安全区。从API version 14开始支持配合
   * [safeAreaPadding]{@link CommonMethod#safeAreaPadding}属性，当safeAreaPadding不设置bottom或者bottom设置为0时，可以实现扩展安全区。
   *
   * @param { number } value - Height of the tab bar.<br>Default value:<br>If no style is set or **CustomBuilder** is
   *     used to set a custom style for the **TabBar**, and **vertical** is set to **false**, the default value is 56
   *     vp.<br>If no style is set or **CustomBuilder** is used to set a custom style for the **TabBar**, and
   *     **vertical** is set to **true**, the default value is the height of the **Tabs** component.<br>If
   *     [SubTabBarStyle]{@link SubTabBarStyle} is set, and the **vertical** attribute is **false**, the default value
   *     is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is **true**, the default value is the
   *     height of the **Tabs** component.<br>If [BottomTabBarStyle]{@link BottomTabBarStyle} is set, and the
   *     **vertical** attribute is **true**, the default value is the height of the **Tabs** component.<br>If
   *     **BottomTabBarStyle** is set, and the **vertical** attribute is **false**, the default value is 56 vp in
   *     versions earlier than API version 12 and 48 vp since API version 12. [since 7 - 7]
   * @param { Length } value - TabBar的高度值。<br/>默认值：<br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56vp。
   *     <br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [SubTabBarStyle]{@link SubTabBarStyle}样式且vertical属性为false时，默认值为56vp。<br/>设置SubTabBarStyle样式且vertical属性为true时，默认
   *     值为Tabs的高度。<br/>设置[BottomTabBarStyle]{@link BottomTabBarStyle}样式且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     BottomTabBarStyle样式且vertical属性为false时，默认值为56vp，从API version 12开始，默认值变更为48vp。 [since 8]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barHeight(value: Length): TabsAttribute;

  /**
   * 设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度，并通过设置noMinHeightLimit为true让自适应高度可以小于TabBar默认高度。height设置为小于0或大于
   * Tabs高度值时，按默认值显示。
   *
   * @param { Length } height - TabBar的高度值。<br/>默认值：<br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56
   *     vp。<br/>未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     [SubTabBarStyle]{@link SubTabBarStyle}样式且vertical属性为false时，默认值为56vp。<br/>设置SubTabBarStyle样式且vertical属性为true时，默认
   *     值为Tabs的高度。<br/>设置[BottomTabBarStyle]{@link BottomTabBarStyle}样式且vertical属性为true时，默认值为Tabs的高度。<br/>设置
   *     BottomTabBarStyle样式且vertical属性为false时，默认值为48vp。
   * @param { boolean } noMinHeightLimit - height设置为'auto'时，设置是否取消TabBar的最小高度限制。默认值为false。<br/>**说明：** <br/>值为true表示取消
   *     TabBar的最小高度限制，即TabBar的高度值可以小于默认值。<br/>值为false表示限制TabBar的最小高度，即TabBar的最小高度值等于默认值。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  barHeight(height: Length, noMinHeightLimit: boolean): TabsAttribute;

  /**
   * 设置Tabs翻页动画曲线。常用曲线参考[Curve]{@link Curve}，也可以通过[插值计算]{@link @ohos.curves:curves}模块提供的接口创建自定义的插值曲线对象。
   *
   * @param { Curve | ICurve } curve - Tabs翻页的动画曲线。<br/>默认值：<br/>滑动TabContent翻页时，默认值为interpolatingSpring(-1, 1, 228, 30
   *     )。<br/>点击TabBar页签和调用TabsController的changeIndex接口翻页时，默认值为cubicBezierCurve(0.2, 0.0, 0.1, 1.0)。<br/>设置自定义动画曲线时，滑动
   *     翻页和点击页签、调用changeIndex翻页都使用设置的动画曲线。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  animationCurve(curve: Curve | ICurve): TabsAttribute;

  /**
   * 设置Tabs翻页动画时长。
   *
   * animationCurve不设置时，由于滑动TabContent翻页动画曲线interpolatingSpring(-1, 1, 228, 30)时长只受曲线自身参数影响，animationDuration只能控制点击
   * TabBar页签和调用TabsController的changeIndex接口切换TabContent的动画时长。
   *
   * 不受animationDuration控制的曲线可以查阅[插值计算]{@link @ohos.curves:curves}模块，比如
   * [springMotion]{@link @ohos.curves:curves.springMotion}、
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}和
   * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}类型的曲线。
   *
   * @param { number } value - Tabs翻页的动画时长。<br/>默认值：<br/>API version 10及以前，不设置该属性或设置为null时，默认值为0，即Tabs翻页无动画。设置为小于0或
   *     undefined时，默认值为300。<br/>API version 11及以后，不设置该属性或设置为异常值，且设置TabBar为BottomTabBarStyle样式时，默认值为0。设置TabBar为其他样式时，默认值
   *     为300。<br/>单位：ms<br/>取值范围：[0, +∞)
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  animationDuration(value: number): TabsAttribute;

  /**
   * 设置点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。
   *
   * > **说明：**
   *
   * > 此属性不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<AnimationMode> } mode - 点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。<br/>默认值：
   *     AnimationMode.CONTENT_FIRST，表示在点击TabBar页签或调用TabsController的changeIndex接口切换TabContent时，先加载目标页内容，再开始切换动画。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  animationMode(mode: Optional<AnimationMode>): TabsAttribute;

  /**
   * 设置边缘滑动效果。
   *
   * > **说明：**
   *
   * > 从API version 17开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<EdgeEffect> } edgeEffect - 边缘滑动效果。<br/>默认值：EdgeEffect.Spring
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  edgeEffect(edgeEffect: Optional<EdgeEffect>): TabsAttribute;

  /**
   * Tab页签切换后触发的事件。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1、滑动页面进行页面切换时，组件滑动动画结束后触发。
   *
   * 2、通过[控制器]{@link TabsController}调用[changeIndex]{@link TabsController#changeIndex}接口，Tab页签切换后触发。
   *
   * 3、动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值，Tab页签切换后触发。
   *
   * 4、点击TabBar页签，Tab页签切换后触发。
   *
   * > **说明：**
   *
   * > 使用自定义页签时，在onChange事件中联动可能会导致滑动页面切换后才执行页签联动，引起自定义页签切换效果延迟。建议在
   * > [onAnimationStart]{@link TabsAttribute#onAnimationStart}中监听并刷新当前索引，以确保动效能够及时触发。具体实现可参考
   * > [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#示例3自定义页签切换联动)。
   *
   * @param { function } event - Index of the active tab. The index starts from 0. [since 7 - 17]
   * @param { Callback<number> } event - 当前显示的index索引，索引从0开始计算。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(event: Callback<number>): TabsAttribute;

  /**
   * 当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1. 滑动离手时满足翻页阈值，开始切换动画时触发。
   *
   * 2. 通过[TabsController控制器]{@link TabsController}调用[changeIndex]{@link TabsController#changeIndex}接口，开始切换动画时触发。
   *
   * 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。
   *
   * 4. 通过页签处点击触发。
   *
   * > **说明：**
   *
   * > onSelected回调中不可通过[TabsOptions]{@link TabsOptions}的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。
   *
   * @param { Callback<number> } event - 当前选中元素的索引。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelected(event: Callback<number>): TabsAttribute;

  /**
   * Tab页签点击后触发的事件。
   *
   * @param { function } event - Index of the clicked tab. The index starts from 0. [since 10 - 17]
   * @param { Callback<number> } event - 被点击的index索引，索引从0开始计算。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTabBarClick(event: Callback<number>): TabsAttribute;

  /**
   * 当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1. 滑动离手时满足翻页阈值，开始切换动画时触发。
   *
   * 2. 通过[TabsController控制器]{@link TabsController}调用[changeIndex]{@link TabsController#changeIndex}接口，开始切换动画时触发。
   *
   * 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。
   *
   * 4. 通过页签处点击触发。
   *
   * > **说明：**
   *
   * > onUnselected回调中不可通过TabsOptions的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。
   *
   * @param { Callback<number> } event - 将要隐藏元素的索引。
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnselected(event: Callback<number>): TabsAttribute;

  /**
   * 切换动画开始时触发该回调。当[animationDuration]{@link TabsAttribute#animationDuration}为0时动画关闭且
   * [scrollable]{@link TabsAttribute#scrollable}为false时，不触发该回调。
   *
   * @param { function } handler - Callback triggered when the transition animation starts. [since 11 - 17]
   * @param { OnTabsAnimationStartCallback } handler - 切换动画开始时触发的回调。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationStart(handler: OnTabsAnimationStartCallback): TabsAttribute;

  /**
   * 切换动画结束时触发该回调，包括动画过程中手势中断。当animationDuration为0时动画关闭，不触发该回调。
   *
   * @param { function } handler - Callback triggered upon animation completion or interruption. [since 11 - 17]
   * @param { OnTabsAnimationEndCallback } handler - 切换动画结束时触发的回调。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationEnd(handler: OnTabsAnimationEndCallback): TabsAttribute;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { function } handler - Triggered on a frame-by-frame basis during swipe gestures for tab
   *     switching. [since 11 - 17]
   * @param { OnTabsGestureSwipeCallback } handler - 在页面跟手滑动过程中，逐帧触发的回调。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGestureSwipe(handler: OnTabsGestureSwipeCallback): TabsAttribute;

  /**
   * 设置页签超过容器宽度时是否渐隐消失。建议配合[barBackgroundColor]{@link TabsAttribute#barBackgroundColor}属性一起使用，如果barBackgroundColor属性没有定
   * 义，会默认显示页签末端为白色的渐隐效果。
   *
   * @param { boolean } value - 页签超过容器宽度时是否渐隐消失。<br />默认值：true，页签超过容器宽度时会渐隐消失。设置为false时，页签超过容器宽度直接截断显示，不产生任何渐变效果?。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fadingEdge(value: boolean): TabsAttribute;

  /**
   * 设置区分TabBar和TabContent的分割线样式。
   *
   * @param { DividerStyle | null } value - 分割线样式，默认不显示分割线。<br/>DividerStyle：分割线的样式；<br/>null：不显示分割线。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: DividerStyle | null): TabsAttribute;

  /**
   * 设置TabBar是否背后变模糊并叠加在TabContent之上。
   *
   * @param { boolean } value - TabBar是否背后变模糊并叠加在TabContent之上。当barOverlap设置为true时，TabBar背后变模糊并叠加在TabContent之上，并且TabBar默认
   *     模糊材质的[BlurStyle]{@link BlurStyle}值修改为'BlurStyle.COMPONENT_THICK'。当barOverlap设置为false时，无模糊和叠加效果。<br />默认值：false
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barOverlap(value: boolean): TabsAttribute;

  /**
   * 设置TabBar的背景颜色。
   *
   * @param { ResourceColor } value - TabBar的背景颜色。<br />默认值：Color.Transparent，透明
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barBackgroundColor(value: ResourceColor): TabsAttribute;

  /**
   * 以栅格化方式设置TabBar的可见区域。具体参见BarGridColumnOptions对象。仅水平模式下有效，
   * [不适用于XS、XL和XXL设备](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。
   *
   * @param { BarGridColumnOptions } value - 以栅格化方式设置TabBar的可见区域。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barGridAlign(value: BarGridColumnOptions): TabsAttribute;

  /**
   * 自定义Tabs页面切换动画。
   *
   * 使用说明：
   *
   * 1. 当使用自定义切换动画时，Tabs组件自带的默认切换动画会被禁用，同时，页面也无法跟手滑动。
   * 2. 当设置为undefined时，表示不使用自定义切换动画，仍然使用组件自带的默认切换动画。
   * 3. 当前自定义切换动画不支持打断。
   * 4. 目前自定义切换动画只支持两种场景触发：点击页签和调用TabsController.changeIndex()接口。
   * 5. 当使用自定义切换动画时，Tabs组件支持的事件中，除了onGestureSwipe，其他事件均支持。
   * 6. [onChange]{@link TabsAttribute#onChange}和[onAnimationEnd]{@link TabsAttribute#onAnimationEnd}事件的触发时机需要特殊说明：如果在第一次自定义动画执行过程中，触发了第二次自定义动画，那么在开始第二次自定义动画时，就会触发第一次自定义动画的onChange和onAnimationEnd事件。
   * 7. 当使用自定义动画时，参与动画的页面布局方式会改为[Stack]{@link stack}布局。如果开发者未主动设置相关页面的[zIndex]{@link CommonMethod#zIndex}属性，那么所有页面的zIndex值是一样的，页面的渲染层级会按照在组件树上的顺序（即页面的index值顺序）确定。因此，开发者需要主动修改页面的zIndex属性，来控制页面的渲染层级。
   * 8. 此属性不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } delegate - Callback invoked when the custom tab transition animation starts. [since 11 - 17]
   * @param { TabsCustomContentTransitionCallback } delegate - 自定义Tabs页面切换动画开始时触发的回调。 [since 18]
   * @returns { TabsAttribute } The attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 11 - 17]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  customContentTransition(delegate: TabsCustomContentTransitionCallback): TabsAttribute;

  /**
   * 设置TabBar的背景模糊材质。
   *
   * > **说明：**
   *
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { BlurStyle } value - TabBar的背景模糊材质。<br />默认值：BlurStyle.NONE
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  barBackgroundBlurStyle(value: BlurStyle): TabsAttribute;

  /**
   * 设置鼠标滚轮翻页模式。
   *
   * @param { Optional<PageFlipMode> } mode - 鼠标滚轮翻页模式。<br/>默认值：PageFlipMode.CONTINUOUS
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pageFlipMode(mode: Optional<PageFlipMode>): TabsAttribute;

  /**
   * 为TabBar提供一种在背景和内容之间的模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。
   *
   * @param { BlurStyle } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。
   * @param { BackgroundBlurStyleOptions } options - 背景模糊选项。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions): TabsAttribute;

  /**
   * 设置TabBar背景属性，包含背景模糊半径，亮度，饱和度，颜色等参数。
   *
   * @param { BackgroundEffectOptions } options - 设置TabBar背景属性包括：模糊半径，亮度，饱和度，颜色等。
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundEffect(options: BackgroundEffectOptions): TabsAttribute;

  /**
   * 设置子组件的最大缓存个数及缓存模式。未设置该属性时默认缓存所有子组件且缓存后不会释放。
   *
   * @param { number } count - 子组件的最大缓存个数。超出范围时自动释放不再需要的子组件。<br/>取值范围：[0, +∞)。
   * @param { TabsCacheMode } mode - 子组件的缓存模式。<br/>默认值：TabsCacheMode.CACHE_BOTH_SIDE
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  cachedMaxCount(count: number, mode: TabsCacheMode): TabsAttribute;

  /**
   * 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发该回调。
   *
   * 满足以下任一条件，即可触发该事件：
   *
   * 1、滑动TabContent切换新页面时触发。
   *
   * 2、通过TabsController.[changeIndex]{@link TabsController#changeIndex}接口切换新页面时触发。
   *
   * 3、通过动态修改index属性值切换新页面时触发。
   *
   * 4、通过点击TabBar页签切换新页面时触发。
   *
   * 5、TabBar页签获焦后，通过键盘左右方向键等切换新页面时触发。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } handler - Callback triggered when a new page is about to be displayed. [since 12 - 17]
   * @param { OnTabsContentWillChangeCallback } handler - 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。 [since 18]
   * @returns { TabsAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentWillChange(handler: OnTabsContentWillChangeCallback): TabsAttribute;

  /**
   * 监听Tabs页面滑动事件。
   *
   * 在页面滑动过程中，会对视窗内所有页面逐帧触发[OnTabsContentDidScrollCallback]{@link OnTabsContentDidScrollCallback}回调。例如，当视窗内有下标为0、1的两个页面
   * 时，会每帧触发两次index值分别为0和1的回调。
   *
   * @param { OnTabsContentDidScrollCallback | undefined } handler - Tabs滑动时触发的回调，undefined会解绑原有回调。
   * @returns { TabsAttribute } - the attribute of the Tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined): TabsAttribute;

  /**
   * 设置Tabs组件与其父组件的嵌套滚动模式。未通过该接口设置时，默认嵌套滚动模式为[SELF_ONLY]{@link TabsNestedScrollMode}。
   *
   * @param { TabsNestedScrollMode | undefined } value - Tabs组件和父组件的嵌套滚动模式。<br/>设置undefined时，Tabs自身滚动，不与父组件联动。
   * @returns { TabsAttribute } -the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  nestedScroll(value: TabsNestedScrollMode | undefined): TabsAttribute;

  /**
   * 为页签栏启用浮动样式。
   *
   * @param { Optional<FloatingTabBarStyle> } style - 页签栏的浮动样式
   * @returns { TabsAttribute } - 选项卡的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barFloatingStyle(style: Optional<FloatingTabBarStyle>): TabsAttribute;
}

/**
* Tabs自定义切换动画相关信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabContentAnimatedTransition {

  /**
   * Tabs自定义切换动画超时时间。从自定义动画开始切换计时，如果到达该时间后，开发者仍未调用[TabContentTransitionProxy]{@link TabContentTransitionProxy}的
   * finishTransition接口通知Tabs组件自定义动画结束，那么组件就会认为此次自定义动画已结束，直接执行后续操作。
   *
   * 默认值：1000
   *
   * 单位：ms
   *
   * 取值范围：[0, +∞)。
   *
   * @default 1000 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  timeout?: number;

  /**
   * 自定义切换动画具体内容。
   *
   * @type { function } [since 11 - 17]
   * @type { Callback<TabContentTransitionProxy> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  transition: Callback<TabContentTransitionProxy>;
}

/**
* Tabs自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画的起始和目标页面信息，同时，也可以通过调用该对象的finishTransition接口通知Tabs组件自定义动画已结束。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabContentTransitionProxy {

  /**
   * 自定义动画起始页面对应的index值，索引从0开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  from: number;

  /**
   * 自定义动画目标页面对应的index值，索引从0开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  to: number;

  /**
   * 通知Tabs组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  finishTransition(): void;
}

/**
* 通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。
*
* > **说明：**
*
* > - 该组件从API version 11开始，支持安全区域避让特性，其[expandSafeArea]{@link CommonMethod#expandSafeArea}属性的默认值为expandSafeArea(
* > [SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])。开发者可通过重写该属性覆盖默认行为。对于API version 11之前的版本，则需配合expandSafeArea属性手动实现安全区域避
* > 让。
*
* ###### 子组件
*
* 仅支持子组件[TabContent]{@link tab_content}，以及渲染控制类型
* [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)和
* [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)，不建议自定义组件作为子组件。并且if/else和ForEach下也仅支持
* TabContent作为子组件，不建议自定义组件作为子组件。
*
* > **说明：**
* >
* > Tabs子组件设置了通用属性[visibility]{@link CommonMethod#visibility}的值为None，或者设置值为Hidden时，对应子组件不显示，但依然会在视窗内占位。
* >
* > 已经显示的Tabs子组件TabContent后续隐藏时不会被销毁，若需要页面懒加载和释放，可以参考
* > [示例13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#示例13页面懒加载和释放)。
* >
* > Tabs设置[height]{@link CommonMethod#height(value: Length)}为auto时，可根据子组件高度自适应高度大小。设置
* > [width]{@link CommonMethod#width(value: Length)}为auto时，可根据子组件宽度自适应宽度大小。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Tabs: TabsInterface;

/**
* Defines Tabs Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const TabsInstance: TabsAttribute;