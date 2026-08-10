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
 * LinkedList底层通过双向链表实现，每个节点都包含对前一个元素和后一个元素的引用。查询元素时，可以从头或从尾部遍历，插入和删除效率高，查询效率低。LinkedList允许元素为null。
 * LinkedList和[List]{@link @ohos.util.List}相比，LinkedList是双向链表，可以快速地在头尾进行增删，而List是单向链表，无法双向操作。
 * LinkedList和[ArrayList]{@link @ohos.util.ArrayList}相比，LinkedList插入数据效率高于ArrayList，而ArrayList查询效率高于LinkedList。
 *
 * > **注意：**
 * >
 * > 在LinkedList中使用\[index\]的方式获取元素可能导致结果不可预测，推荐使用get()方法。
 * **推荐使用场景：** 当需要频繁的插入删除元素且需要使用双向链表时，推荐使用LinkedList。
 * 文档中使用了泛型，涉及以下泛型类型参数：
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

/**
 * LinkedList底层通过双向链表实现，每个节点都包含对前一个元素和后一个元素的引用。查询元素时，可以从头或从尾部遍历，插入和删除效率高，查询效率低。LinkedList允许元素为null。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LinkedList<T> {
  /**
   * LinkedList的构造函数。调用后，创建一个空的LinkedList实例。
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
   * 在LinkedList尾部插入元素。
   *
   * @param { T } element - 待插入的元素。
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
   * 在长度范围内任意位置插入指定元素，可插入位置区间为[0, LinkedList.length]，在linkedList.length处插入时即在linkedList尾部添加元素。
   *
   * @param { int } index - 插入位置索引，可插入位置区间为[0, LinkedList.length]，且需要小于等于int32_max即2147483647。
   * @param { T } element - 待插入元素。
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
   * 根据下标获取LinkedList中的元素。
   *
   * @param { int } index - 指定的下标值。需要小于等于int32_max即2147483647。
   * @returns { T } 根据下标查找到的元素，元素不存在返回undefined。
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
   * 在LinkedList头部插入元素。
   *
   * @param { T } element - 待插入的元素。
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addFirst(element: T): void;
  /**
   * 删除并返回LinkedList的第一个元素。
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
   * 删除并返回LinkedList的最后一个元素。
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
   * 判断LinkedList中是否包含指定元素。
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
   * 查找指定元素第一次出现时的下标值，查找失败返回-1。
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
   * 在LinkedList长度范围内，根据元素的下标值查找元素，并将其删除。
   *
   * @param { number } index - 指定元素的下标值，取值范围[0, LinkedList.length-1]，且需要小于等于int32_max即2147483647。
   * @returns { T } 返回删除的元素，如果元素为undefined则返回undefined，为null则返回null。
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
   * 删除查找到的第一个指定元素。
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
   * 删除第一次出现的指定元素。如果LinkedList中不存在指定元素，会抛出错误。
   *
   * @param { T } element - 指定元素。
   * @returns { boolean } 删除成功返回true，删除失败时返回false。
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
   * 删除最后一次出现的指定元素。如果LinkedList中不存在指定元素，会抛出错误。
   *
   * @param { T } element - 指定元素。
   * @returns { boolean } 删除成功返回true，删除失败返回false。
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
   * 查找指定元素最后一次出现时的下标值，查找失败返回-1。
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
   * @returns { T } 返回对应元素，若元素为空则返回undefined。
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
   * @returns { T } 返回对应元素，若元素为空则返回undefined。
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
   * 替换LinkedList指定位置的元素。
   *
   * @param { int } index - 查找的下标值。取值范围[0, LinkedList.length-1]，且需要小于等于int32_max即2147483647。
   * @param { T } element - 用来替换的元素。
   * @returns { T } 返回替换后的元素，如果元素为undefined则返回undefined，为null则返回null。
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
   * 通过回调函数来遍历LinkedList实例对象上的元素以及其下标。
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
   * 克隆一个与LinkedList相同的实例并返回。修改克隆后的实例并不会影响原实例。
   *
   * @returns { LinkedList<T> } 返回LinkedList对象的克隆实例。
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): LinkedList<T>;
  /**
   * 将当前LinkedList实例转换成数组并返回。
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
   * 返回一个迭代器，用于遍历LinkedList中的元素。
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
