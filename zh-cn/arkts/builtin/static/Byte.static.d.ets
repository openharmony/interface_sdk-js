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
 * 表示装箱后的byte值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Byte extends Integral implements Comparable<Byte> {

    /**
     * 构造初始值为0的新Byte实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 使用指定的初始值构造新的Byte实例。
     *
     * @param { byte } value - 初始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: byte);

    /**
     * 该类型作为整型时可表示的最小值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MIN_VALUE: byte = -128;

    /**
     * 该类型作为整型时可表示的最大值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_VALUE: byte = 127;

    /**
     * 该类型占用的位数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BIT_SIZE: byte = 8;

    /**
     * 该类型占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BYTE_SIZE: byte = 1;

    /**
     * 返回当前实例的值。
     *
     * @returns { byte } byte值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toByte(): byte;

    /**
     * 返回当前实例的值。
     *
     * @returns { short } short值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toShort(): short;

    /**
     * 返回当前实例的值。
     *
     * @returns { int } int值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

    /**
     * 返回当前实例的值。
     *
     * @returns { long } long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLong(): long;

    /**
     * 返回当前实例的值。
     *
     * @returns { float } float值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFloat(): float;

    /**
     * 返回当前实例的值。
     *
     * @returns { double } double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toDouble(): double;

    /**
     * 返回当前实例的值。
     *
     * @returns { char } char值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toChar(): char;

    /**
     * 以short值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { short } short值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: byte): short;

    /**
     * 以int值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { int } int值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: byte): int;

    /**
     * 以long值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { long } long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: byte): long;

    /**
     * 以float值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { float } float值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: byte): float;

    /**
     * 以double值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { double } double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toDouble(value: byte): double;

    /**
     * 以char值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { char } char值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toChar(value: byte): char;

    /**
     * 以byte值的形式返回该基本类型值。
     *
     * @param { byte } value - 待转换的值。
     * @returns { byte } byte值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: byte): byte;

    /**
     * 将当前实例与另一个Byte对象进行比较。当前实例小于传入对象时结果小于0，
     * 相等时为0，否则大于0。
     *
     * @param { Byte } other - 用于比较的Byte对象。
     * @returns { int } 比较结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Byte): int;

    /**
     * 将当前对象转换为字符串。
     *
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { byte } v - 待转换的值。
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(v: byte): string;

    /**
     * 将当前对象转换为字符串。
     *
     * @param { int } radix - 转换使用的基数。
     *     <br>取值约束：应为整数。
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: int): string;

    /**
     * 将当前对象转换为字符串。
     *
     * @param { double } radix - 转换使用的基数。
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: double): string;

    /**
     * 判断当前实例与按Byte处理的传入对象是否相等。如果传入对象的类型
     * 与当前类型不一致，则返回false。
     *
     * @param { Any } other - 待比较的对象。
     * @returns { boolean } 如果相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
     * 方法转换为字符串。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { Intl.NumberFormatOptions } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 表示数组元素的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;

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
     * 将当前实例与传入实例做整型加法运算，并以新实例返回结果。
     *
     * @param { Byte } other - 加法运算的右操作数。
     * @returns { Byte } 加法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Byte): Byte;

    /**
     * 将当前实例与传入实例做整型减法运算，并以新实例返回结果。
     *
     * @param { Byte } other - 减法运算的右操作数。
     * @returns { Byte } 减法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Byte): Byte;

    /**
     * 将当前实例与传入实例做整型乘法运算，并以新实例返回结果。
     *
     * @param { Byte } other - 乘法运算的右操作数。
     * @returns { Byte } 乘法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Byte): Byte;

    /**
     * 将当前实例与传入实例做整型除法运算，并以新实例返回结果。
     *
     * @param { Byte } other - 除法运算的右操作数。
     * @returns { Byte } 除法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Byte): Byte;

    /**
     * 判断当前实例的值是否小于传入实例的值。
     *
     * @param { Byte } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前实例小于传入实例则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Byte): boolean;

    /**
     * 判断当前实例的值是否小于或等于传入实例的值。
     *
     * @param { Byte } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前实例小于或等于传入实例则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Byte): boolean;

    /**
     * 判断当前实例的值是否大于传入实例的值。
     *
     * @param { Byte } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前实例大于传入实例则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Byte): boolean;

    /**
     * 判断当前实例的值是否大于或等于传入实例的值。
     *
     * @param { Byte } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前实例大于或等于传入实例则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Byte): boolean;

    /**
     * 将字符串解析为byte值。
     *
     * @param { string } s - 待解析的字符串。
     * @param { int } r - 字符串使用的基数。
     *     <br>取值约束：应为整数。
     * @returns { byte } 解析得到的byte值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseInt(s: string, r: int): byte;
}
