/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import { LocalStorage } from 'StateManagement';
import Want from './@ohos.app.ability.Want';

/**
 * The class of UI extension ability.
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 10
 */
export default class UIExtensionAbility extends ExtensionAbility {
    /**
     * Called back when an UI extension is started for initialization.
     *
     * @param { Want } want - Indicates the want info of the created UI extension.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    onCreate(want: Want): void;

    /**
     * Called back when an UI extension need load content.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    onLoadContent(path: string, storage: LocalStorage): void;

    /**
     * Called back when the state of an UI extension changes to foreground.
     *
     * @param { Want } want - Indicates the want info of the UI extension.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 10
     */
    onForeground(want: Want): void;

    /**
     * Called back when the state of an UI extension changes to background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 10
     */
    onBackground(): void;

    /**
     * Called back before an UI extension is destroyed.
     *
     * @returns { void | Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    onDestroy(): void | Promise<void>;
}
