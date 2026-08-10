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
 * TreeSet基于[TreeMap]{@link @ohos.util.TreeMap}实现，在TreeSet中，仅处理元素的值（value），不单独处理键（key）。
 * TreeSet的每个元素在底层TreeMap中同时作为key和value存储，因此元素中value唯一且有序。
 * 关于TreeMap的详细实现机制，请参见[TreeMap]{@link @ohos.util.TreeMap}。
 * TreeSet和[HashSet]{@link @ohos.util.HashSet}中的元素都不允许重复。HashSet中的数据无序存放，而TreeSet是有序存放。
 * HashSet允许插入null值，但TreeSet不建议插入null值，可能会影响排序结果。
 * **推荐使用场景：** TreeSet适用于需要有序存储和遍历集合的场景，如：有序数据展示、排名与排序系统、
 * 需要获取排序相邻元素的场景或自动排序插入等。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，表示TreeSet中元素的类型。
 *
 * > **说明**
 * >
 * > - 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * TreeSet基于[TreeMap]{@link @ohos.util.TreeMap}实现，在TreeSet中，仅处理元素的值（value），不单独处理键（key）。
 * TreeSet的每个元素在底层TreeMap中同时作为key和value存储，因此元素中value唯一且有序。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class TreeSet<T> {
  /**
   * TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。当插入自定义类型时，必须提供比较函数。
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
   * TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。当插入自定义类型时，必须提供比较函数。
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
   * 判断容器中是否包含指定元素。
   *
   * @param { T } value - 要判断是否存在于容器中的目标元素。
   * @returns { boolean } 包含指定元素返回true，不包含指定元素返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(value: T): boolean;
  /**
   * 向容器中添加指定元素。不建议插入null值，可能会影响排序结果；添加自定义类型元素时，需确保TreeSet在构造时已提供比较函数。
   *
   * @param { T } value - 向TreeSet中添加的值元素。
   * @returns { boolean } 成功添加新元素至容器返回true，当元素已存在时返回false。
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
   * @param { T } value - 要从容器中删除的目标元素。
   * @returns { boolean } 成功删除元素返回true，指定元素不存在返回false。
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
   * 获取容器中排序第一的元素，为空时返回undefined。
   *
   * @returns { T } 返回排序第一的数据，为空时返回undefined。
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
   * @returns { T } 返回排序最后的数据，为空时返回undefined。
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
   * @param { T } key - 作为查找基准的元素值，用于定位排序中比该元素靠前一位的数据。
   * @returns { T } 返回排序中传入元素前一位的数据，为空时返回undefined。
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
   * @param { T } key - 作为查找基准的元素，用于定位排序中比该元素靠后一位的数据。
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
   * @returns { T } 返回删除的数据，为空时返回undefined。
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
   * @returns { T } 返回删除的数据，为空时返回undefined。
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
   * 通过回调函数来遍历实例对象上的元素。
   *
   * @param { function } callbackFn - 遍历实例对象中每个元素时调用的回调函数，开发者可在回调中对元素及其下标进行自定义处理。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当需要在回调函数中使用特定的this上下文（如访问外部对象属性）时传入此参数。
   *     不传入时默认值为当前实例对象，回调函数中的this指向TreeSet实例本身。
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
   * 返回包含此容器中元素值的新迭代器对象。
   *
   * @returns { IterableIterator<T> } 返回包含TreeSet中所有元素的迭代器。
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * 返回包含此容器中元素的新迭代器对象，每个元素以[value, value]的形式返回。
   *
   * @returns { IterableIterator<[T, T]> } 返回包含TreeSet中所有元素键值对的迭代器对象，每个键值对中键与值相同，均为元素本身。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * 返回一个迭代器，迭代器的每一项为容器中的元素值。
   *
   * @returns { IterableIterator<T> } 返回包含TreeSet中所有元素的迭代器。
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