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
 * Represents boxed int value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Int extends Integral implements Comparable<Int> {

    /**
     * Constructs a new Int instance with initial value zero
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor();

    /**
     * Constructs a new Int instance with provided initial value
     *
     * @param { int } value - the initial value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(value: int);

    /**
     * Converts the value of this instance to an int
     *
     * @returns { int } the int value represented by this instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toInt(): int;

    /**
     * Returns the primitive int value directly
     *
     * @param { int } value - the int value to return
     * @returns { int } the same int value that was passed in
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toInt(value: int): int;

    /**
     * Compares this object with the specified object for equality.
     *
     * @param { Any } other - the object to compare with
     * @returns { boolean } true if the specified object is equal to this object, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    equals(other: Any): boolean;

    /**
     * Converts the specified int value to its string representation.
     *
     * @param { int } v - the int value to be converted
     * @returns { string } the string representation of the int value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(v: int): string;

    /**
     * Converts the value of this Int object to its string representation.
     *
     * @returns { string } the string representation of this Int object's value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toString(): string;
}
