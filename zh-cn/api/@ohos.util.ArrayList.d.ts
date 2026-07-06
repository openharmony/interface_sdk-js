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
 * ArrayList是一种线性数据结构，底层基于数组实现。ArrayList会根据实际需要动态调整容量，每次扩容增加50%。
 * ArrayList和[LinkedList]{@link @ohos.util.LinkedList}相比，ArrayList的随机访问效率更高。
 * 但由于ArrayList的增删操作可能需要对数组内其他元素进行移动，LinkedList的增加和删除操作效率更高。
 * **推荐使用场景：** 当需要频繁读取集合中的元素时，推荐使用ArrayList。
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
 * ArrayList是一种线性数据结构，底层基于数组实现。
 * ArrayList会根据实际需要动态调整容量，每次扩容增加50%。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class ArrayList<T> {
  /**
   * ArrayList的构造函数。
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * ArrayList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取ArrayList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 在ArrayList尾部插入元素。
   *
   * @param { T } element - 待插入的元素。
   * @returns { boolean } 插入成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * 在长度范围内指定位置index插入元素element。如果index超出范围，则插入失败。
   *
   * @param { T } element - 被插入的元素。
   * @param { int } index - 被插入的位置索引。需要小于等于int32_max即2147483647。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * 判断此ArrayList中是否包含该指定元素。
   *
   * @param { T } element - 指定元素。
   * @returns { boolean } 返回true表示包含指定元素，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * 返回指定元素第一次出现的下标，查找失败返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { int } 返回指定元素第一次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * 根据元素的下标值查找元素，返回元素后将其删除。
   *
   * @param { int } index - 指定元素的下标值。需要小于等于int32_max即2147483647。
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200001 - The value of "index" is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByIndex(index: int): T;
  /**
   * 删除查找到的第一个指定元素。
   *
   * @param { T } element - 指定元素。
   * @returns { boolean } 删除成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * 返回指定元素最后一次出现的下标，查找失败返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { int } 返回指定元素最后一次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastIndexOf(element: T): int;
  /**
   * 删除指定范围内的元素，区间包含fromIndex，但不包含toIndex，即左闭右开区间[fromIndex, toIndex)。
   *
   * @param { int } fromIndex - 起始下标。
   * @param { int } toIndex - 终止下标。
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByRange(fromIndex: int, toIndex: int): void;
  /**
   * 用户操作ArrayList中的元素，用操作后的元素替换原元素并返回操作后的元素。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void;

  /**
   * 用户操作此容器中的元素，用操作后的元素替换原元素并返回操作后的元素。
   *
   * @param { ArrayListReplaceCb<T> } callbackFn - 用于替换的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackFn: ArrayListReplaceCb<T>): void;

  /**
   * 在遍历ArrayList实例对象的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void;

  /**
   * 遍历泛型ArrayList中的元素，并对每个元素执行回调函数。
   *
   * @param { ArrayListForEachCb<T> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: ArrayListForEachCb<T>): void;

  /**
   * 根据指定比较器所定义的顺序，对ArrayList中的元素进行排序。
   *
   * @param { function } [comparator] - 回调函数，默认为升序排序的回调函数。<br> API version 23开始发生兼容性变更，
   *     在API version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 8 - 22]
   * @param { ArrayListComparatorFn<T> } [comparator] - 回调函数，默认为升序排序的回调函数。<br> API version 23开始发生兼容性
   *     变更，在API version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 23]
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  sort(comparator?: ArrayListComparatorFn<T>): void;
  /**
   * 根据下标截取ArrayList中的一段元素，并返回这一段ArrayList实例，区间包含fromIndex，但不包含toIndex，
   * 即左闭右开区间[fromIndex, toIndex)。
   *
   * @param { int } fromIndex - 起始下标。
   * @param { int } toIndex - 终止下标。
   * @returns { ArrayList<T> } 返回ArrayList对象实例。
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  subArrayList(fromIndex: int, toIndex: int): ArrayList<T>;
  /**
   * 清除ArrayList中的所有元素，并把length置为0。
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
   * 克隆一个与ArrayList相同的实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。
   *
   * @returns { ArrayList<T> } 返回ArrayList对象实例。
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): ArrayList<T>;
  /**
   * 获取当前实例的容量大小。
   *
   * @returns { int } 获取当前实例的容量大小。
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getCapacity(): int;
  /**
   * 把当前ArrayList实例转换成数组，并返回转换后的数组。
   *
   * @returns { Array<T> } 返回数组类型。
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
  /**
   * 判断该ArrayList是否为空。
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
   * 获取指定索引值对应位置的元素。
   *
   * @param { int } index - 元素的位置索引。需要小于等于int32_max即2147483647。
   * @returns { T } 容器中对应索引值为index的元素。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  [index: int]: T;

  /**
   * 如果传入的新容量大于或等于ArrayList中的元素个数，将容量变更为新容量。
   *
   * @param { int } newCapacity - 新容量。
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(newCapacity: int): void;
  /**
   * 释放ArrayList中预留的空间，把容量调整为当前的元素个数。
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  trimToCurrentLength(): void;
  /**
   * 返回一个迭代器，每一项都是一个JavaScript对象。
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
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;
}

/**
 * ArrayList中sort方法的比较器类型。
 *
 * @param { T } firstValue - 需要排序的前一项元素。
 * @param { T } secondValue - 需要排序的后一项元素。
 * @returns { double } number类型。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic&static
 */
export type ArrayListComparatorFn<T> = (firstValue: T, secondValue: T) => double;

/**
 * ArrayList的回调函数类型。
 *
 * @param { T } value - 当前正在处理的元素。
 * @param { int } index - 当前元素的下标。
 * @param { ArrayList<T> } arrlist - 当前正在遍历的ArrayList实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListForEachCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => void;

/**
 * ArrayList的回调函数类型。
 *
 * @param { T } value - 当前正在处理的元素。
 * @param { int } index - 当前元素的下标。
 * @param { ArrayList<T> } arrlist - 当前正在遍历的ArrayList实例。
 * @returns { T } 此回调返回替换后的元素。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListReplaceCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => T;

export default ArrayList;