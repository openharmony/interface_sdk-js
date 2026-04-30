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
 * SparseArray is a sparse array implementation that uses Map as the underlying storage.
 * It only stores non-undefined values, making it memory-efficient for arrays with many empty slots.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
export class SparseArray<T> {
    /**
     * Get the length of the sparse array.
     *
     * @returns { int } The length of the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    get length(): int;

    /**
     * Creates a new empty instance of SparseArray.
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor();

    /**
     * Creates a new instance of SparseArray with the specified initial length.
     *
     * @param { int } arrayLen - The initial length of the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(arrayLen: int);

    /**
     * Creates a new instance of SparseArray with the given elements.
     *
     * @param { T } first - The first element of the sparse array.
     * @param { T[] } d - The rest of the elements to initialize the sparse array with.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(first: T, ...d: T[]);

    /**
     * Appends new elements to the end of the sparse array and returns the new length.
     *
     * @param { T[] } items - The elements to add to the end of the sparse array.
     * @returns { int } The new length of the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    push(...items: T[]): int;

    /**
     * Appends new elements to the end of the sparse array and returns the new length.
     *
     * @param { T } val - The elements to add to the end of the sparse array.
     * @returns { int } The new length of the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    push(val: T): int;
    
    /**
     * Performs the specified action for each element in the sparse array.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
     *     function one time for each element in the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    forEach(callbackfn: (value: T, index: int, array: SparseArray<T>) => void): void;

    /**
     * Returns a string representing the sparse array and its elements.
     *
     * @returns { string } return the string.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toString(): string;

    /**
     * Returns the value of the first element in the sparse array where predicate is true, and undefined otherwise.
     *
     * @param { function } predicate - A function that accepts up to three arguments.
     *     The find method calls the predicate
     *     function one time for each element in the sparse array.
     * @returns { T | undefined } The value of the first element in the sparse array where predicate is true,
     *     and undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    find(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): T | undefined;

    /**
     * Changes the contents of the sparse array by removing or replacing existing elements and/or
     * adding new elements in place.
     *
     * @param { int } start - The zero-based location in the sparse array from which to start removing elements.
     * @param { int } deleteCount - The number of elements to remove.
     * @param { T[] } items - Elements to insert into the sparse array in place of the deleted elements.
     * @returns { SparseArray<T> } A sparse array containing the elements that were deleted.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    splice(start: int, deleteCount: int, ...items: T[]): SparseArray<T>;

    /**
     * Returns the index of the first element in the sparse array where predicate is true, and -1 otherwise.
     *
     * @param { function } predicate - A function that accepts up to three arguments.
     *     The findIndex method calls the predicate function one time for each element in the sparse array.
     * @returns { int } The index of the first element in the sparse array where predicate is true, and -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    findIndex(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): int;
    
    /**
     * Returns the elements of a sparse array that meet the condition specified in a callback function.
     *
     * @param { function } predicate - A function that accepts up to three arguments.
     *     The filter method calls the predicate function one time for each element in the sparse array.
     * @returns { SparseArray<T> } A sparse array containing the elements that meet the condition.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    filter(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): SparseArray<T>;

     /**
      * Determines whether the sparse array includes a certain element, returning true or false as appropriate.
      *
      * @param { T } searchElement - The element to search for.
      * @param { int } [fromIndex] - The position in this sparse array at which to begin searching for searchElement.
      * @returns { boolean } true if searchElement is found, false otherwise.
      * @syscap SystemCapability.Utils.Lang
      * @FaAndStageModel
      * @since 24 staticonly
      */
     includes(searchElement: T, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in a sparse array, or -1 if it is not present.
     *
     * @param { T } searchElement - The value to locate in the sparse array.
     * @param { int } [fromIndex] - The sparse array index at which to begin the search.
     *     If fromIndex is omitted, the search starts at index 0.
     * @returns { int } The index of the first occurrence of the value in the sparse array, or -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    indexOf(searchElement: T, fromIndex?: int): int;

    /**
     * Determines whether the specified value is a sparse array.
     *
     * @param { Any } value - The value to test.
     * @returns { boolean } true if the value is a sparse array, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static isSparseArray(value: Any): boolean;

    /**
     * Adds all the elements of a sparse array separated by the specified separator string.
     *
     * @param { string } [separator] - A string used to separate one element of the sparse array from
     *     the next in the resulting string.
     * @returns { string } A string with all sparse array elements joined.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    join(separator?: string): string;

    /**
     * Returns a copy of a section of a sparse array.
     *
     * @param { int } [start] - The beginning index of the specified portion of the sparse array.
     * @param { int } [end] - The end index of the specified portion of the sparse array.
     * @returns { SparseArray<T> } A new SparseArray object containing the extracted elements.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    slice(start?: int, end?: int): SparseArray<T>;

    /**
     * Creates a new SparseArray instance from an array-like or iterable object.
     *
     * @param { ArrayLike<U> | Iterable<U> } arrayLike - An array-like or iterable object to convert to a sparse array.
     * @returns { SparseArray<U> } A new SparseArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static from<U>(arrayLike: ArrayLike<U> | Iterable<U>): SparseArray<U>;

    /**
     * Creates a new SparseArray instance from an array-like or iterable object.
     *
     * @param { ArrayLike<U> } arr - An array-like or iterable object to convert to a sparse array.
     * @returns { SparseArray<U> } A new SparseArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static from<U>(arr: ArrayLike<U>): SparseArray<U>;

    /**
     * Sorts the elements of a sparse array in place and returns the sparse array.
     *
     * @param { function } [compareFn] - A function used to determine the order of the elements.
     * @returns { this } The sorted sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    sort(compareFn?: (a: T, b: T) => int): this;

    /**
     * Returns a new sparse array consisting of this sparse array concatenated with other arrays or values.
     *
     * @param { SparseArray<T> } items - Additional arrays and/or values to concatenate to the result.
     * @returns { SparseArray<T> }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    concat(items: SparseArray<T>): SparseArray<T>;

    /**
     * Returns a new sparse array with all sub-array elements concatenated into it
     * recursively up to the specified depth.
     *
     * @param { int } [depth]
     * @returns { SparseArray<U> }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    flat<U = T>(depth?: int): SparseArray<U>;

    /**
     * Calls a defined callback function on each element of a sparse array. 
     * Then, flattens the result into a new sparse array.
     * This is identical to a map() followed by a flat() with depth 1.
     *
     * @param { function } fn - A function that produces an element of the new SparseArray.
     * @returns { SparseArray<U> } A new sparse array with each element being the result of the callback function
     *     and flattened.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    flatMap<U = T>(fn: (v: T, k: int, arr: SparseArray<T>) => U): SparseArray<U>;

    /**
     * Determines whether the specified callback function returns true for any element of a sparse array.
     *
     * @param { function } predicate - A function that accepts up to three arguments. 
     *     The some method calls the predicate function for each element in the sparse array until
     *     the predicate returns a value is coercible to the Boolean value true,until the end of the sparse array.
     * @returns { boolean } true if the callback function returns true for any element in the sparse array; 
     *     otherwise, false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    some(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): boolean;

    /**
     * Calls a defined callback function on each element of a sparse array,
     * and returns an array that contains the results.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the sparse array.
     * @returns { SparseArray<U> }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    map<U>(callbackfn: (value: T, index: int, array: SparseArray<T>) => U): SparseArray<U>;

    /**
     * Returns an iterable of values in the sparse array.
     *
     * @returns { IterableIterator<T> } An iterable of values in the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    values(): IterableIterator<T>;

    /**
     * Removes the last element from a sparse array and returns it.
     *
     * @returns { T | undefined } The last element of the sparse array, or undefined if the sparse array is empty.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    pop(): T | undefined;

    /**
     * Removes the first element from a sparse array and returns it.
     *
     * @returns { T | undefined } The first element of the sparse array, or undefined if the sparse array is empty.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    shift(): T | undefined;

    /**
     * Returns an iterable of keys in the sparse array.
     *
     * @returns { IterableIterator<int> } An iterable of keys in the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    keys(): IterableIterator<int>;

    /**
     * Changes all sparse array elements from start to end index to a static value
     * and returns the modified sparse array.
     *
     * @param { T } value - The value to fill the sparse array section with.
     * @param { int } [start] - The index to start filling the sparse array at. If start is negative,
     *     it is treated as length+start.
     * @param { int } [end] - The index to stop filling the sparse array at. If end is negative,
     *     it is treated as length+end.
     * @returns { this } The modified sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    fill(value: T, start?: int, end?: int): this;

    /**
     * Inserts new elements at the start of a sparse array and returns the new length.
     *
     * @param { T[] } items - Elements to insert at the start of the sparse array.
     * @returns { int } The new length of the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    unshift(...items: T[]): int;

    /**
     * Reverses the elements in a sparse array in place and returns the sparse array.
     *
     * @returns { this } The reversed sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    reverse(): this;
    /**
     * Returns an iterable of key, value pairs for every entry in the sparse array.
     *
     * @returns { IterableIterator<[int, T]> } An iterable of key, value pairs for every entry in the sparse array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    entries(): IterableIterator<[int, T]>;
    /**
     * Returns the index of the last occurrence of a value in a sparse array, or -1 if it is not present.
     *
     * @param { T } searchElement - The value to locate in the sparse array.
     * @param { int } [fromIndex] - The sparse array index at which to begin the search backwards.
     *     If fromIndex is omitted, the search starts at the last index.
     * @returns { int } The index of the last occurrence of the value in the sparse array, or -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    lastIndexOf(searchElement: T, fromIndex?: int): int;

    /**
     * Calls the specified callback function for all the elements in a sparse array. 
     * The return value of the callback function is the accumulated result.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. 
     *     The reduce method calls the callbackfn function one time for each element in the sparse array.
     * @returns { T } The accumulated result.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, index: int, array: SparseArray<T>) => T): T;

    /**
     * Calls the specified callback function for all the elements in a sparse array.
     * The return value of the callback function is the accumulated result.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
     *     callbackfn function one time for each element in the sparse array.
     * @param { U } initialValue - If initialValue is specified,
     *     it is used as the initial value to start the accumulation.
     * @returns { U } The accumulated result.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    reduce<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: SparseArray<T>) => U, initialValue: U): U;

    /**
     * Determines whether all the members of a sparse array satisfy the specified test.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The every method calls the
     *     predicate function for each element in the sparse array until the predicate returns a value
     *     which is coercible to the Boolean value false,or until the end of the sparse array.
     * @returns { boolean } true if the callback function returns true for all elements, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    every(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): boolean;

    /**
     * Creates a new SparseArray instance from a variable number of arguments.
     *
     * @param { U[] } items - Elements to include in the new SparseArray instance.
     * @returns { SparseArray<U> } A new SparseArray instance containing the specified elements.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static of<U>(...items: U[]): SparseArray<U>;

    /**
     * Returns the element at the specified index.
     *
     * @param { int } index - The zero-based index of the desired element.
     *     A negative index counts back from the end of the sparse array.
     * @returns { T | undefined } The element at the specified index, or undefined if the index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    at(index: int): T | undefined;

    /**
     * Copies a sequence of sparse array elements within the sparse array.
     *
     * @param { int } target - The zero-based index at which to copy the sequence to.
     * @param { int } start - The zero-based index at which to begin copying elements from.
     * @param { int } [end] - The zero-based index at which to stop copying elements from.
     * @returns { this }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    copyWithin(target: int, start: int, end?: int): this;

    /**
     * Returns the value of the last element in the sparse array where predicate is true, and undefined otherwise.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The findLast method calls the
     *     predicate function one time for each element in the sparse array, in descending order.
     * @returns { T | undefined } The value of the last element in the sparse array where predicate is true,
     *     and undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    findLast(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): T | undefined;

    /**
     * Returns the index of the last element in the sparse array where predicate is true, and -1 otherwise.
     *
     * @param { function } predicate - A function that accepts up to three arguments. The findLastIndex method calls
     *     the predicate function one time for each element in the sparse array, in descending order.
     * @returns { int } The index of the last element in the sparse array where predicate is true, and -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    findLastIndex(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): int;

    /**
     * Calls the specified callback function for all the elements in a sparse array, in descending order.
     * The return value of the callback function is the accumulated result.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls
     *     the callbackfn function one time for each element in the sparse array, in descending order.
     * @returns { T } The accumulated result.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, index: int, array: SparseArray<T>) => T): T;

    /**
     * Calls the specified callback function for all the elements in a sparse array, in descending order.
     * The return value of the callback function is the accumulated result.
     *
     * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
     *     callbackfn function one time for each element in the sparse array, in descending order.
     * @param { U } initialValue - If initialValue is specified, used as the initial value to start the accumulation.
     * @returns { U }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    reduceRight<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: SparseArray<T>) => U, initialValue: U): U;

    /**
     * Returns a new sparse array with the elements in reversed order.
     *
     * @returns { SparseArray<T> } A new sparse array with the elements in reversed order.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toReversed(): SparseArray<T>;

    /**
     * Returns a new sparse array with some elements removed and/or replaced at a given index.
     *
     * @param { int } start - The zero-based location in the sparse array from which to start removing elements.
     * @param { int } deleteCount - The number of elements to remove.
     * @param { T[] } items - Elements to insert into the sparse array in place of the deleted elements.
     * @returns { SparseArray<T> } A new sparse array with the specified elements removed and/or replaced.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toSpliced(start: int, deleteCount: int, ...items: T[]): SparseArray<T>;

    /**
     * Returns a new sparse array with the elements sorted in ascending order.
     *
     * @param { function } [compareFn] - A function used to determine the order of the elements.
     * @returns { SparseArray<T> }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toSorted(compareFn?: (a: T, b: T) => int): SparseArray<T>;
}
