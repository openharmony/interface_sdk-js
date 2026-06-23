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
 * LightWeightSet可用于存储一系列值的集合，存储元素中value值唯一。
 * LightWeightSet依据泛型定义，采用轻量级结构，初始默认容量大小为8，每次扩容大小为原始容量的两倍。
 * 集合中value值的查找依赖于hash算法，通过一个数组存储hash值，然后映射到其他数组中的value值。
 * LightWeightSet和[HashSet]{@link @ohos.util.HashSet}都是用来存储元素的集合，但LightWeightSet的占用内存更小。
 * **推荐使用场景：** 当需要存取某个集合或是对某个集合去重时，推荐使用占用内存更小的LightWeightSet。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，类
 *
 * > **说明**
 * >
 * > - 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * LightWeightSet可用于存储一系列值的集合，存储元素中value值唯一。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightSet<T> {
  /**
   * LightWeightSet的构造函数。
   *
   * @throws { BusinessError } 10200012 - The LightWeightSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * LightWeightSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取LightWeightSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 向容器中添加数据。
   *
   * @param { T } obj - 添加的成员数据。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(obj: T): boolean;
  /**
   * 将另一个容器的所有元素组添加到当前容器。
   *
   * @param { LightWeightSet<T> } set - 提供添加元素的LightWeightSet。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The addAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addAll(set: LightWeightSet<T>): boolean;
  /**
   * 判断容器中是否包含指定set中的所有元素。
   *
   * @param { LightWeightSet<T> } set - 比较对象。
   * @returns { boolean } 包含所有元素时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(set: LightWeightSet<T>): boolean;
  /**
   * 判断容器中是否包含指定的key。
   *
   * @param { T } key - 指定key。
   * @returns { boolean } 包含指定key时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(key: T): boolean;
  /**
   * 判断此容器与obj的构成元素是否相同。
   *
   * > **说明**
   * >
   * > 此接口从API version 8开始支持，从API version 12开始废弃。无替代接口。
   *
   * @param { Object } obj - 比较对象。
   * @returns { boolean } 当obj为仅含string或number的LightWeightSet或数组，且对象内部元素构成相同时，返回true；其他情况返回false。
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 12
   */
  equal(obj: Object): boolean;
  /**
   * 将当前LightWeightSet扩容至指定容量。如果传入的容量值大于或等于当前LightWeightSet中的元素个数，将容量变更为新容量，小于则不会变更。
   *
   * @param { int } minimumCapacity - 需要容纳的元素数量。
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of minimumCapacity is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(minimumCapacity: int): void;
  /**
   * 获取指定key所对应的下标。
   *
   * @param { T } key - 查找的指定key。
   * @returns { int } 在lightWeightSet中指定数据的下标。若lightWeightSet中没有要查找的元素，则返回一个负值。
   *     表示目标哈希值应该插入的位置，插入位置是从1开始计数的，负号表示这是一个插入位置而不是索引。
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(key: T): int;
  /**
   * 删除并返回指定key对应的元素。
   *
   * @param { T } key - 指定key。
   * @returns { T } 返回删除元素的值。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: T): T;

  /**
   * 删除LightWeightSet容器中指定Object类型的对象。
   *
   * @param { T } key - 待删除元素的key。
   * @returns { T | undefined } 如果存在则返回被删除的值，否则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: T): T | undefined;

  /**
   * 删除指定下标所对应的元素。
   *
   * @param { int } index - 指定下标。需要小于等于int32_max即2147483647。
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
   * 通过回调函数来遍历LightWeightSet实例对象上的元素以及元素对应的下标。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数遍历实例对象中实际的key。
   * 不会对已删除的key执行回调。
   *
   * @param { LightWeightSetForEachCb<T> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightSetForEachCb<T>): void;

  /**
   * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * 返回一个迭代器，每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<T> } LightWeightSet的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

  /**
   * 获取包含容器中所有键和值的字符串。
   *
   * @returns { String } 返回对应字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * 获取包含此容器中所有对象的数组。
   *
   * @returns { Array<T> } 返回对应数组。
   * @throws { BusinessError } 10200011 - The toArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toArray(): Array<T>;
  /**
   * 获取容器中指定下标对应的元素。
   *
   * @param { number } index - 指定下标。需要小于等于int32_max即2147483647。
   * @returns { T } 返回指定下标对应的元素。
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): T;

  /**
   * 获取LightWeightSet容器中指定下标位置的对象。
   *
   * @param { int } index - 检索值的下标位置。
   * @returns { T | undefined } 返回指定下标对应的值，如果下标超出范围则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): T | undefined;

  /**
   * 返回包含此映射中所有键值的新迭代器对象。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * 返回包含此映射中包含的键值对的新迭代器对象。
   *
   * @returns { IterableIterator<[T, T]> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
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
}

/**
 * LightWeightSet的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { T } key - 当前元素的键（与value相同）。
 * @param { LightWeightSet<T> } set - 当前正在遍历的LightWeightSet实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightSetForEachCb<T> = (value: T, key: T, set: LightWeightSet<T>) => void;

export default LightWeightSet;