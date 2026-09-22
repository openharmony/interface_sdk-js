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
 * @file Function Info
 * @kit AbilityKit
 */

/**
 * FunctionInfo describes the basic information of a
 * [Function]{@link @ohos.app.function.functionManager:functionManager}, including the Function namespace, name,
 * version, description, and input/output schema.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface FunctionInfo {

  /**
   * Version number of the Function. It follows semantic versioning (e.g., "1.0.0"), and the format is defined by the
   * provider. The version number is used to identify the function iteration and compatibility changes of the Function.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * Namespace of the Function, used to classify and manage Functions in the system. The namespace helps organize and
   * identify Functions in different functional domains.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly functionNamespace: string;

  /**
   * Name of the Function, used to uniquely identify a Function within the functionNamespace.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly functionName: string;

  /**
   * Functional description of the Function. The description should clearly explain the core function and purpose of
   * the Function, helping users and AI Agents understand what the Function can do, used for assisting in
   * decision-making.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * Input parameter JSON Schema definition of the Function, describing the structure and type of input parameters
   * accepted by the Function. It must conform to the JSON Schema format definition.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema?: string;

  /**
   * Output result JSON Schema definition of the Function, describing the structure and type of the Function return
   * value. It must conform to the JSON Schema format definition.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema?: string;
}
