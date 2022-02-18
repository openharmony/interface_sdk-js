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

import AbilityStageContext from "./application/AbilityStageContext";
import Want from './@ohos.application.Want';

/**
 * The class of an ability stage.
 *
 * @since 9
 * @sysCap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
export default class AbilityStage {
    /**
     * Indicates configuration information about context.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    context: AbilityStageContext;

    /**
     * Called back when an ability stage is started for initialization.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    onCreate(): void;

    /**
     * Called back when start specified ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onAcceptWant(want: Want): string;
}