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
 * Math类提供数学常量与数学函数相关的静态属性和方法。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Math {
  /**
   * 以double值表示的圆周率π。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly PI: double = 3.141592653589793;

  /**
   * 以double值表示的欧拉数e。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly E: double = 2.718281828459045;

  /**
   * 以double值表示的10的自然对数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LN10: double = 2.302585092994046;

  /**
   * 以double值表示的2的自然对数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LN2: double = 0.6931471805599453;

  /**
   * 以double值表示的欧拉数e以2为底的对数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOG2E: double = 1.4426950408889634;

  /**
   * 以double值表示的欧拉数e以10为底的对数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly LOG10E: double = 0.4342944819032518;

  /**
   * 以double值表示的1/2的平方根。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly SQRT1_2: double = 0.7071067811865476;

  /**
   * 以double值表示的2的平方根。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static readonly SQRT2: double = 1.4142135623730951;
    /**
     * 大于或等于`x`的最小整数。
     *
     * @param { double } x - 任意number值。
     * @returns { double } 大于或等于x的最小整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static ceil(x: double): double;

    /**
     * 小于或等于`x`的最大整数。
     *
     * @param { double } x - 任意number值。
     * @returns { double } 小于或等于x的最大整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static floor(x: double): double;

    /**
     * 返回number值四舍五入到最接近整数后的结果。
     *
     * @param { double } x - 待四舍五入的number值。
     * @returns { double } 该number值四舍五入到最接近整数后的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static round(x: double): double;

    /**
     * `x`的平方根。
     *
     * @param { double } x - 非负的number值。
     * @returns { double } 给定number值的平方根；如果该值为负数，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static sqrt(x: double): double;

    /**
     * 不传入参数时返回最小值。
     *
     * @returns { double } Infinity
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(): double;

    /**
     * 传入单个参数时返回最小值。
     *
     * @param { double } val - 一个number值。
     * @returns { double } 参数本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(val: double): double;

    /**
     * 返回两个数值中较小的一个。
     *
     * @param { double } val1 - 第一个number值。
     * @param { double } val2 - 第二个number值。
     * @returns { double } 两个数值中较小的一个；若任一参数为NaN，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(val1: double, val2: double): double;

    /**
     * 返回零个或多个数值中的最小值。
     *
     * @param { double[] } values - 一组数值。
     * @returns { double } 给定数值中的最小值；如果不传入任何参数，
     *     则返回Infinity；若任一参数为NaN，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static min(...values: double[]): double;

    /**
     * 不传入参数时返回最大值。
     *
     * @returns { double } -Infinity。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(): double;

    /**
     * 传入单个参数时返回最大值。
     *
     * @param { double } val - 一个number值。
     * @returns { double } 参数本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(val: double): double;

    /**
     * 返回两个数值中较大的一个。
     *
     * @param { double } val1 - 第一个number值。
     * @param { double } val2 - 第二个number值。
     * @returns { double } 两个数值中较大的一个；若任一参数为NaN，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(val1: double, val2: double): double;

    /**
     * 返回零个或多个数值中的最大值。
     *
     * @param { double[] } values - 一组数值。
     * @returns { double } 给定数值中的最大值；如果不传入任何参数，
     *     则返回-Infinity；若任一参数为NaN，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static max(...values: double[]): double;

    /**
     * 绝对值。
     *
     * @param { byte } x - 某个number值。
     * @returns { byte } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: byte): byte;

    /**
     * 绝对值。
     *
     * @param { short } x - 某个number值。
     * @returns { short } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: short): short;

    /**
     * 绝对值。
     *
     * @param { int } x - 某个number值。
     *     <br>取值约束：应为整数。
     * @returns { int } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: int): int;

    /**
     * 绝对值。
     *
     * @param { long } x - 某个number值。
     * @returns { long } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: long): long;

    /**
     * 绝对值。
     *
     * @param { float } x - 某个number值。
     * @returns { float } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: float): float;

    /**
     * 绝对值。
     *
     * @param { double } x - 某个number值。
     * @returns { double } `x`的绝对值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static abs(x: double): double;

    /**
     * `x`以2为底的对数。
     *
     * @param { double } x - 任意number值。
     * @returns { double } x以2为底的对数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static log2(x: double): double;

    /**
     * `x`以2为底的对数。
     *
     * @param { float } x - 任意number值。
     * @returns { float } x以2为底的对数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static log2(x: float): float;

    /**
     * 返回base的exponent次幂，即base^exponent。
     *
     * @param { double } u - 底数。
     * @param { double } v - 指数。
     * @returns { double } base的exponent次幂。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static pow(u: double, v: double): double;

    /**
     * 返回[0.0, 1.0)范围内的伪随机number值。
     *
     * @returns { double } 伪随机的double精度浮点数，其值大于
     *     或等于0.0且小于1.0。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static random(): double;
      /**
       * 返回x的反余弦值。
       *
       * @param { double } x - 以弧度表示的角度。
       * @returns { double } x的反余弦值。
       * @syscap SystemCapability.Utils.Lang
       * @stagemodelonly
       * @since 26.0.0 staticonly
       */
      public static acos(x: double): double;

  /**
   * 返回x的反余弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acos(x: float): float;

  /**
   * 返回x的反双曲余弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的反双曲余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acosh(x: double): double;

  /**
   * 返回x的反双曲余弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反双曲余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static acosh(x: float): float;

  /**
   * 返回x的反正弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的反正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asin(x: double): double;

  /**
   * 返回x的反正弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asin(x: float): float;

  /**
   * 返回x的反双曲正弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的反双曲正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asinh(x: double): double;

  /**
   * 返回x的反双曲正弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反双曲正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static asinh(x: float): float;

  /**
   * 返回x的反正切值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的反正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan(x: double): double;

  /**
   * 返回x的反正切值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan(x: float): float;

  /**
   * 返回平面内x轴正方向与从(0, 0)
   * 指向点(x, y)的射线之间的夹角。
   *
   * @param { double } y - y坐标。
   * @param { double } x - x坐标。
   * @returns { double } x轴正方向与从(0, 0)指向点(x, y)的射线之间的夹角，
   *     取值范围为-π到π（含端点）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan2(y: double, x: double): double;

  /**
   * 返回平面内x轴正方向与从(0, 0)
   * 指向点(x, y)的射线之间的夹角。
   *
   * @param { float } y - y坐标。
   * @param { float } x - x坐标。
   * @returns { float } x轴正方向与从(0, 0)指向点(x, y)的射线之间的夹角，
   *     指向点(x, y)的射线之间的夹角。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atan2(y: float, x: float): float;

  /**
   * 返回x的反双曲正切值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的反双曲正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atanh(x: double): double;

  /**
   * 返回x的反双曲正切值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的反双曲正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static atanh(x: float): float;

  /**
   * 返回x的立方根。
   *
   * @param { double } x - 任意number值。
   * @returns { double } x的立方根。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cbrt(x: double): double;

  /**
   * 返回x的立方根。
   *
   * @param { float } x - 任意number值。
   * @returns { float } x的立方根。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cbrt(x: float): float;

  /**
   * 返回x的32位表示中前导零位的数量。
   *
   * @param { Int } x - 32位整数。
   * @returns { Int } x的位表示中前导零位的数量。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static clz32(x: Int): Int;

  /**
   * 返回x的32位表示中前导零位的数量。
   *
   * @param { double } value - 32位整数。
   * @returns { double } x的位表示中前导零位的数量。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static clz32(value: double): double;

  /**
   * 返回参数向上取整到最接近的2的整数次幂后的值。
   *
   * @param { int } n - 32位整数。
   *     <br>取值约束：应为整数。
   * @returns { int } 参数向上取整到最接近的2的整数次幂后的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static ceilPow2(n: int): int;

  /**
   * 返回x的余弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } 该弧度角的余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cos(x: double): double;

  /**
   * 返回x的双曲余弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的双曲余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cosh(x: double): double;

  /**
   * 返回x的双曲余弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的双曲余弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static cosh(x: float): float;

  /**
   * 返回e的x次幂。
   *
   * @param { float } x - 幂值。
   * @returns { float } e的x次幂。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static exp(x: float): float;

  /**
   * 返回e的x次幂。
   *
   * @param { double } x - 幂值。
   * @returns { double } e的x次幂。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static exp(x: double): double;

  /**
   * 返回e的x次幂减1。
   *
   * @param { float } x - 幂值。
   * @returns { float } e的x次幂减1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static expm1(x: float): float;

  /**
   * 返回e的x次幂减1。
   *
   * @param { double } x - 幂值。
   * @returns { double } e的x次幂减1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static expm1(x: double): double;

  /**
   * 返回与x最接近的32位单精度浮点表示。
   *
   * @param { double } x - 任意number值。
   * @returns { double } 与x最接近的32位单精度浮点表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static fround(x: double): double;

  /**
   * 返回各参数平方和的平方根。
   *
   * @param { double[] } values - 任意数值。
   * @returns { double } 各参数平方和的平方根。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static hypot(...values: double[]): double;

  /**
   * 返回两个参数按C语言风格进行32位乘法运算的结果。
   *
   * @param { double } a - 第一个值。
   * @param { double } b - 第二个值。
   * @returns { double } (a * b) % 2^32的结果。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static imul(a: double, b: double): double;

  /**
   * 返回x的自然对数（以e为底）。
   *
   * @param { float } x - 任意number值。
   * @returns { float } x的自然对数（以e为底）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log(x: float): float;

  /**
   * 返回x的自然对数（以e为底）。
   *
   * @param { double } x - 任意number值。
   * @returns { double } x的自然对数（以e为底）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log(x: double): double;

  /**
   * 返回x以10为底的对数。
   *
   * @param { double } x - 任意number值。
   * @returns { double } x以10为底的对数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log10(x: double): double;

  /**
   * 返回x以10为底的对数。
   *
   * @param { float } x - 任意number值。
   * @returns { float } x以10为底的对数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log10(x: float): float;

  /**
   * 返回(1 + x)的自然对数（以e为底）。
   *
   * @param { double } x - 任意number值。
   * @returns { double } (1 + x)的自然对数（以e为底）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log1p(x: double): double;

  /**
   * 返回(1 + x)的自然对数（以e为底）。
   *
   * @param { float } x - 任意number值。
   * @returns { float } (1 + x)的自然对数（以e为底）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static log1p(x: float): float;

  /**
   * 返回x的符号。
   *
   * @param { double } x - 任意number值。
   * @returns { double } x为负数时返回-1，为正数时返回1，接近0时返回0（epsilon为1e-13）。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sign(x: double): double;

  /**
   * 返回x的正弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } 该弧度角的正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sin(x: double): double;

  /**
   * 返回x的双曲正弦值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的双曲正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sinh(x: double): double;

  /**
   * 返回x的双曲正弦值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的双曲正弦值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static sinh(x: float): float;

  /**
   * 返回x的正切值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tan(x: double): double;

  /**
   * 返回x的双曲正切值。
   *
   * @param { double } x - 以弧度表示的角度。
   * @returns { double } x的双曲正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tanh(x: double): double;

  /**
   * 返回x的双曲正切值。
   *
   * @param { float } x - 以弧度表示的角度。
   * @returns { float } x的双曲正切值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static tanh(x: float): float;

  /**
   * 去除小数部分，返回x的整数部分。
   *
   * @param { double } x - 待截断的Number。
   * @returns { double } 去除小数部分后x的整数部分。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public static trunc(x: double): double;
}
