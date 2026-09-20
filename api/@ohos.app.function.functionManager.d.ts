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
 * @file
 * @kit AbilityKit
 */
import Context from './application/Context';
import { FunctionInfo } from './application/FunctionInfo';
import { FunctionHook, InvokeFunctionParam, FunctionResultWrap } from './application/FunctionHook';

/**
 * The module provides the capability to manage and invoke functions in the system.
 *
 * @namespace functionManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
declare namespace functionManager {

  /**
   * Invoke options for function execution.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface InvokeOptions {
    /**
     * Context of the caller.<br>Note: Currently, only
     *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext} is supported.
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    context?: Context;
  }

  /**
   * Encapsulates the success or failure status of function invocation.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface InvokeResult {
    /**
     * Indicates whether the invocation was successful (at business logic level).
     * true: Invocation succeeded, {@link InvokeResult.data } contains the returned data.
     * false: Invocation failed, {@link InvokeResult.errorCode } and {@link InvokeResult.errorMsg } contain error information.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    success: boolean;

    /**
     * The returned data on success. The type can be any JSON value.
     * Only present when {@link InvokeResult.success } is true.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    data?: any;

    /**
     * The error code on failure (numeric).
     * Only present when {@link InvokeResult.success } is false.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorCode?: number;

    /**
     * The error description on failure.
     * Only present when {@link InvokeResult.success } is false.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorMsg?: string;
  }


  /**
   * Query all available functions.
   *
   * @permission ohos.permission.ACCESS_FUNCTION
   * @returns { Promise<Array<FunctionInfo>> } The promise used to return available functions.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function queryFunctions(): Promise<Array<FunctionInfo>>;

  /**
   * Invoke a function by functionNamespace and functionName.
   *
   * @permission ohos.permission.ACCESS_FUNCTION
   * @param { string } functionNamespace - The namespace of the target function.
   * @param { string } functionName - The name of the target function.
   * @param { Record<string, Object> } args - The input arguments for the function.
   * @param { InvokeOptions } [options] - The options for this invocation.
   * @returns { Promise<InvokeResult> } The promise used to return the result of function invocation.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 35600060 - The function does not exist.
   * @throws { BusinessError } 35600061 - The function execute failed.
   * @throws { BusinessError } 35600062 - The function execute timeout.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function invokeFunction(functionNamespace: string, functionName: string,
    args: Record<string, Object>, options?: InvokeOptions): Promise<InvokeResult>;

  /**
   * Register a function hook for intercepting function invocation.
   * Only one function hook can be registered at a time; registering again while one
   * is already active will fail. This API is only available in developer mode.
   * To update a registered hook, call unregisterFunctionHook first, then register again.
   * The hook object must implement at least one of the optional methods in FunctionHook.
   *
   * @permission ohos.permission.REGISTER_AGENT_HOOK
   * @param { FunctionHook } hook - The hook object implementing the FunctionHook interface.
   *     The hook object must implement at least one of the optional methods.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.REGISTER_AGENT_HOOK".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
   * @throws { BusinessError } 35600034 - The device is not in developer mode.
   * @throws { BusinessError } 35600035 - A hook is already registered; unregister it first.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  function registerFunctionHook(hook: FunctionHook): Promise<void>;

  /**
   * Unregister the previously registered function hook.
   * The hook object must be the same as the one passed to registerFunctionHook.
   * If no hook is registered, the call will fail with an error.
   *
   * @permission ohos.permission.REGISTER_AGENT_HOOK
   * @param { FunctionHook } hook - The hook object to unregister.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.REGISTER_AGENT_HOOK".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
   * @throws { BusinessError } 35600036 - No hook is registered; nothing to unregister.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  function unregisterFunctionHook(hook: FunctionHook): Promise<void>;
}

export default functionManager;

export type { FunctionHook, InvokeFunctionParam, FunctionResultWrap };
