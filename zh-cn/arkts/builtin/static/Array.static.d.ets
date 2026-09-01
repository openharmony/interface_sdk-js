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
 * 表示与JS API兼容的数组。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Array<T> implements ReadonlyArray<T>, Iterable<T> {

    /**
     * 创建一个空的Array实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 使用给定的元素创建一个Array实例。
     *
     * @param { T } first - 数组的第一个元素。
     * @param { T[] } d - 用于初始化数组的其余元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(first: T, ...d: T[]);

    /**
     * 创建一个指定长度的Array实例，并使用函数初始化每个元素。
     *
     * @param { int } arrayLen - 数组的元素个数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { function } initializer - 为给定索引生成元素的函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(arrayLen: int, initializer: (index: int) => T);
    
    /**
     * 返回遍历所有值的迭代器。
     *
     * @returns { IterableIterator<T> } 遍历所有值的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_iterator(): IterableIterator<T>;

    /**
     * 获取数组的长度。
     *
     * @returns { int } 数组的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get length(): int;

    /**
     * 获取指定索引处的元素。
     *
     * @param { int } idx - 待获取元素的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { T } 指定索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(idx: int): T;

    /**
     * 设置指定索引处的元素。
     *
     * @param { int } idx - 待设置元素的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { T } val - 要在指定索引处设置的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_set(idx: int, val: T): void;

    /**
     * 使用给定的元素创建一个Array实例。
     *
     * @param { T[] } items - 用于初始化数组的元素。
     * @returns { Array<T> } 包含给定元素的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke<T>(...items: T[]): Array<T>;

    /**
     * 根据`FixedArray`创建一个新的`Array`实例。
     *
     * @param { FixedArray<T> } arr - 源基础数组。
     * @returns { Array<T> } 包含源数组元素的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(arr: FixedArray<T>): Array<T>;

    /**
     * 根据`ArrayLike`对象创建一个新的`Array`实例。
     *
     * @param { ArrayLike<T> } arr - 待转换为数组的类数组对象。
     * @returns { Array<T> } 包含类数组对象元素的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(arr: ArrayLike<T>): Array<T>;

    /**
     * 根据可迭代对象或类数组对象创建一个新的`Array`实例。
     *
     * @param { ArrayLike<T> | Iterable<T> } iterable - 待转换为数组的可迭代对象或类数组对象。
     * @returns { Array<T> } 包含可迭代对象元素的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(iterable: ArrayLike<T> | Iterable<T>): Array<T>;

    /**
     * 根据`FixedArray`创建一个新的`Array`实例，并对每个元素应用映射函数。
     *
     * @param { FixedArray<T> } values - 源基础数组。
     * @param { function } mapfn - 对数组每个元素调用的映射函数。
     * @returns { Array<U> } 包含映射后值的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T, U>(values: FixedArray<T>, mapfn: (v: T, k: int) => U): Array<U>;

    /**
     * 根据可迭代对象创建一个新的`Array`实例，并对每个元素应用映射函数。
     * 每个待添加到数组的值都会先经过该函数处理，最终添加到数组中的是`mapfn`的返回值，
     * 而不是原始值。
     *
     * @param { ArrayLike<T> | Iterable<T> } iterable - 待转换为数组的可迭代对象或类数组对象。
     * @param { function } mapfn - 对数组每个元素调用的映射函数。
     * @returns { Array<U> } 包含映射后值的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T, U>(iterable: ArrayLike<T> | Iterable<T>, mapfn: (v: T, k: int) => U): Array<U>;

    /**
     * 检查传入的值是否为数组。
     *
     * @param { Any } o - 待检查的值。
     * @returns { boolean } 如果该值为数组则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static isArray(o: Any): boolean;

    /**
     * 对数组中的每个元素执行指定的操作。
     *
     * @param { function } callbackfn - 一个最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    forEach(callbackfn: (value: T, index: int, array: Array<T>) => void): void;

    /**
     * 创建一个指定长度的数组，并使用指定的初始值填充。
     *
     * @param { int } arrayLength - 新数组的元素个数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { T } initialValue - 用于填充数组的值。
     * @returns { Array<T> } 使用初始值填充的新Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static create<T>(arrayLength: int, initialValue: T): Array<T>;

    /**
     * 对数组元素进行原地排序，并返回排序后同一数组的引用。
     *
     * @param { function } [comparator] - 可选参数，用于定义排序顺序的函数。省略时，
     *     数组将按照每个元素转换为字符串后的结果，
     *     依据各字符的Unicode码点值进行排序。
     * @returns { this } 排序后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(comparator?: (a: T, b: T) => int): this;

    /**
     * 按升序排序，返回包含这些元素的新数组。
     *
     * @returns { Array<T> } 排序后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Array<T>;

    /**
     * 返回一个使用给定比较函数排序后的新数组。
     *
     * @param { function } comparator - 用于定义排序顺序的函数。
     * @returns { Array<T> } 排序后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(comparator: (a: T, b: T) => int): Array<T>;

    /**
     * 返回一个新的数组迭代器对象，其中包含数组每个索引的键。
     *
     * @returns { IterableIterator<int> } 新的数组迭代器对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回一个新的数组迭代器对象，其中包含数组每个索引的键值对。
     *
     * @returns { IterableIterator<[int, T]> } 新的数组迭代器对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, T]>;

    /**
     * 设置数组的长度。
     *
     * @param { int } newLen - 数组的新长度。
     *     取值约束：必须为大于或等于0的整数
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set length(newLen: int);

    /**
     * 将指定元素添加到数组末尾，并返回数组的新长度。
     *
     * @param { T[] } val - 要添加到数组末尾的元素。
     * @returns { int } 调用该方法的数组的新长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public push(...val: T[]): int;

    /**
     * 通过原地删除、替换已有元素或添加新元素来修改数组内容。
     *
     * @param { int } start - 开始修改数组的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int | undefined } del - 从start索引开始要删除的元素个数。如果传入
     *     undefined，则表示0，不删除任何元素。
     * @param { T[] } items - 从start位置开始添加到数组中的元素。
     * @returns { Array<T> } 从数组中删除元素，并在必要时在其位置插入新元素，
     *     返回被删除的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public splice(start: int, del: int | undefined, ...items: T[]): Array<T>;

    /**
     * 通过原地删除从start索引到末尾的已有元素来修改数组内容。
     *
     * @param { int } start - 开始修改数组的索引。
     *     <br>取值约束：应为整数。
     * @returns { Array<T> } 包含被删除元素的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public splice(start: int): Array<T>;

    /**
     * 将指定元素添加到数组开头，并返回数组的新长度。
     *
     * @param { T[] } values - 要添加到数组开头的元素。
     * @returns { int } 数组的新长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public unshift(...values: T[]): int;

    /**
     * 返回数组中第一个使predicate为true的元素的索引，如果不存在则返回-1。
     *
     * @param { function } predicate - 对数组中每个值执行的函数。
     * @returns { int } 满足给定测试函数的第一个元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: T, index: int, array: Array<T>) => boolean): int;

    /**
     * 返回数组中满足回调函数指定条件的元素。
     *
     * @param { function } predicate - 一个最多接受三个参数的函数。filter方法会对数组中的每个元素
     *     调用一次predicate函数。
     * @returns { Array<T> } 包含通过测试的元素的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(predicate: (value: T, index: int, array: Array<T>) => boolean): Array<T>;

    /**
     * 遍历数组，返回满足给定测试函数的第一个元素的值。
     *
     * @param { function } predicate - 对数组中每个值执行的函数。
     * @returns { T | undefined } 满足给定测试函数的第一个元素的值，
     *     否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: T, index: int, array: Array<T>) => boolean): T | undefined;

    /**
     * 按逆序遍历数组，返回满足给定测试函数的
     * 第一个元素的值。
     *
     * @param { function } predicate - 对数组中每个值执行的函数。
     * @returns { T | undefined } 如果找到则返回该元素的值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(predicate: (elem: T, index: int, array: Array<T>) => boolean): T | undefined;

    /**
     * 判断数组中的所有元素是否都满足指定的测试条件。
     *
     * @param { function } predicate - 一个最多接受三个参数的函数。every方法会对数组中的每个元素
     *     调用predicate函数，直到predicate返回可转换为布尔值
     *     false的值，或直到数组末尾。
     * @returns { boolean } 如果数组中所有元素的predicate都返回true则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (value: T, index: int, array: Array<T>) => boolean): boolean;

    /**
     * 判断数组中是否存在任一元素使指定的回调函数返回true。
     *
     * @param { function } predicate - 一个最多接受三个参数的函数。some方法会对数组中的每个元素
     *     调用predicate函数，直到predicate返回可转换为布尔值
     *     true的值，或直到数组末尾。
     * @returns { boolean } 如果数组中至少有一个元素的predicate返回true则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (value: T, index: int, array: Array<T>) => boolean): boolean;

    /**
     * 按逆序遍历数组，返回满足给定测试函数的第一个元素的索引。
     * 如果没有元素满足测试函数，则返回-1。
     *
     * @param { function } predicate - 对数组中每个值执行的函数。
     * @returns { int } 满足给定测试函数的第一个元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(predicate: (element: T, index: int, array: Array<T>) => boolean): int;

    /**
     * 对数组中所有元素调用指定的回调函数。回调函数的返回值为
     * 累加结果，并作为参数传入下一次回调函数的调用。
     *
     * @param { function } callbackfn - 一个最多接受四个参数的函数。reduce方法会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @returns { T } 累加结果。
     * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: T, currentValue: T, index: int, array: Array<T>) => T): T;

    /**
     * 对数组中所有元素调用指定的回调函数。回调函数的返回值为
     * 累加结果，并作为参数传入下一次回调函数的调用。
     *
     * @param { function } callbackfn - 一个最多接受四个参数的函数。reduce方法会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @param { U } initialValue - 累加器的初始值。
     * @returns { U } 累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: Array<T>) => U,
                         initialValue: U): U;

    /**
     * 按逆序对数组中所有元素调用指定的回调函数。
     * 回调函数的返回值为累加结果，并作为参数传入下一次回调
     * 函数的调用。
     *
     * @param { function } callbackfn - 一个最多接受四个参数的函数。reduceRight方法会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @param { U } initialValue - 累加器的初始值。
     * @returns { U } 累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, index: int, array: Array<T>) => U,
                          initialValue: U): U;

    /**
     * 创建一个新数组，其元素为对原数组每个元素调用给定函数后的
     * 返回结果。
     *
     * @param { function } callbackfn - 对数组每个元素调用的函数。每次callbackfn执行时，
     *     其返回值都会被添加到新数组中。
     * @returns { Array<U> } 新数组，其每个元素均为回调函数的返回结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map<U>(callbackfn: (value: T, index: int, array: Array<T>) => U): Array<U>;

    /**
     * 按逆序对数组中所有元素调用指定的回调函数。
     * 回调函数的返回值为累加结果，并作为参数传入下一次回调
     * 函数的调用。
     *
     * @param { function } callbackfn - 一个最多接受四个参数的函数。reduceRight方法会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @returns { T } 累加结果。
     * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: T, currentValue: T, index: int, array: Array<T>) => T): T;

    /**
     * 从数组中删除第一个元素，并返回被删除的元素。
     * 该方法会改变数组的长度。
     *
     * @returns { T | undefined } 从数组中被删除的元素，如果数组为空则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public shift(): T | undefined;

    /**
     * 从数组中删除最后一个元素并返回该元素。该方法会改变数组的长度。
     *
     * @returns { T | undefined } 从数组中被删除的元素，如果数组为空则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public pop(): T | undefined;

    /**
     * 将当前`Array`实例与给定的数组和/或值合并，创建一个新的`Array`。
     *
     * @param { FixedArray<ConcatArray<T>> } items - 待拼接成新数组的数组和/或值。
     * @returns { Array<T> } 新的Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(...items: FixedArray<ConcatArray<T>>): Array<T>;

    /**
     * 将数组中从start索引到end索引的所有元素修改为固定值。
     *
     * @param { T } value - 用于填充数组的值。
     * @param { int } [start] - 可选参数，开始填充的索引。如果start大于或等于
     *     数组长度，则不填充任何元素；如果start为负数，则视为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 可选参数，结束填充的索引（不包含）。如果end大于
     *     数组长度，则以数组长度作为结束索引；如果end为负数，则视为0。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: T, start?: int, end?: int): this;

    /**
     * 返回数组中某一部分的副本。
     *
     * @param { int } start - 数组中指定部分的起始索引。如果start大于
     *     或等于数组长度，则返回空数组；如果start为负数，
     *     则视为length + start。
     *     <br>取值约束：应为整数。
     * @returns { Array<T> } 包含所提取元素的新Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(start: int): Array<T>;

    /**
     * 返回数组中某一部分的副本。
     *
     * @param { int } [start] - 数组中指定部分的起始索引。如果start大于
     *     或等于数组长度，则返回空数组；如果start为负数，
     *     则视为length + start。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 数组中指定部分的结束索引。如果end大于
     *     数组长度，则以数组长度作为结束索引；如果end为负数，则视为0。
     *     <br>取值约束：应为整数。
     * @returns { Array<T> } 包含所提取元素的新Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(start?: int, end?: int): Array<T>;

    /**
     * 返回给定元素在数组中最后一次出现的索引，如果不存在则返回-1。
     * 数组按逆序进行搜索。
     *
     * @param { T } searchElement - 待在数组中查找的元素。
     * @returns { int } 该元素在数组中的最后一个索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: T): int;

    /**
     * 返回给定元素在数组中最后一次出现的索引，如果不存在则返回-1。
     * 数组从fromIndex开始按逆序进行搜索。
     *
     * @param { T } searchElement - 待在数组中查找的元素。
     * @param { int } [fromIndex] - 开始逆序搜索的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { int } 该元素在数组中的最后一个索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: T, fromIndex?: int): int;

    /**
     * 使用指定的分隔符字符串连接`Array`中的所有元素，
     * 创建并返回一个新字符串。
     *
     * @param { string } [sep] - 用于分隔数组中每对相邻元素的字符串。省略时，数组
     *     元素之间以逗号分隔。
     * @returns { string } 连接所有数组元素后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(sep?: string): string;

    /**
     * 返回表示指定数组及其元素的字符串。
     *
     * @returns { string } 表示该数组的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回表示数组元素的字符串。元素通过各自的
     * toLocaleString方法转换为字符串。
     *
     * @param { Intl.LocalesArgument } [locales] - 带有BCP 47语言标签的字符串，或
     *     由此类字符串组成的数组。
     * @param { object } [options] - 包含配置属性的对象。
     * @returns { string } 表示数组元素的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回一个在指定索引处删除和/或替换部分元素后的新数组。
     *
     * @param { int } start - 开始修改数组的索引，从0开始计数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { Array<T> } 应用修改后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start: int): Array<T>;

    /**
     * 返回一个在指定索引处删除和/或替换部分元素后的新数组。
     *
     * @param { int } start - 开始修改数组的索引，从0开始计数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } del - 要删除的元素个数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { FixedArray<T> } items - 要添加到数组中的元素。
     * @returns { Array<T> } 应用修改后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start: int, del: int, ...items: FixedArray<T>): Array<T>;

    /**
     * 返回一个在指定索引处删除和/或替换部分元素后的新数组。
     *
     * @param { int } [start] - 开始修改数组的索引，从0开始计数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } [del] - 要删除的元素个数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { Array<T> } 应用修改后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSpliced(start?: int, del?: int): Array<T>;

    /**
     * 判断数组的元素中是否包含某个值，并相应地返回true或false。
     *
     * @param { T } val - 待查找的值。
     * @param { int } [fromIndex] - 在该数组中开始查找值的位置。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { boolean } 如果找到该值则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(val: T, fromIndex?: int): boolean;

    /**
     * 返回给定元素在数组中首次出现的索引，如果不存在则返回-1。
     *
     * @param { T } val - 待在数组中查找的元素。
     * @returns { int } 该元素在数组中的第一个索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(val: T): int;

    /**
     * 返回给定元素在数组中首次出现的索引，如果不存在则返回-1。
     *
     * @param { T } val - 待在数组中查找的元素。
     * @param { int } [fromIndex] - 开始搜索的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { int } 该元素在数组中的第一个索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(val: T, fromIndex?: int): int;

    /**
     * 原地反转数组。数组的第一个元素变为最后一个元素，最后一个元素变为
     * 第一个元素。
     *
     * @returns { this } 反转后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): this;

    /**
     * 返回一个元素顺序反转后的新数组。
     *
     * @returns { Array<T> } 反转后的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Array<T>;

    /**
     * 返回一个将给定索引处的元素替换为给定值后的新数组。
     *
     * @param { int } index - 替换值的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { T } value - 要插入到给定索引处的新值。
     * @returns { Array<T> } 替换该元素后的新数组。
     * @throws { RangeError } 当索引越界时，抛出RangeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: T): Array<T>;

    /**
     * 返回一个新的数组迭代器对象，其中包含数组每个索引的值。
     *
     * @returns { IterableIterator<T> } 新的数组迭代器对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<T>;

    /**
     * 将数组的一部分浅拷贝到同一数组的另一位置并返回该数组，
     * 不改变其长度。
     *
     * @param { int } target - 序列拷贝到的目标索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): this;

    /**
     * 将数组的一部分浅拷贝到同一数组的另一位置并返回该数组，
     * 不改变其长度。
     *
     * @param { int } target - 序列拷贝到的目标索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { int } start - 开始拷贝元素的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int): this;

    /**
     * 将数组的一部分浅拷贝到同一数组的另一位置并返回该数组，
     * 不改变其长度。
     *
     * @param { int } target - 序列拷贝到的目标索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { int } start - 开始拷贝元素的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束拷贝元素的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): this;

    /**
     * 使用新元素将数组扩展到指定长度。
     *
     * @param { int } arrayLength - 数组的新长度。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { T } initialValue - 新增元素的初始值。
     * @throws { RangeError } 当数组长度为负数时，抛出RangeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public extendTo(arrayLength: int, initialValue: T): void;

    /**
     * 将数组收缩到指定长度，超出新长度的元素将被删除。
     *
     * @param { int } arrayLength - 数组收缩到的长度。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @throws { RangeError } 当数组长度为负数时，抛出RangeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public shrinkTo(arrayLength: int): void;

    /**
     * 创建一个新数组，将所有子数组元素按指定深度递归拼接到其中。
     *
     * @param { int } depth - 指定嵌套数组结构展平深度的层级。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { Array<U> } 拼接了子数组元素的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flat<U = T>(depth: int): Array<U>;

    /**
     * 创建一个新数组，将所有子数组元素按默认深度1递归拼接到其中。
     *
     * @returns { Array<U> } 拼接了子数组元素的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flat<U = T>(): Array<U>;

    /**
     * 对数组的每个元素调用指定的回调函数，然后将结果展平到一个新数组中。
     * 等价于先调用map()，再调用深度为1的flat()。
     *
     * @param { function } fn - 生成新数组元素的函数。
     * @returns { Array<U> } 新数组，其每个元素均为回调函数的返回结果并已展平。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public flatMap<U=T>(fn: (v: T, k: int, arr: Array<T>) => U | ReadonlyArray<U>): Array<U>;

    /**
     * 接受一个整数值并返回该索引处的元素，支持正整数和负整数。
     * 负整数表示从数组的最后一个元素开始向前计数。
     *
     * @param { int } index - 待返回数组元素的索引，从0开始计数。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { T } 给定索引处的元素。
     * @throws { RangeError } 当索引越界时，抛出RangeError异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): T;
}
