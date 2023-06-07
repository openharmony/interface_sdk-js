/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * JS cross-thread task executor.
 *
 * @namespace taskpool
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * JS cross-thread task executor.
 *
 * @namespace taskpool
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
declare namespace taskpool {
  /**
   * The Priority defines the task priority.
   *
   * @enum { number } Priority
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * The Priority defines the task priority.
   *
   * @enum { number } Priority
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  enum Priority {
    HIGH,
    MEDIUM,
    LOW
  }

  /**
   * The Task class provides an interface to create a task.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * The Task class provides an interface to create a task.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class Task {
    /**
     * Create a Task instance.
     *
     * @param { Function } func - func func Concurrent function to execute in taskpool.
     * @param { unknown[] } args - args args The concurrent function arguments.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200014 - if the function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Create a Task instance.
     *
     * @param { Function } func - func func Concurrent function to execute in taskpool.
     * @param { unknown[] } args - args args The concurrent function arguments.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200014 - if the function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor(func: Function, ...args: unknown[]);

    /**
     * Concurrent function to execute in taskpool.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Concurrent function to execute in taskpool.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function: Function;

    /**
     * The concurrent function arguments.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The concurrent function arguments.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    arguments?: unknown[];
  }

  /**
   * Execute a concurrent function.
   *
   * @param { Function } func - func func Concurrent function want to execute.
   * @param { unknown[] } args - args args The concurrent function arguments.
   * @returns { Promise<unknown> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200003 - Worker initialization failure.
   * @throws { BusinessError } 10200006 - Serializing an uncaught exception failed.
   * @throws { BusinessError } 10200014 - if the function is not mark as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Execute a concurrent function.
   *
   * @param { Function } func - func func Concurrent function want to execute.
   * @param { unknown[] } args - args args The concurrent function arguments.
   * @returns { Promise<unknown> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200003 - Worker initialization failure.
   * @throws { BusinessError } 10200006 - Serializing an uncaught exception failed.
   * @throws { BusinessError } 10200014 - if the function is not mark as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function execute(func: Function, ...args: unknown[]): Promise<unknown>;

  /**
   * Execute a concurrent task.
   *
   * @param { Task } task - task task The task want to execute.
   * @param { Priority } priority - priority priority Task priority, MEDIUM is default.
   * @returns { Promise<unknown> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200003 - Worker initialization failure.
   * @throws { BusinessError } 10200006 - Serializing an uncaught exception failed.
   * @throws { BusinessError } 10200014 - if the function in task is not mark as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Execute a concurrent task.
   *
   * @param { Task } task - task task The task want to execute.
   * @param { Priority } priority - priority priority Task priority, MEDIUM is default.
   * @returns { Promise<unknown> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200003 - Worker initialization failure.
   * @throws { BusinessError } 10200006 - Serializing an uncaught exception failed.
   * @throws { BusinessError } 10200014 - if the function in task is not mark as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function execute(task: Task, priority?: Priority): Promise<unknown>;

  /**
   * Cancel a concurrent task.
   *
   * @param { Task } task - task task The task want to cancel.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200015 - if the task is not exist.
   * @throws { BusinessError } 10200016 - if the task is running.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Cancel a concurrent task.
   *
   * @param { Task } task - task task The task want to cancel.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 10200015 - if the task is not exist.
   * @throws { BusinessError } 10200016 - if the task is running.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function cancel(task: Task): void;
}

export default taskpool;
