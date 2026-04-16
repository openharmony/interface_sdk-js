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
 * Represents a JS API-compatible Array.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Array<T> implements ReadonlyArray<T>, Iterable<T> {
    /**
     * Creates a new instance of Array with the given elements.
     *
     * @param { T } first - The first element of the array.
     * @param { T[] } d - The rest of the elements to initialize the array with.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(first: T, ...d: T[]);

    /**
     * Creates a new instance of Array with a specific length and initializes each element using a function.
     *
     * @param { int } arrayLen - The amount of elements in the array.
     * @param { function } initializer - A function that generates an element for a given index.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(arrayLen: int, initializer: (index: int) => T);
    
    /**
     * Returns an iterator over all values
     *
     * @returns { IterableIterator<T> } An iterator over all values.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_iterator(): IterableIterator<T>;

    /**
     * Get the length of the array.
     *
     * @returns { int } The length of the array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    get length(): int;

    /**
     * Get the element at the specified index.
     *
     * @param { int } idx - The index of the element to get.
     * @returns { T } The element at the specified index.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_get(idx: int): T;

    /**
     * Set the element at the specified index.
     *
     * @param { int } idx - The index of the element to set.
     * @param { T } val - The value to set at the specified index.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_set(idx: int, val: T): void;

    /**
     * Creates a new instance of Array with the given elements.
     *
     * @param { T[] } items - The elements to initialize the array with.
     * @returns { Array<T> } A new Array instance with the given elements.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static $_invoke<T>(...items: T[]): Array<T>;

    /**
     * Creates a new `Array` instance from a `FixedArray`.
     *
     * @param { FixedArray<T> } arr - The source primitive array.
     * @returns { Array<T> } A new Array instance containing the elements from the source array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static from<T>(arr: FixedArray<T>): Array<T>;

    /**
     * Creates a new `Array` instance from an `ArrayLike` object.
     *
     * @param { ArrayLike<T> } arr - An array-like object to convert to an array.
     * @returns { Array<T> } A new Array instance containing the elements from the array-like object.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static from<T>(arr: ArrayLike<T>): Array<T>;

    /**
     * Creates a new `Array` instance from an iterable or array-like object.
     *
     * @param { ArrayLike<T> | Iterable<T> } iterable - An iterable or array-like object to convert to an array.
     * @returns { Array<T> } A new Array instance containing the elements from the iterable.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static from<T>(iterable: ArrayLike<T> | Iterable<T>): Array<T>;

    /**
     * Creates a new `Array` instance from a `FixedArray` and applies a mapping function to each element.
     *
     * @param { FixedArray<T> } values - The source primitive array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Array<U> } A new Array instance with the mapped values.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static from<T, U>(values: FixedArray<T>, mapfn: (v: T, k: int) => U): Array<U>;

    /**
     * Creates a new `Array` instance from an iterable object, applying a mapping function to each element.
     * Every value to be added to the array is first passed through this function, and `mapfn`'s return value is added
     * to the array instead.
     *
     * @param { ArrayLike<T> | Iterable<T> } iterable - An iterable or array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Array<U> } A new Array instance with the mapped values.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static from<T, U>(iterable: ArrayLike<T> | Iterable<T>, mapfn: (v: T, k: int) => U): Array<U>;

    /**
     * Checks whether the passed value is an Array.
     *
     * @param { Any } o - The value to be checked.
     * @returns { boolean } True if the value is an Array; otherwise, false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static isArray(o: Any): boolean;

    /**
     * Performs the specified action for each element in an array.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
     *     function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    forEach(callbackfn: (value: T, index: int, array: Array<T>) => void): void;
}
