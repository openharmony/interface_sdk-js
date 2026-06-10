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
 * 本模块提供注册自定义字体。
 * 
 * > **说明：**
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * >
 * > - 推荐使用字体引擎的[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}接口注册自定义字体。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace font {

  /**
   * 注册的自定义字体信息。
   * 
   * > **说明：**
   * >
   * > 直接使用font可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，推荐通过使用
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的
   * > [Font]{@link @ohos.arkui.UIContext}对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface FontOptions {

    /**
     * 设置注册的字体名称。
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
     * 设置注册字体文件的路径。
     * 
     * **说明：**
     * 
     * 读取系统沙箱路径内的资源时，建议使用file://路径前缀的字符串，需要确保沙箱目录路径下的文件存在并且有可读权限。
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
   * 字体的详细信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface FontInfo {

    /**
     * 系统字体的文件路径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    path: string;

    /**
     * 系统字体的postScript名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    postScriptName: string;

    /**
     * 系统字体的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    fullName: string;

    /**
     * 系统字体的字体家族。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    family: string;

    /**
     * 系统字体的子字体家族。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    subfamily: string;

    /**
     * 系统字体的字重。
     * 
     * 取值范围：[100,900]，取值间隔为100，分别对应[FontWeight]{@link @ohos.graphics.text:text.FontWeight}枚举中的值。
     * 
     * 默认值：100
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    weight: number;

    /**
     * 系统字体的宽度。
     * 
     * 取值范围：[1,9]，取值间隔为1，分别对应[FontWidth]{@link @ohos.graphics.text:text.FontWidth}枚举中的值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    width: number;

    /**
     * 系统字体是否倾斜。
     * 
     * 默认值：false
     * 
     * 值为true，表示斜体字体，值为false，表示非斜体字体。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    italic: boolean;

    /**
     * 系统字体是否等宽。
     * 
     * 默认值：false
     * 
     * 值为true，表示等宽字体，值为false，表示非等宽字体。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    monoSpace: boolean;

    /**
     * 系统字体是否支持符号字体。
     * 
     * 默认值：false
     * 
     * 值为true，表示支持符号字体，值为false，表示不支持符号字体。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontConfig {

    /**
     * 系统字体文件所在的路径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fontDir: Array<string>;

    /**
     * 系统所支持的通用字体集列表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    generic: Array<UIFontGenericInfo>;

    /**
     * 备用字体集。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontGenericInfo {

    /**
     * 字体集名，字体文件中指定的"family"值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    family: string;

    /**
     * 别名列表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    alias: Array<UIFontAliasInfo>;

    /**
     * 字体原本的weight值对应需显示的值。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontAliasInfo {

    /**
     * 别名名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    name: string;

    /**
     * 当weight>0时表示此字体集只包含所指定weight的字体，当weight=0时，表示此字体集包含所有字体。
     * 
     * 可返回的值有0、100、400、700、900。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontAdjustInfo {

    /**
     * 字体原本的weight值。
     * 
     * 可返回的值有50、80、100、200。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    weight: number;

    /**
     * 字体在应用中显示的weight值。
     * 
     * 可返回的值有100、400、700、900。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontFallbackGroupInfo {

    /**
     * 备用字体集所对应的字体集名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    fontSetName: string;

    /**
     * 表示以下列表为该字体集的备用字体，如果fontSetName为""，表示可以作为所有字体集的备用字体。
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
   * 系统的UI字体配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface UIFontFallbackInfo {

    /**
     * 字体集所支持的语言类型，语言格式为bcp47。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    language: string;

    /**
     * 字体集名，字体文件中指定的"family"值。
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
   * 在字体管理中注册自定义字体。
   * 
   * 该接口为异步接口，不支持并发调用。
   * 
   * > **说明：**
   * >
   * > -registerFont需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取
   * > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用registerFont可能导致
   * > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的
   * > [Font]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { FontOptions } options - 注册的自定义字体信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.Font#registerFont
   */
  function registerFont(options: FontOptions): void;

  /**
   * 获取系统字体列表。
   * 
   * 该接口仅在PC/2in1设备上生效，在其他设备上返回空数组。
   * 
   * 推荐使用[getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType}接口获取系统最新支持的字体列表数据。
   * 
   * > **说明：**
   * >
   * > -getSystemFontList需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取
   * > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用getSystemFontList可能导致
   * > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的
   * > [Font]{@link @ohos.arkui.UIContext}对象。
   *
   * @returns { Array<string> } 系统的字体名列表。
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
   * 根据传入的系统字体名称获取系统字体的相关信息。
   * 
   * > **说明：**
   * >
   * > -getFontByName需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取
   * > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用getFontByName可能导致
   * > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的
   * > [Font]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { string } fontName - 系统的字体名。
   * @returns { FontInfo } 字体的详细信息。
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
   * 获取系统字体配置文件的UI字体配置信息。
   * 
   * 该接口仅支持获取配置文件内的信息以及当UI上下文不明确时可能返回undefined，如果想要获取全量的字体配置信息，推荐使用字体引擎的
   * [getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType}接口。
   *
   * @returns { UIFontConfig } Returns the ui font config
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function getUIFontConfig(): UIFontConfig;
}

export default font;