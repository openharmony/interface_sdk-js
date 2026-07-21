'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * Represents a thenable object.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface PromiseLike<out T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     *
     * @param { function } onFulfilled - The callback to execute when the Promise is resolved.
     * @param { function } [onRejected] - The callback to execute when the Promise is rejected.
     * @returns { PromiseLike<Awaited<U | E>> } A PromiseLike for the result of the callbacks.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T, E = never>(onFulfilled: (value: T) => PromiseLike<U> | U,
        onRejected?: (error: Error) => PromiseLike<E> | E): PromiseLike<Awaited<U | E>>;
}

/**
 * Represents the status of a promise.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseStatus {
    /**
     * The fulfilled status string.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static readonly fulfilled: string;

    /**
     * The rejected status string.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static readonly rejected: string;
}

/**
 * Represents the result of a fulfilled promise.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseFulfilledResult<T> {
    /**
     * The status of the promise.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    status: string;

    /**
     * Constructs an empty PromiseFulfilledResult.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Constructs a PromiseFulfilledResult with the given value.
     *
     * @param { T } value - the fulfilled value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(value: T);

    /**
     * The value of the fulfilled promise.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    value: T;
}

/**
 * Represents the result of a rejected promise.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseRejectedResult {
    /**
     * The status of the promise.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    status: string;

    /**
     * Constructs a PromiseRejectedResult with a default error.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Constructs a PromiseRejectedResult with the given reason.
     *
     * @param { Error } reason - the rejection reason.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(reason: Error);

    /**
     * The reason the promise was rejected.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reason: Error;
}

/**
 * Represents the settled result of a promise.
 *
 * @unionmember { PromiseFulfilledResult<T> }
 * @unionmember { PromiseRejectedResult }
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

/**
 * Represents the eventual completion or failure of an asynchronous operation.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Promise<out T> implements PromiseLike<T> {
    /**
     * Constructs a new Promise with the given callback.
     *
     * @param { function } callback - The callback to execute.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(callback: (resolve: (value: PromiseLike<T> | T) => void,
        reject: (error: Error) => void) => void);

    /**
     * Attaches a callback for the resolution of the Promise.
     *
     * @param { function } onFulfilled - The callback to execute when the Promise is resolved.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T>(onFulfilled: () => PromiseLike<U> | U): Promise<Awaited<U>>;

    /**
     * Attaches no callback for the resolution of the Promise.
     *
     * @param { undefined } [_onFulfilled] - Undefined to skip fulfillment handling.
     * @returns { Promise<Awaited<T>> } Promise used to return Awaited<T>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then(_onFulfilled?: undefined): Promise<Awaited<T>>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     *
     * @param { function } onFulfilled - The callback to execute when the Promise is resolved.
     * @param { function } [onRejected] - The callback to execute when the Promise is rejected.
     * @returns { Promise<Awaited<U | E>> } Promise used to return Awaited<U | E>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T, E = never>(onFulfilled: (value: T) => PromiseLike<U> | U,
        onRejected?: (error: Error) => PromiseLike<E> | E): Promise<Awaited<U | E>>;

    /**
     * Attaches a callback for the rejection of the Promise with no error parameter.
     *
     * @param { function } onRejected - The callback to execute when the Promise is rejected.
     * @returns { Promise<Awaited<T | U>> } Promise used to return Awaited<T | U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    catch<U = never>(onRejected: () => PromiseLike<U> | U): Promise<Awaited<T | U>>;

    /**
     * Attaches a callback for the rejection of the Promise.
     *
     * @param { function } [onRejected] - The callback to execute when the Promise is rejected.
     * @returns { Promise<Awaited<T | U>> } Promise used to return Awaited<T | U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    catch<U = never>(onRejected?: (error: Error) => PromiseLike<U> | U): Promise<Awaited<T | U>>;

    /**
     * Attaches a callback that is invoked when the Promise is settled.
     *
     * @param { function } [onFinally] - The callback to execute when the Promise is settled.
     * @returns { Promise<Awaited<T>> } Promise used to return Awaited<T>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    finally<U = T>(onFinally?: () => PromiseLike<U> | U): Promise<Awaited<T>>;

    /**
     * Creates a resolved Promise with no value.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static resolve(): Promise<void>;

    /**
     * Creates a resolved Promise with the given value.
     *
     * @param { PromiseLike<U> | U } value - The value to resolve with.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static resolve<U>(value: PromiseLike<U> | U): Promise<Awaited<U>>;

    /**
     * Creates a rejected Promise with no value.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static reject(): Promise<void>;

    /**
     * Creates a rejected Promise with the given error.
     *
     * @param { Error } error - The error to reject with.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static reject<U = never>(error: Error): Promise<Awaited<U>>;

    /**
     * Waits for all promises to resolve from a FixedArray.
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - The promises to wait for.
     * @returns { Promise<Array<Awaited<U>>> } Promise used to return Array<Awaited<U>>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static all<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Array<Awaited<U>>>;

    /**
     * Waits for all promises to resolve from an Iterable.
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - The promises to wait for.
     * @returns { Promise<Array<Awaited<U>>> } Promise used to return Array<Awaited<U>>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static all<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Array<Awaited<U>>>;

    /**
     * Waits for all promises to settle from a FixedArray.
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - The promises to wait for.
     * @returns { Promise<PromiseSettledResult<Awaited<U>>[]> } Promise used to return
     *     PromiseSettledResult<Awaited<U>>[].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static allSettled<U>(promises: FixedArray<PromiseLike<U> | U | undefined>):
        Promise<PromiseSettledResult<Awaited<U>>[]>;
    /**
     * Waits for all promises to settle from an Iterable.
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - The promises to wait for.
     * @returns { Promise<PromiseSettledResult<Awaited<U>>[]> } Promise used to return
     *     PromiseSettledResult<Awaited<U>>[].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static allSettled<U>(promises: Iterable<PromiseLike<U> | U>): Promise<PromiseSettledResult<Awaited<U>>[]>;

    /**
     * Waits for any promise to resolve from a FixedArray.
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - The promises to wait for.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static any<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Awaited<U>>;

    /**
     * Waits for any promise to resolve from an Iterable.
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - The promises to wait for.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static any<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Awaited<U>>;

    /**
     * Waits for the first promise to settle from a FixedArray.
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - The promises to wait for.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static race<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Awaited<U>>;

    /**
     * Waits for the first promise to settle from an Iterable.
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - The promises to wait for.
     * @returns { Promise<Awaited<U>> } Promise used to return Awaited<U>.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static race<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Awaited<U>>;
}
