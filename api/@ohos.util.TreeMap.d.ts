/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkTS
 */

/**
 * TreeMap stores key-value (KV) pairs. Each key must be unique and have only one value.
 * TreeMap is implemented using a red-black tree, which is a binary search tree where keys
 * are stored in sorted order for efficient insertion and removal.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class TreeMap<K, V> {
  /**
   * A constructor used to create a TreeMap object.
   *
   * @param { function } [comparator] - comparator
   *     comparator (Optional) User-defined comparison functions.
   *     firstValue (required) previous element.
   *     secondValue (required) next element.
   * @throws { BusinessError } 10200012 - The TreeMap's constructor cannot be directly invoked.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor(comparator?: (firstValue: K, secondValue: K) => boolean);

  /**
   * A constructor used to create a TreeMap object.
   *
   * @param { TreeMapComparator<K> } [comparator] - comparator
   *     comparator (Optional) User-defined comparison functions.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  constructor(comparator?: TreeMapComparator<K>);

  /**
   * Gets the element number of the TreeMap.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the TreeMap.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Returns whether the Map object contains elements
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * Returns whether a key is contained in this map
   *
   * @param { K } key - The key to check if it exists in the map
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * Returns whether a value is contained in this map
   *
   * @param { V } value - The value to check if it exists in the map
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - The key to look up in the map
   * @returns { V } value or undefined
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;
  /**
   * Obtains the first sorted key in the treemap.
   * Or returns undefined if tree map is empty
   *
   * @returns { K } value or undefined
   * @throws { BusinessError } 10200011 - The getFirstKey method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getFirstKey(): K;
  /**
   * Obtains the last sorted key in the treemap.
   * Or returns undefined if tree map is empty
   *
   * @returns { K } value or undefined
   * @throws { BusinessError } 10200011 - The getLastKey method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastKey(): K;

  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - The key to look up in the map
   * @returns { V | undefined } value if associated with key presents, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: K): V | undefined;

  /**
   * Adds all element groups in one map to another map
   *
   * @param { TreeMap<K, V> } map - map map the Map object to add members
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setAll(map: TreeMap<K, V>): void;
  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - The key to add or update
   * @param { V } value - The value to add or update
   * @returns { Object } the map object after set
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * Remove a specified element from a Map object
   *
   * @param { K } key - The key to remove from the map
   * @returns { V } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: K): V;

  /**
   * Remove a specified element from a Map object
   *
   * @param { K } key - The key to remove from the map
   * @returns { V | undefined } the value of the removed element, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: K): V | undefined;

  /**
   * Clear all element groups in the map
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clear(): void;
  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - The key to compare
   * @returns { K } key or undefined
   * @throws { BusinessError } 10200011 - The getLowerKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getLowerKey(key: K): K;
  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - The key to compare
   * @returns { K } key or undefined
   * @throws { BusinessError } 10200011 - The getHigherKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getHigherKey(key: K): K;

  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - The key to compare
   * @returns { K | undefined } key or undefined
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200011 - The getLowerKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getLowerKey(key: K): K | undefined;

  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { K } key - The key to compare
   * @returns { K | undefined } key or undefined
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200011 - The getHigherKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getHigherKey(key: K): K | undefined;

  /**
   * Returns a new Iterator object that contains the keys contained in this map
   *
   * @returns { IterableIterator<K> }
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  keys(): IterableIterator<K>;
  /**
   * Returns a new Iterator object that contains the values contained in this map
   *
   * @returns { IterableIterator<V> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<V>;
  /**
   * Replace the old value by new value corresponding to the specified key
   *
   * @param { K } key - The key to look up in the map
   * @param { V } newValue - The new value to set for the key
   * @returns { boolean } the boolean type(Is there a target pointed to by the key)
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  replace(key: K, newValue: V): boolean;
  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys
   *
   * @param { function } callbackFn - callbackFn
   *     callbackFn (required) A function that accepts up to three arguments.
   *     The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   *     thisArg (Optional) The value to be used as this value for when callbackFn is called.
   *     If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: TreeMap<K, V>) => void, thisArg?: Object): void;

  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys
   *
   * @param { TreeMapForEachCb<K, V> } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: TreeMapForEachCb<K, V>): void;

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion 
   * order
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> } an iterator for the TreeMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;

}

/**
 * The type of TreeMap callback function.
 *
 * @param { V } value - The value of current element
 * @param { K } key - The key of current element
 * @param { TreeMap<K, V> } map - The TreeMap instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeMapForEachCb<K, V> = (value: V, key: K, map: TreeMap<K, V>) => void

/**
 * The type of TreeMap comparator.
 *
 * @param { K } firstValue - The first value compared
 * @param { K } secondValue - The second value compared
 * @returns { double } - Comparison results
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeMapComparator<K> = (firstValue: K, secondValue: K) => double;

export default TreeMap;
