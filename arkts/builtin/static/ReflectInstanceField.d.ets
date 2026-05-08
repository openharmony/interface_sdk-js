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
 * @since 24 static
 */
namespace reflect {

  /**
   * Represents an instance field of a class or interface.
   *
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
   * @since 24 staticonly
   */
  class InstanceField extends Field {  

    /**
     * Checks if the current instance field is equal to the given instance field.
     *
     * @param { InstanceField } other - Another InstanceField object to compare with.
     * @returns { boolean } Returns true if the two instance fields are equal, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    equals(other: InstanceField): boolean;

    /**
     * Reads the value from the instance field.
     *
     * @param { Object } thisObj - The target object as the `this` context.
     * @returns { Any } Returns the value read from the instance field.
     * @throws { TypeError } Throws - when `thisObj` is incompatible with the field.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    getValue(thisObj: Object): Any;

    /**
     * Writes a value to the instance field.
     *
     * @param { Object } thisObj - The target object as the `this` context.
     * @param { Any } value - The value to write.
     * @throws { TypeError } Throws - when `thisObj` is incompatible with the field or the value type doesn't match.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    setValue(thisObj: Object, value: Any): void;
}

}
