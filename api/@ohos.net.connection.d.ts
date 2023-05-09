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

import { AsyncCallback, Callback } from "./@ohos.base";
import http from "./@ohos.net.http";
import socket from "./@ohos.net.socket";

/**
 * Provides interfaces to manage and use data networks.
 * @namespace connection
 * @syscap SystemCapability.Communication.NetManager.Core
 * @crossplatform
 * @since 8
 */
declare namespace connection {
  type HttpRequest = http.HttpRequest;
  type TCPSocket = socket.TCPSocket;
  type UDPSocket = socket.UDPSocket;

  /**
   * Create a network connection with optional netSpecifier and timeout.
   * @param { NetSpecifier } netSpecifier Indicates the network specifier. See {@link NetSpecifier}.
   * <p>@param { number } timeout The time in milliseconds to attempt looking for a suitable network before
   * {@link NetConnection#netUnavailable} is called.</p>
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: number): NetConnection;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { AsyncCallback<NetHandle> } callback Returns the {@link NetHandle} object;
   * returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getDefaultNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @returns { Promise<NetHandle> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getDefaultNet(): Promise<NetHandle>;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function getDefaultNetSync(): NetHandle;

  /**
   * Obtains the list of data networks that are activated.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { AsyncCallback<Array<NetHandle>> } callback Returns the {@link NetHandle} object; returns {@code null} if no network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void;

  /**
   * Obtains the list of data networks that are activated.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @returns { Promise<Array<NetHandle>> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * Queries the connection properties of a network.
   * This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { NetHandle } netHandle Indicates the network to be queried.
   * @param { AsyncCallback<ConnectionProperties> } callback Returns the {@link ConnectionProperties} object.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getConnectionProperties(netHandle: NetHandle, callback: AsyncCallback<ConnectionProperties>): void;

  /**
   * Queries the connection properties of a network.
   * This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { NetHandle } netHandle Indicates the network to be queried.
   * @returns { Promise<ConnectionProperties> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getConnectionProperties(netHandle: NetHandle): Promise<ConnectionProperties>;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { NetHandle } netHandle Indicates the handle. See {@link NetHandle}.
   * @param { AsyncCallback<NetCapabilities> } callback Returns {@link NetCapabilities}; returns {@code null} if {@code handle} is invalid.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @param { NetHandle } netHandle Indicates the handle. See {@link NetHandle}.
   * @returns { Promise<NetCapabilities> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>;

  /**
   * Checks whether data traffic usage on the current network is metered.
   * <p>@param callback Returns {@code true} if data traffic usage on the current network is metered;
   * returns {@code false} otherwise.</p>
   * @param { AsyncCallback<boolean> } callback - the callback of isDefaultNetMetered.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function isDefaultNetMetered(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether data traffic usage on the current network is metered.
   * <p>@param callback Returns {@code true} if data traffic usage on the current network is metered;
   * returns {@code false} otherwise.</p>
   * @returns { Promise<void> } the promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function isDefaultNetMetered(): Promise<boolean>;

  /**
   * Checks whether the default data network is activated.
   * <p>@param { AsyncCallback<boolean> } callback Returns {@code true} if the default data network is activated;
   * returns {@code false} otherwise.</p>
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function hasDefaultNet(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the default data network is activated.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function hasDefaultNet(): Promise<boolean>;

  /**
   * Enables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @param { AsyncCallback<void> } callback - the callback of enableAirplaneMode.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System permission denied
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error. 
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function enableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Enables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System permission denied
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function enableAirplaneMode(): Promise<void>;

  /**
   * Disables the airplane mode for a device.</p>
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @param { AsyncCallback<void> } callback - the callback of disableAirplaneMode.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System permission denied
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function disableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Disables the airplane mode for a device.</p>
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System permission denied
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function disableAirplaneMode(): Promise<void>;

  /**
   * Reports the network state is connected.
   * @param { NetHandle } netHandle Indicates the network whose state is to be reported.
   * @param { AsyncCallback<void> } callback - the callback of reportNetConnected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is connected.
   * @param { NetHandle } netHandle Indicates the network whose state is to be reported.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * Reports the network state is disconnected.
   * @param { NetHandle } netHandle Indicates the network whose state is to be reported.
   * @param { AsyncCallback<void> } callback - the callback of reportNetDisconnected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is disconnected.
   * @param { NetHandle } netHandle Indicates the network whose state is to be reported.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   * @param { string } host Indicates the host name or the domain.
   * @param { AsyncCallback<Array<NetAddress>> } callback Returns the NetAddress list.
   * @permission ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   * @param { string } host Indicates the host name or the domain.
   * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
   * @permission ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   * <p>@param callback Returns the {@link NetHandle} bound to the process;</p>
   * <p>returns {@code null} if no {@link NetHandle} is bound to the process.
   * For details, see {@link NetHandle}.</p>
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function getAppNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   * @returns { Promise<NetHandle> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function getAppNet(): Promise<NetHandle>;

  /**
   * Binds a process to {@code NetHandle}.
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.</p>
   * @param { NetHandle } netHandle Indicates the handle. For details, see {@link NetHandle}.
   * @param { AsyncCallback<void> } callback Returns the callback of setAppNet.
   * @permission ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function setAppNet(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Binds a process to {@code NetHandle}.
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.</p>
   * @param { NetHandle } netHandle Indicates the handle. For details, see {@link NetHandle}.
   * @returns { Promise<void> } the promise returned by the function.
   * @permission ohos.permission.INTERNET
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  function setAppNet(netHandle: NetHandle): Promise<void>;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   * @param { AsyncCallback<HttpProxy> } callback Returns the proxy settings. For details, see {@link HttpProxy}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   * @returns { Promise<HttpProxy> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   * @param { HttpProxy } httpProxy Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @param { AsyncCallback<void> } callback Returns the callback of setGlobalHttpProxy.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. 
   * @since 10
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   * @param { HttpProxy } httpProxy Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @returns { Promise<void> } the promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy): Promise<void>;

  /**
   * Represents the network connection handle.
   * @interface NetConnection
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface NetConnection {
    /**
     * Registers a listener for netAvailable events.
     * @param { string } type Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 8
     */
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ netHandle: NetHandle, blocked: boolean }> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    on(type: 'netBlockStatusChange', callback: Callback<{ netHandle: NetHandle, blocked: boolean }>): void;

    /**
     * Registers a listener for **netCapabilitiesChange** events.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ netHandle: NetHandle, netCap: NetCapabilities }> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 8
     */
    on(type: 'netCapabilitiesChange', callback: Callback<{ netHandle: NetHandle, netCap: NetCapabilities }>): void;

    /**
     * Registers a listener for netConnectionPropertiesChange events.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    on(type: 'netConnectionPropertiesChange', callback: Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }>): void;

    /**
     * Registers a listener for **netLost** events.
     * @param { string } type Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 8
     */
    on(type: 'netLost', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netUnavailable events.
     * @param { string } type Indicates Event name.
     * @param { Callback<void> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Receives status change notifications of a specified network.
     * @param { AsyncCallback<void> } callback - the callback of register.
     * @permission ohos.permission.GET_NETWORK_INFO
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101008 - The callback is not found.
     * @throws { BusinessError } 2101022 - The number of requests exceeded the maximum.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    register(callback: AsyncCallback<void>): void;

    /**
     * Cancels listening for network status changes.
     * @param { AsyncCallback<void> } callback - the callback of unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2100207 - Remote is null.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    unregister(callback: AsyncCallback<void>): void;
  }

  /**
   * Provides an instance that bear data network capabilities.
   * @interface NetSpecifier
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface NetSpecifier {
    /**
     * The transmission capacity and support of the network's global proxy storage data network.
     * @type {NetCapabilities}
     * @since 8
     */
    netCapabilities: NetCapabilities;

    /**
     * Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).
     * @type {string}
     * @since 8
     */
    bearerPrivateIdentifier?: string;
  }

  /**
   * Defines the handle of the data network.
   * @interface NetHandle
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 8
   */
  export interface NetHandle {
    /**
     * Network ID, a value of 0 means that there is no default network, and the other values must be greater than or equal to 100.
     * @type {number}
     * @crossplatform
     * @since 8
     */
    netId: number;

    /**
     * <p>Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.</p>
     * Before using this method, ensure that the socket is disconnected.
     * @param { TCPSocket | UDPSocket } socketParam Indicates the TCPSocket or UDPSocket object.
     * @param { AsyncCallback<void> } callback - the callback of bindSocket.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;

    /**
     * <p>Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.</p>
     * Before using this method, ensure that the socket is disconnected.
     * @param { TCPSocket | UDPSocket } socketParam Indicates the TCPSocket or UDPSocket object.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9
     */
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @param { string } host Indicates the host name or the domain.
     * @param { AsyncCallback<Array<NetAddress>> } callback Returns the NetAddress list.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @param { string } host Indicates the host name or the domain.
     * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    getAddressesByName(host: string): Promise<Array<NetAddress>>;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     * @param { string } host Indicates the host name or the domain.
     * @param { AsyncCallback<NetAddress> } callback Returns the first NetAddress.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     * @param { string } host Indicates the host name or the domain.
     * @returns { Promise<NetAddress> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    getAddressByName(host: string): Promise<NetAddress>;
  }

  /**
   * Defines the network capability set.
   * @interface NetCapabilities
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 8
   */
  export interface NetCapabilities {
    /**
     * Uplink (device-to-network) bandwidth.
     * @type {number}
     * @since 8
     */
    linkUpBandwidthKbps?: number;

    /**
     * Downstream (network-to-device) bandwidth.
     * @type {number}
     * @since 8
     */
    linkDownBandwidthKbps?: number;

    /**
     * Network-specific capabilities.
     * @type {Array<NetCap>}
     * @since 8
     */
    networkCap?: Array<NetCap>;

    /**
     * Network type.
     * @type {Array<NetBearType>}
     * @crossplatform
     * @since 8
     */
    bearerTypes: Array<NetBearType>;
  }

  /**
   * Defines the network capability.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export enum NetCap {
    /**
     * Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * Indicates that the network traffic is not metered.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * Indicates that the network can access the Internet.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * Indicates that the network does not use a VPN.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * Indicates that the network is available.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    NET_CAPABILITY_VALIDATED = 16,
  }

  /**
   * Enumerates network types.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 8
   */
  export enum NetBearType {
    /**
     * Indicates that the network is based on a cellular network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 8
     */
    BEARER_CELLULAR = 0,

    /**
     * Indicates that the network is based on a Wi-Fi network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 8
     */
    BEARER_WIFI = 1,

    /**
     * Indicates that the network is an Ethernet network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    BEARER_ETHERNET = 3,
  }

  /**
   * Defines the network connection properties.
   * @interface ConnectionProperties
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface ConnectionProperties {
    /**
     * Network card name.
     * @type {string}
     * @since 8
     */
    interfaceName: string;
    /**
     * Domain. The default value is "".
     * @type {string}
     * @since 8
     */
    domains: string;
    /**
     * Link information.
     * @type {Array<LinkAddress>}
     * @since 8
     */
    linkAddresses: Array<LinkAddress>;

    /**
     * Network address, refer to [NetAddress].
     * @type {Array<NetAddress>}
     * @since 8
     */
    dnses: Array<NetAddress>;

    /**
     * Routing information.
     * @type {Array<RouteInfo>}
     * @since 8
     */
    routes: Array<RouteInfo>;

    /**
     * Maximum transmission unit.
     * @type {number}
     * @since 8
     */
    mtu: number;
  }

  /**
   * Defines network route information.
   * @interface RouteInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface RouteInfo {
    /**
     * Network card name.
     * @type {string}
     * @since 8
     */
    interface: string;

    /**
     * Destination Address
     * @type {LinkAddress}
     * @since 8
     */
    destination: LinkAddress;

    /**
     * Gateway address.
     * @type {NetAddress}
     * @since 8
     */
    gateway: NetAddress;

    /**
     * Whether a gateway is present.
     * @type {boolean}
     * @since 8
     */
    hasGateway: boolean;

    /**
     * Whether the route is the default route.
     * @type {boolean}
     * @since 8
     */
    isDefaultRoute: boolean;
  }

  /**
   * Defines network link information.
   * @interface LinkAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface LinkAddress {
    /**
     * Link address.
     * @type {NetAddress}
     * @since 8
     */
    address: NetAddress;
    /**
     * The length of the link address prefix.
     * @type {number}
     * @since 8
     */
    prefixLength: number;
  }

  /**
   * Defines a network address.
   * @interface NetAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  export interface NetAddress {
    /**
     * Network address.
     * @type {string}
     * @since 8
     */
    address: string;

    /**
     * Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.
     * @type {number}
     * @since 8
     */
    family?: number; 

    /**
     * Port number. The value ranges from 0 to 65535.
     * @type {number}
     * @since 8
     */
    port?: number; 
  }

  /**
   * Network Global Proxy Configuration Information.
   * @@interface HttpProxy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  export interface HttpProxy {
    /**
     * Proxy server host name.
     * @type {string}
     * @since 10
     */
    host: string;

    /**
     * Host port.
     * @type {number}
     * @since 10
     */
    port: number;

    /**
     * Do not use a blocking list for proxy servers.
     * @type {Array<string>}
     * @since 10
     */
    exclusionList: Array<string>;
  }
}

export default connection;
