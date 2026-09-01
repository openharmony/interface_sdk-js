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
 * Represents boxed int value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Int extends Integral implements Comparable<Int> {

  /**
   * Constructs a new Int instance with initial value zero
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor();

  /**
   * Constructs a new Int instance with provided initial value
   *
   * @param { int } value - the initial value
   *     <br>The value should be an integer.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(value: int);

  /**
   * Converts the value of this instance to an int
   *
   * @returns { int } the int value represented by this instance
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toInt(): int;

  /**
   * Returns the primitive int value directly
   *
   * @param { int } value - the int value to return
   *     <br>The value should be an integer.
   * @returns { int } the same int value that was passed in
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toInt(value: int): int;

  /**
   * Compares this object with the specified object for equality.
   *
   * @param { Any } other - the object to compare with
   * @returns { boolean } true if the specified object is equal to this object, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  equals(other: Any): boolean;

  /**
   * Converts the specified int value to its string representation.
   *
   * @param { int } v - the int value to be converted
   *     <br>The value should be an integer.
   * @returns { string } the string representation of the int value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toString(v: int): string;

  /**
   * Converts the value of this Int object to its string representation.
   *
   * @returns { string } the string representation of this Int object's value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toString(): string;

  /**
   * Minimal value that this type can have as an integral.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MIN_VALUE: int = -2147483648;

  /**
   * Maximal value that this type can have as an integral.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MAX_VALUE: int = 2147483647;

  /**
   * Size of this type in bits.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly BIT_SIZE: byte = 32;

  /**
   * Size of this type in bytes.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly BYTE_SIZE: byte = 4;

  /**
   * Returns value of this instance.
   *
   * @returns { byte } value as byte.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toByte(): byte;

  /**
   * Returns value of this instance.
   *
   * @returns { short } value as short.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toShort(): short;

  /**
   * Returns value of this instance.
   *
   * @returns { long } value as long.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLong(): long;

  /**
   * Returns value of this instance.
   *
   * @returns { float } value as float.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toFloat(): float;

  /**
   * Returns value of this instance.
   *
   * @returns { double } value as double.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toDouble(): double;

  /**
   * Returns value of this instance.
   *
   * @returns { char } value as char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toChar(): char;

  /**
   * Returns the primitive as byte value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { byte } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: int): byte;

  /**
   * Returns the primitive as short value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { short } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: int): short;

  /**
   * Returns the primitive as long value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { long } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: int): long;

  /**
   * Returns the primitive as float value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { float } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: int): float;

  /**
   * Returns the primitive as double value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { double } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: int): double;

  /**
   * Returns the primitive as char value.
   *
   * @param { int } value - value to cast.
   *     <br>The value should be an integer.
   * @returns { char } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: int): char;

  /**
   * Compares this instance to other Int object. The result is less than 0 if
   * this instance lesser than provided object, 0 if they are equal, and
   * greater than 0 otherwise.
   *
   * @param { Int } other - Int object to compare with.
   * @returns { int } result of the comparison (-1, 0, or 1).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Int): int;

  /**
   * Converts this object to a string in the given radix.
   *
   * @param { int } radix - the radix to use.
   *     <br>The value should be an integer.
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: int): string;

  /**
   * Converts this object to a string in the given radix.
   *
   * @param { double } radix - the radix to use.
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: double): string;

  /**
   * Converts this object to a locale-specific string representation
   *
   * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
   *     array of such strings.
   * @param { Intl.NumberFormatOptions } [options] - An object with some or all of the properties of the
   *     Intl.NumberFormat options.
   * @returns { string } result of the locale-specific conversion
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;

  /**
   * Converts this object to a locale-specific string representation
   *
   * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
   *     array of such strings.
   * @param { object } [options] - An object with some or all of the properties of the
   *     Intl.NumberFormat options.
   * @returns { string } result of the locale-specific conversion
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

  /**
   * Performs integral addition with provided instance.
   *
   * @param { Int } other - right hand side of the addition.
   * @returns { Int } result of the addition.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public add(other: Int): Int;

  /**
   * Performs integral subtraction with provided instance.
   *
   * @param { Int } other - right hand side of the subtraction.
   * @returns { Int } result of the subtraction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public sub(other: Int): Int;

  /**
   * Performs integral multiplication with provided instance.
   *
   * @param { Int } other - right hand side of the multiplication.
   * @returns { Int } result of the multiplication.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public mul(other: Int): Int;

  /**
   * Performs integral division with provided instance.
   *
   * @param { Int } other - right hand side of the division.
   * @returns { Int } result of the division.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public div(other: Int): Int;

  /**
   * Checks if this instance value is less than value of provided instance.
   *
   * @param { Int } other - right hand side of the comparison.
   * @returns { boolean } true if this value is less than provided.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessThan(other: Int): boolean;

  /**
   * Checks if this instance value is less than or equal to value of provided instance.
   *
   * @param { Int } other - right hand side of the comparison.
   * @returns { boolean } true if this value is less than or equal to provided.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessEqualThan(other: Int): boolean;

  /**
   * Checks if this instance value is greater than value of provided instance.
   *
   * @param { Int } other - right hand side of the comparison.
   * @returns { boolean } true if this value is greater than provided.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterThan(other: Int): boolean;

  /**
   * Checks if this instance value is greater than or equal to value of provided instance.
   *
   * @param { Int } other - right hand side of the comparison.
   * @returns { boolean } true if this value is greater than or equal to provided.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterEqualThan(other: Int): boolean;

  /**
   * Parses from String an integer of specified radix.
   *
   * @param { string } s - the string to convert.
   * @param { int } r - the radix of conversion (2-36).
   *     <br>The value should be an integer.
   * @returns { int } the result of parsing.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static parseInt(s: string, r: int): int;
}
