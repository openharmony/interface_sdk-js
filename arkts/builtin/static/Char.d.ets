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
 * Represents boxed char value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Char extends Object implements Comparable<Char> {

    /**
     * toString() converts Char to String object that contains a single element with the underlying char.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toString(): string;

    /**
     * Returns the primitive as string value
     *
     * @param { char } value - value to cast
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(value: char): string;

    /**
     * isDecDigit() checks whether the char represents a decimal digit.
     *
     * @param { char } value - a char to check.
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static isDecDigit(value: char): boolean;

    /**
     * isDecDigit() checks whether the underlying char represents a decimal digit.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isDecDigit(): boolean;

    /**
     * isWhiteSpace(char) checks whether the char is a whitespace char.
     *
     * @param { char } value - a char to be tested.
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static isWhiteSpace(value: char): boolean;

    /**
     * isWhiteSpace() checks whether the underlying char is a whitespace char.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isWhiteSpace(): boolean;
}
