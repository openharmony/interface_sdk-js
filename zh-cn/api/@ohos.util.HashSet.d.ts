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
 * HashSet是一种非线性容器，用于存储不重复的元素集合，支持高效的元素增删和存在性判断。HashSet基于[HashMap]{@link @ohos.util.HashMap}实现，仅操作元素的值对象，不涉及键的概念。
 * HashSet和[TreeSet]{@link @ohos.util.TreeSet}相比，HashSet中的数据按Hash值分布存储，因此元素的插入顺序与遍历时的顺序可能不一致，
 * 而TreeSet则是按照元素的自然排序或者自定义比较器进行有序存储。这两种集合中的元素都不允许重复，HashSet允许插入null值，
 * TreeSet不建议插入null值，会影响排序结果。
 * **推荐使用场景：** 当需要确保集合中元素不重复，或需要去除已有集合中的重复元素时，推荐使用HashSet；也可利用HashSet基于哈希的O(1)查找特性进行高效的元素存在性判断。
 * 文档中使用了泛型，涉及以下泛型标记符：
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
 * HashSet是一种非线性容器，用于存储不重复的元素集合，支持高效的元素增删和存在性判断。HashSet基于HashMap实现，仅操作元素的值对象，不涉及键的概念。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class HashSet<T> {
  /**
   * HashSet的构造函数，用于创建一个空的HashSet实例。
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
   * 判断HashSet是否包含指定元素，基于哈希值进行查找，具有O(1)的时间复杂度。
   *
   * @param { T } value - 指定要查找的元素。
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
   * 向HashSet添加元素。成功添加后HashSet的length增加1；若待添加元素已存在则不会重复添加，返回false且length不变。
   *
   * @param { T } value - 要添加的元素。
   * @returns { boolean } 成功添加元素返回true，若元素已存在则返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(value: T): boolean;
  /**
   * 从HashSet中删除指定的元素。成功删除后HashSet的length减少1；若指定元素不存在则集合不变，返回false。
   *
   * @param { T } value - 指定要删除的元素。
   * @returns { boolean } 成功删除指定元素返回true，若指定元素不存在则返回false。
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
   * 在遍历过程中对每个元素调用一次回调函数。不建议在forEach回调中使用add、remove方法修改HashSet，因其可能导致迭代过程中的状态异常。
   *
   * @param { function } callbackFn - 回调函数，在遍历过程中对每个元素调用一次。回调参数包括value、key和set，详见callbackFn的参数说明。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当需要改变回调函数内this指向时传入此参数，不传入时默认值为当前实例对象。
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
   * 返回包含此HashSet中所有值的新迭代器对象。
   * > **说明：**
   * >
   * > 不建议在values迭代过程中使用add、remove方法，因其可能导致迭代过程中的状态异常，建议使用for循环来进行安全的插入与删除操作。
   *
   * @returns { IterableIterator<T> } 返回包含此HashSet中所有值的迭代器对象。
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * 返回包含此HashSet中所有元素的新迭代器对象，每个元素以[value, value]形式返回。
   * > **说明：**
   * >
   * > 不建议在entries迭代过程中使用add、remove方法，因其可能导致迭代过程中的状态异常，建议使用for循环来进行安全的插入与删除操作。
   *
   * @returns { IterableIterator<[T, T]> } 返回包含此HashSet中所有元素的迭代器对象。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * 返回一个迭代器，迭代器的每一项为HashSet中的元素。
   * > **说明：**
   * >
   * > 不建议在Symbol.iterator中使用add、remove方法，因其可能导致迭代过程中的状态异常，建议使用for循环来进行安全的插入与删除操作。
   *
   * @returns { IterableIterator<T> } 返回包含此HashSet中所有元素的迭代器对象。
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * 返回一个迭代器，迭代器的每一项为HashSet中的元素。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;
}

/**
 * HashSet中forEach方法的回调函数。
 *
 * @param { T } value - 当前遍历到的元素键值对的值。
 * @param { T } key - 当前遍历到的元素键值对的键（和value相同）。
 * @param { HashSet<T> } set - 当前调用forEach方法的实例对象，默认值为当前实例对象。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type HashSetCbFn<T> = (value: T, key: T, set: HashSet<T>) => void;

export default HashSet;