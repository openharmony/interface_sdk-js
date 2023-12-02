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
export interface optionType {
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

export interface ErrorTipsInfoType {
  /**
   * NETWORK_NOT_CONNECTED of ErrorTipsInfoType.
   *
   * @type {ErrorTipsInfoType}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  NETWORK_NOT_CONNECTED: string;
  /**
   * NETWORK_CONNECTED_UNSTABLE of ErrorTipsInfoType.
   *
   * @type {NETWORK_CONNECTED_UNSTABLE}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  NETWORK_CONNECTED_UNSTABLE: string;
  /**
   * UNSTABLE_CONNECT_SERVER of ErrorTipsInfoType.
   *
   * @type {UNSTABLE_CONNECT_SERVER}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  UNSTABLE_CONNECT_SERVER: string;
  /**
   * CUSTOM_NETWORK_TIPS of ErrorTipsInfoType.
   *
   * @type {CUSTOM_NETWORK_TIPS}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  CUSTOM_NETWORK_TIPS: string;
  /**
   * CUSTOM_TIPS of ErrorTipsInfoType.
   *
   * @type {CUSTOM_TIPS}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  CUSTOM_TIPS: string;
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
