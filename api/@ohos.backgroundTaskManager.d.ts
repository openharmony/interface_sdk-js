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

import { AsyncCallback , Callback} from './basic';
import { WantAgent } from "./@ohos.wantAgent";

/**
 * Manages background tasks.
 *
 * @since 7
 * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
 * @devices phone, tv, wearable, tablet, car
 */
declare namespace backgroundTaskManager {
    /**
     * The info of delay suspend.
     *
     * @name DelaySuspendInfo
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     */
    interface DelaySuspendInfo {
        /**
         * The unique identifier of the delay request.
         */
        requestId: number;
        /**
         * The actual delay duration (ms).
         */
        actualDelayTime: number;
    }

    /**
     * Cancels delayed transition to the suspended state.
     *
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     * @param requestId Indicates the identifier of the delay request.
     */
    function cancelSuspendDelay(requestId: number): void;

    /**
     * Obtains the remaining time before an application enters the suspended state.
     *
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     * @param requestId Indicates the identifier of the delay request.
     * @return The remaining delay time
     */
    function getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void;
    function getRemainingDelayTime(requestId: number): Promise<number>;

    /**
     * Requests delayed transition to the suspended state.
     *
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     * @param reason Indicates the reason for delayed transition to the suspended state.
     * @param callback The callback delay time expired.
     * @return Info of delay request
     */
    function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;

    /**
     * Service ability uses this method to request start running in background.
     * system will publish a notification related to the this service when condition is met.
     * each ability will only allowed to request one type background mode.
     *
     * @devices phone, tablet
     * @since 8
     * @param bgMode Indicates which background mode to request.
     * @param wantAgent Indicates which ability to start when user click the notification.
     */
    function startBackgroundRunning(bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void;
    function startBackgroundRunning(bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>;

    /**
     * Service ability uses this method to request stop running in background.
     *
     * @devices phone, tablet
     * @since 8
     */
    function stopBackgroundRunning(callback: AsyncCallback<void>): void;
    function stopBackgroundRunning(): Promise<void>;

    /**
     * supported background mode.
     *
     * @since 8
     */
    export enum BackgroundMode {
        /**
         * data transfer mode
         */
        DATA_TRANSFER = 1,

        /**
         * audio playback mode
         */
        AUDIO_PLAYBACK = 2,

        /**
         * audio recording mode
         */
        AUDIO_RECORDING = 3,

        /**
         * location mode
         */
        LOCATION = 4,

        /**
         * bluetooth interaction mode
         */
        BLUETOOTH_INTERACTION = 5,

        /**
         * multi-device connection mode
         */
        MULTI_DEVICE_CONNECTION = 6,

        /**
         * wifi interaction mode
         *
         * @systemapi Hide this for inner system use.
         */
        WIFI_INTERACTION = 7,

        /**
         * Voice over Internet Phone mode
         *
         * @systemapi Hide this for inner system use.
         */
        VOIP = 8,

        /**
         * backgroud continuous calculate mode, for example 3d render.
         */
        TASK_KEEPING = 9,
    }
}

export default backgroundTaskManager;