/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import Ability from "./@ohos.application.Ability";
import dataAbility from "./@ohos.data.dataAbility";
import window from './@ohos.window';

/**
 * The ability lifecycle callback.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @deprecated since 9
 * @useinstead ohos.app.ability.AbilityLifecycleCallback
 */
export default class AbilityLifecycleCallback {
    /**
     * Called back when an ability is started for initialization.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @StageModelOnly
     */
    onAbilityCreate(ability: Ability): void;

    /**
     * Called back when a window stage is created.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @param windowStage window stage to create
     * @StageModelOnly
     */
    onWindowStageCreate(ability: Ability, windowStage: window.WindowStage): void;
 
    /**
     * Called back when a window stage is actived.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @param windowStage window stage to active
     * @StageModelOnly
     */
    onWindowStageActive(ability: Ability, windowStage: window.WindowStage): void;

    /**
     * Called back when a window stage is inactived.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @param windowStage window stage to inactive
     * @StageModelOnly
     */
    onWindowStageInactive(ability: Ability, windowStage: window.WindowStage): void;

    /**
     * Called back when a window stage is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @param windowStage window stage to destroy
     * @StageModelOnly
     */
    onWindowStageDestroy(ability: Ability, windowStage: window.WindowStage): void;
 
    /**
     * Called back when an ability is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @StageModelOnly
     */
    onAbilityDestroy(ability: Ability): void;
 
    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @StageModelOnly
     */
    onAbilityForeground(ability: Ability): void;
 
    /**
     * Called back when the state of an ability changes to background.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @StageModelOnly
     */
    onAbilityBackground(ability: Ability): void;
 
    /**
     * Called back when an ability prepares to continue.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param ability: Indicates the ability to register for listening.
     * @StageModelOnly
     */
    onAbilityContinue(ability: Ability): void;
}