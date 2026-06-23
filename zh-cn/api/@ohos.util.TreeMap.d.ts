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
 * TreeMap可用于存储具有关联关系的key-value键值对集合，存储元素中key值唯一，每个key对应一个value。
 * TreeMap底层使用红黑树实现，可以利用二叉树特性快速查找键值对。key值有序存储，可以实现快速的插入和删除。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class TreeMap<K, V> {
  /**
   * TreeMap的构造函数，支持通过比较函数使元素按照自定义规则排序。
   *
   * @param { function } [comparator] - 比较函数。
   *     comparator（可选）用户自定义的比较函数。
   *     firstValue（必填）前一项元素。
   *     secondValue（必填）后一项元素。
   * @throws { BusinessError } 10200012 - The TreeMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor(comparator?: (firstValue: K, secondValue: K) => boolean);

  /**
   * TreeMap的构造函数，支持通过比较函数使元素按照自定义规则排序。
   *
   * @param { TreeMapComparator<K> } [comparator] - 比较函数。
   *     comparator（可选）用户自定义的比较函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  constructor(comparator?: TreeMapComparator<K>);

  /**
   * TreeMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取TreeMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 判断容器是否为空。
   *
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * 判断容器中是否包含指定key。
   *
   * @param { K } key - 指定key。
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * 判断容器中是否包含该指定value。
   *
   * @param { V } value - 指定value。
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * 获取指定key所对应的value，若为空则返回undefined。
   *
   * @param { K } key - 指定key。
   * @returns { V } 返回值或undefined。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;
  /**
   * 获取容器中排序第一的key，若为空则返回undefined。
   *
   * @returns { K } 返回值或undefined。
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
   * 获取容器中排序最后的key，若为空则返回undefined。
   *
   * @returns { K } 返回值或undefined。
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
   * 获取指定key所对应的value，若为空则返回undefined。
   *
   * @param { K } key - 指定key。
   * @returns { V | undefined } 如果存在与key关联的值则返回该值，否则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: K): V | undefined;

  /**
   * 将一个TreeMap中的所有元素组添加到另一个TreeMap中。
   *
   * @param { TreeMap<K, V> } map - 该map会添加到其调用setAll接口的map对象中。
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setAll(map: TreeMap<K, V>): void;
  /**
   * 向容器中添加或更新一组数据。
   *
   * @param { K } key - 添加成员数据的键名。
   * @param { V } value - 添加成员数据的值。
   * @returns { Object } 返回添加后的TreeMap。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * 删除指定key对应的元素。
   *
   * @param { K } key - 指定key。
   * @returns { V } 返回删除元素的值。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: K): V;

  /**
   * 删除指定key对应的元素。
   *
   * @param { K } key - 指定key。
   * @returns { V | undefined } 如果删除了元素则返回该元素的值，否则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: K): V | undefined;

  /**
   * 清除容器中的所有元素，并将length置为0。
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
   * 获取容器中小于对比key值的最大键，如果不存在小于对比key值的键值，则返回undefined。
   *
   * @param { K } key - 对比的key值。
   * @returns { K } 返回排序中key前一位的数据，为空时返回undefined。
   * @throws { BusinessError } 10200011 - The getLowerKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getLowerKey(key: K): K;
  /**
   * 获取容器中大于对比key值的最小键，如果不存在大于对比key值的键值，则返回undefined。
   *
   * @param { K } key - 对比的key值。
   * @returns { K } 返回排序中key后一位的数据，为空时返回undefined。
   * @throws { BusinessError } 10200011 - The getHigherKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getHigherKey(key: K): K;

  /**
   * 获取容器中小于对比key值的最大键，如果key不存在，则返回undefined。
   *
   * @param { K } key - 对比的key值。
   * @returns { K | undefined } 返回值或undefined。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200011 - The getLowerKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getLowerKey(key: K): K | undefined;

  /**
   * 获取容器中大于对比key值的最小键，如果key不存在，则返回undefined。
   *
   * @param { K } key - 对比的key值。
   * @returns { K | undefined } 返回值或undefined。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200011 - The getHigherKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getHigherKey(key: K): K | undefined;

  /**
   * 返回包含此映射中所有键的新迭代器对象。
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
   * 返回包含此映射中键值的新迭代器对象。
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
   * 对容器中一组数据进行更新（替换）。
   *
   * @param { K } key - 指定key。
   * @param { V } newValue - 替换的元素。
   * @returns { boolean } boolean类型（key是否指向目标元素）。
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  replace(key: K, newValue: V): boolean;
  /**
   * 通过回调函数来遍历实例对象上的元素及其下标。
   * 不会对已删除的key执行回调。
   *
   * @param { function } callbackFn - 回调函数。
   *     callbackFn（必填）接受最多三个参数的函数。
   *     对每个元素调用的函数。
   * @param { Object } [thisArg] - this值。
   *     thisArg（可选）当callbackFn被调用时作为this值使用的对象。
   *     如果省略thisArg，则使用undefined作为this值。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: TreeMap<K, V>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数来遍历实例对象上的元素及其下标。
   * 不会对已删除的key执行回调。
   *
   * @param { TreeMapForEachCb<K, V> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: TreeMapForEachCb<K, V>): void;

  /**
   * 返回包含此映射中键值对的新迭代器对象。
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
   * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
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
   * 返回一个迭代器，每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<[K, V]> } TreeMap的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;

}

/**
 * TreeMap的回调函数类型。
 *
 * @param { V } value - 当前元素的值。
 * @param { K } key - 当前元素的键。
 * @param { TreeMap<K, V> } map - 当前正在遍历的TreeMap实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeMapForEachCb<K, V> = (value: V, key: K, map: TreeMap<K, V>) => void

/**
 * TreeMap的比较器类型。
 *
 * @param { K } firstValue - 第一个比较值。
 * @param { K } secondValue - 第二个比较值。
 * @returns { double } - 比较结果。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeMapComparator<K> = (firstValue: K, secondValue: K) => double;

export default TreeMap;