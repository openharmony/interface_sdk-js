/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * The module defines the callbacks invoked after synchronization starts. These callbacks can be used as input 
 * parameters in 
 * [registerMissionListener]{@link @ohos.distributedMissionManager:distributedMissionManager.registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback)}
 * 
 * @file
 * @kit AbilityKit
 */

/**
 *
 * @typedef { function } NotifyMissionsChangedCallback
 * @param { string } deviceId - 设备ID，表示发生任务变化的远程设备。
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyMissionsChangedCallback = (deviceId: string) => void;

/**
 *
 * @typedef { function } NotifySnapshotCallback
 * @param { string } deviceId - 设备ID，表示快照发生变化的远程设备。
 * @param { int } mission - 任务ID，表示快照发生变化的任务。
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifySnapshotCallback = (deviceId: string, mission: int) => void;

/**
 *
 * @typedef { function } NotifyNetDisconnectCallback
 * @param { string } deviceId - 设备ID，表示网络断开的远程设备。
 * @param { int } state - 网络连接状态，固定为0，表示网络断开。
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyNetDisconnectCallback = (deviceId: string, state: int) => void;

/**
 * 作为可以[registerMissionListener]的入参，表示开始同步后，建立的回调函数，用于监听任务状态变化，包含任务列表变化通知、任务快照通知和断开连接通知等功能。
 *
 * @interface MissionCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface MissionCallback {
  /**
   * notifyMissionsChanged是任务监听的callback函数，用于通知任务变化。用于在多设备协同场景下，监听远程设备的任务状态变化，如任务管理器、多屏协同等场景。当远程设备的任务列表发生增、删、排序等变化时，触发此回调通知。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifyMissionsChanged: NotifyMissionsChangedCallback;

  /**
   * notifySnapshot是任务监听的callback函数，用于通知任务快照变化。当任务的快照（即任务当前界面状态的快照）发生变化时触发该回调。用于在多设备协同场景下，监听远程设备任务界面状态变化，如多屏协同中界面同步更新等场景。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifySnapshot: NotifySnapshotCallback;

  /**
   * notifyNetDisconnect是任务监听的callback函数，用于通知断开连接。用于在多设备协同场景下，监听远程设备的网络连接状态变化，当设备断开连接时触发回调通知。开发者应在此回调中清理资源、提示用户网络断开，并释放与该设备相关的会话资源。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifyNetDisconnect: NotifyNetDisconnectCallback;
}
