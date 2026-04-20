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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import { MissionInfo } from './application/MissionInfo';
import { MissionListener } from './application/MissionListener';
import { MissionSnapshot } from './application/MissionSnapshot';
import StartOptions from './@ohos.app.ability.StartOptions';

/**
 * The missionManager module provides APIs to lock, unlock, and clear missions, and switch a mission to the foreground.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 8 and deprecated since API version 9. You are advised to 
 * > use [@ohos.app.ability.missionManager]{@link @ohos.app.ability.missionManager:missionManager} instead. Newly added 
 * > APIs will be marked with a superscript to indicate their earliest API version.
 * >
 * > The APIs of this module are system APIs and cannot be called by third-party applications.
 *
 * @permission ohos.permission.MANAGE_MISSIONS
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.missionManager/missionManager
 */
declare namespace missionManager {
  /**
   * Registers a listener to observe the mission status.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionListener } listener - Mission status listener to register.
   * @returns { number } Index of the mission status listener, which is created by the system and allocated when the listener
   *     is registered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#on
   */
  function registerMissionListener(listener: MissionListener): number;

  /**
   * Unregisters a mission status listener. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } listenerId - Index of the mission status listener to unregister. It is returned by 
   *     **registerMissionListener()**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#off
   */
  function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregisters a mission status listener. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } listenerId - Index of the mission status listener to unregister. It is returned by 
   *     **registerMissionListener()**.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#off
   */
  function unregisterMissionListener(listenerId: number): Promise<void>;

  /**
   * Obtains the information about a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<MissionInfo> } callback - Callback used to return the mission information obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfo
   */
  function getMissionInfo(deviceId: string, missionId: number, callback: AsyncCallback<MissionInfo>): void;

  /**
   * Obtains the information about a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } missionId - Mission ID.
   * @returns { Promise<MissionInfo> } Promise used to return the mission information obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfo
   */
  function getMissionInfo(deviceId: string, missionId: number): Promise<MissionInfo>;

  /**
   * Obtains information about all missions. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } numMax - Maximum number of missions whose information can be obtained.
   * @param { AsyncCallback<Array<MissionInfo>> } callback - Callback used to return the array of mission information 
   *     obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfos
   */
  function getMissionInfos(deviceId: string, numMax: number, callback: AsyncCallback<Array<MissionInfo>>): void;

  /**
   * Obtains information about all missions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } numMax - Maximum number of missions whose information can be obtained.
   * @returns { Promise<Array<MissionInfo>> } Promise used to return the array of mission information obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfos
   */
  function getMissionInfos(deviceId: string, numMax: number): Promise<Array<MissionInfo>>;

  /**
   * Obtains the snapshot of a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<MissionSnapshot> } callback - Callback used to return the snapshot information obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionSnapShot
   */
  function getMissionSnapShot(deviceId: string, missionId: number, callback: AsyncCallback<MissionSnapshot>): void;

  /**
   * Obtains the snapshot of a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { number } missionId - Mission ID.
   * @returns { Promise<MissionSnapshot> } Promise used to return the snapshot information obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionSnapShot
   */
  function getMissionSnapShot(deviceId: string, missionId: number): Promise<MissionSnapshot>;

  /**
   * Locks a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is locked, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#lockMission
   */
  function lockMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * Locks a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#lockMission
   */
  function lockMission(missionId: number): Promise<void>;

  /**
   * Unlocks a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is unlocked, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#unlockMission
   */
  function unlockMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * Unlocks a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 	Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#unlockMission
   */
  function unlockMission(missionId: number): Promise<void>;

  /**
   * Clears a given mission, regardless of whether it is locked. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is cleared, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearMission
   */
  function clearMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * Clears a given mission, regardless of whether it is locked. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearMission
   */
  function clearMission(missionId: number): Promise<void>;

  /**
   * Clears all unlocked missions. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If all the unlocked missions are cleared, 
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearAllMissions
   */
  function clearAllMissions(callback: AsyncCallback<void>): void;

  /**
   * Clears all unlocked missions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearAllMissions
   */
  function clearAllMissions(): Promise<void>;

  /**
   * Switches a given mission to the foreground. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is switched to the 
   *     foreground, **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses 
   * an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { StartOptions } options - Startup parameters, which are used to specify the window mode and device ID for 
   *     switching the mission to the foreground.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is switched to the 
   *     foreground, **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses 
   * a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - Mission ID.
   * @param { StartOptions } [options] - Startup parameters, which are used to specify the window mode and device ID for 
   *     switching the mission to the foreground.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, options?: StartOptions): Promise<void>;
}

export default missionManager;
