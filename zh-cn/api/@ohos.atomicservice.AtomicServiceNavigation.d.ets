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
 * 背景色混合模式的可选项。
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
 * 渐变色显示区域不透明度的可选项。
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
 * 导航栏背景底色的可选项。
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
 * 作为Page页面的根容器使用，其内部默认包含了标题栏、内容区。其中，内容区在首页默认显示导航内容，在非首页显示
 * [NavDestination]{@link ./@internal/component/ets/nav_destination}的子组件，首页和非首页通过路由进行切换。
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
export declare struct AtomicServiceNavigation {
  /**
   * 路由栈信息。默认值为new NavPathStack()。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @State
  navPathStack?: NavPathStack;
  /**
   * Navigation容器内容。默认值为空，无内容展示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @BuilderParam
  navigationContent?: Callback<void>;
  /**
   * 设置页面标题。默认值为空字符串。当titleOptions的titleBarType字段设置为TitleBarType.ROUND_ICON或者TitleBarType.SQUARED_ICON，
   * 且设置了titleIcon时，title标题内容将不会显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  title?: ResourceStr;
  /**
   * 标题栏选项。默认值为{ isBlurEnabled: true }。当titleBarType字段设置为TitleBarType.ROUND_ICON或者TitleBarType.SQUARED_ICON，
   * 且设置了titleIcon时，title标题内容将不会显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  titleOptions?: TitleOptions;
  /**
   * 渐变背景色选项。设置时各字段的默认值见GradientBackground。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  gradientBackground?: GradientBackground;
  /**
   * 设置是否隐藏标题栏。默认为false。false表示显示标题栏，true表示隐藏标题栏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  hideTitleBar?: boolean;
  /**
   * 设置导航栏宽度。默认值为240vp。仅在Navigation组件分栏时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  navBarWidth?: Length;
  /**
   * 设置导航栏的显示模式。默认值为Auto。支持Stack、Split与Auto模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  mode?: NavigationMode;
  /**
   * 创建NavDestination组件所需要的Builder数据。默认值为空，即无内容展示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @BuilderParam
  navDestinationBuilder?: NavDestinationBuilder;
  /**
   * 设置导航栏最小和最大宽度（双栏模式下生效）。
   * 默认值：最小为240vp，最大为组件宽度的40%，且不大于432vp，如果只设置一个值，则未设置的值按照默认值计算。单位：vp。
   *
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
   * 设置导航栏内容区最小宽度（双栏模式下生效）。默认值为360vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  minContentWidth?: Dimension;
  /**
   * 导航栏显示状态切换时触发该回调。true表示导航栏显示，false表示导航栏隐藏。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  stateChangeCallback?: Callback<boolean>;
  /**
   * 当Navigation首次显示或者单双栏状态发生变化时触发该回调。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  modeChangeCallback?: Callback<NavigationMode>;
  /**
   * 宽屏场景下用户自定义插入的布局样式。默认值为空，不显示任何样式。屏幕宽度低于600vp为非宽屏场景，大于等于600vp为宽屏场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @BuilderParam
  menus?: CustomBuilder | Array<NavigationMenuItem>;
  /**
   * 侧边栏的功能选项。
   * 默认值为{ sideBarBackground: $r('sys.color.ohos_id_color_sub_background'), sideBarIcon: $r('sys.symbol.open_sidebar') }。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  sideBarOptions?: SideBarOptions;
  /**
   * 侧边栏的内容。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
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
   * 标题栏背景颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏是否模糊。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  isBlurEnabled?: boolean;

  /**
   * 设置标题栏样式。
   *
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  barStyle?: BarStyle;

  /**
   * 设置标题栏类型。
   *
   * @default TitleBarType.ROUND_ICON
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  titleBarType?: TitleBarType;

  /**
   * 设置标题栏的图标。
   *
   * @default atomicservice icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  titleIcon?: Resource | SymbolGlyphModifier;
}

/**
 * 品牌渐变色选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface GradientBackground {
  /**
   * 单色渐变色彩值和双色渐变第一色彩值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  primaryColor: ResourceColor;

  /**
   * 双色渐变色第二色彩值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  secondaryColor?: ResourceColor;

  /**
   * 导航栏背景底色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  backgroundTheme?: BackgroundTheme;

  /**
   * 同时设置primaryColor和secondaryColor时此参数生效。表示双色渐变下两种颜色的融合方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  mixMode?: MixMode;

  /**
   * 设置渐变色显示区域的不透明度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
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
   * 设置侧边栏的背景颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  sideBarBackground?: ResourceColor;

  /**
   * 侧边栏显示隐藏回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onChange?: Callback<boolean>;

  /**
   * 侧边栏的展开图标。
   *
   * @default $r('sys.symbol.open_sidebar')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
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
 * 用于创建NavDestination组件内容的构建器类型。
 *
 * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
 * @param { Object } [param] - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。默认值为空。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type NavDestinationBuilder = (name: string, param?: Object) => void;