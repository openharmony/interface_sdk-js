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
 * List底层基于单向链表实现。每个节点都有一个引用指向下一个元素。查询时需要从头开始遍历，查询效率低；插入和删除效率高。List允许包含null元素。
 * List和[LinkedList]{@link @ohos.util.LinkedList}相比，LinkedList是双向链表，而List是单向链表，不支持两端插入和删除。
 *
 * > **说明**
 * >
 * > 在List中使用\[index\]语法访问元素可能会导致未定义的结果。建议使用**get()**。
 * > **推荐使用场景：** 当需要频繁进行插入和删除操作，且需要单向链表来存储数据时，推荐使用List。
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

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * List底层基于单向链表实现。每个节点都有一个引用指向下一个元素。查询时需要从头开始遍历。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class List<T> {
  /**
   * List的构造函数。
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * List的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取List的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 在List尾部添加元素。
   *
   * @param { T } element - 添加的成员数据。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * 在List的指定位置插入元素。
   *
   * @param { T } element - 插入的成员数据。
   * @param { int } index - 插入数据的位置下标。需要小于等于int32_max即2147483647。
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * 获取指定下标对应的元素。
   *
   * @param { int } index - 查找的下标位置。需要小于等于int32_max即2147483647。
   * @returns { T } 返回指定下标对应的元素。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  get(index: int): T;

  /**
   * 判断容器中是否包含指定元素。
   *
   * @param { T } element - 指定的元素。
   * @returns { boolean } 包含指定元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * 获取指定元素第一次出现的下标值，如果未找到则返回-1。
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
   * 根据下标删除元素。
   *
   * @param { number } index - 待删除元素的下标。需要小于等于int32_max即2147483647。
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeByIndex(index: number): T;

  /**
   * 根据索引查找对应元素。
   *
   * @param { int } index - 待查找元素的下标。
   *     该值为整数。
   * @returns { T | undefined } T类型的值，如果下标超出范围（大于等于length或小于0），抛出异常。
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   *     Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeByIndex(index: int): T | undefined;

  /**
   * 删除指定元素第一次出现的元素。
   *
   * @param { T } element - 待删除的元素。
   * @returns { boolean } 成功删除元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * 获取指定元素最后一次出现的下标值，如果未找到则返回-1。
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
   * 获取List实例中的第一个元素。
   *
   * @returns { T } 返回List实例中的第一个元素。
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getFirst(): T;
  /**
   * 获取List实例中的最后一个元素。
   *
   * @returns { T } 返回List实例中的最后一个元素。
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLast(): T;

  /**
   * 替换List实例中指定下标位置的元素。
   *
   * @param { int } index - 替换元素的下标位置。需要小于等于int32_max即2147483647。
   * @param { T } element - 替换的元素。
   * @returns { T } 返回替换后的新元素。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(index: int, element: T): T;

  /**
   * 判断此容器与obj的构成元素是否相同。
   *
   * @param { Object } obj - 比较对象。
   * @returns { boolean } 构成元素相同时返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  equal(obj: Object): boolean;

  /**
   * 判断指定对象与此list是否相同。如果对象与此list相同，返回true，否则返回false。
   *
   * @param { RecordData } obj - 用于与此list比较的对象。
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  equal(obj: RecordData): boolean;

  /**
   * 通过回调函数来遍历List实例对象上的元素以及元素对应的下标。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, List?: List<T>) => void, thisArg?: Object): void;

  /**
   * 用对该元素应用操作符的结果替换list中的每个元素。
   *
   * @param { ListForEachCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: ListForEachCb<T>): void;

  /**
   * 对List中的元素进行排序。
   *
   * @param { function } comparator - 回调函数。<br> 从API version 23起有兼容性变更。在API version 22及之前版本，类型为 `(firstValue: T, secondValue: T) => number`。 [since 8 - 22]
   * @param { ListComparatorFn<T> } comparator - 回调函数。<br> 从API version 23起有兼容性变更。在API version 22及之前版本，类型为 `(firstValue: T, secondValue: T) => number`。 [since 23]
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  sort(comparator: ListComparatorFn<T>): void;
  /**
   * 清除List中的所有元素，并将length置为0。
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
   * 获取List实例中指定范围内的元素，包括起始位置但不包括结束位置的元素，作为一个新的List实例返回。
   *
   * @param { int } fromIndex - 起始位置的下标。
   * @param { int } toIndex - 结束位置的下标。
   * @returns { List<T> } 返回新的List实例。
   * @throws { BusinessError } 10200011 - The getSubList method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getSubList(fromIndex: int, toIndex: int): List<T>;
  /**
   * 对List中的所有元素进行替换，并返回替换后的元素。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, list?: List<T>) => T, thisArg?: Object): void;

  /**
   * 用对该元素应用操作符的结果替换list中的每个元素。
   *
   * @param { ListReplaceCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackFn: ListReplaceCb<T>): void;

  /**
   * 将List实例转换为数组。
   *
   * @returns { Array<T> } 返回数组。
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
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
   * 返回指定下标的元素。
   *
   * @param { int } index - 指定元素的下标位置。
   *     如果index < 0或index >= list.length，抛出异常。
   *     该值为整数。
   * @returns { T } 返回list中匹配指定下标的元素。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  [index: int]: T;
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
   * 返回一个迭代器，每一项都是一个ArkTS对象。
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
 * List排序比较器的类型。
 *
 * @param { T } firstValue - firstValue（必填）前一项元素。
 * @param { T } secondValue - secondValue（必填）后一项元素。
 * @returns { double } 数值类型。
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic&static
 */
export type ListComparatorFn<T> = (firstValue: T, secondValue: T) => double;
/**
 * List的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { int } index - 当前元素的下标。
 *     该值为整数。
 * @param { List<T> } list - 当前正在遍历的List实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListForEachCb<T> = (value: T, index: int, list: List<T>) => void;

/**
 * List的回调函数类型。
 *
 * @param { T } value - 当前元素的旧值。
 * @param { int } index - 当前元素的下标。
 *     该值为整数。
 * @param { List<T> } list - 当前正在遍历的List实例。
 * @returns { T } - 当前元素的新值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListReplaceCb<T> = (value: T, index: int, list: List<T>) => T;

export default List;
