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
     * 延迟挂起的请求ID。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.DelaySuspendInfo
     */
    requestId: number;
    /**
     * 应用的实际挂起延迟时间，单位：ms。
     * 
     * 一般情况下默认值为180000，低电量（依据系统低电量广播）时默认值为60000。
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
   * 获取本次短时任务的剩余时间，使用Promise异步回调。
   *
   * @param { number } requestId  - 延迟挂起的请求ID。这个值通过调用
   *     [requestSuspendDelay]{@link backgroundTaskManager.requestSuspendDelay}方法获取。
   * @returns { Promise<number> } Promise对象，返回本次短时任务的剩余时间，单位：ms。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.getRemainingDelayTime(requestId: int)
   */
  function getRemainingDelayTime(requestId: number): Promise<number>;

  /**
   * 后台应用申请延迟挂起。
   * 
   * 延迟挂起时间一般情况下默认值为3分钟，低电量（依据系统低电量广播）时默认值为1分钟。
   *
   * @param { string } reason  - 延迟挂起申请的原因。
   * @param { Callback<void> } callback  - 延迟即将超时的回调函数，一般在超时前6秒通过此回调通知应用。
   * @returns { DelaySuspendInfo } 返回延迟挂起信息。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.requestSuspendDelay
   */
  function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;

  /**
   * 向系统申请长时任务，使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - 应用运行的上下文。<br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。
   * @param { BackgroundMode } bgMode  - 向系统申请的后台模式。
   * @param { WantAgent } wantAgent  - 通知参数，用于指定长时任务通知点击后跳转的界面。
   * @param { AsyncCallback<void> } callback  - 回调函数，申请长时任务成功时，err为undefined，否则为错误对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>)
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * 向系统申请长时任务，使用promise异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context  - - 应用运行的上下文。<br>FA模型的应用Context定义见[Context]{@link
   *     ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。
   * @param { BackgroundMode } bgMode  - 向系统申请的后台模式。
   * @param { WantAgent } wantAgent  - 通知参数，用于指定长时任务通知点击跳转的界面。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent)
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>;

  /**
   * 向系统申请取消长时任务，使用callback异步回调。
   *
   * @param { Context } context  - 应用运行的上下文。<br>FA模型的应用Context定义见[Context]{@link ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。
   * @param { AsyncCallback<void> } callback  - 回调函数，取消长时任务成功时，err为undefined，否则为错误对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context: Context, callback: AsyncCallback<void>)
   */
  function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void;

  /**
   * 向系统申请取消长时任务，使用promise异步回调。
   *
   * @param { Context } context  - - 应用运行的上下文。<br>FA模型的应用Context定义见[Context]{@link
   *     ./app/context}。<br>Stage模型的应用Context定义见
   *     [Context]{@link ./application/Context:Context}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context: Context)
   */
  function stopBackgroundRunning(context: Context): Promise<void>;

  /**
   * 长时任务类型。
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.BackgroundMode
   */
  export enum BackgroundMode {
    /**
     * 数据传输。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.DATA_TRANSFER
     */
    DATA_TRANSFER = 1,

    /**
     * 音频播放。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK
     */
    AUDIO_PLAYBACK = 2,

    /**
     * 录音。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.AUDIO_RECORDING
     */
    AUDIO_RECORDING = 3,

    /**
     * 定位导航。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.LOCATION
     */
    LOCATION = 4,

    /**
     * 蓝牙相关。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.BLUETOOTH_INTERACTION
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * 多设备互联。
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.MULTI_DEVICE_CONNECTION
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * WLAN相关
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.WIFI_INTERACTION
     */
    WIFI_INTERACTION = 7,

    /**
     * 音视频通话
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceschedule.backgroundTaskManager.BackgroundMode.VOIP
     */
    VOIP = 8,

    /**
     * 计算任务（仅在特定设备生效）。
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
