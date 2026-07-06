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
 * @file 流量管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * 流量管理模块提供获取设备网络流量数据的能力。该模块支持从多个维度查询数据包的流量使用情况，例如：
 * 
 * - 支持获取指定网卡的上/下行流量数据；
 * - 支持获取所有网卡的总流量数据，便于查看设备整体网络使用情况；
 * - 支持根据应用uid获取指定应用的流量数据，帮助开发者监控应用的网络资源消耗；
 * - 支持获取指定socket的流量统计，为细粒度的网络性能分析提供数据基础；
 * - 支持获取应用在指定时间段内的历史流量使用情况，便于分析应用的长期网络使用趋势。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从 API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @atomicservice [since 15]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace statistics {
  /**
   * 网络类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 12 dynamic
   * @since 23 static
   */
  type NetBearType = connection.NetBearType;

  /**
   * 获取指定网卡从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用callback异步回调。
   *
   * @param { string } nic - 指定查询的网卡名。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the 指定查询的网卡名。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceRxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * 获取指定网卡从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用Promise异步回调。
   *
   * @param { string } nic - 指定查询的网卡名。
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the 指定查询的网卡名。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceRxBytes(nic: string): Promise<long>;

  /**
   * 获取指定网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用callback异步回调。
   *
   * @param { string } nic - 指定查询的网卡名。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the 指定查询的网卡名。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceTxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * 获取指定网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用Promise异步回调。
   *
   * @param { string } nic - 指定查询的网卡名。
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the 指定查询的网卡名。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getIfaceTxBytes(nic: string): Promise<long>;

  /**
   * 获取当前已处于连接状态的蜂窝网络对应的网卡从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口建议在蜂窝网络处于连接状态时调用，否则会抛出2103012错误码。
   *
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
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
   * 获取当前已处于连接状态的蜂窝网络对应的网卡从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口建议在蜂窝网络处于连接状态时调用，否则会抛出2103012错误码。
   *
   * @returns { Promise<long> } The promise returned by the function.
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
   * 获取当前已处于连接状态的蜂窝网络对应的网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口建议在蜂窝网络处于连接状态时调用，否则会抛出2103012错误码。
   *
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
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
   * 获取当前已处于连接状态的蜂窝网络对应的网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口建议在蜂窝网络处于连接状态时调用，否则会抛出2103012错误码。
   *
   * @returns { Promise<long> } The promise returned by the function.
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
   * 获取所有网卡从最近一次开机开始至接口调用时刻的下行流量总和(单位:字节)。使用callback异步回调。
   *
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
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
   * 获取所有网卡从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用Promise异步回调。
   *
   * @returns { Promise<long> } The promise returned by the function.
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
   * 获取所有网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用callback异步回调。
   *
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
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
   * 获取所有网卡从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用Promise异步回调。
   *
   * @returns { Promise<long> } The promise returned by the function.
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
   * 获取指定应用从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 若重启后该应用未产生流量消耗，则会抛出2103005错误码。
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - 指定查询的应用 uid。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取到流量数据时，error为undefined，否则为错误对象。
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
   * 获取指定应用从最近一次开机开始至接口调用时刻的下行流量总和（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 若重启后该应用未产生流量消耗，则会抛出2103005错误码。
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - 指定查询的应用 uid。
   * @returns { Promise<long> } The promise returned by the function.
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
   * 获取指定应用从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 若重启后该应用未产生流量消耗，则会抛出2103005错误码。
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - 指定查询的应用 uid。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取应用实时上行流量时，error为undefined，stats为获取到的应用上行流量(单位:字节)；否则为错误对象。
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
   * 获取指定应用从最近一次开机开始至接口调用时刻的上行流量总和（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 若重启后该应用未产生流量消耗，则会抛出2103005错误码。
   *
   * @permission ohos.permission.GET_NETWORK_STATS [since 26.0.0]
   * @param { int } uid - 指定查询的应用 uid。
   * @returns { Promise<long> } The promise returned by the function.
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
   * 订阅流量改变事件通知。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - 订阅事件，固定为'netStatsChange'。
   * @param { Callback<{ iface: string, uid?: int }> } callback - Callback invoked when the traffic
   *     changes. [since 10 - 10]
   * @param { Callback<NetStatsChangeInfo> } callback - 当流量有改变时触发回调函数。 [since 11]
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
   * 注册网络流量更新通知。
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
   * 取消订阅流量改变事件通知。使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - 注销订阅事件，固定为'netStatsChange'。
   * @param { Callback<{ iface: string, uid?: int }> } callback - Callback invoked when the traffic
   *     changes. [since 10 - 10]
   * @param { Callback<NetStatsChangeInfo> } callback - 当流量有改变时触发回调函数。 [since 11]
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
   * 取消注册网络流量更新通知。
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
   * 获取指定网卡历史流量信息，使用 callback 异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { IfaceInfo } ifaceInfo - 指定查询的网卡信息，参见[IfaceInfo]{@link statistics.IfaceInfo}。
   * @param { AsyncCallback<NetStatsInfo> } callback - 回调函数。成功时 statsInfo 返回包含网卡历史流量信息，error 为 undefined，否则为错误对象。
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
   * 获取指定网卡历史流量信息，使用 Promise 异步回调。
   * 
   * | 参数名    | 类型                      | 必填 | 说明                                                |
   * | --------- | ------------------------- | ---- | --------------------------------------------------- |
   * | ifaceInfo | [IfaceInfo]{@link statistics.IfaceInfo} | 是   | 指定查询的网卡信息，参见[IfaceInfo]{@link statistics.IfaceInfo}。 |
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
   * 获取指定应用历史流量信息，使用 callback 异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - 指定查询的应用信息，参见[UidInfo]{@link statistics.UidInfo}。
   * @param { AsyncCallback<NetStatsInfo> } callback - 回调函数。成功时 statsInfo 返回包含应用历史流量信息，error 为 undefined，否则为错误对象。
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
   * 获取指定应用历史流量信息，使用 Promise 异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - 指定查询的应用信息，参见[UidInfo]{@link statistics.UidInfo}。
   * @returns { Promise<NetStatsInfo> } 以 Promise 形式返回获取结果,返回应用历史流量信息。
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
   * 获取指定Socket的下行流量（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 推荐在Socket连接时使用，否则Socket已经关闭后无法查询到对应流量数据。
   *
   * @param { int } sockfd - 指定查询的Socket的FD(file description)。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取Socket的下行流量时，error为undefined，否则为错误对象。
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
   * 获取指定Socket的下行流量（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 推荐在Socket连接时使用，否则Socket已经关闭后无法查询到对应流量数据。
   *
   * @param { int } sockfd - 指定查询的Socket的FD(file description)。
   * @returns { Promise<long> } Promise对象。返回该Socket的下行流量（单位：字节）。
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
   * 获取指定Socket的上行流量（单位：字节）。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 推荐在Socket连接时使用，否则Socket已经关闭后无法查询到对应流量数据。
   *
   * @param { int } sockfd - 指定查询的Socket的FD(file description)。
   * @param { AsyncCallback<long> } callback - 回调函数。当成功获取Socket的上行流量时，error为undefined，否则为错误对象。
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
   * 获取指定Socket的上行流量（单位：字节）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 推荐在Socket连接时使用，否则Socket已经关闭后无法查询到对应流量数据。
   *
   * @param { int } sockfd - 指定查询的Socket的FD(file description)。
   * @returns { Promise<long> } Promise对象。返回该Socket的上行流量（单位：字节）。
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
   * 设置流量校准数据。在做流量校准时，可通过本接口设置相关流量数据。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } simId - SIM卡ID。
   * @param { long } remainTraffic - 当前剩余流量，单位：Byte。
   * @param { long } [totalTraffic] - 套餐总流量，单位：Byte。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2100001 - Invalid parameter value, such as simId error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error, such as nullptr.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setCalibrationTraffic(simId: int, remainTraffic: long, totalTraffic?: long): Promise<void>;

  /**
   * 设置流量计划信息。
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
   * @since 26.0.0 dynamic&static
   */
  function setTrafficPlanInfo(simId: int, planParam: TrafficPlanParam, value: long): Promise<void>;

  /**
   * 获取流量计划信息。
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
   * @since 26.0.0 dynamic&static
   */
  function getTrafficPlanInfo(simId: int, planParam: TrafficPlanParam): Promise<long>;

  /**
   * 更新网络统计数据。
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
   * @since 26.0.0 dynamic&static
   */
  function updateStatsData(): Promise<void>;

  /**
   * 更新网络接口统计数据。
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
   * @since 26.0.0 dynamic&static
   */
  function updateIfacesStats(iface: string, start: int, end: int, stats: NetStatsInfo): Promise<void>;

  /**
   * 查询网卡历史流量参数信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface IfaceInfo {
    /**
     * 查询的网卡名。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    iface: string;

    /**
     * 查询的开始时间(时间戳;单位：秒)。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    startTime: int;

    /**
     * 查询的结束时间(时间戳;单位：秒)。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    endTime: int;
  }

  /**
   * 查询应用历史流量参数信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface UidInfo {
    /**
     * 需查询的网卡和时间参数信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ifaceInfo: IfaceInfo;

    /**
     * 需查询的应用 uid。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    uid: int;
  }

  /**
   * 获取的历史流量信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. [since 10 - 21]
   * @publicapi [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NetStatsInfo {
    /**
     * 流量下行数据（单位：字节）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    rxBytes: long;

    /**
     * 流量上行数据（单位：字节）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    txBytes: long;

    /**
     * 流量下行包个数。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 10 - 21]
     * @publicapi [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    rxPackets: long;

    /**
     * 流量上行包个数。
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
   * 监听和管理网络接口的状态和使用情况。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetStatsChangeInfo {
    /**
     * 网卡名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    iface: string;
    /**
     * 应用UID。
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
     * 查询的开始时间(时间戳;单位：秒)。
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    startTime: int;
    /**
     * 查询的结束时间(时间戳;单位：秒)。
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime: int;
    /**
     * 获取的历史流量信息。
     * @type { NetStatsInfo }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    info: NetStatsInfo;
  }[]

  /**
   * {@link NetStatsInfoSequenceItem}的数组。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export type NetStatsInfoSequence = Array<NetStatsInfoSequenceItem>;

  /**
   * 包含开始时间和结束时间的{@link NetStatsInfo}参数。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export interface NetStatsInfoSequenceItem {
    /**
     * 查询的开始时间(时间戳;单位：秒)。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    startTime: int;
    /**
     * 查询的结束时间(时间戳;单位：秒)。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    endTime: int;
    /**
     * 获取的历史流量信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    info: NetStatsInfo;
  }

  /**
   * {@link NetStatsInfo} for every UID. Key is UID.
   * {@link NetStatsInfo} for every UID. Key is UID. @syscap SystemCapability.Communication.NetManager.Core
   * {@link NetStatsInfo} for every UID. Key is UID. @systemapi Hide this for inner system use.
   * {@link NetStatsInfo} for every UID. Key is UID. @since 12 dynamic
   * {@link NetStatsInfo} for every UID. Key is UID./
  export type UidNetStatsInfo = {
    [uid: int]: NetStatsInfo;
  };

  /**
   * {@link NetStatsInfo} for every UID. Key is UID.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  export type UidNetStatsInfo = Record<int, NetStatsInfo>;

  /**
   * 网络信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. [since 12 - 21]
   * @publicapi [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface NetworkInfo {
    /**
     * 网络类型。
     * 
     * **注意：** 当type为蜂窝网络时，需指定simId字段。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    type: NetBearType;
    /**
     * 开始时间戳（单位：秒）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    startTime: int;
    /**
     * 结束时间戳（单位：秒）。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. [since 12 - 21]
     * @publicapi [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    endTime: int;
    /**
     * SIM卡ID。默认值为uint32_t类型最大值。
     * 
     * **注意：** 当type为蜂窝网络时，需指定本字段。
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
   * 获取指定时间段内所有应用在指定网络中的流量使用详情，使用 Promise 异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { NetworkInfo } networkInfo - 指定查询的网络信息，参见[NetworkInfo]{@link statistics.NetworkInfo}。
   * @returns { Promise<UidNetStatsInfo> } 以 Promise 形式返回获取结果。返回所有应用历史流量信息。
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
   * 获取指定时间段内，应用在指定网络中的流量使用详情，使用 Promise 异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } uid - 指定查询的应用 UID。
   * @param { NetworkInfo } networkInfo - 指定查询的网络信息，参见[NetworkInfo]{@link statistics.NetworkInfo}。
   * @returns { Promise<NetStatsInfoSequence> } 以 Promise 形式返回获取结果。返回应用历史流量统计信息。
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
   * 获取指定时间段内，本应用在指定网络中的流量使用情况。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 当前只支持获取蜂窝和Wi-Fi流量使用情况。
   * 
   * > - 当前只支持获取31天之内的流量使用情况，如果参数中传入的时间戳早于当前系统时间31天，会返回错误码2103019。
   * >
   * > - 本接口会有一定耗时，调用时请注意切勿频繁调用。
   *
   * @param { NetworkInfo } networkInfo - 指定查询的网络信息。
   * @returns { Promise<NetStatsInfo> } Promise对象，返回应用历史流量统计信息。
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @throws { BusinessError } 2103019 - The timestamp in param is invalid.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>;

  /**
   * 获取蜂窝实时下行流量，使用 callback 异步回调。
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
   * 定义与流量计划相关的字段。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum TrafficPlanParam {
    /**
     * 显示流量开关。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DISPLAY_TRAFFIC_SWITCH = 1,
    /**
     * 无限流量开关。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNLIMIT_TRAFFIC_SWITCH = 2,
    /**
     * 流量限制。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TRAFFIC_LIMIT = 3,
    /**
     * 开始日期。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    START_DATE = 4,
    /**
     * 超限行为。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    OVER_LIMIT_BEHAVIOR = 5,
    /**
     * 月流量限制百分比。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MONTHLY_LIMIT_PERCENTAGE = 6,
    /**
     * 每日限流百分比。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DAILY_LIMIT_PERCENTAGE = 7
  }

}

export default statistics;