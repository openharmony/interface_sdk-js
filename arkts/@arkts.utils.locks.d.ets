/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkTS
 */

/**
 * Asynchronous lock.
 *
 * @namespace locks
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
declare namespace locks {
  /**
   * Type of callback for asyncLock operation.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type AsyncLockCallback<T> = () => T|Promise<T>;

  /**
   * Class to execute an asynchronous operation under lock.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AsyncLock {
    /**
     * Default constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Find or create an instance of AsyncLock using the specified name.
     *
     * @param { string } name - name of the lock to find or create.
     * @returns { AsyncLock } Returns an instance of AsyncLock.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static request(name: string): AsyncLock;

    /**
     * Query information about the specified lock.
     *
     * @param { string } name - name of the lock.
     * @returns { AsyncLockState } Returns an instance of AsyncLockState.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200030 - No such lock.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static query(name: string): AsyncLockState;

    /**
     * Query information about all locks.
     *
     * @returns { AsyncLockState[] } Returns an array of AsyncLockState.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static queryAll(): AsyncLockState[];

    /**
     * Perform an operation with the acquired lock exclusively.
     * The method acquires the lock first, then calls the callback, and then releases the lock.
     * The callback is called asynchronously in the same thread where lockAsync was called.
     *
     * @param { AsyncLockCallback } callback - function to call when the lock gets acquired.
     * @returns { Promise<T> } Promise that will be resolved after the callback gets executed.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200030 - No such lock.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lockAsync<T>(callback: AsyncLockCallback<T>): Promise<T>;

    /**
     * Perform an operation with the acquired lock.
     * The method acquires the lock first, then calls the callback, and then releases the lock.
     * The callback is called asynchronously in the same thread where lockAsync was called.
     *
     * @param { AsyncLockCallback } callback - function to call when the lock gets acquired.
     * @param { AsyncLockMode } mode - mode of the lock operation.
     * @returns { Promise<T> } Promise that will be resolved after the callback gets executed or rejected.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200030 - No such lock.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lockAsync<T>(callback: AsyncLockCallback<T>, mode: AsyncLockMode): Promise<T>;

    /**
     * Perform an operation with the acquired lock.
     * The method acquires the lock first, then calls the callback, and then releases the lock.
     * The callback is called asynchronously in the same thread where lockAsync was called.
     * An optional timeout value can be provided in {@link AsyncLockOptions}. In this case, lockAsync will reject the
     * resulting promise with a BusinessError instance if the lock is not acquired before timeout exceeds.
     * The error message, in this case, will contain the held and waited locks information and possible deadlock warnings.
     *
     * @param { AsyncLockCallback } callback - function to call when the lock gets acquired.
     * @param { AsyncLockMode } mode - mode of the lock operation.
     * @param { AsyncLockOptions<U> } options - lock operation options.
     * @returns { Promise<T|U> } Promise that will be resolved after the callback gets executed or rejected in case timeout
     * exceeded.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200030 - No such lock.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lockAsync<T, U>(callback: AsyncLockCallback<T>, mode: AsyncLockMode, options: AsyncLockOptions<U>): Promise<T|U>;

    /**
     * Name of the lock.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly name: string;
  }

  /**
   * Mode of lock operations.
   *
   * @enum { number } AsyncLockMode
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enum AsyncLockMode {
    /**
     * Shared lock operation.
     * The operation could reenter in the same thread if this mode is specified. 
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SHARED = 1,
    /**
     * Exclusive lock operation.
     * If this mode is specified, the operation is executed only when the lock is acquired exclusively.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    EXCLUSIVE = 2,
  }

  /**
   * Lock operation's options
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AsyncLockOptions<T> {
    /**
     * Default constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();

    /**
     * If the value is true and lockAsync cannot acquire the lock immediately, the operation is canceled.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isAvailable: boolean;
    /**
     * The object used to abort the async operation. If signal.aborted is true, the callback will not be called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    signal: AbortSignal<T>|null;
    /**
     * Lock operation timeout in milliseconds. If it is greater than zero, lockAsync will reject the resulting promise
     * when the timeout is exceeded.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    timeout: number;
  }

  /**
   * Information about all lock operations on the AsyncLock instance.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AsyncLockState {
    /**
     * Held locks information.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    held: AsyncLockInfo[];
    /**
     * Pending locks information.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pending: AsyncLockInfo[];
  }

  /**
   * Information about a lock.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AsyncLockInfo {
    /**
     * Name of the lock.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    name: string;
    /**
     * Lock operation mode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mode: AsyncLockMode;
    /**
     * lockAsync caller's execution context identifier.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    contextId: number;
  }

  /**
   * Object used to abort an async operation.
   * An instance of this class must be accessed in the same thread where the instance is created.
   * Access to fields of this class from another thread is undefined behaviour.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AbortSignal<T> {
    /**
     * Set to true to abort an operation.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    aborted: boolean;

    /**
     * Reason for the abort. This value will be used to reject the promise returned from lockAsync.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reason: T
  }
}
export default locks;
