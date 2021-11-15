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
 * Provides internationalization related APIs.
 *
 * @since 6
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace intl {
/**
 * Provides APIs for obtaining locale information.
 *
 * @since 6
 */
export class Locale {
    /**
     * A constructor used to create a Locale object.
     *
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region.
     * @since 6
     */
   constructor(locale?: string);

    /**
     * Indicates the language of the locale.
     *
     * @since 6
     */
    language: string

    /**
     * Indicates the script of the locale.
     *
     * @since 6
     */
    script: string

    /**
     * Indicates the region of the locale.
     *
     * @since 6
     */
    region: string

    /**
     * Indicates the basic locale information, which is returned as a substring of
     * a complete locale string.
     *
     * @since 6
     */
    baseName: string

    /**
     * Indicates the case first style of the locale.
     */
    caseFirst: string

    /**
     * Indicates the calendar.
     */
    calendar: string

    /**
     * Indicates the collation.
     */
    collation: string

    /**
     * Indicates the hour cycle.
     */
    hourCycle:  string

    /**
     * Indicates the numbering system.
     */
    numberingSystem: string

    /**
     * Indicates whether it is numeric.
     */
    numeric: boolean

    /**
     * Convert the locale information to string.
     *
     * @return Returns locale information in string form.
     */
    toString(): string;

    /**
     * Maximize the locale's base information.
     *
     * @return Returns maximized locale.
     */
    maximize(): Locale;

    /**
     * Minimize the locale's base information.
     *
     * @return Returns minimized locale.
     */
    minimize(): Locale;
}

/**
 * Provides the options of date time format.
 */
export interface DateTimeOptions {
    /**
     * Indicates the locale.
     */
    locale: string

    /**
     * Indicates the date style.
     */
    dateStyle: string

    /**
     * Indicates the time style.
     */
    timeStyle: string

    /**
     * Indicates the hour cycle.
     */
    hourCycle: string

    /**
     * Indicates the timezone.
     */
    timeZone: string

    /**
     * Indicates the numbering system.
     */
    numberingSystem: string

    /**
     * Indicates whether is 12 hour or not.
     */
    hour12: boolean

    /**
     * Indicates the weekday style.
     */
    weekday: string

    /**
     * Indicates the era style.
     */
    era: string

    /**
     * Indicates the year style.
     */
    year: string

    /**
     * Indicates the month style.
     */
    month: string

    /**
     * Indicates the day style.
     */
    day: string

    /**
     * Indicates the hour style.
     */
    hour: string

    /**
     * Indicates the minute style.
     */
    minute: string

    /**
     * Indicates the second style.
     */
    second: string

    /**
     * Indicates the timezone name.
     */
    timeZoneName: string

    /**
     * Indicates the day period format.
     */
    dayPeriod: string

    /**
     * Indicates the locale matching algorithm.
     */
    localeMatcher: string

    /**
     * Indicates the format matching algorithm.
     */
    formatMatcher: string
}

/**
 * Provides the API for formatting date strings.
 *
 * @since 6
 */
export class DateTimeFormat {
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the DateTimeFormat object.
     * @param options Indicates the options used to format the date.
     * @since 6
     */
    constructor(locale: string, options?: DateTimeOptions);

    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @param locale Indicates an array of character string containing the locale information, including
     *               the language and optionally the script and region, for the DateTimeFormat object.
     * @param options Indicates the options used to format the date.
     * @since 6
     */
    constructor(locale: Array<string>, options?: DateTimeOptions);

    /**
     * Obtains the formatted date strings.
     *
     * @param date Indicates the Date object to be formatted.
     * @return Returns a date string formatted based on the specified locale.
     * @since 6
     */
    format(date: Date): string;

    /**
     * Obtains the formatted date strings of a date range.
     *
     * @param startDate Indicates the start date of the date range.
     * @param endDate Indicates the end date of the date range.
     * @return Returns a date string formatted based on the specified locale.
     * @since 6
     */
    formatRange(startDate: Date, endDate: Date): string;

    /**
     * Obtains the options of the DateTimeFormat object.
     *
     * @return Returns the options of the DateTimeFormat object.
     * @since 6
     */
    resolvedOptions(): DateTimeOptions;
}

/**
 * Provides the options of number format.
 */
export interface NumberOptions {
    /**
     * Indicates the locale.
     */
    locale: string

    /**
     * Indicates the currency.
     */
    currency: string

    /**
     * Indicates the currency sign.
     */
    currencySign: string

    /**
     * Indicates the currency display format.
     */
    currencyDisplay: string

    /**
     * Indicates the unit.
     */
    unit: string

    /**
     * Indicates the unit display format.
     */
    unitDisplay: string

    /**
     * Indicates the unit display format.
     */
    unitUsage: string

    /**
     * Indicates the sign display format.
     */
    signDisplay: string

    /**
     * Indicates the compact display format.
     */
    compactDisplay: string

    /**
     * Indicates the notation.
     */
    notation: string

    /**
     * Indicates the locale matching algorithm.
     */
    localeMatcher: string

    /**
     * Indicates the style.
     */
    style: string

    /**
     * Indicates the numbering system.
     */
    numberingSystem: string

    /**
     * Indicates whether using grouping or not.
     */
    useGrouping: boolean

    /**
     * Indicates the minimum integer digits.
     */
    minimumIntegerDigits: number

    /**
     * Indicates the minimum fraction digits.
     */
    minimumFractionDigits: number

    /**
     * Indicates the maximum fraction digits.
     */
    maximumFractionDigits: number

    /**
     * Indicates the minimum significant digits.
     */
    minimumSignificantDigits: number

    /**
     * Indicates the maximum significant digits.
     */
    maximumSignificantDigits: number
}

/**
 * Provides the API for formatting number strings.
 */
export class NumberFormat {
    /**
     * A constructor used to create a NumberFormat object.
     *
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the NumberFormat object.
     * @param options Indicates the options used to format the number.
     * @since 6
     */
    constructor(locale: string, options?: NumberOptions);

    /**
     * A constructor used to create a NumberFormat object.
     *
     * @param locale Indicates an array of character string containing the locale information, including
     *               the language and optionally the script and region, for the NumberFormat object.
     * @param options Indicates the options used to format the number.
     * @since 6
     */
    constructor(locale: Array<string>, options?: NumberOptions);

    /**
     * Obtains the formatted number string.
     *
     * @param number Indicates the number to be formatted.
     * @return Returns a number string formatted based on the specified locale.
     * @since 6
     */
    format(number: number): string;

    /**
     * Obtains the options of the NumberFormat object.
     *
     * @return Returns the options of the NumberFormat object.
     * @since 6
     */
    resolvedOptions(): NumberOptions;
}

/**
 * Provides the options of Collator
 *
 * @since 8
 */
export interface CollatorOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     */
    localeMatcher: string;

    /**
     * Whether the comparison is for sorting or for searching for matching strings.
     * Possible values are "sort" and "search"; the default is "sort".
     */
    usage: string;

    /**
     * Which differences in the strings should lead to non-zero result values.
     * Possible values are "base", "accent", "case", "variant".
     */
    sensitivity: string;

    /**
     * Whether punctuation should be ignored.
     * Possible values are true and false; the default is false.
     */
    ignorePunctuation: boolean;

    /**
     * Variant collations for certain locales.
     */
    collation: string;

    /**
     * Whether numeric collation should be used.
     * Possible values are true and false; the default is false.
     */
    numeric: boolean;

    /**
     * Whether upper case or lower case should sort first.
     * Possible values are "upper", "lower", or "false" (use the locale's default).
     */
    caseFirst: string;
}

/**
 * Enable language-sensitive string comparison.
 *
 * @since 8
 */
export class Collator {
    /**
     * A constructor used to create Collator object.
     *
     * @since 8
     */
    constructor();
    /**
     * A constructor used to create Collator Object;
     *
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the Collator object.
     * @param options Indicates the options used to initialize Collator object.
     * @since 8
     */
    constructor(locale: string | Array<string>, options?: CollatorOptions);

    /**
     * compares two strings according to the sort order of this Collator object
     *
     * @param first The first string to compare.
     * @param second The second string to compare.
     * @return Returns a number indicating how first compare to second:
     *         a negative value if string1 comes before string2;
     *         a positive value if string1 comes after string2;
     *         0 if they are considered equal.
     * @since 8
     */
    compare(first: string, second: string): number;

    /**
     * Returns a new object with properties reflecting the locale and collation options computed
     * during initialization of the object.
     *
     * @return Returns a CollatorOptions object reflecting the properties of this object.
     * @since 8
     */
    resolvedOptions(): CollatorOptions;
}

/**
 * Provides the options of PluralRules
 *
 * @since 8
 */
export interface PluralRulesOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     */
    localeMatcher: string;

    /**
     * The type to use. Possible values are: "cardinal", "ordinal"
     */
    type: string;

    /**
     * The minimum number of integer digits to use.
     * Possible values are from 1 to 21; the default is 1.
     */
    minimumIntegerDigits: number;

    /**
     * The minimum number of fraction digits to use.
     * Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     */
    minimumFractionDigits: number;

    /**
     * The maximum number of fraction digits to use.
     * Possible values are from 0 to 20;
     * the default for plain number formatting is the larger of minimumFractionDigits and 3;
     */
    maximumFractionDigits: number;

    /**
     * The minimum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 1.
     */
    minimumSignificantDigits: number;

    /**
     * The maximum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 21.
     */
    maximumSignificantDigits: number;
}

/**
 * Enables plural-sensitive formatting and plural-related language rules.
 *
 * @since 8
 */
export class PluralRules {
    /**
     * A constructor used to create PluralRules object.
     *
     * @since 8
     */
    constructor();

    /**
     * A constructor used to create PluralRules object.
     *
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the PluralRules object.
     * @param options Indicates the options used to initialize PluralRules object.
     * @since 8
     */
    constructor(locale: string | Array<string>, options?: PluralRulesOptions);

    /**
     * Returns a string indicating which plural rule to use for locale-aware formatting.
     *
     * @param n The number to get a plural rule for.
     * @return A string representing the pluralization category of the number,
     *         can be one of zero, one, two, few, many or other.
     * @since 8
     */
    select(n: number): string;
}
}
export default intl;