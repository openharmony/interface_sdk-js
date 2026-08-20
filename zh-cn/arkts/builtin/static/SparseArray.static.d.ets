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
 * SparseArray是以Map作为底层存储的稀疏数组实现。
 * 它仅存储非undefined的值，因此对于存在大量空位的数组更节省内存。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class SparseArray<T> {
    /**
     * 获取稀疏数组的长度。
     *
     * @returns { int } 稀疏数组的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get length(): int;

    /**
     * 创建新的空SparseArray实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 使用指定的初始长度创建新的SparseArray实例。
     *
     * @param { int } arrayLen - 稀疏数组的初始长度。如果arrayLen为负数，则按0处理。
     *     正number的最大值为int_max。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(arrayLen: int);

    /**
     * 使用给定的元素创建新的SparseArray实例。
     *
     * @param { T } first - 稀疏数组的第一个元素。
     * @param { T[] } d - 用于初始化稀疏数组的其余元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(first: T, ...d: T[]);

    /**
     * 在稀疏数组末尾追加新元素，并返回新的长度。
     *
     * @param { T[] } items - 待添加到稀疏数组末尾的元素。
     * @returns { int } 稀疏数组的新长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    push(...items: T[]): int;

    /**
     * 在稀疏数组末尾追加新元素，并返回新的长度。
     *
     * @param { T } val - 待添加到稀疏数组末尾的元素。
     * @returns { int } 稀疏数组的新长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    push(val: T): int;
    
    /**
     * 对稀疏数组中的每个元素执行指定的操作。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
     *     调用一次回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    forEach(callbackfn: (value: T, index: int, array: SparseArray<T>) => void): void;

    /**
     * 返回表示该稀疏数组及其元素的字符串。
     *
     * @returns { string } 以逗号分隔稀疏数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toString(): string;

    /**
     * 返回稀疏数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     find方法会对稀疏数组中的每个元素调用一次predicate函数。
     *     调用一次回调函数。
     * @returns { T | undefined } 稀疏数组中第一个使predicate返回true的元素的值，
     *     若不存在则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    find(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): T | undefined;

    /**
     * 通过移除或替换已有元素以及在原位置添加新元素，
     * 改变稀疏数组的内容。
     *
     * @param { int } start - 开始移除元素的位置，从0开始计数。
     *     如果start为负数，则按length + start处理（例如-1表示最后一个元素）。
     *     如果start小于-length，则按0处理。
     *     如果start大于或等于length，则不移除任何元素，新元素被添加到末尾。
     *     <br>取值约束：应为整数。
     * @param { int } deleteCount - 待移除元素的number。
     *     如果deleteCount为负数，则按0处理，即不移除任何元素。
     *     如果deleteCount大于从start到数组末尾的元素number，
     *     则仅移除实际存在的元素。
     *     <br>取值约束：应为整数。
     * @param { T[] } items - 用于替换被删除元素而插入稀疏数组的元素。
     * @returns { SparseArray<T> } 包含被删除元素的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    splice(start: int, deleteCount: int, ...items: T[]): SparseArray<T>;

    /**
     * 返回稀疏数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     findIndex方法会对稀疏数组中的每个元素调用一次predicate函数。
     * @returns { int } 稀疏数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    findIndex(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): int;
    
    /**
     * 返回稀疏数组中满足回调函数所指定条件的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     filter方法会对稀疏数组中的每个元素调用一次predicate函数。
     * @returns { SparseArray<T> } 包含满足条件的元素的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    filter(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): SparseArray<T>;

     /**
      * 判断稀疏数组中是否包含指定元素，并相应地返回true或false。
      *
      * @param { T } searchElement - 待查找的元素。
      * @param { int } [fromIndex] - 开始查找searchElement的稀疏数组位置。
      *     默认值为0，即查找整个数组。
      *     如果fromIndex为负数，则将其作为相对于数组末尾的偏移量。
      *     <br>取值约束：应为整数。
      * @returns { boolean } 如果找到searchElement则返回true，否则返回false。
      * @syscap SystemCapability.Utils.Lang
      * @stagemodelonly
      * @since 26.0.0 staticonly
      */
     includes(searchElement: T, fromIndex?: int): boolean;

    /**
     * 返回指定值在稀疏数组中首次出现的索引，若不存在则返回-1。
     *
     * @param { T } searchElement - 待在稀疏数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的稀疏数组索引。
     *     如果不传入fromIndex，则从索引0开始查找。
     *     <br>取值约束：应为整数。
     * @returns { int } 该值在稀疏数组中首次出现的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    indexOf(searchElement: T, fromIndex?: int): int;

    /**
     * 判断指定的值是否为稀疏数组。
     *
     * @param { Any } value - 待检测的值。
     * @returns { boolean } 如果该值是稀疏数组则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static isSparseArray(value: Any): boolean;

    /**
     * 使用指定的分隔字符串连接稀疏数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔稀疏数组相邻元素的
     *     字符串，默认值为“,”（逗号）。
     * @returns { string } 由所有稀疏数组元素连接而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    join(separator?: string): string;

    /**
     * 返回稀疏数组中某一部分的副本。
     *
     * @param { int } [start] - 稀疏数组中指定部分的起始索引。
     *     默认值为0，即查找整个数组。
     *     如果fromIndex为负数，则将其作为相对于数组末尾的偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 稀疏数组中指定部分的结束索引。
     *     默认值为0，即查找整个数组。
     *     如果fromIndex为负数，则将其作为相对于数组末尾的偏移量。
     *     <br>取值约束：应为整数。
     * @returns { SparseArray<T> } 包含所提取元素的新SparseArray对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    slice(start?: int, end?: int): SparseArray<T>;

    /**
     * 根据类数组对象或可迭代对象创建新的SparseArray实例。
     *
     * @param { ArrayLike<U> | Iterable<U> } arrayLike - 待转换为稀疏数组的类数组对象或可迭代对象。
     * @returns { SparseArray<U> } 新的SparseArray实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static from<U>(arrayLike: ArrayLike<U> | Iterable<U>): SparseArray<U>;

    /**
     * 根据类数组对象创建新的SparseArray实例。
     *
     * @param { ArrayLike<U> } arr - 待转换为稀疏数组的类数组对象或可迭代对象。
     * @returns { SparseArray<U> } 新的SparseArray实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static from<U>(arr: ArrayLike<U>): SparseArray<U>;

    /**
     * 原地排序稀疏数组中的元素，并返回该稀疏数组。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的函数。
     *     如果不传入该参数，则将元素转换为字符串后，按其UTF-16码元
     *     升序排序（默认排序行为）。
     * @returns { this } 排序后的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    sort(compareFn?: (a: T, b: T) => int): this;

    /**
     * 返回由当前稀疏数组与其他数组或值连接而成的新稀疏数组。
     *
     * @param { SparseArray<T> } items - 待连接到结果中的其他数组或值。
     * @returns { SparseArray<T> } 新的SparseArray，其中先是当前稀疏数组的元素，
     *     随后是传入稀疏数组的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    concat(items: SparseArray<T>): SparseArray<T>;

    /**
     * 返回一个新的稀疏数组，其中所有子数组元素按指定深度
     * 递归展开后合并到该数组中。
     *
     * @param { int } [depth] - 指定嵌套数组结构展开的深度级别，
     *     默认值为1。
     *     <br>取值约束：应为整数。
     * @returns { SparseArray<U> } SparseArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    flat<U = T>(depth?: int): SparseArray<U>

    /**
     * 对稀疏数组中的每个元素调用指定的回调函数。
     * 然后将结果展开为一个新的稀疏数组。
     * 其效果等同于先调用map()，再以深度1调用flat()。
     *
     * @param { function } fn - 用于生成新SparseArray元素的函数。
     * @returns { SparseArray<U> } 新的稀疏数组，其中每个元素都是回调函数的返回结果，
     *     并已完成展开。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    flatMap<U = T>(fn: (v: T, k: int, arr: SparseArray<T>) => U): SparseArray<U>;

    /**
     * 判断稀疏数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对稀疏数组中的每个元素调用predicate函数，
     *     直到predicate返回可转换为Boolean值true的结果，或遍历完稀疏数组。
     * @returns { boolean } 如果回调函数对任一元素返回true，则返回true，
     *     否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    some(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): boolean;

    /**
     * 对稀疏数组中的每个元素调用指定的回调函数，
     * 并返回包含各次调用结果的数组。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。
     *     map方法会对稀疏数组中的每个元素调用一次callbackfn函数。
     * @returns { SparseArray<U> }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    map<U>(callbackfn: (value: T, index: int, array: SparseArray<T>) => U): SparseArray<U>;

    /**
     * 返回由稀疏数组中所有值组成的可迭代对象。
     *
     * @returns { IterableIterator<T> } 由稀疏数组中所有值组成的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    values(): IterableIterator<T>;

    /**
     * 移除稀疏数组的最后一个元素并返回该元素。
     *
     * @returns { T | undefined } 稀疏数组的最后一个元素；如果稀疏数组为空，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    pop(): T | undefined;

    /**
     * 移除稀疏数组的第一个元素并返回该元素。
     *
     * @returns { T | undefined } 稀疏数组的第一个元素；如果稀疏数组为空，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    shift(): T | undefined;

    /**
     * 返回由稀疏数组中所有键组成的可迭代对象。
     *
     * @returns { IterableIterator<int> } 由稀疏数组中所有键组成的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    keys(): IterableIterator<int>;

    /**
     * 将稀疏数组中从start到end索引之间的所有元素替换为固定值，
     * 并返回修改后的稀疏数组。
     *
     * @param { T } value - 用于填充稀疏数组指定区间的值。
     * @param { int } [start] - 开始填充稀疏数组的索引，默认值为0。如果start为负数，
     *     则按length + start处理。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 停止填充稀疏数组的索引，默认值为0。如果end为负数，
     *     则按length + end处理。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    fill(value: T, start?: int, end?: int): this;

    /**
     * 在稀疏数组开头插入新元素，并返回新的长度。
     *
     * @param { T[] } items - 待插入稀疏数组开头的元素。
     * @returns { int } 稀疏数组的新长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unshift(...items: T[]): int;

    /**
     * 原地反转稀疏数组中的元素，并返回该稀疏数组。
     *
     * @returns { this } 反转后的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reverse(): this;
    /**
     * 返回由稀疏数组中每个条目的键值对组成的可迭代对象。
     *
     * @returns { IterableIterator<[int, T]> } 由稀疏数组中每个条目的键值对组成的可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    entries(): IterableIterator<[int, T]>;
    /**
     * 返回指定值在稀疏数组中最后一次出现的索引，若不存在则返回-1。
     *
     * @param { T } searchElement - 待在稀疏数组中查找的值。
     * @param { int } [fromIndex] - 开始反向查找的稀疏数组索引。
     *     如果不传入fromIndex，则从最后一个索引开始查找。
     *     <br>取值约束：应为整数。
     * @returns { int } 该值在稀疏数组中最后一次出现的索引，未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lastIndexOf(searchElement: T, fromIndex?: int): int;

    /**
     * 对稀疏数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对稀疏数组中的每个元素调用一次callbackfn函数。
     * @returns { T } 累加得到的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, index: int, array: SparseArray<T>) => T): T;

    /**
     * 对稀疏数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
     *     调用一次callbackfn函数。
     * @param { U } initialValue - 如果指定了initialValue，
     *     则将其作为累加的初始值。
     * @returns { U } 累加得到的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reduce<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: SparseArray<T>) => U,
        initialValue: U): U;

    /**
     * 判断稀疏数组中的所有元素是否都满足指定的测试条件。
     *
     * @param { function } predicate - 最多接受三个参数的函数。every方法会对稀疏数组中的每个元素
     *     调用predicate函数，直到predicate返回
     *     可转换为Boolean值false的结果，或遍历完稀疏数组。
     * @returns { boolean } 如果回调函数对所有元素都返回true，则返回true，
     *     否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    every(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): boolean;

    /**
     * 根据可变number的参数创建新的SparseArray实例。
     *
     * @param { U[] } items - 待包含在新SparseArray实例中的元素。
     * @returns { SparseArray<U> } 包含指定元素的新SparseArray实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static of<U>(...items: U[]): SparseArray<U>;

    /**
     * 返回指定索引处的元素。
     *
     * @param { int } index - 目标元素的索引，从0开始计数。
     *     负数索引表示从稀疏数组末尾开始倒数。
     *     如果index为负数，则按length + index处理（例如-1表示最后一个元素）。
     *     如果index小于-length，则返回undefined。
     *     如果index大于或等于length，则返回undefined。
     *     <br>取值约束：应为整数。
     * @returns { T | undefined } 指定索引处的元素；如果索引超出范围，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    at(index: int): T | undefined;

    /**
     * 在稀疏数组内部复制一段连续的元素。
     *
     * @param { int } target - 复制目标位置的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { int } start - 开始复制元素位置的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @returns { this } 修改后的稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    copyWithin(target: int, start: int, end?: int): this;

    /**
     * 返回稀疏数组中最后一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - 最多接受三个参数的函数。findLast方法会按降序对稀疏数组中的
     *     每个元素调用一次predicate函数。
     * @returns { T | undefined } 稀疏数组中最后一个使predicate返回true的元素的值，
     *     若不存在则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    findLast(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): T | undefined;

    /**
     * 返回稀疏数组中最后一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - 最多接受三个参数的函数。findLastIndex方法会按降序对稀疏数组中的
     *     每个元素调用一次predicate函数。
     * @returns { int } 稀疏数组中最后一个使predicate返回true的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    findLastIndex(predicate: (value: T, index: int, array: SparseArray<T>) => boolean): int;

    /**
     * 按降序对稀疏数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
     *     每个元素调用一次callbackfn函数。
     * @returns { T } 累加得到的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, index: int, array: SparseArray<T>) => T): T;

    /**
     * 按降序对稀疏数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
     *     每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 如果指定了initialValue，则将其作为累加的初始值。
     * @returns { U }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reduceRight<U = T>(callbackfn: (previousValue: U, currentValue: T, index: int, array: SparseArray<T>) => U,
        initialValue: U): U;

    /**
     * 返回元素顺序反转后的新稀疏数组。
     *
     * @returns { SparseArray<T> } 元素顺序反转后的新稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toReversed(): SparseArray<T>;

    /**
     * 返回在指定索引处移除或替换部分元素后的新稀疏数组。
     *
     * @param { int } start - 开始移除元素的位置，从0开始计数。
     *     如果start为负数，则按length + start处理（例如-1表示最后一个元素）。
     *     如果start小于-length，则按0处理。
     *     如果start大于或等于length，则不移除任何元素，新元素被添加到末尾。
     *     如果start不是整数，则向零取整。
     *     <br>取值约束：应为整数。
     * @param { int } deleteCount - 待移除元素的number。
     *     如果deleteCount为负数，则按0处理，即不移除任何元素。
     *     如果deleteCount大于从start到数组末尾的元素number，
     *     则仅移除实际存在的元素。
     *     如果deleteCount不是整数，则向零取整。
     *     <br>取值约束：应为整数。
     * @param { T[] } items - 用于替换被删除元素而插入稀疏数组的元素。
     * @returns { SparseArray<T> } 移除或替换指定元素后的新稀疏数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toSpliced(start: int, deleteCount: int, ...items: T[]): SparseArray<T>;

    /**
     * 返回元素按升序排序后的新稀疏数组。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的函数。
     *     如果不传入该参数，则将元素转换为字符串后，按其UTF-16码元
     *     升序排序（默认排序行为）。
     * @returns { SparseArray<T> }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toSorted(compareFn?: (a: T, b: T) => int): SparseArray<T>;
}
