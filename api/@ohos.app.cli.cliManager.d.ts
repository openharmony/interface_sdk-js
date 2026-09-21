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
import { CliHook, ExecToolParam, ExecCmdParam, ExecResultWrap } from './application/CliHook';


/**
 * This module provides the capability to interact with system command-line interface (CLI) tools, including querying
 * tool information, invoking and executing CLI commands, and managing sessions. A session is created when the
 * execTool API is called, and is used to track the execution status and result of the CLI tool.
 *
 * @namespace cliManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi [since 26.0.0 - 26.0.0]
 * @publicapi [since 26.0.1]
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
     * Indicates whether the tool is executed in the background.
     *
     * @default false
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    background?: boolean;

    /**
     * Indicates the foreground waiting timeout in milliseconds.
     * The value should be a long.
     *
     * @default 0
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    yieldMs?: long;

    /**
     * Indicates the maximum execution time of the tool, in seconds.
     * The value should be a long.
     *
     * @default 1800
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeout?: long;
  }

  /**
   * Describes the options for executing a raw command string via {@link execCmd}.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecCmdOptions {
    /**
     * Indicates the working directory for the command.
     *
     * If not specified, the default working directory of the system service is used.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    workDir?: string;

    /**
     * Indicates the environment variables for the command.
     *
     * The keys are variable names and the values are their corresponding string values.
     * These variables are injected into the execution environment of the command process.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    env?: Record<string, string>;

    /**
     * Indicates whether the command is executed in the background.
     *
     * When set to **true**, the {@link execCmd} method returns immediately after the command process is created.
     * When set to **false**, the method blocks until the command finishes or the foreground waiting timeout
     * ({@link yieldMs}) expires.
     *
     * @default false
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    background?: boolean;

    /**
     * Indicates the foreground waiting timeout in milliseconds.
     *
     * This value is effective only when {@link background} is **false**. It specifies how long the caller waits for
     * the command to complete in the foreground. If the command does not finish within this duration, the method
     * returns a session ID and the command continues running in the background. A value of 0 means the caller waits
     * until the command finishes or the maximum execution timeout ({@link timeout}) is reached.
     *
     * @default 0
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    yieldMs?: long;

    /**
     * Indicates the maximum execution time of the command, in seconds.
     *
     * If the command process runs longer than this duration, it is forcibly terminated and the
     * {@link ExecResult.timeOut} field is set to **true**.
     *
     * @default 1800
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeout?: long;

    /**
     * Indicates the security policy.
     *
     * The policy string is interpreted by the system service to enforce additional security constraints on the command.
     * The format and available policies are defined by the system security module.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    policy?: string;

    /**
     * Indicates whether the command is executed as a shell command.
     *
     * @default true
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamiconly
     */
    isShellCommand?: boolean;

    /**
     * Indicates the unique identifier obtained from the access token manager.
     *
     * @default ""
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamiconly
     */
    challenge?: string;

    /**
     * Indicates the event callback for receiving tool events.
     *
     * If provided, the system automatically subscribes to the session events (such as stdout, stderr, exit, and error)
     * of the tool process. The callback receives {@link CliToolEvent} objects as events arrive. This is equivalent to
     * calling {@link subscribeSession} manually after execution.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    callback?: ToolEventCallback;
  }

  /**
   * Describes the execution result of a tool or command.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecResult {
    /**
     * Indicates the exit code, 0 means success.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    exitCode?: int;

    /**
     * Indicates the standard output (stdout) content of the tool.
     *
     * This field captures all text written by the tool or command to its standard output stream during execution.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    outputText?: string;

    /**
     * Indicates the error output (stderr) content of the tool.
     *
     * This field captures all text written by the tool to its standard error stream during execution. Note that some
     * tools write diagnostic information to stderr even when execution succeeds.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorText?: string;

    /**
     * Indicates the termination signal (if the tool process was terminated by a signal).
     * The value range is all integers.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    signalNumber?: int;

    /**
     * Indicates whether it timed out.
     *
     * When **true**, the tool process was forcibly terminated because it exceeded the maximum execution timeout.
     * When **false**, the tool finished within the allowed time.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeOut: boolean;

    /**
     * Indicates the execution duration in milliseconds.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    executionTime: long;
  }

  /**
   * Enumerates the status values of a CLI tool or commad execution session.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  enum SessionStatus {
    /**
     * The session is running. The tool process has been created and is currently executing.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    RUNNING = 'running',

    /**
     * The session has completed. The tool process exited normally, and the execution result is available in
     * {@link CliSessionInfo.result}.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    COMPLETED = 'completed',

    /**
     * The session has failed. The tool process encountered an error or was forcibly terminated. The failure details
     * are available in {@link CliSessionInfo.result}.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    FAILED = 'failed'
  }

  /**
   * Describes the session information of a CLI tool or command execution.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliSessionInfo {
    /**
     * Indicates the unique identifier of this session.
     *
     * This ID is used in subsequent calls to {@link subscribeSession}, {@link querySession}, {@link sendMessage}, and
     * {@link clearSession} to manage the session lifecycle.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    sessionId: string;

    /**
     * Indicates the name of the tool being executed.
     *
     * For {@link execCmd}, this field is set to "shell".
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    toolName: string;

    /**
     * Indicates status of session.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    status: SessionStatus;

    /**
     * Indicates the execution result, has a value when status is completed or failed.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi [since 26.0.0 - 26.0.0]
     * @publicapi [since 26.0.1]
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
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.QUERY_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2. System service failed to communicate with dependency module.
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
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.QUERY_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.QUERY_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
   * @param { string } subCommand - The subCommand of this execute action.
   * @param { Record<string, Object> } args - The input args of tool.
   * @param { string } challenge - The unique identifier get from access token manager.
   * @param { ExecOptions } [execOptions] - The options of this action.
   * @returns { Promise<CliSessionInfo> } execute result.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.EXEC_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
   * @throws { BusinessError } 35600030 - No tool with the specified name exists.
   * @throws { BusinessError } 35600031 - Maximum number of processes has been reached.
   * @throws { BusinessError } 35600050 - System Error. 1. Connect to system service failed;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function execTool(toolName: string, subCommand: string, args: Record<string, Object>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>;

  /**
   * Executes a raw command string in the system shell environment.
   *
   * This method accepts a free-form command string. The caller can specify a working directory, environment variables,
   * a security policy, and an event callback through {@link ExecCmdOptions}.
   *
   * If an event callback is provided in the options, the system automatically subscribes to the session events, and the
   * callback will receive real-time output from the command process.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL [since 26.0.0 - 26.0.0]
   * @permission ohos.permission.EXEC_CLI_TOOL or ohos.permission.EXEC_PUBLIC_CLI_TOOL [since 26.0.1]
   * @param { string } cmd - The command to execute.
   * @param { ExecCmdOptions } [execCmdOptions] - The options of this action.
   * @returns { Promise<CliSessionInfo> } Promise used to return CliSessionInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 26.0.0 - 26.0.0]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 26.0.1]
   * @throws { BusinessError } 35600031 - Maximum number of processes has been reached.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function execCmd(cmd: string, execCmdOptions?: ExecCmdOptions): Promise<CliSessionInfo>;

  /**
   * Subscribes to events from a CLI tool or command execution session.
   *
   * After subscribing, the provided callback will receive {@link CliToolEvent} objects whenever the command process
   * produces output (stdout/stderr), exits, or encounters an error. This is useful for real-time monitoring of
   * long-running command processes.
   *
   * If an event callback was already provided in {@link ExecCmdOptions} when calling {@link execCmd}, manual
   * subscription is not necessary.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL [since 26.0.0 - 26.0.0]
   * @permission ohos.permission.EXEC_CLI_TOOL or ohos.permission.EXEC_PUBLIC_CLI_TOOL [since 26.0.1]
   * @param { string } sessionId - The session id of target command process.
   * @param { ToolEventCallback } callback - The callback to receive session events.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 26.0.0 - 26.0.0]
   * @throws { BusinessError } 35600032 - The specified session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>;

  /**
   * Closes a session and forcibly terminates the associated command process.
   *
   * Call this method to clean up a session when the command process is no longer needed, especially for sessions
   * running in the background. After the session is closed, the session ID becomes invalid and can no longer be used
   * in any subsequent calls.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL [since 26.0.0 - 26.0.0]
   * @permission ohos.permission.EXEC_CLI_TOOL or ohos.permission.EXEC_PUBLIC_CLI_TOOL [since 26.0.1]
   * @param { string } sessionId - The session id of target command process.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 26.0.0 - 26.0.0]
   * @throws { BusinessError } 35600032 - The specified session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function clearSession(sessionId: string): Promise<void>;

  /**
   * Queries the current status and execution result of a session.
   *
   * Use this method to poll the status of a background session, or to retrieve the execution result after a session
   * has completed. The returned {@link CliSessionInfo} includes the session ID, tool name, current status, and
   * execution result (if the session has finished).
   *
   * @permission ohos.permission.EXEC_CLI_TOOL [since 26.0.0 - 26.0.0]
   * @permission ohos.permission.EXEC_CLI_TOOL or ohos.permission.EXEC_PUBLIC_CLI_TOOL [since 26.0.1]
   * @param { string } sessionId - The session id of target command process.
   * @returns { Promise<CliSessionInfo> } The info of target session.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 26.0.0 - 26.0.0]
   * @throws { BusinessError } 35600032 - The specified session does not exist.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function querySession(sessionId: string): Promise<CliSessionInfo>;

  /**
   * Sends a message to the standard input of a running command process.
   *
   * This method allows the caller to interact with a command process that is waiting for input. The message is written
   * to the process's standard input stream.
   *
   * @permission ohos.permission.EXEC_CLI_TOOL [since 26.0.0 - 26.0.0]
   * @permission ohos.permission.EXEC_CLI_TOOL or ohos.permission.EXEC_PUBLIC_CLI_TOOL [since 26.0.1]
   * @param { string } sessionId - The session id of target command process.
   * @param { string } message - The message to write, max length is 10240.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 26.0.0 - 26.0.0]
   * @throws { BusinessError } 35600032 - The specified session does not exist.
   * @throws { BusinessError } 35600033 - Failed to write message to the tool process.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function sendMessage(sessionId: string, message: string): Promise<void>;

  /**
   * Register a CLI hook for intercepting tool and command execution.
   * Only one CLI hook can be registered at a time; registering again while one
   * is already active will fail. This API is only available in developer mode.
   * To update a registered hook, call unregisterCliHook first, then register again.
   * The hook object must implement at least one of the optional methods in CliHook.
   *
   * @permission ohos.permission.REGISTER_AGENT_HOOK
   * @param { CliHook } hook - The hook object implementing the CliHook interface.
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
  function registerCliHook(hook: CliHook): Promise<void>;

  /**
   * Unregister the previously registered CLI hook.
   * The hook object must be the same as the one passed to registerCliHook.
   * If no hook is registered, the call will fail with an error.
   *
   * @permission ohos.permission.REGISTER_AGENT_HOOK
   * @param { CliHook } hook - The hook object to unregister.
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
  function unregisterCliHook(hook: CliHook): Promise<void>;
}

export default cliManager;

export type { CliHook, ExecToolParam, ExecCmdParam, ExecResultWrap };
