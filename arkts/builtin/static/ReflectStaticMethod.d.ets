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
 * A namespace that provides reflection related functionality, primarily used for manipulating static methods of classes.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
namespace reflect {

  /**
   * Represents static method of class
   *
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
   * @since 24 staticonly
   */
  class StaticMethod extends Method {  
    /**
     * Determine whether the static method is an asynchronous method.
     *
     * @returns { boolean } If it is an asynchronous method, return true; otherwise, return false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isAsyn(): boolean;

    /**
     * Determine whether the static method is a getter visitor for a property.
     *
     * @returns { boolean } If it is a getter visitor, return true; otherwise, return false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isGetter(): boolean;

    /**
     * Determine whether the static method is a setter visitor for a property.
     *
     * @returns { boolean } If it is a setter visitor, return true; otherwise, return false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isSetter(): boolean;

    /**
     * Compare whether the current Static Method object is equal to another object.
     *
     * @param { StaticMethod } other - Another Static Method object used for comparison.
     * @returns { boolean } If two objects point to the same method, return true; otherwise, return false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    equals(other: StaticMethod): boolean;

    /**
     * Invokes a method
     *
     * @param { FixedArray<Any> } [args] - method parameters
     * @returns { Any } method return value. `undefined` for `void`.
     * @throws { OutofMemoryError } if - there is no memory to allocate return value.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    invoke(args?: FixedArray<Any>): Any;
}

}
