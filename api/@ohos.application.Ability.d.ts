/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import AbilityConstant from "./@ohos.application.AbilityConstant";
import AbilityContext from "./application/AbilityContext";
import Want from './@ohos.application.Want';
import window from './@ohos.window';
import { Configuration } from './@ohos.application.Configuration';

/**
 * The class of an ability.
 *
 * @since 9
 * @sysCap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    lastRequestWant: Want;

    /**
     * Called back when an ability is started for initialization.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onCreate(want: Want, param: AbilityConstant.LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onWindowStageDestroy(): void;

    /**
     * Called back before an ability is destroyed.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onBackground(): void;

    /**
     * Called back when an ability prepares to migrate.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return true if ability agrees to migrate and saves data successfully, otherwise false.
     * @StageModelOnly
     */
     onContinue(wantParam : {[key: string]: any}): boolean;

    /**
     * Called when the launch mode of an ability is set to singleton.
     * This happens when you re-launch an ability that has been at the top of the ability stack.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onNewWant(want: Want): void;

     /**
      * Called when the system configuration is updated.
      *
      * @devices phone, tablet, tv, wearable, car
      * @since 9
      * @sysCap AAFwk
      * @return -
      * @StageModelOnly
      */
    onConfigurationUpdated(config: Configuration): void;
}
