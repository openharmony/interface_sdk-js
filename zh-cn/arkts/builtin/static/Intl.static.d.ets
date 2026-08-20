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
 * Intl。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace Intl {
    /**
     * BCP 47语言标签类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type BCP47LanguageTag = string;

    /**
     * 展示名称的回退选项。
     *
     * @unionmember {'code'}
     * @unionmember {'none'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DisplayNamesFallback = 'code' | 'none';

    /**
     * 语言展示选项。
     *
     * @unionmember {'dialect'}
     * @unionmember {'standard'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type DisplayNamesLanguageDisplay = 'dialect' | 'standard';

    /**
     * 展示名称的类型。
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
     * ES2018定义的数字格式化片段类型。
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
     * ES2020定义的数字格式化片段类型。
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
     * LDML复数规则类型。
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
     * 区域匹配算法选项。
     *
     * @unionmember {'lookup'}
     * @unionmember {'best fit'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type ListFormatLocaleMatcher = 'lookup' | 'best fit';

    /**
     * 列表格式化样式。
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
     * 列表格式化类型。
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
     * 区域排序中的大小写优先选项。
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
     * 区域设置的小时制键。
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
     * NumberFormat片段类型。
     *
     * @unionmember { ES2018NumberFormatPartType }
     * @unionmember { ES2020NumberFormatPartType }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type NumberFormatPartTypes = ES2018NumberFormatPartType | ES2020NumberFormatPartType;

    /**
     * 复数规则类型。
     *
     * @unionmember {'cardinal'}
     * @unionmember {'ordinal'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type PluralRuleType = 'cardinal' | 'ordinal';

    /**
     * 相对时间格式化的区域匹配算法。
     *
     * @unionmember {'lookup'}
     * @unionmember {'best fit'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatLocaleMatcher = 'lookup' | 'best fit';

    /**
     * 相对时间格式化的数值选项。
     *
     * @unionmember {'always'}
     * @unionmember {'auto'}
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type RelativeTimeFormatNumeric = 'always' | 'auto';

    /**
     * 相对时间格式化样式。
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
     * 相对时间格式化单位。
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
     * 相对时间格式化单位的单数形式。
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
     * Unicode BCP 47区域设置标识符。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export type UnicodeBCP47LocaleIdentifier = string;

    /**
     * 日期时间格式化片段类型。
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
     * 日期时间区间格式化片段来源。
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
     * 区域设置参数类型。
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
     * DateTimeFormat的日期样式。
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
     * DateTimeFormat的时间样式。
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
     * DateTimeFormat的时区名称样式。
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
     * 文本分段的粒度类型。
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
     * 从给定的语言标签中查找区域设置。
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - 区域设置。
     * @returns { string } 解析得到的区域设置。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLookUpLocale(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string;

    /**
     * 从给定的语言标签中获取最佳匹配的区域设置。
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - 区域设置。
     * @returns { string } 最佳匹配的区域设置。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlBestFitLocale(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string;

    /**
     * 从给定的语言标签中查找区域设置列表。
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - 区域设置。
     * @returns { string[] } 解析得到的区域设置列表。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLookUpLocales(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string[];

    /**
     * 从给定的语言标签中获取最佳匹配的区域设置列表。
     *
     * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } locale - 区域设置。
     * @returns { string[] } 最佳匹配的区域设置列表。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlBestFitLocales(locale: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[]): string[];

    /**
     * 将区域设置转换为语言标签。
     *
     * @param { string | Intl.Locale | ReadonlyArray<string | Intl.Locale> | undefined } locales - 区域设置。
     * @returns { string[] } 语言标签。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function intlLocalesToLanguageTags(locales: string | Intl.Locale | ReadonlyArray<string | Intl.Locale> | 
        undefined): string[];

    /**
     * 解析后的排序器选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedCollatorOptions {    
      /**
       * 大小写优先选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst: string;
      /**
       * 排序规则选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation: string;
      /**
       * 忽略标点选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      ignorePunctuation: boolean;
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 数值排序选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric: boolean;
      /**
       * 敏感度选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      sensitivity: string;
      /**
       * 用途选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      usage: string;
    }

    /**
     * 排序器选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface CollatorOptions {    
      /**
       * 大小写优先选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst?: string | undefined;
      /**
       * 排序规则选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation?: string | undefined;
      /**
       * 忽略标点选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      ignorePunctuation?: boolean | undefined;
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: string | undefined;
      /**
       * 数值排序选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: boolean | undefined;
      /**
       * 敏感度选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      sensitivity?: string | undefined;
      /**
       * 用途选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      usage?: string | undefined;
    }

    /**
     * 用于按区域设置比较字符串的Collator类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Collator {    
        /**
         * 比较两个字符串。
         *
         * @param { string } x - 参与比较的第一个字符串。
         * @param { string } y - 参与比较的第二个字符串。
         * @returns { double } 比较结果。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public compare(x: string, y: string): double;

        /**
         * 创建新的Collator。
         *
         * @param { string | string[] } [locales] - 区域设置。
         * @param { CollatorOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: CollatorOptions);

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedCollatorOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedCollatorOptions;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | string[] } locales - 区域设置。
         * @param { CollatorOptions } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];
    }

    /**
     * 解析后的日期时间格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedDateTimeFormatOptions {    
      /**
       * 日历选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar: string;
      /**
       * 日期样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dateStyle?: 'full' | 'long' | 'medium' | 'short';
      /**
       * 日选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      day?: string;
      /**
       * 时段选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dayPeriod?: 'narrow' | 'short' | 'long';
      /**
       * 纪元选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      era?: string;
      /**
       * 格式匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      formatMatcher?: 'basic' | 'best fit';
      /**
       * 秒的小数位数选项。
       * 取值约束：应为整数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fractionalSecondDigits?: double;
      /**
       * 12小时制选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour12?: boolean;
      /**
       * 小时选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour?: string;
      /**
       * 小时制选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 分钟选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minute?: string;
      /**
       * 月份选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      month?: string;
      /**
       * 记数系统选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * 秒选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      second?: string;
      /**
       * 时间样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeStyle?: 'full' | 'long' | 'medium' | 'short';
      /**
       * 时区选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZone: string;
      /**
       * 时区名称选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZoneName?: string;
      /**
       * 星期选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      weekday?: string;
      /**
       * 年份选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      year?: string;
    }

    /**
     * 日期时间格式化片段。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeFormatPart {    
      /**
       * 片段类型。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DateTimeFormatPartTypes;
      /**
       * 片段值。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * 日期时间区间格式化片段。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeRangeFormatPart extends DateTimeFormatPart {    
      /**
       * 片段来源。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      source: DateTimeRangeFormatPartSource;
    }

    /**
     * 日期时间格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DateTimeFormatOptions {    
      /**
       * 日历选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar?: string;
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit';
      /**
       * 日期样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dateStyle?: DateStyle;
      /**
       * 日选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      day?: 'numeric' | '2-digit';
      /**
       * 时段选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      dayPeriod?: 'narrow' | 'short' | 'long';
      /**
       * 纪元选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      era?: 'long' | 'short' | 'narrow';
      /**
       * 格式匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      formatMatcher?: 'basic' | 'best fit';
      /**
       * 秒的小数位数选项。
       * 取值约束：应为整数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fractionalSecondDigits?: double;
      /**
       * 12小时制选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour12?: boolean;
      /**
       * 小时选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hour?: 'numeric' | '2-digit';
      /**
       * 小时制选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
      /**
       * 分钟选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minute?: 'numeric' | '2-digit';
      /**
       * 月份选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
      /**
       * 记数系统选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem?: string;
      /**
       * 秒选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      second?: 'numeric' | '2-digit';
      /**
       * 时间样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeStyle?: TimeStyle;
      /**
       * 时区选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZone?: string;
      /**
       * 时区名称选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      timeZoneName?: TimeZoneName;
      /**
       * 星期选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      weekday?: 'long' | 'short' | 'narrow';
      /**
       * 年份选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      year?: 'numeric' | '2-digit';
    }

    /**
     * 用于按区域设置格式化日期的日期时间格式化类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class DateTimeFormat {    
        /**
         * 创建新的DateTimeFormat。
         *
         * @param { string | string[] } [locales] - 区域设置。
         * @param { DateTimeFormatOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: DateTimeFormatOptions);

        /**
         * 格式化日期。
         *
         * @param { Date | double } [date] - 待格式化的日期。
         * @returns { string } 格式化后的日期字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(date?: Date | double): string;

        /**
         * 将日期格式化为多个片段。
         *
         * @param { Date | double } [date] - 待格式化的日期。
         * @returns { DateTimeFormatPart[] } 格式化后的各个片段。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(date?: Date | double): DateTimeFormatPart[];

        /**
         * 格式化日期区间。
         *
         * @param { Date | double } startDate - 起始日期。
         * @param { Date | double } endDate - 结束日期。
         * @returns { string } 格式化后的区间字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRange(startDate: Date | double, endDate: Date | double): string;

        /**
         * 将日期区间格式化为多个片段。
         *
         * @param { Date | double } startDate - 起始日期。
         * @param { Date | double } endDate - 结束日期。
         * @returns { DateTimeRangeFormatPart[] } 格式化后的区间各片段。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRangeToParts(startDate: Date | double, endDate: Date | double): DateTimeRangeFormatPart[];

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedDateTimeFormatOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedDateTimeFormatOptions;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | Locale | ReadonlyArray<string | Locale> } locales - 区域设置。
         * @param { DateTimeFormatOptions } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | Locale | ReadonlyArray<string | Locale>, 
            options?: DateTimeFormatOptions): string[];
    }

    /**
     * 创建DisplayNames对象的选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DisplayNamesOptions {    
      /**
       * 回退选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fallback?: DisplayNamesFallback;
      /**
       * 语言展示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      languageDisplay?: DisplayNamesLanguageDisplay;
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: RelativeTimeFormatStyle;
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DisplayNamesType;
    }

    /**
     * 使用supportedLocalesOf时的区域匹配选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface DisplayNamesLocaleMatcherOptions {    
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
    }

    /**
     * resolvedOptions方法返回的解析后选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedDisplayNamesOptions {    
      /**
       * 回退选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      fallback: DisplayNamesFallback;
      /**
       * 语言展示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      languageDisplay?: DisplayNamesLanguageDisplay;
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: UnicodeBCP47LocaleIdentifier;
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: RelativeTimeFormatStyle;
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: DisplayNamesType;
    }

    /**
     * 用于按区域设置展示名称的DisplayNames类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class DisplayNames {    
        /**
         * 创建新的DisplayNames。
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } [locales] - 区域设置。
         * @param { DisplayNamesOptions } [options] - 选项。
         * @throws { TypeError } 当options为undefined或未指定type时，抛出该异常。
         * @throws { RangeError } 当传入非法的区域设置或选项值时，抛出该异常。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: DisplayNamesOptions);

        /**
         * 返回给定代码的本地化展示名称。
         *
         * @param { string } code - 待获取展示名称的代码。
         * @returns { string | undefined } 展示名称。
         * @throws { RangeError } 当该代码对当前type非法时，抛出该异常。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public of(code: string): string | undefined;

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedDisplayNamesOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedDisplayNamesOptions;

        /**
         * 返回支持的区域设置数组。
         *
         * @param { string | Locale | FixedArray<string | Locale> } locales - 区域设置。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | Locale | FixedArray<string | Locale>): string[];
    }

    /**
     * 列表格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ListFormatOptions {    
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: ListFormatLocaleMatcher | undefined;
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: ListFormatStyle | undefined;
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type?: ListFormatType | undefined;
    }

    /**
     * 格式化为片段的结果。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface FormatToPartsResult {    
      /**
       * 结果类型。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: 'element' | 'literal';
      /**
       * 结果值。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * 用于按区域设置格式化列表的ListFormat类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class ListFormat {    
        /**
         * 创建新的ListFormat。
         *
         * @param { string | string[] } [locales] - 区域设置。
         * @param { ListFormatOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | string[], options?: ListFormatOptions);

        /**
         * 格式化列表。
         *
         * @param { Iterable<string> } list - 待格式化的列表。
         * @returns { string } 格式化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(list: Iterable<string>): string;

        /**
         * 将列表格式化为多个片段。
         *
         * @param { Iterable<string> } list - 待格式化的列表。
         * @returns { Array<FormatToPartsResult> } 格式化后的各个片段。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(list: Iterable<string>): Array<FormatToPartsResult>;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | string[] } locales - 区域设置。
         * @param { ListFormatLocaleMatcher } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: ListFormatLocaleMatcher): string[];
    }

    /**
     * 区域设置选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface LocaleOptions {    
      /**
       * 基础名称选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      baseName?: string;
      /**
       * 语言选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      language?: string;
      /**
       * 日历选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      calendar?: string;
      /**
       * 大小写优先选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      caseFirst?: string;
      /**
       * 数值排序选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: boolean;
      /**
       * 排序规则选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      collation?: string;
      /**
       * 小时制选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      hourCycle?: string;
      /**
       * 记数系统选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem?: string;
      /**
       * 地区选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      region?: string;
      /**
       * 文字选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      script?: string;
    }

    /**
     * 用于区域相关操作的Locale类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Locale implements LocaleOptions {    
        /**
         * 设置基础名称。
         *
         * @param { string | undefined } value - 基础名称。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set baseName(value: string | undefined);
        /**
         * 获取基础名称。
         *
         * @returns { string | undefined } 基础名称。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get baseName(): string | undefined;
        /**
         * 设置语言。
         *
         * @param { string | undefined } value - 语言。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set language(value: string | undefined);
        /**
         * 获取语言。
         *
         * @returns { string | undefined } 语言。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get language(): string | undefined;
        /**
         * 设置日历。
         *
         * @param { string | undefined } value - 日历。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set calendar(value: string | undefined);
        /**
         * 获取日历。
         *
         * @returns { string | undefined } 日历。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get calendar(): string | undefined;
        /**
         * 设置大小写优先规则。
         *
         * @param { string | undefined } value - 大小写优先规则。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set caseFirst(value: string | undefined);
        /**
         * 获取大小写优先规则。
         *
         * @returns { string | undefined } 大小写优先规则。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get caseFirst(): string | undefined;
        /**
         * 设置数值排序选项。
         *
         * @param { boolean | undefined } value - 数值排序选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set numeric(value: boolean | undefined);
        /**
         * 获取数值排序选项。
         *
         * @returns { boolean | undefined } 数值排序选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get numeric(): boolean | undefined;
        /**
         * 设置排序规则。
         *
         * @param { string | undefined } value - 排序规则。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set collation(value: string | undefined);
        /**
         * 获取排序规则。
         *
         * @returns { string | undefined } 排序规则。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get collation(): string | undefined;
        /**
         * 设置小时制。
         *
         * @param { string | undefined } value - 小时制。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set hourCycle(value: string | undefined);
        /**
         * 获取小时制。
         *
         * @returns { string | undefined } 小时制。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get hourCycle(): string | undefined;
        /**
         * 设置记数系统。
         *
         * @param { string | undefined } value - 记数系统。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set numberingSystem(value: string | undefined);
        /**
         * 获取记数系统。
         *
         * @returns { string | undefined } 记数系统。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get numberingSystem(): string | undefined;
        /**
         * 设置地区。
         *
         * @param { string | undefined } value - 地区。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set region(value: string | undefined);
        /**
         * 获取地区。
         *
         * @returns { string | undefined } 地区。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get region(): string | undefined;
        /**
         * 设置文字。
         *
         * @param { string | undefined } value - 文字。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public set script(value: string | undefined);
        /**
         * 获取文字。
         *
         * @returns { string | undefined } 文字。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public get script(): string | undefined;

        /**
         * 创建新的Locale。
         *
         * @param { BCP47LanguageTag | Locale } tag - 标签。
         * @param { LocaleOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(tag: BCP47LanguageTag | Locale, options?: LocaleOptions);

        /**
         * 获取语言、文字和地区最可能的取值。
         *
         * @returns { Locale } 信息补全后的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public maximize(): Locale;

        /**
         * 移除maximize()会补全的信息。
         *
         * @returns { Locale } 信息精简后的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public minimize(): Locale;

        /**
         * 返回完整的区域设置标识符字符串。
         *
         * @returns { BCP47LanguageTag } 区域设置标识符。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public toString(): BCP47LanguageTag;

        /**
         * 获取语言列表。
         *
         * @returns { string } 语言列表。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public langList(): string;
        /**
         * 获取地区列表。
         *
         * @returns { string } 地区列表。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public regionList(): string;
        /**
         * 获取文字列表。
         *
         * @returns { string } 文字列表。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public scriptList(): string;
        /**
         * 获取记数系统列表。
         *
         * @returns { string } 记数系统列表。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public numberingSystemList(): string;
        /**
         * 初始化区域设置。
         *
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public initLocale(): void;
        /**
         * 补全区域设置信息。
         *
         * @param { string } lang - 语言。
         * @returns { string } 补全后的信息。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public maximizeInfo(lang: string): string;
        /**
         * 检查标签是否合法。
         *
         * @param { string } tag - 标签。
         * @returns { int } 合法时返回1，否则返回0。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public isTagValid(tag: string): int;
        /**
         * 解析标签。
         *
         * @param { string } tag - 标签。
         * @returns { string } 解析得到的标签。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public parseTagImpl(tag: string): string;

        /**
         * 获取默认标签。
         *
         * @returns { string } 默认标签。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static defaultTag(): string;
    }

    /**
     * 数字区间格式化片段。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberRangeFormatPart {    
        /**
         * 构造函数。
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
     * 数字格式化片段。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberFormatPart {    
        /**
         * 构造函数。
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
     * 数字格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface NumberFormatOptions {    
      /**
       * 紧凑显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      compactDisplay?: 'short' | 'long';
      /**
       * 货币选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currency?: string;
      /**
       * 货币显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencyDisplay?: 'code' | 'symbol' | 'narrowSymbol' | 'name';
      /**
       * 货币符号选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencySign?: 'standard' | 'accounting';
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit';
      /**
       * 小数位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits?: double;
      /**
       * 有效数字位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * 小数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits?: double;
      /**
       * 整数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits?: double;
      /**
       * 有效数字位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * 计数法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
      /**
       * 符号显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: 'decimal' | 'percent' | 'currency' | 'unit';
      /**
       * 单位选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: string;
      /**
       * 单位显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unitDisplay?: 'short' | 'long' | 'narrow';
      /**
       * 分组分隔符选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      useGrouping?: boolean;
    }

    /**
     * 解析后的数字格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedNumberFormatOptions {    
      /**
       * 紧凑显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      compactDisplay?: 'short' | 'long';
      /**
       * 货币符号选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencySign?: 'standard' | 'accounting';
      /**
       * 货币选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currency?: string;
      /**
       * 货币显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      currencyDisplay?: 'code' | 'symbol' | 'narrowSymbol' | 'name';
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: Intl.BCP47LanguageTag;
      /**
       * 小数位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * 有效数字位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * 小数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * 整数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * 有效数字位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * 计数法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
      /**
       * 记数系统选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * 符号显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: 'decimal' | 'percent' | 'currency' | 'unit';
      /**
       * 单位选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: string;
      /**
       * 单位显示选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unitDisplay?: 'short' | 'long' | 'narrow';
      /**
       * 分组分隔符选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      useGrouping: boolean;
    }

    /**
     * 用于按区域设置格式化数字的NumberFormat类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class NumberFormat {    
        /**
         * 创建新的NumberFormat。
         *
         * @param { Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[] } [locales] - 区域设置。
         * @param { NumberFormatOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: Intl.BCP47LanguageTag | Intl.BCP47LanguageTag[], options?: NumberFormatOptions);

        /**
         * 格式化数值。
         *
         * @param { long } value - 待格式化的数值。
         * @returns { string } 格式化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: long): string;

        /**
         * 格式化数值。
         *
         * @param { double } value - 待格式化的数值。
         * @returns { string } 格式化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double): string;

        /**
         * 格式化数值。
         *
         * @param { double | bigint | long } value - 待格式化的数值。
         * @returns { string } 格式化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double | bigint | long): string;

        /**
         * 格式化数值区间。
         *
         * @param { double | bigint } start - 区间起始值。
         * @param { double | bigint } end - 区间结束值。
         * @returns { string } 格式化后的区间字符串。
         * @throws { TypeError } 当start或end为NaN时，抛出该异常。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRange(start: double | bigint, end: double | bigint): string;

        /**
         * 将区间格式化为多个片段。
         *
         * @param { double | bigint } start - 区间起始值。
         * @param { double | bigint } end - 区间结束值。
         * @returns { NumberRangeFormatPart[] } 格式化后的区间各片段。
         * @throws { TypeError } 当start或end为NaN时，抛出该异常。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatRangeToParts(start: double | bigint, end: double | bigint): NumberRangeFormatPart[];

        /**
         * 将数值格式化为多个片段。
         *
         * @param { double | bigint } value - 待格式化的数值。
         * @returns { NumberFormatPart[] } 格式化后的各个片段。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(value: double | bigint): NumberFormatPart[];

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedNumberFormatOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedNumberFormatOptions;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | string[] } locales - 区域设置。
         * @param { NumberFormatOptions } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];
    }

    /**
     * PluralRules选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PluralRulesOptions {    
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit' | undefined;
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type?: PluralRuleType | undefined;
      /**
       * 整数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits?: double | undefined;
      /**
       * 小数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits?: double | undefined;
      /**
       * 小数位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits?: double | undefined;
      /**
       * 有效数字位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double | undefined;
      /**
       * 有效数字位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double | undefined;
    }

    /**
     * 解析后的PluralRules选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedPluralRulesOptions {    
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher: 'lookup' | 'best fit';
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: PluralRuleType;
      /**
       * 整数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * 小数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * 小数位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * 有效数字位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits?: double;
      /**
       * 有效数字位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits?: double;
      /**
       * 复数类别。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      pluralCategories: FixedArray<LDMLPluralRule>;
    }

    /**
     * supportedLocalesOf的选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SupportedLocalesOfOptions {    
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'lookup' | 'best fit' | undefined;
    }

    /**
     * PluralRules的select选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PluralRulesSelectOptions {    
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 类型选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: string;
      /**
       * 整数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumIntegerDigits: double;
      /**
       * 小数位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumFractionDigits: double;
      /**
       * 小数位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumFractionDigits: double;
      /**
       * 有效数字位数下限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      minimumSignificantDigits: double;
      /**
       * 有效数字位数上限选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      maximumSignificantDigits: double;
    }

    /**
     * 用于按区域设置处理复数形式的PluralRules类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class PluralRules {    
        /**
         * 创建新的PluralRules。
         *
         * @param { string | FixedArray<string> } [locales] - 区域设置。
         * @param { PluralRulesOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: string | FixedArray<string>, options?: PluralRulesOptions);

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedPluralRulesOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedPluralRulesOptions;

        /**
         * 选择复数规则类别。
         *
         * @param { double } value - 值。
         * @returns { LDMLPluralRule } 复数规则类别。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public select(value: double): LDMLPluralRule;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | FixedArray<string> | Array<string> } locales - 区域设置。
         * @param { SupportedLocalesOfOptions | PluralRulesOptions } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | FixedArray<string> | Array<string>, 
            options?: SupportedLocalesOfOptions | PluralRulesOptions): string[];
    }

    /**
     * 解析后的相对时间格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedRelativeTimeFormatOptions {    
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 记数系统选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numberingSystem: string;
      /**
       * 数值排序选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric: RelativeTimeFormatNumeric;
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style: RelativeTimeFormatStyle;
    }

    /**
     * 相对时间格式化选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface RelativeTimeFormatOptions {    
      /**
       * 数值排序选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      numeric?: RelativeTimeFormatNumeric;
      /**
       * 样式选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      style?: RelativeTimeFormatStyle;
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: RelativeTimeFormatLocaleMatcher;
    }

    /**
     * 相对时间格式化片段。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface RelativeTimeFormatPart {    
      /**
       * 片段类型。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      type: string;
      /**
       * 单位选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      unit?: RelativeTimeFormatUnit;
      /**
       * 片段值。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      value: string;
    }

    /**
     * 用于按区域设置格式化相对时间的RelativeTimeFormat类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class RelativeTimeFormat {    
        /**
         * 创建新的RelativeTimeFormat。
         *
         * @param { string | string[] } [locales] - 区域设置。
         * @param { RelativeTimeFormatOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(locales?: string | string[], options?: RelativeTimeFormatOptions);

        /**
         * 格式化相对时间。
         *
         * @param { double } value - 值。
         * @param { RelativeTimeFormatUnit } unit - 单位。
         * @returns { string } 格式化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public format(value: double, unit: RelativeTimeFormatUnit): string;

        /**
         * 将相对时间格式化为多个片段。
         *
         * @param { double } value - 值。
         * @param { RelativeTimeFormatUnit } unit - 单位。
         * @returns { RelativeTimeFormatPart[] } 格式化后的各个片段。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public formatToParts(value: double, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedRelativeTimeFormatOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedRelativeTimeFormatOptions;

        /**
         * 返回支持的区域设置。
         *
         * @param { string | string[] } locales - 区域设置。
         * @param { RelativeTimeFormatOptions } [options] - 选项。
         * @returns { string[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: string | string[], options?: RelativeTimeFormatOptions): string[];
    }

    /**
     * 分段数据接口。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SegmentData {    
      /**
       * 分段索引。
       * 取值约束：应为整数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      index: double;
      /**
       * 输入字符串。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      input: string;
      /**
       * 是否为词语的标识。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      isWordLike: boolean | undefined;
      /**
       * 分段字符串。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      segment: string;
    }

    /**
     * 分段器选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface SegmenterOptions {    
      /**
       * 区域匹配算法选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'best fit' | 'lookup';
      /**
       * 分段粒度选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      granularity?: SegmenterGranularity;
    }

    /**
     * 解析后的分段器选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface ResolvedSegmenterOptions {    
      /**
       * 区域设置标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      locale: string;
      /**
       * 分段粒度选项。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      granularity: SegmenterGranularity;
    }

    /**
     * 分段迭代器类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Segments implements IterableIterator<SegmentData> {    
        /**
         * 创建新的分段迭代器。
         *
         * @param { SegmentData[] } parent - 所属的分段数组。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(parent: SegmentData[]);

        /**
         * 返回自身作为迭代器。
         *
         * @returns { IterableIterator<SegmentData> } 迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public $_iterator(): IterableIterator<SegmentData>;

        /**
         * 返回分段迭代器中的下一个结果。
         *
         * @returns { IteratorResult<SegmentData> } 下一次迭代的结果。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public next(): IteratorResult<SegmentData>;
    }

    /**
     * Segmenter的supportedLocalesOf中区域匹配的选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export interface PickLocaleMatchSegmenterOptions {    
      /**
       * 所使用的区域匹配算法，默认值为'best fit'。
       *
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      localeMatcher?: 'best fit' | 'lookup';
    }

    /**
     * 用于按区域设置进行文本分段的Segmenter类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Segmenter {    
        /**
         * 创建新的Segmenter。
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } [locales] - 区域设置。
         * @param { SegmenterOptions } [options] - 选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public constructor(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: SegmenterOptions);

        /**
         * 对文档进行分段。
         *
         * @param { string } doc - 待分段的文本。
         * @returns { Segments } 分段结果。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public segment(doc: string): Segments;

        /**
         * 返回解析后的选项。
         *
         * @returns { ResolvedSegmenterOptions } 解析后的选项。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public resolvedOptions(): ResolvedSegmenterOptions;

        /**
         * 返回支持的区域设置。
         *
         * @param { BCP47LanguageTag | BCP47LanguageTag[] } locales - 区域设置。
         * @param { PickLocaleMatchSegmenterOptions } [options] - 选项。
         * @returns { BCP47LanguageTag[] } 支持的区域设置。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        public static supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], 
            options?: PickLocaleMatchSegmenterOptions): BCP47LanguageTag[];
    }
}
