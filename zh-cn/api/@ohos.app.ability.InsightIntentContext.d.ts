/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供意图执行上下文，是[意图执行基类]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor}和
 * [@InsightIntentEntry的意图执行基类]{@link @ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor}的属性，为意图执行提
 * 供基础能力，例如启动本应用内的[UIAbility组件]{@link @ohos.app.ability.UIAbility}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare class InsightIntentContext {

  /**
   * 意图实例唯一ID。用于通过
   * [insightIntentProvider.sendExecuteResult接口]
   * {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendExecuteResult} 和
   * [insightIntentProvider.sendIntentResult接口]
   * {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendIntentResult}返回指定意图的执行结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  instanceId: int;

  /**
   * 启动UIAbility组件，仅支持启动本应用内的UIAbility组件。使用callback异步回调。
   *
   * @param { Want } want - 启动UIAbility组件的want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 启动UIAbility组件，仅支持启动本应用内的UIAbility组件。使用Promise异步回调。
   *
   * @param { Want } want - 启动UIAbility组件的want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * 设置意图执行结果的返回形式，适用于执行模式为[UI_ABILITY_FOREGROUND]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}的意图。
   *
   * @param { insightIntent.ReturnMode } returnMode - 意图执行结果的返回形式。
   * @throws { BusinessError } 16000011 - The context does not exist. Possible causes: 1.The context is
   *     not insightIntentContext; 2.The context is not for UIAbility foreground insight intent execute mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  setReturnModeForUIAbilityForeground(returnMode: insightIntent.ReturnMode): void;

  /**
   * 设置意图执行结果的返回形式，适用于执行模式为[UI_EXTENSION_ABILITY]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}的意图。
   *
   * @param { insightIntent.ReturnMode } returnMode - 意图执行结果的返回形式。
   * @throws { BusinessError } 16000011 - The context does not exist. Possible causes: 1.The context is not
   *     insightIntentContext; 2.The context is not for UIExtensionAbility insight intent execute mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  setReturnModeForUIExtensionAbility(returnMode: insightIntent.ReturnMode): void;
}

export default InsightIntentContext;