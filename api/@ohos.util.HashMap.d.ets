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
 * HashMap is a map implemented based on the array, linked list, and red-black tree. It provides efficient data query, insertion,
 * and removal. The elements in a HashMap instance are mappings of key-value pairs. Each key must be unique and have only one value.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class HashMap<K, V> {
  /**
   * A constructor used to create a HashMap object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the hashmap.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Returns whether the Map object contains elements
   *
   * @returns { boolean } true if the HashMap is empty, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Returns whether a key is contained in this map
   *
   * @param { K } key - key key need to determine whether to include the key
   * @returns { boolean } true if the key exists, false otherwise
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
   * @returns { boolean } true if the value exists, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasValue(value: V): boolean;

  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - key key the index in HashMap
   * @returns { V | undefined } value if associated with key presents, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get(key: K): V | undefined;

  /**
   * Adds all element groups in one map to another map
   *
   * @param { HashMap<K, V> } map - map map the Map object to add members
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setAll(map: HashMap<K, V>): void;

  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - key key Added or updated targets
   * @param { V } value - value value Added or updated value
   * @returns { Object } the HashMap object
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  set(key: K, value: V): Object;

  /**
   * Remove a specified element from a Map object
   *
   * @param { K } key - key key Target to be deleted
   * @returns { V | undefined } Tthe value associated with the key if it was removed, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(key: K): V | undefined;

  /**
   * Clear all element groups in the map
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Returns a new Iterator object that contains the keys contained in this map
   *
   * @returns { IterableIterator<K> } ValueIterator with hash map keys
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  keys(): IterableIterator<K>;

  /**
   * Returns a new Iterator object that contains the values contained in this map
   *
   * @returns { IterableIterator<V> } ValueIterator with hash map values
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  values(): IterableIterator<V>;

  /**
   * Replace the old value by new value corresponding to the specified key
   *
   * @param { K } key - key key Updated targets
   * @param { V } newValue - newValue newValue Updated the target mapped value
   * @returns { boolean } true if the value was replaced, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  replace(key: K, newValue: V): boolean;

  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackFn: (value: V, key: K, map: HashMap<K, V>) => void): void;

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
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> } an iterator for the HashMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<[K, V]>;
}
export default HashMap;
