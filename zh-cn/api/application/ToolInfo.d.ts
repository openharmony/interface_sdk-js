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
 * ToolInfo用于描述系统命令行工具（CLI）的基本信息，包括工具名称、版本、描述、可执行路径、输入输出模式等。
 *
 * @typedef ToolInfo
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolInfo {
  /**
   * CLI工具的名称，用于在系统中唯一标识一个CLI工具。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * CLI工具的版本号。遵循语义化版本规范（如"1.0.0"），格式由提供商定义。版本号用于标识工具的功能迭代和兼容性变化。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * CLI工具的功能描述。该描述应清晰说明工具的核心功能和用途，帮助用户理解工具能做什么。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * CLI工具的可执行文件路径。必须是绝对路径。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly executablePath: string;

  /**
   * CLI工具所需的权限列表。所有权限项必须为唯一的字符串。系统将在执行该工具时校验调用者是否具备所需权限，不具备相应权限将无法执行。默认值为空数组。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * CLI工具的输入模式定义。使用JSON Schema格式定义输入参数的结构和类型，用于描述工具接受的输入数据格式。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * CLI工具的输出模式定义。使用JSON Schema格式定义输出数据的结构和类型，用于描述工具返回的输出数据格式。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * CLI工具支持的自定义事件类型列表。所有事件类型必须为唯一的字符串。默认值为空数组。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * 自定义事件的模式定义。以键值对形式存储，键为事件类型，值为该事件的JSON Schema定义。默认值为空对象。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;

  /**
   * 指示该工具是否支持子命令。true表示工具支持子命令，false表示不支持子命令。默认值为false。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly hasSubCommand?: boolean;

  /**
   * 子命令信息列表。以键值对形式存储，键为子命令名称，值为子命令的详细信息。默认值为空对象。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly subcommands?: Record<string, SubCommandInfo>;

  /**
   * 指示该工具是否支持在锁屏状态下执行。true表示工具支持在锁屏状态下执行，false表示工具不支持在锁屏状态下执行。默认值为false。
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
 * 描述CLI工具的摘要信息。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolSummary {
  /**
   * CLI工具的名称，用于在系统中唯一标识一个CLI工具。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly name: string;

  /**
   * CLI工具的版本号。遵循语义化版本规范（如"1.0.0"），格式由提供商定义。版本号用于标识工具的功能迭代和兼容性变化。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly version: string;

  /**
   * CLI工具的功能描述。该描述应清晰说明工具的核心功能和用途，帮助用户理解工具能做什么。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;
}

/**
 * 描述CLI工具子命令的信息。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface SubCommandInfo {
  /**
   * 子命令的描述。应清晰说明该子命令的具体功能和使用场景。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly description: string;

  /**
   * 子命令所需的权限列表。所有权限项必须为唯一的字符串。系统将在执行该子命令时校验调用者是否具备所需权限，不具备相应权限将无法执行。默认值为空数组。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly requirePermissions?: Array<string>;

  /**
   * 子命令的输入模式定义。使用JSON Schema格式定义输入参数的结构和类型。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly inputSchema: Record<string, Object>;

  /**
   * 子命令的输出模式定义。使用JSON Schema格式定义输出数据的结构和类型。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly outputSchema: Record<string, Object>;

  /**
   * CLI工具支持的自定义事件类型列表。所有事件类型必须为唯一的字符串。默认值为空数组。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventTypes?: Array<string>;

  /**
   * 子命令自定义事件的模式定义。以键值对形式存储，键为事件类型，值为该事件的JSON Schema定义。默认值为空对象。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  readonly eventSchemas?: Record<string, Record<string, Object>>;
}
