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
 * @file VPN增强管理
 * @kit NetworkKit
 */

import type connection from './@ohos.net.connection';
import type _VpnExtensionContext from './application/VpnExtensionContext';
import type Want from './@ohos.app.ability.Want';

/**
 * 三方VPN管理模块，支持三方VPN的启动和停止功能。三方VPN是指由第三方提供的VPN服务，它们通常提供更多的功能和更广泛的网络连接选项，包括更多的安全和隐私功能，以及更全面的定制选项。当前提供三方VPN能力主要用于创建虚拟网卡及配置
 * VPN路由信息，连接隧道过程及内部连接的协议需要应用内部自行实现。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从 API version 11 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * 
 * > 以下模块不支持在VpnExtensionAbility中引用，可能会导致程序异常退出。
 * 
 * > - [@ohos.contact (联系人)]{@link @ohos.contact:contact}
 * 
 * > - [@ohos.geolocation]{@link @ohos.geolocation:geolocation}、
 * > [@ohos.geoLocationManager (位置服务)]{@link @ohos.geoLocationManager:geoLocationManager}
 * 
 * > - [@ohos.multimedia.audio(音频管理)]{@link @ohos.multimedia.audio:audio}
 * 
 * > - [@ohos.multimedia.camera(相机管理)]{@link @ohos.multimedia.camera:camera}
 * 
 * > - [@ohos.telephony.call (拨打电话)]{@link @ohos.telephony.call:call}
 * 
 * > - [@ohos.telephony.sim (SIM卡管理)]{@link @ohos.telephony.sim:sim}
 * 
 * > - [@ohos.telephony.sms (短信服务)]{@link @ohos.telephony.sms:sms}
 *
 * @syscap SystemCapability.Communication.NetManager.Vpn
 * @since 11 dynamic
 */
declare namespace vpnExtension {
  /**
   * 获取网络链接信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  export type LinkAddress = connection.LinkAddress;

  /**
   * 获取网络路由信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  export type RouteInfo = connection.RouteInfo;

  /**
   * VPN扩展的上下文。它允许访问serviceExtension特定资源。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 11 dynamic
   */
  export type VpnExtensionContext = _VpnExtensionContext;

  /**
   * 启动新的三方VPN功能。使用Promise异步回调。
   *
   * @param { Want } want - 指示要启动的信息。
   *     <br> **说明：** 从API version 22开始，支持在VPN首次启动时传递want中的parameters字段。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  function startVpnExtensionAbility(want: Want): Promise<void>;

  /**
   * 停止同一应用程序中的服务。使用Promise异步回调。
   *
   * @param { Want } want - 指示要启动的信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  function stopVpnExtensionAbility(want: Want): Promise<void>;

  /**
   * 设置设备的启用/禁用always on VPN模式。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { boolean } enable - always on启用或禁用。true：always on启用；false：always on禁用。
   * @param { string } bundleName - 设置了always on vpn的包名，是指三方应用的bundleName。
   * @returns { Promise<void> } 无返回值的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   */
  function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>;

  /**
   * 获取always on VPN开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } bundleName - 设置了always on vpn的包名，通常指三方应用的bundleName。
   * @returns { Promise<boolean>} Promise对象。返回true表示应用alway on vpn开启状态；返回false表示关闭状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   */
  function isAlwaysOnVpnEnabled(bundleName: string): Promise<boolean>;

  /**
   * 更新VPN对话框授权信息。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } bundleName - 应用弹框授权的包名，通常指三方应用的bundleName。
   * @returns { boolean } 返回值用来判断是否成功更新vpn弹框授权状态。true：成功更新vpn弹框授权状态；false：没有成功更新vpn弹框授权状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   */
  function updateVpnAuthorizedState(bundleName: string): boolean;
  /**
   * 创建一个三方VPN连接对象。
   * 
   * > **说明：**
   * >
   * > 调用createVpnConnection接口前，需要先调用startVpnExtensionAbility接口启用VPN功能。
   *
   * @param { VpnExtensionContext } context - 指定 context。
   * @returns { VpnConnection } 返回一个VPN连接对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @stagemodelonly
   * @since 11 dynamic
   */
  function createVpnConnection(context: VpnExtensionContext): VpnConnection;

  /**
   * 创建一个VPN观察者对象。用于监听VPN相关事件。
   *
   * @returns { VpnObserver } 返回一个VPN观察者对象。
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createVpnObserver(): VpnObserver;

  /**
   * VPN观察者对象。用于监听VPN相关事件。在调用VpnObserver的方法前，需要先通过[vpnExtension.createVpnObserver]{@link vpnExtension.createVpnObserver}
   * 创建VPN连接对象。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface VpnObserver {
    /**
     * 注册用户授权结果监听器。授权结果在调用[startVpnExtensionAbility]{@link vpnExtension.startVpnExtensionAbility}弹出授权弹窗，用户点击弹窗后通知，仅接收当前
     * VPN的结果。在不需要监听授权结果时可以调用[offAuthorizationResult]{@link vpnExtension.VpnObserver.off}接口取消注册。
     * 
     * > **注意**
     * >
     * > 多次调用该接口时，仅最后一次传入的callback生效。
     *
     * @param { Callback<boolean> } callback - 回调函数，用于返回用户授权结果。true表示用户同意授权，false表示用户拒绝授权。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onAuthorizationResult(callback: Callback<boolean>): void;

    /**
     * 取消注册用户授权结果监听器。
     * 
     * > **注意**
     * >
     * > 多次调用[onAuthorizationResult]{@link vpnExtension.VpnObserver.on}注册监听时，若需取消授权结果监听，需要传最后一次调用时传入的callback，或者不传入参数。
     *
     * @param { Callback<boolean> } [callback] - 监听器回调函数，用于返回用户授权结果。
     *     <br>传入该参数：取消注册指定的监听器。不传参数：取消注册所有已注册的监听器。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offAuthorizationResult(callback?: Callback<boolean>): void;
  }

  /**
   * VPN连接对象。在调用VpnConnection的方法前，需要先通过vpnExt.createVpnConnection创建VPN连接对象。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11 dynamic
   */
  export interface VpnConnection {

    /**
     * 使用config创建一个VPN网络。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 建议在不需要VPN网络的时候配对调用[destroy()]{@link vpnExtension.VpnConnection.destroy()}或
     * > [destroy(vpnId: string)]{@link vpnExtension.VpnConnection.destroy(vpnId: string)}接口销毁启动的VPN网络，并执行资源清理等操作。
     *
     * @param { VpnConfig } config - 指定VPN网络的配置信息。
     * @returns { Promise<int> } 以 Promise 形式返回获取结果，返回指定虚拟网卡的文件描述符 fd。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied, please check the user type.
     * @throws { BusinessError } 2203002 - VPN exist already, please execute destroy first.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    create(config: VpnConfig): Promise<int>;

    /**
     * 生成VPN唯一标识。使用Promise异步回调。
     * 
     * 如需使用系统多VPN能力，需调用该接口生成vpnId，配置到VpnConfig中。
     * 
     * > **注意**
     * >
     * > 当前系统多VPN能力仅支持IPv4。
     *
     * @returns { Promise<string> } 以Promise形式返回获取结果，返回vpnId。
     * @throws { BusinessError } 19900001 - Invalid parameter value.
     * @throws { BusinessError } 19900002 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 20 dynamic
     */
    generateVpnId(): Promise<string>;

    /**
     * 保护套接字不受VPN连接影响，通过该套接字发送的数据将直接基于物理网络收发，因此其流量不会通过VPN转发。使用Promise方式作为异步方法。
     *
     * @param { int } socketFd - 指定保护的 socketfd，该文件描述符通过
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd()}获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    protect(socketFd: int): Promise<void>;

    /**
     * 销毁启动的VPN网络。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    destroy(): Promise<void>;

    /**
     * 根据vpnId销毁指定的VPN网络。使用Promise异步回调。
     *
     * @param { string } vpnId - vpn唯一标识。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 19900001 - Invalid parameter value.
     * @throws { BusinessError } 19900002 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 20 dynamic
     */
    destroy(vpnId: string): Promise<void>;

    /**
     * 保护应用进程不受VPN连接影响，被保护的进程直接基于物理网络收发数据，流量不通过VPN转发。使用Promise异步回调。
     *
     * @returns { Promise<void>} Promise对象，无返回结果。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 22 dynamic
     */
    protectProcessNet(): Promise<void>;

    /**
     * 为VPN网络添加路由
     *
     * @param { RouteInfo[] } routes - VPN接口的路由数组。
     * @param { string } [vpnId] - vpn唯一标识
     * @returns { Promise<void> } 函数返回的promise。
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    addRoute(routes: RouteInfo[], vpnId?: string): Promise<void>;

    /**
     * 删除VPN网络的路由
     *
     * @param { RouteInfo[] } routes - VPN接口的路由数组。
     * @param { string } [vpnId] - vpn唯一标识。
     * @returns { Promise<void> } 函数返回的promise。
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    delRoute(routes: RouteInfo[], vpnId?: string): Promise<void>;
  }

  /**
   * 三方VPN配置参数。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11 dynamic
   */
  export interface VpnConfig {
    /**
     * VPN唯一标识。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 20 dynamic
     */
    vpnId?: string;

    /**
     * VPN虚拟网卡的IP地址。API version 23之前，最多支持64个IP地址；从API version 23开始，最多支持2000个IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    addresses: Array<LinkAddress>;

    /**
     * VPN虚拟网卡的路由信息（API version 23前最多可配置1024条路由；从API version 23开始最多可配置10000条路由）。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    routes?: Array<RouteInfo>;

    /**
     * DNS服务器地址信息。当配置DNS服务器地址后，VPN启动状态下被代理的应用上网时，使用配置的DNS服务器做DNS查询。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    dnsAddresses?: Array<string>;

    /**
     * DNS的搜索域列表。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    searchDomains?: Array<string>;

    /**
     * 最大传输单元MTU值（单位：字节）。取值范围：[576，1500]。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    mtu?: int;

    /**
     * 是否支持IPv4。true表示支持，false表示不支持, 默认值为true。
     * 
     * **注意**：若支持IPv4功能，需要在addresses中配置IPv4类型的IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    isIPv4Accepted?: boolean;

    /**
     * 是否支持IPv6。true表示支持，false表示不支持, 默认值为false。
     * 
     * **注意**：若支持IPv6功能，需要在addresses中配置IPv6类型的IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    isIPv6Accepted?: boolean;

    /**
     * 是否支持内置VPN。true表示支持，false表示不支持, 默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    isInternal?: boolean;

    /**
     * 是否阻塞模式。true表示阻塞模式，false表示非阻塞模式, 默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    isBlocking?: boolean;

    /**
     * 受信任的应用信息列表，string类型表示的包名。当配置该列表后，仅该列表中的应用数据才能根据routes被VPN代理。API version 23前最多可配置64个受信任的应用包名；从API version 23开始最多可配
     * 置256个受信任的应用包名。
     * 
     * **注意**：trustedApplications和blockedApplications列表不能同时配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    trustedApplications?: Array<string>;

    /**
     * 被阻止的应用信息列表，string类型表示的包名。当配置该列表后，该列表中的应用数据不会被VPN代理，其他应用可以根据routes配置被VPN代理。API version 23前最多可配置64个被阻止的应用包名；从API 
     * version 23开始最多可配置256个被阻止的应用包名。
     * 
     * **注意**：trustedApplications和blockedApplications列表不能同时配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @since 11 dynamic
     */
    blockedApplications?: Array<string>;
  }
}

export default vpnExtension;