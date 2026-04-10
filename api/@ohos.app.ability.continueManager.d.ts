/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import Context from './application/Context';

/**
 * The continueManager module provides capabilities for managing cross-device application migration. For example, it
 * allows you to obtain the result of quickly launching the target application during the cross-device migration
 * process.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace continueManager {
  /**
   * Registers a callback to obtain the quick start result when an application is launched quickly. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { 'prepareContinue' } type - The value is fixed at **prepareContinue**.
   * @param { Context } context - Context of the ability.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Callback used to return the result. If obtaining the quick start
   *     result is successful, **err** is undefined, and **ContinueResultInfo** is the obtained quick startup result.
   *     Otherwise, **err** is an error object.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'prepareContinue', context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * Unregisters the callback used to obtain the quick start result when an application is launched quickly. This API
   * uses an asynchronous callback to return the result.
   *
   * @param { 'prepareContinue' } type - The value is fixed at **prepareContinue**.
   * @param { Context } context - Context of the ability.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Callback used to return the result. If the callback is
   *     unregistered, **err** is undefined, and **ContinueResultInfo** is the callback unregistration result. Otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * Register prepareContinue event, when the ability is configured with 'ContinueQuickStart' in the continueType, then can get the
   * result of LaunchReason.PREPARE_CONTINUATION.
   *
   * @param { Context } context - the ability context.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Used to handle ('prepareContinue') command.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function onPrepareContinue(context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * Unregister prepareContinue event.
   *
   * @param { Context } context - the ability context.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Used to handle ('prepareContinue') command.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function offPrepareContinue(context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * Describes the quick start result returned by the callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ContinueResultInfo {
    /**
     * Status code of the operation result.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    resultState: ContinueStateCode;

    /**
     * Description of the operation result.
     *
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    resultInfo?: string;
    }

  /**
   * Enumerates the status codes of the quick start result.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum ContinueStateCode {
    /**
     * Operation succeeded.
     *
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * Operation failed.
     *
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SYSTEM_ERROR = 1
    }
}
export default continueManager;