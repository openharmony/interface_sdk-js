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

/**
 * FunctionInfo用于描述[Function]{@link @ohos.app.function.functionManager:functionManager}的基本信息，包括Function命名空间、名称、版本、描述、输入输出模式等。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface FunctionInfo {

  /**
   * Function的版本号。遵循语义化版本规范（如"1.0.0"），格式由提供商定义。版本号用于标识Function的功能迭代和兼容性变化。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * Function的命名空间，用于在系统中对Function进行分类和管理。命名空间可以帮助组织和识别不同功能领域的Function。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly functionNamespace: string;

  /**
   * Function的名称，用于在functionNamespace内唯一标识一个Function。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly functionName: string;

  /**
   * Function的功能描述。该描述应清晰说明Function的核心功能和用途，帮助用户和AI Agent理解Function能做什么，用于辅助决策。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * Function的输入参数JSON Schema定义，描述Function接受的输入参数结构和类型。需要符合JSON Schema格式定义。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema?: string;

  /**
   * Function的输出结果JSON Schema定义，描述Function返回值的结构和类型。需要符合JSON Schema格式定义。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema?: string;
}
