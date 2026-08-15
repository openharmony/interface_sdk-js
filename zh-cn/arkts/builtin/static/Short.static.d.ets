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
 * 表示装箱后的short值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Short extends Integral implements Comparable<Short> {
  /**
   * 构造初始值为0的新Short实例。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor();

  /**
   * 使用指定的初始值构造新的Short实例。
   *
   * @param { short } value - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor(value: short);

  /**
   * 该类型作为short时可表示的最小值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static MIN_VALUE: short = -32768;

  /**
   * 该类型作为short时可表示的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static MAX_VALUE: short = 32767;

  /**
   * 该类型占用的位数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static BIT_SIZE: byte = 16;

  /**
   * 该类型占用的字节数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static BYTE_SIZE: byte = 2;

  /**
   * 以byte形式返回当前实例的值。
   *
   * @returns { byte } byte类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toByte(): byte;

  /**
   * 以short形式返回当前实例的值。
   *
   * @returns { short } short类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toShort(): short;

  /**
   * 以int形式返回当前实例的值。
   *
   * @returns { int } int类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toInt(): int;

  /**
   * 以long形式返回当前实例的值。
   *
   * @returns { long } long类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLong(): long;

  /**
   * 以float形式返回当前实例的值。
   *
   * @returns { float } float类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toFloat(): float;

  /**
   * 以double形式返回当前实例的值。
   *
   * @returns { double } double类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toDouble(): double;

  /**
   * 以char形式返回当前实例的值。
   *
   * @returns { char } char类型的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toChar(): char;

  /**
   * 以byte值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { byte } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: short): byte;

  /**
   * 以int值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { int } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toInt(value: short): int;

  /**
   * 以long值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { long } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: short): long;

  /**
   * 以float值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { float } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: short): float;

  /**
   * 以double值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { double } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: short): double;

  /**
   * 以char值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { char } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: short): char;

  /**
   * 以short值的形式返回该基本类型值。
   *
   * @param { short } value - 待转换的值。
   * @returns { short } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: short): short;

  /**
   * 将当前实例与另一个Short对象进行比较。当前实例小于传入对象时
   * 结果小于0，相等时为0，否则大于0。
   *
   * @param { Short } other - 用于比较的Short对象。
   * @returns { int } 比较结果：当前实例小于传入对象时为-1，相等时为0，
   *     大于时为1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Short): int;

  /**
   * 将基本类型值转换为字符串。
   *
   * @param { short } v - 待转换的值。
   * @returns { string } 转换结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toString(v: short): string;

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
   * 使用指定基数将当前对象转换为字符串。
   *
   * @param { int } radix - 转换使用的基数。
   *     <br>取值约束：应为整数。
   * @returns { string } 转换结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: int): string;

  /**
   * 使用指定基数将当前对象转换为字符串。
   *
   * @param { double } radix - 转换使用的基数。
   * @returns { string } 转换结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: double): string;

  /**
   * 判断当前实例与按Short处理的传入对象是否相等。
   *
   * @param { Any } other - 待比较的对象。
   * @returns { boolean } 如果传入对象与当前实例的值相同则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public equals(other: Any): boolean;

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
   * 将当前实例与传入实例做整型加法运算，并以新实例返回结果。
   *
   * @param { Short } other - 加法运算的右操作数。
   * @returns { Short } 加法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public add(other: Short): Short;

  /**
   * 将当前实例与传入实例做整型减法运算，并以新实例返回结果。
   *
   * @param { Short } other - 减法运算的右操作数。
   * @returns { Short } 减法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public sub(other: Short): Short;

  /**
   * 将当前实例与传入实例做整型乘法运算，并以新实例返回结果。
   *
   * @param { Short } other - 乘法运算的右操作数。
   * @returns { Short } 乘法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public mul(other: Short): Short;

  /**
   * 将当前实例与传入实例做整型除法运算，并以新实例返回结果。
   *
   * @param { Short } other - 除法运算的右操作数。
   * @returns { Short } 除法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public div(other: Short): Short;

  /**
   * 判断当前实例的值是否小于传入实例的值。
   *
   * @param { Short } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值小于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessThan(other: Short): boolean;

  /**
   * 判断当前实例的值是否小于或等于传入实例的值。
   *
   * @param { Short } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值小于或等于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessEqualThan(other: Short): boolean;

  /**
   * 判断当前实例的值是否大于传入实例的值。
   *
   * @param { Short } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值大于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterThan(other: Short): boolean;

  /**
   * 判断当前实例的值是否大于或等于传入实例的值。
   *
   * @param { Short } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值大于或等于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterEqualThan(other: Short): boolean;

  /**
   * 按指定基数从字符串解析出整数。
   *
   * @param { string } s - 待转换的字符串。
   * @param { int } r - 转换使用的基数，取值范围为[2, 36]，传入0时按10处理。
   *     <br>取值约束：应为整数。
   * @returns { short } 解析结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static parseInt(s: string, r: int): short;
}
