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

import { AsyncCallback } from '../basic';
import { Ability } from '../@ohos.application.Ability'
import { AbilityMonitor } from './abilityMonitor'
import { Context } from '../app/context'
import { ShellCmdResult } from './shellCmdResult'

/**
 * A global test utility interface used for adding AbilityMonitor objects and control lifecycle states of abilities.
 *
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @import import AbilityDelegator from 'application/abilityDelegator.d'
 * @permission N/A
 */
export interface AbilityDelegator {
    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param msg Log information
     */
    print(msg: string, callback: AsyncCallback<void>): void;
    print(msg: string): Promise<void>;

    /**
     * Execute the given command in the aa tools side.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param cmd Shell command
     * @param timeoutSecs Timeout, in seconds
     * @return ShellCmdResult object
     */
    executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;
    executeShellCommand(cmd: string, timeoutSecs: number, callback: AsyncCallback<ShellCmdResult>): void;
    executeShellCommand(cmd: string, timeoutSecs?: number): Promise<ShellCmdResult>;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi Hide this for inner system use.
     * @param msg Log information
     * @param code Result code
     */
    finishTest(msg: string, code: number, callback: AsyncCallback<void>): void;
    finishTest(msg: string, code: number): Promise<void>;
}

export default AbilityDelegator;