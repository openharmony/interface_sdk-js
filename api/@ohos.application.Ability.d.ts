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
 * @since 9
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @StageModelOnly
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    lastRequestWant: Want;

    /**
     * Called back when an ability is started for initialization.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onCreate(want: Want, param: LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onWindowStageDestroy(): void;

    /**
     * Called back before an ability is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onBackground(): void;

    /**
     * Called back when an ability prepares to migrate.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return true if ability agrees to migrate and saves data successfully, otherwise false.
     * @StageModelOnly
     */
     onContinue(wantParam : {[key: string]: any}): boolean;
}

export interface LaunchParam {
    /**
     * Indicates launch reason.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    launchReason: LaunchReason;

    /**
     * Indicates last exit reason.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    lastExitReason: LastExitReason;
}

/**
 * Type of launch reason.
 *
 * @since 9
 * @sysCap AAFwk
 * @StageModelOnly
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
 * @since 9
 * @sysCap AAFwk
 * @StageModelOnly
 */
export enum LastExitReason {
    UNKNOWN = 0,
    ABILITY_NOT_RESPONDING = 1,
    NORMAL = 2,
}

