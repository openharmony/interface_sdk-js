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
 * class Uint8ClampedArray
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Uint8ClampedArray {
    /**
     * Number of int stored in Uint8ClampedArray
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an list of keys in Uint8ClampedArray
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8ClampedArray;

    /**
     * Returns the index of the first occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8ClampedArray.
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
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
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
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Uint8ClampedArray with specified value
     *
     * @param { int } value - new valuy
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - modified Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): this;

    /**
     * Creates a slice of current Uint8ClampedArray using range [begin, end)
     *
     * @param { int } [begin] - start - index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with elements of current Uint8ClampedArray[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8ClampedArray;

    /**
     * Creates a Uint8ClampedArray with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8ClampedArray;
}

/**
 * class Uint8Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Uint8Array {
    /**
     * Number of int stored in Uint8Array
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an list of keys in Uint8Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8Array;

    /**
     * Returns the index of the first occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8Array.
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
     * Returns the index of the last occurrence of a value in Uint8Array.
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
     * Returns the index of the last occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Uint8Array with specified value
     *
     * @param { int } value - new valuy
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - modified Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): this;

    /**
     * Creates a slice of current Uint8Array using range [begin, end)
     *
     * @param { int } [begin] - start - index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - a new Uint8Array with elements of current Uint8Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8Array;

    /**
     * Creates a Uint8Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - a new Uint8Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8Array;
}

/**
 * class Uint16Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Uint16Array {
    /**
     * Number of int stored in Uint16Array
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an list of keys in Uint16Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint16Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint16Array;

    /**
     * Returns the index of the first occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint16Array.
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
     * Returns the index of the last occurrence of a value in Uint16Array.
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
     * Returns the index of the last occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Uint16Array with specified value
     *
     * @param { int } value - new valuy
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - modified Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint16Array;

    /**
     * Creates a copy with replaced value on index
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } value - value to set
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - an Uint16Array with replaced value on index
     * @throws { RangeError } - - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint16Array;


    /**
     * Creates a slice of current Uint16Array using range [begin, end)
     * @param { int } [begin] - start - index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - a new Uint16Array with elements of current Uint16Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint16Array;

    /**
     * Creates a Uint16Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - a new Uint16Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint16Array;
}

/**
 * class Uint16Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 26.0.0 staticonly
 */
export class Uint32Array {
    /**
     * Number of long stored in Uint32Array
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an list of keys in Uint32Array
     *
     * @returns { IterableIterator<int> } - iterator over keys
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint32Array }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint32Array;

        /**
         * Returns the index of the first occurrence of a value in Uint32Array.
         *
         * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
         *     <br>The value should be an integer.
         * @returns { int } - index of element if it presents, -1 otherwise
         * @syscap SystemCapability.Utils.Lang
         * @FaAndStageModel
         * @since 26.0.0 staticonly
         */
        public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint32Array.
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
     * Returns the index of the last occurrence of a value in Uint32Array.
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
     * Returns the index of the last occurrence of a value in Uint32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Fills the Uint32Array with specified value
     *
     * @param { long } value - new valuy
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - modified Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): Uint32Array;

    /**
     * Creates a slice of current Uint32Array using range [begin, end)
     *
     * @param { int } [begin] - start - index to be taken into slice
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - a new Uint32Array with elements of current Uint32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint32Array;

    /**
     * Creates a Uint32Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - a new Uint32Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint32Array;
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
     * Number of long stored in BigInt64Array
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public get length(): int;

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
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
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
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
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
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     If fromIndex is omitted, the search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if it presents, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: BigInt, fromIndex?: int): int;

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
     * @param { BigInt } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt, fromIndex: int | undefined): int;

    /**
     * Creates a copy with replaced value on index
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { long } value - value to set
     * @returns { BigInt64Array } - an BigInt64Array with replaced value on index
     * @throws { RangeError } - - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): BigInt64Array;

    /**
     * Creates a copy with replaced value on index
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { BigInt } value - value to set
     * @returns { BigInt64Array } - an BigInt64Array with replaced value on index
     * @throws { RangeError } - - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: BigInt): BigInt64Array;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { long } value - new valuy
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): BigInt64Array;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { BigInt } value - new valuy
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): BigInt64Array;

    /**
     * Creates a slice of current BigInt64Array using range [begin, end)
     *
     * @param { int } [begin] - start - index to be taken into slice
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
     * Creates a BigInt64Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } - a new BigInt64Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigInt64Array;
}
