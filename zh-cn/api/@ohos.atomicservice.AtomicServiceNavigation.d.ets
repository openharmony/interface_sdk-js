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
 * 可以包含子组件。
 * 
 * 从API version 10开始，推荐使用[NavPathStack]{@link NavPathStack}进行页面路由。
 *
 * @file This section describes the interfaces used by AtomicServiceNavigation
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * 背景色颜色混合模式的可选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum MixMode {
  /**
   * 两种颜色各占一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  AVERAGE = 1,
  /**
   * 一种颜色从另一种颜色中穿过。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  CROSS = 2,
  /**
   * 一种颜色渐变为另一种颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  TOWARDS = 3
}

/**
 * 导航栏背景底色不透明度的可选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum GradientAlpha {
  /**
   * 不透明度为0.2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_20 = 1,
  /**
   * 不透明度为0.6。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_60 = 2,
  /**
   * 不透明度为0.8。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_80 = 3,
  /**
   * 不透明度为1.0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_100 = 4
}

/**
 * 导航栏背景色底色的可选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum BackgroundTheme {
  /**
   * 背景底色为黑色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DARK = 1,
  /**
   * 背景底色为白色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  LIGHT = 2,
  /**
   * 背景底色为灰白色。颜色值`#F1F3F5` 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DEFAULT = 3
}

/**
 * 作为Page页面的根容器使用，其内部默认包含了标题栏、内容区，其中内容区默认首页显示导航内容或非首页显示（
 * [NavDestination]{@link ./@internal/component/ets/nav_destination}的子组件），首页和非首页通过路由进行切换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Component
export declare struct AtomicServiceNavigation {
  /**
   * the information of route page.Providers methods for controlling destination page in the stack.
   *
   * @type { ?NavPathStack }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @State
  navPathStack?: NavPathStack;
  /**
   * the content of Navigation.
   *
   * @type { ?Callback<void> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @BuilderParam
  navigationContent?: Callback<void>;
  /**
   * Sets the Navigation title.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  title?: ResourceStr;
  /**
   * The color of Navigation's TitleBar.
   *
   * @type { ?TitleOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  titleOptions?: TitleOptions;
  /**
   * 设置导航栏渐变色背景，作用区域包含标题栏和内容栏。
   * @type { ?GradientBackground }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop
  gradientBackground?: GradientBackground;
  /**
   * Hide navigation title bar.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  hideTitleBar?: boolean;
  /**
   * Sets the width of navigation bar.
   *
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  navBarWidth?: Length;
  /**
   * Sets the mode of navigation.
   *
   * @type { ?NavigationMode }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  mode?: NavigationMode;
  /**
   * The builder of navDestination.
   *
   * @type { ?NavDestinationBuilder }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @BuilderParam
  navDestinationBuilder?: NavDestinationBuilder;
  /**
   * Sets the minimum width and the maximum width of navigation bar.
   *
   * @type { ?[Dimension, Dimension] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  navBarWidthRange?: [
    Dimension,
    Dimension
  ];
  /**
   * Sets the minimum width of content.
   *
   * @type { ?Dimension }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  minContentWidth?: Dimension;
  /**
   * Trigger callback when the visibility of navigation bar change.
   *
   * @type { ?Callback<boolean> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  stateChangeCallback?: Callback<boolean>;
  /**
   * Trigger callback when navigation mode changes.
   *
   * @type { ?Callback<NavigationMode> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  modeChangeCallback?: Callback<NavigationMode>;
  /**
   * The layout style users defined and inserted.
   *
   * @type { ?(CustomBuilder | Array<NavigationMenuItem>) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @BuilderParam
  menus?: CustomBuilder | Array<NavigationMenuItem>;
  /**
   * Set side bar options.
   *
   * @type { ?SideBarOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop
  sideBarOptions?: SideBarOptions;
  /**
   * Set side bar content.
   *
   * @type { ?Callback<void> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam
  sideBarContent?: Callback<void>;
}

/**
 * 标题栏选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export interface TitleOptions {
  /**
   * Background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backgroundColor?: ResourceColor;

  /**
   * Whether to enable the blur effect.
   *
   * @type { ?boolean }.
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  isBlurEnabled?: boolean;

  /**
   * Set title bar style.
   *
   * @type { ?BarStyle }
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  barStyle?: BarStyle;

  /**
   * Set title bar type.
   *
   * @type { ?TitleBarType }
   * @default TitleBarType.ROUND_ICON
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  titleBarType?: TitleBarType;

  /**
   * Set title bar icon.
   *
   * @type { ?(Resource | SymbolGlyphModifier) }
   * @default atomicservice icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  titleIcon?: Resource | SymbolGlyphModifier;
}

/**
 * 供开发者设置品牌渐变色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface GradientBackground {
  /**
   * the primaryColor of Background.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  primaryColor: ResourceColor;

  /**
   * the secondaryColor of Background.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryColor?: ResourceColor;

  /**
   * the theme color of Background.
   *
   * @type { ?BackgroundTheme }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundTheme?: BackgroundTheme;

  /**
   * the blend mode of background color.
   *
   * @type { ?MixMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  mixMode?: MixMode;

  /**
   * the opacity of background colors.
   *
   * @type { ?GradientAlpha }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  alpha?: GradientAlpha;
}

/**
 * 侧边栏的功能选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SideBarOptions {
  /**
   * Side bar Background.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  sideBarBackground?: ResourceColor;

  /**
   * Side bar status change callback.
   *
   * @type { ?Callback<boolean> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onChange?: Callback<boolean>;

  /**
   * Side bar icon.
   *
   * @type { ?(Resource | SymbolGlyphModifier) }.
   * @default $r('sys.symbol.open_sidebar')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  sideBarIcon?: Resource | SymbolGlyphModifier;
}

/**
 * 标题栏类型的可选项，默认值为ROUND_ICON。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum TitleBarType {
  /**
   * 方形图标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  SQUARED_ICON = 1,

  /**
   * 圆形图标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  ROUND_ICON = 2,

  /**
   * 抽屉样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DRAWER = 3
}

/**
 * NavDestination组件内容。
 *
 * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
 * @param { Object } [param] - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。默认值为空。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type NavDestinationBuilder = (name: string, param?: Object) => void;