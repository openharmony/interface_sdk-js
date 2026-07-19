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
 * @file Traffic Management
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * The Traffic Management module provides the capability to obtain device network traffic data. This module supports
 * querying packet traffic usage from multiple dimensions, for example:
 *
 * - Obtaining the uplink/downlink traffic data of a specified NIC.
 * - Obtaining the total traffic data of all NICs, facilitating the viewing of overall device network usage.
 * - Obtaining the traffic data of a specified application based on the application UID, helping you monitor the network
 * resource consumption of applications.
 * - Obtaining traffic statistics for a specified socket, providing a data foundation for fine-grained network
 * performance analysis.
 * - Obtaining the historical traffic usage of an application within a specified time period, facilitating the analysis
 * of long-term network usage trends of the application.
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @atomicservice [since 15]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace statistics {
  /**
   * Defines the network type.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 12 dynamic
   * @since 23 static
   */
  type NetBearType = connection.NetBearType;

  /**
   * Obtains the total downlink traffic of the specified NIC from the last startup to the time when this API is called (
   * in bytes). This API uses an asynchronous callback to return the result.
   *
   * @param { string } nic - NIC name.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceRxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * Obtains the total downlink traffic (in bytes) of the specified NIC from the last startup to the time when this API
   * is called. This API uses a promise to return the result.
   *
   * @param { string } nic - NIC name.
   * @returns { Promise<long> } Promise used to return the total downlink traffic (in bytes) of the specified NIC from
   *     the last startup to the current moment.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceRxBytes(nic: string): Promise<long>;

  /**
   * Obtains the total uplink traffic (in bytes) of the specified NIC from the last startup to the time when this API is
   * called. This API uses an asynchronous callback to return the result.
   *
   * @param { string } nic - NIC name.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceTxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * Obtains the total uplink traffic (in bytes) of the specified NIC from the last startup to the time when this API is
   * called. This API uses a promise to return the result.
   *
   * @param { string } nic - NIC name.
   * @returns { Promise<long> } Promise used to return the total uplink traffic (in bytes) of the specified NIC from the
   *     last startup to the time when the API is called.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceTxBytes(nic: string): Promise<long>;

  /**
   * Obtains the total downlink traffic (in bytes) of the NIC corresponding to the currently connected cellular network
   * from the last startup to the time when this API is called. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > It is recommended to call this API when the cellular network is in the connected state. Otherwise, error code 210
   * > 3012 will be thrown.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getCellularRxBytes(callback: AsyncCallback<long>): void;

  /**
   * Obtains the total downlink traffic (in bytes) of the NIC corresponding to the currently connected cellular network
   * from the last startup to the time when this API is called. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > It is recommended to call this API when the cellular network is in the connected state. Otherwise, error code 210
   * > 3012 will be thrown.
   *
   * @returns { Promise<long> } Promise used to return the total downlink traffic (in bytes) of the specified NIC from
   *     the last startup to the time when the API is called.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getCellularRxBytes(): Promise<long>;

  /**
   * Obtains the total uplink traffic (in bytes) of the NIC corresponding to the currently connected cellular network
   * from the last startup to the time when this API is called. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > It is recommended to call this API when the cellular network is in the connected state. Otherwise, error code 210
   * > 3012 will be thrown.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getCellularTxBytes(callback: AsyncCallback<long>): void;

  /**
   * Obtains the total uplink traffic (in bytes) of the NIC corresponding to the currently connected cellular network
   * from the last startup to the time when this API is called. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > It is recommended to call this API when the cellular network is in the connected state. Otherwise, error code 210
   * > 3012 will be thrown.
   *
   * @returns { Promise<long> } Promise used to return the total uplink traffic (in bytes) consumed on the cellular
   *     network since the last startup to the current moment.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getCellularTxBytes(): Promise<long>;

  /**
   * Obtains the total downlink traffic (in bytes) of all NICs from the last startup to the time when this API is
   * called. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllRxBytes(callback: AsyncCallback<long>): void;

  /**
   * Obtains the total downlink traffic (in bytes) of all NICs from the last startup to the time when this API is
   * called. This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the total downlink traffic (in bytes) of all NICs from the last
   *     startup to the current moment.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllRxBytes(): Promise<long>;

  /**
   * Obtains the total uplink traffic of all NICs (in bytes) from the last startup to the time when this API is called.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllTxBytes(callback: AsyncCallback<long>): void;

  /**
   * Obtains the total uplink traffic (in bytes) of all NICs from the last startup to the time when this API is called.
   * This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the real-time uplink traffic (in bytes) of all NICs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllTxBytes(): Promise<long>;

  /**
   * Obtains the total downlink traffic (in bytes) of the specified application from the last startup to the time when
   * this API is called. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > If the application has not generated any traffic consumption after the restart, error code 2103005 will be
   * > thrown.
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - Application UID.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the traffic data is successfully
   *     obtained, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 201 - Permission denied. [since 26.0.0]
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getUidRxBytes(uid: int, callback: AsyncCallback<long>): void;

  /**
   * Obtains the total downlink traffic (in bytes) of the specified application from the last startup to the time when
   * this API is called. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the application has not generated any traffic consumption after the restart, error code 2103005 will be
   * > thrown.
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - Application UID.
   * @returns { Promise<long> } Promise used to return the total downlink traffic (in bytes) of the specified
   *     application from the last startup to the current moment.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 201 - Permission denied. [since 26.0.0]
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getUidRxBytes(uid: int): Promise<long>;

  /**
   * Obtains the total uplink traffic (in bytes) of the specified application from the last startup to the time when
   * this API is called. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > If the application has not generated any traffic consumption after the restart, error code 2103005 will be
   * > thrown.
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - Application UID.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the application's real-time uplink
   *     traffic is successfully obtained, **error** is **undefined** and **stats** is the obtained application uplink
   *     traffic (in bytes). Otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 201 - Permission denied. [since 26.0.0]
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getUidTxBytes(uid: int, callback: AsyncCallback<long>): void;

  /**
   * Obtains the total uplink traffic of the specified application from the last startup to the time when this API is
   * called (in bytes). This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the application has not generated any traffic consumption after the restart, error code 2103005 will be
   * > thrown.
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - Application UID.
   * @returns { Promise<long> } Promise used to return the total uplink traffic (in bytes) of the specified application
   *     from the last startup to the time when the API is called.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 201 - Permission denied. [since 26.0.0]
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getUidTxBytes(uid: int): Promise<long>;

  /**
   * Subscribes to traffic change events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Event type. This field has a fixed value of **netStatsChange**.
   * @param { Callback<{ iface: string, uid?: int }> } callback - Callback invoked when the traffic
   *     changes. [since 10 - 10]
   * @param { Callback<NetStatsChangeInfo> } callback - Callback invoked when the traffic changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netStatsChange', callback: Callback<NetStatsChangeInfo>): void;

  /**
   * Register notifications of network traffic updates.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { Callback<NetStatsChangeInfo> } callback - The callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onNetStatsChange(callback: Callback<NetStatsChangeInfo>): void;

  /**
   * Unsubscribes from traffic change events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Event type. This field has a fixed value of **netStatsChange**.
   * @param { Callback<{ iface: string, uid?: int }> } callback - Callback invoked when the traffic
   *     changes. [since 10 - 10]
   * @param { Callback<NetStatsChangeInfo> } callback - Callback invoked when the traffic changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void;

  /**
   * Unregister notifications of network traffic updates.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { Callback<NetStatsChangeInfo> } [callback] - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offNetStatsChange(callback?: Callback<NetStatsChangeInfo>): void;

  /**
   * Obtains the historical data traffic of the specified NIC. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { IfaceInfo } ifaceInfo - NIC information. For details, see [IfaceInfo]{@link statistics.IfaceInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback - Callback used to return the result. If the operation is
   *     successful, **error** is **undefined** and **statsInfo** is the historical traffic statistics of the NIC.
   *     Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTrafficStatsByIface(ifaceInfo: IfaceInfo, callback: AsyncCallback<NetStatsInfo>): void;

  /**
   * Obtains the historical data traffic of the specified NIC. This API uses a promise to return the result.
   *
   * | Name   | Type                     | Mandatory| Description                                               |
   * | --------- | ------------------------- | ---- | --------------------------------------------------- |
   * | ifaceInfo | [IfaceInfo]{@link statistics.IfaceInfo} | Yes  | NIC information. For details, see [IfaceInfo]{@link statistics.IfaceInfo}.|
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { IfaceInfo } ifaceInfo - Detailed query content. See {@link IfaceInfo}.
   * @returns { Promise<NetStatsInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTrafficStatsByIface(ifaceInfo: IfaceInfo): Promise<NetStatsInfo>;

  /**
   * Obtains the historical data traffic of the specified application. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - Application information. For details, see [UidInfo]{@link statistics.UidInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback - Callback used to return the result. If the operation is
   *     successful, **error** is **undefined** and **statsInfo** is the historical traffic statistics of the
   *     application. Otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTrafficStatsByUid(uidInfo: UidInfo, callback: AsyncCallback<NetStatsInfo>): void;

  /**
   * Obtains the historical data traffic of the specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - Application information. For details, see [UidInfo]{@link statistics.UidInfo}.
   * @returns { Promise<NetStatsInfo> } Promise used to return the result, which is the historical traffic statistics of
   *     the specified NIC.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTrafficStatsByUid(uidInfo: UidInfo): Promise<NetStatsInfo>;

  /**
   * Obtains the downlink traffic (in bytes) of the specified socket. This API uses an asynchronous callback to return
   * the result.
   *
   * > **NOTE**
   * >
   * > It is recommended to use this API when the socket is connected. Otherwise, the corresponding traffic data cannot
   * > be queried after the socket is closed.
   *
   * @param { int } sockfd - File description (FD) of the socket to query.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the downlink traffic of the socket
   *     is obtained successfully, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getSockfdRxBytes(sockfd: int, callback: AsyncCallback<long>): void;

  /**
   * Obtains the downlink traffic (in bytes) of the specified socket. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > It is recommended to use this API when the socket is connected. Otherwise, the corresponding traffic data cannot
   * > be queried after the socket is closed.
   *
   * @param { int } sockfd - FD of the socket to query.
   * @returns { Promise<long> } Promise used to return the downlink traffic (in bytes) of the socket.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getSockfdRxBytes(sockfd: int): Promise<long>;

  /**
   * Obtains the uplink traffic of the specified socket (in bytes). This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > It is recommended to use this API when the socket is connected. Otherwise, the corresponding traffic data cannot
   * > be queried after the socket is closed.
   *
   * @param { int } sockfd - FD of the socket to query.
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the uplink traffic of the socket
   *     is obtained successfully, **error** is **undefined**; otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getSockfdTxBytes(sockfd: int, callback: AsyncCallback<long>): void;

  /**
   * Obtains the uplink traffic (in bytes) of the specified socket. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > It is recommended to use this API when the socket is connected. Otherwise, the corresponding traffic data cannot
   * > be queried after the socket is closed.
   *
   * @param { int } sockfd - FD of the socket to query.
   * @returns { Promise<long> } Promise used to return the uplink traffic (in bytes) of the socket.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getSockfdTxBytes(sockfd: int): Promise<long>;

  /**
   * Sets traffic calibration data. You can use this API to set traffic data during traffic calibration. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } simId - SIM card ID.
   * @param { long } remainTraffic - Remaining traffic, in bytes.
   * @param { long } [totalTraffic] - Total traffic, in bytes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2100001 - Invalid parameter value, such as simId error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error, such as nullptr.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function setCalibrationTraffic(simId: int, remainTraffic: long, totalTraffic?: long): Promise<void>;

  /**
   * Set traffic plan info.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } simId - The ID of the specified sim card.
   * @param { TrafficPlanParam } planParam - The param of the specified traffic plan.
   * @param { long } value - The value of parameter.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2100001 - Invalid parameter value, such as simId error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function setTrafficPlanInfo(simId: int, planParam: TrafficPlanParam, value: long): Promise<void>;

  /**
   * Get traffic plan info.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } simId - The id of the specified sim card.
   * @param { TrafficPlanParam } planParam - The param of the specified traffic plan.
   * @returns { Promise<long> } The value of parameter.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2100001 - Invalid parameter value, such as simId error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getTrafficPlanInfo(simId: int, planParam: TrafficPlanParam): Promise<long>;

  /**
   * Updates network statistics data.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function updateStatsData(): Promise<void>;

  /**
   * Updates network interface statistics data.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { string } iface - Network interface name.
   * @param { int } start - Start timestamp for the statistics data to update.
   * @param { int } end - End timestamp for the statistics data to update.
   * @param { NetStatsInfo } stats - Network statistics information.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function updateIfacesStats(iface: string, start: int, end: int, stats: NetStatsInfo): Promise<void>;

  /**
   * Defines the parameters for querying historical traffic of an NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface IfaceInfo {
    /**
     * NIC name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    iface: string;

    /**
     * Start time of the query, which is a timestamp in seconds.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    startTime: int;

    /**
     * End time of the query, which is a timestamp in seconds.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    endTime: int;
  }

  /**
   * Defines the parameters for querying historical traffic of an application.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface UidInfo {
    /**
     * NIC information, including the NIC name and query time range.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ifaceInfo: IfaceInfo;

    /**
     * Application UID.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    uid: int;
  }

  /**
   * Defines the historical traffic information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. [since 10 - 21]
   * @publicapi [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NetStatsInfo {
    /**
     * Downlink traffic data (unit: bytes).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    rxBytes: long;

    /**
     * Uplink traffic data (unit: bytes).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    txBytes: long;

    /**
     * Number of downlink packets.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    rxPackets: long;

    /**
     * Number of uplink packets.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    txPackets: long;
  }

  /**
   * Defines the NIC status and usage of an application.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetStatsChangeInfo {
    /**
     * NIC name.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    iface: string;
    /**
     * Application UID.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    uid?: int;
  }

  /**
   * An {@link NetStatsInfo} array with start time and end time.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export type NetStatsInfoSequence = {
    /**
     * Start time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    startTime: int;
    /**
     * End time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime: int;
    /**
     * Detailed information of statistics.
     * @type { NetStatsInfo }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    info: NetStatsInfo;
  }[];

  /**
   * Array of {@link NetStatsInfoSequenceItem}.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export type NetStatsInfoSequence = Array<NetStatsInfoSequenceItem>;

  /**
   * Parameters for an {@link NetStatsInfo} with start time and end time.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export interface NetStatsInfoSequenceItem {
    /**
     * Start time for querying traffic.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    startTime: int;
    /**
     * End time for querying traffic.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    endTime: int;
    /**
     * Detailed information of statistics.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    info: NetStatsInfo;
  }

  /**
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export type UidNetStatsInfo = {
    [uid: int]: NetStatsInfo;
  };

  /**
   * {@link NetStatsInfo} for every UID. Key is UID.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export type UidNetStatsInfo = Record<int, NetStatsInfo>;

  /**
   * Defines the network information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. [since 12 - 21]
   * @publicapi [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface NetworkInfo {
    /**
     * Network type.
     *
     * **Note**: If **type** is set to **cellular**, the **simId** field must be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    type: NetBearType;
    /**
     * Start timestamp, in seconds.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    startTime: int;
    /**
     * End timestamp, in seconds.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    endTime: int;
    /**
     * SIM card ID. The default value is the maximum value of the uint32_t type.
     *
     * **Note**: If **type** is set to **cellular**, this field must be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    simId?: int;
  }

  /**
   * Obtains the traffic statistics of all applications on the specified network within the specified period. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { NetworkInfo } networkInfo - Network information. For details, see
   *     [NetworkInfo]{@link statistics.NetworkInfo}.
   * @returns { Promise<UidNetStatsInfo> } Promise used to return the result, which is the historical traffic statistics
   *     of all applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getTrafficStatsByNetwork(networkInfo: NetworkInfo): Promise<UidNetStatsInfo>;
  /**
   * Obtains the traffic statistics of the specified application on the specified network within the specified period.
   * This method uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } uid - Application UID.
   * @param { NetworkInfo } networkInfo - Network information. For details, see
   *     [NetworkInfo]{@link statistics.NetworkInfo}.
   * @returns { Promise<NetStatsInfoSequence> } Promise used to return the result, which is the historical traffic
   *     statistics of the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>;

  /**
   * Obtains the traffic statistics of the specified application on the specified network within the specified period.
   * This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Currently, only cellular and Wi-Fi traffic usage can be obtained.
   *
   * > - Currently, only traffic usage within the last 31 days can be obtained. If the timestamp passed in the parameter
   * > is earlier than 31 days before the current system time, error code 2103019 will be returned.
   * >
   * > - This API may take some time to execute. Do not call it frequently.
   *
   * @param { NetworkInfo } networkInfo - Network information.
   * @returns { Promise<NetStatsInfo> } Promise used to return the historical traffic statistics of the application.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @throws { BusinessError } 2103019 - The timestamp in param is invalid.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   */
  function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>;

  /**
   * Get this month traffic data of the cellular network.
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } simId - The id of the specified sim card.
   * @returns { Promise<long> } The statistics of the simId in this month.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getMonthTrafficStats(simId: int): Promise<long>;
  /**
   * Defines the fields related to the traffic plan.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum TrafficPlanParam {
    /**
     * Display traffic switch.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DISPLAY_TRAFFIC_SWITCH = 1,
    /**
     * Unlimit traffic switch.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    UNLIMIT_TRAFFIC_SWITCH = 2,
    /**
     * Traffic limit.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    TRAFFIC_LIMIT = 3,
    /**
     * Start date.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    START_DATE = 4,
    /**
     * Over limit behavior.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    OVER_LIMIT_BEHAVIOR = 5,
    /**
     * Monthly traffic limit percentage.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MONTHLY_LIMIT_PERCENTAGE = 6,
    /**
     * Daily traffic limit percentage.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DAILY_LIMIT_PERCENTAGE = 7
  }

}

export default statistics;
