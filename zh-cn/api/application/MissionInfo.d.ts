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
   * 表示运行状态。0表示启用，任务活跃有效，对应的Ability正在运行或可恢复到前台；-1表示未启用，任务已关闭、销毁或不可恢复。
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
   * 表示任务的最近创建或更新时间。单位：ns
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
   * 表示任务的标签，用于在任务列表中显示的任务名称。
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