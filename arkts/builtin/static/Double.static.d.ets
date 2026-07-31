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
 * Represents boxed double value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Double extends Floating implements Comparable<Double> {
    /**
     * Constructs a new Double instance with initial value zero
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * Constructs a new Double instance with provided initial value
     *
     * @param { double } value - the initial value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: double);

    /**
     * Constructs a new Double instance from BigInt
     *
     * @param { BigInt } value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: BigInt);

    /**
     * Constructs a new Double instance from string
     *
     * @param { string } value - string that may contain a number
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: string);

    /**
     * Creates a new instance of a Double
     *
     * @returns { Double } A new Double instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): Double;

    /**
     * Creates a new instance of a Double
     *
     * @param { string | Double | BigInt | undefined | null } value - The value to be converted to a number.
     *     Can be a string, number, or BigInt (optional).
     * @returns { Double } A new Double instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: string | Double | BigInt | undefined | null): Double;

    /**
     * Returns value of this instance
     *
     * @returns { double } return the current value convert double value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    toDouble(): double;

    /**
     * Returns the primitive as double value
     *
     * @param { double } value - value to cast
     * @returns { double }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toDouble(value: double): double;

    /**
     * parseFloat(String) converts std.core.String to double
     * If arg is '+Infinity', 'Infinity' or '-Infinity', return value is `inf` or `-inf` respectively.
     * If arg is '+0' or '-0', return value is 0 or -0.
     * If arg has leading zeroes, it's ignored: '0001.5' -> 1.5, '-0001.5' -> -1.5
     * If arg starts from '.', leading zero is implied: '.5' -> 0.5, '-.5' -> -0.5
     * If arg successfully parsed, trailing non-digits ignored: '-.6ffg' -> -0.6
     * If arg can not be parsed into a number, NaN is returned
     *
     * @param { string } s - the string to convert
     * @returns { double } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseFloat(s: string): double;

    /**
     * parseInt(String) parses from String an integer of radix 10
     *
     * @param { string } s - the string to convert
     * @returns { double } the result of parsing
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseInt(s: string): double;
  /**
   * parseInt(String, int) parses from String an integer of specified radix
   * If args ('10', 1) -> thrown ArgumentOutOfRangeError, ('10', 37) -> thrown ArgumentOutOfRangeError
   * If args ('10', 2) -> 2
   * If args ('10', 10) -> 10, ('10', 0) -> 10
   * If args ('ff', 16) -> 255
   * etc.
   *
   * @param { string } s - the string to convert
   * @param { int } r - the radix of conversion; should be [2, 36]; 0 assumed to be 10
   *     <br>The value should be an integer.
   * @returns { double } the result of parsing
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  static parseInt(s: string, r: int): double;

    /**
     * parseInt(String, double) parses from String an integer of specified radix
     * If args ('10', 1) -> thrown ArgumentOutOfRangeError, ('10', 37) -> thrown ArgumentOutOfRangeError
     * If args ('10', 2) -> 2
     * If args ('10', 10) -> 10, ('10', 0) -> 10
     * If args ('ff', 16) -> 255
     * etc.
     *
     * @param { string } s - the string to convert
     * @param { double } r - the radix of conversion; should be [2, 36]; 0 assumed to be 10
     * @returns { double } the result of parsing
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parseInt(s: string, r: double): double;

    /**
     * Checks for equality this instance with provided object,
     * treated as a Double Returns false if type of provided object is not the same as this type
     *
     * @param { Any } other - object to be checked against
     * @returns { boolean } true if provided object and this instance have same value, false otherwise
     *     Returns false if type of provided object is not the same as this type
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    equals(other: Any): boolean;

    /**
     * isNaN(double) checks if double is NaN (not a number)
     *
     * @param { double } v - the double to test
     * @returns { boolean } true if the argument is NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isNaN(v: double): boolean;

    /**
     * isNaN() checks if the underlying double is NaN (not a number)
     *
     * @returns { boolean } true if the underlying double is NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isNaN(): boolean;

    /**
     * isFinite(double) checks if double is a floating point value (not a NaN or infinity)
     *
     * @param { double } v - the double to test
     * @returns { boolean } true if the argument is a floating point value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isFinite(v: double): boolean;

    /**
     * isFinite() checks if the underlying double is a floating point value (not a NaN or infinity)
     *
     * @returns { boolean } true if the underlying double is a floating point value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isFinite(): boolean;

    /**
     * Minimal value that this type can have as a double
     * the workarond for libc's double literal parsing bug.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MIN_VALUE: double = 4.9e-300 / 1.e+24;

    /**
     * Maximal value that this type can have as a double.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MAX_VALUE: double = 1.7976931348623157e+308;

    /**
     * Maximal integer value that can be used as a double without loss of precision.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MAX_SAFE_INTEGER: double = 9007199254740991;

    /**
     * Minimal integer value that can be used as a double without loss of precision.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly MIN_SAFE_INTEGER: double = -9007199254740991;

    /**
     * Size of this type in bits.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BIT_SIZE: byte = 64;

    /**
     * Size of this type in bytes.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTE_SIZE: byte = 8;

    /**
     * Represents the NaN value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NaN: double = 0.0 / 0.0;

    /**
     * Represents the +Infinity value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly POSITIVE_INFINITY: double = 1.0 / 0.0;

    /**
     * Represents the -Infinity value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NEGATIVE_INFINITY: double = -1.0 / 0.0;

    /**
     * Number of significant precision bits in this floating type.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRECISION: byte = 53;

    /**
     * Minimal possible difference between two double values.
     * For double (IEEE-754 binary64) it is 2^(-52) and its bit representation is 0x3cb0000000000000.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly DELTA: double = Double.bitCastFromLong(0x3cb0000000000000);

    /**
     * Minimal possible difference between two double values.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly EPSILON: double = Double.DELTA;


    /**
     * Returns value of this instance
     *
     * @returns { byte } return the current value convert byte value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toByte(): byte;

    /**
     * Returns value of this instance
     *
     * @returns { short } return the current value convert short value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toShort(): short;

    /**
     * Returns value of this instance
     *
     * @returns { int } return the current value convert int value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

    /**
     * Returns value of this instance
     *
     * @returns { long } return the current value convert long value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLong(): long;

    /**
     * Returns value of this instance
     *
     * @returns { float } return the current value convert float value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFloat(): float;

    /**
     * Returns the primitive as byte value
     *
     * @param { double } value - value to cast.
     * @returns { byte }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: double): byte;

    /**
     * Returns the primitive as short value
     *
     * @param { double } value - value to cast.
     * @returns { short }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: double): short;

    /**
     * Returns the primitive as int value
     *
     * @param { double } value - value to cast.
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: double): int;

    /**
     * Returns the primitive as long value
     *
     * @param { double } value - value to cast.
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: double): long;

    /**
     * Returns the primitive as float value
     *
     * @param { double } value - value to cast.
     * @returns { float }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: double): float;

    /**
     * Compares this instance to other Double object
     * The result is less than 0 if this instance lesser than provided object
     * 0 if they are equal
     * and greater than 0 otherwise.
     *
     * @param { Double } other - Double object to compare with.
     * @returns { int } if the cur value > the other reutrn 0,otherwise return -1
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Double): int;

    /**
     * toString(d: double, r: int): string -- returns a string representation of d by radix r
     *
     * @param { double } d
     * @param { int } r - <br>The value should be an integer.
     * @returns { string } return the string value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(d: double, r: int): string;

    /**
     * Converts the specified double-precision floating-point value to its string representation.
     *
     * @param { double } d - return the string value.
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(d: double): string;

    /**
     * Converts the specified double-precision floating-point value to its string representation.
     *
     * @param { int } r - <br>The value should be an integer.
     * @returns { string } return the string value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(r: int): string;

    /**
     * Converts this object to a string
     *
     * @returns { string } return the string value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

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
     * compare(double, double) checks if two doubles are differs no more than by Double.DELTA
     *
     * @param { double } lhs - left-hand side double for comparison.
     * @param { double } rhs - right-hand side double for comparison.
     * @returns { boolean } true if lhs and rhs are equal with respect to Double.DELTA
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static compare(lhs: double, rhs: double): boolean;

    /**
     * Checks if double is similar to an integer value
     *
     * @param { double } v - the double to test.
     * @returns { boolean } true if the argument is similar to an integer value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isInteger(v: double): boolean;

    /**
     * Checks if the underlying double is similar to an integer value
     *
     * @returns { boolean } true if the underlying double is similar to an integer value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isInteger(): boolean;

    /**
     * Checks if double is a safe integer value
     *
     * @param { double } v - the double to test.
     * @returns { boolean } true if the argument is integer ans less than MAX_SAFE_INTEGER
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isSafeInteger(v: double): boolean;

    /**
     * Checks if double is a safe integer value
     *
     * @returns { boolean } true if the underlying double is a safe integer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isSafeInteger(): boolean;

    /**
     * Performs floating point addition of this instance with provided one, returns the result as new instance
     *
     * @param { Double } other - Right hand side of the addition.
     * @returns { Double } Result of the addition
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Double): Double;

    /**
     * Performs floating point subtraction of this instance with provided one, returns the result as new instance
     *
     * @param { Double } other - Right hand side of the subtraction.
     * @returns { Double } Result of the subtraction
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Double): Double;

    /**
     * Performs floating point multiplication of this instance with provided one, returns the result as new instance
     *
     * @param { Double } other - Right hand side of the multiplication.
     * @returns { Double } Result of the multiplication
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Double): Double;

    /**
     * Performs floating point division of this instance with provided one, returns the result as new instance
     *
     * @param { Double } other - Right hand side of the division.
     * @returns { Double } Result of the division
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Double): Double;

    /**
     * Checks if this instance value is less than value of provided instance
     *
     * @param { Double } other - Right hand side of the comparison.
     * @returns { boolean } true if this value is less than provided, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Double): boolean;

    /**
     * Checks if this instance value is less than or equal to value of provided instance
     *
     * @param { Double } other - Right hand side of the comparison.
     * @returns { boolean } true if this value is less than or equal to provided, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Double): boolean;

    /**
     * Checks if this instance value is greater than value of provided instance
     *
     * @param { Double } other - Right hand side of the comparison.
     * @returns { boolean } true if this value is greater than provided, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Double): boolean;

    /**
     * Checks if this instance value is greater than or equal to value of provided instance
     *
     * @param { Double } other - Right hand side of the comparison.
     * @returns { boolean } true if this value is greater than or equal to provided, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Double): boolean;

    /**
     * toExponential(double) returns std.core.string representing the underlying double in exponential notation
     * If d = new Double(0.25); d.toExponential(2) -> '2.50e-1'
     * If d = new Double(0.25); d.toExponential(2.5) -> '2.50e-1'
     * If d = new Double(0.25); d.toExponential(1) -> '2.5e-1'
     * If d = new Double(12345.01); d.toExponential(10) -> '1.2345010000e+4'
     * If d = new Double(NaN); d.toExponential(10) -> 'NaN';
     * If d = new Double(Double.POSITIVE_INFINITY); d.toExponential(10) -> 'Infinity';
     *     '-Infinity' for negative
     *
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponentialWithNoDigit(): string;

    /**
     * toExponential() returns std.core.string representing the underlying double in exponential notation
     *
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponential(): string;

    /**
     * toExponential() returns std.core.String representing the underlying double in exponential notation
     *
     * @param { double } [d]
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toExponential(d?: double): string;

    /**
     * toPrecision(double) returns std.core.string representing the underlying double on the specified precision
     * If d = new Double(0.25); d.toPrecision(4) -> '0.2500'
     * If d = new Double(1.01); d.toPrecision(4.7) -> '1.010'
     * If d = new Double(0.25); d.toPrecision(0) -> thrown ArgumentOutOfRangeError
     * If d = new Double(12345.123455); d.toPrecision(10) -> '12345.12346'
     *
     * @param { double } d - precision (rounded to nearest integer); must be in [1, 100].
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toPrecision(d: double): string;

    /**
     * toPrecision() returns std.core.string representing the underlying double in exponential notation
     *     basically, if toPrecision called with no argument it's just toString according to spec
     *
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toPrecision(): string;

    /**
     * toFixed(double) returns std.core.string representing the underlying double using fixed-point notation
     * If d = new Double(0.1); d.toFixed(0) -> '0'
     * If d = new Double(0.7); d.toFixed(0) -> '1'
     * If d = new Double(0.12345); d.toFixed(1) -> '0.1'
     * If d = new Double(0.12345); d.toFixed(3) -> '0.123'
     * If d = new Double(Double.POSITIVE_INFINITY); d.toFixed(3) -> 'Infinity'
     * If d = new Double(Double.NaN); d.toFixed(3) -> 'NaN'
     * If d = new Double(0.25); d.toFixed(200) -> thrown ArgumentOutOfRangeError
     *
     * @param { double } d - fixed size (integer part); must be in [0, 100].
     * @returns { string } the result of conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixedImpl(d: double): string;

    /**
     * toFixed(double) returns std.core.string representing the underlying double using fixed-point notation
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixed(): string;

    /**
     * toFixed(double) returns std.core.string representing the underlying double using fixed-point notation
     *
     * @param { double } [d]
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toFixed(d?: double): string;

    /**
     * Converts bit representation to corresponding IEEE-754 floating point representation
     *
     * @param { long } bits - bits to convert.
     * @returns { double } converted value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastFromLong(bits: long): double;

    /**
     * Converts IEEE-754 floating point representation to corresponding bit representation
     *
     * @param { double } val - value to convert.
     * @returns { long } bit representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastToLong(val: double): long;
}
