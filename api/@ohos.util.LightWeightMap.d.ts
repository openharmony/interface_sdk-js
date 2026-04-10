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
 * LightWeightMap stores key-value (KV) pairs. Each key must be unique and have only one value.
 * LightWeightMap is based on generics and uses a lightweight structure. Its default initial capacity is 8, and it has 
 * the capacity doubled in each expansion.
 * The keys in such a set are searched using hash values, which are stored in an array.
 * Compared with [HashMap]{@link @ohos.util.HashMap}, which can also store KV pairs, LightWeightMap occupies less 
 * memory.
 * **Recommended use case**: Use LightWeightMap when you need to store and access KV pairs.
 * This topic uses the following to identify the use of generics:
 * 
 * - K: Key<br>
 * - V: Value
 * 
 * > **NOTE**
 * >
 * > - Container classes, implemented in static languages, have restrictions on storage locations and properties, and do
 * > not support custom properties or methods.
 *
 * @file
 * @kit ArkTS
 */

/**
 * LightWeightMap stores key-value (KV) pairs. Each key must be unique and have only one value.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightMap<K, V> {
  /**
   * A constructor used to create a **LightWeightMap** instance.
   *
   * @throws { BusinessError } 10200012 - The LightWeightMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a LightWeightMap.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * Gets the element number of the LightWeightMap.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Checks whether this LightWeightMap contains all elements of the specified **LightWeightMap** instance.
   *
   * @param { LightWeightMap<K, V> } map - **LightWeightMap** instance to be used for comparison.
   * @returns { boolean } Check result. The value **true** is returned if all the elements in the specified
   *     LightWeightMap are contained; otherwise, **false** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(map: LightWeightMap<K, V>): boolean;
  /**
   * Checks whether this LightWeightMap has the specified key.
   *
   * @param { K } key - Target key.
   * @returns { boolean } Check result. The value **true** is returned if the specified key is contained; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * Checks whether this LightWeightMap has the specified value.
   *
   * @param { V } value - Target value.
   * @returns { boolean } Operation result. The value **true** is returned if the specified value is contained;
   *     otherwise, **false** is returned.
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * Increases the capacity of this LightWeightMap. If the passed-in capacity is greater than or equal to the number of
   * elements in this LightWeightMap, the capacity is changed to the new capacity. If the passed-in capacity is less
   * than the number of elements in this LightWeightMap, the capacity is not changed.
   *
   * @param { int } minimumCapacity - Minimum number of elements to accommodate in this LightWeightMap.
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(minimumCapacity: int): void;
  /**
   * Returns an iterator that contains all the elements in this LightWeightMap.
   *
   * @returns { IterableIterator<[K, V]> } Iterator obtained.
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * Obtains the value of the specified key in this LightWeightMap.
   *
   * @param { K } key - Target key.
   * @returns { V } Value of the key.
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;

  /**
   * Returns the value to which the specified key is mapped, or undefined if this map contains no mapping for the key
   *
   * @param { K } key - key key the index in LightWeightMap
   * @returns { V | undefined } value if associated with key presents, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: K): V | undefined;

  /**
   * Obtains the index of the first occurrence of an element with the specified key in this LightWeightMap.
   *
   * @param { K } key - Key of the element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfKey(key: K): int;
  /**
   * Obtains the index of the first occurrence of an element with the specified value in this LightWeightMap.
   *
   * @param { V } value - Key of the element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: V): int;
  /**
   * Checks whether this LightWeightMap is empty (contains no element).
   *
   * @returns { boolean } Check result. The value **true** is returned if the LightWeightMap is empty; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * Obtains the key of an element at the specified position in this LightWeightMap.
   *
   * @param { number } index - Position index of the element. The value must be less than or equal to int32_max, that is
   *     , 2147483647.
   * @returns { K } Key obtained. If the key is not found, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getKeyAt(index: number): K;
  /**
   * Obtains the key at the location identified by index in an LightWeightMap container
   *
   * @param { int } index - index index Target subscript for search
   *     The value should be an integer.
   * @returns { K | undefined } the key of key-value pairs or undefined
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getKeyAt(index: int): K | undefined;

  /**
   * Returns an iterator that contains all the keys in this LightWeightMap.
   *
   * @returns { IterableIterator<K> } Iterator obtained.
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  keys(): IterableIterator<K>;
  /**
   * Adds all elements in a LightWeightMap to this LightWeightMap.
   *
   * @param { LightWeightMap<K, V> } map - LightWeightMap whose elements are to be added to the current LightWeightMap.
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
  setAll(map: LightWeightMap<K, V>): void;
  /**
   * Adds or updates an element in this LightWeightMap.
   *
   * @param { K } key - Key of the target element.
   * @param { V } value - Value of the target element.
   * @returns { Object } LightWeightMap that contains the new element.
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * Removes an element with the specified key from this LightWeightMap.
   *
   * @param { K } key - Target key.
   * @returns { V } Value of the element removed.
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: K): V;

  /**
   * Remove the mapping for this key from this map if present
   *
   * @param { K } key - key key Target to be deleted
   * @returns { V | undefined } the value associated with the key if it was removed, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: K): V | undefined;

  /**
   * Removes an element at the specified position from this LightWeightMap.
   *
   * @param { int } index - Position index of the element. The value must be less than or equal to int32_max, that is, 2
   *     147483647.
   * @returns { boolean } Operation result. The value **true** is returned if the element is removed; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeAt(index: int): boolean;
  /**
   * Clears this LightWeightMap and sets its length to **0**.
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
   * Sets a value for an element at the specified position in this LightWeightMap.
   *
   * @param { int } index - Position index of the element. The value must be less than or equal to int32_max, that is, 2
   *     147483647.
   * @param { V } newValue - Value of the target element to set.
   * @returns { boolean } Operation result. The value **true** is returned if the value is set successfully; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
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
  setValueAt(index: int, newValue: V): boolean;
  /**
   * Uses a callback to traverse the elements in this LightWeightMap and obtain their indexes.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the LightWeightMap.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: LightWeightMap<K, V>) => void, thisArg?: Object): void;

  /**
   * Iterates over all key-value pairs in the LightWeightMap and executes a callback function for each entry.
   *
   * @param { LightWeightMapCbFn<K, V> } callbackFn - A callback function that will be executed for each key-value pair.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightMapCbFn<K, V>): void;

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
   * @returns { IterableIterator<[K, V]> } an iterator for the LightWeightMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;

  /**
   * Concatenates the elements in this LightWeightMap into a string and returns the string.
   *
   * @returns { String } String obtained.
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * Obtains the value of an element at the specified position in this LightWeightMap.
   *
   * @param { number } index - Position index of the element. The value must be less than or equal to int32_max, that is
   *     , 2147483647.
   * @returns { V } Value obtained.
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): V;
  /**
   * Obtains the value identified by index in an LightWeightMap container
   *
   * @param { int } index - index index Target subscript for search
   *     The value should be an integer.
   * @returns { V | undefined } the value of key-value pairs or undefined
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): V | undefined;

  /**
   * Returns an iterator that contains all the values in this LightWeightMap.
   *
   * @returns { IterableIterator<V> } Iterator obtained.
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<V>;
}

/**
 * The type of LightWeightMap callback function.
 *
 * @param { V } value - The value of the current entry
 * @param { K } key - The key of the current entry
 * @param { LightWeightMap<K, V> } map - The LightWeightMap instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightMapCbFn<K, V> = (value: V, key: K, map: LightWeightMap<K, V>) => void;

export default LightWeightMap;