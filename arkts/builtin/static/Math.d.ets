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
 * The Math class contains static properties and methods for mathematical constants and functions.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Math {

    /**
     * Smallest integer greater or equal to `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Smallest integer greater or equal to x
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static ceil(x: double): double;

    /**
     * Largest integer less or equal to `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Largest integer less or equal to x
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static floor(x: double): double;

    /**
     * Returns the value of a number rounded to the nearest integer
     *
     * @param { double } x - number to round
     * @returns { double } value of the number rounded to the nearest integer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static round(x: double): double;

    /**
     * Square root of `x`
     *
     * @param { double } x - non-negative number
     * @returns { double } Square root of the given number. If the number is negative, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static sqrt(x: double): double;

    /**
     * Returns minimum value when no arguments are provided
     *
     * @returns { double } Infinity
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static min(): double;

    /**
     * Returns minimum value for a single argument
     *
     * @param { double } val - a number
     * @returns { double } the argument itself
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static min(val: double): double;

    /**
     * Returns the smaller of two numbers
     *
     * @param { double } val1 - first number
     * @param { double } val2 - second number
     * @returns { double } the smaller of the two numbers. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static min(val1: double, val2: double): double;

    /**
     * Returns the minimum of zero or more numbers
     *
     * @param { double[] } values - a set of numbers
     * @returns { double } the minimum of the given numbers. If no arguments are provided,
     *     returns Infinity. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static min(...values: double[]): double;

    /**
     * Returns maximum value when no arguments are provided
     *
     * @returns { double } -Infinity
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static max(): double;

    /**
     * Returns maximum value for a single argument
     *
     * @param { double } val - a number
     * @returns { double } the argument itself
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static max(val: double): double;

    /**
     * Returns the larger of two numbers
     *
     * @param { double } val1 - first number
     * @param { double } val2 - second number
     * @returns { double } the larger of the two numbers. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static max(val1: double, val2: double): double;

    /**
     * Returns the maximum of zero or more numbers
     *
     * @param { double[] } values - a set of numbers
     * @returns { double } the maximum of the given numbers. If no arguments are provided,
     *     returns -Infinity. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static max(...values: double[]): double;

    /**
     * Absolute value
     *
     * @param { byte } x - Some number value
     * @returns { byte } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: byte): byte;

    /**
     * Absolute value
     *
     * @param { short } x - Some number value
     * @returns { short } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: short): short;

    /**
     * Absolute value
     *
     * @param { int } x - Some number value
     * @returns { int } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: int): int;

    /**
     * Absolute value
     *
     * @param { long } x - Some number value
     * @returns { long } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: long): long;

    /**
     * Absolute value
     *
     * @param { float } x - Some number value
     * @returns { float } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: float): float;

    /**
     * Absolute value
     *
     * @param { double } x - Some number value
     * @returns { double } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static abs(x: double): double;

    /**
     * Base 2 logarithm of `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Base 2 logarithm of x
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static log2(x: double): double;

    /**
     * Base 2 logarithm of `x`
     *
     * @param { float } x - arbitrary number
     * @returns { float } Base 2 logarithm of x
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static log2(x: float): float;

    /**
     * Returns base raised to the power of exponent, i.e., base^exponent
     *
     * @param { double } u - base
     * @param { double } v - exponent
     * @returns { double } base raised to the power of exponent
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static pow(u: double, v: double): double;

    /**
     * Returns a pseudo-random number in the range [0.0, 1.0)
     *
     * @returns { double } a pseudo-random double precision floating point number greater than
     *     or equal to 0.0 and less than 1.0
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static random(): double;
}
