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
 * A read-only array that provides methods for reading elements.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlyArray<out T> extends ConcatArray<T> {
  /**
   * Combines two or more arrays.
   *
   * @param { FixedArray<ConcatArray<T>> } items - Arrays to add.
   * @returns { Array<T> } New combined array.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  concat(...items: FixedArray<ConcatArray<T>>): Array<T>;

  /**
   * Returns a new iterator object that contains key-value pairs for each index in the array.
   *
   * @returns { IterableIterator<[int, T]> } New iterator object.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[int, T]>;

  /**
   * Tests whether all elements in the array pass the test implemented by the provided function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { boolean } True if all elements pass the test, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  every(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): boolean;

  /**
   * Creates a new array with all elements that pass the test implemented by the provided function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { Array<T> } New array with elements that pass the test.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  filter(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): Array<T>;

  /**
   * Returns the first element in the array that satisfies the provided testing function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { T | undefined } First element satisfying the test, or undefined if none found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  find(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): T | undefined;

  /**
   * Returns the last element in the array that satisfies the provided testing function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { T | undefined } Last element satisfying the test, or undefined if none found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findLast(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): T | undefined;

  /**
   * Returns the index of the first element in the array that satisfies the provided testing function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { int } Index of first element satisfying the test, or -1 if none found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findIndex(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): int;

  /**
   * Returns the index of the last element in the array that satisfies the provided testing function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { int } Index of last element satisfying the test, or -1 if none found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findLastIndex(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): int;

  /**
   * Executes a provided function once for each array element.
   *
   * @param { Function } action - Function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(action: (value: T, index: int, array: ReadonlyArray<T>) => void): void;

  /**
   * Joins all elements of an array into a string.
   *
   * @param { string } [separator] - Specifies a string to separate adjacent elements.
   * @returns { string } A string with all array elements joined.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  join(separator?: string): string;

  /**
   * Determines whether an array includes a certain value.
   *
   * @param { T } searchElement - The value to search for.
   * @param { int } [fromIndex] - The position in this array at which to begin searching.
   *     <br>The value should be an integer.
   * @returns { boolean } True if the value is found, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  includes(searchElement: T, fromIndex?: int): boolean;

  /**
   * Returns the first index at which a given element can be found in the array.
   *
   * @param { T } searchElement - The element to search for.
   * @param { int } [fromIndex] - The position in this array at which to begin searching.
   *     <br>The value should be an integer.
   * @returns { int } First index of the element, or -1 if not found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  indexOf(searchElement: T, fromIndex?: int): int;

  /**
   * Returns a new iterator object that contains the keys for each index in the array.
   *
   * @returns { IterableIterator<int> } New iterator object containing keys.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<int>;

  /**
   * Returns the last index at which a given element can be found in the array.
   *
   * @param { T } searchElement - The element to search for.
   * @returns { int } Last index of the element, or -1 if not found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  lastIndexOf(searchElement: T): int;

  /**
   * Returns the last index at which a given element can be found in the array.
   *
   * @param { T } searchElement - The element to search for.
   * @param { int } [fromIndex] - The position in this array at which to begin searching backward.
   *     <br>The value should be an integer.
   * @returns { int } Last index of the element, or -1 if not found.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  lastIndexOf(searchElement: T, fromIndex?: int): int;

  /**
   * Transforms each element of the array using a mapper function and returns a new array.
   *
   * @param { (value: T, index: int, array: ReadonlyArray<T>) => U } mapper - Function to transform each element.
   * @returns { Array<U> } New array with transformed elements.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  map<U>(mapper: (value: T, index: int, array: ReadonlyArray<T>) => U): Array<U>;

  /**
   * Applies a function against an accumulator to reduce the array to a single value.
   *
   * @param { Function } reducer - Function to execute on each element.
   * @returns { T } The value resulting from the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduce(reducer: (previousValue: T, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => T): T;

  /**
   * Applies a function against an accumulator to reduce the array to a single value.
   *
   * @param { Function } reducer - Function to execute on each element.
   * @param { U } initialValue - Initial value for the accumulator.
   * @returns { U } The value resulting from the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduce<U>(reducer: (previousValue: U, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => U,
      initialValue: U): U;

  /**
   * Applies a function against an accumulator to reduce the array from right to left to a single value.
   *
   * @param { Function } reducer - Function to execute on each element.
   * @returns { T } The value resulting from the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduceRight(reducer: (previousValue: T, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => T): T;

  /**
   * Applies a function against an accumulator to reduce the array from right to left to a single value.
   *
   * @param { Function } reducer - Function to execute on each element.
   * @param { U } initialValue - Initial value for the accumulator.
   * @returns { U } The value resulting from the reduction.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduceRight<U>(reducer: (previousValue: U, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => U,
      initialValue: U): U;

  /**
   * Returns a shallow copy of a portion of an array into a new array.
   *
   * @param { int } [start] - Start index (inclusive). Defaults to 0.
   *     <br>The value should be an integer.
   * @param { int } [end] - End index (exclusive). Defaults to array length.
   *     <br>The value should be an integer.
   * @returns { Array<T> } New array containing the extracted elements.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  slice(start?: int, end?: int): Array<T>;

  /**
   * Tests whether at least one element in the array passes the test implemented by the provided function.
   *
   * @param { Function } predicate - Function to test each element.
   * @returns { boolean } True if at least one element passes the test, false otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  some(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): boolean;

  /**
   * Returns a new iterator object that contains the values for each index in the array.
   *
   * @returns { IterableIterator<T> } New iterator object containing values.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<T>;
}
