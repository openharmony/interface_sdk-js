/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

'use static';
/**
 * @file
 * @kit ArkTS
 * @arkts 1.2
 */

/**
 * TreeSet is implemented based on TreeMap. In TreeSet, only value objects are processed. 
 * TreeSet can be used to store values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class TreeSet<T> {
  /**
   * A constructor used to create a TreeSet object.
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions, return number type.
   * If it returns secondValue minus firstValue, the TreeSet will be in ascending order.
   * If it returns firstValue minus secondValue, the TreeSet will be in descending order.
   * firstValue (required) previous element.
   * secondValue (required) next element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(comparator?: (firstValue: T, secondValue: T) => number);

  /**
   * Gets the element number of the TreeSet.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Returns whether the Set object contains elements
   *
   * @returns { boolean } true if the TreeSet is empty, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Returns whether the Set object contain s the elements
   *
   * @param { T } value - value value need to determine whether to include the element
   * @returns { boolean } true if the value is in the TreeSet, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(value: T): boolean;

  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param { T } value - value value Added element
   * @returns { boolean } true if the element is successfully added into the TreeSet, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(value: T): boolean;

  /**
   * Remove a specified element from a Set object
   *
   * @param { T } value - value value Target to be deleted
   * @returns { boolean } true if the element is successfully removed from the TreeSet, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(value: T): boolean;

  /**
   * Clears all element groups in a set
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Gets the first elements in a set
   *
   * @returns { T | undefined } the value of the first element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirstValue(): T | undefined;

  /**
   * Gets the last elements in a set
   *
   * @returns { T | undefined } the value of the last element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLastValue(): T | undefined;

  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T | undefined } the lower value of the given key's element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLowerValue(key: T): T | undefined;

  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T | undefined } the higher value of the given key's element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getHigherValue(key: T): T | undefined;

  /**
   * Return and delete the first element, returns undefined if tree set is empty
   *
   * @returns { T | undefined} the value of the first element in the TreeSet if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  popFirst(): T | undefined;

  /**
   * Return and delete the last element, returns undefined if tree set is empty
   *
   * @returns { T | undefined } the value of the last element in the TreeSet if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  popLast(): T | undefined;

  /**
   * Executes a provided function once for each value in the Set object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackFn: (value: T, key: T, set: TreeSet<T>) => void): void;

  /**
   * Returns a new Iterator object that contains the values contained in this set
   *
   * @returns { IterableIterator<T> } an Iterator of values
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  values(): IterableIterator<T>;

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> } an Iterator of [value, value]s
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> } an iterator for the TreeSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<T>;
}

export default TreeSet;
