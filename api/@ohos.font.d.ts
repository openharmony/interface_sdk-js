/*
 * Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

/**
 * @namespace font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
declare namespace font {
  /**
   * @typedef FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  interface FontOptions {

    /**
     * The font name to register.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The font name to register.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    familyName: string | Resource;

    /**
     * The path of the font file.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The path of the font file.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    familySrc: string | Resource;
  }

  /**
   * @typedef FontInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  interface FontInfo {

    /**
     * The path of the font file.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    path: string;

    /**
     * The name of postscript.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    postScriptName: string;

    /**
     * The font name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    fullName: string;

    /**
     * A set of fonts with a common design.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    family: string;

    /**
     * A subset of the font family.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    subfamily: string;

    /**
     * The weight of the font.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    weight: number;

    /**
     * The width of the font style.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    width: number;

    /**
     * Whether it is italic.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    italic: boolean;

    /**
     * Whether it is compact.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    monoSpace: boolean;

    /**
     * Whether symbol fonts are supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    symbolic: boolean;
  }

  /**
   * @typedef UIFontConfig
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontConfig {
    /**
     * The paths of system font files.
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    fontDir: Array<string>;

    /**
     * The generic font info.
     * @type { Array<UIFontGenericInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    generic: Array<UIFontGenericInfo>;

    /**
     * The fallback font info.
     * @type { Array<UIFontFallbackGroupInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    fallbackGroups: Array<UIFontFallbackGroupInfo>;
  }
  
  /**
   * @typedef UIFontGenericInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontGenericInfo {
    /**
     * Name of the font set.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    family: string;

    /**
     * Alias info of the font set.
     * @type { Array<UIFontAliasInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    alias: Array<UIFontAliasInfo>;

    /**
     * Adjust info of the font set.
     * @type { Array<UIFontAdjustInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    adjust: Array<UIFontAdjustInfo>;
  }

  /**
   * @typedef UIFontAliasInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontAliasInfo {
    /**
     * Font set name.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    name: string;

    /**
     * Weight the font set contains only fonts with, if weight = 0,
     * this font set can contain fonts with any weight.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    weight: number;
  }

  /**
   * @typedef UIFontAdjustInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontAdjustInfo {
    /**
     * Original weight of the font
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    weight: number;
    /**
     * Font weight displayed in the app
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    to: number;
  }

  /**
   * @typedef UIFontFallbackGroupInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontFallbackGroupInfo {
    /**
     * Indicates which font set uses following list for fallback font
     * if the font set name is "", it means that the following list can be fallback font for all font sets.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    fontSetName: string;

    /**
     * Fallback font list related.
     * @type { Array<UIFontFallbackInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    fallback: Array<UIFontFallbackInfo>;
  }
  
  /**
   * @typedef UIFontFallbackInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface UIFontFallbackInfo {
    /**
     * Language that font set support.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    language: string;

    /**
     * Font name related.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    family: string;
  }

  /**
   * Register a customized font in the FontManager.
   *
   * @param { FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  function registerFont(options: FontOptions): void;

  /**
   * Gets a list of fonts supported by system.
   *
   * @returns { Array<string> } A list of font names
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function getSystemFontList(): Array<string>;

  /**
   * Get font details according to the font name.
   *
   * @param { string } fontName - font name
   * @returns { FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function getFontByName(fontName: string): FontInfo;

  /**
   * Get font details according to the font name.
   *
   * @returns { UIFontConfig } Returns the ui font config
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  function getUIFontConfig(): UIFontConfig;
}

export default font;
