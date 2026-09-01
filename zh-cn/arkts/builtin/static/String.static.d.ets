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
 * `string`是类型`String`的别名。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type string = String;

/**
 * Unicode字符串。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class String {
    /**
     * 构造空字符串。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * 根据字符数组初始化数据构造字符串。
     *
     * @param { FixedArray<char> } data - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(data: FixedArray<char>);

    /**
     * 根据另一个字符串构造字符串。
     *
     * @param { string } otherStr - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(otherStr: string);

    /**
     * 根据Any值构造字符串。
     *
     * @param { Any } object - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(object: Any);

    /**
     * 创建新的字符串实例。
     *
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): string;

    /**
     * 根据boolean创建新的字符串实例。
     *
     * @param { boolean } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: boolean): string;

    /**
     * 根据byte创建新的字符串实例。
     *
     * @param { byte } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: byte): string;

    /**
     * 根据char创建新的字符串实例。
     *
     * @param { char } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: char): string;

    /**
     * 根据short创建新的字符串实例。
     *
     * @param { short } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: short): string;

    /**
     * 根据int创建新的字符串实例。
     *
     * @param { int } value - 待转换为字符串的值。
     *     <br>取值约束：可以为任意整数。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: int): string;

    /**
     * 根据long创建新的字符串实例。
     *
     * @param { long } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: long): string;

    /**
     * 根据float创建新的字符串实例。
     *
     * @param { float } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: float): string;

    /**
     * 根据double创建新的字符串实例。
     *
     * @param { double } value - 待转换为字符串的值。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: double): string;

    /**
     * 创建新的字符串实例。
     *
     * @param { Any } value - 待转换为字符串的值，可以是Object或null。
     * @returns { string } 新的字符串实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: Any): string;

    /**
     * 返回指定索引处的字符串实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：可以为任意整数。
     * @returns { string } 该索引处的字符串值。
     * @throws { Error } 当index为负数或大于等于长度时，抛出StringIndexOutOfBoundsError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: int): string;

    /**
     * 该字符串的长度。
     *
     * @returns { int } 该字符串的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getLength(): int;

    /**
     * 该字符串的长度。
     *
     * @returns { int } 该字符串的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get length(): int;

    /**
     * 将该字符串与字符串数组连接。
     *
     * @param { string } s - 待连接的字符串。
     * @returns { string } 由this + strings[0] + ... + strings[string.length - 1]连接而成的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(s: string): string;

    /**
     * 将该字符串与两个字符串连接。
     *
     * @param { string } s1
     * @param { string } s2
     * @returns { string } 连接后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    concat(s1: string, s2: string): string;

    /**
     * 将该字符串与三个字符串连接。
     *
     * @param { string } s1
     * @param { string } s2
     * @param { string } s3
     * @returns { string } 连接后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    concat(s1: string, s2: string, s3: string): string;

    /**
     * 将该字符串与字符串数组连接。
     *
     * @param { string[] } strings - 待连接的字符串。
     * @returns { string } 连接后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(...strings: string[]): string;

    /**
     * 基于区域设置和选项比较该字符串与另一个字符串。
     *     如果该字符串排序在另一个字符串之前，则结果为-1；
     *     相等时为0，否则为1。
     *
     * @param { string } that - 用于比较的字符串。
     * @param { string | string[] } [locale] - 表示BCP47语言标签的字符串。
     * @param { Intl.CollatorOptions } [options] - 包含比较选项的Intl.CollatorOptions。
     * @returns { int } 比较结果。
     * @throws { RangeError } 当区域标签非法或未找到时，抛出该异常。请使用合法的BCP47语言标签，
     *     例如'en-US'或'zh-CN'。
     * @throws { NullPointerError }  当另一个字符串或区域设置为undefined时，抛出该异常。请确保'that'参数为合法的
     *     字符串对象，且传入区域设置时其定义正确。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public localeCompare(that: string, locale?: string | string[], options?: Intl.CollatorOptions): int;

    /**
     * 检查该字符串中从指定索引开始的子串
     *     是否以指定前缀开头。
     *     `fromIndex`为负数时按0处理。当`prefix`为空时，
     *     结果恒为true。
     *
     * @param { string } prefix - 前缀字符串。
     * @param { int } [fromIndex] - 起始索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } 如果该子串以指定前缀开头则返回true，
     *     否则返回false（包括prefix长于该子串的情况）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public startsWith(prefix: string, fromIndex?: int): boolean;

    /**
     * 检查该字符串是否以指定后缀结尾。
     *
     * @param { string } suffix - 后缀字符串。
     * @param { int } [endPosition] - 期望找到后缀的位置，默认值为str.length。
     *     <br>取值约束：应为整数。
     * @returns { boolean } 如果该字符串以指定后缀结尾则返回true，
     *     否则返回false（包括suffix长于被检查子串的情况）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public endsWith(suffix: string, endPosition?: int): boolean;

    /**
     * 截取该字符串的子串，从指定索引开始，
     *     到另一个指定索引之前结束。
     *     如果'begin'小于0，则按0处理。
     *     如果'begin'大于this.length，则按this.length处理。
     *
     * @param { int } begin - 子串的起始位置。
     *     <br>取值约束：应为整数。
     * @returns { string } 该字符串的子串所构成的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int): string;

    /**
     * 截取该字符串的子串，从指定索引开始，
     *     到另一个指定索引之前结束。
     *     如果'begin'小于0，则按0处理。
     *     如果'begin'大于this.length，则按this.length处理。
     *     如果'end'小于0，则按0处理。
     *     如果'end'大于this.length，则按this.length处理。
     *     如果'begin'大于'end'，则二者互换。
     *     如果'begin'等于'end'，则返回空字符串。
     *
     * @param { int } begin - 子串的起始位置。
     *     <br>取值约束：应为整数。
     * @param { int } end - 子串的结束位置（不包含）。
     *     <br>取值约束：可以为任意整数。
     * @returns { string } 该字符串的子串所构成的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int, end: int): string;

    /**
     * 使用分隔符分割该字符串，并返回有序的子串数组。
     *     结果数组的顺序与从头到尾遍历该字符串的
     *     顺序一致。子串中不包含匹配模式本身。
     *     数组长度受指定值限制。
     *
     * @param { string } separator - 用于分割的字符串。
     * @param { int } [limit] - 返回数组的最大长度；如果为负数，则取Int.MAX_VALUE。
     *     <br>取值约束：应为整数。
     * @returns { string[] } 包含该字符串各子串的字符串数组。
     * @throws { NullPointerError } 当pattern参数为null时，抛出该异常。请确保separator参数为
     *     合法的非null字符串对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: string, limit?: int): string[];

    /**
     * 使用RegExp分隔符分割该字符串，并返回有序的子串数组。
     *
     * @param { RegExp } separator - 用于分割的RegExp。
     * @param { int } [limit] - 返回数组的最大长度；如果为负数，则不做限制。
     *     <br>取值约束：应为整数。
     * @returns { string[] } 包含该字符串各子串的字符串数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: RegExp, limit?: int): string[];

    /**
     * 使用分隔符分割该字符串，并返回有序的子串数组。
     *
     * @param { string | RegExp } separator - 用于分割的字符串或RegExp。
     * @param { int } [limit] - 返回数组的最大长度；如果为负数，则不做限制。
     *     <br>取值约束：应为整数。
     * @returns { string[] } 包含该字符串各子串的字符串数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: string | RegExp, limit?: int): string[];

    /**
     * at()方法接受一个整数值，返回由指定偏移位置处单个UTF-16码元
     *     构成的新字符串。该方法允许传入正整数和负整数。
     *     负整数表示从字符串最后一个字符开始倒数。
     *
     * @param { int } index - 转换后的位置索引。
     *     <br>取值约束：应为整数。
     * @returns { string | undefined } 由指定位置处单个UTF-16码元构成的字符串。
     *     如果给定索引不存在，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): string | undefined;

    /**
     * charCodeAt()方法返回0到65535之间的整数，表示给定索引处的
     *     UTF-16码元。
     *
     * @param { int } index - 下标，取值必须为[0, string.length-1]范围内的整数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { int } 指定索引处的UTF-16码元值。
     * @throws { RangeError } - 索引超出范围。index为负数，或大于等于字符串
     *     长度。请确保index位于[0, string.length-1]范围内。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public charCodeAt(index: int): int;

    /**
     * 静态方法string.fromCharCode()返回由指定UTF-16码元创建的字符串。
     *
     * @param { int } code - 0到65535（0xFFFF）之间表示UTF-16码元的number值，或NaN。
     *     <br>取值约束：可以为任意整数。
     * @returns { string } 由指定UTF-16码元构成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(code: int): string;

    /**
     * 静态方法string.fromCharCode()返回由指定的一组UTF-16码元创建的字符串。
     *
     * @param { int[] } codes - 0到65535（0xFFFF）之间表示UTF-16码元的数值，或NaN。
     * @returns { string } 由指定的一组UTF-16码元构成的字符串。
     * @throws { NegativeArraySizeError } - 数组长度非法。codes数组的长度为负数。请提供
     *     合法的非负长度数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(...codes: int[]): string;

    /**
     * includes()方法执行区分大小写的查找，判断一个字符串是否
     *     包含在另一个字符串中，并相应地返回true或false。
     *
     * @param { string } searchString - 待查找的字符串。
     * @param { int } [position] - 在该字符串中开始查找searchString的位置。
     *     默认值为0，即从字符串开头开始查找。
     *     <br>取值约束：应为整数。
     * @returns { boolean } 如果在给定字符串中的任意位置找到待查找的字符串则返回true，
     *     包括searchString为空字符串的情况；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchString: string, position?: int): boolean;

    /**
     * padEnd()方法使用给定字符串（必要时重复）填充当前字符串，
     *     使结果字符串达到给定长度。
     *     填充从当前字符串的末尾开始。
     *
     * @param { int } maxLength - 填充完成后结果字符串的目标长度。
     *     <br>取值约束：应为整数。
     * @returns { string } 在当前字符串末尾填充padString后得到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int): string;

    /**
     * padEnd()方法使用给定字符串（必要时重复）填充当前字符串，
     *     使结果字符串达到给定长度。
     *     填充从当前字符串的末尾开始。
     *
     * @param { int } maxLength - 填充完成后结果字符串的目标长度。
     *     <br>取值约束：应为整数。
     * @param { char } ch - 用于填充当前字符串的内容。
     * @returns { string } 在当前字符串末尾填充padString后得到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int, ch: char): string;

    /**
     * padEnd()方法使用给定字符串（必要时重复）填充当前字符串，
     *     使结果字符串达到给定长度。
     *     填充从当前字符串的末尾开始。
     *
     * @param { int } maxLength - 填充完成后结果字符串的目标长度。
     *     <br>取值约束：可以为任意整数。
     * @param { string } [fillString] - 用于填充当前字符串的内容。如果不传入该参数，
     *     则默认使用空格字符（U+0020）。如果fillString为空字符串，则不进行填充。
     * @returns { string } 在当前字符串末尾填充padString后得到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int, fillString?: string): string;

    /**
     * padStart()方法使用另一个字符串（必要时重复多次）填充当前字符串，
     * 直到结果字符串达到给定长度。
     * 填充从当前字符串的开头开始。
     *
     * @param { int } maxLength - 结果字符串的目标长度。如果小于或等于
     *     当前字符串的长度，则返回原始字符串的副本。
     *     <br>取值约束：可以为任意整数。
     * @param { char } ch - 用于填充的字符（按需重复使用）。
     * @returns { string } 在开头以指定字符填充后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(maxLength: int, ch: char): string;

    /**
     * padStart()方法使用另一个字符串（必要时重复多次）填充当前字符串，
     *     直到结果字符串达到给定长度。
     *     填充从当前字符串的开头开始。
     *
     * @param { int } maxLength - 结果字符串的目标长度。如果小于或等于
     *     当前字符串的长度，则返回原始字符串的副本。
     *     <br>取值约束：应为整数。
     * @param { string } [fillString] - 用于填充的字符串，不传入时默认使用空格字符（U+0020）。
     * @returns { string } 在开头以指定字符串填充后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(maxLength: int, fillString?: string): string;

    /**
     * substr()方法从指定索引开始，返回字符串中
     *     指定数量字符所构成的部分。
     *
     * @param { int } begin - 返回子串中第一个字符的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [length] - 待提取的字符数量。如果不传入该参数，则默认提取
     *     从`begin`到字符串末尾的全部字符。
     *     <br>取值约束：可以为任意整数。
     * @returns { string } 包含给定字符串中指定部分的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substr(begin: int, length?: int): string;

    /**
     * 在正则表达式与该字符串对象之间执行匹配查找。
     *
     * @param { string } implicitRegExp - 正则表达式对象，或可隐式转换为正则表达式的值。
     * @returns { int } 正则表达式与给定字符串首次匹配的索引。
     *     返回值范围为[-1, string.length - 1]：
     *     - 未找到匹配时返回-1。
     *     - 找到匹配时返回非负整数（0到string.length - 1），表示第一个
     *       匹配子串的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(implicitRegExp: string): int;

    /**
     * 在正则表达式与该字符串对象之间执行匹配查找。
     *
     * @param { RegExp } regexp - 正则表达式对象，或可隐式转换为正则表达式的值。
     * @returns { int } 正则表达式与给定字符串首次匹配的索引，
     *     未找到匹配时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: RegExp): int;

    /**
     * 在正则表达式与该字符串对象之间执行匹配查找。
     *
     * @param { string | RegExp } regexp - 正则表达式对象，或可隐式转换为正则表达式的值。
     * @returns { int } 正则表达式与给定字符串首次匹配的索引，
     *     未找到匹配时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: string | RegExp): int;

    /**
     * 静态方法string.fromCodePoint()返回由指定的一组码点创建的字符串。
     *
     * @param { int[] } codePoints - 0到0x10FFFF（含端点）之间表示Unicode
     *     码点的整数。
     * @returns { string } 由指定的一组码点创建的字符串。
     * @throws { RangeError } 当codePoints[i]小于0或大于0x10FFFF时，抛出该异常。请确保每个码点
     *      都位于合法的Unicode范围[0, 0x10FFFF]内。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCodePoint(...codePoints: int[]): string;

    /**
     * 将另一个Object按字符串处理，检查其与该字符串是否相等。
     *
     * @param { Any } to - 用于比较的另一个对象。
     * @returns { boolean } 如果两个字符串相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(to: Any): boolean;

    /**
     * 获取指定索引处的char。
     *
     * @param { int } index - 字符串内部char数组中的索引。
     *     <br>取值约束：应为整数。
     * @returns { char } 该索引处的char值。
     * @throws { StringIndexOutOfBoundsError } 当index为负数或大于等于长度时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public charAt(index: int): char;

    /**
     * 检查该字符串是否为空。
     *
     * @returns { boolean } 如果为空则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isEmpty(): boolean;

    /**
     * 获取该字符串中指定索引处的码点。
     * 与charAt(index)类似，但如果该索引处的字符是
     * 代理对的起始，则返回该码点对应的int
     * 表示；否则
     * 返回该索引处的字符。
     *
     * @param { int } index - 可能构成代理对的索引。
     *     <br>取值约束：应为整数。
     * @returns { int | undefined } 指定索引处的码点。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointAt(index: int): int | undefined;

    /**
     * 返回begin与end索引之间完整码点的数量。
     * 范围之外的字符不计入，即使该范围
     * 在代理对中间结束也是如此。
     *
     * @param { int } begin - 起始索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } end - 结束索引（不包含）。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { int } 完整码点的数量。
     * @throws { StringIndexOutOfBoundsError } 当begin为负数或大于等于长度，或end大于等于长度时，抛出该异常。
     * @throws { RangeError } 当begin大于end时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointCount(begin: int, end: int): int;

    /**
     * 返回begin与end索引之间完整码点的数量。
     * 范围之外的字符不计入，即使该范围
     * 在代理对中间结束也是如此。
     *
     * @param { double } begin - 起始索引。
     * @param { double } end - 结束索引（不包含）。
     * @returns { double } 完整码点的数量。
     * @throws { StringIndexOutOfBoundsError } 当begin为负数或大于等于长度，或end大于等于长度时，抛出该异常。
     * @throws { RangeError } 当begin大于end时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointCount(begin: double, end: double): double;

    /**
     * 获取表示该字符串的完整char序列。
     *
     * @returns { char[] } char[]数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getChars(): char[];

    /**
     * 获取表示该字符串中begin与end索引之间部分的char序列，
     * 该范围为
     * 半开区间[begin, end)。
     *
     * @param { int } begin - 起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } end - 结束索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { char[] } char[]数组。
     * @throws { StringIndexOutOfBoundsError } 当begin大于end、为负数、大于等于长度，或end大于长度时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getChars(begin: int, end: int): char[];

    /**
     * 获取表示该字符串中begin与end索引之间部分的byte序列，
     * 该范围为
     * 半开区间[begin, end)。
     *
     * @param { int } begin - 起始索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } end - 结束索引（不包含）。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { byte[] } byte[]数组。
     * @throws { StringIndexOutOfBoundsError } 当begin为负数或大于等于长度，或end大于等于长度时，抛出该异常。
     * @throws { RangeError } 当begin大于end时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBytes(begin: int, end: int): byte[];

    /**
     * 将给定的StringBuilder与该字符串进行比较。如果此刻
     * 该StringBuilder的内容与该字符串相同，则结果为true，
     * 否则为false。
     *
     * @param { StringBuilder } sb - 用于比较的StringBuilder。
     * @returns { boolean } 如果该StringBuilder的内容相同则返回true，否则返回false。
     * @throws { NullPointerError } 当sb参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contentEquals(sb: StringBuilder): boolean;

    /**
     * 对该字符串与另一个字符串进行字典序比较。
     * 如果该字符串排序在另一个字符串之前，则结果小于0；
     * 相等时为0，否则大于0。
     *
     * @param { string } other - 用于比较的字符串。
     * @returns { int } 比较结果。
     * @throws { NullPointerError } 当to参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: string): int;

    /**
     * 查找某个字符在该字符串中首次出现的位置。
     *
     * @param { char } ch - 从字符串开头开始查找的字符。
     *     该字符必须是合法的UTF-16码元（0到65535）。
     * @returns { int } 该字符从字符串开头计起的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(ch: char): int;

    /**
     * 查找某个字符在该字符串中位置大于等于fromIndex处首次出现的位置。
     * fromIndex为负数时等价于0；fromIndex大于等于长度时表示无匹配。
     *
     * @param { char } ch - 从字符串开头开始查找的字符。
     *     该字符必须是合法的UTF-16码元（0到65535）。
     * @param { int } fromIndex - 开始查找的位置。
     *     <br>取值约束：应为整数。
     * @returns { int } 该字符从字符串开头计起的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(ch: char, fromIndex: int): int;

    /**
     * 查找另一个字符串在该字符串中首次出现的位置。
     *
     * @param { string } str - 在该字符串中查找的子串。
     *     如果传入空字符串，则返回fromIndex（fromIndex为undefined时返回0）。
     * @param { int } [fromIndex] - 开始查找的位置。
     *     <br>取值约束：应为整数。
     * @returns { int } 该子串从字符串开头计起的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(str: string, fromIndex?: int): int;

    /**
     * 查找某个字符在该字符串中位置小于等于fromIndex处最后一次出现的位置。
     * fromIndex大于等于长度时效果相同；fromIndex为负数时表示无匹配。
     *
     * @param { char } ch - 从字符串末尾开始查找的字符。
     * @param { int } fromIndex - 开始查找的位置。
     *     <br>取值约束：应为整数。
     * @returns { int } 该字符从字符串开头计起的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(ch: char, fromIndex: int): int;

    /**
     * 查找某个字符在该字符串中最后一次出现的位置。
     *
     * @param { char } ch - 从字符串末尾开始查找的字符。
     * @returns { int } 该字符从字符串开头计起的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(ch: char): int;

    /**
     * 查找另一个字符串在该字符串中最后一次出现的位置。
     * 如果fromIndex为undefined，则从字符串末尾开始查找。
     * 如果fromIndex大于等于长度，则按长度处理，即从末尾开始查找。
     * 如果fromIndex为负数，则返回-1，表示无匹配。
     *
     * @param { string } str - 在该字符串中查找的子串。
     * @param { int } [fromIndex] - 开始反向查找的位置。
     *     为undefined时，从字符串末尾开始查找。
     *     大于等于字符串长度时，从末尾开始查找。
     *     为负数时，返回-1。
     *     <br>取值约束：应为整数。
     * @returns { int } 该子串从字符串开头计起的索引，未找到时返回-1。
     * @throws { NullPointerError } 当str参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(str: string, fromIndex?: int): int;

    /**
     * 将指定字符出现的所有位置替换为另一个
     * 指定字符。如果该字符串中未找到
     * 指定字符，则返回原始
     * 字符串。
     *
     * @param { char } oldCh - 待替换的字符。
     * @param { char } newCh - 用于替换的字符。
     * @returns { string } 替换字符后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceChar(oldCh: char, newCh: char): string;

    /**
     * 检查该字符串是否包含指定的字符串。
     * 从指定索引开始查找。
     *
     * @param { string } str - 待查找的字符串。
     *     <br>取值约束：最小长度为0。
     * @param { int } fromIndex - 开始查找的索引。
     *     <br>取值约束：应为整数。
     * @returns { boolean } 如果该字符串包含str则返回true，否则返回false。
     * @throws { NullPointerError } 当str参数为null时，抛出该异常。
     * @throws { StringIndexOutOfBoundsError } 当fromIndex参数为负数或大于等于长度时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contains(str: string, fromIndex: int): boolean;

    /**
     * 检查该字符串是否包含指定的字符串。
     * 从指定索引开始查找（fromIndex为负数时等价于fromIndex = 0，
     * fromIndex大于等于长度时表示无匹配）。
     *
     * @param { string } str - 待查找的字符串。
     * @param { double } fromIndex - 开始查找的索引。
     * @returns { boolean } 如果该字符串包含str则返回true，否则返回false。
     * @throws { NullPointerError } 当str参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contains(str: string, fromIndex: double): boolean;

    /**
     * 连接指定的字符串数组，并在所有元素之间插入
     * 指定的分隔符。
     *
     * @param { string[] } strings - 字符串数组。
     * @param { string } delim - 各元素之间的分隔符。
     * @returns { string } 由字符串数组和分隔符新建的字符串。
     * @throws { NullPointerError } 当strings参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static join(strings: string[], delim: string): string;

    /**
     * 连接指定的字符串数组，并在所有元素之间插入
     * 在每个元素前插入指定前缀、在每个元素后插入指定
     * 后缀，并在所有元素之间插入指定的
     * 分隔符。
     *
     * @param { string[] } strings - 字符串数组。
     * @param { string } delim - 各元素之间的分隔符。
     * @param { string } prefix - 每个元素前的前缀。
     * @param { string } suffix - 每个元素后的后缀。
     * @returns { string } 由字符串数组、前缀、后缀和分隔符新建的字符串。
     * @throws { NullPointerError } 当strings、delim、prefix或suffix参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static join(strings: string[], delim: string, prefix: string, suffix: string): string;

    /**
     * 创建与该字符串相似的新字符串，但其中的
     * 所有字符均为小写。
     *
     * @returns { string } 所有字符转换为小写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLowerCase(): string;

    /**
     * 创建与该字符串相似的新字符串，但其中的
     * 所有字符均为大写。
     *
     * @returns { string } 所有字符转换为大写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toUpperCase(): string;

    /**
     * 去除该字符串开头和末尾的所有空白字符。
     *
     * @returns { string } 去除空白后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trim(): string;

    /**
     * 去除该字符串开头的所有空白字符。
     *
     * @returns { string } 去除左侧空白后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimLeft(): string;

    /**
     * 去除该字符串末尾的所有空白字符。
     *
     * @returns { string } 去除右侧空白后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimRight(): string;

    /**
     * 去除该字符串开头和末尾的所有
     * 指定字符。
     *
     * @param { char[] } remove - 包含待去除字符的字符串。
     * @returns { string } 去除空白后的新字符串。
     * @throws { NullPointerError } 当remove参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trim(remove: char[]): string;

    /**
     * 去除该字符串开头的所有指定字符。
     *
     * @param { char[] } remove - 包含待去除字符的字符串。
     * @returns { string } 去除左侧空白后的新字符串。
     * @throws { NullPointerError } 当remove参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimLeft(remove: char[]): string;

    /**
     * 去除该字符串末尾的所有指定字符。
     *
     * @param { char[] } remove - 包含待去除字符的字符串。
     * @returns { string } 去除右侧空白后的新字符串。
     * @throws { NullPointerError } 当remove参数为null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimRight(remove: char[]): string;

    /**
     * 创建指定长度的新字符串，其中
     * 该字符串的开头以指定字符填充。
     * `padStart`是该方法的别名，
     * 区别仅在于参数顺序。
     *
     * @param { char } pad - 用于填充的字符（按需重复使用）。
     *     该字符必须是合法的UTF-16码元（0到65535）。
     * @param { int } count - 结果字符串的目标长度。
     *     如果count小于或等于当前字符串长度，则返回原始字符串的副本。
     *     <br>取值约束：应为整数。
     * @returns { string } 在开头填充后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padLeft(pad: char, count: int): string;

    /**
     * 创建指定长度的新字符串，其中
     * 该字符串的末尾以指定字符填充。
     * `padEnd`是该方法的别名，
     * 区别仅在于参数顺序。
     *
     * @param { char } pad - 用于填充的字符（按需重复使用）。
     *     该字符必须是合法的UTF-16码元（0到65535）。
     * @param { int } count - 结果字符串的目标长度。
     *     如果count小于或等于当前字符串长度，则返回原始字符串的副本。
     *     <br>取值约束：应为整数。
     * @returns { string } 在末尾填充后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padRight(pad: char, count: int): string;

    /**
     * 将该字符串重复count次，例如：
     * a = 'A'，
     * a.repeat(2) == 'AA'。
     *
     * @param { int } count - 该字符串重复的次数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { string } 该字符串重复count次后得到的字符串。
     * @throws { ArgumentOutOfRangeError } 当count小于0时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public repeat(count: int): string;

    /**
     * toString()方法以原对象副本的形式返回给定字符串的
     * 字符串表示。
     *
     * @returns { string } 原始字符串的副本。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * anchor()方法创建将字符串嵌入带name属性的<a>元素（<a name="...">str</a>）的字符串。
     *
     * @param { string } name - 锚点名称。
     * @returns { string } 以<a name="name">开始标签起始的字符串
     *     （name中的双引号会被替换为&quot;），
     *     随后是文本str，最后是</a>结束标签。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public anchor(name: string): string;

    /**
     * big()方法创建将字符串嵌入<big>元素（<big>str</big>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<big>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public big(): string;

    /**
     * small()方法创建将字符串嵌入<small>元素（<small>str</small>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<small>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public small(): string;

    /**
     * blink()方法创建将字符串嵌入<blink>元素（<blink>str</blink>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<blink>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public blink(): string;

    /**
     * bold()方法创建将字符串嵌入<b>元素（<b>str</b>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<b>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public bold(): string;

    /**
     * italics()方法创建将字符串嵌入<i>元素（<i>str</i>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<i>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public italics(): string;

    /**
     * strike()方法创建将字符串嵌入<strike>元素（<strike>str</strike>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<strike>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public strike(): string;

    /**
     * sub()方法创建将字符串嵌入<sub>元素（<sub>str</sub>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<sub>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(): string;

    /**
     * sup()方法创建将字符串嵌入<sup>元素（<sup>str</sup>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<sup>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sup(): string;

    /**
     * fixed()方法创建将字符串嵌入<tt>元素（<tt>str</tt>）的字符串，
     * 使字符串以大号字体显示。
     *
     * @returns { string } 嵌入到<tt>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fixed(): string;

    /**
     * fontcolor()方法创建将字符串嵌入<font>元素（<font color="...">str</font>）的字符串，
     * 使字符串以指定颜色显示。
     *
     * @param { string } color - 使用的颜色。
     * @returns { string } 嵌入到带color属性的<font>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontcolor(color: string): string;

    /**
     * fontsize()方法创建将字符串嵌入<font>元素（<font size="...">str</font>）的字符串，
     * 使字符串以指定字号显示。
     *
     * @param { int } size - 使用的字号。
     *     <br>取值约束：应为整数。
     * @returns { string } 嵌入到带size属性的<font>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontsize(size: int): string;

    /**
     * fontsize()方法创建将字符串嵌入<font>元素（<font size="...">str</font>）的字符串，
     * 使字符串以指定字号显示。
     *
     * @param { string } size - 使用的字号。
     * @returns { string } 嵌入到带size属性的<font>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontsize(size: string): string;

    /**
     * link()方法创建将字符串嵌入<a>元素（<a href="...">str</a>）的字符串，
     * 用作指向另一个URL的超链接。
     *
     * @param { string } link - 链接指向的URL。
     * @returns { string } 嵌入到带href属性的<a>元素中的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public link(link: string): string;

    /**
     * trimEnd()方法去除字符串末尾的空白并返回新字符串，
     * 不修改原始字符串。trimRight()是该方法的别名。
     *
     * @returns { string } 去除末尾空白后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimEnd(): string;

    /**
     * trimStart()方法去除字符串开头的空白并返回新字符串，
     * 不修改原始字符串。trimLeft()是该方法的别名。
     *
     * @returns { string } 去除开头空白后得到的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimStart(): string;

    /**
     * slice()方法提取字符串中的一段并以新字符串返回，
     * 不修改原始字符串。
     *
     * @param { int } [begin] - 起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束索引。
     *     <br>取值约束：应为整数。
     * @returns { string } 从字符串中提取出的部分。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): string;

    /**
     * 解析替换模板字符串中的特殊替换模式。
     *
     * @param { string } matched - 匹配到的字符串，即正则表达式匹配到的完整子串。
     * @param { string } str - 执行替换操作的原始完整字符串。
     * @param { int } position - 匹配子串在原始字符串str中的起始索引，从0开始计数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { string[] } captures - 捕获组匹配结果数组。
     * @param { Record<string, string | undefined> | undefined } namedCaptures - 命名捕获组的映射
     *     对象。
     * @param { string } replacement - 替换模板字符串。
     * @returns { string } 解析替换模板中所有替换模式后得到的最终
     *     替换字符串。
     * @throws { StringIndexOutOfBoundsError } 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static getSubstitution(matched: string, str: string, position: int, captures: string[],
        namedCaptures: Record<string, string | undefined> | undefined, replacement: string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: RegExp, replaceValue: string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { string } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string, replaceValue: string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { string | RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: RegExp, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { string } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * 返回将模式的一处、多处或全部匹配替换为指定内容后的新字符串。
     *
     * @param { string | RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string | RegExp, replacer: (substr: string, 
        args: (Object | undefined)[]) => string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: RegExp, replaceValue: string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { string } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string, replaceValue: string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { string | RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: RegExp, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { string } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * 返回将模式的所有匹配替换为指定内容后的新字符串。
     *
     * @param { string | RegExp } searchValue - 匹配模式，可以是字符串或RegExp。
     * @param { Function } replacer - 用于生成替换内容的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string | RegExp, replacer: (substr: string,
        args: (Object | undefined)[]) => string): string;

    
    /**
     * toLocaleLowerCase()方法返回调用方字符串转换为小写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @param { string } locale - 使用的区域设置。
     * @returns { string } 转换为小写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(locale: string): string;

    /**
     * toLocaleLowerCase()方法返回调用方字符串转换为小写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @param { string[] } locale - 使用的区域设置。
     * @returns { string } 转换为小写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(locale: string[]): string;

    /**
     * toLocaleLowerCase()方法返回调用方字符串转换为小写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @returns { string } 转换为小写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(): string;

    /**
     * toLocaleUpperCase()方法返回调用方字符串转换为大写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @param { string } locale - 使用的区域设置。
     * @returns { string } 转换为大写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(locale: string): string;

    /**
     * toLocaleUpperCase()方法返回调用方字符串转换为大写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @param { string[] } locale - 使用的区域设置。
     * @returns { string } 转换为大写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(locale: string[]): string;

    /**
     * toLocaleUpperCase()方法返回调用方字符串转换为大写后的值，
     * 转换时遵循区域设置相关的大小写映射规则。
     *
     * @returns { string } 转换为大写后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(): string;

    /**
     * 获取字符串与正则表达式的匹配结果。
     *
     * @param { string } implicitRegExp - 正则表达式对象。
     * @returns { RegExpMatchArray | null } 如果regexp.global为true，则返回所有匹配完整正则
     *     表达式的结果，但不包含捕获组；
     *     否则仅返回第一个完整匹配及其相关的捕获组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(implicitRegExp: string): RegExpMatchArray | null;

    /**
     * 获取字符串与正则表达式的匹配结果。
     *
     * @param { RegExp } regexp - 正则表达式对象。
     * @returns { RegExpMatchArray | null } 如果regexp.global为true，则返回所有匹配完整正则
     *     表达式的结果，但不包含捕获组；
     *     否则仅返回第一个完整匹配及其相关的捕获组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(regexp: RegExp): RegExpMatchArray | null;

    /**
     * 获取字符串与正则表达式的匹配结果。
     *
     * @param { string | RegExp } regexp - 正则表达式对象。
     * @returns { RegExpMatchArray | null } 如果regexp.global为true，则返回所有匹配完整正则
     *     表达式的结果，但不包含捕获组；
     *     否则仅返回第一个完整匹配及其相关的捕获组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(regexp: string | RegExp): RegExpMatchArray | null;

    /**
     * 返回字符串与正则表达式所有匹配结果的迭代器，
     * 其中包含捕获组。
     *
     * @param { RegExp } reg - 正则表达式对象。
     * @returns { IterableIterator<RegExpMatchArray> } 所有匹配结果的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public matchAll(reg: RegExp): IterableIterator<RegExpMatchArray>;

    /**
     * string值的normalize()方法返回该字符串的Unicode规范化形式。
     *
     * @param { string } [form] - 取值为'NFC'、'NFD'、'NFKC'或'NFKD'。
     * @returns { string } 该字符串的Unicode规范化形式。
     * @throws { RangeError } 当form不是'NFC'、'NFD'、'NFKC'或'NFKD'时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public normalize(form?: string): string;

    /**
     * string值的toWellFormed()方法返回一个字符串，其中该字符串的所有孤立代理项
     * 都被替换为Unicode替换字符U+FFFD。
     *
     * @returns { string } 格式良好的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toWellFormed(): string;

    /**
     * string值的isWellFormed()方法返回一个boolean值，表示该字符串是否包含
     * 孤立代理项。
     *
     * @returns { boolean } 如果该字符串包含孤立代理项则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isWellFormed(): boolean;

    /**
     * 检查字符串是否已压缩。
     *
     * @returns { boolean } 如果s已压缩则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isCompressed(): boolean;

    /**
     * 返回该字符串的迭代器。
     *
     * @returns { IterableIterator<string> } 该字符串的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<string>;
}
