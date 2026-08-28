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
 * 的入参，表示同步远端设备任务列表时所需的参数对象，包含deviceId、fixConflict和tag等字段。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface MissionParameter {
  /**
   * 同步目标设备的ID。
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
   * 是否处理版本冲突，true表示处理冲突，false表示不处理冲突。
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
   * 表示任务的标签，取值为非负整数，0表示默认标签，用于标识和区分不同的同步任务。
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
