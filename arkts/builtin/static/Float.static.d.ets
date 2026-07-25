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
 * Represents boxed float value and related operations.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float extends Floating implements Comparable<Float> {
    /**
     * Constructs a new Float instance with initial value zero.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Constructs a new Float instance with provided initial value.
     *
     * @param { float } value - the initial value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: float);

    /**
     * Constructs a new Float instance with provided initial value (double type literal).
     *
     * @param { double } value - the initial value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: double);

    /**
     * Minimal value that this type can have as a float.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MIN_VALUE: float = 1.4e-45f;

    /**
     * Maximal value that this type can have as a float.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_VALUE: float = 3.40282346638528860e+38f;

    /**
     * Maximal integer value that can be used as a float without loss of precision.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static MAX_SAFE_INTEGER: float = 16777215;

    /**
     * Size of this type in bits.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BIT_SIZE: byte = 32;

    /**
     * Size of this type in bytes.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static BYTE_SIZE: byte = 4;

    /**
     * Represents the NaN value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static NaN: float = Double.toFloat(0.0 / 0.0);

    /**
     * Represents the +Infinity value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static POSITIVE_INFINITY: float = Double.toFloat(1.0 / 0.0);

    /**
     * Represents the -Infinity value according to IEEE-754 specification.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static NEGATIVE_INFINITY: float = Double.toFloat(-1.0 / 0.0);

    /**
     * Number of significant precision bits in this floating type.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static PRECISION: byte = 24;

    /**
     * Minimal possible difference between two float values.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static DELTA: float = Float.bitCastFromInt(0x34000000);

    /**
     * Minimal possible difference between two float values.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static EPSILON: float = Float.DELTA;

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
     * @returns { int } value as int.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toInt(): int;

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
     * Returns the primitive as byte value.
     *
     * @param { float } value - value to cast.
     * @returns { byte } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toByte(value: float): byte;

    /**
     * Returns the primitive as short value.
     *
     * @param { float } value - value to cast.
     * @returns { short } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toShort(value: float): short;

    /**
     * Returns the primitive as int value.
     *
     * @param { float } value - value to cast.
     * @returns { int } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toInt(value: float): int;

    /**
     * Returns the primitive as long value.
     *
     * @param { float } value - value to cast.
     * @returns { long } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toLong(value: float): long;

    /**
     * Returns the primitive as float value.
     *
     * @param { float } value - value to cast.
     * @returns { float } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toFloat(value: float): float;

    /**
     * Returns the primitive as double value.
     *
     * @param { float } value - value to cast.
     * @returns { double } casted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toDouble(value: float): double;

    /**
     * Compares this instance to other Float object. The result is less than 0 if
     * this instance lesser than provided object, 0 if they are equal, and greater
     * than 0 otherwise.
     *
     * @param { Float } other - Float object to compare with.
     * @returns { int } result of the comparison (-1, 0, or 1).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Float): int;

    /**
     * Returns a string representation of float by radix r.
     *
     * @param { float } f - the float value.
     * @param { int } r - the radix.
     *     <br>The value should be an integer.
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(f: float, r: int): string;

    /**
     * Returns a string representation of float in base 10.
     *
     * @param { float } f - the float value.
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(f: float): string;

    /**
     * Converts this object to a string in the given radix.
     *
     * @param { int } r - the radix.
     *     <br>The value should be an integer.
     * @returns { string } result of the conversion.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(r: int): string;

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
     * Converts this object to a locale-specific string representation.
     *
     * @returns { string } result of the locale-specific conversion.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(): string;

    /**
     * Compares two floats to see if they differ by at most DELTA.
     *
     * @param { float } lhs - left-hand side float for comparison.
     * @param { float } rhs - right-hand side float for comparison.
     * @returns { boolean } true if equal with respect to DELTA.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static compare(lhs: float, rhs: float): boolean;

    /**
     * Checks for equality with provided object.
     *
     * @param { Any } other - object to be checked against.
     * @returns { boolean } true if equal, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * Checks if float is NaN.
     *
     * @param { float } v - the float to test.
     * @returns { boolean } true if the argument is NaN.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isNaN(v: float): boolean;

    /**
     * Checks if the underlying float is NaN.
     *
     * @returns { boolean } true if the underlying float is NaN.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isNaN(): boolean;

    /**
     * Checks if float is a finite floating point value.
     *
     * @param { float } v - the float to test.
     * @returns { boolean } true if the argument is finite.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isFinite(v: float): boolean;

    /**
     * Checks if the underlying float is a finite floating point value.
     *
     * @returns { boolean } true if the underlying float is finite.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isFinite(): boolean;

    /**
     * Checks if float is similar to an integer value.
     *
     * @param { float } v - the float to test.
     * @returns { boolean } true if the argument is similar to an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isInteger(v: float): boolean;

    /**
     * Checks if the underlying float is similar to an integer value.
     *
     * @returns { boolean } true if the underlying float is similar to an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isInteger(): boolean;

    /**
     * Checks if float is a safe integer value.
     *
     * @param { float } v - the float to test.
     * @returns { boolean } true if the argument is a safe integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isSafeInteger(v: float): boolean;

    /**
     * Checks if the underlying float is a safe integer value.
     *
     * @returns { boolean } true if the underlying float is a safe integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isSafeInteger(): boolean;

    /**
     * Performs floating point addition with provided instance.
     *
     * @param { Float } other - right hand side of the addition.
     * @returns { Float } result of the addition.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public add(other: Float): Float;

    /**
     * Performs floating point subtraction with provided instance.
     *
     * @param { Float } other - right hand side of the subtraction.
     * @returns { Float } result of the subtraction.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(other: Float): Float;

    /**
     * Performs floating point multiplication with provided instance.
     *
     * @param { Float } other - right hand side of the multiplication.
     * @returns { Float } result of the multiplication.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public mul(other: Float): Float;

    /**
     * Performs floating point division with provided instance.
     *
     * @param { Float } other - right hand side of the division.
     * @returns { Float } result of the division.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public div(other: Float): Float;

    /**
     * Checks if this instance value is less than value of provided instance.
     *
     * @param { Float } other - right hand side of the comparison.
     * @returns { boolean } true if this value is less than provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessThan(other: Float): boolean;

    /**
     * Checks if this instance value is less than or equal to value of provided instance.
     *
     * @param { Float } other - right hand side of the comparison.
     * @returns { boolean } true if this value is less than or equal to provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isLessEqualThan(other: Float): boolean;

    /**
     * Checks if this instance value is greater than value of provided instance.
     *
     * @param { Float } other - right hand side of the comparison.
     * @returns { boolean } true if this value is greater than provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterThan(other: Float): boolean;

    /**
     * Checks if this instance value is greater than or equal to value of provided instance.
     *
     * @param { Float } other - right hand side of the comparison.
     * @returns { boolean } true if this value is greater than or equal to provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isGreaterEqualThan(other: Float): boolean;

    /**
     * Converts bit representation to corresponding IEEE-754 floating point representation.
     *
     * @param { int } bits - bits to convert.
     *     <br>The value should be an integer.
     * @returns { float } converted value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastFromInt(bits: int): float;

    /**
     * Converts IEEE-754 floating point representation to corresponding bit representation.
     *
     * @param { float } val - value to convert.
     * @returns { int } bit representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bitCastToInt(val: float): int;
}
