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
 * @file
 * @kit AbilityKit
 */

import Want from '../@ohos.app.ability.Want';

/**
 * 表示任务的详细信息，可以通过
 * [getMissionInfo]{@link ./../@ohos.app.ability.missionManager:missionManager.getMissionInfo(deviceId: string, missionId: int, callback: AsyncCallback<MissionInfo>)}
 * 获取。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionInfo {
  /**
   * 表示任务ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  missionId: int;

  /**
   * 表示运行状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  runningState: int;

  /**
   * 表示锁定状态。返回true表示锁定状态，返回false表示未锁定状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  lockedState: boolean;

  /**
   * 表示任务的最近创建或更新时间。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  timestamp: string;

  /**
   * 表示任务的Want信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  want: Want;

  /**
   * 表示任务的标签。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  label: string;

  /**
   * 表示任务的图标路径。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  iconPath: string;

  /**
   * 表示任务是否可以迁移。返回true表示可以迁移，返回false表示不可迁移。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  continuable: boolean;

  /**
   * 表示此任务的能力状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  abilityState: int;

  /**
   * 表示任务是否可以被用户手动删除。返回true表示可以被用户手动删除，返回false表示不可被用户手动删除。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  unclearable: boolean;
}