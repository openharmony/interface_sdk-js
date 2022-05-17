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

import { AsyncCallback } from "../basic";
import Context from "./Context";
import AbilityLifecycleCallback from "../@ohos.application.AbilityLifecycleCallback";

/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
export default class ApplicationContext extends Context {
    /**
     * Register ability lifecycle callback.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param callback The ability lifecycle callback.
     * @return Returns the number code of the callback.
     * @StageModelOnly
     */
    registerAbilityLifecycleCallback(callback: AbilityLifecycleCallback): number;

    /**
     * Unregister ability lifecycle callback.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param callbackId Indicates the number code of the callback.
     * @return -
     * @StageModelOnly
     */
    unregisterAbilityLifecycleCallback(callbackId: number,  callback: AsyncCallback<void>): void;
    unregisterAbilityLifecycleCallback(callbackId: number): Promise<void>;
}
