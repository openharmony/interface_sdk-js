/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * 表示发起Mission迁移时所需参数的枚举，迁移Mission详见：
 * [continueMission接口]{@link @ohos.distributedMissionManager:distributedMissionManager.continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback, callback: AsyncCallback<void>)}
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface ContinueDeviceInfo {
  /**
   * 表示任务迁移源设备ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  srcDeviceId: string;
  /**
   * 表示任务迁移目标设备ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  dstDeviceId: string;
  /**
   * 表示任务ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  missionId: int;
  /**
   * 表示扩展参数。
   *
   * @type { object } [since 9 - 10]
   * @type { Record<string, Object> } [since 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  wantParam: Record<string, Object>;
}