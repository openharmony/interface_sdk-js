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


/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * ToolInfo describes the basic information of a cli tool.
 *
 * @typedef ToolInfo
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolInfo {
  /**
   * The name of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * The version of the CLI tool (format defined by provider, e.g., "1.0.0").
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * The description of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * The executable path of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly executablePath: string;

  /**
   * The require permissions of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * The input schema of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * The input schema of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly inputSchema: Record<string, RecordData>;

  /**
   * The output schema of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * The output schema of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly outputSchema: Record<string, RecordData>;

  /**
   * Supported event types for custom event.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * Schemas about custom event.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;

  /**
   * Schemas about custom event.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly eventSchemas?: Record<string, Record<string, RecordData>>;

  /**
   * Whether this tool has subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly hasSubCommand?: boolean;

  /**
   * SubCommandInfo list.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly

   * @since 26.0.0 dynamiconly
   */
  readonly subcommands?: Record<string, SubCommandInfo>;
}

/**
 * ToolInfo describes the basic summary information of a cli tool.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolSummary {
  /**
   * The name of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * The version of the CLI tool (format defined by provider, e.g., "1.0.0").
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * The description of the CLI tool.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;
}

/**
 * Subcommand information
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface SubCommandInfo {
  /**
   * The description of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * The require permissions of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * The input schema of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * The input schema of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly inputSchema: Record<string, RecordData>;  

  /**
   * The output schema of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * The output schema of the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly outputSchema: Record<string, RecordData>;

  /**
   * Supported event types for custom event.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * Schemas about event for subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;
}
