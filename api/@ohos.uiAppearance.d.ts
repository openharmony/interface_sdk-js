/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';

/**
 * Provide APIs to set system uiAppearance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @import import uiAppearance from '@ohos.uiAppearance';
 * @since 9
 */
declare namespace uiAppearance {
    /**
     * Enumerates dark-mode.
     */
    enum DarkMode {
        /**
         * Always display with dark mode.
         */
        ALWAYS_DARK = 0,

        /**
         * Always display with light mode.
         */
        ALWAYS_LIGHT = 1
    }

    /**
     * Set the system dark-mode.
     * @param mode Indicates the dark-mode to set
     * @permission ohos.permission.UPDATE_CONFIGRATION
     * @systemapi Hide this for inner system use
     */
    function setDarkMode(mode: DarkMode, callback: AsyncCallback<void>): void;
    function setDarkMode(mode: DarkMode): Promise<void>;

    /**
     * Acquire the current dark-mode.
     * @return current dark-mode.
     * @permission ohos.permission.UPDATE_CONFIGRATION
     * @systemapi Hide this for inner system use
     */
    function getDarkMode(): DarkMode;
}
export default uiAppearance;