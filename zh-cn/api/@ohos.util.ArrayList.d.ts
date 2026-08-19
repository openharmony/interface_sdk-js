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
 * ArrayList是一种线性数据结构，底层基于数组实现，解决了固定大小数组无法动态扩容的限制。ArrayList会根据实际需要动态调整容量，每次扩容增加50%。
 * ArrayList和[LinkedList]{@link @ohos.util.LinkedList}相比，ArrayList的随机访问效率更高。但由于ArrayList的增加和删除操作可能需要对数组内其他元素进行移动，LinkedList的增加和删除操作效率更高。
 * **推荐使用场景：** 当需要频繁读取或按索引随机访问集合中的元素时，推荐使用ArrayList；当需要动态管理有序数据集合且增删操作频率较低时，也推荐使用ArrayList。
 * 文档中使用了泛型，涉及以下泛型类型参数：
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
 * ArrayList是一种线性数据结构，底层基于数组实现，解决了固定大小数组无法动态扩容的限制。ArrayList会根据实际需要动态调整容量，每次扩容增加50%。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class ArrayList<T> {
  /**
   * ArrayList的构造函数，用于创建一个空的ArrayList实例。该构造函数需通过new关键字调用，不可作为普通函数直接调用，否则将抛出异常。
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * ArrayList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * 获取ArrayList的元素个数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * 在ArrayList尾部插入元素。批量添加元素时，建议先调用increaseCapacityTo方法扩充容量，避免多次自动扩容带来的性能开销。
   *
   * @param { T } element - 被插入的元素。
   * @returns { boolean } 插入成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * 在长度范围内指定位置index插入元素element。调用成功后，ArrayList的length增加1，index位置及之后的元素依次向后移动一位。如果index超出范围，则抛出异常。
   *
   * @param { T } element - 被插入的元素。
   * @param { int } index - 被插入的下标，取值范围为[0, ArrayList.length]。需要小于等于int32_max即2147483647。超出范围时抛出异常。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * 判断此ArrayList中是否包含指定元素。
   *
   * @param { T } element - 要判断是否包含的元素。
   * @returns { boolean } 返回true表示包含指定元素，否则返回false。
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * 返回指定元素第一次出现的下标，查找失败返回-1。与getLastIndexOf的区别在于，该方法返回元素首次出现的位置，getLastIndexOf返回元素最后一次出现的位置。
   *
   * @param { T } element - 需要查找第一次出现位置的元素。
   * @returns { int } 返回指定元素第一次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * 根据指定下标删除元素，并返回被删除的元素。删除后，ArrayList的length减少1，被删除元素之后的元素依次向前移动一位。如果index超出范围，则抛出异常。
   *
   * @param { int } index - 指定元素的下标值，取值范围为[0, ArrayList.length-1]。需要小于等于int32_max即2147483647。
   * @returns { T } 返回删除的元素。
   * @throws { BusinessError } 10200001 - The value of "index" is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByIndex(index: int): T;
  /**
   * 删除查找到的第一个指定元素。删除成功后，ArrayList的length减少1，被删除元素之后的元素依次向前移动一位。如果未找到指定元素，则不执行删除操作。
   *
   * @param { T } element - 要删除的元素。
   * @returns { boolean } 删除成功返回true，失败返回false。
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * 返回指定元素最后一次出现的下标，查找失败返回-1。
   *
   * @param { T } element - 需要查找最后一次出现位置的元素。
   * @returns { int } 返回指定元素最后一次出现时的下标值，查找失败返回-1。
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastIndexOf(element: T): int;
  /**
   * 删除指定范围内的元素，即左闭右开区间[fromIndex, toIndex)。删除后，ArrayList的length减少对应的元素个数，toIndex之后的元素依次向前移动。如果fromIndex或toIndex超出范围，
   * 则抛出异常。
   *
   * @param { int } fromIndex - 起始下标，区间包含该下标。需要小于等于int32_max即2147483647。
   * @param { int } toIndex - 终止下标，区间不包含该下标。需要小于等于int32_max即2147483647。
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByRange(fromIndex: int, toIndex: int): void;
  /**
   * 遍历ArrayList中的每个元素，对每个元素执行回调函数，用回调函数返回的值替换原元素。
   *
   * @param { function } callbackFn - 用于操作元素并返回替换值的回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当回调函数需要引用外部对象作为this上下文时传入此参数，不传入时默认值为undefined。
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void;

  /**
   * 遍历ArrayList中的每个元素，对每个元素执行回调函数，用回调函数返回的值替换原元素。
   *
   * @param { ArrayListReplaceCb<T> } callbackFn - 用于操作元素并返回替换值的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackFn: ArrayListReplaceCb<T>): void;

  /**
   * 在遍历ArrayList实例对象的过程中，对每个元素执行回调函数。
   *
   * @param { function } callbackFn - 对每个元素执行操作的回调函数。
   * @param { Object } [thisArg] - callbackFn被调用时用作this值。当回调函数需要引用外部对象作为this上下文时传入此参数，不传入时默认值为undefined。
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void;

  /**
   * 在遍历ArrayList实例对象的过程中，对每个元素执行回调函数。
   *
   * @param { ArrayListForEachCb<T> } callbackFn - 回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: ArrayListForEachCb<T>): void;

  /**
   * 根据指定比较器所定义的顺序，对ArrayList中的元素进行排序。排序后，ArrayList的元素个数不变，元素位置按比较器定义的顺序重新排列。
   *
   * @param { function } [comparator] - 用于定义排序顺序的比较函数，默认为升序排序。当需要降序或自定义比较逻辑时传入此参数。<br>API version 23开始发生兼容性变更，在API
   * version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 8 - 22]
   * @param { ArrayListComparatorFn<T> } [comparator] - 用于定义排序顺序的比较函数，默认为升序排序。当需要降序或自定义比较逻辑时传入此参数。<br>API version
   * 23开始发生兼容性变更，在API version 22及之前的版本其类型为：`(firstValue: T, secondValue: T) => number`。 [since 23]
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  sort(comparator?: ArrayListComparatorFn<T>): void;
  /**
   * 根据下标截取ArrayList中的一段元素，并返回这一段ArrayList实例，即左闭右开区间[fromIndex, toIndex)。如果fromIndex或toIndex超出范围，则抛出异常。
   *
   * @param { int } fromIndex - 起始下标，区间包含该下标，取值范围为[0, ArrayList.length-1]。
   * 需要小于toIndex且小于等于int32_max即2147483647。超出范围时抛出异常。
   * @param { int } toIndex - 终止下标，区间不包含该下标，取值范围为(fromIndex, ArrayList.length]。需要大于fromIndex且小于等于int32_max即2147483647。
   * 超出范围时抛出异常。
   * @returns { ArrayList<T> } 返回包含[fromIndex, toIndex)范围内元素的ArrayList子列表实例。
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  subArrayList(fromIndex: int, toIndex: int): ArrayList<T>;
  /**
   * 清除ArrayList中的所有元素，并把length置为0。此方法不会释放预留的容量空间，如需释放容量请调用trimToCurrentLength方法。
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
   * 克隆一个与ArrayList相同的实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。
   *
   * @returns { ArrayList<T> } 返回与原ArrayList内容相同的克隆实例，修改该克隆实例不会影响原实例。
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): ArrayList<T>;
  /**
   * 返回当前实例的容量大小。
   *
   * @returns { int } 返回当前实例的容量大小。
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getCapacity(): int;
  /**
   * 把当前ArrayList实例转换成数组，并返回转换后的数组。此操作不会修改原ArrayList实例，对返回数组的修改也不会影响原实例。
   *
   * @returns { Array<T> } 返回由ArrayList中所有元素组成的数组。
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
  /**
   * 判断该ArrayList是否为空。
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
   * 获取指定下标对应位置的元素。如果index超出范围，则抛出异常。
   *
   * @param { int } index - 元素的下标，取值范围为[0, ArrayList.length-1]。需要小于等于int32_max即2147483647。超出范围时抛出异常。
   * @returns { T } 容器中对应索引值为index的元素。
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  [index: int]: T;

  /**
   * 如果传入的新容量大于或等于ArrayList中的元素个数，将容量变更为新容量；如果传入的新容量小于ArrayList中的元素个数，则容量保持不变。当需要批量添加元素时，可预先调用此方法扩充容量，避免多次自动扩容带来的性能开销。
   *
   * @param { int } newCapacity - 新容量，需要大于或等于当前ArrayList中的元素个数才生效，否则容量不会变更。需要小于等于int32_max即2147483647。
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(newCapacity: int): void;
  /**
   * 释放ArrayList中预留的空间，把容量调整为当前的元素个数。当ArrayList的容量远大于当前元素个数时（如经过多次删除操作后），可调用此方法释放多余空间以优化内存占用。
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  trimToCurrentLength(): void;
  /**
   * 返回一个迭代器，迭代器按照ArrayList中元素的顺序依次返回类型为T的元素。
   *
   * @returns { IterableIterator<T> } 返回一个迭代器，遍历该迭代器可依次获取ArrayList中的每个元素。
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * 返回一个迭代器，迭代器按照ArrayList中元素的顺序依次返回类型为T的元素。
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
 * ArrayList中sort方法的比较器类型。
 *
 * @param { T } firstValue - 需要排序的前一项元素。
 * @param { T } secondValue - 需要排序的后一项元素。
 * @returns { double } 通过回调函数返回的值，ArrayList根据该比较规则维护元素的顺序。返回负数表示firstValue小于secondValue（firstValue排在secondValue之前），
 * 返回0表示两者相等，返回正数表示firstValue大于secondValue（firstValue排在secondValue之后）。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic&static
 */
export type ArrayListComparatorFn<T> = (firstValue: T, secondValue: T) => double;

/**
 * ArrayList中forEach方法的回调函数。
 *
 * @param { T } value - 当前遍历到的元素。
 * @param { int } index - 当前遍历到的下标值。
 * @param { ArrayList<T> } arrlist - 当前调用forEach方法的实例对象。
 * @returns { void } 此回调不返回值。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListForEachCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => void;

/**
 * ArrayList中replaceAllElements方法的回调函数。
 *
 * @param { T } value - 当前遍历到的元素。
 * @param { int } index - 当前遍历到的下标值。
 * @param { ArrayList<T> } arrlist - 当前调用replaceAllElements方法的实例对象。
 * @returns { T } 此回调返回替换后的元素。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListReplaceCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => T;

export default ArrayList;
