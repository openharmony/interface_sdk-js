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
 * class Int8Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Int8Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Int8Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int8Array;

    /**
     * Returns the index of the first occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in Int8Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Int8Array with specified value
     *
     * @param { byte } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: byte, start?: int, end?: int): this;

    /**
     * Creates a new Int8Array using reversed data from the current one
     *
     * @returns { Int8Array } - a new Int8Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): Int8Array;

    /**
     * Creates a slice of current Int8Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int8Array } - a new Int8Array with elements of current Int8Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int8Array;

    /**
     * Creates a slice of current Int8Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int8Array } - a new Int8Array with elements of current Int8Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int8Array;

    /**
     * Creates a Int8Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Int8Array } - a new Int8Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int8Array;
}

/**
 * class Int16Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Int16Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Int16Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int16Array;

    /**
     * Returns the index of the first occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in Int16Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Int16Array with specified value
     *
     * @param { byte } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: byte, start?: int, end?: int): this;

    /**
     * Creates a new Int16Array using reversed data from the current one
     *
     * @returns { Int16Array } - a new Int16Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): Int16Array;

    /**
     * Creates a slice of current Int16Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int16Array } - a new Int16Array with elements of current Int16Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int16Array;

    /**
     * Creates a slice of current Int16Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int16Array } - a new Int16Array with elements of current Int16Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int16Array;

    /**
     * Creates a Int16Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Int16Array } - a new Int16Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int16Array;
}

/**
 * class Int32Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Int32Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Int32Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int32Array;

    /**
     * Returns the index of the first occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in Int32Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Int32Array with specified value
     *
     * @param { int } value - new value
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): this;

    /**
     * Creates a new Int32Array using reversed data from the current one
     *
     * @returns { Int32Array } - a new Int32Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): Int32Array;

    /**
     * Creates a slice of current Int32Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int32Array } - a new Int32Array with elements of current Int32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int32Array;

    /**
     * Creates a slice of current Int32Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Int32Array } - a new Int32Array with elements of current Int32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int32Array;

    /**
     * Creates a Int32Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Int32Array } - a new Int32Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int32Array;
}

/**
 * class BigInt64Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class BigInt64Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { BigInt64Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): BigInt64Array;

    /**
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in BigInt64Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { long } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): this;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { BigInt } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): this;

    /**
     * Creates a new BigInt64Array using reversed data from the current one
     *
     * @returns { BigInt64Array } - a new BigInt64Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): BigInt64Array;

    /**
     * Creates a slice of current BigInt64Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - a new BigInt64Array with elements of current BigInt64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): BigInt64Array;

    /**
     * Creates a slice of current BigInt64Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - a new BigInt64Array with elements of current BigInt64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): BigInt64Array;

    /**
     * Creates a BigInt64Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - a new BigInt64Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigInt64Array;
}

/**
 * class Float32Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Float32Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Float32Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float32Array;

    /**
     * Returns the index of the first occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in Float32Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Float32Array with specified value
     *
     * @param { float } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: float, start?: int, end?: int): this;

    /**
     * Fills the Float32Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Creates a new Float32Array using reversed data from the current one
     *
     * @returns { Float32Array } - a new Float32Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): Float32Array;

    /**
     * Creates a slice of current Float32Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Float32Array } - a new Float32Array with elements of current Float32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float32Array;

    /**
     * Creates a slice of current Float32Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Float32Array } - a new Float32Array with elements of current Float32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float32Array;

    /**
     * Creates a Float32Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Float32Array } - a new Float32Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float32Array;
}

/**
 * class Float64Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Float64Array {
    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Float64Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float64Array;

    /**
     * Returns the index of the first occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float64Array.
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns an list of keys in Float64Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Float64Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { this } - modified Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Creates a new Float64Array using reversed data from the current one
     *
     * @returns { Float64Array } - a new Float64Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public reverse(): Float64Array;

    /**
     * Creates a slice of current Float64Array using range [begin, end)
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value range is all integers.
     * @returns { Float64Array } - a new Float64Array with elements of current Float64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float64Array;

    /**
     * Creates a slice of current Float64Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice
     *     <br>The value range is all integers.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value range is all integers.
     * @returns { Float64Array } - a new Float64Array with elements of current Float64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float64Array;

    /**
     * Creates a Float64Array with the same underlying ArrayBuffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Float64Array } - a new Float64Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float64Array;
}
