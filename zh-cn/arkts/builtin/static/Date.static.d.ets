'use static';
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
 * @kit ArkTS
 */

/**
 * 与JS Date API兼容的类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Date {

    /**
     * 默认构造函数，使用当前时间初始化Date实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * `Date`构造函数。注意：`1921-01-01T00:00:00 GMT`之前的日期
     * 转换为UTC毫秒的方式可能与TS不同。
     *
     * @param { long | string | Date } value - 表示日期的值，可以是毫秒时间戳（long）、
     *     日期字符串（string），或已有的Date对象（Date）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: long | string | Date);

    /**
     * `Date`构造函数。注意：`1921-01-01T00:00:00 GMT`之前的日期
     * 转换为UTC毫秒的方式可能与TS不同。
     *
     * @param { int } year - 年。
     *     <br>取值约束：可以为任意整数。
     * @param { int } monthIndex - 月。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [day] - 日。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [hours] - 小时。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [minutes] - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [seconds] - 秒。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [ms] - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(year: int, monthIndex: int, day?: int, hours?: int, minutes?: int, seconds?: int, ms?: int);

    /**
     * 静态方法`now()`返回自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日
     * 零点。纪元定义为UTC时间1970年1月1日零点。
     *
     * @returns { long } 以毫秒表示的当前时间。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static now(): long;

    /**
     * 解析日期的字符串表示，
     * 返回自UTC时间1970年1月1日00:00:00起经过的毫秒数；
     * 如果字符串无法识别，或在某些情况下包含非法的日期值
     * （例如2015-02-31），则抛出`RangeError`。
     *
     * 明确要求支持(YYYY-MM-DDTHH:mm:ss.sssZ)格式。
     * 其他格式由实现决定，可能无法在所有浏览器（目标平台）上生效。
     * 如果需要兼容多种格式，可借助相应的库。
     *
     * @param { string } dateStr - 待解析的字符串。
     * @returns { long } 解析得到的日期值。
     * @throws { RangeError } 当参数不表示合法日期时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parse(dateStr: string): long;

    /**
     * `valueOf()`方法返回`Date`对象的原始值。
     *
     * @returns { long } `Date`对象的原始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): long;

    /**
     * `getDate()`方法按本地时间返回指定日期中月份的第几天。
     *
     * @returns { int } 按本地时间计算的月份中的第几天（1到31）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getDate(): int;

    /**
     * 按本地时间修改给定Date实例中月份的第几天。
     *
     * @param { int } value - 新的日期（日）。
     *     <br>取值约束：可以为任意整数。
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setDate(value: int): long;

    /**
     * 按世界时返回指定日期中月份的第几天（1到31）。
     *
     * @returns { int } 按世界时计算的月份中的第几天（1到31）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCDate(): int;

    /**
     * 按UTC时间修改给定Date实例中月份的第几天。
     *
     * @param { int } value - 新的日期（日）。
     *     <br>取值约束：可以为任意整数。
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCDate(value: int): long;

    /**
     * 使用协调世界时（UTC）设置Date对象中月份的第几天。
     *
     * @param { int } value - 按世界时计算的星期几。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 待设置的世界时日期（日）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCDay(value: int): long;

    /**
     * 按本地时间返回指定日期是星期几，
     * 其中0表示周日。
     *
     * @returns { int } 星期几（0表示周日，1表示周一，……，6表示周六）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getDay(): int;

    /**
     * 按世界时返回指定日期是星期几，其中0表示周日。
     *
     * @returns { int } 星期几（0表示周日，1表示周一，……，6表示周六）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCDay(): int;

    /**
     * 按本地时间返回指定日期的年份。
     *
     * @returns { int } 年份值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getYear(): int;

    /**
     * 按世界时返回指定日期的年份。
     * 对于1000年到9999年之间的日期，`getUTCFullYear()`返回四位数，
     * 例如1995。使用该方法可确保年份与2000年之后的年份保持一致。
     *
     * @returns { int } 按世界时计算的年份。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCFullYear(): int;

    /**
     * 按本地时间返回指定日期的年份。
     * 对于1000年到9999年之间的日期，`getFullYear()`返回四位数，
     * 例如1995。使用该方法可确保年份与2000年之后的年份保持一致。
     *
     * @returns { int } 完整年份。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFullYear(): int;

    /**
     * 按世界时设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int): long;

    /**
     * 按世界时设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int, month: int): long;

    /**
     * 按世界时设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } date - 新的日期。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int, month: int, date: int): long;

    /**
     * 按本地时间设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setYear(value: int): void;

    /**
     * 按本地时间设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int): long;

    /**
     * 按本地时间设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int, month: int): long;

    /**
     * 按本地时间设置指定日期的完整年份。
     *
     * @param { int } value - 新的年份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } date - 新的日期。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int, month: int, date: int): long;

    /**
     * 按本地时间返回指定日期的小时数。
     *
     * @returns { int } 按本地时间计算的指定日期的小时数（0到23）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getHours(): int;

    /**
     * 按世界时返回指定日期的小时数。
     *
     * @returns { int } 按世界时计算的指定日期的小时数（0到23）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCHours(): int;

    /**
     * 按本地时间设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int): long;

    /**
     * 按本地时间设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int): long;

    /**
     * 按本地时间设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int, sec: int): long;

    /**
     * 按本地时间设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int, sec: int, ms: int): long;

    /**
     * 按世界时设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int): long;

    /**
     * 按世界时设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int): long;

    /**
     * 按世界时设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int, sec: int): long;

    /**
     * 按世界时设置指定日期的小时数。
     *
     * @param { int } value - 新的小时数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } min - 分钟。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int, sec: int, ms: int): long;

    /**
     * 按本地时间返回指定日期的毫秒数。
     *
     * @returns { int } 按本地时间计算的指定日期的毫秒数（0到999）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMilliseconds(): int;

    /**
     * 返回自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日零点。
     *
     * @param { Date } d - 待转换为毫秒的值。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(d: Date): long;

    /**
     * 返回自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日零点。
     *
     * @param { int } year - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(year: int): long;

    /**
     * 返回自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日零点。
     *
     * @param { int } year - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } month - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [day] - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [hours] - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [minutes] - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [seconds] - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @param { int } [ms] - 待转换为毫秒的值。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(year: int, month: int, day?: int, hours?: int, minutes?: int, seconds?: int, ms?: int): long;

    /**
     * 按世界时返回时间对象值中的毫秒部分。
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMilliseconds(): int;

    /**
     * 按本地时间设置指定日期的毫秒数。
     *
     * @param { int } value - 新的毫秒数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMilliseconds(value: int): long;

    /**
     * 按世界时设置指定日期的毫秒数。
     *
     * @param { int } value - 新的毫秒数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMilliseconds(value: int): long;

    /**
     * 按本地时间返回指定日期的秒数。
     * @returns { int } 0到59之间的整数。
     *     表示按本地时间计算的给定日期的秒数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getSeconds(): int;

    /**
     * 按世界时返回指定日期的秒数。
     *
     * @returns { int } 按世界时计算的指定日期的秒数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCSeconds(): int;

    /**
     * 按本地时间设置指定日期的秒数。
     *
     * @param { int } value - 新的秒数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setSeconds(value: int): long;

    /**
     * 按本地时间设置指定日期的秒数。
     *
     * @param { int } value - 新的秒数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setSeconds(value: int, ms: int): long;

    /**
     * 按世界时设置指定日期的秒数。
     *
     * @param { int } value - 新的秒数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCSeconds(value: int): long;

    /**
     * 按世界时设置指定日期的秒数。
     *
     * @param { int } value - 新的秒数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCSeconds(value: int, ms: int): long;

    /**
     * 按本地时间返回指定日期的分钟数。
     *
     * @returns { int } 0到59之间的整数。
     *     表示按本地时间计算的给定日期的分钟数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMinutes(): int;

    /**
     * 按世界时设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int): long;

    /**
     * 按世界时设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int, sec: int): long;

    /**
     * 按世界时设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int, sec: int, ms: int): long;

    /**
     * 按世界时返回指定日期的分钟数。
     *
     * @returns { int } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMinutes(): int;

    /**
     * 按本地时间设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int): long;

    /**
     * 按本地时间设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int, sec: int): long;

    /**
     * 按本地时间设置指定日期的分钟数。
     *
     * @param { int } value - 新的分钟数。
     *     <br>取值约束：可以为任意整数。
     * @param { int } sec - 秒。
     *     <br>取值约束：可以为任意整数。
     * @param { int } ms - 毫秒。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int, sec: int, ms: int): long;

    /**
     * 按本地时间返回指定日期的月份，
     * 月份从0开始计数（0表示一年中的第一个月）。
     *
     * @returns { int } 月份（0到11），其中0表示一月，11表示十二月。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMonth(): int;

    /**
     * 按世界时返回指定日期的月份。
     *     月份从0开始计数（0表示一年中的第一个月）。
     *
     * @returns { int } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMonth(): int;

    /**
     * 按当前已设置的年份设置指定日期的月份。
     *
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMonth(month: int): long;

    /**
     * 按当前已设置的年份设置指定日期的月份。
     *
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } date - 日期值。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMonth(month: int, date: int): long;

    /**
     * 按世界时设置指定日期的月份。
     *
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMonth(month: int): long;

    /**
     * 按世界时设置指定日期的月份。
     *
     * @param { int } month - 新的月份。
     *     <br>取值约束：可以为任意整数。
     * @param { int } date - 日期值。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMonth(month: int, date: int): long;

    /**
     * 返回自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日零点。
     *
     * @returns { long } 解析得到的日期值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getTime(): long;

    /**
     * 设置自纪元起经过的毫秒数，
     * 纪元定义为UTC时间1970年1月1日零点。
     *
     * @param { long } value - 以毫秒表示的新时间。
     * @returns { long } 自纪元起经过的毫秒数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setTime(value: long): long;

    /**
     * 返回同一日期分别在UTC时区与本地时区下
     * 在UTC时区与本地时区下求值所得的差值，单位为分钟。
     *
     * @returns { long } 以分钟表示的时区偏移量（早于UTC的时区为负值）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getTimezoneOffset(): long;

    /**
     * 设置同一日期分别在UTC时区与本地时区下
     * 在UTC时区与本地时区下求值所得的差值，单位为分钟。
     *
     * @param { int } value - 相对于UTC、以分钟表示的时区偏移量。
     *     <br>取值约束：可以为任意整数。
     * @returns { long } 以毫秒表示的新时间值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setTimezoneOffset(value: int): long;

    /**
     * 检查所构造的日期是否合法。
     *
     * @returns { boolean } 如果该日期合法则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isDateValid(): boolean;

    /**
     * 获取本地时间偏移量。
     *
     * @param { long } ms - 以毫秒表示的时间。
     * @returns { long } 本地时间偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static getLocalTimezoneOffset(ms: long): long;

    /**
     * 获取时区名称。
     *
     * @param { long } ms - 以毫秒表示的时间。
     * @returns { string } 时区名称。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static getTimezoneName(ms: long): string;

    /**
     * 获取日期中时间部分的本地化表示。
     *
     * @returns { string } 本地化的时间字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleTimeString(): string;

    /**
     * 获取日期中时间部分的本地化表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 区域设置。
     * @param { Intl.DateTimeFormatOptions } [options] - 格式化选项。
     * @returns { string } 本地化的时间字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleTimeString(locales?: Intl.LocalesArgument,
        options?: Intl.DateTimeFormatOptions): string;

    /**
     * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
     * 方法转换为字符串。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含配置属性的对象。
     * @returns { string } 表示数组元素的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 获取日期部分的本地化表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 区域设置。
     * @param { Intl.DateTimeFormatOptions } [options] - 格式化选项。
     * @returns { string } 本地化的日期字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleDateString(locales?: Intl.LocalesArgument,
        options?: Intl.DateTimeFormatOptions): string;

    /**
     * 按世界时返回符合ISO 8601格式的字符串。
     *
     * @returns { string } 符合ISO 8601格式的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toISOString(): string;

    /**
     * 返回该日期的JSON表示。
     *
     * @returns { string | null } 对应的JSON字符串；如果日期非法，则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toJSON(): string | null;

    /**
     * 以英文返回日期中的时间部分。
     *
     * @returns { string } 时间字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toTimeString(): string;

    /**
     * 以英文返回日期中的日期部分。
     *
     * @returns { string } 日期字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toDateString(): string;

    /**
     * 返回表示该Date对象的字符串。
     *
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回以世界时表示该Date对象的字符串。
     *
     * @returns { string } 世界时的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toUTCString(): string;
}
