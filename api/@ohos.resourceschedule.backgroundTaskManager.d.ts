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
 * The **backgroundTaskManager** module provides APIs to request background tasks. You can use the APIs to request 
 * transient tasks, continuous tasks, or efficiency resources to prevent the application process from being terminated 
 * or suspended when your application is switched to the background. For details, see 
 * [Continuous Task](docroot://task-management/continuous-task.md) and 
 * [Transient Task](docroot://task-management/transient-task.md).
 *
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace backgroundTaskManager {
  /**
   * Specifies details of the continuous task being requested or updated. It is typically used as input for the 
   * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * and 
   * [updateBackgroundRunning()]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * APIs. Note that:
   * 
   * 1. When requesting a continuous task via
   * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)},
   * notifications will be combined if the main type and subtype of the continuous task
   * to be requested are the same as those of the existing continuous task in the current application,
   * and the **combinedTaskNotification** value is **true** for both tasks.
   * Otherwise, notifications will not be combined.
   * 2. Notifications will not be combined if the continuous task has no notification.
   * For details about whether notifications are sent for the continuous task,
   * see [BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}.
   * 3. Notifications cannot be combined if the continuous task includes data transmission.
   * 4. Notifications that have been combined cannot be canceled.
   * If notifications have been combined, they cannot be updated to uncombined.
   * 5. After notifications are combined, tapping the notification will redirect to the UIAbility
   * corresponding to the first requested continuous task.
   * If the update API is called,
   * the redirection will target the UIAbility corresponding to the last updated continuous task.
   * 6. When the [updateBackgroundRunning()]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * API is called to update a continuous task, the input **continuousTaskId** must exist. Otherwise, the update fails.
   * 7. Continuous tasks of the [MODE_SPECIAL_SCENARIO_PROCESSING]{@link backgroundTaskManager.BackgroundTaskMode} type
   * are supported since API version 22. This task type must be used independently and notifications cannot be combined.
   * Specifically, when you request or update a continuous task,
   * it must be of the **MODE_SPECIAL_SCENARIO_PROCESSING** type.
   * Otherwise, an error is returned.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export class ContinuousTaskRequest {
    /**
     * Main type of a continuous task.
     * 
     * Note: The main type must match the subtype.
     *
     * @returns { BackgroundTaskMode[] } the background modes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskModes(): BackgroundTaskMode[];

    /**
     * Main type of a continuous task.
     * 
     * Note: The main type must match the subtype.
     *
     * @param { BackgroundTaskMode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskModes(value: BackgroundTaskMode[]);

    /**
     * Subtype of a continuous task.
     * 
     * Note: The main type must match the subtype.
     *
     * @returns { BackgroundTaskSubmode[] } the background submodes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskSubmodes(): BackgroundTaskSubmode[];

    /**
     * Subtype of a continuous task.
     * 
     * Note: The main type must match the subtype.
     *
     * @param { BackgroundTaskSubmode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskSubmodes(value: BackgroundTaskSubmode[]);

    /**
     * Notification parameters, which are used to specify the target page that is redirected to when a continuous task 
     * notification is clicked.
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
     * Notification parameters, which are used to specify the target page that is redirected to when a continuous task 
     * notification is clicked.
     *
     * @param { WantAgent } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set wantAgent(value: WantAgent);

    /**
     * Whether to combine notifications. The value **true** means to combine notifications, and the value **false** (
     * default) means the opposite.
     * 
     * Note: This property does not take effect in 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API. If notifications need to be combined for an existing task, request the task again and set the value to 
     * **true**.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    combinedTaskNotification?: boolean;

    /**
     * Whether to combine notifications. The value **true** means to combine notifications, and the value **false** (
     * default) means the opposite.
     * 
     * Note: This property does not take effect in 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API. If notifications need to be combined for an existing task, request the task again and set the value to 
     * **true**.
     *
     * @returns { boolean | undefined } whethre to merge notifications.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get combinedTaskNotification(): boolean | undefined;

    /**
     * Whether to combine notifications. The value **true** means to combine notifications, and the value **false** (
     * default) means the opposite.
     * 
     * Note: This property does not take effect in 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API. If notifications need to be combined for an existing task, request the task again and set the value to 
     * **true**.
     *
     * @param { boolean | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set combinedTaskNotification(value: boolean | undefined);

    /**
     * Continuous task ID. The default value is **-1**.
     * 
     * Note: If **combinedTaskNotification** is set to true, this property is mandatory and the corresponding ID must 
     * exist.
     * 
     * Additionally, this property is mandatory (with the corresponding ID required) when used as an input parameter for
     * the 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API.
     * 
     * You can call the 
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * API to view information about all continuous tasks.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    continuousTaskId?: number;

    /**
     * Continuous task ID. The default value is **-1**.
     * 
     * Note: If **combinedTaskNotification** is set to true, this property is mandatory and the corresponding ID must 
     * exist.
     * 
     * Additionally, this property is mandatory (with the corresponding ID required) when used as an input parameter for
     * the 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API.
     * 
     * You can call the 
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * API to view information about all continuous tasks.
     *
     * @returns { int | undefined } the continuous task id
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get continuousTaskId(): int | undefined;

    /**
     * Continuous task ID. The default value is **-1**.
     * 
     * Note: If **combinedTaskNotification** is set to true, this property is mandatory and the corresponding ID must 
     * exist.
     * 
     * Additionally, this property is mandatory (with the corresponding ID required) when used as an input parameter for
     * the 
     * [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
     * API.
     * 
     * You can call the 
     * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
     * API to view information about all continuous tasks.
     *
     * @param { int | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set continuousTaskId(value: int | undefined);

    /**
     * Checks whether **BackgroundTaskMode** specified in 
     * [ContinuousTaskRequest]{@link backgroundTaskManager.ContinuousTaskRequest} is supported. For details, see 
     * [BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @returns { boolean } Whether **BackgroundTaskMode** is supported. The value **true** means it is supported, and
     *     the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    isModeSupported(): boolean;

    /**
     * Requests user authorization to run tasks continuously in the background. This API uses an asynchronous callback
     * to return the result. If the API call is successful, a banner notification with a sound is sent. This API is
     * applicable only to continuous tasks of the
     * [MODE_SPECIAL_SCENARIO_PROCESSING]{@link backgroundTaskManager.BackgroundTaskMode} type.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - Application context.
     *     <br>For details about the application context of the FA model,
     *     see [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
     *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
     *     UIAbility in the stage model and the ServiceAbility in the FA model.
     * @param { Callback<UserAuthResult> } callback - Callback used to return the user authorization result.
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
     * Requesting MODE_SPECIAL_SCENARIO_PROCESSING authorization from users,
     *     a dialog box will be displayed.
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
     * Checks whether the user has authorized tasks to run continuously in the background. This API uses a promise to 
     * return the result.
     * An exception will be thrown if unauthorized.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - Application context.
     *     <br>For details about the application context of the FA model,
     *     see [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
     *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
     *     UIAbility in the stage model and the ServiceAbility in the FA model.
     * @returns { Promise<UserAuthResult> } Promise used to return the user authorization result.
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
     * Check whether the application can request MODE_SPECIAL_SCENARIO_PROCESSING.
     * No exception will be thrown whether authorized or not.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @returns { Promise<UserAuthResult> } The promise returns the result of user authorization.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    checkSpecialScenarioAuthResult(context: Context): Promise<UserAuthResult>;
  }

  /**
   * Defines the information about the transient task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  interface DelaySuspendInfo {
    /**
     * Request ID of the transient task.
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
     * Note: The maximum duration of a transient task is 3 minutes in normal cases. In the case of a low battery (
     * [BatteryCapacityLevel]{@link @ohos.batteryInfo:batteryInfo.BatteryCapacityLevel} set to **LEVEL_LOW**), the 
     * maximum duration is decreased to 1 minute.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    actualDelayTime: int;
  }

  /**
   * Describes all transient task information.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransientTaskInfo {
    /**
     * Remaining quota of the application on the current day, in ms.
     * <br>Unit:ms
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    remainingQuota: int;
    /**
     * All information about the requested transient task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    transientTasks: DelaySuspendInfo[];
  }

  /**
   * Describes the information about a continuous-task notification.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ContinuousTaskNotification {
    /**
     * Slot type of a continuous-task notification.
     * 
     * Note: After a continuous task is successfully requested or updated, no prompt tone is played.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    slotType: notificationManager.SlotType;
    /**
     * Content type of a continuous-task notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    contentType: notificationManager.ContentType;
    /**
     * ID of the continuous-task notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * ID of a continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 15 dynamic
     * @since 23 static
     */
    continuousTaskId?: int;
  }

  /**
   * Describes the information about the cancellation of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  interface ContinuousTaskCancelInfo {
    /**
     * Reason for canceling the continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    reason: ContinuousTaskCancelReason;

    /**
     * ID of the continuous task canceled.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Detailed reason for canceling the continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    detailedReason?: ContinuousTaskDetailedCancelReason;
  }

  /**
   * Describes the activation information of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskActiveInfo {
    /**
     * ID of the activated continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    id: int;
  }

  /**
   * Describes the continuous task information.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskInfo {
    /**
     * UIAbility name.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * Application UID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
    /**
     * Application PID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
    /**
     * Whether to request a continuous task in WebView mode, that is, whether to request a continuous task through the 
     * system proxy application. The value **true** indicates that the Webview mode is used, and the value **false** 
     * indicates that the Webview mode is not used.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    isFromWebView: boolean;
    /**
     * [Type of a continuous task]{@link backgroundTaskManager.BackgroundMode}.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundModes: string[];
    /**
     * [Subtype of a continuous task]{@link backgroundTaskManager.BackgroundSubMode}.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundSubModes: string[];
    /**
     * Notification ID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * Continuous task ID.
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
     * Bundle name configured in [WantAgent]{@link @ohos.app.ability.wantAgent}. **WantAgent** is a notification 
     * parameter used to specify the target page when a continuous task notification is tapped.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentBundleName: string;
    /**
     * Ability name configured in [WantAgent]{@link @ohos.app.ability.wantAgent}. **WantAgent** is a notification 
     * parameter used to specify the target page when a continuous task notification is tapped.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentAbilityName: string;
    /**
     * Whether the requested continuous task is suspended. The value **true** indicates that the task is suspended, and 
     * the value **false** indicates that the task is activated.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;
    /**
     * Application bundle name.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    bundleName?: string;
    /**
     * Index of an application clone.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    appIndex?: int;
  }

  /**
   * Defines the authorization information of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  interface BackgroundTaskStateInfo {  
    /**
     * UserId of the application applying for special continuous task
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    userId: int;
    /**
     * BundleName of the application applying for special continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    bundleName: string;
    /**
     * AppIndex of the application applying for special continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    appIndex: int;
    /**
     * Type of user authorization status.
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
   * Describes the information about a suspended continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskSuspendInfo {
    /**
     * ID of the suspended continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;

    /**
     * Continuous task state. The value **false** indicates that the task is activated, and the value **true** indicates
     * that the task is suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;

    /**
     * Reason why the continuous task is suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendReason: ContinuousTaskSuspendReason;
	
    /**
     * Describes the information about a suspended continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    suspendMessage?: SuspendMessage;
  }
  
  /**
   * Describes the reason why a continuous task is suspended.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SuspendMessage {  
    /**
     * Suspension message.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    message: string;

    /**
     * Reason why the continuous task is suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: ContinuousTaskSuspendReason;
  }

  /**
   * Represents a listener object used to listen for background task state changes.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  export interface BackgroundTaskSubscriber {  
    /**
     * Called when a continuous task starts.
     *
     * @param { ContinuousTaskInfo } info - Continuous task callback information, including the task ID and type.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStart(info: ContinuousTaskInfo): void;

    /**
     * Called when a continuous task is updated.
     *
     * @param { ContinuousTaskInfo } info - Continuous task callback information, including the task ID and type.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskUpdate(info: ContinuousTaskInfo): void;

    /**
     * Called when a continuous task stops.
     *
     * @param { ContinuousTaskInfo } info - Continuous task callback information, including the task ID and type.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStop(info: ContinuousTaskInfo): void;
  }

  /**
   * Defines the efficiency resource information.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface EfficiencyResourcesInfo {
    /**
     * Enumerates the efficiency resource types.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    resourceTypes: int;
    /**
     * Timeout, in milliseconds.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    timeout: int;
    /**
     * Whether the resource is permanently held. The default value is **false**. The value **true** indicates the 
     * resource is permanently held. The value **false** indicates that the resource is held within a limited time.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isPersistent: boolean;
    /**
     * Whether the resource is requested by a process or an application. The value **true** indicates that the resource 
     * is requested by a process. The value **false** indicates that the resource is requested by an application.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isForProcess: boolean;
    /**
     * Reason for requesting the resource.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    reason: string;
    /**
     * Application UID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
    /**
     * Application PID.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;

    /**
     * CPU level. If **resourceTypes** is set to **CPU**, this parameter specifies the CPU resource size. The system 
     * allocates the specified CPU resources to the application during the idle time of load (for example, when the 
     * screen is off).
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * Cancels a transient task.
   *
   * @param { int } requestId - Request ID of the transient task. It is obtained by calling the
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay} API.
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
   * Obtains the remaining time of a transient task. This API uses an asynchronous callback to return the result.
   *
   * @param { int } requestId - Request ID of the transient task. It is obtained by calling the
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay} API.
   * @param { AsyncCallback<int> } callback - Callback used to return the remaining time of the transient task, in
   *     milliseconds.
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
   * Obtains the remaining time of a transient task. This API uses a promise to return the result.
   *
   * @param { int } requestId - Request ID of the transient task. It is obtained by calling the
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay} API.
   * @returns { Promise<int> } Promise that returns the remaining time of the transient task, in milliseconds.
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
   * Requests a transient task.
   * 
   * > **NOTE**
   * >
   * > For details about the constraints on requesting and using a transient task, see 
   * > [Transient Task (ArkTS)](docroot://task-management/transient-task.md#constraints).
   *
   * @param { string } reason - Reason for requesting the transient task.
   * @param { Callback<void> } callback - Callback used to notify the application that the transient task is about to
   *     time out. Generally, the callback is invoked 6 seconds before the timeout.
   * @returns { DelaySuspendInfo } Information about the transient task.
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
   * Obtains all transient task information, including the remaining quota of the current day. This API uses a promise 
   * to return the result.
   *
   * @returns { Promise<TransientTaskInfo> } Promise that returns all transient task information.
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
   * Requests a continuous task of a specific type. This API uses an asynchronous callback to return the result. After a
   * continuous task is successfully requested, there will be a notification message without prompt tone. A UIAbility (
   * ServiceAbility in the FA model) can request only one continuous task at a time through this API. You can request 
   * multiple continuous tasks by calling 
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * added in API version 21.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { BackgroundMode } bgMode - Type of the continuous task.
   * @param { WantAgent } wantAgent - Notification parameters, which are used to specify the target page that is
   *     redirected to when a continuous task notification is clicked.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the continuous task is requested,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Requests a continuous task of a specific type. This API uses a promise to return the result. After a continuous 
   * task is successfully requested, there will be a notification message without prompt tone. A UIAbility (
   * ServiceAbility in the FA model) can request only one continuous task at a time through this API. You can request 
   * multiple continuous tasks by calling 
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * added in API version 21.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { BackgroundMode } bgMode - Type of the continuous task.
   * @param { WantAgent } wantAgent - Notification parameters, which are used to specify the target page that is
   *     redirected to when a continuous task notification is clicked.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Requests continuous tasks of multiple types. This API uses a promise to return the result. After a continuous task 
   * is successfully requested, there will be a notification message without prompt tone. A UIAbility (ServiceAbility in
   * the FA model) can request only one continuous task at a time through this API. You can request multiple continuous 
   * tasks by calling 
   * [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   * added in API version 21.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { string[] } bgModes - Types of continuous tasks.
   *     <br>For details about the available options, see
   *     [Item](docroot://task-management/continuous-task.md#use-cases).<br> Note: One or more types can be passed.
   * @param { WantAgent } wantAgent - Notification parameters, which are used to specify the target page that is
   *     redirected to when a continuous task notification is clicked.
   * @returns { Promise<ContinuousTaskNotification> } Promise that returns an object of the
   *     [ContinuousTaskNotification]{@link backgroundTaskManager.ContinuousTaskNotification} type.
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
   * Requests a continuous task. This API allows a UIAbility (ServiceAbility in the FA model) to request multiple 
   * continuous tasks and uses a promise to return the result. When using this API to request a continuous task, its 
   * notification can be combined with that of an existing continuous task. For details, see 
   * [ContinuousTaskRequest]{@link backgroundTaskManager.ContinuousTaskRequest}.
   * 
   * A maximum of 10 continuous tasks can be created simultaneously. Upon successful creation of a continuous task, a 
   * notification will be sent without a prompt tone.
   * 
   * If a continuous task requested via this API includes multiple task types (including data transmission tasks), two 
   * notifications will appear in the notification panel: one for the data transmission task and the other for the 
   * remaining tasks. Removing either notification will cancel the continuous task and remove the other notification. 
   * The continuous task notification ID returned by the API is the ID of the data transmission type, which is used to 
   * update the data transmission progress.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { ContinuousTaskRequest } request - Request information of a continuous task, including the main type and
   *     subtype.
   * @returns { Promise<ContinuousTaskNotification> } Promise used to return the continuous task notification
   *     information, including the continuous task ID.
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
   * Updates continuous tasks of multiple types. This API uses a promise to return the result. After a continuous task 
   * is successfully updated, there will be a notification message without prompt tone.
   * 
   * Before updating a continuous task, you can call 
   * [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context)} to retrieve 
   * information about all existing continuous tasks. If there are no continuous tasks, the update will fail.
   * 
   * This API can only be used to update continuous tasks that were requested via the following APIs:
   * 
   * [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback&lt;void&gt;): void]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>)}
   * 
   * [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise&lt;void&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent)}
   * 
   * [startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)}
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { string[] } bgModes - Types of continuous tasks after the update.
   *     <br>For details about the available options,
   *     see [Item](docroot://task-management/continuous-task.md#use-cases).<br> Note: One or more types can be passed.
   * @returns { Promise<ContinuousTaskNotification> } Promise that returns an object of the
   *     [ContinuousTaskNotification]{@link backgroundTaskManager.ContinuousTaskNotification} type.
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
   * Updates a continuous task. This API uses a promise to return the result. After a continuous task is successfully 
   * updated, there will be a notification message without prompt tone.
   * 
   * The following restrictions apply when updating a continuous task:
   * 
   * 1. This API can only update continuous tasks requested via
   * [startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}.
   * 2. If the main type and subtype of the background tasks are the same,
   * only the wants information (such as **abilityName**) in **ContinuousTaskRequest.wantAgent** can be updated.
   * If the types are different, the update fails.
   * 3. If the continuous task to be updated or the specified update type contains the data transmission type, 
   * a failure message is returned.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { ContinuousTaskRequest } request - Continuous task request information, including the ID of the continuous
   *     task to be updated.
   * @returns { Promise<ContinuousTaskNotification> } Promise used to return the updated continuous task notification
   *     information, including the continuous task ID.
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
   * Cancels all continuous tasks in the current UIAbility (ServiceAbility in the FA model). This API uses an 
   * asynchronous callback to return the result. You can also call the 
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int)}
   * API to cancel a continuous task with the specified ID.
   *
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the continuous task is canceled,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Cancels all continuous tasks in the current UIAbility (ServiceAbility in the FA model). This API uses a promise to 
   * return the result. You can also call the 
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int)}
   * API to cancel a continuous task with the specified ID.
   *
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels a continuous task with the specified ID. This API uses a promise to return the result. You can also call 
   * the 
   * [stopBackgroundRunning]{@link backgroundTaskManager.stopBackgroundRunning(context: Context, callback: AsyncCallback<void>)}
   * API to cancel all continuous tasks in the current UIAbility.
   *
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { int } continuousTaskId - Continuous task ID.
   *     <br>The value should be an integer.
   *     <br>Note: You can obtain the ID of the current continuous task
   *     through the return value of the
   *     [startBackgroundRunning]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)}
   *     API, or obtain information about all continuous tasks through the
   *     [getAllContinuousTasks]{@link backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean)}
   *     API.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains all continuous task information, including the task ID and type. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @returns { Promise<ContinuousTaskInfo[]> } Promise that returns all continuous task information.
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
   * Obtains all continuous task information, including the task ID and type. It supports specifying whether to include 
   * suspended tasks and uses a promise to return the result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.<br> Note: Continuous tasks can be requested only by the
   *     UIAbility in the stage model and the ServiceAbility in the FA model.
   * @param { boolean } includeSuspended - Whether to obtain the information about the suspended continuous task. The
   *     value **true** means to obtain the information, and the value **false** means the opposite.
   * @returns { Promise<ContinuousTaskInfo[]> } Promise that returns all continuous task information.
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
   * Obtains all continuous task information, including the task ID and type. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @returns { Promise<ContinuousTaskInfo[]> } Promise that returns all continuous task information.
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
   * Sets the authorization information of a continuous task.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Required authorization information, including the user ID,
   *     application bundle name, and application clone ID.
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
   * Obtains the authorization information of a continuous task.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Required authorization information, including the user ID,
   *     application bundle name, and application clone ID.
   * @returns { UserAuthResult } Authorization result.
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
   * Registers a callback to listen for the continuous task change events.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - Background task listener that listens for continuous task state
   *     changes, including start, update and stop events.
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
   * Unregisters the callback for continuous task changes.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - Background task listener that listens for continuous task state
   *     changes, including start, update and stop events.
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
   * Requests efficiency resources.
   *
   * @param { EfficiencyResourcesRequest } request - Necessary information carried in the request, including the
   *     resource type and timeout interval.
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
   * Releases all efficiency resources.
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
   * Obtains all information about the requested efficiency resources, including the resource type. This API uses a 
   * promise to return the result.
   *
   * @returns { Promise<EfficiencyResourcesInfo[]> } Promise used to return all information about efficiency resources.
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
   * Subscribes to continuous task cancellation events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type - Event type. The value is fixed at **'continuousTaskCancel'**, indicating
   *     that a continuous task is canceled.
   * @param { Callback<ContinuousTaskCancelInfo> } callback - Callback used to return information such as the reason for
   *     canceling a continuous task.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   *     <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void;
  
  /**
   * Register continuous task cancel callback.
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
    * Unsubscribes from continuous task cancellation events. This API uses an asynchronous callback to return the 
    * result.
    *
    * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
    * @param { 'continuousTaskCancel' } type - Cancels a continuous task. The value is fixed at
    *     **'continuousTaskCancel'**.
    * @param { Callback<ContinuousTaskCancelInfo> } callback - Callback for which listening is cancelled. If this
    *     parameter is left unspecified, all registered callbacks are cancelled.
    * @throws { BusinessError } 201 - Permission denied.
    * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
    *     <br> 2. Unregister type has not register; 3. Parameter verification failed.
    * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
    * @since 15 dynamic
    */
   function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void;
   
   /**
   * Unregister continuous task cancel callback.
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
   * Registers a listener for continuous task suspension. This API uses an asynchronous callback to return the result. 
   * After the callback is registered, if the system detects for the first time that the application does not execute 
   * the corresponding service, the system does not directly cancel the continuous task. Instead, it will mark the task 
   * as suspended. If the detection failures persist, the system will cancel the continuous task.
   * 
   * When a continuous task is suspended, the application will be suspended when switched to the background and 
   * automatically activated when brought back to the foreground.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - Event type. The value is fixed at **'continuousTaskSuspend'**, indicating
   *     that the continuous task is suspended.
   * @param { Callback<ContinuousTaskSuspendInfo> } callback - Callback used to return information such as the reason
   *     for suspending a continuous task.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void;
  
  /**
   * Register continuous task suspend callback.
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
   * Unregisters from the listener for continuous task suspension. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - Event type. The value is fixed at **'continuousTaskSuspend'**, indicating
   *     that the continuous task is suspended.
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback] - Callback used to unregister from the listener for
   *     continuous task suspension. If this parameter is not passed, all listeners are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void;
  
  /**
   * Unregister continuous task suspend callback.
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
   * Registers a listener for continuous task activation. This API uses an asynchronous callback to return the result. 
   * The application returns to the foreground to activate the suspended continuous task.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - Event type. The value is fixed at **'continuousTaskActive'**, indicating
   *     that the continuous task is activated.
   * @param { Callback<ContinuousTaskActiveInfo> } callback - Callback used to return the activation information about a
   *     continuous task.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void;
  
  /**
   * Register continuous task active callback.
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
   * Unregisters from the listener for continuous task activation. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - Event type. The value is fixed at **'continuousTaskActive'**, indicating
   *     that the continuous task is activated.
   * @param { Callback<ContinuousTaskActiveInfo> } [callback] - Callback used to unregister from the listener for
   *     continuous task activation. If this parameter is not passed, all listeners are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void;
  
  /**
   * Unregister continuous task active callback.
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
   * Defines the type of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */

  export enum BackgroundMode {
    /**
     * Data transfer.
     * 
     * Use scenario: upload and download in non-hosting mode, for example, uploading or downloading data in the 
     * background of a browser.
     * 
     * Note: During data transfer, the application needs to update the progress. If the progress is not updated for more
     * than 10 minutes, the continuous task of the **DATA_TRANSFER** type will be canceled.
     * 
     * The notification type of the progress update must be live view. For details, see the example in 
     * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)}
     * .
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_TRANSFER = 1,

    /**
     * Audio and video playback.
     * 
     * Use scenario: audio/video playback in the background and audio/video casting.
     * 
     * Note: Since API version 20, if an application requests or updates a continuous task of the **AUDIO_PLAYBACK** 
     * type without connecting to AVSession, a notification will appear in the notification panel once the task is 
     * successfully requested or updated.
     * 
     * Once AVSession is connected, notifications will be sent by AVSession instead of the background task module.
     * 
     * For API version 19 and earlier versions, the background task module does not display notifications in the 
     * notification panel.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_PLAYBACK = 2,

    /**
     * Audio recording.
     * 
     * Use scenario: recording and screen capture in the background.<!--Del-->
     * 
     * Note: No notification is displayed if a system application requests or updates a continuous task.<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_RECORDING = 3,

    /**
     * Positioning and navigation.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCATION = 4,

    /**
     * Bluetooth-related services.
     * 
     * Use scenario: An application moves to the background while transferring files via Bluetooth.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * Multi-device connection.
     * 
     * Use scenario: distributed service connection and casting.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN-related.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_INTERACTION = 7,

    /**
     * Audio and video calls.
     * 
     * Use scenario: Chat applications (with audio and video services) transition into the background during audio and 
     * video calls.<!--Del-->
     * 
     * Note: No notification is displayed if a system application requests or updates a continuous task.<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 13 dynamic
     * @since 23 static
     */
    VOIP = 8,

    /**
     * Computing tasks.
     * 
     * Use scenario: antivirus software.
     * 
     * **NOTE**: Starting from API version 21, this capability is available for PCs/2-in-1 devices, and non-PCs/2-in-1 
     * devices that have obtained the ACL permission 
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
     * . In API version 20 and earlier versions, this task type is limited to PCs/2-in-1 devices only.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    TASK_KEEPING = 9
  }

  /**
   * Main type of a continuous task. It is usually used together with the subtype 
   * [BackgroundTaskSubmode]{@link backgroundTaskManager.BackgroundTaskSubmode}. For details, see the mapping table. The
   * two types are newly added in API version 21 for 
   * [requesting]{@link backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)} 
   * and 
   * [updating]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)} 
   * continuous tasks.
   * 
   * When the main type of the continuous task is **MODE_SPECIAL_SCENARIO_PROCESSING**, or that of a non-PC/2-in-1 
   * device is **MODE_TASK_KEEPING**, you need to request the ACL permission 
   * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
   * before calling APIs related to continuous tasks. In other scenarios, this permission is not required.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskMode {  
    /**
     * Data transfer.
     * 
     * Use scenario: upload and download in non-hosting mode, for example, uploading or downloading data in the 
     * background of a browser.
     * 
     * **NOTE**
     * 
     * 1. During data transfer, the application needs to update the progress.
     * If the progress is not updated for more than 10 minutes,
     * the continuous task of the **DATA_TRANSFER** type will be canceled.
     * 2. The notification type of the progress update must be live view. For details, see the example in
     * [startBackgroundRunning()]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)}.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_DATA_TRANSFER = 1,

    /**
     * Audio and video playback.
     * 
     * Use scenario: audio/video playback in the background and audio/video casting.
     * 
     * Note: If a continuous task of the **MODE_AUDIO_PLAYBACK** type is requested or updated without connecting to 
     * AVSession, a notification will appear in the notification panel once the task is successfully requested or 
     * updated. Once AVSession is connected, notifications will be sent by AVSession instead of the background task 
     * module.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_PLAYBACK = 2,

    /**
     * Audio recording.
     * 
     * Use scenario: recording and screen capture in the background.<!--Del-->
     * 
     * Note: No notification is displayed if a system application requests or updates a continuous task.<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_RECORDING = 3,

    /**
     * Positioning and navigation.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_LOCATION = 4,

    /**
     * Bluetooth-related services.
     * 
     * Use scenario: An application moves to the background while transferring files via Bluetooth.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_BLUETOOTH_INTERACTION = 5,

    /**
     * Multi-device connection.
     * 
     * Use scenario: distributed service connection and casting.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN-related services.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_ALLOW_WIFI_AWARE = 7,

    /**
     * Audio and video calls.
     * 
     * Use scenario: Chat applications (with audio and video services) transition into the background during audio and 
     * video calls. <!--Del-->
     * 
     * Note: No notification is displayed if a system application requests or updates a continuous task.<!--DelEnd-->
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_VOIP = 8,

    /**
     * Computing tasks.
     * 
     * Use scenario: antivirus software.
     * 
     * **NOTE**: This capability is available only to PCs/2-in-1 devices, or non-PCs/2-in-1 devices that have obtained 
     * the ACL permission 
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)
     * .
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_TASK_KEEPING = 9,

    /**
     * Multimedia services.
     * 
     * Use scenarios: audio/video playback, recording, and audio/video calls. The scenario must match that of the 
     * subtype. You can select this task type or the corresponding main type for preceding scenarios. For example, you 
     * can request a continuous task of the **MODE_AUDIO_PLAYBACK** or **MODE_AV_PLAYBACK_AND_RECORD** type for audio/
     * video playback.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_AV_PLAYBACK_AND_RECORD = 12,

    /**
     * Special scenarios (available only for smartphones, tablets, PCs/2-in-1 devices).
     * 
     * Use scenarios: An application exports media files in the background or uses a third-party component to cast 
     * content in the background. The scenario must match that of the subtype.
     * 
     * **NOTE**
     * 
     * 1. If an application needs to run in the background for a long time,
     * it can request user authorization through the
     * [requestAuthFromUser]{@link backgroundTaskManager.ContinuousTaskRequest.requestAuthFromUser} API
     * and check the authorization result via
     * [checkSpecialScenarioAuth]{@link backgroundTaskManager.ContinuousTaskRequest.checkSpecialScenarioAuth}.
     * 2. Since API version 24, this capability is available only to applications that have obtainedthe ACL permission
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SPECIAL_SCENARIO](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_special_scenario).
     * For API version 23 and earlier,
     * this capability is available only to applications that have obtained the ACL permission
     * [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](docroot://security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system).
     * Applications that have obtained this permission are not affected for API version 24 and later.
     * 3. This task type must be used independently and notifications cannot be combined.
     * Specifically, when you request or update a continuous task,
     * it must be of the **MODE_SPECIAL_SCENARIO_PROCESSING** type. Otherwise, an error is returned.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_SPECIAL_SCENARIO_PROCESSING = 13,

    /**
     * NearLink device.
     * 
     * Use scenario: An application transitions into the background during the process of file transfer using NearLink.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_NEARLINK = 14,
  }

  
  /**
   * Defines the subtype of a continuous task. It is usually used together with the main type 
   * [BackgroundTaskMode]{@link backgroundTaskManager.BackgroundTaskMode}. For details, see the mapping table. The two 
   * types are newly added in API version 21 for requesting and updating continuous tasks.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskSubmode {
    /**
     * **CAR_KEY** type. It is of the normal text notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_CAR_KEY_NORMAL_NOTIFICATION = 1,
    
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_NORMAL_NOTIFICATION = 2,

    /**
     * Live view notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_LIVE_VIEW_NOTIFICATION = 3,

    /**
     * Audio and video playback. It is of the normal text notification type.
     * You can access [AVSession](docroot://media/avsession/avsession-overview.md) as needed.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION = 4,

    /**
     * Audio and video playback scenario where [AVSession](docroot://media/avsession/avsession-overview.md) is accessed.
     * It is of the normal text notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AVSESSION_AUDIO_PLAYBACK = 5,

    /**
     * Recording. It is of the normal text notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION = 6,

    /**
     * Recording. It is of the normal text notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION = 7,

    /**
     * Call. It is of the normal text notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION = 8,

    /**
     * Media processing. For example, an application exports media files in the background. It is of the normal text 
     * notification type.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION = 9,

    /**
     * Video casting. For example, an application uses a third-party casting component to cast a video in the 
     * background, and the notification type is common text notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION = 10,

    /**
     * Exercise. For example, an application has an indoor running scenario in the background, and the notification type
     * is common text notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    SUBMODE_WORK_OUT_NORMAL_NOTIFICATION = 11
  }

  /**
   * Enumerates the efficiency resource types.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ResourceType {
    /**
     * CPU resource. Such type of resource prevents an application from being suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CPU = 1,

    /**
     * Common event resource. Such type of resource ensures that an application in the suspended state can receive 
     * common events.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT = 1 << 1,

    /**
     * Timer resource. Such type of resource ensures that an application in the suspended state can be woken up by 
     * system timers.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TIMER = 1 << 2,

    /**
     * Deferred task resource. Such type of resource provides a loose control policy for an application.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1 << 3,

    /**
     * Bluetooth resource. Such type of resource ensures that an application in the suspended state can be woken up by 
     * Bluetooth-related events.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH = 1 << 4,

    /**
     * GPS resource. Such type of resource ensures that an application in the suspended state can be woken up by GPS-
     * related events.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GPS = 1 << 5,

    /**
     * Audio resource. Such type of resource prevents an application from being suspended when the application has an 
     * audio being played.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = 1 << 6,

    /**
     * RUNNING_LOCK resources are not proxied when the application is suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING_LOCK = 1 << 7,

    /**
     * Sensor callbacks are not intercepted.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR = 1 << 8
  }

  /**
   * Defines the CPU level of the efficiency resource.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum EfficiencyResourcesCpuLevel {  
    /**
     * The background task runs on small CPU cores. This level caters to lightweight background tasks with a relatively 
     * low CPU frequency.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SMALL_CPU = 0,

    /**
     * The background task can run on medium CPU cores at maximum. The system determines whether to run the task on 
     * small or medium CPU cores based on load. This level balances performance and energy efficiency, and is applicable
     * to scenarios requiring complex task processing with a high CPU frequency.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIUM_CPU = 1,

    /**
     * The background task can run on large CPU cores at maximum. The system determines whether to run the task on small
     * , medium, or large CPU cores based on load. This level delivers ultimate performance, and is applicable to 
     * scenarios requiring heavy-load task processing with the highest CPU frequency.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LARGE_CPU = 2
  }

  /**
   * Describes the parameters for requesting efficiency resources.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EfficiencyResourcesRequest {
    /**
     * Type of the resource to request.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    resourceTypes: int;

    /**
     * Whether the request is used to apply for resources.
     * 
     * - **true**: The request is used to apply for resources.
     * - **false**: The request is used to release resources.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isApply: boolean;

    /**
     * Duration for which the resource will be used, in milliseconds.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    timeOut: int;

    /**
     * Whether the resource is permanently held. The default value is **false**.
     * 
     * - **true**: The resource is permanently held.
     * - **false**: The resource is held for a limited period of time.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isPersist?: boolean;

    /**
     * Whether the request is initiated by a process. The default value is **false**.
     * 
     * - **true**: The request is initiated by a process.
     * - **false**: The request is initiated by an application.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isProcess?: boolean;

    /**
     * Reason for requesting the resource.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: string;

    /**
     * CPU level. If **resourceTypes** is set to **CPU**, this parameter specifies the CPU resource size. The system 
     * allocates the specified CPU resources to the application during the idle time of load (for example, when the 
     * screen is off).
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * Describes the reason for canceling a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskCancelReason {
    /**
     * The task is canceled by the user.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL = 1,
    /**
     * The task is canceled by the system.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL = 2,
    /**
     * User removal notification. This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,
  
    /**
     * A continuous task of the DATA_TRANSFER type is requested, but the data transmission rate is low. This value is 
     * reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * A continuous task of the AUDIO_PLAYBACK type is requested, but the 
     * [AVSession](docroot://media/avsession/avsession-overview.md) is not accessed. This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * A continuous task of the AUDIO_PLAYBACK type is requested, but the audio and video are not played. This value is 
     * reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * A continuous task of the AUDIO_RECORDING type is requested, but audio recording is not in progress. This value is
     * reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * A continuous task of the **LOCATION** type is requested, but the location service is not in use. This value is 
     * reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,
  
    /**
     * A continuous task of the BLUETOOTH_INTERACTION type is requested, but Bluetooth-related services are not used. 
     * This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,
  
    /**
     * A continuous task of the MULTI_DEVICE_CONNECTION type is requested, but multi-device connection is not used. This
     * value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,
  
    /**
     * A continuous task of an invalid type is used. For example, a continuous task of the **AUDIO_PLAYBACK** type is 
     * requested, but the audio playback and location services are in use. This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11
  }

  /**
   * Describes the detailed reason for canceling a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ContinuousTaskDetailedCancelReason {  
    /**
     * User removal notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,
  
    /**
     * A continuous task of the **DATA_TRANSFER** type is requested, but the data transmission rate is low.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * A continuous task of the **AUDIO_PLAYBACK** type is requested, but 
     * [AVSession](docroot://media/avsession/avsession-overview.md) is not accessed.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * A continuous task of the **AUDIO_PLAYBACK** type is requested, but the audio and video are not played.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * A continuous task of the **AUDIO_RECORDING** type is requested, but audio recording is not in progress.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * A continuous task of the **LOCATION** type is requested, but the location service is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,
  
    /**
     * A continuous task of the **BLUETOOTH_INTERACTION** type is requested, but Bluetooth is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,
  
    /**
     * A continuous task of the **MULTI_DEVICE_CONNECTION** type is requested, but the multi-device connection service 
     * is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,
  
    /**
     * A continuous task of an invalid type is used. For example, a continuous task of the **AUDIO_PLAYBACK** type is 
     * requested, but the audio playback and location services are in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11,

    /**
     * A continuous task of the **DATA_TRANSFER** type is requested, but the progress is not updated for a long time (
     * the first update takes more than 10 minutes).
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_NOT_UPDATE = 12,

    /**
     * A continuous task of the **VOIP** type is requested, but no audio stream or recording stream is in progress.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_VOIP_NOT_RUNNING = 13,

    /**
     * A continuous task of the special scenario type is requested, but the user is not authorized.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USER_UNAUTHORIZED = 14
  }

  /**
   * Defines the subtype of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundSubMode {
    /**
     * Car key.
     * 
     * **NOTE**
     * 
     * 1. The car key subtype takes effect only when a continuous task of the BLUETOOTH_INTERACTION type is requested.
     * 2. Continuous tasks of this type cannot be updated through the [updateBackgroundRunning]{@link backgroundTaskManager.updateBackgroundRunning(context: Context, bgModes: string[])} API.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    CAR_KEY = 1
  }

  /**
   * Defines the type of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundModeType {
    /**
     * Subtype.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    SUB_MODE = 'subMode'
  }

  /**
   * Describes the reason why a continuous task is suspended.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskSuspendReason {
    /**
     * A continuous task of the **DATA_TRANSFER** type is requested, but the data transmission rate is low.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     * A continuous task of the **AUDIO_PLAYBACK** type is requested, but 
     * [AVSession](docroot://media/avsession/avsession-overview.md) is not accessed.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * A continuous task of the **AUDIO_PLAYBACK** type is requested, but audio playback is not in progress.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * A continuous task of the **AUDIO_RECORDING** type is requested, but audio recording is not in progress.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * A continuous task of the **LOCATION** type is requested, but the location service is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_LOCATION_NOT_USED = 8,
  
    /**
     * A continuous task of the **BLUETOOTH_INTERACTION** type is requested, but Bluetooth is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_BLUETOOTH_NOT_USED = 9,
  
    /**
     * A continuous task of the **MULTI_DEVICE_CONNECTION** type is requested, but the multi-device connection service 
     * is not in use.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED = 10,
  
    /**
     * A continuous task of an invalid type is used. For example, a continuous task of the **AUDIO_PLAYBACK** type is 
     * requested, but the audio playback and location services are in use. This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_USED_ILLEGALLY = 11,

    /**
     * A continuous task is suspended due to high system load. This value is reserved.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING = 12,

    /**
     * A continuous task of the **VOIP** type is requested, but no audio stream or recording stream is in progress.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_VOIP_NOT_USED = 13,

    /**
     * A continuous task of the **BLUETOOTH_INTERACTION** type is requested, but there is no Bluetooth data flow for a 
     * period of time.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_BLUETOOTH_DATA_NOT_EXIST = 14,

    /**
     * A continuous task of the **LOCATION** type is requested, but the device is absolutely still for a period of time.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_POSITION_NOT_MOVED = 15,

    /**
     * A continuous task of the **AUDIO_PLAYBACK** type is requested, but the device is muted for a period of time.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_MUTE = 16,

    /**
     * No nearlink connection for a period of time when request nearlink mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_NOT_USED = 17,

    /**
     * No nearlink data for a period of time when request nearlink mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_DATA_NOT_EXIST = 18,

    /**
     * A continuous task of the special scenario type is requested, but the user is not authorized.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_USER_UNAUTHORIZED = 19,
  }

  /**
   * Represents the user authorization result.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 22 dynamic
   * @since 24 static
   */
  export enum UserAuthResult {
    /**
     * The authorization is not supported. For example, if the main type of the requested continuous task is not 
     * **MODE_SPECIAL_SCENARIO_PROCESSING**, continuous task running in the background is not supported.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_SUPPORTED = 0,

    /**
     * No user operation.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_DETERMINED = 1,

    /**
     * The authorization is denied.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    DENIED = 2,

    /**
     * The authorization is granted this time.
     * 
     * Note: The authorization record will be cleared when the application exits.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ONCE = 3,

    /**
     * The authorization is granted always.
     * 
     * **NOTE**
     * 
     * When the following common events are received, the related authorization records will be cleared:
     * 
     * [COMMON_EVENT_PACKAGE_ADDED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_added)
     * , 
     * [COMMON_EVENT_PACKAGE_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_removed)
     * , 
     * [COMMON_EVENT_BUNDLE_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_bundle_removed)
     * , 
     * [COMMON_EVENT_PACKAGE_FULLY_REMOVED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_fully_removed)
     * , 
     * [COMMON_EVENT_PACKAGE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_package_changed)
     * .
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ALWAYS = 4
  }
}

export default backgroundTaskManager;


/**
 * Manages background tasks.
 *
 * @namespace backgroundTaskManager
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace backgroundTaskManager {
  /**
   * The request object of continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export class ContinuousTaskRequest {
    /**
     * Modes of continuous task.
     *
     * @returns { BackgroundTaskMode[] } the background modes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskModes(): BackgroundTaskMode[];

    /**
     * Modes of continuous task.
     *
     * @param { BackgroundTaskMode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskModes(value: BackgroundTaskMode[]);

    /**
     * Submodes of continuous task.
     *
     * @returns { BackgroundTaskSubmode[] } the background submodes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskSubmodes(): BackgroundTaskSubmode[];

    /**
     * Submodes of continuous task.
     *
     * @param { BackgroundTaskSubmode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskSubmodes(value: BackgroundTaskSubmode[]);

    /**
     * Indicates which ability to start when user click the notification bar.
     *
     * @returns { WantAgent } the wantAgent
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @stagemodelonly
     * @since 21 dynamic
     * @since 24 static
     */
    get wantAgent(): WantAgent;

    /**
     * Indicates which ability to start when user click the notification bar.
     *
     * @param { WantAgent } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    set wantAgent(value: WantAgent);

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    combinedTaskNotification?: boolean;

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @returns { boolean | undefined } whethre to merge notifications
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get combinedTaskNotification(): boolean | undefined;

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @param { boolean | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set combinedTaskNotification(value: boolean | undefined);

    /**
     * The continuous task id, default -1.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     */
    continuousTaskId?: number;

    /**
     * The continuous task id, default -1.
     *
     * @returns { int | undefined } the continuous task id
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get continuousTaskId(): int | undefined;

    /**
     * The continuous task id, default -1.
     *
     * @param { int | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set continuousTaskId(value: int | undefined);

    /**
     * Whether the modes of continuous task are supported.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @returns { boolean } Whether the modes of continuous task are supported.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    isModeSupported(): boolean;

    /**
     * Requesting MODE_SPECIAL_SCENARIO_PROCESSING authorization from users,
     *     a dialog box will be displayed.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @param { Callback<UserAuthResult> } callback - The callback of the function.
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
     * Check whether the application can request MODE_SPECIAL_SCENARIO_PROCESSING.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @returns { Promise<UserAuthResult> } The promise returns the result of user authorization.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    checkSpecialScenarioAuth(context: Context): Promise<UserAuthResult>;
  }

  /**
   * The info of delay suspend.
   *
   * @interface DelaySuspendInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  interface DelaySuspendInfo {
    /**
     * The unique identifier of the delay request.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    requestId: int;
    /**
     * The actual delay duration (ms).
     * <br>Unit:ms
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    actualDelayTime: int;
  }

  /**
   * The callback info of transient task.
   *
   * @interface TransientTaskInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransientTaskInfo {
    /**
     * Total remaining quota of an application in one day.
     * <br>Unit:ms
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    remainingQuota: int;
    /**
     * The info list of delay suspend.
     *
     * @type { DelaySuspendInfo[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    transientTasks: DelaySuspendInfo[];
  }

  /**
   * The info of continuous task notification.
   *
   * @interface ContinuousTaskNotification
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ContinuousTaskNotification {
    /**
     * The notification slot type.
     *
     * @type { notificationManager.SlotType }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    slotType: notificationManager.SlotType;
    /**
     * The notification content type.
     *
     * @type { notificationManager.ContentType }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    contentType: notificationManager.ContentType;
    /**
     * The notification id.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * The continuous task id.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 15 dynamic
     * @since 23 static
     */
    continuousTaskId?: int;
  }

  /**
   * The continuous task cancel info.
   *
   * @interface ContinuousTaskCancelInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  interface ContinuousTaskCancelInfo {
    /**
     * The cancel reason of continuous task.
     *
     * @type { ContinuousTaskCancelReason }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    reason: ContinuousTaskCancelReason;

    /**
     * The id of cancelled continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * The detailed cancel reason of a continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    detailedReason?: ContinuousTaskDetailedCancelReason;
  }

  /**
   * The continuous task active info.
   *
   * @interface ContinuousTaskActiveInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskActiveInfo {
    /**
     * The id of active continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    id: int;
  }

  /**
   * The continuous task info.
   *
   * @interface ContinuousTaskInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskInfo {
    /**
     * The ability name of apply continuous task.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;
   /**
     * The uid of apply continuous task.
     *
     * @type { int}
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
   /**
     * The pid of apply continuous task.
     *
     * @type { int}
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
    /**
     * Is apply continuous task from webview.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    isFromWebView: boolean;
    /**
     * Background modes of apply continuous task.
     *
     * @type { string[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundModes: string[];
    /**
     * Background sub modes of apply continuous task.
     *
     * @type { string[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundSubModes: string[];
    /**
     * The notification id of apply continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * The continuous task id of apply continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;
   /**
     * The ability id of apply continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityId: int;
    /**
     * The wantAgent bundle name of apply continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentBundleName: string;
    /**
     * The wantAgent ability name of apply continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentAbilityName: string;
    /**
     * The suspend state of apply continuous task.
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;
    /**
     * The bundleName of apply continuous task.
     * @type { ?string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    bundleName?: string;
    /**
     * The appIndex of apply continuous task.
     * @type { ?int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    appIndex?: int;
  }

  /**
   * The background task state info of user authorization status.
   *
   * @interface BackgroundTaskStateInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  interface BackgroundTaskStateInfo {
    /**
     * UserId of the application applying for special continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    userId: int;
    /**
     * BundleName of the application applying for special continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    bundleName: string;
    /**
     * AppIndex of the application applying for special continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    appIndex: int;
    /**
     * Type of user authorization status.
     * @type { ?UserAuthResult }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    authResult?: UserAuthResult;
  }

  /**
   * The continuous task suspend info.
   *
   * @interface ContinuousTaskSuspendInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskSuspendInfo {
    /**
     * The id of suspended continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;

    /**
     * The suspend state of continuous task.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;

    /**
     * The suspend reason of continuous task.
     *
     * @type { ContinuousTaskSuspendReason }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendReason: ContinuousTaskSuspendReason;

    /**
     * The suspend message of continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    suspendMessage?:SuspendMessage;
  }

  /**
   * The continuous task suspend message.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SuspendMessage {
    /**
     * The detailed suspend message of continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    message: string;

    /**
     * The detailed suspend reason of continuous task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: ContinuousTaskSuspendReason;
  }

  /**
   * The continuous task state change subscriber.
   *
   * @typedef BackgroundTaskSubscriber
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  export interface BackgroundTaskSubscriber {  
    /**
     * Callback of continuous task start.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStart(info: ContinuousTaskInfo): void;

    /**
     * Callback of continuous task update.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskUpdate(info: ContinuousTaskInfo): void;

    /**
     * Callback of continuous task stop.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStop(info: ContinuousTaskInfo): void;
  }

  /**
   * Efficiency Resources information.
   *
   * @interface EfficiencyResourcesInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface EfficiencyResourcesInfo {
    /**
     * The set of resource types that app wants to apply.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    resourceTypes: int;
    /**
     * The duration that the resource can be used most.
     * <br>Unit:ms
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    timeout: int;
    /**
     * True if the apply action is persistent, else false. Default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isPersistent: boolean;
    /**
     * True if apply action is for process, false is for package. Default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isForProcess: boolean;
    /**
     * The apply reason.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    reason: string;
   /**
     * The uid of apply efficiency resources.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
   /**
     * The pid of apply efficiency resources.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
   /**
     * Specify CPU resources. The system will allocate the specified CPU resources
     *     to the application during idle load times.
     *
     * @type { ?EfficiencyResourcesCpuLevel }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * Cancels delayed transition to the suspended state.
   *
   * @param { int } requestId - The identifier of the delay request.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Obtains the remaining time before an application enters the suspended state.
   *    <br>Unit:ms
   *
   * @param { int } requestId - The identifier of the delay request.
   * @param { AsyncCallback<int> } callback - The callback of the remaining delay time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Obtains the remaining time before an application enters the suspended state.
   *    <br>Unit:ms
   *
   * @param { int } requestId - The identifier of the delay request.
   * @returns { Promise<int> } The promise returns the remaining delay time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Requests delayed transition to the suspended state.
   *
   * @param { string } reason - Indicates the reason for delayed transition to the suspended state.
   * @param { Callback<void> } callback - The callback delay time expired.
   * @returns { DelaySuspendInfo } Info of delay request.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Obtains transient task info before an application enters the suspended state.
   *
   * @returns { Promise<TransientTaskInfo> } The promise returns the transient tasks info.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900003 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9900004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getTransientTaskInfo(): Promise<TransientTaskInfo>;

  /**
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to the this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * UIAbility uses this method to request start running in background.
   * <p> System will publish a notification related to the UIAbility. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { string[] } bgModes - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * UIAbility uses this method to request start running in background,
   *     a UIAbility can request multi continuous task at a time.
   *     System will publish a notification related to the UIAbility.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { ContinuousTaskRequest } request - The continuous task request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
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
   * UIAbility uses this method to update background mode.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { string[] } bgModes - Indicates which background mode to request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * UIAbility uses this method to update background mode, support update according to continuous task id.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { ContinuousTaskRequest } request - Indicates which background mode to request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
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
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 18]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 18]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * UI ability uses this method to request stop running in background according to continuous task id.
   *
   * @param { Context } context - App running context.
   * @param { int } continuousTaskId - continuousTaskId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice  [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  function stopBackgroundRunning(context: Context, continuousTaskId: int): Promise<void>;

  /**
   * Obtains all the continuous tasks before an application enters the suspended state,
   *     including continuous tasks in suspended state.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context): Promise<ContinuousTaskInfo[]>;

  /**
   * Obtains all the continuous tasks before an application enters the suspended state.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { boolean } includeSuspended - Return the suspended continuous tasks.
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context, includeSuspended: boolean): Promise<ContinuousTaskInfo[]>;

  /**
   * Set the user authorization status of special continuous tasks.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Background task state info.
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
   * Get the user authorization status of special continuous tasks.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Background task state info.
   * @returns { UserAuthResult } Type of user authorization status.
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
   * Obtains information about all continuous tasks in the system.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
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
   * Subscribe to continuous task state change.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - The continuous task state change subscriber.
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
   * Unsubscribe to continuous task state change.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - The continuous task state change subscriber.
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
   * Apply or unapply efficiency resources.
   *
   * @param { EfficiencyResourcesRequest } request - The request of apply or unapply efficiency resources.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Reset all efficiency resources apply.
   *
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
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
   * Obtains all the efficiency resources of current application.
   *
   * @returns { Promise<EfficiencyResourcesInfo[]> } The promise returns the efficiency resources info.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @throws { BusinessError } 18700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 18700004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllEfficiencyResources(): Promise<EfficiencyResourcesInfo[]>;

  /**
   * Register continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type - The type of continuous task cancel.
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Register continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskCancel(callback: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Unregister continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type - The type of continuous task cancel.
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Unregister continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskCancel(callback?: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Register continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - The type of continuous task suspend.
   * @param { Callback<ContinuousTaskSuspendInfo> } callback - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Register continuous task suspend callback.
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
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - The type of continuous task suspend.
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback] - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Unregister continuous task suspend callback.
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
   * Register continuous task active callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - The type of continuous task active.
   * @param { Callback<ContinuousTaskActiveInfo> } callback - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Register continuous task active callback.
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
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - The type of continuous task active.
   * @param { Callback<ContinuousTaskActiveInfo> } [callback] - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Unregister continuous task active callback.
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
   * Supported background mode.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BackgroundMode {
    /**
     * data transfer mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_TRANSFER = 1,

    /**
     * audio playback mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_PLAYBACK = 2,

    /**
     * audio recording mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_RECORDING = 3,

    /**
     * location mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCATION = 4,

    /**
     * bluetooth interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * multi-device connection mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * wifi interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_INTERACTION = 7,

    /**
     * Voice over Internet Phone mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 13 dynamic
     * @since 23 static
     */
    VOIP = 8,

    /**
     * background continuous calculate mode, for example 3D render.
     * only supported in particular device
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    TASK_KEEPING = 9,
  }

  /**
   * Supported Continuous task mode.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskMode {
    /**
     * data transfer mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_DATA_TRANSFER = 1,

    /**
     * audio playback mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_PLAYBACK = 2,

    /**
     * audio recording mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_RECORDING = 3,

    /**
     * share location mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_LOCATION = 4,

    /**
     * bluetooth interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_BLUETOOTH_INTERACTION = 5,

    /**
     * multi-device connection mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_MULTI_DEVICE_CONNECTION = 6,

    /**
     * allow wifi aware mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_ALLOW_WIFI_AWARE = 7,

    /**
     * Voice over Internet Phone mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_VOIP = 8,

    /**
     * background continuous calculate mode, for example 3D render.
     * only supported in particular device
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_TASK_KEEPING = 9,

    /**
     * 'av playback and record' mode, for example audio playback, audio recording.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_AV_PLAYBACK_AND_RECORD = 12,

    /**
     * special scenario processing mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_SPECIAL_SCENARIO_PROCESSING = 13,

    /**
     * nearlink mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_NEARLINK = 14,
  }

  /**
   * Supported Continuous task submode.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice [since 26.0.0]
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskSubmode {
    /**
     * submode of 'MODE_BLUETOOTH_INTERACTION'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_CAR_KEY_NORMAL_NOTIFICATION = 1,

    /**
     * normal notification submode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_NORMAL_NOTIFICATION = 2,

    /**
     * obvious notification submode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_LIVE_VIEW_NOTIFICATION = 3,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION = 4,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice [since 26.0.0]
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AVSESSION_AUDIO_PLAYBACK = 5,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION = 6,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION = 7,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION = 8,

    /**
     * submode of 'MODE_SPECIAL_SCENARIO_PROCESSING'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION = 9,

    /**
     * submode of 'MODE_MULTI_DEVICE_CONNECTION'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION = 10,

    /**
     * submode of 'MODE_SPECIAL_SCENARIO_PROCESSING', used for workout scenarios.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    SUBMODE_WORK_OUT_NORMAL_NOTIFICATION = 11
  }

  /**
   * The type of resource.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ResourceType {
    /**
     * The cpu resource for not being suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CPU = 1,

    /**
     * The resource for not being proxyed common_event.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT = 1 << 1,

    /**
     * The resource for not being proxyed timer.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TIMER = 1 << 2,

    /**
     * The resource for not being proxyed workscheduler.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1 << 3,

    /**
     * The resource for not being proxyed bluetooth.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH = 1 << 4,

    /**
     * The resource for not being proxyed gps.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GPS = 1 << 5,

    /**
     * The resource for not being proxyed audio.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = 1 << 6,

    /**
     * The resource for not being proxyed running lock.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING_LOCK = 1 << 7,

    /**
     * The resource for not being proxyed sensor.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR = 1 << 8
  }

  /**
   * The type of CPU level.
   *
   * @enum { int } The type of resource.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum EfficiencyResourcesCpuLevel {
    /**
     * Runs up to small cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SMALL_CPU = 0,

    /**
     * Runs up to medium cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIUM_CPU = 1,

    /**
     * Runs up to large cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LARGE_CPU = 2
  }

  /**
   * The request of efficiency resources.
   *
   * @interface EfficiencyResourcesRequest
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EfficiencyResourcesRequest {
    /**
     * The set of resource types that app wants to apply.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    resourceTypes: int;

    /**
     * True if the app begin to use, else false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isApply: boolean;

    /**
     * The duration that the resource can be used most.
     * <br>Unit:ms
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    timeOut: int;

    /**
     * True if the apply action is persist, else false. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isPersist?: boolean;

    /**
     * True if apply action is for process, false is for package. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isProcess?: boolean;

    /**
     * The apply reason.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: string;

   /**
     * Specify CPU resources. The system will allocate the specified CPU resources
     *     to the application during idle load times.
     *
     * @type { ?EfficiencyResourcesCpuLevel }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * The type of continuous task cancel reason.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskCancelReason {
    /**
     * User cancel.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL = 1,
    /**
     * System cancel.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL = 2,
    /**
     * User remove notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,

    /**
     * Low network speed when request data transfer mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,

    /**
     * Not use avsession when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,

    /**
     * Audio is not running when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,

    /**
     * Audio is not running when request audio recording mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,

    /**
     * Not use location when request location mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,

    /**
     * Not use bluetooth when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,

    /**
     * Not use multi device when request multi-device connection mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,

    /**
     * Use some mode illegally.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11,
  }

  /**
   * The type of continuous task detailed cancel reason.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ContinuousTaskDetailedCancelReason {
    /**
     * User remove notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,

    /**
     * Low network speed when request data transfer mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,

    /**
     *  Not use avsession when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,

    /**
     * Audio is not running when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,

    /**
     * Audio is not running when request audio recording mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,

    /**
     * Not use location when request location mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,

    /**
     * Not use bluetooth when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,

    /**
     * Not use multi device when request multi-device connection mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,

    /**
     * Use some undeclared mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11,

    /**
     * Data transfer task was not updated within the specified time.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_NOT_UPDATE = 12,

    /**
     * VOIP is not running when request VOIP mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_VOIP_NOT_RUNNING = 13,

    /**
     * User not authorized when request MODE_SPECIAL_SCENARIO_PROCESSING.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_CANCEL_USER_UNAUTHORIZED = 14
  }

  /**
   * Supported background submode.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundSubMode {
    /**
     * bluetooth car key mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    CAR_KEY = 1
  }

  /**
   * Supported background mode type.
   *
   * @enum { string }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundModeType {
    /**
     * subMode type
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    SUB_MODE = 'subMode'
  }

  /**
   * Type of continuous task suspend reason.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskSuspendReason {
    /**
     * Low network speed when request data transfer mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     *  Not use avsession when request audio playback mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * Audio is not running when request audio playback mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * Audio is not running when request audio recording mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * Not use location when request location mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_LOCATION_NOT_USED = 8,
  
    /**
     * Not use bluetooth when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_BLUETOOTH_NOT_USED = 9,
  
    /**
     * Not use multi device when request multi-device connection mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED = 10,
  
    /**
     * Use some mode illegally.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_USED_ILLEGALLY = 11,

    /**
     * System load warning.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING = 12,

    /**
     * Not use VOIP when request VOIP mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_VOIP_NOT_USED = 13,

    /**
     * No bluetooth data for a period of time when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_BLUETOOTH_DATA_NOT_EXIST = 14,

    /**
     * The location has not moved for a period of time when request location mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_POSITION_NOT_MOVED = 15,

    /**
     * The system muted for a period of time when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_MUTE = 16,

    /**
     * No nearlink connection for a period of time when request nearlink mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_NOT_USED = 17,

    /**
     * No nearlink data for a period of time when request nearlink mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_NEARLINK_DATA_NOT_EXIST = 18,

    /**
     * User not authorized when request MODE_SPECIAL_SCENARIO_PROCESSING.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_SUSPEND_USER_UNAUTHORIZED = 19,
  }

  /**
   * Type of user authorization status.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 22 dynamic
   * @since 24 static
   */
  export enum UserAuthResult {
    /**
     * Request is not supported.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_SUPPORTED = 0,

    /**
     * Permission is not determined.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_DETERMINED = 1,

    /**
     * Permission has been denied, only can change it in settings.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    DENIED = 2,

    /**
     * The permission was granted once.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ONCE = 3,

    /**
     * Permissions are always granted.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ALWAYS = 4
  }
}

export default backgroundTaskManager;
