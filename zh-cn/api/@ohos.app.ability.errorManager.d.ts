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
 * ErrorManager模块提供对错误观测器的注册和注销的能力，主要是观测应用发生js crash和appfreeze等错误。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 24 static
 */
declare namespace errorManager {
  /**
   * 注册错误观测器。注册后可以捕获到应用产生的js crash，属于应用崩溃的一种。观测器捕获到该异常时应用不退出，建议在回调函数执行完后，增加同步退出操作。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'error' } type - 填写'error'，表示错误观测器。
   * @param { ErrorObserver } observer - 错误观测器。
   * @returns { number } 观测器的索引值，与观测器一一对应。可用于`errorManager.off`函数中的`observerId`参数。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16000003 - 指定的ID不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function on(type: 'error', observer: ErrorObserver): number;

  /**
   * 注销错误观测器。使用callback异步返回。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'error' } type - 填写'error'，表示错误观测器。
   * @param { number } observerId - 由on方法返回的观测器的index值。
   * @param { AsyncCallback<void> } callback - 表示指定的回调方法。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16000003 - 指定的ID不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function off(type: 'error', observerId: number, callback: AsyncCallback<void>): void;

  /**
   * 注销错误观测器。使用Promise异步返回。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'error' } type - 填写'error'，表示错误观测器。
   * @param { number } observerId - 由on方法返回的观测器的index值。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16000003 - 指定的ID不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function off(type: 'error', observerId: number): Promise<void>;

  /**
   * 注册主线程消息处理耗时监听器。注册后可以捕获到应用主线程处理消息的具体执行时间。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'loopObserver' } type - 填写'loopObserver'，表示注册主线程消息处理耗时监听器。
   * @param { number } timeout - 表示事件执行阈值（单位：毫秒）。 阈值必须大于0。
   * @param { LoopObserver } observer - 注册主线程消息处理耗时监听器。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  function on(type: 'loopObserver', timeout: number, observer: LoopObserver): void;

  /**
   * 注销主线程消息处理监听器。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'loopObserver' } type - 填写'loopObserver'，表示应用主线程观测器。
   * @param { LoopObserver } observer - 应用主线程观测器标志。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 请在主线程中调用。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  function off(type: 'loopObserver', observer?: LoopObserver): void;

  /**
   * 注册被拒绝promise监听器。注册后可以捕获到当前线程中未被捕获到的promise rejection。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'unhandledRejection' } type - 填写'unhandledRejection'，表示注册被拒绝promise监听器。
   * @param { UnhandledRejectionObserver } observer - 注册被拒绝promise监听器。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 请在主线程中调用。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'unhandledRejection', observer: UnhandledRejectionObserver): void;

  /**
   * Register unhandled rejection observer.
   *
   * @param { UnhandledRejectionObserver } observer - 注册被拒绝promise监听器。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function onUnhandledRejection(observer: UnhandledRejectionObserver): void;

  /**
   * 注销被拒绝promise监听器。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'unhandledRejection' } type - 填写'unhandledRejection'，表示注册被拒绝promise监听器。
   * @param { UnhandledRejectionObserver } [observer] - 注册了被拒绝promise监听器。建议使用该参数，缺省时默认清除所有通过on注册的相同env的observer，否则删除指定
   *     observer。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 请在主线程中调用。
   * @throws { BusinessError } 16300004 - 观测器不存在。
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
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function offUnhandledRejection(observer?: UnhandledRejectionObserver): void;

  /**
   * ErrorObserver模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  export type ErrorObserver = _ErrorObserver.default;
  /**
   * LoopObserver模块。定义异常监听，可作为 `errormanager.on` 函数的参数，监听并处理当前应用主线程超时的事件。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type LoopObserver = _LoopObserver;
  /**
   * 定义异常监听，用于捕获Promise异步操作失败的原因。
   *
   * @param { Error | any } reason - 通常是`Error`类型，表示被拒绝的理由。
   * @param { Promise<any> } promise - 被拒绝的promise。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamic
   */
  export type UnhandledRejectionObserver = (reason: Error | any, promise: Promise<any>) => void;

  /**
   * 当发生未处理的拒绝时，系统将调用此观测器。
   *
   * @param { Error | Any } reason - 拒绝的原因，通常为Error类型
   * @param { Promise<Any> } promise - 被拒绝的Promise
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 24 static
   */
  export type UnhandledRejectionObserver = (reason: Error | Any, promise: Promise<Any>) => void;

  /**
   * 在进程中任意线程注册被拒绝promise监听器，注册后可以捕获到当前进程中未被捕获到的promise rejection。
   *
   * @param { 'globalUnhandledRejectionDetected'} type - 填写'globalUnhandledRejectionDetected'，表示注册被拒绝promise监听器。
   * @param { GlobalObserver } observer - 注册被拒绝promise的callback。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void;

  /**
   * 注销被拒绝promise监听器，注销后无法监听进程中的promise异常。
   * 
   * 如果传入的回调不在通过on方法注册的回调队列中，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'globalUnhandledRejectionDetected'} type - 填写'globalUnhandledRejectionDetected'，表示注册被拒绝promise监听器。
   * @param { GlobalObserver } observer - 由on接口注册的被拒绝promise的callback。建议使用该参数，缺省时默认清除所有通过on注册的相同env的callback，否则删除指定
   *     callback。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void;

  /**
   * 定义异常监听，可以作为
   * [errorManager.on('globalErrorOccurred')]{@link errorManager.on(type: 'globalErrorOccurred', observer: GlobalObserver)}
   * 和
   * [errorManager.on('globalUnhandledRejectionDetected')]{@link errorManager.on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver)}
   * 的入参监听当前应用主线程事件处理事件。
   *
   * @param { 'GlobalError'} reason - 有关异常事件名字、消息、错误堆栈信息、异常线程名称和类型的对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  export type GlobalObserver = (reason: GlobalError) => void;

  /**
   * 注册应用主线程freeze监听。多次注册情况下，取最后一次注册的结果。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   * 
   * > **注意**：
   * >
   * > 如果该回调函数执行时间超过1s，可能导致[AppRecovery]{@link @ohos.app.ability.appRecovery:appRecovery}功能不可用。通过解析hilog日志中的begin与Freeze
   * > callback execution completed两者的时间差可以计算回调函数执行时长，如果超过1秒，可以尝试采用异步处理、减少阻塞操作、优化数据结构等方法优化回调逻辑，降低执行时长。
   *
   * @param { 'freeze' } type - 填写'freeze'，表示应用主线程freeze观测器。
   * @param { FreezeObserver } observer - 由on接口注册的freeze监听的callback。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'freeze', observer: FreezeObserver): void;

  /**
   * 注册冻屏事件观测器。
   * 此函数只能在主线程中调用。
   * 请注意，每个进程只支持注册一个观测器。
   * 如果多次注册，后注册的将覆盖之前的。
   *
   * @param { FreezeObserver } observer - 应用主线程freeze观测器。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function onFreeze(observer: FreezeObserver): void;

  /**
   * 在进程中的任意线程中注册 `errormanager.on` 接口，监听整个进程中任意线程的异常。观测器捕获到该异常时应用不退出，建议在回调函数执行完后，增加同步退出操作。
   *
   * @param { 'globalErrorOccurred'} type - 填写'globalErrorOccurred'，表示错误观测器。
   * @param { GlobalObserver } observer - 自定义异常处理回调函数。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function on(type: 'globalErrorOccurred', observer: GlobalObserver): void;

  /**
   * 虚拟机的实例类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @atomicservice
   * @since 18 dynamiconly
   */
  export enum InstanceType {

    /**
     * 表示任务池虚拟机实例。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    TASKPOOL = 2,

    /**
     * 表示工作虚拟机实例。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    WORKER = 1,

    /**
     * 表示主虚拟机实例。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    MAIN = 0,

    /**
     * 表示用户通过[napi_create_ark_runtime](docroot://reference/native-lib/napi.md#napi_create_ark_runtime)从本机代码创建的虚拟机实例。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @atomicservice
     * @since 18 dynamiconly
     */
    CUSTOM = 3
  }

  /**
   * 应用资源超基线的类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export enum ResourceType {  
    /**
     * 表示应用当前超基线的资源是PSS的内存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    PSS_MEMORY = 1,

    /**
     * 表示应用当前超基线的资源是ION的内存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    ION_MEMORY = 2,

    /**
     * 表示应用当前超基线的资源是ASHMEM的内存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    ASHMEM_MEMORY = 3,

    /**
     * 表示应用当前超基线的资源是GPU的内存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GPU_MEMORY = 4,

    /**
     * 表示应用当前超基线的资源是FD的数量。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FD = 5,

    /**
     * 表示应用当前超基线的资源是THREAD的数量。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    THREAD = 6
  }

  /**
   * 有关异常事件名字、消息、错误堆栈信息、异常线程名称和类型的对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  export interface GlobalError extends Error {

    /**
     * 表示虚拟机实例名称。
     * 
     * **说明**：
     * 
     * TaskPool线程中异常的instanceName标识规则：
     * 
     * - globalErrorOccurred：标识为“TaskPool Thread + 方法名”；
     * - globalUnhandledRejectionDetected：标识为“TaskPool Thread + 任务名”；
     * - 若仅标识为“TaskPool Thread”，则表明异常源于异步回调内部。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamiconly
     */
    instanceName: string;

    /**
     * 表示虚拟机的实例类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 18 dynamiconly
     */
    instanceType: InstanceType;
  }

  /**
   * 取消之前注册的应用主线程freeze监听。
   * 
   * 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。
   * 
   * 如果传入的回调与通过on方法注册回调不一致，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'freeze' } type - 填写'freeze'，表示应用主线程freeze观测器。
   * @param { FreezeObserver } observer - 由on接口注册的freeze监听的callback。建议使用该参数，如果参数不填会直接清空callback，否则删除指定的callback。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'freeze', observer?: FreezeObserver): void;

  /**
   * 注销冻屏事件观测器。
   * 此函数只能在主线程中调用。
   *
   * @param { FreezeObserver } [observer] - 冻屏事件观测器。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 24 static
   */
  function offFreeze(observer?: FreezeObserver): void;

  /**
   * 注销错误观测器，注销之前注册在同一线程的callback全局监听。
   * 
   * 如果传入的回调不在通过on方法注册的回调队列中，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。
   *
   * @param { 'globalErrorOccurred'} type - 填写'globalErrorOccurred'，表示错误观测器。
   * @param { GlobalObserver } observer - 由on方法注册的callback。建议使用该参数，缺省时默认清除所有通过on注册的相同env的callback，否则删除指定callback。
   * @throws { BusinessError } 401 - 参数错误。可能的原因：1. 必填参数未填写；
   *     2. 参数类型不正确；3. 参数校验失败。
   * @throws { BusinessError } 16200001 - 调用者无效。
   * @throws { BusinessError } 16300004 - 观测器不存在。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamiconly
   */
  function off(type: 'globalErrorOccurred', observer?: GlobalObserver): void;

  /**
   * 发生JS_CRASH异常时，支持链式回调，返回上一次注册的处理器，仅限主线程调用。
   * 
   * 如果传入非法参数或在子线程调用，将抛出错误码并返回undefined，因此建议使用try-catch逻辑进行处理。
   * 
   * 若接口参数为空，后续注册的处理器将无法与前序已注册的处理器建立关联，从而中断链式调用。
   *
   * @param { ErrorHandler } [defaultHandler] - 新注册的错误处理器，缺省时默认值为空。
   * @returns { ErrorHandler } 返回上一次注册的错误处理器。
   * @throws { BusinessError } 16000205 - API未在主线程中调用。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  function setDefaultErrorHandler(defaultHandler?: ErrorHandler) : ErrorHandler;

  /**
   * 设置资源占用观察者，应用资源超基线时，支持链式回调，返回上一次注册的资源占用观察者，仅限主线程调用。
   * 
   * 如果传入非法参数或在子线程调用，将抛出错误码并返回undefined，因此建议使用try-catch逻辑进行处理。
   * 
   * 若接口参数为空，后续注册的观察者将无法与前序已注册的观察者建立关联，从而中断链式调用。
   *
   * @param { ResourceUsageObserver } [defaultObserver] - 新注册的资源观察者，默认值为空。
   * @returns { ResourceUsageObserver } 返回上一次注册的资源观察者。
   * @throws { BusinessError } 16000205 - API未在主线程中调用。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  function setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver;

  /**
   * 设置默认冻屏观测器。此函数将在通过errorManager.on注册的回调函数执行后立即执行。
   * 可用于替代errorManager.on实现链式调用。
   * 如果为某个模块设置空观测器，将导致调用链中断。
   *
   * 此API必须在主线程中调用。
   *
   * @param { FreezeObserver } [defaultObserver] - 默认冻屏观测器。
   * @returns { FreezeObserver } - 返回原来的默认冻屏观测器。
   * @throws { BusinessError } 16000205 - API未在主线程中调用。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function setDefaultFreezeObserver(defaultObserver?: FreezeObserver) : FreezeObserver;

  /**
   * 当ArkTS运行时抛出用户未捕获异常时，将调用ErrorHandler。
   *
   * @param { Error } errObject - 有关异常事件名字、消息、错误堆栈信息的对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  export type ErrorHandler = (errObject: Error) => void;

  /**
   * 定义应用主线程freeze回调，用于应用自定义添加freeze信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 24 static
   */
  export type FreezeObserver = () => void;

  /**
   * 定义应用资源使用情况的观察者回调函数，作为
   * [errorManager.setDefaultResourceUsageObserver]{@link errorManager.setDefaultResourceUsageObserver}的入参，用于监听各类资源占用变化，
   * 并支持应用执行自定义资源处理逻辑。
   *
   * @param { ResourceType } resourceType - 表示应用资源超基线的类型。
   * @param { long } resourceSize - 表示应用资源超基线的资源使用量。
   * @param { Record<string, long> } [detailInfo] - 表示应用资源超基线资源使用量的细分项字典。<br>**说明**：仅在resourceType为PSS_MEMORY时存在，为其他类型或缺
   *     省时为空；<br>key为小写内存类型，value为对应细分项资源大小；<br>细分项的key包含arkts、native、ion、gpu、ashmem和other。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type ResourceUsageObserver = (resourceType: ResourceType, resourceSize: long, detailInfo?: Record<string, long>) => void;
}

export default errorManager;