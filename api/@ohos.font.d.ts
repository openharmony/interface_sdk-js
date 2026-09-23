/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @file Custom Font Registration
 * @kit ArkUI
 */

/**
 * This module provides capabilities such as registering custom fonts and obtaining the system font list, font details,
 * and system font configuration. It is applicable to scenarios where applications need to use custom font styles (such
 * as brand and icon fonts) or obtain system font information. By using this module, you can unify brand fonts, improve
 * the aesthetics and consistency of the user interface, and meet diverse design requirements.
 *
 * > **NOTE**
 * >
 * > - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used
 * > where [the UI context is ambiguous](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). For details, see
 * > [UIContext]{@link @ohos.arkui.UIContext}.
 * >
 * > - You are advised to use the [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} API of the
 * > font engine to register custom fonts.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace font {
  /**
   * Information about the custom font to register.
   *
   * > **NOTE**
   * >
   * > Directly using **font** can lead to the issue of
   * > [ambiguous UI context](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the
   * > [Font]{@link @ohos.arkui.UIContext} object associated with the current UI context by using the
   * > [getFont]{@link @ohos.arkui.UIContext:UIContext.getFont} API in [UIContext]{@link @ohos.arkui.UIContext}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface FontOptions {

    /**
     * Name of the font to register. It is recommended to use letters, digits, and underscores.
     *
     * @type { string } [since 9 - 9]
     * @type { string | Resource } [since 10]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    familyName: string | Resource;

    /**
     * File path of the font to register. This parameter supports **Resource** references, **$rawfile** paths, relative
     * paths, and absolute paths.
     *
     * **Note:**
     *
     * When reading resources in the system sandbox path, you are advised to use a string with the **file://** path
     * prefix. Ensure that the file exists in the sandbox directory and has read permission.
     *
     * @type { string } [since 9 - 9]
     * @type { string | Resource } [since 10]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    familySrc: string | Resource;
  }

  /**
   * Information about the system font.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface FontInfo {

    /**
     * File path of the system font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    path: string;

    /**
     * PostScript name of the system font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    postScriptName: string;

    /**
     * Name of the system font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    fullName: string;

    /**
     * Family of the system font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    family: string;

    /**
     * Subfamily of the system font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    subfamily: string;

    /**
     * Weight of the system font.
     *
     * Value range: [100, 900], with an interval of 100, corresponding to the values in
     * [FontWeight]{@link @ohos.graphics.text:text.FontWeight}.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    weight: number;

    /**
     * Width of the system font.
     *
     * Value range: [1, 9], with an interval of 1, corresponding to the values in
     * [FontWidth]{@link @ohos.graphics.text:text.FontWidth}.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    width: number;

    /**
     * Whether the system font is italic.
     *
     * Default value: **false**
     *
     * The value **true** indicates an italic font, and **false** indicates a non-italic font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    italic: boolean;

    /**
     * Whether the system font is monospaced.
     *
     * Default value: **false**
     *
     * The value **true** indicates a monospaced font, and **false** indicates a non-monospaced font.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    monoSpace: boolean;

    /**
     * Whether the system font supports symbolic fonts.
     *
     * Default value: **false**
     *
     * The value **true** indicates that symbolic fonts are supported, and **false** indicates that symbolic fonts are
     * not supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    symbolic: boolean;
  }

  /**
   * UI font configuration of the system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontConfig {
    /**
     * List of paths where the system font files are located. Each array element is an absolute system path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fontDir: Array<string>;

    /**
     * List of generic font families supported by the system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    generic: Array<UIFontGenericInfo>;

    /**
     * List of system fallback font groups, used to specify the fallback fonts to use when the primary font does not
     * support certain characters.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fallbackGroups: Array<UIFontFallbackGroupInfo>;
  }

  /**
   * Defines a list of supported generic font families.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontGenericInfo {
    /**
     * Font family name, which is the value of **family** specified in the font file.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    family: string;

    /**
     * Alias list of the font family, used to provide alternative names for the fonts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    alias: Array<UIFontAliasInfo>;

    /**
     * Font weight value mapping list, which maps the original weight values of the fonts to the actually displayed
     * weight values.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    adjust: Array<UIFontAdjustInfo>;
  }

  /**
   * Defines font alias configuration information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontAliasInfo {
    /**
     * Alias name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    name: string;

    /**
     * When the value of **weight** is greater than 0, this font family contains only fonts of the specified weight.
     * When the value of **weight** is 0, this font family contains all fonts.
     *
     * The value options can be **0**, **100**, **400**, **700**, and **900**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    weight: number;
  }

  /**
   * Provides a mapping list between the original weight value of a font and the actual displayed weight value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontAdjustInfo {
    /**
     * Original weight value of the font.
     *
     * The value options can be **50**, **80**, **100**, and **200**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    weight: number;

    /**
     * Weight value of the font displayed in the application.
     *
     * The value options can be **100**, **400**, **700**, and **900**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    to: number;
  }

  /**
   * Defines a list of fallback generic font families.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontFallbackGroupInfo {
    /**
     * Name of the font family corresponding to the fallback font group. If **fontSetName** is set to **""**, the
     * fallback font group can be used for all font families.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fontSetName: string;

    /**
     * Fallback fonts for the font family. If **fontSetName** is set to **""**, it indicates that the fonts can be used
     * as fallback fonts for all font families.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fallback: Array<UIFontFallbackInfo>;
  }

  /**
   * Provides the fallback font of the font set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontFallbackInfo {
    /**
     * Language type supported by the font family. The language format is a BCP47 tag (for example, **"zh-Hans"**
     * indicates Simplified Chinese, and **"en"** indicates English).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    language: string;

    /**
     * Font family name, which is the value of **family** specified in the font file.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    family: string;
  }

  /**
   * Registers a custom font with the font manager.
   *
   * This API is asynchronous and does not support concurrent calls.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the [getFont]{@link @ohos.arkui.UIContext:UIContext.getFont} API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Font]{@link @ohos.arkui.UIContext} object associated with
   * > the current UI context.
   *
   * @param { FontOptions } options - Information about the custom font to register.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.Font#registerFont
   */
  function registerFont(options: FontOptions): void;

  /**
   * Obtains this system font list.
   *
   * This API only takes effect on PCs/2-in-1 devices and returns an empty array on other devices.
   *
   * You are advised to use the
   * [getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType} API to obtain the
   * latest system-supported font list data.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the [getFont]{@link @ohos.arkui.UIContext:UIContext.getFont} API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Font]{@link @ohos.arkui.UIContext} object associated with
   * > the current UI context.
   *
   * @returns { Array<string> } List of supported fonts.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.Font#getSystemFontList
   */
  function getSystemFontList(): Array<string>;

  /**
   * Obtains information about a system font based on the font name.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the [getFont]{@link @ohos.arkui.UIContext:UIContext.getFont} API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Font]{@link @ohos.arkui.UIContext} object associated with
   * > the current UI context.
   *
   * @param { string } fontName - System font name.
   * @returns { FontInfo } Font details, including attributes such as the path, name, font weight, width, and whether it
   *     is italic.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.Font#getFontByName
   */
  function getFontByName(fontName: string): FontInfo;

  /**
   * Obtains the UI font configuration in the system font configuration file. This API is commonly used in scenarios
   * where the system font configuration needs to be analyzed or viewed, such as font management tools, font debugging
   * and diagnosis, and font configuration information display.
   *
   * This API only supports obtaining the information in the configuration file, and **undefined** may be returned when
   * the UI context is not clear. To obtain the full font configuration information, it is recommended to use the
   * [getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType} API of the font engine
   * to obtain the latest font list data supported by the system.
   *
   * > **NOTE**
   * >
   * > You need to first obtain the [Font]{@link @ohos.arkui.UIContext} object through the
   * > [getFont]{@link @ohos.arkui.UIContext:UIContext.getFont} API in [UIContext]{@link @ohos.arkui.UIContext}, and
   * > then call the related API through the object. Directly using **getUIFontConfig** may cause the issue of
   * > [ambiguous UI context](docroot://ui/arkts-global-interface.md#ambiguous-ui-context).
   *
   * @returns { UIFontConfig } UI font configuration of the system, including the font directory, generic font group,
   *     and fallback font group.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function getUIFontConfig(): UIFontConfig;
}

export default font;