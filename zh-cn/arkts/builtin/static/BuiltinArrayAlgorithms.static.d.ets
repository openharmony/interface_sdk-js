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
 * 表示未找到键的常量。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export const KEY_NOT_FOUND: int = -1;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<boolean> } arr - 待查找键下界的数组，该数组必须已排序。
 *     否则结果由实现决定，可能不正确。
 * @param { boolean } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<boolean>, key: boolean, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<boolean> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { boolean } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<boolean>, key: boolean): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<boolean> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { boolean } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<boolean>, key: boolean, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<boolean> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { boolean } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<boolean>, key: boolean): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<boolean> } src - 待复制的数组。
 * @returns { FixedArray<boolean> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<boolean>): FixedArray<boolean>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<boolean> } src - 复制的源数组。
 * @param { FixedArray<boolean> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<boolean>, dst: FixedArray<boolean>, dstStart: int, srcStart: int, srcEnd: int)
    : void;
/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<byte> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { byte } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<byte>, key: byte, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<byte> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { byte } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<byte>, key: byte): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<byte> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { byte } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<byte>, key: byte, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<byte> } arr - 待查找键上界的数组。
 *     该数组必须已排序，否则结果由实现决定，可能不正确。
 * @param { byte } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<byte>, key: byte): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<byte> } src - 待复制的数组。
 * @returns { FixedArray<byte> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<byte>): FixedArray<byte>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<byte> } src - 复制的源数组。
 * @param { FixedArray<byte> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<byte>, dst: FixedArray<byte>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<short> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { short } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<short>, key: short, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<short> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { short } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<short>, key: short): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<short> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { short } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<short>, key: short, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<short> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { short } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<short>, key: short): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<short> } src - 待复制的数组。
 * @returns { FixedArray<short> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<short>): FixedArray<short>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<short> } src - 复制的源数组。
 * @param { FixedArray<short> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<short>, dst: FixedArray<short>, dstStart: int, srcStart: int, srcEnd: int): void

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<int> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { int } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<int>, key: int, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<int> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { int } key - 待查找下界的值。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<int>, key: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<int> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { int } key - 待查找上界的值。
 *     <br>取值约束：应为整数。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<int>, key: int, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<int> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { int } key - 待查找上界的值。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<int>, key: int): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<int> } src - 待复制的数组。
 * @returns { FixedArray<int> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<int>): FixedArray<int>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<int> } src - 复制的源数组。
 * @param { FixedArray<int> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<int>, dst: FixedArray<int>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<long> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { long } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<long>, key: long, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<long> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { long } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<long>, key: long): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<long> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { long } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<long>, key: long, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<long> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { long } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<long>, key: long): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<long> } src - 待复制的数组。
 * @returns { FixedArray<long> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<long>): FixedArray<long>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<long> } src - 复制的源数组。
 * @param { FixedArray<long> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<long>, dst: FixedArray<long>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<float> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { float } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<float>, key: float, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<float> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { float } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<float>, key: float): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *    若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<float> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { float } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<float>, key: float, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<float> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { float } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<float>, key: float): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<float> } src - 待复制的数组。
 * @returns { FixedArray<float> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<float>): FixedArray<float>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<float> } src - 复制的源数组。
 * @param { FixedArray<float> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<float>, dst: FixedArray<float>, dstStart: int, srcStart: int, srcEnd: int):
    void;
/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<double> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { double } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<double>, key: double, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<double> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { double } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<double>, key: double): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<double> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { double } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<double>, key: double, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<double> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { double } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<double>, key: double): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<double> } src - 待复制的数组。
 * @returns { FixedArray<double> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<double>): FixedArray<double>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<double> } src - 复制的源数组。
 * @param { FixedArray<double> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<double>, dst: FixedArray<double>, dstStart: int, srcStart: int, srcEnd: int):
    void;
/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为endIndex。
 *
 * @param { FixedArray<char> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { char } key - 待查找下界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回endIndex。
 * @throws { RangeError } 当边界校验失败时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<char>, key: char, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的下界。
 * 调用该函数前必须先对数组排序。
 * 下界是第一个使(element < key)不成立的元素的索引。
 *     若不存在这样的元素，则下界为arr.length。
 *
 * @param { FixedArray<char> } arr - 待查找键下界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { char } key - 待查找下界的值。
 * @returns { int } 使(arr[index] < key)不成立的索引；若不存在这样的索引，则返回arr.length。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lowerBoundSearch(arr: FixedArray<char>, key: char): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<char> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { char } key - 待查找上界的值。
 * @param { int } startIndex - 在arr中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 在arr中停止查找的索引，即不检查arr[endIndex]。
 *     <br>取值约束：应为整数。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<char>, key: char, startIndex: int, endIndex: int): int;

/**
 * 尝试在已排序的arr中查找键的上界。
 * 调用该函数前必须先对数组排序。
 * 上界是第一个使(key < element)成立的元素的索引。
 *     若不存在这样的元素，则上界为endIndex。
 *
 * @param { FixedArray<char> } arr - 待查找键上界的数组。该数组必须已排序，
 *     否则结果由实现决定，可能不正确。
 * @param { char } key - 待查找上界的值。
 * @returns { int } 使(key < arr[index])成立的索引；若不存在这样的索引，则返回endIndex。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function upperBoundSearch(arr: FixedArray<char>, key: char): int;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<char> } src - 待复制的数组。
 * @returns { FixedArray<char> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<char>): FixedArray<char>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<char> } src - 复制的源数组。
 * @param { FixedArray<char> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<char>, dst: FixedArray<char>, dstStart: int, srcStart: int, srcEnd: int): void;

/**
 * 创建数组的浅拷贝。
 *
 * @param { FixedArray<Any> } src - 待复制的数组。
 * @returns { FixedArray<Any> } `src`的副本。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyOf(src: FixedArray<Any>): FixedArray<Any>;

/**
 * 按传入的索引将src数组复制到dst中。
 * dst必须有足够的空间，否则可能发生越界。
 *
 * @param { FixedArray<Any> } src - 复制的源数组。
 * @param { FixedArray<Any> } dst - 复制的目标数组。
 * @param { int } dstStart - 在dst中开始写入的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcStart - 在src中开始复制的索引。
 *     <br>取值约束：应为整数。
 * @param { int } srcEnd - 在src中停止复制的索引（不包含），即不复制src[srcEnd]。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyTo(src: FixedArray<Any>, dst: FixedArray<Any>, dstStart: int, srcStart: int, srcEnd: int): void;
