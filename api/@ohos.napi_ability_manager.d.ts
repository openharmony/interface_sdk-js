/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AbilityMissionInfo } from './app/abilitymissioninfo';
import { ProcessInfo } from './app/processinfo';
import { AsyncCallback } from './app/common';
import { AppProcessState as _AppProcessState } from './app/appprocessstate';

declare namespace abilityManager {
  export import AppProcessState = _AppProcessState;
  /**
   * Obtains information about application processes that are running on the device.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @returns Returns a list of running processes.
   * @testapi
   */
  function getAllRunningProcesses(): Promise<Array<ProcessInfo>>;

  /**
   * Obtains information about the application process running on the device through callback.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param callback Specified callback method.
   * @testapi
   */
  function getAllRunningProcesses(
    callback: AsyncCallback<Array<ProcessInfo>>,
  ): void;

  /**
   * Queries information about the running Ability Mission.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @returns Returns the AbilityMissionInfos.
   * @testapi
   */
  function queryRunningAbilityMissionInfos(): Promise<
    Array<AbilityMissionInfo>
  >;

  /**
   * Queries information about the running Ability Mission through callback.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param callback Specified callback method.
   * @testapi
   */
  function queryRunningAbilityMissionInfos(
    callback: AsyncCallback<Array<AbilityMissionInfo>>,
  ): void;

  /**
   * Queries information about the recent Ability Mission.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @returns Returns the AbilityMissionInfos.
   * @testapi
   */
  function queryRecentAbilityMissionInfos(): Promise<Array<AbilityMissionInfo>>;

  /**
   * Queries information about the recent Ability Mission.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param callback Specified callback method.
   * @testapi
   */
  function queryRecentAbilityMissionInfos(
    callback: AsyncCallback<Array<AbilityMissionInfo>>,
  ): void;

  /**
   * Specifies that the task associated with the given task ID is removed from the stack.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param missionId Indicates the mission ID
   * @returns Returns 0 for success, return non-0 for failure.
   * @testapi
   */
  function removeMission(missionId: number): Promise<number>;

  /**
   * Specifies that the task associated with the given task ID is removed from the stack through callback.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param missionId Indicates the mission ID
   * @param callback Specified callback method
   * @testapi
   */
  function removeMission(
    missionId: number,
    callback: AsyncCallback<number>,
  ): void;

  /**
   * Removes the specified mission stack by stack ID.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param stackId Indicates the stack ID
   * @returns Returns 0 for success, return non-0 for failure.
   * @testapi
   */
  function removeStack(stackId: number): Promise<number>;

  /**
   * Removes the specified mission stack by stack ID.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param stackId Indicates the stack ID
   * @param callback Specified callback method.
   * @testapi
   */
  function removeStack(stackId: number, callback: AsyncCallback<number>): void;

  /**
   * Ask that the mission associated with a given mission ID be moved to the
   * front of the stack.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param missionId Indicates the mission ID
   * @returns Returns 0 for success, return non-0 for failure.
   * @testapi
   */
  function moveMissionToTop(missionId: number): Promise<number>;

  /**
   * Ask that the mission associated with a given mission ID be moved to the
   * front of the stack.
   *
   * @default -
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param missionId Indicates the mission ID
   * @param callback Specified callback method.
   * @testapi
   */
  function moveMissionToTop(
    missionId: number,
    callback: AsyncCallback<number>,
  ): void;
}
export default abilityManager;
