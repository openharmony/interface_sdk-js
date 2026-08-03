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
 * LightWeightSet可用于存储一系列值的集合，存储元素中value唯一。
 * LightWeightSet依据泛型定义，采用轻量级结构，初始默认容量大小为8，每次扩容为原始容量的两倍。
 * 集合中value值的查找依赖于hash算法，通过一个数组存储hash值，然后根据hash值映射到对应的存储位置获取value。
 * LightWeightSet和[HashSet]{@link @ohos.util.HashSet}都是用于存储元素的集合类型，但LightWeightSet的占用内存更小。
 * **推荐使用场景：** 当需要存储一组唯一元素、对数据进行去重、或需要基于hash快速查找元素时，推荐使用LightWeightSet。
 * 相比HashSet，LightWeightSet占用内存更小，适合内存敏感场景下的小规模数据存储与查找。
 * 文档中使用了泛型，涉及以下泛型标记符：
 *
 * - T：Type，表示LightWeightSet中存储元素的类型。
 *
 * > **说明：**
 * >
 * > - 容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法。
 *
 * 规格限制：当LightWeightSet存入的value为number类型且值大于INT32_MAX（2147483647）或小于INT32_MIN（-2147483648）时，
 * 针对LightWeightSet的操作，其结果可能与预期不一致。这是因为，当value为number类型且值大于INT32_MAX或小于INT32_MIN时，存储结构会发生改变。
 * 例如在以下示例中，针对value的计算，1758783600000大于INT32_MAX，此时会通过TaggedDouble存储；1758783600在INT32范围内，此时会通过TaggedInt存储。
 * 由于以上存储方式的差异，当对其进行hash算法即会计算出不同的hash值，从而导致映射结果不同，产生与预期不一致的现象。
 *
 * @file
 * @kit ArkTS
 */

/**
 * LightWeightSet可用于存储一系列值的集合，存储元素中value值唯一。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightSet<T> {
  /**
   * LightWeightSet的构造函数。
   *
   * @throws { BusinessError } 10200012 - The LightWeightSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * LightWeightSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * 获取LightWeightSet的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * 向容器中添加数据。若添加的元素已存在于容器中，则不会重复添加，返回false。
   *
   * @param { T } obj - 添加的成员数据。若添加的值已存在于容器中，则不会重复添加。
   * @returns { boolean } 成功添加元素返回true，要添加的元素已存在时返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(obj: T): boolean;
  /**
   * 将另一个容器的所有元素添加到当前容器。若源容器中的元素已存在于当前容器中，则跳过该元素不重复添加。
   *
   * @param { LightWeightSet<T> } set - 提供添加元素的LightWeightSet。
   * @returns { boolean } 成功添加元素返回true，否则返回false。
   * @throws { BusinessError } 10200011 - The addAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addAll(set: LightWeightSet<T>): boolean;
  /**
   * 判断容器中是否包含指定set中的所有元素。当容器中存储的value为number类型且值大于INT32_MAX(2147483647)或小于INT32_MIN(-2147483648)时，判断结果可能与预期不一致，详见规格限制。
   *
   * @param { LightWeightSet<T> } set - 用于判断当前容器是否包含其所有元素的目标集合。
   * @returns { boolean } true表示容器中包含目标集合中的所有元素，false表示容器中不包含目标集合中的全部元素。
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(set: LightWeightSet<T>): boolean;
  /**
   * 判断容器中是否包含指定元素。
   *
   * @param { T } key - 指定查找的元素，用于判断容器中是否包含该元素。
   * @returns { boolean } true表示容器中包含指定元素，false表示容器中不包含指定元素。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(key: T): boolean;
  /**
   * 判断此容器与obj的构成元素是否相同。
   *
   * > **说明：**
   * >
   * > 此接口从API version 8开始支持，从API version 12开始废弃。无替代接口。
   *
   * @param { Object } obj - 比较对象。
   * @returns { boolean } 当obj为仅含string或number的LightWeightSet或数组，且对象内部元素构成相同时，返回true；其他情况返回false。
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 12
   */
  equal(obj: Object): boolean;
  /**
   * 将当前LightWeightSet扩容至指定容量。如果传入的容量值大于或等于当前LightWeightSet中的元素个数，将容量变更为新容量，小于则不会变更。
   *
   * @param { int } minimumCapacity - 需要容纳的元素数量。若传入值小于当前元素个数，则不会变更容量。
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of minimumCapacity is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(minimumCapacity: int): void;
  /**
   * 获取指定元素所对应的下标。
   *
   * @param { T } key - 查找的指定key。
   * @returns { int } 在LightWeightSet中指定数据的下标。若LightWeightSet中没有要查找的元素，则返回一个负值。
   *     表示目标哈希值应该插入的位置，插入位置是从1开始计数的，负号表示这是一个插入位置而不是索引。
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(key: T): int;
  /**
   * 删除并返回指定元素。
   *
   * @param { T } key - 指定要删除的元素。
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: T): T;

  /**
   * 删除LightWeightSet容器中指定Object类型的对象。
   *
   * @param { T } key - 待删除元素的key。
   * @returns { T | undefined } 如果存在则返回被删除的值，否则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: T): T | undefined;

  /**
   * 删除指定下标所对应的元素。
   *
   * @param { int } index - 指定下标，取值范围[0, length-1]，且需要小于等于INT32_MAX即2147483647。超出有效下标范围时返回false。
   * @returns { boolean } 成功删除元素返回true，指定下标不存在或超出范围时返回false。
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeAt(index: int): boolean;
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
   * 通过回调函数来遍历LightWeightSet实例对象上的元素以及元素对应的下标。
   * 不建议在forEach函数中使用add、remove、removeAt方法，会导致死循环等不可预知的风险，可使用for循环来进行插入和删除。
   *
   * @param { function } callbackFn - 回调函数，用于遍历LightWeightSet实例对象上的元素及其下标。
   *     callbackFn（必填）接受最多三个参数的函数。
   *     value 当前遍历到的元素的值，默认值为首个元素的值。
   *     key 当前遍历到的元素（与value相同），默认值为首个元素。
   *     set 当前调用forEach方法的实例对象，默认值为当前实例对象。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当需要改变回调函数中的this指向时传入此参数，不需要改变this指向时可省略。不传入时默认值为当前实例对象。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object): void;

  /**
   * 通过回调函数遍历实例对象中实际的key。
   * 不会对已删除的key执行回调。
   *
   * @param { LightWeightSetForEachCb<T> } callbackFn - 对每个元素执行的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightSetForEachCb<T>): void;

  /**
   * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
   * 不建议在Symbol.iterator中使用add、remove、removeAt方法，会导致死循环等不可预知的风险，可使用for循环来进行插入和删除。
   *
   * @returns { IterableIterator<T> } 返回遍历LightWeightSet中所有元素的迭代器对象，每一项为容器中的元素值。
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
   *
   * @returns { IterableIterator<T> } 返回遍历LightWeightSet中所有元素的迭代器对象，每一项为容器中的元素值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

  /**
   * 获取包含容器中所有元素的字符串。
   *
   * @returns { String } 返回包含容器中所有元素的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * 获取包含此容器中所有元素的数组。
   *
   * @returns { Array<T> } 返回包含此容器中所有元素的数组。
   * @throws { BusinessError } 10200011 - The toArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toArray(): Array<T>;
  /**
   * 获取容器中指定下标对应的元素。
   *
   * @param { number } index - 指定下标。需要小于等于INT32_MAX即2147483647。
   * @returns { T } 返回指定下标位置的元素值。
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): T;

  /**
   * 获取LightWeightSet容器中指定下标位置的对象。
   *
   * @param { int } index - 检索值的下标位置。
   * @returns { T | undefined } 返回指定下标对应的值，如果下标超出范围则返回undefined。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): T | undefined;

  /**
   * 返回包含此集合中所有值的新迭代器对象。
   *
   * @returns { IterableIterator<T> } 返回包含LightWeightSet中所有value的迭代器对象。
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * 返回包含此容器中所有元素对的新迭代器对象，每个元素对由相同值组成[value, value]。
   * 不建议在entries中使用add、remove、removeAt方法，会导致死循环等不可预知的风险，可使用for循环来进行插入和删除。
   *
   * @returns { IterableIterator<[T, T]> } 返回包含LightWeightSet中所有键值对的迭代器对象，每一项为[key, value]结构的数组。
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
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
}

/**
 * LightWeightSet的回调函数类型。
 *
 * @param { T } value - 当前元素的值。
 * @param { T } key - 当前元素的键（与value相同）。
 * @param { LightWeightSet<T> } set - 当前正在遍历的LightWeightSet实例。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightSetForEachCb<T> = (value: T, key: T, set: LightWeightSet<T>) => void;

export default LightWeightSet;