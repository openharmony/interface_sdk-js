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

/**
 * Get a Calendar instance specified by locale and type.
 *
 * @param locale The locale used to get calendar.
 * @param type If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
 *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
 *  japanese, persion.
 * @since 8
 */
 export function getCalendar(locale: string, type?: string): Calendar;

export class Calendar {
    /**
     * set the date.
     *
     * @param date Date object used to set the time and date.
     * @since 8
     */
    setTime(date: Date);

    /**
     * set the time.
     *
     * @param time Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @since 8
     */
     setTime(time: number);

    /**
     * Set the time
     *
     * @param year The year field of the calendar, ranges from 0 to 9999.
     * @param month The month field of the calendar, ranges from 0 to 11.
     * @param date The day field of the calendar, ranges from 1 to 31.
     * @param hour The hour field of the calendar, ranges from 0 to 23.
     * @param minute The minute field of the calendar, ranges from 0 to 59.
     * @param second the second field of the calendar, ranges from 0 to 59.
     * @since 8
     */
    set(year: number, month: number, date:number, hour?: number, minute?: number, second?: number);

    /**
     * Set the timezone of this calendar.
     *
     * @param timezone The id of a timezone.
     * @since 8
     */
    setTimeZone(timezone: string);

    /**
     * Get the timezone id of this calendar instance.
     *
     * @return Returns the timezone id of this calendar.
     * @since 8
     */
    getTimeZone(): string;

    /**
     * Get the start day of a week. 0 indicates Sunday, 6 indicates Saturday.
     *
     * @return Returns start day of a week.
     * @since 8
     */
    getFirstDayOfWeek(): number;

    /**
     * Set the start day of a week. 0 indicates Sunday, 6 indicates Saturday.
     *
     * @param value Indicates the start day of a week. 0 indicates Sunday, 6 indicates Saturday.
     * @since 8
     */
    setFirstDayOfWeek(value: number);

    /**
     * Get the minial days of a week, which is needed for the first day of a year.
     *
     * @return Returns the minimal days of a week.
     * @since 8
     */
    getMinimalDaysInFirstWeek(): number;

    /**
     * Set the minial days of a week, which is needed for the first week of a year.
     *
     * @param value The value to be set.
     * @since 8
     */
    setMinimalDaysInFirstWeek(value: number);

    /**
     * Get the associated value with the field.
     *
     * @param field Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @return Return the associated value.
     * @since 8
     */
    get(field: string): number;

    /**
     * Get calendar's name localized for display in the given locale.
     *
     * @param locale Locale used to get the localized name for this calendar.
     * @return Returns the localized name of this calendar.
     * @since 8
     */
    getDisplayName(locale: string): string;

    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @param date Date object whose attribute is desired.
     * @return Returns whether the date is a weekend day.
     * @since 8
     */
    isWeekend(date?: Date): boolean;
}
}