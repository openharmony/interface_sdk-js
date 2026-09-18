/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic&static
 */
export enum AutoFillTriggerType {
    /**
     * Automatically triggers the auto-fill service. It can be automatically triggered after a
     * [TextInput]{@link @internal/component/ets/text_input} component gains focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    AUTO_REQUEST = 0,

    /**
     * Manually triggers the auto-fill service. It can be triggered by long-pressing any input component to bring up a
     * secondary menu, selecting auto-fill, and triggering the auto-fill service.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    MANUAL_REQUEST = 1,

    /**
     * Triggers the auto-fill service via paste. It is only triggered after the user has already long-pressed a
     * username or password in the password vault to select secure copy, and then long-presses any input component to
     * bring up a secondary menu and selects paste.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    PASTE_REQUEST = 2,
}