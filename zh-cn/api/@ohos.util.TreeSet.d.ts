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
 * @file
 * @kit ArkTS
 */

/**
 * TreeSet基于[TreeMap]{@link @ohos.util.TreeMap}实现。在TreeSet中，仅处理value对象。
 * TreeSet可用于存储一系列值的集合，元素中value唯一且有序。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class TreeSet<T> {
  /**
   * TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。
   *
   * @param { function } [comparator] - 比较函数。
   *     comparator（可选）用户自定义的比较函数。
   *     firstValue（必填）前一项元素。
   *     secondValue（必填）后一项元素。
   * @throws { BusinessError } 10200012 - The TreeSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor(comparator?: (firstValue: T, secondValue: T) => boolean);

  /**
   * TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。
   *
   * @param { TreeSetComparator<T> } [comparator] - 比较函数。
   *     comparator（可选）用户自定义的比较函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  constructor(comparator?: TreeSetComparator<T>);

  /**
   * TreeSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取TreeSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 判断容器是否为空。
   *
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * 判断容器中是否包含指定元素。
   *
   * @param { T } value - 指定的元素。
   * @returns { boolean } boolean类型。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(value: T): boolean;
  /**
   * 向容器中添加一组数据。
   *
   * @param { T } value - 添加的成员数据。
   * @returns { boolean } 该元素是否已存在。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(value: T): boolean;
  /**
   * 删除指定的元素。
   *
   * @param { T } value - 指定的元素。
   * @returns { boolean } boolean类型（是否包含该元素）。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(value: T): boolean;
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
   * 获取容器中排序第一的数据，为空时返回undefined。
   *
   * @returns { T } 返回值或undefined。
   * @throws { BusinessError } 10200011 - The getFirstValue method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getFirstValue(): T;
  /**
   * 获取容器中排序最后的数据，为空时返回undefined。
   *
   * @returns { T } 返回值或undefined。
   * @throws { BusinessError } 10200011 - The getLastValue method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastValue(): T;
  /**
   * 获取容器中比传入元素排序靠前一位的元素，为空时返回undefined。
   *
   * @param { T } key - 对比的元素值。
   * @returns { T } 返回排序中对比元素前一位的数据，为空时返回undefined。
   * @throws { BusinessError } 10200011 - The getLowerValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getLowerValue(key: T): T;
  /**
   * 获取容器中比传入元素排序靠后一位的元素，为空时返回undefined。
   *
   * @param { T } key - 对比的元素。
   * @returns { T } 返回排序中传入元素后一位的数据。为空时返回undefined。
   * @throws { BusinessError } 10200011 - The getHigherValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getHigherValue(key: T): T;
  /**
   * 删除容器中排序最前的数据，为空时返回undefined。
   *
   * @returns { T } 排序最前的数据，为空时返回undefined。
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
   * 删除容器中排序最后的数据，为空时返回undefined。
   *
   * @returns { T } 排序最后的数据，为空时返回undefined。
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
   * 获取容器中比传入元素排序靠前一位的元素，如果key不存在，则返回undefined。
   *
   * @param { T } key - 对比的元素值。
   * @returns { T | undefined } 如果存在则返回指定key元素的前一位值，否则返回undefined。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getLowerValue(key: T): T | undefined;

  /**
   * 获取容器中比传入元素排序靠后一位的元素，如果key不存在，则返回undefined。
   *
   * @param { T } key - 对比的元素值。
   * @returns { T | undefined } 如果存在则返回指定key元素的后一位值，否则返回undefined。
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getHigherValue(key: T): T | undefined;

  /**
   * 通过回调函数来遍历实例对象上的元素及其下标。
   *
   * @param { function } callbackFn - 回调函数。
   *     callbackFn（必填）接受最多三个参数的函数。
   *     对每个元素调用的函数。
   * @param { Object } [thisArg] - this值。
   *     thisArg（可选）当callbackFn被调用时作为this值使用的对象。
   *     如果省略thisArg，则使用undefined作为this值。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: T, key?: T, set?: TreeSet<T>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数来遍历实例对象上的元素及其下标。
   *
   * @param { TreeSetForEachCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: TreeSetForEachCb<T>): void;

  /**
   * 返回包含此映射中键值的新迭代器对象。
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * 返回包含此映射中键值对的新迭代器对象。
   *
   * @returns { IterableIterator<[T, T]> }
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
   * @returns { IterableIterator<T> } TreeSet的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

}

/**
 * TreeSet的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { T } key - 当前元素的键（与value相同）。
 * @param { TreeSet<T> } set - 当前正在遍历的TreeSet实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeSetForEachCb<T> = (value: T, key: T, set: TreeSet<T>) => void

/**
 * TreeSet的比较器类型。
 *
 * @param { T } firstValue - 第一个比较值。
 * @param { T } secondValue - 第二个比较值。
 * @returns { double } - 比较结果。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeSetComparator<T> = (firstValue: T, secondValue: T) => double

export default TreeSet;