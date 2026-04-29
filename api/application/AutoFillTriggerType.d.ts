/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

/**
 * This module specifies how the autofill service is triggered, based on different user gestures.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export enum AutoFillTriggerType {
    /**
     * Automatically triggers the autofill service when a [TextInput]{@link @internal/component/ets/text_input} 
     * component gains focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUTO_REQUEST = 0,

    /**
     * Manually triggers the autofill service by long-pressing any input component to bring up a secondary menu and 
     * selecting autofill.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MANUAL_REQUEST = 1,

    /**
     * Triggers the autofill service via paste by long-pressing a username or password in the password vault to select 
     * secure copy, long-pressing any input component to bring up a secondary menu, and selecting paste.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PASTE_REQUEST = 2,
}