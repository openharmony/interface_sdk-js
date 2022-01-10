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

/**
 * MissionListener registered by app.
 *
 * @name MissionListener
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet
 * @permission N/A
 * @systemapi hide for inner use.
 */
 export interface MissionListener {
    /**
     * Called by system when mission created.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onMissionCreated(mission: number): void;

    /**
     * Called by system when mission destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onMissionDestroyed(mission: number): void;

    /**
     * Called by system when mission shapshot changed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onMissionSnapshotChanged(mission: number): void;

    /**
     * Called by system when mission moved to fornt.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onMissionMovedToFront(mission: number): void;
}