'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 定义ArkTS的异步操作
 * @kit ArkTS
 */

/**
 * 本模块提供Promise异步操作相关的类型和接口说明。Promise是一种用于处理异步操作的对象，
 * 可以将异步操作转换为类似于同步操作的风格，以方便代码编写和维护。Promise表示一个异步操作的最终完成（或失败）情况及其结果值，
 * 提供了优雅的方式处理异步操作，避免传统回调函数的层层嵌套。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 表示一个thenable对象。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface PromiseLike<out T> {
    /**
     * 为Promise的解析和/或拒绝添加回调函数。
     *
     * @param { function } onFulfilled - Promise解析时执行的回调函数。
     * @param { function } [onRejected] - Promise拒绝时执行的回调函数。
     * @returns { PromiseLike<Awaited<U | E>> } 回调函数结果的PromiseLike。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T, E = never>(onFulfilled: (value: T) => PromiseLike<U> | U,
        onRejected?: (error: Error) => PromiseLike<E> | E): PromiseLike<Awaited<U | E>>;
}

/**
 * 表示Promise的状态。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseStatus {
    /**
     * 已解析状态字符串。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static readonly fulfilled: string;

    /**
     * 已拒绝状态字符串。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static readonly rejected: string;
}

/**
 * 表示已解析Promise的结果。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseFulfilledResult<T> {
    /**
     * Promise的状态。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    status: string;

    /**
     * 构造一个空的PromiseFulfilledResult。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 使用指定值构造PromiseFulfilledResult。
     *
     * @param { T } value - 已解析的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(value: T);

    /**
     * 已解析Promise的值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    value: T;
}

/**
 * 表示已拒绝Promise的结果。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class PromiseRejectedResult {
    /**
     * Promise的状态。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    status: string;

    /**
     * 使用默认Error构造PromiseRejectedResult。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 使用指定原因构造PromiseRejectedResult。
     *
     * @param { Error } reason - 拒绝原因。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(reason: Error);

    /**
     * Promise被拒绝的原因。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    reason: Error;
}

/**
 * 表示Promise的完成结果。
 *
 * @unionmember { PromiseFulfilledResult<T> }
 * @unionmember { PromiseRejectedResult }
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

/**
 * 表示异步操作的最终完成或失败。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Promise<out T> implements PromiseLike<T> {
    /**
     * 使用指定的回调函数构造新的Promise。
     *
     * @param { function } callback - 要执行的回调函数，接收resolve和reject两个函数作为参数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(callback: (resolve: (value: PromiseLike<T> | T) => void,
        reject: (error: Error) => void) => void);

    /**
     * 为Promise的解析添加回调函数。
     *
     * @param { function } onFulfilled - Promise解析时执行的回调函数。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T>(onFulfilled: () => PromiseLike<U> | U): Promise<Awaited<U>>;

    /**
     * 不为Promise的解析添加回调函数。
     *
     * @param { undefined } [_onFulfilled] - 传入undefined以跳过解析处理。
     * @returns { Promise<Awaited<T>> } 用于返回Awaited<T>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then(_onFulfilled?: undefined): Promise<Awaited<T>>;

    /**
     * 为Promise的解析和/或拒绝添加回调函数。
     *
     * @param { function } onFulfilled - Promise解析时执行的回调函数。
     * @param { function } [onRejected] - Promise拒绝时执行的回调函数。
     * @returns { Promise<Awaited<U | E>> } 用于返回Awaited<U | E>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    then<U = T, E = never>(onFulfilled: (value: T) => PromiseLike<U> | U,
        onRejected?: (error: Error) => PromiseLike<E> | E): Promise<Awaited<U | E>>;

    /**
     * 为Promise的拒绝添加回调函数（无参形式）。
     *
     * @param { function } onRejected - Promise拒绝时执行的回调函数。
     * @returns { Promise<Awaited<T | U>> } 用于返回Awaited<T | U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    catch<U = never>(onRejected: () => PromiseLike<U> | U): Promise<Awaited<T | U>>;

    /**
     * 为Promise的拒绝添加回调函数。
     *
     * @param { function } [onRejected] - Promise拒绝时执行的回调函数。
     * @returns { Promise<Awaited<T | U>> } 用于返回Awaited<T | U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    catch<U = never>(onRejected?: (error: Error) => PromiseLike<U> | U): Promise<Awaited<T | U>>;

    /**
     * 添加在Promise完成（无论解析还是拒绝）时调用的回调函数。
     *
     * @param { function } [onFinally] - Promise完成时执行的回调函数。
     * @returns { Promise<Awaited<T>> } 用于返回Awaited<T>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    finally<U = T>(onFinally?: () => PromiseLike<U> | U): Promise<Awaited<T>>;

    /**
     * 创建一个已解析的空Promise。
     *
     * @returns { Promise<void> } 无返回值的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static resolve(): Promise<void>;

    /**
     * 使用指定值创建已解析的Promise。
     *
     * @param { PromiseLike<U> | U } value - 解析值。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static resolve<U>(value: PromiseLike<U> | U): Promise<Awaited<U>>;

    /**
     * 创建一个已拒绝的空Promise。
     *
     * @returns { Promise<void> } 无返回值的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static reject(): Promise<void>;

    /**
     * 使用指定Error创建已拒绝的Promise。
     *
     * @param { Error } error - 拒绝原因。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static reject<U = never>(error: Error): Promise<Awaited<U>>;

    /**
     * 等待FixedArray中所有Promise都解析。
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - 要等待的Promise数组。
     * @returns { Promise<Array<Awaited<U>>> } 用于返回Array<Awaited<U>>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static all<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Array<Awaited<U>>>;

    /**
     * 等待可迭代对象中所有Promise都解析。
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - 要等待的Promise可迭代对象。
     * @returns { Promise<Array<Awaited<U>>> } 用于返回Array<Awaited<U>>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static all<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Array<Awaited<U>>>;

    /**
     * 等待FixedArray中所有Promise都完成。
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - 要等待的Promise数组。
     * @returns { Promise<PromiseSettledResult<Awaited<U>>[]> } 用于返回
     *     PromiseSettledResult<Awaited<U>>[]的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static allSettled<U>(promises: FixedArray<PromiseLike<U> | U | undefined>):
        Promise<PromiseSettledResult<Awaited<U>>[]>;
    /**
     * 等待可迭代对象中所有Promise都完成。
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - 要等待的Promise可迭代对象。
     * @returns { Promise<PromiseSettledResult<Awaited<U>>[]> } 用于返回
     *     PromiseSettledResult<Awaited<U>>[]的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static allSettled<U>(promises: Iterable<PromiseLike<U> | U>): Promise<PromiseSettledResult<Awaited<U>>[]>;

    /**
     * 等待FixedArray中任意一个Promise解析。
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - 要等待的Promise数组。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static any<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Awaited<U>>;

    /**
     * 等待可迭代对象中任意一个Promise解析。
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - 要等待的Promise可迭代对象。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static any<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Awaited<U>>;

    /**
     * 等待FixedArray中第一个Promise完成。
     *
     * @param { FixedArray<PromiseLike<U> | U | undefined> } promises - 要等待的Promise数组。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static race<U>(promises: FixedArray<PromiseLike<U> | U | undefined>): Promise<Awaited<U>>;

    /**
     * 等待可迭代对象中第一个Promise完成。
     *
     * @param { Iterable<PromiseLike<U> | U> } promises - 要等待的Promise可迭代对象。
     * @returns { Promise<Awaited<U>> } 用于返回Awaited<U>的Promise。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static race<U>(promises: Iterable<PromiseLike<U> | U>): Promise<Awaited<U>>;
}
