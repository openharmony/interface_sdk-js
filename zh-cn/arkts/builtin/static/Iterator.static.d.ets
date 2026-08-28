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
 * 表示迭代结果对象，包含迭代是否完成以及当前元素的值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IteratorResult<out T> {
    /**
     * 表示迭代是否已完成。为true时，迭代器已结束产出值，
     * value为undefined；为false时，value包含当前元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    done: boolean;

    /**
     * 迭代器返回的当前元素值。当done为true时，value为undefined；
     * 当done为false时，value包含类型为T的当前迭代元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly value: T | undefined;

    /**
     * 创建表示迭代已完成的IteratorResult对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 创建具有指定done状态和值的IteratorResult对象。
     *
     * @param { boolean } done - 表示迭代是否已完成。
     * @param { T | undefined } value - 迭代器返回的元素值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(done: boolean, value: T | undefined);

    /**
     * 创建表示迭代未完成并带有指定值的IteratorResult对象。
     *
     * @param { T } value - 迭代器返回的元素值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(value: T);
}

/**
 * 迭代器接口，定义了获取序列中下一个值的方法。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Iterator<out T> {

    /**
     * 返回迭代器中的下一个结果。
     *
     * @returns { IteratorResult<T> } - 包含迭代状态和值的IteratorResult对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    next(): IteratorResult<T>;
}

/**
 * 可迭代接口，表示其元素可被遍历的对象。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Iterable<out T> {
    /**
     * 返回该对象的迭代器。
     *
     * @returns { Iterator<T> } - 该可迭代对象的迭代器实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): Iterator<T>;
}

/**
 * 同时满足Iterator和Iterable接口的对象，即既是迭代器也是可迭代对象。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface IterableIterator<out T> extends Iterator<T>, Iterable<T> {

    /**
     * 返回自身，因为该对象本身就是迭代器。
     *
     * @returns { IterableIterator<T> } - 返回自身。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): IterableIterator<T>;
}

/**
 * 遍历迭代器，并对每个元素执行指定的回调函数。
 *
 * @param { Iterator<V> } x - 待遍历的迭代器。
 * @param { function } fn - 对迭代器每个元素执行的回调函数。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function iteratorForEach<V>(x: Iterator<V>, fn: (x: V) => void): void;
