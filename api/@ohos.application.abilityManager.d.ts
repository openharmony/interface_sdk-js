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

import { AsyncCallback } from './basic';
import Configuration from './@ohos.application.Configuration';

/**
 * The class of an ability manager.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
declare namespace abilityManager {
    /**
     * Updates the configuration by modifying the configuration.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @SysCap AAFwk
     * @param config Indicates the new configuration.
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void;
    function updateConfiguration(config: Configuration): Promise<void>;
}