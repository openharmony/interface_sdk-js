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
 * @file CLI Hook
 * @kit AbilityKit
 */
import { ExecOptions, ExecCmdOptions, ExecResult } from '../@ohos.app.cli.cliManager';

/**
 * Hook拦截的工具执行参数。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecToolParam {
  /**
   * 工具名称。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  toolName: string;

  /**
   * 子命令。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  subCommand: string;

  /**
   * 工具参数。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  args: Record<string, Object>;

  /**
   * 用于权限校验的挑战码。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  challenge: string;

  /**
   * 执行选项。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execOptions?: ExecOptions;
}

/**
 * Hook拦截的命令执行参数。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecCmdParam {
  /**
   * shell命令字符串。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  cmd: string;

  /**
   * 命令执行选项。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execCmdOptions?: ExecCmdOptions;
}

/**
 * onAfterCallTool和onAfterCallCmd的结果参数。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface ExecResultWrap {
  /**
   * 执行结果。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  execResult: ExecResult;

  /**
   * 表示工具调用的唯一标识，从{@link ExecOptions}或{@link ExecCmdOptions}回传。
   * 仅当调用方传入该标识时存在。取值由字母、数字、'_'和'-'组成，最大长度为256。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  toolCallId?: string;

  /**
   * 表示对话管理（DM）会话标识，从{@link ExecOptions}或{@link ExecCmdOptions}回传。
   * 仅当调用方传入该标识时存在。取值由字母、数字、'_'和'-'组成，最大长度为256。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  dmSessionId?: string;
}

/**
 * 用于拦截CLI工具和命令执行的Hook接口。
 *
 * Hook对象可实现可选方法的任意子集。仅已实现的方法会被调用；未实现的方法将被跳过。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.1 dynamiconly
 */
export interface CliHook {
  /**
   * 工具执行前调用。返回的对象将替换原始参数。
   *
   * @param { ExecToolParam } param - 原始工具执行参数。
   * @returns { ExecToolParam } 返回（可能已被修改的）参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeCallTool?(param: ExecToolParam): ExecToolParam;

  /**
   * 工具执行后调用。返回的对象将替换原始结果。
   *
   * @param { ExecResultWrap } param - 执行结果参数。
   * @returns { ExecResultWrap } 返回（可能已被修改的）结果参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterCallTool?(param: ExecResultWrap): ExecResultWrap;

  /**
   * 命令执行前调用。返回的对象将替换原始参数。
   *
   * @param { ExecCmdParam } param - 原始命令执行参数。
   * @returns { ExecCmdParam } 返回（可能已被修改的）参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onBeforeCallCmd?(param: ExecCmdParam): ExecCmdParam;

  /**
   * 命令执行后调用。返回的对象将替换原始结果。
   *
   * @param { ExecResultWrap } param - 执行结果参数。
   * @returns { ExecResultWrap } 返回（可能已被修改的）结果参数。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamiconly
   */
  onAfterCallCmd?(param: ExecResultWrap): ExecResultWrap;
}

export default CliHook;
