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
 * TreeMap stores key-value (KV) pairs. Each key must be unique and have only one value.
 * TreeMap is implemented using a red-black tree, which is a binary search tree where keys 
 * are stored in sorted order for efficient insertion and removal.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class TreeMap<K, V> {
  /**
   * A constructor used to create a TreeMap object.
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions, return number type.
   * If it returns secondValue minus firstValue, the TreeMap will be in ascending order.
   * If it returns firstValue minus secondValue, the TreeMap will be in descending order.
   * firstValue (required) previous element.
   * secondValue (required) next element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(comparator?: (firstValue: K, secondValue: K) => number);

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
   * @returns { boolean }  true if the TreeMap is empty, false otherwise
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
   * @returns { boolean } true if the key is in the TreeMap, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasKey(key: K): boolean;

  /**
   * Returns whether a value is contained in this map
   *
   * @param { V } value - value value value need to determine whether to include the value
   * @returns { boolean } true if the value is in the TreeMap, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  hasValue(value: V): boolean;

  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - key key the index in TreeMap
   * @returns { V | undefined } value if associated with key presents, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get(key: K): V | undefined;

  /**
   * Obtains the first sorted key in the treemap.
   * Or returns undefined if tree map is empty
   *
   * @returns { K | undefined } the key of the first element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirstKey(): K | undefined;

  /**
   * Obtains the last sorted key in the treemap.
   * Or returns undefined if tree map is empty
   *
   * @returns { K | undefined } the key of the last element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLastKey(): K | undefined;

  /**
   * Adds all element groups in one map to another map
   *
   * @param { TreeMap<K, V> } map - map map the Map object to add members
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setAll(map: TreeMap<K, V>): void;

  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - key key Added or updated targets
   * @param { V } value - value value Added or updated value
   * @returns { Object } the TreeMap object
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
   * @returns { V | undefined } the value of the removed element, undefined otherwise
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
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - key key Objective of comparison
   * @returns { K | undefined } the lower key of the given key's element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLowerKey(key: K): K | undefined;

  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - key key Objective of comparison
   * @returns { K | undefined } the higher key of the given key's element if exists, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getHigherKey(key: K): K | undefined;

  /**
   * Returns a new Iterator object that contains the keys contained in this map
   *
   * @returns { IterableIterator<K> } an Iterator of keys
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  keys(): IterableIterator<K>;

  /**
   * Returns a new Iterator object that contains the values contained in this map
   *
   * @returns { IterableIterator<V> } an Iterator of values
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
   * @returns { boolean } true if the value is replaced successfully, false otherwise
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
  forEach(callbackFn: (value: V, key: K, map: TreeMap<K, V>) => void): void;

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
   *
   * @returns { IterableIterator<[K, V]> } an Iterator of [key, value]s
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> } an iterator for the TreeMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<[K, V]>;
}

export default TreeMap;
