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
 * @arkts >= 1.2
 */

/**
 * LightWeightMap stores key-value (KV) pairs. Each key must be unique and have only one value.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class LightWeightMap<K, V> {
  /**
   * A constructor used to create a LightWeightMap object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the LightWeightMap.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Returns whether this map has all the object in a specified map
   *
   * @param { LightWeightMap<K, V> } map - map map the Map object to compare
   * @returns { boolean } true if all entries are present, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasAll(map: LightWeightMap<K, V>): boolean;

  /**
   * Returns whether a key is contained in this map
   *
   * @param { K } key - key key need to determine whether to include the key
   * @returns { boolean } true if the key is present, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasKey(key: K): boolean;

  /**
   * Returns whether a value is contained in this map
   *
   * @param { V } value - value value need to determine whether to include the value
   * @returns { boolean } true if the value is present, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasValue(value: V): boolean;

  /**
   * Ensures that the capacity of an LightWeightMap container is greater than or equal to a specified value,
   * and that the container has all the original objects after capacity expansion
   *
   * @param { number } minimumCapacity - minimumCapacity minimumCapacity Minimum capacity to be reserved
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  increaseCapacityTo(minimumCapacity: number): void;

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
   *
   * @returns { IterableIterator<[K, V]> } an array of Entries
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns the value to which the specified key is mapped, or undefined if this map contains no mapping for the key
   *
   * @param { K } key - key key the index in LightWeightMap
   * @returns { V | undefined } value if associated with key presents, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get(key: K): V | undefined;

  /**
   * Obtains the index of the key equal to a specified key in an LightWeightMap container
   *
   * @param { K } key - key key Looking for goals
   * @returns { number } the index of the key, or -1 if the key is not found
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOfKey(key: K): number;

  /**
   * Obtains the index of the value equal to a specified value in an LightWeightMap container
   *
   * @param { V } value - value value Looking for goals
   * @returns { number } the index of the value, or -1 if the value is not found
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOfValue(value: V): number;

  /**
   * Returns whether the Map object contains elements
   *
   * @returns { boolean } true if the LightWeightMap is empty, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Obtains the key at the location identified by index in an LightWeightMap container
   *
   * @param { number } index - index index Target subscript for search
   * @returns { K } the key at the specified index
   * @throws { BusinessError } 10200001 - The value of \"index\" is out of range. It must be >= 0 && <= ${length - 1}. Received value is: ${index}.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getKeyAt(index: number): K;

  /**
   * Obtains a ES6 iterator that contains all the keys of an LightWeightMap container
   *
   * @returns { IterableIterator<K> } ValueIterator with hash map keys
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  keys(): IterableIterator<K>;

  /**
   * Adds all element groups in one map to another map
   *
   * @param { LightWeightMap<K, V> } map - map map the Map object to add members
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setAll(map: LightWeightMap<K, V>): void;

  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - key key Added or updated targets
   * @param { V } value - value  Added or updated value
   * @returns { Object } the LightWeightMap object
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  set(key: K, value: V): Object;

  /**
   * Remove the mapping for this key from this map if present
   *
   * @param { K } key - key key Target to be deleted
   * @returns { V | undefined } the value associated with the key if it was removed, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(key: K): V | undefined;

  /**
   * Deletes a key-value pair at the location identified by index from an LightWeightMap container
   *
   * @param { number } index - index index Target subscript for search
   * @returns { boolean } true if the entry was removed, false otherwise
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
   * Sets the value identified by index in an LightWeightMap container to a specified value
   *
   * @param { number } index - index index Target subscript for search
   * @param { V } newValue - newValue value Updated the target mapped value
   * @returns { boolean } true if the value was set
   * @throws { BusinessError } 10200001 - The value of \"index\" is out of range. It must be >= 0 && <= ${length - 1}. Received value is: ${index}.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setValueAt(index: number, newValue: V): boolean;

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
  forEach(callbackFn: (value: V, key: K, map: LightWeightMap<K, V>) => void): void;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> } an iterator for the LightWeightMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<[K, V]>;

  /**
   * Obtains a string that contains all the keys and values in an LightWeightMap container
   *
   * @returns { String } a string representation of the LightWeightMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  toString(): String;

  /**
   * Obtains the value identified by index in an LightWeightMap container
   *
   * @param { number } index - index index Target subscript for search
   * @returns { V } the value at the specified index
   * @throws { BusinessError } 10200001 - The value of \"index\" is out of range. It must be >= 0 && <= ${length - 1}. Received value is: ${index}.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getValueAt(index: number): V;

  /**
   * Returns an iterator of the values contained in this map
   *
   * @returns { IterableIterator<V> } ValueIterator with hash map values
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  values(): IterableIterator<V>;
}
export default LightWeightMap;
