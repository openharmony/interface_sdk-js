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
 * HashMap底层采用数组、链表和红黑树实现，支持高效查询、插入和删除。HashMap存储内容基于key-value的键值对映射，
 * 不允许重复的key，且一个key只能对应一个value。
 * HashMap和[TreeMap]{@link @ohos.util.TreeMap}相比，HashMap依据键的hashCode存取数据，访问速度较快。
 * 而TreeMap是有序存储和访问，效率较低。
 * [HashSet]{@link @ohos.util.HashSet}基于HashMap实现。HashMap的输入参数由key、value两个值组成。
 * 在HashSet中，只对value对象进行处理。
 * **推荐使用场景：** 需要快速存取、删除以及插入键值对数据时，推荐使用HashMap。
 * 文档中使用了泛型，包含以下泛型标记符：<br>
 *
 * - K：Key，键<br>
 * - V：Value，值
 *
 * > **说明**
 * >
 * > - 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * @file
 * @kit ArkTS
 */

/**
 * HashMap底层采用数组、链表和红黑树实现，支持高效查询、插入和删除。
 * HashMap实例中的元素为键值对的映射，每个键必须唯一且只能对应一个值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class HashMap<K, V> {
  /**
   * HashMap的构造函数。
   *
   * @throws { BusinessError } 10200012 - The HashMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * HashMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取HashMap的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 判断该HashMap是否为空。
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
   * 判断此HashMap中是否包含指定key。
   *
   * @param { K } key - 指定Key。
   * @returns { boolean } 包含指定Key返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * 判断此HashMap中是否包含指定value。
   *
   * @param { V } value - 指定value。
   * @returns { boolean } 包含指定的value返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * 获取指定key对应的value，不存在返回undefined。
   *
   * @param { K } key - 查找的指定key。
   * @returns { V } 返回key映射的value值。
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: K): V;

  /**
   * 获取此容器中指定key对应的值。如果未获取到，则返回undefined。
   *
   * @param { K } key - 查找的指定key。
   * @returns { V | undefined } 值或undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: K): V | undefined;

  /**
   * 将一个HashMap中的所有元素组添加到另一个HashMap中。
   *
   * @param { HashMap<K, V> } map - 被添加元素的HashMap。
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  setAll(map: HashMap<K, V>): void;
  /**
   * 向HashMap中添加或更新一组数据。
   *
   * @param { K } key - 添加或更新成员数据的键名。
   * @param { V } value - 添加或更新成员数据的值。
   * @returns { Object } 返回添加或更新后的HashMap。
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * 删除指定key所对应元素。
   *
   * @param { K } key - 指定key。
   * @returns { V } 返回删除元素的值。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: K): V;

  /**
   * 删除此容器中指定key所对应的元素。
   *
   * @param { K } key - 指定key。
   * @returns { V | undefined } 如果删除了指定key则返回其关联的值，否则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: K): V | undefined;

  /**
   * 清除HashMap中的所有元素，并将length置为0。
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
   * 返回新迭代器对象，包含此映射中所有的键。
   *
   * @returns { IterableIterator<K> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  keys(): IterableIterator<K>;
  /**
   * 返回新迭代器对象，包含此映射中所有键对应的值。
   *
   * @returns { IterableIterator<V> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<V>;
  /**
   * 用于替换指定键对应的值。
   *
   * @param { K } key - 依据key指定替换的元素。
   * @param { V } newValue - 替换成员数据的值。
   * @returns { boolean } 是否成功对已有数据进行替换，成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  replace(key: K, newValue: V): boolean;
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
  forEach(callbackFn: (value?: V, key?: K, map?: HashMap<K, V>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数遍历此容器中的元素，并获取其位置索引。
   *
   * @param { HashMapCbFn<K, V> } callbackFn - 用于遍历容器中元素的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: HashMapCbFn<K, V>): void;

  /**
   * 返回包含此映射中包含的键值对的新迭代器对象。
   *
   * @returns { IterableIterator<[K, V]> } 返回一个迭代器。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * 返回一个迭代器，每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<[K, V]> } HashMap的迭代器。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;
}

/**
 * HashMap的回调函数类型。
 *
 * @param { V } value - 当前键值对的值。
 * @param { K } key - 当前键值对的键。
 * @param { HashMap<K, V> } map - 当前正在遍历的HashMap实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type HashMapCbFn<K, V> = (value: V, key: K, map: HashMap<K, V>) => void;

export default HashMap;