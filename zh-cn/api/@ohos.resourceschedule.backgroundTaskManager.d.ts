/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit BackgroundTasksKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/*** if arkts dynamic */
import { WantAgent } from '@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '@ohos.app.ability.wantAgent';
/*** endif */
import Context from './application/BaseContext';
import type notificationManager from './@ohos.notificationManager';

/**
 * 本模块提供申请后台任务的接口。当应用退至后台时，开发者可以通过本模块接口为应用申请短时、长时任务，避免应用进程被终止或挂起。开发指导请参考
 * [长时任务开发指南](docroot://task-management/continuous-task.md)、[短时任务开发指南](docroot://task-management/transient-task.md)。
 *
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace backgroundTaskManager {
  /**
   * 通常作为
   * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * 和
   * [updateBackgroundRunning()]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * 接口的入参，用于指定申请或更新的长时任务信息。其中：
   *
   * 1. 通过[startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}接口申请长时任务时，如果待申请长时任务与当前应用下已存在长时任务，两者的主类型和子类型均相同，且combinedTaskNotification均取值为true，则会合并通知。否则不会合并通知。
   * 2. 如果长时任务本身没有通知，则不会合并，长时任务类型是否会通知请参考[BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}。
   * 3. 如果长时任务类型中包含数据传输类型，则不会合并通知。
   * 4. 通知合并后不能取消合并，已合并的不能更新成不合并。
   * 5. 通知合并后，点击通知栏消息，会跳转到第一个申请的长时任务对应的UIAbility，如果调用了更新接口，则跳转到最后一次更新的长时任务对应的UIAbility。
   * 6. 通过[updateBackgroundRunning()]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}接口更新长时任务时，传入的continuousTaskId必须存在，否则更新失败。
   * 7. 从API version 22开始支持特殊场景类型[MODE_SPECIAL_SCENARIO_PROCESSING]{@link backgroundTaskManager.BackgroundTaskMode}的长时任务。必须单独使用且不支持通知合并，即申请或更新长时任务时，长时任务类型只能有特殊场景类型，否则返回错误。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export class ContinuousTaskRequest {
    /**
     * 长时任务主类型
     * 
     * **说明：** 主类型与子类型必须匹配。
     *
     * @returns { BackgroundTaskMode[] } the background modes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskModes(): BackgroundTaskMode[];

    /**
     * 长时任务主类型
     * 
     * **说明：** 主类型与子类型必须匹配。
     *
     * @param { BackgroundTaskMode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskModes(value: BackgroundTaskMode[]);

    /**
     * 长时任务子类型。
     * 
     * **说明：** 主类型与子类型必须匹配。
     *
     * @returns { BackgroundTaskSubmode[] } the background submodes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskSubmodes(): BackgroundTaskSubmode[];

    /**
     * 长时任务子类型。
     * 
     * **说明：** 主类型与子类型必须匹配。
     *
     * @param { BackgroundTaskSubmode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskSubmodes(value: BackgroundTaskSubmode[]);

    /**
     * 通知参数，用于指定点击长时任务通知后跳转的界面。
     * 
     * @returns { WantAgent } the wantAgent
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get wantAgent(): WantAgent;

    /**
     * 通知参数，用于指定点击长时任务通知后跳转的界面。
     *
     * @param { WantAgent } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set wantAgent(value: WantAgent);

    /**
     * 是否合并通知，true表示合并，false表示不合并，默认为false。
     * 
     * **说明：** 该属性在
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    combinedTaskNotification?: boolean;

    /**
     * 是否合并通知，true表示合并，false表示不合并，默认为false。
     * 
     * **说明：** 该属性在
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。
     *
     * @returns { boolean | undefined } whethre to merge notifications.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get combinedTaskNotification(): boolean | undefined;

    /**
     * 是否合并通知，true表示合并，false表示不合并，默认为false。
     * 
     * **说明：** 该属性在
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。
     *
     * @param { boolean | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set combinedTaskNotification(value: boolean | undefined);

    /**
     * 长时任务ID，默认值为-1。
     * 
     * **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。
     *
     * 作为
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口入参时，该属性必填，且必须是存在的ID。
     *
     * 可以通过
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * 接口查看当前所有长时任务信息。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    continuousTaskId?: number;

    /**
     * 长时任务ID，默认值为-1。
     * 
     * **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。
     *
     * 作为
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口入参时，该属性必填，且必须是存在的ID。
     *
     * 可以通过
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * 接口查看当前所有长时任务信息。
     *
     * @returns { int | undefined } the continuous task id
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get continuousTaskId(): int | undefined;

    /**
     * 长时任务ID，默认值为-1。
     * 
     * **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。
     *
     * 作为
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * 接口入参时，该属性必填，且必须是存在的ID。
     *
     * 可以通过
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * 接口查看当前所有长时任务信息。
     *
     * @param { int | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set continuousTaskId(value: int | undefined);

    /**
     * 查询当前[ContinuousTaskRequest]{@link backgroundTaskManager.ContinuousTaskRequest}设置的长时任务主类型，是否支持申请长时任务。是否支持申请长时任务请参考
     * [BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}的说明。
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @returns { boolean } 返回长时任务主类型是否支持。true表示支持，false表示不支持。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    isModeSupported(): boolean;

    /**
     * 请求用户授权是否能在后台长时间运行，使用callback异步回调。接口调用成功会弹出用户授权弹框，建议应用在前台时调用该接口，提示用户进行授权。仅适用于特殊场景类型
     * [MODE_SPECIAL_SCENARIO_PROCESSING]{@link backgroundTaskManager.BackgroundTaskMode}的长时任务。
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context  - 应用运行的上下文。
     *     <br>
     *     <br>FA模型的应用Context定义见[Context]{@link./app/context}。<br>Stage模型的应用Context定义
     *     见[Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility
     *     申请。
     * @param { Callback<UserAuthResult> } callback  - 用户操作后，返回授权结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    requestAuthFromUser(context: Context, callback: Callback<UserAuthResult>): void;

    /**
     * 向用户请求MODE_SPECIAL_SCENARIO_PROCESSING授权时，会弹出对话框。
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @param { Callback<UserAuthResult> } callback - The callback of the function.
     * @throws { BusinessError } 201 - No permission.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestAuthFromUserByDialog(context: Context, callback: Callback<UserAuthResult>): void;

    /**
     * 查询用户是否授权能在后台长时间运行。使用Promise异步回调。
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context  - 应用运行的上下文
     *     <br>
     *     <br>FA模型的应用Context定义见[Context]{@link./app/context}。<br>Stage模型的应用Context定
     *     义见[Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持
     *     ServiceAbility申请。
     * @returns { Promise<UserAuthResult> } Promise对象，返回用户授权结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    checkSpecialScenarioAuth(context: Context): Promise<UserAuthResult>;

    /**
     * 特殊场景长时任务申请用户授权，未授权时不会抛出异常。
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - 应用上下文
     * @returns { Promise<UserAuthResult> } 用户授权结果
     * @throws { BusinessError } 201 - 无权限
     * @throws { BusinessError } 9800004 - 系统服务无响应
     * @throws { BusinessError } 9800005 - 长时任务校验错误
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    checkSpecialScenarioAuthResult(context: Context): Promise<UserAuthResult>;
  }

  /**
   * 短时任务信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  interface DelaySuspendInfo {
    /**
     * 应用实际申请的短时任务时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    requestId: int;
    /**
     * Actual duration of the transient task requested by the application, in milliseconds.
     * <br>Unit:ms
     * 
     * **说明：** 申请时间最长为3分钟，低电量（[BatteryCapacityLevel]{@link @ohos.batteryInfo:batteryInfo.BatteryCapacityLevel}为LEVEL_LOW）
     * 时最长为1分钟。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    actualDelayTime: int;
  }

  /**
   * 所有短时任务信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransientTaskInfo {
    /**
     * 应用当日所剩余总配额，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    remainingQuota: int;
    /**
     * 当前已申请的所有短时任务信息。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    transientTasks: DelaySuspendInfo[];
  }

  /**
   * 长时任务通知信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ContinuousTaskNotification {
    /**
     * 长时任务通知的渠道类型。
     * 
     * **说明：** 长时任务申请或更新成功后不支持提示音。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    slotType: notificationManager.SlotType;
    /**
     * 长时任务通知的内容类型。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    contentType: notificationManager.ContentType;
    /**
     * 长时任务通知 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * 长时任务 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 15 dynamic
     * @since 23 static
     */
    continuousTaskId?: int;
  }

  /**
   * 长时任务取消信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  interface ContinuousTaskCancelInfo {
    /**
     * 长时任务取消原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    reason: ContinuousTaskCancelReason;

    /**
     * 被取消的长时任务 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 长时任务取消详细原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    detailedReason?: ContinuousTaskDetailedCancelReason;
  }

  /**
   * 长时任务激活信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskActiveInfo {
    /**
     * 被激活的长时任务 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    id: int;
  }

  /**
   * 长时任务信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskInfo {
    /**
     * UIAbility名称。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * 应用的UID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
    /**
     * 应用进程的PID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
    /**
     * 是否通过Webview方式申请，即通过系统代理应用申请长时任务。true表示通过Webview方式申请，false表示不通过Webview方式申请。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    isFromWebView: boolean;
    /**
     * [长时任务类型]{@link backgroundTaskManager.BackgroundMode}。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundModes: string[];
    /**
     * [长时任务子类型]{@link backgroundTaskManager.BackgroundSubMode}。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundSubModes: string[];
    /**
     * 通知 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * 长时任务ID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;
    /**
     * UIAbility ID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityId: int;
    /**
     * [WantAgent]{@link @ohos.app.ability.wantAgent} 配置的包名。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentBundleName: string;
    /**
     * [WantAgent]{@link @ohos.app.ability.wantAgent} 配置的ability名称。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentAbilityName: string;
    /**
     * 申请的长时任务是否处于暂停状态。true表示处于暂停状态，false表示处于激活状态。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    bundleName?: string;
    /**
     * 应用分身ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    appIndex?: int;
  }

  /**
   * 长时任务授权信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  interface BackgroundTaskStateInfo {  
    /**
     * 用户ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    userId: int;
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    bundleName: string;
    /**
     * 应用分身ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    appIndex: int;
    /**
     * 授权结果。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    authResult?: UserAuthResult;
  }

  /**
   * 长时任务暂停信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskSuspendInfo {
    /**
     * 被暂停的长时任务 Id。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;

    /**
     * 长时任务状态，false表示激活，true表示暂停。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;

    /**
     * 长时任务暂停原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendReason: ContinuousTaskSuspendReason;
	
    /**
     * 长时任务暂停信息。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    suspendMessage?: SuspendMessage;
  }
  
  /**
   * 长时任务暂停原因。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SuspendMessage {  
    /**
     * 长时任务暂停的信息。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    message: string;

    /**
     * 长时任务暂停的原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: ContinuousTaskSuspendReason;
  }

  /**
   * 后台任务监听。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  export interface BackgroundTaskSubscriber {  
    /**
     * 长时任务开始回调接口。
     *
     * @param { ContinuousTaskInfo } info  - 长时任务回调信息，长时任务ID、长时任务类型等。
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStart(info: ContinuousTaskInfo): void;

    /**
     * 长时任务更新回调接口。
     *
     * @param { ContinuousTaskInfo } info  - 长时任务回调信息，长时任务ID、长时任务类型等。
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskUpdate(info: ContinuousTaskInfo): void;

    /**
     * 长时任务结束回调接口。
     *
     * @param { ContinuousTaskInfo } info  - 长时任务回调信息，长时任务ID、长时任务类型等。
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStop(info: ContinuousTaskInfo): void;
  }

  /**
   * 能效资源信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface EfficiencyResourcesInfo {
    /**
     * 能效资源类型。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    resourceTypes: int;
    /**
     * 超时时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    timeout: int;
    /**
     * 是否永久持有资源，默认为false。取值为true表示永久持有。取值为false表示有限时间内持有。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isPersistent: boolean;
    /**
     * 进程或应用申请，取值为true表示进程申请。取值为false表示应用申请。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isForProcess: boolean;
    /**
     * 申请资源原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    reason: string;
    /**
     * 应用的UID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
    /**
     * 应用进程的PID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;

    /**
     * 指定CPU级别，能效资源类型resourceTypes为CPU时该参数用于指定CPU资源大小，系统会在负载空闲时间（例如灭屏场景）分配指定的CPU资源给应用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * 取消短时任务。
   *
   * @param { int } requestId  - 短时任务的请求ID。通过申请短时任务[requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}
   *     接口获取。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelSuspendDelay(requestId: int): void;

  /**
   * 获取本次短时任务的剩余时间，使用callback异步回调。
   *
   * @param { int } requestId  - 短时任务的请求ID。通过申请短时任务[requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}
   *     接口获取。
   * @param { AsyncCallback<int> } callback  - 回调函数，返回本次短时任务的剩余时间，单位：ms。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemainingDelayTime(requestId: int, callback: AsyncCallback<int>): void;

  /**
   * 获取本次短时任务的剩余时间，使用Promise异步回调。
   *
   * @param { int } requestId  - 短时任务的请求ID。通过申请短时任务[requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}
   *     接口获取。
   * @returns { Promise<int> } Promise对象，返回本次短时任务的剩余时间，单位：ms。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemainingDelayTime(requestId: int): Promise<int>;

  /**
   * 申请短时任务。
   * 
   * > **说明：**
   * >
   * > 短时任务的申请和使用过程中的约束与限制请参考[指南](docroot://task-management/transient-task.md#约束与限制)。
   *
   * @param { string } reason  - 申请短时任务的原因。
   * @param { Callback<void> } callback  - 短时任务即将超时的回调函数，一般在超时前6秒，通过此回调通知应用。
   * @returns { DelaySuspendInfo } 返回短时任务信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;

  /**
   * 获取所有短时任务信息，如当日剩余总配额等，使用Promise异步回调。
   *
   * @returns { Promise<TransientTaskInfo> } Promise对象，返回所有短时任务信息。
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900003 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9900004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getTransientTaskInfo(): Promise<TransientTaskInfo>;

  /**
   * 申请长时任务，支持申请一种类型，使用callback异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过
   * API version 21新增接口
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request:ContinuousTaskRequest)}
   * 申请多个长时任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { BackgroundMode } bgMode  - 长时任务类型。
   * @param { WantAgent } wantAgent  - 通知参数，用于指定点击长时任务通知后跳转的界面。
   * @param { AsyncCallback<void> } callback  - 回调函数，申请长时任务成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * 申请长时任务，支持申请一种类型，使用Promise异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过
   * API version 21新增接口
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request:ContinuousTaskRequest)}
   * 申请多个长时任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { BackgroundMode } bgMode  - 长时任务类型。
   * @param { WantAgent } wantAgent  - 通知参数，用于指定点击长时任务通知后跳转的界面。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>;

  /**
   * 申请长时任务，支持申请多种类型，使用Promise异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过
   * API version 21新增接口
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request:ContinuousTaskRequest)}
   * 申请多个长时任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文
   *     <br>
   *     FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { string[] } bgModes  - 长时任务类型
   *     <br>
   *     取值范围请参考长时任务类型中的[配置项](docroot://task-management/continuous-task.md#使用场景)。<br>
   *     **说明：** 支持传入一个或多个类型。
   * @param { WantAgent } wantAgent  - 通知参数，用于指定点击长时任务通知后跳转的界面。
   * @returns { Promise<ContinuousTaskNotification> } Promise对象，返回
   *     [ContinuousTaskNotification]{@link backgroundTaskManager.ContinuousTaskNotification}类型对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise<ContinuousTaskNotification>;

  /**
   * 申请长时任务，一个UIAbility（FA模型则为ServiceAbility）下支持通过本接口申请多个长时任务，使用Promise异步回调。通过本接口申请长时任务时，支持与已存在的长时任务合并通知，具体请参考
   * [ContinuousTaskRequest]{@link backgroundTaskManager.ContinuousTaskRequest}。</br>同一时间最多可存在10个长时任务，长时任务申请成功后，会有通知栏消息，
   * 没有提示音。</br>如果通过本接口申请的一个长时任务中同时包含多种类型，且包含数据传输类型，则在通知栏会发送2个长时任务通知，一个为数据传输类型，另一个为其他类型的合并通知。任意一个通知被移除时，长时任务取消，且另一个通知也会同
   * 步移除。接口返回的长时任务通知Id为数据传输类型的Id，主要用于数据传输的进度更新。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { ContinuousTaskRequest } request  - 长时任务请求信息，包括长时任务主类型、子类型等。
   * @returns { Promise<ContinuousTaskNotification> } Promise对象，返回长时任务通知信息，包括长时任务ID等。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  function startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>;

  /**
   * 更新长时任务类型，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。</br>更新长时任务前，可以通过
   * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context)}接口获取当前所有长时任务信息，如果当前没有已经
   * 存在的长时任务，会更新失败。</br>该接口仅支持更新如下三个接口申请的长时任务：</br>
   * [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback:AsyncCallback&lt;void&gt;): void]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgMode:BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>)}
   * </br>
   * [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise&lt;void&gt;]{@linkbackgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent)}
   * </br>
   * [startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent):Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context,bgModes: string[], wantAgent: WantAgent)}
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { string[] } bgModes  - 更新后的长时任务类型
   *     <br>取值范围请参考长时任务类型中的[配置项](docroot://task-management/continuous-task.md#使用场景)。
   *     <br> **说明：** 支持传入一个或多个类型。
   * @returns { Promise<ContinuousTaskNotification> } Promise对象，返回
   *     [ContinuousTaskNotification]{@link backgroundTaskManager.ContinuousTaskNotification}类型对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function updateBackgroundRunning(context: Context, bgModes: string[]): Promise<ContinuousTaskNotification>;

  /**
   * 更新长时任务，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。
   *
   * 更新长时任务还存在如下约束限制：
   *
   * 1. 本接口仅支持更新如下接口申请的长时任务：[startBackgroundRunning(context: Context, request: ContinuousTaskRequest):Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context,request: ContinuousTaskRequest)}。
   * 2. 已经合并的长时任务，且后台任务主类型和子类型均相同，仅支持更新ContinuousTaskRequest.wantAgent中的wants信息（abilityName等），如果类型不同，更新失败。
   * 3. 如果待更新的长时任务或指定的更新类型中包含数据传输类型，直接返回失败。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { ContinuousTaskRequest } request  - 长时任务请求信息，包括待更新的长时任务ID等。
   * @returns { Promise<ContinuousTaskNotification> } Promise对象，返回更新后的长时任务通知信息，包括长时任务ID等。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  function updateBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>;

  /**
   * 取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用callback异步回调。也可以通过
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int)}
   * 接口取消指定Id的长时任务。
   *
   * @param { Context } context  - 应用运行的上下文。
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { AsyncCallback<void> } callback  - 回调函数，取消长时任务成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 18]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void;

  /**
   * 取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用Promise异步回调。也可以通过
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int)}
   * 接口取消指定Id的长时任务。
   *
   * @param { Context } context  - 应用运行的上下文。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 18]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function stopBackgroundRunning(context: Context): Promise<void>;

  /**
   * 取消指定Id的长时任务，使用Promise异步回调。也可以通过
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, callback:AsyncCallback<void>)}
   * 取消当前UIAbility下所有长时任务。
   *
   * @param { Context } context  - 应用运行的上下文。
   *     <br>
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { int } continuousTaskId  - 长时任务ID。
   *     <br>取值限定为整数。
   *     - 长时任务ID。<br>**说明：** 可以通过
   *     [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request:ContinuousTaskRequest)}
   *     接口的返回值获取当前申请的长时任务ID，或者通过
   *     [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended:boolean)}
   *     接口获取所有长时任务信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  function stopBackgroundRunning(context: Context, continuousTaskId: int): Promise<void>;

  /**
   * 获取所有长时任务信息，如长时任务ID、长时任务类型等，使用Promise异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @returns { Promise<ContinuousTaskInfo[]> } Promise对象，返回所有长时任务信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context): Promise<ContinuousTaskInfo[]>;

  /**
   * 获取所有长时任务信息，如长时任务ID、长时任务类型等。可选择是否获取暂停的长时任务信息，使用Promise异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。 <br> **说明：** Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。
   * @param { boolean } includeSuspended  - 是否获取暂停的长时任务信息， true表示获取， false表示不获取。
   * @returns { Promise<ContinuousTaskInfo[]> } Promise对象，返回所有长时任务信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context, includeSuspended: boolean): Promise<ContinuousTaskInfo[]>;

  /**
   * 获取所有长时任务信息，如长时任务ID、长时任务类型等。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @returns { Promise<ContinuousTaskInfo[]> } Promise对象，返回所有长时任务信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function obtainAllContinuousTasks(): Promise<ContinuousTaskInfo[]>;

  /**
   * 设置长时任务授权信息。
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo  - 授权的必要信息，包括用户ID、应用包名、应用分身ID等。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  function setBackgroundTaskState(stateInfo: BackgroundTaskStateInfo): void;

  /**
   * 获取长时任务授权信息。
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo  - 授权的必要信息，包括用户ID、应用包名、应用分身ID等。
   * @returns { UserAuthResult } 授权结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  function getBackgroundTaskState(stateInfo: BackgroundTaskStateInfo): UserAuthResult;

  /**
   * 注册长时任务变化回调。
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber  - 后台任务监听对象，包含长时任务开始，长时任务更新，长时任务结束。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function subscribeContinuousTaskState(subscriber: BackgroundTaskSubscriber): void;

  /**
   * 解注册长时任务变化回调。
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber  - 后台任务监听对象，包含长时任务开始，长时任务更新，长时任务结束。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function unsubscribeContinuousTaskState(subscriber: BackgroundTaskSubscriber): void;

  /**
   * 申请能效资源。
   *
   * @param { EfficiencyResourcesRequest } request  - 请求的必要信息，包括资源类型、超时时间等。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function applyEfficiencyResources(request: EfficiencyResourcesRequest): void;

  /**
   * 释放已申请的全部能效资源。
   *
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function resetAllEfficiencyResources(): void;

  /**
   * 获取已申请的所有能效资源信息，如能效资源类型等，使用Promise异步回调。
   *
   * @returns { Promise<EfficiencyResourcesInfo[]> } Promise对象，返回所有能效资源信息。
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @throws { BusinessError } 18700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 18700004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllEfficiencyResources(): Promise<EfficiencyResourcesInfo[]>;

  /**
   * 注册长时任务取消的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type  - 事件回调类型，固定取值为'continuousTaskCancel'，表示长时任务取消。
   * @param { Callback<ContinuousTaskCancelInfo> } callback  - 回调函数，返回长时任务取消原因等信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   *     <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void;
  
  /**
   * 注册长时任务取消的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   *     2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskCancel(callback: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * 解除长时任务取消的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type  - 取消长时任务，固定取值为'continuousTaskCancel'。
   * @param { Callback<ContinuousTaskCancelInfo> } callback  - 需要取消监听的回调函数，未传入则取消所有注册回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   *     <br> 2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
   function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void;
   
   /**
   * 解除长时任务取消的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } [callback] - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   *     2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskCancel(callback?: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * 注册长时任务暂停的监听，使用callback异步回调。注册该回调后，如果系统首次检测到应用未执行相应的业务，不会直接取消长时任务，而是将长时任务标记为暂停状态，如果连续检测失败，仍会取消长时任务。
   * 
   * 长时任务处于暂停状态时，应用退后台会被挂起，回前台自动激活。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type  - 事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。
   * @param { Callback<ContinuousTaskSuspendInfo> } callback  - 回调函数，返回长时任务暂停原因等信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void;
  
  /**
   * 注册长时任务暂停的监听，使用callback异步回调。注册该回调后，如果系统首次检测到应用未执行相应的业务，不会直接取消长时任务，而是将长时任务标记为暂停状态，如果连续检测失败，仍会取消长时任务。
   *
   * 长时任务处于暂停状态时，应用退后台会被挂起，回前台自动激活。
   * 
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskSuspendInfo> } callback - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskSuspend(callback: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * 取消长时任务暂停的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type  - 事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback]  - 需要取消监听的回调函数，未传入则取消所有注册的暂停回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void;
  
  /**
   * 取消长时任务暂停的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback] - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskSuspend(callback?: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * 注册长时任务激活的监听，使用callback异步回调。应用回前台激活暂停的长时任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type  - 事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。
   * @param { Callback<ContinuousTaskActiveInfo> } callback  - 回调函数，返回长时任务激活相关信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void;
  
  /**
   * 注册长时任务激活的监听，使用callback异步回调。应用回前台激活暂停的长时任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskActiveInfo> } callback - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskActive(callback: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * 取消长时任务激活的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type  - 事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。
   * @param { Callback<ContinuousTaskActiveInfo> } [callback]  - 需要取消监听的回调函数，未传入则取消所有注册的激活回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void;
  
  /**
   * 取消长时任务激活的监听，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskActiveInfo> } [callback] - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskActive(callback?: Callback<ContinuousTaskActiveInfo>): void;
  
  /**
   * 长时任务类型。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */

  export enum BackgroundMode {
    /**
     * 数据传输。
     * 
     * 使用场景举例：非托管形式的上传、下载，如在浏览器后台上传或下载数据。
     * 
     * **说明：** 在数据传输时，应用需要更新进度，如果进度长时间（超过10分钟）未更新，数据传输的长时任务会被取消。
     * 
     * 更新进度的通知类型必须为实况窗，具体实现可参考
     * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)}
     * 中的示例。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_TRANSFER = 1,

    /**
     * 音视频播放。
     * 
     * 使用场景举例：音频、视频在后台播放，音视频投播。
     * 
     * **说明：** 从API version 20开始，申请/更新AUDIO_PLAYBACK类型长时任务但不接入AVSession，申请/更新长时任务成功后会在通知栏显示通知。
     * 
     * 接入AVSession后，后台任务模块不会发送通知栏通知，由AVSession发送通知。
     * 
     * 对于API version 19及之前的版本，后台任务模块不会在通知栏显示通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_PLAYBACK = 2,

    /**
     * 录制。
     * 
     * 使用场景举例：录音、录屏退后台。<!--Del-->
     * 
     * **说明：** 系统应用申请/更新该类型的长时任务，没有通知栏消息。<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_RECORDING = 3,

    /**
     * 定位导航。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCATION = 4,

    /**
     * 蓝牙相关业务。
     * 
     * 使用场景举例：通过蓝牙传输文件时退后台。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * 多设备互联。
     * 
     * 使用场景举例：分布式业务连接、投播。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN相关。
     * 
     * **系统API**: 此接口为系统接口。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_INTERACTION = 7,

    /**
     * 音视频通话。
     * 
     * 使用场景举例：某些聊天类应用（具有音视频业务）音频、视频通话时退后台。<!--Del-->
     * 
     * **说明：** 系统应用申请/更新该类型的长时任务，没有通知栏消息。<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 13 dynamic
     * @since 23 static
     */
    VOIP = 8,

    /**
     * 计算任务。
     * 
     * 使用场景举例：杀毒软件
     * 
     * **说明：** 从API version 21开始，对PC/2in1设备、非PC/2in1设备但申请了ACL权限为
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
     * 的应用开放。 API version 20及之前版本，仅对PC/2in1设备开放。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    TASK_KEEPING = 9
  }

  /**
   * 长时任务主类型。通常与长时任务子类型[BackgroundTaskSubmode]{@link backgroundTaskManager.BackgroundTaskSubmode}配合使用，对照关系请参考长时任务主类型与子类型
   * 对照表，两者共同作为API version 21新增的
   * [申请]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}、
   * [更新]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}长时任务接口入参
   * ，用于指定长时任务类型。</br>仅当主类型为MODE_SPECIAL_SCENARIO_PROCESSING特殊场景类型，或非PC/2in1设备主类型为MODE_TASK_KEEPING计算任务时，调用长时任务相关接口时需同时申
   * 请ACL权限
   * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
   * ，其他场景无需申请该权限。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskMode {  
    /**
     * 数据传输。
     * 
     * 使用场景举例：非托管形式的上传、下载，如在浏览器后台上传或下载数据。
     * 
     * **说明：**
     *
     * 1. 在数据传输时，应用需要更新进度，如果进度长时间（超过10分钟）未更新，数据传输的长时任务会被取消。
     * 2. 更新进度的通知类型必须为实况窗，具体实现可参考[startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)}中的示例。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_DATA_TRANSFER = 1,

    /**
     * 音视频播放。
     * 
     * 使用场景举例：音频、视频在后台播放，音视频投播。
     * 
     * **说明：** 申请/更新MODE_AUDIO_PLAYBACK类型长时任务但不接入AVSession，申请/更新长时任务成功后会在通知栏显示通知。接入AVSession后，后台任务模块不会发送通知栏通知，由AVSession
     * 发送通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_PLAYBACK = 2,

    /**
     * 录制。
     * 
     * 使用场景举例：录音、录屏退后台。<!--Del-->
     * 
     * **说明：** 系统应用申请/更新该类型的长时任务，没有通知栏消息。<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_RECORDING = 3,

    /**
     * 定位导航。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_LOCATION = 4,

    /**
     * 蓝牙相关业务。
     * 
     * 使用场景举例：通过蓝牙传输文件时退后台。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_BLUETOOTH_INTERACTION = 5,

    /**
     * 多设备互联。
     * 
     * 使用场景举例：分布式业务连接、投播。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN相关业务。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_ALLOW_WIFI_AWARE = 7,

    /**
     * 音视频通话。
     * 
     * 使用场景举例：某些聊天类应用（具有音视频业务）音频、视频通话时退后台。 <!--Del-->
     * 
     * **说明：** 系统应用申请/更新该类型的长时任务，没有通知栏消息。<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_VOIP = 8,

    /**
     * 计算任务。
     * 
     * 使用场景举例：杀毒软件。
     * 
     * **说明：** 仅对PC/2in1设备开放，或者非PC/2in1设备但申请了ACL权限为
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
     * 的应用开放。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_TASK_KEEPING = 9,

    /**
     * 多媒体相关业务。
     * 
     * 使用场景举例：音视频播放、录制、音视频通话场景，场景需与长时任务子类型相匹配。在上述场景下，选择此类型或者对应的长时任务主类型均可。例如：音视频播放场景可以申请MODE_AUDIO_PLAYBACK或者
     * MODE_AV_PLAYBACK_AND_RECORD长时任务主类型。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_AV_PLAYBACK_AND_RECORD = 12,

    /**
     * 特殊场景类型（仅对Phone、Tablet、PC/2in1设备开放）。
     * 
     * 使用场景举例：应用在后台导出媒体文件、应用使用三方投播组件在后台进行投播，场景需与长时任务子类型相匹配。
     * 
     * **说明：**
     * 
     * 1. 如果应用需要在后台长时间运行，可以通过[requestAuthFromUser]{@link backgroundTaskManager.ContinuousTaskRequest.requestAuthFromUser}接口请求用户授权、通过[checkSpecialScenarioAuth]{@link backgroundTaskManager.ContinuousTaskRequest.checkSpecialScenarioAuth}接口查询用户授权结果。
     * 2. 从API version 24开始，仅对申请ACL权限[ohos.permission.KEEP_BACKGROUND_RUNNING_SPECIAL_SCENARIO](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_special_scenario)的应用开放。API version 23及之前版本，仅对申请ACL权限[ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)的应用开放，已经申请该权限的应用在API version 24之后不受影响。
     * 3. 必须单独使用且不支持通知合并，即申请或更新长时任务时，长时任务类型只能有特殊场景类型，否则返回错误。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_SPECIAL_SCENARIO_PROCESSING = 13,

    /**
     * 星闪业务。
     * 
     * 使用场景举例：通过星闪传输文件时退后台。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_NEARLINK = 14,
  }

  
  /**
   * 长时任务子类型。通常与长时任务主类型[BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}配合使用，对照关系请参考长时任务主类型与子类型对照表，两者
   * 共同作为API version 21新增的申请、更新长时任务接口入参，用于指定长时任务类型。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskSubmode {
    /**
     * 车钥匙类型，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_CAR_KEY_NORMAL_NOTIFICATION = 1,
    
    /**
     * 普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_NORMAL_NOTIFICATION = 2,

    /**
     * 实况窗通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_LIVE_VIEW_NOTIFICATION = 3,

    /**
     * 音视频播放，通知类型为普通文本通知。根据实际场景选择是否接入[AVSession](docroot://media/avsession/avsession-overview.md)。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION = 4,

    /**
     * 已接入[AVSession](docroot://media/avsession/avsession-overview.md)的音视频播放场景，不发送通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AVSESSION_AUDIO_PLAYBACK = 5,

    /**
     * 录音，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION = 6,

    /**
     * 录屏，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION = 7,

    /**
     * 通话，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION = 8,

    /**
     * 媒体处理，例如：应用在后台导出媒体文件，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION = 9,

    /**
     * 视频投播，例如：应用使用三方投播组件在后台进行投播，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION = 10,

    /**
     * 运动，例如：应用在后台有室内跑步场景，通知类型为普通文本通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    SUBMODE_WORK_OUT_NORMAL_NOTIFICATION = 11
  }

  /**
   * 能效资源类型。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ResourceType {
    /**
     * CPU资源，申请后应用进程不被挂起。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CPU = 1,

    /**
     * 公共事件资源，申请后应用进程被挂起后，可以收到公共事件。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT = 1 << 1,

    /**
     * 计时器，申请后应用进程被挂起后，Timer仍然可以唤醒应用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TIMER = 1 << 2,

    /**
     * 延迟任务资源，申请后延迟任务管控变宽松。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1 << 3,

    /**
     * 蓝牙资源，申请后应用进程被挂起后，蓝牙相关事件仍然可以唤醒应用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH = 1 << 4,

    /**
     * GPS资源，申请后应用进程被挂起后，GPS相关事件可以唤醒应用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GPS = 1 << 5,

    /**
     * 音频资源，有音频播放时对应的应用进程不被挂起。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = 1 << 6,

    /**
     * RUNNING_LOCK资源，申请后挂起状态不会代理RUNNING_BACKGROUND锁。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING_LOCK = 1 << 7,

    /**
     * 申请后不拦截Sensor回调。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR = 1 << 8
  }

  /**
   * 能效资源CPU级别。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum EfficiencyResourcesCpuLevel {  
    /**
     * 表示运行在小核，用于处理轻量级后台任务，CPU频点较低。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SMALL_CPU = 0,

    /**
     * 表示最高可以运行在中核，系统基于负载决策运行在小核或中核。平衡性能与能效，用于需要处理复杂任务的场景，CPU频点高。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIUM_CPU = 1,

    /**
     * 表示最高可以运行在大核，系统基于负载决策运行在小核、中核或大核。 极致性能，用于应对重载任务的场景，CPU频点最高。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LARGE_CPU = 2
  }

  /**
   * 能效资源申请参数。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EfficiencyResourcesRequest {
    /**
     * 申请的资源类型。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    resourceTypes: int;

    /**
     * 申请或释放资源。
     * 
     * - true表示申请资源。
     * - false表示释放部分资源。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isApply: boolean;

    /**
     * 资源使用时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    timeOut: int;

    /**
     * 是否永久持有资源，默认为false。
     * 
     * - true表示永久持有
     * - false表示有限时间内持有。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isPersist?: boolean;

    /**
     * 进程或应用申请，默认为false。
     * 
     * - true表示进程申请。
     * - false表示应用申请。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isProcess?: boolean;

    /**
     * 申请资源原因。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: string;

    /**
     * 指定CPU级别，能效资源类型resourceTypes为CPU时该参数用于指定CPU资源大小，系统会在负载空闲时间（例如灭屏场景）分配指定的CPU资源给应用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * 长时任务取消原因。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskCancelReason {
    /**
     * 用户取消。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL = 1,
    /**
     * 系统取消。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL = 2,
    /**
     * 用户移除通知。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,
  
    /**
     * 申请DATA_TRANSFER类型长时任务，但是数据传输速率低。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未接入[AVSession](docroot://media/avsession/avsession-overview.md)。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * 申请AUDIO_RECORDING类型长时任务，但是未录制。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * 申请LOCATION类型长时任务，但是未使用定位导航。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,
  
    /**
     * 申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,
  
    /**
     * 申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,
  
    /**
     * 使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11
  }

  /**
   * 长时任务取消详细原因。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ContinuousTaskDetailedCancelReason {  
    /**
     * 用户移除通知。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,
  
    /**
     * 申请DATA_TRANSFER类型长时任务，但是数据传输速率低。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未接入[AVSession](docroot://media/avsession/avsession-overview.md)。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * 申请AUDIO_RECORDING类型长时任务，但是未录制。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * 申请LOCATION类型长时任务，但是未使用定位导航。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,
  
    /**
     * 申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,
  
    /**
     * 申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,
  
    /**
     * 使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11,

    /**
     * 申请DATA_TRANSFER类型长时任务，但是进度长时间（首次更新超过10分钟）未更新。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_NOT_UPDATE = 12,

    /**
     * 申请VOIP类型长时任务，但是未检测到音频流或者录音流。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_VOIP_NOT_RUNNING = 13,

    /**
     * 申请特殊场景类型长时任务，但是用户未授权。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USER_UNAUTHORIZED = 14
  }

  /**
   * 长时任务子类型。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundSubMode {
    /**
     * 车钥匙。
     * 
     * **说明：**
     * 
     * 1. 只有申请BLUETOOTH_INTERACTION类型的长时任务，车钥匙子类型才能生效。
     * 2. 不支持通过[updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, bgModes: string[])}接口更新为此类型长时任务。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    CAR_KEY = 1
  }

  /**
   * 长时任务类型类别。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundModeType {
    /**
     * 子类型。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    SUB_MODE = 'subMode'
  }

  /**
   * 长时任务暂停原因。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskSuspendReason {
    /**
     * 申请DATA_TRANSFER类型长时任务，但是数据传输速率低。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未接入[AVSession](docroot://media/avsession/avsession-overview.md)。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * 申请AUDIO_RECORDING类型长时任务，但是未录制。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * 申请LOCATION类型长时任务，但是未使用定位导航。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_LOCATION_NOT_USED = 8,
  
    /**
     * 申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_BLUETOOTH_NOT_USED = 9,
  
    /**
     * 申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED = 10,
  
    /**
     * 使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_USED_ILLEGALLY = 11,

    /**
     * 系统高负载暂停长时任务。预留接口，暂未启用。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING = 12,

    /**
     * 申请VOIP类型长时任务，但是未检测到音频流或者录音流。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_VOIP_NOT_USED = 13,

    /**
     * 申请BLUETOOTH_INTERACTION类型长时任务，但是一段时间没有蓝牙数据流。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_BLUETOOTH_DATA_NOT_EXIST = 14,

    /**
     * 申请LOCATION类型长时任务，但是一段时间内设备处于绝对静止状态。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_POSITION_NOT_MOVED = 15,

    /**
     * 申请AUDIO_PLAYBACK类型长时任务，但是一段时间内处于整机静音状态。
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_MUTE = 16,

    /**
     * 申请星闪类型长时任务，但是一段时间没有星闪配对连接。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_NOT_USED = 17,

    /**
     * 申请星闪类型长时任务，但是一段时间没有星闪数据流。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_DATA_NOT_EXIST = 18,

    /**
     * 申请特殊场景类型长时任务，但是用户未授权。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_USER_UNAUTHORIZED = 19,
  }

  /**
   * 用户授权结果。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 22 dynamic
   * @since 24 static
   */
  export enum UserAuthResult {
    /**
     * 不支持。例如：申请的长时任务主类型非MODE_SPECIAL_SCENARIO_PROCESSING时，不支持申请用户授权是否能在后台长时间运行。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_SUPPORTED = 0,

    /**
     * 用户未操作。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_DETERMINED = 1,

    /**
     * 拒绝。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    DENIED = 2,

    /**
     * 本次允许。
     * 
     * **说明：** 在应用退出时该授权记录会被清除
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ONCE = 3,

    /**
     * 始终允许。
     * 
     * **说明：**
     * 
     * 当接收到以下公共事件时，相关授权记录将被清除：
     * 
     * [COMMON_EVENT_PACKAGE_ADDED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_added)
     * 、
     * [COMMON_EVENT_PACKAGE_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_removed)
     * 、
     * [COMMON_EVENT_BUNDLE_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_bundle_removed)
     * 、
     * [COMMON_EVENT_PACKAGE_FULLY_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_fully_removed)
     * 、
     * [COMMON_EVENT_PACKAGE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_changed)
     * 。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ALWAYS = 4
  }
}

export default backgroundTaskManager;
