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
 * @file Network Connection Management
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
/*** if arkts dynamic */
import type http from './@ohos.net.http';
import type socket from './@ohos.net.socket';
/*** endif */

/**
 * The network connection management module provides basic network management capabilities. You can obtain the default
 * active network, the list of all active networks, and network capability information.
 *
 * > **NOTE**
 * >
 * > Unless otherwise specified, the APIs of this module do not support concurrent calls.
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace connection {
  /**
   * Defines an HTTP request, which can be created using [http.createHttp]{@link @ohos.net.http:http.createHttp}.
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type HttpRequest = http.HttpRequest;

  /**
   * Defines a TCPSocket object, which can be created using
   * [socket.constructTCPSocketInstance]{@link @ohos.net.socket:socket.constructTCPSocketInstance}.
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 8 dynamic
   */
  type TCPSocket = socket.TCPSocket;

  /**
   * Defines a **UDPSocket** object, which can be created using
   * [socket.constructUDPSocketInstance]{@link @ohos.net.socket:socket.constructUDPSocketInstance}.
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 8 dynamic
   */
  type UDPSocket = socket.UDPSocket;

  /**
   * Creates a **NetConnection** object, which can be used to listen for the network status.
   * [netSpecifier]{@link connection.NetSpecifier} specifies the network to be listened for, and **timeout** indicates
   * the timeout duration (ms). **netSpecifier** is a mandatory parameter for **timeout**. If neither of them is
   * present, the default network is used.
   *
   * > **NOTE**
   * >
   * > To listen for the network status, after creating a **NetConnection** object, you need to call
   * > [register]{@link connection.NetConnection.register} to register the notification of the specified network status
   * > change.
   *
   * @param { NetSpecifier } [netSpecifier] - Specification of the network to be listened for. If this parameter is not
   *     specified, the default network is listened for.
   * @param { int } [timeout] - Timeout interval for obtaining the network specified by **netSpecifier**. The input
   *     value must be an uint32_t integer. This parameter is valid only when **netSpecifier** is present. The default
   *     value is **0**.
   *     <br>**Note**: If the network to be listened for does not exist, the system attempts to activate the network. If
   *     the timeout interval is exceeded and the network status listener is registered, the **netUnavailable** event is
   *     triggered.
   * @returns { NetConnection } Type of the network connection object to be listened for.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection;

  /**
   * Obtains the network handle used by the system by default, including the network ID. This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > - Default network used by the system. The network must have the
   * > [NET_CAPABILITY_INTERNET]{@link connection.NetCap} capability and is not a VPN network.
   * >
   * > - The return value of this interface is determined by the system and is irrelevant to whether the application
   * > specifies a network.
   * >
   * > - Generally, the priority is as follows: Ethernet (PC) | Bluetooth (watch) > Wi-Fi > Cellular. In special cases,
   * > the actual return result prevails.
   * >
   * > - [NetHandle]{@link connection.NetHandle} is the unique identifier of the network. If no network is available,
   * > **0** is returned. It can be used by [getNetCapabilities]{@link connection.getNetCapabilities} to query more
   * > network information.
   * > **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<NetHandle> } callback - Callback used to return the result. When the network handle of the
   *     default activated network is successfully obtained, **error** is **undefined** and **data** is the network
   *     handle of the default network; otherwise, **error** is an error object.
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
   * Obtains the network handle used by the system by default, including the network ID. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > - Default network used by the system. The network must have the
   * > [NET_CAPABILITY_INTERNET]{@link connection.NetCap} capability and is not a VPN network.
   * >
   * > - The return value of this interface is determined by the system and is irrelevant to whether the application
   * > specifies a network.
   * >
   * > - Generally, the priority is as follows: Ethernet (PC) | Bluetooth (watch) > Wi-Fi > Cellular. In special cases,
   * > the actual returned result prevails.
   * >
   * > - [NetHandle]{@link connection.NetHandle} is the unique identifier of the network. If no network is available,
   * > **0** is returned. It can be used by [getNetCapabilities]{@link connection.getNetCapabilities} to query more
   * > network information.
   * > **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<NetHandle> } Promise used to return the network handle of the default network.
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
   * Obtains the network handle used by the system by default, including the network ID. This API returns the result
   * synchronously.
   *
   * > **NOTE**
   * >
   * > - Default network used by the system. The network must have the
   * > [NET_CAPABILITY_INTERNET]{@link connection.NetCap} capability and is not a VPN network.
   * >
   * > - The return value of this interface is determined by the system and is irrelevant to whether the application
   * > specifies a network.
   * >
   * > - Generally, the priority is as follows: Ethernet (PC) | Bluetooth (watch) > Wi-Fi > Cellular. In special cases,
   * > the actual returned result prevails.
   * >
   * > - [NetHandle]{@link connection.NetHandle} is the unique identifier of the network. If no network is available,
   * > **0** is returned. It can be used by [getNetCapabilities]{@link connection.getNetCapabilities} to query more
   * > network information.
   * > **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { NetHandle } Network handle of the default network.
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
   * Obtains the list of all connected networks. This API uses an asynchronous callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<Array<NetHandle>> } callback - Callback used to return the result. If the list of all
   *     connected networks is obtained successfully, **error** is **undefined** and **data** is the list of activated
   *     networks. Otherwise, **error** is an error object.
   *     <br> Note: If Wi-Fi and cellular data are both enabled, and no application specifies the use of cellular data,
   *     only Wi-Fi is activated. In this case, only the **NetHandle** of Wi-Fi is returned. The NetHandle of Wi-Fi and
   *     cellular data can be obtained at the same time only when a specific application enables the cellular network.
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
   * Obtains the list of all connected networks. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<NetHandle>> } Promise used to return the list of activated networks.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * Obtains the list of all connected networks. This API returns the result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Array<NetHandle> } List of all connected networks.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllNetsSync(): Array<NetHandle>;

  /**
   * Obtains the connection information of the data network specified by **NetHandle**, including the NIC name, domain
   * name, link information, route information, network address, and maximum transmission unit. This API uses an
   * asynchronous callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @param { AsyncCallback<ConnectionProperties> } callback - Callback used to return the result. If the connection
   *     properties of the network specified by **netHandle** is obtained successfully, **error** is **undefined** and
   *     **data** is the obtained network connection information. Otherwise, **error** is an error object.
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
   * Obtains the connection information of the data network specified by **NetHandle**, including the NIC name, domain
   * name, link information, route information, network address, and maximum transmission unit. This API uses a promise
   * to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Handle of the data network.
   * @returns { Promise<ConnectionProperties> } Promise used to return the network connection information.
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
   * Obtains the connection information of the data network specified by **NetHandle**, including the NIC name, domain
   * name, link information, route information, network address, and maximum transmission unit. This API returns the
   * result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @returns { ConnectionProperties } Network connection information.
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
   * Obtains the network capability set of the data network specified by **NetHandle**, including the uplink and
   * downlink bandwidth, specific network capabilities, and network type. This API uses an asynchronous callback to
   * return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @param { AsyncCallback<NetCapabilities> } callback - Callback used to return the result. If the capability set of
   *     the network specified by **NetHandle** is successfully obtained, **error** is **undefined**, and **data** is
   *     the obtained network capability set. Otherwise, **error** is an error object.
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
   * Obtains the network capability set of the data network specified by **NetHandle**, including the uplink and
   * downlink bandwidth, specific network capabilities, and network type. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @returns { Promise<NetCapabilities> } Promise used to return the network capability set.
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
   * Obtains the network capability information of the data network specified by **NetHandle**, including the uplink and
   * downlink bandwidth, specific network capabilities, and network type. This API returns the result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @returns { NetCapabilities } Network capability set.
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
   * Sets extended attributes of the network specified by **netHandle** to indicate its security level. This API uses a
   * promise to return the result.
   *
   * > **NOTE**
   * >
   * > Currently, this API is available only for PCs.
   *
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - Network handle.
   * @param { string } netExtAttribute - Extended network attributes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setNetExtAttribute(netHandle: NetHandle, netExtAttribute: string): Promise<void>;

  /**
   * Sets extended attributes of the network specified by **netHandle** to indicate its security level. This API returns
   * the result synchronously.
   *
   * > **NOTE**
   * >
   * > Currently, this API is available only for PCs.
   *
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - Network handle.
   * @param { string } netExtAttribute - Extended network attributes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setNetExtAttributeSync(netHandle: NetHandle, netExtAttribute: string): void;

  /**
   * Obtains the extended attributes of the network specified by **netHandle** to determine its security level. This API
   * uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @returns { Promise<string> } Promise used to return the network extension attributes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getNetExtAttribute(netHandle: NetHandle): Promise<string>;

  /**
   * Obtains the extended attributes of the network specified by **netHandle** to determine its security level. This API
   * returns the result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Network handle.
   * @returns { string } Extended network attributes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getNetExtAttributeSync(netHandle: NetHandle): string;

  /**
   * Checks whether the data traffic over the current default network is metered. For example, data traffic over Wi-Fi
   * is not metered, whereas that over cellular networks is. This API uses an asynchronous callback to return the
   * result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the data traffic over the current network is metered, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function isDefaultNetMetered(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the data traffic over the current default network is metered. For example, data traffic over Wi-Fi
   * is not metered, whereas that over cellular networks is. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the data traffic
   *     over the current network is metered, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function isDefaultNetMetered(): Promise<boolean>;

  /**
   * Checks whether the data traffic over the current network is metered. For example, data traffic over Wi-Fi is not
   * metered, whereas that over cellular networks is. This API returns the result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } Boolean value indicating whether data traffic over the current network is metered. The value
   *     **true** indicates that the data traffic is metered, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  function isDefaultNetMeteredSync(): boolean;

  /**
   * Checks whether there is an available network. This API uses an asynchronous callback to return the result. If there
   * is an available network, [getDefaultNet]{@link connection.getDefaultNet} can be used to obtain the default network
   * handle.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Callback used to return whether there is an available network. The
   *     value **true** indicates that a network is available, and the value **false** indicates the opposite.
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
   * Checks whether there is an available network. This API uses a promise to return the result. If there is an
   * available network, [getDefaultNet]{@link connection.getDefaultNet} can be used to obtain the default network
   * handle.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } Promise used to return whether there is an available network. The value **true**
   *     indicates that a network is available, and the value **false** indicates the opposite.
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
   * Checks whether there is an available network. This API returns the result synchronously.
   *
   * **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } Whether there is an available network. The value **true** indicates that a network is
   *     available, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function hasDefaultNetSync(): boolean;

  /**
   * Enables the airplane mode. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Enables airplane mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } Promise that returns no value.
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
   * Disables airplane mode. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the airplane mode is disabled
   *     successfully, **error** is **undefined**. Otherwise, **error** is an error object.
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
   * Disables airplane mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } Promise that returns no value.
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
   * Reports the network availability to the network management module. This API uses an asynchronous callback to return
   * the result.
   *
   * > **NOTE**
   * >
   * > This API is used by the browser to connect to the portal network. After the network authentication is successful,
   * > the browser reports the network connection success to the network management module. The network management
   * > module then triggers network detection and updates the network status.
   * > **Permission required**: ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle. For details, see [NetHandle]{@link connection.NetHandle}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the network status is reported
   *     successfully, **error** is **undefined**. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports that the network is available to the network management module. This API uses a promise to return the
   * result.
   *
   * **Permission required**: ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle. For details, see [NetHandle]{@link connection.NetHandle}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * Reports the network unavailability to the network management module. This API uses an asynchronous callback to
   * return the result.
   *
   * **Permission required**: ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle. For details, see [NetHandle]{@link connection.NetHandle}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the network status is reported
   *     successfully, **error** is **undefined**. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network unavailability to the network management module. This API uses a promise to return the result.
   *
   * **Permission required**: ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * Obtains all IP addresses of the default network by resolving the host name. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Host name to resolve.
   * @param { AsyncCallback<Array<NetAddress>> } callback - Callback used to return the result. If all IP addresses are
   *     successfully obtained, **error** is **undefined**, and **data** is the list of all obtained IP addresses.
   *     Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

  /**
   * Obtains all IP addresses of the default network by resolving the host name. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Host name to resolve.
   * @returns { Promise<Array<NetAddress>> } Promise used to return all IP addresses.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;

  /**
   * Performs the DNS resolution using the current default network based on the specified IP address type. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Host name to resolve. For example, www.example.com.
   * @param { QueryOptions } [option] - Type of the IP address to be queried. The default value is **FAMILY_TYPE_ALL**.
   * @returns { Promise<Array<NetAddress>> } Promise used to return the queried IP address. In the command output, the
   *     port field has a fixed value of 0.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

  /**
   * Obtains the network handle bound to an application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<NetHandle> } callback - Callback used to return the result. If information about the network
   *     bound to the application is successfully obtained, **error** is **undefined** and **data** is the obtained
   *     network information. Otherwise, **error** is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function getAppNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the network information bound to an application. This API uses a promise to return the result.
   *
   * @returns { Promise<NetHandle> } Promise used to return the result.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function getAppNet(): Promise<NetHandle>;

  /**
   * Obtains the network information bound to an application. This API returns the result synchronously.
   *
   * @returns { NetHandle } Data network bound to the application.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  function getAppNetSync(): NetHandle;

  /**
   * Binds an application to the network specified by **netHandle**, so that the application can access the external
   * network only through this network. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the application is successfully
   *     bound to the specified network, **error** is **undefined**. Otherwise, **error** is an error object.
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
   * Binds an application to the network specified by **netHandle**, so that the application can access the external
   * network only through this network. This API uses a promise to return the result. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Network handle.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function setAppNet(netHandle: NetHandle): Promise<void>;

  /**
   * Set a specific interface up.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifaceName - the name of the interface to set up.
   *     <br>Value range:(0,1024]
   *     <br>Name of the actual network adapter to be started
   *     If the network adapter exists, try to up the network adapter.
   *     If the network adapter does not exist or does not meet the up condition, the network adapter fails to be up.
   *     The network adapter exists in the kernel, and the network adapter meets the up condition.
   *     None
   *     None
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use. Only used for system app.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function setInterfaceUp(ifaceName: string): Promise<void>;

  /**
   * Obtains the default HTTP proxy configuration of the network. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > - If the global proxy is set, the global proxy configuration is returned.
   * >
   * > - If [setAppNet]{@link connection.setAppNet} is used to bind the application to the network specified by
   * > [NetHandle]{@link connection.NetHandle}, the HTTP proxy configuration of this network is returned. In other
   * > cases, the HTTP proxy configuration of the default network is returned.
   *
   * @param { AsyncCallback<HttpProxy> } callback - Callback used to return the result. If the global HTTP proxy
   *     configuration of the network is obtained successfully, **error** is **undefined** and **data** is the global
   *     HTTP proxy configuration. Otherwise, **error** is an error object.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * Obtains the default HTTP proxy configuration of the network. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - If the global proxy is set, the global proxy configuration is returned.
   * >
   * > - If [setAppNet]{@link connection.setAppNet} is used to bind the application to the network specified by
   * > [NetHandle]{@link connection.NetHandle}, the HTTP proxy configuration of this network is returned. In other
   * > cases, the HTTP proxy configuration of the default network is returned.
   *
   * @returns { Promise<HttpProxy> } Promise used to return the result.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(): Promise<HttpProxy>;

  /**
   * Obtains the global network proxy configuration information. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { AsyncCallback<HttpProxy> } callback - Callback used to return the result. If the global HTTP proxy
   *     configuration of the network is obtained successfully, **error** is **undefined** and **data** is the global
   *     HTTP proxy configuration. Otherwise, **error** is an error object.
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
   * Obtains the global network proxy configuration information. This API uses a promise to return the result.
   *
   * @returns { Promise<HttpProxy> } Promise used to return the result.
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
   * Sets the application-level HTTP proxy configuration.
   *
   * > **NOTE**
   * >
   * > If you want to use the proxy information configured by this API, set **usingProxy** in
   * > [HttpRequestOptions]{@link @ohos.net.http:http.HttpRequestOptions} to **true** to enable proxy forwarding. This
   * > API is used only for configuring proxy rules. It does not verify the validity of the proxy service.
   *
   * @param { HttpProxy } httpProxy - Application-level HTTP proxy configuration.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid http proxy.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function setAppHttpProxy(httpProxy: HttpProxy): void;

  /**
   * Sets the global network HTTP proxy configuration information. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - Global HTTP proxy configuration of the network.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the global HTTP proxy
   *     configuration of the network is set successfully, **error** is **undefined**. Otherwise, **error** is an error
   *     object.
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
   * Sets the global network HTTP proxy configuration information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - Global HTTP proxy configuration of the network.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Notifies the system that global proxy re-authentication is required.
   * Upon receiving the notification, the system will reprocess the global proxy's authentication status.
   *
   * @permission ohos.permission.INTERNET
   * @returns { Promise<HttpProxy> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function refreshGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * Sets the URL of the system-level Proxy Auto Config (PAC) script.
   *
   * > **NOTE**
   * >
   * > Only the script address can be set. The proxy function cannot be parsed or enabled. To set the script and enable
   * > the proxy, call the [setPacFileUrl]{@link connection.setPacFileUrl} API.
   *
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacUrl - URL of the PAC script. Note that this URL will not be verified by the API.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   */
  function setPacUrl(pacUrl: string): void;

  /**
   * Obtains the URL of the system-level PAC script.
   *
   * @returns { string } URL of the PAC script. If the PAC script does not exist, error code 2100003 is reported.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   */
  function getPacUrl(): string;

  /**
   * Sets the URL of the Proxy Auto-Configuration Script (PAC) and enables the PAC proxy capability, for example, http:/
   * /127.0.0.1:21998/PacProxyScript.pac. You can call [findProxyForUrl]{@link connection.findProxyForUrl} to parse the
   * URL and obtain the proxy information.
   *
   * > **NOTE**
   * >
   * > 1. This API can parse scripts and enable the PAC proxy capability on **PC/2in1<sup>20+</sup>**,
   * > **Phone<sup>23+</sup>**, **Tablet<sup>23+</sup>** and **TV<sup>23+</sup>** devices. For wearable devices, only
   * > the script address is saved, and the PAC proxy capability is not enabled.
   *
   * > 2. This API does not verify the URL authenticity. If the URL is incorrect when the PAC proxy is enabled, the
   * > proxy fails to be enabled and error code 2100002 is returned.
   *
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacFileUrl - URL of the current PAC script.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setPacFileUrl(pacFileUrl: string): void;

  /**
   * Obtains the URL of the current PAC script.
   *
   * @returns { string } URL of the current PAC script. If no PAC script is available, an empty string is returned.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getPacFileUrl(): string;

  /**
   * Parses the specified URL proxy address based on the configured PAC script and returns the corresponding PAC proxy
   * information.
   *
   * > **NOTE**
   * >
   * > 1. You can use [setPacFileUrl]{@link connection.setPacFileUrl} or [setPacUrl]{@link connection.setPacUrl} to set
   * > the PAC script.
   *
   * > 2. If no PAC script is set before this interface is called, an empty string is returned.
   *
   * > 3. The [setPacFileUrl]{@link connection.setPacFileUrl} API supports parsing scripts and enabling the PAC proxy
   * > capability on PC/2in1<sup>20+</sup>, Phone<sup>23+</sup>, Tablet<sup>23+</sup> and TV<sup>23+</sup> devices.
   * > Therefore, this API can be used to obtain the PAC proxy information on the preceding devices. For wearable
   * > devices, this API does not take effect, and an empty string is returned.
   *
   * @param { string } url - URL used to search for the proxy information.
   * @returns { string } Proxy information.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function findProxyForUrl(url: string): string;

  /**
   * Sets the proxy mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { ProxyMode } mode - Specified proxy mode.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  function setProxyMode(mode: ProxyMode): Promise<void>;

  /**
   * Obtains the current proxy mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<ProxyMode> } Promise used to return the current proxy mode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  function getProxyMode(): Promise<ProxyMode>;

  /**
   * Adds custom DNS rules for the specified host of the current application. This API uses an asynchronous callback to
   * return the result.
   *
   * > **NOTE**
   * >
   * > You can call [removeCustomDnsRule]{@link connection.removeCustomDnsRule} to delete a custom DNS rule or call
   * > [clearCustomDnsRules]{@link connection.clearCustomDnsRules} to delete all custom DNS rules of the current
   * > application.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Name of the custom host.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the mapping is added successfully,
   *     **error** is **undefined**. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   */
  function addCustomDnsRule(host: string, ip: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Adds custom DNS rules for the specified host of the current application. This API uses a promise to return the
   * result.
   *
   * > **NOTE**
   * >
   * > You can call [removeCustomDnsRule]{@link connection.removeCustomDnsRule} to delete a custom DNS rule or call
   * > [clearCustomDnsRules]{@link connection.clearCustomDnsRules} to delete all custom DNS rules of the current
   * > application.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Name of the custom host.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   */
  function addCustomDnsRule(host: string, ip: Array<string>): Promise<void>;

  /**
   * Removes the custom DNS rules of the specified host from the current application. This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > You can call [addCustomDnsRule]{@link connection.addCustomDnsRule} to add a custom rule.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Name of the host for which DNS rules are to be deleted.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the DNS rules are removed
   *     successfully, **error** is **undefined**. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   */
  function removeCustomDnsRule(host: string, callback: AsyncCallback<void>): void;

  /**
   * Removes the custom DNS rules of the specified host from the current application. This API uses a promise to return
   * the result.
   *
   * > **NOTE**
   * >
   * > You can call [addCustomDnsRule]{@link connection.addCustomDnsRule} to add a custom rule.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Name of the host for which DNS rules are to be deleted.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 11 dynamic
   */
  function removeCustomDnsRule(host: string): Promise<void>;

  /**
   * Removes all custom DNS rules of the current application. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.INTERNET
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If all the DNS rules are removed
   *     successfully, **error** is **undefined**. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  function clearCustomDnsRules(callback: AsyncCallback<void>): void;

  /**
   * Removes all custom DNS rules of the current application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  function clearCustomDnsRules(): Promise<void>;

  /**
   * Resets the network settings to the factory defaults. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } Promise that returns no value.
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
   * Queries the UID of the application that initiates a specified network connection. This API uses a promise to return
   * the result.
   *
   * > **NOTE**
   * >
   * > - This API can be called only in VPN applications.
   * >
   * > - Set the port numbers of the **local** and **remote** parameters when calling the API. If the port number is not
   * > set or is set to 0, the API filters out a set of UIDs that meet the conditions based on other parameters and
   * > returns a matched UID.
   * >
   * > - When protocol is set to PROTO_TYPE_UDP, if no UID is found based on the local and remote parameters, the UID is
   * > filtered based on the local parameter and the matched UID is returned.
   * > **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - Type of a network protocol.
   * @param { NetAddress } local - Source network address.
   * @param { NetAddress } remote - Destination network address.
   * @returns { Promise<int> } Promise used to return the UID of an application. If no matching UID is found, -1 is
   *     returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<int>;

  /**
   * Queries the UID of the application that initiates a specified network connection. This API returns the result
   * synchronously.
   *
   * > **NOTE**
   * >
   * > - This API can be called only in VPN applications.
   * >
   * > - Set the port numbers of the **local** and **remote** parameters when calling the API. If the port number is not
   * > set or is set to 0, the API filters out a set of UIDs that meet the conditions based on other parameters and
   * > returns a matched UID.
   * >
   * > - When protocol is set to PROTO_TYPE_UDP, if no UID is found based on the local and remote parameters, the UID is
   * > filtered based on the local parameter and the matched UID is returned.
   * > **Required permission**: ohos.permission.GET_NETWORK_INFO
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - Type of a network protocol.
   * @param { NetAddress } local - Source network address.
   * @param { NetAddress } remote - Destination network address.
   * @returns { int } UID of an application. If no matching UID is found, -1 is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int;

  /**
   * Creates a virtual local area network (VLAN) with specified **vlanId** on a specified Ethernet NIC. This API uses a
   * promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Currently, this API supports only the PC. For other device types, the error code 2100002 is returned when this
   * > API is called.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - NIC name.
   * @param { int } vlanId - VLAN ID. The value range is [0, 4094].
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   */
  function createVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * Deletes a VLAN specified by **vlanId** from a specified Ethernet NIC. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Currently, this API supports only the PC. For other device types, the error code 2100002 is returned when this
   * > API is called.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - NIC name.
   * @param { int } vlanId - VLAN ID. The value range is [0, 4094].
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   */
  function destroyVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * Adds a specified IP address and subnet mask for the VLAN specified by **vlanId** on an Ethernet NIC. This API uses
   * a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Currently, this API supports only the PC. For other device types, the error code 2100002 is returned when this
   * > API is called.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - NIC name.
   * @param { int } vlanId - VLAN ID. The value range is [0, 4094].
   * @param { LinkAddress } address - Network link information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   */
  function addVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * Deletes the configured IP address and subnet mask from the VLAN specified by **vlanId** on an Ethernet NIC. This
   * API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Currently, this API supports only the PC. For other device types, the error code 2100002 is returned when this
   * > API is called.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - NIC name.
   * @param { int } vlanId - VLAN ID. The value range is [0, 4094].
   * @param { LinkAddress } address - Network link information.
   * @returns { Promise<void> } Promise that returns no value.
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
   */
  function deleteVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * Obtains information about entries in the IP neighbor table of the local device, including IPv4 and IPv6 entries.
   * Each entry contains an IP address, a MAC address, and a network adapter name. This API uses a promise to return the
   * result.
   *
   * > **NOTE**
   * >
   * > This interface is used to obtain the cached data of the IP neighbor table, not the data of all connections on the
   * > LAN.
   * >
   * > This API is used to check network exceptions and parse the mapping between IP addresses and MAC addresses.
   *
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<Array<NetIpMacInfo>> } Promise used to return information about entries in the IP neighbor
   *     table.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   */
  function getIpNeighTable(): Promise<Array<NetIpMacInfo>>;

  /**
   * Converts the host name from Unicode to ASCII and controls the conversion behavior through the optional conversion
   * process parameter (**conversionProcess**).
   *
   * > **NOTE**
   * >
   * > If **conversionProcess** is set to **NO_CONFIGURATION**, only the domain names corresponding to the Unicode
   * > characters that have been officially allocated can be converted.
   *
   * > When **conversionProcess** is set to **ALLOW_UNASSIGNED**, domain names that contain Unicode characters that have
   * > not been assigned meanings can be converted.
   *
   * > If **conversionProcess** is set to **USE_STD3_ASCII_RULES**, the generated ASCII domain name is forcibly checked
   * > based on the STD-3 ASCII rule (RFC 1123 standard) during the conversion.
   *
   * > Digits and English letters in the input parameters are not transcoded.
   *
   * @param { string } host - Host name to be converted. The length of each label (separated by dots) cannot exceed 63
   *     bytes.
   * @param { ConversionProcess } [flag] - Conversion flow parameter. The default value is **NO_CONFIGURATION**.
   * @returns { string } Conversion result.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  function getDnsAscii(host: string, flag?: ConversionProcess): string;
 
  /**
   * Converts host names from ASCII to Unicode using the Punycode encoding mode and uses the optional conversionProcess
   * parameter to control the conversion behavior.
   *
   * @param { string } host - Host name to be converted.
   * @param { ConversionProcess } [flag] - Conversion flow parameter. The default value is **NO_CONFIGURATION**.
   * @returns { string } Conversion result.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  function getDnsUnicode(host: string, flag?: ConversionProcess): string;

  /**
   * Obtains information about all TCP and UDP ports currently listened by the system, and the PID and UID of the
   * processes that listen for the ports. Both IPv4 and IPv6 addresses are supported.
   *
   * > **NOTE**
   * >
   * > This API is used to obtain information about the TCP and UDP ports currently listened by the system. The detailed
   * > fields are as follows:
   * >
   * > TCP port fields: local address, local port, remote address, remote port, TCP connection status, process PID, and
   * > process UID
   * >
   * > UDP port fields: local address, local port, process PID, and process UID
   *
   * @permission ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<NetPortStatesInfo> } Promise used to return the TCP and UDP port information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  function getSystemNetPortStates(): Promise<NetPortStatesInfo>;

  /**
   * Queries the network route tracing information. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > To call this API, the application needs to apply for the precise location permission. <!--RP1-->According to
   * > [Applying for Location Permissions (ArkTS)](docroot://device/location/location-permission-guidelines.md)<!--RP1
   * > End-->, the caller needs to apply for both **ohos.permission.APPROXIMATELY_LOCATION** and
   * > **ohos.permission.LOCATION**.
   *
   * @permission ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and
   *     ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { string } destination - Target domain name or IP address, for example, www.example.com or 8.8.8.8.
   * @param { TraceRouteOptions } [option] - Options for route tracing. If this parameter is not specified, the default
   *     configuration is used.
   * @returns { Promise<TraceRouteInfo[]> } Promise used to return the array of route tracing information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>;

  /**
   * Queries network probe results. If an exception (for example, network disconnection) occurs and the request fails to
   * be sent, the API immediately returns the result without performing subsequent probe. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > This API is used to perform network probe on a target host for a period of time to obtain the packet loss rate
   * > and RTT information.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } destination - Target domain name or IP address, for example, www.example.com or 8.8.8.8.
   * @param { int } duration - Probe duration, in seconds. The value range is [1, 1000]. The probe interval is one
   *     second. If no exception (such as network disconnection) occurs, the probe result is returned when the probe
   *     duration expires. This field indicates the total probe duration. If the value is too large, application thread
   *     resources may be occupied for a long time.
   * @returns { Promise<ProbeResultInfo> } Promise used to return the probe result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function queryProbeResult(destination: string, duration: int): Promise<ProbeResultInfo>;

  /**
   * Describes the information about the TCP and UDP ports that are currently listened for by the system.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  export interface NetPortStatesInfo {
    /**
     * TCP information currently listened for by the system.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>;

    /**
     * UDP information currently listened for by the system.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    udpPortStatesInfo?: Array<UdpNetPortStatesInfo>;
  }

  /**
   * Describes the TCP port state information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  export interface TcpNetPortStatesInfo {
    /**
     * Local IP address of the TCP network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpLocalIp: string;
    /**
     * Local port of the TCP network. The value range is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpLocalPort: int;
    /**
     * Remote IP address of the TCP network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpRemoteIp: string;
    /**
     * Remote port of the TCP network. The value range is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpRemotePort: int;
    /**
     * UID of the user who listens for the TCP port.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpUid: int;
    /**
     * PID of the process that listens for the TCP port.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpPid: int;
    /**
     * TCP network status.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpState: TcpState;
  }

  /**
   * Describes the UDP port state information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  export interface UdpNetPortStatesInfo {
    /**
     * Local IP address of the UDP network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    udpLocalIp: string;
    /**
     * Local port of the UDP network. The value range is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    udpLocalPort: int;
    /**
     * UID of the user who listens for the UDP port.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    udpUid: int;
    /**
     * PID of the process that listens for the UDP port.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    udpPid: int;
  }

  /**
   * Enumerates TCP states.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  export enum TcpState {
    /**
     * The connection is established, and data can be sent and received properly.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_ESTABLISHED = 1,
    /**
     * The client sends SYN and waits for ACK+SYN from the server (the first step of the three-way handshake).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_SYN_SENT = 2,
    /**
     * The server receives SYN and sends ACK+SYN, and waits for ACK from the client (the second step of the three-way
     * handshake).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_SYN_RECV = 3,
    /**
     * The active end sends FIN and waits for ACK from the peer end.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_FIN_WAIT1 = 4,
    /**
     * The active end receives ACK of FIN and waits for ACK from the peer end.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_FIN_WAIT2 = 5,
    /**
     * The active end receives FIN from the peer end and replies with ACK. After two times of the maximum segment
     * lifetime, the connection is completely released.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_TIME_WAIT = 6,
    /**
     * Initial/closed state, with no connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_CLOSE = 7,
    /**
     * The passive end receives FIN and sends ACK, and waits for FIN from the peer end.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_CLOSE_WAIT = 8,
    /**
     * The passive end sends FIN and waits for ACK from the peer end.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_LAST_ACK = 9,
    /**
     * The server listens and waits for the client to connect.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_LISTEN = 10,
    /**
     * Both ends send FIN and wait for ACK from each other.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TCP_CLOSING = 11
  }

  /**
   * Enumerates the parameters of the ASCII/Unicode transcoding process.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  export enum ConversionProcess {
    /**
     * Only domain names with assigned Unicode code points can be converted. (Unicode assigns a unique number to each
     * character. This number is called a code point.)
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    NO_CONFIGURATION = 0,
    /**
     * Allows the translation of domain names that contain unassigned Unicode code points (in a Unicode character set,
     * not all code points are assigned characters, i.e., unassigned Unicode code points).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    ALLOW_UNASSIGNED = 1,
    /**
     * During the conversion, the STD-3 ASCII rule (RFC 1123 standard) is forcibly used to check the generated ASCII
     * domain name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    USE_STD3_ASCII_RULES = 2
  }

  /**
   * Represents the network connection object type.
   *
   * > **NOTE**
   * >
   * > (1) When the network transitions from unavailable to available, the **netAvailable**, **netCapabilitiesChange**,
   * > and **netConnectionPropertiesChange** events are triggered.
   * >
   * > (2) If the network transitions from available to unavailable after a **netAvailable** event is received, a
   * > **netLost** event is triggered.
   * >
   * > (3) If no **netAvailable** event is received, a **netUnavailable** event is directly triggered.
   * >
   * > (4) When the network transitions from Wi-Fi to cellular, a **netLost** event is first triggered to indicate that
   * > the Wi-Fi network is lost and then a **netAvailable** event is triggered to indicate that the cellular network is
   * > available.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetConnection {
    /**
     * Registers a listener for **netAvailable** events. Before you call this API, make sure that you have called
     * **register** to add a listener for network status changes. When the listener is no longer needed, call
     * **unregister** to remove it.
     *
     * @param { 'netAvailable' } type - Event type. This field has a fixed value of **netAvailable**.
     *     <br>**netAvailable**: event indicating that the data network is available.
     * @param { Callback<NetHandle> } callback - Callback used to return the network handle.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for **netBlockStatusChange** events. Before you call this API, make sure that you have
     * called **register** to add a listener for network status changes. When the listener is no longer needed, call
     * **unregister** to remove it.
     *
     * @param { 'netBlockStatusChange' } type - Event type. This field has a fixed value of **netBlockStatusChange**.
     *     <br>**netBlockStatusChange**: event indicating a change in the network blocking status.
     * @param { Callback<{ netHandle: NetHandle, blocked: boolean }> } callback - Callback used to return the
     *     result. [since 8 - 10]
     * @param { Callback<NetBlockStatusInfo> } callback - Callback used to return the result. [since 11]
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    on(type: 'netBlockStatusChange', callback: Callback<NetBlockStatusInfo>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     *
     * @param { Callback<NetBlockStatusInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    onNetBlockStatusChange(callback: Callback<NetBlockStatusInfo>): void;

    /**
     * Registers a listener for **netCapabilitiesChange** events. Before you call this API, make sure that you have
     * called **register** to add a listener for network status changes. When the listener is no longer needed, call
     * **unregister** to remove it.
     *
     * @param { 'netCapabilitiesChange' } type - Event type. This field has a fixed value of **netCapabilitiesChange**.
     *     <br>**netCapabilitiesChange**: event indicating that the network capabilities have changed.
     * @param { Callback<NetCapabilityInfo> } callback - Callback used to return the network handle (**netHandle**) and
     *     capability information (**netCap**).
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netCapabilitiesChange', callback: Callback<NetCapabilityInfo>): void;

    /**
     * Registers a listener for **netConnectionPropertiesChange** events. Before you call this API, make sure that you
     * have called **register** to add a listener for network status changes. When the listener is no longer needed,
     * call **unregister** to remove it.
     *
     * @param { 'netConnectionPropertiesChange' } type - Event type. This field has a fixed value of
     *     **netConnectionPropertiesChange**.
     *     <br>**netConnectionPropertiesChange**: event indicating that network connection properties have changed.
     * @param { Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }> } callback - Callback
     *     used to return the result. [since 8 - 10]
     * @param { Callback<NetConnectionPropertyInfo> } callback - Callback used to return the result. [since 11]
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    on(type: 'netConnectionPropertiesChange', callback: Callback<NetConnectionPropertyInfo>): void;

    /**
     * Registers a listener for **netLost** events. Before you call this API, make sure that you have called
     * **register** to add a listener for network status changes. When the listener is no longer needed, call
     * **unregister** to remove it.
     *
     * @param { 'netLost' } type - Event type. This field has a fixed value of **netLost**.
     *     <br>**netLost**: event indicating that the network is interrupted or normally disconnected.
     * @param { Callback<NetHandle> } callback - Callback used to return the result, which is a **netHandle** object.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netLost', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for **netLost** events.
     *
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetLost(callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for **netUnavailable** events. Before you call this API, make sure that you have called
     * **register** to add a listener for network status changes. When the listener is no longer needed, call
     * **unregister** to remove it.
     *
     * @param { 'netUnavailable' } type - Event type. This field has a fixed value of **netUnavailable**.
     *     <br>**netUnavailable**: event indicating that the network is unavailable.
     * @param { Callback<void> } callback - Callback used to return the result, which is empty.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Registers a listener for netUnavailable events.
     *
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetUnavailable(callback: Callback<void>): void;

    /**
     * Registers a listener for network status changes. To listen for a specific type of events, call **on** to enable
     * listening and then call **register** to register an event listener.
     *
     * > **NOTE**
     * >
     * > After using the **register** API, you need to call **unregister** to deregister the listener.
     * > **Required permission**: ohos.permission.GET_NETWORK_INFO
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If a listener for network status
     *     changes is registered successfully, **error** is **undefined**. Otherwise, **error** is an error object.
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
     * Unregisters the listener for network status changes.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If a listener for network status
     *     changes is unregistered successfully, **error** is **undefined**. Otherwise, **error** is an error object.
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
   * Provides an instance that bears data network capabilities.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetSpecifier {
    /**
     * Network transmission capabilities and bearer types of the data network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    netCapabilities: NetCapabilities;

    /**
     * Network identifier. The identifier of the cellular network is **slot0** for SIM card 1 and **slot1** for SIM card
     * 2. Since API version 12, you can pass the registered WLAN hotspot to the API to specify the WLAN network to be
     * activated.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    bearerPrivateIdentifier?: string;
  }

  /**
   * Provides an instance that bears data network capabilities.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NetCapabilityInfo {
    /**
     * Network handle.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;

    /**
     * Network transmission capabilities and bearer types of the data network.
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
   * Represents the network handle.
   *
   * Before invoking **NetHandle** APIs, call **getNetHandle** to obtain a **NetHandle** object. For example, you can
   * call [getDefaultNet]{@link connection.getDefaultNet} to obtain the network handle of the default network.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetHandle {
    /**
     * Network ID. The value **0** indicates that there is no default network. The other valid values must be greater
     * than or equal to **100**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * Binds the TCPSocket or UDPSocket to the network specified by **NetHandle**. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { TCPSocket | UDPSocket } socketParam - **TCPSocket** or **UDPSocket** object.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the **TCPSocket** or
     *     **UDPSocket** object is successfully bound to the current network, **error** is **undefined**. Otherwise,
     *     **error** is an error object.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;

    /**
     * Binds the TCPSocket or UDPSocket to the network specified by **NetHandle**. This API uses a promise to return the
     * result.
     *
     * @param { TCPSocket | UDPSocket } socketParam - **TCPSocket** or **UDPSocket** object.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     */
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * Obtains all IP addresses by using the network specified by **NetHandle** to resolve the host name. This API uses
     * an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Host name to resolve. For example, www.example.com.
     * @param { AsyncCallback<Array<NetAddress>> } callback - Callback used to return the result. If all IP addresses
     *     are successfully obtained, **error** is **undefined**, and **data** is the list of all obtained IP addresses.
     *     Otherwise, **error** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 15]
     * @since 8 dynamic
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

    /**
     * Obtains all IP addresses by using the network specified by **NetHandle** to resolve the host name. This API uses
     * a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Host name to resolve. For example, www.example.com.
     * @returns { Promise<Array<NetAddress>> } Promise used to return all IP addresses.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 15]
     * @since 8 dynamic
     */
    getAddressesByName(host: string): Promise<Array<NetAddress>>;

    /**
     * Performs DNS resolution using the network specified by **NetHandle** based on the specified IP address type. This
     * API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Host name to resolve. For example, www.example.com.
     * @param { QueryOptions } [option] - Type of the IP address to be queried.
     * @returns { Promise<Array<NetAddress>> } Promise used to return the queried IP address. In the command output, the
     *     port field has a fixed value of 0.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

    /**
     * Obtains the first IP address by using the network specified by **NetHandle** to resolve the host name. This API
     * uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Host name to resolve. For example, www.example.com.
     * @param { AsyncCallback<NetAddress> } callback - Callback used to return the result. If the first IP address is
     *     obtained successfully, **error** is **undefined**, and **data** is the first obtained IP address. Otherwise,
     *     **error** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;

    /**
     * Obtains the first IP address by using the network specified by **NetHandle** to resolve the host name. This API
     * uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Host name to resolve. For example, www.example.com.
     * @returns { Promise<NetAddress> } Promise used to return the first IP address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    getAddressByName(host: string): Promise<NetAddress>;
  }

  /**
   * Defines the network capability set.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetCapabilities {
    /**
     * Uplink (device-to-network) bandwidth, in kbit/s. The value **0** indicates that the current network bandwidth
     * cannot be evaluated.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkUpBandwidthKbps?: int;

    /**
     * Downlink (network-to-device) bandwidth, in kbit/s. The value **0** indicates that the current network bandwidth
     * cannot be evaluated.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkDownBandwidthKbps?: int;

    /**
     * Network capability.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    networkCap?: Array<NetCap>;

    /**
     * Network type. The array contains only one network type.
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
   * Defines the network connection properties.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetConnectionPropertyInfo {
    /**
     * Network handle.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * Defines the network connection properties.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    connectionProperties: ConnectionProperties;
  }

  /**
   * Obtains the network block status information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetBlockStatusInfo {
    /**
     * Network handle.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * Whether the current network is blocked. The value **true** indicates that the network is congested, and the value
     * **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    blocked: boolean;
  }

  /**
   * Defines the type of the IP address to be queried.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  export interface QueryOptions {
    /**
     * Type of the IP address to be queried. The default value is **FAMILY_TYPE_ALL**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    family?: FamilyType;
  }

  /**
   * Indicates the type of the IP address to be queried.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  export enum FamilyType {
    /**
     * All IPv4 and IPv6 addresses are queried.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    FAMILY_TYPE_ALL = 0,
    /**
     * Only IPv4 addresses are queried.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    FAMILY_TYPE_IPV4 = 1,
    /**
     * Only IPv6 addresses are queried.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    FAMILY_TYPE_IPV6 = 2
  }

  /**
   * Defines the network capability.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum NetCap {
    /**
     * The network can connect to the carrier's Multimedia Messaging Service Center (MMSC) to send and receive
     * multimedia messages.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * The network traffic is not metered.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * The network is capable of Internet access but the network connectivity is not successfully verified by the
     * network management module. This capability is configured by the network provider. Your application can determine
     * the network connectivity by **NET_CAPABILITY_VALIDATED** and **NET_CAPABILITY_CHECKING_CONNECTIVITY**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * The network does not use a virtual private network (VPN).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * The network management module successfully connects to the Huawei Cloud address through this network. This
     * capability is configured by the network management module.
     *
     * Note: If the network management module fails to connect to the Huawei Cloud address, this flag is not available
     * in the network capability, but this does not mean a complete loss in Internet access. Note that for a newly
     * connected network, this value may not reflect the actual verification result as network connectivity verification
     * is in progress. Your application can use **NET_CAPABILITY_CHECKING_CONNECTIVITY**<sup>12+</sup> to check whether
     * network connectivity verification is in progress.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_VALIDATED = 16,
    /**
     * The network is found to have a captive portal and user login authentication is required. This capability is set
     * by the connection management module.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_PORTAL = 17,

    /**
     * The network management module is verifying the network connectivity. This flag remains valid until the network
     * connectivity check is complete. During this period, the value of **NET_CAPABILITY_VALIDATED** may be incorrect.
     * After the network connectivity check is complete, this flag is cleared and your application can determine the
     * network connectivity by checking **NET_CAPABILITY_VALIDATED**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_CHECKING_CONNECTIVITY = 31
  }

  /**
   * Enumerates network types.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum NetBearType {
    /**
     * Cellular network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_CELLULAR = 0,

    /**
     * Wi-Fi network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_WIFI = 1,

    /**
     * Bluetooth network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_BLUETOOTH = 2,

    /**
     * Ethernet network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    BEARER_ETHERNET = 3,

    /**
     * VPN.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_VPN = 4
  }

  /**
   * Enumerates the proxy modes. This API uses a promise to return the result.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  export enum ProxyMode {
    /**
     * Proxy disabled.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     */
    PROXY_MODE_OFF = 0,

    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     */
    PROXY_MODE_AUTO = 1
  }

  /**
   * Socks5 DNS strategy
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum Socks5DnsStrategy {  
    /**
     * System DNS mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SYSTEM_MODE = 0,
  
    /**
     * Proxy DNS mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PROXY_MODE = 1
  }

  /**
   * Defines the network connection properties.
   *
   * > **NOTE**
   * >
   * > The values of **linkAddresses**, **routes**, and **dnses** may be empty. You need to protect the empty values.
   * > You are advised to check whether the objects exist before using the values.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface ConnectionProperties {
    /**
     * Network interface card (NIC) name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    interfaceName: string;
    /**
     * Domain name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    domains: string;
    /**
     * Network link information.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkAddresses: Array<LinkAddress>;

    /**
     * Network address. For details, see [NetAddress]{@link connection.NetAddress}.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    dnses: Array<NetAddress>;

    /**
     * Network route information.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    routes: Array<RouteInfo>;

    /**
     * Maximum transmission unit (MTU).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    mtu: int;

    /**
     * Whether IPv4 is available on the current network. **true**: IPv4 is available when the IPv4 address is valid and
     * the default IPv4 route exists. **false**: IPv4 is unavailable when the IPv4 address is invalid or the default IPv
     * 4 route does not exist.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    isIPv4LinkValid?: boolean;
    /**
     * Whether IPv6 is available on the current network. **true**: IPv6 is available when the IPv6 address is valid and
     * the default IPv6 route exists. **false**: IPv6 is unavailable when the IPv6 address is invalid or the default IPv
     * 6 route does not exist.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    isIPv6LinkValid?: boolean;
  }

  /**
   * Defines network route information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface RouteInfo {
    /**
     * NIC name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    interface: string;

    /**
     * Network card name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    iface: string;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    destination: LinkAddress;

    /**
     * Gateway address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    gateway: NetAddress;

    /**
     * Whether a gateway is present. Whether a gateway is available. The value **true** indicates that a gateway is
     * available, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    hasGateway: boolean;

    /**
     * Whether the route is the default one. Whether the route is the default route. The value **true** indicates that
     * the route is the default route, and the value **false** indicates the opposite.
     *
     * Note: The IPv4 default route refers to the route whose destination address is **0.0.0.0/0**. The IPv6 default
     * route refers to the route whose destination address is **::/0**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    isDefaultRoute: boolean;

    /**
     * Whether the route is excluded. The value **true** indicates that the route is excluded, and the value **false**
     * indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 20 dynamic
     */
    isExcludedRoute?: boolean;
  }

  /**
   * Defines network link information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface LinkAddress {
    /**
     * Link address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    address: NetAddress;
    /**
     * Length of the link address prefix.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    prefixLength: int;
  }

  /**
   * Defines a network address.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 24]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface NetAddress {
    /**
     * Network address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * Address family identifier. The value is **1** for IPv4 and **2** for IPv6. The default value is **1**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * Port number. The value range is [0, 65535]. The default value is **0**.
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
   * Represents the HTTP proxy configuration.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface HttpProxy {
    /**
     * Host name of the proxy server.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    host: string;

    /**
     * Host port. The value range is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    port: int;

    /**
     * Name of the user who uses the proxy.
     *
     * Note: This parameter takes effect only when the password parameter is set.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    username?: string;

    /**
     * Password of the user who uses the proxy.
     *
     * Note: The setting takes effect only when the username parameter is set.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    password?: string;

    /**
     * List of the names of hosts that do not use a proxy. Host names can be domain names, IP addresses, or wildcards.
     * The detailed matching rules are as follows:
     *
     * - Domain name matching:
     *  - Exact match: The host name of the proxy server exactly matches any host name in the list.
     *  - Partial match: The host name of the proxy server contains any host name in the list.
     *
     * For example, if **ample.com** is set in the host name list, **ample.com**, **www.ample.com**, and
     * **ample.com:80** are matched, and **www.example.com** and **ample.com.org** are not matched.
     *
     * - IP address matching: The host name of the proxy server exactly matches any IP address in the list.
     * - Both the domain name and IP address are added to the list for matching.
     * - A single asterisk (*) is the only valid wildcard. If the list contains only wildcards, the wildcards match all
     * host names; that is, the HTTP proxy is disabled. A wildcard can only be added independently. It cannot be added
     * to the list together with other domain names or IP addresses. Otherwise, the wildcard does not take effect.
     * - Host names are case insensitive.
     * - Protocol prefixes such as **http** and **https** are ignored during matching.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionList: Array<string>;
  }

  /**
   * Socks5 Proxy Configuration Information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface Socks5Proxy {
    /**
     * Proxy server host name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    host: string;

    /**
     * Host port.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    port: int;

    /**
     * Proxy username.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    username?: string;

    /**
     * Proxy password.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    password?: string;

    /**
     * DNS resolution strategy.
     * Determines whether the client or the proxy server resolves the domain name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    dnsStrategy?: Socks5DnsStrategy;

    /**
     * Exclusion list for proxy servers.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    exclusionList?: Array<string>;
  }

  /**
   * Defines information about entries in the IP neighbor table.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   */
  export interface NetIpMacInfo {  
    /**
     * IP address information.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     */
    ipAddress: NetAddress;

    /**
     * NIC name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     */
    iface: string;

    /**
     * MAC address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     */
    macAddress: string;
  }

  /**
   * Enumerates network protocol types.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   */
  export enum ProtocolType {  
    /**
     * TCP network protocol.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    PROTO_TYPE_TCP = 6,
    /**
     * UDP network protocol.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     */
    PROTO_TYPE_UDP = 17
  }
  
  /**
   * Defines the type of network probe data packets.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum PacketsType {  
    /**
     * ICMP packet type.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NETCONN_PACKETS_ICMP = 0,

    /**
     * UDP packet type.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NETCONN_PACKETS_UDP = 1
  }

  /**
   * Defines options for route tracing.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface TraceRouteOptions {  
    /**
     * Maximum number of jumps. The value range is [1, 30]. The default value is **30**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    maxJumpNumber?: int;

    /**
     * Type of the data packet used for probe. The default value is **NETCONN_PACKETS_ICMP**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    packetsType?: PacketsType;
  }

  /**
   * Defines the route tracing information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface TraceRouteInfo {  
    /**
     * Jump number.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    jumpNo: int;

    /**
     * IP address to jump to.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;

    /**
     * Round-trip time (RTT), in milliseconds. Five probe packets are sent for each jump. The array elements are the
     * minimum, average, maximum, and standard deviation of the RTTs of these probe packets, respectively.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rtt: int[];
  }

  /**
   * Defines the network probe result information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface ProbeResultInfo {  
    /**
     * Packet loss rate. The value range is [0, 100]. For example, 100 indicates 100% packet loss, and 50 indicates 50%
     * packet loss.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    lossRate: int;

    /**
     * Round-trip time (RTT), in milliseconds. Multiple probe packets are sent to the target host. The number of probe
     * packets is determined by the **duration** parameter in the [queryProbeResult]{@link connection.queryProbeResult}
     * API. The array elements are the minimum, average, maximum, and standard deviation of the RTTs of these probe
     * packets, respectively.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rtt: int[];
  }

}

export default connection;