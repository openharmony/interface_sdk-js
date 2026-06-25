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
 * LightWeightMap可用于存储具有关联关系的key-value键值对集合，存储元素中key值唯一，每个key对应一个value。
 * LightWeightMap依据泛型定义，采用轻量级结构，初始默认容量大小为8，每次扩容大小为原始容量的两倍。
 * 集合中key值的查找依赖于hash算法，通过一个数组存储hash值，然后映射到其他数组中的value值。
 * LightWeightMap和[HashMap]{@link @ohos.util.HashMap}都是用来存储键值对的集合，但LightWeightMap的占用内存更小。
 * **推荐使用场景：** 当需要存取key-value键值对数据时，推荐使用占用内存更小的LightWeightMap。
 * 文档中使用了泛型，包含以下泛型标记符：
 *
 * - K：Key，键
 * - V：Value，值
 *
 * > **说明**
 * >
 * > - 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * LightWeightMap可用于存储具有关联关系的key-value键值对集合，存储元素中key值唯一，每个key对应一个value。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightMap<K, V> {
  /**
   * LightWeightMap的构造函数。
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
   * LightWeightMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取LightWeightMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 判断容器中是否包含指定map中的所有元素。
   *
   * @param { LightWeightMap<K, V> } map - 比较对象。
   * @returns { boolean } 包含所有元素时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(map: LightWeightMap<K, V>): boolean;
  /**
   * 判断容器中是否包含指定key。
   *
   * @param { K } key - 指定key。
   * @returns { boolean } 包含指定key时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * 判断容器中是否包含指定value。
   *
   * @param { V } value - 指定value。
   * @returns { boolean } 包含指定value时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * 将当前LightWeightMap扩容至指定容量。如果传入的容量值大于或等于当前LightWeightMap中的元素个数，将容量变更为新容量，小于则不会变更。
   *
   * @param { int } minimumCapacity - 需要容纳的元素数量。
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(minimumCapacity: int): void;
  /**
   * 返回包含此映射中所有键值对的新迭代器对象。
   *
   * @returns { IterableIterator<[K, V]> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * 获取指定key所对应的value。
   *
   * @param { K } key - 查找的指定key。
   * @returns { V } 返回key映射的value值。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;

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
   * 查找指定key元素首次出现的下标值，如果未找到则返回-1。
   *
   * @param { K } key - 指定key。
   * @returns { int } 返回指定key元素首次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfKey(key: K): int;
  /**
   * 查找指定value元素首次出现的下标值，如果未找到则返回-1。
   *
   * @param { V } value - 指定value元素。
   * @returns { int } 返回指定value元素首次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: V): int;
  /**
   * 判断容器是否为空。
   *
   * @returns { boolean } 为空返回true，不为空返回false。
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * 查找指定下标元素键值对中的key值。
   *
   * @param { number } index - 指定下标。需要小于等于int32_max即2147483647。
   * @returns { K } 返回该下标元素键值对中的key值，失败返回undefined。
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getKeyAt(index: number): K;
  /**
   * 获取LightWeightMap容器中指定下标位置的key。
   *
   * @param { int } index - 检索值的下标位置。
   *     该值为整数。
   * @returns { K | undefined } 返回指定下标对应的key，如果下标超出范围则返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getKeyAt(index: int): K | undefined;

  /**
   * 返回包含此映射中所有键的新迭代器对象。
   *
   * @returns { IterableIterator<K> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  keys(): IterableIterator<K>;
  /**
   * 将一个LightWeightMap中的所有元素组添加到另一个LightWeightMap中。
   *
   * @param { LightWeightMap<K, V> } map - 该map会添加到其调用setAll接口的map对象中。
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setAll(map: LightWeightMap<K, V>): void;
  /**
   * 向容器中添加或更新一组数据。
   *
   * @param { K } key - 添加成员数据的键名。
   * @param { V } value - 添加成员数据的值。
   * @returns { Object } 返回添加后的LightWeightMap。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * 删除指定key映射的元素。
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
   * 删除指定下标对应的元素。
   *
   * @param { int } index - 指定元素下标。需要小于等于int32_max即2147483647。
   * @returns { boolean } 确认是否成功删除元素，成功删除元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeAt(index: int): boolean;
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
   * 替换容器中指定下标对应键值对中的键值。
   *
   * @param { int } index - 指定替换数据下标。需要小于等于int32_max即2147483647。
   * @param { V } newValue - 替换键值对中的值。
   * @returns { boolean } 是否成功对已有数据进行替换，成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setValueAt(index: int, newValue: V): boolean;
  /**
   * 通过回调函数来遍历LightWeightMap实例对象上的元素以及元素对应的下标。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: LightWeightMap<K, V>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数遍历LightWeightMap实例对象中的所有键值对，并对每个键值对执行回调函数。
   *
   * @param { LightWeightMapCbFn<K, V> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightMapCbFn<K, V>): void;

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
   * @returns { IterableIterator<[K, V]> } LightWeightMap的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;

  /**
   * 将此映射中包含的键值对拼接成字符串并返回。
   *
   * @returns { String } 返回对应字符串。
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * 获取指定下标对应键值对中的value值。
   *
   * @param { number } index - 指定下标。需要小于等于int32_max即2147483647。
   * @returns { V } 返回该下标对应键值对中的value值。
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): V;
  /**
   * 获取LightWeightMap容器中指定下标位置的value。
   *
   * @param { int } index - 检索值的下标位置。
   *     该值为整数。
   * @returns { V | undefined } 返回指定下标对应的值，如果下标超出范围则返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): V | undefined;

  /**
   * 返回包含此映射中所有键对应值的新迭代器对象。
   *
   * @returns { IterableIterator<V> } 返回一个迭代器。
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
 * LightWeightMap的回调函数类型。
 *
 * @param { V } value - 当前元素的值。
 * @param { K } key - 当前元素的键。
 * @param { LightWeightMap<K, V> } map - 当前正在遍历的LightWeightMap实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightMapCbFn<K, V> = (value: V, key: K, map: LightWeightMap<K, V>) => void;

export default LightWeightMap;
