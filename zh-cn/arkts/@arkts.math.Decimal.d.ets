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
 * @file 定义ArkTS的Decimal类型。Decimal支持任意精度的十进制运算。
 * @kit ArkTS
 */

/**
 * 表示可设置的舍入类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * 表示可设置的舍入类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 static
 */
type Rounding = int;

/**
 * 表示可设置的取模方法舍入类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
type Modulo = Rounding | 9;

/**
 * 表示可设置的取模方法舍入类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 static
 */
type Modulo = int;

/**
 * 表示用于构建Decimal的参数类型。
 *
 * @unionmember { string }
 * @unionmember { double }
 * @unionmember { Decimal }
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
type Value = string | double | Decimal;

/**
 * 提供Decimal的配置属性，可使用Decimal.set方法进行配置。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface DecimalConfig {
  /**
   * 运算结果的最大有效位数。
   * 默认值：20。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  precision?: double;
  /**
   * 舍入模式，用于将运算结果舍入到precision位有效数字，以及作为round、toBinary、toDecimalPlaces、toExponential、toFixed、
   * toHexadecimal、toNearest、toOctal、toPrecision和toSignificantDigits方法返回值的默认舍入模式。
   * 默认值：4（ROUND_HALF_UP）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  rounding?: Rounding;
  /**
   * 指数表示法的负指数值的极限值，若Decimal的负指数小于等于该值时，使用科学计数法表示。
   * 默认值：-7。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toExpNeg?: double;
  /**
   * 指数表示法的正指数值的极限值，若Decimal的正指数大于等于该值时，使用科学计数法表示。
   * 默认值：21。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toExpPos?: double;
  /**
   * 负指数极限，若Decimal的指数值小于该值，会下溢到零。
   * 默认值：-9e15。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  minE?: double;
  /**
   * 正指数极限，若Decimal的指数值大于该值，会溢出至无穷大。
   * 默认值：9e15。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  maxE?: double;
  /**
   * 确定是否使用加密安全伪随机数生成的值。
   * 默认值：false。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  crypto?: boolean;
  /**
   * 模计算时使用的舍入模式，即计算a mod n时的舍入模式。
   * 默认值：1（ROUND_DOWN）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  modulo?: Modulo;
  /**
   * 表示未指定的属性是否被设置为默认值，true表示使用默认值。
   * 默认值：false。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  defaults?: boolean;
}

/**
 * 任意精度的Decimal类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class Decimal {
  /**
   * digits：表示Decimal数整数部分和小数部分的数组。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  readonly d: number[];

  /**
   * digits：表示Decimal数整数部分和小数部分的数组。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get d(): Array<double> | null;

  /**
   * exponent：表示Decimal数的十进制指数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  get e(): double;

  /**
   * sign：表示Decimal数的符号位，0表示正数，1表示负数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  get s(): double;

  /**
   * Decimal的构造函数。
   *
   * @param { Value } n {double | string | Decimal}
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor(n: Value);

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的绝对值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  abs(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal向负无穷方向舍入得到的结果。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  floor(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal向正无穷方向舍入得到的结果。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  ceil(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal截断为整数部分。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  trunc(): Decimal;

  /**
   * 返回一个将Decimal值限制在min到max范围内的Decimal对象。如果值大于max，返回max；如果值小于min，返回min；否则，返回原值。
   *
   * @param { Value } min {double | string | Decimal}
   * @param { Value } max {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  clamp(min: Value, max: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal的值加上n。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  add(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal的值减去n。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  sub(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal的值乘以n。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  mul(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal的值除以n。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  div(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是将此Decimal的值除以n后的模。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal }the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  mod(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是当前Decimal的平方根。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  sqrt(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是当前Decimal对象的立方根。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  cbrt(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是这个Decimal值的n次幂。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  pow(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal值的自然指数（即以e为底，此Decimal值为指数的幂）。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  exp(): Decimal;

  /**
   * 返回一个对数运算后的Decimal对象，其值是以n为底的对数值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  log(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal值的自然对数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  ln(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的余弦值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  cos(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的正弦值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  sin(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的正切值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  tan(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的双曲余弦值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  cosh(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的双曲正弦值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  sinh(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的双曲正切值。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  tanh(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的反余弦值。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  acos(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的反正弦值。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  asin(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal的反正切值。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  atan(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal值的双曲余弦的倒数。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  acosh(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal值的双曲正弦的倒数。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  asinh(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是此Decimal值的双曲正切的倒数。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  atanh(): Decimal;

  /**
   * Decimal的比较方法。
   * 1    如果此Decimal大于n的值，
   * -1    如果此Decimal小于n的值，
   * 0    如果两者的值相等，
   * NaN  如果两者中任一Decimal的值为NaN。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { double } the number type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  comparedTo(n: Value): double;

  /**
   * 返回此Decimal是否等于比较值n，相等返回true，否则返回false。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  equals(n: Value): boolean;

  /**
   * 返回此Decimal是否大于比较值n，大于返回true，否则返回false。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  greaterThan(n: Value): boolean;

  /**
   * 返回此Decimal是否大于等于比较值n，大于等于返回true，否则返回false。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  greaterThanOrEqualTo(n: Value): boolean;

  /**
   * 返回此Decimal是否小于比较值n，小于返回true，否则返回false。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  lessThan(n: Value): boolean;

  /**
   * 返回此Decimal是否小于等于比较值n，小于等于返回true，否则返回false。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  lessThanOrEqualTo(n: Value): boolean;

  /**
   * 返回此Decimal是否为有限值，是有限值返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isFinite(): boolean;

  /**
   * 返回此Decimal是否为整数，是整数返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isInteger(): boolean;

  /**
   * 返回此Decimal是否为无效值（NaN），是NaN返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isNaN(): boolean;

  /**
   * 返回此Decimal是否为负数（区分正负零），是负数返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isNegative(): boolean;

  /**
   * 返回此Decimal是否为正数（区分正负零），是正数返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isPositive(): boolean;

  /**
   * 返回此Decimal是否为0或是-0，是返回true，否则返回false。
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isZero(): boolean;

  /**
   * 返回该Decimal除以n后获得的整数部分。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  dividedToIntegerBy(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值将此Decimal的值乘以-1。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  negate(): Decimal;

  /**
   * 将Decimal转换为二进制表示的字符串。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toBinary(): string;

  /**
   * 将Decimal转换为二进制表示的字符串，可按照significantDigits设置有效数字。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toBinary(significantDigits: double): string;

  /**
   * 将Decimal转换为二进制表示的字符串，可按照significantDigits设置有效数字，可按照rounding设置舍入模式。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toBinary(significantDigits: double, rounding: Rounding): string;

  /**
   * 将Decimal转换为八进制表示的字符串。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toOctal(): string;

  /**
   * 将Decimal转换为八进制表示的字符串，可按照significantDigits设置有效数字。
   *
   * @param { double } significantDigits {double | string | Decimal}
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toOctal(significantDigits: double): string;

  /**
   * 将Decimal转换为八进制表示的字符串，可按照significantDigits设置有效数字，可按照rounding设置舍入模式。
   *
   * @param { double } significantDigits {double | string | Decimal}
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toOctal(significantDigits: double, rounding: Rounding): string;

  /**
   * 将Decimal转换为十六进制表示的字符串。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toHexadecimal(): string;

  /**
   * 将Decimal转换为十六进制表示的字符串，可按照significantDigits设置有效数字。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toHexadecimal(significantDigits: double): string;

  /**
   * 将Decimal转换为十六进制表示的字符串，可按照significantDigits设置有效数字，可按照rounding设置舍入模式。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toHexadecimal(significantDigits: double, rounding: Rounding): string;

  /**
   * 返回一个保留小数点后指定位数的Decimal对象，不进行小数的取舍。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toDecimalPlaces(): Decimal;

  /**
   * 返回一个保留小数点后指定位数的Decimal对象，可按照decimalPlaces设置小数位数。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toDecimalPlaces(decimalPlaces: double): Decimal;

  /**
   * 返回一个保留小数点后指定位数的Decimal对象，可按照decimalPlaces设置小数位数，可按照rounding设置舍入模式。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toDecimalPlaces(decimalPlaces: double, rounding: Rounding): Decimal;

  /**
   * 将数值转换为指数表示法的字符串，不进行小数部分的舍入。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toExponential(): string;

  /**
   * 将数值转换为指数表示法的字符串，可按照decimalPlaces设置小数位数。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toExponential(decimalPlaces: double): string;

  /**
   * 将数值转换为指数表示法的字符串，可按照decimalPlaces设置小数位数，可按照rounding设置舍入模式。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toExponential(decimalPlaces: double, rounding: Rounding): string;

  /**
   * 将数值转换为十进制定点模式表示的字符串，不进行小数的取舍。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toFixed(): string;

  /**
   * 将数值转换为十进制定点模式表示的字符串，可按照decimalPlaces设置小数位数。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces` is out of range.
   * @syscap SystemCapability.Utils.Lang [since 18]
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toFixed(decimalPlaces: double): string;

  /**
   * 将数值转换为十进制定点模式表示的字符串，可按照decimalPlaces设置小数位数，可按照rounding设置舍入模式。
   *
   * @param { double } decimalPlaces 转换时保留的小数点后有效位数。取值范围为[0, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `decimalPlaces | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toFixed(decimalPlaces: double, rounding: Rounding): string;

  /**
   * 转换为分数表示的数。返回一个长度固定为2的Decimal数组，分别表示分子和分母。
   *
   * @returns { Decimal[] } the Decimal[] type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toFraction(): Decimal[];

  /**
   * 转换为分数表示的数，可以通过maxDenominator设置最大分母值。返回一个长度固定为2的Decimal数组，分别表示分子和分母。
   *
   * @param { Value } maxDenominator {double | string | Decimal}
   * @returns { Decimal[] } the Decimal[] type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toFraction(maxDenominator: Value): Decimal[];

  /**
   * 返回一个新的Decimal对象，此Decimal为指定值n乘以一个倍数后与原Decimal最接近的值。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toNearest(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，此Decimal为指定值n乘以一个倍数后与原Decimal最接近的值，可按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toNearest(n: Value, rounding: Rounding): Decimal;

  /**
   * 将Decimal对象转换为字符串。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toPrecision(): string;

  /**
   * 将数值转换为字符串，可按照significantDigits设置有效数字。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toPrecision(significantDigits: double): string;

  /**
   * 将数值转换为字符串，可按照significantDigits设置有效数字，可按照rounding设置舍入模式。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { string } the string type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toPrecision(significantDigits: double, rounding: Rounding): string;

  /**
   * 返回一个按照保留有效数字转换的Decimal对象。
   *
   * @returns { Decimal } the Decimal type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toSignificantDigits(): Decimal;

  /**
   * 返回一个按照保留有效数字转换的Decimal对象，可按照significantDigits设置有效数字。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toSignificantDigits(significantDigits: double): Decimal;

  /**
   * 返回一个按照保留有效数字转换的Decimal对象，可按照significantDigits设置有效数字，可按照rounding设置舍入模式。
   *
   * @param { double } significantDigits 转换时保留的有效数字。取值范围为[1, 1e9]的整数。
   * @param { Rounding } rounding 转换时使用的舍入模式。取值范围为0到8的整数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200001 - The value of `significantDigits | rounding` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toSignificantDigits(significantDigits: double, rounding: Rounding): Decimal;

  /**
   * 将值转换为number类型。零保留其符号。
   *
   * @returns { double } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toNumber(): double;

  /**
   * 返回一个字符串，表示此 Decimal 的值。如果此 Decimal 的正指数等于或大于toExpPos，或负指数等于或小于toExpNeg，则将返回指数表示法。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toString(): string;

  /**
   * 返回一个字符串，表示此 Decimal 的值。与toString不同，负零将包含负号。
   *
   * @returns { string } the string type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  valueOf(): string;

  /**
   * 返回Decimal对象的小数位数。
   *
   * @returns { double } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  decimalPlaces(): double;

  /**
   * 返回Decimal对象的有效数字位数。
   *
   * @returns { double } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  precision(): double;

  /**
   * 返回Decimal对象的有效数字位数，可通过includeZeros判断是否计算整数部分的尾随零。
   *
   * @param { boolean | int } includeZeros 是否计算整数部分尾随零。true或1表示计算，false或0表示不计算。
   * @returns { double } the number type
   * @throws { BusinessError } 10200001 - The value of `includeZeros` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  precision(includeZeros: boolean | int): double;

  /**
   * 返回一个新的Decimal对象，Decimal的值为参数n的绝对值。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static abs(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为使用ROUND_FLOOR将n舍入为整数的结果。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static floor(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为使用ROUND_CEIL将n舍入为整数的结果。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static ceil(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为将n截断为整数的结果。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static trunc(n: Value): Decimal;

  /**
   * 返回一个值为将n限制在min到max范围内的Decimal对象。当大于限制的最大值时返回max，小于限制的最小值时返回min，在范围内返回值不变。
   *
   * @param { Value } n {double | string | Decimal}
   * @param { Value } min {double | string | Decimal}
   * @param { Value } max {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `min` is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static clamp(n: Value, min: Value, max: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为x加y的和。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } x {double | string | Decimal}
   * @param { Value } y {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static add(x: Value, y: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为参数的和。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * 仅对结果进行舍入，不对中间计算结果进行舍入。
   *
   * @param { Value[] } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sum(...n: Value[]): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为x减y的差。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } x {double | string | Decimal}
   * @param { Value } y {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sub(x: Value, y: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为x乘以y的积。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } x {double | string | Decimal}
   * @param { Value } y {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static mul(x: Value, y: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为x除以y的商。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } x {double | string | Decimal}
   * @param { Value } y {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static div(x: Value, y: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是x除以y的模。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } x {double | string | Decimal}
   * @param { Value } y {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static mod(x: Value, y: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为n的平方根。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sqrt(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为n的立方根。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static cbrt(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为base的exponent次幂。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } base {double | string | Decimal} 幂运算的底数的值。
   * @param { Value } exponent {double | string | Decimal} 幂运算的幂的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static pow(base: Value, exponent: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为n的自然指数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static exp(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是以base为底n的对数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @param { Value } base {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static log(n: Value, base: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为n的自然对数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static ln(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是以2为底n的对数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static log2(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是以10为底n的对数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static log10(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的余弦值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static cos(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的正弦值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sin(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的正切值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static tan(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲余弦值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static cosh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲正弦值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sinh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲正切值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static tanh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的反余弦值。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static acos(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的反正弦值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static asin(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的反正切值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static atan(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲余弦的倒数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static acosh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲正弦的倒数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static asinh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是n的双曲正切的倒数。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } n {double | string | Decimal} 以弧度为单位的值。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static atanh(n: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是-π到π（含边界）范围内y/x的反正切值。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value } y {double | string | Decimal} 除法的被除数。
   * @param { Value } x {double | string | Decimal} 除法的除数。
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200060 - Precision limit exceeded.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static atan2(y: Value, x: Value): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是参数平方和的平方根。无入参时默认返回0。按照precision设置有效位数，按照rounding设置舍入模式。
   *
   * @param { Value[] } n {double | string | Decimal} Decimal
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static hypot(...n: Value[]): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是所有参数中的最大值。
   *
   * @param { Value[] } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static max(...n: Value[]): Decimal;

  /**
   * 返回一个新的Decimal对象，其值是所有参数中的最小值。
   *
   * @param { Value[] } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static min(...n: Value[]): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为大于等于0且小于1的随机值。
   *
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static random(): Decimal;

  /**
   * 返回一个新的Decimal对象，其值为大于等于0且小于1的随机值，并保留significantDigits位有效数字（若产生尾随零则可能少于该位数）。
   *
   * @param { Value } significantDigits {number} 随机值保留的有效数字。取值范围为[0, 1e9]的整数。[since 12 - 17]
   * @param { double } significantDigits 随机值保留的有效数字。取值范围为[0, 1e9]的整数。[since 18]
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static random(significantDigits: double): Decimal;

  /**
   * 根据参数n的值返回对应的符号：
   * 1    如果 n > 0，
   * -1    如果 n < 0，
   * 0    如果 n 为 0，
   * -0    如果 n 为 -0，
   * NaN  其他情况
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type [since 12 - 17]
   * @returns { double } the Decimal type [since 18]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static sign(n: Value): double;

  /**
   * 返回一个新的Decimal对象，其值是使用rounding舍入模式将n舍入为整数的结果。
   *
   * @param { Value } n {double | string | Decimal}
   * @returns { Decimal } the Decimal type
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static round(n: Value): Decimal;

  /**
   * 用于设置Decimal的配置属性，通过set设置的属性是全局生效的。
   *
   * @param { DecimalConfig } 包含以下一个或多个属性的对象，
   *     precision  {double}
   *     rounding   {Rounding}
   *     toExpNeg   {double}
   *     toExpPos   {double}
   *     maxE       {double}
   *     minE       {double}
   *     modulo     {Modulo}
   *     crypto     {boolean}
   *     defaults   {true}
   * @returns { void }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of `DecimalConfig.properties` is out of range.
   * @throws { BusinessError } 10200061 - Crypto unavailable
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  static set(config: DecimalConfig): void;

  /**
   * 向远离零的方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_UP : 0;

  /**
   * 向远离零的方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_UP: int;

  /**
   * 向靠近零的方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_DOWN : 1;

  /**
   * 向靠近零的方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_DOWN: int;

  /**
   * 向正无穷方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_CEILING : 2;

  /**
   * 向正无穷方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_CEILING: int;

  /**
   * 向负无穷方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_FLOOR : 3;

  /**
   * 向负无穷方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_FLOOR: int;

  /**
   * 向最近的邻值舍入。如果距离相等，则向远离零的方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_HALF_UP : 4;

  /**
   * 向最近的邻值舍入。如果距离相等，则向远离零的方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_HALF_UP: int;

  /**
   * 向最近的邻值舍入。如果距离相等，则向靠近零的方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_HALF_DOWN : 5;

  /**
   * 向最近的邻值舍入。如果距离相等，则向靠近零的方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_HALF_DOWN: int;

  /**
   * 向最近的邻值舍入。如果距离相等，则向偶数邻值舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_HALF_EVEN : 6;

  /**
   * 向最近的邻值舍入。如果距离相等，则向偶数邻值舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_HALF_EVEN: int;

  /**
   * 向最近的邻值舍入。如果距离相等，则向正无穷方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_HALF_CEILING : 7;

  /**
   * 向最近的邻值舍入。如果距离相等，则向正无穷方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_HALF_CEILING: int;

  /**
   * 向最近的邻值舍入。如果距离相等，则向负无穷方向舍入
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly ROUND_HALF_FLOOR : 8;

  /**
   * 向最近的邻值舍入。如果距离相等，则向负无穷方向舍入
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly ROUND_HALF_FLOOR: int;

  /**
   * 非舍入模式，参见modulo
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly EUCLIDEAN : 9;

  /**
   * 非舍入模式，参见modulo
   * 取值为整数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  static readonly EUCLIDEAN: int;
}

export default Decimal;