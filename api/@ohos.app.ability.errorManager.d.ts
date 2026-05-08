/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import * as _ErrorObserver from './application/ErrorObserver';
import { LoopObserver as _LoopObserver } from './application/LoopObserver';
/*** endif */

/**
 * The ErrorManager module provides capabilities for registering and unregistering error observers, which are primarily 
 * used to listen for errors such as JavaScript crashes and application freezes.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 24 static
 */
declare namespace errorManager {
  /**
   * Registers an error observer. Once registered, it can capture JavaScript crashes occurring within the application, 
   * which are a type of application crash. When the observer captures such an exception, the application will not exit 
   * automatically. You are advised to add a synchronous exit operation after the callback function completes.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'error' } type - Event type. It is fixed at **'error'**.
   * @param { ErrorObserver } observer - Error observer instance.
   * @returns { number } Unique index of the observer, which corresponds one-to-one with the observer. This value can be
   *     used as the **observerId** parameter in the **errorManager.off** function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function on(type: 'error', observer: ErrorObserver): number;

  /**
   * Unregisters an error observer. This API uses an asynchronous callback to return the result.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'error' } type - Event type. It is fixed at **'error'**.
   * @param { number } observerId - Index of the observer returned by **on()**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function off(type: 'error', observerId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregisters an error observer. This API uses a promise to return the result.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'error' } type - Event type. It is fixed at **'error'**.
   * @param { number } observerId - Index of the observer returned by **on()**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function off(type: 'error', observerId: number): Promise<void>;

  /**
   * Registers an observer for the message processing duration of the main thread. After the registration, the execution
   * time of a message processed by the main thread of the application can be captured.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'loopObserver' } type - Event type. It is fixed at **'loopObserver'**, indicating an observer for the
   *     message processing duration of the main thread.
   * @param { number } timeout - Event execution threshold, in milliseconds. The value must be greater than **0**.
   * @param { LoopObserver } observer - Observer to register.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  function on(type: 'loopObserver', timeout: number, observer: LoopObserver): void;

  /**
   * Unregisters an observer for the message processing duration of the main thread.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'loopObserver' } type - Event type. It is fixed at **'loopObserver'**, indicating an observer for the
   *     message processing duration of the main thread.
   * @param { LoopObserver } observer - Observer to unregister.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  function off(type: 'loopObserver', observer?: LoopObserver): void;

  /**
   * Registers an observer for the promise rejection. After the registration, a rejected promise that is not captured in
   * the current thread of the application can be captured.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'unhandledRejection' } type - Event type. It is fixed at **'unhandledRejection'**, indicating an observer
   *     for the promise rejection.
   * @param { UnhandledRejectionObserver } observer - Observer to register.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'unhandledRejection', observer: UnhandledRejectionObserver): void;

  /**
   * Register unhandled rejection observer.
   *
   * @param { UnhandledRejectionObserver } observer - The unhandled rejection observer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function onUnhandledRejection(observer: UnhandledRejectionObserver): void;

  /**
   * Unregisters an observer for the promise rejection.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   *
   * @param { 'unhandledRejection' } type - Event type. It is fixed at **'unhandledRejection'**, indicating an observer
   *     for the promise rejection.
   * @param { UnhandledRejectionObserver } [observer] - Observer to unregister. You are advised to use this parameter.
   *     If omitted, all observers registered with the same environment through **on** are unregistered by default.
   *     Otherwise, the specified observer is unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'unhandledRejection', observer?: UnhandledRejectionObserver): void;

  /**
   * Unregister unhandled rejection observer.
   *
   * @param { UnhandledRejectionObserver } [observer] - the registered observer
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function offUnhandledRejection(observer?: UnhandledRejectionObserver): void;

  /**
   * Defines the ErrorObserver module.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  export type ErrorObserver = _ErrorObserver.default;
  /**
   * Defines the LoopObserver module. It can be used as a parameter of **errormanager.on** to listen for and handle main
   * thread timeout events in the current application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type LoopObserver = _LoopObserver;
  /**
   * Defines an observer to capture the cause of a rejected promise.
   *
   * @param { Error | any } reason - Generally, the value is of the **Error** type, indicating the reason for rejection.
   * @param { Promise<any> } promise - Rejected promise.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamic
   */
  export type UnhandledRejectionObserver = (reason: Error | any, promise: Promise<any>) => void;

  /**
   * The observer will be called by system when an unhandled rejection occurs.
   *
   * @param { Error | Any } reason - the reason of the rejection, typically of Error type
   * @param { Promise<Any> } promise - the promise that is rejected
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 24 static
   */
  export type UnhandledRejectionObserver = (reason: Error | Any, promise: Promise<Any>) => void;

  /**
   * Registers a rejected promise observer with any thread in the process. Once registered, it can capture a rejected 
   * promise that is not captured in the current thread of the application.
   *
   * @param { 'globalUnhandledRejectionDetected'} type - Event type. It is fixed at
   *     **'globalUnhandledRejectionDetected'**, indicating an observer for the promise rejection.
   * @param { GlobalObserver } observer - Observer to register.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void;

  /**
   * Unregisters a rejected promise observer. After the deregistration, promise exceptions in the process cannot be 
   * listened for.
   * 
   * If the observer passed in is not in the observer queue registered via the **on** API, error code 16300004 is 
   * thrown. Therefore, you are advised to handle this using **try-catch** logic.
   *
   * @param { 'globalUnhandledRejectionDetected'} type - Event type. It is fixed at
   *     **'globalUnhandledRejectionDetected'**, indicating an observer for the promise rejection.
   * @param { GlobalObserver } observer - Observer registered by the **on** API. You are advised to use this parameter.
   *     If omitted, all observers registered with the same environment through **on** are unregistered by default.
   *     Otherwise, the specified observer is unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void;

  /**
   * Defines an exception observer that can be used as an input parameter for 
   * [errorManager.on('globalErrorOccurred')]{@link errorManager.on(type: 'globalErrorOccurred', observer: GlobalObserver)}
   * and 
   * [errorManager.on('globalUnhandledRejectionDetected')]{@link errorManager.on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver)}
   * to monitor event processing on the main thread of the current application.
   *
   * @param { 'GlobalError'} reason - Object related to the exception event name, message, error stack information,
   *     exception thread name, and exception thread type.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  export type GlobalObserver = (reason: GlobalError) => void;

  /**
   * Registers an observer for the main thread freeze event of the application. If the observer is registered multiple 
   * times, only the last one takes effect.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   * 
   * > **NOTE**
   * >
   * > If the callback function runs for more than 1 second, the 
   * > [AppRecovery]{@link @ohos.app.ability.appRecovery:appRecovery} feature may not work. The execution duration can 
   * > be calculated by parsing the time difference between **begin** and **Freeze callback execution completed** in 
   * > HiLogs. If the execution duration exceeds 1 second, you can optimize the callback logic by using methods such as 
   * > asynchronous processing, reducing operations that block other tasks, and optimizing the data structures to reduce
   * > the execution duration.
   *
   * @param { 'freeze' } type - Event type. It is fixed at **'freeze'**, indicating an observer for the freeze event of
   *     the main thread.
   * @param { FreezeObserver } observer - Observer to register.
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
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function onFreeze(observer: FreezeObserver): void;

  /**
   * Registers a global error observer via the **errorManager.on** API within any thread of a process. Once registered, 
   * it can capture exceptions occurring in any thread across the entire process. When the observer captures such an 
   * exception, the application will not exit automatically. You are advised to add a synchronous exit operation after 
   * the callback function completes.
   *
   * @param { 'globalErrorOccurred'} type - Event type. It is fixed at **'globalErrorOccurred'**.
   * @param { GlobalObserver } observer - Customized callback function for exception handling.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function on(type: 'globalErrorOccurred', observer: GlobalObserver): void;

  /**
   * Enumerates the VM instance types.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @atomicservice
   * @since 18 dynamiconly
   */
  export enum InstanceType {

    /**
     * TaskPool VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    TASKPOOL = 2,

    /**
     * Worker VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    WORKER = 1,

    /**
     * Main VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    MAIN = 0,

    /**
     * VM instance created from the local code using 
     * [napi_create_ark_runtime](docroot://reference/native-lib/napi.md#napi_create_ark_runtime).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    CUSTOM = 3
  }

  /**
   * Define the resource types of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export enum ResourceType {  
    /**
     * Indicates that it is an pss resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    PSS_MEMORY = 1,

    /**
     * Indicates that it is a ion resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    ION_MEMORY = 2,

    /**
     * Indicates that it is a ashmem resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    ASHMEM_MEMORY = 3,

    /**
     * Indicates that it is an GPU resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GPU_MEMORY = 4,

    /**
     * Indicates that it is an FD resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FD = 5,

    /**
     * Indicates that it is a thread resource.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    THREAD = 6
  }

  /**
   * Describes the object related to the exception event name, message, error stack information, exception thread name, 
   * and exception thread type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  export interface GlobalError extends Error {

    /**
     * Name of a VM instance.
     * 
     * **NOTE**
     * 
     * Rules for the **instanceName** field in exceptions in the TaskPool thread:
     * 
     * - **globalErrorOccurred** events: identified as "TaskPool Thread + method name".
     * - **globalUnhandledRejectionDetected** events: identified as "TaskPool Thread + task name".
     * - If identified as "TaskPool Thread" only, the exception occurs within an asynchronous callback.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamiconly
     */
    instanceName: string;

    /**
     * Type of the VM instance.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamiconly
     */
    instanceType: InstanceType;
  }

  /**
   * Unregisters an observer for the main thread freeze event of the application.
   * 
   * This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to
   * handle it with try-catch logic.
   * 
   * If the observer passed in does not match the observer registered via the **on** API, error code 16300004 is thrown.
   * Therefore, you are advised to handle this using **try-catch** logic.
   *
   * @param { 'freeze' } type - Event type. It is fixed at **'freeze'**, indicating an observer for the freeze event of
   *     the main thread.
   * @param { FreezeObserver } observer - Observer to unregister. You are advised to use this parameter. If omitted, all
   *     observers registered with the same environment through **on** are unregistered by default. Otherwise, the
   *     specified observer is unregistered.
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
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function offFreeze(observer?: FreezeObserver): void;

  /**
   * Unregisters a global error observer. Once unregistered, global listening cannot be implemented.
   * 
   * If the observer passed in is not in the observer queue registered via the **on** API, error code 16300004 is 
   * thrown. Therefore, you are advised to handle this using **try-catch** logic.
   *
   * @param { 'globalErrorOccurred'} type - Event type. It is fixed at **'globalErrorOccurred'**.
   * @param { GlobalObserver } observer - Observer registered by the **on** API. You are advised to use this parameter.
   *     If omitted, all observers registered with the same environment through **on** are unregistered by default.
   *     Otherwise, the specified observer is unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200001 - If the caller is invalid.
   * @throws { BusinessError } 16300004 - If the observer does not exist
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function off(type: 'globalErrorOccurred', observer?: GlobalObserver): void;

  /**
   * Returns the previously registered handler when a JavaScript crash exception occurs. It can only be used in the main
   * thread.
   * 
   * If an invalid parameter is passed or the API is called from a child thread, an error code is thrown and 
   * **undefined** is returned. You are advised to handle it with try-catch logic.
   * 
   * If the API parameter is empty, subsequently registered handlers are not able to establish a connection with 
   * previously registered handlers, thereby breaking the chain call mechanism.
   *
   * @param { ErrorHandler } [defaultHandler] - Newly registered error handler. The default value is empty.
   * @returns { ErrorHandler } Previously registered error handler.
   * @throws { BusinessError } 16000205 - The API is not called on the main thread.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  function setDefaultErrorHandler(defaultHandler?: ErrorHandler) : ErrorHandler;

  /**
   * Set the default resource usage observer. You can use it to implement chain calls.
   * If an empty observer is set for a certain module, it will cause the call chain to be interrupted.
   * This API must be called on the main thread.
   *
   * @param { ResourceUsageObserver } [defaultObserver] - The default resource usage observer.
   * @returns { ResourceUsageObserver } Returns the original default resource usage observer.
   * @throws { BusinessError } 16000205 - The API is not called on the main thread.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  function setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver;

  /**
   * Set the default freeze observer, This function will be executed right after the callback function registered
   * through errorManager.on is executed. You can use it to implement chain calls instead of errorManager.on.
   * If an empty observer is set for a certain module, it will cause the call chain to be interrupted.
   * This API must be called in the main thread.
   *
   * @param { FreezeObserver } [defaultObserver] - The default freeze observer.
   * @returns { FreezeObserver } - Returns the original default freeze observer.
   * @throws { BusinessError } 16000205 - The API is not called on the main thread.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function setDefaultFreezeObserver(defaultObserver?: FreezeObserver) : FreezeObserver;

  /**
   * The ErrorHandler will be called when the ArkTS runtime throws an exception that is not caught by the user.
   *
   * @param { Error } errObject - Event name, message, and error stack of the exception.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  export type ErrorHandler = (errObject: Error) => void;

  /**
   * Defines an observer for the main thread freeze event of the application. It is used by the application to customize
   * freeze information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 24 static
   */
  export type FreezeObserver = () => void;

  /**
   * The observer will be called by the system when resource usage exceed threshold.
   *
   * @param { ResourceType } resourceType - The type of resource.
   * @param { long } resourceSize - The amount of resources occupied.
   * @param { Record<string, long> } [detailInfo] - Key-value pair of the resource type and its size.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type ResourceUsageObserver = (resourceType: ResourceType, resourceSize: long, detailInfo?: Record<string, long>) => void;
}

export default errorManager;