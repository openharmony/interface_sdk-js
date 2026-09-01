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
 * Deque（double-ended queue）基于循环队列的数据结构实现，支持两端元素的插入和删除。Deque同时具备先进先出以及先进后出的特点，可根据操作端的不同同时作为队列和栈使用。当现有容量不足以容纳新插入的元素时，Deque会动态调整容量，每次扩容两倍，无需手动预设容量。
 * Deque和[Queue]{@link @ohos.util.Queue}相比，Deque允许在两端执行插入和删除操作，Queue只能在头部删除元素，尾部插入元素。
 * 与[ArrayList]{@link @ohos.util.ArrayList}相比，它们都支持在两端插入和删除元素，但Deque不支持中间插入。Deque在头部插入删除元素的效率高于ArrayList，而ArrayList随机访问元素的效率高于Deque。
 * **推荐使用场景：** 需要在集合两端频繁增删元素时，推荐使用Deque。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，类型
 *
 * > **说明**
 * >
 * > - 容器类使用静态语言实现，限制了内部存储方式和所支持的属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * Deque（double-ended queue）基于循环队列的数据结构实现，支持两端元素的插入和删除。Deque同时具备先进先出以及先进后出的特点，可根据操作端的不同同时作为队列和栈使用。当现有容量不足以容纳新插入的元素时，Deque会动态调整容量，每次扩容两倍，无需手动预设容量。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class Deque<T> {
  /**
   * Deque的构造函数，用于创建一个基于循环队列数据结构的空Deque实例。
   *
   * @throws { BusinessError } 10200012 - The Deque's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Deque的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取Deque的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 在Deque头部插入元素。插入成功后Deque的元素个数增加1。Deque在头部插入元素的效率高于ArrayList。
   *
   * @param { T } element - 在头部插入的元素，类型需与Deque实例化时指定的泛型类型T一致。
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insertFront(element: T): void;
  /**
   * 在Deque尾部插入元素。插入成功后Deque的元素个数增加1。
   *
   * @param { T } element - 在尾部插入的元素。
   * @throws { BusinessError } 10200011 - The insertEnd method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insertEnd(element: T): void;
  /**
   * 判断此Deque中是否包含指定元素。
   *
   * @param { T } element - 要在Deque中查找的指定元素，用于判断Deque是否包含该元素。类型需与Deque实例化时指定的泛型类型T一致。
   * @returns { boolean } 如果包含指定元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * 获取Deque实例的头元素，不删除该元素。调用后，Deque的内容和长度不变。如需删除并返回首元素，请使用popFirst。
   *
   * @returns { T } 返回Deque实例的头元素。
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
   * 获取Deque实例的尾元素，不删除该元素。调用后，Deque的内容和长度不变。如需删除并返回尾元素，请使用popLast。
   *
   * @returns { T } 返回Deque实例的尾元素。
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
   * 删除并返回Deque的首元素。删除成功后Deque的元素个数减少1。Deque在头部删除元素的效率高于ArrayList。
   *
   * @returns { T } 返回被删除的首元素。
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  popFirst(): T;

  /**
   * 删除并返回Deque的尾元素。删除成功后Deque的元素个数减少1。
   *
   * @returns { T } 返回被删除的尾元素。
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  popLast(): T;

  /**
   * 通过回调函数遍历Deque实例中的每个元素。
   *
   * @param { function } callbackFn - 遍历每个元素时执行的回调函数，执行时的this值可通过thisArg参数指定。在回调函数执行过程中，不建议修改Deque（如插入或删除元素），否则可能导致遍历行为异常。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当需要改变回调函数中的this指向时传入此参数；不传入时默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数遍历Deque实例中的每个元素。
   *
   * @param { DequeForEachCb<T> } callbackFn - 遍历每个元素时执行的回调函数，执行时的this值可通过thisArg参数指定。在回调函数执行过程中，不建议修改Deque（如插入或删除元素），
   * 否则可能导致遍历行为异常。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: DequeForEachCb<T>): void;
  /**
   * 获取指定索引值对应位置的元素。
   *
   * @param { int } index - 元素的位置索引。需要小于等于int32_max即2147483647。
   *     取值限定为整数。
   * @returns { T } 容器中对应索引值为index的元素。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  [index: int]: T;
  /**
   * 返回一个迭代器，按插入顺序遍历Deque中的元素，迭代器每项为T类型的元素。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器，用于遍历Deque实例中的所有元素。
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
 * Deque中forEach方法的回调函数。
 *
 * @param { T } value - 当前遍历到的元素。
 * @param { int } index - 当前遍历到的下标值。
 * @param { Deque<T> } deque - 当前调用forEach方法的实例对象。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type DequeForEachCb<T> = (value: T, index: int, deque: Deque<T>) => void;

export default Deque;
