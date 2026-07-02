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
 * UIMaterial
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type UIMaterial = import('../api/@ohos.arkui.uiMaterial').uiMaterial;

/**
 * Defines a parameter object for the **Tabs** component.
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
 * Enumerates layout modes of the tab bar.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarMode {

  /**
   * The width of each tab is determined by the actual layout. The tabs are scrollable in the following case:
   *     In horizontal layout, the total width exceeds the tab bar width; in vertical layout,
   *     the total height exceeds the tab bar height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Scrollable = 0,

  /**
   * The width of each tab is determined by equally dividing the number of tabs by the bar width
   *     (or bar height in the vertical layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fixed = 1
}

/**
 * Enumerates the animation modes for switching between tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AnimationMode {

  /**
   * Loads the content of the target page before starting the switching animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CONTENT_FIRST = 0,

  /**
   * Starts the switching animation before loading the content of the target page. This mode works only when neither the
   * height or width of tabs is set to **auto**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_FIRST = 1,

  /**
   * Disables the default switching animation. Note that this mode is ineffective when the **changeIndex** API of
   * **TabsController** is used to switch content.
   *
   * To disable the animation under this scenario, set **animationDuration** to **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NO_ANIMATION = 2,

  /**
   * Loads the content of the target page first, then jumps to the vicinity of the target page without animation, and
   * finally jumps to the target page with animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  CONTENT_FIRST_WITH_JUMP = 3,

  /**
   * Jumps to the vicinity of the target page without animation first, then jumps to the target page with animation, and
   * finally loads the content of the target page. This mode works only when neither the height or width of tabs is set
   * to **auto**.
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
 * Enumerates the positions of the **Tabs** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarPosition {

  /**
   * If the **vertical** attribute is set to **true**, the tab is on the left of the container. If the **vertical**
   * attribute is set to **false**, the tab is on the top of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start = 0,

  /**
   * If the **vertical** attribute is set to **true**, the tab is on the right of the container. If the **vertical**
   * attribute is set to **false**, the tab is at the bottom of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End = 1
}

/**
 * Enumerates the tab layout styles of the tab bar when not scrolling in scrollable mode.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum LayoutStyle {

  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   *
   * If not, the tabs are compactly centered on the tab bar and not scrollable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_CENTER = 0,

  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   * If not, the tabs are not scrollable, and the width of the tab bar is evenly distributed among all tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_AVERAGE_SPLIT = 1,

  /**
   *  If the tab content exceeds the tab bar width, the tabs are scrollable.
   *
   * If the tab content exceeds half the width of the tab bar but is still within the tab bar width, the tabs are
   * compactly centered and not scrollable.
   *
   * If the tab content does not exceed half the width of the tab bar, the tabs are centered within half the width of the
   * tab bar with even spacing between them and are not scrollable.
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
 * Enumerates the caching modes for child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum TabsCacheMode {

  /**
   * Cache the currently displayed child component and the child components on both sides.
   *     For example, if **cachedMaxCount** is set to **n**, up to 2n+1 child components will be cached.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  CACHE_BOTH_SIDE = 0,

  /**
   * Cache the currently displayed child component and the most recently switched child component.
   *    For example, if **cachedMaxCount** is set to **n**, up to n+1 child components will be cached.
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
 * Enumerates the nested scrolling modes of the **Tabs** component and its parent container.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare enum TabsNestedScrollMode {

  /**
   * The scrolling is contained within the **Tabs** component, and no scroll chaining occurs, that is,
   *     the parent component does not scroll when the component scrolling reaches the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  SELF_ONLY = 0,

  /**
   * The **Tabs** component scrolls first, and when it hits the boundary, the parent component scrolls.
   *     When the parent container hits the boundary, its edge effect is displayed. If no edge effect is specified
   *     for the parent container, the edge effect of the **Tabs** component is displayed instead.
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
 * Defines a tab controller, which is used to control switching of tabs. One **TabsController** cannot control multiple
 * **Tabs** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class TabsController {

  /**
   * A constructor used to create a **TabsController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Switches to the specified tab.
   *
   * @param { number } value - Index of the tab. The value starts from 0.<br>**NOTE**<br>If this parameter is set to a
   *     value less than 0 or greater than the maximum number, the default value **0** is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  changeIndex(value: number): void;

  /**
   * Preloads child nodes. After this API is called, all specified child nodes will be loaded at once. Therefore, for
   * performance considerations, it is recommended that you load child nodes in batches.
   *
   * > **NOTE**
   * >
   * > - **preloadItems** of **Tabs** needs to be called after **Tabs** is created. You are advised to control the first
   * > preloading in the [onAppear]{@link CommonMethod#onAppear} lifecycle of **Tabs**.
   * >
   * > - If the **TabsController** object is not bound to any **Tabs** component, a JavaScript exception will be thrown
   * > when this API is called. Therefore, you are advised to use **try-catch** to handle potential exceptions when
   * > calling this API.
   * >
   * > - When using **preloadItems** to preload tabs, you are advised to use **ComponentContent** to customize the
   * > content displayed on the tab bar. For details, see
   * > [Example 10](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#example-10-setting-tabbar-using-componentcontent).
   *
   * @param { Optional<Array<number>> } indices - Array of indexes of the child nodes to preload.<br>The default value
   *     is an empty array.
   * @returns { Promise<void> } Promise used to return the value.
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
   * Sets the translation distance of the tab bar.
   *
   * > **NOTE**
   * >
   * > When a **Tabs** component is bound to a scrollable container using APIs like
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)
   * > or bindTabsToNestedScrollable](../arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13), scrolling the
   * > container will trigger the display and hide animations of the tab bar for all **Tabs** components bound to it. In
   * > this case, calling the **setTabBarTranslate** API has no effect. Therefore, avoid using **bindTabsToScrollable**,
   * > **bindTabsToNestedScrollable**, and **setTabBarTranslate** simultaneously.
   *
   * @param { TranslateOptions } translate - Translation distance of the tab bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarTranslate(translate: TranslateOptions): void;

  /**
   * Sets the opacity of the tab bar.
   *
   * > **NOTE**
   * >
   * > When a **Tabs** component is bound to a scrollable container using APIs like
   * > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)
   * > or bindTabsToNestedScrollable](../arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13), scrolling the
   * > container will trigger the display and hide animations of the tab bar for all **Tabs** components bound to it. In
   * > this case, any **TabBar** opacity set via the **setTabBarOpacity** API will be overridden. Therefore, avoid using
   * > **bindTabsToScrollable**, **bindTabsToNestedScrollable**, and **setTabBarOpacity** simultaneously.
   *
   * @param { number } opacity - Opacity of the tab bar. The value range is [0.0, 1.0]. A value less than 0.0 is handed
   *     as **0.0**. A value greater than **1.0** is handed as **1.0**.<br> Default value: **1.0**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarOpacity(opacity: number): void;
}

/**
 * Provides parameters for configuring the **Tabs** component, including tab positions, the current index of the
 * displayed tab, the **Tabs** controller, and [universal attributes]{@link common} for the **TabBar**.
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
   * Position of the **Tabs** component.
   *
   * Default value: **BarPosition.Start**
   *
   * @default BarPosition.Start [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barPosition?: BarPosition;

  /**
   * Index of the currently displayed tab.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * A value less than 0 evaluates to the default value.
   *
   * The value ranges from 0 to the number of **TabContent** nodes minus 1.
   *
   * When the tab is switched by changing the index, the tab switching animation does not take effect. When
   * **changeIndex** of **TabController** is used for tab switching, the tab switching animation is enabled by default.
   * You can disable the animation by setting **animationDuration** to **0**.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * When the **Tabs** component is rebuilt, system resources are switched (for example, system font or theme changes),
   * or component attributes change, the **Tab** component will switch to the one specified by **index**. To prevent
   * this behavior, you are advised to use two-way binding.
   *
   * @default 0 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  index?: number;

  /**
   * Tab controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: TabsController;

  /**
   * [Universal attributes]{@link common} of the tab bar.
   *
   * **NOTE**
   *
   * If this parameter is dynamically set to **undefined**, the current state will be preserved, and universal
   * attributes will not be reset.
   *
   * If the setting switches from one **CommonModifier** to another, overlapping attributes will be overwritten, while
   * non-overlapping attributes will coexist without resetting the attributes of the previous **CommonModifier**.
   *
   * The [barWidth]{@link TabsAttribute#barWidth}, [barHeight]{@link TabsAttribute#barHeight(value: Length)},
   * [barBackgroundColor]{@link TabsAttribute#barBackgroundColor},
   * [barBackgroundBlurStyle]{@link TabsAttribute#barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)},
   * and [barBackgroundEffect]{@link TabsAttribute#barBackgroundEffect} attributes of **Tabs** will overwrite the
   * [width]{@link CommonMethod#width(value: Length)}, [height]{@link CommonMethod#height(value: Length)},
   * [backgroundColor]{@link CommonMethod#backgroundColor(color: Optional<ResourceColor>)},
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions)},
   * and [backgroundEffect]{@link CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)} attributes
   * of **CommonModifier**.
   *
   * The [align]{@link CommonMethod#align(value: Alignment)} attribute works only in
   * [BarMode.Scrollable]{@link TabsAttribute#barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)}
   * mode. In addition, for a horizontal **Tabs** component, it only takes effect when
   * [nonScrollableLayoutStyle]{@link ScrollableBarModeOptions} is set to an invalid value or is not set.
   *
   * When set to the bottom tab style,
   * [tabBar]{@link TabContentAttribute#tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder |  TabBarOptions)}
   * attribute of the [TabContent]{@link tab_content} component does not support the dragging feature.
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
 * The **Tabs** component is a container component that allows users to switch between content views through tabs. Each
 * tab page corresponds to a content view.
 *
 * > **NOTE**
 * >
 * > -
 * >
 * > - Since API version 11, this component supports the safe area avoidance feature. The default value of the
 * > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute is
 * > **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])**. You can override the default behavior by
 * > rewriting this attribute. For versions earlier than API version 11, you need to manually implement safe area
 * > avoidance together with the **expandSafeArea** attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TabsInterface {

  /**
   * Create a **Tabs** container.
   *
   * @param { object } value [since 7 - 14]
   * @param { TabsOptions } [options] - Options of the **Tabs** component. [since 15]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: TabsOptions): TabsAttribute;
}

/**
 * Describes the divider style.
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
   * Width of the divider. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
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
   * Color of the divider.
   *
   * Default value: **#33182431**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the top of the sidebar. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
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
   * Distance between the divider and the bottom of the sidebar. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
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
 * Describes the animation information of the **Tabs** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabsAnimationEvent {

  /**
   * Offset of the currently displayed element relative to the start position of the **Tabs** component along the main
   * axis.
   *
   * Unit: vp.
   *
   * Default value: **0**.
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
   * Offset of the target element relative to the start position of the **Tabs** component along the main axis.
   *
   * Unit: vp.
   *
   * Default value: **0**.
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
   * Hands-off velocity at the beginning of the animation. Unit: vp/s.
   *
   * Default value: **0**.
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
 * Implements a **BarGridColumnOptions** object for setting the visible area of the tab bar in grid mode, including the
 * column margin and gutter, as well as the number of columns occupied by tabs under small, medium, and large screen
 * sizes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface BarGridColumnOptions {

  /**
   * Number of columns occupied by a tab on a screen whose width is greater than or equal to 320 vp but less than 600
   * vp.
   *
   * The value must be a non-negative even number. The default value is **-1**, indicating that the tab takes up the
   * entire width of the tab bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  sm?: number;

  /**
   * Number of columns occupied by a tab on a screen whose width is greater than or equal to 600 vp but less than 800
   * vp.
   *
   * The value must be a non-negative even number. The default value is **-1**, indicating that the tab takes up the
   * entire width of the tab bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  md?: number;

  /**
   * Number of columns occupied by a tab on a screen whose width is greater than or equal to 840 vp but less than 1024
   * vp.
   *
   * The value must be a non-negative even number. The default value is **-1**, indicating that the tab takes up the
   * entire width of the tab bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lg?: number;

  /**
   * Column margin in grid mode. It cannot be set in percentage.
   *
   * Default value: **24.0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * Column gutter (that is, gap between columns) in grid mode. It cannot be set in percentage.
   *
   * Default value: **24.0**
   *
   * Unit: vp
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
 * Implements a **ScrollableBarModeOptions** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ScrollableBarModeOptions {

  /**
   * Left and right margin of the tab bar in scrollable mode. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * Tab layout mode of the tab bar when not scrolling in scrollable mode.
   *
   * Default value: **LayoutStyle.ALWAYS_CENTER**
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
 * Provides an interface for the options for the floating bar width of the tab width at different breakpoints.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarWidth {

  /**
   * The bar width of the small devices. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  smallBarWidth?: Length;

  /**
   * The bar width of the medium devices. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mediumBarWidth?: Length;

  /**
   * The bar width of the large devices. It cannot be set in percentage.
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
 * Provides an interface for the options for the floating bar mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarStyle {

  /**
   * The bar width of the tab width at different breakpoints.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barWidth?: FloatingTabBarWidth;

  /**
   * The width of the left and right margins of the bar. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barSideMargin?: Length;

  /**
   * The distance between the bar and the bottom of tab. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barBottomMargin?: Length;

  /**
   * The color of the mask.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * The height of the mask. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskHeight?: Length;

  /**
   * Whether to adapt to the handedness.
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
   * The style of the material.
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
 * Defines the callback triggered when the tab switching animation starts.
 *
 * @param { number } index - Index of the currently displayed element. The index is zero-based.
 * @param { number } targetIndex - Index of the target element to switch to. The index is zero-based.
 * @param { TabsAnimationEvent } extraInfo - Extra information of the animation, including the offset of the currently
 *     displayed element and target element relative to the start position of the **Tabs** along the main axis, and the
 *     hands-off velocity.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationStartCallback = (index: number, targetIndex: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines the callback triggered when the tab switching animation ends.
 *
 * @param { number } index - Index of the currently displayed element. The index is zero-based.
 * @param { TabsAnimationEvent } extraInfo - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **Tabs** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationEndCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines the callback triggered on a frame-by-frame basis during a swipe-based page turn.
 *
 * @param { number } index - Index of the currently displayed element. The index is zero-based.<br>Value range:
 *     [0, Index value — 1]
 * @param { TabsAnimationEvent } extraInfo - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **Tabs** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsGestureSwipeCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines the callback invoked when the custom tab transition animation starts.
 *
 * @param { number } from - Index of the currently displayed tab before the animation starts. The index is zero-based.<
 *     br>Value range: [0, Index value — 1]. If the value exceeds the index value or is less than 0, no transition
 *     animation is displayed.
 * @param { number } to - Index of the target tab before the animation starts. The index is zero-based.<br>Value range:
 *     [0, Index value — 1]. If the value exceeds the index value or is less than 0, no transition animation is
 *     displayed.
 * @returns { TabContentAnimatedTransition | undefined } Information about the custom tab switching animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type TabsCustomContentTransitionCallback = (from: number, to: number) => TabContentAnimatedTransition | undefined;

/**
 * Defines the callback invoked when a new page is about to be displayed.
 *
 * @param { number } currentIndex - Index of the active tab. The index starts from 0.
 * @param { number } comingIndex - Index of the new tab to be displayed.
 * @returns { boolean } The return value **true** means that the tab can switch to the new page.
 *     <br>The value **false** means that the tab cannot switch to the new page and will remain on the current page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;

/**
 * Defines the callback triggered when content in the **Tabs** component scrolls.
 * > **NOTE**
 * >
 * > - For example, when the index of the currently selected tab page is **0**, during a transition animation from page
 * > 0 to page 1, the callback is triggered for all pages within the viewport on every frame. When pages 0 and 1 are
 * > both in the viewport, the callback is triggered twice per frame. The first callback has **selectedIndex** as **0**,
 * > **index** as **0**, **position** as the ratio of how much page 0 has moved relative to its position before the
 * > animation started on the current frame, and **mainAxisLength** as the length of page 0 on the main axis. The second
 * > callback has **selectedIndex** as **0**, **index** as **1**, **position** as the ratio of how much page 1 has moved
 * > relative to page 0 before the animation started on the current frame, and **mainAxisLength** as the length of page
 * > 1 on the main axis.
 * >
 * > - If the animation curve is a spring interpolation curve, during the transition animation from page 0 to page 1,
 * > due to the position and velocity when the user lifts their finger off the screen, animation may overshoot and slide
 * > past to page 2, then bounce back to page 1. Throughout this process, a callback is triggered for pages 1 and 2
 * > within the viewport on every frame.
 *
 * @param { number } selectedIndex - Index of the currently selected page. For example, if the index of the currently
 *     selected tab page is **0**, the value of **selectedIndex** in each callback is **0** during the animation of
 *     switching from page 0 to page 1.
 * @param { number } index - Index of a page in the viewport. For example, if there are two pages (page 0 and page 1) in
 *     the viewport during page transition, the callback is triggered twice in each frame. In the first callback, the
 *     index is 0. In the second callback, the index is 1.
 * @param { number } position - Position of the page specified by **index** relative to the start position of the
 *     **Tabs** main axis (start position of the page corresponding to **selectedIndex**). For example, in a horizontal
 *     **Tabs** component, with the currently selected tab index being 0, if a frame occurs where page 0 occupies 30% of
 *     the viewport and page 1 occupies 70%, two callbacks will be triggered for that frame during the animation from
 *     page 0 to page 1 (switching left). In the first callback, the value of **position** is **-0.7**, indicating that
 *     page 0 in the current frame is on the left of the start position of the main axis of **Tabs**, and its left edge
 *     is 70% of the viewport away from the starting position (meaning page 0 has moved left by 70% of the viewport). In
 *     the second callback, the value of **position** is **0.3**, indicating that page 1 in the current frame is on the
 *     right of the start position of the main axis of **Tabs**, and its left edge is 30% of the viewport away from the
 *     starting position (meaning page 1 has moved left by 70% of the viewport).
 * @param { number } mainAxisLength - Length of the page specified by **index** along the main axis, in vp. For example,
 *     if the index of a callback is **0** and the **mainAxisLength** of this callback is **360**, the length of page 0
 *     of the current frame in the main axis direction is 360 vp. This parameter indicates the page width for horizontal
 *     tabs, and the page height for vertical tabs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnTabsContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TabsAttribute extends CommonMethod<TabsAttribute> {

  /**
   * Sets whether to use vertical tabs.
   *
   * @param { boolean } value - Whether to use vertical tabs.<br>The value **true** means to use vertical tabs, and
   *     **false** means to use horizontal tabs.<br>Default value: **false**<br>If set to have a height of **auto**,
   *     horizontal tabs auto-adapt the height to child components, which is calculated as follows: Tab bar height +
   *     Divider width + Tab content height + Top and bottom paddings + Top and bottom border widths.<br>If set to have
   *     a width of **auto**, vertical tabs auto-adapt the width to child components, which is calculated as follows:
   *     Tab bar width + Divider width + Tab content width + Left and right paddings + Left and right border widths.<br>
   *     To avoid animation jitter when switching between tabs, maintain a consistent size for child components on each
   *     tab.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): TabsAttribute;

  /**
   * Sets the position of the **Tabs** component.
   *
   * @param { BarPosition } value - Position of the **Tabs** component.<br>Default value: **BarPosition.Start**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  barPosition(value: BarPosition): TabsAttribute;

  /**
   * Sets whether the tabs are scrollable.
   *
   * @param { boolean } value - Whether the tabs are scrollable.<br>**true** (default): The tabs are scrollable.<br>
   *     **false**: The tabs are not scrollable.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollable(value: boolean): TabsAttribute;

  /**
   * Sets the tab bar layout mode to **BarMode.Fixed**.
   *
   * @param { BarMode.Fixed } value - The width of each tab is determined by equally dividing the number of tabs by the
   *     bar width (or bar height in the vertical layout).
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Fixed): TabsAttribute;

  /**
   * Sets the tab bar layout mode to **BarMode.Scrollable**.
   *
   * @param { BarMode.Scrollable } value - The width of each tab is determined by the actual layout. The tabs are
   *     scrollable in the following case: In horizontal layout, the total width exceeds the tab bar width; in vertical
   *     layout, the total height exceeds the tab bar height.
   * @param { ScrollableBarModeOptions } [options] - Layout style of the tab bar in scrollable mode.<br>**NOTE**<br>This
   *     parameter is effective only when the tab bar is in scrollable mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions): TabsAttribute;

  /**
   * Sets the tab bar layout mode.
   *
   * @param { BarMode } value - Layout mode.<br>Default value: **BarMode.Fixed**
   * @param { ScrollableBarModeOptions } [options] - Layout style of the tab bar in scrollable mode.<br>**NOTE**<br>This
   *     parameter is effective only when the tab bar is in horizontal scrollable mode. [since 10]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barMode(value: BarMode, options?: ScrollableBarModeOptions): TabsAttribute;

  /**
   * Sets the width of the tab bar. If the set value is less than 0 or greater than the width of the **Tabs** component,
   * the default value is used.
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
   * @param { Length } value - Width of the tab bar.<br>Default value:<br>If the tab bar has the **vertical** attribute
   *     set to **false** and does not have [SubTabBarStyle]{@link SubTabBarStyle} or
   *     [BottomTabBarStyle]{@link BottomTabBarStyle} specified, the default value is the width of the **Tabs**
   *     component.<br>If neither **SubTabBarStyle** nor **BottomTabBarStyle** is set, and the **vertical** attribute is
   *     **true**, the default value is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is
   *     **false**, the default value is the width of the **Tabs** component.<br>If **SubTabBarStyle** is set, and the
   *     **vertical** attribute is **true**, the default value is 56 vp.<br>If **BottomTabBarStyle** is set, and the
   *     **vertical** attribute is **true**, the default value is 96 vp.<br>If **BottomTabBarStyle** is set, and the
   *     **vertical** attribute is **false**, the default value is the width of the **Tabs** component. [since 8]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barWidth(value: Length): TabsAttribute;

  /**
   * Sets the height of the tab bar. For horizontal **Tabs** components, you can set the height to **'auto'** to allow
   * the tab bar to automatically adapt to the height of its child components. If the height is set to a value less than
   * 0 or greater than the height of the **Tabs** component, the default value is used.
   *
   * In versions earlier than API version 14, setting **barHeight** to a fixed value prevents the tab bar from extending
   * beyond the bottom safe area. Since API version 14, the [safeAreaPadding]{@link CommonMethod#safeAreaPadding}
   * attribute is supported. When **safeAreaPadding** is set to 0 or is not explicitly set, the tab bar is allowed to
   * extend beyond the bottom safe area.
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
   * @param { Length } value - Height of the tab bar.<br>Default value:<br>If no style is set or **CustomBuilder** is
   *     used to set a custom style for the **TabBar**, and **vertical** is set to **false**, the default value is 56
   *     vp.<br>If no style is set or **CustomBuilder** is used to set a custom style for the **TabBar**, and
   *     **vertical** is set to **true**, the default value is the height of the **Tabs** component.<br>If
   *     [SubTabBarStyle]{@link SubTabBarStyle} is set, and the **vertical** attribute is **false**, the default value
   *     is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is **true**, the default value is the
   *     height of the **Tabs** component.<br>If [BottomTabBarStyle]{@link BottomTabBarStyle} is set, and the
   *     **vertical** attribute is **true**, the default value is the height of the **Tabs** component.<br>If
   *     **BottomTabBarStyle** is set, and the **vertical** attribute is **false**, the default value is 56 vp in
   *     versions earlier than API version 12 and 48 vp since API version 12. [since 8]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barHeight(value: Length): TabsAttribute;

  /**
   * Sets the height of the tab bar. For horizontal **Tabs** components, you can set the height to **'auto'** to allow
   * the tab bar to automatically adapt to the height of its child components; you can also set **noMinHeightLimit** to
   * **true** so that the adaptive height can be less than the default tab bar height. If the height is set to a value
   * less than 0 or greater than the height of the **Tabs** component, the default value is used.
   *
   * @param { Length } height - Height of the tab bar.<br>Default value:<br>If no style is set or **CustomBuilder** is
   *     used to set a custom style for the **TabBar**, and **vertical** is set to **false**, the default value is 56
   *     vp.<br>If no style is set or **CustomBuilder** is used to set a custom style for the **TabBar**, and
   *     **vertical** is set to **true**, the default value is the height of the **Tabs** component.<br>If
   *     [SubTabBarStyle]{@link SubTabBarStyle} is set, and the **vertical** attribute is **false**, the default value
   *     is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is **true**, the default value is the
   *     height of the **Tabs** component.<br>If [BottomTabBarStyle]{@link BottomTabBarStyle} is set, and the
   *     **vertical** attribute is **true**, the default value is the height of the **Tabs** component.<br>If
   *     **BottomTabBarStyle** is set, and the **vertical** attribute is **false**, the default value is 48 vp.
   * @param { boolean } noMinHeightLimit - Whether to remove the minimum height limit of the tab bar when **height** is
   *     set to **'auto'**. The default value is **false**.<br>**NOTE**<br>**true**: removes the minimum height limit,
   *     allowing the height to be less than the default value.<br>**false**: enforces the minimum height limit, meaning
   *     the height cannot be less than the default value.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  barHeight(height: Length, noMinHeightLimit: boolean): TabsAttribute;

  /**
   * Sets the tab switching animation curve for the **Tabs** component. For details about commonly used curves, refer to
   * the [Curve]{@link Curve} enum. Custom interpolation curve objects can also be created using the APIs provided in
   * the [interpolation calculation]{@link @ohos.curves:curves} module.
   *
   * @param { Curve | ICurve } curve - Tab switching animation curve.<br>Default value:<br>When pages are turned by
   *     swiping in **TabContent**, the default value is **interpolatingSpring(-1, 1, 228, 30)**.<br>When pages are
   *     turned by tapping tabs or calling the **changeIndex** API of **TabsController**, the default value is
   *     **cubicBezierCurve(0.2, 0.0, 0.1, 1.0)**.<br>When a custom animation curve is set, it applies to all tab
   *     switching animations��whether triggered by swiping, tapping a tab, or calling the **changeIndex** API.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  animationCurve(curve: Curve | ICurve): TabsAttribute;

  /**
   * Sets the duration of the tab switching animation for the **Tabs** component.
   *
   * If **animationCurve** is not set, **animationDuration** only controls the duration of tab switching animations
   * triggered by tapping a tab or calling the **changeIndex** API, and page-turning animations triggered by swiping in
   * **TabContent**, the duration is determined by the intrinsic parameters of the default curve
   * **interpolatingSpring(-1, 1, 228, 30)**.
   *
   * For details about curves unaffected by **animationDuration**, see
   * [Interpolation Calculation]{@link @ohos.curves:curves}. These curves include curves of type
   * [springMotion]{@link @ohos.curves:curves.springMotion},
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}, and
   * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}.
   *
   * @param { number } value - Duration of the tab switching animation.<br>Default value:<br>API version 10 and earlier
   *     versions: If this parameter is set to **null** or is not set, the default value **0**, which means no animation
   *     for tab switching. If this parameter is set to **undefined** or a value less than 0, the default value is
   *     **300**.<br>API version 11 and later versions: If this parameter is set to an invalid value or is not set, the
   *     default value is **0** when the tab bar is set to **BottomTabBarStyle** and **300** when the tab bar is set to
   *     any other style.<br>Unit: ms<br>Value range: [0, +∞).
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  animationDuration(value: number): TabsAttribute;

  /**
   * Sets the animation mode for tab switching initiated by clicking a specific tab or by calling the **changeIndex**
   * API of **TabsController**.
   *
   * > **NOTE**
   * >
   * > This attribute cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<AnimationMode> } mode - Animation mode for tab switching initiated by clicking a specific tab or
   *     by calling the **changeIndex** API of **TabsController**.<br>Default value: **AnimationMode.CONTENT_FIRST**,
   *     which means the target page content is loaded first, followed by the animation.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  animationMode(mode: Optional<AnimationMode>): TabsAttribute;

  /**
   * Sets the edge effect used when the boundary of the scrolling area is reached.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 17.
   *
   * @param { Optional<EdgeEffect> } edgeEffect - Effect used when the boundary of the scrolling area is reached.<br>
   *     Default value: **EdgeEffect.Spring**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  edgeEffect(edgeEffect: Optional<EdgeEffect>): TabsAttribute;

  /**
   * Triggered after the active tab changes.
   *
   * This event is triggered when any of the following occurs:
   *
   * 1. After completing a swipe-triggered tab switching animation.
   *
   * 2. After the active tab changes by calling the [changeIndex]{@link TabsController#changeIndex} API of [Controller]{@link TabsController}.
   *
   * 3. After the active tab changes by updating the index through the bound [state variable](docroot://ui/state-management/arkts-state.md).
   *
   * 4. After the active tab changes by tapping a tab in the tab bar.
   *
   * > **NOTE**
   * >
   * > When a custom tab is used, relying solely on the **onChange** event for synchronization between tabs and swipe
   * > gestures may result in delayed visual updates, since it is triggered after the swipe-triggered tab switching
   * > animation is completed. For smooth animations, listen for the active tab index in
   * > [onAnimationStart]{@link TabsAttribute#onAnimationStart} and update the tab index accordingly. For details about
   * > the implementation, see
   * > [Example 3](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-3-implementing-custom-tab-switching-synchronization).
   *
   * @param { function } event - Index of the active tab. The index starts from 0. [since 7 - 17]
   * @param { Callback<number> } event - Index of the active tab. The index starts from 0. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when the selected element changes. The index of the currently selected element is returned.
   *
   * This event is triggered when any of the following occurs:
   *
   * 1. When the swipe gesture is released and the tab switching threshold is met, triggering the switching animation.
   *
   * 2. When the [changeIndex]{@link TabsController#changeIndex} API of [TabsController]{@link TabsController}
   *     is called, triggering the switching animation.
   *
   * 3. When the index of the active tab is changed through the bound
   *    [state variable](docroot://ui/state-management/arkts-state.md).
   *
   * 4. When a tab is tapped.
   *
   * > **NOTE**
   * >
   * > In the **onSelected** callback, the index of the current displayed page cannot be set using **index** of
   * > [TabsOptions]{@link TabsOptions}, and **TabsController.changeIndex()** cannot be called.
   *
   * @param { Callback<number> } event - Index of the currently selected element.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelected(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when a tab is clicked.
   *
   * @param { function } event - Index of the clicked tab. The index starts from 0. [since 10 - 17]
   * @param { Callback<number> } event - Index of the clicked tab. The index starts from 0. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTabBarClick(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when the selected element changes. The index of the element that is about to be hidden is returned.
   *
   * This event is triggered when any of the following occurs:
   *
   * 1. When the swipe gesture is released and the tab switching threshold is met, triggering the switching animation.
   *
   * 2. When the [changeIndex]{@link TabsController#changeIndex} API of [TabsController]{@link TabsController} is called, triggering the switching animation.
   *
   * 3. When the index of the active tab is changed through the bound [state variable](docroot://ui/state-management/arkts-state.md).
   *
   * 4. When a tab is tapped.
   *
   * @param { Callback<number> } event - Index of the element that is about to be hidden.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnselected(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when the transition animation starts. If [animationDuration]{@link TabsAttribute#animationDuration} is
   * set to **0** and [scrollable]{@link TabsAttribute#scrollable} is set to **false**, this callback is not triggered.
   *
   * @param { function } handler - Callback triggered when the transition animation starts. [since 11 - 17]
   * @param { OnTabsAnimationStartCallback } handler - Callback triggered when the transition animation
   *     starts. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationStart(handler: OnTabsAnimationStartCallback): TabsAttribute;

  /**
   * Triggered when the tab switching animation is completed, including cases where the gesture is interrupted during
   * animation. This event is not triggered when **animationDuration** is set to **0**, which effectively disables the
   * animation.
   *
   * @param { function } handler - Callback triggered upon animation completion or interruption. [since 11 - 17]
   * @param { OnTabsAnimationEndCallback } handler - Callback triggered upon animation completion or
   *     interruption. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationEnd(handler: OnTabsAnimationEndCallback): TabsAttribute;

  /**
   * Triggered on a frame-by-frame basis during swipe gestures for tab switching.
   *
   * @param { function } handler - Triggered on a frame-by-frame basis during swipe gestures for tab
   *     switching. [since 11 - 17]
   * @param { OnTabsGestureSwipeCallback } handler - Triggered on a frame-by-frame basis during swipe gestures for tab
   *     switching. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGestureSwipe(handler: OnTabsGestureSwipeCallback): TabsAttribute;

  /**
   * Sets whether the tabs fade out when they exceed the container width. It is recommended that this attribute be used
   * together with the **barBackgroundColor** attribute. If **barBackgroundColor** is not defined, the default fade
   * effect shows a white gradient at the container's edge.
   *
   * @param { boolean } value - Whether the tabs fade out when they exceed the container width.<br>**true** (default):
   *     The tab fades out when they exceed the container width.<br> **false**: The tabs are clipped without any fade
   *     effect when they exceed the container width.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fadingEdge(value: boolean): TabsAttribute;

  /**
   * Sets the divider between the **TabBar** and **TabContent** components.
   *
   * @param { DividerStyle | null } value - Divider style. By default, the divider is not displayed.<br>
   *     **DividerStyle**: divider style.<br>**null**: No divider is displayed.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: DividerStyle | null): TabsAttribute;

  /**
   * Sets whether the tab bar overlaps the **TabContent** component with a blurred background effect.
   *
   * @param { boolean } value - Whether the tab bar overlaps the **TabContent** component with a blurred background
   *     effect. **true**: The tab bar overlaps the **TabContent** component with a blurred background effect, and the
   *     default blur style of the tab bar is set to **'BlurStyle.COMPONENT_THICK'**.<br> **false**: There is no blur or
   *     overlap effect.<br>Default value: **false**.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barOverlap(value: boolean): TabsAttribute;

  /**
   * Sets the background color of the tab bar.
   *
   * @param { ResourceColor } value - Background color of the tab bar.<br>Default value: **Color.Transparent**
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barBackgroundColor(value: ResourceColor): TabsAttribute;

  /**
   * Sets the visible area of the tab bar in grid mode. For details, see **BarGridColumnOptions**. This attribute is
   * effective only in horizontal mode. It is not applicable to
   * [XS, XL, and XXL devices](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints).
   *
   * @param { BarGridColumnOptions } value - Visible area of the tab bar in grid mode.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barGridAlign(value: BarGridColumnOptions): TabsAttribute;

  /**
   * Defines a custom tab page transition animation.
   *
   * Instructions:
   *
   * 1. When a custom animation is used, the default transition animation of the **Tabs** component is disabled,
   *    and the tab pages cannot be switched by swipe gestures.
   * 2. Setting this attribute to **undefined** disables the custom transition animation and reverts to the component's
   *     default transition animation.
   * 3. Currently, the custom animation cannot be interrupted.
   * 4. Currently, the custom animation can be triggered only in two scenarios: clicking a tab and
   *     calling the TabsController.changeIndex() API.
   * 5. When a custom animation is used, all events except **onGestureSwipe** of the **Tabs** component are supported.
   * 6. The triggering time of the **onChange** and **onAnimationEnd** events needs to be specified.
   *     If the second custom animation is triggered during the execution of the first custom animation,
   *     the **onChange** and **onAnimationEnd** events of the first custom animation are triggered
   *     when the second custom animation starts.
   * 7. When a custom animation is used, the layout mode of the page involved in the animation is changed to **Stack**.
   *     If the **zIndex** attribute is not set for related pages, the **zIndex** values of all pages are the same.
   *     In this case, the pages are rendered in the order in which they are added to the component tree (that is,
   *     the sequence of page indexes). In light of this, to control the rendering levels of pages, set the **zIndex**
   *     attribute of the pages.
   * 8. This attribute cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } delegate - Callback invoked when the custom tab transition animation starts. [since 11 - 17]
   * @param { TabsCustomContentTransitionCallback } delegate - Callback invoked when the custom tab transition animation
   *     starts. [since 18]
   * @returns { TabsAttribute } The attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  customContentTransition(delegate: TabsCustomContentTransitionCallback): TabsAttribute;

  /**
   * Sets the background blur style of the tab bar.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { BlurStyle } value - Background blur style of the tab bar.<br>Default value: **BlurStyle.NONE**
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  barBackgroundBlurStyle(value: BlurStyle): TabsAttribute;

  /**
   * Sets the mode for flipping pages using the mouse wheel.
   *
   * @param { Optional<PageFlipMode> } mode - Mode for flipping pages using the mouse wheel.<br>Default value:
   *     **PageFlipMode.CONTINUOUS**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pageFlipMode(mode: Optional<PageFlipMode>): TabsAttribute;

  /**
   * Defines the blur style to apply between the background and content of a tab bar. It encapsulates various blur
   * radius, mask color, mask opacity, saturation, and brightness values through enum values.
   *
   * @param { BlurStyle } style - Settings of the background blur style, including the blur radius, mask color, mask
   *     opacity, saturation, and brightness.
   * @param { BackgroundBlurStyleOptions } options - Background blur options.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions): TabsAttribute;

  /**
   * Sets the background effect of the tab bar, including the blur radius, brightness, saturation, and color.
   *
   * @param { BackgroundEffectOptions } options - Background effect options, including the blur radius, brightness,
   *     saturation, and color.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundEffect(options: BackgroundEffectOptions): TabsAttribute;

  /**
   * Sets the maximum number of child components to cache and the caching mode. If this attribute is not set, all child
   * components are cached by default and are not released after being cached.
   *
   * @param { number } count - Maximum number of child components to cache. If the value is out of the range, the
   *     unnecessary child components are automatically released.<br>Value range: [0, +∞)
   * @param { TabsCacheMode } mode - Caching mode for child components.<br>Default value:
   *     **TabsCacheMode.CACHE_BOTH_SIDE**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  cachedMaxCount(count: number, mode: TabsCacheMode): TabsAttribute;

  /**
   * Triggered when a new page is about to be displayed.
   *
   * This event is triggered when any of the following occurs:
   *
   * 1. When the user swipes through the **TabContent** to switch to a new page.
   *
   * 2. When **TabsController.changeIndex** is called to switch to a new page.
   *
   * 3. When the **index** attribute is changed to switch to a new page.
   *
   * 4. When the user taps a tab on the tab bar to switch to a new page.
   *
   * 5. When the user presses the left or
   *     right arrow key on the keyboard to switch to a new page while the tab bar has focus.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } handler - Callback triggered when a new page is about to be displayed. [since 12 - 17]
   * @param { OnTabsContentWillChangeCallback } handler - Callback triggered when a new page is about to be
   *     displayed. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentWillChange(handler: OnTabsContentWillChangeCallback): TabsAttribute;

  /**
   * Triggered when content in the **Tabs** component scrolls.
   *
   * During page scrolling, the [OnTabsContentDidScrollCallback]{@link OnTabsContentDidScrollCallback} callback is
   * invoked for all pages in the viewport on a frame-by-frame basis. For example, when there are two pages whose
   * subscripts are 0 and 1 in the viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.
   *
   * @param { OnTabsContentDidScrollCallback | undefined } handler - Callback triggered when a tab page is swiped.
   *     Passing **undefined** will unbind the previously registered callback.
   * @returns { TabsAttribute } - the attribute of the Tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined): TabsAttribute;

  /**
   * Sets the nested scrolling mode of the **Tabs** component and its parent component. If this API is not called, the
   * default nested scrolling mode is [SELF_ONLY]{@link TabsNestedScrollMode}.
   *
   * **Model constraint**: This API can be used only in the stage model.
   *
   * @param { TabsNestedScrollMode | undefined } value - Nested scrolling mode of the **Tabs** component and its parent
   *     container.<br>When this parameter is set to **undefined**, the scrolling is contained within the **Tabs**
   *     component, and no scroll chaining occurs, that is, the parent component does not scroll when the component
   *     scrolling reaches the boundary.
   * @returns { TabsAttribute } -the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  nestedScroll(value: TabsNestedScrollMode | undefined): TabsAttribute;

  /**
   * Enable floating style for bar.
   *
   * @param { Optional<FloatingTabBarStyle> } style - floating style for bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barFloatingStyle(style: Optional<FloatingTabBarStyle>): TabsAttribute;
}

/**
 * Provides the information about the custom tab switching animation.
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
   * Timeout for the custom tab switching animation. The timer starts when the switching begins. If this timeframe
   * passes without you calling the **finishTransition** API in
   * [TabContentTransitionProxy]{@link TabContentTransitionProxy}, the component will assume that the custom animation
   * has ended and will proceed directly with subsequent operations.
   *
   * Default value: **1000**
   *
   * Unit: ms
   *
   * Value range: [0, +∞)
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
   * Content of the custom tab switching animation.
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
 * Implements the proxy object returned during the execution of the custom switching animation of the **Tabs**
 * component. You can use this object to obtain the start and target pages for the custom tab switching animation. In
 * addition, you can call the **finishTransition** API of this object to notify the **Tabs** component of the ending of
 * the custom animation.
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
   * Zero-based index of the source page in the custom animation.
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
   * Zero-based index of the target page in the custom animation.
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
   * Notifies the **Tabs** component that the custom animation has finished playing.
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
 * The **Tabs** component is a container component that allows users to switch between content views through tabs. Each
 * tab page corresponds to a content view.
 *
 * > **NOTE**
 * >
 * > -
 * >
 * > - Since API version 11, this component supports the safe area avoidance feature. The default value of the
 * > [expandSafeArea]{}
 * > **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])**. You can override the default behavior by
 * > rewriting this attribute. For versions earlier than API version 11, you need to manually implement safe area
 * > avoidance together with the **expandSafeArea** attribute.
 *
 * ###### Child Components
 *
 * Only the child component [TabContent]{@link tab_content} and rendering control types
 * [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md) are supported. You are advised not to
 * use custom components as child components. If **if/else** or **ForEach** is used, only **TabContent** can be used as
 * the child component. You are advised not to use custom components as child components.
 *
 * > **NOTE**
 * >
 * > If the child component has the **visibility** attribute set to **None** or **Hidden**, it is hidden but still takes
 * > up space in the layout.
 * >
 * > When a displayed **Tabs** child component **TabContent** is hidden, it is not destroyed. For details about how to
 * > implement lazy loading and release on the page, see
 * > [Example 13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-13-implementing-lazy-loading-and-resource-release-of-pages).
 * >
 * >
 * > If [height]{@link CommonMethod#height(value: Length)} is set to **auto** for **Tabs**, the tab height can be
 * > automatically adjusted based on that of the child component. When [width]{@link CommonMethod#width(value: Length)}
 * > is set to **auto**, the tab width can be automatically adjusted based on that of the child component.
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