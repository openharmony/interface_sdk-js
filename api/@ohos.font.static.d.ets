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
import { Resource } from './global/resource';

/**
 * @namespace font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
declare namespace font {
    /**
     * @typedef FontOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface FontOptions {
        /**
         * The font name to register.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        familyName: string | Resource;
        
        /**
         * The path of the font file.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        familySrc: string | Resource;
    }
    /**
     * @typedef FontInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface FontInfo {
        /**
         * The path of the font file.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        path: string;
        /**
         * The name of postscript.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        postScriptName: string;
        /**
         * The font name.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        fullName: string;
        /**
         * A set of fonts with a common design.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        family: string;
        /**
         * A subset of the font family.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        subfamily: string;
        /**
         * The weight of the font.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        weight: int;
        /**
         * The width of the font style.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        width: int;
        /**
         * Whether it is italic.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        italic: boolean;
        /**
         * Whether it is compact.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        monoSpace: boolean;
        /**
         * Whether symbol fonts are supported.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        symbolic: boolean;
    }
    /**
     * @typedef UIFontConfig
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontConfig {
        /**
         * The paths of system font files.
         * @type { Array<string> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        fontDir: Array<string>;
        /**
         * The generic font info.
         * @type { Array<UIFontGenericInfo> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        generic: Array<UIFontGenericInfo>;
        /**
         * The fallback font info.
         * @type { Array<UIFontFallbackGroupInfo> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        fallbackGroups: Array<UIFontFallbackGroupInfo>;
    }
    /**
     * @typedef UIFontGenericInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontGenericInfo {
        /**
         * Name of the font set.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        family: string;
        /**
         * Alias info of the font set.
         * @type { Array<UIFontAliasInfo> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        alias: Array<UIFontAliasInfo>;
        /**
         * Adjust info of the font set.
         * @type { Array<UIFontAdjustInfo> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        adjust: Array<UIFontAdjustInfo>;
    }
    /**
     * @typedef UIFontAliasInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontAliasInfo {
        /**
         * Font set name.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        name: string;
        /**
         * Weight the font set contains only fonts with, if weight = 0,
         * this font set can contain fonts with any weight.
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        weight: double;
    }
    /**
     * @typedef UIFontAdjustInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontAdjustInfo {
        /**
         * Original weight of the font
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        weight: double;
        /**
         * Font weight displayed in the app
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        to: int;
    }
    /**
     * @typedef UIFontFallbackGroupInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontFallbackGroupInfo {
        /**
         * Indicates which font set uses following list for fallback font
         * if the font set name is "", it means that the following list can be fallback font for all font sets.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        fontSetName: string;
        /**
         * Fallback font list related.
         * @type { Array<UIFontFallbackInfo> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        fallback: Array<UIFontFallbackInfo>;
    }
    /**
     * @typedef UIFontFallbackInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    interface UIFontFallbackInfo {
        /**
         * Language that font set support.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        language: string;
        /**
         * Font name related.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 22 static
         */
        family: string;
    }
    /**
     * Get font details according to the font name.
     *
     * @returns { UIFontConfig } Returns the ui font config
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    function getUIFontConfig(): UIFontConfig;
}
export default font;
