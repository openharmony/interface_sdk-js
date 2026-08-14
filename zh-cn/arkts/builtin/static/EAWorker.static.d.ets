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
 * @file 定义ArkTS的独占线程任务执行器
 * @kit ArkTS
 */

/**
 * EAWorker类为开发者提供了以独占线程模式执行异步任务的接口。通过创建EAWorker实例，系统会自动分配专属工作线程，
 * 开发者可重用该实例执行不同任务，有效提升线程资源利用率。使用完毕后，必须显式调用join方法来释放线程资源，以避免内存泄漏。
 * 互操作（interop）：ArkTS-Sta和ArkTS-Dyn代码相互操作。支持互操作的EAWorker会持有不同的ArkTS-Dyn运行时实例用于执行ArkTS-Dyn字节码。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 表示EAWorker线程的优先级等级。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export enum WorkerPriority {
    /**
     * 空闲优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_IDLE = 0,
    /**
     * 低优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_LOW = 1,
    /**
     * 默认优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_DEFAULT = 2,
    /**
     * 高优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_HIGH = 3,
    /**
     * 截止时间请求优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_DEADLINE_REQUEST = 4,
    /**
     * 用户交互优先级。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_USER_INTERACTION = 5
}

/**
 * 支持优先级的并发任务执行器，以独占线程模式执行异步任务。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class EAWorker {
    /**
     * 构造一个EAWorker实例。
     *
     * @param { boolean } [needInterop] - 是否需要互操作能力。true表示支持互操作，false表示不支持，默认值为false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(needInterop: boolean = false);

    /**
     * 构造一个指定名称的EAWorker实例。
     *
     * @param { string } name - Worker的名称。
     * @param { boolean } [needInterop] - 是否需要互操作能力。true表示支持互操作，false表示不支持，默认值为false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, needInterop: boolean = false);

    /**
     * 构造一个包含任务函数的EAWorker实例，在调用start方法后执行指定任务。
     *
     * @param { function } task - 要执行的任务函数。
     * @param { boolean } [needInterop] - 是否需要互操作能力。true表示支持互操作，false表示不支持，默认值为false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(task: () => void, needInterop: boolean = false);

    /**
     * 构造一个指定名称并包含任务函数的EAWorker实例，在调用start方法后执行指定任务。
     *
     * @param { string } name - Worker的名称。
     * @param { function } task - 要执行的任务函数。
     * @param { boolean } [needInterop] - 是否需要互操作能力。true表示支持互操作，false表示不支持，默认值为false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, task: () => void, needInterop: boolean = false);

    /**
     * 返回Worker的ID。未调用start方法时返回undefined。
     *
     * @returns { int | undefined } Worker的ID，未启动时返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getWorkerId(): int | undefined;

    /**
     * 返回Worker的名称。
     *
     * @returns { string } Worker的名称。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getName(): string;

    /**
     * 启动Worker，开始接收和执行任务。EAWorker实例仅能启动一次。
     *
     * @throws { Error } - Worker已被启动或已退出时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    start(): void;

    /**
     * 检查Worker是否存活（已启动）。
     *
     * @returns { boolean } Worker已启动则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    isAlive(): boolean;

    /**
     * 设置Worker的优先级。
     *
     * @param { WorkerPriority } priority - 要设置的优先级。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setPriority(priority: WorkerPriority): void;

    /**
     * 返回Worker的优先级。
     *
     * @returns { WorkerPriority } Worker的优先级。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getPriority(): WorkerPriority;

    /**
     * 终止Worker。等待当前所有任务完成后，停止任务循环并销毁线程资源。
     *
     * @throws { Error } - Worker未启动时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    quit(): void;

    /**
     * 设置Worker的未捕获异常处理器。
     *
     * @param { function } handler - 未捕获异常发生时调用的处理函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setUncaughtExceptionHandler(handler: (error: Error) => void): void;

    /**
     * 返回Worker的未捕获异常处理器。
     *
     * @returns { function | undefined } 未捕获异常处理函数，未设置时返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getUncaughtExceptionHandler(): ((error: Error) => void) | undefined;

    /**
     * 返回主线程的Worker实例。
     *
     * @returns { EAWorker } 主线程的Worker实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static main(): EAWorker;

    /**
     * 返回当前线程的Worker实例。
     *
     * @returns { EAWorker | undefined } 当前线程的Worker实例，不在Worker上下文中时返回undefined。
     * @throws { Error } - 在TaskPool Worker中调用时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static current(): EAWorker | undefined;

    /**
     * 在Worker上运行任务，并返回包含结果的Job。
     *
     * @param { Function } task - 要执行的任务函数。
     * @param { FixedArray<Any> } args - 传递给任务函数的参数。
     * @returns { Job<R> } 包含任务结果的Job。
     * @throws { Error } - Worker未启动时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    run<R>(task: Function, ...args: FixedArray<Any>): Job<R>;

    /**
     * 向主线程提交任务，并返回包含结果的Job。
     *
     * @param { Function } coroFun - 在主线程上执行的函数。
     * @param { FixedArray<Any> } args - 传递给函数的参数。
     * @returns { Job<R> } 包含函数结果的Job。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static postToMain<R>(coroFun: Function, ...args: FixedArray<Any>): Job<R>;

    /**
     * 等待Worker执行完成。
     *
     * @returns { Job<void> } Worker执行完成时解析的Job。
     * @throws { Error } - Worker未启动时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    join(): Job<void>;

    /**
     * 向Worker提交执行任务。
     *
     * @param { function } task - 要提交的任务。
     * @throws { Error } - Worker未启动且不是主线程Worker时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    postTask(task: () => void): void;
}
