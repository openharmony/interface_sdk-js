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

import { Configuration } from './@ohos.application.Configuration';

/**
 * The environment callback.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @deprecated since 9
 * @useinstead ohos.app.ability.EnvironmentCallback
 */
export default class EnvironmentCallback {
    /**
     * Called when the system configuration is updated.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param config: Indicates the updated configuration.
     * @StageModelOnly
     */
     onConfigurationUpdated(config: Configuration): void;
}
