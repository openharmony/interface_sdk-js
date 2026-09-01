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
 * The key not found constant.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export const KEY_NOT_FOUND: int = -1;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<boolean> } arr - The array to find a lower bound of a key. Has to be sorted
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { boolean } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<boolean>, key: boolean, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<boolean> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { boolean } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<boolean>, key: boolean): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<boolean> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { boolean } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<boolean>, key: boolean, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<boolean> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { boolean } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<boolean>, key: boolean): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<boolean> } src - The array to copy
 * @returns { FixedArray<boolean> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<boolean>): FixedArray<boolean>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<boolean> } src - The array to copy from
 * @param { FixedArray<boolean> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<boolean>, dst: FixedArray<boolean>, dstStart: int, srcStart: int, srcEnd: int)
    : void;
/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<byte> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { byte } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<byte>, key: byte, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<byte> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { byte } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<byte>, key: byte): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<byte> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { byte } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<byte>, key: byte, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<byte> } arr - The array to find an upper bound of a key.
 *     Has to be sorted, otherwise the answer is implementation-defined and may be incorrect
 * @param { byte } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<byte>, key: byte): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<byte> } src - The array to copy
 * @returns { FixedArray<byte> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<byte>): FixedArray<byte>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<byte> } src - The array to copy from
 * @param { FixedArray<byte> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<byte>, dst: FixedArray<byte>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<short> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { short } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<short>, key: short, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<short> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { short } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<short>, key: short): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<short> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { short } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<short>, key: short, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<short> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { short } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<short>, key: short): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<short> } src - The array to copy
 * @returns { FixedArray<short> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<short>): FixedArray<short>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<short> } src - The array to copy from
 * @param { FixedArray<short> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<short>, dst: FixedArray<short>, dstStart: int, srcStart: int, srcEnd: int): void

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<int> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { int } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<int>, key: int, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<int> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { int } key - The value to find lower bound of
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<int>, key: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<int> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { int } key - The value to find upper bound of
 *     <br>The value should be an integer.
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<int>, key: int, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<int> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { int } key - The value to find upper bound of
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<int>, key: int): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<int> } src - The array to copy
 * @returns { FixedArray<int> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<int>): FixedArray<int>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<int> } src - The array to copy from
 * @param { FixedArray<int> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<int>, dst: FixedArray<int>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<long> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { long } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<long>, key: long, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<long> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { long } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<long>, key: long): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<long> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { long } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<long>, key: long, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<long> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { long } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<long>, key: long): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<long> } src - The array to copy
 * @returns { FixedArray<long> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<long>): FixedArray<long>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<long> } src - The array to copy from
 * @param { FixedArray<long> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<long>, dst: FixedArray<long>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<float> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { float } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<float>, key: float, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<float> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { float } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<float>, key: float): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *    If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<float> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { float } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<float>, key: float, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<float> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { float } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<float>, key: float): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<float> } src - The array to copy
 * @returns { FixedArray<float> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<float>): FixedArray<float>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<float> } src - The array to copy from
 * @param { FixedArray<float> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<float>, dst: FixedArray<float>, dstStart: int, srcStart: int, srcEnd: int):
    void;
/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<double> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { double } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<double>, key: double, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<double> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { double } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<double>, key: double): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<double> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { double } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<double>, key: double, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<double> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { double } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<double>, key: double): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<double> } src - The array to copy
 * @returns { FixedArray<double> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<double>): FixedArray<double>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<double> } src - The array to copy from
 * @param { FixedArray<double> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<double>, dst: FixedArray<double>, dstStart: int, srcStart: int, srcEnd: int):
    void;
/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is endIndex
 *
 * @param { FixedArray<char> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { char } key - The value to find lower bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than endIndex
 * @throws { RangeError } Throws - if the bounds verification failed
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<char>, key: char, startIndex: int, endIndex: int): int;

/**
 * Tries to find a lower bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Lower bound is an index of a first element, where (element < key) is false.
 *     If no such element is found than lower bound is arr.length
 *
 * @param { FixedArray<char> } arr - The array to find a lower bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { char } key - The value to find lower bound of
 * @returns { int } The index such (arr[index] < key) is false. If no such index is found than arr.length
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<char>, key: char): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<char> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { char } key - The value to find upper bound of
 * @param { int } startIndex - The index of arr to begin search with
 *     <br>The value should be an integer.
 * @param { int } endIndex - The last index to stop search in arr, i.e. arr[endIndex] is not checked
 *     <br>The value should be an integer.
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<char>, key: char, startIndex: int, endIndex: int): int;

/**
 * Tries to find an upper bound of a key in sorted arr.
 * The array has to be sorted before calling this function.
 * Upper bound is an index of a first element, where (key < element) is true.
 *     If no such element is found than upper bound is endIndex
 *
 * @param { FixedArray<char> } arr - The array to find an upper bound of a key. Has to be sorted,
 *     otherwise the answer is implementation-defined and may be incorrect
 * @param { char } key - The value to find upper bound of
 * @returns { int } The index such (key < arr[index]) is true. If no such index is found than endIndex
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<char>, key: char): int;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<char> } src - The array to copy
 * @returns { FixedArray<char> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<char>): FixedArray<char>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<char> } src - The array to copy from
 * @param { FixedArray<char> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<char>, dst: FixedArray<char>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * Makes an array shallow copy
 *
 * @param { FixedArray<Any> } src - The array to copy
 * @returns { FixedArray<Any> } The copy of `src`
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<Any>): FixedArray<Any>;

/**
 * Copies src array into dst with respect to passed indexes.
 * dst must have enough space, otherwise out-of-bounds might occur
 *
 * @param { FixedArray<Any> } src - The array to copy from
 * @param { FixedArray<Any> } dst - The array to copy into
 * @param { int } dstStart - The index of dst to start from
 *     <br>The value should be an integer.
 * @param { int } srcStart - The index of src to start from
 *     <br>The value should be an integer.
 * @param { int } srcEnd - The last index of src to copy, exclusive, i.e. src[srcEnd] is not copied
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<Any>, dst: FixedArray<Any>, dstStart: int, srcStart: int, srcEnd: int): void;
