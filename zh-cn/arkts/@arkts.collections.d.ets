/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @file Defines the collections for ArkTS
 * @kit ArkTS
 */

/*** if arkts dynamic */
import lang from './@arkts.lang'
/*** endif */

/**
 * 本模块提供的ArkTS容器集，可以用于并发场景下的高性能数据传递。功能与JavaScript内建的对应容器类似，但ArkTS容器实例无法通过`"."`或者`"[]"`添加或更新属性。
 * ArkTS容器在多个并发实例间传递时，其默认行为是引用传递，支持多个并发实例可以同时操作同一个容器实例。另外，也支持拷贝传递，即每个并发实例持有一个ArkTS容器实例。
 * ArkTS容器并不是线程安全的，内部使用了fail-fast（快速失败）机制：当检测多个并发实例同时对容器进行结构性改变时，会触发异常。因此，在多线程读写容器时，容器使用方需要使用ArkTS提供的异步锁机制保证ArkTS容器的安全访问。
 * 当前ArkTS容器集主要包含以下几种容器：[Array]{@link ./arkts/@arkts.collections:collections},
 * [Map]{@link ./arkts/@arkts.collections:collections}, [Set]{@link ./arkts/@arkts.collections:collections}, TypedArray
 * ([Int8Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint8Array]{@link ./arkts/@arkts.collections:collections},
 * [Int16Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint16Array]{@link ./arkts/@arkts.collections:collections},
 * [Int32Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint32Array]{@link ./arkts/@arkts.collections:collections},
 * [Uint8ClampedArray]{@link ./arkts/@arkts.collections:collections} and
 * [Float32Array]{@link ./arkts/@arkts.collections:collections}),
 * [ArrayBuffer]{@link ./arkts/@arkts.collections:collections},
 * [BitVector]{@link ./arkts/@arkts.collections:collections}, and
 * [ConcatArray]{@link ./arkts/@arkts.collections:collections}.
 *
 * > **说明**
 * >
 * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace collections {
  /**
   * ArkTS TypedArray映射函数类型。
   *
   * @param { FromElementType } value - 当前遍历的用于构造ArkTS TypedArray的元素。
   * @param { number } index - 当前遍历的用于构造ArkTS TypedArray的元素索引，从0开始。
   * @returns { ToElementType } 转换后的元素值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayFromMapFn<FromElementType, ToElementType> = (value: FromElementType, index: number) => ToElementType;
  /**
   * ArkTS TypedArray断言测试函数类型。
   *
   * @param { ElementType } value - 当前遍历的ArkTS TypedArray元素。
   * @param { number } index - 当前遍历的ArkTS TypedArray元素索引，从0开始。
   * @param { ArrayType } array - 当前遍历的ArkTS TypedArray实例。
   * @returns { boolean } 如果值符合条件，则为true，否则为false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayPredicateFn<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => boolean;
  /**
   * ArkTS TypedArray遍历函数类型。
   *
   * @param { ElementType } value - 当前遍历的ArkTS TypedArray元素。
   * @param { number } index - 当前遍历的ArkTS TypedArray元素索引，从0开始。
   * @param { ArrayType } array - 当前遍历的ArkTS TypedArray实例。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayForEachCallback<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => void;
  /**
   * ArkTS TypedArray转换映射函数类型。
   *
   * @param { ElementType } value - 当前映射的ArkTS TypedArray元素。
   * @param { number } index - 当前映射的ArkTS TypedArray元素索引，从0开始。
   * @param { ArrayType } array - 当前映射的ArkTS TypedArray实例。
   * @returns { ElementType } 转换后的元素值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayMapCallback<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => ElementType;
  /**
   * ArkTS TypedArray归约函数类型。
   *
   * @param { AccType } previousValue - 当前遍历所累积的值。
   * @param { ElementType } currentValue - 当前遍历的ArkTS TypedArray元素。
   * @param { number } currentIndex - 当前遍历的ArkTS TypedArray元素索引，从0开始。
   * @param { ArrayType } array - 当前遍历的ArkTS TypedArray实例。
   * @returns { AccType } 归约函数的结果。该结果会作为下一次调用TypedArrayReduceCallback时的previousValue参数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType;
  /**
   * ArkTS TypedArray排序函数类型。
   *
   * @param { ElementType } first - 当前待比较的第一个元素。
   * @param { ElementType } second - 当前待比较的第二个元素。
   * @returns { number } 元素比较的结果。如果`first`小于`second`，返回值为负数；如果`first`大于`second`，返回值为正数；如果两个值相等，返回值为0。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type TypedArrayCompareFn<ElementType> = (first: ElementType, second: ElementType) => number;
  /**
   * ArkTS Array归约函数类型，被Array类的'from'接口使用。
   *
   * @param { FromElementType } value - 当前正在处理的元素。
   * @param { number } index - 当前遍历的ArkTS Array元素索引。
   * @returns { ToElementType } 归约函数的结果，该结果会作为数组的新元素。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayFromMapFn<FromElementType, ToElementType> = (value: FromElementType, index: number) => ToElementType;

  /**
   * ArkTS Array归约函数类型，被Array类的'some'和'every'接口使用，用来判断数组元素是否满足测试条件。
   *
   * @param { ElementType } value - 当前正在处理的元素。
   * @param { number } index - 当前遍历的ArkTS Array元素索引。
   * @param { ArrayType } array - 当前遍历的ArkTS Array本身。
   * @returns { boolean } 归约函数的结果，该结果作为判断当前元素是否通过测试条件。为true时表示当前或之前的某个元素已满足条件，为false时表示尚未找到符合条件的元素。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayPredicateFn<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => boolean;

  /**
   * ArkTS Array归约函数类型，被Array类的'reduceRight'接口使用。
   *
   * @param { AccType } previousValue - 当前遍历所累积的值。
   * @param { ElementType } currentValue - 当前遍历的ArkTS Array元素。
   * @param { number } currentIndex - 当前遍历的ArkTS Array元素索引。
   * @param { ArrayType } array - 当前遍历的ArkTS Array实例。
   * @returns { AccType } 归约函数的结果，该结果会作为下一次调用ArrayReduceCallback时的previousValue参数。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  type ArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType;
  /**
   * ISendable是所有Sendable类型（除`null`和`undefined`）的父类型。自身没有任何必须的方法和属性。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;

  /**
   * 该接口定义了支持数组连接操作的对象，并继承了`ISendable`接口，使其兼具高效数组拼接和跨线程传递能力。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > 文档中存在泛型的使用，涉及以下泛型标记符：
   *
   * - T：Type，支持[Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface ConcatArray<T> extends ISendable {
    /**
     * ConcatArray的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 返回ConcatArray指定索引位置的元素。
     *
     * @param { number } index - 所需代码单元的从零开始的索引，不支持修改指定索引位置的元素。
     * @returns { T } ConcatArray给定的元素数据类型。
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @since 12 dynamiconly
     */
    readonly [index: number]: T;
    /**
     * 将ConcatArray的所有元素连接成一个字符串，元素之间可以用指定的分隔符分隔。
     *
     * @param { string } [separator] - 用于分隔ConcatArray元素的字符串。如果省略，则使用逗号分隔。
     * @returns { string } 包含所有ConcatArray元素连接成的字符串。如果ConcatArray为空，则返回空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 返回一个新的ConcatArray，该ConcatArray是原始ConcatArray的切片。
     *
     * @param { number } [start] - 开始索引。如果`start < 0`，则会从`start + array.length`位置开始。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素）。如果`end < 0`，则会到`end + array.length`位置结束。默认为ArkTS Array的长度。
     * @returns { ConcatArray<T> } 包含原始ConcatArray切片的新ConcatArray。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): ConcatArray<T>;
  }

  /**
   * 一种线性数据结构，底层基于数组实现，可以在ArkTS上并发实例间传递。
   * 推荐使用引用传递以提升传递性能。
   *
   * > **说明**
   * >
   * > - 本模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > 本节使用以下标识来表示泛型的使用：
   *
   * - T：Type，支持
   * [Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。
   * **装饰器**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Array<T> implements ConcatArray<T> {
    /**
     * ArkTS Array的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 生成一个固定长度的ArkTS Array，其中每个元素的初始值为给定的初始值。
     *
     * @param { number } arrayLength - ArkTS Array的长度。
     * @param { T } initialValue - ArkTS Array中每个元素的初始值。
     * @returns { Array<T> } 新创建的ArkTS Array实例。
     * @throws { BusinessError } 10200011 - The create method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static create<T>(arrayLength: number, initialValue: T): Array<T>;
    /**
     * 从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArkTS Array的对象。
     * @returns { Array<T> } 新创建的ArkTS Array实例。
     * @throws { BusinessError } 10200011 - The from method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>): Array<T>;
    /**
     * 从一个实现了Iterable接口的对象创建一个新的ArkTS Array。
     *
     * @param { Iterable<T> } iterable - 用于构造ArkTS Array的对象。
     * @returns { Array<T> } 新创建的ArkTS Array实例。
     * @throws { BusinessError } 10200011 - The from method cannot be bound. [since 12 - 17]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(iterable: Iterable<T>): Array<T>;
    /**
     * 从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array，并使用自定义函数处理每个数组元素。
     *
     * @param { ArrayLike<T> | Iterable<T> } arrayLike - 用于构造ArkTS Array的对象。
     * @param { ArrayFromMapFn<T, T> } mapFn - 用于处理数组元素的函数。
     * @returns { Array<T> } 新创建的ArkTS Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T> | Iterable<T>, mapFn: ArrayFromMapFn<T, T>): Array<T>;
    /**
     * 从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array，并使用自定义函数处理每个数组元素。
     * ArrayLike接口对象的元素类型可以和数组元素的类型不一样。
     *
     * @param  { ArrayLike<U> | Iterable<U> } arrayLike - 用于构造ArkTS Array的对象。
     * @param  { ArrayFromMapFn<U, T> } mapFn - 用于处理数组元素的函数。
     * @returns { Array<T> } 新创建的ArkTS Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static from<U, T>(arrayLike: ArrayLike<U> | Iterable<U>, mapFn: ArrayFromMapFn<U, T>): Array<T>;
    /**
     * 创建一个空的ArkTS Array的构造函数。
     *
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * ArkTS Array的构造函数，通过开发者提供的元素进行初始化。
     *
     * @param { T } first - 初始化ArkTS Array的第一个元素。
     * @param { T[] } left - 初始化ArkTS Array的剩余元素。
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(first: T, ...left: T[]);
    /**
     * ArkTS Array的构造函数，通过开发者提供的元素进行初始化。
     *
     * @param { T[] } items - 初始化ArkTS Array的元素。
     * @throws { BusinessError } 10200012 - The Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(...items: T[]);
    /**
     * 从ArkTS Array中移除并返回最后一个元素。如果Array为空，则返回**undefined**，
     * 且Array不发生变化。
     *
     * @returns { T | undefined } 从Array中移除的元素；如果Array为空，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The pop method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    pop(): T | undefined;
    /**
     * 在ArkTS Array的末尾添加元素，并返回新的Array长度。
     *
     * @param { T[] } items - 要添加到Array末尾的元素。
     * @returns { number } 新Array的长度。
     * @throws { BusinessError } 10200011 - The push method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    push(...items: T[]): number;
    /**
     * 将ArkTS Array的所有元素连接成一个字符串，元素之间可以用指定的分隔符分隔。
     *
     * @param { string } [separator] - 用于分隔Array元素的字符串。如果未传入，则使用逗号（,）作为
     *     分隔符。
     * @returns { string } 连接后得到的字符串。如果Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 从ArkTS Array中移除并返回第一个元素。如果Array为空，则返回**undefined**，
     * 且Array不发生变化。
     *
     * @returns { T | undefined } 从Array中移除的元素；如果Array为空，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The shift method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    shift(): T | undefined;
    /**
     * 在ArkTS Array的首端插入元素，并返回新的Array长度。
     *
     * @param { T[] } items - 要插入到Array首端的元素。
     * @returns { number } 新Array的长度。
     * @throws { BusinessError } 10200011 - The unshift method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    unshift(...items: T[]): number;
    /**
     * 选取ArkTS Array中一段范围内的元素创建新数组。
     *
     * @param { number } [start] - 开始索引。如果传入负数，则指代
     *     start + array.length位置的下标。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素）。如果传入负数，则指代
     *     end + array.length位置的下标。默认值为ArkTS Array的长度。
     * @returns { Array<T> } 包含选取元素的新Array。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Array<T>;
    /**
     * 对ArkTS Array进行排序，并返回排序后的Array。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Array<T> } 排序后的Array。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: (a: T, b: T) => number): Array<T>;
    /**
     * 返回在ArkTS Array中搜索元素首次出现的索引，如果不存在则返回**-1**。
     *
     * @param { T } searchElement - 要搜索的值。
     * @param { number } [fromIndex] - 开始搜索的索引，从0开始。默认值为**0**。
     * @returns { number } 搜索元素首次出现的索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * 对ArkTS Array中的每个元素执行提供的回调函数。
     *
     * @param { function } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: T, index: number, array: Array<T>) => void): void;
    /**
     * 对ArkTS Array中的每个元素执行提供的回调函数，并返回一个新的Array，该Array包含
     * 回调函数的结果。
     *
     * @param { function } callbackFn - 用于对每个元素执行的回调函数。
     * @returns { Array<U> } 包含回调函数结果的新Array。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map<U>(callbackFn: (value: T, index: number, array: Array<T>) => U): Array<U>;
    /**
     * 返回一个新Array，其中包含通过指定回调函数测试的所有元素。
     *
     * @param { function } predicate - 一个接受三个参数的函数，用于筛选元素。返回值为
     *     **true**表示当前元素通过测试，应保留在新数组中；返回值为**false**表示当前元素未通过
     *     测试，应被排除在新数组外。
     * @returns { Array<T> } 包含通过测试的元素的新Array。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>;
    /**
     * 对ArkTS Array中的每个元素执行回调函数，将上一次的返回值作为累加值，
     * 并返回最终的结果。
     *
     * @param { function } callbackFn - 一个接受四个参数的函数，用于对每个元素执行操作，并将
     *     结果作为累加值传递给下一个元素。
     * @returns { T } 回调函数执行后的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T): T;
    /**
     * 与前一个API类似，此API接受一个初始值作为第二个参数，用于在Array遍历开始前
     * 初始化累加器。
     *
     * @param { function } callbackFn - 一个接受四个参数的函数，用于对每个元素执行操作，并将
     *     结果作为累加值传递给下一个元素。
     * @param { U } initialValue - 用于初始化累加器的值。
     * @returns { U } 回调函数执行后的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(
      callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U,
      initialValue: U
    ): U;
    /**
     * 返回ArkTS Array中指定索引位置的元素。
     *
     * @param { number } index - 要返回的Array元素的索引（从零开始），取值为整数。负数索引从
     *     Array末尾开始计数，如果传入负数，则指代**index + array.length**位置的下标。
     * @returns { T | undefined } 返回指定索引处的元素；如果索引超出范围或无效，
     *     则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): T | undefined;
    /**
     * 获取一个迭代器，迭代器的每一项都是一个 JavaScript 对象。
     *
     * @returns { IterableIterator<T> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * 返回一个迭代器对象，该对象包含ArkTS Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, T]> } 包含Array中每个元素的键值对的
     *     迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, T]>;
    /**
     * 返回一个迭代器对象，该对象包含ArkTS Array中每个元素的索引。
     *
     * @returns { IterableIterator<number> } 包含Array中每个元素的索引的迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个迭代器对象，该对象包含ArkTS Array中每个元素的值。
     *
     * @returns { IterableIterator<T> } 包含Array中每个元素的值的迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<T>;
    /**
     * 返回通过回调函数测试的第一个元素的值。如果所有元素都不满足，则返回**undefined**。
     *
     * @param { function } predicate - 一个接受三个参数的函数，用于筛选元素。返回值为
     *     **true**表示当前元素满足条件，会立即停止遍历，并将该元素作为结果返回；返回值为
     *     **false**表示当前元素不满足条件，会继续检查下一个元素，直到找到符合条件的元素或遍历
     *     完整个数组。
     * @returns { T | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件
     *     ，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: (value: T, index: number, obj: Array<T>) => boolean): T | undefined;
    /**
     * 判断ArkTS Array是否包含指定的元素，并返回一个布尔值。
     *
     * @param { T } searchElement - 要搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引。默认值为**0**。
     * @returns { boolean } 检查结果。如果Array包含指定的元素，则返回**true**；否则返回
     *     **false**。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: T, fromIndex?: number): boolean;
    /**
     * 返回通过回调函数测试的第一个元素的索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { function } predicate - 一个接受三个参数的函数，用于筛选元素。返回值为
     *     **true**表示当前元素满足条件，会立即停止遍历，并返回该元素的索引；返回值为**false**
     *     表示当前元素不满足条件，会继续检查下一个元素，直到找到符合条件的元素或遍历完整个
     *     数组。
     * @returns { number } 第一个满足条件的元素的索引；如果所有元素都不满足条件，
     *     则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean): number;
    /**
     * 使用指定的值填充ArkTS Array中指定范围的所有元素。
     *
     * @param { T } value - 要填充的值。
     * @param { number } [start] - 开始填充的索引。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素）。如果未传入，
     *     则指代数组的最后一个元素。
     * @returns { Array<T> } 填充后的Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: T, start?: number, end?: number): Array<T>;
    /**
     * 使ArkTS Array收缩到指定长度。
     *
     * @param { number } arrayLength - Array的新长度。如果传入的值大于或等于当前Array
     *     的长度，Array不发生变化。
     * @throws { BusinessError } 10200011 - The shrinkTo method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    shrinkTo(arrayLength: number): void;
    /**
     * 使用指定初始值填充新增元素，使Array扩展到指定长度。
     *
     * @param { number } arrayLength - Array的新长度。如果传入的值小于或等于当前Array
     *     的长度，Array不发生变化。
     * @param { T } initialValue - 新增元素的初始值。
     * @throws { BusinessError } 10200011 - The extendTo method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    extendTo(arrayLength: number, initialValue: T): void;
    /**
     * 返回Array中指定索引位置的元素。
     *
     * @param { number } index - 要返回元素的索引（从零开始）。
     *     当传入的index小于0或大于等于length的值时，将抛出错误。
     * @returns { T } Array中匹配给定索引的元素。
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: T;
    /**
     * 将ArkTS Array与一个或多个数组拼接。
     *
     * @param { ConcatArray<T>[] } items - 用于拼接ArkTS Array的一个或多个数组。
     * @returns { Array<T> } 拼接后生成的新Array。
     * @throws { BusinessError } 10200011 - The concat method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    concat(...items: ConcatArray<T>[]): Array<T>;
    /**
     * 删除Array中指定位置(start)以及之后的所有元素。
     *
     * @param { number } start - 开始索引。如果`-array.length =< start < 0`，
     *     则从`start + array.length`开始删除。如果`start < -array.length`，则从0开始删除。
     * @returns { Array<T> } 返回一个新的包含被删除元素的**Array**对象。如果没有元素被删除，
     *     返回一个空的**Array**对象。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The splice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    splice(start: number): Array<T>;
    /**
     * 删除Array中指定位置的元素，并在同一位置插入新元素。
     *
     * @param { number } start - 开始索引。如果`-array.length =< start < 0`，
     *     则从`start + array.length`开始删除。如果`start < -array.length`，则从0开始删除。
     * @param { number } deleteCount - 删除元素的个数。
     * @param { T[] } items - 从start位置开始插入的新元素。
     *     如果未传入，则仅删除Array内的元素。
     * @returns { Array<T> } 返回一个新的包含被删除元素的**Array**对象。如果没有元素被删除，
     *     返回一个空的**Array**对象。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The splice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    splice(start: number, deleteCount: number, ...items: T[]): Array<T>;
    /**
     * 检查传入的参数是否是一个ArkTS Array。
     *
     * @param { Object|undefined|null } value - 需要检查的值。
     * @returns { boolean } 检查结果。如果传入的参数是ArkTS Array，则返回**true**；
     *     否则返回**false**。可能的原因：
     *     1. 必填参数未指定。
     *     2. 参数类型不正确。
     *     3. 参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static isArray(value: Object | undefined | null): boolean;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Array。
     *
     * @param { T[] } items - 用于创建数组的元素集合，参数个数可以是0个、1个
     *     或多个。
     * @returns { Array<T> } 新创建的ArkTS Array实例。可能的原因：
     *     1. 必填参数未指定。
     *     2. 参数类型不正确。
     *     3. 参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of<T>(...items: T[]): Array<T>;
    /**
     * 从ArkTS Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标。如果传入负数，则指代
     *     `target + array.length`位置的下标。
     * @param { number } start - 源起始位置下标。如果传入负数，则指代
     *     **start + array.length**位置的下标。
     * @param { number } end - 源终止位置下标。如果传入负数，则指代 `end
     *     + array.length`位置的下标。默认值为ArkTS Array的长度。
     * @returns { Array<T> } 修改后的ArkTS Array。可能的原因：
     *     1. 必填参数未指定。
     *     2. 参数类型不正确。
     *     3. 参数校验失败。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Array<T>;
    /**
     * 反转ArkTS Array数组中的元素，并返回同一数组的引用。
     *
     * @returns { Array<T> } 反转后的ArkTS Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reverse(): Array<T>;
    /**
     * 返回ArkTS Array实例中最后一次出现指定值的索引。
     *
     * @param { T } searchElement - 要搜索的值。
     * @param { number } fromIndex - 开始搜索的索引。默认值为**0**。如果索引大于或等于
     *     ArkTS Array的长度，则返回**-1**。如果传入负数，则指代
     *     **fromIndex + array.length**位置的下标。
     * @returns { number } 元素最后一次出现的索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * 测试ArkTS Array中的所有元素是否满足指定条件。
     *
     * @param { ArrayPredicateFn<T, Array<T>> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件，则返回**true**；
     *     否则返回**false**。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    every(predicate: ArrayPredicateFn<T, Array<T>>): boolean;
    /**
     * 测试ArkTS Array是否存在满足指定条件的元素。
     *
     * @param { ArrayPredicateFn<T, Array<T> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在满足指定条件的元素，则返回**true**；
     *     否则返回**false**。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    some(predicate: ArrayPredicateFn<T, Array<T>>): boolean;
    /**
     * 将ArkTS Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用所在的系统地区获取符合当前文化习惯的字符串表示形式。让每个元素通过自身的
     * **toLocaleString**方法转换为字符串，然后使用逗号（,）将这些字符串按顺序拼接。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 此API与
     * [reduceRight]{@link collections.Array#reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>)}方法类似，
     * 但它接受一个初始值作为第二个参数，用于在Array从右到左顺序遍历开始前初始化累加器。
     *
     * @param { ArrayReduceCallback<U, T, Array<T>> } callbackFn - 一个接受四个参数的函数，用于对
     *     每个元素执行操作，并将结果作为累加值传递给下一个元素。
     * @param { U } initialValue - 用于初始化累加器的值。
     * @returns { U } 回调函数执行后的最终结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = T>(callbackFn: ArrayReduceCallback<U, T, Array<T>>, initialValue: U): U;
    /**
     * 对ArkTS Array中的每个元素按照从右到左顺序执行回调函数，将其结果作为累加值，
     * 并返回最终的值。
     *
     * @param { ArrayReduceCallback<T, T, Array<T>> } callbackFn - 一个接受四个参数的函数，用于对
     *     每个元素执行操作，并将结果作为累加值传递给下一个元素。
     * @returns { T } 回调函数执行后的最终结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>): T;
 }
  /**
   * 一种基于键值对存储的非线性数据结构。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > 本节使用以下标识符来表示泛型的使用：
   *
   * - K：键。
   * - V：值。
   * K和V类型都需为
   * [Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。
   * **装饰器类型**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Map<K, V> {
    /**
     * Map的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly size: number;
    /**
     * 构造函数，用于创建ArkTS Map对象。
     *
     * @param { readonly (readonly [K, V])[] | null } [entries] - 键值对数组或其它可迭代对象。
     *     默认值为**null**，创建一个空Map对象。
     * @throws { BusinessError } 10200012 - The ArkTS Map's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(entries?: readonly (readonly [K, V])[] | null);
    /**
     * 创建ArkTS Map对象的构造函数。
     *
     * @param { Iterable<readonly [K, V]>} [iterable] - 用于构造ArkTS Map的对象。
     * @throws { BusinessError } 10200012 - The ArkTS Map's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(iterable: Iterable<readonly [K, V]>);
    /**
     * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
     * 说明：
     * 本接口不支持在.ets文件中使用。
     *
     * @returns { IterableIterator<[K, V]> } 返回一个迭代器对象，该对象包含键值对。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
    /**
     * 返回一个Map迭代器对象，该对象包含了此Map中的每个元素的[key, value]对。
     *
     * @returns { IterableIterator<[K, V]> } Map迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[K, V]>;
    /**
     * 返回一个Map迭代器对象，该对象包含了此Map中每个元素的键。
     *
     * @returns { IterableIterator<K> } Map迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<K>;
    /**
     * 返回一个Map迭代器对象，该对象包含此Map中每个元素的值。
     *
     * @returns { IterableIterator<V> } Map迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<V>;
    /**
     * 删除该Map中的所有元素。
     *
     * @throws { BusinessError } 10200011 - The clear method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): void;
    /**
     * 删除该Map中指定元素。
     *
     * @param { K } key - 待删除元素的键。
     * @returns { boolean } 操作结果。如果元素存在并已被删除，则返回**true**；
     *     否则该元素不存在，返回**false**。
     * @throws { BusinessError } 10200011 - The delete method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    delete(key: K): boolean;
    /**
     * 按插入顺序对该Map中的每个键/值对执行一次回调函数。
     *
     * @param { function } callbackFn - 对每个键值对运行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void;
    /**
     * 返回该Map中的指定元素。
     *
     * @param { K } key - 指定key。
     * @returns { V | undefined } 与指定键相关联的元素，如果键在Map对象中找不到，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The get method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    get(key: K): V | undefined;
    /**
     * 判断该Map中是否存在指定元素。
     *
     * @param { K } key - 待查找元素的键。
     * @returns { boolean } 判断结果。如果存在指定元素，则返回**true**，否则返回
     *     **false**。
     * @throws { BusinessError } 10200011 - The has method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    has(key: K): boolean;
    /**
     * 向该Map添加或更新一个指定的键值对。
     *
     * @param { K } key - 添加或更新指定元素的键。
     * @param { V } value - 添加或更新指定元素的值。
     * @returns { Map<K, V> } 新的Map对象。
     * @throws { BusinessError } 10200011 - The set method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(key: K, value: V): Map<K, V>;
  }


  /**
   * 一种非线性数据结构。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > 本节使用以下标识来表示泛型的使用：
   *
   * - T：Type，支持[Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。
   * **装饰器类型：** \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Set<T> {
    /**
     * Set的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly size: number;
    /**
     * 构造函数，用于创建ArkTS Set对象。
     *
     * @param { readonly T[] | null } [values] - 数组或其它可迭代对象。默认值为**null**，表示创建一个空Set对象。
     * @throws { BusinessError } 10200012 - The ArkTS Set's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(values?: readonly T[] | null);
    /**
     * 创建ArkTS Set对象的构造函数。
     *
     * @param { Iterable<T>} [iterable] - 用于构造ArkTS Set的对象。
     * @throws { BusinessError } 10200012 - The ArkTS Set's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(iterable: Iterable<T>);
    /**
     * 返回一个迭代器，迭代器的每一项都是一个JavaScript对象。
     * 说明：
     * 本接口不支持在.ets文件中使用。
     *
     * @returns { IterableIterator<T> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键值对。
     *
     * @returns { IterableIterator<[T, T]> } 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键值对。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[T, T]>;
    /**
     * 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键。
     *
     * @returns { IterableIterator<T> } 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<T>;
    /**
     * 返回一个Set迭代器对象，该对象包含了此Set中每个元素的值。
     *
     * @returns { IterableIterator<T> } 返回一个Set迭代器对象，该对象包含了此Set中每个元素的值。
     * @throws { BusinessError } 10200011 - The values method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<T>;
    /**
     * 检查此Set中是否存在指定值，如果不存在，则将该值添加到Set中。
     *
     * @param { T } value - 目标值。
     * @returns { Set<T> } Set对象。
     * @throws { BusinessError } 10200011 - The add method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    add(value: T): Set<T>;
    /**
     * 删除此Set中的所有元素。
     *
     * @throws { BusinessError } 10200011 - The clear method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): void;
    /**
     * 删除此Set中的指定元素。
     *
     * @param { T } value - 目标值。
     * @returns { boolean } 操作结果。成功删除返回**true**，否则返回**false**。
     * @throws { BusinessError } 10200011 - The delete method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    delete(value: T): boolean;
    /**
     * 对此Set中的每个键值对执行一次回调函数。
     *
     * @param { function } callbackFn - 对每个键值对运行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: (value: T, value2: T, set: Set<T>) => void): void;
    /**
     * 判断此Set中是否存在指定值。
     *
     * @param { T } value - 目标键。
     * @returns { boolean } 检查结果。如果存在指定元素，则返回**true**，否则返回**false**。
     * @throws { BusinessError } 10200011 - The has method cannot be bound with non-sendable.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    has(value: T): boolean;
  }
  /**
   * ArkTS TypedArray（[Int8Array]{@link ./arkts/@arkts.collections:collections}、
   * [Uint8Array]{@link ./arkts/@arkts.collections:collections}、
   * [Int16Array]{@link ./arkts/@arkts.collections:collections}、
   * [Uint16Array]{@link ./arkts/@arkts.collections:collections}、
   * [Int32Array]{@link ./arkts/@arkts.collections:collections}、
   * [Uint32Array]{@link ./arkts/@arkts.collections:collections}、
   * [Uint8ClampedArray]{@link ./arkts/@arkts.collections:collections}、
   * [Float32Array]{@link ./arkts/@arkts.collections:collections}）的底层数据结构。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class ArrayBuffer {
    /**
     * buffer所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * 构造函数，用于创建一个指定长度的ArkTS ArrayBuffer对象。
     *
     * @param { number } byteLength - buffer所占的字节数，取值范围是[0, 2147483647]，否则会抛出异常。0代表构造的ArrayBuffer的长度为0，2147483647表示构造的ArrayBuffer的长度为2147483647。
     * @throws { BusinessError } 10200012 - The ArrayBuffer's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(byteLength: number);
    /**
     * 返回一个新的ArkTS ArrayBuffer对象，其包含原ArkTS ArrayBuffer指定范围的内容。
     *
     * @param { number } begin - 开始索引，如果`begin < 0`，则会从`begin +
     *     arrayBuffer.byteLength`位置开始。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     arrayBuffer.byteLength`位置结束。默认为原ArkTS ArrayBuffer的长度。
     * @returns { ArrayBuffer } 新生成的ArkTS ArrayBuffer对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(begin: number, end?: number): ArrayBuffer;
  }

  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int8Array {
    /**
     * ArkTS Int8Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Int8Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Int8Array所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Int8Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Int8Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空ArkTS Int8Array对象。
     *
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Int8Array对象。
     *
     * @param { number } length - 用于指定ArkTS Int8Array的长度。
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Int8Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Int8Array对象。
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Int8Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Int8Array的对象。当参数类型是ArrayBuffer时buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Int8Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Int8Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始，默认为0。
     * @param { number } [length] - 指定ArkTS Int8Array的长度，默认为0。
     * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Int8Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Int8Array的ArrayLike对象。
     * @returns { Int8Array } 新创建的ArkTS Int8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int8Array;

    /**
     * 从一个ArrayLike中创建一个ArkTS Int8Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Int8Array } 新创建的ArkTS Int8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int8Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Int8Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数。如果省略，则不对元素进行加工处理。
     * @returns { Int8Array } 新创建的ArkTS Int8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int8Array;
    /**
     * 从ArkTS Int8Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标，如果`target < 0`，则会从`target +
     *     array.length`位置开始。
     * @param { number } start - 源起始位置下标，如果`start < 0`，则会从`start +
     *     Int8Array.length`位置开始。
     * @param { number } [end] - 源终止位置下标（不包含end位置的元素），如果`end < 0`，则会从`end +
     *     Int8Array.length`位置终止。默认为ArkTS Int8Array的长度。
     * @returns { Int8Array } 修改后的Int8Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int8Array;
    /**
     * 测试ArkTS Int8Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean;
    /**
     * 使用特定值填充ArkTS Int8Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引，如果`start < 0`，则会从`start +
     *     Int8Array.length`位置开始。默认值为0。
     * @param { number } [end] - 结束填充的索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Int8Array.length`位置结束。默认为ArkTS Int8Array的长度。
     * @returns { Int8Array } 填充后的ArkTS Int8Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int8Array;
    /**
     * 返回一个新ArkTS Int8Array，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Int8Array } 过滤后的ArkTS Int8Array。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int8Array>): Int8Array;
    /**
     * 返回ArkTS Int8Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回undefined。
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回undefined。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int8Array>): number | undefined;
    /**
     * 返回ArkTS Int8Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回-1。
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回-1。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int8Array>): number;
    /**
     * 对ArkTS Int8Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Int8Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int8Array>): void;
    /**
     * 返回在ArkTS Int8Array中给定元素的第一个索引，如果不存在，则返回-1。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为0。如果下标大于等于ArkTS Int8Array的长度，则返回-1。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从前到后搜索。
     * @returns { number } 数组中元素的第一个索引；没有找到，则返回-1。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Int8Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号分隔。
     * @returns { string } 包含所有元素拼接成的字符串。如果ArkTS Int8Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Int8Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Int8Array对象。
     *
     * @param { TypedArrayMapCallback<number, Int8Array> } callbackFn - 回调函数，接收至多三个参数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Int8Array } 新ArkTS Int8Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int8Array>): Int8Array;
    /**
     * 对ArkTS Int8Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - 归约函数，接收至多四个参数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由归约函数最后一次调用返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number;
    /**
     * 对ArkTS Int8Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - 归约函数，接收至多四个参数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为开始累加的初始值。
     *     首次调用callbackfn函数时会将该值作为参数传入，而不是使用数组元素值。
     * @returns { number } 由归约函数最后一次调用返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>, initialValue: number): number;
    /**
     * 对ArkTS Int8Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int8Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由归约函数最后一次调用返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U;
    /**
     * 反转ArkTS Int8Array。
     *
     * @returns { Int8Array } 反转后的ArkTS Int8Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int8Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。默认为0。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Int8Array对象，其包含原ArkTS Int8Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引，如果`start < 0`，则会从`start +
     *     Int8Array.length`位置开始。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Int8Array.length`位置结束。默认为ArkTS Int8Array的长度。
     * @returns { Int8Array } 新的ArkTS Int8Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int8Array;
    /**
     * 测试ArkTS Int8Array中是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int8Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean;
    /**
     * 对ArkTS Int8Array进行排序，并返回排序后的ArkTS Int8Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Int8Array } 排序后的ArkTS Int8Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int8Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Int8Array对象。
     *
     * @param { number } [begin] - 开始索引，如果`begin < 0`，则会从`begin +
     *     Int8Array.length`位置开始。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Int8Array.length`位置结束。默认为ArkTS Int8Array的长度。
     * @returns { Int8Array } 新的ArkTS Int8Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int8Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回undefined。
     *
     * @param { number } index - 要返回的Array元素的索引（从零开始），取值为整数。
     *     如果为负数，则从最后一个元素开始倒数。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回undefined。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个数字对象。
     * 说明：
     * 本接口不支持在.ets文件中使用。
     *
     * @returns { IterableIterator<number> } 返回一个迭代器对象，迭代出数字。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int8Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int8Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int8Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Int8Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引，如果`fromIndex < 0`，则会从`fromIndex +
     *     Int8Array.length`位置开始。默认值为0。
     * @returns { boolean } 检查结果。如果元素存在则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Int8Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Int8Array实例中最后一次出现searchElement的索引，如果对象不包含，则为-1。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为0。如果下标大于等于ArkTS Int8Array的长度，则返回-1。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从后到前搜索。
     * @returns { number } 数组中给定元素的最后一个索引；没有找到，则返回-1。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Int8Array，对ArkTS Int8Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int8Array> } callbackFn - 对Int8Array中的每个元素调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用的第一个参数的值。
     *     <br>如果未提供初始值，则使用Int8Array的最后一个元素，
     *     <br>并且回调函数将从倒数第二个元素开始调用。
     * @returns { U } 由归约函数最后一次调用返回的最终结果。可能的错误原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Int8Array，对ArkTS Int8Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int8Array> } callbackFn - 对Int8Array中的每个元素调用的函数。
     * @returns { number } 由归约函数最后一次调用返回的最终结果。可能的错误原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number;
    /**
     * 将ArkTS Int8Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Int8Array对象，参数个数可以是0个、1个或者多个。
     *
     * @static [since 18 - 21]
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Int8Array } 新的ArkTS Int8Array实例。可能的错误原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int8Array;
 }

  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint8ClampedArray {
    /**
     * ArkTS Uint8ClampedArray中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Uint8ClampedArray底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Uint8ClampedArray所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Uint8ClampedArray距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Uint8ClampedArray元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空ArkTS Uint8ClampedArray对象。
     *
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Uint8ClampedArray对象。
     *
     * @param { number } length - 用于指定ArkTS Uint8ClampedArray的长度。
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Uint8
     *     ClampedArray对象。
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Uint8ClampedArray的对象。当参数类型是ArrayBuffer时buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Uint8ClampedArray的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始，默认为0。
     * @param { number } [length] - 指定ArkTS Uint8ClampedArray的长度，默认为0。
     * @throws { BusinessError } 10200012 - The Uint8ClampedArray's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Uint8ClampedArray的ArrayLike对象。
     * @returns { Uint8ClampedArray } 新创建的ArkTS Uint8ClampedArray对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

    /**
     * 从一个ArrayLike中创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Uint8ClampedArray } 新创建的ArkTS Uint8ClampedArray对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint8ClampedArray;
    /**
     * 从一个可迭代对象中创建一个ArkTS Uint8ClampedArray对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数。如果省略，则不对元素进行加工处理。
     * @returns { Uint8ClampedArray } 新创建的ArkTS Uint8ClampedArray对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint8ClampedArray;
    /**
     * 从ArkTS Uint8ClampedArray指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标，如果`target < 0`，则会从`target +
     *     array.length`位置开始。
     * @param { number } start - 源起始位置下标，如果`start < 0`，则会从`start +
     *     Uint8ClampedArray.length`位置开始。
     * @param { number } [end] - 源终止位置下标（不包含end位置的元素），如果`end < 0`，则会从`end +
     *     Uint8ClampedArray.length`位置终止。默认为ArkTS Uint8ClampedArray的长度。
     * @returns { Uint8ClampedArray } 修改后的Uint8ClampedArray。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint8ClampedArray;
    /**
     * 测试ArkTS Uint8ClampedArray中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): boolean;
    /**
     * 使用特定值填充ArkTS Uint8ClampedArray指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引，如果`start < 0`，则会从`start +
     *     Uint8ClampedArray.length`位置开始。默认值为0。
     * @param { number } [end] - 结束填充的索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint8ClampedArray.length`位置结束。默认为ArkTS Uint8ClampedArray的长度。
     * @returns { Uint8ClampedArray } 填充后的ArkTS Uint8ClampedArray。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint8ClampedArray;
    /**
     * 返回一个新ArkTS Uint8ClampedArray，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - 用于元素过滤的断言函数。
     * @returns { Uint8ClampedArray } 过滤后的ArkTS Uint8ClampedArray。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): Uint8ClampedArray;
    /**
     * 返回ArkTS Uint8ClampedArray中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回undefined。
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回undefined。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): number | undefined;
    /**
     * 返回ArkTS Uint8ClampedArray中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回-1。
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回-1。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): number;
    /**
     * 对ArkTS Uint8ClampedArray中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Uint8ClampedArray> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint8ClampedArray>): void;
    /**
     * 返回在ArkTS Uint8ClampedArray中给定元素的第一个索引，如果不存在，则返回-1。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为0。如果下标大于等于ArkTS Uint8ClampedArray的长度，则返回-1。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从前到后搜索。
     * @returns { number } 数组中元素的第一个索引；没有找到，则返回-1。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Uint8ClampedArray的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号分隔。
     * @returns { string } 包含所有元素拼接成的字符串。如果ArkTS Uint8ClampedArray为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Uint8ClampedArray中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Uint8ClampedArray对象。
     *
     * @param { TypedArrayMapCallback<number, Uint8ClampedArray> } callbackFn - 回调函数，接收至多三个参数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Uint8ClampedArray } 新ArkTS Uint8ClampedArray对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint8ClampedArray>): Uint8ClampedArray;
    /**
     * 对ArkTS Uint8ClampedArray中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8ClampedArray> } callbackFn - 归约函数，接收至多四个参数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由归约函数最后一次调用返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8ClampedArray>): number;
    /**
     * 对ArkTS Uint8ClampedArray中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8ClampedArray> } callbackFn - 归约函数，接收至多四个参数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 如果指定了initialValue，则将其作为开始累加的初始值。
     *     首次调用callbackfn函数时会将该值作为参数传入，而不是使用数组元素值。
     * @returns { U } 由归约函数最后一次调用返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8ClampedArray>, initialValue: U): U;
    /**
     * 反转ArkTS Uint8ClampedArray。
     *
     * @returns { Uint8ClampedArray } 反转后的ArkTS Uint8ClampedArray对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint8ClampedArray;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。默认为0。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Uint8ClampedArray对象，其包含原ArkTS Uint8ClampedArray指定范围的内容。
     *
     * @param { number } [start] - 开始索引，如果`start < 0`，则会从`start +
     *     Uint8ClampedArray.length`位置开始。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint8ClampedArray.length`位置结束。默认为ArkTS Uint8ClampedArray的长度。
     * @returns { Uint8ClampedArray } 新的ArkTS Uint8ClampedArray对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint8ClampedArray;
    /**
     * 测试ArkTS Uint8ClampedArray中是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint8ClampedArray> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint8ClampedArray>): boolean;
    /**
     * 对ArkTS Uint8ClampedArray进行排序，并返回排序后的ArkTS Uint8ClampedArray对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Uint8ClampedArray } 排序后的ArkTS Uint8ClampedArray对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint8ClampedArray;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Uint8ClampedArray对象。
     *
     * @param { number } [begin] - 开始索引，如果`begin < 0`，则会从`begin +
     *     Uint8ClampedArray.length`位置开始。默认值为0。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint8ClampedArray.length`位置结束。默认为ArkTS Uint8ClampedArray的长度。
     * @returns { Uint8ClampedArray } 新的ArkTS Uint8ClampedArray对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint8ClampedArray;
    /**
     * 返回指定下标的元素，如果不存在，则返回undefined。
     *
     * @param { number } index - 要返回的Array元素的索引（从零开始），取值为整数。<br/>
     *     如果为负数，则从最后一个元素开始倒数。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回undefined。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个数字对象。
     *
     * @returns { IterableIterator<number> } 返回一个迭代器对象，迭代出数字。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8ClampedArray中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8ClampedArray中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8ClampedArray中每个元素的值。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Uint8ClampedArray是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引，如果`fromIndex < 0`，则会从`fromIndex +
     *     Uint8ClampedArray.length`位置开始。默认值为0。
     * @returns { boolean } 检查结果。如果元素存在则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Uint8ClampedArray指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Uint8ClampedArray实例中最后一次出现searchElement的索引，如果对象不包含，则为-1。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为0。如果下标大于等于ArkTS Uint8ClampedArray的长度，则返回-1。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从后到前搜索。
     * @returns { number } 数组中给定元素的最后一个索引；没有找到，则返回-1。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Uint8ClampedArray，对ArkTS Uint8ClampedArray中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8ClampedArray> } callbackFn - 对Uint8ClampedArray中的每个元素调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用的第一个参数的值。
     *     <br>如果未提供初始值，则使用Uint8ClampedArray的最后一个元素，
     *     <br>并且回调函数将从倒数第二个元素开始调用。
     * @returns { U } 由归约函数最后一次调用返回的最终结果。可能的错误原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8ClampedArray>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Uint8ClampedArray，对ArkTS Uint8ClampedArray中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8ClampedArray> } callbackFn - 对Uint8ClampedArray中的每个元素调用的函数。
     * @returns { number } 由归约函数最后一次调用返回的最终结果。可能的错误原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint8ClampedArray>): number;
    /**
     * 将ArkTS Uint8ClampedArray转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Uint8ClampedArray对象，参数个数可以是0个、1个或者多个。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Uint8ClampedArray } 新的ArkTS Uint8ClampedArray实例。可能的错误原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint8ClampedArray;
 }

  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型：** \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint8Array {
    /**
     * ArkTS Uint8Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Uint8Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Uint8Array所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Uint8Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Uint8Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空的ArkTS Uint8Array对象。
     *
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Uint8Array对象。
     *
     * @param { number } length - 用于指定ArkTS Uint8Array的长度。
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Uint8Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Uint8Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Uint8Array的对象。当参数类型是ArrayBuffer时，buffer所占的
     *     字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Uint8Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Uint8Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始。默认值为**0**。
     * @param { number } [length] - 指定ArkTS Uint8Array的长度。默认值为**0**。
     * @throws { BusinessError } 10200012 - The Uint8Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Uint8Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Uint8Array的ArrayLike对象。
     * @returns { Uint8Array } 新创建的ArkTS Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint8Array;
    /**
     * 从一个ArrayLike中创建一个ArkTS Uint8Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArkTS Uint8Array的ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数，对数组的每个元素调用。
     * @returns { Uint8Array } 新创建的ArkTS Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint8Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Uint8Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造ArkTS Uint8Array的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数，对数组的每个元素
     *     调用。
     * @returns { Uint8Array } 新创建的ArkTS Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint8Array;
    /**
     * 从ArkTS Uint8Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标。如果传入负数，则指代 `target + array.length` 位置的下标。
     * @param { number } start - 源起始位置的下标。如果传入负数，则指代 `start + Uint8Array.length` 位置的下标。
     * @param { number } [end] - 源终止位置的下标（不包含end位置的元素）。如果传入负数，则指代
     *     `end + Uint8Array.length` 位置的下标。默认值为ArkTS Uint8Array的长度。
     * @returns { Uint8Array } 修改后的ArkTS Uint8Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint8Array;
    /**
     * 测试ArkTS Uint8Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint8Array>): boolean;
    /**
     * 使用特定值填充ArkTS Uint8Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引。如果传入负数，则指代
     *     `start + Uint8Array.length` 位置的下标。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包含该元素）。如果传入负数，则指代
     *     `end + Uint8Array.length` 位置的下标。默认值为ArkTS Uint8Array的长度。
     * @returns { Uint8Array } 填充后的ArkTS Uint8Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint8Array;
    /**
     * 返回一个新的ArkTS Uint8Array对象，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Uint8Array } 过滤后的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint8Array>): Uint8Array;
    /**
     * 返回ArkTS Uint8Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回
     *     **undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint8Array>): number | undefined;
    /**
     * 返回ArkTS Uint8Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，
     *     则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint8Array>): number;
    /**
     * 对ArkTS Uint8Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Uint8Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint8Array>): void;
    /**
     * 返回ArkTS Uint8Array中给定元素的第一个索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint8Array的长度，
     *     则返回**-1**。如果传入负数，则从前到后从ArkTS Uint8Array末尾开始搜索。
     * @returns { number } 该值第一次出现的索引。如果未找到该值，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Uint8Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果未传入任何值，则使用逗号（,）作为
     *     分隔符。
     * @returns { string } 拼接得到的字符串。如果数组为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Uint8Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Uint8Array对象。
     *
     * @param { TypedArrayMapCallback<number, Uint8Array> } callbackFn - 一个最多接受三个参数的函数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Uint8Array } 新的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint8Array>): Uint8Array;
    /**
     * 对ArkTS Uint8Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由最后一次调用归约函数返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>): number;
    /**
     * 对ArkTS Uint8Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为初始值开始
     *     累加。首次调用callbackfn函数时，将该值作为参数提供，
     *     而不是使用数组元素的值。
     * @returns { number } 由最后一次调用归约函数返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>, initialValue: number): number;
    /**
     * 对ArkTS Uint8Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由最后一次调用归约函数返回的最终结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint8Array>, initialValue: U): U;
    /**
     * 反转ArkTS Uint8Array。
     *
     * @returns { Uint8Array } 反转后的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint8Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 当前数组中要写入值的起始位置索引。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Uint8Array对象，其包含原ArkTS Uint8Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引。如果传入负数，则指代
     *     `start + Uint8Array.length` 位置的下标。默认值为**0**。
     * @param { number } [end] - 结束索引（不包含该元素）。如果传入负数，则指代
     *     `end + Uint8Array.length` 位置的下标。默认值为ArkTS Uint8Array的长度。
     * @returns { Uint8Array } 新的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint8Array;
    /**
     * 测试ArkTS Uint8Array中是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint8Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回**true**；
     *     否则返回**false**。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint8Array>): boolean;
    /**
     * 对ArkTS Uint8Array进行排序，并返回排序后的ArkTS Uint8Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Uint8Array } 排序后的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint8Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Uint8Array对象。
     *
     * @param { number } [begin] - 开始索引。如果传入负数，则指代
     *     `begin + Uint8Array.length` 位置的下标。默认值为**0**。
     * @param { number } [end] - 结束索引（不包含该元素）。如果传入负数，则指代
     *     `end + Uint8Array.length` 位置的下标。默认值为ArkTS Uint8Array的长度。
     * @returns { Uint8Array } 新的ArkTS Uint8Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint8Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 要返回的元素的索引（从零开始）。<br/>
     *     如果传入负数，则从最后一个元素开始倒数。
     * @returns { number | undefined } 获取到的元素；如果未找到，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个数字。
     *
     * @returns { IterableIterator<number> } 生成数字的迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint8Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Uint8Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 在数组中开始搜索searchElement的位置。
     * @returns { boolean } 检查结果。如果该元素存在则返回**true**；否则返回
     *     **false**。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Uint8Array实例中最后一次出现指定值的索引。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint8Array的长度，
     *     则返回**-1**。如果传入负数，则从后到前从ArkTS Uint8Array末尾开始搜索。
     * @returns { number } 该值最后一次出现的索引。如果未找到该值，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Uint8Array，对每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回
     * 最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint8Array> } callbackFn - 对Uint8Array中的每个元素
     *     调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用的第一个参数的值。
     *     <br>如果未提供初始值，则使用Uint8Array的最后一个元素，
     *     <br>回调将从倒数第二个元素开始调用。
     * @returns { U } 由最后一次调用归约函数返回的最终结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint8Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Uint8Array，对每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint8Array> } callbackFn - 对Uint8Array中的每个元素
     *     调用的函数。
     * @returns { number } 由最后一次调用归约函数返回的最终结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint8Array>): number;
    /**
     * 将ArkTS Uint8Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Uint8Array对象。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Uint8Array } 新的ArkTS Uint8Array实例。可能的原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint8Array;
 }

  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型：** \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int16Array {
    /**
     * ArkTS Int16Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Int16Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Int16Array的所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Int16Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Int16Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空ArkTS Int16Array对象。
     *
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Int16Array对象。
     *
     * @param { number } length - 用于指定ArkTS Int16Array的长度。
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Int16Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Int16Array
     *     对象。
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Int16Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Int16Array的对象。当参数类型是ArrayBuffer时，
     *     buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Int16Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Int16Array的ArrayBuffer对象。buffer所占的字节数须是
     *     4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始，默认为**0**。
     * @param { number } [length] - 指定ArkTS Int16Array的长度，默认为**0**。
     * @throws { BusinessError } 10200012 - The Int16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Int16Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Int16Array的ArrayLike对象。
     * @returns { Int16Array } 新创建的ArkTS Int16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int16Array;

    /**
     * 从一个ArrayLike中创建一个ArkTS Int16Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArkTS Int16Array的ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Int16Array } 新创建的ArkTS Int16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int16Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Int16Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数。如果省略，则不对元素进行加工处理。
     * @returns { Int16Array } 新创建的ArkTS Int16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int16Array;
    /**
     * 从ArkTS Int16Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标，如果`target < 0`，则会从`target + array.length`位置开始。
     * @param { number } start - 源起始位置下标，如果`start < 0`，则会从`start + Int16Array.length`位置开始。
     * @param { number } [end] - 源终止位置下标（不包含end位置的元素），如果`end < 0`，则会从`end + Int16Array.length`位置终止。
     *     默认为ArkTS Int16Array的长度。
     * @returns { Int16Array } 修改后的Int16Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int16Array;
    /**
     * 测试ArkTS Int16Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回true；
     *     否则，返回false。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int16Array>): boolean;
    /**
     * 使用特定值填充ArkTS Int16Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引，如果`start < 0`，则会从`start + Int16Array.length`位置开始。
     *     默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素），如果`end < 0`，则会到`end + Int16Array.length`位置结束。
     *     默认为ArkTS Int16Array的长度。
     * @returns { Int16Array } 填充后的Int16Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int16Array;
    /**
     * 返回一个新ArkTS Int16Array，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Int16Array } 过滤后的ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int16Array>): Int16Array;
    /**
     * 返回ArkTS Int16Array中第一个满足指定条件的元素的值。如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int16Array>): number | undefined;
    /**
     * 返回ArkTS Int16Array中第一个满足指定条件的元素索引。如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int16Array>): number;
    /**
     * 对ArkTS Int16Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Int16Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int16Array>): void;
    /**
     * 返回ArkTS Int16Array中给定元素的第一个索引。如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Int16Array的长度，
     *     则返回**-1**。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从前到后搜索。
     * @returns { number } 元素的第一个索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Int16Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号(,)作为分隔符。
     * @returns { string } 包含所有元素拼接成的字符串。如果ArkTS Int16Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Int16Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Int16Array对象。
     *
     * @param { TypedArrayMapCallback<number, Int16Array> } callbackFn - 回调函数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Int16Array } 新ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int16Array>): Int16Array;
    /**
     * 对ArkTS Int16Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - 归约函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由最后一次调用归约函数得到的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>): number;
    /**
     * 对ArkTS Int16Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - 归约函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为开始累加的初始值。
     *     首次调用callbackfn函数时将此值作为参数传入，而不是使用数组元素。
     * @returns { number } 由最后一次调用归约函数得到的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>, initialValue: number): number;
    /**
     * 对ArkTS Int16Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int16Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由最后一次调用归约函数得到的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int16Array>, initialValue: U): U;
    /**
     * 反转ArkTS Int16Array。
     *
     * @returns { Int16Array } 反转后的ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int16Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。默认为0。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Int16Array对象，其包含原ArkTS Int16Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引，如果`start < 0`，则会从`start + Int16Array.length`位置开始。
     *     默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end + Int16Array.length`位置结束。
     *     默认为ArkTS Int16Array的长度。
     * @returns { Int16Array } 新的ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int16Array;
    /**
     * 测试ArkTS Int16Array中的是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int16Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件返回true；
     *     否则，返回false。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int16Array>): boolean;
    /**
     * 对ArkTS Int16Array进行排序，并返回排序后的ArkTS Int16Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Int16Array } 排序后的ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int16Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Int16Array对象。
     *
     * @param { number } [begin] - 开始索引，如果`begin < 0`，则会从`begin + Int16Array.length`位置开始。
     *     默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end + Int16Array.length`位置结束。
     *     默认为ArkTS Int16Array的长度。
     * @returns { Int16Array } 新的ArkTS Int16Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int16Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 要返回的元素的索引（从零开始），取值为整数。
     *     如果`index < 0`，则会访问`index + Int16Array.length`位置的元素。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个 JavaScript 对象。
     * 说明：
     * 本接口不支持在.ets文件中使用。
     *
     * @returns { IterableIterator<number> } 返回一个迭代器。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int16Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int16Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Int16Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Int16Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引，如果`fromIndex < 0`，则会从`fromIndex + Int16Array.length`位置开始。
     *     默认值为0。
     * @returns { boolean } 检查结果。如果ArkTS Int16Array包含指定的元素，则返回true；否则返回false。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Int16Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Int16Array中最后一次出现指定值的索引。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Int16Array的长度，
     *     则返回**-1**。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从后到前搜索。
     * @returns { number } 元素最后一次出现的索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Int16Array，对其中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回
     * 最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int16Array> } callbackFn - 对Int16Array中的
     *     每个元素调用的函数。
     * @param { U } initialValue - 作为首次调用回调函数的第一个参数使用的值。
     *     <br>如果未提供初始值，则使用Int16Array的最后一个元素作为初始值，
     *     <br>回调将从倒数第二个元素开始执行。
     * @returns { U } 由最后一次调用归约函数得到的结果。可能原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int16Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Int16Array，对其中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int16Array> } callbackFn - 对Int16Array中的
     *     每个元素调用的函数。
     * @returns { number } 由最后一次调用归约函数得到的结果。可能原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int16Array>): number;
    /**
     * ArkTS Int16Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，
     * 然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Int16Array对象，参数个数可以是0个、1个或者多个。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Int16Array } 新的ArkTS Int16Array实例。可能原因：1. 必填参数未指定；
     *     <br>2. 参数类型不正确；3. 参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int16Array;
 }
  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint16Array {
    /**
     * ArkTS Uint16Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Uint16Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Uint16Array的所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Uint16Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Uint16Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空ArkTS Uint16Array对象。
     *
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Uint16Array对象。
     *
     * @param { number } length - 用于指定ArkTS Uint16Array的长度。
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Uint16Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Uint16Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Uint16Array的对象。当参数类型是ArrayBuffer时buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Uint16Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Uint16Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始。默认值为**0**。
     * @param { number } [length] - 指定ArkTS Uint16Array的长度。默认值为**0**。
     * @throws { BusinessError } 10200012 - The Uint16Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Uint16Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Uint16Array的ArrayLike对象。
     * @returns { Uint16Array } 新创建的ArkTS Uint16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint16Array;
    /**
     * 从一个ArrayLike中创建一个ArkTS Uint16Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Uint16Array } 新创建的ArkTS Uint16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint16Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Uint16Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数。如果省略，则不对元素进行加工处理。
     * @returns { Uint16Array } 新创建的ArkTS Uint16Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint16Array;
    /**
     * 从ArkTS Uint16Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标，如果`target < 0`，则会从`target + array.length`位置开始。
     * @param { number } start - 源起始位置下标，如果`start < 0`，则会从`start + Uint16Array.length`位置开始。
     * @param { number } [end] - 源终止位置下标（不包含end位置的元素），如果`end < 0`，则会从`end +
     *     Uint16Array.length`位置终止。默认为ArkTS Uint16Array的长度。
     * @returns { Uint16Array } 修改后的ArkTS Uint16Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint16Array;
    /**
     * 测试ArkTS Uint16Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 如果所有元素都满足指定条件则返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint16Array>): boolean;
    /**
     * 使用特定值填充ArkTS Uint16Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引，如果`start < 0`，则会从`start +
     *     Uint16Array.length`位置开始。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint16Array.length`位置结束。默认为ArkTS Uint16Array的长度。
     * @returns { Uint16Array } 填充后的ArkTS Uint16Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint16Array;
    /**
     * 返回一个新ArkTS Uint16Array，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Uint16Array } 过滤后的ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint16Array>): Uint16Array;
    /**
     * 返回ArkTS Uint16Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint16Array>): number | undefined;
    /**
     * 返回ArkTS Uint16Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint16Array>): number;
    /**
     * 对ArkTS Uint16Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Uint16Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint16Array>): void;
    /**
     * 返回在ArkTS Uint16Array中给定元素的第一个索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint16Array的长度，则返回**-1**。
     *     如果提供的下标值是负数，则被当做距离数组尾部的偏移，从前到后搜索。
     * @returns { number } 数组中元素的第一个索引；没有找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Uint16Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号（,）分隔。
     * @returns { string } 包含所有元素拼接成的字符串。如果ArkTS Uint16Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Uint16Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Uint16Array对象。
     *
     * @param { TypedArrayMapCallback<number, Uint16Array> } callbackFn - 回调函数。map方法会对数组中的每个元素调用一次callbackFn函数。
     * @returns { Uint16Array } 新ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint16Array>): Uint16Array;
    /**
     * 对ArkTS Uint16Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - 归约函数。reduce方法会对数组中的每个元素调用一次callbackFn函数。
     * @returns { number } 由最后一次调用归约函数返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>): number;
    /**
     * 对ArkTS Uint16Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - 归约函数。reduce方法会对数组中的每个元素调用一次callbackFn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为初始值开始累加。
     *     首次调用callbackFn函数时会将该值作为参数传入，而不是使用数组元素值。
     * @returns { number } 由最后一次调用归约函数返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>, initialValue: number): number;
    /**
     * 对ArkTS Uint16Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint16Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由最后一次调用归约函数返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint16Array>, initialValue: U): U;
    /**
     * 反转ArkTS Uint16Array。
     *
     * @returns { Uint16Array } 反转后的ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint16Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。默认为0。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Uint16Array对象，其包含原ArkTS Uint16Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引，如果`start < 0`，则会从`start +
     *     Uint16Array.length`位置开始。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint16Array.length`位置结束。默认为ArkTS Uint16Array的长度。
     * @returns { Uint16Array } 新的ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint16Array;
    /**
     * 测试ArkTS Uint16Array中的是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint16Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 如果存在元素满足指定条件返回true，否则返回false。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint16Array>): boolean;
    /**
     * 对ArkTS Uint16Array进行排序，并返回排序后的ArkTS Uint16Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Uint16Array } 排序后的ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint16Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Uint16Array对象。
     *
     * @param { number } [begin] - 开始索引，如果`begin < 0`，则会从`begin +
     *     Uint16Array.length`位置开始。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end +
     *     Uint16Array.length`位置结束。默认为ArkTS Uint16Array的长度。
     * @returns { Uint16Array } 新的ArkTS Uint16Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint16Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 要返回的Array元素的索引（从零开始），取值为整数。<br/>如果`index < 0`，则会访问`index + Uint16Array.length`位置的元素。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个数字。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint16Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint16Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint16Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 新的迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Uint16Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引。
     * @returns { boolean } 如果ArkTS Uint16Array包含指定的元素，则返回true；否则返回false。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Uint16Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Uint16Array实例中最后一次出现searchElement的索引，如果对象不包含，则为-1。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint16Array的长度，则返回**-1**。
     *     如果提供的下标值是负数，则被当做距离数组尾部的偏移，从后到前搜索。
     * @returns { number } 数组中给定元素的最后一个索引；没有找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Uint16Array，对ArkTS Uint16Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint16Array> } callbackFn - 对Uint16Array中每个元素调用的函数。
     * @param { U } initialValue - 作为首次调用callbackFn函数第一个参数的值。
     *     <br>若未提供初始值，则会使用Uint16Array的最后一个元素作为初始值，
     *     <br>并从倒数第二个元素开始调用callback。
     * @returns { U } 由最后一次调用归约函数返回的结果。可能的异常原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint16Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Uint16Array，对ArkTS Uint16Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint16Array> } callbackFn - 对Uint16Array中每个元素调用的函数。
     * @returns { number } 由最后一次调用归约函数返回的结果。可能的异常原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint16Array>): number;
    /**
     * ArkTS Uint16Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Uint16Array对象，参数个数可以是0个、1个或者多个。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Uint16Array } 新的ArkTS Uint16Array实例。可能的异常原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint16Array;
 }
  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Int32Array {
    /**
     * ArkTS Float32Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Float32Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Float32Array所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Float32Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Float32Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空的ArkTS Int32Array对象。
     *
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Int32Array对象。
     *
     * @param { number } length - 用于指定ArkTS Int32Array的长度。
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Int32Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Int32Array对象。
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Int32Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Int32Array的对象。当参数类型是ArrayBuffer时，
     *     buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Int32Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Int32Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始。默认值为**0**。
     * @param { number } [length] - 指定ArkTS Int32Array的长度。默认值为**0**。
     * @throws { BusinessError } 10200012 - The Int32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Int32Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Int32Array的ArrayLike对象。
     * @returns { Int32Array } 新创建的ArkTS Int32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Int32Array;
    /**
     * 从一个ArrayLike中创建一个ArkTS Int32Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造Int32Array的ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Int32Array } 新创建的ArkTS Int32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int32Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Int32Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造Int32Array的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数，用于对每个元素进行处理。如果省略，则不对元素进行加工处理。
     * @returns { Int32Array } 新创建的ArkTS Int32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int32Array;
    /**
     * 从ArkTS Int32Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标。如果传入负数，则表示`target + array.length`位置的下标。
     * @param { number } start - 源起始位置的下标。如果传入负数，则表示`start + Int32Array.length`位置的下标。
     * @param { number } [end] - 源终止位置的下标（不包含end位置的元素）。如果传入负数，则表示`end + Int32Array.length`
     *     位置的下标。默认值为ArkTS Int32Array的长度。
     * @returns { Int32Array } 修改后的Int32Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Int32Array;
    /**
     * 测试ArkTS Int32Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Int32Array>): boolean;
    /**
     * 使用特定值填充ArkTS Int32Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引。如果传入负数，则表示`start + Int32Array.length`位置的索引。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素）。如果传入负数，则表示`end + Int32Array.length`
     *     位置的索引。默认值为ArkTS Int32Array的长度。
     * @returns { Int32Array } 填充后的Int32Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Int32Array;
    /**
     * 返回一个新ArkTS Int32Array，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Int32Array } 过滤后的ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Int32Array>): Int32Array;
    /**
     * 返回ArkTS Int32Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Int32Array>): number | undefined;
    /**
     * 返回ArkTS Int32Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Int32Array>): number;
    /**
     * 对ArkTS Int32Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Int32Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Int32Array>): void;
    /**
     * 返回在ArkTS Float32Array中给定元素的第一个索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Float32Array的长度，
     *     则返回**-1**。如果传入负数，则从ArkTS Float32Array末尾开始搜索。
     * @returns { number } 数组中元素的第一个索引；如果未找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Float32Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号（,）作为分隔符。
     * @returns { string } 包含所有元素拼接成的字符串。如果数组为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Int32Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Int32Array对象。
     *
     * @param { TypedArrayMapCallback<number, Int32Array> } callbackFn - 一个最多接受三个参数的函数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Int32Array } 新ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Int32Array>): Int32Array;
    /**
     * 对ArkTS Int32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>): number;
    /**
     * 对ArkTS Int32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为开始累加的初始值。
     *     首次调用callbackfn函数时以此值作为参数，而不是使用数组元素值。
     * @returns { number } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>, initialValue: number): number;
    /**
     * 对ArkTS Int32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int32Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int32Array>, initialValue: U): U;
    /**
     * 反转ArkTS Int32Array。
     *
     * @returns { Int32Array } 反转后的ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Int32Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 当前数组中开始写入值的位置索引。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Int32Array对象，其包含原ArkTS Int32Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引。如果传入负数，则表示`start + Int32Array.length`位置的索引。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素）。如果传入负数，则表示`end + Int32Array.length`位置
     *     的索引。默认值为ArkTS Int32Array的长度。
     * @returns { Int32Array } 新的ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Int32Array;
    /**
     * 测试ArkTS Int32Array中是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Int32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Int32Array>): boolean;
    /**
     * 对ArkTS Int32Array进行排序，并返回排序后的ArkTS Int32Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Int32Array } 排序后的ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Int32Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Int32Array对象。
     *
     * @param { number } [begin] - 开始索引。如果传入负数，则表示`begin + Int32Array.length`位置的索引。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素）。如果传入负数，则表示`end + Int32Array.length`位置
     *     的索引。默认值为ArkTS Int32Array的长度。
     * @returns { Int32Array } 新的ArkTS Int32Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Int32Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 要返回的元素的索引（从零开始）。<br/>如果传入负数，则从末尾倒数访问。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个number。
     *
     * @returns { IterableIterator<number> } 迭代number的迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Float32Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引位置。
     * @returns { boolean } 检查结果。如果包含指定元素则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Int32Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Int32Array实例中最后一次出现searchElement的索引，如果对象不包含，则为**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Int32Array的长度，
     *     则返回**-1**。如果传入负数，则从ArkTS Int32Array末尾开始搜索。
     * @returns { number } 数组中给定元素的最后一个索引；如果未找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Int32Array，对ArkTS Int32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，
     * 并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Int32Array> } callbackFn - 对Int32Array中每个元素调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用的第一个参数的初始值。
     *     <br>如果未提供初始值，则使用Int32Array的最后一个元素作为初始值，
     *     <br>并且回调从倒数第二个元素开始执行。
     * @returns { U } 由归约函数最后一次调用返回的结果。可能原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int32Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Int32Array，对ArkTS Int32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Int32Array> } callbackFn - 对Int32Array中每个元素调用的函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。可能原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int32Array>): number;
    /**
     * ArkTS Int32Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的**toLocaleString**方法把数字转换为字符串，
     * 然后使用逗号（,）将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Int32Array对象，参数个数可以是0个、1个或者多个。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Int32Array } 新的ArkTS Int32Array实例。可能原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Int32Array;
 }
  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Uint32Array {
    /**
     * ArkTS Uint32Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Uint32Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Uint32Array所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Uint32Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Uint32Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空的ArkTS Uint32Array对象。
     *
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Uint32Array对象。
     *
     * @param { number } length - 用于指定ArkTS Uint32Array的长度。
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Uint32Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Uint32Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Uint32Array的对象。当参数类型是ArrayBuffer时，
     *     buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Uint32Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Uint32Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始。默认值为**0**。
     * @param { number } [length] - 指定ArkTS Uint32Array的长度。默认值为**0**。
     * @throws { BusinessError } 10200012 - The Uint32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Uint32Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Uint32Array的ArrayLike对象。
     * @returns { Uint32Array } 新创建的ArkTS Uint32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Uint32Array;
    /**
     * 从一个ArrayLike中创建一个ArkTS Uint32Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Uint32Array } 新创建的ArkTS Uint32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint32Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Uint32Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数，用于对每个元素进行加工处理。
     * @returns { Uint32Array } 新创建的ArkTS Uint32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint32Array;
    /**
     * 从ArkTS Uint32Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标。如果传入负数，则指代`target + array.length`位置的下标。
     * @param { number } start - 源起始位置的下标。如果传入负数，则指代`start + Uint32Array.length`位置的下标。
     * @param { number } [end] - 源终止位置的下标（不包含end位置的元素）。如果传入负数，则指代`end + Uint32Array.length`
     *     位置的下标。默认值为ArkTS Uint32Array的长度。
     * @returns { Uint32Array } 修改后的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Uint32Array;
    /**
     * 测试ArkTS Uint32Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean;
    /**
     * 使用特定值填充ArkTS Uint32Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引。如果传入负数，则指代`start + Uint32Array.length`位置。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素）。如果传入负数，则指代`end + Uint32Array.length`
     *     位置。默认值为ArkTS Uint32Array的长度。
     * @returns { Uint32Array } 填充后的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Uint32Array;
    /**
     * 返回一个新的ArkTS Uint32Array对象，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Uint32Array } 过滤后的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Uint32Array>): Uint32Array;
    /**
     * 返回ArkTS Uint32Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Uint32Array>): number | undefined;
    /**
     * 返回ArkTS Uint32Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Uint32Array>): number;
    /**
     * 对ArkTS Uint32Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Uint32Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Uint32Array>): void;
    /**
     * 返回在ArkTS Uint32Array中给定元素的第一个索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint32Array的长度，
     *     则返回**-1**。如果传入负数，则从ArkTS Uint32Array的末尾开始向前搜索。
     * @returns { number } 数组中给定元素的第一个索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Uint32Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号（,）作为分隔符。
     * @returns { string } 拼接后的字符串。如果ArkTS Uint32Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Uint32Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Uint32Array对象。
     *
     * @param { TypedArrayMapCallback<number, Uint32Array> } callbackFn - 一个最多接受三个参数的函数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Uint32Array } 新的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Uint32Array>): Uint32Array;
    /**
     * 对ArkTS Uint32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number;
    /**
     * 对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，
     * 并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - 一个最多接受四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { number } initialValue - 如果指定了initialValue，则将其作为开始累加的初始值。
     *     首次调用callbackfn函数时将提供此值作为参数，而不是数组元素值。
     * @returns { number } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>, initialValue: number): number;
    /**
     * 对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，
     * 并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint32Array> } callbackFn - 归约函数。
     * @param { U } initialValue - 初始值。
     * @returns { U } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U;
    /**
     * 反转ArkTS Uint32Array。
     *
     * @returns { Uint32Array } 反转后的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Uint32Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Uint32Array对象，其包含原ArkTS Uint32Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引。如果传入负数，则指代`start + Uint32Array.length`位置。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素）。如果传入负数，则指代`end + Uint32Array.length`位置。
     *     默认值为ArkTS Uint32Array的长度。
     * @returns { Uint32Array } 新的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Uint32Array;
    /**
     * 测试ArkTS Uint32Array中是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Uint32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean;
    /**
     * 对ArkTS Uint32Array进行排序，并返回排序后的ArkTS Uint32Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Uint32Array } 排序后的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Uint32Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Uint32Array对象。
     *
     * @param { number } [begin] - 开始索引。如果传入负数，则指代`begin + Uint32Array.length`位置。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素）。如果传入负数，则指代`end + Uint32Array.length`位置。
     *     默认值为ArkTS Uint32Array的长度。
     * @returns { Uint32Array } 新的ArkTS Uint32Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Uint32Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 所需代码单元的从零开始的索引。<br/>如果传入负数，则从最后一个元素开始反向计数。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个数字。
     *
     * @returns { IterableIterator<number> } 产出数字的迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Uint32Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的位置。
     * @returns { boolean } 检查结果。如果ArkTS Uint32Array包含指定的元素，则返回**true**；否则返回**false**。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Uint32Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Uint32Array实例中最后一次出现给定元素的索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Uint32Array的长度，
     *     则返回**-1**。如果传入负数，则从ArkTS Uint32Array的末尾开始向前搜索。
     * @returns { number } 数组中给定元素的最后一个索引；如果不存在，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Uint32Array，对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数
     * 首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Uint32Array> } callbackFn - 对Uint32Array中的每个元素调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用时第一个参数使用的值。
     *     <br>若未提供初始值，则使用Uint32Array的最后一个元素作为初始值，
     *     <br>且回调函数将从倒数第二个元素开始调用。
     * @returns { U } 由归约函数最后一次调用返回的结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Uint32Array，对ArkTS Uint32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Uint32Array> } callbackFn - 对Uint32Array中的每个元素调用的函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number;
    /**
     * ArkTS Uint32Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的**toLocaleString**方法把数字
     * 转换为字符串，然后使用逗号（,）将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Uint32Array对象。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Uint32Array } 新的ArkTS Uint32Array实例。可能的原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Uint32Array;
 }

  /**
   * 一种线性数据结构，底层基于[ArkTS ArrayBuffer]{@link ./arkts/@arkts.collections:collections}实现。
   *
   * > **说明：**
   * >
   * > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。
   * > **装饰器类型：** \@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Sendable
  class Float32Array {
    /**
     * ArkTS Float32Array中每个元素所占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static readonly BYTES_PER_ELEMENT: number;
    /**
     * ArkTS Float32Array底层使用的buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly buffer: ArrayBuffer;
    /**
     * ArkTS Float32Array的所占的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteLength: number;
    /**
     * ArkTS Float32Array距离其ArrayBuffer起始位置的偏移。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly byteOffset: number;
    /**
     * ArkTS Float32Array元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly length: number;
    /**
     * 构造函数，用于创建一个空ArkTS Float32Array对象。
     *
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor();
    /**
     * 构造函数，用于创建一个指定长度的ArkTS Float32Array对象。
     *
     * @param { number } length - 用于指定ArkTS Float32Array的长度。
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(length: number);
    /**
     * 构造函数，以Iterable创建一个ArkTS Float32Array对象。
     *
     * @param { Iterable<number> } elements - 可迭代数字集合，用于构造ArkTS Float32Array对象。
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(elements: Iterable<number>);
    /**
     * 构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Float32Array对象。
     *
     * @param { ArrayLike<number> | ArrayBuffer } array - 用于构造ArkTS Float32Array的对象。当参数类型是ArrayBuffer时buffer所占的字节数须是4的整数倍。
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(array: ArrayLike<number> | ArrayBuffer);
    /**
     * 构造函数，以ArrayBuffer创建一个ArkTS Float32Array对象。
     *
     * @param { ArrayBuffer } buffer - 用于构造ArkTS Float32Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。
     * @param { number } [byteOffset] - 指定buffer的字节偏移，从0开始，默认为**0**。
     * @param { number } [length] - 指定ArkTS Float32Array的长度，默认为**0**。
     * @throws { BusinessError } 10200012 - The Float32Array's constructor cannot be directly invoked.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
    /**
     * 从一个ArrayLike或者可迭代对象中创建一个ArkTS Float32Array对象。
     *
     * @param { ArrayLike<number> } arrayLike - 用于构造ArkTS Float32Array的ArrayLike对象。
     * @returns { Float32Array } 新创建的ArkTS Float32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: ArrayLike<number>): Float32Array;
    /**
     * 从一个ArrayLike中创建一个ArkTS Float32Array对象。
     *
     * @param { ArrayLike<T> } arrayLike - 用于构造ArrayLike对象。
     * @param { TypedArrayFromMapFn<T, number> } mapFn - 映射函数。
     * @returns { Float32Array } 新创建的ArkTS Float32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Float32Array;
    /**
     * 从一个可迭代对象中创建一个ArkTS Float32Array对象。
     *
     * @param { Iterable<number> } arrayLike - 用于构造的可迭代对象。
     * @param { TypedArrayFromMapFn<number, number> } [mapFn] - 映射函数。如果省略，则不对元素进行加工处理。
     * @returns { Float32Array } 新创建的ArkTS Float32Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Float32Array;
    /**
     * 从ArkTS Float32Array指定范围内的元素依次拷贝到目标位置。
     *
     * @param { number } target - 目标起始位置的下标，如果`target < 0`，则会从`target + array.length`位置开始。
     * @param { number } start - 源起始位置下标，如果`start < 0`，则会从`start + Float32Array.length`位置开始。
     * @param { number } [end] - 源终止位置下标（不包含end位置的元素），如果`end < 0`，则会从`end + Float32Array.length`位置终止。默认为ArkTS Float32Array的长度。
     * @returns { Float32Array } 修改后的Float32Array。
     * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    copyWithin(target: number, start: number, end?: number): Float32Array;
    /**
     * 测试ArkTS Float32Array中的所有元素是否满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果所有元素都满足指定条件则返回**true**，否则返回**false**。
     * @throws { BusinessError } 10200011 - The every method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    every(predicate: TypedArrayPredicateFn<number, Float32Array>): boolean;
    /**
     * 使用特定值填充ArkTS Float32Array指定范围的全部元素。
     *
     * @param { number } value - 待填充的值。
     * @param { number } [start] - 开始填充的索引，如果`start < 0`，则会从`start + Float32Array.length`位置开始。默认值为**0**。
     * @param { number } [end] - 结束填充的索引（不包括该元素），如果`end < 0`，则会到`end + Float32Array.length`位置结束。默认为ArkTS Float32Array的长度。
     * @returns { Float32Array } 填充后的Float32Array。
     * @throws { BusinessError } 10200011 - The fill method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    fill(value: number, start?: number, end?: number): Float32Array;
    /**
     * 返回一个新ArkTS Float32Array，其包含满足指定条件的所有元素。
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - 用于元素过滤的断言函数。
     * @returns { Float32Array } 过滤后的ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The filter method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    filter(predicate: TypedArrayPredicateFn<number, Float32Array>): Float32Array;
    /**
     * 返回ArkTS Float32Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number | undefined } 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The find method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    find(predicate: TypedArrayPredicateFn<number, Float32Array>): number | undefined;
    /**
     * 返回ArkTS Float32Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - 用于元素查找的断言函数。
     * @returns { number } 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回**-1**。
     * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    findIndex(predicate: TypedArrayPredicateFn<number, Float32Array>): number;
    /**
     * 对ArkTS Float32Array中的每个元素执行提供的回调函数。
     *
     * @param { TypedArrayForEachCallback<number, Float32Array> } callbackFn - 用于对每个元素执行的回调函数。
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    forEach(callbackFn: TypedArrayForEachCallback<number, Float32Array>): void;
    /**
     * 返回在ArkTS Float32Array中给定元素的第一个索引，如果不存在，则返回**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } [fromIndex] - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Float32Array的长度，则返回**-1**。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从前到后搜索。
     * @returns { number } 数组中元素的第一个索引；没有找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    indexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 将ArkTS Float32Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。
     *
     * @param { string } [separator] - 分隔字符串。如果省略，则使用逗号分隔。
     * @returns { string } 包含所有元素拼接成的字符串。如果ArkTS Float32Array为空，则返回空字符串。
     * @throws { BusinessError } 10200011 - The join method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    join(separator?: string): string;
    /**
     * 对ArkTS Float32Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Float32Array对象。
     *
     * @param { TypedArrayMapCallback<number, Float32Array> } callbackFn - 一个接受最多三个参数的函数。
     *     map方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { Float32Array } 新ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The map method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    map(callbackFn: TypedArrayMapCallback<number, Float32Array>): Float32Array;
    /**
     * 对ArkTS Float32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Float32Array> } callbackFn - 一个接受最多四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce(callbackFn: TypedArrayReduceCallback<number, number, Float32Array>): number;
    /**
     * 对ArkTS Float32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Float32Array> } callbackFn - 一个接受最多四个参数的函数。
     *     reduce方法对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 如果指定了initialValue，则将其作为开始累积的初始值。
     *     首次调用callbackfn函数时将该值作为参数提供，而不是使用数组元素值。
     * @returns { U } 由归约函数最后一次调用返回的结果。
     * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reduce<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Float32Array>, initialValue: U): U;
    /**
     * 反转ArkTS Float32Array。
     *
     * @returns { Float32Array } 反转后的ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    reverse(): Float32Array;
    /**
     * 将传入的ArrayLike元素依次写入到指定的起始位置。
     *
     * @param { ArrayLike<number> } array - 用于设置的ArrayLike对象。
     * @param { number } [offset] - 写入的起始位置。默认为0。
     * @throws { BusinessError } 10200011 - The set method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    set(array: ArrayLike<number>, offset?: number): void;
    /**
     * 返回一个新的ArkTS Float32Array对象，其包含原ArkTS Float32Array指定范围的内容。
     *
     * @param { number } [start] - 开始索引，如果`start < 0`，则会从`start + Float32Array.length`位置开始。默认为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end + Float32Array.length`位置结束。默认为ArkTS Float32Array的长度。
     * @returns { Float32Array } 新的ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The slice method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    slice(start?: number, end?: number): Float32Array;
    /**
     * 测试ArkTS Float32Array中的是否存在元素满足指定条件。
     *
     * @param { TypedArrayPredicateFn<number, Float32Array> } predicate - 用于测试的断言函数。
     * @returns { boolean } 检查结果。如果存在元素满足指定条件则返回**true**，否则返回**false**。
     * @throws { BusinessError } 10200011 - The some method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    some(predicate: TypedArrayPredicateFn<number, Float32Array>): boolean;
    /**
     * 对ArkTS Float32Array进行排序，并返回排序后的ArkTS Float32Array对象。
     *
     * @param { TypedArrayCompareFn<number> } [compareFn] - 用于确定元素顺序的函数。默认使用升序排序。
     * @returns { Float32Array } 排序后的ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The sort method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    sort(compareFn?: TypedArrayCompareFn<number>): Float32Array;
    /**
     * 从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Float32Array对象。
     *
     * @param { number } [begin] - 开始索引，如果`begin < 0`，则会从`begin + Float32Array.length`位置开始。默认值为**0**。
     * @param { number } [end] - 结束索引（不包括该元素），如果`end < 0`，则会到`end + Float32Array.length`位置结束。默认为ArkTS Float32Array的长度。
     * @returns { Float32Array } 新的ArkTS Float32Array对象。
     * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    subarray(begin?: number, end?: number): Float32Array;
    /**
     * 返回指定下标的元素，如果不存在，则返回**undefined**。
     *
     * @param { number } index - 要返回的Array元素的索引（从零开始），取值为整数。<br/>
     *     如果`index < 0`，则会访问`index + Float32Array.length`位置的元素。
     * @returns { number | undefined } 指定下标的元素；如果不存在，则返回**undefined**。
     * @throws { BusinessError } 10200011 - The at method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    at(index: number): number | undefined;
    /**
     * 返回一个迭代器，迭代器的每一项都是一个 JavaScript 对象，并返回该对象。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的键值对。
     *
     * @returns { IterableIterator<[number, number]> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The entries method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的键（下标）。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The keys method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    keys(): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含ArkTS Float32Array中每个元素的值。
     *
     * @returns { IterableIterator<number> } 迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    values(): IterableIterator<number>;
    /**
     * 判断ArkTS Float32Array是否包含特定元素。
     *
     * @param { number } searchElement - 待搜索的元素。
     * @param { number } [fromIndex] - 开始搜索的索引。
     * @returns { boolean } 检查结果。如果ArkTS Float32Array包含指定的元素，则返回**true**，否则返回**false**。
     * @throws { BusinessError } 10200011 - The includes method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    includes(searchElement: number, fromIndex?: number): boolean;
    /**
     * 返回Float32Array指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    [index: number]: number;
    /**
     * 返回ArkTS Float32Array实例中最后一次出现searchElement的索引，如果对象不包含，则为**-1**。
     *
     * @param { number } searchElement - 待索引的值。
     * @param { number } fromIndex - 搜索的起始下标。默认值为**0**。如果下标大于等于ArkTS Float32Array的长度，则返回**-1**。如果提供的下标值是负数，则被当做距离数组尾部的偏移，从后到前搜索。
     * @returns { number } 数组中给定元素的最后一个索引；没有找到，则返回**-1**。
     * @throws { BusinessError } 10200011 - The lastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    /**
     * 反向遍历ArkTS Float32Array，对ArkTS Float32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<U, number, Float32Array> } callbackFn - 对Float32Array中的每个元素调用的函数。
     * @param { U } initialValue - 作为回调函数首次调用第一个参数的值。
     *     <br>如果未提供初始值，则使用Float32Array的最后一个元素，
     *     <br>并且回调函数从倒数第二个元素开始调用。
     * @returns { U } 由归约函数最后一次调用返回的结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Float32Array>, initialValue: U): U;
    /**
     * 反向遍历ArkTS Float32Array，对ArkTS Float32Array中的每个元素执行归约函数，并返回最终的归约结果。
     *
     * @param { TypedArrayReduceCallback<number, number, Float32Array> } callbackFn - 对Float32Array中的每个元素调用的函数。
     * @returns { number } 由归约函数最后一次调用返回的结果。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The reduceRight method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Float32Array>): number;
    /**
     * ArkTS Float32Array转换为字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的toLocaleString方法把数字转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。
     *
     * @returns { string } 一个包含数组所有元素的字符串。
     * @throws { BusinessError } 10200011 - The toLocaleString method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toLocaleString(): string;
    /**
     * 通过可变数量的参数创建一个新的ArkTS Float32Array对象，参数个数可以是0个、1个或者多个。
     *
     * @param { number[] } items - 用于创建数组的元素，参数个数可以是0个、1个或者多个。
     * @returns { Float32Array } 新的ArkTS Float32Array实例。可能的原因：1.必填参数未指定；
     *     <br>2.参数类型不正确；3.参数校验失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    static of(...items: number[]): Float32Array;
 }

  /**
   * 一种线性数据结构，底层基于数组实现。BitVector 中存储的元素为 bit 值，能够存储和处理 bit 级别的操作。
   *
   * > **NOTE**
   * >
   * > - 此模块仅支持在 ArkTS 文件（文件后缀为 .ets）中导入使用。
   * > **装饰器**：\@Sendable
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Sendable
  class BitVector {
    /**
     * BitVector 的构造函数。
     *
     * @param { number } length - 初始化 BitVector 的长度。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    constructor(length: number);
    /**
     * BitVector 的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    readonly length: number;
    /**
     * 在 BitVector 尾部插入元素。
     *
     * @param { number } element - 待插入的元素，**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @returns { boolean } 操作结果。插入成功返回 **true**，失败返回 **false**。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The push method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    push(element: number): boolean;
    /**
     * 弹出 BitVector 尾部的元素。
     *
     * @returns { number } 弹出 BitVector 尾部的元素，其值为对应 bit 值。
     * @throws { BusinessError } 10200011 - The pop method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    pop(): number;
    /**
     * 判断范围内是否包含特定 bit 值。
     *
     * @param { number } element - bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     **length**，则会抛出错误。
     * @returns { boolean } 检查结果。包含特定 bit 值返回 **true**，否则返回 **false**。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The has method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    has(element: number, fromIndex: number, toIndex: number): boolean;
    /**
     * 将 BitVector 中指定范围的元素均设为特定 bit 值。
     *
     * @param { number } element - 待设置的 bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The setBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    setBitsByRange(element: number, fromIndex: number, toIndex: number): void;
    /**
     * 将 BitVector 中所有元素均设为特定 bit 值。
     *
     * @param { number } element - 待设置的 bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The setAllBits method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    setAllBits(element: number): void;
    /**
     * 获取指定范围内的 bit 值。
     *
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。
     * @returns { BitVector } 包含所获取 bit 值的 BitVector。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getBitsByRange(fromIndex: number, toIndex: number): BitVector;
    /**
     * 改变 BitVector 的长度。
     * 如果 **size** 大于原 BitVector 的长度，则扩充原 BitVector 的长度，多出部分的元素设置为 0。
     * 如果 **size** 小于等于原 BitVector 的长度，则将原 BitVector 按 size 长度大小裁剪。
     *
     * @param { number } size - 需要改变的长度。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200011 - The resize method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    resize(size: number): void;
    /**
     * 统计指定范围内获取指定 bit 值的数量。
     *
     * @param { number } element - bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。
     * @returns { number } 统计指定范围内获取指定 bit 值的数量。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitCountByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getBitCountByRange(element: number, fromIndex: number, toIndex: number): number;
    /**
     * 返回指定 bit 值首次出现时的索引值，查找失败返回 **-1**。
     *
     * @param { number } element - bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。
     * @returns { number } 返回指定 bit 值首次出现时的索引值，查找失败返回 **-1**。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getIndexOf(element: number, fromIndex: number, toIndex: number): number;
    /**
     * 返回指定 bit 值最后一次出现时的索引值，查找失败返回 **-1**。
     *
     * @param { number } element - bit 值。**0** 表示 bit 值 0，其余值表示 bit 值 1。
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。
     * @returns { number } 返回指定 bit 值最后一次出现时的索引值，查找失败返回 **-1**。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    getLastIndexOf(element: number, fromIndex: number, toIndex: number): number;
    /**
     * 翻转 BitVector 指定索引处的 bit 值，0 翻转为 1，1 翻转为 0。
     *
     * @param { number } index - 指定索引。如果 **index** 小于 **0** 或者大于等于 **length**，则会抛出
     *     错误。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @throws { BusinessError } 10200011 - The flipBitByIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    flipBitByIndex(index: number): void;
    /**
     * 翻转 BitVector 指定范围内的 bit 值，0 翻转为 1，1 翻转为 0。
     *
     * @param { number } fromIndex - 范围起始索引，包含本索引值。如果 **fromIndex** 小于 **0** 或者
     *     大于等于 **toIndex**，则会抛出错误。
     * @param { number } toIndex - 范围终止索引，不包含本索引值。如果 **toIndex** 小于 **0** 或者大于
     *     等于 **length**，则会抛出错误。可能的原因：
     *     1.必填参数未指定。
     *     2.参数类型不正确。
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The flipBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    flipBitsByRange(fromIndex: number, toIndex: number): void;
    /**
     * 返回一个迭代器，用于迭代 BitVector 中的元素。
     *
     * @returns { IterableIterator<number> } 一个新的可迭代迭代器对象。
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 返回一个新的迭代器对象，该对象包含 BitVector 中每个元素的值。
     *
     * @returns { IterableIterator<number> } BitVector 迭代器对象。
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    values(): IterableIterator<number>;
    /**
     * 返回指定索引位置的元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamic
     */
    [index: number]: number;
  }
}

export default collections;