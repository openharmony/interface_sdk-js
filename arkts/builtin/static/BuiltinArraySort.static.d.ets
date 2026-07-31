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
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Byte> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Byte>, startIndex: int, endIndex: int,
    comp: (lhs: byte, rhs: byte) => int): void;

/**
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Short> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Short>, startIndex: int, endIndex: int,
    comp: (lhs: short, rhs: short) => int): void;

/**
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Int> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Int>, startIndex: int, endIndex: int,
    comp: (lhs: int, rhs: int) => int): void;

/**
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Long> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Long>, startIndex: int, endIndex: int,
    comp: (lhs: long, rhs: long) => int): void;

/**
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Float> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Float>, startIndex: int, endIndex: int,
    comp: (lhs: float, rhs: float) => int): void;

/**
 * Sorts the array in-place, stable sorting algorithm.
 *
 * @param { FixedArray<Double> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting at.
 *     <br>The value should be an integer.
 * @param { function } comp - The comparator function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Double>, startIndex: int, endIndex: int,
    comp: (lhs: double, rhs: double) => int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<boolean> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<boolean>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<boolean> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<boolean>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<boolean> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<boolean> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<boolean> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>, startIndex: int,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<byte> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { int } [end] - The index to end sorting at.
 *     <br>The value should be an integer.
 * @returns { FixedArray<byte> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<byte>, cmp: (lhs: byte, rhs: byte) => int,
    begin: int = 0, end: int = 0): FixedArray<byte>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<byte> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<byte>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<byte> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<byte>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<byte> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<byte> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<byte> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>, startIndex: int,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<short> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 * @param { int } [end] - The index to end sorting at.
 * @returns { FixedArray<short> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<short>, cmp: (lhs: short, rhs: short) => int,
    begin: int = 0, end: int = 0): FixedArray<short>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<short> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<short>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<short> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<short>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<short> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<short> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<short> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>, startIndex: int,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<int> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 * @param { int } [end] - The index to end sorting at.
 * @returns { FixedArray<int> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<int>, cmp: (lhs: int, rhs: int) => int,
    begin: int = 0, end: int = 0): FixedArray<int>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<int> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<int>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<int> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<int>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<int> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<int> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<int> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>, startIndex: int,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<long> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 * @param { int } [end] - The index to end sorting at.
 * @returns { FixedArray<long> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<long>, cmp: (lhs: long, rhs: long) => int,
    begin: int = 0, end: int = 0): FixedArray<long>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<long> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<long>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<long> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<long>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<long> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<long> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<long> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>, startIndex: int,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<float> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 * @param { int } [end] - The index to end sorting at.
 * @returns { FixedArray<float> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<float>, cmp: (lhs: float, rhs: float) => int,
    begin: int = 0, end: int = 0): FixedArray<float>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<float> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<float>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<float> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<float>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<float> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<float> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<float> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>, startIndex: int,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<double> } array - The array to sort.
 * @param { function } cmp - The comparator function.
 * @param { int } [begin] - The index to start sorting from.
 * @param { int } [end] - The index to end sorting at.
 * @returns { FixedArray<double> } The sorted array.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<double>, cmp: (lhs: double, rhs: double) => int,
    begin: int = 0, end: int = 0): FixedArray<double>;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<double> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<double>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<double> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<double>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<double> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<double> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<double> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>, startIndex: int,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<char> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<char>, startIndex: int, endIndex: int): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<char> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<char>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<char> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<char> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<char> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>, startIndex: int,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * Swaps two elements in the array.
 *
 * @param { FixedArray<T> } arr - The array to swap elements in.
 * @param { int } i - The index of the first element to swap.
 *     <br>The value should be an integer.
 * @param { int } j - The index of the second element to swap.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap<T>(arr: FixedArray<T>, i: int, j: int): void;

/**
 * Sorts the array in-place.
 *
 * @param { FixedArray<T> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting with, inclusive.
 *     <br>The value should be an integer.
 * @param { int } endIndex - The index to end sorting, exclusive.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede  The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<T> } arr - The array to sort.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;

/**
 * Sorts the subarray of the array in-place.
 *
 * @param { FixedArray<T> } arr - The array to sort.
 * @param { int } startIndex - The index to start sorting from.
 *     <br>The value should be an integer.
 * @param { function } mustPrecede - The must precede function.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>, startIndex: int,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;
