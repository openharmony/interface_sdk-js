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
 * Core namespace for reflection operations, providing access to metadata such as classes, interfaces,
 * methods, and properties at runtime.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
namespace reflect {

  /**
   * Represents an instance method of a class or interface.
   *
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
   * @since 24 static
   */
  class InstanceMethod extends Method {  

    /**
     * Checks if the method is a final method.
     *
     * @returns { boolean } Returns true if the method is final, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isFinal(): boolean;

    /**
     * Checks if the method is an async method.
     *
     * @returns { boolean } Returns true if the method is async, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isAsync(): boolean;

    /**
     * Checks if the method is an abstract method.
     *
     * @returns { boolean } Returns true if the method is abstract, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isAbstract(): boolean;

    /**
     * Checks if the method is a getter method.
     *
     * @returns { boolean } Returns true if the method is a getter, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isGetter(): boolean;

    /**
     * Checks if the method is a setter method.
     *
     * @returns { boolean } Returns true if the method is a setter, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isSetter(): boolean;

    /**
     * Compares whether two instance methods are equal.
     *
     * @param { InstanceMethod } other - Another instance method object used for comparison.
     * @returns { boolean } Returns true if the two methods are equal, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    equals(other: InstanceMethod): boolean;

    /**
     * Invokes this instance method.
     *
     * @param { Object } thisObj - The this object used when invoking the method.
     * @param { FixedArray<Any> } [args] - args The argument array passed when invoking the method.
     * @returns { Any } The execution result of the method.
     * @throws { TypeError } Throws - when `thisObj` is incompatible with the method.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    invoke(thisObj: Object, args?: FixedArray<Any>): Any;
}

} 
