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
 * @file Defines the utils for ArkTS
 * @kit ArkTS
 */

import collections from './@arkts.collections';

/**
 * @namespace utils
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
declare namespace utils {
  /**
   * Asynchronous lock.
   *
   * @namespace locks
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  namespace locks {
    /**
     * Type of callback for asyncLock operation.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type AsyncLockCallback<T> = () => T | Promise<T>;

    /**
     * Class to execute an asynchronous operation under lock.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
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
       * @param { AsyncLockCallback<T> } callback - function to call when the lock gets acquired.
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
       * @param { AsyncLockCallback<T> } callback - function to call when the lock gets acquired.
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
       * The error message, in this case, will contain the held and waited locks information and possible deadlock
       * warnings.
       *
       * @param { AsyncLockCallback<T> } callback - function to call when the lock gets acquired.
       * @param { AsyncLockMode } mode - mode of the lock operation.
       * @param { AsyncLockOptions<U> } options - lock operation options.
       * @returns { Promise<T | U> } Promise that will be resolved after the callback gets executed or rejected in case
       * timeout exceeded.
       * @throws { BusinessError } 401 - The input parameters are invalid.
       * @throws { BusinessError } 10200030 - No such lock.
       * @throws { BusinessError } 10200031 - Timeout exceeded.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      lockAsync<T, U>(callback: AsyncLockCallback<T>, mode: AsyncLockMode,
        options: AsyncLockOptions<U>): Promise<T | U>;

      /**
       * Name of the lock.
       *
       * @type { string }
       * @readonly
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
       * @type { boolean }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isAvailable: boolean;
      /**
       * The object used to abort the async operation. If signal.aborted is true, the callback will not be called.
       *
       * @type { AbortSignal<T> | null }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      signal: AbortSignal<T> | null;
      /**
       * Lock operation timeout in milliseconds. If it is greater than zero, lockAsync will reject the resulting promise
       * when the timeout is exceeded.
       *
       * @type { number }
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
       * @type { AsyncLockInfo[] }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      held: AsyncLockInfo[];
      /**
       * Pending locks information.
       *
       * @type { AsyncLockInfo[] }
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
       * @type { string }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      name: string;
      /**
       * Lock operation mode.
       *
       * @type { AsyncLockMode }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      mode: AsyncLockMode;
      /**
       * lockAsync caller's execution context identifier.
       *
       * @type { number }
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
       * @type { boolean }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      aborted: boolean;

      /**
       * Reason for the abort. This value will be used to reject the promise returned from lockAsync.
       *
       * @type { T }
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      reason: T
    }
  }

  namespace json {
    /**
     * Define JSONObject
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type JSONObject = collections.Map<string, JSONValue>;
    /**
     * Define JSONArray
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type JSONArray = collections.Array<JSONValue>;
    /**
     * Represents a JSON value.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONValue {
      /**
       * Default constructor. Create a JSONValue to represent null.
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor();
      /**
       * Converts the JSON value to a JSONObject.
       * @returns { JSONObject } The JSONObject representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toJSONObject method cannot be bound.
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not JSONObject.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */    
      toJSONObject(): JSONObject;
      /**
       * Checks whether the JSON value is a JSONObject.
       * @returns { boolean } True if the JSON value is a JSONObject, otherwise false.
       * @throws { BusinessError } 10200011 - The isJSONObject method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isJSONObject(): boolean;
      /**
       * Converts the JSON value to a JSONArray.
       * @returns { JSONArray } The JSONArray representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toJSONArray method cannot be bound.
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not JSONArray.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      toJSONArray(): JSONArray;
      /**
       * Checks whether the JSON value is a JSONArray.
       * @returns { boolean } True if the JSON value is a JSONArray, otherwise false.
       * @throws { BusinessError } 10200011 - The isJSONArray method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isJSONArray(): boolean;
      /**
       * Converts the JSON value to a string.
       * @returns { string } The string representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toString method cannot be bound.
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not string.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      toString(): string;
      /**
       * Checks whether the JSON value is a string.
       * @returns { boolean } True if the JSON value is a string, otherwise false.
       * @throws { BusinessError } 10200011 - The isString method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isString(): boolean;
      /**
       * Converts the JSON value to a number.
       * @returns { number } The number representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toNumber method cannot be bound.
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not number.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      toNumber(): number;
      /**
       * Checks whether the JSON value is a number.
       * @returns { boolean } True if the JSON value is a number, otherwise false.
       * @throws { BusinessError } 10200011 - The isNumber method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isNumber(): boolean;
      /**
       * Converts the JSON value to a boolean.
       * @returns {boolean} The boolean representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toBoolean method cannot be bound.
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not boolean.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      toBoolean(): boolean;
      /**
       * Checks whether the JSON value is a boolean.
       * @returns { boolean } True if the JSON value is a boolean, otherwise false.
       * @throws { BusinessError } 10200011 - The isBoolean method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isBoolean(): boolean;
      /**
       * Converts the JSON value to null.
       * @returns { null } The null representation of the JSON value.
       * @throws { BusinessError } 10200011 - The toNull method cannot be bound. 
       * @throws { BusinessError } 10200101 - TypeError. JSONValue is not null.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      toNull(): null;
      /**
       * Checks whether the JSON value is null.
       * @returns { boolean } True if the JSON value is null, otherwise false.
       * @throws { BusinessError } 10200011 - The isNull method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      isNull(): boolean;
    }
    /**
     * Converts a JavaScript Object Notation (JSON) string into a JSONValue.
     *
     * @param { string } text - A valid JSON string.
     * @returns { JSONValue } Return a JSONValue.
     * @throws { BusinessError } 401 - Parameter error. Invalid JSON string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function parse(text: string): JSONValue;
    /**
     * Converts an ArkTS value to a JavaScript Object Notation (JSON) string.
     *
     * @param { JSONValue } value - The JSONValue to stringify.
     * @returns { string } The JSON string representation of the value.
     * @throws { BusinessError } 401 - Parameter error. Invalid JSONValue.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function stringify(value: JSONValue): string;
  }
}
export default utils;
