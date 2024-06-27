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
 * @file
 * @kit ArkUI
 */

/// <reference path="../component/units.d.ts" />

import { ResourceStr, Resource } from 'GlobalResource';

/**
 * Defines AtomicServiceTabs.
 *
 * @struct AtomicServiceTabs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
@Component
export declare struct AtomicServiceTabs {
  /**
   * The TabContent array of tabs.
   *
   * @type { ?[?TabContentBuilder, ?TabContentBuilder, ?TabContentBuilder, ?TabContentBuilder, ?TabContentBuilder] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @BuilderParam
  tabContents?: [
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
  ];
  /**
   * The tabBar array of tabs.
   *
   * @type { [TabBarOption, TabBarOption, ?TabBarOption, ?TabBarOption, ?TabBarOption] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  tabBarOptionsArray: [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?,
  ];
  /**
   * set the positions of tabbar.
   *
   * @type { ?TabBarPosition }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  tabBarPosition?: TabBarPosition;
  /**
   * Sets the barBackgroundColor of tabs.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  barBackgroundColor?: ResourceColor;
  /**
   * Sets the index of tabs.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  index?: number;
  /**
   * set if need overlap, default value is true.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  barOverlap?: boolean;
  /**
   * Provide methods for switching tabs.
   *
   * @type { ?TabsController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  controller?: TabsController;
  /**
   * onChange callback of tabs when tabs changed.
   *
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onChange?: (index: number) => void;
  /**
   * onTabBarClick callback of tabs when tabbar is clicked.
   *
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onTabBarClick?: (index: number) => void;
  /**
   * onContentWillChange callback of tabs when tabbar is clicked.
   *
   * @type { ?(currentIndex: number, comingIndex: number) => boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onContentWillChange?: (currentIndex: number, comingIndex: number) => boolean;
}

/**
 * the class for TabBarOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare class TabBarOptions {
  /**
   * constructor to init the tabbar.incluing icon, text, unselectedColor and selectedColor.
   *
   * @param { ResourceStr | TabBarSymbol } - icon, cannot be empty
   * @param { ResourceStr } - text of tabar, cannot be empty
   * @param { ?ResourceColor } - the color of icon and text when tabbar is unselected
   * @param { ?ResourceColor } - the color of icon and text when tabbar is selected
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   **/
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor);
}

/**
 * the enum for TabBarOption.
 *
 * @enum { TabBarPosition }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum TabBarPosition {

  /**
   * when the TabBarPosition set left,the tabs is located on the left of the tabs
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  LEFT = 0,

  /**
   * when the TabBarPosition set bottom,the tabs is located on the bottom of the tabs
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  BOTTOM = 1,
}

/**
 * CustomBuilder for tabContent
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export type TabContentBuilder = () => void;