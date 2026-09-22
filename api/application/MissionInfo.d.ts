/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Mission Info
 * @kit AbilityKit
 */

import Want from '../@ohos.app.ability.Want';

/**
 * The module defines detailed information about a mission. The information can be obtained through
 * [getMissionInfo]{@link @ohos.app.ability.missionManager:missionManager.getMissionInfo(deviceId: string, missionId: int, callback: AsyncCallback<MissionInfo>)}
 * .
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionInfo {
  /**
   * Indicates mission id.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  missionId: int;

  /**
   * Indicates the running state. The value **0** means enabled, indicating that the task is active and valid, and
   * the corresponding Ability is running or can be restored to the foreground. The value **-1** means not enabled,
   * indicating that the task is closed, destroyed, or cannot be restored.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  runningState: int;

  /**
   * Indicates the locked state. The value **true** means the locked state, and **false** means the unlocked state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  lockedState: boolean;

  /**
   * Indicates the recent created or updated time of the mission.
   * Unit: ns
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  timestamp: string;

  /**
   * Indicates want of the mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  want: Want;

  /**
   * Indicates the label of the mission, used as the task name displayed in the task list.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  label: string;

  /**
   * Indicates icon path of the mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  iconPath: string;

  /**
   * Indicates whether the mission is continuable. The value **true** means continuable, and **false** means not
   * continuable.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  continuable: boolean;

  /**
   * Indicates the ability state of this mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  abilityState: int;

  /**
   * Indicates whether the mission can be manually deleted by the user. The value **true** means it can be manually
   * deleted by the user, and **false** means it cannot be manually deleted by the user.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  unclearable: boolean;
}