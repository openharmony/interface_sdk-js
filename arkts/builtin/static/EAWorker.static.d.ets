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
 * Represents the priority levels for an EAWorker
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export enum WorkerPriority {
    /**
     * Idle priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_IDLE = 0,
    /**
     * Low priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_LOW = 1,
    /**
     * Default priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_DEFAULT = 2,
    /**
     * High priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_HIGH = 3,
    /**
     * Deadline request priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_DEADLINE_REQUEST = 4,
    /**
     * User interaction priority
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PRIORITY_USER_INTERACTION = 5
}

/**
 * A worker that executes tasks concurrently with priority support
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class EAWorker {
    /**
     * Constructs a new EAWorker instance
     *
     * @param { boolean } [needInterop] - whether interoperability is needed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(needInterop: boolean = false);

    /**
     * Constructs a new EAWorker instance with a name
     *
     * @param { string } name - the name of the worker.
     * @param { boolean } [needInterop] - whether interoperability is needed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, needInterop: boolean = false);

    /**
     * Constructs a new EAWorker instance with a task
     *
     * @param { function } task - the task to execute.
     * @param { boolean } [needInterop] - whether interoperability is needed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(task: () => void, needInterop: boolean = false);

    /**
     * Constructs a new EAWorker instance with a name and task
     *
     * @param { string } name - the name of the worker.
     * @param { function } task - the task to execute.
     * @param { boolean } [needInterop] - whether interoperability is needed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, task: () => void, needInterop: boolean = false);

    /**
     * Returns the worker ID
     *
     * @returns { int | undefined } the worker ID, or undefined if not started
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getWorkerId(): int | undefined;

    /**
     * Returns the name of the worker
     *
     * @returns { string } the name of the worker
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getName(): string;

    /**
     * Starts the worker
     *
     * @throws { Error } the - worker has already been started or has quit
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    start(): void;

    /**
     * Checks whether the worker is alive
     *
     * @returns { boolean } true if the worker is alive, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    isAlive(): boolean;

    /**
     * Sets the priority of the worker
     *
     * @param { WorkerPriority } priority - the priority to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setPriority(priority: WorkerPriority): void;

    /**
     * Returns the priority of the worker
     *
     * @returns { WorkerPriority } the priority of the worker
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getPriority(): WorkerPriority;

    /**
     * Terminates the worker
     *
     * @throws { Error } the - worker has not been started
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    quit(): void;

    /**
     * Sets the uncaught exception handler for the worker
     *
     * @param { function } handler - the handler to call when an uncaught exception occurs.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setUncaughtExceptionHandler(handler: (error: Error) => void): void;

    /**
     * Returns the uncaught exception handler for the worker
     *
     * @returns { function | undefined } the uncaught exception handler, or undefined if not set
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getUncaughtExceptionHandler(): ((error: Error) => void) | undefined;

    /**
     * Returns the main worker instance
     *
     * @returns { EAWorker } the main worker instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static main(): EAWorker;

    /**
     * Returns the current worker instance
     *
     * @returns { EAWorker | undefined } the current worker instance, or undefined if not in a worker context
     * @throws { Error } called - from a taskpool worker
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static current(): EAWorker | undefined;

    /**
     * Runs a task on the worker and returns a Job with the result
     *
     * @param { Function } task - the task function to run.
     * @param { FixedArray<Any> } args - the arguments to pass to the task.
     * @returns { Job<R> } a Job that resolves with the task result
     * @throws { Error } the - worker has not been started
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    run<R>(task: Function, ...args: FixedArray<Any>): Job<R>;

    /**
     * Posts a task to the main worker and returns a Job with the result
     *
     * @param { Function } coroFun - the coroutine function to run on the main worker.
     * @param { FixedArray<Any> } args - the arguments to pass to the function.
     * @returns { Job<R> } a Job that resolves with the function result
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static postToMain<R>(coroFun: Function, ...args: FixedArray<Any>): Job<R>;

    /**
     * Waits for the worker to finish execution
     *
     * @returns { Job<void> } a Job that resolves when the worker has finished
     * @throws { Error } the - worker has not been started
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    join(): Job<void>;

    /**
     * Posts a task to the worker for execution
     *
     * @param { function } task - the task to post.
     * @throws { Error } the - worker is not started and is not the main worker
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    postTask(task: () => void): void;
}
