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
 * @file Intent Provider Management
 * @kit AbilityKit
 */

import type insightIntent from './@ohos.app.ability.insightIntent';

/**
 * Insight intent Provider.
 * @namespace insightIntentProvider
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic&static
 */
declare namespace insightIntentProvider {
  /**
   * If an intent provider needs to proactively send the execution result of an intent at a specific point in the
   * service process, it can first set the
   * [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution result to
   * FUNCTION through
   * [setReturnModeForUIAbilityForeground]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIAbilityForeground}
   * or
   * [setReturnModeForUIExtensionAbility]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIExtensionAbility},
   * and then call this API to send the intent execution result. This API applies to 
   * [configuration-type intents](docroot://application-models/insight-intent-config-development.md). This API uses a
   * promise to return the result asynchronously.
   * 
   * After the [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution
   * result is set to FUNCTION, the application no longer needs to return the intent execution result through the
   * return value of the
   * [onExecuteInUIAbilityForegroundMode API]{@link ./@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage)}
   * or
   * [onExecuteInUIExtensionAbility]{@link ./@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession)}.
   * @param { int } instanceId - Unique ID of an intent instance.
   * @param { insightIntent.ExecuteResult } result - Intent execution result, representing the data returned to the
   *     system entry for this intent execution.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function sendExecuteResult(instanceId: int, result: insightIntent.ExecuteResult): Promise<void>;

  /**
   * If an intent provider needs to proactively send the execution result of an intent at a specific point in the
   * service process, it can first set the
   * [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution result to
   * FUNCTION through
   * [setReturnModeForUIAbilityForeground]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIAbilityForeground}
   * or
   * [setReturnModeForUIExtensionAbility]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIExtensionAbility},
   * and then call this API to send the intent execution result. This API applies to
   * [decorator-type intents](docroot://application-models/insight-intent-decorator-development.md) decorated by
   * [@InsightIntentEntry]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntry}. This API uses a promise
   * to return the result asynchronously.
   * 
   * After the [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution
   * result is set to FUNCTION, the application no longer needs to return the intent execution result through the
   * return value of the
   * [onExecute API]{@link ./@ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor.InsightIntentEntryExecutor.onExecute}.
   * 
   * @param { int } instanceId - Unique ID of an intent instance.
   * @param { insightIntent.IntentResult<T> } result - Execution result of the return intent, indicating the data
   *     returned to the system entry by this intent execution.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  function sendIntentResult(instanceId: int, result: insightIntent.IntentResult<T>): Promise<void>;

  /**
   * If an intent provider needs to proactively send the execution result of an intent at a specific point in the
   * service process, it can first set the
   * [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution result to
   * FUNCTION through
   * [setReturnModeForUIAbilityForeground]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIAbilityForeground}
   * or
   * [setReturnModeForUIExtensionAbility]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIExtensionAbility},
   * and then call this API to send the intent execution result. This API applies to
   * [decorator-type intents](docroot://application-models/insight-intent-decorator-development.md) decorated by
   * [@InsightIntentEntry]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntry}. This API uses a promise
   * to return the result asynchronously.
   * 
   * After the [return mode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode} of the intent execution
   * result is set to FUNCTION, the application no longer needs to return the intent execution result through the
   * return value of the
   * [onExecute API]{@link ./@ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor.InsightIntentEntryExecutor.onExecute}.
   * 
   * @param { int } instanceId - Unique ID of an intent instance.
   * @param { insightIntent.IntentResult<T> } result - Execution result of the return intent, indicating the data
   *     returned to the system entry by this intent execution.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  function sendIntentResult<T>(instanceId: int, result: insightIntent.IntentResult<T>): Promise<void>;
}

export default insightIntentProvider;