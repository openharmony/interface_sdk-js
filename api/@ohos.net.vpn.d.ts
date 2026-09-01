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
 * @file VPN Management
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import type _AbilityContext from './application/UIAbilityContext';

/**
 * This module is the built-in VPN function provided by the OS. It allows users to set up VPN connections through the
 * network settings of the OS. Generally, this module provides only limited functions and is subject to strict
 * restrictions.
 *
 * @syscap SystemCapability.Communication.NetManager.Vpn
 * @since 10 dynamic
 */
declare namespace vpn {
  /**
   * Defines the network link address information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type LinkAddress = connection.LinkAddress;

  /**
   * Defines the network route information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type RouteInfo = connection.RouteInfo;

  /**
   * The context of an ability. It allows access to ability-specific resources.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10 dynamic
   */
  export type AbilityContext = _AbilityContext;

  /**
   * Creates a VPN connection.
   *
   * @param { AbilityContext } context - Specified context.
   * @returns { VpnConnection } VPN connection object.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function createVpnConnection(context: AbilityContext): VpnConnection;

  /**
   * Subscribes to vpn connect state changes.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - Indicates vpn connect state changes.
   * @param { Callback<VpnConnectState> } callback - The callback of the vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function on(type: 'connect', callback: Callback<VpnConnectState>): void;

  /**
   * Subscribes to vpn connect state changes.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - Indicates multi vpn connect state changes.
   * @param { Callback<MultiVpnConnectState> } callback - The callback of the multi vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function on(type: 'connectMulti', callback: Callback<MultiVpnConnectState>): void;

  /**
   * Unsubscribes from vpn connect state changes.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - Indicates vpn connect state changes.
   * @param { Callback<VpnConnectState> } callback - The callback of the vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function off(type: 'connect', callback?: Callback<VpnConnectState>): void;

  /**
   * Unsubscribes from vpn connect state changes.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - Indicates multi vpn connect state changes.
   * @param { Callback<MultiVpnConnectState> } [callback] - The callback of the multi vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function off(type: 'connectMulti', callback?: Callback<MultiVpnConnectState>): void;

  /**
   * Add a system VPN network configuration.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { SysVpnConfig } config - Indicates the {@link SysVpnConfig} configuration of the VPN network.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function addSysVpnConfig(config: SysVpnConfig): Promise<void>;

  /**
   * Delete the configuration of system VPN network by the specified vpnId.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - Indicates the uuid of the VPN network configuration.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function deleteSysVpnConfig(vpnId: string): Promise<void>;

  /**
   * Get all system VPN network configuration.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<SysVpnConfig>> } The promise returned by the all VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getSysVpnConfigList(): Promise<Array<SysVpnConfig>>;

  /**
   * Get the configuration of system VPN network by the specified vpnId.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - Indicates the uuid of the VPN network.
   * @returns { Promise<SysVpnConfig> } The promise returned by the VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>;

  /**
   * Get the connected VPN network configuration.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<SysVpnConfig> } The promise returned by the connected VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getConnectedSysVpnConfig(): Promise<SysVpnConfig>;

  /**
   * Get the connected VPN App Info.
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<string>> } The promise returned by the connected VPN App Info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function getConnectedVpnAppInfo(): Promise<Array<string>>;

  /**
   * Defines a VPN connection object. Before calling **VpnConnection** APIs, you need to create a VPN connection object
   * by calling [vpn.createVpnConnection]{@link vpn.createVpnConnection}.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConnection {
    /**
     * Creates a VPN based on the specified configuration. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - VPN configuration.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If a VPN is created successfully,
     *     **error** is **undefined** and **data** is the file descriptor of the vNIC. Otherwise, **error** is an error
     *     object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    setUp(config: VpnConfig, callback: AsyncCallback<int>): void;

    /**
     * Creates a VPN based on the specified configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - VPN configuration.
     * @returns { Promise<int> } Promise used to return the result, which is the file descriptor of the vNIC.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    setUp(config: VpnConfig): Promise<int>;

    /**
     * Protects sockets against a VPN connection. The data sent through sockets is directly transmitted over the
     * physical network and therefore the traffic does not traverse through the VPN. This API uses an asynchronous
     * callback to return the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - Socket file descriptor. It can be obtained through
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd(callback: AsyncCallback<int>)}.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **error** is **undefined**. If the operation fails, an error message is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    protect(socketFd: int, callback: AsyncCallback<void>): void;

    /**
     * Protects sockets against a VPN connection. The data sent through sockets is directly transmitted over the
     * physical network and therefore the traffic does not traverse through the VPN. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - Socket file descriptor. It can be obtained through
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd()}.
     * @returns { Promise<void> } Promise used to return the result. If the operation is successful, the operation
     *     result is returned. If the operation fails, an error message is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    protect(socketFd: int): Promise<void>;

    /**
     * Destroys a VPN. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **error** is **undefined**. If the operation fails, an error message is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroys a VPN. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_VPN
     * @returns { Promise<void> } Promise used to return the result. If the operation is successful, the operation
     *     result is returned. If the operation fails, an error message is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    destroy(): Promise<void>;
  }

  /**
   * Defines the VPN configuration.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConfig {
    /**
     * Unique VPN ID.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    vpnId?: string;
    /**
     * IP address of the vNIC.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    addresses: Array<LinkAddress>;

    /**
     * Route information of the vNIC.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    routes?: Array<RouteInfo>;

    /**
     * IP address of the DNS server.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    dnsAddresses?: Array<string>;

    /**
     * List of DNS search domains.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    searchDomains?: Array<string>;

    /**
     * Maximum transmission unit (MTU), in bytes.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    mtu?: int;

    /**
     * Whether IPv4 is supported. The value **true** indicates that IPv4 is supported, and the value **false** indicates
     * the opposite. Default value: **true**.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv4Accepted?: boolean;

    /**
     * Whether IPv6 is supported. The value **true** indicates that IPv6 is supported, and the value **false** indicates
     * the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv6Accepted?: boolean;

    /**
     * Whether the built-in VPN is supported. The value **true** indicates that the built-in VPN is supported, and the
     * value **false** indicates the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isLegacy?: boolean;

    /**
     * Whether the blocking mode is used. The value **true** indicates that the blocking mode is used, and the value
     * **false** indicates the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isBlocking?: boolean;

    /**
     * Used to specify that the bundle name of the string type can access the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    trustedApplications?: Array<string>;

    /**
     * Used to specify that the bundle name of the string type cannot access the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    blockedApplications?: Array<string>;
  }

  /**
   * Define configuration of the system VPN network.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface SysVpnConfig extends VpnConfig {
    /**
     * The uuid for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnId?: string;

    /**
     * The name for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnName?: string;

    /**
     * The type for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnType?: SysVpnType;

    /**
     * The user name for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userName?: string;

    /**
     * The user password for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    password?: string;

    /**
     * Whether the VPN network save login name and password. The default value is false.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    saveLogin?: boolean;

    /**
     * The system user id for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userId?: int;

    /**
     * The forwarding routes for the VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    forwardingRoutes?: string;

    /**
     * The array of addresses for remote server.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    remoteAddresses?: Array<string>;

    /**
     * The array of local addresses for VPN interface.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    localAddresses?: Array<LinkAddress>;

    /**
     * The p12 cert password for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12Password?: string;

    /**
     * The p12 cert data for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12FileData?: Uint8Array;
  }

  /**
   * Define configuration of the open VPN network.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface OpenVpnConfig extends SysVpnConfig {
    /**
     * The port for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPort?: string;

    /**
     * The protocol for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnProtocol?: int;

    /**
     * The config for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfig?: string;

    /**
     * The auth type for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnAuthType?: int;

    /**
     * The ask pass for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    askpass?: string;

    /**
     * The config file path for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfigFilePath?: string;

    /**
     * The ca cert file path for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnCaCertFilePath?: string;

    /**
     * The user cert file path for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnUserCertFilePath?: string;

    /**
     * The private key file path for the openvpn VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPrivateKeyFilePath?: string;
  }

  /**
   * Define configuration of the ipsec VPN network.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface IpsecVpnConfig extends SysVpnConfig {
    /**
     * The pre share key for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     * The identifier for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     * The swanctl config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    swanctlConfig?: string;

    /**
     * The strongSwan config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     * The ca cert config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     * The private user cert config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * The public user cert config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * The private server cert config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * The public server cert config for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * The ca cert file path for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     * The private user cert file path for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * The public user cert file path for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * The private server cert file path for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * The public server cert file path for the ipsec VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;
  }

  /**
   * Define configuration of the l2tp VPN network.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface L2tpVpnConfig extends SysVpnConfig {
    /**
     * The pre share key for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     * The identifier for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     * The strongSwan config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     * The ca cert config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     * The private user cert config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * The public user cert config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * The private server cert config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * The public server cert config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * The ca cert file path for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     * The private user cert file path for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * The public user cert file path for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * The private server cert file path for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * The public server cert file path for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;

    /**
     * The config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecConfig?: string;

    /**
     * The secrets for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecSecrets?: string;

    /**
     * The client options for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    optionsL2tpdClient?: string;

    /**
     * The xl2tpd config for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    xl2tpdConfig?: string;

    /**
     * The shared key for the l2tp VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    l2tpSharedKey?: string;
  }

  /**
   * Defines the type for the VPN network.
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export enum SysVpnType {
    /**
     * The type for the IKEv2/IPsec MSCHAPv2 VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_MSCHAPV2 = 1,

    /**
     * The type for the IKEv2/IPsec PSK VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_PSK = 2,

    /**
     * The type for the IKEv2/IPsec RSA VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_RSA = 3,

    /**
     * The type for the L2TP/IPsec PSK VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_PSK = 4,

    /**
     * The type for the L2TP/IPsec RSA VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_RSA = 5,

    /**
     * The type for the IPsec XAUTH PSK VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_PSK = 6,

    /**
     * The type for the IPsec XAUTH RSA VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_RSA = 7,

    /**
     * The type for the IPsec HYBRID RSA VPN network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_HYBRID_RSA = 8,

    /**
     * The type for the OpenVpn network.
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    OPENVPN = 9
  }
}

export default vpn;
