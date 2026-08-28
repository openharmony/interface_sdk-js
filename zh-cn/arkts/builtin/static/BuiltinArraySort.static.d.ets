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
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Byte> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Byte>, startIndex: int, endIndex: int,
    comp: (lhs: byte, rhs: byte) => int): void;

/**
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Short> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Short>, startIndex: int, endIndex: int,
    comp: (lhs: short, rhs: short) => int): void;

/**
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Int> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Int>, startIndex: int, endIndex: int,
    comp: (lhs: int, rhs: int) => int): void;

/**
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Long> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Long>, startIndex: int, endIndex: int,
    comp: (lhs: long, rhs: long) => int): void;

/**
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Float> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Float>, startIndex: int, endIndex: int,
    comp: (lhs: float, rhs: float) => int): void;

/**
 * 使用稳定排序算法对数组进行原地排序。
 *
 * @param { FixedArray<Double> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function arr_sort_stable(arr: FixedArray<Double>, startIndex: int, endIndex: int,
    comp: (lhs: double, rhs: double) => int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<boolean> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<boolean>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<boolean> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<boolean>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<boolean> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<boolean> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<boolean> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<boolean>, startIndex: int,
    mustPrecede: (lhs: boolean, rhs: boolean) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<byte> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<byte>, cmp: (lhs: byte, rhs: byte) => int,
    begin: int = 0, end: int = 0): FixedArray<byte>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<byte> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<byte>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<byte> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<byte>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<byte> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<byte> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<byte> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<byte>, startIndex: int,
    mustPrecede: (lhs: byte, rhs: byte) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<short> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<short> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<short>, cmp: (lhs: short, rhs: short) => int,
    begin: int = 0, end: int = 0): FixedArray<short>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<short> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<short>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<short> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<short>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<short> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<short> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<short> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<short>, startIndex: int,
    mustPrecede: (lhs: short, rhs: short) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<int> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<int> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<int>, cmp: (lhs: int, rhs: int) => int,
    begin: int = 0, end: int = 0): FixedArray<int>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<int> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<int>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<int> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<int>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<int> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<int> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<int> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<int>, startIndex: int,
    mustPrecede: (lhs: int, rhs: int) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<long> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<long> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<long>, cmp: (lhs: long, rhs: long) => int,
    begin: int = 0, end: int = 0): FixedArray<long>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<long> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<long>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<long> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<long>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<long> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<long> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<long> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<long>, startIndex: int,
    mustPrecede: (lhs: long, rhs: long) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<float> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<float> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<float>, cmp: (lhs: float, rhs: float) => int,
    begin: int = 0, end: int = 0): FixedArray<float>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<float> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<float>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<float> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<float>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<float> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<float> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<float> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<float>, startIndex: int,
    mustPrecede: (lhs: float, rhs: float) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<double> } array - 待排序的数组。
 * @param { function } cmp - 比较函数。
 * @param { int } [begin] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<double> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function mergeSort(array: FixedArray<double>, cmp: (lhs: double, rhs: double) => int,
    begin: int = 0, end: int = 0): FixedArray<double>;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<double> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<double>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<double> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<double>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<double> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<double> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<double> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<double>, startIndex: int,
    mustPrecede: (lhs: double, rhs: double) => boolean): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<char> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(arr: FixedArray<char>, startIndex: int, endIndex: int): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<char> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap(arr: FixedArray<char>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<char> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<char> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<char> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray(arr: FixedArray<char>, startIndex: int,
    mustPrecede: (lhs: char, rhs: char) => boolean): void;

/**
 * 交换数组中的两个元素。
 *
 * @param { FixedArray<T> } arr - 待交换元素的数组。
 * @param { int } i - 待交换的第一个元素的索引。
 *     <br>取值约束：应为整数。
 * @param { int } j - 待交换的第二个元素的索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function swap<T>(arr: FixedArray<T>, i: int, j: int): void;

/**
 * 对数组进行原地排序。
 *
 * @param { FixedArray<T> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引（包含）。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 结束排序的索引（不包含）。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede  用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>, startIndex: int, endIndex: int,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<T> } arr - 待排序的数组。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;

/**
 * 对数组中的子数组进行原地排序。
 *
 * @param { FixedArray<T> } arr - 待排序的数组。
 * @param { int } startIndex - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { function } mustPrecede - 用于判断前后顺序的函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_subarray<T>(arr: FixedArray<T>, startIndex: int,
    mustPrecede: (lhs: T, rhs: T) => boolean): void;
