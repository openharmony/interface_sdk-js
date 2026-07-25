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
 * Represents an error that occurs when a null pointer is dereferenced.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class NullPointerError extends Error {
    /**
     * Constructs a new NullPointerError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text
     * @param { ErrorOptions } [options] - Error options
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * Error options interface.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ErrorOptions {
    /**
     * Specifies cause of an Error.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    cause?: Object;
}

/**
 * Error class for representing errors.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Error {
    /**
     * Gets the name of the error.
     *
     * @returns { string } the error name.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get name(): string;

    /**
     * Sets the name of the error.
     *
     * @param { string } val - the new name.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set name(val: string);

    /**
     * Gets the code of the error.
     *
     * @returns { int } the error code.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get code(): int;

    /**
     * Sets the code of the error.
     *
     * @param { int } val - the new code.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set code(val: int);

    /**
     * Gets the message of the error.
     *
     * @returns { string } the error message.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get message(): string;

    /**
     * Sets the message of the error.
     *
     * @param { string } val - the new message.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set message(val: string);

    /**
     * Gets the cause of the error.
     *
     * @returns { Object | undefined } the error cause.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get cause(): Object | undefined;

    /**
     * Sets the cause of the error.
     *
     * @param { Object | undefined } val - the new cause.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set cause(val: Object | undefined);

    /**
     * Constructs a new error instance with provided code, message and cause.
     *
     * @param { int } code - Error code..
     *     <br>The value should be an integer.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(code: int, message?: string, options?: ErrorOptions);

    /**
     * Constructs a new error instance with provided message and cause.
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new error instance with provided name, code, message and options.
     *
     * @param { string } name - Error name.
     * @param { int } code - Error code.
     *     <br>The value should be an integer.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, code: int, message?: string, options?: ErrorOptions);

    /**
     * Constructs a new error instance with provided name, message and options.
     *
     * @param { string } name - Error name.
     * @param { string | undefined } message - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, message: string | undefined, options?: ErrorOptions);

    /**
     * Converts this error to a string.
     *
     * @returns { string } the string representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toString(): string;

    /**
     * Gets the stack trace of the error.
     *
     * @returns { string | undefined } the stack trace.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get stack(): string | undefined;

    /**
     * Sets the stack trace of the error.
     *
     * @param { string | undefined } newStack - the new stack trace.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set stack(newStack: string | undefined);

    /**
     * Creates a new error instance.
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { Error } the new Error instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): Error;
}
