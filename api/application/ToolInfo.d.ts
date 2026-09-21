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
 * @file Tool Info
 * @kit AbilityKit
 */


/**
 * ToolInfo describes the basic information of a CLI tool, including the tool name, version, description, executable
 * path, and input/output schema.
 *
 * @typedef ToolInfo
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolInfo {
  /**
   * Name of the CLI tool, used to uniquely identify a CLI tool in the system.
   * The maximum length is 32 and cannot be empty.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * Version number of the CLI tool. It follows semantic versioning (e.g., "1.0.0"), and the format is defined by the
   * provider. The version number is used to identify the tool's feature iteration and compatibility changes.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * Functional description of the CLI tool. The description should clearly explain the core function and purpose of
   * the tool, helping users understand what the tool can do.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * Executable file path of the CLI tool. It must be an absolute path.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly executablePath: string;

  /**
   * List of permissions required by the CLI tool. All permission items must be unique strings. The system verifies
   * whether the caller has the required permissions when executing the tool, and cannot execute without the
   * corresponding permissions. The default value is an empty array.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * Input schema definition of the CLI tool. It uses JSON Schema format to define the structure and type of input
   * parameters, used to describe the input data format accepted by the tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * Output schema definition of the CLI tool. It uses JSON Schema format to define the structure and type of output
   * data, used to describe the output data format returned by the tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * List of custom event types supported by the CLI tool. All event types must be unique strings. The default value
   * is an empty array.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * Schema definitions for custom events. Stored as key-value pairs, where the key is the event type and the value
   * is the JSON Schema definition of the event. The default value is an empty object.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;

  /**
   * Indicates whether the tool supports subcommands. **true** means the tool supports subcommands, **false** means it
   * does not. The default value is **false**.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly hasSubCommand?: boolean;

  /**
   * List of subcommand information. Stored as key-value pairs, where the key is the subcommand name and the value is
   * the detailed information of the subcommand. The default value is an empty object.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly subcommands?: Record<string, SubCommandInfo>;

  /**
   * Indicates whether the tool supports execution in the lock screen state. **true** means the tool supports
   * execution in the lock screen state, **false** means the tool does not support execution in the lock screen state.
   * The default value is **false**.
   *
   * @default false
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly isLockScreenExecutionAllowed?: boolean;
}

/**
 * Describes the summary information of a CLI tool.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolSummary {
  /**
   * Name of the CLI tool, used to uniquely identify a CLI tool in the system.
   * The maximum length is 32 and cannot be empty.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * Version number of the CLI tool. It follows semantic versioning (e.g., "1.0.0"), and the format is defined by the
   * provider. The version number is used to identify the tool's feature iteration and compatibility changes.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * Functional description of the CLI tool. The description should clearly explain the core function and purpose of
   * the tool, helping users understand what the tool can do.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;
}

/**
 * Describes the information of a CLI tool subcommand.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface SubCommandInfo {
  /**
   * Description of the subcommand. It should clearly explain the specific function and usage scenario of the
   * subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * List of permissions required by the subcommand. All permission items must be unique strings. The system verifies
   * whether the caller has the required permissions when executing the subcommand, and cannot execute without the
   * corresponding permissions. The default value is an empty array.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * Input schema definition of the subcommand. It uses JSON Schema format to define the structure and type of input
   * parameters.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * Output schema definition of the subcommand. It uses JSON Schema format to define the structure and type of
   * output data.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * List of custom event types supported by the CLI tool. All event types must be unique strings. The default value
   * is an empty array.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * Schema definitions for subcommand custom events. Stored as key-value pairs, where the key is the event type and
   * the value is the JSON Schema definition of the event. The default value is an empty object.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;
}
