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
 * 表示装箱后的double值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Double extends Floating implements Comparable<Double> {
    /**
     * 构造初始值为0的新Double实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * 使用指定的初始值构造新的Double实例。
     *
     * @param { double } value - 初始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: double);

    /**
     * 根据BigInt构造新的Double实例。
     *
     * @param { BigInt } value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: BigInt);

    /**
     * 根据字符串构造新的Double实例。
     *
     * @param { string } value - 可能包含number值的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: string);

    /**
     * 创建新的Double实例。
     *
     * @returns { Double } 新的Double实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): Double;

    /**
     * 创建新的Double实例。
     *
     * @param { string | Double | BigInt | undefined | null } value - 待转换为number的值。
     *     可以是string、number或BigInt（可选）。
     * @returns { Double } 新的Double实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: string | Double | BigInt | undefined | null): Double;

    /**
     * 返回当前实例的值。
     *
     * @returns { double } 当前值转换得到的double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    toDouble(): double;

    /**
     * 以double值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { double }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toDouble(value: double): double;

    /**
     * parseFloat(String)将std.core.String转换为double值。
     * 参数为'+Infinity'、'Infinity'或'-Infinity'时，分别返回`inf`或`-inf`。
     * 参数为'+0'或'-0'时，分别返回0或-0。
     * 参数带有前导零时会被忽略：'0001.5'返回1.5，'-0001.5'返回-1.5。
     * 参数以'.'开头时，隐含前导零：'.5'返回0.5，'-.5'返回-0.5。
     * 参数解析成功时，忽略末尾的非数字字符：'-.6ffg'返回-0.6。
     * 如果参数无法解析为number值，则返回NaN。
     *
     * @param { string } s - 待转换的字符串。
     * @returns { double } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseFloat(s: string): double;

    /**
     * parseInt(String)以10为基数从String中解析出整数。
     *
     * @param { string } s - 待转换的字符串。
     * @returns { double } 解析结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseInt(s: string): double;
  /**
   * parseInt(String, int)按指定基数从String中解析出整数。
   * 参数为('10', 1)或('10', 37)时，抛出ArgumentOutOfRangeError。
   * 参数为('10', 2)时，返回2。
   * 参数为('10', 10)或('10', 0)时，返回10。
   * 参数为('ff', 16)时，返回255。
   * 以此类推。
   *
   * @param { string } s - 待转换的字符串。
   * @param { int } r - 转换使用的基数，取值范围为[2, 36]，传入0时按10处理。
   *     <br>取值约束：应为整数。
   * @returns { double } 解析结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static parseInt(s: string, r: int): double;

    /**
     * parseInt(String, double)按指定基数从String中解析出整数。
     * 参数为('10', 1)或('10', 37)时，抛出ArgumentOutOfRangeError。
     * 参数为('10', 2)时，返回2。
     * 参数为('10', 10)或('10', 0)时，返回10。
     * 参数为('ff', 16)时，返回255。
     * 以此类推。
     *
     * @param { string } s - 待转换的字符串。
     * @param { double } r - 转换使用的基数，取值范围为[2, 36]，传入0时按10处理。
     * @returns { double } 解析结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseInt(s: string, r: double): double;

    /**
     * 判断当前实例与传入对象是否相等，
     * 传入对象按Double处理。如果传入对象的类型与当前类型不一致，则返回false。
     *
     * @param { Any } other - 待比较的对象。
     * @returns { boolean } 如果传入对象与当前实例的值相同则返回true，否则返回false。
     *     如果传入对象的类型与当前类型不一致，则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    equals(other: Any): boolean;

    /**
     * isNaN(double)检查double值是否为NaN（非数字）。
     *
     * @param { double } v - 待检测的double值。
     * @returns { boolean } 如果参数为NaN则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isNaN(v: double): boolean;

    /**
     * isNaN()检查底层的double值是否为NaN（非数字）。
     *
     * @returns { boolean } 如果底层的double值为NaN则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isNaN(): boolean;

    /**
     * isFinite(double)检查double值是否为浮点数值（既非NaN也非无穷大）。
     *
     * @param { double } v - 待检测的double值。
     * @returns { boolean } 如果参数为浮点数值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isFinite(v: double): boolean;

    /**
     * isFinite()检查底层的double值是否为浮点数值（既非NaN也非无穷大）。
     *
     * @returns { boolean } 如果底层的double值为浮点数值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isFinite(): boolean;

    /**
     * 该类型作为double时可表示的最小值。
     * 用于规避libc解析double字面量缺陷的变通实现。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MIN_VALUE: double = 4.9e-300 / 1.e+24;

    /**
     * 该类型作为double时可表示的最大值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MAX_VALUE: double = 1.7976931348623157e+308;

    /**
     * 可用double精确表示而不丢失精度的最大整数值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MAX_SAFE_INTEGER: double = 9007199254740991;

    /**
     * 可用double精确表示而不丢失精度的最小整数值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MIN_SAFE_INTEGER: double = -9007199254740991;

    /**
     * 该类型占用的位数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BIT_SIZE: byte = 64;

    /**
     * 该类型占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTE_SIZE: byte = 8;

    /**
     * 表示IEEE-754规范中的NaN值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NaN: double = 0.0 / 0.0;

    /**
     * 表示IEEE-754规范中的+Infinity值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly POSITIVE_INFINITY: double = 1.0 / 0.0;

    /**
     * 表示IEEE-754规范中的-Infinity值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NEGATIVE_INFINITY: double = -1.0 / 0.0;

    /**
     * 该浮点类型中有效精度位的数量。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRECISION: byte = 53;

    /**
     * 两个double值之间可能的最小差值。
     * 对于double（IEEE-754 binary64），其值为2^(-52)，位表示为0x3cb0000000000000。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly DELTA: double = Double.bitCastFromLong(0x3cb0000000000000);

    /**
     * 两个double值之间可能的最小差值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly EPSILON: double = Double.DELTA;


    /**
     * 返回当前实例的值。
     *
     * @returns { byte } 当前值转换得到的byte值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toByte(): byte;

    /**
     * 返回当前实例的值。
     *
     * @returns { short } 当前值转换得到的short值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toShort(): short;

    /**
     * 返回当前实例的值。
     *
     * @returns { int } 当前值转换得到的int值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

    /**
     * 返回当前实例的值。
     *
     * @returns { long } 当前值转换得到的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLong(): long;

    /**
     * 返回当前实例的值。
     *
     * @returns { float } 当前值转换得到的float值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFloat(): float;

    /**
     * 以byte值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { byte }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: double): byte;

    /**
     * 以short值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { short }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: double): short;

    /**
     * 以int值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: double): int;

    /**
     * 以long值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: double): long;

    /**
     * 以float值的形式返回该基本类型值。
     *
     * @param { double } value - 待转换的值。
     * @returns { float }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: double): float;

    /**
     * 将当前实例与另一个Double对象进行比较。
     * 当前实例小于传入对象时结果小于0，
     * 相等时为0，
     * 否则大于0。
     *
     * @param { Double } other - 用于比较的Double对象。
     * @returns { int } 当前值大于传入值时返回0，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Double): int;

    /**
     * toString(d: double, r: int): string —— 按基数r返回d的字符串表示。
     *
     * @param { double } d
     * @param { int } r - <br>取值约束：应为整数。
     * @returns { string } 字符串形式的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(d: double, r: int): string;

    /**
     * 将指定的double精度浮点值转换为字符串表示。
     *
     * @param { double } d - 字符串形式的值。
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(d: double): string;

    /**
     * 将指定的double精度浮点值转换为字符串表示。
     *
     * @param { int } r - <br>取值约束：应为整数。
     * @returns { string } 字符串形式的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(r: int): string;

    /**
     * 将当前对象转换为字符串。
     *
     * @returns { string } 字符串形式的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { Intl.NumberFormatOptions } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * compare(double, double)检查两个double值的差异是否不超过Double.DELTA。
     *
     * @param { double } lhs - 参与比较的左侧double值。
     * @param { double } rhs - 参与比较的右侧double值。
     * @returns { boolean } 如果lhs与rhs在Double.DELTA精度范围内相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static compare(lhs: double, rhs: double): boolean;

    /**
     * 检查double值是否接近整数。
     *
     * @param { double } v - 待检测的double值。
     * @returns { boolean } 如果参数接近整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isInteger(v: double): boolean;

    /**
     * 检查底层的double值是否接近整数。
     *
     * @returns { boolean } 如果底层的double值接近整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isInteger(): boolean;

    /**
     * 检查double值是否为安全整数。
     *
     * @param { double } v - 待检测的double值。
     * @returns { boolean } 如果参数为整数且小于MAX_SAFE_INTEGER则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isSafeInteger(v: double): boolean;

    /**
     * 检查double值是否为安全整数。
     *
     * @returns { boolean } 如果底层的double值为安全整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isSafeInteger(): boolean;

    /**
     * 将当前实例与传入实例做浮点加法运算，并以新实例返回结果。
     *
     * @param { Double } other - 加法运算的右操作数。
     * @returns { Double } 加法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Double): Double;

    /**
     * 将当前实例与传入实例做浮点减法运算，并以新实例返回结果。
     *
     * @param { Double } other - 减法运算的右操作数。
     * @returns { Double } 减法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Double): Double;

    /**
     * 将当前实例与传入实例做浮点乘法运算，并以新实例返回结果。
     *
     * @param { Double } other - 乘法运算的右操作数。
     * @returns { Double } 乘法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Double): Double;

    /**
     * 将当前实例与传入实例做浮点除法运算，并以新实例返回结果。
     *
     * @param { Double } other - 除法运算的右操作数。
     * @returns { Double } 除法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Double): Double;

    /**
     * 判断当前实例的值是否小于传入实例的值。
     *
     * @param { Double } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值小于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Double): boolean;

    /**
     * 判断当前实例的值是否小于或等于传入实例的值。
     *
     * @param { Double } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值小于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Double): boolean;

    /**
     * 判断当前实例的值是否大于传入实例的值。
     *
     * @param { Double } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值大于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Double): boolean;

    /**
     * 判断当前实例的值是否大于或等于传入实例的值。
     *
     * @param { Double } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值大于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Double): boolean;

    /**
     * toExponential(double)以指数表示法返回底层double值对应的std.core.string。
     * d = new Double(0.25)时，d.toExponential(2)返回'2.50e-1'。
     * d = new Double(0.25)时，d.toExponential(2.5)返回'2.50e-1'。
     * d = new Double(0.25)时，d.toExponential(1)返回'2.5e-1'。
     * d = new Double(12345.01)时，d.toExponential(10)返回'1.2345010000e+4'。
     * d = new Double(NaN)时，d.toExponential(10)返回'NaN'。
     * d = new Double(Double.POSITIVE_INFINITY)时，d.toExponential(10)返回'Infinity'，
     *     负无穷时返回'-Infinity'。
     *
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponentialWithNoDigit(): string;

    /**
     * toExponential()以指数表示法返回底层double值对应的std.core.string。
     *
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponential(): string;

    /**
     * toExponential()以指数表示法返回底层double值对应的std.core.String。
     *
     * @param { double } [d]
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponential(d?: double): string;

    /**
     * toPrecision(double)按指定精度返回底层double值对应的std.core.string。
     * d = new Double(0.25)时，d.toPrecision(4)返回'0.2500'。
     * d = new Double(1.01)时，d.toPrecision(4.7)返回'1.010'。
     * d = new Double(0.25)时，d.toPrecision(0)抛出ArgumentOutOfRangeError。
     * d = new Double(12345.123455)时，d.toPrecision(10)返回'12345.12346'。
     *
     * @param { double } d - 精度（四舍五入取整），取值范围必须为[1, 100]。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toPrecision(d: double): string;

    /**
     * toPrecision()以指数表示法返回底层double值对应的std.core.string。
     *     按规范，不带参数调用toPrecision时其行为等同于toString。
     *
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toPrecision(): string;

    /**
     * toFixed(double)以定点表示法返回底层double值对应的std.core.string。
     * d = new Double(0.1)时，d.toFixed(0)返回'0'。
     * d = new Double(0.7)时，d.toFixed(0)返回'1'。
     * d = new Double(0.12345)时，d.toFixed(1)返回'0.1'。
     * d = new Double(0.12345)时，d.toFixed(3)返回'0.123'。
     * d = new Double(Double.POSITIVE_INFINITY)时，d.toFixed(3)返回'Infinity'。
     * d = new Double(Double.NaN)时，d.toFixed(3)返回'NaN'。
     * d = new Double(0.25)时，d.toFixed(200)抛出ArgumentOutOfRangeError。
     *
     * @param { double } d - 小数位数（取整数部分），取值范围必须为[0, 100]。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixedImpl(d: double): string;

    /**
     * toFixed(double)以定点表示法返回底层double值对应的std.core.string。
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixed(): string;

    /**
     * toFixed(double)以定点表示法返回底层double值对应的std.core.string。
     *
     * @param { double } [d]
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixed(d?: double): string;

    /**
     * 将位表示转换为对应的IEEE-754浮点表示。
     *
     * @param { long } bits - 待转换的位表示。
     * @returns { double } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastFromLong(bits: long): double;

    /**
     * 将IEEE-754浮点表示转换为对应的位表示。
     *
     * @param { double } val - 待转换的值。
     * @returns { long } 位表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastToLong(val: double): long;
}
