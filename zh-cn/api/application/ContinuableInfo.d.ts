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
 * 当注册应用任务流转状态监听的回调时，返回应用任务流转状态和流转信息，注册详见：
 * [on('continueStateChange')接口]{@link @ohos.distributedMissionManager:distributedMissionManager.on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>)}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export interface ContinuableInfo {
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
   * 表示任务所属目标端应用包名。该参数作为srcBundleName的默认值使用，当srcBundleName未传入时，其值默认与bundleName相同。
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
   * 表示任务所属应用迁移类型。取值由应用在配置文件中自定义，用于标识不同的任务流转策略（如多设备协同时的任务流转、跨设备复制任务状态等场景）。如果不传，则使用系统默认值。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  continueType?: string;
  /**
   * 表示任务所属目标应用ID列表。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for internal system users.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  targetAppIds?: Array<string>;
}
