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
 * The Math class contains static properties and methods for mathematical constants and functions.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Math {
  /**
   * PI as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly PI: double = 3.141592653589793;

  /**
   * Euler number as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly E: double = 2.718281828459045;

  /**
   * Natural logarithm of 10 as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LN10: double = 2.302585092994046;

  /**
   * Natural logarithm of 2 as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LN2: double = 0.6931471805599453;

  /**
   * Logarithm base 2 of Euler number as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOG2E: double = 1.4426950408889634;

  /**
   * Logarithm base 10 of Euler number as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOG10E: double = 0.4342944819032518;

  /**
   * Square root of 1/2 as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly SQRT1_2: double = 0.7071067811865476;

  /**
   * Square root of 2 as double value.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly SQRT2: double = 1.4142135623730951;
    /**
     * Smallest integer greater or equal to `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Smallest integer greater or equal to x
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static ceil(x: double): double;

    /**
     * Largest integer less or equal to `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Largest integer less or equal to x
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static floor(x: double): double;

    /**
     * Returns the value of a number rounded to the nearest integer
     *
     * @param { double } x - number to round
     * @returns { double } value of the number rounded to the nearest integer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static round(x: double): double;

    /**
     * Square root of `x`
     *
     * @param { double } x - non-negative number
     * @returns { double } Square root of the given number. If the number is negative, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static sqrt(x: double): double;

    /**
     * Returns minimum value when no arguments are provided
     *
     * @returns { double } Infinity
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(): double;

    /**
     * Returns minimum value for a single argument
     *
     * @param { double } val - a number
     * @returns { double } the argument itself
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(val: double): double;

    /**
     * Returns the smaller of two numbers
     *
     * @param { double } val1 - first number
     * @param { double } val2 - second number
     * @returns { double } the smaller of the two numbers. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(val1: double, val2: double): double;

    /**
     * Returns the minimum of zero or more numbers
     *
     * @param { double[] } values - a set of numbers
     * @returns { double } the minimum of the given numbers. If no arguments are provided,
     *     returns Infinity. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(...values: double[]): double;

    /**
     * Returns maximum value when no arguments are provided
     *
     * @returns { double } -Infinity
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(): double;

    /**
     * Returns maximum value for a single argument
     *
     * @param { double } val - a number
     * @returns { double } the argument itself
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(val: double): double;

    /**
     * Returns the larger of two numbers
     *
     * @param { double } val1 - first number
     * @param { double } val2 - second number
     * @returns { double } the larger of the two numbers. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(val1: double, val2: double): double;

    /**
     * Returns the maximum of zero or more numbers
     *
     * @param { double[] } values - a set of numbers
     * @returns { double } the maximum of the given numbers. If no arguments are provided,
     *     returns -Infinity. If any argument is NaN, returns NaN
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(...values: double[]): double;

    /**
     * Absolute value
     *
     * @param { byte } x - Some number value
     * @returns { byte } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: byte): byte;

    /**
     * Absolute value
     *
     * @param { short } x - Some number value
     * @returns { short } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: short): short;

    /**
     * Absolute value
     *
     * @param { int } x - Some number value
     *     <br>The value should be an integer.
     * @returns { int } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: int): int;

    /**
     * Absolute value
     *
     * @param { long } x - Some number value
     * @returns { long } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: long): long;

    /**
     * Absolute value
     *
     * @param { float } x - Some number value
     * @returns { float } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: float): float;

    /**
     * Absolute value
     *
     * @param { double } x - Some number value
     * @returns { double } Absolute value of `x`
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: double): double;

    /**
     * Base 2 logarithm of `x`
     *
     * @param { double } x - arbitrary number
     * @returns { double } Base 2 logarithm of x
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static log2(x: double): double;

    /**
     * Base 2 logarithm of `x`
     *
     * @param { float } x - arbitrary number
     * @returns { float } Base 2 logarithm of x
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static log2(x: float): float;

    /**
     * Returns base raised to the power of exponent, i.e., base^exponent
     *
     * @param { double } u - base
     * @param { double } v - exponent
     * @returns { double } base raised to the power of exponent
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static pow(u: double, v: double): double;

    /**
     * Returns a pseudo-random number in the range [0.0, 1.0)
     *
     * @returns { double } a pseudo-random double precision floating point number greater than
     *     or equal to 0.0 and less than 1.0
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static random(): double;
      /**
       * Returns the arccosine of x.
       *
       * @param { double } x - Angle in radians.
       * @returns { double } Arccosine of x.
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      public static acos(x: double): double;

  /**
   * Returns the arccosine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Arccosine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acos(x: float): float;

  /**
   * Returns the hyperbolic arccosine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic arccosine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acosh(x: double): double;

  /**
   * Returns the hyperbolic arccosine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic arccosine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acosh(x: float): float;

  /**
   * Returns the arcsine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Arcsine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asin(x: double): double;

  /**
   * Returns the arcsine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Arcsine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asin(x: float): float;

  /**
   * Returns the hyperbolic arcsine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic arcsine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asinh(x: double): double;

  /**
   * Returns the hyperbolic arcsine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic arcsine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asinh(x: float): float;

  /**
   * Returns the arctangent of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Arctangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan(x: double): double;

  /**
   * Returns the arctangent of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Arctangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan(x: float): float;

  /**
   * Returns the angle in the plane (in radians) between the positive x-axis and the ray
   * from (0, 0) to the point (x, y).
   *
   * @param { double } y - The y-coordinate.
   * @param { double } x - The x-coordinate.
   * @returns { double } The angle in radians (between -π and π, inclusive) between the positive x-axis and the
   *     ray from (0, 0) to the point (x, y).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan2(y: double, x: double): double;

  /**
   * Returns the angle in the plane (in radians) between the positive x-axis and the ray
   * from (0, 0) to the point (x, y).
   *
   * @param { float } y - The y-coordinate.
   * @param { float } x - The x-coordinate.
   * @returns { float } The angle in radians (between -π and π, inclusive) between the positive x-axis and the ray
   *     from (0, 0) to the point (x, y).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan2(y: float, x: float): float;

  /**
   * Returns the hyperbolic arctangent of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic arctangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atanh(x: double): double;

  /**
   * Returns the hyperbolic arctangent of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic arctangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atanh(x: float): float;

  /**
   * Returns the cube root of x.
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } Cube root of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cbrt(x: double): double;

  /**
   * Returns the cube root of x.
   *
   * @param { float } x - Arbitrary number.
   * @returns { float } Cube root of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cbrt(x: float): float;

  /**
   * Returns the number of leading zero bits in the 32-bit representation of x.
   *
   * @param { Int } x - 32-bit integer.
   * @returns { Int } Number of leading zero bits in bit representation of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static clz32(x: Int): Int;

  /**
   * Returns the number of leading zero bits in the 32-bit representation of x.
   *
   * @param { double } value - 32-bit integer.
   * @returns { double } Number of leading zero bits in bit representation of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static clz32(value: double): double;

  /**
   * Returns the argument value rounded up to the closest integral power of 2.
   *
   * @param { int } n - 32-bit integer.
   *     <br>The value should be an integer.
   * @returns { int } Argument value rounded up to the closest integral power of 2.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static ceilPow2(n: int): int;

  /**
   * Returns the cosine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Cosine of angle in radians.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cos(x: double): double;

  /**
   * Returns the hyperbolic cosine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic cosine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cosh(x: double): double;

  /**
   * Returns the hyperbolic cosine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic cosine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cosh(x: float): float;

  /**
   * Returns e raised to the power of x.
   *
   * @param { float } x - Power value.
   * @returns { float } E raised to the power of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static exp(x: float): float;

  /**
   * Returns e raised to the power of x.
   *
   * @param { double } x - Power value.
   * @returns { double } E raised to the power of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static exp(x: double): double;

  /**
   * Returns (e raised to power x) minus 1.
   *
   * @param { float } x - Power value.
   * @returns { float } E raised to the power of x, subtracted by 1.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static expm1(x: float): float;

  /**
   * Returns (e raised to power x) minus 1.
   *
   * @param { double } x - Power value.
   * @returns { double } E raised to the power of x, subtracted by 1.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static expm1(x: double): double;

  /**
   * Returns the nearest 32-bit single precision floating point representation of x.
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } Nearest 32-bit single precision floating point representation of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static fround(x: double): double;

  /**
   * Returns the square root of the sum of squares of the arguments.
   *
   * @param { double[] } values - Arbitrary numbers.
   * @returns { double } The square root of the sum of squares of its arguments.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static hypot(...values: double[]): double;

  /**
   * Returns the result of the C-like 32-bit multiplication of the two parameters.
   *
   * @param { double } a - First value.
   * @param { double } b - Second value.
   * @returns { double } The result of (a * b) % 2^32.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static imul(a: double, b: double): double;

  /**
   * Returns the natural logarithm (base e) of x.
   *
   * @param { float } x - Arbitrary number.
   * @returns { float } The natural logarithm (base e) of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log(x: float): float;

  /**
   * Returns the natural logarithm (base e) of x.
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } The natural logarithm (base e) of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log(x: double): double;

  /**
   * Returns the base 10 logarithm of x.
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } The base 10 logarithm of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log10(x: double): double;

  /**
   * Returns the base 10 logarithm of x.
   *
   * @param { float } x - Arbitrary number.
   * @returns { float } The base 10 logarithm of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log10(x: float): float;

  /**
   * Returns the natural logarithm (base e) of (1 + x).
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } The natural logarithm (base e) of (1 + x).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log1p(x: double): double;

  /**
   * Returns the natural logarithm (base e) of (1 + x).
   *
   * @param { float } x - Arbitrary number.
   * @returns { float } The natural logarithm (base e) of (1 + x).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log1p(x: float): float;

  /**
   * Returns the sign of x.
   *
   * @param { double } x - Arbitrary number.
   * @returns { double } -1 if x is negative, 1 if x is positive, 0 if x is close to zero (epsilon is 1e-13).
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sign(x: double): double;

  /**
   * Returns the sine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Sine of angle in radians.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sin(x: double): double;

  /**
   * Returns the hyperbolic sine of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic sine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sinh(x: double): double;

  /**
   * Returns the hyperbolic sine of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic sine of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sinh(x: float): float;

  /**
   * Returns the tangent of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Tangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tan(x: double): double;

  /**
   * Returns the hyperbolic tangent of x.
   *
   * @param { double } x - Angle in radians.
   * @returns { double } Hyperbolic tangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tanh(x: double): double;

  /**
   * Returns the hyperbolic tangent of x.
   *
   * @param { float } x - Angle in radians.
   * @returns { float } Hyperbolic tangent of x.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tanh(x: float): float;

  /**
   * Returns the integer part of x by removing any fractional digits.
   *
   * @param { double } x - Number to be truncated.
   * @returns { double } The integer part of x by removing any fractional digits.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static trunc(x: double): double;
}
