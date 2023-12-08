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
   * ON of HardwareStatusType.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  ON = 0,
  /**
   * OFF of HardwareStatusType.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  OFF = 1
}
export declare enum TypeEnum {
  /**
   * DEFAULT_HIDE of TypeEnum.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
    DEFAULT_HIDE = 0,
    /**
     * NETWORK_NOT_CONNECTED of TypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    NETWORK_NOT_CONNECTED = 1,
    /**
     * NETWORK_CONNECTED_UNSTABLE of TypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    NETWORK_CONNECTED_UNSTABLE = 2,
    /**
     * UNSTABLE_CONNECT_SERVER of TypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    UNSTABLE_CONNECT_SERVER = 3,
    /**
     * CUSTOM_NETWORK_TIPS of TypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    CUSTOM_NETWORK_TIPS = 4,
    /**
     * CUSTOM_TIPS of TypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    CUSTOM_TIPS = 5
}
export interface OptionType {
    /**
     * hardwareStatus of OptionType.
     *
     * @type {HardwareStatusType}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    hardwareStatus: HardwareStatusType;
    /**
     * icon of OptionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    icon?: ResourceStr;
    /**
     * tipContent of OptionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    tipContent?: ResourceStr;
    /**
     * contentText of OptionType.
     *
     * @type {ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    contentText?: ResourceStr;
    /**
     * isPaddingStatus of OptionType.
     *
     * @type {boolean}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    isPaddingStatus: boolean;
}

@Component
export declare struct ExceptionPrompt {
    /**
     * type of ExceptionPrompt.
     *
     * @type { TypeEnum }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    type: TypeEnum;
    /**
     * options of ExceptionPrompt.
     *
     * @type { OptionType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    options: OptionType;
    /**
     * reconnectionFunction of ExceptionPrompt.
     *
     * @type { () => void  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    reconnectionFunction?: () => void;
    /**
     * configureNetworkFunction of ExceptionPrompt.
     *
     * @type { () => void  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    configureNetworkFunction?: () => void;
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
