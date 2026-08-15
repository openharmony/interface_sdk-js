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
 * 表示装箱后的char值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class Char extends Object implements Comparable<Char> {

  /**
   * toString()将Char转换为仅包含底层char值这一个元素的String对象。
   *
   * @returns { string } 该Char的字符串表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toString(): string;

  /**
   * 以字符串值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { string } 该char值的字符串表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toString(value: char): string;

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
   * isDecDigit()检查该char值是否表示十进制数字。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值是十进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static isDecDigit(value: char): boolean;

  /**
   * isDecDigit()检查底层的char值是否表示十进制数字。
   *
   * @returns { boolean }  如果底层的char值是十进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  isDecDigit(): boolean;

  /**
   * isWhiteSpace(char)检查该char值是否为空白字符。
   *
   * @param { char } value - 待检测的char值。
   * @returns { boolean } 如果该char值是空白字符则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static isWhiteSpace(value: char): boolean;

  /**
   * isWhiteSpace()检查底层的char值是否为空白字符。
   *
   * @returns { boolean } 如果底层的char值是空白字符则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  isWhiteSpace(): boolean;

  /**
   * constructor()创建默认的Char对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor();

  /**
   * constructor(char)根据指定的基本类型char值创建Char对象。
   *
   * @param { char } value - 用于创建Char的基本类型char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor(value: char);

  /**
   * equals(Object)按底层的基本类型char值比较两个Char。
   * 如果参数不是Char的实例，则返回false。
   *
   * @param { Any } other - 待比较对象的引用。
   * @returns { boolean } 如果两个Char相等则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public equals(other: Any): boolean;

  /**
   * compare(Char, Char)按底层的char值比较两个Char。
   *
   * @param { Char } lhs - 参与比较的第一个Char。
   * @param { Char } rhs - 参与比较的第二个Char。
   * @returns { boolean } 如果两个Char相等则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compare(lhs: Char, rhs: Char): boolean;

  /**
   * 将当前实例与另一个Char对象进行比较。当前实例小于
   * 当前实例小于传入对象时结果小于0，相等时为0，
   * 否则大于0。
   *
   * @param { Char } other - 用于比较的Char对象。
   * @returns { int } 当前实例小于传入实例时返回负number值，相等时返回0，大于时返回正值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Char): int;

  /**
   * char类型占用的位数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public readonly CHAR_BIT_SIZE: int = 16;

  /**
   * 码点的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public readonly MAX_CODE_POINT: int = 0x10FFFF;

  /**
   * 高位代理项的最小值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly HIGH_SURROGATE_MIN: char = c'\uD800';

  /**
   * 高位代理项的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly HIGH_SURROGATE_MAX: char = c'\uDBFF';

  /**
   * 低位代理项的最小值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOW_SURROGATE_MIN: char = c'\uDC00';

  /**
   * 低位代理项的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOW_SURROGATE_MAX: char = c'\uDFFF';

  /**
   * MIN_VALUE为char类型的最小值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MIN_VALUE: char = c'\u0000';

  /**
   * MAX_VALUE为char类型的最大值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MAX_VALUE: char = c'\uFFFF';

  /**
   * 返回当前实例的值。
   *
   * @returns { byte } 该Char实例的byte值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toByte(): byte;

  /**
   * 返回当前实例的值。
   *
   * @returns { short } 该Char实例的short值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toShort(): short;

  /**
   * 返回当前实例的值。
   *
   * @returns { int } 该Char实例的int值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toInt(): int;

  /**
   * 返回当前实例的值。
   *
   * @returns { long } 该Char实例的long值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLong(): long;

  /**
   * 返回当前实例的值。
   *
   * @returns { float } 该Char实例的float值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toFloat(): float;

  /**
   * 返回当前实例的值。
   *
   * @returns { double } 该Char实例的double值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toDouble(): double;

  /**
   * 返回当前实例的值。
   *
   * @returns { char } 该Char实例的char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toChar(): char;

  /**
   * 以byte值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { byte } 该char的byte值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: char): byte;

  /**
   * 以short值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { short } 该char的short值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: char): short;

  /**
   * 以int值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { int } 该char的int值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toInt(value: char): int;

  /**
   * 以long值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { long } 该char的long值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: char): long;

  /**
   * 以float值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { float } 该char的float值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: char): float;

  /**
   * 以double值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { double } 该char的double值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: char): double;

  /**
   * 以char值的形式返回该基本类型值。
   *
   * @param { char } value - 待转换的值。
   * @returns { char } char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: char): char;

  /**
   * isInBasicMultilingualPlane(char)检查该char值是否位于基本多文种
   * 平面。详见UTF-16相关说明。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值位于基本多文种平面则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isInBasicMultilingualPlane(value: char): boolean;

  /**
   * isInBasicMultilingualPlane(int)检查该码点是否位于
   * 基本多文种平面。详见UTF-16相关说明。
   *
   * @param { int } value - 待检查的码点。
   *     <br>取值约束：应为整数。
   * @returns { boolean } 如果该码点位于基本多文种平面则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isInBasicMultilingualPlane(value: int): boolean;

  /**
   * isInBasicMultilingualPlane()检查底层的char值是否位于基本
   * 多文种平面。详见UTF-16相关说明。
   *
   * @returns { boolean } 如果底层的char值位于基本多文种平面则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isInBasicMultilingualPlane(): boolean;

  /**
   * isValidCodePoint()检查该码点的编码是否正确。
   * 详见UTF-16相关说明。
   *
   * @param { int } codePoint - 待检查的码点。
   *     <br>取值约束：应为整数。
   * @returns { boolean } 如果该码点编码正确则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isValidCodePoint(codePoint: int): boolean;

  /**
   * codeUnitsToEncode(int)统计编码该UTF-16码点所需
   * 码元的数量。详见UTF-16相关说明。
   *
   * @param { int } value - 待检查的UTF-16码点。
   *     <br>取值约束：应为整数。
   * @returns { int } 编码该码点所需UTF-16码元的number。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static codeUnitsToEncode(value: int): int;

  /**
   * isHighSurrogate(char)检查该char值是否为高位代理项。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值是高位代理项则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isHighSurrogate(value: char): boolean;

  /**
   * isLowSurrogate(char)检查该char值是否为低位代理项。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值是低位代理项则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLowSurrogate(value: char): boolean;

  /**
   * getHighSurrogate(int)将码点拆分为两个码元，并返回其中的
   * 第一个。返回结果可能不合法，因此需要进行校验。
   *
   * @param { int } value - 编码后的码点。
   *     <br>取值约束：应为整数。
   * @returns { char } 高位代理码元。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static getHighSurrogate(value: int): char;

  /**
   * getLowSurrogate(int)将码点拆分为两个码元，并返回其中的
   * 第二个。返回结果可能不合法，因此需要进行校验。
   *
   * @param { int } value - 编码后的码点。
   *     <br>取值约束：应为整数。
   * @returns { char } 低位代理码元。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static getLowSurrogate(value: int): char;

  /**
   * isPartOfSurrogatePair(char)检查该char值是低位还是高位代理项。
   *
   * @param { char } value - 待检测的char值。
   * @returns { boolean } 如果该char值是代理对的一部分则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isPartOfSurrogatePair(value: char): boolean;

  /**
   * isPartOfSurrogatePair()检查底层的char值是低位还是高位代理项。
   *
   * @returns { boolean } 如果底层的char值是代理对的一部分则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isPartOfSurrogatePair(): boolean;

  /**
   * charsToCodePoint(char, char)将两个char合并为一个码点。
   *
   * @param { char } highValue - 高位代理项的值。
   * @param { char } lowValue - 低位代理项的值。
   * @returns { int } 合并得到的UTF-16码点。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static charsToCodePoint(highValue: char, lowValue: char): int;

  /**
   * isBinDigit(char)检查该char值是否表示二进制数字。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值是二进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isBinDigit(value: char): boolean;

  /**
   * isBinDigit()检查底层的char值是否表示二进制数字。
   *
   * @returns { boolean } 如果底层的char值是二进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isBinDigit(): boolean;

  /**
   * isHexDigit(char)检查该char值是否表示十六进制数字。
   *
   * @param { char } value - 待检查的char值。
   * @returns { boolean } 如果该char值是十六进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isHexDigit(value: char): boolean;

  /**
   * isHexDigit()检查底层的char值是否表示十六进制数字。
   *
   * @returns { boolean } 如果底层的char值是十六进制数字则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isHexDigit(): boolean;

  /**
   * isLetter(char)检查该char值是否为字母。
   *
   * @param { char } value - 待检测的char值。
   * @returns { boolean } 如果该char值是字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLetter(value: char): boolean;

  /**
   * isLetter()检查底层的char值是否为字母。
   *
   * @returns { boolean } 如果底层的char值是字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLetter(): boolean;

  /**
   * isUpperCase(char)检查该char值是否为大写字母。
   *
   * @param { char } value - 待检测的char值。
   * @returns { boolean } 如果该char值是大写字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isUpperCase(value: char): boolean;

  /**
   * isUpperCase()检查底层的char值是否为大写字母。
   *
   * @returns { boolean } 如果底层的char值是大写字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isUpperCase(): boolean;

  /**
   * isLowerCase(char)检查该char值是否为小写字母。
   *
   * @param { char } value - 待检测的char值。
   * @returns { boolean } 如果该char值是小写字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLowerCase(value: char): boolean;

  /**
   * isLowerCase()检查底层的char值是否为小写字母。
   *
   * @returns { boolean } 如果底层的char值是小写字母则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLowerCase(): boolean;

  /**
   * toUpperCase(char)在该char值为小写时将其转换为大写，
   * 否则原样返回该char值。
   *
   * @param { char } value - 待转换为大写的char值。
   * @returns { char } 由传入char值转换得到的大写char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toUpperCase(value: char): char;

  /**
   * toUpperCase()在底层char值为小写时将其转换为大写，
   * 否则原样返回该char值。
   *
   * @returns { Char } 由底层char值转换得到的大写char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toUpperCase(): Char;

  /**
   * toLowerCase(char)在该char值为大写时将其转换为小写，
   * 否则原样返回该char值。
   *
   * @param { char } value - 待转换为小写的char值。
   * @returns { char } 由传入char值转换得到的小写char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLowerCase(value: char): char;

  /**
   * toLowerCase()在底层char值为大写时将其转换为小写，
   * 否则原样返回该char值。
   *
   * @returns { Char } 由底层char值转换得到的小写char值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLowerCase(): Char;
}
