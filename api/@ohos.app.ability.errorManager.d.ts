/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';

import * as _ErrorObserver from './application/ErrorObserver';
import { LoopObserver as _LoopObserver } from './application/LoopObserver';

/**
 * This module provides the function of error manager.
 *
 * @namespace errorManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * This module provides the function of error manager.
 *
 * @namespace errorManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 11
 */
/**
 * This module provides the function of error manager.
 *
 * @namespace errorManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace errorManager {
  /**
   * Register error observer.
   *
   * @param { 'error' } type - error.
   * @param { ErrorObserver } observer - The error observer.
   * @returns { number } Returns the number code of the observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - Id does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Register error observer.
   *
   * @param { 'error' } type - error.
   * @param { ErrorObserver } observer - The error observer.
   * @returns { number } Returns the number code of the observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Register error observer.
   *
   * @param { 'error' } type - error.
   * @param { ErrorObserver } observer - The error observer.
   * @returns { number } Returns the number code of the observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function on(type: 'error', observer: ErrorObserver): number;

  /**
   * Register error observer.
   *
   * @param { ErrorObserver } observer - The error observer.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onError(observer: ErrorObserver): int;

  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - Id does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  function off(type: 'error', observerId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregister error observer.
   *
   * @param { int } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offErrorWithCallback(observerId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - Id does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Unregister error observer.
   *
   * @param { 'error' } type - error.
   * @param { number } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: 'error', observerId: number): Promise<void>;

  /**
   * Unregister error observer.
   *
   * @param { int } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offError(observerId: int): Promise<void>;

  /**
   * Register loop observer. This function can only by called from main thread,
   * and if call this function multiple times, the last
   * modification will overwrite the previous one.
   *
   * @param { 'loopObserver' } type - loopObserver.
   * @param { number } timeout - Indicates timeout(ms) value of loop observer.
   * @param { LoopObserver } observer - The loop observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Register loop observer. This function can only by called from main thread,
   * and if call this function multiple times, the last
   * modification will overwrite the previous one.
   *
   * @param { 'loopObserver' } type - loopObserver.
   * @param { number } timeout - Indicates timeout(ms) value of loop observer.
   * @param { LoopObserver } observer - The loop observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function on(type: 'loopObserver', timeout: number, observer: LoopObserver): void;

  /**
   * Register loop observer. This function can only by called from main thread,
   * and if call this function multiple times, the last
   * modification will overwrite the previous one.
   *
   * @param { int } timeout - Indicates timeout(ms) value of loop observer.
   * @param { LoopObserver } observer - The loop observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onLoopObserver(timeout: int, observer: LoopObserver): void;

  /**
   * Unregisters the observer for message execution timeouts of the main thread. This function can be called only in
   *     the main thread.
   *
   * @param { 'loopObserver' } type Type of the observer object.
   * @param { LoopObserver } observer Observer object.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Unregisters the observer for message execution timeouts of the main thread. This function can be called only in
   *     the main thread.
   *
   * @param { 'loopObserver' } type Type of the observer object.
   * @param { LoopObserver } observer Observer object.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: 'loopObserver', observer?: LoopObserver): void;

  /**
   * Unregister loop observer. This function can only by called from main thread.
   *
   * @param { LoopObserver } [observer] - The loop observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offLoopObserver(observer?: LoopObserver): void;

  /**
   * Register unhandled rejection observer.
   *
   * @param { 'unhandledRejection' } type - 'unhandledRejection'.
   * @param { UnhandledRejectionObserver } observer - The unhandled rejection observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Register unhandled rejection observer.
   *
   * @param { 'unhandledRejection' } type - 'unhandledRejection'.
   * @param { UnhandledRejectionObserver } observer - The unhandled rejection observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function on(type: 'unhandledRejection', observer: UnhandledRejectionObserver): void;

  /**
   * Register unhandled rejection observer.
   *
   * @param { UnhandledRejectionObserver } observer - The unhandled rejection observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onUnhandledRejection(observer: UnhandledRejectionObserver): void;

  /**
   * Unregister unhandled rejection observer.
   *
   * @param { 'unhandledRejection' } type - error.
   * @param { UnhandledRejectionObserver } [observer]  - the registered observer
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Unregister unhandled rejection observer.
   *
   * @param { 'unhandledRejection' } type - error.
   * @param { UnhandledRejectionObserver } [observer]  - the registered observer
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: 'unhandledRejection', observer?: UnhandledRejectionObserver): void;

  /**
   * Unregister unhandled rejection observer.
   *
   * @param { UnhandledRejectionObserver } [observer] - the registered observer
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offUnhandledRejection(observer?: UnhandledRejectionObserver): void;

  /**
   * The observer will be called by system when an error occurs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * The observer will be called by system when an error occurs.
   *
   * @typedef { _ErrorObserver.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The observer will be called by system when an error occurs.
   *
   * @typedef { _ErrorObserver.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export type ErrorObserver = _ErrorObserver.default;
  /**
   * The observer will be called when application main thread execute timeout.
   *
   * @typedef { _LoopObserver }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The observer will be called when application main thread execute timeout.
   *
   * @typedef { _LoopObserver }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export type LoopObserver = _LoopObserver;
  /**
   * The observer will be called by system when an unhandled rejection occurs.
   *
   * @typedef { function }
   * { Error | any } reason - the reason of the rejection, typically of Error type
   * { Promise<any> } promise - the promise that is rejected
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The observer will be called by system when an unhandled rejection occurs.
   *
   * @typedef { function }
   * { Error | any } reason - the reason of the rejection, typically of Error type
   * { Promise<any> } promise - the promise that is rejected
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export type UnhandledRejectionObserver = (reason: Error | any, promise: Promise<any>) => void;

  /**
   * Register a rejection observer for all VM instances include worker and taskpool.
   * @param { 'globalUnhandledRejectionDetected'} type - globalUnhandledRejectionDetected.
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void;

  /**
   * Register a rejection observer for all VM instances include worker and taskpool.
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onGlobalUnhandledRejectionDetected(observer: GlobalObserver): void;

  /**
   * Unregister the rejection observer for all VM instance include worker and taskpool.
   * @param { 'globalUnhandledRejectionDetected'} type - globalUnhandledRejectionDetected.
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void;

  /**
   * Unregister the rejection observer for all VM instance include worker and taskpool.
   * @param { GlobalObserver } [observer] - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offGlobalUnhandledRejectionDetected(observer?: GlobalObserver): void;

  /**
   * The observer will be called by system when an error or unhandled rejection occurs
   * from all VM instances include worker and taskpool.
   * @typedef { function }
   * { GlobalError } reason - the reason of the error or rejection.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type GlobalObserver = (reason: GlobalError) => void;

  /**
   * Register an observer for freeze event.
   * This function can only be called from main thread.
   * Please note that each process only supports registering one observer.
   * If you register multiple times, the later one will overwrite the previous one.
   *
   * @param { 'freeze' } type - 'freeze'.
   * @param { FreezeObserver } observer - The freeze event observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'freeze', observer: FreezeObserver): void;

  /**
   * Register an observer for freeze event.
   * This function can only be called from main thread.
   * Please note that each process only supports registering one observer.
   * If you register multiple times, the later one will overwrite the previous one.
   *
   * @param { FreezeObserver } observer - The freeze event observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onFreeze(observer: FreezeObserver): void;

  /**
   * Register an error observer for all VM instances include worker and taskpool.
   * @param { 'globalErrorOccurred'} type - globalErrorOccurred
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'globalErrorOccurred', observer: GlobalObserver): void;

  /**
   * Register an error observer for all VM instances include worker and taskpool.
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onGlobalErrorOccurred(observer: GlobalObserver): void;

  /**
   * Define the instance type of VM.
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum InstanceType {

    /**
     * Indicates it is the taskpool VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TASKPOOL = 2,

    /**
     * Indicates it is the worker VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    WORKER = 1,

    /**
     * Indicates it is the main VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    MAIN = 0,

    /**
     * Indicates it is a VM instance created by napi_create_ark_runtime from native code by user.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    CUSTOM = 3
  }

  /**
   * Defines GlobalError.
   *
   * @extends Error
   * @typedef GlobalError
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GlobalError extends Error {

    /**
     * Define the instance name of VM.
     * @type { string } instanceName
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    instanceName: string;

    /**
     * Define the instance type of VM.
     * @type { InstanceType } instanceType
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    instanceType: InstanceType;
  }

  /**
   * Unregister the observer for freeze event.
   * This function can only be called from main thread.
   *
   * @param { 'freeze' } type - 'freeze'.
   * @param { FreezeObserver } observer - The freeze event observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'freeze', observer?: FreezeObserver): void;

  /**
   * Unregister the observer for freeze event.
   * This function can only be called from main thread.
   *
   * @param { FreezeObserver } [observer] - The freeze event observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offFreeze(observer?: FreezeObserver): void;

  /**
   * Unregister the error observer for all VM instance include worker and taskpool.
   * @param { 'globalErrorOccurred'} type - globalErrorOccurred.
   * @param { GlobalObserver } observer - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'globalErrorOccurred', observer?: GlobalObserver): void;

  /**
   * Unregister the error observer for all VM instance include worker and taskpool.
   * @param { GlobalObserver } [observer] - the global error observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offGlobalErrorOccurred(observer?: GlobalObserver): void;

  /**
   * Set the default error handler, This function will be executed right after the callback function registered 
   * through errorManager.on is executed. You can use it to implement chain calls instead of errorManager.on.
   * This API must be called in the main thread.
   *
   * @param { ErrorHandler } [defaultHandler] - the default error handler.
   * @returns { ErrorHandler } return original default error handler.
   * @throws { BusinessError } 16000205 - The API is not called in the main thread.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setDefaultErrorHandler(defaultHandler?: ErrorHandler) : ErrorHandler;

  /**
   * ErrorHandler will be called when ArkTS runtime throws an exception which doesn't caught by user.
   *
   * @typedef { function }
   * @param { Error } errObject - the error object about the exception.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  export type ErrorHandler = (errObject: Error) => void;

  /**
   * The observer will be called by system when freeze happens.
   *
   * @typedef { function }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type FreezeObserver = () => void;
}

export default errorManager;
