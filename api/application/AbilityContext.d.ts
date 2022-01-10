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

import { AbilityInfo } from "../bundle/abilityInfo";
import { AbilityResult } from "../ability/abilityResult";
import { AsyncCallback } from "../basic";
import { ConnectOptions } from "../ability/connectOptions";
import { HapModuleInfo } from "../bundle/hapModuleInfo";
import Context from "./Context";
import Want from "../@ohos.application.Want";
import StartOptions from "../@ohos.application.StartOptions";

/**
 * The context of an ability. It allows access to ability-specific resources.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export default class AbilityContext extends Context {
    /**
     * Indicates configuration information about an ability.
     *
     * @since 8
     * @sysCap AAFwk
     */
    abilityInfo: AbilityInfo;

    /**
     * Indicates configuration information about an module.
     *
     * @since 8
     * @sysCap AAFwk
     */
    currentHapModuleInfo: HapModuleInfo;

    /**
     * Starts a new ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param parameter Indicates the ability to start.
     * @return -
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options?: StartOptions): Promise<void>;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param parameter Indicates the ability to start.
     * @return Returns the {@link AbilityResult}.
     */
    startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;
    startAbilityForResult(want: Want): Promise<AbilityResult>;

    /**
     * Destroys this Page ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return -
     */
    terminateSelf(callback: AsyncCallback<void>): void;
    terminateSelf(): Promise<void>;

    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param parameter Indicates the result to return.
     * @return -
     */
    terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;
    terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

    /**
     * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param want The element name of the service ability
     * @param options The remote object instance
     * @hide hide for inner use.
     * @return Returns the number code of the ability connected
     */
    connectAbility(want: Want, options: ConnectOptions): number;

    /**
     * The callback interface was connect successfully.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param connection The number code of the ability connected
     * @hide hide for inner use.
     */
    disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
    disconnectAbility(connection: number): Promise<void>;
}