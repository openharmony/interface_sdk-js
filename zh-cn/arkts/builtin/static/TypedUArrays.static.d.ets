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
 * Uint8ClampedArray类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint8ClampedArray {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1;

    /**
     * 底层Buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 创建空的Uint8ClampedArray。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 将double值截断为[0, 255]范围内的8位无符号整数。
     *
     * @param { double } val - 待转换并截断的浮点值。
     * @returns { int } - 截断后的8位无符号整数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toUint8Clamped(val: double): int;

    /**
     * 根据length创建Uint8ClampedArray。
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
     * 根据length创建Uint8ClampedArray。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } - 当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 根据FixedArray<int>创建Uint8ClampedArray。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Uint8ClampedArray。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Uint8ClampedArray。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 创建Uint8ClampedArray的副本。
     *
     * @param { Uint8ClampedArray } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint8ClampedArray);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Uint8ClampedArray。
     *
     * @param { Iterable<double> } elements - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据data、byteOffset和length创建Uint8ClampedArray。
     *
     * @param { ArrayBufferLike } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Uint8ClampedArray中int类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * 根据buf和byteOffset创建Uint8ClampedArray。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Uint8ClampedArray。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Uint8ClampedArray中int类型元素的数量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf和byteOffset创建Uint8ClampedArray。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据buf创建Uint8ClampedArray。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

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
     * 返回指定索引处的元素，支持负数索引，
     * 负数索引表示从数组末尾开始倒数。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - 该索引处的元素；如果越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 返回指定索引处的内部数值，不进行装箱。
     *
     * @param { int } i - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * 设置指定索引处的值，不进行装箱。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Uint8ClampedArray } - 修改后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8ClampedArray;

    /**
     * 将Uint8ClampedArray从头到尾的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint8ClampedArray } - 修改后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint8ClampedArray;

    /**
     * 返回由Uint8ClampedArray中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 数组中每个条目的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Uint8ClampedArray。
     *
     * @param { int } value - 新的值。
     *     <br>取值约束：应为整数。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { Uint8ClampedArray } - 修改后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint8ClampedArray;

    /**
     * 使用指定值填充Uint8ClampedArray。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { Uint8ClampedArray } - 修改后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint8ClampedArray;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * 将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { Uint8ClampedArray } array - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8ClampedArray): void;

    /**
     * 将arr中的所有元素复制到当前Uint8ClampedArray。
     *
     * @param { Uint8ClampedArray } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8ClampedArray, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Uint8ClampedArray。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<short> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Uint8ClampedArray;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint8ClampedArray;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint8ClampedArray;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint8ClampedArray;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint8ClampedArray;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint8ClampedArray;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Uint8ClampedArray } arr - 待转换为新数组的数组。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8ClampedArray): Uint8ClampedArray;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint8ClampedArray;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<double> } arr - 待转换为数组的类数组对象。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint8ClampedArray;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Uint8ClampedArray;

    /**
     * 根据可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Uint8ClampedArray;

    /**
     * 判断Uint8ClampedArray中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素。
     *     <br>取值约束：应为整数。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8ClampedArray中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * 判断Uint8ClampedArray中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素，查找从索引0处开始。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8ClampedArray中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * 判断Uint8ClampedArray中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找的位置，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8ClampedArray中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Uint8ClampedArray中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint8ClampedArray中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Uint8ClampedArray中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
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
     * @returns { string } - 使用分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Uint8ClampedArray中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历数组索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Uint8ClampedArray中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint8ClampedArray中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Uint8ClampedArray中最后一次出现的索引。
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
     * 返回指定值在Uint8ClampedArray中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 使用[begin, end]区间截取当前Uint8ClampedArray。
     *
     * @param { int } [begin] start - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Uint8ClampedArray } - 包含当前Uint8ClampedArray[begin;end)区间元素的新Uint8ClampedArray，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8ClampedArray;

    /**
     * 使用[begin, this.lengthInt]区间截取当前Uint8ClampedArray。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint8ClampedArray } - 包含当前
     *     Uint8ClampedArray[begin, this.lengthInt]区间元素的新Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint8ClampedArray;

    /**
     * 原地反转Uint8ClampedArray中的元素，并返回修改后的数组。
     *
     * @returns { Uint8ClampedArray } - 反转后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint8ClampedArray;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Uint8ClampedArray。
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
     * @returns { this } - 排序后的Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 创建与当前数组共享同一底层Buffer的Uint8ClampedArray。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Uint8ClampedArray } - 与当前数组共享同一底层Buffer的新Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8ClampedArray;

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
     * 返回元素顺序反转后的新Uint8ClampedArray。
     * 原数组不会被修改。
     *
     * @returns { Uint8ClampedArray } - 元素反转后的新Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint8ClampedArray;

    /**
     * 返回元素按升序排序后的新Uint8ClampedArray。
     * 原数组不会被修改。
     *
     * @returns { Uint8ClampedArray } - 排序后的新Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint8ClampedArray;

    /**
     * 返回以逗号分隔的Uint8ClampedArray元素字符串。
     *
     * @returns { string } - 以逗号分隔数组元素所形成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回遍历Uint8ClampedArray各元素值的迭代器。
     *
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Uint8ClampedArray，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - 待设置的值。
     *     <br>取值约束：应为整数。
     * @returns { Uint8ClampedArray } - 将index处元素替换后的新Uint8ClampedArray。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint8ClampedArray;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Uint8ClampedArray，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Uint8ClampedArray } - 将index处元素替换后的新Uint8ClampedArray。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint8ClampedArray;

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
    public some(predicate: (element: double, index: int, array: Uint8ClampedArray) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8ClampedArray) => U,
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
     * @throws { TypeError } -  当Uint8ClampedArray的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8ClampedArray) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8ClampedArray) => U,
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
     * @throws { TypeError } -  当Uint8ClampedArray的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8ClampedArray) => double): double;

    /**
     * 对当前Uint8ClampedArray的所有元素执行fn(arr[i])，创建新的Uint8ClampedArray。
     *
     * @param { function } fn - 对当前Uint8ClampedArray中每个元素应用的函数。
     * @returns { Uint8ClampedArray } - 新的Uint8ClampedArray，
     *     其中每个元素均由当前Uint8ClampedArray的元素应用fn后得到。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint8ClampedArray) => double): Uint8ClampedArray;

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
    public every(predicate: (element: double, index: int, array: Uint8ClampedArray) => boolean): boolean;

    /**
     * 创建仅包含通过给定测试的元素的新Uint8ClampedArray。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     保留该元素时应返回true，丢弃时返回false。
     * @returns { Uint8ClampedArray } - 由通过测试的元素组成的新Uint8ClampedArray。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): Uint8ClampedArray;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined } - 查找到的元素；如果没有元素匹配，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint8ClampedArray) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint8ClampedArray) => boolean): int;

    /**
     * 返回Uint8ClampedArray中最后一个满足给定predicate的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { double } - 最后一个满足predicate的元素。
     * @throws { Error } -  当没有元素满足predicate时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): double;

    /**
     * 返回Uint8ClampedArray中最后一个满足给定predicate的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足predicate的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): int;

    /**
     * 按升序对Uint8ClampedArray中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint8ClampedArray) => void): void;

    /**
     * 返回Uint8ClampedArray的原始值，即该数组对象本身。
     *
     * @returns { Uint8ClampedArray } - 该Uint8ClampedArray对象本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint8ClampedArray;

    /**
     * 底层Buffer中的字节偏移量。
     *
     * @returns { int } - 相对于底层ArrayBuffer起始位置的字节偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 占用的字节数。
     *
     * @returns { int } - 该Uint8ClampedArray的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * Uint8ClampedArray中存储的元素数量。
     *
     * @returns { int } - 该Uint8ClampedArray中的元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 字符串\"Uint8ClampedArray\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint8ClampedArray';
}

/**
 * Uint8Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint8Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1;

    /**
     * 底层Buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 创建空的Uint8Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Uint8Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Uint8Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 根据FixedArray<int>创建Uint8Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Uint8Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Uint8Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 创建Uint8Array的副本。
     *
     * @param { Uint8Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint8Array);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Uint8Array。
     *
     * @param { Iterable<double> } elements - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据data、byteOffset和length创建Uint8Array。
     *
     * @param { ArrayBufferLike } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Uint8Array中int类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * 根据buf和byteOffset创建Uint8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Uint8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Uint8Array中int类型元素的数量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf和byteOffset创建Uint8Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据buf创建Uint8Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterator接口实现。
     *
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 当索引合法时，返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - 该索引处的元素；如果越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } i - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
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
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Uint8Array } - 修改后的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8Array;

    /**
     * 将Uint8Array从头到尾的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint8Array } - 修改后的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint8Array;

    /**
     * 返回由Uint8Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 遍历每个元素[index, value]对的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Uint8Array。
     *
     * @param { int } value - 新的值。
     *     <br>取值约束：应为整数。
     * @param { int } [start] - 开始填充的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { Uint8Array } - 修改后的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint8Array;

    /**
     * 使用指定值填充Uint8Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { Uint8Array } - 修改后的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint8Array;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * 将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { Uint8Array } array - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8Array): void;

    /**
     * 将arr中的所有元素复制到当前Uint8Array。
     *
     * @param { Uint8Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Uint8Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<short> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Uint8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint8Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint8Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint8Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint8Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Uint8Array } arr - 待转换为新数组的数组。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8Array): Uint8Array;

    /**
     * 根据除符号性外类型相同的数组创建数组。
     *
     * @param { Int8Array } arr - 待转换为新数组的数组。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int8Array): Uint8Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint8Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<double> } arr - 待转换为数组的类数组对象。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint8Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Uint8Array;

    /**
     * 根据可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     * @returns { Uint8Array } - 新的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Uint8Array;

    /**
     * 判断Uint8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素。
     *     <br>取值约束：应为整数。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * 判断Uint8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素，查找从索引0处开始。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * 判断Uint8Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找searchElement的位置。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint8Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Uint8Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint8Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Uint8Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     如果不传入fromIndex，则从索引0开始查找。
     *     <br>取值约束：应为整数。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
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
     * @returns { string } - 使用分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Uint8Array中键的列表。
     *
     * @returns { IterableIterator<int> } - 遍历数组索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Uint8Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint8Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Uint8Array中最后一次出现的索引。
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
     * 返回指定值在Uint8Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Uint8Array的反转数据创建新的Uint8Array。
     *
     * @returns { Uint8Array } - 元素顺序反转后的新Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint8Array;

    /**
     * 使用[begin, end]区间截取当前Uint8Array。
     *
     * @param { int } [begin] start - 截取的起始索引。
     * @param { int } [end] - 截取的结束索引。
     * @returns { Uint8Array } - 包含当前Uint8Array[begin;end)区间元素的新Uint8Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8Array;

    /**
     * 使用[begin, this.lengthInt]区间截取当前Uint8Array。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint8Array } - 包含当前
     *     Uint8Array[begin, this.lengthInt]区间元素的新Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint8Array;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Uint8Array。
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
     * @returns { this } - 排序后的Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 创建与当前数组共享同一底层Buffer的Uint8Array。
     *
     * @param { int } [begin] - 起始索引（包含）。
     * @param { int } [end] - 结束索引（不包含）。
     * @returns { Uint8Array } - 与当前数组共享同一底层Buffer的新Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8Array;

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
     * 创建反转后的副本。
     *
     * @returns { Uint8Array } - 反转后的副本。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint8Array;

    /**
     * 返回元素按升序排序后的新Uint8Array。
     * 原数组不会被修改。
     *
     * @returns { Uint8Array } - 排序后的新Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint8Array;

    /**
     * 返回该Uint8Array的字符串表示。
     *
     * @returns { string } - 该Uint8Array的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回数组值的迭代器。
     *
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * 创建将index处的值替换后的副本。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - 待设置的值。
     *     <br>取值约束：应为整数。
     * @returns { Uint8Array } - 将index处元素替换后的新Uint8Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint8Array;

    /**
     * 创建将index处的值替换后的副本。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Uint8Array } - 将index处的值替换后的Uint8Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint8Array;

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
    public some(predicate: (element: double, index: int, array: Uint8Array) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8Array) => U,
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
     * @throws { TypeError } -  当Uint8Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(callbackfn: (previousValue: U, currentValue: double,
        currentIndex: int, array: Uint8Array) => U, initialValue: U): U;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的最后一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } -  当Uint8Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8Array) => double): double;

    /**
     * 对当前Uint8Array的所有元素执行fn(arr[i])，创建新的Uint8Array。
     *
     * @param { function } fn - 对当前Uint8Array中每个元素应用的函数。
     * @returns { Uint8Array } - 新的Uint8Array，其中每个元素都是回调函数的返回结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint8Array) => number): Uint8Array;

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
    public every(predicate: (element: double, index: int, array: Uint8Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Uint8Array创建新的Uint8Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Uint8Array } - 由通过测试的元素组成的新Uint8Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint8Array) => boolean): Uint8Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined } - 查找到的元素；如果没有元素匹配，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint8Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint8Array) => boolean): int;

    /**
     * 查找Uint8Array中最后一个满足该条件的元素。
     *
     * @param { function } fn - 判断条件。
     * @returns { double } - 最后一个满足fn的元素。
     * @throws { Error } -  当找不到该元素时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint8Array) => boolean): double;

    /**
     * 查找Uint8Array中最后一个满足该条件的元素的索引。
     *
     * @param { function } fn - 判断条件。
     * @returns { int } - 最后一个满足fn的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint8Array) => boolean): int;

    /**
     * 对Uint8Array中的每个元素执行指定的操作。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint8Array) => void): void;

    /**
     * 返回Uint8Array的原始值，即该数组对象本身。
     *
     * @returns { Uint8Array } - 该Uint8Array对象本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint8Array;

    /**
     * 底层Buffer中的字节偏移量。
     *
     * @returns { int } - 相对于底层ArrayBuffer起始位置的字节偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 占用的字节数。
     *
     * @returns { int } - 该Uint8Array的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * Uint8Array中存储的元素数量。
     *
     * @returns { int } - 该Uint8Array中的元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 字符串\"Uint8Array\"。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint8Array';
}

/**
 * Uint16Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint16Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 2;

    /**
     * 底层Buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 创建空的Uint16Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Uint16Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Uint16Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 根据FixedArray<int>创建Uint16Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Uint16Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Uint16Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 创建Uint16Array的副本。
     *
     * @param { Uint16Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint16Array);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Uint16Array。
     *
     * @param { Iterable<double> } elements - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据data、byteOffset和length创建Uint16Array。
     *
     * @param { ArrayBufferLike } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Uint16Array中int类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * 根据buf和byteOffset创建Uint16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Uint16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Uint16Array中int类型元素的数量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf和byteOffset创建Uint16Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据buf创建Uint16Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterator接口实现。
     *
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 当索引合法时，返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - 该索引处的元素；如果越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } i - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
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
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     * @returns { Uint16Array } - 修改后的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint16Array;

    /**
     * 将Uint16Array从头到尾的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint16Array } - 修改后的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint16Array;

    /**
     * 返回由Uint16Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 遍历每个元素[index, value]对的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Uint16Array。
     *
     * @param { int } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { Uint16Array } - 修改后的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint16Array;

    /**
     * 使用指定值填充Uint16Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { Uint16Array } - 修改后的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint16Array;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { FixedArray<int> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * 将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { Uint16Array } array - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint16Array): void;

    /**
     * 将arr中的所有元素复制到当前Uint16Array。
     *
     * @param { Uint16Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint16Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Uint16Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint16Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint16Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint16Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint16Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint16Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Uint16Array } arr - 待转换为新数组的数组。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint16Array): Uint16Array;

    /**
     * 根据除符号性外类型相同的数组创建数组。
     *
     * @param { Int16Array } arr - 待转换为新数组的数组。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int16Array): Uint16Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint16Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<double> } arr - 待转换为数组的类数组对象。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint16Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => number): Uint16Array;

    /**
     * 根据可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { Uint16Array } - 新的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => number): Uint16Array;

    /**
     * 判断Uint16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素。
     *     <br>取值约束：应为整数。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * 判断Uint16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { int } searchElement - 待查找的元素，查找从索引0处开始。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * 判断Uint16Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找的位置，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint16Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Uint16Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint16Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Uint16Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
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
     * @returns { string } - 使用分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Uint16Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历数组索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Uint16Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint16Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Uint16Array中最后一次出现的索引。
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
     * 返回指定值在Uint16Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Uint16Array的反转数据创建新的Uint16Array。
     *
     * @returns { Uint16Array } - 元素顺序反转后的新Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint16Array;

    /**
     * 使用[begin, end]区间截取当前Uint16Array。
     *
     * @param { int } [begin] start - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Uint16Array } - 包含当前Uint16Array[begin;end)区间元素的新Uint16Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint16Array;

    /**
     * 使用[begin, this.lengthInt]区间截取当前Uint16Array。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint16Array } - 包含当前
     *     Uint16Array[begin, this.lengthInt]区间元素的新Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint16Array;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Uint16Array。
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
     *     相等时返回0，否则返回正值。默认按数值升序排序。
     * @returns { this } - 排序后的Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新Uint16Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Uint16Array } - 与当前数组共享同一底层Buffer的新Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint16Array;

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
     * 返回元素顺序反转后的新Uint16Array。
     * 原数组不会被修改。
     *
     * @returns { Uint16Array } - 元素反转后的新Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint16Array;

    /**
     * 创建排序后的副本。
     *
     * @returns { Uint16Array } - 排序后的副本。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint16Array;

    /**
     * 返回以逗号分隔的Uint16Array元素字符串。
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
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Uint16Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - 待设置的值。
     *     <br>取值约束：应为整数。
     * @returns { Uint16Array } - 将index处元素替换后的新Uint16Array。
     * @throws { RangeError } - 当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint16Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Uint16Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Uint16Array } - 将index处元素替换后的新Uint16Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint16Array;

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
    public some(predicate: (element: double, index: int, array: Uint16Array) => boolean): boolean;

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
    public reduce<U = double>( callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Uint16Array) => U, initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { double } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } -  当Uint16Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint16Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint16Array) => U,
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
     * @throws { TypeError } -  当Uint16Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint16Array) => double): double;

    /**
     * 对当前Uint16Array的所有元素执行fn(arr[i])，创建新的Uint16Array。
     *
     * @param { function } fn - 对当前Uint16Array中每个元素应用的函数。
     * @returns { Uint16Array } - 新的Uint16Array，其中每个元素都是回调函数的返回结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint16Array) => double): Uint16Array;

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
    public every(predicate: (element: double, index: int, array: Uint16Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Uint16Array创建新的Uint16Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Uint16Array } - 由通过测试的元素组成的新Uint16Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint16Array) => boolean): Uint16Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined } - 查找到的元素；如果没有元素匹配，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint16Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint16Array) => boolean): int;

    /**
     * 返回Uint16Array中最后一个满足给定predicate的元素。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { double } - 最后一个满足predicate的元素。
     * @throws { Error } -  当没有元素满足predicate时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint16Array) => boolean): double;

    /**
     * 返回Uint16Array中最后一个满足给定predicate的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足predicate的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint16Array) => boolean): int;

    /**
     * 按升序对Uint16Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint16Array) => void): void;

    /**
     * 返回Uint16Array的原始值，即该数组对象本身。
     *
     * @returns { Uint16Array } - 该Uint16Array对象本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint16Array;

    /**
     * 底层Buffer中的字节偏移量。
     *
     * @returns { int } - 相对于底层ArrayBuffer起始位置的字节偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 占用的字节数。
     *
     * @returns { int } - 该Uint16Array的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * Uint16Array中存储的元素数量。
     *
     * @returns { int } - 该Uint16Array中的元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 字符串\"Uint16Array\"，表示该类型化数组的类型名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint16Array';
}

/**
 * Uint32Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint32Array {
    /**
     * 每个元素占用的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * 底层Buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 创建空的Uint32Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建Uint32Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建Uint32Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 根据FixedArray<int>创建Uint32Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建Uint32Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据Array<int>创建Uint32Array。
     *
     * @param { Array<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * 根据另一个Uint32Array初始化并创建新的Uint32Array。
     *
     * @param { Uint32Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint32Array);

    /**
     * 根据通过Iterable<double>接口访问的数据创建Uint32Array。
     *
     * @param { Iterable<double> } elements - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * 根据data、byteOffset和length创建Uint32Array。
     *
     * @param { ArrayBufferLike } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建Uint32Array中long类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * 根据buf和byteOffset创建Uint32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建Uint32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建Uint32Array中long类型元素的数量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf和byteOffset创建Uint32Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据buf创建Uint32Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<double> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * 当索引合法时，返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double | undefined } - 该索引处的元素；如果越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * 返回指定索引处的number实例。
     *
     * @param { int } i - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { double } - index处的原始数值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
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
     * @param { long } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: long): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * 将startPos到endPos之间的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     * @param { int } start - 开始复制的索引。
     * @param { int } [end] - 结束复制的索引（不包含）。
     *     默认值为数组长度。
     * @returns { Uint32Array } - 修改后的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint32Array;

    /**
     * 将Uint32Array从头到尾的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint32Array } - 修改后的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint32Array;

    /**
     * 返回由Uint32Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, double]> } - 遍历每个元素[index, value]对的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * 使用指定值填充Uint32Array。
     *
     * @param { long } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     * @returns { Uint32Array } - 修改后的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): Uint32Array;

    /**
     * 使用指定值填充Uint32Array。
     *
     * @param { double } value - 新的值。
     * @param { int } [start] - 开始填充的索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { Uint32Array } - 修改后的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint32Array;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { long } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * 将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { FixedArray<double> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * 将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { Uint32Array } array - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint32Array): void;

    /**
     * 将arr中的所有元素复制到当前Uint32Array。
     *
     * @param { Uint32Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint32Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到Uint32Array。
     *
     * @param { ArrayLike<double> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<long> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): Uint32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint32Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint32Array;

    /**
     * 根据FixedArray<int>对象创建数组。
     *
     * @param { FixedArray<int> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint32Array;

    /**
     * 根据std.core.Set<int>类型的集合创建数组。
     *
     * @param { Set<int> } set - 待转换为数组的Set对象。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint32Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { Uint32Array } arr - 待转换为新数组的数组。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint32Array): Uint32Array;

    /**
     * 根据长度相同但为有符号类型的数组创建新的Uint32Array。
     *
     * @param { Int32Array } arr - 待转换为新数组的数组。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int32Array): Uint32Array;

    /**
     * 根据std.core.Array<int>对象创建数组。
     *
     * @param { Array<int> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint32Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<double> } arr - 待转换为数组的类数组对象。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint32Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     *    默认使用恒等函数，即原样返回该元素。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => number): Uint32Array;

    /**
     * 根据可迭代对象创建数组。
     *
     * @param { Iterable<double> } arrayLike - 待转换为数组的可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => number): Uint32Array;

    /**
     * 判断Uint32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * 判断Uint32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于Uint32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * 判断Uint32Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { double } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找的位置，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于Uint32Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * 返回指定值在Uint32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint32Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在Uint32Array中首次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引。
     *     默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
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
     * @returns { string } - 使用分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回Uint32Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历数组索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在Uint32Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在Uint32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * 返回指定值在Uint32Array中最后一次出现的索引。
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
     * 返回指定值在Uint32Array中最后一次出现的索引。
     *
     * @param { double } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * 基于当前Uint32Array的反转数据创建新的Uint32Array。
     *
     * @returns { Uint32Array } - 元素顺序反转后的新Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint32Array;

    /**
     * 使用[begin, end]区间截取当前Uint32Array。
     *
     * @param { int } [begin] start - 截取的起始索引，默认值为0。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     * @returns { Uint32Array } - 包含当前Uint32Array[begin;end)区间元素的新Uint32Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint32Array;

    /**
     * 使用[begin, this.lengthInt]区间截取当前Uint32Array。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { Uint32Array } - 包含当前
     *     Uint32Array[begin, this.lengthInt]区间元素的新Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint32Array;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的Uint32Array。
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
     * @returns { this } - 排序后的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * 创建与当前数组共享同一底层Buffer的Uint32Array。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     * @returns { Uint32Array } - 与当前数组共享同一底层Buffer的新Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint32Array;

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
     * 返回元素顺序反转后的新Uint32Array，原数组不会被修改。
     *
     * @returns { Uint32Array } - 元素反转后的新Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint32Array;

    /**
     * 返回元素按升序排序后的新Uint32Array。
     * 原数组不会被修改。
     *
     * @returns { Uint32Array } - 排序后的新Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint32Array;

    /**
     * 返回以逗号分隔的Uint32Array元素字符串。
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
     * 返回将指定索引处的元素替换为给定值后的新Uint32Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待设置的值。
     * @returns { Uint32Array } - 将index处元素替换后的新Uint32Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): Uint32Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新Uint32Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { double } value - 待设置的值。
     * @returns { Uint32Array } - 将index处元素替换后的新Uint32Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint32Array;

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
    public some(predicate: (element: double, index: int, array: Uint32Array) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint32Array) => U,
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
     * @throws { TypeError } -  当Uint32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint32Array) => double): double;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint32Array) => U,
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
     * @throws { TypeError } -  当Uint32Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint32Array) => double): double;

    /**
     * 对当前Uint32Array的所有元素执行fn(arr[i])，创建新的Uint32Array。
     *
     * @param { function } fn - 对当前Uint32Array中每个元素应用的函数。
     * @returns { Uint32Array } - 新的Uint32Array，
     *     其中每个元素均由当前Uint32Array的元素应用fn后得到。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint32Array) => double): Uint32Array;

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
    public every(predicate: (element: double, index: int, array: Uint32Array) => boolean): boolean;

    /**
     * 根据条件fn从当前Uint32Array创建新的Uint32Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { Uint32Array } - 新的Uint32Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint32Array) => boolean): Uint32Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { double | undefined } - 查找到的元素；如果没有元素匹配，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint32Array) => boolean): double | undefined;

    /**
     * 返回数组中第一个使predicate返回true的元素的索引，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，
     *     findIndex会立即返回该元素的索引；否则findIndex返回-1。
     * @returns { int } - 第一个匹配元素的索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint32Array) => boolean): int;

    /**
     * 返回Uint32Array中最后一个满足给定predicate的元素。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { double } - 最后一个满足predicate的元素。
     * @throws { Error } -  当没有元素满足predicate时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint32Array) => boolean): double;

    /**
     * 返回Uint32Array中最后一个满足给定predicate的元素的索引。
     *
     * @param { function } fn - 用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足predicate的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint32Array) => boolean): int;

    /**
     * 按升序对Uint32Array中的每个元素调用一次给定的回调函数。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint32Array) => void): void;

    /**
     * 返回Uint32Array的原始值，即该数组对象本身。
     *
     * @returns { Uint32Array } - 该Uint32Array对象本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint32Array;

    /**
     * 底层Buffer中的字节偏移量。
     *
     * @returns { int } - 相对于底层ArrayBuffer起始位置的字节偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 占用的字节数。
     *
     * @returns { int } - 该Uint32Array的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * Uint32Array中存储的元素数量。
     *
     * @returns { int } - 该Uint32Array中的元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 字符串\"Uint32Array\"。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint32Array';
}

/**
 * BigUint64Array类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigUint64Array {
    /**
    * 每个元素占用的字节数。
    *
    * @syscap SystemCapability.Utils.Lang
    * @stagemodelonly
    * @since 26.0.0 staticonly
    */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * 底层Buffer。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * 创建空的BigUint64Array。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * 根据length创建BigUint64Array。
     *
     * @param { int } length - 元素数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * 根据length创建BigUint64Array。
     *
     * @param { double } length - 元素数量。
     * @throws { RangeError } -  当长度超出缓冲区范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * 根据FixedArray<int>创建BigUint64Array。
     *
     * @param { FixedArray<int> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * 根据FixedArray<double>创建BigUint64Array。
     *
     * @param { FixedArray<double> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * 根据FixedArray<bigint>创建BigUint64Array。
     *
     * @param { FixedArray<bigint> } numbers - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<bigint>);

    /**
     * 根据另一个BigUint64Array初始化并创建新的BigUint64Array。
     *
     * @param { BigUint64Array } other - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: BigUint64Array);

    /**
     * 根据通过Iterable<Number>接口访问的数据创建BigUint64Array。
     *
     * @param { Iterable<BigInt> } elements - 初始化数据。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<BigInt>);

    /**
     * 根据data、byteOffset和length创建BigUint64Array。
     *
     * @param { ArrayBufferLike } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 新建BigUint64Array中long类型元素的数量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * 根据buf和byteOffset创建BigUint64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { int } byteOffset - 相对于buf起始位置的字节偏移量。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * 根据data、byteOffset和length创建BigUint64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double | undefined } byteOffset - 相对于buf起始位置的字节偏移量。
     * @param { double | undefined } length - 新建BigUint64Array中long类型元素的数量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * 根据buf和byteOffset创建BigUint64Array。
     *
     * @param { ArrayBuffer } buf - 初始化数据。
     * @param { double } byteOffset - 相对于buf起始位置的字节偏移量。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * 根据buf创建BigUint64Array。
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - 初始化数据。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterable接口实现。
     *
     * @returns { IterableIterator<BigInt> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<BigInt>;

    /**
     * 当索引合法时，返回指定索引处的基本类型实例。
     *
     * @param { int } index - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { BigInt | undefined } - 该索引处的元素；如果越界，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): BigInt | undefined;

    /**
     * 返回指定索引处的BigInt实例。
     *
     * @param { int } i - 待查看的索引。
     *     <br>取值约束：应为整数。
     * @returns { BigInt } - 该索引处的原始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): BigInt;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { int } val - 待设置的值。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
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
     * @param { long } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
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
     * 将startPos到endPos之间的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @param { int } start - 开始复制的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束复制的索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 修改后的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): BigUint64Array;

    /**
     * 将BigUint64Array从头到尾的内部元素复制到targetPos。
     *
     * @param { int } target - 放置所复制元素的插入索引。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 修改后的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): BigUint64Array;

    /**
     * 返回由BigUint64Array中每个条目的键值对组成的数组。
     *
     * @returns { IterableIterator<[int, BigInt]> } - 遍历每个元素[index, value]对的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, BigInt]>;

    /**
     * 使用指定值填充BigUint64Array。
     *
     * @param { long } value - 新的值。
     * @param { int } [start] - 开始填充的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 修改后的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): BigUint64Array;

    /**
     * 使用指定值填充BigUint64Array。
     *
     * @param { BigInt } value - 新的值。
     * @param { int } [start] - 开始填充的索引。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束填充的索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 修改后的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): BigUint64Array;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { long } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * 将val赋值为index处的元素。
     *
     * @param { int } insertPos - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { BigInt } val - 待设置的值。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: BigInt): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * 从insertPos开始，将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { FixedArray<BigInt> } arr - 复制数据的源数组。
     * @param { int } insertPos - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>, insertPos: int): void;

    /**
     * 将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { FixedArray<long> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * 将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { FixedArray<BigInt> } arr - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>): void;

    /**
     * 将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { BigUint64Array } array - 复制数据的源数组。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigUint64Array): void;

    /**
     * 将arr中的所有元素复制到当前BigUint64Array。
     *
     * @param { BigUint64Array } array - 复制数据的源数组。
     * @param { int } offset - 写入arr数据的起始索引。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigUint64Array, offset: int): void;

    /**
     * 将ArrayLike对象中的元素复制到BigUint64Array。
     *
     * @param { ArrayLike<BigInt> } array - 包含待复制元素的ArrayLike对象。
     * @param { int } [offset] - 可选参数，指定在目标数组中开始写入源数组值的
     *     偏移量，默认值为0。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } -  当赋值元素的数量超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<BigInt>, offset: int = 0): void;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<int> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigUint64Array } - 包含给定元素的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): BigUint64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<long> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): BigUint64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<bigint> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<bigint>): BigUint64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @param { FixedArray<double> } items - 待包含在新数组对象中的一组元素。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): BigUint64Array;

    /**
     * 根据一组元素返回新的数组。
     *
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): BigUint64Array;

    /**
     * 根据FixedArray<BigInt>对象创建数组。
     *
     * @param { FixedArray<BigInt> } arr - 待转换为数组的FixedArray类型实例。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<BigInt>): BigUint64Array;

    /**
     * 根据std.core.Set<BigInt>类型的集合创建数组。
     *
     * @param { Set<BigInt> } set - 待转换为数组的Set对象。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @throws { RangeError } -  输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<BigInt>): BigUint64Array;

    /**
     * 根据同类型的数组创建数组。
     *
     * @param { BigUint64Array } arr - 待转换为新数组的数组。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: BigUint64Array): BigUint64Array;

    /**
     * 根据std.core.Array<BigInt>对象创建数组。
     *
     * @param { Array<BigInt> } arr - 待转换为数组的std.core.Array类型实例。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<BigInt>): BigUint64Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<BigInt> } arr - 待转换为数组的类数组对象。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<BigInt>): BigUint64Array;

    /**
     * 根据类数组对象创建数组。
     *
     * @param { ArrayLike<T> } arrayLike - 待转换为数组的类数组对象。
     * @param { function } mapfn - 对数组中每个元素调用的映射函数。
     *     默认使用恒等函数，即原样返回该元素。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => BigInt): BigUint64Array;

    /**
     * 根据可迭代对象创建数组。
     *
     * @param { Iterable<BigInt> } arrayLike - 待转换为数组的可迭代对象。
     * @param { function } [mapfn] - 对数组中每个元素调用的映射函数。
     * @returns { BigUint64Array } - 新的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<BigInt>, mapfn?: (v: BigInt, k: double) => BigInt): BigUint64Array;

    /**
     * 判断BigUint64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素。
     * @param { int } fromIndex - 在该数组中开始查找searchElement的位置。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于BigUint64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * 判断BigUint64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { long } searchElement - 待查找的元素，查找从索引0处开始。
     * @returns { boolean } - 如果searchElement存在于BigUint64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * 判断BigUint64Array中是否包含指定元素，并相应地返回true或false。
     *
     * @param { BigInt } searchElement - 待查找的元素。
     * @param { int } [fromIndex] - 在该数组中开始查找的位置，默认值为0。
     *     <br>取值约束：应为整数。
     * @returns { boolean } - 如果searchElement存在于BigUint64Array中则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: BigInt, fromIndex?: int): boolean;

    /**
     * 返回指定值在BigUint64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引0处开始。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * 返回指定值在BigUint64Array中首次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值。
     * @param { int } fromIndex - 开始查找的数组索引。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * 返回指定值在BigUint64Array中首次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值。
     * @param { int } [fromIndex] - 开始查找的数组索引，默认值为0。
     * @returns { int } - 存在时返回该元素的索引，否则返回-1。
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
     * @returns { string } - 使用分隔符连接所有数组元素而成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * 返回BigUint64Array中索引的列表。
     *
     * @returns { IterableIterator<int> } - 遍历数组索引的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * 返回指定值在BigUint64Array中最后一次出现的索引。
     *
     * @param { int } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * 返回指定值在BigUint64Array中最后一次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值，查找从索引length - 1处开始。
     * @returns { int } - searchElement最靠右的索引，必须小于length；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt): int;

    /**
     * 返回指定值在BigUint64Array中最后一次出现的索引。
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
     * 返回指定值在BigUint64Array中最后一次出现的索引。
     *
     * @param { BigInt } searchElement - 待在数组中查找的值。
     * @param { int | undefined } fromIndex - 开始查找的数组索引。
     *     如果fromIndex为undefined，则从索引0处开始查找。
     * @returns { int } - searchElement最靠右的索引，必须小于或等于fromIndex；未找到时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt, fromIndex: int | undefined): int;

    /**
     * 基于当前BigUint64Array的反转数据创建新的BigUint64Array。
     *
     * @returns { BigUint64Array } - 元素顺序反转后的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): BigUint64Array;

    /**
     * 使用[begin, end]区间截取当前BigUint64Array。
     *
     * @param { int } [begin] - 截取的起始索引，默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 截取的结束索引，默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 包含当前BigUint64Array[begin;end)区间元素的新BigUint64Array，
     *     其中不包含结束索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): BigUint64Array;

    /**
     * 使用[begin, this.lengthInt]区间截取当前BigUint64Array。
     *
     * @param { int } begin - 截取的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 包含当前
     *     BigUint64Array[begin, this.lengthInt]区间元素的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): BigUint64Array;

    /**
     * 按数值升序进行原地排序。
     *
     * @returns { this } - 排序后的BigUint64Array。
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
     * @returns { this } - 排序后的BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: BigInt, b: BigInt) => int | BigInt): this;

    /**
     * 创建与当前数组共享同一底层ArrayBuffer的新BigUint64Array，
     * 可选择限定范围。
     *
     * @param { int } [begin] - 起始索引（包含），默认值为0。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 结束索引（不包含），默认值为数组长度。
     *     <br>取值约束：应为整数。
     * @returns { BigUint64Array } - 与当前数组共享同一底层ArrayBuffer的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigUint64Array;

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
     * 返回元素顺序反转后的新BigUint64Array。
     * 原数组不会被修改。
     *
     * @returns { BigUint64Array } - 元素反转后的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): BigUint64Array;

    /**
     * 返回元素按升序排序后的新BigUint64Array。
     * 原数组不会被修改。
     *
     * @returns { BigUint64Array } - 排序后的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): BigUint64Array;

    /**
     * 返回以逗号分隔的BigUint64Array元素字符串。
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
     * @returns { IterableIterator<BigInt> } - 按顺序产出每个元素的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<BigInt>;

    /**
     * 返回将指定索引处的元素替换为给定值后的新BigUint64Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待设置的值。
     * @returns { BigUint64Array } - 将index处元素替换后的新BigUint64Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): BigUint64Array;

    /**
     * 返回将指定索引处的元素替换为给定值后的新BigUint64Array，
     * 原数组不会被修改。
     *
     * @param { int } index - 待修改的索引。
     *     <br>取值约束：应为整数。
     * @param { BigInt } value - 待设置的值。
     * @returns { BigUint64Array } - 将index处元素替换后的新BigUint64Array。
     * @throws { RangeError } -  当索引超出数组范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: BigInt): BigUint64Array;

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
    public some(predicate: (element: BigInt, index: int, array: BigUint64Array) => boolean): boolean;

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
        array: BigUint64Array) => U, initialValue: U): U;

    /**
     * 对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduce方法会对数组中的每个元素调用一次callbackfn函数。
     *     首次调用callbackfn时，将数组的第一个元素值作为参数传入。
     * @returns { BigInt } - 上一次调用回调函数得到的累加结果。
     * @throws { TypeError } -  当BigUint64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigUint64Array) => BigInt): BigInt;

    /**
     * 按降序对数组中的所有元素调用指定的回调函数。
     * 回调函数的返回值即为累加结果，
     * 并作为参数传入下一次回调调用。
     *
     * @param { function } callbackfn - 最多接受四个参数的函数。
     *     reduceRight方法会对数组中的每个元素调用一次callbackfn函数。
     * @param { U } initialValue - 其值作为累加初始值的参数。
     *     首次调用callbackfn时，将该值作为参数传入。
     * @returns { U } - 上一次调用回调函数得到的累加结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = BigInt>(
        callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int, array: BigUint64Array) => U,
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
     * @throws { TypeError } -  当BigUint64Array的长度为0时，抛出TypeError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigUint64Array) => BigInt): BigInt;

    /**
     * 对当前BigUint64Array的所有元素执行fn(arr[i])，创建新的BigUint64Array。
     *
     * @param { function } fn - 对当前BigUint64Array中每个元素应用的函数。
     * @returns { BigUint64Array } - 新的BigUint64Array，其中每个元素都是回调函数的返回结果。
     *     其中每个元素均由当前BigUint64Array的元素应用fn后得到。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: BigInt, index: int, array: BigUint64Array) => BigInt): BigUint64Array;

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
    public every(predicate: (element: BigInt, index: int, array: BigUint64Array) => boolean): boolean;

    /**
     * 根据条件fn从当前BigUint64Array创建新的BigUint64Array。
     *
     * @param { function } fn - 对每个元素应用的判断条件。
     * @returns { BigUint64Array } - 由通过测试的元素组成的新BigUint64Array。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): BigUint64Array;

    /**
     * 返回数组中第一个使predicate返回true的元素的值，
     * 否则。
     *
     * @param { function } predicate - find会按升序对数组中的每个元素调用一次predicate，
     *     直到找到使predicate返回true的元素。如果找到这样的元素，find
     *     会立即返回该元素的值；否则find返回undefined。
     * @returns { BigInt | undefined } - 查找到的元素；如果没有元素匹配，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: BigInt, index: int, array: BigUint64Array) => boolean): BigInt | undefined;

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
    public findIndex(predicate: (value: BigInt, index: int, obj: BigUint64Array) => boolean): int;

    /**
     * 返回BigUint64Array中最后一个满足给定predicate的元素。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { BigInt } - 最后一个满足predicate的元素。
     * @throws { Error } -  当没有元素满足predicate时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): BigInt;

    /**
     *  返回BigUint64Array中最后一个满足给定predicate的元素的索引。
     *
     * @param { function } fn -  用于测试每个元素的函数，调用时传入(value, index, array)。
     *     命中目标元素时应返回true。
     * @returns { int } - 最后一个满足predicate的元素的索引，若不存在则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): int;

    /**
     * 对BigUint64Array中的每个元素执行指定的操作。
     *
     * @param { function } callbackfn - 最多接受三个参数的函数。forEach会对数组中的每个元素
     *     调用一次callbackfn函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: BigInt, index: int, array: BigUint64Array) => void): void;

    /**
     * 按升序对BigUint64Array中的每个元素调用一次给定的回调函数。
     *
     * @returns { BigUint64Array } - 该BigUint64Array对象本身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): BigUint64Array;

    /**
     * 底层Buffer中的字节偏移量。
     *
     * @returns { int } - 相对于底层ArrayBuffer起始位置的字节偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 占用的字节数。
     *
     * @returns { int } - 该BigUint64Array的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * BigUint64Array中存储的元素数量。
     *
     * @returns { int } - 该BigUint64Array中的元素数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * 字符串\"BigUint64Array\"。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'BigUint64Array';
}
