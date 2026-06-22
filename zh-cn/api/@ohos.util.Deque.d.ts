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
 * Deque（double ended queue）基于循环队列的数据结构实现，支持两端元素的插入和删除，同时具备先进先出以及先进后出的特点。
 * Deque会根据实际需要动态调整容量，每次扩容两倍。
 * Deque和[Queue]{@link @ohos.util.Queue}相比，Deque允许在两端执行插入和删除操作，Queue只能在头部删除元素，尾部插入元素。
 * 与[ArrayList]{@link @ohos.util.ArrayList}相比，它们都支持在两端插入和删除元素，但Deque不支持中间插入。
 * Deque在头部插入删除元素的效率高于ArrayList，而ArrayList随机访问元素的效率高于Deque。
 * **推荐使用场景：** 需要在集合两端频繁增删元素时，推荐使用Deque。
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
 * Deque（double ended queue）是基于队列数据结构实现的序列容器，具备先进先出和先进后出的特点。
 * 支持在两端进行元素的插入和删除。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class Deque<T> {
  /**
   * Deque的构造函数。
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
   * 在deque头部插入元素。
   *
   * @param { T } element - 插入的元素。
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insertFront(element: T): void;
  /**
   * 在deque尾部插入元素。
   *
   * @param { T } element - 插入的元素。
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
   * @param { T } element - 指定的元素。
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
   * 获取Deque实例的头元素。
   *
   * @returns { T } 返回T类型的头元素。
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
   * 获取Deque实例的尾元素。
   *
   * @returns { T } 返回T类型的尾元素。
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
   * 删除并返回双端队列的首元素。
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
   * 删除并返回双端队列的尾元素。
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
   * 在遍历Deque实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object): void;

  /**
   * 遍历泛型Deque（双端队列）中的元素，并对每个元素执行回调函数。
   *
   * @param { DequeForEachCb<T> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: DequeForEachCb<T>): void;
  /**
   * 返回指定下标位置的元素。
   *
   * @param { int } index - 期望元素从0开始的下标。
   *     当index < 0或index >= deque.length时抛出异常。
   *     该值为整数。
   * @returns { T } deque中与指定下标匹配的元素。
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
 * Deque的forEach回调函数类型。
 *
 * @param { T } value - 当前正在处理的元素。
 * @param { int } index - 当前元素的下标。
 * @param { Deque<T> } deque - 当前正在遍历的Deque实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type DequeForEachCb<T> = (value: T, index: int, deque: Deque<T>) => void;

export default Deque;