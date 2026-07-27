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
 * Represents a read-only Map
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlyMap<K, V> extends Iterable<[K, V]> {
  /**
   * Returns number of Entries with unique keys in the Map.
   *
   * @returns { int } number of Entries with unique keys in the Map.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get size(): int;

  /**
   * Returns a value associated with key if present.
   *
   * @param { K } key - the key to find in the Map/class.
   * @returns { V | undefined } value if associated with key is present.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K): V | undefined;

  /**
   * Checks if a key is in the Map.
   *
   * @param { K } key - the key to find in the Map.
   * @returns { boolean } true if the value is in the Map.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  has(key: K): boolean;

  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   *
   * @param { Function} callbackfn - to apply.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void): void;

  /**
   * Returns elements from the Map as an keys Iterator.
   *
   * @returns { IterableIterator<K> } ValueIterator with map keys.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<K>;

  /**
   * Returns elements from the Map as an values Iterator.
   *
   * @returns { IterableIterator<V> } ValueIterator with map values.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<V>;

  /**
   * Returns elements from the Map as an array of Entries.
   *
   * @returns { IterableIterator<[K, V]> } an array of Entries.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[K, V]>;

}

/**
 * A collection that stores key-value pairs where each key is unique
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Map<K, V> implements ReadonlyMap<K, V> {

  /**
   * Creates an empty Map with the specified initial capacity
   *
   * @param { int } initialCapacity - Map's initial capacity
   *     <br>The value should be an integer.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(initialCapacity: int);

  /**
   * Creates a Map from a FixedArray containing key-value pairs
   *
   * @param { FixedArray<[K, V]> } values - FixedArray containing key-value pairs
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(values: FixedArray<[K, V]>);

  /**
   * Creates a Map from an array containing key-value pairs
   *
   * @param { Array<[K, V]> } entries - array containing key-value pairs
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(entries: Array<[K, V]>);

  /**
   * Creates a new Map from another Map
   *
   * @param { Map<K, V> } map - source Map used to create the new Map
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(map: Map<K, V>);

  /**
   * Creates a Map from an iterable object or array-like object
   *
   * @param { Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null } [entries]
   *     - iterable object or array-like object containing key-value pairs
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(entries?: Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null);

  /**
   * Returns the number of key-value pairs in the Map
   *
   * @returns { int } number of key-value pairs in the Map
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  get size(): int;

  /**
   * Converts this Map to a String.
   *
   * @returns { string } A string representing the Map.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  toString(): string;

  /**
   * Puts a pair of key and value into the Map.
   *
   * @param { K } key - the key to put into the Map.
   * @param { V } val - the value to put into the Map.
   * @returns { this } this Map.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  set(key: K, val: V): this;

  /**
   * Checks if a key is in the Map.
   *
   * @param { K } key - the key to find in the Map.
   * @returns { boolean } true if the value is in the Map.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  has(key: K): boolean;

  /**
   * Removes an Entry with specified key from the Map.
   *
   * @param { K } key - the key to remove.
   * @returns { boolean } true if the entry was removed.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  delete(key: K): boolean;

  /**
   * Deletes all elements from the Map.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  clear(): void;

  /**
   * Returns a value associated with key if present.
   *
   * @param { K } key - the key to find in the Map.
   * @returns { V | undefined } value if associated with key is present.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K): V | undefined;

  /**
   * Returns a value associated with key if present, or a default value otherwise.
   *
   * @param { K } key - the key to find in the Map.
   * @param { V } def - a value to return if key is not in the Map.
   * @returns { V } value if key presents, def otherwise.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K, def: V): V;

  /**
   * Returns elements from the Map as an keys Iterator.
   *
   * @returns { IterableIterator<K> } iterator with map keys.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<K>;

  /**
   * Returns elements from the Map as an values Iterator.
   *
   * @returns { IterableIterator<V> } iterator with map values.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<V>;

  /**
   * Returns an iterator over the entries of the Map.
   *
   * @returns { IterableIterator<[K, V]> } iterator over entries.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  $_iterator(): IterableIterator<[K, V]>;

  /**
   * Returns elements from the Map as an array of Entries.
   *
   * @returns { IterableIterator<[K, V]> } an array of Entries.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   *
   * @param { Function } callbackfn - to apply.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(callbackfn: (v: V, k: K, map: Map<K, V>) => void): void;

  /**
   * Returns map keys as Set.
   *
   * @returns { Set<K> } A new Set instance containing all of the keys.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public keySet(): Set<K>;

}

/**
 * A Map subclass with keys restricted to numbers, strings, or enums
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Record<K extends Numeric | string | BaseEnum<Int> | BaseEnum<Long> | BaseEnum<string> | BaseEnum<Float> |
    BaseEnum<Double> | BaseEnum<Byte> | BaseEnum<Short>, V> extends Map<K, V> {
    /**
     * Gets a value from the Record by key
     *
     * @param { K } k - The key to get
     * @returns { V | undefined } The value associated with the key, or undefined if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(k : K) : V | undefined;

    /**
     * Sets a value in the Record by key
     *
     * @param { K } k - The key to set
     * @param { V } v - The value to set
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_set(k: K, v: V) : void;
}
