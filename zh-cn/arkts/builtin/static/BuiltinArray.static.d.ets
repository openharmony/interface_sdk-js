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
 * 接受一个整数值并返回该索引处的元素，允许传入
 * 正整数和负整数。负整数表示从数组最后一个元素
 * 开始倒数。
 *
 * @param { FixedArray<boolean> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Boolean } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<boolean>, index: int): Boolean;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<boolean> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int): FixedArray<boolean>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<boolean> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int, start: int): FixedArray<boolean>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<boolean> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<boolean>, target: int, start: int, end?: int): FixedArray<boolean>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<boolean> } self - 执行`fill`操作的数组。
 * @param { boolean } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<boolean>, value: boolean, start?: int, end?: int): FixedArray<boolean>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<boolean> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Boolean | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): Boolean | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<boolean> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<boolean>, predicate: (value: boolean, index: int, 
    array: FixedArray<boolean>) => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<boolean> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Boolean | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<boolean>, predicate: (elem: boolean, index: int, array: FixedArray<boolean>)
    => boolean): Boolean | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<boolean> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<boolean> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<boolean>, predicate: (value: boolean, index: int, array: FixedArray<boolean>)
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<boolean> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<boolean>, predicate: (element: boolean, index: int,
    array: FixedArray<boolean>) => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<boolean> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { boolean } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<boolean>, callbackfn: (previousValue: boolean, currentValue: boolean,
    index: int, array: FixedArray<boolean>) => boolean): boolean;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<boolean> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U=boolean>(self: FixedArray<boolean>, callbackfn: (previousValue: U,
    currentValue: boolean, index: int, array: FixedArray<boolean>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<boolean> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<boolean>, callbackfn: (previousValue: U, currentValue: boolean, 
    index: int, array: FixedArray<boolean>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<boolean> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<boolean>, callbackfn: (value: boolean, index: int, array: FixedArray<boolean>)
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<boolean> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<boolean>, start: int): FixedArray<boolean>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<boolean> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<boolean>, start?: int, end?: int): FixedArray<boolean>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<boolean> } self - 执行`lastIndexOf`操作的数组。
 * @param { boolean } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<boolean>, element: boolean, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<boolean> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<boolean>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<boolean> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<boolean>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<boolean> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<boolean> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<boolean> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<boolean>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start: int): FixedArray<boolean>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<boolean> } items - 待添加到数组中的元素。
 * @returns { FixedArray<boolean> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start: int, del: int, ...items: FixedArray<boolean>)
    : FixedArray<boolean>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<boolean>, start?: int, del?: int): FixedArray<boolean>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<boolean> } self - 执行`includes`操作的数组。
 * @param { boolean } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<boolean>, val: boolean, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<boolean> } self - 执行`indexOf`操作的数组。
 * @param { boolean } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<boolean>, val: boolean, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<boolean> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<boolean> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<boolean>, comparator: (a: boolean, b: boolean) => int): FixedArray<boolean>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<boolean> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<boolean> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<boolean> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<boolean> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { boolean } value - 在指定索引处插入的新值。
 * @returns { FixedArray<boolean> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<boolean>, index: int, value: boolean): FixedArray<boolean>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<boolean> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<boolean> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<boolean>): IterableIterator<boolean>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<boolean> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, boolean]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<boolean>): IterableIterator<[int, boolean]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<boolean> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<boolean> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<boolean>, callbackfn: (value: boolean, index: int, array: FixedArray<boolean>) 
    => boolean): FixedArray<boolean>;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<boolean> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { boolean } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<boolean>, callbackfn: (previousValue: boolean, currentValue: boolean, 
    index: int, array: FixedArray<boolean>) => boolean): boolean;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<boolean> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<boolean> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<boolean>, fn: (v: boolean, k: int, array: FixedArray<boolean>) => boolean): 
    FixedArray<boolean>;

/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<boolean> } self - 执行`concat`操作的数组。
 * @param { FixedArray<boolean> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<boolean>> } more - 待连接的其他数组。
 * @returns { FixedArray<boolean> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<boolean>, fst: FixedArray<boolean>, ...more: FixedArray<FixedArray<boolean>>): 
    FixedArray<boolean>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<boolean> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<boolean>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<boolean> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<boolean>, ...items: FixedArray<ConcatArray<boolean>>): FixedArray<boolean>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<boolean> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<boolean> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<boolean>, comparator: (a: boolean, b: boolean) => int, start?: int, end?: int): 
    FixedArray<boolean>;

/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<boolean> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<boolean> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<boolean>): FixedArray<boolean>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<boolean> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<boolean>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<byte> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Byte } 指定索引处的元素。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<byte>, index: int): Byte;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<byte> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int): FixedArray<byte>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<byte> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int, start: int): FixedArray<byte>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<byte> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<byte>, target: int, start: int, end?: int): FixedArray<byte>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<byte> } self - 执行`fill`操作的数组。
 * @param { byte } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<byte>, value: byte, start?: int, end?: int): FixedArray<byte>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<byte> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Byte | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): Byte | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<byte> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<byte> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Byte | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<byte>, predicate: (elem: byte, index: int, array: FixedArray<byte>) 
    => boolean): Byte | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<byte> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<byte> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<byte>, predicate: (value: byte, index: int, array: FixedArray<byte>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<byte> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<byte>, predicate: (element: byte, index: int, array: FixedArray<byte>) 
    => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<byte> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { byte } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<byte>, callbackfn: (previousValue: byte, currentValue: byte, index: int, 
    array: FixedArray<byte>) => byte): byte;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<byte> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = byte>(self: FixedArray<byte>, callbackfn: (previousValue: U, currentValue: byte, 
    index: int, array: FixedArray<byte>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<byte> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<byte>, callbackfn: (previousValue: U, currentValue: byte, index: int, 
    array: FixedArray<byte>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<byte> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<byte>, callbackfn: (value: byte, index: int, array: FixedArray<byte>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<byte> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<byte>, start: int): FixedArray<byte>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<byte> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<byte>, start?: int, end?: int): FixedArray<byte>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<byte> } self - 执行`lastIndexOf`操作的数组。
 * @param { byte } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<byte>, element: byte, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<byte> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<byte>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<byte> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<byte>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<byte> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<byte> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<byte> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<byte>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start: int): FixedArray<byte>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<byte> } [...items] - 待添加到数组中的元素。
 * @returns { FixedArray<byte> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start: int, del: int, ...items: FixedArray<byte>): 
    FixedArray<byte>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<byte>, start?: int, del?: int): FixedArray<byte>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<byte> } self - 执行`includes`操作的数组。
 * @param { byte } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<byte>, val: byte, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<byte> } self - 执行`indexOf`操作的数组。
 * @param { byte } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<byte>, val: byte, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<byte> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<byte>): FixedArray<byte>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<byte> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<byte>, comparator: (a: byte, b: byte) => int): FixedArray<byte>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<byte> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<byte> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<byte>): FixedArray<byte>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<byte> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<byte> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<byte>): FixedArray<byte>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<byte> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { byte } value - 在指定索引处插入的新值。
 * @returns { FixedArray<byte> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<byte>, index: int, value: byte): FixedArray<byte>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<byte> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<byte> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<byte>): IterableIterator<byte>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<byte> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, byte]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<byte>): IterableIterator<[int, byte]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<byte> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<byte> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<byte>, callbackfn: (value: byte, index: int, array: FixedArray<byte>) => byte): 
    FixedArray<byte>;
/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<byte> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { byte } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<byte>, callbackfn: (previousValue: byte, currentValue: byte, index: int, 
    array: FixedArray<byte>) => byte): byte;

/**
 * 构造新的`Array`实例，并以给定数组中
 * 通过指定函数测试的元素
 * 填充该实例。
 *
 * @param { FixedArray<byte> } self
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<byte> } 由`this`构造出的新`Array`实例，其中的元素已
 *     使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<byte>, fn: (v: byte, k: int, array: FixedArray<byte>) => boolean): 
    FixedArray<byte>;
/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<byte> } self - 执行`concat`操作的数组。
 * @param { FixedArray<byte> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<byte>> } more - 待连接的其他数组。
 * @returns { FixedArray<byte> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<byte>, fst: FixedArray<byte>, ...more: FixedArray<FixedArray<byte>>): 
    FixedArray<byte>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<byte> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<byte>> } [...items] - 待连接为新数组的其他数组。
 * @returns { FixedArray<byte> } 由`this`与给定的Array类实例`items`构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<byte>, ...items: FixedArray<ConcatArray<byte>>): FixedArray<byte>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<byte> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<byte> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<byte>, comparator: (a: byte, b: byte) => int, start?: int, end?: int): 
    FixedArray<byte>;

/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<byte> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<byte> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<byte>): FixedArray<byte>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<byte> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<byte>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<short> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Short } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<short>, index: int): Short;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<short> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int): FixedArray<short>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<short> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int, start: int): FixedArray<short>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<short> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<short>, target: int, start: int, end?: int): FixedArray<short>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<short> } self - 执行`fill`操作的数组。
 * @param { short } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<short>, value: short, start?: int, end?: int): FixedArray<short>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<short> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Short | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): Short | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<short> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<short> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Short | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<short>, predicate: (elem: short, index: int, array: FixedArray<short>) 
    => boolean): Short | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<short> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<short> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<short>, predicate: (value: short, index: int, array: FixedArray<short>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<short> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<short>, predicate: (element: short, index: int, array: 
    FixedArray<short>) => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<short> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { short } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<short>, callbackfn: (previousValue: short, currentValue: short, index: int, 
    array: FixedArray<short>) => short): short;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<short> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = short>(self: FixedArray<short>, callbackfn: (previousValue: U, currentValue: short, index: 
    int, array: FixedArray<short>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<short> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<short>, callbackfn: (previousValue: U, currentValue: short, 
    index: int, array: FixedArray<short>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<short> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<short>, callbackfn: (value: short, index: int, array: FixedArray<short>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<short> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<short>, start: int): FixedArray<short>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<short> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<short>, start?: int, end?: int): FixedArray<short>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<short> } self - 执行`lastIndexOf`操作的数组。
 * @param { short } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<short>, element: short, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<short> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<short>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<short> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<short>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<short> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<short> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<short> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<short>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start: int): FixedArray<short>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<short> } [...items] - 待添加到数组中的元素。
 * @returns { FixedArray<short> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start: int, del: int, ...items: FixedArray<short>): 
    FixedArray<short>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<short> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<short>, start?: int, del?: int): FixedArray<short>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<short> } self - 执行`includes`操作的数组。
 * @param { short } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<short>, val: short, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<short> } self - 执行`indexOf`操作的数组。
 * @param { short } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<short>, val: short, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<short> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<short>): FixedArray<short>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<short> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<short>, comparator: (a: short, b: short) => int): FixedArray<short>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<short> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<short> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<short>): FixedArray<short>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<short> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<short> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<short>): FixedArray<short>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<short> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { short } value - 在指定索引处插入的新值。
 * @returns { FixedArray<short> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<short>, index: int, value: short): FixedArray<short>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<short> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<short> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<short>): IterableIterator<short>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<short> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, short]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<short>): IterableIterator<[int, short]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<short> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<short> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<short>, callbackfn: (value: short, index: int, array: FixedArray<short>) 
    => short): FixedArray<short>;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<short> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { short } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<short>, callbackfn: (previousValue: short, currentValue: short, 
    index: int, array: FixedArray<short>) => short): short;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<short> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<short> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<short>, fn: (v: short, k: int, array: FixedArray<short>) => boolean): 
    FixedArray<short>;
/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<short> } self - 执行`concat`操作的数组。
 * @param { FixedArray<short> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<short>> } more - 待连接的其他数组。
 * @returns { FixedArray<short> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<short>, fst: FixedArray<short>, ...more: FixedArray<FixedArray<short>>): 
    FixedArray<short>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<short> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<short>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<short> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<short>, ...items: FixedArray<ConcatArray<short>>): FixedArray<short>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<short> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 * @param { int } [end] - 结束排序的索引。
 * @returns { FixedArray<short> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<short>, comparator: (a: short, b: short) => int, start?: int, end?: int): 
    FixedArray<short>;
/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<short> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<short> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<short>): FixedArray<short>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<short> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<short>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<int> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Int } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<int>, index: int): Int;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<int> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int): FixedArray<int>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<int> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int, start: int): FixedArray<int>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<int> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<int>, target: int, start: int, end?: int): FixedArray<int>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<int> } self - 执行`fill`操作的数组。
 * @param { int } value - 用于填充数组的值。
 *     <br>取值约束：应为整数。
 * @param { int } [start] - 开始填充的索引（可选）。取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 * @returns { FixedArray<int> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<int>, value: int, start?: int, end?: int): FixedArray<int>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<int> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Int | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): Int | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<int> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<int> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Int | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<int>, predicate: (elem: int, index: int, array: FixedArray<int>) 
    => boolean): Int | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<int> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<int> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<int>, predicate: (value: int, index: int, array: FixedArray<int>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<int> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<int>, predicate: (element: int, index: int, array: FixedArray<int>) 
    => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<int> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { int } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<int>, callbackfn: (previousValue: int, currentValue: int, index: int, 
    array: FixedArray<int>) => int): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<int> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = int>(self: FixedArray<int>, callbackfn: (previousValue: U, currentValue: int, index: int, 
    array: FixedArray<int>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<int> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<int>, callbackfn: (previousValue: U, currentValue: int, index: int, 
    array: FixedArray<int>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<int> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<int>, callbackfn: (value: int, index: int, array: FixedArray<int>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<int> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<int>, start: int): FixedArray<int>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<int> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<int>, start?: int, end?: int): FixedArray<int>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<int> } self - 执行`lastIndexOf`操作的数组。
 * @param { int } searchElement - 待在数组中查找的元素。
 *     <br>取值约束：应为整数。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<int>, element: int, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<int> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<int>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<int> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<int>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<int> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<int> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<int> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<int>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start: int): FixedArray<int>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<int> } items - 待添加到数组中的元素。
 * @returns { FixedArray<int> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start: int, del: int, ...items: FixedArray<int>): FixedArray<int>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<int>, start?: int, del?: int): FixedArray<int>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<int> } self - 执行`includes`操作的数组。
 * @param { int } val - 待查找的值。
 *     <br>取值约束：应为整数。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<int>, val: int, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<int> } self - 执行`indexOf`操作的数组。
 * @param { int } val - 待在数组中查找的元素。
 *     <br>取值约束：应为整数。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<int>, val: int, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<int> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<int>): FixedArray<int>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<int> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<int>, comparator: (a: int, b: int) => int): FixedArray<int>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<int> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<int> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<int>): FixedArray<int>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<int> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<int> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<int>): FixedArray<int>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<int> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } value - 在指定索引处插入的新值。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<int>, index: int, value: int): FixedArray<int>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<int> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<int>): IterableIterator<int>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<int> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, int]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<int>): IterableIterator<[int, int]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<int> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<int> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<int>, callbackfn: (value: int, index: int, array: FixedArray<int>) => int): 
    FixedArray<int>;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<int> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { int } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<int>, callbackfn: (previousValue: int, currentValue: int, 
    index: int, array: FixedArray<int>) => int): int;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<int> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<int> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<int>, fn: (v: int, k: int, array: FixedArray<int>) => boolean): 
    FixedArray<int>;

/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<int> } self - 执行`concat`操作的数组。
 * @param { FixedArray<int> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<int>> } more - 待连接的其他数组。
 * @returns { FixedArray<int> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<int>, fst: FixedArray<int>, ...more: FixedArray<FixedArray<int>>): 
    FixedArray<int>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<int> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<int>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<int> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<int>, ...items: FixedArray<ConcatArray<int>>): FixedArray<int>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<int> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<int> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<int>, comparator: (a: int, b: int) => int, start?: int, end?: int): 
    FixedArray<int>;

/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<int> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<int>): FixedArray<int>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<int> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<int>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<long> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Long } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<long>, index: int): Long;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<long> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int): FixedArray<long>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<long> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int, start: int): FixedArray<long>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<long> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<long>, target: int, start: int, end?: int): FixedArray<long>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<long> } self - 执行`fill`操作的数组。
 * @param { long } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<long>, value: long, start?: int, end?: int): FixedArray<long>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<long> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Long | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): Long | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<long> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<long> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Long | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<long>, predicate: (elem: long, index: int, array: FixedArray<long>) 
    => boolean): Long | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<long> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<long> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<long>, predicate: (value: long, index: int, array: FixedArray<long>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<long> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<long>, predicate: (element: long, index: int, array: FixedArray<long>) 
    => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<long> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { long } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<long>, callbackfn: (previousValue: long, currentValue: long, index: int, 
    array: FixedArray<long>) => long): long;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<long> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = long>(self: FixedArray<long>, callbackfn: (previousValue: U, currentValue: long, 
    index: int, array: FixedArray<long>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<long> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<long>, callbackfn: (previousValue: U, currentValue: long, index: int, 
    array: FixedArray<long>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<long> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<long>, callbackfn: (value: long, index: int, array: FixedArray<long>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<long> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<long>, start: int): FixedArray<long>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<long> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。+
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<long>, start?: int, end?: int): FixedArray<long>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<long> } self - 执行`lastIndexOf`操作的数组。
 * @param { long } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<long>, element: long, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<long> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<long>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<long> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<long>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<long> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<long> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<long> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<long>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start: int): FixedArray<long>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<long> } items - 待添加到数组中的元素。
 * @returns { FixedArray<long> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start: int, del: int, ...items: FixedArray<long>): 
    FixedArray<long>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<long>, start?: int, del?: int): FixedArray<long>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<long> } self - 执行`includes`操作的数组。
 * @param { long } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<long>, val: long, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<long> } self - 执行`indexOf`操作的数组。
 * @param { long } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<long>, val: long, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<long> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<long>): FixedArray<long>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<long> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<long>, comparator: (a: long, b: long) => int): FixedArray<long>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<long> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<long> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<long>): FixedArray<long>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<long> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<long> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<long>): FixedArray<long>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<long> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { long } value - 在指定索引处插入的新值。
 * @returns { FixedArray<long> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<long>, index: int, value: long): FixedArray<long>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<long> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<long> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<long>): IterableIterator<long>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<long> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, long]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<long>): IterableIterator<[int, long]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<long> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<long> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<long>, callbackfn: (value: long, index: int, array: FixedArray<long>) => long): 
    FixedArray<long>;
/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<long> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { long } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<long>, callbackfn: (previousValue: long, currentValue: long, index: int, 
    array: FixedArray<long>) => long): long;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<long> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<long> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<long>, fn: (v: long, k: int, array: FixedArray<long>) => boolean): 
    FixedArray<long>;
/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<long> } self - 执行`concat`操作的数组。
 * @param { FixedArray<long> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<long>> } more - 待连接的其他数组。
 * @returns { FixedArray<long> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<long>, fst: FixedArray<long>, ...more: FixedArray<FixedArray<long>>): 
    FixedArray<long>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<long> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<long>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<long> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<long>, ...items: FixedArray<ConcatArray<long>>): FixedArray<long>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<long> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<long> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<long>, comparator: (a: long, b: long) => int, start?: int, end?: int): 
    FixedArray<long>;
/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<long> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<long> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<long>): FixedArray<long>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<long> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<long>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<float> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Float } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<float>, index: int): Float;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<float> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int): FixedArray<float>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<float> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int, start: int): FixedArray<float>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<float> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<float>, target: int, start: int, end?: int): FixedArray<float>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<float> } self - 执行`fill`操作的数组。
 * @param { float } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 * @returns { FixedArray<float> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<float>, value: float, start?: int, end?: int): FixedArray<float>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<float> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Float | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): Float | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<float> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<float> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Float | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<float>, predicate: (elem: float, index: int, array: FixedArray<float>) 
    => boolean): Float | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<float> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<float> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<float>, predicate: (value: float, index: int, array: FixedArray<float>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<float> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<float>, predicate: (element: float, index: int, 
    array: FixedArray<float>) => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<float> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { float } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<float>, callbackfn: (previousValue: float, currentValue: float, 
    index: int, array: FixedArray<float>) => float): float;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<float> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = float>(self: FixedArray<float>, callbackfn: (previousValue: U, currentValue: float, 
    index: int, array: FixedArray<float>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<float> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<float>, callbackfn: (previousValue: U, currentValue: float, 
    index: int, array: FixedArray<float>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<float> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<float>, callbackfn: (value: float, index: int, array: FixedArray<float>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<float> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<float>, start: int): FixedArray<float>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<float> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<float>, start?: int, end?: int): FixedArray<float>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<float> } self - 执行`lastIndexOf`操作的数组。
 * @param { float } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<float>, element: float, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<float> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<float>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<float> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<float>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<float> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<float> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<float> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<float>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start: int): FixedArray<float>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<float> } items - 待添加到数组中的元素。
 * @returns { FixedArray<float> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start: int, del: int, ...items: FixedArray<float>): 
    FixedArray<float>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<float>, start?: int, del?: int): FixedArray<float>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<float> } self - 执行`includes`操作的数组。
 * @param { float } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<float>, val: float, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<float> } self - 执行`indexOf`操作的数组。
 * @param { float } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<float>, val: float, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<float> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<float>): FixedArray<float>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<float> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<float>, comparator: (a: float, b: float) => int): FixedArray<float>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<float> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<float> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<float>): FixedArray<float>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<float> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<float> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<float>): FixedArray<float>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<float> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { float } value - 在指定索引处插入的新值。
 * @returns { FixedArray<float> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<float>, index: int, value: float): FixedArray<float>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<float> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<float> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<float>): IterableIterator<float>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<float> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, float]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<float>): IterableIterator<[int, float]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<float> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<float> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<float>, callbackfn: (value: float, index: int, array: FixedArray<float>) 
    => float): FixedArray<float>;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<float> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { float } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<float>, callbackfn: (previousValue: float, currentValue: float, 
    index: int, array: FixedArray<float>) => float): float;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<float> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<float> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<float>, fn: (v: float, k: int, array: FixedArray<float>) => boolean): 
    FixedArray<float>;
/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<float> } self - 执行`concat`操作的数组。
 * @param { FixedArray<float> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<float>> } more - 待连接的其他数组。
 * @returns { FixedArray<float> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<float>, fst: FixedArray<float>, ...more: FixedArray<FixedArray<float>>): 
    FixedArray<float>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<float> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<float>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<float> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<float>, ...items: FixedArray<ConcatArray<float>>): FixedArray<float>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<float> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<float> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<float>, comparator: (a: float, b: float) => int, start?: int, end?: int): 
    FixedArray<float>;
/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<float> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<float> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<float>): FixedArray<float>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<float> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<float>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<double> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Double } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<double>, index: int): Double;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<double> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int): FixedArray<double>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<double> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int, start: int): FixedArray<double>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<double> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<double>, target: int, start: int, end?: int): FixedArray<double>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<double> } self - 执行`fill`操作的数组。
 * @param { double } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。取值约束：应为整数。
 * @returns { FixedArray<double> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<double>, value: double, start?: int, end?: int): FixedArray<double>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<double> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Double | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): Double | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<double> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<double> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Double | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<double>, predicate: (elem: double, index: int, array: FixedArray<double>) 
    => boolean): Double | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<double> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<double> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<double>, predicate: (value: double, index: int, array: FixedArray<double>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<double> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<double>, predicate: (element: double, index: int, 
    array: FixedArray<double>) => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<double> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { double } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<double>, callbackfn: (previousValue: double, currentValue: double, 
    index: int, array: FixedArray<double>) => double): double;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<double> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = double>(self: FixedArray<double>, callbackfn: (previousValue: U, currentValue: double, 
    index: int, array: FixedArray<double>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<double> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<double>, callbackfn: (previousValue: U, currentValue: double, 
    index: int, array: FixedArray<double>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<double> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<double>, callbackfn: (value: double, index: int, array: FixedArray<double>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<double> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<double>, start: int): FixedArray<double>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<double> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<double>, start?: int, end?: int): FixedArray<double>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<double> } self - 执行`lastIndexOf`操作的数组。
 * @param { double } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<double>, element: double, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<double> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<double>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<double> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<double>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<double> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<double> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<double> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<double>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start: int): FixedArray<double>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<double> } items - 待添加到数组中的元素。
 * @returns { FixedArray<double> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start: int, del: int, ...items: FixedArray<double>): 
    FixedArray<double>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<double>, start?: int, del?: int): FixedArray<double>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<double> } self - 执行`includes`操作的数组。
 * @param { double } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<double>, val: double, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<double> } self - 执行`indexOf`操作的数组。
 * @param { double } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<double>, val: double, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<double> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<double>): FixedArray<double>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<double> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<double>, comparator: (a: double, b: double) => int): FixedArray<double>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<double> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<double> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<double>): FixedArray<double>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<double> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<double> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<double>): FixedArray<double>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<double> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { double } value - 在指定索引处插入的新值。
 * @returns { FixedArray<double> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<double>, index: int, value: double): FixedArray<double>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<double> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<double> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<double>): IterableIterator<double>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<double> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, double]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<double>): IterableIterator<[int, double]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<double> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<double> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<double>, callbackfn: (value: double, index: int, array: FixedArray<double>) 
    => double): FixedArray<double>;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<double> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { double } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<double>, callbackfn: (previousValue: double, currentValue: double, 
    index: int, array: FixedArray<double>) => double): double;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<double> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<double> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<double>, fn: (v: double, k: int, array: FixedArray<double>) => boolean): 
    FixedArray<double>;

/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<double> } self - 执行`concat`操作的数组。
 * @param { FixedArray<double> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<double>> } more - 待连接的其他数组。
 * @returns { FixedArray<double> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<double>, fst: FixedArray<double>, ...more: FixedArray<FixedArray<double>>): 
    FixedArray<double>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<double> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<double>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<double> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<double>, ...items: FixedArray<ConcatArray<double>>): FixedArray<double>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<double> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<double> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<double>, comparator: (a: double, b: double) => int, start?: int, end?: int): 
    FixedArray<double>;

/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<double> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<double> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<double>): FixedArray<double>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<double> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<double>): IterableIterator<int>;

/**
 * 接受一个整数值并返回该索引处的元素，允许传入正整数和负整数。
 * 负整数表示从数组最后一个元素开始倒数。
 *
 * @param { FixedArray<char> } self - 执行`at`操作的数组。
 * @param { int } index - 待返回数组元素的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { Char } 指定索引处的元素。
 * @throws { RangeError } 当索引越界时，抛出RangeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function at(self: FixedArray<char>, index: int): Char;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<char> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int): FixedArray<char>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<char> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int, start: int): FixedArray<char>;

/**
 * 将数组的一部分浅拷贝到同一数组的其他位置并返回该数组，
 * 且不改变其长度。
 *
 * @param { FixedArray<char> } self - 执行`copyWithin`操作的数组。
 * @param { int } target - 复制目标位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } start - 开始复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 停止复制元素位置的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function copyWithin(self: FixedArray<char>, target: int, start: int, end?: int): FixedArray<char>;

/**
 * 将数组中从起始索引到结束索引之间的所有元素替换为固定值。
 *
 * @param { FixedArray<char> } self - 执行`fill`操作的数组。
 * @param { char } value - 用于填充数组的值。
 * @param { int } [start] - 开始填充的索引（可选）。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束填充的索引（可选，不包含）。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 修改后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function fill(self: FixedArray<char>, value: char, start?: int, end?: int): FixedArray<char>;

/**
 * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
 *
 * @param { FixedArray<char> } self - 执行`find`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Char | undefined } 第一个满足指定测试函数的元素的值；
 *     若不存在则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function find(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): Char | undefined;

/**
 * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
 *
 * @param { FixedArray<char> } self - 执行`findIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findIndex(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): int;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的
 * 元素的值。
 *
 * @param { FixedArray<char> } self - 执行`findLast`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { Char | undefined } 找到时返回该元素的值，否则返回undefined。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLast(self: FixedArray<char>, predicate: (elem: char, index: int, array: FixedArray<char>) 
    => boolean): Char | undefined;

/**
 * 判断数组中的所有元素是否都满足指定的测试条件。
 *
 * @param { FixedArray<char> } self - 执行`every`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。every方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值false，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中所有元素都返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function every(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): boolean;

/**
 * 判断数组中是否存在使指定回调函数返回true的元素。
 *
 * @param { FixedArray<char> } self - 执行`some`操作的数组。
 * @param { function } predicate - 最多接受三个参数的函数。some方法会对数组中的每个元素调用predicate
 *     函数，直到predicate返回的值可转换为
 *     Boolean值true，或遍历完整个数组。
 * @returns { boolean } 如果predicate对数组中至少一个元素返回true则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function some(self: FixedArray<char>, predicate: (value: char, index: int, array: FixedArray<char>) 
    => boolean): boolean;

/**
 * 按逆序遍历数组，返回第一个满足指定测试函数的元素的索引；
 * 如果没有元素满足该测试函数，则返回-1。
 *
 * @param { FixedArray<char> } self - 执行`findLastIndex`操作的数组。
 * @param { function } predicate - 对数组中每个值执行的函数。
 * @returns { int } 第一个满足指定测试函数的元素的索引，若不存在则返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function findLastIndex(self: FixedArray<char>, predicate: (element: char, index: int, array: FixedArray<char>) 
    => boolean): int;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<char> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @returns { char } 累加得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出TypeError。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce(self: FixedArray<char>, callbackfn: (previousValue: char, currentValue: char, index: int, 
    array: FixedArray<char>) => char): char;

/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 * 即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { FixedArray<char> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduce方法会对稀疏数组中的每个元素
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U = char>(self: FixedArray<char>, callbackfn: (previousValue: U, currentValue: char, 
    index: int, array: FixedArray<char>) => U, initialValue: U): U;

/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<char> } self - 执行`reduce`操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @param { U } initialValue - 累加器的初始值。
 * @returns { U } 累加得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight<U>(self: FixedArray<char>, callbackfn: (previousValue: U, currentValue: char, index: int, 
    array: FixedArray<char>) => U, initialValue: U): U;

/**
 * 对数组中的每个元素执行指定的操作。
 *
 * @param { FixedArray<char> } self - 执行`forEach`操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对稀疏数组中的每个元素
 *     调用一次该函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function forEach(self: FixedArray<char>, callbackfn: (value: char, index: int, array: FixedArray<char>) 
    => void): void;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<char> } self - 执行`slice`操作的数组。
 * @param { int } start - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<char>, start: int): FixedArray<char>;

/**
 * 返回数组中某一部分的副本。
 *
 * @param { FixedArray<char> } self - 执行`slice`操作的数组。
 * @param { int } [start] - 数组中指定部分的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 数组中指定部分的结束索引。
 *     截取的部分包含起始索引处的元素，但不包含结束索引处的元素。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 包含所提取元素的新Array对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function slice(self: FixedArray<char>, start?: int, end?: int): FixedArray<char>;

/**
 * 返回指定元素在数组中最后一次出现的索引，若不存在则返回-1。
 * 查找按逆序进行。
 *
 * @param { FixedArray<char> } self - 执行`lastIndexOf`操作的数组。
 * @param { char } searchElement - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中最后一次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function lastIndexOf(self: FixedArray<char>, element: char, fromIndex?: int): int;

/**
 * 使用指定的分隔字符串连接`Array`中的所有元素，
 * 并返回新建的字符串。
 *
 * @param { FixedArray<char> } self - 执行`join`操作的数组。
 * @param { string } [sep] - 用于分隔数组中相邻元素的字符串。如果不传入该参数，则数组
 *     元素之间以逗号分隔。
 * @returns { string } 由所有数组元素连接而成的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function join(self: FixedArray<char>, sep?: string): string;

/**
 * 返回表示指定数组及其元素的字符串。
 *
 * @param { FixedArray<char> } self - 执行`stringify`操作的数组。
 * @returns { string } 表示该数组的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toString(self: FixedArray<char>): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<char> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @param { Object } options - 包含配置属性的对象。
 * @returns { string } 表示数组元素的字符串。
 * @throws { Error } 当该方法未实现时，抛出Error。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>, locales: Object, options: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<char> } self - 执行`toLocaleString`操作的数组。
 * @param { Object } locales - 包含BCP 47语言标签的字符串，或由此类字符串组成的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>, locales: Object): string;

/**
 * 返回表示数组元素的字符串。数组元素通过各自的toLocaleString
 * 方法转换为字符串。
 *
 * @param { FixedArray<char> } self - 执行`toLocaleString`操作的数组。
 * @returns { string } 表示数组元素的字符串。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toLocaleString(self: FixedArray<char>): string;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start: int): FixedArray<char>;

/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toSpliced`操作的数组。
 * @param { int } start - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } del - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @param { FixedArray<char> } items - 待添加到数组中的元素。
 * @returns { FixedArray<char> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start: int, del: int, ...items: FixedArray<char>): 
    FixedArray<char>;
/**
 * 返回在指定索引处移除或替换部分元素后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toSpliced`操作的数组。
 * @param { int } [start] - 开始修改数组的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { int } [del] - 待移除元素的number。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 应用修改后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSpliced(self: FixedArray<char>, start?: int, del?: int): FixedArray<char>;

/**
 * 判断数组的元素中是否包含指定的值，并相应地返回true或false。
 *
 * @param { FixedArray<char> } self - 执行`includes`操作的数组。
 * @param { char } val - 待查找的值。
 * @param { int } [fromIndex] - 在该数组中开始查找value的位置。
 *     <br>取值约束：应为整数。
 * @returns { boolean } 如果找到该值则返回true，否则返回false。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function includes(self: FixedArray<char>, val: char, fromIndex?: int): boolean;

/**
 * 返回指定元素在数组中首次出现的索引，若不存在则返回-1。
 *
 * @param { FixedArray<char> } self - 执行`indexOf`操作的数组。
 * @param { char } val - 待在数组中查找的元素。
 * @param { int } [fromIndex] - 在数组中开始查找的索引。
 *     <br>取值约束：应为整数。
 * @returns { int } 该元素在数组中首次出现的索引，未找到时返回-1。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function indexOf(self: FixedArray<char>, val: char, fromIndex?: int): int;

/**
 * 返回元素按升序排序后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toSorted`操作的数组。
 * @returns { FixedArray<char> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<char>): FixedArray<char>;

/**
 * 返回使用指定比较函数排序后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toSorted`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @returns { FixedArray<char> } 排序后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toSorted(self: FixedArray<char>, comparator: (a: char, b: char) => int): FixedArray<char>;

/**
 * 原地反转数组。数组的第一个元素变为最后一个，最后一个元素变为
 * 第一个。
 *
 * @param { FixedArray<char> } self - 执行`reverse`操作的数组。
 * @returns { FixedArray<char> } 反转后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reverse(self: FixedArray<char>): FixedArray<char>;

/**
 * 返回元素顺序反转后的新数组。
 *
 * @param { FixedArray<char> } self - 执行`toReversed`操作的数组。
 * @returns { FixedArray<char> } 反转后的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function toReversed(self: FixedArray<char>): FixedArray<char>;

/**
 * 返回将指定索引处的元素替换为给定值后的新Array。
 *
 * @param { FixedArray<char> } self - 执行`with`操作的数组。
 * @param { int } index - 待替换值的索引，从0开始计数。
 *     <br>取值约束：应为整数。
 * @param { char } value - 在指定索引处插入的新值。
 * @returns { FixedArray<char> } 替换该元素后的新数组。
 * @throws { RangeError } 当索引越界时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function with(self: FixedArray<char>, index: int, value: char): FixedArray<char>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的值。
 *
 * @param { FixedArray<char> } self - 执行`values`操作的数组。
 * @returns { IterableIterator<char> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function values(self: FixedArray<char>): IterableIterator<char>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键值对。
 *
 * @param { FixedArray<char> } self - 执行`entries`操作的数组。
 * @returns { IterableIterator<[int, char]> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function entries(self: FixedArray<char>): IterableIterator<[int, char]>;

/**
 * 对数组中的每个元素调用指定的回调函数，并返回包含各次调用结果的数组。
 *
 * @param { FixedArray<char> } self - 执行映射操作的数组。
 * @param { function } callbackfn - 最多接受三个参数的函数。map方法会对数组中的每个元素调用一次callbackfn
 *     调用一次该函数。
 * @returns { FixedArray<char> } 由`this`与给定函数构造出的数组实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function map(self: FixedArray<char>, callbackfn: (value: char, index: int, array: FixedArray<char>) => char): 
    FixedArray<char>;
/**
 * 按降序对数组中的所有元素调用指定的回调函数。回调函数的
 * 返回值即为累加结果，并作为参数传入下一次回调调用的
 * 函数。
 *
 * @param { FixedArray<char> } self - 执行归约操作的数组。
 * @param { function } callbackfn - 最多接受四个参数的函数。reduceRight方法会按降序对稀疏数组中的
 *     调用一次callbackfn函数。
 * @returns { char } 对数组所有元素应用callbackfn后得到的结果。
 * @throws { TypeError } 当数组为空且未提供初始值时，抛出该异常。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduceRight(self: FixedArray<char>, callbackfn: (previousValue: char, currentValue: char, 
    index: int, array: FixedArray<char>) => char): char;

/**
 * 构造新的Array实例，并以给定数组中通过指定函数测试的
 * 元素填充该实例，
 * 即仅保留通过测试的元素。
 *
 * @param { FixedArray<char> } self - 执行`filter`操作的数组。
 * @param { function } fn - 测试函数，对数组中的每个元素调用。
 * @returns { FixedArray<char> } 由`this`构造出的新Array实例，其中的元素
 *     已使用测试函数`fn`筛选。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function filter(self: FixedArray<char>, fn: (v: char, k: int, array: FixedArray<char>) => boolean): 
    FixedArray<char>;
/**
 * 将参数中提供的数组依次连接，合并两个或多个数组
 * 为一个新数组。
 *
 * @param { FixedArray<char> } self - 执行`concat`操作的数组。
 * @param { FixedArray<char> } fst - 待连接的第一个数组。
 * @param { FixedArray<FixedArray<char>> } more - 待连接的其他数组。
 * @returns { FixedArray<char> } 由这些数组连接而成的新数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<char>, fst: FixedArray<char>, ...more: FixedArray<FixedArray<char>>): 
    FixedArray<char>;
/**
 * 根据当前数组实例与给定的数组实例创建新的数组。
 *
 * @param { FixedArray<char> } self - 执行`concat`操作的数组。
 * @param { FixedArray<ConcatArray<char>> } items - 待连接为新数组的
 *     其他数组。
 * @returns { FixedArray<char> } 由`this`与给定的Array类实例`items`
 *     构造出的新Array实例。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function concat(self: FixedArray<char>, ...items: FixedArray<ConcatArray<char>>): FixedArray<char>;

/**
 * 使用比较函数重新排列当前数组中的元素。
 *
 * @param { FixedArray<char> } self - 执行`sort`操作的数组。
 * @param { function } comparator - 用于定义排序顺序的函数。
 * @param { int } [start] - 开始排序的索引。
 *     <br>取值约束：应为整数。
 * @param { int } [end] - 结束排序的索引。
 *     <br>取值约束：应为整数。
 * @returns { FixedArray<char> } 排序后的数组。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<char>, comparator: (a: char, b: char) => int, start?: int, end?: int): 
    FixedArray<char>;
/**
 * 使用比较函数重新排列`this`中的元素。
 *
 * @param { FixedArray<char> } self - 用于定义排序顺序的比较函数。
 * @returns { FixedArray<char> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort(self: FixedArray<char>): FixedArray<char>;

/**
 * 返回一个新的Array迭代器对象，其中包含数组中每个索引对应的键。
 *
 * @param { FixedArray<char> } self - 用于定义排序顺序的比较函数。
 * @returns { IterableIterator<int> } 新的Array迭代器对象。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function keys(self: FixedArray<char>): IterableIterator<int>;

/**
 * 使用稳定排序算法对`arr`中的元素排序。
 *
 * @param { FixedArray<T> } arr - 待排序的数组。
 * @param { int } startIndex - 排序范围的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 排序范围的结束索引。
 *     <br>取值约束：应为整数。
 * @param { function } comp - 比较函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_stable<T>(arr: FixedArray<T>, startIndex: int, endIndex: int, comp: (lhs: T, rhs: T) => int): 
    void;
/**
 * 使用默认排序方式对`arr`中的元素排序。
 *
 * @param { FixedArray<T> } arr - 待排序的数组。
 * @param { FixedArray<buffStr> } arrStr - 用于比较的数组字符串表示。
 * @param { int } startIndex - 排序范围的起始索引。
 *     <br>取值约束：应为整数。
 * @param { int } endIndex - 排序范围的结束索引。
 *     <br>取值约束：应为整数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function sort_default<T>(arr: FixedArray<T>, arrStr: FixedArray<buffStr>, startIndex: int, endIndex: int): 
    void;
/**
 * 对数组中的所有元素调用指定的回调函数。回调函数的返回值
 *     即为累加结果，并作为参数传入下一次回调调用。
 *
 * @param { Array<U> } self
 * @param { function } callbackfn - 最多接受四个参数的函数。
 *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
 * @param { T } initialValue - 如果指定了initialValue，则将其作为累加的初始值。
 *     首次调用callbackfn时，将该值而非数组元素作为参数传入。
 * @returns { T } 对数组所有元素应用callbackfn后得到的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function reduce<U, T>(self: Array<U>, callbackfn: (previousValue: T, currentValue: U, index: int, 
    array: Array<U>) => T, initialValue: T): T;
