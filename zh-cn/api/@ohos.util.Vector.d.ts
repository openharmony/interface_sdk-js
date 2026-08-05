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
 * Vector是一种线性数据结构，底层基于数组实现，解决了需要动态扩容、高效随机访问的数据存储问题。
 * 当Vector的内存用尽时，会自动分配更大的连续内存区，将原先的元素复制到新的内存区，并释放旧的内存区。
 * 使用Vector能够高效快速地访问元素，其2倍扩容策略减少了频繁的内存重分配，同时丰富的操作接口提供了更灵活的数据管理能力。
 * Vector和[ArrayList]{@link @ohos.util.ArrayList}相似，都是基于数组实现，但Vector提供了更多操作数组的接口。
 * 它们都可以动态调整容量，但Vector每次扩容增加1倍，ArrayList只扩容0.5倍。
 * **推荐使用场景：** 当需要频繁按索引随机访问元素且数据量较大时，推荐使用Vector来存取数据。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，类
 *
 * > **说明**
 * >
 * > - 此模块提供的接口从API version 9开始废弃。建议使用
 * > [@ohos.util.ArrayList]{@link @ohos.util.ArrayList}。
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.util.ArrayList
 */
declare class Vector<T> {
  /**
   * Vector的构造函数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  constructor();
  /**
   * Vector的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  length: number;
  /**
   * 在Vector中尾部插入元素，插入成功后Vector的长度增加1。
   *
   * @param { T } element - 添加的元素。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  add(element: T): boolean;
  /**
   * 在长度范围内的指定位置插入元素，并将该位置后续元素向右移动。
   *
   * @param { T } element - 被插入的元素。
   * @param { number } index - 被插入的位置索引，取值范围为[0, length]。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  insert(element: T, index: number): void;
  /**
   * 判断此Vector中是否包含指定元素。
   *
   * @param { T } element - 指定的元素。
   * @returns { boolean } 如果包含指定元素返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  has(element: T): boolean;
  /**
   * 获取指定下标对应的元素。
   *
   * @param { number } index - 查找的下标位置。
   * @returns { T } 返回指定下标对应的元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  get(index: number): T;
  /**
   * 获取指定元素第一次出现的下标值，如果未找到则返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { number } 返回指定元素第一次出现时的下标值，查找失败返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getIndexOf(element: T): number;
  /**
   * 获取Vector实例中的第一个元素。
   *
   * @returns { T } 返回Vector实例中的第一个元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getFirstElement(): T;
  /**
   * 获取Vector实例中的最后一个元素。
   *
   * @returns { T } 返回Vector实例中的最后一个元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getLastElement(): T;
  /**
   * 根据下标值找到对应元素并删除，同时将该位置后续元素向左移动，返回被删除的元素。index取值范围为[0, length-1]。
   *
   * @param { number } index - 要删除元素的位置下标值。
   * @returns { T } 返回被删除的元素。Vector为空时返回undefined，下标越界时抛出异常。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  removeByIndex(index: number): T;
  /**
   * 删除指定元素第一次出现的元素。
   *
   * @param { T } element - 待删除的元素。
   * @returns { boolean } 成功删除元素返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  remove(element: T): boolean;
  /**
   * 将此Vector中指定位置的元素替换为指定元素。
   *
   * @param { number } index - 查找的下标值，取值范围为[0, length-1]。
   * @param { T } element - 用来替换的元素。
   * @returns { T } 返回被替换位置上的原元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  set(index: number, element: T): T;
  /**
   * 获取指定元素最后一次出现的下标值，如果未找到则返回-1。
   *
   * @param { T } element - 指定元素。
   * @returns { number } 返回指定元素最后一次出现时的下标值，查找失败返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getLastIndexOf(element: T): number;
  /**
   * 从指定索引向低索引方向搜索，返回该元素的下标索引。
   *
   * @param { T } element - 要查找的元素。
   * @param { number } index - 从指定索引开始搜索，取值范围[0, length-1]。超出范围时返回-1。
   * @returns { number } 返回该元素的下标，如果查找失败，则返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getLastIndexFrom(element: T, index: number): number;
  /**
   * 从指定索引向高索引方向搜索，返回该元素的下标索引。
   *
   * @param { T } element - 要查找的元素。
   * @param { number } index - 从指定索引向前搜索的起始位置，取值范围为[0, length-1]。
   * @returns { number } 返回该元素的下标，如果查找失败，则返回 -1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getIndexFrom(element: T, index: number): number;
  /**
   * 从一段范围内删除元素，包括起始值但不包括终止值，删除后后续元素向左移动，Vector的长度相应减少。
   *
   * @param { number } fromIndex - 起始下标，包含该下标对应的元素。
   * @param { number } toIndex - 终止下标，不包含该下标对应的元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  removeByRange(fromIndex: number, toIndex: number): void;
  /**
   * 对Vector中的所有元素进行替换，并返回替换后的元素。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } thisArg - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  replaceAllElements(callbackFn: (value: T, index?: number, vector?: Vector<T>) => T, thisArg?: Object): void;
  /**
   * 通过回调函数来遍历Vector实例对象上的元素以及元素对应的下标。
   *
   * @param { function } callbackFn - 回调函数。
   * @param { Object } thisArg - callbackFn被调用时用作this值，默认值为当前实例对象。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  forEach(callbackFn: (value: T, index?: number, vector?: Vector<T>) => void, thisArg?: Object): void;
  /**
   * 对Vector中的元素进行排序。
   *
   * @param { function } comparator - 排序的回调函数。默认值为当前实例对象。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  sort(comparator?: (firstValue: T, secondValue: T) => number): void;
  /**
   * 获取Vector实例中指定范围内的元素，包括起始位置但不包括结束位置的元素，作为一个新的Vector实例返回。
   *
   * @param { number } fromIndex - 起始位置的下标。
   * @param { number } toIndex - 结束位置的下标。
   * @returns { Vector<T> } 返回新的Vector实例。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  subVector(fromIndex: number, toIndex: number): Vector<T>;
  /**
   * 清除Vector中的所有元素，并将length置为0。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  clear(): void;
  /**
   * 克隆一个实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。
   *
   * @returns { Vector<T> } 返回新的Vector实例。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  clone(): Vector<T>;
  /**
   * 设置Vector实例的元素个数。若newSize大于当前元素个数则进行扩容，若newSize小于当前元素个数则截断删除超出部分的元素。newSize=0时清空所有元素，length置为0。
   *
   * @param { number } newSize - 设置的新长度，取值原则：newSize ≥ 0。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  setLength(newSize: number): void;
  /**
   * 获取Vector实例的容量大小。
   *
   * @returns { number } 返回Vector的容量。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getCapacity(): number;
  /**
   * 将Vector实例转换为数组。
   *
   * @returns { Array<T> } 返回数组。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  convertToArray(): Array<T>;
  /**
   * 判断Vector是否为空。
   *
   * @returns { boolean } 为空返回true，不为空返回false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  isEmpty(): boolean;
  /**
   * 如果传入的新容量大于或等于当前Vector实例的元素个数，将容量变更为新容量；如果传入的新容量小于当前Vector实例的元素个数，不做变更。
   *
   * @param { number } newCapacity - 新容量，需大于或等于当前Vector中的元素个数。传入值小于元素个数时不生效。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  increaseCapacityTo(newCapacity: number): void;
  /**
   * 用逗号（,）将Vector实例中的元素拼接成字符串。
   *
   * @returns { string } 返回对应字符串。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  toString(): string;
  /**
   * 把容量限制为当前的length大小。适用于在完成元素添加后释放多余的内存空间，优化内存使用。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  trimToCurrentLength(): void;
  /**
   * 将Vector中的元素复制到指定数组中，覆盖数组中相同下标的元素。
   *
   * @param { Array<T> } array - 接收Vector中复制元素的数组。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  copyToArray(array: Array<T>): void;
  /**
   * 返回一个迭代器，用于遍历Vector中的元素。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器，用于遍历Vector实例中的元素。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  [Symbol.iterator](): IterableIterator<T>;
}

export default Vector;
