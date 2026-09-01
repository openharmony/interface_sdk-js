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
 * 表示只读的Map。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlyMap<K, V> extends Iterable<[K, V]> {
  /**
   * 返回Map中具有唯一键的Entry的number。
   *
   * @returns { int } Map中具有唯一键的Entry的number。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get size(): int;

  /**
   * 返回指定键所关联的值（如果存在）。
   *
   * @param { K } key - 待在Map中查找的键。
   * @returns { V | undefined } 键存在时所关联的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K): V | undefined;

  /**
   * 判断指定的键是否存在于Map中。
   *
   * @param { K } key - 待在Map中查找的键。
   * @returns { boolean } 如果该键存在于Map中则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  has(key: K): boolean;

  /**
   * 按插入顺序对Map中的每个键值对执行一次指定的回调函数。
   *
   * @param { Function} callbackfn - 对每个键值对调用的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void): void;

  /**
   * 以键迭代器的形式返回Map中的元素。
   *
   * @returns { IterableIterator<K> } 包含所有键的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<K>;

  /**
   * 以值迭代器的形式返回Map中的元素。
   *
   * @returns { IterableIterator<V> } 包含所有值的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<V>;

  /**
   * 以Entry数组的形式返回Map中的元素。
   *
   * @returns { IterableIterator<[K, V]> } 由Entry组成的数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[K, V]>;

}

/**
 * 用于存储键值对的集合，其中每个键都是唯一的。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Map<K, V> implements ReadonlyMap<K, V> {

  /**
   * 使用指定的初始容量创建空Map。
   *
   * @param { int } initialCapacity - Map的初始容量。
   *     <br>取值约束：应为整数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(initialCapacity: int);

  /**
   * 根据包含键值对的FixedArray创建Map。
   *
   * @param { FixedArray<[K, V]> } values - 包含键值对的FixedArray。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(values: FixedArray<[K, V]>);

  /**
   * 根据包含键值对的数组创建Map。
   *
   * @param { Array<[K, V]> } entries - 包含键值对的数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(entries: Array<[K, V]>);

  /**
   * 根据另一个Map创建新的Map。
   *
   * @param { Map<K, V> } map - 用于创建新Map的源Map。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(map: Map<K, V>);

  /**
   * 根据可迭代对象或类数组对象创建Map。
   *
   * @param { Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null } [entries]
   *     - 包含键值对的可迭代对象或类数组对象。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  constructor(entries?: Iterable<[K, V]> | readonly ((readonly [K, V]) | null | undefined)[] | null);

  /**
   * 返回Map中键值对的number。
   *
   * @returns { int } Map中键值对的number。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  get size(): int;

  /**
   * 将当前Map转换为字符串。
   *
   * @returns { string } 表示该Map的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  toString(): string;

  /**
   * 将一对键和值存入Map。
   *
   * @param { K } key - 待存入Map的键。
   * @param { V } val - 待存入Map的值。
   * @returns { this } 当前Map。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  set(key: K, val: V): this;

  /**
   * 判断指定的键是否存在于Map中。
   *
   * @param { K } key - 待在Map中查找的键。
   * @returns { boolean } 如果该键存在于Map中则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  has(key: K): boolean;

  /**
   * 从Map中移除指定键对应的Entry。
   *
   * @param { K } key - 待移除的键。
   * @returns { boolean } 如果该Entry被移除则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  delete(key: K): boolean;

  /**
   * 删除Map中的所有元素。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  clear(): void;

  /**
   * 返回指定键所关联的值（如果存在）。
   *
   * @param { K } key - 待在Map中查找的键。
   * @returns { V | undefined } 键存在时所关联的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K): V | undefined;

  /**
   * 返回指定键所关联的值；如果键不存在，则返回默认值。
   *
   * @param { K } key - 待在Map中查找的键。
   * @param { V } def - 键不存在于Map中时返回的默认值。
   * @returns { V } 键存在时返回对应的值，否则返回默认值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  get(key: K, def: V): V;

  /**
   * 以键迭代器的形式返回Map中的元素。
   *
   * @returns { IterableIterator<K> } 包含所有键的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<K>;

  /**
   * 以值迭代器的形式返回Map中的元素。
   *
   * @returns { IterableIterator<V> } 包含所有值的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<V>;

  /**
   * 返回遍历Map中所有Entry的迭代器。
   *
   * @returns { IterableIterator<[K, V]> } 遍历所有Entry的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  $_iterator(): IterableIterator<[K, V]>;

  /**
   * 以Entry数组的形式返回Map中的元素。
   *
   * @returns { IterableIterator<[K, V]> } 由Entry组成的数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * 按插入顺序对Map中的每个键值对执行一次指定的回调函数。
   *
   * @param { Function } callbackfn - 对每个键值对调用的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(callbackfn: (v: V, k: K, map: Map<K, V>) => void): void;

  /**
   * 以Set的形式返回Map中的所有键。
   *
   * @returns { Set<K> } 包含所有键的新Set实例。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public keySet(): Set<K>;

}

/**
 * Map的子类，其键只能为数字、字符串或枚举。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Record<K extends Numeric | string | BaseEnum<Int> | BaseEnum<Long> | BaseEnum<string> | BaseEnum<Float> |
    BaseEnum<Double> | BaseEnum<Byte> | BaseEnum<Short>, V> extends Map<K, V> {
    /**
     * 根据键从Record中获取值。
     *
     * @param { K } k - 待获取的键。
     * @returns { V | undefined } 该键关联的值，未找到时返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(k : K) : V | undefined;

    /**
     * 根据键在Record中设置值。
     *
     * @param { K } k - 待设置的键。
     * @param { V } v - 待设置的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_set(k: K, v: V) : void;
}
