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
 * 表示装箱后的float值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float extends Floating implements Comparable<Float> {
    /**
     * 构造初始值为0的新Float实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 使用指定的初始值构造新的Float实例。
     *
     * @param { float } value - 初始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: float);

    /**
     * 使用指定的初始值（double类型字面量）构造新的Float实例。
     *
     * @param { double } value - 初始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: double);

    /**
     * 该类型作为float时可表示的最小值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MIN_VALUE: float = 1.4e-45f;

    /**
     * 该类型作为float时可表示的最大值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_VALUE: float = 3.40282346638528860e+38f;

    /**
     * 可用float精确表示而不丢失精度的最大整数值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_SAFE_INTEGER: float = 16777215;

    /**
     * 该类型占用的位数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BIT_SIZE: byte = 32;

    /**
     * 该类型占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BYTE_SIZE: byte = 4;

    /**
     * 表示IEEE-754规范中的NaN值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static NaN: float = Double.toFloat(0.0 / 0.0);

    /**
     * 表示IEEE-754规范中的+Infinity值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static POSITIVE_INFINITY: float = Double.toFloat(1.0 / 0.0);

    /**
     * 表示IEEE-754规范中的-Infinity值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static NEGATIVE_INFINITY: float = Double.toFloat(-1.0 / 0.0);

    /**
     * 该浮点类型中有效精度位的数量。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static PRECISION: byte = 24;

    /**
     * 两个float值之间可能的最小差值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static DELTA: float = Float.bitCastFromInt(0x34000000);

    /**
     * 两个float值之间可能的最小差值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static EPSILON: float = Float.DELTA;

    /**
     * 返回当前实例的值。
     *
     * @returns { byte } byte类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toByte(): byte;

    /**
     * 返回当前实例的值。
     *
     * @returns { short } short类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toShort(): short;

    /**
     * 返回当前实例的值。
     *
     * @returns { int } int类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

    /**
     * 返回当前实例的值。
     *
     * @returns { long } long类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLong(): long;

    /**
     * 返回当前实例的值。
     *
     * @returns { float } float类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFloat(): float;

    /**
     * 返回当前实例的值。
     *
     * @returns { double } double类型的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toDouble(): double;

    /**
     * 以byte值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { byte } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: float): byte;

    /**
     * 以short值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { short } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: float): short;

    /**
     * 以int值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { int } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: float): int;

    /**
     * 以long值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { long } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: float): long;

    /**
     * 以float值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { float } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: float): float;

    /**
     * 以double值的形式返回该基本类型值。
     *
     * @param { float } value - 待转换的值。
     * @returns { double } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toDouble(value: float): double;

    /**
     * 将当前实例与另一个Float对象进行比较。当前实例小于
     * 当前实例小于传入对象时结果小于0，相等时为0，
     * 否则大于0。
     *
     * @param { Float } other - 用于比较的Float对象。
     * @returns { int } 比较结果，取值为-1、0或1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Float): int;

    /**
     * 按基数r返回float值的字符串表示。
     *
     * @param { float } f - float值。
     * @param { int } r - 使用的基数。
     *     <br>取值约束：应为整数。
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(f: float, r: int): string;

    /**
     * 以10为基数返回float值的字符串表示。
     *
     * @param { float } f - float值。
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(f: float): string;

    /**
     * 使用指定基数将当前对象转换为字符串。
     *
     * @param { int } r - 使用的基数。
     *     <br>取值约束：应为整数。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(r: int): string;

    /**
     * 将当前对象转换为字符串。
     *
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(): string;

    /**
     * 比较两个float值的差异是否不超过DELTA。
     *
     * @param { float } lhs - 参与比较的左侧float值。
     * @param { float } rhs - 参与比较的右侧float值。
     * @returns { boolean } 如果在DELTA精度范围内相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static compare(lhs: float, rhs: float): boolean;

    /**
     * 判断当前实例与传入对象是否相等。
     *
     * @param { Any } other - 待比较的对象。
     * @returns { boolean } 如果相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * 检查float值是否为NaN。
     *
     * @param { float } v - 待检测的float值。
     * @returns { boolean } 如果参数为NaN则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isNaN(v: float): boolean;

    /**
     * 检查底层的float值是否为NaN。
     *
     * @returns { boolean } 如果底层的float值为NaN则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isNaN(): boolean;

    /**
     * 检查float值是否为有限浮点数。
     *
     * @param { float } v - 待检测的float值。
     * @returns { boolean } 如果参数为有限值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isFinite(v: float): boolean;

    /**
     * 检查底层的float值是否为有限浮点数。
     *
     * @returns { boolean } 如果底层的float值为有限值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isFinite(): boolean;

    /**
     * 检查float值是否接近整数。
     *
     * @param { float } v - 待检测的float值。
     * @returns { boolean } 如果参数接近整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isInteger(v: float): boolean;

    /**
     * 检查底层的float值是否接近整数。
     *
     * @returns { boolean } 如果底层的float值接近整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isInteger(): boolean;

    /**
     * 检查float值是否为安全整数。
     *
     * @param { float } v - 待检测的float值。
     * @returns { boolean } 如果参数为安全整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isSafeInteger(v: float): boolean;

    /**
     * 检查底层的float值是否为安全整数。
     *
     * @returns { boolean } 如果底层的float值为安全整数则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isSafeInteger(): boolean;

    /**
     * 与传入实例做浮点加法运算。
     *
     * @param { Float } other - 加法运算的右操作数。
     * @returns { Float } 加法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Float): Float;

    /**
     * 与传入实例做浮点减法运算。
     *
     * @param { Float } other - 减法运算的右操作数。
     * @returns { Float } 减法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Float): Float;

    /**
     * 与传入实例做浮点乘法运算。
     *
     * @param { Float } other - 乘法运算的右操作数。
     * @returns { Float } 乘法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Float): Float;

    /**
     * 与传入实例做浮点除法运算。
     *
     * @param { Float } other - 除法运算的右操作数。
     * @returns { Float } 除法运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Float): Float;

    /**
     * 判断当前实例的值是否小于传入实例的值。
     *
     * @param { Float } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值小于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Float): boolean;

    /**
     * 判断当前实例的值是否小于或等于传入实例的值。
     *
     * @param { Float } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值小于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Float): boolean;

    /**
     * 判断当前实例的值是否大于传入实例的值。
     *
     * @param { Float } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值大于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Float): boolean;

    /**
     * 判断当前实例的值是否大于或等于传入实例的值。
     *
     * @param { Float } other - 比较运算的右操作数。
     * @returns { boolean } 如果当前值大于或等于传入值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Float): boolean;

    /**
     * 将位表示转换为对应的IEEE-754浮点表示。
     *
     * @param { int } bits - 待转换的位表示。
     *     <br>取值约束：应为整数。
     * @returns { float } 转换后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastFromInt(bits: int): float;

    /**
     * 将IEEE-754浮点表示转换为对应的位表示。
     *
     * @param { float } val - 待转换的值。
     * @returns { int } 位表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastToInt(val: float): int;
}
