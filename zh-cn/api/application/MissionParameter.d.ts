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
 * 作为
 * [startSyncRemoteMissions]{@link @ohos.distributedMissionManager:distributedMissionManager.startSyncRemoteMissions(parameter: MissionParameter, callback: AsyncCallback<void>)}
 * 的入参，表示同步时所需参数的枚举。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface MissionParameter {
  /**
   * 表示设备ID。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId: string;

  /**
   * 表示是否存在版本冲突，true表示存在冲突，false表示不存在冲突。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  fixConflict: boolean;

  /**
   * 表示任务的标签，0表示默认标签。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  tag: int;
}