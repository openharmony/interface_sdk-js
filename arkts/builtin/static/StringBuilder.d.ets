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
 * Performance-oriented class for string construction
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class StringBuilder {
    /**
     * Construct a new builder instance with the initial buffer of 16 chars
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor();

    /**
     * Construct a new builder instance with the provided array of chars
     *
     * @param { FixedArray<char> } fromChars - array that will be used to initialize the builder
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(fromChars: FixedArray<char>);

    /**
     * Construct a new builder instance with the provided array of chars
     *
     * @param { char[] } fromChars - array that will be used to initialize the builder
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(fromChars: char[]);

    /**
     * Constructs a new builder instance with provided string
     *
     * @param { string } s - string that will be used to initialize the builder
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(s: string);

    /**
     * Concatenates two strings and return a result as a new string
     *
     * @param { string } lhs - left string (prefix)
     * @param { string } rhs - right string (suffix)
     * @returns { string } result of concatenation
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static concatStrings(lhs: string, rhs: string): string;

    /**
     * Appends a string to the builder's internal buffer
     *
     * @param { string } s - string to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(s: string): StringBuilder;

    /**
     * Appends a boolean as string to the builder's internal buffer
     *
     * @param { boolean } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: boolean): StringBuilder;

    /**
     * Appends a byte as string to the builder's internal buffer
     *
     * @param { byte } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: byte): StringBuilder;

    /**
     * Appends a char to the builder's internal buffer
     *
     * @param { char } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: char): StringBuilder;

    /**
     * Appends a short as string to the builder's internal buffer
     *
     * @param { short } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: short): StringBuilder;

    /**
     * Appends an int as string to the builder's internal buffer
     *
     * @param { int } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: int): StringBuilder;

    /**
     * Appends a long as string to the builder's internal buffer
     *
     * @param { long } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: long): StringBuilder;

    /**
     * Appends a float as string to the builder's internal buffer
     *
     * @param { float } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: float): StringBuilder;

    /**
     * Appends a double as string to the builder's internal buffer
     *
     * @param { double } i - value to be appended
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(i: double): StringBuilder;

    /**
     * Appends an object representation as string to the builder's internal buffer
     *
     * @param { Object } o - object that will be converted to a stringitg
     * @returns { StringBuilder } builder with updated internal buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    append(o: Object): StringBuilder;

    /**
     * Returns the string that was formed as a result of all append operations
     *
     * @returns { string } - builder's current buffer as string
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toString(): string;

    /**
     * Converts the primitive to a string
     *
     * @param { boolean } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: boolean): string;

    /**
     * Converts the primitive to a string
     *
     * @param { byte } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: byte): string;

    /**
     * Converts the primitive to a string
     *
     * @param { char } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: char): string;

    /**
     * Converts the primitive to a string
     *
     * @param { short } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: short): string;

    /**
     * Converts the primitive to a string
     *
     * @param { int } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: int): string;

    /**
     * Converts the primitive to a string
     *
     * @param { long } i - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(i: long): string;

    /**
     * Converts the primitive to a string
     *
     * @param { float } f - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(f: float): string;

    /**
     * Converts the primitive to a string
     *
     * @param { double } d - value to be converted
     * @returns { string } result of the conversion
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(d: double): string;
}
