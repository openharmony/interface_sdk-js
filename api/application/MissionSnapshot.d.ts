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

import { ElementName } from '../bundleManager/ElementName';
import image from '../@ohos.multimedia.image';

/**
 * The module defines the snapshot of a mission. The snapshot can be obtained through 
 * [missionManager.getMissionSnapShot]{@link @ohos.app.ability.missionManager:missionManager.getMissionSnapShot(deviceId: string, missionId: int, callback: AsyncCallback<MissionSnapshot>)}
 * .
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionSnapshot {
  /**
   * Ability information of the mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  ability: ElementName;

  /**
   * Snapshot of the mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  snapshot: image.PixelMap;
}