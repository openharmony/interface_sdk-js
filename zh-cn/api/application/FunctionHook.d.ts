/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Function Hook
 * @kit AbilityKit
 */
import { InvokeResult, InvokeOptions } from '../@ohos.app.function.functionManager';

/**
 * Function Hook拦截的参数。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface InvokeFunctionParam {
  /**
   * Function的命名空间。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  functionNamespace: string;

  /**
   * Function的名称。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  functionName: string;

  /**
   * 原始Function参数。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  args: Record<string, Object>;

  /**
   * 调用选项。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  invokeOptions?: InvokeOptions;
}

/**
 * onAfterInvokeFunction的结果参数。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface FunctionResultWrap {
  /**
   * 调用结果。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  result: InvokeResult;

  /**
   * 表示Function调用的唯一标识，从{@link InvokeOptions}回传。
   * 仅当调用方传入该标识时存在。取值由字母、数字、'_'和'-'组成，最大长度为256。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  toolCallId?: string;

  /**
   * 表示对话管理（DM）会话标识，从{@link InvokeOptions}回传。
   * 仅当调用方传入该标识时存在。取值由字母、数字、'_'和'-'组成，最大长度为256。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  dmSessionId?: string;
}

/**
 * 用于拦截Function调用的Hook接口。
 *
 * Hook对象可实现可选方法的任意子集。仅已实现的方法会被调用；未实现的方法将被跳过。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface FunctionHook {
  /**
   * Function调用前调用。返回的对象将替换原始参数。
   *
   * @param { InvokeFunctionParam } param - Function调用参数。
   * @returns { InvokeFunctionParam } 返回（可能已被修改的）参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeInvokeFunction?(param: InvokeFunctionParam): InvokeFunctionParam;

  /**
   * Function调用后调用。返回的对象将替换原始结果。
   *
   * @param { FunctionResultWrap } param - 调用结果参数。
   * @returns { FunctionResultWrap } 返回（可能已被修改的）结果参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterInvokeFunction?(param: FunctionResultWrap): FunctionResultWrap;
}

export default FunctionHook;
