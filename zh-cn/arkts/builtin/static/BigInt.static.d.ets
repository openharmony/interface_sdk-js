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
 * `bigint`是类型`BigInt`的别名。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type bigint = BigInt;
/**
 * BigInt.toLocaleString方法的选项。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface BigIntToLocaleStringOptions {
    /**
     * 指定大数值的紧凑显示格式。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    compactDisplay?: string;

    /**
     * 货币格式化所使用的货币。
     * 当style为"currency"时必填，使用ISO 4217货币代码（例如"USD"、"EUR"、"CNY"）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    currency?: string;

    /**
     * 指定货币在格式化结果字符串中的显示方式。
     * 取值："code"（ISO货币代码，如"USD"）、"symbol"（货币符号，如"$"）、
     * "narrowSymbol"（窄符号，如"$100"）或"name"（全称，如"US dollar"）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    currencyDisplay?: string;

    /**
     * 所使用的区域匹配算法。
     * 取值："lookup"（BCP 47查找算法）或"best fit"（Intl最佳匹配算法）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    localeMatcher?: string;

    /**
     * 显示的小数位数上限。
     * 取值约束：必须为0到100之间的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    maximumFractionDigits?: double;

    /**
     * 显示的有效数字位数上限。
     * 取值约束：必须为0到100之间的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    maximumSignificantDigits?: double;

    /**
     * 显示的小数位数下限。
     * 取值约束：必须为1到21之间的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumFractionDigits?: double;

    /**
     * 显示的整数位数下限（小数点前）。
     * 取值约束：必须为1到21之间的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumIntegerDigits?: double;

    /**
     * 显示的有效数字位数下限。
     * 取值约束：必须为1到21之间的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumSignificantDigits?: double;

    /**
     * 显示数值时使用的计数法格式。
     * 取值："standard"（默认，如"1000"）、"scientific"（如"1e3"）、
     * "engineering"（如"1E3"）或"compact"（如1000显示为"1K"）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    notation?: string;

    /**
     * 数值格式化所使用的记数系统。
     * 该选项当前尚未实现，不生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    numberingSystem?: string;

    /**
     * 所使用的格式化样式。
     * 取值："decimal"（默认，用于普通数值）或"percent"（用于百分比）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    style?: string;

    /**
     * 单位格式化所使用的单位。
     * 当style为"unit"时必填，使用UCUM单位代码（例如"meter"、"second"、"kilogram"）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unit?: string;

    /**
     * 指定单位在格式化结果字符串中的显示方式。
     * 取值："short"（如"m"）、"long"（如"meters"）或"narrow"（如"m"）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unitDisplay?: string;

    /**
     * 是否使用分组分隔符（例如"1,000"中的千位分隔符","）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    useGrouping?: boolean;
}

/**
 * 与JS BigInt API兼容的类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigInt {
    /**
     * 创建值为0的新`BigInt`实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 根据byte值创建新的`BigInt`实例。
     *
     * @param { byte } d - 待转换的byte值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: byte);

    /**
     * 根据short值创建新的`BigInt`实例。
     *
     * @param { short } d - 待转换的short值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: short);

    /**
     * 根据int值创建新的`BigInt`实例。
     *
     * @param { int } d - 待转换的int值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: int);

    /**
     * 根据long值创建新的`BigInt`实例。
     *
     * @param { long } d - 待转换的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: long);

    /**
     * 根据double值创建新的`BigInt`实例。
     *
     * @param { double } d - 待转换为BigInt的double值，必须为整数。
     * @throws { RangeError } 当d不是整数或不是安全整数时，抛出RangeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: double);

    /**
     * 根据字符串值创建新的`BigInt`实例。
     *
     * @param { string } d - 待转换为BigInt的字符串值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: string);

    /**
     * 根据boolean值创建新的`BigInt`实例。
     *
     * @param { boolean } d - boolean值，true对应1，false对应0。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: boolean);

    /**
     * 通过复制另一个BigInt创建新的`BigInt`实例。
     *
     * @param { BigInt } d - 待复制的BigInt对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: BigInt);

    /**
     * 根据内部组成部分创建新的`BigInt`实例。
     *
     * @param { FixedArray<int> } v - 数字位数组。
     * @param { int } sign - 数值的符号。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(v: FixedArray<int>, sign: int);

    /**
     * 根据无符号的long值创建BigInt。
     *
     * @param { long } val - 无符号的long值。
     * @returns { BigInt } 新的BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromULong(val: long): BigInt;

    /**
     * 判断当前BigInt是否与另一个BigInt相等。
     *
     * @param { BigInt } to - 用于比较的BigInt。
     * @returns { boolean } 如果相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(to: BigInt): boolean;

    /**
     * 判断当前BigInt是否与另一个值相等。
     *
     * @param { Any } other - 用于比较的值。
     * @returns { boolean } 如果该值是BigInt且与当前BigInt相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    equals(other: Any): boolean;

    /**
     * 使用当前或指定的区域设置将number值转换为字符串。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { BigIntToLocaleStringOptions } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置和选项格式化后表示该BigInt的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;

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
     * 以10为基数将BigInt转换为字符串。
     *
     * @returns { string } 以10为基数的BigInt字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回该BigInt对象的字符串表示。
     *
     * @param { int } radix - 用于表示数值的基数，取值为2到36之间的
     *     整数。
     *     <br>取值约束：应为整数。
     * @returns { string } 表示指定BigInt对象的字符串。
     * @throws { RangeError } 当radix不在2到36之间时，抛出RangeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: int): string;

    /**
     * 将BigInt按指定位数截断为有符号整数。
     *
     * @param { long } bits - 有符号整数表示所使用的位数。
     * @param { BigInt } num - 待截断的BigInt值。
     * @returns { BigInt } 按指定位数截断为有符号整数后的BigInt值。
     * @throws { RangeError } 当bits小于0或大于Double.MAX_SAFE_INTEGER时，抛出RangeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static asIntN(bits: long, num: BigInt): BigInt;

    /**
     * 将BigInt按指定位数截断为无符号整数。
     *
     * @param { long } bits - 无符号整数表示所使用的位数。
     * @param { BigInt } num - 待截断的BigInt值。
     * @returns { BigInt } 按指定位数截断为无符号整数后的BigInt值。
     * @throws { RangeError } 当bits小于0或大于Double.MAX_SAFE_INTEGER时，抛出RangeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static asUintN(bits: long, num: BigInt): BigInt;

    /**
     * 返回该BigInt是否为负数。
     *
     * @returns { boolean } 如果为负数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negative(): boolean;

    /**
     * 返回该BigInt是否为正数。
     *
     * @returns { boolean } 如果为正数（含0）则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public positive(): boolean;

    /**
     * 将另一个BigInt与当前BigInt相加。
     *
     * @param { BigInt } other - 相加的值。
     * @returns { BigInt } 加法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorAdd(other: BigInt): BigInt;

    /**
     * 从当前BigInt中减去另一个BigInt。
     *
     * @param { BigInt } other - 相减的值。
     * @returns { BigInt } 减法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorSubtract(other: BigInt): BigInt;

    /**
     * 将当前BigInt与另一个BigInt相乘。
     *
     * @param { BigInt } other - 乘数。
     * @returns { BigInt } 乘法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorMultiply(other: BigInt): BigInt;

    /**
     * 将当前BigInt除以另一个BigInt。
     *
     * @param { BigInt } other - 除数。
     * @returns { BigInt } 除法运算的商。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorDivide(other: BigInt): BigInt;

    /**
     * 计算当前BigInt除以另一个BigInt的余数。
     *
     * @param { BigInt } other - 除数。
     * @returns { BigInt } 余数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorModule(other: BigInt): BigInt;

    /**
     * 与另一个BigInt执行按位或运算。
     *
     * @param { BigInt } other - 另一个BigInt。
     * @returns { BigInt } 按位或运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseOr(other: BigInt): BigInt;

    /**
     * 与另一个BigInt执行按位与运算。
     *
     * @param { BigInt } other - 另一个BigInt。
     * @returns { BigInt } 按位与运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseAnd(other: BigInt): BigInt;

    /**
     * 与另一个BigInt执行按位异或运算。
     *
     * @param { BigInt } other - 另一个BigInt。
     * @returns { BigInt } 按位异或运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseXor(other: BigInt): BigInt;

    /**
     * 判断当前BigInt是否大于另一个BigInt。
     *
     * @param { BigInt } other - 用于比较的值。
     * @returns { boolean } 如果当前值大于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorGreaterThan(other: BigInt): boolean;

    /**
     * 判断当前BigInt是否小于另一个BigInt。
     *
     * @param { BigInt } other - 用于比较的值。
     * @returns { boolean } 如果当前值小于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLessThan(other: BigInt): boolean;

    /**
     * 判断当前BigInt是否大于或等于另一个BigInt。
     *
     * @param { BigInt } other - 用于比较的值。
     * @returns { boolean } 如果当前值大于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorGreaterThanEqual(other: BigInt): boolean;

    /**
     * 判断当前BigInt是否小于或等于另一个BigInt。
     *
     * @param { BigInt } other - 用于比较的值。
     * @returns { boolean } 如果当前值小于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLessThanEqual(other: BigInt): boolean;

    /**
     * 将该BigInt左移指定的位数。
     *
     * @param { BigInt } other - 移位的位数。
     * @returns { BigInt } 移位后的BigInt。
     * @throws { Error } 当other为负数或大于BigInt.baseSys - 1时，抛出Error。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLeftShift(other: BigInt): BigInt;

    /**
     * 将该BigInt右移指定的位数。
     *
     * @param { BigInt } other - 移位的位数。
     * @returns { BigInt } 移位后的BigInt。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorRightShift(other: BigInt): BigInt;

    /**
     * 将该BigInt的值加1。
     *
     * @returns { BigInt } 自增后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorIncrement(): BigInt;

    /**
     * 将该BigInt的值减1。
     *
     * @returns { BigInt } 自减后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorDecrement(): BigInt;

    /**
     * 对该BigInt执行按位取反运算。
     *
     * @returns { BigInt } 按位取反运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseNot(): BigInt;

    /**
     * 返回base的exponent次幂。
     *
     * @param { BigInt } exponent - 指数值。
     * @returns { BigInt } base的exponent次幂的结果。
     * @throws { RangeError } 当exponent为负数时，抛出RangeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public pow(exponent: BigInt): BigInt;

    /**
     * 返回该BigInt取负后的值。
     *
     * @returns { BigInt } 取负后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negate(): BigInt;

    /**
     * 以double形式返回该对象的值。
     *
     * @returns { double } double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public doubleValue(): double;

    /**
     * 以long形式返回该对象的值。
     *
     * @returns { long } long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getLong(): long;

    /**
     * 返回截断为无符号long后的当前值。
     *
     * @returns { long } 无符号的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getULong(): long;

    /**
     * 根据现有的BigInt数值创建新的BigInt实例。
     *
     * @param { BigInt } value - BigInt值。
     * @returns { BigInt } 根据现有的BigInt数值创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: BigInt): BigInt;

    /**
     * 根据现有的Long数值创建新的BigInt实例。
     *
     * @param { Long } value - BigInt值。
     * @returns { BigInt } 根据现有的Long数值创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: long): BigInt;

    /**
     * 根据number实例创建新的BigInt实例。
     *
     * @param { double } value - number值。
     * @returns { BigInt } 根据number实例创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: double): BigInt;

    /**
     * 根据字符串创建新的BigInt实例。
     *
     * @param { string } value - 字符串值。
     * @returns { BigInt } 根据字符串创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: string): BigInt;

    /**
     * 根据boolean值创建新的BigInt实例。
     *
     * @param { boolean } value - boolean值。
     * @returns { BigInt } 根据boolean值创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: boolean): BigInt;

    /**
     * 根据bigint/double/string/boolean联合类型创建新的BigInt实例。
     *
     * @param { bigint | double | string | boolean } value - 源值。
     * @returns { BigInt } 根据bigint/double/string/boolean联合类型创建的新BigInt实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: bigint | double | string | boolean): BigInt;
}
