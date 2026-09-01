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
 * `bigint` is an alias for type `BigInt`
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type bigint = BigInt;
/**
 * Options for BigInt.toLocaleString method.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface BigIntToLocaleStringOptions {
    /**
     * Specifies the compact display format for large numbers.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    compactDisplay?: string;

    /**
     * The currency to use for currency formatting.
     * Required when style is "currency". Use ISO 4217 currency codes (e.g., "USD", "EUR", "CNY").
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    currency?: string;

    /**
     * Specifies how to display the currency in the formatted string.
     * Valid values: "code" (ISO currency code like "USD"), "symbol" (currency symbol like "$"),
     * "narrowSymbol" (short symbol like "$100"), or "name" (full name like "US dollar").
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    currencyDisplay?: string;

    /**
     * The locale matching algorithm to use.
     * Valid values: "lookup" (BCP 47 lookup algorithm) or "best fit" (Intl best fit matcher).
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    localeMatcher?: string;

    /**
     * The maximum number of decimal digits to display.
     * Must be an integer between 0 and 100.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    maximumFractionDigits?: double;

    /**
     * The maximum number of significant digits to display.
     * Must be an integer between 0 and 100.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    maximumSignificantDigits?: double;

    /**
     * The minimum number of decimal digits to display.
     * Must be an integer between 1 and 21.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumFractionDigits?: double;

    /**
     * The minimum number of integer digits to display (before the decimal point).
     * Must be an integer between 1 and 21.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumIntegerDigits?: double;

    /**
     * The minimum number of significant digits to display.
     * Must be an integer between 1 and 21.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    minimumSignificantDigits?: double;

    /**
     * The notation format to use for displaying the number.
     * Valid values: "standard" (default, e.g., "1000"), "scientific" (e.g., "1e3"),
     * "engineering" (e.g., "1E3"), or "compact" (e.g., "1K" for 1000).
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    notation?: string;

    /**
     * The numbering system to use for number formatting.
     * This option is currently not implemented and has no effect.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    numberingSystem?: string;

    /**
     * The formatting style to use.
     * Valid values: "decimal" (default, for plain numbers), "percent" (for percentages).
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    style?: string;

    /**
     * The unit to use for unit formatting.
     * Required when style is "unit". Use UCUM unit codes (e.g., "meter", "second", "kilogram").
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unit?: string;

    /**
     * Specifies how to display the unit in the formatted string.
     * Valid values: "short" (e.g., "m"), "long" (e.g., "meters"), or "narrow" (e.g., "m").
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unitDisplay?: string;

    /**
     * Whether to use grouping separators (e.g., thousands separator "," in "1,000").
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    useGrouping?: boolean;
}

/**
 * JS BigInt API-compatible class.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigInt {
    /**
     * Creates a new `BigInt` instance with value 0.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Creates a new `BigInt` instance from a byte value.
     *
     * @param { byte } d - The byte value to convert.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: byte);

    /**
     * Creates a new `BigInt` instance from a short value.
     *
     * @param { short } d - The short value to convert.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: short);

    /**
     * Creates a new `BigInt` instance from an int value.
     *
     * @param { int } d - The int value to convert.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: int);

    /**
     * Creates a new `BigInt` instance from a long value.
     *
     * @param { long } d - The long value to convert.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: long);

    /**
     * Creates a new `BigInt` instance from a double value.
     *
     * @param { double } d - The double value to convert to BigInt. Must be an integer.
     * @throws { RangeError } Throw - RangeError when d is not an integer or d is not a safe integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: double);

    /**
     * Creates a new `BigInt` instance from a string value.
     *
     * @param { string } d - The string value to convert to BigInt.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: string);

    /**
     * Creates a new `BigInt` instance from a boolean value.
     *
     * @param { boolean } d - The boolean value (true=1, false=0).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: boolean);

    /**
     * Creates a new `BigInt` instance by copying another BigInt.
     *
     * @param { BigInt } d - The BigInt object to copy.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(d: BigInt);

    /**
     * Creates a new `BigInt` instance from internal components.
     *
     * @param { FixedArray<int> } v - The array of digits.
     * @param { int } sign - The sign of the number.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(v: FixedArray<int>, sign: int);

    /**
     * Creates a BigInt from an unsigned long value.
     *
     * @param { long } val - The unsigned long value.
     * @returns { BigInt } The new BigInt instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromULong(val: long): BigInt;

    /**
     * Checks if this BigInt is equal to another BigInt.
     *
     * @param { BigInt } to - The BigInt to compare with.
     * @returns { boolean } True if equal, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(to: BigInt): boolean;

    /**
     * Checks if this BigInt is equal to another value.
     *
     * @param { Any } other - The value to compare with.
     * @returns { boolean } true if the value is a BigInt and equal to this BigInt, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    equals(other: Any): boolean;

    /**
     * Converts a number to a string by using the current or specified locale.
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { BigIntToLocaleStringOptions } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } A string representing the BigInt formatted according to the locale and options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;

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
     * Converts the BigInt to a string in base 10.
     *
     * @returns { string } A string representation of the BigInt in base 10.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns a string representation of the BigInt object.
     *
     * @param { int } radix - An integer in the range 2 through 36 specifying the base to use for representing numeric
     *     values.
     *     <br>The value should be an integer.
     * @returns { string } A string representing the specified BigInt object.
     * @throws { RangeError } Throw - RangeError when radix is not between 2 and 36
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(radix: int): string;

    /**
     * Clamps a BigInt to a signed integer with the specified number of bits.
     *
     * @param { long } bits - The number of bits for the signed integer representation.
     * @param { BigInt } num - The BigInt value to clamp.
     * @returns { BigInt } A BigInt value clamped to the specified number of bits as a signed integer.
     * @throws { RangeError } Throw - RangeError when bits is less than 0 or greater than Double.MAX_SAFE_INTEGER
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static asIntN(bits: long, num: BigInt): BigInt;

    /**
     * Clamps a BigInt to an unsigned integer with the specified number of bits.
     *
     * @param { long } bits - The number of bits for the unsigned integer representation.
     * @param { BigInt } num - The BigInt value to clamp.
     * @returns { BigInt } A BigInt value clamped to the specified number of bits as an unsigned integer.
     * @throws { RangeError } Throw - RangeError when bits is less than 0 or greater than Double.MAX_SAFE_INTEGER
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static asUintN(bits: long, num: BigInt): BigInt;

    /**
     * Returns whether the BigInt is negative.
     *
     * @returns { boolean } True if negative, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negative(): boolean;

    /**
     * Returns whether the BigInt is positive.
     *
     * @returns { boolean } True if positive (including zero), false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public positive(): boolean;

    /**
     * Adds another BigInt to this one.
     *
     * @param { BigInt } other - The value to add.
     * @returns { BigInt } The result of the addition.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorAdd(other: BigInt): BigInt;

    /**
     * Subtracts another BigInt from this one.
     *
     * @param { BigInt } other - The value to subtract.
     * @returns { BigInt } The result of the subtraction.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorSubtract(other: BigInt): BigInt;

    /**
     * Multiplies this BigInt by another.
     *
     * @param { BigInt } other - The multiplier.
     * @returns { BigInt } The result of the multiplication.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorMultiply(other: BigInt): BigInt;

    /**
     * Divides this BigInt by another.
     *
     * @param { BigInt } other - The divisor.
     * @returns { BigInt } The quotient of the division.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorDivide(other: BigInt): BigInt;

    /**
     * Calculates the remainder of division of this BigInt by another.
     *
     * @param { BigInt } other - The divisor.
     * @returns { BigInt } The remainder.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorModule(other: BigInt): BigInt;

    /**
     * Performs bitwise OR operation with another BigInt.
     *
     * @param { BigInt } other - The other BigInt.
     * @returns { BigInt } The result of the bitwise OR.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseOr(other: BigInt): BigInt;

    /**
     * Performs bitwise AND operation with another BigInt.
     *
     * @param { BigInt } other - The other BigInt.
     * @returns { BigInt } The result of the bitwise AND.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseAnd(other: BigInt): BigInt;

    /**
     * Performs bitwise XOR operation with another BigInt.
     *
     * @param { BigInt } other - The other BigInt.
     * @returns { BigInt } The result of the bitwise XOR.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseXor(other: BigInt): BigInt;

    /**
     * Checks if this BigInt is greater than another.
     *
     * @param { BigInt } other - The value to compare with.
     * @returns { boolean } True if this is greater than other, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorGreaterThan(other: BigInt): boolean;

    /**
     * Checks if this BigInt is less than another.
     *
     * @param { BigInt } other - The value to compare with.
     * @returns { boolean } True if this is less than other, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLessThan(other: BigInt): boolean;

    /**
     * Checks if this BigInt is greater than or equal to another.
     *
     * @param { BigInt } other - The value to compare with.
     * @returns { boolean } True if this is greater than or equal to other, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorGreaterThanEqual(other: BigInt): boolean;

    /**
     * Checks if this BigInt is less than or equal to another.
     *
     * @param { BigInt } other - The value to compare with.
     * @returns { boolean } True if this is less than or equal to other, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLessThanEqual(other: BigInt): boolean;

    /**
     * Shifts the BigInt to the left by a specified number of bits.
     *
     * @param { BigInt } other - The number of bits to shift.
     * @returns { BigInt } The shifted BigInt.
     * @throws { Error } Throw - Error when other is negative or other is greater than BigInt.baseSys - 1.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorLeftShift(other: BigInt): BigInt;

    /**
     * Shifts the BigInt to the right by a specified number of bits.
     *
     * @param { BigInt } other - The number of bits to shift.
     * @returns { BigInt } The shifted BigInt.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorRightShift(other: BigInt): BigInt;

    /**
     * Increments the BigInt value by 1.
     *
     * @returns { BigInt } The incremented value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorIncrement(): BigInt;

    /**
     * Decrements the BigInt value by 1.
     *
     * @returns { BigInt } The decremented value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorDecrement(): BigInt;

    /**
     * Performs bitwise NOT operation on the BigInt.
     *
     * @returns { BigInt } The result of the bitwise NOT.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public operatorBitwiseNot(): BigInt;

    /**
     * Returns the base to the exponent power.
     *
     * @param { BigInt } exponent - The exponent value.
     * @returns { BigInt } The result of base^exponent.
     * @throws { RangeError } Throw - RangeError when exponent is negative.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public pow(exponent: BigInt): BigInt;

    /**
     * Returns the negation of the BigInt.
     *
     * @returns { BigInt } The negated value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negate(): BigInt;

    /**
     * Returns the value of an object as a double
     *
     * @returns { double } The double value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public doubleValue(): double;

    /**
     * Returns the value of an object as a long
     *
     * @returns { long } The long value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getLong(): long;

    /**
     * Return current value clipped to unsigned long
     *
     * @returns { long } The unsigned long value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getULong(): long;

    /**
     * Creates a new instance of BigInt from existing BigInt number
     *
     * @param { BigInt } value - BigInt value.
     * @returns { BigInt } A new BigInt instance from existing BigInt number
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: BigInt): BigInt;

    /**
     * Creates a new instance of BigInt from existing Long number
     *
     * @param { Long } value - BigInt value.
     * @returns { BigInt } A new BigInt instance from existing Long number
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: long): BigInt;

    /**
     * Creates a new instance of BigInt from number instance
     *
     * @param { double } value - number value.
     * @returns { BigInt } A new BigInt instance from number instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: double): BigInt;

    /**
     * Creates a new instance of BigInt from string
     *
     * @param { string } value - string value.
     * @returns { BigInt } A new BigInt instance from string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: string): BigInt;

    /**
     * Creates a new instance of BigInt from boolean
     *
     * @param { boolean } value - boolean value.
     * @returns { BigInt } A new BigInt instance from boolean
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: boolean): BigInt;

    /**
     * Creates a new instance of BigInt from union of bigint/double/string/boolean
     *
     * @param { bigint | double | string | boolean } value - source value.
     * @returns { BigInt } A new BigInt instance from union of bigint/double/string/boolean
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(value: bigint | double | string | boolean): BigInt;
}
