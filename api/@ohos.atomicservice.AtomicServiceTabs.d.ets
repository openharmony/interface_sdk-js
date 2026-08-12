/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * ###### Child Components
 * 
 * Not supported
 * 
 * ###### Attributes
 * 
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file Provides an advanced struct of tabs for atomic services
 * @kit ArkUI
 */

/**
 * **AtomicServiceTabs** is an advanced component designed to streamline the use of the **Tabs** component by limiting
 * customization options. It restricts the display to a maximum of five tabs, with fixed styles, positions, and sizes
 * for the tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Component
export declare struct AtomicServiceTabs {
  /**
   * The TabContent array of tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @BuilderParam
  tabContents?: [ 
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?
  ];
  /**
   * The tabBar array of tabs.
   *
   * @type { [TabBarOptions, TabBarOptions, TabBarOptions?, TabBarOptions?, TabBarOptions?] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  tabBarOptionsArray: [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?
  ];
  /**
   * set the positions of tabbar.
   *
   * @type { ?TabBarPosition }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  tabBarPosition?: TabBarPosition;
  /**
   * Sets the layout mode of the bottom tab bar
   *
   * @type { ?LayoutMode }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  layoutMode?: LayoutMode;
  /**
   * Sets the barBackgroundColor of tabs.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  barBackgroundColor?: ResourceColor;
  /**
   * Sets the index of tabs.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  index?: number;
  /**
   * set if need overlap, default value is true.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  barOverlap?: boolean;
  /**
   * Provide methods for switching tabs.
   *
   * @type { ?TabsController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  controller?: TabsController;
  /**
   * onChange callback of tabs when tabs changed.
   *
   * @type { ?Callback<number> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onChange?: Callback<number>;
  /**
   * onTabBarClick callback of tabs when tabbar is clicked.
   *
   * @type { ?Callback<number> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onTabBarClick?: Callback<number>;
  /**
   * onContentWillChange callback of tabs when tabbar is clicked.
   *
   * @type { ?OnContentWillChangeCallback }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onContentWillChange?: OnContentWillChangeCallback;
}

/**
 * Array of tab bar container configurations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class TabBarOptions {
  /**
   * A constructor used to create a **TabBarOptions** instance.
   *
   * @param { (ResourceStr | TabBarSymbol) } icon - Image for the tab.
   * @param { ResourceStr } text - Text of the tab.
   * @param { ResourceColor } [unselectedColor] - Color of the tab when it is not selected.
   *     <br>Default value: **#99182431**
   * @param { ResourceColor } [selectedColor] - Color of the tab when it is selected.
   *     <br>Default value: **#FF007DFF**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor);
}

/**
 * Position of the tab bar. The default value is **TabBarPosition.BOTTOM**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum TabBarPosition {

  /**
   * The tab bar is on the left side of the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  LEFT = 0,

  /**
   * The tab bar is at the bottom of the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  BOTTOM = 1
}

/**
 * Defines the content view container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type TabContentBuilder = () => void;

/**
 * Defines the callback function triggered when the page content changes.
 *
 * @param { number } currentIndex - Index of the current tab.
 * @param { number } comingIndex - Index of the tab to be switched to.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;