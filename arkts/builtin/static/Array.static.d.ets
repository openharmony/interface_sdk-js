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
export class Array<T> implements ReadonlyArray<T>, Iterable<T> {

    /**
     * Creates a new empty instance of Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

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
     * @param { int } arrayLen - The amount of elements in the array.
     *     <br>The value must be an integer greater than or equal to 0.
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
     * @param { int } idx - The index of the element to get.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { T } The element at the specified index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(idx: int): T;

    /**
     * Set the element at the specified index.
     *
     * @param { int } idx - The index of the element to set.
     *     <br>The value must be an integer greater than or equal to 0.
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
     * @param { int } arrayLength - The amount of elements in the new array.
     *     <br>The value must be an integer greater than or equal to 0.
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
     * Sort in ascending order， Returns a new array with the elements.
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
     * @param { int } newLen - The new length of the array.
     *     The value must be an integer greater than or equal to 0
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
     * @param { int } start - The index at which to start changing the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int | undefined } del - The number of items to remove after the start index, If the input is
     *     undefined, it means 0, and no elements are deleted.
     * @param { T[] } items - The elements to add to the array, beginning from start.
     * @returns { Array<T> } Removes elements from an array and, if necessary, inserts new elements in their place,
     *     returning the deleted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public splice(start: int, del: int | undefined, ...items: T[]): Array<T>;

    /**
     * Changes the contents of an array by removing existing elements in place from the start index to the end.
     *
     * @param { int } start - The index at which to start changing the array.
     *     <br>The value should be an integer.
     * @returns { Array<T> } An array containing the deleted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public splice(start: int): Array<T>;

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
     *     the predicate function for each element in the array until the predicate returns a value which is
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
     * @param { function } predicate - A function that accepts up to three arguments. The some method calls 
     *     the predicate function for each element in the array until the predicate returns a value which is
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
     * Calls the specified callback function for all the elements in an array. The return value of the callback
     * function is the accumulated result, and is provided as an argument in the next call to the callback function.
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
     * Calls the specified callback function for all the elements in an array. The return value of the callback
     * function is the accumulated result, and is provided as an argument in the next call to the callback function.
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

    /**
     * Removes the first element from an array and returns that removed element.
     * This method changes the length of the array.
     *
     * @returns { T | undefined } The removed element from the array; undefined if the array is empty.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public shift(): T | undefined;

    /**
     * Removes the last element from an array and returns that element. This method changes the length of the array.
     *
     * @returns { T | undefined } The removed element from the array; undefined if the array is empty.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public pop(): T | undefined;

    /**
     * Creates a new `Array` by merging this `Array` instance with given arrays and/or values.
     *
     * @param { FixedArray<ConcatArray<T>> } items - Arrays and/or values to concatenate into a new array.
     * @returns { Array<T> } A new Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(...items: FixedArray<ConcatArray<T>>): Array<T>;

    /**
     * Changes all elements in the Array to a static value, from a start index to an end index.
     *
     * @param { T } value - The value to fill the array with.
     * @param { int } [start] - The index at which to start filling (optional).If start is greater than or equal to
     *     the array length, no elements are filled. If start is negative, it is treated as 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - The index at which to end filling (optional, not included). If end is greater than the
     *     array length, the array length is used as the end index. If end is negative, it is treated as 0.
     *     <br>The value should be an integer.
     * @returns { this } The modified array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: T, start?: int, end?: int): this;

    /**
     * Returns a copy of a section of an array.
     *
     * @param { int } start - The beginning index of the specified portion of the array. If start is greater than 
     *     or equal to the array length,  an empty array is returned. If start is negative,
     *     it is treated as length + start.
     *     <br>The value should be an integer.
     * @returns { Array<T> } A new Array object containing the extracted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(start: int): Array<T>;

    /**
     * Returns a copy of a section of an array.
     *
     * @param { int } [start] - The beginning index of the specified portion of the array.If start is greater than
     *     or equal to the array length,  an empty array is returned. If start is negative,
     *     it is treated as length + start.
     *     <br>The value should be an integer.
     * @param { int } [end] - The end index of the specified portion of the array. If end is greater than the array
     *     length,the array length is used as the end index. If end is negative, it is treated as 0.
     *     <br>The value should be an integer.
     * @returns { Array<T> } A new Array object containing the extracted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(start?: int, end?: int): Array<T>;

    /**
     * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
     * is searched backwards.
     *
     * @param { T } searchElement - The element to locate in the array.
     * @returns { int } The last index of the element in the array; -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: T): int;

    /**
     * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
     * is searched backwards, starting at fromIndex.
     *
     * @param { T } searchElement - The element to locate in the array.
     * @param { int } [fromIndex] - The index at which to start searching backwards.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { int } The last index of the element in the array; -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: T, fromIndex?: int): int;

    /**
     * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
     * separator string.
     *
     * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
     *     elements are separated with a comma.
     * @returns { string } A string with all array elements joined.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(sep?: string): string;

    /**
     * Returns a string representing the specified array and its elements.
     *
     * @returns { string } A string representing the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns a string representing the elements of the array. The elements are converted to Strings using their
     * toLocaleString methods.
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with configuration properties.
     * @returns { string } A string representing the elements of the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new array with some elements removed and/or replaced at a given index.
     *
     * @param { int } start - The zero-based index at which to start changing the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { Array<T> } A new array with the changes applied.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start: int): Array<T>;

    /**
     * Returns a new array with some elements removed and/or replaced at a given index.
     *
     * @param { int } start - The zero-based index at which to start changing the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } del - The number of elements to remove.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { FixedArray<T> } items - The elements to add to the array.
     * @returns { Array<T> } A new array with the changes applied.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start: int, del: int, ...items: FixedArray<T>): Array<T>;

    /**
     * Returns a new array with some elements removed and/or replaced at a given index.
     *
     * @param { int } [start] - The zero-based index at which to start changing the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } [del] - The number of elements to remove.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { Array<T> } A new array with the changes applied.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start?: int, del?: int): Array<T>;

    /**
     * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
     *
     * @param { T } val - The value to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { boolean } True if the value is found, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(val: T, fromIndex?: int): boolean;

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     *
     * @param { T } val - The element to locate in the array.
     * @returns { int } The first index of the element in the array; -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(val: T): int;

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     *
     * @param { T } val - The element to locate in the array.
     * @param { int } [fromIndex] - The index to start the search at.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { int } The first index of the element in the array; -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(val: T, fromIndex?: int): int;

    /**
     * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
     * first.
     *
     * @returns { this } The reversed array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): this;

    /**
     * Returns a new array with the elements in reversed order.
     *
     * @returns { Array<T> } A new reversed array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Array<T>;

    /**
     * Returns a new Array with the element at the given index replaced with the given value.
     *
     * @param { int } index - The zero-based index at which to replace the value.
     *     <br>The value should be an integer.
     * @param { T } value - The new value to insert at the given index.
     * @returns { Array<T> } A new array with the element replaced.
     * @throws { RangeError } If - the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: T): Array<T>;

    /**
     * Returns a new Array Iterator object that contains the values for each index in the array.
     *
     * @returns { IterableIterator<T> } A new Array Iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<T>;

    /**
     * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
     * length.
     *
     * @param { int } target - Zero-based index at which to copy the sequence to.
     *     <br>The value should be an integer.
     * @returns { this } The modified array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): this;

    /**
     * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
     * length.
     *
     * @param { int } target - Zero-based index at which to copy the sequence to.
     *     <br>The value should be an integer.
     * @param { int } start - Zero-based index at which to start copying elements from.
     *     <br>The value should be an integer.
     * @returns { this } The modified array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int): this;

    /**
     * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
     * length.
     *
     * @param { int } target - Zero-based index at which to copy the sequence to.
     *     <br>The value should be an integer.
     * @param { int } start - Zero-based index at which to start copying elements from.
     *     <br>The value should be an integer.
     * @param { int } [end] - Zero-based index at which to end copying elements from.
     *     <br>The value should be an integer.
     * @returns { this } The modified array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): this;

    /**
     * Extends the Array with new elements up to the specified length.
     *
     * @param { int } arrayLength - The new length of the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { T } initialValue - The initial value for the added elements.
     * @throws { RangeError } Throws - a RangeError if the array length is negative.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public extendTo(arrayLength: int, initialValue: T): void;

    /**
     * Shrinks the Array to the specified length. Elements beyond the new length are removed.
     *
     * @param { int } arrayLength - The length at which to shrink the array.
     *     <br>The value must be an integer greater than or equal to 0.
     * @throws { RangeError } Throws - a RangeError if the array length is negative.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public shrinkTo(arrayLength: int): void;

    /**
     * Creates a new Array with all sub-array elements concatenated into it recursively up to the specified depth.
     *
     * @param { int } depth - The depth level specifying how deep a nested array structure should be flattened.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { Array<U> } A new array with the sub-array elements concatenated into it.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flat<U = T>(depth: int): Array<U>;

    /**
     * Creates a new Array with all sub-array elements concatenated into it recursively with a default depth of 1.
     *
     * @returns { Array<U> } A new array with the sub-array elements concatenated into it.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flat<U = T>(): Array<U>;

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into a new array.
     * This is identical to a map() followed by a flat() with depth 1.
     *
     * @param { function } fn - A function that produces an element of the new Array.
     * @returns { Array<U> } A new array with each element being the result of the callback function and flattened.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flatMap<U=T>(fn: (v: T, k: int, arr: Array<T>) => U | ReadonlyArray<U>): Array<U>;

    /**
     * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     *
     * @param { int } index - Zero-based index of the array element to be returned.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { T } The element at the given index.
     * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): T;
}
