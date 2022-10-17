/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AbilityDelegator as _AbilityDelegator } from './application/abilityDelegator';
import { AbilityDelegatorArgs as _AbilityDelegatorArgs } from './application/abilityDelegatorArgs';
import { AbilityMonitor as _AbilityMonitor } from './application/abilityMonitor';
import { ShellCmdResult as _ShellCmdResult } from './application/shellCmdResult';

/**
 * A global register used to store the AbilityDelegator and AbilityDelegatorArgs objects registered
 * during application startup.
 *
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @import import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry'
 * @permission N/A
 * @deprecated since 9
 * @useinstead ohos.app.ability.abilityDelegatorRegistry
 */
declare namespace abilityDelegatorRegistry {
    /**
     * Get the AbilityDelegator object of the application.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return the AbilityDelegator object initialized when the application is started.
     */
    function getAbilityDelegator(): AbilityDelegator;

    /**
     * Get unit test parameters stored in the AbilityDelegatorArgs object.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return the previously registered AbilityDelegatorArgs object.
     */
    function getArguments(): AbilityDelegatorArgs;

    /**
     * Describes all lifecycle states of an ability.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    export enum AbilityLifecycleState {
        UNINITIALIZED,
        CREATE,
        FOREGROUND,
        BACKGROUND,
        DESTROY,
    }

    /**
     * A global test utility interface used for adding AbilityMonitor objects and control lifecycle states of abilities.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @import import AbilityDelegator from 'application/abilityDelegator.d'
     */
    export type AbilityDelegator = _AbilityDelegator

    /**
     * Store unit testing-related parameters, including test case names, and test runner name.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @import import AbilityDelegatorArgs from 'application/abilityDelegatorArgs.d'
     */
    export type AbilityDelegatorArgs = _AbilityDelegatorArgs

    /**
     * Provide methods for matching monitored Ability objects that meet specified conditions.
     * The most recently matched Ability objects will be saved in the AbilityMonitor object.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @import import AbilityMonitor from 'application/abilityMonitor.d'
     */
    export type AbilityMonitor = _AbilityMonitor

    /**
     * A object that records the result of shell command executes.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @import import ShellCmdResult from 'application/shellCmdResult.d'
     */
    export type ShellCmdResult = _ShellCmdResult
}

export default abilityDelegatorRegistry;