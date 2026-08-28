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
 * 表示装箱后的int值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Int extends Integral implements Comparable<Int> {

  /**
   * 构造初始值为0的新Int实例。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor();

  /**
   * 使用指定的初始值构造新的Int实例。
   *
   * @param { int } value - 初始值。
   *     <br>取值约束：应为整数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(value: int);

  /**
   * 将当前实例的值转换为int。
   *
   * @returns { int } 该实例表示的int值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toInt(): int;

  /**
   * 直接返回基本类型的int值。
   *
   * @param { int } value - 待返回的int值。
   *     <br>取值约束：应为整数。
   * @returns { int } 与传入值相同的int值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toInt(value: int): int;

  /**
   * 将当前对象与指定对象进行相等性比较。
   *
   * @param { Any } other - 用于比较的对象。
   * @returns { boolean } 如果指定对象与当前对象相等则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  equals(other: Any): boolean;

  /**
   * 将指定的int值转换为字符串表示。
   *
   * @param { int } v - 待转换的int值。
   *     <br>取值约束：应为整数。
   * @returns { string } 该int值的字符串表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toString(v: int): string;

  /**
   * 将当前Int对象的值转换为字符串表示。
   *
   * @returns { string } 该Int对象值的字符串表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toString(): string;

  /**
   * 该类型作为整型时可表示的最小值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MIN_VALUE: int = -2147483648;

  /**
   * 该类型作为整型时可表示的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MAX_VALUE: int = 2147483647;

  /**
   * 该类型占用的位数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly BIT_SIZE: byte = 32;

  /**
   * 该类型占用的字节数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly BYTE_SIZE: byte = 4;

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
   * 返回当前实例的值。
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
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { byte } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: int): byte;

  /**
   * 以short值的形式返回该基本类型值。
   *
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { short } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: int): short;

  /**
   * 以long值的形式返回该基本类型值。
   *
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { long } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: int): long;

  /**
   * 以float值的形式返回该基本类型值。
   *
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { float } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: int): float;

  /**
   * 以double值的形式返回该基本类型值。
   *
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { double } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: int): double;

  /**
   * 以char值的形式返回该基本类型值。
   *
   * @param { int } value - 待转换的值。
   *     <br>取值约束：应为整数。
   * @returns { char } 转换后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: int): char;

  /**
   * 将当前实例与另一个Int对象进行比较。当前实例小于
   * 传入对象时结果小于0，相等时为0，否则
   * 大于0。
   *
   * @param { Int } other - 用于比较的Int对象。
   * @returns { int } 比较结果，取值为-1、0或1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Int): int;

  /**
   * 使用指定基数将当前对象转换为字符串。
   *
   * @param { int } radix - 使用的基数。
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
   * @param { double } radix - 使用的基数。
   * @returns { string } 转换结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: double): string;

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
   * 与传入实例做整型加法运算。
   *
   * @param { Int } other - 加法运算的右操作数。
   * @returns { Int } 加法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public add(other: Int): Int;

  /**
   * 与传入实例做整型减法运算。
   *
   * @param { Int } other - 减法运算的右操作数。
   * @returns { Int } 减法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public sub(other: Int): Int;

  /**
   * 与传入实例做整型乘法运算。
   *
   * @param { Int } other - 乘法运算的右操作数。
   * @returns { Int } 乘法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public mul(other: Int): Int;

  /**
   * 与传入实例做整型除法运算。
   *
   * @param { Int } other - 除法运算的右操作数。
   * @returns { Int } 除法运算的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public div(other: Int): Int;

  /**
   * 判断当前实例的值是否小于传入实例的值。
   *
   * @param { Int } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值小于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessThan(other: Int): boolean;

  /**
   * 判断当前实例的值是否小于或等于传入实例的值。
   *
   * @param { Int } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值小于或等于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessEqualThan(other: Int): boolean;

  /**
   * 判断当前实例的值是否大于传入实例的值。
   *
   * @param { Int } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值大于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterThan(other: Int): boolean;

  /**
   * 判断当前实例的值是否大于或等于传入实例的值。
   *
   * @param { Int } other - 比较运算的右操作数。
   * @returns { boolean } 如果当前值大于或等于传入值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterEqualThan(other: Int): boolean;

  /**
   * 按指定基数从字符串解析出整数。
   *
   * @param { string } s - 待转换的字符串。
   * @param { int } r - 转换使用的基数，取值范围为2~36。
   *     <br>取值约束：应为整数。
   * @returns { int } 解析结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static parseInt(s: string, r: int): int;
}
