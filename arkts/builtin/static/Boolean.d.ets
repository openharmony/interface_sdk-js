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
 * Represents boxed boolean value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Boolean extends Object implements Comparable<boolean> {

    /**
     * Constructs a new Boolean with provided value
     *
     * @param { boolean } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: boolean);

    /**
     * Constructs a new Boolean with provided byte value
     *
     * @param { byte } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: byte);

    /**
     * Constructs a new Boolean with provided char value
     *
     * @param { char } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: char);

    /**
     * Constructs a new Boolean with provided short value
     *
     * @param { short } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: short);

    /**
     * Constructs a new Boolean with provided int value
     *
     * @param { int } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: int);

    /**
     * Constructs a new Boolean with provided long value
     *
     * @param { long } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: long);

    /**
     * Constructs a new Boolean with provided bigint value
     *
     * @param { bigint } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: bigint);

    /**
     * Constructs a new Boolean with provided float value
     *
     * @param { float } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: float);

    /**
     * Constructs a new Boolean with provided string value
     *
     * @param { string } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: string);

    /**
     * Constructs a new Boolean with provided Object value
     *
     * @param { Any } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: Any = undefined);

    /**
     * Creates a new instance of a Boolean based on the specified value
     *
     * @returns { boolean } A new Boolean instance representing the specified value.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke(): boolean;

    /**
     * Creates a new instance of a Boolean based on the specified value
     *
     * @param { T } value - The value that can be represented in Boolean.
     * @returns { boolean } A new Boolean instance representing the specified value.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke<T>(value: T): boolean;

    /**
     * Returns the primitive as boolean value
     *
     * @param { boolean } value - value to cast
     * @returns { boolean } Returns the input boolean value unchanged.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static toBoolean(value: boolean): boolean;

    /**
     * Returns value of this instance
     *
     * @returns { boolean } The instance value converted to boolean.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    toBoolean(): boolean;
}
