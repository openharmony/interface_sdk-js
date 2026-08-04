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
 * List底层通过单向链表实现，每个节点有一个指向后一个元素的引用。查询元素必须从头遍历，因此查询效率低，但插入和删除效率高。List允许元素为null。
 * List和[LinkedList]{@link @ohos.util.LinkedList}相比，LinkedList是双向链表，可以快速地在头尾进行增删，而List是单向链表，不支持双向操作。
 *
 * > **注意：**
 * >
 * > 在List中使用\[index\]的方式获取元素可能导致未定义结果，推荐使用get()方法。
 * **推荐使用场景：** 当需要频繁的插入删除元素且需要使用单向链表时，推荐使用List。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，类型
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
 * List底层通过单向链表实现，每个节点有一个指向后一个元素的引用。查询元素必须从头遍历，因此查询效率低，但插入和删除效率高。List允许元素为null。
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
   * 在List尾部插入元素。
   *
   * @param { T } element - 待添加的元素。
   * @returns { boolean } 插入成功返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * 在长度范围内任意位置插入指定元素。
   *
   * @param { T } element - 待插入元素。
   * @param { int } index - 插入的位置索引，可插入位置区间为[0, List.length]，需要小于等于int32_max即2147483647。
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
   * 根据下标获取List中的元素。
   *
   * @param { int } index - 要查找的下标。需要小于等于int32_max即2147483647。
   * @returns { T } 根据下标查找到的元素。
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
   * 判断List中是否包含指定元素。
   *
   * @param { T } element - 指定元素。
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
   * 查找指定元素第一次出现的下标，查找失败返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { int } 返回第一次找到指定元素的下标，没有找到返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * 根据元素的下标值查找元素，并将其删除。
   *
   * @param { number } index - 指定元素的下标值，取值范围[0, List.length-1]，需要小于等于int32_max即2147483647。
   * @returns { T } 返回被删除的元素。
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
   * 删除查找到的第一个指定的元素。
   *
   * @param { T } element - 指定元素。
   * @returns { boolean } 删除成功返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * 查找指定元素最后一次出现的下标值，查找失败返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { int } 返回指定元素最后一次出现的下标值，没有找到返回-1。
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
   * @returns { T } 返回实例的第一个元素。
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
   * @returns { T } 返回实例的最后一个元素。
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
   * 替换List指定位置的元素。
   *
   * @param { int } index - 查找的下标值。取值范围[0, List.length-1]，需要小于等于int32_max即2147483647。
   * @param { T } element - 用来替换的元素。
   * @returns { T } 返回替换后的元素。
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
   * 比较指定对象与此List是否相等。
   *
   * @param { Object } obj - 用来比较的对象。
   * @returns { boolean } 如果对象与此列表相同返回true，否则返回false。
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
   * 在遍历List实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   *     callbackFn（必填）接受最多三个参数的函数。
   *     value 当前遍历到的元素。
   *     index 当前遍历到的下标值，默认值为0。
   *     List 当前调用forEach方法的实例对象，默认值为当前实例对象。
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
   * @param { function } comparator - 回调函数。<br> API version 23开始发生兼容性变更，在API version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 8 - 22]
   * @param { ListComparatorFn<T> } comparator - 回调函数。<br> API version 23开始发生兼容性变更，在API version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 23]
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
   * 根据下标截取List中的一段元素，并返回这一段List实例，包括起始值但不包括终止值。
   *
   * @param { int } fromIndex - 起始下标。
   * @param { int } toIndex - 终止下标。
   * @returns { List<T> } 返回List对象实例。
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
   * 遍历List中的元素，并用回调函数返回的新值替换原List中的元素。
   *
   * @param { function } callbackFn - 回调函数。
   *     callbackFn（必填）接受最多三个参数的函数。
   *     value 当前遍历到的元素。
   *     index 当前遍历到的下标值，默认值为0。
   *     list 当前调用replaceAllElements方法的实例对象，默认值为当前实例对象。
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
   * 把当前List实例转换成数组并返回。
   *
   * @returns { Array<T> } 返回转换后的数组。
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
  /**
   * 判断List是否为空。
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
   * 返回一个迭代器，用于遍历List中的元素。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器。
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
 * List中sort方法的回调函数。
 *
 * @param { T } firstValue - 需要排序的前一项元素。
 * @param { T } secondValue - 需要排序的后一项元素。
 * @returns { double } 通过回调函数返回的值，List能够根据自定义的比较规则维护元素的顺序。
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
