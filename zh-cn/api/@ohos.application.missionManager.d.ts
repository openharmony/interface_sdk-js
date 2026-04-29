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
 * missionManager模块提供系统任务管理能力，包括对系统任务执行锁定、解锁、清理、切换到前台等操作。
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
   * 注册系统任务状态监听器。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionListener } listener - 系统任务监听器。
   * @returns { number } 监听器的index值，由系统创建，在注册系统任务状态监听器时分配，和监听器一一对应 。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#on
   */
  function registerMissionListener(listener: MissionListener): number;

  /**
   * 解注册任务状态监听器。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } listenerId - 系统任务状态监听器的index值，和监听器一一对应，由registerMissionListener方法返回。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#off
   */
  function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void;

  /**
   * 解注册任务状态监听器。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } listenerId - 系统任务状态监听器的index值，和监听器一一对应，由registerMissionListener方法返回。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#off
   */
  function unregisterMissionListener(listenerId: number): Promise<void>;

  /**
   * 获取单个任务信息。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<MissionInfo> } callback - 回调函数，返回任务信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfo
   */
  function getMissionInfo(deviceId: string, missionId: number, callback: AsyncCallback<MissionInfo>): void;

  /**
   * 获取单个任务信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } missionId - 任务ID。
   * @returns { Promise<MissionInfo> } Promise对象，返回任务信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfo
   */
  function getMissionInfo(deviceId: string, missionId: number): Promise<MissionInfo>;

  /**
   * 获取所有任务信息。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } numMax - 任务信息数量上限。
   * @param { AsyncCallback<Array<MissionInfo>> } callback - 回调函数，返回任务信息数组。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfos
   */
  function getMissionInfos(deviceId: string, numMax: number, callback: AsyncCallback<Array<MissionInfo>>): void;

  /**
   * 获取所有任务信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } numMax - 任务信息数量上限。
   * @returns { Promise<Array<MissionInfo>> } Promise对象，返回任务信息数组。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionInfos
   */
  function getMissionInfos(deviceId: string, numMax: number): Promise<Array<MissionInfo>>;

  /**
   * 获取任务快照。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<MissionSnapshot> } callback - 回调函数，返回任务快照信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionSnapShot
   */
  function getMissionSnapShot(deviceId: string, missionId: number, callback: AsyncCallback<MissionSnapshot>): void;

  /**
   * 获取任务快照。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { number } missionId - 任务ID。
   * @returns { Promise<MissionSnapshot> } Promise对象，返回任务快照信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#getMissionSnapShot
   */
  function getMissionSnapShot(deviceId: string, missionId: number): Promise<MissionSnapshot>;

  /**
   * 锁定指定任务id的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 回调函数，当锁定指定任务id的任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#lockMission
   */
  function lockMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * 锁定指定任务id的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#lockMission
   */
  function lockMission(missionId: number): Promise<void>;

  /**
   * 解锁指定任务id的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 回调函数，当解锁指定任务id的任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#unlockMission
   */
  function unlockMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * 解锁指定任务id的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#unlockMission
   */
  function unlockMission(missionId: number): Promise<void>;

  /**
   * 清理指定任务id的任务，无论该任务是否被锁定。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 回调函数，当清理指定任务id的任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearMission
   */
  function clearMission(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * 清理指定任务id的任务，无论该任务是否被锁定。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearMission
   */
  function clearMission(missionId: number): Promise<void>;

  /**
   * 清理所有未锁定的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { AsyncCallback<void> } callback - 回调函数，当清理所有未锁定的任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearAllMissions
   */
  function clearAllMissions(callback: AsyncCallback<void>): void;

  /**
   * 清理所有未锁定的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#clearAllMissions
   */
  function clearAllMissions(): Promise<void>;

  /**
   * 把指定任务id的任务切到前台。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 回调函数，当把指定任务id的任务切到前台成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, callback: AsyncCallback<void>): void;

  /**
   * 把指定任务id的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { StartOptions } options - 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。
   * @param { AsyncCallback<void> } callback - 回调函数，当把指定任务id的任务切到前台成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * 把指定任务id的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { number } missionId - 任务ID。
   * @param { StartOptions } [options] - 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.missionManager/missionManager#moveMissionToFront
   */
  function moveMissionToFront(missionId: number, options?: StartOptions): Promise<void>;
}

export default missionManager;