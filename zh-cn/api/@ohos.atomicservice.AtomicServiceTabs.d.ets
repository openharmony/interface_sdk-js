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
 * 无。
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * @file Provides an advanced struct of tabs for atomic services
 * @kit ArkUI
 */

/**
 * AtomicServiceTabs高级组件，对Tabs组件中不需要暴露给用户进行自定义的属性进行简化，限制最多显示5个页签，固定页签的样式、位置和大小。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Component
export declare struct AtomicServiceTabs {
  /**
   * 内容视图容器数组，最多支持5个页签，默认值为空。
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
   * 页签选项数组，最多支持5个页签。
   *
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
   * 设置页签栏位置，默认值为TabBarPosition.BOTTOM。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  tabBarPosition?: TabBarPosition;
  /**
   * 设置底部页签的图片、文字排布的方式，默认值为LayoutMode.VERTICAL。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  layoutMode?: LayoutMode;
  /**
   * 设置TabBar的背景颜色，默认值为透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  barBackgroundColor?: ResourceColor;
  /**
   * 设置当前显示页签的索引，索引值从0开始，取值范围为[0, 页签数-1]，最大不超过4。默认值为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  index?: number;
  /**
   * 设置TabBar是否背景变模糊并叠加在TabContent之上。
   * true表示TabBar背景变模糊并叠加在TabContent之上，false表示TabBar背景不变模糊且不叠加在TabContent之上。默认值为true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  barOverlap?: boolean;
  /**
   * Tabs组件的控制器，用于控制页签切换。默认值为new TabsController()。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  controller?: TabsController;
  /**
   * Tabs页签切换后触发的事件，回调参数为切换后的页签索引，索引值从0开始。
   * 当onContentWillChange回调返回false拦截页面切换时，该事件不会被触发。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onChange?: Callback<number>;
  /**
   * Tabs页签点击后触发的事件，回调参数为被点击页签的索引值，索引值从0开始。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onTabBarClick?: Callback<number>;
  /**
   * Tabs页面切换拦截事件，新页面即将显示时触发该回调。当回调返回false拦截页面切换时，onChange事件不会被触发。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onContentWillChange?: OnContentWillChangeCallback;
}

/**
 * 页签选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class TabBarOptions {
  /**
   * TabBarOptions的构造函数。
   *
   * @param { (ResourceStr | TabBarSymbol) } icon - 页签内的图标内容。
   * @param { ResourceStr } text - 页签内的文字内容。
   * @param { ResourceColor } [unselectedColor] - 未选择时的页签颜色，默认值为#99182431。
   * @param { ResourceColor } [selectedColor] - 已选择时的页签颜色，默认值为#FF007DFF。
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
 * 内容视图构建器，用于构建TabContent页签内容的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type TabContentBuilder = () => void;

/**
 * 页面内容即将发生变化时触发的回调函数，用于拦截页面切换，开发者可通过返回值控制是否允许切换。
 *
 * @param { number } currentIndex - 当前页签索引。
 * @param { number } comingIndex - 即将切换的页签索引。
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;