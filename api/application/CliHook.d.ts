/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
import { ExecOptions, ExecCmdOptions, ExecResult } from '../@ohos.app.cli.cliManager';

/**
 * Tool execution parameter for hook interception.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecToolParam {
  /**
   * Indicates the tool name.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  toolName: string;

  /**
   * Indicates the subcommand.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  subCommand: string;

  /**
   * Indicates the tool arguments.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  args: Record<string, Object>;

  /**
   * Indicates the challenge code for permission verification.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  challenge: string;

  /**
   * Indicates the execution options.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execOptions?: ExecOptions;
}

/**
 * Command execution parameter for hook interception.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecCmdParam {
  /**
   * Indicates the shell command string.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  cmd: string;

  /**
   * Indicates the command execution options.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execCmdOptions?: ExecCmdOptions;
}

/**
 * Result parameter for onAfterCallTool and onAfterCallCmd.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecResultWrap {
  /**
   * Indicates the execution result.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execResult: ExecResult;
}

/**
 * Hook interface for intercepting CLI tool and command execution.
 *
 * The hook object may implement any subset of the optional methods.
 * Only implemented methods are invoked; unimplemented methods are skipped.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface CliHook {
  /**
   * Called before a tool is executed. The returned object replaces the original parameter.
   *
   * @param { ExecToolParam } param - The original tool execution parameter.
   * @returns { ExecToolParam } The (possibly modified) parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeCallTool?(param: ExecToolParam): ExecToolParam;

  /**
   * Called after a tool is executed. The returned object replaces the original result.
   *
   * @param { ExecResultWrap } param - The execution result parameter.
   * @returns { ExecResultWrap } The (possibly modified) result parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterCallTool?(param: ExecResultWrap): ExecResultWrap;

  /**
   * Called before a command is executed. The returned object replaces the original parameter.
   *
   * @param { ExecCmdParam } param - The original command execution parameter.
   * @returns { ExecCmdParam } The (possibly modified) parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeCallCmd?(param: ExecCmdParam): ExecCmdParam;

  /**
   * Called after a command is executed. The returned object replaces the original result.
   *
   * @param { ExecResultWrap } param - The execution result parameter.
   * @returns { ExecResultWrap } The (possibly modified) result parameter.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterCallCmd?(param: ExecResultWrap): ExecResultWrap;
}

export default CliHook;
