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
 * `object`是类型`Object`的别名。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type object = Object;

/**
 * 所有其他类的公共祖先。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Object {

  /**
   * 构造一个新的空Object。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor();

  /**
   * toString()将该对象转换为字符串。
   *
   * @returns { string } 表示该对象的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public toString(): string;

  /**
   * $_hashCode()返回该实例的哈希码（整数表示）。
   *
   * @returns { int } 该实例的整数表示。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public $_hashCode(): int;

}
