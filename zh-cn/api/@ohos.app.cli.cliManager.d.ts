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
 CLI工具管理
 * @file
 CLI工具管理
 * @kit AbilityKit
 */
import { ToolInfo, ToolSummary } from './application/ToolInfo';
import { ToolEventCallback } from './application/ToolEventCallback';


/**
 * 本模块提供与系统命令行工具（CLI）的交互能力，可以查询工具信息、调用并执行CLI命令，以及管理会话。会话在调用execTool接口时创建，用于跟踪CLI工具的执行状态和结果。
 *
 * @namespace cliManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
declare namespace cliManager {
  /**
   * 执行CLI工具的可选参数。可用于指定CLI工具后台运行、前台执行时长、超时时长。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecOptions {
    /**
     * 表示任务是否后台执行。
     * 
     * true：后台执行，false：前台执行。
     * 
     * 默认值：false。
     *
     * @default false
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    background?: boolean;

    /**
     * 任务前台执行时长。取值范围：0 ~ 1000 * timeout。默认值：0。单位：ms。
     *
     * @default 0
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    yieldMs?: long;

    /**
     * 任务执行超时时长。取值范围：0 ~ 1800。默认值：1800。单位：s。
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
   * 执行Shell命令的可选参数。可用于指定工作目录、环境变量、后台运行、前台执行时长、超时时长、安全策略及事件回调。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecCmdOptions {
    /**
     * 命令执行的工作目录，如果不传或传空，则为根目录。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    workDir?: string;

    /**
     * 命令执行的环境变量。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    env?: Record<string, string>;

    /**
     * 表示命令是否后台执行。
     * 
     * true：后台执行，false：前台执行。
     * 
     * 默认值：false。
     *
     * @default false
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    background?: boolean;

    /**
     * 任务前台执行时长。取值范围：0 ~ 1000 * timeout。默认值：0。单位：ms。
     *
     * @default 0
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    yieldMs?: long;

    /**
     * 命令执行超时时长，单位为秒。取值范围：0 ~ 1800。默认值：1800，传0表示不会超时。
     *
     * @default 1800
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeout?: long;

    /**
     * 安全策略，参数格式为JSON字符串。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    policy?: string;

    /**
     * 事件回调函数，用于接收工具事件。若提供该参数，将自动订阅会话事件。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    callback?: ToolEventCallback;
  }

  /**
   * CLI工具执行的结果。包含CLI工具的退出码、标准输出、标准错误输出、终止信号、是否超时及执行时长。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ExecResult {
    /**
     * 工具的退出码。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    exitCode?: int;

    /**
     * 工具的标准输出（stdout）。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    outputText?: string;

    /**
     * 工具的标准错误输出（stderr）。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    errorText?: string;

    /**
     * 工具的终止信号。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    signalNumber?: int;

    /**
     * 工具的执行是否超时。true表示超时，false表示未超时。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    timeOut: boolean;

    /**
     * 工具的执行时长。单位：ms。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    executionTime: long;
  }

  /**
   * 执行CLI工具时，系统会为调用方和CLI工具建立一个会话，此字段描述会话状态。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  enum SessionStatus {
    /**
     * 会话正在进行中。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    RUNNING = 'running',

    /**
     * 会话已完成。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    COMPLETED = 'completed',

    /**
     * 会话发生失败。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    FAILED = 'failed'
  }

  /**
   * 执行CLI工具时，系统会为调用方和CLI工具建立一个会话，此字段描述会话信息的格式。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliSessionInfo {
    /**
     * 会话id。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    sessionId: string;

    /**
     * 工具名称。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    toolName: string;

    /**
     * 会话状态。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    status: SessionStatus;

    /**
     * 工具执行结果。默认值：undefined。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    result?: ExecResult;
  }

  /**
   * 查询所有CLI工具的摘要信息。摘要信息仅包含名称、版本和描述字段，使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @returns { Promise<Array<ToolSummary>> } Promise对象，返回工具摘要信息列表。
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
  function queryToolSummaries(): Promise<Array<ToolSummary>>;

  /**
   * 查询所有CLI工具的详细信息，使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @returns { Promise<Array<ToolInfo>> } Promise对象，返回工具详细信息列表。
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
   * 根据工具名称获取单个工具的详细信息，使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_CLI_TOOL
   * @param { string } toolName - 目标工具的名称。
   * @returns { Promise<ToolInfo> } Promise对象，返回工具的详细信息。
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
   * 执行CLI命令
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } toolName - 目标工具的名称
   * @param { string } subCommand - 此执行操作的子命令
   * @param { Record<string, Object> } args - 工具的输入参数
   * @param { string } challenge - 从访问令牌管理器获取的唯一标识符
   * @param { ExecOptions } [execOptions] - 此操作的选项
   * @returns { Promise<CliSessionInfo> } 执行结果。
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
   * 执行Shell命令，返回会话信息。使用Promise异步回调。
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } cmd - 要执行的Shell命令。
   * @param { ExecCmdOptions } [execCmdOptions] - 执行命令的可选参数。默认值：详见[ExecCmdOptions]{@link cliManager.ExecCmdOptions}的具体属性
   *     默认值。
   * @returns { Promise<CliSessionInfo> } Promise对象。返回会话信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 35600031 - Maximum number of processes has been reached.
   * @throws { BusinessError } 35600050 - System Error. 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with the dependent module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function execCmd(cmd: string, execCmdOptions?: ExecCmdOptions): Promise<CliSessionInfo>;

  /**
   * 订阅指定CLI工具会话的事件。会话运行期间，CLI工具产生的标准输出、标准错误、退出或错误事件通过回调返回。
   * 
   * > **说明：**
   * >
   * > 会话仅限创建进程管理：只有调用`execTool`创建该会话的进程可以调用本接口。其他进程即使获取到`sessionId`，调用本接口也会抛出错误码201（Permission denied）。
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - 目标CLI工具进程的会话ID。
   * @param { ToolEventCallback } callback - CLI工具会话事件的回调函数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.EXEC_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
   * 关闭指定CLI工具会话，并强制结束对应的工具进程。
   * 
   * > **说明：**
   * >
   * > 会话仅限创建进程管理：只有调用`execTool`创建该会话的进程可以调用本接口。其他进程即使获取到`sessionId`，调用本接口也会抛出错误码201（Permission denied）。
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - 目标CLI工具进程的会话ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.EXEC_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
   * 查询指定CLI工具会话的状态和执行结果。
   * 
   * > **说明：**
   * >
   * > 会话仅限创建进程管理：只有调用`execTool`创建该会话的进程可以调用本接口。其他进程即使获取到`sessionId`，调用本接口也会抛出错误码201（Permission denied）。
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - 目标CLI工具进程的会话ID。
   * @returns { Promise<void> } Promise对象，返回CLI工具会话信息。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.EXEC_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
   * 向指定CLI工具会话对应的进程发送消息。
   * 
   * > **说明：**
   * >
   * > 会话仅限创建进程管理：只有调用`execTool`创建该会话的进程可以调用本接口。其他进程即使获取到`sessionId`，调用本接口也会抛出错误码201（Permission denied）。
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { string } sessionId - 目标CLI工具进程的会话ID。
   * @param { string } message - 要发送的消息，最大长度为10240字符。超过最大长度时抛出错误码401。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.EXEC_CLI_TOOL".
   * @throws { BusinessError } 202 - Not system application. Interface caller is not a system app.
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
