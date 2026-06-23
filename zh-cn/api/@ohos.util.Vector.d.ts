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
 * Vector是基于数组实现的线性数据结构。当Vector的内存用完时，会自动分配一块更大的连续内存区域，并将所有元素复制到新内存区域，回收当前内存区域。Vector可用于高效访问元素。
 * Vector和[ArrayList]{@link @ohos.util.ArrayList}都是基于数组实现，但Vector提供了更多的数组操作接口。两者都可以动态调整容量，Vector每次扩容为原来的两倍，ArrayList每次扩容为原来的1.5倍。
 * **推荐使用场景：** 当数据量较大时，推荐使用Vector。
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
   * 在Vector尾部添加元素。
   *
   * @param { T } element - 添加的成员数据。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  add(element: T): boolean;
  /**
   * 在长度范围内插入元素，后续元素向后移动。
   *
   * @param { T } element - 插入的成员数据。
   * @param { number } index - 插入数据的位置下标。
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
   * 根据下标删除元素，返回被删除的元素，后续元素前移。
   *
   * @param { number } index - 待删除元素的下标。
   * @returns { T } 返回删除的元素。如果Vector为空，返回undefined。如果下标越界，抛出异常。
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
   * 替换Vector实例中指定下标位置的元素。
   *
   * @param { number } index - 替换元素的下标位置。
   * @param { T } element - 替换的元素。
   * @returns { T } 返回替换后的新元素。
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
   * 从指定下标位置向后查找指定元素，并返回该元素的位置下标。
   *
   * @param { T } element - 指定元素。
   * @param { number } index - 开始查找的下标位置。
   * @returns { number } 返回指定元素的下标值，查找失败返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getLastIndexFrom(element: T, index: number): number;
  /**
   * 从指定下标位置向前查找指定元素，并返回该元素的位置下标。
   *
   * @param { T } element - 指定元素。
   * @param { number } index - 开始查找的下标位置。
   * @returns { number } 返回指定元素的下标值，查找失败返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  getIndexFrom(element: T, index: number): number;
  /**
   * 删除Vector实例中指定范围内的元素，包括起始位置但不包括结束位置的元素。
   *
   * @param { number } fromIndex - 起始位置的下标。
   * @param { number } toIndex - 结束位置的下标。
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
   * 为Vector设置新的长度。
   *
   * @param { number } newSize - 设置的新长度。
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
   * 扩容Vector实例。
   *
   * @param { number } newCapacity - 新容量。
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
   * 把Vector实例的容量调整为当前的元素个数。
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
   * 返回一个ES6迭代器，迭代器的每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  [Symbol.iterator](): IterableIterator<T>;
}

export default Vector;
