/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { InvokeResult, InvokeOptions } from '../@ohos.app.function.functionManager';

/**
 * Parameter for function hook interception.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface InvokeFunctionParam {
  /**
   * Indicates the namespace of the function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  functionNamespace: string;

  /**
   * Indicates the name of the function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  functionName: string;

  /**
   * Indicates the original function arguments.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  args: Record<string, Object>;

  /**
   * Indicates the invocation options.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  invokeOptions?: InvokeOptions;
}

/**
 * Result parameter for onAfterInvokeFunction.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface FunctionResultWrap {
  /**
   * Indicates the invocation result.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  result: InvokeResult;
}

/**
 * Hook interface for intercepting function invocation.
 *
 * The hook object may implement any subset of the optional methods.
 * Only implemented methods are invoked; unimplemented methods are skipped.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface FunctionHook {
  /**
   * Called before a function is invoked. The returned object replaces the original arguments.
   *
   * @param { InvokeFunctionParam } param - The function invocation parameter.
   * @returns { InvokeFunctionParam } The (possibly modified) parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeInvokeFunction?(param: InvokeFunctionParam): InvokeFunctionParam;

  /**
   * Called after a function is invoked. The returned object replaces the original result.
   *
   * @param { FunctionResultWrap } param - The invocation result parameter.
   * @returns { FunctionResultWrap } The (possibly modified) result parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterInvokeFunction?(param: FunctionResultWrap): FunctionResultWrap;
}

export default FunctionHook;
