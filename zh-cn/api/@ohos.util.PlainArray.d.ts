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
 * PlainArray可用于存储具有关联关系的key-value键值对集合，其中key值唯一且类型为number，每个key对应一个value。
 * PlainArray依据泛型定义，采用轻量级结构，通过二分查找算法在集合中查找key值，并映射到其他数组中的value值。
 * PlainArray和[LightWeightMap]{@link @ohos.util.LightWeightMap}都是用来存储键值对，且均采用轻量级结构，
 * 但PlainArray的key值类型仅限于number。
 * **推荐使用场景：** 当需要存储key值为number类型的键值对时，可以使用PlainArray。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，类
 *
 * > **说明**
 * >
 * > 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * PlainArray可用于存储具有关联关系的key-value键值对集合，其中key值唯一且类型为number，每个key对应一个value。
 * PlainArray依据泛型定义，采用轻量级结构。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class PlainArray<T> {
  /**
   * PlainArray的构造函数。
   *
   * @throws { BusinessError } 10200012 - The PlainArray's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * PlainArray的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取PlainArray的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 向容器中添加一组数据。
   *
   * @param { int } key - 添加成员数据的键名。需要小于等于int32_max即2147483647。
   * @param { T } value - 添加成员数据的值。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(key: int, value: T): void;
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
   * 克隆一个实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。
   *
   * @returns { PlainArray<T> } 返回新的对象实例。
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): PlainArray<T>;
  /**
   * 判断容器中是否包含指定key。
   *
   * @param { int } key - 指定key。需要小于等于int32_max即2147483647。
   * @returns { boolean } 包含指定key返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(key: int): boolean;
  /**
   * 获取指定key所对应的value。
   *
   * @param { number } key - 查找的指定key。需要小于等于int32_max即2147483647。
   * @returns { T } 返回key映射的value值。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: number): T;

  /**
   * 查询与指定key关联的value。
   *
   * @param { int } key - 查找的目标key。
   *     该值为整数。
   * @returns { T | undefined } 键值对中的value。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: int): T | undefined;

  /**
   * 查找指定key对应的下标值，如果未找到则返回-1。
   *
   * @param { int } key - 指定key。需要小于等于int32_max即2147483647。
   * @returns { int } 返回指定key对应的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfKey(key: int): int;
  /**
   * 查找指定value元素第一次出现的下标值，如果未找到则返回-1。
   *
   * @param { T } value - 指定value元素。
   * @returns { int } 返回指定value元素第一次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: T): int;
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
   * @param { int } index - 指定下标。需要小于等于int32_max即2147483647。
   * @returns { int } 返回该下标元素键值对中的key值，失败返回-1。
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getKeyAt(index: int): int;
  /**
   * 删除指定key对应的键值对。
   *
   * @param { number } key - 指定key。需要小于等于int32_max即2147483647。
   * @returns { T } 返回所删除的键值对中的Value值。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: number): T;

  /**
   * 如果存在指定key对应的键值对，则删除并返回该值。
   *
   * @param { int } key - 待删除的目标key。
   *     该值为整数。
   * @returns { T | undefined } 如果key存在则返回映射的值，否则返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: int): T | undefined;

  /**
   * 删除指定下标对应的元素。
   *
   * @param { number } index - 指定元素下标。需要小于等于int32_max即2147483647。
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeAt(index: number): T;

  /**
   * 如果存在指定下标的键值对，则删除并返回该值。
   *
   * @param { int } index - 查找的目标下标。
   *     该值为整数。
   * @returns { T | undefined } T类型的值，容器为空时返回undefined。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeAt(index: int): T | undefined;

  /**
   * 删除指定范围内的元素。
   *
   * @param { int } index - 删除元素的起始下标。需要小于等于int32_max即2147483647。
   * @param { int } size - 期望删除元素个数。需要小于等于int32_max即2147483647。
   * @returns { int } 实际删除元素个数。
   * @throws { BusinessError } 10200011 - The removeRangeFrom method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeRangeFrom(index: int, size: int): int;
  /**
   * 替换容器中指定下标对应键值对中的键值。
   *
   * @param { int } index - 指定替换数据下标。需要小于等于int32_max即2147483647。
   * @param { T } value - 替换键值对中的值。
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setValueAt(index: int, value: T): void;
  /**
   * 获取包含容器中所有键和值的字符串。
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
   * 查找指定下标元素键值对中的Value值，失败则返回undefined。
   *
   * @param { int } index - 指定下标。需要小于等于int32_max即2147483647。
   * @returns { T } 返回该下标元素键值对中的value值，失败返回undefined。
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getValueAt(index: int): T;
  /**
   * 在遍历PlainArray实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object): void;

  /**
   * 在遍历PlainArray实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { PlainArrayForEachCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: PlainArrayForEachCb<T>): void;

  /**
   * 返回一个包含key-value键值对的迭代器对象，其中key是number类型。
   *
   * @returns { IterableIterator<[number, T]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<[number, T]>;

  /**
   * 返回一个迭代器，每一项都是一个ArkTS对象。
   *
   * @returns { IterableIterator<[int, T]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[int, T]>;

}

/**
 * PlainArray的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { int } key - 当前元素的键。
 *     该值为整数。
 * @param { PlainArray<T> } PlainArray - 当前正在遍历的PlainArray实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type PlainArrayForEachCb<T> = (value: T, key: int, PlainArray: PlainArray<T>) => void;

export default PlainArray;