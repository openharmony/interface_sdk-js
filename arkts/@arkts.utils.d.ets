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
import lang from './@arkts.lang';

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
       *     timeout exceeded.
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

  /**
   * json utils.
   *
   * @namespace json
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  namespace json {
    /**
     * Redefines ISendable for convenience.
     *
     * @typedef { lang.ISendable } ISendable
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type ISendable = lang.ISendable;
    /**
     * Defines JSONValue
     *
     * @extends ISendable
     * @interface JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    interface JSONValue extends ISendable {
    }
    /**
     * Defines value type for JSONArray.
     *
     * @typedef { collections.Array<JSONValue> } JSONArrayType
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type JSONArrayType = collections.Array<JSONValue>;
    /**
     * Defines value type for JSONObject.
     *
     * @typedef { collections.Map<string, JSONValue> } JSONObjectType
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type JSONObjectType = collections.Map<string, JSONValue>;
    /**
     * Defines JSONObject
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONObject implements JSONValue {
      /**
       * Creates an instance of JSONObject.
       * @param { JSONObjectType } value - The object of JSONObject.
       * @throws { BusinessError } 401 - Parameter error. Invalid init value.
       * @throws { BusinessError } 10200012 - The JSONObject's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor(value: JSONObjectType);
      /**
       * Gets the JSONObject.
       * @returns { JSONObjectType } The JSONObject.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): JSONObjectType;
    }
    /**
     * Defines JSONArray
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONArray implements JSONValue {
      /**
       * Creates an instance of JSONArray.
       * @param { JSONArrayType } value - The array of JSONArray.
       * @throws { BusinessError } 401 - Parameter error. Invalid init value.
       * @throws { BusinessError } 10200012 - The JSONArray's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor(value: JSONArrayType);
      /**
       * Gets the JSONArray.
       * @returns { JSONArrayType } The JSONArray.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): JSONArrayType;
    }
    /**
     * Defines JSONString
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONString implements JSONValue {
      /**
       * Creates an instance of JSONString.
       * @param { string } value - The text of JSONString.
       * @throws { BusinessError } 401 - Parameter error. Invalid init value.
       * @throws { BusinessError } 10200012 - The JSONString's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor(value: string);
      /**
       * Gets the JSONString.
       * @returns { string } The JSONString.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): string;
    }
    /**
     * Defines JSONNumber
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONNumber implements JSONValue {
      /**
       * Creates an instance of JSONNumber.
       * @param { number } value - The text of JSONNumber.
       * @throws { BusinessError } 401 - Parameter error. Invalid init value.
       * @throws { BusinessError } 10200012 - The JSONNumber's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor(value: number);
      /**
       * Gets the JSONNumber.
       * @returns { number } The JSONNumber.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): number;
    }
    /**
     * Defines JSONNull
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONNull implements JSONValue {
      /**
       * Creates an instance of JSONNull.
       * @throws { BusinessError } 10200012 - The JSONNull's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor();
      /**
       * Gets the JSONNull.
       * @returns { null } The JSONNull.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): null;
    }
    /**
     * Defines JSONTrue
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONTrue implements JSONValue {
      /**
       * Creates an instance of JSONTrue.
       * @throws { BusinessError } 10200012 - The JSONTrue's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor();
      /**
       * Gets the JSONTrue.
       * @returns { boolean } The JSONTrue, always true.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): boolean;
    }
    /**
     * Defines JSONFalse
     *
     * @implements JSONValue
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Sendable
    class JSONFalse implements JSONValue {
      /**
       * Creates an instance of JSONFalse.
       * @throws { BusinessError } 10200012 - The JSONFalse's constructor cannot be directly invoked.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      constructor();
      /**
       * Gets the JSONFalse.
       * @returns { boolean } The JSONFalse, always false.
       * @throws { BusinessError } 10200011 - The get method cannot be bound.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform
       * @atomicservice
       * @since 12
       */
      get(): boolean;
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
     * @param { ISendable | null | undefined } value - The value to stringify.
     * @returns { string } The JSON string representation of the value.
     * @throws { BusinessError } 401 - Parameter error. Invalid ArkTS value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function stringify(value: ISendable | null | undefined): string;
  }
}
export default utils;
