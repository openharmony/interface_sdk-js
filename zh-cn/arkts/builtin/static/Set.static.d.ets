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
 * ReadonlySet的实现。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlySet<T> extends Iterable<T> {
    /**
     * 检查某个值是否在该Set中。
     *
     * @param { T } value - 待在该Set中查找的值。
     * @returns { boolean } 如果该值在Set中则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    has(value: T): boolean;

    /**
     * 返回该Set中不重复元素的个数。
     *
     * @returns { int } 该Set中不重复元素的个数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get size(): int;

    /**
     * 按插入顺序，对Set对象中的每个值调用一次给定的函数。
     *
     * @param { Function } callbackfn - 要应用的函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void): void;

    /**
     * 尽管名称如此，该方法返回Set中的元素。
     *
     * @returns { IterableIterator<T> } 该Set中值的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    keys(): IterableIterator<T>;

    /**
     * 返回Set中的元素。
     *
     * @returns { IterableIterator<T> } 该Set中值的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    values(): IterableIterator<T>;

    /**
     * 返回该Set中每个值对应的[v, v]键值对的可迭代对象。
     *
     * @returns { IterableIterator<[T, T]> } [v, v]键值对的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    entries(): IterableIterator<[T, T]>;
}

/**
 * SetIterator的实现。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface SetIterator<T> extends IterableIterator<T> {}

/**
 * Set的实现。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Set<K> implements ReadonlySet<K> {
    /**
     * 创建一个具有指定桶数量的Set实例。
     *
     * @param { int } bucketsCount - 内部map的桶数量。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(bucketsCount: int);

    /**
     * 根据另一个Set创建一个新的Set实例。
     *
     * @param { Set<K> } set - 用于初始化的另一个Set实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(set: Set<K>);

    /**
     * 根据数组创建一个新的Set实例。
     *
     * @param { K[] } values - 用于初始化的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(values: K[]);

    /**
     * 根据可迭代对象或FixedArray创建一个新的Set实例。
     *
     * @param { Iterable<K> | FixedArray<K> | null } [elements] - 用于初始化的可迭代对象、FixedArray
     *     或null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(elements?: Iterable<K> | FixedArray<K> | null);

    /**
     * 获取该Set中不重复元素的个数。
     * 
     * @returns { int } - 该Set中不重复元素的个数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get size(): int;

    /**
     * 返回该Set的默认迭代器，即values()迭代器。
     *
     * @returns { IterableIterator<K> } - 该Set的默认迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_iterator(): IterableIterator<K>;

    /**
     * 将该Set转换为字符串。
     *
     * @returns { string } 表示该Set的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toString(): string;

    /**
     * 向该Set中放入一个值。
     *
     * @param { K } val - 待放入该Set的值。
     * @returns { this } 添加该值后的Set。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    add(val: K): this;

    /**
     * 检查某个值是否在该Set中。
     *
     * @param { K } val - 待在该Set中查找的值。
     * @returns { boolean } 如果该值在Set中则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    has(val: K): boolean;

    /**
     * 从该Set中移除一个值。
     *
     * @param { K } val - 待移除的值。
     * @returns { boolean } 如果该值已被移除则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    delete(val: K): boolean;

    /**
     * 删除该Set中的所有元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    clear(): void;

    /**
     * 尽管名称如此，该方法返回Set中的元素。
     *
     * @returns { IterableIterator<K> } 该Set中值的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    keys(): IterableIterator<K>;

    /**
     * 返回Set中的元素。
     *
     * @returns { IterableIterator<K> } 该Set中值的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    values(): IterableIterator<K>;

    /**
     * 返回该Set中每个值对应的[v, v]键值对的可迭代对象。
     *
     * @returns { IterableIterator<[K, K]> } [v, v]键值对的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    entries(): IterableIterator<[K, K]>;

    /**
     * 按插入顺序，对Set对象中的每个值调用一次给定的函数。
     *
     * @param { Function } callbackfn - 要应用的函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    forEach(callbackfn: (k: K, v: K, set: Set<K>) => void): void;
}
