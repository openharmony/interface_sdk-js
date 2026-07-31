'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License'),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkTS
 */

/**
 * Intl.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace Intl {
    /**
     * BCP 47 language tag type.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type BCP47LanguageTag = string;

    /**
     * Fallback option for display names.
     *
     * @unionmember {'code'}
     * @unionmember {'none'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DisplayNamesFallback = 'code' | 'none';

    /**
     * Language display option.
     *
     * @unionmember {'dialect'}
     * @unionmember {'standard'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DisplayNamesLanguageDisplay = 'dialect' | 'standard';

    /**
     * Type of display names.
     *
     * @unionmember {'language'}
     * @unionmember {'region'}
     * @unionmember {'script'}
     * @unionmember {'calendar'}
     * @unionmember {'dateTimeField'}
     * @unionmember {'currency'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DisplayNamesType = 'language' | 'region' | 'script' | 'calendar' | 'dateTimeField' | 'currency';

    /**
     * Number format part types from ES2018.
     *
     * @unionmember {'literal'}
     * @unionmember {'nan'}
     * @unionmember {'infinity'}
     * @unionmember {'percent'}
     * @unionmember {'integer'}
     * @unionmember {'group'}
     * @unionmember {'decimal'}
     * @unionmember {'fraction'}
     * @unionmember {'plusSign'}
     * @unionmember {'minusSign'}
     * @unionmember {'percentSign'}
     * @unionmember {'currency'}
     * @unionmember {'code'}
     * @unionmember {'symbol'}
     * @unionmember {'name'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ES2018NumberFormatPartType = 'literal' | 'nan' | 'infinity' | 'percent' | 'integer' | 'group' | 
        'decimal' | 'fraction' | 'plusSign' | 'minusSign' | 'percentSign' | 'currency' | 'code' | 'symbol' | 'name';

    /**
     * Number format part types from ES2020.
     *
     * @unionmember {'compact'}
     * @unionmember {'exponentInteger'}
     * @unionmember {'exponentMinusSign'}
     * @unionmember {'exponentSeparator'}
     * @unionmember {'unit'}
     * @unionmember {'unknown'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ES2020NumberFormatPartType = 'compact' | 'exponentInteger' | 'exponentMinusSign' | 
        'exponentSeparator' | 'unit' | 'unknown';

    /**
     * LDML plural rule type.
     *
     * @unionmember {'zero'}
     * @unionmember {'one'}
     * @unionmember {'two'}
     * @unionmember {'few'}
     * @unionmember {'many'}
     * @unionmember {'other'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type LDMLPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

    /**
     * Locale matcher option.
     *
     * @unionmember {'lookup'}
     * @unionmember {'best fit'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ListFormatLocaleMatcher = 'lookup' | 'best fit';

    /**
     * List format style.
     *
     * @unionmember {'long'}
     * @unionmember {'short'}
     * @unionmember {'narrow'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ListFormatStyle = 'long' | 'short' | 'narrow';

    /**
     * List format type.
     *
     * @unionmember {'conjunction'}
     * @unionmember {'disjunction'}
     * @unionmember {'unit'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ListFormatType = 'conjunction' | 'disjunction' | 'unit';

    /**
     * Locale collation case first option.
     *
     * @unionmember {'upper'}
     * @unionmember {'lower'}
     * @unionmember {'false'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type LocaleCollationCaseFirst = 'upper' | 'lower' | 'false';

    /**
     * Locale hour cycle key.
     *
     * @unionmember {'h12'}
     * @unionmember {'h23'}
     * @unionmember {'h11'}
     * @unionmember {'h24'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type LocaleHourCycleKey = 'h12' | 'h23' | 'h11' | 'h24';

    /**
     * NumberFormat part type.
     *
     * @unionmember { ES2018NumberFormatPartType }
     * @unionmember { ES2020NumberFormatPartType }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type NumberFormatPartTypes = ES2018NumberFormatPartType | ES2020NumberFormatPartType;

    /**
     * Plural rule type.
     *
     * @unionmember {'cardinal'}
     * @unionmember {'ordinal'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type PluralRuleType = 'cardinal' | 'ordinal';

    /**
     * Relative time format locale matcher.
     *
     * @unionmember {'lookup'}
     * @unionmember {'best fit'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatLocaleMatcher = 'lookup' | 'best fit';

    /**
     * Relative time format numeric option.
     *
     * @unionmember {'always'}
     * @unionmember {'auto'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatNumeric = 'always' | 'auto';

    /**
     * Relative time format style.
     *
     * @unionmember {'long'}
     * @unionmember {'short'}
     * @unionmember {'narrow'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatStyle = 'long' | 'short' | 'narrow';

    /**
     * Relative time format unit.
     *
     * @unionmember {'year'}
     * @unionmember {'years'}
     * @unionmember {'quarter'}
     * @unionmember {'quarters'}
     * @unionmember {'month'}
     * @unionmember {'months'}
     * @unionmember {'week'}
     * @unionmember {'weeks'}
     * @unionmember {'day'}
     * @unionmember {'days'}
     * @unionmember {'hour'}
     * @unionmember {'hours'}
     * @unionmember {'minute'}
     * @unionmember {'minutes'}
     * @unionmember {'second'}
     * @unionmember {'seconds'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatUnit = 'year' | 'years' | 'quarter' | 'quarters' | 'month' | 'months' | 'week' |
        'weeks' | 'day' | 'days' | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds';

    /**
     * Relative time format unit singular.
     *
     * @unionmember {'year'}
     * @unionmember {'quarter'}
     * @unionmember {'month'}
     * @unionmember {'week'}
     * @unionmember {'day'}
     * @unionmember {'hour'}
     * @unionmember {'minute'}
     * @unionmember {'second'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatUnitSingular = 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute' |
        'second';

    /**
     * Unicode BCP 47 locale identifier.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type UnicodeBCP47LocaleIdentifier = string;

    /**
     * Date time format part types.
     *
     * @unionmember {'day'}
     * @unionmember {'dayPeriod'}
     * @unionmember {'era'}
     * @unionmember {'fractionalSecond'}
     * @unionmember {'hour'}
     * @unionmember {'literal'}
     * @unionmember {'minute'}
     * @unionmember {'month'}
     * @unionmember {'second'}
     * @unionmember {'timeZoneName'}
     * @unionmember {'unknown'}
     * @unionmember {'weekday'}
     * @unionmember {'year'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DateTimeFormatPartTypes = 'day' | 'dayPeriod' | 'era' | 'fractionalSecond' | 'hour' | 'literal' |
        'minute' | 'month' | 'second' | 'timeZoneName' | 'unknown' | 'weekday' | 'year';

    /**
     * Date time range format part source.
     *
     * @unionmember {'startRange'}
     * @unionmember {'endRange'}
     * @unionmember {'shared'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DateTimeRangeFormatPartSource = 'startRange' | 'endRange' | 'shared';

    /**
     * Locales argument type.
     *
     * @unionmember { UnicodeBCP47LocaleIdentifier }
     * @unionmember { Locale }
     * @unionmember { readonly (UnicodeBCP47LocaleIdentifier | Locale)[] }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type LocalesArgument = UnicodeBCP47LocaleIdentifier | Locale | readonly (UnicodeBCP47LocaleIdentifier |
        Locale)[];

    /**
     * Date style for DateTimeFormat.
     *
     * @unionmember { 'full' }
     * @unionmember { 'long' }
     * @unionmember { 'medium' }
     * @unionmember { 'short' }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DateStyle = 'full' | 'long' | 'medium' | 'short';

    /**
     * Time style for DateTimeFormat.
     *
     * @unionmember { 'full' }
     * @unionmember { 'long' }
     * @unionmember { 'medium' }
     * @unionmember { 'short' }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type TimeStyle = 'full' | 'long' | 'medium' | 'short';

    /**
     * Time zone name style for DateTimeFormat.
     *
     * @unionmember { 'short' }
     * @unionmember { 'long' }
     * @unionmember { 'shortOffset' }
     * @unionmember { 'longOffset' }
     * @unionmember { 'shortGeneric' }
     * @unionmember { 'longGeneric' }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type TimeZoneName = 'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';

    /**
     * Granularity type for text segmentation.
     *
     * @unionmember { 'grapheme' }
     * @unionmember { 'word' }
     * @unionmember { 'sentence' }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type SegmenterGranularity = 'grapheme' | 'word' | 'sentence';

    /**
     * Looks up a locale from the given language tags.
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - the locale.
     * @returns { string } the resolved locale.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLookUpLocale(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string;

    /**
     * Gets the best fit locale from the given language tags.
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - the locale.
     * @returns { string } the best fit locale.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlBestFitLocale(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string;

    /**
     * Looks up locales from the given language tags.
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - the locales.
     * @returns { string[] } the resolved locales.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLookUpLocales(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string[];

    /**
     * Gets the best fit locales from the given language tags.
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - the locales.
     * @returns { string[] } the best fit locales.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlBestFitLocales(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string[];

    /**
     * Converts locales to language tags.
     *
     * @param { string | Intl.Locale | ReadonlyArray<string | Intl.Locale> | undefined } locales - the locales.
     * @returns { string[] } the language tags.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLocalesToLanguageTags(locales: string | Intl.Locale | ReadonlyArray<string | Intl.Locale> | 
        undefined): string[];

    /**
     * Resolved collator options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedCollatorOptions {    
      /**
       * Case first option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst: string;
      /**
       * Collation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation: string;
      /**
       * Ignore punctuation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      ignorePunctuation: boolean;
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Numeric option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric: boolean;
      /**
       * Sensitivity option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      sensitivity: string;
      /**
       * Usage option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      usage: string;
    }

    /**
     * Collator options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface CollatorOptions {    
      /**
       * Case first option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst?: string | undefined;
      /**
       * Collation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation?: string | undefined;
      /**
       * Ignore punctuation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      ignorePunctuation?: boolean | undefined;
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: string | undefined;
      /**
       * Numeric option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: boolean | undefined;
      /**
       * Sensitivity option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      sensitivity?: string | undefined;
      /**
       * Usage option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      usage?: string | undefined;
    }

    /**
     * Collator class for locale-sensitive string comparison.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Collator {    
        /**
         * Compares two strings.
         *
         * @param { string } x - first string to compare.
         * @param { string } y - second string to compare.
         * @returns { double } comparison result.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public compare(x: string, y: string): double;

        /**
         * Creates a new Collator.
         *
         * @param { string | string[] } [locales] - the locales.
         * @param { CollatorOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: CollatorOptions);

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedCollatorOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedCollatorOptions;

        /**
         * Returns supported locales.
         *
         * @param { string | string[] } locales - the locales.
         * @param { CollatorOptions } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];
    }

    /**
     * Resolved date time format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedDateTimeFormatOptions {    
      /**
       * Calendar option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar: string;
      /**
       * Date style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dateStyle?: 'full' | 'long' | 'medium' | 'short';
      /**
       * Day option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      day?: string;
      /**
       * Day period option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dayPeriod?: 'narrow' | 'short' | 'long';
      /**
       * Era option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      era?: string;
      /**
       * Format matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      formatMatcher?: 'basic' | 'best fit';
      /**
       * Fractional second digits option.
       * The value should be an integer.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fractionalSecondDigits?: double;
      /**
       * Hour12 option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour12?: boolean;
      /**
       * Hour option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour?: string;
      /**
       * Hour cycle option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Minute option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minute?: string;
      /**
       * Month option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      month?: string;
      /**
       * Numbering system option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * Second option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      second?: string;
      /**
       * Time style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeStyle?: 'full' | 'long' | 'medium' | 'short';
      /**
       * Time zone option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZone: string;
      /**
       * Time zone name option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZoneName?: string;
      /**
       * Weekday option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      weekday?: string;
      /**
       * Year option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      year?: string;
    }

    /**
     * Date time format part.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeFormatPart {    
      /**
       * Part type.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DateTimeFormatPartTypes;
      /**
       * Part value.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * Date time range format part.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeRangeFormatPart extends DateTimeFormatPart {    
      /**
       * Part source.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      source: DateTimeRangeFormatPartSource;
    }

    /**
     * Date time format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeFormatOptions {    
      /**
       * Calendar option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar?: string;
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit';
      /**
       * Date style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dateStyle?: DateStyle;
      /**
       * Day option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      day?: 'numeric' | '2-digit';
      /**
       * Day period option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dayPeriod?: 'narrow' | 'short' | 'long';
      /**
       * Era option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      era?: 'long' | 'short' | 'narrow';
      /**
       * Format matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      formatMatcher?: 'basic' | 'best fit';
      /**
       * Fractional second digits option.
       * The value should be an integer.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fractionalSecondDigits?: double;
      /**
       * Hour12 option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour12?: boolean;
      /**
       * Hour option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour?: 'numeric' | '2-digit';
      /**
       * Hour cycle option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
      /**
       * Minute option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minute?: 'numeric' | '2-digit';
      /**
       * Month option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
      /**
       * Numbering system option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem?: string;
      /**
       * Second option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      second?: 'numeric' | '2-digit';
      /**
       * Time style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeStyle?: TimeStyle;
      /**
       * Time zone option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZone?: string;
      /**
       * Time zone name option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZoneName?: TimeZoneName;
      /**
       * Weekday option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      weekday?: 'long' | 'short' | 'narrow';
      /**
       * Year option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      year?: 'numeric' | '2-digit';
    }

    /**
     * Date time format class for locale-sensitive date formatting.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class DateTimeFormat {    
        /**
         * Creates a new DateTimeFormat.
         *
         * @param { string | string[] } [locales] - the locales.
         * @param { DateTimeFormatOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: DateTimeFormatOptions);

        /**
         * Formats a date.
         *
         * @param { Date | double } [date] - the date to format.
         * @returns { string } formatted date string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(date?: Date | double): string;

        /**
         * Formats a date to parts.
         *
         * @param { Date | double } [date] - the date to format.
         * @returns { DateTimeFormatPart[] } formatted parts.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(date?: Date | double): DateTimeFormatPart[];

        /**
         * Formats a date range.
         *
         * @param { Date | double } startDate - start date.
         * @param { Date | double } endDate - end date.
         * @returns { string } formatted range string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRange(startDate: Date | double, endDate: Date | double): string;

        /**
         * Formats a date range to parts.
         *
         * @param { Date | double } startDate - start date.
         * @param { Date | double } endDate - end date.
         * @returns { DateTimeRangeFormatPart[] } formatted range parts.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRangeToParts(startDate: Date | double, endDate: Date | double): DateTimeRangeFormatPart[];

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedDateTimeFormatOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedDateTimeFormatOptions;

        /**
         * Returns supported locales.
         *
         * @param { string | Locale | ReadonlyArray<string | Locale> } locales - the locales.
         * @param { DateTimeFormatOptions } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | Locale | ReadonlyArray<string | Locale>, 
            options?: DateTimeFormatOptions): string[];
    }

    /**
     * Options for creating a DisplayNames object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DisplayNamesOptions {    
      /**
       * Fallback option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fallback?: DisplayNamesFallback;
      /**
       * Language display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      languageDisplay?: DisplayNamesLanguageDisplay;
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: RelativeTimeFormatStyle;
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DisplayNamesType;
    }

    /**
     * Options for locale matching when using supportedLocalesOf.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DisplayNamesLocaleMatcherOptions {    
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
    }

    /**
     * Resolved options returned by the resolvedOptions method.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedDisplayNamesOptions {    
      /**
       * Fallback option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fallback: DisplayNamesFallback;
      /**
       * Language display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      languageDisplay?: DisplayNamesLanguageDisplay;
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: UnicodeBCP47LocaleIdentifier;
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: RelativeTimeFormatStyle;
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DisplayNamesType;
    }

    /**
     * DisplayNames class for locale-sensitive name display.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class DisplayNames {    
        /**
         * Creates a new DisplayNames.
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } [locales] - the locales.
         * @param { DisplayNamesOptions } [options] - the options.
         * @throws { TypeError } if - options is undefined or type is not specified.
         * @throws { RangeError } if - an invalid locale or option value is provided.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: DisplayNamesOptions);

        /**
         * Returns the localized display name for the provided code.
         *
         * @param { string } code - the code to get display name for.
         * @returns { string | undefined } the display name.
         * @throws { RangeError } if - the code is invalid for the current type.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public of(code: string): string | undefined;

        /**
         * Returns the resolved options.
         *
         * @returns { ResolvedDisplayNamesOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedDisplayNamesOptions;

        /**
         * Returns an array of supported locales.
         *
         * @param { string | Locale | FixedArray<string | Locale> } locales - the locales.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | Locale | FixedArray<string | Locale>): string[];
    }

    /**
     * List format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ListFormatOptions {    
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: ListFormatLocaleMatcher | undefined;
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: ListFormatStyle | undefined;
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type?: ListFormatType | undefined;
    }

    /**
     * Format to parts result.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface FormatToPartsResult {    
      /**
       * Result type.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: 'element' | 'literal';
      /**
       * Result value.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * ListFormat class for locale-sensitive list formatting.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class ListFormat {    
        /**
         * Creates a new ListFormat.
         *
         * @param { string | string[] } [locales] - the locales.
         * @param { ListFormatOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: ListFormatOptions);

        /**
         * Formats a list.
         *
         * @param { Iterable<string> } list - the list to format.
         * @returns { string } formatted string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(list: Iterable<string>): string;

        /**
         * Formats a list to parts.
         *
         * @param { Iterable<string> } list - the list to format.
         * @returns { Array<FormatToPartsResult> } formatted parts.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(list: Iterable<string>): Array<FormatToPartsResult>;

        /**
         * Returns supported locales.
         *
         * @param { string | string[] } locales - the locales.
         * @param { ListFormatLocaleMatcher } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: ListFormatLocaleMatcher): string[];
    }

    /**
     * Locale options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface LocaleOptions {    
      /**
       * Base name option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      baseName?: string;
      /**
       * Language option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      language?: string;
      /**
       * Calendar option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar?: string;
      /**
       * Case first option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst?: string;
      /**
       * Numeric option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: boolean;
      /**
       * Collation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation?: string;
      /**
       * Hour cycle option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: string;
      /**
       * Numbering system option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem?: string;
      /**
       * Region option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      region?: string;
      /**
       * Script option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      script?: string;
    }

    /**
     * Locale class for locale-sensitive operations.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Locale implements LocaleOptions {    
        /**
         * Sets the base name.
         *
         * @param { string | undefined } value - the base name.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set baseName(value: string | undefined);
        /**
         * Gets the base name.
         *
         * @returns { string | undefined } the base name.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get baseName(): string | undefined;
        /**
         * Sets the language.
         *
         * @param { string | undefined } value - the language.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set language(value: string | undefined);
        /**
         * Gets the language.
         *
         * @returns { string | undefined } the language.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get language(): string | undefined;
        /**
         * Sets the calendar.
         *
         * @param { string | undefined } value - the calendar.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set calendar(value: string | undefined);
        /**
         * Gets the calendar.
         *
         * @returns { string | undefined } the calendar.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get calendar(): string | undefined;
        /**
         * Sets the case first.
         *
         * @param { string | undefined } value - the case first.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set caseFirst(value: string | undefined);
        /**
         * Gets the case first.
         *
         * @returns { string | undefined } the case first.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get caseFirst(): string | undefined;
        /**
         * Sets the numeric.
         *
         * @param { boolean | undefined } value - the numeric.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set numeric(value: boolean | undefined);
        /**
         * Gets the numeric.
         *
         * @returns { boolean | undefined } the numeric.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get numeric(): boolean | undefined;
        /**
         * Sets the collation.
         *
         * @param { string | undefined } value - the collation.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set collation(value: string | undefined);
        /**
         * Gets the collation.
         *
         * @returns { string | undefined } the collation.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get collation(): string | undefined;
        /**
         * Sets the hour cycle.
         *
         * @param { string | undefined } value - the hour cycle.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set hourCycle(value: string | undefined);
        /**
         * Gets the hour cycle.
         *
         * @returns { string | undefined } the hour cycle.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get hourCycle(): string | undefined;
        /**
         * Sets the numbering system.
         *
         * @param { string | undefined } value - the numbering system.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set numberingSystem(value: string | undefined);
        /**
         * Gets the numbering system.
         *
         * @returns { string | undefined } the numbering system.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get numberingSystem(): string | undefined;
        /**
         * Sets the region.
         *
         * @param { string | undefined } value - the region.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set region(value: string | undefined);
        /**
         * Gets the region.
         *
         * @returns { string | undefined } the region.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get region(): string | undefined;
        /**
         * Sets the script.
         *
         * @param { string | undefined } value - the script.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set script(value: string | undefined);
        /**
         * Gets the script.
         *
         * @returns { string | undefined } the script.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get script(): string | undefined;

        /**
         * Creates a new Locale.
         *
         * @param { BCP47LanguageTag | Locale } tag - the tag.
         * @param { LocaleOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(tag: BCP47LanguageTag | Locale, options?: LocaleOptions);

        /**
         * Gets the most likely values for language, script, and region.
         *
         * @returns { Locale } locale with maximized info.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public maximize(): Locale;

        /**
         * Removes information that would be added by maximize().
         *
         * @returns { Locale } locale with minimized info.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public minimize(): Locale;

        /**
         * Returns the full locale identifier string.
         *
         * @returns { BCP47LanguageTag } the locale identifier.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public toString(): BCP47LanguageTag;

        /**
         * Gets the language list.
         *
         * @returns { string } the language list.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public langList(): string;
        /**
         * Gets the region list.
         *
         * @returns { string } the region list.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public regionList(): string;
        /**
         * Gets the script list.
         *
         * @returns { string } the script list.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public scriptList(): string;
        /**
         * Gets the numbering system list.
         *
         * @returns { string } the numbering system list.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public numberingSystemList(): string;
        /**
         * Initializes the locale.
         *
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public initLocale(): void;
        /**
         * Maximizes the locale info.
         *
         * @param { string } lang - the language.
         * @returns { string } the maximized info.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public maximizeInfo(lang: string): string;
        /**
         * Checks if the tag is valid.
         *
         * @param { string } tag - the tag.
         * @returns { int } 1 if valid, 0 otherwise.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public isTagValid(tag: string): int;
        /**
         * Parses the tag.
         *
         * @param { string } tag - the tag.
         * @returns { string } the parsed tag.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public parseTagImpl(tag: string): string;

        /**
         * Gets the default tag.
         *
         * @returns { string } the default tag.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static defaultTag(): string;
    }

    /**
     * Number range format part.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberRangeFormatPart {    
        /**
         * The constructor.
         *
         * @param { NumberFormatPartTypes } type
         * @param { string } value
         * @param { 'startRange' | 'endRange' | 'shared' } source
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(type: NumberFormatPartTypes, value: string, source: 'startRange' | 'endRange' | 'shared');
    }

    /**
     * Number format part.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberFormatPart {    
        /**
         * The constructor.
         *
         * @param { NumberFormatPartTypes } type
         * @param { string } value
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(type: NumberFormatPartTypes, value: string);
    }

    /**
     * Number format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface NumberFormatOptions {    
      /**
       * Compact display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      compactDisplay?: 'short' | 'long';
      /**
       * Currency option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currency?: string;
      /**
       * Currency display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencyDisplay?: 'code' | 'symbol' | 'narrowSymbol' | 'name';
      /**
       * Currency sign option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencySign?: 'standard' | 'accounting';
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit';
      /**
       * Maximum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits?: double;
      /**
       * Maximum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * Minimum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits?: double;
      /**
       * Minimum integer digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits?: double;
      /**
       * Minimum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * Notation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
      /**
       * Sign display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: 'decimal' | 'percent' | 'currency' | 'unit';
      /**
       * Unit option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: string;
      /**
       * Unit display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unitDisplay?: 'short' | 'long' | 'narrow';
      /**
       * Use grouping option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      useGrouping?: boolean;
    }

    /**
     * Resolved number format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedNumberFormatOptions {    
      /**
       * Compact display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      compactDisplay?: 'short' | 'long';
      /**
       * Currency sign option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencySign?: 'standard' | 'accounting';
      /**
       * Currency option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currency?: string;
      /**
       * Currency display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencyDisplay?: 'code' | 'symbol' | 'narrowSymbol' | 'name';
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: Intl.BCP47LanguageTag;
      /**
       * Maximum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * Maximum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * Minimum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * Minimum integer digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * Minimum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * Notation option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
      /**
       * Numbering system option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * Sign display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: 'decimal' | 'percent' | 'currency' | 'unit';
      /**
       * Unit option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: string;
      /**
       * Unit display option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unitDisplay?: 'short' | 'long' | 'narrow';
      /**
       * Use grouping option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      useGrouping: boolean;
    }

    /**
     * NumberFormat class for locale-sensitive number formatting.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberFormat {    
        /**
         * Creates a new NumberFormat.
         *
         * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } [locales] - the locales.
         * @param { NumberFormatOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[], options?: NumberFormatOptions);

        /**
         * Formats a number.
         *
         * @param { long } value - the number to format.
         * @returns { string } formatted string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: long): string;

        /**
         * Formats a number.
         *
         * @param { double } value - the number to format.
         * @returns { string } formatted string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double): string;

        /**
         * Formats a number.
         *
         * @param { double | bigint | long } value - the number to format.
         * @returns { string } formatted string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double | bigint | long): string;

        /**
         * Formats a range of numbers.
         *
         * @param { double | bigint } start - start of range.
         * @param { double | bigint } end - end of range.
         * @returns { string } formatted range string.
         * @throws { TypeError } if - start or end is NaN.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRange(start: double | bigint, end: double | bigint): string;

        /**
         * Formats a range to parts.
         *
         * @param { double | bigint } start - start of range.
         * @param { double | bigint } end - end of range.
         * @returns { NumberRangeFormatPart[] } formatted range parts.
         * @throws { TypeError } if - start or end is NaN.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRangeToParts(start: double | bigint, end: double | bigint): NumberRangeFormatPart[];

        /**
         * Formats a number to parts.
         *
         * @param { double | bigint } value - the number to format.
         * @returns { NumberFormatPart[] } formatted parts.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(value: double | bigint): NumberFormatPart[];

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedNumberFormatOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedNumberFormatOptions;

        /**
         * Returns supported locales.
         *
         * @param { string | string[] } locales - the locales.
         * @param { NumberFormatOptions } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];
    }

    /**
     * PluralRules options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PluralRulesOptions {    
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit' | undefined;
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type?: PluralRuleType | undefined;
      /**
       * Minimum integer digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits?: double | undefined;
      /**
       * Minimum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits?: double | undefined;
      /**
       * Maximum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits?: double | undefined;
      /**
       * Minimum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double | undefined;
      /**
       * Maximum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double | undefined;
    }

    /**
     * Resolved PluralRules options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedPluralRulesOptions {    
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher: 'lookup' | 'best fit';
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: PluralRuleType;
      /**
       * Minimum integer digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * Minimum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * Maximum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * Minimum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * Maximum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * Plural categories.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      pluralCategories: FixedArray<LDMLPluralRule>;
    }

    /**
     * Supported locales of options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SupportedLocalesOfOptions {    
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit' | undefined;
    }

    /**
     * PluralRules select options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PluralRulesSelectOptions {    
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Type option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: string;
      /**
       * Minimum integer digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * Minimum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * Maximum fraction digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * Minimum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits: double;
      /**
       * Maximum significant digits option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits: double;
    }

    /**
     * PluralRules class for locale-sensitive plural formatting.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class PluralRules {    
        /**
         * Creates a new PluralRules.
         *
         * @param { string | FixedArray<string> } [locales] - the locales.
         * @param { PluralRulesOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | FixedArray<string>, options?: PluralRulesOptions);

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedPluralRulesOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedPluralRulesOptions;

        /**
         * Selects a plural rule category.
         *
         * @param { double } value - the value.
         * @returns { LDMLPluralRule } the plural rule.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public select(value: double): LDMLPluralRule;

        /**
         * Returns supported locales.
         *
         * @param { string | FixedArray<string> | Array<string> } locales - the locales.
         * @param { SupportedLocalesOfOptions | PluralRulesOptions } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | FixedArray<string> | Array<string>, 
            options?: SupportedLocalesOfOptions | PluralRulesOptions): string[];
    }

    /**
     * Resolved relative time format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedRelativeTimeFormatOptions {    
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Numbering system option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * Numeric option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric: RelativeTimeFormatNumeric;
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: RelativeTimeFormatStyle;
    }

    /**
     * Relative time format options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface RelativeTimeFormatOptions {    
      /**
       * Numeric option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: RelativeTimeFormatNumeric;
      /**
       * Style option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: RelativeTimeFormatStyle;
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
    }

    /**
     * Relative time format part.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface RelativeTimeFormatPart {    
      /**
       * Part type.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: string;
      /**
       * Unit option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: RelativeTimeFormatUnit;
      /**
       * Part value.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * RelativeTimeFormat class for locale-sensitive relative time formatting.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class RelativeTimeFormat {    
        /**
         * Creates a new RelativeTimeFormat.
         *
         * @param { string | string[] } [locales] - the locales.
         * @param { RelativeTimeFormatOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(locales?: string | string[], options?: RelativeTimeFormatOptions);

        /**
         * Formats a relative time.
         *
         * @param { double } value - the value.
         * @param { RelativeTimeFormatUnit } unit - the unit.
         * @returns { string } formatted string.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double, unit: RelativeTimeFormatUnit): string;

        /**
         * Formats a relative time to parts.
         *
         * @param { double } value - the value.
         * @param { RelativeTimeFormatUnit } unit - the unit.
         * @returns { RelativeTimeFormatPart[] } formatted parts.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(value: double, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedRelativeTimeFormatOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedRelativeTimeFormatOptions;

        /**
         * Returns supported locales.
         *
         * @param { string | string[] } locales - the locales.
         * @param { RelativeTimeFormatOptions } [options] - the options.
         * @returns { string[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: RelativeTimeFormatOptions): string[];
    }

    /**
     * Segment data interface.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SegmentData {    
      /**
       * Segment index.
       * The value should be an integer.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      index: double;
      /**
       * Input string.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      input: string;
      /**
       * Is word like option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      isWordLike: boolean | undefined;
      /**
       * Segment string.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      segment: string;
    }

    /**
     * Segmenter options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SegmenterOptions {    
      /**
       * Locale matcher option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'best fit' | 'lookup';
      /**
       * Granularity option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      granularity?: SegmenterGranularity;
    }

    /**
     * Resolved segmenter options.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedSegmenterOptions {    
      /**
       * Locale identifier.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * Granularity option.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      granularity: SegmenterGranularity;
    }

    /**
     * Segments iterator class.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Segments implements IterableIterator<SegmentData> {    
        /**
         * Creates a new Segments iterator.
         *
         * @param { SegmentData[] } parent - the parent segments array.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(parent: SegmentData[]);

        /**
         * Returns itself as the iterator.
         *
         * @returns { IterableIterator<SegmentData> } the iterator.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public $_iterator(): IterableIterator<SegmentData>;

        /**
         * Returns the next result in the segments iterator.
         *
         * @returns { IteratorResult<SegmentData> } the next iteration result.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public next(): IteratorResult<SegmentData>;
    }

    /**
     * Options for locale matching in Segmenter supportedLocalesOf.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PickLocaleMatchSegmenterOptions {    
      /**
       * The locale matching algorithm to use. The default is 'best fit'.
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'best fit' | 'lookup';
    }

    /**
     * Segmenter class for locale-sensitive text segmentation.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Segmenter {    
        /**
         * Creates a new Segmenter.
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } [locales] - the locales.
         * @param { SegmenterOptions } [options] - the options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: SegmenterOptions);

        /**
         * Segments a document.
         *
         * @param { string } doc - the text to segment.
         * @returns { Segments } the segments.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public segment(doc: string): Segments;

        /**
         * Returns resolved options.
         *
         * @returns { ResolvedSegmenterOptions } the resolved options.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedSegmenterOptions;

        /**
         * Returns supported locales.
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } locales - the locales.
         * @param { PickLocaleMatchSegmenterOptions } [options] - the options.
         * @returns { BCP47LanguageTag[] } supported locales.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], 
            options?: PickLocaleMatchSegmenterOptions): BCP47LanguageTag[];
    }
}
