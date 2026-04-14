'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit LocalizationKit
 */

import { BusinessError } from './@ohos.base';
import intl from './@ohos.intl';
import { StyledString, TextStyle } from './arkui/component/styledString';

/**
 * Provides international settings related APIs.
 *
 * @namespace i18n
 * @syscap SystemCapability.Global.I18n
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 static
 */
declare namespace i18n {

  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  export class System {
    /**
     * Obtains the country/region display name in the specified language.
     *
     * @param { string } country - Valid country/region code.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
     *                                     display the text in title case format, and the value "false" means to
     *                                     display the text in the default case format of the locale. The default value
     *                                     is true.
     * @returns { string } Country/region display name in the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains the language display name in the specified language.
     *
     * @param { string } language - Valid language ID.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
     *                                     display the text in title case format, and the value "false" means to
     *                                     display the text in the default case format of the locale. The default value
     *                                     is true.
     * @returns { string } Language display name in the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains the list of system languages.
     *
     * @returns { Array<string> } List of system languages.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the list of system languages.
     *
     * @returns { Array<string> } List of system languages.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getSystemLanguages(): Array<string>;

    /**
     * Obtains the list of countries/regions supported for the specified language.
     *
     * @param { string } language - Valid language ID.
     * @returns { Array<string> } List of countries/regions supported for the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the list of countries/regions supported for the specified language.
     *
     * @param { string } language - Valid language ID.
     * @returns { Array<string> } List of countries/regions supported for the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getSystemCountries(language: string): Array<string>;

    /**
     * Checks whether a language is a suggested language in the specified region. It can be used for region-based
     * language recommendation or language-based region recommendation.
     *
     * @param { string } language - Valid language ID, for example, "zh".
     * @param { string } [region] - Valid region ID, for example, "CN". The default value is the country/region of the
     *                              SIM card.
     * @returns { boolean } Whether a language is a suggested language. The value "true" indicates that the language
     *                      is a suggested language of the region, the the value "false" indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Checks whether a language is a suggested language in the specified region. It can be used for region-based
     * language recommendation or language-based region recommendation.
     *
     * @param { string } language - Valid language ID, for example, "zh".
     * @param { string } [region] - Valid region ID, for example, "CN". The default value is the country/region of the
     *                              SIM card.
     * @returns { boolean } Whether a language is a suggested language. The value "true" indicates that the language
     *                      is a suggested language of the region, the the value "false" indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static isSuggested(language: string, region?: string): boolean;

    /**
     * Obtains the current system language.
     *
     * @returns { string } Language ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 static
     */
    static getSystemLanguage(): string;

    /**
     * Sets the system language.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid language ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Sets the system language.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid language ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static setSystemLanguage(language: string): void;

    /**
     * Obtains the current system country/region.
     *
     * @returns { string } Country/region ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getSystemRegion(): string;

    /**
     * Sets the system region.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } region - Valid region ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Sets the system region.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } region - Valid region ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static setSystemRegion(region: string): void;

    /**
     * Obtains the locale object currently used by the system.
     *
     * @returns { Intl.Locale } the locale object currently used by the system.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getSystemLocaleInstance(): Intl.Locale;

    /**
     * Checks whether the 24-hour clock is used.
     *
     * @returns { boolean } Whether the 24-hour clock is used. The value "true" indicates that the 24-hour clock is
     *                      used, the the value "false" means the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 static
     */
    static is24HourClock(): boolean;

    /**
     * Sets whether to use the 24-hour clock.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } option - Whether to use the 24-hour clock. The value "true" means to use the 24-hour clock,
     *                             the the value "false" means the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Sets whether to use the 24-hour clock.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } option - Whether to use the 24-hour clock. The value "true" means to use the 24-hour clock,
     *                             the the value "false" means the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static set24HourClock(option: boolean): void;

    /**
     * Adds a preferred language to the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid ID of the language to be added as a preferred language.
     * @param { int } [index] - Position to which the preferred language is added. The default value is the length
     *                             of the preferred language list.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Adds a preferred language to the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid ID of the language to be added as a preferred language.
     * @param { int } [index] - Position to which the preferred language is added. The default value is the length
     *                             of the preferred language list.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static addPreferredLanguage(language: string, index?: int): void;

    /**
     * Removes a preferred language from the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { int } index - Position of the preferred language to delete.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Removes a preferred language from the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { int } index - Position of the preferred language to delete.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static removePreferredLanguage(index: int): void;

    /**
     * Obtains the list of preferred languages.
     *
     * @returns { Array<string> } List of preferred languages.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the list of preferred languages.
     *
     * @returns { Array<string> } List of preferred languages.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getPreferredLanguageList(): Array<string>;

    /**
     * Obtains the first language in the preferred language list.
     *
     * @returns { string } First language in the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the first language in the preferred language list.
     *
     * @returns { string } First language in the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getFirstPreferredLanguage(): string;

    /**
     * Sets the preferred language of the application. Resources are loaded in the preferred language when the
     * application is launched. If the preferred language is set to default, the application's language will be the
     * same as the system language, and the setting will take effect upon cold starting of the application.
     *
     * @param { string } language - Valid language ID or default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static setAppPreferredLanguage(language: string): void;

    /**
     * Obtains the preferred language of an application.
     *
     * @returns { string } Preferred language of the application.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getAppPreferredLanguage(): string;

    /**
     * Specifies whether to enable use of local digits.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } flag - Whether to turn on the local digit switch. The value "true" means to turn on the local
     *                           digit switch, and the value "false" indicates the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Specifies whether to enable use of local digits.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } flag - Whether to turn on the local digit switch. The value "true" means to turn on the local
     *                           digit switch, and the value "false" indicates the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    static setUsingLocalDigit(flag: boolean): void;

    /**
     * Checks whether use of local digits is enabled.
     *
     * @returns { boolean } Whether use of local digits is enabled. The value "true" indicates that use of local digits
     *                      is enabled, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Checks whether use of local digits is enabled.
     *
     * @returns { boolean } Whether use of local digits is enabled. The value "true" indicates that use of local digits
     *                      is enabled, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getUsingLocalDigit(): boolean;

    /**
     * Obtains the simplified representation of a language. For example, the simplified representation of "en-Latn-US"
     * is "en", and that of "en-Latn-GB" is "en-GB".
     *
     * @param { string } [language] - Valid language ID. The default value is the system language.
     * @returns { string } If language is not passed, the application checks for dialects supported by the system based
     *                     on the system language and locale. If such a dialect is found, the simplified representation
     *                     of the dialect is returned. Otherwise, the simplified representation of the system language
     *                     is returned. If language is passed, the simplified representation of the specified language
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the simplified representation of a language. For example, the simplified representation of "en-Latn-US"
     * is "en", and that of "en-Latn-GB" is "en-GB".
     *
     * @param { string } [language] - Valid language ID. The default value is the system language.
     * @returns { string } If language is not passed, the application checks for dialects supported by the system based
     *                     on the system language and locale. If such a dialect is found, the simplified representation
     *                     of the dialect is returned. Otherwise, the simplified representation of the system language
     *                     is returned. If language is passed, the simplified representation of the specified language
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getSimplifiedLanguage(language?: string): string;

    /**
     * Sets the temperature unit of the system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { TemperatureType } type - Temperature unit.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static setTemperatureType(type: TemperatureType): void;

    /**
     * Obtains the temperature unit of the system.
     *
     * @returns { TemperatureType } Temperature unit.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the temperature unit of the system.
     *
     * @returns { TemperatureType } Temperature unit.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getTemperatureType(): TemperatureType;

    /**
     * Obtains the name of a temperature unit.
     *
     * @param { TemperatureType } type - Temperature unit.
     * @returns { string } Name of the temperature unit, which can be "celsius", "fahrenheit", and "kelvin".
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the name of a temperature unit.
     *
     * @param { TemperatureType } type - Temperature unit.
     * @returns { string } Name of the temperature unit, which can be "celsius", "fahrenheit", and "kelvin".
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getTemperatureName(type: TemperatureType): string;

    /**
     * Sets the first day of a week.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { WeekDay } type - Start day of a week.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static setFirstDayOfWeek(type: WeekDay): void;

    /**
     * Obtains the first day of a week in the system settings.
     *
     * @returns { WeekDay } Start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the first day of a week in the system settings.
     *
     * @returns { WeekDay } Start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getFirstDayOfWeek(): WeekDay;

    /**
     * Gets collations supported by system locale.
     *
     * @returns { Map<string, string> } The map will containing the collation's identifier and name.
     *     If the map is empty of the collation for given locale does not need to be set.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getSystemCollations(): Map<string, string>;

    /**
     * Gets collation currently used by system locale.
     *
     * @returns { string } The identifier of the collation model used by system locale will be return.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getUsingCollation(): string;

    /**
     * Sets the system collation mode.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the collation mode.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static setSystemCollation(identifier: string): void;

    /**
     * Gets measurements supported by system locale.
     *
     * @returns { Map<string, string> } a map will containing identifier and name of measurements supported by system locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getSystemMeasurements(): Map<string, string>;

    /**
     * Gets measurement currently used by system locale.
     *
     * @returns { string } The identifier of measurement system using by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getUsingMeasurement(): string;

    /**
     * Sets the measurement system used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the measurement system.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static setSystemMeasurement(identifier: string): void;

    /**
     * Gets numbering system currently used by system locale.
     *
     * @returns { string } the numbering systems's identifier.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getUsingNumberingSystem(): string;

    /**
     * Sets the numbering system used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the numbering system.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static setSystemNumberingSystem(identifier: string): void;

    /**
     * Gets numbering systems supported by system locale.
     *
     * @returns { Map<string,string> } a map will containing the numbering system 's identifier and sample.
     *     If the map is empty, there is no local digit for given locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getSystemNumberingSystems(): Map<string, string>;

    /**
     * Gets commonly used number patterns for system locale.
     *
     * @returns { Map<string,string> } a map containing the used number patterns and example of system locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getSystemNumberPatterns(): Map<string, string>;

    /**
     * Sets the number pattern used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } pattern - Identifier of the number pattern.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static setSystemNumberPattern(pattern: string): void;


    /**
     * Gets number pattern used by system locale.
     *
     * @returns { string } The number pattern identifier used by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getUsingNumberPattern(): string;

    /**
     * Gets numerical date patterns and examples supported by system locale.
     *
     * @returns { Map<string, string> } a map containing the date patterns and examples
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getSystemNumericalDatePatterns(): Map<string, string>;

    /**
     * Sets the numerical date pattern used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the numerical date pattern.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static setSystemNumericalDatePattern(identifier : string): void;

    /**
     * Gets numerical date pattern currently used by system locale.
     *
     * @returns { string } The numerical date pattern used by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 23 static
     */
    static getUsingNumericalDatePattern(): string;
  }

  /**
   * Enumerates the first day of a week. The value ranges from Monday to Sunday.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Enumerates the first day of a week. The value ranges from Monday to Sunday.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export enum WeekDay {
    /**
     * Monday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Monday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    MON = 1,

    /**
     * Tuesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Tuesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    TUE = 2,

    /**
     * Wednesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Wednesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    WED = 3,

    /**
     * Thursday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Thursday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    THU = 4,

    /**
     * Friday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Friday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    FRI = 5,

    /**
     * Saturday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Saturday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    SAT = 6,

    /**
     * Sunday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Sunday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    SUN = 7
  }

  /**
   * Enumerates temperature units.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Enumerates temperature units.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export enum TemperatureType {
    /**
     * Celsius.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Celsius.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    CELSIUS = 1,

    /**
     * Fahrenheit.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Fahrenheit.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    FAHRENHEIT = 2,

    /**
     * Kelvin.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Kelvin.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    KELVIN = 3
  }

  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export class I18NUtil {
    /**
     * Converts one measurement unit into another and formats the unit based on the specified locale and style.
     *
     * @param { UnitInfo } fromUnit - Measurement unit to be converted.
     * @param { UnitInfo } toUnit - Measurement unit to be converted to.
     * @param { double } value - Value of the measurement unit to be converted.
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @param { string } [style] - Style used for formatting. The value can be long, short, or narrow. The default
     *                             value is short. For details about the meaning or display effect of different values,
     *                             see Number and Unit of Measurement Formatting.
     * @returns { string } String converted to the measurement unit after formatting.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Converts one measurement unit into another and formats the unit based on the specified locale and style.
     *
     * @param { UnitInfo } fromUnit - Measurement unit to be converted.
     * @param { UnitInfo } toUnit - Measurement unit to be converted to.
     * @param { double } value - Value of the measurement unit to be converted.
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @param { string } [style] - Style used for formatting. The value can be long, short, or narrow. The default
     *                             value is short. For details about the meaning or display effect of different values,
     *                             see Number and Unit of Measurement Formatting.
     * @returns { string } String converted to the measurement unit after formatting.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string;

    /**
     * Obtains the sequence of the year, month, and day in the specified locale.
     *
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @returns { string } Sequence of the year, month, and day in the locale. "y" indicates the year, "L" indicates
     *                     the month, and "d" indicates the day.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getDateOrder(locale: string): string;

    /**
     * Obtains the localized expression of the specified time in the specified locale.
     *
     * @param { int } hour - Specified time, for example, 16.
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region. for
     *                              example, "zh-Hans-CN". The default value is the current system locale.
     * @returns { string } Localized expression of the specified time in the specified locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the localized expression of the specified time in the specified locale.
     *
     * @param { int } hour - Specified time, for example, 16.
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region. for
     *                              example, "zh-Hans-CN". The default value is the current system locale.
     * @returns { string } Localized expression of the specified time in the specified locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getTimePeriodName(hour:int, locale?: string): string;

    /**
     * Obtains the locale that best matches a region from the specified locale list.
     *
     * @param { string } locale - Locale ID, for example, "zh-Hans-CN".
     * @param { string[] } localeList - List of locale IDs.
     * @returns { string } ID of the locale that best matches a region. If no matching locale is found, an empty string
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getBestMatchLocale(locale: string, localeList: string[]): string;

    /**
     * Converts a language code from two letters to three letters. For example, the two-letter language code of Chinese
     * is "zh", and the corresponding three-letter language code is "zho". For details, see
     * [ISO 639](https://www.iso.org/iso-639-language-code).
     *
     * @param { string } locale - Two-letter code of the language to be converted, for example, "zh".
     * @returns { string } Language code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Converts a language code from two letters to three letters. For example, the two-letter language code of Chinese
     * is "zh", and the corresponding three-letter language code is "zho". For details, see
     * [ISO 639](https://www.iso.org/iso-639-language-code).
     *
     * @param { string } locale - Two-letter code of the language to be converted, for example, "zh".
     * @returns { string } Language code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getThreeLetterLanguage(locale: string): string;

    /**
     * Converts a region code from two letters to three letters. For example, the two-letter region code of China is
     * "CN", and the corresponding three-letter region code is "CHN". For details, see
     * [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
     *
     * @param { string } locale - Two-letter country/region code to be converted, for example, "CN".
     * @returns { string } Region code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Converts a region code from two letters to three letters. For example, the two-letter region code of China is
     * "CN", and the corresponding three-letter region code is "CHN". For details, see
     * [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
     *
     * @param { string } locale - Two-letter country/region code to be converted, for example, "CN".
     * @returns { string } Region code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getThreeLetterRegion(locale: string): string;


    /**
     * Localizes a file path for the specified locale. For example, /data/out/tmp is changed to tmp/out/data/ after
     * localization.
     *
     * @param { string } path - Path to mirror, for example, "/data/out/tmp".
     * @param { string } [delimiter] - Path delimiter. The default value is "/"".
     * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
     * @returns { string } File path after localization. If the specified locale object corresponds to an RTL language,
     *                     the processed file path contains a direction control character to ensure that the file path
     *                     is displayed in mirror mode.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Localizes a file path for the specified locale. For example, /data/out/tmp is changed to tmp/out/data/ after
     * localization.
     *
     * @param { string } path - Path to mirror, for example, "/data/out/tmp".
     * @param { string } [delimiter] - Path delimiter. The default value is "/"".
     * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
     * @returns { string } File path after localization. If the specified locale object corresponds to an RTL language,
     *                     the processed file path contains a direction control character to ensure that the file path
     *                     is displayed in mirror mode.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: Intl.Locale): string;

    /**
     * Converts a locale string into canonical locale identifier with BCP47 standard.
     * [BCP47](https://www.rfc-editor.org/info/bcp47).
     *
     * @param { string } locale - Locale string to be converted, which consists of the language, script,
     *     and country/region.
     * @returns { string } BCP47 standard locale identifier.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    static convertCanonicalLocaleIdentifier(locale: string): string;

    /**
     * Sets the text direction for a specific piece of text independently,
     * separating it from the text direction of the surrounding context.
     *
     * @param { string } text - Input characters need to set direction.
     *     <br>Pending Text
     * @param { 'RTL' | 'LTR' } direction - The value can be  or "LTR".
     *     "RTL" indicates setting the input text direction from right to left.
     *     "LTR" indicates setting the input text direction from left to right.
     *     <br>Text main directionality
     * @returns { string } Processed Text.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    static setUnicodeWrappedBidiDirection(text: string, direction: 'RTL' | 'LTR'): string;
  }

  /**
   * Defines the measurement unit information.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Defines the measurement unit information.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export interface UnitInfo {
    /**
     * Name of the measurement unit, for example, "meter", "inch", or "cup".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Name of the measurement unit, for example, "meter", "inch", or "cup".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    unit: string;

    /**
     * Measurement system. The value can be "SI", "US", or "UK".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Measurement system. The value can be "SI", "US", or "UK".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    measureSystem: string;
  }

  /**
   * Options for PhoneNumberFormat object initialization.
   *
   * @interface PhoneNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export interface PhoneNumberFormatOptions {
    /**
     * Type of the phone number. The value can be "E164", "INTERNATIONAL", "NATIONAL", "RFC3966", or "TYPING".
     * In API version 8, type is mandatory. In API version 9 or later, type is optional.
     * In API version 12 or later, "TYPING" is supported, which indicates that the dialed number is formatted in real
     * time.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    type?: string;
  }

  /**
   * Provides the API for formatting phone number strings
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export class PhoneNumberFormat {
    /**
     * Creates a PhoneNumberFormat object.
     *
     * @param { string } country - Country/region to which the phone number to be formatted belongs.
     * @param { PhoneNumberFormatOptions } [options] - Options for PhoneNumberFormat object initialization.
     *                                                 The default value is "NATIONAL".
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * Checks whether the phone number is valid for the country/region in the PhoneNumberFormat object.
     *
     * @param { string } phoneNumber - Phone number to be checked.
     * @returns { boolean } Whether the phone number is valid. The value "true" indicates that the phone number is
     *                      valid, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    isValidNumber(phoneNumber: string): boolean;

    /**
     * Formats a phone number.
     *
     * @param { string } phoneNumber - Phone number to be formatted.
     * @returns { string } Formatted phone number.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    format(phoneNumber: string): string;

    /**
     * Obtains the home location of a phone number.
     *
     * @param { string } phoneNumber - Phone number. To obtain the home location of a number in other countries/regions,
     *                            you need to prefix the number with 00 and the country code.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Home location of the phone number. If the number is invalid, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    getLocationName(phoneNumber: string, locale: string): string;
  }

  /**
   * Obtains the Calendar object for the specified locale and calendar type.
   *
   * @param { string } locale - Locale ID, which consists of the language, script, and country/region,
   *                            for example, zh-Hans-CN.
   * @param { string } [type] - Calendar. The value can be: "buddhist", "chinese", "coptic", "ethiopic",
   *                            "hebrew", "gregory", "indian", "islamic_civil", "islamic_tbla",
   *                            "islamic_umalqura", "japanese", or "persian". The default value is the default
   *                            calendar of the locale. For details about the meanings and application scenarios of
   *                            different values, see Calendar Setting.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export function getCalendar(locale: string, type?: string): Calendar;

  /**
   * Provides the API for accessing Calendar name, time and date related information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export class Calendar {
    /**
     * Sets the date and time for a Calendar object.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    setTime(date: Date): void;

    /**
     * Sets the date and time for a Calendar object.
     *
     * @param { double } time - Unix timestamp, which indicates the number of milliseconds that have elapsed since the
     *                          Unix epoch.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    setTime(time: double): void;

    /**
     * Sets the year, month, day, hour, minute, and second for this Calendar object.
     *
     * @param { int } year - Year to set.
     * @param { int } month - Month to set. Note: The month starts from 0. For example, 0 indicates January.
     * @param { int } date - Day to set.
     * @param { int } hour - Hour to set. The default value is the current system time.
     * @param { int } minute - Minute to set. The default value is the current system time.
     * @param { int } second - Second to set. The default value is the current system time.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set(year: int, month: int, date:int, hour?: int, minute?: int, second?: int): void;

    /**
     * Sets the time zone of this Calendar object.
     *
     * @param { string } timezone - Valid time zone ID, for example, Asia/Shanghai.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    setTimeZone(timezone: string): void;

    /**
     * Obtains the time zone ID of this Calendar object.
     *
     * @returns { string } Time zone ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getTimeZone(): string;

    /**
     * Obtains the first day of a week for this Calendar object.
     *
     * @returns { int } First day of a week. The value 1 indicates Sunday, and the value 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getFirstDayOfWeek(): int;

    /**
     * Sets the first day of a week for this Calendar object.
     *
     * @param { int } value - Start day of a week. The value 1 indicates Sunday, and the value 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    setFirstDayOfWeek(value: int): void;

    /**
     * Obtains the minimum number of days in the first week for this Calendar object.
     *
     * @returns { int } Minimum number of days in the first week of a year.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getMinimalDaysInFirstWeek(): int;

    /**
     * Sets the minimum number of days in the first week for this Calendar object.
     *
     * @param { int } value - Minimum number of days in the first week of a year.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    setMinimalDaysInFirstWeek(value: int): void;

    /**
     * Obtains the values of the calendar attributes in this Calendar object.
     *
     * @param { string } field - Calendar attributes. The following table lists the supported attribute values.
     * @returns { int } Value of the calendar attribute. For example, if the year of the internal date of the
     *                     current Calendar object is 1990, get('year') returns 1990.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get(field: string): int;

    /**
     * Obtains calendar display name in the specified language.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Calendar display name in the specified language. For example, buddhist is displayed as
     *                     Buddhist Calendar if the locale is en-US.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains calendar display name in the specified language.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Calendar display name in the specified language. For example, buddhist is displayed as
     *                     Buddhist Calendar if the locale is en-US.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getDisplayName(locale: string): string;

    /**
     * Checks whether a given date is a weekend in this Calendar object.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is current date of the Calendar object.
     * @returns { boolean } The value "true" indicates that the specified date is a weekend, and the value "false"
     *                      indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    isWeekend(date?: Date): boolean;

    /**
     * Performs addition or subtraction on the calendar attributes of this Calendar object.
     *
     * @param { string } field - Calendar attribute. The value can be any of the following: year, month, week_of_year,
     *                           week_of_month, date, day_of_year, day_of_week, day_of_week_in_month, hour,
     *                           hour_of_day, minute, second, millisecond. For details about the values, see get.
     * @param { int } amount - Addition or subtraction amount.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    add(field: string, amount: int): void;

    /**
     * Obtains the timestamp of this Calendar object.
     *
     * @returns { long } Unix timestamp, which indicates the number of milliseconds that have elapsed since the
     *                     Unix epoch.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getTimeInMillis(): long;

    /**
     * Compares the current date of this Calendar object with the specified date for the difference in the number of
     * days.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { int } Difference in the number of days. A positive number indicates that the calendar date is
     *                     earlier, and a negative number indicates the opposite. The value is accurate to
     *                     milliseconds. If the value is less than one day, it is considered as one day.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    compareDays(date: Date): int;
  }

  /**
   * Checks whether the input character is of the right to left (RTL) language.
   *
   * @param { string } locale - Input character. If the input is a string, only the type of the first character is checked.
   * @returns { boolean } true if the input character is of the RTL language, and false otherwise.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export function isRTL(locale: string): boolean;

  /**
   * Obtains a BreakIterator object. The BreakIterator object maintains an internal break iterator that can be used to
   * access various line break points.
   *
   * @param { string } locale - System locale, which consists of the language, script, and country/region. The
   *                            generated BreakIterator object calculates the positions of line breaks based on
   *                            the rules of the specified locale.
   * @returns { BreakIterator } BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Obtains a BreakIterator object. The BreakIterator object maintains an internal break iterator that can be used to
   * access various line break points.
   *
   * @param { string } locale - System locale, which consists of the language, script, and country/region. The
   *                            generated BreakIterator object calculates the positions of line breaks based on
   *                            the rules of the specified locale.
   * @returns { BreakIterator } BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export function getLineInstance(locale: string): BreakIterator;

  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class BreakIterator {
    /**
     * Obtains the position of the break iterator in the text.
     *
     * @returns { int } Position of the break iterator in the text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the position of the break iterator in the text.
     *
     * @returns { int } Position of the break iterator in the text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    current(): int;

    /**
     * Moves the break iterator to the first line break point, which is always at the beginning of the processed text.
     *
     * @returns { int } Offset of the first line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Moves the break iterator to the first line break point, which is always at the beginning of the processed text.
     *
     * @returns { int } Offset of the first line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    first(): int;

    /**
     * Moves the break iterator to the last line break point, which is always the next position after the end of the
     * processed text.
     *
     * @returns { int } Offset of the last line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Moves the break iterator to the last line break point, which is always the next position after the end of the
     * processed text.
     *
     * @returns { int } Offset of the last line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    last(): int;

    /**
     * Moves the break iterator backward by the specified number of line break points.
     *
     * @param { int } [index] - Number of line break points for moving the break iterator. The value is an integer.
     *                             A positive number means to move the break iterator backward, and a negative number
     *                             means to move the break iterator forward. The default value is 1.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Moves the break iterator backward by the specified number of line break points.
     *
     * @param { int } [index] - Number of line break points for moving the break iterator. The value is an integer.
     *                             A positive number means to move the break iterator backward, and a negative number
     *                             means to move the break iterator forward. The default value is 1.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    next(index?: int): int;

    /**
     * Moves the break iterator foreward by one line break point.
     *
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Moves the break iterator foreward by one line break point.
     *
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    previous(): int;

    /**
     * Sets the text to be processed by the BreakIterator object.
     *
     * @param { string } text - Input text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Sets the text to be processed by the BreakIterator object.
     *
     * @param { string } text - Input text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    setLineBreakText(text: string): void;

    /**
     * Moves the line break iterator to the line break point after the specified position.
     *
     * @param { int } offset - Offset of the line break point.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Moves the line break iterator to the line break point after the specified position.
     *
     * @param { int } offset - Offset of the line break point.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    following(offset: int): int;

    /**
     * Obtains the text processed by the BreakIterator object.
     *
     * @returns { string } Text being processed by the BreakIterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the text processed by the BreakIterator object.
     *
     * @returns { string } Text being processed by the BreakIterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getLineBreakText(): string;

    /**
     * Checks whether the specified position is a line break point.
     *
     * @param { int } offset - Specified position in the text.
     * @returns { boolean } Whether the specified position is a line break point. The value "true" indicates that the
     *                      specified position is a line break point, and the value "false" indicates the opposite.
     *                      If true is returned, the break iterator is moved to the position specified by offset.
     *                      Otherwise, the break iterator is moved to the text line break point after the position
     *                      specified by offset, which is equivalent to calling following.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Checks whether the specified position is a line break point.
     *
     * @param { int } offset - Specified position in the text.
     * @returns { boolean } Whether the specified position is a line break point. The value "true" indicates that the
     *                      specified position is a line break point, and the value "false" indicates the opposite.
     *                      If true is returned, the break iterator is moved to the position specified by offset.
     *                      Otherwise, the break iterator is moved to the text line break point after the position
     *                      specified by offset, which is equivalent to calling following.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    isBoundary(offset: int): boolean;
  }

  /**
   * Creates an IndexUtil object.
   *
   * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
   *                              The default value is the current system locale.
   * @returns { IndexUtil } IndexUtil object created based on the specified locale ID.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Creates an IndexUtil object.
   *
   * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
   *                              The default value is the current system locale.
   * @returns { IndexUtil } IndexUtil object created based on the specified locale ID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export function getInstance(locale?:string): IndexUtil;

  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class IndexUtil {
    /**
     * Obtains the index list of the current locale.
     *
     * @returns { Array<string> } Index list of the current locale. The first and last elements are "...".
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the index list of the current locale.
     *
     * @returns { Array<string> } Index list of the current locale. The first and last elements are "...".
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getIndexList(): Array<string>;

    /**
     * Adds the index list of a new locale to the index list of the current locale to form a composite list.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Adds the index list of a new locale to the index list of the current locale to form a composite list.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    addLocale(locale: string): void;

    /**
     * Obtains the index of the text object.
     *
     * @param { string } text - text object.
     * @returns { string } Index of the text object. If no proper index is found, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the index of the text object.
     *
     * @param { string } text - text object.
     * @returns { string } Index of the text object. If no proper index is found, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getIndex(text: string): string;
  }

  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export class Unicode {
    /**
     * Checks whether the input character is a digit.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a digit, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isDigit(ch: string): boolean;

    /**
     * Checks whether the input character is a space.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a space, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isSpaceChar(ch: string): boolean;

    /**
     * Checks whether the input character is a whitespace.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a white space, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isWhitespace(ch: string): boolean;

    /**
     * Checks whether the input character is of the right to left (RTL) language.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is of the RTL language, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isRTL(ch: string): boolean;

    /**
     * Checks whether the input character is an ideographic character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character an ideographic character, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isIdeograph(ch: string): boolean;

    /**
     * Checks whether the input character is a letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character a letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isLetter(ch: string): boolean;

    /**
     * Checks whether the input character is a lowercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character a lowercase letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isLowerCase(ch: string): boolean;

    /**
     * Checks whether the input character is an uppercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character an uppercase letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static isUpperCase(ch: string): boolean;

    /**
     * Obtains the type of the input character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { string } Type of the input character.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getType(ch: string): string;

    /**
     * Detects the encoding format of the input byte array.
     * It is recommended to check the encoding format before performing data conversion operations.
     *
     * @param { Uint8Array } bytes - Input byte stream. To detect the encoding of a text string,
     *     convert the text to a byte stream first while preserving its original format.
     *     <br>Byte stream to be identified and encoded
     * @returns { EncodingInfo } An object containing the detected encoding name and detection confidence level.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    static detectEncoding(bytes: Uint8Array): EncodingInfo;
  }

  /**
   * Defines the detect encoding result information.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface EncodingInfo {  
    /**
     * Name of the detect encoding result, the value can be "UTF-8", "UTF-16BE", "UTF-16LE", "TF-32BE",
     * "UTF-32LE", "Shift_JIS", "ISO-2022-JP", "ISO-2022-CN", "ISO-2022-KR", "GB18030", "Big5", "EUC-JP",
     * "EUC-KR", "ISO-8859-1", "ISO-8859-2", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8",
     * "ISO-8859-9", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254",
     * "windows-1255", "windows-1256", "KOI8-R", "IBM420", "IBM424".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    encodingName: string;

    /**
     * An integer between 0 to 100, determine the accuracy of the result.
     * Higher value indicates a more reliable detection result.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    confidence: int;
  }

  /**
   * Obtains the TimeZone object corresponding to the specified time zone ID.
   *
   * @param { string } [zoneID] - Time zone ID. The default value is the system time zone.
   * @returns { TimeZone } TimeZone object corresponding to the time zone ID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export function getTimeZone(zoneID?: string): TimeZone;

  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export class TimeZone {
    /**
     * Obtains the ID of the specified TimeZone object.
     *
     * @returns { string } Time zone ID corresponding to the TimeZone object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getID(): string;

    /**
     * Obtains time zone display name in the specified language.
     *
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
     *                              The default value is the current system locale.
     * @param { boolean } [isDST] - Whether DST information is displayed. The value "true" indicates that DST
     *                              information is displayed, and the value "false" indicates the opposite.
     *                              The default value is false.
     * @returns { string } Time zone display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains time zone display name in the specified language.
     *
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
     *                              The default value is the current system locale.
     * @param { boolean } [isDST] - Whether DST information is displayed. The value "true" indicates that DST
     *                              information is displayed, and the value "false" indicates the opposite.
     *                              The default value is false.
     * @returns { string } Time zone display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getDisplayName(locale?: string, isDST?: boolean): string;

    /**
     * Obtains the raw offset of the specified time zone.
     *
     * @returns { int } Raw offset of the time zone, in milliseconds.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getRawOffset(): int;

    /**
     * Obtains the offset of the specified time zone at the specified time.
     *
     * @param { double } [date] - Specified time, in milliseconds. The default value is the system time.
     * @returns { int } Time zone offset, in milliseconds. When the DST is used, the time zone offset
     *                     is the raw time zone offset plus the DST offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getOffset(date?: double): int;

    /**
     * Obtains the list of time zone IDs supported by the system.
     *
     * @returns { Array<string> } List of time zone IDs supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    static getAvailableIDs(): Array<string>;

    /**
     * Obtains the list of time zone city IDs supported by the system.
     *
     * @returns { Array<string> } List of time zone city IDs supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    static getAvailableZoneCityIDs(): Array<string>;

    /**
     * Obtains time zone city display name in the specified language.
     *
     * @param { string } cityID - Time zone city ID.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Time zone city display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    static getCityDisplayName(cityID: string, locale: string): string;

    /**
     * Creates a TimeZone object corresponding to the specified time zone city.
     *
     * @param { string } cityID - Time zone city ID. The value must be a time zone city ID supported by the system.
     * @returns { TimeZone } TimeZone object corresponding to the specified time zone city ID.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    static getTimezoneFromCity(cityID: string): TimeZone;

    /**
     * Creates an array of TimeZone objects corresponding to the specified location.
     *
     * @param { double } longitude - Longitude. The value range is [-180, 179.9). A positive value is used for east
     *                               longitude and a negative value is used for west longitude.
     * @param { double } latitude - Latitude. The value range is [-90, 89.9). A positive value is used for north
     *                              latitude and a negative value is used for south latitude.
     * @returns { Array<TimeZone> } TimeZone objects corresponding to the specified location.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    static getTimezonesByLocation(longitude: double, latitude: double): Array<TimeZone>;

    /**
     * Get the zone rules object corresponds to the timezone objects.
     *
     * @returns { ZoneRules } Returns a ZoneRuels object which defines timezone offset changing rule.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Get the zone rules object corresponds to the timezone objects.
     *
     * @returns { ZoneRules } Returns a ZoneRuels object which defines timezone offset changing rule.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    public getZoneRules(): ZoneRules;

    /**
     * Check if the given date use daylight saving time. The calculation will be based on the matched time zone rules.
     *
     * @param { Date } date - Date and time for calculation.
     *     The value must match the time range supported by the time zone rule.
     * @returns { boolean } true if the date use daylight saving time, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public isDaylightSavingTime(date: Date): boolean;

    /**
     * Sets the default time zone for the current app, the value will be used on the application's runtime lifecycle.
     * When the date time formatting function is used, the default time zone ID of the app is used preferentially.
     *
     * @param { string } zoneID - Time zone ID that set default for app. for example, "Asia/Shanghai".
     *     <br> Time zone ID supported by the system
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    static setAppDefaultTimeZoneById(zoneID: string): void;

    /**
     * Obtains the TimeZone object of defautl time zone used by application.
     *
     * @returns { TimeZone } TimeZone object, first set by application, then system time zone, last GMT time zone.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    static getAppDefaultTimeZone(): TimeZone;
  }

  /**
   * Provides the API for obtaining timezone offset changing rules information.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provides the API for obtaining timezone offset changing rules information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class ZoneRules {
    /**
     * Get the next timezone offset transition after date.
     *
     * @param { double } [ date ] - Indicates milliseconds.
     * @returns { ZoneOffsetTransition } Returns a timezone offset transition after date.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Get the next timezone offset transition after date.
     *
     * @param { double } [date] - Indicates milliseconds.
     * @returns { ZoneOffsetTransition } Returns a timezone offset transition after date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    public nextTransition(date?: double): ZoneOffsetTransition;
  }

  /**
   * Provides the API for obtaining a timezone transition information.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provides the API for obtaining a timezone transition information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class ZoneOffsetTransition {
    /**
     * Obtains the timestamp of the change in the time zone offset.
     *
     * @returns { double } Timestamp of the change in the time zone offset.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the timestamp of the change in the time zone offset.
     *
     * @returns { double } Timestamp of the change in the time zone offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    public getMilliseconds(): double;

    /**
     * Get the offset after time zone offset trasition.
     *
     * @returns { int } Returns the offset after time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Get the offset after time zone offset trasition.
     *
     * @returns { int } Returns the offset after time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    public getOffsetAfter(): int;

    /**
     * Get the offset before time zone offset trasition.
     *
     * @returns { int } Returns the offset before time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Get the offset before time zone offset trasition.
     *
     * @returns { int } Returns the offset before time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    public getOffsetBefore(): int;
  }

  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class Transliterator {
    /**
     * Obtains a list of IDs supported by the Transliterator object.
     *
     * @returns { string[] } List of IDs supported by the Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains a list of IDs supported by the Transliterator object.
     *
     * @returns { string[] } List of IDs supported by the Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getAvailableIDs(): string[];

    /**
     * Creates a Transliterator object based on the specified ID.
     *
     * @param { string } id - ID supported by the Transliterator object.
     * @returns { Transliterator } Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Creates a Transliterator object based on the specified ID.
     *
     * @param { string } id - ID supported by the Transliterator object.
     * @returns { Transliterator } Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getInstance(id: string): Transliterator;

    /**
     * Converts the input text from the source format to the target format.
     *
     * @param { string } text - Input text.
     * @returns { string } Text after conversion.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Converts the input text from the source format to the target format.
     *
     * @param { string } text - Input text.
     * @returns { string } Text after conversion.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    transform(text: string): string;
  }

  /**
   * Enumerates text normalization modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Enumerates text normalization modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export enum NormalizerMode {
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    NFC = 1,

    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    NFD = 2,

    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    NFKC = 3,

    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    NFKD = 4
  }

  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class Normalizer {
    /**
     * Obtains a Normalizer object.
     *
     * @param { NormalizerMode } mode - Text normalization mode.
     * @returns { Normalizer } Normalizer object for text normalization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains a Normalizer object.
     *
     * @param { NormalizerMode } mode - Text normalization mode.
     * @returns { Normalizer } Normalizer object for text normalization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    static getInstance(mode: NormalizerMode): Normalizer;

    /**
     * Normalizes input strings.
     *
     * @param { string } text - Input strings.
     * @returns { string } Normalized strings.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Normalizes input strings.
     *
     * @param { string } text - Input strings.
     * @returns { string } Normalized strings.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    normalize(text: string): string;
  }

  /**
   * Represents the language or country/region suggestion type.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export enum SuggestionType {
    /**
     * Not a recommended language or country/region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    SUGGESTION_TYPE_NONE = 0,
    /**
     * Country/region recommended by the system language or language recommended by the system country/region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    SUGGESTION_TYPE_RELATED = 1,
    /**
     * Language recommended by the country/region of the SIM card.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    SUGGESTION_TYPE_SIM = 2,
  }

  /**
   * Represents the language or country/region sorting option.
   *
   * @interface SortOptions
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export interface SortOptions {  
    /**
     * Locale information, which consists of the language, script, and country/region, for example, "zh-Hans-CN".
     * The default value is the current system locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    locale?: string;

    /**
     * Whether to use the local name for sorting. The value "true" means to use the local name for sorting, and the
     * value "false" means the opposite. If getLanguageInfoArray is called, the default value of isUseLocalName is
     * true. If getRegionInfoArray is called, the default value of isUseLocalName is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    isUseLocalName?: boolean;

    /**
     * Whether to move the recommended language or country/region to the top in the sorting result. The value "true"
     * means to move the recommended language or country/region to the top, and the value "false" means the opposite.
     * The default value is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    isSuggestedFirst?: boolean;
  }

  /**
   * Represents the locale information, which consists of the language, script, and country/region.
   *
   * @interface LocaleItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export interface LocaleItem {
    /**
     * Language code or country/region code, for example, "zh" or "CN".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    id: string;

    /**
     * Language or country/region suggestion type.
     *
     * @type { SuggestionType }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    suggestionType: SuggestionType;

    /**
     * Representation of ID in the specified locale in SystemLocaleManager.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    displayName: string;

    /**
     * Local name of the ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    localName?: string;
  }

  /**
   * Represents a time zone and city combination item.
   *
   * @interface TimeZoneCityItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export interface TimeZoneCityItem {  
    /**
     * Time zone ID, for example, "Asia/Shanghai".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    zoneId: string;

    /**
     * City ID, for example, "Shanghai".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    cityId: string;

    /**
     * City display name in the system locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    cityDisplayName: string;

    /**
     * Offset of the time zone ID.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    offset: int;

    /**
     * Time zone display name in the system locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    zoneDisplayName: string;

    /**
     * Fixed offset of the time zone ID.
     *
     * @type { ?int }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    rawOffset?: int;
  }

  /**
   * Provide some functions for settings and startup guide to select language or region.
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export class SystemLocaleManager {  
    /**
     * Creates a SystemLocaleManager object.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    /**
     * Creates a SystemLocaleManager object.
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 26.0.0 static
     */
    constructor();

    /**
     * Obtains the list of languages after sorting.
     *
     * @param { Array<string> } languages - Valid IDs of the languages to be sorted.
     * @param { SortOptions } options - Language sorting option.
     * @returns { Array<LocaleItem> } Language list after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    getLanguageInfoArray(languages: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains the IDs of the countries or regions after sorting.
     *
     * @param { Array<string> } regions - Valid IDs of the countries or regions to be sorted.
     * @param { SortOptions } options - Country/region sorting option. By default, locale is the current system
     *                                  locale, isUseLocalName is false, and isSuggestedFirst is true.
     * @returns { Array<LocaleItem> } IDs of the countries or regions after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    getRegionInfoArray(regions: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains list of time zone city items after sorting.
     *
     * @returns { Array<TimeZoneCityItem> } List of time zone city items after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static getTimeZoneCityItemArray(): Array<TimeZoneCityItem>;
  }

  /**
   * Represents the holiday information.
   *
   * @interface HolidayInfoItem
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Represents the holiday information.
   *
   * @interface HolidayInfoItem
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export interface HolidayInfoItem {  
    /**
     * Holiday name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Holiday name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    baseName: string;

    /**
     * Year of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Year of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    year: int;

    /**
     * Month of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Month of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    month: int;

    /**
     * Day of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Day of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    day: int;

    /**
     * Local names of the holiday.
     *
     * @type { ?Array<HolidayLocalName> }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Local names of the holiday.
     *
     * @type { ?Array<HolidayLocalName> }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    localNames?: Array<HolidayLocalName>;
  }

  /**
   * Represents the name of a holiday in different languages.
   *
   * @interface HolidayLocalName
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Represents the name of a holiday in different languages.
   *
   * @interface HolidayLocalName
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export interface HolidayLocalName {  
    /**
     * Language, for example, "ar", "en", or "tr".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Language, for example, "ar", "en", or "tr".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    language: string;

    /**
     * Local name of a holiday. For example, the Turkish name of Sacrifice Feast is Kurban Bayrami.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Local name of a holiday. For example, the Turkish name of Sacrifice Feast is Kurban Bayrami.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    name: string;
  }

  /**
   * Provide some functions to manage holidays in a country or region. Partly follows the RFC2445 standard.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provide some functions to manage holidays in a country or region. Partly follows the RFC2445 standard.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class HolidayManager {  
    /**
     * Creates a HolidayManager object for parsing holiday data.
     *
     * @param { String } icsPath - Path of the .ics file with the read permission granted for applications.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Creates a HolidayManager object for parsing holiday data.
     *
     * @param { String } icsPath - Path of the .ics file with the read permission granted for applications.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    constructor(icsPath: String);

    /**
     * Determines whether the specified date is a holiday.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is the current date.
     * @returns { boolean } true if the specified date is a holiday, and false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Determines whether the specified date is a holiday.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is the current date.
     * @returns { boolean } true if the specified date is a holiday, and false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    isHoliday(date?: Date): boolean;

    /**
     * Obtains the holiday information list of the specified year.
     *
     * @param { int } [year] - Specified year, for example, 2023.<br>The default value is the current year.
     * @returns { Array<HolidayInfoItem> } Holiday information list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains the holiday information list of the specified year.
     *
     * @param { int } [year] - Specified year, for example, 2023.<br>The default value is the current year.
     * @returns { Array<HolidayInfoItem> } Holiday information list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    getHolidayInfoItemArray(year?: int): Array<HolidayInfoItem>;
  }

  /**
   * Defines a list of entities.
   *
   * @interface EntityInfoItem
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Defines a list of entities.
   *
   * @interface EntityInfoItem
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export interface EntityInfoItem {  
    /**
     * Start position of the entity in the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Start position of the entity in the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    begin: int;

    /**
     * End position of the entity the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * End position of the entity the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    end: int;

    /**
     * Entity type. The value can be "phone_number" or "date". "phone_number" indicates that the entity is a phone
     * number, and "date" indicates that the entity is a date.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Entity type. The value can be "phone_number" or "date". "phone_number" indicates that the entity is a phone
     * number, and "date" indicates that the entity is a date.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    type: string;
  }

  /**
   * Provide some functions to find named entity in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  /**
   * Provide some functions to find named entity in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 static
   */
  export class EntityRecognizer {
    /**
     * Creates an entityRecognizer object. This object is used to recognize entities in the text for the specified
     * locale.
     *
     * @param { string } [locale] - Locale ID, which consists of the language, script, and country/region, for example,
     *                              "zh-Hans-CN". The default value is the current system locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Creates an entityRecognizer object. This object is used to recognize entities in the text for the specified
     * locale.
     *
     * @param { string } [locale] - Locale ID, which consists of the language, script, and country/region, for example,
     *                              "zh-Hans-CN". The default value is the current system locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    constructor(locale?: string);

    /**
     * Obtains entity information in the text object.
     *
     * @param { string } text - text object.
     * @returns { Array<EntityInfoItem> } List of entities in the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    /**
     * Obtains entity information in the text object.
     *
     * @param { string } text - text object.
     * @returns { Array<EntityInfoItem> } List of entities in the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    findEntityInfo(text: string): Array<EntityInfoItem>;
  }


  /**
   * Obtains a SimpleDateTimeFormat object based on the specified pattern string. For details about the display
   * differences between the objects obtained by this API and getSimpleDateTimeFormatBySkeleton,
   * see SimpleDateTimeFormat.
   *
   * @param { string } pattern - Valid pattern. For details about the supported characters and their meanings, see
   *                             [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                             This parameter also supports custom text enclosed in single quotation marks ('').
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale): SimpleDateTimeFormat;


  /**
   * Obtains a SimpleDateTimeFormat object based on the specified skeleton. For details about the display differences
   * between the objects obtained by this API and getSimpleDateTimeFormatByPattern, see SimpleDateTimeFormat.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                              This parameter does not support custom text.
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat;

  /**
   * Provide a simple date time formatting interface.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export class SimpleDateTimeFormat {
    /**
     * Formats the date and time.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { string } A string containing the formatted date and time.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    format(date: Date): string;
  }


  /**
   * Obtains a SimpleNumberFormat object based on the specified skeleton.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons).
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleNumberFormat } SimpleNumberFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat;

  /**
   * Provide a simple number formatting interface.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export class SimpleNumberFormat {
    /**
     * Formats a number.
     *
     * @param { double } value - Number to be formatted.
     * @returns { string } Formatted number.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    format(value: double): string;
  }

  /**
   * Provide a number formatting interface which could format number to StyleString.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export class StyledNumberFormat {

    /**
     * A constructor used to create a StyledNumberFormat object.
     *
     * @param { Intl.NumberFormat | SimpleNumberFormat } numberFormat - Indicates the number format object that used
     *     to format number.
     * @param { StyledNumberFormatOptions } [options] - Indicates the options used to format the number.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    constructor(numberFormat: Intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions);


    /**
     * Formats a number as a rich text object.
     *
     * @param { double } value - Number to be formatted.
     * @returns { StyledString } Rich text object after formatting.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    format(value: double): StyledString;
  }

  /**
   * Represents optional configuration items for the NumberFormat object.
   *
   * @interface StyledNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export interface StyledNumberFormatOptions {
    /**
     * Text style for the integer part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    integer?: TextStyle;

    /**
     * Text style for the decimal point. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    decimal?: TextStyle;

    /**
     * Text style for the fraction part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    fraction?: TextStyle;

    /**
     * Text style for the unit. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    unit?: TextStyle;
  }

  /**
   * Provide a DateTime formatting interface which could format DateTime to StyleString.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export class StyledDateTimeFormat {
    /**
     * A constructor used to create a StyledDateTimeFormat object.
     *
     * @param { Intl.DateTimeFormat | SimpleDateTimeFormat } dateTimeFormat - Indicates the date and time format object
     *     that used to format date.
     * @param { StyledDateTimeFormatOptions } [options] - Indicates the options used to format the date.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    constructor(dateTimeFormat: Intl.DateTimeFormat | SimpleDateTimeFormat,
        options?: StyledDateTimeFormatOptions);

    /**
     * Formats a date as a rich text object.
     *
     * @param { Date } date - date to be formatted.
     * @returns { StyledString } Rich text object after formatting.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    format(date: Date): StyledString;
  }

  /**
   * Represents optional configuration items for the DateTimeFormat object.
   *
   * @interface StyledDateTimeFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 static
   */
  export interface StyledDateTimeFormatOptions {
    /**
     * Text style for the year part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    year?: TextStyle;

    /**
     * Text style for the month part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    month?: TextStyle;

    /**
     * Text style for the day part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    day?: TextStyle;

    /**
     * Text style for the hour part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    hour?: TextStyle;

    /**
     * Text style for the minute part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    minute?: TextStyle;

    /**
     * Text style for the second part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    second?: TextStyle;

    /**
     * Text style for the day period part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    dayPeriod?: TextStyle;

    /**
     * Text style for the weekday part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    weekday?: TextStyle;

    /**
     * Text style for the era part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    era?: TextStyle;

    /**
     * Text style for the timezone name part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 static
     */
    timeZoneName?: TextStyle;
  }

  /**
   * Building upon the measurement unit formatting capabilities provided by Intl.NumberFormat, the formatting
   * functionality has been enhanced. It supports automatically selecting appropriate measurement units
   * based on usage scenarios to format numbers.For example, there are many units of measurement for length,
   * including millimeters, centimeters, meters, kilometers, and so on. However, depending on the context
   * in which the measurement is used, each scenario has its commonly used units. Millimeters are more frequently
   * used when expressing rainfall, while meters are more commonly used to describe visibility.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export class AdvancedMeasureFormat {  
    /**
     * A constructor used to create an AdvancedMeasureFormat object.
     *
     * @param { Intl.NumberFormat } numberFormat - Indicates the number format object that used to format number.
     * @param { AdvancedMeasureFormatOptions } [ options ] - Indicates the options for AdvancedMeasureFormat.
     *     When no options are provided, the formatting result is consistent with that of NumberFormat.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    constructor(numberFormat: Intl.NumberFormat, options?: AdvancedMeasureFormatOptions);

    /**
     * Formats a number by appropriate measure for usage scenarios. For instance, when formatting the value 12.3
     *     for rainfall in the English locale, the output is "12.3 mm".
     *
     * @param { double } num - number to be formatted.
     * @returns { string } measure formatting result.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    format(num: double): string;
  }

  /**
   * Represents optional configuration items for AdvancedMeasureFormat object.
   *
   * @interface AdvancedMeasureFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export interface AdvancedMeasureFormatOptions {  
    /**
     * Scenarios for MeasureFormat.
     *
     * @type { ?UnitUsage }
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    unitUsage?: UnitUsage;
  }

    /**
     * Enumerates Scenarios for MeasureFormat.
     *
     * @enum { int }
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
  export enum UnitUsage {    
    /**
     * Area land agricult scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    AREA_LAND_AGRICULT = 1,

    /**
     * Area land commercl scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    AREA_LAND_COMMERCL = 2,

    /**
     * Area land residntl scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    AREA_LAND_RESIDNTL = 3,

    /**
     * Length person scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_PERSON = 4,

    /**
     * Length person small scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_PERSON_SMALL = 5,

    /**
     * Length rainfall scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_RAINFALL = 6,

    /**
     * Length road scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_ROAD = 7,

    /**
     * Length road small scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_ROAD_SMALL = 8,

    /**
     * Length snowfall scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_SNOWFALL = 9,

    /**
     * Length vehicle scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_VEHICLE = 10,

    /**
     * Length visiblty scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_VISIBLTY = 11,

    /**
     * Length visiblty small scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_VISIBLTY_SMALL = 12,

    /**
     * Length person informal scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_PERSON_INFORMAL = 13,

    /**
     * Length person small informal scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_PERSON_SMALL_INFORMAL = 14,

    /**
     * Length road informal scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    LENGTH_ROAD_INFORMAL = 15,

    /**
     * Speed road travel scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    SPEED_ROAD_TRAVEL = 16,

    /**
     * Speed wind scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    SPEED_WIND = 17,

    /**
     * Temperature person scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    TEMPERATURE_PERSON = 18,

    /**
     * Temperature weather scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    TEMPERATURE_WEATHER = 19,

    /**
     * Volume vehicle fuel scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    VOLUME_VEHICLE_FUEL = 20,

    /**
     * Elapsed time second scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    ELAPSED_TIME_SECOND = 21,

    /**
     * Size file byte scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    SIZE_FILE_BYTE = 22,

    /**
     * Size shortfile byte scenario.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    SIZE_SHORTFILE_BYTE = 23
  }

  /**
    * Provide a DateTime formatting interface that supports custom symbols.
    * This interface formats date time values into strings with custom symbols,
    * and can replace variable symbols in the formatted result with custom fixed symbols
    * (e.g., replacing "2:23 PM" with "2:23 afternoon").
    *
    * @syscap SystemCapability.Global.I18n
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0 static
    */
  export class SymbolDateTimeFormat extends Intl.DateTimeFormat {
    /**
     * A constructor used to create a SymbolDateTimeFormat object.
     *
     * @param { Intl.Locale } [locale] - Locale object used for formatting the date time value.
     *     The default value is the current system locale.
     * @param { SymbolDateTimeFormatOptions } [options] - Indicates the symbols used to replace.
     *     The symbols that support replacement are "AM" and "PM".
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions);

    /**
     * Obtains the options for creating a SymbolDateTimeFormat object.
     * This will allow us to check the current config symbols.
     *
     * @returns { ResolvedSymbolDateTimeFormatOptions } Symbol options for SymbolDateTimeFormat.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions;
  }

  /**
   * Represents optional configuration items for the SymbolDateTimeFormat object.
   * Define the symbol element and value that need to be replaced.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface SymbolDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
    /**
     * AM and PM symbol of date time period part, such as "PM" of "2:23 PM". The parameter array
     *     must be greater than 2, If greater than 2, the first two will be selected.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    amPMSymbol?: string[] | undefined;
  }

  /**
   * Represents optional element for the ResolvedSymbolDateTimeFormatOptions object.
   * Define the resolved symbol element and value that need to get.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface ResolvedSymbolDateTimeFormatOptions extends Intl.ResolvedDateTimeFormatOptions {
    /**
     * AM and PM symbol of date time period part, such as "PM" of "2:23 PM". First parameter is AM,
     *     second parameter is PM.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    amPMSymbol?: string[];
  }

  /**
   * Provide a Number formatting interface that supports custom symbols.
   * This interface formats number values into strings with custom symbols,
   * and can replace variable symbols in the formatted result with custom fixed symbols 
   * (e.g., replacing "null" to "NA").
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export class SymbolNumberFormat extends Intl.NumberFormat {
    /**
     * A constructor used to create a SymbolNumberFormat object.
     *
     * @param { Intl.Locale } [locale] - Locale object used for formatting the date time value.
     *     The default value is the current system locale.
     * @param { SymbolNumberFormatOptions } [options] - Indicates the symbols used to replace.
     *     Such as zero, nan, positiveInfinity, etc.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public constructor(locale?: Intl.Locale, options?: SymbolNumberFormatOptions);

    /**
     * Represents optional element for the ResolvedSymbolDateTimeFormatOptions object.
     * Define the resolved symbol element and value that need to get.
     *
     * @returns  { ResolvedSymbolNumberFormatOptions } Symbol options for SymbolNumberFormat.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public resolvedOptions(): ResolvedSymbolNumberFormatOptions;
  }

  /**
   * Represents optional configuration items for the SymbolNumberFormat object.
   * Define the symbol element and value that need to be replaced.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface SymbolNumberFormatOptions extends Intl.NumberFormatOptions {
    /**
     * Zero symbol of localized number part, such as "0".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    zero?: string | undefined;

    /**
     * NaN symbol of localized number part, such as "null".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    nan?: string | undefined;

    /**
     * Minus sign of localized number part, such as "-".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    minusSign?: string | undefined;

    /**
     * Plus sign of localized number part, such as "+".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    plusSign?: string | undefined;

    /**
     * Infinity symbol of localized number part, such as "∞".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    infinity?: string | undefined;

    /**
     * Grouping Separator symbol of localized number part, such as "," of "10,000".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    groupingSeparator?: string | undefined;
  }

  /**
   * Represents optional element for the ResolvedSymbolNumberFormatOptions object.
   * Define the resolved symbol element and value that need to get.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface ResolvedSymbolNumberFormatOptions extends Intl.ResolvedNumberFormatOptions {
    /**
     * Zero symbol of localized number part, such as "0".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    zero?: string;

    /**
     * NaN symbol of localized number part, such as "null".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    nan?: string;

    /**
     * Minus sign of localized number part, such as "-".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    minusSign?: string;

    /**
     * Plus sign of localized number part, such as "+".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    plusSign?: string;

    /**
     * Infinity symbol of localized number part, such as "∞".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    infinity?: string;

    /**
     * Grouping Separator symbol of localized number part, such as "," of "10,000".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    groupingSeparator?: string;
  }
  
  /**
   * Provide a DateTime formatting interface which could format date to ISO 8601 standard string.
   * [ISO8601](https://iso8601.com/).
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export class ISO8601DateTimeFormat {
    /**
     * A constructor used to create a ISO8601DateTimeFormat object.
     *
     * @param { ISO8601DateTimeFormatOptions } [options] - Indicates the format options formatted result include.
     *     Default format is yyyy-MM-ddThh:mm:ssZZZZZ.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public constructor(options?: ISO8601DateTimeFormatOptions);

    /**
     * Formats a date to ISO 8601 formatted string.
     *
     * @param { Date } date - date to be formatted. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { string } ISO 8601 formatted string, such as yyyy-MM-dd or yyyy-MM-ddThh:mm:ssZZZZZ.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public format(date: Date): string;
  }

  /**
   * Represents optional configuration items for the ISO8601DateTimeFormat object.
   * These options determine which elements need to be displayed after formatting and the corresponding format.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface ISO8601DateTimeFormatOptions {
    /**
     * The ISO 8601 date format to format. The value can be: "calendar", the format is yyyy-MM-dd; "ordinal",
     * the format is yyyy-DDD; "week", the format is YYYY-Www-e. Defalut value is "calendar".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    dateFormat?: 'calendar' | 'ordinal' | 'week';

    /**
     * The ISO 8601 time precision to format. The value can be: "dateOnly", "hours", "minutes", "seconds",
     *     "milliSeconds". Defalut value is "seconds".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    timePrecision?: 'dateOnly' | 'hours' | 'minutes' | 'seconds' | 'milliSeconds';

    /**
     * The date time separator style. The value can be: "extended": with -/:, "basic": compact mode.
     * Default separator style is "extended".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    separatorStyle?: 'extended' | 'basic';

    /**
     * TimeZone object used to format date, default value UTC.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    timeZone?: TimeZone;

    /**
     * Check if need to show time zone part. Default value is true that show time zone.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    displayTimeZone?: boolean;
  }

  /**
   * Obtains the ChineseCalendar object for the specified locale.
   *
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { ChineseCalendar } ChineseCalendar object.
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export function getChineseCalendar(locale?: Intl.Locale): ChineseCalendar;

  /**
   * Provide a ChineseCalendar interface which could handle unique characteristics of the chinese calendar,
   * such as leap month.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export class ChineseCalendar extends Calendar {
    /**
     * Sets the year, month, day, hour, minute, second, isLeapMonth for this ChineseCalendar object.
     *
     * @param { ChineseCalendarTime } chineseCalendarTime - Indicates the time element used to set for ChineseCalendar.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public setChineseCalendarTime(chineseCalendarTime: ChineseCalendarTime): void;

    /**
     * Checks whether a given month exist leap month in gregorianYear and cyclicalYear.
     *
     * @param { int } gregorianYear - Gregorian year to check, supported range is from 1900 to 2100.
     * @param { int } cyclicalYear - Cyclical year to check, supported range is from 1 to 60.
     * @param { int } month - Month to check. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { boolean } Check whether the input month is a leap month.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    public checkLeapMonth(gregorianYear: int, cyclicalYear: int, month: int): boolean;
  }

  /**
   * Represents chinese calendar time element for the ChineseCalendar object.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  export interface ChineseCalendarTime {
    /**
     * The gregorian year of date.
     * If you need to convert between the chinese calendar and the Gregorian calendar,
     * the year range must be set from 1900 to 2100.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    gregorianYear: int;

    /**
     * The cyclical year of date.
     * If you need to convert between the chinese calendar and the Gregorian calendar,
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    cyclicalYear: int;

    /**
     * Month of the chinese calendar time. Note: The month starts from 0. For example, 0 indicates January.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    month: int;

    /**
     * Date of the chinese calendar time.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    date: int;

    /**
     * Determines whether the input month is a leap month.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    isLeapMonth?: boolean;

    /**
     * Hour of the chinese calendar time.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    hour?: int;

    /**
     * Minute of the chinese calendar time.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    minute?: int;

    /**
     * Second of the chinese calendar time.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    second?: int;
  }
}
export default i18n;
