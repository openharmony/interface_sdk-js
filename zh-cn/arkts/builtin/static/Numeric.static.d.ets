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
 * 可由任何表示数值的类型实现。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Numeric extends Object {

  /**
   * toByte()以byte形式返回对象的值。
   *
   * @returns { byte } 以byte形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toByte(): byte;

  /**
   * toInt()以int形式返回对象的值。
   *
   * @returns { int } 以int形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toInt(): int;

  /**
   * toShort()以short形式返回对象的值。
   *
   * @returns { short } 以short形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toShort(): short;

  /**
   * toLong()以long形式返回对象的值。
   *
   * @returns { long } 以long形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toLong(): long;

  /**
   * toFloat()以float形式返回对象的值。
   *
   * @returns { float } 以float形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toFloat(): float;

  /**
   * toDouble()以double形式返回对象的值。
   *
   * @returns { double } 以double形式表示的对象值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toDouble(): double;
}

/**
 * 所有整型类型的公共类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Integral extends Numeric {}

/**
 * 所有浮点数类型的公共类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Floating extends Numeric {}
