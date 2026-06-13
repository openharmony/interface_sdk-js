
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

import uiMaterial from '../../@ohos.arkui.uiMaterial'

/**
 * Declare the graphic format of the bar chart.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarMode {

  /**
   * The width of each tab is determined by the actual layout. The tabs are scrollable in the following case:
   * In horizontal layout, the total width exceeds the tab bar width; in vertical layout,
   * the total height exceeds the tab bar height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Scrollable = 0,

  /**
   * The width of each tab is determined by equally dividing the number of tabs by the bar width
   * (or bar height in the vertical layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fixed = 1
}

/**
 * Tabs nested scroll nested mode
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TabsNestedScrollMode {

  /**
   * The scrolling is contained within the Tabs component, and no scroll chaining occurs, that is,
   * the parent container does not scroll when the component scrolling reaches the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SELF_ONLY = 0,

  /**
   * The Tabs component scrolls first, and when it hits the boundary, the parent container scrolls.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SELF_FIRST = 1
}

/**
 * Declare the animation mode of tab content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AnimationMode {

  /**
   * Load the content of the target page before starting the switching animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_FIRST = 0,

  /**
   * Start the switching animation before loading the content of the target page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_FIRST = 1,

  /**
   * Disable the default switching animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NO_ANIMATION = 2,

  /**
   * Load the content of the target page first, then jump to the vicinity of the target page without animation,
   * and finally jump to the target page with animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_FIRST_WITH_JUMP = 3,

  /**
   * Jump to the vicinity of the target page without animation first,
   * then jump to the target page with animation, and finally load the content of the target page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_FIRST_WITH_JUMP = 4
}

/**
 * Declare the location of the bar chart.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarPosition {

  /**
   * When the vertical attribute method is set to true, the tab is on the left of the container.
   * When the vertical property method is set to false, the tab is at the top of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * When the vertical attribute method is set to true, the tab is located on the right of the container.
   * When the vertical property method is set to false, the tab is at the bottom of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 1
}

/**
 * Declare the layout style of the tab bar items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutStyle {

  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   * If not, the tabs are compactly centered on the tab bar and not scrollable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALWAYS_CENTER = 0,

  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   * If not, the tabs are not scrollable, and the width of the tab bar is evenly distributed among all tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALWAYS_AVERAGE_SPLIT = 1,

  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable. If the tab content exceeds
   * half the width of the tab bar but is still within the tab bar width, the tabs are compactly centered and
   * not scrollable.If the tab content does not exceed half the width of the tab bar, the tabs are centered within
   * half the width of the tab bar with even spacing between them and are not scrollable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SPACE_BETWEEN_OR_CENTER = 2
}

/**
 * Declare the cache mode of the child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TabsCacheMode {

  /**
   * Caches the child components on both sides of the current child components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CACHE_BOTH_SIDE = 0,

  /**
   * Caches the latest switched child components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CACHE_LATEST_SWITCHED = 1
}

/**
 * Provides methods for switching tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TabsController {

  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * Switches to the specified tab.
   *
   * @param { int } value - Index of the tab.
   *     If this parameter is set to a value less than 0 or greater than the maximum number,
   *     the default value 0 is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  changeIndex(value: int): void;

  /**
   * Called when need to preload specified tab content.
   *
   * @param { Array<int> | undefined } indices - Indices of tab content to be preloaded.
   * @returns { Promise<void> } - The promise returned by the function.
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
   * Set tab bar translate.
   *
   * @param { TranslateOptions } translate - translate options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTabBarTranslate(translate: TranslateOptions): void;

  /**
   * Set tab bar opacity.
   *
   * @param { double } opacity - opacity
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTabBarOpacity(opacity: double): void;
}

/**
 * Options used to create Tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TabsOptions {

  /**
   * Set the tab location for Tabs.
   * Default value: BarPosition.Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barPosition?: BarPosition;

  /**
   * Set the index of the currently displayed tab.
   * Default value: 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index?: int | Bindable<int>;

  /**
   * Set the Tabs controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: TabsController;

  /**
   * Set common attributes to tabbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barModifier?: CommonModifier;
}

/**
 * Provides an interface for tabs animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabsAnimationEvent {

  /**
   * Offset of the current page to the start position of the tabs main axis.
   * Unit: vp.
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentOffset: double;

  /**
   * Offset of the target page to the start position of the tabs main axis.
   * Unit: vp.
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  targetOffset: double;

  /**
   * Start speed of the page-turning animation.
   * Unit: vp/s.
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  velocity: double;
}

/**
 * Provides an interface for the grid column options of an tab bar including sm, md, lg, margin and gutter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BarGridColumnOptions {

  /**
   * Number of columns occupied by a tab on a screen whose width is
   * greater than or equal to 320 vp but less than 600 vp. The value must be a non-negative even int.
   * The value range is all integers, The default value is - 1, indicating that the tab occupies the entire width of the
   *  TabBar. Default value: -1.
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sm?: int;

  /**
   * Number of columns occupied by a tab on a screen whose width is
   * greater than or equal to 600 vp but less than 800 vp. The value must be a non-negative even int.
   * The value range is all integers, The default value is - 1, indicating that the tab occupies the entire width of the
   *  TabBar. Default value: -1.
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  md?: int;

  /**
   * Number of columns occupied by a tab on a screen whose width is
   * greater than or equal to 840 vp but less than 1024 vp. The value must be a non-negative even int.
   * The value range is all integers, The default value is - 1, indicating that the tab occupies the entire width of the
   *  TabBar. Default value: -1.
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lg?: int;

  /**
   * Column margin in grid mode. It cannot be set in percentage.
   * Unit: vp. Default value: 24.
   *
   * @default 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: Dimension;

  /**
   * Column gutter (that is, gap between columns) in grid mode. It cannot be set in percentage.
   * Unit: vp. Default value: 24.
   *
   * @default 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  gutter?: Dimension;
}

/**
 * Provides an interface for the options for the scrollable bar mode including margin and nonScrollableLayoutStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ScrollableBarModeOptions {

  /**
   * Left and right margin of the tab bar in scrollable mode. It cannot be set in percentage.
   * Unit: vp. Default value: 0.
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: Dimension;

  /**
   * Tab layout mode of the tab bar when not scrolling in scrollable mode.
   * Default value: LayoutStyle.ALWAYS_CENTER.
   *
   * @default LayoutStyle.ALWAYS_CENTER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  nonScrollableLayoutStyle?: LayoutStyle;
}

/**
 * Provides an interface for the options for the floating bar width of the tab width at different breakpoints.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface FloatingTabBarWidth {

  /**
   * The bar width of the small devices. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  smallBarWidth?: Length;

  /**
   * The bar width of the medium devices. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mediumBarWidth?: Length;

  /**
   * The bar width of the large devices. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  largeBarWidth?: Length;
}

/**
 * Provides an interface for the options for the floating bar mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface FloatingTabBarStyle {

  /**
   * The bar width of the tab width at different breakpoints.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  barWidth?: FloatingTabBarWidth;

  /**
   * The width of the left and right margins of the bar. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  barSideMargin?: Length;

  /**
   * The distance between the bar and the bottom of tab. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  barBottomMargin?: Length;

  /**
   * The color of the mask.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maskColor?: ResourceColor;

  /**
   * The height of the mask. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maskHeight?: Length;

  /**
   * Whether to adapt to the handedness.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  adaptToHandedness?: boolean;

  /**
   * The style of the material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  systemMaterial?: uiMaterial.ImmersiveMaterial;
}

/**
 * Defines a tabs callback when onAnimationStart.
 *
 * @param { int } index - The index value of the tab that when animation start.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { int } targetIndex - The target index value of the tab that when animation start.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { TabsAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsAnimationStartCallback = (index: int, targetIndex: int, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines a tabs callback when onAnimationEnd.
 *
 * @param { int } index - The index value of the tab that when animation end.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { TabsAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsAnimationEndCallback = (index: int, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines a tabs callback when onGestureSwipe.
 *
 * @param { int } index - The index value of the tab before gesture swipe.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { TabsAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsGestureSwipeCallback = (index: int, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines a tabs callback when customContentTransition.
 *
 * @param { int } from - The index value of the current tab when the animation begins.
 *     The value range is all integers
 *     The value should be an integer.Value constraint:Value range: [0, index-1]
 *     There is no transition animation when the set value exceeds the index value or is less than 0.
 * @param { int } to - The index value of the target tab when the animation begins.
 *     The value range is all integers
 *     The value should be an integer.Value constraint:Value range: [0, index]
 *     There is no transition animation when the set value exceeds the index value or is less than 0.
 * @returns { TabContentAnimatedTransition | undefined } Returns animated transition options of tab or undefined.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TabsCustomContentTransitionCallback = (from: int, to: int) => (TabContentAnimatedTransition | undefined);

/**
 * Defines a tabs callback when onContentWillChange.
 *
 * @param { int } currentIndex - The index value of the current tab.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { int } comingIndex - The index value of the tab that will change.
 *     The value range is all integers
 *     The value should be an integer.
 * @returns { boolean }
 *     Tabs can change from currentIndex to comingIndex if function return true.
 *     Tabs can not change from currentIndex to comingIndex if function return false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsContentWillChangeCallback = (currentIndex: int, comingIndex: int) => boolean;

/**
 * Defines a tabs callback when onContentDidScroll.
 *
 * @param { int } selectedIndex - the index value of the Tabs content selected before animation start.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { int } index - the index value of the Tabs content.
 *     The value range is all integers
 *     The value should be an integer.
 * @param { double } position - the moving ratio of the Tabs content from the start position of the Tabs main axis.
 * @param { double } mainAxisLength - the Tabs main axis length for calculating position.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTabsContentDidScrollCallback = (selectedIndex: int, index: int, position: double, mainAxisLength: double) => void;

/**
 * The TabsAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TabsAttribute extends CommonMethod {

  /**
   * Sets whether to use vertical tabs.
   *
   * @param { boolean | undefined } value - Whether to use vertical tabs. Default value is false.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default vertical(value: boolean | undefined): this;

  /**
   * Sets the position of the Tabs component.
   *
   * @param { BarPosition | undefined } value - Position of the Tabs component. Default value is BarPosition.Start.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barPosition(value: BarPosition | undefined): this;

  /**
   * Sets whether the tabs are scrollable.
   *
   * @param { boolean | undefined } value - Whether the tabs are scrollable. Default value is true.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollable(value: boolean | undefined): this;

  /**
   * Sets the tab bar layout mode.
   *
   * @param { BarMode | undefined } value - Layout mode. Default value is BarMode.Fixed.
   * @param { ScrollableBarModeOptions | undefined } [options] - Layout style of the tab bar in scrollable mode.
   *     This parameter is effective only when the tab bar is in horizontal scrollable mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barMode(value: BarMode | undefined, options?: ScrollableBarModeOptions | undefined): this;

  /**
   * Sets the width of the tab bar.
   *
   * @param { Length | undefined } value - Width of the tab bar. If the set value is less than 0
   *     or greater than the width of the Tabs component, the default value is used.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barWidth(value: Length | undefined): this;

  /**
   * Sets the height of the tab bar.
   * Default value:
   * When the vertical attribute of tabs is set to false,
   * and no tabBar style is set for the tabs or a custom style is set using CustomBuilder,
   * the default value is 56vp.
   * When the vertical attribute of tabs is set to true,
   * and no tabBar style is set for the tabs or a custom style is set using CustomBuilder,
   * the default value is the height of the tabs.
   * When the vertical attribute of tabs is set to false, and tabBar style is SubTabBarStyle,
   * the default value is 56vp.
   * When the vertical attribute of tabs is set to true, and tabBar style is SubTabBarStyle,
   * the default value is the height of the tabs.
   * When the vertical attribute of tabs is set to false, and tabBar style is BottomTabBarStyle,
   * the default value is 48vp.
   * When the vertical attribute of tabs is set to true, and tabBar style is BottomTabBarStyle,
   * the default value is the height of the tabs.
   *
   * @param { Length | undefined } value - Height of the tab bar. If the set value is less than 0 or
   *     greater than the height of the Tabs component, the default value is used.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barHeight(value: Length | undefined): this;

  /**
   * Sets the height of the tab bar.
   * Default value:
   * When the vertical attribute of tabs is set to false,
   * and no tabBar style is set for the tabs or a custom style is set using CustomBuilder,
   * the default value is 56vp.
   * When the vertical attribute of tabs is set to true,
   * and no tabBar style is set for the tabs or a custom style is set using CustomBuilder,
   * the default value is the height of the tabs.
   * When the vertical attribute of tabs is set to false, and tabBar style is SubTabBarStyle,
   * the default value is 56vp.
   * When the vertical attribute of tabs is set to true, and tabBar style is SubTabBarStyle,
   * the default value is the height of the tabs.
   * When the vertical attribute of tabs is set to false, and tabBar style is BottomTabBarStyle,
   * the default value is 48vp.
   * When the vertical attribute of tabs is set to true, and tabBar style is BottomTabBarStyle,
   * the default value is the height of the tabs.
   *
   * @param { Length | undefined } value - Height of the tab bar. If the set value is less than 0 or
   *     greater than the height of the Tabs component, the default value is used.
   *     undefined means setting default value.
   * @param { boolean | undefined } noMinHeightLimit - Whether remove the minimum height restriction of the Bar,
   *     When the height is set to 'auto'. Default value is true.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barHeight(value: Length | undefined, noMinHeightLimit: boolean| undefined): this;

  /**
   * Sets the animation curve
   *
   * @param { Curve | ICurve| undefined } curve - animation curve for tabs switch animation,
   *     Curve is an enumeration type for common curves, ICurve is a curve object.
   *     Default value:
   *     When pages are turned by swiping in TabContent, the default value is
   *     interpolatingSpring(-1, 1, 228, 30).
   *     When pages are turned by tapping tabs or calling the changeIndex API of TabsController,
   *     the default value is cubicBezierCurve(0.2, 0.0, 0.1, 1.0).
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationCurve(curve: Curve | ICurve| undefined): this;

  /**
   * Sets the length of time required to complete the tab switching animation,
   * which is initiated by clicking a specific tab or by calling the changeIndex API of TabsController.
   *
   * @param { int | undefined } value
   *     When setting the tabBar to BottomTabBarStyle, the default value is 0.
   *     When setting the tabBar to other styles, the default value is 300.
   *     undefined means setting to default value.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationDuration(value: int | undefined): this;

  /**
   * Sets the animation mode for tab switching initiated by clicking a specific tab or
   * by calling the changeIndex API of TabsController.
   *
   * @param { AnimationMode | undefined } mode - animation mode for tabs switch animation.
   *     Default value is AnimationMode.CONTENT_FIRST.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default animationMode(mode: AnimationMode | undefined): this;

  /**
   * Sets the edge effect used when the boundary of the scrolling area is reached.
   *
   * @param { EdgeEffect | undefined } edgeEffect - Effect used when the boundary of the scrolling area is reached.
   *     Default value is EdgeEffect.Spring.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default edgeEffect(edgeEffect: EdgeEffect | undefined): this;

  /**
   * Triggered when a tab is switched.
   * Anonymous Object Rectification
   *
   * <p><strong>NOTE</strong>:
   * <br>This event is triggered when any of the following conditions is met:
   * 1. The swiping animation is completed, followed by tab switching.
   * 2. The Controller API is called.
   * 3. The attribute value is updated using a state variable.
   * 4. A tab is clicked.
   * </p>
   *
   * @param { Callback<int> | undefined } event
   *     undefined means unbinding callback.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(event: Callback<int> | undefined): this;

  /**
   * Called when a new tab becomes selected. Animation is not necessarily complete.
   *
   * @param { Callback<int> | undefined } event - callback to notify which index has been selected
   *     undefined means unbinding callback.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelected(event: Callback<int> | undefined): this;

  /**
   * Triggered when a tab is clicked.
   * Anonymous Object Rectification
   *
   * @param { Callback<int> | undefined } event
   *     undefined means unbinding callback.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTabBarClick(event: Callback<int> | undefined): this;

  /**
   * Called when a new tab becomes unselected. Animation is not necessarily complete.
   *
   * @param { Callback<int> | undefined } event - callback to notify which index has been unselected
   *     undefined means unbinding callback.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onUnselected(event: Callback<int> | undefined): this;

  /**
   * Triggered when the tab switching animation starts.
   * Anonymous Object Rectification
   *
   * @param { OnTabsAnimationStartCallback | undefined } handler
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationStart(handler: OnTabsAnimationStartCallback | undefined): this;

  /**
   * Triggered when the tab switching animation ends.
   * Anonymous Object Rectification
   *
   * @param { OnTabsAnimationEndCallback | undefined } handler
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationEnd(handler: OnTabsAnimationEndCallback | undefined): this;

  /**
   * Triggered on a frame-by-frame basis when the tab is switched by a swipe.
   * Anonymous Object Rectification
   *
   * @param { OnTabsGestureSwipeCallback | undefined } handler
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onGestureSwipe(handler: OnTabsGestureSwipeCallback | undefined): this;

  /**
   * Sets whether the tab fades out when it exceeds the container width.
   *
   * <p><strong>NOTE</strong>:
   * <br>It is recommended that this attribute be used together with the barBackgroundColor attribute.
   * If the barBackgroundColor attribute is not defined, the tab fades out in white
   * when it exceeds the container width by default.
   * </p>
   *
   * @param { boolean | undefined } value - Whether the tab fades out when it exceeds the container width.
   *     Default value is true.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fadingEdge(value: boolean | undefined): this;

  /**
   * Set the divider between tab bar and tab content.
   *
   * @param { DividerStyle | null | undefined } value - indicates the style of the indicator. Default value is null.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: DividerStyle | null | undefined): this;

  /**
   * Sets the nested scrolling mode of the tabs component and its parent container.
   *
   * @param { TabsNestedScrollMode | undefined } value - mode for nested scrolling.
   *     Default value is TabsNestedScrollMode.SELF_ONLY. Undefined means default value.
   * @returns { TabsAttribute } -the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default nestedScroll(value: TabsNestedScrollMode | undefined): this;

  /**
   * Sets whether the tab bar is superimposed on the TabContent component after having its background blurred.
   *
   * @param { boolean | undefined } value - indicates whether the tab bar overlaps with the tab content.
   *     Default value is false.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barOverlap(value: boolean | undefined): this;

  /**
   * Set the background color of the tab bar.
   *
   * @param { ResourceColor | undefined } value - indicates the background color of the tab bar.
   *     Default value is Color.Transparent.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundColor(value: ResourceColor | undefined): this;

  /**
   * Sets the visible area of the tab bar in grid mode.
   *
   * <p><strong>NOTE</strong>:
   * <br>This attribute is effective only in horizontal mode. It is not applicable to XS, XL, and XXL devices.
   * </p>
   *
   * @param { BarGridColumnOptions | undefined } value - indicates the bar grid alignment options.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barGridAlign(value: BarGridColumnOptions | undefined): this;

  /**
   * Custom tab content transition animation.
   * When undefined is set, this interface does not take effect.
   * Anonymous Object Rectification
   *
   * <p><strong>NOTE</strong>:
   * <br>Instructions:
   * <br>1. When the custom tab switching animation is used, the default switching animation of
   * the Tabs component is disabled, and tabs cannot be switched through swiping.
   * <br>2. The value undefined means not to use the custom tab switching animation,
   * in which case the default switching animation is used.
   * <br>3. The custom tab switching animation cannot be interrupted.
   * <br>4. Currently, the custom tab switching animation can be triggered only by clicking a tab
   * or by calling the TabsController.changeIndex() API.
   * <br>5. When the custom tab switching animation is used,
   * the Tabs component supports all events except onGestureSwipe.
   * <br>6. Notes about the onChange and onAnimationEnd events: If the second custom animation is triggered
   * during the execution of the first custom animation, the onChange and onAnimationEnd events of
   * the first custom animation will be triggered when the second custom animation starts.
   * <br>7. When the custom animation is used, the stack layout is used for pages involved in the animation.
   * If the zIndex attribute is not set for related pages, the zIndex values of all pages are the same.
   * In this case, the pages are rendered in the order in which they are added to
   * the component tree(that is, the sequence of page indexes). In light of this,
   * to control the rendering levels of pages, set the zIndex attribute of the pages.
   * </p>
   *
   * @param { TabsCustomContentTransitionCallback | undefined } delegate - Custom content transition animation.
   * @returns { TabsAttribute } The attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customContentTransition(delegate: TabsCustomContentTransitionCallback | undefined): this;

  /**
   * Sets the background blur style of the tab bar.
   *
   * @param { BlurStyle | undefined } value - Background blur style of the tab bar. Default value is BlurStyle.NONE.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundBlurStyle(value: BlurStyle | undefined): this;

  /**
   * Setting page flip mode on mouse wheel event.
   *
   * @param { PageFlipMode | undefined } mode - page flip mode on mouse wheel event.
   *     The default value is PageFlipMode.CONTINUOUS.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pageFlipMode(mode: PageFlipMode | undefined): this;

  /**
   * Set the BlurStyle of the tab bar.
   *
   * @param { BlurStyle | undefined } style - style indicate the blur style for the tab bar
   * @param { BackgroundBlurStyleOptions | undefined } options - options indicate the options for the tab bar
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundBlurStyle(style: BlurStyle | undefined, options: BackgroundBlurStyleOptions | undefined): this;

  /**
   * Set the BackgroundEffect of the tab bar.
   *
   * @param { BackgroundEffectOptions | undefined } options - options indicate the options for the tab bar
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barBackgroundEffect(options: BackgroundEffectOptions | undefined): this;

  /**
   * Triggered when a new page is about to be displayed.
   * Anonymous Object Rectification
   *
   * <p><strong>NOTE</strong>:
   * <br>This event is triggered when any of the following conditions is met:
   * 1. When the user swipes on the TabContent component (provided that it supports swiping) to switch to a new page.
   * 2. When TabsController.changeIndex is called to switch to a new page.
   * 3. When the **index** attribute is changed to switch to a new page.
   * 4. When the user clicks a tab on the tab bar to switch to a new page.
   * 5. When the user presses the left or right arrow key on the keyboard to switch to a new page
   * while the tab bar is focused.
   * </p>
   *
   * @param { OnTabsContentWillChangeCallback | undefined } handler
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentWillChange(handler: OnTabsContentWillChangeCallback | undefined): this;

  /**
   * Sets the maximum number of child components to be cached.
   *
   * @param { int | undefined } count - the maximum number of child components to be cached, default to 0.
   * @param { TabsCacheMode | undefined } mode - the mode of caching child components,
   *     default to TabsCacheMode.CACHE_BOTH_SIDE.
   *     undefined means setting to default value.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedMaxCount(count: int | undefined, mode: TabsCacheMode | undefined): this;

  /**
   * Sets the attribute modifier to Tabs.
   *
   * @param { AttributeModifier<TabsAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
   *     the input modifier.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TabsAttribute> |
        AttributeModifier<CommonMethod> | undefined): this;

  /**
   * Triggered when scrolling content within the Tabs component.
   *
   * <p><strong>NOTE</strong>:
   * <br>During page scrolling, the OnTabsContentDidScrollCallback callback is invoked for all pages in the viewport
   * on a frame-by-frame basis.
   * </p>
   *
   * @param { OnTabsContentDidScrollCallback | undefined } handler - callback of tabs,
   *     selectedIndex is the index value of the Tabs content selected before animation start.
   *     index is the index value of the Tabs content.
   *     position is the moving ratio of the Tabs content from the start position of the Tabs main axis.
   *     mainAxisLength is the Tabs main axis length for calculating position.
   *     undefined means unbinding callback.
   * @returns { this } - the attribute of the Tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined): this;

  /**
   * Set tabs options.
   *
   * @param { TabsOptions } [options] - tabs options
   * @returns { TabsAttribute } Returns the instance of the TabsAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setTabsOptions(options?: TabsOptions): this;

  /**
   * Enable floating style for bar.
   *
   * @param { FloatingTabBarStyle | undefined } style - floating style for bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default barFloatingStyle(style: FloatingTabBarStyle | undefined): this;
}

/**
 * Defines the Tab Content animated transition options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabContentAnimatedTransition {

  /**
   * Defines the timeout of custom content transition animation. The unit is ms.
   * If TabContentTransitionProxy.finishTransition() is not invoked, use the timeout as animation end time.
   * Unit: ms, The value must be an integer greater than or equal to 0. Default value: 1000.
   *
   * @default 1000 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  timeout?: int;

  /**
   * Called when custom content transition animation start.
   * Anonymous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transition: Callback<TabContentTransitionProxy>;
}

/**
 * The proxy of TabContentAnimatedTransition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabContentTransitionProxy {

  /**
   * The index of current tab content.
   * The value range is all integers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  from: int;

  /**
   * The index of target tab content.
   * The value range is all integers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  to: int;

  /**
   * Notifies Tabs component the custom content transition animation is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  finishTransition(): void;
}

/**
 * Defines Tabs Component
 *
 * @param { TabsOptions } [options] - tabs constructor options
 * @param { CustomBuilder } [content_] - container
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
 * Defines Tabs Component
 *
 * @param { CustomBuilderT<TabsAttribute> } style_ - tabs attribute instance
 * @param { CustomBuilder } [content_] - container
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