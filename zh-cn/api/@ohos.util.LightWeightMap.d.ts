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
 * LightWeightMap可用于存储具有关联关系的key-value键值对，其中key值唯一，每个key对应一个value。
 * LightWeightMap依据泛型定义，采用轻量级结构，默认容量大小为8，每次扩容大小为原始容量的两倍。
 * 集合中key值的查找依赖于hash算法，通过一个数组存储hash值，然后映射到对应的key值及value值。
 * LightWeightMap和[HashMap]{@link @ohos.util.HashMap}都是用来存储键值对的容器，但LightWeightMap占用内存更小。
 * **推荐使用场景：** 当需要存取key-value键值对且对内存占用较为敏感时（如需要同时维护大量小型键值对集合、运行在内存受限的环境中），推荐使用占用内存更小的LightWeightMap。
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
 * LightWeightMap可用于存储具有关联关系的key-value键值对，其中key值唯一，每个key对应一个value。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightMap<K, V> {
  /**
   * LightWeightMap的构造函数，创建一个空的LightWeightMap实例。
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
   * LightWeightMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 判断LightWeightMap中是否包含指定map中的所有元素。
   *
   * @param { LightWeightMap<K, V> } map - 用于比较的LightWeightMap对象，判断当前实例是否包含此map中的所有元素。
   * @returns { boolean } 包含所有元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(map: LightWeightMap<K, V>): boolean;
  /**
   * 判断LightWeightMap中是否包含指定key。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致，详见规格限制。
   *
   * @param { K } key - 指定key。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
   * @returns { boolean } 包含指定key返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * 判断LightWeightMap中是否包含指定value。
   *
   * @param { V } value - 要判断是否包含的value。
   * @returns { boolean } 包含指定元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * 将当前LightWeightMap扩容至指定容量。如果传入的容量值大于或等于当前LightWeightMap中的元素个数，将容量扩容至新容量，小于则不会变更。
   *
   * @param { int } minimumCapacity - 需要容纳的元素数量。取值需大于等于0，大于等于当前元素个数时扩容生效，否则不变更容量。
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
   * @returns { IterableIterator<[K, V]> } 返回包含此映射中所有键值对的迭代器对象。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * 获取指定key所对应的value。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
   *
   * @param { K } key - 指定key。
   * @returns { V } 返回key映射的value值。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;

  /**
   * 获取指定key所对应的value。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
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
   * 查找key元素首次出现的下标值，如果未找到返回-1。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
   *
   * @param { K } key - 被查找的元素。
   * @returns { int } 返回key元素首次出现的下标值，查找失败返回-1。
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
   * @param { V } value - 要查找首次出现下标位置的值。
   * @returns { int } 返回value元素首次出现的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: V): int;
  /**
   * 判断LightWeightMap是否为空。
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
   * 查找指定下标的元素键值对中key值，如果未找到则返回undefined。
   *
   * @param { number } index - 所查找的下标。需要小于等于INT32_MAX即2147483647。
   * @returns { K } 返回该下标对应的元素键值对中key值，如果未找到则返回undefined。
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getKeyAt(index: number): K;
  /**
   * 查找指定下标的元素键值对中key值，如果未找到则返回undefined。
   *
   * @param { int } index - 所查找的下标。需要小于等于INT32_MAX即2147483647。
   *     取值限定为整数。
   * @returns { K | undefined } 返回指定下标对应的key，如果下标超出范围则返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getKeyAt(index: int): K | undefined;

  /**
   * 返回包含此映射中所有的键的新迭代器对象。
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
   * 将一个LightWeightMap中的所有元素添加到另一个LightWeightMap中，如果目标LightWeightMap中已存在相同的key，则会更新其对应的value。
   *
   * @param { LightWeightMap<K, V> } map - 提供添加元素的LightWeightMap。
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setAll(map: LightWeightMap<K, V>): void;
  /**
   * 向LightWeightMap中添加或更新一组数据。调用成功后，若key不存在则新增键值对且length增加，若key已存在则更新对应value值。
   *
   * @param { K } key - 添加或更新成员数据的键名。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
   * @param { V } value - 添加或更新成员数据的值。
   * @returns { Object } 返回添加或更新后的LightWeightMap实例对象。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * 删除指定key映射的元素。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
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
   * 删除指定key映射的元素。当key为number类型且值大于INT32_MAX或小于INT32_MIN时，结果可能与预期不一致。
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
   * 删除指定下标对应的元素。调用成功后，若下标有效则该位置的键值对从LightWeightMap中移除且length减少。
   *
   * @param { int } index - 要删除的元素的下标位置。取值范围：[0, length-1]，需小于等于INT32_MAX即2147483647。
   * @returns { boolean } 成功删除元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeAt(index: int): boolean;
  /**
   * 清除LightWeightMap中的所有元素，并将length置为0。
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
   * 替换指定下标对应键值对中的值。调用成功后，指定下标处键值对的值将被替换为newValue。
   *
   * @param { int } index - 指定下标。需要小于等于INT32_MAX即2147483647。
   * @param { V } newValue - 替换键值对中的值。
   * @returns { boolean } 成功替换返回true，否则返回false。
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
   * 通过回调函数来遍历实例对象上的元素及其键值对信息。
   *
   * @param { function } callbackFn - 回调函数，用于遍历LightWeightMap实例中的元素及下标。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当需要回调函数中的this指向非当前实例对象时传入此参数，当不需要改变this指向时可不传入。不传入时，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: LightWeightMap<K, V>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数来遍历实例对象上的元素及其键值对信息。
   *
   * @param { LightWeightMapCbFn<K, V> } callbackFn - 回调函数，用于遍历LightWeightMap实例中的元素及下标。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightMapCbFn<K, V>): void;

  /**
   * 返回一个迭代器，迭代器的每一项都是一个包含键和值的[K, V]数组。
   *
   * @returns { IterableIterator<[K, V]> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * 返回一个迭代器，迭代器的每一项都是一个包含键和值的[K, V]数组。
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
   * @returns { String } 返回将此映射中键值对拼接而成的字符串。
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * 获取指定下标对应键值对中的值。
   *
   * @param { number } index - 指定下标。需要小于等于INT32_MAX即2147483647。
   * @returns { V } 返回指定下标对应键值对中的值。
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): V;
  /**
   * 获取指定下标对应键值对中的值。
   *
   * @param { int } index - 要删除的元素的下标位置。取值范围：[0, length-1]，需小于等于INT32_MAX即2147483647。
   *     取值限定为整数。
   * @returns { V | undefined } 返回指定下标对应的值，如果下标超出范围则返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): V | undefined;

  /**
   * 返回包含此映射中所有值的新迭代器对象。
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
 * LightWeightMap中forEach方法的回调函数。
 *
 * @param { V } value - 当前遍历到的元素键值对的值。
 * @param { K } key - 当前遍历到的元素键值对的键。
 * @param { LightWeightMap<K, V> } map - 当前正在遍历的LightWeightMap实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightMapCbFn<K, V> = (value: V, key: K, map: LightWeightMap<K, V>) => void;

export default LightWeightMap;
