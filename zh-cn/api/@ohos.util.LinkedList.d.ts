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
 * LinkedList底层基于双向链表实现。双向链表的每个节点都有一个指向上一元素的引用和指向下一元素的引用。查询时从头或尾开始遍历。插入和删除效率高，查询效率低。LinkedList允许包含null元素。
 * LinkedList和[List]{@link @ohos.util.List}相比，List是单向链表，而LinkedList是双向链表，支持两端插入和删除。
 * LinkedList在数据插入方面比[ArrayList]{@link @ohos.util.ArrayList}更高效，但在数据访问方面效率较低。
 *
 * > **说明**
 * >
 * > 在LinkedList中使用\[index\]语法访问元素可能会导致未定义的结果。建议使用**get()**。
 * > **推荐使用场景：** 当需要频繁进行插入和删除操作，且需要双向链表来存储数据时，推荐使用LinkedList。
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
 * LinkedList底层基于双向链表实现。双向链表的每个节点都有一个指向上一元素的引用和指向下一元素的引用。
 * 查询元素时，从头或尾开始遍历。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LinkedList<T> {
  /**
   * LinkedList的构造函数。
   *
   * @throws { BusinessError } 10200012 - The LinkedList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * LinkedList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取LinkedList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 在LinkedList尾部添加元素。
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
   * 在LinkedList的指定位置插入元素。
   *
   * @param { int } index - 插入数据的位置下标。需要小于等于int32_max即2147483647。
   * @param { T } element - 插入的成员数据。
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(index: int, element: T): void;
  /**
   * 获取指定下标位置的元素。
   *
   * @param { int } index - 查找的下标位置。需要小于等于int32_max即2147483647。
   * @returns { T } 返回指定下标位置的元素，如果元素不存在返回undefined。
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
   * 在LinkedList头部添加元素。
   *
   * @param { T } element - 添加的成员数据。
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addFirst(element: T): void;
  /**
   * 删除LinkedList实例中的第一个元素。
   *
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200011 - The removeFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeFirst(): T;

  /**
   * 获取并删除此linkedList的头部元素（第一个元素）。
   *
   * @returns { T | undefined } 返回此list的头部元素。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeFirst(): T | undefined;

  /**
   * 删除LinkedList实例中的最后一个元素。
   *
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200011 - The removeLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeLast(): T;

  /**
   * 删除并返回此linkedList的最后一个元素。
   *
   * @returns { T | undefined } 返回此list的尾部元素。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeLast(): T | undefined;

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
   * @returns { T } 返回删除的元素，如果元素不存在返回undefined。
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeByIndex(index: number): T;

  /**
   * 删除并返回此linkedList中指定下标位置的元素。
   *
   * @param { int } index - 待查找元素的下标。
   * @returns { T | undefined } T类型的值，如果下标超出范围（大于等于length或小于0），抛出异常。
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   *     Received value is: ${index}
   * @throws { BusinessError } 10200010 - Container is empty.
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
   * 删除指定元素第一次出现的元素。
   *
   * @param { T } element - 待删除的元素。
   * @returns { boolean } 成功删除元素返回true；删除失败或元素不存在返回false。
   * @throws { BusinessError } 10200011 - The removeFirstFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeFirstFound(element: T): boolean;
  /**
   * 删除指定元素最后一次出现的元素。
   *
   * @param { T } element - 待删除的元素。
   * @returns { boolean } 成功删除元素返回true；删除失败或元素不存在返回false。
   * @throws { BusinessError } 10200011 - The removeLastFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeLastFound(element: T): boolean;
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
   * 获取LinkedList实例中的第一个元素。
   *
   * @returns { T } 返回获取的元素，如果为空返回undefined。
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
   * 获取LinkedList实例中的最后一个元素。
   *
   * @returns { T } 返回获取的元素，如果为空返回undefined。
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
   * 替换LinkedList实例中指定下标位置的元素。
   *
   * @param { int } index - 替换元素的下标位置。需要小于等于int32_max即2147483647。
   * @param { T } element - 替换的元素。
   * @returns { T } 返回替换后的新元素，如果为空返回undefined。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(index: int, element: T): T;

  /**
   * 通过回调函数来遍历LinkedList实例对象上的元素以及元素对应的下标。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, LinkedList?: LinkedList<T>) => void, thisArg?: Object): void;

  /**
   * 用对该元素应用操作符的结果替换linkedList中的每个元素。
   *
   * @param { LinkedListForEachCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LinkedListForEachCb<T>): void;

  /**
   * 清除LinkedList中的所有元素，并将length置为0。
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
   * 克隆一个与LinkedList相同的实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。
   *
   * @returns { LinkedList<T> } 返回新的LinkedList实例。
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): LinkedList<T>;
  /**
   * 将LinkedList实例转换为数组。
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
 * LinkedList的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { int } index - 当前元素的下标。
 *     该值为整数。
 * @param { LinkedList<T> } linkedList - 当前正在遍历的LinkedList实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type LinkedListForEachCb<T> = (value: T, index: int, linkedList: LinkedList<T>) => void;

export default LinkedList;
