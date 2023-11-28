/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

@Component
export declare struct ExceptionPrompt {
    /**
     * number of ExceptionPrompt.
     *
     * @type number
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    Type: number;
    /**
     * HardwareStatus of ExceptionPrompt.
     *
     * @type boolean
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    HardwareStatus?: boolean;
    /**
     * Icon of ExceptionPrompt.
     *
     * @type string
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    Icon?: string;
    /**
     * TipContent of ExceptionPrompt.
     *
     * @type string
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    TipContent?: string;
    /**
     * ContentText of ExceptionPrompt.
     *
     * @type string
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ContentText?: string;
    /**
     * ShowStatus of ExceptionPrompt.
     *
     * @type boolean
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ThemeColorStatus?: boolean;
    /**
     * ReconnectionFunction of ExceptionPrompt.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ReconnectionFunction: () => void;
    /**
     * ConfigureNetworkFunction of ExceptionPrompt.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ConfigureNetworkFunction: () => void;

    build(): void;
}
