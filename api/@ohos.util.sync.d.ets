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
   * Class to execute an asynchronous operation under lock.
   * AsyncLock may be anonymous of named. Anonymous locks has unique identifier in 'id' property.
   * Zero id is the invalid id. For named locks the field 'id' should be 0.
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
     * Find or create an instance of AsyncLock with the specified name.
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
     * If id is not specified the method return information about all locks.
     *
     * @param { number|string } id - name of the lock.
     * @returns { AsyncLockState[] } Returns an array of AsyncLockState.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static query(id?: number|string): AsyncLockState[];

    /**
     * Perform an operation under lock.
     * The method acquire the lock first, then calls the callback and after releases the lock.
     * The callback may be called asynchronously but it always called in the same thread where lockAsync is called.
     *
     * @param { Function<T> } callback - callback to call when the lock gets acquired.
     * @param { AsyncLockMode } mode - mode of the lock operation.
     * @param { AsyncLockOptions<U> } options - lock operation options.
     * @returns { Promise<T|U> } Promise which will be resolved after the callback gets executed.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lockAsync<T, U>(callback: Function<T>, mode?: AsyncLockMode, options?: AsyncLockOptions<U>): Promise<T|U>;

    /**
     * For named locks contains the lock's name. For anonymous locks the field is empty.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly name: string;
    /**
     * For named locks the field contains 0. For anonymous locks the field contains unique identifier.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly id: number;
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
     * In shared mode lockAsync calls the callback if the lock is already acquired in the shared mode and
     * by the same thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SHARED = 1,
    /**
     * Exclusive lock operation.
     * In exclusive mode the callback is called only after another callback release the lock.
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
     * If the value is true and lockAsync cannot acquire the lock immediately the operation is canceled.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isAvailable?: boolean;
    /**
     * An object used to abort the async operation. If signal.aborted is true the callback will not be called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    signal?: AbortSignal<T>;
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
     * Array of lock operations which held the lock.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    held: AsyncLockInfo[];
    /**
     * Array of lock operations waiting for the lock.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pending: AsyncLockInfo[];
  }

  /**
   * Information about a lock and a lock operation.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AsyncLockInfo {
    /**
     * Identifier of the lock if the lock is anonymous. For named locks this field is undefined
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id?: number;
    /**
     * Name of the named lock. For anonymous locks this field is undefined.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    name?: string;
    /**
     * Lock operation's mode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mode: AsyncLockMode;
    /**
     * lockAsync caller thread's identifier.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    threadId: number;
  }

  /**
   * Object to abort an async operation.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  class AbortSignal<T> {
    /**
     * Set to true to abort an operation
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    aborted: boolean;

    /**
     * Reason of the abort. This value will be used to reject the promise returned from lockAsync.
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
