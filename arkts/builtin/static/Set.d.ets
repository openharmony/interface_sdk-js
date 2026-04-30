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
 * Set implementation.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Set<K> implements ReadonlySet<K> {
    /**
     * Creates a new Set instance with the specified number of buckets.
     *
     * @param { int } bucketsCount - The number of buckets for the internal map.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(bucketsCount: int);

    /**
     * Creates a new Set instance from another Set.
     *
     * @param { Set<K> } set - Another Set instance used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(set: Set<K>);

    /**
     * Creates a new Set instance from an array.
     *
     * @param { K[] } values - The array used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(values: K[]);

    /**
     * Creates a new Set instance from an iterable object or FixedArray.
     *
     * @param { Iterable<K> | FixedArray<K> | null } [elements] - The iterable object, FixedArray,
     *     or null used for initialization.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(elements?: Iterable<K> | FixedArray<K> | null);

    /**
     * Gets the number of unique elements in the Set.
     * 
     * @returns { int } - The number of unique elements in the Set.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    get size(): int;

    /**
     * Returns the default iterator of the Set, which is the values() iterator.
     *
     * @returns { IterableIterator<K> } - The default iterator of the Set.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_iterator(): IterableIterator<K>;
}
