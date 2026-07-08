'use static'
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
 * Enumerates the errors codes available for failures in launching an atomic service.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
declare enum FailureCode {
  /**
   * The atomic service cannot be launched due to a system error (for example, a crash in the transition dialog box).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  FAILURE_CODE_SYSTEM_MALFUNCTION = 0,

  /**
   * The user canceled the operation.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  FAILURE_CODE_USER_CANCEL = 1,

  /**
   * The user refused the operation.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  FAILURE_CODE_USER_REFUSE = 2
}

/**
 * Notify the success result of openAtomicService.
 *
 * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnAtomicServiceRequestSuccessFn = (appId: string) => void;

/**
 * Notify the failure result of openAtomicService.
 *
 * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
 * @param { FailureCode } failureCode - Indicates the failure code for open atomic service.
 * @param { string } failureMessage - Indicates the detail failure message for open atomic service.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnAtomicServiceRequestFailureFn = (appId: string, failureCode: FailureCode, failureMessage: string) => void;

/**
 * CompletionHandlerForAtomicService provides two callback functions,
 * [onAtomicServiceRequestSuccess]{@link CompletionHandlerForAtomicService#onAtomicServiceRequestSuccess(appId:
 * string)} and [onAtomicServiceRequestFailure]
 * {@link CompletionHandlerForAtomicService#onAtomicServiceRequestFailure(appId: string,failureCode:
 * FailureCode, failureMessage: string)},
 * to handle the results of successful and failed atomic service launch requests, respectively.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
declare class CompletionHandlerForAtomicService {
  /**
   * Notify the success result of openAtomicService.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAtomicServiceRequestSuccess: OnAtomicServiceRequestSuccessFn;

  /**
   * Notify the failure result of openAtomicService.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAtomicServiceRequestFailure: OnAtomicServiceRequestFailureFn;
}

export { FailureCode };
export default CompletionHandlerForAtomicService;