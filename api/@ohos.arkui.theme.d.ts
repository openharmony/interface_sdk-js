
/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { ResourceColor } from './arkui/component/units';
/*** endif */

/**
 * Defines the struct of Theme.
 *
 * @interface Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface Theme {
    /**
    *  Define tokens associated with color resources.
    *
    * @type { Colors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    colors: Colors;
}

/**
 * Defines the struct of Colors.
 *
 * @interface Colors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface Colors {

    /**
    * System brand Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    brand: ResourceColor;
    
    /**
    * System warning Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    warning: ResourceColor;

    /**
    * System alert Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    alert: ResourceColor;

    /**
    * System confirm Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    confirm: ResourceColor;

    /**
    * First level text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontPrimary: ResourceColor;

    /**
    * Secondary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontSecondary: ResourceColor;

    /**
    * tertiary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontTertiary: ResourceColor;

    /**
    * Fourth text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontFourth: ResourceColor;

    /**
    * Emphasize text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontEmphasize: ResourceColor;

    /**
    * First level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontOnPrimary: ResourceColor;

    /**
    * Secondary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontOnSecondary: ResourceColor;

    /**
    * Tertiary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontOnTertiary: ResourceColor;

    /**
    * Fourth level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    fontOnFourth: ResourceColor;

    /**
    * First level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconPrimary: ResourceColor;

    /**
    * Secondary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconSecondary: ResourceColor;

    /**
    * Tertiary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconTertiary: ResourceColor;

    /**
    * Fourth level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconFourth: ResourceColor;

    /**
    * Emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconEmphasize: ResourceColor;

    /**
    * Secondary emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconSubEmphasize: ResourceColor;

    /**
    * First level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconOnPrimary: ResourceColor;

    /**
    * Secondary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconOnSecondary: ResourceColor;

    /**
    * Tertiary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconOnTertiary: ResourceColor;

    /**
    * Fourth level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    iconOnFourth: ResourceColor;

    /**
    * System Primary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    backgroundPrimary: ResourceColor;

    /**
    * System Secondary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    backgroundSecondary: ResourceColor;

    /**
    * System tertiary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    backgroundTertiary: ResourceColor;

    /**
    * System fourth level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    backgroundFourth: ResourceColor;

    /**
    * System emphasize level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    backgroundEmphasize: ResourceColor;

    /**
    * CompForegroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compForegroundPrimary: ResourceColor;

    /**
    * CompBackgroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundPrimary: ResourceColor;

    /**
    * CompBackgroundPrimaryTran color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundPrimaryTran: ResourceColor;

    /**
    * CompBackgroundPrimaryContrary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundPrimaryContrary: ResourceColor;

    /**
    * CompBackgroundGray color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundGray: ResourceColor;

    /**
    * 10% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundSecondary: ResourceColor;

    /**
    * 5% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundTertiary: ResourceColor;

    /**
    * 100% bright brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundEmphasize: ResourceColor;

    /**
    * Black neutral high gloss color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundNeutral: ResourceColor;
    
    /**
    * 20% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compEmphasizeSecondary: ResourceColor;

    /**
    * 10% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compEmphasizeTertiary: ResourceColor;

    /**
    * Universal Division Line Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compDivider: ResourceColor;

    /**
    * CompCommonContrary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compCommonContrary: ResourceColor;

    /**
    * CompBackgroundFocus Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compBackgroundFocus: ResourceColor;

    /**
    * CompFocusedPrimary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compFocusedPrimary: ResourceColor;

    /**
    * CompFocusedSecondary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compFocusedSecondary: ResourceColor;

    /**
    * CompFocusedTertiary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    compFocusedTertiary: ResourceColor;

    /**
    *  Hover interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactiveHover: ResourceColor;

    /**
    * Pressed interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactivePressed: ResourceColor;

    /**
    * Focus interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactiveFocus: ResourceColor;

    /**
    * Active interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactiveActive: ResourceColor;

    /**
    * Select interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactiveSelect: ResourceColor;

    /**
    * Click interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    interactiveClick: ResourceColor;
}

/**
 * Defines the struct of CustomTheme.
 *
 * @interface CustomTheme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare interface CustomTheme {
    /**
    * Define tokens associated with color resources..
    *
    * @type { ?CustomColors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    colors?: CustomColors;
}

/**
 * Defines the struct of CustomColors.
 *
 * @typedef { Partial<Colors> } CustomColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare type CustomColors = Partial<Colors>;

/**
 * Defines the struct of CustomColors.
 *
 * @typedef { Partial<Colors> } CustomColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type CustomColors = Partial<Colors>;

/**
 * Class ThemeControl provides the Theme management for whole Ability and pages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare class ThemeControl {
    /**
    * Sets the default Theme:
    * - for whole Ability when invoked from the Ability level code.
    * - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.
    *
    * @param { CustomTheme } theme
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    static setDefaultTheme(theme: CustomTheme): void;
}
