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
 * Called when the UIExtensionAbility is terminated.
 *
 * @param { AbilityResult } parameter - Result returned when
 *     [terminateSelfWithResult]{@link ./UIExtensionContext:UIExtensionContext#terminateSelfWithResult(parameter:
 *     AbilityResult, callback: AsyncCallback<void>)}
 *      is called to terminate the UIExtensionAbility.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnResultFn = (parameter: AbilityResult) => void;

/**
 * The module describes the callback invoked to return the UIExtensionAbility startup result.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
declare interface AbilityStartCallback {
  /**
   * Called when the UIExtensionAbility fails to start.
   *
   * @param { int } code - Result code returned when the UIExtensionAbility fails to start
   *     <br>The value range is all integers.
   * @param { string } name - Name returned when the UIExtensionAbility fails to start.
   * @param { string } message - Error information returned when the UIExtensionAbility fails to start.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  onError(code: int, name: string, message: string): void;
  
  /**
   * Called when the UIExtensionAbility is terminated.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onResult?: OnResultFn;

  /**
   * Callback invoked when the ability of a specified type is started.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  completionHandler?: CompletionHandlerForAbilityStartCallback;
}

export default AbilityStartCallback;