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
 * Represents boxed char value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class Char extends Object implements Comparable<Char> {

  /**
   * toString() converts Char to String object that contains a single element with the underlying char.
   *
   * @returns { string } the string representation of the Char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  toString(): string;

  /**
   * Returns the primitive as string value
   *
   * @param { char } value - value to cast
   * @returns { string } the string representation of the char value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static toString(value: char): string;

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
   * isDecDigit() checks whether the char represents a decimal digit.
   *
   * @param { char } value - a char to check.
   * @returns { boolean } true if the char is a decimal digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static isDecDigit(value: char): boolean;

  /**
   * isDecDigit() checks whether the underlying char represents a decimal digit.
   *
   * @returns { boolean }  true if the underlying char is a decimal digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  isDecDigit(): boolean;

  /**
   * isWhiteSpace(char) checks whether the char is a whitespace char.
   *
   * @param { char } value - a char to be tested.
   * @returns { boolean } true if the char is a whitespace, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static isWhiteSpace(value: char): boolean;

  /**
   * isWhiteSpace() checks whether the underlying char is a whitespace char.
   *
   * @returns { boolean } true if the underlying char is a whitespace, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  isWhiteSpace(): boolean;

  /**
   * constructor() creates a default Char object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor();

  /**
   * constructor(char) creates a Char object from a specified primitive char.
   *
   * @param { char } value - a primitive char to create Char from.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public constructor(value: char);

  /**
   * equals(Object) compares two Chars by their underlying primitive chars.
   * Returns false if the argument is not an instance of Char.
   *
   * @param { Any } other - a reference to object to be compared with.
   * @returns { boolean } true if the two Chars are equal, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public equals(other: Any): boolean;

  /**
   * compare(Char, Char) compares two Chars by their underlying chars.
   *
   * @param { Char } lhs - the first Char to compare.
   * @param { Char } rhs - the second Char to compare.
   * @returns { boolean } true if the two Chars are equal, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compare(lhs: Char, rhs: Char): boolean;

  /**
   * Compares this instance to other Char object. The result is less than 0 if
   * this instance lesser than provided object, 0 if they are equal, and greater
   * than 0 otherwise.
   *
   * @param { Char } other - Char object to compare with.
   * @returns { int } a negative number if this instance is less than other, zero if equal, positive if greater.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public compareTo(other: Char): int;

  /**
   * Size of the char type in bits.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public readonly CHAR_BIT_SIZE: int = 16;

  /**
   * Maximal code point value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public readonly MAX_CODE_POINT: int = 0x10FFFF;

  /**
   * Minimal high surrogate value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly HIGH_SURROGATE_MIN: char = c'\uD800';

  /**
   * Maximal high surrogate value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly HIGH_SURROGATE_MAX: char = c'\uDBFF';

  /**
   * Minimal low surrogate value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOW_SURROGATE_MIN: char = c'\uDC00';

  /**
   * Maximal low surrogate value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOW_SURROGATE_MAX: char = c'\uDFFF';

  /**
   * MIN_VALUE is a smallest value of type char.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MIN_VALUE: char = c'\u0000';

  /**
   * MAX_VALUE is a largest value of type char.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly MAX_VALUE: char = c'\uFFFF';

  /**
   * Returns value of this instance.
   *
   * @returns { byte } the byte value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toByte(): byte;

  /**
   * Returns value of this instance.
   *
   * @returns { short } the short value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toShort(): short;

  /**
   * Returns value of this instance.
   *
   * @returns { int } the int value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toInt(): int;

  /**
   * Returns value of this instance.
   *
   * @returns { long } the long value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLong(): long;

  /**
   * Returns value of this instance.
   *
   * @returns { float } the float value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toFloat(): float;

  /**
   * Returns value of this instance.
   *
   * @returns { double } the double value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toDouble(): double;

  /**
   * Returns value of this instance.
   *
   * @returns { char } the char value of this Char instance.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toChar(): char;

  /**
   * Returns the primitive as byte value.
   *
   * @param { char } value - value to cast.
   * @returns { byte } the byte value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toByte(value: char): byte;

  /**
   * Returns the primitive as short value.
   *
   * @param { char } value - value to cast.
   * @returns { short } the short value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toShort(value: char): short;

  /**
   * Returns the primitive as int value.
   *
   * @param { char } value - value to cast.
   * @returns { int } the int value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toInt(value: char): int;

  /**
   * Returns the primitive as long value.
   *
   * @param { char } value - value to cast.
   * @returns { long } the long value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLong(value: char): long;

  /**
   * Returns the primitive as float value.
   *
   * @param { char } value - value to cast.
   * @returns { float } the float value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toFloat(value: char): float;

  /**
   * Returns the primitive as double value.
   *
   * @param { char } value - value to cast.
   * @returns { double } the double value of the char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toDouble(value: char): double;

  /**
   * Returns the primitive as char value.
   *
   * @param { char } value - value to cast.
   * @returns { char } the char value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toChar(value: char): char;

  /**
   * isInBasicMultilingualPlane(char) checks if the char is in Basic Multilingual
   * Plane. See UTF-16 for more details.
   *
   * @param { char } value - the char to be checked.
   * @returns { boolean } true if the char is in Basic Multilingual Plane, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isInBasicMultilingualPlane(value: char): boolean;

  /**
   * isInBasicMultilingualPlane(int) checks if the code point is in
   * Basic Multilingual Plane. See UTF-16 for more details.
   *
   * @param { int } value - the code point to be checked.
   *     <br>The value should be an integer.
   * @returns { boolean } true if the code point is in Basic Multilingual Plane, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isInBasicMultilingualPlane(value: int): boolean;

  /**
   * isInBasicMultilingualPlane() checks if the underlying char is in Basic
   * Multilingual Plane. See UTF-16 for more details.
   *
   * @returns { boolean } true if the underlying char is in Basic Multilingual Plane, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isInBasicMultilingualPlane(): boolean;

  /**
   * isValidCodePoint() checks if the code point is correctly encoded.
   * See UTF-16 for more details.
   *
   * @param { int } codePoint - the code point to be checked.
   *     <br>The value should be an integer.
   * @returns { boolean } true if the code point is correctly encoded, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isValidCodePoint(codePoint: int): boolean;

  /**
   * codeUnitsToEncode(int) counts a number of code units to encode
   * the UTF-16 code point. See UTF-16 for more details.
   *
   * @param { int } value - UTF-16 code point to be examined..
   *     <br>The value should be an integer.
   * @returns { int } the number of UTF-16 code units required to encode the code point.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static codeUnitsToEncode(value: int): int;

  /**
   * isHighSurrogate(char) checks if the char is a high surrogate.
   *
   * @param { char } value - the char to be checked.
   * @returns { boolean } true if the char is a high surrogate, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isHighSurrogate(value: char): boolean;

  /**
   * isLowSurrogate(char) checks if the char is a low surrogate.
   *
   * @param { char } value - the char to be checked.
   * @returns { boolean } true if the char is a low surrogate, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLowSurrogate(value: char): boolean;

  /**
   * getHighSurrogate(int) splits code point as a two code units and
   * returns the first one. The result can be malformed and thus has to be checked.
   *
   * @param { int } value - an encoded code point.
   *     <br>The value should be an integer.
   * @returns { char } the high surrogate code unit.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static getHighSurrogate(value: int): char;

  /**
   * getLowSurrogate(int) splits code point as a two code units and
   * returns the second one. The result can be malformed and thus has to be checked.
   *
   * @param { int } value - an encoded code point.
   *     <br>The value should be an integer.
   * @returns { char } the low surrogate code unit.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static getLowSurrogate(value: int): char;

  /**
   * isPartOfSurrogatePair(char) checks whether the char is low or high surrogate.
   *
   * @param { char } value - the char to be tested.
   * @returns { boolean } true if the char is part of a surrogate pair, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isPartOfSurrogatePair(value: char): boolean;

  /**
   * isPartOfSurrogatePair() checks whether the underlying char is low or high surrogate.
   *
   * @returns { boolean } true if the underlying char is part of a surrogate pair, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isPartOfSurrogatePair(): boolean;

  /**
   * charsToCodePoint(char, char) combines two chars to code point.
   *
   * @param { char } highValue - the high surrogate value.
   * @param { char } lowValue - the low surrogate value.
   * @returns { int } the combined UTF-16 code point.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static charsToCodePoint(highValue: char, lowValue: char): int;

  /**
   * isBinDigit(char) checks whether the char represents a binary digit.
   *
   * @param { char } value - a char to check.
   * @returns { boolean } true if the char is a binary digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isBinDigit(value: char): boolean;

  /**
   * isBinDigit() checks whether the underlying char represents a binary digit.
   *
   * @returns { boolean } true if the underlying char is a binary digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isBinDigit(): boolean;

  /**
   * isHexDigit(char) checks whether the char represents a hexadecimal digit.
   *
   * @param { char } value - a char to check.
   * @returns { boolean } true if the char is a hexadecimal digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isHexDigit(value: char): boolean;

  /**
   * isHexDigit() checks whether the underlying char represents a hexadecimal digit.
   *
   * @returns { boolean } true if the underlying char is a hexadecimal digit, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isHexDigit(): boolean;

  /**
   * isLetter(char) checks whether the char is a letter.
   *
   * @param { char } value - a char to be tested.
   * @returns { boolean } true if the char is a letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLetter(value: char): boolean;

  /**
   * isLetter() checks whether the underlying char is a letter.
   *
   * @returns { boolean } true if the underlying char is a letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLetter(): boolean;

  /**
   * isUpperCase(char) checks whether the char is an upper case letter.
   *
   * @param { char } value - a char to be tested.
   * @returns { boolean } true if the char is an upper case letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isUpperCase(value: char): boolean;

  /**
   * isUpperCase() checks whether the underlying char is an upper case letter.
   *
   * @returns { boolean } true if the underlying char is an upper case letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isUpperCase(): boolean;

  /**
   * isLowerCase(char) checks whether the char is a lower case letter.
   *
   * @param { char } value - a char to be tested.
   * @returns { boolean } true if the char is a lower case letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static isLowerCase(value: char): boolean;

  /**
   * isLowerCase() checks whether the underlying char is a lower case letter.
   *
   * @returns { boolean } true if the underlying char is a lower case letter, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public isLowerCase(): boolean;

  /**
   * toUpperCase(char) converts the char to upper case if it is in lower case,
   * otherwise the char is returned unchanged.
   *
   * @param { char } value - a char to transform to upper case.
   * @returns { char } the upper case char converted from the input char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toUpperCase(value: char): char;

  /**
   * toUpperCase() converts the underlying char to upper case if it is in lower
   * case, otherwise the char is returned unchanged.
   *
   * @returns { Char } the upper case char converted from the underlying char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toUpperCase(): Char;

  /**
   * toLowerCase(char) converts the char to lower case if it is in upper case,
   * otherwise the char is returned unchanged.
   *
   * @param { char } value - a char to transform to lower case.
   * @returns { char } the lower case char converted from the input char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static toLowerCase(value: char): char;

  /**
   * toLowerCase() converts the underlying char to lower case if it is in upper
   * case, otherwise the char is returned unchanged.
   *
   * @returns { Char } the lower case char converted from the underlying char.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toLowerCase(): Char;
}
