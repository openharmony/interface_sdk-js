/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import { AsyncCallback } from './basic';
import { MissionCallback } from './application/MissionCallbacks';
import { MissionDeviceInfo } from './application/MissionDeviceInfo';
import { MissionParameter } from './application/MissionParameter';

/**
 * This module provides the capability to manage abilities and obtaining system task information for distributed
 * scenario.
 * @name distributedMissionManager
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @permission ohos.permission.MANAGE_MISSIONS
 * @systemapi Hide this for inner system use.
 */
declare namespace distributedMissionManager {
  /**
   * Start sync missions from remote device.
   *
   * @since 9
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission.
   * @param parameter Parameters corresponding to mission.
   * @systemapi Hide this for inner system use.
   */
  function startSyncRemoteMissions(parameter: MissionParameter, callback: AsyncCallback<void>): void;
  function startSyncRemoteMissions(parameter: MissionParameter): Promise<void>;

  /**
   * Stop sync missions from remote device.
   *
   * @since 9
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission.
   * @param parameter Parameters corresponding to mission.
   * @systemapi Hide this for inner system use.
   */
  function stopSyncRemoteMissions(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void;
  function stopSyncRemoteMissions(parameter: MissionDeviceInfo): Promise<void>;

  /**
   * Register the missionListener to ams.
   *
   * @since 9
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @param parameter Parameters corresponding to mission.
   * @param options The callbacks for regist mission.
   * @systemapi Hide this for inner system use.
   */
  function registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback, callback: AsyncCallback<void>): void;
  function registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback): Promise<void>;

  /**
  * Unrgister the missionListener to ams.
  *
  * @since 9
  * @syscap SystemCapability.Ability.AbilityRuntime.Mission
  * @param parameter Parameters corresponding to mission.
  * @systemapi Hide this for inner system use.
  */
  function unRegisterMissionListener(parameter: MissionDeviceInfo, callback:AsyncCallback<void>): void;
  function unRegisterMissionListener(parameter: MissionDeviceInfo): Promise<void>;
}
export default distributedMissionManager;
