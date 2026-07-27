/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 国际化-Intl
 * @kit LocalizationKit
 */

/**
 * 本模块提供基础的应用国际化能力，包括时间日期格式化、数字格式化、排序等，相关接口在ECMA 402标准中定义。
 * 
 * [国际化-I18n]{@link @ohos.i18n:i18n}提供其他非ECMA 402定义的国际化接口，与本模块共同使用可提供完整的国际化支持能力。
 * 
 * > **说明：**
 * >
 * > - 本模块接口基于[CLDR](https://cldr.unicode.org)国际化数据库实现，随着CLDR标准的迭代演进，接口处理结果可能会相应调整。例如数字格式化接口，其返回值仅适用于界面展示场景，开发者请勿对返回格式进行
 * > 硬编码或假设性判断，否则可能导致版本兼容问题。其中，API version 12 对应[CLDR 42](https://cldr.unicode.org/downloads/cldr-42)版本，具体数据变更详情可查阅
 * > [CLDR官方文档](https://cldr.unicode.org/)。
 * >
 * > - 从API version 11开始，本模块部分接口支持在ArkTS卡片中使用。
 * >
 * > - 从API version 12开始，本模块全接口支持在原子化服务中使用。
 *
 * @syscap SystemCapability.Global.I18n
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 12]
 * @since 6 dynamic
 */
declare namespace intl {
    /**
     * > 从API version 6开始支持，从API version 20开始废弃，以calendar为例，
     * > 区域初始化配置项。从API version 9开始，LocaleOptions属性由必填改为可选。
     * 
     * > **说明：**
     * >
     * > - calendar：不同取值的含义请参考[设置日历和历法表1](docroot://internationalization/i18n-calendar.md)。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 12]
     * @since 6 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.LocaleOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#options)
     */
    export interface LocaleOptions {
      /**
       * 历法参数，取值包括：
       * 
       * "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "
       * islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc", "
       * islamicc"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.calendar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#calendar)
       */
      calendar?: string;
  
      /**
       * 区域的排序规则，取值包括：
       * 
       * "big5han"：拉丁字母使用的拼音排序。
       * 
       * "compat"：兼容性排序，仅用于阿拉伯语。
       * 
       * "dict"：词典风格排序，仅用于僧伽罗语。
       * 
       * "direct"：二进制码点排序。
       * 
       * "ducet"：按Unicode排序元素表排序。
       * 
       * "eor"：按欧洲排序规则排序。
       * 
       * "gb2312"：拼音排序，仅用于中文排序。
       * 
       * "phonebk"：电话本风格排序。
       * 
       * "phonetic"：发音排序。
       * 
       * "pinyin"：拼音排序。
       * 
       * "reformed"：瑞典语排序。
       * 
       * "searchjl"：韩语初始辅音搜索的特殊排序。
       * 
       * "stroke"：汉语的笔画排序。
       * 
       * "trad"：传统风格排序，如西班牙语。
       * 
       * "unihan"：统一汉字排序，用于日语、韩语、中文等汉字排序。
       * 
       * "zhuyin"：注音排序，仅用于中文排序。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.collation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#collation)
       */
      collation?: string;
  
      /**
       * 时制格式，取值包括：
       * 
       * "h11", "h12", "h23", "h24"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#hourcycle)
       */
      hourCycle?: string;
  
      /**
       * 数字系统，取值包括：
       * 
       * "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide", "
       * gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham", "
       * laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong",
       *  "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment
       * ", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "
       * wara", "wcho"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#numberingsystem)
       */
      numberingSystem?: string;
  
      /**
       * true表示将数字字符视为数字进行排序处理，false表示将数字字符视为普通字符进行排序处理。例如设置为true时，字符串“21”和字符串“123”比较，相当于数字21和123比较。默认值：false。
       *
       * @type { boolean } [since 6 - 8]
       * @type { ?boolean } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#numeric)
       */
      numeric?: boolean;
  
      /**
       * 区域的排序规则是否考虑大小写，取值包括：
       * 
       * "upper"：大写排前面。
       * 
       * "lower"：小写排前面。
       * 
       * "false"：使用区域默认的大小写排序规则。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.caseFirst](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#casefirst)
       */
      caseFirst?: string;
    }
  
    /**
     * 区域信息
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 12]
     * @since 6 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
     */
    export class Locale {
      /**
       * 创建区域对象。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.Locale.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale)
       */
      constructor();
  
      /**
       * 创建区域对象。
       *
       * @param { string } locale - 表示区域ID的字符串，由语言、脚本、国家地区组成。
       * @param { LocaleOptions } options - 创建区域对象的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。 [since 6 - 11]
       * @param { LocaleOptions } [options] - 创建区域对象的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。 [since 12]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.Locale.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale)
       */
      constructor(locale: string, options?: LocaleOptions);
  
      /**
       * 与区域设置相关的语言，如：zh。取值遵循ISO 639标准。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language)
       */
      language: string;
  
      /**
       * 区域语言的书写方式（脚本），如：Hans。取值遵循ISO 15924标准。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.script](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script)
       */
      script: string;
  
      /**
       * 与区域设置相关的国家地区，如：CN。取值遵循ISO 3166标准。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.region](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region)
       */
      region: string;
  
      /**
       * 区域对象的基本信息，由语言、脚本、国家地区组成，如：zh-Hans-CN。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.baseName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName)
       */
      baseName: string;
  
      /**
       * 区域的排序规则是否考虑大小写，取值包括：
       * 
       * "upper"：大写排前面。
       * 
       * "lower"：小写排前面。
       * 
       * "false"：使用区域默认的大小写排序规则。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.caseFirst](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst)
       */
      caseFirst: string;
  
      /**
       * 区域的日历信息，取值包括：
       * 
       * "buddhist", "chinese", "coptic","dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic",
       * "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc",
       * "islamicc"。
       * 
       * 不同取值表示的含义请参考[设置日历和历法表1](docroot://internationalization/i18n-calendar.md)。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.calendar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
       */
      calendar: string;
  
      /**
       * 区域的排序规则，取值包括：
       * 
       * "big5han"：拉丁字母使用的拼音排序。
       * 
       * "compat"：兼容性排序，仅用于阿拉伯语。
       * 
       * "dict"：词典风格排序，仅用于僧伽罗语。
       * 
       * "direct"：二进制码点排序。
       * 
       * "ducet"：按Unicode排序元素表排序。
       * 
       * "eor"：按欧洲排序规则排序。
       * 
       * "gb2312"：拼音排序，仅用于中文排序。
       * 
       * "phonebk"：电话本风格排序。
       * 
       * "phonetic"：发音排序。
       * 
       * "pinyin"：拼音排序。
       * 
       * "reformed"：瑞典语排序。
       * 
       * "searchjl"：韩语初始辅音搜索的特殊排序。
       * 
       * "stroke"：汉语的笔画排序。
       * 
       * "trad"：传统风格排序，如西班牙语。
       * 
       * "unihan"：统一汉字排序，用于日语、韩语、中文等汉字排序。
       * 
       * "zhuyin"：注音排序，仅用于中文排序。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.collation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
       */
      collation: string;
  
      /**
       * 区域的时制信息，取值包括：
       * 
       * "h11"、"h12"、"h23"、"h24"。
       * 
       * 不同取值的显示效果可参考[附录表5](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
       */
      hourCycle: string;
  
      /**
       * 区域使用的数字系统，取值包括：
       * 
       * "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide",
       * "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham",
       * "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong",
       * "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment",
       * "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii",
       * "wara", "wcho"。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
       */
      numberingSystem: string;
  
      /**
       * true表示对数字字符进行特殊的排序规则处理（把数字字符作为数值进行排序），false表示不对数字字符进行特殊的排序规则处理。
       * 
       * 默认值：false。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.LocaleOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric)
       */
      numeric: boolean;
  
      /**
       * 获取区域对象的字符串。
       *
       * @returns { string } 区域对象的字符串。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.Locale.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString)
       */
      toString(): string;
  
      /**
       * 最大化区域信息，补齐区域对象中缺少的脚本、国家地区信息。
       *
       * @returns { Locale } 补齐完脚本、国家地区信息后的区域对象。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.Locale.maximize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize)
       */
      maximize(): Locale;
  
      /**
       * 最小化区域信息，移除区域对象中的脚本、国家地区信息。
       *
       * @returns { Locale } 移除完脚本、国家地区信息后的区域对象。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.Locale.minimize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize)
       */
      minimize(): Locale;
    }
  
    /**
     * 时间日期格式化时可设置的配置项。从API version 9开始，DateTimeOptions的属性由必填改为可选。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @deprecated since 20
     * @useinstead [Intl.DateTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
     */
    export interface DateTimeOptions {
      /**
       * 合法的区域ID，如：zh-Hans-CN。
       * 
       * 默认值：系统当前区域ID。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       */
      locale?: string;
  
      /**
       * 日期显示格式，取值包括：
       * 
       * "long", "short", "medium", "full", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表1](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.dateStyle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle)
       */
      dateStyle?: string;
  
      /**
       * 时间显示格式，取值包括：
       * 
       * "long", "short", "medium", "full", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表2](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.timeStyle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle)
       */
      timeStyle?: string;
  
      /**
       * 时制格式，取值包括：
       * 
       * "h11", "h12", "h23", "h24"。
       * 
       * 不设置dateStyle或timeStyle参数时的显示效果请参考[附录表5](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       * 
       * 设置dateStyle或timeStyle参数时的显示效果请参考[附录表6](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hourcycle)
       */
      hourCycle?: string;
  
      /**
       * 使用的时区，取值为合法的IANA时区ID。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.timeZone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone)
       */
      timeZone?: string;
  
      /**
       * 数字系统，取值包括：
       * 
       * "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide",
       * "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham",
       * "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong",
       * "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment",
       * "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii",
       * "wara", "wcho"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#numberingsystem)
       */
      numberingSystem?: string;
  
      /**
       * true表示使用12小时制，false表示使用24小时制。
       * 
       * 同时设置hour12和hourCycle时，hourCycle不生效。
       * 
       * 若hour12和hourCycle未设置且系统24小时开关打开时，hour12属性的默认值为false。
       *
       * @type { boolean } [since 6 - 8]
       * @type { ?boolean } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.hour12](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hour12)
       */
      hour12?: boolean;
  
      /**
       * 星期的显示格式，取值包括：
       * 
       * "long", "short", "narrow", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表4](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.weekday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#weekday)
       */
      weekday?: string;
  
      /**
       * 纪元的显示格式，取值包括：
       * 
       * "long", "short", "narrow", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表9](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.era](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#era)
       */
      era?: string;
  
      /**
       * 年份的显示格式，取值包括：
       * 
       * "numeric", "2-digit"。
       * 
       * 不同取值的显示效果请参考[附录表3](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.year](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#year)
       */
      year?: string;
  
      /**
       * 月份的显示格式，取值包括：
       * 
       * "numeric", "2-digit", "long", "short", "narrow", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表7](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.month](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#month)
       */
      month?: string;
  
      /**
       * 日期的显示格式，取值包括：
       * 
       * "numeric", "2-digit"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.day](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#day)
       */
      day?: string;
  
      /**
       * 小时的显示格式，取值包括：
       * 
       * "numeric", "2-digit"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.hour](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hour)
       */
      hour?: string;
  
      /**
       * 分钟的显示格式，取值包括：
       * 
       * "numeric", "2-digit"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.minute](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#minute)
       */
      minute?: string;
  
      /**
       * 秒钟的显示格式，取值包括：
       * 
       * "numeric", "2-digit"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.second](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#second)
       */
      second?: string;
  
      /**
       * 时区名称的本地化表示，取值包括：
       * 
       * "long", "short", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表8](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.timeZoneName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezonename)
       */
      timeZoneName?: string;
  
      /**
       * 时段的显示格式，取值包括：
       * 
       * "long", "short", "narrow", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表10](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.dayPeriod](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#dayperiod)
       */
      dayPeriod?: string;
  
      /**
       * 要使用的区域匹配算法，取值包括：
       * 
       * "lookup"：精确匹配。
       * 
       * "best fit"：最佳匹配。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#localematcher)
       */
      localeMatcher?: string;
  
      /**
       * 要使用的格式匹配算法，取值包括：
       * 
       * "basic"：精确匹配。
       * 
       * "best fit"：最佳匹配。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormatOptions.formatMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#formatmatcher)
       */
      formatMatcher?: string;
    }
  
    /**
     * 提供日期格式化的能力。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @form [since 11]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @deprecated since 20
     * @useinstead [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
     */
    export class DateTimeFormat {
      /**
       * 创建时间日期格式化对象。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 8 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
       */
      constructor();
  
      /**
       * 创建时间日期格式化对象。
       *
       * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
       * @param { DateTimeOptions } [options] - 创建时间日期格式化对象时可设置的配置项。
       *     <br>若所有选项均未设置时，year、month、day三个属性的默认值为numeric。
       *     <br>默认值：所有属性都取默认值时的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
       */
      constructor(locale: string | Array<string>, options?: DateTimeOptions);
  
      /**
       * 对时间日期进行格式化，返回格式化后的时间日期字符串。
       *
       * @param { Date } date - 时间日期。
       *     <br>**说明：** 
       *     <br>月份从0开始计数，0表示一月。
       * @returns { string } 格式化后的时间日期字符串。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormat.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)
       */
      format(date: Date): string;
  
      /**
       * 对时间日期段进行格式化，返回格式化后的时间日期段字符串。
       *
       * @param { Date } startDate - 时间日期的开始。
       *     <br>**说明：** 
       *     <br>月份从0开始计数，0表示一月。
       * @param { Date } endDate - 时间日期的结束。
       *     <br>**说明：** 
       *     <br>月份从0开始计数，0表示一月。
       * @returns { string } 格式化后的时间日期段字符串。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormat.formatRange](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)
       */
      formatRange(startDate: Date, endDate: Date): string;
  
      /**
       * 获取创建时间日期格式化对象时设置的配置项。
       *
       * @returns { DateTimeOptions } 时间日期格式化对象设置的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @form [since 11]
       * @atomicservice [since 12]
       * @since 6 dynamic
       * @deprecated since 20
       * @useinstead [Intl.DateTimeFormat.resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)
       */
      resolvedOptions(): DateTimeOptions;
    }
  
    /**
     * 创建数字格式化对象时可设置的配置项。从API version 9开始，NumberOptions的属性由必填改为可选。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    export interface NumberOptions {
      /**
       * 合法的区域ID， 如："zh-Hans-CN"。
       * 
       * 默认值：系统当前区域ID。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      locale?: string;
  
      /**
       * 货币单位（需设置style为currency）， 取值符合[ISO-4217标准](https://www.iso.org/iso-4217-currency-codes.html)，如："EUR"，"CNY"，"USD"等。
       * 
       * 从API version 12开始支持三位数字代码，如："978"，"156"，"840"等。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      currency?: string;
  
      /**
       * 货币单位的符号显示（需设置style为currency），取值包括： "standard"，"accounting"。
       * 
       * 默认值：standard。
       * 
       * 不同取值的显示效果请参考[附录表19](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      currencySign?: string;
  
      /**
       * 货币的显示方式（需设置style为currency），取值包括："symbol", "narrowSymbol", "code", "name"。
       * 
       * 默认值：symbol。
       * 
       * 不同取值的显示效果请参考[附录表20](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      currencyDisplay?: string;
  
      /**
       * 单位名称（需设置style为unit），如："meter"，"inch"，“hectare”等。
       * 
       * 从API version 18开始新增支持的组合单位有： "beat-per-minute", "body-weight-per-second", "breath-per-minute", "foot-per-hour",
       * "jump-rope-per-minute", "meter-per-hour", "milliliter-per-minute-per-kilogram", "rotation-per-minute", "step-per-minute",
       * "stroke-per-minute"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      unit?: string;
  
      /**
       * 单位的显示格式（需设置style为unit），取值包括："long", "short", "narrow"。
       * 
       * 默认值：short。
       * 
       * 不同取值的显示效果请参考[附录表21](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      unitDisplay?: string;
  
      /**
       * 单位的使用场景（需设置style为unit），取值包括："default", "area-land-agricult", "area-land-commercl", "area-land-residntl",
       * "length-person", "length-person-small", "length-rainfall", "length-road", "length-road-small", "length-snowfall",
       * "length-vehicle", "length-visiblty", "length-visiblty-small", "length-person-informal", "length-person-small-informal",
       * "length-road-informal", "speed-road-travel", "speed-wind", "temperature-person", "temperature-weather",
       * "volume-vehicle-fuel", "elapsed-time-second", "size-file-byte", "size-shortfile-byte"。
       * 
       * 默认值：default。
       * 
       * 不同取值的显示效果请参考[附录表22](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      unitUsage?: string;
  
      /**
       * 数字符号的显示格式，取值包括：
       * 
       * "auto"：自动判断是否显示正负符号。
       * 
       * "never"：不显示正负号。
       * 
       * "always"：总是显示正负号。
       * 
       * "exceptZero"：除了0都显示正负号。
       * 
       * 默认值："auto"。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      signDisplay?: string;
  
      /**
       * 紧凑显示格式，取值包括："long", "short"。
       * 
       * 默认值：short。
       * 
       * 不同取值的显示效果请参考[附录表18](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      compactDisplay?: string;
  
      /**
       * 数字的表示方法，取值包括："standard", "scientific", "engineering", "compact"。
       * 
       * 默认值：standard。
       * 
       * 不同取值的显示效果请参考[附录表17](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      notation?: string;
  
      /**
       * 要使用的区域匹配算法，取值包括："lookup", "best fit"。
       * 
       * 默认值：best fit。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      localeMatcher?: string;
  
      /**
       * 数字的显示格式，取值包括："decimal", "currency", "percent", "unit"。
       * 
       * 默认值：decimal。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      style?: string;
  
      /**
       * 数字系统，取值包括：
       * 
       * "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide",
       * "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham",
       * "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong",
       * "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment",
       * "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii",
       * "wara", "wcho"。
       * 
       * 默认值：区域的默认数字系统。
       *
       * @type { string } [since 6 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      numberingSystem?: string;
  
      /**
       * true表示分组显示，false表示不分组显示。
       * 
       * 默认值：true。
       * 
       * 不同取值的显示效果请参考[附录表16](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { boolean } [since 6 - 8]
       * @type { ?boolean } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      useGrouping?: boolean;
  
      /**
       * 表示要使用的最小整数位数，取值范围：[1, 21]。
       * 
       * 默认值：1。
       * 
       * 不同取值的显示效果请参考[附录表11](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { int } [since 6 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      minimumIntegerDigits?: int;
  
      /**
       * 表示要使用的最小分数位数，取值范围：[0, 20]。
       * 
       * 默认值：0。
       * 
       * 不同取值的显示效果请参考[附录表12](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { int } [since 6 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      minimumFractionDigits?: int;
  
      /**
       * 表示要使用的最大分数位数，取值范围：[1, 21]。
       * 
       * 默认值：3。
       * 
       * 不同取值的显示效果请参考[附录表13](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { int } [since 6 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      maximumFractionDigits?: int;
  
      /**
       * 表示要使用的最小有效位数，取值范围：[1, 21]。
       * 
       * 默认值：1。
       * 
       * 不同取值的显示效果请参考[附录表14](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { int } [since 6 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      minimumSignificantDigits?: int;
  
      /**
       * 表示要使用的最大有效位数，取值范围：[1, 21]。
       * 
       * 默认值：21。
       * 
       * 不同取值的显示效果请参考[附录表15](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { int } [since 6 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      maximumSignificantDigits?: int;
  
      /**
       * 最大分数位数和最大有效位数同时设置时的舍入优先级，取值包括："auto" 选择区域默认的最大分数位数或最大有效位数，"morePrecision" 取最大分数位数，"lessPrecision" 取最大有效位数。
       * 
       * 默认值：auto。
       *
       * @syscap SystemCapability.Global.I18n
       * @atomicservice
       * @since 18 dynamic
       */
      roundingPriority?: string;
  
      /**
       * 表示舍入增量，取值范围：1，2，5，10，20，25，50，100，200，250，500，1000，2000，2500，5000。
       * 
       * 默认值：1。
       *
       * @syscap SystemCapability.Global.I18n
       * @atomicservice
       * @since 18 dynamic
       */
      roundingIncrement?: int;
  
      /**
       * 表示舍入模式，取值包括：
       * 
       * "ceil"：向上取整。
       * 
       * "floor"：向下取整。
       * 
       * "expand"：远离零取整。
       * 
       * "trunc"：向零取整。
       * 
       * "halfCeil"：半向上取整，大于等于增量的一半时向上取整，小于增量的一半时向下取整。
       * 
       * "halfFloor"：半向下取整，大于增量的一半时向上取整，小于等于增量的一半时向下取整。
       * 
       * "halfExpand"：半远离零取整，大于等于增量的一半时远离零取整，小于增量的一半时向零取整。
       * 
       * "halfTrunc"：半向零取整，大于增量的一半时远离零取整，小于等于增量的一半时向零取整。
       * 
       * "halfEven"：半向偶数取整，大于增量的一半时 远离零取整，小于增量的一半时向零取整，等于增量的一半时向最近的偶数位舍入。
       * 
       * 默认值：halfExpand。
       *
       * @syscap SystemCapability.Global.I18n
       * @atomicservice
       * @since 18 dynamic
       */
      roundingMode?: string;
    }
  
    /**
     * 提供标准的数字格式化的能力。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 6 dynamic
     */
    export class NumberFormat {
      /**
       * 使用当前系统区域创建数字格式化对象。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      constructor();
  
      /**
       * 根据指定的区域和配置项创建数字格式化对象。
       *
       * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
       * @param { NumberOptions } [options] - 创建数字格式化对象时可设置的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      constructor(locale: string | Array<string>, options?: NumberOptions);
  
      /**
       * 对数字进行格式化，返回格式化后的数字字符串。
       *
       * @param { double } number Indicates the number to be formatted. [since 6 - 11]
       * @param { double } num - 数字对象。 [since 12]
       * @returns { string } 格式化后的数字字符串。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      format(num: double): string;
  
      /**
       * 对数字范围进行格式化，返回格式化后的数字范围字符串。
       *
       * @param { double } startRange - 数字范围的起始值。
       * @param { double } endRange - 数字范围的终止值。
       * @returns { string } 格式化后的数字范围字符串。
       * @syscap SystemCapability.Global.I18n
       * @atomicservice
       * @since 18 dynamic
       */
      formatRange(startRange: double, endRange: double): string;
  
      /**
       * 获取创建数字格式化对象时设置的配置项。
       *
       * @returns { NumberOptions } 创建数字格式化对象时设置的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 6 dynamic
       */
      resolvedOptions(): NumberOptions;
    }
  
    /**
     * 创建排序对象时可设置的配置项。
     * 
     * 从API version 9开始，CollatorOptions中的属性改为可选。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    export interface CollatorOptions {
      /**
       * 区域匹配算法，取值范围：
       * 
       * "lookup"：精确匹配。
       * 
       * "best fit"：最佳匹配。
       * 
       * 默认值："best fit"。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      localeMatcher?: string;
  
      /**
       * 比较的用途，取值范围：
       * 
       * "sort"：用作排序。
       * 
       * "search"：用作查找匹配的字符串。
       * 
       * 默认值："sort"。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      usage?: string;
  
      /**
       * 表示字符串中的哪些差异会导致非零结果值，取值范围：
       * 
       * "base"：不同的字母比较不相等，比如：'a' ≠ 'b', 'a' = 'á', 'a' = 'A'。
       * 
       * "accent"：不同的字母或不同读音的相同字母比较不相等，比如'a' ≠ 'b', 'a' ≠ 'á', 'a' = 'A'。
       * 
       * "case"：不同的字母或相同字母大小写比较不相等，比如：'a' ≠ 'b', 'a' = 'á', 'a' ≠ 'A'。
       * 
       * "variant"：不同的字母或读音及其它有区别的标志或大小写都是不相等的，比如：'a' ≠ 'b', 'a' ≠ 'á', 'a' ≠ 'A'。
       * 
       * 默认值："variant"。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      sensitivity?: string;
  
      /**
       * true表示忽略标点符号，false表示考虑标点符号。
       * 
       * 默认值：false。
       *
       * @type { boolean } [since 8 - 8]
       * @type { ?boolean } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      ignorePunctuation?: boolean;
      /**
       * 区域的排序规则，取值包括：
       * 
       * "big5han"：拉丁字母使用的拼音排序。
       * 
       * "compat"：兼容性排序，仅用于阿拉伯语。
       * 
       * "dict"：词典风格排序，仅用于僧伽罗语。
       * 
       * "direct"：二进制码点排序。
       * 
       * "ducet"：按Unicode排序元素表排序。
       * 
       * "eor"：按欧洲排序规则排序。
       * 
       * "gb2312"：拼音排序，仅用于中文排序。
       * 
       * "phonebk"：电话本风格排序。
       * 
       * "phonetic"：发音排序。
       * 
       * "pinyin"：拼音排序。
       * 
       * "reformed"：瑞典语排序。
       * 
       * "searchjl"：韩语初始辅音搜索的特殊排序。
       * 
       * "stroke"：汉语的笔画排序。
       * 
       * "trad"：传统风格排序，如西班牙语。
       * 
       * "unihan"：统一汉字排序，用于日语、韩语、中文等汉字排序。
       * 
       * "zhuyin"：注音排序，仅用于中文排序。
       * 
       * 默认值："default"。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      collation?: string;
  
      /**
       * 数字排序，取值包括：
       * 
       * true：使用数字排序，比如：'1' < '2' < '10' < '11'。
       * 
       * false：不使用数字排序，比如：'1' < '10' < '11' < '2'。
       * 
       * 默认值：false。
       *
       * @type { boolean } [since 8 - 8]
       * @type { ?boolean } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      numeric?: boolean;
  
      /**
       * 区域的排序规则是否考虑大小写，取值包括：
       * 
       * "upper"：大写排前面。
       * 
       * "lower"：小写排前面。
       * 
       * "false"：使用区域默认的大小写排序规则。
       * 
       * 默认值："false"。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      caseFirst?: string;
    }
  
    /**
     * 提供字符串排序的能力。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    export class Collator {
      /**
       * 使用当前系统区域创建排序对象。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      constructor();
      /**
       * 根据指定的区域和配置项创建排序对象。
       *
       * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
       * @param { CollatorOptions } [options] - 创建排序对象时可设置的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      constructor(locale: string | Array<string>, options?: CollatorOptions);
  
      /**
       * 根据配置项的排序规则，比较两个字符串。
       *
       * @param { string } first - 进行比较的第一个字符串。
       * @param { string } second - 进行比较的第二个字符串。
       * @returns { int } 比较结果。
       *     <br>- number为负数时，表示first排序在second之前。
       *     <br>- number为0时，表示first与second排序相同。
       *     <br>- number为正数，表示first排序在second之后。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      compare(first: string, second: string): int;
  
      /**
       * 获取创建排序对象时设置的配置项。
       *
       * @returns { CollatorOptions } 返回排序对象的属性。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamic
       */
      resolvedOptions(): CollatorOptions;
    }
  
    /**
     * 创建单复数对象时可设置的配置项。从API version 9开始，PluralRulesOptions的属性由必填改为可选。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.PluralRulesOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)
     */
    export interface PluralRulesOptions {
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.localeMatcher替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 区域匹配算法，取值包括："best fit", "lookup"。
       * 
       * 默认值：best fit。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#localematcher)
       */
      localeMatcher?: string;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.type替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 排序的类型，取值包括："cardinal", "ordinal",
       * 
       * 默认值：cardinal。
       * 
       * - cardinal：基数词，ordinal：序数词。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#type)
       */
      type?: string;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumIntegerDigits替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 表示要使用的最小整数位数，取值范围：[1, 21]，小于1时取值为1，大于21时取值为21。
       * 
       * 默认值：1。
       *
       * @type { int } [since 8 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.minimumIntegerDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)
       */
      minimumIntegerDigits?: int;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumFractionDigits替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 表示要使用的最小分数位数，取值范围：[0, 20]，小于0时取值为0，大于20时取值为20。
       * 
       * 默认值：0。
       *
       * @type { int } [since 8 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.minimumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)
       */
      minimumFractionDigits?: int;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.maximumFractionDigits替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 表示要使用的最大分数位数，取值范围：[1, 21]，小于1时取值为1，大于21时取值为21。
       * 
       * 默认值：3。
       *
       * @type { int } [since 8 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.maximumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)
       */
      maximumFractionDigits?: int;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumSignificantDigits替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 表示要使用的最小有效位数，取值范围：[1, 21]，小于1时取值为1，大于21时取值为21。
       * 
       * 默认值：1。
       *
       * @type { int } [since 8 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.minimumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)
       */
      minimumSignificantDigits?: int;
  
      /**
       * 从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.maximumSignificantDigits替代，用法参考
       * [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)。
       * 
       * 表示要使用的最大有效位数，取值范围：[1, 21]，小于1时取值为1，大于21时取值为21。
       * 
       * 默认值：21。
       *
       * @type { int } [since 8 - 8]
       * @type { ?int } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRulesOptions.maximumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)
       */
      maximumSignificantDigits?: int;
    }
  
    /**
     * 提供获取单复数类型的能力。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
     */
    export class PluralRules {
      /**
       * 创建单复数对象来计算数字的单复数类别。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)
       */
      constructor();
  
      /**
       * 创建单复数对象来计算数字的单复数类别。
       *
       * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
       * @param { PluralRulesOptions } [options] - 创建单复数对象时设置的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)
       */
      constructor(locale: string | Array<string>, options?: PluralRulesOptions);
  
      /**
       * 获取数字的单复数类别。
       *
       * @param { double } n - 待获取单复数类别的数字。
       * @returns { string } 单复数类别，取值包括："zero"，"one"，"two", "few", "many", "other"。
       *     <br>不同取值的含义请参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.PluralRules.select](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select)
       */
      select(n: double): string;
    }
  
    /**
     * 创建相对时间格式化对象时可设置的配置项。
     * 
     * 从API version 9开始，RelativeTimeFormatInputOptions中的属性改为可选。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.RelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#options)
     */
    export interface RelativeTimeFormatInputOptions {
      /**
       * 区域匹配算法，取值包括："best fit", "lookup"。
       * 
       * 默认值：best fit。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormatOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#localematcher)
       */
      localeMatcher?: string;
  
      /**
       * 输出消息的格式，表示格式化结果中是否使用数字表示相对日期或时间。取值包括："always", "auto"。
       * 
       * 默认值：always。
       * 
       * 不同取值的显示效果请参考[附录表23](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormatOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#numeric)
       */
      numeric?: string;
  
      /**
       * 国际化消息的长度，取值包括："long", "short", "narrow"。
       * 
       * 默认值：long。
       * 
       * 不同取值的显示效果请参考[附录表24](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @type { string } [since 8 - 8]
       * @type { ?string } [since 9]
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormatOptions.style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#style)
       */
      style?: string;
    }
  
    /**
     * 相对时间格式化对象的格式化配置项。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.ResolvedRelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#return_value)
     */
    export interface RelativeTimeFormatResolvedOptions {
      /**
       * 表示区域ID的字符串，包括语言以及可选的脚本和区域。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.ResolvedRelativeTimeFormatOptions.locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#locale)
       */
      locale: string;
  
      /**
       * 国际化消息的长度，取值包括："long", "short", "narrow"。
       * 
       * 不同取值的显示效果请参考[附录表24](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.ResolvedRelativeTimeFormatOptions.style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#style)
       */
      style: string;
  
      /**
       * 输出消息的格式，表示格式化结果中是否使用数字表示相对日期或时间。取值包括："always", "auto"。
       * 
       * 不同取值的显示效果请参考[附录表23](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.ResolvedRelativeTimeFormatOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#numeric)
       */
      numeric: string;
  
      /**
       * 使用的数字系统，取值包括：
       * 
       * "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide",
       * "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham",
       * "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong",
       * "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment",
       * "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii",
       * "wara", "wcho"。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.ResolvedRelativeTimeFormatOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#numberingsystem)
       */
      numberingSystem: string;
    }
  
    /**
     * 提供相对时间格式化的能力。
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 20
     * @useinstead [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
     */
    export class RelativeTimeFormat {
      /**
       * 创建相对时间格式化对象。
       *
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
       */
      constructor();
  
      /**
       * 创建相对时间格式化对象。
       *
       * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
       * @param { RelativeTimeFormatInputOptions } [options] - 创建相对时间格式化对象时的配置项。
       *     <br>默认值：所有属性都取默认值时的配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
       */
      constructor(locale: string | Array<string>, options?: RelativeTimeFormatInputOptions);
  
      /**
       * 对相对时间进行格式化，返回相对时间字符串。
       *
       * @param { double } value - 相对时间格式化的数值。
       * @param { string } unit - 相对时间格式化的单位，
       *     <br>取值包括："year", "quarter", "month", "week", "day", "hour", "minute", "second"。
       * @returns { string } 格式化后的相对时间。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormat.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format)
       */
      format(value: double, unit: string): string;
  
      /**
       * 对相对时间进行格式化，获取格式化结果中各个部分的对象数组。
       *
       * @param { double } value - 相对时间格式化的数值。
       * @param { string } unit - 相对时间格式化的单位，
       *     <br>取值包括："year", "quarter", "month", "week", "day", "hour", "minute", "second"。
       * @returns { Array<object> } 格式化结果中各个部分的对象数组。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormat.formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts)
       */
      formatToParts(value: double, unit: string): Array<object>;
  
      /**
       * 获取相对时间格式化对象的格式化配置项。
       *
       * @returns { RelativeTimeFormatResolvedOptions } 相对时间格式化对象的格式化配置项。
       * @syscap SystemCapability.Global.I18n
       * @crossplatform [since 10]
       * @atomicservice [since 12]
       * @since 8 dynamiconly
       * @deprecated since 20
       * @useinstead [Intl.RelativeTimeFormat.resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions)
       */
      resolvedOptions(): RelativeTimeFormatResolvedOptions;
    }
  }
  export default intl;