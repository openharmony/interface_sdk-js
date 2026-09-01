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
 * Represents boxed short value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Short extends Integral implements Comparable<Short> {
  /**
   * Constructs a new Short instance with initial value zero.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor();

  /**
   * Constructs a new Short instance with provided initial value.
   *
   * @param { short } value - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor(value: short);

  /**
   * Minimal value that this type can have as a short.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static MIN_VALUE: short = -32768;

  /**
   * Maximal value that this type can have as a short.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static MAX_VALUE: short = 32767;

  /**
   * Size of this type in bits.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static BIT_SIZE: byte = 16;

  /**
   * Size of this type in bytes.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static BYTE_SIZE: byte = 2;

  /**
   * Returns value of this instance as byte.
   *
   * @returns { byte } value as byte.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toByte(): byte;

  /**
   * Returns value of this instance as short.
   *
   * @returns { short } value as short.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toShort(): short;

  /**
   * Returns value of this instance as int.
   *
   * @returns { int } value as int.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toInt(): int;

  /**
   * Returns value of this instance as long.
   *
   * @returns { long } value as long.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLong(): long;

  /**
   * Returns value of this instance as float.
   *
   * @returns { float } value as float.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toFloat(): float;

  /**
   * Returns value of this instance as double.
   *
   * @returns { double } value as double.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toDouble(): double;

  /**
   * Returns value of this instance as char.
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
   * @param { short } value - value to cast.
   * @returns { byte } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: short): byte;

  /**
   * Returns the primitive as int value.
   *
   * @param { short } value - value to cast.
   * @returns { int } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toInt(value: short): int;

  /**
   * Returns the primitive as long value.
   *
   * @param { short } value - value to cast.
   * @returns { long } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: short): long;

  /**
   * Returns the primitive as float value.
   *
   * @param { short } value - value to cast.
   * @returns { float } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: short): float;

  /**
   * Returns the primitive as double value.
   *
   * @param { short } value - value to cast.
   * @returns { double } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: short): double;

  /**
   * Returns the primitive as char value.
   *
   * @param { short } value - value to cast.
   * @returns { char } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: short): char;

  /**
   * Returns the primitive as short value.
   *
   * @param { short } value - value to cast.
   * @returns { short } casted value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: short): short;

  /**
   * Compares this instance to other Short object. The result is less than 0 if this instance lesser
   * than provided object, 0 if they are equal, and greater than 0 otherwise.
   *
   * @param { Short } other - Short object to compare with.
   * @returns { int } result of the comparison, -1 if this instance is less than provided object, 0 if equal,
   *     1 if greater.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Short): int;

  /**
   * Converts the primitive to a string.
   *
   * @param { short } v - value to be converted.
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toString(v: short): string;

  /**
   * Converts this object to a string.
   *
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(): string;

  /**
   * Converts this object to a string with specified radix.
   *
   * @param { int } radix - the radix of conversion.
   *     <br>The value should be an integer.
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: int): string;

  /**
   * Converts this object to a string with specified radix.
   *
   * @param { double } radix - the radix of conversion.
   * @returns { string } result of the conversion.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(radix: double): string;

  /**
   * Checks for equality this instance with provided object, treated as a Short.
   *
   * @param { Any } other - object to be checked against.
   * @returns { boolean } true if provided object and this instance have same value, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public equals(other: Any): boolean;

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
   * Performs integral addition of this instance with provided one, returns the result as new instance.
   *
   * @param { Short } other - Right hand side of the addition.
   * @returns { Short } Result of the addition.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public add(other: Short): Short;

  /**
   * Performs integral subtraction of this instance with provided one, returns the result as new instance.
   *
   * @param { Short } other - Right hand side of the subtraction.
   * @returns { Short } Result of the subtraction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public sub(other: Short): Short;

  /**
   * Performs integral multiplication of this instance with provided one, returns the result as new instance.
   *
   * @param { Short } other - Right hand side of the multiplication.
   * @returns { Short } Result of the multiplication.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public mul(other: Short): Short;

  /**
   * Performs integral division of this instance with provided one, returns the result as new instance.
   *
   * @param { Short } other - Right hand side of the division.
   * @returns { Short } Result of the division.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public div(other: Short): Short;

  /**
   * Checks if this instance value is less than value of provided instance.
   *
   * @param { Short } other - Right hand side of the comparison.
   * @returns { boolean } true if this value is less than provided, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessThan(other: Short): boolean;

  /**
   * Checks if this instance value is less than or equal to value of provided instance.
   *
   * @param { Short } other - Right hand side of the comparison.
   * @returns { boolean } true if this value is less than or equal to provided, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLessEqualThan(other: Short): boolean;

  /**
   * Checks if this instance value is greater than value of provided instance.
   *
   * @param { Short } other - Right hand side of the comparison.
   * @returns { boolean } true if this value is greater than provided, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterThan(other: Short): boolean;

  /**
   * Checks if this instance value is greater than or equal to value of provided instance.
   *
   * @param { Short } other - Right hand side of the comparison.
   * @returns { boolean } true if this value is greater than or equal to provided, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isGreaterEqualThan(other: Short): boolean;

  /**
   * Parses from string an integer of specified radix.
   *
   * @param { string } s - the string to convert.
   * @param { int } r - the radix of conversion; should be [2, 36]; 0 assumed to be 10.
   *     <br>The value should be an integer.
   * @returns { short } the result of parsing.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static parseInt(s: string, r: int): short;
}
