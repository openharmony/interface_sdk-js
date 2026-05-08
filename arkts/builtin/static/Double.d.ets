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
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Double extends Floating implements Comparable<Double> {
    /**
     * Constructs a new Double instance with initial value zero
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor();

    /**
     * Constructs a new Double instance with provided initial value
     *
     * @param { double } value - the initial value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(value: double);

    /**
     * Constructs a new Double instance from BigInt
     *
     * @param { BigInt } value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(value: BigInt);

    /**
     * Constructs a new Double instance from string
     *
     * @param { string } value - string that may contain a number
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(value: string);

    /**
     * Creates a new instance of a Double
     *
     * @returns { Double } A new Double instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
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
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static $_invoke(value: string | Double | BigInt | undefined | null): Double;

    /**
     * Returns value of this instance
     *
     * @returns { double } return the current value convert double value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toDouble(): double;

    /**
     * Returns the primitive as double value
     *
     * @param { double } value - value to cast
     * @returns { double }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
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
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static parseFloat(s: string): double;

    /**
     * parseInt(String) parses from String an integer of radix 10
     *
     * @param { string } s - the string to convert
     * @returns { double } the result of parsing
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
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
   * @returns { double } the result of parsing
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
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
     * @FaAndStageModel
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
     * @FaAndStageModel
     * @since 24 staticonly
     */
    equals(other: Any): boolean;

    /**
     * isNaN(double) checks if double is NaN (not a number)
     *
     * @param { double } v - the double to test
     * @returns { boolean } true if the argument is NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static isNaN(v: double): boolean;

    /**
     * isNaN() checks if the underlying double is NaN (not a number)
     *
     * @returns { boolean } true if the underlying double is NaN
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isNaN(): boolean;

    /**
     * isFinite(double) checks if double is a floating point value (not a NaN or infinity)
     *
     * @param { double } v - the double to test
     * @returns { boolean } true if the argument is a floating point value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static isFinite(v: double): boolean;

    /**
     * isFinite() checks if the underlying double is a floating point value (not a NaN or infinity)
     *
     * @returns { boolean } true if the underlying double is a floating point value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isFinite(): boolean;
}
