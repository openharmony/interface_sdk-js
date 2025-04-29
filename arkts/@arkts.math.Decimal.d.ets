/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file Defines the Decimal for ArkTS. Decimal support arbitrary precision decimal operation.
 * @kit ArkTS
 */

/**
 * The type uesd to set rounding
 *
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * The type uesd to set rounding
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 18
 */
type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * The type uesd to set rounding
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type Rounding = number;

/**
 * The type uesd to set modulo
 *
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * The type uesd to set modulo
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 18
 */
type Modulo = Rounding | 9;

/**
 * The type uesd to set modulo
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type Modulo = number;

/**
 * The type uesd to denote decimal value
 *
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * The type uesd to denote decimal value
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
type DecimalValue = string | number | Decimal;

/**
 * Provides configuration for decimal.
 *
 * @interface DecimalConfig
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * Provides configuration for decimal.
 *
 * @interface DecimalConfig
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 18
 */
interface DecimalConfig {
  /**
   * The maximum number of significant digits of the result of an operation.
   * Default value: 20
   *
   * @type { number } integer, 1 to 1e+9 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The maximum number of significant digits of the result of an operation.
   * Default value: 20
   *
   * @type { number } integer, 1 to 1e+9 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  precision?: number;
  /**
   * The default rounding mode used when rounding the result of an operation to precision significant digits,
   * and when rounding the return value of the round, toBinary, toDecimalPlaces, toExponential, toFixed,
   * toHexadecimal, toNearest, toOctal, toPrecision and toSignificantDigits methods.
   * Default value: 4 (ROUND_HALF_UP)
   *
   * @type { number } integer, integer, 0 to 8 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The default rounding mode used when rounding the result of an operation to precision significant digits,
   * and when rounding the return value of the round, toBinary, toDecimalPlaces, toExponential, toFixed,
   * toHexadecimal, toNearest, toOctal, toPrecision and toSignificantDigits methods.
   * Default value: 4 (ROUND_HALF_UP)
   *
   * @type { number } integer, integer, 0 to 8 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  rounding?: Rounding;
  /**
   * The negative exponent value at and below which toString returns exponential notation.
   * Default value: -7
   *
   * @type { number } integer, -9e15 to 0 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The negative exponent value at and below which toString returns exponential notation.
   * Default value: -7
   *
   * @type { number } integer, -9e15 to 0 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toExpNeg?: number;
  /**
   * The positive exponent value at and above which toString returns exponential notation.
   * Default value: 20
   *
   * @type { number } integer, 0 to 9e15 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The positive exponent value at and above which toString returns exponential notation.
   * Default value: 20
   *
   * @type { number } integer, 0 to 9e15 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toExpPos?: number;
  /**
   * The negative exponent limit, i.e. the exponent value below which underflow to zero occurs.
   * Default value: -9e15
   *
   * @type { number } integer, -9e15 to 0 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The negative exponent limit, i.e. the exponent value below which underflow to zero occurs.
   * Default value: -9e15
   *
   * @type { number } integer, -9e15 to 0 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  minE?: number;
  /**
   * The positive exponent limit, i.e. the exponent value above which overflow to Infinity occurs.
   * Default value: 9e15
   *
   * @type { number } integer, 0 to 9e15 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The positive exponent limit, i.e. the exponent value above which overflow to Infinity occurs.
   * Default value: 9e15
   *
   * @type { number } integer, 0 to 9e15 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  maxE?: number;
  /**
   * The value that determines whether cryptographically-secure pseudo-random number generation is used.
   * Default value: false
   *
   * @type { boolean }
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The value that determines whether cryptographically-secure pseudo-random number generation is used.
   * Default value: false
   *
   * @type { boolean }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  crypto?: boolean;
  /**
   * The modulo mode used when calculating the modulus: a mod n.
   * Default value: 1 (ROUND_DOWN)
   *
   * @type { number } integer, 0 to 9 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The modulo mode used when calculating the modulus: a mod n.
   * Default value: 1 (ROUND_DOWN)
   *
   * @type { number } integer, 0 to 9 inclusive
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  modulo?: Modulo;
  /**
   * If object has a 'defaults' property with value true then the new constructor will use the default configuration.
   * Default value: false
   *
   * @type { boolean }
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * If object has a 'defaults' property with value true then the new constructor will use the default configuration.
   * Default value: false
   *
   * @type { boolean }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  defaults?: boolean;
}

/**
 * An arbitrary-precision Decimal type
 *
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * An arbitrary-precision Decimal type
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class Decimal {
  /**
   * The numbers of decimal digits.
   *
   * @type { number[] }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The numbers of decimal digits.
   *
   * @type { number[] }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  readonly d: number[];

  /**
   * The numbers of decimal digits.
   *
   * @type { Array<number> | null }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  readonly d: Array<number> | null;

  /**
   * The number of decimal exponent.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The number of decimal exponent.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly e: number;

  /**
   * The number of decimal sign.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * The number of decimal sign.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly s: number;

  /**
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(n: DecimalValue);

  /**
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  abs(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  floor(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  ceil(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  trunc(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal clamped to the range
   * delineated by `min` and `max`.
   *
   * @param { DecimalValue } min {number | string | Decimal}
   * @param { DecimalValue } max {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal clamped to the range
   * delineated by `min` and `max`.
   *
   * @param { DecimalValue } min {number | string | Decimal}
   * @param { DecimalValue } max {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  clamp(min: DecimalValue, max: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal plus `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal plus `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  add(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal minus `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal minus `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  sub(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is this Decimal times `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is this Decimal times `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  mul(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal divided by `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal divided by `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  div(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal modulo `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal }the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal modulo `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal }the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  mod(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  sqrt(): Decimal;

  /**
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  cbrt(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal raised to the power `n`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal raised to the power `n`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  pow(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  exp(): Decimal;

  /**
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  log(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  ln(): Decimal;

  /**
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  cos(): Decimal;

  /**
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  sin(): Decimal;

  /**
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  tan(): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  cosh(): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  sinh(): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  tanh(): Decimal;

  /**
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  acos(): Decimal;

  /**
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  asin(): Decimal;

  /**
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  atan(): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  acosh(): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  asinh(): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  atanh(): Decimal;

  /**
   * Return
   *   1    if the value of this Decimal is greater than the value of `n`,
   *  -1    if the value of this Decimal is less than the value of `n`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { number } the number type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return
   *   1    if the value of this Decimal is greater than the value of `n`,
   *  -1    if the value of this Decimal is less than the value of `n`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { number } the number type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  comparedTo(n: DecimalValue): number;

  /**
   * Return true if the value of this Decimal is equal to the value of `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is equal to the value of `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  equals(n: DecimalValue): boolean;

  /**
   * Return true if the value of this Decimal is greater than the value of `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is greater than the value of `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  greaterThan(n: DecimalValue): boolean;

  /**
   * Return true if the value of this Decimal is greater than or equal to the value of `n`,
   * otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is greater than or equal to the value of `n`,
   * otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  greaterThanOrEqualTo(n: DecimalValue): boolean;

  /**
   * Return true if the value of this Decimal is less than `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is less than `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  lessThan(n: DecimalValue): boolean;

  /**
   * Return true if the value of this Decimal is less than or equal to `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is less than or equal to `n`, otherwise return false.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  lessThanOrEqualTo(n: DecimalValue): boolean;

  /**
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isFinite(): boolean;

  /**
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isInteger(): boolean;

  /**
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isNaN(): boolean;

  /**
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isNegative(): boolean;

  /**
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isPositive(): boolean;

  /**
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isZero(): boolean;

  /**
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `n`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `n`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  dividedToIntegerBy(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by -1.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by -1.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  negate(): Decimal;

  /**
   * Return a string representing the value of this Decimal in base 2.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 2.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toBinary(): string;

  /**
   * Return a string representing the value of this Decimal in base 2, round to `significantDigits`
   * significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 2, round to `significantDigits`
   * significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toBinary(significantDigits: number): string;

  /**
   * Return a string representing the value of this Decimal in base 2, round to `significantDigits`
   * significant digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 2, round to `significantDigits`
   * significant digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toBinary(significantDigits: number, rounding: Rounding): string;

  /**
   * Return a string representing the value of this Decimal in base 8.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 8.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toOctal(): string;

  /**
   * Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant.
   *
   * @param { number } significantDigits {number | string | Decimal}
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant.
   *
   * @param { number } significantDigits {number | string | Decimal}
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toOctal(significantDigits: number): string;

  /**
   * Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant
   * digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits {number | string | Decimal}
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant
   * digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits {number | string | Decimal}
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toOctal(significantDigits: number, rounding: Rounding): string;

  /**
   * Return a string representing the value of this Decimal in base 16
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 16
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toHexadecimal(): string;

  /**
   * Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toHexadecimal(significantDigits: number): string;

  /**
   * Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant
   * digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant
   * digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toHexadecimal(significantDigits: number, rounding: Rounding): string;

  /**
   * Return a new Decimal whose value is the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  toDecimalPlaces(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`
   * decimal places.
   *
   * @param { number } decimalPlaces Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`
   * decimal places.
   *
   * @param { number } decimalPlaces Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  toDecimalPlaces(decimalPlaces: number): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`
   * decimal places using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`
   * decimal places using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  toDecimalPlaces(decimalPlaces: number, rounding: Rounding): Decimal;

  /**
   * Return a string representing the value of this Decimal in exponential notation.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in exponential notation.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toExponential(): string;

  /**
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `decimalPlaces` fixed decimal places.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `decimalPlaces` fixed decimal places.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toExponential(decimalPlaces: number): string;

  /**
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `decimalPlaces` fixed decimal places using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `decimalPlaces` fixed decimal places using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toExponential(decimalPlaces: number, rounding: Rounding): string;

  /**
   * Return a string representing the value of this Decimal in normal (fixed-point).
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in normal (fixed-point).
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toFixed(): string;

  /**
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `decimalPlaces` fixed decimal places.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `decimalPlaces` fixed decimal places.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toFixed(decimalPlaces: number): string;

  /**
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `decimalPlaces` fixed decimal places and rounded using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `decimalPlaces` fixed decimal places and rounded using rounding mode `rounding`.
   *
   * @param { number } decimalPlaces Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toFixed(decimalPlaces: number, rounding: Rounding): string;

  /**
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * @returns { Decimal[] } the Decimal[] type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * @returns { Decimal[] } the Decimal[] type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toFraction(): Decimal[];

  /**
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator. The denominator will be a positive non-zero value
   * less than or equal to `max_denominator`.
   *
   * @param { DecimalValue } maxDenominator {number | string | Decimal}
   * @returns { Decimal[] } the Decimal[] type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator. The denominator will be a positive non-zero value
   * less than or equal to `max_denominator`.
   *
   * @param { DecimalValue } maxDenominator {number | string | Decimal}
   * @returns { Decimal[] } the Decimal[] type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toFraction(maxDenominator: DecimalValue): Decimal[];

  /**
   * Returns a new Decimal whose value is the nearest multiple of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Returns a new Decimal whose value is the nearest multiple of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toNearest(n: DecimalValue): Decimal;

  /**
   * Returns a new Decimal whose value is the nearest multiple of `n` in the direction of rounding
   * mode `rounding`, to the value of this Decimal.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Returns a new Decimal whose value is the nearest multiple of `n` in the direction of rounding
   * mode `rounding`, to the value of this Decimal.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toNearest(n: DecimalValue, rounding: Rounding): Decimal;

  /**
   * Return a string representing the value of this Decimal.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toPrecision(): string;

  /**
   * Return a string representing the value of this Decimal rounded to `significantDigits` significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal rounded to `significantDigits` significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toPrecision(significantDigits: number): string;

  /**
   * Return a string representing the value of this Decimal rounded to `significantDigits` significant digits
   * using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal rounded to `significantDigits` significant digits
   * using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toPrecision(significantDigits: number, rounding: Rounding): string;

  /**
   * Return a new Decimal whose value is the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal.
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toSignificantDigits(): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`
   * significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`
   * significant digits.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toSignificantDigits(significantDigits: number): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`
   * significant digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`
   * significant digits using rounding mode `rounding`.
   *
   * @param { number } significantDigits Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param { Rounding } rounding Rounding mode. Integer, 0 to 8 inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  toSignificantDigits(significantDigits: number, rounding: Rounding): Decimal;

  /**
   * Return the value of this Decimal converted to a number primitive. Zero keeps its sign.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the value of this Decimal converted to a number primitive. Zero keeps its sign.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  toNumber(): number;

  /**
   * Return a string representing the value of this Decimal.
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal.
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  toString(): string;

  /**
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  valueOf(): string;

  /**
   * Return the number of decimal places of the value of this Decimal.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the number of decimal places of the value of this Decimal.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  decimalPlaces(): number;

  /**
   * Return the number of significant digits of the value of this Decimal.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the number of significant digits of the value of this Decimal.
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  precision(): number;

  /**
   * Return the number of significant digits of the value of this Decimal, whether to count 
   * integer-part trailing zeros.
   *
   * @param { boolean | number } includeZeros Whether to count integer-part trailing zeros: true, false,
   * 1 or 0.
   * @returns { number } the number type
   * @throws { BusinessError } 10200001 - The value of `includeZeros` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the number of significant digits of the value of this Decimal, whether to count
   * integer-part trailing zeros.
   *
   * @param { boolean | number } includeZeros Whether to count integer-part trailing zeros: true, false,
   * 1 or 0.
   * @returns { number } the number type
   * @throws { BusinessError } 10200001 - The value of `includeZeros` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  precision(includeZeros: boolean | number): number;

  /**
   * Return a new Decimal whose value is the absolute value of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the absolute value of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static abs(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `n` round to an integer using `ROUND_FLOOR`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `n` round to an integer using `ROUND_FLOOR`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static floor(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `n` rounded to an integer using `ROUND_CEIL`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `n` rounded to an integer using `ROUND_CEIL`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static ceil(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `n` truncated to an integer.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `n` truncated to an integer.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static trunc(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `n` clamped to the range delineated by `min` and `max`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { DecimalValue } min {number | string | Decimal}
   * @param { DecimalValue } max {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `n` clamped to the range delineated by `min` and `max`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { DecimalValue } min {number | string | Decimal}
   * @param { DecimalValue } max {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static clamp(n: DecimalValue, min: DecimalValue, max: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static add(x: DecimalValue, y: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * Only the result is rounded, not the intermediate calculations.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * Only the result is rounded, not the intermediate calculations.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sum(...n: DecimalValue[]): Decimal;

  /**
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sub(x: DecimalValue, y: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static mul(x: DecimalValue, y: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static div(x: DecimalValue, y: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } x {number | string | Decimal}
   * @param { DecimalValue } y {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static mod(x: DecimalValue, y: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the square root of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the square root of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sqrt(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the cube root of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the cube root of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static cbrt(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is `base` raised to the power `exponent`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } base {number | string | Decimal} The base.
   * @param { DecimalValue } exponent {number | string | Decimal} The exponent.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `base` raised to the power `exponent`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } base {number | string | Decimal} The base.
   * @param { DecimalValue } exponent {number | string | Decimal} The exponent.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static pow(base: DecimalValue, exponent: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the natural exponential of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the natural exponential of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static exp(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the log of `n` to the base `base`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { DecimalValue } base {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the log of `n` to the base `base`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @param { DecimalValue } base {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static log(n: DecimalValue, base: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the natural logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the natural logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static ln(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the base 2 logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the base 2 logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static log2(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the base 10 logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the base 10 logarithm of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static log10(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the cosine of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the cosine of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static cos(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the sine of `n`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the sine of `n`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sin(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the tangent of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the tangent of `n`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static tan(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic cosine of `n`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic cosine of `n`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static cosh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic sine of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic sine of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sinh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the hyperbolic tangent of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the hyperbolic tangent of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static tanh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the arccosine in radians of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arccosine in radians of `n`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static acos(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the arcsine in radians of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arcsine in radians of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static asin(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the arctangent in radians of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arctangent in radians of `n`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static atan(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static acosh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static asinh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `n`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal} A value in radians.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static atanh(n: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } y {number | string | Decimal} The y-coordinate.
   * @param { DecimalValue } x {number | string | Decimal} The x-coordinate.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue } y {number | string | Decimal} The y-coordinate.
   * @param { DecimalValue } x {number | string | Decimal} The x-coordinate.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static atan2(y: DecimalValue, x: DecimalValue): Decimal;

  /**
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue[] } n {number | string | Decimal} Decimal
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * @param { DecimalValue[] } n {number | string | Decimal} Decimal
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static hypot(...n: DecimalValue[]): Decimal;

  /**
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static max(...n: DecimalValue[]): Decimal;

  /**
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * @param { DecimalValue[] } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static min(...n: DecimalValue[]): Decimal;

  /**
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1.
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static random(): Decimal;

  /**
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `significantDigits` significant digits (or less if trailing zeros are produced).
   *
   * @param { DecimalValue } significantDigits {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `significantDigits` significant digits (or less if trailing zeros are produced).
   *
   * @param { DecimalValue } significantDigits {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static random(significantDigits: number): Decimal;

  /**
   * Return the sign of the passed value to the method.
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return the sign of the passed value to the method.
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static sign(n: DecimalValue): number;

  /**
   * Return a new Decimal whose value is `n` rounded to an integer using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Return a new Decimal whose value is `n` rounded to an integer using rounding mode `rounding`.
   *
   * @param { DecimalValue } n {number | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static round(n: DecimalValue): Decimal;

  /**
   * Configures the 'global' settings for this particular Decimal constructor.
   *
   * @param { DecimalConfig } An object with one or more of the following properties,
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   * @returns { void }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `DecimalConfig.properties` is out of range.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Configures the 'global' settings for this particular Decimal constructor.
   *
   * @param { DecimalConfig } An object with one or more of the following properties,
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   * @returns { void }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                    1. Incorrect parameter types;
   *                                    2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `DecimalConfig.properties` is out of range.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static set(config: DecimalConfig): void;

  /**
   * Rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_UP : 0;

  /**
   * Rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_UP: number;

  /**
   * Rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_DOWN : 1;

  /**
   * Rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_DOWN: number;

  /**
   * Rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_CEILING : 2;

  /**
   * Rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_CEILING: number;

  /**
   * Rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_FLOOR : 3;

  /**
   * Rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_FLOOR: number;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards nearest neighbour. If equidistant, rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_HALF_UP : 4;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds away from zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_HALF_UP: number;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_HALF_DOWN : 5;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards zero
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_HALF_DOWN: number;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_HALF_EVEN : 6;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_HALF_EVEN: number;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_HALF_CEILING : 7;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_HALF_CEILING: number;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly ROUND_HALF_FLOOR : 8;

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly ROUND_HALF_FLOOR: number;

  /**
   * Not a rounding mode, see modulo
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Not a rounding mode, see modulo
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  static readonly EUCLIDEAN : 9;

  /**
   * Not a rounding mode, see modulo
   *
   * @readonly
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static readonly EUCLIDEAN: number;
}
export default Decimal;
