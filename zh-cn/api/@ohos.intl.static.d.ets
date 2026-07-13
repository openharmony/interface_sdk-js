'use static'
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
 * @since 23 static
 */
declare namespace intl {
  /**
   * 时间日期格式化时可设置的配置项。从API version 9开始，DateTimeOptions的属性由必填改为可选。
   *
   * @syscap SystemCapability.Global.I18n
   * @since 23 static
   */
  export interface DateTimeOptions {
    /**
     * 合法的区域ID，如：zh-Hans-CN。
     * 
     * 默认值：系统当前区域ID。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    locale?: string;

    /**
     * 日期显示格式，取值包括：
     * 
     * "long", "short", "medium", "full", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表1](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    dateStyle?: string;

    /**
     * 时间显示格式，取值包括：
     * 
     * "long", "short", "medium", "full", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表2](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    hourCycle?: string;

    /**
     * 使用的时区，取值为合法的IANA时区ID。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    numberingSystem?: string;

    /**
     * true表示使用12小时制，false表示使用24小时制。
     * 
     * 同时设置hour12和hourCycle时，hourCycle不生效。
     * 
     * 若hour12和hourCycle未设置且系统24小时开关打开时，hour12属性的默认值为false。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    hour12?: boolean;

    /**
     * 星期的显示格式，取值包括：
     * 
     * "long", "short", "narrow", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表4](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    weekday?: string;

    /**
     * 纪元的显示格式，取值包括：
     * 
     * "long", "short", "narrow", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表9](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    era?: string;

    /**
     * 年份的显示格式，取值包括：
     * 
     * "numeric", "2-digit"。
     * 
     * 不同取值的显示效果请参考[附录表3](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    year?: string;

    /**
     * 月份的显示格式，取值包括：
     * 
     * "numeric", "2-digit", "long", "short", "narrow", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表7](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    month?: string;

    /**
     * 日期的显示格式，取值包括：
     * 
     * "numeric", "2-digit"。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    day?: string;

    /**
     * 小时的显示格式，取值包括：
     * 
     * "numeric", "2-digit"。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    hour?: string;

    /**
     * 分钟的显示格式，取值包括：
     * 
     * "numeric", "2-digit"。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    minute?: string;

    /**
     * 秒钟的显示格式，取值包括：
     * 
     * "numeric", "2-digit"。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    second?: string;

    /**
     * 时区名称的本地化表示，取值包括：
     * 
     * "long", "short", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表8](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    timeZoneName?: string;

    /**
     * 时段的显示格式，取值包括：
     * 
     * "long", "short", "narrow", "auto"。
     * 
     * 不同取值的显示效果请参考[附录表10](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    dayPeriod?: string;

    /**
     * 要使用的区域匹配算法，取值包括：
     * 
     * "lookup"：精确匹配。
     * 
     * "best fit"：最佳匹配。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    localeMatcher?: string;

    /**
     * 要使用的格式匹配算法，取值包括：
     * 
     * "basic"：精确匹配。
     * 
     * "best fit"：最佳匹配。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    formatMatcher?: string;
  }

  /**
   * 提供日期格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @since 23 static
   */
  export class DateTimeFormat {
    /**
     * 创建时间日期格式化对象。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @since 23 static
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
     * @since 23 static
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
     * @since 23 static
     */
    formatRange(startDate: Date, endDate: Date): string;

    /**
     * 获取创建时间日期格式化对象时设置的配置项。
     *
     * @returns { DateTimeOptions } 时间日期格式化对象设置的配置项。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    resolvedOptions(): DateTimeOptions;
  }

  /**
   * 创建数字格式化对象时可设置的配置项。从API version 9开始，NumberOptions的属性由必填改为可选。
   *
   * @syscap SystemCapability.Global.I18n
   * @since 23 static
   */
  export interface NumberOptions {
    /**
     * 合法的区域ID， 如："zh-Hans-CN"。
     * 
     * 默认值：系统当前区域ID。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    locale?: string;

    /**
     * 货币单位（需设置style为currency）， 取值符合[ISO-4217标准](https://www.iso.org/iso-4217-currency-codes.html)，如："EUR"，"CNY"，"USD"等。
     * 
     * 从API version 12开始支持三位数字代码，如："978"，"156"，"840"等。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    currency?: string;

    /**
     * 货币单位的符号显示（需设置style为currency），取值包括： "standard"，"accounting"。
     * 
     * 默认值：standard。
     * 
     * 不同取值的显示效果请参考[附录表19](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    currencySign?: string;

    /**
     * 货币的显示方式（需设置style为currency），取值包括："symbol", "narrowSymbol", "code", "name"。
     * 
     * 默认值：symbol。
     * 
     * 不同取值的显示效果请参考[附录表20](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    currencyDisplay?: string;

    /**
     * 单位名称（需设置style为unit），如："meter"，"inch"，“hectare”等。
     * 
     * 从API version 18开始新增支持的组合单位有： "beat-per-minute", "body-weight-per-second", "breath-per-minute", "foot-per-hour",
     * "jump-rope-per-minute", "meter-per-hour", "milliliter-per-minute-per-kilogram", "rotation-per-minute",
     * "step-per-minute", "stroke-per-minute"。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    unit?: string;

    /**
     * 单位的显示格式（需设置style为unit），取值包括："long", "short", "narrow"。
     * 
     * 默认值：short。
     * 
     * 不同取值的显示效果请参考[附录表21](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    signDisplay?: string;

    /**
     * 紧凑显示格式，取值包括："long", "short"。
     * 
     * 默认值：short。
     * 
     * 不同取值的显示效果请参考[附录表18](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    compactDisplay?: string;

    /**
     * 数字的表示方法，取值包括："standard", "scientific", "engineering", "compact"。
     * 
     * 默认值：standard。
     * 
     * 不同取值的显示效果请参考[附录表17](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    notation?: string;

    /**
     * 要使用的区域匹配算法，取值包括："lookup", "best fit"。
     * 
     * 默认值：best fit。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    localeMatcher?: string;

    /**
     * 数字的显示格式，取值包括："decimal", "currency", "percent", "unit"。
     * 
     * 默认值：decimal。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    numberingSystem?: string;

    /**
     * true表示分组显示，false表示不分组显示。
     * 
     * 默认值：true。
     * 
     * 不同取值的显示效果请参考[附录表16](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    useGrouping?: boolean;

    /**
     * 表示要使用的最小整数位数，取值范围：[1, 21]。
     * 
     * 默认值：1。
     * 
     * 不同取值的显示效果请参考[附录表11](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    minimumIntegerDigits?: int;

    /**
     * 表示要使用的最小分数位数，取值范围：[0, 20]。
     * 
     * 默认值：0。
     * 
     * 不同取值的显示效果请参考[附录表12](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    minimumFractionDigits?: int;

    /**
     * 表示要使用的最大分数位数，取值范围：[1, 21]。
     * 
     * 默认值：3。
     * 
     * 不同取值的显示效果请参考[附录表13](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    maximumFractionDigits?: int;

    /**
     * 表示要使用的最小有效位数，取值范围：[1, 21]。
     * 
     * 默认值：1。
     * 
     * 不同取值的显示效果请参考[附录表14](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    minimumSignificantDigits?: int;

    /**
     * 表示要使用的最大有效位数，取值范围：[1, 21]。
     * 
     * 默认值：21。
     * 
     * 不同取值的显示效果请参考[附录表15](docroot://reference/apis-localization-kit/js-apis-intl.md#附录)。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    maximumSignificantDigits?: int;

    /**
     * 最大分数位数和最大有效位数同时设置时的舍入优先级，取值包括："auto" 选择区域默认的最大分数位数或最大有效位数，"morePrecision" 取最大分数位数，"lessPrecision" 取最大有效位数。
     * 
     * 默认值：auto。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    roundingPriority?: string;

    /**
     * 表示舍入增量，取值范围：1，2，5，10，20，25，50，100，200，250，500，1000，2000，2500，5000。
     * 
     * 默认值：1。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @since 23 static
     */
    roundingMode?: string;
  }

  /**
   * 提供标准的数字格式化的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @since 23 static
   */
  export class NumberFormat {
    /**
     * 使用当前系统区域创建数字格式化对象。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    constructor();

    /**
     * 根据指定的区域和配置项创建数字格式化对象。
     *
     * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
     * @param { NumberOptions } [options] - 创建数字格式化对象时可设置的配置项。
     *     <br>默认值：所有属性都取默认值时的配置项。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    constructor(locale: string | Array<string>, options?: NumberOptions);

    /**
     * 对数字进行格式化，返回格式化后的数字字符串。
     *
     * @param { double } num - 数字对象。
     * @returns { string } 格式化后的数字字符串。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    format(num: double): string;

    /**
     * 对数字范围进行格式化，返回格式化后的数字范围字符串。
     *
     * @param { double } startRange - 数字范围的起始值。
     * @param { double } endRange - 数字范围的终止值。
     * @returns { string } 格式化后的数字范围字符串。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    formatRange(startRange: double, endRange: double): string;

    /**
     * 获取创建数字格式化对象时设置的配置项。
     *
     * @returns { NumberOptions } 创建数字格式化对象时设置的配置项。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    resolvedOptions(): NumberOptions;
  }

  /**
   * 创建排序对象时可设置的配置项。
   * 
   * 从API version 9开始，CollatorOptions中的属性改为可选。
   *
   * @syscap SystemCapability.Global.I18n
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    sensitivity?: string;

    /**
     * true表示忽略标点符号，false表示考虑标点符号。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    caseFirst?: string;
  }

  /**
   * 提供字符串排序的能力。
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 23 static
   */
  export class Collator {
    /**
     * 使用当前系统区域创建排序对象。
     *
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    constructor();

    /**
     * 根据指定的区域和配置项创建排序对象。
     *
     * @param { string | Array<string> } locale - 区域ID或区域ID数组。输入是区域ID数组时，使用第一个有效的区域ID。
     * @param { CollatorOptions } [options] - 创建排序对象时可设置的配置项。
     *     <br>默认值：所有属性都取默认值时的配置项。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
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
     * @since 23 static
     */
    compare(first: string, second: string): int;

    /**
     * 获取创建排序对象时设置的配置项。
     *
     * @returns { CollatorOptions } 返回排序对象的属性。
     * @syscap SystemCapability.Global.I18n
     * @since 23 static
     */
    resolvedOptions(): CollatorOptions;
  }
}
export default intl;