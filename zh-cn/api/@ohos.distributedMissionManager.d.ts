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
 * 分布式任务管理模块提供跨设备任务管理能力，包括注册和取消任务状态监听、开始和停止同步远端设备任务列表、通过任务ID和包名进行迁移任务等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace distributedMissionManager {
  /**
   * 当前任务流转状态的枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  enum ContinueState {
    /**
     * 表示当前任务流转处于激活状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 0,

    /**
     * 表示当前任务流转处于未激活状态。
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
   * 当前任务流转状态监听的回调信息，包含流转状态和流转信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ContinueCallbackInfo {
    /**
     * 表示当前任务的流转状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    state: ContinueState;

    /**
     * 表示当前任务的流转信息。
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
   * 开始同步远端设备的任务列表。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - 同步信息。
   * @param { AsyncCallback<void> } callback - 回调函数，同步远端任务列表成功时，err为undefined，否则返回错误对象。
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
   * 开始同步远端设备的任务列表。使用promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - 同步信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 停止同步远端设备的任务列表。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 同步信息。
   * @param { AsyncCallback<void> } callback - 回调函数，停止同步远端任务列表成功时，err为undefined，否则为错误对象。
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
   * 停止同步远端设备的任务列表。使用promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 同步信息。
   * @returns { Promise<void> } 无返回结果的promise对象。
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
   * 注册任务状态监听。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息。
   * @param { MissionCallback } options - 注册的回调方法。
   * @param { AsyncCallback<void> } callback - 回调函数，注册监听成功，err为undefined，否则为错误对象。
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
   * 注册任务状态监听。使用promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息。
   * @param { MissionCallback } options - 注册的回调方法。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 取消任务状态监听。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息。
   * @param { AsyncCallback<void> } callback - 回调函数，取消监听成功，err为undefined，否则为错误对象。
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
   * 取消任务状态监听。使用promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 注册当前任务流转状态的监听。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - 当前任务流转状态，取值为'continueStateChange'。
   * @param { Callback<{ state: ContinueState, info: ContinuableInfo }> } callback - Callback used to return the continuation
   *     state and information of the current mission. [since 10 - 10]
   * @param { Callback<ContinueCallbackInfo> } callback - 回调函数，返回当前任务的流转状态和流转信息。[since 11]
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
   * 取消当前任务流转的状态监听。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - 当前任务流转状态，取值为'continueStateChange'。
   * @param { Callback<{ state: ContinueState, info: ContinuableInfo }> } [callback] - 需要取消的回调函数。<br>参数不填写，取消type对应的所有回调监听。[since 10 - 10]
   * @param { Callback<ContinueCallbackInfo> } callback - 需要取消的回调函数。<br>参数不填写，取消type对应的所有回调监听。[since 11]
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
   * Continue mission
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
   * 通过指定任务ID（missionId）的方式进行迁移任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueDeviceInfo } parameter - 迁移信息。
   * @param { ContinueCallback } options - 迁移任务完成回调函数。
   * @param { AsyncCallback<void> } callback - 回调函数，迁移任务完成时，err为undefined，否则返回错误对象。
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
   * 通过指定任务ID（missionId）的方式进行迁移任务。使用promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueDeviceInfo } parameter - 迁移信息。
   * @param { ContinueCallback } options - 迁移任务完成回调函数。
   * @returns { Promise<void> } 无返回结果的promise对象。
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
   * 通过指定包名（bundleName）的方式进行迁移任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueMissionInfo } parameter - 迁移信息。
   * @param { AsyncCallback<void> } callback - 回调函数，通过指定包名迁移任务完成时，err为undefined，否则为错误对象。
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
   * 通过指定包名（bundleName）的方式进行迁移任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinueMissionInfo } parameter - 迁移信息。
   * @returns { Promise<void> } 无返回结果的promise对象。
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
   * 作为可以
   * [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback, callback: AsyncCallback<void>)}
   * 的入参，表示开始同步后，建立的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type MissionCallback = _MissionCallback;

  /**
   * 可以作为
   * [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback, callback: AsyncCallback<void>)}
   * 的入参，表示注册监听时所需参数的枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export type MissionDeviceInfo = _MissionDeviceInfo;

  /**
   * 作为
   * [startSyncRemoteMissions]{@link startSyncRemoteMissions(parameter: MissionParameter, callback: AsyncCallback<void>)}
   * 的入参，表示同步时所需参数的枚举。
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