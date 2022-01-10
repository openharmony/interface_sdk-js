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

import AbilityContext from "./application/AbilityContext";
import Want from './@ohos.application.Want';
import window from './@ohos.window';

/**
 * The class of an ability.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     *
     * @since 8
     * @sysCap AAFwk
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     *
     * @since 8
     * @sysCap AAFwk
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     *
     * @since 8
     * @sysCap AAFwk
     */
    lastRequestWant: Want;

    /**
     * Called back when an ability is started for initialization.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onCreate(want: Want, param: LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onWindowStageDestroy(): void;

    /**
     * Called back before an ability is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    onBackground(): void;
}

export interface LaunchParam {
    /**
     * Indicates launch reason.
     *
     * @since 8
     * @sysCap AAFwk
     */
    launchReason: LaunchReason;

    /**
     * Indicates last exit reason.
     *
     * @since 8
     * @sysCap AAFwk
     */
    lastExitReason: LastExitReason;
}

/**
 * Type of launch reason.
 *
 * @since 8
 * @sysCap AAFwk
 */
export enum LaunchReason {
    UNKNOWN = 0,
    START_ABILITY = 1,
    CALL = 2,
    CONTINUATION = 3,
}

/**
 * Type of last exit reason.
 *
 * @since 8
 * @sysCap AAFwk
 */
export enum LastExitReason {
    UNKNOWN = 0,
    ABILITY_NOT_RESPONDING = 1,
    NORMAL = 2,
}

