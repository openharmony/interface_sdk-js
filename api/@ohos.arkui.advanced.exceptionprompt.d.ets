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
   * on of HardwareStatusType.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
    on = 1,
    /**
     * off of HardwareStatusType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    off = 0
}
export declare enum TypeEnum {
  /**
   * DEFAULT_HIDE of TypeEnum.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
    DEFAULT_HIDE = 0,
    /**
     * NETWORK_NOT_CONNECTED of TypeEnum.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_NOT_CONNECTED = 1,
    /**
     * NETWORK_CONNECTED_UNSTABLE of TypeEnum.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_CONNECTED_UNSTABLE = 2,
    /**
     * UNSTABLE_CONNECT_SERVER of TypeEnum.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    UNSTABLE_CONNECT_SERVER = 3,
    /**
     * CUSTOM_NETWORK_TIPS of TypeEnum.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    CUSTOM_NETWORK_TIPS = 4,
    /**
     * CUSTOM_TIPS of TypeEnum.
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
     * HardwareStatus of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    Icon?: ResourceStr;
    /**
     * HardwareStatus of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    TipContent?: ResourceStr;
    /**
     * HardwareStatus of optionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ContentText?: ResourceStr;
    /**
     * PaddingStatus of optionType.
     *
     * @type {boolean}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    PaddingStatus: boolean;
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
