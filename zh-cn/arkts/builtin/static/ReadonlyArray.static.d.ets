'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 只读数组，提供读取元素的方法。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ReadonlyArray<out T> extends ConcatArray<T> {
  /**
   * 合并两个或多个数组。
   *
   * @param { FixedArray<ConcatArray<T>> } items - 待合并的数组。
   * @returns { Array<T> } 合并后的新数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  concat(...items: FixedArray<ConcatArray<T>>): Array<T>;

  /**
   * 返回一个新的迭代器对象，其中包含数组中每个索引对应的键值对。
   *
   * @returns { IterableIterator<[int, T]> } 新的迭代器对象。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  entries(): IterableIterator<[int, T]>;

  /**
   * 检测数组中的所有元素是否都通过指定函数实现的测试。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { boolean } 如果所有元素都通过测试则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  every(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): boolean;

  /**
   * 创建一个新数组，其中包含所有通过指定函数实现的测试的元素。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { Array<T> } 由通过测试的元素组成的新数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  filter(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): Array<T>;

  /**
   * 返回数组中第一个满足指定测试函数的元素。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { T | undefined } 第一个满足测试条件的元素，若不存在则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  find(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): T | undefined;

  /**
   * 返回数组中最后一个满足指定测试函数的元素。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { T | undefined } 最后一个满足测试条件的元素，若不存在则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findLast(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): T | undefined;

  /**
   * 返回数组中第一个满足指定测试函数的元素的索引。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { int } 第一个满足测试条件的元素的索引，若不存在则返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findIndex(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): int;

  /**
   * 返回数组中最后一个满足指定测试函数的元素的索引。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { int } 最后一个满足测试条件的元素的索引，若不存在则返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  findLastIndex(predicate: (value: T, index: int, obj: ReadonlyArray<T>) => boolean): int;

  /**
   * 对数组中的每个元素执行一次指定的函数。
   *
   * @param { Function } action - 对每个元素执行的函数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  forEach(action: (value: T, index: int, array: ReadonlyArray<T>) => void): void;

  /**
   * 将数组中的所有元素连接为一个字符串。
   *
   * @param { string } [separator] - 用于分隔相邻元素的字符串。
   * @returns { string } 由所有数组元素连接而成的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  join(separator?: string): string;

  /**
   * 判断数组中是否包含指定的值。
   *
   * @param { T } searchElement - 待查找的值。
   * @param { int } [fromIndex] - 开始查找的数组位置。
   *     <br>取值约束：应为整数。
   * @returns { boolean } 如果找到该值则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  includes(searchElement: T, fromIndex?: int): boolean;

  /**
   * 返回指定元素在数组中首次出现的索引。
   *
   * @param { T } searchElement - 待查找的元素。
   * @param { int } [fromIndex] - 开始查找的数组位置。
   *     <br>取值约束：应为整数。
   * @returns { int } 该元素首次出现的索引，未找到时返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  indexOf(searchElement: T, fromIndex?: int): int;

  /**
   * 返回一个新的迭代器对象，其中包含数组中每个索引对应的键。
   *
   * @returns { IterableIterator<int> } 包含所有键的新迭代器对象。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  keys(): IterableIterator<int>;

  /**
   * 返回指定元素在数组中最后一次出现的索引。
   *
   * @param { T } searchElement - 待查找的元素。
   * @returns { int } 该元素最后一次出现的索引，未找到时返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  lastIndexOf(searchElement: T): int;

  /**
   * 返回指定元素在数组中最后一次出现的索引。
   *
   * @param { T } searchElement - 待查找的元素。
   * @param { int } [fromIndex] - 开始反向查找的数组位置。
   *     <br>取值约束：应为整数。
   * @returns { int } 该元素最后一次出现的索引，未找到时返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  lastIndexOf(searchElement: T, fromIndex?: int): int;

  /**
   * 使用映射函数转换数组中的每个元素，并返回新的数组。
   *
   * @param { (value: T, index: int, array: ReadonlyArray<T>) => U } mapper - 用于转换每个元素的函数。
   * @returns { Array<U> } 由转换后的元素组成的新数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  map<U>(mapper: (value: T, index: int, array: ReadonlyArray<T>) => U): Array<U>;

  /**
   * 对累加器和数组中的每个元素应用指定函数，将数组归约为单个值。
   *
   * @param { Function } reducer - 对每个元素执行的函数。
   * @returns { T } 归约后得到的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduce(reducer: (previousValue: T, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => T): T;

  /**
   * 对累加器和数组中的每个元素应用指定函数，将数组归约为单个值。
   *
   * @param { Function } reducer - 对每个元素执行的函数。
   * @param { U } initialValue - 累加器的初始值。
   * @returns { U } 归约后得到的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduce<U>(reducer: (previousValue: U, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => U,
      initialValue: U): U;

  /**
   * 对累加器和数组中的每个元素从右向左应用指定函数，将数组归约为单个值。
   *
   * @param { Function } reducer - 对每个元素执行的函数。
   * @returns { T } 归约后得到的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduceRight(reducer: (previousValue: T, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => T): T;

  /**
   * 对累加器和数组中的每个元素从右向左应用指定函数，将数组归约为单个值。
   *
   * @param { Function } reducer - 对每个元素执行的函数。
   * @param { U } initialValue - 累加器的初始值。
   * @returns { U } 归约后得到的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  reduceRight<U>(reducer: (previousValue: U, currentValue: T, currentIndex: int, array: ReadonlyArray<T>) => U,
      initialValue: U): U;

  /**
   * 将数组的一部分浅拷贝到新数组中并返回。
   *
   * @param { int } [start] - 起始索引（包含），默认值为0。
   *     <br>取值约束：应为整数。
   * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
   *     <br>取值约束：应为整数。
   * @returns { Array<T> } 包含所提取元素的新数组。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  slice(start?: int, end?: int): Array<T>;

  /**
   * 检测数组中是否至少有一个元素通过指定函数实现的测试。
   *
   * @param { Function } predicate - 用于测试每个元素的函数。
   * @returns { boolean } 如果至少有一个元素通过测试则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  some(predicate: (value: T, index: int, array: ReadonlyArray<T>) => boolean): boolean;

  /**
   * 返回一个新的迭代器对象，其中包含数组中每个索引对应的值。
   *
   * @returns { IterableIterator<T> } 包含所有值的新迭代器对象。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  values(): IterableIterator<T>;
}
