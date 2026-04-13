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
 * Represents a class constructor.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Constructor extends Method {

    /**
     * Compares whether the current constructor object is equal to another constructor object.
     *
     * @param { Constructor } other - Another constructor object to compare with.
     * @returns { boolean } Returns true if the two constructor objects are equal, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    public equals(other: Constructor): boolean;

    /**
     * Creates a new instance of its belonging class using this constructor.
     *
     * @param { FixedArray<Any> } [args] - args The argument list for the constructor.
     * @returns { Any } The newly created class instance.
     * @throws { OutOfMemoryError } Throws - when not enough memory to create the object.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    public createInstance(args?: FixedArray<Any>): Any;
}
