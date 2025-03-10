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
 * @arkts >=1.2
 */

/**
 * LightWeightSet stores a set of values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class LightWeightSet<T> {
  /**
   * A constructor used to create a LightWeightSet object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the LightWeightSet.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param { T } value - value value Added element
   * @returns { boolean } true if the value was added, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(value: T): boolean;

  /**
   * Adds all the objects in a specified LightWeightSet container to the current LightWeightSet container
   *
   * @param { LightWeightSet<T> } set - set set the Set object to provide the added element
   * @returns { boolean } true if all values were added, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  addAll(set: LightWeightSet<T>): boolean;

  /**
   * Returns whether this set has all the object in a specified set
   *
   * @param { LightWeightSet<T> } set - set set the Set object to compare
   * @returns { boolean } true if all values are present, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasAll(set: LightWeightSet<T>): boolean;

  /**
   * Checks whether an LightWeightSet container has a specified key
   *
   * @param { T } key - key key need to determine whether to include the key
   * @returns { boolean } true if all values are present, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(key: T): boolean;

  /**
   * Ensures that the capacity of an LightWeightSet container is greater than or equal to a specified value,
   * and that the container has all the original objects after capacity expansion
   *
   * @param { number } minimumCapacity Minimum capacity to be reserved
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  increaseCapacityTo(minimumCapacity: number): void;

  /**
   * Obtains the index of s key of a specified Object type in an LightWeightSet container
   *
   * @param { T } key - key key Looking for goals
   * @returns { number } the index of the value, or a negative value that indicates where the key should be inserted
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOf(key: T): number;

  /**
   * Deletes an object of a specified Object type from an LightWeightSet container
   *
   * @param { T } key - key key Target to be deleted
   * @returns { T | undefined } the removed value if it was present, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(key: T): T | undefined;

  /**
   * Deletes an object at the location identified by index from an LightWeightSet container
   *
   * @param { number } index - index index Target subscript for search
   * @returns { boolean } true if the value was removed, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeAt(index: number): boolean;

  /**
   * Removes all of the mapping from this map
   * The map will be empty after this call returns
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackFn: (value: T, key: T, set: LightWeightSet<T>) => void): void;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> } an iterator for the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<T>;

  /**
   * Obtains a string that contains all the keys and values in an LightWeightSet container
   *
   * @returns { String } a string representation of the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  toString(): String;

  /**
   * Obtains an Array that contains all the objects of an LightWeightSet container.
   *
   * @returns { Array<T> } an array containing all values in the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  toArray(): Array<T>;

  /**
   * Obtains the object at the location  identified by index in an LightWeightSet container
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T | undefined } the value at the specified index, or undefined if the index out of range
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getValueAt(index: number): T | undefined;

  /**
   * Returns a ES6 iterator of the values contained in this Set
   *
   * @returns { IterableIterator<T> } an iterable of the values in the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  values(): IterableIterator<T>;

  /**
   * Returns a Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> } an iterable of [v,v] pairs for every value `v` in the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * Returns whether the set object contains elements
   *
   * @returns { boolean } true if the LightWeightSet is empty, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;
}

export default LightWeightSet;
