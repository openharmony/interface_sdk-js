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
 * ###### 子组件
 * 
 * 无
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}
 *
 * @file Provides an advanced struct of tabs for atomic services
 * @kit ArkUI
 */

/**
 * AtomicServiceTabs高级组件，对Tabs组件一些不需提供给用户自定义设计的属性进行简化，限制最多显示5个页签，固定页签样式，位置和大小。
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
   * @since 18 dynamic
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
 * 页签容器数组。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class TabBarOptions {
  /**
   * TabBarOptions的构造函数。
   *
   * @param { (ResourceStr | TabBarSymbol) } icon - 页签内的图片内容。
   * @param { ResourceStr } text - 页签内的文字内容。
   * @param { ResourceColor } [unselectedColor] - 未选择时的页签颜色，默认值：#99182431。
   * @param { ResourceColor } [selectedColor] - 被选择时的页签颜色，默认值：#FF007DFF。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor);
}

/**
 * 设置页签栏位置，默认值为TabBarPosition.BOTTOM。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum TabBarPosition {

  /**
   * 设置TabBar位于屏幕左侧
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  LEFT = 0,

  /**
   * 设置TabBar位于屏幕底部
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  BOTTOM = 1
}

/**
 * 内容视图容器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type TabContentBuilder = () => void;

/**
 * 页面内容发生变化时触发的回调函数。
 *
 * @param { number } currentIndex - 当前页签索引。
 * @param { number } comingIndex - 即将切换的页签索引。
 * @returns { boolean }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;