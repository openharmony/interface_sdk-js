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
 * @file WLAN
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 该模块主要提供Wi-Fi基础功能（无线接入、无线加密、无线漫游等）、P2P（peer-to-peer）服务的基础功能和Wi-Fi消息通知的相应服务，让应用可以通过Wi-Fi和其他设备互联互通。
 *
 * @syscap SystemCapability.Communication.WiFi.STA [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace wifiManager {
  /**
   * 启动Wi-Fi。
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501003 - Operation failed because the service is being closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function enableWifi(): void;

  /**
   * 关闭Wi-Fi。
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 20 dynamic
   * @since 23 static
   */
  function disableWifi(): void;

  /**
   * 使能Wi-Fi半关闭（STA关闭，P2P、HML等功能可用），异步接口，需要通过注册"wifiStateChange"事件的回调来监听是否使能成功。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableSemiWifi(): void;

  /**
   * 查询Wi-Fi开关是否已激活。
   *
   * @permission ohos.permission.GET_WIFI_INFO [since 9 - 12]
   * @returns { boolean } true:已激活， false:未激活。
   * @throws {BusinessError} 201 - Permission denied. [since 9 - 12]
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isWifiActive(): boolean;

  /**
   * 启动Wi-Fi扫描，使用前先开启Wi-Fi。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.startScan
   */
  function scan(): void;

  /**
   * 启动Wi-Fi扫描。
   * 
   * - 应用程序在前台运行时，两分钟内最多可扫描四次。
   * - 在后台运行时，三十分钟内最多可扫描一次。
   * - 通过[on('wifiScanStateChange')]{@link wifiManager.on(type: 'wifiScanStateChange', callback: Callback<number>)}订阅扫描状
   * 态变更事件，监听扫描完成通知。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 21 dynamic
   * @since 23 static
   */
  function startScan(): void;

  /**
   * 获取扫描结果，使用Promise异步回调。
   * 
   * - 返回一个Promise对象，解析后得到一个包含多个WifiScanInfo对象的数组，每个对象表示一个Wi-Fi网络的扫描信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Promise<Array<WifiScanInfo>> } Promise对象。返回扫描到的热点列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(): Promise<Array<WifiScanInfo>>;

  /**
   * 获取Wi-Fi开关详细状态。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { WifiDetailState } Wi-Fi枚举状态。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getWifiDetailState(): WifiDetailState;

  /**
   * 获取扫描结果，使用callback异步回调。
   * 
   * - 通过回调函数返回一个包含多个WifiScanInfo对象的数组，每个对象表示一个Wi-Fi网络的扫描信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @param { AsyncCallback<Array<WifiScanInfo>> } callback - 回调函数，返回扫描到的WLAN热点信息（如果有）。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * 获取扫描结果，使用同步方式返回一个包含多个WifiScanInfo对象的数组，每个对象表示一个Wi-Fi网络的扫描信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Array<WifiScanInfo> } 扫描结果数组。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResultsSync(): Array<WifiScanInfo>;

  /**
   * 获取包含当前时间点前30s内的缓存扫描结果。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } 返回扫描到的热点列表。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的bssid为真实设备地址，否则为随机设备
   *     地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getScanInfoList(): Array<WifiScanInfo>;

  /**
   * 设置是否始终允许扫描。
   * 
   * - 该接口控制设备是否可以在Wi-Fi开关关闭时支持热点扫描功能。
   * - 启用后即使Wi-Fi开关关闭，系统仍可以扫描附近的Wi-Fi热点。
   * - 主要用于支持网络发现和位置定位等场景。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { boolean } isScanAlwaysAllowed - 是否始终允许扫描。true:允许扫描， false:不允许扫描
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setScanAlwaysAllowed(isScanAlwaysAllowed: boolean): void;

  /**
   * 获取是否始终允许扫描。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } 是否始终允许扫描。true表示允许触发扫描，false表示在禁用Wi-Fi时不允许触发扫描。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getScanAlwaysAllowed(): boolean;

  /**
   * 添加网络配置。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。如果bssidType无指定值，则bssidType默认为随机设备地址类型。
   * @returns { Promise<int> } Promise对象。表示网络配置ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * 添加网络配置。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。如果bssidType无指定值，则bssidType默认为随机设备地址类型。
   * @param { AsyncCallback<int> } callback - 回调函数。当操作成功时，error为0，data为添加的网络配置ID，如果data值为-1，表示添加失败。当操作错误，error为非0值。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * 添加候选网络配置，使用Promise异步回调，使用前先开启Wi-Fi。
   * 
   * - 通过传入[WifiDeviceConfig]{@link wifiManager.WifiDeviceConfig}对象，配置Wi-Fi网络的详细信息，如SSID、密码、安全类型等。
   * - 返回一个Promise对象，解析后得到一个数字，表示配置的ID，用于区分和管理不同Wi-Fi配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。如果bssidType未指定值，则bssidType默认为随机设备地址类型。
   * @returns { Promise<int> } Promise对象。表示网络配置ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function addCandidateConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * 添加候选网络配置，使用callback异步回调。
   * 
   * - 将指定的Wi-Fi设备配置添加为候选网络，添加后的网络在没有连接记录的情况下无法触发自动回连，可以通过
   * [connectToCandidateConfig]{@link wifiManager.connectToCandidateConfig}或
   * [connectToCandidateConfigWithUserAction]{@link wifiManager.connectToCandidateConfigWithUserAction}方法实现候选网络连接，页面确认连接
   * 成功后，可实现自动回连。
   * - 候选网络属于应用维度添加的网络配置，和系统网络配置是相互隔离的，在系统Wi-Fi页面不可见。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。如果bssidType未指定值，则bssidType默认为随机设备地址类型。
   * @param { AsyncCallback<int> } callback - 回调函数。error为0时：操作成功，data为添加的网络配置ID，如果data值为-1，表示添加失败。<br /> error为非0值时：操作出现
   *     错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * 移除候选网络配置，使用Promise异步回调。
   * 
   * - 从系统中删除指定网络ID的Wi-Fi候选配置，清理不再需要的Wi-Fi候选配置，释放系统资源。
   * - 只能移除通过[addCandidateConfig]{@link wifiManager.addCandidateConfig}添加的候选配置，移除后该候选网络将不再被系统自动连接。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 网络配置ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int): Promise<void>;

  /**
   * 移除指定的候选网络配置，使用callback异步回调。
   * 
   * - 从系统中删除指定网络ID的Wi-Fi候选配置，清理不再需要的Wi-Fi候选配置，释放系统资源。
   * - 只能移除通过[addCandidateConfig]{@link wifiManager.addCandidateConfig}添加的候选配置，移除后该候选网络将不再被系统自动连接。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 网络配置ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当操作成功时，error为0。如果error为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int, callback: AsyncCallback<void>): void;

  /**
   * 获取候选网络配置。
   * 
   * - 候选网络是指曾经连接过或者手动添加的网络配置。
   * - 该接口返回当前应用添加的所有已保存但当前未连接的Wi-Fi候选网络配置。
   * - 用于展示可连接的网络列表。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Array<WifiDeviceConfig> } 候选网络配置数组。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCandidateConfigs(): Array<WifiDeviceConfig>;

  /**
   * 应用使用该接口连接到自己添加的候选网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 候选网络配置的ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function connectToCandidateConfig(networkId: int): void;

  /**
   * 应用使用该接口连接到自己添加的候选网络，支持设置自定义参数。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { ConnectSettings } settings - 连接Wi-Fi设置信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @throws { BusinessError } 2501005 - The user does not respond.
   * @throws { BusinessError } 2501006 - The user refused the action.
   * @throws { BusinessError } 2501007 - Parameter validation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function connectToCandidateConfig(settings: ConnectSettings): Promise<void>;

  /**
   * 该接口用于应用连接到用户添加的候选网络，并在连接时提示用户进行信任确认。使用Promise异步回调。
   * 
   * - 调用此接口时，系统将提示用户确认是否信任并连接到指定的候选网络。
   * - 用户确认是连接过程中的必要步骤，未获得用户信任确认前，连接操作不会执行。
   * - 建议在发起连接前先通过startScan接口触发一次Wi-Fi扫描，通过
   * [wifiManager.on('wifiScanStateChange')]{@link wifiManager.on(type: 'wifiScanStateChange', callback: Callback<number>)}
   * 方法监听到扫描结果刷新后再连接，以提高连接成功率。
   * 
   * > **说明：**
   * >
   * > 调用[wifiManager.connectToCandidateConfig]{@link wifiManager.connectToCandidateConfig}连接候选网络时，不会返回用户响应结果。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 候选网络配置的ID，ID不能小于0。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @throws { BusinessError } 2501005 - The user does not respond.
   * @throws { BusinessError } 2501006 - The user refused the action.
   * @throws { BusinessError } 2501007 - Parameter validation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>;

  /**
   * 应用使用该接口连接到热点。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } networkId - 候选网络配置的ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function connectToNetwork(networkId: int): void;

  /**
   * 连接到指定网络（如果当前已经连接到热点，请先断开连接）。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   *     ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。如果bssidType未指定值，则bssidType默认为随机设备地址类型。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function connectToDevice(config: WifiDeviceConfig): void;

  /**
   * 断开Wi-Fi连接。
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function disconnect(): void;

  /**
   * 查询Wi-Fi信号强度。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { int } rssi - 热点的信号强度(dBm)。
   * @param { int } band - Wi-Fi接入点的频段，1表示2.4GHz；2表示5GHz。
   * @returns { int } 信号强度，取值范围为[0, 4]。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getSignalLevel(rssi: int, band: int): int;

  /**
   * 获取Wi-Fi连接信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 当macType是1（设备MAC地址）时，获取macAddress还需申请ohos.permission.GET_WIFI_LOCAL_MAC权限（API 8-15仅面向系统应用开放。从API 16开始，在PC/2in1设
   * > 备上面向普通应用开放，在其余设备上仍仅面向系统应用开放），无该权限时，macAddress返回为空。
   * >
   * > - 如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的bssid为真实BSSID地址，否则为随机设备地址。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } Promise对象。表示Wi-Fi连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;
  
  /**
   * 获取MLO(Multi-Link Operation，多链路操作)Wi-Fi连接信息。
   * 
   * > **说明：**
   * >
   * > - 当macType是1（设备MAC地址），获取macAddress还需申请ohos.permission.GET_WIFI_LOCAL_MAC权限（API8-15仅面向系统应用开放。从API 16开始，在PC/2in1设备上
   * > 面向普通应用开放，在其余设备上仍仅面向系统应用开放），无该权限时，macAddress返回为空。
   * >
   * > - 如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的bssid为真实BSSID地址，否则为随机设备地址。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiLinkedInfo> } Wi-Fi连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  function getMultiLinkedInfo(): Array<WifiLinkedInfo>;
  
  /**
   * 获取Wi-Fi连接信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 当macType是1（设备MAC地址），获取macAddress还需申请ohos.permission.GET_WIFI_LOCAL_MAC权限（API8-15仅面向系统应用开放。从API 16开始，在PC/2in1设备上
   * > 面向普通应用开放，在其余设备上仍仅面向系统应用开放），无该权限时，macAddress返回为空。
   * >
   * > - 如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的bssid为真实BSSID地址，否则为随机设备地址。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - 回调函数。当获取成功时，error为0，data表示Wi-Fi连接信息。如果error为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
    * 获取Wi-Fi连接信息，使用同步方式返回结果。
    * 
    * > **说明：**
    * >
    * > - 当macType是1（设备MAC地址），获取macAddress还需申请ohos.permission.GET_WIFI_LOCAL_MAC权限（API8-15仅面向系统应用开放。从API 16开始，在PC/2in1设备
    * > 上面向普通应用开放，在其余设备上仍仅面向系统应用开放），无该权限时，macAddress返回为空。
    * >
    * > - 如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的bssid为真实BSSID地址，否则为随机设备地址。
    *
    * @permission ohos.permission.GET_WIFI_INFO
    * @returns { WifiLinkedInfo } 表示Wi-Fi连接信息。
    * @throws {BusinessError} 201 - Permission denied.
    * @throws {BusinessError} 801 - Capability not supported.
    * @throws {BusinessError} 2501000 - Operation failed.
    * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
    * @syscap SystemCapability.Communication.WiFi.STA
    * @crossplatform
    * @since 18 dynamic
    * @since 23 static
    */
   function getLinkedInfoSync(): WifiLinkedInfo;

  /**
   * 查询Wi-Fi是否已连接。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:已连接， false:未连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function isConnected(): boolean;

  /**
   * 查询设备支持的特性。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { long } 支持的特性值。枚举值如下：<br/>- 0x0001: 基础结构模式特性。<br/>- 0x0002: 5 GHz带宽特性。<br/>- 0x0004: GAS/ANQP特性。<br/>- 0x
   *     0008: WiFi-Direct特性。<br/>- 0x0010: Soft AP特性。<br/>- 0x0040: Wi-Fi Aware组网特性。<br/>- 0x8000: AP STA共存特性。<br/>- 0x
   *     8000000: WPA3-Personal SAE特性。<br/>- 0x10000000: WPA3-Enterprise Suite-B。<br/>- 0x20000000: 增强开放特性。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSupportedFeatures(): long;

  /**
   * 判断设备是否支持指定的Wi-Fi特性。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { long } featureId - 特性ID值。枚举值如下：<br/>- 0x0001: 基础结构模式特性。<br/>- 0x0002: 5 GHz带宽特性。<br/>- 0x0004: GAS/ANQP特性。
   *     <br/>- 0x0008: Wifi-Direct特性。<br/>- 0x0010: Soft AP特性。<br/>- 0x0040: Wi-Fi AWare组网特性。<br/>- 0x8000: AP STA共存特性。
   *     <br/>- 0x8000000: WPA3-Personal SAE特性。<br/>- 0x10000000: WPA3-Enterprise Suite-B。<br/>- 0x20000000: 增强开放特性。
   * @returns { boolean } true:支持， false:不支持。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isFeatureSupported(featureId: long): boolean;

  /**
   * 获取设备的MAC地址。
   *
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } MAC地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceMacAddress(): string[];

  /**
   * 获取IPV4信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } IP信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getIpInfo(): IpInfo;

  /**
   * 获取IPV6信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Ipv6Info } IPv6信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function getIpv6Info(): Ipv6Info;

  /**
   * 获取国家码信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } 国家码。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): string;

  /**
   * 重新关联网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reassociate(): void;

  /**
   * 重新连接网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reconnect(): void;

  /**
   * 获取网络配置。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } 网络配置数组。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * 根据网络ID获取单条网络配置。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { int } networkId - 待查询的网络配置ID。
   * @returns { WifiDeviceConfig } 指定网络ID的网络配置。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getDeviceConfig(networkId: int): WifiDeviceConfig;

  /**
   * 更新网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { int } 返回更新的网络配置ID，如果值为-1表示更新失败。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function updateNetwork(config: WifiDeviceConfig): int;

  /**
   * 设置是否允许通过networkId自动连接。
   * 如果isAllowed为true，则可以再次关联该网络，否则不可。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId 标识要设置的网络。networkId的值不能小于0。
   * @param { boolean } isAllowed 标识是否允许自动连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 17 dynamic
   * @since 23 static
   */
  function allowAutoConnect(netId: int, isAllowed: boolean): void;

  /**
   * 关闭网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - 网络配置ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableNetwork(netId: int): void;

  /**
   * 禁用网络连接，将已连接的网络断开，且在设置的时间范围内无法自动回连。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - 网络配置ID。
   * @param { int } blockDuration - 禁用网络时长，单位：秒。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function disableNetwork(netId: int, blockDuration: int): void;

  /**
   * 移除所有网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllNetwork(): void;

  /**
   * 移除网络配置。
   * 
   * - 通过网络配置ID删除已保存的Wi-Fi网络配置信息。
   * - 移除后对应的网络配置将不再可用，设备也不会再自动连接该网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @param { int } id - 网络配置ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function removeDevice(id: int): void;

  /**
   * 判断当前频段是否支持。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiBandType } bandType - Wifi 频段类型。
   * @returns { boolean } true:支持， false:不支持。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function isBandTypeSupported(bandType: WifiBandType): boolean;

  /**
   * 获取当前设备支持的5G信道列表。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<int> } 设备支持的5G信道列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function get5GChannelList(): Array<int>;

  /**
   * 获取最近一次断连原因。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { DisconnectedReason } 最近断开的原因
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisconnectedReason(): DisconnectedReason;

  /**
   * 启动Portal认证流程，用于处理需要Web页面认证的公共Wi-Fi网络（如酒店、机场、咖啡厅等场所的网络）。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function startPortalCertification(): void;

  /**
   * 查询设备当前连接的wifi是否是手机热点。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:是手机热点， false:不是手机热点。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 11 dynamic
   * @since 23 static
   */
  function isMeteredHotspot(): boolean;

  /**
   * 设置是否使能hiLink。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { boolean } isHiLinkEnable - 是否使能hiLink。true:使能， false:去使能。
   * @param { string } bssid - 热点的MAC地址，例如：00:11:22:33:44:55。
   * @param { WifiDeviceConfig } config - Wi-Fi的配置信息。config.bssid必须和第二个参数bssid保持一致。如果bssidType未指定值，则bssidType默认为随机设备地址类
   *     型。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableHiLinkHandshake(isHiLinkEnable: boolean, bssid: string, config: WifiDeviceConfig): void;

  /**
   * 重置所有已保存的设备配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): void;

  /**
   * 开启热点，异步接口，是否打开成功需要注册并监听hotspotStateChange的回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function enableHotspot(): void;

  /**
   * 关闭热点 ，异步接口，是否关闭成功需要注册并监听hotspotStateChange的回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableHotspot(): void;

  /**
   * 检查当前设备的Wi-Fi热点功能是否支持双频段（同时支持2.4GHz和5GHz频段）。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } true:支持， false:不支持。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * 检查在某些情况下是否能够操作Wi-Fi热点。当飞行模式开启时，如果系统不支持SoftAP和STA共存，也不支持信号桥接，则无法操作热点开关。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } true:允许， false:不允许。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function isOpenSoftApAllowed(): boolean;

  /**
   * 热点是否已开启。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 热点是否已开启。true:已开启， false:未开启。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application. [since 9 - 14]
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use. [since 9 - 14]
   * @publicapi [since 15]
   * @since 9 dynamic
   * @since 23 static
   */
  function isHotspotActive(): boolean;

  /**
   * 设置Wi-Fi热点的配置信息，包括SSID、加密方式、密码、带宽、信道、最大连接STA数量等。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - 热点配置信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setHotspotConfig(config: HotspotConfig): void;

  /**
   * 获取Wi-Fi热点的配置信息，包括SSID、加密方式、密码、带宽、信道、最大连接STA数量等。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } 热点的配置信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * 获取当前连接到本设备热点的所有设备信息列表。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   *     and ohos.permission.MANAGE_WIFI_HOTSPOT [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT [since 10]
   * @returns { Array<StationInfo> } 连接的设备数组。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的macAddress为真实设备地址，否则为随机设
   *     备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStations(): Array<StationInfo>;

   /**
   * 将设备添加到热点的阻止连接设备列表中，列表中的设备将不能访问热点。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - 将添加到热点的阻止列表中的设备。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function addHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * 将设备从热点的阻止列表中删除。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - 将从热点的阻止列表中删除的设备。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function delHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * 获取当前Wi-Fi热点的黑名单设备列表。该接口返回被热点拉黑的设备信息列表，仅在设备作为热点(AP)模式下有效。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } 热点的阻止列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getHotspotBlockList(): Array<StationInfo>;

  /**
   * 获取P2P连接信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } Promise对象。表示P2P连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
  
  /**
   * 获取P2P连接信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - 回调函数。当操作成功时，err为0，data表示P2P连接信息。如果err为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * 获取P2P当前组信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<WifiP2pGroupInfo> } Promise对象。表示当前组信息。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的
   *     deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * 获取P2P当前组信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - 回调函数。当操作成功时，err为0，data表示当前组信息。如果err为非0，表示处理出现错误。如果应用申请了
   *     ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * 获取P2P对端设备列表信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<WifiP2pDevice[]> } Promise对象。表示对端设备列表信息。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的
   *     deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
  
  /**
   * 获取P2P对端设备列表信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - 回调函数。当操作成功时，err为0，data表示对端设备列表信息。如果err为非0，表示处理出现错误。如果应用申请了
   *     ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * 获取P2P本端设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG [since 9 - 10]
   * @permission ohos.permission.GET_WIFI_INFO [since 11]
   * @returns { Promise<WifiP2pDevice> } Promise对象。表示本端设备信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(): Promise<WifiP2pDevice>;
  
  /**
   * 获取P2P本端设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG [since 9 - 10]
   * @permission ohos.permission.GET_WIFI_INFO [since 11]
   * @param { AsyncCallback<WifiP2pDevice> } callback - 回调函数。当操作成功时，err为0，data表示本端设备信息。如果err为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void;

  /**
   * 创建群组。创建群组后，可调用[removeGroup]{@link wifiManager.removeGroup}移除已创建的群组。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - 群组配置信息。如果DeviceAddressType未指定值，则DeviceAddressType默认为随机设备地址类型。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function createGroup(config: WifiP2PConfig): void;

  /**
   * 移除群组。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function removeGroup(): void;

  /**
   * 执行P2P连接。调用此方法连接后，如需取消可调用[p2pCancelConnect]{@link wifiManager.p2pCancelConnect}。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { WifiP2PConfig } config - 连接配置信息。如果DeviceAddressType未指定值，则DeviceAddressType默认为随机设备地址类型。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function p2pConnect(config: WifiP2PConfig): void;

  /**
   * 在P2P连接过程中，取消P2P连接。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function p2pCancelConnect(): void;

  /**
   * 开始发现设备。调用此方法后，可调用[stopDiscoverDevices]{@link wifiManager.stopDiscoverDevices}停止发现设备以释放资源。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function startDiscoverDevices(): void;

  /**
   * 停止发现设备。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function stopDiscoverDevices(): void;

  /**
   * 删除指定网络ID的永久Wi-Fi组配置。该接口用于清除已保存的Wi-Fi网络配置信息，使其不再自动连接。
   * 
   * - 根据网络ID删除之前与P2P设备建立的永久组信息，后续与该P2P设备进行P2P连接时需要重新进行P2P协商。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - 组的ID。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function deletePersistentGroup(netId: int): void;

  /**
   * 获取创建的所有P2P群组信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<Array<WifiP2pGroupInfo>> } Promise对象。表示所有群组信息。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中
   *     的deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>;
  
  /**
   * 获取创建的所有P2P群组信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - 回调函数。当操作成功时，err为0，data表示所有群组信息。如果err为非0，表示处理出现错误。如果应用申
   *     请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void;

  /**
   * 设置设备名称。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - 设备名称。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setDeviceName(devName: string): void;

  /**
   * 注册Wi-Fi状态改变事件，在业务退出时，要调用off(type: 'wifiStateChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 固定填"wifiStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 未激活。<br/>- 1: 已激活。<br/>- 2: 激活中。<br/>- 3: 去激活中。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * 注册WLAN状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。返回0：未激活，1：已激活，2：正在激活，3：正在去激活。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiStateChange(callback: Callback<int>): void;

  /**
   * 取消注册Wi-Fi状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 固定填"wifiStateChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * 取消注册Wi-Fi状态改变事件。
   * 
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiStateChange(callback?: Callback<int>): void;

  /**
   * 注册Wi-Fi连接状态改变事件，在业务退出时，要调用off(type: 'wifiConnectionChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 固定填"wifiConnectionChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 已断开。<br/>- 1: 已连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

    /**
   * 注册Wi-Fi连接状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。返回0：已断开，1：已连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiConnectionChange(callback: Callback<int>): void;

  /**
   * 取消注册Wi-Fi连接状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 固定填"wifiConnectionChange"字符串。
   * @param { Callback<number> } [callback] - 连接状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * 取消注册Wi-Fi连接状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiConnectionChange(callback?: Callback<int>): void;

  /**
   * 注册扫描状态改变事件，在业务退出时，要调用off(type: 'wifiScanStateChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 固定填"wifiScanStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 扫描失败。<br/>- 1: 扫描成功。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * 注册扫描状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。返回0：扫描失败，1：扫描成功。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiScanStateChange(callback: Callback<int>): void;

  /**
   * 取消注册扫描状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 固定填"wifiScanStateChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * 取消注册扫描状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiScanStateChange(callback?: Callback<int>): void;

  /**
   * 注册Wi-Fi接收信号强度(RSSI)变化事件，在业务退出时，要调用off(type: 'wifiRssiChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 固定填"wifiRssiChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回以dBm为单位的RSSI值。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * 注册Wi-Fi接收信号强度(RSSI)变化事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiRssiChange(callback: Callback<int>): void;

  /**
   * 取消注册Wi-Fi接收信号强度(RSSI)变化事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 固定填"wifiRssiChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * 取消注册Wi-Fi接收信号强度(RSSI)变化事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiRssiChange(callback?: Callback<int>): void;

  /**
   * 注册Wi-Fi流变更事件，在业务退出时，要调用off(type: 'streamChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 固定填"streamChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回0:无，1:向下，2:向上，3:双向。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onStreamChange(callback: Callback<int>): void;

  /**
   * 取消注册Wi-Fi流变更事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 固定填"streamChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数，返回0:无，1:向下，2:向上，3:双向。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * 取消注册WLAN接收信号强度(RSSI)变化事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offStreamChange(callback?: Callback<int>): void;

  /**
   * 注册Wi-Fi设备配置更改事件，在业务退出时，要调用off(type: 'deviceConfigChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异
   * 步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - 固定填"deviceConfigChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回值为 0: 添加配置。1: 更改配置。2: 删除配置。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'deviceConfigChange', callback: Callback<number>): void;

  /**
   * 注册设备配置改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback -  状态改变回调函数,
   *     0: 配置已添加，1: 配置已改变，2: 配置已移除。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onDeviceConfigChange(callback: Callback<int>): void;

  /**
   * 取消注册Wi-Fi设备配置更改事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - 固定填"deviceConfigChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数，返回值为 0: 添加配置。1: 更改配置。2: 删除配置。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'deviceConfigChange', callback?: Callback<number>): void;

  /**
   * 注册设备配置改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数，
   *     0: 配置已添加, 1: 配置已改变, 2: 配置已移除。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offDeviceConfigChange(callback?: Callback<int>): void;

  /**
   * 注册热点状态改变事件，在业务退出时，要调用off(type: 'hotspotStateChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 固定填"hotspotStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 未激活。<br/>- 1: 已激活。<br/>- 2: 激活中。<br/>- 3: 去激活中。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * 注册热点状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数，
   *     0: 未激活，1: 已激活，2: 激活中， 3: 去激活中。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function onHotspotStateChange(callback: Callback<int>): void;

  /**
   * 取消注册热点状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 固定填"hotspotStateChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

/**
   * 取消注册热点状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function offHotspotStateChange(callback?: Callback<int>): void;

  /**
   * 注册Wi-Fi热点STA加入事件，在业务退出时，要调用off(type: 'hotspotStaJoin', callback?: Callback&lt;StationInfo&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 固定填"hotspotStaJoin"字符串。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * 注册热点STA加入事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaJoin(callback: Callback<StationInfo>): void;

  /**
   * 取消注册Wi-Fi热点的STA加入事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 固定填"hotspotStaJoin"字符串。
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * 取消注册热点STA加入事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaJoin(callback?: Callback<StationInfo>): void;

  /**
   * 注册Wi-Fi热点STA离开事件，在业务退出时，要调用off(type: 'hotspotStaLeave', callback?: Callback&lt;StationInfo&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 固定填"hotspotStaLeave"字符串。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * 注册热点STA离开事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaLeave(callback: Callback<StationInfo>): void;

  /**
   * 取消注册Wi-Fi热点STA离开事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 固定填"hotspotStaLeave"字符串。
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * 取消注册热点STA离开事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaLeave(callback?: Callback<StationInfo>): void;

  /**
   * 注册P2P开关状态改变事件，在业务退出时，要调用off(type: 'p2pStateChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 固定填"p2pStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 1: 空闲。<br/>- 2: 打开中。<br/>- 3: 已打开。<br/>- 4: 关闭中。<br/
   *     >- 5: 已关闭。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * 注册P2P开关状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。返回1：空闲，2：打开中，3：已打开，4：关闭中，5：已关闭。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pStateChange(callback: Callback<int>): void;

  /**
   * 取消注册P2P开关状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 固定填"p2pStateChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * 取消注册P2P开关状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pStateChange(callback?: Callback<int>): void;

  /**
   * 注册P2P连接状态改变事件，在业务退出时，要调用off(type: 'p2pConnectionChange', callback?: Callback&lt;WifiP2pLinkedInfo&gt;)接口去掉之前的注册回调。使
   * 用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 固定填"p2pConnectionChange"字符串。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数。返回P2P连接的相关信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 注册P2P连接状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pConnectionChange(callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 取消注册P2P连接状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 固定填"p2pConnectionChange"字符串。
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 取消注册P2P连接状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pConnectionChange(callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 注册P2P设备状态改变事件，在业务退出时，要调用off(type: 'p2pDeviceChange', callback?: Callback&lt;WifiP2pDevice&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { 'p2pDeviceChange' } type - 固定填"p2pDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。返回P2P设备信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * 注册P2P本端设备状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDeviceChange(callback: Callback<WifiP2pDevice>): void;

  /**
   * 取消注册P2P设备状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @param { 'p2pDeviceChange' } type - 固定填"p2pDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * 取消注册P2P本端设备状态改变事件。
   *
   * @param { Callback<WifiP2pDevice> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDeviceChange(callback?: Callback<WifiP2pDevice>): void;

  /**
   * 注册P2P对端设备状态改变事件，在业务退出时，要调用off(type: 'p2pPeerDeviceChange', callback?: Callback&lt;WifiP2pDevice[]&gt;)接口去掉之前的注册回调。使
   * 用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { 'p2pPeerDeviceChange' } type - 固定填"p2pPeerDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。如果应用申请了ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的
   *     deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * 注册P2P对端设备状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPeerDeviceChange(callback: Callback<WifiP2pDevice[]>): void;

  /**
   * 取消注册P2P对端设备状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @param { 'p2pPeerDeviceChange' } type - 固定填"p2pPeerDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice[]> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。如果应用申请了
   *     ohos.permission.GET_WIFI_PEERS_MAC权限，则返回结果中的deviceAddress为真实设备地址，否则为随机设备地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 取消注册P2P对端设备状态改变事件。
   *
   * @param { Callback<WifiP2pDevice[]> } [callback] - 状态改变回调函数。
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPeerDeviceChange(callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 注册P2P永久组状态改变事件，在业务退出时，要调用off(type: 'p2pPersistentGroupChange', callback?: Callback&lt;void&gt;)接口去掉之前的注册回调。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 固定填"p2pPersistentGroupChange"字符串。
   * @param { Callback<void> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * 注册P2P永久组状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPersistentGroupChange(callback: Callback<void>): void;

  /**
   * 取消注册P2P永久组状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 固定填"p2pPersistentGroupChange"字符串。
   * @param { Callback<void> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * 取消注册P2P永久组状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPersistentGroupChange(callback?: Callback<void>): void;

  /**
   * 注册发现设备状态改变事件，在业务退出时，要调用off(type: 'p2pDiscoveryChange', callback?: Callback&lt;number&gt;)接口去掉之前的注册回调。使用callback异步回
   * 调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 固定填"p2pDiscoveryChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 初始状态。<br/>- 1: 发现成功。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * 注册发现设备状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDiscoveryChange(callback: Callback<int>): void;

  /**
   * 取消注册发现设备状态改变事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 固定填"p2pDiscoveryChange"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * 取消注册发现设备状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDiscoveryChange(callback?: Callback<int>): void;
  /**
   * Wi-Fi设备地址（MAC/BSSID）类型。是标识Wi-Fi设备或接入点的唯一地址。
   * 
   * 在Wi-Fi相关操作中，如连接指定的Wi-Fi网络、获取设备信息等，需要使用DeviceAddressType类型的参数。
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceAddressType {
    /**
     * 随机设备地址。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RANDOM_DEVICE_ADDRESS,

    /**
     * 真实设备地址。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    REAL_DEVICE_ADDRESS,
  }

  /**
   * 表示EAP认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum EapMethod {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_NONE,
    /**
     * PEAP类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PEAP,
    /**
     * TLS类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TLS,
    /**
     * TTLS类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TTLS,
    /**
     * PWD类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PWD,
    /**
     * SIM类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_SIM,
    /**
     * AKA类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA,
    /**
     * AKA Prime类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA_PRIME,
    /**
     * UNAUTH TLS类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_UNAUTH_TLS
  }

  /**
   * 表示第二阶段认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum Phase2Method {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_NONE,
    /**
     * PAP类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_PAP,
    /**
     * MSCHAP类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAP,
    /**
     * MSCHAPV2类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAPV2,
    /**
     * GTC类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_GTC,
    /**
     * SIM类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_SIM,
    /**
     * AKA类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA,
    /**
     * AKA Prime类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA_PRIME
  }

  /**
   * 表示Wi-Fi断开原因的枚举，用于诊断网络连接问题和优化连接策略。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DisconnectedReason {
    /**
     * 默认原因。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_DEFAULT = 0,

    /**
     * 密码错误。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_WRONG_PWD = 1,

    /**
     * 路由器的连接数已达到最大数量限制。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_CONNECTION_FULL = 2
  }

  /**
   * 表示Wi-Fi开关状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiDetailState {
    /**
     * 未指定。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * 已关闭。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * 已激活。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATED = 1,

    /**
     * 激活中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATING = 2,

    /**
     * 关闭中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATING = 3,

    /**
     * 半关闭中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVATING = 4,

    /**
     * 已半关闭。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVE = 5,
  }

  /**
   * 表示WiFi代理方法的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ProxyMethod {
    /**
     * 不使用代理。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_NONE = 0,

    /**
     * 使用自动配置的代理。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_AUTO = 1,

    /**
     * 使用手动配置的代理。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_MANUAL = 2
  }

  /**
   * 表示热点支持的最高Wi-Fi类别。可以用于识别和区分不同Wi-Fi技术标准的热点。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiCategory {
    /**
     * Default。Wifi6以下的wifi类别。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 1,

    /**
     * Wifi6。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6 = 2,

    /**
     * Wifi6+。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6_PLUS = 3,

    /**
     * Wifi7。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7 = 4,

    /**
     * Wifi7+。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7_PLUS = 5
  }

  /**
   * 枚举，Wi-Fi7连接类型。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 18 dynamic
   * @since 23 static
   */
  enum WifiLinkType {
    /**
     * 默认连接类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_LINK = 0,

    /**
     * Wi-Fi7单链连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_SINGLE_LINK = 1,

    /**
     * Wi-Fi7 MLSR（multi-link single-radio，多链路单射频）连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_MLSR = 2,

    /**
     * Wi-Fi7 EMLSR（enhanced multi-link single-radio，增强型多链路单天线）连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_EMLSR = 3,

    /**
     * Wi-Fi7 STR（Simultaneous Tx and Rx，同时发送和接收）连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_STR = 4
  }

  /**
   * Wifi 代理配置。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiProxyConfig {
    /**
     * 代理方法。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyMethod?: ProxyMethod;

    /**
     * 自动配置代理的PAC web 地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    pacWebAddress?: string;

    /**
     * 手动配置代理的服务器主机名。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverHostName?: string;

    /**
     * 手动配置代理的服务器端口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverPort?: int;

    /**
     * 手动配置代理的排除对象，对象用“,”分隔。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionObjects?: string;
  }

  /**
   * 可扩展身份验证协议配置信息。
   * 
   * - WifiEapConfig是一个用于配置Wi-Fi网络EAP认证的类型。
   * - 包含EAP认证方式、第二阶段认证方式、身份信息、密码、证书等配置项。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiEapConfig {
    /**
     * EAP认证方式。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapMethod: EapMethod;

    /**
     * 第二阶段认证方式。只有eapMethod为EAP_PEAP或EAP_TTLS时需要填写。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    phase2Method: Phase2Method;

    /**
     * 身份信息。当eapMethod为EAP_PEAP、EAP_TLS或EAP_PWD时，该字段不能为空串。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    identity: string;

    /**
     * 匿名身份。暂未使用。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    anonymousIdentity: string;

    /**
     * 密码。当eapMethod为EAP_PEAP或EAP_PWD时，该字段不能为空串，最大长度为128字节。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * CA证书别名。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caCertAlias: string;

    /**
     * CA证书路径。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caPath: string;

    /**
     * 客户端证书别名。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    clientCertAlias: string;

    /**
     * CA证书内容。当eapMethod为EAP_TLS时，如果该字段为空，则clientCertAlias不能为空。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certEntry: Uint8Array;

    /**
     * CA证书密码，最大长度为128字节。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certPassword: string;

    /**
     * 替代主题匹配。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    altSubjectMatch: string;

    /**
     * 域后缀匹配。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    domainSuffixMatch: string;

    /**
     * 通行证凭证的领域。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    realm: string;

    /**
     * 公共陆地移动网的直通凭证提供商。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    plmn: string;

    /**
     * SIM卡的子ID。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapSubId: int;
  }

  /**
   * Wi-Fi配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiDeviceConfig {
    /**
     * 热点的SSID，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * 热点的BSSID，例如：00:11:22:33:44:55。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid?: string;

    /**
     * 热点的BSSID类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bssidType?: DeviceAddressType;

    /**
     * 热点的密钥，最大长度为64字节。
     * 
     * 当securityType为WIFI_SEC_TYPE_OPEN时该字段需为空串，其他加密类型不能为空串。
     * 
     * 当securityType为WIFI_SEC_TYPE_WEP时，该字段长度只允许为5、10、13、26、16和32字节其中之一，并且当字段长度为偶数时，该字段必须为纯十六进制数字构成。
     * 
     * 当securityType为WIFI_SEC_TYPE_SAE时，该字段最小长度为1字节。
     * 
     * 当securityType为WIFI_SEC_TYPE_PSK时，该字段最小长度为8字节。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * 是否是隐藏网络。true表示是隐藏网络，false表示不是隐藏网络。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHiddenSsid?: boolean;

    /**
     * 加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * 创建用户的ID。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    creatorUid?: int;

    /**
     * 禁用原因： 
     * 
     * -1 - 未知原因，0 - 未禁用，1 - 关联拒绝，2 - 认证失败 
     * 
     * 3 - DHCP失败，4 - 暂时无互联网连接 
     * 
     * 5 - 认证无凭据，6 - 永久无互联网连接 
     * 
     * 7 - 由WIFI管理器禁用，8 - 由于密码错误禁用 
     * 
     * 9 - 认证无订阅，10 - 私有EAP认证错误 
     * 
     * 11 - 未找到网络，12 - 连续失败 
     * 
     * 13 - 由系统禁用，14 - EAP-AKA认证失败 
     * 
     * 15 - 解除关联原因，16 - 禁用网络选择最大值
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    disableReason?: int;

    /**
     * 分配的网络ID。
     *
     * @type { ?number } [since 9 - 21]
     * @type { ?int } [since 22]
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use. [since 9 - 21]
     * @publicapi [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    netId?: int;

    /**
     * MAC地址类型。0 - 随机MAC地址，1 - 设备MAC地址 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacType?: int;

    /**
     * MAC地址。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacAddr?: string;

    /**
     * IP地址类型。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipType?: IpType;

    /**
     * Static IP family: 0 - IPv4, 1 - Ipv6.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * 静态IP配置信息。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    staticIp?: IpConfig;

    /**
     * IPv6 config of static
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    staticIpv6?: Ipv6Config;

    /**
     * 可扩展身份验证协议配置。只有securityType为WIFI_SEC_TYPE_EAP时需要填写。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapConfig?: WifiEapConfig;

    /**
     * 代理配置。  
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyConfig?: WifiProxyConfig;

    /**
     * WAPI身份验证协议配置。只有securityType为WIFI_SEC_TYPE_WAPI_CERT或WIFI_SEC_TYPE_WAPI_PSK时需要填写。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiConfig?: WifiWapiConfig;

    /**
     * 返回当前网络是否允许参与选网。 
     * 
     * 1 - 允许参与选网，2 - 禁止参与 
     * 
     * 3 - 永久禁止参与，4 - 未知 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    configStatus?: int;

    /**
     * 是否允许自动连接。false:不允许，true:允许自动连接。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 17 dynamic
     * @since 23 static
     */
    isAutoConnectAllowed?: boolean;

    /**
     * 安全Wi-Fi检测。false:不是安全Wi-Fi，true:是安全Wi-Fi。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isSecureWifi?: boolean;

    /**
     * 当首次网络探测检测到无互联网连接时，是否显示提示框。若为false，默认网络绑定到蜂窝网络，不显示提示框；若为true，显示无互联网连接提示框，提示用户选择默认网络绑定。默认值为true。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    showNoInternetDialog?: boolean;
  }

  /**
   * WAPI(Wireless LAN Authentication and Privacy Infrastructure) 身份验证协议配置。
   * 
   * 当用户通过WAPI身份验证协议连接无线网时，可通过以下方式配置参数或者证书进行连接。
   * 
   * - 方式一：通过配置证书进行连接。WifiDeviceConfig中关键字段的配置如下：
   *  - preSharedKey无需传参；
   *  - securityType设置为WIFI_SEC_TYPE_WAPI_CERT;
   *  - 在wapiConfig中：
   *    - wapiAsCert传递AS证书的文本内容。
   *    - wapiUserCert传递用户证书的文本内容。
   * - 方式二：通过配置preSharedKey进行连接。WifiDeviceConfig中关键字段的配置如下：
   *   - preSharedKey传参为路由器上设置的密码；
   *   - securityType设置为WIFI_SEC_TYPE_WAPI_PSK。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiWapiConfig {
    /**
     * 加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiPskType: WapiPskType;

    /**
     * AS证书(Authentication Server Certificate，认证服务器证书)。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiAsCert: string;

    /**
     * 用户证书。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiUserCert: string;
  }

  /**
   * IP配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpConfig {
    /**
     * IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * 网关。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * 掩码。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    prefixLength: int;

    /**
     * DNS服务器。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dnsServers: int[];

    /**
     * 域信息。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi Ipv6 configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface Ipv6Config {
    /**
     * IPv6 address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    ipAddress: string;
 
    /**
     * Gate way.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    gateway: string;
 
    /**
     * Prefix length.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    prefixLength: int;
 
    /**
     * DNS servers.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    dnsServers: Array<string>;
 
    /**
     * Domains.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi热点信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiInfoElem {
    /**
     * 元素ID。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    eid: int;

    /**
     * 元素内容。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    content: Uint8Array;
  }

  /**
   * 表示带宽类型的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiChannelWidth {
    /**
     * 20MHZ。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_20MHZ = 0,

    /**
     * 40MHZ。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_40MHZ = 1,

    /**
     * 80MHZ。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ = 2,

    /**
     * 160MHZ。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_160MHZ = 3,

    /**
     * 80MHZ<sup>+</sup>。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ_PLUS = 4,

    /**
     * 无效值
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_INVALID
  }

  /**
   * Wi-Fi热点信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiScanInfo {
    /**
     * 热点的SSID，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * 热点的BSSID，例如：00:11:22:33:44:55。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * 热点的BSSID类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bssidType: DeviceAddressType;

    /**
     * 热点能力。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    capabilities: string;

    /**
     * Wi-Fi加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * 热点的信号强度(dBm)。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Wi-Fi接入点的频段，1表示2.4GHz；2表示5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * Wi-Fi接入点的频率。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Wi-Fi接入点的带宽，具体定义参见[WifiChannelWidth]{@link wifiManager.WifiChannelWidth}。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    channelWidth: int;

    /**
     * 热点的中心频率。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency0: int;

    /**
     * 热点的中心频率。如果热点使用两个不重叠的Wi-Fi信道，则返回两个中心频率，分别用centerFrequency0和centerFrequency1表示。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency1: int;

    /**
     * 信息元素。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    infoElems: Array<WifiInfoElem>;

    /**
     * 时间戳。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 热点支持的最高Wi-Fi级别。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * 热点是否支持hiLink，true表示支持， false表示不支持。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * 是否是HiLinkPro网络。true表示是HiLinkPro网络，false表示不是HiLinkPro网络。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;
  }

  /**
   * 表示加密类型的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiSecurityType {
    /**
     * 无效加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * 开放加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired Equivalent Privacy (WEP)加密类型。候选网络(添加网络配置信息)配置不支持该加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP authentication (EAP)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * Suite-B 192位加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * Opportunistic  Wireless  Encryption (OWE)机会性无线加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI-Cert加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI-PSK加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * Wi-Fi功能。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum WifiCapability {  
    /**
     * Wi-Fi自动启用功能。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_AUTO_ENABLE = 0
  }

  /**
   * WAPI认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum WapiPskType {
    /**
     * ASCII类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_ASCII = 0,

    /**
     * HEX类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_HEX = 1
  }

  /**
   * 表示WIFI频段类型的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiBandType {
    /**
     * 无效频段类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_NONE,

    /**
     * 2.4G频段类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_2G,

    /**
     * 5G频段类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_5G,

    /**
     * 6G频段类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_6G,

    /**
     * 60G频段类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_60G
  }

  /**
   * 表示WIFI标准的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiStandard {
    /**
     * 无效WIFI标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_UNDEFINED,

    /**
     * 802.11a WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11A,

    /**
     * 802.11b WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11B,

    /**
     * 802.11g WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11G,

    /**
     * 802.11n WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11N,

    /**
     * 802.11ac WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AC,

    /**
     * 802.11ax WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AX,

    /**
     * 802.11ad WiFi标准类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AD
  }

  /**
   * Wi-Fi connection information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
   
  interface WifiLinkedInfo {
    /**
     * 热点的SSID（Service Set Identifier，服务集标识符），用于获取当前设备已连接的Wi-Fi热点的公开名称（即无线网络的名称），编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * 热点的BSSID（Basic Service Set Identifier，基本服务集标识符）即无线网络的MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * 网络配置ID。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * 热点的信号强度(dBm)。
     * 
     * RSSI（Received Signal Strength Indicator，接收信号强度指示），其标准取值范围为-127dBm至0dBm。在正常使用场景下，常见有效范围为-100dBm（弱信号）至-30dBm（强信号），接
     * 近0dBm表示信号极强。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Wi-Fi接入点的频段，1表示2.4GHz；2表示5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * Wi-Fi接入点的上行速度，单位Mbps。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    linkSpeed: int;

    /**
     * Wi-Fi接入点的下行速度，单位Mbps。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    rxLinkSpeed: int;

    /**
     * 当前支持的最大上行速率，单位Mbps。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedTxLinkSpeed: int;

    /**
     * 当前支持的最大下行速率，单位Mbps。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedRxLinkSpeed: int;

    /**
     * Wi-Fi接入点的频率。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Wi-Fi接入点是否是隐藏网络，true表示是隐藏网络，false表示不是隐藏网络。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * Wi-Fi接入点是否限制数据量，true表示限制，false表示不限制。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isRestricted: boolean;

    /**
     * 连接负载，值越大表示负载越高。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    chload: int;

    /**
     * 信噪比，单位：dB。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    snr: int;

    /**
     * MAC地址类型。0 - 随机MAC地址，1 - 设备MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macType: int;

    /**
     * 设备的MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * Wi-Fi连接的IP地址。
     * 
     * 1. IP地址在WiFi连接信息和"设置 > 关于本机 > 状态信息"中可以查看。
     * 2. ipAddress值为number类型，需要转换为点分十进制格式的IP地址（如192.168.1.1），具体请参考[IP格式转换](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-connectivity-4)。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * 请求状态。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    suppState: SuppState;

    /**
     * Wi-Fi连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    connState: ConnState;

    /**
     * 当前连接热点的信道带宽。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    channelWidth: WifiChannelWidth;

    /**
     * 当前路由器支持的最高Wi-Fi标准。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    wifiStandard: WifiStandard;

    /**
     * 当前设备连接Wi-Fi后支持的最高协议版本。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * 热点是否支持hilink，true表示支持， false表示不支持。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * 是否是HiLinkPro网络。true表示是HiLinkPro网络，false表示不是HiLinkPro网络。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;

    /**
     * Wi-Fi7连接类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    wifiLinkType?: WifiLinkType;

    /**
     * 。用于指示Wi-Fi的发送（Tx, Transmitting）和接收（Rx, Receiving）功能是否都在正常工作。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    wifiTxRxValid?: boolean;
  }

  /**
   * IPV4信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpInfo {
    /**
     * IP地址。（ipAddress值为number类型，需要转换为IP常用格式，具体请参考
     * [IP格式转换](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-connectivity-4)）。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * 网关。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * 掩码。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    netmask: int;

    /**
     * 主DNS服务器IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDns: int;

    /**
     * 备DNS服务器IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    secondDns: int;

    /**
     * DHCP服务端IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    serverIp: int;

    /**
     * IP地址租用时长，单位：秒。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    leaseDuration: int;
  }

  /**
   * Ipv6信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface Ipv6Info {
    /**
     * 链路Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    linkIpv6Address: string;

    /**
     * 全局Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    globalIpv6Address: string;

    /**
     * 随机全局Ipv6地址。 预留字段，暂不支持。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    randomGlobalIpv6Address: string;

    /**
     * 唯一本地Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueIpv6Address?: string;

    /**
     * 随机唯一本地Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    randomUniqueIpv6Address?: string;

    /**
     * 网关。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    gateway: string;

    /**
     * 网络掩码。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    netmask: string;

    /**
     * 主DNS服务器Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    primaryDNS: string;

    /**
     * 备DNS服务器Ipv6地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    secondDNS: string;
  }

  /**
   * 连接Wi-Fi设置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface ConnectSettings {  
    /**
     * 候选网络配置的ID。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    networkId: int;
  
    /**
     * 连接时是否提示用户进行信任确认，true表示与connectToCandidateConfigWithUserAction接口功能一致，false表示不提示用户进行信任确认，默认false 。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    withUserAction?: boolean;
  
    /**
     * 提示用户进行信任确认弹框显示时间（单位秒）有效值范围1-30秒，默认10秒 。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userActionTimeout?: int;
  
    /**
     * 是否添加网络到系统，true表示将建议网络添加到系统网络中，false表示保持建议网络，默认false 。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    addNetworkToSystem?: boolean;
  }

  /**
   * 热点配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HotspotConfig {
    /**
     * 热点的SSID，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * 加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * 热点的带宽。1: 2.4G, 2: 5G, 3: 双模频段
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * 热点的信道（2.4G：1~14,5G：7~196）。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    channel?: int;

    /**
     * 热点的密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * 最大设备连接数。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    maxConn: int;

    /**
     * DHCP服务器的IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;
  }

  /**
   * 接入的设备信息。包含连接到Wi-Fi网络的设备详细信息。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface StationInfo {
    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * MAC地址类型。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    macAddressType?: DeviceAddressType;

    /**
     * IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: string;
  }

  /**
   * 表示IP类型的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum IpType {
    /**
     * 静态IP。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC,

    /**
     * 通过DHCP获取。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DHCP,

    /**
     * 未指定。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * 表示请求状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SuppState {
    /**
     * 已断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * 接口禁用。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERFACE_DISABLED,

    /**
     * 未激活。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE,

    /**
     * 扫描中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * 认证中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * 关联中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATING,

    /**
     * 已关联。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATED,

    /**
     * 四次握手。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * 组握手。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GROUP_HANDSHAKE,

    /**
     * 所有认证已完成。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMPLETED,

    /**
     * 连接建立失败。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNINITIALIZED,

    /**
     * 无效值。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID
  }

  /**
   * 表示Wi-Fi连接状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ConnState {
    /**
     * 设备正在搜索可用的AP。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * 正在建立Wi-Fi连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTING,

    /**
     * Wi-Fi连接正在认证中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * 正在获取Wi-Fi连接的IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    OBTAINING_IPADDR,

    /**
     * Wi-Fi连接已建立。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED,

    /**
     * Wi-Fi连接正在断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTING,

    /**
     * Wi-Fi连接已断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * Wi-Fi连接建立失败。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * 表示P2P设备信息。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pDevice {
    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 设备MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * 设备MAC地址类型。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * 主设备类型。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDeviceType: string;

    /**
     * 设备状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * 群组能力。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupCapabilities: int;
  }

  /**
   * 表示P2P配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2PConfig {
    /**
     * 设备地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * 设备地址类型。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * 网络ID。创建群组时-1表示创建临时组，-2表示创建永久组。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * 群组密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * 群组名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * 群组带宽。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goBand: GroupOwnerBand;

    /**
     * 群组频率，若群组带宽和群组频率同时添加的情况下，当频率合法时（频率在2400MHz-2500MHz或者4900MHz-5900MHz范围内认为合法），以频率为准，否则以带宽为准。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 dynamic&static
     */
    goFreq?: int;
  }

  /**
   * 表示P2P群组相关信息。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pGroupInfo {
    /**
     * 是否是群主。true表示是群主，false表示不是群主。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isP2pGo: boolean;

    /**
     * 群组的设备信息。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    ownerInfo: WifiP2pDevice;

    /**
     * 群组密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * 接口名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     */
    interface: string;

    /**
     * Interface name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 static
     */
    interfaceName: string;

    /**
     * 群组名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * 网络ID。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * 群组的频率。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * 接入的设备列表信息。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    clientDevices: WifiP2pDevice[];

    /**
     * 群组IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goIpAddress: string;
  }

  /**
   * 表示P2P连接状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pConnectState {
    /**
     * 断开状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED = 0,

    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 1
  }

  /**
   * 提供Wi-Fi连接的相关信息。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pLinkedInfo {
    /**
     * P2P连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    connectState: P2pConnectState;

    /**
     * true表示是群主，false表示不是群主。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isGroupOwner: boolean;

    /**
     * 群组IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupOwnerAddr: string;
  }

  /**
   * 表示设备状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pDeviceStatus {
    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 0,

    /**
     * 邀请状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    INVITED = 1,

    /**
     * 失败状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * 可用状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    AVAILABLE = 3,

    /**
     * 不可用状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 4
  }

  /**
   * 表示群组带宽的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum GroupOwnerBand {
  /**
     * 自动模式。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_AUTO = 0,

  /**
     * 2.4GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_2GHZ = 1,

  /**
     * 5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_5GHZ = 2
  }
  
  /**
   * 随机MAC地址是否被禁用。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } true:禁用随机MAC地址; false:未禁用随机MAC地址。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function isRandomMacDisabled(): boolean;

  /**
   * 发起WiFi网络探测。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function startWifiDetection(): void;

  /**
   * 设置Wi-Fi能力。
   *
   * @permission ohos.permission.SET_WIFI_CONFIG
   * @param { WifiCapability } capability - wifi能力枚举。
   * @param { boolean } enable - 是否开启Wi-Fi能力，true表示开启，false表示关闭。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setWifiCapability(capability: WifiCapability, enable: boolean): void;

  /**
   * 获取Wi-Fi支持的能力。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiCapability } capability - wifi能力枚举。
   * @returns { boolean } true:已使能， false:未使能。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getWifiCapability(capability: WifiCapability): boolean;

  /**
   * 查询是否可用Wi-Fi网络。
   *
   * @returns { boolean } Wi-Fi是否可用。true表示Wi-Fi可用， false表示Wi-Fi不可用。
   * @throws { BusinessError } 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isWlanSupported(): boolean;
}

export default wifiManager;