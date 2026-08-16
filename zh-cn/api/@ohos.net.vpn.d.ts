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
 * @file VPN管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import type _AbilityContext from './application/UIAbilityContext';

/**
 * 本模块是操作系统提供的内置VPN功能，允许用户通过系统的网络设置进行VPN连接，通常提供的功能较少，而且有比较严格的限制。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从 API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.Communication.NetManager.Vpn
 * @since 10 dynamic
 */
declare namespace vpn {
  /**
   * 获取网络链接信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type LinkAddress = connection.LinkAddress;

  /**
   * 获取网络路由信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type RouteInfo = connection.RouteInfo;

  /**
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10 dynamic
   */
  export type AbilityContext = _AbilityContext;

  /**
   * 创建一个 VPN 连接对象。
   *
   * @param { AbilityContext } context - 指定 context。
   * @returns { VpnConnection } 返回一个 VPN 连接对象。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function createVpnConnection(context: AbilityContext): VpnConnection;

  /**
   * 订阅VPN连接状态变化事件。
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
   * 订阅VPN连接状态变化事件。
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
   * 取消订阅VPN连接状态变化事件。
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
   * 取消订阅VPN连接状态变化事件。
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
   * 添加系统VPN网络配置。
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
   * 删除指定vpnId的系统VPN网络配置。
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
   * 获取所有系统VPN网络配置。
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
   * 获取指定vpnId的系统VPN网络配置。
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
   * 获取已连接的VPN网络配置。
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
   * 获取已连接的VPN应用信息。
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
   * VPN 连接对象。在调用 VpnConnection 的方法前，需要先通过[vpn.createVpnConnection]{@link vpn.createVpnConnection}创建 VPN 连接对象。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConnection {
    /**
     * 使用 config 创建一个 vpn 网络，使用 callback 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - 指定 VPN 网络的配置信息。
     * @param { AsyncCallback<int> } callback - 回调函数，当成功启动 VPN 网络时，返回虚拟网卡的文件描述符 fd, error 为 undefined，否则为错误对象。
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
     * 使用 config 创建一个 vpn 网络，使用 Promise 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - 指定 VPN 网络的配置信息。
     * @returns { Promise<int> } 以 Promise 形式返回获取结果，返回指定虚拟网卡的文件描述符 fd。
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
     * 保护套接字不受 VPN 连接影响，通过该套接字发送的数据将直接基于物理网络收发，因此其流量不会通过 VPN 转发，使用 callback 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - 指定保护的 socketfd, 该文件描述符通过
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd(callback: AsyncCallback<int>)}获取。
     * @param { AsyncCallback<void> } callback - 回调函数，成功时，error 为 undefined，失败返回错误码错误信息。
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
     * 保护套接字不受 VPN 连接影响，通过该套接字发送的数据将直接基于物理网络收发，因此其流量不会通过 VPN 转发, 使用 Promise 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - 指定保护的 socketfd, 该文件描述符通过
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd()}获取。
     * @returns { Promise<void> } 以 Promise 形式返回设定结果，失败返回错误码错误信息。
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
     * 销毁启动的 VPN 网络，使用 callback 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { AsyncCallback<void> } callback - 回调函数，成功时，error 为 undefined，失败返回错误码错误信息。
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
     * 销毁启动的 VPN 网络，使用 Promise 方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @returns { Promise<void> } 以 Promise 形式返回设定结果，失败返回错误码错误信息。
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
   * VPN 配置参数。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConfig {
    /**
     * VPN唯一标识。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    vpnId?: string;
    /**
     * VPN虚拟网卡的 IP 地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    addresses: Array<LinkAddress>;

    /**
     * VPN虚拟网卡的路由信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    routes?: Array<RouteInfo>;

    /**
     * DNS服务器地址信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    dnsAddresses?: Array<string>;

    /**
     * DNS 的搜索域列表。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    searchDomains?: Array<string>;

    /**
     * 最大传输单元MTU值(单位:字节)。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    mtu?: int;

    /**
     * 是否支持IPv4。true表示支持IPv4，false表示不支持IPv4。默认值为true。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv4Accepted?: boolean;

    /**
     * 是否支持IPv6。true表示支持IPv6，false表示不支持IPv6。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv6Accepted?: boolean;

    /**
     * 是否支持内置VPN。true表示支持内置VPN，false表示不支持内置VPN。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isLegacy?: boolean;

    /**
     * 是否阻塞模式。true表示是阻塞模式，false表示不是阻塞模式。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isBlocking?: boolean;

    /**
     * string类型表示的包名可以接入VPN网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    trustedApplications?: Array<string>;

    /**
     * string类型表示的包名不能接入VPN网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    blockedApplications?: Array<string>;
  }

  /**
   * 定义系统VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface SysVpnConfig extends VpnConfig {
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnId?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnName?: string;

    /**
     *
     *
     *
     *
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnType?: SysVpnType;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userName?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    password?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    saveLogin?: boolean;

    /**
     * The system user id for the VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userId?: int;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    forwardingRoutes?: string;

    /**
     * The array of addresses for remote server.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    remoteAddresses?: Array<string>;

    /**
     * VPN接口的地址数组
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    localAddresses?: Array<LinkAddress>;

    /**
     * The p12 cert password for the ipsec VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12Password?: string;

    /**
     * The p12 cert data for the ipsec VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12FileData?: Uint8Array;
  }

  /**
   * 定义开放VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface OpenVpnConfig extends SysVpnConfig {
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPort?: string;

    /**
     * The protocol for the openvpn VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnProtocol?: int;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfig?: string;

    /**
     * The auth type for the openvpn VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnAuthType?: int;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    askpass?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfigFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnCaCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnUserCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPrivateKeyFilePath?: string;
  }

  /**
   * 定义IPSec VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface IpsecVpnConfig extends SysVpnConfig {
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    swanctlConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;
  }

  /**
   * 定义L2TP VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface L2tpVpnConfig extends SysVpnConfig {
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecSecrets?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    optionsL2tpdClient?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    xl2tpdConfig?: string;

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    l2tpSharedKey?: string;
  }

  /**
   * 定义VPN网络的类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export enum SysVpnType {
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_MSCHAPV2 = 1,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_PSK = 2,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_RSA = 3,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_PSK = 4,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_RSA = 5,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_PSK = 6,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_RSA = 7,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_HYBRID_RSA = 8,

    /**
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    OPENVPN = 9
  }
}

export default vpn;