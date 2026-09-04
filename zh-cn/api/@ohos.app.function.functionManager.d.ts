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

/**
 * Function是定义在应用包中的一个业务逻辑单元，可以接收大模型提供的结构化数据来完成应用定义的功能，例如查询实时天气信息、打开指定应用页面等。
 *
 * 本模块提供Function的管理和调用能力，可以查询可用的Function信息、调用指定的Function执行业务逻辑。
 *
 * @namespace functionManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
declare namespace functionManager {

  /**
   * Function调用的可选参数。包含Function调用时的应用上下文信息。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface InvokeOptions {
    /**
     * 执行Function调用时的应用上下文信息。<br>说明：目前仅支持[UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}。
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    context?: Context;
  }

  /**
   * Function调用的结果。包含Function调用成功时返回的数据，调用失败时的错误码和错误信息。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface InvokeResult {
    /**
     * 调用是否成功（业务逻辑层面）。true：调用成功，data字段包含返回数据；false：调用失败，errorCode和errorMsg字段包含错误信息。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    success: boolean;

    /**
     * 调用成功时返回的数据，类型可以为任意JSON值。仅在success为true时有值。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    data?: any;

    /**
     * 调用失败时的错误码。仅在success为false时有值。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorCode?: number;

    /**
     * 调用失败时的错误描述。仅在success为false时有值。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorMsg?: string;
  }


  /**
   * 查询所有可用的Function信息，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_FUNCTION
   * @returns { Promise<Array<FunctionInfo>> } Promise对象，返回可用Function的信息列表，包含命名空间、名称、版本、描述、输入输出模式等。
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
   * 根据Function命名空间和Function名称调用指定的Function，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_FUNCTION
   * @param { string } functionNamespace - 目标Function的命名空间，与functionName共同确定唯一的Function。
   * @param { string } functionName - 目标Function的名称，与functionNamespace共同确定唯一的Function。
   * @param { Record<string, Object> } args - 符合Function提供方定义格式的输入参数。
   * @param { InvokeOptions } [options] - Function调用的可选参数。默认值：详见{@link InvokeOptions}的具体属性默认值。
   * @returns { Promise<InvokeResult> } Promise对象。返回Function调用的结果。
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
}

export default functionManager;
