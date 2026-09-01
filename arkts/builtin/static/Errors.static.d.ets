'use static';
/**
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Defines the commonly used Errors for ArkTS
 * @kit ArkTS
 */

/**
 * Represents an error that occurs when assertion fails.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AssertionError extends Error {
    /**
     * Constructs a new AssertionError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when division by zero is performed.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class DivideByZeroError extends Error {
    /**
     * Constructs a new DivideByZeroError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when null pointer is dereferenced.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NullPointerError extends Error {
    /**
     * Constructs a new NullPointerError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when exception is thrown and not caught
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class UncaughtExceptionError extends Error {
    /**
     * Constructs a new FormatError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when trying to interpret syntactically invalid code
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class SyntaxError extends Error {
    /**
     * Constructs a new SyntaxError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new SyntaxError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { SyntaxError }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): SyntaxError;
};

/**
 * Represents an error that occurs when JSONValue can not be assigned to a type
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class JSONTypeError extends Error {
    /**
     * Constructs a new JSONTypeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when provided collection index is out of range
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RangeError extends Error {
    /**
     * Constructs a new RangeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new RangeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { RangeError }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): RangeError;
};

/**
 * Represents error that is thrown when negative array size is supplied
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NegativeArraySizeError extends RangeError {
    /**
     * Constructs a new NegativeArraySizeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when array is oging to be indexed out of its bounds
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArrayIndexOutOfBoundsError extends RangeError {
    /**
     * Constructs a new ArrayIndexOutOfBoundsError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when illegal arithmetic operation has occurred (e.g. division by zero)
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArithmeticError extends Error {
    /**
     * Constructs a new ArithmeticError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when memory allocation fails
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class OutOfMemoryError extends Error {
    /**
     * Constructs a new OutOfMemoryError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when the available memory is not sufficient to create the activation frame
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class StackOverflowError extends Error {
    /**
     * Constructs a new StackOverflowError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when attempting to instantiate abstract class or an interface
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InstantiationError extends Error {
    /**
     * Constructs a new InstantiationError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that occurs when an internal error has occurred
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InternalError extends Error {
    /**
     * Constructs a new InternalError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an error that is thrown when attempting to wait, notify or notifyAll on object,
 *     that hasn't been synchronised
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalMonitorStateError extends Error {
    /**
     * Constructs a new IllegalMonitorStateError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when provided collection index is out of bounds
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IndexOutOfBoundsError extends RangeError {
    /**
     * Constructs a new IndexOutOfBoundsError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when provided string index is out of bounds
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class StringIndexOutOfBoundsError extends RangeError {
    /**
     * Constructs a new StringIndexOutOfBoundsError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown in case of illegal class casting
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ClassCastError extends Error {
    /**
     * Constructs a new ClassCastError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when attempting to store an object of different type in array of type-erased objects
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArrayStoreError extends Error {
    /**
     * Constructs a new ArrayStoreError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when there is an error in initializer
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ExceptionInInitializerError extends Error {
    /**
     * Constructs a new ExceptionInInitializerError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when coroutines limit is reached
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class CoroutinesLimitExceedError extends Error {
    /**
     * Constructs a new CoroutinesLimitExceedError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents error that is thrown when lock is in an illegal state
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalLockStateError extends Error {
    /**
     * Constructs a new IllegalLockStateError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents the error that is thrown when invalid operation is called on coroutine
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InvalidJobOperationError extends Error {
    /**
     * Constructs a new InvalidJobOperationError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents the error that is thrown when there is a wrong unsafe call to Function
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArgumentsUnderapplicationError extends Error {
    /**
     * Constructs a new ArgumentsUnderapplicationError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents the error that is thrown when there is store access error
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InvalidStoreAccessError extends Error {
    /**
     * Constructs a new InvalidStoreAccessError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * Represents an evaluation error
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class EvalError extends Error {
    /**
     * Constructs a new EvalError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new EvalError instance with provided message and options
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { EvalError } - Newly created EvalError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): EvalError;
};

/**
 * Represents an error that occurs when a numeric types conversion is performed on an index expression,
 * and the fractional part differs from 0.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NonIntegralIndexError extends Error {
    /**
     * Constructs a new NonIntegralIndexError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new NonIntegralIndexError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { NonIntegralIndexError } - Newly created NonIntegralIndexError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): NonIntegralIndexError;
};


/**
 * Represents an error that occurs when an operation could not be performed, typically (but not exclusively)
 * when a value is not of the expected type
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class TypeError extends Error {
    /**
     * Constructs a new TypeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new TypeError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { TypeError } - Newly created TypeError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): TypeError;
};


/**
 * Represents an error that occurs when a variable that doesn't exist (or hasn't yet been initialized)
 * in the current scope is referenced
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ReferenceError extends Error {
    /**
     * Constructs a new ReferenceError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new ReferenceError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { ReferenceError } - Newly created ReferenceError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): ReferenceError;
};


/**
 * Represents an error that occurs when a global URI handling function was used in a wrong way
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class URIError extends Error {
    /**
     * Constructs a new URIError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new URIError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { URIError } - Newly created URIError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): URIError;
};


/**
 * AggregateError object represents an error when several errors
 * need to be wrapped in a single error.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AggregateError extends Error {
    /**
     * Defines an array with aggregated errors
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    errors: Array<Error>;
    /**
     * Constructs a new AggregateError instance with provided errors, message and error specific information
     *
     * @param { Iterable<Error> } errors - Errors to be aggregated.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(errors: Iterable<Error>, message?: string, options?: ErrorOptions);

    /**
     * Constructs a new AggregateError instance with provided errors, message and error specific information
     *
     * @param { Error[] } errors - Errors to be aggregated.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(errors: Error[], message?: string, options?: ErrorOptions);

    /**
     * Constructs a new AggregateError instance with provided message and error specific information
     *
     * @param { Iterable<Error> } errors - Errors to be aggregated.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { AggregateError } - Newly created AggregateError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(errors: Iterable<Error>, message?: string, options?: ErrorOptions): AggregateError;

    /**
     * Constructs a new AggregateError instance with provided message and error specific information
     *
     * @param { Error[] } errors - Errors to be aggregated.
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { AggregateError } - Newly created AggregateError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(errors: Error[], message?: string, options?: ErrorOptions): AggregateError;

};

/**
 * Represents an error that occurs when an input string contains invalid or incorrectly formatted data.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class FormatError extends Error {
    /**
     * Constructs a new FormatError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * Constructs a new FormatError instance with provided message and error specific information
     *
     * @param { string } [message] - Error text.
     * @param { ErrorOptions } [options] - Error options.
     * @returns { FormatError } - Newly created FormatError instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): FormatError;
};

