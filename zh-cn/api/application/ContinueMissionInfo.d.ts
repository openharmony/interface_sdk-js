/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * 表示发起按照包名迁移时所需参数的接口对象，迁移Mission详见：
 * [continueMission接口]{@link @ohos.distributedMissionManager:distributedMissionManager.continueMission(parameter: ContinueMissionInfo, callback: AsyncCallback<void>)}
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export interface ContinueMissionInfo {
  /**
   * 表示任务迁移源设备ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  srcDeviceId: string;
  /**
   * 表示任务迁移目标设备ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  dstDeviceId: string;
  /**
   * 表示任务所属目标端应用包名。最大长度255字符。该参数作为srcBundleName的默认值使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  bundleName: string;
  /**
   * 表示任务所属源端应用包名。当源端和目标端应用包名不同时需要传入（如跨应用迁移、应用包名变更等场景），不传入时默认与bundleName相同。最大长度255字符。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  srcBundleName?: string;
  /**
   * 表示任务所属应用迁移类型。如果不传，则使用系统默认值。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  continueType?: string;
  /**
   * 表示扩展参数。用于传递任务迁移时的自定义信息。可以包含开发者自定义的键值对，用于标识迁移场景或携带迁移相关的配置信息。
   *
   * @type { object } [since 10 - 10]
   * @type { Record<string, Object> } [since 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  wantParam: Record<string, Object>;
}
