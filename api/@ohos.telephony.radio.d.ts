/*
 * Copyright (C) 2021-2024 Huawei Device Co., Ltd.
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
 * @file Network Search
 * @kit TelephonyKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **radio** module provides basic network search management functions. Using the APIs provided by this module, you
 * can obtain the radio access technology (RAT) used in the CS and PS domains, network status, current network selection
 * mode, ISO country code of the registered network, ID of the slot in which the primary card is located, list of signal
 * strengths of the registered network for the SIM card in the specified slot, and carrier name. Besides, you can check
 * whether the current device supports New Radio \(NR\) and whether the radio service is enabled on the primary SIM
 * card. The CS domain refers to the Circuit Switched domain, and the PS domain refers to the Packet Switched domain.
 *
 * @syscap SystemCapability.Telephony.CoreService
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace radio {
  /**
   * Obtains the RAT used in the CS and PS domains for the SIM card in the specified slot. This API uses an asynchronous
   * callback to return the result. The CS domain refers to the Circuit Switched domain, and the PS domain refers to the
   * Packet Switched domain.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<{psRadioTech: RadioTechnology, csRadioTech: RadioTechnology}> } callback - Callback used to
   *     return the result.  The CS domain refers to the Circuit Switched domain, and the PS domain refers to the Packet
   *     Switched domain. [since 6 - 10]
   * @param { AsyncCallback<NetworkRadioTech> } callback - Callback used to return the result.  The CS domain refers to
   *     the Circuit Switched domain, and the PS domain refers to the Packet Switched domain. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getRadioTech(slotId: int, callback: AsyncCallback<NetworkRadioTech>): void;

  /**
   * Obtains the RAT used in the CS and PS domains for the SIM card in the specified slot. This API uses a promise to
   * return the result. The CS domain refers to the Circuit Switched domain, and the PS domain refers to the Packet
   * Switched domain.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<{psRadioTech: RadioTechnology, csRadioTech: RadioTechnology}> } Promise used to return the
   *     result. The CS domain refers to the Circuit Switched domain, and the PS domain refers to the Packet Switched
   *     domain. [since 6 - 10]
   * @returns { Promise<NetworkRadioTech> } Returns the RAT of PS domain and CS domain of registered network.
   *     The values of RAT are as follows:
   *     <ul>
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_GSM}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}
   *     <li>{@code RadioTechnology#RADIO_TECHNOLOGY_NR}
   *     </ul> [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getRadioTech(slotId: int): Promise<NetworkRadioTech>;

  /**
   * Obtains the RAT used in the CS and PS domains for the SIM card in the specified slot. The CS domain refers to the
   * Circuit Switched domain, and the PS domain refers to the Packet Switched domain.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { NetworkRadioTech } RAT used in the CS and PS domains. The CS domain refers to the Circuit Switched
   *     domain, and the PS domain refers to the Packet Switched domain.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 18 dynamic
   * @since 23 static
   */
  function getRadioTechSync(slotId: int): NetworkRadioTech;

  /**
   * Obtains the network status of the SIM card in the specified slot. This API uses an asynchronous callback to return
   * the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<NetworkState> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkState(slotId: int, callback: AsyncCallback<NetworkState>): void;

  /**
   * Obtains the network status of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   *     <br> If no card slot is specified, card slot 1 is used by default.
   * @returns { Promise<NetworkState> } Promise used to return the network status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkState(slotId?: int): Promise<NetworkState>;

  /**
   * Obtains the network status. This API uses an asynchronous callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<NetworkState> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkState(callback: AsyncCallback<NetworkState>): void;

  /**
   * Actively requests to update location information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of sendUpdateCellLocationRequest.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendUpdateCellLocationRequest(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Actively requests to update location information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<void> } The promise returned by the sendUpdateCellLocationRequest.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendUpdateCellLocationRequest(slotId?: int): Promise<void>;

  /**
   * Actively requests to update location information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<void> } callback - The callback of sendUpdateCellLocationRequest.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendUpdateCellLocationRequest(callback: AsyncCallback<void>): void;

  /**
   * Get the current cell information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<Array<CellInformation>> } callback - Indicates the callback for getting cell information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCellInformation(slotId: int, callback: AsyncCallback<Array<CellInformation>>): void;

  /**
   * Get the current cell information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<Array<CellInformation>> } Returns the current cell information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCellInformation(slotId?: int): Promise<Array<CellInformation>>;

  /**
   * Get the current cell information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<Array<CellInformation>> } callback - Indicates the callback for getting cell information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCellInformation(callback: AsyncCallback<Array<CellInformation>>): void;

  /**
   * Obtains the network selection mode of the SIM card in the specified slot. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<NetworkSelectionMode> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkSelectionMode(slotId: int, callback: AsyncCallback<NetworkSelectionMode>): void;

  /**
   * Obtains the network selection mode of the SIM card in the specified slot. This API uses a promise to return the
   * result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<NetworkSelectionMode> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkSelectionMode(slotId: int): Promise<NetworkSelectionMode>;

  /**
   * Set the current network selection mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { NetworkSelectionModeOptions } options Indicates the network selection mode option.
   * @param { AsyncCallback<void> } callback - The callback of setNetworkSelectionMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function setNetworkSelectionMode(options: NetworkSelectionModeOptions, callback: AsyncCallback<void>): void;

  /**
   * Set the current network selection mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { NetworkSelectionModeOptions } options Indicates the network selection mode option.
   * @returns { Promise<void> } The promise returned by the setNetworkSelectionMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function setNetworkSelectionMode(options: NetworkSelectionModeOptions): Promise<void>;

  /**
   * Get network search information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<NetworkSearchResult> } callback - Indicates the callback for getting
   * the search results of the network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkSearchInformation(slotId: int, callback: AsyncCallback<NetworkSearchResult>): void;

  /**
   * Get network search information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<NetworkSearchResult> } Returns the search results of the network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function getNetworkSearchInformation(slotId: int): Promise<NetworkSearchResult>;

  /**
   * Obtains the ISO country code of the network with which the SIM card in the specified slot is registered. This API
   * uses an asynchronous callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result. which is a country code, for
   *     example, **CN** (China). If the device is not registered with any network, an empty string is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForNetwork(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the ISO country code of the network with which the SIM card in the specified slot is registered. This API
   * uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result, which is an ISO country code, for example, **CN** (
   *     China). If the device is not registered with any network, an empty string is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForNetwork(slotId: int): Promise<string>;

  /**
   * Obtains the ISO country code of the network with which the SIM card in the specified slot is registered.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } ISO country code of the network, for example, **CN** (China). If the device is not registered
   *     with any network, an empty string is returned.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForNetworkSync(slotId: int): string;

  /**
   * Get the option mode of NR.
   *
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<NrOptionMode> } callback - Indicates the callback for getting the selection mode of NR.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead telephony.radio#getNROptionMode
   */
  function getNrOptionMode(slotId: int, callback: AsyncCallback<NrOptionMode>): void;

  /**
   * Get the option mode of NR.
   *
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<NrOptionMode> } Returns the selection mode of NR.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead telephony.radio#getNROptionMode
   */
  function getNrOptionMode(slotId?: int): Promise<NrOptionMode>;

  /**
   * Get the option mode of NR.
   *
   * @param { AsyncCallback<NrOptionMode> } callback - Indicates the callback for getting the selection mode of NR.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead telephony.radio#getNROptionMode
   */
  function getNrOptionMode(callback: AsyncCallback<NrOptionMode>): void;

  /**
   * Obtains the IMEI of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the IMEI.
   * Returns an empty string if the IMEI does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getIMEI(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the IMEI of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<string> } Returns the IMEI. Returns an empty string if the IMEI does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getIMEI(slotId?: int): Promise<string>;

  /**
   * Obtains the IMEI of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the IMEI.
   * Returns an empty string if the IMEI does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getIMEI(callback: AsyncCallback<string>): void;

  /**
   * Obtains the MEID of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the MEID.
   * Returns an empty string if the MEID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getMEID(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the MEID of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<string> } Returns the MEID. Returns an empty string if the MEID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getMEID(slotId?: int): Promise<string>;

  /**
   * Obtains the MEID of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the MEID.
   * Returns an empty string if the MEID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getMEID(callback: AsyncCallback<string>): void;

  /**
   * Obtains the unique device ID of a specified card slot of the device.
   *
   * If the device is registered with a 3GPP-compliant network, the international mobile equipment identity
   * (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier
   * (MEID) is returned.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the unique device ID.
   * Returns an empty string if the unique device ID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getUniqueDeviceId(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the unique device ID of a specified card slot of the device.
   *
   * If the device is registered with a 3GPP-compliant network, the international mobile equipment identity
   * (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier
   * (MEID) is returned.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<string> } Returns the unique device ID.
   * Returns an empty string if the unique device ID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getUniqueDeviceId(slotId?: int): Promise<string>;

  /**
   * Obtains the unique device ID of a specified card slot of the device.
   *
   * If the device is registered with a 3GPP-compliant network, the international mobile equipment identity
   * (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier
   * (MEID) is returned.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the unique device ID.
   * Returns an empty string if the unique device ID does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getUniqueDeviceId(callback: AsyncCallback<string>): void;

  /**
   * Obtains the ID of the slot in which the primary card is located. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getPrimarySlotId(callback: AsyncCallback<int>): void;

  /**
   * Obtains the ID of the slot in which the primary card is located. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getPrimarySlotId(): Promise<int>;

  /**
   * Set the index number of the main SIM card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of setPrimarySlotId.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setPrimarySlotId(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Set the index number of the main SIM card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<void> } The promise returned by the setPrimarySlotId.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setPrimarySlotId(slotId: int): Promise<void>;

  /**
   * Obtains a list of signal strengths of the network with which the SIM card in the specified slot is registered. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<Array<SignalInformation>> } callback - Callback used to return the result, which is an array
   *     of child class objects derived from [SignalInformation]{@link radio.SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getSignalInformation(slotId: int, callback: AsyncCallback<Array<SignalInformation>>): void;

  /**
   * Obtains a list of signal strengths of the network with which the SIM card in the specified slot is registered. This
   * API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<Array<SignalInformation>> } Promise used to return the result, which is a list of child class
   *     objects derived from [SignalInformation]{@link radio.SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getSignalInformation(slotId: int): Promise<Array<SignalInformation>>;

  /**
   * Obtains a list of signal strengths of the network with which the SIM card in the specified slot is registered.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Array<SignalInformation> } Array of child class objects derived from
   *     [SignalInformation]{@link radio.SignalInformation}.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSignalInformationSync(slotId: int): Array<SignalInformation>;

  /**
   * Checks whether the current device supports NR.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
   * > [isNRSupported]{@link radio.isNrSupported}.
   *
   * @returns { boolean } - **true**: supported
   *     <br>- **false**: not supported
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.radio#isNRSupported
   */
  function isNrSupported(): boolean;

  /**
   * Checks whether the SIM card in the specified slot supports NR.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [isNRSupported]{@link radio.isNrSupported}.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { boolean } - **true**: supported
   *     <br>- **false**: not supported
   * @syscap SystemCapability.Telephony.CoreService
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.radio#isNRSupported
   */
  function isNrSupported(slotId: int): boolean;

  /**
   * Checks whether the current device supports NR.
   *
   * @returns { boolean } - **true**: supported
   *     <br>- **false**: not supported
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function isNRSupported(): boolean;

  /**
   * Checks whether the SIM card in the specified slot supports NR.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { boolean } - **true**: supported
   *     <br>- **false**: not supported
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function isNRSupported(slotId: int): boolean;

  /**
   * Checks whether the radio service is enabled on the SIM card in the specified slot. This API uses an asynchronous
   * callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   *     <br>- **true**: The radio service is enabled.
   *     <br>- **false**: The radio service is disabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function isRadioOn(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the radio service is enabled on the SIM card in the specified slot. This API uses a promise to
   * return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   *     <br>If the slot ID is not specified, this API is defaulted to check whether the radio service is enabled on the
   *     primary SIM card.
   * @returns { Promise<boolean> } Promise used to return the result.
   *     <br>- **true**: The radio service is enabled.
   *     <br>- **false**: The radio service is disabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function isRadioOn(slotId?: int): Promise<boolean>;

  /**
   * Checks whether the radio service is enabled on the primary SIM card. This API uses an asynchronous callback to
   * return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   *     <br>- **true**: The radio service is enabled.
   *     <br>- **false**: The radio service is disabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function isRadioOn(callback: AsyncCallback<boolean>): void;

  /**
   * Turn on the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of turnOnRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOnRadio(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Turn on the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the turnOnRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOnRadio(slotId?: int): Promise<void>;

  /**
   * Turn on the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of turnOnRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOnRadio(callback: AsyncCallback<void>): void;

  /**
   * Turn off the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of turnOffRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOffRadio(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Turn off the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the turnOffRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOffRadio(slotId?: int): Promise<void>;

  /**
   * Turn off the radio service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of turnOffRadio.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function turnOffRadio(callback: AsyncCallback<void>): void;

  /**
   * Obtains the carrier name of the SIM card in the specified slot. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the carrier name, for example, China Mobile.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getOperatorName(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the carrier name of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result, for example, China Mobile.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getOperatorName(slotId: int): Promise<string>;

  /**
   * Obtains the carrier name of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } Carrier name, for example, China Mobile.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getOperatorNameSync(slotId: int): string;

  /**
   * Set the preferred network for the specified SIM card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { PreferredNetworkMode } networkMode - Indicates that you want to set the preferred network mode.
   * @param { AsyncCallback<void> } callback - The callback of setPreferredNetwork.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setPreferredNetwork(slotId: int, networkMode: PreferredNetworkMode, callback: AsyncCallback<void>): void;

  /**
   * Set the preferred network for the specified SIM card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { PreferredNetworkMode } networkMode - Indicates that you want to set the preferred network mode.
   * @returns { Promise<void> } The promise returned by the setPreferredNetwork.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setPreferredNetwork(slotId: int, networkMode: PreferredNetworkMode): Promise<void>;

  /**
   * Get the preferred network for the specified SIM card slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<PreferredNetworkMode> } callback - Indicates the callback for getting
   * the preferred network mode to obtain.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getPreferredNetwork(slotId: int, callback: AsyncCallback<PreferredNetworkMode>): void;

  /**
   * Get the preferred network for the specified SIM card slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<PreferredNetworkMode> } Returns the callback for getting the preferred network mode to obtain.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getPreferredNetwork(slotId: int): Promise<PreferredNetworkMode>;

  /**
   * Get the IMS registration state info of specified IMS service type.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @param { AsyncCallback<ImsRegInfo> } callback - Indicates an instance of the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getImsRegInfo(slotId: int, imsType: ImsServiceType, callback: AsyncCallback<ImsRegInfo>): void;

  /**
   * Get the IMS registration state info of specified IMS service type.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @returns { Promise<ImsRegInfo> } Returns an instance of the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getImsRegInfo(slotId: int, imsType: ImsServiceType): Promise<ImsRegInfo>;

  /**
   * Called when the IMS registration state of specified IMS service type corresponding to
   * a monitored {@code slotId} updates.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { 'imsRegStateChange' } type - Event type. Indicates the imsRegStateChange event to be subscribed to.
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @param { Callback<ImsRegInfo> } callback - Indicates the callback for getting an instance of
   * the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'imsRegStateChange', slotId: int, imsType: ImsServiceType, callback: Callback<ImsRegInfo>): void;

  /**
   * Unsubscribe from imsRegStateChange event.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { 'imsRegStateChange' } type - Event type. Indicates the imsRegStateChange event to unsubscribe from.
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @param { Callback<ImsRegInfo> } callback - Indicates the callback for getting
   * an instance of the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'imsRegStateChange', slotId: int, imsType: ImsServiceType, callback?: Callback<ImsRegInfo>): void;

  /**
   * Called when the IMS registration state of specified IMS service type corresponding to
   * a monitored {@code slotId} updates.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @param { Callback<ImsRegInfo> } callback - Indicates the callback for getting an instance of
   *     the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi
   * @since 23 static
   */
  function onImsRegStateChange(slotId: int, imsType: ImsServiceType, callback: Callback<ImsRegInfo>): void;

  /**
   * Unsubscribe from imsRegStateChange event.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ImsServiceType } imsType - Indicates the ims service type of the {@link ImsServiceType}.
   * @param { Callback<ImsRegInfo> } [callback] - Indicates the callback for getting
   *     an instance of the {@link ImsRegInfo} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi
   * @since 23 static
   */
  function offImsRegStateChange(slotId: int, imsType: ImsServiceType, callback?: Callback<ImsRegInfo>): void;

  /**
   * Get the version of Baseband.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot index number
   * supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the baseband version.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getBasebandVersion(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Get the version of Baseband.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot index number
   * supported by the device.
   * @returns { Promise<string> } Returns the baseband version.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getBasebandVersion(slotId: int): Promise<string>;

  /**
   * Set the NR option mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot index
   * number supported by the device.
   * @param { NROptionMode } mode - Indicates the nr option mode to be set.
   * @param { AsyncCallback<void> } callback - Indicates the callback for getting the option result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setNROptionMode(slotId: int, mode: NROptionMode, callback: AsyncCallback<void>): void;

  /**
   * Set the NR option mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot index
   * number supported by the device.
   * @param { NROptionMode } mode - Indicates the nr option mode to be set.
   * @returns { Promise<void> } Returns option result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setNROptionMode(slotId: int, mode: NROptionMode): Promise<void>;

  /**
   * Get the option mode of NR.
   *
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @param { AsyncCallback<NROptionMode> } callback - Indicates the callback for getting the selection mode of NR.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getNROptionMode(slotId: int, callback: AsyncCallback<NROptionMode>): void;

  /**
   * Get the option mode of NR.
   *
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<NROptionMode> } Returns the selection mode of NR.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getNROptionMode(slotId: int): Promise<NROptionMode>;

  /**
   * Set the type and state for the specified network capability.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { NetworkCapabilityType } type - Indicates the service type of the {@link NetworkCapabilityType}.
   * @param { NetworkCapabilityState } state - Indicates the service ability state of the {@link NetworkCapabilityState}
   *     .
   * @param { AsyncCallback<void> } callback - The callback of setNetworkCapability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setNetworkCapability(slotId: int, type: NetworkCapabilityType, state: NetworkCapabilityState,
    callback: AsyncCallback<void>): void;

  /**
   * Set the type and state for the specified network capability.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { NetworkCapabilityType } type - Indicates the service type of the {@link NetworkCapabilityType}.
   * @param { NetworkCapabilityState } state - Indicates the service ability state of the {@link NetworkCapabilityState}
   *     .
   * @returns { Promise<void> } The promise returned by the setNetworkCapability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setNetworkCapability(slotId: int, type: NetworkCapabilityType, state: NetworkCapabilityState): Promise<void>;

  /**
   * Get the network capability state according to the specified capability type.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { NetworkCapabilityType } type - Indicates the service type of the {@link NetworkCapabilityType}.
   * @param { AsyncCallback<NetworkCapabilityState> } callback - Indicates the callback for getting
   * the network capability state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getNetworkCapability(slotId: int, type: NetworkCapabilityType,
    callback: AsyncCallback<NetworkCapabilityState>): void;

  /**
   * Get the network capability state according to the specified capability type.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { NetworkCapabilityType } type - Indicates the service type of the {@link NetworkCapabilityType}.
   * @returns { Promise<NetworkCapabilityState> } Returns the callback for getting the network capability state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getNetworkCapability(slotId: int, type: NetworkCapabilityType): Promise<NetworkCapabilityState>;

  /**
   * Reset all network settings of telephony.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot
   * index number supported by the device.
   * @returns { Promise<void> } The promise returned by the factoryReset.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(slotId: int): Promise<void>;

  /**
   * Obtains the software version number of a specified card slot of the device.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number, ranging from 0 to the maximum card slot index number
   * supported by the device.
   * @returns { string } Returns the IMEISV. Returns an empty string if the IMEISV does not exist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getIMEISV(slotId: int): string;

  /**
   * Indicates the preferred network.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum PreferredNetworkMode {
    /**
     * Preferred GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_GSM = 1,

    /**
     * Preferred WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_WCDMA = 2,

    /**
     * Preferred LTE mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE = 3,

    /**
     * Preferred LTE/WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_WCDMA = 4,

    /**
     * Preferred LTE/WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_WCDMA_GSM = 5,

    /**
     * Preferred WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_WCDMA_GSM = 6,

    /**
     * Preferred CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_CDMA = 7,

    /**
     * Preferred EVDO network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_EVDO = 8,

    /**
     * Preferred EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_EVDO_CDMA = 9,

    /**
     * Preferred WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_WCDMA_GSM_EVDO_CDMA = 10,

    /**
     * Preferred LTE/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_EVDO_CDMA = 11,

    /**
     * Preferred LTE/WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_WCDMA_GSM_EVDO_CDMA = 12,

    /**
     * Preferred TDSCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_TDSCDMA = 13,

    /**
     * Preferred TDSCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_TDSCDMA_GSM = 14,

    /**
     * Preferred TDSCDMA/WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_TDSCDMA_WCDMA = 15,

    /**
     * Preferred TDSCDMA/WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_TDSCDMA_WCDMA_GSM = 16,

    /**
     * Preferred LTE/TDSCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_TDSCDMA = 17,

    /**
     * Preferred LTE/TDSCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_TDSCDMA_GSM = 18,

    /**
     * Preferred LTE/TDSCDMA/WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_TDSCDMA_WCDMA = 19,

    /**
     * Preferred LTE/TDSCDMA/WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_TDSCDMA_WCDMA_GSM = 20,

    /**
     * Preferred TDSCDMA/WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_TDSCDMA_WCDMA_GSM_EVDO_CDMA = 21,

    /**
     * Preferred LTE/TDSCDMA/WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_LTE_TDSCDMA_WCDMA_GSM_EVDO_CDMA = 22,

    /**
     * Preferred NR network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR = 31,

    /**
     * Preferred NR/LTE network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE = 32,

    /**
     * Preferred NR/LTE/WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_WCDMA = 33,

    /**
     * Preferred NR/LTE/WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_WCDMA_GSM = 34,

    /**
     * Preferred NR/LTE/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_EVDO_CDMA = 35,

    /**
     * Preferred NR/LTE/WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_WCDMA_GSM_EVDO_CDMA = 36,

    /**
     * Preferred NR/LTE/TDSCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_TDSCDMA = 37,

    /**
     * Preferred NR/LTE/TDSCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_TDSCDMA_GSM = 38,

    /**
     * Preferred NR/LTE/TDSCDMA/WCDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_TDSCDMA_WCDMA = 39,

    /**
     * Preferred NR/LTE/TDSCDMA/WCDMA/GSM network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_TDSCDMA_WCDMA_GSM = 40,

    /**
     * Preferred NR/LTE/TDSCDMA/WCDMA/GSM/EVDO/CDMA network mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_NR_LTE_TDSCDMA_WCDMA_GSM_EVDO_CDMA = 41,

    /**
     * Preferred network mode Maximum.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PREFERRED_NETWORK_MODE_MAX_VALUE = 99
  }

  /**
   * Defines the radio access technology for the packet switched (PS) or circuit switched (CS) network.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetworkRadioTech {
    /**
     * PS.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 11 dynamic
     * @since 23 static
     */
    psRadioTech: RadioTechnology;

    /**
     * CS.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 11 dynamic
     * @since 23 static
     */
    csRadioTech: RadioTechnology;
  }

  /**
   * Enumerates radio access technologies.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum RadioTechnology {
    /**
     * Unknown RAT
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_UNKNOWN = 0,

    /**
     * Global System for Mobile Communication (GSM)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_GSM = 1,

    /**
     * Single-Carrier Radio Transmission Technology (1XRTT)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_1XRTT = 2,

    /**
     * Wideband Code Division Multiple Access (WCDMA)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_WCDMA = 3,

    /**
     * High Speed Packet Access (HSPA)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_HSPA = 4,

    /**
     * Evolved High Speed Packet Access (HSPA+)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_HSPAP = 5,

    /**
     * TD-SCDMA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_TD_SCDMA = 6,

    /**
     * Evolution-Data Optimized (EVDO)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_EVDO = 7,

    /**
     * Evolved High Rate Package Data (EHRPD)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_EHRPD = 8,

    /**
     * Long Term Evolution (LTE)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_LTE = 9,

    /**
     * Long Term Evolution_Carrier Aggregation (LTE_CA)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_LTE_CA = 10,

    /**
     * Industrial Wireless LAN (IWLAN)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_IWLAN = 11,

    /**
     * New Radio (NR)
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    RADIO_TECHNOLOGY_NR = 12
  }

  /**
   * Defines the signal strength.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export interface SignalInformation {
    /**
     * Signal strength type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    signalType: NetworkType;

    /**
     * Signal strength level. The value range is [0, 5]. If the value is out of range, an error is returned.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    signalLevel: int;

    /**
     * Signal strength. The value range is [–140, 140]. If the value is out of range, an error is returned.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 9 dynamic
     * @since 23 static
     */
    dBm: int;
  }

  /**
   * Enumerates network types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum NetworkType {
    /**
     * Unknown network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_UNKNOWN = 0,

    /**
     * GSM network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_GSM = 1,

    /**
     * CDMA network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_CDMA = 2,

    /**
     * WCDMA network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_WCDMA = 3,

    /**
     * TD-SCDMA network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_TDSCDMA = 4,

    /**
     * LTE network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_LTE = 5,

    /**
     * NR network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_NR = 6
  }

  /**
   * Defines the network status.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export interface NetworkState {
    /**
     * Long carrier name of the registered network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    longOperatorName: string;

    /**
     * Short carrier name of the registered network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    shortOperatorName: string;

    /**
     * PLMN code of the registered network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    plmnNumeric: string;

    /**
     * Whether the user is roaming.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    isRoaming: boolean;

    /**
     * Network registration status of the device.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    regState: RegState;

    /**
     * RAT of the device.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 8 dynamic
     * @since 23 static
     */
    cfgTech: RadioTechnology;

    /**
     * NSA network registration status of the device.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    nsaState: NsaState;

    /**
     * CA status.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    isCaActive: boolean;

    /**
     * Whether only emergency calls are allowed.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    isEmergency: boolean;
  }

  /**
   * Defines the network registration status of the device.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum RegState {
    /**
     * The device cannot use any services, including data, SMS, and call services.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    REG_STATE_NO_SERVICE = 0,

    /**
     * The device can use services properly, including data, SMS, and call services.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    REG_STATE_IN_SERVICE = 1,

    /**
     * The device can use only the emergency call service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    REG_STATE_EMERGENCY_CALL_ONLY = 2,

    /**
     * The device cannot communicate with the network because the cellular radio service is disabled or the modem is
     * powered off.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    REG_STATE_POWER_OFF = 3
  }

  /**
   * Enumerates NSA network states.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum NsaState {
    /**
     * The device is in idle or connected state in an LTE cell that does not support NSA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_NOT_SUPPORT = 1,

    /**
     * The device is in the idle state in an LTE cell that supports NSA but not NR coverage detection.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_NO_DETECT = 2,

    /**
     * The device is connected to the LTE network in an LTE cell that supports NSA and NR coverage detection.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_CONNECTED_DETECT = 3,

    /**
     * The device is in the idle state in an LTE cell that supports NSA and NR coverage detection.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_IDLE_DETECT = 4,

    /**
     * The device is connected to the LTE/NR network in an LTE cell that supports NSA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_DUAL_CONNECTED = 5,

    /**
     * The device is idle or connected to the NG-RAN cell when being attached to the 5G Core.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NSA_STATE_SA_ATTACHED = 6
  }

  /**
   * Defines the cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CellInformation {
    /**
     * Network type of the cell.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 8 dynamic
     * @since 23 static
     */
    networkType: NetworkType;

    /**
     * Obtains the camp-on status of the serving cell.
     *
     * Returns {@code true} if the user equipment (UE) is camped on the cell; returns {@code false} otherwise.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isCamped: boolean;

    /**
     * Obtains the timestamp when the cell information is obtained.
     *
     * Returns a timestamp since boot, in nanoseconds.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    timeStamp: int;

    /**
     * Signal information.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 8 dynamic
     * @since 23 static
     */
    signalInformation: SignalInformation;

    /**
     * Obtains signal strength under different network formats.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation;
  }

  /**
   * Obtains CDMA cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CdmaCellInformation {
    /**
     * Indicates the base station Id.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    baseId: int;

    /**
     * Indicates the latitude.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    latitude: int;

    /**
     * Indicates the longitude.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    longitude: int;

    /**
     * Indicates the network identification code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    nid: int;

    /**
     * Indicates the system identification code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    sid: int;
  }

  /**
   * Obtains GSM cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface GsmCellInformation {
    /**
     * Indicates the location area code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    lac: int;

    /**
     * Indicates the cell identification.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cellId: int;

    /**
     * Indicates the ARFCN(absolute radio frequency channel int).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    arfcn: int;

    /**
     * Indicates the base station identification code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    bsic: int;

    /**
     * Indicates the mobile country code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Indicates the mobile network code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mnc: string;
  }

  /**
   * Obtains LTE cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface LteCellInformation {
    /**
     * Indicates the cell global identification.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cgi: long;

    /**
     * Indicates the physical cell identification.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    pci: int;

    /**
     * Indicates the tracking area code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    tac: int;

    /**
     * Indicates the E-UTRA Absolute Radio Frequency Channel Number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    earfcn: int;

    /**
     * Indicates the bandwidth.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    bandwidth: int;

    /**
     * Indicates the mobile country code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Indicates the mobile network code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mnc: string;

    /**
     * Support for New Radio_Dual Connectivity.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isSupportEndc: boolean;
  }

  /**
   * Obtains NR cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NrCellInformation {
    /**
     * Indicates the NR-ARFCN(NR Absolute Radio Frequency Channel Number).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    nrArfcn: int;

    /**
     * Indicates the physical cell identification.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    pci: int;

    /**
     * Indicates the tracking area code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    tac: int;

    /**
     * Indicates the 5G network cell ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    nci: int;

    /**
     * Indicates the mobile country code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Indicates the mobile network code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mnc: string;
  }

  /**
   * Obtains TDSCDMA cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface TdscdmaCellInformation {
    /**
     * Indicates the location area code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    lac: int;

    /**
     * Indicates the cell ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cellId: int;

    /**
     * Indicates the cell parameter ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cpid: int;

    /**
     * Indicates the absolute radio frequency number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    uarfcn: int;

    /**
     * Indicates the mobile country code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Indicates the mobile network code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mnc: string;
  }

  /**
   * Obtains WCDMA cell information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface WcdmaCellInformation {
    /**
     * Indicates the location area code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    lac: int;

    /**
     * Indicates the cell ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cellId: int;

    /**
     * Indicates the primary scrambling code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    psc: int;

    /**
     * Indicates the absolute radio frequency number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    uarfcn: int;

    /**
     * Indicates the mobile country code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Indicates the mobile network code.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mnc: string;
  }

  /**
   * Obtains the option mode of NR.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead telephony.radio#NROptionMode
   */
  export enum NrOptionMode {
    /**
     * Indicates unknown NR networking mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @deprecated since 10
     */
    NR_OPTION_UNKNOWN = 0,

    /**
     * Indicates that the NR networking mode is NSA only.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @deprecated since 10
     */
    NR_OPTION_NSA_ONLY = 1,

    /**
     * Indicates that the NR networking mode is SA only.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @deprecated since 10
     */
    NR_OPTION_SA_ONLY = 2,

    /**
     * Indicates that the NR networking mode is NSA and SA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @deprecated since 10
     */
    NR_OPTION_NSA_AND_SA = 3
  }

  /**
   * Obtains the option mode of NR.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum NROptionMode {
    /**
     * Indicates unknown NR networking mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    NR_OPTION_UNKNOWN = 0,

    /**
     * Indicates that the NR networking mode is NSA only.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    NR_OPTION_NSA_ONLY = 1,

    /**
     * Indicates that the NR networking mode is SA only.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    NR_OPTION_SA_ONLY = 2,

    /**
     * Indicates that the NR networking mode is NSA and SA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    NR_OPTION_NSA_AND_SA = 3
  }

  /**
   * Obtains the network search results.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  export interface NetworkSearchResult {
    /**
     * Indicates whether the network search was successful.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    isNetworkSearchSuccess: boolean;

    /**
     * Obtains the network search results.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    networkSearchResult: Array<NetworkInformation>;
  }

  /**
   * Obtains the network information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  export interface NetworkInformation {
    /**
     * Indicates the name of the operator.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    operatorName: string;

    /**
     * Indicates the number of the operator.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    operatorNumeric: string;

    /**
     * Indicates the status of network information.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    state: NetworkInformationState;

    /**
     * Indicates the radio Technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    radioTech: string;
  }

  /**
   * Obtains network information status.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  export enum NetworkInformationState {
    /**
     * Indicates that the network state is unknown.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_UNKNOWN = 0,

    /**
     * Indicates that the network is available for registration.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_AVAILABLE = 1,

    /**
     * Indicates that you have already registered with the network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_CURRENT = 2,

    /**
     * Indicates that the network is unavailable for registration.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_FORBIDDEN = 3
  }

  /**
   * Obtains the network selection mode option.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  export interface NetworkSelectionModeOptions {
    /**
     * Indicates the card slot index number, ranging from 0 to
     * the maximum card slot index number supported by the device.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * Indicates the network search mode of the SIM card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    selectMode: NetworkSelectionMode;

    /**
     * Indicates the network information.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    networkInformation: NetworkInformation;

    /**
     * Indicates whether to continue selecting the network selection mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 6 dynamic
     * @since 23 static
     */
    resumeSelection: boolean;
  }

  /**
   * Enumerates network selection modes.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum NetworkSelectionMode {
    /**
     * Unknown network selection mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_SELECTION_UNKNOWN = 0,

    /**
     * Automatic network selection mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_SELECTION_AUTOMATIC = 1,

    /**
     * Manual network selection mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    NETWORK_SELECTION_MANUAL = 2
  }

  /**
   * Obtains IMS registration status.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ImsRegState {
    /**
     * Indicates that the ims service is not registered.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMS_UNREGISTERED = 0,

    /**
     * Indicates that the ims service has been registered.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMS_REGISTERED = 1
  }

  /**
   * Indicates IMS registration technology.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ImsRegTech {
    /**
     * Indicates that ims has no registered technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGISTRATION_TECH_NONE = 0,

    /**
     * Indicates that ims registers LTE technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGISTRATION_TECH_LTE = 1,

    /**
     * Indicates that ims registers IWLAN technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGISTRATION_TECH_IWLAN = 2,

    /**
     * Indicates that ims registers NR technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGISTRATION_TECH_NR = 3
  }

  /**
   * Indicates IMS registration information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ImsRegInfo {
    /**
     * Indicates the registration status of the ims service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    imsRegState: ImsRegState;

    /**
     * Indicates the mode of ims radio technology.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    imsRegTech: ImsRegTech;
  }

  /**
   * Indicates the type of IMS service.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ImsServiceType {
    /**
     * Indicates voice service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOICE = 0,

    /**
     * Indicates video service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VIDEO = 1,

    /**
     * Indicates UT service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_UT = 2,

    /**
     * Indicates SMS service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SMS = 3
  }

  /**
   * Enum for network capability type.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum NetworkCapabilityType {
    /**
     * Indicates LTE network switch type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SERVICE_TYPE_LTE = 0,

    /**
     * Indicates NR network switch type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SERVICE_TYPE_NR = 1
  }

  /**
   * Enum for network capability state.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum NetworkCapabilityState {
    /**
     * Indicates turn off network switch.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SERVICE_CAPABILITY_OFF = 0,

    /**
     * Indicates turn on network switch.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SERVICE_CAPABILITY_ON = 1
  }

  /**
   * Determine whether the current manual network scan is in progress.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number.
   * @returns { Promise<boolean> } the promise return ManualNetworkScanState.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function isManualNetworkScanning(slotId: int): Promise<boolean>;

  /**
   * Stop ManualNetworkScan.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number.
   * @returns { Promise<void> } the promise return stopManualNetworkScan.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function stopManualNetworkScan(slotId: int): Promise<void>;

  /**
   * start ManualNetworkScan , Real-time report.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number.
   * @param { Callback< NetworkSearchRealTimeResult> } callback - Indicates the callback for manual network scan
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function startManualNetworkScan(slotId: int, callback: Callback<NetworkSearchRealTimeResult>): void;


  /**
   * Indicates the results of manual network scan
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  export interface NetworkSearchRealTimeResult {

    /**
     * the network search results.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    networkInfos: Array<NetworkInformation>;

    /**
     * Indicates whether the network search was stop.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    isFinish: boolean;
  }
}

export default radio;