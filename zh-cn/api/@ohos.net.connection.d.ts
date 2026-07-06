/*
 * Copyright (C) 2022-2026 Huawei Device Co., Ltd.
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
 * @file 网络连接管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 网络连接管理提供管理网络一些基础能力，包括获取默认激活的网络、获取所有激活网络列表、获取网络能力信息等功能。
 * 
 * > **说明：**
 * >
 * > 无特殊说明，接口默认不支持并发。
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace connection {
  /**
   * 定义一个HTTP请求，可以通过[http.createHttp]{@link @ohos.net.http:http.createHttp}创建。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  type HttpRequest = http.HttpRequest;

  /**
   * 定义一个TCPSocket对象，可以通过[socket.constructTCPSocketInstance]{@link @ohos.net.socket:socket.constructTCPSocketInstance}创
   * 建。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  type TCPSocket = socket.TCPSocket;

  /**
   * 定义一个UDPSocket对象，可以通过[socket.constructUDPSocketInstance]{@link @ohos.net.socket:socket.constructUDPSocketInstance}创
   * 建。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  type UDPSocket = socket.UDPSocket;

  /**
   * 创建一个NetConnection对象，可用于监听网络状态。[netSpecifier]{@link connection.NetSpecifier}表示需要监听网络的网络特征；timeout是超时时间（单位：毫秒)；
   * netSpecifier是timeout的必要条件，两者都没有则表示关注默认网络。
   * 
   * > **说明：**
   * >
   * > 若需要监听网络状态，创建一个NetConnection对象后，还需调用[register]{@link connection.NetConnection.register}注册指定网络状态变化的通知。
   *
   * @param { NetSpecifier } [netSpecifier] - 需要监听网络的网络特征，缺省则表示监听默认网络。
   * @param { int } [timeout] - 获取netSpecifier指定网络时的超时时间，传入值需为uint32_t范围内的整数，仅netSpecifier存在时生效，默认值为0。
   *     <br>**说明**：当监听网络不存在时，会尝试激活此网络。若超过设置的超时时间，且注册了网络状态监听，则会触发netUnavailable事件。
   * @returns { NetConnection } 需要监听的网络连接对象的类型。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection;

  /**
   * 获取系统默认使用的网络句柄，包含网络ID。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 系统默认使用的网络，该网络的capabilities必须具备[NET_CAPABILITY_INTERNET]{@link connection.NetCap}且不是VPN类型的网络。
   * >
   * > - 该接口的返回由系统决定，与应用是否指定网络无关。
   * >
   * > - 一般情况下优先级为：以太网（PC）|蓝牙（手表）> WIFI > 蜂窝，特殊情况以实际返回结果为准。
   * >
   * > - [NetHandle]{@link connection.NetHandle}为网络唯一标识，当无网络可用时，返回0。其可用于
   * > [getNetCapabilities]{@link connection.getNetCapabilities}继续查询更多网络信息。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<NetHandle> } callback - 回调函数。当成功获取默认激活网络的网络句柄时，error为undefined，data为默认网络的网络句柄；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function getDefaultNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * 获取系统默认使用的网络句柄，包含网络ID。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 系统默认使用的网络，该网络的capabilities必须具备[NET_CAPABILITY_INTERNET]{@link connection.NetCap}且不是VPN类型的网络。
   * >
   * > - 该接口的返回由系统决定，与应用是否指定网络无关。
   * >
   * > - 一般情况下，优先级：以太网（PC）|蓝牙（手表）> WIFI > 蜂窝，特殊情况以实际返回结果为准。
   * >
   * > - [NetHandle]{@link connection.NetHandle}为网络唯一标识，当无网络可用时，返回0。其可用于
   * > [getNetCapabilities]{@link connection.getNetCapabilities}继续查询更多网络信息。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<NetHandle> } 以Promise形式返回默认网络的网络句柄。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function getDefaultNet(): Promise<NetHandle>;

  /**
   * 获取系统默认使用的网络句柄，包含网络ID。使用同步方式返回。
   * 
   * > **说明：**
   * >
   * > - 系统默认使用的网络，该网络的capabilities必须具备[NET_CAPABILITY_INTERNET]{@link connection.NetCap}且不是VPN类型的网络。
   * >
   * > - 该接口的返回由系统决定，与应用是否指定网络无关。
   * >
   * > - 一般情况下，优先级：以太网（PC）|蓝牙（手表）> WIFI > 蜂窝，特殊情况以实际返回结果为准。
   * >
   * > - [NetHandle]{@link connection.NetHandle}为网络唯一标识，当无网络可用时，返回0。其可用于
   * > [getNetCapabilities]{@link connection.getNetCapabilities}继续查询更多网络信息。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { NetHandle } 以同步方式返回默认网络的网络句柄。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultNetSync(): NetHandle;

  /**
   * 获取所有处于连接状态的网络列表，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<Array<NetHandle>> } callback - 回调函数。当成功获取所有处于连接状态的网络列表时，error为undefined，data为处于激活状态的网络列表；否则为
   *     错误对象。
   *     <br> **说明：** 在Wi-Fi和蜂窝数据开关均开启的情况下，若无应用指定使用蜂窝网络，则仅激活Wi-Fi网络，因此仅返回Wi-Fi的NetHandle。除非有特定应用启动蜂窝网络，才能同时获取Wi-Fi和蜂窝数据的
   *     NetHandle。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void;

  /**
   * 获取所有处于连接状态的网络列表。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<NetHandle>> } Promise对象，返回处于激活状态的网络列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * 获取所有处于连接状态的网络列表。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Array<NetHandle> } 返回所有处于连接状态的网络列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllNetsSync(): Array<NetHandle>;

  /**
   * 获取netHandle对应的网络的连接信息，包含网卡名称、域名、链路信息、路由信息、网络地址及最大传输单元。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @param { AsyncCallback<ConnectionProperties> } callback - 回调函数。当成功获取netHandle对应的网络的连接信息时，error为undefined，data为获取的网络
   *     连接信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getConnectionProperties(netHandle: NetHandle, callback: AsyncCallback<ConnectionProperties>): void;

  /**
   * 获取netHandle对应的网络的连接信息，包含网卡名称、域名、链路信息、路由信息、网络地址及最大传输单元。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 数据网络的句柄。
   * @returns { Promise<ConnectionProperties> } Promise对象，返回网络的连接信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getConnectionProperties(netHandle: NetHandle): Promise<ConnectionProperties>;

  /**
   * 获取netHandle对应的网络的连接信息，包含网卡名称、域名、链路信息、路由信息、网络地址及最大传输单元。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { ConnectionProperties } 返回网络的连接信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getConnectionPropertiesSync(netHandle: NetHandle): ConnectionProperties;

  /**
   * 获取netHandle对应网络的能力集，包含上/下行带宽、网络具体能力、网络类型。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络的句柄。
   * @param { AsyncCallback<NetCapabilities> } callback - 回调函数。当成功获取netHandle对应网络的能力集时，error为undefined，data为获取到的网络能力集；否则
   *     为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void;

  /**
   * 获取netHandle对应网络的能力集，包含上/下行带宽、网络具体能力、网络类型。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { Promise<NetCapabilities> } Promise对象，返回网络的能力集。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>;

  /**
   * 获取netHandle对应网络的能力信息，包含上/下行带宽、网络具体能力、网络类型。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { NetCapabilities } 返回网络的能力集。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getNetCapabilitiesSync(netHandle: NetHandle): NetCapabilities;

  /**
   * 为netHandle对应的网络设置扩展属性，标识网络的安全级别。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 该接口所需的权限目前仅支持PC设备。
   *
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - 网络句柄。
   * @param { string } netExtAttribute - 需要设置的网络扩展属性。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setNetExtAttribute(netHandle: NetHandle, netExtAttribute: string): Promise<void>;

  /**
   * 为netHandle对应的网络设置扩展属性，标识网络的安全级别。使用同步方式返回。
   * 
   * > **说明：**
   * >
   * > 该接口所需的权限目前仅支持PC设备。
   *
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - 网络句柄。
   * @param { string } netExtAttribute - 需要设置的网络扩展属性。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setNetExtAttributeSync(netHandle: NetHandle, netExtAttribute: string): void;

  /**
   * 获取netHandle对应网络的扩展属性，以确定网络的安全级别。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { Promise<string> } Promise对象，返回的网络扩展属性。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getNetExtAttribute(netHandle: NetHandle): Promise<string>;

  /**
   * 获取netHandle对应网络的扩展属性，以确定网络的安全级别。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { string } 以同步方式返回的网络扩展属性。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getNetExtAttributeSync(netHandle: NetHandle): string;

  /**
   * 检查当前默认网络上的数据流量使用是否被计费（例如：WiFi网络不会被计费，蜂窝网络会被计费）。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回当前网络上的数据流量是否被计费。true表示会被计费，false表示不会被计费。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function isDefaultNetMetered(callback: AsyncCallback<boolean>): void;

  /**
   * 检查当前默认网络上的数据流量使用是否被计费（例如：WiFi网络不会被计费，蜂窝网络会被计费）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } Promise对象。返回当前网络上的数据流量是否被计费。true表示会被计费，false表示不会被计费。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function isDefaultNetMetered(): Promise<boolean>;

  /**
   * 检查当前网络上的数据流量使用是否被计费（例如：WiFi网络不会被计费，蜂窝网络会被计费）。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } 表示当前网络上的数据流量是否被计费。true表示会被计费，false表示不会被计费。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function isDefaultNetMeteredSync(): boolean;

  /**
   * 获取当前是否有可用网络，使用callback异步回调。如果有可用网络，可以使用[getDefaultNet]{@link connection.getDefaultNet}获取默认网络句柄。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回当前是否有可用网络。true表示当前有可用网络，false表示当前没有可用网络。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @since 8 dynamic
   * @since 23 static
   */
  function hasDefaultNet(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前是否有可用网络。使用Promise异步回调。如果有可用网络，可以使用[getDefaultNet]{@link connection.getDefaultNet}获取默认网络句柄。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } Promise对象。返回当前是否有可用网络。true表示当前有可用网络，false表示当前没有可用网络。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @since 8 dynamic
   * @since 23 static
   */
  function hasDefaultNet(): Promise<boolean>;

  /**
   * 获取当前是否有可用网络。使用同步方式返回。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } 返回当前是否有可用网络。true表示当前有可用网络，false表示当前没有可用网络。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function hasDefaultNetSync(): boolean;

  /**
   * 开启飞行模式，使用callback异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * 开启飞行模式，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } 无返回值的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableAirplaneMode(): Promise<void>;

  /**
   * 关闭飞行模式，使用callback异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - 回调函数。当关闭飞行模式成功，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * 关闭飞行模式，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } 无返回值的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableAirplaneMode(): Promise<void>;

  /**
   * 向网络管理上报网络处于可用状态。使用callback方式异步回调。
   * 
   * > **说明：**
   * >
   * > 该接口用于浏览器连接portal网络，网络认证成功后，向网络管理上报网络连接成功，网络管理会触发网络探测，更新网络状态。
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄，参考[NetHandle]{@link connection.NetHandle}。
   * @param { AsyncCallback<void> } callback - 回调函数。当向网络管理报告网络处于可用状态成功，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * 向网络管理报告网络处于可用状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄，参考[NetHandle]{@link connection.NetHandle}。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * 向网络管理上报网络处于不可用状态。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄，参考[NetHandle]{@link connection.NetHandle}。
   * @param { AsyncCallback<void> } callback - 回调函数。当向网络管理报告网络处于不可用状态成功时，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * 向网络管理上报网络处于不可用状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * 使用当前默认网络解析主机名以获取所有IP地址。使用callback异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要解析的主机名。
   * @param { AsyncCallback<Array<NetAddress>> } callback - 回调函数。当使用默认网络解析主机名成功获取所有IP地址，error为undefined，data为获取到的所有IP地址；
   *     否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

  /**
   * 使用当前默认网络解析主机名以获取所有IP地址。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要解析的主机名。
   * @returns { Promise<Array<NetAddress>> } Promise对象。返回所有IP地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 26.1.0 static
   */
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;

  /**
   * 使用当前默认网络基于指定IP类型进行DNS解析。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要解析的主机名。例如："www.example.com"。
   * @param { QueryOptions } [option] - 需要查询的IP类型，默认值为FAMILY_TYPE_ALL。
   * @returns { Promise<Array<NetAddress>> } Promise对象，返回查询到的IP地址。返回值中的port字段固定为0，无需关注。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

  /**
   * 获取App绑定的网络句柄。使用callback异步回调。
   *
   * @param { AsyncCallback<NetHandle> } callback - 回调函数。当成功获取App绑定的网络信息时，error为undefined，data为获取到App绑定的网络信息；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function getAppNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * 获取App绑定的网络信息。使用Promise异步回调。
   *
   * @returns { Promise<NetHandle> } 以Promise形式返回App绑定的网络信息。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function getAppNet(): Promise<NetHandle>;

  /**
   * 获取App绑定的网络信息。使用同步方式返回。
   *
   * @returns { NetHandle } 返回App绑定的数据网络。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function getAppNetSync(): NetHandle;

  /**
   * 将App绑定到特定的网络，绑定后App只能通过netHandle对应的网络访问网络。使用callback异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄。
   * @param { AsyncCallback<void> } callback - 回调函数。当成功绑定App到指定网络时，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function setAppNet(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * 将App异步绑定到特定的网络，绑定后App只能通过netHandle对应的网络访问网络。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - 网络句柄。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function setAppNet(netHandle: NetHandle): Promise<void>;

  /**
   * 将指定的网卡接口设置为启用状态，使其可以收发网络数据包，参与网络通信；启用后的网卡接口可以被路由子系统选择用于数据传输；系统可以检测到该网络的存在并尝试建立连接，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifaceName - 网卡名。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use. Only used for system app.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setInterfaceUp(ifaceName: string): Promise<void>;

  /**
   * 获取网络的默认代理配置信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 如果设置了全局代理，则返回全局代理配置信息。
   * >
   * > - 如果进程使用[setAppNet]{@link connection.setAppNet}绑定到指定[NetHandle]{@link connection.NetHandle}对应的网络，则返回
   * > [NetHandle]{@link connection.NetHandle}对应网络的代理配置信息。在其它情况下，将返回默认网络的代理配置信息。
   *
   * @param { AsyncCallback<HttpProxy> } callback - 回调函数。当成功获取网络的默认代理配置信息时，error为undefined，data为网络的默认代理配置信息；否则为错误对象。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * 获取网络默认的代理配置信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 如果设置了全局代理，则返回全局代理配置信息。
   * >
   * > - 如果进程使用[setAppNet]{@link connection.setAppNet}绑定到指定[NetHandle]{@link connection.NetHandle}对应的网络，则返回
   * > [NetHandle]{@link connection.NetHandle}对应网络的代理配置信息。在其它情况下，将返回默认网络的代理配置信息。
   *
   * @returns { Promise<HttpProxy> } 以Promise形式返回网络默认的代理配置信息。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(): Promise<HttpProxy>;

  /**
   * 获取网络的全局代理配置信息，使用callback异步回调。
   *
   * @param { AsyncCallback<HttpProxy> } callback - 回调函数。当成功获取网络的全局代理配置信息时，error为undefined，data为网络的全局代理配置信息；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * 获取网络的全局代理配置信息，使用Promise异步回调。
   *
   * @returns { Promise<HttpProxy> } 以Promise形式返回网络的全局代理配置信息。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * 设置应用级Http代理配置信息。
   * 
   * > **说明：**
   * >
   * > 若需使用本接口所配置的代理信息，则需在[HttpRequestOptions]{@link @ohos.net.http:http.HttpRequestOptions}字段中将usingProxy设置为true以启用代理转
   * > 发。本接口仅负责配置代理规则，不校验代理服务的有效性。
   *
   * @param { HttpProxy } httpProxy - 网络应用级Http代理配置信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid http proxy.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function setAppHttpProxy(httpProxy: HttpProxy): void;

  /**
   * 设置网络全局Http代理配置信息，使用callback异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - 网络全局Http代理配置信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当成功设置网络全局Http代理配置信息时，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * 设置网络全局Http代理配置信息，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - 网络全局Http代理配置信息。
   * @returns { Promise<void> } 无返回值的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy): Promise<void>;

  /**
   * 通知系统需要重新验证全局代理。
   * 收到通知后，系统将重新处理全局代理的认证状态。
   *
   * @permission ohos.permission.INTERNET
   * @returns { Promise<HttpProxy> } 函数返回的Promise。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function refreshGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * 设置系统级代理自动配置（Proxy Auto Config，PAC）脚本地址。
   * 
   * > **说明：**
   * >
   * > 只支持设置脚本地址，不支持解析和启用代理功能，如需设置脚本并启用代理，则可调用[setPacFileUrl]{@link connection.setPacFileUrl}接口。
   *
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacUrl - 需要设置的PAC脚本的地址，该接口不会对脚本地址进行校验。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   * @since 26.1.0 static
   */
  function setPacUrl(pacUrl: string): void;

  /**
   * 获取系统级代理自动配置（PAC）脚本地址。
   *
   * @returns { string } 返回PAC脚本地址。PAC脚本不存在时，抛出2100003错误码。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   * @since 26.1.0 static
   */
  function getPacUrl(): string;

  /**
   * 设置PAC脚本（Proxy Auto-Configuration Script，代理自动配置脚本）的URL地址，并启动PAC代理能力，比如：http://127.0.0.1:21998/PacProxyScript.pac 。可通
   * 过调用[findProxyForUrl]{@link connection.findProxyForUrl}解析URL地址来获取代理信息。
   * 
   * > **注意：**
   * >
   * > 1、本接口当前在PC/2in1<sup>20+</sup>、Phone<sup>23+</sup>、Tablet<sup>23+</sup>、TV<sup>23+</sup>设备上支持解析脚本并启用PAC代理能力，
   * > Wearable设备类型上只保存脚本地址，不会启用PAC代理能力。
   * 
   * > 2、该接口不会校验URL真实性，在启动PAC代理时，若URL有误，则启动代理失败，返回2100002错误码。
   *
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacFileUrl - 当前PAC脚本的URL地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setPacFileUrl(pacFileUrl: string): void;

  /**
   * 获取当前PAC脚本的URL地址。
   *
   * @returns { string } 当前PAC脚本的URL地址，如果没有PAC脚本则返回空字符串。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getPacFileUrl(): string;

  /**
   * 通过设置的PAC脚本，解析指定的URL代理地址，返回对应的PAC代理信息。
   * 
   * > **说明：**
   * >
   * > 1、可通过 [setPacFileUrl]{@link connection.setPacFileUrl} 或 [setPacUrl]{@link connection.setPacUrl} 设置PAC脚本。
   * 
   * > 2、如果调用本接口前未设置PAC脚本，则返回空字符串。
   * 
   * > 3、由于[setPacFileUrl]{@link connection.setPacFileUrl}接口支持PC/2in1<sup>20+</sup>、Phone<sup>23+</sup>、Tablet<sup>23+</
   * > sup>、TV<sup>23+</sup>设备解析脚本并启用PAC代理能力，因此本接口支持以上设备获取PAC代理信息。 Wearable设备调用本接口功能不生效，返回空字串。
   *
   * @param { string } url - 要查找代理信息的URL。
   * @returns { string } 返回代理信息。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function findProxyForUrl(url: string): string;

  /**
   * 设置代理模式。使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { ProxyMode } mode - 指定的代理模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setProxyMode(mode: ProxyMode): Promise<void>;

  /**
   * 获取当前的代理模式。使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<ProxyMode> } Promise对象，返回当前代理模式。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getProxyMode(): Promise<ProxyMode>;

  /**
   * 为当前应用程序添加自定义host和对应的IP地址的映射。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 不需要时可调用[removeCustomDnsRule]{@link connection.removeCustomDnsRule}删除某一条自定义规则或调用
   * > [clearCustomDnsRules]{@link connection.clearCustomDnsRules}删除当前应用程序的所有的自定义DNS规则 。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要自定义解析的主机名。
   * @param { Array<string> } ip - 主机名所映射的IP地址列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当为当前应用程序添加自定义host和对应的ip地址的映射成功，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function addCustomDnsRule(host: string, ip: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 为当前应用程序添加自定义host和对应的IP地址的映射。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 不需要时可调用[removeCustomDnsRule]{@link connection.removeCustomDnsRule}删除某一条自定义规则或调用
   * > [clearCustomDnsRules]{@link connection.clearCustomDnsRules}删除当前应用程序的所有的自定义DNS规则 。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要自定义解析的主机名。
   * @param { Array<string> } ip - 主机名所映射的IP地址列表。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function addCustomDnsRule(host: string, ip: Array<string>): Promise<void>;

  /**
   * 删除当前应用程序中对应host的自定义DNS规则。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 可调用[addCustomDnsRule]{@link connection.addCustomDnsRule}添加自定义规则。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要删除自定义DNS规则的主机名。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除当前应用程序中对应host的自定义DNS规则成功，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function removeCustomDnsRule(host: string, callback: AsyncCallback<void>): void;

  /**
   * 删除当前应用程序中对应host的自定义DNS规则。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 可调用[addCustomDnsRule]{@link connection.addCustomDnsRule}添加自定义规则。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - 需要删除自定义DNS规则的主机名。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function removeCustomDnsRule(host: string): Promise<void>;

  /**
   * 删除当前应用程序的所有的自定义DNS规则。使用callback异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { AsyncCallback<void> } callback - 回调函数。当删除当前应用程序的所有的自定义DNS规则成功，error为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function clearCustomDnsRules(callback: AsyncCallback<void>): void;

  /**
   * 删除当前应用程序的所有的自定义DNS规则。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function clearCustomDnsRules(): Promise<void>;

  /**
   * 出厂重置网络设置，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } 无返回值的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): Promise<void>;

  /**
   * 用于查询发起指定网络连接的应用UID。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 该接口仅限在VPN应用中调用。
   * >
   * > - 调用接口时请设置local和remote参数的端口号。若未设置端口号或将端口号设置为0，接口会基于其他参数筛选出符合条件的UID的集合，并从中返回一个匹配的UID。
   * >
   * > - protocol参数为PROTO_TYPE_UDP时，若通过local，remote参数未筛选出符合条件的UID，则仅基于local参数筛选并返回匹配的UID。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - 网络协议的类型。
   * @param { NetAddress } local - 源网络地址。
   * @param { NetAddress } remote - 目标网络地址。
   * @returns { Promise<int> } Promise对象，返回应用程序的UID。如果不存在匹配的UID则返回-1。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<int>;

  /**
   * 用于查询发起指定网络连接的应用UID。使用同步方式返回。
   * 
   * > **说明：**
   * >
   * > - 该接口仅限在VPN应用中调用。
   * >
   * > - 调用接口时请设置local和remote参数的端口号。若未设置端口号或将端口号设置为0，接口会基于其他参数筛选出符合条件的UID的集合，并从中返回一个匹配的UID。
   * >
   * > - protocol参数为PROTO_TYPE_UDP时，若通过local，remote参数未筛选出符合条件的UID，则仅基于local参数筛选并返回匹配的UID。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - 网络协议的类型。
   * @param { NetAddress } local - 源网络地址。
   * @param { NetAddress } remote - 目标网络地址。
   * @returns { int } 返回应用程序的UID。如果不存在匹配的UID则返回-1。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int;

  /**
   * 在指定的以太网网卡上，创建一个由vlanId指定的虚拟局域网。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 本接口当前仅支持PC设备，其他设备类型上调用本接口返回错误码2100002。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - 网卡名。
   * @param { int } vlanId - vlan标识符，取值范围[0,4094]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function createVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * 删除指定以太网网卡上由vlanId指定的虚拟局域网。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 本接口当前仅支持PC设备，其他设备类型上调用本接口返回错误码2100002。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - 网卡名。
   * @param { int } vlanId - vlan标识符，取值范围[0,4094]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function destroyVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * 为以太网网卡上对应vlanId的虚拟局域网配置指定的IP地址及子网掩码。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 本接口当前仅支持PC设备，其他设备类型上调用本接口返回错误码2100002。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - 网卡名。
   * @param { int } vlanId - vlan标识符，取值范围[0,4094]。
   * @param { LinkAddress } address - 链路信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function addVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * 从以太网网卡上对应vlanId的虚拟局域网中，删除已配置的IP地址及子网掩码。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 本接口当前仅支持PC设备，其他设备类型上调用本接口返回错误码2100002。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - 网卡名。
   * @param { int } vlanId - vlan标识符，取值范围[0,4094]。
   * @param { LinkAddress } address - 链路信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @throws { BusinessError } 2100401 - The input IP address is not found.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function deleteVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * 获取本地设备IP邻居表条目信息，包括IPv4和IPv6，每个条目信息包括IP地址、MAC地址、网卡名。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 该接口获取IP邻居表的缓存的数据，并非局域网内所有连接的数据。
   * >
   * > 开发者可使用此接口排查网络异常、解析IP地址与MAC地址映射。
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<Array<NetIpMacInfo>> } Promise对象，返回ip邻居表条目信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  function getIpNeighTable(): Promise<Array<NetIpMacInfo>>;

  /**
   * 将Unicode编码形式的主机名转换为ASCII编码形式，并可通过可选的转换流程参数（conversionProcess）控制转换行为。
   * 
   * > **说明：**
   * >
   * > conversionProcess设置为NO_CONFIGURATION时，只能转换已正式分配含义的Unicode字符所对应的域名。
   * 
   * > conversionProcess设置为ALLOW_UNASSIGNED时，可以转换包含尚未分配含义的Unicode字符的域名。
   * 
   * > conversionProcess设置为USE_STD3_ASCII_RULES时，会在转换过程中强制按照STD-3 ASCII规则（即RFC 1123标准）对生成的ASCII域名进行检查。
   * 
   * > 传入参数中的数字和英文不做转码。
   *
   * @param { string } host - 要转换的主机名（host）。每个标签（点分隔的部分）长度不超过63字节。
   * @param { ConversionProcess } [flag] - 转换流程参数，默认值为NO_CONFIGURATION。
   * @returns { string } 返回转换结果。
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getDnsAscii(host: string, flag?: ConversionProcess): string;

  /**
   * 使用Punycode编码方式，将ASCII编码形式的主机名转换为Unicode编码形式，并通过可选的conversionProcess参数控制转换行为。
   *
   * @param { string } host - 要转换的主机名（host）。
   * @param { ConversionProcess } [flag] - 转换流程参数，默认值为NO_CONFIGURATION。
   * @returns { string } 返回转换结果。
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getDnsUnicode(host: string, flag?: ConversionProcess): string;

  /**
   * 获取系统当前监听的所有TCP、UDP端口信息，以及监听端口进程的PID、UID，支持IPv4和IPv6。  
   * 
   * > **说明：**
   * >
   * > 该接口获取系统当前监听的TCP、UDP端口信息，详细字段包括：
   * >
   * >   TCP端口字段：本地地址、本地端口、远端地址、远端端口、TCP连接状态、进程PID、进程UID
   * >
   * >   UDP端口字段：本地地址、本地端口、进程PID 、进程UID
   *
   * @permission ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<NetPortStatesInfo> } Promise对象，返回系统当前监听的TCP、UDP端口信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function getSystemNetPortStates(): Promise<NetPortStatesInfo>;

  /**
   * 查询网络路由跟踪信息，使用Promise方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 应用调用该接口需申请精确位置权限。<!--RP1-->根据[申请位置权限开发指导](docroot://device/location/location-permission-guidelines.md)<!--RP1End-
   * > ->，调用方需同时申请ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION。
   *
   * @permission ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and
   *     ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { string } destination - 目标域名或IP地址，例如www.example.com、8.8.8.8。
   * @param { TraceRouteOptions } [option] - 路由跟踪的选项参数，缺省则使用默认配置。
   * @returns { Promise<TraceRouteInfo[]> } Promise对象，返回路由跟踪信息数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>;

  /**
   * 查询网络探测结果。若出现异常（例如断网），导致发送请求失败，则接口会立即返回，不再进行后续探测。本接口使用Promise方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 此接口用于对目标主机进行一段持续时间的网络探测，以获取丢包率和RTT信息。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } destination - 目标域名或IP地址，例如www.example.com、8.8.8.8。
   * @param { int } duration - 探测持续时间，单位为秒，取值范围[1, 1000]。探测间隔为1秒。若未出现异常（例如断网），探测时间到期后返回探测结果。该字段表示探测持续总时长，设置过长可能导致长时间占用应用
   *     线程资源。
   * @returns { Promise<ProbeResultInfo> } Promise对象，返回探测结果信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryProbeResult(destination: string, duration: int): Promise<ProbeResultInfo>;

  /**
   * 系统当前监听的TCP、UDP端口信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export interface NetPortStatesInfo {
    /**
     * 系统当前监听的TCP信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>;

    /**
     * 系统当前监听的UDP信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    udpPortStatesInfo?: Array<UdpNetPortStatesInfo>;
  }

  /**
   * TCP端口状态信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export interface TcpNetPortStatesInfo {
    /**
     * TCP网络本地IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpLocalIp: string;
    /**
     * TCP网络本地端口，取值范围[0, 65535]。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpLocalPort: int;
    /**
     * TCP网络远程IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpRemoteIp: string;
    /**
     * TCP网络远程端口，取值范围[0, 65535]。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpRemotePort: int;
    /**
     * 监听该TCP端口的用户UID。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpUid: int;
    /**
     * 监听该TCP端口的进程PID。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpPid: int;
    /**
     * TCP网络状态。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tcpState: TcpState;
  }

  /**
   * UDP端口状态信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export interface UdpNetPortStatesInfo {
    /**
     * UDP网络本地IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    udpLocalIp: string;
    /**
     * UDP网络本地端口，取值范围[0, 65535]。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    udpLocalPort: int;
    /**
     * 监听该UDP端口的用户UID。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    udpUid: int;
    /**
     * 监听该UDP端口的进程PID。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    udpPid: int;
  }

  /**
   * TCP状态。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export enum TcpState {
    /**
     * 连接已建立，可正常收发数据。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_ESTABLISHED = 1,
    /**
     * 客户端发送SYN，等待服务端ACK+SYN（三次握手的第一步）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_SYN_SENT = 2,
    /**
     * 服务端接收SYN并发送ACK+SYN，等待客户端ACK（三次握手的第二步）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_SYN_RECV = 3,
    /**
     * 主动端发送FIN，等待对方ACK。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_FIN_WAIT1 = 4,
    /**
     * 主动端接收FIN的ACK，等待对方ACK。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_FIN_WAIT2 = 5,
    /**
     * 主动端接收对方FIN并回复ACK，等待2倍最大报文段生存时间后彻底释放。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_TIME_WAIT = 6,
    /**
     * 初始/关闭状态，无连接。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_CLOSE = 7,
    /**
     * 被动端接收FIN并发送ACK，等待对方FIN。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_CLOSE_WAIT = 8,
    /**
     * 被动端发送FIN后，等待对方ACK。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_LAST_ACK = 9,
    /**
     * 服务端监听，等待客户端连接。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_LISTEN = 10,
    /**
     * 双方同时发送FIN，互相等待ACK。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    TCP_CLOSING = 11
  }

  /**
   * ASCII/Unicode转码转换流程参数的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export enum ConversionProcess {
    /**
     * 仅允许转换已分配的Unicode代码点的域名（Unicode为每个字符分配一个唯一的数字，这个数字就叫做代码点）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    NO_CONFIGURATION = 0,
    /**
     * 允许转换包含未分配Unicode代码点的域名(在Unicode字符集中，并非所有代码点都已分配字符，即未分配Unicode代码点)。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    ALLOW_UNASSIGNED = 1,
    /**
     * 在转换过程中，强制使用STD-3 ASCII规则（即RFC 1123标准）检查生成的ASCII域名。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    USE_STD3_ASCII_RULES = 2
  }

  /**
   * 网络连接对象类型。
   * 
   * > **说明：**
   * >
   * > （1）设备从无网络状态转变为有网络状态时，将触发netAvailable事件、netCapabilitiesChange事件和netConnectionPropertiesChange事件；
   * >
   * > （2）接收到netAvailable事件后，若设备从有网络状态转变为无网络状态，将触发netLost事件；
   * >
   * > （3）若未接收到netAvailable事件，则将直接接收到netUnavailable事件；
   * >
   * > （4）设备从WiFi网络切换至蜂窝网络时，将先触发netLost事件（WiFi丢失），随后触发netAvailable事件（蜂窝可用）。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetConnection {
    /**
     * 订阅网络可用事件。此接口需在调用register接口之前调用。若无需接收网络状态变化的回调通知，应使用unregister取消订阅默认的网络状态变化通知。
     *
     * @param { 'netAvailable' } type - 订阅事件，固定为'netAvailable'。
     *     <br>netAvailable：数据网络可用事件。
     * @param { Callback<NetHandle> } callback - 回调函数，返回数据网络句柄。
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netAvailable events.
     *
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onNetAvailable(callback: Callback<NetHandle>): void;

    /**
     * 订阅网络阻塞状态事件。此接口需要在调用register接口之前调用。若无需接收网络状态变化的回调通知，应使用unregister取消订阅默认的网络状态变化通知。
     *
     * @param { 'netBlockStatusChange' } type - 订阅事件，固定为'netBlockStatusChange'。<br/>netBlockStatusChange：网络阻塞状态事件。
     * @param { Callback<{ netHandle: NetHandle, blocked: boolean }> } callback - Callback used to return the
     *     result. [since 8 - 10]
     * @param { Callback<NetBlockStatusInfo> } callback - 回调函数，获取网络阻塞状态信息。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    on(type: 'netBlockStatusChange', callback: Callback<NetBlockStatusInfo>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     * @param { Callback<NetBlockStatusInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    onNetBlockStatusChange(callback: Callback<NetBlockStatusInfo>): void;

    /**
     * 订阅网络能力变化事件。此接口要在register接口调用前调用，不需要网络状态变化回调通知时，使用unregister取消订阅默认网络状态变化的通知。
     *
     * @param { 'netCapabilitiesChange' } type - 订阅事件，固定为'netCapabilitiesChange'。<br/>netCapabilitiesChange：网络能力变化事件。
     * @param { Callback<NetCapabilityInfo> } callback - 回调函数，返回数据网络句柄(netHandle)和网络的能力信息(netCap)。
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netCapabilitiesChange', callback: Callback<NetCapabilityInfo>): void;

    /**
     * Registers a listener for **netCapabilitiesChange** events.
     *
     * @param { Callback<NetCapabilityInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onNetCapabilitiesChange(callback: Callback<NetCapabilityInfo>): void;

    /**
     * 订阅网络连接信息变化事件。此接口要在register接口调用前调用，不需要网络状态变化回调通知时，使用unregister取消订阅默认网络状态变化的通知。
     *
     * @param { 'netConnectionPropertiesChange' } type - 订阅事件，固定为'netConnectionPropertiesChange'。<br/>
     *     netConnectionPropertiesChange：网络连接信息变化事件。
     * @param { Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }> } callback - Callback
     *     used to return the result. [since 8 - 10]
     * @param { Callback<NetConnectionPropertyInfo> } callback - 回调函数，获取网络连接属性信息。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    on(type: 'netConnectionPropertiesChange', callback: Callback<NetConnectionPropertyInfo>): void;

    /**
     * Registers a listener for netConnectionPropertiesChange events.
     *
     * @param { Callback<NetConnectionPropertyInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 26.1.0 static
     */
    onNetConnectionPropertiesChange(callback: Callback<NetConnectionPropertyInfo>): void;

    /**
     * 订阅网络丢失事件。此接口要在register接口调用前调用，不需要网络状态变化回调通知时，使用unregister取消订阅默认网络状态变化的通知。
     *
     * @param { 'netLost' } type - 订阅事件，固定为'netLost'。<br/>netLost：网络严重中断或正常断开事件。
     * @param { Callback<NetHandle> } callback - 回调函数，数据网络句柄(netHandle)。
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netLost', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for **netLost** events.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetLost(callback: Callback<NetHandle>): void;

    /**
     * 订阅网络不可用事件。此接口要在register接口调用前调用，不需要网络状态变化回调通知时，使用unregister取消订阅默认网络状态变化的通知。
     *
     * @param { 'netUnavailable' } type - 订阅事件，固定为'netUnavailable'。<br/>netUnavailable：网络不可用事件。
     * @param { Callback<void> } callback - 回调函数，无返回结果。
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Registers a listener for netUnavailable events.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetUnavailable(callback: Callback<void>): void;

    /**
     * 订阅指定网络状态变化的通知。如需监听特定事件，确保调用on监听事件后再调用register进行注册。
     * 
     * > **注意：**
     * >
     * > 使用完register接口后需要及时调用unregister取消注册。
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { AsyncCallback<void> } callback - 回调函数。当订阅指定网络状态变化的通知成功，error为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101008 - The callback already exists.
     * @throws { BusinessError } 2101022 - The number of requests exceeded the maximum allowed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    register(callback: AsyncCallback<void>): void;

    /**
     * 取消订阅默认网络状态变化的通知。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当取消订阅指定网络状态变化的通知成功，error为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied. [since 8 - 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101007 - The callback does not exist.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    unregister(callback: AsyncCallback<void>): void;
  }

  /**
   * 提供承载数据网络能力的实例。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetSpecifier {
    /**
     * 存储数据网络的传输能力和承载类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    netCapabilities: NetCapabilities;

    /**
     * 网络标识符，蜂窝网络的标识符是"slot0"（对应SIM卡1）、"slot1"（对应SIM卡2）。从API12开始可以通过传递注册的WLAN热点信息表示应用希望激活的指定的WLAN网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    bearerPrivateIdentifier?: string;
  }

  /**
   * 提供承载数据网络能力的实例。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NetCapabilityInfo {
    /**
     * 网络句柄。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;

    /**
     * 存储数据网络的传输能力和承载类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    netCap: NetCapabilities;
  }

  /**
   * 网络句柄。
   * 
   * 在调用NetHandle的方法之前，需要先获取NetHandle对象。例如可通过[getDefaultNet]{@link connection.getDefaultNet}获取系统当前默认网络的网络句柄。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetHandle {
    /**
     * 网络ID，取值为0代表没有默认网络，其余有效取值必须大于等于100。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * 将TCPSocket或UDPSocket绑定到当前NetHandle对应的网络。使用callback异步回调。
     *
     * @param { TCPSocket | UDPSocket } socketParam - 待绑定的TCPSocket或UDPSocket对象。
     * @param { AsyncCallback<void> } callback - 回调函数。当TCPSocket或UDPSocket成功绑定到当前网络，error为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;

    /**
     * 将TCPSocket或UDPSocket绑定到当前NetHandle对应的网络。使用Promise异步回调。
     *
     * @param { TCPSocket | UDPSocket } socketParam - 待绑定的TCPSocket或UDPSocket对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * 使用当前NetHandle对应的网络解析主机名获取到的所有IP地址。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - 需要解析的主机名。例如："www.example.com"。
     * @param { AsyncCallback<Array<NetAddress>> } callback - 回调函数。当使用对应网络解析主机名成功获取所有IP地址，error为undefined，data为获取到的所有IP地
     *     址；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 15]
     * @since 8 dynamic
     * @since 26.1.0 static
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

    /**
     * 使用当前NetHandle对应的网络解析主机名获取到的所有IP地址。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - 需要解析的主机名。例如："www.example.com"。
     * @returns { Promise<Array<NetAddress>> } Promise对象，返回所有IP地址。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 15]
     * @since 8 dynamic
     * @since 26.1.0 static
     */
    getAddressesByName(host: string): Promise<Array<NetAddress>>;

    /**
     * 使用当前NetHandle对应的网络基于指定IP类型进行DNS解析。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - 需要解析的主机名。例如："www.example.com"。
     * @param { QueryOptions } [option] - 需要查询的IP类型。
     * @returns { Promise<Array<NetAddress>> } Promise对象，返回查询到的IP地址。返回值中的port字段固定为0，无需关注。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

    /**
     * 使用当前NetHandle对应的网络解析主机名获取到的第一个IP地址。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - 需要解析的主机名。例如："www.example.com"。
     * @param { AsyncCallback<NetAddress> } callback - 回调函数。当使用对应网络解析主机名获取第一个IP地址成功，error为undefined，data为获取的第一个IP地址；否则为错
     *     误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 26.1.0 static
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;

    /**
     * 使用当前NetHandle对应的网络解析主机名获取到的第一个IP地址。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - 需要解析的主机名。例如："www.example.com"。
     * @returns { Promise<NetAddress> } Promise对象，返回获取到的第一个IP地址。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 26.1.0 static
     */
    getAddressByName(host: string): Promise<NetAddress>;
  }

  /**
   * 网络的能力集。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetCapabilities {
    /**
     * 上行（设备到网络）带宽，单位(kb/s)。0表示无法评估当前网络带宽。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkUpBandwidthKbps?: int;

    /**
     * 下行（网络到设备）带宽，单位(kb/s)。0表示无法评估当前网络带宽。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkDownBandwidthKbps?: int;

    /**
     * 网络具体能力。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    networkCap?: Array<NetCap>;

    /**
     * 网络类型。数组里面只包含了一种网络类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    bearerTypes: Array<NetBearType>;
  }

  /**
   * 网络连接信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetConnectionPropertyInfo {
    /**
     * 网络句柄。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * 网络连接信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    connectionProperties: ConnectionProperties;
  }

  /**
   * 获取网络状态信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetBlockStatusInfo {
    /**
     * 网络句柄。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * 标识当前网络是否是堵塞状态。true：标识当前网络是堵塞状态；false：标识当前网络不是堵塞状态。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    blocked: boolean;
  }

  /**
   * 需要查询的IP类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export interface QueryOptions {
    /**
     * 需要查询的具体IP地址类型，默认值为FAMILY_TYPE_ALL。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    family?: FamilyType;
  }

  /**
   * 需要查询的具体IP地址类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export enum FamilyType {
    /**
     * 查询所有IPv4和IPv6地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    FAMILY_TYPE_ALL = 0,
    /**
     * 仅查询IPv4地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    FAMILY_TYPE_IPV4 = 1,
    /**
     * 仅查询IPv6地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    FAMILY_TYPE_IPV6 = 2
  }

  /**
   * 网络具体能力。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum NetCap {
    /**
     * 表示网络可以访问运营商的MMSC（Multimedia Message Service，多媒体短信服务）发送和接收彩信。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * 表示网络流量未被计费。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * 表示该网络应具有访问Internet的能力，此能力由网络提供者设置，但该网络访问Internet的连通性并未被网络管理成功验证。网络连通性可以通过NET_CAPABILITY_VALIDATED和
     * NET_CAPABILITY_CHECKING_CONNECTIVITY判断。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * 表示网络不使用VPN（Virtual Private Network，虚拟专用网络）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * 表示网络管理通过该网络与华为云地址成功建立连接，此能力由网络管理模块设置。
     * 
     * **注意：** 网络管理可能会与华为云地址建立连接失败，导致网络能力不具备此标记位，但不完全代表该网络无法访问互联网。另外，对于新完成连接的网络，由于网络正在进行连通性验证，此值可能无法反映真实的验证结果。对此，应用可以通过
     * NET_CAPABILITY_CHECKING_CONNECTIVITY<sup>12+</sup>检查网络是否正在检测连通性。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_VALIDATED = 16,
    /**
     * 表示系统发现该网络存在强制网络门户，需要用户登陆认证，该能力由网络管理模块设置。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_PORTAL = 17,

    /**
     * 表示网络管理正在检验当前网络的连通性，此值会在网络连接时设置。当此值存在时，NET_CAPABILITY_VALIDATED的值不准确，连通性检测结束后不再设置，此时可以通过判断NetCap是否包含
     * NET_CAPABILITY_VALIDATED判断连通性。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_CHECKING_CONNECTIVITY = 31
  }

  /**
   * 网络类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum NetBearType {
    /**
     * 蜂窝网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_CELLULAR = 0,

    /**
     * Wi-Fi网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_WIFI = 1,

    /**
     * 蓝牙网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_BLUETOOTH = 2,

    /**
     * 以太网网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_ETHERNET = 3,

    /**
     * VPN网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_VPN = 4
  }

  /**
   * 表示代理模式的枚举。使用Promise异步回调。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export enum ProxyMode {
    /**
     * 关闭代理模式。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    PROXY_MODE_OFF = 0,

    /**
     * 自动代理模式。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    PROXY_MODE_AUTO = 1
  }

  /**
   * SOCKS5代理的DNS查询策略配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum Socks5DnsStrategy {
    /**
     * 使用SOCKS5代理时，DNS解析由系统执行。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_MODE = 0,

    /**
     * 使用SOCKS5代理时，DNS解析由代理服务器执行。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PROXY_MODE = 1
  }

  /**
   * 网络连接信息。
   * 
   * > **注意：**
   * >
   * > linkAddresses、routes和dnses可能为空，需要做好空值保护，建议使用前先判断对象是否存在。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface ConnectionProperties {
    /**
     * 网卡名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    interfaceName: string;
    /**
     * 域名。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    domains: string;
    /**
     * 链路信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkAddresses: Array<LinkAddress>;

    /**
     * 网络地址，参考[NetAddress]{@link connection.NetAddress}。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    dnses: Array<NetAddress>;

    /**
     * 路由信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    routes: Array<RouteInfo>;

    /**
     * 最大传输单元。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    mtu: int;

    /**
     * 当前网络的IPv4是否可用。true：当IPv4地址有效，且存在IPv4的默认路由时，认为IPv4可用；false：当IPv4地址无效，或者不存在IPv4的默认路由时，认为IPv4不可用。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    isIPv4LinkValid?: boolean;
    /**
     * 当前网络的IPv6是否可用。true：当IPv6地址有效，且存在IPv6的默认路由时，认为IPv6可用；false：当IPv6地址无效，或者不存在IPv6的默认路由时，认为IPv6不可用。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    isIPv6LinkValid?: boolean;
  }

  /**
   * 网络路由信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface RouteInfo {
    /**
     * 网卡名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    interface: string;

    /**
     * Network card name.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    iface: string;

    /**
     * 目的地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    destination: LinkAddress;

    /**
     * 网关地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    gateway: NetAddress;

    /**
     * 是否有网关。true：有网关；false：无网关。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    hasGateway: boolean;

    /**
     * 是否为默认路由。true：默认路由；false：非默认路由。
     * 
     * **说明：** IPv4默认路由是指目的地址为0.0.0.0/0的路由；IPv6默认路由是指目的地址为::/0的路由。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    isDefaultRoute: boolean;

    /**
     * 是否为排除路由。true表示排除路由，false表示非排除路由，默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    isExcludedRoute?: boolean;
  }

  /**
   * 网络链路信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface LinkAddress {
    /**
     * 链路地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    address: NetAddress;
    /**
     * 链路地址前缀的长度。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    prefixLength: int;
  }

  /**
   * 网络地址。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetAddress {
    /**
     * 地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * IPv4 = 1，IPv6 = 2，默认IPv4。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * 端口，取值范围[0, 65535]，默认值为0。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    port?: int;
  }

  /**
   * 网络代理配置信息
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface HttpProxy {
    /**
     * 代理服务器主机名。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    host: string;

    /**
     * 主机端口。取值范围[0,65535]。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    port: int;

    /**
     * 使用代理的用户名。
     * 
     * **说明:** 需同时设置password参数才会生效。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    username?: string;

    /**
     * 使用代理的用户密码。
     * 
     * **说明:** 需同时设置username参数才会生效。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    password?: string;

    /**
     * 不使用代理的主机名列表，主机名支持域名、IP地址以及通配符形式，详细匹配规则如下：
     * 
     * 1、域名匹配规则：
     * 
     * （1）完全匹配：代理服务器主机名只要与列表中的任意一个主机名完全相同，就可以匹配。
     * 
     * （2）包含匹配：代理服务器主机名只要包含列表中的任意一个主机名，就可以匹配。
     * 
     * 例如，如果在主机名列表中设置了 “ample.com”，则  “ample.com”、“www.ample.com”、“ample.com:80”都会被匹配，而 “www.example.com”、“ample.com.org
     * ”则不会被匹配。
     * 
     * 2、IP地址匹配规则：代理服务器主机名只要与列表中的任意一个IP地址完全相同，就可以匹配。
     * 
     * 3、域名跟IP地址可以同时添加到列表中进行匹配。
     * 
     * 4、单个“*”是唯一有效的通配符，当列表中只有通配符时，将与所有代理服务器主机名匹配，表示禁用代理。通配符只能单独添加，不可以与其他域名、IP地址一起添加到列表中，否则通配符将不生效。
     * 
     * 5、匹配规则不区分主机名大小写。
     * 
     * 6、匹配主机名时，不考虑http和https等协议前缀。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionList: Array<string>;
  }

  /**
   * SOCKS5代理配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface Socks5Proxy {
    /**
     * 代理服务器主机名。
     * 
     * **说明:** 当该项为空字符串时，视为未配置SOCKS5代理。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    host: string;

    /**
     * 主机端口。取值范围[0, 65535]。
     * 
     * **说明:** 当参数不在上述取值范围时，视为未配置SOCKS5代理。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    port: int;

    /**
     * 使用代理的用户名。
     * 
     * **说明:** 需同时设置password参数才会生效。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    username?: string;

    /**
     * 使用代理的用户密码。
     * 
     * **说明:** 需同时设置username参数才会生效。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    password?: string;

    /**
     * 指定DNS解析由系统执行还是由代理服务器执行。
     * 
     * **说明:** 当此项未指定时，如果host有`socks5h://`协议前缀，则DNS解析由代理服务器执行，否则DNS解析由系统执行。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dnsStrategy?: Socks5DnsStrategy;

    /**
     * 不使用代理的主机名列表，主机名支持域名、IP地址以及通配符形式，详细匹配规则如下：
     * 
     * 1、域名匹配规则：
     * 
     * （1）完全匹配：代理服务器主机名只要与列表中的任意一个主机名完全相同，就可以匹配。
     * 
     * （2）包含匹配：代理服务器主机名只要包含列表中的任意一个主机名，就可以匹配。
     * 
     * 例如，如果在主机名列表中设置了“example.com”，则“example.com”、“www.example.com”、“example.com:80”都会被匹配，而 “www.myexample.com”、“
     * myexample.com.org”则不会被匹配。
     * 
     * 2、IP地址匹配规则：代理服务器主机名只要与列表中的任意一个IP地址完全相同，就可以匹配。
     * 
     * 3、域名跟IP地址可以同时添加到列表中进行匹配。
     * 
     * 4、单个“*”是唯一有效的通配符，当列表中只有通配符时，将与所有代理服务器主机名匹配，表示禁用代理。通配符只能单独添加，不可以与其他域名、IP地址一起添加到列表中，否则通配符将不生效。
     * 
     * 5、匹配规则不区分主机名大小写。
     * 
     * 6、匹配主机名时，不考虑http、https、socks5、socks5h等协议前缀。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    exclusionList?: Array<string>;
  }

  /**
   * IP邻居表条目信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  export interface NetIpMacInfo {
    /**
     * IP地址相关信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    ipAddress: NetAddress;

    /**
     * 网卡名。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    iface: string;

    /**
     * MAC地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    macAddress: string;
  }

  /**
   * 网络协议类型的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export enum ProtocolType {
    /**
     * TCP网络协议。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    PROTO_TYPE_TCP = 6,
    /**
     * UDP网络协议。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    PROTO_TYPE_UDP = 17
  }

  /**
   * 网络探测数据包类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PacketsType {
    /**
     * ICMP数据包类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETCONN_PACKETS_ICMP = 0,

    /**
     * UDP数据包类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETCONN_PACKETS_UDP = 1
  }

  /**
   * 路由跟踪的选项。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TraceRouteOptions {
    /**
     * 最大跳数，取值范围[1, 30]，默认值为30。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxJumpNumber?: int;

    /**
     * 探测使用的数据包类型，默认为NETCONN_PACKETS_ICMP。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packetsType?: PacketsType;
  }

  /**
   * 路由跟踪信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TraceRouteInfo {
    /**
     * 跳数序号。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    jumpNo: int;

    /**
     * 该跳的IP地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * 往返时间（RTT），单位为毫秒。每一跳发送5个探测报文，数组元素依次为这些探测报文RTT中的最小值、平均值、最大值、标准差。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtt: int[];
  }

  /**
   * 网络探测结果信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ProbeResultInfo {
    /**
     * 丢包率，取值范围[0, 100]。例如，100表示100%丢包，50表示50%丢包。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lossRate: int;

    /**
     * 往返时间（RTT），单位为毫秒。对目的主机发送多个探测报文，探测报文数量由[queryProbeResult]{@link connection.queryProbeResult}接口中duration参数决定。数组元素依次为
     * 这些探测报文RTT中最小值、平均值、最大值、标准差。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtt: int[];
  }

}

/*** if arkts dynamic */
import type http from './@ohos.net.http';
import type socket from './@ohos.net.socket';
/*** endif */

export default connection;