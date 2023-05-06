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
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 8
 */
declare namespace connection {
  type HttpRequest = http.HttpRequest;
  type TCPSocket = socket.TCPSocket;
  type UDPSocket = socket.UDPSocket;

  /**
   * Create a network connection with optional netSpecifier and timeout.
   *
   * @param netSpecifier Indicates the network specifier. See {@link NetSpecifier}.
   * @param timeout The time in milliseconds to attempt looking for a suitable network before
   *   {@link NetConnection#netUnavailable} is called.
   * @since 8
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: number): NetConnection;

  /**
   * Obtains the data network that is activated by default.
   *
   * <p>To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param callback Returns the {@link NetHandle} object;
   *      returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getDefaultNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the data network that is activated by default.
   *
   * <p>To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getDefaultNet(): Promise<NetHandle>;

  /**
   * Obtains the data network that is activated by default.
   *
   * <p>To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @returns Returns the {@link NetHandle} object;
   *      returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function getDefaultNetSync(): NetHandle;

  /**
   * Obtains the list of data networks that are activated.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param callback Returns the {@link NetHandle} object; returns {@code null} if no network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void;

  /**
   * Obtains the list of data networks that are activated.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * Queries the connection properties of a network.
   *
   * <p>This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param netHandle Indicates the network to be queried.
   * @param callback Returns the {@link ConnectionProperties} object.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getConnectionProperties(netHandle: NetHandle, callback: AsyncCallback<ConnectionProperties>): void;

  /**
   * Queries the connection properties of a network.
   *
   * <p>This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param netHandle Indicates the network to be queried.
   * @returns The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getConnectionProperties(netHandle: NetHandle): Promise<ConnectionProperties>;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param netHandle Indicates the handle. See {@link NetHandle}.
   * @param callback Returns {@link NetCapabilities}; returns {@code null} if {@code handle} is invalid.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @param netHandle Indicates the handle. See {@link NetHandle}.
   * @returns The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>;

  /**
   * Checks whether data traffic usage on the current network is metered.
   *
   * @param callback Returns {@code true} if data traffic usage on the current network is metered;
   *      returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function isDefaultNetMetered(callback: AsyncCallback<boolean>): void;

 /**
   * Checks whether data traffic usage on the current network is metered.
   *
   * @param callback Returns {@code true} if data traffic usage on the current network is metered;
   *      returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function isDefaultNetMetered(): Promise<boolean>;

  /**
   * Checks whether the default data network is activated.
   *
   * @param callback Returns {@code true} if the default data network is activated; returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function hasDefaultNet(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the default data network is activated.
   *
   * @returns The promise returned by the function.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function hasDefaultNet(): Promise<boolean>;

  /**
   * Enables the airplane mode for a device.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error. 
   * @since 8
   */
  function enableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Enables the airplane mode for a device.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function enableAirplaneMode(): Promise<void>;

  /**
   * Disables the airplane mode for a device.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function disableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Disables the airplane mode for a device.
   *
   * <p>To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use. Only used for system app.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function disableAirplaneMode(): Promise<void>;

  /**
   * Reports the network state is connected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is connected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * Reports the network state is disconnected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is disconnected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   *
   * @param host Indicates the host name or the domain.
   * @param callback Returns the NetAddress list.
   * @permission ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   *
   * @param host Indicates the host name or the domain.
   * @returns The promise returned by the function.
   * @permission ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 8
   */
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   *
   * @param callback Returns the {@link NetHandle} bound to the process;
   *      returns {@code null} if no {@link NetHandle} is bound to the process.
   *      For details, see {@link NetHandle}.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function getAppNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   *
   * @returns { Promise<NetHandle> } the promise returned by the function.
   *      returns {@code null} if no {@link NetHandle} is bound to the process.
   *      For details, see {@link NetHandle}.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function getAppNet(): Promise<NetHandle>;

  /**
   * Binds a process to {@code NetHandle}.
   *
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.
   *
   * @param netHandle Indicates the handle. For details, see {@link NetHandle}.
   * @param callback Returns the callback of setAppNet.
   * @permission ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function setAppNet(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Binds a process to {@code NetHandle}.
   *
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.
   *
   * @param netHandle Indicates the handle. For details, see {@link NetHandle}.
   * @returns { Promise<void> } the promise returned by the function.
   * @permission ohos.permission.INTERNET
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @since 9
   */
  function setAppNet(netHandle: NetHandle): Promise<void>;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   *
   * @param callback Returns the proxy settings. For details, see {@link HttpProxy}.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   *
   * @returns { Promise<HttpProxy> } the promise returned by the function.
   * @throws {BusinessError} 401 - Parameter error
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   *
   * @param httpProxy Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @param callback Returns the callback of setGlobalHttpProxy.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   *
   * @param httpProxy Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @returns { Promise<void> } the promise returned by the function.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2100001 - Invalid parameter value.
   * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2100003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy): Promise<void>;

  /**
   * Represents the network connection handle.
   * since 8
   */
  export interface NetConnection {
    /**
     * Registers a listener for netAvailable events.
     * since 8
     */
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     * since 8
     */
    on(type: 'netBlockStatusChange', callback: Callback<{ netHandle: NetHandle, blocked: boolean }>): void;

    /**
     * Registers a listener for **netCapabilitiesChange** events.
     * since 8
     */
    on(type: 'netCapabilitiesChange', callback: Callback<{ netHandle: NetHandle, netCap: NetCapabilities }>): void;

    /**
     * Registers a listener for netConnectionPropertiesChange events.
     * since 8
     */
    on(type: 'netConnectionPropertiesChange', callback: Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }>): void;

    /**
     * Registers a listener for **netLost** events.
     * since 8
     */
    on(type: 'netLost', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netUnavailable events.
     * since 8
     */
    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Receives status change notifications of a specified network.
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @throws {BusinessError} 2100105 - The parameter of netSpecifier or callback is nullptr.
     * @throws {BusinessError} 2100202 - WriteInterfaceToken failed.
     * @throws {BusinessError} 2100207 - Remote is null.
     * @throws {BusinessError} 2100208 - The parameter of proxy is nullptr.
     * @throws {BusinessError} 2101022 - The number of requests exceeded the maximum.
     * @throws {BusinessError} 2101007 - The same callback exists.
     * @since 8
     */
    register(callback: AsyncCallback<void>): void;

    /**
     * Cancels listening for network status changes.
     * @throws {BusinessError} 401 - Parameter error
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @throws {BusinessError} 2101008 - RegisterNetConnCallback find same callback.
     * @throws {BusinessError} 2100207 - Remote is null.
     * @throws {BusinessError} 2100202 - WriteInterfaceToken failed.
     * @throws {BusinessError} 2100105 - The parameter of netSpecifier or callback is nullptr.
     * @since 8
     */
    unregister(callback: AsyncCallback<void>): void;
  }

  /**
   * Provides an instance that bears data network capabilities.
   * since 8
   */
  export interface NetSpecifier {
    /**
     * The transmission capacity and support of the network's global proxy storage data network.
     * @since 8
     */
    netCapabilities: NetCapabilities;

    /**
     * Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).
     * @since 8
     */
    bearerPrivateIdentifier?: string;
  }

  /**
   * Defines the handle of the data network.
   * since 8
   */
  export interface NetHandle {
    /**
    * Network ID, a value of 0 means that there is no default network, and the other values must be greater than or equal to 100.
    * @since 8
    */
    netId: number;

    /**
     * Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.
     * Before using this method, ensure that the socket is disconnected.
     *
     * @param socketParam Indicates the TCPSocket or UDPSocket object.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 9
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;

    /**
     * Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.
     * Before using this method, ensure that the socket is disconnected.
     *
     * @param socketParam Indicates the TCPSocket or UDPSocket object.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 9
     */
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @param callback Returns the NetAddress list.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 8
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @returns The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 8
     */
    getAddressesByName(host: string): Promise<Array<NetAddress>>;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @param callback Returns the first NetAddress.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 8
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @param callback Returns the first NetAddress.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2100001 - Invalid parameter value.
     * @throws {BusinessError} 2100002 - Operation failed. Cannot connect to service.
     * @throws {BusinessError} 2100003 - System internal error.
     * @since 8
     */
    getAddressByName(host: string): Promise<NetAddress>;
  }

  /**
   * Defines the network capability set.
   * @since 8
   */
  export interface NetCapabilities {
    /**
     * Uplink (device-to-network) bandwidth.
     * @since 8
     */
    linkUpBandwidthKbps?: number;

    /**
     * Downstream (network-to-device) bandwidth.
     * @since 8
     */
    linkDownBandwidthKbps?: number;

    /**
     * Network-specific capabilities.
     * @since 8
     */
    networkCap?: Array<NetCap>;

    /**
     * Network type.
     * @since 8
     */
    bearerTypes: Array<NetBearType>;
  }

  /**
  * Defines the network capability.
  * @since 8
  */
  export enum NetCap {
    /**
     * Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.
     * @since 8
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * Indicates that the network traffic is not metered.
     * @since 8
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * Indicates that the network can access the Internet.
     * @since 8
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * Indicates that the network does not use a VPN.
     * @since 8
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * Indicates that the network is available.
     * @since 8
     */
    NET_CAPABILITY_VALIDATED = 16,
  }

  /**
   * Enumerates network types.
   * @since 8
   */
  export enum NetBearType {
    /**
     * Indicates that the network is based on a cellular network.
     * @since 8
     */
    BEARER_CELLULAR = 0,

    /**
     * Indicates that the network is based on a Wi-Fi network.
     * @since 8
     */
    BEARER_WIFI = 1,

    /**
     * Indicates that the network is an Ethernet network.
     * @since 8
     */
    BEARER_ETHERNET = 3,
  }

  /**
   * Defines the network connection properties.
   * @since 8
   */
  export interface ConnectionProperties {
    /**
     * Network card name.
     * @since 8
     */
    interfaceName: string;
    /**
     * Domain. The default value is "".
     * @since 8
     */
    domains: string;
    /**
     * Link information.
     * @since 8
     */
    linkAddresses: Array<LinkAddress>;

    /**
     * Network address, refer to [NetAddress].
     * @since 8
     */
    dnses: Array<NetAddress>;

    /**
     * Routing information.
     * @since 8
     */
    routes: Array<RouteInfo>;

    /**
     * Maximum transmission unit.
     * @since 8
     */
    mtu: number;
  }

  /**
   * Defines network route information.
   * @since 8
   */
  export interface RouteInfo {
    /**
     * Network card name.
     * @since 8
     */
    interface: string;

    /**
     * Destination Address
     * @since 8
     */
    destination: LinkAddress;

    /**
     * Gateway address.
     * @since 8
     */
    gateway: NetAddress;

    /**
     * Whether a gateway is present.
     * @since 8
     */
    hasGateway: boolean;

    /**
     * Whether the route is the default route.
     * @since 8
     */
    isDefaultRoute: boolean;
  }

  /**
   * Defines network link information.
   * @since 8
   */
  export interface LinkAddress {
    /**
     * Link address.
     * @since 8
     */
    address: NetAddress;
    /**
     * The length of the link address prefix.
     * @since 8
     */
    prefixLength: number;
  }

  /**
   * Defines a network address.
   * @since 8
   */
  export interface NetAddress {
    /**
     * Network address.
     * @since 8
     */
    address: string;

    /**
     * Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.
     * @since 8
     */
    family?: number; 

    /**
     * Port number. The value ranges from 0 to 65535.
     * @since 8
     */
    port?: number; 
  }

  /**
   * Network Global Proxy Configuration Information.
   * @since 10
   */
  export interface HttpProxy {
    /**
     * Proxy server host name.
     * @since 10
     */
    host: string;

    /**
     * Host port.
     * @since 10
     */
    port: number;

    /**
     * Do not use a blocking list for proxy servers.
     * @since 10
     */
    exclusionList: Array<string>;
  }
}

export default connection;
