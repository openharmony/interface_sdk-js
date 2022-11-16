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

/**
 * This module provides the capability to app receovery.
 * @import appRecovery from '@ohos.app.ability.appRecovery'
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
declare namespace appRecovery {
    /**
     * The type of no restart mode.
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    enum RestartFlag {
        /**
         * NONE: no restart restrictions
         */
        ALWAYS_RESTART = 0,

        /**
         * CPP_CRASH_NO_RESTART: Do not restart if process terminates due to cpp exception
         */
        CPP_CRASH_NO_RESTART = 0x0001,

        /**
         * JS_CRASH_NO_RESTART: Do not restart if process terminates due to js/ts/ets exception
         */
        JS_CRASH_NO_RESTART = 0x0002,

        /**
         * APP_FREEZE_NO_RESTART: Do not restart if process terminates due to appliction not respondong
         */
        APP_FREEZE_NO_RESTART = 0x0004,

        /**
         * NO_RESTART: Do not restart
         */
        NO_RESTART = 0xFFFF,
    }

    /**
     * The type of when to save.
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    enum SaveOccasionFlag {
        /**
         * SAVE_WHEN_ERROR is saving when an error occurs.
         */
        SAVE_WHEN_ERROR = 0x0001,

        /**
         * SAVE_WHEN_CREATE is saving on background.
         */
        SAVE_WHEN_BACKGROUND = 0x0002,
    }

    /**
     * The type of where to save.
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    enum SaveModeFlag {
        /**
         * SAVE_WITH_FILE is saving to file.
         */
        SAVE_WITH_FILE = 0x0001,

        /**
         * SAVE_WITH_SHARED_MEMORY is saving to shared memory.
         */
        SAVE_WITH_SHARED_MEMORY = 0x0002,
    }

    /**
     * Enable appRecovery and app supports save and restore
     * @param restart no restart mode
     * @param saveOccasion The type of When to save
     * @param saveMode The type of where to save
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    function enableAppRecovery(restart?: RestartFlag, saveOccasion?: SaveOccasionFlag, saveMode?: SaveModeFlag) : void;

    /**
     * Restart App when called
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    function restartApp(): void;

    /**
     * Save App state data when called
     * @return true if save data successfully, otherwise false
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    function saveAppState(): boolean;
}

export default appRecovery;