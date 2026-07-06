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
 * HashSet基于[HashMap]{@link @ohos.util.HashMap}实现。在HashSet中，仅处理value对象。
 * HashSet和[TreeSet]{@link @ohos.util.TreeSet}相比，HashSet中的数据按Hash值排序，因此元素的插入顺序与遍历时的顺序可能不一致，
 * 而TreeSet则是按照元素的自然排序或者自定义比较器进行有序存储。它们集合中的元素都不允许重复，HashSet允许插入null值，
 * TreeSet不建议插入null值，会影响排序结果。
 * **推荐使用场景：** 可以利用HashSet不重复的特性，当需要不重复的集合或需要去重某个集合的时候使用。
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
 * HashSet基于HashMap实现。在HashSet中，仅处理value对象。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class HashSet<T> {
  /**
   * HashSet的构造函数。
   *
   * @throws { BusinessError } 10200012 - The HashSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * HashSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取HashSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 判断HashSet是否为空。
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
   * 判断HashSet是否包含指定元素。
   *
   * @param { T } value - 指定元素。
   * @returns { boolean } 包含指定元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(value: T): boolean;
  /**
   * 向HashSet添加元素。
   *
   * @param { T } value - 添加成员数据。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(value: T): boolean;
  /**
   * 从HashSet中删除指定的元素。
   *
   * @param { T } value - 指定删除的元素。
   * @returns { boolean } 成功删除指定元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(value: T): boolean;
  /**
   * 清除HashSet中的所有元素，并将length置为0。
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
   * 在遍历过程中对每个元素调用一次回调函数。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object): void;

  /**
   * 遍历HashSet中的所有元素，并对每个元素执行回调函数。
   *
   * @param { HashSetCbFn<T> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: HashSetCbFn<T>): void;

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
   * 返回包含此映射中所有键值对的新迭代器对象。
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
   * @returns { IterableIterator<T> } HashSet的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;
}

/**
 * HashSet的回调函数类型。
 *
 * @param { T } value - 当前正在处理的元素。
 * @param { T } key - [已废弃] HashSet不使用键值对，此参数仅为API兼容性保留。
 * @param { HashSet<T> } set - 当前正在遍历的HashSet实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type HashSetCbFn<T> = (value: T, key: T, set: HashSet<T>) => void;

export default HashSet;