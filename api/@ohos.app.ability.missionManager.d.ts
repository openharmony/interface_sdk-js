/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { MissionInfo as _MissionInfo } from './application/MissionInfo';
import { MissionListener as _MissionListener } from './application/MissionListener';
import { MissionSnapshot as _MissionSnapshot } from './application/MissionSnapshot';
import StartOptions from './@ohos.app.ability.StartOptions';

/**
 * # Required Permissions
 *
 * ohos.permission.MANAGE_MISSIONS
 */
/**
 * The missionManager module provides APIs to lock, unlock, and clear missions, and switch a mission to the foreground.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace missionManager {
  /**
   * Registers a listener to observe the mission status.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - Name of the target mission. The value is fixed at **'mission'**, indicating the system
   *     mission status listener.
   * @param { MissionListener } listener - Mission status listener to register.
   * @returns { long } Index of the mission status listener, which is created by the system and allocated when the
   *     listener is registered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'mission', listener: MissionListener): long;

  /**
   * Register the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionListener } listener - Indicates the MissionListener to be registered.
   * @returns { long } Returns the index number of the MissionListener.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function onMission(listener: MissionListener): long;

  /**
   * Deregisters a mission status listener. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - Name of the target mission. The value is fixed at **'mission'**, indicating the system
   *     mission status listener.
   * @param { long } listenerId - Index of the mission status listener to deregister. It is returned by **on()**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'mission', listenerId: long, callback: AsyncCallback<void>): void;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long, callback: AsyncCallback<void>): void;

  /**
   * Unregisters a mission status listener. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - Name of the target mission. The value is fixed at **'mission'**, indicating the system
   *     mission status listener.
   * @param { long } listenerId - Index of the mission status listener to deregister. It is returned by **on()**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'mission', listenerId: long): Promise<void>;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long): Promise<void>;

  /**
   * Obtains the mission information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<MissionInfo> } callback - Callback used to return the mission information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfo(deviceId: string, missionId: int, callback: AsyncCallback<MissionInfo>): void;

  /**
   * Obtains the mission information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @returns { Promise<MissionInfo> } Promise used to return the mission information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfo(deviceId: string, missionId: int): Promise<MissionInfo>;

  /**
   * Obtains information about all missions. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } numMax - Maximum number of missions whose information can be obtained.
   * @param { AsyncCallback<Array<MissionInfo>> } callback - Callback used to return the array of mission information
   *     obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>): void;

  /**
   * Obtains information about all missions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } numMax - Maximum number of missions whose information can be obtained.
   * @returns { Promise<Array<MissionInfo>> } Promise used to return the array of mission information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfos(deviceId: string, numMax: int): Promise<Array<MissionInfo>>;

  /**
   * Obtains the snapshot of a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<MissionSnapshot> } callback - Callback used to return the snapshot information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionSnapShot(deviceId: string, missionId: int, callback: AsyncCallback<MissionSnapshot>): void;

  /**
   * Obtains the snapshot of a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @returns { Promise<MissionSnapshot> } Promise used to return the snapshot information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>;

  /**
   * Obtains the low-resolution snapshot of a given mission. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<MissionSnapshot> } callback - Callback used to return the snapshot information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLowResolutionMissionSnapShot(
    deviceId: string,
    missionId: int,
    callback: AsyncCallback<MissionSnapshot>
  ): void;

  /**
   * Obtains the low-resolution snapshot of a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Device ID. It is a null string by default for the local device.
   * @param { int } missionId - Mission ID.
   * @returns { Promise<MissionSnapshot> } Promise used to return the snapshot information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLowResolutionMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>;

  /**
   * Locks a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function lockMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Locks a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function lockMission(missionId: int): Promise<void>;

  /**
   * Unlocks a given mission. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unlockMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Unlocks a given mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unlockMission(missionId: int): Promise<void>;

  /**
   * Clears a given mission, regardless of whether it is locked. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Clears a given mission, regardless of whether it is locked. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearMission(missionId: int): Promise<void>;

  /**
   * Clears all unlocked missions. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearAllMissions(callback: AsyncCallback<void>): void;

  /**
   * Clears all unlocked missions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearAllMissions(): Promise<void>;

  /**
   * Switches a given mission to the foreground. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses
   * an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { StartOptions } options - Startup parameters, which are used to specify the window mode and device ID for
   *     switching the mission to the foreground.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Mission ID.
   * @param { StartOptions } [options] - Startup parameters, which are used to specify the window mode and device ID for
   *     switching the mission to the foreground. By default, no value is passed in, indicating that the default startup
   *     parameters are used.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, options?: StartOptions): Promise<void>;

  /**
   * Switches a batch of missions to the foreground. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Array holding the mission IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, callback: AsyncCallback<void>): void;

  /**
   * Switches a batch of missions to the foreground, and moves the mission with the specified ID to the top. This API
   * uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Array holding the mission IDs.
   * @param { int } topMission - ID of the mission to be moved to the top.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, topMission: int, callback: AsyncCallback<void>): void;

  /**
   * Switches a batch of missions to the foreground, and moves the mission with the specified ID to the top. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Array holding the mission IDs.
   * @param { int } topMission - ID of the mission to be moved to the top. The default value is **-1**, indicating that
   *     the default mission is moved to the top.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, topMission?: int): Promise<void>;

  /**
   * Switches a batch of missions to the background. The mission IDs returned are sorted by mission level when the
   * missions are switched. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Array holding the mission IDs.
   * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToBackground(missionIds: Array<int>, callback: AsyncCallback<Array<int>>): void;

  /**
   * Switches a batch of missions to the background. The mission IDs returned are sorted by mission level when the
   * missions are switched. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Array holding the mission IDs.
   * @returns { Promise<Array<int>> } Promise used to return an array of mission IDs.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToBackground(missionIds: Array<int>): Promise<Array<int>>;

  /**
   * Mission information corresponding to ability.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionInfo = _MissionInfo;

  /**
   * MissionListener registered by app.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionListener = _MissionListener;

  /**
   * Mission snapshot corresponding to mission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionSnapshot = _MissionSnapshot;
}

export default missionManager;