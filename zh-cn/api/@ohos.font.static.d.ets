/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 注册自定义字体
 * @file
 注册自定义字体
 * @kit ArkUI
 */
import { Resource } from './global/resource';

/**
 * @namespace font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace font {
  /**
   * @typedef FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface FontOptions {
    /**
     * 设置注册的字体名称。
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    familyName: string | Resource;

    /**
     * 设置注册字体文件的路径。
     *
     * **说明：**
     *
     * 读取系统沙箱路径内的资源时，建议使用file://路径前缀的字符串，需要确保沙箱目录路径下的文件存在并且有可读权限。
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    familySrc: string | Resource;
    }
  /**
   * @typedef FontInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface FontInfo {
    /**
     * 系统字体的文件路径。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    path: string;
    /**
     * 系统字体的postScript名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    postScriptName: string;
    /**
     * 系统字体的名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fullName: string;
    /**
     * 系统字体的字体家族。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    family: string;
    /**
     * 系统字体的子字体家族。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subfamily: string;
    /**
     * 系统字体的字重。
     *
     * 取值范围：[100,900]，取值间隔为100，分别对应
     * [FontWeight](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#fontweight)枚举中的值。
     *
     * 默认值：100
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    weight: int;
    /**
     * 系统字体的宽度。
     *
     * 取值范围：[1,9]，取值间隔为1，分别对应[FontWidth](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#fontwidth)枚
     * 举中的值。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: int;
    /**
     * 系统字体是否倾斜。
     *
     * 默认值：false
     *
     * 值为true，表示斜体字体，值为false，表示非斜体字体。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    italic: boolean;
    /**
     * 系统字体是否等宽。
     *
     * 默认值：false
     *
     * 值为true，表示等宽字体，值为false，表示非等宽字体。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    monoSpace: boolean;
    /**
     * 系统字体是否支持符号字体。
     *
     * 默认值：false
     *
     * 值为true，表示支持符号字体，值为false，表示不支持符号字体。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolic: boolean;
    }
  /**
   * @typedef UIFontConfig
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontConfig {
    /**
     * 系统字体文件所在的路径。
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontDir: Array<string>;
    /**
     * 系统所支持的通用字体集列表。
     *
     * @type { Array<UIFontGenericInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    generic: Array<UIFontGenericInfo>;
    /**
     * 备用字体集。
     *
     * @type { Array<UIFontFallbackGroupInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fallbackGroups: Array<UIFontFallbackGroupInfo>;
    }
  /**
   * @typedef UIFontGenericInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontGenericInfo {
    /**
     * 字体集名，字体文件中指定的"family"值。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    family: string;
    /**
     * 别名列表。
     *
     * @type { Array<UIFontAliasInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alias: Array<UIFontAliasInfo>;
    /**
     * 字体原本的weight值对应需显示的值。
     *
     * @type { Array<UIFontAdjustInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    adjust: Array<UIFontAdjustInfo>;
    }
  /**
   * @typedef UIFontAliasInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontAliasInfo {
    /**
     * 别名名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;
    /**
     * 当weight>0时表示此字体集只包含所指定weight的字体，当weight=0时，表示此字体集包含所有字体。
     *
     * 可返回的值有0、100、400、700、900。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    weight: double;
    }
  /**
   * @typedef UIFontAdjustInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontAdjustInfo {
    /**
     * 字体原本的weight值。
     *
     * 可返回的值有50、80、100、200。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    weight: double;
    /**
     * 字体在应用中显示的weight值。
     *
     * 可返回的值有100、400、700、900。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    to: int;
    }
  /**
   * @typedef UIFontFallbackGroupInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontFallbackGroupInfo {
    /**
     * 备用字体集所对应的字体集名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSetName: string;
    /**
     * 表示以下列表为该字体集的备用字体，如果fontSetName为""，表示可以作为所有字体集的备用字体。
     *
     * @type { Array<UIFontFallbackInfo> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fallback: Array<UIFontFallbackInfo>;
    }
  /**
   * @typedef UIFontFallbackInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface UIFontFallbackInfo {
    /**
     * 字体集所支持的语言类型，语言格式为bcp47。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    language: string;
    /**
     * 字体集名，字体文件中指定的"family"值。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    family: string;
    }
  /**
   * 获取系统字体配置文件的UI字体配置信息。
   *
   * 该接口仅支持获取配置文件内的信息以及当UI上下文不明确时可能返回undefined，如果想要获取全量的字体配置信息，推荐使用字体引擎的
   * [getSystemFontFullNamesByType](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#textgetsystemfontfullnamesbytype14)
   * 接口。
   *
   * @returns { UIFontConfig } Returns the ui font config
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  function getUIFontConfig(): UIFontConfig;
}
export default font;