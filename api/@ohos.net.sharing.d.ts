/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
 * @file Network Sharing
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * This module allows you to share your device's network connectivity with other connected devices.
 *
 * @syscap SystemCapability.Communication.NetManager.NetSharing
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace sharing {
  /**
   * Defines the handle of the data network. Before calling the **NetHandle** function, call the **getNetHandle**
   * function to obtain a **NetHandle** object.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  type NetHandle = connection.NetHandle;

  /**
   * Checks whether network sharing is supported. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that
   *     network sharing is supported, and **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharingSupported(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether network sharing is supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that network sharing is
   *     supported, and **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharingSupported(): Promise<boolean>;

  /**
   * Obtains the current network sharing status. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that
   *     network sharing is in progress, and **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharing(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the current network sharing status. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that network sharing is
   *     in progress, and **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharing(): Promise<boolean>;

  /**
   * Enables sharing of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202009 - Failed to enable forwarding for network sharing.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function startSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * Enables sharing of a specified type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202009 - Failed to enable forwarding for network sharing.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function startSharing(type: SharingIfaceType): Promise<void>;

  /**
   * Disables sharing of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * Disables sharing of a specified type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSharing(type: SharingIfaceType): Promise<void>;

  /**
   * Obtains the volume of mobile data traffic received via network sharing. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - Callback used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsRxBytes(callback: AsyncCallback<int>): void;

  /**
   * Obtains the volume of mobile data traffic received via network sharing. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } Promise used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsRxBytes(): Promise<int>;

  /**
   * Obtains the volume of mobile data traffic sent via network sharing. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - Callback used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTxBytes(callback: AsyncCallback<int>): void;

  /**
   * Obtains the volume of mobile data traffic sent via network sharing. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } Promise used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTxBytes(): Promise<int>;

  /**
   * Obtains the total volume of mobile data traffic sent via network sharing. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - Callback used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTotalBytes(callback: AsyncCallback<int>): void;

  /**
   * Obtains the total volume of mobile data traffic sent via network sharing. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } Promise used to return the data volume, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTotalBytes(): Promise<int>;

  /**
   * Obtains the names of NICs in the specified network sharing state. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceState } state - Network sharing state.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return an array of NIC names.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the names of NICs in the specified network sharing state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceState } state - Network sharing state.
   * @returns { Promise<Array<string>> } Promise used to return an array of NIC names.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>;

  /**
   * Obtains the network sharing state of the specified type. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @param { AsyncCallback<SharingIfaceState> } callback - Callback used to return the network sharing state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void;

  /**
   * Obtains the network sharing state of the specified type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @returns { Promise<SharingIfaceState> } Promise used to return the network sharing state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>;

  /**
   * Obtains regular expressions of NICs of a specified type. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return an array of regular expressions.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharableRegexes(type: SharingIfaceType, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains regular expressions of NICs of a specified type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - Sharing type. The value **0** means Wi-Fi hotspot sharing, **1** means USB
   *     sharing, and **2** means Bluetooth sharing.
   * @returns { Promise<Array<string>> } Promise used to return an array of regular expressions.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharableRegexes(type: SharingIfaceType): Promise<Array<string>>;

  /**
   * Registers the network sharing status change event. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingStateChange' } type - Event type.<br/> The value **sharingStateChange** indicates a network
   *     sharing status change event.
   * @param { Callback<boolean> } callback - Callback invoked when the network sharing state changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'sharingStateChange', callback: Callback<boolean>): void;

  /**
   * Unregisters the network sharing status change event. This method uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingStateChange' } type - Event type. The value **sharingStateChange** indicates a network sharing
   *     status change event.
   * @param { Callback<boolean> } callback - Callback invoked when the network sharing state changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'sharingStateChange', callback?: Callback<boolean>): void;

  /**
   * Subscribes to network sharing state changes of a specified NIC. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'interfaceSharingStateChange' } type - Event type.<br/> The value **interfaceSharingStateChange**
   *     indicates a network sharing status change event of the NIC.
   * @param { Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }> } callback - Callback used
   *     to return the result. It is called when the network sharing state of a specified NIC changes. [since 9 - 10]
   * @param { Callback<InterfaceSharingStateInfo> } callback - Callback used to return the result. It is called when the
   *     network sharing state of a specified NIC changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void;

  /**
   * Unsubscribes from network sharing state changes of a specified NIC. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'interfaceSharingStateChange' } type - Event type. The value **interfaceSharingStateChange** indicates a
   *     network sharing status change event of the NIC.
   * @param { Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }> } callback - Callback used
   *     to return the result. [since 9 - 10]
   * @param { Callback<InterfaceSharingStateInfo> } callback - Callback used to return the result. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void;

  /**
   * Subscribes to upstream network changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingUpstreamChange' } type - Event type.<br/> The value **sharingUpstreamChange** indicates an
   *     upstream network change event.
   * @param { Callback<NetHandle> } callback - Callback invoked when the upstream network changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void;

  /**
   * Unsubscribes from upstream network changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingUpstreamChange' } type - Event type. The value **sharingUpstreamChange** indicates an upstream
   *     network change event.
   * @param { Callback<NetHandle> } callback - Callback used for unsubscription from upstream network changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void;

  /**
   * Enumerates the network sharing states of an NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SharingIfaceState {
    /**
     * Network sharing is in progress.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_SERVING = 1,

    /**
     * Network sharing is supported.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_CAN_SERVER = 2,

    /**
     * An error occurred during network sharing.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_ERROR = 3
  }

  /**
   * Wakes up the listener for network sharing state changes of an NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface InterfaceSharingStateInfo {
    /**
     * Enumerates the network sharing types of an NIC.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    type: SharingIfaceType;
    /**
     * NIC name.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    iface: string;
    /**
     * Network sharing state of the NIC.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    state: SharingIfaceState;
  }

  /**
   * Enumerates the network sharing types of an NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SharingIfaceType {
    /**
     * Wi-Fi hotspot sharing.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_WIFI = 0,

    /**
     * USB sharing.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_USB = 1,

    /**
     * Bluetooth sharing.
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_BLUETOOTH = 2
  }
}

export default sharing;