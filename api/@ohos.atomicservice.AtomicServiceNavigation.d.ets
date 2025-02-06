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
 * @file This section describes the interfaces used by AtomicServiceNavigation
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';
/**
 * the enum for the blend mode of background color .
 *
 * @enum { number }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export declare enum MixMode {
  /**
   * when the MixMode set AVERAGE,the mixing method for background colors is that the two colors have equal
   * proportions .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  AVERAGE = 1,
  /**
   * when the MixMode set CROSS,the color mixing method for the background is a transition where one color crosses
   * through to another .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  CROSS = 2,
  /**
   * when the MixMode set TOWARDS,the color mixing method for the background is a transition from one color to another .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  TOWARDS = 3
}
/**
 * the enum for the opacity  of the background color .
 *
 * @enum { number }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export declare enum GradientAlpha {
  /**
   * when the GradientAlpha set LEVEL1,the opacity of background colors is 0.2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
LEVEL1 = 1,
  /**
   * when the GradientAlpha set LEVEL2,the opacity of background colors is 0.6
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  LEVEL2 = 2,
  /**
   * when the GradientAlpha set LEVEL3,the opacity of background colors is 0.8
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  LEVEL3 = 3,
  /**
   * when the GradientAlpha set LEVEL4,the opacity of background colors is 1.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  LEVEL4 = 4
}
/**
 * the theme of the background color .
 *
 * @enum { number }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export declare enum BackgroundTheme {
  /**
   * when the BackgroundTheme set DARK,the basic color of background is dark
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  DARK = 1,
  /**
   * when the BackgroundTheme set LIGHT,the basic color of background  is white
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  LIGHT = 2,
  /**
   * when the BackgroundTheme set DEFAULT,the basic color of background  is F1F3F5
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  DEFAULT = 3
}
/**
 * Defines AtomicServiceNavigation.
 *
 * @struct AtomicServiceNavigation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
@Component
export declare struct AtomicServiceNavigation {
  /**
   * the information of route page.Providers methods for controlling destination page in the stack.
   *
   * @type { ?NavPathStack }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @State
  navPathStack?: NavPathStack;
  /**
   * the content of Navigation.
   *
   * @type { ?Callback<void> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @BuilderParam
  navigationContent?: Callback<void>;
  /**
   * Sets the Navigation title.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  title?: ResourceStr;
  /**
   * The color of Navigation's TitleBar.
   *
   * @type { ?TitleOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  titleOptions?: TitleOptions;
  /**
   * The background with gradient colors of Navigation .
   *
   * @type { ?gradientBackground }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  gradientBackground?: gradientBackground;  
  /**
   * Hide navigation title bar.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  hideTitleBar?: boolean;
  /**
   * Sets the width of navigation bar.
   *
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  navBarWidth?: Length;
  /**
   * Sets the mode of navigation.
   *
   * @type { ?NavigationMode }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @Prop
  mode?: NavigationMode;
  /**
   * The builder of navDestination.
   *
   * @type { ?NavDestinationBuilder }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  @BuilderParam
  navDestinationBuilder?: NavDestinationBuilder;
  /**
   * Sets the minimum width and the maximum width of navigation bar.
   *
   * @type { ?[Dimension, Dimension] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
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
   * @since 12
   */
  @Prop
  minContentWidth?: Dimension;
  /**
   * Trigger callback when the visibility of navigation bar change.
   *
   * @type { ?Callback<boolean> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  stateChangeCallback?: Callback<boolean>;
  /**
   * Trigger callback when navigation mode changes.
   *
   * @type { ?Callback<NavigationMode> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  modeChangeCallback?: Callback<NavigationMode>;
}

/**
 * Indicates the options of Navigation's Titlebar.
 *
 * @typedef TitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export interface TitleOptions {
  /**
   * Background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ResourceColor;

  /**
   * Whether to enable the blur effect.
   *
   * @type { ?boolean }.
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  isBlurEnabled?: boolean;

  /**
   * Set title bar style.
   *
   * @type { ?BarStyle }
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  barStyle?: BarStyle;
}

/**
 * Indicates the options of Navigation's gradientBackground.
 *
 * @typedef gradientBackground
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface gradientBackground {
  /**
   * the primaryColor of Background .
   *
   * @type { ResourceColor}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  primaryColor: ResourceColor,

  /**
   * the secondColor of Background .
   *
   * @type { ?ResourceColor}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  secondColor?: ResourceColor,

  /**
   * the theme color of Background .
   *
   * @type { ?BackgroundTheme}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  backgroundTheme?: BackgroundTheme;

  /**
   * the blend mode of background color .
   *
   * @type { ?MixMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
   * @since 16
   */
  mixMode?: MixMode,

  /**
   * the opacity of background colors .
   *
   * @type { ?GradientAlpha }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  alpha?: GradientAlpha
}

/**
 * The builder function of NavDestination component.
 *
 * @typedef { function } NavDestinationBuilder.
 * @param { string } name - The name of route page.
 * @param { ?Object } - param - The detailed parameter of the route page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export type NavDestinationBuilder = (name: string, param?: Object) => void;