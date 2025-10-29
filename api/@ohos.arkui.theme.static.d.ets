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
/**
 * Defines the struct of Theme.
 *
 * @interface Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export declare interface Theme {
    /**
    *  Define tokens associated with color resources.
    *
    * @type { Colors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    colors: Colors;
}
/**
 * Defines the struct of Colors.
 *
 * @interface Colors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export declare interface Colors {
    /**
    * System brand Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    brand: ResourceColor;
    /**
    * System warning Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    warning: ResourceColor;
    /**
    * System alert Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    alert: ResourceColor;
    /**
    * System confirm Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    confirm: ResourceColor;
    /**
    * First level text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontPrimary: ResourceColor;
    /**
    * Secondary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontSecondary: ResourceColor;
    /**
    * tertiary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontTertiary: ResourceColor;
    /**
    * Fourth text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontFourth: ResourceColor;
    /**
    * Emphasize text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontEmphasize: ResourceColor;
    /**
    * First level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontOnPrimary: ResourceColor;
    /**
    * Secondary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontOnSecondary: ResourceColor;
    /**
    * Tertiary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontOnTertiary: ResourceColor;
    /**
    * Fourth level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    fontOnFourth: ResourceColor;
    /**
    * First level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconPrimary: ResourceColor;
    /**
    * Secondary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconSecondary: ResourceColor;
    /**
    * Tertiary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconTertiary: ResourceColor;
    /**
    * Fourth level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconFourth: ResourceColor;
    /**
    * Emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconEmphasize: ResourceColor;
    /**
    * Secondary emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconSubEmphasize: ResourceColor;
    /**
    * First level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconOnPrimary: ResourceColor;
    /**
    * Secondary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconOnSecondary: ResourceColor;
    /**
    * Tertiary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconOnTertiary: ResourceColor;
    /**
    * Fourth level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    iconOnFourth: ResourceColor;
    /**
    * System Primary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    backgroundPrimary: ResourceColor;
    /**
    * System Secondary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    backgroundSecondary: ResourceColor;
    /**
    * System tertiary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    backgroundTertiary: ResourceColor;
    /**
    * System fourth level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    backgroundFourth: ResourceColor;
    /**
    * System emphasize level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    backgroundEmphasize: ResourceColor;
    /**
    * CompForegroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compForegroundPrimary: ResourceColor;
    /**
    * CompBackgroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundPrimary: ResourceColor;
    /**
    * CompBackgroundPrimaryTran color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundPrimaryTran: ResourceColor;
    /**
    * CompBackgroundPrimaryContrary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundPrimaryContrary: ResourceColor;
    /**
    * CompBackgroundGray color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundGray: ResourceColor;
    /**
    * 10% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundSecondary: ResourceColor;
    /**
    * 5% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundTertiary: ResourceColor;
    /**
    * 100% bright brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundEmphasize: ResourceColor;
    /**
    * Black neutral high gloss color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundNeutral: ResourceColor;
    /**
    * 20% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compEmphasizeSecondary: ResourceColor;
    /**
    * 10% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compEmphasizeTertiary: ResourceColor;
    /**
    * Universal Division Line Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compDivider: ResourceColor;
    /**
    * CompCommonContrary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compCommonContrary: ResourceColor;
    /**
    * CompBackgroundFocus Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compBackgroundFocus: ResourceColor;
    /**
    * CompFocusedPrimary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compFocusedPrimary: ResourceColor;
    /**
    * CompFocusedSecondary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compFocusedSecondary: ResourceColor;
    /**
    * CompFocusedTertiary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    compFocusedTertiary: ResourceColor;
    /**
    *  Hover interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactiveHover: ResourceColor;
    /**
    * Pressed interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactivePressed: ResourceColor;
    /**
    * Focus interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactiveFocus: ResourceColor;
    /**
    * Active interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactiveActive: ResourceColor;
    /**
    * Select interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactiveSelect: ResourceColor;
    /**
    * Click interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    interactiveClick: ResourceColor;
}
/**
 * Defines the struct of CustomTheme.
 *
 * @interface CustomTheme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export declare interface CustomTheme {
    /**
    * Define tokens associated with color resources..
    *
    * @type { ?CustomColors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20 static
    */
    colors?: CustomColors;
}
/**
 * Defines the struct of CustomColors.
 *
 * @typedef { Partial<Colors> } CustomColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export type CustomColors = Partial<Colors>;
/**
 * Class ThemeControl provides the Theme management for whole Ability and pages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export declare class ThemeControl {
    /**
    * Sets the default Theme:
    * - for whole Ability when invoked from the Ability level code.
    * - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.
    * @param { CustomTheme | undefined } theme
    * @static
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 22 static
    */
    static setDefaultTheme(theme: CustomTheme | undefined): void;
}
