'use static'
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AbilityResult } from '../ability/abilityResult';
import { CompletionHandlerForAbilityStartCallback } from '../@ohos.app.ability.CompletionHandlerForAbilityStartCallback';

/**
 * 拉起UIExtensionAbility终止时的回调。
 *
 * @param { AbilityResult } parameter -  当调用
   *     [terminateSelfWithResult]{@link ./UIExtensionContext:UIExtensionContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *     方法终止UIExtensionAbility时返回的结果。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnResultFn = (parameter: AbilityResult) => void;

/**
 * 定义拉起UIExtensionAbility执行结果的回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
declare interface AbilityStartCallback {
  /**
   * 拉起UIExtensionAbility执行失败的回调。
   *
   * @param { int } code - 拉起UIExtensionAbility执行失败时返回的结果码。
   * @param { string } name - 拉起UIExtensionAbility执行失败时返回的名称。
   * @param { string } message - 拉起UIExtensionAbility执行失败时返回的错误信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  onError(code: int, name: string, message: string): void;
  
  /**
   * 拉起UIExtensionAbility终止时的回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onResult?: OnResultFn;

  /**
   * 用于返回拉起指定类型的Ability组件的回调结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  completionHandler?: CompletionHandlerForAbilityStartCallback;
}

export default AbilityStartCallback;