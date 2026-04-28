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
 * 拉起指定类型的Ability组件成功时的回调函数类型。
 *
 * @param { string } name - 被拉起Ability组件或系统操作的名称。
 *     
 *     Ability组件名称采用'[bundleName]#[moduleName]#[abilityName]'格式拼接。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 21 dynamic
 * @since 23 static
 */
export type OnRequestSuccessFn = (name: string) => void;

/**
 * 拉起指定类型的Ability组件失败时的回调函数类型。
 *
 * @param { string } name - 被拉起Ability组件或系统操作的名称。
 *     Ability组件名称采用'[bundleName]#[moduleName]#[abilityName]'格式拼接。如果用户自动取消拉起，name为空。
 * @param { AbilityStartFailureCode } failureCode - 失败原因的错误码。
 * @param { string } failureMessage - 失败原因的描述。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 21 dynamic
 * @since 23 static
 */
export type OnRequestFailureFn = (name: string, failureCode: AbilityStartFailureCode, failureMessage: string) => void;

/**
 * CompletionHandlerForAbilityStartCallback提供了onRequestSuccess和onRequestFailure两个回调函数属性，分别在拉起指定类型的Ability组件成功和失败时回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 21 dynamic
 * @since 23 static
 */
export class CompletionHandlerForAbilityStartCallback {
  /**
   * 拉起指定类型的Ability组件成功时的回调函数。
   * 
   * 从API version 21开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  onRequestSuccess?: OnRequestSuccessFn;

  /**
   * 拉起指定类型的Ability组件失败时的回调函数。 
   * 
   * 从API version 21开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  onRequestFailure?: OnRequestFailureFn;
}

/**
 * 拉起指定类型的Ability组件失败的特定错误码。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 21 dynamic
 * @since 23 static
 */
export enum AbilityStartFailureCode {
  /**
   * 表示由于系统错误（如跳转弹框崩溃）而无法拉起Ability组件。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  FAILURE_CODE_SYSTEM_MALFUNCTION = 0,

  /**
   * 用户取消。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  FAILURE_CODE_USER_CANCEL = 1
}