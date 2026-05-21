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
 * The module defines the listeners used to observe the mission status. The listeners can be registered by using
 * [on]{@link @ohos.app.ability.missionManager:missionManager.on_mission}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionListener {
  /**
   * Called when the system creates a mission.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionCreated(mission: int): void;

  /**
   * Called when the system destroys a mission.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionDestroyed(mission: int): void;

  /**
   * Called when the system updates the snapshot of a mission.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionSnapshotChanged(mission: int): void;

  /**
   * Called when the system moves a mission to the foreground.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionMovedToFront(mission: int): void;

  /**
   * Called when the system updates the label of a mission.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionLabelUpdated(mission: int): void;

  /**
   * Called when the system updates the icon of a mission.
   *
   * @param { int } mission - Mission ID.
   * @param { image.PixelMap } icon - New mission icon.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionIconUpdated(mission: int, icon: image.PixelMap): void;

  /**
   * Called when the system closes a mission.
   *
   * @param { int } mission - Mission ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionClosed(mission: int): void;
}