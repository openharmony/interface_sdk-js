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

 /**
  * Control type of  Network hardware  of ExceptionPrompt.
  * @enum { HardwareStatusType }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
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
 /**
  * Control status of  ExceptionPrompt
  * @enum { PromptTypeEnum }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
export declare enum PromptTypeEnum {
   /**
    * DEFAULT_HIDE of PromptTypeEnum.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
    DEFAULT_HIDE = 0,
    /**
     * NETWORK_NOT_CONNECTED of PromptTypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    NETWORK_NOT_CONNECTED = 1,
    /**
     * NETWORK_CONNECTED_UNSTABLE of PromptTypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    NETWORK_CONNECTED_UNSTABLE = 2,
    /**
     * UNSTABLE_CONNECT_SERVER of PromptTypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    UNSTABLE_CONNECT_SERVER = 3,
    /**
     * CUSTOM_NETWORK_TIPS of PromptTypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    CUSTOM_NETWORK_TIPS = 4,
    /**
     * CUSTOM_TIPS of PromptTypeEnum.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    CUSTOM_TIPS = 5
}
 /**
  * PromptOptions of ExceptionPrompt.
  *
  * @interface Options
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
export interface PromptOptions {
    /**
     * HardwareStatus of PromptOptions.
     *
     * @type {HardwareStatusType}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    HardwareStatus: HardwareStatusType;
    /**
     * Icon of PromptOptions.
     *
     * @type {?ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    Icon?: ResourceStr;
    /**
     * TipContent of PromptOptions.
     *
     * @type {?ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    TipContent?: ResourceStr;
    /**
     * ContentText of PromptOptions.
     *
     * @type {?ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ContentText?: ResourceStr;
    /**
     * IsPaddingStatus of PromptOptions.
     *
     * @type {boolean}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    IsPaddingStatus: boolean;
}

@Component
export declare struct ExceptionPrompt {
    /**
     * Type of ExceptionPrompt.
     *
     * @type { PromptTypeEnum }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    Type: PromptTypeEnum;
    /**
     * Options of ExceptionPrompt.
     *
     * @type { PromptOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    @Link
    Options: PromptOptions;
    /**
     * ReconnectionFunction of ExceptionPrompt.
     *
     * @type {?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ReconnectionFunction?: () => void;
    /**
     * ConfigureNetworkFunction of ExceptionPrompt.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ConfigureNetworkFunction?: () => void;
    /**
     * Build function of ExceptionPrompt.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    build(): void;
}
