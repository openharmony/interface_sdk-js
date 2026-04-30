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
 * Unicode string
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class String extends Object implements Comparable<string>, Iterable<string> {
    /**
     * Constructs an empty string
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor();

    /**
     * Constructs string from chars array initializer
     *
     * @param { FixedArray<char> } data - initializer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(data: FixedArray<char>);

    /**
     * Constructs string from another string
     *
     * @param { string } otherStr - initializer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(otherStr: string);

    /**
     * Constructs string from Any
     *
     * @param { Any } object - initializer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(object: Any);

    /**
     * Creates a new instance of a string
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(): string;

    /**
     * Creates a new instance of a string from boolean
     *
     * @param { boolean } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: boolean): string;

    /**
     * Creates a new instance of a string from byte
     *
     * @param { byte } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: byte): string;

    /**
     * Creates a new instance of a string from char
     *
     * @param { char } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: char): string;

    /**
     * Creates a new instance of a string from short
     *
     * @param { short } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: short): string;

    /**
     * Creates a new instance of a string from int
     *
     * @param { int } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: int): string;

    /**
     * Creates a new instance of a string from long
     *
     * @param { long } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: long): string;

    /**
     * Creates a new instance of a string from float
     *
     * @param { float } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: float): string;

    /**
     * Creates a new instance of a string from double
     *
     * @param { double } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: double): string;

    /**
     * Creates a new instance of a string
     *
     * @param { Any } value - The value to be converted to a string. Can be an Object or null.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(value: Any): string;

    /**
     * Returns an instance of string at passed index.
     *
     * @param { int } index - index to look at
     * @returns { string } string value at index
     * @throws { Error } StringIndexOutOfBoundsError - if index is negative or >= length
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_get(index: int): string;

    /**
     * Length of this string
     * @returns { int } length of this string
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    getLength(): int;

    /**
     * Length of this string
     * @returns { int } length of this string
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    get length(): int;

    /**
     * concat
     *
     * @param { string } s1
     * @param { string } s2
     * @returns { string } Concatenated string.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    concat(s1: string, s2: string): string;

    /**
     * concat
     *
     * @param { string } s1
     * @param { string } s2
     * @param { string } s3
     * @returns { string } Concatenated string.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    concat(s1: string, s2: string, s3: string): string;
}
