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

import type insightIntent from './@ohos.app.ability.insightIntent';

/**
 * 本模块为意图提供方提供管理能力，如主动发送指定意图的执行结果。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic&static
 */
declare namespace insightIntentProvider {
  /**
   * 如果意图提供方需要在业务处理的特定流程中主动发送意图执行结果，可以先通过
   * [setReturnModeForUIAbilityForeground接口]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIAbilityForeground}
   * 或
   * [setReturnModeForUIExtensionAbility接口]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIExtensionAbility}
   * 将意图执行结果返回形式[ReturnMode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode}设置为FUNCTION，然后调用该接口发送意图执行结果，
   * 适用于[配置类意图](docroot://application-models/insight-intent-config-development.md)。使用Promise异步回调。
   * 
   * 意图执行结果返回形式[ReturnMode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode}设置为FUNCTION后，应用将无需再通过
   * [onExecuteInUIAbilityForegroundMode接口]{@link ./@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage)}
   * 或
   * [onExecuteInUIExtensionAbility接口]{@link ./@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession)}
   * 的返回值返回意图执行结果。
   *
   * @param { int } instanceId - 意图实例唯一ID。
   * @param { insightIntent.ExecuteResult } result - 返回意图执行结果，表示本次意图执行返回给系统入口的数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency
   *     module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function sendExecuteResult(instanceId: int, result: insightIntent.ExecuteResult): Promise<void>;

  /**
   * 如果意图提供方需要在业务处理的特定流程中主动发送意图执行结果，可以先通过
   * [setReturnModeForUIAbilityForeground接口]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIAbilityForeground}
   * 或
   * [setReturnModeForUIExtensionAbility接口]{@link ./@ohos.app.ability.InsightIntentContext:InsightIntentContext.setReturnModeForUIExtensionAbility}
   * 将意图执行结果返回形式[ReturnMode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode}设置为FUNCTION，然后调用该接口发送意图执行结果。
   * 适用于
   * [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry)
   * 修饰的[装饰器类意图](docroot://application-models/insight-intent-decorator-development.md)。使用Promise异步回调。
   * 
   * 意图执行结果返回形式[ReturnMode]{@link ./@ohos.app.ability.insightIntent:insightIntent.ReturnMode}设置为FUNCTION后，应用将无需再通过
   * [onExecute接口]{@link ./@ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor.InsightIntentEntryExecutor.onExecute}
   * 的返回值返回意图执行结果。
   *
   * @param { int } instanceId - 意图实例唯一ID。
   * @param { insightIntent.IntentResult<T> } result - 返回意图执行结果，表示本次意图执行返回给系统入口的数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency
   *     module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  function sendIntentResult(instanceId: int, result: insightIntent.IntentResult<T>): Promise<void>;
}

export default insightIntentProvider;