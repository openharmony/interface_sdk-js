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
 * Takes an integer value and returns the item at that index, allowing for
 * positive and negative integers. Negative integers count back from the last
 * item in the array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Boolean } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<boolean>, index: int): Boolean;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<boolean> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int): FixedArray<boolean>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<boolean> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int, start: int): FixedArray<boolean>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<boolean> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int, start: int, end?: int): FixedArray<boolean>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<boolean> } self - The array to operate `fill` on.
 * @param { boolean } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 *     <br>The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<boolean>, value: boolean, start?: int, end?: int): FixedArray<boolean>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<boolean> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Boolean | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): Boolean | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<boolean> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<boolean>, predicate: (value: boolean, index: int, 
    array: FixedArray<boolean>) => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Boolean | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<boolean>, predicate: (elem: boolean, index: int, array: FixedArray<boolean>)
    => boolean): Boolean | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<boolean> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<boolean> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<boolean>, predicate: (element: boolean, index: int,
    array: FixedArray<boolean>) => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { boolean } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<boolean>, callbackfn: (previousValue: boolean, currentValue: boolean,
    index: int, array: FixedArray<boolean>) => boolean): boolean;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U=boolean>(self: FixedArray<boolean>, callbackfn: (previousValue: U,
    currentValue: boolean, index: int, array: FixedArray<boolean>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<boolean>, callbackfn: (previousValue: U, currentValue: boolean, 
    index: int, array: FixedArray<boolean>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<boolean>, callbackfn: (value: boolean, index: int, array: FixedArray<boolean>)
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<boolean>, start: int): FixedArray<boolean>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<boolean>, start?: int, end?: int): FixedArray<boolean>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<boolean> } self - The array to operate `lastIndexOf` on.
 * @param { boolean } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<boolean>, element: boolean, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<boolean> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<boolean>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<boolean> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<boolean>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start: int): FixedArray<boolean>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<boolean> } items - The elements to add to the array.
 * @returns { FixedArray<boolean> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start: int, del: int, ...items: FixedArray<boolean>)
    : FixedArray<boolean>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start?: int, del?: int): FixedArray<boolean>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<boolean> } self - The array to operate `includes` on.
 * @param { boolean } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<boolean>, val: boolean, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<boolean> } self - The array to operate `indexOf` on.
 * @param { boolean } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<boolean>, val: boolean, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<boolean> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<boolean> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<boolean>, comparator: (a: boolean, b: boolean) => int): FixedArray<boolean>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<boolean> } self - The array to operate `reverse` on.
 * @returns { FixedArray<boolean> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<boolean> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<boolean> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<boolean> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { boolean } value - The new value to insert at the given index.
 * @returns { FixedArray<boolean> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<boolean>, index: int, value: boolean): FixedArray<boolean>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `values` on.
 * @returns { IterableIterator<boolean> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<boolean>): IterableIterator<boolean>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, boolean]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<boolean>): IterableIterator<[int, boolean]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<boolean> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<boolean> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<boolean>, callbackfn: (value: boolean, index: int, array: FixedArray<boolean>) 
    => boolean): FixedArray<boolean>;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<boolean> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { boolean } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<boolean>, callbackfn: (previousValue: boolean, currentValue: boolean, 
    index: int, array: FixedArray<boolean>) => boolean): boolean;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<boolean> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<boolean>, fn: (v: boolean, k: int, array: FixedArray<boolean>) => boolean): 
    FixedArray<boolean>;

/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<boolean> } self - The array to operate `concat` on.
 * @param { FixedArray<boolean> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<boolean>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<boolean> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<boolean>, fst: FixedArray<boolean>, ...more: FixedArray<FixedArray<boolean>>): 
    FixedArray<boolean>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<boolean> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<boolean>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<boolean> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<boolean>, ...items: FixedArray<ConcatArray<boolean>>): FixedArray<boolean>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<boolean> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<boolean> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<boolean>, comparator: (a: boolean, b: boolean) => int, start?: int, end?: int): 
    FixedArray<boolean>;

/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<boolean> } self - comparator function that defines the sort order.
 * @returns { FixedArray<boolean> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<boolean> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<boolean>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<byte> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Byte } The element at the given index.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<byte>, index: int): Byte;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<byte> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int): FixedArray<byte>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<byte> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int, start: int): FixedArray<byte>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<byte> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int, start: int, end?: int): FixedArray<byte>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<byte> } self - The array to operate `fill` on.
 * @param { byte } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 *     <br>The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<byte>, value: byte, start?: int, end?: int): FixedArray<byte>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<byte> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Byte | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): Byte | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<byte> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<byte> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Byte | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<byte>, predicate: (elem: byte, index: int, array: FixedArray<byte>) 
    => boolean): Byte | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<byte> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<byte> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<byte> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<byte>, predicate: (element: byte, index: int, array: FixedArray<byte>) 
    => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<byte> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { byte } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<byte>, callbackfn: (previousValue: byte, currentValue: byte, index: int, 
    array: FixedArray<byte>) => byte): byte;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<byte> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = byte>(self: FixedArray<byte>, callbackfn: (previousValue: U, currentValue: byte, 
    index: int, array: FixedArray<byte>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<byte> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<byte>, callbackfn: (previousValue: U, currentValue: byte, index: int, 
    array: FixedArray<byte>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<byte> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<byte>, callbackfn: (value: byte, index: int, array: FixedArray<byte>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<byte> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<byte>, start: int): FixedArray<byte>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<byte> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<byte>, start?: int, end?: int): FixedArray<byte>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<byte> } self - The array to operate `lastIndexOf` on.
 * @param { byte } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<byte>, element: byte, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<byte> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<byte>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<byte> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<byte>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<byte> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<byte> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<byte> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<byte> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start: int): FixedArray<byte>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<byte> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<byte> } [...items] - The elements to add to the array.
 * @returns { FixedArray<byte> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start: int, del: int, ...items: FixedArray<byte>): 
    FixedArray<byte>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<byte> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start?: int, del?: int): FixedArray<byte>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<byte> } self - The array to operate `includes` on.
 * @param { byte } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<byte>, val: byte, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<byte> } self - The array to operate `indexOf` on.
 * @param { byte } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<byte>, val: byte, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<byte> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<byte> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<byte>): FixedArray<byte>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<byte> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<byte> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<byte>, comparator: (a: byte, b: byte) => int): FixedArray<byte>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<byte> } self - The array to operate `reverse` on.
 * @returns { FixedArray<byte> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<byte>): FixedArray<byte>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<byte> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<byte> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<byte>): FixedArray<byte>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<byte> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { byte } value - The new value to insert at the given index.
 * @returns { FixedArray<byte> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<byte>, index: int, value: byte): FixedArray<byte>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<byte> } self - The array to operate `values` on.
 * @returns { IterableIterator<byte> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<byte>): IterableIterator<byte>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<byte> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, byte]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<byte>): IterableIterator<[int, byte]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<byte> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<byte> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<byte>, callbackfn: (value: byte, index: int, array: FixedArray<byte>) => byte): 
    FixedArray<byte>;
/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<byte> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { byte } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<byte>, callbackfn: (previousValue: byte, currentValue: byte, index: int, 
    array: FixedArray<byte>) => byte): byte;

/**
 * Constructs a new `Array` instance and populates it with
 * portion of a given array, filtered down to just the elements from the
 * given array that pass the test implemented by the provided function.
 *
 * @param { FixedArray<byte> } self
 * @param { function } fn - test function, applied to each element of an array.
 * @returns { FixedArray<byte> } New `Array` instance constructed from `this` with elements filtered
 *     using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<byte>, fn: (v: byte, k: int, array: FixedArray<byte>) => boolean): 
    FixedArray<byte>;
/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<byte> } self - The array to operate `concat` on.
 * @param { FixedArray<byte> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<byte>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<byte> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<byte>, fst: FixedArray<byte>, ...more: FixedArray<FixedArray<byte>>): 
    FixedArray<byte>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<byte> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<byte>> } [...items] - The arrays to concatenate into a new array.
 * @returns { FixedArray<byte> } New Array instance, constructed from `this` given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<byte>, ...items: FixedArray<ConcatArray<byte>>): FixedArray<byte>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<byte> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<byte>, comparator: (a: byte, b: byte) => int, start?: int, end?: int): 
    FixedArray<byte>;

/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<byte> } self - comparator function that defines the sort order.
 * @returns { FixedArray<byte> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<byte>): FixedArray<byte>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<byte> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<byte>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<short> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Short } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<short>, index: int): Short;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<short> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int): FixedArray<short>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<short> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int, start: int): FixedArray<short>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<short> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int, start: int, end?: int): FixedArray<short>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<short> } self - The array to operate `fill` on.
 * @param { short } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 *     <br>The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<short>, value: short, start?: int, end?: int): FixedArray<short>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<short> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Short | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): Short | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<short> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<short> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Short | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<short>, predicate: (elem: short, index: int, array: FixedArray<short>) 
    => boolean): Short | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<short> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<short> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<short> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<short>, predicate: (element: short, index: int, array: 
    FixedArray<short>) => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<short> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { short } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<short>, callbackfn: (previousValue: short, currentValue: short, index: int, 
    array: FixedArray<short>) => short): short;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<short> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = short>(self: FixedArray<short>, callbackfn: (previousValue: U, currentValue: short, index: 
    int, array: FixedArray<short>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<short> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<short>, callbackfn: (previousValue: U, currentValue: short, 
    index: int, array: FixedArray<short>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<short> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<short>, callbackfn: (value: short, index: int, array: FixedArray<short>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<short> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<short>, start: int): FixedArray<short>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<short> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<short>, start?: int, end?: int): FixedArray<short>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<short> } self - The array to operate `lastIndexOf` on.
 * @param { short } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<short>, element: short, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<short> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<short>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<short> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<short>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<short> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<short> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<short> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<short> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start: int): FixedArray<short>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<short> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<short> } [...items] - The elements to add to the array.
 * @returns { FixedArray<short> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start: int, del: int, ...items: FixedArray<short>): 
    FixedArray<short>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<short> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<short> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start?: int, del?: int): FixedArray<short>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<short> } self - The array to operate `includes` on.
 * @param { short } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<short>, val: short, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<short> } self - The array to operate `indexOf` on.
 * @param { short } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<short>, val: short, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<short> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<short> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<short>): FixedArray<short>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<short> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<short> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<short>, comparator: (a: short, b: short) => int): FixedArray<short>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<short> } self - The array to operate `reverse` on.
 * @returns { FixedArray<short> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<short>): FixedArray<short>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<short> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<short> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<short>): FixedArray<short>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<short> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { short } value - The new value to insert at the given index.
 * @returns { FixedArray<short> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<short>, index: int, value: short): FixedArray<short>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<short> } self - The array to operate `values` on.
 * @returns { IterableIterator<short> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<short>): IterableIterator<short>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<short> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, short]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<short>): IterableIterator<[int, short]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<short> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<short> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<short>, callbackfn: (value: short, index: int, array: FixedArray<short>) 
    => short): FixedArray<short>;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<short> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { short } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<short>, callbackfn: (previousValue: short, currentValue: short, 
    index: int, array: FixedArray<short>) => short): short;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<short> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<short> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<short>, fn: (v: short, k: int, array: FixedArray<short>) => boolean): 
    FixedArray<short>;
/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<short> } self - The array to operate `concat` on.
 * @param { FixedArray<short> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<short>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<short> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<short>, fst: FixedArray<short>, ...more: FixedArray<FixedArray<short>>): 
    FixedArray<short>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<short> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<short>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<short> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<short>, ...items: FixedArray<ConcatArray<short>>): FixedArray<short>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<short> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 * @param { int } [end] - The end index to sort to.
 * @returns { FixedArray<short> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<short>, comparator: (a: short, b: short) => int, start?: int, end?: int): 
    FixedArray<short>;
/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<short> } self - comparator function that defines the sort order.
 * @returns { FixedArray<short> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<short>): FixedArray<short>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<short> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<short>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<int> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Int } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<int>, index: int): Int;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<int> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int): FixedArray<int>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<int> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int, start: int): FixedArray<int>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<int> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int, start: int, end?: int): FixedArray<int>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<int> } self - The array to operate `fill` on.
 * @param { int } value - The value to fill the array with.
 *     <br>The value should be an integer.
 * @param { int } [start] - The index at which to start filling (optional).The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 * @returns { FixedArray<int> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<int>, value: int, start?: int, end?: int): FixedArray<int>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<int> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Int | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): Int | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<int> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<int> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Int | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<int>, predicate: (elem: int, index: int, array: FixedArray<int>) 
    => boolean): Int | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<int> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<int> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<int> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<int>, predicate: (element: int, index: int, array: FixedArray<int>) 
    => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<int> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { int } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<int>, callbackfn: (previousValue: int, currentValue: int, index: int, 
    array: FixedArray<int>) => int): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<int> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = int>(self: FixedArray<int>, callbackfn: (previousValue: U, currentValue: int, index: int, 
    array: FixedArray<int>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<int> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<int>, callbackfn: (previousValue: U, currentValue: int, index: int, 
    array: FixedArray<int>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<int> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<int>, callbackfn: (value: int, index: int, array: FixedArray<int>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<int> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<int>, start: int): FixedArray<int>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<int> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<int>, start?: int, end?: int): FixedArray<int>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<int> } self - The array to operate `lastIndexOf` on.
 * @param { int } searchElement - The element to locate in the array.
 *     <br>The value should be an integer.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<int>, element: int, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<int> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<int>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<int> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<int>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<int> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<int> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<int> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<int> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start: int): FixedArray<int>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<int> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<int> } items - The elements to add to the array.
 * @returns { FixedArray<int> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start: int, del: int, ...items: FixedArray<int>): FixedArray<int>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<int> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start?: int, del?: int): FixedArray<int>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<int> } self - The array to operate `includes` on.
 * @param { int } val - The value to search for.
 *     <br>The value should be an integer.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<int>, val: int, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<int> } self - The array to operate `indexOf` on.
 * @param { int } val - The element to locate in the array.
 *     <br>The value should be an integer.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<int>, val: int, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<int> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<int> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<int>): FixedArray<int>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<int> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<int> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<int>, comparator: (a: int, b: int) => int): FixedArray<int>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<int> } self - The array to operate `reverse` on.
 * @returns { FixedArray<int> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<int>): FixedArray<int>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<int> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<int> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<int>): FixedArray<int>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<int> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { int } value - The new value to insert at the given index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<int>, index: int, value: int): FixedArray<int>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<int> } self - The array to operate `values` on.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<int>): IterableIterator<int>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<int> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, int]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<int>): IterableIterator<[int, int]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<int> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<int> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<int>, callbackfn: (value: int, index: int, array: FixedArray<int>) => int): 
    FixedArray<int>;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<int> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { int } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<int>, callbackfn: (previousValue: int, currentValue: int, 
    index: int, array: FixedArray<int>) => int): int;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<int> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<int> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<int>, fn: (v: int, k: int, array: FixedArray<int>) => boolean): 
    FixedArray<int>;

/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<int> } self - The array to operate `concat` on.
 * @param { FixedArray<int> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<int>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<int> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<int>, fst: FixedArray<int>, ...more: FixedArray<FixedArray<int>>): 
    FixedArray<int>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<int> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<int>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<int> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<int>, ...items: FixedArray<ConcatArray<int>>): FixedArray<int>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<int> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<int> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<int>, comparator: (a: int, b: int) => int, start?: int, end?: int): 
    FixedArray<int>;

/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<int> } self - comparator function that defines the sort order.
 * @returns { FixedArray<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<int>): FixedArray<int>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<int> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<int>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<long> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Long } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<long>, index: int): Long;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<long> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int): FixedArray<long>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<long> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int, start: int): FixedArray<long>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<long> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int, start: int, end?: int): FixedArray<long>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<long> } self - The array to operate `fill` on.
 * @param { long } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 *     <br>The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<long>, value: long, start?: int, end?: int): FixedArray<long>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<long> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Long | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): Long | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<long> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<long> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Long | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<long>, predicate: (elem: long, index: int, array: FixedArray<long>) 
    => boolean): Long | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<long> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<long> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<long> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<long>, predicate: (element: long, index: int, array: FixedArray<long>) 
    => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<long> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { long } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<long>, callbackfn: (previousValue: long, currentValue: long, index: int, 
    array: FixedArray<long>) => long): long;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<long> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = long>(self: FixedArray<long>, callbackfn: (previousValue: U, currentValue: long, 
    index: int, array: FixedArray<long>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<long> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<long>, callbackfn: (previousValue: U, currentValue: long, index: int, 
    array: FixedArray<long>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<long> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<long>, callbackfn: (value: long, index: int, array: FixedArray<long>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<long> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<long>, start: int): FixedArray<long>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<long> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. +
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<long>, start?: int, end?: int): FixedArray<long>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<long> } self - The array to operate `lastIndexOf` on.
 * @param { long } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<long>, element: long, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<long> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<long>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<long> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<long>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<long> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<long> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<long> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<long> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start: int): FixedArray<long>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<long> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<long> } items - The elements to add to the array.
 * @returns { FixedArray<long> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start: int, del: int, ...items: FixedArray<long>): 
    FixedArray<long>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<long> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start?: int, del?: int): FixedArray<long>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<long> } self - The array to operate `includes` on.
 * @param { long } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<long>, val: long, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<long> } self - The array to operate `indexOf` on.
 * @param { long } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<long>, val: long, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<long> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<long> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<long>): FixedArray<long>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<long> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<long> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<long>, comparator: (a: long, b: long) => int): FixedArray<long>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<long> } self - The array to operate `reverse` on.
 * @returns { FixedArray<long> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<long>): FixedArray<long>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<long> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<long> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<long>): FixedArray<long>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<long> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { long } value - The new value to insert at the given index.
 * @returns { FixedArray<long> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<long>, index: int, value: long): FixedArray<long>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<long> } self - The array to operate `values` on.
 * @returns { IterableIterator<long> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<long>): IterableIterator<long>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<long> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, long]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<long>): IterableIterator<[int, long]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<long> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<long> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<long>, callbackfn: (value: long, index: int, array: FixedArray<long>) => long): 
    FixedArray<long>;
/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<long> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { long } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<long>, callbackfn: (previousValue: long, currentValue: long, index: int, 
    array: FixedArray<long>) => long): long;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<long> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<long> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<long>, fn: (v: long, k: int, array: FixedArray<long>) => boolean): 
    FixedArray<long>;
/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<long> } self - The array to operate `concat` on.
 * @param { FixedArray<long> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<long>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<long> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<long>, fst: FixedArray<long>, ...more: FixedArray<FixedArray<long>>): 
    FixedArray<long>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<long> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<long>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<long> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<long>, ...items: FixedArray<ConcatArray<long>>): FixedArray<long>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<long> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<long> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<long>, comparator: (a: long, b: long) => int, start?: int, end?: int): 
    FixedArray<long>;
/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<long> } self - comparator function that defines the sort order.
 * @returns { FixedArray<long> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<long>): FixedArray<long>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<long> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<long>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<float> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Float } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<float>, index: int): Float;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<float> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int): FixedArray<float>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<float> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int, start: int): FixedArray<float>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<float> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int, start: int, end?: int): FixedArray<float>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<float> } self - The array to operate `fill` on.
 * @param { float } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 * @param { int } [end] - The index at which to end filling (optional, not included).
 * @returns { FixedArray<float> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<float>, value: float, start?: int, end?: int): FixedArray<float>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<float> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Float | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): Float | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<float> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<float> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Float | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<float>, predicate: (elem: float, index: int, array: FixedArray<float>) 
    => boolean): Float | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<float> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<float> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<float> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<float>, predicate: (element: float, index: int, 
    array: FixedArray<float>) => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<float> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { float } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<float>, callbackfn: (previousValue: float, currentValue: float, 
    index: int, array: FixedArray<float>) => float): float;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<float> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = float>(self: FixedArray<float>, callbackfn: (previousValue: U, currentValue: float, 
    index: int, array: FixedArray<float>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<float> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<float>, callbackfn: (previousValue: U, currentValue: float, 
    index: int, array: FixedArray<float>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<float> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<float>, callbackfn: (value: float, index: int, array: FixedArray<float>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<float> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<float>, start: int): FixedArray<float>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<float> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<float>, start?: int, end?: int): FixedArray<float>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<float> } self - The array to operate `lastIndexOf` on.
 * @param { float } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<float>, element: float, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<float> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<float>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<float> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<float>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<float> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<float> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<float> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<float> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start: int): FixedArray<float>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<float> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<float> } items - The elements to add to the array.
 * @returns { FixedArray<float> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start: int, del: int, ...items: FixedArray<float>): 
    FixedArray<float>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<float> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start?: int, del?: int): FixedArray<float>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<float> } self - The array to operate `includes` on.
 * @param { float } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<float>, val: float, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<float> } self - The array to operate `indexOf` on.
 * @param { float } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<float>, val: float, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<float> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<float> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<float>): FixedArray<float>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<float> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<float> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<float>, comparator: (a: float, b: float) => int): FixedArray<float>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<float> } self - The array to operate `reverse` on.
 * @returns { FixedArray<float> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<float>): FixedArray<float>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<float> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<float> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<float>): FixedArray<float>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<float> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { float } value - The new value to insert at the given index.
 * @returns { FixedArray<float> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<float>, index: int, value: float): FixedArray<float>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<float> } self - The array to operate `values` on.
 * @returns { IterableIterator<float> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<float>): IterableIterator<float>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<float> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, float]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<float>): IterableIterator<[int, float]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<float> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<float> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<float>, callbackfn: (value: float, index: int, array: FixedArray<float>) 
    => float): FixedArray<float>;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<float> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { float } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<float>, callbackfn: (previousValue: float, currentValue: float, 
    index: int, array: FixedArray<float>) => float): float;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<float> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<float> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<float>, fn: (v: float, k: int, array: FixedArray<float>) => boolean): 
    FixedArray<float>;
/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<float> } self - The array to operate `concat` on.
 * @param { FixedArray<float> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<float>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<float> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<float>, fst: FixedArray<float>, ...more: FixedArray<FixedArray<float>>): 
    FixedArray<float>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<float> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<float>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<float> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<float>, ...items: FixedArray<ConcatArray<float>>): FixedArray<float>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<float> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<float> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<float>, comparator: (a: float, b: float) => int, start?: int, end?: int): 
    FixedArray<float>;
/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<float> } self - comparator function that defines the sort order.
 * @returns { FixedArray<float> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<float>): FixedArray<float>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<float> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<float>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<double> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Double } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<double>, index: int): Double;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<double> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int): FixedArray<double>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<double> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int, start: int): FixedArray<double>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<double> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int, start: int, end?: int): FixedArray<double>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<double> } self - The array to operate `fill` on.
 * @param { double } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional). The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included). The value should be an integer.
 * @returns { FixedArray<double> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<double>, value: double, start?: int, end?: int): FixedArray<double>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<double> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Double | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): Double | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<double> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<double> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Double | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<double>, predicate: (elem: double, index: int, array: FixedArray<double>) 
    => boolean): Double | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<double> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<double> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<double> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<double>, predicate: (element: double, index: int, 
    array: FixedArray<double>) => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<double> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { double } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<double>, callbackfn: (previousValue: double, currentValue: double, 
    index: int, array: FixedArray<double>) => double): double;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<double> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = double>(self: FixedArray<double>, callbackfn: (previousValue: U, currentValue: double, 
    index: int, array: FixedArray<double>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<double> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<double>, callbackfn: (previousValue: U, currentValue: double, 
    index: int, array: FixedArray<double>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<double> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<double>, callbackfn: (value: double, index: int, array: FixedArray<double>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<double> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<double>, start: int): FixedArray<double>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<double> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<double>, start?: int, end?: int): FixedArray<double>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<double> } self - The array to operate `lastIndexOf` on.
 * @param { double } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<double>, element: double, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<double> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<double>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<double> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<double>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<double> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<double> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<double> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<double> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start: int): FixedArray<double>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<double> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<double> } items - The elements to add to the array.
 * @returns { FixedArray<double> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start: int, del: int, ...items: FixedArray<double>): 
    FixedArray<double>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<double> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start?: int, del?: int): FixedArray<double>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<double> } self - The array to operate `includes` on.
 * @param { double } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<double>, val: double, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<double> } self - The array to operate `indexOf` on.
 * @param { double } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<double>, val: double, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<double> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<double> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<double>): FixedArray<double>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<double> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<double> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<double>, comparator: (a: double, b: double) => int): FixedArray<double>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<double> } self - The array to operate `reverse` on.
 * @returns { FixedArray<double> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<double>): FixedArray<double>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<double> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<double> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<double>): FixedArray<double>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<double> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { double } value - The new value to insert at the given index.
 * @returns { FixedArray<double> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<double>, index: int, value: double): FixedArray<double>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<double> } self - The array to operate `values` on.
 * @returns { IterableIterator<double> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<double>): IterableIterator<double>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<double> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, double]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<double>): IterableIterator<[int, double]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<double> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<double> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<double>, callbackfn: (value: double, index: int, array: FixedArray<double>) 
    => double): FixedArray<double>;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<double> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { double } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<double>, callbackfn: (previousValue: double, currentValue: double, 
    index: int, array: FixedArray<double>) => double): double;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<double> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<double> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<double>, fn: (v: double, k: int, array: FixedArray<double>) => boolean): 
    FixedArray<double>;

/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<double> } self - The array to operate `concat` on.
 * @param { FixedArray<double> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<double>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<double> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<double>, fst: FixedArray<double>, ...more: FixedArray<FixedArray<double>>): 
    FixedArray<double>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<double> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<double>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<double> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<double>, ...items: FixedArray<ConcatArray<double>>): FixedArray<double>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<double> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<double> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<double>, comparator: (a: double, b: double) => int, start?: int, end?: int): 
    FixedArray<double>;

/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<double> } self - comparator function that defines the sort order.
 * @returns { FixedArray<double> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<double>): FixedArray<double>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<double> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<double>): IterableIterator<int>;

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 *
 * @param { FixedArray<char> } self - The array to operate `at` on.
 * @param { int } index - Zero-based index of the array element to be returned.
 *     <br>The value should be an integer.
 * @returns { Char } The element at the given index.
 * @throws { RangeError } Throws - a RangeError if the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<char>, index: int): Char;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<char> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int): FixedArray<char>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<char> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int, start: int): FixedArray<char>;

/**
 * Makes a shallow copy of the Array part to another location in the same Array and returns it without modifying its
 * length.
 *
 * @param { FixedArray<char> } self - The array to operate `copyWithin` on.
 * @param { int } target - Zero-based index at which to copy the sequence to.
 *     <br>The value should be an integer.
 * @param { int } start - Zero-based index at which to start copying elements from.
 *     <br>The value should be an integer.
 * @param { int } [end] - Zero-based index at which to end copying elements from.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int, start: int, end?: int): FixedArray<char>;

/**
 * Changes all elements in the Array to a static value, from a start index to an end index.
 *
 * @param { FixedArray<char> } self - The array to operate `fill` on.
 * @param { char } value - The value to fill the array with.
 * @param { int } [start] - The index at which to start filling (optional).
 *     <br>The value should be an integer.
 * @param { int } [end] - The index at which to end filling (optional, not included).
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } The modified array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<char>, value: char, start?: int, end?: int): FixedArray<char>;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 *
 * @param { FixedArray<char> } self - The array to operate `find` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Char | undefined } The value of the first element that satisfies the provided testing function;
 *     otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): Char | undefined;

/**
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 *
 * @param { FixedArray<char> } self - The array to operate `findIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): int;

/**
 * Iterates the array in reverse order and returns the value of the first element that satisfies the provided
 * testing function.
 *
 * @param { FixedArray<char> } self - The array to operate `findLast` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { Char | undefined } The value of the element if found; otherwise, undefined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<char>, predicate: (elem: char, index: int, array: FixedArray<char>) 
    => boolean): Char | undefined;

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param { FixedArray<char> } self - The array to operate `every` on.
 * @param { function } predicate - A function that accepts up to three arguments. The every method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value false, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for all elements in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): boolean;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param { FixedArray<char> } self - The array to operate `some` on.
 * @param { function } predicate - A function that accepts up to three arguments. The some method calls the predicate
 *     function for each element in the array until the predicate returns a value which is
 *     coercible to the Boolean value true, or until the end of the array.
 * @returns { boolean } True if the predicate returns true for at least one element in the array; otherwise, false.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): boolean;

/**
 * Iterates the array in reverse order and returns the index of the first element that satisfies the provided
 * testing function. If no elements satisfy the testing function, -1 is returned.
 *
 * @param { FixedArray<char> } self - The array to operate `findLastIndex` on.
 * @param { function } predicate - A function to execute on each value in the array.
 * @returns { int } The index of the first element that satisfies the provided testing function; otherwise, -1.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<char>, predicate: (element: char, index: int, array: FixedArray<char>) 
    => boolean): int;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<char> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { char } The accumulated result.
 * @throws { TypeError } Throws - a TypeError if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<char>, callbackfn: (previousValue: char, currentValue: char, index: int, 
    array: FixedArray<char>) => char): char;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 * is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { FixedArray<char> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduce method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = char>(self: FixedArray<char>, callbackfn: (previousValue: U, currentValue: char, 
    index: int, array: FixedArray<char>) => U, initialValue: U): U;

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<char> } self - The array to operate `reduce` on.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @param { U } initialValue - The initial value of the accumulator.
 * @returns { U } The accumulated result.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<char>, callbackfn: (previousValue: U, currentValue: char, index: int, 
    array: FixedArray<char>) => U, initialValue: U): U;

/**
 * Performs the specified action for each element in an array.
 *
 * @param { FixedArray<char> } self - The array to operate `forEach` on.
 * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the callbackfn
 *     function one time for each element in the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<char>, callbackfn: (value: char, index: int, array: FixedArray<char>) 
    => void): void;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<char> } self - The array to operate `slice` on.
 * @param { int } start - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<char>, start: int): FixedArray<char>;

/**
 * Returns a copy of a section of an array.
 *
 * @param { FixedArray<char> } self - The array to operate `slice` on.
 * @param { int } [start] - The beginning index of the specified portion of the array.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index of the specified portion of the array. 
 *     The slice includes elements up to but not including the end index.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } A new Array object containing the extracted elements.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<char>, start?: int, end?: int): FixedArray<char>;

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array
 * is searched backwards.
 *
 * @param { FixedArray<char> } self - The array to operate `lastIndexOf` on.
 * @param { char } searchElement - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The last index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<char>, element: char, fromIndex?: int): int;

/**
 * Creates and returns a new string by concatenating all of the elements in an `Array`, separated by a specified
 * separator string.
 *
 * @param { FixedArray<char> } self - The array to operate `join` on.
 * @param { string } [sep] - A string to separate each pair of adjacent elements of the array. If omitted, the array
 *     elements are separated with a comma.
 * @returns { string } A string with all array elements joined.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<char>, sep?: string): string;

/**
 * Returns a string representing the specified array and its elements.
 *
 * @param { FixedArray<char> } self - The array to operate `stringify` on.
 * @returns { string } A string representing the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<char>): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<char> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param { Object } options - An object with configuration properties.
 * @returns { string } A string representing the elements of the array.
 * @throws { Error } Throws - an Error if the method is not implemented.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>, locales: Object, options: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<char> } self - The array to operate `toLocaleString` on.
 * @param { Object } locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>, locales: Object): string;

/**
 * Returns a string representing the elements of the array. The elements are converted to Strings using their
 * toLocaleString methods.
 *
 * @param { FixedArray<char> } self - The array to operate `toLocaleString` on.
 * @returns { string } A string representing the elements of the array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>): string;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<char> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start: int): FixedArray<char>;

/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<char> } self - The array to operate `toSpliced` on.
 * @param { int } start - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } del - The number of elements to remove.
 *     <br>The value should be an integer.
 * @param { FixedArray<char> } items - The elements to add to the array.
 * @returns { FixedArray<char> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start: int, del: int, ...items: FixedArray<char>): 
    FixedArray<char>;
/**
 * Returns a new array with some elements removed and/or replaced at a given index.
 *
 * @param { FixedArray<char> } self - The array to operate `toSpliced` on.
 * @param { int } [start] - The zero-based index at which to start changing the array.
 *     <br>The value should be an integer.
 * @param { int } [del] - The number of elements to remove.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } A new array with the changes applied.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start?: int, del?: int): FixedArray<char>;

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @param { FixedArray<char> } self - The array to operate `includes` on.
 * @param { char } val - The value to search for.
 * @param { int } [fromIndex] - The position in this array at which to begin searching for value.
 *     <br>The value should be an integer.
 * @returns { boolean } True if the value is found, false otherwise.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<char>, val: char, fromIndex?: int): boolean;

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param { FixedArray<char> } self - The array to operate `indexOf` on.
 * @param { char } val - The element to locate in the array.
 * @param { int } [fromIndex] - The index to start in the array.
 *     <br>The value should be an integer.
 * @returns { int } The first index of the element in the array; -1 if not found.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<char>, val: char, fromIndex?: int): int;

/**
 * Returns a new array with the elements sorted in ascending order.
 *
 * @param { FixedArray<char> } self - The array to operate `toSorted` on.
 * @returns { FixedArray<char> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<char>): FixedArray<char>;

/**
 * Returns a new array with the elements sorted using the provided comparator function.
 *
 * @param { FixedArray<char> } self - The array to operate `toSorted` on.
 * @param { function } comparator - A function that defines the sort order.
 * @returns { FixedArray<char> } A new sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<char>, comparator: (a: char, b: char) => int): FixedArray<char>;

/**
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the
 * first.
 *
 * @param { FixedArray<char> } self - The array to operate `reverse` on.
 * @returns { FixedArray<char> } The reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<char>): FixedArray<char>;

/**
 * Returns a new array with the elements in reversed order.
 *
 * @param { FixedArray<char> } self - The array to operate `toReversed` on.
 * @returns { FixedArray<char> } A new reversed array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<char>): FixedArray<char>;

/**
 * Returns a new Array with the element at the given index replaced with the given value.
 *
 * @param { FixedArray<char> } self - The array to operate `with` on.
 * @param { int } index - The zero-based index at which to replace the value.
 *     <br>The value should be an integer.
 * @param { char } value - The new value to insert at the given index.
 * @returns { FixedArray<char> } A new array with the element replaced.
 * @throws { RangeError } If - the index is out of bounds.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<char>, index: int, value: char): FixedArray<char>;

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 *
 * @param { FixedArray<char> } self - The array to operate `values` on.
 * @returns { IterableIterator<char> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<char>): IterableIterator<char>;

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * @param { FixedArray<char> } self - The array to operate `entries` on.
 * @returns { IterableIterator<[int, char]> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<char>): IterableIterator<[int, char]>;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 *
 * @param { FixedArray<char> } self - The array to map.
 * @param { function } callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn
 *     function one time for each element in the array.
 * @returns { FixedArray<char> } An array instance, constructed from `this` and given function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<char>, callbackfn: (value: char, index: int, array: FixedArray<char>) => char): 
    FixedArray<char>;
/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the
 * callback function is the accumulated result, and is provided as an argument in the next call to the callback
 * function.
 *
 * @param { FixedArray<char> } self - The array to reduce.
 * @param { function } callbackfn - A function that accepts up to four arguments. The reduceRight method calls the
 *     callbackfn function one time for each element in the array.
 * @returns { char } A result after applying callbackfn over all elements of the Array.
 * @throws { TypeError } Throws - if the array is empty and no initial value is provided.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<char>, callbackfn: (previousValue: char, currentValue: char, 
    index: int, array: FixedArray<char>) => char): char;

/**
 * Constructs a new Array instance and populates it with portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 *
 * @param { FixedArray<char> } self - The array to operate `filter` on.
 * @param { function } fn - Test function, applied to each element of an array.
 * @returns { FixedArray<char> } New Array instance constructed from `this` with
 *     elements filtered using test function `fn`.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<char>, fn: (v: char, k: int, array: FixedArray<char>) => boolean): 
    FixedArray<char>;
/**
 * Combines two or more arrays by concatenating the array of arrays provided in
 * arguments into a new array.
 *
 * @param { FixedArray<char> } self - The array to operate `concat` on.
 * @param { FixedArray<char> } fst - The first array to concatenate.
 * @param { FixedArray<FixedArray<char>> } more - Additional arrays to concatenate.
 * @returns { FixedArray<char> } A new array formed by concatenating the arrays.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<char>, fst: FixedArray<char>, ...more: FixedArray<FixedArray<char>>): 
    FixedArray<char>;
/**
 * Creates a new array from this array instance and given array instance.
 *
 * @param { FixedArray<char> } self - The array to operate `concat` on.
 * @param { FixedArray<ConcatArray<char>> } items - The arrays to concatenate into
 *     a new array.
 * @returns { FixedArray<char> } New Array instance, constructed from `this` and
 *     given `items` instances of Array class.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<char>, ...items: FixedArray<ConcatArray<char>>): FixedArray<char>;

/**
 * Reorders elements of this array using comparator function.
 *
 * @param { FixedArray<char> } self - The array to operate `sort` on.
 * @param { function } comparator - A function that defines the sort order.
 * @param { int } [start] - The start index to sort from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The end index to sort to.
 *     <br>The value should be an integer.
 * @returns { FixedArray<char> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<char>, comparator: (a: char, b: char) => int, start?: int, end?: int): 
    FixedArray<char>;
/**
 * Reorders elements of `this` using comparator function.
 *
 * @param { FixedArray<char> } self - comparator function that defines the sort order.
 * @returns { FixedArray<char> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<char>): FixedArray<char>;

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * @param { FixedArray<char> } self - comparator function that defines the sort order.
 * @returns { IterableIterator<int> } A new Array Iterator object.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<char>): IterableIterator<int>;

/**
 * Sorts elements of `arr` using stable sort algorithm.
 *
 * @param { FixedArray<T> } arr - The array to sort.
 * @param { int } startIndex - The start index of sorting range.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The end index of sorting range.
 *     <br>The value should be an integer.
 * @param { function } comp - Comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_stable<T>(arr: FixedArray<T>, startIndex: int, endIndex: int, comp: (lhs: T, rhs: T) => int): 
    void;
/**
 * Sorts elements of `arr` using default sort.
 *
 * @param { FixedArray<T> } arr - The array to sort.
 * @param { FixedArray<buffStr> } arrStr - Stringified array for comparison.
 * @param { int } startIndex - The start index of sorting range.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The end index of sorting range.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_default<T>(arr: FixedArray<T>, arrStr: FixedArray<buffStr>, startIndex: int, endIndex: int): 
    void;
/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function
 *     is the accumulated result, and is provided as an argument in the next call to the callback function.
 *
 * @param { Array<U> } self
 * @param { function } callbackfn - A function that accepts up to four arguments.
 *     The reduce method calls the callbackfn function one time for each element in the array.
 * @param { T } initialValue - If initialValue is specified, it is used as the initial value to start the accumulation.
 *     The first call to the callbackfn function provides this value as an argument instead of an array value.
 * @returns { T } a result after applying callbackfn over all elements of the Array
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U, T>(self: Array<U>, callbackfn: (previousValue: T, currentValue: U, index: int, 
    array: Array<U>) => T, initialValue: T): T;
