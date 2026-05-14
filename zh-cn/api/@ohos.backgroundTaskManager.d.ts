/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { WantAgent } from './@ohos.wantAgent';
import Context from './application/BaseContext';

/**
 * 本模块提供后台任务管理能力。
 *
 * 当应用或业务模块处于后台（无可见界面）时，如果有需要继续执行或者后续执行的业务，可基于业务类型，申请短时任务延迟挂起（Suspend）或者长时任务避免进入挂起状态。
 *
 * 应用有不可中断且短时间能完成的任务时（如，用户在文件管理器上点击垃圾文件清理，若清理未完成时退到后台，文件管理器需要申请短时任务完成清理），可以使用短时任务机制。
 *
 * 应用中存在用户能够直观感受到的且需要一直在后台运行的业务时（如，后台播放音乐），可以使用长时任务机制。
 * 
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager
 */
declare namespace backgroundTaskManager {
  /**
   * 延迟挂起信息。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.DelaySuspendInfo
   * @name DelaySuspendInfo
   */
  interface DelaySuspendInfo {
    /**
     * ID of the suspension delay request.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.DelaySuspendInfo
     */
    requestId: number;
    /**
     * Actual suspension delay duration of the application, in milliseconds.
     * 
     * The default duration is 180000 when the battery level is higher than or equal to the broadcast low battery level 
     * and 60000 when the battery level is lower than the broadcast low battery level.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.DelaySuspendInfo
     */
    actualDelayTime: number;
  }

  /**
   * 取消延迟挂起。
   *
   * @param { number } requestId  - 延迟挂起的请求ID。这个值通过调用
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}方法获取。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.cancelSuspendDelay
   */
  function cancelSuspendDelay(requestId: number): void;

  /**
   * 获取本次短时任务的剩余时间，使用callback异步回调。
   *
   * @param { number } requestId  - 延迟挂起的请求ID。这个值通过调用
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}方法获取。
   * @param { AsyncCallback<number> } callback  - 回调函数，返回本次短时任务的剩余时间，单位：ms。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.getRemainingDelayTime(requestId: int, callback: AsyncCallback<int>)
   */
  function getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void;

  /**
   * Obtains the remaining duration before the application is suspended. This API uses a promise to return the result.
   *
   * @param { number } requestId - ID of the suspension delay request. The value is obtained by calling
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}.
   * @returns { Promise<number> } Promise used to return the remaining duration before the application is suspended, in
   *     milliseconds.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.getRemainingDelayTime(requestId: int)
   */
  function getRemainingDelayTime(requestId: number): Promise<number>;

  /**
   * Requests delayed suspension after the application switches to the background.
   * 
   * The default duration of delayed suspension is 3 minutes when the battery level is higher than or equal to the 
   * broadcast low battery level and 1 minute when the battery level is lower than the broadcast low battery level.
   *
   * @param { string } reason - Reason for delayed transition to the suspended state.
   * @param { Callback<void> } callback - Invoked when a delay is about to time out. Generally, this callback is used to
   *     notify the application 6 seconds before the delay times out.
   * @returns { DelaySuspendInfo } Information about the suspension delay.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.requestSuspendDelay
   */
  function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;

  /**
   * Requests a continuous task from the system. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.<br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.
   * @param { BackgroundMode } bgMode - Background mode requested.
   * @param { WantAgent } wantAgent - Notification parameter, which is used to specify the target page that is
   *     redirected to when a continuous task notification is clicked.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>)
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * Requests a continuous task from the system. This API uses a promise to return the result.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - Application context.<br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.
   * @param { BackgroundMode } bgMode - Background mode requested.
   * @param { WantAgent } wantAgent - Notification parameter, which is used to specify the target page that is
   *     redirected to when a continuous task notification is clicked.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent)
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>;

  /**
   * Requests to cancel a continuous task. This API uses an asynchronous callback to return the result.
   *
   * @param { Context } context - Application context.<br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context: Context, callback: AsyncCallback<void>)
   */
  function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void;

  /**
   * Requests to cancel a continuous task. This API uses a promise to return the result.
   *
   * @param { Context } context - Application context.<br>For details about the application context of the FA model, see
   *     [Context]{@link ./app/context}.<br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/Context:Context}.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context: Context)
   */
  function stopBackgroundRunning(context: Context): Promise<void>;

  /**
   * Defines the type of a continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.BackgroundMode
   */
  export enum BackgroundMode {
    /**
     * Data transfer.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.DATA_TRANSFER
     */
    DATA_TRANSFER = 1,

    /**
     * Audio playback.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK
     */
    AUDIO_PLAYBACK = 2,

    /**
     * Audio recording.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.AUDIO_RECORDING
     */
    AUDIO_RECORDING = 3,

    /**
     * Positioning and navigation.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.LOCATION
     */
    LOCATION = 4,

    /**
     * Bluetooth-related task.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.BLUETOOTH_INTERACTION
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * Multi-device connection.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.MULTI_DEVICE_CONNECTION
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN-related.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.WIFI_INTERACTION
     */
    WIFI_INTERACTION = 7,

    /**
     * Audio and video calls.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.VOIP
     */
    VOIP = 8,

    /**
     * Computing task (effective only for specific devices).
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.TASK_KEEPING
     */
    TASK_KEEPING = 9,
  }
}

export default backgroundTaskManager;
