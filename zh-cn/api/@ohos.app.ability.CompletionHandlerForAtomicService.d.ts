/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * 打开原子化服务失败的特定错误码。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare enum FailureCode {
  /**
   * 表示由于系统错误（如跳转弹框崩溃）而无法打开原子化服务。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  FAILURE_CODE_SYSTEM_MALFUNCTION = 0,

  /**
   * 用户取消。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  FAILURE_CODE_USER_CANCEL = 1,

  /**
   * 用户拒绝。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  FAILURE_CODE_USER_REFUSE = 2
}

/**
 * 打开原子化服务成功时的回调函数。
 *
 * @param { string } appId - 被拉起原子化服务的appId。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnAtomicServiceRequestSuccessFn = (appId: string) => void;

/**
 * 打开原子化服务失败时的回调函数。
 *
 * @param { string } appId - 被拉起原子化服务的appId。
 * @param { FailureCode } failureCode - 失败原因的错误码。
 * @param { string } failureMessage - 失败原因的描述。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnAtomicServiceRequestFailureFn = (appId: string, failureCode: FailureCode, failureMessage: string) => void;

/**
 * CompletionHandlerForAtomicService提供了
 * [onAtomicServiceRequestSuccess]{@link CompletionHandlerForAtomicService#onAtomicServiceRequestSuccess(appId: string)}
 * 和
 * [onAtomicServiceRequestFailure]{@link CompletionHandlerForAtomicService#onAtomicServiceRequestFailure(appId: string, failureCode: FailureCode, failureMessage: string)}
 * 两个回调函数，分别在打开原子化服务成功和失败时回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare class CompletionHandlerForAtomicService {
  /**
   * 打开原子化服务成功时的回调函数。
   *
   * @param { string } appId - 被拉起原子化服务的appId。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onAtomicServiceRequestSuccess(appId: string): void;

  /**
   * 打开原子化服务失败时的回调函数。
   *
   * @param { string } appId - 被拉起原子化服务的appId。
   * @param { FailureCode } failureCode - 失败原因的错误码。
   * @param { string } failureMessage - 失败原因的描述。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onAtomicServiceRequestFailure(appId: string, failureCode: FailureCode, failureMessage: string): void;

  /*** if arkts static */
  /**
   * 打开原子化服务成功时的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAtomicServiceRequestSuccess: OnAtomicServiceRequestSuccessFn;

  /**
   * 打开原子化服务失败时的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAtomicServiceRequestFailure: OnAtomicServiceRequestFailureFn;
  /*** endif */
}

export { FailureCode };
export default CompletionHandlerForAtomicService;