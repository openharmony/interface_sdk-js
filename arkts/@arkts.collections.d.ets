/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file Defines the collections for ArkTS
 * @kit ArkTS
 */

/*** if arkts dynamic */
import lang from './@arkts.lang'
/*** endif */

/**
 * The collections module provides ArkTS containers for efficient data transfer in concurrency scenarios. The ArkTS
 * containers provide similar functionalities as their JavaScript counterparts, except that their properties cannot be
 * added or updated through `.` or `[]`.
 * By default, ArkTS containers are passed by reference between concurrent instances. This means that multiple
 * concurrent instances can simultaneously operate the same container instance. Pass-by-copy is also supported. In this
 * mode, each concurrent instance holds an ArkTS container instance.
 * ArkTS containers are not thread-safe. They adopt the fail-fast approach. An exception is thrown if multiple
 * concurrent instances make structural changes to a container instance at the same time. Therefore, in multi-thread
 * read/write scenarios, you must use the ArkTS asynchronous lock to ensure secure access to the ArkTS containers.
 * Currently, the following ArkTS containers are provided: [Array]{@link ./arkts/@arkts.collections:collections},
 * [Map]{@link ./arkts/@arkts.collections:collections}, [Set]{@link ./arkts/@arkts.collections:collections}, TypedArray
 * ([Int8Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint8Array]{@link ./arkts/@arkts.collections:collections},
 * [Int16Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint16Array]{@link ./arkts/@arkts.collections:collections},
 * [Int32Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint32Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint8ClampedArray]{@link ./arkts/@arkts.collections:collections} and
 * [Float32Array]{@link ./arkts/@arkts.collections:collections}),
 * [ArrayBuffer]{@link ./arkts/@arkts.collections:collections},
 * [BitVector]{@link ./arkts/@arkts.collections:collections}, and
 * [ConcatArray]{@link ./arkts/@arkts.collections:collections}.
 *
 * > **NOTE**
 * >
 * > - This module can be imported only to ArkTS files (with the file name extension .ets).
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace collections {
  /**
   * Describes the mapping function of the ArkTS typed array.
   *
   * @param { FromElementType } value - Element that is currently traversed and used to construct an ArkTS typed array.
   * @param { number } index - Index of the element.
   * @returns { ToElementType } The transformed value.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayFromMapFn<FromElementType, ToElementType> = (value: FromElementType, index: number) => ToElementType;
  /**
   * Describes the assertion function of the ArkTS typed array.
   *
   * @param { ElementType } value - Element that is being traversed in the ArkTS typed array.
   * @param { number } index - Index of the element.
   * @param { ArrayType } array - ArkTS typed array that is being traversed.
   * @returns { boolean } True if the value meets the predicate, otherwise false.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayPredicateFn<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => boolean;
  /**
   * Describes the traversal function of the ArkTS typed array.
   *
   * @param { ElementType } value - Element that is being traversed in the ArkTS typed array.
   * @param { number } index - Index of the element.
   * @param { ArrayType } array - ArkTS typed array that is being traversed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayForEachCallback<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => void;
  /**
   * Describes the conversion mapping function of the ArkTS typed array.
   *
   * @param { ElementType } value - Element that is being mapped in the ArkTS typed array.
   * @param { number } index - Index of the element.
   * @param { ArrayType } array - ArkTS typed array that is being mapped.
   * @returns { ElementType } The result of the mapping.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayMapCallback<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => ElementType;
  /**
   * Describes the reduce function of the ArkTS typed array.
   *
   * @param { AccType } previousValue - Accumulated value of the current traversal.
   * @param { ElementType } currentValue - Element that is being traversed in the ArkTS typed array.
   * @param { number } currentIndex - Index of the element.
   * @param { ArrayType } array - ArkTS typed array that is being traversed.
   * @returns { AccType } The result of the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType;
  /**
   * Describes the sort function of the ArkTS typed array.
   *
   * @param { ElementType } first - First element to be compared.
   * @param { ElementType } second - Second element to be compared.
   * @returns { number } The result of the comparison.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayCompareFn<ElementType> = (first: ElementType, second: ElementType) => number;
  /**
   * Defines the ArkTS Array reduction function, which is used by the 'from' API of the Array class.
   *
   * @param { FromElementType } value - Element that is being processed.
   * @param { number } index - Index of the element in the ArkTS array.
   * @returns { ToElementType } The transformed value.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayFromMapFn<FromElementType, ToElementType> = (value: FromElementType, index: number) => ToElementType;

  /**
   * Defines the ArkTS Array reduction function, which is used by the 'some' and 'every'
   * APIs of the Array class to determine whether array elements meet certain test conditions.
   *
   * @param { ElementType } value - Element that is being processed.
   * @param { number } index - Index of the element in the ArkTS array.
   * @param { ArrayType } array - ArkTS array that is being traversed.
   * @returns { boolean } True if the value meets the predicate, otherwise false.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayPredicateFn<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => boolean;

  /**
   * Defines the ArkTS Array reduction function, which is used by the 'reduceRight' API of the Array class.
   *
   * @param { AccType } previousValue - Accumulated value of the current traversal.
   * @param { ElementType } currentValue - Element that is being traversed in the ArkTS array.
   * @param { number } currentIndex - Index of the element in the ArkTS array.
   * @param { ArrayType } array - ArkTS array that is being traversed.
   * @returns { AccType } The result of the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType;
  /**
   * 'ISendable' is the parent type of all sendable types except null and undefined.
   * It does not have any necessary methods or properties.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;

  /**
   * An array-like object that can be concatenated. This API extends **ISendable**.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > This section uses the following to identify the use of generics:
   *
   * - T: type, which can be any of the
   * [sendable data types](docroot://arkts-utils/arkts-sendable.md#sendable-data-types).
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface ConcatArray<T> extends ISendable {
    /**
     * Number of elements in a ConcatArray.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * Returns the element at a given index in this ConcatArray.
     *
     * @param { number } index - Index of the element. The index starts from zero.
     *     If the passed-in index is less than 0 or greater than or equal to the value of 'length', an error is thrown.
     * @returns { T } The element in the ConcatArray matching the given index.
     * @throws { BusinessError } 401 - Parameter error. Illegal index.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @since 12 dynamiconly
     */
    readonly [index: number]: T;
    /**
     * Concatenates all elements in this array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error. Invalid separator.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Selects a range of elements in this array to create an array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in,
     *     it refers to the index of 'start + array.length' The default value is '0'.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in,
     *     it refers to the index of 'end + array.length'. The default value is the length of the ArkTS array.
     * @returns { ConcatArray<T> } New array containing the selected elements.
     * @throws { BusinessError } 401 - Parameter error. Invalid `start` or `end` parameters.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): ConcatArray<T>;
  }

  /**
   * A linear data structure that is implemented on arrays and can be passed between ArkTS concurrent instances.
   * Pass-by-reference is recommended for better transfer performance.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > This section uses the following to identify the use of generics:
   *
   * - T: type, which can be any of the
   * [sendable data types](docroot://arkts-utils/arkts-sendable.md#sendable-data-types).
   * **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Array<T> implements ConcatArray<T> {
    /**
     * Number of elements in an ArkTS array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * Creates an ArkTS array of a fixed length, with each element set to a given initial value.
     *
     * @param { number } arrayLength - Length of the ArkTS array.
     * @param { T } initialValue - Initial value of each element in the ArkTS array.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The create method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static create<T>(arrayLength: number, initialValue: T): Array<T>;
    /**
     * Creates an ArkTS array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - Array-like object.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The from method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>): Array<T>;
    /**
     * Creates an ArkTS array from an iterable object.
     *
     * @param { Iterable<T> } iterable - Array-like object.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 10200011 - The from method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(iterable: Iterable<T>): Array<T>;
    /**
     * Creates an ArkTS array from an array-like object, and uses a custom function to process each array element.
     *
     * @param { ArrayLike<T> | Iterable<T> } arrayLike - Array-like object.
     * @param { ArrayFromMapFn<T, T> } mapFn - Functions used to process the array elements.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T> | Iterable<T>, mapFn: ArrayFromMapFn<T, T>): Array<T>;
    /**
     * Creates an ArkTS array from an array-like object, and uses a custom function to process each array element. The
     * type of the elements in the array-like object can be different from that of the array elements.
     *
     * @param  { ArrayLike<U> | Iterable<U> } arrayLike - Array-like object.
     * @param  { ArrayFromMapFn<U, T> } mapFn - Functions used to process the array elements.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static from<U, T>(arrayLike: ArrayLike<U> | Iterable<U>, mapFn: ArrayFromMapFn<U, T>): Array<T>;
    /**
     * A constructor used to create an empty ArkTS array.
     *
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS array with the given elements.
     *
     * @param { T } first - First element to be included in the ArkTS array.
     * @param { T[] } left - Remaining elements to be included in the ArkTS array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(first: T, ...left: T[]);
    /**
     * A constructor used to create an ArkTS array with the given elements.
     *
     * @param { T[] } items - Elements to be included in the ArkTS array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(...items: T[]);
    /**
     * Removes the last element from this ArkTS array and returns that element. If the array is empty, **undefined** is
     * returned and the array does not change.
     *
     * @returns { T | undefined } Element removed. If the array is empty, **undefined** is returned.
     * @throws { BusinessError } 10200011 - The pop method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    pop(): T | undefined;
    /**
     * Adds elements to the end of this ArkTS array and returns the new length of the array.
     *
     * @param { T[] } items - Elements to add.
     * @returns { number } New length of the array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The push method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    push(...items: T[]): number;
    /**
     * Concatenates all elements in this ArkTS array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Removes the first element from this ArkTS array and returns that element. If the array is empty, **undefined** is
     * returned and the array does not change.
     *
     * @returns { T | undefined } Element removed. If the array is empty, **undefined** is returned.
     * @throws { BusinessError } 10200011 - The shift method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    shift(): T | undefined;
    /**
     * Adds elements to the beginning of this ArkTS array and returns the new length of the array.
     *
     * @param { T[] } items - Elements to add.
     * @returns { number } New length of the array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The unshift method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    unshift(...items: T[]): number;
    /**
     * Selects a range of elements in this ArkTS array to create an array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in,
     *     it refers to the index of start + array.length. The default value is 0.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in,
     *     it refers to the index of end + array.length. The default value is the length of the ArkTS array.
     * @returns { Array<T> } New array containing the selected elements.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Array<T>;
    /**
     * Sorts elements in this ArkTS array and returns a new array.
     *
     * @param { function } [compareFn] - Function that determines the sort order. By default, elements are sorted in
     *     ascending order.
     * @returns { Array<T> } Array with the sorted elements.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: (a: T, b: T) => number): Array<T>;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Array. If the value is not found, **-1** is
     * returned.
     *
     * @param { T } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The value begins at 0. The default value is
     *     **0**.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Calls a callback function for each element in this ArkTS Array.
     *
     * @param { function } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: T, index: number, array: Array<T>) => void): void;
    /**
     * Calls a callback function for each element in this ArkTS Array and returns a new array that contains the result
     * of the callback function.
     *
     * @param { function } callbackFn - Callback function to run for each element.
     * @returns { Array<U> } New array containing the result of the callback function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map<U>(callbackFn: (value: T, index: number, array: Array<T>) => U): Array<U>;
    /**
     * Returns a new array containing all elements that pass a test provided by a callback function.
     *
     * @param { function } predicate - Function that takes three arguments. It is used to filter elements. The value
     *     **true** means that the current element passes the test and should be retained in the new array. The value
     *     **false** means that the current element fails the test and should be excluded from the new array.
     * @returns { Array<T> } New array containing elements that pass the test.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>;
    /**
     * Calls a callback function for each element in this ArkTS array, uses the previous return value of the function as
     * an accumulated value, and returns the final result.
     *
     * @param { function } callbackFn - Function that takes four arguments. It performs an operation on each element and
     *     passes the result as an accumulated value to the next element.
     * @returns { T } Final result obtained from the last call of the callback function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T): T;
    /**
     * Similar to the previous API, this API takes an initial value as the second parameter to initialize the
     * accumulator before the array traversal starts.
     *
     * @param { function } callbackFn - Function that takes four arguments. It performs an operation on each element and
     *     passes the result as an accumulated value to the next element.
     * @param { U } initialValue - Initial value of the accumulator.
     * @returns { U } Final result obtained from the last call of the callback function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(
      callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U,
      initialValue: U
    ): U;
    /**
     * Returns the element at a given index in this ArkTS array.
     *
     * @param { number } index - Index of the element. The index in an array always starts from 0 and is an integer. If
     *     a negative number is passed in, it refers to the index of **index + array.length**.
     * @returns { T | undefined } Element at the given index. If the index is out of range or invalid, **undefined** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): T | undefined;
    /**
     * Obtains an iterator, each item of which is a JavaScript object.
     *
     * @returns { IterableIterator<T> } Iterator object.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS array.
     *
     * @returns { IterableIterator<[number, T]> } Iterator object that contains the key-value pair of each element in
     *     the array.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, T]>;
    /**
     * Returns an iterator object that contains the index of each element in this ArkTS array.
     *
     * @returns { IterableIterator<number> } Iterator object that contains the index of each element in the array.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS array.
     *
     * @returns { IterableIterator<T> } Iterator object that contains the value of each element in the array.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<T>;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { function } predicate - Function that takes three arguments. It is used to filter elements. The value
     *     **true** means that the current element meets the conditions, the traversal stops, and that element is
     *     returned. The value **false** means that the current element does not meet the condition, and the traversal
     *     continues until the element that meets the condition is found or the entire array is traversed.
     * @returns { T | undefined } Value of the first element that passes the test. If none of the elements pass the test
     *     , **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: (value: T, index: number, obj: Array<T>) => boolean): T | undefined;
    /**
     * Checks whether this ArkTS array contains an element and returns a Boolean value.
     *
     * @param { T } searchElement - Element to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: T, fromIndex?: number): boolean;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { function } predicate - Function that takes three arguments. It is used to filter elements. The value
     *     **true** means that the current element meets the conditions, the traversal stops, and the index of that
     *     element is returned. The value **false** means that the current element does not meet the condition, and the
     *     traversal continues until the element that meets the condition is found or the entire array is traversed.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean): number;
    /**
     * Fills elements in the specified range of this ArkTS array with a given value.
     *
     * @param { T } value - Value to fill in.
     * @param { number } [start] - Start index of the range. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If no value is passed in, it refers to the last
     *     element of the array.
     * @returns { Array<T> } Filled array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: T, start?: number, end?: number): Array<T>;
    /**
     * Shrinks this ArkTS array to a given length.
     *
     * @param { number } arrayLength - New length of the array. If a value greater than or equal to the current array
     *     length is passed in, the array does not change.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The shrinkTo method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    shrinkTo(arrayLength: number): void;
    /**
     * Extends this array to a given length by adding elements with the specified initial value.
     *
     * @param { number } arrayLength - New length of the array. If a value less than or equal to the current array
     *     length is passed in, the array does not change.
     * @param { T } initialValue - Initial value of the elements to be added.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The extendTo method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    extendTo(arrayLength: number, initialValue: T): void;
    /**
     * Returns the element at a given index in this array.
     *
     * @param { number } index - Index of the element. The index starts from zero.
     *     If the passed-in index is less than 0 or greater than or equal to the value of length, an error is thrown.
     * @returns { T } The element in the array matching the given index.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: T;
    /**
     * Concatenates this ArkTS array with one or more arrays.
     *
     * @param { ConcatArray<T>[] } items - Concatenates this ArkTS array with one or more arrays.
     * @returns { Array<T> } New array generated.
     * @throws { BusinessError } 401 - Parameter error. Not a valid array.
     * @throws { BusinessError } 10200011 - The concat method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    concat(...items: ConcatArray<T>[]): Array<T>;
    /**
     * Removes elements from a specified position (start) and all elements after the specified position in an array.
     *
     * @param { number } start - Index from which the removal starts. If -array.length =< start < 0,
     *     the removal starts from start + array.length. If start < -array.length, the removal starts from 0.
     * @returns { Array<T> } **Array** object that contains the removed elements. If no element is removed, an empty
     *     **Array** object is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The splice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    splice(start: number): Array<T>;
    /**
     * Removes elements from a specified position in an array, and inserts new elements from the same position.
     *
     * @param { number } start - Index from which the removal starts. If -array.length =< start < 0,
     *     the removal starts from start + array.length. If start < -array.length, the removal starts from 0.
     * @param { number } deleteCount - Number of elements to remove.
     * @param { T[] } items - New elements to insert from the start position.
     *     If no value is passed in, only the elements in the array are removed.
     * @returns { Array<T> } **Array** object that contains the removed elements. If no element is removed, an empty
     *     **Array** object is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The splice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    splice(start: number, deleteCount: number, ...items: T[]): Array<T>;
    /**
     * Check whether the input parameter is an ArkTS array.
     *
     * @param { Object|undefined|null } value - Value to check.
     * @returns { boolean } Check result. The value **true** is returned if the input parameter is an ArkTS array;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static isArray(value: Object | undefined | null): boolean;
    /**
     * Creates an ArkTS array with a variable number of parameters.
     *
     * @param { T[] } items - Array of elements used to create the array. The number of elements can be zero, one, or
     *     more.
     * @returns { Array<T> } Newly created ArkTS array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of<T>(...items: T[]): Array<T>;
    /**
     * Copies elements within a given range from this ArkTS array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     **start + array.length**.
     * @param { number } end - End index of the range. If a negative number is passed in, it refers to the index of `end
     *     + array.length`. The default value is the length of the ArkTS array.
     * @returns { Array<T> } ArkTS array after being modified.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Array<T>;
    /**
     * Reverses elements in this ArkTS array and returns a reference to the same array.
     *
     * @returns { Array<T> } Reversed ArkTS array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reverse(): Array<T>;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS array.
     *
     * @param { T } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS array, **-1** is returned. If a negative number is passed in
     *     , it refers to the index of **fromIndex + array.length**.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Checks whether all elements in this ArkTS array meet a given condition.
     *
     * @param { ArrayPredicateFn<T, Array<T>> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    every(predicate: ArrayPredicateFn<T, Array<T>>): boolean;
    /**
     * Checks whether this ArkTS array contains an element that meets certain conditions.
     *
     * @param { ArrayPredicateFn<T, Array<T> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    some(predicate: ArrayPredicateFn<T, Array<T>>): boolean;
    /**
     * Converts an ArkTS array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string that matches the cultural conversions of the current system locale. Each element converts
     * itself to a string via its **toLocaleString** API, and these strings are then joined in sequence with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * This API is similar to the
     * [reduceRight]{@link collections.Array#reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>)} API, but it
     * takes an initial value as the second parameter to initialize the accumulator before the array traversal starts
     * from right to left.
     *
     * @param { ArrayReduceCallback<U, T, Array<T>> } callbackFn - Function that takes four arguments. It performs an
     *     operation on each element and passes the result as an accumulated value to the next element.
     * @param { U } initialValue - Initial value of the accumulator.
     * @returns { U } Final result obtained from the last call of the callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = T>(callbackFn: ArrayReduceCallback<U, T, Array<T>>, initialValue: U): U;
    /**
     * Goes through each element in this ArkTS array from right to left, uses a callback function to combine them into a
     * single value, and returns that final value.
     *
     * @param { ArrayReduceCallback<T, T, Array<T>> } callbackFn - Function that takes four arguments. It performs an
     *     operation on each element and passes the result as an accumulated value to the next element.
     * @returns { T } Final result obtained from the last call of the callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>): T;
 }

  /**
   * A non-linear data structure.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > This section uses the following to identify the use of generics:
   *
   * - K: key.
   * - V: value.
   * The K and V types must be any of the
   * [sendable data types](docroot://arkts-utils/arkts-sendable.md#sendable-data-types).
   * **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Map<K, V> {
    /**
     * Number of elements in a map.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly size: number;
    /**
     * A constructor used to create an ArkTS map.
     *
     * @param { readonly (readonly [K, V])[] | null } [entries] - Array containing key-value pairs, or iterator object.
     *     The default value is **null**, indicating that an empty map is created.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The ArkTS Map's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(entries?: readonly (readonly [K, V])[] | null);
    /**
     * A constructor used to create an ArkTS map.
     *
     * @param { Iterable<readonly [K, V]>} [iterable] - Object used to construct the ArkTS map.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The ArkTS Map's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(iterable: Iterable<readonly [K, V]>);
    /**
     * Returns an iterator, each item of which is a JavaScript object.
     * NOTE:
     * This API cannot be used in .ets files.
     *
     * @returns { IterableIterator<[K, V]> } Iterator object that yields key-value pairs.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
    /**
     * Returns a map iterator object that contains the key-value pair of each element in this ArkTS map.
     *
     * @returns { IterableIterator<[K, V]> } Map iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[K, V]>;
    /**
     * Returns a map iterator object that contains the key of each element in this ArkTS map.
     *
     * @returns { IterableIterator<K> } Map iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<K>;
    /**
     * Returns a map iterator object that contains the value of each element in this ArkTS map.
     *
     * @returns { IterableIterator<V> } Map iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<V>;
    /**
     * Removes all elements from this ArkTS map.
     *
     * @throws { BusinessError } 10200011 - The clear method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): void;
    /**
     * Deletes a specified key from this ArkTS map.
     *
     * @param { K } key - Key to delete.
     * @returns { boolean } Operation result. The value **true** is returned if the key exists and has been deleted;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The delete method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    delete(key: K): boolean;
    /**
     * Calls a callback function for each key-value pair in this ArkTS map.
     *
     * @param { function } callbackFn - Callback function to run for each key-value pair.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void;
    /**
     * Obtains the value of the specified key in this ArkTS map.
     *
     * @param { K } key - Target key.
     * @returns { V | undefined } Value obtained. If the key is not found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The get method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    get(key: K): V | undefined;
    /**
     * Checks whether a key exists in this ArkTS map.
     *
     * @param { K } key - Target key.
     * @returns { boolean } Check result. The value **true** is returned if the key exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The has method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    has(key: K): boolean;
    /**
     * Adds or updates a key-value pair to this ArkTS map.
     *
     * @param { K } key - Target key.
     * @param { V } value - Target value.
     * @returns { Map<K, V> } New map obtained.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(key: K, value: V): Map<K, V>;
  }


  /**
   * A non-linear data structure.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > This section uses the following to identify the use of generics:
   *
   * - T: type, which can be any of the
   * [sendable data types](docroot://arkts-utils/arkts-sendable.md#sendable-data-types).
   * **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Set<T> {
    /**
     * Number of elements in a set.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly size: number;
    /**
     * A constructor used to create an ArkTS set.
     *
     * @param { readonly T[] | null } [values] - Array or iterator object. The default value is **null**, indicating
     *     that an empty set is created.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The ArkTS Set's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(values?: readonly T[] | null);
    /**
     * A constructor used to create an ArkTS set.
     *
     * @param { Iterable<T>} [iterable] - Object used to construct an ArkTS set.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200012 - The ArkTS Set's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(iterable: Iterable<T>);
    /**
     * Returns an iterator, each item of which is a JavaScript object.
     * NOTE:
     * This API cannot be used in .ets files.
     *
     * @returns { IterableIterator<T> } Iterator object.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Returns a set iterator object that contains the key-value pair of each element in this ArkTS set.
     *
     * @returns { IterableIterator<[T, T]> } Returns a set iterator object that contains the key-value pair of each
     *     element in this ArkTS set.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[T, T]>;
    /**
     * Returns a set iterator object that contains the key of each element in this ArkTS set.
     *
     * @returns { IterableIterator<T> } Returns a set iterator object that contains the key of each element in this
     *     ArkTS set.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<T>;
    /**
     * Returns a set iterator object that contains the value of each element in this ArkTS set.
     *
     * @returns { IterableIterator<T> } Returns a set iterator object that contains the value of each element in this
     *     ArkTS set.
     * @throws { BusinessError } 10200011 - The values method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<T>;
    /**
     * Checks whether a value exists in this ArkTS set, and if not, adds the value to the set.
     *
     * @param { T } value - Target value.
     * @returns { Set<T> } Set object.
     * @throws { BusinessError } 10200011 - The add method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    add(value: T): Set<T>;
    /**
     * Removes all elements from this ArkTS set.
     *
     * @throws { BusinessError } 10200011 - The clear method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): void;
    /**
     * Deletes an element from this ArkTS set.
     *
     * @param { T } value - Target value.
     * @returns { boolean } Operation result. The value **true** is returned if the key is deleted; otherwise, **false**
     *     is returned.
     * @throws { BusinessError } 10200011 - The delete method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    delete(value: T): boolean;
    /**
     * Calls a callback function for each key-value pair in this ArkTS set.
     *
     * @param { function } callbackFn - Callback function to run for each key-value pair.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: T, value2: T, set: Set<T>) => void): void;
    /**
     * Checks whether a value exists in this ArkTS set.
     *
     * @param { T } value - Target key.
     * @returns { boolean } Check result. The value **true** is returned if the value exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The has method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    has(value: T): boolean;
  }
  /**
   * Underlying data structure of the ArkTS TypedArray ([Int8Array]{@link ./arkts/@arkts.collections:collections},
   * [Uint8Array]{@link ./arkts/@arkts.collections:collections},
   * [Int16Array]{@link ./arkts/@arkts.collections:collections},
   * [Uint16Array]{@link ./arkts/@arkts.collections:collections},
   * [Int32Array]{@link ./arkts/@arkts.collections:collections},
   * [Uint32Array]{@link ./arkts/@arkts.collections:collections},
   * [Uint8ClampedArray]{@link ./arkts/@arkts.collections:collections}, and
   * [Float32Array]{@link ./arkts/@arkts.collections:collections}).
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class ArrayBuffer {
    /**
     * Number of bytes occupied by the buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * A constructor used to create an ArkTS ArrayBuffer of a given length.
     *
     * @param { number } byteLength - Number of bytes occupied by the buffer. The maximum value is **2147483647**.
     * @throws { BusinessError } 10200012 - The ArrayBuffer's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(byteLength: number);
    /**
     * Selects a range of elements in this ArkTS ArrayBuffer to create an ArkTS ArrayBuffer.
     *
     * @param { number } begin - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `begin + arrayBuffer.byteLength`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + arrayBuffer.byteLength`. The default value is the length of the original ArkTS ArrayBuffer.
     * @returns { ArrayBuffer } New ArrayBuffer generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(begin: number, end?: number): ArrayBuffer;
  }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int8Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Int16Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Int8Array.
     *
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Int8Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Int8Array.
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Int8Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Int8Array
     *     object.
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Int8Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Int8Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Int8Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Int8Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Int8Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Int8Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Int8Array.
     * @returns { Int8Array } New ArkTS Int8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int8Array;

    /**
     * Creates an ArkTS Int8Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - Array-like object used to construct the ArkTS Int8Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Int8Array } New ArkTS Int8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int8Array;
    /**
     * Creates an ArkTS Int8Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - Iterator object used to construct the ArkTS Int8Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - Mapping function. If no value is passed in,
     *     no special processing is conducted on the elements.
     * @returns { Int8Array } New ArkTS Int8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int8Array;
    /**
     * Copies elements within a given range from this ArkTS Int8Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Int8Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int8Array.length`. The default value is the length of the ArkTS Int8Array.
     * @returns { Int8Array } ArkTS Int8Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int8Array;
    /**
     * Checks whether all elements in this ArkTS Int8Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Int8Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int8Array.length`. The default value is the length of the ArkTS Int8Array.
     * @returns { Int8Array } Filled ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int8Array;
    /**
     * Returns a new ArkTS Int8Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - Assertion function used for the test.
     * @returns { Int8Array } Filtered ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int8Array>): Int8Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int8Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int8Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Int8Array.
     *
     * @param { TypedArrayForEachCallback<number, Int8Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int8Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Int8Array. If the value is not found, **-1**
     * is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Int8Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Int8Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Int8Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Int8Array and uses the result to create an ArkTS Int8
     * Array.
     *
     * @param { TypedArrayMapCallback<number, Int8Array> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Int8Array } New ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int8Array>): Int8Array;
    /**
     * Applies a reduce function on each element in this ArkTS Int8Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int8Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int8Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int8Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Int8Array.
     *
     * @returns { Int8Array } Reversed ArkTS Int8Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int8Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - Array-like object whose elements will be written.
     * @param { number } [offset] - Start position for writing data. The default value is 0.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Int8Array to create an ArkTS Int8Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int8Array.length`. The default value is the length of the ArkTS Int8Array.
     * @returns { Int8Array } New ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int8Array;
    /**
     * Checks whether any element in this ArkTS Int8Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean;
    /**
     * Sorts elements in this ArkTS Int8Array and returns the sorted ArkTS Int8Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Int8Array } Sorted ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int8Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Int8Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Int8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int8Array.length`. The default value is the length of the ArkTS Int8Array.
     * @returns { Int8Array } New ArkTS Int8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int8Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - Index of the element. The index in an array always starts from 0 and is an integer.
     *     If a negative number is passed in, it refers to the index of index + Int8Array.length.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator, each item of which is a JavaScript object.
     * NOTE:
     * This API cannot be used in .ets files.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Int8Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Int8Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Int8Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Int8Array.
     *
     * @param { number } searchElement - Element to search for.
     * @param { number } [fromIndex] - Index from which the search starts. If a negative number is passed in,
     *     it refers to the index of fromIndex + Int8Array.length. The default value is 0.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the element at a given index in this Int8Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Int8Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Int8Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Int8Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Int8Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int8Array> } callbackFn - A function that is called for
     *     each element in the Int8Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Int8Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Int8Array, applies a reduce function on each element in the array, and returns the
     * final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - A function that is called for
     *     each element in the Int8Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number;
    /**
     * Converts an ArkTS Int8Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Int8Array with a variable number of parameters.
     *
     * @static [since 18 - 21]
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Int8Array } New ArkTS Int8Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int8Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint8ClampedArray {
    /**
     * Number of bytes occupied by each element in the ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Int16Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Uint8ClampedArray.
     *
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Uint8ClampedArray of a given length.
     *
     * @param { number } length - Length of the ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Uint8ClampedArray from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Uint8
     *     ClampedArray object.
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Uint8ClampedArray from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Uint8ClampedArray. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Uint8ClampedArray from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Uint8ClampedArray. The number of
     *     bytes occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Uint8ClampedArray. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Uint8ClampedArray from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Uint8ClampedArray.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

    /**
     * Creates an ArkTS Uint8ClampedArray from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - Array-like object used to construct the ArkTS Uint8ClampedArray.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint8ClampedArray;
    /**
     * Creates an ArkTS Uint8ClampedArray from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - Iterator object used to construct the ArkTS Uint8ClampedArray.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - Mapping function. If no value is passed in,
     *     no special processing is conducted on the elements.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint8ClampedArray;
    /**
     * Copies elements within a given range from this ArkTS Uint8ClampedArray to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Uint8ClampedArray.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8ClampedArray.length`. The default value is the length of the ArkTS Uint8ClampedArray.
     * @returns { Uint8ClampedArray } Uint8ClampedArray after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint8ClampedArray;
    /**
     * Checks whether all elements in this ArkTS Uint8ClampedArray meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Uint8ClampedArray with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint8ClampedArray.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8ClampedArray.length`. The default value is the length of the ArkTS Uint8ClampedArray.
     * @returns { Uint8ClampedArray } Filled ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint8ClampedArray;
    /**
     * Returns a new ArkTS Uint8ClampedArray that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - Assertion function used for the test.
     * @returns { Uint8ClampedArray } Filtered ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): Uint8ClampedArray;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): number;
    /**
     * Calls a callback function for each element in this ArkTS Uint8ClampedArray.
     *
     * @param { TypedArrayForEachCallback<number, Uint8ClampedArray> } callbackFn - Callback function to run for each
     *     element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint8ClampedArray>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Uint8ClampedArray and uses the result to create an
     * ArkTS Uint8ClampedArray.
     *
     * @param { TypedArrayMapCallback<number, Uint8ClampedArray> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint8ClampedArray>): Uint8ClampedArray;
    /**
     * Applies a reduce function on each element in this ArkTS Uint8ClampedArray and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8ClampedArray> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8ClampedArray>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint8ClampedArray, receives an initial value as the
     * parameter called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8ClampedArray> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8ClampedArray>, initialValue: U): U;
    /**
     * Reverses this ArkTS Uint8ClampedArray.
     *
     * @returns { Uint8ClampedArray } Reversed ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint8ClampedArray;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Uint8ClampedArray to create an ArkTS Uint8ClampedArray.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint8ClampedArray.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8ClampedArray.length`. The default value is the length of the ArkTS Uint8ClampedArray.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint8ClampedArray;
    /**
     * Checks whether any element in this ArkTS Uint8ClampedArray meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): boolean;
    /**
     * Sorts elements in this ArkTS Uint8ClampedArray and returns the sorted ArkTS Uint8ClampedArray.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Uint8ClampedArray } Sorted ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint8ClampedArray;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Uint8ClampedArray based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Uint8ClampedArray.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8ClampedArray.length`. The default value is the length of the ArkTS Uint8ClampedArray.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint8ClampedArray;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Uint8ClampedArray.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Uint8ClampedArray, **-1** is returned. If a negative number
     *     is passed in, the search starts from the end of the ArkTS Uint8ClampedArray.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Uint8ClampedArray, applies a reduce function for each element in the array,
     * receives an initial value as the parameter called by the reduce function for the first time, and returns the
     * final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8ClampedArray> } callbackFn - A function that is called for
     *     each element in the Uint8ClampedArray.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Uint8ClampedArray will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8ClampedArray>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Uint8ClampedArray, applies a reduce function on each element in the array, and
     * returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8ClampedArray> } callbackFn - A function that is called for
     *     each element in the Uint8ClampedArray.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint8ClampedArray>): number;
    /**
     * Converts an ArkTS Uint8ClampedArray into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates digits that match the cultural conventions of the current system locale. Each element converts its
     * digits to a string via its **toLocaleString** API, and these strings are then joined in sequence with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Uint8ClampedArray with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Uint8ClampedArray } New ArkTS Uint8ClampedArray instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint8ClampedArray;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint8Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Float32Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Uint8Array.
     *
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Uint8Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Uint8Array.
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Uint8Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Uint8Array
     *     object.
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Uint8Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Uint8Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Uint8Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Uint8Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Uint8Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Uint8Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Uint8Array.
     * @returns { Uint8Array } New ArkTS Uint8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint8Array;
    /**
     * Creates an ArkTS Uint8Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Uint8Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Uint8Array } New ArkTS Uint8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint8Array;
    /**
     * Creates an ArkTS Uint8Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - An iterable object to convert to an Uint8Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - A mapping function to
     *     call on every element of the array.
     * @returns { Uint8Array } New ArkTS Uint8Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint8Array;
    /**
     * Copies elements within a given range from this ArkTS Uint8Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Uint8Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8Array.length`. The default value is the length of the ArkTS Uint8Array.
     * @returns { Uint8Array } ArkTS Uint8Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint8Array;
    /**
     * Checks whether all elements in this ArkTS Uint8Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint8Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Uint8Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8Array.length`. The default value is the length of the ArkTS Uint8Array.
     * @returns { Uint8Array } Filled ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint8Array;
    /**
     * Returns a new ArkTS Uint8Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - Assertion function used for the test.
     * @returns { Uint8Array } Filtered ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint8Array>): Uint8Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint8Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint8Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Uint8Array.
     *
     * @param { TypedArrayForEachCallback<number, Uint8Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint8Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Uint8Array and uses the result to create an ArkTS Uint8
     * Array.
     *
     * @param { TypedArrayMapCallback<number, Uint8Array> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Uint8Array } New ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint8Array>): Uint8Array;
    /**
     * Applies a reduce function on each element in this ArkTS Uint8Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint8Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint8Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint8Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Uint8Array.
     *
     * @returns { Uint8Array } Reversed ArkTS Uint8Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint8Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Uint8Array to create an ArkTS Uint8Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8Array.length`. The default value is the length of the ArkTS Uint8Array.
     * @returns { Uint8Array } New ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint8Array;
    /**
     * Checks whether any element in this ArkTS Uint8Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint8Array>): boolean;
    /**
     * Sorts elements in this ArkTS Uint8Array and returns the sorted ArkTS Uint8Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Uint8Array } Sorted ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint8Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Uint8Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Uint8Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint8Array.length`. The default value is the length of the ArkTS Uint8Array.
     * @returns { Uint8Array } New ArkTS Uint8Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint8Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Uint8Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Uint8Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Uint8Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Uint8Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8Array> } callbackFn - A function that is called for
     *     each element in the Uint8Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Uint8Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Uint8Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - A function that is called for
     *     each element in the Uint8Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>): number;
    /**
     * Converts an ArkTS Uint8Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined together in
     * sequence with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Uint8Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Uint8Array } New ArkTS Uint8Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint8Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int16Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Int16Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Int16Array.
     *
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Int16Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Int16Array.
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Int16Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Int16Array
     *     object.
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Int16Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Int16Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Int16Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Int16Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Int16Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Int16Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Int16Array.
     * @returns { Int16Array } New ArkTS Int16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int16Array;

    /**
     * Creates an ArkTS Int16Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - Array-like object used to construct the ArkTS Int16Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Int16Array } New ArkTS Int16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int16Array;
    /**
     * Creates an ArkTS Int16Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - Iterator object used to construct the ArkTS Int16Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - Mapping function. If no value is passed in,
     *     no special processing is conducted on the elements.
     * @returns { Int16Array } New ArkTS Int16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int16Array;
    /**
     * Copies elements within a given range from this ArkTS Int16Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Int16Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int16Array.length`. The default value is the length of the ArkTS Int16Array.
     * @returns { Int16Array } ArkTS Int16Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int16Array;
    /**
     * Checks whether all elements in this ArkTS Int16Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int16Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Int16Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int16Array.length`. The default value is the length of the ArkTS Int16Array.
     * @returns { Int16Array } Filled ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int16Array;
    /**
     * Returns a new ArkTS Int16Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - Assertion function used for the test.
     * @returns { Int16Array } Filtered ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int16Array>): Int16Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int16Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int16Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Int16Array.
     *
     * @param { TypedArrayForEachCallback<number, Int16Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int16Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Int16Array. If the value is not found, **-1**
     * is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Int16Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Int16Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Int16Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Int16Array and uses the result to create an ArkTS Int16
     * Array.
     *
     * @param { TypedArrayMapCallback<number, Int16Array> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Int16Array } New ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int16Array>): Int16Array;
    /**
     * Applies a reduce function on each element in this ArkTS Int16Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int16Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int16Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int16Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int16Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Int16Array.
     *
     * @returns { Int16Array } Reversed ArkTS Int16Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int16Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - Array-like object whose elements will be written.
     * @param { number } [offset] - Start position for writing data. The default value is 0.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Int16Array to create an ArkTS Int16Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int16Array.length`. The default value is the length of the ArkTS Int16Array.
     * @returns { Int16Array } New ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int16Array;
    /**
     * Checks whether any element in this ArkTS Int16Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int16Array>): boolean;
    /**
     * Sorts elements in this ArkTS Int16Array and returns the sorted ArkTS Int16Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Int16Array } Sorted ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int16Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Int16Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Int16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int16Array.length`. The default value is the length of the ArkTS Int16Array.
     * @returns { Int16Array } New ArkTS Int16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int16Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - Index of the element. The index in an array always starts from 0 and is an integer.
     *     If a negative number is passed in, it refers to the index of index + Int16Array.length.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator, each item of which is a JavaScript object.
     * NOTE:
     * This API cannot be used in .ets files.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Int16Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Int16Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Int16Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Int16Array.
     *
     * @param { number } searchElement - Element to search for.
     * @param { number } [fromIndex] - Index from which the search starts. If a negative number is passed in,
     *     it refers to the index of fromIndex + Int16Array.length. The default value is 0.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the element at a given index in this Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Int16Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Int16Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Int16Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Int16Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int16Array> } callbackFn - A function that is called for
     *     each element in the Int16Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Int16Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int16Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Int16Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - A function that is called for
     *     each element in the Int16Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>): number;
    /**
     * Converts an ArkTS Int16Array to a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Int16Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Int16Array } New ArkTS Int16Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int16Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint16Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Float32Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Uint16Array.
     *
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Uint16Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Uint16Array.
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Uint16Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Uint16Array
     *     object.
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Uint16Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Uint16Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Uint16Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Uint16Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Uint16Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Uint16Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Uint16Array.
     * @returns { Uint16Array } New ArkTS Uint16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint16Array;
    /**
     * Creates an ArkTS Uint16Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Uint16Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Uint16Array } New ArkTS Uint16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint16Array;
    /**
     * Creates an ArkTS Uint16Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - An iterable object to convert to an Uint16Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - A mapping function to
     *     call on every element of the array.
     * @returns { Uint16Array } New ArkTS Uint16Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint16Array;
    /**
     * Copies elements within a given range from this ArkTS Uint16Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Uint16Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint16Array.length`. The default value is the length of the ArkTS Uint16Array.
     * @returns { Uint16Array } ArkTS Uint16Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint16Array;
    /**
     * Checks whether all elements in this ArkTS Uint16Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint16Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Uint16Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint16Array.length`. The default value is the length of the ArkTS Uint16Array.
     * @returns { Uint16Array } Filled ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint16Array;
    /**
     * Returns a new ArkTS Uint16Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - Assertion function used for the test.
     * @returns { Uint16Array } Filtered ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint16Array>): Uint16Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint16Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint16Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Uint16Array.
     *
     * @param { TypedArrayForEachCallback<number, Uint16Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint16Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Uint16Array and uses the result to create an ArkTS Uint
     * 16Array.
     *
     * @param { TypedArrayMapCallback<number, Uint16Array> } callbackFn - A function that accepts up to
     *     three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @returns { Uint16Array } New ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint16Array>): Uint16Array;
    /**
     * Applies a reduce function on each element in this ArkTS Uint16Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint16Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint16Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint16Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint16Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Uint16Array.
     *
     * @returns { Uint16Array } Reversed ArkTS Uint16Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint16Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Uint16Array to create an ArkTS Uint16Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint16Array.length`. The default value is the length of the ArkTS Uint16Array.
     * @returns { Uint16Array } New ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint16Array;
    /**
     * Checks whether any element in this ArkTS Uint16Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint16Array>): boolean;
    /**
     * Sorts elements in this ArkTS Uint16Array and returns the sorted ArkTS Uint16Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Uint16Array } Sorted ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint16Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Uint16Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Uint16Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint16Array.length`. The default value is the length of the ArkTS Uint16Array.
     * @returns { Uint16Array } New ArkTS Uint16Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint16Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Uint16Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Uint16Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Uint16Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Uint16Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint16Array> } callbackFn - A function that is called for
     *     each element in the Uint16Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Uint16Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint16Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Uint16Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - A function that is called for
     *     each element in the Uint16Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>): number;
    /**
     * Converts an ArkTS Uint16Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Uint16Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Uint16Array } New ArkTS Uint16Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint16Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int32Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Float32Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Int32Array.
     *
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Int32Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Int32Array.
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Int32Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Int32Array
     *     object.
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Int32Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Int32Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Int32Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Int32Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Int32Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Int32Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Int32Array.
     * @returns { Int32Array } New ArkTS Int32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int32Array;
    /**
     * Creates an ArkTS Int32Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Int32Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Int32Array } New ArkTS Int32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int32Array;
    /**
     * Creates an ArkTS Int32Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - An iterable object to convert to an Int32Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - A mapping function to
     *     call on every element of the array.
     * @returns { Int32Array } New ArkTS Int32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int32Array;
    /**
     * Copies elements within a given range from this ArkTS Int32Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Int32Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int32Array.length`. The default value is the length of the ArkTS Int32Array.
     * @returns { Int32Array } ArkTS Int32Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int32Array;
    /**
     * Checks whether all elements in this ArkTS Int32Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int32Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Int32Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int32Array.length`. The default value is the length of the ArkTS Int32Array.
     * @returns { Int32Array } Filled ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int32Array;
    /**
     * Returns a new ArkTS Int32Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - Assertion function used for the test.
     * @returns { Int32Array } Filtered ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int32Array>): Int32Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int32Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int32Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Int32Array.
     *
     * @param { TypedArrayForEachCallback<number, Int32Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int32Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Int32Array and uses the result to create an ArkTS Int32
     * Array.
     *
     * @param { TypedArrayMapCallback<number, Int32Array> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Int32Array } New ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int32Array>): Int32Array;
    /**
     * Applies a reduce function on each element in this ArkTS Int32Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int32Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Int32Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int32Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int32Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Int32Array.
     *
     * @returns { Int32Array } Reversed ArkTS Int32Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int32Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Int32Array to create an ArkTS Int32Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Int32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int32Array.length`. The default value is the length of the ArkTS Int32Array.
     * @returns { Int32Array } New ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int32Array;
    /**
     * Checks whether any element in this ArkTS Int32Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int32Array>): boolean;
    /**
     * Sorts elements in this ArkTS Int32Array and returns the sorted ArkTS Int32Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Int32Array } Sorted ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int32Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Int32Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Int32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Int32Array.length`. The default value is the length of the ArkTS Int32Array.
     * @returns { Int32Array } New ArkTS Int32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int32Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Int32Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Int32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Int32Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Int32Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Int32Array> } callbackFn - A function that is called for
     *     each element in the Int32Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Int32Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int32Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Int32Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - A function that is called for
     *     each element in the Int32Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>): number;
    /**
     * Converts an ArkTS Int32Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Int32Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Int32Array } New ArkTS Int32Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int32Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint32Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Float32Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Uint32Array.
     *
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Uint32Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Uint32Array.
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Uint32Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Uint32Array
     *     object.
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Uint32Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Uint32Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Uint32Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Uint32Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Uint32Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Uint32Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Uint32Array.
     * @returns { Uint32Array } New ArkTS Uint32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint32Array;
    /**
     * Creates an ArkTS Uint32Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Uint32Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Uint32Array } New ArkTS Uint32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint32Array;
    /**
     * Creates an ArkTS Uint32Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - An iterable object to convert to an Uint32Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - A mapping function to
     *     call on every element of the array.
     * @returns { Uint32Array } New ArkTS Uint32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint32Array;
    /**
     * Copies elements within a given range from this ArkTS Uint32Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Uint32Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint32Array.length`. The default value is the length of the ArkTS Uint32Array.
     * @returns { Uint32Array } ArkTS Uint32Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint32Array;
    /**
     * Checks whether all elements in this ArkTS Uint32Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Uint32Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint32Array.length`. The default value is the length of the ArkTS Uint32Array.
     * @returns { Uint32Array } Filled ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint32Array;
    /**
     * Returns a new ArkTS Uint32Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - Assertion function used for the test.
     * @returns { Uint32Array } Filtered ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint32Array>): Uint32Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint32Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint32Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Uint32Array.
     *
     * @param { TypedArrayForEachCallback<number, Uint32Array> } callbackFn - Callback function to run for each element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint32Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Uint32Array and uses the result to create an ArkTS Uint
     * 32Array.
     *
     * @param { TypedArrayMapCallback<number, Uint32Array> } callbackFn - A function that accepts up to
     *     three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @returns { Uint32Array } New ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint32Array>): Uint32Array;
    /**
     * Applies a reduce function on each element in this ArkTS Uint32Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint32Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>, initialValue: number): number;
    /**
     * Applies a reduce function for each element in this ArkTS Uint32Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint32Array> } callbackFn - Reduce function.
     * @param { U } initialValue - Initial value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Uint32Array.
     *
     * @returns { Uint32Array } Reversed ArkTS Uint32Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint32Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Uint32Array to create an ArkTS Uint32Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Uint32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint32Array.length`. The default value is the length of the ArkTS Uint32Array.
     * @returns { Uint32Array } New ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint32Array;
    /**
     * Checks whether any element in this ArkTS Uint32Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean;
    /**
     * Sorts elements in this ArkTS Uint32Array and returns the sorted ArkTS Uint32Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Uint32Array } Sorted ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint32Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Uint32Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Uint32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Uint32Array.length`. The default value is the length of the ArkTS Uint32Array.
     * @returns { Uint32Array } New ArkTS Uint32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint32Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Uint32Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Uint32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Uint32Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Uint32Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Uint32Array> } callbackFn - A function that is called for
     *     each element in the Uint32Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Uint32Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Uint32Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - A function that is called for
     *     each element in the Uint32Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number;
    /**
     * Converts an ArkTS Uint32Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Uint32Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Uint32Array } New ArkTS Uint32Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint32Array;
 }

  /**
   * A linear data structure that is implemented on [ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Float32Array {
    /**
     * Number of bytes occupied by each element in the ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * Bottom-layer buffer used by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * Number of bytes occupied by an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * Offset between the ArkTS Float32Array and the start position of the ArrayBuffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * Number of elements in an ArkTS Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * A constructor used to create an empty ArkTS Float32Array.
     *
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * A constructor used to create an ArkTS Float32Array of a given length.
     *
     * @param { number } length - Length of the ArkTS Float32Array.
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * A constructor that creates an ArkTS Float32Array from an iterable object.
     *
     * @param { Iterable<number> } elements - An iterable collection of numbers used to construct an ArkTS Float32Array
     *     object.
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * A constructor that creates an ArkTS Float32Array from an array-like object or ArkTS ArrayBuffer.
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - Object used to construct the ArkTS Float32Array. When the
     *     parameter type is ArrayBuffer, the number of bytes occupied by the buffer must be an integer multiple of 4.
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * A constructor that creates an ArkTS Float32Array from an ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - ArrayBuffer object used to construct the ArkTS Float32Array. The number of bytes
     *     occupied by the buffer must be an integer multiple of 4.
     * @param { number } [byteOffset] - Byte offset of the buffer, beginning at 0. The default value is **0**.
     * @param { number } [length] - Length of the ArkTS Float32Array. The default value is **0**.
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * Creates an ArkTS Float32Array from an array-like or iterator object.
     *
     * @param { ArrayLike<number> } arrayLike - Array-like object used to construct the ArkTS Float32Array.
     * @returns { Float32Array } New ArkTS Float32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Float32Array;
    /**
     * Creates an ArkTS Float32Array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Float32Array.
     * @param { TypedArrayFromMapFn<T, number> } mapFn - A mapping function to call on every element of the array.
     * @returns { Float32Array } New ArkTS Float32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Float32Array;
    /**
     * Creates an ArkTS Float32Array from an iterator object.
     *
     * @param { Iterable<number> } arrayLike - An iterable object to convert to an Float32Array.
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - A mapping function to
     *     call on every element of the array.
     * @returns { Float32Array } New ArkTS Float32Array generated.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Float32Array;
    /**
     * Copies elements within a given range from this ArkTS Float32Array to another position in sequence.
     *
     * @param { number } target - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `target + array.length`.
     * @param { number } start - Start index of the range. If a negative number is passed in, it refers to the index of
     *     `start + Float32Array.length`.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Float32Array.length`. The default value is the length of the ArkTS Float32Array.
     * @returns { Float32Array } ArkTS Float32Array after being modified.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Float32Array;
    /**
     * Checks whether all elements in this ArkTS Float32Array meet a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if all elements meet the given condition;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Float32Array>): boolean;
    /**
     * Fills all elements in a given range in this ArkTS Float32Array with a value.
     *
     * @param { number } value - Value to fill in.
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Float32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Float32Array.length`. The default value is the length of the ArkTS Float32Array.
     * @returns { Float32Array } Filled ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Float32Array;
    /**
     * Returns a new ArkTS Float32Array that contains all elements that meet the given condition.
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - Assertion function used for the test.
     * @returns { Float32Array } Filtered ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Float32Array>): Float32Array;
    /**
     * Returns the value of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **undefined** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - Assertion function used for the test.
     * @returns { number | undefined } Value of the first element that passes the test. If none of the elements pass the
     *     test, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Float32Array>): number | undefined;
    /**
     * Returns the index of the first element that passes a test provided by a callback function. If none of the
     * elements pass the test, **-1** is returned.
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - Assertion function used for the test.
     * @returns { number } Index of the first element that passes the test. If none of the elements pass the test,
     *     **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Float32Array>): number;
    /**
     * Calls a callback function for each element in this ArkTS Float32Array.
     *
     * @param { TypedArrayForEachCallback<number, Float32Array> } callbackFn - Callback function to run for each
     *     element.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Float32Array>): void;
    /**
     * Returns the index of the first occurrence of a value in this ArkTS Float32Array. If the value is not found,
     * **-1** is returned.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } [fromIndex] - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the first occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Concatenates all elements in this ArkTS Float32Array into a string, with a given separator.
     *
     * @param { string } [separator] - Separator to be used. If no value is passed in, a comma (,) is used as the
     *     separator.
     * @returns { string } String obtained. If the array is empty, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * Applies a callback function to each element in this ArkTS Float32Array and uses the result to create an ArkTS
     * Float32Array.
     *
     * @param { TypedArrayMapCallback<number, Float32Array> } callbackFn - A function that
     *     accepts up to three arguments.
     *     The map method calls the callbackfn function one time for each element in the array.
     * @returns { Float32Array } New ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Float32Array>): Float32Array;
    /**
     * Applies a reduce function on each element in this ArkTS Float32Array and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Float32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Float32Array>): number;
    /**
     * Applies a reduce function for each element in this ArkTS Float32Array, receives an initial value as the parameter
     * called by the reduce function for the first time, and returns the final reduction result.
     *
     * @param { TypedArrayReduceCallback<U, number, Float32Array> } callbackFn - A function that
     *     accepts up to four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - If initialValue is specified, it is used as the initial value to start
     *     the accumulation. The first call to the callbackfn function provides this value as an argument
     *     instead of an array value.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Float32Array>, initialValue: U): U;
    /**
     * Reverses this ArkTS Float32Array.
     *
     * @returns { Float32Array } Reversed ArkTS Float32Array.
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Float32Array;
    /**
     * Writes the elements in an array-like object to the given start position in sequence.
     *
     * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
     * @param { number } [offset] - The index in the current array at which the values are to be written.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * Selects a range of elements in this ArkTS Float32Array to create an ArkTS Float32Array.
     *
     * @param { number } [start] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `start + Float32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Float32Array.length`. The default value is the length of the ArkTS Float32Array.
     * @returns { Float32Array } New ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Float32Array;
    /**
     * Checks whether any element in this ArkTS Float32Array meets a given condition.
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - Assertion function used for the test.
     * @returns { boolean } Check result. The value **true** is returned if an element meeting the given condition
     *     exists; otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Float32Array>): boolean;
    /**
     * Sorts elements in this ArkTS Float32Array and returns the sorted ArkTS Float32Array.
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - Function that determines the sort order. By default,
     *     elements are sorted in ascending order.
     * @returns { Float32Array } Sorted ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Float32Array;
    /**
     * Truncates an array from a specified position and returns a new ArkTS Float32Array based on the same ArkTS
     * ArrayBuffer.
     *
     * @param { number } [begin] - Start index of the range. If a negative number is passed in, it refers to the index
     *     of `begin + Float32Array.length`. The default value is **0**.
     * @param { number } [end] - End index of the range (exclusive). If a negative number is passed in, it refers to the
     *     index of `end + Float32Array.length`. The default value is the length of the ArkTS Float32Array.
     * @returns { Float32Array } New ArkTS Float32Array.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Float32Array;
    /**
     * Returns the element at the given index. If no element is found, **undefined** is returned.
     *
     * @param { number } index - The zero-based index of the desired code unit.<br/>
     *     A negative index will count back from the last item.
     * @returns { number | undefined } Element obtained. If no element is found, **undefined** is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * Returns an iterator that iterates over numbers.
     *
     * @returns { IterableIterator<number> } Iterator object that yields numbers.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the key-value pair of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<[number, number]> } Iterator object.
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Returns an iterator object that contains the key (index) of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this ArkTS Float32Array.
     *
     * @returns { IterableIterator<number> } Iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * Checks whether elements are contained in this ArkTS Float32Array.
     *
     * @param { number } searchElement - The element to search for.
     * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
     * @returns { boolean } Check result. The value **true** is returned if the element exists; otherwise, **false** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * Obtains the index of the last occurrence of the specified value in this ArkTS Float32Array.
     *
     * @param { number } searchElement - Value to search for.
     * @param { number } fromIndex - Index from which the search starts. The default value is **0**. If the index is
     *     greater than or equal to the length of the ArkTS Float32Array, **-1** is returned. If a negative number is
     *     passed in, the search starts from the end of the ArkTS Float32Array.
     * @returns { number } Index of the last occurrence of the value. If the value is not found, **-1** is returned.
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * Reversely traverses this ArkTS Float32Array, applies a reduce function for each element in the array, receives an
     * initial value as the parameter called by the reduce function for the first time, and returns the final reduction
     * result.
     *
     * @param { TypedArrayReduceCallback<U, number, Float32Array> } callbackFn - A function that is called
     *     for each element in the Float32Array.
     * @param { U } initialValue - A value to use as the first argument to the first call of the callback.
     *     <br>If no initial value is provided, the last element of the Float32Array will be used,
     *     <br>and the callback will start with the second-to-last element.
     * @returns { U } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Float32Array>, initialValue: U): U;
    /**
     * Reversely traverses this ArkTS Float32Array, applies a reduce function on each element in the array, and returns
     * the final reduction result.
     *
     * @param { TypedArrayReduceCallback<number, number, Float32Array> } callbackFn - A function that is called
     *     for each element in the Float32Array.
     * @returns { number } Final result obtained from the last call of the reduce function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Float32Array>): number;
    /**
     * Converts an ArkTS Float32Array into a string.
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * Generates a string of digits that matches the cultural conventions of the current system locale. Each element
     * converts its digits to a string via its **toLocaleString** API, and these strings are then joined in sequence
     * with commas (,).
     *
     * @returns { string } A string that contains all elements of the array.
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * Creates an ArkTS Float32Array with a variable number of parameters.
     *
     * @param { number[] } items - Array of elements used to create the array. The number of elements can be zero, one,
     *     or more.
     * @returns { Float32Array } New ArkTS Float32Array instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Float32Array;
 }

  /**
   * A linear data structure that is implemented on arrays. A bit vector stores bit values and provides bit-level
   * storage and processing.
   *
   * > **NOTE**
   * >
   * > - This module can be imported only to ArkTS files (with the file name extension .ets).
   * > **Decorator**: \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Sendable
  class BitVector {
    /**
     * Constructor used to create a bit vector.
     *
     * @param { number } length - Length of the bit vector.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    constructor(length: number);
    /**
     * Number of elements in a bit vector.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    readonly length: number;
    /**
     * Adds an element at the end of this bit vector.
     *
     * @param { number } element - Element to add. The value **0** indicates bit value 0, and other values indicate bit
     *     value 1.
     * @returns { boolean } Operation result. The value **true** is returned if the element is added; otherwise,
     *     **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The push method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    push(element: number): boolean;
    /**
     * Removes the last element from this bit vector.
     *
     * @returns { number } Element (bit value) removed.
     * @throws { BusinessError } 10200011 - The pop method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    pop(): number;
    /**
     * Checks whether a bit value is included in a given range of this bit vector.
     *
     * @param { number } element - Bit value. The value **0** indicates bit value 0, and other values indicate bit value
     *     1.
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (inclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @returns { boolean } Check result. The value **true** is returned if the bit value exists; otherwise, **false**
     *     is returned.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The has method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    has(element: number, fromIndex: number, toIndex: number): boolean;
    /**
     * Sets elements in a given range in this bit vector to a bit value.
     *
     * @param { number } element - Bit value to set. The value **0** indicates bit value 0, and other values indicate
     *     bit value 1.
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The setBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    setBitsByRange(element: number, fromIndex: number, toIndex: number): void;
    /**
     * Sets all elements in this bit vector to a bit value.
     *
     * @param { number } element - Bit value to set. The value **0** indicates bit value 0, and other values indicate
     *     bit value 1.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The setAllBits method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    setAllBits(element: number): void;
    /**
     * Obtains bit values within a given range of this bit vector.
     *
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @returns { BitVector } Bit vector containing the bit values obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getBitsByRange(fromIndex: number, toIndex: number): BitVector;
    /**
     * Resizes this bit vector.
     * If **size** is greater than the length of the existing bit vector, the bit vector is extended, and elements of
     * the extra part are set to 0.
     * If **size** is less than or equal to the length of the existing bit vector, the bit vector is shrunk according to
     * the size.
     *
     * @param { number } size - New length.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200011 - The resize method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    resize(size: number): void;
    /**
     * Counts the number of bit values in a given range of this bit vector.
     *
     * @param { number } element - Bit value. The value **0** indicates bit value 0, and other values indicate bit value
     *     1.
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @returns { number } Number of bit values.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitCountByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getBitCountByRange(element: number, fromIndex: number, toIndex: number): number;
    /**
     * Returns the index of the first occurrence of a bit value in this bit vector. If the bit value is not found,
     * **-1** is returned.
     *
     * @param { number } element - Bit value. The value **0** indicates bit value 0, and other values indicate bit value
     *     1.
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @returns { number } Index of the first occurrence of the bit value. If the bit value is not found, **-1** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getIndexOf(element: number, fromIndex: number, toIndex: number): number;
    /**
     * Returns the index of the last occurrence of a bit value in this bit vector. If the bit value is not found, **-1**
     * is returned.
     *
     * @param { number } element - Bit value. The value **0** indicates bit value 0, and other values indicate bit value
     *     1.
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @returns { number } Index of the last occurrence of the bit value. If the bit value is not found, **-1** is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getLastIndexOf(element: number, fromIndex: number, toIndex: number): number;
    /**
     * Flips the bit value (from 0 to 1 or from 1 to 0) at a given index in this bit vector.
     *
     * @param { number } index - Index. If **index** is less than **0** or greater than or equal to **length**, an error
     *     is reported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @throws { BusinessError } 10200011 - The flipBitByIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    flipBitByIndex(index: number): void;
    /**
     * Flips the bit values (from 0 to 1 or from 1 to 0) in a given range in this bit vector.
     *
     * @param { number } fromIndex - Start index of the range (inclusive). If **fromIndex** is less than **0** or
     *     greater than or equal to **toIndex**, an error is thrown.
     * @param { number } toIndex - End index of the range (exclusive). If **toIndex** is less than **0** or greater than
     *     or equal to **length**, an error is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The flipBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    flipBitsByRange(fromIndex: number, toIndex: number): void;
    /**
     * Returns an iterator that iterates over bit vector.
     *
     * @returns { IterableIterator<number> } A new iterable iterator object.
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Returns an iterator object that contains the value of each element in this bit vector.
     *
     * @returns { IterableIterator<number> } Bit vector iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    values(): IterableIterator<number>;
    /**
     * Returns the item at that index.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    [index: number]: number;
  }
}

export default collections;