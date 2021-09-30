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
 * Provides international settings related APIs.
 *
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace i18n {
/**
 * Obtains the country or region name localized for display on a given locale.
 *
 * @param country The locale whose country or region name will be displayed.
 * @param locale The locale used to display the country or region.
 * @param sentenceCase Specifies whether the country or region name is displayed in sentence case.
 * @return Returns the country or region name localized for display on a given locale.
 * @since 7
 */
export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

/**
 * Obtains the language name localized for display on a given locale.
 *
 * @param language The locale whose language name will be displayed.
 * @param locale The locale used to display the language.
 * @param sentenceCase Specifies whether the language name is displayed in sentence case.
 * @return Returns the language name localized for display on a given locale.
 * @since 7
 */
export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

/**
 * Obtain all languages supported by the system.
 *
 * @return Returns all languages supported by the system.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function getSystemLanguages(): Array<string>;

/**
 * Obtain all regions supported by the system in the language.
 *
 * @param language The language used to get the list of regions.
 * @return Returns all regions supported by the system in the language.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function getSystemCountries(language: string): Array<string>;

/**
 * Determine whether the current language or region is recommended.
 *
 * @param language The language code.
 * @param region The region code.
 * @return Returns whether the current language or region is recommended.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function isSuggested(language: string, region?: string): boolean;

/**
 * Obtain the language currently used by the system.
 *
 * @return Returns the language currently used by the system.
 * @since 7
 */
export function getSystemLanguage(): string;

/**
 * Set the language currently used by the system.
 *
 * @param language The language to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemLanguage(language: string): boolean;

/**
 * Obtain the region currently used by the system.
 *
 * @return Returns the region currently used by the system.
 * @since 7
 */
export function getSystemRegion(): string;

/**
 * Set the region currently used by the system.
 *
 * @param region The region to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemRegion(region: string): boolean;

/**
 * Obtain the locale currently used by the system.
 *
 * @return Returns the locale currently used by the system.
 * @since 7
 */
export function getSystemLocale(): string;

/**
 * Set the locale currently used by the system.
 *
 * @param locale The locale to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemLocale(locale: string): boolean;

/**
 * Provides the options of PhoneNumberFormat.
 *
 * @since 8
 */
export interface PhoneNumberFormatOptions {
    /**
     * Indicates the type to format phone number.
     */
    type: string;
}

/**
 * Provides the API for formatting phone number strings
 *
 * @since 8
 */
export class PhoneNumberFormat {
    /**
     * A constructor used to create a PhoneNumberFormat object.
     * @param country Indicates a character string containing the country information for the PhoneNumberFormat object.
     * @param type Indicates the type used to format the phone number, includes: "E164", "RFC3966", "INTERNATIONAL", "NATIONAL".
     * @since 8
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * Judges whether phone number is valid.
     * @param number Indicates the input phone number to be judged.
     * @return Returns a boolean indicates whether the input phone number is valid.
     * @since 8
     */
    isValidNumber(number: string): boolean;

    /**
     * Obtains the formatted phone number strings of number.
     * @param number Indicates the input phone number to be formatted.
     * @return Returns the formatted phone number.
     * @since 8
     */
    format(number: string): string;
}
}