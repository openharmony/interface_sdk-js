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

/**
 * @file 网络共享管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * 网络共享管理模块用于将设备网络连接共享给其他连接设备。
 *
 * @syscap SystemCapability.Communication.NetManager.NetSharing
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace sharing {
  /**
   * 数据网络的句柄。在调用NetHandle的方法之前，需要先获取NetHandle对象。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  type NetHandle = connection.NetHandle;

  /**
   * 判断是否支持网络共享，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回 true 代表支持网络共享。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharingSupported(callback: AsyncCallback<boolean>): void;

  /**
   * 判断是否支持网络共享，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<boolean> } 以 Promise 形式返回是否支持共享结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharingSupported(): Promise<boolean>;

  /**
   * 获取当前网络共享状态，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回 true 代表网络共享中。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharing(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前网络共享状态，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<boolean> } 以 Promise 形式返回网络共享状态结果，返回 true 代表网络共享中。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isSharing(): Promise<boolean>;

  /**
   * 开启指定类型共享，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @param { AsyncCallback<void> } callback - 回调函数，返回开启网络共享结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202009 - Failed to enable forwarding for network sharing.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function startSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * 开启指定类型共享，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @returns { Promise<void> } 以 Promise 形式返回开启共享执行结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202009 - Failed to enable forwarding for network sharing.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function startSharing(type: SharingIfaceType): Promise<void>;

  /**
   * 关闭指定类型共享，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @param { AsyncCallback<void> } callback - 回调函数,返回停止网络共享结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void;

  /**
   * 关闭指定类型共享，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @returns { Promise<void> } 以 Promise 形式返回关闭共享执行结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2202004 - Try to share an unavailable iface.
   * @throws { BusinessError } 2202005 - WiFi sharing failed.
   * @throws { BusinessError } 2202006 - Bluetooth sharing failed.
   * @throws { BusinessError } 2202011 - Cannot get network sharing configuration.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function stopSharing(type: SharingIfaceType): Promise<void>;

  /**
   * 获取共享网络接收数据量，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - 回调函数，number 代表数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsRxBytes(callback: AsyncCallback<int>): void;

  /**
   * 获取共享网络接收数据量，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } 以 Promise 形式返回共享网络接收数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsRxBytes(): Promise<int>;

  /**
   * 获取共享网络发送数据量，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - 回调函数，number 代表数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTxBytes(callback: AsyncCallback<int>): void;

  /**
   * 获取共享网络发送数据量，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } 以 Promise 形式返回共享网络发送数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTxBytes(): Promise<int>;

  /**
   * 获取共享网络总数据量，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<int> } callback - 回调函数，number 代表数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTotalBytes(callback: AsyncCallback<int>): void;

  /**
   * 获取共享网络总数据量，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<int> } 以 Promise 形式返回共享网络总数据量，单位：KB。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStatsTotalBytes(): Promise<int>;

  /**
   * 获取指定状态的网卡名称列表，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceState } state - 网络共享状态。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回指定状态的网卡名称列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定状态的网卡名称列表，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceState } state - 网络共享状态。
   * @returns { Promise<Array<string>> } 以 Promise 形式返回指定状态网卡名称列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>;

  /**
   * 获取指定类型网络共享状态，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @param { AsyncCallback<SharingIfaceState> } callback - 回调函数，返回指定类型网络共享状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void;

  /**
   * 获取指定类型网络共享状态，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @returns { Promise<SharingIfaceState> } 以 Promise 形式返回定类型网络共共享状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>;

  /**
   * 获取指定类型网卡名称正则表达式列表，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回指定类型网卡名称正则表达式列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharableRegexes(type: SharingIfaceType, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定类型网卡名称正则表达式列表，使用 Promise 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { SharingIfaceType } type - 共享类型，0：Wi-Fi 1：USB 2：BLUETOOTH。
   * @returns { Promise<Array<string>> } 以 Promise 形式返回正则表达式列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSharableRegexes(type: SharingIfaceType): Promise<Array<string>>;

  /**
   * 注册网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingStateChange' } type - 订阅的事件类型。'sharingStateChange'：注册网络共享状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，返回网络共享状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'sharingStateChange', callback: Callback<boolean>): void;

  /**
   * 注册网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<boolean> } callback - the callback function that returns the status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function onSharingStateChange(callback: Callback<boolean>): void;

  /**
   * 注销网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingStateChange' } type - 注销的事件类型。'sharingStateChange'：注销网络共享状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，返回网络共享状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'sharingStateChange', callback?: Callback<boolean>): void;

  /**
   * 取消注册网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<boolean> } [callback] - the callback function that returns the status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function offSharingStateChange(callback?: Callback<boolean>): void;

  /**
   * 注册网卡网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'interfaceSharingStateChange' } type - 订阅的事件类型。'interfaceSharingStateChange'：注册网卡网络共享状态变化事件。
   * @param { Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }> } callback - Callback used
   *     to return the result. It is called when the network sharing state of a specified NIC changes. [since 9 - 10]
   * @param { Callback<InterfaceSharingStateInfo> } callback - 回调函数。指定网卡共享状态变化时调用。 [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void;

  /**
   * 注册网卡网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<InterfaceSharingStateInfo> } callback - the callback function that returns the message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function onInterfaceSharingStateChange(callback: Callback<InterfaceSharingStateInfo>): void;

  /**
   * 注销网卡网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'interfaceSharingStateChange' } type - 注销的事件类型。'interfaceSharingStateChange'：注销网卡网络共享状态变化事件。
   * @param { Callback<{ type: SharingIfaceType, iface: string, state: SharingIfaceState }> } callback - Callback used
   *     to return the result. [since 9 - 10]
   * @param { Callback<InterfaceSharingStateInfo> } callback - 回调函数，注销指定网卡共享状态变化通知。 [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void;

  /**
   * 取消注册网卡网络共享状态变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<InterfaceSharingStateInfo> } [callback] - the callback function that returns the message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function offInterfaceSharingStateChange(callback?: Callback<InterfaceSharingStateInfo>): void;

  /**
   * 注册上行网络变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingUpstreamChange' } type - 订阅的事件类型。'sharingUpstreamChange'：注册上行网络变化事件。
   * @param { Callback<NetHandle> } callback - 回调函数，上行网络变化时调用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void;

  /**
   * 注册上行网络变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<NetHandle> } callback - the callback function that returns the network handle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function onSharingUpstreamChange(callback: Callback<NetHandle>): void;

  /**
   * 注销上行网络变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'sharingUpstreamChange' } type - 注销的事件类型。'sharingUpstreamChange'：注销上行网络变化事件。
   * @param { Callback<NetHandle> } callback - 回调函数，注销上行网络变化事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void;

  /**
   * 取消注册上行网络变化事件，使用 callback 异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { Callback<NetHandle> } [callback] - the callback function that returns the network handle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function offSharingUpstreamChange(callback?: Callback<NetHandle>): void;

  /**
   * 网络共享状态。
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SharingIfaceState {
    /**
     * 正在网络共享。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_SERVING = 1,

    /**
     * 可提供网络共享。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_CAN_SERVER = 2,

    /**
     * 网络共享错误。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_NIC_ERROR = 3
  }

  /**
   * 唤醒在网络共享模式下的变化时的监听器。
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface InterfaceSharingStateInfo {
    /**
     * 网络共享类型。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    type: SharingIfaceType;
    /**
     * 指定的共享网络名称。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    iface: string;
    /**
     * 网卡共享状态。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    state: SharingIfaceState;
  }

  /**
   * 网络共享类型。
   *
   * @syscap SystemCapability.Communication.NetManager.NetSharing
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SharingIfaceType {
    /**
     * 网络共享类型 Wi-Fi。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_WIFI = 0,

    /**
     * 网络共享类型 USB。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_USB = 1,

    /**
     * 网络共享类型蓝牙。
     *
     * @syscap SystemCapability.Communication.NetManager.NetSharing
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SHARING_BLUETOOTH = 2
  }
}

export default sharing;