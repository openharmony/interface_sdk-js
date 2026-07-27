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
 * Supported
 * 
 * Since API version 10, you are advised to use [NavPathStack]{@link NavPathStack} for page routing.
 *
 * @file This section describes the interfaces used by AtomicServiceNavigation
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * Provides options for background color blending modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum MixMode {
  /**
   * Both colors are evenly mixed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  AVERAGE = 1,
  /**
   * One color passes through the other.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  CROSS = 2,
  /**
   * One color gradually blends into the other.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  TOWARDS = 3
}

/**
 * Enumerates the opacity levels of the navigation bar background.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum GradientAlpha {
  /**
   * 0.2 opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_20 = 1,
  /**
   * 0.6 opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_60 = 2,
  /**
   * 0.8 opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_80 = 3,
  /**
   * 1.0 opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  OPACITY_100 = 4
}

/**
 * Enumerates the navigation bar background themes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum BackgroundTheme {
  /**
   * Dark theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DARK = 1,
  /**
   * Light theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  LIGHT = 2,
  /**
   * Light gray theme, with the color value of #F1F3F5.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DEFAULT = 3
}

/**
 * **AtomicServiceNavigation** is a component that serves as the root container of a page. By default, it includes a
 * title bar, content area, and toolbar. The content area switches between the home page content (child components of
 * [NavDestination]{@link ./@internal/component/ets/nav_destination}) and non-home page content through routing.
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
   * The background with gradient colors of Navigation.
   *
   * @type { ?GradientBackground }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
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
   * @since 18 dynamiconly
   */
  @Prop
  sideBarOptions?: SideBarOptions;
  /**
   * Set side bar content.
   *
   * @type { ?Callback<void> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @BuilderParam
  sideBarContent?: Callback<void>;
}

/**
 * Title bar options.
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
   * @since 18 dynamiconly
   */
  titleBarType?: TitleBarType;

  /**
   * Set title bar icon.
   *
   * @type { ?(Resource | SymbolGlyphModifier) }
   * @default atomicservice icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  titleIcon?: Resource | SymbolGlyphModifier;
}

/**
 * Provides options for setting gradient colors for branding.
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
   * @since 18 dynamiconly
   */
  primaryColor: ResourceColor;

  /**
   * the secondaryColor of Background.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  secondaryColor?: ResourceColor;

  /**
   * the theme color of Background.
   *
   * @type { ?BackgroundTheme }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  backgroundTheme?: BackgroundTheme;

  /**
   * the blend mode of background color.
   *
   * @type { ?MixMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  mixMode?: MixMode;

  /**
   * the opacity of background colors.
   *
   * @type { ?GradientAlpha }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  alpha?: GradientAlpha;
}

/**
 * Defines sidebar options.
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
   * @since 18 dynamiconly
   */
  sideBarBackground?: ResourceColor;

  /**
   * Side bar status change callback.
   *
   * @type { ?Callback<boolean> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onChange?: Callback<boolean>;

  /**
   * Side bar icon.
   *
   * @type { ?(Resource | SymbolGlyphModifier) }.
   * @default $r('sys.symbol.open_sidebar')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  sideBarIcon?: Resource | SymbolGlyphModifier;
}

/**
 * Enumerates the title bar types. The default type is **ROUND_ICON**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export declare enum TitleBarType {
  /**
   * Square icon style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  SQUARED_ICON = 1,

  /**
   * Round icon style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  ROUND_ICON = 2,

  /**
   * Drawer style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  DRAWER = 3
}

/**
 * Defines the content of the **NavDestination** component.
 *
 * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
 * @param { Object } [param] - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
 *     The default value is undefined.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type NavDestinationBuilder = (name: string, param?: Object) => void;