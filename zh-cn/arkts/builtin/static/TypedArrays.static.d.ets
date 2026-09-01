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
 * @file TypedArrays static methods declaration
 * @kit ArkTS
 */

/**
 * Int8Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int8Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1

    /**
     * 创建空的Int8Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Int8Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Int8Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建Int8Array的副本。
     *
     * @param { Int8Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int8Array);

    /**
     * 根据FixedArray<int>创建Int8Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<number>创建Int8Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Int8Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 根据通过Iterable<Number>接口访问的数据创建Int8Array。
     *
     * @param { Iterable<double> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据buf和byteOffset创建Int8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Int8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建Int8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Int8Array中byte类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建Int8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Int8Array中byte类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建Int8Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { byte } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: byte): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Int8Array中存储的byte元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Int8Array } 修改后的Int8Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int8Array;

    /**
     * 将Int8Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Int8Array } 修改后的Int8Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int8Array;

    /**
     * 返回由Int8Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Int8Array。
     *
     * @param { byte } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: byte, start?: int, end?: int): this;

    /**
     * 使用指定值填充Int8Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { this } - 修改后的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { byte } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: byte): void;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 将arr中的所有元素复制到当前Int8Array。
     *
     * @param { FixedArray<byte> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<byte>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int8Array。
     *
     * @param { FixedArray<byte> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<byte>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Int8Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int8Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前Int8Array。
     *
     * @param { Int8Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int8Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前Int8Array。
     *
     * @param { Int8Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int8Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Int8Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<byte> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<byte>): Int8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int8Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int8Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Int8Array } - 新的Int8Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int8Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Int8Array } arr - 待转换为新数组的数组。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int8Array): Int8Array;

    /**
     * 根据除符号性外类型相同的数组创建数组。
     *
     * @param { Uint8Array } arr - 待转换为新数组的数组。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8Array): Int8Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int8Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int8Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int8Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int8Array;

    /**
     * 判断Int8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { byte } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: byte, fromIndex: int): boolean;

    /**
     * 判断Int8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { byte } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于Int8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: byte): boolean;

    /**
     * 判断Int8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Int8Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Int8Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int8Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *      默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Int8Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Int8Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Int8Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Int8Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int8Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Int8Array的反转数据创建新的Int8Array。
     *
     * @returns { Int8Array } - 基于当前Int8Array的反转数据构造的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int8Array;

    /**
     * 使用[begin, this.length)区间截取当前Int8Array。
     *
     * @param { int } begin - 截取的起始索引。
     * @returns { Int8Array } - 包含当前Int8Array[begin, this.length)区间元素的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int8Array;

    /**
     * 使用[begin, end)区间截取当前Int8Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Int8Array } - 包含当前Int8Array[begin;end)区间元素的新Int8Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int8Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Int8Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Int8Array } - 与当前数组共享同一底层ArrayBuffer的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int8Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新Int8Array，原数组不会被修改。
     *
     * @returns { Int8Array } - 元素顺序反转后的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int8Array;

    /**
     * 返回元素按升序排序后的新Int8Array，原数组不会被修改。
     *
     * @returns { Int8Array } - 元素按升序排序后的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int8Array;

    /**
     * 返回以逗号分隔的Int8Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     *  按升序返回遍历Int8Array各元素值的迭代器。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int8Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { byte } value - 待设置的值。
     * @returns { Int8Array } - 将index处元素替换为value后的新Int8Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: byte): Int8Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int8Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Int8Array } - 将index处元素替换为value后的新Int8Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int8Array;

    /**
     * 查找Int8Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *     默认按数值升序排序。
     * @returns { this } - 排序后的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int8Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int8Array) => U,
        initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int8Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int8Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int8Array) => U,
        initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int8Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int8Array) => double): double;

    /**
     * 对当前Int8Array的所有元素执行fn(arr[i])，创建新的Int8Array。
     *
     * @param { function } fn - 对当前Int8Array中每个元素应用的函数。
     * @returns { Int8Array } - 对当前Int8Array中每个元素应用fn后得到的新Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int8Array) => double): Int8Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int8Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Int8Array创建新的Int8Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Int8Array } - 新的Int8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int8Array) => boolean): Int8Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int8Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int8Array) => boolean): int;

    /**
     * 查找Int8Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { byte } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int8Array) => boolean): byte;

    /**
     * 查找Int8Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int8Array) => boolean): int;

    /**
     * 按升序对Int8Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int8Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { Int8Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int8Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * 占用的字节数。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * 字符串\"Int8Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int8Array';
}
/**
 * Int16Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int16Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 2;

    /**
     * 创建空的Int16Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Int16Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Int16Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建Int16Array的副本。
     *
     * @param { Int16Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int16Array);

    /**
     * 根据FixedArray<int>创建Int16Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<number>创建Int16Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Int16Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 根据通过Iterable<Number>接口访问的数据创建Int16Array。
     *
     * @param { Iterable<double> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据buf和byteOffset创建Int16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Int16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建Int16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Int16Array中short类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建Int16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Int16Array中short类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建Int16Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { short } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: short): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Int16Array中存储的short元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Int16Array } 修改后的Int16Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int16Array;

    /**
     * 将Int16Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Int16Array } 修改后的Int16Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int16Array;

    /**
     * 返回由Int16Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Int16Array。
     *
     * @param { short } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { this } - 修改后的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: short, start?: int, end?: int): this;

    /**
     * 使用指定值填充Int16Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { this } - 修改后的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { short } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: short): void;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 将arr中的所有元素复制到当前Int16Array。
     *
     * @param { FixedArray<short> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<short>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int16Array。
     *
     * @param { FixedArray<short> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<short>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Int16Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int16Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前Int16Array。
     *
     * @param { Int16Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int16Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前Int16Array。
     *
     * @param { Int16Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int16Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Int16Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<short> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Int16Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int16Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int16Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int16Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int16Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Int16Array } - 新的Int16Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int16Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Int16Array } arr - 待转换为新数组的数组。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int16Array): Int16Array;

    /**
     * 根据除符号性外类型相同的数组创建数组。
     *
     * @param { Uint16Array } arr - 待转换为新数组的数组。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint16Array): Int16Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int16Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int16Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int16Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int16Array;

    /**
     * 判断Int16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { short } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: short, fromIndex: int): boolean;

    /**
     * 判断Int16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { short } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于Int16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: short): boolean;

    /**
     * 判断Int16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Int16Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Int16Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int16Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Int16Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Int16Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Int16Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Int16Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int16Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *      默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Int16Array的反转数据创建新的Int16Array。
     *
     * @returns { Int16Array } - 基于当前Int16Array的反转数据构造的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int16Array;

    /**
     * 使用[begin, this.length)区间截取当前Int16Array。
     *
     * @param { int } begin - 截取的起始索引。
     * @returns { Int16Array } - 包含当前Int16Array[begin, this.length)区间元素的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int16Array;

    /**
     * 使用[begin, end)区间截取当前Int16Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Int16Array } - 包含当前Int16Array[begin;end)区间元素的新Int16Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int16Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Int16Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Int16Array } - 与当前数组共享同一底层ArrayBuffer的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int16Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新Int16Array，原数组不会被修改。
     *
     * @returns { Int16Array } - 元素顺序反转后的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int16Array;

    /**
     * 返回元素按升序排序后的新Int16Array，原数组不会被修改。
     *
     * @returns { Int16Array } - 元素按升序排序后的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int16Array;

    /**
     * 返回以逗号分隔的Int16Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回数组值的迭代器。
     *
     * @returns { IterableIterator<double> } - 迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int16Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { short } value - 待设置的值。
     * @returns { Int16Array } - 将index处元素替换为value后的新Int16Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: short): Int16Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int16Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Int16Array } - 将index处元素替换为value后的新Int16Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int16Array;

    /**
     * 查找Int16Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *     默认按数值升序排序。
     * @returns { this } - 排序后的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int16Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int16Array) => U,
        initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int16Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int16Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int16Array) => U,
        initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int16Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int16Array) => double): double;

    /**
     * 对当前Int16Array的所有元素执行fn(arr[i])，创建新的Int16Array。
     *
     * @param { function } fn - 对当前Int16Array中每个元素应用的函数。
     * @returns { Int16Array } - 对当前Int16Array中每个元素应用fn后得到的新Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int16Array) => double): Int16Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int16Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Int16Array创建新的Int16Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Int16Array } - 新的Int16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int16Array) => boolean): Int16Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int16Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int16Array) => boolean): int;

    /**
     * 查找Int16Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { short } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int16Array) => boolean): short;

    /**
     * 查找Int16Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int16Array) => boolean): int;

    /**
     * 按升序对Int16Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int16Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { Int16Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int16Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * 占用的字节数。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * 字符串\"Int16Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int16Array';
}

/**
 * Int32Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int32Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * 创建空的Int32Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Int32Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Int32Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建Int32Array的副本。
     *
     * @param { Int32Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int32Array);

    /**
     * 根据FixedArray<int>创建Int32Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Int32Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Int32Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 根据通过Iterable<Number>接口访问的数据创建Int32Array。
     *
     * @param { Iterable<double> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据buf和byteOffset创建Int32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Int32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建Int32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Int32Array中int类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建Int32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Int32Array中int类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建Int32Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Int32Array中存储的int元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Int32Array } 修改后的Int32Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int32Array;

    /**
     * 将Int32Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Int32Array } 修改后的Int32Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int32Array;

    /**
     * 返回由Int32Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Int32Array。
     *
     * @param { int } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): this;

    /**
     * 使用指定值填充Int32Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { this } - 修改后的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 将arr中的所有元素复制到当前Int32Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int32Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Int32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Int32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前Int32Array。
     *
     * @param { Int32Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int32Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前Int32Array。
     *
     * @param { Int32Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int32Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Int32Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int32Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int32Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Int32Array } - 新的Int32Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int32Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Int32Array } arr - 待转换为新数组的数组。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int32Array): Int32Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int32Array;

    /**
     * 判断Int32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素。
     *     <br>取值约束：应为整数。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * 判断Int32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素，查找从索引0处开始。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * 判断Int32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Int32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Int32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Int32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     *     <br>取值约束：应为整数。
     * @param { int } fromIndex - 开始查找的数组索引。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int32Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Int32Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Int32Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Int32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Int32Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Int32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Int32Array的反转数据创建新的Int32Array。
     *
     * @returns { Int32Array } - 基于当前Int32Array的反转数据构造的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int32Array;

    /**
     * 使用[begin, this.length)区间截取当前Int32Array。
     *
     * @param { int } begin - 截取的起始索引。
     * @returns { Int32Array } - 包含当前Int32Array[begin, this.length)区间元素的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int32Array;

    /**
     * 使用[begin, end)区间截取当前Int32Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Int32Array } - 包含当前Int32Array[begin;end)区间元素的新Int32Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int32Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Int32Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Int32Array } - 与当前数组共享同一底层ArrayBuffer的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int32Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新Int32Array，原数组不会被修改。
     *
     * @returns { Int32Array } - 元素顺序反转后的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int32Array;

    /**
     * 返回元素按升序排序后的新Int32Array，原数组不会被修改。
     *
     * @returns { Int32Array } - 元素按升序排序后的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int32Array;

    /**
     * 返回以逗号分隔的Int32Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 按升序返回遍历Int32Array各元素值的迭代器。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int32Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - 待设置的值。
     *     <br>取值约束：应为整数。
     * @returns { Int32Array } - 将index处元素替换为value后的新Int32Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Int32Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Int32Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Int32Array } - 将index处元素替换为value后的新Int32Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int32Array;

    /**
     * 查找Int32Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *     默认按数值升序排序。
     * @returns { this } - 排序后的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int32Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int32Array) => U,
        initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int32Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int32Array) => U,
        initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Int32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int32Array) => double): double;

    /**
     * 对当前Int32Array的所有元素执行fn(arr[i])，创建新的Int32Array。
     *
     * @param { function } fn - 对当前Int32Array中每个元素应用的函数。
     * @returns { Int32Array } - 对当前Int32Array中每个元素应用fn后得到的新Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int32Array) => double): Int32Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int32Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Int32Array创建新的Int32Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Int32Array } - 新的Int32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int32Array) => boolean): Int32Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int32Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int32Array) => boolean): int;

    /**
     * 查找Int32Array中最后一个满足该条件的元素。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int32Array) => boolean): int;

    /**
     * 查找Int32Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int32Array) => boolean): int;

    /**
     * 按升序对Int32Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int32Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { Int32Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int32Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * 占用的字节数。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * 字符串\"Int32Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int32Array';
}

/**
 * BigInt64Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigInt64Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * 创建空的BigInt64Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建BigInt64Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建BigInt64Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建BigInt64Array的副本。
     *
     * @param { BigInt64Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: BigInt64Array);

    /**
     * 根据FixedArray<int>创建BigInt64Array。
     *
     * @param { FixedArray<int> } doubles - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建BigInt64Array。
     *
     * @param { FixedArray<double> } doubles - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<double>);

    /**
     * 根据FixedArray<bigint>创建BigInt64Array。
     *
     * @param { FixedArray<bigint> } doubles - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<bigint>);

    /**
     * 根据通过Iterable<double>接口访问的数据创建BigInt64Array。
     *
     * @param { Iterable<BigInt> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<BigInt>);

    /**
     * 根据buf和byteOffset创建BigInt64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建BigInt64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建BigInt64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建BigInt64Array中long类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建BigInt64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建BigInt64Array中long类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建BigInt64Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：可以为任意整数。
     * @param { long } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: long): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     * @param { BigInt } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: BigInt): void;

    /**
     * BigInt64Array中存储的long元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的BigInt实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { BigInt } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): BigInt;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { BigInt | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): BigInt | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { BigInt64Array } 修改后的BigInt64Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): BigInt64Array;

    /**
     * 将BigInt64Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { BigInt64Array } 修改后的BigInt64Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): BigInt64Array;

    /**
     * 返回由BigInt64Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, BigInt]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, BigInt]>;

    /**
     * 使用指定值填充BigInt64Array。
     *
     * @param { long } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): this;

    /**
     * 使用指定值填充BigInt64Array。
     *
     * @param { BigInt } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { long } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { BigInt } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: BigInt): void;

    /**
     * 将arr中的所有元素复制到当前BigInt64Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前BigInt64Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前BigInt64Array。
     *
     * @param { FixedArray<BigInt> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前BigInt64Array。
     *
     * @param { FixedArray<BigInt> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前BigInt64Array。
     *
     * @param { BigInt64Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigInt64Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前BigInt64Array。
     *
     * @param { BigInt64Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：可以为任意整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigInt64Array, offset: int): void;

    
    /**
    * 将ArrayLike对象中的元素复制到BigInt64Array。
    *
    * @param { ArrayLike<BigInt> } array - 包含待复制元素的ArrayLike对象。
    * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
    *     偏移量，默认值为0。
    *     <br>取值约束：应为整数。
    * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
    * @syscap SystemCapability.Utils.Lang
    * @stagemodelonly
    * @since 26.0.0 staticonly
    */
     public set(array: ArrayLike<BigInt>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): BigInt64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<long> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): BigInt64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<bigint> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<bigint>): BigInt64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): BigInt64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): BigInt64Array;

    /**
     * 根据FixedArray<BigInt>对象创建数组。
     *
     * @param { FixedArray<BigInt> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<BigInt>): BigInt64Array;

    /**
     * 根据std.core.Set<BigInt>类型的集合创建数组。
     *
     * @param { Set<BigInt> } set - 待转换为数组的Set对象。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<BigInt>): BigInt64Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { BigInt64Array } arr - 待转换为新数组的数组。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: BigInt64Array): BigInt64Array;

    /**
     * 根据std.core.Array<BigInt>对象创建数组。
     *
     * @param { Array<BigInt> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<BigInt>): BigInt64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): BigInt64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => BigInt): BigInt64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<BigInt> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<BigInt>, mapfn?: (v: BigInt, k: double) => BigInt): BigInt64Array;

    /**
     * 判断BigInt64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于BigInt64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * 判断BigInt64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于BigInt64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * 判断BigInt64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { BigInt } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于BigInt64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: BigInt, fromIndex?: int): boolean;

    /**
     * 返回指定值在BigInt64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在BigInt64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在BigInt64Array中首次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *      默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: BigInt, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回BigInt64Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在BigInt64Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在BigInt64Array中最后一次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt): int;

    /**
     * 返回指定值在BigInt64Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在BigInt64Array中最后一次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt, fromIndex: int | undefined): int;

    /**
     * 基于当前BigInt64Array的反转数据创建新的BigInt64Array。
     *
     * @returns { BigInt64Array } - 基于当前BigInt64Array的反转数据构造的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): BigInt64Array;

    /**
     * 使用[begin, this.length)区间截取当前BigInt64Array。
     *
     * @param { int } begin - 截取的起始索引。
     * @returns { BigInt64Array } - 包含当前BigInt64Array[begin, this.length)区间元素的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): BigInt64Array;

    /**
     * 使用[begin, end)区间截取当前BigInt64Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { BigInt64Array } - 包含当前BigInt64Array[begin;end)区间元素的新BigInt64Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): BigInt64Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新BigInt64Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { BigInt64Array } - 与当前数组共享同一底层ArrayBuffer的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigInt64Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新BigInt64Array，原数组不会被修改。
     *
     * @returns { BigInt64Array } - 元素顺序反转后的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): BigInt64Array;

    /**
     * 返回元素按升序排序后的新BigInt64Array，原数组不会被修改。
     *
     * @returns { BigInt64Array } - 元素按升序排序后的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): BigInt64Array;

    /**
     * 返回以逗号分隔的BigInt64Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 按升序返回遍历BigInt64Array各元素值的迭代器。
     *
     * @returns { IterableIterator<BigInt> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<BigInt>;

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<BigInt> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<BigInt>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新BigInt64Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：可以为任意整数。
     * @param { long } value - 待设置的值。
     * @returns { BigInt64Array } - 将index处元素替换为value后的新BigInt64Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): BigInt64Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新BigInt64Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：可以为任意整数。
     * @param { BigInt } value - 待设置的值。
     * @returns { BigInt64Array } - 将index处元素替换为value后的新BigInt64Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: BigInt): BigInt64Array;

    /**
     * 查找BigInt64Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { BigInt } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt) => boolean): BigInt;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *     默认按数值升序排序。
     * @returns { this } - 排序后的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: BigInt, b: BigInt) => int | BigInt): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: BigInt, index: int, array: BigInt64Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = BigInt>( callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => U, initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { BigInt } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当BigInt64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => BigInt): BigInt;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = BigInt>(
        callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int, array: BigInt64Array) => U,
        initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { BigInt } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当BigInt64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => BigInt): BigInt;

    /**
     * 对当前BigInt64Array的所有元素执行fn(arr[i])，创建新的BigInt64Array。
     *
     * @param { function } fn - 对当前BigInt64Array中每个元素应用的函数。
     * @returns { BigInt64Array } - 对当前BigInt64Array中每个元素应用fn后得到的新BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: BigInt, index: int, array: BigInt64Array) => BigInt): BigInt64Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: BigInt, index: int, array: BigInt64Array) => boolean): boolean;

    /**
     * 根据条件fn从当前BigInt64Array创建新的BigInt64Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { BigInt64Array } - 新的BigInt64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): BigInt64Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { BigInt | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: BigInt, index: int, obj: BigInt64Array) => boolean): BigInt | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: BigInt, index: int, obj: BigInt64Array) => boolean): int;

    /**
     * 查找BigInt64Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { BigInt } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): BigInt;

    /**
     * 查找BigInt64Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): int;

    /**
     * 按升序对BigInt64Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: BigInt, index: int, array: BigInt64Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { BigInt64Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): BigInt64Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：可以为任意整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * 占用的字节数。
     * 取值约束：可以为任意整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * 字符串\"BigInt64Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'BigInt64Array';
}

/**
 * Float32Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float32Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * 创建空的Float32Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Float32Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Float32Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建Float32Array的副本。
     *
     * @param { Float32Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Float32Array);

    /**
     * 根据FixedArray<int>创建Float32Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Float32Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Float32Array。
     *
     * @param { Iterable<double> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据buf和byteOffset创建Float32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Float32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建Float32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Float32Array中float类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建Float32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Float32Array中float类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建Float32Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { float } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: float): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Float32Array中存储的float元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Float32Array } 修改后的Float32Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float32Array;

    /**
     * 将Float32Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Float32Array } 修改后的Float32Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Float32Array;

    /**
     * 返回由Float32Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Float32Array。
     *
     * @param { float } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: float, start?: int, end?: int): this;

    /**
     * 使用指定值填充Float32Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { float } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: float): void;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 将arr中的所有元素复制到当前Float32Array。
     *
     * @param { FixedArray<float> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<float>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Float32Array。
     *
     * @param { FixedArray<float> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<float>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Float32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Float32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前Float32Array。
     *
     * @param { Float32Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float32Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前Float32Array。
     *
     * @param { Float32Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float32Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Float32Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Float32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<float> } items - 待包含在新数组对象中的一组元素。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<float>): Float32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Float32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Float32Array;

    /**
     * 根据FixedArray<double>对象创建数组。
     *
     * @param { FixedArray<double> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<double>): Float32Array;

    /**
     * 根据std.core.Set<double>类型的集合创建数组。
     *
     * @param { Set<double> } set - 待转换为数组的Set对象。
     * @returns { Float32Array } - 新的Float32Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<double>): Float32Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Float32Array } arr - 待转换为新数组的数组。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Float32Array): Float32Array;

    /**
     * 根据std.core.Array<double>对象创建数组。
     *
     * @param { Array<double> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<double>): Float32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Float32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Float32Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Float32Array;

    /**
     * 判断Float32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { float } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Float32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: float, fromIndex: int): boolean;

    /**
     * 判断Float32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { float } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于Float32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: float): boolean;

    /**
     * 判断Float32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Float32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Float32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Float32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Float32Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Float32Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Float32Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Float32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Float32Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Float32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Float32Array的反转数据创建新的Float32Array。
     *
     * @returns { Float32Array } - 基于当前Float32Array的反转数据构造的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Float32Array;

    /**
     * 使用[begin, this.length)区间截取当前Float32Array。
     *
     * @param { int } begin - 截取的起始索引。
     * @returns { Float32Array } - 包含当前Float32Array[begin, this.length)区间元素的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float32Array;

    /**
     * 使用[begin, end)区间截取当前Float32Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Float32Array } - 包含当前Float32Array[begin;end)区间元素的新Float32Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float32Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Float32Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Float32Array } - 与当前数组共享同一底层ArrayBuffer的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float32Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新Float32Array，原数组不会被修改。
     *
     * @returns { Float32Array } - 元素顺序反转后的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Float32Array;

    /**
     * 返回元素按升序排序后的新Float32Array，原数组不会被修改。
     *
     * @returns { Float32Array } - 元素按升序排序后的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Float32Array;

    /**
     * 返回以逗号分隔的Float32Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 按升序返回遍历Float32Array各元素值的迭代器。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterator接口实现。
     *
     * @returns { IterableIterator<double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Float32Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { float } value - 待设置的值。
     * @returns { Float32Array } - 将index处元素替换为value后的新Float32Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: float): Float32Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Float32Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Float32Array } - 将index处元素替换为value后的新Float32Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Float32Array;

    /**
     * 查找Float32Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *      默认按数值升序排序。
     * @returns { this } - 排序后的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Float32Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Float32Array) => U, initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Float32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float32Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>( callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Float32Array) => U, initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Float32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float32Array) => double): double;

    /**
     * 对当前Float32Array的所有元素执行fn(arr[i])，创建新的Float32Array。
     *
     * @param { function } fn - 对当前Float32Array中每个元素应用的函数。
     * @returns { Float32Array } - 对当前Float32Array中每个元素应用fn后得到的新Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Float32Array) => double): Float32Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Float32Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Float32Array创建新的Float32Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Float32Array } - 新的Float32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Float32Array) => boolean): Float32Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Float32Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Float32Array) => boolean): int;

    /**
     * 查找Float32Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { float } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Float32Array) => boolean): float;

    /**
     * 查找Float32Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Float32Array) => boolean): int;

    /**
     * 按升序对Float32Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Float32Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { Float32Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Float32Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * 占用的字节数。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * 字符串\"Float32Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Float32Array';
}

/**
 * Float64Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float64Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * 创建空的Float64Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Float64Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Float64Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 创建Float64Array的副本。
     *
     * @param { Float64Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Float64Array);

    /**
     * 根据FixedArray<int>创建Float64Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Float64Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Float64Array。
     *
     * @param { Iterable<double> } elements - 可迭代对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据buf和byteOffset创建Float64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Float64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据data、byteOffset和length创建Float64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Float64Array中double类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * 根据data、byteOffset和length创建Float64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Float64Array中double类型元素的数量。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf创建Float64Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Float64Array中存储的double元素数量。
     *
     * @returns { int } - 元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * 返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     * @returns { double | undefined } - index处的原始数值；如果索引越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Float64Array } 修改后的Float64Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float64Array;

    /**
     * 将Float64Array从头到尾的内部元素复制到targetPos。
     * 参数归一化规则参见
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Float64Array } 修改后的Float64Array实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Float64Array;

    /**
     * 返回由Float64Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Float64Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { this } - 修改后的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * 将val赋值为insertPos处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 将arr中的所有元素复制到当前Float64Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Float64Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将array中的所有元素复制到当前Float64Array。
     *
     * @param { Float64Array } array - 复制数据的源数组。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float64Array): void;

    /**
     * 从offset开始，将arr中的所有元素复制到当前Float64Array。
     *
     * @param { Float64Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float64Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Float64Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } - 当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Float64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Float64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Float64Array;

    /**
     * 根据FixedArray<double>对象创建数组。
     *
     * @param { FixedArray<double> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<double>): Float64Array;

    /**
     * 根据std.core.Set<double>类型的集合创建数组。
     *
     * @param { Set<double> } set - 待转换为数组的Set对象。
     * @returns { Float64Array } - 新的Float64Array。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<double>): Float64Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Float64Array } arr - 待转换为新数组的数组。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Float64Array): Float64Array;

    /**
     * 根据std.core.Array<double>对象创建数组。
     *
     * @param { Array<double> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<double>): Float64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Float64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Float64Array;

    /**
     * 根据类数组对象或可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的类数组对象或可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Float64Array;

    /**
     * 判断Float64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Float64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Float64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Float64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Float64Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     *     <br>取值约束：应为整数。
     * @returns { int } - 找到时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * 使用指定的分隔字符串连接数组中的所有元素。
     *
     * @param { string } [separator] - 用于在结果字符串中分隔数组相邻元素的
     *     字符串。如果不传入该参数，则元素之间以逗号分隔。
     * @returns { string } - 使用指定分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Float64Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Float64Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Float64Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Float64Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Float64Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     默认值为数组长度减1。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Float64Array的反转数据创建新的Float64Array。
     *
     * @returns { Float64Array } - 基于当前Float64Array的反转数据构造的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Float64Array;

    /**
     * 使用[begin, this.length)区间截取当前Float64Array。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { Float64Array } - 包含当前Float64Array[begin, this.length)区间元素的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float64Array;

    /**
     * 使用[begin, end)区间截取当前Float64Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Float64Array } - 包含当前Float64Array[begin;end)区间元素的新Float64Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float64Array;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Float64Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Float64Array } - 与当前数组共享同一底层ArrayBuffer的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float64Array;

    /**
     * 将当前对象转换为符合区域设置的字符串表示。
     *
     * @param { Intl.LocalesArgument } [locales] - 包含BCP 47语言标签的字符串，或由此类
     *     字符串组成的数组。
     * @param { object } [options] - 包含Intl.NumberFormat选项的部分或
     *     全部属性的对象。
     * @returns { string } 按区域设置转换后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * 返回元素顺序反转后的新Float64Array，原数组不会被修改。
     *
     * @returns { Float64Array } - 元素顺序反转后的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Float64Array;

    /**
     * 返回元素按升序排序后的新Float64Array，原数组不会被修改。
     *
     * @returns { Float64Array } - 元素按升序排序后的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Float64Array;

    /**
     * 返回以逗号分隔的Float64Array元素字符串表示。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 按升序返回遍历Float64Array各元素值的迭代器。
     *
     * @returns { IterableIterator<Double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<Double>;

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<Double> } - 遍历所有元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<Double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Float64Array。
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Float64Array } - 将index处元素替换为value后的新Float64Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Float64Array;

    /**
     * 查找Float64Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * 原地排序。
     *
     * @param { function } [compareFn] - 用于确定元素顺序的比较函数。
     *     当第一个参数小于第二个参数时compareFn返回负值，
     *     相等时返回0，否则返回正值。
     *     默认按数值升序排序。
     * @returns { this } - 排序后的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 判断数组中是否存在使指定回调函数返回true的元素。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     some方法会对数组中的每个元素调用predicate函数，
     *     直到predicate返回true，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回true，否则返回false；
     *     此时立即返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Float64Array) => boolean): boolean;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Float64Array) => U,
        initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Float64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float64Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Float64Array) => U,
        initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } - 当Float64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float64Array) => double): double;

    /**
     * 对当前Float64Array的所有元素执行fn(arr[i])，创建新的Float64Array。
     *
     * @param { function } fn - 对当前Float64Array中每个元素应用的函数。
     * @returns { Float64Array } - 对当前Float64Array中每个元素应用fn后得到的新Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Float64Array) => double): Float64Array;

    /**
     * 判断指定的回调函数是否对数组中的所有元素都返回true。
     *
     * @param { function } predicate - 最多接受三个参数的函数。
     *     every方法会对数组中的每个元素调用predicate函数，直到predicate
     *     返回false，或遍历完整个数组。
     * @returns { boolean } - 除非predicate对某个数组元素返回false，否则返回true；
     *     此时立即返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Float64Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Float64Array创建新的Float64Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Float64Array } - 新的Float64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Float64Array) => boolean): Float64Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，若不存在则返回undefined。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Float64Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，若不存在则返回-1。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Float64Array) => boolean): int;

    /**
     * 查找Float64Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { double } - 最后一个满足fn的元素。
     * @throws { Error } - 当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Float64Array) => boolean): double;

    /**
     * 查找Float64Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Float64Array) => boolean): int;

    /**
     * 按升序对Float64Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Float64Array) => void): void;

    /**
     * 返回对象本身。
     *
     * @returns { Float64Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Float64Array;

    /**
     * 底层ArrayBuffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 底层ArrayBuffer中的字节偏移量。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * 占用的字节数。
     * 取值约束：应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * 字符串\"Float64Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Float64Array';

}
