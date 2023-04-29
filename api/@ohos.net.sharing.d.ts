/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./@ohos.base";
import connection from "./@ohos.net.connection";

/**
 * Provides network sharing related interfaces.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NetManager.NetSharing
 */
declare namespace sharing {
  type NetHandle = connection.NetHandle;
  /**
   * Checks whether this device allows for network sharing.
   *
   * @param callback Returns {@code true} indicating network sharing is supported; returns {@code false} otherwise.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
  */
  function isSharingSupported(callback: AsyncCallback<boolean>): void;

   /**
   * Checks whether this device allows for network sharing.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
  */
  function isSharingSupported(): Promise<boolean>;

  /**
   * Return the global network sharing state.
   *
   * @param callback Returns {@code true} indicating network sharing is running; returns {@code false} otherwise.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function isSharing(callback: AsyncCallback<boolean>): void;

  /**
   * Return the global network sharing state.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function isSharing(): Promise<boolean>;

  /**
   * Start network sharing for given type.
   *
   * @param type Enumeration of shareable interface types.
   * @param callback Returns the result.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202004 - Try to share an unavailable iface.
   * @throws {BusinessError} 2202005 - WiFi sharing failed.
   * @throws {BusinessError} 2202006 - Bluetooth sharing failed.
   * @throws {BusinessError} 2202009 - Network share enable forwarding error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function startSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * Start network sharing for given type.
   *
   * @param type Enumeration of shareable interface types.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202004 - Try to share an unavailable iface.
   * @throws {BusinessError} 2202005 - WiFi sharing failed.
   * @throws {BusinessError} 2202006 - Bluetooth sharing failed.
   * @throws {BusinessError} 2202009 - Network share enable forwarding error.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function startSharing(type: SharingIfaceType): Promise<void>;

  /**
   * Stop network sharing for given type.
   *
   * @param type Enumeration of shareable interface types.
   * @param callback Returns the result.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202004 - Try to share an unavailable iface.
   * @throws {BusinessError} 2202005 - WiFi sharing failed.
   * @throws {BusinessError} 2202006 - Bluetooth sharing failed.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * Stop network sharing for given type.
   *
   * @param type Enumeration of shareable interface types.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2202004 - Try to share an unavailable iface.
   * @throws {BusinessError} 2202005 - WiFi sharing failed.
   * @throws {BusinessError} 2202006 - Bluetooth sharing failed.
   * @throws {BusinessError} 2202011 - Cannot get network sharing configuration.
   * @since 9
   */
  function stopSharing(type: SharingIfaceType): Promise<void>;

  /**
   * Obtains the number of downlink data bytes of the sharing network interfaces.
   *
   * @param callback Returns the number of downlink data bytes of the sharing network interfaces.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsRxBytes(callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of downlink data bytes of the sharing network interfaces.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsRxBytes(): Promise<number>;

  /**
   * Obtains the number of uplink data bytes of the sharing network interfaces.
   *
   * @param callback Returns the number of uplink data bytes of the sharing network interfaces.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsTxBytes(callback: AsyncCallback<number>): void;

    /**
   * Obtains the number of uplink data bytes of the sharing network interfaces.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsTxBytes(): Promise<number>;

  /**
   * Obtains the number of total data bytes of the sharing network interfaces.
   *
   * @param callback Returns the number of total data bytes of the sharing network interfaces.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsTotalBytes(callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of total data bytes of the sharing network interfaces.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getStatsTotalBytes(): Promise<number>;

  /**
   * Obtains the names of interfaces in each sharing state.
   *
   * @param state Is the network sharing state.
   * @param callback Returns an array of interface names that meet this status.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the names of interfaces in each sharing state.
   *
   * @param state Is the network sharing state.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>;

  /**
   * Obtains the network sharing state for given type.
   *
   * @param type Is the enumeration of shareable interface types.
   * @param callback Returns {@code SharingIfaceState}.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void;

  /**
   * Obtains the network sharing state for given type.
   *
   * @param type Is the enumeration of shareable interface types.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>;

  /**
   * Get a list regular expression that defines any interface that can support network sharing.
   *
   * @param type Is the enumeration of shareable interface types.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharableRegexes(type: SharingIfaceType, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get a list regular expression that defines any interface that can support network sharing.
   *
   * @param type Is the enumeration of shareable interface types.
   * @returns The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @since 9
   */
  function getSharableRegexes(type: SharingIfaceType): Promise<Array<string>>;

  /**
   * Register a callback for the global network sharing state change.
   *
   * @param type event that need to be listened to
   * @param callback callback function that returns the status
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function on(type: 'sharingStateChange', callback: Callback<boolean>): void;

  /**
   * Unregister a callback for the global network sharing state change.
   *
   * @param type events that need to be cancel listening to
   * @param callback callback function that returns the status
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function off(type: 'sharingStateChange', callback?: Callback<boolean>): void;

  /**
   * Register a callback for the interface network sharing state change.
   *
   * @param type event that need to be listened to
   * @param callback callback function that returns the message
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function on(type: 'interfaceSharingStateChange', callback: Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }>): void;

  /**
   * Unregister a callback for the interface network sharing state change.
   *
   * @param type events that need to be cancel listening to
   * @param callback callback function that returns the message
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function off(type: 'interfaceSharingStateChange', callback?: Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }>): void;

  /**
   * Register a callback for the sharing upstream network change.
   *
   * @param type event that need to be listened to
   * @param callback callback function that returns the network handle
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void;

  /**
   * Unregister a callback for the sharing upstream network change.
   *
   * @param type events that need to be cancel listening to
   * @param callback callback function that returns the network handle
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 Permission denied.
   * @throws {BusinessError} 401 Parameter error.
   * @since 9
   */
  function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void;

  /**
   * @systemapi Hide this for inner system use.
   */
  export enum SharingIfaceState {
    /**
     * Indicates the names of the NICs that are serving as network sharing.
     * @since 9
     */
    SHARING_NIC_SERVING = 1,

    /**
     * Indicates the names of the NICs that can serve as network sharing.
     * @since 9
     */
    SHARING_NIC_CAN_SERVER = 2,

    /**
     * Indicates the names of the NICs that serving error.
     * @since 9
     */
    SHARING_NIC_ERROR = 3
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export enum SharingIfaceType {
    /**
     * Network sharing type for Wi-Fi.
     * @since 9
     */
    SHARING_WIFI = 0,

    /**
     * Network sharing type for USB.
     * @since 9
     */
    SHARING_USB = 1,

    /**
     * Network sharing type for BLUETOOTH.
     * @since 9
     */
    SHARING_BLUETOOTH = 2
  }
}

export default sharing;