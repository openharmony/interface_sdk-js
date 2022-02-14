/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import Want from "../@ohos.application.Want";

/**
 * Mission information corresponding to ability.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @systemapi hide for inner use.
 */
export interface MissionInfo {
    /**
     * Indicates mission id.
     *
     * @since 8
     * @sysCap AAFwk
     */
    missionId: number;

    /**
     * Indicates running state.
     *
     * @since 8
     * @sysCap AAFwk
     */
    runningState: number;

    /**
     * Indicates locked state.
     *
     * @since 8
     * @sysCap AAFwk
     */
    lockedState: number;

    /**
     * Indicates the recent create or update time of the mission.
     *
     * @since 8
     * @sysCap AAFwk
     */
    timestamp: string;

    /**
     * Indicates want of the mission.
     *
     * @since 8
     * @sysCap AAFwk
     */
    want: Want;

    /**
     * Indicates label of the mission.
     *
     * @since 8
     * @sysCap AAFwk
     */
    label: string;

    /**
     * Indicates icon path of the mission.
     *
     * @since 8
     * @sysCap AAFwk
     */
    iconPath: string;

    /**
     * Indicates whether the mision is continuable.
     *
     * @since 8
     * @sysCap AAFwk
     */
     continuable: boolean;
}