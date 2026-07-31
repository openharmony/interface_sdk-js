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
 * Represents an iterator result object containing whether iteration is done and the current element value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IteratorResult<out T> {
    /**
     * Indicates whether the iteration has completed. When true, the iterator has finished producing values
     * and value will be undefined; when false, value contains the current element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    done: boolean;

    /**
     * The current element value returned by the iterator. When done is true, value is undefined;
     * when done is false, value contains the current iteration element of type T.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly value: T | undefined;

    /**
     * Creates an IteratorResult object representing completed iteration
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Creates an IteratorResult object with the specified done status and value
     *
     * @param { boolean } done - Indicates whether iteration is completed
     * @param { T | undefined } value - The element value returned by the iterator
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(done: boolean, value: T | undefined);

    /**
     * Creates an IteratorResult object representing incomplete iteration with the specified value
     *
     * @param { T } value - The element value returned by the iterator
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(value: T);
}

/**
 * Iterator interface that defines a method to get the next value in a sequence
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Iterator<out T> {

    /**
     * Returns the next result in the iterator
     *
     * @returns { IteratorResult<T> } - An IteratorResult object containing the iteration status and value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    next(): IteratorResult<T>;
}

/**
 * Iterable interface representing an object whose elements can be traversed
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Iterable<out T> {
    /**
     * Returns an iterator for this object
     *
     * @returns { Iterator<T> } - An iterator instance for this iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): Iterator<T>;
}

/**
 * An object that satisfies both Iterator and Iterable interfaces, meaning it is both an iterator and an iterable
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface IterableIterator<out T> extends Iterator<T>, Iterable<T> {

    /**
     * Returns itself, since this object is itself an iterator
     *
     * @returns { IterableIterator<T> } - Returns this
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): IterableIterator<T>;
}

/**
 * Iterates over an iterator and executes the specified callback function for each element
 *
 * @param { Iterator<V> } x - The iterator to iterate over
 * @param { function } fn - The callback function to execute for each element of the iterator
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function iteratorForEach<V>(x: Iterator<V>, fn: (x: V) => void): void;
