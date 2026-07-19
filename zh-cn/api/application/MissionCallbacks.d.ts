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
 * 任务回调函数已更改。
 *
 * @typedef { function } NotifyMissionsChangedCallback
 * @param { string } deviceId - Indicates the deviceId mission changed.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyMissionsChangedCallback = (deviceId: string) => void;

/**
 * 快照更改时的回调函数。
 *
 * @typedef { function } NotifySnapshotCallback
 * @param { string } deviceId - Indicates the deviceId snapshot changed.
 * @param { int } mission - Indicates the id of mission.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifySnapshotCallback = (deviceId: string, mission: int) => void;

/**
 * 断开连接时的回调函数。
 *
 * @typedef { function } NotifyNetDisconnectCallback
 * @param { string } deviceId - Indicates the deviceId network disconnect.
 * @param { int } state - Indicates the state of network.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyNetDisconnectCallback = (deviceId: string, state: int) => void;

/**
 * 任务回调已注册
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
   * 任务变更时由系统调用。
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
   * 快照发生更改时，系统会调用此函数。
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
   * Called by system when network disconnect.
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