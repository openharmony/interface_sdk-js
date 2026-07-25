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
 * ReadonlySet implementation.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlySet<T> extends Iterable<T> {
    /**
     * Checks if a value is in the Set.
     *
     * @param { T } value - the value to find in the Set.
     * @returns { boolean } true if the value is in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    has(value: T): boolean;

    /**
     * Returns the number of unique elements in the Set.
     *
     * @returns { int } the number of unique elements in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get size(): int;

    /**
     * Executes a provided function once per each value in the Set object, in insertion order.
     *
     * @param { Function } callbackfn - the function to apply.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void): void;

    /**
     * Despite name, returns elements from the Set.
     *
     * @returns { IterableIterator<T> } an iterable of the values in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    keys(): IterableIterator<T>;

    /**
     * Returns elements from the Set.
     *
     * @returns { IterableIterator<T> } an iterable of the values in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    values(): IterableIterator<T>;

    /**
     * Returns an iterable of [v, v] pairs for every value in the Set.
     *
     * @returns { IterableIterator<[T, T]> } an iterable of [v, v] pairs.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    entries(): IterableIterator<[T, T]>;
}

/**
 * SetIterator implementation.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface SetIterator<T> extends IterableIterator<T> {}

/**
 * Set implementation.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Set<K> implements ReadonlySet<K> {
    /**
     * Creates a new Set instance with the specified number of buckets.
     *
     * @param { int } bucketsCount - The number of buckets for the internal map.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(bucketsCount: int);

    /**
     * Creates a new Set instance from another Set.
     *
     * @param { Set<K> } set - Another Set instance used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(set: Set<K>);

    /**
     * Creates a new Set instance from an array.
     *
     * @param { K[] } values - The array used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(values: K[]);

    /**
     * Creates a new Set instance from an iterable object or FixedArray.
     *
     * @param { Iterable<K> | FixedArray<K> | null } [elements] - The iterable object, FixedArray,
     *     or null used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(elements?: Iterable<K> | FixedArray<K> | null);

    /**
     * Gets the number of unique elements in the Set.
     * 
     * @returns { int } - The number of unique elements in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get size(): int;

    /**
     * Returns the default iterator of the Set, which is the values() iterator.
     *
     * @returns { IterableIterator<K> } - The default iterator of the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_iterator(): IterableIterator<K>;

    /**
     * Converts this Set to a String.
     *
     * @returns { string } A string representing the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toString(): string;

    /**
     * Puts a value into the Set.
     *
     * @param { K } val - the value to put into the Set.
     * @returns { this } Add value Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    add(val: K): this;

    /**
     * Checks if a value is in the Set.
     *
     * @param { K } val - the value to find in the Set.
     * @returns { boolean } true if the value is in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    has(val: K): boolean;

    /**
     * Removes a value from the Set.
     *
     * @param { K } val - the value to remove.
     * @returns { boolean } true if the value was removed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    delete(val: K): boolean;

    /**
     * Deletes all elements from the Set.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    clear(): void;

    /**
     * Despite name, returns elements from the Set.
     *
     * @returns { IterableIterator<K> } an iterable of the values in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    keys(): IterableIterator<K>;

    /**
     * Returns elements from the Set.
     *
     * @returns { IterableIterator<K> } an iterable of the values in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    values(): IterableIterator<K>;

    /**
     * Returns an iterable of [v, v] pairs for every value in the Set.
     *
     * @returns { IterableIterator<[K, K]> } an iterable of [v, v] pairs.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    entries(): IterableIterator<[K, K]>;

    /**
     * Executes a provided function once per each value in the Set object, in insertion order.
     *
     * @param { Function } callbackfn - the function to apply.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    forEach(callbackfn: (k: K, v: K, set: Set<K>) => void): void;
}
