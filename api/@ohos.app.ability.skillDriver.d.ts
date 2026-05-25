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
 * Skill driver.
 *
 * @namespace skillDriver
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
declare namespace skillDriver {

  /**
   * Skill tool types supported by the skill driver
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  enum SkillToolType {  
    /**
     * OpenHarmony ArkTS script skill tool.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    OHOS_ARKTS_SCRIPT = 'ohos-arktsScript',

    /**
     * OpenHarmony Insight Intent skill tool
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    OHOS_INSIGHT_INTENT = 'ohos-insightIntent'
  }

  /**
   * Params when executing a skill.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface SkillToolParam {  
    /**
     * Indicates the bundle name.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    bundleName: string;

    /**
     * Indicates the module name.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    moduleName: string;

    /**
     * Indicates the skill name.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    skillName: string;

    /**
     * The name of target tool, support "ohos-arktsScript", "ohos-insightIntent".
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    skillToolType: SkillToolType;

    /**
     * The input args of tool.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    [key: string]: Object;
  }

  /**
 * Execute result of a skill.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface SkillToolResult {  
    /**
     * Indicates result code.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    readonly code: number;

    /**
     * Indicates execute result.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    readonly result?: Record<string, Object>;

    /**
     * Indicates the URIs will be authorized to the caller.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    readonly uris?: Array<string>;
  
    /**
     * Indicates the URIs read and write permissions which consistent with {@link Want#flags},
     * flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    readonly flags?: number;
  }

  /**
   * Execute a skill tool. support "ohos-arktsScript", "ohos-insightIntent".
   *
   * @permission ohos.permission.EXEC_CLI_TOOL
   * @param { SkillToolParam } skillToolParam - Skill parameter.
   * @param { string } challenge - The unique identifier get from access token manager.
   *     Only takes effect for standalone skills.
   * @returns { Promise<SkillToolResult> } execute result.
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
  function execSkillTool(skillToolParam: SkillToolParam, challenge: string): Promise<SkillToolResult>;
}

export default skillDriver;
