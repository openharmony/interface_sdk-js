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
 * @file Telephony Status Observer
 * @kit TelephonyKit
 */

import type { Callback } from './@ohos.base';
import type radio from './@ohos.telephony.radio';
import type data from './@ohos.telephony.data';
import type call from './@ohos.telephony.call';
import type sim from './@ohos.telephony.sim';

/**
 * The **observer** module provides event subscription management functions. You can register or unregister an observer
 * that listens for the following events: network status change, signal status change, call status change, cellular data
 * connection status, uplink and downlink data flow status of cellular data services, and SIM status change.
 *
 * @syscap SystemCapability.Telephony.StateRegistry
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace observer {
  /**
   * Defines the network status.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type NetworkState = radio.NetworkState;

  /**
   * Defines the signal strength.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SignalInformation = radio.SignalInformation;

  /**
   * Describes current cell information.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  type CellInformation = radio.CellInformation;

  /**
   * Describes the connection status of a cellular data link.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataConnectState = data.DataConnectState;

  /**
   * Enumerates the radio access technologies.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type RatType = radio.RadioTechnology;

  /**
   * Defines the cellular data flow type.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataFlowType = data.DataFlowType;

  /**
   * Enumerates call states.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CallState = call.CallState;

  /**
   * Enumerates SIM card types.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CardType = sim.CardType;

  /**
   * SIM card state.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SimState = sim.SimState;

  /**
   * Enumerates call states.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   * @since 23 static
   */
  type TelCallState = call.TelCallState;

  /**
   * Enumerates carrier call states.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  type CCallState = call.CCallState;

  /**
   * Indicates the result of network search.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  type NetworkSearchRealTimeResult = radio.NetworkSearchRealTimeResult;

  /**
   * Registers an observer for network status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - Network status change event. This field has a fixed value of
   *     **networkStateChange**.
   * @param { Callback<NetworkState> } callback - Callback used to return the network status object. For details, see
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'networkStateChange', callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<NetworkState> } callback - Indicates the callback for
   *     getting an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(callback: Callback<NetworkState>): void;

  /**
   * Registers an observer for network status change events of the SIM card in the specified slot. This API uses an
   * asynchronous callback to return the execution result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - Network status change event. This field has a fixed value of
   *     **networkStateChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<NetworkState> } callback - Callback used to return the network status object. For details, see
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * Unregisters the observer for network status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'networkStateChange' } type - Network status change event. This field has a fixed value of
   *     **networkStateChange**.
   * @param { Callback<NetworkState> } callback - Callback used to return the network status object. which is the
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void;

  /**
   * Cancel callback when the network state is updated.
   *
   * @param { Callback<NetworkState> } [callback] - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offNetworkStateChange(callback?: Callback<NetworkState>): void;

  /**
   * Registers an observer for signal status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * @param { 'signalInfoChange' } type - Signal status change event. This field has a fixed value of
   *     **signalInfoChange**.
   * @param { Callback<Array<SignalInformation>> } callback - Callback used to return the signal strength object. For
   *     details, see [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to the default sim card is updated.
   *
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(callback: Callback<Array<SignalInformation>>): void;

  /**
   * Registers an observer for signal status change events of the SIM card in the specified slot. This API uses an
   * asynchronous callback to return the execution result.
   *
   * @param { 'signalInfoChange' } type - Signal status change event. This field has a fixed value of
   *     **signalInfoChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<Array<SignalInformation>> } callback - Callback used to return the signal strength object. For
   *     details, see [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to a monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * Unregisters the observer for signal status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'signalInfoChange' } type - Signal status change event. This field has a fixed value of
   *     **signalInfoChange**.
   * @param { Callback<Array<SignalInformation>> } callback - Callback used to return the signal strength object. For
   *     details, see [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void;

  /**
   * Cancel callback when the signal strength is updated.
   *
   * @param { Callback<Array<SignalInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the signalInfoChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSignalInfoChange(callback?: Callback<Array<SignalInformation>>): void;

  /**
   * Registers an observer for cell information change events. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - Cell information change event. This field has a fixed value of
   *     **cellInfoChange**.
   * @param { Callback<Array<CellInformation>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(callback: Callback<Array<CellInformation>>): void;

  /**
   * Registers an observer for signal status change events of the SIM card in the specified slot. This API uses an
   * asynchronous callback to return the execution result.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - Cell information change event. This field has a fixed value of
   *     **cellInfoChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<Array<CellInformation>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to a monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * Unregisters the observer for cell information change events. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'cellInfoChange' } type - Cell information change event. This field has a fixed value of
   *     **cellInfoChange**.
   * @param { Callback<Array<CellInformation>> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'cellInfoChange', callback?: Callback<Array<CellInformation>>): void;

  /**
   * Cancel callback when the cell information is updated.
   *
   * @param { Callback<Array<CellInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the cellInfoChange event.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offCellInfoChange(callback?: Callback<Array<CellInformation>>): void;

  /**
   * Registers an observer for connection status change events of the cellular data link. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Cellular data connection status event. This field has a fixed
   *     value of **cellularDataConnectionStateChange**.
   * @param { Callback<DataConnectionStateInfo> } callback - Callback function used to return the cellular data
   *     connection status information object. For details, see
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState} of **data** and
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology} of **radio**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the default sim card is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology
   *     for cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Registers an observer for connection status change events of the cellular data link over the SIM card in the
   * specified slot. This API uses an asynchronous callback to return the result.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Cellular data connection status event. This field has a fixed
   *     value of **cellularDataConnectionStateChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<DataConnectionStateInfo> } callback - Callback function used to return the cellular data
   *     connection status information object. For details, see
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState} of **data** and
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology} of **radio**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology for
   *     cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Unregisters the observer for connection status change events of the cellular data link. This API uses an
   * asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Cellular data connection status event. This field has a fixed
   *     value of **cellularDataConnectionStateChange**.
   * @param { Callback<DataConnectionStateInfo> } callback - Callback function used to return the cellular data
   *     connection status information object. For details, see
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState} of **data** and
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology} of **radio**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * Cancel callback when the cellular data link connection state is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } [callback] - Indicates the callback to unsubscribe
   *     from the cellularDataConnectionStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataConnectionStateChange(callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * Registers an observer for the uplink and downlink data flow status change events of the cellular data service. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { 'cellularDataFlowChange' } type - Cellular data flow change event. This field has a fixed value of
   *     **cellularDataFlowChange**.
   * @param { Callback<DataFlowType> } callback - Callback function used to return the data flow status object. For
   *     details, see [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType} in **data**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the default sim card is updated.
   *
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(callback: Callback<DataFlowType>): void;

  /**
   * Registers an observer for the uplink and downlink data flow status change events of the cellular data service on
   * the SIM card in the specified slot. This API uses an asynchronous callback to return the result.
   *
   * @param { 'cellularDataFlowChange' } type - Cellular data flow change event. This field has a fixed value of
   *     **cellularDataFlowChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<DataFlowType> } callback - Callback function used to return the data flow status object. For
   *     details, see [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType} in **data**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * Unregisters the observer for the uplink and downlink data flow status change events of the cellular data service.
   * This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'cellularDataFlowChange' } type - Cellular data flow change event. This field has a fixed value of
   *     **cellularDataFlowChange**.
   * @param { Callback<DataFlowType> } callback - Callback function used to return the data flow status object. For
   *     details, see [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType} in **data**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void;

  /**
   * Cancel callback when the uplink and downlink data flow state of cellular data services is updated.
   *
   * @param { Callback<DataFlowType> } [callback] - Indicates the callback to unsubscribe from
   *     the cellularDataFlowChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataFlowChange(callback?: Callback<DataFlowType>): void;

  /**
   * Registers an observer for call status change events. This API uses an asynchronous callback to return the execution
   * result.
   *
   * @param { 'callStateChange' } type - Call status change event. This field has a fixed value of **callStateChange**.
   * @param { Callback<CallStateInfo> } callback - Callback function used to return the result,
   *     <br>which is the **CallStateInfo** object. In this object:
   *     <br>- Only **state** is accessible to third-party applications. - **number** is only accessible to system
   *     applications.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the default sim card is updated.
   *
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(callback: Callback<CallStateInfo>): void;

  /**
   * Registers an observer for call status change events. This API uses an asynchronous callback to return the execution
   * result.
   *
   * @param { 'callStateChange' } type - Call status change event. This field has a fixed value of **callStateChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<CallStateInfo> } callback - Callback function used to return the call status information object.
   *     <br>The application can obtain the **CallStateInfo** object. In this object:
   *     <br>- Only **state** is accessible to third-party applications. - **number** is only accessible to system
   *     applications.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * Unregisters the observer for call status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'callStateChange' } type - Call status change event. This field has a fixed value of **callStateChange**.
   * @param { Callback<CallStateInfo> } callback - Callback function used to return the call status information object.
   *     For details, see [CallState]{@link @ohos.telephony.call:call.CallState}.
   *     <br>**number**: phone number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void;

  /**
   * Cancel callback when the call state is updated.
   *
   * @param { Callback<CallStateInfo> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChange(callback?: Callback<CallStateInfo>): void;

  /**
   * Registers an observer for extended call status change events. This API uses an asynchronous callback to return the
   * execution result.
   *
   * @param { 'callStateChangeEx' } type - Extended call status change event. This field has a fixed value of
   *     **callStateChangeEx**.
   * @param { Callback<TelCallState> } callback - Callback function used to return the call status information object.
   *     <br>The application can obtain **TelCallState**.
   *     <br>
   * @param { ObserverOptions } [options] - Event subscription parameters.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * Callback when the telCall state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { Callback<TelCallState> } callback - Indicates the callback for
   *     getting the telCall state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChangeEx(callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * Unregisters the observer for extended call status change events. This API uses an asynchronous callback to return
   * the execution result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'callStateChangeEx' } type - Call status change event. This field has a fixed value of
   *     **callStateChange**.
   * @param { Callback<TelCallState> } [callback] - Callback function used to return the call status information object.
   *     For details, see [TelCallState]{@link @ohos.telephony.call:call.TelCallState} in **call**.
   *     <br>
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void;

  /**
   * Cancel callback when the telCall state is updated.
   *
   * @param { Callback<TelCallState> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChangeEx event.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChangeEx(callback?: Callback<TelCallState>): void;

  /**
   * Subscribes to the carrier call state changes and obtains the call number. This method uses an asynchronous callback
   * to return the execution result.
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } callback - Callback function used to return the call status information object.
   *     <br>The application can obtain CCallState.
   *     <br>
   * @param { ObserverOptions } [options] - Event subscription parameters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void;

  /**
   * Cancels the listening on the carrier call status and obtaining of the call number by a third-party application.
   * This method uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } [callback] - Callback function used to return the call status information
   *     object.
   *     <br>The application can obtain CCallState.
   *     <br>
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offCCallStateChange(callback?: Callback<CCallStateInfo>): void;

  /**
   * Registers an observer for SIM card status change events. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > The return result of this API does not contain the activation status of the SIM card. For details, see
   * > [sim.isSimActive]{@link @ohos.telephony.sim:sim.isSimActive}.
   *
   * @param { 'simStateChange' } type - SIM status change event. This field has a fixed value of **simStateChange**.
   * @param { Callback<SimStateData> } callback - Callback function used to return the SIM status data object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'simStateChange', callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the default sim card is updated.
   *
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   *     including state Indicates the sim state, and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(callback: Callback<SimStateData>): void;

  /**
   * Registers an observer for status change events of the SIM card in the specified slot. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { 'simStateChange' } type - SIM status change event. This field has a fixed value of **simStateChange**.
   * @param { ObserverOptions } options - Event subscription parameters.
   * @param { Callback<SimStateData> } callback - Callback function used to return the SIM status data object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<boolean> } callback - Callback used to return the result.
   *     The value **true** indicates 5A state, and **false** indicates not 5A state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void;

  /**
   * Unsubscribes from the callback for listening to the 5A state.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<boolean> } callback - Callback used to return the result.
   *     The value **true** indicates 5A state, and **false** indicates not 5A state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void;

  /**
   * Unregisters the observer for SIM card status change events. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'simStateChange' } type - SIM status change event. This field has a fixed value of **simStateChange**.
   * @param { Callback<SimStateData> } callback - Callback function used to return the SIM status data object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'simStateChange', callback?: Callback<SimStateData>): void;

  /**
   * Cancel callback when the sim state is updated.
   *
   * @param { Callback<SimStateData> } [callback] - Indicates the callback to unsubscribe from the simStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSimStateChange(callback?: Callback<SimStateData>): void;

  /**
   * Registers an observer for account information change events of the SIM card. This API uses an asynchronous callback
   * to return the result.
   *
   * @param { 'iccAccountInfoChange' } type - Account information change event. This field has a fixed value of
   *     **iccAccountInfoChange**.
   * @param { Callback<void> } callback - Callback used to return the result. If the account is successfully changed,
   *     the value of **err** is **undefined**. Otherwise, the value is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   */
  function on(type: 'iccAccountInfoChange', callback: Callback<void>): void;

  /**
   * Receives an ICC account change. This callback is invoked when the ICC account updates
   * and the observer is added to monitor the updates.
   *
   * @param { Callback<void> } callback - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onIccAccountInfoChange(callback: Callback<void>): void;

  /**
   * Unregisters the observer for account information change events of the SIM card. This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > You can pass the callback of the **on** function if you want to cancel listening for a certain type of event. If
   * > you do not pass the callback, you will cancel listening for all events.
   *
   * @param { 'iccAccountInfoChange' } type - Account information change event. This field has a fixed value of
   *     **iccAccountInfoChange**.
   * @param { Callback<void> } callback - Callback used to return the result. If the account is successfully changed,
   *     the value of **err** is **undefined**. Otherwise, the value is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   */
  function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void;

  /**
   * Cancel to receive an ICC account change.
   *
   * @param { Callback<void> } [callback] - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offIccAccountInfoChange(callback?: Callback<void>): void;

  /**
   * Enumerates SIM card types and states.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimStateData {
    /**
     * SIM card type.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    type: CardType;

    /**
     * SIM card state.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    state: SimState;

    /**
     * SIM card lock type.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    reason: LockReason;
  }

  /**
   * Defines information about the call status.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallStateInfo {
    /**
     * Call type.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: CallState;

    /**
     * Phone number.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     */
    number: string;

    /**
     * Indicates call number.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 static
     */
    teleNumber: string;
  }

  /**
   * Defines information about the call status.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  export interface CCallStateInfo {
    /**
     * Call type.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    state: CCallState;

    /**
     * Phone number.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    teleNumber: string;
  }

  /**
   * Defines information about the data connection status.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DataConnectionStateInfo {
    /**
     * Data connection status.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: DataConnectState;

    /**
     * Network type.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    network: RatType;
  }

  /**
   * Defines event subscription parameters.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ObserverOptions {
    /**
     * Card slot ID.
     *
     * - **0**: card slot 1.
     * - **1**: card slot 2.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    slotId: int;
  }

  /**
   * Enumerates SIM card lock types.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 8 dynamic
   * @since 23 static
   */
  export enum LockReason {
    /**
     * No lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NONE = 0,

    /**
     * PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN = 1,

    /**
     * PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PUK = 2,

    /**
     * Network PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PIN = 3,

    /**
     * Network PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PUK = 4,

    /**
     * Subnet PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PIN = 5,

    /**
     * Subnet PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PUK = 6,

    /**
     * Service provider PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PIN = 7,

    /**
     * Service provider PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PUK = 8,

    /**
     * Organization PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PIN = 9,

    /**
     * Organization PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PUK = 10,

    /**
     * SIM PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PIN = 11,

    /**
     * SIM PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PUK = 12
  }

  /**
   * Registers an observer for SIM card activation state changes. This API uses an asynchronous callback to return the
   * execution result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { Callback< boolean> } callback - Callback function used to return whether the SIM card is activated.
   *     <br>- **true**: activated.
   *     <br>- **false**: not activated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void;

  /**
   * Unregisters an observer for SIM card activation state changes. This API uses an asynchronous callback to return the
   * execution result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { Callback<boolean> } [callback] - Callback function used to return whether the SIM card is activated.
   *     <br>- **true**: activated.
   *     <br>- **false**: not activated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offGetSimActiveState(callback?: Callback<boolean>): void;
}

export default observer;