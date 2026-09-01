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
 * Represents an error thrown when data is expected but not provided.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NoDataError extends Error {
    /**
     * Constructs an NoDataError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options, usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}


/**
 * Represents exception that is thrown when provided argument have value outside the allowable range
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArgumentOutOfRangeError extends Error {
    /**
     * Constructs an ArgumentOutOfRangeError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options, usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * Represents error that is thrown when a method has been invoked at an illegal or inappropriate time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalStateError extends Error {
    /**
     * Constructs an IllegalStateError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options,
     *     usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * Represents error that is thrown when the requested operation is not supported.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class UnsupportedOperationError extends Error {
    /**
     * Constructs an UnsupportedOperationError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options,
     *     usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * Represents an error thrown when a method is passed an illegal argument.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalArgumentError extends Error {
    /**
     * Constructs an IllegalArgumentError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options,
     *     usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * Represents an error that occurs during runtime.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RuntimeError extends Error {
    /**
     * Constructs a RuntimeError instance.
     *
     * @param { string } [message] - The error message.
     * @param { ErrorOptions } [options] - Error options,
     *     usually containing the error stack information.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}
