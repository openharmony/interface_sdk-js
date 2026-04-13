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
 * A collection that stores key-value pairs where each key is unique
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Map<K, V> implements ReadonlyMap<K, V> {

    /**
     * Creates an empty Map with the specified initial capacity
     *
     * @param { int } initialCapacity - Map's initial capacity
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(initialCapacity: int);

    /**
     * Creates a Map from a FixedArray containing key-value pairs
     *
     * @param { FixedArray<[K, V]> } values - FixedArray containing key-value pairs
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(values: FixedArray<[K, V]>);

    /**
     * Creates a Map from an array containing key-value pairs
     *
     * @param { Array<[K, V]> } entries - array containing key-value pairs
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(entries: Array<[K, V]>);

    /**
     * Creates a new Map from another Map
     *
     * @param { Map<K, V> } map - source Map used to create the new Map
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(map: Map<K, V>);

    /**
     * Creates a Map from an iterable object or array-like object
     *
     * @param { Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null } [entries] 
     *     - iterable object or array-like object containing key-value pairs
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(entries?: Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null);

    /**
     * Returns the number of key-value pairs in the Map
     *
     * @returns { int } number of key-value pairs in the Map
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    get size(): int;
}

/**
 * A Map subclass with keys restricted to numbers, strings, or enums
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Record<K extends Numeric | string | BaseEnum<Int> | BaseEnum<Long> | BaseEnum<string>, V> extends Map<K, V> {
    /**
     * Gets a value from the Record by key
     *
     * @param { K } k - The key to get
     * @returns { V | undefined } The value associated with the key, or undefined if not found
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_get(k : K) : V | undefined;

    /**
     * Sets a value in the Record by key
     *
     * @param { K } k - The key to set
     * @param { V } v - The value to set
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_set(k: K, v: V) : void;
}
