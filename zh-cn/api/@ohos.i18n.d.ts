/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file 国际化-I18n
 * @kit LocalizationKit
 */

/*** if arkts dynamic&static */
import { BusinessError } from './@ohos.base';
import intl from './@ohos.intl';
/*** endif */
/*** if arkts static */
import { StyledString, TextStyle } from './arkui/component/styledString';
/*** endif */

/**
 * 本模块提供系统相关的以及增强的[国际化](docroot://internationalization/i18n-l10n.md)能力，包括区域管理、电话号码处理、日历等，相关接口为
 * [ECMA 402](https://dev.ecma-international.org/publications-and-standards/standards/ecma-402/)标准中未定义的补充接口。
 * [国际化-Intl]{@link @ohos.intl:intl}模块提供了ECMA 402标准定义的基础国际化接口，与本模块共同使用可提供完整的国际化能力。接口中使用的名词定义如下：
 * 
 * - 模式字符串：由[Unicode日期字段符号](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)和单引号包裹的自定义文本自由组
 * 合而成的字符串。
 * - 框架字符串：由[Unicode日期字段符号](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)自由组合而成的字符串，不支持自
 * 定义文本。
 * 
 * > **说明：**
 * >
 * > - 本模块接口基于[CLDR](https://cldr.unicode.org)国际化数据库实现，随着CLDR标准的迭代演进，接口处理结果可能会相应调整。例如时间日期格式化接口，其返回值仅适用于界面展示场景，开发者请勿对返回格式
 * > 进行硬编码或假设性判断，否则可能导致版本兼容问题。其中，API version 12 对应[CLDR 42](https://cldr.unicode.org/downloads/cldr-42)版本，具体数据变更详情可查阅
 * > [CLDR官方文档](https://cldr.unicode.org/)。
 * >
 * > - 从API version 11开始，本模块部分接口支持在ArkTS卡片中使用。
 *
 * @syscap SystemCapability.Global.I18n
 * @crossplatform [since 11]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace i18n {
  /**
   * 获取指定国家的本地化名称。
   *
   * @param { string } country - 指定国家。
   * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组成。
   * @param { boolean } [sentenceCase] - true表示按照首字母大写的格式显示文本，false表示按照区域默认的大小写格式显示文本。默认值：true。
   * @returns { string } 指定国家的本地化显示文本。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getDisplayCountry
   */
  export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

  /**
   * 获取指定语言的本地化显示文本。
   *
   * @param { string } language - 指定语言。
   * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组成。
   * @param { boolean } [sentenceCase] - true表示按照首字母大写的格式显示文本，false表示按照区域默认的大小写格式显示文本。默认值：true。
   * @returns { string } 指定语言的本地化显示文本。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getDisplayLanguage
   */
  export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

  /**
   * 获取系统语言。
   *
   * @returns { string } 系统语言ID。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getSystemLanguage
   */
  export function getSystemLanguage(): string;

  /**
   * 获取系统地区。
   *
   * @returns { string } 系统地区ID。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getSystemRegion
   */
  export function getSystemRegion(): string;

  /**
   * > [System.getSystemLocale]{@link i18n.System#getSystemLocaleInstance}代替。
   * > 获取系统区域ID。
   *
   * @returns { string } 系统区域ID。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getSystemLocale
   */
  export function getSystemLocale(): string;

  /**
   * 提供系统属性相关的能力，包括语言地区名称翻译、支持的语言地区列表获取和系统语言地区获取等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export class System {
    /**
     * 获取国家地区名称在指定语言下的翻译。
     *
     * @param { string } country - 国家地区，要求是[合法的国家地区码](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @param { boolean } [sentenceCase] - true表示按照首字母大写的格式显示文本，false表示按照区域默认的大小写格式显示文本。默认值：true。
     * @returns { string } 国家地区名称在指定语言下的翻译。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

    /**
     * 获取语言名称在指定语言下的翻译。
     *
     * @param { string } language - 语言，要求是[合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @param { boolean } [sentenceCase] - true表示按照首字母大写的格式显示文本，false表示按照区域默认的大小写格式显示文本。默认值：true。
     * @returns { string } 语言名称在指定语言下的翻译。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    static getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

    /**
     * 获取系统支持的语言列表。
     *
     * @returns { Array<string> } 系统支持的语言列表。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getSystemLanguages(): Array<string>;

    /**
     * 获取输入语言下系统支持的国家地区列表。
     *
     * @param { string } language - [合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @returns { Array<string> } language参数指定的语言下，系统支持的国家/地区列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getSystemCountries(language: string): Array<string>;

    /**
     * 判断语言是否是地区的推荐语言。用于根据地区推荐语言或根据语言推荐地区。
     *
     * @param { string } language - [合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)，例如zh。
     * @param { string } [region] - [合法的国家地区码](docroot://internationalization/i18n-locale-culture.md#实现原理)，例如CN。
     *     <br>默认值：SIM卡国家地区。
     * @returns { boolean } true表示语言是地区的推荐语言，false表示语言不是地区的推荐语言。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isSuggested(language: string, region?: string): boolean;

    /**
     * 获取系统当前设置的语言。若要监听系统语言变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_LOCALE_CHANGED，具体可参考
     * [系统语言与区域](docroot://internationalization/i18n-system-language-region.md#开发步骤)。
     *
     * @returns { string } 表示语言ID的字符串。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    static getSystemLanguage(): string;

    /**
     * 设置系统语言。若要监听系统语言变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_LOCALE_CHANGED，具体可参考
     * [系统语言与区域](docroot://internationalization/i18n-system-language-region.md#开发步骤)。
     *     <br>**说明：** 
     *     <br>可以通过[i18n.System.getSystemLanguage()](docroot://reference/apis-localization-kit/js-apis-i18n.md#getsystemlanguage9)接口获取系统语言。
     *     <br>从API version 21开始，也可以使用[param工具](docroot://tools/param-tool.md#获取系统参数的值)的“param get persist.global.language”命令获取系统语言。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - [合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static setSystemLanguage(language: string): void;

    /**
     * 获取系统当前设置的国家地区。若要监听系统地区变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_LOCALE_CHANGED，具体可参考
     * [系统语言与区域](docroot://internationalization/i18n-system-language-region.md#开发步骤)。
     *
     * @returns { string } 表示国家地区ID的字符串。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getSystemRegion(): string;

    /**
     * 设置系统地区。若要监听系统地区变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_LOCALE_CHANGED，具体可参考
     * [系统语言与区域](docroot://internationalization/i18n-system-language-region.md#开发步骤)。
     *     <br>**说明：** 
     *     <br>可以通过[i18n.System.getSystemRegion()](docroot://reference/apis-localization-kit/js-apis-i18n.md#getsystemregion9)接口获取系统地区。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } region - [合法的地区ID](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static setSystemRegion(region: string): void;

    /**
     * > [System.getSystemLocaleInstance]{@link i18n.System#getSystemLocaleInstance}代替。
     * > 获取系统当前设置的区域。
     *
     * @returns { string } 表示区域ID的字符串。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead i18n.System.getSystemLocaleInstance
     */
    static getSystemLocale(): string;

    /**
     * 获取系统当前设置的区域对象。若要监听系统区域变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_LOCALE_CHANGED，具体可参考
     * [系统语言与区域](docroot://internationalization/i18n-system-language-region.md#开发步骤)。
     *
     * @returns { Intl.Locale } the locale object currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemLocaleInstance(): Intl.Locale;

    /**
     * 设置系统区域。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，
     *         由语言、脚本、国家或地区组成。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    static setSystemLocale(locale: string): void;

    /**
     * 判断系统时制是否为24小时制。若要监听系统时制变化，可以监听
     * [公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_time_changed)
     * OHOS::EventFwk::CommonEventSupport::COMMON_EVENT_TIME_CHANGED，具体可参考
     * [用户偏好](docroot://internationalization/i18n-user-preferences.md#开发步骤)。
     *
     * @returns { boolean } true表示系统时制为24小时制，false表示系统时制为12小时制。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static is24HourClock(): boolean;

    /**
     * 设置系统时制是否为24小时制。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } option - true表示设置系统时制为24小时制，false表示设置系统时制为12小时制。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification
     *     failed. [since 9 - 24]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static set24HourClock(option: boolean): void;

    /**
     * 在系统偏好语言列表的指定位置添加偏好语言。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - 待添加的偏好语言，要求是合法的语言ID。
     * @param { int } [index] - 偏好语言的添加位置。
     *     <br>取值范围：[0, 系统偏好语言列表长度]，小于0时取值为0，大于系统偏好语言列表长度时取值为系统偏好语言列表长度。
     *     <br>默认值：系统偏好语言列表长度。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static addPreferredLanguage(language: string, index?: int): void;

    /**
     * 从系统偏好语言列表中移除指定位置的偏好语言。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { int } index - 待删除偏好语言在系统偏好语言列表中的位置。
     *     <br>取值范围：[0, 系统偏好语言列表长度]，小于0时取值为0，大于系统偏好语言列表长度时取值为系统偏好语言列表长度。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification
     *     failed. [since 9 - 24]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static removePreferredLanguage(index: int): void;

    /**
     * 获取系统偏好语言列表。
     *
     * @returns { Array<string> } 系统偏好语言列表。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getPreferredLanguageList(): Array<string>;

    /**
     * 获取系统偏好语言列表中的第一个语言。
     *
     * @returns { string } 系统偏好语言列表中的第一个语言。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getFirstPreferredLanguage(): string;

    /**
     * 设置应用偏好语言。设置后，应用将优先加载应用偏好语言对应的资源。设置偏好语言为'default'后，应用语言将跟随系统语言，应用冷启动生效。
     *
     * @param { string } language - [合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)或'default'。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    static setAppPreferredLanguage(language: string): void;

    /**
     * 获取应用偏好语言。
     *
     * @returns { string } 应用偏好语言。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getAppPreferredLanguage(): string;

    /**
     * 设置系统是否使用本地数字。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } flag - true表示打开本地数字开关，false表示关闭本地数字开关。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification
     *     failed. [since 9 - 24]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    static setUsingLocalDigit(flag: boolean): void;

    /**
     * 判断系统是否使用本地数字。
     *
     * @returns { boolean } true表示系统当前使用本地数字，false表示系统当前不使用本地数字。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getUsingLocalDigit(): boolean;

    /**
     * 获取语言的简化表示。例如：'en-Latn-US'的简化表示为'en'，'en-Latn-GB'的简化表示为'en-GB'。
     *
     * @param { string } [language] - [合法的语言ID](docroot://internationalization/i18n-locale-culture.md#实现原理)。默认值：系统语言。
     * @returns { string } 不传入language时，会根据系统语言和地区判断是否存在系统支持的方言，若存在则返回方言的简化表示；若不存在，则返回系统语言的简化表示。
     *     <br>传入language时，返回language的简化表示。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    static getSimplifiedLanguage(language?: string): string;

    /**
     * 设置系统的温度单位。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { TemperatureType } type - 温度单位。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static setTemperatureType(type: TemperatureType): void;

    /**
     * 获取系统设置的温度单位。
     *
     * @returns { TemperatureType } 温度单位。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    static getTemperatureType(): TemperatureType;

    /**
     * 获取温度单位的名称。
     *
     * @param { TemperatureType } type - 温度单位。
     * @returns { string } 返回温度单位的名称，包括celsius，fahrenheit，kelvin。
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    static getTemperatureName(type: TemperatureType): string;

    /**
     * 设置系统的周起始日。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { WeekDay } type - 周期起始日。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static setFirstDayOfWeek(type: WeekDay): void;

    /**
     * 获取系统设置的周起始日。
     *
     * @returns { WeekDay } 周起始日。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    static getFirstDayOfWeek(): WeekDay;

    /**
     * 获取系统支持的排序方式及名称。如系统语言为英文时，可以支持大写在前或小写在前的排序方式。
     *
     * @returns { Map<string, string> } 系统支持的排序方式及名称。其中Map的key为表示排序方式的字符串，value为表示排序方式对应名称的字符串。
     *     支持的范围和系统语言相关。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemCollations(): Map<string, string>;

    /**
     * 获取系统当前使用的排序方式。
     *
     * @returns { string } 系统当前使用的排序方式。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingCollation(): string;

    /**
     * 设置系统的排序方式。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - 系统支持的排序方式。支持的范围可以通过getSystemCollations获取。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemCollation(identifier: string): void;

    /**
     * 获取系统支持的度量衡及其名称。
     *
     * @returns { Map<string, string> } 系统支持的度量衡及其名称。其中Map的key表示度量衡的标识，value表示度量衡的名称。支持的度量衡如下：
     *     - metric：公制。
     *     - uksystem：英制。
     *     - ussystem：美制。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemMeasurements(): Map<string, string>;

    /**
     * 获取系统当前使用的度量衡。
     *
     * @returns { string } 系统当前使用的度量衡，取值及对应含义如下：
     *         - metric：公制。
     *         - uksystem：英制。
     *         - ussystem：美制。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingMeasurement(): string;

    /**
     * 设置系统的度量衡。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - 系统支持的度量衡。支持的范围可以通过getSystemMeasurements获取。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemMeasurement(identifier: string): void;

    /**
     * 获取系统当前使用的数字系统。
     *
     * @returns { string } 系统支持的数字系统。支持的范围可以通过getSystemNumberingSystems获取。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumberingSystem(): string;

    /**
     * 设置系统的数字系统。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - 系统支持的数字系统。支持的范围可以通过getSystemNumberingSystems获取。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumberingSystem(identifier: string): void;

    /**
     * 获取系统支持的数字系统及示例。示例为数字0~9在对应数字系统下的显示。
     *
     * @returns { Map<string,string> } 系统支持的数字系统及示例。其中Map的key为表示数字系统的字符串，value为表示数字系统对应的示例。
     *     支持的范围和系统语言相关。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumberingSystems(): Map<string, string>;

    /**
     * 获取系统支持的数字格式及示例。数字格式指数字中的千分符和小数分隔符的格式。
     *
     * @returns { Map<string,string> } 系统支持的数字格式及示例。
     *                其中Map的key表示数字格式，是千分符和小数分隔符的unicode编码，value表示数字格式对应的示例。支持的范围和系统语言地区相关。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumberPatterns(): Map<string, string>;

    /**
     * 设置系统的数字格式。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } pattern - 系统支持的数字格式。支持的范围可以通过getSystemNumberPatterns获取。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumberPattern(pattern: string): void;

    /**
     * 获取系统当前使用的数字格式。
     *
     * @returns { string } 系统当前使用的数字格式。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumberPattern(): string;

    /**
     * 获取系统支持的数字日期格式及其示例。
     *
     * @returns { Map<string, string> } 获取系统支持的数字日期格式及其示例。
     *             其中Map的key表示数字日期格式，形如dd/MM/y；value表示数字日期示例，形如18/07/2025。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumericalDatePatterns(): Map<string, string>;

    /**
     * 设置系统的数字日期格式。
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - 系统支持的数字日期格式。支持的范围可以通过getSystemNumericalDatePatterns获取。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumericalDatePattern(identifier : string): void;

    /**
     * 获取系统当前使用的数字日期格式。
     *
     * @returns { string } 系统当前使用的数字日期格式。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumericalDatePattern(): string;
  }

  /**
   * 周起始日的枚举，取值范围为周一至周日。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum WeekDay {
    /**
     * 周一。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    MON = 1,

    /**
     * 周二。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TUE = 2,

    /**
     * 周三。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    WED = 3,

    /**
     * 周四。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    THU = 4,

    /**
     * 周五。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FRI = 5,

    /**
     * 周六。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SAT = 6,

    /**
     * 周日。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SUN = 7
  }

  /**
   * 温度单位的枚举。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum TemperatureType {
    /**
     * 摄氏度。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    CELSIUS = 1,

    /**
     * 华氏度。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FAHRENHEIT = 2,

    /**
     * 开尔文。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    KELVIN = 3
  }

  /**
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.I18NUtil
   */
  export interface Util {
    /**
     * 将fromUnit的单位转换为toUnit的单位，并根据区域与风格进行格式化。
     *
     * @param { UnitInfo } fromUnit - 要被转换的单位。
     * @param { UnitInfo } toUnit - 要转换为的单位。
     * @param { double } value - 要被转换的单位的数量值。
     * @param { string } locale - 格式化时使用的区域ID，如：zh-Hans-CN。
     * @param { string } [style] - 格式化使用的风格，取值包括：'long', 'short', 'narrow'。默认值：short。
     * @returns { string } 按照toUnit的单位格式化后，得到的字符串。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.I18NUtil.unitConvert
     */
    unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string;
  }

  /**
   * 国际化工具类，提供单位转换、获取日期顺序、获取时段名称、区域匹配和路径本地化等能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export class I18NUtil {
    /**
     * 将fromUnit的单位转换为toUnit的单位，并根据区域与风格进行格式化。
     *
     * @param { UnitInfo } fromUnit - 需要转换的单位。
     * @param { UnitInfo } toUnit - 转换成的目标单位。
     * @param { double } value - 需要转换的单位的数量值。
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成，如：zh-Hans-CN。
     * @param { string } [style] - 格式化使用的风格，取值包括：'long', 'short', 'narrow'。默认值：short。
     *     <br>不同取值显示效果请参考[数字与度量衡国际化](docroot://internationalization/i18n-numbers-weights-measures.md)。
     * @returns { string } 转换单位后的度量衡格式化结果。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string;

    /**
     * 获取某区域日期中年、月、日的排列顺序。
     *
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成，如：zh-Hans-CN。
     * @returns { string } 该区域年、月、日的排列顺序。“y”表示年，“L”表示月，“d”表示日。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getDateOrder(locale: string): string;

    /**
     * 获取指定时间在某区域的本地化表达。
     *
     * @param { int } hour - 指定的时间，例如16。
     * @param { string } [locale] - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区
     *     组成。如：zh-Hans-CN。
     *     <br>默认值：系统当前区域ID。
     * @returns { string } 指定时间在某区域的本地化表达。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    static getTimePeriodName(hour:int, locale?: string): string;

    /**
     * 在指定区域列表中获取与某个区域最佳匹配的区域。
     *
     * @param { string } locale - 待匹配的[区域ID字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，如：zh-Hans-
     *     CN。
     * @param { string[] } localeList - 指定的区域ID字符串列表。
     * @returns { string } 与某个区域最佳匹配的区域ID。当指定区域列表中没有匹配的区域时，返回空字串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getBestMatchLocale(locale: string, localeList: string[]): string;

    /**
     * 将语言代码由二字母转换为三字母。二字母和三字母语言代码的规格参考[ISO 639](https://www.iso.org/iso-639-language-code)。
     * 
     * 例如，中文的二字母语言代码是zh，对应的三字母语言代码是zho。
     *
     * @param { string } locale - 待转换的语言二字母代码，如：zh。
     * @returns { string } 返回待转换语言二字母代码对应的三字母代码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getThreeLetterLanguage(locale: string): string;

    /**
     * 将地区代码由二字母转换为三字母。二字母和三字母地区代码的规格参考[ISO 3166](https://www.iso.org/iso-3166-country-codes.html)
     * 
     * 例如，中国的二字母地区代码是CN, 三字母是CHN。
     *
     * @param { string } locale - 待转换的地区二字母代码，如：CN。
     * @returns { string } 返回待转换地区二字母代码对应的三字母代码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getThreeLetterRegion(locale: string): string;

    /**
     * 对文件路径进行本地化处理。
     * 
     * 例如，将/data/out/tmp本地化处理后生成tmp/out/data/。
     *
     * @param { string } path - 待处理的路径，如：/data/out/tmp。
     * @param { string } [delimiter] - 路径分隔符，默认值：/。
     * @param { Intl.Locale } [locale] - 区域对象，默认值：系统区域对象。
     * @returns { string } 本地化处理后的文件路径。如果区域对象表示的语言是镜像语言，则处理后的文件路径包含方向控制符，保证文件路径镜像显示。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: Intl.Locale): string;

    /**
     * 对文件路径进行本地化处理。
     * 
     * 例如，将/data/out/tmp本地化处理后生成tmp/out/data/。
     *
     * @param { string } path - 待处理的路径，如：/data/out/tmp。
     * @param { string } [delimiter] - 路径分隔符，默认值：/。
     * @param { intl.Locale } [locale] - 区域对象，默认值：系统区域对象。
     * @returns { string } 本地化处理后的文件路径。如果区域对象表示的语言是镜像语言，则处理后的文件路径包含方向控制符，保证文件路径镜像显示。
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead i18n.I18NUtil.getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: Intl.Locale)
     */
    static getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: intl.Locale): string;

    /**
     * 将区域ID调整成符合[BCP47](https://www.rfc-editor.org/info/bcp47/)标准的格式。
     *
     * @param { string } locale - 区域ID。
     * @returns { string } 有效的区域ID会返回符合[BCP47](https://www.rfc-editor.org/info/bcp47/)标准格式的区域ID。无效的区域ID会返回空字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static convertCanonicalLocaleIdentifier(locale: string): string;

    /**
     * 设置整段文本中部分文本方向，包括RTL、LTR。
     * 
     * > **说明：**
     * >
     * > 在强字符（指具有明确书写方向的字符）中不生效。
     *
     * @param { string } text - 需要设置方向的文本。
     * @param { 'RTL' | 'LTR' } direction - 'RTL'表示从右到左，'LTR'表示从左到右。
     * @returns { string } 设置方向后的文本。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static setUnicodeWrappedBidiDirection(text: string, direction: 'RTL' | 'LTR'): string;
  }

  /**
   * 度量衡单位信息。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface UnitInfo {
    /**
     * 单位的名称，如：'meter', 'inch', 'cup'等。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    unit: string;

    /**
     * 单位的度量体系，取值包括：'SI', 'US', 'UK'。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    measureSystem: string;
  }

  /**
   * 电话号码格式化时可设置的配置项。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface PhoneNumberFormatOptions {
    /**
     * 表示对电话号码格式化的类型，取值包括：'E164', 'INTERNATIONAL', 'NATIONAL', 'RFC3966', 'TYPING'。
     * 
     * -在API version 8版本，type为必填项。 
     * 
     * -API version 9版本开始，type为选填项。
     * 
     * -API version 12版本开始支持TYPING，表示对拨号中的电话号码实时格式化。
     * 
     * -API version 23版本开始，TYPING支持实时获取拨号中的电话号码的归属地。
     *
     * @type { string } [since 8 - 8]
     * @type { ?string } [since 9]
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    type?: string;
  }

  /**
   * 提供电话号码相关的能力，包括电话号码有效性判断、格式化和归属地获取。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export class PhoneNumberFormat {
    /**
     * 创建电话号码格式化对象。
     *
     * @param { string } country - 表示电话号码所属的国家地区代码，要求是
     *     [合法的国家地区码](docroot://internationalization/i18n-locale-culture.md#实现原理)。
     * @param { PhoneNumberFormatOptions } [options] - 电话号码格式化时设置的配置项。默认值：NATIONAL。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * 判断电话号码是否为当前电话号码格式化对象中国家的有效号码。
     *
     * @param { string } number - 待判断的电话号码。 [since 8 - 11]
     * @param { string } phoneNumber - 待判断的电话号码。 [since 12]
     * @returns { boolean } true表示电话号码有效，false表示电话号码无效。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    isValidNumber(phoneNumber: string): boolean;

    /**
     * 对电话号码进行格式化。
     * 
     * > **说明**
     * >
     * > 从API version 12开始，支持对拨号中的电话号码进行格式化。
     *
     * @param { string } number - 待格式化的电话号码。 [since 8 - 11]
     * @param { string } phoneNumber - 待格式化的电话号码。 [since 12]
     * @returns { string } 格式化后的电话号码。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    format(phoneNumber: string): string;

    /**
     * 获取电话号码归属地。
     * 
     * > **说明**
     * >
     * > 从API version 23开始，支持对拨号中的电话号码实时获取归属地。
     *
     * @param { string } number - 电话号码。获取其他地区电话号码的归属地时，需要在电话号码前加00+国际区号。 [since 9 - 11]
     * @param { string } phoneNumber - 电话号码。获取其他地区电话号码的归属地时，需要在电话号码前加00+国际区号。 [since 12]
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @returns { string } 电话号码归属地。无效号码时返回空字符串。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getLocationName(phoneNumber: string, locale: string): string;
  }

  /**
   * 获取指定区域和历法的日历对象。
   *
   * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组成，例
   *     如zh-Hans-CN。
   * @param { string } [type] - 表示历法，取值包括：buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, 
   *     islamic_tbla, islamic_umalqura, japanese, persian。
   *     <br>默认值：区域默认的历法。不同取值代表的含义和使用场景请参考[设置日历和历法](docroot://internationalization/i18n-calendar.md)。
   * @returns { Calendar } 日历对象。
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export function getCalendar(locale: string, type?: string): Calendar;

  /**
   * 提供历法相关的能力，包括历法名称获取和日期计算等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export class Calendar {
    /**
     * 基于传入的Date对象，设置日历对象内部的时间日期。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setTime(date: Date): void;

    /**
     * 基于传入的时间戳，设置日历对象内部的时间日期。
     *
     * @param { double } time - Unix时间戳，表示从1970.1.1 00:00:00 GMT逝去的毫秒数。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setTime(time: double): void;

    /**
     * 设置日历对象的年、月、日、时、分、秒。
     *
     * @param { int } year - 设置的年。
     * @param { int } month - 设置的月。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @param { int } date - 设置的日。
     * @param { int } hour - 设置的小时。默认值：系统时间。
     * @param { int } minute - 设置的分钟。默认值：系统时间。
     * @param { int } second - 设置的秒。默认值：系统时间。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    set(year: int, month: int, date:int, hour?: int, minute?: int, second?: int): void;

    /**
     * 设置日历对象的时区。
     *
     * @param { string } timezone - 合法的时区ID，如“Asia/Shanghai”。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setTimeZone(timezone: string): void;

    /**
     * 获取日历对象的时区ID。
     *
     * @returns { string } 表示时区ID的字符串。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getTimeZone(): string;

    /**
     * 获取日历对象的周起始日。
     *
     * @returns { int } 周起始日，1代表周日，7代表周六。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getFirstDayOfWeek(): int;

    /**
     * 设置日历对象的周起始日。
     *
     * @param { int } value - 一周的起始日，1代表周日，7代表周六。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setFirstDayOfWeek(value: int): void;

    /**
     * 获取日历对象一年中第一周的最小天数。
     *
     * @returns { int } 一年中第一周的最小天数。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getMinimalDaysInFirstWeek(): int;

    /**
     * 设置日历对象一年中第一周的最小天数。
     *
     * @param { int } value - 一年中第一周的最小天数。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setMinimalDaysInFirstWeek(value: int): void;

    /**
     * 获取日历对象中日历属性的值。
     *
     * @param { string } field - 指定的日历属性，取值包括：
     *     <br>"era"：纪元，例如公历中的公元前或者公元后。
     *     <br>"year"：年。
     *     <br>"month"：月，从0开始计数，0表示一月。
     *     <br>"date"：日。
     *     <br>"hour"：挂钟小时数。
     *     <br>"hour_of_day"：一天中的第几小时。
     *     <br>"minute"：分。
     *     <br>"second"：秒。
     *     <br>"millisecond"：毫秒。
     *     <br>"week_of_year"：一年中的第几周，按照星期计算周，第一周的归属各地有区别。
     *     <br>"year_woy"：一年中的第几周，按照数值计算周，例如一年中前1~7日属于第一周。
     *     <br>"week_of_month"：一个月中的第几周，按照星期计算周。
     *     <br>"day_of_week_in_month"：一月中的第几周，按照数值计算周，例如1-7日属于第一周。
     *     <br>"day_of_year"：一年中的第几天。
     *     <br>"day_of_week"：一周中的第几天(星期)。
     *     <br>"milliseconds_in_day"：一天中的第几毫秒。
     *     <br>"zone_offset"：以毫秒计时的时区固定偏移量（不含夏令时）。
     *     <br>"dst_offset"：以毫秒计时的夏令时偏移量。
     *     <br>"dow_local"：本地星期。
     *     <br>"extended_year"：扩展的年份数值，支持负数。
     *     <br>"julian_day"：儒略日，与当前时区相关。
     *     <br>"is_leap_month"：返回1表示是闰月，返回0表示不是闰月。
     *     <br>
     * @returns { int } 日历属性的值，如当前Calendar对象的内部日期的年份为1990，get('year')返回1990。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    get(field: string): int;

    /**
     * 获取日历对象名称在指定语言下的翻译。
     *
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @returns { string } 日历对象名称在指定语言下的翻译。如buddhist在en-US上显示的名称为“Buddhist Calendar”。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getDisplayName(locale: string): string;

    /**
     * 判断指定的日期在日历对象中是否为周末。
     *
     * @param { Date } [date] - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     *     <br>默认值：日历对象的当前日期。
     * @returns { boolean } true表示指定的日期是周末，false表示指定的日期不是周末。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    isWeekend(date?: Date): boolean;

    /**
     * 对日历对象中的表示时间日期的日历属性值进行加减操作。
     *
     * @param { string } field - 指定的日历属性，目前支持的属性值有 year, month, week_of_year, week_of_month, date, day_of_year, 
     *     day_of_week, day_of_week_in_month, hour, hour_of_day, minute, second, millisecond。
     *     <br>各取值代表的含义请参考[get]{@link i18n.Calendar#get}。
     * @param { int } amount - 进行加减操作的具体数值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    add(field: string, amount: int): void;

    /**
     * 获取当前日历对象的时间戳。
     *
     * @returns { long } Unix时间戳，表示从1970.1.1 00:00:00 GMT逝去的毫秒数。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getTimeInMillis(): long;

    /**
     * 比较日历对象当前日期和指定日期相差的天数。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { int } 相差的天数，正数表示日历时间更早，负数表示指定时间更早。
     *     <br>按毫秒级的精度，不足一天按一天计。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    compareDays(date: Date): int;
  }

  /**
   * 判断语言是否为镜像语言。在镜像语言下，UI界面需要[镜像显示](docroot://internationalization/i18n-ui-design.md#界面镜像)。
   *
   * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组成。
   * @returns { boolean } true表示该语言是镜像语言，false表示该语言不是镜像语言。
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export function isRTL(locale: string): boolean;

  /**
   * 获取用于定位文本可换行点的BreakIterator对象。该对象内部维护一个换行迭代器，可以用于访问各个可换行点。
   *
   * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组成。
   *     <br>生成的[BreakIterator]{@link i18n.BreakIterator}将按照指定区域的规则计算可换行点的位置。
   * @returns { BreakIterator } 可换行点处理器。
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export function getLineInstance(locale: string): BreakIterator;

  /**
   * 提供文本换行相关的能力，包括可换行点的获取、移动和识别等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export class BreakIterator {
    /**
     * 获取换行迭代器在当前处理文本中的位置。
     *
     * @returns { int } 获取换行迭代器在当前处理的文本中的位置。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    current(): int;

    /**
     * 将换行迭代器移动到第一个可换行点。第一个可换行点总是在被处理文本的起始位置。
     *
     * @returns { int } 被处理文本的第一个可换行点的偏移量。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    first(): int;

    /**
     * 将换行迭代器移动到最后一个可换行点。最后一个可换行点总是在被处理文本末尾的下一个位置。
     *
     * @returns { int } 被处理文本的最后一个可换行点的偏移量。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    last(): int;

    /**
     * 将换行迭代器向后移动index个可换行点。
     *
     * @param { int } [index] - 换行迭代器将要移动的可换行点数，取值为整数。
     *     <br>正数表示向后移动index个可换行点，负数表示向前移动index个可换行点。
     *     <br>默认值：1。
     * @returns { int } 移动index个可换行点后，当前换行迭代器在文本中的位置。
     *     <br>若移动index个可换行点后超出了所处理的文本的长度范围，返回-1。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    next(index?: int): int;

    /**
     * 将换行迭代器向前移动一个可换行点。
     *
     * @returns { int } 移动到前一个可换行点后，当前换行迭代器在文本中的位置。
     *     <br>若移动后超出了所处理的文本的长度范围，返回-1。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    previous(): int;

    /**
     * 设置BreakIterator对象要处理的文本。
     *
     * @param { string } text - 输入文本。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    setLineBreakText(text: string): void;

    /**
     * 将换行迭代器移动到指定位置后面一个可换行点。
     *
     * @param { int } offset - 将换行迭代器移动到文本指定位置的后面一个可换行点。
     * @returns { int } 换行迭代器移动后的位置。若offset所指定位置的下一个可换行点超出了文本的范围，则返回-1。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    following(offset: int): int;

    /**
     * 获取BreakIterator对象当前处理的文本。
     *
     * @returns { string } BreakIterator对象正在处理的文本。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getLineBreakText(): string;

    /**
     * 判断指定位置是否为可换行点。
     *
     * @param { int } offset - 文本指定位置。
     * @returns { boolean } true表示offset指定的文本位置是一个可换行点，false表示offset指定的文本位置不是一个可换行点。
     *     <br>返回true时，会将换行迭代器移动到offset指定的位置，否则相当于调用following。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    isBoundary(offset: int): boolean;
  }

  /**
   * 创建并返回IndexUtil对象。
   *
   * @param { string } [locale] - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
   *     成。
   *     <br>默认值：系统当前区域ID。
   * @returns { IndexUtil } 根据区域ID创建的IndexUtil对象。
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export function getInstance(locale?:string): IndexUtil;

  /**
   * 提供索引相关的能力，包括区域索引列表和文本索引值获取。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export class IndexUtil {
    /**
     * 获取当前区域的索引列表。
     *
     * @returns { Array<string> } 当前区域的索引列表。第一个元素和最后一个元素为“...”。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getIndexList(): Array<string>;

    /**
     * 在当前区域的索引列表中，添加新区域的索引列表，形成复合列表。
     *
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    addLocale(locale: string): void;

    /**
     * 获取输入文本对应的索引值。
     *
     * @param { string } text - 输入文本。
     * @returns { string } 输入文本对应的索引值。无合适索引时返回空字符串。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getIndex(text: string): string;
  }

  /**
   * 提供Unicode字符属性相关的接口，例如：判断一个字符是否是数字。
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.Unicode
   */
  export class Character {
    /**
     * 判断输入的字符是否是数字。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是数字，false表示输入的字符不是数字。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isDigit
     */
    isDigit(ch: string): boolean;

    /**
     * 判断输入的字符是否是空格符。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是空格符，false表示输入的字符不是空格符。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isSpaceChar
     */
    isSpaceChar(ch: string): boolean;

    /**
     * 判断输入的字符是否是空白符。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是空白符，false表示输入的字符不是空白符。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isWhitespace
     */
    isWhitespace(ch: string): boolean;

    /**
     * 判断输入的字符是否是从右到左语言的字符。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是从右到左语言的字符，false表示输入的字符不是从右到左语言的字符。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isRTL
     */
    isRTL(ch: string): boolean;

    /**
     * 判断输入的字符是否是表意文字。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是表意文字，false表示输入的字符不是表意文字。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isIdeograph
     */
    isIdeograph(ch: string): boolean;

    /**
     * 判断输入的字符是否是字母。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是字母，false表示输入的字符不是字母。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isLetter
     */
    isLetter(ch: string): boolean;

    /**
     * 判断输入的字符是否是小写字母。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是小写字母，false表示输入的字符不是小写字母。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isLowerCase
     */
    isLowerCase(ch: string): boolean;

    /**
     * 判断输入的字符是否是大写字母。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { boolean } true表示输入的字符是大写字母，false表示输入的字符不是大写字母。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.isUpperCase
     */
    isUpperCase(ch: string): boolean;

    /**
     * 获取输入的字符的一般类别值。
     *
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。
     * @returns { string } 输入字符的一般类别值。
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead i18n.Unicode.getType
     */
    getType(ch: string): string;
  }

  /**
   * 提供字符属性相关的能力，包括判断字符是否为空格、数字和字母等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export class Unicode {
    /**
     * 判断输入的字符是否是数字。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是数字，false表示输入的字符不是数字。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isDigit(ch: string): boolean;

    /**
     * 判断输入的字符是否是空格符。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是空格符，false表示输入的字符不是空格符。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isSpaceChar(ch: string): boolean;

    /**
     * 判断输入的字符是否是空白符。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是空白符，false表示输入的字符不是空白符。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isWhitespace(ch: string): boolean;

    /**
     * 判断输入的字符是否是从右到左语言的字符。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是从右到左语言的字符，false表示输入的字符不是从右到左语言的字符。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isRTL(ch: string): boolean;

    /**
     * 判断输入的字符是否是表意文字。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是表意文字，false表示输入的字符不是表意文字。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isIdeograph(ch: string): boolean;

    /**
     * 判断输入的字符是否是字母。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是字母，false表示输入的字符不是字母。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isLetter(ch: string): boolean;

    /**
     * 判断输入的字符是否是小写字母。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是小写字母，false表示输入的字符不是小写字母。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isLowerCase(ch: string): boolean;

    /**
     * 判断输入的字符是否是大写字母。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { boolean } true表示输入的字符是大写字母，false表示输入的字符不是大写字母。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static isUpperCase(ch: string): boolean;

    /**
     * 获取输入的字符的一般类别值。
     *
     * @param { string } char - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 9 - 11]
     * @param { string } ch - 输入的字符。如果输入的是字符串，则只判断首字符的类别。 [since 12]
     * @returns { string } 输入字符的一般类别值。取值包括：
     *     <br>U_UNASSIGNED： 表示未分配和非字符代码点对应类别。 
     *     <br>U_GENERAL_OTHER_TYPES： 与 U_UNASSIGNED 一致。 
     *     <br>U_UPPERCASE_LETTER： 表示大写字母。 
     *     <br>U_LOWERCASE_LETTER： 表示小写字母。  
     *     <br>U_TITLECASE_LETTER： 表示首字母大写。 
     *     <br>U_MODIFIER_LETTER： 表示字母修饰符。 
     *     <br>U_OTHER_LETTER： 表示其它字母，不属于大写字母、小写字母、首字母大写或修饰符字母的字母。 
     *     <br>U_NON_SPACING_MARK： 表示非间距标记，例如重音符号'，变音符号#。 
     *     <br>U_ENCLOSING_MARK： 表示封闭标记和能围住其它字符的标记，如圆圈、方框等。 
     *     <br>U_COMBINING_SPACING_MARK： 表示间距标记，例如元音符号[ ]。 
     *     <br>U_DECIMAL_DIGIT_NUMBER： 表示十进制数字。 
     *     <br>U_LETTER_NUMBER： 表示字母数字，罗马数字。 
     *     <br>U_OTHER_NUMBER： 表示其它作为加密符号和记号的数字，非阿拉伯数字的数字表示符，例如@、#、（1）、①等。 
     *     <br>U_SPACE_SEPARATOR： 表示空白分隔符，如空格符、不间断空格、固定宽度的空白符。 
     *     <br>U_LINE_SEPARATOR： 表示行分隔符。 
     *     <br>U_PARAGRAPH_SEPARATOR： 表示段落分隔符。 
     *     <br>U_CONTROL_CHAR： 表示控制字符。 
     *     <br>U_FORMAT_CHAR： 表示格式字符。 
     *     <br>U_PRIVATE_USE_CHAR： 表示私人使用区代码点类别，例如公司 logo。 
     *     <br>U_SURROGATE： 表示代理项，在UTF-16中用来表示补充字符的方法。 
     *     <br>U_DASH_PUNCTUATION： 表示短划线标点。 
     *     <br>U_START_PUNCTUATION： 表示开始标点，如左括号。 
     *     <br>U_END_PUNCTUATION： 表示结束标点，如右括号。 
     *     <br>U_INITIAL_PUNCTUATION： 表示前引号，例如左双引号、左单引号。 
     *     <br>U_FINAL_PUNCTUATION： 表示后引号，例如右双引号、右单引号。 
     *     <br>U_CONNECTOR_PUNCTUATION： 表示连接符标点。 
     *     <br>U_OTHER_PUNCTUATION： 表示其他标点。 
     *     <br>U_MATH_SYMBOL： 表示数学符号。 
     *     <br>U_CURRENCY_SYMBOL： 表示货币符号。 
     *     <br>U_MODIFIER_SYMBOL： 表示修饰符号。 
     *     <br>U_OTHER_SYMBOL： 表示其它符号。 
     *     <br> 更详细的介绍可以参考Unicode标准。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getType(ch: string): string;

    /**
     * 识别输入字节流的编码信息。
     *
     * @param { Uint8Array } bytes - 输入字节流。
     * @returns { EncodingInfo } 编码信息，包含编码名称和置信度。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static detectEncoding(bytes: Uint8Array): EncodingInfo;
  }

  /**
   * 编码信息。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface EncodingInfo {
    /**
     * 编码名称，取值包括：UTF-8，UTF-16BE，UTF-16LE，UTF-32BE，UTF-32LE，Shift_JIS，ISO-2022-JP，ISO-2022-CN，ISO-2022-KR，GB18030，Big5，
     * EUC-JP，EUC-KR，ISO-8859-1，ISO-8859-2，ISO-8859-5，ISO-8859-6，ISO-8859-7，ISO-8859-8，ISO-8859-9，windows-1250，windows-1
     * 251，windows-1252，windows-1253，windows-1254，windows-1255，windows-1256，KOI8-R，IBM420，IBM424。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    encodingName: string;

    /**
     * 识别结果的置信度，范围是0-100。值越大，识别结果越可靠。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    confidence: int;
  }

  /**
   * 判断系统时间是否为24小时制。
   *
   * @returns { boolean } true表示系统24小时开关开启，false表示系统24小时开关关闭。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.is24HourClock
   */
  export function is24HourClock(): boolean;

  /**
   * 修改系统时间的24小时制设置。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { boolean } option - true表示开启系统24小时制开关，false表示关闭系统24小时制开关。
   * @returns { boolean } true表示修改成功，false表示修改失败。
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.set24HourClock
   */
  export function set24HourClock(option: boolean): boolean;

  /**
   * 在系统偏好语言列表的指定位置添加偏好语言。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { string } language - 待添加的偏好语言。
   * @param { int } [index] - 偏好语言的添加位置。默认值：系统偏好语言列表长度。
   * @returns { boolean } true表示添加成功，false表示添加失败。
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.addPreferredLanguage
   */
  export function addPreferredLanguage(language: string, index?: int): boolean;

  /**
   * 从系统偏好语言列表中移除指定位置的偏好语言。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { int } index - 待移除偏好语言在系统偏好语言列表中的位置。
   * @returns { boolean } true表示移除成功，false表示移除失败。
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.removePreferredLanguage
   */
  export function removePreferredLanguage(index: int): boolean;

  /**
   * 获取系统偏好语言列表。
   *
   * @returns { Array<string> } 系统偏好语言列表。
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getPreferredLanguageList
   */
  export function getPreferredLanguageList(): Array<string>;

  /**
   * 获取偏好语言列表中的第一个语言。
   *
   * @returns { string } 偏好语言列表中的第一个语言。
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead i18n.System.getFirstPreferredLanguage
   */
  export function getFirstPreferredLanguage(): string;

  /**
   * 获取时区ID对应的时区对象。
   *
   * @param { string } [zoneID] - 时区ID。默认值：系统时区。
   * @returns { TimeZone } 时区ID对应的时区对象。
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export function getTimeZone(zoneID?: string): TimeZone;

  /**
   * 提供时区相关的能力，包括时区名称翻译、偏移量获取和跳变规则获取等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export class TimeZone {
    /**
     * 获取时区对象的ID。
     *
     * @returns { string } 时区对象对应的时区ID。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    getID(): string;

    /**
     * 获取时区对象名称在指定语言下的翻译。
     *
     * @param { string } [locale] - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区
     *     组成。默认值：系统当前区域ID。
     * @param { boolean } [isDST] - true表示显示夏令时信息，false表示不显示夏令时信息。默认值：false。
     * @returns { string } 时区对象名称在指定语言下的翻译。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    getDisplayName(locale?: string, isDST?: boolean): string;

    /**
     * 获取时区对象所表示时区的原始偏移量。
     *
     * @returns { int } 时区的原始偏移量，单位为毫秒（ms）。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    getRawOffset(): int;

    /**
     * 获取某一时刻时区对象所表示时区的偏移量。
     *
     * @param { double } [date] - 待计算时区偏移量的时刻，单位为毫秒（ms）。默认值：系统时间。
     * @returns { int } 时区的偏移量，单位为毫秒（ms）。当处于夏令时时，时区偏移量为时区原始偏移量加夏令时偏移量。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    getOffset(date?: double): int;

    /**
     * 获取系统支持的时区ID列表。
     *
     * @returns { Array<string> } 系统支持的时区ID列表。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getAvailableIDs(): Array<string>;

    /**
     * 获取系统支持的时区城市ID列表。
     *
     * @returns { Array<string> } 系统支持的时区城市ID列表。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getAvailableZoneCityIDs(): Array<string>;

    /**
     * 获取时区城市名称在指定语言下的翻译。
     *
     * @param { string } cityID - 时区城市ID。
     * @param { string } locale - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区组
     *     成。
     * @returns { string } 时区城市名称在指定语言下的翻译。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getCityDisplayName(cityID: string, locale: string): string;

    /**
     * 创建对应时区城市的时区对象。
     *
     * @param { string } cityID - 时区城市ID，要求是系统支持的时区城市ID。
     * @returns { TimeZone } 时区城市对应的时区对象。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getTimezoneFromCity(cityID: string): TimeZone;

    /**
     * 创建地理位置对应的时区对象数组。
     *
     * @param { double } longitude - 经度，范围[-180, 179.9)，东经取正值，西经取负值。
     * @param { double } latitude - 纬度，范围[-90, 89.9)，北纬取正值，南纬取负值。
     * @returns { Array<TimeZone> } 时区对象数组，数组中对象对应的时区为该地理位置推荐的时区。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    static getTimezonesByLocation(longitude: double, latitude: double): Array<TimeZone>;

    /**
     * 获取时区跳变规则，时区的跳变逻辑参考[夏令时跳变](docroot://internationalization/i18n-dst-transition.md)。
     *
     * @returns { ZoneRules } 时区跳变规则，包含跳变的时间点、跳变前后的偏移量信息。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    public getZoneRules(): ZoneRules;

    /**
     * 判断指定的时间日期是否处于夏令时。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { boolean } 是否处于夏令时。true表示处于夏令时，false表示不处于夏令时。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public isDaylightSavingTime(date: Date): boolean;

    /**
     * 设置当前应用的默认时区，在应用运行时生命周期内有效。
     * 
     * > **说明：**
     * >
     * > 进行日期时间格式化时，若未指定时区，会优先使用应用设置的默认时区。
     *
     * @param { string } zoneID - 应用设置默认的时区ID，如："Asia/Shanghai"。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static setAppDefaultTimeZoneById(zoneID: string): void;

    /**
     * 获取应用使用的默认时区对象。若调用[setAppDefaultTimeZoneById]{@link i18n.TimeZone#setAppDefaultTimeZoneById}设置了默认时区，则返回设置的默认时区对象；否
     * 则，返回系统时区对象。
     *
     * @returns { TimeZone } 应用使用的默认时区对象。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static getAppDefaultTimeZone(): TimeZone;
  }

  /**
   * 提供查询时区跳变规则的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export class ZoneRules {
    /**
     * 获取指定时间的下一个时区跳变对象。
     *
     * @param { double } [ date ] - 从1970年1月1日0时0分0秒到指定时间之间的毫秒数。
     *     <br>默认值：系统时间。
     * @returns { ZoneOffsetTransition } 时区跳变对象。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    public nextTransition(date?: double): ZoneOffsetTransition;
  }

  /**
   * 提供解析时区跳变规则的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export class ZoneOffsetTransition {
    /**
     * 获取时区跳变点的时间戳。
     *
     * @returns { double } 从1970年1月1日0时0分0秒到时区跳变点之间的毫秒数，例如：1762074000000，单位为毫秒（ms）。如果当前时区
     *     [原始偏移量]{@link i18n.TimeZone#getRawOffset}保持不变并且不使用夏令时，则返回0。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    public getMilliseconds(): double;

    /**
     * 获取时区跳变后的偏移量。
     *
     * @returns { int } 时区跳变后的偏移量，表示跳变后的时间相对于标准时间（协调世界时UTC）的时间差，单位为毫秒（ms）。
     *         例如：-28800000表示跳变后的时间比标准时间慢28800000毫秒（8小时）。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    public getOffsetAfter(): int;

    /**
     * 获取时区跳变前的偏移量。
     *
     * @returns { int } 时区跳变前的偏移量，表示跳变前的时间相对于标准时间（协调世界时UTC）的时间差，单位为毫秒（ms）。
     *         例如：-25200000表示跳变前的时间比标准时间慢25200000毫秒（7小时）。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    public getOffsetBefore(): int;
  }

  /**
   * 提供文本音译相关的能力，包括音译支持范围获取和文本音译等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export class Transliterator {
    /**
     * 获取音译支持的转换ID列表。
     *
     * @returns { string[] } 音译支持的转换ID列表。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getAvailableIDs(): string[];

    /**
     * 创建指定转换ID的音译对象。
     *
     * @param { string } id - 音译支持的转换ID。
     * @returns { Transliterator } 音译对象。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    static getInstance(id: string): Transliterator;

    /**
     * 将输入文本从源格式转换为目标格式。
     *
     * @param { string } text - 输入文本。
     * @returns { string } 转换后的文本。
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    transform(text: string): string;
  }

  /**
   * 文本标准化范式的枚举。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum NormalizerMode {
    /**
     * NFC范式。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    NFC = 1,
    /**
     * NFD范式。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    NFD = 2,
    /**
     * NFKC范式。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    NFKC = 3,
    /**
     * NFKD范式。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    NFKD = 4
  }

  /**
   * 提供文本标准化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  export class Normalizer {
    /**
     * 获取文本标准化对象。
     *
     * @param { NormalizerMode } mode - 文本标准化范式。
     * @returns { Normalizer } 返回指定范式的文本标准化对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    static getInstance(mode: NormalizerMode): Normalizer;

    /**
     * 对字符串进行标准化处理。
     *
     * @param { string } text - 输入文本。
     * @returns { string } 标准化处理后的字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    normalize(text: string): string;
  }

  /**
   * 语言或国家地区的推荐类型。
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum SuggestionType {
    /**
     * 非推荐语言或国家地区。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_NONE = 0,
    /**
     * 系统语言推荐的国家地区或系统国家地区推荐的语言。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_RELATED = 1,
    /**
     * SIM卡国家地区推荐的语言。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_SIM = 2,
  }

  /**
   * 语言或国家地区排序选项。
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface SortOptions {
    /**
     * 表示区域ID的字符串，由语言、脚本、国家或地区组成，如"zh-Hans-CN"。
     * 默认值：系统当前区域ID。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * true表示使用本地名称进行排序，false表示不使用本地名称进行排序。
     * 若调用方法为getLanguageInfoArray，isUseLocalName属性默认值为true。
     * 若调用方法为getRegionInfoArray，isUseLocalName属性默认值为false。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    isUseLocalName?: boolean;

    /**
     * true表示将推荐语言或国家地区在排序结果中置顶，false表示不将推荐语言或国家地区在排序结果中置顶。
     * 默认值：true。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    isSuggestedFirst?: boolean;
  }

  /**
   * 语言或国家地区的组合信息。
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocaleItem {
    /**
     * 语言代码或国家地区代码，如"zh"、"CN"。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 语言或国家地区推荐类型。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    suggestionType: SuggestionType;

    /**
     * id在SystemLocaleManager的指定区域下的表示。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    displayName: string;

    /**
     * id的本地名称。只有在表示语言相关信息时才存在该选项。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    localName?: string;
  }

  /**
   * 时区城市的组合信息。
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TimeZoneCityItem {
    /**
     * 时区ID，例如Asia/Shanghai。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    zoneId: string;

    /**
     * 城市ID，例如Shanghai。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cityId: string;

    /**
     * 城市ID在系统区域下显示的名称。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cityDisplayName: string;

    /**
     * 时区ID的偏移量，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;

    /**
     * 时区ID在系统区域下显示的名称。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    zoneDisplayName: string;

    /**
     * 时区ID的固定偏移量，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    rawOffset?: int;
  }

  /**
   * 提供语言、地区和时区信息排序的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export class SystemLocaleManager {
    /**
     * 创建SystemLocaleManager对象。
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 26.0.0]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 获取排序后的语言信息列表。
     *
     * @param { Array<string> } languages - 待排序的语言列表，要求是合法的语言ID。
     * @param { SortOptions } options - 语言排序选项。默认值：所有属性都取默认值时的配置项。
     * @returns { Array<LocaleItem> } 排序后的语言信息列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getLanguageInfoArray(languages: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * 获取排序后的国家或地区信息列表。
     *
     * @param { Array<string>  } regions - 待排序的国家或地区列表，要求是合法的国家或地区ID。
     * @param { SortOptions } options - 国家或地区排序选项。
     *     区域ID的默认值为系统当前区域ID，isUseLocalName的默认值为false，isSuggestedFirst的默认值为true。
     * @returns { Array<LocaleItem> } 排序后的国家或地区信息列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API. [since 12]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getRegionInfoArray(regions: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * 获取排序后的时区城市组合信息列表。
     *
     * @returns { Array<TimeZoneCityItem> } 排序后的时区城市组合信息列表。
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a systemAPI. [since 12]
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static getTimeZoneCityItemArray(): Array<TimeZoneCityItem>;
  }

  /**
   * 节假日信息。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface HolidayInfoItem {
    /**
     * 节假日的英文名称。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    baseName: string;

    /**
     * 节假日所在年。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    year: int;

    /**
     * 节假日所在月。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    month: int;

    /**
     * 节假日所在日。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    day: int;

    /**
     * 节假日的本地名称列表。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    localNames?: Array<HolidayLocalName>;
  }

  /**
   * 节假日名称在不同语言下的翻译。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface HolidayLocalName {
    /**
     * 语言，例如ar，en，tr。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    language: string;

    /**
     * 节假日的本地名称，例如Sacrifice Feast（宰牲节）的土耳其语名称为Kurban Bayrami。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;
  }

  /**
   * 提供解析节假日数据的能力，包括节假日判断和指定年份节假日列表获取等。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export class HolidayManager {
    /**
     * 创建HolidayManager对象，用于解析节假日数据。
     *
     * @param { String } icsPath - 在设备上有应用读取权限的iCalendar格式的ics文件路径。iCalendar格式是一种标准的互联网日历格式，用于存储日历数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(icsPath: String);

    /**
     * 判断指定的日期是否是节假日。
     *
     * @param { Date } [date] - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     *     <br>默认值：当前日期。
     * @returns { boolean } true表示指定的日期是节假日，false表示指定的日期不是节假日。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    isHoliday(date?: Date): boolean;

    /**
     * 获取指定年的节假日信息列表。
     *
     * @param { int } [year] - 年，例如2023。
     *     <br>默认值：当前年份。
     * @returns { Array<HolidayInfoItem> } 返回节假日信息列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getHolidayInfoItemArray(year?: int): Array<HolidayInfoItem>;
  }

  /**
   * 实体信息属性。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface EntityInfoItem {
    /**
     * 实体在输入字符串中的起始位置。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    begin: int;

    /**
     * 实体在输入字符串中的终止位置。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    end: int;

    /**
     * 实体的类型，当前支持phone_number和date类型。phone_number表示实体类型是电话号码，date表示实体类型是时间日期。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;
  }

  /**
   * 提供实体识别相关的能力，可以获取文本中实体的类型和起止位置。当前支持识别的实体包括电话号码和时间日期。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export class EntityRecognizer {
    /**
     * 创建实体识别对象。该对象根据区域规则识别文本中的实体。
     *
     * @param { string } [locale] - [表示区域ID的字符串](docroot://internationalization/i18n-locale-culture.md#实现原理)，由语言、脚本、国家地区
     *     组成，例如zh-Hans-CN。
     *     <br>默认值：系统当前区域ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(locale?: string);

    /**
     * 获取文本中的实体信息。
     *
     * @param { string } text - 输入文本。
     * @returns { Array<EntityInfoItem> } 文本中的实体信息列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    findEntityInfo(text: string): Array<EntityInfoItem>;
  }

  /**
   * 通过模式字符串获取SimpleDateTimeFormat对象。与[getSimpleDateTimeFormatBySkeleton]{@link i18n.getSimpleDateTimeFormatBySkeleton}接
   * 口获取的对象在格式化后显示差异请参考[SimpleDateTimeFormat.format]{@link i18n.SimpleDateTimeFormat#format}的示例。
   *
   * @param { string } pattern - 合法的模式字符串，支持
   *     [日期字段符号表](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)中Field Patterns值的自由组合。同
   *     时，pattern支持传入自定义文本，文本内容以`''`标识。
   * @param { Intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat对象。
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale): SimpleDateTimeFormat;

  /**
   * 通过模式字符串获取SimpleDateTimeFormat对象。与[getSimpleDateTimeFormatBySkeleton]{@link i18n.getSimpleDateTimeFormatBySkeleton}接
   * 口获取的对象在格式化后显示差异请参考[SimpleDateTimeFormat.format]{@link i18n.SimpleDateTimeFormat#format}的示例。
   *
   * @param { string } pattern - 合法的模式字符串，支持
   *     [日期字段符号表](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)中Field Patterns值的自由组合。同
   *     时，pattern支持传入自定义文本，文本内容以`''`标识。
   * @param { intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat对象。
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead i18n.getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale)
   */
  export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: intl.Locale): SimpleDateTimeFormat;

  /**
   * 通过框架字符串获取SimpleDateTimeFormat对象。与[getSimpleDateTimeFormatByPattern]{@link i18n.getSimpleDateTimeFormatByPattern}接口获
   * 取的对象在格式化后显示差异请参考[SimpleDateTimeFormat.format]{@link i18n.SimpleDateTimeFormat#format}的示例。
   *
   * @param { string } skeleton - 合法的框架字符串，支持
   *     [日期字段符号表](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)中Field Patterns值的自由组合。
   *     skeleton不支持传入自定义文本。
   * @param { Intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat对象。
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat;

  /**
   * 通过框架字符串获取SimpleDateTimeFormat对象。与[getSimpleDateTimeFormatByPattern]{@link i18n.getSimpleDateTimeFormatByPattern}接口获
   * 取的对象在格式化后显示差异请参考[SimpleDateTimeFormat.format]{@link i18n.SimpleDateTimeFormat#format}的示例。
   *
   * @param { string } skeleton - 合法的框架字符串，支持
   *     [日期字段符号表](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)中Field Patterns值的自由组合。
   *     skeleton不支持传入自定义文本。
   * @param { intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat对象。
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead i18n.getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale)
   */
  export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat;

  /**
   * 提供时间日期格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class SimpleDateTimeFormat {
    /**
     * 对时间日期进行格式化。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { string } 格式化后的时间日期字符串。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(date: Date): string;
  }

  /**
   * 通过框架字符串获取SimpleNumberFormat对象。
   *
   * @param { string } skeleton - 合法的框架字符串，支持的字符及含义请参考
   *     [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)。
   * @param { Intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleNumberFormat } SimpleNumberFormat对象。
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat;

  /**
   * 通过框架字符串获取SimpleNumberFormat对象。
   *
   * @param { string } skeleton - 合法的框架字符串，支持的字符及含义请参考
   *     [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)。
   * @param { intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
   * @returns { SimpleNumberFormat } SimpleNumberFormat对象。
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead i18n.getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale)
   */
  export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat;

  /**
   * 基于框架字符串提供数字格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class SimpleNumberFormat {
    /**
     * 对数字进行格式化。
     *
     * @param { double } value - 数字对象。
     * @returns { string } 格式化后的数字字符串。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(value: double): string;
  }

  /**
   * 提供富文本数字格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class StyledNumberFormat {
    /**
     * 创建需要富文本显示的数字格式化的对象。
     *
     * @param { Intl.NumberFormat | SimpleNumberFormat } numberFormat - 用于格式化数字的对象。
     * @param { StyledNumberFormatOptions } [ options ] - 指定数字格式化对象的配置项。默认值：默认的文本样式。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(numberFormat: Intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions);

    /**
     * 创建需要富文本显示的数字格式化的对象。
     *
     * @param { intl.NumberFormat | SimpleNumberFormat } numberFormat - 用于格式化数字的对象。
     * @param { StyledNumberFormatOptions } [ options ] - 指定数字格式化对象的配置项。默认值：默认的文本样式。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead i18n.StyledNumberFormat.constructor(numberFormat: Intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions)
     */
    constructor(numberFormat: intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions);

    /**
     * 使用数字格式化对象对数字进行格式化，返回富文本对象。
     *
     * @param { double } value - 需要格式化的数字。
     * @returns { StyledString } 格式化后的富文本对象。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(value: double): StyledString;
  }

  /**
   * 创建富文本显示的数字格式化对象时的可选配置项。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface StyledNumberFormatOptions {
    /**
     * 指定整数部分的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    integer?: TextStyle;

    /**
     * 指定小数点的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    decimal?: TextStyle;

    /**
     * 指定小数部分的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    fraction?: TextStyle;

    /**
     * 指定单位部分的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    unit?: TextStyle;
  }

  /**
   * 提供富文本时间日期格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 dynamic&static
   */
  export class StyledDateTimeFormat {
    /**
     * 创建需要富文本显示的时间日期格式化的对象。
     *
     * @param { Intl.DateTimeFormat | SimpleDateTimeFormat } dateTimeFormat - 用于格式化时间日期的对象。
     * @param { StyledDateTimeFormatOptions } [ options ] - 指定时间日期格式化对象的配置项。默认值：默认的文本样式。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    constructor(dateTimeFormat: Intl.DateTimeFormat | SimpleDateTimeFormat,
        options?: StyledDateTimeFormatOptions);

    /**
     * 对时间日期进行格式化，返回富文本对象。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { StyledString } 格式化后的富文本对象。
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    format(date: Date): StyledString;
  }

  /**
   * 创建富文本显示的时间日期格式化对象时的可选配置项。
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 dynamic&static
   */
  export interface StyledDateTimeFormatOptions {
    /**
     * 指定年的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    year?: TextStyle;

    /**
     * 指定月的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    month?: TextStyle;

    /**
     * 指定日的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    day?: TextStyle;

    /**
     * 指定时的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    hour?: TextStyle;

    /**
     * 指定分的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    minute?: TextStyle;

    /**
     * 指定秒的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    second?: TextStyle;

    /**
     * 指定时段的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    dayPeriod?: TextStyle;

    /**
     * 指定星期的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    weekday?: TextStyle;

    /**
     * 指定纪元的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    era?: TextStyle;

    /**
     * 指定时区名称的文本样式。默认值：StyledString默认的文本样式。
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    timeZoneName?: TextStyle;
  }

  /**
   * 提供数字格式化能力，支持根据单位使用场景自动转换合适的单位。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export class AdvancedMeasureFormat {
    /**
     * 创建数字格式化对象。
     *
     * @param { Intl.NumberFormat } numberFormat - 用于格式化数字的对象。
     * @param { AdvancedMeasureFormatOptions } [ options ] - 指定数字格式化对象的配置项。默认值：与
     *     [numberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
     *     格式化效果一样。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    constructor(numberFormat: Intl.NumberFormat, options?: AdvancedMeasureFormatOptions);

    /**
     * 对数字进行格式化。
     *
     * @param { double } num - 需要格式化的数字。
     * @returns { string } 格式化后的文本。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    format(num: double): string;
  }

  /**
   * 创建数字格式化对象时的可选配置项。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export interface AdvancedMeasureFormatOptions {
    /**
     * 单位格式化使用场景的枚举。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    unitUsage?: UnitUsage;
  }

    /**
     * 单位格式化使用场景的枚举。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    export enum UnitUsage {
    /**
     * 农业土地面积。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    AREA_LAND_AGRICULT = 1,

    /**
     * 商业土地面积。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    AREA_LAND_COMMERCL = 2,

    /**
     * 居住土地面积。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    AREA_LAND_RESIDNTL = 3,

    /**
     * 身高。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_PERSON = 4,

    /**
     * 高精度的身高。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_PERSON_SMALL = 5,

    /**
     * 降雨量。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_RAINFALL = 6,

    /**
     * 道路长度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_ROAD = 7,

    /**
     * 高精度的道路长度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_ROAD_SMALL = 8,

    /**
     * 降雪量。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_SNOWFALL = 9,

    /**
     * 交通工具长度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_VEHICLE = 10,

    /**
     * 能见度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_VISIBLTY = 11,

    /**
     * 高精度的能见度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_VISIBLTY_SMALL = 12,

    /**
     * 口语化身高。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_PERSON_INFORMAL = 13,

    /**
     * 高精度的口语化身高。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_PERSON_SMALL_INFORMAL = 14,

    /**
     * 口语化道路长度。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    LENGTH_ROAD_INFORMAL = 15,

    /**
     * 车速。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    SPEED_ROAD_TRAVEL = 16,

    /**
     * 风速。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    SPEED_WIND = 17,

    /**
     * 体温。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    TEMPERATURE_PERSON = 18,

    /**
     * 气温。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    TEMPERATURE_WEATHER = 19,

    /**
     * 交通工具燃料容积。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    VOLUME_VEHICLE_FUEL = 20,

    /**
     * 过去的时间。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    ELAPSED_TIME_SECOND = 21,

    /**
     * 文件大小。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    SIZE_FILE_BYTE = 22,

    /**
     * 简短的文件大小。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    SIZE_SHORTFILE_BYTE = 23
  }

    /**
     * 提供自定义时间日期符号的能力。继承自
     * [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)，
     * 支持
     * [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
     * 的方法。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    export class SymbolDateTimeFormat extends Intl.DateTimeFormat {
    /**
     * 创建使用自定义符号的时间日期格式化对象。
     *
     * @param { Intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
     * @param { SymbolDateTimeFormatOptions } [options] - 自定义符号时间日期格式化的配置项。默认值：区域对象默认的符号。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions);

    /**
     * 对时间日期进行格式化，返回使用自定义符号的时间日期字符串。
     *
     * @param { Date | number } [date] - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     *     <br>默认值：系统时间。
     * @returns { string } 使用自定义符号的时间日期字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public format(date?: Date | number): string;

    /**
     * 对时间日期范围进行格式化。自定义符号在该接口上暂不生效。
     *
     * @param { Date | number | bigint } startDate - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     * @param { Date | number | bigint } endDate - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     * @returns { string } 格式化后的时间日期范围字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string;

    /**
     * 把时间日期范围格式化成时间日期元素数组。自定义符号在该接口上暂不生效。
     *
     * @param { Date | number | bigint } startDate - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     * @param { Date | number | bigint } endDate - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     * @returns { Intl.DateTimeRangeFormatPart[] } 时间日期范围元素数组。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint):
      Intl.DateTimeRangeFormatPart[];
    /**
     * 对时间日期进行格式化，返回使用自定义符号的时间日期元素数组。
     *
     * @param { Date | number } [date] - 时间日期对象或时间日期对应的毫秒值。时间日期对象中月份从0开始计数，0表示一月。
     *     <br>默认值：系统时间。
     * @returns { Intl.DateTimeFormatPart[] } 使用自定义符号的时间日期元素数组。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatToParts(date?: Date | number): Intl.DateTimeFormatPart[];

    /**
     * 解析本地化时间日期字符串，返回对应的时间戳。
     *
     * @param { string } text - 待解析的本地化时间日期字符串。
     * @param { boolean } lenientMode - 是否采用宽松模式，true表示采用宽松模式，false表示不采用宽松模式。
     *     <br>宽松模式下，能够处理不符合常规逻辑的时间日期值，如"5月32日"会自动转换成"6月1日"进行解析。
     * @returns { number } 时间日期字符串解析后对应的时间戳，单位为毫秒（ms）。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public parse(text: string, lenientMode: boolean): number;

    /**
     * 解析自定义时间日期符号的配置项。
     *
     * @returns { ResolvedSymbolDateTimeFormatOptions } 自定义符号时间日期格式化对象配置项的解析结果。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions;
  }

  /**
   * 创建自定义符号时间日期格式化对象时的可选配置项。继承自Intl.DateTimeFormatOptions，
   * 支持Intl.DateTimeFormatOptions的所有配置项，并且功能与其一致。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface SymbolDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
    /**
     * 指定的上午和下午符号，要求数组长度不小于2，其中第一个元素为上午符号，第二个元素为下午符号。
     * 默认值：区域默认的符号。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    amPMSymbol?: string[] | undefined;
  }

  /**
   * 自定义符号时间日期格式化对象配置项的解析结果。继承自Intl.ResolvedDateTimeFormatOptions，
   * 支持Intl.ResolvedDateTimeFormatOptions的所有配置项，并且功能与其一致。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface ResolvedSymbolDateTimeFormatOptions extends Intl.ResolvedDateTimeFormatOptions {
    /**
     * 指定的上午和下午符号，其中第一个元素为上午符号，第二个元素为下午符号。
     * 默认值：区域默认的符号。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    amPMSymbol?: string[];
  }

  /**
   * 提供自定义数字符号的能力。继承自
   * [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)，
   * 支持
   * [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
   * 的方法。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export class SymbolNumberFormat implements Intl.NumberFormat {
    /**
     * 创建使用自定义符号的数字格式化对象。
     *
     * @param { Intl.Locale } [locale] - 区域对象。默认值：系统区域对象。
     * @param { SymbolNumberFormatOptions } [options] - 自定义数字格式化符号的配置项。默认值：区域默认的符号。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public constructor(locale?: Intl.Locale, options?: SymbolNumberFormatOptions);

    /**
     * 对数字进行格式化，返回使用自定义符号的数字字符串。
     *
     * @param { number | bigint } value - 待格式化的数字。
     * @returns { string } 使用自定义符号的数字字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public format(value: number | bigint): string;

    /**
     * 对数字范围进行格式化，返回使用自定义符号的数字范围字符串。
     *
     * @param { number } startRange - 起始数字。
     * @param { number } endRange - 终止数字。
     * @returns { string } 使用自定义符号的数字范围字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatRange(startRange: number, endRange: number): string;

    /**
     * 对数字进行格式化，返回使用自定义符号的数字元素数组。
     *
     * @param { number | bigint } [value] - 待格式化的数字。默认值：NaN。
     * @returns { Intl.NumberFormatPart[] } 使用自定义符号的数字元素数组。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatToParts(value?: number | bigint): Intl.NumberFormatPart[];

    /**
     * 对数字范围进行格式化，返回使用自定义符号的数字元素数组。
     *
     * @param { number } startRange - 起始数字。
     * @param { number } endRange - 终止数字。
     * @returns { Intl.NumberFormatPart[] } 使用自定义符号的数字元素数组。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public formatRangeToParts(startRange: number, endRange: number): Intl.NumberFormatPart[];

    /**
     * 解析本地化数字字符串，返回对应的数字。无法正确解析使用自定义符号的本地化数字字符串。
     *
     * @param { string } text - 待解析的本地化数字字符串。
     * @param { boolean } lenientMode - 是否采用宽松模式，true表示采用宽松模式，false表示不采用宽松模式。
     *     <br>宽松模式下，能够识别错误的千分符，如"1,23,456"可以正确解析为"123456"。
     * @returns { number } 本地化数字字符串解析后的数字。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public parse(text: string, lenientMode: boolean): number;

    /**
     * 解析自定义数字符号的配置项。
     *
     * @returns  { ResolvedSymbolNumberFormatOptions } 自定义符号数字格式化对象配置项的解析结果。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public resolvedOptions(): ResolvedSymbolNumberFormatOptions;
  }

  /**
   * 创建自定义符号数字格式化对象时的可选配置项。继承自Intl.NumberFormatOptions，
   * 支持Intl.NumberFormatOptions的所有配置项，并且功能与其一致。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface SymbolNumberFormatOptions extends Intl.NumberFormatOptions {
    /**
     * 零符号。默认值：区域默认的符号。例如："0"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    zero?: string | undefined;

    /**
     * NaN符号。默认值：区域默认的符号。例如："null"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    nan?: string | undefined;

    /**
     * 减符号。默认值：区域默认的符号。例如："-"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    minusSign?: string | undefined;

    /**
     * 加符号。默认值：区域默认的符号。例如："+"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    plusSign?: string | undefined;

    /**
     * 无穷符号。默认值：区域默认的符号。例如："∞"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    infinity?: string | undefined;

    /**
     * 分组符号。默认值：区域默认的符号。例如：","。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    groupingSeparator?: string | undefined;
  }

  /**
   * 自定义符号数字格式化对象配置项的解析结果。继承自Intl.ResolvedNumberFormatOptions，
   * 支持Intl.ResolvedNumberFormatOptions的所有配置项，并且功能与其一致。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface ResolvedSymbolNumberFormatOptions extends Intl.ResolvedNumberFormatOptions {
    /**
     * 零符号。默认值：区域默认的符号。例如："0"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    zero?: string;

    /**
     * NaN符号。默认值：区域默认的符号。例如："null"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    nan?: string;

    /**
     * 减符号。默认值：区域默认的符号。例如："-"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    minusSign?: string;

    /**
     * 加符号。默认值：区域默认的符号。例如："+"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    plusSign?: string;

    /**
     * 无穷符号。默认值：区域默认的符号。例如："∞"。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    infinity?: string;

    /**
     * 分组符号。默认值：区域默认的符号。例如：","。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    groupingSeparator?: string;
  }

  /**
   * 符合ISO 8601标准的日期格式化对象。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export class ISO8601DateTimeFormat {
    /**
     * 创建符合ISO 8601标准的日期格式化对象。
     *
     * @param { ISO8601DateTimeFormatOptions } [options] - 符合ISO 8601标准的日期格式化对象创建时的配置项。默认值：所有属性都取默认值时的配置项。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public constructor(options?: ISO8601DateTimeFormatOptions);

    /**
     * 对时间日期进行格式化，返回符合ISO 8601标准的时间日期字符串。
     *
     * @param { Date } date - 时间日期。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { string } 符合ISO8601标准的时间日期字符串。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public format(date: Date): string;
  }

  /**
   * 符合ISO 8601标准的日期格式化对象创建时的配置项。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface ISO8601DateTimeFormatOptions {
    /**
     * 日期格式。取值包括：
     * 
     * **calendar**：日期模式为**YYYY-MM-DD**。
     * 
     * **ordinal**：日期模式为**YYYY-DDD**。
     * 
     * **week**：日期模式为**YYYY-Www-D**。
     * 
     * 默认值：**calendar**。模式中字符含义参考
     * [日期字段符号表](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    dateFormat?: 'calendar' | 'ordinal' | 'week';

    /**
     * 时间精度。取值包括：
     * 
     * **dateOnly**：只显示日期。
     * 
     * **hours**：显示小时。
     * 
     * **minutes**：显示时分。
     * 
     * **seconds**：显示时分秒。
     * 
     * **milliSeconds**：显示时分秒毫秒。
     * 
     * 默认值：**seconds**。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    timePrecision?: 'dateOnly' | 'hours' | 'minutes' | 'seconds' | 'milliSeconds';

    /**
     * 分隔符风格。取值包括：
     * 
     * **extended**：显示日期和时间分隔符。
     * 
     * **basic**：不显示日期和时间分隔符。
     * 
     * 默认值：**extended**。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    separatorStyle?: 'extended' | 'basic';

    /**
     * 时区。默认值：**UTC**。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    timeZone?: TimeZone;

    /**
     * 是否显示时区，true表示显示时区，false表示不显示时区。默认值：true。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    displayTimeZone?: boolean;
  }

  /**
   * 获取指定区域的农历对象。
   *
   * @param { Intl.Locale } [locale] - 区域对象，默认值：系统区域对象。
   * @returns { ChineseCalendar } 农历对象。
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export function getChineseCalendar(locale?: Intl.Locale): ChineseCalendar;

  /**
   * 提供农历相关的能力，包括设置农历时间、判断指定年份某月是否存在闰月。
   * 继承自[Calendar]{@link i18n.Calendar}，支持[Calendar]{@link i18n.Calendar}的方法。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export class ChineseCalendar extends Calendar {
    /**
     * 设置农历对象的时间日期。
     *
     * @param { ChineseCalendarTime } chineseCalendarTime - 农历时间对象。
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public setChineseCalendarTime(chineseCalendarTime: ChineseCalendarTime): void;

    /**
     * 判断指定年份某月是否存在闰月。
     *
     * @param { int } gregorianYear - 公历的年。
     *     <br>取值范围：[1900, 2100]。
     * @param { int } cyclicalYear - 农历的干支年。
     *     <br>取值范围：[1, 60]。
     * @param { int } month - 农历的月。
     *     <br>**说明：** 
     *     <br>月份从0开始计数，0表示一月。
     * @returns { boolean } 是否存在闰月。true表示该月存在闰月，false表示该月不存在闰月。
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    public static checkLeapMonth(gregorianYear: int, cyclicalYear: int, month: int): boolean;
  }

  /**
   * 农历时间对象。
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export interface ChineseCalendarTime {
    /**
     * 公历的年。
     * 
     * 取值范围：[1900, 2100]。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    gregorianYear: int;

    /**
     * 农历的干支年。
     * 
     * 取值范围：[1, 60]。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    cyclicalYear: int;

    /**
     * 农历的月。
     * 
     * **说明：** 
     * 
     * 月份从0开始计数，0表示一月。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    month: int;

    /**
     * 农历的日。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    date: int;

    /**
     * 是否是闰月。默认值：false。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    isLeapMonth?: boolean;

    /**
     * 农历的时。默认值：0。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    hour?: int;

    /**
     * 农历的分。默认值：0。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    minute?: int;

    /**
     * 农历的秒。默认值：0。
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    second?: int;
  }
}
export default i18n;