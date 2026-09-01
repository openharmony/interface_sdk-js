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
 * Represents boxed boolean value and related operations
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Boolean extends Object implements Comparable<boolean> {
    /**
     * Constructs a new Boolean with provided value
     *
     * @param { boolean } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: boolean);

    /**
     * Constructs a new Boolean with provided byte value
     *
     * @param { byte } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: byte);

    /**
     * Constructs a new Boolean with provided char value
     *
     * @param { char } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: char);

    /**
     * Constructs a new Boolean with provided short value
     *
     * @param { short } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: short);

    /**
     * Constructs a new Boolean with provided int value
     *
     * @param { int } value - value to construct class instance with
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: int);

    /**
     * Constructs a new Boolean with provided long value
     *
     * @param { long } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: long);

    /**
     * Constructs a new Boolean with provided bigint value
     *
     * @param { bigint } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: bigint);

    /**
     * Constructs a new Boolean with provided float value
     *
     * @param { float } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: float);

    /**
     * Constructs a new Boolean with provided number value
     *
     * @param { double } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: double);

    /**
     * Constructs a new Boolean with provided string value
     *
     * @param { string } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: string);

    /**
     * Constructs a new Boolean with provided Object value
     *
     * @param { Any } value - value to construct class instance with
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: Any = undefined);

    /**
     * Creates a new instance of a Boolean based on the specified value
     *
     * @returns { boolean } A new Boolean instance representing the specified value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): boolean;

    /**
     * Creates a new instance of a Boolean based on the specified value
     *
     * @param { T } value - The value that can be represented in Boolean.
     * @returns { boolean } A new Boolean instance representing the specified value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke<T>(value: T): boolean;

    /**
     * Returns the primitive as boolean value
     *
     * @param { boolean } value - value to cast
     * @returns { boolean } Returns the input boolean value unchanged.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toBoolean(value: boolean): boolean;

    /**
     * Returns value of this instance
     *
     * @returns { boolean } The instance value converted to boolean.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    toBoolean(): boolean;

    /**
     * Checks for equality this instance with provided object, treated as a Boolean Returns false if type of provided
     * object is not the same as this type
     *
     * @param { Any } other - object to be checked against
     * @returns { boolean } True if the objects are equal, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * Converts the primitive to a string
     *
     * @param { boolean } v - value to be converted
     * @returns { string } The string representation of the boolean value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(v: boolean): string;

    /**
     * Converts this object to a string
     *
     * @returns { string } The string representation of this Boolean object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Compares this instance to other Boolean object The result is less than 0 if this instance lesser than provided
     * object 0 if they are equal and greater than 0 otherwise.
     *
     * @param { Boolean } other - Boolean object to compare with
     * @returns { int } Negative if this < other,0 if equal, positive if this > other
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Boolean): int;

    /**
     * Checks if this instance is true
     *
     * @returns { boolean } True if the instance value is true, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isTrue(): boolean;

    /**
     * Checks if this instance is false
     *
     * @returns { boolean } True if the instance value is false, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isFalse(): boolean;

    /**
     * Inverts this instance value
     *
     * @returns { Boolean } The logical negation of this Boolean instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negate(): Boolean;

    /**
     * Does logical `and` on this instance and provided instance
     *
     * @param { Boolean } other - provided instance
     * @returns { Boolean } The logical AND result of both Boolean instances
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public and(other: Boolean): Boolean;

    /**
     * Does logical `or` on this instance and provided instance
     *
     * @param { Boolean } other - provided instance
     * @returns { Boolean } The logical OR result of both Boolean instances
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public or(other: Boolean): Boolean;

    /**
     * Does `xor` on this instance and provided instance
     *
     * @param { Boolean } other - provided instance
     * @returns { Boolean } The logical XOR result of both Boolean instances
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public xor(other: Boolean): Boolean;
}
