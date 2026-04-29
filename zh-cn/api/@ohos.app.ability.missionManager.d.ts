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
/**
 * # 权限列表
 * 
 * ohos.permission.MANAGE_MISSIONS
 */
/**
 * missionManager模块提供系统任务管理能力，包括对系统任务执行锁定、解锁、清理、切换到前台等操作。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace missionManager {
  /**
   * 注册系统任务状态监听器。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - 监听的任务名称。固定值：'mission'，表示系统任务状态监听器。
   * @param { MissionListener } listener - 系统任务监听器。
   * @returns { long } 监听器的index值，由系统创建，在注册系统任务状态监听时分配，和监听器一一对应?。
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
   * 注册系统任务状态监听器。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionListener } listener - 系统任务监听器。
   * @returns { long } 监听器的index值，由系统创建，在注册系统任务状态监听时分配，和监听器一一对应 。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function onMission(listener: MissionListener): long;

  /**
   * 解注册任务状态监听器。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - 取消监听的任务名称。固定值：'mission'，表示系统任务状态监听器。
   * @param { long } listenerId - 系统任务状态监器法的index值，和监听器一一对应，由on方法返回。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 解注册任务状态监听器。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - 系统任务状态监器法的index值，和监听器一一对应，由on方法返回。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long, callback: AsyncCallback<void>): void;

  /**
   * 解注册任务状态监听。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - 取消监听的任务名称。固定值：'mission'，表示系统任务状态监听器。
   * @param { long } listenerId - 系统任务状态监听器的index值，和监听器一一对应，由on方法返回。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 解注册任务状态监听。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - 系统任务状态监听器的index值，和监听器一一对应，由on方法返回。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long): Promise<void>;

  /**
   * 获取任务信息。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<MissionInfo> } callback - 执行结果回调函数，返回任务信息。
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
   * 获取任务信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @returns { Promise<MissionInfo> } Promise对象，返回任务信息。
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
   * 获取所有任务信息。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } numMax - 任务信息数量上限。
   * @param { AsyncCallback<Array<MissionInfo>> } callback - 执行结果回调函数，返回任务信息数组。
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
   * 获取所有任务信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } numMax - 任务信息数量上限。
   * @returns { Promise<Array<MissionInfo>> } Promise对象，返回所有任务信息的数组。
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
   * 获取任务快照。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<MissionSnapshot> } callback - 执行结果回调函数，返回任务快照信息。
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
   * 获取任务快照。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @returns { Promise<MissionSnapshot> } Promise对象，返回任务快照信息。
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
   * 获取任务低分辨率快照。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<MissionSnapshot> } callback - 执行结果回调函数，返回任务快照信息。
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
   * 获取任务低分辨率快照。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - 设备ID，本机默认为空字符串。
   * @param { int } missionId - 任务ID。
   * @returns { Promise<MissionSnapshot> } Promise对象，返回任务快照信息。
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
   * 锁定指定任务ID的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 锁定指定任务ID的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 解锁指定任务ID的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 解锁指定任务ID的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 清理指定任务ID的任务，无论该任务是否被锁定。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 清理指定任务ID的任务，无论该任务是否被锁定。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 清理所有未锁定的任务。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 清理所有未锁定的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearAllMissions(): Promise<void>;

  /**
   * 把指定任务ID的任务切到前台。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 把指定任务ID的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { StartOptions } options - 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 把指定任务ID的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - 任务ID。
   * @param { StartOptions } [options] - 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。默认为空，表示按照默认启动参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将指定任务批量切到前台。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - 任务ID数组。
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 将指定任务批量切换到前台，并将任务ID等于topMission的任务移动到最顶层。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - 任务ID数组。
   * @param { int } topMission - 待移动到最顶层的任务ID
   * @param { AsyncCallback<void> } callback - 执行结果回调函数。
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
   * 将指定任务批量切到前台，并将任务ID等于topMission的任务移动到最顶层。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - 任务ID数组。
   * @param { int } topMission - 待移动到最顶层的任务ID。默认值为-1，表示将默认任务移动到最顶层。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将指定任务批量切到后台，返回的结果任务ID按被隐藏时的任务层级排序。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - 任务ID数组。
   * @param { AsyncCallback<Array<int>> } callback - 执行结果回调函数。
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
   * 将指定任务批量切到后台，返回的结果按被隐藏时的任务层级排序。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - 任务ID数组。
   * @returns { Promise<Array<int>> } Promise对象，返回任务ID。
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
   * 表示任务的详细信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionInfo = _MissionInfo;

  /**
   * 定义系统任务状态监听。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionListener = _MissionListener;

  /**
   * 任务的任务快照对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionSnapshot = _MissionSnapshot;
}