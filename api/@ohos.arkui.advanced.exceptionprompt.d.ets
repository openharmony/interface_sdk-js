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
export declare enum HardwareStatusType {
  /**
   * The on style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
    on = 1,
    /**
     * The off style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    off = 0
}
export declare enum TypeEnum {
  /**
   * The DEFAULT_HIDE style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
    DEFAULT_HIDE = 0,
    /**
     * The NETWORK_NOT_CONNECTED style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_NOT_CONNECTED = 1,
    /**
     * The NETWORK_CONNECTED_UNSTABLE style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_CONNECTED_UNSTABLE = 2,
    /**
     * The UNSTABLE_CONNECT_SERVER style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    UNSTABLE_CONNECT_SERVER = 3,
    /**
     * The CUSTOM_NETWORK_TIPS style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    CUSTOM_NETWORK_TIPS = 4,
    /**
     * The CUSTOM_TIPS style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    CUSTOM_TIPS = 5
}
export interface OptionType {
    /**
     * HardwareStatus of optionType.
     *
     * @type {HardwareStatusType}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    HardwareStatus: HardwareStatusType;
    /**
     * Icon of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    Icon?: ResourceStr;
    /**
     * TipContent of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    TipContent?: ResourceStr;
    /**
     * ContentText of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ContentText?: ResourceStr;
}

@Component
export declare struct ExceptionPrompt {
    /**
     * Type of ExceptionPrompt.
     *
     * @type { TypeEnum }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    Type: TypeEnum;
    /**
     * Options of ExceptionPrompt.
     *
     * @type { optionType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    Options: optionType;
    /**
     * ReconnectionFunction of ExceptionPrompt.
     *
     * @type { () => void  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ReconnectionFunction?: () => void;
    /**
     * ConfigureNetworkFunction of ExceptionPrompt.
     *
     * @type { () => void  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ConfigureNetworkFunction?: () => void;
    /**
     * Build function of ExceptionPrompt.
     * Build function of GridObjectEditSort.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    build(): void;
}
