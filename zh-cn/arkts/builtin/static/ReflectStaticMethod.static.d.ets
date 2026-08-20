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
 * 提供反射相关功能的命名空间，主要用于操作
 * 类的静态方法。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
namespace reflect {

  /**
   * 表示类的静态方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  class StaticMethod extends Method {  
    /**
     * 判断该静态方法是否为异步方法。
     *
     * @returns { boolean } 如果是异步方法则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isAsyn(): boolean;

    /**
     * 判断该静态方法是否为属性的getter访问器。
     *
     * @returns { boolean } 如果是getter访问器则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isGetter(): boolean;

    /**
     * 判断该静态方法是否为属性的setter访问器。
     *
     * @returns { boolean } 如果是setter访问器则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isSetter(): boolean;

    /**
     * 比较当前静态方法对象是否与另一个对象相等。
     *
     * @param { StaticMethod } other - 用于比较的另一个静态方法对象。
     * @returns { boolean } 如果两个对象指向同一方法则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    equals(other: StaticMethod): boolean;

    /**
     * 调用方法。
     *
     * @param { FixedArray<Any> } [args] - 方法参数。
     * @returns { Any } 方法的返回值。对于`void`返回`undefined`。
     * @throws { OutofMemoryError } 当没有内存可分配给返回值时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    invoke(args?: FixedArray<Any>): Any;
  }

}
