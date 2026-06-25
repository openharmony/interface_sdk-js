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
 * Represents a JS API-compatible Array.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class Array<T> implements ReadonlyArray<T>, Iterable<T> {
    /**
     * Creates a new instance of Array with the given elements.
     *
     * @param { T } first - The first element of the array.
     * @param { T[] } d - The rest of the elements to initialize the array with.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(first: T, ...d: T[]);

    /**
     * Creates a new instance of Array with a specific length and initializes each element using a function.
     *
     * @param { int } arrayLen - The amount of elements in the array
     *     <br>The value range is all integers.
     * @param { function } initializer - A function that generates an element for a given index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(arrayLen: int, initializer: (index: int) => T);
    
    /**
     * Returns an iterator over all values
     *
     * @returns { IterableIterator<T> } An iterator over all values.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_iterator(): IterableIterator<T>;

    /**
     * Get the length of the array.
     *
     * @returns { int } The length of the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get length(): int;

    /**
     * Get the element at the specified index.
     *
     * @param { int } idx - The index of the element to get
     *     <br>The value range is all integers.
     * @returns { T } The element at the specified index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(idx: int): T;

    /**
     * Set the element at the specified index.
     *
     * @param { int } idx - The index of the element to set
     *     <br>The value range is all integers.
     * @param { T } val - The value to set at the specified index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_set(idx: int, val: T): void;

    /**
     * Creates a new instance of Array with the given elements.
     *
     * @param { T[] } items - The elements to initialize the array with.
     * @returns { Array<T> } A new Array instance with the given elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke<T>(...items: T[]): Array<T>;

    /**
     * Creates a new `Array` instance from a `FixedArray`.
     *
     * @param { FixedArray<T> } arr - The source primitive array.
     * @returns { Array<T> } A new Array instance containing the elements from the source array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(arr: FixedArray<T>): Array<T>;

    /**
     * Creates a new `Array` instance from an `ArrayLike` object.
     *
     * @param { ArrayLike<T> } arr - An array-like object to convert to an array.
     * @returns { Array<T> } A new Array instance containing the elements from the array-like object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(arr: ArrayLike<T>): Array<T>;

    /**
     * Creates a new `Array` instance from an iterable or array-like object.
     *
     * @param { ArrayLike<T> | Iterable<T> } iterable - An iterable or array-like object to convert to an array.
     * @returns { Array<T> } A new Array instance containing the elements from the iterable.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(iterable: ArrayLike<T> | Iterable<T>): Array<T>;

    /**
     * Creates a new `Array` instance from a `FixedArray` and applies a mapping function to each element.
     *
     * @param { FixedArray<T> } values - The source primitive array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Array<U> } A new Array instance with the mapped values.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
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
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T, U>(iterable: ArrayLike<T> | Iterable<T>, mapfn: (v: T, k: int) => U): Array<U>;

    /**
     * Checks whether the passed value is an Array.
     *
     * @param { Any } o - The value to be checked.
     * @returns { boolean } True if the value is an Array; otherwise, false.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isArray(o: Any): boolean;

    /**
     * Performs the specified action for each element in an array.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
     *     function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    forEach(callbackfn: (value: T, index: int, array: Array<T>) => void): void;

    /**
     * Creates a new Array of the specified length, filled with the specified initial value.
     *
     * @param { int } arrayLength - The amount of elements in the new array
     *     <br>The value range is all integers.
     * @param { T } initialValue - The value to fill the array with.
     * @returns { Array<T> } A new Array instance filled with the initial value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static create<T>(arrayLength: int, initialValue: T): Array<T>;

    /**
     * Sorts the elements of an array in place and returns the reference to the same array, now sorted.
     *
     * @param { function } [comparator] - Optional. A function that defines the sort order. If omitted, 
     *     the array is sorted according to each character's Unicode code point value, according to the string 
     *     conversion of each element.
     * @returns { this } The sorted array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(comparator?: (a: T, b: T) => int): this;

    /**
     * Returns a new array with the elements sorted using the provided comparator function.
     *
     * @returns { Array<T> } A new sorted array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Array<T>;

    /**
     * Returns a new array with the elements sorted using the provided comparator function.
     *
     * @param { function } comparator - A function that defines the sort order.
     * @returns { Array<T> } A new sorted array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(comparator: (a: T, b: T) => int): Array<T>;

    /**
     * Returns a new Array Iterator object that contains the keys for each index in the array.
     *
     * @returns { IterableIterator<int> } A new Array Iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
     *
     * @returns { IterableIterator<[int, T]> } A new Array Iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, T]>;

    /**
     * Set the length of the array.
     *
     * @param { int } newLen - The new length of the array
     *     <br>The value range is all integers.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set length(newLen: int);

    /**
     * Adds the specified elements to the end of an array and returns the new length of the array.
     *
     * @param { T[] } val - The elements to add to the end of the array.
     * @returns { int } The new length of the array upon which the method was called.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public push(...val: T[]): int;

    /**
     * Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
     *
     * @param { int } start - The index at which to start changing the array
     *     <br>The value range is all integers.
     * @param { int | undefined } del - The number of items to remove after the start index.
     * @param { T[] } items - The elements to add to the array, beginning from start.
     * @returns { Array<T> } An array containing the deleted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public splice(start: int, del: int | undefined, ...items: T[]): Array<T>;

    /**
     * Adds the specified elements to the beginning of an Array and returns the new length of the Array.
     *
     * @param { T[] } values - The elements to add to the front of the array.
     * @returns { int } The new length of the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public unshift(...values: T[]): int;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
     *
     * @param { function } predicate - A function to execute on each value in the array.
     * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: T, index: int, array: Array<T>) => boolean): int;

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The filter method calls the
     *     predicate function one time for each element in the array.
     * @returns { Array<T> } A new array with the elements that pass the test.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(predicate: (value: T, index: int, array: Array<T>) => boolean): Array<T>;

    /**
     * Iterates the array and returns the value of the first element that satisfies the provided testing function.
     *
     * @param { function } predicate - A function to execute on each value in the array.
     * @returns { T | undefined } The value of the first element that satisfies the provided testing function;
     *     otherwise, undefined.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: T, index: int, array: Array<T>) => boolean): T | undefined;

    /**
     * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
     * testing function.
     *
     * @param { function } predicate - A function to execute on each value in the array.
     * @returns { T | undefined } The value of the element if found; otherwise, undefined.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(predicate: (elem: T, index: int, array: Array<T>) => boolean): T | undefined;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The every method calls 
     *     the predicatefunction for each element in the array until the predicate returns a value which is
     *     coercible to the Boolean value false, or until the end of the array.
     * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (value: T, index: int, array: Array<T>) => boolean): boolean;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
     *     function for each element in the array until the predicate returns a value which is
     *     coercible to the Boolean value true, or until the end of the array.
     * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (value: T, index: int, array: Array<T>) => boolean): boolean;

    /**
     * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
     * testing function. If no elements satisfy the testing function, -1 is returned.
     *
     * @param { function } predicate - A function to execute on each value in the array.
     * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(predicate: (element: T, index: int, array: Array<T>) => boolean): int;

    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function
     * is the accumulated result, and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
     *     callbackfn function one time for each element in the array.
     * @returns { T } The accumulated result.
     * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: T, currentValue: T, index: int, array: Array<T>) => T): T;

    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function
     * is the accumulated result, and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
     *     callbackfn function one time for each element in the array.
     * @param { U } initialValue - The initial value of the accumulator.
     * @returns { U } The accumulated result.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: Array<T>) => U,
                         initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
     * function.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
     *     callbackfn function one time for each element in the array.
     * @param { U } initialValue - The initial value of the accumulator.
     * @returns { U } The accumulated result.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, index: int, array: Array<T>) => U,
                          initialValue: U): U;

    /**
     * Creates a new array populated with the results of calling a provided function on every element in the calling
     * array.
     *
     * @param { function } callbackfn - Function that is called for every element of the array. Each time callbackfn
     *     executes, the returned value is added to the new array.
     * @returns { Array<U> } A new array with each element being the result of the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map<U>(callbackfn: (value: T, index: int, array: Array<T>) => U): Array<U>;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
     * function.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
     *     callbackfn function one time for each element in the array.
     * @returns { T } The accumulated result.
     * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: T, currentValue: T, index: int, array: Array<T>) => T): T;
}
