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
import { Configuration } from './@ohos.application.Configuration';

/**
 * class of extension.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.ExtensionAbility
 */
export default class ExtensionAbility {
    /**
     * Called when the system configuration is updated.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param newConfig Indicates the updated configuration.
     * @returns -
     * @StageModelOnly
     */
    onConfigurationUpdated(newConfig: Configuration): void;

    /**
     * Called when the system has determined to trim the memory, for example, when the ability is running in the
     * background and there is no enough memory for running as many background processes as possible.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param level Indicates the memory trim level, which shows the current memory usage status.
     * @returns -
     * @StageModelOnly
     */
     onMemoryLevel(level: AbilityConstant.MemoryLevel): void;
}