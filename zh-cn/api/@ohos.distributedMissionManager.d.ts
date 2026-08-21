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
 * 后续版本的新增接口，采用上角标单独标记接口的起始版本。
 */
declare namespace distributedMissionManager {
  /**
   * 当前任务流转状态的枚举。模型约束：此接口仅可在Stage模型下使用。
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
   * 任务流转状态监听回调时返回的信息对象，包含state（流转状态）和info（流转详细信息）两个字段。state为ACTIVE表示流转处于激活状态，INACTIVE表示流转处于未激活状态。模型约束：此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ContinueCallbackInfo {
    /**
     * 表示当前任务的流转状态，取值为ACTIVE（激活）或INACTIVE（未激活），根据任务实际流转状态设置。
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
   * 开始同步远端设备的任务列表。使用callback异步回调。使用时须与stopSyncRemoteMissions严格配对，按"先启动、后停止"的顺序执行，同步完成后应立即停止以释放系统资源。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - 同步信息，包含deviceId、fixConflict和tag字段。tag为同步标识，用于区分不同同步会话，取值需满足场景需求。fixConflict表示是否解决冲突，建议在可能存在任务冲突的场景下设置为true。
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
   * 开始同步远端设备的任务列表。使用promise异步回调。使用时须与stopSyncRemoteMissions严格配对，按"先启动、后停止"的顺序执行，同步完成后应立即停止以释放系统资源。
   *
   * 设备行为差异：该接口在不支持分布式业务的Wearable设备不生效。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionParameter } parameter - 同步信息，包含deviceId、fixConflict和tag字段。tag为同步标识，用于区分不同同步会话，取值需满足场景需求。fixConflict表示是否解决冲突，建议在可能存在任务冲突的场景下设置为true。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示远端设备任务列表同步已成功启动，失败时返回错误信息。
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
   * 停止同步远端设备的任务列表。使用callback异步回调。调用成功后，系统将停止同步指定远端设备的任务列表。需先调用startSyncRemoteMissions启动同步后再调用，未启动同步时调用不生效。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 停止同步的设备信息，deviceId为要停止同步的远端设备ID。
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
   * 停止同步远端设备的任务列表。使用promise异步回调。调用成功后，系统将停止同步指定远端设备的任务列表。需先调用startSyncRemoteMissions启动同步后再调用，未启动同步时调用不生效。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 停止同步的设备信息，deviceId为要停止同步的远端设备ID。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示远端设备任务列表同步已成功停止，失败时返回错误信息。
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
   * 注册任务状态监听。使用callback异步回调。调用成功后，系统将开始监听指定设备上的任务状态变化，该监听需与unRegisterMissionListener成对使用，注册后应在不需要监听任务状态时及时取消。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息，deviceId为设备标识符。
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
   * 注册任务状态监听。使用promise异步回调。调用成功后，系统将开始监听指定设备上的任务状态变化，该监听需与unRegisterMissionListener成对使用，注册后应在不需要监听任务状态时及时取消。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 注册监听时的设备信息，deviceId为设备标识符。
   * @param { MissionCallback } options - 注册的回调方法。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示任务状态监听已成功注册，失败时返回错误信息。
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
   * 取消任务状态监听。使用callback异步回调。停止监听前，请确保已通过registerMissionListener完成注册，否则调用无效。成功调用后，系统将不再监听该设备上的任务状态变化。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 取消监听时指定的设备信息，deviceId为设备标识符。
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
   * 取消任务状态监听。使用promise异步回调。停止监听前，请确保已通过registerMissionListener完成注册，否则调用无效。成功调用后，系统将不再监听该设备上的任务状态变化。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionDeviceInfo } parameter - 取消监听时的设备信息，deviceId为设备标识符。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示任务状态监听已成功取消，失败时返回错误信息。
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
   * 注册当前任务流转状态的监听。此接口需与off('continueStateChange')成对使用，不再监听时应及时取消；调用顺序为先通过on注册监听，不需要时再调用off取消监听。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - 订阅的事件类型，取值为'continueStateChange'，表示订阅任务流转状态变化事件。
   * @param { Callback<ContinueCallbackInfo> } callback - 回调函数，返回当前任务的流转状态和流转信息。
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
   * 取消当前任务流转的状态监听。此接口需与on('continueStateChange')成对使用，在不需要监听时应及时调用以释放资源。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'continueStateChange' } type - 取消订阅的事件类型，固定取值为'continueStateChange'，表示取消订阅任务流转状态变化事件。
   * @param { Callback<ContinueCallbackInfo> } callback - 需要取消的回调函数。当需要取消特定回调监听时传入callback参数，当需要取消type对应的所有回调监听时不传callback参数。不传入时将取消该事件类型的所有回调监听。
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
   * 注册任务流转状态监听回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Callback<ContinueCallbackInfo> } callback - 任务流转状态变化的回调函数。
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
   * 取消任务流转状态监听回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Callback<ContinueCallbackInfo> } [callback] - 需要取消的任务流转状态变化回调函数。不传入时将取消该事件类型的所有回调监听。
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
   * @param { ContinueDeviceInfo } parameter - 通过任务ID方式迁移时的迁移信息，包含源设备ID、目标设备ID、任务ID等。
   * @param { ContinueCallback } options - 通过任务ID方式迁移任务完成时的回调函数，用于接收迁移结果。
   * @param { AsyncCallback<void> } callback - 回调函数，迁移任务完成时，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300502 - Failed to get the missionInfo of the specified missionId.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free is not
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continued is
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
   * @param { ContinueDeviceInfo } parameter - 迁移信息，包含源设备ID、目标设备ID、任务ID和自定义参数等字段。
   * @param { ContinueCallback } options - 迁移任务完成回调函数。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示通过任务ID方式迁移任务已完成，失败时返回错误信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300502 - Failed to get the missionInfo of the specified missionId.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free is not
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continued is
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
   * @param { ContinueMissionInfo } parameter - 迁移信息，包含源设备ID、目标设备ID、应用包名和自定义参数等字段。
   * @param { AsyncCallback<void> } callback - 回调函数，通过指定包名迁移任务完成时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free is not
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continued is
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
   * @param { ContinueMissionInfo } parameter - 迁移信息，包含源设备ID、目标设备ID、应用包名和自定义参数等字段。
   * @returns { Promise<void> } 返回的Promise对象，操作成功时表示通过包名方式迁移任务已完成，失败时返回错误信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300501 - The system ability work abnormally.
   * @throws { BusinessError } 16300503 - The application is not installed on the remote end and installation-free is not
   *     supported.
   * @throws { BusinessError } 16300504 - The application is not installed on the remote end but installation-free is
   *     supported, try again with freeInstall flag.
   * @throws { BusinessError } 16300505 - The operation device must be the device where the application to be continued is
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
   * 应用任务对应的可迁移信息。
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
   * 迁移任务所需的参数。
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
   * 表示跨设备迁移Mission完成后，返回迁移结果的回调函数，迁移Mission详见：
   * [continueMission接口]{@link @ohos.distributedMissionManager:distributedMissionManager.continueMission(parameter: ContinueDeviceInfo,
   * options: ContinueCallback, callback: AsyncCallback<void>)}
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
   * 迁移任务所需的参数。
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
   * 的入参，用于监听任务状态变化的回调函数，包含任务列表变化通知、任务快照通知和断开连接通知等功能。表示注册监听后建立的回调函数。
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
   * 的入参，表示注册监听时所需参数的对象，包含deviceId等设备标识符字段。
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
   * 的入参，表示同步远端设备任务列表时所需的参数对象，包含deviceId、fixConflict和tag等字段。
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
