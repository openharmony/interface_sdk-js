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
 * 表示ArrayBuffer视图的接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ArrayBufferView {
    /**
     * 该数组引用的ArrayBuffer实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly buffer: ArrayBuffer;

    /**
     * 该数组的字节长度。
     * 取值约束：必须为大于或等于0的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly byteLength: int;

    /**
     * 该数组的字节偏移量。
     * 取值约束：必须为大于或等于0的整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly byteOffset: int;
}

/**
 * 与JS ArrayBuffer API兼容的类。
 * 用于表示通用的、固定长度的原始二进制数据缓冲区。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class ArrayBuffer {

    /**
     * 创建一个大小等于length参数的ArrayBuffer。
     *
     * @param { int } length - ArrayBuffer的大小，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } [maxByteLength] - 可选参数，ArrayBuffer可调整到的最大大小。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @throws { RangeError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(length: int, maxByteLength?: int);

    /**
     * 创建一个大小等于length参数的ArrayBuffer。
     *
     * @param { double } length - ArrayBuffer的大小，单位为字节。
     *     <br>取值约束：必须大于或等于0。
     * @param { double } [maxByteLength] - 可选参数，ArrayBuffer可调整到的最大大小。
     *     <br>取值约束：必须大于或等于0。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double, maxByteLength?: double);

    /**
     * 检查传入的对象是否为ArrayBuffer视图之一。
     *
     * @param { Object } obj - 待检查的对象。
     * @returns { boolean } 如果该对象为视图则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isView(obj: Object): boolean;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } expectedValue - 期望值。
     * @param { byte } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI8(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } expectedValue - 期望值。
     * @param { short } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI16(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要相加的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位与运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } expectedValue - 期望值。
     *     <br>取值约束：应为整数。
     * @param { int } replacementValue - 替换值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要交换的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI32(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位或运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要存储的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要相减的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位异或运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } expectedValue - 期望值。
     * @param { long } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI64(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } expectedValue - 期望值。
     * @param { byte } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU8(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { byte } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU8(index: int, byteOffset: int, value: byte): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } expectedValue - 期望值。
     * @param { short } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU16(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { short } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU16(index: int, byteOffset: int, value: short): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要相加的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位与运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } expectedValue - 期望值。
     *     <br>取值约束：应为整数。
     * @param { int } replacementValue - 替换值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要交换的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU32(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位或运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要存储的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 要相减的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } value - 参与按位异或运算的值。
     *     <br>取值约束：应为整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU32(index: int, byteOffset: int, value: int): long;

    /**
     * 以原子方式将一个值加到指定索引处的元素上。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要相加的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式对指定索引处的元素执行按位与运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位与运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式比较并交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } expectedValue - 期望值。
     * @param { long } replacementValue - 替换值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * 以原子方式交换指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要交换的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式加载指定索引处的值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU64(index: int, byteOffset: int): long;

    /**
     * 以原子方式对指定索引处的元素执行按位或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式在指定索引处存储一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要存储的值。
     * @returns { long } 已存储的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式从指定索引处的元素中减去一个值。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 要相减的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU64(index: int, byteOffset: int, value: long): long;

    /**
     * 以原子方式对指定索引处的元素执行按位异或运算。
     *
     * @param { int } index - 待访问的索引。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { int } byteOffset - 在ArrayBuffer中的字节偏移量，单位为字节。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @param { long } value - 参与按位异或运算的值。
     * @returns { long } 操作后的值。
     * @throws { IndexOutOfBoundsError } 当length或maxByteLength为负数，或length > maxByteLength时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU64(index: int, byteOffset: int, value: long): long;

    /**
     * 返回该ArrayBuffer的字符串表示。
     *
     * @returns { string } 该ArrayBuffer的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 返回指定索引处的字节。
     *
     * @param { int } pos - 在缓冲区中的位置。
     *     <br>取值约束：应为整数。
     * @returns { byte } 字节值。
     * @throws { IndexOutOfBoundsError } 当pos越界时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(pos: int): byte;

    /**
     * 设置指定索引处的字节值。
     *
     * @param { int } pos - 在缓冲区中的位置。
     *     <br>取值约束：应为整数。
     * @param { byte } val - 要设置的字节值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(pos: int, val: byte): void;

    /**
     * 返回该ArrayBuffer的字节长度。
     *
     * @returns { int } 字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getByteLength(): int;

    /**
     * 将该ArrayBuffer调整为指定长度。
     *
     * @param { int } newLen - 新的字节长度。
     *     <br>取值约束：必须为大于或等于0的整数。
     * @throws { TypeError } 当缓冲区已分离或不可调整大小时，抛出该异常。
     * @throws { RangeError } 当新长度无效时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public resize(newLen : int): void;

    /**
     * 该ArrayBuffer字节长度的只读属性。
     *
     * @returns { int } 字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get byteLength(): int;

    /**
     * 如果该ArrayBuffer已分离，则返回true。
     *
     * @returns { boolean } 如果该ArrayBuffer已分离则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get detached(): boolean;

    /**
     * 如果该ArrayBuffer可调整大小，则返回true。
     *
     * @returns { boolean } 如果该ArrayBuffer可调整大小则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get resizable(): boolean;

    /**
     * 根据字节数组创建一个新的ArrayBuffer。
     *
     * @param { FixedArray<byte> } arr - 源字节数组。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<byte>): ArrayBuffer;

    /**
     * 根据Uint8Array创建一个新的ArrayBuffer。
     *
     * @param { Uint8Array } u8arr - 源类型化数组。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(u8arr: Uint8Array): ArrayBuffer;

    /**
     * 根据数字数组创建一个新的ArrayBuffer。
     *
     * @param { double[] } array - 源数字数组。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(array: double[]): ArrayBuffer;

    /**
     * 根据指定编码的字符串创建一个新的ArrayBuffer。
     *
     * @param { string } str - 源字符串。
     * @param { string } encoding - 字符串编码，例如"utf8"。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(str: string, encoding: string): ArrayBuffer;

    /**
     * 根据已有ArrayBuffer的一个片段创建一个新的ArrayBuffer。
     *
     * @param { ArrayBuffer } buff - 源缓冲区。
     * @param { int } byteOffset - 源中的起始偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } length - 要拷贝的字节数。
     *     <br>取值约束：应为整数。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(buff: ArrayBuffer, byteOffset: int, length: int): ArrayBuffer;

    /**
     * 使用数字参数，根据已有ArrayBuffer的一个片段创建一个新的ArrayBuffer。
     *
     * @param { ArrayBuffer } buffer - 源缓冲区。
     * @param { double } [byteOffset] - 起始偏移量。
     * @param { double } [length] - 字节长度。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(buffer: ArrayBuffer, byteOffset?: double, length?: double): ArrayBuffer;

    /**
     * 根据对象创建一个新的ArrayBuffer。
     *
     * @param { Object } obj - 源对象，为字符串或ArrayBuffer。
     * @param { int | string } byteOffsetOrEncoding - 字节偏移量或编码字符串。
     * @param { int } length - 要拷贝的长度。
     *     <br>取值约束：应为整数。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @throws { Error } 当参数不正确时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromObject(obj: Object, byteOffsetOrEncoding: int | string, length: int): ArrayBuffer;

    /**
     * 返回字符串在给定编码下的字节长度。
     *
     * @param { string } text - 源字符串。
     * @param { string } encoding - 编码类型。
     * @returns { int } 计算得到的字节长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bytesLength(text: string, encoding: string): int;

    /**
     * 将ArrayBuffer的一个片段转换为字符串。
     *
     * @param { ArrayBuffer } buffer - 源缓冲区。
     * @param { string } encoding - 使用的编码。
     * @param { int } start - 起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } end - 结束索引。
     *     <br>取值约束：应为整数。
     * @returns { string } 解码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringify(buffer: ArrayBuffer, encoding: string, start: int, end: int): string;

    /**
     * 创建一个新的ArrayBuffer，包含[begin, end)范围内字节的副本。
     *
     * @param { int } begin - 开始拷贝的起始索引（包含）。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 停止拷贝的结束索引（不包含）。
     *     <br>取值约束：应为整数。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @throws { TypeError } 当该ArrayBuffer已分离时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int, end?: int): ArrayBuffer;

    /**
     * 创建一个新的ArrayBuffer，包含[begin, end)范围内字节的副本。
     *
     * @param { double } begin - 开始拷贝的起始索引（包含）。
     * @param { double } [end] - 停止拷贝的结束索引（不包含）。
     * @returns { ArrayBuffer } 新的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: double, end?: double): ArrayBuffer;
}

/**
 * 为ArrayBuffer定义别名ArrayBufferLike。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ArrayBufferLike = ArrayBuffer;
