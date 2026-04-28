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

import image from '../@ohos.multimedia.image';

/**
 * 定义系统任务状态监听，可以通过[on]{@link @ohos.app.ability.missionManager:missionManager.on_mission}注册。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionListener {
  /**
   * 当系统创建任务时会触发该回调函数。
   *
   * @param { int } mission - 表示创建的任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionCreated(mission: int): void;

  /**
   * 当系统销毁任务时会触发该回调函数。
   *
   * @param { int } mission - 表示销毁的任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionDestroyed(mission: int): void;

  /**
   * 当系统更新任务缩略图时会触发该回调函数。
   *
   * @param { int } mission - 表示任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionSnapshotChanged(mission: int): void;

  /**
   * 当系统将任务移动到前台时会触发该回调函数。
   *
   * @param { int } mission - 表示任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionMovedToFront(mission: int): void;

  /**
   * 当系统更新任务标签时会触发该回调函数。
   *
   * @param { int } mission - 表示任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionLabelUpdated(mission: int): void;

  /**
   * 当系统更新任务图标时会触发该回调函数。
   *
   * @param { int } mission - 表示任务ID。
   * @param { image.PixelMap } icon - 表示更新的任务图标。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionIconUpdated(mission: int, icon: image.PixelMap): void;

  /**
   * 当系统关闭任务时会触发该回调函数。
   *
   * @param { int } mission - 表示关闭的任务ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionClosed(mission: int): void;
}