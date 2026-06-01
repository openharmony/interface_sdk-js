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
import { ToolInfo, ToolSummary } from './application/ToolInfo';
import { ToolEventCallback } from './application/ToolEventCallback';

/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * The module provides the capability to interact with cli tools in the system.
 *
 * @namespace cliManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
declare namespace cliManager {
  /**
   * Tool execution options.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecOptions {
    /**
     * Indicates whether the tool is executed in the background
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    background?: boolean;

    /**
     * Indicates the foreground waiting timeout in milliseconds.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    yieldMs?: long;

    /**
     * Indicates the maximum execution time of the tool, in seconds.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeout?: long;
  }

  /**
   * Exexute result of a tool execution.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecResult {
    /**
     * Indicates the exit code, 0 means success.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    exitCode?: int;

    /**
     * Indicates the standard output of the tool.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    outputText?: string;

    /**
     * Indicates the error output of the tool.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorText?: string;

    /**
     * Indicates the termination signal (if the tool process was terminated by a signal).
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    signalNumber?: int;

    /**
     * Indicates whether it timed out.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeOut: boolean;

    /**
     * Indicates the execution duration in milliseconds.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    executionTime: long;
  }

  /**
   * Enum for session status.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  enum SessionStatus {
    /**
     * Indicates that the status is running.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    RUNNING = 'running',

    /**
     * Indicates that the status is completed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    COMPLETED = 'completed',

    /**
     * Indicates that the status is failed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    FAILED = 'failed'
  }

  /**
   * Session information of a tool execution.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliSessionInfo {
    /**
     * Indicates id of this session.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    sessionId: string;

    /**
     * Indicates name of tool.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    toolName: string;

    /**
     * Indicates status of session.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    status: SessionStatus;

    /**
     * Indicates the execution result, has a value when stats is completed or failed.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    result?: ExecResult;
  }

  /**
   * Query all tool summary information. The summary information only contains the fields: name, description, version.
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @returns { Promise<Array<ToolSummary>> } List of full tool summaries.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function queryToolSummaries(): Promise<Array<ToolSummary>>;

  /**
   * Query all detailed information of tools
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @returns { Promise<Array<ToolInfo>> } List of full tool detail info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function queryTools(): Promise<Array<ToolInfo>>;

  /**
   * Get detailed information of a single tool by its name
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @param { string } toolName - The name of target tool.
   * @returns { Promise<ToolInfo> } detailed information of tool.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600030 - No tool with the specified name exists.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function getToolInfoByName(toolName: string): Promise<ToolInfo>;

  /**
   * Execute a CLI command
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } toolName - The name of target tool.
   * @param { string } subCommand- The subCommand of this execute action.
   * @param { Record<string, Object> } args - The input args of tool.
   * @param { string } challenge - The unique identifier get from access token manager.
   * @param { ExecOptions } [execOptions] - The options of this action.
   * @returns { Promise<CliSessionInfo> } execute result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. 
   * @throws { BusinessError } 35600030 - No tool with the specified name exists.
   * @throws { BusinessError } 35600031 - Maximum number of processes has been reached.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function execTool(toolName: string, subCommand: string, args: Record<string, Object>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>;

  /**
   * Execute a CLI command.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } toolName - The name of target tool.
   * @param { string } subCommand- The subCommand of this execute action.If there is no subcommand,
   *     pass an empty value for this field.
   * @param { Record<string, RecordData> } args - The input args of tool.
   * @param { string } challenge - The unique identifier get from access token manager.
   * @param { ExecOptions } [execOptions] - The options of this action.
   * @returns { Promise<CliSessionInfo> } execute result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600030 - No tool with the specified name exists.
   * @throws { BusinessError } 35600031 - Maximum number of processes has been reached.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  function execTool(toolName: string, subCommand: string, args: Record<string, RecordData>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>;

  /**
   * Subscribe session event.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - The session id of target tool process.
   * @param { ToolEventCallback } callback - The input args of tool.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600032 - The session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>;

  /**
   * Close session and force kill tool process.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - The session id of target tool process..
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600032 - The session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function clearSession(sessionId: string): Promise<void>;

  /**
   * Query session status.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - The session id of target tool process.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600032 - The session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function querySession(sessionId: string): Promise<CliSessionInfo>;

  /**
   * Send event to target process.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - The session id of target tool process.
   * @param { string } message - The message to write, max length is 10240.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600032 - The session does not exist.
   * @throws { BusinessError } 35600033 - failed to write message to tool.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function sendMessage(sessionId: string, message: string): Promise<void>;
}

export default cliManager;
