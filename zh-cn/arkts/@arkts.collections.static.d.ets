'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file 定义ArkTS的集合
 * @kit ArkTS
 */

/**
 * ArkTS集合。
 *
 * @namespace collections
 * @syscap SystemCapability.Utils.Lang
 * @since 23 static
 */
declare namespace collections {
 /**
   * 按顺序排列的比特值集合，每个比特值只能是0或1。
   * 如果多个线程同时访问BitVector实例，
   * 并且至少有一个线程修改了数组结构，
   * 则必须在外部进行同步。 
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 23 static
   */
  class BitVector {
    /**
     * 用于创建BitVector对象的构造函数。
     *
     * @param { int } length - BitVector对象的长度。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    constructor(length: int);
    /**
     * 获取BitVector的元素个数。这是比位向量中最高索引大一的数字。
     * 可以通过resize()方法更改。
     *
     * @returns { int } int类型，返回BitVector的长度
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get length(): int;
    /**
     * 将比特元素追加到位向量的末尾。
     *
     * @param { int } element - 要追加到此位向量的元素（0表示0，否则表示1）。
     * @returns { boolean } boolean类型，如果添加成功返回true，失败返回false。
     * @throws { BusinessError } 10200011 - push方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    push(element: int): boolean;
    /**
     * 取出并移除位向量末尾的比特元素。
     *
     * @returns { int | undefined } int类型，如果位弹出成功则返回对应的int值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    pop(): int | undefined;
    /**
     * 检查位向量是否包含特定的比特元素。
     *
     * @param { int } element - 要检查的元素（0表示0，否则表示1）。
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，包含该索引的值。
     * @returns { boolean } boolean类型，如果位向量包含指定元素则返回true，
     *     否则返回false。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - has方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    has(element: int, fromIndex: int, toIndex: int): boolean;
    /**
     * 将位向量中一定范围内的比特设置为特定的元素。
     *
     * @param { int } element - 要设置的元素（0表示0，否则表示1）。
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - setBitsByRange方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    setBitsByRange(element: int, fromIndex: int, toIndex: int): void;
    /**
     * 将位向量中的所有比特设置为特定的元素。
     *
     * @param { int } element - 要设置的元素（0表示0，否则表示1）。
     * @throws { BusinessError } 10200011 - setAllBits方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    setAllBits(element: int): void;
    /**
     * 返回位向量中一定索引范围内的比特值。
     *
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @returns { BitVector } BitVector类型，返回位向量中一定索引范围内的比特值。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - getBitsByRange方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getBitsByRange(fromIndex: int, toIndex: int): BitVector;
    /**
     * 调整位向量的长度。
     *
     * @param { int } size - bitVector的新大小。如果count大于bitVector当前大小，
     *     则额外的比特元素将设置为0。
     * @throws { BusinessError } 10200011 - resize方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    resize(size: int): void;
    /**
     * 统计位向量中一定范围内某个比特元素出现的次数。
     *
     * @param { int } element - 要统计的元素（0表示0，否则表示1）。
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @returns { int } number类型，返回某个比特元素出现的次数
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - getBitCountByRange方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getBitCountByRange(element: int, fromIndex: int, toIndex: int): int;
    /**
     * 在位向量中查找某个比特值在指定范围内第一次出现的位置。
     *
     * @param { int } element - 要查找的元素（0表示0，否则表示1）。
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @returns { int } number类型，返回指定比特在范围内第一次出现的索引，
     *     如果此范围内不包含该元素则返回-1。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - getIndexOf方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getIndexOf(element: int, fromIndex: int, toIndex: int): int;
    /**
     * 在位向量中查找某个比特值在指定范围内最后一次出现的位置。
     *
     * @param { int } element - 要查找的元素（0表示0，否则表示1）。
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @returns { int } number类型，返回指定比特在范围内最后一次出现的索引，
     *     如果此范围内不包含该元素则返回-1。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - getLastIndexOf方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getLastIndexOf(element: int, fromIndex: int, toIndex: int): int;
    /**
     * 翻转位向量中指定索引处的比特值。（0翻转为1，1翻转为0）
     *
     * @param { int } index - 位向量中的索引。
     * @throws { BusinessError } 10200001 - index的值超出范围。
     * @throws { BusinessError } 10200011 - flipBitByIndex方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    flipBitByIndex(index: int): void;
    /**
     * 翻转位向量中一定范围内的比特值。（0翻转为1，1翻转为0）
     *
     * @param { int } fromIndex - 起始索引位置，包含该索引位置的值。
     * @param { int } toIndex - 结束索引，不包含该索引的值。
     * @throws { BusinessError } 10200001 - fromIndex或toIndex的值超出范围。
     * @throws { BusinessError } 10200011 - flipBitsByRange方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    flipBitsByRange(fromIndex: int, toIndex: int): void;
    /**
     * 返回一个迭代位向量的迭代器。
     *
     * @returns { IterableIterator<int> } 一个新的可迭代迭代器对象。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    $_iterator(): IterableIterator<int>;
    /**
     * 返回位向量中值的可迭代对象。
     *
     * @returns { IterableIterator<int> }  一个新的可迭代迭代器对象。
     * @throws { BusinessError } 10200011 - values方法无法被绑定。
     * @throws { BusinessError } 10200201 - 并发修改错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    values(): IterableIterator<int>;
    /**
     * 访问或设置BitVector中指定索引处的元素。
     *
     * @param { int } index - 要访问或设置的元素的索引。
     *     如果index < 0或index >= bitVector.length，则抛出错误。
     * @returns { int } 给定索引处BitVector中的元素。
     * @throws { BusinessError } 10200001 - index的值超出范围。
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    [index: int]: int;
  }
}

export default collections;
