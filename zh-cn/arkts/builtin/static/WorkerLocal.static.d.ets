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
 * @file 定义ArkTS的工作线程本地存储
 * @kit ArkTS
 */

/**
 * WorkerLocal为多线程环境提供了线程本地存储机制，允许每个工作线程拥有自己的独立数据副本，无需担心线程安全问题。
 * 可以使用WorkerLocal创建线程在本地的变量，这些变量在每个线程中都是独立存在的，互不干扰。
 * WorkerLocal适用于需要在多线程环境中维护线程特定状态的场景。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 线程本地存储容器，为每个工作线程维护独立的值副本，无需担心线程安全问题。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class WorkerLocal<T> {
    /**
     * 构造一个无初始值和初始化函数的WorkerLocal实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 使用初始化函数构造WorkerLocal实例。在不同线程首次调用get时，会触发该初始化函数初始化线程本地值。
     *
     * @param { function } init - 初始化函数，用于提供线程本地值的初始值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(init: () => T);

    /**
     * 获取当前工作线程的值。若未提供初始化函数且未调用set设置值时，会抛出异常。
     *
     * @returns { T } 当前工作线程的值。
     * @throws { Error } - 值未初始化且未提供初始化函数时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get(): T;

    /**
     * 设置当前工作线程的值。
     *
     * @param { T } value - 要设置的当前工作线程的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set(value: T): void;

    /**
     * 删除当前工作线程的值，释放内存占用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    delete(): void;
}
