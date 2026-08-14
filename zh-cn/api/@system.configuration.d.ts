/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 应用配置
 * @file
 应用配置
 * @kit ArkUI
 */

/**
 * @interface LocaleResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3
 */
/**
 * @interface LocaleResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @atomicservice
 * @since 12 dynamiconly
 */
export interface LocaleResponse {
  /**
   * 语言。例如：zh。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3
   */
  /**
   * 语言。例如：zh。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice
   * @since 12 dynamiconly
   */
  language: string;

  /**
   * 国家或地区。例如：CN。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3
   */
  /**
   * 国家或地区。例如：CN。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice
   * @since 12 dynamiconly
   */
  countryOrRegion: string;

  /**
   * 文字布局方向。取值范围：
   * 
   * - ltr：从左到右。
   * 
   * - rtl：从右到左。
   *
   * @type { "ltr" | "rtl" }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3
   */
  /**
   * 文字布局方向。取值范围：
   * 
   * - ltr：从左到右。
   * 
   * - rtl：从右到左。
   *
   * @type { "ltr" | "rtl" }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice
   * @since 12 dynamiconly
   */
  dir: "ltr" | "rtl";
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @atomicservice
 * @since 12 dynamiconly
 */
export default class Configuration {
  /**
   * 获取应用当前的语言和地区。默认与系统的语言和地区同步。
   *
   * @returns { LocaleResponse }
   应用当前Locale相关信息。
   * @since 3
   */
  /**
   * 获取应用当前的语言和地区。默认与系统的语言和地区同步。
   *
   * @returns { LocaleResponse }
   应用当前Locale相关信息。
   * @atomicservice
   * @since 12 dynamiconly
   */
  static getLocale(): LocaleResponse;
}