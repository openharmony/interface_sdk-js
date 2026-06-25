
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { ResourceColor } from '@ohos.arkui.component';

import { ResourceColor } from './arkui/component/units';

/**
 * Defines the struct of Theme.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Theme {

  /**
   * Define tokens associated with color resources.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colors: Colors;
}

/**
 * Defines the struct of Colors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Colors {

  /**
   * System brand Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  brand: ResourceColor;

  /**
   * System primary Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  primary?: ResourceColor;

  /**
   * System onPrimary Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPrimary?: ResourceColor;

  /**
   * System container Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  container?: ResourceColor;

  /**
   * System warning Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  warning: ResourceColor;

  /**
   * System alert Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alert: ResourceColor;

  /**
   * System confirm Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  confirm: ResourceColor;

  /**
   * First level text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontPrimary: ResourceColor;

  /**
   * Secondary text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSecondary: ResourceColor;

  /**
   * tertiary text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontTertiary: ResourceColor;

  /**
   * Fourth text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFourth: ResourceColor;

  /**
   * Emphasize text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontEmphasize: ResourceColor;

  /**
   * First level text inversion, used on colored backgrounds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnPrimary: ResourceColor;

  /**
   * Secondary level text inversion, used on colored backgrounds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnSecondary: ResourceColor;

  /**
   * Tertiary level text inversion, used on colored backgrounds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnTertiary: ResourceColor;

  /**
   * Fourth level text inversion, used on colored backgrounds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnFourth: ResourceColor;

  /**
   * First level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconPrimary: ResourceColor;

  /**
   * Secondary level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSecondary: ResourceColor;

  /**
   * Tertiary level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconTertiary: ResourceColor;

  /**
   * Fourth level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconFourth: ResourceColor;

  /**
   * Emphasize level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconEmphasize: ResourceColor;

  /**
   * Secondary emphasize level icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSubEmphasize: ResourceColor;

  /**
   * First level icon reversed, used on a colored background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnPrimary: ResourceColor;

  /**
   * Secondary level icon reversed, used on a colored background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnSecondary: ResourceColor;

  /**
   * Tertiary level icon reversed, used on a colored background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnTertiary: ResourceColor;

  /**
   * Fourth level icon reversed, used on a colored background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnFourth: ResourceColor;

  /**
   * System Primary level background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundPrimary: ResourceColor;

  /**
   * System Secondary level background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSecondary: ResourceColor;

  /**
   * System tertiary level background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundTertiary: ResourceColor;

  /**
   * System fourth level background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundFourth: ResourceColor;

  /**
   * System emphasize level background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEmphasize: ResourceColor;

  /**
   * CompForegroundPrimary color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compForegroundPrimary: ResourceColor;

  /**
   * CompBackgroundPrimary color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimary: ResourceColor;

  /**
   * CompBackgroundPrimaryTran color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimaryTran: ResourceColor;

  /**
   * CompBackgroundPrimaryContrary color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimaryContrary: ResourceColor;

  /**
   * CompBackgroundGray color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundGray: ResourceColor;

  /**
   * 10% black universal control background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundSecondary: ResourceColor;

  /**
   * 5% black universal control background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundTertiary: ResourceColor;

  /**
   * 100% bright brand background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundEmphasize: ResourceColor;

  /**
   * Black neutral high gloss color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundNeutral: ResourceColor;

  /**
   * 20% High gloss brand background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compEmphasizeSecondary: ResourceColor;

  /**
   * 10% High gloss brand background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compEmphasizeTertiary: ResourceColor;

  /**
   * Universal Division Line Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compDivider: ResourceColor;

  /**
   * CompCommonContrary Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compCommonContrary: ResourceColor;

  /**
   * CompBackgroundFocus Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundFocus: ResourceColor;

  /**
   * CompFocusedPrimary Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedPrimary: ResourceColor;

  /**
   * CompFocusedSecondary Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedSecondary: ResourceColor;

  /**
   * CompFocusedTertiary Color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedTertiary: ResourceColor;

  /**
   * Hover interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveHover: ResourceColor;

  /**
   * Pressed interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactivePressed: ResourceColor;

  /**
   * Focus interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveFocus: ResourceColor;

  /**
   * Active interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveActive: ResourceColor;

  /**
   * Select interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveSelect: ResourceColor;

  /**
   * Click interactive color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveClick: ResourceColor;
}

/**
 * Defines the struct of CustomTheme.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomTheme {

  /**
   * Define tokens associated with color resources..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colors?: CustomColors;

  /**
   * Define tokens associated with dark mode color resources.
   *
   * @default If not set darkColors, color value will same as colors under light mode and will not change with color
   *     mode, unless the color is setted by resource in dark directory.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  darkColors?: CustomDarkColors;
}

/**
 * Defines the struct of CustomColors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CustomColors = Partial<Colors>;

/**
 * Defines a struct for custom dark theme colors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type CustomDarkColors = Partial<Colors>;

/**
 * Class ThemeControl provides the Theme management for whole Ability and pages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ThemeControl {

  /**
   * Sets the default Theme:
   *
   * - for whole Ability when invoked from the Ability level code.
   * - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.
   *
   * @param { CustomTheme | undefined } theme
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static setDefaultTheme(theme: CustomTheme | undefined): void;
}