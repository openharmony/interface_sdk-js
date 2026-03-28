/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit AbilityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type { ContinuableInfo as _ContinuableInfo } from './application/ContinuableInfo';
import type { ContinueCallback as _ContinueCallback } from './application/ContinueCallback';
import type { ContinueDeviceInfo as _ContinueDeviceInfo } from './application/ContinueDeviceInfo';
import type { ContinueMissionInfo as _ContinueMissionInfo } from './application/ContinueMissionInfo';
import type { MissionCallback as _MissionCallback } from './application/MissionCallbacks';
import type { MissionDeviceInfo as _MissionDeviceInfo } from './application/MissionDeviceInfo';
import type { MissionParameter as _MissionParameter } from './application/MissionParameter';

/**
 * The distributedMissionManager module implements mission management across devices. You can use the APIs provided by
 * this module to register or unregister a mission status listener, start or stop synchronizing a remote mission list,
 * and continue a mission on a remote device by mission ID or bundle name.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace distributedMissionManager {
  /**
   * Enumerates the mission continuation states.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  enum ContinueState {
    /**
     * Continuation is activated for the current mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 0,

    /**
     * Continuation is not activated for the current mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    INACTIVE = 1
  }

  /**
   * Defines the information about the callback that is triggered for mission continuation state changes.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ContinueCallbackInfo {
    /**
     * Continuation state of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    state: ContinueState;

    /**
     * Continuation information of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    info: ContinuableInfo;
  }

  /**
   * Starts to synchronize the remote mission list. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - Parameters required for synchronization.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the synchronization is started, **err**
   *     is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function startSyncRemoteMissions(parameter: MissionParameter, callback: AsyncCallback<void>): void;

  /**
   * Starts to synchronize the remote mission list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - Parameters required for synchronization.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function startSyncRemoteMissions(parameter: MissionParameter): Promise<void>;

  /**
   * Stops synchronizing the remote mission list. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Parameters required for synchronization.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the synchronization is stopped, **err**
   *     is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSyncRemoteMissions(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void;

  /**
   * Stops synchronizing the remote mission list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Parameters required for synchronization.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSyncRemoteMissions(parameter: MissionDeviceInfo): Promise<void>;

  /**
   * Registers a mission status listener. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Information about the device to listen for.
   * @param { MissionCallback } options - Callback to register.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the listener is registered, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback, callback: AsyncCallback<void>): void;

  /**
   * Registers a mission status listener. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Information about the device to listen for.
   * @param { MissionCallback } options - Callback to register.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback): Promise<void>;

  /**
   * Unregisters a mission status listener. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Information about the device to listen for.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the listener is unregistered, **err**
   *     is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function unRegisterMissionListener(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void;

  /**
   * Unregisters a mission status listener. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - Information about the device to listen for.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function unRegisterMissionListener(parameter: MissionDeviceInfo): Promise<void>;

  /**
   * Subscribes to continuation state change events of the current mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - Event type. The value **'continueStateChange'** indicates the continuation state
   *     change event of the current mission.
   * @param { Callback<{ state: ContinueState, info: ContinuableInfo }> } callback - Callback used to return the continuation
   *     state and information of the current mission. [since 10 - 10]
   * @param { Callback<ContinueCallbackInfo> } callback - Callback used to return the continuation state and information of
   *     the current mission. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   */
  function on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>): void;

  /**
   * Unsubscribes from continuation state change events of the current mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - Event type. The value **'continueStateChange'** indicates the continuation state
   *     change event of the current mission.
   * @param { Callback<{ state: ContinueState, info: ContinuableInfo }> } [callback] - Callback used for unsubscription.<br>
   *     If the callback is unspecified, all subscriptions to the specified event are canceled. [since 10 - 10]
   * @param { Callback<ContinueCallbackInfo> } callback - Callback used for unsubscription.<br>If the callback is unspecified
   *     , all subscriptions to the specified event are canceled. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   */
  function off(type: 'continueStateChange', callback?: Callback<ContinueCallbackInfo>): void;

  /**
   * Register continuable info listener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Callback<ContinueCallbackInfo> } callback - The callback of continueStateChange.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 static
   */
  function onContinueStateChange(callback: Callback<ContinueCallbackInfo>): void;

  /**
   * Unregister continuable info listener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Callback<ContinueCallbackInfo> } [callback] - The callback of continueStateChange.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 static
   */
  function offContinueStateChange(callback?: Callback<ContinueCallbackInfo>): void;

  /**
   * Continues a mission on a remote device, with the mission ID specified. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueDeviceInfo } parameter - Parameters required for mission continuation.
   * @param { ContinueCallback } options - Callback invoked when the mission continuation is complete.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is continued, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300502 - Failed to get the missionInfo of the specified missionId.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free isnot
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continuedis
   *     located or the target device to be continued.
   * @throws { BusinessError } 16300506 - The local continuation task is already in progress.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback, callback: AsyncCallback<void>): void;

  /**
   * Continues a mission on a remote device, with the mission ID specified. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueDeviceInfo } parameter - Parameters required for mission continuation.
   * @param { ContinueCallback } options - Callback invoked when the mission continuation is complete.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300502 - Failed to get the missionInfo of the specified missionId.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free isnot
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continuedis
   *     located or the target device to be continued.
   * @throws { BusinessError } 16300506 - The local continuation task is already in progress.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback): Promise<void>;

  /**
   * Continues a mission on a remote device, with the bundle name specified. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueMissionInfo } parameter - Parameters required for mission continuation.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mission is continued, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free isnot
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continuedis
   *     located or the target device to be continued.
   * @throws { BusinessError } 16300506 - The local continuation task is already in progress.
   * @throws { BusinessError } 16300507 - Failed to get the missionInfo of the specified bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function continueMission(parameter: ContinueMissionInfo, callback: AsyncCallback<void>): void;

  /**
   * Continues a mission on a remote device, with the bundle name specified. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueMissionInfo } parameter - Parameters required for mission continuation.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free isnot
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continuedis
   *     located or the target device to be continued.
   * @throws { BusinessError } 16300506 - The local continuation task is already in progress.
   * @throws { BusinessError } 16300507 - Failed to get the missionInfo of the specified bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function continueMission(parameter: ContinueMissionInfo): Promise<void>;

  /**
   * Continuable information corresponding to ability.
   *
   * @typedef { _ContinuableInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type ContinuableInfo = _ContinuableInfo;

  /**
   * Parameters corresponding to continue mission.
   *
   * @typedef { _ContinueMissionInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type ContinueMissionInfo = _ContinueMissionInfo;

  /**
   * ContinueCallback registered for notify continue result.
   *
   * @typedef { _ContinueCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type ContinueCallback = _ContinueCallback;

  /**
   * Parameters corresponding to continue mission.
   *
   * @typedef { _ContinueDeviceInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type ContinueDeviceInfo = _ContinueDeviceInfo;

  /**
   * Defines the callback invoked after synchronization starts. It is used as an input parameter in
   * [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback)}
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type MissionCallback = _MissionCallback;

  /**
   * Defines the parameters required for registering a listener. It is used as an input parameter in
   * [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback)}
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type MissionDeviceInfo = _MissionDeviceInfo;

  /**
   * Defines the parameters required for mission synchronization. It is used an input parameter in
   * [startSyncRemoteMissions]{@link startSyncRemoteMissions(parameter: MissionParameter)}
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type MissionParameter = _MissionParameter;
}
export default distributedMissionManager;