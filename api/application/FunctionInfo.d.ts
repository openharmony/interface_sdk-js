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
 * FunctionInfo describes the basic information of a CLI function.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamiconly
 */
export interface FunctionInfo {

  /**
   * The version of the function (format defined by provider, e.g., "1.0.0").
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly version: string;

  /**
   * The namespace of the function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly functionNamespace: string;

  /**
   * The name of the function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly functionName: string;

  /**
   * Human-readable function description, used for AI Agent decision-making.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly description: string;

  /**
   * Input parameter JSON Schema, describes the structure of parameters accepted by the function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly inputSchema?: string;

  /**
   * Output result JSON Schema (optional), describes the structure of the function return value.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  readonly outputSchema?: string;
}
