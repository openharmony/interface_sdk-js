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
 * Can be implemented by any type that represents a numeric value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Numeric extends Object {

  /**
   * toByte() returns the value of an object as a byte
   *
   * @returns { byte } object's value as byte
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toByte(): byte;

  /**
   * toInt() returns the value of an object as an int
   *
   * @returns { int } object's value as int
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toInt(): int;

  /**
   * toShort() returns the value of an object as a short
   *
   * @returns { short } object's value as short
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toShort(): short;

  /**
   * toLong() returns the value of an object as a long
   *
   * @returns { long } object's value as long
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toLong(): long;

  /**
   * toFloat() returns the value of an object as a float
   *
   * @returns { float } object's value as float
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toFloat(): float;

  /**
   * toDouble() returns the value of an object as a double
   *
   * @returns { double } object's value as double
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public abstract toDouble(): double;
}

/**
 * Common class for all integral types
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Integral extends Numeric {}

/**
 * Common class for all Floating number
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export abstract class Floating extends Numeric {}
