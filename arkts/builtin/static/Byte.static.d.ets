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
 * Represents boxed byte value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Byte extends Integral implements Comparable<Byte> {

    /**
     * Constructs a new Byte instance with initial value zero
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Constructs a new Byte instance with provided initial value
     *
     * @param { byte } value - the initial value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: byte);

    /**
     * Minimal value that this type can have as an integral.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MIN_VALUE: byte = -128;

    /**
     * Maximal value that this type can have as an integral.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_VALUE: byte = 127;

    /**
     * Size of this type in bits.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BIT_SIZE: byte = 8;

    /**
     * Size of this type in bytes.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BYTE_SIZE: byte = 1;

    /**
     * Returns value of this instance
     *
     * @returns { byte } the byte value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toByte(): byte;

    /**
     * Returns value of this instance
     *
     * @returns { short } the short value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toShort(): short;

    /**
     * Returns value of this instance
     *
     * @returns { int } the int value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

    /**
     * Returns value of this instance
     *
     * @returns { long } the long value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLong(): long;

    /**
     * Returns value of this instance
     *
     * @returns { float } the float value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFloat(): float;

    /**
     * Returns value of this instance
     *
     * @returns { double } the double value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toDouble(): double;

    /**
     * Returns value of this instance
     *
     * @returns { char } the char value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toChar(): char;

    /**
     * Returns the primitive as short value
     *
     * @param { byte } value - value to cast.
     * @returns { short } the short value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: byte): short;

    /**
     * Returns the primitive as int value
     *
     * @param { byte } value - value to cast.
     * @returns { int } the int value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: byte): int;

    /**
     * Returns the primitive as long value
     *
     * @param { byte } value - value to cast.
     * @returns { long } the long value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: byte): long;

    /**
     * Returns the primitive as float value
     *
     * @param { byte } value - value to cast.
     * @returns { float } the float value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: byte): float;

    /**
     * Returns the primitive as double value
     *
     * @param { byte } value - value to cast.
     * @returns { double } the double value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toDouble(value: byte): double;

    /**
     * Returns the primitive as char value
     *
     * @param { byte } value - value to cast.
     * @returns { char } the char value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toChar(value: byte): char;

    /**
     * Returns the primitive as byte value
     *
     * @param { byte } value - value to cast.
     * @returns { byte } the byte value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: byte): byte;

    /**
     * Compares this instance to other Byte object The result is less than 0 if this instance lesser than provided
     * object 0 if they are equal and greater than 0 otherwise.
     *
     * @param { Byte } other - Byte object to compare with.
     * @returns { int } the comparison result.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Byte): int;

    /**
     * Converts this object to a string
     *
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Converts the primitive to a string
     *
     * @param { byte } v - value to be converted.
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(v: byte): string;

    /**
     * Converts this object to a string
     *
     * @param { int } radix - to use for conversion.
     *     <br>The value should be an integer.
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: int): string;

    /**
     * Converts this object to a string
     *
     * @param { double } radix - to use for conversion.
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: double): string;

    /**
     * Checks for equality this instance with provided object, treated as a Byte Returns false if type of provided
     * object is not the same as this type
     *
     * @param { Any } other - object to be checked against.
     * @returns { boolean } true if equal, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * Returns a string representing the elements of the array. The elements are converted to Strings using their
     * toLocaleString methods.
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { Intl.NumberFormatOptions } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } A string representing the elements of the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;

    /**
     * Returns a string representing the elements of the array. The elements are converted to Strings using their
     * toLocaleString methods.
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with configuration properties.
     * @returns { string } A string representing the elements of the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Performs integral addition of this instance with provided one, returns the result as new instance
     *
     * @param { Byte } other - Right hand side of the addition.
     * @returns { Byte } the result of addition.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Byte): Byte;

    /**
     * Performs integral subtraction of this instance with provided one, returns the result as new instance
     *
     * @param { Byte } other - Right hand side of the subtraction.
     * @returns { Byte } the result of subtraction.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Byte): Byte;

    /**
     * Performs integral multiplication of this instance with provided one, returns the result as new instance
     *
     * @param { Byte } other - Right hand side of the multiplication.
     * @returns { Byte } the result of multiplication.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Byte): Byte;

    /**
     * Performs integral division of this instance with provided one, returns the result as new instance
     *
     * @param { Byte } other - Right hand side of the division.
     * @returns { Byte } the result of division.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Byte): Byte;

    /**
     * Checks if this instance value is less than value of provided instance
     *
     * @param { Byte } other - Right hand side of the comparison.
     * @returns { boolean } true if this instance is less than other.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Byte): boolean;

    /**
     * Checks if this instance value is less than or equal to value of provided instance
     *
     * @param { Byte } other - Right hand side of the comparison.
     * @returns { boolean } true if this instance is less than or equal to other.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Byte): boolean;

    /**
     * Checks if this instance value is greater than value of provided instance
     *
     * @param { Byte } other - Right hand side of the comparison.
     * @returns { boolean } true if this instance is greater than other.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Byte): boolean;

    /**
     * Checks if this instance value is greater than or equal to value of provided instance
     *
     * @param { Byte } other - Right hand side of the comparison.
     * @returns { boolean } true if this instance is greater than or equal to other.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Byte): boolean;

    /**
     * Parses a string to a byte value.
     *
     * @param { string } s - The string to parse.
     * @param { int } r - The radix of the string.
     *     <br>The value should be an integer.
     * @returns { byte } The parsed byte value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseInt(s: string, r: int): byte;
}
