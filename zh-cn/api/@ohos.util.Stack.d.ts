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
 * Stack基于数组的数据结构实现，特点是先进后出，只能在一端进行数据的插入和删除。
 * Stack和[Queue]{@link @ohos.util.Queue}相比，Queue基于循环队列实现，在尾部增加元素在头部删除元素；而Stack只在一端进行操作。
 * **推荐使用场景：** 一般符合先进后出的场景可以使用Stack。
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
 * Stack基于数组的数据结构实现，特点是先进后出，只能在一端进行数据的插入和删除。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class Stack<T> {
  /**
   * Stack的构造函数。
   *
   * @throws { BusinessError } 10200012 - The Stack's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Stack的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取Stack的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 判断栈是否为空。
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
   * 返回栈顶元素，栈为空时返回undefined。
   *
   * @returns { T } 返回栈顶元素，栈为空时返回undefined。
   * @throws { BusinessError } 10200011 - The peek method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  peek(): T;

  /**
   * 删除栈顶元素并返回，栈为空时返回undefined。
   *
   * @returns { T } 返回栈顶元素，栈为空时返回undefined。
   * @throws { BusinessError } 10200011 - The pop method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  pop(): T;

  /**
   * 在栈顶插入元素，并返回该元素。
   *
   * @param { T } item - 添加进去的元素。
   * @returns { T } 返回被添加进去的元素。
   * @throws { BusinessError } 10200011 - The push method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  push(item: T): T;
  /**
   * 查找指定元素首次出现的下标值，查找失败则返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { int } 对应元素下标值，查找失败则返回-1。
   * @throws { BusinessError } 10200011 - The locate method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  locate(element: T): int;
  /**
   * 在遍历Stack实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, stack?: Stack<T>) => void, thisArg?: Object): void;

  /**
   * 在遍历Stack实例对象中每一个元素的过程中，对每个元素执行回调函数。
   *
   * @param { StackForEachCb } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackfn: StackForEachCb<T>): void;

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
 * Stack的回调函数类型。
 *
 * @param { T } value - 当前遍历到的元素。
 * @param { int } index - 当前遍历到的下标值。
 *     该值为整数。
 * @param { Stack<T> } stack - 当前正在遍历的Stack实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type StackForEachCb<T> = (value: T, index: int, stack: Stack<T>) => void;

export default Stack;